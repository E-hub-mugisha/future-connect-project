import{r as m,u as q,j as e,H as C,L as j,a as R}from"./app-ClS8wKza.js";import{A as D}from"./AppLayout-CotiXTZL.js";const x={connectionShow:r=>`/admin/connections/show/${r}`,connectionsIndex:"/admin/connections",connectionStore:"/admin/connections"};function y(r){return r?r.split(" ").filter(Boolean).slice(0,2).map(s=>{var o;return(o=s[0])==null?void 0:o.toUpperCase()}).join(""):"—"}function A(r){return r.replace(/&laquo;/g,"‹").replace(/&raquo;/g,"›").replace(/Previous/i,"Prev")}function T({status:r}){const s=(r??"pending").toLowerCase(),n={pending:{cls:"badge-pending",label:"Pending",icon:"ti-clock"},accepted:{cls:"badge-success",label:"Accepted",icon:"ti-check"},approved:{cls:"badge-success",label:"Approved",icon:"ti-check"},rejected:{cls:"badge-danger",label:"Rejected",icon:"ti-x"},declined:{cls:"badge-danger",label:"Declined",icon:"ti-x"}}[s]??{cls:"badge-pending",label:r??"Pending",icon:"ti-clock"};return e.jsxs("span",{className:`badge ${n.cls}`,children:[e.jsx("i",{className:`ti ${n.icon}`})," ",n.label]})}function L({connections:r,filters:s={},talents:o=[]}){const[n,d]=m.useState(!1),[c,w]=m.useState(s.search??""),[b,k]=m.useState(s.status??""),i=(r==null?void 0:r.data)??[],g=(r==null?void 0:r.links)??[],p={total:(r==null?void 0:r.total)??i.length,pending:i.filter(a=>(a.status??"pending").toLowerCase()==="pending").length,responded:i.filter(a=>!!a.response).length},h=(a=c,l=b)=>{R.get(x.connectionsIndex,{search:a,status:l},{preserveState:!0,preserveScroll:!0,replace:!0})},N=a=>{a.preventDefault(),h()},S=a=>{k(a),h(c,a)},t=q({talent_id:"",name:"",email:"",message:""}),z=a=>{a.preventDefault(),t.post(x.connectionStore,{preserveScroll:!0,onSuccess:()=>{t.reset(),d(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"Talent Connection"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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

                .admin-header {
                    display: flex; align-items: flex-start; justify-content: space-between;
                    gap: 20px; flex-wrap: wrap;
                    margin-bottom: 28px;
                }
                .admin-header h2 {
                    font-family: var(--font-head);
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 0 0 4px;
                }
                .admin-header p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; }

                .btn-primary-pill {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    color: #fff;
                    border: none;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
                    box-shadow: 0 4px 18px var(--accent-glow);
                    white-space: nowrap;
                }
                .btn-primary-pill:hover { background: var(--accent-dim); transform: translateY(-1px); }

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
                .stat-card.pending .stat-icon { background: rgba(232,185,74,0.12); color: var(--warn); }
                .stat-meta p { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 4px; }
                .stat-meta h4 { font-family: var(--font-head); font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin: 0; }

                /* ── Toolbar ── */
                .table-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
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
                    transition: border-color 0.2s;
                }
                .search-wrap:focus-within { border-color: var(--border-accent); }
                .search-wrap i { color: var(--text-muted); font-size: 0.95rem; }
                .search-wrap input {
                    background: transparent; border: none; outline: none;
                    color: var(--text-primary); font-size: 0.85rem; width: 100%;
                    font-family: var(--font-body);
                }
                .search-wrap input::placeholder { color: var(--text-muted); }

                .status-filters { display: flex; gap: 8px; flex-wrap: wrap; }
                .status-chip {
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
                .status-chip:hover { border-color: var(--border-accent); color: var(--accent); }
                .status-chip.active { background: var(--bg-glass2); border-color: var(--border-accent); color: var(--accent); }

                /* ── Table ── */
                .admin-table { width: 100%; border-collapse: collapse; }
                .admin-table th {
                    text-align: left;
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-muted);
                    font-weight: 600;
                    padding: 14px 22px;
                    border-bottom: 1px solid var(--border);
                    white-space: nowrap;
                }
                .fc-admin-page .admin-table tr td {
    background-color: var(--bg-card) !important;
    padding: 16px 22px;
    border-bottom: 1px solid var(--border);
    font-size: 0.85rem;
    color: var(--text-secondary);
    vertical-align: middle;
}
                .admin-table tbody tr:last-child td { border-bottom: none; }
                .admin-table tbody tr { transition: background 0.15s; }
                .admin-table tbody tr:hover { background: var(--bg-glass); }

                .cell-person { display: flex; align-items: center; gap: 12px; }
                .avatar-circle {
                    width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.78rem;
                }
                .cell-person h6 { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0 0 2px; }
                .cell-person p { font-size: 0.75rem; color: var(--text-muted); margin: 0; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    font-size: 0.72rem;
                    font-weight: 700;
                }
                .badge-success { background: rgba(0,166,103,0.12); color: var(--accent); }
                .badge-danger { background: rgba(201,74,63,0.12); color: var(--danger); }
                .badge-pending { background: rgba(179,130,15,0.12); color: var(--warn); }

                .message-cell {
                    max-width: 260px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .btn-view {
                    display: inline-flex; align-items: center; gap: 6px;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 7px 16px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .btn-view:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }

                .empty-state { text-align: center; padding: 64px 24px; color: var(--text-muted); font-size: 0.9rem; }
                .empty-state i { font-size: 2.2rem; margin-bottom: 12px; display: block; color: var(--text-muted); }

                .table-footer { padding: 18px 22px; display: flex; justify-content: flex-end; }
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

                /* ── Modal ── */
                .fc-modal-backdrop {
                    position: fixed; inset: 0; background: rgba(0,0,0,.45);
                    display: flex; align-items: flex-start; justify-content: center;
                    z-index: 1050; padding: 3rem 1rem;
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                }
                .modal-dark {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    color: var(--text-primary);
                    width: 100%;
                    max-width: 480px;
                    margin: auto 0;
                    max-height: calc(100vh - 6rem);
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 12px 40px rgba(0,0,0,0.12);
                }
                .modal-dark .modal-header {
                    border-bottom: 1px solid var(--border);
                    padding: 20px 24px 18px;
                    display: flex; align-items: flex-start; justify-content: space-between;
                    flex-shrink: 0;
                }
                .modal-dark .modal-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; margin: 0; }
                .modal-dark .accent-bar { display: block; width: 32px; height: 3px; background: var(--accent); border-radius: 2px; margin-top: 5px; }
                .modal-dark .modal-body { padding: 24px; overflow-y: auto; }
                .modal-dark .btn-close { background: transparent; border: none; color: var(--text-primary); font-size: 1.1rem; cursor: pointer; }
                .form-label { font-size: 0.8rem; font-weight: 500; color: var(--text-secondary); margin-bottom: 6px; display: block; }
                .form-control-dark {
                    width: 100%;
                    background: rgba(0,0,0,0.02);
                    border: 1px solid var(--border);
                    border-radius: 10px;
                    color: var(--text-primary);
                    padding: 11px 14px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.2s;
                    margin-bottom: 14px;
                }
                .form-control-dark:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }
                .form-control-dark::placeholder { color: var(--text-muted); }
                textarea.form-control-dark { resize: vertical; min-height: 80px; }
                select.form-control-dark { appearance: none; cursor: pointer; }
                .btn-submit {
                    width: 100%;
                    background: var(--accent);
                    border: none;
                    border-radius: var(--radius-pill);
                    color: #fff;
                    padding: 12px;
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s, box-shadow 0.2s;
                    box-shadow: 0 4px 18px var(--accent-glow);
                }
                .btn-submit:hover { background: var(--accent-dim); }
                .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

                @media(max-width: 768px) {
                    .admin-table { display: block; overflow-x: auto; white-space: nowrap; }
                    .fc-modal-backdrop { padding: 1.5rem 1rem; }
                    .modal-dark { max-height: calc(100vh - 3rem); }
                }
            `}),e.jsxs("div",{className:"fc-admin-page",children:[e.jsxs("div",{className:"admin-page",children:[e.jsxs("div",{className:"admin-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Talent Connection"}),e.jsx("p",{children:"Review and manage connection requests between users and talents."})]}),e.jsxs("button",{className:"btn-primary-pill",onClick:()=>d(!0),children:[e.jsx("i",{className:"ti ti-plus"})," Connection Request"]})]}),e.jsxs("div",{className:"stat-row",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"ti ti-users-group"})}),e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Total Requests"}),e.jsx("h4",{children:p.total})]})]}),e.jsxs("div",{className:"stat-card pending",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"ti ti-clock"})}),e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Pending"}),e.jsx("h4",{children:p.pending})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"ti ti-message-circle"})}),e.jsxs("div",{className:"stat-meta",children:[e.jsx("p",{children:"Responded"}),e.jsx("h4",{children:p.responded})]})]})]}),e.jsxs("div",{className:"table-card",children:[e.jsxs("div",{className:"table-toolbar",children:[e.jsxs("form",{onSubmit:N,className:"search-wrap",children:[e.jsx("i",{className:"ti ti-search"}),e.jsx("input",{type:"text",placeholder:"Search by name or email…",value:c,onChange:a=>w(a.target.value)})]}),e.jsx("div",{className:"status-filters",children:[{key:"",label:"All"},{key:"pending",label:"Pending"},{key:"accepted",label:"Accepted"},{key:"rejected",label:"Rejected"}].map(a=>e.jsx("button",{className:`status-chip ${b===a.key?"active":""}`,onClick:()=>S(a.key),children:a.label},a.key||"all"))})]}),i.length>0?e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Requester"}),e.jsx("th",{children:"Talent"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Requested At"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:i.map((a,l)=>{var u,f,v;return e.jsxs("tr",{children:[e.jsx("td",{children:(r.from??1)+l}),e.jsx("td",{children:e.jsxs("div",{className:"cell-person",children:[e.jsx("div",{className:"avatar-circle",children:y(a.name)}),e.jsxs("div",{children:[e.jsx("h6",{children:a.name??"N/A"}),e.jsx("p",{children:a.email??""})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"cell-person",children:[e.jsx("div",{className:"avatar-circle",children:y((u=a.talent)==null?void 0:u.name)}),e.jsxs("div",{children:[e.jsx("h6",{children:(f=a.talent)==null?void 0:f.name}),e.jsx("p",{children:(v=a.talent)==null?void 0:v.email})]})]})}),e.jsx("td",{children:e.jsx(T,{status:a.status})}),e.jsx("td",{children:new Date(a.created_at).toLocaleString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}),e.jsx("td",{children:e.jsxs(j,{href:x.connectionShow(a.id??0),className:"btn-view",children:[e.jsx("i",{className:"ti ti-eye"})," ","View"]})})]},a.id)})})]})}):e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-inbox"}),"No connection requests found at this moment."]}),g.length>3&&e.jsx("div",{className:"table-footer",children:e.jsx("div",{className:"pagination-nav",children:g.map((a,l)=>e.jsx(j,{href:a.url||"#",className:`page-link ${a.active?"active":""} ${a.url?"":"disabled"}`,preserveScroll:!0,children:A(a.label)},l))})})]})]}),n&&e.jsx("div",{className:"fc-modal-backdrop",onClick:()=>d(!1),children:e.jsxs("div",{className:"modal-dark",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"modal-title",children:"New Connection Request"}),e.jsx("span",{className:"accent-bar"})]}),e.jsx("button",{className:"btn-close",onClick:()=>d(!1),children:"✕"})]}),e.jsx("form",{onSubmit:z,children:e.jsxs("div",{className:"modal-body",children:[e.jsx("label",{className:"form-label",children:"Talent"}),o.length>0?e.jsxs("select",{className:"form-control-dark",value:t.data.talent_id,onChange:a=>t.setData("talent_id",a.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select a talent"}),o.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}):e.jsx("input",{type:"text",className:"form-control-dark",placeholder:"Talent name",value:t.data.talent_id,onChange:a=>t.setData("talent_id",a.target.value),required:!0}),e.jsx("label",{className:"form-label",children:"Requester Name"}),e.jsx("input",{type:"text",className:"form-control-dark",placeholder:"Full name",value:t.data.name,onChange:a=>t.setData("name",a.target.value),required:!0}),e.jsx("label",{className:"form-label",children:"Requester Email"}),e.jsx("input",{type:"email",className:"form-control-dark",placeholder:"email@example.com",value:t.data.email,onChange:a=>t.setData("email",a.target.value),required:!0}),e.jsx("label",{className:"form-label",children:"Message (optional)"}),e.jsx("textarea",{className:"form-control-dark",placeholder:"Add a note about this request…",value:t.data.message,onChange:a=>t.setData("message",a.target.value)}),e.jsx("button",{type:"submit",className:"btn-submit",disabled:t.processing,children:t.processing?"Submitting…":"Submit Request"})]})})]})})]})]})}L.layout=r=>e.jsx(D,{children:r,title:"Talent Connection"});export{L as default};
