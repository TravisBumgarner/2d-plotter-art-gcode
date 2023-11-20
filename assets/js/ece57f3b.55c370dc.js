"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,m=d["".concat(s,".").concat(g)]||d[g]||_[g]||i;return t?o.createElement(m,a(a({ref:n},c),{},{components:t})):o.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>_,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:4,description:"Convert an image into a wandering of parallel lines wandering where each line is one of N colors."},a="2023-11-19 Wandering Lines",l={unversionedId:"gallery/wandering_lines",id:"gallery/wandering_lines",title:"2023-11-19 Wandering Lines",description:"Convert an image into a wandering of parallel lines wandering where each line is one of N colors.",source:"@site/docs/gallery/wandering_lines.mdx",sourceDirName:"gallery",slug:"/gallery/wandering_lines",permalink:"/gcode2dplotterart/docs/gallery/wandering_lines",draft:!1,editUrl:"https://github.com/TravisBumgarner/gcode2dplotterart/tree/main/gcode2dplotterart-website/docs/gallery/wandering_lines.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Convert an image into a wandering of parallel lines wandering where each line is one of N colors."},sidebar:"tutorialSidebar",previous:{title:"2023-11-15 Image Lines",permalink:"/gcode2dplotterart/docs/gallery/image_lines"},next:{title:"Documentation",permalink:"/gcode2dplotterart/docs/category/documentation"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Images",id:"images",level:2},{value:"Plotter Preview",id:"plotter-preview",level:2},{value:"Code",id:"code",level:2}],c={toc:p},d="wrapper";function _(e){let{components:n,...i}=e;return(0,r.kt)(d,(0,o.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2023-11-19-wandering-lines"},"2023-11-19 Wandering Lines"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Convert an image into a series of wandering lines where each wandering line is one of N colors."),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"example of plotted code",src:t(6781).Z,width:"1600",height:"1594"}),"\n",(0,r.kt)("img",{alt:"example of plotted code",src:t(8213).Z,width:"1600",height:"1581"})),(0,r.kt)("h2",{id:"plotter-preview"},"Plotter Preview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview screenshot",src:t(3959).Z,width:"640",height:"480"})),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'from gcode2dplotterart import Plotter2D\nimport cv2\nimport numpy as np\nfrom imutils import resize\nfrom math import floor\nfrom typing import List, Tuple\nfrom random import shuffle\nfrom collections import namedtuple\nfrom sklearn.cluster import KMeans\n\n\ndef hex_to_rgb(hex: str):\n    hex = hex.lstrip("#")\n    return tuple(int(hex[i : i + 2], 16) for i in (0, 2, 4))\n\n\nPoint = namedtuple("Point", ["row", "col"])\n\n"""\nPreface - numpy and cv2 are still a bit alien to me. The code here could be done better.\n1. Take in an image.\n2. Grayscale all of the pixels so that each pixel is represented by a number from 0 to 255.\n3. Bucket the pixels such that\n  - 0 -> A   becomes 0\n  - A -> B   becomes 1\n  - B -> C   becomes 2\n  - C -> 255 becomes 3\n4. Start with a random pixel in the image that hasn\'t been plotted.\n5. Add this point to the path\n6. Look to the neighboring pixels\n  - If a neighboring pixel, order randomly chosen, is of the same color, add it to the path.\n  - If the neighboring pixel hasn\'t been added to a path before, repeat step 6.\n  - If the neighboring pixel has been added to a path before, repeat step 4.\n  - If there are no neighboring pixels of the same color, repeat step 4.\n7. Continue until all points of all colors are plotted.\nNote\n- Make sure that the combination of X_SCALE, Y_SCALE, and the resized image aren\'t too big for the plotter area. \n"""\n\n# These numbers can be changed in combination with the image size. Adds a bit of spacing since I use thicker\n# pens and they\'d overlap.\nX_PIXELS_PER_PLOTTER_UNIT = 1 / 4\nY_PIXELS_PER_PLOTTER_UNIT = 1 / 4\n\n\n# This function does not seem to bucket into each color.\ndef evenly_distribute_pixels_per_nth_percent_of_grayscale_range(\n    img: cv2.typing.MatLike, n: int\n) -> List[List[int]]:\n    """\n    Take the range of grayscale (0 -> 255) and bucket it such that n% of the range is a bucket.\n    Arg:\n        `img` : cv2.typing.MatLike\n            The image to process\n        `n` : Number of colors to distribute pixels into\n    Returns\n    `   img` : List[List[int]]\n           Image mapped to n colors\n    """\n    bucket_segments = np.linspace(\n        0, 256, n + 1\n    )  # Use linspace to create evenly spaced buckets\n    grayscale_buckets = np.digitize(img, bucket_segments[:-1]) - 1\n\n    print(grayscale_buckets)\n\n    max_val = np.amax(grayscale_buckets)\n    print(max_val)\n\n    min_val = np.amin(grayscale_buckets)\n    print(min_val)\n\n    return grayscale_buckets\n\n\n# Something is off here. Might not be the kmeans algo, but something is.\ndef kmeans_color_reduction(img: cv2.typing.MatLike, n: int) -> List[List[int]]:\n    colors = [hex_to_rgb(color_layer["color"]) for color_layer in COLOR_LAYERS]\n    h, w = img.shape\n    image_reshaped = img.reshape((h * w, 1))\n\n    # Use KMeans to find the closest colors\n    kmeans = KMeans(n_clusters=len(colors), random_state=0, n_init=10)\n    kmeans.fit(image_reshaped)\n    labels = kmeans.predict(image_reshaped)\n\n    # Replace each pixel with its closest color index\n    quantized_image_array = labels.reshape((h, w))\n\n    return quantized_image_array\n\n\ndef evenly_distribute_pixels_per_color(\n    img: cv2.typing.MatLike, n: int\n) -> List[List[int]]:\n    """\n    Ensures that each color has the same number of pixels.\n    Arg:\n        `img` : cv2.typing.MatLike\n            The image to process\n        `n` : Number of colors to distribute pixels into\n    Returns\n    `   img` : List[List[int]]\n           Image mapped to n colors\n    """\n\n    total_pixels = img.size\n    pixel_bins = []\n    histogram, bins = np.histogram(img.ravel(), 256, (0, 256))\n    count = 0\n    for pixel_value, pixel_count in enumerate(histogram):\n        if count >= total_pixels / (n):\n            count = 0\n            pixel_bins.append(pixel_value)\n        count += pixel_count\n\n    return np.subtract(np.digitize(img, pixel_bins), 0)\n\n\ndef resize_image_for_plotter(filename: str) -> List[List[int]]:\n    img = cv2.imread(filename)\n    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n\n    # The following math will ensure that the image is scaled to the plotter size and the remaining math\n    # throughout the program will work.\n    plotter_ratio = "landscape" if plotter.width > plotter.height else "portrait"\n    # It appears shape is (columns, rows)\n    img_ratio = "landscape" if img.shape[1] > img.shape[0] else "portrait"\n    if (\n        plotter_ratio == "landscape"\n        and img_ratio == "landscape"\n        or plotter_ratio == "portrait"\n        and img_ratio == "landscape"\n    ):\n        img = resize(img, width=floor(plotter.width * X_PIXELS_PER_PLOTTER_UNIT))\n    elif (\n        plotter_ratio == "portrait"\n        and img_ratio == "portrait"\n        or plotter_ratio == "landscape"\n        and img_ratio == "portrait"\n    ):\n        print("resizing height")\n        img = resize(img, height=floor(plotter.height * Y_PIXELS_PER_PLOTTER_UNIT))\n\n    print("resized to ", img.shape)\n    return img\n\n\nplotter = Plotter2D(\n    title="Horizontal Line Art",\n    x_min=0,\n    x_max=240,\n    y_min=0,\n    y_max=170,\n    feed_rate=10000,\n    output_directory="./output",\n    handle_out_of_bounds="Warning",  # It appears that some points end up outside of bounds so scale down.\n)\n\n# Note to self - I\'m currently using the K-Means Algorithm to handle the colors.\n# The `color` key below should match the original image\'s colors to result in successful clustering.\n# The title is the type of marker used to plot that.\nCOLOR_LAYERS = [\n    {"color": "#ff0000", "title": "Red"},\n    {"color": "#ff8000", "title": "Orange"},\n    {"color": "#ffff00", "title": "Yellow"},\n    {"color": "#00ff00", "title": "Green"},\n    {"color": "#0000ff", "title": "Blue"},\n    {"color": "#8000ff", "title": "Purple"},\n]\nfor index, layer in enumerate(COLOR_LAYERS):\n    plotter.add_layer(layer["title"], color=layer["color"], line_width=3)\n\ninput_filename = "test.jpg"\n\n# Works with color PNGs exported from Lightroom and Photoshop. Could learn some more about reading images\nresized_image = resize_image_for_plotter(input_filename)\ncolor_reduced_image = kmeans_color_reduction(resized_image, n=len(COLOR_LAYERS))\n\n\ndef get_neighboring_points(row_index: int, col_index: int) -> List[Tuple[int, int]]:\n    """\n    Gets the neighboring points of a given point. The neighboring points are shuffled so that the order\n    in which they are checked is random. Will not return points outside of teh plotter bounds.\n    Args:\n        `row_index` : int\n            The row index of the point\n        `col_index` : int\n            The column index of the point\n    Returns:\n        `neighboring_points` : List[Tuple[int, int]]\n            The neighboring points, in the format of `(row_index, col_index)`.\n    """\n\n    total_rows, total_cols = color_reduced_image.shape\n\n    neighboring_points = []\n    for row in range(-1, 2):\n        for col in range(-1, 2):\n            if row == 0 and col == 0:\n                continue\n\n            if (\n                row_index + row < 0\n                or row_index + row + 1 >= total_rows\n                or col_index + col < 0\n                or col_index + col + 1 >= total_cols\n            ):\n                continue\n\n            neighboring_points.append(Point(row_index + row, col_index + col))\n    shuffle(neighboring_points)\n    return neighboring_points\n\n\ndef add_path_to_plotter(path: List[Point], color: str):\n    """\n    The plotter expects the points to be in the format of (x, y) and the image is in the format of (row, col)\n    Additionally the image was scaled down to get less lines, now we need to scale it back up to take the total\n    space of the plotter.\n    """\n    scaled_path = [\n        (col / Y_PIXELS_PER_PLOTTER_UNIT, row / X_PIXELS_PER_PLOTTER_UNIT)\n        for row, col in path\n    ]\n    plotter.layers[COLOR_LAYERS[current_color_index]["title"]].add_path(scaled_path)\n\n\nremaining_points_to_process = set()\nfor row_index, row in enumerate(color_reduced_image):\n    for col_index, value in enumerate(row):\n        remaining_points_to_process.add(Point(row_index, col_index))\n\ncurrent_point = remaining_points_to_process.pop()\ncurrent_path = [current_point]\ncurrent_color_index = color_reduced_image[current_point.row][current_point.col]\n\nwhile len(remaining_points_to_process) > 0:\n    potential_next_points = get_neighboring_points(\n        row_index=current_point.row, col_index=current_point.col\n    )\n\n    for potential_next_point in potential_next_points:\n        current_point = None\n\n        if (\n            color_reduced_image[potential_next_point.row][potential_next_point.col]\n            == current_color_index\n        ):\n            current_point = potential_next_point\n\n            if current_point in remaining_points_to_process:\n                # Prefer a point that hasn\'t been added to a path. This should make paths, on average, longer.\n                break\n\n    if current_point is None:\n        add_path_to_plotter(current_path, current_color_index)\n        current_point = remaining_points_to_process.pop()\n        current_path = [current_point]\n        current_color_index = color_reduced_image[current_point.row][current_point.col]\n        continue\n\n    if current_point and current_point not in remaining_points_to_process:\n        current_path.append(current_point)\n        add_path_to_plotter(current_path, current_color_index)\n        current_point = remaining_points_to_process.pop()\n        current_path = [current_point]\n        current_color_index = color_reduced_image[current_point.row][current_point.col]\n        continue\n\n    if current_point and current_point in remaining_points_to_process:\n        current_path.append(current_point)\n        remaining_points_to_process.remove(current_point)\n        continue\n\nplotter.preview()\nplotter.save()\n')))}_.isMDXComponent=!0},6781:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/example1-87b5a037c0d61677b15392c4b9f3fc53.jpg"},8213:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/example2-d86dd9ad34790efc976f4ed6aee37fc7.jpg"},3959:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/preview-26ca1721b18136100f64c5135d40808b.png"}}]);