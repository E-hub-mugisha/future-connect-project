import{u as l,j as e,H as x,L as g}from"./app-CgjB0zLb.js";import{A as b}from"./AppLayout-BhRRfzUA.js";const t={connectionsIndex:"/admin/connections",connectionRespond:a=>`/admin/connections/${a}/respond`,connectionAccept:a=>`/admin/connections/${a}/accept`};function f({status:a,map:n}){const r=n[a]??n.default;return e.jsxs("span",{className:`badge ${r.className}`,children:[e.jsx("i",{className:`ti ${r.icon}`})," ",r.label]})}const h={accepted:{label:"Accepted",icon:"ti-check",className:"badge-success"},rejected:{label:"Rejected",icon:"ti-x",className:"badge-danger"},default:{label:"Pending",icon:"ti-clock",className:"badge-neutral"}};function u({connection:a}){var i,d,c;const n=a.status==="accepted",r=l({response:a.response??""}),p=s=>{s.preventDefault(),r.post(t.connectionRespond(a.id),{preserveScroll:!0})},o=l({}),m=s=>{s.preventDefault(),o.post(t.connectionAccept(a.id),{preserveScroll:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:`Connection Request #${a.id}`}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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

                .fc-admin-page, .fc-admin-page * { box-sizing: border-box; }
                .fc-admin-page { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); min-height: 100%; }

                .admin-page { padding: 32px; }
                @media(max-width: 768px) { .admin-page { padding: 20px 16px; } }
                .admin-page .container-narrow { max-width: 880px; margin: 0 auto; }

                .admin-header {
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 16px; flex-wrap: wrap;
                    margin-bottom: 24px;
                }
                .admin-header h2 { font-family: var(--font-head); font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin: 0 0 4px; }
                .admin-header p { font-size: 0.82rem; color: var(--text-secondary); margin: 0; }

                .btn-back {
                    display: inline-flex; align-items: center; gap: 8px;
                    border: 1px solid var(--border);
                    background: var(--bg-card);
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 9px 18px;
                    font-size: 0.82rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s;
                    white-space: nowrap;
                }
                .btn-back:hover { border-color: var(--border-accent); color: var(--accent); }

                .info-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 26px;
                    margin-bottom: 20px;
                }
                .info-card-title {
                    font-family: var(--font-head);
                    font-size: 1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 0 0 18px;
                    display: flex; align-items: center; gap: 10px;
                }
                .info-card-title i { color: var(--accent); }

                .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
                @media(max-width: 700px) { .info-grid { grid-template-columns: 1fr; } }

                .info-block h6 {
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0 0 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                }
                .info-row { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--border); font-size: 0.85rem; }
                .info-row:last-child { border-bottom: none; }
                .info-row span:first-child { color: var(--text-muted); }
                .info-row span:last-child { color: var(--text-primary); font-weight: 500; text-align: right; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    font-size: 0.75rem;
                    font-weight: 700;
                }
                .badge-success { background: rgba(72,213,151,0.14); color: var(--accent); }
                .badge-danger { background: rgba(224,100,90,0.14); color: var(--danger); }
                .badge-pending { background: rgba(232,185,74,0.14); color: var(--warn); }
                .badge-neutral { background: var(--bg-glass); color: var(--text-secondary); border: 1px solid var(--border); }

                .response-note {
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    border-radius: 12px;
                    padding: 14px 16px;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin-top: 14px;
                }
                .response-note strong { color: var(--text-primary); }

                .actions-card-header {
                    display: flex; align-items: center; gap: 10px;
                    margin-bottom: 20px;
                }
                .actions-card-header i { color: var(--accent); font-size: 1.1rem; }
                .actions-card-header h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 800; margin: 0; }

                .form-label { font-size: 0.8rem; font-weight: 500; color: var(--text-secondary); margin-bottom: 6px; display: block; }
                .form-control-dark {
                    width: 100%;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid var(--border);
                    border-radius: 10px;
                    color: var(--text-primary);
                    padding: 11px 14px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.2s;
                    margin-bottom: 14px;
                    resize: vertical;
                }
                .form-control-dark:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }
                .form-control-dark::placeholder { color: var(--text-muted); }

                .action-divider { border: none; border-top: 1px solid var(--border); margin: 24px 0; }

                .btn-send {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s, box-shadow 0.2s;
                    box-shadow: 0 4px 18px var(--accent-glow);
                }
                .btn-send:hover { background: var(--accent-dim); }
                .btn-send:disabled { opacity: 0.6; cursor: not-allowed; }

                .btn-accept {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s;
                    box-shadow: 0 4px 18px var(--accent-glow);
                }
                .btn-accept:disabled {
                    background: var(--bg-glass);
                    color: var(--text-muted);
                    box-shadow: none;
                    cursor: not-allowed;
                    border: 1px solid var(--border);
                }

                .accepted-flag {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(72,213,151,0.14);
                    color: var(--accent);
                    border: 1px solid var(--border-accent);
                    border-radius: var(--radius-pill);
                    padding: 10px 20px;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.9rem;
                }

                /* ── DARK THEME (opt-in override) ── */
                [data-h-theme="dark"] {
                    --bg-deep:    #0e1618;
                    --bg-card:    #131e21;
                    --bg-glass:   rgba(255,255,255,0.035);
                    --bg-glass2:  rgba(0,166,103,0.07);
                    --accent:     #48d597;
                    --accent-dim: #008f59;
                    --accent-glow:rgba(0,166,103,0.25);
                    --text-primary:   #f0f4f3;
                    --text-secondary: #8da4a0;
                    --text-muted:     #4d6460;
                    --border:     rgba(255,255,255,0.07);
                    --border-accent: rgba(0,166,103,0.3);
                    --warn: #e8b94a;
                    --danger: #e0645a;
                }
                [data-h-theme="dark"] .form-control-dark { background: rgba(255,255,255,0.04); }
            `}),e.jsx("div",{className:"fc-admin-page",children:e.jsx("div",{className:"admin-page",children:e.jsxs("div",{className:"container-narrow",children:[e.jsxs("div",{className:"admin-header",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:["Connection Request #",a.id]}),e.jsx("p",{children:"Review talent and requester details, and take action."})]}),e.jsxs(g,{href:t.connectionsIndex,className:"btn-back",children:[e.jsx("i",{className:"ti ti-arrow-left"})," Back"]})]}),e.jsx("div",{className:"info-card",children:e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-block",children:[e.jsx("h6",{children:"Talent Info"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Name"}),e.jsx("span",{children:(i=a.talent)==null?void 0:i.name})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Email"}),e.jsx("span",{children:((d=a.talent)==null?void 0:d.email)??"N/A"})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Skill"}),e.jsx("span",{children:((c=a.talent)==null?void 0:c.skill)??"N/A"})]})]}),e.jsxs("div",{className:"info-block",children:[e.jsx("h6",{children:"Requester Info"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Name"}),e.jsx("span",{children:a.name})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Email"}),e.jsx("span",{children:a.email})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Message"}),e.jsx("span",{children:a.message??"N/A"})]})]})]})}),e.jsxs("div",{className:"info-card",children:[e.jsxs("h5",{className:"info-card-title",children:[e.jsx("i",{className:"ti ti-plug-connected"})," Connection Status"]}),e.jsxs("div",{className:"info-row",style:{borderBottom:"none"},children:[e.jsx("span",{children:"Current Status"}),e.jsx("span",{children:e.jsx(f,{status:a.status,map:h})})]}),a.response&&e.jsxs("div",{className:"response-note",children:[e.jsx("strong",{children:"Admin Response:"})," ",a.response]})]}),e.jsxs("div",{className:"info-card",children:[e.jsxs("div",{className:"actions-card-header",children:[e.jsx("i",{className:"ti ti-settings"}),e.jsx("h5",{children:"Admin Actions"})]}),e.jsxs("form",{onSubmit:p,children:[e.jsx("label",{className:"form-label",children:"Send a Message to Requester"}),e.jsx("textarea",{className:"form-control-dark",rows:4,placeholder:"Write your response…",value:r.data.response,onChange:s=>r.setData("response",s.target.value)}),e.jsxs("button",{type:"submit",className:"btn-send",disabled:r.processing,children:[e.jsx("i",{className:"ti ti-send"})," ",r.processing?"Sending…":"Send Response"]})]}),e.jsx("hr",{className:"action-divider"}),n?e.jsxs("span",{className:"accepted-flag",children:[e.jsx("i",{className:"ti ti-check"})," Connection Already Accepted"]}):e.jsx("form",{onSubmit:m,children:e.jsxs("button",{type:"submit",className:"btn-accept",disabled:o.processing,children:[e.jsx("i",{className:"ti ti-circle-check"}),o.processing?"Accepting…":"Accept Connection"]})})]})]})})})]})}u.layout=a=>e.jsx(b,{children:a,title:"Connection Request Details"});export{u as default};
