import{u as l,j as e,H as x,L as g}from"./app-CJlpfYPO.js";import{A as b}from"./AppLayout-WTBEreOn.js";const t={connectionsIndex:"/admin/connections",connectionRespond:a=>`/admin/connections/${a}/respond`,connectionAccept:a=>`/admin/connections/${a}/accept`};function f({status:a,map:i}){const r=i[a]??i.default;return e.jsxs("span",{className:`badge ${r.className}`,children:[e.jsx("i",{className:`ti ${r.icon}`})," ",r.label]})}const h={accepted:{label:"Accepted",icon:"ti-check",className:"badge-success"},rejected:{label:"Rejected",icon:"ti-x",className:"badge-danger"},default:{label:"Pending",icon:"ti-clock",className:"badge-pending"}};function u({connection:a}){var o,d,c;const i=a.status==="accepted",r=l({response:a.response??""}),p=n=>{n.preventDefault(),r.post(t.connectionRespond(a.id),{preserveScroll:!0})},s=l({}),m=n=>{n.preventDefault(),s.post(t.connectionAccept(a.id),{preserveScroll:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:`Connection Request #${a.id}`}),e.jsx("style",{children:`
                :root {
                    --ink:        #0A0A0A;
                    --ink-soft:   #4A4A4A;
                    --bg-deep:    #FAFAFA;
                    --bg-card:    #FFFFFF;
                    --bg-muted:   #F2F2F2;
                    --accent:     #00A667;
                    --accent-dim: #00854F;
                    --accent-tint:#E6F7EF;
                    --text-label: #5C5C5C;
                    --text-muted: #9A9A9A;
                    --border:     #E1E1E1;
                    --border-strong: #0A0A0A;
                    --radius:     6px;
                    --radius-lg:  4px;
                    --font-head:  inherit;
                    --font-body:  inherit;
                    --warn:       #92650A;
                    --warn-tint:  #FBF1DE;
                    --danger:     #C0362C;
                    --danger-tint:#FBEDEC;
                }

                .fc-admin-page, .fc-admin-page * { box-sizing: border-box; }
                .fc-admin-page { background: var(--bg-deep); color: var(--ink); font-family: var(--font-body); min-height: 100%; }

                .admin-page { padding: 40px 32px 56px; }
                @media(max-width: 768px) { .admin-page { padding: 24px 16px 40px; } }
                .admin-page .container-narrow { max-width: 880px; margin: 0 auto; }

                .admin-header {
                    display: flex; align-items: flex-end; justify-content: space-between;
                    gap: 16px; flex-wrap: wrap;
                    margin-bottom: 28px;
                    padding-bottom: 22px;
                    border-bottom: 2px solid var(--ink);
                }
                .admin-header h2 { font-family: var(--font-head); font-size: 1.4rem; font-weight: 700; letter-spacing: -.3px; color: var(--ink); margin: 0 0 5px; }
                .admin-header p { font-size: 0.85rem; color: var(--text-label); margin: 0; }

                .btn-back {
                    display: inline-flex; align-items: center; gap: 8px;
                    border: 1px solid var(--border-strong);
                    background: var(--bg-card);
                    color: var(--ink);
                    border-radius: var(--radius);
                    padding: 9px 18px;
                    font-size: 0.82rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: background 0.15s, color 0.15s;
                    white-space: nowrap;
                }
                .btn-back:hover { background: var(--ink); color: #fff; }

                .info-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 24px 26px;
                    margin-bottom: 18px;
                }
                .info-card-title {
                    font-family: var(--font-head);
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--ink);
                    margin: 0 0 18px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid var(--border);
                    display: flex; align-items: center; gap: 10px;
                }
                .info-card-title i { color: var(--accent); }

                .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
                @media(max-width: 700px) { .info-grid { grid-template-columns: 1fr; } }

                .info-block h6 {
                    font-family: var(--font-head);
                    font-size: 0.72rem;
                    font-weight: 700;
                    color: var(--text-muted);
                    margin: 0 0 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    padding-left: 10px;
                    border-left: 3px solid var(--accent);
                }
                .info-row { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--border); font-size: 0.85rem; }
                .info-row:last-child { border-bottom: none; }
                .info-row span:first-child { color: var(--text-label); }
                .info-row span:last-child { color: var(--ink); font-weight: 500; text-align: right; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius);
                    padding: 4px 11px;
                    font-size: 0.75rem;
                    font-weight: 700;
                }
                .badge-success { background: var(--accent-tint); color: var(--accent-dim); }
                .badge-danger { background: var(--danger-tint); color: var(--danger); }
                .badge-pending { background: var(--warn-tint); color: var(--warn); }
                .badge-neutral { background: var(--bg-muted); color: var(--text-label); border: 1px solid var(--border); }

                .response-note {
                    background: var(--bg-deep);
                    border: 1px solid var(--border);
                    border-left: 3px solid var(--accent);
                    border-radius: var(--radius-lg);
                    padding: 14px 16px;
                    font-size: 0.85rem;
                    color: var(--ink-soft);
                    margin-top: 14px;
                }
                .response-note strong { color: var(--ink); }

                .actions-card-header {
                    display: flex; align-items: center; gap: 10px;
                    margin-bottom: 20px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid var(--border);
                }
                .actions-card-header i { color: var(--accent); font-size: 1.05rem; }
                .actions-card-header h5 { font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; margin: 0; }

                .form-label { font-size: 0.78rem; font-weight: 600; color: var(--text-label); margin-bottom: 6px; display: block; }
                .form-control-dark {
                    width: 100%;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    color: var(--ink);
                    padding: 11px 14px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.15s, box-shadow 0.15s;
                    margin-bottom: 14px;
                    resize: vertical;
                }
                .form-control-dark:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-tint); }
                .form-control-dark::placeholder { color: var(--text-muted); }

                .action-divider { border: none; border-top: 1px solid var(--border); margin: 22px 0; }

                .btn-send {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.15s;
                }
                .btn-send:hover { background: var(--accent-dim); }
                .btn-send:disabled { opacity: 0.6; cursor: not-allowed; }

                .btn-accept {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.15s;
                }
                .btn-accept:disabled {
                    background: var(--bg-muted);
                    color: var(--text-muted);
                    cursor: not-allowed;
                    border: 1px solid var(--border);
                }

                .accepted-flag {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent-tint);
                    color: var(--accent-dim);
                    border: 1px solid var(--accent);
                    border-radius: var(--radius);
                    padding: 10px 20px;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.9rem;
                }

                /* ── DARK THEME (opt-in override) ── */
                [data-h-theme="dark"] {
                    --ink:        #F2F2F2;
                    --ink-soft:   #C9C9C9;
                    --bg-deep:    #0A0A0A;
                    --bg-card:    #141414;
                    --bg-muted:   #1E1E1E;
                    --accent:     #00C97A;
                    --accent-dim: #00A667;
                    --accent-tint: rgba(0,201,122,0.12);
                    --text-label: #9A9A9A;
                    --text-muted: #6B6B6B;
                    --border:     #2A2A2A;
                    --border-strong: #F2F2F2;
                    --warn: #E0B84E;
                    --warn-tint: rgba(224,184,78,0.12);
                    --danger: #E0645A;
                    --danger-tint: rgba(224,100,90,0.12);
                }
                [data-h-theme="dark"] .btn-back:hover { color: var(--ink); }
            `}),e.jsx("div",{className:"fc-admin-page",children:e.jsx("div",{className:"admin-page",children:e.jsxs("div",{className:"container-narrow",children:[e.jsxs("div",{className:"admin-header",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:["Connection request #",a.id]}),e.jsx("p",{children:"Review talent and requester details, and take action."})]}),e.jsxs(g,{href:t.connectionsIndex,className:"btn-back",children:[e.jsx("i",{className:"ti ti-arrow-left"})," Back"]})]}),e.jsx("div",{className:"info-card",children:e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-block",children:[e.jsx("h6",{children:"Talent info"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Name"}),e.jsx("span",{children:(o=a.talent)==null?void 0:o.name})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Email"}),e.jsx("span",{children:((d=a.talent)==null?void 0:d.email)??"N/A"})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Skill"}),e.jsx("span",{children:((c=a.talent)==null?void 0:c.skill)??"N/A"})]})]}),e.jsxs("div",{className:"info-block",children:[e.jsx("h6",{children:"Requester info"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Name"}),e.jsx("span",{children:a.name})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Email"}),e.jsx("span",{children:a.email})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Message"}),e.jsx("span",{children:a.message??"N/A"})]})]})]})}),e.jsxs("div",{className:"info-card",children:[e.jsxs("h5",{className:"info-card-title",children:[e.jsx("i",{className:"ti ti-plug-connected"})," Connection status"]}),e.jsxs("div",{className:"info-row",style:{borderBottom:"none"},children:[e.jsx("span",{children:"Current status"}),e.jsx("span",{children:e.jsx(f,{status:a.status,map:h})})]}),a.response&&e.jsxs("div",{className:"response-note",children:[e.jsx("strong",{children:"Admin response:"})," ",a.response]})]}),e.jsxs("div",{className:"info-card",children:[e.jsxs("div",{className:"actions-card-header",children:[e.jsx("i",{className:"ti ti-settings"}),e.jsx("h5",{children:"Admin actions"})]}),e.jsxs("form",{onSubmit:p,children:[e.jsx("label",{className:"form-label",children:"Send a message to requester"}),e.jsx("textarea",{className:"form-control-dark",rows:4,placeholder:"Write your response…",value:r.data.response,onChange:n=>r.setData("response",n.target.value)}),e.jsxs("button",{type:"submit",className:"btn-send",disabled:r.processing,children:[e.jsx("i",{className:"ti ti-send"})," ",r.processing?"Sending…":"Send response"]})]}),e.jsx("hr",{className:"action-divider"}),i?e.jsxs("span",{className:"accepted-flag",children:[e.jsx("i",{className:"ti ti-check"})," Connection already accepted"]}):e.jsx("form",{onSubmit:m,children:e.jsxs("button",{type:"submit",className:"btn-accept",disabled:s.processing,children:[e.jsx("i",{className:"ti ti-circle-check"}),s.processing?"Accepting…":"Accept connection"]})})]})]})})})]})}u.layout=a=>e.jsx(b,{children:a,title:"Connection Request Details"});export{u as default};
