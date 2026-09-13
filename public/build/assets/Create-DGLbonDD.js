import{u as L,r as f,j as e,H as A,L as v}from"./app-BV2sDVKx.js";import{A as D}from"./AppLayout-KiVsabfS.js";function Y({categories:s=[]}){const o={index:()=>route("admin.talents.index"),store:()=>route("admin.talents.store")},{data:i,setData:a,post:d,processing:g,errors:t,reset:$}=L({name:"",email:"",phone:"",address:"",category_id:"",level:"",language:"",description:"",image:null,status:"active",featured:!1,matched:!1}),[n,u]=f.useState(null),[C,m]=f.useState(!1),c=f.useRef(null),h=Object.keys(t||{}).length;f.useEffect(()=>()=>{n!=null&&n.startsWith("blob:")&&URL.revokeObjectURL(n)},[n]);const j=r=>{r&&r.type.startsWith("image/")&&(a("image",r),n!=null&&n.startsWith("blob:")&&URL.revokeObjectURL(n),u(URL.createObjectURL(r)))},z=r=>{var p;j((p=r.target.files)==null?void 0:p[0])},P=r=>{var p;r.preventDefault(),m(!1),j((p=r.dataTransfer.files)==null?void 0:p[0])},B=r=>{r==null||r.stopPropagation(),n!=null&&n.startsWith("blob:")&&URL.revokeObjectURL(n),u(null),a("image",null),c.current&&(c.current.value="")},M=r=>{r.preventDefault(),d(o.store(),{forceFormData:!0,preserveScroll:!0,onSuccess:()=>{u(null)}})},I=i.name?i.name.split(" ").filter(Boolean).slice(0,2).map(r=>r[0]).join("").toUpperCase():"TP",w=[i.name,i.email,i.phone,i.address,i.category_id,i.level,i.language,i.description,i.image],b=Math.round(w.filter(Boolean).length/w.length*100);return e.jsxs(D,{children:[e.jsx(A,{title:"Add New Talent"}),e.jsx("style",{children:V}),e.jsx("div",{className:"talent-create-page",children:e.jsxs("div",{className:"page-container",children:[e.jsxs("header",{className:"page-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(v,{href:o.index(),children:"Talents"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"Add new"})]}),e.jsxs("div",{className:"title-row",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Create talent profile"}),e.jsx("p",{children:"Add a professional profile to your talent directory."})]}),e.jsxs("div",{className:"header-status",children:[e.jsx("span",{className:"status-dot"}),"New profile"]})]})]}),e.jsxs(v,{href:o.index(),className:"back-button",children:[e.jsx(S,{}),"Back to talents"]})]}),h>0&&e.jsxs("div",{className:"error-alert",children:[e.jsx("div",{className:"alert-icon",children:e.jsx(U,{})}),e.jsxs("div",{children:[e.jsxs("strong",{children:[h," field",h>1?"s":""," need",h>1?"":"s"," attention"]}),e.jsx("span",{children:"Review the highlighted fields before saving this profile."})]})]}),e.jsx("form",{onSubmit:M,children:e.jsxs("div",{className:"workspace",children:[e.jsxs("main",{className:"main-column",children:[e.jsxs("section",{className:"panel",children:[e.jsx(x,{number:"01",title:"Personal information",description:"Core contact details for the talent."}),e.jsx("div",{className:"panel-body",children:e.jsxs("div",{className:"field-grid two",children:[e.jsx(l,{label:"Full name",required:!0,error:t.name,children:e.jsx("input",{value:i.name,onChange:r=>a("name",r.target.value),placeholder:"e.g. Amara Nkosi",className:t.name?"invalid":"",autoComplete:"name"})}),e.jsx(l,{label:"Email address",error:t.email,children:e.jsx("input",{type:"email",value:i.email,onChange:r=>a("email",r.target.value),placeholder:"email@example.com",className:t.email?"invalid":"",autoComplete:"email"})}),e.jsx(l,{label:"Phone number",error:t.phone,children:e.jsx("input",{value:i.phone,onChange:r=>a("phone",r.target.value),placeholder:"+250 7XX XXX XXX",className:t.phone?"invalid":"",autoComplete:"tel"})}),e.jsx(l,{label:"Address / location",error:t.address,children:e.jsx("input",{value:i.address,onChange:r=>a("address",r.target.value),placeholder:"City, Country",className:t.address?"invalid":""})})]})})]}),e.jsxs("section",{className:"panel",children:[e.jsx(x,{number:"02",title:"Professional profile",description:"Define the talent's area of expertise and profile identity."}),e.jsxs("div",{className:"panel-body",children:[e.jsxs("div",{className:"field-grid three",children:[e.jsx(l,{label:"Category",required:!0,error:t.category_id,children:e.jsxs("select",{value:i.category_id,onChange:r=>a("category_id",r.target.value),className:t.category_id?"invalid":"",children:[e.jsx("option",{value:"",children:"Select category"}),s.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]})}),e.jsx(l,{label:"Experience level",error:t.level,children:e.jsxs("select",{value:i.level,onChange:r=>a("level",r.target.value),className:t.level?"invalid":"",children:[e.jsx("option",{value:"",children:"Select level"}),["beginner","intermediate","advanced","expert"].map(r=>e.jsx("option",{value:r,children:y(r)},r))]})}),e.jsx(l,{label:"Primary language",error:t.language,children:e.jsx("input",{value:i.language,onChange:r=>a("language",r.target.value),placeholder:"English, French…",className:t.language?"invalid":""})})]}),e.jsx("div",{className:"field-grid one",children:e.jsxs(l,{label:"Bio / professional summary",error:t.description,hint:"A short introduction helps employers understand the talent quickly.",children:[e.jsx("textarea",{value:i.description,onChange:r=>a("description",r.target.value),placeholder:"Describe the talent's experience, strengths, interests and professional background…",className:t.description?"invalid":"",rows:7}),e.jsxs("div",{className:"character-count",children:[i.description.length," characters"]})]})})]})]}),e.jsxs("section",{className:"panel",children:[e.jsx(x,{number:"03",title:"Visibility & placement",description:"Control how this profile is presented in the platform."}),e.jsxs("div",{className:"panel-body settings-body",children:[e.jsxs("div",{className:"setting-item",children:[e.jsx("div",{className:"setting-icon blue",children:e.jsx(O,{})}),e.jsxs("div",{className:"setting-copy",children:[e.jsx("strong",{children:"Profile status"}),e.jsx("span",{children:"Decide whether this profile is available in the directory."})]}),e.jsxs("select",{className:"compact-select",value:i.status,onChange:r=>a("status",r.target.value),children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"pending",children:"Pending review"})]})]}),e.jsx("div",{className:"setting-divider"}),e.jsx(k,{icon:e.jsx(H,{}),title:"Featured profile",subtitle:"Highlight this talent in featured listings and discovery areas.",checked:i.featured,onChange:r=>a("featured",r)}),e.jsx("div",{className:"setting-divider"}),e.jsx(k,{icon:e.jsx(T,{}),title:"Matched",subtitle:"Mark this talent as successfully matched or placed.",checked:i.matched,onChange:r=>a("matched",r),last:!0})]})]}),e.jsxs("div",{className:"bottom-actions",children:[e.jsx(v,{href:o.index(),className:"cancel-button",children:"Cancel"}),e.jsx("button",{type:"submit",className:"save-button",disabled:g,children:g?e.jsxs(e.Fragment,{children:[e.jsx(Z,{}),"Creating profile…"]}):e.jsxs(e.Fragment,{children:[e.jsx(W,{}),"Create talent profile"]})})]})]}),e.jsxs("aside",{className:"side-column",children:[e.jsxs("section",{className:"profile-preview panel",children:[e.jsx(x,{number:"PREVIEW",title:"Profile preview",description:"A quick view of how the record starts to take shape."}),e.jsxs("div",{className:"preview-body",children:[e.jsxs("div",{className:"avatar-wrap",children:[n?e.jsx("img",{src:n,alt:"Profile preview",className:"avatar-image"}):e.jsx("div",{className:"avatar-placeholder",children:I}),e.jsx("button",{type:"button",className:"camera-button",onClick:()=>{var r;return(r=c.current)==null?void 0:r.click()},"aria-label":"Upload profile photo",children:e.jsx(E,{})})]}),e.jsx("h2",{children:i.name||"Talent name"}),e.jsx("p",{className:"preview-role",children:R(s,i.category_id)||"Professional category"}),e.jsxs("div",{className:"preview-tags",children:[i.level&&e.jsx("span",{children:y(i.level)}),i.language&&e.jsx("span",{children:i.language}),!i.level&&!i.language&&e.jsx("span",{children:"Profile details pending"})]}),e.jsxs("div",{className:"preview-contact",children:[i.email&&e.jsxs("div",{children:[e.jsx(F,{}),e.jsx("span",{children:i.email})]}),i.phone&&e.jsxs("div",{children:[e.jsx(X,{}),e.jsx("span",{children:i.phone})]}),i.address&&e.jsxs("div",{children:[e.jsx(_,{}),e.jsx("span",{children:i.address})]})]})]})]}),e.jsxs("section",{className:"completion-card",children:[e.jsxs("div",{className:"completion-top",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Profile readiness"}),e.jsxs("strong",{children:[b,"%"]})]}),e.jsx("div",{className:"completion-ring",children:e.jsxs("svg",{viewBox:"0 0 40 40",children:[e.jsx("circle",{cx:"20",cy:"20",r:"16",className:"ring-bg"}),e.jsx("circle",{cx:"20",cy:"20",r:"16",className:"ring-progress",style:{strokeDashoffset:100.5-100.5*b/100}})]})})]}),e.jsx("div",{className:"progress-track",children:e.jsx("span",{style:{width:`${b}%`}})}),e.jsx("p",{children:"Complete the important profile fields to create a stronger talent record."})]}),e.jsxs("section",{className:"panel upload-panel",children:[e.jsx(x,{number:"PHOTO",title:"Profile photo",description:"Use a clear professional image."}),e.jsxs("div",{className:"upload-body",children:[e.jsx("input",{ref:c,type:"file",accept:"image/png,image/jpeg,image/webp",onChange:z,hidden:!0}),e.jsx("div",{className:`drop-zone ${C?"dragging":""}`,onClick:()=>{var r;return(r=c.current)==null?void 0:r.click()},onDragOver:r=>{r.preventDefault(),m(!0)},onDragLeave:()=>m(!1),onDrop:P,children:n?e.jsxs("div",{className:"uploaded-preview",children:[e.jsx("img",{src:n,alt:"Selected profile"}),e.jsxs("div",{className:"image-overlay",children:[e.jsx(N,{}),"Change photo"]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"upload-symbol",children:e.jsx(N,{})}),e.jsx("strong",{children:"Drop image here"}),e.jsx("span",{children:"or click to browse"}),e.jsx("small",{children:"JPG, PNG or WEBP · Max 2 MB"})]})}),n&&e.jsx("button",{type:"button",className:"remove-photo",onClick:B,children:"Remove selected photo"}),t.image&&e.jsx("span",{className:"field-error image-error",children:t.image})]})]}),e.jsxs("section",{className:"info-card",children:[e.jsx("div",{className:"info-card-icon",children:e.jsx(q,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Admin-managed profile"}),e.jsx("p",{children:"You can update contact information, placement settings and the profile photo later from the talent record."})]})]})]})]})})]})})]})}function x({number:s,title:o,description:i}){return e.jsxs("div",{className:"panel-header",children:[e.jsx("div",{className:"section-number",children:s}),e.jsxs("div",{children:[e.jsx("h2",{children:o}),e.jsx("p",{children:i})]})]})}function l({label:s,required:o,error:i,hint:a,children:d}){return e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"field-label-row",children:[e.jsxs("label",{children:[s,o&&e.jsx("span",{className:"required",children:"*"})]}),a&&e.jsx("span",{className:"field-hint",children:a})]}),d,i&&e.jsx("span",{className:"field-error",children:i})]})}function k({icon:s,title:o,subtitle:i,checked:a,onChange:d,last:g=!1}){return e.jsxs("div",{className:`toggle-setting ${g?"last":""}`,children:[e.jsx("div",{className:"toggle-icon",children:s}),e.jsxs("div",{className:"setting-copy",children:[e.jsx("strong",{children:o}),e.jsx("span",{children:i})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:a,onChange:t=>d(t.target.checked)}),e.jsx("span",{className:"switch-track",children:e.jsx("span",{})})]})]})}function R(s,o){const i=s.find(a=>String(a.id)===String(o));return(i==null?void 0:i.name)||""}function y(s=""){return s.charAt(0).toUpperCase()+s.slice(1)}function S(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}function U(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 8v5M12 16h.01"})]})}function N(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M12 16V4M7 9l5-5 5 5"}),e.jsx("path",{d:"M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"})]})}function E(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"}),e.jsx("circle",{cx:"12",cy:"13",r:"3.2"})]})}function F(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m4 7 8 6 8-6"})]})}function X(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"M6.5 3.5 9 3l2 5-2 1.5a13 13 0 0 0 5.5 5.5L16 13l5 2-.5 2.5A3 3 0 0 1 17.5 20C10 19.5 4.5 14 4 6.5A3 3 0 0 1 6.5 3.5Z"})})}function _(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),e.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]})}function O(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]})}function H(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"})})}function T(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"m8.5 12 2.2 2.2 4.8-5.1"}),e.jsx("circle",{cx:"12",cy:"12",r:"9"})]})}function q(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M12 3 20 6v5c0 5-3.2 8.2-8 10-4.8-1.8-8-5-8-10V6l8-3Z"}),e.jsx("path",{d:"m8.5 12 2.2 2.2 4.8-5"})]})}function W(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"m5 12 4.5 4.5L19 7"})})}function Z(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"spinner",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",opacity:".25"}),e.jsx("path",{d:"M21 12a9 9 0 0 0-9-9"})]})}const V=`
.talent-create-page {
    --ink: #101828;
    --ink-2: #344054;
    --muted: #667085;
    --muted-2: #98a2b3;
    --line: #e4e7ec;
    --line-soft: #eef0f3;
    --surface: #ffffff;
    --page: #f7f8fa;
    --soft: #f2f4f7;
    --blue: #5d89c8;
    --blue-dark: #4775b3;
    --blue-soft: #eef4fb;
    --green: #12a36a;
    --danger: #d92d20;
    --danger-soft: #fef3f2;
    --radius: 12px;
    background: var(--page);
    min-height: calc(100vh - 60px);
    color: var(--ink);
}

.talent-create-page * {
    box-sizing: border-box;
}

.talent-create-page button,
.talent-create-page input,
.talent-create-page select,
.talent-create-page textarea {
    font: inherit;
}

.page-container {
    width: min(1240px, calc(100% - 40px));
    margin: 0 auto;
    padding: 30px 0 60px;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 25px;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 13px;
    color: var(--muted);
    font-size: 12px;
}

.breadcrumb a {
    color: var(--blue-dark);
    text-decoration: none;
    font-weight: 650;
}

.breadcrumb strong {
    color: var(--ink-2);
    font-weight: 600;
}

.title-row {
    display: flex;
    align-items: center;
    gap: 18px;
}

.title-row h1 {
    margin: 0;
    font-size: 29px;
    line-height: 1.15;
    letter-spacing: -.7px;
    font-weight: 760;
}

.title-row p {
    margin: 7px 0 0;
    color: var(--muted);
    font-size: 13.5px;
}

.header-status {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 1px solid #d9e3f2;
    background: var(--blue-soft);
    color: var(--blue-dark);
    border-radius: 999px;
    padding: 7px 10px;
    font-size: 11.5px;
    font-weight: 700;
    white-space: nowrap;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--blue);
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--line);
    background: var(--surface);
    color: var(--ink-2);
    text-decoration: none;
    border-radius: 9px;
    padding: 9px 13px;
    font-size: 12.5px;
    font-weight: 650;
    transition: .16s ease;
}

