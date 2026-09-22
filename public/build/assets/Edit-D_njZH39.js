import{u as C,r as p,j as e,H as A,L as y}from"./app-CJlpfYPO.js";import{A as D}from"./AppLayout-WTBEreOn.js";function T({story:s,categories:d=[]}){var b;const{data:a,setData:o,post:N,processing:m,errors:i,progress:h}=C({_method:"put",title:s.title??"",content:s.content??"",category_id:s.category_id??"",tags:s.tags??"",status:s.status??"published",thumbnail:null,media:null}),[l,u]=p.useState(s.thumbnail?`/storage/${s.thumbnail}`:null),[w,x]=p.useState(!1),f=p.useMemo(()=>a.tags?Array.isArray(a.tags)?a.tags.map(t=>String(t).trim()).filter(Boolean):String(a.tags).split(",").map(t=>t.trim()).filter(Boolean):[],[a.tags]),c=p.useMemo(()=>d.find(t=>String(t.id)===String(a.category_id)),[d,a.category_id]),g=t=>{if(!t)return;o("thumbnail",t);const r=URL.createObjectURL(t);u(r)},v=t=>{var n;const r=(n=t.target.files)==null?void 0:n[0];r&&g(r)},k=t=>{var n;t.preventDefault(),x(!1);const r=(n=t.dataTransfer.files)==null?void 0:n[0];r&&r.type.startsWith("image/")&&g(r)},z=()=>{u(s.thumbnail?`/storage/${s.thumbnail}`:null),o("thumbnail",null)},S=t=>{t.preventDefault(),N(route("talent.page.stories.update",s.id),{forceFormData:!0})};return e.jsxs(D,{children:[e.jsx(A,{title:`Edit Story — ${s.title}`}),e.jsxs("div",{"data-h-scope":"talent-story-editor",children:[e.jsx("style",{children:`
                    [data-h-scope="talent-story-editor"] {
                        --ts-accent: #48d597;
                        --ts-accent-dark: #2fb87c;
                        --ts-accent-soft: rgba(72, 213, 151, 0.10);
                        --ts-ink: #071315;
                        --ts-muted: #6b797b;
                        --ts-border: #e4ebe8;
                        --ts-bg: #f5f8f7;
                        --ts-white: #ffffff;
                        --ts-danger: #dc3545;

                        min-height: calc(100vh - 70px);
                        background:
                            radial-gradient(
                                circle at 10% 0%,
                                rgba(72, 213, 151, .07),
                                transparent 25%
                            ),
                            var(--ts-bg);
                        color: var(--ts-ink);
                    }

                    [data-h-scope="talent-story-editor"] * {
                        box-sizing: border-box;
                    }

                    /* =====================================
                       PAGE HEADER
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .editor-header {
                        padding: 28px 0 22px;
                    }

                    [data-h-scope="talent-story-editor"] .back-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        color: var(--ts-muted);
                        text-decoration: none;
                        font-size: 13px;
                        font-weight: 650;
                        margin-bottom: 15px;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .back-link:hover {
                        color: var(--ts-ink);
                        transform: translateX(-3px);
                    }

                    [data-h-scope="talent-story-editor"] .editor-title {
                        margin: 0;
                        font-size: clamp(25px, 3vw, 34px);
                        line-height: 1.15;
                        letter-spacing: -.7px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-editor"] .editor-subtitle {
                        color: var(--ts-muted);
                        margin: 8px 0 0;
                        font-size: 14px;
                        line-height: 1.6;
                    }

                    /* =====================================
                       MAIN GRID
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .editor-grid {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr) 340px;
                        gap: 24px;
                        align-items: start;
                    }

                    /* =====================================
                       CARDS
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .editor-card {
                        background: var(--ts-white);
                        border: 1px solid var(--ts-border);
                        border-radius: 20px;
                        box-shadow: 0 8px 30px rgba(7, 19, 21, .045);
                    }

                    [data-h-scope="talent-story-editor"] .editor-card-header {
                        padding: 20px 24px;
                        border-bottom: 1px solid var(--ts-border);
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                    }

                    [data-h-scope="talent-story-editor"] .section-heading {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }

                    [data-h-scope="talent-story-editor"] .section-icon {
                        width: 38px;
                        height: 38px;
                        flex: 0 0 38px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 11px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-editor"] .section-title {
                        margin: 0;
                        font-size: 14px;
                        font-weight: 800;
                        color: var(--ts-ink);
                    }

                    [data-h-scope="talent-story-editor"] .section-description {
                        margin: 2px 0 0;
                        color: var(--ts-muted);
                        font-size: 11px;
                    }

                    [data-h-scope="talent-story-editor"] .editor-card-body {
                        padding: 24px;
                    }

                    /* =====================================
                       FORM ELEMENTS
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .field {
                        margin-bottom: 22px;
                    }

                    [data-h-scope="talent-story-editor"] .field:last-child {
                        margin-bottom: 0;
                    }

                    [data-h-scope="talent-story-editor"] .field-label {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        margin-bottom: 8px;
                    }

                    [data-h-scope="talent-story-editor"] .field-label label {
                        color: var(--ts-ink);
                        font-size: 13px;
                        font-weight: 750;
                        margin: 0;
                    }

                    [data-h-scope="talent-story-editor"] .required {
                        color: var(--ts-danger);
                    }

                    [data-h-scope="talent-story-editor"] .field-help {
                        color: var(--ts-muted);
                        font-size: 11px;
                    }

                    [data-h-scope="talent-story-editor"] .form-control,
                    [data-h-scope="talent-story-editor"] .form-select {
                        min-height: 46px;
                        border: 1px solid #dfe7e4;
                        border-radius: 12px;
                        color: var(--ts-ink);
                        background-color: #fff;
                        font-size: 13px;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .form-control {
                        padding: 12px 14px;
                    }

                    [data-h-scope="talent-story-editor"] .form-select {
                        padding: 12px 38px 12px 14px;
                    }

                    [data-h-scope="talent-story-editor"] .form-control::placeholder {
                        color: #a3adad;
                    }

                    [data-h-scope="talent-story-editor"] .form-control:focus,
                    [data-h-scope="talent-story-editor"] .form-select:focus {
                        border-color: var(--ts-accent);
                        box-shadow: 0 0 0 4px rgba(72, 213, 151, .12);
                    }

                    [data-h-scope="talent-story-editor"] .title-input {
                        min-height: 58px;
                        font-size: 20px;
                        font-weight: 700;
                        letter-spacing: -.2px;
                    }

                    [data-h-scope="talent-story-editor"] .content-editor {
                        min-height: 390px;
                        resize: vertical;
                        line-height: 1.8;
                        font-size: 15px;
                    }

                    [data-h-scope="talent-story-editor"] .character-count {
                        color: var(--ts-muted);
                        font-size: 11px;
                        margin-top: 7px;
                        text-align: right;
                    }

                    /* =====================================
                       STATUS
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .status-options {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                    }

                    [data-h-scope="talent-story-editor"] .status-option {
                        position: relative;
                    }

                    [data-h-scope="talent-story-editor"] .status-option input {
                        position: absolute;
                        opacity: 0;
                        pointer-events: none;
                    }

                    [data-h-scope="talent-story-editor"] .status-option label {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 13px;
                        border: 1px solid var(--ts-border);
                        border-radius: 12px;
                        cursor: pointer;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .status-option label:hover {
                        border-color: #c8d5d0;
                    }

                    [data-h-scope="talent-story-editor"] .status-option input:checked + label {
                        border-color: var(--ts-accent);
                        background: var(--ts-accent-soft);
                    }

                    [data-h-scope="talent-story-editor"] .status-icon {
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 9px;
                        background: #f0f4f2;
                        color: var(--ts-muted);
                    }

                    [data-h-scope="talent-story-editor"] .status-option input:checked + label .status-icon {
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                    }

                    [data-h-scope="talent-story-editor"] .status-name {
                        font-size: 12px;
                        font-weight: 750;
                    }

                    [data-h-scope="talent-story-editor"] .status-info {
                        font-size: 10px;
                        color: var(--ts-muted);
                        margin-top: 2px;
                    }

                    /* =====================================
                       THUMBNAIL UPLOAD
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .upload-zone {
                        position: relative;
                        min-height: 210px;
                        border: 1.5px dashed #ccd8d4;
                        border-radius: 16px;
                        overflow: hidden;
                        background: #fafcfb;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .upload-zone:hover,
                    [data-h-scope="talent-story-editor"] .upload-zone.drag-active {
                        border-color: var(--ts-accent);
                        background: rgba(72, 213, 151, .035);
                    }

                    [data-h-scope="talent-story-editor"] .upload-preview {
                        position: absolute;
                        inset: 0;
                    }

                    [data-h-scope="talent-story-editor"] .upload-preview img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-h-scope="talent-story-editor"] .upload-preview-overlay {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        padding: 14px;
                        background: linear-gradient(
                            180deg,
                            transparent 40%,
                            rgba(0,0,0,.72)
                        );
                    }

                    [data-h-scope="talent-story-editor"] .preview-label {
                        color: #fff;
                        font-size: 11px;
                        font-weight: 700;
                    }

                    [data-h-scope="talent-story-editor"] .remove-image {
                        border: 0;
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 9px;
                        background: rgba(255,255,255,.92);
                        color: #dc3545;
                        cursor: pointer;
                    }

                    [data-h-scope="talent-story-editor"] .upload-empty {
                        min-height: 210px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        padding: 25px;
                    }

                    [data-h-scope="talent-story-editor"] .upload-icon {
                        width: 52px;
                        height: 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 15px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                        font-size: 20px;
                        margin-bottom: 12px;
                    }

                    [data-h-scope="talent-story-editor"] .upload-title {
                        color: var(--ts-ink);
                        font-size: 13px;
                        font-weight: 750;
                        margin-bottom: 4px;
                    }

                    [data-h-scope="talent-story-editor"] .upload-description {
                        color: var(--ts-muted);
                        font-size: 11px;
                        line-height: 1.5;
                        margin-bottom: 13px;
                    }

                    [data-h-scope="talent-story-editor"] .upload-button {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 8px 13px;
                        border-radius: 9px;
                        background: var(--ts-ink);
                        color: #fff;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        margin: 0;
                    }

                    [data-h-scope="talent-story-editor"] .upload-button:hover {
                        background: var(--ts-accent-dark);
                    }

                    /* =====================================
                       FILE ATTACHMENT
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .file-upload {
                        border: 1px solid var(--ts-border);
                        border-radius: 14px;
                        padding: 14px;
                        background: #fafcfb;
                    }

                    [data-h-scope="talent-story-editor"] .file-upload-label {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        cursor: pointer;
                    }

                    [data-h-scope="talent-story-editor"] .file-icon {
                        width: 40px;
                        height: 40px;
                        flex: 0 0 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 11px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-editor"] .file-title {
                        font-size: 12px;
                        font-weight: 750;
                        color: var(--ts-ink);
                    }

                    [data-h-scope="talent-story-editor"] .file-description {
                        font-size: 10px;
                        color: var(--ts-muted);
                        margin-top: 2px;
                    }

                    [data-h-scope="talent-story-editor"] .current-file {
                        display: flex;
                        align-items: center;
                        gap: 7px;
                        margin-top: 12px;
                        padding: 8px 10px;
                        background: #fff;
                        border: 1px solid var(--ts-border);
                        border-radius: 9px;
                        color: var(--ts-muted);
                        font-size: 10px;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-editor"] .current-file span {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    /* =====================================
                       TAGS
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .tag-preview {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 6px;
                        margin-top: 9px;
                    }

                    [data-h-scope="talent-story-editor"] .tag-chip {
                        display: inline-flex;
                        align-items: center;
                        gap: 4px;
                        padding: 5px 9px;
                        border-radius: 999px;
                        background: var(--ts-accent-soft);
                        color: #258c60;
                        font-size: 10px;
                        font-weight: 700;
                    }

                    /* =====================================
                       SIDEBAR
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .sidebar-card {
                        position: sticky;
                        top: 20px;
                    }

                    [data-h-scope="talent-story-editor"] .preview-card {
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-editor"] .preview-cover {
                        height: 180px;
                        position: relative;
                        background:
                            linear-gradient(
                                135deg,
                                #071315,
                                #164b39
                            );
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-editor"] .preview-cover img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-h-scope="talent-story-editor"] .preview-cover::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(
                            180deg,
                            transparent 20%,
                            rgba(0,0,0,.78)
                        );
                    }

                    [data-h-scope="talent-story-editor"] .preview-cover-placeholder {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--ts-accent);
                        font-size: 27px;
                    }

                    [data-h-scope="talent-story-editor"] .preview-content {
                        position: absolute;
                        z-index: 2;
                        left: 16px;
                        right: 16px;
                        bottom: 15px;
                        color: #fff;
                    }

                    [data-h-scope="talent-story-editor"] .preview-category {
                        display: inline-flex;
                        padding: 5px 9px;
                        border-radius: 999px;
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                        font-size: 9px;
                        font-weight: 800;
                        margin-bottom: 8px;
                    }

                    [data-h-scope="talent-story-editor"] .preview-title {
                        margin: 0;
                        font-size: 18px;
                        line-height: 1.2;
                        font-weight: 800;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-editor"] .preview-body {
                        padding: 17px;
                    }

                    [data-h-scope="talent-story-editor"] .preview-meta {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-bottom: 12px;
                    }

                    [data-h-scope="talent-story-editor"] .preview-excerpt {
                        color: #687678;
                        font-size: 11px;
                        line-height: 1.6;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    /* =====================================
                       PUBLISH BOX
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .publish-box {
                        padding: 18px;
                    }

                    [data-h-scope="talent-story-editor"] .publish-status {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 15px;
                    }

                    [data-h-scope="talent-story-editor"] .publish-status-icon {
                        width: 36px;
                        height: 36px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 10px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-editor"] .publish-status-title {
                        font-size: 12px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-editor"] .publish-status-description {
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    /* =====================================
                       SAVE BAR
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .save-bar {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        padding: 18px 20px;
                        margin-top: 24px;
                        background: rgba(255,255,255,.95);
                        border: 1px solid var(--ts-border);
                        border-radius: 16px;
                        box-shadow: 0 8px 25px rgba(7,19,21,.05);
                    }

                    [data-h-scope="talent-story-editor"] .save-info {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        color: var(--ts-muted);
                        font-size: 11px;
                    }

                    [data-h-scope="talent-story-editor"] .save-info i {
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-editor"] .save-actions {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                    }

                    [data-h-scope="talent-story-editor"] .btn-cancel {
                        min-height: 42px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0 18px;
                        border-radius: 11px;
                        border: 1px solid var(--ts-border);
                        background: #fff;
                        color: var(--ts-ink);
                        text-decoration: none;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    [data-h-scope="talent-story-editor"] .btn-save {
                        min-height: 42px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        padding: 0 20px;
                        border-radius: 11px;
                        border: 1px solid var(--ts-accent);
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                        font-size: 12px;
                        font-weight: 800;
                        box-shadow: 0 7px 18px rgba(72,213,151,.18);
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .btn-save:hover:not(:disabled) {
                        background: var(--ts-accent-dark);
                        border-color: var(--ts-accent-dark);
                        color: #fff;
                        transform: translateY(-1px);
                    }

                    [data-h-scope="talent-story-editor"] .btn-save:disabled {
                        opacity: .65;
                        cursor: not-allowed;
                    }

                    /* =====================================
                       PROGRESS
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .upload-progress {
                        margin-top: 15px;
                    }

                    [data-h-scope="talent-story-editor"] .progress {
                        height: 6px;
                        background: #e9efec;
                        border-radius: 999px;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-editor"] .progress-bar {
                        height: 100%;
                        background: var(--ts-accent);
                        border-radius: 999px;
                        transition: width .2s ease;
                    }

                    [data-h-scope="talent-story-editor"] .progress-label {
                        display: flex;
                        justify-content: space-between;
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-bottom: 6px;
                    }

                    /* =====================================
                       ERROR
                    ====================================== */

                    [data-h-scope="talent-story-editor"] .invalid-feedback {
                        font-size: 11px;
                    }

                    /* =====================================
                       RESPONSIVE
                    ====================================== */

                    @media (max-width: 991.98px) {
                        [data-h-scope="talent-story-editor"] .editor-grid {
                            grid-template-columns: 1fr;
                        }

                        [data-h-scope="talent-story-editor"] .sidebar-card {
                            position: static;
                        }

                        [data-h-scope="talent-story-editor"] .preview-layout {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 18px;
                        }
                    }

                    @media (max-width: 767.98px) {
                        [data-h-scope="talent-story-editor"] .editor-header {
                            padding-top: 20px;
                        }

                        [data-h-scope="talent-story-editor"] .editor-card-header {
                            padding: 17px;
                        }

                        [data-h-scope="talent-story-editor"] .editor-card-body {
                            padding: 17px;
                        }

                        [data-h-scope="talent-story-editor"] .content-editor {
                            min-height: 300px;
                        }

                        [data-h-scope="talent-story-editor"] .preview-layout {
                            display: block;
                        }

                        [data-h-scope="talent-story-editor"] .save-bar {
                            align-items: stretch;
                            flex-direction: column;
                        }

                        [data-h-scope="talent-story-editor"] .save-actions {
                            width: 100%;
                        }

                        [data-h-scope="talent-story-editor"] .btn-cancel,
                        [data-h-scope="talent-story-editor"] .btn-save {
                            flex: 1;
                        }

                        [data-h-scope="talent-story-editor"] .status-options {
                            grid-template-columns: 1fr;
                        }
                    }
                `}),e.jsxs("div",{className:"container-fluid px-3 px-md-4 pb-5",children:[e.jsxs("div",{className:"editor-header",children:[e.jsxs(y,{href:route("talent.page.stories.show",s.id),className:"back-link",children:[e.jsx("i",{className:"fas fa-arrow-left"}),"Back to Story"]}),e.jsx("h1",{className:"editor-title",children:"Edit your story"}),e.jsx("p",{className:"editor-subtitle",children:"Refine your story, update its presentation, and choose how it appears on your talent profile."})]}),e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:"editor-grid",children:[e.jsxs("main",{children:[e.jsxs("div",{className:"editor-card mb-4",children:[e.jsxs("div",{className:"editor-card-header",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"fas fa-pen-nib"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Story content"}),e.jsx("p",{className:"section-description",children:"Tell your audience what makes your journey unique."})]})]}),e.jsx("span",{className:"badge rounded-pill bg-light text-secondary",children:a.status==="published"?"Published":"Draft"})]}),e.jsxs("div",{className:"editor-card-body",children:[e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"field-label",children:[e.jsxs("label",{htmlFor:"story-title",children:["Story title"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("span",{className:"field-help",children:"Make it memorable"})]}),e.jsx("input",{id:"story-title",type:"text",className:`form-control title-input ${i.title?"is-invalid":""}`,value:a.title,onChange:t=>o("title",t.target.value),placeholder:"Give your story a compelling title"}),i.title&&e.jsx("div",{className:"invalid-feedback",children:i.title})]}),e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"field-label",children:[e.jsxs("label",{htmlFor:"story-content",children:["Your story"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("span",{className:"field-help",children:"Share your experience"})]}),e.jsx("textarea",{id:"story-content",className:`form-control content-editor ${i.content?"is-invalid":""}`,value:a.content,onChange:t=>o("content",t.target.value),placeholder:"Tell your story..."}),e.jsxs("div",{className:"character-count",children:[((b=a.content)==null?void 0:b.length)||0," ","characters"]}),i.content&&e.jsx("div",{className:"invalid-feedback",children:i.content})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"field",children:[e.jsx("div",{className:"field-label",children:e.jsx("label",{htmlFor:"category",children:"Category"})}),e.jsxs("select",{id:"category",className:`form-select ${i.category_id?"is-invalid":""}`,value:a.category_id,onChange:t=>o("category_id",t.target.value),children:[e.jsx("option",{value:"",children:"Select a category"}),d.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),i.category_id&&e.jsx("div",{className:"invalid-feedback",children:i.category_id})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"field-label",children:[e.jsx("label",{htmlFor:"tags",children:"Tags"}),e.jsx("span",{className:"field-help",children:"Separate with commas"})]}),e.jsx("input",{id:"tags",type:"text",className:`form-control ${i.tags?"is-invalid":""}`,value:a.tags,onChange:t=>o("tags",t.target.value),placeholder:"Design, Career, Leadership"}),i.tags&&e.jsx("div",{className:"invalid-feedback",children:i.tags}),f.length>0&&e.jsx("div",{className:"tag-preview",children:f.map((t,r)=>e.jsxs("span",{className:"tag-chip",children:["#",t]},`${t}-${r}`))})]})})]})]})]}),e.jsxs("div",{className:"editor-card mb-4",children:[e.jsx("div",{className:"editor-card-header",children:e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"fas fa-images"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Story visuals"}),e.jsx("p",{className:"section-description",children:"Give your story a strong visual identity."})]})]})}),e.jsx("div",{className:"editor-card-body",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-7",children:e.jsxs("div",{className:"field mb-0",children:[e.jsxs("div",{className:"field-label",children:[e.jsx("label",{children:"Cover image"}),e.jsx("span",{className:"field-help",children:"Recommended: 16:9"})]}),e.jsx("div",{className:`upload-zone ${w?"drag-active":""}`,onDragOver:t=>{t.preventDefault(),x(!0)},onDragLeave:()=>x(!1),onDrop:k,children:l?e.jsxs("div",{className:"upload-preview",children:[e.jsx("img",{src:l,alt:"Story thumbnail preview"}),e.jsxs("div",{className:"upload-preview-overlay",children:[e.jsx("span",{className:"preview-label",children:"Cover image"}),e.jsx("button",{type:"button",className:"remove-image",onClick:z,title:"Remove selected image",children:e.jsx("i",{className:"fas fa-trash"})})]})]}):e.jsxs("div",{className:"upload-empty",children:[e.jsx("div",{className:"upload-icon",children:e.jsx("i",{className:"fas fa-cloud-arrow-up"})}),e.jsx("div",{className:"upload-title",children:"Upload a cover image"}),e.jsx("div",{className:"upload-description",children:"Drag and drop an image here, or choose a file from your device."}),e.jsxs("label",{htmlFor:"thumbnail",className:"upload-button",children:[e.jsx("i",{className:"fas fa-plus"}),"Choose image"]}),e.jsx("input",{id:"thumbnail",type:"file",accept:"image/*",className:"d-none",onChange:v})]})}),l&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("label",{htmlFor:"thumbnail-replace",className:"upload-button",children:[e.jsx("i",{className:"fas fa-image"}),"Change image"]}),e.jsx("input",{id:"thumbnail-replace",type:"file",accept:"image/*",className:"d-none",onChange:v})]}),i.thumbnail&&e.jsx("div",{className:"text-danger small mt-2",children:i.thumbnail})]})}),e.jsx("div",{className:"col-lg-5",children:e.jsxs("div",{className:"field mb-0",children:[e.jsx("div",{className:"field-label",children:e.jsx("label",{children:"Attached media"})}),e.jsxs("div",{className:"file-upload",children:[e.jsxs("label",{htmlFor:"media",className:"file-upload-label",children:[e.jsx("div",{className:"file-icon",children:e.jsx("i",{className:"fas fa-paperclip"})}),e.jsxs("div",{children:[e.jsx("div",{className:"file-title",children:"Replace attached file"}),e.jsx("div",{className:"file-description",children:"Video, audio, document or other media"})]})]}),e.jsx("input",{id:"media",type:"file",className:"d-none",onChange:t=>{var r;return o("media",((r=t.target.files)==null?void 0:r[0])||null)}}),s.media&&e.jsxs("div",{className:"current-file",children:[e.jsx("i",{className:"fas fa-file"}),e.jsxs("span",{children:["Current:"," ",s.media.split("/").pop()]})]}),a.media&&e.jsxs("div",{className:"current-file",children:[e.jsx("i",{className:"fas fa-circle-check text-success"}),e.jsxs("span",{children:["New file:"," ",a.media.name]})]})]}),i.media&&e.jsx("div",{className:"text-danger small mt-2",children:i.media})]})})]})})]}),e.jsxs("div",{className:"editor-card d-lg-none mb-4",children:[e.jsx("div",{className:"editor-card-header",children:e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"fas fa-sliders"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Publishing"}),e.jsx("p",{className:"section-description",children:"Control who can see your story."})]})]})}),e.jsx("div",{className:"editor-card-body",children:e.jsx(j,{value:a.status,onChange:t=>o("status",t)})})]})]}),e.jsx("aside",{children:e.jsxs("div",{className:"sidebar-card",children:[e.jsxs("div",{className:"editor-card preview-card mb-4",children:[e.jsx("div",{className:"editor-card-header",children:e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Live preview"}),e.jsx("p",{className:"section-description",children:"How your story will appear."})]})]})}),e.jsxs("div",{className:"preview-cover",children:[l?e.jsx("img",{src:l,alt:"Preview"}):e.jsx("div",{className:"preview-cover-placeholder",children:e.jsx("i",{className:"fas fa-feather-pointed"})}),e.jsxs("div",{className:"preview-content",children:[(c==null?void 0:c.name)&&e.jsx("span",{className:"preview-category",children:c.name}),e.jsx("h3",{className:"preview-title",children:a.title||"Your story title"})]})]}),e.jsxs("div",{className:"preview-body",children:[e.jsxs("div",{className:"preview-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"far fa-calendar me-1"}),"Today"]}),e.jsxs("span",{children:[e.jsx("i",{className:"fas fa-circle me-1"}),a.status==="published"?"Published":"Draft"]})]}),e.jsx("div",{className:"preview-excerpt",children:a.content||"Your story preview will appear here once you start writing."})]})]}),e.jsxs("div",{className:"editor-card publish-box d-none d-lg-block",children:[e.jsxs("div",{className:"publish-status",children:[e.jsx("div",{className:"publish-status-icon",children:e.jsx("i",{className:a.status==="published"?"fas fa-globe":"fas fa-lock"})}),e.jsxs("div",{children:[e.jsx("div",{className:"publish-status-title",children:a.status==="published"?"Visible to everyone":"Private draft"}),e.jsx("div",{className:"publish-status-description",children:a.status==="published"?"Your story can appear on your talent profile.":"Only you can access this draft."})]})]}),e.jsx(j,{value:a.status,onChange:t=>o("status",t)})]})]})})]}),e.jsxs("div",{className:"save-bar",children:[e.jsxs("div",{className:"save-info",children:[e.jsx("i",{className:"fas fa-shield-halved"}),e.jsx("span",{children:"Your changes are saved securely to your talent profile."})]}),e.jsxs("div",{className:"save-actions",children:[e.jsx(y,{href:route("talent.page.stories.show",s.id),className:"btn-cancel",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-save",disabled:m,children:m?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-check"}),"Save Changes"]})})]}),h&&e.jsxs("div",{className:"upload-progress w-100",children:[e.jsxs("div",{className:"progress-label",children:[e.jsx("span",{children:"Uploading changes..."}),e.jsxs("span",{children:[h.percentage,"%"]})]}),e.jsx("div",{className:"progress",children:e.jsx("div",{className:"progress-bar",style:{width:`${h.percentage}%`}})})]})]})]})]})]})]})}function j({value:s,onChange:d}){return e.jsxs("div",{className:"status-options",children:[e.jsxs("div",{className:"status-option",children:[e.jsx("input",{id:"status-published",type:"radio",name:"story_status",value:"published",checked:s==="published",onChange:()=>d("published")}),e.jsxs("label",{htmlFor:"status-published",children:[e.jsx("div",{className:"status-icon",children:e.jsx("i",{className:"fas fa-globe"})}),e.jsxs("div",{children:[e.jsx("div",{className:"status-name",children:"Published"}),e.jsx("div",{className:"status-info",children:"Visible publicly"})]})]})]}),e.jsxs("div",{className:"status-option",children:[e.jsx("input",{id:"status-draft",type:"radio",name:"story_status",value:"draft",checked:s==="draft",onChange:()=>d("draft")}),e.jsxs("label",{htmlFor:"status-draft",children:[e.jsx("div",{className:"status-icon",children:e.jsx("i",{className:"fas fa-file-pen"})}),e.jsxs("div",{children:[e.jsx("div",{className:"status-name",children:"Draft"}),e.jsx("div",{className:"status-info",children:"Keep it private"})]})]})]})]})}export{T as default};
