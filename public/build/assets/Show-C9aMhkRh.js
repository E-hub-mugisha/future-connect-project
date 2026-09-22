import{r as j,j as e,H as pe,L as R,a as E,u as xe}from"./app-CJlpfYPO.js";import{A as he}from"./AppLayout-WTBEreOn.js";function Be({talent:i,flash:a,categories:t=[]}){var k,N,S,J,W,Y,K,Q,X,ee;const[s,l]=j.useState(!1),[u,m]=j.useState(!1),[A,h]=j.useState(!1),p=(i.status||"inactive").toLowerCase(),g={index:()=>route("admin.talents.index"),edit:r=>route("admin.talents.edit",r),destroy:r=>route("admin.talents.destroy",r),update:r=>route("admin.talents.update",r),toggleStatus:r=>route("admin.talents.toggle-status",r),toggleFeatured:r=>route("admin.talents.toggle-featured",r),approve:r=>route("admin.talents.approve",r)},d={skills:((k=i.skills)==null?void 0:k.length)??0,stories:((N=i.stories)==null?void 0:N.length)??0,feedback:((S=i.feedback)==null?void 0:S.length)??0,connections:((J=i.connections)==null?void 0:J.length)??0,courses:((W=i.courses)==null?void 0:W.length)??0,supports:((Y=i.supports)==null?void 0:Y.length)??0},c=j.useMemo(()=>{const r=(i.feedback||[]).map(x=>Number(x.rating)).filter(x=>x>0);return r.length?(r.reduce((x,Z)=>x+Z,0)/r.length).toFixed(1):0},[i.feedback]),D=j.useMemo(()=>{var x;const r=[i.name,i.email,i.phone,i.address,i.language,i.category_id||((x=i.category)==null?void 0:x.id),i.level,i.description,i.image];return Math.round(r.filter(Boolean).length/r.length*100)},[i]),T=()=>{E.delete(g.destroy(i.id),{preserveScroll:!0})},G=()=>{E.patch(g.toggleStatus(i.id),{},{preserveScroll:!0})},n=()=>{E.patch(g.toggleFeatured(i.id),{},{preserveScroll:!0})},w=()=>{E.post(g.approve(i.id),{},{preserveScroll:!0})};return e.jsxs(he,{children:[e.jsx(pe,{title:`${i.name} — Talent Profile`}),e.jsx("style",{children:Ee}),e.jsxs("div",{className:"talent-profile-page",children:[(a==null?void 0:a.success)&&e.jsxs("div",{className:"flash-message flash-success",children:[e.jsx(_,{}),e.jsx("span",{children:a.success})]}),(a==null?void 0:a.error)&&e.jsxs("div",{className:"flash-message flash-error",children:[e.jsx(V,{}),e.jsx("span",{children:a.error})]}),e.jsxs("div",{className:"breadcrumb",children:[e.jsx(R,{href:g.index(),children:"Talent"}),e.jsx(Me,{}),e.jsx("span",{children:i.name})]}),e.jsxs("section",{className:"profile-hero",children:[e.jsx("div",{className:"hero-cover"}),e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"profile-image-wrapper",children:[i.image?e.jsx("img",{src:i.image,alt:i.name,className:"profile-image"}):e.jsx("div",{className:"profile-image profile-image-placeholder",children:L(i.name)}),e.jsx("button",{type:"button",className:"image-edit-button",onClick:()=>l(!0),title:"Change profile photo",children:e.jsx(ce,{})})]}),e.jsxs("div",{className:"hero-main",children:[e.jsxs("div",{className:"status-row",children:[e.jsx(ie,{status:p}),i.featured&&e.jsxs("span",{className:"featured-badge",children:[e.jsx(O,{}),"Featured"]}),i.matched&&e.jsxs("span",{className:"matched-badge",children:[e.jsx(_,{}),"Matched"]}),i.level&&e.jsx("span",{className:"level-badge",children:M(i.level)})]}),e.jsx("h1",{children:i.name}),e.jsxs("div",{className:"hero-subtitle",children:[e.jsx("span",{children:((K=i.category)==null?void 0:K.name)||"Professional Talent"}),i.language&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{}),e.jsx("span",{children:i.language})]})]}),e.jsxs("div",{className:"hero-contact",children:[i.email&&e.jsxs("span",{children:[e.jsx(te,{}),i.email]}),i.phone&&e.jsxs("span",{children:[e.jsx(ne,{}),i.phone]}),i.address&&e.jsxs("span",{children:[e.jsx(oe,{}),i.address]})]})]}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs("button",{type:"button",className:"primary-action",onClick:()=>l(!0),children:[e.jsx(I,{}),"Edit Profile"]}),e.jsxs("div",{className:"action-row",children:[e.jsx("button",{type:"button",className:"secondary-action",onClick:G,children:p==="active"?e.jsxs(e.Fragment,{children:[e.jsx(Fe,{}),"Deactivate"]}):e.jsxs(e.Fragment,{children:[e.jsx(ze,{}),"Activate"]})}),e.jsxs("button",{type:"button",className:"secondary-action",onClick:n,children:[e.jsx(O,{}),i.featured?"Unfeature":"Feature"]}),e.jsxs("div",{className:"more-wrapper",children:[e.jsx("button",{type:"button",className:"icon-action",onClick:()=>h(!A),children:e.jsx(Ce,{})}),A&&e.jsxs("div",{className:"action-menu",children:[e.jsxs(R,{href:g.edit(i.id),children:[e.jsx(I,{}),"Open full editor"]}),!i.user_id&&i.email&&e.jsxs("button",{type:"button",onClick:w,children:[e.jsx(_,{}),"Approve talent"]}),e.jsxs("button",{type:"button",className:"danger-menu-item",onClick:()=>{h(!1),m(!0)},children:[e.jsx(q,{}),"Delete profile"]})]})]})]})]})]})]}),e.jsxs("section",{className:"overview-strip",children:[e.jsxs("div",{className:"overview-item",children:[e.jsx("span",{className:"overview-label",children:"Profile completeness"}),e.jsxs("div",{className:"completion",children:[e.jsx("div",{className:"completion-track",children:e.jsx("div",{className:"completion-fill",style:{width:`${D}%`}})}),e.jsxs("strong",{children:[D,"%"]})]})]}),e.jsx("div",{className:"overview-divider"}),e.jsx(U,{icon:e.jsx(be,{}),label:"Member since",value:C(i.created_at)}),e.jsx("div",{className:"overview-divider"}),e.jsx(U,{icon:e.jsx(O,{}),label:"Average rating",value:c>0?`${c} / 5`:"No ratings"}),e.jsx("div",{className:"overview-divider"}),e.jsx(U,{icon:e.jsx(ve,{}),label:"Last updated",value:ae(i.updated_at)})]}),e.jsxs("section",{className:"stats-grid",children:[e.jsx(y,{label:"Skills",value:d.skills,icon:e.jsx(P,{}),accent:!0}),e.jsx(y,{label:"Stories",value:d.stories,icon:e.jsx(B,{})}),e.jsx(y,{label:"Feedback",value:d.feedback,icon:e.jsx(H,{})}),e.jsx(y,{label:"Connections",value:d.connections,icon:e.jsx($,{})}),e.jsx(y,{label:"Courses",value:d.courses,icon:e.jsx(je,{})}),e.jsx(y,{label:"Supports",value:d.supports,icon:e.jsx(ye,{})})]}),e.jsxs("div",{className:"content-layout",children:[e.jsxs("main",{className:"main-column",children:[e.jsx(v,{icon:e.jsx(se,{}),title:"Professional Profile",subtitle:"Personal and professional information",action:e.jsxs("button",{className:"card-action",onClick:()=>l(!0),children:[e.jsx(I,{}),"Edit"]}),children:e.jsxs("div",{className:"profile-information-grid",children:[e.jsx(f,{label:"Full name",value:i.name,icon:e.jsx(se,{})}),e.jsx(f,{label:"Email address",value:i.email,empty:"Not provided",icon:e.jsx(te,{})}),e.jsx(f,{label:"Phone number",value:i.phone,empty:"Not provided",icon:e.jsx(ne,{})}),e.jsx(f,{label:"Location",value:i.address,empty:"Not provided",icon:e.jsx(oe,{})}),e.jsx(f,{label:"Language",value:i.language,empty:"Not specified",icon:e.jsx(ke,{})}),e.jsx(f,{label:"Category",value:(Q=i.category)==null?void 0:Q.name,empty:"Not assigned",icon:e.jsx(we,{})}),e.jsx(f,{label:"Experience level",value:i.level?M(i.level):null,empty:"Not specified",icon:e.jsx(Ne,{})}),e.jsx(f,{label:"Account status",value:e.jsx(ie,{status:p}),icon:e.jsx(le,{})})]})}),e.jsx(v,{icon:e.jsx(de,{}),title:"About",subtitle:"Professional biography and description",children:i.description?e.jsx("div",{className:"bio-content",children:i.description}):e.jsx(z,{icon:e.jsx(de,{}),title:"No biography added",text:"Add a professional biography to help this talent stand out.",action:"Add biography",onClick:()=>l(!0)})}),e.jsx(v,{icon:e.jsx(P,{}),title:"Skills & Expertise",subtitle:"Professional capabilities and areas of expertise",badge:d.skills,children:d.skills>0?e.jsx("div",{className:"skills-container",children:i.skills.map((r,x)=>e.jsxs("div",{className:"skill-card",children:[e.jsx("div",{className:"skill-icon",children:e.jsx(P,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:r.name}),r.level&&e.jsx("span",{children:M(r.level)})]})]},r.id??x))}):e.jsx(z,{icon:e.jsx(P,{}),title:"No skills added",text:"This talent has not added any skills yet.",action:"Edit profile",onClick:()=>l(!0)})}),e.jsx(v,{icon:e.jsx(B,{}),title:"Portfolio & Stories",subtitle:"Published stories and professional work",badge:d.stories,children:d.stories>0?e.jsx("div",{className:"story-list",children:i.stories.slice(0,6).map(r=>e.jsxs("div",{className:"story-card",children:[e.jsx("div",{className:"story-image",children:r.image?e.jsx("img",{src:r.image,alt:""}):e.jsx(B,{})}),e.jsxs("div",{className:"story-content",children:[e.jsx("h3",{children:r.title||"Untitled story"}),e.jsx("p",{children:r.description?re(r.description,110):"Professional story"}),e.jsx("span",{children:C(r.created_at)})]}),e.jsx(Ae,{})]},r.id))}):e.jsx(z,{icon:e.jsx(B,{}),title:"No stories yet",text:"Published stories will appear here."})})]}),e.jsxs("aside",{className:"side-column",children:[e.jsxs("div",{className:"rating-card",children:[e.jsxs("div",{className:"rating-header",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Talent rating"}),e.jsx("strong",{children:c||"—"})]}),e.jsx("div",{className:"rating-stars",children:Array.from({length:5},(r,x)=>e.jsx("span",{className:x<Math.round(c||0)?"star-active":"",children:"★"},x))})]}),e.jsxs("div",{className:"rating-footer",children:["Based on ",d.feedback," ","feedback"," ",d.feedback===1?"response":"responses"]})]}),e.jsx(v,{icon:e.jsx(H,{}),title:"Recent Feedback",subtitle:"Latest reviews and comments",badge:d.feedback,children:d.feedback>0?e.jsx("div",{className:"feedback-list",children:i.feedback.slice(0,5).map(r=>e.jsxs("div",{className:"feedback-card",children:[e.jsxs("div",{className:"feedback-top",children:[e.jsx("div",{className:"feedback-avatar",children:L(r.name||"A")}),e.jsxs("div",{children:[e.jsx("strong",{children:r.name||"Anonymous"}),e.jsx("span",{children:C(r.created_at)})]})]}),r.rating!=null&&e.jsx("div",{className:"small-stars",children:Array.from({length:5},(x,Z)=>Z<Number(r.rating)?"★":"☆").join("")}),e.jsx("p",{children:re(r.message??r.comment??"No comment provided.",160)})]},r.id))}):e.jsx(z,{icon:e.jsx(H,{}),title:"No feedback yet",text:"Feedback from the community will appear here."})}),e.jsx(v,{icon:e.jsx($,{}),title:"Connections",subtitle:"Professional network",badge:d.connections,children:d.connections>0?e.jsx("div",{className:"connection-list",children:i.connections.slice(0,6).map(r=>e.jsxs("div",{className:"connection-card",children:[e.jsx("div",{className:"connection-avatar",children:L(r.name||"C")}),e.jsxs("div",{className:"connection-info",children:[e.jsx("strong",{children:r.name||`Connection #${r.id}`}),e.jsx("span",{children:r.type||"Professional"})]}),e.jsx("span",{className:`connection-status ${r.status==="active"?"active":"pending"}`,children:M(r.status||"pending")})]},r.id))}):e.jsx(z,{icon:e.jsx($,{}),title:"No connections",text:"Professional connections will appear here."})}),e.jsx(v,{icon:e.jsx(le,{}),title:"Account",subtitle:"Account and record details",children:e.jsxs("div",{className:"account-details",children:[e.jsx(F,{label:"Profile ID",value:`#${i.id}`,mono:!0}),e.jsx(F,{label:"Account owner",value:((X=i.user)==null?void 0:X.name)||"No linked account"}),e.jsx(F,{label:"Account email",value:((ee=i.user)==null?void 0:ee.email)||i.email||"Not available"}),e.jsx(F,{label:"Created",value:C(i.created_at,!0)}),e.jsx(F,{label:"Last updated",value:C(i.updated_at,!0)})]})}),e.jsxs("div",{className:"danger-card",children:[e.jsx("div",{className:"danger-icon",children:e.jsx(V,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Danger zone"}),e.jsx("p",{children:"Permanently remove this talent profile and its associated record."})]}),e.jsx("button",{type:"button",onClick:()=>m(!0),children:"Delete"})]})]})]}),e.jsxs("div",{className:"bottom-navigation",children:[e.jsxs(R,{href:g.index(),children:[e.jsx(De,{}),"Back to talent directory"]}),e.jsxs("div",{children:[e.jsxs("span",{children:["Last updated"," ",ae(i.updated_at)]}),e.jsxs("button",{type:"button",onClick:()=>l(!0),children:[e.jsx(I,{}),"Edit profile"]})]})]})]}),e.jsx(me,{open:s,onClose:()=>l(!1),talent:i,categories:t,updateRoute:g.update(i.id)}),e.jsx(ge,{open:u,onClose:()=>m(!1),talent:i,onConfirm:T})]})}function me({open:i,onClose:a,talent:t,categories:s,updateRoute:l}){const u=j.useRef(null),[m,A]=j.useState(t.image||null),{data:h,setData:p,post:g,processing:d,errors:c,reset:D}=xe({_method:"PUT",name:t.name||"",email:t.email||"",phone:t.phone||"",address:t.address||"",language:t.language||"",category_id:t.category_id||"",level:t.level||"",description:t.description||"",featured:t.featured?1:0,image:null});if(!i)return null;const T=n=>{var N;const w=(N=n.target.files)==null?void 0:N[0];if(!w)return;p("image",w);const k=new FileReader;k.onload=S=>{A(S.target.result)},k.readAsDataURL(w)},G=n=>{n.preventDefault(),g(l,{forceFormData:!0,preserveScroll:!0,onSuccess:()=>{a()}})};return e.jsx("div",{className:"modal-overlay",children:e.jsxs("div",{className:"edit-modal",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsx("span",{className:"modal-eyebrow",children:"Talent profile"}),e.jsx("h2",{children:"Change profile"}),e.jsx("p",{children:"Update this talent's public profile information."})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:a,children:e.jsx(Se,{})})]}),e.jsxs("form",{onSubmit:G,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"photo-editor",children:[e.jsx("div",{className:"photo-preview",children:m?e.jsx("img",{src:m,alt:""}):e.jsx("span",{children:L(t.name)})}),e.jsxs("div",{className:"photo-editor-content",children:[e.jsx("strong",{children:"Profile photo"}),e.jsx("p",{children:"Use a professional square image. JPG, PNG or WebP, maximum 2MB."}),e.jsx("input",{ref:u,type:"file",accept:"image/jpeg,image/png,image/webp",onChange:T,hidden:!0}),e.jsxs("button",{type:"button",className:"upload-button",onClick:()=>{var n;return(n=u.current)==null?void 0:n.click()},children:[e.jsx(ce,{}),"Change photo"]})]})]}),c.image&&e.jsx("div",{className:"field-error",children:c.image}),e.jsxs("div",{className:"form-section",children:[e.jsx("div",{className:"form-section-title",children:"Basic information"}),e.jsxs("div",{className:"form-grid",children:[e.jsx(b,{label:"Full name",required:!0,error:c.name,children:e.jsx("input",{value:h.name,onChange:n=>p("name",n.target.value)})}),e.jsx(b,{label:"Email",error:c.email,children:e.jsx("input",{type:"email",value:h.email,onChange:n=>p("email",n.target.value)})}),e.jsx(b,{label:"Phone",error:c.phone,children:e.jsx("input",{value:h.phone,onChange:n=>p("phone",n.target.value)})}),e.jsx(b,{label:"Language",error:c.language,children:e.jsx("input",{value:h.language,onChange:n=>p("language",n.target.value)})}),e.jsx(b,{label:"Location",error:c.address,children:e.jsx("input",{value:h.address,onChange:n=>p("address",n.target.value)})}),e.jsx(b,{label:"Category",error:c.category_id,children:e.jsxs("select",{value:h.category_id,onChange:n=>p("category_id",n.target.value),children:[e.jsx("option",{value:"",children:"Select category"}),s.map(n=>e.jsx("option",{value:n.id,children:n.name},n.id))]})}),e.jsx(b,{label:"Experience level",error:c.level,children:e.jsxs("select",{value:h.level,onChange:n=>p("level",n.target.value),children:[e.jsx("option",{value:"",children:"Select level"}),e.jsx("option",{value:"beginner",children:"Beginner"}),e.jsx("option",{value:"intermediate",children:"Intermediate"}),e.jsx("option",{value:"advanced",children:"Advanced"}),e.jsx("option",{value:"expert",children:"Expert"})]})}),e.jsx(b,{label:"Featured profile",children:e.jsxs("label",{className:"switch-row",children:[e.jsx("input",{type:"checkbox",checked:!!h.featured,onChange:n=>p("featured",n.target.checked?1:0)}),e.jsx("span",{className:"switch-ui"}),e.jsx("span",{children:"Show this talent as featured"})]})})]})]}),e.jsxs("div",{className:"form-section",children:[e.jsx("div",{className:"form-section-title",children:"Professional biography"}),e.jsx("textarea",{rows:"6",value:h.description,onChange:n=>p("description",n.target.value),placeholder:"Write a short professional biography..."}),c.description&&e.jsx("div",{className:"field-error",children:c.description})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"modal-cancel",onClick:()=>{D(),a()},children:"Cancel"}),e.jsx("button",{type:"submit",className:"modal-save",disabled:d,children:d?e.jsxs(e.Fragment,{children:[e.jsx(fe,{}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(_,{}),"Save changes"]})})]})]})]})})}function ge({open:i,onClose:a,talent:t,onConfirm:s}){return i?e.jsx("div",{className:"modal-overlay",children:e.jsxs("div",{className:"delete-modal",children:[e.jsx("div",{className:"delete-icon",children:e.jsx(q,{})}),e.jsx("h2",{children:"Delete talent profile?"}),e.jsxs("p",{children:["You are about to permanently delete"," ",e.jsx("strong",{children:t.name}),". This action cannot be undone."]}),e.jsxs("div",{className:"delete-warning",children:[e.jsx(V,{}),"Associated profile information may also become unavailable."]}),e.jsxs("div",{className:"delete-actions",children:[e.jsx("button",{type:"button",className:"modal-cancel",onClick:a,children:"Cancel"}),e.jsxs("button",{type:"button",className:"delete-confirm",onClick:s,children:[e.jsx(q,{}),"Delete permanently"]})]})]})}):null}function ie({status:i}){return e.jsxs("span",{className:`status-badge status-${i}`,children:[e.jsx("span",{className:"status-dot"}),M(i)]})}function U({icon:i,label:a,value:t}){return e.jsxs("div",{className:"overview-item-simple",children:[e.jsx("div",{className:"overview-icon",children:i}),e.jsxs("div",{children:[e.jsx("span",{children:a}),e.jsx("strong",{children:t})]})]})}function y({icon:i,value:a,label:t,accent:s=!1}){return e.jsxs("div",{className:`stat-card ${s?"accent":""}`,children:[e.jsx("div",{className:"stat-icon",children:i}),e.jsx("div",{className:"stat-value",children:a}),e.jsx("div",{className:"stat-label",children:t})]})}function v({icon:i,title:a,subtitle:t,badge:s,action:l,children:u}){return e.jsxs("section",{className:"section-card",children:[e.jsxs("div",{className:"section-header",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:i}),e.jsxs("div",{children:[e.jsx("h2",{children:a}),t&&e.jsx("p",{children:t})]})]}),e.jsxs("div",{className:"section-header-right",children:[s!==void 0&&e.jsx("span",{className:"section-badge",children:s}),l]})]}),e.jsx("div",{className:"section-body",children:u})]})}function f({icon:i,label:a,value:t,empty:s="Not provided"}){const l=t==null||t==="";return e.jsxs("div",{className:"detail-item",children:[e.jsx("div",{className:"detail-icon",children:i}),e.jsxs("div",{children:[e.jsx("span",{children:a}),e.jsx("strong",{className:l?"detail-empty":"",children:l?s:t})]})]})}function F({label:i,value:a,mono:t=!1}){return e.jsxs("div",{className:"account-row",children:[e.jsx("span",{children:i}),e.jsx("strong",{className:t?"mono":"",children:a})]})}function z({icon:i,title:a,text:t,action:s,onClick:l}){return e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:i}),e.jsx("strong",{children:a}),e.jsx("p",{children:t}),s&&e.jsx("button",{type:"button",onClick:l,children:s})]})}function b({label:i,children:a,required:t,error:s}){return e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{children:[i,t&&e.jsx("span",{className:"required",children:"*"})]}),a,s&&e.jsx("div",{className:"field-error",children:s})]})}function ue(){return e.jsx("span",{className:"dot-separator",children:"·"})}function fe(){return e.jsx("span",{className:"spinner"})}function M(i){return i?i.charAt(0).toUpperCase()+i.slice(1):""}function L(i){return i?i.split(" ").filter(Boolean).slice(0,2).map(a=>a.charAt(0)).join("").toUpperCase():"T"}function re(i,a){return i?i.length>a?i.slice(0,a).trim()+"…":i:""}function C(i,a=!1){if(!i)return"N/A";const t=new Date(i);return Number.isNaN(t.getTime())?"N/A":new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"numeric",...a?{hour:"2-digit",minute:"2-digit"}:{}}).format(t)}function ae(i){if(!i)return"N/A";const a=new Date(i);if(Number.isNaN(a.getTime()))return"N/A";const t=Math.floor((Date.now()-a.getTime())/1e3);if(t<60)return"Just now";const s=[["year",31536e3],["month",2592e3],["week",604800],["day",86400],["hour",3600],["minute",60]];for(const[l,u]of s){const m=Math.floor(t/u);if(m>=1)return`${m} ${l}${m>1?"s":""} ago`}return"Just now"}const o=({children:i,size:a=16})=>e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:i});function _(){return e.jsx(o,{children:e.jsx("path",{d:"M20 6 9 17l-5-5"})})}function V(){return e.jsxs(o,{children:[e.jsx("path",{d:"M10.3 3.7 2.2 18a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z"}),e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"})]})}function te(){return e.jsxs(o,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]})}function ne(){return e.jsx(o,{children:e.jsx("path",{d:"M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c0 1-1 2-2 2C10.3 21 3 13.7 3 5c0-1 1-1 2-1Z"})})}function oe(){return e.jsxs(o,{children:[e.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),e.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]})}function be(){return e.jsxs(o,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"16",rx:"2"}),e.jsx("path",{d:"M16 3v4M8 3v4M3 10h18"})]})}function ve(){return e.jsxs(o,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 2"})]})}function I(){return e.jsxs(o,{children:[e.jsx("path",{d:"m14 6 4 4"}),e.jsx("path",{d:"M4 20h4l10-10a2.8 2.8 0 0 0-4-4L4 16v4Z"})]})}function q(){return e.jsxs(o,{children:[e.jsx("path",{d:"M4 7h16M10 11v6M14 11v6"}),e.jsx("path",{d:"M6 7l1 14h10l1-14M9 7V4h6v3"})]})}function ce(){return e.jsxs(o,{children:[e.jsx("path",{d:"M4 7h3l1.5-2h7L17 7h3v12H4V7Z"}),e.jsx("circle",{cx:"12",cy:"13",r:"3.5"})]})}function se(){return e.jsxs(o,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"3.5"}),e.jsx("path",{d:"M5 20a7 7 0 0 1 14 0"})]})}function $(){return e.jsxs(o,{children:[e.jsx("circle",{cx:"9",cy:"8",r:"3"}),e.jsx("path",{d:"M3 20a6 6 0 0 1 12 0"}),e.jsx("path",{d:"M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 6"})]})}function P(){return e.jsxs(o,{children:[e.jsx("path",{d:"m14.5 6.5 3-3a3 3 0 0 1 4 4l-3 3"}),e.jsx("path",{d:"m9.5 17.5-3 3a3 3 0 1 1-4-4l3-3"}),e.jsx("path",{d:"m8 16 8-8"})]})}function B(){return e.jsxs(o,{children:[e.jsx("path",{d:"M4 5a2 2 0 0 1 2-2h5v18H6a2 2 0 0 1-2-2V5Z"}),e.jsx("path",{d:"M11 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5"})]})}function H(){return e.jsx(o,{children:e.jsx("path",{d:"M4 5h16v11H8l-4 4V5Z"})})}function je(){return e.jsxs(o,{children:[e.jsx("path",{d:"m3 9 9-5 9 5-9 5-9-5Z"}),e.jsx("path",{d:"M7 11v5c3 2 7 2 10 0v-5"})]})}function ye(){return e.jsx(o,{children:e.jsx("path",{d:"M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.4Z"})})}function de(){return e.jsx(o,{children:e.jsx("path",{d:"M5 6h14M5 12h14M5 18h8"})})}function we(){return e.jsx(o,{children:e.jsx("path",{d:"M3 6h7l2 2h9v10H3V6Z"})})}function ke(){return e.jsxs(o,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"})]})}function Ne(){return e.jsxs(o,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"m9 12-2 9 5-3 5 3-2-9"})]})}function le(){return e.jsxs(o,{children:[e.jsx("path",{d:"M12 3 20 6v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z"}),e.jsx("path",{d:"m9 12 2 2 4-4"})]})}function O(){return e.jsx(o,{children:e.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"})})}function Fe(){return e.jsx(o,{children:e.jsx("path",{d:"M8 5v14M16 5v14"})})}function ze(){return e.jsx(o,{children:e.jsx("path",{d:"m8 5 11 7-11 7V5Z"})})}function Ce(){return e.jsxs(o,{children:[e.jsx("circle",{cx:"5",cy:"12",r:"1"}),e.jsx("circle",{cx:"12",cy:"12",r:"1"}),e.jsx("circle",{cx:"19",cy:"12",r:"1"})]})}function Me(){return e.jsx(o,{size:13,children:e.jsx("path",{d:"m9 18 6-6-6-6"})})}function Ae(){return e.jsx(o,{size:15,children:e.jsx("path",{d:"m9 18 6-6-6-6"})})}function De(){return e.jsx(o,{children:e.jsx("path",{d:"M19 12H5M11 18l-6-6 6-6"})})}function Se(){return e.jsx(o,{children:e.jsx("path",{d:"m6 6 12 12M18 6 6 18"})})}const Ee=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.talent-profile-page {
    --brand: #5D89C8;
    --brand-dark: #4775B3;
    --brand-soft: #EEF4FB;
    --brand-soft-2: #F5F8FD;

    --ink: #18212F;
    --ink-2: #465365;
    --muted: #7B8797;
    --muted-2: #A2ACB9;

    --line: #E6EAF0;
    --line-soft: #F0F2F5;

    --canvas: #F6F8FB;
    --white: #FFFFFF;

    --green: #159A68;
    --green-soft: #EAF8F2;

    --red: #D84A4A;
    --red-soft: #FFF0F0;

    font-family: Inter, sans-serif;
    background: var(--canvas);
    color: var(--ink);
    min-height: 100vh;
    padding: 28px 32px 50px;
}