.back-button:hover {
    border-color: #c7d5e7;
    background: #fbfdff;
    color: var(--blue-dark);
}

.back-button svg,
.save-button svg,
.cancel-button svg {
    width: 15px;
    height: 15px;
    stroke-width: 2;
}

.error-alert {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #f5c9c5;
    background: var(--danger-soft);
    color: var(--danger);
    padding: 12px 14px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.alert-icon {
    display: flex;
    width: 31px;
    height: 31px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #fff;
    flex-shrink: 0;
}

.alert-icon svg {
    width: 16px;
    height: 16px;
    stroke-width: 2;
}

.error-alert strong,
.error-alert span {
    display: block;
}

.error-alert strong {
    font-size: 12.5px;
}

.error-alert span {
    margin-top: 2px;
    font-size: 11.5px;
    opacity: .85;
}

.workspace {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 330px;
    gap: 20px;
    align-items: start;
}

.main-column,
.side-column {
    min-width: 0;
}

.panel {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 18px;
}

.panel-header {
    display: flex;
    gap: 13px;
    align-items: flex-start;
    padding: 17px 19px;
    border-bottom: 1px solid var(--line-soft);
}

.section-number {
    min-width: 31px;
    height: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: var(--blue-soft);
    color: var(--blue-dark);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .5px;
}

.panel-header h2 {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.3;
    font-weight: 750;
    color: var(--ink);
}

.panel-header p {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 11.5px;
    line-height: 1.45;
}

.panel-body {
    padding: 20px;
}

.field-grid {
    display: grid;
    gap: 16px;
}

.field-grid.two {
    grid-template-columns: 1fr 1fr;
}

.field-grid.three {
    grid-template-columns: 1fr 1fr 1fr;
}

.field-grid.one {
    grid-template-columns: 1fr;
    margin-top: 17px;
}

.field {
    min-width: 0;
}

.field-label-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 7px;
}

