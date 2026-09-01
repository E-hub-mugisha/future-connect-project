import{r as x,u as v,j as e,H as g,L as j}from"./app-DQcVR1sC.js";import{A as y}from"./AppLayout-D93w9Ma6.js";function k({className:r="w-4 h-4"}){return e.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}function N({className:r="w-6 h-6"}){return e.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:1.5,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})})}function w({className:r="w-5 h-5"}){return e.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:1.5,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})})}function p({className:r="w-5 h-5"}){return e.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:1.5,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}function C({className:r="w-5 h-5"}){return e.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:1.5,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 019.186 0z"})})}function L({className:r="w-4 h-4 animate-spin"}){return e.jsxs("svg",{className:r,fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}function z({className:r="w-5 h-5"}){return e.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:1.5,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})})}function S({className:r="w-5 h-5"}){return e.jsx("svg",{className:r,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:1.5,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"})})}function P({course:r,categories:n}){const t=!!(r!=null&&r.id),[l,d]=x.useState(r!=null&&r.thumbnail?`/${r.thumbnail}`:null),{data:o,setData:c,post:h,processing:f,errors:a}=v({_method:t?"put":"post",title:(r==null?void 0:r.title)??"",category_id:(r==null?void 0:r.category_id)??"",level:(r==null?void 0:r.level)??"",description:(r==null?void 0:r.description)??"",thumbnail:null,video:(r==null?void 0:r.video)??"",price:(r==null?void 0:r.price)??"",is_free:(r==null?void 0:r.is_free)??!1,status:(r==null?void 0:r.status)??"draft"});function u(s){const i=s.target.files[0];c("thumbnail",i),i&&d(URL.createObjectURL(i))}function b(s){s.preventDefault();const i=t?route("talent.courses.update",r.id):route("talent.courses.store");h(i,{forceFormData:!0,preserveScroll:!0})}return e.jsxs(y,{children:[e.jsx(g,{title:t?"Edit Course":"Add New Course"}),e.jsxs("div",{"data-scope":"course-form",className:"min-vh-100",children:[e.jsx("style",{children:`
                    [data-scope="course-form"] {
                        --cf-primary: #0f766e;
                        --cf-primary-light: #14b8a6;
                        --cf-primary-soft: rgba(20, 184, 166, 0.08);
                        --cf-surface: #f8fafc;
                        --cf-card: #F5f5f7;
                        --cf-text: #0f172a;
                        --cf-text-secondary: #64748b;
                        --cf-border: #e2e8f0;
                        --cf-border-focus: #14b8a6;
                        --cf-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
                        --cf-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                        --cf-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                        --cf-radius: 1rem;
                        --cf-radius-sm: 0.75rem;
                        background-color: var(--cf-surface);
                    }

                    [data-scope="course-form"] .cf-card {
                        background: var(--cf-card);
                        border: 1px solid var(--cf-border);
                        border-radius: var(--cf-radius);
                        box-shadow: var(--cf-shadow);
                        transition: box-shadow 0.2s ease;
                    }
                    [data-scope="course-form"] .cf-card:hover {
                        box-shadow: var(--cf-shadow-md);
                    }

                    [data-scope="course-form"] .cf-header {
                        background: linear-gradient(135deg, #f0fdfa 0%, #f8fafc 100%);
                        border: 1px solid var(--cf-border);
                        border-radius: var(--cf-radius);
                        position: relative;
                        overflow: hidden;
                    }
                    [data-scope="course-form"] .cf-header::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: linear-gradient(90deg, var(--cf-primary-light), var(--cf-primary));
                    }

                    [data-scope="course-form"] .cf-btn-primary {
                        background: linear-gradient(135deg, var(--cf-primary) 0%, var(--cf-primary-light) 100%);
                        color: white;
                        border: none;
                        font-weight: 600;
                        border-radius: 9999px;
                        transition: all 0.2s ease;
                        box-shadow: 0 4px 6px -1px rgba(15, 118, 110, 0.2);
                    }
                    [data-scope="course-form"] .cf-btn-primary:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 8px 12px -2px rgba(15, 118, 110, 0.25);
                        filter: brightness(1.05);
                    }
                    [data-scope="course-form"] .cf-btn-primary:active {
                        transform: translateY(0);
                    }
                    [data-scope="course-form"] .cf-btn-primary:disabled {
                        opacity: 0.7;
                        cursor: not-allowed;
                        transform: none;
                    }

                    [data-scope="course-form"] .cf-btn-ghost {
                        background: transparent;
                        color: var(--cf-text-secondary);
                        border: 1px solid var(--cf-border);
                        border-radius: 9999px;
                        font-weight: 500;
                        transition: all 0.2s ease;
                    }
                    [data-scope="course-form"] .cf-btn-ghost:hover {
                        background: var(--cf-surface);
                        color: var(--cf-text);
                        border-color: var(--cf-text-secondary);
                    }

                    [data-scope="course-form"] .form-control,
                    [data-scope="course-form"] .form-select {
                        border: 1.5px solid var(--cf-border);
                        border-radius: var(--cf-radius-sm);
                        padding: 0.625rem 0.875rem;
                        font-size: 0.9375rem;
                        background-color: var(--cf-card);
                        transition: all 0.2s ease;
                    }
                    [data-scope="course-form"] .form-control::placeholder,
                    [data-scope="course-form"] .form-select::placeholder {
                        color: #94a3b8;
                    }
                    [data-scope="course-form"] .form-control:focus,
                    [data-scope="course-form"] .form-select:focus {
                        border-color: var(--cf-border-focus);
                        box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
                        background-color: var(--cf-card);
                    }
                    [data-scope="course-form"] .form-control.is-invalid,
                    [data-scope="course-form"] .form-select.is-invalid {
                        border-color: #ef4444;
                    }
                    [data-scope="course-form"] .form-control.is-invalid:focus,
                    [data-scope="course-form"] .form-select.is-invalid:focus {
                        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
                    }

                    [data-scope="course-form"] .cf-section-label {
                        color: var(--cf-primary);
                        font-size: 0.75rem;
                        font-weight: 700;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                    }

                    [data-scope="course-form"] .cf-form-label {
                        color: var(--cf-text);
                        font-size: 0.875rem;
                        font-weight: 600;
                        margin-bottom: 0.5rem;
                    }

                    [data-scope="course-form"] .form-check-input:checked {
                        background-color: var(--cf-primary-light);
                        border-color: var(--cf-primary-light);
                    }
                    [data-scope="course-form"] .form-check-input:focus {
                        box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
                    }

                    [data-scope="course-form"] .cf-thumb-preview {
                        border: 2px solid var(--cf-primary-light);
                        border-radius: var(--cf-radius-sm);
                    }

                    [data-scope="course-form"] .cf-alert {
                        background: #fef2f2;
                        border: 1px solid #fecaca;
                        color: #991b1b;
                        border-radius: var(--cf-radius-sm);
                    }

                    [data-scope="course-form"] .cf-status-card {
                        border: 2px solid transparent;
                        border-radius: var(--cf-radius-sm);
                        cursor: pointer;
                        transition: all 0.2s ease;
                        background: var(--cf-surface);
                    }
                    [data-scope="course-form"] .cf-status-card:hover {
                        background: #f1f5f9;
                    }
                    [data-scope="course-form"] .cf-status-card.active {
                        background: var(--cf-primary-soft);
                        border-color: var(--cf-primary-light);
                    }
                    [data-scope="course-form"] .cf-status-card.active-draft {
                        background: #fffbeb;
                        border-color: #f59e0b;
                    }
                    [data-scope="course-form"] .cf-status-card.active-published {
                        background: #f0fdfa;
                        border-color: var(--cf-primary-light);
                    }

                    [data-scope="course-form"] .cf-upload-zone {
                        border: 2px dashed #cbd5e1;
                        border-radius: var(--cf-radius-sm);
                        transition: all 0.2s ease;
                    }
                    [data-scope="course-form"] .cf-upload-zone:hover {
                        border-color: var(--cf-primary-light);
                        background: var(--cf-primary-soft);
                    }

                    [data-scope="course-form"] .cf-video-preview {
                        border-radius: var(--cf-radius-sm);
                        box-shadow: var(--cf-shadow);
                    }

                    [data-scope="course-form"] .cf-badge {
                        display: inline-flex;
                        align-items: center;
                        padding: 0.25rem 0.75rem;
                        border-radius: 9999px;
                        font-size: 0.75rem;
                        font-weight: 600;
                    }
                    [data-scope="course-form"] .cf-badge-free {
                        background: #dcfce7;
                        color: #166534;
                    }
                    [data-scope="course-form"] .cf-badge-paid {
                        background: #dbeafe;
                        color: #1e40af;
                    }
                `}),e.jsxs("div",{className:"container-fluid px-4 py-4",style:{maxWidth:1400},children:[e.jsxs("div",{className:"cf-header p-4 mb-4 d-flex flex-wrap justify-content-between align-items-center gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-1",children:[e.jsx("span",{className:`cf-badge ${o.is_free?"cf-badge-free":"cf-badge-paid"}`,children:o.is_free?"Free Course":"Paid Course"}),t&&e.jsx("span",{className:"cf-badge",style:{background:"#f1f5f9",color:"#475569"},children:"Editing"})]}),e.jsx("h3",{className:"fw-bold mb-1",style:{color:"var(--cf-text)"},children:t?"Edit Course":"Create New Course"}),e.jsx("p",{className:"mb-0",style:{color:"var(--cf-text-secondary)",fontSize:"0.9375rem"},children:t?"Update your course details and content":"Design and publish your next learning experience"})]}),e.jsxs(j,{href:route("talent.courses.index"),className:"btn cf-btn-ghost px-4 py-2 d-inline-flex align-items-center gap-2",children:[e.jsx(k,{}),"Back to Courses"]})]}),Object.keys(a).length>0&&e.jsxs("div",{className:"cf-alert p-3 mb-4 d-flex align-items-start gap-3",children:[e.jsx(z,{className:"w-5 h-5 flex-shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block mb-1",children:"Please fix the following errors:"}),e.jsx("ul",{className:"mb-0 ps-3",children:Object.entries(a).map(([s,i])=>e.jsx("li",{children:i},s))})]})]}),e.jsx("form",{onSubmit:b,children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-xl-8 col-lg-7",children:e.jsxs("div",{className:"cf-card p-4 mb-4",children:[e.jsx("label",{className:"cf-section-label mb-4 d-block",children:"Course Details"}),e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"cf-form-label",children:"Course Title"}),e.jsx("input",{type:"text",className:`form-control ${a.title?"is-invalid":""}`,placeholder:"e.g., Advanced React Patterns and Performance",value:o.title,onChange:s=>c("title",s.target.value)}),a.title&&e.jsx("div",{className:"invalid-feedback",children:a.title})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"cf-form-label",children:"Category"}),e.jsxs("select",{className:`form-select ${a.category_id?"is-invalid":""}`,value:o.category_id,onChange:s=>c("category_id",s.target.value),children:[e.jsx("option",{value:"",disabled:!0,children:"Select a category"}),n.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),a.category_id&&e.jsx("div",{className:"invalid-feedback",children:a.category_id})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"cf-form-label",children:"Difficulty Level"}),e.jsxs("select",{className:`form-select ${a.level?"is-invalid":""}`,value:o.level,onChange:s=>c("level",s.target.value),children:[e.jsx("option",{value:"",disabled:!0,children:"Select level"}),e.jsx("option",{value:"Beginner",children:"Beginner"}),e.jsx("option",{value:"Intermediate",children:"Intermediate"}),e.jsx("option",{value:"Advanced",children:"Advanced"})]}),a.level&&e.jsx("div",{className:"invalid-feedback",children:a.level})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"cf-form-label",children:"Description"}),e.jsx("textarea",{rows:5,className:`form-control ${a.description?"is-invalid":""}`,placeholder:"Describe what students will learn, prerequisites, and course outcomes...",value:o.description,onChange:s=>c("description",s.target.value),style:{resize:"vertical"}}),a.description&&e.jsx("div",{className:"invalid-feedback",children:a.description}),e.jsx("div",{className:"form-text mt-1",style:{color:"var(--cf-text-secondary)",fontSize:"0.8125rem"},children:"Minimum 50 characters recommended for better discoverability."})]}),e.jsxs("div",{className:"col-12",children:[e.jsxs("label",{className:"cf-form-label d-flex align-items-center gap-2",children:[e.jsx(S,{className:"w-4 h-4",style:{color:"var(--cf-primary-light)"}}),"Intro Video URL"]}),e.jsx("input",{type:"url",className:`form-control ${a.video?"is-invalid":""}`,placeholder:"https://youtube.com/watch?v=... or direct MP4 link",value:o.video,onChange:s=>c("video",s.target.value)}),a.video&&e.jsx("div",{className:"invalid-feedback",children:a.video}),o.video&&e.jsx("div",{className:"mt-3",children:e.jsxs("video",{width:"320",controls:!0,className:"cf-video-preview",style:{maxWidth:"100%"},children:[e.jsx("source",{src:o.video,type:"video/mp4"}),"Your browser does not support the video tag."]})})]})]})]})}),e.jsxs("div",{className:"col-xl-4 col-lg-5",children:[e.jsxs("div",{className:"cf-card p-4 mb-4",children:[e.jsx("label",{className:"cf-section-label mb-4 d-block",children:"Course Thumbnail"}),l?e.jsxs("div",{className:"position-relative mb-3",children:[e.jsx("img",{src:l,alt:"Thumbnail preview",className:"w-100 cf-thumb-preview",style:{height:180,objectFit:"cover"}}),e.jsx("button",{type:"button",className:"btn btn-sm position-absolute top-0 end-0 m-2",style:{background:"rgba(0,0,0,0.5)",color:"white",borderRadius:"50%",width:32,height:32,padding:0},onClick:()=>{d(null),c("thumbnail",null)},title:"Remove image",children:"×"})]}):e.jsxs("div",{className:"cf-upload-zone w-100 mb-3 d-flex flex-column align-items-center justify-content-center",style:{height:180},children:[e.jsx(N,{className:"w-10 h-10 mb-2",style:{color:"var(--cf-primary-light)",opacity:.6}}),e.jsx("span",{className:"small fw-medium",style:{color:"var(--cf-text-secondary)"},children:"No image selected"})]}),e.jsx("input",{type:"file",accept:"image/*",className:`form-control ${a.thumbnail?"is-invalid":""}`,onChange:u,style:{fontSize:"0.875rem"}}),a.thumbnail&&e.jsx("div",{className:"invalid-feedback",children:a.thumbnail}),e.jsx("div",{className:"form-text mt-1",style:{color:"var(--cf-text-secondary)",fontSize:"0.8125rem"},children:"Recommended: 1280×720px, JPG or PNG"})]}),e.jsxs("div",{className:"cf-card p-4 mb-4",children:[e.jsx("label",{className:"cf-section-label mb-4 d-block",children:"Pricing"}),e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-4 p-3 rounded-3",style:{background:"var(--cf-surface)"},children:[e.jsx("div",{className:"d-flex align-items-center gap-2",children:e.jsx("span",{className:"fw-semibold",style:{fontSize:"0.9375rem"},children:"Free Course"})}),e.jsx("div",{className:"form-check form-switch m-0",children:e.jsx("input",{className:"form-check-input",type:"checkbox",style:{width:"2.5rem",height:"1.25rem"},checked:o.is_free,onChange:s=>c("is_free",s.target.checked)})})]}),!o.is_free&&e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("label",{className:"cf-form-label",children:"Price (USD)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text bg-white border-end-0",style:{borderColor:"var(--cf-border)",color:"var(--cf-text-secondary)"},children:"$"}),e.jsx("input",{type:"number",step:"0.01",min:"0",className:`form-control border-start-0 ${a.price?"is-invalid":""}`,placeholder:"29.99",value:o.price,onChange:s=>c("price",s.target.value)})]}),a.price&&e.jsx("div",{className:"invalid-feedback d-block",children:a.price})]})]}),e.jsxs("div",{className:"cf-card p-4 mb-4",children:[e.jsx("label",{className:"cf-section-label mb-4 d-block",children:"Publish Status"}),e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(m,{label:"Draft",description:"Save and continue editing later",icon:e.jsx(w,{className:"w-5 h-5"}),active:o.status==="draft",variant:"draft",onClick:()=>c("status","draft")}),e.jsx(m,{label:"Published",description:"Make visible to all students",icon:e.jsx(p,{className:"w-5 h-5"}),active:o.status==="published",variant:"published",onClick:()=>c("status","published")})]})]}),e.jsx("button",{type:"submit",className:"btn cf-btn-primary w-100 py-3 d-inline-flex align-items-center justify-content-center gap-2 fw-bold",disabled:f,style:{fontSize:"1rem"},children:f?e.jsxs(e.Fragment,{children:[e.jsx(L,{}),"Saving Changes..."]}):e.jsxs(e.Fragment,{children:[e.jsx(C,{}),t?"Update Course":"Publish Course"]})})]})]})})]})]})]})}function m({label:r,description:n,icon:t,active:l,variant:d,onClick:o}){return e.jsxs("div",{className:`cf-status-card p-3 d-flex align-items-center gap-3 ${l?`active active-${d}`:""}`,onClick:o,role:"button",tabIndex:0,onKeyDown:c=>c.key==="Enter"&&o(),children:[e.jsx("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0",style:{width:40,height:40,borderRadius:10,background:l?d==="published"?"rgba(20, 184, 166, 0.15)":"rgba(245, 158, 11, 0.15)":"#f1f5f9",color:d==="published"?"var(--cf-primary)":"#d97706",transition:"all 0.2s ease"},children:t}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("div",{className:"fw-semibold",style:{fontSize:"0.9375rem",color:"var(--cf-text)"},children:r}),e.jsx("div",{className:"small",style:{color:"var(--cf-text-secondary)",fontSize:"0.8125rem"},children:n})]}),l&&e.jsx(p,{className:"w-5 h-5 flex-shrink-0",style:{color:"var(--cf-primary-light)"}})]})}export{P as default};
