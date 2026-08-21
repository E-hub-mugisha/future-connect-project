import{r as v,u,j as e,H as x,L as j}from"./app-C-Atdk99.js";import{A as g}from"./AppLayout-3QMuWNNg.js";function k({course:a,categories:n}){const i=!!(a!=null&&a.id),[c,o]=v.useState(a!=null&&a.thumbnail?`/${a.thumbnail}`:null),{data:t,setData:r,post:b,processing:h,errors:l}=u({_method:i?"put":"post",title:(a==null?void 0:a.title)??"",category_id:(a==null?void 0:a.category_id)??"",level:(a==null?void 0:a.level)??"",description:(a==null?void 0:a.description)??"",thumbnail:null,video:(a==null?void 0:a.video)??"",price:(a==null?void 0:a.price)??"",is_free:(a==null?void 0:a.is_free)??!1,status:(a==null?void 0:a.status)??"draft"});function p(s){const d=s.target.files[0];r("thumbnail",d),d&&o(URL.createObjectURL(d))}function f(s){s.preventDefault();const d=i?route("talent.courses.update",a.id):route("talent.courses.store");b(d,{forceFormData:!0,preserveScroll:!0})}return e.jsxs(g,{children:[e.jsx(x,{title:i?"Edit Course":"Add New Course"}),e.jsxs("div",{"data-h-scope":"talent-course-form",children:[e.jsx("style",{children:`
                    [data-h-scope="talent-course-form"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-course-form"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6,15,17,0.06);
                    }
                    [data-h-scope="talent-course-form"] .h-header-card {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-course-form"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background .15s ease;
                    }
                    [data-h-scope="talent-course-form"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-course-form"] .h-btn-accent:disabled {
                        opacity: 0.6;
                    }
                    [data-h-scope="talent-course-form"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-white);
                        border: 1px solid rgba(255,255,255,0.25);
                    }
                    [data-h-scope="talent-course-form"] .h-btn-ghost:hover {
                        background: rgba(255,255,255,0.1);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-course-form"] .form-control:focus,
                    [data-h-scope="talent-course-form"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72,213,151,0.25);
                    }
                    [data-h-scope="talent-course-form"] .h-section-label {
                        color: var(--h-ink);
                        opacity: 0.55;
                        letter-spacing: 0.04em;
                    }
                    [data-h-scope="talent-course-form"] .h-switch .form-check-input:checked {
                        background-color: var(--h-accent);
                        border-color: var(--h-accent);
                    }
                    [data-h-scope="talent-course-form"] .h-thumb-preview {
                        border: 2px solid var(--h-accent);
                    }
                    [data-h-scope="talent-course-form"] .h-status-pill {
                        border: 2px solid transparent;
                        cursor: pointer;
                        transition: all .15s ease;
                    }
                    [data-h-scope="talent-course-form"] .h-status-pill.active-draft {
                        border-color: #f5b301;
                        background: #fff8e6;
                    }
                    [data-h-scope="talent-course-form"] .h-status-pill.active-published {
                        border-color: var(--h-accent);
                        background: rgba(72,213,151,0.1);
                    }
                    [data-h-scope="talent-course-form"] .h-alert-danger {
                        background: #fdecea;
                        border: 1px solid #f5c2c0;
                        color: #7a1f1a;
                    }
                `}),e.jsxs("div",{className:"container-fluid px-4 py-4",children:[e.jsx("div",{className:"card h-header-card border-0 shadow-sm rounded-4 mb-4",children:e.jsxs("div",{className:"card-body p-4 d-flex flex-wrap justify-content-between align-items-center gap-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"fw-bold mb-1",children:i?"Edit Course":"Add New Course"}),e.jsx("p",{className:"mb-0",style:{opacity:.7},children:i?"Update your course details below":"Fill in the details below to create and publish a course"})]}),e.jsxs(j,{href:route("talent.courses.index"),className:"btn h-btn-ghost rounded-pill px-4 py-2",children:[e.jsx("i",{className:"fas fa-arrow-left me-2"}),"Back"]})]})}),Object.keys(l).length>0&&e.jsxs("div",{className:"alert h-alert-danger rounded-3 mb-4",children:[e.jsx("strong",{children:"Please fix the following errors:"}),e.jsx("ul",{className:"mb-0 mt-2",children:Object.entries(l).map(([s,d])=>e.jsx("li",{children:d},s))})]}),e.jsx("form",{onSubmit:f,children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-8",children:e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("label",{className:"text-uppercase h-section-label small fw-semibold mb-3 d-block",children:"Course Details"}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Course Title"}),e.jsx("input",{type:"text",className:`form-control rounded-3 ${l.title?"is-invalid":""}`,placeholder:"Enter course title",value:t.title,onChange:s=>r("title",s.target.value)}),l.title&&e.jsx("div",{className:"invalid-feedback",children:l.title})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Category"}),e.jsxs("select",{className:`form-select rounded-3 ${l.category_id?"is-invalid":""}`,value:t.category_id,onChange:s=>r("category_id",s.target.value),children:[e.jsx("option",{value:"",disabled:!0,children:"-- Select Category --"}),n.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),l.category_id&&e.jsx("div",{className:"invalid-feedback",children:l.category_id})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Level"}),e.jsxs("select",{className:`form-select rounded-3 ${l.level?"is-invalid":""}`,value:t.level,onChange:s=>r("level",s.target.value),children:[e.jsx("option",{value:"",disabled:!0,children:"-- Select Level --"}),e.jsx("option",{value:"Beginner",children:"Beginner"}),e.jsx("option",{value:"Intermediate",children:"Intermediate"}),e.jsx("option",{value:"Advanced",children:"Advanced"})]}),l.level&&e.jsx("div",{className:"invalid-feedback",children:l.level})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Description"}),e.jsx("textarea",{rows:5,className:`form-control rounded-3 ${l.description?"is-invalid":""}`,placeholder:"Write a short description...",value:t.description,onChange:s=>r("description",s.target.value)}),l.description&&e.jsx("div",{className:"invalid-feedback",children:l.description})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Intro Video URL"}),e.jsx("input",{type:"text",className:`form-control rounded-3 ${l.video?"is-invalid":""}`,placeholder:"https://...",value:t.video,onChange:s=>r("video",s.target.value)}),l.video&&e.jsx("div",{className:"invalid-feedback",children:l.video}),t.video&&e.jsx("div",{className:"mt-3",children:e.jsx("video",{width:"260",controls:!0,className:"rounded-3",children:e.jsx("source",{src:t.video,type:"video/mp4"})})})]})]})]})})}),e.jsxs("div",{className:"col-lg-4",children:[e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("label",{className:"text-uppercase h-section-label small fw-semibold mb-3 d-block",children:"Thumbnail"}),c?e.jsx("img",{src:c,alt:"Thumbnail preview",className:"w-100 rounded-3 h-thumb-preview mb-3",style:{height:150,objectFit:"cover"}}):e.jsx("div",{className:"w-100 rounded-3 mb-3 d-flex align-items-center justify-content-center",style:{height:150,background:"rgba(72,213,151,0.08)"},children:e.jsx("i",{className:"fas fa-image fs-2",style:{color:"#48d597",opacity:.5}})}),e.jsx("input",{type:"file",accept:"image/*",className:`form-control rounded-3 ${l.thumbnail?"is-invalid":""}`,onChange:p}),l.thumbnail&&e.jsx("div",{className:"invalid-feedback",children:l.thumbnail})]})}),e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("label",{className:"text-uppercase h-section-label small fw-semibold mb-3 d-block",children:"Pricing"}),e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-3",children:[e.jsx("span",{className:"fw-semibold small",children:"This course is free"}),e.jsx("div",{className:"form-check form-switch h-switch m-0",children:e.jsx("input",{className:"form-check-input",type:"checkbox",checked:t.is_free,onChange:s=>r("is_free",s.target.checked)})})]}),!t.is_free&&e.jsxs("div",{children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Price (USD)"}),e.jsx("input",{type:"number",step:"0.01",className:`form-control rounded-3 ${l.price?"is-invalid":""}`,placeholder:"0.00",value:t.price,onChange:s=>r("price",s.target.value)}),l.price&&e.jsx("div",{className:"invalid-feedback",children:l.price})]})]})}),e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("label",{className:"text-uppercase h-section-label small fw-semibold mb-3 d-block",children:"Status"}),e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(m,{label:"Draft",icon:"fa-file-pen",active:t.status==="draft",variant:"draft",onClick:()=>r("status","draft")}),e.jsx(m,{label:"Published",icon:"fa-circle-check",active:t.status==="published",variant:"published",onClick:()=>r("status","published")})]})]})}),e.jsx("button",{type:"submit",className:"btn h-btn-accent rounded-pill w-100 py-3 mt-4 fw-bold",disabled:h,children:h?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-save me-2"}),i?"Update Course":"Save Course"]})})]})]})})]})]})]})}function m({label:a,icon:n,active:i,variant:c,onClick:o}){return e.jsxs("div",{className:`h-status-pill rounded-3 px-3 py-2 d-flex align-items-center gap-2 ${i?`active-${c}`:""}`,style:{background:i?void 0:"rgba(6,15,17,0.03)"},onClick:o,children:[e.jsx("i",{className:`fas ${n}`,style:{color:c==="published"?"#2fb87c":"#f5b301"}}),e.jsx("span",{className:"fw-semibold small",children:a})]})}export{k as default};