/* Flash */

.flash-message {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 10px;
    margin-bottom: 18px;
    font-size: 13px;
    font-weight: 500;
}

.flash-success {
    background: var(--green-soft);
    color: var(--green);
    border: 1px solid #CFEDE0;
}

.flash-error {
    background: var(--red-soft);
    color: var(--red);
    border: 1px solid #F3D0D0;
}

/* Breadcrumb */

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    color: var(--muted);
    font-size: 12.5px;
}

.breadcrumb a {
    color: var(--brand);
    text-decoration: none;
    font-weight: 600;
}

.breadcrumb svg {
    color: var(--muted-2);
}

/* Hero */

.profile-hero {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    margin-bottom: 14px;
    box-shadow: 0 2px 8px rgba(25, 42, 70, .025);
}

.hero-cover {
    height: 94px;
    background:
        linear-gradient(
            110deg,
            #EDF3FA 0%,
            #F7F9FC 55%,
            #EAF1FA 100%
        );
    border-bottom: 1px solid var(--line);
    position: relative;
}

.hero-cover::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
        radial-gradient(
            circle at 82% 25%,
            rgba(93,137,200,.12),
            transparent 28%
        );
}

.hero-content {
    padding: 0 28px 25px;
    display: flex;
    align-items: flex-end;
    gap: 20px;
    position: relative;
}

