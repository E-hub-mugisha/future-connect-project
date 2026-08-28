import{d as z,r as d,u as w,j as e}from"./app-CzHhKsxF.js";import{U as S}from"./UserPanelLayout-D6dcKxFa.js";function N(a,r){try{return route(a,r)}catch{return console.warn(`route("${a}") failed — check Ziggy config.`),"#"}}function P(a){if(!a||typeof a!="string")return"?";const r=a.trim().split(/\s+/).filter(Boolean);return r.length===0?"?":r.length===1?r[0].slice(0,2).toUpperCase():(r[0][0]+r[r.length-1][0]).toUpperCase()}function C({message:a,type:r="success",onDone:t}){return d.useEffect(()=>{const n=setTimeout(t,3500);return()=>clearTimeout(n)},[t]),e.jsxs("div",{className:`pf-toast pf-toast-${r}`,children:[e.jsx("i",{className:`ti ${r==="success"?"ti-circle-check":"ti-alert-circle"}`}),a]})}function p({label:a,name:r,type:t="text",form:n,textarea:l,placeholder:f,hint:o,half:m}){const{data:u,setData:x,errors:s}=n,h=l?"textarea":"input";return e.jsxs("div",{className:`pf-field${m?" pf-field-half":""}`,children:[e.jsx("label",{className:"pf-label",htmlFor:r,children:a}),e.jsx(h,{id:r,type:l?void 0:t,rows:l?4:void 0,value:u[r]??"",placeholder:f,onChange:g=>x(r,g.target.value),className:`pf-input${s[r]?" pf-input-error":""}`}),o&&!s[r]&&e.jsx("span",{className:"pf-hint",children:o}),s[r]&&e.jsx("span",{className:"pf-error",children:s[r]})]})}function F(){var j;const{props:a}=z(),r=((j=a==null?void 0:a.auth)==null?void 0:j.user)||{},t=r.detail||{},[n,l]=d.useState("info"),[f,o]=d.useState(null),m=d.useRef(null),[u,x]=d.useState(t.photo?`/image/users/${t.photo}`:null),s=w({_method:"put",name:r.name||"",phone:t.phone||"",address:t.address||"",bio:t.bio||"",photo:null}),h=c=>{var y;const b=(y=c.target.files)==null?void 0:y[0];b&&(s.setData("photo",b),x(URL.createObjectURL(b)))},g=c=>{c.preventDefault(),s.post(N("user.profile.update",r.id),{forceFormData:!0,preserveScroll:!0,onSuccess:()=>o({type:"success",message:"Profile updated successfully."}),onError:()=>o({type:"error",message:"Please check the form for errors."})})},i=w({current_password:"",password:"",password_confirmation:""}),k=c=>{c.preventDefault(),i.put(N("user.profile.password"),{preserveScroll:!0,onSuccess:()=>{i.reset(),o({type:"success",message:"Password changed successfully."})},onError:()=>o({type:"error",message:"Please check the form for errors."})})},v=r.created_at?new Date(r.created_at).toLocaleDateString(void 0,{month:"long",year:"numeric"}):null;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .pf-wrap * { box-sizing: border-box; }
        .pf-wrap {
          --pf-green: var(--up-green, #48d597);
          --pf-surface: var(--up-surface, #141d20);
          --pf-surface2: var(--up-surface2, #1a2428);
          --pf-border: var(--up-border, rgba(0,166,103,0.16));
          --pf-border-h: var(--up-border-h, rgba(0,166,103,0.34));
          --pf-text: var(--up-text, #e8f0ed);
          --pf-muted: var(--up-muted, #7a9a8e);
          font-family: "DM Sans", "IBM Plex Sans", sans-serif;
          color: var(--pf-text);
          position: relative;
        }

        .pf-head { margin-bottom: 24px; }
        .pf-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--pf-green); margin: 0 0 6px; }
        .pf-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 26px; margin: 0; }
        .pf-subtitle { font-size: 13.5px; color: var(--pf-muted); margin: 6px 0 0; }

        .pf-grid { display: grid; grid-template-columns: 300px 1fr; gap: 20px; align-items: start; }

        /* ── Left card ── */
        .pf-card {
          background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 16px;
          padding: 26px 22px; text-align: center;
        }
        .pf-avatar-wrap { position: relative; width: 96px; height: 96px; margin: 0 auto 16px; }
        .pf-avatar {
          width: 96px; height: 96px; border-radius: 50%; overflow: hidden;
          background: var(--pf-green); color: #06231a; display: flex; align-items: center; justify-content: center;
          font-family: "Syne", sans-serif; font-weight: 700; font-size: 30px;
          border: 3px solid var(--pf-surface); box-shadow: 0 0 0 1px var(--pf-border);
        }
        .pf-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .pf-avatar-edit {
          position: absolute; bottom: 0; right: 0; width: 30px; height: 30px; border-radius: 50%;
          background: var(--pf-green); color: #06231a; border: 3px solid var(--pf-surface);
          display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 13px;
        }
        .pf-name { font-family: "Syne", sans-serif; font-weight: 700; font-size: 17px; margin: 0 0 2px; }
        .pf-email { font-size: 12.5px; color: var(--pf-muted); margin: 0 0 16px; word-break: break-all; }
        .pf-meta-row {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-size: 12px; color: var(--pf-muted); padding-top: 14px; border-top: 1px solid var(--pf-border);
        }
        .pf-meta-row i { color: var(--pf-green); font-size: 14px; }

        .pf-nav { margin-top: 16px; display: flex; flex-direction: column; gap: 4px; }
        .pf-nav button {
          display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 10px;
          border: none; background: transparent; color: var(--pf-muted); font-size: 13.5px; font-weight: 500;
          text-align: left; cursor: pointer; transition: all 0.15s; width: 100%;
        }
        .pf-nav button:hover { background: rgba(72,213,151,0.08); color: var(--pf-text); }
        .pf-nav button.active { background: rgba(72,213,151,0.12); color: var(--pf-text); }
        .pf-nav button.active i { color: var(--pf-green); }
        .pf-nav button i { font-size: 15px; width: 18px; text-align: center; }

        /* ── Right panel ── */
        .pf-panel {
          background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 16px;
          padding: 26px 28px;
        }
        .pf-panel-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 16px; margin: 0 0 4px; }
        .pf-panel-desc { font-size: 13px; color: var(--pf-muted); margin: 0 0 22px; }

        .pf-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 18px; }
        .pf-field { display: flex; flex-direction: column; gap: 6px; grid-column: span 2; }
        .pf-field-half { grid-column: span 1; }
        @media (max-width: 640px) { .pf-field-half { grid-column: span 2; } }

        .pf-label { font-size: 12.5px; font-weight: 600; color: var(--pf-text); }
        .pf-input {
          width: 100%; padding: 11px 13px; border-radius: 10px; border: 1px solid var(--pf-border);
          background: var(--pf-surface2); color: var(--pf-text); font-size: 13.5px; font-family: inherit;
          transition: border-color 0.15s;
        }
        .pf-input::placeholder { color: var(--pf-muted); }
        .pf-input:focus { outline: none; border-color: var(--pf-green); }
        .pf-input-error { border-color: #ff6b6b; }
        textarea.pf-input { resize: vertical; }
        .pf-hint { font-size: 11.5px; color: var(--pf-muted); }
        .pf-error { font-size: 11.5px; color: #ff6b6b; }

        .pf-actions { display: flex; align-items: center; gap: 12px; margin-top: 24px; grid-column: span 2; }
        .pf-btn {
          display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; border-radius: 10px;
          border: none; background: var(--pf-green); color: #06231a; font-size: 13.5px; font-weight: 700;
          cursor: pointer; transition: opacity 0.15s; font-family: inherit;
        }
        .pf-btn:hover { opacity: 0.9; }
        .pf-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .pf-btn-ghost {
          background: transparent; border: 1px solid var(--pf-border); color: var(--pf-text); font-weight: 500;
        }
        .pf-btn-ghost:hover { border-color: var(--pf-border-h); }

        .pf-divider { height: 1px; background: var(--pf-border); margin: 26px 0; }

        .pf-danger-box {
          border: 1px solid rgba(255,107,107,0.3); background: rgba(255,107,107,0.05);
          border-radius: 12px; padding: 16px 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
        }
        .pf-danger-box h6 { margin: 0 0 3px; font-size: 13.5px; font-family: "Syne", sans-serif; }
        .pf-danger-box p { margin: 0; font-size: 12px; color: var(--pf-muted); }
        .pf-btn-danger { background: transparent; border: 1px solid #ff6b6b; color: #ff6b6b; }
        .pf-btn-danger:hover { background: rgba(255,107,107,0.1); }

        /* ── Toast ── */
        .pf-toast {
          position: fixed; top: 20px; right: 20px; z-index: 100;
          display: flex; align-items: center; gap: 10px; padding: 13px 18px; border-radius: 12px;
          background: var(--pf-surface); border: 1px solid var(--pf-border); font-size: 13.5px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
          animation: pf-slide-in 0.25s ease;
        }
        .pf-toast-success i { color: var(--pf-green); }
        .pf-toast-error i { color: #ff6b6b; }
        @keyframes pf-slide-in { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 900px) {
          .pf-grid { grid-template-columns: 1fr; }
        }
      `}),e.jsxs("div",{className:"pf-wrap",children:[f&&e.jsx(C,{...f,onDone:()=>o(null)}),e.jsxs("div",{className:"pf-head",children:[e.jsx("p",{className:"pf-eyebrow",children:"Account"}),e.jsx("h1",{className:"pf-title",children:"Profile settings"}),e.jsx("p",{className:"pf-subtitle",children:"Manage your personal information and account security."})]}),e.jsxs("div",{className:"pf-grid",children:[e.jsxs("div",{className:"pf-card",children:[e.jsxs("div",{className:"pf-avatar-wrap",children:[e.jsx("span",{className:"pf-avatar",children:u?e.jsx("img",{src:u,alt:r.name}):P(r.name)}),e.jsx("label",{className:"pf-avatar-edit",htmlFor:"photo-upload",children:e.jsx("i",{className:"ti ti-camera"})}),e.jsx("input",{ref:m,id:"photo-upload",type:"file",accept:"image/jpeg,image/png,image/webp",style:{display:"none"},onChange:h})]}),e.jsx("h4",{className:"pf-name",children:r.name||"Your name"}),e.jsx("p",{className:"pf-email",children:r.email}),v&&e.jsxs("div",{className:"pf-meta-row",children:[e.jsx("i",{className:"ti ti-calendar"})," Member since ",v]}),e.jsxs("nav",{className:"pf-nav",children:[e.jsxs("button",{className:n==="info"?"active":"",onClick:()=>l("info"),type:"button",children:[e.jsx("i",{className:"ti ti-user"})," Personal info"]}),e.jsxs("button",{className:n==="security"?"active":"",onClick:()=>l("security"),type:"button",children:[e.jsx("i",{className:"ti ti-lock"})," Security"]})]})]}),n==="info"?e.jsxs("div",{className:"pf-panel",children:[e.jsx("h6",{className:"pf-panel-title",children:"Personal information"}),e.jsx("p",{className:"pf-panel-desc",children:"Update your name, contact details and a short bio visible on your account."}),e.jsx("form",{onSubmit:g,children:e.jsxs("div",{className:"pf-form-grid",children:[e.jsx(p,{label:"Full name",name:"name",form:s,half:!0,placeholder:"e.g. Jean d'Amour"}),e.jsxs("div",{className:"pf-field pf-field-half",children:[e.jsx("label",{className:"pf-label",htmlFor:"email-readonly",children:"Email address"}),e.jsx("input",{id:"email-readonly",className:"pf-input",value:r.email||"",disabled:!0,style:{opacity:.6,cursor:"not-allowed"}}),e.jsx("span",{className:"pf-hint",children:"Email can't be changed here — contact support to update it."})]}),e.jsx(p,{label:"Phone number",name:"phone",form:s,half:!0,placeholder:"078XXXXXXX"}),e.jsx(p,{label:"Address",name:"address",form:s,half:!0,placeholder:"District, City"}),e.jsx(p,{label:"Bio",name:"bio",form:s,textarea:!0,placeholder:"A short introduction about yourself",hint:"Max 500 characters."}),e.jsxs("div",{className:"pf-actions",children:[e.jsx("button",{type:"submit",className:"pf-btn",disabled:s.processing,children:s.processing?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ti ti-loader-2"})," Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ti ti-device-floppy"})," Save changes"]})}),e.jsx("button",{type:"button",className:"pf-btn pf-btn-ghost",onClick:()=>{s.reset(),x(t.photo?`/image/users/${t.photo}`:null)},children:"Cancel"})]})]})})]}):e.jsxs("div",{className:"pf-panel",children:[e.jsx("h6",{className:"pf-panel-title",children:"Security"}),e.jsx("p",{className:"pf-panel-desc",children:"Change your password to keep your account secure."}),e.jsx("form",{onSubmit:k,children:e.jsxs("div",{className:"pf-form-grid",children:[e.jsx(p,{label:"Current password",name:"current_password",type:"password",form:i,placeholder:"Enter current password"}),e.jsx(p,{label:"New password",name:"password",type:"password",form:i,half:!0,placeholder:"At least 8 characters"}),e.jsx(p,{label:"Confirm new password",name:"password_confirmation",type:"password",form:i,half:!0,placeholder:"Repeat new password"}),e.jsx("div",{className:"pf-actions",children:e.jsx("button",{type:"submit",className:"pf-btn",disabled:i.processing,children:i.processing?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ti ti-loader-2"})," Updating..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"ti ti-shield-check"})," Update password"]})})})]})}),e.jsx("div",{className:"pf-divider"}),e.jsxs("div",{className:"pf-danger-box",children:[e.jsxs("div",{children:[e.jsx("h6",{children:"Sign out everywhere"}),e.jsx("p",{children:"Log out of all other sessions on other devices and browsers."})]}),e.jsxs("button",{type:"button",className:"pf-btn pf-btn-danger",children:[e.jsx("i",{className:"ti ti-logout-2"})," Sign out other sessions"]})]})]})]})]})]})}F.layout=a=>e.jsx(S,{children:a});export{F as default};
