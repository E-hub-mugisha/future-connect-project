import{r as g,j as e,H as M,L as d,a as S}from"./app-CJlpfYPO.js";import{A as T}from"./AppLayout-WTBEreOn.js";function a({name:c,size:i=20,strokeWidth:f=1.8,className:o=""}){const b={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:f,strokeLinecap:"round",strokeLinejoin:"round",className:o,"aria-hidden":"true"},n={megaphone:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 11v2a2 2 0 0 0 2 2h2l4 5h2l-2-5h2l7 3V6l-7 3H5a2 2 0 0 0-2 2Z"}),e.jsx("path",{d:"M20 6v12"})]}),plus:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 5v14"}),e.jsx("path",{d:"M5 12h14"})]}),search:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"11",cy:"11",r:"6.5"}),e.jsx("path",{d:"m16 16 4 4"})]}),close:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"m6 6 12 12"}),e.jsx("path",{d:"m18 6-12 12"})]}),eye:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]}),edit:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"})]}),trash:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 7h16"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M6 7l1 14h10l1-14"}),e.jsx("path",{d:"M9 7V4h6v3"})]}),calendar:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"17",rx:"2"}),e.jsx("path",{d:"M16 2v4"}),e.jsx("path",{d:"M8 2v4"}),e.jsx("path",{d:"M3 10h18"})]}),user:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"3.5"}),e.jsx("path",{d:"M5 21a7 7 0 0 1 14 0"})]}),tag:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z"}),e.jsx("circle",{cx:"7.5",cy:"7.5",r:"1"})]}),file:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"}),e.jsx("path",{d:"M14 2v6h6"}),e.jsx("path",{d:"M8 13h8"}),e.jsx("path",{d:"M8 17h6"})]}),checkCircle:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"m8 12 2.5 2.5L16 9"})]}),clock:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 2"})]}),chevronDown:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m6 9 6 6 6-6"})}),alert:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M10.3 3.3 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z"}),e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"})]})};return e.jsx("svg",{...b,children:n[c]||n.file})}function D({announcements:c=[]}){const[i,f]=g.useState(""),[o,b]=g.useState("all"),[n,h]=g.useState(null),x=Array.isArray(c)?c:(c==null?void 0:c.data)??[],w=g.useMemo(()=>{const t=x.map(s=>{var r;return((r=s==null?void 0:s.category)==null?void 0:r.name)||(s==null?void 0:s.category_name)||""}).filter(Boolean);return[...new Set(t)].sort()},[x]),m=g.useMemo(()=>{const t=i.trim().toLowerCase();return x.filter(s=>{var k,z;const r=String((s==null?void 0:s.title)||"").toLowerCase(),l=String(((k=s==null?void 0:s.category)==null?void 0:k.name)||(s==null?void 0:s.category_name)||"").toLowerCase(),p=String(((z=s==null?void 0:s.user)==null?void 0:z.name)||"").toLowerCase(),j=!t||r.includes(t)||l.includes(t)||p.includes(t),C=o==="all"||l===o.toLowerCase();return j&&C})},[x,i,o]),u={total:x.length,categories:w.length,authors:new Set(x.map(t=>{var s,r;return((s=t==null?void 0:t.user)==null?void 0:s.id)||((r=t==null?void 0:t.user)==null?void 0:r.name)}).filter(Boolean)).size,recent:x.filter(t=>{if(!(t!=null&&t.created_at))return!1;const s=new Date(t.created_at);return new Date().getTime()-s.getTime()<=30*24*60*60*1e3}).length},y=t=>t?String(t).trim().charAt(0).toUpperCase():"?",v=t=>{if(!t)return"N/A";const s=new Date(t);return Number.isNaN(s.getTime())?"N/A":s.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})},N=t=>{if(!t)return"Untitled announcement";const s=String(t);return s.length<=80?s:s.substring(0,80)+"…"},A=()=>{n!=null&&n.id&&S.delete(route("admin.announcements.destroy",n.id),{preserveScroll:!0,onSuccess:()=>{h(null)}})};return e.jsxs(T,{children:[e.jsx(M,{title:"Announcements"}),e.jsxs("div",{className:"announcements-page",children:[e.jsxs("header",{className:"announcements-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsx("div",{className:"header-icon",children:e.jsx(a,{name:"megaphone",size:24})}),e.jsxs("div",{children:[e.jsxs("div",{className:"breadcrumb",children:["Admin",e.jsx("span",{children:"/"}),"Announcements"]}),e.jsx("h1",{children:"Announcements"}),e.jsx("p",{children:"Create, manage and publish important announcements."})]})]}),e.jsx("div",{className:"header-actions",children:e.jsxs(d,{href:route("admin.announcements.create"),className:"btn btn-primary",children:[e.jsx(a,{name:"plus",size:18}),"Create Announcement"]})})]}),e.jsxs("section",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-label",children:"Total Announcements"}),e.jsx("strong",{className:"stat-value",children:u.total}),e.jsx("span",{className:"stat-description",children:"All announcements"})]}),e.jsx("div",{className:"stat-icon blue",children:e.jsx(a,{name:"megaphone",size:21})})]}),e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-label",children:"Categories"}),e.jsx("strong",{className:"stat-value",children:u.categories}),e.jsx("span",{className:"stat-description",children:"Announcement categories"})]}),e.jsx("div",{className:"stat-icon green",children:e.jsx(a,{name:"tag",size:21})})]}),e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-label",children:"Authors"}),e.jsx("strong",{className:"stat-value",children:u.authors}),e.jsx("span",{className:"stat-description",children:"Unique contributors"})]}),e.jsx("div",{className:"stat-icon purple",children:e.jsx(a,{name:"user",size:21})})]}),e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-label",children:"Recent"}),e.jsx("strong",{className:"stat-value",children:u.recent}),e.jsx("span",{className:"stat-description",children:"Published in last 30 days"})]}),e.jsx("div",{className:"stat-icon orange",children:e.jsx(a,{name:"clock",size:21})})]})]}),e.jsxs("section",{className:"announcements-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"section-eyebrow",children:[e.jsx(a,{name:"file",size:15}),"ANNOUNCEMENT LIBRARY"]}),e.jsx("h2",{children:"All Announcements"}),e.jsx("p",{children:"Browse and manage your announcements."})]}),e.jsxs("div",{className:"results-count",children:[m.length,e.jsx("span",{children:"results"})]})]}),e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(a,{name:"search",size:18}),e.jsx("input",{type:"text",value:i,onChange:t=>f(t.target.value),placeholder:"Search announcements, categories or authors..."}),i&&e.jsx("button",{type:"button",className:"clear-search",onClick:()=>f(""),"aria-label":"Clear search",children:e.jsx(a,{name:"close",size:15})})]}),e.jsxs("div",{className:"filter-wrapper",children:[e.jsx(a,{name:"tag",size:16}),e.jsxs("select",{value:o,onChange:t=>b(t.target.value),children:[e.jsx("option",{value:"all",children:"All categories"}),w.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsx(a,{name:"chevronDown",size:15})]})]}),m.length>0?e.jsx("div",{className:"table-wrapper",children:e.jsxs("table",{className:"announcements-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Announcement"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Author"}),e.jsx("th",{children:"Created"}),e.jsx("th",{className:"actions-column",children:"Actions"})]})}),e.jsx("tbody",{children:m.map(t=>{var l,p,j;const s=((l=t==null?void 0:t.category)==null?void 0:l.name)||(t==null?void 0:t.category_name)||"Uncategorized",r=((p=t==null?void 0:t.user)==null?void 0:p.name)||"N/A";return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"announcement-cell",children:[e.jsx("div",{className:"announcement-icon",children:e.jsx(a,{name:"megaphone",size:19})}),e.jsxs("div",{className:"announcement-info",children:[e.jsx(d,{href:route("admin.announcements.show",t.id),className:"announcement-title",children:t.title}),e.jsx("span",{className:"announcement-excerpt",children:N(t.title)})]})]})}),e.jsx("td",{children:e.jsxs("span",{className:"category-badge",children:[e.jsx(a,{name:"tag",size:13}),s]})}),e.jsx("td",{children:e.jsxs("div",{className:"author-cell",children:[e.jsx("div",{className:"author-avatar",children:y(r)}),e.jsxs("div",{children:[e.jsx("span",{className:"author-name",children:r}),((j=t==null?void 0:t.user)==null?void 0:j.email)&&e.jsx("span",{className:"author-email",children:t.user.email})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"date-cell",children:[e.jsx(a,{name:"calendar",size:15}),e.jsx("span",{children:v(t.created_at)})]})}),e.jsx("td",{children:e.jsxs("div",{className:"table-actions",children:[e.jsx(d,{href:route("admin.announcements.show",t.id),className:"icon-button",title:"View",children:e.jsx(a,{name:"eye",size:17})}),e.jsx(d,{href:route("admin.announcements.edit",t.id),className:"icon-button",title:"Edit",children:e.jsx(a,{name:"edit",size:17})}),e.jsx("button",{type:"button",className:"icon-button danger",title:"Delete",onClick:()=>h(t),children:e.jsx(a,{name:"trash",size:17})})]})})]},t.id)})})]})}):e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(a,{name:"megaphone",size:30})}),e.jsx("h3",{children:i||o!=="all"?"No announcements found":"No announcements yet"}),e.jsx("p",{children:i||o!=="all"?"Try adjusting your search or category filter.":"Create your first announcement to get started."}),i||o!=="all"?e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{f(""),b("all")},children:"Clear Filters"}):e.jsxs(d,{href:route("admin.announcements.create"),className:"btn btn-primary",children:[e.jsx(a,{name:"plus",size:17}),"Create Announcement"]})]})]}),m.length>0&&e.jsx("div",{className:"mobile-announcement-list",children:m.map(t=>{var l,p;const s=((l=t==null?void 0:t.category)==null?void 0:l.name)||(t==null?void 0:t.category_name)||"Uncategorized",r=((p=t==null?void 0:t.user)==null?void 0:p.name)||"N/A";return e.jsxs("article",{className:"mobile-announcement-card",children:[e.jsxs("div",{className:"mobile-top",children:[e.jsx("div",{className:"announcement-icon",children:e.jsx(a,{name:"megaphone",size:19})}),e.jsxs("div",{className:"mobile-info",children:[e.jsx(d,{href:route("admin.announcements.show",t.id),className:"announcement-title",children:t.title}),e.jsx("span",{className:"announcement-excerpt",children:N(t.title)})]})]}),e.jsxs("div",{className:"mobile-meta",children:[e.jsxs("span",{className:"category-badge",children:[e.jsx(a,{name:"tag",size:13}),s]}),e.jsxs("div",{className:"mobile-author",children:[e.jsx("div",{className:"author-avatar small",children:y(r)}),r]}),e.jsxs("div",{className:"date-cell",children:[e.jsx(a,{name:"calendar",size:14}),v(t.created_at)]})]}),e.jsxs("div",{className:"mobile-actions",children:[e.jsxs(d,{href:route("admin.announcements.show",t.id),className:"mobile-action",children:[e.jsx(a,{name:"eye",size:16}),"View"]}),e.jsxs(d,{href:route("admin.announcements.edit",t.id),className:"mobile-action",children:[e.jsx(a,{name:"edit",size:16}),"Edit"]}),e.jsxs("button",{type:"button",className:"mobile-action danger",onClick:()=>h(t),children:[e.jsx(a,{name:"trash",size:16}),"Delete"]})]})]},t.id)})}),n&&e.jsx("div",{className:"modal-backdrop",onMouseDown:t=>{t.target===t.currentTarget&&h(null)},children:e.jsxs("div",{className:"delete-modal",children:[e.jsx("button",{type:"button",className:"modal-close",onClick:()=>h(null),children:e.jsx(a,{name:"close",size:18})}),e.jsx("div",{className:"delete-icon",children:e.jsx(a,{name:"alert",size:25})}),e.jsx("h3",{children:"Delete announcement?"}),e.jsxs("p",{children:["You are about to permanently delete"," ",e.jsxs("strong",{children:['"',n.title,'"']}),". This action cannot be undone."]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>h(null),children:"Cancel"}),e.jsxs("button",{type:"button",className:"btn btn-danger",onClick:A,children:[e.jsx(a,{name:"trash",size:17}),"Yes, Delete"]})]})]})})]}),e.jsx("style",{children:`

                * {
                    box-sizing: border-box;
                }

                .announcements-page {
                    min-height: 100vh;
                    background: #f7f9fc;
                    color: #172033;
                    padding: 28px;
                }

                /* =========================================================
                   HEADER
                ========================================================= */

                .announcements-header {
                    max-width: 1440px;
                    margin: 0 auto 28px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .header-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ecfdf5;
                    color: #059669;
                    border: 1px solid #d1fae5;
                    flex-shrink: 0;
                }

                .breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 5px;
                    color: #98a2b3;
                    font-size: 12px;
                    font-weight: 600;
                }

                .breadcrumb span {
                    color: #cbd5e1;
                }

                .announcements-header h1 {
                    margin: 0;
                    color: #101828;
                    font-size: 28px;
                    line-height: 1.2;
                    font-weight: 750;
                    letter-spacing: -0.6px;
                }

                .announcements-header p {
                    margin: 5px 0 0;
                    color: #667085;
                    font-size: 14px;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                }

                /* =========================================================
                   BUTTONS
                ========================================================= */

                .btn {
                    height: 42px;
                    padding: 0 16px;
                    border-radius: 10px;
                    border: 1px solid transparent;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 13px;
                    font-weight: 650;
                    text-decoration: none;
                    cursor: pointer;
                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        transform .15s ease,
                        box-shadow .15s ease;
                }

                .btn:hover {
                    transform: translateY(-1px);
                }

                .btn-primary {
                    color: #ffffff;
                    background: #059669;
                    border-color: #059669;
                    box-shadow: 0 2px 6px rgba(5, 150, 105, .18);
                }

                .btn-primary:hover {
                    background: #047857;
                    border-color: #047857;
                }

                .btn-secondary {
                    color: #344054;
                    background: #ffffff;
                    border-color: #d0d5dd;
                }

                .btn-secondary:hover {
                    background: #f9fafb;
                    border-color: #98a2b3;
                }

                .btn-danger {
                    color: #ffffff;
                    background: #dc2626;
                    border-color: #dc2626;
                }

                .btn-danger:hover {
                    background: #b91c1c;
                    border-color: #b91c1c;
                }

                /* =========================================================
                   STATS
                ========================================================= */

                .stats-grid {
                    max-width: 1440px;
                    margin: 0 auto 24px;
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 16px;
                }

                .stat-card {
                    min-height: 130px;
                    padding: 20px;
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 15px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 15px;
                    box-shadow: 0 2px 5px rgba(16, 24, 40, .025);
                }

                .stat-content {
                    min-width: 0;
                }

                .stat-label {
                    display: block;
                    margin-bottom: 8px;
                    color: #667085;
                    font-size: 12px;
                    font-weight: 650;
                }

                .stat-value {
                    display: block;
                    color: #101828;
                    font-size: 28px;
                    line-height: 1;
                    letter-spacing: -.5px;
                }

                .stat-description {
                    display: block;
                    margin-top: 9px;
                    color: #98a2b3;
                    font-size: 11px;
                }

                .stat-icon {
                    width: 43px;
                    height: 43px;
                    flex-shrink: 0;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .stat-icon.blue {
                    color: #2563eb;
                    background: #eff6ff;
                }

                .stat-icon.green {
                    color: #059669;
                    background: #ecfdf5;
                }

                .stat-icon.purple {
                    color: #7c3aed;
                    background: #f5f3ff;
                }

                .stat-icon.orange {
                    color: #d97706;
                    background: #fffbeb;
                }

                /* =========================================================
                   MAIN CARD
                ========================================================= */

                .announcements-card {
                    max-width: 1440px;
                    margin: 0 auto;
                    overflow: hidden;
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 16px;
                    box-shadow: 0 3px 10px rgba(16, 24, 40, .035);
                }

                .card-header {
                    padding: 22px 24px 18px;
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;
                    border-bottom: 1px solid #eef1f5;
                }

                .section-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 7px;
                    color: #059669;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                .card-header h2 {
                    margin: 0;
                    color: #101828;
                    font-size: 19px;
                    font-weight: 750;
                }

                .card-header p {
                    margin: 5px 0 0;
                    color: #667085;
                    font-size: 13px;
                }

                .results-count {
                    color: #101828;
                    font-size: 16px;
                    font-weight: 750;
                    white-space: nowrap;
                }

                .results-count span {
                    margin-left: 4px;
                    color: #98a2b3;
                    font-size: 12px;
                    font-weight: 500;
                }

                /* =========================================================
                   TOOLBAR
                ========================================================= */

                .toolbar {
                    padding: 16px 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    background: #fcfdfe;
                    border-bottom: 1px solid #eef1f5;
                }

                .search-box {
                    width: min(500px, 100%);
                    height: 42px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    color: #98a2b3;
                }

                .search-box > svg {
                    position: absolute;
                    left: 13px;
                    pointer-events: none;
                }

                .search-box input {
                    width: 100%;
                    height: 100%;
                    padding: 0 40px;
                    outline: none;
                    border: 1px solid #dfe3e8;
                    border-radius: 9px;
                    background: #ffffff;
                    color: #101828;
                    font-size: 13px;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;
                }

                .search-box input::placeholder {
                    color: #a0a8b5;
                }

                .search-box input:focus {
                    border-color: #10b981;
                    box-shadow: 0 0 0 3px rgba(16, 185, 129, .1);
                }

                .clear-search {
                    position: absolute;
                    right: 10px;
                    width: 25px;
                    height: 25px;
                    border: 0;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f2f4f7;
                    color: #667085;
                    cursor: pointer;
                }

                .filter-wrapper {
                    position: relative;
                    min-width: 190px;
                    height: 42px;
                    padding: 0 11px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid #dfe3e8;
                    border-radius: 9px;
                    background: #ffffff;
                    color: #667085;
                }

                .filter-wrapper select {
                    appearance: none;
                    -webkit-appearance: none;
                    width: 100%;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    color: #344054;
                    font-size: 13px;
                    cursor: pointer;
                }

                .filter-wrapper > svg:last-child {
                    pointer-events: none;
                    flex-shrink: 0;
                }

                /* =========================================================
                   TABLE
                ========================================================= */

                .table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                }

                .announcements-table {
                    width: 100%;
                    min-width: 900px;
                    border-collapse: collapse;
                }

                .announcements-table thead {
                    background: #fafbfc;
                }

                .announcements-table th {
                    padding: 12px 20px;
                    text-align: left;
                    border-bottom: 1px solid #eef1f5;
                    color: #667085;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: .7px;
                    text-transform: uppercase;
                    white-space: nowrap;
                }

                .announcements-table td {
                    padding: 15px 20px;
                    border-bottom: 1px solid #f0f2f5;
                    vertical-align: middle;
                }

                .announcements-table tbody tr {
                    transition: background .15s ease;
                }

                .announcements-table tbody tr:hover {
                    background: #fcfdfd;
                }

                .announcements-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .actions-column {
                    width: 125px;
                    text-align: right !important;
                }

                /* =========================================================
                   ANNOUNCEMENT
                ========================================================= */

                .announcement-cell {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-width: 330px;
                }

                .announcement-icon {
                    width: 43px;
                    height: 43px;
                    flex-shrink: 0;
                    border-radius: 11px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ecfdf5;
                    color: #059669;
                    border: 1px solid #d1fae5;
                }

                .announcement-info {
                    min-width: 0;
                }

                .announcement-title {
                    display: block;
                    max-width: 390px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #101828;
                    font-size: 13px;
                    font-weight: 700;
                    line-height: 1.4;
                    text-decoration: none;
                }

                .announcement-title:hover {
                    color: #059669;
                }

                .announcement-excerpt {
                    display: block;
                    max-width: 390px;
                    margin-top: 4px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #98a2b3;
                    font-size: 11px;
                }

                /* =========================================================
                   CATEGORY
                ========================================================= */

                .category-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 8px;
                    border-radius: 7px;
                    background: #f2f4f7;
                    color: #475467;
                    font-size: 10px;
                    font-weight: 650;
                    white-space: nowrap;
                }

                /* =========================================================
                   AUTHOR
                ========================================================= */

                .author-cell {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                }

                .author-avatar {
                    width: 34px;
                    height: 34px;
                    flex-shrink: 0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f5f3ff;
                    color: #6d28d9;
                    border: 1px solid #ede9fe;
                    font-size: 12px;
                    font-weight: 800;
                }

                .author-avatar.small {
                    width: 28px;
                    height: 28px;
                    font-size: 10px;
                }

                .author-name {
                    display: block;
                    max-width: 160px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #344054;
                    font-size: 12px;
                    font-weight: 650;
                }

                .author-email {
                    display: block;
                    max-width: 170px;
                    margin-top: 2px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #98a2b3;
                    font-size: 10px;
                }

                /* =========================================================
                   DATE
                ========================================================= */

                .date-cell {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: #667085;
                    font-size: 11px;
                    white-space: nowrap;
                }

                /* =========================================================
                   ACTIONS
                ========================================================= */

                .table-actions {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 5px;
                }

                .icon-button {
                    width: 34px;
                    height: 34px;
                    border: 1px solid #e4e7ec;
                    border-radius: 8px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #ffffff;
                    color: #667085;
                    text-decoration: none;
                    cursor: pointer;
                    transition:
                        color .15s ease,
                        background .15s ease,
                        border-color .15s ease;
                }

                .icon-button:hover {
                    color: #059669;
                    background: #ecfdf5;
                    border-color: #a7f3d0;
                }

                .icon-button.danger:hover {
                    color: #dc2626;
                    background: #fef2f2;
                    border-color: #fecaca;
                }

                /* =========================================================
                   EMPTY STATE
                ========================================================= */

                .empty-state {
                    min-height: 330px;
                    padding: 50px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    text-align: center;
                }

                .empty-icon {
                    width: 64px;
                    height: 64px;
                    margin-bottom: 16px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ecfdf5;
                    color: #059669;
                }

                .empty-state h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 17px;
                    font-weight: 700;
                }

                .empty-state p {
                    max-width: 400px;
                    margin: 7px 0 18px;
                    color: #98a2b3;
                    font-size: 13px;
                    line-height: 1.5;
                }

                /* =========================================================
                   MOBILE
                ========================================================= */

                .mobile-announcement-list {
                    display: none;
                }

                /* =========================================================
                   DELETE MODAL
                ========================================================= */

                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(15, 23, 42, .45);
                    backdrop-filter: blur(3px);
                }

                .delete-modal {
                    position: relative;
                    width: min(430px, 100%);
                    padding: 28px;
                    border-radius: 18px;
                    background: #ffffff;
                    text-align: center;
                    box-shadow: 0 25px 60px rgba(15, 23, 42, .18);
                }

                .modal-close {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    width: 34px;
                    height: 34px;
                    border: 0;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f2f4f7;
                    color: #667085;
                    cursor: pointer;
                }

                .delete-icon {
                    width: 58px;
                    height: 58px;
                    margin: 2px auto 17px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #fef2f2;
                    color: #dc2626;
                    border: 1px solid #fee2e2;
                }

                .delete-modal h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 19px;
                    font-weight: 750;
                }

                .delete-modal p {
                    margin: 9px 0 22px;
                    color: #667085;
                    font-size: 13px;
                    line-height: 1.6;
                }

                .delete-modal p strong {
                    color: #344054;
                }

                .modal-actions {
                    display: flex;
                    justify-content: center;
                    gap: 9px;
                }

                /* =========================================================
                   RESPONSIVE
                ========================================================= */

                @media (max-width: 1100px) {

                    .stats-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                }

                @media (max-width: 800px) {

                    .announcements-page {
                        padding: 20px 15px;
                    }

                    .announcements-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .header-actions .btn {
                        width: 100%;
                    }

                    .toolbar {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .filter-wrapper {
                        width: 100%;
                    }

                    .announcements-table {
                        display: none;
                    }

                    .mobile-announcement-list {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                        padding: 14px;
                    }

                    .mobile-announcement-card {
                        padding: 14px;
                        border: 1px solid #e8ebef;
                        border-radius: 13px;
                        background: #ffffff;
                    }

                    .mobile-top {
                        display: flex;
                        align-items: flex-start;
                        gap: 12px;
                    }

                    .mobile-info {
                        min-width: 0;
                    }

                    .mobile-info .announcement-title {
                        max-width: none;
                        white-space: normal;
                    }

                    .mobile-info .announcement-excerpt {
                        max-width: none;
                        white-space: normal;
                    }

                    .mobile-meta {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 9px;
                        margin-top: 14px;
                        padding-top: 12px;
                        border-top: 1px solid #f0f2f5;
                    }

                    .mobile-author {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        color: #475467;
                        font-size: 11px;
                        font-weight: 650;
                    }

                    .mobile-actions {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 7px;
                        margin-top: 12px;
                    }

                    .mobile-action {
                        height: 35px;
                        border: 1px solid #e4e7ec;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 5px;
                        background: #ffffff;
                        color: #475467;
                        font-size: 11px;
                        font-weight: 650;
                        text-decoration: none;
                        cursor: pointer;
                    }

                    .mobile-action:hover {
                        color: #059669;
                        background: #ecfdf5;
                        border-color: #a7f3d0;
                    }

                    .mobile-action.danger:hover {
                        color: #dc2626;
                        background: #fef2f2;
                        border-color: #fecaca;
                    }

                }

                @media (max-width: 560px) {

                    .stats-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                    }

                    .stat-card {
                        min-height: 115px;
                        padding: 15px;
                    }

                    .stat-value {
                        font-size: 23px;
                    }

                    .stat-icon {
                        width: 36px;
                        height: 36px;
                    }

                    .announcements-header h1 {
                        font-size: 24px;
                    }

                    .card-header {
                        padding: 18px 16px;
                    }

                    .toolbar {
                        padding: 13px 16px;
                    }

                    .modal-actions {
                        flex-direction: column-reverse;
                    }

                    .modal-actions .btn {
                        width: 100%;
                    }

                }

            `})]})}export{D as default};
