import{r as d,j as e,H as F,a as L,u as z}from"./app-CgjB0zLb.js";import{A as E}from"./AppLayout-BhRRfzUA.js";function M(r){return r.toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")}function q({categories:r,flash:o,errors:t}){const s={store:()=>route("admin.categories.store"),update:i=>route("admin.categories.update",i),destroy:i=>route("admin.categories.destroy",i)},[a,n]=d.useState(!1),[c,u]=d.useState(null),[p,l]=d.useState(null),m=()=>{p&&L.delete(s.destroy(p.id),{preserveScroll:!0,onSuccess:()=>l(null)})};return e.jsxs(E,{children:[e.jsx(F,{title:"Categories"}),e.jsx("style",{children:V}),e.jsxs("div",{"data-h-scope":"categories",className:"container-fluid",children:[e.jsx(B,{flash:o,errors:t}),e.jsxs("div",{className:"page-header",children:[e.jsxs("h2",{children:["Categories ",e.jsx("span",{children:"Management"})]}),e.jsxs("button",{type:"button",className:"btn-accent",onClick:()=>n(!0),children:[e.jsx(f,{})," Add Category"]})]}),r.length===0?e.jsx("div",{className:"data-card",children:e.jsxs("div",{className:"empty-state",children:[e.jsx(T,{}),e.jsx("h5",{children:"No categories yet"}),e.jsx("p",{children:"Get started by creating your first category."}),e.jsxs("button",{className:"btn-accent",onClick:()=>n(!0),children:[e.jsx(f,{})," Add First Category"]})]})}):e.jsx("div",{className:"categories-grid",children:r.map(i=>e.jsxs("div",{className:"cat-card",children:[e.jsxs("div",{className:"cat-card-top",children:[e.jsxs("div",{className:"cat-card-heading",children:[e.jsx("span",{className:"cat-name",children:i.name}),i.featured?e.jsxs("span",{className:"badge-featured yes",children:[e.jsx(H,{})," Featured"]}):e.jsx("span",{className:"badge-featured no",children:"Not Featured"})]}),e.jsx(D,{onEdit:()=>u(i),onDelete:()=>l(i)})]}),e.jsx("p",{className:"cat-desc",title:i.description,children:A(i.description,110)}),e.jsxs("div",{className:"cat-card-footer",children:[e.jsx("span",{className:"cat-slug-label",children:"Slug"}),e.jsx("code",{className:"cat-slug",children:i.slug})]})]},i.id))})]}),a&&e.jsx(b,{mode:"add",routes:s,onClose:()=>n(!1)}),c&&e.jsx(b,{mode:"edit",category:c,routes:s,onClose:()=>u(null)}),p&&e.jsx(S,{name:p.name,onCancel:()=>l(null),onConfirm:m})]})}function B({flash:r,errors:o}){const[t,s]=d.useState({success:!!(r!=null&&r.success),error:!!(r!=null&&r.error),validation:!!(o&&Object.keys(o).length)});return d.useEffect(()=>{s({success:!!(r!=null&&r.success),error:!!(r!=null&&r.error),validation:!!(o&&Object.keys(o).length)})},[r,o]),d.useEffect(()=>{const a=[];return t.success&&a.push(setTimeout(()=>s(n=>({...n,success:!1})),5e3)),t.error&&a.push(setTimeout(()=>s(n=>({...n,error:!1})),7e3)),t.validation&&a.push(setTimeout(()=>s(n=>({...n,validation:!1})),8e3)),()=>a.forEach(clearTimeout)},[t.success,t.error,t.validation]),!t.success&&!t.error&&!t.validation?null:e.jsxs("div",{className:"toast-stack",children:[t.success&&e.jsx(g,{tone:"success",title:"Success",onClose:()=>s(a=>({...a,success:!1})),children:r.success}),t.error&&e.jsx(g,{tone:"danger",title:"Error",onClose:()=>s(a=>({...a,error:!1})),children:r.error}),t.validation&&o&&e.jsx(g,{tone:"warning",title:"Validation Error",onClose:()=>s(a=>({...a,validation:!1})),children:e.jsx("ul",{className:"toast-error-list",children:Object.values(o).map((a,n)=>e.jsx("li",{children:a},n))})})]})}function g({tone:r,title:o,onClose:t,children:s}){return e.jsxs("div",{className:"toast-item",children:[e.jsxs("div",{className:"toast-header",children:[r==="success"&&e.jsx(Y,{}),r==="danger"&&e.jsx(P,{}),r==="warning"&&e.jsx(y,{}),e.jsx("strong",{children:o}),e.jsx("button",{type:"button",className:"btn-close",onClick:t,"aria-label":"Close",children:e.jsx(k,{})})]}),e.jsx("div",{className:"toast-body",children:s})]})}function D({onEdit:r,onDelete:o}){const[t,s]=d.useState(!1),a=d.useRef(null);return d.useEffect(()=>{if(!t)return;const n=c=>{a.current&&!a.current.contains(c.target)&&s(!1)};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[t]),e.jsxs("div",{className:"dropdown-wrap",ref:a,children:[e.jsx("button",{type:"button",className:"btn-actions",onClick:()=>s(n=>!n),children:e.jsx(I,{})}),t&&e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{s(!1),r()},children:[e.jsx(j,{})," Edit"]})}),e.jsx("li",{className:"dropdown-divider"}),e.jsx("li",{children:e.jsxs("button",{type:"button",className:"dropdown-item text-danger",onClick:()=>{s(!1),o()},children:[e.jsx(h,{})," Delete"]})})]})]})}function b({mode:r,category:o,routes:t,onClose:s}){const a=r==="edit",{data:n,setData:c,post:u,processing:p,errors:l,transform:m}=z({name:(o==null?void 0:o.name)??"",description:(o==null?void 0:o.description)??"",featured:a?!!(o!=null&&o.featured):!1}),i=d.useMemo(()=>n.name.trim().length<2?"":`Suggested slug: ${M(n.name)}`,[n.name]),w=x=>{x.preventDefault();const C=a?t.update(o.id):t.store();a&&m(N=>({...N,_method:"put"})),u(C,{onSuccess:s})};return e.jsx(v,{onClose:s,title:a?"Edit Category":"Add Category",icon:a?e.jsx(j,{}):e.jsx(W,{}),children:e.jsxs("form",{onSubmit:w,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",htmlFor:`name-${r}`,children:"Name"}),e.jsx("input",{id:`name-${r}`,className:"form-control",placeholder:"e.g. Web Development",value:n.name,onChange:x=>c("name",x.target.value),autoComplete:"off",required:!0}),e.jsx("small",{className:"slug-hint",children:i}),l.name&&e.jsx("small",{className:"text-danger",children:l.name})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",htmlFor:`desc-${r}`,children:"Description"}),e.jsx("input",{id:`desc-${r}`,className:"form-control",placeholder:"Short description…",value:n.description,onChange:x=>c("description",x.target.value),autoComplete:"off",required:!0}),l.description&&e.jsx("small",{className:"text-danger",children:l.description})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",id:`featured-${r}`,checked:n.featured,onChange:x=>c("featured",x.target.checked)}),e.jsx("label",{className:"form-check-label",htmlFor:`featured-${r}`,children:"Mark as Featured"})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn-modal-cancel",onClick:s,children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-modal-save",disabled:p,children:[a?e.jsx(O,{}):e.jsx($,{})," ",p?"Saving…":a?"Update Category":"Save Category"]})]})]})})}function S({name:r,onCancel:o,onConfirm:t}){return e.jsxs(v,{onClose:o,title:"Delete Category",icon:e.jsx(y,{}),noBorder:!0,children:[e.jsxs("div",{className:"modal-body",style:{textAlign:"center",paddingTop:8},children:[e.jsx("div",{className:"delete-icon-wrap",children:e.jsx(h,{size:20})}),e.jsxs("h5",{className:"delete-title",children:['Delete "',r,'"?']}),e.jsx("p",{className:"delete-sub",children:"This action cannot be undone. All associated data may be affected."})]}),e.jsxs("div",{className:"modal-footer",style:{justifyContent:"center",borderTop:"none",paddingTop:0},children:[e.jsx("button",{type:"button",className:"btn-modal-cancel",onClick:o,children:"Cancel"}),e.jsxs("button",{type:"button",className:"btn-modal-delete",onClick:t,children:[e.jsx(h,{})," Yes, Delete"]})]})]})}function v({title:r,icon:o,onClose:t,noBorder:s,children:a}){return e.jsx("div",{className:"modal-overlay",onClick:t,children:e.jsx("div",{className:"modal-dialog",onClick:n=>n.stopPropagation(),children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",style:s?{borderBottom:"none",paddingBottom:0}:void 0,children:[e.jsxs("h5",{className:"modal-title",children:[o,r]}),e.jsx("button",{type:"button",className:"btn-close",onClick:t,"aria-label":"Close",children:e.jsx(k,{})})]}),a]})})})}function A(r,o){return r?r.length>o?r.slice(0,o).trim()+"…":r:""}function f(){return e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.3",strokeLinecap:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})})}function I(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("circle",{cx:"12",cy:"5",r:"1.7"}),e.jsx("circle",{cx:"12",cy:"12",r:"1.7"}),e.jsx("circle",{cx:"12",cy:"19",r:"1.7"})]})}function j(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}function h({size:r=14}){return e.jsxs("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}function T(){return e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.45,marginBottom:12},children:[e.jsx("path",{d:"M3 7v11a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2h-8l-2-3H5a2 2 0 00-2 2z"}),e.jsx("line",{x1:"2",y1:"2",x2:"22",y2:"22"})]})}function W(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 7v11a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2h-8l-2-3H5a2 2 0 00-2 2z"}),e.jsx("line",{x1:"12",y1:"11",x2:"12",y2:"17"}),e.jsx("line",{x1:"9",y1:"14",x2:"15",y2:"14"})]})}function $(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}function H(){return e.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}function O(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M23 4v6h-6"}),e.jsx("path",{d:"M1 20v-6h6"}),e.jsx("path",{d:"M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"})]})}function y(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),e.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}function Y(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}function P(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}function k(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}const V=`
[data-h-scope="categories"] {
    --bg-deep:       #F0F4F8;
    --bg-card:       #FFFFFF;
    --bg-surface:    #F8FAFC;
    --bg-hover:      #F1F5F9;
    --accent:        #00A667;
    --accent-dark:   #008F57;
    --accent-dim:    rgba(0,166,103,.10);
    --accent-glow:   rgba(0,166,103,.25);
    --text-primary:  #0F1C2E;
    --text-secondary:#4A6380;
    --text-muted:    #8EA5BE;
    --border:        rgba(15,28,46,.09);
    --border-accent: rgba(0,166,103,.28);
    --danger:        #DC3545;
    --danger-dim:    rgba(220,53,69,.09);
    --warning:       #F59E0B;
    --warning-dim:   rgba(245,158,11,.10);
    --radius-sm:     6px;
    --radius-md:     10px;
    --radius-lg:     16px;
    --shadow-card:   0 1px 4px rgba(15,28,46,.07), 0 4px 16px rgba(15,28,46,.05);
    --shadow-glow:   0 0 18px rgba(0,166,103,.18);
    --focus-ring:    0 0 0 3px rgba(0,166,103,.22);
    background: var(--bg-deep);
    color: var(--text-primary);
    font-family: inherit;
    padding: 24px 28px 40px;
}

[data-h-scope="categories"] *:focus-visible { outline: none; box-shadow: var(--focus-ring); }

.page-header { display: flex; align-items: center; justify-content: space-between; padding: 4px 0 22px; border-bottom: 1px solid var(--border); margin-bottom: 24px; flex-wrap: wrap; gap: 16px; }
.page-header h2 { font-size: 1.5rem; font-weight: 800; color: var(--text-primary); letter-spacing: -.02em; margin: 0; }
.page-header h2 span { color: var(--accent); }

.btn-accent { background: var(--accent); color: #fff; border: none; padding: 9px 22px; border-radius: var(--radius-sm); font-weight: 700; font-size: .85rem; letter-spacing: .02em; cursor: pointer; display: inline-flex; align-items: center; gap: 7px; transition: background .15s, box-shadow .15s, transform .15s; }
.btn-accent:hover { background: var(--accent-dark); box-shadow: var(--shadow-glow); transform: translateY(-1px); }
.btn-accent:disabled { opacity: .7; cursor: default; }

/* Card grid */
.categories-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }

.cat-card { position: relative; z-index: 1; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-card); padding: 20px; display: flex; flex-direction: column; gap: 14px; transition: box-shadow .15s, transform .15s, border-color .15s; }
.cat-card:hover, .cat-card:focus-within { box-shadow: var(--shadow-card), var(--shadow-glow); border-color: var(--border-accent); transform: translateY(-2px); z-index: 5; }

