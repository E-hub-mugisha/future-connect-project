import{r as m,u as A,j as e,H as C,L as k,a as F}from"./app-BV2sDVKx.js";import{A as q}from"./AppLayout-KiVsabfS.js";const x={connectionShow:r=>`/admin/connections/show/${r}`,connectionsIndex:"/admin/connections",connectionStore:"/admin/connections"};function j(r){return r?r.split(" ").filter(Boolean).slice(0,2).map(i=>{var n;return(n=i[0])==null?void 0:n.toUpperCase()}).join(""):"—"}function D(r){return r.replace(/&laquo;/g,"‹").replace(/&raquo;/g,"›").replace(/Previous/i,"Prev")}function R({status:r}){const i=(r??"pending").toLowerCase(),o={pending:{cls:"badge-pending",label:"Pending",icon:"ti-clock"},accepted:{cls:"badge-success",label:"Accepted",icon:"ti-check"},approved:{cls:"badge-success",label:"Approved",icon:"ti-check"},rejected:{cls:"badge-danger",label:"Rejected",icon:"ti-x"},declined:{cls:"badge-danger",label:"Declined",icon:"ti-x"}}[i]??{cls:"badge-pending",label:r??"Pending",icon:"ti-clock"};return e.jsxs("span",{className:`badge ${o.cls}`,children:[e.jsx("i",{className:`ti ${o.icon}`})," ",o.label]})}function E({connections:r,filters:i={},talents:n=[]}){const[o,d]=m.useState(!1),[c,w]=m.useState(i.search??""),[b,y]=m.useState(i.status??""),s=(r==null?void 0:r.data)??[],g=(r==null?void 0:r.links)??[],p={total:(r==null?void 0:r.total)??s.length,pending:s.filter(a=>(a.status??"pending").toLowerCase()==="pending").length,responded:s.filter(a=>!!a.response).length},h=(a=c,l=b)=>{F.get(x.connectionsIndex,{search:a,status:l},{preserveState:!0,preserveScroll:!0,replace:!0})},N=a=>{a.preventDefault(),h()},S=a=>{y(a),h(c,a)},t=A({talent_id:"",name:"",email:"",message:""}),z=a=>{a.preventDefault(),t.post(x.connectionStore,{preserveScroll:!0,onSuccess:()=>{t.reset(),d(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"Skill Connections"}),e.jsx("style",{children:`
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

                .admin-page { padding: 40px 32px 56px; max-width: 1200px; margin: 0 auto; }
                @media(max-width: 768px) { .admin-page { padding: 24px 16px 40px; } }

                .admin-header {
                    display: flex; align-items: flex-end; justify-content: space-between;
                    gap: 20px; flex-wrap: wrap;
                    margin-bottom: 28px;
                    padding-bottom: 22px;
                    border-bottom: 2px solid var(--ink);
                }
                .admin-header h2 {
                    font-family: var(--font-head);
                    font-size: 1.5rem;
                    font-weight: 700;
                    letter-spacing: -.3px;
                    color: var(--ink);
                    margin: 0 0 5px;
                }
                .admin-header p { font-size: 0.85rem; color: var(--text-label); margin: 0; }

                .btn-primary-pill {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    color: #fff;
                    border: none;
                    border-radius: var(--radius);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.15s;
                    white-space: nowrap;
                }
                .btn-primary-pill:hover { background: var(--accent-dim); }

                /* ── Stat cards ── */
                .stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
                @media(max-width: 900px) { .stat-row { grid-template-columns: repeat(2, 1fr); } }
                .stat-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-left: 3px solid var(--ink);
                    border-radius: var(--radius-lg);
                    padding: 18px 20px;
                    display: flex; align-items: center; justify-content: space-between; gap: 14px;
                }
                .stat-card.pending { border-left-color: var(--warn); }
                .stat-meta p { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 6px; }
                .stat-meta h4 { font-family: var(--font-head); font-size: 1.5rem; font-weight: 700; color: var(--ink); margin: 0; }
                .stat-card i { font-size: 1.15rem; color: var(--border); }
                .stat-card.pending i { color: var(--warn); }

                /* ── Toolbar ── */
                .table-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                }
                .table-toolbar {
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 16px; flex-wrap: wrap;
                    padding: 18px 22px;
                    border-bottom: 1px solid var(--border);
                }
                .search-wrap {
                    display: flex; align-items: center; gap: 8px;
                    background: var(--bg-deep);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 9px 14px;
                    flex: 1;
                    max-width: 320px;
                    transition: border-color 0.15s, box-shadow 0.15s;
                }
                .search-wrap:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-tint); }
                .search-wrap i { color: var(--text-muted); font-size: 0.9rem; }
                .search-wrap input {
                    background: transparent; border: none; outline: none;
                    color: var(--ink); font-size: 0.85rem; width: 100%;
                    font-family: var(--font-body);
                }
                .search-wrap input::placeholder { color: var(--text-muted); }

                .status-filters { display: flex; gap: 6px; flex-wrap: wrap; }
                .status-chip {
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-label);
                    border-radius: var(--radius);
                    padding: 8px 15px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.15s, color 0.15s, background 0.15s;
                }
                .status-chip:hover { border-color: var(--ink); color: var(--ink); }
                .status-chip.active { background: var(--ink); border-color: var(--ink); color: #fff; }

                /* ── Table ── */
                .admin-table { width: 100%; border-collapse: collapse; }
                .admin-table th {
                    text-align: left;
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-muted);
                    font-weight: 700;
                    padding: 14px 22px;
                    border-bottom: 1px solid var(--border);
                    white-space: nowrap;
                }
                .fc-admin-page .admin-table tr td {
                    background-color: var(--bg-card) !important;
                    padding: 16px 22px;
                    border-bottom: 1px solid var(--border);
                    font-size: 0.85rem;
                    color: var(--ink-soft);
                    vertical-align: middle;
                }
                .admin-table tbody tr:last-child td { border-bottom: none; }
                .admin-table tbody tr { transition: background 0.15s; }
                .admin-table tbody tr:hover td { background: var(--bg-deep) !important; }

                .cell-person { display: flex; align-items: center; gap: 12px; }
                .avatar-circle {
                    width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
                    background: var(--bg-muted);
                    border: 1px solid var(--border);
                    color: var(--ink);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.75rem;
                }
                .cell-person h6 { font-size: 0.85rem; font-weight: 700; color: var(--ink); margin: 0 0 2px; }
                .cell-person p { font-size: 0.75rem; color: var(--text-muted); margin: 0; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius);
                    padding: 4px 11px;
                    font-size: 0.72rem;
                    font-weight: 700;
                }
                .badge-success { background: var(--accent-tint); color: var(--accent-dim); }
                .badge-danger { background: var(--danger-tint); color: var(--danger); }
                .badge-pending { background: var(--warn-tint); color: var(--warn); }

                .message-cell {
                    max-width: 260px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .btn-view {
                    display: inline-flex; align-items: center; gap: 6px;
                    border: 1px solid var(--border-strong);
                    background: transparent;
                    color: var(--ink);
                    border-radius: var(--radius);
                    padding: 7px 15px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: background 0.15s, color 0.15s;
                }
                .btn-view:hover { background: var(--ink); color: #fff; }

                .empty-state { text-align: center; padding: 64px 24px; color: var(--text-muted); font-size: 0.9rem; }
                .empty-state i { font-size: 2.2rem; margin-bottom: 12px; display: block; color: var(--text-muted); }

                .table-footer { padding: 18px 22px; display: flex; justify-content: flex-end; border-top: 1px solid var(--border); }
                .pagination-nav { display: flex; gap: 6px; flex-wrap: wrap; }
                .page-link {
                    min-width: 34px; height: 34px;
                    display: inline-flex; align-items: center; justify-content: center;
                    padding: 0 10px;
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--ink-soft);
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: border-color 0.15s, color 0.15s, background 0.15s;
                }
                .page-link:hover { border-color: var(--ink); color: var(--ink); }
                .page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .page-link.disabled { opacity: 0.35; pointer-events: none; }

                /* ── Modal ── */
                .fc-modal-backdrop {
                    position: fixed; inset: 0; background: rgba(10,10,10,.6);
                    display: flex; align-items: flex-start; justify-content: center;
                    z-index: 1050; padding: 3rem 1rem;
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                }
                .modal-dark {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    color: var(--ink);
                    width: 100%;
                    max-width: 460px;
                    margin: auto 0;
                    max-height: calc(100vh - 6rem);
                    display: flex;
                    flex-direction: column;
                }
                .modal-dark .modal-header {
                    border-bottom: 2px solid var(--ink);
                    padding: 20px 24px 18px;
                    display: flex; align-items: flex-start; justify-content: space-between;
                    flex-shrink: 0;
                }
                .modal-dark .modal-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; margin: 0; }
                .modal-dark .accent-bar { display: block; width: 28px; height: 3px; background: var(--accent); margin-top: 7px; }
                .modal-dark .modal-body { padding: 24px; overflow-y: auto; }
                .modal-dark .btn-close { background: transparent; border: none; color: var(--ink); font-size: 1.1rem; cursor: pointer; line-height: 1; }
                .form-label { font-size: 0.78rem; font-weight: 600; color: var(--text-label); margin-bottom: 6px; display: block; }
                .form-control-dark {
                    width: 100%;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    color: var(--ink);
                    padding: 10px 13px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.15s, box-shadow 0.15s;
                    margin-bottom: 14px;
                }
                .form-control-dark:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-tint); }
                .form-control-dark::placeholder { color: var(--text-muted); }
                textarea.form-control-dark { resize: vertical; min-height: 80px; }
                select.form-control-dark { appearance: none; cursor: pointer; }
                .btn-submit {
                    width: 100%;
                    background: var(--accent);
                    border: none;
                    border-radius: var(--radius);
                    color: #fff;
                    padding: 12px;
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.15s;
                }
                .btn-submit:hover { background: var(--accent-dim); }
                .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

                @media(max-width: 768px) {
                    .admin-table { display: block; overflow-x: auto; white-space: nowrap; }
                    .fc-modal-backdrop { padding: 1.5rem 1rem; }
                    .modal-dark { max-height: calc(100vh - 3rem); }
                }
            `}),e.jsxs("div",{className:"fc-admin-page",children:[e.jsxs("div",{className:"admin-page",children:[e.jsxs("div",{className:"admin-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Skill connections"}),e.jsx("p",{children:"Review and manage connection requests between users and skills."})]}),e.jsxs("button",{className:"btn-primary-pill",onClick:()=>d(!0),children:[e.jsx("i",{className:"ti ti-plus"})," Connection request"]})]}),e.jsxs("div",{className:"stat-row",children:[e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Total requests"}),e.jsx("h4",{children:p.total})]}),e.jsx("i",{className:"ti ti-users-group"})]}),e.jsxs("div",{className:"stat-card pending",children:[e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Pending"}),e.jsx("h4",{children:p.pending})]}),e.jsx("i",{className:"ti ti-clock"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Responded"}),e.jsx("h4",{children:p.responded})]}),e.jsx("i",{className:"ti ti-message-circle"})]})]}),e.jsxs("div",{className:"table-card",children:[e.jsxs("div",{className:"table-toolbar",children:[e.jsxs("form",{onSubmit:N,className:"search-wrap",children:[e.jsx("i",{className:"ti ti-search"}),e.jsx("input",{type:"text",placeholder:"Search by name or email…",value:c,onChange:a=>w(a.target.value)})]}),e.jsx("div",{className:"status-filters",children:[{key:"",label:"All"},{key:"pending",label:"Pending"},{key:"accepted",label:"Accepted"},{key:"rejected",label:"Rejected"}].map(a=>e.jsx("button",{className:`status-chip ${b===a.key?"active":""}`,onClick:()=>S(a.key),children:a.label},a.key||"all"))})]}),s.length>0?e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Requester"}),e.jsx("th",{children:"Skill"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Requested at"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:s.map((a,l)=>{var u,f,v;return e.jsxs("tr",{children:[e.jsx("td",{children:(r.from??1)+l}),e.jsx("td",{children:e.jsxs("div",{className:"cell-person",children:[e.jsx("div",{className:"avatar-circle",children:j(a.name)}),e.jsxs("div",{children:[e.jsx("h6",{children:a.name??"N/A"}),e.jsx("p",{children:a.email??""})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"cell-person",children:[e.jsx("div",{className:"avatar-circle",children:j((u=a.talent)==null?void 0:u.name)}),e.jsxs("div",{children:[e.jsx("h6",{children:(f=a.talent)==null?void 0:f.name}),e.jsx("p",{children:(v=a.talent)==null?void 0:v.email})]})]})}),e.jsx("td",{children:e.jsx(R,{status:a.status})}),e.jsx("td",{children:new Date(a.created_at).toLocaleString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}),e.jsx("td",{children:e.jsxs(k,{href:x.connectionShow(a.id??0),className:"btn-view",children:[e.jsx("i",{className:"ti ti-eye"})," ","View"]})})]},a.id)})})]})}):e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-inbox"}),"No connection requests found at this moment."]}),g.length>3&&e.jsx("div",{className:"table-footer",children:e.jsx("div",{className:"pagination-nav",children:g.map((a,l)=>e.jsx(k,{href:a.url||"#",className:`page-link ${a.active?"active":""} ${a.url?"":"disabled"}`,preserveScroll:!0,children:D(a.label)},l))})})]})]}),o&&e.jsx("div",{className:"fc-modal-backdrop",onClick:()=>d(!1),children:e.jsxs("div",{className:"modal-dark",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"modal-title",children:"New connection request"}),e.jsx("span",{className:"accent-bar"})]}),e.jsx("button",{className:"btn-close",onClick:()=>d(!1),children:"✕"})]}),e.jsx("form",{onSubmit:z,children:e.jsxs("div",{className:"modal-body",children:[e.jsx("label",{className:"form-label",children:"Talent"}),n.length>0?e.jsxs("select",{className:"form-control-dark",value:t.data.talent_id,onChange:a=>t.setData("talent_id",a.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select a talent"}),n.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}):e.jsx("input",{type:"text",className:"form-control-dark",placeholder:"Talent name",value:t.data.talent_id,onChange:a=>t.setData("talent_id",a.target.value),required:!0}),e.jsx("label",{className:"form-label",children:"Requester name"}),e.jsx("input",{type:"text",className:"form-control-dark",placeholder:"Full name",value:t.data.name,onChange:a=>t.setData("name",a.target.value),required:!0}),e.jsx("label",{className:"form-label",children:"Requester email"}),e.jsx("input",{type:"email",className:"form-control-dark",placeholder:"email@example.com",value:t.data.email,onChange:a=>t.setData("email",a.target.value),required:!0}),e.jsx("label",{className:"form-label",children:"Message (optional)"}),e.jsx("textarea",{className:"form-control-dark",placeholder:"Add a note about this request…",value:t.data.message,onChange:a=>t.setData("message",a.target.value)}),e.jsx("button",{type:"submit",className:"btn-submit",disabled:t.processing,children:t.processing?"Submitting…":"Submit request"})]})})]})})]})]})}E.layout=r=>e.jsx(q,{children:r,title:"Talent Connection"});export{E as default};
