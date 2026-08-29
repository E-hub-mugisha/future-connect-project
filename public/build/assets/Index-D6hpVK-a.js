import{r as d,j as e,H as S,a as I,u as P}from"./app-BO26Fp_i.js";import{A as _}from"./AppLayout-Do3g3cSn.js";function K({partners:a,flash:o}){const t={store:()=>route("admin.partners.store"),update:r=>route("admin.partners.update",r),destroy:r=>route("admin.partners.destroy",r)},[n,i]=d.useState(""),[l,c]=d.useState("all"),[w,p]=d.useState(!1),[x,k]=d.useState(null),[f,h]=d.useState(null),[u,v]=d.useState(null),b=d.useMemo(()=>({all:a.length,active:a.filter(r=>r.is_active??r.status).length,inactive:a.filter(r=>!(r.is_active??r.status)).length}),[a]),s=d.useMemo(()=>{let r=a;if(l!=="all"&&(r=r.filter(m=>l==="active"==!!(m.is_active??m.status))),n.trim()){const m=n.toLowerCase();r=r.filter(j=>[j.name,j.description,j.link].filter(Boolean).some(B=>B.toLowerCase().includes(m)))}return r},[n,l,a]),g=()=>{u&&I.delete(t.destroy(u.id),{preserveScroll:!0,onSuccess:()=>v(null)})};return e.jsxs(_,{children:[e.jsx(S,{title:"Partners"}),e.jsx("style",{children:X}),e.jsxs("div",{"data-h-scope":"partners",className:"partners-page",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{className:"page-header-left",children:[e.jsx("div",{className:"eyebrow",children:"Future Connect · Management"}),e.jsx("h1",{children:"Partners"}),e.jsx("p",{className:"sub",children:"The organisations backing your talent network — manage their visibility here."})]}),e.jsxs("button",{className:"btn-add",onClick:()=>p(!0),children:[e.jsx(M,{})," Add partner"]})]}),(o==null?void 0:o.success)&&e.jsxs("div",{className:"flash-success",children:[e.jsx(Y,{}),o.success]}),e.jsxs("div",{className:"stat-strip",children:[e.jsx(y,{label:"Total partners",value:b.all,active:l==="all",onClick:()=>c("all"),tone:"neutral"}),e.jsx(y,{label:"Active",value:b.active,active:l==="active",onClick:()=>c("active"),tone:"good"}),e.jsx(y,{label:"Inactive",value:b.inactive,active:l==="inactive",onClick:()=>c("inactive"),tone:"muted"})]}),e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"search-wrap",children:[e.jsx(z,{}),e.jsx("input",{type:"text",placeholder:"Search by name, description or link…",value:n,onChange:r=>i(r.target.value)}),n&&e.jsx("button",{className:"search-clear",onClick:()=>i(""),"aria-label":"Clear search",children:e.jsx(A,{})})]}),e.jsxs("span",{className:"result-count",children:[s.length," of ",a.length," shown"]})]}),a.length===0?e.jsx(U,{onAdd:()=>p(!0)}):s.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(z,{size:24})}),e.jsx("h3",{children:"No partners match this view"}),e.jsx("p",{children:"Try a different search term or switch filters."})]}):e.jsx("div",{className:"partner-grid",children:s.map(r=>e.jsx(W,{partner:r,onView:()=>k(r),onEdit:()=>h(r),onDelete:()=>v(r)},r.id))})]}),w&&e.jsx(F,{mode:"add",routes:t,onClose:()=>p(!1)}),f&&e.jsx(F,{mode:"edit",partner:f,routes:t,onClose:()=>h(null)}),x&&e.jsx($,{partner:x,onClose:()=>k(null)}),u&&e.jsx(R,{name:u.name,onCancel:()=>v(null),onConfirm:g})]})}function y({label:a,value:o,active:t,onClick:n,tone:i}){return e.jsxs("button",{type:"button",className:`stat-chip tone-${i} ${t?"is-active":""}`,onClick:n,children:[e.jsx("span",{className:"stat-value",children:o}),e.jsx("span",{className:"stat-label",children:a})]})}function W({partner:a,onView:o,onEdit:t,onDelete:n}){const i=!!(a.is_active??a.status),l=T(a.link),c=L(a.name);return e.jsxs("div",{className:`partner-card ${i?"is-active":"is-inactive"}`,children:[e.jsxs("div",{className:"card-top",children:[e.jsx("div",{className:`logo-badge ${i?"ring-active":"ring-inactive"}`,children:a.logo?e.jsx("img",{src:a.logo,alt:a.name}):e.jsx("span",{className:"logo-initials",children:c})}),e.jsx("span",{className:i?"badge-active":"badge-inactive",children:i?"Active":"Inactive"})]}),e.jsx("h3",{className:"card-name",children:a.name}),e.jsx("p",{className:"card-desc",children:a.description?E(a.description,110):e.jsx("span",{className:"dash",children:"No description added"})}),e.jsx("div",{className:"card-divider"}),e.jsxs("div",{className:"card-footer",children:[a.link?e.jsxs("a",{href:a.link,target:"_blank",rel:"noreferrer",className:"card-link",children:[e.jsx(H,{})," ",l]}):e.jsx("span",{className:"dash",children:"No website"}),e.jsxs("div",{className:"card-actions",children:[e.jsx("button",{className:"icon-btn",title:"View details",onClick:o,children:e.jsx(V,{})}),e.jsx("button",{className:"icon-btn",title:"Edit partner",onClick:t,children:e.jsx(q,{})}),e.jsx("button",{className:"icon-btn icon-btn-danger",title:"Delete partner",onClick:n,children:e.jsx(D,{})})]})]})]})}function U({onAdd:a}){return e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(O,{})}),e.jsx("h3",{children:"No partners yet"}),e.jsx("p",{children:"Add the first organisation supporting your talent network."}),e.jsxs("button",{className:"btn-add",onClick:a,children:[e.jsx(M,{})," Add partner"]})]})}function $({partner:a,onClose:o}){const t=!!(a.is_active??a.status);return e.jsxs(N,{onClose:o,title:"Partner details",children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"modal-hero",children:[e.jsx("div",{className:`logo-badge logo-badge-lg ${t?"ring-active":"ring-inactive"}`,children:a.logo?e.jsx("img",{src:a.logo,alt:a.name}):e.jsx("span",{className:"logo-initials",children:L(a.name)})}),e.jsxs("div",{children:[e.jsx("div",{className:"modal-hero-name",children:a.name}),e.jsx("span",{className:t?"badge-active":"badge-inactive",children:t?"Active":"Inactive"})]})]}),a.description&&e.jsx(C,{label:"Description",value:a.description}),e.jsx(C,{label:"Website",value:a.link?e.jsx("a",{href:a.link,target:"_blank",rel:"noreferrer",className:"detail-link",children:a.link}):e.jsx("span",{className:"dash",children:"—"})})]}),e.jsx("div",{className:"modal-footer",children:e.jsx("button",{type:"button",className:"btn-modal-secondary",onClick:o,children:"Close"})})]})}function C({label:a,value:o}){return e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:a}),e.jsx("span",{className:"detail-value",children:o})]})}function F({mode:a,partner:o,routes:t,onClose:n}){const i=a==="edit",l=d.useRef(null),[c,w]=d.useState(null),{data:p,setData:x,post:k,processing:f,errors:h,transform:u}=P({name:(o==null?void 0:o.name)??"",description:(o==null?void 0:o.description)??"",logo:null,link:(o==null?void 0:o.link)??"",is_active:i?!!((o==null?void 0:o.is_active)??(o==null?void 0:o.status)):!0}),v=s=>{var m;const g=(m=s.target.files)==null?void 0:m[0];if(!g)return;x("logo",g);const r=new FileReader;r.onload=j=>w(j.target.result),r.readAsDataURL(g)},b=s=>{s.preventDefault();const g=i?t.update(o.id):t.store();i&&u(r=>({...r,_method:"put"})),k(g,{forceFormData:!0,onSuccess:n})};return e.jsx(N,{onClose:n,title:i?"Edit partner":"Add partner",children:e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Name ",e.jsx("span",{className:"req-mark",children:"*"})]}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Partner organisation name",value:p.name,onChange:s=>x("name",s.target.value),required:!0}),h.name&&e.jsx("span",{className:"err-msg",children:h.name})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Description"}),e.jsx("textarea",{className:"form-control",placeholder:"Brief description (optional)",value:p.description,onChange:s=>x("description",s.target.value)})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Logo"}),i&&(o==null?void 0:o.logo)&&!c&&e.jsx("div",{className:"logo-preview-wrap",children:e.jsx("img",{src:o.logo,alt:o.name})}),c&&e.jsx("div",{className:"logo-preview-wrap",children:e.jsx("img",{src:c,alt:"New logo preview"})}),e.jsx("input",{ref:l,type:"file",accept:"image/*",className:"form-control",style:{marginTop:8},onChange:v}),h.logo&&e.jsx("span",{className:"err-msg",children:h.logo})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Website link"}),e.jsx("input",{type:"url",className:"form-control",placeholder:"https://partner-site.com",value:p.link,onChange:s=>x("link",s.target.value)})]}),e.jsxs("label",{className:"form-toggle",htmlFor:`active_${a}_${(o==null?void 0:o.id)??"new"}`,children:[e.jsx("input",{type:"checkbox",id:`active_${a}_${(o==null?void 0:o.id)??"new"}`,checked:p.is_active,onChange:s=>x("is_active",s.target.checked)}),e.jsx("span",{className:"toggle-track",children:e.jsx("span",{className:"toggle-thumb"})}),e.jsx("span",{className:"toggle-text",children:"Mark as active"})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn-modal-secondary",onClick:n,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-modal-primary",disabled:f,children:f?"Saving…":i?"Save changes":"Add partner"})]})]})})}function R({name:a,onCancel:o,onConfirm:t}){return e.jsxs(N,{onClose:o,hideHeaderTitle:!0,children:[e.jsxs("div",{className:"modal-body delete-confirm-body",children:[e.jsx("div",{className:"delete-icon",children:e.jsx(D,{size:20})}),e.jsx("h5",{children:"Delete partner?"}),e.jsxs("p",{children:["You're about to remove ",e.jsx("strong",{children:a}),".",e.jsx("br",{}),"This action cannot be undone."]})]}),e.jsxs("div",{className:"modal-footer",style:{justifyContent:"center"},children:[e.jsx("button",{type:"button",className:"btn-modal-secondary",onClick:o,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn-modal-danger",onClick:t,children:"Yes, delete"})]})]})}function N({title:a,hideHeaderTitle:o,onClose:t,children:n}){return e.jsx("div",{className:"modal-overlay",onClick:t,children:e.jsx("div",{className:"modal-dialog",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",style:o?{borderBottom:"none"}:void 0,children:[e.jsx("h5",{className:"modal-title",style:o?{visibility:"hidden"}:void 0,children:a||"Modal"}),e.jsx("button",{type:"button",className:"btn-close",onClick:t,"aria-label":"Close",children:e.jsx(A,{})})]}),n]})})})}function E(a,o){return a?a.length>o?a.slice(0,o).trim()+"…":a:""}function T(a){if(!a)return"";try{const{hostname:o}=new URL(a);return o.replace(/^www\./,"")}catch{return E(a,26)}}function L(a){if(!a)return"?";const o=a.trim().split(/\s+/);return o.length===1?o[0].slice(0,2).toUpperCase():(o[0][0]+o[o.length-1][0]).toUpperCase()}function M(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})}function Y(){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}function z({size:a=14}){return e.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}function H(){return e.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e.jsx("polyline",{points:"15 3 21 3 21 9"}),e.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})}function V(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}function q(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}function D({size:a=14}){return e.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}function O(){return e.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}function A(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}const X=`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&display=swap');