.cat-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
.cat-card-heading { display: flex; flex-direction: column; gap: 8px; min-width: 0; }

.cat-name { font-weight: 700; font-size: 1.02rem; color: var(--text-primary); line-height: 1.3; word-break: break-word; }

.cat-desc { color: var(--text-secondary); font-size: .85rem; line-height: 1.5; margin: 0; flex: 1; }

.cat-card-footer { display: flex; align-items: center; gap: 10px; padding-top: 12px; border-top: 1px solid var(--border); }
.cat-slug-label { font-size: .68rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--accent); }

.badge-featured { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 20px; font-size: .7rem; font-weight: 700; letter-spacing: .04em; width: fit-content; }
.badge-featured.yes { background: var(--accent-dim); color: var(--accent); border: 1px solid var(--border-accent); }
.badge-featured.no { background: #F1F5F9; color: var(--text-muted); border: 1px solid var(--border); }

.cat-slug { font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: .78rem; color: var(--text-secondary); background: #EEF2F7; padding: 3px 8px; border-radius: 4px; border: 1px solid var(--border); display: inline-block; }

.data-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-card); overflow: hidden; }

/* Dropdown */
.dropdown-wrap { position: relative; display: inline-block; flex-shrink: 0; }
.btn-actions { background: var(--bg-surface); border: 1px solid var(--border); color: var(--text-secondary); padding: 6px 10px; border-radius: var(--radius-sm); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: background .15s, color .15s, border-color .15s; }
.btn-actions:hover { background: #EDF7F2; border-color: var(--accent); color: var(--accent); }
.dropdown-menu { position: absolute; right: 0; top: calc(100% + 6px); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); box-shadow: 0 8px 32px rgba(15,28,46,.12); min-width: 150px; padding: 6px; list-style: none; margin: 0; z-index: 40; animation: dropdownSlide .15s ease-out; }
@keyframes dropdownSlide { from { opacity: 0; transform: scale(.95) translateY(-8px); } to { opacity: 1; transform: scale(1) translateY(0); } }
.dropdown-item { width: 100%; background: none; border: none; text-align: left; color: var(--text-secondary); border-radius: var(--radius-sm); padding: 8px 12px; font-size: .83rem; font-weight: 500; transition: background .15s, color .15s; display: flex; align-items: center; gap: 8px; cursor: pointer; }
.dropdown-item:hover { background: var(--bg-hover); color: var(--text-primary); }
.dropdown-item.text-danger { color: var(--danger); }
.dropdown-item.text-danger:hover { background: var(--danger-dim); color: var(--danger); }
.dropdown-divider { border: none; border-top: 1px solid var(--border); margin: 4px 0; list-style: none; }

