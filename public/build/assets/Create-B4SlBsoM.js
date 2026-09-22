import{u as v,r as j,j as e,H as N,L as l}from"./app-CJlpfYPO.js";import{A as y}from"./AppLayout-WTBEreOn.js";function C({course:s=null,categories:u=[],talents:c=[]}){var x;const d=!!s,{data:r,setData:t,post:m,put:h,processing:n,errors:a}=v({title:(s==null?void 0:s.title)??"",description:(s==null?void 0:s.description)??"",category_id:(s==null?void 0:s.category_id)??"",talent_id:(s==null?void 0:s.talent_id)??"",level:(s==null?void 0:s.level)??"Beginner",status:(s==null?void 0:s.status)??"draft",video:(s==null?void 0:s.video)??"",is_free:(s==null?void 0:s.is_free)??!1,price:(s==null?void 0:s.price)??0,thumbnail:null}),[p,b]=j.useState(s!=null&&s.thumbnail?`/images/thumbnails/${s.thumbnail}`:"/images/placeholder-course.png");function g(i){const o=i.target.files[0];o&&(t("thumbnail",o),b(URL.createObjectURL(o)))}function f(i){i.preventDefault(),d?h(route("admin.courses.update",s.id),{forceFormData:!0}):m(route("admin.courses.store"),{forceFormData:!0})}return e.jsxs(y,{children:[e.jsx(N,{title:d?"Edit Course":"Create Course"}),e.jsx("style",{children:`
                :root {
                    --course-primary: #2563eb;
                    --course-primary-dark: #1d4ed8;
                    --course-primary-light: #eff6ff;
                    --course-bg: #f6f8fc;
                    --course-card: #ffffff;
                    --course-border: #e5e7eb;
                    --course-text: #111827;
                    --course-muted: #6b7280;
                    --course-success: #16a34a;
                    --course-warning: #d97706;
                    --course-danger: #dc2626;
                    --course-radius: 18px;
                    --course-shadow: 0 8px 30px rgba(15, 23, 42, .06);
                }

                .course-editor {
                    min-height: 100vh;
                    background: var(--course-bg);
                    padding: 28px 0 50px;
                }

                .course-container {
                    max-width: 1450px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                /* Header */

                .course-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 28px;
                }

                .breadcrumb-area {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--course-muted);
                    font-size: 13px;
                    margin-bottom: 8px;
                }

                .breadcrumb-area a {
                    color: var(--course-muted);
                    text-decoration: none;
                }

                .breadcrumb-area a:hover {
                    color: var(--course-primary);
                }

                .course-header-title {
                    margin: 0;
                    font-size: 28px;
                    font-weight: 750;
                    letter-spacing: -.5px;
                    color: var(--course-text);
                }

                .course-header-subtitle {
                    margin: 7px 0 0;
                    color: var(--course-muted);
                    font-size: 14px;
                }

                .back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #fff;
                    color: #374151;
                    border: 1px solid var(--course-border);
                    border-radius: 11px;
                    padding: 10px 15px;
                    font-size: 13px;
                    font-weight: 650;
                    text-decoration: none;
                    transition: .2s ease;
                    white-space: nowrap;
                }

                .back-btn:hover {
                    color: var(--course-primary);
                    border-color: #bfdbfe;
                    background: var(--course-primary-light);
                }

                /* Layout */

                .editor-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 370px;
                    gap: 24px;
                    align-items: start;
                }

                .editor-main,
                .editor-sidebar {
                    min-width: 0;
                }

                /* Cards */

                .editor-card {
                    background: var(--course-card);
                    border: 1px solid var(--course-border);
                    border-radius: var(--course-radius);
                    box-shadow: var(--course-shadow);
                    margin-bottom: 20px;
                    overflow: hidden;
                }

                .card-header {
                    padding: 20px 24px;
                    border-bottom: 1px solid #edf0f4;
                    display: flex;
                    align-items: center;
                    gap: 13px;
                }

                .card-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 11px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--course-primary-light);
                    color: var(--course-primary);
                    font-size: 18px;
                    flex-shrink: 0;
                }

                .card-title {
                    margin: 0;
                    color: var(--course-text);
                    font-size: 15px;
                    font-weight: 700;
                }

                .card-description {
                    margin: 3px 0 0;
                    color: var(--course-muted);
                    font-size: 12px;
                }

                .card-body {
                    padding: 24px;
                }

                /* Form */

                .field {
                    margin-bottom: 21px;
                }

                .field:last-child {
                    margin-bottom: 0;
                }

                .field-label {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 8px;
                    color: #374151;
                    font-size: 13px;
                    font-weight: 650;
                }

                .required {
                    color: var(--course-danger);
                }

                .field-hint {
                    color: #9ca3af;
                    font-size: 11px;
                    font-weight: 400;
                }

                .course-input,
                .course-select,
                .course-textarea {
                    width: 100%;
                    border: 1px solid #dfe3e8;
                    background: #fff;
                    color: var(--course-text);
                    border-radius: 11px;
                    padding: 12px 14px;
                    font-size: 13px;
                    outline: none;
                    transition: .2s ease;
                }

                .course-input,
                .course-select {
                    height: 46px;
                }

                .course-textarea {
                    min-height: 145px;
                    resize: vertical;
                    line-height: 1.6;
                }

                .course-input::placeholder,
                .course-textarea::placeholder {
                    color: #a4aab4;
                }

                .course-input:focus,
                .course-select:focus,
                .course-textarea:focus {
                    border-color: #93c5fd;
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, .08);
                }

                .course-input.is-invalid,
                .course-select.is-invalid,
                .course-textarea.is-invalid {
                    border-color: #fca5a5;
                }

                .error-message {
                    margin-top: 6px;
                    color: var(--course-danger);
                    font-size: 11px;
                }

                .two-columns {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 18px;
                }

                /* Thumbnail */

                .thumbnail-preview {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    overflow: hidden;
                    border-radius: 14px;
                    background: #f1f5f9;
                    border: 1px solid var(--course-border);
                    margin-bottom: 15px;
                }

                .thumbnail-preview img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                }

                .thumbnail-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0,0,0,.35),
                        transparent 55%
                    );
                    pointer-events: none;
                }

                .thumbnail-label {
                    position: absolute;
                    left: 12px;
                    bottom: 12px;
                    padding: 5px 9px;
                    border-radius: 7px;
                    background: rgba(0,0,0,.55);
                    color: white;
                    font-size: 10px;
                    font-weight: 600;
                }

                .upload-zone {
                    position: relative;
                    border: 1.5px dashed #cbd5e1;
                    border-radius: 13px;
                    padding: 20px;
                    text-align: center;
                    background: #fafbfc;
                    cursor: pointer;
                    transition: .2s ease;
                }

                .upload-zone:hover {
                    border-color: #93c5fd;
                    background: var(--course-primary-light);
                }

                .upload-icon {
                    width: 44px;
                    height: 44px;
                    margin: 0 auto 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: #eaf2ff;
                    color: var(--course-primary);
                    font-size: 19px;
                }

                .upload-title {
                    margin: 0 0 4px;
                    color: #374151;
                    font-size: 12px;
                    font-weight: 650;
                }

                .upload-description {
                    margin: 0;
                    color: #9ca3af;
                    font-size: 10px;
                }

                /* Pricing */

                .free-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 14px;
                    border: 1px solid var(--course-border);
                    border-radius: 12px;
                    background: #fafbfc;
                    margin-bottom: 18px;
                }

                .toggle-text strong {
                    display: block;
                    color: #374151;
                    font-size: 12px;
                }

                .toggle-text span {
                    display: block;
                    margin-top: 3px;
                    color: #9ca3af;
                    font-size: 10px;
                }

                .custom-switch {
                    position: relative;
                    width: 42px;
                    height: 23px;
                    flex-shrink: 0;
                }

                .custom-switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .switch-slider {
                    position: absolute;
                    cursor: pointer;
                    inset: 0;
                    border-radius: 30px;
                    background: #d1d5db;
                    transition: .2s;
                }

                .switch-slider::before {
                    content: "";
                    position: absolute;
                    width: 17px;
                    height: 17px;
                    left: 3px;
                    top: 3px;
                    background: #fff;
                    border-radius: 50%;
                    transition: .2s;
                    box-shadow: 0 1px 3px rgba(0,0,0,.2);
                }

                .custom-switch input:checked + .switch-slider {
                    background: var(--course-primary);
                }

                .custom-switch input:checked + .switch-slider::before {
                    transform: translateX(19px);
                }

                .price-disabled {
                    opacity: .45;
                }

                /* Publish Status */

                .status-options {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .status-option {
                    position: relative;
                }

                .status-option input {
                    position: absolute;
                    opacity: 0;
                }

                .status-label {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    padding: 11px;
                    border: 1px solid var(--course-border);
                    border-radius: 10px;
                    cursor: pointer;
                    transition: .2s;
                    font-size: 11px;
                    font-weight: 650;
                    color: #4b5563;
                }

                .status-dot {
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background: #9ca3af;
                }

                .status-option input:checked + .status-label {
                    border-color: #93c5fd;
                    background: var(--course-primary-light);
                    color: var(--course-primary);
                }

                .status-option input:checked + .status-label .status-dot {
                    background: var(--course-primary);
                }

                .status-dot.published {
                    background: var(--course-success);
                }

                /* Sidebar */

                .sidebar-card {
                    position: sticky;
                    top: 20px;
                }

                .course-preview {
                    border: 1px solid var(--course-border);
                    border-radius: 14px;
                    overflow: hidden;
                    background: #fff;
                }

                .preview-image {
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    object-fit: cover;
                    display: block;
                }

                .preview-content {
                    padding: 15px;
                }

                .preview-badge {
                    display: inline-flex;
                    padding: 4px 8px;
                    border-radius: 6px;
                    background: #eff6ff;
                    color: var(--course-primary);
                    font-size: 9px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: .3px;
                }

                .preview-title {
                    margin: 10px 0 5px;
                    color: var(--course-text);
                    font-size: 15px;
                    font-weight: 700;
                    line-height: 1.35;
                }

                .preview-description {
                    margin: 0;
                    color: var(--course-muted);
                    font-size: 11px;
                    line-height: 1.55;
                }

                .preview-meta {
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;
                    margin-top: 15px;
                    padding-top: 12px;
                    border-top: 1px solid #edf0f4;
                    color: #6b7280;
                    font-size: 10px;
                }

                /* Buttons */

                .action-bar {
                    display: flex;
                    gap: 10px;
                    margin-top: 22px;
                }

                .btn-save {
                    flex: 1;
                    border: none;
                    border-radius: 11px;
                    background: var(--course-primary);
                    color: white;
                    padding: 13px 18px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: .2s;
                }

                .btn-save:hover:not(:disabled) {
                    background: var(--course-primary-dark);
                    transform: translateY(-1px);
                }

                .btn-save:disabled {
                    opacity: .65;
                    cursor: not-allowed;
                }

                .btn-cancel {
                    border: 1px solid var(--course-border);
                    border-radius: 11px;
                    background: #fff;
                    color: #4b5563;
                    padding: 13px 17px;
                    font-size: 13px;
                    font-weight: 650;
                    text-decoration: none;
                }

                .btn-cancel:hover {
                    background: #f9fafb;
                    color: #111827;
                }

                /* Progress */

                .completion-box {
                    padding: 16px;
                    border-radius: 13px;
                    background: linear-gradient(
                        135deg,
                        #eff6ff,
                        #f8fbff
                    );
                    border: 1px solid #dbeafe;
                }

                .completion-top {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 9px;
                }

                .completion-top span {
                    font-size: 11px;
                    color: #64748b;
                }

                .completion-top strong {
                    color: var(--course-primary);
                    font-size: 11px;
                }

                .progress-track {
                    height: 6px;
                    border-radius: 10px;
                    background: #dbeafe;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    width: 75%;
                    border-radius: inherit;
                    background: var(--course-primary);
                }

                /* Responsive */

                @media (max-width: 1100px) {
                    .editor-layout {
                        grid-template-columns: minmax(0, 1fr) 320px;
                    }
                }

                @media (max-width: 900px) {
                    .editor-layout {
                        grid-template-columns: 1fr;
                    }

                    .sidebar-card {
                        position: static;
                    }

                    .editor-sidebar {
                        order: -1;
                    }
                }

                @media (max-width: 650px) {
                    .course-container {
                        padding: 0 14px;
                    }

                    .course-editor {
                        padding-top: 20px;
                    }

                    .course-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .course-header-title {
                        font-size: 23px;
                    }

                    .two-columns {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }

                    .card-header,
                    .card-body {
                        padding: 18px;
                    }

                    .status-options {
                        grid-template-columns: 1fr;
                    }

                    .action-bar {
                        flex-direction: column;
                    }

                    .btn-cancel {
                        text-align: center;
                    }
                }
            `}),e.jsx("div",{className:"course-editor",children:e.jsxs("div",{className:"course-container",children:[e.jsxs("div",{className:"course-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"breadcrumb-area",children:[e.jsx(l,{href:route("admin.courses.index"),children:"Courses"}),e.jsx("i",{className:"bi bi-chevron-right"}),e.jsx("span",{children:d?"Edit Course":"Create Course"})]}),e.jsx("h1",{className:"course-header-title",children:d?"Edit Course":"Create New Course"}),e.jsx("p",{className:"course-header-subtitle",children:d?"Update your course information and publishing settings.":"Build a professional course for your learners."})]}),e.jsxs(l,{href:route("admin.courses.index"),className:"back-btn",children:[e.jsx("i",{className:"bi bi-arrow-left"}),"Back to Courses"]})]}),e.jsx("form",{onSubmit:f,encType:"multipart/form-data",children:e.jsxs("div",{className:"editor-layout",children:[e.jsxs("div",{className:"editor-main",children:[e.jsxs("div",{className:"editor-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"card-icon",children:e.jsx("i",{className:"bi bi-journal-text"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"card-title",children:"Basic Information"}),e.jsx("p",{className:"card-description",children:"Give your course a clear identity."})]})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"field-label",children:[e.jsxs("span",{children:["Course Title"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("span",{className:"field-hint",children:"Keep it clear and concise"})]}),e.jsx("input",{type:"text",value:r.title,onChange:i=>t("title",i.target.value),className:`course-input ${a.title?"is-invalid":""}`,placeholder:"e.g. Introduction to Web Development"}),a.title&&e.jsx("div",{className:"error-message",children:a.title})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{className:"field-label",children:"Description"}),e.jsx("textarea",{value:r.description,onChange:i=>t("description",i.target.value),className:`course-textarea ${a.description?"is-invalid":""}`,placeholder:"Describe what students will learn from this course..."}),a.description&&e.jsx("div",{className:"error-message",children:a.description})]}),e.jsxs("div",{className:"two-columns",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"field-label",children:["Category"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("select",{value:r.category_id,onChange:i=>t("category_id",i.target.value),className:`course-select ${a.category_id?"is-invalid":""}`,children:[e.jsx("option",{value:"",children:"Select category"}),u.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]}),a.category_id&&e.jsx("div",{className:"error-message",children:a.category_id})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"field-label",children:["Instructor / Talent"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("select",{value:r.talent_id,onChange:i=>t("talent_id",i.target.value),className:`course-select ${a.talent_id?"is-invalid":""}`,children:[e.jsx("option",{value:"",children:"Select instructor"}),c.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]}),a.talent_id&&e.jsx("div",{className:"error-message",children:a.talent_id})]})]})]})]}),e.jsxs("div",{className:"editor-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"card-icon",children:e.jsx("i",{className:"bi bi-sliders"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"card-title",children:"Course Configuration"}),e.jsx("p",{className:"card-description",children:"Define the learning level and course content."})]})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"two-columns",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{className:"field-label",children:"Difficulty Level"}),e.jsxs("select",{value:r.level,onChange:i=>t("level",i.target.value),className:`course-select ${a.level?"is-invalid":""}`,children:[e.jsx("option",{value:"Beginner",children:"Beginner"}),e.jsx("option",{value:"Intermediate",children:"Intermediate"}),e.jsx("option",{value:"Advanced",children:"Advanced"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{className:"field-label",children:"Publishing Status"}),e.jsxs("div",{className:"status-options",children:[e.jsxs("div",{className:"status-option",children:[e.jsx("input",{type:"radio",id:"draftStatus",name:"courseStatus",checked:r.status==="draft",onChange:()=>t("status","draft")}),e.jsxs("label",{htmlFor:"draftStatus",className:"status-label",children:[e.jsx("span",{className:"status-dot"}),"Draft"]})]}),e.jsxs("div",{className:"status-option",children:[e.jsx("input",{type:"radio",id:"publishedStatus",name:"courseStatus",checked:r.status==="published",onChange:()=>t("status","published")}),e.jsxs("label",{htmlFor:"publishedStatus",className:"status-label",children:[e.jsx("span",{className:"status-dot published"}),"Published"]})]})]})]})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"field-label",children:["Video URL",e.jsx("span",{className:"field-hint",children:"YouTube, Vimeo, or hosted video"})]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("i",{className:"bi bi-play-circle",style:{position:"absolute",left:14,top:14,color:"#94a3b8"}}),e.jsx("input",{type:"url",value:r.video,onChange:i=>t("video",i.target.value),className:`course-input ${a.video?"is-invalid":""}`,style:{paddingLeft:40},placeholder:"https://..."})]}),a.video&&e.jsx("div",{className:"error-message",children:a.video})]})]})]}),e.jsxs("div",{className:"editor-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"card-icon",children:e.jsx("i",{className:"bi bi-wallet2"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"card-title",children:"Pricing"}),e.jsx("p",{className:"card-description",children:"Choose how learners will access this course."})]})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"free-toggle",children:[e.jsxs("div",{className:"toggle-text",children:[e.jsx("strong",{children:"Free Course"}),e.jsx("span",{children:"Allow learners to access this course without payment."})]}),e.jsxs("label",{className:"custom-switch",children:[e.jsx("input",{type:"checkbox",checked:r.is_free,onChange:i=>t("is_free",i.target.checked)}),e.jsx("span",{className:"switch-slider"})]})]}),e.jsxs("div",{className:r.is_free?"price-disabled":"",children:[e.jsxs("label",{className:"field-label",children:["Course Price",e.jsx("span",{className:"field-hint",children:"RWF"})]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("span",{style:{position:"absolute",left:14,top:13,fontSize:12,fontWeight:700,color:"#64748b"},children:"RWF"}),e.jsx("input",{type:"number",step:"0.01",min:"0",value:r.price,onChange:i=>t("price",i.target.value),className:`course-input ${a.price?"is-invalid":""}`,style:{paddingLeft:58},placeholder:"0.00",disabled:r.is_free})]}),a.price&&e.jsx("div",{className:"error-message",children:a.price})]})]})]})]}),e.jsx("div",{className:"editor-sidebar",children:e.jsxs("div",{className:"sidebar-card",children:[e.jsxs("div",{className:"editor-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"card-icon",children:e.jsx("i",{className:"bi bi-image"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"card-title",children:"Course Thumbnail"}),e.jsx("p",{className:"card-description",children:"Main course image."})]})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"thumbnail-preview",children:[e.jsx("img",{src:p,alt:"Course thumbnail preview"}),e.jsx("div",{className:"thumbnail-overlay"}),e.jsx("span",{className:"thumbnail-label",children:"Preview"})]}),e.jsxs("label",{className:"upload-zone",children:[e.jsx("div",{className:"upload-icon",children:e.jsx("i",{className:"bi bi-cloud-arrow-up"})}),e.jsx("p",{className:"upload-title",children:"Upload new thumbnail"}),e.jsx("p",{className:"upload-description",children:"PNG, JPG or WEBP · Max 2MB"}),e.jsx("input",{type:"file",accept:"image/*",className:"d-none",onChange:g})]}),a.thumbnail&&e.jsx("div",{className:"error-message",children:a.thumbnail})]})]}),e.jsxs("div",{className:"editor-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"card-icon",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"card-title",children:"Course Preview"}),e.jsx("p",{className:"card-description",children:"How learners will see it."})]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"course-preview",children:[e.jsx("img",{src:p,alt:"",className:"preview-image"}),e.jsxs("div",{className:"preview-content",children:[e.jsx("span",{className:"preview-badge",children:r.level}),e.jsx("h3",{className:"preview-title",children:r.title||"Your course title"}),e.jsx("p",{className:"preview-description",children:r.description||"Your course description will appear here."}),e.jsxs("div",{className:"preview-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"bi bi-person me-1"}),((x=c.find(i=>String(i.id)===String(r.talent_id)))==null?void 0:x.name)||"Instructor"]}),e.jsx("span",{children:r.is_free?"Free":`${Number(r.price||0).toLocaleString()} RWF`})]})]})]})})]}),e.jsx("div",{className:"editor-card",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"completion-box",children:[e.jsxs("div",{className:"completion-top",children:[e.jsx("span",{children:"Course setup"}),e.jsx("strong",{children:"Ready"})]}),e.jsx("div",{className:"progress-track",children:e.jsx("div",{className:"progress-fill"})})]})})}),e.jsxs("div",{className:"action-bar",children:[e.jsx("button",{type:"submit",className:"btn-save",disabled:n,children:n?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"bi bi-check2-circle me-2"}),d?"Update Course":"Create Course"]})}),e.jsx(l,{href:route("admin.courses.index"),className:"btn-cancel",children:"Cancel"})]})]})})]})})]})})]})}export{C as default};
