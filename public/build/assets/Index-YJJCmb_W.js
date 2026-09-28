import{r as d,j as e,H as k,L as b,a as w}from"./app-B2SIh33N.js";import{A as N}from"./AppLayout-CkTPU_ZW.js";import{E as z}from"./eye-DyfGufT-.js";import{P as L}from"./pencil-B4jxSHgI.js";import{T}from"./trash-BnfvNXot.js";function S(t){return t?t.split(" ").filter(Boolean).slice(0,2).map(i=>{var r;return(r=i[0])==null?void 0:r.toUpperCase()}).join(""):"—"}function v(t){return t.replace(/&laquo;/g,"‹").replace(/&raquo;/g,"›").replace(/Previous/i,"Prev").replace(/Next/i,"Next")}function A({type:t}){const i=(t??"").toLowerCase(),s={"full-time":{label:"Full-Time",className:"job-badge green"},"part-time":{label:"Part-Time",className:"job-badge blue"},contract:{label:"Contract",className:"job-badge orange"},internship:{label:"Internship",className:"job-badge gray"},remote:{label:"Remote",className:"job-badge purple"}}[i]??{label:t??"—",className:"job-badge gray"};return e.jsxs("span",{className:s.className,children:[e.jsx("span",{className:"badge-dot"}),s.label]})}function g({icon:t,label:i,value:r}){return e.jsxs("div",{className:"job-stat",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:`bi ${t}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"stat-label",children:i}),e.jsx("div",{className:"stat-value",children:r})]})]})}function h({href:t,icon:i,label:r,danger:s=!1,onClick:c}){const n=i,p=`table-action ${s?"danger":""}`;return c?e.jsx("button",{type:"button",className:p,onClick:c,title:r,"aria-label":r,children:e.jsx(n,{size:14,strokeWidth:1.8})}):e.jsx(b,{href:t,className:p,title:r,"aria-label":r,children:e.jsx(n,{size:14,strokeWidth:1.8})})}function R({jobs:t}){const i=d.useRef(null),r=t.data??[],[s,c]=d.useState(""),[n,p]=d.useState("");function y(a){confirm(`Delete "${a.title}"?`)&&w.delete(route("admin.jobs.destroy",a.id))}const x=d.useMemo(()=>{const a=t.total??r.length,o=new Set(r.map(l=>(l.type??"").toLowerCase()).filter(Boolean)),f=new Set(r.map(l=>l.location).filter(Boolean));return{total:a,types:o.size,locations:f.size}},[r,t.total]),m=d.useMemo(()=>{const a=s.trim().toLowerCase();return r.filter(o=>{var u,j;const f=!a||((u=o.title)==null?void 0:u.toLowerCase().includes(a))||((j=o.location)==null?void 0:j.toLowerCase().includes(a)),l=!n||(o.type??"").toLowerCase()===n;return f&&l})},[r,s,n]);return e.jsxs(N,{children:[e.jsx(k,{title:"Manage Jobs"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`

                /* =====================================================
                   APPLE-STYLE LIGHT ADMIN
                   ===================================================== */

                .jobs-page,
                .jobs-page * {
                    box-sizing: border-box;
                }

                .jobs-page {
                    --green: #007f5f;
                    --green-light: #eaf8f3;

                    --blue: #2878c8;
                    --blue-light: #edf5fd;

                    --orange: #b7791f;
                    --orange-light: #fff7e8;

                    --purple: #7357b8;
                    --purple-light: #f3effc;

                    --red: #c2413a;
                    --red-light: #fff0ef;

                    --text: #1d1d1f;
                    --text-secondary: #62666a;
                    --text-muted: #86868b;

                    --border: #e7e7e8;
                    --border-hover: #d2d2d4;

                    --surface: #ffffff;
                    --surface-soft: #f8f8f8;
                    --page: #f7f7f8;

                    background: var(--page);
                    color: var(--text);

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Inter",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    min-height: 100%;
                    padding: 28px 32px 48px;

                    color-scheme: light;
                }

                .jobs-page *,
                .jobs-page *::before,
                .jobs-page *::after {
                    color-scheme: light;
                }

                /* =====================================================
                   HEADER
                   ===================================================== */

                .jobs-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 20px;

                    margin-bottom: 24px;
                }

                .jobs-title {
                    margin: 0 0 4px;

                    font-size: 21px;
                    line-height: 1.25;
                    font-weight: 600;
                    letter-spacing: -0.025em;

                    color: var(--text);
                }

                .jobs-subtitle {
                    margin: 0;

                    font-size: 13px;
                    line-height: 1.5;
                    color: var(--text-secondary);
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .apple-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;

                    height: 36px;
                    padding: 0 14px;

                    border-radius: 9px;

                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 500;

                    text-decoration: none;
                    cursor: pointer;

                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        transform .15s ease;
                }

                .apple-btn.secondary {
                    background: #fff;
                    border: 1px solid var(--border);
                    color: var(--text-secondary);
                }

                .apple-btn.secondary:hover {
                    background: var(--surface-soft);
                    border-color: var(--border-hover);
                    color: var(--text);
                }

                .apple-btn.primary {
                    background: var(--green);
                    border: 1px solid var(--green);
                    color: #fff;
                }

                .apple-btn.primary:hover {
                    background: #006e52;
                    border-color: #006e52;
                }

                /* =====================================================
                   STATS
                   ===================================================== */

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;

                    margin-bottom: 18px;
                }

                .job-stat {
                    display: flex;
                    align-items: center;
                    gap: 12px;

                    min-height: 76px;
                    padding: 14px 16px;

                    background: var(--surface);
                    border: 1px solid var(--border);
                    border-radius: 12px;

                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025);
                }

                .stat-icon {
                    width: 34px;
                    height: 34px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                    border-radius: 9px;

                    background: var(--green-light);
                    color: var(--green);

                    font-size: 14px;
                }

                .stat-label {
                    margin-bottom: 2px;

                    font-size: 11px;
                    font-weight: 500;

                    color: var(--text-muted);
                }

                .stat-value {
                    font-size: 18px;
                    line-height: 1.2;
                    font-weight: 600;

                    letter-spacing: -0.02em;

                    color: var(--text);
                }

                /* =====================================================
                   MAIN CARD
                   ===================================================== */

                .jobs-card {
                    background: var(--surface);
                    border: 1px solid var(--border);
                    border-radius: 13px;

                    overflow: hidden;

                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025);
                }

                /* =====================================================
                   TOOLBAR
                   ===================================================== */

                .jobs-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    gap: 16px;

                    padding: 13px 16px;

                    border-bottom: 1px solid var(--border);
                }

                .search-box {
                    width: 280px;
                    height: 34px;

                    display: flex;
                    align-items: center;
                    gap: 8px;

                    padding: 0 11px;

                    background: #f5f5f6;
                    border: 1px solid transparent;

                    border-radius: 8px;

                    transition:
                        background .15s ease,
                        border-color .15s ease;
                }

                .search-box:focus-within {
                    background: #fff;
                    border-color: #b9dcd2;
                    box-shadow: 0 0 0 3px rgba(0,127,95,.08);
                }

                .search-box i {
                    font-size: 12px;
                    color: var(--text-muted);
                }

                .search-box input {
                    width: 100%;

                    border: 0;
                    outline: 0;
                    background: transparent;

                    font-family: inherit;
                    font-size: 12px;
                    color: var(--text);
                }

                .search-box input::placeholder {
                    color: #9a9a9f;
                }

                .filter-group {
                    display: flex;
                    align-items: center;
                    gap: 4px;

                    padding: 3px;

                    background: #f5f5f6;
                    border-radius: 8px;
                }

                .filter-btn {
                    height: 28px;

                    padding: 0 10px;

                    border: 0;
                    border-radius: 6px;

                    background: transparent;
                    color: var(--text-secondary);

                    font-family: inherit;
                    font-size: 11px;
                    font-weight: 500;

                    cursor: pointer;
                }

                .filter-btn:hover {
                    color: var(--text);
                }

                .filter-btn.active {
                    background: #fff;
                    color: var(--text);

                    box-shadow:
                        0 1px 3px rgba(0,0,0,.08);
                }

                /* =====================================================
                   TABLE
                   ===================================================== */

                .jobs-table-wrap {
                    width: 100%;
                    overflow-x: auto;
                }

                table.jobs-table {
                    width: 100% !important;

                    border-collapse: collapse;
                    border-spacing: 0;

                    margin: 0 !important;
                }

                .jobs-table thead th {
                    height: 38px;

                    padding: 0 16px;

                    text-align: left;
                    vertical-align: middle;

                    background: #fafafa !important;

                    border-bottom: 1px solid var(--border);

                    color: #8a8a8f;

                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 600;

                    letter-spacing: .04em;
                    text-transform: uppercase;

                    white-space: nowrap;
                }

                .jobs-table tbody td {
                    height: 58px;

                    padding: 8px 16px;

                    background: #fff !important;

                    border-bottom: 1px solid #f0f0f1;

                    color: var(--text-secondary);

                    font-size: 12px;
                    font-weight: 400;

                    vertical-align: middle;
                }

                .jobs-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .jobs-table tbody tr:hover td {
                    background: #fafafa !important;
                }

                /* =====================================================
                   JOB CELL
                   ===================================================== */

                .job-cell {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .job-avatar {
                    width: 32px;
                    height: 32px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                    border-radius: 8px;

                    background: var(--green-light);
                    border: 1px solid #d8eee7;

                    color: var(--green);

                    font-size: 10px;
                    font-weight: 600;
                }

                .job-name {
                    margin: 0;

                    color: var(--text);

                    font-size: 12px;
                    font-weight: 500;

                    line-height: 1.3;
                }

                .job-location {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                }

                .job-location i {
                    color: #9a9a9f;
                    font-size: 11px;
                }

                /* =====================================================
                   BADGES
                   ===================================================== */

                .job-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;

                    min-height: 23px;

                    padding: 0 8px;

                    border-radius: 6px;

                    font-size: 10px;
                    font-weight: 500;

                    white-space: nowrap;
                }

                .badge-dot {
                    width: 5px;
                    height: 5px;

                    border-radius: 50%;

                    background: currentColor;
                }

                .job-badge.green {
                    background: var(--green-light);
                    color: var(--green);
                }

                .job-badge.blue {
                    background: var(--blue-light);
                    color: var(--blue);
                }

                .job-badge.orange {
                    background: var(--orange-light);
                    color: var(--orange);
                }

                .job-badge.purple {
                    background: var(--purple-light);
                    color: var(--purple);
                }

                .job-badge.gray {
                    background: #f1f1f2;
                    color: #737378;
                }

                
                .actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    min-width: 100px;
}

