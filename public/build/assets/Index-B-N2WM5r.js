import{r as j,j as e,H as F,L as d,a as E}from"./app-CJlpfYPO.js";import{A as T}from"./AppLayout-WTBEreOn.js";function i({name:c,size:s=20,strokeWidth:r=1.8,className:l=""}){const g={width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",className:l,"aria-hidden":"true"},n={book:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"})]}),wallet:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6"}),e.jsx("path",{d:"M16 15h.01"})]}),plus:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 5v14"}),e.jsx("path",{d:"M5 12h14"})]}),file:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"}),e.jsx("path",{d:"M14 2v6h6"}),e.jsx("path",{d:"M8 13h8"}),e.jsx("path",{d:"M8 17h6"})]}),checkCircle:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"m8 12 2.5 2.5L16 9"})]}),clock:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 2"})]}),xCircle:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"m9 9 6 6"}),e.jsx("path",{d:"m15 9-6 6"})]}),grid:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),e.jsx("rect",{x:"14",y:"14",width:"6",height:"6",rx:"1"})]}),search:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"11",cy:"11",r:"6.5"}),e.jsx("path",{d:"m16 16 4 4"})]}),tag:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z"}),e.jsx("circle",{cx:"7.5",cy:"7.5",r:"1"})]}),eye:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]}),edit:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"})]}),trash:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 7h16"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M6 7l1 14h10l1-14"}),e.jsx("path",{d:"M9 7V4h6v3"})]}),close:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"m6 6 12 12"}),e.jsx("path",{d:"m18 6-12 12"})]}),chevronDown:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m6 9 6 6 6-6"})}),chevronLeft:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m15 18-6-6 6-6"})}),chevronRight:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m9 18 6-6-6-6"})}),alert:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M10.3 3.3 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z"}),e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"})]}),layers:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"m12 3-9 5 9 5 9-5-9-5Z"}),e.jsx("path",{d:"m3 12 9 5 9-5"}),e.jsx("path",{d:"m3 16 9 5 9-5"})]})};return e.jsx("svg",{...g,children:n[c]||n.file})}function U({stories:c=[],stats:s={}}){const r=Array.isArray(c)?c:(c==null?void 0:c.data)??[],[l,g]=j.useState(""),[n,v]=j.useState("all"),[o,m]=j.useState(null),w=j.useMemo(()=>({total:(s==null?void 0:s.total)??r.length,approved:(s==null?void 0:s.approved)??r.filter(t=>String((t==null?void 0:t.status)||"").toLowerCase()==="approved").length,pending:(s==null?void 0:s.pending)??r.filter(t=>String((t==null?void 0:t.status)||"").toLowerCase()==="pending").length,rejected:(s==null?void 0:s.rejected)??r.filter(t=>String((t==null?void 0:t.status)||"").toLowerCase()==="rejected").length}),[s,r]),f=j.useMemo(()=>{const t=l.trim().toLowerCase();return r.filter(a=>{var M,L;const p=String((a==null?void 0:a.title)||"").toLowerCase(),b=String(((M=a==null?void 0:a.talent)==null?void 0:M.name)||(a==null?void 0:a.talent_name)||"").toLowerCase(),x=String(((L=a==null?void 0:a.category)==null?void 0:L.name)||(a==null?void 0:a.category_name)||"").toLowerCase(),h=String((a==null?void 0:a.status)||"").toLowerCase();return(!t||p.includes(t)||b.includes(t)||x.includes(t))&&(n==="all"||h===n)})},[r,l,n]),N=t=>{const a=String(t||"pending").toLowerCase();return a==="approved"?"approved":a==="published"?"published":a==="rejected"?"rejected":"pending"},k=t=>{const a=String(t||"pending").toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)},z=t=>t?String(t).trim().charAt(0).toUpperCase():"?",S=t=>{if(!t)return"No story description available.";const a=String(t).replace(/<[^>]*>/g,"").replace(/\s+/g," ").trim();return a.length<=100?a:a.substring(0,100)+"…"},C=t=>{if(!t)return"/images/placeholder-story.png";const a=String(t);return/^https?:\/\//i.test(a)||a.charAt(0)==="/"?a:"/"+a},y=()=>{o!=null&&o.id&&E.delete(route("admin.stories.destroy",o.id),{preserveScroll:!0,onSuccess:()=>{m(null)}})};return e.jsxs(T,{children:[e.jsx(F,{title:"Stories"}),e.jsxs("div",{className:"stories-page",children:[e.jsxs("header",{className:"stories-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsx("div",{className:"header-icon",children:e.jsx(i,{name:"book",size:24})}),e.jsxs("div",{children:[e.jsxs("div",{className:"breadcrumb",children:["Admin",e.jsx("span",{children:"/"}),"Stories"]}),e.jsx("h1",{children:"Stories"}),e.jsx("p",{children:"Manage and moderate talent stories"})]})]}),e.jsx("div",{className:"header-actions",children:e.jsxs(d,{href:route("admin.stories.create"),className:"btn btn-primary",children:[e.jsx(i,{name:"plus",size:18}),e.jsx("span",{children:"Create Story"})]})})]}),e.jsxs("section",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-label",children:"Total Stories"}),e.jsx("strong",{className:"stat-value",children:w.total}),e.jsx("span",{className:"stat-description",children:"All submitted stories"})]}),e.jsx("div",{className:"stat-icon blue",children:e.jsx(i,{name:"file",size:22})})]}),e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-label",children:"Approved"}),e.jsx("strong",{className:"stat-value",children:w.approved}),e.jsx("span",{className:"stat-description",children:"Approved stories"})]}),e.jsx("div",{className:"stat-icon green",children:e.jsx(i,{name:"checkCircle",size:22})})]}),e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-label",children:"Pending"}),e.jsx("strong",{className:"stat-value",children:w.pending}),e.jsx("span",{className:"stat-description",children:"Awaiting moderation"})]}),e.jsx("div",{className:"stat-icon orange",children:e.jsx(i,{name:"clock",size:22})})]}),e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-label",children:"Rejected"}),e.jsx("strong",{className:"stat-value",children:w.rejected}),e.jsx("span",{className:"stat-description",children:"Rejected stories"})]}),e.jsx("div",{className:"stat-icon red",children:e.jsx(i,{name:"xCircle",size:22})})]})]}),e.jsxs("section",{className:"stories-card",children:[e.jsxs("div",{className:"stories-card-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"section-eyebrow",children:[e.jsx(i,{name:"layers",size:15}),"STORY LIBRARY"]}),e.jsx("h2",{children:"All Stories"}),e.jsx("p",{children:"Browse, review and manage submitted stories."})]}),e.jsxs("div",{className:"stories-count",children:[f.length,e.jsx("span",{children:"stories"})]})]}),e.jsxs("div",{className:"stories-toolbar",children:[e.jsxs("div",{className:"search-box",children:[e.jsx(i,{name:"search",size:19}),e.jsx("input",{type:"text",value:l,onChange:t=>g(t.target.value),placeholder:"Search stories, talents or categories..."}),l&&e.jsx("button",{type:"button",className:"clear-search",onClick:()=>g(""),"aria-label":"Clear search",children:e.jsx(i,{name:"close",size:15})})]}),e.jsxs("div",{className:"filter-wrapper",children:[e.jsx(i,{name:"grid",size:17}),e.jsxs("select",{value:n,onChange:t=>v(t.target.value),"aria-label":"Filter by status",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"approved",children:"Approved"}),e.jsx("option",{value:"published",children:"Published"}),e.jsx("option",{value:"rejected",children:"Rejected"})]}),e.jsx(i,{name:"chevronDown",size:16})]})]}),e.jsx("div",{className:"table-wrapper",children:f.length>0?e.jsxs("table",{className:"stories-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Story"}),e.jsx("th",{children:"Talent"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"actions-column",children:"Actions"})]})}),e.jsx("tbody",{children:f.map(t=>{var x,h,u;const a=N(t==null?void 0:t.status),p=((x=t==null?void 0:t.talent)==null?void 0:x.name)||(t==null?void 0:t.talent_name)||"Unknown talent",b=((h=t==null?void 0:t.category)==null?void 0:h.name)||(t==null?void 0:t.category_name)||"Uncategorized";return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"story-cell",children:[e.jsx("div",{className:"story-thumbnail",children:e.jsx("img",{src:C(t==null?void 0:t.thumbnail),alt:(t==null?void 0:t.title)||"Story",onError:A=>{A.currentTarget.src="/images/placeholder-story.png"}})}),e.jsxs("div",{className:"story-information",children:[e.jsx(d,{href:route("admin.stories.show",t.id),className:"story-title",children:(t==null?void 0:t.title)||"Untitled Story"}),e.jsx("p",{children:S(t==null?void 0:t.content)})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"talent-cell",children:[e.jsx("div",{className:"talent-avatar",children:z(p)}),e.jsxs("div",{children:[e.jsx("span",{className:"talent-name",children:p}),((u=t==null?void 0:t.talent)==null?void 0:u.email)&&e.jsx("span",{className:"talent-email",children:t.talent.email})]})]})}),e.jsx("td",{children:e.jsxs("span",{className:"category-badge",children:[e.jsx(i,{name:"tag",size:14}),b]})}),e.jsx("td",{children:e.jsxs("span",{className:"status-badge "+a,children:[e.jsx("span",{className:"status-dot"}),k(t==null?void 0:t.status)]})}),e.jsx("td",{children:e.jsxs("div",{className:"table-actions",children:[e.jsx(d,{href:route("admin.stories.show",t.id),className:"icon-button",title:"View story",children:e.jsx(i,{name:"eye",size:17})}),e.jsx(d,{href:route("admin.stories.edit",t.id),className:"icon-button",title:"Edit story",children:e.jsx(i,{name:"edit",size:17})}),e.jsx("button",{type:"button",className:"icon-button danger",title:"Delete story",onClick:()=>m(t),children:e.jsx(i,{name:"trash",size:17})})]})})]},t.id)})})]}):e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(i,{name:"file",size:30})}),e.jsx("h3",{children:l||n!=="all"?"No stories found":"No stories yet"}),e.jsx("p",{children:l||n!=="all"?"Try changing your search or filter.":"Create your first story to get started."}),l||n!=="all"?e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{g(""),v("all")},children:"Clear Filters"}):e.jsxs(d,{href:route("admin.stories.create"),className:"btn btn-primary",children:[e.jsx(i,{name:"plus",size:17}),"Create Story"]})]})}),f.length>0&&e.jsx("div",{className:"mobile-story-list",children:f.map(t=>{var x,h;const a=N(t==null?void 0:t.status),p=((x=t==null?void 0:t.talent)==null?void 0:x.name)||(t==null?void 0:t.talent_name)||"Unknown talent",b=((h=t==null?void 0:t.category)==null?void 0:h.name)||(t==null?void 0:t.category_name)||"Uncategorized";return e.jsxs("article",{className:"mobile-story-card",children:[e.jsxs("div",{className:"mobile-story-top",children:[e.jsx("div",{className:"mobile-story-image",children:e.jsx("img",{src:C(t==null?void 0:t.thumbnail),alt:(t==null?void 0:t.title)||"Story",onError:u=>{u.currentTarget.src="/images/placeholder-story.png"}})}),e.jsxs("div",{className:"mobile-story-info",children:[e.jsx(d,{href:route("admin.stories.show",t.id),className:"story-title",children:(t==null?void 0:t.title)||"Untitled Story"}),e.jsx("p",{children:S(t==null?void 0:t.content)})]})]}),e.jsxs("div",{className:"mobile-story-meta",children:[e.jsxs("div",{className:"mobile-meta-item",children:[e.jsx("div",{className:"talent-avatar small",children:z(p)}),e.jsx("span",{children:p})]}),e.jsxs("span",{className:"category-badge",children:[e.jsx(i,{name:"tag",size:13}),b]}),e.jsxs("span",{className:"status-badge "+a,children:[e.jsx("span",{className:"status-dot"}),k(t==null?void 0:t.status)]})]}),e.jsxs("div",{className:"mobile-story-actions",children:[e.jsxs(d,{href:route("admin.stories.show",t.id),className:"mobile-action",children:[e.jsx(i,{name:"eye",size:16}),"View"]}),e.jsxs(d,{href:route("admin.stories.edit",t.id),className:"mobile-action",children:[e.jsx(i,{name:"edit",size:16}),"Edit"]}),e.jsxs("button",{type:"button",className:"mobile-action danger",onClick:()=>m(t),children:[e.jsx(i,{name:"trash",size:16}),"Delete"]})]})]},t.id)})})]})]}),o&&e.jsx("div",{className:"modal-backdrop",onMouseDown:t=>{t.target===t.currentTarget&&m(null)},children:e.jsxs("div",{className:"delete-modal",children:[e.jsx("button",{type:"button",className:"modal-close",onClick:()=>m(null),"aria-label":"Close",children:e.jsx(i,{name:"close",size:19})}),e.jsx("div",{className:"delete-modal-icon",children:e.jsx(i,{name:"trash",size:25})}),e.jsx("h3",{children:"Delete story?"}),e.jsxs("p",{children:["You are about to permanently delete",e.jsxs("strong",{children:[' "',(o==null?void 0:o.title)||"this story",'"']}),". This action cannot be undone."]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>m(null),children:"Cancel"}),e.jsxs("button",{type:"button",className:"btn btn-danger",onClick:y,children:[e.jsx(i,{name:"trash",size:17}),"Delete Story"]})]})]})}),e.jsx("style",{children:`

                * {
                    box-sizing: border-box;
                }

                .stories-page {
                    min-height: 100vh;
                    background: #f7f9fc;
                    color: #172033;
                    padding: 28px;
                }

                /* ---------------------------------------------------------
                   HEADER
                --------------------------------------------------------- */

                .stories-header {
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
                    font-size: 12px;
                    font-weight: 600;
                    color: #98a2b3;
                    margin-bottom: 5px;
                }

                .breadcrumb span {
                    color: #cbd5e1;
                }

                .stories-header h1 {
                    margin: 0;
                    font-size: 28px;
                    line-height: 1.2;
                    font-weight: 750;
                    letter-spacing: -0.6px;
                    color: #101828;
                }

                .stories-header p {
                    margin: 5px 0 0;
                    font-size: 14px;
                    color: #667085;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                /* ---------------------------------------------------------
                   BUTTONS
                --------------------------------------------------------- */

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
                        transform 0.15s ease,
                        box-shadow 0.15s ease,
                        background 0.15s ease,
                        border-color 0.15s ease;
                    white-space: nowrap;
                }

                .btn:hover {
                    transform: translateY(-1px);
                }

                .btn-primary {
                    background: #059669;
                    color: #ffffff;
                    border-color: #059669;
                    box-shadow: 0 2px 5px rgba(5, 150, 105, 0.18);
                }

                .btn-primary:hover {
                    background: #047857;
                    border-color: #047857;
                }

                .btn-secondary {
                    background: #ffffff;
                    color: #344054;
                    border-color: #d0d5dd;
                }

                .btn-secondary:hover {
                    background: #f9fafb;
                    border-color: #98a2b3;
                }

                .btn-danger {
                    background: #dc2626;
                    color: white;
                    border-color: #dc2626;
                }

                .btn-danger:hover {
                    background: #b91c1c;
                }

                /* ---------------------------------------------------------
                   STATS
                --------------------------------------------------------- */

                .stats-grid {
                    max-width: 1440px;
                    margin: 0 auto 24px;
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 16px;
                }

                .stat-card {
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 15px;
                    padding: 20px;
                    min-height: 130px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 14px;
                    box-shadow: 0 2px 5px rgba(16, 24, 40, 0.025);
                }

                .stat-content {
                    min-width: 0;
                }

                .stat-label {
                    display: block;
                    color: #667085;
                    font-size: 12px;
                    font-weight: 650;
                    margin-bottom: 8px;
                }

                .stat-value {
                    display: block;
                    color: #101828;
                    font-size: 28px;
                    line-height: 1;
                    letter-spacing: -0.5px;
                }

                .stat-description {
                    display: block;
                    color: #98a2b3;
                    font-size: 11px;
                    margin-top: 9px;
                }

                .stat-icon {
                    width: 43px;
                    height: 43px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .stat-icon.blue {
                    color: #2563eb;
                    background: #eff6ff;
                }

                .stat-icon.green {
                    color: #059669;
                    background: #ecfdf5;
                }

                .stat-icon.orange {
                    color: #d97706;
                    background: #fffbeb;
                }

                .stat-icon.red {
                    color: #dc2626;
                    background: #fef2f2;
                }

                /* ---------------------------------------------------------
                   MAIN CARD
                --------------------------------------------------------- */

                .stories-card {
                    max-width: 1440px;
                    margin: 0 auto;
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 16px;
                    box-shadow: 0 3px 10px rgba(16, 24, 40, 0.035);
                    overflow: hidden;
                }

                .stories-card-header {
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
                    color: #059669;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    margin-bottom: 7px;
                }

                .stories-card-header h2 {
                    margin: 0;
                    font-size: 19px;
                    font-weight: 750;
                    color: #101828;
                }

                .stories-card-header p {
                    margin: 5px 0 0;
                    font-size: 13px;
                    color: #667085;
                }

                .stories-count {
                    color: #101828;
                    font-size: 16px;
                    font-weight: 750;
                    white-space: nowrap;
                }

                .stories-count span {
                    color: #98a2b3;
                    font-size: 12px;
                    font-weight: 500;
                    margin-left: 4px;
                }

                /* ---------------------------------------------------------
                   TOOLBAR
                --------------------------------------------------------- */

                .stories-toolbar {
                    padding: 16px 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    border-bottom: 1px solid #eef1f5;
                    background: #fcfdfe;
                }

                .search-box {
                    width: min(480px, 100%);
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
                    border: 1px solid #dfe3e8;
                    background: #ffffff;
                    border-radius: 9px;
                    padding: 0 40px;
                    color: #101828;
                    font-size: 13px;
                    outline: none;
                    transition:
                        border-color 0.15s ease,
                        box-shadow 0.15s ease;
                }

                .search-box input::placeholder {
                    color: #a0a8b5;
                }

                .search-box input:focus {
                    border-color: #10b981;
                    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
                }

                .clear-search {
                    position: absolute;
                    right: 10px;
                    width: 25px;
                    height: 25px;
                    border: 0;
                    border-radius: 6px;
                    background: #f2f4f7;
                    color: #667085;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                .clear-search:hover {
                    background: #e4e7ec;
                }

                .filter-wrapper {
                    height: 42px;
                    min-width: 175px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 0 12px;
                    border: 1px solid #dfe3e8;
                    border-radius: 9px;
                    background: #ffffff;
                    color: #667085;
                }

                .filter-wrapper select {
                    appearance: none;
                    -webkit-appearance: none;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    width: 100%;
                    color: #344054;
                    font-size: 13px;
                    cursor: pointer;
                }

                .filter-wrapper > svg:last-child {
                    pointer-events: none;
                    flex-shrink: 0;
                }

                /* ---------------------------------------------------------
                   TABLE
                --------------------------------------------------------- */

                .table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                }

                .stories-table {
                    width: 100%;
                    min-width: 950px;
                    border-collapse: collapse;
                }

                .stories-table thead {
                    background: #fafbfc;
                }

                .stories-table th {
                    padding: 12px 20px;
                    text-align: left;
                    color: #667085;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.7px;
                    text-transform: uppercase;
                    border-bottom: 1px solid #eef1f5;
                    white-space: nowrap;
                }

                .stories-table td {
                    padding: 15px 20px;
                    border-bottom: 1px solid #f0f2f5;
                    vertical-align: middle;
                }

                .stories-table tbody tr {
                    transition: background 0.15s ease;
                }

                .stories-table tbody tr:hover {
                    background: #fcfdfd;
                }

                .stories-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .actions-column {
                    width: 130px;
                    text-align: right !important;
                }

                /* ---------------------------------------------------------
                   STORY CELL
                --------------------------------------------------------- */

                .story-cell {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    min-width: 330px;
                }

                .story-thumbnail {
                    width: 58px;
                    height: 58px;
                    flex-shrink: 0;
                    overflow: hidden;
                    border-radius: 10px;
                    background: #f2f4f7;
                    border: 1px solid #eaecf0;
                }

                .story-thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .story-information {
                    min-width: 0;
                }

                .story-title {
                    display: block;
                    max-width: 320px;
                    color: #101828;
                    font-size: 13px;
                    font-weight: 700;
                    line-height: 1.35;
                    text-decoration: none;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .story-title:hover {
                    color: #059669;
                }

                .story-information p {
                    max-width: 340px;
                    margin: 5px 0 0;
                    color: #98a2b3;
                    font-size: 11px;
                    line-height: 1.45;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* ---------------------------------------------------------
                   TALENT
                --------------------------------------------------------- */

                .talent-cell {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                }

                .talent-avatar {
                    width: 34px;
                    height: 34px;
                    flex-shrink: 0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ecfdf5;
                    color: #047857;
                    border: 1px solid #d1fae5;
                    font-size: 12px;
                    font-weight: 800;
                }

                .talent-avatar.small {
                    width: 28px;
                    height: 28px;
                    font-size: 10px;
                }

                .talent-name {
                    display: block;
                    max-width: 150px;
                    color: #344054;
                    font-size: 12px;
                    font-weight: 650;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .talent-email {
                    display: block;
                    max-width: 170px;
                    color: #98a2b3;
                    font-size: 10px;
                    margin-top: 2px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* ---------------------------------------------------------
                   BADGES
                --------------------------------------------------------- */

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

                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 5px 9px;
                    border-radius: 999px;
                    font-size: 10px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .status-badge.approved,
                .status-badge.published {
                    color: #047857;
                    background: #ecfdf5;
                }

                .status-badge.approved .status-dot,
                .status-badge.published .status-dot {
                    background: #10b981;
                }

                .status-badge.pending {
                    color: #b45309;
                    background: #fffbeb;
                }

                .status-badge.pending .status-dot {
                    background: #f59e0b;
                }

                .status-badge.rejected {
                    color: #b91c1c;
                    background: #fef2f2;
                }

                .status-badge.rejected .status-dot {
                    background: #ef4444;
                }

                /* ---------------------------------------------------------
                   ACTIONS
                --------------------------------------------------------- */

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
                        color 0.15s ease,
                        background 0.15s ease,
                        border-color 0.15s ease;
                }

                .icon-button:hover {
                    color: #059669;
                    border-color: #a7f3d0;
                    background: #ecfdf5;
                }

                .icon-button.danger:hover {
                    color: #dc2626;
                    border-color: #fecaca;
                    background: #fef2f2;
                }

                /* ---------------------------------------------------------
                   EMPTY
                --------------------------------------------------------- */

                .empty-state {
                    min-height: 330px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    text-align: center;
                    padding: 50px 20px;
                }

                .empty-icon {
                    width: 64px;
                    height: 64px;
                    margin-bottom: 16px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f2f4f7;
                    color: #98a2b3;
                }

                .empty-state h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 17px;
                    font-weight: 700;
                }

                .empty-state p {
                    max-width: 390px;
                    margin: 7px 0 18px;
                    color: #98a2b3;
                    font-size: 13px;
                    line-height: 1.5;
                }

                /* ---------------------------------------------------------
                   MOBILE
                --------------------------------------------------------- */

                .mobile-story-list {
                    display: none;
                }

                /* ---------------------------------------------------------
                   DELETE MODAL
                --------------------------------------------------------- */

                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(15, 23, 42, 0.45);
                    backdrop-filter: blur(3px);
                }

                .delete-modal {
                    position: relative;
                    width: min(430px, 100%);
                    background: #ffffff;
                    border-radius: 18px;
                    padding: 28px;
                    text-align: center;
                    box-shadow: 0 25px 60px rgba(15, 23, 42, 0.18);
                }

                .modal-close {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    width: 34px;
                    height: 34px;
                    border: 0;
                    border-radius: 8px;
                    background: #f2f4f7;
                    color: #667085;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                .modal-close:hover {
                    background: #e4e7ec;
                }

                .delete-modal-icon {
                    width: 58px;
                    height: 58px;
                    margin: 2px auto 17px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #dc2626;
                    background: #fef2f2;
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

                /* ---------------------------------------------------------
                   RESPONSIVE
                --------------------------------------------------------- */

                @media (max-width: 1100px) {

                    .stats-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                }

                @media (max-width: 800px) {

                    .stories-page {
                        padding: 20px 15px;
                    }

                    .stories-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .header-actions .btn {
                        flex: 1;
                    }

                    .stories-toolbar {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .filter-wrapper {
                        width: 100%;
                    }

                    .stories-table {
                        display: none;
                    }

                    .mobile-story-list {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                        padding: 14px;
                    }

                    .mobile-story-card {
                        padding: 14px;
                        border: 1px solid #e8ebef;
                        border-radius: 13px;
                        background: #ffffff;
                    }

                    .mobile-story-top {
                        display: flex;
                        gap: 12px;
                    }

                    .mobile-story-image {
                        width: 70px;
                        height: 70px;
                        flex-shrink: 0;
                        overflow: hidden;
                        border-radius: 10px;
                        background: #f2f4f7;
                    }

                    .mobile-story-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .mobile-story-info {
                        min-width: 0;
                    }

                    .mobile-story-info .story-title {
                        max-width: none;
                        white-space: normal;
                    }

                    .mobile-story-info p {
                        margin: 5px 0 0;
                        color: #98a2b3;
                        font-size: 11px;
                        line-height: 1.45;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .mobile-story-meta {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin-top: 14px;
                        padding-top: 12px;
                        border-top: 1px solid #f0f2f5;
                    }

                    .mobile-meta-item {
                        display: flex;
                        align-items: center;
                        gap: 7px;
                        color: #475467;
                        font-size: 11px;
                        font-weight: 650;
                    }

                    .mobile-story-actions {
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

                    .stories-header h1 {
                        font-size: 24px;
                    }

                    .stories-card-header {
                        padding: 18px 16px;
                    }

                    .stories-toolbar {
                        padding: 13px 16px;
                    }

                    .header-actions {
                        flex-direction: column;
                    }

                    .header-actions .btn {
                        width: 100%;
                    }

                    .modal-actions {
                        flex-direction: column-reverse;
                    }

                    .modal-actions .btn {
                        width: 100%;
                    }

                }

            `})]})}export{U as default};
