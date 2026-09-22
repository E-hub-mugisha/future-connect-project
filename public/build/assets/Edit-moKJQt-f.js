import{r as v,u as _,j as e,H as F,L as m}from"./app-CJlpfYPO.js";import{A as M}from"./AppLayout-WTBEreOn.js";const L=`
    :root {
        --edit-bg: #f6f8fb;
        --edit-card: #ffffff;
        --edit-border: #e5eaf0;
        --edit-text: #17202a;
        --edit-muted: #718096;
        --edit-primary: #059669;
        --edit-primary-dark: #047857;
        --edit-primary-soft: #ecfdf5;
        --edit-warning: #d97706;
        --edit-warning-soft: #fffbeb;
        --edit-danger: #dc2626;
        --edit-input: #ffffff;
        --edit-radius: 18px;
        --edit-shadow: 0 8px 30px rgba(15, 23, 42, .06);
    }

    .story-edit-page {
        min-height: 100vh;
        background: var(--edit-bg);
        padding: 30px;
        color: var(--edit-text);
    }

    .story-edit-container {
        max-width: 1250px;
        margin: 0 auto;
    }

    .edit-page-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 26px;
    }

    .edit-breadcrumb {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #94a3b8;
        font-size: 12px;
        margin-bottom: 10px;
    }

    .edit-breadcrumb a {
        color: #64748b;
        text-decoration: none;
    }

    .edit-breadcrumb a:hover {
        color: var(--edit-primary);
    }

    .edit-mode-badge {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 6px 10px;
        background: var(--edit-warning-soft);
        border: 1px solid #fde68a;
        color: var(--edit-warning);
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .05em;
        margin-bottom: 10px;
    }

    .edit-page-title {
        margin: 0;
        color: var(--edit-text);
        font-size: 28px;
        line-height: 1.2;
        font-weight: 800;
        letter-spacing: -.03em;
    }

    .edit-page-subtitle {
        margin: 7px 0 0;
        color: var(--edit-muted);
        font-size: 14px;
    }

    .edit-back-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 42px;
        padding: 0 15px;
        border: 1px solid var(--edit-border);
        border-radius: 10px;
        background: #fff;
        color: #475569;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
        transition: all .18s ease;
    }

    .edit-back-btn:hover {
        color: var(--edit-text);
        border-color: #cbd5e1;
        transform: translateY(-1px);
        box-shadow: 0 5px 14px rgba(15,23,42,.05);
    }

    .edit-card {
        background: var(--edit-card);
        border: 1px solid var(--edit-border);
        border-radius: 20px;
        box-shadow: var(--edit-shadow);
        overflow: hidden;
    }

    .edit-card-header {
        display: flex;
        align-items: center;
        gap: 13px;
        padding: 20px 24px;
        border-bottom: 1px solid var(--edit-border);
        background: linear-gradient(135deg, #fffbeb 0%, #ffffff 70%);
    }

    .edit-card-icon {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: var(--edit-warning-soft);
        color: var(--edit-warning);
        border: 1px solid #fde68a;
        flex-shrink: 0;
    }

    .edit-card-title {
        margin: 0;
        color: var(--edit-text);
        font-size: 15px;
        font-weight: 800;
    }

    .edit-card-subtitle {
        margin: 4px 0 0;
        color: #94a3b8;
        font-size: 12px;
    }

    .edit-card-body {
        padding: 28px;
    }

    .edit-section {
        margin-bottom: 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid #edf1f5;
    }

    .edit-section:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }

    .section-heading {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
    }

    .section-number {
        width: 29px;
        height: 29px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9px;
        background: var(--edit-primary-soft);
        color: var(--edit-primary-dark);
        font-size: 11px;
        font-weight: 900;
        flex-shrink: 0;
    }

    .section-heading-text h3 {
        margin: 0;
        color: var(--edit-text);
        font-size: 14px;
        font-weight: 800;
    }

    .section-heading-text p {
        margin: 3px 0 0;
        color: #94a3b8;
        font-size: 11px;
    }

    .edit-field {
        margin-bottom: 18px;
    }

    .edit-field:last-child {
        margin-bottom: 0;
    }

    .edit-field-row {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
    }

    .edit-label {
        display: block;
        margin-bottom: 7px;
        color: #475569;
        font-size: 12px;
        font-weight: 800;
    }

    .required {
        color: var(--edit-danger);
    }

    .edit-input,
    .edit-select,
    .edit-textarea {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #dce2e8;
        background: var(--edit-input);
        border-radius: 11px;
        padding: 11px 13px;
        color: #1e293b;
        font-family: inherit;
        font-size: 13px;
        outline: none;
        transition: all .18s ease;
    }

    .edit-input::placeholder,
    .edit-textarea::placeholder {
        color: #a0aec0;
    }

    .edit-input:focus,
    .edit-select:focus,
    .edit-textarea:focus {
        border-color: #6ee7b7;
        box-shadow: 0 0 0 3px rgba(5,150,105,.08);
    }

    .edit-select {
        cursor: pointer;
    }

    .edit-textarea {
        min-height: 190px;
        resize: vertical;
        line-height: 1.7;
    }

    .field-help {
        margin-top: 6px;
        color: #94a3b8;
        font-size: 11px;
    }

    .field-error {
        margin-top: 6px;
        color: var(--edit-danger);
        font-size: 11px;
        font-weight: 600;
    }

    .thumbnail-box {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 14px;
        border: 1px solid var(--edit-border);
        background: #f8fafc;
        margin-bottom: 12px;
    }

    .thumbnail-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .thumbnail-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to top,
            rgba(15,23,42,.4),
            transparent 55%
        );
        pointer-events: none;
    }

    .current-thumbnail-label {
        position: absolute;
        left: 12px;
        bottom: 12px;
        display: inline-flex;
        align-items: center;
        padding: 6px 9px;
        border-radius: 999px;
        background: rgba(255,255,255,.93);
        color: #475569;
        font-size: 10px;
        font-weight: 800;
    }

    .thumbnail-placeholder {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7px;
        color: #94a3b8;
        font-size: 12px;
    }

    .file-upload {
        position: relative;
        min-height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        padding: 15px;
        border: 1.5px dashed #cbd5e1;
        border-radius: 13px;
        background: #fafbfc;
        color: #64748b;
        text-align: center;
        cursor: pointer;
        transition: all .18s ease;
        box-sizing: border-box;
    }

    .file-upload:hover {
        border-color: #6ee7b7;
        background: var(--edit-primary-soft);
        color: var(--edit-primary-dark);
    }

    .file-upload.has-file {
        border-color: #86efac;
        background: var(--edit-primary-soft);
        color: var(--edit-primary-dark);
    }

    .file-upload strong {
        font-size: 12px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .file-upload span {
        font-size: 10px;
        color: #94a3b8;
    }

    .file-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
    }

    .status-options {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
    }

    .status-option {
        position: relative;
    }

    .status-option input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }

    .status-label {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        padding: 8px 10px;
        border: 1px solid #dce2e8;
        border-radius: 10px;
        background: #fff;
        color: #64748b;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition: all .18s ease;
    }

    .status-label:hover {
        border-color: #cbd5e1;
    }

    .status-option input:checked + .status-label {
        border-color: #6ee7b7;
        background: var(--edit-primary-soft);
        color: var(--edit-primary-dark);
        box-shadow: 0 0 0 2px rgba(5,150,105,.05);
    }

    .story-preview {
        margin-top: 20px;
        padding: 16px;
        border: 1px solid #e5eaf0;
        border-radius: 14px;
        background: #fafbfc;
    }

    .preview-label {
        margin-bottom: 10px;
        color: #94a3b8;
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .08em;
    }

    .preview-card {
        display: flex;
        gap: 14px;
        padding: 13px;
        border: 1px solid #e5eaf0;
        border-radius: 12px;
        background: #fff;
    }

    .preview-image {
        width: 115px;
        height: 75px;
        flex-shrink: 0;
        border-radius: 9px;
        overflow: hidden;
        background: #f1f5f9;
    }

    .preview-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .preview-info {
        min-width: 0;
    }

    .preview-category {
        color: var(--edit-primary);
        font-size: 9px;
        font-weight: 800;
        text-transform: uppercase;
        margin-bottom: 4px;
    }

    .preview-title {
        margin: 0 0 5px;
        color: #1e293b;
        font-size: 13px;
        font-weight: 800;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .preview-text {
        margin: 0;
        color: #94a3b8;
        font-size: 10px;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .edit-form-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        padding-top: 24px;
        border-top: 1px solid #edf1f5;
    }

    .footer-info {
        color: #94a3b8;
        font-size: 11px;
    }

    .footer-actions {
        display: flex;
        align-items: center;
        gap: 9px;
    }

    .cancel-btn,
    .update-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 43px;
        padding: 0 17px;
        border-radius: 10px;
        font-family: inherit;
        font-size: 13px;
        font-weight: 800;
        text-decoration: none;
        cursor: pointer;
        transition: all .18s ease;
    }

    .cancel-btn {
        background: #fff;
        border: 1px solid #dce2e8;
        color: #64748b;
    }

    .cancel-btn:hover {
        color: #1e293b;
        border-color: #cbd5e1;
    }

    .update-btn {
        background: var(--edit-primary);
        border: 1px solid var(--edit-primary);
        color: #fff;
        box-shadow: 0 5px 15px rgba(5,150,105,.16);
    }

    .update-btn:hover {
        background: var(--edit-primary-dark);
        border-color: var(--edit-primary-dark);
        transform: translateY(-1px);
    }

    .update-btn:disabled {
        opacity: .65;
        cursor: not-allowed;
        transform: none;
    }

    @media (max-width: 800px) {
        .story-edit-page {
            padding: 20px 14px;
        }

        .edit-page-header {
            flex-direction: column;
        }

        .edit-back-btn {
            width: 100%;
            justify-content: center;
        }

        .edit-field-row {
            grid-template-columns: 1fr;
        }

        .status-options {
            grid-template-columns: repeat(2, 1fr);
        }

        .edit-card-body {
            padding: 20px;
        }

        .edit-form-footer {
            flex-direction: column;
            align-items: stretch;
        }

        .footer-actions {
            width: 100%;
        }

        .cancel-btn,
        .update-btn {
            flex: 1;
        }
    }

    @media (max-width: 500px) {
        .edit-page-title {
            font-size: 23px;
        }

        .preview-card {
            flex-direction: column;
        }

        .preview-image {
            width: 100%;
            height: 130px;
        }
    }
`,l=({name:i,size:r=18,stroke:o=1.8})=>{const p={arrowLeft:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"M12 19l-7-7 7-7"})]}),pencil:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"})]}),writing:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3Z"}),e.jsx("path",{d:"m13.5 6.5 4 4"})]}),image:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),e.jsx("circle",{cx:"8.5",cy:"9",r:"1.5"}),e.jsx("path",{d:"m21 15-5-5L5 20"})]}),upload:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 16V4"}),e.jsx("path",{d:"m7 9 5-5 5 5"}),e.jsx("path",{d:"M5 20h14"})]}),save:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M5 3h12l3 3v15H4V3Z"}),e.jsx("path",{d:"M8 3v6h8V3"}),e.jsx("path",{d:"M8 21v-7h8v7"})]})};return e.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:p[i]})};function E(i){if(!i)return"";const r=String(i);return/^https?:\/\//i.test(r)||r.charAt(0)==="/"?r:"/"+r}function U({story:i,talents:r=[],categories:o=[]}){const p=E(i==null?void 0:i.thumbnail),[c,j]=v.useState(p||null),[x,w]=v.useState(""),{data:d,setData:s,put:N,processing:g,errors:a}=_({title:(i==null?void 0:i.title)??"",talent_id:(i==null?void 0:i.talent_id)??"",category_id:(i==null?void 0:i.category_id)??"",content:(i==null?void 0:i.content)??"",thumbnail:null,media:(i==null?void 0:i.media)??"",tags:(i==null?void 0:i.tags)??"",status:(i==null?void 0:i.status)??"pending"});function y(t){var b;const n=(b=t.target.files)==null?void 0:b[0];if(!n||!n.type.startsWith("image/"))return;s("thumbnail",n),w(n.name);const f=new FileReader;f.onload=function(C){var u;j(((u=C.target)==null?void 0:u.result)||null)},f.readAsDataURL(n)}function k(t){t.preventDefault(),N(route("admin.stories.update",i.id),{forceFormData:!0,preserveScroll:!0})}const h=o.find(t=>String(t.id)===String(d.category_id)),z=["pending","approved","rejected","published"],S=function(t){return t.charAt(0).toUpperCase()+t.slice(1)};return e.jsxs(M,{children:[e.jsx(F,{title:"Edit Story - "+((i==null?void 0:i.title)||"")}),e.jsx("style",{children:L}),e.jsx("div",{className:"story-edit-page",children:e.jsxs("div",{className:"story-edit-container",children:[e.jsxs("div",{className:"edit-page-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"edit-breadcrumb",children:[e.jsx(m,{href:route("admin.stories.index"),children:"Stories"}),e.jsx("span",{children:"/"}),e.jsx("span",{children:"Edit"})]}),e.jsxs("div",{className:"edit-mode-badge",children:[e.jsx(l,{name:"pencil",size:13}),"Edit Mode"]}),e.jsx("h1",{className:"edit-page-title",children:"Edit Story"}),e.jsx("p",{className:"edit-page-subtitle",children:"Update the details below to modify this story."})]}),e.jsxs(m,{href:route("admin.stories.index"),className:"edit-back-btn",children:[e.jsx(l,{name:"arrowLeft",size:16}),"Back to Stories"]})]}),e.jsxs("div",{className:"edit-card",children:[e.jsxs("div",{className:"edit-card-header",children:[e.jsx("div",{className:"edit-card-icon",children:e.jsx(l,{name:"pencil",size:19})}),e.jsxs("div",{children:[e.jsx("h2",{className:"edit-card-title",children:(i==null?void 0:i.title)||"Untitled Story"}),e.jsxs("p",{className:"edit-card-subtitle",children:["Editing story #",i==null?void 0:i.id]})]})]}),e.jsx("div",{className:"edit-card-body",children:e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"edit-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-number",children:"01"}),e.jsxs("div",{className:"section-heading-text",children:[e.jsx("h3",{children:"Basic Information"}),e.jsx("p",{children:"Set the story title, talent and category."})]})]}),e.jsxs("div",{className:"edit-field",children:[e.jsxs("label",{className:"edit-label",children:["Story Title"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",className:"edit-input",value:d.title,onChange:t=>s("title",t.target.value),placeholder:"Enter story title",required:!0}),a.title&&e.jsx("div",{className:"field-error",children:a.title})]}),e.jsxs("div",{className:"edit-field-row",children:[e.jsxs("div",{className:"edit-field",children:[e.jsxs("label",{className:"edit-label",children:["Talent"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("select",{className:"edit-select",value:d.talent_id,onChange:t=>s("talent_id",t.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select Talent"}),r.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),a.talent_id&&e.jsx("div",{className:"field-error",children:a.talent_id})]}),e.jsxs("div",{className:"edit-field",children:[e.jsxs("label",{className:"edit-label",children:["Category"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsxs("select",{className:"edit-select",value:d.category_id,onChange:t=>s("category_id",t.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select Category"}),o.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),a.category_id&&e.jsx("div",{className:"field-error",children:a.category_id})]})]})]}),e.jsxs("div",{className:"edit-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-number",children:"02"}),e.jsxs("div",{className:"section-heading-text",children:[e.jsx("h3",{children:"Story Content"}),e.jsx("p",{children:"Write or update the full story."})]})]}),e.jsxs("div",{className:"edit-field",children:[e.jsxs("label",{className:"edit-label",children:["Story Content"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("textarea",{className:"edit-textarea",value:d.content,onChange:t=>s("content",t.target.value),placeholder:"Write the full story content...",required:!0}),a.content&&e.jsx("div",{className:"field-error",children:a.content}),e.jsx("div",{className:"field-help",children:"Keep the story clear, engaging and easy to read."})]})]}),e.jsxs("div",{className:"edit-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-number",children:"03"}),e.jsxs("div",{className:"section-heading-text",children:[e.jsx("h3",{children:"Media"}),e.jsx("p",{children:"Manage the story image and external media."})]})]}),e.jsxs("div",{className:"edit-field-row",children:[e.jsxs("div",{className:"edit-field",children:[e.jsx("label",{className:"edit-label",children:"Thumbnail"}),e.jsx("div",{className:"thumbnail-box",children:c?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:c,alt:"Story thumbnail preview"}),e.jsx("div",{className:"thumbnail-overlay"}),e.jsx("span",{className:"current-thumbnail-label",children:x?"New thumbnail":"Current thumbnail"})]}):e.jsxs("div",{className:"thumbnail-placeholder",children:[e.jsx(l,{name:"image",size:30}),e.jsx("span",{children:"No thumbnail available"})]})}),e.jsxs("label",{className:"file-upload "+(x?"has-file":""),children:[e.jsx(l,{name:"upload",size:20}),e.jsx("strong",{children:x||"Replace thumbnail"}),e.jsx("span",{children:"PNG, JPG or WEBP"}),e.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/webp",onChange:y})]}),a.thumbnail&&e.jsx("div",{className:"field-error",children:a.thumbnail})]}),e.jsxs("div",{className:"edit-field",children:[e.jsx("label",{className:"edit-label",children:"Media URL"}),e.jsx("input",{type:"url",className:"edit-input",value:d.media,onChange:t=>s("media",t.target.value),placeholder:"https://youtube.com/watch?v=..."}),e.jsx("div",{className:"field-help",children:"Optional YouTube or external video link."}),a.media&&e.jsx("div",{className:"field-error",children:a.media}),e.jsxs("div",{className:"story-preview",children:[e.jsx("div",{className:"preview-label",children:"Story Preview"}),e.jsxs("div",{className:"preview-card",children:[e.jsx("div",{className:"preview-image",children:c?e.jsx("img",{src:c,alt:""}):e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#94a3b8"},children:e.jsx(l,{name:"image",size:24})})}),e.jsxs("div",{className:"preview-info",children:[e.jsx("div",{className:"preview-category",children:(h==null?void 0:h.name)||"Story"}),e.jsx("h4",{className:"preview-title",children:d.title||"Story title"}),e.jsx("p",{className:"preview-text",children:d.content||"Your story preview will appear here."})]})]})]})]})]})]}),e.jsxs("div",{className:"edit-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-number",children:"04"}),e.jsxs("div",{className:"section-heading-text",children:[e.jsx("h3",{children:"Tags & Status"}),e.jsx("p",{children:"Organize and control the publication state."})]})]}),e.jsxs("div",{className:"edit-field",children:[e.jsx("label",{className:"edit-label",children:"Tags"}),e.jsx("input",{type:"text",className:"edit-input",value:d.tags,onChange:t=>s("tags",t.target.value),placeholder:"motivation, art, music..."}),e.jsx("div",{className:"field-help",children:"Separate multiple tags with commas."}),a.tags&&e.jsx("div",{className:"field-error",children:a.tags})]}),e.jsxs("div",{className:"edit-field",children:[e.jsx("label",{className:"edit-label",children:"Status"}),e.jsx("div",{className:"status-options",children:z.map(t=>e.jsxs("div",{className:"status-option",children:[e.jsx("input",{type:"radio",id:"status-"+t,name:"status",value:t,checked:d.status===t,onChange:n=>s("status",n.target.value)}),e.jsx("label",{htmlFor:"status-"+t,className:"status-label",children:S(t)})]},t))}),a.status&&e.jsx("div",{className:"field-error",children:a.status})]})]}),e.jsxs("div",{className:"edit-form-footer",children:[e.jsxs("div",{className:"footer-info",children:["Changes will be saved to story #",i==null?void 0:i.id,"."]}),e.jsxs("div",{className:"footer-actions",children:[e.jsx(m,{href:route("admin.stories.index"),className:"cancel-btn",children:"Cancel"}),e.jsx("button",{type:"submit",className:"update-btn",disabled:g,children:g?"Saving...":e.jsxs(e.Fragment,{children:[e.jsx(l,{name:"save",size:16}),"Update Story"]})})]})]})]})})]})]})})]})}export{U as default};