.profile-image-wrapper {
    margin-top: -54px;
    position: relative;
    flex-shrink: 0;
}

.profile-image {
    width: 112px;
    height: 112px;
    border-radius: 18px;
    object-fit: cover;
    background: var(--brand-soft);
    border: 5px solid white;
    box-shadow: 0 5px 18px rgba(24,33,47,.12);
}

.profile-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg,#5D89C8,#789DD0);
    color: white;
    font-family: Space Grotesk, sans-serif;
    font-size: 35px;
    font-weight: 700;
}

.image-edit-button {
    position: absolute;
    right: -4px;
    bottom: 2px;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    border: 3px solid white;
    background: var(--brand);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .2s ease;
}

.image-edit-button:hover {
    background: var(--brand-dark);
    transform: scale(1.05);
}

.hero-main {
    min-width: 0;
    flex: 1;
    padding-top: 18px;
}

.status-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 8px;
}

.status-badge,
.featured-badge,
.matched-badge,
.level-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-radius: 999px;
    padding: 5px 9px;
    font-size: 10.5px;
    font-weight: 700;
}

.status-badge {
    background: var(--brand-soft);
    color: var(--brand-dark);
}

.status-active {
    background: var(--green-soft);
    color: var(--green);
}

.status-inactive {
    background: #F1F3F6;
    color: var(--muted);
}

