import{r as y,u as E,j as e,H,L as v}from"./app-CJlpfYPO.js";import{A as Y}from"./AppLayout-WTBEreOn.js";const I=`
    :root {
        --story-bg: #f6f8fb;
        --story-card: #ffffff;
        --story-border: #e7ebf0;
        --story-text: #17202a;
        --story-muted: #718096;
        --story-primary: #059669;
        --story-primary-dark: #047857;
        --story-primary-soft: #ecfdf5;
        --story-blue: #2563eb;
        --story-blue-soft: #eff6ff;
        --story-warning: #d97706;
        --story-warning-soft: #fffbeb;
        --story-danger: #dc2626;
        --story-danger-soft: #fef2f2;
        --story-radius: 18px;
        --story-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
    }

    .story-show-page {
        min-height: 100vh;
        background: var(--story-bg);
        color: var(--story-text);
        padding: 28px;
    }

    .story-container {
        max-width: 1450px;
        margin: 0 auto;
    }

    .story-page-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 28px;
    }

    .story-breadcrumb {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--story-muted);
        font-size: 13px;
        margin-bottom: 8px;
    }

    .story-breadcrumb a {
        color: var(--story-muted);
        text-decoration: none;
    }

    .story-breadcrumb a:hover {
        color: var(--story-primary);
    }

    .story-page-title {
        margin: 0;
        font-size: 28px;
        line-height: 1.2;
        font-weight: 800;
        letter-spacing: -0.03em;
    }

    .story-page-subtitle {
        margin: 7px 0 0;
        color: var(--story-muted);
        font-size: 14px;
    }

    .story-header-actions {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: flex-end;
    }

    .story-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 42px;
        padding: 0 15px;
        border-radius: 11px;
        border: 1px solid transparent;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
        transition: all .18s ease;
        white-space: nowrap;
        font-family: inherit;
    }

    .story-btn:hover {
        transform: translateY(-1px);
    }

    .story-btn-outline {
        background: #fff;
        color: #475569;
        border-color: var(--story-border);
    }

    .story-btn-outline:hover {
        color: var(--story-text);
        border-color: #cbd5e1;
        box-shadow: 0 4px 12px rgba(15, 23, 42, .05);
    }

    .story-btn-warning {
        background: var(--story-warning-soft);
        color: var(--story-warning);
        border-color: #fde68a;
    }

    .story-btn-warning:hover {
        background: #fef3c7;
    }

    .story-btn-blue {
        background: var(--story-blue-soft);
        color: var(--story-blue);
        border-color: #bfdbfe;
    }

    .story-btn-blue:hover {
        background: #dbeafe;
    }

    .story-btn-primary {
        background: var(--story-primary);
        color: #fff;
        border-color: var(--story-primary);
        box-shadow: 0 5px 14px rgba(5, 150, 105, .18);
    }

    .story-btn-primary:hover {
        background: var(--story-primary-dark);
        border-color: var(--story-primary-dark);
    }

    .story-main-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 22px;
        margin-bottom: 22px;
    }

    .story-card {
        background: var(--story-card);
        border: 1px solid var(--story-border);
        border-radius: var(--story-radius);
        box-shadow: var(--story-shadow);
        overflow: hidden;
    }

    .story-thumbnail {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 10;
        background: #eef2f7;
        overflow: hidden;
    }

    .story-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform .35s ease;
    }

    .story-thumbnail:hover img {
        transform: scale(1.025);
    }

    .story-thumbnail-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to top,
            rgba(15, 23, 42, .32),
            transparent 55%
        );
        pointer-events: none;
    }

    .thumbnail-status {
        position: absolute;
        left: 18px;
        bottom: 18px;
    }

    .story-info {
        padding: 28px;
    }

    .story-category {
        display: inline-flex;
        align-items: center;
        padding: 6px 11px;
        background: var(--story-primary-soft);
        color: var(--story-primary-dark);
        border: 1px solid #bbf7d0;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .06em;
        margin-bottom: 13px;
    }

    .story-title {
        margin: 0;
        font-size: 27px;
        line-height: 1.25;
        letter-spacing: -.03em;
        font-weight: 800;
    }

    .story-rating {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 17px 0 20px;
    }

    .story-stars {
        display: flex;
        gap: 2px;
    }

    .story-star {
        color: #f59e0b;
        font-size: 18px;
        line-height: 1;
    }

    .story-star.empty {
        color: #d7dee7;
    }

    .rating-text {
        font-size: 13px;
        color: var(--story-muted);
    }

    .story-excerpt {
        padding: 15px 16px;
        background: #f8fafc;
        border: 1px solid #edf1f5;
        border-left: 3px solid var(--story-primary);
        border-radius: 0 12px 12px 0;
        color: #526174;
        font-size: 14px;
        line-height: 1.75;
    }

    .story-meta-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px 20px;
        margin-top: 25px;
        padding-top: 23px;
        border-top: 1px solid var(--story-border);
    }

    .meta-label {
        margin-bottom: 5px;
        color: #94a3b8;
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .08em;
    }

    .meta-value {
        color: #263445;
        font-size: 13px;
        font-weight: 700;
        word-break: break-word;
    }

    .meta-value a {
        color: var(--story-primary-dark);
        text-decoration: none;
    }

    .meta-value a:hover {
        text-decoration: underline;
    }

    .story-status {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 5px 10px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
    }

    .story-status::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
    }

    .status-approved {
        background: var(--story-primary-soft);
        color: #059669;
    }

    .status-pending {
        background: var(--story-warning-soft);
        color: #d97706;
    }

    .status-rejected {
        background: var(--story-danger-soft);
        color: #dc2626;
    }

    .status-published {
        background: var(--story-blue-soft);
        color: #2563eb;
    }

    .status-default {
        background: #f1f5f9;
        color: #64748b;
    }

    .story-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .story-tag {
        display: inline-flex;
        align-items: center;
        padding: 5px 9px;
        border-radius: 999px;
        background: #eff6ff;
        color: #2563eb;
        border: 1px solid #dbeafe;
        font-size: 11px;
        font-weight: 700;
    }

    .story-section-card {
        background: #fff;
        border: 1px solid var(--story-border);
        border-radius: var(--story-radius);
        box-shadow: var(--story-shadow);
        overflow: hidden;
        margin-bottom: 22px;
    }

    .story-section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        padding: 18px 22px;
        border-bottom: 1px solid var(--story-border);
    }

    .section-heading {
        display: flex;
        align-items: center;
        gap: 11px;
    }

    .section-icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: var(--story-primary-soft);
        color: var(--story-primary);
        flex-shrink: 0;
    }

    .section-heading h3 {
        margin: 0;
        font-size: 15px;
        font-weight: 800;
    }

    .section-heading p {
        margin: 3px 0 0;
        color: var(--story-muted);
        font-size: 12px;
    }

    .story-media-grid {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
    }

    .story-media-preview {
        position: relative;
        min-height: 330px;
        background: #0f172a;
        overflow: hidden;
    }

    .story-media-preview img {
        width: 100%;
        height: 100%;
        min-height: 330px;
        object-fit: cover;
        opacity: .82;
        display: block;
    }

    .media-overlay {
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, .35);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .media-play-btn {
        width: 68px;
        height: 68px;
        border-radius: 50%;
        background: #fff;
        color: var(--story-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        box-shadow: 0 12px 35px rgba(0, 0, 0, .25);
        transition: all .2s ease;
    }

    .media-play-btn:hover {
        transform: scale(1.08);
        color: var(--story-primary-dark);
    }

    .story-full-content {
        padding: 30px;
    }

    .story-full-content .content-label {
        color: var(--story-primary);
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .08em;
        margin-bottom: 8px;
    }

    .story-full-content h3 {
        margin: 0 0 12px;
        font-size: 20px;
        font-weight: 800;
    }

    .story-full-content p {
        margin: 0;
        color: #64748b;
        font-size: 14px;
        line-height: 1.85;
        white-space: pre-line;
    }

    .open-media-wrapper {
        margin-top: 20px;
    }

    .open-media-button {
        width: fit-content;
    }

    .comment-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 27px;
        height: 24px;
        padding: 0 8px;
        border-radius: 999px;
        background: var(--story-primary-soft);
        color: var(--story-primary-dark);
        font-size: 11px;
        font-weight: 800;
    }

    .comments-body {
        padding: 5px 22px;
    }

    .comment-item {
        display: flex;
        gap: 13px;
        padding: 18px 0;
        border-bottom: 1px solid #eef2f6;
    }

    .comment-item:last-child {
        border-bottom: none;
    }

    .comment-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--story-primary-soft);
        border: 1px solid #bbf7d0;
        color: var(--story-primary-dark);
        font-size: 13px;
        font-weight: 800;
    }

    .comment-content {
        flex: 1;
        min-width: 0;
    }

    .comment-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;
    }

    .comment-author {
        font-size: 13px;
        font-weight: 800;
    }

    .comment-time {
        color: #94a3b8;
        font-size: 11px;
        white-space: nowrap;
    }

    .comment-text {
        margin: 0 0 7px;
        color: #64748b;
        font-size: 13px;
        line-height: 1.65;
    }

    .comment-stars {
        display: flex;
        gap: 2px;
    }

    .comment-star {
        color: #d7dee7;
        font-size: 13px;
    }

    .comment-star.filled {
        color: #f59e0b;
    }

    .empty-comments {
        text-align: center;
        padding: 55px 20px;
        color: #94a3b8;
    }

    .empty-comments-icon {
        width: 50px;
        height: 50px;
        margin: 0 auto 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 14px;
        background: #f8fafc;
        color: #94a3b8;
    }

    .empty-comments strong {
        display: block;
        color: #475569;
        font-size: 14px;
        margin-bottom: 4px;
    }

    .empty-comments span {
        font-size: 12px;
    }

    .story-modal-backdrop {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background: rgba(15, 23, 42, .45);
        backdrop-filter: blur(4px);
    }

    .story-modal {
        width: 100%;
        max-width: 500px;
        max-height: calc(100vh - 40px);
        overflow: auto;
        background: #fff;
        border: 1px solid var(--story-border);
        border-radius: 18px;
        box-shadow: 0 25px 70px rgba(15, 23, 42, .2);
    }

    .story-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        padding: 18px 20px;
        border-bottom: 1px solid var(--story-border);
    }

    .story-modal-title {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
        font-size: 16px;
        font-weight: 800;
    }

    .modal-title-icon {
        color: var(--story-primary);
    }

    .modal-close {
        width: 34px;
        height: 34px;
        border: none;
        border-radius: 9px;
        background: #f8fafc;
        color: #64748b;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-close:hover {
        background: #f1f5f9;
        color: #1e293b;
    }

    .story-modal-body {
        padding: 22px 20px;
    }

    .modal-field {
        margin-bottom: 17px;
    }

    .modal-field:last-child {
        margin-bottom: 0;
    }

    .modal-label {
        display: block;
        margin-bottom: 7px;
        color: #475569;
        font-size: 12px;
        font-weight: 800;
    }

    .modal-input,
    .modal-select,
    .modal-textarea {
        width: 100%;
        border: 1px solid #dce2e8;
        background: #fff;
        border-radius: 10px;
        padding: 10px 12px;
        color: #1e293b;
        font-size: 13px;
        outline: none;
        font-family: inherit;
        transition: all .15s ease;
    }

    .modal-input:focus,
    .modal-select:focus,
    .modal-textarea:focus {
        border-color: #6ee7b7;
        box-shadow: 0 0 0 3px rgba(5, 150, 105, .08);
    }

    .modal-textarea {
        resize: vertical;
        min-height: 95px;
    }

    .story-modal-footer {
        display: flex;
        justify-content: flex-end;
        gap: 9px;
        padding: 15px 20px;
        border-top: 1px solid var(--story-border);
        background: #fafbfc;
    }

    .modal-cancel {
        min-height: 40px;
        padding: 0 15px;
        border: 1px solid #dce2e8;
        border-radius: 9px;
        background: #fff;
        color: #64748b;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
    }

    .modal-submit {
        min-height: 40px;
        padding: 0 17px;
        border: none;
        border-radius: 9px;
        background: var(--story-primary);
        color: #fff;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
    }

    .modal-submit:hover {
        background: var(--story-primary-dark);
    }

    .modal-submit:disabled {
        opacity: .65;
        cursor: not-allowed;
    }

    .form-error {
        margin-top: 5px;
        color: #dc2626;
        font-size: 11px;
    }

    @media (max-width: 1100px) {
        .story-main-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 850px) {
        .story-page-header {
            flex-direction: column;
        }

        .story-header-actions {
            width: 100%;
            justify-content: flex-start;
        }

        .story-media-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 640px) {
        .story-show-page {
            padding: 18px 14px;
        }

        .story-page-title {
            font-size: 23px;
        }

        .story-header-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
        }

        .story-btn {
            width: 100%;
        }

        .story-info {
            padding: 20px;
        }

        .story-title {
            font-size: 22px;
        }

        .story-meta-grid {
            grid-template-columns: 1fr;
            gap: 15px;
        }

        .story-media-preview,
        .story-media-preview img {
            min-height: 230px;
        }

        .story-full-content {
            padding: 22px;
        }

        .story-section-header {
            padding: 16px;
        }

        .comments-body {
            padding: 5px 16px;
        }

        .comment-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 3px;
        }

        .comment-time {
            white-space: normal;
        }
    }
`,s=({name:r,size:a=18,stroke:o=1.8})=>{const m={arrowLeft:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"M12 19l-7-7 7-7"})]}),refresh:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20 11a8.1 8.1 0 0 0-15.5-2M4 5v4h4"}),e.jsx("path",{d:"M4 13a8.1 8.1 0 0 0 15.5 2M20 19v-4h-4"})]}),edit:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"})]}),star:e.jsx("path",{d:"m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z"}),play:e.jsx("path",{d:"m9 6 10 6-10 6Z"}),message:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-4-.8L3 21l1.8-4A8.2 8.2 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z"}),e.jsx("path",{d:"M8 12h.01M12 12h.01M16 12h.01"})]}),close:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"m6 6 12 12"}),e.jsx("path",{d:"m18 6-12 12"})]})};return e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:m[r]})};function F(r){if(!r)return"—";const a=new Date(r);if(Number.isNaN(a.getTime()))return String(r);const o=Date.now()-a.getTime();if(o<0)return a.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"});const m=Math.floor(o/1e3);if(m<60)return"just now";const i=Math.floor(m/60);if(i<60)return i+"m ago";const p=Math.floor(i/60);if(p<24)return p+"h ago";const h=Math.floor(p/24);return h<30?h+"d ago":a.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})}function O(r){if(!r)return"/images/placeholder-story.png";const a=String(r);return a.startsWith("http://")||a.startsWith("https://")||a.startsWith("//")||a.startsWith("/")?a:"/"+a}function K({story:r={}}){var C,D,R,A,L;const[a,o]=y.useState(!1),[m,i]=y.useState(!1),{data:p,setData:h,put:T,processing:j,errors:w}=E({status:r.status||"pending"}),{data:u,setData:x,post:_,processing:N,errors:l,reset:q}=E({story_id:r.id||"",name:"",email:"",rating:5,comment:""}),n=Array.isArray(r.comments)?r.comments:[],k=y.useMemo(()=>n.length===0?0:n.reduce((d,f)=>d+Number(f.rating||0),0)/n.length,[n]),P=Math.round(k),S=y.useMemo(()=>r.tags?String(r.tags).split(",").map(t=>t.trim()).filter(t=>t.length>0):[],[r.tags]),c=String(r.status||"pending").toLowerCase();let b="status-default";(c==="approved"||c==="pending"||c==="rejected"||c==="published")&&(b="status-"+c);const z=O(r.thumbnail),g=r.media||"",W=r.content?String(r.content).length>200?String(r.content).substring(0,200)+"…":String(r.content):"No story content available.";function M(t){if(!t)return"Pending";const d=String(t);return d.charAt(0).toUpperCase()+d.slice(1)}function Z(t){t.preventDefault(),T(route("admin.stories.updateStatus",r.id),{preserveScroll:!0,onSuccess:()=>{o(!1)}})}function B(t){t.preventDefault(),_(route("admin.reviews.store"),{preserveScroll:!0,onSuccess:()=>{i(!1),q(),x("story_id",r.id)}})}return e.jsxs(Y,{children:[e.jsx(H,{title:r.title||"Story Details"}),e.jsx("style",{children:I}),e.jsx("div",{className:"story-show-page",children:e.jsxs("div",{className:"story-container",children:[e.jsxs("div",{className:"story-page-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"story-breadcrumb",children:[e.jsx(v,{href:route("admin.stories.index"),children:"Stories"}),e.jsx("span",{children:"/"}),e.jsx("span",{children:"Details"})]}),e.jsx("h1",{className:"story-page-title",children:"Story Details"}),e.jsx("p",{className:"story-page-subtitle",children:"Review and manage this talent story."})]}),e.jsxs("div",{className:"story-header-actions",children:[e.jsxs(v,{href:route("admin.stories.index"),className:"story-btn story-btn-outline",children:[e.jsx(s,{name:"arrowLeft",size:16}),"Back"]}),e.jsxs("button",{type:"button",className:"story-btn story-btn-warning",onClick:()=>o(!0),children:[e.jsx(s,{name:"refresh",size:16}),"Update Status"]}),e.jsxs(v,{href:route("admin.stories.edit",r.id),className:"story-btn story-btn-blue",children:[e.jsx(s,{name:"edit",size:16}),"Edit"]}),e.jsxs("button",{type:"button",className:"story-btn story-btn-primary",onClick:()=>i(!0),children:[e.jsx(s,{name:"star",size:16}),"Add Review"]})]})]}),e.jsxs("div",{className:"story-main-grid",children:[e.jsx("div",{className:"story-card",children:e.jsxs("div",{className:"story-thumbnail",children:[e.jsx("img",{src:z,alt:r.title||"Story",onError:t=>{t.currentTarget.src="/images/placeholder-story.png"}}),e.jsx("div",{className:"story-thumbnail-overlay"}),e.jsx("div",{className:"thumbnail-status",children:e.jsx("span",{className:"story-status "+b,children:M(c)})})]})}),e.jsx("div",{className:"story-card",children:e.jsxs("div",{className:"story-info",children:[e.jsx("div",{className:"story-category",children:((C=r.category)==null?void 0:C.name)||"Uncategorized"}),e.jsx("h2",{className:"story-title",children:r.title||"Untitled Story"}),e.jsxs("div",{className:"story-rating",children:[e.jsx("div",{className:"story-stars",children:[1,2,3,4,5].map(t=>e.jsx("span",{className:t<=P?"story-star":"story-star empty",children:"★"},t))}),e.jsxs("span",{className:"rating-text",children:[k.toFixed(1)," · ",n.length," ",n.length===1?"review":"reviews"]})]}),e.jsx("div",{className:"story-excerpt",children:W}),e.jsxs("div",{className:"story-meta-grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"meta-label",children:"Author"}),e.jsx("div",{className:"meta-value",children:((D=r.talent)==null?void 0:D.name)||"—"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"meta-label",children:"Phone"}),e.jsx("div",{className:"meta-value",children:((R=r.talent)==null?void 0:R.phone)||"—"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"meta-label",children:"Email"}),e.jsx("div",{className:"meta-value",children:(A=r.talent)!=null&&A.email?e.jsx("a",{href:"mailto:"+r.talent.email,children:r.talent.email}):"—"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"meta-label",children:"Created"}),e.jsx("div",{className:"meta-value",children:F(r.created_at)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"meta-label",children:"Status"}),e.jsx("div",{className:"meta-value",children:e.jsx("span",{className:"story-status "+b,children:M(c)})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"meta-label",children:"Tags"}),e.jsx("div",{className:"story-tags",children:S.length>0?S.map((t,d)=>e.jsx("span",{className:"story-tag",children:t},t+"-"+d)):e.jsx("span",{className:"meta-value",children:"No tags"})})]})]})]})})]}),e.jsxs("div",{className:"story-section-card",children:[e.jsx("div",{className:"story-section-header",children:e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx(s,{name:"play",size:17})}),e.jsxs("div",{children:[e.jsxs("h3",{children:["Story Details",(L=r.talent)!=null&&L.name?" of "+r.talent.name:""]}),e.jsx("p",{children:"Full story content and media"})]})]})}),e.jsxs("div",{className:"story-media-grid",children:[e.jsxs("div",{className:"story-media-preview",children:[e.jsx("img",{src:z,alt:r.title||"Story media",onError:t=>{t.currentTarget.src="/images/placeholder-story.png"}}),g?e.jsx("div",{className:"media-overlay",children:e.jsx("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"media-play-btn","aria-label":"Open story media",children:e.jsx(s,{name:"play",size:25,stroke:2})})}):null]}),e.jsxs("div",{className:"story-full-content",children:[e.jsx("div",{className:"content-label",children:"Full Story"}),e.jsx("h3",{children:r.title||"Untitled Story"}),e.jsx("p",{children:r.content||"No story content available."}),g?e.jsx("div",{className:"open-media-wrapper",children:e.jsxs("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"story-btn story-btn-primary open-media-button",children:[e.jsx(s,{name:"play",size:15}),"Open Media"]})}):null]})]})]}),e.jsxs("div",{className:"story-section-card",children:[e.jsxs("div",{className:"story-section-header",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx(s,{name:"message",size:17})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Story Comments"}),e.jsx("p",{children:"Reviews and feedback from visitors"})]})]}),e.jsx("span",{className:"comment-count",children:n.length})]}),e.jsx("div",{className:"comments-body",children:n.length>0?n.map(t=>{const d=Number(t.rating||0),f=t.name||"Anonymous";return e.jsxs("div",{className:"comment-item",children:[e.jsx("div",{className:"comment-avatar",children:f.charAt(0).toUpperCase()}),e.jsxs("div",{className:"comment-content",children:[e.jsxs("div",{className:"comment-top",children:[e.jsx("span",{className:"comment-author",children:f}),e.jsx("span",{className:"comment-time",children:F(t.created_at)})]}),e.jsx("p",{className:"comment-text",children:t.comment||"No comment provided."}),e.jsx("div",{className:"comment-stars",children:[1,2,3,4,5].map(U=>e.jsx("span",{className:U<=d?"comment-star filled":"comment-star",children:"★"},U))})]})]},t.id)}):e.jsxs("div",{className:"empty-comments",children:[e.jsx("div",{className:"empty-comments-icon",children:e.jsx(s,{name:"message",size:22})}),e.jsx("strong",{children:"No reviews yet"}),e.jsx("span",{children:"Be the first to add a review to this story."})]})})]})]})}),a?e.jsx("div",{className:"story-modal-backdrop",onMouseDown:t=>{t.target===t.currentTarget&&o(!1)},children:e.jsxs("div",{className:"story-modal",children:[e.jsxs("div",{className:"story-modal-header",children:[e.jsxs("h3",{className:"story-modal-title",children:[e.jsx("span",{className:"modal-title-icon",children:e.jsx(s,{name:"refresh",size:19})}),"Update Story Status"]}),e.jsx("button",{type:"button",className:"modal-close",onClick:()=>o(!1),children:e.jsx(s,{name:"close",size:17})})]}),e.jsxs("form",{onSubmit:Z,children:[e.jsx("div",{className:"story-modal-body",children:e.jsxs("div",{className:"modal-field",children:[e.jsx("label",{className:"modal-label",children:"Select New Status"}),e.jsxs("select",{className:"modal-select",value:p.status,onChange:t=>h("status",t.target.value),required:!0,children:[e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"approved",children:"Approved"}),e.jsx("option",{value:"rejected",children:"Rejected"}),e.jsx("option",{value:"published",children:"Published"})]}),w.status?e.jsx("div",{className:"form-error",children:w.status}):null]})}),e.jsxs("div",{className:"story-modal-footer",children:[e.jsx("button",{type:"button",className:"modal-cancel",onClick:()=>o(!1),children:"Cancel"}),e.jsx("button",{type:"submit",className:"modal-submit",disabled:j,children:j?"Updating...":"Update Status"})]})]})]})}):null,m?e.jsx("div",{className:"story-modal-backdrop",onMouseDown:t=>{t.target===t.currentTarget&&i(!1)},children:e.jsxs("div",{className:"story-modal",children:[e.jsxs("div",{className:"story-modal-header",children:[e.jsxs("h3",{className:"story-modal-title",children:[e.jsx("span",{className:"modal-title-icon",children:e.jsx(s,{name:"star",size:19})}),"Add Review"]}),e.jsx("button",{type:"button",className:"modal-close",onClick:()=>i(!1),children:e.jsx(s,{name:"close",size:17})})]}),e.jsxs("form",{onSubmit:B,children:[e.jsxs("div",{className:"story-modal-body",children:[e.jsxs("div",{className:"modal-field",children:[e.jsx("label",{className:"modal-label",children:"Your Name"}),e.jsx("input",{type:"text",className:"modal-input",placeholder:"John Doe",value:u.name,onChange:t=>x("name",t.target.value),required:!0}),l.name?e.jsx("div",{className:"form-error",children:l.name}):null]}),e.jsxs("div",{className:"modal-field",children:[e.jsx("label",{className:"modal-label",children:"Your Email"}),e.jsx("input",{type:"email",className:"modal-input",placeholder:"john@example.com",value:u.email,onChange:t=>x("email",t.target.value),required:!0}),l.email?e.jsx("div",{className:"form-error",children:l.email}):null]}),e.jsxs("div",{className:"modal-field",children:[e.jsx("label",{className:"modal-label",children:"Rating"}),e.jsxs("select",{className:"modal-select",value:u.rating,onChange:t=>x("rating",Number(t.target.value)),required:!0,children:[e.jsx("option",{value:5,children:"★★★★★ — Excellent (5)"}),e.jsx("option",{value:4,children:"★★★★ — Good (4)"}),e.jsx("option",{value:3,children:"★★★ — Average (3)"}),e.jsx("option",{value:2,children:"★★ — Poor (2)"}),e.jsx("option",{value:1,children:"★ — Terrible (1)"})]}),l.rating?e.jsx("div",{className:"form-error",children:l.rating}):null]}),e.jsxs("div",{className:"modal-field",children:[e.jsx("label",{className:"modal-label",children:"Comment"}),e.jsx("textarea",{className:"modal-textarea",rows:"4",placeholder:"Share your thoughts...",value:u.comment,onChange:t=>x("comment",t.target.value),required:!0}),l.comment?e.jsx("div",{className:"form-error",children:l.comment}):null]})]}),e.jsxs("div",{className:"story-modal-footer",children:[e.jsx("button",{type:"button",className:"modal-cancel",onClick:()=>i(!1),children:"Cancel"}),e.jsx("button",{type:"submit",className:"modal-submit",disabled:N,children:N?"Submitting...":"Submit Review"})]})]})]})}):null]})}export{K as default};
