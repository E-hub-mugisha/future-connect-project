import{j as e,H as i,L as l,a as c}from"./app-CZoN4D26.js";import{A as p}from"./AppLayout-cgNkyb5j.js";function b(r){return r?r.split(" ").filter(Boolean).slice(0,2).map(t=>{var s;return(s=t[0])==null?void 0:s.toUpperCase()}).join(""):"—"}function g({status:r}){const t=(r??"pending").toLowerCase(),n={pending:{cls:"badge-warn",label:"Pending"},accepted:{cls:"badge-success",label:"Accepted"},rejected:{cls:"badge-danger",label:"Rejected"}}[t]??{cls:"badge-muted",label:r??"Pending"};return e.jsx("span",{className:`badge ${n.cls}`,children:n.label})}function f({job:r,applications:t}){function s(a,o){c.patch(route("admin.jobs.updateApplicationStatus",a.id),{status:o})}const n=t??[];return e.jsxs(p,{children:[e.jsx(i,{title:`Applications for: ${r.title}`}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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
                }

                .fc-apps-page, .fc-apps-page * { box-sizing: border-box; }
                .fc-apps-page {
                    background: var(--bg-deep);
                    color: var(--text-primary);
                    font-family: var(--font-body);
                    padding: 32px;
                    min-height: 100%;
                }
                @media(max-width: 768px) { .fc-apps-page { padding: 20px 16px; } }

                .apps-header {
                    display: flex; align-items: flex-start; justify-content: space-between;
                    gap: 20px; flex-wrap: wrap;
                    margin-bottom: 24px;
                }
                .apps-header h2 {
                    font-family: var(--font-head);
                    font-size: 1.4rem;
                    font-weight: 800;
                    margin: 0 0 4px;
                }
                .apps-header p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; }

                .btn-pill {
                    display: inline-flex; align-items: center; gap: 8px;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                    white-space: nowrap;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-secondary);
                }
                .btn-pill:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }

                .table-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                }

                .fc-apps-page table.apps-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .fc-apps-page table.apps-table thead th {
                    text-align: left;
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-muted);
                    font-weight: 600;
                    padding: 14px 22px;
                    border-bottom: 1px solid var(--border);
                    white-space: nowrap;
                    background: transparent;
                }
                .fc-apps-page table.apps-table tbody tr td {
                    background-color: var(--bg-card) !important;
                    padding: 16px 22px;
                    border-bottom: 1px solid var(--border);
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    vertical-align: middle;
                }
                .fc-apps-page table.apps-table tbody tr:last-child td { border-bottom: none; }
                .fc-apps-page table.apps-table tbody tr:hover td { background-color: var(--bg-glass) !important; }

                .cell-applicant { display: flex; align-items: center; gap: 12px; }
                .applicant-avatar {
                    width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.78rem;
                }
                .cell-applicant h6 { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    white-space: nowrap;
                }
                .badge-success { background: rgba(0,166,103,0.12); color: var(--accent); }
                .badge-danger { background: rgba(201,74,63,0.12); color: var(--danger); }
                .badge-warn { background: rgba(179,130,15,0.12); color: var(--warn); }
                .badge-muted { background: rgba(127,149,141,0.14); color: var(--text-muted); }

                .btn-cv {
                    display: inline-flex; align-items: center; gap: 6px;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 6px 14px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .btn-cv:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }
                .cv-none { color: var(--text-muted); font-size: 0.82rem; }

                .status-select {
                    background: rgba(0,0,0,0.02);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    color: var(--text-primary);
                    padding: 7px 14px;
                    font-family: var(--font-body);
                    font-size: 0.82rem;
                    outline: none;
                    cursor: pointer;
                    transition: border-color 0.2s;
                }
                .status-select:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }

                .empty-state { text-align: center; padding: 64px 24px; color: var(--text-muted); font-size: 0.9rem; }
                .empty-state i { font-size: 2.2rem; margin-bottom: 12px; display: block; color: var(--text-muted); }

                @media(max-width: 768px) {
                    .apps-table-wrap { overflow-x: auto; }
                    .fc-apps-page table.apps-table { white-space: nowrap; }
                }
            `}),e.jsxs("div",{className:"fc-apps-page",children:[e.jsxs("div",{className:"apps-header",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:["Applications for: ",r.title]}),e.jsx("p",{children:"Review applicants and update their status for this listing."})]}),e.jsxs(l,{href:route("admin.jobs.show",r.id),className:"btn-pill",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Back to Job"]})]}),e.jsx("div",{className:"table-card",children:e.jsx("div",{className:"apps-table-wrap",children:e.jsxs("table",{className:"apps-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Applicant"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"CV"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:n.length>0?n.map((a,o)=>e.jsxs("tr",{children:[e.jsx("td",{children:o+1}),e.jsx("td",{children:e.jsxs("div",{className:"cell-applicant",children:[e.jsx("div",{className:"applicant-avatar",children:b(a.name)}),e.jsx("h6",{children:a.name??"N/A"})]})}),e.jsx("td",{children:a.email??"—"}),e.jsx("td",{children:a.resume?e.jsxs("a",{href:`/storage/${a.resume}`,target:"_blank",rel:"noreferrer",className:"btn-cv",children:[e.jsx("i",{className:"bi bi-download"})," Download"]}):e.jsx("span",{className:"cv-none",children:"N/A"})}),e.jsx("td",{children:e.jsx(g,{status:a.status})}),e.jsx("td",{children:e.jsxs("select",{value:a.status,onChange:d=>s(a,d.target.value),className:"status-select",children:[e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"accepted",children:"Accepted"}),e.jsx("option",{value:"rejected",children:"Rejected"})]})})]},a.id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"bi bi-inbox"}),"No applications submitted for this job yet."]})})})})]})})})]})]})}export{f as default};
