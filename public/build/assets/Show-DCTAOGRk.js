import{r as v,j as e,H as N,u as g}from"./app-CgjB0zLb.js";import{A as k}from"./AppLayout-BhRRfzUA.js";const w=[{key:"personal",label:"Personal Info",icon:"user"},{key:"notifications",label:"Notifications",icon:"bell"},{key:"activity",label:"Account Activity",icon:"activity"},{key:"security",label:"Security Settings",icon:"lock"},{key:"social",label:"Connected Accounts",icon:"grid"}];function V({user:a,appName:r="App"}){const[t,o]=v.useState("personal"),c=a.created_at?new Date(a.created_at).getFullYear():"",d=a.created_at?new Date(a.created_at).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"",s=(a.name||"").slice(0,2).toUpperCase(),x=String(a.id??0).padStart(5,"0");return e.jsxs(k,{title:`${a.name} — Profile`,children:[e.jsx(N,{title:`${a.name} — Profile`}),e.jsx(P,{}),e.jsxs("div",{className:"container-fluid px-4 py-4",children:[e.jsxs("a",{href:"#",onClick:l=>{l.preventDefault(),window.history.back()},className:"back-link",children:[e.jsx(A,{})," Back to Users"]}),e.jsxs("div",{className:"row g-4 align-items-start",children:[e.jsx("div",{className:"col-12 col-lg-3",children:e.jsxs("div",{className:"ui-card profile-card",children:[e.jsxs("div",{className:"record-tag",children:["FILE № ",x]}),e.jsxs("div",{className:"avatar-block",children:[e.jsxs("div",{className:"top-actions",children:[e.jsx("button",{type:"button",className:"action-btn btn-edit",title:"Edit profile","data-bs-toggle":"modal","data-bs-target":"#editUserModal",children:e.jsx(m,{})}),e.jsx("button",{type:"button",className:"action-btn",title:"Change photo",children:e.jsx(M,{})}),e.jsx("button",{type:"button",className:"action-btn btn-delete",title:"Delete user","data-bs-toggle":"modal","data-bs-target":"#deleteUserModal",children:e.jsx(h,{})})]}),e.jsx("div",{className:"avatar-lg",children:s}),e.jsx("div",{className:"sb-name",children:a.name}),e.jsx("div",{className:"sb-email",children:a.email}),e.jsx("span",{className:"sb-role",children:a.role?a.role[0].toUpperCase()+a.role.slice(1):""})]}),e.jsxs("div",{className:"stats-row",children:[e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-val",children:c}),e.jsx("div",{className:"stat-lbl",children:"Member Since"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:`stat-val ${a.active?"is-active":"is-inactive"}`,children:a.active?"Active":"Inactive"}),e.jsx("div",{className:"stat-lbl",children:"Status"})]})]}),e.jsx("nav",{className:"sidebar-nav",children:w.map(l=>e.jsxs("button",{type:"button",className:`nav-tab ${t===l.key?"active":""}`,onClick:()=>o(l.key),children:[e.jsx("span",{className:"nav-tab-icon",children:e.jsx(R,{name:l.icon})}),l.label]},l.key))})]})}),e.jsx("div",{className:"col-12 col-lg-9",children:e.jsxs("div",{className:"ui-card",children:[t==="personal"&&e.jsxs("div",{className:"tab-pane",children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"panel-eyebrow",children:"Record Detail"}),e.jsx("div",{className:"panel-title",children:"Personal Information"}),e.jsxs("div",{className:"panel-sub",children:["Basic info used on ",r]})]}),e.jsxs("button",{className:"edit-inline-btn","data-bs-toggle":"modal","data-bs-target":"#editUserModal",children:[e.jsx(m,{size:14})," Edit"]})]}),e.jsx("div",{className:"section-head",children:"Basics"}),e.jsxs("div",{className:"data-row",children:[e.jsxs("div",{className:"data-label",children:[e.jsx(b,{})," Full Name"]}),e.jsx("div",{className:"data-value",children:a.name})]}),e.jsxs("div",{className:"data-row",children:[e.jsxs("div",{className:"data-label",children:[e.jsx(I,{})," Email"]}),e.jsx("div",{className:"data-value",children:a.email})]}),e.jsxs("div",{className:"data-row",children:[e.jsxs("div",{className:"data-label",children:[e.jsx(E,{})," Phone"]}),e.jsx("div",{className:"data-value",style:a.phone?void 0:{color:"var(--ink-faint)"},children:a.phone??"—"})]}),e.jsx("div",{className:"section-head",children:"Access"}),e.jsxs("div",{className:"data-row",children:[e.jsxs("div",{className:"data-label",children:[e.jsx(S,{})," Role"]}),e.jsx("div",{className:"data-value",children:e.jsx("span",{className:"role-chip",children:a.role?a.role[0].toUpperCase()+a.role.slice(1):""})})]}),e.jsxs("div",{className:"data-row",children:[e.jsxs("div",{className:"data-label",children:[e.jsx(C,{})," Status"]}),e.jsx("div",{className:"data-value",children:e.jsx("span",{className:`status-chip ${a.active?"chip-active":"chip-inactive"}`,children:a.active?"Active":"Inactive"})})]}),e.jsxs("div",{className:"data-row",children:[e.jsxs("div",{className:"data-label",children:[e.jsx(B,{})," Registered"]}),e.jsx("div",{className:"data-value",children:d})]})]}),t==="notifications"&&e.jsx(p,{icon:e.jsx(U,{}),title:"Notifications",sub:"Manage notification preferences",emptyTitle:"No preferences configured",emptyText:"Notification settings will appear here once configured."}),t==="activity"&&e.jsx(p,{icon:e.jsx(u,{}),title:"Account Activity",sub:"Recent login sessions and actions",emptyTitle:"No recent activity",emptyText:"Login sessions and activity logs will appear here."}),t==="security"&&e.jsx(p,{icon:e.jsx(j,{}),title:"Security Settings",sub:"Password, 2FA, and access controls",emptyTitle:"Security options coming soon",emptyText:"Configure 2FA, password resets, and session management here."}),t==="social"&&e.jsx(p,{icon:e.jsx(y,{}),title:"Connected Accounts",sub:"Social and third-party integrations",emptyTitle:"No connected accounts",emptyText:"Social accounts will appear here once linked."})]})})]})]}),e.jsx(z,{user:a}),e.jsx(F,{user:a})]})}function p({icon:a,title:r,sub:t,emptyTitle:o,emptyText:c}){return e.jsxs("div",{className:"tab-pane",children:[e.jsx("div",{className:"panel-header",children:e.jsxs("div",{children:[e.jsx("div",{className:"panel-eyebrow",children:"Record Detail"}),e.jsx("div",{className:"panel-title",children:r}),e.jsx("div",{className:"panel-sub",children:t})]})}),e.jsxs("div",{className:"empty-tab",children:[e.jsx("span",{className:"empty-icon",children:a}),e.jsx("h5",{children:o}),e.jsx("p",{children:c})]})]})}function z({user:a}){const r=v.useRef(null),{data:t,setData:o,put:c,processing:d,errors:s}=g({name:a.name??"",email:a.email??"",password:"",role:a.role??"user",active:a.active?"1":"0"}),x=()=>{var f;const i=(f=window.bootstrap)==null?void 0:f.Modal.getInstance(r.current);i==null||i.hide()},l=i=>{i.preventDefault(),c(route("admin.users.update",a.id),{preserveScroll:!0,onSuccess:x})};return e.jsx("div",{className:"modal fade",id:"editUserModal",ref:r,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("form",{className:"modal-content",onSubmit:l,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title",children:[e.jsx(m,{style:{color:"var(--warning)",marginRight:8}})," Edit User"]}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsxs("div",{className:"modal-body d-grid gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Full Name"}),e.jsx("input",{type:"text",className:"form-control",value:t.name,onChange:i=>o("name",i.target.value),required:!0}),s.name&&e.jsx("small",{className:"text-danger",children:s.name})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsx("input",{type:"email",className:"form-control",value:t.email,onChange:i=>o("email",i.target.value),required:!0}),s.email&&e.jsx("small",{className:"text-danger",children:s.email})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label",children:["New Password ",e.jsx("small",{className:"text-muted fw-normal",children:"(leave blank to keep current)"})]}),e.jsx("input",{type:"password",className:"form-control",placeholder:"••••••••",value:t.password,onChange:i=>o("password",i.target.value)}),s.password&&e.jsx("small",{className:"text-danger",children:s.password})]}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Role"}),e.jsxs("select",{className:"form-select",value:t.role,onChange:i=>o("role",i.target.value),children:[e.jsx("option",{value:"admin",children:"Admin"}),e.jsx("option",{value:"user",children:"User"})]}),s.role&&e.jsx("small",{className:"text-danger",children:s.role})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("label",{className:"form-label",children:"Status"}),e.jsxs("select",{className:"form-select",value:t.active,onChange:i=>o("active",i.target.value),children:[e.jsx("option",{value:"1",children:"Active"}),e.jsx("option",{value:"0",children:"Inactive"})]}),s.active&&e.jsx("small",{className:"text-danger",children:s.active})]})]})]}),e.jsxs("div",{className:"modal-footer gap-2",children:[e.jsx("button",{type:"button",className:"btn-cancel","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-primary-sm",disabled:d,children:d?"Saving…":"Save Changes"})]})]})})})}function F({user:a}){const r=v.useRef(null),{delete:t,processing:o}=g({}),c=()=>{var x;const s=(x=window.bootstrap)==null?void 0:x.Modal.getInstance(r.current);s==null||s.hide()},d=s=>{s.preventDefault(),t(route("admin.users.destroy",a.id),{onSuccess:c})};return e.jsx("div",{className:"modal fade",id:"deleteUserModal",ref:r,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-sm",children:e.jsxs("form",{className:"modal-content",onSubmit:d,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title",children:[e.jsx(h,{style:{color:"var(--danger)",marginRight:8}})," Delete User"]}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("div",{className:"warn-box",children:[e.jsx(D,{}),e.jsxs("div",{children:[e.jsx("span",{className:"warn-name",children:a.name}),"Permanently deletes this user and all associated data. This cannot be undone."]})]})}),e.jsxs("div",{className:"modal-footer gap-2",children:[e.jsx("button",{type:"button",className:"btn-cancel","data-bs-dismiss":"modal",children:"Keep User"}),e.jsxs("button",{type:"submit",className:"btn-danger-sm",disabled:o,children:[e.jsx(h,{size:14,style:{marginRight:4}})," ",o?"Deleting…":"Delete"]})]})]})})})}function n({size:a=15,style:r,...t}){return{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",style:r,...t}}function A(a){return e.jsxs("svg",{...n(a),children:[e.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),e.jsx("polyline",{points:"12 19 5 12 12 5"})]})}function m(a){return e.jsxs("svg",{...n(a),children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}function M(a){return e.jsxs("svg",{...n(a),children:[e.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),e.jsx("circle",{cx:"12",cy:"13",r:"4"})]})}function h(a){return e.jsxs("svg",{...n(a),children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}function b(a){return e.jsxs("svg",{...n(a),children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function I(a){return e.jsxs("svg",{...n(a),children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]})}function E(a){return e.jsx("svg",{...n(a),children:e.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"})})}function S(a){return e.jsx("svg",{...n(a),children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}function C(a){return e.jsxs("svg",{...n(a),children:[e.jsx("rect",{x:"1",y:"6",width:"22",height:"12",rx:"6"}),e.jsx("circle",{cx:"16",cy:"12",r:"4"})]})}function B(a){return e.jsxs("svg",{...n(a),children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})}function D(a){return e.jsxs("svg",{...n({size:18,...a}),children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}function U(a){return e.jsxs("svg",{...n({size:32,...a}),children:[e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}),e.jsx("path",{d:"M18.63 13A17.89 17.89 0 0 1 18 8"}),e.jsx("path",{d:"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}),e.jsx("path",{d:"M18 8a6 6 0 0 0-9.33-5"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})}function u(a){return e.jsx("svg",{...n({size:32,...a}),children:e.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}function j(a){return e.jsxs("svg",{...n({size:32,...a}),children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}function y(a){return e.jsxs("svg",{...n({size:32,...a}),children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]})}function T(a){return e.jsxs("svg",{...n(a),children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})}function R({name:a}){return{user:e.jsx(b,{size:16}),bell:e.jsx(T,{size:16}),activity:e.jsx(u,{size:16}),lock:e.jsx(j,{size:16}),grid:e.jsx(y,{size:16})}[a]??null}function P(){return e.jsx("style",{children:`
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

            body { background: var(--canvas); font-family: var(--font-sans); }

            .back-link {
                display: inline-flex; align-items: center; gap: 6px;
                color: var(--ink-faint); font-size: 13px; font-weight: 500;
                text-decoration: none; margin-bottom: 22px; transition: color .15s, gap .15s;
            }
            .back-link:hover { color: var(--accent); gap: 9px; }

            .action-btn {
                width: 30px; height: 30px; border-radius: 7px;
                border: 1px solid var(--line); background: var(--surface);
                color: var(--ink-faint);
                display: inline-flex; align-items: center; justify-content: center;
                cursor: pointer; transition: all .15s; text-decoration: none;
            }
            .action-btn:hover            { background: var(--accent-soft); color: var(--accent); border-color: #C7D5E6; }
            .action-btn.btn-edit:hover   { background: var(--warning-soft); color: var(--warning); border-color: #EAD3A3; }
            .action-btn.btn-delete:hover { background: var(--danger-soft); color: var(--danger); border-color: #EFC0B8; }

            .ui-card {
                background: var(--surface); border: 1px solid var(--line);
                border-radius: 12px; overflow: hidden;
                box-shadow: 0 1px 2px rgba(16,20,31,.03);
            }

            .profile-card { position: relative; }
            .record-tag {
                position: absolute; top: 0; left: 0;
                font-family: var(--font-mono); font-size: 10px; font-weight: 600;
                letter-spacing: .06em; color: var(--accent);
                background: var(--accent-soft); padding: 5px 12px 5px 14px;
                border-bottom-right-radius: 10px;
            }

            .avatar-block {
                padding: 40px 16px 20px;
                display: flex; flex-direction: column; align-items: center; gap: 7px;
                border-bottom: 1px solid var(--line); position: relative;
            }
            .top-actions { position: absolute; top: 14px; right: 14px; display: flex; gap: 4px; }
            .avatar-lg {
                width: 68px; height: 68px; border-radius: 16px;
                background: var(--accent); color: #fff;
                font-family: var(--font-display); font-size: 24px; font-weight: 600;
                display: flex; align-items: center; justify-content: center;
                box-shadow: 0 6px 16px rgba(30,58,95,.25);
            }
            .sb-name  { font-family: var(--font-display); color: var(--ink); font-size: 18px; font-weight: 600; text-align: center; margin-top: 4px; }
            .sb-email { color: var(--ink-faint); font-size: 12.5px; text-align: center; }
            .sb-role  {
                background: var(--accent-soft); color: var(--accent);
                border-radius: 5px; font-size: 10.5px; font-weight: 700; letter-spacing: .05em;
                text-transform: uppercase; padding: 4px 11px; margin-top: 4px;
            }

            .stats-row { display: grid; grid-template-columns: 1fr 1fr; }
            .stat { padding: 16px 12px; text-align: center; }
            .stat:first-child { border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
            .stat:last-child  { border-bottom: 1px solid var(--line); }
            .stat-val { font-family: var(--font-mono); color: var(--ink); font-size: 14px; font-weight: 600; }
            .stat-val.is-active   { color: var(--success); }
            .stat-val.is-inactive { color: var(--danger); }
            .stat-lbl { color: var(--ink-faint); font-size: 10px; text-transform: uppercase; letter-spacing: .07em; margin-top: 3px; font-weight: 500; }

            .sidebar-nav { padding: 8px; }
            .nav-tab {
                display: flex; align-items: center; gap: 10px;
                padding: 9px 10px; color: var(--ink-2);
                font-size: 13px; font-weight: 500; text-decoration: none; cursor: pointer;
                border-radius: 8px; transition: all .12s;
                background: none; border: none;
                width: 100%; text-align: left; margin-bottom: 2px;
            }
            .nav-tab-icon {
                width: 26px; height: 26px; border-radius: 7px;
                display: inline-flex; align-items: center; justify-content: center;
                background: var(--surface-alt); color: var(--ink-faint); flex-shrink: 0;
                transition: all .12s;
            }
            .nav-tab:hover { background: var(--surface-alt); color: var(--ink); }
            .nav-tab.active { background: var(--accent-soft); color: var(--accent-ink); font-weight: 600; }
            .nav-tab.active .nav-tab-icon { background: var(--accent); color: #fff; }

            .panel-header {
                padding: 22px 28px 18px; border-bottom: 1px solid var(--line);
                display: flex; align-items: flex-start; justify-content: space-between;
            }
            .panel-eyebrow {
                font-family: var(--font-mono); font-size: 10px; font-weight: 600;
                letter-spacing: .09em; text-transform: uppercase; color: var(--ink-faint);
                margin-bottom: 6px;
            }
            .panel-title { font-family: var(--font-display); font-size: 19px; font-weight: 600; color: var(--ink); }
            .panel-sub   { color: var(--ink-faint); font-size: 12.5px; margin-top: 4px; }

            .edit-inline-btn {
                display: inline-flex; align-items: center; gap: 6px;
                background: var(--surface); border: 1px solid var(--line);
                border-radius: 8px; color: var(--ink-2);
                font-size: 12.5px; font-weight: 500; padding: 7px 14px; cursor: pointer;
                transition: all .15s; flex-shrink: 0;
            }
            .edit-inline-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }

            .section-head {
                padding: 11px 28px; font-family: var(--font-mono); font-size: 10.5px; font-weight: 600;
                text-transform: uppercase; letter-spacing: .09em;
                color: var(--ink-faint); background: var(--surface-alt);
                border-bottom: 1px solid var(--line-soft);
            }
            .data-row {
                display: flex; align-items: center; padding: 14px 28px;
                border-bottom: 1px solid var(--line-soft); gap: 12px;
            }
            .data-row:last-child { border-bottom: none; }
            .data-label {
                width: 180px; flex-shrink: 0;
                color: var(--ink-faint); font-family: var(--font-mono); font-size: 11px; font-weight: 500;
                text-transform: uppercase; letter-spacing: .04em;
                display: flex; align-items: center; gap: 8px;
            }
            .data-value { color: var(--ink); font-size: 13.5px; flex: 1; }

            .role-chip {
                background: var(--accent-soft); color: var(--accent);
                border-radius: 5px; font-size: 11.5px; font-weight: 600; padding: 3px 10px;
                text-transform: uppercase; letter-spacing: .03em;
            }
            .status-chip { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; }
            .status-chip::before { content: ''; width: 7px; height: 7px; border-radius: 50%; }
            .chip-active   { color: var(--success); } .chip-active::before   { background: var(--success); }
            .chip-inactive { color: var(--danger);  } .chip-inactive::before { background: var(--danger); }

            .empty-tab { padding: 64px 28px; text-align: center; }
            .empty-tab .empty-icon {
                display: inline-flex; align-items: center; justify-content: center;
                width: 64px; height: 64px; border-radius: 50%;
                background: var(--surface-alt); color: var(--ink-faint); margin: 0 auto 14px;
            }
            .empty-tab h5 { font-family: var(--font-display); font-size: 15px; font-weight: 600; color: var(--ink-2); margin-bottom: 6px; }
            .empty-tab p  { font-size: 13px; color: var(--ink-faint); margin: 0; }

            .modal-content { background: var(--surface) !important; border: 1px solid var(--line) !important; border-radius: 14px !important; color: var(--ink-2); font-family: var(--font-sans); }
            .modal-header { border-bottom: 1px solid var(--line) !important; padding: 20px 24px 16px !important; }
            .modal-title  { font-family: var(--font-display); font-weight: 600; font-size: 16px; color: var(--ink); display: flex; align-items: center; }
            .modal-footer { border-top: 1px solid var(--line) !important; padding: 14px 24px !important; }
            .modal-body   { padding: 20px 24px !important; }

            .form-label { color: var(--ink-2); font-size: 12px; font-weight: 600; margin-bottom: 5px; display: block; }
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
                background: var(--accent); border: none; color: #fff;
                border-radius: 8px; font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
                transition: background .15s;
            }
            .btn-primary-sm:hover { background: var(--accent-ink); }
            .btn-primary-sm:disabled { opacity: .6; cursor: not-allowed; }
            .btn-danger-sm {
                background: var(--danger); border: none; color: #fff;
                border-radius: 8px; font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
                display: inline-flex; align-items: center; transition: background .15s;
            }
            .btn-danger-sm:hover { background: #A5301F; }
            .btn-danger-sm:disabled { opacity: .6; cursor: not-allowed; }

            .warn-box {
                background: var(--danger-soft); border: 1px solid #EFC0B8; border-radius: 10px;
                padding: 14px 16px; display: flex; gap: 12px;
                color: var(--danger); font-size: 13.5px; align-items: flex-start;
            }
            .warn-name { font-weight: 700; color: #A5301F; margin-bottom: 3px; display: block; }
        `})}export{V as default};
