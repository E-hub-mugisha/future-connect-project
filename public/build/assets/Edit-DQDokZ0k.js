import{r as u,u as $,j as e,H as W,L as f}from"./app-BV2sDVKx.js";import{A as Z}from"./AppLayout-KiVsabfS.js";function me({talent:i,categories:o=[]}){var P,R,E,S;const a={index:()=>route("admin.talents.index"),show:r=>route("admin.talents.show",r),update:r=>route("admin.talents.update",r)},l=u.useMemo(()=>({name:(i==null?void 0:i.name)??"",email:(i==null?void 0:i.email)??"",phone:(i==null?void 0:i.phone)??"",address:(i==null?void 0:i.address)??"",category_id:(i==null?void 0:i.category_id)??"",level:(i==null?void 0:i.level)??"",language:(i==null?void 0:i.language)??"",description:(i==null?void 0:i.description)??"",image:null,status:(i==null?void 0:i.status)??"active",featured:!!(i!=null&&i.featured),matched:!!(i!=null&&i.matched)}),[i]),{data:t,setData:d,post:p,processing:C,errors:n,transform:O,isDirty:T}=$(l),[s,z]=u.useState(null),[U,w]=u.useState(!1),h=u.useRef(null),m=Object.keys(n||{}).length;u.useEffect(()=>()=>{s!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(s)},[s]);const I=r=>{r&&r.type.startsWith("image/")&&(d("image",r),s!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(s),z(URL.createObjectURL(r)))},F=r=>{var x;I((x=r.target.files)==null?void 0:x[0])},_=r=>{var x;r.preventDefault(),w(!1),I((x=r.dataTransfer.files)==null?void 0:x[0])},H=r=>{r==null||r.stopPropagation(),s!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(s),z(null),d("image",null),h.current&&(h.current.value="")},V=r=>{r.preventDefault(),O(x=>({...x,_method:"put"})),p(a.update(i.id),{forceFormData:!0,preserveScroll:!0})},X=t.name?t.name.split(" ").filter(Boolean).slice(0,2).map(r=>r[0]).join("").toUpperCase():"TP",y=o.find(r=>String(r.id)===String(t.category_id)),M=[t.name,t.email,t.phone,t.address,t.category_id,t.level,t.language,t.description,i.image||t.image],k=Math.round(M.filter(Boolean).length/M.length*100),v=String(t.status||"inactive").toLowerCase();return e.jsxs(Z,{children:[e.jsx(W,{title:`Edit ${(i==null?void 0:i.name)||"Talent"}`}),e.jsx("style",{children:he}),e.jsx("div",{className:"talent-edit-page",children:e.jsxs("div",{className:"page-container",children:[e.jsxs("header",{className:"page-header",children:[e.jsxs("div",{className:"header-main",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(f,{href:a.index(),children:"Talents"}),e.jsx("span",{children:"/"}),e.jsx(f,{href:a.show(i.id),children:(i==null?void 0:i.name)||"Profile"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"Edit"})]}),e.jsxs("div",{className:"title-row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"eyebrow",children:"Talent management"}),e.jsx("h1",{children:"Edit talent profile"}),e.jsx("p",{children:"Update professional information, visibility and profile presentation."})]}),e.jsxs("div",{className:`header-status ${v}`,children:[e.jsx("span",{className:"status-dot"}),j(v),e.jsx("span",{className:"status-divider"}),"ID #",i.id]})]})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs(f,{href:a.show(i.id),className:"secondary-header-button",children:[e.jsx(A,{}),"View profile"]}),e.jsxs(f,{href:a.index(),className:"back-button",children:[e.jsx(K,{}),"Back to talents"]})]})]}),e.jsxs("div",{className:"edit-context",children:[e.jsx("div",{className:"edit-context-icon",children:e.jsx(Y,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"You are editing an existing talent profile"}),e.jsxs("span",{children:["Changes are saved only after you select",e.jsx("b",{children:" Update talent profile"}),"."]})]}),e.jsxs("div",{className:"edit-context-meta",children:["Last updated"," ",e.jsx("strong",{children:L(i.updated_at)})]})]}),m>0&&e.jsxs("div",{className:"error-alert",children:[e.jsx("div",{className:"alert-icon",children:e.jsx(J,{})}),e.jsxs("div",{children:[e.jsxs("strong",{children:[m," field",m>1?"s":""," need",m>1?"":"s"," attention"]}),e.jsx("span",{children:"Review the highlighted fields before updating this profile."})]})]}),e.jsx("form",{onSubmit:V,children:e.jsxs("div",{className:"workspace",children:[e.jsxs("main",{className:"main-column",children:[e.jsxs("section",{className:"panel",children:[e.jsx(g,{number:"01",title:"Personal information",description:"Core contact details for this talent."}),e.jsx("div",{className:"panel-body",children:e.jsxs("div",{className:"field-grid two",children:[e.jsx(c,{label:"Full name",required:!0,error:n.name,children:e.jsx("input",{value:t.name,onChange:r=>d("name",r.target.value),placeholder:"e.g. Amara Nkosi",className:n.name?"invalid":"",autoComplete:"name"})}),e.jsx(c,{label:"Email address",error:n.email,children:e.jsx("input",{type:"email",value:t.email,onChange:r=>d("email",r.target.value),placeholder:"email@example.com",className:n.email?"invalid":"",autoComplete:"email"})}),e.jsx(c,{label:"Phone number",error:n.phone,children:e.jsx("input",{value:t.phone,onChange:r=>d("phone",r.target.value),placeholder:"+250 7XX XXX XXX",className:n.phone?"invalid":"",autoComplete:"tel"})}),e.jsx(c,{label:"Address / location",error:n.address,children:e.jsx("input",{value:t.address,onChange:r=>d("address",r.target.value),placeholder:"City, Country",className:n.address?"invalid":""})})]})})]}),e.jsxs("section",{className:"panel",children:[e.jsx(g,{number:"02",title:"Professional profile",description:"Manage expertise, experience level and professional identity."}),e.jsxs("div",{className:"panel-body",children:[e.jsxs("div",{className:"field-grid three",children:[e.jsx(c,{label:"Category",required:!0,error:n.category_id,children:e.jsxs("select",{value:t.category_id,onChange:r=>d("category_id",r.target.value),className:n.category_id?"invalid":"",children:[e.jsx("option",{value:"",children:"Select category"}),o.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]})}),e.jsx(c,{label:"Experience level",error:n.level,children:e.jsxs("select",{value:t.level,onChange:r=>d("level",r.target.value),className:n.level?"invalid":"",children:[e.jsx("option",{value:"",children:"Select level"}),["beginner","intermediate","advanced","expert"].map(r=>e.jsx("option",{value:r,children:j(r)},r))]})}),e.jsx(c,{label:"Primary language",error:n.language,children:e.jsx("input",{value:t.language,onChange:r=>d("language",r.target.value),placeholder:"English, French…",className:n.language?"invalid":""})})]}),e.jsx("div",{className:"field-grid one",children:e.jsxs(c,{label:"Bio / professional summary",error:n.description,hint:"Keep the description concise and professional.",children:[e.jsx("textarea",{value:t.description,onChange:r=>d("description",r.target.value),placeholder:"Describe the talent's experience, strengths, interests and professional background…",className:n.description?"invalid":"",rows:7}),e.jsxs("div",{className:"character-count",children:[t.description.length," ","characters"]})]})})]})]}),e.jsxs("section",{className:"panel",children:[e.jsx(g,{number:"03",title:"Visibility & placement",description:"Control how this profile is presented across the platform."}),e.jsxs("div",{className:"panel-body settings-body",children:[e.jsxs("div",{className:"setting-item",children:[e.jsx("div",{className:"setting-icon blue",children:e.jsx(A,{})}),e.jsxs("div",{className:"setting-copy",children:[e.jsx("strong",{children:"Profile status"}),e.jsx("span",{children:"Decide whether this profile is available in the talent directory."})]}),e.jsxs("select",{className:"compact-select",value:t.status,onChange:r=>d("status",r.target.value),children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"pending",children:"Pending review"})]})]}),e.jsx("div",{className:"setting-divider"}),e.jsx(B,{icon:e.jsx(te,{}),title:"Featured profile",subtitle:"Highlight this talent in featured listings and discovery areas.",checked:t.featured,onChange:r=>d("featured",r)}),e.jsx("div",{className:"setting-divider"}),e.jsx(B,{icon:e.jsx(ae,{}),title:"Matched",subtitle:"Mark this talent as successfully matched or placed.",checked:t.matched,onChange:r=>d("matched",r),last:!0})]})]}),e.jsxs("section",{className:"panel",children:[e.jsx(g,{number:"04",title:"Profile activity",description:"Read-only activity associated with this talent."}),e.jsxs("div",{className:"activity-grid",children:[e.jsx(b,{icon:e.jsx(ce,{}),value:((P=i.skills)==null?void 0:P.length)??0,label:"Skills"}),e.jsx(b,{icon:e.jsx(pe,{}),value:((R=i.stories)==null?void 0:R.length)??0,label:"Stories"}),e.jsx(b,{icon:e.jsx(xe,{}),value:((E=i.feedback)==null?void 0:E.length)??0,label:"Feedback"}),e.jsx(b,{icon:e.jsx(ge,{}),value:((S=i.connections)==null?void 0:S.length)??0,label:"Connections"})]}),e.jsxs("div",{className:"activity-note",children:[e.jsx(le,{}),"Activity is managed from the corresponding talent sections."]})]}),e.jsxs("div",{className:"bottom-actions",children:[e.jsx("div",{className:"save-state",children:T?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"unsaved-dot"}),"Unsaved changes"]}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{}),"All changes saved"]})}),e.jsxs("div",{className:"action-buttons",children:[e.jsx(f,{href:a.show(i.id),className:"cancel-button",children:"Cancel"}),e.jsx("button",{type:"submit",className:"save-button",disabled:C,children:C?e.jsxs(e.Fragment,{children:[e.jsx(de,{}),"Updating profile…"]}):e.jsxs(e.Fragment,{children:[e.jsx(se,{}),"Update talent profile"]})})]})]})]}),e.jsxs("aside",{className:"side-column",children:[e.jsxs("section",{className:"profile-preview panel",children:[e.jsx(g,{number:"PREVIEW",title:"Profile preview",description:"Live representation of this talent record."}),e.jsxs("div",{className:"preview-body",children:[e.jsxs("div",{className:"avatar-wrap",children:[s?e.jsx("img",{src:s,alt:"New profile preview",className:"avatar-image"}):i.image?e.jsx("img",{src:i.image,alt:i.name,className:"avatar-image"}):e.jsx("div",{className:"avatar-placeholder",children:X}),e.jsx("button",{type:"button",className:"camera-button",onClick:()=>{var r;return(r=h.current)==null?void 0:r.click()},"aria-label":"Change profile photo",children:e.jsx(Q,{})})]}),e.jsx("h2",{children:t.name||"Talent name"}),e.jsx("p",{className:"preview-role",children:(y==null?void 0:y.name)||"Professional category"}),e.jsxs("div",{className:"preview-status",children:[e.jsx("span",{className:`preview-status-dot ${v}`}),j(v)]}),e.jsxs("div",{className:"preview-tags",children:[t.level&&e.jsx("span",{children:j(t.level)}),t.language&&e.jsx("span",{children:t.language}),t.featured&&e.jsx("span",{className:"featured-tag",children:"Featured"}),!t.level&&!t.language&&e.jsx("span",{children:"Profile details pending"})]}),e.jsxs("div",{className:"preview-contact",children:[t.email&&e.jsxs("div",{children:[e.jsx(ee,{}),e.jsx("span",{children:t.email})]}),t.phone&&e.jsxs("div",{children:[e.jsx(ie,{}),e.jsx("span",{children:t.phone})]}),t.address&&e.jsxs("div",{children:[e.jsx(re,{}),e.jsx("span",{children:t.address})]})]})]})]}),e.jsxs("section",{className:"completion-card",children:[e.jsxs("div",{className:"completion-top",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Profile readiness"}),e.jsxs("strong",{children:[k,"%"]})]}),e.jsx("div",{className:"completion-ring",children:e.jsxs("svg",{viewBox:"0 0 40 40",children:[e.jsx("circle",{cx:"20",cy:"20",r:"16",className:"ring-bg"}),e.jsx("circle",{cx:"20",cy:"20",r:"16",className:"ring-progress",style:{strokeDashoffset:100.5-100.5*k/100}})]})})]}),e.jsx("div",{className:"progress-track",children:e.jsx("span",{style:{width:`${k}%`}})}),e.jsx("p",{children:"Keep important profile information complete to improve the quality of the talent record."})]}),e.jsxs("section",{className:"panel upload-panel",children:[e.jsx(g,{number:"PHOTO",title:"Profile photo",description:"Replace the current image with a new professional photo."}),e.jsxs("div",{className:"upload-body",children:[e.jsx("input",{ref:h,type:"file",accept:"image/png,image/jpeg,image/webp",onChange:F,hidden:!0}),!s&&i.image&&e.jsxs("div",{className:"current-photo",children:[e.jsx("img",{src:i.image,alt:i.name}),e.jsxs("div",{children:[e.jsx("strong",{children:"Current photo"}),e.jsx("span",{children:q(i.image)})]})]}),e.jsx("div",{className:`drop-zone ${U?"dragging":""}`,onClick:()=>{var r;return(r=h.current)==null?void 0:r.click()},onDragOver:r=>{r.preventDefault(),w(!0)},onDragLeave:()=>w(!1),onDrop:_,children:s?e.jsxs("div",{className:"uploaded-preview",children:[e.jsx("img",{src:s,alt:"Selected profile"}),e.jsxs("div",{className:"image-overlay",children:[e.jsx(D,{}),"Replace photo"]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"upload-symbol",children:e.jsx(D,{})}),e.jsx("strong",{children:"Drop new image here"}),e.jsx("span",{children:"or click to browse"}),e.jsx("small",{children:"JPG, PNG or WEBP · Max 2 MB"})]})}),s&&e.jsx("button",{type:"button",className:"remove-photo",onClick:H,children:"Remove new photo"}),n.image&&e.jsx("span",{className:"field-error image-error",children:n.image})]})]}),e.jsxs("section",{className:"panel record-panel",children:[e.jsx(g,{number:"RECORD",title:"Record information",description:"System information for this profile."}),e.jsxs("div",{className:"record-body",children:[e.jsx(N,{label:"Profile ID",value:`#${i.id}`}),e.jsx(N,{label:"Created",value:G(i.created_at)}),e.jsx(N,{label:"Last updated",value:L(i.updated_at)})]})]}),e.jsxs("section",{className:"info-card",children:[e.jsx("div",{className:"info-card-icon",children:e.jsx(ne,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Admin-managed profile"}),e.jsx("p",{children:"This record is managed by platform administrators. Profile activity, connections and feedback remain available independently from these editable details."})]})]})]})]})})]})})]})}function g({number:i,title:o,description:a}){return e.jsxs("div",{className:"panel-header",children:[e.jsx("div",{className:"section-number",children:i}),e.jsxs("div",{children:[e.jsx("h2",{children:o}),e.jsx("p",{children:a})]})]})}function c({label:i,required:o,error:a,hint:l,children:t}){return e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"field-label-row",children:[e.jsxs("label",{children:[i,o&&e.jsx("span",{className:"required",children:"*"})]}),l&&e.jsx("span",{className:"field-hint",children:l})]}),t,a&&e.jsx("span",{className:"field-error",children:a})]})}function B({icon:i,title:o,subtitle:a,checked:l,onChange:t,last:d=!1}){return e.jsxs("div",{className:`toggle-setting ${d?"last":""}`,children:[e.jsx("div",{className:"toggle-icon",children:i}),e.jsxs("div",{className:"setting-copy",children:[e.jsx("strong",{children:o}),e.jsx("span",{children:a})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:p=>t(p.target.checked)}),e.jsx("span",{className:"switch-track",children:e.jsx("span",{})})]})]})}function b({icon:i,value:o,label:a}){return e.jsxs("div",{className:"activity-stat",children:[e.jsx("div",{className:"activity-icon",children:i}),e.jsx("strong",{children:o}),e.jsx("span",{children:a})]})}function N({label:i,value:o}){return e.jsxs("div",{className:"record-row",children:[e.jsx("span",{children:i}),e.jsx("strong",{children:o})]})}function j(i=""){return i&&i.charAt(0).toUpperCase()+i.slice(1)}function q(i){return i?i.split("/").pop():""}function G(i,o=!1){if(!i)return"N/A";const a=new Date(i);if(Number.isNaN(a.getTime()))return"N/A";const l=o?{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}:{day:"2-digit",month:"short",year:"numeric"};return a.toLocaleDateString("en-GB",l)}function L(i){if(!i)return"N/A";const o=new Date(i);if(Number.isNaN(o.getTime()))return"N/A";const a=Math.max(0,Math.floor((Date.now()-o.getTime())/1e3)),l=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60]];for(const[t,d]of l){const p=Math.floor(a/d);if(p>=1)return`${p} ${t}${p>1?"s":""} ago`}return"just now"}function K(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}function Y(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"})]})}function A(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]})}function J(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 8v5M12 16h.01"})]})}function D(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M12 16V4M7 9l5-5 5 5"}),e.jsx("path",{d:"M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"})]})}function Q(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"}),e.jsx("circle",{cx:"12",cy:"13",r:"3.2"})]})}function ee(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m4 7 8 6 8-6"})]})}function ie(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"M6.5 3.5 9 3l2 5-2 1.5a13 13 0 0 0 5.5 5.5L16 13l5 2-.5 2.5A3 3 0 0 1 17.5 20C10 19.5 4.5 14 4 6.5A3 3 0 0 1 6.5 3.5Z"})})}function re(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),e.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]})}function te(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"})})}function ae(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"m8.5 12 2.2 2.2 4.8-5.1"}),e.jsx("circle",{cx:"12",cy:"12",r:"9"})]})}function ne(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M12 3 20 6v5c0 5-3.2 8.2-8 10-4.8-1.8-8-5-8-10V6l8-3Z"}),e.jsx("path",{d:"m8.5 12 2.2 2.2 4.8-5"})]})}function se(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"m5 12 4.5 4.5L19 7"})})}function oe(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"m5 12 4 4 10-10"})})}function de(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"spinner",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",opacity:".25"}),e.jsx("path",{d:"M21 12a9 9 0 0 0-9-9"})]})}function le(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 10v6M12 7h.01"})]})}function ce(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M4 19V9l8-4 8 4v10"}),e.jsx("path",{d:"M8 19v-6h8v6"})]})}function pe(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M5 4h14v16H5z"}),e.jsx("path",{d:"M8 8h8M8 12h8M8 16h5"})]})}function xe(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-5.2A7.5 7.5 0 1 1 20 11.5Z"}),e.jsx("path",{d:"M8 11h.01M12 11h.01M16 11h.01"})]})}function ge(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("circle",{cx:"8",cy:"8",r:"3"}),e.jsx("circle",{cx:"16",cy:"16",r:"3"}),e.jsx("path",{d:"m10.5 10.5 3 3"})]})}const he=`
.talent-edit-page {
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

    min-height: calc(100vh - 60px);
    background: var(--page);
    color: var(--ink);
}

.talent-edit-page *,
.talent-edit-page *::before,
.talent-edit-page *::after {
    box-sizing: border-box;
}

.talent-edit-page button,
.talent-edit-page input,
.talent-edit-page select,
.talent-edit-page textarea {
    font: inherit;
}

/* ============================================================
   PAGE
============================================================ */

.page-container {
    width: min(1240px, calc(100% - 40px));
    margin: 0 auto;
    padding: 30px 0 60px;
}

/* ============================================================
   HEADER
============================================================ */

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 25px;
    margin-bottom: 20px;
}

.header-main {
    min-width: 0;
}

.breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
    color: var(--muted);
    font-size: 12px;
}

.breadcrumb a {
    color: var(--blue-dark);
    text-decoration: none;
    font-weight: 650;
}

.breadcrumb a:hover {
    text-decoration: underline;
}

.breadcrumb strong {
    color: var(--ink-2);
    font-weight: 650;
}

.title-row {
    display: flex;
    align-items: center;
    gap: 18px;
}

.eyebrow {
    margin-bottom: 4px;
    color: var(--blue-dark);
    font-size: 9.5px;
    text-transform: uppercase;
    letter-spacing: .09em;
    font-weight: 800;
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
    padding: 7px 11px;
    font-size: 10.5px;
    font-weight: 750;
    white-space: nowrap;
}

.header-status.inactive {
    background: #f2f4f7;
    border-color: var(--line);
    color: var(--muted);
}

.header-status.pending {
    background: #fffaeb;
    border-color: #fedf89;
    color: #b54708;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
}

.status-divider {
    width: 1px;
    height: 12px;
    background: currentColor;
    opacity: .2;
}

.header-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.secondary-header-button,
.back-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 38px;
    border: 1px solid var(--line);
    background: var(--surface);
    color: var(--ink-2);
    text-decoration: none;
    border-radius: 9px;
    padding: 0 13px;
    font-size: 12px;
    font-weight: 650;
    transition: .16s ease;
}

.secondary-header-button:hover {
    border-color: #c7d5e7;
    background: var(--blue-soft);
    color: var(--blue-dark);
}

.back-button:hover {
    border-color: #c7d5e7;
    background: #fbfdff;
    color: var(--blue-dark);
}

.secondary-header-button svg,
.back-button svg {
    width: 15px;
    height: 15px;
    stroke-width: 1.8;
}

/* ============================================================
   EDIT CONTEXT
============================================================ */

.edit-context {
    display: flex;
    align-items: center;
    gap: 11px;
    border: 1px solid #dce6f2;
    background: #f8fbff;
    border-radius: 10px;
    padding: 11px 13px;
    margin-bottom: 18px;
}

.edit-context-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue-soft);
    color: var(--blue-dark);
    flex: 0 0 32px;
}

.edit-context-icon svg {
    width: 15px;
    height: 15px;
    stroke-width: 1.8;
}

.edit-context > div:nth-child(2) {
    min-width: 0;
    flex: 1;
}

.edit-context strong,
.edit-context span {
    display: block;
}

.edit-context strong {
    font-size: 11.5px;
    font-weight: 750;
    color: var(--ink);
}

.edit-context span {
    margin-top: 2px;
    color: var(--muted);
    font-size: 10.5px;
}

.edit-context span b {
    color: var(--blue-dark);
}

.edit-context-meta {
    color: var(--muted);
    font-size: 10px;
    white-space: nowrap;
}

.edit-context-meta strong {
    display: inline;
    color: var(--ink-2);
}

/* ============================================================
   ERRORS
============================================================ */

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

/* ============================================================
   WORKSPACE
============================================================ */

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

/* ============================================================
   PANELS
============================================================ */

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
    min-width: 34px;
    height: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: var(--blue-soft);
    color: var(--blue-dark);
    font-size: 8.5px;
    font-weight: 800;
    letter-spacing: .4px;
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

/* ============================================================
   FORM
============================================================ */

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
    transition:
        border-color .15s ease,
        box-shadow .15s ease,
        background .15s ease;
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

.field input:hover,
.field select:hover,
.field textarea:hover {
    border-color: #c5ccd6;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(93,137,200,.12);
}

.field input.invalid,
.field select.invalid,
.field textarea.invalid {
    border-color: #e18a83;
    box-shadow: 0 0 0 3px rgba(217,45,32,.07);
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

/* ============================================================
   SETTINGS
============================================================ */

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

/* ============================================================
   SWITCH
============================================================ */

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
    box-shadow: 0 1px 3px rgba(16,24,40,.2);
    transition: .2s ease;
}

.switch input:checked + .switch-track {
    background: var(--blue);
}

.switch input:checked + .switch-track span {
    transform: translateX(17px);
}

/* ============================================================
   PROFILE PREVIEW
============================================================ */

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
    background: linear-gradient(
        145deg,
        #eef4fb,
        #dce8f6
    );
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

.camera-button:hover {
    background: var(--blue-dark);
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
    margin: 4px 0 8px;
    color: var(--muted);
    font-size: 11.5px;
}

.preview-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 9px;
    border-radius: 999px;
    background: #f2f4f7;
    color: var(--ink-2);
    font-size: 9.5px;
    font-weight: 700;
    margin-bottom: 12px;
}

.preview-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #98a2b3;
}

.preview-status-dot.active {
    background: var(--green);
}

.preview-status-dot.pending {
    background: #f79009;
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

.preview-tags .featured-tag {
    border-color: #d9e3f2;
    background: var(--blue-soft);
    color: var(--blue-dark);
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

/* ============================================================
   COMPLETION
============================================================ */

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
    transition: stroke-dashoffset .3s ease;
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
    transition: width .25s ease;
}

.completion-card p {
    margin: 10px 0 0;
    color: #98a2b3;
    font-size: 10.5px;
    line-height: 1.5;
}

/* ============================================================
   PHOTO UPLOAD
============================================================ */

.upload-body {
    padding: 18px;
}

.current-photo {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px;
    margin-bottom: 10px;
    border: 1px solid var(--line);
    border-radius: 9px;
    background: #fafbfc;
}

.current-photo img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 7px;
    flex: 0 0 48px;
}

.current-photo strong,
.current-photo span {
    display: block;
}

.current-photo strong {
    color: var(--ink-2);
    font-size: 10.5px;
}

.current-photo span {
    margin-top: 3px;
    color: var(--muted);
    font-size: 9.5px;
    word-break: break-all;
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
    background: linear-gradient(
        transparent,
        rgba(16,24,40,.78)
    );
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

/* ============================================================
   RECORD
============================================================ */

.record-body {
    padding: 7px 18px;
}

.record-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 11px 0;
    border-bottom: 1px solid var(--line-soft);
}

.record-row:last-child {
    border-bottom: 0;
}

.record-row span {
    color: var(--muted);
    font-size: 10.5px;
}

.record-row strong {
    color: var(--ink-2);
    font-size: 10.5px;
    text-align: right;
}

/* ============================================================
   ACTIVITY
============================================================ */

.activity-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 18px;
}

.activity-stat {
    text-align: center;
    padding: 14px 8px;
    border: 1px solid var(--line);
    border-radius: 9px;
    background: #fafbfc;
}

.activity-icon {
    width: 30px;
    height: 30px;
    margin: 0 auto 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue-soft);
    color: var(--blue-dark);
}

.activity-icon svg {
    width: 14px;
    height: 14px;
}

.activity-stat strong,
.activity-stat span {
    display: block;
}

.activity-stat strong {
    font-size: 20px;
    line-height: 1;
    font-weight: 800;
}

.activity-stat span {
    margin-top: 5px;
    color: var(--muted);
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: .05em;
    font-weight: 700;
}

.activity-note {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 18px;
    border-top: 1px solid var(--line-soft);
    background: #fafbfc;
    color: var(--muted);
    font-size: 10px;
}

.activity-note svg {
    width: 13px;
    height: 13px;
    flex: 0 0 13px;
}

/* ============================================================
   INFO
============================================================ */

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

/* ============================================================
   BOTTOM ACTIONS
============================================================ */

.bottom-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 3px 0 0;
}

.save-state {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--muted);
    font-size: 10.5px;
    font-weight: 600;
}

.unsaved-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #f79009;
}

.save-state svg {
    width: 13px;
    height: 13px;
    color: var(--green);
}

.action-buttons {
    display: flex;
    gap: 9px;
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
    box-shadow: 0 2px 4px rgba(71,117,179,.16);
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

.save-button svg,
.cancel-button svg {
    width: 15px;
    height: 15px;
    stroke-width: 2;
}

/* ============================================================
   SPINNER
============================================================ */

.spinner {
    animation: spin .8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* ============================================================
   RESPONSIVE
============================================================ */

@media (max-width: 1050px) {
    .workspace {
        grid-template-columns:
            minmax(0, 1fr)
            300px;
    }

    .field-grid.three {
        grid-template-columns:
            1fr 1fr;
    }

    .activity-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }
}

@media (max-width: 850px) {
    .page-container {
        width: min(100% - 28px, 720px);
        padding-top: 22px;
    }

    .page-header {
        align-items: flex-start;
        flex-direction: column;
    }

    .header-actions {
        width: 100%;
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
    .record-panel,
    .info-card {
        margin-bottom: 0;
    }

    .info-card {
        grid-column: 1 / -1;
    }
}

@media (max-width: 650px) {
    .page-container {
        width: calc(100% - 20px);
        padding-bottom: 35px;
    }

    .title-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
    }

    .title-row h1 {
        font-size: 24px;
    }

    .header-status {
        display: none;
    }

    .edit-context {
        align-items: flex-start;
    }

    .edit-context-meta {
        display: none;
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
    .record-panel,
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

    .activity-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .bottom-actions {
        position: sticky;
        bottom: 10px;
        z-index: 20;
        padding: 9px;
        background: rgba(247,248,250,.94);
        backdrop-filter: blur(10px);
        border: 1px solid var(--line);
        border-radius: 11px;
    }

    .save-state {
        display: none;
    }

    .action-buttons {
        width: 100%;
    }

    .cancel-button,
    .save-button {
        flex: 1;
    }
}

@media (max-width: 430px) {
    .header-actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .secondary-header-button,
    .back-button {
        justify-content: center;
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

    .activity-grid {
        gap: 7px;
        padding: 13px;
    }

    .activity-stat {
        padding: 11px 5px;
    }
}
`;export{me as default};