.field label {
    color: var(--ink-2);
    font-size: 11.5px;
    font-weight: 700;
}

.required {
    color: var(--danger);
    margin-left: 3px;
}

.field-hint {
    color: var(--muted-2);
    font-size: 9.5px;
    text-align: right;
}

.field input,
.field select,
.field textarea {
    width: 100%;
    border: 1px solid #d8dde5;
    background: #fff;
    color: var(--ink);
    border-radius: 8px;
    outline: none;
    padding: 10px 11px;
    font-size: 12.5px;
    transition: border-color .15s ease, box-shadow .15s ease;
}

.field input,
.field select {
    height: 40px;
}

.field textarea {
    min-height: 145px;
    resize: vertical;
    line-height: 1.55;
}

.field input::placeholder,
.field textarea::placeholder {
    color: #b2b8c2;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(93, 137, 200, .12);
}

.field input.invalid,
.field select.invalid,
.field textarea.invalid {
    border-color: #e18a83;
    box-shadow: 0 0 0 3px rgba(217, 45, 32, .07);
}

.field-error {
    display: block;
    margin-top: 5px;
    color: var(--danger);
    font-size: 10.5px;
    line-height: 1.35;
}

.character-count {
    text-align: right;
    margin-top: 5px;
    color: var(--muted-2);
    font-size: 9.5px;
}