.status-pending {
    background: #FFF7E6;
    color: #A76B00;
}

.status-approved {
    background: var(--green-soft);
    color: var(--green);
}

.status-rejected {
    background: var(--red-soft);
    color: var(--red);
}

.status-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: currentColor;
}

.featured-badge {
    background: #FFF7E6;
    color: #9B6700;
}

.matched-badge {
    background: var(--brand-soft);
    color: var(--brand-dark);
}

.level-badge {
    border: 1px solid var(--line);
    background: white;
    color: var(--ink-2);
}

.hero-main h1 {
    font-family: Space Grotesk, sans-serif;
    font-size: 25px;
    letter-spacing: -.5px;
    margin: 0 0 4px;
    line-height: 1.2;
}

.hero-subtitle {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--muted);
    font-size: 13px;
}

.dot-separator {
    color: var(--muted-2);
}

.hero-contact {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 13px;
    margin-top: 12px;
}

.hero-contact span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--ink-2);
    font-size: 11.5px;
}

.hero-contact svg {
    color: var(--muted);
}

.hero-actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 205px;
    padding-top: 20px;
}

.primary-action,
.secondary-action,
.icon-action {
    border: 0;
    cursor: pointer;
    font-family: inherit;
    transition: .18s ease;
}

.primary-action {
    height: 39px;
    border-radius: 8px;
    background: var(--brand);
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 3px 9px rgba(93,137,200,.18);
}

