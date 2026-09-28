import{r as N,u as S,j as e,H as z,L as b}from"./app-B2SIh33N.js";import{A as C}from"./AppLayout-CkTPU_ZW.js";function c({name:l,size:n=18,strokeWidth:s=1.8}){const p={width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:s,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},i={arrowLeft:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"m11 18-6-6 6-6"})]}),image:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),e.jsx("circle",{cx:"8.5",cy:"9.5",r:"1.5"}),e.jsx("path",{d:"m21 15-5-5-4 4-3-3-5 5"})]}),tag:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z"}),e.jsx("circle",{cx:"7.5",cy:"7.5",r:"1"})]}),upload:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 15V3"}),e.jsx("path",{d:"m7 8 5-5 5 5"}),e.jsx("path",{d:"M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"})]}),close:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"m6 6 12 12"}),e.jsx("path",{d:"m18 6-12 12"})]})};return e.jsx("svg",{...p,children:i[l]||i.image})}const v=[{key:"pending",label:"Pending",hint:"Awaiting review"},{key:"approved",label:"Approved",hint:"Cleared to publish"},{key:"published",label:"Published",hint:"Visible to users"},{key:"rejected",label:"Rejected",hint:"Not approved"}];function _({talents:l=[],categories:n=[]}){var u;const[s,p]=N.useState(null),{data:i,setData:r,post:f,processing:h,errors:t,progress:x}=S({title:"",talent_id:"",category_id:"",content:"",thumbnail:null,media:"",tags:"",status:"pending"}),j=a=>{const d=a.target.files&&a.target.files[0];if(!d)return;if(d.size>5*1024*1024){alert("The thumbnail must not be larger than 5MB."),a.target.value="";return}r("thumbnail",d);const g=new FileReader;g.onload=k=>p(k.target.result),g.readAsDataURL(d)},y=a=>{a.preventDefault(),f(route("admin.stories.store"),{forceFormData:!0,preserveScroll:!0})},o=l.find(a=>String(a.id)===String(i.talent_id)),m=n.find(a=>String(a.id)===String(i.category_id)),w=i.content.trim()?i.content.trim().split(/\s+/).length:0;return e.jsxs(C,{children:[e.jsx(z,{title:"Create Story"}),e.jsxs("div",{"data-h-scope":"story-create",className:"story-create",children:[e.jsxs("form",{onSubmit:y,children:[e.jsx("header",{className:"page-header",children:e.jsxs("div",{children:[e.jsxs(b,{href:route("admin.stories.index"),className:"back-link",children:[e.jsx(c,{name:"arrowLeft",size:14}),"All stories"]}),e.jsx("h1",{children:"Write a new story"}),e.jsx("p",{className:"dek",children:"Tell your talent community what happened. It goes through review before anyone else sees it."})]})}),e.jsxs("div",{className:"content-grid",children:[e.jsxs("div",{className:"main-column",children:[e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h2",{children:"Details"}),e.jsx("p",{children:"Who this story is about, and what it's filed under."})]}),e.jsxs("div",{className:"panel-body",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"title",children:["Title ",e.jsx("span",{children:"required"})]}),e.jsx("input",{id:"title",type:"text",value:i.title,onChange:a=>r("title",a.target.value),placeholder:"e.g. From apprentice to lead designer",className:t.title?"input has-error":"input"}),t.title&&e.jsx("div",{className:"error-text",children:t.title})]}),e.jsxs("div",{className:"field-row",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"talent_id",children:["Talent ",e.jsx("span",{children:"required"})]}),e.jsxs("select",{id:"talent_id",value:i.talent_id,onChange:a=>r("talent_id",a.target.value),className:t.talent_id?"input has-error":"input",children:[e.jsx("option",{value:"",children:"Select talent"}),l.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),t.talent_id&&e.jsx("div",{className:"error-text",children:t.talent_id})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"category_id",children:["Category ",e.jsx("span",{children:"required"})]}),e.jsxs("select",{id:"category_id",value:i.category_id,onChange:a=>r("category_id",a.target.value),className:t.category_id?"input has-error":"input",children:[e.jsx("option",{value:"",children:"Select category"}),n.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),t.category_id&&e.jsx("div",{className:"error-text",children:t.category_id})]})]})]})]}),e.jsxs("section",{className:"panel",children:[e.jsx("div",{className:"panel-head",children:e.jsxs("div",{className:"panel-head-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Story"}),e.jsx("p",{children:"Write the full story, in the talent's voice."})]}),e.jsxs("span",{className:"word-count",children:[w," words"]})]})}),e.jsx("div",{className:"panel-body",children:e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"content",children:["Content ",e.jsx("span",{children:"required"})]}),e.jsx("textarea",{id:"content",value:i.content,onChange:a=>r("content",a.target.value),placeholder:"Start writing...",className:t.content?"textarea has-error":"textarea"}),t.content&&e.jsx("div",{className:"error-text",children:t.content})]})})]}),e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h2",{children:"Media"}),e.jsx("p",{children:"A thumbnail and an optional link to a video."})]}),e.jsxs("div",{className:"panel-body",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"thumbnail",children:"Thumbnail"}),e.jsxs("label",{className:"upload-box",htmlFor:"thumbnail",children:[s?e.jsx("img",{src:s,alt:"Thumbnail preview",className:"upload-preview"}):e.jsxs(e.Fragment,{children:[e.jsx(c,{name:"upload",size:20}),e.jsx("span",{children:"Choose an image"}),e.jsx("small",{children:"PNG, JPG or WEBP, up to 5MB"})]}),e.jsx("input",{id:"thumbnail",type:"file",accept:"image/png,image/jpeg,image/webp",onChange:j})]}),t.thumbnail&&e.jsx("div",{className:"error-text",children:t.thumbnail})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"media",children:"Video URL"}),e.jsx("input",{id:"media",type:"url",value:i.media,onChange:a=>r("media",a.target.value),placeholder:"https://youtube.com/…",className:t.media?"input has-error":"input"}),t.media&&e.jsx("div",{className:"error-text",children:t.media})]})]})]})]}),e.jsxs("div",{className:"sidebar",children:[e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h2",{children:"Preview"}),e.jsx("p",{children:"How this appears in the story index."})]}),e.jsx("div",{className:"panel-body",children:e.jsxs("div",{className:"preview-card",children:[e.jsx("div",{className:"preview-thumb",children:s?e.jsx("img",{src:s,alt:""}):e.jsx(c,{name:"image",size:22})}),e.jsxs("div",{className:"preview-top",children:[e.jsx("span",{className:"preview-title",children:i.title||"Your story title"}),e.jsxs("span",{className:"status-pill "+i.status,children:[e.jsx("span",{className:"status-dot"}),(u=v.find(a=>a.key===i.status))==null?void 0:u.label]})]}),e.jsx("p",{className:"preview-excerpt",children:i.content||"Story content will appear here as you write it."}),e.jsxs("div",{className:"preview-meta",children:[e.jsxs("span",{className:"byline",children:[e.jsx("span",{className:"byline-avatar",children:o?o.name.charAt(0).toUpperCase():"T"}),"By ",o?o.name:"Talent"]}),e.jsxs("span",{className:"preview-category",children:[e.jsx(c,{name:"tag",size:12}),m?m.name:"Uncategorized"]})]})]})})]}),e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h2",{children:"Publishing"}),e.jsx("p",{children:"Tags and review status."})]}),e.jsxs("div",{className:"panel-body",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"tags",children:"Tags"}),e.jsx("input",{id:"tags",type:"text",value:i.tags,onChange:a=>r("tags",a.target.value),placeholder:"success, talent, innovation",className:"input"}),e.jsx("small",{className:"hint",children:"Separate tags with commas."})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Status"}),e.jsx("div",{className:"status-grid",children:v.map(a=>e.jsxs("button",{type:"button",className:"status-option "+a.key+(i.status===a.key?" is-active":""),onClick:()=>r("status",a.key),children:[e.jsx("span",{className:"status-dot"}),e.jsxs("span",{children:[e.jsx("strong",{children:a.label}),e.jsx("small",{children:a.hint})]})]},a.key))})]})]})]}),e.jsxs("section",{className:"panel actions-panel",children:[e.jsx(b,{href:route("admin.stories.index"),className:"btn btn-secondary",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:h,children:h?"Creating…":"Create story"}),x&&e.jsxs("div",{className:"progress",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{children:"Uploading"}),e.jsxs("span",{children:[x.percentage,"%"]})]}),e.jsx("div",{className:"progress-track",children:e.jsx("div",{className:"progress-bar",style:{width:x.percentage+"%"}})})]})]})]})]})]}),e.jsx("style",{children:`

                    [data-h-scope="story-create"] {
                        --ink: #1d1d1f;
                        --ink-soft: #6e6e73;
                        --ink-faint: #a1a1a6;
                        --paper: #ffffff;
                        --surface: #ffffff;
                        --line: #e5e5e7;
                        --brand: #48d597;
                        --brand-ink: #157a4e;
                        --brand-wash: #eaf9f1;
                        --amber: #b8790f;
                        --amber-wash: #fbf1de;
                        --clay: #b5433a;
                        --clay-wash: #faeae8;

                        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
                        color: var(--ink);
                    }

                    [data-h-scope="story-create"] * {
                        box-sizing: border-box;
                    }

                    .story-create {
                        background: var(--paper);
                        min-height: 100vh;
                        padding: 32px clamp(18px, 4vw, 48px) 64px;
                    }

                    .story-create form {
                        max-width: 1080px;
                        margin: 0 auto;
                    }

                    /* -------------------------------------------------------
                       HEADER
                    ------------------------------------------------------- */

                    .page-header {
                        border-bottom: 2px solid var(--ink);
                        padding-bottom: 20px;
                        margin-bottom: 24px;
                    }

                    .back-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                        font-size: 12px;
                        font-weight: 600;
                        color: var(--ink-soft);
                        text-decoration: none;
                        margin-bottom: 10px;
                    }

                    .back-link:hover {
                        color: var(--brand-ink);
                    }

                    .page-header h1 {
                        margin: 0;
                        font-weight: 700;
                        font-size: clamp(20px, 2.4vw, 26px);
                        letter-spacing: -0.01em;
                    }

                    .dek {
                        margin: 6px 0 0;
                        font-size: 12.5px;
                        color: var(--ink-soft);
                        max-width: 52ch;
                    }

                    /* -------------------------------------------------------
                       GRID
                    ------------------------------------------------------- */

                    .content-grid {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr) 320px;
                        gap: 18px;
                        align-items: start;
                    }

                    .main-column,
                    .sidebar {
                        display: flex;
                        flex-direction: column;
                        gap: 14px;
                    }

                    /* -------------------------------------------------------
                       PANEL
                    ------------------------------------------------------- */

                    .panel {
                        border: 1px solid var(--line);
                        border-radius: 10px;
                        background: var(--surface);
                    }

                    .panel-head {
                        padding: 14px 16px;
                        border-bottom: 1px solid var(--line);
                    }

                    .panel-head-row {
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        gap: 10px;
                    }

                    .panel-head h2 {
                        margin: 0;
                        font-size: 13px;
                        font-weight: 600;
                    }

                    .panel-head p {
                        margin: 3px 0 0;
                        font-size: 11.5px;
                        color: var(--ink-soft);
                    }

                    .word-count {
                        flex-shrink: 0;
                        font-size: 11px;
                        color: var(--ink-faint);
                        white-space: nowrap;
                        margin-top: 1px;
                    }

                    .panel-body {
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        gap: 14px;
                    }

                    /* -------------------------------------------------------
                       FIELDS
                    ------------------------------------------------------- */

                    .field-row {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 12px;
                    }

                    .field label {
                        display: block;
                        margin-bottom: 6px;
                        font-size: 12px;
                        font-weight: 600;
                        color: var(--ink);
                    }

                    .field label span {
                        color: var(--ink-faint);
                        font-weight: 500;
                        font-size: 10.5px;
                        margin-left: 4px;
                    }

                    .input,
                    .textarea {
                        width: 100%;
                        border: 1px solid var(--line);
                        border-radius: 8px;
                        background: var(--surface);
                        color: var(--ink);
                        font-family: inherit;
                        font-size: 13px;
                        outline: none;
                        transition: border-color 0.12s ease, box-shadow 0.12s ease;
                    }

                    .input {
                        height: 36px;
                        padding: 0 11px;
                    }

                    .textarea {
                        min-height: 220px;
                        padding: 11px;
                        resize: vertical;
                        line-height: 1.6;
                    }

                    .input:focus,
                    .textarea:focus {
                        border-color: var(--brand);
                        box-shadow: 0 0 0 3px var(--brand-wash);
                    }

                    .input.has-error,
                    .textarea.has-error {
                        border-color: var(--clay);
                    }

                    .error-text {
                        color: var(--clay);
                        font-size: 11px;
                        margin-top: 5px;
                    }

                    .hint {
                        display: block;
                        margin-top: 5px;
                        color: var(--ink-faint);
                        font-size: 10.5px;
                    }

                    /* -------------------------------------------------------
                       UPLOAD
                    ------------------------------------------------------- */

                    .upload-box {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 4px;
                        min-height: 120px;
                        border: 1.5px dashed var(--line);
                        border-radius: 9px;
                        color: var(--ink-soft);
                        font-size: 12px;
                        cursor: pointer;
                        overflow: hidden;
                        position: relative;
                    }

                    .upload-box:hover {
                        border-color: var(--brand);
                        color: var(--brand-ink);
                    }

                    .upload-box small {
                        color: var(--ink-faint);
                        font-size: 10.5px;
                    }

                    .upload-box input {
                        position: absolute;
                        inset: 0;
                        opacity: 0;
                        cursor: pointer;
                    }

                    .upload-preview {
                        position: absolute;
                        inset: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    /* -------------------------------------------------------
                       PREVIEW CARD (mirrors the story index card)
                    ------------------------------------------------------- */

                    .preview-card {
                        border: 1px solid var(--line);
                        border-radius: 10px;
                        overflow: hidden;
                    }

                    .preview-thumb {
                        height: 100px;
                        background: var(--brand-wash);
                        color: var(--brand-ink);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                    }

                    .preview-thumb img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .preview-top {
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        gap: 8px;
                        padding: 12px 14px 0;
                    }

                    .preview-title {
                        font-size: 13px;
                        font-weight: 600;
                        line-height: 1.35;
                    }

                    .preview-excerpt {
                        margin: 5px 14px 10px;
                        font-size: 11.5px;
                        color: var(--ink-soft);
                        line-height: 1.5;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .preview-meta {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 8px;
                        padding: 10px 14px;
                        border-top: 1px solid var(--line);
                    }

                    .byline {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        font-size: 11px;
                        font-weight: 600;
                        color: var(--ink-soft);
                    }

                    .byline-avatar {
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        background: var(--brand-wash);
                        color: var(--brand-ink);
                        font-size: 9px;
                        font-weight: 800;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .preview-category {
                        display: inline-flex;
                        align-items: center;
                        gap: 4px;
                        font-size: 10.5px;
                        color: var(--ink-faint);
                    }

                    /* -------------------------------------------------------
                       STATUS PILL (shared look with the index)
                    ------------------------------------------------------- */

                    .status-pill {
                        flex-shrink: 0;
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                        padding: 3px 8px;
                        border-radius: 999px;
                        font-size: 9.5px;
                        font-weight: 700;
                        white-space: nowrap;
                    }

                    .status-dot {
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                    }

                    .status-pill.approved,
                    .status-pill.published {
                        color: var(--brand-ink);
                        background: var(--brand-wash);
                    }

                    .status-pill.approved .status-dot,
                    .status-pill.published .status-dot {
                        background: var(--brand);
                    }

                    .status-pill.pending {
                        color: var(--amber);
                        background: var(--amber-wash);
                    }

                    .status-pill.pending .status-dot {
                        background: var(--amber);
                    }

                    .status-pill.rejected {
                        color: var(--clay);
                        background: var(--clay-wash);
                    }

                    .status-pill.rejected .status-dot {
                        background: var(--clay);
                    }

                    /* -------------------------------------------------------
                       STATUS SELECTOR
                    ------------------------------------------------------- */

                    .status-grid {
                        display: flex;
                        flex-direction: column;
                        gap: 6px;
                    }

                    .status-option {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        padding: 9px 10px;
                        border: 1px solid var(--line);
                        border-radius: 8px;
                        background: var(--surface);
                        font-family: inherit;
                        text-align: left;
                        cursor: pointer;
                    }

                    .status-option:hover {
                        border-color: var(--ink-faint);
                    }

                    .status-option strong {
                        display: block;
                        font-size: 12px;
                        font-weight: 600;
                        color: var(--ink);
                    }

                    .status-option small {
                        display: block;
                        font-size: 10.5px;
                        color: var(--ink-soft);
                        margin-top: 1px;
                    }

                    .status-option .status-dot {
                        width: 7px;
                        height: 7px;
                        background: var(--ink-faint);
                        flex-shrink: 0;
                    }

                    .status-option.is-active {
                        border-color: var(--ink);
                        background: var(--paper);
                    }

                    .status-option.pending.is-active .status-dot { background: var(--amber); }
                    .status-option.approved.is-active .status-dot,
                    .status-option.published.is-active .status-dot { background: var(--brand); }
                    .status-option.rejected.is-active .status-dot { background: var(--clay); }

                    /* -------------------------------------------------------
                       ACTIONS
                    ------------------------------------------------------- */

                    .actions-panel {
                        padding: 14px;
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                    }

                    .btn {
                        height: 36px;
                        border-radius: 7px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-family: inherit;
                        font-size: 12.5px;
                        font-weight: 600;
                        cursor: pointer;
                        text-decoration: none;
                        border: 1.5px solid transparent;
                    }

                    .btn-secondary {
                        border-color: var(--line);
                        background: var(--surface);
                        color: var(--ink);
                    }

                    .btn-secondary:hover {
                        border-color: var(--ink-faint);
                    }

                    .btn-primary {
                        background: var(--ink);
                        color: #fff;
                        border-color: var(--ink);
                    }

                    .btn-primary:hover {
                        background: var(--brand-ink);
                        border-color: var(--brand-ink);
                    }

                    .btn-primary:disabled {
                        opacity: 0.55;
                        cursor: not-allowed;
                    }

                    .progress {
                        margin-top: 2px;
                    }

                    .progress-info {
                        display: flex;
                        justify-content: space-between;
                        font-size: 10.5px;
                        color: var(--ink-soft);
                        margin-bottom: 4px;
                    }

                    .progress-track {
                        height: 4px;
                        background: var(--line);
                        border-radius: 99px;
                        overflow: hidden;
                    }

                    .progress-bar {
                        height: 100%;
                        background: var(--brand);
                    }

                    /* -------------------------------------------------------
                       RESPONSIVE
                    ------------------------------------------------------- */

                    @media (max-width: 900px) {

                        .content-grid {
                            grid-template-columns: 1fr;
                        }

                        .sidebar {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            align-items: start;
                        }

                        .actions-panel {
                            grid-column: 1 / -1;
                            flex-direction: row;
                        }

                        .actions-panel .btn {
                            flex: 1;
                        }
                    }

                    @media (max-width: 620px) {

                        .story-create {
                            padding: 22px 14px 48px;
                        }

                        .field-row {
                            grid-template-columns: 1fr;
                        }

                        .sidebar {
                            display: flex;
                        }

                        .actions-panel {
                            flex-direction: column;
                        }
                    }

                `})]})]})}export{_ as default};