.settings-body {
    padding-top: 4px;
    padding-bottom: 4px;
}

.setting-item,
.toggle-setting {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 15px 0;
}

.setting-icon,
.toggle-icon {
    width: 35px;
    height: 35px;
    flex: 0 0 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    background: var(--soft);
    color: var(--ink-2);
}

.setting-icon.blue {
    color: var(--blue-dark);
    background: var(--blue-soft);
}

.setting-icon svg,
.toggle-icon svg {
    width: 16px;
    height: 16px;
    stroke-width: 1.8;
}

.setting-copy {
    min-width: 0;
    flex: 1;
}

.setting-copy strong,
.setting-copy span {
    display: block;
}

.setting-copy strong {
    color: var(--ink);
    font-size: 12px;
    font-weight: 700;
}

.setting-copy span {
    margin-top: 3px;
    color: var(--muted);
    font-size: 10.5px;
    line-height: 1.45;
}

.compact-select {
    min-width: 130px;
    height: 37px;
    border: 1px solid var(--line);
    background: #fff;
    border-radius: 8px;
    padding: 0 9px;
    color: var(--ink-2);
    font-size: 11.5px;
    outline: none;
}

.compact-select:focus {
    border-color: var(--blue);
}

.setting-divider {
    height: 1px;
    background: var(--line-soft);
}

