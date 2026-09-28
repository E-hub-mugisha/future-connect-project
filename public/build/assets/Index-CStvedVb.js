import{r as h,j as e,H as A,L as W,a as L,c as E,u as D}from"./app-B2SIh33N.js";import{A as F}from"./AppLayout-CkTPU_ZW.js";const C='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif',f={Plus:t=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",width:"16",height:"16",...t,children:e.jsx("path",{d:"M12 5v14M5 12h14",strokeLinecap:"round"})}),Eye:t=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",width:"16",height:"16",...t,children:[e.jsx("path",{d:"M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"12",cy:"12",r:"3.2"})]}),Search:t=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",width:"17",height:"17",...t,children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m21 21-4.3-4.3",strokeLinecap:"round"})]}),Trash:t=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",width:"16",height:"16",...t,children:e.jsx("path",{d:"M4 7h16M9 7V4.8c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8V7M6 7l.9 12.2a2 2 0 0 0 2 1.8h6.2a2 2 0 0 0 2-1.8L18 7",strokeLinecap:"round"})}),Refresh:t=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",width:"16",height:"16",...t,children:[e.jsx("path",{d:"M3.5 12a8.5 8.5 0 0 1 14.6-5.9M20.5 12a8.5 8.5 0 0 1-14.6 5.9",strokeLinecap:"round"}),e.jsx("path",{d:"M4 4v5h5M20 20v-5h-5",strokeLinecap:"round",strokeLinejoin:"round"})]}),More:t=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18",...t,children:[e.jsx("circle",{cx:"12",cy:"5",r:"1.5"}),e.jsx("circle",{cx:"12",cy:"12",r:"1.5"}),e.jsx("circle",{cx:"12",cy:"19",r:"1.5"})]}),Box:t=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",width:"22",height:"22",...t,children:[e.jsx("path",{d:"M21 8 12 3 3 8l9 5 9-5Z",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M3 8v8l9 5 9-5V8M12 13v8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Category:t=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",width:"17",height:"17",...t,children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]}),Arrow:t=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",width:"15",height:"15",...t,children:e.jsx("path",{d:"M5 12h14M13 6l6 6-6 6",strokeLinecap:"round",strokeLinejoin:"round"})}),Close:t=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",width:"18",height:"18",...t,children:e.jsx("path",{d:"M6 6l12 12M18 6 6 18",strokeLinecap:"round"})})},R={approved:{label:"Approved",bg:"#eaf8f1",fg:"#16734b",dot:"#20a464"},pending:{label:"Pending",bg:"#fff7e5",fg:"#986500",dot:"#e0a11a"},rejected:{label:"Rejected",bg:"#fff0ef",fg:"#b42318",dot:"#df4b42"}};function P(t){const r=Number(t);return Number.isFinite(r)?new Intl.NumberFormat("en-RW",{style:"currency",currency:"RWF",maximumFractionDigits:0}).format(r):"—"}function H(t){if(!t)return"—";try{return new Date(t).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function U(t){const r=String(t).trim().split(/\s+/).filter(Boolean);return r.length===0?"NA":r.length===1?r[0].substring(0,2).toUpperCase():(r[0].charAt(0)+r[1].charAt(0)).toUpperCase()}function I(t){const r=[["#eef4ff","#3567d6"],["#edf9f3","#168455"],["#fff3e8","#bd6b16"],["#f5efff","#7650c9"],["#fff0f3","#c24b6d"]];let n=0;return String(t).split("").forEach(s=>{n=s.charCodeAt(0)+((n<<5)-n)}),r[Math.abs(n)%r.length]}function B({status:t}){const r=R[t]||R.pending;return e.jsxs("span",{className:"d-inline-flex align-items-center gap-2",style:{backgroundColor:r.bg,color:r.fg,borderRadius:"999px",padding:"5px 10px",fontSize:11,fontWeight:600,letterSpacing:"-0.1px",whiteSpace:"nowrap",colorScheme:"light"},children:[e.jsx("span",{style:{width:5,height:5,borderRadius:"50%",backgroundColor:r.dot}}),r.label]})}function _({src:t,name:r}){return t?e.jsx("img",{src:t,alt:r,className:"flex-shrink-0",style:{width:48,height:48,borderRadius:12,objectFit:"cover",background:"#f5f5f7"}}):e.jsx("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0",style:{width:48,height:48,borderRadius:12,background:"#f5f5f7",color:"#8e8e93"},children:e.jsx(f.Box,{})})}function z({label:t,value:r,icon:n,tone:s}){return e.jsx("div",{className:"col-6 col-xl-3",children:e.jsx("div",{className:"h-100",style:{background:"#ffffff",border:"1px solid #e8e8ed",borderRadius:18,padding:"18px 19px",colorScheme:"light"},children:e.jsxs("div",{className:"d-flex align-items-start justify-content-between",children:[e.jsxs("div",{children:[e.jsx("div",{style:{color:"#86868b",fontSize:11,fontWeight:500,letterSpacing:"-0.1px",marginBottom:7},children:t}),e.jsx("div",{style:{color:"#1d1d1f",fontSize:25,lineHeight:1,fontWeight:650,letterSpacing:"-0.8px"},children:r})]}),e.jsx("div",{className:"d-flex align-items-center justify-content-center",style:{width:34,height:34,borderRadius:10,background:s},children:n})]})})})}function M({open:t,onClose:r,title:n,eyebrow:s,children:c,width:p=650}){return h.useEffect(()=>{if(!t)return;const a=m=>{m.key==="Escape"&&r()};document.addEventListener("keydown",a);const b=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",a),document.body.style.overflow=b}},[t,r]),t?E.createPortal(e.jsx("div",{className:"products-page-light-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center",style:{zIndex:1080,background:"rgba(20, 20, 22, 0.25)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",padding:20,fontFamily:C,colorScheme:"light"},onMouseDown:a=>{a.target===a.currentTarget&&r()},children:e.jsxs("div",{className:"w-100",style:{maxWidth:p,maxHeight:"calc(100vh - 40px)",overflowY:"auto",background:"#ffffff",color:"#1d1d1f",colorScheme:"light",border:"1px solid #e5e5ea",borderRadius:22,boxShadow:"0 25px 80px rgba(0,0,0,.16)",overflow:"hidden"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start",style:{padding:"23px 24px 18px",borderBottom:"1px solid #f0f0f2"},children:[e.jsxs("div",{children:[s&&e.jsx("div",{style:{color:"#8e8e93",fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".08em",marginBottom:5},children:s}),e.jsx("h5",{className:"mb-0",style:{color:"#1d1d1f",fontSize:19,fontWeight:650,letterSpacing:"-0.45px"},children:n})]}),e.jsx("button",{type:"button","aria-label":"Close",className:"border-0 d-flex align-items-center justify-content-center",onClick:r,style:{width:32,height:32,borderRadius:50,background:"#f5f5f7",color:"#6e6e73"},children:e.jsx(f.Close,{})})]}),c]})}),document.body):null}function V({product:t,open:r,onClose:n}){var c,p,a;if(!t)return null;const s=t.image?"/storage/"+t.image:null;return e.jsxs(M,{open:r,onClose:n,eyebrow:"Product #"+t.id,title:t.name,children:[e.jsx("div",{style:{padding:24},children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-5",children:e.jsx("div",{style:{width:"100%",aspectRatio:"1 / 1",borderRadius:18,overflow:"hidden",background:"#f5f5f7"},children:s?e.jsx("img",{src:s,alt:t.name,className:"w-100 h-100",style:{objectFit:"cover"}}):e.jsx("div",{className:"w-100 h-100 d-flex align-items-center justify-content-center",style:{color:"#8e8e93"},children:e.jsx(f.Box,{})})})}),e.jsxs("div",{className:"col-md-7",children:[e.jsx(B,{status:t.status}),e.jsx("p",{className:"mt-3 mb-4",style:{color:"#6e6e73",fontSize:13,lineHeight:1.65},children:t.description||"No description provided."}),e.jsxs("div",{className:"row g-3",style:{borderTop:"1px solid #f0f0f2",paddingTop:18},children:[e.jsxs("div",{className:"col-6",children:[e.jsx("div",{className:"small mb-1",style:{color:"#86868b",fontSize:11},children:"Price"}),e.jsx("div",{style:{fontSize:15,fontWeight:600,color:"#1d1d1f"},children:P(t.price)})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("div",{className:"small mb-1",style:{color:"#86868b",fontSize:11},children:"Category"}),e.jsx("div",{style:{fontSize:13,fontWeight:500,color:"#1d1d1f"},children:((c=t.category)==null?void 0:c.name)||"Uncategorized"})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("div",{className:"small mb-1",style:{color:"#86868b",fontSize:11},children:"Seller"}),e.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#1d1d1f"},children:((p=t.seller)==null?void 0:p.company_name)||"N/A"}),e.jsx("div",{style:{marginTop:2,color:"#86868b",fontSize:11},children:((a=t.seller)==null?void 0:a.address)||""})]})]})]})]})}),e.jsxs("div",{className:"d-flex justify-content-end gap-2",style:{padding:"15px 24px",background:"#fafafa",borderTop:"1px solid #f0f0f2"},children:[e.jsx("button",{type:"button",className:"btn rounded-pill px-4",onClick:n,style:{fontSize:12,fontWeight:600,color:"#1d1d1f",background:"#f2f2f7",border:"1px solid #e5e5ea"},children:"Close"}),e.jsx(W,{href:route("admin.products.view",t.id),className:"btn rounded-pill px-4",style:{fontSize:12,fontWeight:600,color:"#ffffff",background:"#0071e3",border:"1px solid #0071e3"},children:"Full view"})]})]})}function O({product:t,open:r,onClose:n}){const{data:s,setData:c,patch:p,processing:a}=D({status:(t==null?void 0:t.status)||"pending"});if(h.useEffect(()=>{t&&c("status",t.status||"pending")},[t]),!t)return null;const b=[{value:"pending",label:"Pending",hint:"Awaiting review."},{value:"approved",label:"Approved",hint:"Product becomes visible to buyers."},{value:"rejected",label:"Rejected",hint:"Product remains hidden."}],m=d=>{d.preventDefault(),p(route("admin.products.updateStatus",t.id),{preserveScroll:!0,onSuccess:n})};return e.jsx(M,{open:r,onClose:n,eyebrow:t.name,title:"Update status",width:500,children:e.jsxs("form",{onSubmit:m,children:[e.jsx("div",{style:{padding:24},children:e.jsx("div",{className:"d-flex flex-column gap-2",children:b.map(d=>{const u=s.status===d.value,g=R[d.value];return e.jsxs("label",{className:"d-flex align-items-center gap-3",style:{cursor:"pointer",padding:13,borderRadius:14,border:"1px solid "+(u?g.fg:"#e8e8ed"),background:u?g.bg:"#ffffff",colorScheme:"light"},children:[e.jsx("input",{type:"radio",name:"status",checked:u,onChange:()=>c("status",d.value),className:"form-check-input m-0",style:{colorScheme:"light"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#1d1d1f"},children:d.label}),e.jsx("div",{style:{fontSize:11,color:"#86868b",marginTop:2},children:d.hint})]})]},d.value)})})}),e.jsxs("div",{className:"d-flex justify-content-end gap-2",style:{padding:"15px 24px",background:"#fafafa",borderTop:"1px solid #f0f0f2"},children:[e.jsx("button",{type:"button",className:"btn rounded-pill px-4",onClick:n,style:{fontSize:12,fontWeight:600,color:"#1d1d1f",background:"#f2f2f7",border:"1px solid #e5e5ea"},children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn rounded-pill px-4",disabled:a||s.status===t.status,style:{fontSize:12,fontWeight:600,background:a||s.status===t.status?"#c7c7cc":"#0071e3",color:"#ffffff",border:"1px solid "+(a||s.status===t.status?"#c7c7cc":"#0071e3")},children:a?"Updating…":"Update status"})]})]})})}function G({product:t,open:r,onClose:n}){if(!t)return null;const s=()=>{L.delete(route("admin.products.destroy",t.id),{preserveScroll:!0,onSuccess:n})};return e.jsxs(M,{open:r,onClose:n,eyebrow:"Permanent action",title:"Delete product",width:460,children:[e.jsx("div",{style:{padding:24},children:e.jsxs("div",{className:"d-flex align-items-start gap-3",style:{background:"#fff4f3",borderRadius:14,padding:14,border:"1px solid #fde1df"},children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0",style:{width:36,height:36,borderRadius:10,background:"#fee4e2",color:"#b42318"},children:e.jsx(f.Trash,{})}),e.jsxs("div",{style:{fontSize:12,lineHeight:1.6,color:"#6e6e73"},children:["Are you sure you want to delete"," ",e.jsx("strong",{style:{color:"#1d1d1f"},children:t.name}),"? This action cannot be undone."]})]})}),e.jsxs("div",{className:"d-flex justify-content-end gap-2",style:{padding:"15px 24px",background:"#fafafa",borderTop:"1px solid #f0f0f2"},children:[e.jsx("button",{type:"button",className:"btn rounded-pill px-4",onClick:n,style:{fontSize:12,fontWeight:600,color:"#1d1d1f",background:"#f2f2f7",border:"1px solid #e5e5ea"},children:"Cancel"}),e.jsxs("button",{type:"button",className:"btn rounded-pill px-4 d-flex align-items-center gap-2",onClick:s,style:{fontSize:12,fontWeight:600,color:"#ffffff",background:"#d92d20",border:"1px solid #d92d20"},children:[e.jsx(f.Trash,{}),"Delete"]})]})]})}function Y({onStatus:t,onDelete:r}){const[n,s]=h.useState(!1),c=h.useRef(null),p=h.useRef(null),[a,b]=h.useState({top:0,left:0}),m=190,d=100,u=7,g=10,y=()=>{if(!c.current)return;const i=c.current.getBoundingClientRect();let o=i.right-m,l=i.bottom+u;o+m>window.innerWidth-g&&(o=window.innerWidth-m-g),o<g&&(o=g);const x=window.innerHeight-i.bottom,k=i.top;x<d+u&&k>d+u&&(l=i.top-d-u),l<g&&(l=g),l+d>window.innerHeight-g&&(l=window.innerHeight-d-g),b({top:l,left:o})},j=()=>{n||y(),s(i=>!i)};h.useEffect(()=>{if(!n)return;y();const i=x=>{c.current&&c.current.contains(x.target)||p.current&&p.current.contains(x.target)||s(!1)},o=x=>{x.key==="Escape"&&s(!1)},l=()=>{y()};return document.addEventListener("mousedown",i),document.addEventListener("keydown",o),window.addEventListener("resize",l),window.addEventListener("scroll",l,!0),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("keydown",o),window.removeEventListener("resize",l),window.removeEventListener("scroll",l,!0)}},[n]);const v=n?E.createPortal(e.jsxs("div",{ref:p,role:"menu",className:"products-page-light-modal",style:{position:"fixed",top:a.top,left:a.left,width:m,zIndex:99999,padding:5,background:"#ffffff",color:"#1d1d1f",colorScheme:"light",border:"1px solid #e5e5ea",borderRadius:14,boxShadow:"0 18px 45px rgba(0,0,0,.12), 0 4px 12px rgba(0,0,0,.05)",fontFamily:C},children:[e.jsxs("button",{type:"button",role:"menuitem",className:"w-100 border-0 text-start d-flex align-items-center gap-2",onClick:()=>{s(!1),t()},style:{minHeight:39,padding:"7px 9px",borderRadius:10,background:"#ffffff",color:"#1d1d1f",fontSize:12,fontWeight:500,transition:"background-color .15s ease"},onMouseEnter:i=>{i.currentTarget.style.background="#f5f5f7"},onMouseLeave:i=>{i.currentTarget.style.background="#ffffff"},children:[e.jsx("span",{className:"d-flex align-items-center justify-content-center flex-shrink-0",style:{width:27,height:27,borderRadius:8,background:"#f5f5f7",color:"#6e6e73"},children:e.jsx(f.Refresh,{})}),e.jsx("span",{children:"Update status"})]}),e.jsxs("button",{type:"button",role:"menuitem",className:"w-100 border-0 text-start d-flex align-items-center gap-2",onClick:()=>{s(!1),r()},style:{minHeight:39,padding:"7px 9px",borderRadius:10,background:"#ffffff",color:"#b42318",fontSize:12,fontWeight:500,transition:"background-color .15s ease"},onMouseEnter:i=>{i.currentTarget.style.background="#fff5f4"},onMouseLeave:i=>{i.currentTarget.style.background="#ffffff"},children:[e.jsx("span",{className:"d-flex align-items-center justify-content-center flex-shrink-0",style:{width:27,height:27,borderRadius:8,background:"#fff0ef",color:"#b42318"},children:e.jsx(f.Trash,{})}),e.jsx("span",{children:"Delete product"})]})]}),document.body):null;return e.jsxs(e.Fragment,{children:[e.jsx("button",{ref:c,type:"button","aria-label":"Product actions","aria-expanded":n,className:"border-0 d-flex align-items-center justify-content-center",onClick:j,style:{width:34,height:34,borderRadius:10,background:n?"#e8e8ed":"#f5f5f7",color:"#6e6e73",colorScheme:"light",transition:"background-color .15s ease"},onMouseEnter:i=>{i.currentTarget.style.background="#e8e8ed"},onMouseLeave:i=>{n||(i.currentTarget.style.background="#f5f5f7")},children:e.jsx(f.More,{})}),v]})}function Q({products:t=[],counts:r,filters:n,flash:s}){const[c,p]=h.useState(null),[a,b]=h.useState(null),[m,d]=h.useState(null),[u,g]=h.useState(""),y=(n==null?void 0:n.status)||"all",j=h.useMemo(()=>r||{total:t.length,approved:t.filter(o=>o.status==="approved").length,pending:t.filter(o=>o.status==="pending").length,rejected:t.filter(o=>o.status==="rejected").length},[t,r]),v=h.useMemo(()=>{const o=u.trim().toLowerCase();return o?t.filter(l=>{var w,S;const x=String(l.name||""),k=String(((w=l.seller)==null?void 0:w.company_name)||""),N=String(((S=l.category)==null?void 0:S.name)||"");return x.toLowerCase().includes(o)||k.toLowerCase().includes(o)||N.toLowerCase().includes(o)}):t},[t,u]),i=o=>{L.get(route("admin.products.index"),o==="all"?{}:{status:o},{preserveState:!0,preserveScroll:!0,replace:!0})};return e.jsxs(F,{children:[e.jsx(A,{title:"Products"}),e.jsxs("div",{className:"products-page-light",children:[e.jsx("style",{children:`
                    .products-page-light,
                    .products-page-light *,
                    .products-page-light-modal,
                    .products-page-light-modal * {
                        color-scheme: light !important;
                    }

                    .products-page-light {
                        min-height: 100vh;
                        padding: 25px 40px 40px;
                        font-family: ${C};
                        font-synthesis: none;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        color: #1d1d1f !important;
                        background: #ffffff !important;
                        letter-spacing: -0.15px;
                    }

                    .products-page-light input,
                    .products-page-light textarea,
                    .products-page-light select,
                    .products-page-light .form-control,
                    .products-page-light .form-select {
                        color-scheme: light !important;
                        background-color: #ffffff !important;
                        color: #1d1d1f !important;
                        border-color: #dedee3 !important;
                    }

                    .products-page-light input::placeholder,
                    .products-page-light textarea::placeholder {
                        color: #8e8e93 !important;
                        opacity: 1 !important;
                    }

                    .products-page-light input:focus,
                    .products-page-light textarea:focus,
                    .products-page-light select:focus,
                    .products-page-light .form-control:focus,
                    .products-page-light .form-select:focus {
                        color: #1d1d1f !important;
                        background-color: #ffffff !important;
                        border-color: #b8b8be !important;
                        box-shadow: 0 0 0 0.2rem rgba(0, 113, 227, 0.10) !important;
                    }

                    .products-page-light option {
                        color: #1d1d1f !important;
                        background: #ffffff !important;
                    }

                    .products-page-light button,
                    .products-page-light .btn,
                    .products-page-light a {
                        color-scheme: light !important;
                    }

                    .products-page-light .table {
                        --bs-table-bg: #ffffff !important;
                        --bs-table-color: #1d1d1f !important;
                        --bs-table-border-color: #ededf0 !important;
                        color: #1d1d1f !important;
                        background-color: #ffffff !important;
                    }

                    .products-page-light .table > :not(caption) > * > * {
                        background-color: transparent !important;
                        color: inherit !important;
                    }

                    .products-page-light .table thead,
                    .products-page-light .table tbody,
                    .products-page-light .table tr,
                    .products-page-light .table td,
                    .products-page-light .table th {
                        color-scheme: light !important;
                    }

                    .products-page-light-modal {
                        color-scheme: light !important;
                    }

                    .products-page-light-modal input,
                    .products-page-light-modal textarea,
                    .products-page-light-modal select,
                    .products-page-light-modal .form-control,
                    .products-page-light-modal .form-select {
                        background-color: #ffffff !important;
                        color: #1d1d1f !important;
                    }

                    .products-page-light-modal button {
                        color-scheme: light !important;
                    }

                    @media (prefers-color-scheme: dark) {
                        .products-page-light {
                            background: #ffffff !important;
                            color: #1d1d1f !important;
                        }

                        .products-page-light input,
                        .products-page-light textarea,
                        .products-page-light select,
                        .products-page-light .form-control,
                        .products-page-light .form-select {
                            background-color: #ffffff !important;
                            color: #1d1d1f !important;
                            border-color: #dedee3 !important;
                        }

                        .products-page-light .table {
                            background-color: #ffffff !important;
                            color: #1d1d1f !important;
                        }

                        .products-page-light-modal {
                            color: #1d1d1f !important;
                        }

                        .products-page-light-modal > div {
                            background-color: #ffffff !important;
                            color: #1d1d1f !important;
                        }
                    }

                    .products-page-light ::selection {
                        background: #dbeafe !important;
                        color: #1d1d1f !important;
                    }

                    .products-page-light .product-filter-btn {
                        transition:
                            background-color .15s ease,
                            color .15s ease;
                    }

                    .products-page-light .product-filter-btn:hover {
                        background: #f5f5f7 !important;
                        color: #1d1d1f !important;
                    }

                    .products-page-light .product-view-btn {
                        transition:
                            background-color .15s ease,
                            transform .15s ease;
                    }

                    .products-page-light .product-view-btn:hover {
                        background: #e8e8ed !important;
                    }

                    .products-page-light .product-primary-btn {
                        transition:
                            background-color .15s ease,
                            border-color .15s ease;
                    }

                    .products-page-light .product-primary-btn:hover {
                        background: #0077ed !important;
                        border-color: #0077ed !important;
                    }

                    @media (max-width: 991.98px) {
                        .products-page-light {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                    }

                    @media (max-width: 575.98px) {
                        .products-page-light {
                            padding: 18px 14px 30px;
                        }
                    }
                `}),e.jsxs("div",{className:"d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",style:{fontSize:11,color:"#86868b",fontWeight:500},children:[e.jsx("span",{children:"Admin"}),e.jsx("span",{children:"/"}),e.jsx("span",{style:{color:"#1d1d1f"},children:"Products"})]}),e.jsx("h2",{className:"mb-1",style:{fontSize:27,lineHeight:1.15,fontWeight:650,letterSpacing:"-0.9px",color:"#1d1d1f"},children:"Products"}),e.jsx("p",{className:"mb-0",style:{color:"#86868b",fontSize:12.5},children:"Manage your marketplace products, categories and listings."})]}),e.jsxs("div",{className:"d-flex align-items-center gap-2 flex-wrap",children:[e.jsxs(W,{href:"/admin/product-categories",className:"d-flex align-items-center gap-2 text-decoration-none",style:{height:38,padding:"0 15px",borderRadius:999,border:"1px solid #dedee3",background:"#ffffff",color:"#1d1d1f",fontSize:12,fontWeight:600},children:[e.jsx(f.Category,{}),"Product Categories",e.jsx(f.Arrow,{})]}),e.jsxs(W,{href:route("admin.products.create"),className:"product-primary-btn d-flex align-items-center gap-2 text-decoration-none",style:{height:38,padding:"0 16px",borderRadius:999,background:"#0071e3",color:"#ffffff",border:"1px solid #0071e3",fontSize:12,fontWeight:600},children:[e.jsx(f.Plus,{}),"Add Product"]})]})]}),(s==null?void 0:s.success)&&e.jsx("div",{className:"mb-4",style:{padding:"11px 14px",borderRadius:12,background:"#edf9f3",border:"1px solid #d5f1e1",color:"#16734b",fontSize:12},children:s.success}),e.jsxs("div",{className:"row g-3 mb-4",children:[e.jsx(z,{label:"Total products",value:j.total,tone:"#eef3ff",icon:e.jsx(f.Box,{style:{color:"#4169d8"}})}),e.jsx(z,{label:"Approved",value:j.approved,tone:"#edf9f3",icon:e.jsx("span",{style:{color:"#168455",fontSize:16,fontWeight:700},children:"✓"})}),e.jsx(z,{label:"Pending review",value:j.pending,tone:"#fff7e5",icon:e.jsx("span",{style:{color:"#a66b00",fontSize:15,fontWeight:700},children:"•"})}),e.jsx(z,{label:"Rejected",value:j.rejected,tone:"#fff0ef",icon:e.jsx("span",{style:{color:"#c5362c",fontSize:16,fontWeight:700},children:"×"})})]}),e.jsxs("div",{style:{background:"#ffffff",color:"#1d1d1f",colorScheme:"light",border:"1px solid #e8e8ed",borderRadius:20,overflow:"visible"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap gap-3",style:{padding:"17px 19px",borderBottom:"1px solid #ededf0",borderRadius:"20px 20px 0 0"},children:[e.jsx("div",{className:"d-flex align-items-center gap-1 flex-wrap",children:["all","pending","approved","rejected"].map(o=>{const l=y===o;return e.jsx("button",{type:"button",className:"product-filter-btn",onClick:()=>i(o),style:{border:"none",background:l?"#f2f2f7":"transparent",color:l?"#1d1d1f":"#6e6e73",borderRadius:999,padding:"7px 12px",fontSize:11,fontWeight:600,textTransform:"capitalize"},children:o==="all"?"All":o},o)})}),e.jsxs("div",{className:"position-relative",style:{width:270,maxWidth:"100%"},children:[e.jsx("span",{className:"position-absolute",style:{left:12,top:8,color:"#8e8e93",zIndex:2},children:e.jsx(f.Search,{})}),e.jsx("input",{type:"text",value:u,onChange:o=>g(o.target.value),placeholder:"Search products...",className:"form-control",style:{height:34,borderRadius:999,border:"1px solid #e0e0e5",background:"#f8f8fa",paddingLeft:38,fontSize:11.5,boxShadow:"none",color:"#1d1d1f"}})]})]}),e.jsx("div",{className:"table-responsive",style:{overflowX:"auto",overflowY:"visible"},children:e.jsxs("table",{className:"table align-middle mb-0",style:{minWidth:850,background:"#ffffff",color:"#1d1d1f"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#fafafa"},children:[["Product","Seller","Price","Status","Created"].map(o=>e.jsx("th",{className:"px-3 py-3",style:{color:"#86868b",fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".04em",borderBottom:"1px solid #ededf0",background:"#fafafa"},children:o},o)),e.jsx("th",{className:"px-4 py-3 text-end",style:{color:"#86868b",fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".04em",borderBottom:"1px solid #ededf0",background:"#fafafa"},children:"Action"})]})}),e.jsxs("tbody",{children:[v.length===0&&e.jsx("tr",{children:e.jsxs("td",{colSpan:"6",className:"text-center",style:{padding:"70px 20px",background:"#ffffff"},children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center mx-auto mb-3",style:{width:52,height:52,borderRadius:16,background:"#f5f5f7",color:"#8e8e93"},children:e.jsx(f.Box,{})}),e.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#1d1d1f"},children:"No products found"}),e.jsx("div",{style:{fontSize:11,color:"#86868b",marginTop:4},children:"Try another search or filter."})]})}),v.map(o=>{var w,S,T;const l=o.image?"/storage/"+o.image:null,x=((w=o.seller)==null?void 0:w.company_name)||"N/A",k=((S=o.category)==null?void 0:S.name)||"Uncategorized",N=I(x);return e.jsxs("tr",{style:{borderBottom:"1px solid #f1f1f3",background:"#ffffff"},children:[e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx(_,{src:l,name:o.name}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("div",{style:{fontSize:12.5,fontWeight:600,color:"#1d1d1f",marginBottom:3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:260},children:o.name}),e.jsx("div",{style:{fontSize:10.5,color:"#86868b"},children:k})]})]})}),e.jsx("td",{className:"px-3 py-3",children:e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0",style:{width:31,height:31,borderRadius:10,background:N[0],color:N[1],fontSize:10,fontWeight:700},children:U(x)}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11.5,fontWeight:600,color:"#1d1d1f"},children:x}),e.jsx("div",{style:{fontSize:10,color:"#86868b"},children:((T=o.seller)==null?void 0:T.address)||""})]})]})}),e.jsx("td",{className:"px-3 py-3",children:e.jsx("span",{style:{fontSize:12,fontWeight:650,color:"#1d1d1f"},children:P(o.price)})}),e.jsx("td",{className:"px-3 py-3",children:e.jsx(B,{status:o.status})}),e.jsx("td",{className:"px-3 py-3",children:e.jsx("span",{style:{fontSize:11,color:"#86868b"},children:H(o.created_at)})}),e.jsx("td",{className:"px-4 py-3",style:{position:"relative"},children:e.jsxs("div",{className:"d-flex align-items-center justify-content-end gap-2",children:[e.jsxs("button",{type:"button",onClick:()=>p(o),className:"product-view-btn border-0 d-flex align-items-center gap-1",style:{height:32,padding:"0 11px",borderRadius:999,background:"#f5f5f7",color:"#1d1d1f",fontSize:11,fontWeight:600},children:[e.jsx(f.Eye,{}),"View"]}),e.jsx(Y,{onStatus:()=>b(o),onDelete:()=>d(o)})]})})]},o.id)})]})]})}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap gap-2",style:{padding:"13px 19px",background:"#fafafa",borderTop:"1px solid #ededf0",borderRadius:"0 0 20px 20px"},children:[e.jsxs("span",{style:{color:"#86868b",fontSize:10.5},children:["Showing"," ",e.jsx("strong",{style:{color:"#1d1d1f"},children:v.length})," ","of"," ",e.jsx("strong",{style:{color:"#1d1d1f"},children:t.length})," ","products"]}),e.jsxs(W,{href:"/admin/product-categories",className:"text-decoration-none d-flex align-items-center gap-1",style:{color:"#0071e3",fontSize:10.5,fontWeight:600},children:["Manage categories",e.jsx(f.Arrow,{})]})]})]})]}),e.jsx(V,{product:c,open:!!c,onClose:()=>p(null)}),e.jsx(O,{product:a,open:!!a,onClose:()=>b(null)}),e.jsx(G,{product:m,open:!!m,onClose:()=>d(null)})]})}export{Q as default};
