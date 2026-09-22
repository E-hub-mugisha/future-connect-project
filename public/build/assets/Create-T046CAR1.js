import{u as w,r as y,j as e,H as N,s as u}from"./app-CJlpfYPO.js";import{A as k}from"./AppLayout-WTBEreOn.js";function _(o){const a=o.announcement||null,c=o.categories||[],r=a!==null,{data:i,setData:t,post:b,put:f,processing:d,errors:l}=w({title:(a==null?void 0:a.title)||"",content:(a==null?void 0:a.content)||"",image:null,link:(a==null?void 0:a.link)||"",category_id:(a==null?void 0:a.category_id)||"",is_active:a?!!a.is_active:!1}),[n,x]=y.useState(a!=null&&a.image?`/storage/${a.image}`:null),m=p=>{var h;const s=(h=p.target.files)==null?void 0:h[0];s&&(t("image",s),x(URL.createObjectURL(s)))},v=()=>{t("image",null),x(null)},j=p=>{p.preventDefault();const s={forceFormData:!0};r?f(u("admin.announcements.update",a.id),s):b(u("admin.announcements.store"),s)},g=c.find(p=>String(p.id)===String(i.category_id));return e.jsxs(k,{children:[e.jsx(N,{title:r?"Edit Announcement":"Create Announcement"}),e.jsx("style",{children:`
                .apple-page {
                    --apple-bg: #f5f5f7;
                    --apple-card: #ffffff;
                    --apple-text: #1d1d1f;
                    --apple-secondary: #86868b;
                    --apple-border: #e5e5e7;
                    --apple-blue: #0071e3;
                    --apple-blue-hover: #0077ed;
                    --apple-green: #34c759;

                    min-height: 100vh;
                    background: var(--apple-bg);
                    color: var(--apple-text);
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                    letter-spacing: -0.01em;
                }

                .apple-container {
                    max-width: 1480px;
                    margin: 0 auto;
                    padding: 42px 28px 70px;
                }

                .apple-header {
                    margin-bottom: 30px;
                }

                .apple-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    color: var(--apple-blue);
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                .apple-title {
                    margin: 0;
                    font-size: clamp(30px, 4vw, 46px);
                    line-height: 1.05;
                    font-weight: 700;
                    letter-spacing: -0.045em;
                }

                .apple-subtitle {
                    margin: 10px 0 0;
                    color: var(--apple-secondary);
                    font-size: 16px;
                    line-height: 1.5;
                    max-width: 650px;
                }

                .apple-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 9px 14px;
                    border-radius: 999px;
                    font-size: 13px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .apple-status.published {
                    background: #e9f9ee;
                    color: #188038;
                }

                .apple-status.draft {
                    background: #e8e8ed;
                    color: #6e6e73;
                }

                .apple-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.55fr) minmax(320px, 0.75fr);
                    gap: 24px;
                    align-items: start;
                }

                .apple-card {
                    background: var(--apple-card);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    border-radius: 22px;
                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, 0.03),
                        0 10px 35px rgba(0, 0, 0, 0.045);
                    overflow: hidden;
                }

                .apple-card-body {
                    padding: 30px;
                }

                .apple-section-title {
                    margin: 0;
                    font-size: 20px;
                    font-weight: 650;
                    letter-spacing: -0.025em;
                }

                .apple-section-description {
                    color: var(--apple-secondary);
                    margin: 6px 0 28px;
                    font-size: 14px;
                    line-height: 1.5;
                }

                .apple-field {
                    margin-bottom: 23px;
                }

                .apple-label {
                    display: block;
                    margin-bottom: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #3a3a3c;
                }

                .apple-required {
                    color: #ff3b30;
                }

                .apple-input,
                .apple-select,
                .apple-textarea {
                    width: 100%;
                    border: 1px solid #d2d2d7;
                    background: #fff;
                    color: var(--apple-text);
                    border-radius: 12px;
                    padding: 13px 14px;
                    font-family: inherit;
                    font-size: 15px;
                    outline: none;
                    transition:
                        border-color 0.2s ease,
                        box-shadow 0.2s ease,
                        background 0.2s ease;
                }

                .apple-input::placeholder,
                .apple-textarea::placeholder {
                    color: #a1a1a6;
                }

                .apple-input:hover,
                .apple-select:hover,
                .apple-textarea:hover {
                    border-color: #b8b8bd;
                }

                .apple-input:focus,
                .apple-select:focus,
                .apple-textarea:focus {
                    border-color: var(--apple-blue);
                    box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.12);
                }

                .apple-input.error,
                .apple-select.error,
                .apple-textarea.error {
                    border-color: #ff3b30;
                }

                .apple-textarea {
                    min-height: 190px;
                    resize: vertical;
                    line-height: 1.6;
                }

                .apple-field-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .apple-counter {
                    color: var(--apple-secondary);
                    font-size: 12px;
                }

                .apple-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 18px;
                }

                .apple-input-icon {
                    position: relative;
                }

                .apple-input-icon i {
                    position: absolute;
                    left: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #8e8e93;
                    z-index: 2;
                }

                .apple-input-icon .apple-input {
                    padding-left: 42px;
                }

                .apple-error {
                    display: block;
                    margin-top: 6px;
                    color: #ff3b30;
                    font-size: 12px;
                }

                .apple-upload {
                    border: 1.5px dashed #c7c7cc;
                    border-radius: 18px;
                    background: #fafafa;
                    min-height: 245px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 30px;
                    transition:
                        border-color 0.2s ease,
                        background 0.2s ease;
                }

                .apple-upload:hover {
                    border-color: var(--apple-blue);
                    background: #f7fbff;
                }

                .apple-upload-icon {
                    width: 58px;
                    height: 58px;
                    border-radius: 17px;
                    background: #eaf3ff;
                    color: var(--apple-blue);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 25px;
                    margin-bottom: 16px;
                }

                .apple-upload-title {
                    font-size: 16px;
                    font-weight: 650;
                    margin-bottom: 5px;
                }

                .apple-upload-description {
                    color: var(--apple-secondary);
                    font-size: 13px;
                    margin-bottom: 18px;
                }

                .apple-button {
                    border: 0;
                    border-radius: 999px;
                    padding: 11px 19px;
                    font-family: inherit;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition:
                        transform 0.15s ease,
                        background 0.2s ease,
                        opacity 0.2s ease;
                }

                .apple-button:hover {
                    transform: translateY(-1px);
                }

                .apple-button:active {
                    transform: translateY(0);
                }

                .apple-button-primary {
                    background: var(--apple-blue);
                    color: white;
                }

                .apple-button-primary:hover {
                    background: var(--apple-blue-hover);
                }

                .apple-button-secondary {
                    background: #e8e8ed;
                    color: #1d1d1f;
                }

                .apple-button-secondary:hover {
                    background: #dedee3;
                }

                .apple-button-danger {
                    background: rgba(255, 59, 48, 0.92);
                    color: white;
                }

                .apple-image-preview {
                    position: relative;
                    overflow: hidden;
                    border-radius: 18px;
                    background: #f5f5f7;
                }

                .apple-image-preview img {
                    width: 100%;
                    height: 280px;
                    object-fit: cover;
                    display: block;
                }

                .apple-image-actions {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    display: flex;
                    gap: 8px;
                }

                .apple-action-button {
                    width: 38px;
                    height: 38px;
                    border: 0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    background: rgba(255, 255, 255, 0.88);
                    color: #1d1d1f;
                    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
                }

                .apple-action-button.delete {
                    color: #ff3b30;
                }

                .apple-publish {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 18px;
                    border: 1px solid var(--apple-border);
                    border-radius: 17px;
                    background: #fafafa;
                }

                .apple-publish-info {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                }

                .apple-publish-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #e8e8ed;
                    color: #6e6e73;
                    flex-shrink: 0;
                }

                .apple-publish-icon.active {
                    background: #e9f9ee;
                    color: #188038;
                }

                .apple-publish-title {
                    margin: 0 0 3px;
                    font-size: 14px;
                    font-weight: 650;
                }

                .apple-publish-description {
                    margin: 0;
                    color: var(--apple-secondary);
                    font-size: 12px;
                }

                .apple-switch {
                    position: relative;
                    width: 51px;
                    height: 31px;
                    flex-shrink: 0;
                }

                .apple-switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .apple-slider {
                    position: absolute;
                    inset: 0;
                    background: #d1d1d6;
                    border-radius: 999px;
                    cursor: pointer;
                    transition: 0.2s;
                }

                .apple-slider::before {
                    content: "";
                    position: absolute;
                    width: 27px;
                    height: 27px;
                    left: 2px;
                    top: 2px;
                    background: white;
                    border-radius: 50%;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
                    transition: 0.2s;
                }

                .apple-switch input:checked + .apple-slider {
                    background: var(--apple-green);
                }

                .apple-switch input:checked + .apple-slider::before {
                    transform: translateX(20px);
                }

                .apple-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    padding: 20px 30px;
                    border-top: 1px solid var(--apple-border);
                    background: #fbfbfc;
                }

                .apple-preview-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 20px;
                }

                .apple-preview-icon {
                    width: 42px;
                    height: 42px;
                    border-radius: 13px;
                    background: #eaf3ff;
                    color: var(--apple-blue);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .apple-preview-title {
                    margin: 0;
                    font-size: 17px;
                    font-weight: 650;
                }

                .apple-preview-subtitle {
                    display: block;
                    color: var(--apple-secondary);
                    font-size: 12px;
                    margin-top: 2px;
                }

                .apple-preview-card {
                    border: 1px solid var(--apple-border);
                    border-radius: 18px;
                    overflow: hidden;
                    background: white;
                }

                .apple-preview-image {
                    width: 100%;
                    height: 210px;
                    object-fit: cover;
                    display: block;
                }

                .apple-no-image {
                    height: 210px;
                    background: #f5f5f7;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #8e8e93;
                }

                .apple-no-image i {
                    font-size: 38px;
                    margin-bottom: 8px;
                }

                .apple-preview-content {
                    padding: 20px;
                }

                .apple-preview-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 15px;
                }

                .apple-badge {
                    display: inline-flex;
                    align-items: center;
                    border-radius: 999px;
                    padding: 6px 10px;
                    font-size: 11px;
                    font-weight: 650;
                }

                .apple-badge-category {
                    color: var(--apple-blue);
                    background: #eaf3ff;
                }

                .apple-badge-active {
                    color: #188038;
                    background: #e9f9ee;
                }

                .apple-badge-draft {
                    color: #6e6e73;
                    background: #e8e8ed;
                }

                .apple-preview-heading {
                    margin: 0 0 8px;
                    font-size: 20px;
                    line-height: 1.2;
                    font-weight: 650;
                    letter-spacing: -0.025em;
                }

                .apple-preview-text {
                    margin: 0;
                    color: #6e6e73;
                    font-size: 13px;
                    line-height: 1.6;
                    white-space: pre-wrap;
                }

                .apple-preview-link {
                    margin-top: 18px;
                    padding-top: 15px;
                    border-top: 1px solid var(--apple-border);
                    color: var(--apple-blue);
                    font-size: 13px;
                    font-weight: 600;
                }

                .apple-tip {
                    display: flex;
                    gap: 10px;
                    align-items: flex-start;
                    margin-top: 16px;
                    padding: 13px 14px;
                    border-radius: 14px;
                    background: #f5f5f7;
                    color: #6e6e73;
                    font-size: 12px;
                    line-height: 1.5;
                }

                .apple-tip i {
                    color: #ff9f0a;
                    font-size: 15px;
                    margin-top: 1px;
                }

                @media (max-width: 1100px) {
                    .apple-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 700px) {
                    .apple-container {
                        padding: 25px 16px 50px;
                    }

                    .apple-card-body {
                        padding: 20px;
                    }

                    .apple-row {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }

                    .apple-footer {
                        padding: 18px 20px;
                    }

                    .apple-publish {
                        align-items: flex-start;
                    }

                    .apple-title {
                        font-size: 34px;
                    }
                }
            `}),e.jsx("div",{className:"apple-page",children:e.jsxs("div",{className:"apple-container",children:[e.jsx("div",{className:"apple-header",children:e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-end gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"apple-eyebrow",children:[e.jsx("i",{className:"bi bi-megaphone"}),"Announcements"]}),e.jsx("h1",{className:"apple-title",children:r?"Edit announcement":"Create announcement"}),e.jsx("p",{className:"apple-subtitle",children:r?"Update your announcement and keep your audience informed.":"Create a clear and engaging announcement for your users."})]}),e.jsxs("div",{className:`apple-status ${i.is_active?"published":"draft"}`,children:[e.jsx("i",{className:i.is_active?"bi bi-check-circle-fill":"bi bi-circle"}),i.is_active?"Published":"Draft"]})]})}),e.jsx("form",{onSubmit:j,encType:"multipart/form-data",children:e.jsxs("div",{className:"apple-grid",children:[e.jsxs("div",{className:"apple-card",children:[e.jsxs("div",{className:"apple-card-body",children:[e.jsx("h2",{className:"apple-section-title",children:"Announcement details"}),e.jsx("p",{className:"apple-section-description",children:"Add the information your users should see."}),e.jsxs("div",{className:"apple-field",children:[e.jsxs("label",{className:"apple-label",children:["Title",e.jsxs("span",{className:"apple-required",children:[" ","*"]})]}),e.jsx("input",{type:"text",value:i.title,onChange:p=>t("title",p.target.value),className:`apple-input ${l.title?"error":""}`,placeholder:"Enter announcement title",required:!0}),l.title&&e.jsx("span",{className:"apple-error",children:l.title})]}),e.jsxs("div",{className:"apple-field",children:[e.jsxs("div",{className:"apple-field-header",children:[e.jsxs("label",{className:"apple-label",children:["Content",e.jsxs("span",{className:"apple-required",children:[" ","*"]})]}),e.jsxs("span",{className:"apple-counter",children:[i.content.length," characters"]})]}),e.jsx("textarea",{value:i.content,onChange:p=>t("content",p.target.value),className:`apple-textarea ${l.content?"error":""}`,placeholder:"Write your announcement here...",required:!0}),l.content&&e.jsx("span",{className:"apple-error",children:l.content})]}),e.jsxs("div",{className:"apple-row",children:[e.jsxs("div",{className:"apple-field",children:[e.jsxs("label",{className:"apple-label",children:["Category",e.jsxs("span",{className:"apple-required",children:[" ","*"]})]}),e.jsxs("select",{value:i.category_id,onChange:p=>t("category_id",p.target.value),className:`apple-select ${l.category_id?"error":""}`,required:!0,children:[e.jsx("option",{value:"",children:"Select category"}),c.map(p=>e.jsx("option",{value:p.id,children:p.name},p.id))]}),l.category_id&&e.jsx("span",{className:"apple-error",children:l.category_id})]}),e.jsxs("div",{className:"apple-field",children:[e.jsx("label",{className:"apple-label",children:"External link"}),e.jsxs("div",{className:"apple-input-icon",children:[e.jsx("i",{className:"bi bi-link-45deg"}),e.jsx("input",{type:"url",value:i.link,onChange:p=>t("link",p.target.value),className:`apple-input ${l.link?"error":""}`,placeholder:"https://example.com"})]}),l.link&&e.jsx("span",{className:"apple-error",children:l.link})]})]}),e.jsxs("div",{className:"apple-field",children:[e.jsx("label",{className:"apple-label",children:"Announcement image"}),n?e.jsxs("div",{className:"apple-image-preview",children:[e.jsx("img",{src:n,alt:"Announcement preview"}),e.jsxs("div",{className:"apple-image-actions",children:[e.jsx("button",{type:"button",className:"apple-action-button delete",onClick:v,title:"Remove image",children:e.jsx("i",{className:"bi bi-trash3"})}),e.jsxs("label",{htmlFor:"replace-image",className:"apple-action-button",title:"Change image",children:[e.jsx("i",{className:"bi bi-pencil"}),e.jsx("input",{id:"replace-image",type:"file",accept:"image/*",onChange:m,className:"d-none"})]})]})]}):e.jsxs("div",{className:"apple-upload",children:[e.jsx("div",{className:"apple-upload-icon",children:e.jsx("i",{className:"bi bi-cloud-arrow-up"})}),e.jsx("div",{className:"apple-upload-title",children:"Add an image"}),e.jsx("div",{className:"apple-upload-description",children:"Use a high-quality JPG, PNG or WEBP image."}),e.jsxs("label",{htmlFor:"announcement-image",className:"apple-button apple-button-primary",children:[e.jsx("i",{className:"bi bi-plus-lg me-2"}),"Choose image"]}),e.jsx("input",{id:"announcement-image",type:"file",accept:"image/*",onChange:m,className:"d-none"})]}),l.image&&e.jsx("span",{className:"apple-error",children:l.image})]}),e.jsx("div",{className:"apple-field mb-0",children:e.jsxs("div",{className:"apple-publish",children:[e.jsxs("div",{className:"apple-publish-info",children:[e.jsx("div",{className:`apple-publish-icon ${i.is_active?"active":""}`,children:e.jsx("i",{className:i.is_active?"bi bi-broadcast":"bi bi-pause"})}),e.jsxs("div",{children:[e.jsx("p",{className:"apple-publish-title",children:"Publish announcement"}),e.jsx("p",{className:"apple-publish-description",children:i.is_active?"Your announcement is visible to users.":"Your announcement will remain a draft."})]})]}),e.jsxs("label",{className:"apple-switch",children:[e.jsx("input",{type:"checkbox",checked:i.is_active,onChange:p=>t("is_active",p.target.checked)}),e.jsx("span",{className:"apple-slider"})]})]})})]}),e.jsxs("div",{className:"apple-footer",children:[e.jsx("button",{type:"button",className:"apple-button apple-button-secondary",onClick:()=>window.history.back(),children:"Cancel"}),e.jsx("button",{type:"submit",className:"apple-button apple-button-primary",disabled:d,children:d?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:r?"bi bi-check2 me-2":"bi bi-plus-lg me-2"}),r?"Save changes":"Create announcement"]})})]})]}),e.jsx("div",{className:"apple-card",children:e.jsxs("div",{className:"apple-card-body",children:[e.jsxs("div",{className:"apple-preview-header",children:[e.jsx("div",{className:"apple-preview-icon",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"apple-preview-title",children:"Live preview"}),e.jsx("span",{className:"apple-preview-subtitle",children:"See how your announcement will appear"})]})]}),e.jsxs("div",{className:"apple-preview-card",children:[n?e.jsx("img",{src:n,alt:"Preview",className:"apple-preview-image"}):e.jsxs("div",{className:"apple-no-image",children:[e.jsx("i",{className:"bi bi-image"}),e.jsx("span",{children:"No image selected"})]}),e.jsxs("div",{className:"apple-preview-content",children:[e.jsxs("div",{className:"apple-preview-meta",children:[e.jsx("span",{className:"apple-badge apple-badge-category",children:g?g.name:"Category"}),e.jsx("span",{className:`apple-badge ${i.is_active?"apple-badge-active":"apple-badge-draft"}`,children:i.is_active?"Published":"Draft"})]}),e.jsx("h3",{className:"apple-preview-heading",children:i.title||"Announcement title"}),e.jsx("p",{className:"apple-preview-text",children:i.content||"Your announcement content will appear here as you type."}),i.link&&e.jsxs("div",{className:"apple-preview-link",children:[e.jsx("i",{className:"bi bi-arrow-up-right me-1"}),"Learn more"]})]})]}),e.jsxs("div",{className:"apple-tip",children:[e.jsx("i",{className:"bi bi-lightbulb-fill"}),e.jsx("span",{children:"The preview updates automatically while you edit the announcement."})]})]})})]})})]})})]})}export{_ as default};