[data-h-scope="partners"] {
    --ink:          #12141C;
    --ink-2:        #565F72;
    --ink-3:        #9AA2B1;
    --canvas:       #F4F5F9;
    --surface:      #FFFFFF;
    --border:       #E5E7EF;
    --border-soft:  #EEF0F5;
    --accent:       #1E45D6;
    --accent-deep:  #142F94;
    --accent-wash:  #EAEFFE;
    --gold:         #D79A26;
    --gold-wash:    #FBF1DC;
    --good:         #17916B;
    --good-wash:    #E5F6EF;
    --bad:          #D6392F;
    --bad-wash:     #FBEAE9;
    --radius-lg:    18px;
    --radius-md:    12px;
    --radius-sm:    9px;
    --shadow-card:  0 1px 2px rgba(18,20,28,.04), 0 1px 10px rgba(18,20,28,.04);
    --shadow-card-hover: 0 10px 28px rgba(18,20,28,.09);
    --shadow-lg:    0 24px 64px rgba(18,20,28,.20);
    --font-display: 'Manrope', 'Segoe UI', sans-serif;
    font-family: 'Segoe UI', system-ui, sans-serif;
}

.partners-page { background: var(--canvas); padding: 30px 34px 48px; min-height: 100vh; }

.page-header { display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 18px; margin-bottom: 22px; }
.page-header-left .eyebrow { font-family: var(--font-display); font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
.page-header-left h1 { font-family: var(--font-display); font-size: 25px; font-weight: 800; color: var(--ink); margin: 0; letter-spacing: -.5px; line-height: 1.15; }
.page-header-left .sub { font-size: 13.5px; color: var(--ink-2); margin: 6px 0 0; max-width: 440px; line-height: 1.5; }

.flash-success { display: flex; align-items: center; gap: 10px; background: var(--good-wash); border: 1px solid #BEE7D6; color: #0F6B4E; border-radius: var(--radius-md); padding: 12px 16px; font-size: 13px; font-weight: 600; margin-bottom: 20px; }

.btn-add { background: var(--accent); color: #fff; border: none; border-radius: var(--radius-md); padding: 11px 22px; font-size: 13px; font-weight: 700; font-family: var(--font-display); cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: background .15s, box-shadow .2s, transform .12s; white-space: nowrap; flex-shrink: 0; }
.btn-add:hover { background: var(--accent-deep); transform: translateY(-1px); box-shadow: 0 10px 24px rgba(30,69,214,.28); }

/* Stat strip */
.stat-strip { display: flex; gap: 10px; margin-bottom: 18px; flex-wrap: wrap; }
.stat-chip { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; background: var(--surface); border: 1.5px solid var(--border); border-radius: var(--radius-md); padding: 11px 20px; cursor: pointer; transition: border-color .15s, box-shadow .15s, transform .12s; font-family: inherit; }
.stat-chip:hover { transform: translateY(-1px); box-shadow: var(--shadow-card); }
.stat-value { font-family: var(--font-display); font-size: 19px; font-weight: 800; color: var(--ink); line-height: 1; }
.stat-label { font-size: 11.5px; font-weight: 600; color: var(--ink-3); }
.stat-chip.is-active { border-color: var(--accent); background: var(--accent-wash); }
.stat-chip.is-active .stat-value { color: var(--accent-deep); }
.stat-chip.tone-good.is-active { border-color: var(--good); background: var(--good-wash); }
.stat-chip.tone-good.is-active .stat-value { color: var(--good); }
.stat-chip.tone-muted.is-active { border-color: var(--ink-3); background: #F1F2F6; }

/* Toolbar */
.toolbar { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; flex-wrap: wrap; }
.search-wrap { display: flex; align-items: center; gap: 9px; background: var(--surface); border: 1.5px solid var(--border); border-radius: var(--radius-sm); padding: 9px 14px; flex: 1; max-width: 380px; transition: border-color .15s, box-shadow .15s; }
.search-wrap:focus-within { border-color: var(--accent); box-shadow: 0 0 0 4px rgba(30,69,214,.09); }
.search-wrap svg { color: var(--ink-3); flex-shrink: 0; }
.search-wrap input { border: none; background: transparent; outline: none; font-size: 13px; color: var(--ink); width: 100%; }
.search-wrap input::placeholder { color: #B4BACA; }
.search-clear { background: none; border: none; color: var(--ink-3); cursor: pointer; display: flex; padding: 2px; border-radius: 5px; }
.search-clear:hover { background: var(--border-soft); color: var(--ink-2); }
.result-count { font-size: 12px; color: var(--ink-3); font-weight: 600; white-space: nowrap; }

/* Card grid */
.partner-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(288px, 1fr)); gap: 16px; }

.partner-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px; display: flex; flex-direction: column; box-shadow: var(--shadow-card); transition: box-shadow .18s, transform .18s, border-color .18s; }
.partner-card:hover { box-shadow: var(--shadow-card-hover); transform: translateY(-2px); border-color: #D9DDE8; }

.card-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; }

.logo-badge { width: 52px; height: 52px; border-radius: 14px; background: var(--canvas); display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 0 0 2.5px var(--surface), 0 0 0 4px var(--ring-color, var(--border)); flex-shrink: 0; }
.logo-badge.ring-active { --ring-color: var(--gold); }
.logo-badge.ring-inactive { --ring-color: var(--border); }
.logo-badge img { width: 100%; height: 100%; object-fit: contain; padding: 8px; }
.logo-badge-lg { width: 64px; height: 64px; border-radius: 16px; }
.logo-initials { font-family: var(--font-display); font-weight: 800; font-size: 16px; color: var(--ink-2); letter-spacing: .02em; }

.badge-active, .badge-inactive { display: inline-flex; align-items: center; gap: 5px; font-size: 10.5px; font-weight: 700; padding: 4px 10px; border-radius: 20px; white-space: nowrap; font-family: var(--font-display); }
.badge-active { background: var(--gold-wash); color: #8A6414; }
.badge-active::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--gold); }
.badge-inactive { background: #F1F2F6; color: var(--ink-3); }
.badge-inactive::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #C3C8D3; }

.card-name { font-family: var(--font-display); font-size: 15.5px; font-weight: 800; color: var(--ink); margin: 0 0 6px; letter-spacing: -.2px; }
.card-desc { font-size: 12.5px; color: var(--ink-2); line-height: 1.55; margin: 0; min-height: 38px; }

.card-divider { height: 1px; background: var(--border-soft); margin: 16px 0 12px; }

.card-footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.card-link { font-size: 12px; font-weight: 600; color: var(--accent); text-decoration: none; display: inline-flex; align-items: center; gap: 5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.card-link:hover { text-decoration: underline; }
.dash { color: #C3C8D3; font-size: 12px; }

.card-actions { display: flex; gap: 4px; flex-shrink: 0; }
.icon-btn { width: 30px; height: 30px; border-radius: 8px; border: 1px solid transparent; background: var(--canvas); color: var(--ink-2); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background .12s, color .12s, border-color .12s; }
.icon-btn:hover { background: var(--accent-wash); color: var(--accent-deep); border-color: #CBD6FB; }
.icon-btn-danger:hover { background: var(--bad-wash); color: var(--bad); border-color: #F3C7C4; }

/* Empty / no-match states */
.empty-state { background: var(--surface); border: 1px dashed var(--border); border-radius: var(--radius-lg); padding: 60px 20px; text-align: center; }
.empty-icon { width: 54px; height: 54px; background: var(--canvas); border-radius: 15px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: var(--ink-3); }
.empty-state h3 { font-family: var(--font-display); font-size: 15px; font-weight: 800; color: var(--ink-2); margin: 0 0 6px; }
.empty-state p { font-size: 13px; color: var(--ink-3); margin: 0 0 20px; }

/* Modal system */
.modal-overlay { position: fixed; inset: 0; background: rgba(15,17,26,.52); backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center; padding: 20px; z-index: 1000; animation: fadeIn .15s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.modal-dialog { width: 100%; max-width: 460px; animation: slideUp .18s ease-out; }
@keyframes slideUp { from { opacity: 0; transform: translateY(12px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
.modal-content { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); }
.modal-header { background: #fff; border-bottom: 1px solid var(--border-soft); padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; }
.modal-title { font-family: var(--font-display); font-size: 15px; font-weight: 800; color: var(--ink); margin: 0; }
.btn-close { background: var(--canvas); border: none; border-radius: var(--radius-sm); width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--ink-2); transition: background .12s; }
.btn-close:hover { background: var(--border-soft); }
.modal-body { background: #fff; padding: 22px 24px; max-height: 70vh; overflow-y: auto; }
.modal-footer { background: var(--canvas); border-top: 1px solid var(--border-soft); padding: 14px 24px; display: flex; gap: 8px; justify-content: flex-end; }

.modal-hero { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
.modal-hero-name { font-family: var(--font-display); font-weight: 800; font-size: 16px; color: var(--ink); margin-bottom: 6px; }

.detail-row { display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border-soft); font-size: 13px; }
.detail-row:last-child { border-bottom: none; }
.detail-label { font-weight: 700; color: var(--ink-3); min-width: 92px; flex-shrink: 0; }
.detail-value { color: var(--ink-2); line-height: 1.5; }
.detail-link { color: var(--accent); text-decoration: none; font-size: 13px; }
.detail-link:hover { text-decoration: underline; }

.form-group { margin-bottom: 16px; }
.form-label { font-size: 12px; font-weight: 700; color: var(--ink-2); margin-bottom: 6px; display: block; }
.req-mark { color: var(--bad); }
.form-control { background: var(--canvas); border: 1.5px solid var(--border); border-radius: var(--radius-sm); color: var(--ink); font-size: 13px; padding: 10px 13px; width: 100%; font-family: inherit; transition: border-color .15s, box-shadow .15s, background .15s; }
.form-control:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 4px rgba(30,69,214,.09); background: #fff; }
textarea.form-control { min-height: 80px; resize: vertical; }
.err-msg { display: block; font-size: 11.5px; color: var(--bad); font-weight: 600; margin-top: 5px; }

.form-toggle { display: flex; align-items: center; gap: 10px; cursor: pointer; margin-top: 4px; }
.form-toggle input { position: absolute; opacity: 0; width: 0; height: 0; }
.toggle-track { width: 38px; height: 22px; background: var(--border); border-radius: 20px; position: relative; transition: background .18s; flex-shrink: 0; }
.toggle-thumb { position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: #fff; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,.2); transition: transform .18s; }
.form-toggle input:checked + .toggle-track { background: var(--gold); }
.form-toggle input:checked + .toggle-track .toggle-thumb { transform: translateX(16px); }
.toggle-text { font-size: 13px; color: var(--ink-2); font-weight: 600; }

.logo-preview-wrap { margin-top: 8px; }
.logo-preview-wrap img { height: 52px; object-fit: contain; border-radius: var(--radius-sm); border: 1px solid var(--border); padding: 4px; background: #fff; }

.btn-modal-primary { background: var(--accent); color: #fff; border: none; border-radius: var(--radius-sm); padding: 10px 20px; font-size: 13px; font-weight: 700; font-family: var(--font-display); cursor: pointer; transition: background .15s; }
.btn-modal-primary:hover { background: var(--accent-deep); }
.btn-modal-primary:disabled { opacity: .65; cursor: default; }
.btn-modal-secondary { background: #fff; color: var(--ink-2); border: 1.5px solid var(--border); border-radius: var(--radius-sm); padding: 10px 20px; font-size: 13px; font-weight: 700; cursor: pointer; transition: background .15s; }
.btn-modal-secondary:hover { background: var(--canvas); }
.btn-modal-danger { background: var(--bad-wash); color: var(--bad); border: 1.5px solid #F3C7C4; border-radius: var(--radius-sm); padding: 10px 20px; font-size: 13px; font-weight: 700; cursor: pointer; transition: background .15s, color .15s; }
.btn-modal-danger:hover { background: var(--bad); color: #fff; }

.delete-confirm-body { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 30px 24px; }
.delete-icon { width: 50px; height: 50px; background: var(--bad-wash); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: var(--bad); }
.delete-confirm-body h5 { font-family: var(--font-display); font-size: 16px; font-weight: 800; color: var(--ink); margin: 0 0 6px; }
.delete-confirm-body p { font-size: 13px; color: var(--ink-3); margin: 0; line-height: 1.5; }

@media (max-width: 560px) {
    .partners-page { padding: 20px 16px 36px; }
    .page-header { flex-direction: column; }
    .btn-add { width: 100%; justify-content: center; }
    .partner-grid { grid-template-columns: 1fr; }
}
`;export{K as default};