.primary-action:hover {
    background: var(--brand-dark);
}

.action-row {
    display: flex;
    gap: 7px;
}

.secondary-action {
    flex: 1;
    height: 36px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: white;
    color: var(--ink-2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 10.5px;
    font-weight: 600;
}

.secondary-action:hover {
    border-color: #C8D6E8;
    color: var(--brand-dark);
    background: var(--brand-soft-2);
}

.icon-action {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid var(--line);
    background: white;
    color: var(--muted);
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-action:hover {
    color: var(--ink);
}

.more-wrapper {
    position: relative;
}

.action-menu {
    position: absolute;
    right: 0;
    top: calc(100% + 7px);
    width: 190px;
    padding: 6px;
    background: white;
    border: 1px solid var(--line);
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(20,30,45,.12);
    z-index: 20;
}

.action-menu button,
.action-menu a {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    border: 0;
    background: transparent;
    padding: 9px 10px;
    border-radius: 7px;
    color: var(--ink-2);
    font-size: 11.5px;
    text-decoration: none;
    cursor: pointer;
    text-align: left;
}

.action-menu button:hover,
.action-menu a:hover {
    background: var(--canvas);
    color: var(--ink);
}

.action-menu .danger-menu-item {
    color: var(--red);
}

/* Overview */

.overview-strip {
    background: white;
    border: 1px solid var(--line);
    border-radius: 13px;
    min-height: 76px;
    display: flex;
    align-items: center;
    padding: 13px 20px;
    margin-bottom: 14px;
}

.overview-item {
    flex: 1.4;
}

.overview-label {
    display: block;
    color: var(--muted);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .06em;
    margin-bottom: 7px;
}

.completion {
    display: flex;
    align-items: center;
    gap: 9px;
}

.completion-track {
    width: 115px;
    height: 6px;
    border-radius: 10px;
    background: #EDF0F4;
    overflow: hidden;
}

.completion-fill {
    height: 100%;
    border-radius: inherit;
    background: var(--brand);
}

.completion strong {
    color: var(--ink);
    font-size: 11px;
}

.overview-divider {
    width: 1px;
    height: 36px;
    background: var(--line);
    margin: 0 20px;
}

.overview-item-simple {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 9px;
}

.overview-icon {
    width: 31px;
    height: 31px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand);
    background: var(--brand-soft);
}

.overview-item-simple span {
    display: block;
    color: var(--muted);
    font-size: 9.5px;
    margin-bottom: 2px;
}

.overview-item-simple strong {
    display: block;
    color: var(--ink);
    font-size: 11.5px;
}

/* Stats */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin-bottom: 18px;
}

