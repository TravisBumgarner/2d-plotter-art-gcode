from typing import List, Tuple, Union, Dict, Optional
from typing_extensions import Self
import math
from abc import ABC, abstractmethod
import secrets

from .types import THandleOutOfBounds, TPlottingPhase
from .InstructionWithArguments import (
    InstructionPoint,
    Instruction3DPrinterPlottingHeight,
    InstructionComment,
    InstructionFeedRate,
    InstructionPause,
    Instruction3DPrinterNavigationHeight,
)

from .SimpleInstruction import (
    Instruction2DPlotterNavigationHeight,
    Instruction2DPlotterPlottingHeight,
    InstructionUnitsMM,
    InstructionProgramEnd,
)

SETUP_INSTRUCTIONS_DISPLAY = """
######################################################################################################
##############################            SETUP INSTRUCTIONS            ##############################
######################################################################################################"""

PLOTTING_INSTRUCTIONS_DISPLAY = """
######################################################################################################
##############################           PLOTTING INSTRUCTIONS          ##############################
######################################################################################################"""

TEARDOWN_INSTRUCTIONS_DISPLAY = """
######################################################################################################
##############################           TEARDOWN INSTRUCTIONS          ##############################
######################################################################################################"""

TInstructionUnion = Union[
    InstructionPoint,
    InstructionComment,
    InstructionFeedRate,
    Instruction2DPlotterPlottingHeight,
    Instruction2DPlotterNavigationHeight,
    InstructionPause,
    InstructionUnitsMM,
    InstructionProgramEnd,
    Instruction3DPrinterPlottingHeight,
    Instruction3DPrinterNavigationHeight,
]


