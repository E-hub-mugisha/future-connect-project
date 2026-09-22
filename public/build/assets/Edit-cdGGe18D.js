import{u as C,r as v,j as e,H as L,L as u}from"./app-CJlpfYPO.js";import{A as _}from"./AppLayout-WTBEreOn.js";function t({name:i,size:l=20,strokeWidth:o=1.8,className:r=""}){const n={width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",className:r,"aria-hidden":"true"},h={megaphone:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 11v2a2 2 0 0 0 2 2h2l4 5h2l-2-5h2l7 3V6l-7 3H5a2 2 0 0 0-2 2Z"}),e.jsx("path",{d:"M20 6v12"})]}),arrowLeft:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"m12 19-7-7 7-7"})]}),save:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"}),e.jsx("path",{d:"M17 21v-8H7v8"}),e.jsx("path",{d:"M7 3v5h8"})]}),image:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),e.jsx("circle",{cx:"8.5",cy:"9",r:"1.5"}),e.jsx("path",{d:"m21 15-4.5-4.5L7 20"})]}),upload:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 16V4"}),e.jsx("path",{d:"m7 9 5-5 5 5"}),e.jsx("path",{d:"M5 20h14"})]}),link:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"}),e.jsx("path",{d:"M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"})]}),tag:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z"}),e.jsx("circle",{cx:"7.5",cy:"7.5",r:"1"})]}),check:e.jsx(e.Fragment,{children:e.jsx("path",{d:"m5 12 4 4L19 6"})}),checkCircle:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"m8 12 2.5 2.5L16 9"})]}),eye:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]}),close:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"m6 6 12 12"}),e.jsx("path",{d:"m18 6-12 12"})]})};return e.jsx("svg",{...n,children:h[i]})}function D({announcement:i=null,categories:l=[]}){var j;const o=!!i,{data:r,setData:n,post:h,put:y,processing:b,errors:s,progress:m}=C({title:(i==null?void 0:i.title)??"",content:(i==null?void 0:i.content)??"",image:null,link:(i==null?void 0:i.link)??"",category_id:(i==null?void 0:i.category_id)??"",is_active:(i==null?void 0:i.is_active)??!1}),[c,x]=v.useState(i!=null&&i.image?"/storage/"+String(i.image).replace(/^\/+/,""):null),[w,f]=v.useState(!1);function k(a){var p;const d=(p=a.target.files)==null?void 0:p[0];d&&(n("image",d),x(URL.createObjectURL(d)))}function N(a){var p;a.preventDefault(),f(!1);const d=(p=a.dataTransfer.files)==null?void 0:p[0];d&&d.type.startsWith("image/")&&(n("image",d),x(URL.createObjectURL(d)))}function z(){n("image",null),i!=null&&i.image?x("/storage/"+String(i.image).replace(/^\/+/,"")):x(null)}function A(a){a.preventDefault(),o?y(route("admin.announcements.update",i.id),{forceFormData:!0,preserveScroll:!0}):h(route("admin.announcements.store"),{forceFormData:!0,preserveScroll:!0})}const g=l.find(a=>String(a.id)===String(r.category_id)),F=((j=r.content)==null?void 0:j.length)||0;return e.jsxs(_,{children:[e.jsx(L,{title:o?"Edit Announcement":"Create Announcement"}),e.jsxs("div",{className:"announcement-form-page",children:[e.jsxs("header",{className:"form-header",children:[e.jsxs("div",{className:"form-header-main",children:[e.jsx("div",{className:"header-icon",children:e.jsx(t,{name:"megaphone",size:24})}),e.jsxs("div",{children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(u,{href:route("admin.announcements.index"),children:"Announcements"}),e.jsx("span",{children:"/"}),e.jsx("span",{children:o?"Edit":"Create"})]}),e.jsx("h1",{children:o?"Edit Announcement":"Create Announcement"}),e.jsx("p",{children:o?"Update the announcement information and visibility settings.":"Create a new announcement to share important information with your users."})]})]}),e.jsxs(u,{href:route("admin.announcements.index"),className:"back-button",children:[e.jsx(t,{name:"arrowLeft",size:17}),"Back to Announcements"]})]}),e.jsxs("form",{onSubmit:A,encType:"multipart/form-data",children:[e.jsxs("div",{className:"form-layout",children:[e.jsxs("main",{className:"form-main",children:[e.jsxs("section",{className:"form-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"card-header-icon blue",children:e.jsx(t,{name:"megaphone",size:19})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Basic Information"}),e.jsx("p",{children:"Provide the main details of your announcement."})]})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"title",children:["Announcement Title",e.jsx("span",{children:"*"})]}),e.jsx("input",{id:"title",type:"text",value:r.title,onChange:a=>n("title",a.target.value),placeholder:"Enter announcement title",className:s.title?"input error":"input",required:!0}),s.title&&e.jsx("div",{className:"field-error",children:s.title})]}),e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"label-row",children:[e.jsxs("label",{htmlFor:"content",children:["Announcement Content",e.jsx("span",{children:"*"})]}),e.jsxs("small",{children:[F," characters"]})]}),e.jsx("textarea",{id:"content",value:r.content,onChange:a=>n("content",a.target.value),placeholder:"Write your announcement here...",rows:10,className:s.content?"textarea error":"textarea",required:!0}),s.content&&e.jsx("div",{className:"field-error",children:s.content}),e.jsx("p",{className:"field-help",children:"Write clear and concise information for your audience."})]})]})]}),e.jsxs("section",{className:"form-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"card-header-icon purple",children:e.jsx(t,{name:"tag",size:19})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Classification & Link"}),e.jsx("p",{children:"Organize the announcement and optionally add a resource."})]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"two-columns",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"category_id",children:["Category",e.jsx("span",{children:"*"})]}),e.jsxs("select",{id:"category_id",value:r.category_id,onChange:a=>n("category_id",a.target.value),className:s.category_id?"select error":"select",required:!0,children:[e.jsx("option",{value:"",children:"Select a category"}),l.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),s.category_id&&e.jsx("div",{className:"field-error",children:s.category_id})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"link",children:["External Link",e.jsx("span",{className:"optional",children:"Optional"})]}),e.jsxs("div",{className:"input-with-icon",children:[e.jsx(t,{name:"link",size:17}),e.jsx("input",{id:"link",type:"url",value:r.link,onChange:a=>n("link",a.target.value),placeholder:"https://example.com",className:s.link?"input error":"input"})]}),s.link&&e.jsx("div",{className:"field-error",children:s.link}),e.jsx("p",{className:"field-help",children:"Add an external page users can visit."})]})]})})]}),e.jsxs("section",{className:"form-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"card-header-icon orange",children:e.jsx(t,{name:"image",size:19})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Announcement Image"}),e.jsx("p",{children:"Add an optional image to make your announcement more engaging."})]})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"upload-area "+(w?"dragging ":"")+(c?"has-preview":""),onDragOver:a=>{a.preventDefault(),f(!0)},onDragLeave:()=>f(!1),onDrop:N,children:[c?e.jsxs("div",{className:"preview-wrapper",children:[e.jsx("img",{src:c,alt:"Announcement preview"}),e.jsxs("div",{className:"preview-overlay",children:[e.jsxs("label",{htmlFor:"image",className:"change-image",children:[e.jsx(t,{name:"upload",size:16}),"Change Image"]}),e.jsxs("button",{type:"button",className:"remove-image",onClick:z,children:[e.jsx(t,{name:"close",size:15}),"Remove"]})]})]}):e.jsxs("label",{htmlFor:"image",className:"upload-empty",children:[e.jsx("div",{className:"upload-icon",children:e.jsx(t,{name:"upload",size:24})}),e.jsx("strong",{children:"Upload an image"}),e.jsx("span",{children:"Drag and drop an image here, or click to browse"}),e.jsx("small",{children:"PNG, JPG or WEBP"})]}),e.jsx("input",{id:"image",type:"file",accept:"image/png,image/jpeg,image/webp",onChange:k,className:"file-input"})]}),s.image&&e.jsx("div",{className:"field-error image-error",children:s.image}),m&&e.jsxs("div",{className:"upload-progress",children:[e.jsxs("div",{className:"progress-header",children:[e.jsx("span",{children:"Uploading image..."}),e.jsxs("strong",{children:[m.percentage,"%"]})]}),e.jsx("div",{className:"progress-track",children:e.jsx("div",{className:"progress-bar",style:{width:m.percentage+"%"}})})]})]})]})]}),e.jsxs("aside",{className:"form-sidebar",children:[e.jsxs("section",{className:"sidebar-card",children:[e.jsx("div",{className:"sidebar-card-header",children:e.jsx("h3",{children:"Publication Status"})}),e.jsxs("div",{className:"status-options",children:[e.jsxs("button",{type:"button",className:r.is_active?"status-option active":"status-option",onClick:()=>n("is_active",!0),children:[e.jsx("span",{className:"status-option-icon green",children:e.jsx(t,{name:"checkCircle",size:17})}),e.jsxs("span",{className:"status-option-copy",children:[e.jsx("strong",{children:"Active"}),e.jsx("small",{children:"Visible to users"})]}),e.jsx("span",{className:"radio",children:r.is_active&&e.jsx("span",{})})]}),e.jsxs("button",{type:"button",className:r.is_active?"status-option":"status-option selected",onClick:()=>n("is_active",!1),children:[e.jsx("span",{className:"status-option-icon gray",children:e.jsx(t,{name:"eye",size:17})}),e.jsxs("span",{className:"status-option-copy",children:[e.jsx("strong",{children:"Inactive"}),e.jsx("small",{children:"Hidden from users"})]}),e.jsx("span",{className:"radio",children:!r.is_active&&e.jsx("span",{})})]})]})]}),e.jsxs("section",{className:"sidebar-card preview-card",children:[e.jsxs("div",{className:"sidebar-card-header",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Live Preview"}),e.jsx("span",{children:"Preview how it will appear"})]}),e.jsx(t,{name:"eye",size:17})]}),e.jsxs("div",{className:"announcement-preview",children:[c?e.jsx("div",{className:"preview-image",children:e.jsx("img",{src:c,alt:""})}):e.jsx("div",{className:"preview-image-placeholder",children:e.jsx(t,{name:"megaphone",size:25})}),e.jsxs("div",{className:"preview-content",children:[e.jsx("div",{className:"preview-category",children:(g==null?void 0:g.name)||"Announcement"}),e.jsx("h4",{children:r.title||"Announcement title"}),e.jsx("p",{children:r.content?r.content.length>130?r.content.slice(0,130)+"…":r.content:"Your announcement content will appear here."}),e.jsxs("div",{className:"preview-footer",children:[e.jsx("span",{children:r.is_active?"Active":"Inactive"}),r.link&&e.jsx(t,{name:"link",size:13})]})]})]})]}),e.jsxs("section",{className:"tip-card",children:[e.jsx("div",{className:"tip-icon",children:e.jsx(t,{name:"check",size:17})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Quick tip"}),e.jsx("p",{children:"Keep your announcement title short and make the main message easy to understand."})]})]})]})]}),e.jsxs("footer",{className:"form-footer",children:[e.jsx(u,{href:route("admin.announcements.index"),className:"cancel-button",children:"Cancel"}),e.jsx("button",{type:"submit",className:"submit-button",disabled:b,children:b?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),o?"Updating...":"Creating..."]}):e.jsxs(e.Fragment,{children:[e.jsx(t,{name:"save",size:17}),o?"Update Announcement":"Create Announcement"]})})]})]})]}),e.jsx("style",{children:`

                * {
                    box-sizing: border-box;
                }

                .announcement-form-page {
                    min-height: 100vh;
                    padding: 28px;
                    background: #f7f9fc;
                    color: #172033;
                }

                /* =====================================================
                   HEADER
                ===================================================== */

                .form-header {
                    max-width: 1440px;
                    margin: 0 auto 24px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                }

                .form-header-main {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .header-icon {
                    width: 52px;
                    height: 52px;
                    flex-shrink: 0;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #059669;
                    background: #ecfdf5;
                    border: 1px solid #d1fae5;
                }

                .breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 5px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .breadcrumb a {
                    color: #059669;
                    text-decoration: none;
                }

                .breadcrumb a:hover {
                    text-decoration: underline;
                }

                .breadcrumb span {
                    color: #98a2b3;
                }

                .form-header h1 {
                    margin: 0;
                    color: #101828;
                    font-size: 27px;
                    font-weight: 750;
                    letter-spacing: -.5px;
                }

                .form-header p {
                    margin: 5px 0 0;
                    color: #667085;
                    font-size: 13px;
                }

                .back-button {
                    min-height: 40px;
                    padding: 0 13px;
                    border: 1px solid #d0d5dd;
                    border-radius: 9px;
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    color: #344054;
                    background: #ffffff;
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .back-button:hover {
                    background: #f9fafb;
                    border-color: #98a2b3;
                }

                /* =====================================================
                   LAYOUT
                ===================================================== */

                .form-layout {
                    max-width: 1440px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 340px;
                    gap: 20px;
                    align-items: start;
                }

                .form-main {
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .form-sidebar {
                    position: sticky;
                    top: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                /* =====================================================
                   CARDS
                ===================================================== */

                .form-card,
                .sidebar-card,
                .tip-card {
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 15px;
                    box-shadow: 0 2px 6px rgba(16, 24, 40, .025);
                }

                .form-card {
                    overflow: hidden;
                }

                .card-header {
                    padding: 20px 22px;
                    border-bottom: 1px solid #eef1f5;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .card-header-icon {
                    width: 39px;
                    height: 39px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .card-header-icon.blue {
                    color: #2563eb;
                    background: #eff6ff;
                }

                .card-header-icon.purple {
                    color: #7c3aed;
                    background: #f5f3ff;
                }

                .card-header-icon.orange {
                    color: #ea580c;
                    background: #fff7ed;
                }

                .card-header h2 {
                    margin: 0 0 3px;
                    color: #101828;
                    font-size: 15px;
                    font-weight: 750;
                }

                .card-header p {
                    margin: 0;
                    color: #98a2b3;
                    font-size: 11px;
                }

                .card-body {
                    padding: 22px;
                }

                /* =====================================================
                   FIELDS
                ===================================================== */

                .field {
                    margin-bottom: 21px;
                }

                .field:last-child {
                    margin-bottom: 0;
                }

                .field label {
                    display: block;
                    margin-bottom: 7px;
                    color: #344054;
                    font-size: 12px;
                    font-weight: 700;
                }

                .field label > span:not(.optional) {
                    margin-left: 3px;
                    color: #dc2626;
                }

                .field label .optional {
                    margin-left: 6px;
                    color: #98a2b3;
                    font-size: 10px;
                    font-weight: 500;
                }

                .label-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .label-row small {
                    color: #98a2b3;
                    font-size: 10px;
                }

                .input,
                .select,
                .textarea {
                    width: 100%;
                    border: 1px solid #d0d5dd;
                    border-radius: 9px;
                    outline: none;
                    color: #344054;
                    background: #ffffff;
                    font-family: inherit;
                    font-size: 13px;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;
                }

                .input {
                    height: 43px;
                    padding: 0 13px;
                }

                .select {
                    height: 43px;
                    padding: 0 12px;
                    cursor: pointer;
                }

                .textarea {
                    min-height: 220px;
                    padding: 12px 13px;
                    line-height: 1.7;
                    resize: vertical;
                }

                .input::placeholder,
                .textarea::placeholder {
                    color: #b2b8c2;
                }

                .input:focus,
                .select:focus,
                .textarea:focus {
                    border-color: #059669;
                    box-shadow: 0 0 0 3px rgba(5, 150, 105, .09);
                }

                .input.error,
                .select.error,
                .textarea.error {
                    border-color: #ef4444;
                }

                .input-with-icon {
                    position: relative;
                }

                .input-with-icon > svg {
                    position: absolute;
                    left: 13px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #98a2b3;
                    pointer-events: none;
                }

                .input-with-icon .input {
                    padding-left: 40px;
                }

                .field-error {
                    margin-top: 6px;
                    color: #dc2626;
                    font-size: 11px;
                    font-weight: 600;
                }

                .field-help {
                    margin: 6px 0 0;
                    color: #98a2b3;
                    font-size: 10px;
                    line-height: 1.5;
                }

                .two-columns {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 18px;
                }

                /* =====================================================
                   IMAGE UPLOAD
                ===================================================== */

                .upload-area {
                    position: relative;
                    min-height: 245px;
                    overflow: hidden;
                    border: 1.5px dashed #cfd6df;
                    border-radius: 12px;
                    background: #fafbfc;
                    transition: .2s ease;
                }

                .upload-area:hover,
                .upload-area.dragging {
                    border-color: #059669;
                    background: #f0fdf4;
                }

                .upload-area.has-preview {
                    border-style: solid;
                    border-color: #e4e7ec;
                    background: #f8fafc;
                }

                .file-input {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    opacity: 0;
                    pointer-events: none;
                }

                .upload-empty {
                    min-height: 245px;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    cursor: pointer;
                }

                .upload-icon {
                    width: 52px;
                    height: 52px;
                    margin-bottom: 13px;
                    border-radius: 13px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #059669;
                    background: #ecfdf5;
                }

                .upload-empty strong {
                    color: #344054;
                    font-size: 13px;
                }

                .upload-empty span {
                    max-width: 300px;
                    margin-top: 5px;
                    color: #98a2b3;
                    font-size: 11px;
                    line-height: 1.5;
                }

                .upload-empty small {
                    margin-top: 8px;
                    color: #b0b7c2;
                    font-size: 10px;
                }

                .preview-wrapper {
                    position: relative;
                    min-height: 245px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f8fafc;
                }

                .preview-wrapper img {
                    display: block;
                    width: 100%;
                    height: 245px;
                    object-fit: contain;
                }

                .preview-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    opacity: 0;
                    background: rgba(15, 23, 42, .58);
                    transition: opacity .2s ease;
                }

                .preview-wrapper:hover .preview-overlay {
                    opacity: 1;
                }

                .change-image,
                .remove-image {
                    height: 36px;
                    padding: 0 11px;
                    border-radius: 8px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    font-weight: 700;
                    cursor: pointer;
                }

                .change-image {
                    color: #344054;
                    background: #ffffff;
                }

                .remove-image {
                    border: 0;
                    color: #ffffff;
                    background: #dc2626;
                }

                .image-error {
                    margin-top: 8px;
                }

                .upload-progress {
                    margin-top: 12px;
                }

                .progress-header {
                    margin-bottom: 5px;
                    display: flex;
                    justify-content: space-between;
                    color: #667085;
                    font-size: 10px;
                }

                .progress-track {
                    height: 5px;
                    overflow: hidden;
                    border-radius: 99px;
                    background: #e5e7eb;
                }

                .progress-bar {
                    height: 100%;
                    border-radius: inherit;
                    background: #059669;
                    transition: width .2s ease;
                }

                /* =====================================================
                   SIDEBAR STATUS
                ===================================================== */

                .sidebar-card {
                    overflow: hidden;
                }

                .sidebar-card-header {
                    padding: 16px 17px;
                    border-bottom: 1px solid #eef1f5;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                }

                .sidebar-card-header h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 14px;
                    font-weight: 750;
                }

                .sidebar-card-header span {
                    display: block;
                    margin-top: 3px;
                    color: #98a2b3;
                    font-size: 10px;
                }

                .sidebar-card-header > svg {
                    color: #98a2b3;
                }

                .status-options {
                    padding: 10px;
                }

                .status-option {
                    width: 100%;
                    padding: 12px 9px;
                    margin-bottom: 5px;
                    border: 1px solid transparent;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-align: left;
                    background: transparent;
                    cursor: pointer;
                    transition: .15s ease;
                }

                .status-option:last-child {
                    margin-bottom: 0;
                }

                .status-option:hover {
                    background: #f8fafc;
                }

                .status-option.active,
                .status-option.selected {
                    border-color: #bbf7d0;
                    background: #f0fdf4;
                }

                .status-option-icon {
                    width: 34px;
                    height: 34px;
                    flex-shrink: 0;
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .status-option-icon.green {
                    color: #059669;
                    background: #dcfce7;
                }

                .status-option-icon.gray {
                    color: #64748b;
                    background: #f1f5f9;
                }

                .status-option-copy {
                    flex: 1;
                }

                .status-option-copy strong {
                    display: block;
                    color: #344054;
                    font-size: 12px;
                }

                .status-option-copy small {
                    display: block;
                    margin-top: 2px;
                    color: #98a2b3;
                    font-size: 10px;
                }

                .radio {
                    width: 17px;
                    height: 17px;
                    border: 1.5px solid #cbd5e1;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .radio span {
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background: #059669;
                }

                /* =====================================================
                   LIVE PREVIEW
                ===================================================== */

                .preview-card .sidebar-card-header {
                    background: #fafbfc;
                }

                .announcement-preview {
                    margin: 14px;
                    overflow: hidden;
                    border: 1px solid #e4e7ec;
                    border-radius: 12px;
                    background: #ffffff;
                }

                .preview-image,
                .preview-image-placeholder {
                    width: 100%;
                    height: 125px;
                }

                .preview-image {
                    background: #f8fafc;
                }

                .preview-image img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                }

                .preview-image-placeholder {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #059669;
                    background: #ecfdf5;
                }

                .preview-content {
                    padding: 13px;
                }

                .preview-category {
                    margin-bottom: 5px;
                    color: #059669;
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: .5px;
                    text-transform: uppercase;
                }

                .preview-content h4 {
                    margin: 0;
                    color: #101828;
                    font-size: 14px;
                    line-height: 1.35;
                    font-weight: 750;
                }

                .preview-content p {
                    margin: 7px 0 12px;
                    color: #667085;
                    font-size: 10px;
                    line-height: 1.55;
                }

                .preview-footer {
                    padding-top: 9px;
                    border-top: 1px solid #eef1f5;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: #059669;
                    font-size: 9px;
                    font-weight: 750;
                }

                /* =====================================================
                   TIP
                ===================================================== */

                .tip-card {
                    padding: 14px;
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    background: #fffbeb;
                    border-color: #fde68a;
                }

                .tip-icon {
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #d97706;
                    background: #fef3c7;
                }

                .tip-card strong {
                    display: block;
                    color: #92400e;
                    font-size: 11px;
                }

                .tip-card p {
                    margin: 3px 0 0;
                    color: #a16207;
                    font-size: 10px;
                    line-height: 1.5;
                }

                /* =====================================================
                   FOOTER
                ===================================================== */

                .form-footer {
                    max-width: 1440px;
                    margin: 20px auto 0;
                    padding: 16px 0;
                    border-top: 1px solid #e4e7ec;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 9px;
                }

                .cancel-button {
                    height: 42px;
                    padding: 0 17px;
                    border: 1px solid #d0d5dd;
                    border-radius: 9px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #344054;
                    background: #ffffff;
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .cancel-button:hover {
                    background: #f9fafb;
                }

                .submit-button {
                    min-width: 190px;
                    height: 42px;
                    padding: 0 17px;
                    border: 0;
                    border-radius: 9px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    color: #ffffff;
                    background: #059669;
                    font-size: 12px;
                    font-weight: 750;
                    cursor: pointer;
                    transition: .15s ease;
                }

                .submit-button:hover:not(:disabled) {
                    background: #047857;
                    transform: translateY(-1px);
                }

                .submit-button:disabled {
                    opacity: .65;
                    cursor: not-allowed;
                }

                .spinner {
                    width: 15px;
                    height: 15px;
                    border: 2px solid rgba(255,255,255,.35);
                    border-top-color: #ffffff;
                    border-radius: 50%;
                    animation: spin .7s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* =====================================================
                   RESPONSIVE
                ===================================================== */

                @media (max-width: 1050px) {

                    .form-layout {
                        grid-template-columns: minmax(0, 1fr) 290px;
                    }

                }

                @media (max-width: 850px) {

                    .announcement-form-page {
                        padding: 20px 15px;
                    }

                    .form-header {
                        flex-direction: column;
                    }

                    .back-button {
                        align-self: flex-start;
                    }

                    .form-layout {
                        grid-template-columns: 1fr;
                    }

                    .form-sidebar {
                        position: static;
                    }

                    .two-columns {
                        grid-template-columns: 1fr;
                    }

                }

                @media (max-width: 600px) {

                    .form-header-main {
                        align-items: flex-start;
                    }

                    .form-header h1 {
                        font-size: 22px;
                    }

                    .header-icon {
                        width: 45px;
                        height: 45px;
                    }

                    .card-header {
                        padding: 17px;
                    }

                    .card-body {
                        padding: 17px;
                    }

                    .form-footer {
                        flex-direction: column-reverse;
                        align-items: stretch;
                    }

                    .cancel-button,
                    .submit-button {
                        width: 100%;
                    }

                    .upload-empty {
                        padding: 20px;
                    }

                }

            `})]})}export{D as default};