.toggle-setting.last {
    padding-bottom: 16px;
}

.switch {
    position: relative;
    width: 40px;
    height: 23px;
    flex: 0 0 40px;
}

.switch input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.switch-track {
    position: absolute;
    inset: 0;
    cursor: pointer;
    border-radius: 999px;
    background: #d0d5dd;
    transition: .2s ease;
}

.switch-track span {
    position: absolute;
    width: 17px;
    height: 17px;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(16, 24, 40, .2);
    transition: .2s ease;
}

.switch input:checked + .switch-track {
    background: var(--blue);
}

.switch input:checked + .switch-track span {
    transform: translateX(17px);
}

.profile-preview .panel-header {
    padding-bottom: 14px;
}

.preview-body {
    padding: 22px 20px 20px;
    text-align: center;
}

.avatar-wrap {
    width: 94px;
    height: 94px;
    margin: 0 auto 13px;
    position: relative;
}

.avatar-placeholder,
.avatar-image {
    width: 94px;
    height: 94px;
    border-radius: 50%;
}

.avatar-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #eef4fb, #dce8f6);
    color: var(--blue-dark);
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -.5px;
    border: 4px solid #fff;
    box-shadow: 0 0 0 1px #dbe3ee;
}

.avatar-image {
    object-fit: cover;
    display: block;
    border: 4px solid #fff;
    box-shadow: 0 0 0 1px #dbe3ee;
}