.stat-card {
    background: white;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 14px;
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background: #DDE2E9;
}

.stat-card.accent::before {
    background: var(--brand);
}

.stat-icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #F3F5F7;
    color: var(--ink-2);
    margin-bottom: 9px;
}

.stat-card.accent .stat-icon {
    background: var(--brand-soft);
    color: var(--brand);
}

.stat-value {
    font-family: Space Grotesk, sans-serif;
    font-size: 23px;
    font-weight: 700;
    line-height: 1;
}

.stat-label {
    margin-top: 5px;
    color: var(--muted);
    font-size: 9.5px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .06em;
}

/* Layout */

.content-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(320px, .9fr);
    gap: 18px;
    align-items: start;
}

.main-column,
.side-column {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

/* Cards */

.section-card {
    background: white;
    border: 1px solid var(--line);
    border-radius: 13px;
    overflow: hidden;
}

.section-header {
    min-height: 65px;
    padding: 12px 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--line);
}

.section-heading {
    display: flex;
    align-items: center;
    gap: 10px;
}

.section-icon {
    width: 31px;
    height: 31px;
    border-radius: 8px;
    background: var(--brand-soft);
    color: var(--brand-dark);
    display: flex;
    align-items: center;
    justify-content: center;
}

.section-heading h2 {
    margin: 0;
    font-family: Space Grotesk, sans-serif;
    font-size: 13px;
    font-weight: 600;
}

.section-heading p {
    margin: 3px 0 0;
    color: var(--muted);
    font-size: 10px;
}

.section-header-right {
    display: flex;
    align-items: center;
    gap: 7px;
}

.section-badge {
    min-width: 25px;
    height: 22px;
    padding: 0 7px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: var(--canvas);
    color: var(--muted);
    font-size: 10px;
    font-weight: 700;
}

.card-action {
    border: 1px solid var(--line);
    background: white;
    color: var(--brand-dark);
    border-radius: 7px;
    height: 29px;
    padding: 0 9px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
}

.card-action:hover {
    background: var(--brand-soft);
}

.section-body {
    padding: 17px;
}

/* Profile details */

.profile-information-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
}

.detail-item {
    display: flex;
    gap: 10px;
    padding: 13px 10px;
    border-bottom: 1px solid var(--line-soft);
}

.detail-item:nth-child(odd) {
    border-right: 1px solid var(--line-soft);
    padding-left: 0;
}

.detail-item:nth-last-child(-n+2) {
    border-bottom: 0;
}

.detail-icon {
    width: 27px;
    height: 27px;
    flex-shrink: 0;
    border-radius: 7px;
    background: #F5F7F9;
    color: var(--muted);
    display: flex;
    align-items: center;
    justify-content: center;
}

.detail-item span {
    display: block;
    color: var(--muted);
    font-size: 9.5px;
    margin-bottom: 3px;
}

.detail-item strong {
    display: block;
    font-size: 12px;
    color: var(--ink);
    font-weight: 600;
}

.detail-empty {
    color: var(--muted-2) !important;
    font-weight: 400 !important;
}

/* Bio */

.bio-content {
    color: var(--ink-2);
    font-size: 12.5px;
    line-height: 1.8;
    white-space: pre-line;
}

/* Skills */

.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
}

.skill-card {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 11px;
    border: 1px solid var(--line);
    border-radius: 9px;
    background: #FCFDFE;
    min-width: 145px;
}

.skill-card:hover {
    border-color: #C7D7EB;
    background: var(--brand-soft-2);
}

.skill-icon {
    width: 27px;
    height: 27px;
    border-radius: 7px;
    background: var(--brand-soft);
    color: var(--brand);
    display: flex;
    align-items: center;
    justify-content: center;
}

.skill-card strong {
    display: block;
    font-size: 11.5px;
    color: var(--ink);
}

.skill-card span {
    display: block;
    color: var(--muted);
    font-size: 9px;
    margin-top: 2px;
}

/* Stories */

.story-list {
    display: flex;
    flex-direction: column;
}

.story-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid var(--line-soft);
}

.story-card:first-child {
    padding-top: 0;
}

.story-card:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.story-image {
    width: 62px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--brand-soft);
    color: var(--brand);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.story-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.story-content {
    flex: 1;
    min-width: 0;
}

