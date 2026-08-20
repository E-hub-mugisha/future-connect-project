import{r as n,j as e,H as y,L as d,a as w}from"./app-CgjB0zLb.js";import{A as k}from"./AppLayout-BhRRfzUA.js";function N(r){return r?r.split(" ").filter(Boolean).slice(0,2).map(i=>{var t;return(t=i[0])==null?void 0:t.toUpperCase()}).join(""):"—"}function f(r){return r.replace(/&laquo;/g,"‹").replace(/&raquo;/g,"›").replace(/Previous/i,"Prev").replace(/Next/i,"Next")}function z({type:r}){const i=(r??"").toLowerCase(),o={"full-time":{cls:"badge-success",label:"Full-Time"},"part-time":{cls:"badge-info",label:"Part-Time"},contract:{cls:"badge-warn",label:"Contract"},internship:{cls:"badge-muted",label:"Internship"},remote:{cls:"badge-info",label:"Remote"}}[i]??{cls:"badge-muted",label:r??"—"};return e.jsx("span",{className:`badge ${o.cls}`,children:o.label})}function S({jobs:r}){const i=n.useRef(null),t=r.data??[],[o,u]=n.useState(""),[p,v]=n.useState(""),[x,g]=n.useState(null);n.useEffect(()=>{let a;return window.$&&window.$.fn&&window.$.fn.DataTable&&i.current&&(a=window.$(i.current).DataTable({destroy:!0,autoWidth:!1,paging:!1})),()=>{a==null||a.destroy()}},[t]),n.useEffect(()=>{function a(){g(null)}return document.addEventListener("click",a),()=>document.removeEventListener("click",a)},[]);function j(a){confirm("Delete this job?")&&w.delete(route("admin.jobs.destroy",a.id))}const b=n.useMemo(()=>{const a=r.total??t.length,s=new Set(t.map(l=>(l.type??"").toLowerCase()).filter(Boolean)),c=new Set(t.map(l=>l.location).filter(Boolean));return{total:a,types:s.size,locations:c.size}},[t,r.total]),m=n.useMemo(()=>t.filter(a=>{var l,h;const s=!o||((l=a.title)==null?void 0:l.toLowerCase().includes(o.toLowerCase()))||((h=a.location)==null?void 0:h.toLowerCase().includes(o.toLowerCase())),c=!p||(a.type??"").toLowerCase()===p;return s&&c}),[t,o,p]);return e.jsxs(k,{children:[e.jsx(y,{title:"Manage Jobs"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
                :root {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-glass:   rgba(0,100,60,0.035);
                    --bg-glass2:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #7f958d;
                    --border:     rgba(0,100,60,0.1);
                    --border-accent: rgba(0,166,103,0.3);
                    --radius-lg:  16px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                    --warn:       #b3820f;
                    --danger:     #c94a3f;
                    --info:       #2f7dbd;
                }

                .fc-jobs-page, .fc-jobs-page * { box-sizing: border-box; }
                .fc-jobs-page {
                    background: var(--bg-deep);
                    color: var(--text-primary);
                    font-family: var(--font-body);
                    padding: 32px;
                    min-height: 100%;
                }
                @media(max-width: 768px) { .fc-jobs-page { padding: 20px 16px; } }

                .jobs-header {
                    display: flex; align-items: flex-start; justify-content: space-between;
                    gap: 20px; flex-wrap: wrap;
                    margin-bottom: 28px;
                }
                .jobs-header h2 {
                    font-family: var(--font-head);
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin: 0 0 4px;
                }
                .jobs-header p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; }

                .header-actions { display: flex; gap: 10px; flex-wrap: wrap; }

                .btn-pill {
                    display: inline-flex; align-items: center; gap: 8px;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s, box-shadow 0.2s, color 0.2s, border-color 0.2s;
                    white-space: nowrap;
                    border: none;
                }
                .btn-pill.primary {
                    background: var(--accent);
                    color: #fff;
                    box-shadow: 0 4px 18px var(--accent-glow);
                }
                .btn-pill.primary:hover { background: var(--accent-dim); transform: translateY(-1px); }
                .btn-pill.secondary {
                    background: transparent;
                    color: var(--text-secondary);
                    border: 1px solid var(--border);
                }
                .btn-pill.secondary:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }

                /* ── Stat cards ── */
                .stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
                @media(max-width: 900px) { .stat-row { grid-template-columns: repeat(2, 1fr); } }
                .stat-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 14px;
                    padding: 20px;
                    display: flex; align-items: center; gap: 14px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                }
                .stat-icon {
                    width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
                    display: flex; align-items: center; justify-content: center;
                    background: var(--bg-glass2);
                    color: var(--accent);
                    font-size: 1.1rem;
                }
                .stat-meta p { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 4px; }
                .stat-meta h4 { font-family: var(--font-head); font-size: 1.25rem; font-weight: 800; margin: 0; }

                /* ── Card / toolbar ── */
                .table-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: visible;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                }
                .table-toolbar {
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 16px; flex-wrap: wrap;
                    padding: 20px 22px;
                    border-bottom: 1px solid var(--border);
                }
                .search-wrap {
                    display: flex; align-items: center; gap: 8px;
                    background: rgba(0,0,0,0.02);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    padding: 8px 16px;
                    flex: 1;
                    max-width: 340px;
                }
                .search-wrap:focus-within { border-color: var(--border-accent); }
                .search-wrap i { color: var(--text-muted); font-size: 0.95rem; }
                .search-wrap input {
                    background: transparent; border: none; outline: none;
                    color: var(--text-primary); font-size: 0.85rem; width: 100%;
                    font-family: var(--font-body);
                }
                .search-wrap input::placeholder { color: var(--text-muted); }

                .type-filters { display: flex; gap: 8px; flex-wrap: wrap; }
                .type-chip {
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 7px 15px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .type-chip:hover { border-color: var(--border-accent); color: var(--accent); }
                .type-chip.active { background: var(--bg-glass2); border-color: var(--border-accent); color: var(--accent); }

                /* ── Table (overrides bootstrap/datatable defaults) ── */
                .fc-jobs-page table.jobs-table {
                    width: 100% !important;
                    border-collapse: collapse;
                    margin: 0 !important;
                }
                .fc-jobs-page table.jobs-table thead th {
                    text-align: left;
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-muted);
                    font-weight: 600;
                    padding: 14px 22px;
                    border-bottom: 1px solid var(--border);
                    white-space: nowrap;
                    background: transparent !important;
                }
                .fc-jobs-page table.jobs-table tbody tr td {
                    background-color: var(--bg-card) !important;
                    padding: 16px 22px;
                    border-bottom: 1px solid var(--border);
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    vertical-align: middle;
                }
                .fc-jobs-page table.jobs-table tbody tr:last-child td { border-bottom: none; }
                .fc-jobs-page table.jobs-table tbody tr:hover td { background-color: var(--bg-glass) !important; }

                .cell-job { display: flex; align-items: center; gap: 12px; }
                .job-avatar {
                    width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.78rem;
                }
                .cell-job h6 { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    white-space: nowrap;
                }
                .badge-success { background: rgba(0,166,103,0.12); color: var(--accent); }
                .badge-info { background: rgba(47,125,189,0.12); color: var(--info); }
                .badge-warn { background: rgba(179,130,15,0.12); color: var(--warn); }
                .badge-muted { background: rgba(127,149,141,0.14); color: var(--text-muted); }

                .empty-state { text-align: center; padding: 64px 24px; color: var(--text-muted); font-size: 0.9rem; }
                .empty-state i { font-size: 2.2rem; margin-bottom: 12px; display: block; color: var(--text-muted); }

                /* ── Action menu (custom, replaces bootstrap dropdown visuals) ── */
                .action-menu-wrap { position: relative; display: inline-block; }
                .btn-actions {
                    display: inline-flex; align-items: center; gap: 6px;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 7px 16px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .btn-actions:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }
                .action-menu {
                    position: absolute;
                    right: 0;
                    top: calc(100% + 6px);
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
                    min-width: 150px;
                    padding: 6px;
                    z-index: 20;
                }
                .action-menu button, .action-menu a {
                    display: flex; align-items: center; gap: 8px;
                    width: 100%;
                    background: transparent;
                    border: none;
                    text-align: left;
                    padding: 9px 10px;
                    border-radius: 8px;
                    font-size: 0.82rem;
                    font-weight: 500;
                    color: var(--text-secondary);
                    text-decoration: none;
                    cursor: pointer;
                    transition: background 0.15s, color 0.15s;
                }
                .action-menu button:hover, .action-menu a:hover { background: var(--bg-glass2); color: var(--accent); }
                .action-menu button.danger:hover { background: rgba(201,74,63,0.1); color: var(--danger); }

                /* ── Pagination ── */
                .table-footer { padding: 18px 22px; display: flex; justify-content: flex-end; border-top: 1px solid var(--border); }
                .pagination-nav { display: flex; gap: 6px; flex-wrap: wrap; }
                .page-link {
                    min-width: 36px; height: 36px;
                    display: inline-flex; align-items: center; justify-content: center;
                    padding: 0 10px;
                    border-radius: 8px;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .page-link:hover { border-color: var(--border-accent); color: var(--accent); }
                .page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .page-link.disabled { opacity: 0.35; pointer-events: none; }

                @media(max-width: 768px) {
                    .jobs-table-wrap { overflow-x: auto; }
                    .fc-jobs-page table.jobs-table { white-space: nowrap; }
                }
            `}),e.jsxs("div",{className:"fc-jobs-page",children:[e.jsxs("div",{className:"jobs-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Job Listings"}),e.jsx("p",{children:"Manage open positions, categories, and applicant-facing job details."})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs(d,{href:route("admin.job-categories.index"),className:"btn-pill secondary",children:[e.jsx("i",{className:"bi bi-tags"})," Job Categories"]}),e.jsxs(d,{href:route("admin.jobs.create"),className:"btn-pill primary",children:[e.jsx("i",{className:"bi bi-plus-lg"})," Add Job"]})]})]}),e.jsxs("div",{className:"stat-row",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"bi bi-briefcase"})}),e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Total Jobs"}),e.jsx("h4",{children:b.total})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"bi bi-diagram-3"})}),e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Job Types"}),e.jsx("h4",{children:b.types})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"bi bi-geo-alt"})}),e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Locations"}),e.jsx("h4",{children:b.locations})]})]})]}),e.jsxs("div",{className:"table-card",children:[e.jsxs("div",{className:"table-toolbar",children:[e.jsxs("div",{className:"search-wrap",children:[e.jsx("i",{className:"bi bi-search"}),e.jsx("input",{type:"text",placeholder:"Search by title or location…",value:o,onChange:a=>u(a.target.value)})]}),e.jsx("div",{className:"type-filters",children:[{key:"",label:"All"},{key:"full-time",label:"Full-Time"},{key:"part-time",label:"Part-Time"},{key:"contract",label:"Contract"},{key:"internship",label:"Internship"}].map(a=>e.jsx("button",{className:`type-chip ${p===a.key?"active":""}`,onClick:()=>v(a.key),children:a.label},a.key||"all"))})]}),e.jsx("div",{className:"jobs-table-wrap",children:e.jsxs("table",{className:"datatable-init nowrap jobs-table",ref:i,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"Experience"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:m.length>0?m.map((a,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:(r.from??1)+s}),e.jsx("td",{children:e.jsxs("div",{className:"cell-job",children:[e.jsx("div",{className:"job-avatar",children:N(a.title)}),e.jsx("h6",{children:a.title})]})}),e.jsx("td",{children:e.jsx(z,{type:a.type})}),e.jsx("td",{children:a.location??"—"}),e.jsx("td",{children:a.experience_level??"—"}),e.jsx("td",{children:e.jsxs("div",{className:"action-menu-wrap",onClick:c=>c.stopPropagation(),children:[e.jsxs("button",{className:"btn-actions",onClick:()=>g(x===a.id?null:a.id),children:["Actions ",e.jsx("i",{className:"bi bi-chevron-down"})]}),x===a.id&&e.jsxs("div",{className:"action-menu",children:[e.jsxs(d,{href:route("admin.jobs.show",a.id),children:[e.jsx("i",{className:"bi bi-eye"})," View"]}),e.jsxs(d,{href:route("admin.jobs.edit",a.id),children:[e.jsx("i",{className:"bi bi-pencil"})," Edit"]}),e.jsxs("button",{type:"button",className:"danger",onClick:()=>j(a),children:[e.jsx("i",{className:"bi bi-trash"})," Delete"]})]})]})})]},a.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"bi bi-inbox"}),"No jobs found."]})})})})]})}),r.links&&r.links.length>3&&e.jsx("div",{className:"table-footer",children:e.jsx("div",{className:"pagination-nav",children:r.links.map((a,s)=>a.url?e.jsx(d,{href:a.url,preserveState:!0,className:`page-link ${a.active?"active":""}`,children:f(a.label)},s):e.jsx("span",{className:"page-link disabled",children:f(a.label)},s))})})]})]})]})}export{S as default};