/* Empty state */
.empty-state { text-align: center; padding: 56px 24px; color: var(--text-muted); }
.empty-state h5 { color: var(--text-primary); margin-bottom: 8px; font-weight: 700; }
.empty-state p { margin: 0 0 20px; font-size: .9rem; }

/* Toasts */
.toast-stack { position: fixed; top: 16px; right: 16px; z-index: 1100; display: flex; flex-direction: column; gap: 10px; width: 320px; max-width: calc(100vw - 32px); }
.toast-item { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); box-shadow: 0 4px 20px rgba(15,28,46,.12); overflow: hidden; animation: toastIn .2s ease-out; }
@keyframes toastIn { from { opacity: 0; transform: translateX(12px); } to { opacity: 1; transform: translateX(0); } }
.toast-header { background: var(--bg-surface); border-bottom: 1px solid var(--border); color: var(--text-secondary); display: flex; align-items: center; gap: 8px; padding: 10px 12px; font-size: .8rem; }
.toast-header strong { color: var(--text-primary); margin-right: auto; }
.toast-body { color: var(--text-primary); padding: 10px 12px; font-size: .82rem; }
.toast-error-list { margin: 0; padding-left: 16px; }

/* Modals */
.modal-overlay { position: fixed; inset: 0; background: rgba(15,28,46,.35); backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center; padding: 20px; z-index: 1000; animation: fadeIn .15s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.modal-dialog { width: 100%; max-width: 480px; animation: slideUp .2s cubic-bezier(.4,0,.2,1); }
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.modal-content { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: 0 20px 60px rgba(15,28,46,.14); color: var(--text-primary); overflow: hidden; }
.modal-header { border-bottom: 1px solid var(--border); padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface); }
.modal-title { font-weight: 700; font-size: 1rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px; margin: 0; }
.modal-body { padding: 24px; }
.modal-footer { border-top: 1px solid var(--border); padding: 16px 24px; display: flex; justify-content: flex-end; gap: 10px; background: var(--bg-surface); }
.btn-close { background: none; border: none; opacity: .45; cursor: pointer; color: var(--text-secondary); display: flex; align-items: center; justify-content: center; padding: 4px; border-radius: 6px; transition: opacity .15s, background .15s; }
.btn-close:hover { opacity: .8; background: var(--bg-hover); }

