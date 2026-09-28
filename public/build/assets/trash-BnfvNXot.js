import{r as c}from"./app-B2SIh33N.js";/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function B(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:j(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=t=>{let e="",n=!1;for(const o of t){if(o==="-"||o==="_"||o<=" "){n=e.length>0;continue}e.length===0?e+=o.toLowerCase():e+=n?o.toUpperCase():o,n=!1}return e};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=t=>{const e=E(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(...t)=>t.filter((e,n,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function N(t){return t!=null}function $(t,e={}){var b,k;const n=e.attributeNames??{},o=i=>n[i]??i,l=t.size??t.width??r.width,u=t.size??t.height??r.height,d=((b=t.aliases)==null?void 0:b.filter(i=>typeof i=="string"&&i.trim()!=="").map(i=>`lucide-${i}`))??[],f=[...t.name?[`lucide-${t.name}`]:[],...d],s=((k=e.className)==null?void 0:k.split(" ").filter(Boolean))??[],w=e.includeDefaultClasses===!1?v(...s):v("lucide",...f,...s),x=e.absoluteStrokeWidth?Number(e.strokeWidth??r["stroke-width"])*Number(t.size??t.width??r.width)/Number(e.size??e.width??r.width):e.strokeWidth??r["stroke-width"];return["svg",{...Object.entries(r).reduce((i,[a,h])=>(i[o(a)]=h,i),{}),..."color"in e&&e.color&&{[o("stroke")]:e.color},..."size"in e&&N(e.size)&&{[o("width")]:e.size,[o("height")]:e.size},..."width"in e&&N(e.width)&&{[o("width")]:e.width},..."height"in e&&N(e.height)&&{[o("height")]:e.height},[o("stroke-width")]:x,...w&&{[o("class")]:w},[o("viewBox")]:`0 0 ${l} ${u}`,...e.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(i=>{const[a,h,g]=i,C=e.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...h}:h;return g?[a,C,g]:[a,C]})]}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function M(t,e={}){return $(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},D=c.createContext({}),R=()=>c.useContext(D),_=c.forwardRef(({color:t,size:e,width:n,height:o,strokeWidth:l,absoluteStrokeWidth:u,nonScalingStroke:d,className:f="",children:s,iconNode:w=[],icon:x={node:w,aliases:[],size:24},...m},b)=>{const{size:k=24,strokeWidth:i=2,absoluteStrokeWidth:a=!1,nonScalingStroke:h=!1,color:g="currentColor",className:C=""}=R()??{},y=!!s||P(m),[z,A,W=[]]=M(x,{color:t??g,width:n??e??k,height:o??e??k,strokeWidth:l??i,absoluteStrokeWidth:u??a,nonScalingStroke:d??h,className:v(C,f),hasA11yProp:y,attributes:m});return c.createElement(z,{ref:b,...A},[...W.map(([L,p])=>c.createElement(L,p)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function F(t,e=[],n=[]){const o=typeof t=="string"?B(t,e,n):t,l=c.forwardRef(({className:u,...d},f)=>c.createElement(_,{ref:f,icon:o,className:u,...d}));return o.name&&(l.displayName=I(o.name)),l}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};S.node;const T=F(S);export{T,F as c};
