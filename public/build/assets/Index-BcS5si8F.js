import{r as j,j as e,H as v,L as N,u as y}from"./app-CzHhKsxF.js";import{A as k}from"./AppLayout-CgsTf2Wf.js";function L({talent:a,categories:d,flash:o}){var l,m,p,x,b;const[r,c]=j.useState(!1),n=((l=a.feedback)==null?void 0:l.slice(0,3))??[],i=((m=a.courses)==null?void 0:m.slice(0,3))??[];return e.jsxs(k,{children:[e.jsx(v,{title:`${a.name} — Profile`}),e.jsxs("div",{"data-h-scope":"talent-profile",children:[e.jsx("style",{children:`
                    [data-h-scope="talent-profile"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-profile"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                    }
                    [data-h-scope="talent-profile"] .h-header-card {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-profile"] .h-header-card .text-secondary {
                        color: rgba(255,255,255,0.65) !important;
                    }
                    [data-h-scope="talent-profile"] .h-avatar {
                        border: 3px solid var(--h-accent) !important;
                    }
                    [data-h-scope="talent-profile"] .h-badge-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-profile"] .h-badge-outline {
                        background: rgba(255,255,255,0.08);
                        color: var(--h-white);
                        border: 1px solid rgba(255,255,255,0.2);
                    }
                    [data-h-scope="talent-profile"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background 0.15s ease;
                    }
                    [data-h-scope="talent-profile"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] .h-btn-accent:disabled {
                        opacity: 0.6;
                    }
                    [data-h-scope="talent-profile"] .h-icon-tile {
                        background: rgba(72, 213, 151, 0.12);
                    }
                    [data-h-scope="talent-profile"] .h-icon-tile i {
                        color: var(--h-accent-dark);
                    }
                    [data-h-scope="talent-profile"] .h-label {
                        color: var(--h-ink);
                        opacity: 0.55;
                        letter-spacing: 0.04em;
                    }
                    [data-h-scope="talent-profile"] .h-section-title {
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] .h-chip-count {
                        background: rgba(6,15,17,0.05);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] .h-star-value {
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] .h-course-badge {
                        background: rgba(72, 213, 151, 0.12);
                        color: var(--h-accent-dark);
                        border: 1px solid rgba(72, 213, 151, 0.3);
                    }
                    [data-h-scope="talent-profile"] .h-alert-success {
                        background: rgba(72, 213, 151, 0.15);
                        border: 1px solid rgba(72, 213, 151, 0.4);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] .form-control:focus,
                    [data-h-scope="talent-profile"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72, 213, 151, 0.25);
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid rgba(6,15,17,0.15);
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost:hover {
                        background: rgba(6,15,17,0.04);
                    }
                `}),e.jsxs("div",{className:"container-fluid px-4 py-4",children:[(o==null?void 0:o.success)&&e.jsxs("div",{className:"alert h-alert-success rounded-3 border-0",children:[e.jsx("i",{className:"fas fa-circle-check me-2"}),o.success]}),e.jsx("div",{className:"card h-card h-header-card border-0 shadow-sm rounded-4 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center gap-3",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("img",{src:a.image?`/${a.image}`:"/img/faces/face10.jpg",alt:a.name,className:"rounded-circle h-avatar",style:{width:72,height:72,objectFit:"cover"}}),e.jsxs("div",{children:[e.jsx("h5",{className:"fw-bold mb-1",children:a.name}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("span",{className:"badge h-badge-accent px-3 py-2 rounded-pill",children:((p=a.category)==null?void 0:p.name)??"No Category"}),a.level&&e.jsx("span",{className:"badge h-badge-outline px-3 py-2 rounded-pill",children:P(a.level)})]})]})]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsxs(N,{href:route("talent.page.stories.index"),className:"btn h-btn-ghost rounded-pill px-4 py-2",style:{color:"#ffffff",borderColor:"rgba(255,255,255,0.3)"},children:[e.jsx("i",{className:"fas fa-book-open me-2"}),"My Story"]}),e.jsxs("button",{type:"button",className:"btn h-btn-accent rounded-pill px-4 py-2",onClick:()=>c(!0),children:[e.jsx("i",{className:"fas fa-pen me-2"}),"Edit Profile"]})]})]}),a.description&&e.jsx("p",{className:"mt-3 mb-0",style:{maxWidth:720,opacity:.85},children:a.description})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-4",children:e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("label",{className:"text-uppercase h-label small fw-semibold mb-3 d-block",children:"Contact Information"}),e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(g,{icon:"fa-mobile-screen-button",label:"Mobile",value:a.phone}),e.jsx(g,{icon:"fa-envelope",label:"Email",value:a.email}),e.jsx(g,{icon:"fa-location-dot",label:"Address",value:a.address}),a.language&&e.jsx(g,{icon:"fa-language",label:"Language",value:a.language})]})]})})}),e.jsxs("div",{className:"col-lg-8",children:[e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsx("h6",{className:"fw-bold mb-0 h-section-title",children:"Recent Reviews"}),((x=a.feedback)==null?void 0:x.length)>0&&e.jsxs("span",{className:"small h-chip-count px-2 py-1 rounded-pill",children:[a.feedback.length," total"]})]}),n.length===0?e.jsx(u,{icon:"fa-comment-slash",text:"No reviews yet."}):e.jsx("div",{className:"d-flex flex-column gap-3",children:n.map(t=>e.jsx(C,{review:t},t.id))})]})}),e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsx("h6",{className:"fw-bold mb-0 h-section-title",children:"Recent Courses"}),((b=a.courses)==null?void 0:b.length)>0&&e.jsxs("span",{className:"small h-chip-count px-2 py-1 rounded-pill",children:[a.courses.length," total"]})]}),i.length===0?e.jsx(u,{icon:"fa-book",text:"No courses available."}):e.jsx("div",{className:"row g-3",children:i.map(t=>e.jsx("div",{className:"col-md-6",children:e.jsx(S,{course:t})},t.id))})]})})]})]})]}),e.jsx(w,{show:r,onClose:()=>c(!1),title:"Edit Profile",size:"lg",children:e.jsx($,{talent:a,categories:d,onSaved:()=>c(!1)})})]})]})}function w({show:a,onClose:d,title:o,size:r,children:c}){if(!a)return null;const n=r==="lg"?"modal-lg":r==="sm"?"modal-sm":"";return e.jsxs("div",{"data-h-scope":"talent-profile",children:[e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog",onClick:d,children:e.jsx("div",{className:`modal-dialog modal-dialog-centered ${n}`,role:"document",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"modal-content rounded-4 border-0 shadow",children:[e.jsxs("div",{className:"modal-header border-0 pb-0",children:[e.jsx("h5",{className:"modal-title fw-bold",style:{color:"#060f11"},children:o}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:d})]}),e.jsx("div",{className:"modal-body p-4",children:c})]})})}),e.jsx("div",{className:"modal-backdrop fade show",onClick:d})]})}function g({icon:a,label:d,value:o}){return e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center rounded-3 h-icon-tile",style:{width:38,height:38,flexShrink:0},children:e.jsx("i",{className:`fas ${a}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"small h-label",children:d}),e.jsx("div",{className:"fw-semibold",children:o||"—"})]})]})}function C({review:a}){return e.jsxs("div",{className:"border rounded-4 p-3",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[e.jsx("strong",{children:a.reviewer_name??"Anonymous"}),e.jsx(_,{rating:a.rating})]}),e.jsx("p",{className:"text-secondary mb-2",children:a.comment}),e.jsx("small",{className:"text-secondary",children:a.created_at_human})]})}function _({rating:a}){return e.jsxs("span",{className:"small",children:[e.jsx("span",{style:{color:"#48d597"},children:"★".repeat(a)}),e.jsx("span",{className:"text-secondary",children:"★".repeat(5-a)}),e.jsxs("span",{className:"h-star-value ms-1 fw-semibold",children:[a,"/5"]})]})}function S({course:a}){var d;return e.jsxs("div",{className:"border rounded-4 p-3 h-100",children:[e.jsx("h6",{className:"fw-bold mb-2",children:a.title}),e.jsx("p",{className:"text-secondary small mb-3",children:a.description}),e.jsx("span",{className:"badge h-course-badge",children:(d=a.category)==null?void 0:d.name})]})}function u({icon:a,text:d}){return e.jsxs("div",{className:"text-center py-4 text-secondary",children:[e.jsx("i",{className:`fas ${a} fs-2 mb-2 d-block opacity-25`}),e.jsx("p",{className:"mb-0 small",children:d})]})}function $({talent:a,categories:d,onSaved:o}){const{data:r,setData:c,post:n,processing:i,errors:l,progress:m}=y({_method:"put",name:a.name??"",level:a.level??"",description:a.description??"",address:a.address??"",phone:a.phone??"",email:a.email??"",language:a.language??"",category_id:a.category_id??"",image:null}),[p,x]=j.useState(a.image?`/${a.image}`:null);function b(s){const f=s.target.files[0];c("image",f),f&&x(URL.createObjectURL(f))}function t(s){s.preventDefault(),n(route("talent.profile.update",a.id),{forceFormData:!0,preserveScroll:!0,onSuccess:()=>o()})}return e.jsxs("form",{onSubmit:t,children:[e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-12 d-flex align-items-center gap-3",children:[p?e.jsx("img",{src:p,alt:"Profile preview",className:"rounded-3",style:{width:84,height:84,objectFit:"cover",border:"2px solid #48d597"}}):e.jsx("div",{className:"rounded-3 d-flex align-items-center justify-content-center",style:{width:84,height:84,background:"rgba(72,213,151,0.12)"},children:e.jsx("i",{className:"fas fa-user fs-4",style:{color:"#2fb87c"}})}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Profile Image"}),e.jsx("input",{type:"file",accept:"image/*",className:`form-control rounded-3 ${l.image?"is-invalid":""}`,onChange:b}),l.image&&e.jsx("div",{className:"text-danger small mt-1",children:l.image}),m&&e.jsx("div",{className:"progress mt-2",style:{height:6},children:e.jsx("div",{className:"progress-bar",style:{width:`${m.percentage}%`,backgroundColor:"#48d597"}})})]})]}),e.jsx(h,{label:"Name",value:r.name,onChange:s=>c("name",s),error:l.name,col:"col-md-6"}),e.jsx(h,{label:"Level",value:r.level,onChange:s=>c("level",s),error:l.level,col:"col-md-6"}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Description"}),e.jsx("textarea",{className:`form-control rounded-3 ${l.description?"is-invalid":""}`,rows:3,value:r.description,onChange:s=>c("description",s.target.value)}),l.description&&e.jsx("div",{className:"invalid-feedback",children:l.description})]}),e.jsx(h,{label:"Address",value:r.address,onChange:s=>c("address",s),error:l.address,col:"col-md-6"}),e.jsx(h,{label:"Phone",value:r.phone,onChange:s=>c("phone",s),error:l.phone,col:"col-md-6"}),e.jsx(h,{label:"Email",value:r.email,onChange:s=>c("email",s),error:l.email,col:"col-md-6",type:"email"}),e.jsx(h,{label:"Language",value:r.language,onChange:s=>c("language",s),error:l.language,col:"col-md-6"}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Category"}),e.jsxs("select",{className:`form-select rounded-3 ${l.category_id?"is-invalid":""}`,value:r.category_id,onChange:s=>c("category_id",s.target.value),children:[e.jsx("option",{value:"",children:"Select a category"}),d.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),l.category_id&&e.jsx("div",{className:"invalid-feedback",children:l.category_id})]})]}),e.jsxs("div",{className:"d-flex justify-content-end gap-2 mt-4",children:[e.jsx("button",{type:"button",className:"btn h-btn-ghost rounded-pill px-4",onClick:o,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn h-btn-accent rounded-pill px-4",disabled:i,children:i?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Saving..."]}):"Save Changes"})]})]})}function h({label:a,value:d,onChange:o,error:r,col:c,type:n="text"}){return e.jsxs("div",{className:c,children:[e.jsx("label",{className:"form-label small fw-semibold",children:a}),e.jsx("input",{type:n,className:`form-control rounded-3 ${r?"is-invalid":""}`,value:d,onChange:i=>o(i.target.value)}),r&&e.jsx("div",{className:"invalid-feedback",children:r})]})}function P(a){return a?a.charAt(0).toUpperCase()+a.slice(1):""}export{L as default};