.form-label { font-size: .8rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 7px; display: block; }
.form-control, .form-select { background: var(--bg-card); border: 1px solid #DAE2EC; color: var(--text-primary); border-radius: var(--radius-sm); padding: 10px 14px; font-size: .875rem; transition: border-color .15s, box-shadow .15s; width: 100%; font-family: inherit; }
.form-control:focus, .form-select:focus { border-color: var(--accent); box-shadow: var(--focus-ring); outline: none; background: #fff; }
.form-control::placeholder { color: var(--text-muted); }
.slug-hint { color: var(--text-muted); display: block; margin-top: 4px; font-size: .75rem; min-height: 1.2em; }
.mb-3 { margin-bottom: 16px; }

.form-check { margin-top: 4px; display: flex; align-items: center; gap: 8px; }
.form-check-input { background-color: var(--bg-card); border: 1.5px solid #C8D8E8; width: 18px; height: 18px; cursor: pointer; accent-color: var(--accent); }
.form-check-label { color: var(--text-secondary); font-size: .875rem; cursor: pointer; margin: 0; }

.text-danger { color: var(--danger); font-size: .78rem; display: block; margin-top: 4px; }

.btn-modal-save, .btn-modal-delete { color: #fff; border: none; padding: 9px 22px; border-radius: var(--radius-sm); font-weight: 700; font-size: .85rem; cursor: pointer; transition: background .15s, box-shadow .15s; display: inline-flex; align-items: center; gap: 6px; }
.btn-modal-save { background: var(--accent); }
.btn-modal-save:hover { background: var(--accent-dark); box-shadow: var(--shadow-glow); }
.btn-modal-save:disabled { opacity: .7; cursor: default; }
.btn-modal-delete { background: var(--danger); }
.btn-modal-delete:hover { background: #B02A37; }
.btn-modal-cancel { background: transparent; color: var(--text-secondary); border: 1px solid #DAE2EC; padding: 9px 22px; border-radius: var(--radius-sm); font-weight: 600; font-size: .85rem; cursor: pointer; transition: background .15s, color .15s, border-color .15s; }
.btn-modal-cancel:hover { background: var(--bg-hover); color: var(--text-primary); border-color: #B0C4D8; }

.delete-icon-wrap { width: 52px; height: 52px; border-radius: 50%; background: var(--danger-dim); border: 1px solid rgba(220,53,69,.18); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: var(--danger); }
.delete-title { font-weight: 800; margin-bottom: 8px; color: var(--text-primary); }
.delete-sub { color: var(--text-secondary); font-size: .875rem; margin: 0; }
`;export{q as default};
