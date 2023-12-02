"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[717],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,p=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),u=s(n),c=l,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function h(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r[u]="string"==typeof t?t:l,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1392:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const o={},i="Layer2D",r={unversionedId:"api/Layer2D",id:"api/Layer2D",title:"Layer2D",description:"Layer2D is a layer for a 2D plotter.",source:"@site/docs/api/Layer2D.mdx",sourceDirName:"api",slug:"/api/Layer2D",permalink:"/gcode2dplotterart/docs/api/Layer2D",draft:!1,editUrl:"https://github.com/TravisBumgarner/gcode2dplotterart/tree/main/gcode2dplotterart-website/docs/api/Layer2D.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/gcode2dplotterart/docs/category/api"},next:{title:"Layer3D",permalink:"/gcode2dplotterart/docs/api/Layer3D"}},p={},s=[{value:"<strong>init</strong>",id:"init",level:2},{value:"add_circle",id:"add_circle",level:2},{value:"add_comment",id:"add_comment",level:2},{value:"add_line",id:"add_line",level:2},{value:"add_path",id:"add_path",level:2},{value:"add_point",id:"add_point",level:2},{value:"add_rectangle",id:"add_rectangle",level:2},{value:"get_min_and_max_points",id:"get_min_and_max_points",level:2},{value:"get_plotting_data",id:"get_plotting_data",level:2},{value:"preview_paths",id:"preview_paths",level:2},{value:"save",id:"save",level:2},{value:"set_feed_rate",id:"set_feed_rate",level:2},{value:"set_mode_to_navigation",id:"set_mode_to_navigation",level:2},{value:"set_mode_to_plotting",id:"set_mode_to_plotting",level:2}],d={toc:s},u="wrapper";function m(t){let{components:e,...n}=t;return(0,l.kt)(u,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"layer2d"},"Layer2D"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Layer2D")," is a layer for a 2D plotter.\nIt is used in conjunction with a ",(0,l.kt)("inlineCode",{parentName:"p"},"Plotter2D")," to generate a plot. Layers are added via the ",(0,l.kt)("inlineCode",{parentName:"p"},"Plotter2D.add_layer")," method."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Layer2D")," extends from the abstract class ",(0,l.kt)("inlineCode",{parentName:"p"},"Layer"),"."),(0,l.kt)("h2",{id:"init"},(0,l.kt)("strong",{parentName:"h2"},"init")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"__init__(\n  self\n  x_min: float\n  y_min: float\n  x_max: float\n  y_max: float\n  feed_rate: float\n  handle_out_of_bounds: Union[Literal['Warning']\n  Literal['Error']]\n  color: Optional[str]\n  line_width: float\n  include_comments: bool\n  preview_only: bool = False\n)\n ->  None\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"title (str) : The title of the work of art."),(0,l.kt)("li",{parentName:"ul"},"x_min (float) : The minimum X-coordinate of the plotter."),(0,l.kt)("li",{parentName:"ul"},"y_min (float) : The minimum Y-coordinate of the plotter."),(0,l.kt)("li",{parentName:"ul"},"x_max (float) : The maximum X-coordinate of the plotter."),(0,l.kt)("li",{parentName:"ul"},"y_max (float) : The maximum Y-coordinate of the plotter."),(0,l.kt)("li",{parentName:"ul"},"feed_rate (float) : The feed rate for the plotter."),(0,l.kt)("li",{parentName:"ul"},"handle_out_of_bounds (",(0,l.kt)("inlineCode",{parentName:"li"},"Warning")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Error")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Silent"),", optional):\nHow to handle out-of-bounds points.\n",(0,l.kt)("inlineCode",{parentName:"li"},"Warning")," will print a warning, skip the point, and continue.\n",(0,l.kt)("inlineCode",{parentName:"li"},"Error")," will throw an error and stop.\n",(0,l.kt)("inlineCode",{parentName:"li"},"Silent")," will skip the point and continue.\nDefaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"Warning"),"."),(0,l.kt)("li",{parentName:"ul"},"color (str, optional) : The color of the layer. Defaults to a random color."),(0,l.kt)("li",{parentName:"ul"},"line_width (float) : The width of the line being plotted."),(0,l.kt)("li",{parentName:"ul"},"preview_only (bool, optional) : If true, the layer will not be plotted. Defaults to False."),(0,l.kt)("li",{parentName:"ul"},"include_comments (bool, optional) : Whether to include comments in the G-Code files. Useful for learning about G-Code and debugging.")),(0,l.kt)("h2",{id:"add_circle"},"add_circle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"add_circle(\n  self\n  x_center: float\n  y_center: float\n  radius: float\n  num_points: int = 36\n  instruction_phase: Union[Literal['setup']\n  Literal['plotting']\n  Literal['teardown']] = 'plotting'\n)\n ->  Self\n")),(0,l.kt)("p",null,"Adds a circle to the layer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x_center (float) : The x-coordinate of the center of the circle."),(0,l.kt)("li",{parentName:"ul"},"y_center (float) : The y-coordinate of the center of the circle."),(0,l.kt)("li",{parentName:"ul"},"radius (float) : The radius of the circle."),(0,l.kt)("li",{parentName:"ul"},"num_points (int) : The number of points to use to approximate the circle. Default is 36."),(0,l.kt)("li",{parentName:"ul"},"instruction_phase (float) : The instruction phase of plotting to send the instruction to. Default is 'plotting'.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Layer : The Layer object. Allows for chaining of add methods.")),(0,l.kt)("h2",{id:"add_comment"},"add_comment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"add_comment(\n  self\n  text: str\n  instruction_phase: Union[Literal['setup']\n  Literal['plotting']\n  Literal['teardown']]\n)\n ->  Self\n")),(0,l.kt)("p",null,"Add a comment to the layer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"text (str): The text to add."),(0,l.kt)("li",{parentName:"ul"},"instruction_phase (",(0,l.kt)("inlineCode",{parentName:"li"},"setup")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"teardown"),", optional): The instruction phase of plotting to send the instruction to.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Layer: The Layer object. Allows for chaining of add methods.")),(0,l.kt)("h2",{id:"add_line"},"add_line"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"add_line(\n  self\n  x_start: float\n  y_start: float\n  x_end: float\n  y_end: float\n  instruction_phase: Union[Literal['setup']\n  Literal['plotting']\n  Literal['teardown']] = 'plotting'\n)\n ->  Self\n")),(0,l.kt)("p",null,"Add a line to the layer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x_start (float) : The x-coordinate of the starting point of the line."),(0,l.kt)("li",{parentName:"ul"},"y_start (float) : The y-coordinate of the starting point of the line."),(0,l.kt)("li",{parentName:"ul"},"x_end (float) : The x-coordinate of the ending point of the line."),(0,l.kt)("li",{parentName:"ul"},"y_end (float) : The y-coordinate of the ending point of the line."),(0,l.kt)("li",{parentName:"ul"},"instruction_phase (",(0,l.kt)("inlineCode",{parentName:"li"},"setup")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"teardown"),", optional) :\nThe instruction phase of plotting to send the instruction to. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting"),".")),(0,l.kt)("h2",{id:"add_path"},"add_path"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"add_path(\n  self\n  points: List[Tuple[float\n  float]]\n  instruction_phase: Union[Literal['setup']\n  Literal['plotting']\n  Literal['teardown']] = 'plotting'\n)\n ->  Self\n")),(0,l.kt)("p",null,"Add a path to the layer. A path is a series of points that are connected by lines."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"points (List[Tuple","[float, float]","]) : An array of points to add."),(0,l.kt)("li",{parentName:"ul"},"instruction_phase (",(0,l.kt)("inlineCode",{parentName:"li"},"setup")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"teardown"),", optional) : The instruction\nphase of plotting to send the instruction to. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Layer : The Layer object. Allows for chaining of add methods.")),(0,l.kt)("h2",{id:"add_point"},"add_point"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"add_point(\n  self\n  x: float\n  y: float\n  instruction_phase: Union[Literal['setup']\n  Literal['plotting']\n  Literal['teardown']] = 'plotting'\n)\n ->  Self\n")),(0,l.kt)("p",null,"Add a point to the layer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x (float) : The x-coordinate of the point."),(0,l.kt)("li",{parentName:"ul"},"y (float) : The y-coordinate of the point."),(0,l.kt)("li",{parentName:"ul"},"instruction_phase (",(0,l.kt)("inlineCode",{parentName:"li"},"setup")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"teardown"),", optional): The instruction phase of plotting to send the instruction to. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Layer : The Layer object. Allows for chaining of add methods.")),(0,l.kt)("h2",{id:"add_rectangle"},"add_rectangle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"add_rectangle(\n  self\n  x_start: float\n  y_start: float\n  x_end: float\n  y_end: float\n  instruction_phase: Union[Literal['setup']\n  Literal['plotting']\n  Literal['teardown']] = 'plotting'\n)\n ->  Self\n")),(0,l.kt)("p",null,"Adds a rectangle to the layer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x_start (float) : The x-coordinate of the starting point of the rectangle."),(0,l.kt)("li",{parentName:"ul"},"y_start (float) : The y-coordinate of the starting point of the rectangle."),(0,l.kt)("li",{parentName:"ul"},"x_end (float) : The x-coordinate of the ending point of the rectangle."),(0,l.kt)("li",{parentName:"ul"},"y_end (float) : The y-coordinate of the ending point of the rectangle."),(0,l.kt)("li",{parentName:"ul"},"instruction_phase (",(0,l.kt)("inlineCode",{parentName:"li"},"setup")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"teardown"),", optional) : The instruction phase of plotting to send the\ninstruction to. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Layer : The Layer object. Allows for chaining of add methods.")),(0,l.kt)("h2",{id:"get_min_and_max_points"},"get_min_and_max_points"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"get_min_and_max_points(\n  self\n)\n ->  Dict[str, float]\n")),(0,l.kt)("p",null,"Find the min and max plot points of the layer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dict : {x_min (float), y_min (float), x_max (float), y_max (float)}\nA dictionary containing the min and max plot points of the layer.")),(0,l.kt)("h2",{id:"get_plotting_data"},"get_plotting_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"get_plotting_data(\n  self\n)\n ->  Dict[str, List[str]]\n")),(0,l.kt)("p",null,"Get current plotting data."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'dict: {"setup": [], "plotting": [], "teardown": []}\nA dictionary containing the setup, plotting, and teardown instructions as an array of G-Code\ninstruction strings.')),(0,l.kt)("h2",{id:"preview_paths"},"preview_paths"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"preview_paths(\n  self\n)\n ->  List[List[Tuple[float, float]]]\n")),(0,l.kt)("p",null,"Generate an array of paths for the given layer. This will be used by the ",(0,l.kt)("inlineCode",{parentName:"p"},"Plotter"),"\nto generate a preview graph of the plot. Only looks at instructions during the ",(0,l.kt)("inlineCode",{parentName:"p"},"plotting"),"\nphase."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List[List[Tuple","[float, float]","]]\nAn array of paths for the given layer.")),(0,l.kt)("h2",{id:"save"},"save"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"save(\n  self\n  file_path: str\n)\n ->  None\n")),(0,l.kt)("p",null,"Saves the layer instructions to a file at the specified file path."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"file_path (str) : The path to the file where the layer instructions will be saved.")),(0,l.kt)("h2",{id:"set_feed_rate"},"set_feed_rate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"set_feed_rate(\n  self\n  feed_rate: float\n  instruction_phase: Union[Literal['setup']\n  Literal['plotting']\n  Literal['teardown']] = 'plotting'\n)\n ->  Self\n")),(0,l.kt)("p",null,"Set the speed at which the plotter head moves."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"feed_rate (float) : The feed rate to set."),(0,l.kt)("li",{parentName:"ul"},"instruction_phase (",(0,l.kt)("inlineCode",{parentName:"li"},"setup")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"teardown"),", optional) : The instruction phase of plotting to send the instruction to.\nDefaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Layer : The Layer object. Allows for chaining of add methods.")),(0,l.kt)("h2",{id:"set_mode_to_navigation"},"set_mode_to_navigation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"set_mode_to_navigation(\n  self\n  instruction_phase: Union[Literal['setup']\n  Literal['plotting']\n  Literal['teardown']] = 'plotting'\n)\n ->  Self\n")),(0,l.kt)("p",null,"Separate plotting instrument from plotting surface. Should be used once plotting a path\nis complete before moving on to the next path."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"instruction_phase (",(0,l.kt)("inlineCode",{parentName:"li"},"setup")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"teardown"),", optional) : The instruction phase\nof plotting to send the instruction to. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Layer : The Layer object. Allows for chaining of add methods.")),(0,l.kt)("h2",{id:"set_mode_to_plotting"},"set_mode_to_plotting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"set_mode_to_plotting(\n  self\n  instruction_phase: Union[Literal['setup']\n  Literal['plotting']\n  Literal['teardown']] = 'plotting'\n)\n ->  Self\n")),(0,l.kt)("p",null,"Connect plotting instrument to plotting surface. Should be used when starting a path."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Args:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"instruction_phase (",(0,l.kt)("inlineCode",{parentName:"li"},"setup")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"teardown"),", optional) : The instruction\nphase of plotting to send the instruction to. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"plotting"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Layer : The Layer object. Allows for chaining of add methods.")))}m.isMDXComponent=!0}}]);