.camera-button {
    position: absolute;
    right: -2px;
    bottom: 0;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    border: 3px solid #fff;
    background: var(--blue);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.camera-button svg {
    width: 13px;
    height: 13px;
    stroke-width: 1.9;
}

.preview-body h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 760;
    letter-spacing: -.2px;
}

.preview-role {
    margin: 4px 0 11px;
    color: var(--muted);
    font-size: 11.5px;
}

.preview-tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 17px;
}

.preview-tags span {
    border: 1px solid #dfe5ec;
    background: #fafbfc;
    color: var(--ink-2);
    border-radius: 999px;
    padding: 5px 8px;
    font-size: 9.5px;
    font-weight: 650;
}

.preview-contact {
    border-top: 1px solid var(--line-soft);
    padding-top: 13px;
    text-align: left;
}

.preview-contact div {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 6px 0;
}

.preview-contact svg {
    width: 13px;
    height: 13px;
    flex: 0 0 13px;
    color: var(--muted-2);
    stroke-width: 1.7;
}

.preview-contact span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--ink-2);
    font-size: 10.5px;
}

.completion-card {
    background: #101828;
    color: #fff;
    border-radius: var(--radius);
    padding: 17px;
    margin-bottom: 18px;
}

.completion-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.completion-top span,
.completion-top strong {
    display: block;
}

.completion-top span {
    color: #98a2b3;
    font-size: 10px;
    font-weight: 600;
}

.completion-top strong {
    margin-top: 3px;
    font-size: 23px;
    letter-spacing: -.6px;
}

.completion-ring {
    width: 42px;
    height: 42px;
}

.completion-ring svg {
    width: 42px;
    height: 42px;
    transform: rotate(-90deg);
}

.ring-bg,
.ring-progress {
    fill: none;
    stroke-width: 3;
}

.ring-bg {
    stroke: #344054;
}

.ring-progress {
    stroke: var(--blue);
    stroke-linecap: round;
    stroke-dasharray: 100.5;
}

.progress-track {
    height: 5px;
    margin-top: 15px;
    background: #344054;
    border-radius: 999px;
    overflow: hidden;
}

.progress-track span {
    display: block;
    height: 100%;
    background: var(--blue);
    border-radius: inherit;
    transition: width .2s ease;
}

.completion-card p {
    margin: 10px 0 0;
    color: #98a2b3;
    font-size: 10.5px;
    line-height: 1.5;
}

.upload-body {
    padding: 18px;
}

.drop-zone {
    min-height: 178px;
    border: 1.5px dashed #cfd5dd;
    border-radius: 10px;
    background: #fbfcfd;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    transition: .18s ease;
    overflow: hidden;
}

.drop-zone:hover,
.drop-zone.dragging {
    border-color: var(--blue);
    background: var(--blue-soft);
}

.upload-symbol {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #fff;
    color: var(--blue-dark);
    border: 1px solid #dfe7f1;
    margin-bottom: 9px;
}

.upload-symbol svg {
    width: 18px;
    height: 18px;
    stroke-width: 1.7;
}

.drop-zone strong {
    font-size: 11.5px;
    color: var(--ink-2);
}

