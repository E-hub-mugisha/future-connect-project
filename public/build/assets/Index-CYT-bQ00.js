import{u as C,r as f,j as e,H as F}from"./app-DQcVR1sC.js";import{A as N}from"./AppLayout-D93w9Ma6.js";function X({settings:a,flash:n}){const l={update:()=>route("admin.settings.update")},{data:o,setData:t,post:p,processing:h,errors:s,transform:j}=C({site_name:(a==null?void 0:a.site_name)??"",logo:null,default_language:(a==null?void 0:a.default_language)??"en",timezone:(a==null?void 0:a.timezone)??"Africa/Kigali",contact_email:(a==null?void 0:a.contact_email)??"",contact_phone:(a==null?void 0:a.contact_phone)??"",contact_address:(a==null?void 0:a.contact_address)??"",facebook_link:(a==null?void 0:a.facebook_link)??"",twitter_link:(a==null?void 0:a.twitter_link)??"",instagram_link:(a==null?void 0:a.instagram_link)??"",linkedin_link:(a==null?void 0:a.linkedin_link)??"",registration_open:(a==null?void 0:a.registration_open)??!0,enable_notifications:(a==null?void 0:a.enable_notifications)??!0}),[x,w]=f.useState(null),u=f.useRef(null),k=r=>{var m;const c=(m=r.target.files)==null?void 0:m[0];if(!c)return;t("logo",c);const g=new FileReader;g.onload=_=>w(_.target.result),g.readAsDataURL(c)},y=r=>{r.preventDefault(),j(c=>({...c,_method:"put"})),p(l.update(),{forceFormData:!0})};return e.jsxs(N,{children:[e.jsx(F,{title:"Settings"}),e.jsx("style",{children:B}),e.jsxs("div",{"data-h-scope":"settings",className:"settings-page",children:[e.jsx("div",{className:"page-head",children:e.jsxs("div",{children:[e.jsx("div",{className:"eyebrow",children:"Configuration"}),e.jsx("h1",{className:"page-title",children:"Platform Settings"}),e.jsx("p",{className:"page-sub",children:"Control how your platform looks, behaves, and is reached."})]})}),(n==null?void 0:n.success)&&e.jsxs("div",{className:"flash-success",children:[e.jsx(v,{}),n.success]}),e.jsxs("form",{onSubmit:y,children:[e.jsxs("div",{className:"settings-grid",children:[e.jsxs(d,{icon:e.jsx(L,{}),title:"General Settings",subtitle:"Core identity of your platform",children:[e.jsxs("div",{className:"row",children:[e.jsx(i,{label:"Site Name",required:!0,error:s.site_name,children:e.jsx("input",{type:"text",className:s.site_name?"err":"",value:o.site_name,onChange:r=>t("site_name",r.target.value),required:!0})}),e.jsx(i,{label:"Site Logo",error:s.logo,children:e.jsxs("div",{className:"logo-uploader",children:[(x||(a==null?void 0:a.logo))&&e.jsx("img",{src:x||a.logo,alt:"Site logo",className:"logo-preview"}),e.jsxs("button",{type:"button",className:"btn-file",onClick:()=>{var r;return(r=u.current)==null?void 0:r.click()},children:[e.jsx(A,{})," ",a!=null&&a.logo||x?"Replace logo":"Upload logo"]}),e.jsx("input",{ref:u,type:"file",accept:"image/*",onChange:k,style:{display:"none"}})]})})]}),e.jsxs("div",{className:"row",children:[e.jsx(i,{label:"Default Language",children:e.jsxs("select",{value:o.default_language,onChange:r=>t("default_language",r.target.value),children:[e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"rw",children:"Kinyarwanda"})]})}),e.jsx(i,{label:"Timezone",children:e.jsx("input",{type:"text",value:o.timezone,onChange:r=>t("timezone",r.target.value),placeholder:"Africa/Kigali"})})]})]}),e.jsxs(d,{icon:e.jsx(z,{}),title:"Contact Settings",subtitle:"How people reach your organization",children:[e.jsxs("div",{className:"row",children:[e.jsx(i,{label:"Email",error:s.contact_email,children:e.jsx("input",{type:"email",className:s.contact_email?"err":"",value:o.contact_email,onChange:r=>t("contact_email",r.target.value),placeholder:"hello@example.com"})}),e.jsx(i,{label:"Phone",children:e.jsx("input",{type:"text",value:o.contact_phone,onChange:r=>t("contact_phone",r.target.value),placeholder:"+250 7XX XXX XXX"})})]}),e.jsx("div",{className:"row-1",children:e.jsx(i,{label:"Address",children:e.jsx("textarea",{value:o.contact_address,onChange:r=>t("contact_address",r.target.value),placeholder:"Street, city, country"})})})]}),e.jsx(d,{icon:e.jsx(E,{}),title:"Social Links",subtitle:"Profiles linked across the platform",children:e.jsxs("div",{className:"row",children:[e.jsx(i,{label:"Facebook",children:e.jsx("input",{type:"text",value:o.facebook_link,onChange:r=>t("facebook_link",r.target.value),placeholder:"https://facebook.com/…"})}),e.jsx(i,{label:"Twitter / X",children:e.jsx("input",{type:"text",value:o.twitter_link,onChange:r=>t("twitter_link",r.target.value),placeholder:"https://x.com/…"})}),e.jsx(i,{label:"Instagram",children:e.jsx("input",{type:"text",value:o.instagram_link,onChange:r=>t("instagram_link",r.target.value),placeholder:"https://instagram.com/…"})}),e.jsx(i,{label:"LinkedIn",children:e.jsx("input",{type:"text",value:o.linkedin_link,onChange:r=>t("linkedin_link",r.target.value),placeholder:"https://linkedin.com/…"})})]})}),e.jsxs(d,{icon:e.jsx(S,{}),title:"Feature Toggles",subtitle:"Switch platform behavior on or off",children:[e.jsx(b,{title:"Open Registration",subtitle:"Allow new users to sign up without an invite",checked:o.registration_open,onChange:r=>t("registration_open",r)}),e.jsx(b,{title:"Enable Notifications",subtitle:"Send platform notifications to users",checked:o.enable_notifications,onChange:r=>t("enable_notifications",r),last:!0})]})]}),e.jsxs("div",{className:"save-bar",children:[e.jsx("p",{className:"note",children:"Changes apply platform-wide once saved."}),e.jsxs("button",{type:"submit",className:"btn-save",disabled:h,children:[e.jsx(v,{})," ",h?"Saving…":"Save Settings"]})]})]})]})]})}function d({icon:a,title:n,subtitle:l,children:o}){return e.jsxs("div",{className:"settings-card",children:[e.jsxs("div",{className:"settings-card-head",children:[e.jsx("div",{className:"settings-card-icon",children:a}),e.jsxs("div",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:l})]})]}),e.jsx("div",{className:"settings-card-body",children:o})]})}function i({label:a,required:n,error:l,children:o}){return e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:[a," ",n&&e.jsx("span",{className:"req",children:"*"})]}),o,l&&e.jsx("span",{className:"err-msg",children:l})]})}function b({title:a,subtitle:n,checked:l,onChange:o,last:t=!1}){return e.jsxs("div",{className:"toggle-row",style:t?{borderBottom:"none",paddingBottom:0}:void 0,children:[e.jsxs("div",{className:"toggle-label",children:[e.jsx("strong",{children:a}),e.jsx("small",{children:n})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:p=>o(p.target.checked)}),e.jsx("span",{className:"switch-track"})]})]})}function v(){return e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}function L(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{strokeLinecap:"round",d:"M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"})]})}function z(){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})})}function E(){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"})})}function S(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[e.jsx("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"}),e.jsx("circle",{cx:"16",cy:"12",r:"3"})]})}function A(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})})}const B=`
[data-h-scope="settings"] {
    --accent:        #4F46E5;
    --accent-light:  #EEF0FE;
    --accent-dark:   #4338CA;
    --surface:       #FFFFFF;
    --canvas:        #F6F7FB;
    --text-hi:       #101323;
    --text-mid:      #565D72;
    --text-lo:       #9AA0B4;
    --border:        #E9EBF3;
    --border-med:    #DCDFEC;
    --success:       #0EA96B;
    --success-bg:    #E9FAF2;
    --danger:        #E1493F;
    --danger-bg:     #FDEEEC;
    --radius-lg:     16px;
    --radius-md:     10px;
    --radius-sm:     7px;
    --shadow-card:   0 1px 2px rgba(16,19,35,.04), 0 1px 8px rgba(16,19,35,.04);
    font-family: inherit;
}

.settings-page { padding: 28px 32px 56px; background: var(--canvas); max-width: 980px; margin: 0 auto; }

.page-head { margin-bottom: 20px; }
.eyebrow { font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin-bottom: 5px; }
.page-title { font-size: 24px; font-weight: 800; color: var(--text-hi); letter-spacing: -.5px; margin: 0; }
.page-sub { font-size: 13px; color: var(--text-lo); margin-top: 4px; }

.flash-success { background: var(--success-bg); border: 1px solid rgba(14,169,107,.22); color: #085A3C; border-radius: var(--radius-md); padding: 12px 18px; font-size: 13px; display: flex; align-items: center; gap: 9px; margin-bottom: 20px; }

.settings-grid { display: flex; flex-direction: column; gap: 18px; }

.settings-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-card); overflow: hidden; }
.settings-card-head { display: flex; align-items: flex-start; gap: 12px; padding: 18px 22px; border-bottom: 1px solid var(--border); background: #FCFCFE; }
.settings-card-icon { width: 34px; height: 34px; border-radius: var(--radius-sm); background: var(--accent-light); color: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.settings-card-head h2 { font-size: 14.5px; font-weight: 700; color: var(--text-hi); margin: 0; }
.settings-card-head p { font-size: 12.5px; color: var(--text-lo); margin: 2px 0 0; }
.settings-card-body { padding: 22px; }

.row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.row-1 { display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 16px; }
.row:last-child, .row-1:last-child { margin-bottom: 0; }
@media (max-width: 640px) { .row { grid-template-columns: 1fr; } }

.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 12px; font-weight: 700; color: var(--text-mid); letter-spacing: .01em; }
.field label .req { color: var(--danger); margin-left: 2px; }
.field input, .field select, .field textarea {
    background: #FBFBFE; border: 1px solid var(--border-med); border-radius: var(--radius-sm);
    color: var(--text-hi); font-family: inherit; font-size: 13.5px; line-height: 1.4;
    outline: none; padding: 9px 12px; transition: border-color .15s, box-shadow .15s, background .15s; width: 100%;
}
.field input:focus, .field select:focus, .field textarea:focus { background: #fff; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(79,70,229,.1); }
.field select { cursor: pointer; }
.field textarea { min-height: 80px; resize: vertical; }
.field input.err { border-color: var(--danger); box-shadow: 0 0 0 3px rgba(225,73,63,.1); }
.err-msg { font-size: 11.5px; color: var(--danger); font-weight: 600; }

.logo-uploader { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.logo-preview { height: 44px; max-width: 140px; object-fit: contain; border-radius: var(--radius-sm); border: 1px solid var(--border-med); padding: 4px; background: #fff; }
.btn-file { display: inline-flex; align-items: center; gap: 7px; background: #F1F2F8; border: 1px solid var(--border); color: var(--text-mid); border-radius: var(--radius-sm); padding: 9px 14px; font-size: 12.5px; font-weight: 600; cursor: pointer; transition: background .15s, color .15s; }
.btn-file:hover { background: var(--accent-light); color: var(--accent); border-color: #C9CDF9; }

.toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid var(--border); }
.toggle-row:last-child { border-bottom: none; padding-bottom: 0; }
.toggle-row:first-child { padding-top: 0; }
.toggle-label strong { font-size: 13.5px; font-weight: 600; color: var(--text-hi); }
.toggle-label small { display: block; font-size: 12px; color: var(--text-lo); margin-top: 2px; }
.switch { position: relative; width: 42px; height: 23px; flex-shrink: 0; }
.switch input { opacity: 0; width: 0; height: 0; position: absolute; }
.switch-track { position: absolute; inset: 0; background: #D1D5DB; border-radius: 24px; cursor: pointer; transition: background .2s; }
.switch-track::before { content: ''; position: absolute; width: 17px; height: 17px; left: 3px; top: 3px; background: #fff; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,.2); transition: transform .2s; }
.switch input:checked + .switch-track { background: var(--accent); }
.switch input:checked + .switch-track::before { transform: translateX(19px); }

.save-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 20px; padding: 16px 22px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-card); flex-wrap: wrap; }
.save-bar .note { font-size: 12px; color: var(--text-lo); }
.btn-save { background: var(--accent); color: #fff; border: none; border-radius: var(--radius-sm); padding: 10px 22px; font-size: 13.5px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 7px; transition: background .15s, box-shadow .15s, transform .12s; }
.btn-save:hover { background: var(--accent-dark); box-shadow: 0 8px 20px rgba(79,70,229,.28); transform: translateY(-1px); }
.btn-save:disabled { opacity: .7; cursor: default; transform: none; }
`;export{X as default};