class Layer(ABC):
    instructions: Dict[TPlottingPhase, List[TInstructionUnion]]

    def __init__(
        self,
        x_min: float,
        y_min: float,
        x_max: float,
        y_max: float,
        feed_rate: float,
        handle_out_of_bounds: THandleOutOfBounds,
        color: Optional[str],
        line_width: float,
        preview_only: bool = False,
    ):
        self.color = color if color else f"#{secrets.token_hex(3, )}"

        self.instructions: Dict[TPlottingPhase, TInstructionUnion] = {
            "setup": [],
            "plotting": [],
            "teardown": [],
        }
        self.preview_only = preview_only

        # For calculating if a point is out of the range of the plotter.
        self.plotter_x_min = x_min
        self.plotter_x_max = x_max
        self.plotter_y_min = y_min
        self.plotter_y_max = y_max

        # For plotting a bounding box before printing.
        self.layer_x_min = x_max
        self.layer_x_max = x_min
        self.layer_y_min = y_max
        self.layer_y_max = y_min

        self.feed_rate = feed_rate

        self.handle_out_of_bounds = handle_out_of_bounds

        self.line_width = line_width

        self.add_comment(SETUP_INSTRUCTIONS_DISPLAY, "setup")
        self.add_comment(PLOTTING_INSTRUCTIONS_DISPLAY, "plotting")
        self.add_comment(TEARDOWN_INSTRUCTIONS_DISPLAY, "teardown")

        self._add_instruction(InstructionUnitsMM(), "setup")

        self.set_feed_rate(feed_rate, "setup")

        self._add_instruction(InstructionProgramEnd(), "teardown")

    def _update_max_and_min(self, x: float, y: float) -> None:
        """
        Updates the current max and min values for the bounding box of the layer.

        Args:
        - x : (float) The x-coordinate of the point to add.
        - y : (float) The y-coordinate of the point to add.
        """
        if x < self.layer_x_min:
            self.layer_x_min = x
        if x > self.layer_x_max:
            self.layer_x_max = x
        if y < self.layer_y_min:
            self.layer_y_min = y
        if y > self.layer_y_max:
            self.layer_y_max = y

    def get_min_and_max_points(self) -> Dict[str, float]:
        """
        Find the min and max plot points of the layer.

        Returns:
        - dict : {x_min (float), y_min (float), x_max (float), y_max (float)}
            A dictionary containing the min and max plot points of the layer.
        """

        return {
            "x_min": self.layer_x_min,
            "y_min": self.layer_y_min,
            "x_max": self.layer_x_max,
            "y_max": self.layer_y_max,
        }

    def set_feed_rate(
        self,
        feed_rate: float,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        """Set the speed at which the plotter head moves.

        Args:
        - feed_rate (float) : The feed rate to set.
        - plotting_phase (`setup` | `plotting` | `teardown`, optional) : The phase of plotting to send the instruction to. Defaults to `plotting`.

        Returns:
        - Layer : The Layer object. Allows for chaining of add methods.
        """

        self._add_instruction(InstructionFeedRate(feed_rate), plotting_phase)
        return self

    @abstractmethod
    def set_mode_to_plotting(
        self,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        """
        Connect plotting instrument to plotting surface. Should be used when starting a path.

        Args:
        - plotting_phase (`setup` | `plotting` | `teardown`, optional) : The phase of plotting to send the instruction to. Defaults to `plotting`.

        Returns:
        - Layer : The Layer object. Allows for chaining of add methods.
        """

        pass

    @abstractmethod
    def set_mode_to_navigation(
        self,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        """
        Separate plotting instrument from plotting surface. Should be used once plotting a path is
        complete before moving on to the next path.

        Args:
        - plotting_phase (`setup` | `plotting` | `teardown`, optional) : The phase of plotting to send the instruction to. Defaults to `plotting`.

        Returns:
        - Layer : The Layer object. Allows for chaining of add methods.
        """

        pass

    def _add_coordinate(
        self, x: float, y: float, plotting_phase: TPlottingPhase
    ) -> Self:
        """
        Add a coordinate to the layer. Typically not used directly, instead use one of the other add methods.
        """
        if (
            x > self.plotter_x_max
            or y > self.plotter_y_max
            or x < self.plotter_x_min
            or y < self.plotter_y_min
        ):
            if self.handle_out_of_bounds == "Warning":
                print("Failed to add point, outside dimensions of plotter", x, y)
                return self
            elif self.handle_out_of_bounds == "Error":
                raise ValueError(
                    "Failed to add point, outside dimensions of plotter", x, y
                )
            else:
                raise ValueError(
                    "Invalid value for handle_out_of_bounds received",
                    self.handle_out_of_bounds,
                )
        self._update_max_and_min(x, y)

        point = InstructionPoint(self.feed_rate, x, y)
        self._add_instruction(point, plotting_phase)
        return self

    def add_point(
        self,
        x: float,
        y: float,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        """
        Add a point to the layer.

        Args:
        - x (float) : The x-coordinate of the point.
        - y (float) : The y-coordinate of the point.
        - plotting_phase (`setup` | `plotting` | `teardown`, optional): The phase of plotting to send the instruction to. Defaults to `plotting`.

        Returns:
        - Layer : The Layer object. Allows for chaining of add methods.
        """

        self.add_comment(f"Point: {x}, {y}", plotting_phase)
        self.add_path([(x, y)], plotting_phase)
        return self

    def add_line(
        self,
        x_start: float,
        y_start: float,
        x_end: float,
        y_end: float,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        """
        Add a line to the layer.

        Args:
        - x_start (float) : The x-coordinate of the starting point of the line.
        - y_start (float) : The y-coordinate of the starting point of the line.
        - x_end (float) : The x-coordinate of the ending point of the line.
        - y_end (float) : The y-coordinate of the ending point of the line.
        - plotting_phase (`setup` | `plotting` | `teardown`, optional) : The phase of plotting to send the instruction to. Defaults to `plotting`.
        """

        points = [(x_start, y_start), (x_end, y_end)]
        self.add_comment(
            f"Line: {x_start}, {y_start}, {x_end}, {y_end}", plotting_phase
        )
        self.add_path(points, plotting_phase)
        return self

    def add_path(
        self,
        points: List[Tuple[float, float]],
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        """
        Add a path to the layer. A path is a series of points that are connected by lines.

        Args:
        - points (List[Tuple[float, float]]) : An array of points to add.
        - plotting_phase (`setup` | `plotting` | `teardown`, optional) : The phase of plotting to send the instruction to. Defaults to `plotting`.

        Returns:
        - Layer : The Layer object. Allows for chaining of add methods.
        """

        self.add_comment(f"Path: {points}", plotting_phase)
        for index, [x, y] in enumerate(points):
            self._add_coordinate(x, y, plotting_phase)
            if index == 0 and not self.preview_only:
                self.set_mode_to_plotting(plotting_phase=plotting_phase)
        self.set_mode_to_navigation(plotting_phase=plotting_phase)
        return self

    def _add_instruction(
        self, instruction: TInstructionUnion, plotting_phase: TPlottingPhase
    ) -> Self:
        if not isinstance(instruction, InstructionComment):
            self.instructions[plotting_phase].append(InstructionComment(instruction))
        self.instructions[plotting_phase].append(instruction)
        return self

    def add_comment(self, text: str, plotting_phase: TPlottingPhase) -> Self:
        """Add a comment to the layer.

        Args:
        - text (str): The text to add.
        - plotting_phase (`setup` | `plotting` | `teardown`, optional): The phase of plotting to send the instruction to.

        Returns:
        - Layer: The Layer object. Allows for chaining of add methods.
        """

        lines = text.split("\n")
        for line in lines:
            self._add_instruction(InstructionComment(line), plotting_phase)

        return self

    def add_rectangle(
        self,
        x_start: float,
        y_start: float,
        x_end: float,
        y_end: float,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        """
        Adds a rectangle to the layer.

        Args:
        - x_start (float) : The x-coordinate of the starting point of the rectangle.
        - y_start (float) : The y-coordinate of the starting point of the rectangle.
        - x_end (float) : The x-coordinate of the ending point of the rectangle.
        - y_end (float) : The y-coordinate of the ending point of the rectangle.
        - plotting_phase (`setup` | `plotting` | `teardown`, optional) : The phase of plotting to send theinstruction to. Defaults to `plotting`.

        Returns:
        - Layer : The Layer object. Allows for chaining of add methods.
        """
        self.add_comment(
            f"Rectangle: {x_start}, {y_start}, {x_end}, {y_end}", plotting_phase
        )
        points = [
            (x_start, y_start),
            (x_start, y_end),
            (x_end, y_end),
            (x_end, y_start),
            (x_start, y_start),
        ]
        self.add_path(points, plotting_phase)
        return self

    def add_circle(
        self,
        x_center: float,
        y_center: float,
        radius: float,
        num_points: int = 36,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        """
        Adds a circle to the layer.

        Args:
        - x_center (float) : The x-coordinate of the center of the circle.
        - y_center (float) : The y-coordinate of the center of the circle.
        - radius (float) : The radius of the circle.
        - num_points (int) : The number of points to use to approximate the circle. Default is 36.
        - plotting_phase (float) : The phase of plotting to send the instruction to. Default is 'plotting'.

        Returns:
        - Layer : The Layer object. Allows for chaining of add methods.
        """

        self.add_comment(
            f"Circle: {x_center}, {y_center}, {radius}, {num_points}", plotting_phase
        )

        # Calculate angle step between points to approximate the circle
        angle_step = 360.0 / num_points

        points: List[Tuple[float, float]] = []
        for point in range(num_points):
            angle = math.radians(point * angle_step)
            x = x_center + radius * math.cos(angle)
            y = y_center + radius * math.sin(angle)
            points.append((x, y))
        self.add_path(points, plotting_phase)
        return self

    def save(self, file_path: str) -> None:
        """
        Saves the layer instructions to a file at the specified file path.

        Args:
        - file_path (str) : The path to the file where the layer instructions will be saved.
        """
        with open(file_path, "w") as file:
            file.write(
                "\n".join(
                    [
                        instruction.to_g_code()
                        for instruction in self.instructions["setup"]
                    ]
                )
            )
            file.write(
                "\n".join(
                    [
                        instruction.to_g_code()
                        for instruction in self.instructions["plotting"]
                    ]
                )
            )
            file.write(
                "\n".join(
                    [
                        instruction.to_g_code()
                        for instruction in self.instructions["teardown"]
                    ]
                )
            )

    def preview_paths(self) -> List[List[Tuple[float, float]]]:
        """
        Generate an array of paths for the given layer. This will be used by the `Plotter`
        to generate a preview graph of the plot. Only looks at instructions during the `plotting`
        phase.

        Returns:
        - List[List[Tuple[float, float]]]
            An array of paths for the given layer.
        """
        is_plotting = False  # Layer is set to initially be in navigation mode.
        paths: List[List[Tuple[float, float]]] = []
        current_path: List[Tuple[float, float]] = []
        # Before the plotter begins plotting, it needs to move to a point, switch to plotting mode, and begin plotting.
        # This will hold the most recent navigation point before the switch to plotting mode is made.
        previous_navigation_point = None

        for instruction in self.instructions["plotting"]:
            if isinstance(
                instruction, Instruction2DPlotterNavigationHeight
            ) or isinstance(instruction, Instruction3DPrinterNavigationHeight):
                is_plotting = False
                if len(current_path) > 0:
                    paths.append(current_path)
                    current_path = []

            if isinstance(
                instruction, Instruction2DPlotterPlottingHeight
            ) or isinstance(instruction, Instruction3DPrinterPlottingHeight):
                is_plotting = True
                if previous_navigation_point:
                    current_path.append(previous_navigation_point)
                    previous_navigation_point = None

            if not is_plotting and isinstance(instruction, InstructionPoint):
                previous_navigation_point = (instruction.x, instruction.y)

            if is_plotting and isinstance(instruction, InstructionPoint):
                current_path.append((instruction.x, instruction.y))

        return paths

    def get_plotting_data(self) -> Dict[str, List[str]]:
        """
        Get current plotting data.

        Returns:
        - dict: {"setup": [], "plotting": [], "teardown": []}
            A dictionary containing the setup, plotting, and teardown instructions as an array of G-Code
            instruction strings.
        """
        return {
            "setup": [
                instruction.to_g_code() for instruction in self.instructions["setup"]
            ],
            "plotting": [
                instruction.to_g_code() for instruction in self.instructions["plotting"]
            ],
            "teardown": [
                instruction.to_g_code() for instruction in self.instructions["teardown"]
            ],
        }


class Layer2D(Layer):
    """
    `Layer2D` is a layer for a 2D plotter.
    It is used in conjunction with a `Plotter2D` to generate a plot. Layers are added via the `Plotter2D.add_layer` method.

    `Layer2D` extends from the abstract class `Layer`.
    """

    def __init__(
        self,
        x_min: float,
        y_min: float,
        x_max: float,
        y_max: float,
        feed_rate: float,
        handle_out_of_bounds: THandleOutOfBounds,
        color: Optional[str],
        line_width,
        preview_only: bool = False,
    ) -> None:
        """
        Args:
        - title (str) : The title of the work of art.
        - x_min (float) : The minimum X-coordinate of the plotter.
        - y_min (float) : The minimum Y-coordinate of the plotter.
        - x_max (float) : The maximum X-coordinate of the plotter.
        - y_max (float) : The maximum Y-coordinate of the plotter.
        - feed_rate (float) : The feed rate for the plotter.
        - handle_out_of_bounds (`Warning` | `Error` | `Silent`, optional):
            How to handle out-of-bounds points.
            `Warning` will print a warning, skip the point, and continue.
            `Error` will throw an error and stop.
            `Silent` will skip the point and continue.
            Defaults to `Warning`.
        - color (str, optional) : The color of the layer. Defaults to a random color.
        - line_width (float) : The width of the line
        - preview_only (bool, optional) : If true, the layer will not be plotted. Defaults to False.
        """
        super().__init__(
            x_min=x_min,
            y_min=y_min,
            x_max=x_max,
            y_max=y_max,
            feed_rate=feed_rate,
            handle_out_of_bounds=handle_out_of_bounds,
            preview_only=preview_only,
            line_width=line_width,
            color=color,
        )

        self.set_mode_to_navigation("setup")

    def set_mode_to_plotting(
        self,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        self._add_instruction(Instruction2DPlotterPlottingHeight(), plotting_phase)
        self._add_instruction(InstructionPause(), plotting_phase)

        return self

    def set_mode_to_navigation(
        self,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        self._add_instruction(Instruction2DPlotterNavigationHeight(), plotting_phase)
        self._add_instruction(InstructionPause(), plotting_phase)

        return self


class Layer3D(Layer):
    """
    `Layer3D` is a layer for a 3D plotter.
    It is used in conjunction with a `Plotter3D` to generate a plot. Layers are added via the `Plotter3D.add_layer` method.

    `Layer3D` extends from the abstract class `Layer`.
    """

    z_plotting_height: float
    z_navigation_height: float

    def __init__(
        self,
        x_min: float,
        y_min: float,
        x_max: float,
        y_max: float,
        z_plotting_height: float,
        z_navigation_height: float,
        feed_rate: float,
        handle_out_of_bounds: THandleOutOfBounds,
        color: Optional[str],
        line_width: float,
        preview_only: bool = False,
    ) -> None:
        """
        Args:
        - title (str) : The title of the work of art.
        - x_min (float) : The minimum X-coordinate of the plotter.
        - y_min (float) : The minimum Y-coordinate of the plotter.
        - x_max (float) : The maximum X-coordinate of the plotter.
        - y_max (float) : The maximum Y-coordinate of the plotter.
        - z_plotting_height (float) : The height of the drawing instrument when plotting on the plotting surface.
        - z_navigation_height (float) : The height of the drawing instrument when navigating to a new location.
        - feed_rate (float) : The feed rate for the plotter.
        - handle_out_of_bounds (`Warning` | `Error` | `Silent`, optional):
            How to handle out-of-bounds points.
            `Warning` will print a warning, skip the point, and continue.
            `Error` will throw an error and stop.
            `Silent` will skip the point and continue.
            Defaults to `Warning`.
        - color (str, optional) : The color of the layer. Defaults to a random color.
        - line_width (float) : The width of the line
        - preview_only (bool, optional) : If true, the layer will not be plotted. Defaults to False.
        """
        super().__init__(
            x_min=x_min,
            y_min=y_min,
            x_max=x_max,
            y_max=y_max,
            feed_rate=feed_rate,
            handle_out_of_bounds=handle_out_of_bounds,
            preview_only=preview_only,
            line_width=line_width,
            color=color,
        )
        self.z_plotting_height = z_plotting_height
        self.z_navigation_height = z_navigation_height

        self.set_mode_to_navigation("setup")

    def set_mode_to_plotting(
        self,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        self._add_instruction(
            Instruction3DPrinterPlottingHeight(
                z_plotting_height=self.z_plotting_height
            ),
            plotting_phase,
        )
        self._add_instruction(InstructionPause(), plotting_phase)

        return self

    def set_mode_to_navigation(
        self,
        plotting_phase: TPlottingPhase = "plotting",
    ) -> Self:
        self._add_instruction(
            Instruction3DPrinterNavigationHeight(
                z_navigating_height=self.z_navigation_height
            ),
            plotting_phase,
        )
        self._add_instruction(InstructionPause(), plotting_phase)

        return self