.drop-zone > span {
    color: var(--muted);
    font-size: 10px;
    margin-top: 3px;
}

.drop-zone small {
    color: var(--muted-2);
    font-size: 9px;
    margin-top: 9px;
}

.uploaded-preview {
    position: relative;
    width: 100%;
    height: 178px;
}

.uploaded-preview img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-overlay {
    position: absolute;
    inset: auto 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    color: #fff;
    background: linear-gradient(transparent, rgba(16, 24, 40, .78));
    font-size: 10.5px;
    font-weight: 700;
}

.image-overlay svg {
    width: 13px;
    height: 13px;
}

.remove-photo {
    border: 0;
    background: transparent;
    color: var(--danger);
    font-size: 10.5px;
    font-weight: 650;
    cursor: pointer;
    padding: 9px 0 0;
}

.remove-photo:hover {
    text-decoration: underline;
}

.image-error {
    margin-top: 9px;
}

.info-card {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid #dce6f2;
    background: #f7faff;
    border-radius: var(--radius);
    padding: 14px;
}

.info-card-icon {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue-soft);
    color: var(--blue-dark);
    flex: 0 0 30px;
}

.info-card-icon svg {
    width: 15px;
    height: 15px;
}

.info-card strong {
    display: block;
    color: var(--ink);
    font-size: 11.5px;
}

.info-card p {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 10px;
    line-height: 1.5;
}

.bottom-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 9px;
    padding: 3px 0 0;
}

.cancel-button,
.save-button {
    min-height: 41px;
    border-radius: 9px;
    padding: 0 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
}

.cancel-button {
    border: 1px solid var(--line);
    background: #fff;
    color: var(--ink-2);
}

.cancel-button:hover {
    background: #fafafa;
}

.save-button {
    border: 1px solid var(--blue);
    background: var(--blue);
    color: #fff;
    box-shadow: 0 2px 4px rgba(71, 117, 179, .16);
    transition: .15s ease;
}

.save-button:hover {
    background: var(--blue-dark);
    border-color: var(--blue-dark);
}

.save-button:disabled {
    cursor: not-allowed;
    opacity: .65;
}

.spinner {
    animation: spin .8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@media (max-width: 1000px) {
    .workspace {
        grid-template-columns: minmax(0, 1fr) 290px;
    }

    .field-grid.three {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 820px) {
    .page-container {
        width: min(100% - 28px, 700px);
        padding-top: 22px;
    }

    .page-header {
        align-items: flex-start;
        flex-direction: column;
    }

    .back-button {
        align-self: flex-start;
    }

    .workspace {
        grid-template-columns: 1fr;
    }

    .side-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 18px;
    }

    .profile-preview,
    .completion-card,
    .upload-panel,
    .info-card {
        margin-bottom: 0;
    }

    .info-card {
        grid-column: 1 / -1;
    }
}

@media (max-width: 600px) {
    .page-container {
        width: calc(100% - 20px);
        padding-bottom: 35px;
    }

    .title-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 9px;
    }

    .title-row h1 {
        font-size: 24px;
    }

    .field-grid.two,
    .field-grid.three {
        grid-template-columns: 1fr;
    }

    .panel-header {
        padding: 15px;
    }

    .panel-body {
        padding: 16px 15px;
    }

    .side-column {
        display: flex;
        flex-direction: column;
    }

    .profile-preview,
    .completion-card,
    .upload-panel,
    .info-card {
        margin-bottom: 18px;
    }

    .setting-item,
    .toggle-setting {
        align-items: flex-start;
    }

    .compact-select {
        min-width: 110px;
    }

    .bottom-actions {
        position: sticky;
        bottom: 10px;
        z-index: 10;
        padding: 9px;
        background: rgba(247, 248, 250, .94);
        backdrop-filter: blur(10px);
        border: 1px solid var(--line);
        border-radius: 11px;
    }

    .cancel-button,
    .save-button {
        flex: 1;
    }
}

@media (max-width: 420px) {
    .header-status {
        display: none;
    }

    .field-hint {
        display: none;
    }

    .compact-select {
        min-width: 0;
        width: 112px;
    }

    .setting-copy span {
        max-width: 180px;
    }
}
`;export{Y as default};
