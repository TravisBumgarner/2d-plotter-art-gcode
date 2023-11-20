from gcode2dplotterart import Plotter2D

plotter = Plotter2D(
    # Specify the dimensions of your plotter
    x_min=0,
    x_max=200,
    y_min=0,
    y_max=200,
    feed_rate=10000,
    # Folder output is located in `output_directory/title`
    title="Plotter2D Quickstart",
    output_directory="./output",
    # Give a warning if a plotted point is outside the plotting device's dimensions.
    handle_out_of_bounds="Warning",
)

# Setup a layer per plotting instrument used
black_pen_layer = "black_pen_layer"
blue_marker_layer = "blue_marker_layer"
green_marker_layer = "green_marker_layer"

# Create the layers
plotter.add_layer(black_pen_layer, color="black", line_width=1.0)
plotter.add_layer(blue_marker_layer, color="blue", line_width=4.0)
plotter.add_layer(green_marker_layer, color="#027F00", line_width=4.0)

# Add some dots, lines, shapes, and paths.
plotter.layers[black_pen_layer].add_rectangle(
    x_start=10, y_start=15, x_end=40, y_end=50
)
plotter.layers[black_pen_layer].add_point(x=30, y=40)
plotter.layers[blue_marker_layer].add_circle(x_center=10, y_center=30, radius=10)
plotter.layers[blue_marker_layer].add_rectangle(x_start=50, y_start=50, x_end=75, y_end=75)
plotter.layers[green_marker_layer].add_path([(10, 10), (20, 25), (30, 15), (1, 100)])
plotter.layers[green_marker_layer].add_line(x_start=70, y_start=80, x_end=70, y_end=15)

# Generate a graphical preview to get a rough idea of what will be plotted.
plotter.preview()

# Output creation to G-Code files to be used in plotting.
plotter.save()