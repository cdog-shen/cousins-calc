(()=>{var e={};e.id=689,e.ids=[689],e.modules={440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(1658);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1057:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6346,23)),Promise.resolve().then(r.t.bind(r,7924,23)),Promise.resolve().then(r.t.bind(r,5656,23)),Promise.resolve().then(r.t.bind(r,99,23)),Promise.resolve().then(r.t.bind(r,8243,23)),Promise.resolve().then(r.t.bind(r,8827,23)),Promise.resolve().then(r.t.bind(r,2763,23)),Promise.resolve().then(r.t.bind(r,7173,23))},1135:()=>{},1729:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6444,23)),Promise.resolve().then(r.t.bind(r,6042,23)),Promise.resolve().then(r.t.bind(r,8170,23)),Promise.resolve().then(r.t.bind(r,9477,23)),Promise.resolve().then(r.t.bind(r,9345,23)),Promise.resolve().then(r.t.bind(r,2089,23)),Promise.resolve().then(r.t.bind(r,6577,23)),Promise.resolve().then(r.t.bind(r,1307,23))},2404:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d});var s=r(5239),n=r(8088),a=r(8170),o=r.n(a),l=r(893),i={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let d={children:["",{children:["calc",{children:["one",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3357)),"C:\\Users\\WUJIE\\Desktop\\test-react\\src\\app\\calc\\one\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4431)),"C:\\Users\\WUJIE\\Desktop\\test-react\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["C:\\Users\\WUJIE\\Desktop\\test-react\\src\\app\\calc\\one\\page.tsx"],p={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/calc/one/page",pathname:"/calc/one",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3211:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(687),n=r(3210);function a(){let[e,t]=(0,n.useState)(0),[r,a]=(0,n.useState)(0),[o,l]=(0,n.useState)(0),[i,d]=(0,n.useState)(0),[c]=(0,n.useState)(25),p=e=>{let t=0;a(40===e?70:50===e?80:60===e?90:70===e?97:80===e?107:90===e?117:100===e?127:137*(110===e))},h=()=>r*o+i*c,x=e=>Math.ceil(e/100*h());return(0,s.jsxs)("div",{className:"container mx-auto p-4",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-4 text-center",children:"表格计算器"}),(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full border-collapse",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"bg-gray-100",children:[(0,s.jsx)("th",{className:"p-2 border text-center",children:"高度"}),(0,s.jsx)("th",{className:"p-2 border text-center",children:"每米单价"}),(0,s.jsx)("th",{className:"p-2 border text-center",children:"长度(m)"}),(0,s.jsx)("th",{className:"p-2 border text-center",children:"立柱数量"}),(0,s.jsx)("th",{className:"p-2 border text-center",children:"立柱价格"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{className:"p-2 border text-center",children:[(0,s.jsx)("label",{htmlFor:"height-select",className:"sr-only",children:"高度"}),(0,s.jsxs)("select",{id:"height-select",value:e,onChange:e=>{let r=parseInt(e.target.value,10);t(r),p(r)},className:"w-full p-2 border rounded",children:[(0,s.jsx)("option",{value:0,children:"请选择"}),(0,s.jsx)("option",{value:40,children:"40"}),(0,s.jsx)("option",{value:50,children:"50"}),(0,s.jsx)("option",{value:60,children:"60"}),(0,s.jsx)("option",{value:70,children:"70"}),(0,s.jsx)("option",{value:80,children:"80"}),(0,s.jsx)("option",{value:90,children:"90"}),(0,s.jsx)("option",{value:100,children:"100"}),(0,s.jsx)("option",{value:110,children:"110"}),(0,s.jsx)("option",{value:0,children:"定制"})]})]}),(0,s.jsx)("td",{className:"p-2 border text-center",children:r}),(0,s.jsx)("td",{className:"p-2 border text-center",children:(0,s.jsx)("input",{type:"number",value:o,onChange:e=>l(parseInt(e.target.value,10)),className:"w-full p-2 border rounded",placeholder:"请输入长度"})}),(0,s.jsx)("td",{className:"p-2 border text-center",children:(0,s.jsx)("input",{type:"number",value:i,onChange:e=>d(parseInt(e.target.value,10)),className:"w-full p-2 border rounded",placeholder:"请输入数量"})}),(0,s.jsx)("td",{className:"p-2 border text-center",children:c})]}),(0,s.jsxs)("tr",{className:"bg-gray-100",children:[(0,s.jsx)("th",{className:"p-2 border text-center",children:"原价"}),(0,s.jsx)("th",{className:"p-2 border text-center",children:"85%"}),(0,s.jsx)("th",{className:"p-2 border text-center",children:"80%"}),(0,s.jsx)("th",{className:"p-2 border text-center",children:"70%"}),(0,s.jsx)("th",{className:"p-2 border text-center"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"p-2 border text-center",children:h()}),(0,s.jsx)("td",{className:"p-2 border text-center",children:x(85)}),(0,s.jsx)("td",{className:"p-2 border text-center",children:x(80)}),(0,s.jsx)("td",{className:"p-2 border text-center",children:x(70)}),(0,s.jsx)("td",{className:"p-2 border text-center"})]})]})]})}),(0,s.jsx)("button",{onClick:()=>{h()},className:"mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600",children:"计算"})]})}},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3357:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\WUJIE\\\\Desktop\\\\test-react\\\\src\\\\app\\\\calc\\\\one\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\WUJIE\\Desktop\\test-react\\src\\app\\calc\\one\\page.tsx","default")},3873:e=>{"use strict";e.exports=require("path")},4227:(e,t,r)=>{Promise.resolve().then(r.bind(r,3357))},4431:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>i});var s=r(7413),n=r(2376),a=r.n(n),o=r(8726),l=r.n(o);r(1135);let i={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${a().variable} ${l().variable} antialiased`,children:e})})}},4752:(e,t,r)=>{Promise.resolve().then(r.bind(r,3211))},6852:()=>{},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")},9588:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[447,145,658],()=>r(2404));module.exports=s})();