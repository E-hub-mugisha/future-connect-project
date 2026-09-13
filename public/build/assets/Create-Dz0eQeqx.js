import{u as _,r as p,j as e,H as F,L as N}from"./app-BV2sDVKx.js";import{A as P}from"./AppLayout-KiVsabfS.js";function I({talent:r,categories:n=[]}){var y,j;const{data:t,setData:o,post:k,processing:m,errors:s,progress:h}=_({title:"",content:"",category_id:"",tags:"",status:"published",thumbnail:null,media:null}),[c,u]=p.useState(null),[z,x]=p.useState(!1),f=p.useMemo(()=>t.tags?Array.isArray(t.tags)?t.tags.map(a=>String(a).trim()).filter(Boolean):String(t.tags).split(",").map(a=>a.trim()).filter(Boolean):[],[t.tags]),d=p.useMemo(()=>n.find(a=>String(a.id)===String(t.category_id)),[n,t.category_id]),g=a=>{if(!a||!a.type.startsWith("image/"))return;o("thumbnail",a);const i=URL.createObjectURL(a);u(i)},b=a=>{var l;const i=(l=a.target.files)==null?void 0:l[0];i&&g(i)},S=a=>{var l;a.preventDefault(),x(!1);const i=(l=a.dataTransfer.files)==null?void 0:l[0];i&&g(i)},C=()=>{u(null),o("thumbnail",null)},A=a=>{var l;const i=(l=a.target.files)==null?void 0:l[0];i&&o("media",i)},D=a=>{a.preventDefault(),k(route("talent.page.stories.store"),{forceFormData:!0})},v=(r==null?void 0:r.name)||(r==null?void 0:r.full_name)||((y=r==null?void 0:r.user)==null?void 0:y.name)||"Your Profile",R=v.split(" ").filter(Boolean).slice(0,2).map(a=>a.charAt(0).toUpperCase()).join("");return e.jsxs(P,{children:[e.jsx(F,{title:"Create Story"}),e.jsxs("div",{"data-h-scope":"talent-story-create",children:[e.jsx("style",{children:`
                    [data-h-scope="talent-story-create"] {
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

                    [data-h-scope="talent-story-create"] * {
                        box-sizing: border-box;
                    }

                    /* ==========================================
                       HEADER
                    =========================================== */

                    [data-h-scope="talent-story-create"] .page-header {
                        padding: 28px 0 22px;
                    }

                    [data-h-scope="talent-story-create"] .back-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        color: var(--ts-muted);
                        text-decoration: none;
                        font-size: 13px;
                        font-weight: 650;
                        margin-bottom: 16px;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-create"] .back-link:hover {
                        color: var(--ts-ink);
                        transform: translateX(-3px);
                    }

                    [data-h-scope="talent-story-create"] .header-row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 20px;
                    }

                    [data-h-scope="talent-story-create"] .page-title {
                        margin: 0;
                        font-size: clamp(26px, 3vw, 36px);
                        font-weight: 800;
                        line-height: 1.15;
                        letter-spacing: -.8px;
                    }

                    [data-h-scope="talent-story-create"] .page-subtitle {
                        margin: 8px 0 0;
                        color: var(--ts-muted);
                        font-size: 14px;
                        line-height: 1.6;
                        max-width: 650px;
                    }

                    [data-h-scope="talent-story-create"] .profile-chip {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 7px 12px 7px 7px;
                        background: #fff;
                        border: 1px solid var(--ts-border);
                        border-radius: 999px;
                    }

                    [data-h-scope="talent-story-create"] .profile-avatar {
                        width: 34px;
                        height: 34px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                        font-size: 11px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-create"] .profile-name {
                        font-size: 11px;
                        font-weight: 750;
                    }

                    /* ==========================================
                       GRID
                    =========================================== */

                    [data-h-scope="talent-story-create"] .editor-grid {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr) 340px;
                        gap: 24px;
                        align-items: start;
                    }

                    /* ==========================================
                       CARDS
                    =========================================== */

                    [data-h-scope="talent-story-create"] .editor-card {
                        background: var(--ts-white);
                        border: 1px solid var(--ts-border);
                        border-radius: 20px;
                        box-shadow: 0 8px 30px rgba(7, 19, 21, .045);
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-create"] .card-header {
                        padding: 20px 24px;
                        border-bottom: 1px solid var(--ts-border);
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                    }

                    [data-h-scope="talent-story-create"] .section-heading {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }

                    [data-h-scope="talent-story-create"] .section-icon {
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

                    [data-h-scope="talent-story-create"] .section-title {
                        margin: 0;
                        font-size: 14px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-create"] .section-description {
                        margin: 2px 0 0;
                        color: var(--ts-muted);
                        font-size: 11px;
                    }

                    [data-h-scope="talent-story-create"] .card-body {
                        padding: 24px;
                    }

                    /* ==========================================
                       FORM
                    =========================================== */

                    [data-h-scope="talent-story-create"] .field {
                        margin-bottom: 22px;
                    }

                    [data-h-scope="talent-story-create"] .field:last-child {
                        margin-bottom: 0;
                    }

                    [data-h-scope="talent-story-create"] .field-label {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        margin-bottom: 8px;
                    }

                    [data-h-scope="talent-story-create"] .field-label label {
                        margin: 0;
                        color: var(--ts-ink);
                        font-size: 13px;
                        font-weight: 750;
                    }

                    [data-h-scope="talent-story-create"] .required {
                        color: var(--ts-danger);
                    }

                    [data-h-scope="talent-story-create"] .field-help {
                        color: var(--ts-muted);
                        font-size: 10px;
                    }

                    [data-h-scope="talent-story-create"] .form-control,
                    [data-h-scope="talent-story-create"] .form-select {
                        min-height: 46px;
                        border: 1px solid #dfe7e4;
                        border-radius: 12px;
                        background: #fff;
                        color: var(--ts-ink);
                        font-size: 13px;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-create"] .form-control {
                        padding: 12px 14px;
                    }

                    [data-h-scope="talent-story-create"] .form-select {
                        padding: 12px 38px 12px 14px;
                    }

                    [data-h-scope="talent-story-create"] .form-control::placeholder {
                        color: #a3adad;
                    }

                    [data-h-scope="talent-story-create"] .form-control:focus,
                    [data-h-scope="talent-story-create"] .form-select:focus {
                        border-color: var(--ts-accent);
                        box-shadow: 0 0 0 4px rgba(72, 213, 151, .12);
                    }

                    [data-h-scope="talent-story-create"] .title-input {
                        min-height: 58px;
                        font-size: 20px;
                        font-weight: 700;
                        letter-spacing: -.2px;
                    }

                    [data-h-scope="talent-story-create"] .content-editor {
                        min-height: 390px;
                        resize: vertical;
                        line-height: 1.8;
                        font-size: 15px;
                    }

                    [data-h-scope="talent-story-create"] .character-count {
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-top: 7px;
                        text-align: right;
                    }

                    /* ==========================================
                       STATUS
                    =========================================== */

                    [data-h-scope="talent-story-create"] .status-options {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                    }

                    [data-h-scope="talent-story-create"] .status-option {
                        position: relative;
                    }

                    [data-h-scope="talent-story-create"] .status-option input {
                        position: absolute;
                        opacity: 0;
                        pointer-events: none;
                    }

                    [data-h-scope="talent-story-create"] .status-option label {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 13px;
                        border: 1px solid var(--ts-border);
                        border-radius: 12px;
                        cursor: pointer;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-create"] .status-option label:hover {
                        border-color: #c8d5d0;
                    }

                    [data-h-scope="talent-story-create"] .status-option input:checked + label {
                        border-color: var(--ts-accent);
                        background: var(--ts-accent-soft);
                    }

                    [data-h-scope="talent-story-create"] .status-icon {
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 9px;
                        background: #f0f4f2;
                        color: var(--ts-muted);
                    }

                    [data-h-scope="talent-story-create"] .status-option input:checked + label .status-icon {
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                    }

                    [data-h-scope="talent-story-create"] .status-name {
                        font-size: 12px;
                        font-weight: 750;
                    }

                    [data-h-scope="talent-story-create"] .status-info {
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    /* ==========================================
                       UPLOAD
                    =========================================== */

                    [data-h-scope="talent-story-create"] .upload-zone {
                        position: relative;
                        min-height: 230px;
                        border: 1.5px dashed #ccd8d4;
                        border-radius: 16px;
                        overflow: hidden;
                        background: #fafcfb;
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-create"] .upload-zone:hover,
                    [data-h-scope="talent-story-create"] .upload-zone.drag-active {
                        border-color: var(--ts-accent);
                        background: rgba(72, 213, 151, .035);
                    }

                    [data-h-scope="talent-story-create"] .upload-empty {
                        min-height: 230px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 25px;
                        text-align: center;
                    }

                    [data-h-scope="talent-story-create"] .upload-icon {
                        width: 54px;
                        height: 54px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 16px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                        font-size: 21px;
                        margin-bottom: 13px;
                    }

                    [data-h-scope="talent-story-create"] .upload-title {
                        color: var(--ts-ink);
                        font-size: 13px;
                        font-weight: 750;
                        margin-bottom: 5px;
                    }

                    [data-h-scope="talent-story-create"] .upload-description {
                        max-width: 280px;
                        color: var(--ts-muted);
                        font-size: 11px;
                        line-height: 1.55;
                        margin-bottom: 14px;
                    }

                    [data-h-scope="talent-story-create"] .upload-button {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 7px;
                        padding: 9px 14px;
                        border-radius: 10px;
                        background: var(--ts-ink);
                        color: #fff;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        text-decoration: none;
                    }

                    [data-h-scope="talent-story-create"] .upload-button:hover {
                        background: var(--ts-accent-dark);
                        color: #fff;
                    }

                    [data-h-scope="talent-story-create"] .upload-preview {
                        position: absolute;
                        inset: 0;
                    }

                    [data-h-scope="talent-story-create"] .upload-preview img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-h-scope="talent-story-create"] .upload-preview-overlay {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        padding: 14px;
                        background: linear-gradient(
                            180deg,
                            transparent 45%,
                            rgba(0,0,0,.75)
                        );
                    }

                    [data-h-scope="talent-story-create"] .preview-label {
                        color: #fff;
                        font-size: 11px;
                        font-weight: 700;
                    }

                    [data-h-scope="talent-story-create"] .remove-image {
                        width: 34px;
                        height: 34px;
                        border: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 9px;
                        background: rgba(255,255,255,.94);
                        color: #dc3545;
                        cursor: pointer;
                    }

                    /* ==========================================
                       MEDIA
                    =========================================== */

                    [data-h-scope="talent-story-create"] .media-upload {
                        border: 1px solid var(--ts-border);
                        border-radius: 14px;
                        padding: 15px;
                        background: #fafcfb;
                    }

                    [data-h-scope="talent-story-create"] .media-label {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        cursor: pointer;
                    }

                    [data-h-scope="talent-story-create"] .media-icon {
                        width: 42px;
                        height: 42px;
                        flex: 0 0 42px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 11px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-create"] .media-title {
                        color: var(--ts-ink);
                        font-size: 12px;
                        font-weight: 750;
                    }

                    [data-h-scope="talent-story-create"] .media-description {
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    [data-h-scope="talent-story-create"] .selected-file {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin-top: 12px;
                        padding: 9px 10px;
                        background: #fff;
                        border: 1px solid var(--ts-border);
                        border-radius: 9px;
                        font-size: 10px;
                        color: var(--ts-muted);
                    }

                    [data-h-scope="talent-story-create"] .selected-file span {
                        min-width: 0;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    /* ==========================================
                       TAGS
                    =========================================== */

                    [data-h-scope="talent-story-create"] .tag-preview {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 6px;
                        margin-top: 9px;
                    }

                    [data-h-scope="talent-story-create"] .tag-chip {
                        display: inline-flex;
                        align-items: center;
                        padding: 5px 9px;
                        border-radius: 999px;
                        background: var(--ts-accent-soft);
                        color: #258c60;
                        font-size: 10px;
                        font-weight: 700;
                    }

                    /* ==========================================
                       SIDEBAR
                    =========================================== */

                    [data-h-scope="talent-story-create"] .sidebar {
                        position: sticky;
                        top: 20px;
                    }

                    /* ==========================================
                       PREVIEW
                    =========================================== */

                    [data-h-scope="talent-story-create"] .preview-card {
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-create"] .preview-header {
                        padding: 18px;
                        border-bottom: 1px solid var(--ts-border);
                    }

                    [data-h-scope="talent-story-create"] .preview-cover {
                        height: 190px;
                        position: relative;
                        overflow: hidden;
                        background:
                            linear-gradient(
                                135deg,
                                #071315,
                                #164b39
                            );
                    }

                    [data-h-scope="talent-story-create"] .preview-cover img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-h-scope="talent-story-create"] .preview-cover::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(
                            180deg,
                            transparent 20%,
                            rgba(0,0,0,.78)
                        );
                    }

                    [data-h-scope="talent-story-create"] .preview-placeholder {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--ts-accent);
                        font-size: 29px;
                    }

                    [data-h-scope="talent-story-create"] .preview-content {
                        position: absolute;
                        z-index: 2;
                        left: 16px;
                        right: 16px;
                        bottom: 15px;
                        color: #fff;
                    }

                    [data-h-scope="talent-story-create"] .preview-category {
                        display: inline-flex;
                        align-items: center;
                        padding: 5px 9px;
                        border-radius: 999px;
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                        font-size: 9px;
                        font-weight: 800;
                        margin-bottom: 8px;
                    }

                    [data-h-scope="talent-story-create"] .preview-title {
                        margin: 0;
                        font-size: 18px;
                        line-height: 1.2;
                        font-weight: 800;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-create"] .preview-body {
                        padding: 17px;
                    }

                    [data-h-scope="talent-story-create"] .preview-meta {
                        display: flex;
                        justify-content: space-between;
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-bottom: 12px;
                    }

                    [data-h-scope="talent-story-create"] .preview-excerpt {
                        color: #687678;
                        font-size: 11px;
                        line-height: 1.6;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    /* ==========================================
                       PUBLISHING
                    =========================================== */

                    [data-h-scope="talent-story-create"] .publish-card {
                        padding: 18px;
                    }

                    [data-h-scope="talent-story-create"] .publish-info {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        margin-bottom: 15px;
                    }

                    [data-h-scope="talent-story-create"] .publish-icon {
                        width: 37px;
                        height: 37px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 10px;
                        background: var(--ts-accent-soft);
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-create"] .publish-title {
                        color: var(--ts-ink);
                        font-size: 12px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-story-create"] .publish-description {
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    /* ==========================================
                       SAVE BAR
                    =========================================== */

                    [data-h-scope="talent-story-create"] .save-bar {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        margin-top: 24px;
                        padding: 18px 20px;
                        background: rgba(255,255,255,.96);
                        border: 1px solid var(--ts-border);
                        border-radius: 16px;
                        box-shadow: 0 8px 25px rgba(7,19,21,.05);
                    }

                    [data-h-scope="talent-story-create"] .save-info {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        color: var(--ts-muted);
                        font-size: 11px;
                    }

                    [data-h-scope="talent-story-create"] .save-info i {
                        color: var(--ts-accent-dark);
                    }

                    [data-h-scope="talent-story-create"] .save-actions {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                    }

                    [data-h-scope="talent-story-create"] .btn-cancel {
                        min-height: 42px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0 18px;
                        border: 1px solid var(--ts-border);
                        border-radius: 11px;
                        background: #fff;
                        color: var(--ts-ink);
                        text-decoration: none;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    [data-h-scope="talent-story-create"] .btn-publish {
                        min-height: 42px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        padding: 0 20px;
                        border: 1px solid var(--ts-accent);
                        border-radius: 11px;
                        background: var(--ts-accent);
                        color: var(--ts-ink);
                        font-size: 12px;
                        font-weight: 800;
                        box-shadow: 0 7px 18px rgba(72,213,151,.18);
                        transition: all .2s ease;
                    }

                    [data-h-scope="talent-story-create"] .btn-publish:hover:not(:disabled) {
                        background: var(--ts-accent-dark);
                        border-color: var(--ts-accent-dark);
                        color: #fff;
                        transform: translateY(-1px);
                    }

                    [data-h-scope="talent-story-create"] .btn-publish:disabled {
                        opacity: .65;
                        cursor: not-allowed;
                    }

                    /* ==========================================
                       PROGRESS
                    =========================================== */

                    [data-h-scope="talent-story-create"] .progress-container {
                        margin-top: 14px;
                    }

                    [data-h-scope="talent-story-create"] .progress-label {
                        display: flex;
                        justify-content: space-between;
                        color: var(--ts-muted);
                        font-size: 10px;
                        margin-bottom: 6px;
                    }

                    [data-h-scope="talent-story-create"] .progress {
                        height: 6px;
                        background: #e9efec;
                        border-radius: 999px;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-story-create"] .progress-bar {
                        height: 100%;
                        background: var(--ts-accent);
                        border-radius: 999px;
                        transition: width .2s ease;
                    }

                    /* ==========================================
                       MOBILE STATUS
                    =========================================== */

                    [data-h-scope="talent-story-create"] .mobile-publish {
                        display: none;
                    }

                    /* ==========================================
                       RESPONSIVE
                    =========================================== */

                    @media (max-width: 991.98px) {
                        [data-h-scope="talent-story-create"] .editor-grid {
                            grid-template-columns: 1fr;
                        }

                        [data-h-scope="talent-story-create"] .sidebar {
                            position: static;
                        }

                        [data-h-scope="talent-story-create"] .desktop-publish {
                            display: none;
                        }

                        [data-h-scope="talent-story-create"] .mobile-publish {
                            display: block;
                        }
                    }

                    @media (max-width: 767.98px) {
                        [data-h-scope="talent-story-create"] .page-header {
                            padding-top: 20px;
                        }

                        [data-h-scope="talent-story-create"] .header-row {
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        [data-h-scope="talent-story-create"] .profile-chip {
                            display: none;
                        }

                        [data-h-scope="talent-story-create"] .card-header,
                        [data-h-scope="talent-story-create"] .card-body {
                            padding: 17px;
                        }

                        [data-h-scope="talent-story-create"] .content-editor {
                            min-height: 300px;
                        }

                        [data-h-scope="talent-story-create"] .status-options {
                            grid-template-columns: 1fr;
                        }

                        [data-h-scope="talent-story-create"] .save-bar {
                            align-items: stretch;
                            flex-direction: column;
                        }

                        [data-h-scope="talent-story-create"] .save-actions {
                            width: 100%;
                        }

                        [data-h-scope="talent-story-create"] .btn-cancel,
                        [data-h-scope="talent-story-create"] .btn-publish {
                            flex: 1;
                        }
                    }
                `}),e.jsxs("div",{className:"container-fluid px-3 px-md-4 pb-5",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs(N,{href:route("talent.get.profile",r.id),className:"back-link",children:[e.jsx("i",{className:"fas fa-arrow-left"}),"Back to Profile"]}),e.jsxs("div",{className:"header-row",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"Create your story"}),e.jsx("p",{className:"page-subtitle",children:"Share your journey, experience and perspective with the talent community. Build a story that helps people understand what makes you unique."})]}),e.jsxs("div",{className:"profile-chip",children:[e.jsx("div",{className:"profile-avatar",children:R||e.jsx("i",{className:"fas fa-user"})}),e.jsx("span",{className:"profile-name",children:v})]})]})]}),e.jsxs("form",{onSubmit:D,children:[e.jsxs("div",{className:"editor-grid",children:[e.jsxs("main",{children:[e.jsxs("div",{className:"editor-card mb-4",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"fas fa-pen-nib"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Story content"}),e.jsx("p",{className:"section-description",children:"Start with a title and tell your story in your own voice."})]})]}),e.jsx("span",{className:"badge rounded-pill bg-light text-secondary",children:"New story"})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"field-label",children:[e.jsxs("label",{htmlFor:"story-title",children:["Story title"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("span",{className:"field-help",children:"Make it memorable"})]}),e.jsx("input",{id:"story-title",type:"text",className:`form-control title-input ${s.title?"is-invalid":""}`,value:t.title,onChange:a=>o("title",a.target.value),placeholder:"e.g. How I turned my passion into a career"}),s.title&&e.jsx("div",{className:"invalid-feedback",children:s.title})]}),e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"field-label",children:[e.jsxs("label",{htmlFor:"story-content",children:["Your story"," ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("span",{className:"field-help",children:"Be authentic"})]}),e.jsx("textarea",{id:"story-content",className:`form-control content-editor ${s.content?"is-invalid":""}`,value:t.content,onChange:a=>o("content",a.target.value),placeholder:`Tell your story...

What inspired you?
What challenges have you overcome?
What have you learned?
What are you working towards?`}),e.jsxs("div",{className:"character-count",children:[((j=t.content)==null?void 0:j.length)||0," ","characters"]}),s.content&&e.jsx("div",{className:"invalid-feedback",children:s.content})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"field-label",children:[e.jsx("label",{htmlFor:"category",children:"Category"}),e.jsx("span",{className:"field-help",children:"Help people discover your story"})]}),e.jsxs("select",{id:"category",className:`form-select ${s.category_id?"is-invalid":""}`,value:t.category_id,onChange:a=>o("category_id",a.target.value),children:[e.jsx("option",{value:"",children:"Select a category"}),n.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),s.category_id&&e.jsx("div",{className:"invalid-feedback",children:s.category_id})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"field-label",children:[e.jsx("label",{htmlFor:"tags",children:"Tags"}),e.jsx("span",{className:"field-help",children:"Separate with commas"})]}),e.jsx("input",{id:"tags",type:"text",className:`form-control ${s.tags?"is-invalid":""}`,value:t.tags,onChange:a=>o("tags",a.target.value),placeholder:"Design, Career, Leadership"}),s.tags&&e.jsx("div",{className:"invalid-feedback",children:s.tags}),f.length>0&&e.jsx("div",{className:"tag-preview",children:f.map((a,i)=>e.jsxs("span",{className:"tag-chip",children:["#",a]},`${a}-${i}`))})]})})]})]})]}),e.jsxs("div",{className:"editor-card mb-4",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"fas fa-images"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Story visuals"}),e.jsx("p",{className:"section-description",children:"Add a cover image and supporting media."})]})]})}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-7",children:e.jsxs("div",{className:"field mb-0",children:[e.jsxs("div",{className:"field-label",children:[e.jsx("label",{children:"Cover image"}),e.jsx("span",{className:"field-help",children:"Recommended: 16:9"})]}),e.jsx("div",{className:`upload-zone ${z?"drag-active":""}`,onDragOver:a=>{a.preventDefault(),x(!0)},onDragLeave:()=>x(!1),onDrop:S,children:c?e.jsxs("div",{className:"upload-preview",children:[e.jsx("img",{src:c,alt:"Story cover preview"}),e.jsxs("div",{className:"upload-preview-overlay",children:[e.jsx("span",{className:"preview-label",children:"Story cover"}),e.jsx("button",{type:"button",className:"remove-image",onClick:C,children:e.jsx("i",{className:"fas fa-trash"})})]})]}):e.jsxs("div",{className:"upload-empty",children:[e.jsx("div",{className:"upload-icon",children:e.jsx("i",{className:"fas fa-cloud-arrow-up"})}),e.jsx("div",{className:"upload-title",children:"Add a cover image"}),e.jsx("div",{className:"upload-description",children:"A strong visual helps your story stand out on your talent profile."}),e.jsxs("label",{htmlFor:"thumbnail",className:"upload-button",children:[e.jsx("i",{className:"fas fa-plus"}),"Choose image"]}),e.jsx("input",{id:"thumbnail",type:"file",accept:"image/*",className:"d-none",onChange:b})]})}),c&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("label",{htmlFor:"thumbnail-change",className:"upload-button",children:[e.jsx("i",{className:"fas fa-image"}),"Change image"]}),e.jsx("input",{id:"thumbnail-change",type:"file",accept:"image/*",className:"d-none",onChange:b})]}),s.thumbnail&&e.jsx("div",{className:"text-danger small mt-2",children:s.thumbnail})]})}),e.jsx("div",{className:"col-lg-5",children:e.jsxs("div",{className:"field mb-0",children:[e.jsx("div",{className:"field-label",children:e.jsx("label",{children:"Supporting media"})}),e.jsxs("div",{className:"media-upload",children:[e.jsxs("label",{htmlFor:"media",className:"media-label",children:[e.jsx("div",{className:"media-icon",children:e.jsx("i",{className:"fas fa-paperclip"})}),e.jsxs("div",{children:[e.jsx("div",{className:"media-title",children:"Add a file"}),e.jsx("div",{className:"media-description",children:"Video, audio, document or other media"})]})]}),e.jsx("input",{id:"media",type:"file",className:"d-none",onChange:A}),t.media&&e.jsxs("div",{className:"selected-file",children:[e.jsx("i",{className:"fas fa-circle-check text-success"}),e.jsx("span",{children:t.media.name})]})]}),s.media&&e.jsx("div",{className:"text-danger small mt-2",children:s.media})]})})]})})]}),e.jsxs("div",{className:"editor-card mobile-publish mb-4",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"fas fa-sliders"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Publishing"}),e.jsx("p",{className:"section-description",children:"Choose how your story will be shared."})]})]})}),e.jsx("div",{className:"card-body",children:e.jsx(w,{value:t.status,onChange:a=>o("status",a)})})]})]}),e.jsx("aside",{children:e.jsxs("div",{className:"sidebar",children:[e.jsxs("div",{className:"editor-card preview-card mb-4",children:[e.jsx("div",{className:"preview-header",children:e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"section-title",children:"Live preview"}),e.jsx("p",{className:"section-description",children:"See how your story will appear."})]})]})}),e.jsxs("div",{className:"preview-cover",children:[c?e.jsx("img",{src:c,alt:"Story preview"}):e.jsx("div",{className:"preview-placeholder",children:e.jsx("i",{className:"fas fa-feather-pointed"})}),e.jsxs("div",{className:"preview-content",children:[(d==null?void 0:d.name)&&e.jsx("span",{className:"preview-category",children:d.name}),e.jsx("h3",{className:"preview-title",children:t.title||"Your story title"})]})]}),e.jsxs("div",{className:"preview-body",children:[e.jsxs("div",{className:"preview-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"far fa-calendar me-1"}),"Today"]}),e.jsxs("span",{children:[e.jsx("i",{className:"fas fa-circle me-1"}),t.status==="published"?"Published":"Draft"]})]}),e.jsx("div",{className:"preview-excerpt",children:t.content||"Your story preview will appear here as you write."})]})]}),e.jsxs("div",{className:"editor-card publish-card desktop-publish",children:[e.jsxs("div",{className:"publish-info",children:[e.jsx("div",{className:"publish-icon",children:e.jsx("i",{className:t.status==="published"?"fas fa-globe":"fas fa-lock"})}),e.jsxs("div",{children:[e.jsx("div",{className:"publish-title",children:t.status==="published"?"Ready to publish":"Saved as a draft"}),e.jsx("div",{className:"publish-description",children:t.status==="published"?"Your story will be visible on your profile.":"Your story will remain private until published."})]})]}),e.jsx(w,{value:t.status,onChange:a=>o("status",a)})]})]})})]}),e.jsxs("div",{className:"save-bar",children:[e.jsxs("div",{className:"save-info",children:[e.jsx("i",{className:"fas fa-shield-halved"}),e.jsx("span",{children:"Your story belongs to your talent profile."})]}),e.jsxs("div",{className:"save-actions",children:[e.jsx(N,{href:route("talent.get.profile",r.id),className:"btn-cancel",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-publish",disabled:m,children:m?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm"}),t.status==="published"?"Publishing...":"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:t.status==="published"?"fas fa-paper-plane":"fas fa-floppy-disk"}),t.status==="published"?"Publish Story":"Save Draft"]})})]}),h&&e.jsxs("div",{className:"progress-container w-100",children:[e.jsxs("div",{className:"progress-label",children:[e.jsx("span",{children:"Uploading your story..."}),e.jsxs("span",{children:[h.percentage,"%"]})]}),e.jsx("div",{className:"progress",children:e.jsx("div",{className:"progress-bar",style:{width:`${h.percentage}%`}})})]})]})]})]})]})]})}function w({value:r,onChange:n}){return e.jsxs("div",{className:"status-options",children:[e.jsxs("div",{className:"status-option",children:[e.jsx("input",{id:"create-status-published",type:"radio",name:"create_story_status",value:"published",checked:r==="published",onChange:()=>n("published")}),e.jsxs("label",{htmlFor:"create-status-published",children:[e.jsx("div",{className:"status-icon",children:e.jsx("i",{className:"fas fa-globe"})}),e.jsxs("div",{children:[e.jsx("div",{className:"status-name",children:"Published"}),e.jsx("div",{className:"status-info",children:"Visible publicly"})]})]})]}),e.jsxs("div",{className:"status-option",children:[e.jsx("input",{id:"create-status-draft",type:"radio",name:"create_story_status",value:"draft",checked:r==="draft",onChange:()=>n("draft")}),e.jsxs("label",{htmlFor:"create-status-draft",children:[e.jsx("div",{className:"status-icon",children:e.jsx("i",{className:"fas fa-file-pen"})}),e.jsxs("div",{children:[e.jsx("div",{className:"status-name",children:"Draft"}),e.jsx("div",{className:"status-info",children:"Keep it private"})]})]})]})]})}export{I as default};
