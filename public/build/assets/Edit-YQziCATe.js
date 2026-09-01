import{u as _,r as z,j as e,H as P,L as x}from"./app-DQcVR1sC.js";import{A as U}from"./AppLayout-D93w9Ma6.js";function ee({talent:r,categories:o}){var v,f,j,w,k,y;const t={index:()=>route("admin.talents.index"),show:a=>route("admin.talents.show",a),update:a=>route("admin.talents.update",a)},{data:i,setData:s,post:c,processing:l,errors:n,transform:D}=_({name:r.name??"",email:r.email??"",phone:r.phone??"",address:r.address??"",category_id:r.category_id??"",level:r.level??"",language:r.language??"",description:r.description??"",image:null,status:r.status??"active",featured:!!r.featured,matched:!!r.matched}),[g,M]=z.useState(null),m=z.useRef(null),E=a=>{var C;const p=(C=a.target.files)==null?void 0:C[0];if(!p)return;s("image",p);const N=new FileReader;N.onload=S=>M(S.target.result),N.readAsDataURL(p)},I=a=>{a.preventDefault(),D(p=>({...p,_method:"put"})),c(t.update(r.id),{forceFormData:!0})},u=Object.keys(n).length,b=(r.status||"inactive").toLowerCase();return e.jsxs(U,{children:[e.jsx(P,{title:`Edit Skill — ${r.name}`}),e.jsx("style",{children:K}),e.jsxs("div",{"data-h-scope":"skill-form",className:"page-shell",children:[e.jsxs("div",{className:"top-bar",children:[e.jsxs("nav",{className:"breadcrumb",children:[e.jsx(x,{href:t.index(),children:"Skills"}),e.jsx("span",{className:"sep",children:"›"}),e.jsx(x,{href:t.show(r.id),children:r.name}),e.jsx("span",{className:"sep",children:"›"}),e.jsx("span",{className:"current",children:"Edit"})]}),e.jsxs("div",{className:"header-btns",children:[e.jsxs(x,{href:t.show(r.id),className:"btn-icon view",children:[e.jsx(H,{})," View profile"]}),e.jsxs(x,{href:t.index(),className:"btn-icon back",children:[e.jsx(V,{})," Back"]})]})]}),e.jsxs("div",{className:"page-heading",children:[r.image?e.jsx("img",{src:r.image,alt:r.name,className:"talent-avatar"}):e.jsx("div",{className:"talent-avatar-placeholder",children:(f=(v=r.name)==null?void 0:v.charAt(0))==null?void 0:f.toUpperCase()}),e.jsxs("div",{className:"heading-text",children:[e.jsx("div",{className:"eyebrow",children:"Editing record"}),e.jsx("h1",{children:r.name}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["ID #",r.id]}),e.jsx("span",{className:"dot",children:"·"}),e.jsxs("span",{children:["Created ",A(r.created_at)]}),e.jsx("span",{className:"dot",children:"·"}),e.jsxs("span",{className:`status-chip ${b}`,children:[e.jsx("span",{className:"dot-indicator"}),F(b)]})]})]})]}),e.jsxs("div",{className:"edit-notice",children:[e.jsx(B,{}),"Changes won't be applied until you click ",e.jsx("strong",{children:'"Update skill"'}),"."]}),u>0&&e.jsxs("div",{className:"error-banner",children:[e.jsx(R,{}),u," error",u>1?"s":""," need your attention."]}),e.jsxs("form",{onSubmit:I,children:[e.jsxs("div",{className:"form-layout",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-head",children:[e.jsx("div",{className:"card-head-icon",children:e.jsx($,{})}),e.jsx("h2",{children:"Basic Information"})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"row-1",children:e.jsx(d,{label:"Full Name",required:!0,error:n.name,children:e.jsx("input",{type:"text",placeholder:"e.g. Amara Nkosi",className:n.name?"err":"",value:i.name,onChange:a=>s("name",a.target.value)})})}),e.jsxs("div",{className:"row",children:[e.jsx(d,{label:"Email Address",error:n.email,children:e.jsx("input",{type:"email",placeholder:"email@example.com",className:n.email?"err":"",value:i.email,onChange:a=>s("email",a.target.value)})}),e.jsx(d,{label:"Phone Number",children:e.jsx("input",{type:"text",placeholder:"+250 7XX XXX XXX",value:i.phone,onChange:a=>s("phone",a.target.value)})})]}),e.jsx("div",{className:"row-1",children:e.jsx(d,{label:"Address / Location",children:e.jsx("input",{type:"text",placeholder:"City, Country",value:i.address,onChange:a=>s("address",a.target.value)})})})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-head",children:[e.jsx("div",{className:"card-head-icon",children:e.jsx(q,{})}),e.jsx("h2",{children:"Profile Details"})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"row-3",children:[e.jsx(d,{label:"Category",required:!0,error:n.category_id,children:e.jsxs("select",{className:n.category_id?"err":"",value:i.category_id,onChange:a=>s("category_id",a.target.value),children:[e.jsx("option",{value:"",children:"Select…"}),o.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})}),e.jsx(d,{label:"Level",children:e.jsxs("select",{value:i.level,onChange:a=>s("level",a.target.value),children:[e.jsx("option",{value:"",children:"Select…"}),["beginner","intermediate","advanced","expert"].map(a=>e.jsx("option",{value:a,children:F(a)},a))]})}),e.jsx(d,{label:"Language",children:e.jsx("input",{type:"text",placeholder:"English, French…",value:i.language,onChange:a=>s("language",a.target.value)})})]}),e.jsx("div",{className:"row-1",children:e.jsx(d,{label:"Bio / Description",children:e.jsx("textarea",{value:i.description,onChange:a=>s("description",a.target.value)})})})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-head",children:[e.jsx("div",{className:"card-head-icon",children:e.jsx(G,{})}),e.jsx("h2",{children:"Profile Photo"})]}),e.jsxs("div",{className:"card-body",children:[r.image&&!g&&e.jsxs("div",{className:"current-img",children:[e.jsx("img",{src:r.image,alt:r.name}),e.jsxs("div",{className:"img-info",children:[e.jsx("div",{className:"img-label",children:"Current photo"}),e.jsx("div",{className:"img-name",children:W(r.image)})]})]}),e.jsxs("div",{className:"upload-zone",onClick:()=>{var a;return(a=m.current)==null?void 0:a.click()},children:[e.jsx("input",{ref:m,type:"file",accept:"image/*",onChange:E,style:{position:"absolute",inset:0,opacity:0,cursor:"pointer",width:"100%",height:"100%"}}),e.jsx("div",{className:"upload-icon",children:e.jsx(T,{})}),e.jsx("p",{children:r.image?"Replace photo":"Upload photo"}),e.jsx("small",{children:"PNG · JPG · WEBP — max 2 MB"})]}),g&&e.jsx("img",{id:"imagePreview",src:g,alt:"New preview",style:{display:"block"}}),n.image&&e.jsx("span",{className:"err-msg",style:{marginTop:8,display:"block"},children:n.image})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-head",children:[e.jsx("div",{className:"card-head-icon",children:e.jsx(O,{})}),e.jsx("h2",{children:"Settings"})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"row-1",style:{marginBottom:16},children:e.jsx(d,{label:"Status",children:e.jsxs("select",{value:i.status,onChange:a=>s("status",a.target.value),children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"pending",children:"Pending review"})]})})}),e.jsx(L,{title:"Featured",subtitle:"Show on homepage & top of listings",checked:i.featured,onChange:a=>s("featured",a)}),e.jsx(L,{title:"Matched",subtitle:"Successfully placed",checked:i.matched,onChange:a=>s("matched",a),last:!0})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-head",children:[e.jsx("div",{className:"card-head-icon gold",children:e.jsx(J,{})}),e.jsx("h2",{children:"Activity Overview"})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"stats-grid",children:[e.jsx(h,{value:((j=r.skills)==null?void 0:j.length)??0,label:"Skills"}),e.jsx(h,{value:((w=r.stories)==null?void 0:w.length)??0,label:"Stories"}),e.jsx(h,{value:((k=r.feedback)==null?void 0:k.length)??0,label:"Feedback"}),e.jsx(h,{value:((y=r.connections)==null?void 0:y.length)??0,label:"Connections"})]})}),e.jsxs("div",{className:"section-note",children:[e.jsx(B,{}),"Read-only — managed from within each section."]})]})]})]}),e.jsxs("div",{className:"submit-bar",children:[e.jsxs("div",{className:"timestamps",children:["Last updated: ",e.jsx("strong",{children:X(r.updated_at)}),e.jsx("br",{}),"Created: ",e.jsx("strong",{children:A(r.created_at,!0)})]}),e.jsxs("div",{className:"actions",children:[e.jsx(x,{href:t.index(),className:"btn-ghost",children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-primary",disabled:l,children:[e.jsx(Y,{})," ",l?"Updating…":"Update skill"]})]})]})]})]})]})}function F(r){return r&&r.charAt(0).toUpperCase()+r.slice(1)}function W(r){return r?r.split("/").pop():""}function A(r,o=!1){if(!r)return"N/A";const t=new Date(r);if(isNaN(t))return"N/A";const i=o?{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}:{day:"2-digit",month:"short",year:"numeric"};return t.toLocaleDateString("en-GB",i)}function X(r){if(!r)return"N/A";const o=new Date(r);if(isNaN(o))return"N/A";const t=Math.floor((Date.now()-o.getTime())/1e3),i=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60]];for(const[s,c]of i){const l=Math.floor(t/c);if(l>=1)return`${l} ${s}${l>1?"s":""} ago`}return"just now"}function d({label:r,required:o,error:t,children:i}){return e.jsxs("div",{className:"field",children:[e.jsxs("label",{children:[r," ",o&&e.jsx("span",{className:"req",children:"*"})]}),i,t&&e.jsx("span",{className:"err-msg",children:t})]})}function L({title:r,subtitle:o,checked:t,onChange:i,last:s=!1}){return e.jsxs("div",{className:"toggle-row",style:s?{borderBottom:"none",paddingBottom:0}:void 0,children:[e.jsxs("div",{className:"toggle-label",children:[e.jsx("strong",{children:r}),e.jsx("small",{children:o})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:t,onChange:c=>i(c.target.checked)}),e.jsx("span",{className:"switch-track"})]})]})}function h({value:r,label:o}){return e.jsxs("div",{className:"stat-tile",children:[e.jsx("div",{className:"val",children:r}),e.jsx("div",{className:"lbl",children:o})]})}function H(){return e.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}function V(){return e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}function B(){return e.jsxs("svg",{width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),e.jsx("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})}function R(){return e.jsxs("svg",{width:"15",height:"15",fill:"currentColor",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),e.jsx("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})]})}function $(){return e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})}function q(){return e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"})})}function G(){return e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})})}function T(){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})})}function O(){return e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}function J(){return e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"})})}function Y(){return e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})}const K=`
[data-h-scope="skill-form"] {
    --bg-base: #F5F6F8;
    --bg-surface: #F5f5f7;
    --bg-muted: #F0F2F5;
    --bg-input: #F8F9FB;
    --border: #E2E6EC;
    --border-focus: #3B6EF5;
    --text-label: #6B7280;
    --text-body: #1F2937;
    --text-head: #111827;
    --text-placeholder: #9CA3AF;
    --accent: #3B6EF5;
    --accent-light: #EEF2FF;
    --accent-hover: #2952D9;
    --danger: #DC2626;
    --danger-light: #FEF2F2;
    --warning: #D97706;
    --warning-light: #FFFBEB;
    --gold: #B45309;
    --gold-light: #FEF3C7;
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04);
    --shadow-md: 0 4px 12px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04);
    font-family: inherit;
}

.page-shell { max-width: 1080px; margin: 0 auto; padding: 32px 24px 56px; background: var(--bg-base); }

.top-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; gap: 12px; flex-wrap: wrap; }
.breadcrumb { display: flex; align-items: center; gap: 6px; font-size: 12.5px; color: var(--text-label); }
.breadcrumb a { color: var(--accent); text-decoration: none; font-weight: 500; }
.breadcrumb a:hover { text-decoration: underline; }
.breadcrumb .sep { color: #CBD5E1; font-size: 11px; }
.breadcrumb .current { color: var(--text-body); font-weight: 500; }
.header-btns { display: flex; gap: 8px; flex-wrap: wrap; }
.btn-icon { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; text-decoration: none; background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 7px 14px; box-shadow: var(--shadow-sm); transition: border-color .15s, color .15s, box-shadow .15s; }
.btn-icon.view { color: var(--accent); }
.btn-icon.view:hover { border-color: var(--accent); box-shadow: var(--shadow-md); }
.btn-icon.back { color: var(--text-label); }
.btn-icon.back:hover { border-color: #C4CDD8; color: var(--text-body); box-shadow: var(--shadow-md); }

.page-heading { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: 20px 24px; display: flex; align-items: center; gap: 18px; margin-bottom: 18px; flex-wrap: wrap; }
.talent-avatar { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border); flex-shrink: 0; }
.talent-avatar-placeholder { width: 56px; height: 56px; border-radius: 50%; background: var(--accent-light); border: 2px solid var(--border); flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 20px; font-weight: 700; }
.heading-text { flex: 1; }
.heading-text .eyebrow { font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--warning); margin-bottom: 3px; }
.heading-text h1 { font-size: 20px; font-weight: 700; color: var(--text-head); letter-spacing: -.3px; line-height: 1.2; }
.heading-text .meta { font-size: 12px; color: var(--text-label); margin-top: 3px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.heading-text .meta .dot { color: var(--border); }

.status-chip { display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; font-weight: 600; padding: 3px 10px; border-radius: 20px; }
.status-chip.active { background: #DCFCE7; color: #166534; }
.status-chip.inactive { background: #F3F4F6; color: #6B7280; }
.status-chip.pending { background: var(--warning-light); color: var(--warning); }
.status-chip .dot-indicator { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

.edit-notice { background: var(--warning-light); border: 1px solid #FDE68A; border-left: 3px solid var(--warning); border-radius: var(--radius); padding: 11px 16px; font-size: 12.5px; color: var(--warning); display: flex; align-items: center; gap: 9px; margin-bottom: 18px; font-weight: 500; }
.edit-notice svg { flex-shrink: 0; }

.error-banner { background: var(--danger-light); border: 1px solid #FECACA; border-left: 3px solid var(--danger); border-radius: var(--radius); padding: 12px 16px; font-size: 13px; color: var(--danger); display: flex; align-items: center; gap: 10px; margin-bottom: 18px; font-weight: 500; }

.form-layout { display: grid; grid-template-columns: 1fr 300px; gap: 20px; align-items: start; }
@media (max-width: 840px) { .form-layout { grid-template-columns: 1fr; } }

.card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); overflow: hidden; margin-bottom: 18px; }
.card:last-child { margin-bottom: 0; }
.card-head { padding: 14px 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; background: #FCFCFD; }
.card-head-icon { width: 30px; height: 30px; background: var(--accent-light); border-radius: 7px; display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0; }
.card-head-icon.gold { background: var(--gold-light); color: var(--gold); }
.card-head h2 { font-size: 13px; font-weight: 600; color: var(--text-head); margin: 0; }
.card-body { padding: 20px; }

.row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.row-1 { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 14px; }
.row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.row:last-child, .row-1:last-child, .row-3:last-child { margin-bottom: 0; }
@media (max-width: 580px) { .row, .row-3 { grid-template-columns: 1fr; } }

.field { display: flex; flex-direction: column; gap: 5px; }
.field label { font-size: 12px; font-weight: 600; color: var(--text-label); letter-spacing: .01em; }
.field label .req { color: var(--danger); margin-left: 2px; }
.field input, .field select, .field textarea {
    background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--radius);
    color: var(--text-body); font-family: inherit; font-size: 13.5px; line-height: 1.4;
    outline: none; padding: 9px 12px; transition: border-color .15s, box-shadow .15s, background .15s; width: 100%;
}
.field input:focus, .field select:focus, .field textarea:focus { background: #fff; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(59,110,245,.12); }
.field input::placeholder, .field textarea::placeholder { color: var(--text-placeholder); }
.field select { cursor: pointer; }
.field textarea { resize: vertical; min-height: 100px; }
.field .err-msg { font-size: 11.5px; color: var(--danger); font-weight: 500; }
.field input.err, .field select.err, .field textarea.err { border-color: var(--danger); box-shadow: 0 0 0 3px rgba(220,38,38,.1); }

.current-img { display: flex; align-items: center; gap: 14px; background: var(--bg-muted); border: 1px solid var(--border); border-radius: var(--radius); padding: 12px 14px; margin-bottom: 14px; }
.current-img img { width: 52px; height: 52px; border-radius: var(--radius); object-fit: cover; border: 1px solid var(--border); flex-shrink: 0; }
.current-img .img-label { font-size: 10.5px; font-weight: 600; color: var(--text-placeholder); text-transform: uppercase; letter-spacing: .07em; margin-bottom: 2px; }
.current-img .img-name { font-size: 12.5px; color: var(--text-body); word-break: break-all; font-weight: 500; }

.upload-zone { border: 2px dashed var(--border); border-radius: var(--radius); padding: 22px 16px; text-align: center; cursor: pointer; position: relative; overflow: hidden; transition: border-color .2s, background .2s; }
.upload-zone:hover { border-color: var(--accent); background: var(--accent-light); }
.upload-icon { width: 38px; height: 38px; background: var(--bg-muted); border: 1px solid var(--border); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: var(--text-label); margin-bottom: 8px; }
.upload-zone p { font-size: 13px; color: var(--text-label); font-weight: 500; margin: 0; }
.upload-zone small { font-size: 11.5px; color: var(--text-placeholder); display: block; margin-top: 3px; }
#imagePreview { width: 100%; border-radius: var(--radius); margin-top: 10px; max-height: 180px; object-fit: cover; border: 1px solid var(--border); }

.toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 13px 0; border-bottom: 1px solid var(--border); }
.toggle-label strong { font-size: 13px; font-weight: 500; color: var(--text-body); }
.toggle-label small { display: block; font-size: 11.5px; color: var(--text-label); margin-top: 2px; }
.switch { position: relative; width: 40px; height: 22px; flex-shrink: 0; }
.switch input { opacity: 0; width: 0; height: 0; position: absolute; }
.switch-track { position: absolute; inset: 0; background: #D1D5DB; border-radius: 22px; cursor: pointer; transition: background .2s; }
.switch-track::before { content: ''; position: absolute; width: 16px; height: 16px; left: 3px; top: 3px; background: #fff; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,.2); transition: transform .2s; }
.switch input:checked + .switch-track { background: var(--accent); }
.switch input:checked + .switch-track::before { transform: translateX(18px); }

.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.stat-tile { background: var(--bg-muted); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px; text-align: center; }
.stat-tile .val { font-size: 24px; font-weight: 800; color: var(--text-head); line-height: 1; }
.stat-tile .lbl { font-size: 11px; font-weight: 600; color: var(--text-label); text-transform: uppercase; letter-spacing: .07em; margin-top: 5px; }

.section-note { font-size: 11.5px; color: var(--text-placeholder); padding: 10px 20px; border-top: 1px solid var(--border); background: #FAFAFA; display: flex; align-items: center; gap: 6px; }
.section-note svg { flex-shrink: 0; }

.submit-bar { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: 16px 22px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-top: 20px; }
.submit-bar .timestamps { font-size: 12px; color: var(--text-placeholder); line-height: 1.7; }
.submit-bar .timestamps strong { color: var(--text-label); }
.actions { display: flex; gap: 10px; }

.btn-primary { background: var(--accent); color: #fff; border: none; border-radius: var(--radius); padding: 10px 24px; font-size: 13.5px; font-weight: 600; font-family: inherit; cursor: pointer; transition: background .15s, box-shadow .15s, transform .1s; display: inline-flex; align-items: center; gap: 7px; }
.btn-primary:hover { background: var(--accent-hover); box-shadow: 0 4px 14px rgba(59,110,245,.35); transform: translateY(-1px); }
.btn-primary:disabled { opacity: .7; cursor: default; transform: none; }
.btn-ghost { background: transparent; color: var(--text-label); border: 1px solid var(--border); border-radius: var(--radius); padding: 10px 20px; font-size: 13.5px; font-weight: 500; font-family: inherit; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; transition: border-color .15s, color .15s; }
.btn-ghost:hover { border-color: #C4CDD8; color: var(--text-body); }
`;export{ee as default};
