import{j as e,H as n,L as o}from"./app-BO26Fp_i.js";import{A as l}from"./AppLayout-Do3g3cSn.js";function d(a){return a?a.split(" ").filter(Boolean).slice(0,2).map(i=>{var s;return(s=i[0])==null?void 0:s.toUpperCase()}).join(""):"—"}function c({type:a}){const i=(a??"").toLowerCase(),r={"full-time":{cls:"badge-success",label:"Full-Time"},"part-time":{cls:"badge-info",label:"Part-Time"},contract:{cls:"badge-warn",label:"Contract"},internship:{cls:"badge-muted",label:"Internship"},remote:{cls:"badge-info",label:"Remote"}}[i]??{cls:"badge-muted",label:a??"N/A"};return e.jsx("span",{className:`badge ${r.cls}`,children:r.label})}function b({job:a}){var s;const i=Array.isArray(a.skills)?a.skills.map(r=>String(r).trim()).filter(Boolean):typeof a.skills=="string"?a.skills.split(",").map(r=>r.trim()).filter(Boolean):[];return e.jsxs(l,{children:[e.jsx(n,{title:`Job Details: ${a.title}`}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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

                .fc-job-show, .fc-job-show * { box-sizing: border-box; }
                .fc-job-show {
                    background: var(--bg-deep);
                    color: var(--text-primary);
                    font-family: var(--font-body);
                    padding: 32px;
                    min-height: 100%;
                }
                @media(max-width: 768px) { .fc-job-show { padding: 20px 16px; } }

                .show-header {
                    display: flex; align-items: flex-start; justify-content: space-between;
                    gap: 20px; flex-wrap: wrap;
                    margin-bottom: 24px;
                    max-width: 880px;
                    margin-left: auto; margin-right: auto;
                }
                .show-header h2 {
                    font-family: var(--font-head);
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin: 0 0 4px;
                }
                .show-header p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; }

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
                .btn-pill.success {
                    background: transparent;
                    color: var(--accent);
                    border: 1px solid var(--border-accent);
                }
                .btn-pill.success:hover { background: var(--bg-glass2); }

                /* ── Main card ── */
                .job-card {
                    max-width: 880px;
                    margin: 0 auto;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                    overflow: hidden;
                }
                .job-card-top {
                    padding: 28px 32px 24px;
                    border-bottom: 1px solid var(--border);
                    display: flex; align-items: flex-start; gap: 18px; flex-wrap: wrap;
                }
                .job-avatar-lg {
                    width: 56px; height: 56px; border-radius: 14px; flex-shrink: 0;
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-head);
                    font-weight: 800;
                    font-size: 1.1rem;
                }
                .job-title-block { flex: 1; min-width: 220px; }
                .job-title-block h3 {
                    font-family: var(--font-head);
                    font-size: 1.3rem;
                    font-weight: 800;
                    margin: 0 0 6px;
                }
                .job-company {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    font-weight: 600;
                    margin: 0 0 10px;
                }
                .job-meta-row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius-pill);
                    padding: 5px 13px;
                    font-size: 0.74rem;
                    font-weight: 700;
                    white-space: nowrap;
                }
                .badge-success { background: rgba(0,166,103,0.12); color: var(--accent); }
                .badge-info { background: rgba(47,125,189,0.12); color: var(--info); }
                .badge-warn { background: rgba(179,130,15,0.12); color: var(--warn); }
                .badge-muted { background: rgba(127,149,141,0.14); color: var(--text-muted); }
                .badge-outline {
                    background: transparent;
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                }

                /* ── Info grid ── */
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 14px;
                    padding: 24px 32px;
                    border-bottom: 1px solid var(--border);
                }
                @media(max-width: 700px) { .info-grid { grid-template-columns: repeat(2, 1fr); } }
                .info-item {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 14px 16px;
                }
                .info-item p {
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-muted);
                    margin: 0 0 6px;
                    display: flex; align-items: center; gap: 6px;
                }
                .info-item h6 {
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0;
                }

                /* ── Description / skills ── */
                .job-section { padding: 26px 32px; border-bottom: 1px solid var(--border); }
                .job-section:last-of-type { border-bottom: none; }
                .job-section h5 {
                    font-family: var(--font-head);
                    font-size: 0.95rem;
                    font-weight: 700;
                    margin: 0 0 14px;
                    display: flex; align-items: center; gap: 8px;
                }
                .job-section h5 i { color: var(--accent); }
                .job-description {
                    font-size: 0.9rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    white-space: pre-line;
                    margin: 0;
                }
                .skills-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
                .skill-chip {
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    border-radius: var(--radius-pill);
                    padding: 6px 14px;
                    font-size: 0.78rem;
                    font-weight: 600;
                }

                .job-card-footer {
                    padding: 24px 32px 28px;
                    display: flex;
                    justify-content: flex-start;
                }

                .empty-hint { font-size: 0.85rem; color: var(--text-muted); font-style: italic; }

                @media(max-width: 700px) {
                    .job-card-top, .info-grid, .job-section, .job-card-footer { padding-left: 20px; padding-right: 20px; }
                }
            `}),e.jsxs("div",{className:"fc-job-show",children:[e.jsxs("div",{className:"show-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Job Details"}),e.jsx("p",{children:"Full listing information as seen by applicants."})]}),e.jsxs(o,{href:route("admin.jobs.index"),className:"btn-pill secondary",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Back to Jobs"]})]}),e.jsxs("div",{className:"job-card",children:[e.jsxs("div",{className:"job-card-top",children:[e.jsx("div",{className:"job-avatar-lg",children:d(a.title)}),e.jsxs("div",{className:"job-title-block",children:[e.jsx("h3",{children:a.title}),((s=a.company)==null?void 0:s.name)&&e.jsx("p",{className:"job-company",children:a.company.name}),e.jsxs("div",{className:"job-meta-row",children:[e.jsx(c,{type:a.type}),a.experience_level&&e.jsxs("span",{className:"badge badge-outline",children:[e.jsx("i",{className:"bi bi-bar-chart"})," ",a.experience_level]})]})]})]}),e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-item",children:[e.jsxs("p",{children:[e.jsx("i",{className:"bi bi-geo-alt"})," Location"]}),e.jsx("h6",{children:a.location??"Not specified"})]}),e.jsxs("div",{className:"info-item",children:[e.jsxs("p",{children:[e.jsx("i",{className:"bi bi-briefcase"})," Type"]}),e.jsx("h6",{children:a.type??"N/A"})]}),e.jsxs("div",{className:"info-item",children:[e.jsxs("p",{children:[e.jsx("i",{className:"bi bi-cash-stack"})," Salary Range"]}),e.jsx("h6",{children:a.salary_range??"N/A"})]})]}),e.jsxs("div",{className:"job-section",children:[e.jsxs("h5",{children:[e.jsx("i",{className:"bi bi-file-text"})," Job Description"]}),a.description?e.jsx("p",{className:"job-description",children:a.description}):e.jsx("p",{className:"empty-hint",children:"No description provided."})]}),e.jsxs("div",{className:"job-section",children:[e.jsxs("h5",{children:[e.jsx("i",{className:"bi bi-stars"})," Skills Required"]}),i.length>0?e.jsx("div",{className:"skills-wrap",children:i.map((r,t)=>e.jsx("span",{className:"skill-chip",children:r},t))}):e.jsx("p",{className:"empty-hint",children:"No specific skills listed."})]}),e.jsx("div",{className:"job-card-footer",children:e.jsxs(o,{href:route("admin.jobs.applications",a.id),className:"btn-pill success",children:[e.jsx("i",{className:"bi bi-people"})," View Applications"]})})]})]})]})}export{b as default};
