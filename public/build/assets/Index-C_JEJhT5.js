import{r as v,j as e,H as j,L as N,u as y}from"./app-DQcVR1sC.js";import{A as k}from"./AppLayout-D93w9Ma6.js";function F({talent:a,categories:t,flash:i}){var l,p,m,f,g;const[r,o]=v.useState(!1),c=((l=a.feedback)==null?void 0:l.slice(0,3))??[],n=((p=a.courses)==null?void 0:p.slice(0,3))??[];return e.jsxs(k,{children:[e.jsx(j,{title:`${a.name} — Profile`}),e.jsxs("div",{"data-h-scope":"talent-profile",children:[e.jsx("style",{children:`
                    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

                    [data-h-scope="talent-profile"] {
                        --h-accent: #48d597;
                        --h-accent-ink: #0f3d2b;   /* readable text on accent */
                        --h-ink: #000000;
                        --h-white: #F5f5f7;
                        --h-bg: #f6f8f7;
                        --h-line: rgba(0, 0, 0, 0.1);
                        --h-line-soft: rgba(0, 0, 0, 0.06);
                        --h-muted: rgba(0, 0, 0, 0.56);
                        background-color: var(--h-bg);
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] h1,
                    [data-h-scope="talent-profile"] h2,
                    [data-h-scope="talent-profile"] h3,
                    [data-h-scope="talent-profile"] h4,
                    [data-h-scope="talent-profile"] h5,
                    [data-h-scope="talent-profile"] h6,
                    [data-h-scope="talent-profile"] .h-display {
                        font-family: 'Space Grotesk', 'Inter', sans-serif;
                        letter-spacing: -0.01em;
                    }

                    /* ---- flat panels, no shared shadow-kit look ---- */
                    [data-h-scope="talent-profile"] .h-panel {
                        background: var(--h-white);
                        border: 1px solid var(--h-line-soft);
                        border-radius: 14px;
                    }

                    /* ---- header: solid black band, editorial layout ---- */
                    [data-h-scope="talent-profile"] .h-header {
                        background: var(--h-ink);
                        color: var(--h-white);
                        border-radius: 16px;
                        position: relative;
                        overflow: hidden;
                    }
                    [data-h-scope="talent-profile"] .h-header::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        width: 4px;
                        background: var(--h-accent);
                    }
                    [data-h-scope="talent-profile"] .h-header .text-secondary {
                        color: rgba(255, 255, 255, 0.6) !important;
                    }
                    [data-h-scope="talent-profile"] .h-avatar {
                        border: 2px solid var(--h-accent) !important;
                    }
                    [data-h-scope="talent-profile"] .h-badge-accent {
                        background: var(--h-accent);
                        color: var(--h-accent-ink);
                        font-weight: 600;
                        font-size: 0.78rem;
                    }
                    [data-h-scope="talent-profile"] .h-badge-outline {
                        background: transparent;
                        color: var(--h-white);
                        border: 1px solid rgba(255, 255, 255, 0.3);
                        font-size: 0.78rem;
                        font-weight: 500;
                    }

                    /* ---- buttons ---- */
                    [data-h-scope="talent-profile"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-accent-ink);
                        border: 1px solid var(--h-accent);
                        font-weight: 600;
                        transition: background 0.15s ease, border-color 0.15s ease;
                    }
                    [data-h-scope="talent-profile"] .h-btn-accent:hover {
                        background: #34c084;
                        border-color: #34c084;
                        color: var(--h-accent-ink);
                    }
                    [data-h-scope="talent-profile"] .h-btn-accent:disabled {
                        opacity: 0.55;
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost-dark {
                        background: transparent;
                        color: var(--h-white);
                        border: 1px solid rgba(255, 255, 255, 0.35);
                        font-weight: 500;
                        transition: border-color 0.15s ease, background 0.15s ease;
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost-dark:hover {
                        background: rgba(255, 255, 255, 0.08);
                        border-color: rgba(255, 255, 255, 0.6);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid var(--h-line);
                        font-weight: 500;
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost:hover {
                        background: var(--h-bg);
                    }

                    /* ---- section labels: rule instead of uppercase tracking ---- */
                    [data-h-scope="talent-profile"] .h-section-title {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-profile"] .h-section-title::before {
                        content: "";
                        width: 4px;
                        height: 18px;
                        background: var(--h-accent);
                        border-radius: 2px;
                        display: inline-block;
                    }
                    [data-h-scope="talent-profile"] .h-label {
                        color: var(--h-muted);
                        font-weight: 500;
                        font-size: 0.8rem;
                    }
                    [data-h-scope="talent-profile"] .h-chip-count {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                        color: var(--h-muted);
                        font-weight: 500;
                    }

                    [data-h-scope="talent-profile"] .h-icon-tile {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                    }
                    [data-h-scope="talent-profile"] .h-icon-tile i {
                        color: var(--h-ink);
                    }

                    [data-h-scope="talent-profile"] .h-review-card,
                    [data-h-scope="talent-profile"] .h-course-card {
                        border: 1px solid var(--h-line-soft);
                        border-radius: 12px;
                        transition: border-color 0.15s ease;
                    }
                    [data-h-scope="talent-profile"] .h-review-card:hover,
                    [data-h-scope="talent-profile"] .h-course-card:hover {
                        border-color: var(--h-line);
                    }
                    [data-h-scope="talent-profile"] .h-star-filled {
                        color: var(--h-accent-ink);
                    }
                    [data-h-scope="talent-profile"] .h-star-empty {
                        color: var(--h-line);
                    }
                    [data-h-scope="talent-profile"] .h-star-value {
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-profile"] .h-course-badge {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid var(--h-ink);
                        font-weight: 500;
                    }

                    [data-h-scope="talent-profile"] .h-alert-success {
                        background: var(--h-white);
                        border: 1px solid var(--h-accent);
                        border-left: 4px solid var(--h-accent);
                        color: var(--h-ink);
                        border-radius: 10px;
                    }

                    [data-h-scope="talent-profile"] .form-control,
                    [data-h-scope="talent-profile"] .form-select {
                        border: 1px solid var(--h-line);
                    }
                    [data-h-scope="talent-profile"] .form-control:focus,
                    [data-h-scope="talent-profile"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 3px rgba(72, 213, 151, 0.2);
                    }
                    [data-h-scope="talent-profile"] .form-label {
                        color: var(--h-ink);
                        font-weight: 500;
                        font-size: 0.85rem;
                    }
                `}),e.jsxs("div",{className:"container-fluid px-4 py-4",style:{maxWidth:1180,margin:"0 auto"},children:[(i==null?void 0:i.success)&&e.jsxs("div",{className:"alert h-alert-success px-3 py-3 mb-4 d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-circle-check me-2",style:{color:"#0f3d2b"}}),i.success]}),e.jsx("div",{className:"h-header mb-4",children:e.jsxs("div",{className:"p-4 ps-4",children:[e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center gap-3",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("img",{src:a.image?`/${a.image}`:"/img/faces/face10.jpg",alt:a.name,className:"rounded-circle h-avatar",style:{width:72,height:72,objectFit:"cover"}}),e.jsxs("div",{children:[e.jsx("h5",{className:"fw-bold mb-2",children:a.name}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("span",{className:"badge h-badge-accent px-3 py-2 rounded-pill",children:((m=a.category)==null?void 0:m.name)??"No Category"}),a.level&&e.jsx("span",{className:"badge h-badge-outline px-3 py-2 rounded-pill",children:$(a.level)})]})]})]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsxs(N,{href:route("talent.page.stories.index"),className:"btn h-btn-ghost-dark rounded-pill px-4 py-2",children:[e.jsx("i",{className:"fas fa-book-open me-2"}),"My Story"]}),e.jsxs("button",{type:"button",className:"btn h-btn-accent rounded-pill px-4 py-2",onClick:()=>o(!0),children:[e.jsx("i",{className:"fas fa-pen me-2"}),"Edit Profile"]})]})]}),a.description&&e.jsx("p",{className:"mt-3 mb-0",style:{maxWidth:640,opacity:.8},children:a.description})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"h-panel p-4",children:[e.jsx("div",{className:"h-section-title mb-3",children:"Contact Information"}),e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(x,{icon:"fa-mobile-screen-button",label:"Mobile",value:a.phone}),e.jsx(x,{icon:"fa-envelope",label:"Email",value:a.email}),e.jsx(x,{icon:"fa-location-dot",label:"Address",value:a.address}),a.language&&e.jsx(x,{icon:"fa-language",label:"Language",value:a.language})]})]})}),e.jsxs("div",{className:"col-lg-8",children:[e.jsxs("div",{className:"h-panel p-4 mb-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsx("div",{className:"h-section-title",children:"Recent Reviews"}),((f=a.feedback)==null?void 0:f.length)>0&&e.jsxs("span",{className:"small h-chip-count px-2 py-1 rounded-pill",children:[a.feedback.length," total"]})]}),c.length===0?e.jsx(u,{icon:"fa-comment-slash",text:"No reviews yet."}):e.jsx("div",{className:"d-flex flex-column gap-3",children:c.map(d=>e.jsx(C,{review:d},d.id))})]}),e.jsxs("div",{className:"h-panel p-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsx("div",{className:"h-section-title",children:"Recent Courses"}),((g=a.courses)==null?void 0:g.length)>0&&e.jsxs("span",{className:"small h-chip-count px-2 py-1 rounded-pill",children:[a.courses.length," total"]})]}),n.length===0?e.jsx(u,{icon:"fa-book",text:"No courses available."}):e.jsx("div",{className:"row g-3",children:n.map(d=>e.jsx("div",{className:"col-md-6",children:e.jsx(_,{course:d})},d.id))})]})]})]})]}),e.jsx(w,{show:r,onClose:()=>o(!1),title:"Edit Profile",size:"lg",children:e.jsx(R,{talent:a,categories:t,onSaved:()=>o(!1)})})]})]})}function w({show:a,onClose:t,title:i,size:r,children:o}){if(!a)return null;const c=r==="lg"?"modal-lg":r==="sm"?"modal-sm":"";return e.jsxs("div",{"data-h-scope":"talent-profile",children:[e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog",onClick:t,children:e.jsx("div",{className:`modal-dialog modal-dialog-centered ${c}`,role:"document",onClick:n=>n.stopPropagation(),children:e.jsxs("div",{className:"modal-content border-0",style:{borderRadius:16,overflow:"hidden"},children:[e.jsxs("div",{className:"modal-header pb-3",style:{borderBottom:"1px solid rgba(0,0,0,0.08)"},children:[e.jsx("h5",{className:"modal-title fw-bold mb-0",style:{color:"#000000"},children:i}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:t})]}),e.jsx("div",{className:"modal-body p-4",children:o})]})})}),e.jsx("div",{className:"modal-backdrop fade show",onClick:t})]})}function x({icon:a,label:t,value:i}){return e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center rounded-3 h-icon-tile",style:{width:38,height:38,flexShrink:0},children:e.jsx("i",{className:`fas ${a}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"h-label",children:t}),e.jsx("div",{className:"fw-semibold",children:i||"—"})]})]})}function C({review:a}){return e.jsxs("div",{className:"h-review-card p-3",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-2",children:[e.jsx("strong",{children:a.reviewer_name??"Anonymous"}),e.jsx(S,{rating:a.rating})]}),e.jsx("p",{className:"mb-2",style:{color:"rgba(0,0,0,0.65)"},children:a.comment}),e.jsx("small",{style:{color:"rgba(0,0,0,0.45)"},children:a.created_at_human})]})}function S({rating:a}){return e.jsxs("span",{className:"small d-flex align-items-center gap-1",children:[e.jsx("span",{className:"h-star-filled",children:"★".repeat(a)}),e.jsx("span",{className:"h-star-empty",children:"★".repeat(5-a)}),e.jsxs("span",{className:"h-star-value ms-1",children:[a,"/5"]})]})}function _({course:a}){var t;return e.jsxs("div",{className:"h-course-card p-3 h-100",children:[e.jsx("h6",{className:"fw-bold mb-2",children:a.title}),e.jsx("p",{className:"small mb-3",style:{color:"rgba(0,0,0,0.6)"},children:a.description}),e.jsx("span",{className:"badge h-course-badge px-2 py-1 rounded-pill",children:(t=a.category)==null?void 0:t.name})]})}function u({icon:a,text:t}){return e.jsxs("div",{className:"text-center py-4",children:[e.jsx("i",{className:`fas ${a} fs-2 mb-2 d-block`,style:{color:"rgba(0,0,0,0.15)"}}),e.jsx("p",{className:"mb-0 small",style:{color:"rgba(0,0,0,0.45)"},children:t})]})}function R({talent:a,categories:t,onSaved:i}){const{data:r,setData:o,post:c,processing:n,errors:l,progress:p}=y({_method:"put",name:a.name??"",level:a.level??"",description:a.description??"",address:a.address??"",phone:a.phone??"",email:a.email??"",language:a.language??"",category_id:a.category_id??"",image:null}),[m,f]=v.useState(a.image?`/${a.image}`:null);function g(s){const b=s.target.files[0];o("image",b),b&&f(URL.createObjectURL(b))}function d(s){s.preventDefault(),c(route("talent.profile.update",a.id),{forceFormData:!0,preserveScroll:!0,onSuccess:()=>i()})}return e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-12 d-flex align-items-center gap-3",children:[m?e.jsx("img",{src:m,alt:"Profile preview",className:"rounded-3",style:{width:84,height:84,objectFit:"cover",border:"2px solid #48d597"}}):e.jsx("div",{className:"rounded-3 d-flex align-items-center justify-content-center",style:{width:84,height:84,background:"#f6f8f7",border:"1px solid rgba(0,0,0,0.1)"},children:e.jsx("i",{className:"fas fa-user fs-4",style:{color:"#000000",opacity:.4}})}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("label",{className:"form-label",children:"Profile Image"}),e.jsx("input",{type:"file",accept:"image/*",className:`form-control rounded-3 ${l.image?"is-invalid":""}`,onChange:g}),l.image&&e.jsx("div",{className:"text-danger small mt-1",children:l.image}),p&&e.jsx("div",{className:"progress mt-2",style:{height:6,background:"#f0f0f0"},children:e.jsx("div",{className:"progress-bar",style:{width:`${p.percentage}%`,backgroundColor:"#48d597"}})})]})]}),e.jsx(h,{label:"Name",value:r.name,onChange:s=>o("name",s),error:l.name,col:"col-md-6"}),e.jsx(h,{label:"Level",value:r.level,onChange:s=>o("level",s),error:l.level,col:"col-md-6"}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{className:"form-label",children:"Description"}),e.jsx("textarea",{className:`form-control rounded-3 ${l.description?"is-invalid":""}`,rows:3,value:r.description,onChange:s=>o("description",s.target.value)}),l.description&&e.jsx("div",{className:"invalid-feedback",children:l.description})]}),e.jsx(h,{label:"Address",value:r.address,onChange:s=>o("address",s),error:l.address,col:"col-md-6"}),e.jsx(h,{label:"Phone",value:r.phone,onChange:s=>o("phone",s),error:l.phone,col:"col-md-6"}),e.jsx(h,{label:"Email",value:r.email,onChange:s=>o("email",s),error:l.email,col:"col-md-6",type:"email"}),e.jsx(h,{label:"Language",value:r.language,onChange:s=>o("language",s),error:l.language,col:"col-md-6"}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Category"}),e.jsxs("select",{className:`form-select rounded-3 ${l.category_id?"is-invalid":""}`,value:r.category_id,onChange:s=>o("category_id",s.target.value),children:[e.jsx("option",{value:"",children:"Select a category"}),t.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),l.category_id&&e.jsx("div",{className:"invalid-feedback",children:l.category_id})]})]}),e.jsxs("div",{className:"d-flex justify-content-end gap-2 mt-4",children:[e.jsx("button",{type:"button",className:"btn h-btn-ghost rounded-pill px-4",onClick:i,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn h-btn-accent rounded-pill px-4",disabled:n,children:n?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Saving..."]}):"Save Changes"})]})]})}function h({label:a,value:t,onChange:i,error:r,col:o,type:c="text"}){return e.jsxs("div",{className:o,children:[e.jsx("label",{className:"form-label",children:a}),e.jsx("input",{type:c,className:`form-control rounded-3 ${r?"is-invalid":""}`,value:t,onChange:n=>i(n.target.value)}),r&&e.jsx("div",{className:"invalid-feedback",children:r})]})}function $(a){return a?a.charAt(0).toUpperCase()+a.slice(1):""}export{F as default};