.story-content h3 {
    font-size: 12px;
    margin: 0 0 3px;
}

.story-content p {
    color: var(--muted);
    font-size: 10.5px;
    margin: 0 0 4px;
}

.story-content span {
    color: var(--muted-2);
    font-size: 9px;
}

/* Rating */

.rating-card {
    background: linear-gradient(
        135deg,
        #5D89C8,
        #6F98CC
    );
    color: white;
    border-radius: 13px;
    overflow: hidden;
    box-shadow: 0 7px 18px rgba(93,137,200,.16);
}

.rating-header {
    padding: 17px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.rating-header span {
    display: block;
    opacity: .82;
    font-size: 10px;
    margin-bottom: 3px;
}

.rating-header strong {
    font-family: Space Grotesk, sans-serif;
    font-size: 30px;
}

.rating-stars {
    font-size: 17px;
    letter-spacing: 1px;
}

.rating-stars span {
    display: inline;
    color: rgba(255,255,255,.35);
}

.rating-stars .star-active {
    color: #fff;
}

.rating-footer {
    padding: 9px 18px;
    border-top: 1px solid rgba(255,255,255,.16);
    background: rgba(0,0,0,.06);
    font-size: 9.5px;
    opacity: .9;
}

/* Feedback */

.feedback-card {
    padding: 12px 0;
    border-bottom: 1px solid var(--line-soft);
}

.feedback-card:first-child {
    padding-top: 0;
}

.feedback-card:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.feedback-top {
    display: flex;
    gap: 8px;
    align-items: center;
}

.feedback-avatar,
.connection-avatar {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--brand-soft);
    color: var(--brand-dark);
    font-size: 9px;
    font-weight: 700;
}

.feedback-top strong {
    display: block;
    font-size: 10.5px;
}

.feedback-top span {
    display: block;
    color: var(--muted-2);
    font-size: 8.5px;
    margin-top: 2px;
}

.small-stars {
    color: #E3A72F;
    font-size: 10px;
    margin-top: 6px;
    letter-spacing: 1px;
}

.feedback-card p {
    margin: 5px 0 0;
    color: var(--ink-2);
    font-size: 10.5px;
    line-height: 1.55;
}

/* Connections */

.connection-card {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 0;
    border-bottom: 1px solid var(--line-soft);
}

.connection-card:first-child {
    padding-top: 0;
}

.connection-card:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.connection-info {
    flex: 1;
    min-width: 0;
}

.connection-info strong {
    display: block;
    font-size: 10.5px;
}

.connection-info span {
    display: block;
    font-size: 8.5px;
    color: var(--muted);
    margin-top: 2px;
}

.connection-status {
    font-size: 8.5px;
    padding: 4px 7px;
    border-radius: 999px;
    font-weight: 700;
}

.connection-status.active {
    background: var(--green-soft);
    color: var(--green);
}

.connection-status.pending {
    background: #FFF7E6;
    color: #A76B00;
}

/* Account */

.account-details {
    display: flex;
    flex-direction: column;
}

.account-row {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 10px 0;
    border-bottom: 1px solid var(--line-soft);
}

.account-row:first-child {
    padding-top: 0;
}

.account-row:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.account-row span {
    color: var(--muted);
    font-size: 9.5px;
}

.account-row strong {
    text-align: right;
    color: var(--ink);
    font-size: 10px;
    font-weight: 600;
}

.account-row .mono {
    font-family: monospace;
    color: var(--brand-dark);
}

/* Empty */

.empty-state {
    padding: 22px 10px;
    text-align: center;
}

.empty-icon {
    width: 38px;
    height: 38px;
    margin: 0 auto 9px;
    border-radius: 10px;
    background: #F5F7F9;
    color: var(--muted);
    display: flex;
    align-items: center;
    justify-content: center;
}

.empty-state strong {
    display: block;
    font-size: 11.5px;
}

.empty-state p {
    color: var(--muted);
    font-size: 10px;
    line-height: 1.5;
    margin: 4px auto 10px;
    max-width: 300px;
}

.empty-state button {
    border: 1px solid var(--line);
    background: white;
    color: var(--brand-dark);
    border-radius: 7px;
    padding: 7px 10px;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
}

/* Danger */

.danger-card {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 14px;
    background: var(--red-soft);
    border: 1px solid #F3D8D8;
    border-radius: 12px;
}

.danger-icon {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 7px;
    background: white;
    color: var(--red);
    display: flex;
    align-items: center;
    justify-content: center;
}

.danger-card strong {
    display: block;
    font-size: 11px;
    color: #A83838;
}

.danger-card p {
    margin: 3px 0 8px;
    color: #9B5B5B;
    font-size: 9px;
    line-height: 1.45;
}

.danger-card button {
    border: 0;
    background: transparent;
    color: var(--red);
    font-size: 9.5px;
    font-weight: 700;
    padding: 0;
    cursor: pointer;
}

/* Bottom */

.bottom-navigation {
    margin-top: 20px;
    padding: 14px 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--muted);
    font-size: 10px;
}

.bottom-navigation a,
.bottom-navigation button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--brand-dark);
    text-decoration: none;
    border: 0;
    background: transparent;
    cursor: pointer;
    font-size: 10.5px;
    font-weight: 600;
}

.bottom-navigation > div {
    display: flex;
    align-items: center;
    gap: 16px;
}

/* Modal */

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(15, 25, 40, .46);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1000;
}

.edit-modal {
    width: min(760px, 100%);
    max-height: calc(100vh - 40px);
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 70px rgba(15,25,40,.2);
    display: flex;
    flex-direction: column;
}

