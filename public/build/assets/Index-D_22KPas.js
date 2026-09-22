import{u as q,r as v,j as e,H as K,L as h,a as j}from"./app-CJlpfYPO.js";import{A as Q}from"./AppLayout-WTBEreOn.js";function fe({talents:t,categories:o=[],stats:n={},filters:a={}}){var S;const i={create:()=>route("admin.talents.create"),index:()=>route("admin.talents.index"),bulk:()=>route("admin.talents.bulk"),show:r=>route("admin.talents.show",r),edit:r=>route("admin.talents.edit",r),destroy:r=>route("admin.talents.destroy",r),connections:()=>route("admin.connections")},{data:l,setData:c,get:W,processing:k}=q({search:(a==null?void 0:a.search)??"",status:(a==null?void 0:a.status)??"",category_id:(a==null?void 0:a.category_id)??"",level:(a==null?void 0:a.level)??"",featured:(a==null?void 0:a.featured)??""}),[p,f]=v.useState([]),[m,C]=v.useState(""),[w,R]=v.useState(!1),u=(t==null?void 0:t.data)??[],P=u.length>0&&p.length===u.length,H=p.length>0,b=[l.status,l.category_id,l.level,l.featured].filter(Boolean).length,$=r=>{f(r?u.map(s=>s.id):[])},O=r=>{f(s=>s.includes(r)?s.filter(d=>d!==r):[...s,r])},U=r=>{r.preventDefault(),W(i.index(),{preserveState:!0,preserveScroll:!0})},A=()=>{c({search:"",status:"",category_id:"",level:"",featured:""}),j.get(i.index(),{},{preserveState:!1,preserveScroll:!0})},Y=()=>{c("search",""),j.get(i.index(),{...a,search:"",page:1},{preserveState:!0,preserveScroll:!0})},J=()=>{if(!m){window.alert("Please select a bulk action.");return}if(p.length===0){window.alert("Please select at least one talent.");return}m==="delete"&&!window.confirm(`Delete ${p.length} selected talent profile(s)? This action cannot be undone.`)||j.post(i.bulk(),{action:m,ids:p},{preserveScroll:!0,onSuccess:()=>{f([]),C("")}})},V=r=>{window.confirm("Delete this talent profile? This action cannot be undone.")&&j.delete(i.destroy(r),{preserveScroll:!0})},G=v.useMemo(()=>{if(!(t!=null&&t.last_page)||t.last_page<=1)return[];const r=t.current_page,s=Math.max(1,r-2),d=Math.min(t.last_page,r+2);return Array.from({length:d-s+1},(F,x)=>s+x)},[t==null?void 0:t.current_page,t==null?void 0:t.last_page]);return e.jsxs(Q,{children:[e.jsx(K,{title:"Talent Management"}),e.jsx("style",{children:xe}),e.jsxs("div",{className:"talent-admin-page",children:[((S=a==null?void 0:a.flash)==null?void 0:S.success)&&e.jsxs("div",{className:"flash-message flash-success",children:[e.jsx("div",{className:"flash-icon",children:e.jsx(B,{size:16})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Success"}),e.jsx("span",{children:a.flash.success})]}),e.jsx("button",{type:"button",className:"flash-close",onClick:()=>{},children:"×"})]}),e.jsxs("header",{className:"talent-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx("span",{children:"Admin"}),e.jsx(ie,{}),e.jsx("span",{className:"current",children:"Talent"})]}),e.jsxs("div",{className:"title-row",children:[e.jsx("div",{className:"title-icon",children:e.jsx(I,{})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Talent management"}),e.jsx("p",{children:"Manage talent profiles, skills, categories and professional levels."})]})]})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs(h,{href:i.connections(),className:"secondary-button",children:[e.jsx(E,{}),e.jsx("span",{children:"Connections"})]}),e.jsxs(h,{href:i.create(),className:"primary-button",children:[e.jsx(T,{}),e.jsx("span",{children:"Add talent"})]})]})]}),e.jsxs("section",{className:"stats-grid",children:[e.jsx(g,{label:"Total talent",value:n==null?void 0:n.total,description:"Registered profiles",icon:e.jsx(E,{}),accent:!0}),e.jsx(g,{label:"Active",value:n==null?void 0:n.active,description:"Currently available",icon:e.jsx(B,{})}),e.jsx(g,{label:"Featured",value:n==null?void 0:n.featured,description:"Highlighted talent",icon:e.jsx(L,{})}),e.jsx(g,{label:"Matched",value:n==null?void 0:n.matched,description:"Successfully connected",icon:e.jsx(re,{})}),e.jsx(g,{label:"Categories",value:n==null?void 0:n.categories,description:"Skill categories",icon:e.jsx(M,{})})]}),e.jsxs("form",{onSubmit:U,className:"search-panel",children:[e.jsxs("div",{className:"search-main",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(z,{}),e.jsx("input",{type:"text",value:l.search,onChange:r=>c("search",r.target.value),placeholder:"Search by name, email or phone..."}),l.search&&e.jsx("button",{type:"button",className:"clear-search",onClick:Y,children:"×"})]}),e.jsxs("button",{type:"button",className:`filter-toggle ${w?"active":""}`,onClick:()=>R(r=>!r),children:[e.jsx(ae,{}),e.jsx("span",{children:"Filters"}),b>0&&e.jsx("span",{className:"filter-count",children:b}),e.jsx(ne,{className:w?"rotate":""})]}),e.jsxs("button",{type:"submit",className:"search-button",disabled:k,children:[k?e.jsx(he,{}):e.jsx(z,{}),e.jsx("span",{children:k?"Searching...":"Search"})]})]}),w&&e.jsxs("div",{className:"advanced-filters",children:[e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{value:l.status,onChange:r=>c("status",r.target.value),children:[e.jsx("option",{value:"",children:"All statuses"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"pending",children:"Pending"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Category"}),e.jsxs("select",{value:l.category_id,onChange:r=>c("category_id",r.target.value),children:[e.jsx("option",{value:"",children:"All categories"}),o.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Professional level"}),e.jsxs("select",{value:l.level,onChange:r=>c("level",r.target.value),children:[e.jsx("option",{value:"",children:"All levels"}),e.jsx("option",{value:"beginner",children:"Beginner"}),e.jsx("option",{value:"intermediate",children:"Intermediate"}),e.jsx("option",{value:"advanced",children:"Advanced"}),e.jsx("option",{value:"expert",children:"Expert"})]})]}),e.jsxs("div",{className:"filter-field",children:[e.jsx("label",{children:"Featured"}),e.jsxs("select",{value:l.featured,onChange:r=>c("featured",r.target.value),children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"1",children:"Featured only"}),e.jsx("option",{value:"0",children:"Not featured"})]})]}),e.jsx("div",{className:"filter-actions",children:e.jsxs("button",{type:"button",className:"reset-button",onClick:A,children:[e.jsx(_,{}),"Reset"]})})]})]}),e.jsxs("section",{className:"talent-card",children:[e.jsxs("div",{className:"results-toolbar",children:[e.jsxs("div",{className:"results-heading",children:[e.jsx("div",{className:"results-title",children:"Talent profiles"}),e.jsx("span",{className:"results-count",children:Number((t==null?void 0:t.total)??0).toLocaleString()}),b>0&&e.jsx("span",{className:"filtered-label",children:"Filtered"})]}),H?e.jsxs("div",{className:"selection-toolbar",children:[e.jsxs("span",{className:"selected-count",children:[e.jsx(te,{}),p.length," selected"]}),e.jsxs("select",{value:m,onChange:r=>C(r.target.value),className:"bulk-select",children:[e.jsx("option",{value:"",children:"Bulk action"}),e.jsx("option",{value:"activate",children:"Activate"}),e.jsx("option",{value:"deactivate",children:"Deactivate"}),e.jsx("option",{value:"feature",children:"Mark featured"}),e.jsx("option",{value:"delete",children:"Delete"})]}),e.jsx("button",{type:"button",className:"bulk-apply",onClick:J,children:"Apply"}),e.jsx("button",{type:"button",className:"cancel-selection",onClick:()=>f([]),children:"Cancel"})]}):e.jsx("div",{className:"toolbar-meta",children:e.jsxs("span",{children:["Showing"," ",e.jsx("strong",{children:(t==null?void 0:t.from)??0}),"–",e.jsx("strong",{children:(t==null?void 0:t.to)??0})]})})]}),u.length>0?e.jsx("div",{className:"table-wrapper",children:e.jsxs("table",{className:"talent-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"checkbox-column",children:e.jsx("input",{type:"checkbox",checked:P,onChange:r=>$(r.target.checked)})}),e.jsx("th",{children:"Talent"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Level"}),e.jsx("th",{children:"Language"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"actions-column",children:"Actions"})]})}),e.jsx("tbody",{children:u.map(r=>{var d;const s=(r.status||"inactive").toLowerCase();return e.jsxs("tr",{children:[e.jsx("td",{className:"checkbox-column",children:e.jsx("input",{type:"checkbox",checked:p.includes(r.id),onChange:()=>O(r.id)})}),e.jsx("td",{children:e.jsxs("div",{className:"talent-identity",children:[e.jsxs("div",{className:"avatar-wrapper",children:[r.image?e.jsx("img",{src:r.image,alt:r.name,className:"talent-avatar"}):e.jsx("div",{className:"talent-avatar-placeholder",children:ee(r.name)}),s==="active"&&e.jsx("span",{className:"online-indicator"})]}),e.jsxs("div",{className:"talent-details",children:[e.jsxs("div",{className:"talent-name-row",children:[e.jsx(h,{href:i.show(r.id),className:"talent-name",children:r.name||"Unnamed talent"}),r.featured&&e.jsxs("span",{className:"featured-badge",children:[e.jsx(L,{size:10}),"Featured"]})]}),e.jsx("div",{className:"talent-contact",children:r.email||r.phone||"No contact information"})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"category-cell",children:[e.jsx("span",{className:"category-icon",children:e.jsx(M,{size:14})}),e.jsx("span",{children:((d=r.category)==null?void 0:d.name)??"—"})]})}),e.jsx("td",{children:r.level?e.jsx("span",{className:`level-badge level-${String(r.level).toLowerCase()}`,children:D(r.level)}):e.jsx("span",{className:"muted",children:"Not specified"})}),e.jsx("td",{children:r.language?e.jsxs("span",{className:"language-value",children:[e.jsx(pe,{}),r.language]}):e.jsx("span",{className:"muted",children:"—"})}),e.jsx("td",{children:e.jsx(X,{status:s})}),e.jsx("td",{className:"actions-column",children:e.jsxs("div",{className:"row-actions",children:[e.jsx(h,{href:i.show(r.id),className:"row-action view",title:"View profile",children:e.jsx(le,{})}),e.jsx(h,{href:i.edit(r.id),className:"row-action edit",title:"Edit profile",children:e.jsx(de,{})}),e.jsx("button",{type:"button",className:"row-action delete",title:"Delete profile",onClick:()=>V(r.id),children:e.jsx(ce,{})})]})})]},r.id)})})]})}):e.jsx(Z,{search:l.search,hasFilters:b>0,onReset:A,createRoute:i.create}),(t==null?void 0:t.last_page)>1&&e.jsxs("div",{className:"pagination-bar",children:[e.jsxs("div",{className:"pagination-info",children:["Showing"," ",e.jsx("strong",{children:t.from})," to"," ",e.jsx("strong",{children:t.to})," of"," ",e.jsx("strong",{children:t.total})," talent profiles"]}),e.jsxs("div",{className:"pagination",children:[e.jsx(N,{href:y(i,t.current_page-1),disabled:t.current_page===1,children:e.jsx(oe,{})}),G.map(r=>e.jsx(N,{href:y(i,r),active:r===t.current_page,children:r},r)),e.jsx(N,{href:y(i,t.current_page+1),disabled:t.current_page===t.last_page,children:e.jsx(se,{})})]})]})]})]})]});function y(r,s){const d=new URLSearchParams;return Object.entries(a||{}).forEach(([F,x])=>{F!=="flash"&&x!==null&&x!==void 0&&x!==""&&d.set(F,x)}),d.set("page",s),`${r.index()}?${d.toString()}`}}function g({label:t,value:o,description:n,icon:a,accent:i=!1}){return e.jsxs("div",{className:`stat-card ${i?"stat-card-accent":""}`,children:[e.jsxs("div",{className:"stat-top",children:[e.jsx("span",{className:"stat-label",children:t}),e.jsx("span",{className:"stat-icon",children:a})]}),e.jsx("div",{className:"stat-value",children:Number(o??0).toLocaleString()}),e.jsx("div",{className:"stat-description",children:n})]})}function X({status:t}){const o=t||"inactive";return e.jsxs("span",{className:`status-badge status-${o}`,children:[e.jsx("span",{className:"status-dot"}),D(o)]})}function Z({search:t,hasFilters:o,onReset:n,createRoute:a}){return e.jsxs("div",{className:"empty-state",children:[e.jsxs("div",{className:"empty-illustration",children:[e.jsx("div",{className:"empty-circle",children:e.jsx(I,{size:28})}),e.jsx("span",{className:"empty-dot empty-dot-one"}),e.jsx("span",{className:"empty-dot empty-dot-two"}),e.jsx("span",{className:"empty-dot empty-dot-three"})]}),e.jsx("h3",{children:t||o?"No talent profiles found":"Your talent registry is empty"}),e.jsx("p",{children:t||o?"Try changing your search or filter criteria.":"Start building your talent network by adding your first profile."}),e.jsxs("div",{className:"empty-actions",children:[(t||o)&&e.jsxs("button",{type:"button",className:"secondary-button",onClick:n,children:[e.jsx(_,{}),"Reset filters"]}),e.jsxs(h,{href:a(),className:"primary-button",children:[e.jsx(T,{}),"Add talent"]})]})]})}function N({href:t,active:o=!1,disabled:n=!1,children:a}){return n?e.jsx("span",{className:"pagination-button disabled",children:a}):e.jsx(h,{href:t,preserveScroll:!0,className:`pagination-button ${o?"active":""}`,children:a})}function D(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function ee(t){return t?t.trim().split(/\s+/).slice(0,2).map(o=>o.charAt(0)).join("").toUpperCase():"?"}function I({size:t=18}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 21a8 8 0 0116 0"}),e.jsx("path",{d:"M19 5v4M21 7h-4"})]})}function T(){return e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})})}function E({size:t=16}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 00-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]})}function B({size:t=16}){return e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}function te(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M8 12l2.5 2.5L16 9"})]})}function L({size:t=18}){return e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}function re(){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 8a6 6 0 01-6 6H6"}),e.jsx("path",{d:"M6 18l-3-3 3-3"}),e.jsx("path",{d:"M6 8a6 6 0 016-6h6"}),e.jsx("path",{d:"M18 2l3 3-3 3"})]})}function M({size:t=18}){return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2l9 5-9 5-9-5 9-5z"}),e.jsx("path",{d:"M3 12l9 5 9-5"}),e.jsx("path",{d:"M3 17l9 5 9-5"})]})}function z(){return e.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"M20 20l-4-4"})]})}function ae(){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:e.jsx("path",{d:"M4 6h16M7 12h10M10 18h4"})})}function ne({className:t=""}){return e.jsx("svg",{className:t,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e.jsx("path",{d:"M6 9l6 6 6-6"})})}function ie(){return e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M9 18l6-6-6-6"})})}function oe(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M15 18l-6-6 6-6"})})}function se(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M9 18l6-6-6-6"})})}function _(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 11a8.1 8.1 0 00-15.5-2M4 5v4h4"}),e.jsx("path",{d:"M4 13a8.1 8.1 0 0015.5 2M20 19v-4h-4"})]})}function le(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}function de(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.12 2.12 0 013 3L8 18l-4 1 1-4z"})]})}function ce(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 7h16"}),e.jsx("path",{d:"M10 11v6M14 11v6"}),e.jsx("path",{d:"M6 7l1 14h10l1-14"}),e.jsx("path",{d:"M9 7V4h6v3"})]})}function pe(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M3 12h18"}),e.jsx("path",{d:"M12 3a14 14 0 010 18"})]})}function he(){return e.jsx("svg",{className:"spinner",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("circle",{cx:"12",cy:"12",r:"9",strokeDasharray:"40 20"})})}const xe=`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

.talent-admin-page {
    --brand: #5D89C8;
    --brand-dark: #4775B3;
    --brand-light: #EEF4FC;
    --brand-lighter: #F6F9FD;

    --ink: #172033;
    --ink-2: #39445A;
    --muted: #7C879A;
    --muted-2: #A5ADBB;

    --border: #E7EAF0;
    --border-light: #EFF1F5;

    --canvas: #F6F8FB;
    --white: #FFFFFF;

    --success: #198754;
    --success-bg: #EAF7F0;

    --warning: #B7791F;
    --warning-bg: #FFF6E4;

    --danger: #D64545;
    --danger-bg: #FFF0F0;

    --purple: #7556B5;
    --purple-bg: #F2EEFA;

    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    background: var(--canvas);
    min-height: 100%;
    padding: 30px 32px 45px;
}

.talent-admin-page *,
.talent-admin-page *::before,
.talent-admin-page *::after {
    box-sizing: border-box;
}

/* ============================================================
   FLASH
============================================================ */

.flash-message {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 16px;
    border-radius: 12px;
    margin-bottom: 22px;
}

.flash-success {
    background: var(--success-bg);
    border: 1px solid #CBE9D9;
    color: var(--success);
}

.flash-icon {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: #D7F1E2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flash-message strong {
    display: block;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 1px;
}

.flash-message span {
    display: block;
    font-size: 12px;
}

.flash-close {
    margin-left: auto;
    border: 0;
    background: transparent;
    color: currentColor;
    opacity: .55;
    font-size: 20px;
    cursor: pointer;
}

/* ============================================================
   HEADER
============================================================ */

.talent-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 25px;
    margin-bottom: 28px;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 12px;
}

.breadcrumb .current {
    color: var(--ink-2);
    font-weight: 600;
}

.breadcrumb svg {
    color: #B8BFCA;
}

.title-row {
    display: flex;
    align-items: center;
    gap: 13px;
}

.title-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: var(--brand-light);
    color: var(--brand);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #DDE8F7;
}

.title-row h1 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 25px;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: -.5px;
    color: var(--ink);
    margin: 0 0 5px;
}

.title-row p {
    margin: 0;
    font-size: 13px;
    color: var(--muted);
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 9px;
}

.primary-button,
.secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 40px;
    padding: 0 16px;
    border-radius: 9px;
    font-size: 12.5px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all .18s ease;
    white-space: nowrap;
}

.primary-button {
    background: var(--brand);
    border: 1px solid var(--brand);
    color: #fff;
    box-shadow: 0 3px 8px rgba(93,137,200,.18);
}

.primary-button:hover {
    background: var(--brand-dark);
    border-color: var(--brand-dark);
    color: #fff;
    transform: translateY(-1px);
}

.secondary-button {
    background: #fff;
    border: 1px solid var(--border);
    color: var(--ink-2);
}

.secondary-button:hover {
    border-color: #C7D3E5;
    background: var(--brand-lighter);
    color: var(--brand-dark);
}

/* ============================================================
   STAT CARDS
============================================================ */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 14px;
    margin-bottom: 20px;
}

.stat-card {
    position: relative;
    min-height: 135px;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 17px 18px;
    overflow: hidden;
    transition: transform .18s ease, box-shadow .18s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(24,39,75,.06);
}

.stat-card-accent {
    border-color: #D9E6F6;
    background: linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 100%);
}

.stat-card-accent::after {
    content: '';
    position: absolute;
    width: 70px;
    height: 70px;
    right: -25px;
    bottom: -25px;
    border-radius: 50%;
    background: var(--brand-light);
}

.stat-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.stat-label {
    color: var(--muted);
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .065em;
}

.stat-icon {
    width: 33px;
    height: 33px;
    border-radius: 9px;
    background: #F5F7FA;
    color: var(--ink-2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.stat-card-accent .stat-icon {
    background: var(--brand-light);
    color: var(--brand);
}

.stat-value {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 25px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -.6px;
    color: var(--ink);
    font-variant-numeric: tabular-nums;
}

.stat-description {
    color: var(--muted);
    font-size: 11.5px;
    margin-top: 8px;
}

/* ============================================================
   SEARCH
============================================================ */

.search-panel {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 14px;
    margin-bottom: 20px;
    padding: 13px;
}

.search-main {
    display: flex;
    gap: 9px;
}

.search-box {
    position: relative;
    flex: 1;
    height: 42px;
    display: flex;
    align-items: center;
    border: 1px solid var(--border);
    background: #FBFCFE;
    border-radius: 9px;
    color: var(--muted);
    transition: border-color .15s, box-shadow .15s;
}

.search-box:focus-within {
    border-color: var(--brand);
    background: #fff;
    box-shadow: 0 0 0 3px rgba(93,137,200,.10);
}

.search-box > svg {
    margin-left: 13px;
    flex-shrink: 0;
}

.search-box input {
    border: 0;
    outline: 0;
    background: transparent;
    width: 100%;
    height: 100%;
    padding: 0 36px 0 10px;
    color: var(--ink);
    font-family: inherit;
    font-size: 13px;
}

.search-box input::placeholder {
    color: #A2AAB7;
}

.clear-search {
    position: absolute;
    right: 10px;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 50%;
    background: #E9EDF3;
    color: var(--muted);
    cursor: pointer;
    line-height: 18px;
    font-size: 17px;
}

.filter-toggle,
.search-button {
    height: 42px;
    border-radius: 9px;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
}

.filter-toggle {
    min-width: 105px;
    padding: 0 13px;
    background: #fff;
    color: var(--ink-2);
    border: 1px solid var(--border);
}

.filter-toggle:hover,
.filter-toggle.active {
    color: var(--brand-dark);
    border-color: #C7D7EA;
    background: var(--brand-lighter);
}

.filter-toggle svg:last-child {
    transition: transform .2s ease;
}

.filter-toggle svg.rotate {
    transform: rotate(180deg);
}

.filter-count {
    min-width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--brand);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
}

.search-button {
    min-width: 92px;
    padding: 0 15px;
    background: var(--ink);
    color: #fff;
    border: 1px solid var(--ink);
}

.search-button:hover {
    background: #0E1420;
}

.search-button:disabled {
    opacity: .65;
    cursor: wait;
}

.advanced-filters {
    border-top: 1px solid var(--border-light);
    margin-top: 13px;
    padding-top: 14px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr)) auto;
    gap: 12px;
    align-items: end;
}

.filter-field label {
    display: block;
    color: var(--muted);
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .06em;
    margin-bottom: 6px;
}

.filter-field select {
    width: 100%;
    height: 38px;
    padding: 0 10px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: #FBFCFE;
    color: var(--ink-2);
    font-family: inherit;
    font-size: 12.5px;
    outline: none;
}

.filter-field select:focus {
    border-color: var(--brand);
}

.reset-button {
    height: 38px;
    padding: 0 13px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--border);
    background: #fff;
    border-radius: 8px;
    color: var(--muted);
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}

.reset-button:hover {
    color: var(--ink);
    background: #F7F8FA;
}

/* ============================================================
   TABLE CARD
============================================================ */

.talent-card {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 2px 7px rgba(23,32,51,.02);
}

.results-toolbar {
    min-height: 62px;
    padding: 11px 18px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
}

.results-heading {
    display: flex;
    align-items: center;
    gap: 8px;
}

.results-title {
    color: var(--ink);
    font-size: 13px;
    font-weight: 700;
}

.results-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 27px;
    height: 22px;
    padding: 0 7px;
    border-radius: 6px;
    background: var(--brand-light);
    color: var(--brand-dark);
    font-size: 10.5px;
    font-weight: 700;
}

.filtered-label {
    border: 1px solid #D9E4F3;
    color: var(--brand);
    background: #F8FBFF;
    border-radius: 20px;
    padding: 3px 8px;
    font-size: 9.5px;
    font-weight: 700;
}

.toolbar-meta {
    color: var(--muted);
    font-size: 11.5px;
}

.toolbar-meta strong {
    color: var(--ink-2);
}

.selection-toolbar {
    display: flex;
    align-items: center;
    gap: 7px;
}

.selected-count {
    height: 31px;
    padding: 0 9px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border-radius: 7px;
    background: var(--brand-light);
    color: var(--brand-dark);
    font-size: 11px;
    font-weight: 700;
}

.bulk-select {
    height: 31px;
    padding: 0 9px;
    border: 1px solid var(--border);
    background: #FBFCFE;
    color: var(--ink-2);
    border-radius: 7px;
    font-family: inherit;
    font-size: 11.5px;
    outline: none;
}

.bulk-apply,
.cancel-selection {
    height: 31px;
    padding: 0 11px;
    border-radius: 7px;
    font-family: inherit;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}

.bulk-apply {
    border: 1px solid var(--ink);
    background: var(--ink);
    color: #fff;
}

.cancel-selection {
    border: 1px solid var(--border);
    background: #fff;
    color: var(--muted);
}

/* ============================================================
   TABLE
============================================================ */

.table-wrapper {
    overflow-x: auto;
}

.talent-table {
    width: 100%;
    min-width: 920px;
    border-collapse: collapse;
}

.talent-table thead {
    background: #FAFBFD;
}

.talent-table th {
    height: 43px;
    padding: 0 15px;
    border-bottom: 1px solid var(--border);
    color: #8993A4;
    font-size: 9.5px;
    font-weight: 700;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: .065em;
    white-space: nowrap;
}

.talent-table th:first-child,
.talent-table td:first-child {
    padding-left: 18px;
}

.talent-table th:last-child,
.talent-table td:last-child {
    padding-right: 18px;
}

.talent-table td {
    padding: 13px 15px;
    border-bottom: 1px solid var(--border-light);
    color: var(--ink-2);
    font-size: 12.5px;
    vertical-align: middle;
}

.talent-table tbody tr {
    transition: background .12s ease;
}

.talent-table tbody tr:hover {
    background: #FBFCFE;
}

.talent-table tbody tr:last-child td {
    border-bottom: 0;
}

.checkbox-column {
    width: 45px;
}

.actions-column {
    width: 125px;
    text-align: right !important;
}

input[type="checkbox"] {
    width: 15px;
    height: 15px;
    accent-color: var(--brand);
    cursor: pointer;
}

/* ============================================================
   TALENT IDENTITY
============================================================ */

.talent-identity {
    display: flex;
    align-items: center;
    gap: 11px;
    min-width: 230px;
}

.avatar-wrapper {
    position: relative;
    width: 39px;
    height: 39px;
    flex-shrink: 0;
}

.talent-avatar,
.talent-avatar-placeholder {
    width: 39px;
    height: 39px;
    border-radius: 10px;
}

.talent-avatar {
    object-fit: cover;
    border: 1px solid var(--border);
}

.talent-avatar-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #6D96CD, #4E79B7);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .02em;
}

.online-indicator {
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #28A66A;
    border: 2px solid #fff;
}

.talent-details {
    min-width: 0;
}

.talent-name-row {
    display: flex;
    align-items: center;
    gap: 7px;
}

.talent-name {
    color: var(--ink);
    text-decoration: none;
    font-size: 12.5px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 190px;
}

.talent-name:hover {
    color: var(--brand-dark);
}

.talent-contact {
    color: var(--muted);
    font-size: 10.5px;
    margin-top: 3px;
    max-width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.featured-badge {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    height: 19px;
    padding: 0 6px;
    border-radius: 5px;
    background: var(--warning-bg);
    color: var(--warning);
    font-size: 8.5px;
    font-weight: 800;
}

/* ============================================================
   CATEGORY
============================================================ */

.category-cell {
    display: flex;
    align-items: center;
    gap: 7px;
    white-space: nowrap;
}

.category-icon {
    width: 26px;
    height: 26px;
    border-radius: 7px;
    background: #F5F7FA;
    color: #7C879A;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

/* ============================================================
   LEVEL
============================================================ */

.level-badge {
    display: inline-flex;
    align-items: center;
    height: 25px;
    padding: 0 9px;
    border-radius: 6px;
    font-size: 10.5px;
    font-weight: 700;
    white-space: nowrap;
}

.level-beginner {
    color: #56708F;
    background: #EFF4F9;
}

.level-intermediate {
    color: #607B42;
    background: #F0F6E9;
}

.level-advanced {
    color: #7562A3;
    background: #F2EFF9;
}

.level-expert {
    color: #9B6A22;
    background: #FFF5E5;
}

.muted {
    color: var(--muted-2);
    font-size: 11.5px;
}

.language-value {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--ink-2);
    font-size: 11.5px;
}

/* ============================================================
   STATUS
============================================================ */

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 25px;
    padding: 0 9px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 700;
    white-space: nowrap;
}

.status-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: currentColor;
}

.status-active {
    background: var(--success-bg);
    color: var(--success);
}

.status-inactive {
    background: #F2F3F5;
    color: #7F8998;
}

.status-pending {
    background: var(--warning-bg);
    color: var(--warning);
}

/* ============================================================
   ROW ACTIONS
============================================================ */

.row-actions {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
}

.row-action {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid var(--border);
    background: #fff;
    color: #8A94A5;
    cursor: pointer;
    text-decoration: none;
    transition: all .15s ease;
}

.row-action:hover {
    color: var(--brand-dark);
    border-color: #C9D8EA;
    background: var(--brand-light);
}

.row-action.edit:hover {
    color: var(--ink);
    border-color: #CCD2DB;
    background: #F5F6F8;
}

.row-action.delete:hover {
    color: var(--danger);
    border-color: #F0C9C9;
    background: var(--danger-bg);
}

/* ============================================================
   EMPTY
============================================================ */

.empty-state {
    padding: 75px 25px;
    text-align: center;
}

.empty-illustration {
    position: relative;
    width: 90px;
    height: 70px;
    margin: 0 auto 19px;
}

.empty-circle {
    width: 58px;
    height: 58px;
    border-radius: 17px;
    background: var(--brand-light);
    color: var(--brand);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.empty-dot {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #DDE8F6;
}

.empty-dot-one {
    top: 3px;
    left: 9px;
}

.empty-dot-two {
    right: 6px;
    top: 17px;
    width: 5px;
    height: 5px;
}

.empty-dot-three {
    left: 15px;
    bottom: 3px;
    width: 5px;
    height: 5px;
}

.empty-state h3 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: var(--ink);
    font-size: 15px;
    font-weight: 700;
    margin: 0 0 6px;
}

.empty-state p {
    color: var(--muted);
    font-size: 12.5px;
    margin: 0 auto 18px;
    max-width: 420px;
    line-height: 1.6;
}

.empty-actions {
    display: flex;
    justify-content: center;
    gap: 8px;
}

/* ============================================================
   PAGINATION
============================================================ */

.pagination-bar {
    min-height: 59px;
    border-top: 1px solid var(--border);
    padding: 11px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}

.pagination-info {
    color: var(--muted);
    font-size: 11.5px;
}

.pagination-info strong {
    color: var(--ink-2);
}

.pagination {
    display: flex;
    align-items: center;
    gap: 4px;
}

.pagination-button {
    min-width: 31px;
    height: 31px;
    padding: 0 8px;
    border-radius: 7px;
    border: 1px solid var(--border);
    background: #fff;
    color: var(--ink-2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 11.5px;
    font-weight: 600;
    transition: all .15s ease;
}

.pagination-button:hover {
    border-color: #C8D8EB;
    background: var(--brand-light);
    color: var(--brand-dark);
}

.pagination-button.active {
    background: var(--brand);
    border-color: var(--brand);
    color: #fff;
}

.pagination-button.disabled {
    opacity: .35;
    cursor: default;
}

/* ============================================================
   SPINNER
============================================================ */

.spinner {
    animation: spin .8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* ============================================================
   RESPONSIVE
============================================================ */

@media (max-width: 1250px) {
    .stats-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .advanced-filters {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 950px) {
    .talent-admin-page {
        padding: 24px 20px 35px;
    }

    .talent-header {
        align-items: flex-start;
        flex-direction: column;
    }

    .header-actions {
        width: 100%;
    }

    .header-actions .primary-button,
    .header-actions .secondary-button {
        flex: 1;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .advanced-filters {
        grid-template-columns: repeat(2, 1fr);
    }

    .filter-actions {
        grid-column: span 2;
    }
}

@media (max-width: 680px) {
    .talent-admin-page {
        padding: 18px 13px 28px;
    }

    .title-row h1 {
        font-size: 21px;
    }

    .title-row p {
        font-size: 12px;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr;
        gap: 9px;
    }

    .stat-card {
        min-height: 118px;
        padding: 14px;
    }

    .stat-value {
        font-size: 22px;
    }

    .stat-description {
        font-size: 10.5px;
    }

    .header-actions {
        flex-direction: column;
    }

    .header-actions .primary-button,
    .header-actions .secondary-button {
        width: 100%;
    }

    .search-main {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .search-box {
        grid-column: span 2;
    }

    .search-button,
    .filter-toggle {
        width: 100%;
    }

    .advanced-filters {
        grid-template-columns: 1fr;
    }

    .filter-actions {
        grid-column: auto;
    }

    .results-toolbar {
        align-items: flex-start;
        flex-direction: column;
    }

    .selection-toolbar {
        width: 100%;
        flex-wrap: wrap;
    }

    .pagination-bar {
        align-items: flex-start;
        flex-direction: column;
    }

    .pagination {
        width: 100%;
        justify-content: flex-end;
    }

    .empty-actions {
        flex-direction: column;
        align-items: stretch;
        max-width: 220px;
        margin: auto;
    }
}

@media (max-width: 420px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }

    .title-icon {
        width: 39px;
        height: 39px;
    }

    .breadcrumb {
        margin-bottom: 8px;
    }
}
`;export{fe as default};
