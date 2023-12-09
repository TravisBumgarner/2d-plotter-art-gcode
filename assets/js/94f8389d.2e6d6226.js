"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4},a="Coding Tips",c={unversionedId:"documentation/code_tips",id:"documentation/code_tips",title:"Coding Tips",description:"Chaining Instructions",source:"@site/docs/documentation/code_tips.mdx",sourceDirName:"documentation",slug:"/documentation/code_tips",permalink:"/gcode2dplotterart/docs/documentation/code_tips",draft:!1,editUrl:"https://github.com/TravisBumgarner/gcode2dplotterart/tree/main/gcode2dplotterart-website/docs/documentation/code_tips.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"G-Code Overview",permalink:"/gcode2dplotterart/docs/documentation/gcode"},next:{title:"Plotting Tips",permalink:"/gcode2dplotterart/docs/documentation/plotting_tips"}},d={},p=[{value:"Chaining Instructions",id:"chaining-instructions",level:2},{value:"<code>add_path</code>",id:"add_path",level:2}],l={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coding-tips"},"Coding Tips"),(0,o.kt)("h2",{id:"chaining-instructions"},"Chaining Instructions"),(0,o.kt)("p",null,"All instructions can be chained."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"plotter.layers[LAYER_1]\\\n  .add_rectangle(x_start=25, y_start=25, x_end=50, y_end=50)\\\n  .add_circle(x_center=10, y_center=10, radius=10)\n")),(0,o.kt)("h2",{id:"add_path"},(0,o.kt)("inlineCode",{parentName:"h2"},"add_path")),(0,o.kt)("p",null,"All of the plotting methods - ",(0,o.kt)("inlineCode",{parentName:"p"},"add_rectangle"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"add_line"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"add_circle"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"add_point"),", etc. all use ",(0,o.kt)("inlineCode",{parentName:"p"},"add_path")," under the hood. ",(0,o.kt)("inlineCode",{parentName:"p"},"add_path")," takes an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"(x,y)")," values."))}u.isMDXComponent=!0}}]);