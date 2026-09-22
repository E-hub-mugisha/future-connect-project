import{r as c,j as e,H as P,a as Y,u as H}from"./app-CJlpfYPO.js";import{A as V}from"./AppLayout-WTBEreOn.js";function de({categories:t=[],flash:a={},errors:i={}}){const o=Array.isArray(t)?t:(t==null?void 0:t.data)??[],n={store:()=>route("admin.categories.store"),update:d=>route("admin.categories.update",d),destroy:d=>route("admin.categories.destroy",d)},[r,l]=c.useState(""),[s,p]=c.useState("all"),[h,g]=c.useState(!1),[v,j]=c.useState(null),[m,b]=c.useState(null),x=c.useMemo(()=>{const d=o.length,u=o.filter(C=>!!C.featured).length;return{total:d,featured:u,standard:d-u}},[o]),f=c.useMemo(()=>{const d=r.trim().toLowerCase();return o.filter(u=>{const C=!d||String(u.name??"").toLowerCase().includes(d)||String(u.description??"").toLowerCase().includes(d)||String(u.slug??"").toLowerCase().includes(d),U=s==="all"||s==="featured"&&!!u.featured||s==="standard"&&!u.featured;return C&&U})},[o,r,s]),y=()=>{l(""),p("all")},B=r.trim()!==""||s!=="all",$=()=>{m&&Y.delete(n.destroy(m.id),{preserveScroll:!0,onSuccess:()=>{b(null)}})};return e.jsxs(V,{children:[e.jsx(P,{title:"Categories"}),e.jsx("style",{children:ne}),e.jsxs("div",{className:"categories-page",children:[e.jsx(Z,{flash:a,errors:i}),e.jsxs("section",{className:"categories-hero",children:[e.jsxs("div",{className:"hero-main",children:[e.jsxs("div",{className:"hero-kicker",children:[e.jsx("span",{className:"kicker-line"}),"Content structure"]}),e.jsxs("div",{className:"hero-title-row",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Categories"}),e.jsx("p",{children:"Organize your platform content into clear, meaningful groups that are easy to discover and manage."})]}),e.jsxs("div",{className:"hero-count",children:[e.jsx("strong",{children:x.total}),e.jsx("span",{children:"Total categories"})]})]})]}),e.jsxs("button",{type:"button",className:"primary-button hero-add",onClick:()=>g(!0),children:[e.jsx(w,{}),e.jsx("span",{children:"Create category"})]})]}),e.jsxs("section",{className:"overview-panel",children:[e.jsxs("div",{className:"overview-intro",children:[e.jsx("div",{className:"overview-icon",children:e.jsx(S,{})}),e.jsxs("div",{children:[e.jsx("span",{className:"section-label",children:"Category overview"}),e.jsx("h2",{children:"Keep your content structure organized"})]})]}),e.jsxs("div",{className:"overview-stats",children:[e.jsx(N,{label:"All categories",value:x.total,icon:e.jsx(S,{}),active:s==="all",onClick:()=>p("all")}),e.jsx(N,{label:"Featured",value:x.featured,icon:e.jsx(k,{}),active:s==="featured",onClick:()=>p("featured")}),e.jsx(N,{label:"Standard",value:x.standard,icon:e.jsx(E,{}),active:s==="standard",onClick:()=>p("standard")})]})]}),e.jsxs("section",{className:"content-toolbar",children:[e.jsxs("div",{className:"toolbar-search",children:[e.jsx(T,{}),e.jsx("input",{type:"search",value:r,onChange:d=>l(d.target.value),placeholder:"Search categories, descriptions or slugs...","aria-label":"Search categories"}),r&&e.jsx("button",{type:"button",className:"search-clear",onClick:()=>l(""),"aria-label":"Clear search",children:e.jsx(A,{})})]}),e.jsxs("div",{className:"toolbar-right",children:[e.jsxs("div",{className:"filter-group",children:[e.jsx("button",{type:"button",className:s==="all"?"filter-button active":"filter-button",onClick:()=>p("all"),children:"All"}),e.jsxs("button",{type:"button",className:s==="featured"?"filter-button active":"filter-button",onClick:()=>p("featured"),children:[e.jsx(k,{}),"Featured"]}),e.jsx("button",{type:"button",className:s==="standard"?"filter-button active":"filter-button",onClick:()=>p("standard"),children:"Standard"})]}),B&&e.jsx("button",{type:"button",className:"reset-button",onClick:y,children:"Reset"})]})]}),e.jsxs("div",{className:"results-header",children:[e.jsxs("div",{children:[e.jsx("strong",{children:f.length})," ",f.length===1?"category":"categories"," ","displayed"]}),B&&e.jsxs("span",{children:["Filtered from ",o.length," total"]})]}),o.length===0?e.jsx(D,{type:"all",onAdd:()=>g(!0)}):f.length===0?e.jsx(D,{type:"filtered",onReset:y}):e.jsxs("div",{className:"category-grid",children:[f.map((d,u)=>e.jsx(G,{category:d,index:u,onEdit:()=>j(d),onDelete:()=>b(d)},d.id)),e.jsxs("button",{type:"button",className:"create-card",onClick:()=>g(!0),children:[e.jsx("span",{className:"create-card-icon",children:e.jsx(w,{size:20})}),e.jsx("span",{className:"create-card-title",children:"Add another category"}),e.jsx("span",{className:"create-card-subtitle",children:"Create a new content group"})]})]}),h&&e.jsx(L,{mode:"add",routes:n,onClose:()=>g(!1)}),v&&e.jsx(L,{mode:"edit",category:v,routes:n,onClose:()=>j(null)}),m&&e.jsx(K,{category:m,onCancel:()=>b(null),onConfirm:$})]})]})}function N({label:t,value:a,icon:i,active:o,onClick:n}){return e.jsxs("button",{type:"button",className:`stat-item ${o?"active":""}`,onClick:n,children:[e.jsx("span",{className:"stat-icon",children:i}),e.jsxs("span",{className:"stat-copy",children:[e.jsx("strong",{children:a}),e.jsx("span",{children:t})]}),e.jsx(te,{})]})}function G({category:t,index:a,onEdit:i,onDelete:o}){const n=!!t.featured,r=X(t.name),l=t.description||"No description has been added for this category yet.";return e.jsxs("article",{className:`category-card ${n?"is-featured":""}`,children:[e.jsxs("div",{className:"card-top-line",children:[e.jsx("span",{className:"category-index",children:String(a+1).padStart(2,"0")}),e.jsx(q,{onEdit:i,onDelete:o})]}),e.jsxs("div",{className:"category-identity",children:[e.jsx("div",{className:`category-mark ${n?"featured-mark":""}`,children:n?e.jsx(k,{}):e.jsx("span",{children:r})}),e.jsxs("div",{className:"category-title-area",children:[e.jsx("div",{className:"category-status-row",children:e.jsxs("span",{className:`status-badge ${n?"featured":"standard"}`,children:[e.jsx("span",{className:"status-dot"}),n?"Featured":"Standard"]})}),e.jsx("h3",{children:t.name})]})]}),e.jsx("p",{className:"category-description",children:l}),e.jsx("div",{className:"card-divider"}),e.jsxs("div",{className:"category-meta",children:[e.jsxs("div",{className:"slug-block",children:[e.jsx("span",{children:"SLUG"}),e.jsx("code",{children:t.slug||I(t.name)})]}),e.jsxs("button",{type:"button",className:"card-edit",onClick:i,children:["Edit",e.jsx(ee,{})]})]})]})}function q({onEdit:t,onDelete:a}){const[i,o]=c.useState(!1),n=c.useRef(null);return c.useEffect(()=>{if(!i)return;const r=s=>{n.current&&!n.current.contains(s.target)&&o(!1)},l=s=>{s.key==="Escape"&&o(!1)};return document.addEventListener("mousedown",r),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("keydown",l)}},[i]),e.jsxs("div",{className:"actions-container",ref:n,children:[e.jsx("button",{type:"button",className:`actions-button ${i?"open":""}`,onClick:()=>o(r=>!r),"aria-label":"Category actions","aria-expanded":i,children:e.jsx(Q,{})}),i&&e.jsxs("div",{className:"actions-menu",children:[e.jsxs("button",{type:"button",onClick:()=>{o(!1),t()},children:[e.jsx(O,{}),"Edit category"]}),e.jsx("div",{className:"menu-separator"}),e.jsxs("button",{type:"button",className:"danger",onClick:()=>{o(!1),a()},children:[e.jsx(F,{}),"Delete category"]})]})]})}function D({type:t,onAdd:a,onReset:i}){return t==="filtered"?e.jsxs("section",{className:"empty-state",children:[e.jsx("div",{className:"empty-visual",children:e.jsx(T,{size:28})}),e.jsx("span",{className:"empty-eyebrow",children:"No matches"}),e.jsx("h2",{children:"No categories found"}),e.jsx("p",{children:"Try a different search term or change the current filter."}),e.jsx("button",{type:"button",className:"secondary-button",onClick:i,children:"Clear filters"})]}):e.jsxs("section",{className:"empty-state",children:[e.jsx("div",{className:"empty-visual",children:e.jsx(E,{size:30})}),e.jsx("span",{className:"empty-eyebrow",children:"Get started"}),e.jsx("h2",{children:"Your categories live here"}),e.jsx("p",{children:"Create your first category to start organizing content across the platform."}),e.jsxs("button",{type:"button",className:"primary-button",onClick:a,children:[e.jsx(w,{}),"Create first category"]})]})}function L({mode:t,category:a,routes:i,onClose:o}){var b;const n=t==="edit",{data:r,setData:l,post:s,processing:p,errors:h,transform:g}=H({name:(a==null?void 0:a.name)??"",description:(a==null?void 0:a.description)??"",featured:n?!!(a!=null&&a.featured):!1}),v=c.useMemo(()=>I(r.name),[r.name]),j=((b=r.description)==null?void 0:b.length)??0,m=x=>{x.preventDefault();const f=n?i.update(a.id):i.store();n&&g(y=>({...y,_method:"put"})),s(f,{preserveScroll:!0,onSuccess:()=>{o()}})};return e.jsx(M,{title:n?"Edit category":"Create category",subtitle:n?"Update the details and visibility of this category.":"Add a new category to organize your platform content.",icon:n?e.jsx(O,{size:18}):e.jsx(_,{size:18}),onClose:o,size:"large",children:e.jsxs("form",{onSubmit:m,className:"category-form",children:[e.jsxs("div",{className:"form-content",children:[e.jsxs("div",{className:"form-field",children:[e.jsxs("div",{className:"field-heading",children:[e.jsx("label",{htmlFor:`category-name-${t}`,children:"Category name"}),e.jsx("span",{children:"Required"})]}),e.jsxs("div",{className:`input-shell ${h.name?"has-error":""}`,children:[e.jsx(E,{}),e.jsx("input",{id:`category-name-${t}`,type:"text",value:r.name,onChange:x=>l("name",x.target.value),placeholder:"e.g. Web Development",autoComplete:"off",autoFocus:!0,required:!0})]}),h.name&&e.jsx(z,{children:h.name})]}),e.jsxs("div",{className:"slug-preview",children:[e.jsxs("div",{className:"slug-preview-label",children:[e.jsx(J,{}),e.jsx("span",{children:"URL slug"})]}),e.jsx("code",{children:v||"your-category-slug"})]}),e.jsxs("div",{className:"form-field",children:[e.jsxs("div",{className:"field-heading",children:[e.jsx("label",{htmlFor:`category-description-${t}`,children:"Description"}),e.jsxs("span",{children:[j,"/500"]})]}),e.jsx("div",{className:`textarea-shell ${h.description?"has-error":""}`,children:e.jsx("textarea",{id:`category-description-${t}`,value:r.description,onChange:x=>l("description",x.target.value.slice(0,500)),placeholder:"Briefly explain what belongs in this category...",rows:5,maxLength:500,required:!0})}),h.description&&e.jsx(z,{children:h.description})]}),e.jsxs("label",{className:`featured-option ${r.featured?"selected":""}`,children:[e.jsx("input",{type:"checkbox",checked:!!r.featured,onChange:x=>l("featured",x.target.checked)}),e.jsx("span",{className:"featured-option-icon",children:e.jsx(k,{})}),e.jsxs("span",{className:"featured-option-copy",children:[e.jsx("strong",{children:"Feature this category"}),e.jsx("span",{children:"Give this category extra visibility across the platform."})]}),e.jsx("span",{className:`toggle ${r.featured?"on":""}`,children:e.jsx("span",{})})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"secondary-button",onClick:o,disabled:p,children:"Cancel"}),e.jsx("button",{type:"submit",className:"primary-button",disabled:p,children:p?e.jsxs(e.Fragment,{children:[e.jsx(oe,{}),"Saving..."]}):e.jsxs(e.Fragment,{children:[n?e.jsx(re,{}):e.jsx(w,{}),n?"Save changes":"Create category"]})})]})]})})}function K({category:t,onCancel:a,onConfirm:i}){return e.jsxs(M,{title:"Delete category",subtitle:"This action cannot be undone.",icon:e.jsx(F,{size:18}),onClose:a,size:"small",danger:!0,children:[e.jsxs("div",{className:"delete-content",children:[e.jsx("div",{className:"delete-visual",children:e.jsx(F,{size:26})}),e.jsxs("h2",{children:['Delete "',t.name,'"?']}),e.jsx("p",{children:"This category will be permanently removed. Any content associated with it may be affected."}),e.jsxs("div",{className:"delete-warning",children:[e.jsx(W,{}),e.jsx("span",{children:"Please make sure this category is no longer needed before continuing."})]})]}),e.jsxs("div",{className:"modal-footer delete-footer",children:[e.jsx("button",{type:"button",className:"secondary-button",onClick:a,children:"Keep category"}),e.jsxs("button",{type:"button",className:"danger-button",onClick:i,children:[e.jsx(F,{}),"Delete permanently"]})]})]})}function M({title:t,subtitle:a,icon:i,onClose:o,children:n,size:r="medium",danger:l=!1}){return c.useEffect(()=>{const s=document.body.style.overflow;document.body.style.overflow="hidden";const p=h=>{h.key==="Escape"&&o()};return document.addEventListener("keydown",p),()=>{document.body.style.overflow=s,document.removeEventListener("keydown",p)}},[o]),e.jsx("div",{className:"modal-overlay",onMouseDown:s=>{s.target===s.currentTarget&&o()},children:e.jsxs("div",{className:`modal-panel modal-${r} ${l?"modal-danger":""}`,role:"dialog","aria-modal":"true","aria-labelledby":"category-modal-title",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{className:`modal-heading-icon ${l?"danger":""}`,children:i}),e.jsxs("div",{className:"modal-heading-copy",children:[e.jsx("h2",{id:"category-modal-title",children:t}),a&&e.jsx("p",{children:a})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:o,"aria-label":"Close modal",children:e.jsx(A,{})})]}),n]})})}function Z({flash:t,errors:a}){const i=a&&Object.keys(a).length>0,[o,n]=c.useState([]);return c.useEffect(()=>{const r=[];t!=null&&t.success&&r.push({id:"success",tone:"success",title:"Changes saved",message:t.success}),t!=null&&t.error&&r.push({id:"error",tone:"error",title:"Something went wrong",message:t.error}),i&&r.push({id:"validation",tone:"warning",title:"Check the form",message:Object.values(a).join(" ")}),n(r)},[t==null?void 0:t.success,t==null?void 0:t.error,i]),c.useEffect(()=>{if(!o.length)return;const r=setTimeout(()=>{n([])},6e3);return()=>clearTimeout(r)},[o]),o.length?e.jsx("div",{className:"toast-stack",children:o.map(r=>e.jsxs("div",{className:`toast toast-${r.tone}`,children:[e.jsxs("div",{className:"toast-icon",children:[r.tone==="success"&&e.jsx(ae,{}),r.tone==="error"&&e.jsx(R,{}),r.tone==="warning"&&e.jsx(W,{})]}),e.jsxs("div",{className:"toast-copy",children:[e.jsx("strong",{children:r.title}),e.jsx("span",{children:r.message})]}),e.jsx("button",{type:"button",onClick:()=>n(l=>l.filter(s=>s.id!==r.id)),"aria-label":"Close notification",children:e.jsx(A,{})})]},r.id))}):null}function z({children:t}){return e.jsxs("div",{className:"field-error",children:[e.jsx(R,{}),t]})}function I(t=""){return t.toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")}function X(t=""){const a=t.trim().split(/\s+/).filter(Boolean);return a.length?a.length===1?a[0].slice(0,2).toUpperCase():(a[0][0]+a[a.length-1][0]).toUpperCase():"C"}function w({size:t=16}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("path",{d:"M12 5v14"}),e.jsx("path",{d:"M5 12h14"})]})}function T({size:t=17}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m20 20-4-4"})]})}function E({size:t=17}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2.5h6.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z"}),e.jsx("path",{d:"M3.5 10h17"})]})}function _({size:t=17}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2.5h6.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z"}),e.jsx("path",{d:"M3.5 10h17"}),e.jsx("path",{d:"M12 13v5"}),e.jsx("path",{d:"M9.5 15.5h5"})]})}function S({size:t=18}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),e.jsx("path",{d:"m3 12 9 5 9-5"}),e.jsx("path",{d:"m3 16 9 5 9-5"})]})}function k({size:t=16}){return e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"})})}function J({size:t=14}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[e.jsx("path",{d:"M10 3 8 21"}),e.jsx("path",{d:"m16 3-2 18"}),e.jsx("path",{d:"M4 9h17"}),e.jsx("path",{d:"M3 15h17"})]})}function Q(){return e.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("circle",{cx:"5",cy:"12",r:"1.7"}),e.jsx("circle",{cx:"12",cy:"12",r:"1.7"}),e.jsx("circle",{cx:"19",cy:"12",r:"1.7"})]})}function O({size:t=15}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"})]})}function F({size:t=15}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 7h16"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"m6 7 1 13h10l1-13"}),e.jsx("path",{d:"M9 7V4h6v3"})]})}function ee(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m13 6 6 6-6 6"})]})}function te(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M7 17 17 7"}),e.jsx("path",{d:"M7 7h10v10"})]})}function re({size:t=15}){return e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m5 12 4 4L19 6"})})}function ae(){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"m8 12 2.5 2.5L16 9"})]})}function R(){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 8v5"}),e.jsx("path",{d:"M12 16h.01"})]})}function W(){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m12 3 10 18H2L12 3Z"}),e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"})]})}function A(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[e.jsx("path",{d:"M18 6 6 18"}),e.jsx("path",{d:"m6 6 12 12"})]})}function oe(){return e.jsx("svg",{className:"spinner",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e.jsx("path",{d:"M12 3a9 9 0 1 0 9 9"})})}const ne=`
:root {
    --cat-blue: #5D89C8;
    --cat-blue-dark: #426FAE;
    --cat-blue-deep: #315B91;
    --cat-blue-soft: #EEF4FB;
    --cat-blue-pale: #F7FAFE;

    --cat-text: #172033;
    --cat-heading: #111827;
    --cat-muted: #6B7280;
    --cat-light-text: #94A3B8;

    --cat-border: #E5EAF0;
    --cat-border-dark: #D9E0E9;

    --cat-bg: #F6F8FB;
    --cat-white: #FFFFFF;

    --cat-success: #198754;
    --cat-success-bg: #EDF8F2;

    --cat-danger: #D64545;
    --cat-danger-bg: #FEF1F1;

    --cat-warning: #B7791F;
    --cat-warning-bg: #FFF8E7;

    --cat-shadow:
        0 1px 2px rgba(15, 23, 42, .03),
        0 10px 30px rgba(15, 23, 42, .05);

    --cat-shadow-lg:
        0 20px 60px rgba(15, 23, 42, .15);
}

.categories-page {
    min-height: calc(100vh - 70px);
    padding: 32px 34px 60px;
    background: var(--cat-bg);
    color: var(--cat-text);
}

/* --------------------------------------------------------------------------
   HERO
-------------------------------------------------------------------------- */

.categories-hero {
    max-width: 1440px;
    margin: 0 auto 24px;
    min-height: 190px;
    padding: 32px 34px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 30px;

    background:
        linear-gradient(
            120deg,
            #FFFFFF 0%,
            #FFFFFF 66%,
            #F2F6FC 100%
        );

    border: 1px solid var(--cat-border);
    border-radius: 22px;

    box-shadow: var(--cat-shadow);

    position: relative;
    overflow: hidden;
}

.categories-hero::after {
    content: "";
    position: absolute;
    width: 280px;
    height: 280px;
    right: -90px;
    top: -145px;

    border: 1px solid rgba(93, 137, 200, .13);
    border-radius: 50%;

    pointer-events: none;
}

.categories-hero::before {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    right: 40px;
    bottom: -130px;

    border: 1px solid rgba(93, 137, 200, .08);
    border-radius: 50%;
}

.hero-main {
    position: relative;
    z-index: 1;
}

.hero-kicker {
    display: flex;
    align-items: center;
    gap: 9px;

    margin-bottom: 14px;

    color: var(--cat-blue-dark);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .13em;
    text-transform: uppercase;
}

.kicker-line {
    width: 25px;
    height: 2px;
    background: var(--cat-blue);
    border-radius: 10px;
}

.hero-title-row {
    display: flex;
    align-items: flex-end;
    gap: 55px;
}

.hero-title-row h1 {
    margin: 0;
    color: var(--cat-heading);

    font-size: clamp(31px, 3vw, 43px);
    line-height: 1.05;
    letter-spacing: -.045em;
    font-weight: 800;
}

.hero-title-row p {
    max-width: 620px;
    margin: 13px 0 0;

    color: var(--cat-muted);
    font-size: 14px;
    line-height: 1.7;
}

.hero-count {
    min-width: 125px;
    padding-left: 24px;

    border-left: 1px solid var(--cat-border);
}

.hero-count strong {
    display: block;
    color: var(--cat-heading);
    font-size: 29px;
    line-height: 1;
    letter-spacing: -.04em;
}

.hero-count span {
    display: block;
    margin-top: 6px;

    color: var(--cat-muted);
    font-size: 11px;
    font-weight: 600;
}

/* --------------------------------------------------------------------------
   BUTTONS
-------------------------------------------------------------------------- */

.primary-button,
.secondary-button,
.danger-button {
    height: 43px;
    padding: 0 17px;

    border-radius: 10px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-family: inherit;
    font-size: 13px;
    font-weight: 700;

    cursor: pointer;
    transition:
        transform .18s ease,
        box-shadow .18s ease,
        background .18s ease,
        border-color .18s ease;
}

.primary-button {
    color: #FFFFFF;
    background: var(--cat-blue);
    border: 1px solid var(--cat-blue);

    box-shadow: 0 5px 15px rgba(93, 137, 200, .20);
}

.primary-button:hover {
    background: var(--cat-blue-dark);
    border-color: var(--cat-blue-dark);
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(93, 137, 200, .25);
}

.primary-button:disabled,
.secondary-button:disabled,
.danger-button:disabled {
    opacity: .55;
    cursor: not-allowed;
    transform: none;
}

.secondary-button {
    color: #374151;
    background: #FFFFFF;
    border: 1px solid var(--cat-border-dark);
}

.secondary-button:hover {
    border-color: #BBC7D6;
    background: #F9FAFB;
}

.danger-button {
    color: #FFFFFF;
    background: var(--cat-danger);
    border: 1px solid var(--cat-danger);
}

.danger-button:hover {
    background: #C73B3B;
}

.hero-add {
    position: relative;
    z-index: 2;
    min-width: 157px;
}

/* --------------------------------------------------------------------------
   OVERVIEW
-------------------------------------------------------------------------- */

.overview-panel {
    max-width: 1440px;
    margin: 0 auto 22px;

    padding: 0;

    display: grid;
    grid-template-columns: minmax(300px, 1fr) minmax(560px, 1.45fr);

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 18px;

    box-shadow: var(--cat-shadow);

    overflow: hidden;
}

.overview-intro {
    padding: 25px 28px;

    display: flex;
    align-items: center;
    gap: 15px;

    border-right: 1px solid var(--cat-border);
}

.overview-icon {
    width: 43px;
    height: 43px;

    flex: 0 0 43px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);

    border: 1px solid #DDE9F7;
    border-radius: 12px;
}

.section-label {
    display: block;

    margin-bottom: 4px;

    color: var(--cat-light-text);

    font-size: 9px;
    font-weight: 800;
    letter-spacing: .13em;
    text-transform: uppercase;
}

.overview-intro h2 {
    margin: 0;

    color: var(--cat-heading);

    font-size: 15px;
    line-height: 1.35;
    font-weight: 750;
    letter-spacing: -.01em;
}

.overview-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.stat-item {
    min-width: 0;
    padding: 19px 21px;

    display: flex;
    align-items: center;
    gap: 12px;

    text-align: left;

    background: #FFFFFF;
    border: 0;
    border-left: 1px solid var(--cat-border);

    cursor: pointer;
    font-family: inherit;

    position: relative;
    transition:
        background .18s ease,
        box-shadow .18s ease;
}

.stat-item:first-child {
    border-left: 0;
}

.stat-item:hover {
    background: #FAFCFF;
}

.stat-item.active {
    background: var(--cat-blue-pale);
    box-shadow: inset 0 -2px 0 var(--cat-blue);
}

.stat-icon {
    width: 37px;
    height: 37px;

    flex: 0 0 37px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);

    border-radius: 9px;
}

.stat-copy {
    min-width: 0;
}

.stat-copy strong {
    display: block;

    color: var(--cat-heading);
    font-size: 20px;
    line-height: 1.1;
    letter-spacing: -.03em;
}

.stat-copy span {
    display: block;

    margin-top: 3px;

    color: var(--cat-muted);
    font-size: 11px;
    font-weight: 600;
}

.stat-item > svg {
    margin-left: auto;
    color: #B4C0CE;
}

/* --------------------------------------------------------------------------
   TOOLBAR
-------------------------------------------------------------------------- */

.content-toolbar {
    max-width: 1440px;
    margin: 0 auto 14px;

    padding: 9px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 14px;

    box-shadow: var(--cat-shadow);
}

.toolbar-search {
    min-width: 260px;
    max-width: 520px;
    flex: 1;

    height: 43px;

    display: flex;
    align-items: center;

    padding: 0 12px;
    gap: 9px;

    color: #8A98A9;
    background: #F8FAFC;

    border: 1px solid #EDF0F4;
    border-radius: 9px;

    transition:
        border-color .18s ease,
        background .18s ease;
}

.toolbar-search:focus-within {
    background: #FFFFFF;
    border-color: #BDD0E7;
    box-shadow: 0 0 0 3px rgba(93, 137, 200, .08);
}

.toolbar-search input {
    width: 100%;
    min-width: 0;

    border: 0;
    outline: 0;
    background: transparent;

    color: var(--cat-text);

    font-family: inherit;
    font-size: 12px;
}

.toolbar-search input::placeholder {
    color: #A5AFBB;
}

.toolbar-search input::-webkit-search-cancel-button {
    display: none;
}

.search-clear {
    width: 25px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #8B98A8;
    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 7px;

    cursor: pointer;
}

.toolbar-right {
    display: flex;
    align-items: center;
    gap: 9px;
}

.filter-group {
    display: flex;
    align-items: center;
    gap: 3px;

    padding: 3px;

    background: #F4F6F8;

    border-radius: 9px;
}

.filter-button {
    height: 35px;
    padding: 0 12px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    border: 0;
    border-radius: 7px;

    color: #697586;
    background: transparent;

    font-family: inherit;
    font-size: 11px;
    font-weight: 700;

    cursor: pointer;
    transition: .18s ease;
}

.filter-button svg {
    width: 13px;
    height: 13px;
}

.filter-button:hover {
    color: var(--cat-text);
}

.filter-button.active {
    color: var(--cat-blue-dark);
    background: #FFFFFF;
    box-shadow: 0 1px 4px rgba(15, 23, 42, .08);
}

.reset-button {
    height: 35px;
    padding: 0 10px;

    color: var(--cat-blue-dark);
    background: transparent;

    border: 0;

    font-family: inherit;
    font-size: 11px;
    font-weight: 700;

    cursor: pointer;
}

/* --------------------------------------------------------------------------
   RESULTS
-------------------------------------------------------------------------- */

.results-header {
    max-width: 1440px;
    margin: 0 auto 11px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #7A8797;

    font-size: 11px;
}

.results-header strong {
    color: var(--cat-heading);
}

.results-header span {
    color: #A0AAB7;
}

/* --------------------------------------------------------------------------
   GRID
-------------------------------------------------------------------------- */

.category-grid {
    max-width: 1440px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(285px, 1fr)
    );

    gap: 15px;
}

.category-card {
    min-height: 255px;

    padding: 20px;

    display: flex;
    flex-direction: column;

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 16px;

    box-shadow: var(--cat-shadow);

    position: relative;

    overflow: hidden;

    transition:
        transform .2s ease,
        box-shadow .2s ease,
        border-color .2s ease;
}

.category-card:hover {
    transform: translateY(-3px);

    border-color: #D5DFEB;

    box-shadow:
        0 2px 4px rgba(15, 23, 42, .04),
        0 16px 36px rgba(15, 23, 42, .08);
}

.category-card.is-featured {
    border-color: #D6E3F3;
}

.category-card.is-featured::before {
    content: "";

    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;

    height: 2px;

    background: var(--cat-blue);
    border-radius: 0 0 5px 5px;
}

.card-top-line {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;
}

.category-index {
    color: #B5BFCA;

    font-size: 10px;
    font-weight: 800;
    letter-spacing: .1em;
}

.category-identity {
    display: flex;
    align-items: center;
    gap: 13px;
}

.category-mark {
    width: 48px;
    height: 48px;

    flex: 0 0 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: #F2F6FB;

    border: 1px solid #E4ECF5;
    border-radius: 13px;

    font-size: 13px;
    font-weight: 800;
    letter-spacing: .03em;
}

.category-mark.featured-mark {
    color: #FFFFFF;
    background: var(--cat-blue);
    border-color: var(--cat-blue);
}

.category-title-area {
    min-width: 0;
}

.category-status-row {
    margin-bottom: 5px;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;

    font-size: 9px;
    font-weight: 800;
    letter-spacing: .06em;
    text-transform: uppercase;
}

.status-dot {
    width: 5px;
    height: 5px;

    border-radius: 50%;
}

.status-badge.featured {
    color: var(--cat-blue-dark);
}

.status-badge.featured .status-dot {
    background: var(--cat-blue);
}

.status-badge.standard {
    color: #7C8795;
}

.status-badge.standard .status-dot {
    background: #AEB8C4;
}

.category-title-area h3 {
    margin: 0;

    color: var(--cat-heading);

    font-size: 16px;
    line-height: 1.2;
    font-weight: 780;
    letter-spacing: -.02em;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.category-description {
    min-height: 61px;

    margin: 18px 0 17px;

    color: #687587;

    font-size: 12px;
    line-height: 1.7;
}

.card-divider {
    height: 1px;

    background: #EDF0F4;
}

.category-meta {
    min-width: 0;

    margin-top: auto;
    padding-top: 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.slug-block {
    min-width: 0;
}

.slug-block > span {
    display: block;

    margin-bottom: 4px;

    color: #A0AAB6;

    font-size: 8px;
    font-weight: 800;
    letter-spacing: .13em;
}

.slug-block code {
    display: block;

    max-width: 145px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: #607086;

    font-family:
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        monospace;

    font-size: 10px;
}

.card-edit {
    height: 31px;
    padding: 0 9px;

    display: inline-flex;
    align-items: center;
    gap: 6px;

    color: var(--cat-blue-dark);
    background: transparent;

    border: 1px solid #DCE6F1;
    border-radius: 7px;

    font-family: inherit;
    font-size: 10px;
    font-weight: 750;

    cursor: pointer;

    transition: .18s ease;
}

.card-edit:hover {
    color: #FFFFFF;
    background: var(--cat-blue);
    border-color: var(--cat-blue);
}

/* --------------------------------------------------------------------------
   CARD ACTIONS
-------------------------------------------------------------------------- */

.actions-container {
    position: relative;
}

.actions-button {
    width: 31px;
    height: 31px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #8B97A6;
    background: transparent;

    border: 1px solid transparent;
    border-radius: 8px;

    cursor: pointer;
    transition: .18s ease;
}

.actions-button:hover,
.actions-button.open {
    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);
    border-color: #DFE9F4;
}

.actions-menu {
    position: absolute;
    z-index: 30;

    top: calc(100% + 7px);
    right: 0;

    width: 175px;

    padding: 5px;

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 10px;

    box-shadow:
        0 10px 30px rgba(15, 23, 42, .12);

    animation: menuIn .13s ease-out;
}

@keyframes menuIn {
    from {
        opacity: 0;
        transform: translateY(-3px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.actions-menu button {
    width: 100%;
    height: 35px;

    padding: 0 9px;

    display: flex;
    align-items: center;
    gap: 9px;

    color: #4B5563;
    background: transparent;

    border: 0;
    border-radius: 7px;

    font-family: inherit;
    font-size: 11px;
    font-weight: 650;

    text-align: left;

    cursor: pointer;
}

.actions-menu button:hover {
    background: #F5F7FA;
    color: var(--cat-heading);
}

.actions-menu button.danger {
    color: var(--cat-danger);
}

.actions-menu button.danger:hover {
    background: var(--cat-danger-bg);
}

.menu-separator {
    height: 1px;
    margin: 4px 2px;
    background: #EEF1F4;
}

/* --------------------------------------------------------------------------
   CREATE CARD
-------------------------------------------------------------------------- */

.create-card {
    min-height: 255px;

    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    color: #718096;
    background:
        linear-gradient(
            180deg,
            rgba(255,255,255,.85),
            rgba(248,250,253,.9)
        );

    border: 1px dashed #CAD5E2;
    border-radius: 16px;

    font-family: inherit;

    cursor: pointer;

    transition:
        border-color .18s ease,
        background .18s ease,
        transform .18s ease;
}

.create-card:hover {
    color: var(--cat-blue-dark);

    background: var(--cat-blue-pale);

    border-color: #AFC5DF;

    transform: translateY(-2px);
}

.create-card-icon {
    width: 48px;
    height: 48px;

    margin-bottom: 13px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);

    border: 1px solid #DDE8F4;
    border-radius: 13px;
}

.create-card-title {
    color: var(--cat-heading);

    font-size: 13px;
    font-weight: 750;
}

.create-card-subtitle {
    margin-top: 5px;

    color: #96A1AF;

    font-size: 10px;
}

/* --------------------------------------------------------------------------
   EMPTY STATE
-------------------------------------------------------------------------- */

.empty-state {
    max-width: 700px;
    min-height: 330px;

    margin: 15px auto 0;
    padding: 45px 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 18px;

    box-shadow: var(--cat-shadow);
}

.empty-visual {
    width: 62px;
    height: 62px;

    margin-bottom: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);

    border: 1px solid #DFEAF6;
    border-radius: 17px;
}

.empty-eyebrow {
    margin-bottom: 6px;

    color: var(--cat-blue-dark);

    font-size: 9px;
    font-weight: 800;
    letter-spacing: .13em;
    text-transform: uppercase;
}

.empty-state h2 {
    margin: 0;

    color: var(--cat-heading);

    font-size: 20px;
    font-weight: 780;
    letter-spacing: -.025em;
}

.empty-state p {
    max-width: 410px;

    margin: 9px 0 20px;

    color: var(--cat-muted);

    font-size: 12px;
    line-height: 1.7;
}

/* --------------------------------------------------------------------------
   MODAL
-------------------------------------------------------------------------- */

.modal-overlay {
    position: fixed;
    z-index: 9999;

    inset: 0;

    padding: 22px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(15, 23, 42, .54);

    backdrop-filter: blur(4px);

    animation: overlayIn .18s ease-out;
}

@keyframes overlayIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.modal-panel {
    width: 100%;
    max-height: calc(100vh - 44px);

    display: flex;
    flex-direction: column;

    background: #FFFFFF;

    border: 1px solid rgba(255,255,255,.75);
    border-radius: 18px;

    box-shadow: var(--cat-shadow-lg);

    overflow: hidden;

    animation: modalIn .2s ease-out;
}

.modal-large {
    max-width: 650px;
}

.modal-medium {
    max-width: 570px;
}

.modal-small {
    max-width: 455px;
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

.modal-heading {
    padding: 21px 23px;

    display: flex;
    align-items: flex-start;
    gap: 12px;

    border-bottom: 1px solid #EDF0F4;
}

.modal-heading-icon {
    width: 38px;
    height: 38px;

    flex: 0 0 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);

    border: 1px solid #DFEAF6;
    border-radius: 10px;
}

.modal-heading-icon.danger {
    color: var(--cat-danger);
    background: var(--cat-danger-bg);
    border-color: #F6DADA;
}

.modal-heading-copy {
    min-width: 0;
}

.modal-heading-copy h2 {
    margin: 1px 0 4px;

    color: var(--cat-heading);

    font-size: 16px;
    line-height: 1.2;
    font-weight: 780;
    letter-spacing: -.02em;
}

.modal-heading-copy p {
    margin: 0;

    color: var(--cat-muted);

    font-size: 11px;
    line-height: 1.55;
}

.modal-close {
    width: 32px;
    height: 32px;

    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    flex: 0 0 32px;

    color: #8C98A7;
    background: transparent;

    border: 0;
    border-radius: 8px;

    cursor: pointer;
}

.modal-close:hover {
    color: var(--cat-heading);
    background: #F3F5F7;
}

/* --------------------------------------------------------------------------
   FORM
-------------------------------------------------------------------------- */

.category-form {
    min-height: 0;

    display: flex;
    flex-direction: column;
}

.form-content {
    padding: 23px;

    overflow-y: auto;
}

.form-field {
    margin-bottom: 19px;
}

.field-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 7px;
}

.field-heading label {
    color: #374151;

    font-size: 11px;
    font-weight: 750;
}

.field-heading span {
    color: #A0AAB6;

    font-size: 9px;
    font-weight: 650;
}

.input-shell {
    height: 45px;

    display: flex;
    align-items: center;
    gap: 9px;

    padding: 0 12px;

    background: #FAFBFC;

    border: 1px solid var(--cat-border);
    border-radius: 9px;

    transition:
        border-color .18s ease,
        box-shadow .18s ease,
        background .18s ease;
}

.input-shell:focus-within {
    background: #FFFFFF;
    border-color: #AFC5DF;
    box-shadow: 0 0 0 3px rgba(93, 137, 200, .08);
}

.input-shell.has-error,
.textarea-shell.has-error {
    border-color: #E6A7A7;
}

.input-shell > svg {
    flex: 0 0 auto;
    color: #94A3B8;
}

.input-shell input {
    width: 100%;

    border: 0;
    outline: 0;
    background: transparent;

    color: var(--cat-heading);

    font-family: inherit;
    font-size: 12px;
}

.input-shell input::placeholder,
.textarea-shell textarea::placeholder {
    color: #AAB3BE;
}

.slug-preview {
    min-height: 44px;

    margin: -3px 0 20px;

    padding: 9px 11px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    background: #F7F9FC;

    border: 1px solid #E9EDF2;
    border-radius: 9px;
}

.slug-preview-label {
    display: flex;
    align-items: center;
    gap: 6px;

    color: #8995A4;

    font-size: 9px;
    font-weight: 750;
    text-transform: uppercase;
    letter-spacing: .07em;
}

.slug-preview code {
    max-width: 60%;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: var(--cat-blue-dark);

    font-family:
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        monospace;

    font-size: 10px;
}

.textarea-shell {
    padding: 10px 12px;

    background: #FAFBFC;

    border: 1px solid var(--cat-border);
    border-radius: 9px;

    transition:
        border-color .18s ease,
        box-shadow .18s ease,
        background .18s ease;
}

.textarea-shell:focus-within {
    background: #FFFFFF;
    border-color: #AFC5DF;
    box-shadow: 0 0 0 3px rgba(93, 137, 200, .08);
}

.textarea-shell textarea {
    display: block;

    width: 100%;
    min-height: 110px;

    resize: vertical;

    border: 0;
    outline: 0;
    background: transparent;

    color: var(--cat-heading);

    font-family: inherit;
    font-size: 12px;
    line-height: 1.6;
}

.field-error {
    margin-top: 6px;

    display: flex;
    align-items: center;
    gap: 5px;

    color: var(--cat-danger);

    font-size: 10px;
    line-height: 1.4;
}

/* --------------------------------------------------------------------------
   FEATURED TOGGLE
-------------------------------------------------------------------------- */

.featured-option {
    min-height: 67px;

    padding: 11px 12px;

    display: flex;
    align-items: center;
    gap: 11px;

    background: #FAFBFC;

    border: 1px solid #E7EBF0;
    border-radius: 11px;

    cursor: pointer;

    transition: .18s ease;
}

.featured-option:hover {
    border-color: #CBD8E7;
    background: #F9FBFE;
}

.featured-option.selected {
    background: var(--cat-blue-pale);
    border-color: #C9D9EB;
}

.featured-option input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.featured-option-icon {
    width: 36px;
    height: 36px;

    flex: 0 0 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #8997A7;
    background: #FFFFFF;

    border: 1px solid #DFE5EC;
    border-radius: 9px;

    transition: .18s ease;
}

.featured-option.selected .featured-option-icon {
    color: var(--cat-blue-dark);
    background: #E5EEF9;
    border-color: #D0DEED;
}

.featured-option-copy {
    min-width: 0;
    flex: 1;
}

.featured-option-copy strong {
    display: block;

    color: var(--cat-heading);

    font-size: 11px;
    font-weight: 750;
}

.featured-option-copy span {
    display: block;

    margin-top: 3px;

    color: #8A96A5;

    font-size: 9px;
    line-height: 1.4;
}

.toggle {
    width: 37px;
    height: 21px;

    flex: 0 0 37px;

    padding: 2px;

    display: flex;
    align-items: center;

    background: #CBD3DC;

    border-radius: 20px;

    transition: .2s ease;
}

.toggle span {
    width: 17px;
    height: 17px;

    display: block;

    background: #FFFFFF;

    border-radius: 50%;

    box-shadow: 0 1px 3px rgba(0,0,0,.15);

    transition: .2s ease;
}

.toggle.on {
    justify-content: flex-end;
    background: var(--cat-blue);
}

/* --------------------------------------------------------------------------
   MODAL FOOTER
-------------------------------------------------------------------------- */

.modal-footer {
    padding: 15px 23px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;

    background: #FBFCFD;

    border-top: 1px solid #EDF0F4;
}

/* --------------------------------------------------------------------------
   DELETE
-------------------------------------------------------------------------- */

.delete-content {
    padding: 29px 25px 21px;

    text-align: center;
}

.delete-visual {
    width: 59px;
    height: 59px;

    margin: 0 auto 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-danger);
    background: var(--cat-danger-bg);

    border: 1px solid #F5D9D9;
    border-radius: 16px;
}

.delete-content h2 {
    margin: 0;

    color: var(--cat-heading);

    font-size: 18px;
    font-weight: 780;
    letter-spacing: -.025em;
}

.delete-content p {
    max-width: 350px;

    margin: 8px auto 17px;

    color: var(--cat-muted);

    font-size: 11px;
    line-height: 1.65;
}

.delete-warning {
    max-width: 360px;

    margin: 0 auto;

    padding: 10px 12px;

    display: flex;
    align-items: flex-start;
    gap: 8px;

    text-align: left;

    color: #8A6A2B;
    background: var(--cat-warning-bg);

    border: 1px solid #F4E6BC;
    border-radius: 9px;

    font-size: 9px;
    line-height: 1.5;
}

.delete-warning svg {
    flex: 0 0 auto;
}

.delete-footer {
    background: #FFFFFF;
}

.delete-footer .secondary-button {
    margin-right: auto;
}

/* --------------------------------------------------------------------------
   TOAST
-------------------------------------------------------------------------- */

.toast-stack {
    position: fixed;
    z-index: 10000;

    top: 22px;
    right: 22px;

    width: min(370px, calc(100vw - 30px));

    display: flex;
    flex-direction: column;
    gap: 8px;
}

.toast {
    min-height: 62px;

    padding: 10px 11px;

    display: flex;
    align-items: flex-start;
    gap: 10px;

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 11px;

    box-shadow:
        0 12px 35px rgba(15, 23, 42, .13);

    animation: toastIn .22s ease-out;
}

@keyframes toastIn {
    from {
        opacity: 0;
        transform: translateX(12px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.toast-icon {
    width: 31px;
    height: 31px;

    flex: 0 0 31px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
}

.toast-success .toast-icon {
    color: var(--cat-success);
    background: var(--cat-success-bg);
}

.toast-error .toast-icon {
    color: var(--cat-danger);
    background: var(--cat-danger-bg);
}

.toast-warning .toast-icon {
    color: var(--cat-warning);
    background: var(--cat-warning-bg);
}

.toast-copy {
    min-width: 0;
    flex: 1;
    padding-top: 1px;
}

.toast-copy strong {
    display: block;

    color: var(--cat-heading);

    font-size: 11px;
    font-weight: 780;
}

.toast-copy span {
    display: block;

    margin-top: 3px;

    color: #718096;

    font-size: 10px;
    line-height: 1.5;
}

.toast > button {
    width: 25px;
    height: 25px;

    flex: 0 0 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #9AA5B2;
    background: transparent;

    border: 0;
    border-radius: 6px;

    cursor: pointer;
}

.toast > button:hover {
    background: #F3F5F7;
    color: var(--cat-heading);
}

/* --------------------------------------------------------------------------
   SPINNER
-------------------------------------------------------------------------- */

.spinner {
    animation: spinner .7s linear infinite;
}

@keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}

/* --------------------------------------------------------------------------
   RESPONSIVE — TABLET
-------------------------------------------------------------------------- */

@media (max-width: 1100px) {
    .categories-page {
        padding: 25px 22px 45px;
    }

    .categories-hero {
        padding: 27px;
    }

    .overview-panel {
        grid-template-columns: 1fr;
    }

    .overview-intro {
        border-right: 0;
        border-bottom: 1px solid var(--cat-border);
    }

    .stat-item:first-child {
        border-left: 0;
    }

    .stat-item {
        border-left: 1px solid var(--cat-border);
    }

    .hero-title-row {
        gap: 30px;
    }
}

/* --------------------------------------------------------------------------
   RESPONSIVE — TABLET / SMALL
-------------------------------------------------------------------------- */

@media (max-width: 820px) {
    .categories-page {
        padding: 20px 16px 40px;
    }

    .categories-hero {
        min-height: auto;

        padding: 25px;

        align-items: flex-start;
        flex-direction: column;
    }

    .hero-title-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
    }

    .hero-count {
        padding-left: 0;
        border-left: 0;

        display: flex;
        align-items: baseline;
        gap: 7px;
    }

    .hero-count span {
        margin-top: 0;
    }

    .hero-add {
        width: 100%;
    }

    .content-toolbar {
        align-items: stretch;
        flex-direction: column;
    }

    .toolbar-search {
        max-width: none;
        width: 100%;
    }

    .toolbar-right {
        justify-content: space-between;
    }

    .filter-group {
        width: 100%;
    }

    .filter-button {
        flex: 1;
    }

    .overview-stats {
        grid-template-columns: 1fr;
    }

    .stat-item {
        min-height: 62px;

        border-left: 0;
        border-top: 1px solid var(--cat-border);
    }

    .stat-item:first-child {
        border-top: 0;
    }

    .stat-item.active {
        box-shadow: inset 3px 0 0 var(--cat-blue);
    }
}

/* --------------------------------------------------------------------------
   RESPONSIVE — MOBILE
-------------------------------------------------------------------------- */

@media (max-width: 560px) {
    .categories-page {
        padding: 13px 10px 30px;
    }

    .categories-hero {
        margin-bottom: 12px;
        padding: 21px 18px;

        border-radius: 15px;
    }

    .hero-kicker {
        font-size: 9px;
    }

    .hero-title-row h1 {
        font-size: 29px;
    }

    .hero-title-row p {
        font-size: 11px;
        line-height: 1.65;
    }

    .hero-count strong {
        font-size: 24px;
    }

    .overview-panel {
        margin-bottom: 12px;
        border-radius: 13px;
    }

    .overview-intro {
        padding: 18px;
    }

    .overview-intro h2 {
        font-size: 13px;
    }

    .overview-stats {
        grid-template-columns: 1fr;
    }

    .content-toolbar {
        padding: 7px;
        border-radius: 12px;
    }

    .toolbar-right {
        flex-wrap: wrap;
    }

    .filter-group {
        order: 1;
    }

    .reset-button {
        order: 2;
        margin-left: auto;
    }

    .results-header {
        padding: 0 3px;
        margin-top: 12px;
    }

    .results-header span {
        display: none;
    }

    .category-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .category-card {
        min-height: 235px;
        padding: 17px;
        border-radius: 13px;
    }

    .create-card {
        min-height: 170px;
        border-radius: 13px;
    }

    .modal-overlay {
        padding: 10px;
        align-items: flex-end;
    }

    .modal-panel {
        max-height: calc(100vh - 20px);
        border-radius: 17px 17px 12px 12px;
    }

    .modal-heading {
        padding: 17px;
    }

    .form-content {
        padding: 18px;
    }

    .modal-footer {
        padding: 12px 17px;

        position: relative;
    }

    .modal-footer .primary-button,
    .modal-footer .secondary-button,
    .modal-footer .danger-button {
        flex: 1;
    }

    .delete-content {
        padding: 24px 18px 17px;
    }

    .delete-footer .secondary-button {
        margin-right: 0;
    }

    .toast-stack {
        top: 10px;
        right: 10px;
        width: calc(100vw - 20px);
    }
}

/* --------------------------------------------------------------------------
   REDUCED MOTION
-------------------------------------------------------------------------- */

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }
}
`;export{de as default};
