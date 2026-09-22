import{r as g,j as e,H as _,L as M,u as j}from"./app-CJlpfYPO.js";import{A as R}from"./AppLayout-WTBEreOn.js";const U=[{key:"personal",label:"Personal info",icon:"user"},{key:"notifications",label:"Notifications",icon:"bell"},{key:"activity",label:"Account activity",icon:"activity"},{key:"security",label:"Security settings",icon:"lock"},{key:"social",label:"Connected accounts",icon:"grid"}];function se({user:i,activities:r,appName:o="App"}){const[t,l]=g.useState("personal"),p=y(i==null?void 0:i.name),a=String((i==null?void 0:i.id)??0).padStart(5,"0"),c=i!=null&&i.created_at?new Date(i.created_at).getFullYear():"—",b=i!=null&&i.created_at?new Date(i.created_at).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—",s=d=>{l(d),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(R,{title:`${(i==null?void 0:i.name)??"User"} — Profile`,children:[e.jsx(_,{title:`${(i==null?void 0:i.name)??"User"} — Profile`}),e.jsx(oe,{}),e.jsxs("div",{className:"user-profile-page",children:[e.jsxs("div",{className:"profile-page-header",children:[e.jsxs(M,{href:route("admin.users.index"),className:"back-link",children:[e.jsx(X,{size:15}),"Back to users"]}),e.jsxs("div",{className:"page-heading",children:[e.jsxs("div",{children:[e.jsx("h1",{children:(i==null?void 0:i.name)??"User"}),e.jsx("p",{children:"Manage profile information, access and account activity."})]}),e.jsx("span",{className:`status-chip ${i!=null&&i.active?"chip-active":"chip-inactive"}`,children:i!=null&&i.active?"Active account":"Inactive account"})]})]}),e.jsxs("div",{className:"profile-grid",children:[e.jsxs("aside",{className:"profile-sidebar",children:[e.jsxs("div",{className:"profile-card",children:[e.jsxs("div",{className:"profile-avatar-section",children:[e.jsx("div",{className:"profile-avatar",children:p}),e.jsx("div",{className:"profile-name",children:i==null?void 0:i.name}),e.jsx("div",{className:"profile-email",children:i==null?void 0:i.email}),e.jsx("span",{className:"role-badge",children:S(i==null?void 0:i.role)}),e.jsxs("div",{className:"record-tag",children:["Record #",a]})]}),e.jsxs("div",{className:"profile-stats",children:[e.jsxs("div",{className:"profile-stat",children:[e.jsx("strong",{children:c}),e.jsx("span",{children:"Member since"})]}),e.jsxs("div",{className:"profile-stat",children:[e.jsx("strong",{className:i!=null&&i.active?"active-text":"inactive-text",children:i!=null&&i.active?"Active":"Inactive"}),e.jsx("span",{children:"Status"})]})]}),e.jsx("div",{className:"sidebar-navigation",children:U.map(d=>e.jsxs("button",{type:"button",className:`profile-nav-item ${t===d.key?"active":""}`,onClick:()=>s(d.key),children:[e.jsx("span",{className:"profile-nav-icon",children:e.jsx(te,{name:d.icon})}),e.jsx("span",{children:d.label})]},d.key))})]}),e.jsxs("div",{className:"quick-card",children:[e.jsx("div",{className:"quick-title",children:"Quick actions"}),e.jsxs("button",{type:"button",className:"quick-action","data-bs-toggle":"modal","data-bs-target":"#editUserModal",children:[e.jsx("span",{children:e.jsx(k,{size:15})}),"Edit profile"]}),e.jsxs("button",{type:"button",className:"quick-action","data-bs-toggle":"modal","data-bs-target":"#resetPasswordModal",children:[e.jsx("span",{children:e.jsx(z,{size:15})}),"Reset password"]}),e.jsxs("button",{type:"button",className:"quick-action",onClick:()=>s("activity"),children:[e.jsx("span",{children:e.jsx(m,{size:15})}),"View activity"]})]})]}),e.jsxs("main",{className:"profile-main",children:[t==="personal"&&e.jsx(T,{user:i,fmtFull:b}),t==="notifications"&&e.jsx(q,{}),t==="activity"&&e.jsx(L,{activities:r}),t==="security"&&e.jsx(E,{user:i,onViewActivity:()=>s("activity")}),t==="social"&&e.jsx(V,{})]})]})]}),e.jsx($,{user:i}),e.jsx(H,{user:i}),e.jsx(G,{user:i})]})}function T({user:i,fmtFull:r}){return e.jsxs("div",{className:"content-card",children:[e.jsxs("div",{className:"content-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Personal information"}),e.jsx("p",{children:"Basic information and access details for this account."})]}),e.jsxs("button",{type:"button",className:"outline-button","data-bs-toggle":"modal","data-bs-target":"#editUserModal",children:[e.jsx(k,{size:14}),"Edit"]})]}),e.jsx("div",{className:"section-title",children:"Basic information"}),e.jsx(x,{icon:e.jsx(I,{}),label:"Full name",value:i==null?void 0:i.name}),e.jsx(x,{icon:e.jsx(A,{}),label:"Email address",value:i==null?void 0:i.email}),e.jsx(x,{icon:e.jsx(O,{}),label:"Phone number",value:(i==null?void 0:i.phone)||"Not provided",muted:!(i!=null&&i.phone)}),e.jsx("div",{className:"section-title",children:"Account access"}),e.jsx(x,{icon:e.jsx(f,{}),label:"Role",value:e.jsx("span",{className:"role-chip",children:S(i==null?void 0:i.role)})}),e.jsx(x,{icon:e.jsx(Q,{}),label:"Account status",value:e.jsx("span",{className:`status-chip ${i!=null&&i.active?"chip-active":"chip-inactive"}`,children:i!=null&&i.active?"Active":"Inactive"})}),e.jsx(x,{icon:e.jsx(W,{}),label:"Registered",value:r}),e.jsxs("div",{className:"profile-summary",children:[e.jsx("div",{className:"summary-icon",children:e.jsx(f,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Account access"}),e.jsxs("p",{children:["This account is currently"," ",i!=null&&i.active?"allowed to access":"restricted from accessing"," ","the platform."]})]})]})]})}function q(){const[i,r]=g.useState({account:!0,security:!0,updates:!0,marketing:!1}),o=t=>r(l=>({...l,[t]:!l[t]}));return e.jsxs("div",{className:"content-card",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Notifications"}),e.jsx("p",{children:"Control which notifications this user receives."})]})}),e.jsxs("div",{className:"notification-list",children:[e.jsx(h,{title:"Account notifications",description:"Important account and profile updates.",checked:i.account,onChange:()=>o("account")}),e.jsx(h,{title:"Security alerts",description:"Login alerts, password resets and security events.",checked:i.security,onChange:()=>o("security")}),e.jsx(h,{title:"Platform updates",description:"New features, announcements and platform changes.",checked:i.updates,onChange:()=>o("updates")}),e.jsx(h,{title:"Marketing communications",description:"Optional promotional and marketing messages.",checked:i.marketing,onChange:()=>o("marketing")})]}),e.jsxs("div",{className:"info-banner",children:[e.jsx(w,{size:17}),e.jsxs("div",{children:[e.jsx("strong",{children:"Notification preferences"}),e.jsx("p",{children:"These controls are currently displayed as account-level preferences. Connect them to your notification settings endpoint when available."})]})]})]})}function h({title:i,description:r,checked:o,onChange:t}){return e.jsxs("div",{className:"notification-row",children:[e.jsx("div",{className:"notification-icon",children:e.jsx(w,{size:16})}),e.jsxs("div",{className:"notification-content",children:[e.jsx("strong",{children:i}),e.jsx("span",{children:r})]}),e.jsx("button",{type:"button",className:`toggle-switch ${o?"checked":""}`,onClick:t,"aria-pressed":o,children:e.jsx("span",{})})]})}function L({activities:i}){var o;const r=(i==null?void 0:i.data)??[];return e.jsxs("div",{className:"content-card",children:[e.jsxs("div",{className:"content-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Account activity"}),e.jsx("p",{children:"Recent login sessions and important account events."})]}),e.jsxs("div",{className:"event-count",children:[(i==null?void 0:i.total)??r.length," events"]})]}),r.length===0?e.jsx(F,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"activity-list",children:r.map(t=>e.jsx(D,{activity:t},t.id))}),((o=i==null?void 0:i.links)==null?void 0:o.length)>3&&e.jsx(B,{activities:i})]})]})}function D({activity:i}){const r=(i==null?void 0:i.type)??"activity",o={login:e.jsx(J,{size:17}),logout:e.jsx(ee,{size:17}),password_reset:e.jsx(z,{size:17}),password_changed:e.jsx(N,{size:17}),profile_updated:e.jsx(k,{size:17}),account_activated:e.jsx(ie,{size:17}),account_deactivated:e.jsx(P,{size:17})},t=i!=null&&i.created_at?new Date(i.created_at).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"Unknown date";return e.jsxs("div",{className:"activity-item",children:[e.jsx("div",{className:`activity-icon activity-${r}`,children:o[r]??e.jsx(m,{size:17})}),e.jsxs("div",{className:"activity-body",children:[e.jsx("div",{className:"activity-title",children:Z(r)}),e.jsx("div",{className:"activity-description",children:(i==null?void 0:i.description)||"Account activity recorded."}),e.jsxs("div",{className:"activity-meta",children:[e.jsx("span",{children:t}),(i==null?void 0:i.ip_address)&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs("span",{children:["IP ",i.ip_address]})]}),(i==null?void 0:i.device)&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx("span",{children:i.device})]}),(i==null?void 0:i.browser)&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx("span",{children:i.browser})]}),(i==null?void 0:i.platform)&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx("span",{children:i.platform})]})]})]}),e.jsx("div",{className:"activity-result",children:r==="login"&&e.jsx("span",{className:"success-label",children:"Successful"})})]})}function F(){return e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-state-icon",children:e.jsx(m,{size:28})}),e.jsx("h3",{children:"No activity yet"}),e.jsx("p",{children:"Login sessions and important account events will appear here."})]})}function B({activities:i}){return e.jsxs("div",{className:"pagination-container",children:[e.jsxs("div",{className:"pagination-info",children:["Showing ",e.jsx("strong",{children:i.from??0})," – ",e.jsx("strong",{children:i.to??0})," of ",e.jsx("strong",{children:i.total??0})]}),e.jsx("div",{className:"pagination-links",children:(i.links??[]).map((r,o)=>{const t=K(r.label);return r.url?e.jsx(M,{href:r.url,preserveScroll:!0,preserveState:!0,className:`page-button ${r.active?"active":""}`,children:t},o):e.jsx("span",{className:"page-button disabled",children:t},o)})})]})}function E({user:i,onViewActivity:r}){return e.jsxs("div",{className:"content-card",children:[e.jsxs("div",{className:"content-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Security settings"}),e.jsx("p",{children:"Manage password and account security controls."})]}),e.jsxs("div",{className:"security-status",children:[e.jsx(f,{size:14}),"Protected"]})]}),e.jsxs("div",{className:"security-list",children:[e.jsx(u,{icon:e.jsx(N,{size:18}),title:"Password",description:"Send a secure password reset link to the user's email address.",action:e.jsx("button",{type:"button",className:"security-button","data-bs-toggle":"modal","data-bs-target":"#resetPasswordModal",children:"Reset password"})}),e.jsx(u,{icon:e.jsx(f,{size:18}),title:"Two-factor authentication",description:"Add an additional verification step when signing in.",action:e.jsx("span",{className:"coming-badge",children:"Not configured"})}),e.jsx(u,{icon:e.jsx(m,{size:18}),title:"Login activity",description:"Review recent devices, IP addresses and sign-in events.",action:e.jsx("button",{type:"button",className:"security-button",onClick:r,children:"View activity"})}),e.jsx(u,{icon:e.jsx(re,{size:18}),title:"Active sessions",description:"Review and revoke active sessions for this account.",action:e.jsx("span",{className:"coming-badge",children:"Coming soon"})})]}),e.jsxs("div",{className:"security-note",children:[e.jsx("div",{className:"security-note-icon",children:e.jsx(f,{size:17})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Security recommendation"}),e.jsx("p",{children:"Encourage users to maintain a unique password and enable two-factor authentication where available."})]})]})]})}function u({icon:i,title:r,description:o,action:t}){return e.jsxs("div",{className:"security-item",children:[e.jsx("div",{className:"security-item-icon",children:i}),e.jsxs("div",{className:"security-item-content",children:[e.jsx("strong",{children:r}),e.jsx("span",{children:o})]}),e.jsx("div",{className:"security-item-action",children:t})]})}function V(){return e.jsxs("div",{className:"content-card",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Connected accounts"}),e.jsx("p",{children:"Social and third-party accounts connected to this profile."})]})}),e.jsxs("div",{className:"connected-empty",children:[e.jsx("div",{className:"connected-icon",children:e.jsx(C,{size:27})}),e.jsx("h3",{children:"No connected accounts"}),e.jsx("p",{children:"No external accounts are currently linked to this user profile."}),e.jsx("button",{type:"button",className:"outline-button",disabled:!0,children:"Connect account"})]})]})}function x({icon:i,label:r,value:o,muted:t=!1}){return e.jsxs("div",{className:"data-row",children:[e.jsxs("div",{className:"data-label",children:[e.jsx("span",{className:"data-label-icon",children:i}),r]}),e.jsx("div",{className:`data-value ${t?"muted-value":""}`,children:o})]})}function $({user:i}){const r=g.useRef(null),{data:o,setData:t,put:l,processing:p,errors:a}=j({name:(i==null?void 0:i.name)??"",email:(i==null?void 0:i.email)??"",role:(i==null?void 0:i.role)??"user",active:i!=null&&i.active?"1":"0"}),c=()=>{var d;const s=(d=window.bootstrap)==null?void 0:d.Modal.getInstance(r.current);s==null||s.hide()},b=s=>{s.preventDefault(),l(route("admin.users.update",i.id),{preserveScroll:!0,onSuccess:c})};return e.jsx("div",{className:"modal fade",id:"editUserModal",ref:r,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("form",{className:"modal-content modern-modal",onSubmit:b,children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Edit user"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"modal-user-preview",children:[e.jsx("div",{className:"modal-avatar",children:y(i==null?void 0:i.name)}),e.jsxs("div",{children:[e.jsx("strong",{children:i==null?void 0:i.name}),e.jsx("span",{children:i==null?void 0:i.email})]})]}),e.jsxs("div",{className:"form-grid",children:[e.jsx(v,{label:"Full name",error:a.name,children:e.jsx("input",{type:"text",className:"form-control modern-input",value:o.name,onChange:s=>t("name",s.target.value),required:!0})}),e.jsx(v,{label:"Email address",error:a.email,children:e.jsx("input",{type:"email",className:"form-control modern-input",value:o.email,onChange:s=>t("email",s.target.value),required:!0})}),e.jsxs("div",{className:"form-grid-two",children:[e.jsx(v,{label:"Role",error:a.role,children:e.jsxs("select",{className:"form-select modern-input",value:o.role,onChange:s=>t("role",s.target.value),children:[e.jsx("option",{value:"admin",children:"Admin"}),e.jsx("option",{value:"user",children:"User"})]})}),e.jsx(v,{label:"Account status",error:a.active,children:e.jsxs("select",{className:"form-select modern-input",value:o.active,onChange:s=>t("active",s.target.value),children:[e.jsx("option",{value:"1",children:"Active"}),e.jsx("option",{value:"0",children:"Inactive"})]})})]})]}),e.jsxs("div",{className:"password-separation-note",children:[e.jsx(z,{size:16}),e.jsx("span",{children:"Password changes are handled separately through the secure password reset process."})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"cancel-button","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"primary-button",disabled:p,children:p?"Saving…":"Save changes"})]})]})})})}function H({user:i}){const r=g.useRef(null),{post:o,processing:t}=j({}),l=()=>{var c;const a=(c=window.bootstrap)==null?void 0:c.Modal.getInstance(r.current);a==null||a.hide()},p=a=>{a.preventDefault(),o(route("admin.users.send-password-reset",i.id),{preserveScroll:!0,onSuccess:l})};return e.jsx("div",{className:"modal fade",id:"resetPasswordModal",ref:r,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-sm",children:e.jsxs("form",{className:"modal-content modern-modal",onSubmit:p,children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Reset password"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"reset-profile",children:[e.jsx("div",{className:"reset-avatar",children:y(i==null?void 0:i.name)}),e.jsxs("div",{children:[e.jsx("strong",{children:i==null?void 0:i.name}),e.jsx("span",{children:i==null?void 0:i.email})]})]}),e.jsxs("div",{className:"reset-message",children:[e.jsx("div",{className:"reset-message-icon",children:e.jsx(A,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Send secure reset link"}),e.jsx("p",{children:"A password reset link will be sent to this user's email address. The user will create a new password through the secure reset page."})]})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"cancel-button","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"primary-button",disabled:t,children:t?"Sending…":"Send reset link"})]})]})})})}function G({user:i}){const r=g.useRef(null),{delete:o,processing:t}=j({}),l=()=>{var c;const a=(c=window.bootstrap)==null?void 0:c.Modal.getInstance(r.current);a==null||a.hide()},p=a=>{a.preventDefault(),o(route("admin.users.destroy",i.id),{preserveScroll:!0,onSuccess:l})};return e.jsx("div",{className:"modal fade",id:"deleteUserModal",ref:r,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-sm",children:e.jsxs("form",{className:"modal-content modern-modal",onSubmit:p,children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Delete user"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal"})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("div",{className:"delete-warning",children:[e.jsx("div",{className:"delete-warning-icon",children:e.jsx(P,{size:19})}),e.jsxs("div",{children:[e.jsxs("strong",{children:["Delete ",i==null?void 0:i.name,"?"]}),e.jsx("p",{children:"This permanently removes the user account and associated data. This action cannot be undone."})]})]})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"cancel-button","data-bs-dismiss":"modal",children:"Keep user"}),e.jsxs("button",{type:"submit",className:"danger-button",disabled:t,children:[e.jsx(Y,{size:14}),t?"Deleting…":"Delete user"]})]})]})})})}function v({label:i,error:r,children:o}){return e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:i}),o,r&&e.jsx("div",{className:"form-error",children:r})]})}function y(i=""){const r=i.trim().split(/\s+/).filter(Boolean);return r.length?r.length===1?r[0].slice(0,2).toUpperCase():(r[0][0]+r[r.length-1][0]).toUpperCase():"U"}function S(i){return i?i.charAt(0).toUpperCase()+i.slice(1):"User"}function Z(i){return{login:"User login",logout:"User logout",password_reset:"Password reset requested",password_changed:"Password changed",profile_updated:"Profile updated",account_activated:"Account activated",account_deactivated:"Account deactivated"}[i]??"Account activity"}function K(i=""){return i.replace(/<[^>]+>/g,"").replace(/&laquo;/g,"‹").replace(/&raquo;/g,"›").replace(/&amp;/g,"&")}function n({size:i=15,style:r,className:o,...t}={}){return{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",style:r,className:o,...t}}function X(i){return e.jsxs("svg",{...n(i),children:[e.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),e.jsx("polyline",{points:"12 19 5 12 12 5"})]})}function k(i){return e.jsxs("svg",{...n(i),children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"})]})}function Y(i){return e.jsxs("svg",{...n(i),children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),e.jsx("path",{d:"M10 11v6"}),e.jsx("path",{d:"M14 11v6"}),e.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}function I(i){return e.jsxs("svg",{...n(i),children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function A(i){return e.jsxs("svg",{...n(i),children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("polyline",{points:"3 7 12 13 21 7"})]})}function O(i){return e.jsx("svg",{...n(i),children:e.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.63a2 2 0 0 1-.45 2.11L8.0 9.73a16 16 0 0 0 6.27 6.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.32 1.73.54 2.63.66A2 2 0 0 1 22 16.92Z"})})}function f(i){return e.jsxs("svg",{...n(i),children:[e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"}),e.jsx("path",{d:"m9 12 2 2 4-4"})]})}function Q(i){return e.jsxs("svg",{...n(i),children:[e.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"6"}),e.jsx("circle",{cx:"16",cy:"12",r:"3"})]})}function W(i){return e.jsxs("svg",{...n(i),children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})}function w(i){return e.jsxs("svg",{...n(i),children:[e.jsx("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})}function m(i){return e.jsx("svg",{...n(i),children:e.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}function N(i){return e.jsxs("svg",{...n(i),children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}function C(i){return e.jsxs("svg",{...n(i),children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"})]})}function J(i){return e.jsxs("svg",{...n(i),children:[e.jsx("path",{d:"M10 17l5-5-5-5"}),e.jsx("path",{d:"M15 12H3"}),e.jsx("path",{d:"M21 19V5a2 2 0 0 0-2-2h-6"})]})}function ee(i){return e.jsxs("svg",{...n(i),children:[e.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),e.jsx("polyline",{points:"16 17 21 12 16 7"}),e.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})}function z(i){return e.jsxs("svg",{...n(i),children:[e.jsx("circle",{cx:"7.5",cy:"15.5",r:"3.5"}),e.jsx("path",{d:"m10 13 8-8"}),e.jsx("path",{d:"m17 5 2 2"}),e.jsx("path",{d:"m14 8 2 2"})]})}function ie(i){return e.jsx("svg",{...n(i),children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}function P(i){return e.jsxs("svg",{...n(i),children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}function re(i){return e.jsxs("svg",{...n(i),children:[e.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),e.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),e.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})}function te({name:i}){return{user:e.jsx(I,{size:16}),bell:e.jsx(w,{size:16}),activity:e.jsx(m,{size:16}),lock:e.jsx(N,{size:16}),grid:e.jsx(C,{size:16})}[i]??null}function oe(){return e.jsx("style",{children:`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

            :root {
                --profile-bg: #ffffff;
                --profile-surface: #ffffff;
                --profile-surface-soft: #f7f8f8;

                --profile-ink: #0a0a0a;
                --profile-ink-2: #4a4d52;
                --profile-muted: #8b8d92;

                --profile-border: #e7e8ea;
                --profile-border-soft: #f0f1f2;

                --profile-green: #00a667;
                --profile-green-dark: #00814f;
                --profile-green-soft: #e6f7ef;
                --profile-green-soft-2: #d1f0e2;

                --profile-danger: #c73333;
                --profile-danger-soft: #fbeaea;

                --profile-font:
                    'Inter',
                    -apple-system,
                    BlinkMacSystemFont,
                    'Segoe UI',
                    sans-serif;
            }

            .user-profile-page {
                min-height: 100vh;
                background: var(--profile-bg);
                padding: 30px 32px 56px;
                color: var(--profile-ink);
                font-family: var(--profile-font);
            }

            .profile-page-header {
                max-width: 1440px;
                margin: 0 auto 26px;
            }

            .back-link {
                display: inline-flex;
                align-items: center;
                gap: 7px;
                color: var(--profile-muted);
                text-decoration: none;
                font-size: 12.5px;
                font-weight: 500;
                margin-bottom: 18px;
                transition: color .15s ease, transform .15s ease;
            }

            .back-link:hover {
                color: var(--profile-ink);
                transform: translateX(-2px);
            }

            .page-heading {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 20px;
                border-bottom: 1px solid var(--profile-border);
                padding-bottom: 22px;
            }

            .page-heading h1 {
                margin: 0;
                font-size: 27px;
                line-height: 1.2;
                letter-spacing: -.02em;
                font-weight: 700;
                color: var(--profile-ink);
            }

            .page-heading p {
                margin: 7px 0 0;
                color: var(--profile-muted);
                font-size: 13px;
            }

            .profile-grid {
                max-width: 1440px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 292px minmax(0, 1fr);
                gap: 22px;
                align-items: start;
            }

            .profile-sidebar {
                min-width: 0;
            }

            .profile-card,
            .quick-card,
            .content-card {
                background: var(--profile-surface);
                border: 1px solid var(--profile-border);
                border-radius: 12px;
            }

            .profile-avatar-section {
                padding: 30px 20px 22px;
                text-align: center;
                border-bottom: 1px solid var(--profile-border);
            }

            .profile-avatar {
                width: 68px;
                height: 68px;
                margin: 0 auto 14px;
                border-radius: 50%;
                background: var(--profile-green);
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 22px;
                font-weight: 700;
                letter-spacing: -.01em;
            }

            .profile-name {
                font-size: 16.5px;
                font-weight: 700;
                color: var(--profile-ink);
            }

            .profile-email {
                margin-top: 4px;
                color: var(--profile-muted);
                font-size: 11.5px;
                word-break: break-word;
            }

            .role-badge {
                display: inline-flex;
                margin-top: 12px;
                padding: 5px 11px;
                border-radius: 20px;
                background: var(--profile-green-soft);
                color: var(--profile-green-dark);
                font-size: 10.5px;
                font-weight: 600;
            }

            .record-tag {
                margin-top: 13px;
                color: var(--profile-muted);
                font-size: 10px;
                font-weight: 500;
            }

            .profile-stats {
                display: grid;
                grid-template-columns: 1fr 1fr;
                border-bottom: 1px solid var(--profile-border);
            }

            .profile-stat {
                padding: 15px 10px;
                text-align: center;
            }

            .profile-stat:first-child {
                border-right: 1px solid var(--profile-border);
            }

            .profile-stat strong {
                display: block;
                color: var(--profile-ink);
                font-size: 13px;
                font-weight: 700;
            }

            .profile-stat span {
                display: block;
                margin-top: 4px;
                color: var(--profile-muted);
                font-size: 10.5px;
            }

            .active-text { color: var(--profile-green) !important; }
            .inactive-text { color: var(--profile-muted) !important; }

            .sidebar-navigation { padding: 9px; }

            .profile-nav-item {
                width: 100%;
                border: 0;
                border-left: 3px solid transparent;
                background: transparent;
                border-radius: 8px;
                padding: 9px 10px 9px 9px;
                display: flex;
                align-items: center;
                gap: 10px;
                color: var(--profile-ink-2);
                font-size: 12.5px;
                font-weight: 500;
                text-align: left;
                cursor: pointer;
                transition: background .15s ease, color .15s ease;
            }

            .profile-nav-item:hover {
                background: var(--profile-surface-soft);
                color: var(--profile-ink);
            }

            .profile-nav-item.active {
                background: var(--profile-green-soft);
                border-left-color: var(--profile-green);
                color: var(--profile-ink);
                font-weight: 600;
            }

            .profile-nav-icon {
                width: 28px;
                height: 28px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 7px;
                background: var(--profile-surface-soft);
                color: var(--profile-muted);
                flex-shrink: 0;
            }

            .profile-nav-item.active .profile-nav-icon {
                background: var(--profile-green);
                color: #fff;
            }

            .quick-card { margin-top: 14px; padding: 14px; }

            .quick-title {
                padding: 0 5px 8px;
                color: var(--profile-muted);
                font-size: 11px;
                font-weight: 600;
            }

            .quick-action {
                width: 100%;
                border: 0;
                background: transparent;
                display: flex;
                align-items: center;
                gap: 9px;
                padding: 8px 5px;
                color: var(--profile-ink-2);
                font-size: 12px;
                text-align: left;
                border-radius: 7px;
                cursor: pointer;
            }

            .quick-action:hover {
                background: var(--profile-surface-soft);
                color: var(--profile-ink);
            }

            .quick-action span {
                width: 27px;
                height: 27px;
                border: 1px solid var(--profile-border);
                background: #fff;
                border-radius: 7px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: var(--profile-ink-2);
            }

            .content-card { min-width: 0; overflow: hidden; }

            .content-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 20px;
                padding: 24px 26px 20px;
                border-bottom: 1px solid var(--profile-border);
            }

            .content-header h2 {
                margin: 0;
                color: var(--profile-ink);
                font-size: 18px;
                font-weight: 700;
                letter-spacing: -.01em;
            }

            .content-header p {
                margin: 5px 0 0;
                color: var(--profile-muted);
                font-size: 12px;
            }

            .outline-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 8px 13px;
                border: 1px solid var(--profile-border);
                border-radius: 8px;
                background: #fff;
                color: var(--profile-ink-2);
                font-size: 12px;
                font-weight: 600;
                cursor: pointer;
                transition: all .15s ease;
                white-space: nowrap;
            }

            .outline-button:hover:not(:disabled) {
                border-color: var(--profile-ink);
                color: var(--profile-ink);
            }

            .outline-button:disabled { opacity: .5; cursor: not-allowed; }

            .section-title {
                padding: 10px 26px;
                background: var(--profile-surface-soft);
                border-bottom: 1px solid var(--profile-border-soft);
                color: var(--profile-ink-2);
                font-size: 11.5px;
                font-weight: 600;
            }

            .data-row {
                min-height: 55px;
                display: flex;
                align-items: center;
                gap: 18px;
                padding: 12px 26px;
                border-bottom: 1px solid var(--profile-border-soft);
            }

            .data-label {
                width: 175px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 9px;
                color: var(--profile-muted);
                font-size: 11.5px;
                font-weight: 500;
            }

            .data-label-icon {
                width: 26px;
                height: 26px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 7px;
                background: var(--profile-surface-soft);
                color: var(--profile-muted);
            }

            .data-value {
                color: var(--profile-ink);
                font-size: 13px;
                font-weight: 500;
                flex: 1;
            }

            .muted-value { color: var(--profile-muted); }

            .role-chip {
                display: inline-flex;
                padding: 5px 10px;
                border-radius: 20px;
                background: var(--profile-green-soft);
                color: var(--profile-green-dark);
                font-size: 11px;
                font-weight: 600;
            }

            .status-chip {
                display: inline-flex;
                align-items: center;
                gap: 7px;
                font-size: 12px;
                font-weight: 600;
            }

            .status-chip::before {
                content: "";
                width: 7px;
                height: 7px;
                border-radius: 50%;
            }

            .chip-active { color: var(--profile-green-dark); }
            .chip-active::before {
                background: var(--profile-green);
                box-shadow: 0 0 0 3px var(--profile-green-soft);
            }

            .chip-inactive { color: var(--profile-muted); }
            .chip-inactive::before {
                background: transparent;
                border: 1.5px solid var(--profile-muted);
            }

            .profile-summary {
                margin: 22px 26px;
                padding: 14px;
                border: 1px solid var(--profile-border);
                border-radius: 10px;
                background: var(--profile-surface-soft);
                display: flex;
                align-items: flex-start;
                gap: 11px;
            }

            .summary-icon {
                width: 31px;
                height: 31px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--profile-green);
                color: #fff;
                flex-shrink: 0;
            }

            .profile-summary strong { color: var(--profile-ink); font-size: 12px; }
            .profile-summary p {
                margin: 3px 0 0;
                color: var(--profile-ink-2);
                font-size: 11.5px;
                line-height: 1.55;
            }

            /* Activity */

            .event-count {
                padding: 6px 10px;
                border-radius: 7px;
                background: var(--profile-surface-soft);
                border: 1px solid var(--profile-border);
                color: var(--profile-ink-2);
                font-size: 11px;
                font-weight: 600;
                white-space: nowrap;
            }

            .activity-list { width: 100%; }

            .activity-item {
                display: flex;
                align-items: flex-start;
                gap: 13px;
                padding: 17px 26px;
                border-bottom: 1px solid var(--profile-border-soft);
                transition: background .15s ease;
            }

            .activity-item:hover { background: var(--profile-surface-soft); }

            .activity-icon {
                width: 36px;
                height: 36px;
                flex: 0 0 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 9px;
                background: var(--profile-surface-soft);
                color: var(--profile-ink-2);
            }

            .activity-login,
            .activity-account_activated {
                background: var(--profile-green-soft);
                color: var(--profile-green-dark);
            }

            .activity-account_deactivated { color: var(--profile-danger); }

            .activity-body { flex: 1; min-width: 0; }

            .activity-title { color: var(--profile-ink); font-size: 13px; font-weight: 600; }

            .activity-description {
                margin-top: 3px;
                color: var(--profile-ink-2);
                font-size: 11.5px;
            }

            .activity-meta {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 5px;
                margin-top: 7px;
                color: var(--profile-muted);
                font-size: 10.5px;
            }

            .activity-result { flex-shrink: 0; }

            .success-label {
                padding: 4px 8px;
                border-radius: 20px;
                background: var(--profile-green-soft);
                color: var(--profile-green-dark);
                font-size: 9.5px;
                font-weight: 700;
            }

            .empty-state { padding: 75px 25px; text-align: center; }

            .empty-state-icon {
                width: 62px;
                height: 62px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 14px;
                border-radius: 50%;
                background: var(--profile-surface-soft);
                color: var(--profile-muted);
            }

            .empty-state h3 {
                margin: 0;
                color: var(--profile-ink);
                font-size: 15px;
                font-weight: 700;
            }

            .empty-state p {
                margin: 6px auto 0;
                max-width: 390px;
                color: var(--profile-muted);
                font-size: 12px;
            }

            .pagination-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                padding: 15px 26px;
                border-top: 1px solid var(--profile-border);
            }

            .pagination-info { color: var(--profile-muted); font-size: 11px; }
            .pagination-info strong { color: var(--profile-ink-2); }

            .pagination-links { display: flex; gap: 4px; }

            .page-button {
                min-width: 28px;
                height: 28px;
                padding: 0 7px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--profile-border);
                border-radius: 6px;
                background: #fff;
                color: var(--profile-ink-2);
                text-decoration: none;
                font-size: 11px;
                transition: all .15s ease;
            }

            .page-button:hover {
                border-color: var(--profile-green);
                color: var(--profile-green-dark);
                background: var(--profile-green-soft);
            }

            .page-button.active {
                border-color: var(--profile-green);
                background: var(--profile-green);
                color: #fff;
            }

            .page-button.disabled { opacity: .4; cursor: not-allowed; }

            /* Security */

            .security-status {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                padding: 6px 10px;
                border-radius: 20px;
                background: var(--profile-green-soft);
                color: var(--profile-green-dark);
                font-size: 10.5px;
                font-weight: 600;
            }

            .security-list { padding: 5px 0; }

            .security-item {
                display: flex;
                align-items: center;
                gap: 14px;
                padding: 17px 26px;
                border-bottom: 1px solid var(--profile-border-soft);
            }

            .security-item-icon {
                width: 37px;
                height: 37px;
                flex: 0 0 37px;
                border-radius: 9px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--profile-surface-soft);
                color: var(--profile-ink);
            }

            .security-item-content { flex: 1; min-width: 0; }
            .security-item-content strong { display: block; color: var(--profile-ink); font-size: 12.5px; }
            .security-item-content span {
                display: block;
                margin-top: 3px;
                color: var(--profile-muted);
                font-size: 11px;
                line-height: 1.45;
            }

            .security-item-action { flex-shrink: 0; }

            .security-button {
                border: 1px solid var(--profile-border);
                background: #fff;
                color: var(--profile-ink-2);
                border-radius: 7px;
                padding: 7px 12px;
                font-size: 11px;
                font-weight: 600;
                cursor: pointer;
            }

            .security-button:hover {
                background: var(--profile-green-soft);
                border-color: var(--profile-green);
                color: var(--profile-green-dark);
            }

            .coming-badge {
                padding: 5px 9px;
                border-radius: 20px;
                background: var(--profile-surface-soft);
                border: 1px solid var(--profile-border);
                color: var(--profile-muted);
                font-size: 10px;
                font-weight: 600;
            }

            .security-note {
                margin: 22px 26px;
                padding: 14px;
                border: 1px solid var(--profile-border);
                border-radius: 10px;
                display: flex;
                gap: 11px;
                background: var(--profile-surface-soft);
            }

            .security-note-icon {
                width: 31px;
                height: 31px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: var(--profile-ink);
                color: #fff;
                flex-shrink: 0;
            }

            .security-note strong { color: var(--profile-ink); font-size: 12px; }
            .security-note p {
                margin: 3px 0 0;
                color: var(--profile-ink-2);
                font-size: 11px;
                line-height: 1.5;
            }

            /* Notifications */

            .notification-list { padding: 4px 0; }

            .notification-row {
                display: flex;
                align-items: center;
                gap: 13px;
                padding: 17px 26px;
                border-bottom: 1px solid var(--profile-border-soft);
            }

            .notification-icon {
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 9px;
                background: var(--profile-surface-soft);
                color: var(--profile-ink);
                flex-shrink: 0;
            }

            .notification-content { flex: 1; min-width: 0; }
            .notification-content strong { display: block; color: var(--profile-ink); font-size: 12.5px; }
            .notification-content span {
                display: block;
                margin-top: 3px;
                color: var(--profile-muted);
                font-size: 11px;
            }

            .toggle-switch {
                width: 40px;
                height: 23px;
                padding: 2px;
                border: 0;
                border-radius: 20px;
                background: #d9dee6;
                cursor: pointer;
                transition: background .15s ease;
                flex-shrink: 0;
            }

            .toggle-switch span {
                width: 19px;
                height: 19px;
                display: block;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 1px 3px rgba(0,0,0,.15);
                transition: transform .15s ease;
            }

            .toggle-switch.checked { background: var(--profile-green); }
            .toggle-switch.checked span { transform: translateX(17px); }

            .info-banner {
                display: flex;
                gap: 10px;
                margin: 22px 26px;
                padding: 13px;
                border-radius: 9px;
                border: 1px solid var(--profile-border);
                background: var(--profile-surface-soft);
                color: var(--profile-ink-2);
            }

            .info-banner strong { display: block; color: var(--profile-ink); font-size: 11.5px; }
            .info-banner p {
                margin: 3px 0 0;
                color: var(--profile-ink-2);
                font-size: 10.5px;
                line-height: 1.5;
            }

            /* Connected */

            .connected-empty { padding: 75px 25px; text-align: center; }

            .connected-icon {
                width: 64px;
                height: 64px;
                margin: 0 auto 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: var(--profile-surface-soft);
                color: var(--profile-muted);
            }

            .connected-empty h3 { margin: 0; font-size: 15px; font-weight: 700; color: var(--profile-ink); }
            .connected-empty p {
                max-width: 400px;
                margin: 6px auto 18px;
                color: var(--profile-muted);
                font-size: 11.5px;
                line-height: 1.55;
            }

            /* Modals */

            .modern-modal {
                border: 1px solid var(--profile-border) !important;
                border-radius: 14px !important;
                overflow: hidden;
                color: var(--profile-ink);
                box-shadow: 0 20px 60px rgba(10, 10, 10, .12);
            }

            .modern-modal .modal-header {
                padding: 20px 24px 16px !important;
                border-bottom: 1px solid var(--profile-border) !important;
            }

            .modern-modal .modal-body { padding: 20px 24px !important; }
            .modern-modal .modal-footer {
                padding: 14px 24px !important;
                border-top: 1px solid var(--profile-border) !important;
            }

            .modal-title { margin: 0; color: var(--profile-ink); font-size: 16.5px; font-weight: 700; }

            .modal-user-preview,
            .reset-profile {
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 11px;
                margin-bottom: 18px;
                background: var(--profile-surface-soft);
                border: 1px solid var(--profile-border);
                border-radius: 9px;
            }

            .modal-avatar,
            .reset-avatar {
                width: 40px;
                height: 40px;
                flex: 0 0 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: var(--profile-green);
                color: #fff;
                font-size: 12px;
                font-weight: 700;
            }

            .modal-user-preview strong,
            .reset-profile strong { display: block; color: var(--profile-ink); font-size: 12px; }

            .modal-user-preview span,
            .reset-profile span {
                display: block;
                margin-top: 2px;
                color: var(--profile-muted);
                font-size: 10.5px;
                word-break: break-word;
            }

            .form-grid { display: grid; gap: 15px; }
            .form-grid-two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

            .form-field label {
                display: block;
                margin-bottom: 5px;
                color: var(--profile-ink-2);
                font-size: 11.5px;
                font-weight: 600;
            }

            .modern-input {
                min-height: 39px;
                border: 1px solid var(--profile-border) !important;
                border-radius: 8px !important;
                background: var(--profile-surface-soft) !important;
                color: var(--profile-ink) !important;
                font-size: 12px !important;
                box-shadow: none !important;
            }

            .modern-input:focus {
                border-color: var(--profile-green) !important;
                background: #fff !important;
                box-shadow: 0 0 0 3px var(--profile-green-soft) !important;
            }

            .form-error {
                margin-top: 4px;
                color: var(--profile-danger);
                font-size: 10.5px;
                font-weight: 500;
            }

            .password-separation-note {
                display: flex;
                align-items: flex-start;
                gap: 8px;
                margin-top: 17px;
                padding: 10px;
                border-radius: 8px;
                background: var(--profile-surface-soft);
                border: 1px solid var(--profile-border);
                color: var(--profile-ink-2);
                font-size: 10.5px;
                line-height: 1.45;
            }

            .reset-message {
                display: flex;
                gap: 10px;
                padding: 13px;
                background: var(--profile-green-soft);
                border-radius: 9px;
            }

            .reset-message-icon {
                width: 31px;
                height: 31px;
                flex: 0 0 31px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: var(--profile-green);
                color: #fff;
            }

            .reset-message strong { display: block; color: var(--profile-ink); font-size: 11.5px; }
            .reset-message p {
                margin: 4px 0 0;
                color: var(--profile-ink-2);
                font-size: 10.5px;
                line-height: 1.55;
            }

            .delete-warning {
                display: flex;
                gap: 11px;
                padding: 13px;
                border-radius: 9px;
                background: var(--profile-danger-soft);
                border: 1px solid #f2cfcf;
            }

            .delete-warning-icon {
                width: 32px;
                height: 32px;
                flex: 0 0 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: #fff;
                color: var(--profile-danger);
            }

            .delete-warning strong { display: block; color: var(--profile-ink); font-size: 12px; }
            .delete-warning p {
                margin: 4px 0 0;
                color: var(--profile-ink-2);
                font-size: 10.5px;
                line-height: 1.5;
            }

            .cancel-button,
            .primary-button,
            .danger-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                min-height: 36px;
                padding: 0 15px;
                border-radius: 8px;
                font-size: 11.5px;
                font-weight: 600;
                cursor: pointer;
                transition: all .15s ease;
            }

            .cancel-button {
                border: 1px solid var(--profile-border);
                background: var(--profile-surface-soft);
                color: var(--profile-ink-2);
            }

            .cancel-button:hover { background: #eef0f1; }

            .primary-button {
                border: 1px solid var(--profile-green);
                background: var(--profile-green);
                color: #fff;
            }

            .primary-button:hover {
                background: var(--profile-green-dark);
                border-color: var(--profile-green-dark);
            }

            .danger-button {
                border: 1px solid var(--profile-danger);
                background: var(--profile-danger);
                color: #fff;
            }

            .danger-button:hover { background: #a82a2a; border-color: #a82a2a; }

            .primary-button:disabled,
            .danger-button:disabled { opacity: .6; cursor: not-allowed; }

            @media (max-width: 991px) {
                .user-profile-page { padding: 22px 20px 44px; }
                .profile-grid { grid-template-columns: 1fr; }
                .profile-sidebar {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 250px;
                    gap: 14px;
                }
                .quick-card { margin-top: 0; align-self: start; }
            }

            @media (max-width: 767px) {
                .user-profile-page { padding: 18px 14px 38px; }
                .page-heading { align-items: flex-start; flex-direction: column; }
                .page-heading h1 { font-size: 22px; }
                .profile-sidebar { display: block; }
                .quick-card { margin-top: 12px; }
                .content-header { padding: 20px 17px 17px; }
                .data-row {
                    align-items: flex-start;
                    flex-direction: column;
                    gap: 7px;
                    padding: 14px 17px;
                }
                .data-label { width: auto; }
                .data-value { padding-left: 35px; }
                .profile-summary { margin: 18px 17px; }
                .activity-item,
                .security-item,
                .notification-row { padding: 15px 17px; }
                .activity-result { display: none; }
                .activity-meta { line-height: 1.7; }
                .pagination-container {
                    padding: 14px 17px;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .pagination-links { width: 100%; overflow-x: auto; padding-bottom: 2px; }
                .security-item { align-items: flex-start; flex-wrap: wrap; }
                .security-item-content { width: calc(100% - 55px); }
                .security-item-action { margin-left: 51px; }
                .security-note,
                .info-banner { margin-left: 17px; margin-right: 17px; }
                .form-grid-two { grid-template-columns: 1fr; }
                .modal-dialog { margin: 10px; }
            }

            @media (max-width: 480px) {
                .content-header { flex-direction: column; }
                .outline-button,
                .event-count,
                .security-status { align-self: flex-start; }
                .profile-nav-item { padding: 10px; }
            }
        `})}export{se as default};