.table-action {
    width: 30px;
    height: 30px;

    display: inline-flex !important;
    align-items: center;
    justify-content: center;

    flex: 0 0 30px;

    border: 1px solid #e5e5e7;
    border-radius: 7px;

    background: #ffffff !important;
    color: #6b6b70 !important;

    padding: 0;
    margin: 0;

    text-decoration: none !important;

    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;

    transition:
        background .15s ease,
        color .15s ease,
        border-color .15s ease,
        transform .15s ease;
}

.table-action:hover {
    background: #f5f5f7 !important;
    border-color: #d8d8dc;
    color: #1d1d1f !important;

    transform: translateY(-1px);
}

.table-action.edit:hover {
    background: #eaf8f3 !important;
    border-color: #cce8de;
    color: #007f5f !important;
}

.table-action.danger {
    color: #77777c !important;
}

.table-action.danger:hover {
    background: #fff0ef !important;
    border-color: #f0d5d2;
    color: #c2413a !important;
}

.table-action svg {
    display: block;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
}

                
                .empty-state {
                    padding: 54px 20px;

                    text-align: center;

                    color: var(--text-muted);

                    font-size: 12px;
                }

                .empty-icon {
                    width: 42px;
                    height: 42px;

                    margin: 0 auto 10px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 10px;

                    background: #f5f5f6;

                    color: #a0a0a5;

                    font-size: 17px;
                }

                /* =====================================================
                   FOOTER / PAGINATION
                   ===================================================== */

                .jobs-footer {
                    display: flex;
                    justify-content: flex-end;

                    padding: 12px 16px;

                    border-top: 1px solid var(--border);
                }

                .pagination {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .page-link {
                    min-width: 29px;
                    height: 29px;

                    display: inline-flex;
                    align-items: center;
                    justify-content: center;

                    padding: 0 8px;

                    border: 1px solid var(--border);
                    border-radius: 7px;

                    background: #fff;
                    color: var(--text-secondary);

                    font-size: 10px;
                    font-weight: 500;

                    text-decoration: none;
                }

                .page-link:hover {
                    border-color: #cfcfd1;
                    color: var(--text);
                    background: #fafafa;
                }

                .page-link.active {
                    background: var(--green);
                    border-color: var(--green);
                    color: #fff;
                }

                .page-link.disabled {
                    opacity: .35;
                    pointer-events: none;
                }

                /* =====================================================
                   RESPONSIVE
                   ===================================================== */

                @media (max-width: 900px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .jobs-toolbar {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .filter-group {
                        width: fit-content;
                    }
                }

                @media (max-width: 650px) {
                    .jobs-page {
                        padding: 20px 14px 32px;
                    }

                    .jobs-header {
                        flex-direction: column;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .apple-btn {
                        flex: 1;
                    }

                    .stats-grid {
                        grid-template-columns: 1fr;
                    }

                    .filter-group {
                        width: 100%;
                        overflow-x: auto;
                    }

                    .filter-btn {
                        white-space: nowrap;
                    }
                }

                .actions-column {
    width: 120px;
    min-width: 120px;
}
    
                @media (prefers-color-scheme: dark) {
                    .jobs-page {
                        background: #f7f7f8 !important;
                        color: #1d1d1f !important;
                    }

                    .jobs-card,
                    .job-stat,
                    .jobs-table tbody td,
                    .page-link {
                        background: #fff !important;
                        color: #1d1d1f;
                    }
                }

            `}),e.jsxs("div",{className:"jobs-page",children:[e.jsxs("div",{className:"jobs-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"jobs-title",children:"Job Listings"}),e.jsx("p",{className:"jobs-subtitle",children:"Manage positions, job types and applicant-facing details."})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs(b,{href:route("admin.job-categories.index"),className:"apple-btn secondary",children:[e.jsx("i",{className:"bi bi-grid-3x3-gap"}),"Categories"]}),e.jsxs(b,{href:route("admin.jobs.create"),className:"apple-btn primary",children:[e.jsx("i",{className:"bi bi-plus-lg"}),"Add Job"]})]})]}),e.jsxs("div",{className:"stats-grid",children:[e.jsx(g,{icon:"bi-briefcase",label:"Total Jobs",value:x.total}),e.jsx(g,{icon:"bi-layers",label:"Job Types",value:x.types}),e.jsx(g,{icon:"bi-geo-alt",label:"Locations",value:x.locations})]}),e.jsxs("div",{className:"jobs-card",children:[e.jsxs("div",{className:"jobs-toolbar",children:[e.jsxs("div",{className:"search-box",children:[e.jsx("i",{className:"bi bi-search"}),e.jsx("input",{type:"text",value:s,onChange:a=>c(a.target.value),placeholder:"Search jobs or locations"})]}),e.jsx("div",{className:"filter-group",children:[{key:"",label:"All"},{key:"full-time",label:"Full-Time"},{key:"part-time",label:"Part-Time"},{key:"contract",label:"Contract"},{key:"internship",label:"Internship"}].map(a=>e.jsx("button",{type:"button",className:`filter-btn ${n===a.key?"active":""}`,onClick:()=>p(a.key),children:a.label},a.key||"all"))})]}),e.jsx("div",{className:"jobs-table-wrap",children:e.jsxs("table",{className:"jobs-table",ref:i,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Position"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"Experience"}),e.jsx("th",{className:"actions-column",children:"Actions"})]})}),e.jsx("tbody",{children:m.length>0?m.map((a,o)=>e.jsxs("tr",{children:[e.jsx("td",{children:(t.from??1)+o}),e.jsx("td",{children:e.jsxs("div",{className:"job-cell",children:[e.jsx("div",{className:"job-avatar",children:S(a.title)}),e.jsx("p",{className:"job-name",children:a.title})]})}),e.jsx("td",{children:e.jsx(A,{type:a.type})}),e.jsx("td",{children:e.jsxs("span",{className:"job-location",children:[e.jsx("i",{className:"bi bi-geo-alt"}),a.location??"—"]})}),e.jsx("td",{children:a.experience_level??"—"}),e.jsx("td",{children:e.jsxs("div",{className:"actions",children:[e.jsx(h,{href:route("admin.jobs.show",a.id),icon:z,label:"View job"}),e.jsx(h,{href:route("admin.jobs.edit",a.id),icon:L,label:"Edit job"}),e.jsx(h,{icon:T,label:"Delete job",danger:!0,onClick:()=>y(a)})]})})]},a.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx("i",{className:"bi bi-inbox"})}),"No jobs found."]})})})})]})}),t.links&&t.links.length>3&&e.jsx("div",{className:"jobs-footer",children:e.jsx("div",{className:"pagination",children:t.links.map((a,o)=>a.url?e.jsx(b,{href:a.url,preserveState:!0,className:`page-link ${a.active?"active":""}`,children:v(a.label)},o):e.jsx("span",{className:"page-link disabled",children:v(a.label)},o))})})]})]})]})}export{R as default};
