import{r as v,u as y,j as e,H as w,L as m}from"./app-CJlpfYPO.js";import{A as N}from"./AppLayout-WTBEreOn.js";function C({talents:d=[],categories:c=[]}){const[s,g]=v.useState(null),{data:i,setData:r,post:u,processing:p,errors:t,progress:l}=y({title:"",talent_id:"",category_id:"",content:"",thumbnail:null,media:"",tags:"",status:"pending"}),b=a=>{const o=a.target.files&&a.target.files[0];if(!o)return;if(o.size>5*1024*1024){alert("The thumbnail must not be larger than 5MB."),a.target.value="";return}r("thumbnail",o);const h=new FileReader;h.onload=j=>{g(j.target.result)},h.readAsDataURL(o)},f=a=>{a.preventDefault(),u(route("admin.stories.store"),{forceFormData:!0,preserveScroll:!0})},n=d.find(a=>String(a.id)===String(i.talent_id)),x=c.find(a=>String(a.id)===String(i.category_id));return e.jsxs(N,{children:[e.jsx(w,{title:"Create Story"}),e.jsxs("div",{className:"create-story-page",children:[e.jsxs("div",{className:"page-container",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"eyebrow",children:"Story Management"}),e.jsx("h1",{children:"Create New Story"}),e.jsx("p",{children:"Create and publish a new story for your talent community."})]}),e.jsx(m,{href:route("admin.stories.index"),className:"back-button",children:"← Back to Stories"})]}),e.jsx("form",{onSubmit:f,children:e.jsxs("div",{className:"content-grid",children:[e.jsxs("div",{className:"main-column",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Story Details"}),e.jsx("p",{children:"Add the basic information for your story."})]})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"form-group full",children:[e.jsxs("label",{htmlFor:"title",children:["Story Title",e.jsx("span",{children:"*"})]}),e.jsx("input",{id:"title",type:"text",value:i.title,onChange:a=>r("title",a.target.value),placeholder:"Enter story title",className:t.title?"input error":"input"}),t.title&&e.jsx("div",{className:"error-text",children:t.title})]}),e.jsxs("div",{className:"two-columns",children:[e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"talent_id",children:["Talent",e.jsx("span",{children:"*"})]}),e.jsxs("select",{id:"talent_id",value:i.talent_id,onChange:a=>r("talent_id",a.target.value),className:t.talent_id?"input error":"input",children:[e.jsx("option",{value:"",children:"Select talent"}),d.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),t.talent_id&&e.jsx("div",{className:"error-text",children:t.talent_id})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"category_id",children:["Category",e.jsx("span",{children:"*"})]}),e.jsxs("select",{id:"category_id",value:i.category_id,onChange:a=>r("category_id",a.target.value),className:t.category_id?"input error":"input",children:[e.jsx("option",{value:"",children:"Select category"}),c.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),t.category_id&&e.jsx("div",{className:"error-text",children:t.category_id})]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Story Content"}),e.jsx("p",{children:"Write the full story content."})]})}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"content",children:["Content",e.jsx("span",{children:"*"})]}),e.jsx("textarea",{id:"content",value:i.content,onChange:a=>r("content",a.target.value),placeholder:"Write your story here...",className:t.content?"textarea error":"textarea"}),t.content&&e.jsx("div",{className:"error-text",children:t.content})]})})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Media"}),e.jsx("p",{children:"Add a thumbnail and optional media URL."})]})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"thumbnail",children:"Story Thumbnail"}),s&&e.jsx("div",{className:"image-preview",children:e.jsx("img",{src:s,alt:"Thumbnail preview"})}),e.jsxs("div",{className:"upload-box",children:[e.jsx("input",{id:"thumbnail",type:"file",accept:"image/png,image/jpeg,image/webp",onChange:b}),e.jsx("p",{children:"Choose story thumbnail"}),e.jsx("small",{children:"PNG, JPG or WEBP · Maximum 5MB"})]}),t.thumbnail&&e.jsx("div",{className:"error-text",children:t.thumbnail})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"media",children:"Media / Video URL"}),e.jsx("input",{id:"media",type:"url",value:i.media,onChange:a=>r("media",a.target.value),placeholder:"https://youtube.com/...",className:t.media?"input error":"input"}),t.media&&e.jsx("div",{className:"error-text",children:t.media})]})]})]})]}),e.jsxs("div",{className:"sidebar",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Live Preview"}),e.jsx("p",{children:"Preview your story."})]})}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"preview-card",children:[e.jsx("div",{className:"preview-image",children:s?e.jsx("img",{src:s,alt:"Preview"}):e.jsx("div",{className:"placeholder",children:"📷"})}),e.jsxs("div",{className:"preview-body",children:[e.jsx("div",{className:"category-badge",children:x?x.name:"STORY"}),e.jsx("h3",{children:i.title||"Your story title"}),e.jsx("p",{children:i.content||"Your story content will appear here."}),e.jsxs("div",{className:"author",children:[e.jsx("div",{className:"avatar",children:n?n.name.charAt(0).toUpperCase():"T"}),e.jsxs("div",{children:[e.jsx("strong",{children:n?n.name:"Talent"}),e.jsx("small",{children:"Story author"})]})]})]})]})})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Publishing"}),e.jsx("p",{children:"Configure story visibility."})]})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"tags",children:"Tags"}),e.jsx("input",{id:"tags",type:"text",value:i.tags,onChange:a=>r("tags",a.target.value),placeholder:"success, talent, innovation",className:"input"}),e.jsx("small",{className:"hint",children:"Separate tags with commas."})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Status"}),e.jsxs("div",{className:"status-list",children:[e.jsxs("label",{className:"status-option",children:[e.jsx("input",{type:"radio",name:"status",value:"pending",checked:i.status==="pending",onChange:a=>r("status",a.target.value)}),e.jsxs("div",{children:[e.jsx("strong",{children:"Pending"}),e.jsx("small",{children:"Awaiting review"})]})]}),e.jsxs("label",{className:"status-option",children:[e.jsx("input",{type:"radio",name:"status",value:"approved",checked:i.status==="approved",onChange:a=>r("status",a.target.value)}),e.jsxs("div",{children:[e.jsx("strong",{children:"Approved"}),e.jsx("small",{children:"Approved for publication"})]})]}),e.jsxs("label",{className:"status-option",children:[e.jsx("input",{type:"radio",name:"status",value:"published",checked:i.status==="published",onChange:a=>r("status",a.target.value)}),e.jsxs("div",{children:[e.jsx("strong",{children:"Published"}),e.jsx("small",{children:"Visible to users"})]})]}),e.jsxs("label",{className:"status-option",children:[e.jsx("input",{type:"radio",name:"status",value:"rejected",checked:i.status==="rejected",onChange:a=>r("status",a.target.value)}),e.jsxs("div",{children:[e.jsx("strong",{children:"Rejected"}),e.jsx("small",{children:"Not approved"})]})]})]})]})]})]}),e.jsxs("div",{className:"card actions-card",children:[e.jsx(m,{href:route("admin.stories.index"),className:"cancel-button",children:"Cancel"}),e.jsx("button",{type:"submit",className:"submit-button",disabled:p,children:p?"Creating...":"Create Story"}),l&&e.jsxs("div",{className:"progress-container",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{children:"Uploading..."}),e.jsxs("span",{children:[l.percentage,"%"]})]}),e.jsx("div",{className:"progress-track",children:e.jsx("div",{className:"progress-bar",style:{width:l.percentage+"%"}})})]})]})]})]})})]}),e.jsx("style",{children:`
                    .create-story-page {
                        min-height: 100vh;
                        background: #f8fafc;
                        color: #0f172a;
                        padding: 30px;
                    }

                    .page-container {
                        max-width: 1400px;
                        margin: auto;
                    }

                    .page-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        gap: 20px;
                        margin-bottom: 28px;
                    }

                    .eyebrow {
                        color: #059669;
                        font-size: 12px;
                        font-weight: 800;
                        text-transform: uppercase;
                        letter-spacing: .08em;
                        margin-bottom: 5px;
                    }

                    .page-header h1 {
                        margin: 0;
                        font-size: 30px;
                        font-weight: 800;
                        letter-spacing: -.03em;
                    }

                    .page-header p {
                        margin: 7px 0 0;
                        color: #64748b;
                        font-size: 14px;
                    }

                    .back-button {
                        display: inline-flex;
                        align-items: center;
                        height: 42px;
                        padding: 0 15px;
                        border: 1px solid #e2e8f0;
                        border-radius: 10px;
                        background: white;
                        color: #334155;
                        text-decoration: none;
                        font-size: 13px;
                        font-weight: 700;
                    }

                    .content-grid {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr) 360px;
                        gap: 24px;
                        align-items: start;
                    }

                    .main-column,
                    .sidebar {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }

                    .card {
                        background: white;
                        border: 1px solid #e2e8f0;
                        border-radius: 16px;
                        overflow: hidden;
                        box-shadow: 0 2px 8px rgba(15, 23, 42, .035);
                    }

                    .card-header {
                        padding: 20px 22px;
                        border-bottom: 1px solid #e2e8f0;
                    }

                    .card-header h2 {
                        margin: 0;
                        font-size: 16px;
                        font-weight: 800;
                    }

                    .card-header p {
                        margin: 4px 0 0;
                        color: #64748b;
                        font-size: 12px;
                    }

                    .card-body {
                        padding: 22px;
                    }

                    .two-columns {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 18px;
                    }

                    .form-group {
                        margin-bottom: 20px;
                    }

                    .form-group:last-child {
                        margin-bottom: 0;
                    }

                    .form-group.full {
                        width: 100%;
                    }

                    label {
                        display: block;
                        margin-bottom: 8px;
                        color: #334155;
                        font-size: 13px;
                        font-weight: 700;
                    }

                    label span {
                        color: #dc2626;
                        margin-left: 3px;
                    }

                    .input,
                    .textarea {
                        width: 100%;
                        box-sizing: border-box;
                        border: 1px solid #e2e8f0;
                        border-radius: 10px;
                        background: white;
                        color: #0f172a;
                        font-family: inherit;
                        font-size: 14px;
                        outline: none;
                        transition: .2s;
                    }

                    .input {
                        height: 44px;
                        padding: 0 13px;
                    }

                    .textarea {
                        min-height: 300px;
                        padding: 13px;
                        resize: vertical;
                        line-height: 1.7;
                    }

                    .input:focus,
                    .textarea:focus {
                        border-color: #059669;
                        box-shadow: 0 0 0 3px rgba(5, 150, 105, .08);
                    }

                    .input.error,
                    .textarea.error {
                        border-color: #ef4444;
                    }

                    .error-text {
                        color: #dc2626;
                        font-size: 12px;
                        margin-top: 6px;
                    }

                    .hint {
                        display: block;
                        margin-top: 6px;
                        color: #64748b;
                        font-size: 11px;
                    }

                    .upload-box {
                        border: 1.5px dashed #cbd5e1;
                        border-radius: 12px;
                        padding: 30px 20px;
                        text-align: center;
                        background: #f8fafc;
                    }

                    .upload-box input {
                        width: 100%;
                        margin-bottom: 12px;
                    }

                    .upload-box p {
                        margin: 0;
                        font-size: 13px;
                        font-weight: 700;
                        color: #334155;
                    }

                    .upload-box small {
                        display: block;
                        margin-top: 5px;
                        color: #64748b;
                    }

                    .image-preview {
                        width: 100%;
                        height: 220px;
                        border-radius: 12px;
                        overflow: hidden;
                        margin-bottom: 12px;
                        background: #f1f5f9;
                    }

                    .image-preview img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .preview-card {
                        border: 1px solid #e2e8f0;
                        border-radius: 12px;
                        overflow: hidden;
                    }

                    .preview-image {
                        height: 180px;
                        background: #ecfdf5;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                    }

                    .preview-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .placeholder {
                        font-size: 40px;
                        opacity: .4;
                    }

                    .preview-body {
                        padding: 16px;
                    }

                    .category-badge {
                        display: inline-block;
                        padding: 5px 8px;
                        border-radius: 6px;
                        background: #ecfdf5;
                        color: #047857;
                        font-size: 10px;
                        font-weight: 800;
                        text-transform: uppercase;
                    }

                    .preview-body h3 {
                        margin: 10px 0 7px;
                        font-size: 17px;
                        line-height: 1.35;
                    }

                    .preview-body p {
                        color: #64748b;
                        font-size: 12px;
                        line-height: 1.6;
                        margin: 0;
                        display: -webkit-box;
                        -webkit-line-clamp: 5;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .author {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        margin-top: 15px;
                        padding-top: 13px;
                        border-top: 1px solid #f1f5f9;
                    }

                    .avatar {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: #ecfdf5;
                        color: #047857;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        font-weight: 800;
                    }

                    .author strong {
                        display: block;
                        font-size: 12px;
                    }

                    .author small {
                        display: block;
                        color: #64748b;
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    .status-list {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                    }

                    .status-option {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 11px;
                        border: 1px solid #e2e8f0;
                        border-radius: 10px;
                        cursor: pointer;
                        margin: 0;
                    }

                    .status-option:hover {
                        background: #f8fafc;
                    }

                    .status-option input {
                        accent-color: #059669;
                    }

                    .status-option strong {
                        display: block;
                        font-size: 12px;
                    }

                    .status-option small {
                        display: block;
                        color: #64748b;
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    .actions-card {
                        padding: 18px;
                        display: flex;
                        gap: 10px;
                    }

                    .cancel-button,
                    .submit-button {
                        height: 43px;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-family: inherit;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .cancel-button {
                        flex: 1;
                        border: 1px solid #e2e8f0;
                        background: white;
                        color: #475569;
                        text-decoration: none;
                    }

                    .submit-button {
                        flex: 1.3;
                        border: 0;
                        background: #059669;
                        color: white;
                    }

                    .submit-button:hover {
                        background: #047857;
                    }

                    .submit-button:disabled {
                        opacity: .6;
                        cursor: not-allowed;
                    }

                    .progress-container {
                        position: absolute;
                        margin-top: 60px;
                        left: 18px;
                        right: 18px;
                    }

                    .progress-info {
                        display: flex;
                        justify-content: space-between;
                        color: #64748b;
                        font-size: 11px;
                        margin-bottom: 5px;
                    }

                    .progress-track {
                        height: 5px;
                        background: #e2e8f0;
                        border-radius: 99px;
                        overflow: hidden;
                    }

                    .progress-bar {
                        height: 100%;
                        background: #059669;
                    }

                    @media (max-width: 1000px) {
                        .content-grid {
                            grid-template-columns: 1fr;
                        }

                        .sidebar {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            align-items: start;
                        }

                        .actions-card {
                            grid-column: 1 / -1;
                        }
                    }

                    @media (max-width: 700px) {
                        .create-story-page {
                            padding: 18px 14px;
                        }

                        .page-header {
                            flex-direction: column;
                        }

                        .back-button {
                            width: 100%;
                            justify-content: center;
                        }

                        .two-columns {
                            grid-template-columns: 1fr;
                        }

                        .sidebar {
                            display: flex;
                        }

                        .page-header h1 {
                            font-size: 25px;
                        }

                        .card-body,
                        .card-header {
                            padding: 17px;
                        }

                        .actions-card {
                            flex-direction: column;
                        }
                    }
                `})]})]})}export{C as default};
