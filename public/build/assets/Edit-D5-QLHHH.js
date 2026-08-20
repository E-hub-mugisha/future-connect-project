import{u as g,r as p,j as e,H as x,L as c}from"./app-CgjB0zLb.js";import{A as v}from"./AppLayout-BhRRfzUA.js";function y({story:l,categories:m}){const{data:i,setData:t,post:h,processing:n,errors:s,progress:d}=g({_method:"put",title:l.title??"",content:l.content??"",category_id:l.category_id??"",tags:l.tags??"",status:l.status??"published",thumbnail:null,media:null}),[o,u]=p.useState(l.thumbnail?`/storage/${l.thumbnail}`:null);function b(a){const r=a.target.files[0];t("thumbnail",r),r&&u(URL.createObjectURL(r))}function f(a){a.preventDefault(),h(route("talent.page.stories.update",l.id),{forceFormData:!0})}return e.jsxs(v,{children:[e.jsx(x,{title:`Edit — ${l.title}`}),e.jsxs("div",{"data-h-scope":"talent-story-form",children:[e.jsx("style",{children:`
                    [data-h-scope="talent-story-form"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-story-form"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                    }
                    [data-h-scope="talent-story-form"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background 0.15s ease;
                    }
                    [data-h-scope="talent-story-form"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-story-form"] .h-btn-accent:disabled {
                        opacity: 0.6;
                    }
                    [data-h-scope="talent-story-form"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid rgba(6,15,17,0.15);
                    }
                    [data-h-scope="talent-story-form"] .h-btn-ghost:hover {
                        background: rgba(6,15,17,0.04);
                    }
                    [data-h-scope="talent-story-form"] .form-control:focus,
                    [data-h-scope="talent-story-form"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72, 213, 151, 0.25);
                    }
                `}),e.jsxs("div",{className:"container-fluid px-4 py-4",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-4",children:[e.jsx("h5",{className:"fw-bold mb-0",children:"Edit Your Story"}),e.jsxs(c,{href:route("talent.page.stories.show",l.id),className:"btn h-btn-ghost rounded-pill px-3 py-2",children:[e.jsx("i",{className:"fas fa-arrow-left me-2"}),"Back to Story"]})]}),e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsx("div",{className:"card-body p-4",children:e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-8",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Title"}),e.jsx("input",{type:"text",className:`form-control rounded-3 ${s.title?"is-invalid":""}`,value:i.title,onChange:a=>t("title",a.target.value)}),s.title&&e.jsx("div",{className:"invalid-feedback",children:s.title})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Category"}),e.jsxs("select",{className:`form-select rounded-3 ${s.category_id?"is-invalid":""}`,value:i.category_id,onChange:a=>t("category_id",a.target.value),children:[e.jsx("option",{value:"",children:"Select a category"}),m.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),s.category_id&&e.jsx("div",{className:"invalid-feedback",children:s.category_id})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Your Story"}),e.jsx("textarea",{className:`form-control rounded-3 ${s.content?"is-invalid":""}`,rows:8,value:i.content,onChange:a=>t("content",a.target.value)}),s.content&&e.jsx("div",{className:"invalid-feedback",children:s.content})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Tags"}),e.jsx("input",{type:"text",className:`form-control rounded-3 ${s.tags?"is-invalid":""}`,value:i.tags,onChange:a=>t("tags",a.target.value),placeholder:"e.g. music, design, mentorship"}),s.tags&&e.jsx("div",{className:"invalid-feedback",children:s.tags})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Status"}),e.jsxs("select",{className:"form-select rounded-3",value:i.status,onChange:a=>t("status",a.target.value),children:[e.jsx("option",{value:"published",children:"Published"}),e.jsx("option",{value:"draft",children:"Draft"})]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Thumbnail Image"}),e.jsx("input",{type:"file",accept:"image/*",className:`form-control rounded-3 ${s.thumbnail?"is-invalid":""}`,onChange:b}),s.thumbnail&&e.jsx("div",{className:"invalid-feedback",children:s.thumbnail}),o&&e.jsx("img",{src:o,alt:"Thumbnail preview",className:"rounded-3 mt-2",style:{width:100,height:100,objectFit:"cover"}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Replace Media (video/audio/document)"}),e.jsx("input",{type:"file",className:`form-control rounded-3 ${s.media?"is-invalid":""}`,onChange:a=>t("media",a.target.files[0])}),s.media&&e.jsx("div",{className:"invalid-feedback",children:s.media}),l.media&&e.jsxs("div",{className:"small text-secondary mt-1",children:["Current file: ",l.media.split("/").pop()]})]}),d&&e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"progress",style:{height:6},children:e.jsx("div",{className:"progress-bar",style:{width:`${d.percentage}%`,backgroundColor:"#48d597"}})})})]}),e.jsxs("div",{className:"d-flex justify-content-end gap-2 mt-4",children:[e.jsx(c,{href:route("talent.page.stories.show",l.id),className:"btn h-btn-ghost rounded-pill px-4",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn h-btn-accent rounded-pill px-4",disabled:n,children:n?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Saving..."]}):"Save Changes"})]})]})})})]})]})]})}export{y as default};
