import{r as u,d as he,j as e,H as ue,L as A,u as S}from"./app-CJlpfYPO.js";import{A as ge}from"./AppLayout-WTBEreOn.js";/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=r=>r==null?void 0:r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function fe(r,t,s=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:be(r),size:24,node:t,...s.length>0?{aliases:s}:{}}}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=r=>{let t="",s=!1;for(const a of r){if(a==="-"||a==="_"||a<=" "){s=t.length>0;continue}t.length===0?t+=a.toLowerCase():t+=s?a.toUpperCase():a,s=!1}return t};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=r=>{const t=ve(r);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=(...r)=>r.filter((t,s,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function E(r){return r!=null}function je(r,t={}){var b,g;const s=t.attributeNames??{},a=p=>s[p]??p,o=r.size??r.width??w.width,n=r.size??r.height??w.height,d=((b=r.aliases)==null?void 0:b.filter(p=>typeof p=="string"&&p.trim()!=="").map(p=>`lucide-${p}`))??[],x=[...r.name?[`lucide-${r.name}`]:[],...d],i=((g=t.className)==null?void 0:g.split(" ").filter(Boolean))??[],m=t.includeDefaultClasses===!1?U(...i):U("lucide",...x,...i),j=t.absoluteStrokeWidth?Number(t.strokeWidth??w["stroke-width"])*Number(r.size??r.width??w.width)/Number(t.size??t.width??w.width):t.strokeWidth??w["stroke-width"];return["svg",{...Object.entries(w).reduce((p,[f,v])=>(p[a(f)]=v,p),{}),..."color"in t&&t.color&&{[a("stroke")]:t.color},..."size"in t&&E(t.size)&&{[a("width")]:t.size,[a("height")]:t.size},..."width"in t&&E(t.width)&&{[a("width")]:t.width},..."height"in t&&E(t.height)&&{[a("height")]:t.height},[a("stroke-width")]:j,...m&&{[a("class")]:m},[a("viewBox")]:`0 0 ${o} ${n}`,...t.hasA11yProp===!1?{[a("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},r.node.map(p=>{const[f,v,N]=p,z=t.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...v}:v;return N?[f,z,N]:[f,z]})]}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function we(r,t={}){return je(r,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Ne=u.createContext({}),ze=()=>u.useContext(Ne),Fe=u.forwardRef(({color:r,size:t,width:s,height:a,strokeWidth:o,absoluteStrokeWidth:n,nonScalingStroke:d,className:x="",children:i,iconNode:m=[],icon:j={node:m,aliases:[],size:24},...k},b)=>{const{size:g=24,strokeWidth:p=2,absoluteStrokeWidth:f=!1,nonScalingStroke:v=!1,color:N="currentColor",className:z=""}=ze()??{},l=!!i||ke(k),[y,ce,pe=[]]=we(j,{color:r??N,width:s??t??g,height:a??t??g,strokeWidth:o??p,absoluteStrokeWidth:n??f,nonScalingStroke:d??v,className:U(z,x),hasA11yProp:l,attributes:k});return u.createElement(y,{ref:b,...ce},[...pe.map(([xe,me])=>u.createElement(xe,me)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function c(r,t=[],s=[]){const a=typeof r=="string"?fe(r,t,s):r,o=u.forwardRef(({className:n,...d},x)=>u.createElement(Fe,{ref:x,icon:a,className:n,...d}));return a.name&&(o.displayName=ye(a.name)),o}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};R.node;const Ce=c(R);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};B.node;const T=c(B);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};P.node;const Ae=c(P);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};W.node;const H=c(W);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};V.node;const Y=c(V);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O={name:"circle-user-round",size:24,node:[["path",{d:"M17.925 20.056a6 6 0 0 0-11.851.001",key:"z69sun"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["user-circle-2"]};O.node;const Se=c(O);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};K.node;const De=c(K);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X={name:"key-round",size:24,node:[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]};X.node;const G=c(X);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};J.node;const Me=c(J);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z={name:"pen-line",size:24,node:[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-3"]};Z.node;const Q=c(Z);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};ee.node;const Ee=c(ee);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};re.node;const _e=c(re);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};te.node;const Ue=c(te);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};ae.node;const L=c(ae);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};se.node;const C=c(se);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie={name:"user-check",size:24,node:[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};ie.node;const $e=c(ie);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne={name:"user-plus",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]};ne.node;const I=c(ne);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe={name:"user-x",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]};oe.node;const Le=c(oe);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};le.node;const _=c(le);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};de.node;const $=c(de);function Oe({users:r,stats:t={}}){const{flash:s}=he().props,a=(r==null?void 0:r.data)||r||[],[o,n]=u.useState(""),[d,x]=u.useState(!1),[i,m]=u.useState(null),[j,k]=u.useState(null),b=(l,y=null)=>{m(y),k(l)},g=()=>{m(null),k(null)},p=u.useMemo(()=>{const l=o.trim().toLowerCase();return l?a.filter(y=>String(y.id||"").toLowerCase().includes(l)||String(y.name||"").toLowerCase().includes(l)||String(y.email||"").toLowerCase().includes(l)||String(y.role||"").toLowerCase().includes(l)):a},[a,o]),f=t.total??a.filter(l=>["admin","user"].includes(l.role)).length,v=t.active??a.filter(l=>l.role==="user"&&(l.active===1||l.active==="1"||l.active===!0)).length,N=t.admins??a.filter(l=>l.role==="admin").length,z=t.inactive??a.filter(l=>l.role==="user"&&(l.active===0||l.active==="0"||l.active===!1)).length;return e.jsxs(ge,{children:[e.jsx(ue,{title:"Users Management"}),e.jsx("div",{className:"users-page",children:e.jsxs("div",{className:"users-container",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"header-content",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(A,{href:route("admin.dashboard"),children:"Dashboard"}),e.jsx(H,{size:14}),e.jsx("span",{children:"Users"})]}),e.jsxs("div",{className:"header-main",children:[e.jsx("div",{children:e.jsxs("div",{className:"title-row",children:[e.jsx("div",{className:"title-icon",children:e.jsx(_,{size:25})}),e.jsxs("div",{children:[e.jsx("h1",{children:"User Management"}),e.jsx("p",{children:"Manage administrators and platform users."})]})]})}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>x(!0),children:[e.jsx(Ee,{size:18}),e.jsx("span",{children:"Add User"})]})]})]})}),(s==null?void 0:s.success)&&e.jsxs("div",{className:"alert alert-success",children:[e.jsx("div",{className:"alert-icon",children:e.jsx(T,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Success"}),e.jsx("p",{children:s.success})]}),e.jsx("button",{type:"button",onClick:()=>{},className:"alert-close",children:e.jsx($,{size:16})})]}),(s==null?void 0:s.error)&&e.jsxs("div",{className:"alert alert-danger",children:[e.jsx("div",{className:"alert-icon",children:e.jsx(Y,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Error"}),e.jsx("p",{children:s.error})]})]}),e.jsxs("div",{className:"stats-grid",children:[e.jsx(F,{title:"Total Users",value:f,description:"Registered accounts",icon:e.jsx(_,{size:21}),type:"primary"}),e.jsx(F,{title:"Active Users",value:v,description:"Currently active",icon:e.jsx($e,{size:21}),type:"success"}),e.jsx(F,{title:"Administrators",value:N,description:"Admin accounts",icon:e.jsx(L,{size:21}),type:"dark"}),e.jsx(F,{title:"Inactive",value:z,description:"Currently disabled",icon:e.jsx(Le,{size:21}),type:"muted"})]}),e.jsxs("div",{className:"users-card",children:[e.jsxs("div",{className:"users-toolbar",children:[e.jsx("div",{className:"toolbar-heading",children:e.jsxs("div",{children:[e.jsx("h2",{children:"All Users"}),e.jsxs("p",{children:[p.length," ",p.length===1?"account":"accounts"," ","displayed"]})]})}),e.jsx("div",{className:"toolbar-actions",children:e.jsxs("div",{className:"search-box",children:[e.jsx(Ue,{size:18}),e.jsx("input",{type:"text",placeholder:"Search users...",value:o,onChange:l=>n(l.target.value)}),o&&e.jsx("button",{type:"button",onClick:()=>n(""),className:"search-clear",children:e.jsx($,{size:15})})]})})]}),e.jsx("div",{className:"table-wrapper",children:e.jsxs("table",{className:"users-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"id-column",children:"ID"}),e.jsx("th",{children:"User"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Joined"}),e.jsx("th",{className:"actions-column",children:"Actions"})]})}),e.jsx("tbody",{children:p.length>0?p.map(l=>e.jsx(qe,{user:l,onEdit:()=>b("edit",l),onDelete:()=>b("delete",l),onReset:()=>b("reset",l)},l.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",className:"empty-cell",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(_,{size:27})}),e.jsx("h3",{children:o?"No users found":"No users available"}),e.jsx("p",{children:o?"Try changing your search terms.":"There are no users to display yet."}),o&&e.jsx("button",{type:"button",className:"btn btn-outline",onClick:()=>n(""),children:"Clear Search"})]})})})})]})}),(r==null?void 0:r.links)&&r.links.length>3&&e.jsx(Pe,{links:r.links})]})]})}),d&&e.jsx(Ie,{onClose:()=>x(!1)}),j==="edit"&&i&&e.jsx(Re,{user:i,onClose:g}),j==="reset"&&i&&e.jsx(Be,{user:i,onClose:g}),j==="delete"&&i&&e.jsx(Te,{user:i,onClose:g}),e.jsx(He,{})]})}function F({title:r,value:t,description:s,icon:a,type:o="primary"}){return e.jsxs("div",{className:`stat-card stat-${o}`,children:[e.jsxs("div",{className:"stat-top",children:[e.jsx("div",{className:"stat-icon",children:a}),e.jsx("div",{className:"stat-label",children:r})]}),e.jsx("div",{className:"stat-value",children:t}),e.jsxs("div",{className:"stat-description",children:[e.jsx(Ce,{size:14}),s]})]})}function qe({user:r,onEdit:t,onDelete:s,onReset:a}){const o=r.role==="admin",n=r.active===1||r.active==="1"||r.active===!0,d=M(r.name);return e.jsxs("tr",{children:[e.jsx("td",{className:"id-column",children:e.jsxs("span",{className:"user-id",children:["#",r.id]})}),e.jsx("td",{children:e.jsxs("div",{className:"user-cell",children:[e.jsx("div",{className:`avatar ${o?"avatar-admin":""}`,children:d}),e.jsxs("div",{className:"user-info",children:[e.jsx(A,{href:route("admin.users.show",r.id),className:"user-name",children:r.name}),e.jsxs("div",{className:"user-email",children:[e.jsx(Me,{size:13}),r.email]})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`role-badge ${o?"role-admin":"role-user"}`,children:o?e.jsxs(e.Fragment,{children:[e.jsx(L,{size:14}),"Administrator"]}):e.jsxs(e.Fragment,{children:[e.jsx(Se,{size:14}),"User"]})})}),e.jsx("td",{children:e.jsxs("span",{className:`status-badge ${n?"status-active":"status-inactive"}`,children:[e.jsx("span",{className:"status-dot"}),n?"Active":"Inactive"]})}),e.jsx("td",{children:e.jsx("span",{className:"joined-date",children:We(r.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsx(A,{href:route("admin.users.show",r.id),className:"action-btn action-view",title:"View user",children:e.jsx(De,{size:16})}),e.jsx("button",{type:"button",className:"action-btn action-edit",onClick:t,title:"Edit user",children:e.jsx(Q,{size:16})}),e.jsx("button",{type:"button",className:"action-btn action-reset",onClick:a,title:"Reset password",children:e.jsx(G,{size:16})}),e.jsx("button",{type:"button",className:"action-btn action-delete",onClick:s,title:"Delete user",children:e.jsx(C,{size:16})})]})})]})}function Ie({onClose:r}){const{data:t,setData:s,post:a,processing:o,errors:n,reset:d}=S({name:"",email:"",password:"",password_confirmation:"",role:"user",active:"1"}),x=i=>{i.preventDefault(),a(route("admin.users.store"),{preserveScroll:!0,onSuccess:()=>{d(),r()}})};return e.jsx(D,{title:"Add New User",subtitle:"Create a new platform account.",icon:e.jsx(I,{size:21}),onClose:r,children:e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"form-section",children:[e.jsx("div",{className:"section-heading",children:e.jsx("span",{children:"Account information"})}),e.jsxs("div",{className:"form-grid",children:[e.jsx(h,{label:"Full name",required:!0,error:n.name,children:e.jsx("input",{type:"text",value:t.name,onChange:i=>s("name",i.target.value),placeholder:"Enter full name",className:n.name?"input-error":""})}),e.jsx(h,{label:"Email address",required:!0,error:n.email,children:e.jsx("input",{type:"email",value:t.email,onChange:i=>s("email",i.target.value),placeholder:"name@example.com",className:n.email?"input-error":""})}),e.jsx(h,{label:"Password",required:!0,error:n.password,children:e.jsx("input",{type:"password",value:t.password,onChange:i=>s("password",i.target.value),placeholder:"Create a password",className:n.password?"input-error":""})}),e.jsx(h,{label:"Confirm password",required:!0,error:n.password_confirmation,children:e.jsx("input",{type:"password",value:t.password_confirmation,onChange:i=>s("password_confirmation",i.target.value),placeholder:"Confirm password",className:n.password_confirmation?"input-error":""})}),e.jsx(h,{label:"Role",required:!0,error:n.role,children:e.jsxs("select",{value:t.role,onChange:i=>s("role",i.target.value),children:[e.jsx("option",{value:"user",children:"Talent"}),e.jsx("option",{value:"admin",children:"Administrator"})]})}),e.jsx(h,{label:"Account status",required:!0,error:n.active,children:e.jsxs("select",{value:t.active,onChange:i=>s("active",i.target.value),children:[e.jsx("option",{value:"1",children:"Active"}),e.jsx("option",{value:"0",children:"Inactive"})]})})]})]}),e.jsxs("div",{className:"security-note",children:[e.jsx("div",{className:"security-icon",children:e.jsx(L,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Account security"}),e.jsx("p",{children:"Use a strong password with a combination of letters, numbers and special characters."})]})]})]}),e.jsx(q,{onClose:r,processing:o,submitText:"Create User",submitIcon:e.jsx(I,{size:17})})]})})}function Re({user:r,onClose:t}){const{data:s,setData:a,put:o,processing:n,errors:d}=S({name:r.name||"",email:r.email||"",role:r.role||"user",active:r.active===1||r.active==="1"||r.active===!0?"1":"0"}),x=i=>{i.preventDefault(),o(route("admin.users.update",r.id),{preserveScroll:!0,onSuccess:t})};return e.jsx(D,{title:"Edit User",subtitle:`Update account details for ${r.name}.`,icon:e.jsx(Q,{size:21}),onClose:t,children:e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"user-preview",children:[e.jsx("div",{className:`avatar avatar-large ${r.role==="admin"?"avatar-admin":""}`,children:M(r.name)}),e.jsxs("div",{children:[e.jsx("strong",{children:r.name}),e.jsx("span",{children:r.email})]})]}),e.jsxs("div",{className:"form-grid",children:[e.jsx(h,{label:"Full name",required:!0,error:d.name,children:e.jsx("input",{type:"text",value:s.name,onChange:i=>a("name",i.target.value),className:d.name?"input-error":""})}),e.jsx(h,{label:"Email address",required:!0,error:d.email,children:e.jsx("input",{type:"email",value:s.email,onChange:i=>a("email",i.target.value),className:d.email?"input-error":""})}),e.jsx(h,{label:"Role",required:!0,error:d.role,children:e.jsxs("select",{value:s.role,onChange:i=>a("role",i.target.value),children:[e.jsx("option",{value:"user",children:"Talent"}),e.jsx("option",{value:"admin",children:"Administrator"})]})}),e.jsx(h,{label:"Account status",required:!0,error:d.active,children:e.jsxs("select",{value:s.active,onChange:i=>a("active",i.target.value),children:[e.jsx("option",{value:"1",children:"Active"}),e.jsx("option",{value:"0",children:"Inactive"})]})})]})]}),e.jsx(q,{onClose:t,processing:n,submitText:"Save Changes",submitIcon:e.jsx(T,{size:17})})]})})}function Be({user:r,onClose:t}){const{data:s,setData:a,put:o,processing:n,errors:d,reset:x}=S({password:"",password_confirmation:""}),i=m=>{m.preventDefault(),o(route("admin.users.password-reset",r.id),{preserveScroll:!0,onSuccess:()=>{x(),t()}})};return e.jsx(D,{title:"Reset Password",subtitle:`Create a new password for ${r.name}.`,icon:e.jsx(G,{size:21}),onClose:t,children:e.jsxs("form",{onSubmit:i,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"reset-user-card",children:[e.jsx("div",{className:"avatar",children:M(r.name)}),e.jsxs("div",{children:[e.jsx("strong",{children:r.name}),e.jsx("span",{children:r.email})]})]}),e.jsxs("div",{className:"form-grid form-grid-single",children:[e.jsx(h,{label:"New password",required:!0,error:d.password,children:e.jsx("input",{type:"password",value:s.password,onChange:m=>a("password",m.target.value),placeholder:"Enter new password",className:d.password?"input-error":""})}),e.jsx(h,{label:"Confirm new password",required:!0,error:d.password_confirmation,children:e.jsx("input",{type:"password",value:s.password_confirmation,onChange:m=>a("password_confirmation",m.target.value),placeholder:"Confirm new password",className:d.password_confirmation?"input-error":""})})]}),e.jsxs("div",{className:"warning-note",children:[e.jsx(Y,{size:18}),e.jsx("p",{children:"The user's current password will immediately stop working after the password is changed."})]})]}),e.jsx(q,{onClose:t,processing:n,submitText:"Reset Password",submitIcon:e.jsx(_e,{size:17})})]})})}function Te({user:r,onClose:t}){const{delete:s,processing:a}=S(),o=n=>{n.preventDefault(),s(route("admin.users.destroy",r.id),{preserveScroll:!0,onSuccess:t})};return e.jsx(D,{title:"Delete User",subtitle:"This action cannot be undone.",icon:e.jsx(C,{size:21}),onClose:t,danger:!0,children:e.jsxs("form",{onSubmit:o,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"delete-warning",children:[e.jsx("div",{className:"delete-icon",children:e.jsx(C,{size:25})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Delete this account?"}),e.jsxs("p",{children:["You are about to permanently delete"," ",e.jsx("strong",{children:r.name}),". All associated account information may be removed."]})]})]}),e.jsxs("div",{className:"delete-user-summary",children:[e.jsx("div",{className:"avatar",children:M(r.name)}),e.jsxs("div",{children:[e.jsx("strong",{children:r.name}),e.jsx("span",{children:r.email})]}),e.jsx("span",{className:`role-badge ${r.role==="admin"?"role-admin":"role-user"}`,children:r.role==="admin"?"Administrator":"Talent"})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-outline",onClick:t,disabled:a,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-danger",disabled:a,children:a?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Deleting..."]}):e.jsxs(e.Fragment,{children:[e.jsx(C,{size:17}),"Delete User"]})})]})]})})}function D({title:r,subtitle:t,icon:s,children:a,onClose:o,danger:n=!1}){return e.jsx("div",{className:"modal-backdrop",children:e.jsxs("div",{className:`custom-modal ${n?"custom-modal-danger":""}`,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{className:"modal-title-area",children:[e.jsx("div",{className:"modal-icon",children:s}),e.jsxs("div",{children:[e.jsx("h2",{children:r}),e.jsx("p",{children:t})]})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:o,"aria-label":"Close",children:e.jsx($,{size:19})})]}),a]})})}function q({onClose:r,processing:t,submitText:s,submitIcon:a}){return e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-outline",onClick:r,disabled:t,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:t,children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[a,s]})})]})}function h({label:r,required:t=!1,error:s,children:a}){return e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{children:[r,t&&e.jsx("span",{className:"required",children:"*"})]}),a,s&&e.jsx("div",{className:"field-error",children:s})]})}function Pe({links:r}){return e.jsxs("div",{className:"pagination-wrapper",children:[e.jsx("div",{className:"pagination-info",children:"Showing available user accounts"}),e.jsx("div",{className:"pagination",children:r.map((t,s)=>{const a=t.label.replace("&laquo;","").replace("&raquo;","").trim(),o=t.label.toLowerCase().includes("previous"),n=t.label.toLowerCase().includes("next");return e.jsx(A,{href:t.url||"#",className:`pagination-link ${t.active?"active":""} ${t.url?"":"disabled"}`,preserveScroll:!0,children:o?e.jsx(Ae,{size:16}):n?e.jsx(H,{size:16}):a},s)})})]})}function M(r=""){const t=r.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].substring(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase():"U"}function We(r){if(!r)return"—";try{return new Intl.DateTimeFormat("en",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(r))}catch{return r}}function He(){return e.jsx("style",{children:`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap');

            :root {
                --primary: #00A667;
                --primary-dark: #008653;
                --primary-deep: #006E46;
                --primary-soft: #E8F8F1;
                --primary-softer: #F3FBF7;

                --black: #111111;
                --black-soft: #202522;

                --white: #FFFFFF;

                --text: #161B18;
                --text-secondary: #4C5752;
                --muted: #7A8580;

                --page: #F5F8F6;
                --surface: #FFFFFF;
                --surface-soft: #FAFCFB;

                --border: #E3EAE6;
                --border-light: #EDF1EF;

                --danger: #D92D20;
                --danger-dark: #B42318;
                --danger-soft: #FFF1F0;

                --shadow-sm:
                    0 1px 2px rgba(16, 24, 40, .04),
                    0 2px 8px rgba(16, 24, 40, .03);

                --shadow-md:
                    0 8px 24px rgba(16, 24, 40, .07);

                --radius-sm: 8px;
                --radius-md: 12px;
                --radius-lg: 16px;
                --radius-xl: 20px;
            }

            * {
                box-sizing: border-box;
            }

            .users-page {
                min-height: calc(100vh - 70px);
                background: var(--page);
                padding: 30px 24px 50px;
                color: var(--text);
                font-family: "DM Sans", sans-serif;
            }

            .users-container {
                width: 100%;
                max-width: 1480px;
                margin: 0 auto;
            }

            /* HEADER */

            .page-header {
                margin-bottom: 24px;
            }

            .breadcrumb {
                display: flex;
                align-items: center;
                gap: 7px;
                margin-bottom: 18px;
                color: var(--muted);
                font-size: 13px;
                font-weight: 500;
            }

            .breadcrumb a {
                color: var(--muted);
                text-decoration: none;
                transition: color .2s ease;
            }

            .breadcrumb a:hover {
                color: var(--primary);
            }

            .header-main {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
            }

            .title-row {
                display: flex;
                align-items: center;
                gap: 15px;
            }

            .title-icon {
                width: 50px;
                height: 50px;
                border-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary);
                color: white;
                box-shadow: 0 8px 18px rgba(0, 166, 103, .18);
            }

            .title-row h1 {
                margin: 0;
                font-family: "Manrope", sans-serif;
                font-size: 28px;
                line-height: 1.2;
                font-weight: 800;
                color: var(--black);
                letter-spacing: -.5px;
            }

            .title-row p {
                margin: 6px 0 0;
                color: var(--muted);
                font-size: 14px;
            }

            /* BUTTONS */

            .btn {
                border: 0;
                min-height: 42px;
                padding: 0 16px;
                border-radius: 10px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                font-family: "DM Sans", sans-serif;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
                text-decoration: none;
                transition:
                    transform .18s ease,
                    background .18s ease,
                    border-color .18s ease,
                    box-shadow .18s ease;
            }

            .btn:hover:not(:disabled) {
                transform: translateY(-1px);
            }

            .btn:disabled {
                opacity: .6;
                cursor: not-allowed;
            }

            .btn-primary {
                color: white;
                background: var(--primary);
                box-shadow: 0 5px 14px rgba(0, 166, 103, .18);
            }

            .btn-primary:hover:not(:disabled) {
                background: var(--primary-dark);
                box-shadow: 0 7px 18px rgba(0, 166, 103, .24);
            }

            .btn-outline {
                color: var(--black);
                background: white;
                border: 1px solid var(--border);
            }

            .btn-outline:hover:not(:disabled) {
                border-color: var(--primary);
                color: var(--primary);
                background: var(--primary-softer);
            }

            .btn-danger {
                color: white;
                background: var(--danger);
                box-shadow: 0 5px 14px rgba(217, 45, 32, .14);
            }

            .btn-danger:hover:not(:disabled) {
                background: var(--danger-dark);
            }

            /* ALERTS */

            .alert {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                padding: 14px 16px;
                margin-bottom: 22px;
                border-radius: 12px;
                border: 1px solid;
                background: white;
            }

            .alert-success {
                color: #087443;
                border-color: #BFEAD6;
                background: #F2FCF7;
            }

            .alert-danger {
                color: var(--danger-dark);
                border-color: #F3C4BF;
                background: #FFF7F6;
            }

            .alert-icon {
                width: 30px;
                height: 30px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0, 166, 103, .1);
                flex-shrink: 0;
            }

            .alert-danger .alert-icon {
                background: rgba(217, 45, 32, .08);
            }

            .alert strong {
                display: block;
                font-size: 13px;
                font-weight: 800;
                margin-bottom: 2px;
            }

            .alert p {
                margin: 0;
                font-size: 13px;
            }

            .alert-close {
                margin-left: auto;
                border: 0;
                background: transparent;
                cursor: pointer;
                color: currentColor;
                opacity: .6;
            }

            /* STATS */

            .stats-grid {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 16px;
                margin-bottom: 24px;
            }

            .stat-card {
                min-height: 145px;
                padding: 20px;
                border: 1px solid var(--border);
                border-radius: var(--radius-lg);
                background: var(--surface);
                box-shadow: var(--shadow-sm);
                position: relative;
                overflow: hidden;
            }

            .stat-card::after {
                content: "";
                position: absolute;
                width: 100px;
                height: 100px;
                right: -42px;
                bottom: -50px;
                border-radius: 50%;
                background: rgba(0, 166, 103, .055);
            }

            .stat-top {
                display: flex;
                align-items: center;
                gap: 11px;
            }

            .stat-icon {
                width: 38px;
                height: 38px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary-soft);
                color: var(--primary);
            }

            .stat-label {
                font-size: 13px;
                font-weight: 700;
                color: var(--text-secondary);
            }

            .stat-value {
                margin-top: 16px;
                font-family: "Manrope", sans-serif;
                font-size: 31px;
                line-height: 1;
                font-weight: 800;
                color: var(--black);
            }

            .stat-description {
                margin-top: 10px;
                display: flex;
                align-items: center;
                gap: 6px;
                color: var(--muted);
                font-size: 12px;
            }

            .stat-success .stat-icon {
                background: #E8F8F1;
                color: #008653;
            }

            .stat-dark .stat-icon {
                background: #F0F1F1;
                color: var(--black);
            }

            .stat-muted .stat-icon {
                background: #F2F3F3;
                color: #68726E;
            }

            /* MAIN CARD */

            .users-card {
                background: var(--surface);
                border: 1px solid var(--border);
                border-radius: var(--radius-xl);
                box-shadow: var(--shadow-sm);
                overflow: hidden;
            }

            .users-toolbar {
                min-height: 82px;
                padding: 18px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                border-bottom: 1px solid var(--border-light);
            }

            .toolbar-heading h2 {
                margin: 0;
                font-family: "Manrope", sans-serif;
                font-size: 17px;
                font-weight: 800;
                color: var(--black);
            }

            .toolbar-heading p {
                margin: 4px 0 0;
                color: var(--muted);
                font-size: 12px;
            }

            .toolbar-actions {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .search-box {
                width: 290px;
                height: 40px;
                display: flex;
                align-items: center;
                gap: 9px;
                padding: 0 11px;
                border: 1px solid var(--border);
                border-radius: 9px;
                background: white;
                color: var(--muted);
                transition: border-color .2s ease, box-shadow .2s ease;
            }

            .search-box:focus-within {
                border-color: var(--primary);
                box-shadow: 0 0 0 3px rgba(0, 166, 103, .09);
            }

            .search-box input {
                flex: 1;
                min-width: 0;
                border: 0;
                outline: 0;
                background: transparent;
                color: var(--text);
                font-family: inherit;
                font-size: 13px;
            }

            .search-box input::placeholder {
                color: #9BA39F;
            }

            .search-clear {
                width: 25px;
                height: 25px;
                padding: 0;
                border: 0;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #F0F2F1;
                color: var(--muted);
                cursor: pointer;
            }

            .search-clear:hover {
                background: var(--primary-soft);
                color: var(--primary);
            }

            /* TABLE */

            .table-wrapper {
                width: 100%;
                overflow-x: auto;
            }

            .users-table {
                width: 100%;
                min-width: 900px;
                border-collapse: collapse;
            }

            .users-table th {
                padding: 13px 18px;
                background: #FAFBFA;
                border-bottom: 1px solid var(--border);
                color: #68726E;
                font-size: 11px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: .6px;
                text-align: left;
                white-space: nowrap;
            }

            .users-table td {
                padding: 16px 18px;
                border-bottom: 1px solid var(--border-light);
                vertical-align: middle;
                font-size: 13px;
            }

            .users-table tbody tr {
                transition: background .15s ease;
            }

            .users-table tbody tr:hover {
                background: #FCFDFC;
            }

            .users-table tbody tr:last-child td {
                border-bottom: 0;
            }

            .id-column {
                width: 70px;
            }

            .actions-column {
                width: 165px;
                text-align: right !important;
            }

            .user-id {
                color: #89938E;
                font-size: 12px;
                font-weight: 700;
            }

            .user-cell {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 240px;
            }

            .avatar {
                width: 40px;
                height: 40px;
                flex: 0 0 40px;
                border-radius: 11px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary-soft);
                color: var(--primary-deep);
                font-family: "Manrope", sans-serif;
                font-size: 12px;
                font-weight: 800;
                text-transform: uppercase;
            }

            .avatar-admin {
                background: var(--black);
                color: white;
            }

            .avatar-large {
                width: 48px;
                height: 48px;
                flex-basis: 48px;
            }

            .user-info {
                min-width: 0;
            }

            .user-name {
                display: block;
                width: fit-content;
                max-width: 100%;
                color: var(--black);
                font-size: 13px;
                font-weight: 800;
                text-decoration: none;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .user-name:hover {
                color: var(--primary);
            }

            .user-email {
                margin-top: 4px;
                display: flex;
                align-items: center;
                gap: 5px;
                color: var(--muted);
                font-size: 11px;
                white-space: nowrap;
            }

            .role-badge,
            .status-badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                min-height: 27px;
                padding: 0 9px;
                border-radius: 999px;
                font-size: 11px;
                font-weight: 800;
                white-space: nowrap;
            }

            .role-user {
                color: #087443;
                background: var(--primary-soft);
            }

            .role-admin {
                color: var(--black);
                background: #F0F1F1;
            }

            .status-active {
                color: #087443;
                background: #EAF9F2;
            }

            .status-inactive {
                color: #66706C;
                background: #F1F3F2;
            }

            .status-dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: currentColor;
            }

            .joined-date {
                color: var(--text-secondary);
                font-size: 12px;
                white-space: nowrap;
            }

            /* ACTIONS */

            .row-actions {
                display: flex;
                justify-content: flex-end;
                gap: 6px;
            }

            .action-btn {
                width: 33px;
                height: 33px;
                border: 1px solid var(--border);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
                cursor: pointer;
                text-decoration: none;
                transition:
                    color .18s ease,
                    background .18s ease,
                    border-color .18s ease,
                    transform .18s ease;
            }

            .action-btn:hover {
                transform: translateY(-1px);
            }

            .action-view {
                color: #4B5551;
            }

            .action-view:hover {
                color: var(--black);
                background: #F2F3F3;
                border-color: #D6DCDA;
            }

            .action-edit {
                color: var(--primary-dark);
            }

            .action-edit:hover {
                background: var(--primary-soft);
                border-color: #B7E5D2;
            }

            .action-reset {
                color: #695C20;
            }

            .action-reset:hover {
                background: #FBF8E9;
                border-color: #E9DFAD;
            }

            .action-delete {
                color: var(--danger);
            }

            .action-delete:hover {
                background: var(--danger-soft);
                border-color: #F3C4BF;
            }

            /* EMPTY */

            .empty-cell {
                padding: 0 !important;
            }

            .empty-state {
                min-height: 300px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 50px 20px;
            }

            .empty-icon {
                width: 58px;
                height: 58px;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary-soft);
                color: var(--primary);
                margin-bottom: 15px;
            }

            .empty-state h3 {
                margin: 0;
                font-family: "Manrope", sans-serif;
                font-size: 16px;
                font-weight: 800;
                color: var(--black);
            }

            .empty-state p {
                max-width: 350px;
                margin: 7px 0 17px;
                color: var(--muted);
                font-size: 13px;
            }

            /* PAGINATION */

            .pagination-wrapper {
                min-height: 65px;
                padding: 12px 18px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                border-top: 1px solid var(--border-light);
            }

            .pagination-info {
                color: var(--muted);
                font-size: 12px;
            }

            .pagination {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .pagination-link {
                min-width: 32px;
                height: 32px;
                padding: 0 8px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--border);
                border-radius: 8px;
                background: white;
                color: var(--text-secondary);
                font-size: 12px;
                font-weight: 700;
                text-decoration: none;
                transition: .18s ease;
            }

            .pagination-link:hover:not(.disabled) {
                color: var(--primary);
                border-color: var(--primary);
            }

            .pagination-link.active {
                color: white;
                background: var(--primary);
                border-color: var(--primary);
            }

            .pagination-link.disabled {
                opacity: .4;
                pointer-events: none;
            }

            /* MODALS */

            .modal-backdrop {
                position: fixed;
                z-index: 9999;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(17, 17, 17, .58);
                backdrop-filter: blur(5px);
            }

            .custom-modal {
                width: 100%;
                max-width: 650px;
                max-height: calc(100vh - 40px);
                overflow-y: auto;
                border-radius: 18px;
                background: white;
                box-shadow:
                    0 24px 70px rgba(0, 0, 0, .2),
                    0 4px 18px rgba(0, 0, 0, .08);
                animation: modalIn .2s ease-out;
            }

            @keyframes modalIn {
                from {
                    opacity: 0;
                    transform: translateY(10px) scale(.985);
                }

                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }

            .modal-header {
                min-height: 78px;
                padding: 16px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                border-bottom: 1px solid var(--border-light);
            }

            .modal-title-area {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .modal-icon {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary-soft);
                color: var(--primary-dark);
                flex-shrink: 0;
            }

            .custom-modal-danger .modal-icon {
                color: var(--danger);
                background: var(--danger-soft);
            }

            .modal-header h2 {
                margin: 0;
                font-family: "Manrope", sans-serif;
                font-size: 17px;
                font-weight: 800;
                color: var(--black);
            }

            .modal-header p {
                margin: 4px 0 0;
                color: var(--muted);
                font-size: 12px;
            }

            .modal-close {
                width: 34px;
                height: 34px;
                border: 0;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #F4F6F5;
                color: var(--muted);
                cursor: pointer;
                transition: .18s ease;
            }

            .modal-close:hover {
                color: var(--black);
                background: #E9ECEB;
            }

            .modal-body {
                padding: 21px;
            }

            .modal-footer {
                padding: 15px 20px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 9px;
                border-top: 1px solid var(--border-light);
                background: #FCFDFC;
            }

            /* FORMS */

            .form-section {
                margin-bottom: 18px;
            }

            .section-heading {
                margin-bottom: 14px;
                color: var(--black);
                font-family: "Manrope", sans-serif;
                font-size: 12px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: .5px;
            }

            .form-grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 17px;
            }

            .form-grid-single {
                grid-template-columns: 1fr;
            }

            .form-field {
                min-width: 0;
            }

            .form-field label {
                display: block;
                margin-bottom: 7px;
                color: var(--text);
                font-size: 12px;
                font-weight: 700;
            }

            .required {
                color: var(--primary);
                margin-left: 3px;
            }

            .form-field input,
            .form-field select {
                width: 100%;
                height: 42px;
                padding: 0 12px;
                border: 1px solid var(--border);
                border-radius: 9px;
                outline: 0;
                background: white;
                color: var(--text);
                font-family: inherit;
                font-size: 13px;
                transition:
                    border-color .18s ease,
                    box-shadow .18s ease;
            }

            .form-field input::placeholder {
                color: #A2AAA7;
            }

            .form-field input:focus,
            .form-field select:focus {
                border-color: var(--primary);
                box-shadow: 0 0 0 3px rgba(0, 166, 103, .09);
            }

            .form-field .input-error {
                border-color: var(--danger);
            }

            .field-error {
                margin-top: 5px;
                color: var(--danger);
                font-size: 11px;
                font-weight: 600;
            }

            /* SECURITY */

            .security-note,
            .warning-note {
                margin-top: 19px;
                padding: 13px;
                display: flex;
                align-items: flex-start;
                gap: 10px;
                border: 1px solid #CDEBDD;
                border-radius: 10px;
                background: var(--primary-softer);
                color: #31594A;
            }

            .security-icon {
                width: 28px;
                height: 28px;
                flex: 0 0 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: var(--primary-soft);
                color: var(--primary-dark);
            }

            .security-note strong {
                display: block;
                margin-bottom: 2px;
                color: #174C39;
                font-size: 12px;
                font-weight: 800;
            }

            .security-note p {
                margin: 0;
                font-size: 11px;
                line-height: 1.5;
            }

            .warning-note {
                border-color: #F0E3AE;
                background: #FFFCED;
                color: #675B27;
            }

            .warning-note p {
                margin: 0;
                font-size: 11px;
                line-height: 1.5;
            }

            /* USER PREVIEW */

            .user-preview,
            .reset-user-card {
                margin-bottom: 19px;
                padding: 13px;
                display: flex;
                align-items: center;
                gap: 11px;
                border: 1px solid var(--border);
                border-radius: 11px;
                background: var(--surface-soft);
            }

            .user-preview strong,
            .reset-user-card strong {
                display: block;
                color: var(--black);
                font-size: 13px;
                font-weight: 800;
            }

            .user-preview span,
            .reset-user-card span {
                display: block;
                margin-top: 3px;
                color: var(--muted);
                font-size: 11px;
            }

            /* DELETE */

            .delete-warning {
                display: flex;
                gap: 14px;
                padding: 16px;
                border-radius: 12px;
                background: var(--danger-soft);
                border: 1px solid #F3C4BF;
            }

            .delete-icon {
                width: 43px;
                height: 43px;
                flex: 0 0 43px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 11px;
                background: white;
                color: var(--danger);
            }

            .delete-warning h3 {
                margin: 0 0 5px;
                color: var(--danger-dark);
                font-size: 14px;
                font-weight: 800;
            }

            .delete-warning p {
                margin: 0;
                color: #77443F;
                font-size: 12px;
                line-height: 1.55;
            }

            .delete-user-summary {
                margin-top: 14px;
                padding: 12px;
                display: flex;
                align-items: center;
                gap: 10px;
                border: 1px solid var(--border);
                border-radius: 10px;
            }

            .delete-user-summary > div:nth-child(2) {
                flex: 1;
                min-width: 0;
            }

            .delete-user-summary strong {
                display: block;
                font-size: 12px;
                color: var(--black);
            }

            .delete-user-summary span:not(.role-badge) {
                display: block;
                margin-top: 2px;
                color: var(--muted);
                font-size: 10px;
            }

            /* SPINNER */

            .spinner {
                width: 15px;
                height: 15px;
                border: 2px solid rgba(255,255,255,.4);
                border-top-color: white;
                border-radius: 50%;
                animation: spin .65s linear infinite;
            }

            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }

            /* RESPONSIVE */

            @media (max-width: 1100px) {
                .stats-grid {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }
            }

            @media (max-width: 768px) {
                .users-page {
                    padding: 20px 14px 35px;
                }

                .header-main {
                    align-items: flex-start;
                    flex-direction: column;
                }

                .header-main > .btn {
                    width: 100%;
                }

                .title-row h1 {
                    font-size: 23px;
                }

                .stats-grid {
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .stat-card {
                    padding: 15px;
                    min-height: 125px;
                }

                .stat-value {
                    font-size: 26px;
                }

                .users-toolbar {
                    align-items: stretch;
                    flex-direction: column;
                }

                .search-box {
                    width: 100%;
                }

                .toolbar-actions {
                    width: 100%;
                }

                .pagination-wrapper {
                    align-items: flex-start;
                    flex-direction: column;
                }

                .pagination {
                    width: 100%;
                    overflow-x: auto;
                    padding-bottom: 2px;
                }

                .form-grid {
                    grid-template-columns: 1fr;
                }

                .modal-backdrop {
                    padding: 10px;
                    align-items: flex-end;
                }

                .custom-modal {
                    max-height: calc(100vh - 20px);
                    border-radius: 17px 17px 0 0;
                }
            }

            @media (max-width: 480px) {
                .stats-grid {
                    grid-template-columns: 1fr;
                }

                .title-icon {
                    width: 44px;
                    height: 44px;
                }

                .title-row {
                    gap: 11px;
                }

                .users-table {
                    min-width: 850px;
                }

                .modal-header {
                    padding: 14px;
                }

                .modal-body {
                    padding: 16px;
                }

                .modal-footer {
                    padding: 12px 14px;
                }

                .modal-footer .btn {
                    flex: 1;
                }

                .delete-user-summary {
                    align-items: flex-start;
                    flex-wrap: wrap;
                }

                .delete-user-summary .role-badge {
                    margin-left: 51px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                *,
                *::before,
                *::after {
                    animation-duration: .01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: .01ms !important;
                }
            }
        `})}export{Oe as default};