.modal-header {
    padding: 20px 22px;
    border-bottom: 1px solid var(--line);
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.modal-eyebrow {
    display: block;
    color: var(--brand);
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: .08em;
    font-weight: 700;
    margin-bottom: 3px;
}

.modal-header h2 {
    font-family: Space Grotesk, sans-serif;
    margin: 0;
    font-size: 19px;
}

.modal-header p {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 10.5px;
}

.modal-close {
    width: 31px;
    height: 31px;
    border: 1px solid var(--line);
    background: white;
    color: var(--muted);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.modal-body {
    overflow-y: auto;
    padding: 20px 22px;
}

.photo-editor {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 14px;
    border: 1px solid var(--line);
    background: #FBFCFD;
    border-radius: 11px;
    margin-bottom: 20px;
}

.photo-preview {
    width: 76px;
    height: 76px;
    flex-shrink: 0;
    border-radius: 12px;
    overflow: hidden;
    background: var(--brand-soft);
    color: var(--brand);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Space Grotesk, sans-serif;
    font-size: 25px;
    font-weight: 700;
}

.photo-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.photo-editor-content strong {
    display: block;
    font-size: 11.5px;
}

.photo-editor-content p {
    margin: 4px 0 9px;
    color: var(--muted);
    font-size: 9.5px;
    line-height: 1.5;
}

.upload-button {
    height: 30px;
    padding: 0 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border: 1px solid #C8D6E8;
    border-radius: 7px;
    background: white;
    color: var(--brand-dark);
    font-size: 9.5px;
    font-weight: 700;
    cursor: pointer;
}

.form-section {
    margin-top: 19px;
}

.form-section-title {
    font-size: 10.5px;
    font-weight: 700;
    color: var(--ink);
    padding-bottom: 8px;
    border-bottom: 1px solid var(--line);
    margin-bottom: 13px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 13px;
}

.form-field label {
    display: block;
    margin-bottom: 5px;
    font-size: 9.5px;
    font-weight: 700;
    color: var(--ink-2);
}

.required {
    color: var(--red);
    margin-left: 3px;
}

.form-field input,
.form-field select,
.form-section textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--line);
    border-radius: 7px;
    background: white;
    color: var(--ink);
    padding: 9px 10px;
    font: inherit;
    font-size: 11px;
    outline: none;
    transition: .15s;
}

.form-field input:focus,
.form-field select:focus,
.form-section textarea:focus {
    border-color: #AFC4DE;
    box-shadow: 0 0 0 3px var(--brand-soft);
}

.form-section textarea {
    resize: vertical;
    min-height: 110px;
    line-height: 1.6;
}

.switch-row {
    display: flex !important;
    align-items: center;
    gap: 8px;
    height: 37px;
    margin: 0 !important;
    cursor: pointer;
}

.switch-row input {
    display: none;
}

.switch-ui {
    width: 34px;
    height: 19px;
    background: #D8DEE7;
    border-radius: 20px;
    position: relative;
    transition: .2s;
    flex-shrink: 0;
}

.switch-ui::after {
    content: "";
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.15);
    transition: .2s;
}

.switch-row input:checked + .switch-ui {
    background: var(--brand);
}

.switch-row input:checked + .switch-ui::after {
    left: 17px;
}

.switch-row > span:last-child {
    font-size: 9.5px;
    color: var(--muted);
}

.field-error {
    color: var(--red);
    font-size: 9px;
    margin-top: 4px;
}

.modal-footer {
    padding: 13px 22px;
    border-top: 1px solid var(--line);
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

.modal-cancel,
.modal-save {
    height: 35px;
    padding: 0 14px;
    border-radius: 7px;
    font-size: 10.5px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
}

.modal-cancel {
    border: 1px solid var(--line);
    background: white;
    color: var(--ink-2);
}

.modal-save {
    border: 0;
    background: var(--brand);
    color: white;
}

.modal-save:hover {
    background: var(--brand-dark);
}

.modal-save:disabled {
    opacity: .6;
    cursor: not-allowed;
}

.spinner {
    width: 12px;
    height: 12px;
    border: 2px solid rgba(255,255,255,.4);
    border-top-color: white;
    border-radius: 50%;
    animation: spin .7s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Delete modal */

.delete-modal {
    width: min(420px, 100%);
    background: white;
    border-radius: 15px;
    padding: 24px;
    box-shadow: 0 25px 70px rgba(15,25,40,.2);
}

.delete-icon {
    width: 42px;
    height: 42px;
    border-radius: 11px;
    background: var(--red-soft);
    color: var(--red);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 13px;
}

.delete-modal h2 {
    font-family: Space Grotesk, sans-serif;
    font-size: 18px;
    margin: 0 0 7px;
}

.delete-modal > p {
    color: var(--muted);
    font-size: 11px;
    line-height: 1.6;
    margin: 0;
}

.delete-warning {
    margin-top: 13px;
    display: flex;
    gap: 7px;
    padding: 10px;
    border-radius: 8px;
    background: #FFF7E6;
    color: #966600;
    font-size: 9.5px;
    line-height: 1.5;
}

.delete-actions {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

.delete-confirm {
    height: 35px;
    padding: 0 12px;
    border: 0;
    border-radius: 7px;
    background: var(--red);
    color: white;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
}

/* Responsive */

@media (max-width: 1250px) {
    .stats-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .content-layout {
        grid-template-columns: minmax(0, 1.5fr) minmax(300px, .9fr);
    }
}

@media (max-width: 1050px) {
    .profile-hero .hero-content {
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .hero-main {
        padding-top: 15px;
    }

    .hero-actions {
        width: 100%;
        flex-direction: row;
        padding-top: 0;
    }

    .primary-action {
        flex: 1;
    }

    .content-layout {
        grid-template-columns: 1fr;
    }

    .side-column {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: start;
    }

    .rating-card {
        grid-column: span 2;
    }
}

@media (max-width: 760px) {
    .talent-profile-page {
        padding: 18px 14px 35px;
    }

    .hero-content {
        padding: 0 16px 18px;
    }

    .profile-image {
        width: 88px;
        height: 88px;
    }

    .profile-image-wrapper {
        margin-top: -42px;
    }

    .hero-main h1 {
        font-size: 21px;
    }

    .overview-strip {
        flex-wrap: wrap;
        gap: 14px;
        padding: 14px;
    }

    .overview-divider {
        display: none;
    }

    .overview-item,
    .overview-item-simple {
        flex: 1 1 45%;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .profile-information-grid {
        grid-template-columns: 1fr;
    }

    .detail-item:nth-child(odd) {
        border-right: 0;
        padding-left: 10px;
    }

    .detail-item:nth-last-child(-n+2) {
        border-bottom: 1px solid var(--line-soft);
    }

    .detail-item:last-child {
        border-bottom: 0;
    }

    .side-column {
        display: flex;
    }

    .rating-card {
        grid-column: auto;
    }

    .bottom-navigation {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .bottom-navigation > div {
        width: 100%;
        justify-content: space-between;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 520px) {
    .hero-actions {
        flex-wrap: wrap;
    }

    .primary-action {
        width: 100%;
        flex: auto;
    }

    .action-row {
        width: 100%;
    }

    .overview-item,
    .overview-item-simple {
        flex-basis: 100%;
    }

    .stats-grid {
        gap: 8px;
    }

    .stat-card {
        padding: 12px;
    }

    .section-header {
        padding: 11px 13px;
    }

    .section-body {
        padding: 14px;
    }

    .modal-overlay {
        padding: 10px;
    }

    .edit-modal {
        max-height: calc(100vh - 20px);
    }

    .modal-body,
    .modal-header,
    .modal-footer {
        padding-left: 15px;
        padding-right: 15px;
    }

    .photo-editor {
        align-items: flex-start;
    }
}
`;export{Be as default};
