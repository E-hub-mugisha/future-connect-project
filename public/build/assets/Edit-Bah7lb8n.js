import{r as j,u as F,j as e,H as A,L as w}from"./app-B2SIh33N.js";import{A as E}from"./AppLayout-CkTPU_ZW.js";function d({name:a,size:s=18,strokeWidth:c=1.8}){const x={width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:c,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},l={arrowLeft:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"m11 18-6-6 6-6"})]}),image:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),e.jsx("circle",{cx:"8.5",cy:"9.5",r:"1.5"}),e.jsx("path",{d:"m21 15-5-5-4 4-3-3-5 5"})]}),tag:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z"}),e.jsx("circle",{cx:"7.5",cy:"7.5",r:"1"})]}),upload:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 15V3"}),e.jsx("path",{d:"m7 8 5-5 5 5"}),e.jsx("path",{d:"M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"})]}),save:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M5 3h12l3 3v15H4V3Z"}),e.jsx("path",{d:"M8 3v6h8V3"}),e.jsx("path",{d:"M8 21v-7h8v7"})]})};return e.jsx("svg",{...x,children:l[a]||l.image})}const k=[{key:"pending",label:"Pending",hint:"Awaiting review"},{key:"approved",label:"Approved",hint:"Cleared to publish"},{key:"published",label:"Published",hint:"Visible to users"},{key:"rejected",label:"Rejected",hint:"Not approved"}];function L(a){if(!a)return"";const s=String(a);return/^https?:\/\//i.test(s)||s.charAt(0)==="/"?s:"/"+s}function D({story:a,talents:s=[],categories:c=[]}){var g;const x=L(a==null?void 0:a.thumbnail),[l,N]=j.useState(x||null),[h,y]=j.useState(""),{data:n,setData:r,put:S,processing:m,errors:t}=F({title:(a==null?void 0:a.title)??"",talent_id:(a==null?void 0:a.talent_id)??"",category_id:(a==null?void 0:a.category_id)??"",content:(a==null?void 0:a.content)??"",thumbnail:null,media:(a==null?void 0:a.media)??"",tags:(a==null?void 0:a.tags)??"",status:(a==null?void 0:a.status)??"pending"}),z=i=>{var v;const o=(v=i.target.files)==null?void 0:v[0];if(!o||!o.type.startsWith("image/"))return;r("thumbnail",o),y(o.name);const b=new FileReader;b.onload=C=>{var f;return N(((f=C.target)==null?void 0:f.result)||null)},b.readAsDataURL(o)},T=i=>{i.preventDefault(),S(route("admin.stories.update",a.id),{forceFormData:!0,preserveScroll:!0})},p=s.find(i=>String(i.id)===String(n.talent_id)),u=c.find(i=>String(i.id)===String(n.category_id)),_=n.content.trim()?n.content.trim().split(/\s+/).length:0;return e.jsxs(E,{children:[e.jsx(A,{title:"Edit Story - "+((a==null?void 0:a.title)||"")}),e.jsxs("div",{"data-h-scope":"story-edit",className:"story-edit",children:[e.jsxs("form",{onSubmit:T,children:[e.jsx("header",{className:"page-header",children:e.jsxs("div",{children:[e.jsxs(w,{href:route("admin.stories.index"),className:"back-link",children:[e.jsx(d,{name:"arrowLeft",size:14}),"All stories"]}),e.jsxs("div",{className:"title-row",children:[e.jsx("h1",{children:(a==null?void 0:a.title)||"Edit story"}),e.jsx("span",{className:"editing-tag",children:"Editing"})]}),e.jsxs("p",{className:"dek",children:["Story #",a==null?void 0:a.id," — update the details below and save when you're ready."]})]})}),e.jsxs("div",{className:"content-grid",children:[e.jsxs("div",{className:"main-column",children:[e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h2",{children:"Details"}),e.jsx("p",{children:"Who this story is about, and what it's filed under."})]}),e.jsxs("div",{className:"panel-body",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"title",children:["Title ",e.jsx("span",{children:"required"})]}),e.jsx("input",{id:"title",type:"text",value:n.title,onChange:i=>r("title",i.target.value),placeholder:"Enter story title",className:t.title?"input has-error":"input"}),t.title&&e.jsx("div",{className:"error-text",children:t.title})]}),e.jsxs("div",{className:"field-row",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"talent_id",children:["Talent ",e.jsx("span",{children:"required"})]}),e.jsxs("select",{id:"talent_id",value:n.talent_id,onChange:i=>r("talent_id",i.target.value),className:t.talent_id?"input has-error":"input",children:[e.jsx("option",{value:"",children:"Select talent"}),s.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]}),t.talent_id&&e.jsx("div",{className:"error-text",children:t.talent_id})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"category_id",children:["Category ",e.jsx("span",{children:"required"})]}),e.jsxs("select",{id:"category_id",value:n.category_id,onChange:i=>r("category_id",i.target.value),className:t.category_id?"input has-error":"input",children:[e.jsx("option",{value:"",children:"Select category"}),c.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]}),t.category_id&&e.jsx("div",{className:"error-text",children:t.category_id})]})]})]})]}),e.jsxs("section",{className:"panel",children:[e.jsx("div",{className:"panel-head",children:e.jsxs("div",{className:"panel-head-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Story"}),e.jsx("p",{children:"Keep it clear, engaging and easy to read."})]}),e.jsxs("span",{className:"word-count",children:[_," words"]})]})}),e.jsx("div",{className:"panel-body",children:e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"content",children:["Content ",e.jsx("span",{children:"required"})]}),e.jsx("textarea",{id:"content",value:n.content,onChange:i=>r("content",i.target.value),placeholder:"Write the full story content...",className:t.content?"textarea has-error":"textarea"}),t.content&&e.jsx("div",{className:"error-text",children:t.content})]})})]}),e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h2",{children:"Media"}),e.jsx("p",{children:"The story thumbnail and an optional video link."})]}),e.jsxs("div",{className:"panel-body",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Thumbnail"}),e.jsx("div",{className:"thumb-preview",children:l?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:l,alt:"Story thumbnail"}),e.jsx("span",{className:"thumb-tag",children:h?"New thumbnail":"Current thumbnail"})]}):e.jsxs("div",{className:"thumb-empty",children:[e.jsx(d,{name:"image",size:22}),e.jsx("span",{children:"No thumbnail yet"})]})}),e.jsxs("label",{className:"upload-box",children:[e.jsx(d,{name:"upload",size:16}),e.jsx("span",{children:h||"Replace thumbnail"}),e.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/webp",onChange:z})]}),t.thumbnail&&e.jsx("div",{className:"error-text",children:t.thumbnail})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"media",children:"Video URL"}),e.jsx("input",{id:"media",type:"url",value:n.media,onChange:i=>r("media",i.target.value),placeholder:"https://youtube.com/…",className:t.media?"input has-error":"input"}),e.jsx("small",{className:"hint",children:"Optional YouTube or external video link."}),t.media&&e.jsx("div",{className:"error-text",children:t.media})]})]})]})]}),e.jsxs("div",{className:"sidebar",children:[e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h2",{children:"Preview"}),e.jsx("p",{children:"How this appears in the story index."})]}),e.jsx("div",{className:"panel-body",children:e.jsxs("div",{className:"preview-card",children:[e.jsx("div",{className:"preview-thumb",children:l?e.jsx("img",{src:l,alt:""}):e.jsx(d,{name:"image",size:22})}),e.jsxs("div",{className:"preview-top",children:[e.jsx("span",{className:"preview-title",children:n.title||"Story title"}),e.jsxs("span",{className:"status-pill "+n.status,children:[e.jsx("span",{className:"status-dot"}),(g=k.find(i=>i.key===n.status))==null?void 0:g.label]})]}),e.jsx("p",{className:"preview-excerpt",children:n.content||"Story content will appear here."}),e.jsxs("div",{className:"preview-meta",children:[e.jsxs("span",{className:"byline",children:[e.jsx("span",{className:"byline-avatar",children:p?p.name.charAt(0).toUpperCase():"T"}),"By ",p?p.name:"Talent"]}),e.jsxs("span",{className:"preview-category",children:[e.jsx(d,{name:"tag",size:12}),u?u.name:"Uncategorized"]})]})]})})]}),e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h2",{children:"Publishing"}),e.jsx("p",{children:"Tags and review status."})]}),e.jsxs("div",{className:"panel-body",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"tags",children:"Tags"}),e.jsx("input",{id:"tags",type:"text",value:n.tags,onChange:i=>r("tags",i.target.value),placeholder:"motivation, art, music",className:"input"}),e.jsx("small",{className:"hint",children:"Separate tags with commas."}),t.tags&&e.jsx("div",{className:"error-text",children:t.tags})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Status"}),e.jsx("div",{className:"status-grid",children:k.map(i=>e.jsxs("button",{type:"button",className:"status-option "+i.key+(n.status===i.key?" is-active":""),onClick:()=>r("status",i.key),children:[e.jsx("span",{className:"status-dot"}),e.jsxs("span",{children:[e.jsx("strong",{children:i.label}),e.jsx("small",{children:i.hint})]})]},i.key))}),t.status&&e.jsx("div",{className:"error-text",children:t.status})]})]})]}),e.jsxs("section",{className:"panel actions-panel",children:[e.jsxs("p",{className:"footer-note",children:["Changes save to story #",a==null?void 0:a.id,"."]}),e.jsxs("div",{className:"actions-row",children:[e.jsx(w,{href:route("admin.stories.index"),className:"btn btn-secondary",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:m,children:m?"Saving…":e.jsxs(e.Fragment,{children:[e.jsx(d,{name:"save",size:14}),"Update story"]})})]})]})]})]})]}),e.jsx("style",{children:`

                    [data-h-scope="story-edit"] {
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

                    [data-h-scope="story-edit"] * {
                        box-sizing: border-box;
                    }

                    .story-edit {
                        background: var(--paper);
                        min-height: 100vh;
                        padding: 32px clamp(18px, 4vw, 48px) 64px;
                    }

                    .story-edit form {
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

                    .title-row {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        flex-wrap: wrap;
                    }

                    .page-header h1 {
                        margin: 0;
                        font-weight: 700;
                        font-size: clamp(20px, 2.4vw, 26px);
                        letter-spacing: -0.01em;
                    }

                    .editing-tag {
                        flex-shrink: 0;
                        font-size: 10.5px;
                        font-weight: 600;
                        color: var(--amber);
                        background: var(--amber-wash);
                        padding: 3px 9px;
                        border-radius: 999px;
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
                       THUMBNAIL
                    ------------------------------------------------------- */

                    .thumb-preview {
                        position: relative;
                        width: 100%;
                        aspect-ratio: 16 / 9;
                        border-radius: 9px;
                        border: 1px solid var(--line);
                        overflow: hidden;
                        background: var(--brand-wash);
                        margin-bottom: 8px;
                    }

                    .thumb-preview img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }

                    .thumb-tag {
                        position: absolute;
                        left: 10px;
                        bottom: 10px;
                        padding: 4px 9px;
                        border-radius: 999px;
                        background: rgba(255, 255, 255, 0.94);
                        color: var(--ink-soft);
                        font-size: 10px;
                        font-weight: 600;
                    }

                    .thumb-empty {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 6px;
                        color: var(--ink-faint);
                        font-size: 12px;
                    }

                    .upload-box {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        height: 38px;
                        border: 1.5px dashed var(--line);
                        border-radius: 8px;
                        color: var(--ink-soft);
                        font-size: 12px;
                        cursor: pointer;
                        position: relative;
                    }

                    .upload-box:hover {
                        border-color: var(--brand);
                        color: var(--brand-ink);
                    }

                    .upload-box span {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        max-width: 220px;
                    }

                    .upload-box input {
                        position: absolute;
                        inset: 0;
                        opacity: 0;
                        cursor: pointer;
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
                       STATUS PILL
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
                        gap: 10px;
                    }

                    .footer-note {
                        margin: 0;
                        font-size: 11px;
                        color: var(--ink-faint);
                    }

                    .actions-row {
                        display: flex;
                        gap: 8px;
                    }

                    .btn {
                        height: 36px;
                        border-radius: 7px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 6px;
                        font-family: inherit;
                        font-size: 12.5px;
                        font-weight: 600;
                        cursor: pointer;
                        text-decoration: none;
                        border: 1.5px solid transparent;
                        flex: 1;
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
                        flex: 1.3;
                    }

                    .btn-primary:hover {
                        background: var(--brand-ink);
                        border-color: var(--brand-ink);
                    }

                    .btn-primary:disabled {
                        opacity: 0.55;
                        cursor: not-allowed;
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
                        }
                    }

                    @media (max-width: 620px) {

                        .story-edit {
                            padding: 22px 14px 48px;
                        }

                        .field-row {
                            grid-template-columns: 1fr;
                        }

                        .sidebar {
                            display: flex;
                        }
                    }

                `})]})]})}export{D as default};
