import{r as m,j as e,H as g,L as c,a as x}from"./app-B2SIh33N.js";import{A as u}from"./AppLayout-CkTPU_ZW.js";function b(t){return t?t.split(" ").filter(Boolean).slice(0,2).map(i=>{var r;return(r=i[0])==null?void 0:r.toUpperCase()}).join(""):"—"}function j(t){if((t==null?void 0:t.budget_amount)==null)return"—";const i=t.budget_currency??"",r=Number(t.budget_amount).toLocaleString();return i?`${i} ${r}`:r}function v(t,i=65){return t?t.length>i?`${t.slice(0,i)}…`:t:"No description provided"}function y({status:t}){const i=(t??"").toLowerCase(),s={open:{label:"Open",className:"pm-status-open",dot:"pm-dot-success"},in_progress:{label:"In Progress",className:"pm-status-progress",dot:"pm-dot-info"},completed:{label:"Completed",className:"pm-status-completed",dot:"pm-dot-success"},cancelled:{label:"Cancelled",className:"pm-status-danger",dot:"pm-dot-danger"},closed:{label:"Closed",className:"pm-status-danger",dot:"pm-dot-danger"}}[i]??{label:t?t.charAt(0).toUpperCase()+t.slice(1):"Unknown",className:"pm-status-neutral",dot:"pm-dot-neutral"};return e.jsxs("span",{className:`pm-status ${s.className}`,children:[e.jsx("span",{className:`pm-status-dot ${s.dot}`}),s.label]})}function w({verified:t}){return t?e.jsxs("span",{className:"pm-verification verified",children:[e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M20 6 9 17l-5-5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"Verified"]}):e.jsxs("span",{className:"pm-verification pending",children:[e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"8",fill:"none",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M12 8v4l2.5 2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),"Pending"]})}function n({name:t,size:i=17}){const r={width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},s={plus:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 5v14"}),e.jsx("path",{d:"M5 12h14"})]}),folder:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3.5 7.5A2.5 2.5 0 0 1 6 5h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z"})}),check:e.jsx("path",{d:"m5 12 4 4L19 6"}),clock:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),e.jsx("path",{d:"M12 7v5l3 2"})]}),users:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"}),e.jsx("circle",{cx:"9.5",cy:"7.5",r:"3"}),e.jsx("path",{d:"M17 11a3 3 0 1 0 0-6"}),e.jsx("path",{d:"M21 20v-1.5a4 4 0 0 0-3-3.87"})]}),eye:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]}),edit:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z"})]}),trash:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 7h16"}),e.jsx("path",{d:"M10 11v5M14 11v5"}),e.jsx("path",{d:"M6 7l1 13h10l1-13"}),e.jsx("path",{d:"M9 7V4h6v3"})]}),verify:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"}),e.jsx("path",{d:"m9 12 2 2 4-4"})]}),calendar:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3.5",y:"5",width:"17",height:"15",rx:"2"}),e.jsx("path",{d:"M7 3v4M17 3v4M3.5 9h17"})]}),location:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),e.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),chevronRight:e.jsx("path",{d:"m9 18 6-6-6-6"}),search:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"11",cy:"11",r:"6.5"}),e.jsx("path",{d:"m16 16 4.5 4.5"})]})};return e.jsx("svg",{...r,children:s[t]})}function z({projects:t}){const i=m.useRef(null),r=Array.isArray(t)?t:(t==null?void 0:t.data)??[];m.useEffect(()=>{let a;return window.$&&window.$.fn&&window.$.fn.DataTable&&i.current&&(a=window.$(i.current).DataTable({destroy:!0,autoWidth:!1,responsive:!1,pageLength:10,searching:!1,lengthChange:!1,info:!1})),()=>{a==null||a.destroy()}},[r]);const s=m.useMemo(()=>{const a=(t==null?void 0:t.total)??r.length,l=r.filter(o=>!!o.verified).length,p=r.filter(o=>!o.verified).length,d=r.filter(o=>["open","in_progress"].includes((o.status??"").toLowerCase())).length;return{total:a,verified:l,pending:p,active:d}},[t,r]);function h(a){x.post(route("admin.projects.verify",a.id),{},{preserveScroll:!0})}function f(a){confirm(`Delete "${a.title}"?`)&&x.delete(route("admin.projects.destroy",a.id),{preserveScroll:!0})}return e.jsxs(u,{children:[e.jsx(g,{title:"Manage Projects"}),e.jsx("style",{children:`
                .talent-projects-page,
                .talent-projects-page * {
                    box-sizing: border-box;
                }

                .talent-projects-page {
                    --pm-bg: #f7f8fa;
                    --pm-card: #ffffff;
                    --pm-text: #1d1d1f;
                    --pm-secondary: #6e6e73;
                    --pm-muted: #8e8e93;
                    --pm-border: #e5e5ea;
                    --pm-primary: #1677ff;
                    --pm-primary-dark: #0d63d8;
                    --pm-green: #16845b;
                    --pm-red: #d9485f;
                    --pm-orange: #b7791f;
                    --pm-blue: #3178c6;

                    min-height: 100%;
                    padding: 28px;
                    background: var(--pm-bg);
                    color: var(--pm-text);

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    -webkit-font-smoothing: antialiased;
                }

                .pm-container {
                    width: 100%;
                    max-width: 1500px;
                    margin: 0 auto;
                }

                /* Header */

                .pm-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 24px;
                    margin-bottom: 24px;
                }

                .pm-heading {
                    min-width: 0;
                }

                .pm-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    color: var(--pm-primary);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                    margin-bottom: 7px;
                }

                .pm-eyebrow-line {
                    width: 20px;
                    height: 1px;
                    background: currentColor;
                }

                .pm-title {
                    margin: 0;
                    font-size: 25px;
                    line-height: 1.2;
                    letter-spacing: -.035em;
                    font-weight: 700;
                }

                .pm-subtitle {
                    margin: 7px 0 0;
                    color: var(--pm-secondary);
                    font-size: 13px;
                    line-height: 1.5;
                }

                .pm-add-button {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    height: 40px;
                    padding: 0 17px;
                    border: 0;
                    border-radius: 9px;
                    background: var(--pm-primary);
                    color: #fff;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 600;
                    box-shadow: 0 3px 10px rgba(22,119,255,.18);
                    transition:
                        background .18s ease,
                        transform .18s ease,
                        box-shadow .18s ease;
                }

                .pm-add-button:hover {
                    background: var(--pm-primary-dark);
                    color: #fff;
                    transform: translateY(-1px);
                    box-shadow: 0 5px 15px rgba(22,119,255,.22);
                }

                /* Stats */

                .pm-stat-grid {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 13px;
                    margin-bottom: 20px;
                }

                .pm-stat {
                    min-width: 0;
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    padding: 16px;
                    background: var(--pm-card);
                    border: 1px solid var(--pm-border);
                    border-radius: 12px;
                }

                .pm-stat-icon {
                    width: 39px;
                    height: 39px;
                    flex: 0 0 39px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    background: #eef5ff;
                    color: var(--pm-primary);
                }

                .pm-stat:nth-child(2) .pm-stat-icon {
                    background: #eef9f4;
                    color: var(--pm-green);
                }

                .pm-stat:nth-child(3) .pm-stat-icon {
                    background: #fff7e8;
                    color: var(--pm-orange);
                }

                .pm-stat:nth-child(4) .pm-stat-icon {
                    background: #f0f5ff;
                    color: var(--pm-blue);
                }

                .pm-stat-label {
                    margin: 0 0 2px;
                    color: var(--pm-muted);
                    font-size: 11px;
                    font-weight: 500;
                }

                .pm-stat-value {
                    margin: 0;
                    color: var(--pm-text);
                    font-size: 20px;
                    line-height: 1.15;
                    letter-spacing: -.025em;
                    font-weight: 700;
                }

                /* Table card */

                .pm-table-card {
                    background: var(--pm-card);
                    border: 1px solid var(--pm-border);
                    border-radius: 14px;
                    overflow: hidden;
                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025),
                        0 5px 18px rgba(0,0,0,.025);
                }

                .pm-table-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 15px 18px;
                    border-bottom: 1px solid var(--pm-border);
                }

                .pm-toolbar-title {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin: 0;
                    font-size: 13px;
                    font-weight: 600;
                }

                .pm-toolbar-count {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 24px;
                    height: 21px;
                    padding: 0 7px;
                    border-radius: 20px;
                    background: #f2f2f7;
                    color: var(--pm-secondary);
                    font-size: 11px;
                    font-weight: 600;
                }

                .pm-table-scroll {
                    width: 100%;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                }

                .talent-projects-page table.pm-table {
                    width: 100% !important;
                    min-width: 900px;
                    margin: 0 !important;
                    border-collapse: collapse;
                    border-spacing: 0;
                }

                .talent-projects-page table.pm-table thead th {
                    height: 42px;
                    padding: 0 18px;
                    background: #fafafa !important;
                    border-bottom: 1px solid var(--pm-border);
                    color: #86868b;
                    text-align: left;
                    white-space: nowrap;
                    font-size: 10px;
                    line-height: 1;
                    font-weight: 600;
                    letter-spacing: .055em;
                    text-transform: uppercase;
                }

                .talent-projects-page table.pm-table tbody td {
                    padding: 15px 18px;
                    background: #fff !important;
                    border-bottom: 1px solid #f0f0f2;
                    color: var(--pm-secondary);
                    font-size: 12.5px;
                    vertical-align: middle;
                }

                .talent-projects-page table.pm-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .talent-projects-page table.pm-table tbody tr:hover td {
                    background: #fbfcfe !important;
                }

                /* Project */

                .pm-project {
                    min-width: 210px;
                    max-width: 320px;
                }

                .pm-project-title {
                    margin: 0 0 4px;
                    color: var(--pm-text);
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 1.35;
                }

                .pm-project-description {
                    max-width: 300px;
                    margin: 0;
                    overflow: hidden;
                    color: var(--pm-muted);
                    font-size: 11.5px;
                    line-height: 1.45;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                /* Person */

                .pm-person {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    min-width: 170px;
                }

                .pm-avatar {
                    width: 34px;
                    height: 34px;
                    flex: 0 0 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #eef5ff;
                    color: var(--pm-primary);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: -.01em;
                }

                .pm-person-name {
                    margin: 0 0 2px;
                    color: var(--pm-text);
                    font-size: 12px;
                    font-weight: 600;
                }

                .pm-person-email {
                    max-width: 150px;
                    margin: 0;
                    overflow: hidden;
                    color: var(--pm-muted);
                    font-size: 10.5px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* Meta */

                .pm-meta-title {
                    margin: 0 0 3px;
                    color: var(--pm-text);
                    font-size: 12px;
                    font-weight: 600;
                }

                .pm-meta-sub {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin: 0;
                    color: var(--pm-muted);
                    font-size: 10.5px;
                }

                .pm-budget {
                    color: var(--pm-text);
                    font-size: 12px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                /* Status */

                .pm-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    min-height: 25px;
                    padding: 0 9px;
                    border-radius: 20px;
                    font-size: 10.5px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .pm-status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: currentColor;
                }

                .pm-dot-success { color: #16845b; }
                .pm-dot-info { color: #3178c6; }
                .pm-dot-danger { color: #d9485f; }
                .pm-dot-neutral { color: #8e8e93; }

                .pm-status-open,
                .pm-status-completed {
                    background: #edf8f3;
                    color: #16845b;
                }

                .pm-status-progress {
                    background: #eef5ff;
                    color: #3178c6;
                }

                .pm-status-danger {
                    background: #fff0f2;
                    color: #d9485f;
                }

                .pm-status-neutral {
                    background: #f2f2f7;
                    color: #6e6e73;
                }

                /* Verification */

                .pm-verification {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 11px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .pm-verification svg {
                    width: 14px;
                    height: 14px;
                }

                .pm-verification.verified {
                    color: var(--pm-green);
                }

                .pm-verification.pending {
                    color: var(--pm-orange);
                }

                /* Inline actions */

                .pm-actions {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    white-space: nowrap;
                }

                .pm-action {
                    width: 31px;
                    height: 31px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    border: 1px solid transparent;
                    border-radius: 8px;
                    background: transparent;
                    color: #6e6e73;
                    cursor: pointer;
                    text-decoration: none;
                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        color .15s ease;
                }

                .pm-action:hover {
                    background: #f2f5f9;
                    border-color: #e2e7ee;
                    color: var(--pm-primary);
                }

                .pm-action.verify:hover {
                    background: #edf8f3;
                    border-color: #d7eee3;
                    color: var(--pm-green);
                }

                .pm-action.delete:hover {
                    background: #fff0f2;
                    border-color: #f7d9de;
                    color: var(--pm-red);
                }

                .pm-action[title] {
                    position: relative;
                }

                /* Empty state */

                .pm-empty {
                    padding: 65px 25px;
                    text-align: center;
                }

                .pm-empty-icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 13px;
                    border-radius: 13px;
                    background: #eef5ff;
                    color: var(--pm-primary);
                }

                .pm-empty-title {
                    margin: 0 0 5px;
                    font-size: 14px;
                    font-weight: 600;
                }

                .pm-empty-text {
                    margin: 0;
                    color: var(--pm-muted);
                    font-size: 12px;
                }

                /* Pagination */

                .pm-pagination {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 5px;
                    padding: 14px 18px;
                    border-top: 1px solid var(--pm-border);
                    flex-wrap: wrap;
                }

                .pm-page-link {
                    min-width: 32px;
                    height: 32px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 9px;
                    border: 1px solid var(--pm-border);
                    border-radius: 7px;
                    background: #fff;
                    color: var(--pm-secondary);
                    font-size: 11px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all .15s ease;
                }

                .pm-page-link:hover {
                    border-color: #c9d9ef;
                    background: #f7faff;
                    color: var(--pm-primary);
                }

                .pm-page-link.active {
                    border-color: var(--pm-primary);
                    background: var(--pm-primary);
                    color: #fff;
                }

                .pm-page-link.disabled {
                    opacity: .35;
                    pointer-events: none;
                }

                /* Tablet */

                @media (max-width: 1100px) {
                    .pm-stat-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .pm-header {
                        align-items: flex-start;
                    }
                }

                /* Mobile */

                @media (max-width: 700px) {
                    .talent-projects-page {
                        padding: 20px 14px;
                    }

                    .pm-header {
                        display: block;
                        margin-bottom: 20px;
                    }

                    .pm-add-button {
                        width: 100%;
                        margin-top: 15px;
                    }

                    .pm-title {
                        font-size: 22px;
                    }

                    .pm-subtitle {
                        font-size: 12px;
                    }

                    .pm-stat-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 9px;
                    }

                    .pm-stat {
                        padding: 13px;
                        gap: 9px;
                    }

                    .pm-stat-icon {
                        width: 34px;
                        height: 34px;
                        flex-basis: 34px;
                    }

                    .pm-stat-label {
                        font-size: 9px;
                    }

                    .pm-stat-value {
                        font-size: 17px;
                    }

                    .pm-table-toolbar {
                        padding: 13px 14px;
                    }

                    .pm-pagination {
                        justify-content: center;
                    }
                }

                @media (max-width: 430px) {
                    .pm-stat-grid {
                        grid-template-columns: 1fr;
                    }

                    .pm-stat {
                        min-height: 62px;
                    }

                    .pm-table-card {
                        border-radius: 11px;
                    }
                }
            `}),e.jsx("div",{className:"talent-projects-page",children:e.jsxs("div",{className:"pm-container",children:[e.jsxs("div",{className:"pm-header",children:[e.jsxs("div",{className:"pm-heading",children:[e.jsxs("div",{className:"pm-eyebrow",children:[e.jsx("span",{className:"pm-eyebrow-line"}),"Talent Platform"]}),e.jsx("h1",{className:"pm-title",children:"Project Management"}),e.jsx("p",{className:"pm-subtitle",children:"Review, verify and manage projects submitted by clients and talent."})]}),e.jsxs(c,{href:route("admin.projects.create"),className:"pm-add-button",children:[e.jsx(n,{name:"plus",size:16}),"Add Project"]})]}),e.jsxs("div",{className:"pm-stat-grid",children:[e.jsxs("div",{className:"pm-stat",children:[e.jsx("div",{className:"pm-stat-icon",children:e.jsx(n,{name:"folder",size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"pm-stat-label",children:"Total Projects"}),e.jsx("h3",{className:"pm-stat-value",children:s.total})]})]}),e.jsxs("div",{className:"pm-stat",children:[e.jsx("div",{className:"pm-stat-icon",children:e.jsx(n,{name:"check",size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"pm-stat-label",children:"Verified"}),e.jsx("h3",{className:"pm-stat-value",children:s.verified})]})]}),e.jsxs("div",{className:"pm-stat",children:[e.jsx("div",{className:"pm-stat-icon",children:e.jsx(n,{name:"clock",size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"pm-stat-label",children:"Pending Review"}),e.jsx("h3",{className:"pm-stat-value",children:s.pending})]})]}),e.jsxs("div",{className:"pm-stat",children:[e.jsx("div",{className:"pm-stat-icon",children:e.jsx(n,{name:"users",size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"pm-stat-label",children:"Active Projects"}),e.jsx("h3",{className:"pm-stat-value",children:s.active})]})]})]}),e.jsxs("div",{className:"pm-table-card",children:[e.jsx("div",{className:"pm-table-toolbar",children:e.jsxs("h2",{className:"pm-toolbar-title",children:["Projects",e.jsx("span",{className:"pm-toolbar-count",children:s.total})]})}),r.length===0?e.jsxs("div",{className:"pm-empty",children:[e.jsx("div",{className:"pm-empty-icon",children:e.jsx(n,{name:"folder",size:21})}),e.jsx("h3",{className:"pm-empty-title",children:"No projects found"}),e.jsx("p",{className:"pm-empty-text",children:"Projects submitted to the platform will appear here."})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pm-table-scroll",children:e.jsxs("table",{className:"pm-table",ref:i,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Project"}),e.jsx("th",{children:"Owner"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Budget"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Verification"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:r.map(a=>{var l,p,d,o;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"pm-project",children:[e.jsx("h3",{className:"pm-project-title",children:a.title}),e.jsx("p",{className:"pm-project-description",children:v(a.description)})]})}),e.jsx("td",{children:e.jsxs("div",{className:"pm-person",children:[e.jsx("div",{className:"pm-avatar",children:b((l=a.user)==null?void 0:l.name)}),e.jsxs("div",{children:[e.jsx("p",{className:"pm-person-name",children:((p=a.user)==null?void 0:p.name)??"Unknown"}),e.jsx("p",{className:"pm-person-email",children:((d=a.user)==null?void 0:d.email)??"No email"})]})]})}),e.jsx("td",{children:e.jsxs("div",{children:[e.jsx("p",{className:"pm-meta-title",children:((o=a.category)==null?void 0:o.name)??"—"}),e.jsxs("p",{className:"pm-meta-sub",children:[e.jsx(n,{name:"location",size:11}),a.location??"Remote"]})]})}),e.jsx("td",{children:e.jsx("span",{className:"pm-budget",children:j(a)})}),e.jsx("td",{children:e.jsx(y,{status:a.status})}),e.jsx("td",{children:e.jsx(w,{verified:a.verified})}),e.jsx("td",{children:e.jsxs("div",{className:"pm-actions",children:[e.jsx(c,{href:route("admin.projects.show",a.id),className:"pm-action",title:"View project","aria-label":"View project",children:e.jsx(n,{name:"eye",size:15})}),e.jsx(c,{href:route("admin.projects.edit",a.id),className:"pm-action",title:"Edit project","aria-label":"Edit project",children:e.jsx(n,{name:"edit",size:15})}),!a.verified&&e.jsx("button",{type:"button",className:"pm-action verify",title:"Verify project","aria-label":"Verify project",onClick:()=>h(a),children:e.jsx(n,{name:"verify",size:15})}),e.jsx("button",{type:"button",className:"pm-action delete",title:"Delete project","aria-label":"Delete project",onClick:()=>f(a),children:e.jsx(n,{name:"trash",size:15})})]})})]},a.id)})})]})}),(t==null?void 0:t.links)&&t.links.length>3&&e.jsx("div",{className:"pm-pagination",children:t.links.map((a,l)=>a.url?e.jsx(c,{href:a.url,preserveState:!0,className:`pm-page-link ${a.active?"active":""}`,children:e.jsx("span",{dangerouslySetInnerHTML:{__html:a.label}})},l):e.jsx("span",{className:"pm-page-link disabled",dangerouslySetInnerHTML:{__html:a.label}},l))})]})]})]})})]})}export{z as default};
