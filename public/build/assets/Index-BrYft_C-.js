import{d as k,r as u,j as e,H as w,L as f,u as h}from"./app-ClS8wKza.js";import{A as N}from"./AppLayout-CotiXTZL.js";const F=["av-navy","av-amber","av-teal","av-plum"];function L({users:a}){var x,r,m,b;const{flash:n}=k().props,[t,i]=u.useState(""),d=a&&!Array.isArray(a)&&Array.isArray(a.data),o=d?a.data:a||[],s=d?a:null,c=u.useMemo(()=>{if(!t.trim())return o;const l=t.toLowerCase();return o.filter(p=>[p.name,p.email,p.role,p.active?"active":"inactive"].filter(Boolean).some(y=>String(y).toLowerCase().includes(l)))},[t,o]);return e.jsxs(N,{title:"Users",children:[e.jsx(w,{title:"Users"}),e.jsx(U,{}),e.jsxs("div",{className:"container-fluid px-4 py-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-end mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"page-eyebrow",children:"Directory"}),e.jsx("div",{className:"page-title",children:"User Management"}),e.jsx("div",{className:"page-sub mt-1",children:"Manage platform users, roles, and access"})]}),e.jsxs("button",{type:"button",className:"btn-accent","data-bs-toggle":"modal","data-bs-target":"#addUserModal",children:[e.jsx(v,{})," Add User"]})]}),(n==null?void 0:n.success)&&e.jsxs("div",{className:"alert border-0 rounded-3 d-flex align-items-center gap-2 mb-4 py-3",role:"alert",style:{background:"var(--success-soft)",color:"var(--success)",fontSize:13.5},children:[e.jsx(j,{})," ",n.success]}),e.jsxs("div",{className:"ui-card",children:[e.jsxs("div",{className:"card-bar",children:[e.jsxs("span",{className:"card-bar-label",children:["All Users",e.jsx("span",{className:"count-badge",children:o.length})]}),e.jsxs("div",{className:"search-wrap",children:[e.jsx(B,{className:"ni"}),e.jsx("input",{type:"text",className:"search-input",placeholder:"Search users…",value:t,onChange:l=>i(l.target.value)})]})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"ui-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"User"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Joined"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:c.length===0?e.jsx("tr",{className:"empty-row",children:e.jsxs("td",{colSpan:6,children:[e.jsx(M,{}),"No users found."]})}):c.map((l,p)=>e.jsx(C,{user:l,avatarClass:F[p%4]},l.id))})]})}),s&&e.jsxs("div",{className:"pg-bar",children:[e.jsxs("span",{className:"pg-info",children:["Showing ",((x=s.meta)==null?void 0:x.from)??s.from," –"," ",((r=s.meta)==null?void 0:r.to)??s.to," of ",((m=s.meta)==null?void 0:m.total)??s.total," users"]}),e.jsx("div",{className:"d-flex gap-1",children:(((b=s.meta)==null?void 0:b.links)??s.links??[]).map((l,p)=>e.jsx(f,{href:l.url||"#",preserveScroll:!0,className:`pg-link ${l.active?"active":""} ${l.url?"":"disabled"}`,dangerouslySetInnerHTML:{__html:l.label}},p))})]})]})]}),o.map(l=>e.jsx(E,{user:l},`edit-${l.id}`)),o.map(l=>e.jsx(S,{user:l},`delete-${l.id}`)),e.jsx(A,{})]})}function C({user:a,avatarClass:n}){const t=(a.name||"").slice(0,2).toUpperCase(),i=a.created_at?new Date(a.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"";return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("span",{className:"id-pill",children:["#",String(a.id).padStart(3,"0")]})}),e.jsx("td",{children:e.jsxs("div",{className:"user-cell",children:[e.jsx("div",{className:`avatar ${n}`,children:t}),e.jsxs("div",{children:[e.jsx("div",{className:"user-name",children:a.name}),e.jsx("div",{className:"user-email",children:a.email})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`role-badge ${a.role==="admin"?"role-admin":"role-user"}`,children:a.role?a.role[0].toUpperCase()+a.role.slice(1):""})}),e.jsx("td",{children:e.jsx("span",{className:`status-dot ${a.active?"status-active":"status-inactive"}`,children:a.active?"Active":"Inactive"})}),e.jsx("td",{style:{fontSize:13,color:"var(--ink-faint)"},children:i}),e.jsx("td",{children:e.jsxs("div",{className:"action-icons",children:[e.jsx(f,{href:route("admin.users.show",a.id),className:"action-btn",title:"View profile",children:e.jsx("span",{className:"text-info",children:"View"})}),e.jsx("button",{type:"button",className:"action-btn btn-edit",title:"Edit","data-bs-toggle":"modal","data-bs-target":`#editModal${a.id}`,children:e.jsx("span",{className:"text-warning",children:"Edit"})}),e.jsx("button",{type:"button",className:"action-btn btn-delete",title:"Delete","data-bs-toggle":"modal","data-bs-target":`#deleteModal${a.id}`,children:e.jsx("span",{className:"text-danger",children:"Delete"})})]})})]})}function A(){const a=u.useRef(null),{data:n,setData:t,post:i,processing:d,errors:o,reset:s}=h({name:"",email:"",password:"",role:"user",active:"1"}),c=()=>{var m;const r=(m=window.bootstrap)==null?void 0:m.Modal.getInstance(a.current);r==null||r.hide()},x=r=>{r.preventDefault(),i(route("admin.users.store"),{preserveScroll:!0,onSuccess:()=>{s(),c()}})};return e.jsx("div",{className:"modal fade",id:"addUserModal",ref:a,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("form",{className:"modal-content",onSubmit:x,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title",children:[e.jsx(v,{style:{color:"var(--accent)",marginRight:8}})," Add New User"]}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsxs("div",{className:"modal-body d-grid gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Full Name"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g. Alice Bennett",value:n.name,onChange:r=>t("name",r.target.value),required:!0}),o.name&&e.jsx("small",{className:"text-danger",children:o.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsx("input",{type:"email",className:"form-control",placeholder:"alice@example.com",value:n.email,onChange:r=>t("email",r.target.value),required:!0}),o.email&&e.jsx("small",{className:"text-danger",children:o.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsx("input",{type:"password",className:"form-control",placeholder:"••••••••",value:n.password,onChange:r=>t("password",r.target.value),required:!0}),o.password&&e.jsx("small",{className:"text-danger",children:o.password})]}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Role"}),e.jsxs("select",{className:"form-select",value:n.role,onChange:r=>t("role",r.target.value),children:[e.jsx("option",{value:"user",children:"User"}),e.jsx("option",{value:"admin",children:"Admin"})]})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Status"}),e.jsxs("select",{className:"form-select",value:n.active,onChange:r=>t("active",r.target.value),children:[e.jsx("option",{value:"1",children:"Active"}),e.jsx("option",{value:"0",children:"Inactive"})]})]})]})]}),e.jsxs("div",{className:"modal-footer gap-2",children:[e.jsx("button",{type:"button",className:"btn-cancel","data-bs-dismiss":"modal",children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-primary-sm",disabled:d,children:[e.jsx(j,{style:{marginRight:4}})," ",d?"Creating…":"Create User"]})]})]})})})}function E({user:a}){const n=u.useRef(null),{data:t,setData:i,put:d,processing:o,errors:s}=h({name:a.name??"",email:a.email??"",password:"",role:a.role??"user",active:a.active?"1":"0"}),c=()=>{var m;const r=(m=window.bootstrap)==null?void 0:m.Modal.getInstance(n.current);r==null||r.hide()},x=r=>{r.preventDefault(),d(route("admin.users.update",a.id),{preserveScroll:!0,onSuccess:c})};return e.jsx("div",{className:"modal fade",id:`editModal${a.id}`,ref:n,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("form",{className:"modal-content",onSubmit:x,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title",children:[e.jsx(z,{style:{color:"var(--warning)",marginRight:8}})," Edit User"]}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsxs("div",{className:"modal-body d-grid gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Full Name"}),e.jsx("input",{type:"text",className:"form-control",value:t.name,onChange:r=>i("name",r.target.value),required:!0}),s.name&&e.jsx("small",{className:"text-danger",children:s.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsx("input",{type:"email",className:"form-control",value:t.email,onChange:r=>i("email",r.target.value),required:!0}),s.email&&e.jsx("small",{className:"text-danger",children:s.email})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label",children:["New Password ",e.jsx("small",{className:"text-muted fw-normal",children:"(leave blank to keep current)"})]}),e.jsx("input",{type:"password",className:"form-control",placeholder:"••••••••",value:t.password,onChange:r=>i("password",r.target.value)}),s.password&&e.jsx("small",{className:"text-danger",children:s.password})]}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Role"}),e.jsxs("select",{className:"form-select",value:t.role,onChange:r=>i("role",r.target.value),children:[e.jsx("option",{value:"admin",children:"Admin"}),e.jsx("option",{value:"user",children:"User"})]}),s.role&&e.jsx("small",{className:"text-danger",children:s.role})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Status"}),e.jsxs("select",{className:"form-select",value:t.active,onChange:r=>i("active",r.target.value),children:[e.jsx("option",{value:"1",children:"Active"}),e.jsx("option",{value:"0",children:"Inactive"})]}),s.active&&e.jsx("small",{className:"text-danger",children:s.active})]})]})]}),e.jsxs("div",{className:"modal-footer gap-2",children:[e.jsx("button",{type:"button",className:"btn-cancel","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-primary-sm",disabled:o,children:o?"Saving…":"Save Changes"})]})]})})})}function S({user:a}){const n=u.useRef(null),{delete:t,processing:i}=h({}),d=()=>{var c;const s=(c=window.bootstrap)==null?void 0:c.Modal.getInstance(n.current);s==null||s.hide()},o=s=>{s.preventDefault(),t(route("admin.users.destroy",a.id),{preserveScroll:!0,onSuccess:d})};return e.jsx("div",{className:"modal fade",id:`deleteModal${a.id}`,ref:n,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-sm",children:e.jsxs("form",{className:"modal-content",onSubmit:o,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title",children:[e.jsx(g,{style:{color:"var(--danger)",marginRight:8}})," Delete User"]}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("div",{className:"warn-box",children:[e.jsx(D,{className:"ni"}),e.jsxs("div",{children:[e.jsx("span",{className:"warn-name",children:a.name}),"Permanently deletes this user and all associated data. This cannot be undone."]})]})}),e.jsxs("div",{className:"modal-footer gap-2",children:[e.jsx("button",{type:"button",className:"btn-cancel","data-bs-dismiss":"modal",children:"Keep User"}),e.jsxs("button",{type:"submit",className:"btn-danger-sm",disabled:i,children:[e.jsx(g,{style:{marginRight:4}})," ",i?"Deleting…":"Delete"]})]})]})})})}function v(a){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",...a,children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})}function j(a){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",...a,children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}function B(a){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",...a,children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]})}function z(a){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",...a,children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}function g(a){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",...a,children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}function D(a){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",...a,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}function M(){return e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",style:{display:"block",margin:"0 auto 10px",opacity:.3},children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}function U(){return e.jsx("style",{children:`
            @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

            :root {
                --ink:          #10141F;
                --ink-2:        #4A5268;
                --ink-faint:    #97A0B3;
                --line:         #E3E6EC;
                --line-soft:    #EEF0F4;
                --canvas:       #F5F6F9;
                --surface:      #FFFFFF;
                --surface-alt:  #FAFBFD;

                --accent:       #1E3A5F;
                --accent-ink:   #14273E;
                --accent-soft:  #E9EFF6;

                --success:      #0F7B4C;
                --success-soft: #E5F6EC;
                --danger:       #C0392B;
                --danger-soft:  #FBEAE8;
                --warning:      #B7791F;
                --warning-soft: #FBF1DF;

                --font-display: 'Fraunces', serif;
                --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                --font-mono: 'JetBrains Mono', ui-monospace, monospace;
            }

            [data-bs-theme="dark"] {
                --ink:          #EDF0F7;
                --ink-2:        #B4BCD1;
                --ink-faint:    #6E7893;
                --line:         rgba(237, 240, 247, 0.10);
                --line-soft:    rgba(237, 240, 247, 0.06);
                --canvas:       #0B0E16;
                --surface:      #12151F;
                --surface-alt:  #171B27;

                --accent:       #7FA8D9;
                --accent-ink:   #9CC0EE;
                --accent-soft:  rgba(127, 168, 217, 0.14);

                --success:      #34D399;
                --success-soft: rgba(52, 211, 153, 0.14);
                --danger:       #F87171;
                --danger-soft:  rgba(248, 113, 113, 0.14);
                --warning:      #FBBF24;
                --warning-soft: rgba(251, 191, 36, 0.14);
            }

            body { background: var(--canvas); font-family: var(--font-sans); transition: background .2s; }
            [data-bs-theme="dark"] .btn-close { filter: invert(1) grayscale(100%); }

            .page-eyebrow {
                font-family: var(--font-mono); font-size: 10px; font-weight: 600;
                letter-spacing: .09em; text-transform: uppercase; color: var(--ink-faint);
                margin-bottom: 4px;
            }
            .page-title { font-family: var(--font-display); font-size: 24px; font-weight: 600; color: var(--ink); }
            .page-sub   { font-size: 13px; color: var(--ink-faint); }

            .btn-accent {
                background: var(--accent); color: #fff; border: none;
                border-radius: 8px; font-size: 13px; font-weight: 500;
                padding: 9px 18px; display: inline-flex; align-items: center; gap: 7px;
                transition: background .18s; text-decoration: none; cursor: pointer;
            }
            .btn-accent:hover { background: var(--accent-ink); color: #fff; }

            .ui-card {
                background: var(--surface); border: 1px solid var(--line);
                border-radius: 12px; overflow: hidden;
                box-shadow: 0 1px 2px rgba(16,20,31,.03);
            }
            .card-bar {
                padding: 14px 20px; border-bottom: 1px solid var(--line);
                display: flex; align-items: center; justify-content: space-between;
            }
            .card-bar-label { font-size: 13px; font-weight: 600; color: var(--ink-2); }
            .count-badge {
                background: var(--accent-soft); color: var(--accent);
                border-radius: 5px; font-family: var(--font-mono); font-size: 11px; font-weight: 600;
                padding: 2px 8px; margin-left: 8px;
            }

            .search-wrap { position: relative; display: flex; align-items: center; }
            .search-wrap .ni { position: absolute; left: 10px; color: var(--ink-faint); }
            .search-input {
                border: 1px solid var(--line); border-radius: 8px;
                padding: 7px 12px 7px 32px; font-size: 13px; color: var(--ink);
                background: var(--surface-alt); outline: none; width: 210px;
                transition: border-color .15s, background .15s;
            }
            .search-input:focus { border-color: var(--accent); background: var(--surface); box-shadow: 0 0 0 3px rgba(30,58,95,.10); }

            .ui-table { width: 100%; border-collapse: collapse; }
            .ui-table thead tr { background: var(--surface-alt); border-bottom: 1px solid var(--line); }
            .ui-table thead th {
                padding: 11px 20px; font-family: var(--font-mono); font-size: 10.5px; font-weight: 600;
                text-transform: uppercase; letter-spacing: .08em; color: var(--ink-faint);
                white-space: nowrap; text-align: left;
            }
            .ui-table tbody tr { border-bottom: 1px solid var(--line-soft); transition: background .12s; }
            .ui-table tbody tr:last-child { border-bottom: none; }
            .ui-table tbody tr:hover { background: var(--surface-alt); }
            .ui-table tbody td { padding: 13px 20px; font-size: 13.5px; color: var(--ink-2); vertical-align: middle; }

            .user-cell { display: flex; align-items: center; gap: 11px; }
            .avatar {
                width: 34px; height: 34px; border-radius: 10px;
                font-family: var(--font-mono); font-size: 11.5px; font-weight: 600;
                display: flex; align-items: center; justify-content: center;
                flex-shrink: 0; border: 1px solid;
            }
            .av-navy  { background: var(--accent-soft); color: var(--accent); border-color: #C7D5E6; }
            .av-amber { background: var(--warning-soft); color: var(--warning); border-color: #EAD3A3; }
            .av-teal  { background: var(--success-soft); color: var(--success); border-color: #B8E3CB; }
            .av-plum  { background: #F3E8F3; color: #8A3B8A; border-color: #E3C6E3; }
            [data-bs-theme="dark"] .av-plum { background: rgba(196, 132, 196, 0.14); color: #D9A6D9; border-color: rgba(196, 132, 196, 0.3); }

            .user-name  { color: var(--ink); font-weight: 600; font-size: 13.5px; }
            .user-email { color: var(--ink-faint); font-size: 12px; margin-top: 1px; }

            .id-pill {
                background: var(--surface-alt); color: var(--ink-faint);
                border-radius: 5px; font-size: 11.5px; font-family: var(--font-mono);
                font-weight: 600; padding: 2px 7px; border: 1px solid var(--line);
            }
            .role-badge { border-radius: 6px; font-size: 11.5px; font-weight: 600; padding: 3px 10px; text-transform: uppercase; letter-spacing: .03em; }
            .role-admin { background: var(--accent-soft); color: var(--accent); }
            .role-user  { background: var(--surface-alt); color: var(--ink-2); border: 1px solid var(--line); }

            .status-dot { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 500; }
            .status-dot::before { content: ''; width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
            .status-active   { color: var(--success); } .status-active::before   { background: var(--success); }
            .status-inactive { color: var(--danger);  } .status-inactive::before { background: var(--danger); }

            .action-icons { display: flex; align-items: center; gap: 4px; }
            .action-btn {
                border-radius: 7px;
                border: 1px solid var(--line); background: var(--surface);
                color: var(--ink-faint);
                display: inline-flex; align-items: center; justify-content: center;
                cursor: pointer; transition: all .15s; text-decoration: none;
                font-size: 12px; font-weight: 500; padding: 5px 10px;
            }
            .action-btn:hover           { background: var(--accent-soft); color: var(--accent); border-color: #C7D5E6; }
            .action-btn.btn-edit:hover  { background: var(--warning-soft); color: var(--warning); border-color: #EAD3A3; }
            .action-btn.btn-delete:hover{ background: var(--danger-soft); color: var(--danger); border-color: #EFC0B8; }

            .pg-bar { padding: 13px 20px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
            .pg-info { font-size: 12.5px; color: var(--ink-faint); }
            .pg-link {
                display: inline-flex; align-items: center; justify-content: center;
                min-width: 30px; height: 30px; padding: 0 8px; border-radius: 7px;
                border: 1px solid var(--line); color: var(--ink-2); font-size: 12.5px;
                text-decoration: none; transition: background .12s, color .12s;
            }
            .pg-link:hover { background: var(--accent-soft); color: var(--accent); }
            .pg-link.active { background: var(--accent); color: #fff; border-color: var(--accent); }
            .pg-link.disabled { opacity: .4; pointer-events: none; }

            .modal-content { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: 14px !important; color: var(--ink-2); font-family: var(--font-sans); }
            .modal-header { border-bottom: 1px solid var(--line) !important; padding: 20px 24px 16px !important; }
            .modal-title  { font-family: var(--font-display); font-weight: 600; font-size: 16px; color: var(--ink); display: flex; align-items: center; }
            .modal-footer { border-top: 1px solid var(--line) !important; padding: 14px 24px !important; }
            .modal-body   { padding: 20px 24px !important; }

            .form-label { color: var(--ink-2); font-size: 12px; font-weight: 600; margin-bottom: 5px; letter-spacing: .2px; display: block; }
            .form-control, .form-select {
                background: var(--surface-alt); border: 1px solid var(--line);
                border-radius: 8px; color: var(--ink); font-size: 13.5px; padding: 9px 12px;
                transition: border-color .15s, box-shadow .15s; width: 100%;
            }
            .form-control:focus, .form-select:focus {
                border-color: var(--accent); background: var(--surface);
                box-shadow: 0 0 0 3px rgba(30,58,95,.10); outline: none;
            }
            .form-control::placeholder { color: var(--ink-faint); }

            .btn-cancel {
                background: var(--surface-alt); border: 1px solid var(--line);
                color: var(--ink-2); border-radius: 8px;
                font-size: 13px; font-weight: 500; padding: 8px 18px; cursor: pointer;
                transition: background .15s;
            }
            .btn-cancel:hover { background: var(--line-soft); }
            .btn-primary-sm {
                background: var(--accent); border: none;
                color: #fff; border-radius: 8px;
                font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
                display: inline-flex; align-items: center; transition: background .15s;
            }
            .btn-primary-sm:hover { background: var(--accent-ink); }
            .btn-primary-sm:disabled { opacity: .6; cursor: not-allowed; }
            .btn-danger-sm {
                background: var(--danger); border: none;
                color: #fff; border-radius: 8px;
                font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
                display: inline-flex; align-items: center; transition: background .15s;
            }
            .btn-danger-sm:hover { background: #A5301F; }
            [data-bs-theme="dark"] .btn-danger-sm:hover { background: #DC2626; }
            .btn-danger-sm:disabled { opacity: .6; cursor: not-allowed; }

            .warn-box {
                background: var(--danger-soft); border: 1px solid #EFC0B8; border-radius: 10px;
                padding: 14px 16px; display: flex; align-items: flex-start; gap: 12px;
                color: var(--danger); font-size: 13.5px;
            }
            [data-bs-theme="dark"] .warn-box { border-color: rgba(248, 113, 113, 0.35); }
            .warn-box .ni { flex-shrink: 0; margin-top: 1px; }
            .warn-name { font-weight: 700; color: #A5301F; margin-bottom: 3px; display: block; }
            [data-bs-theme="dark"] .warn-name { color: #F87171; }

            .empty-row td { text-align: center; padding: 52px 20px; color: var(--ink-faint); }
        `})}export{L as default};
