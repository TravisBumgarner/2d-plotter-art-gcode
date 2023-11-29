"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[637],{7911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),i=n(2004);const o={sidebar_position:6,description:"Generate a circle with a randomly chosen center point, color, and radius. Continuously decrease the radius at a random rate, with a random color, and maintain the same center point to plot successive circles until the radius becomes zero. After reaching a point, start the process again.",image:"/img/gallery/6_Bubbles/example1.jpg"},l="2023-11-25 Bubbles",s={unversionedId:"gallery/Bubbles",id:"gallery/Bubbles",title:"2023-11-25 Bubbles",description:"Generate a circle with a randomly chosen center point, color, and radius. Continuously decrease the radius at a random rate, with a random color, and maintain the same center point to plot successive circles until the radius becomes zero. After reaching a point, start the process again.",source:"@site/docs/gallery/6_Bubbles.mdx",sourceDirName:"gallery",slug:"/gallery/Bubbles",permalink:"/gcode2dplotterart/docs/gallery/Bubbles",draft:!1,editUrl:"https://github.com/TravisBumgarner/gcode2dplotterart/tree/main/gcode2dplotterart-website/docs/gallery/6_Bubbles.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Generate a circle with a randomly chosen center point, color, and radius. Continuously decrease the radius at a random rate, with a random color, and maintain the same center point to plot successive circles until the radius becomes zero. After reaching a point, start the process again.",image:"/img/gallery/6_Bubbles/example1.jpg"},sidebar:"tutorialSidebar",previous:{title:"2023-11-24 Concentric Circles",permalink:"/gcode2dplotterart/docs/gallery/concentric_circles"},next:{title:"2023-11-24 Josef Albers Homage",permalink:"/gcode2dplotterart/docs/gallery/josef_albers_homage"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Images",id:"images",level:2},{value:"Timelapses",id:"timelapses",level:2},{value:"Plotter Preview",id:"plotter-preview",level:2},{value:"Code",id:"code",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2023-11-25-bubbles"},"2023-11-25 Bubbles"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Generate a circle with a randomly chosen center point, color, and radius. Continuously decrease the radius at a random rate, with a random color, and maintain the same center point to plot successive circles until the radius becomes zero. After reaching a point, start the process again."),(0,a.kt)("h2",{id:"images"},"Images"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"example of plotted code",src:n(311).Z,width:"1240",height:"1600"}),"\n",(0,a.kt)("img",{alt:"example of plotted code",src:n(9942).Z,width:"1529",height:"2000"})),(0,a.kt)("h2",{id:"timelapses"},"Timelapses"),(0,a.kt)(i.Z,{playing:!0,controls:!0,width:"100%",url:"https://www.youtube.com/shorts/IWlhWVzbsxc",mdxType:"ReactPlayer"}),(0,a.kt)("h2",{id:"plotter-preview"},"Plotter Preview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"preview screenshot",src:n(3673).Z,width:"640",height:"480"})),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from gcode2dplotterart import Plotter2D\nfrom random import randrange, choice, randint\n\nLINE_WIDTH = 1.0\n\nCOLORS = [\n    {"title": "purple1", "color": "#EABEFF"},\n    {"title": "blue1", "color": "#A2FFF8"},\n    {"title": "orange1", "color": "#FF7700"},\n    {"title": "purple2", "color": "#AD00FF"},\n    {"title": "grey1", "color": "#E9E9E9"},\n]\n\n# Create a plotter object\nplotter = Plotter2D(\n    title="Bubbles",\n    x_min=0,\n    x_max=260,\n    y_min=0,\n    y_max=200,\n    feed_rate=10000,\n)\n\nfor color in COLORS:\n    plotter.add_layer(\n        title=color["title"],\n        color=color["color"],\n        line_width=LINE_WIDTH,\n    )\n\n\ncounter = 0\nSTARTING_CIRCLES = 500\n\nwhile counter < STARTING_CIRCLES:\n    x_center = randrange(int(plotter.x_min), int(plotter.x_max))\n    y_center = randrange(int(plotter.y_min), int(plotter.y_max))\n\n    min_distance_to_edge = min(\n        abs(x_center - plotter.x_min),\n        abs(plotter.x_max - x_center),\n        abs(y_center - plotter.y_min),\n        abs(plotter.y_max - y_center),\n    )\n\n    remaining_radius = min(randint(0, 20), min_distance_to_edge)\n\n    while remaining_radius > 0:\n        color = choice(COLORS)\n        layer = color["title"]\n        plotter.layers[layer].add_circle(\n            x_center,\n            y_center,\n            radius=remaining_radius,\n        )\n        remaining_radius -= randint(int(LINE_WIDTH), int(remaining_radius))\n    counter += 1\n\n\nplotter.preview()\n\nplotter.save()\n\n')))}u.isMDXComponent=!0},311:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/example1-7780020f74b0f82d5b81dcadbbde23cc.jpg"},9942:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/example2-3575282cf03772deed6def77dd5ccd35.jpg"},3673:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/preview-8c3e415cb2a110ef0164fa7f5141db83.png"}}]);