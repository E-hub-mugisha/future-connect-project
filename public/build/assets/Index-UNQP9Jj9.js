import{r as f,j as e,H as S,L as P,u as z}from"./app-CJlpfYPO.js";import{A as E}from"./AppLayout-WTBEreOn.js";function $({talent:s,categories:o=[],flash:p={}}){var h;const[t,a]=f.useState(!1),[d,n]=f.useState(!1),r=(s==null?void 0:s.feedback)??[],c=(s==null?void 0:s.courses)??[],x=r.slice(0,5),u=c.slice(0,5),g=r.length>0?(r.reduce((l,m)=>l+Number(m.rating||0),0)/r.length).toFixed(1):"0.0",v=[s==null?void 0:s.name,s==null?void 0:s.email,s==null?void 0:s.phone,s==null?void 0:s.address,s==null?void 0:s.language,s==null?void 0:s.description,s==null?void 0:s.category_id,s==null?void 0:s.level,s==null?void 0:s.image],i=Math.round(v.filter(Boolean).length/v.length*100);return e.jsxs(E,{children:[e.jsx(S,{title:`${(s==null?void 0:s.name)||"Talent"} — Profile`}),e.jsxs("div",{"data-h-scope":"talent-profile",children:[e.jsx("style",{children:`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');

                    [data-h-scope="talent-profile"] {
                        --tp-primary: #48d597;
                        --tp-primary-dark: #2fbc7e;
                        --tp-primary-soft: rgba(72, 213, 151, .12);
                        --tp-primary-soft-2: #edf9f3;
                        --tp-primary-ink: #0f3d2b;

                        --tp-text: #151918;
                        --tp-muted: #6b7470;
                        --tp-light-text: #8a938f;

                        --tp-bg: #f5f7f6;
                        --tp-card: #ffffff;
                        --tp-border: #e5ebe8;

                        background: var(--tp-bg);
                        color: var(--tp-text);
                        min-height: 100vh;
                        font-family: 'Inter', sans-serif;
                    }

                    [data-h-scope="talent-profile"] *,
                    [data-h-scope="talent-profile"] *::before,
                    [data-h-scope="talent-profile"] *::after {
                        box-sizing: border-box;
                    }

                    [data-h-scope="talent-profile"] h1,
                    [data-h-scope="talent-profile"] h2,
                    [data-h-scope="talent-profile"] h3,
                    [data-h-scope="talent-profile"] h4,
                    [data-h-scope="talent-profile"] h5,
                    [data-h-scope="talent-profile"] h6 {
                        font-family: 'Space Grotesk', sans-serif;
                    }

                    .tp-container {
                        max-width: 1250px;
                        margin: 0 auto;
                        padding: 30px 24px 70px;
                    }

                    /* =====================================================
                       HERO
                    ===================================================== */

                    .tp-hero {
                        position: relative;
                        overflow: hidden;
                        margin-bottom: 24px;
                        background:
                            radial-gradient(
                                circle at 95% 10%,
                                rgba(72,213,151,.15),
                                transparent 28%
                            ),
                            linear-gradient(
                                135deg,
                                #ffffff 0%,
                                #f9fcfa 52%,
                                #eef8f3 100%
                            );
                        border: 1px solid #e1e9e5;
                        border-radius: 24px;
                        box-shadow: 0 12px 40px rgba(21, 35, 28, .055);
                    }

                    .tp-hero::before {
                        content: "";
                        position: absolute;
                        width: 240px;
                        height: 240px;
                        border-radius: 50%;
                        right: -90px;
                        bottom: -130px;
                        background: rgba(72,213,151,.07);
                    }

                    .tp-hero-inner {
                        position: relative;
                        z-index: 2;
                        padding: 34px;
                    }

                    .tp-profile-row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 28px;
                    }

                    .tp-profile-main {
                        display: flex;
                        align-items: center;
                        gap: 22px;
                        min-width: 0;
                    }

                    .tp-avatar-wrapper {
                        position: relative;
                        flex-shrink: 0;
                    }

                    .tp-avatar {
                        width: 112px;
                        height: 112px;
                        border-radius: 50%;
                        object-fit: cover;
                        display: block;
                        border: 4px solid white;
                        outline: 3px solid var(--tp-primary);
                        background: #edf2ef;
                        box-shadow: 0 10px 25px rgba(20, 45, 34, .12);
                    }

                    .tp-avatar-camera {
                        position: absolute;
                        right: 0;
                        bottom: 2px;
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        background: var(--tp-primary);
                        color: var(--tp-primary-ink);
                        border: 3px solid white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 13px;
                        box-shadow: 0 4px 12px rgba(30, 100, 70, .15);
                    }

                    .tp-name {
                        margin: 0 0 8px;
                        font-size: 32px;
                        line-height: 1.15;
                        font-weight: 800;
                        color: var(--tp-text);
                        letter-spacing: -.03em;
                    }

                    .tp-email {
                        color: #69736e;
                        font-size: 13px;
                        display: flex;
                        align-items: center;
                        gap: 7px;
                    }

                    .tp-email i {
                        color: var(--tp-primary-dark);
                    }

                    .tp-badges {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin-top: 14px;
                    }

                    .tp-badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 7px 11px;
                        border-radius: 999px;
                        font-size: 11px;
                        font-weight: 700;
                        line-height: 1;
                    }

                    .tp-badge-primary {
                        background: var(--tp-primary);
                        color: var(--tp-primary-ink);
                    }

                    .tp-badge-soft {
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-ink);
                        border: 1px solid rgba(72,213,151,.15);
                    }

                    .tp-badge-status {
                        background: #f1f5f3;
                        color: #59635e;
                        border: 1px solid #e3e9e6;
                    }

                    .tp-actions {
                        display: flex;
                        gap: 9px;
                        flex-wrap: wrap;
                        flex-shrink: 0;
                    }

                    .tp-btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        border: 0;
                        border-radius: 11px;
                        padding: 11px 16px;
                        font-size: 12px;
                        font-weight: 700;
                        text-decoration: none;
                        transition: all .2s ease;
                        cursor: pointer;
                        white-space: nowrap;
                    }

                    .tp-btn-primary {
                        background: var(--tp-primary);
                        color: var(--tp-primary-ink);
                        box-shadow: 0 5px 15px rgba(72,213,151,.16);
                    }

                    .tp-btn-primary:hover {
                        background: var(--tp-primary-dark);
                        color: white;
                        transform: translateY(-1px);
                    }

                    .tp-btn-secondary {
                        background: white;
                        color: #27302c;
                        border: 1px solid #dce4e0;
                    }

                    .tp-btn-secondary:hover {
                        background: #f7faf8;
                        border-color: #cbd7d1;
                        color: #151918;
                    }

                    .tp-hero-description {
                        max-width: 760px;
                        margin: 27px 0 0;
                        color: #69736e;
                        line-height: 1.75;
                        font-size: 13px;
                    }

                    /* =====================================================
                       STATS
                    ===================================================== */

                    .tp-stats {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        margin-top: 30px;
                        padding-top: 22px;
                        border-top: 1px solid #e2e9e5;
                    }

                    .tp-stat {
                        padding: 0 22px;
                        border-right: 1px solid #e2e9e5;
                    }

                    .tp-stat:first-child {
                        padding-left: 0;
                    }

                    .tp-stat:last-child {
                        border-right: 0;
                    }

                    .tp-stat-value {
                        font-family: 'Space Grotesk', sans-serif;
                        font-size: 24px;
                        font-weight: 700;
                        color: #17201c;
                    }

                    .tp-stat-label {
                        margin-top: 4px;
                        color: #89928e;
                        font-size: 10px;
                        text-transform: uppercase;
                        letter-spacing: .06em;
                        font-weight: 700;
                    }

                    /* =====================================================
                       MAIN GRID
                    ===================================================== */

                    .tp-grid {
                        display: grid;
                        grid-template-columns: 345px minmax(0, 1fr);
                        gap: 24px;
                    }

                    .tp-card {
                        background: var(--tp-card);
                        border: 1px solid var(--tp-border);
                        border-radius: 18px;
                        overflow: hidden;
                        box-shadow: 0 5px 20px rgba(20,35,28,.025);
                    }

                    .tp-card + .tp-card {
                        margin-top: 20px;
                    }

                    .tp-card-header {
                        padding: 18px 21px;
                        border-bottom: 1px solid var(--tp-border);
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 12px;
                    }

                    .tp-card-title {
                        margin: 0;
                        color: #18201c;
                        font-size: 16px;
                        font-weight: 700;
                    }

                    .tp-card-subtitle {
                        color: #8a938f;
                        font-size: 11px;
                        margin-top: 3px;
                    }

                    .tp-card-body {
                        padding: 21px;
                    }

                    .tp-count {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 28px;
                        height: 28px;
                        padding: 0 8px;
                        border-radius: 8px;
                        background: #f1f4f2;
                        color: #626b67;
                        font-size: 11px;
                        font-weight: 700;
                    }

                    /* =====================================================
                       COMPLETION
                    ===================================================== */

                    .tp-completion-top {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 9px;
                    }

                    .tp-completion-top strong {
                        font-size: 13px;
                        color: #28312d;
                    }

                    .tp-completion-top span {
                        color: var(--tp-primary-dark);
                        font-size: 12px;
                        font-weight: 800;
                    }

                    .tp-progress {
                        width: 100%;
                        height: 8px;
                        overflow: hidden;
                        border-radius: 999px;
                        background: #edf1ef;
                    }

                    .tp-progress-bar {
                        height: 100%;
                        border-radius: inherit;
                        background: linear-gradient(
                            90deg,
                            #48d597,
                            #68e0aa
                        );
                    }

                    .tp-completion-text {
                        margin: 12px 0 0;
                        color: #7b8580;
                        font-size: 11px;
                        line-height: 1.6;
                    }

                    /* =====================================================
                       CONTACT
                    ===================================================== */

                    .tp-contact {
                        display: flex;
                        align-items: flex-start;
                        gap: 12px;
                        margin-bottom: 19px;
                    }

                    .tp-contact:last-child {
                        margin-bottom: 0;
                    }

                    .tp-contact-icon {
                        width: 39px;
                        height: 39px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 11px;
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-dark);
                        font-size: 14px;
                    }

                    .tp-section-label {
                        margin-bottom: 4px;
                        color: #929a96;
                        font-size: 9px;
                        font-weight: 800;
                        text-transform: uppercase;
                        letter-spacing: .07em;
                    }

                    .tp-contact-value {
                        color: #303935;
                        font-size: 12px;
                        font-weight: 600;
                        line-height: 1.5;
                        word-break: break-word;
                    }

                    /* =====================================================
                       SECURITY
                    ===================================================== */

                    .tp-security {
                        display: flex;
                        align-items: center;
                        gap: 13px;
                    }

                    .tp-security-icon {
                        width: 48px;
                        height: 48px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 14px;
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-dark);
                        font-size: 18px;
                    }

                    .tp-security-title {
                        color: #252e2a;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    .tp-security-text {
                        margin-top: 3px;
                        color: #8a938f;
                        font-size: 10px;
                        line-height: 1.5;
                    }

                    .tp-security-button {
                        width: 100%;
                        margin-top: 17px;
                        padding: 10px 14px;
                        border: 1px solid #dce4e0;
                        border-radius: 10px;
                        background: white;
                        color: #303834;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: .2s;
                    }

                    .tp-security-button:hover {
                        background: #f7faf8;
                        border-color: #cbd7d1;
                    }

                    /* =====================================================
                       REVIEWS
                    ===================================================== */

                    .tp-rating-summary {
                        display: flex;
                        align-items: center;
                        gap: 14px;
                        padding: 15px;
                        margin-bottom: 20px;
                        border-radius: 13px;
                        background: #f8faf9;
                        border: 1px solid #edf1ef;
                    }

                    .tp-rating-number {
                        font-family: 'Space Grotesk', sans-serif;
                        font-size: 30px;
                        font-weight: 700;
                        line-height: 1;
                        color: #1c2521;
                    }

                    .tp-rating-stars {
                        color: #f3b63f;
                        font-size: 14px;
                        letter-spacing: 1px;
                    }

                    .tp-rating-text {
                        margin-top: 3px;
                        color: #8a938f;
                        font-size: 10px;
                    }

                    .tp-review {
                        display: flex;
                        gap: 13px;
                        padding: 17px 0;
                        border-bottom: 1px solid var(--tp-border);
                    }

                    .tp-review:first-child {
                        padding-top: 0;
                    }

                    .tp-review:last-child {
                        padding-bottom: 0;
                        border-bottom: 0;
                    }

                    .tp-review-avatar {
                        width: 42px;
                        height: 42px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-ink);
                        font-size: 11px;
                        font-weight: 800;
                    }

                    .tp-review-content {
                        flex: 1;
                        min-width: 0;
                    }

                    .tp-review-top {
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        gap: 12px;
                    }

                    .tp-review-name {
                        color: #252d29;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    .tp-stars {
                        color: #f3b63f;
                        font-size: 11px;
                        white-space: nowrap;
                    }

                    .tp-review-comment {
                        margin: 7px 0 5px;
                        color: #68726d;
                        font-size: 11px;
                        line-height: 1.65;
                    }

                    .tp-review-date {
                        color: #a0a7a4;
                        font-size: 9px;
                    }

                    /* =====================================================
                       COURSES
                    ===================================================== */

                    .tp-table-wrapper {
                        overflow-x: auto;
                    }

                    .tp-table {
                        width: 100%;
                        border-collapse: collapse;
                    }

                    .tp-table th {
                        padding: 12px 14px;
                        background: #f8faf9;
                        border-bottom: 1px solid var(--tp-border);
                        color: #858e8a;
                        text-align: left;
                        font-size: 9px;
                        text-transform: uppercase;
                        letter-spacing: .07em;
                        font-weight: 800;
                    }

                    .tp-table td {
                        padding: 15px 14px;
                        border-bottom: 1px solid var(--tp-border);
                        color: #444d49;
                        font-size: 11px;
                        vertical-align: middle;
                    }

                    .tp-table tbody tr:last-child td {
                        border-bottom: 0;
                    }

                    .tp-table tbody tr {
                        transition: background .15s ease;
                    }

                    .tp-table tbody tr:hover {
                        background: #fbfcfb;
                    }

                    .tp-course-title {
                        color: #252e2a;
                        font-size: 12px;
                        font-weight: 700;
                    }

                    .tp-course-description {
                        max-width: 390px;
                        overflow: hidden;
                        color: #7c8581;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    .tp-course-category {
                        display: inline-flex;
                        padding: 5px 9px;
                        border-radius: 7px;
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-ink);
                        font-size: 9px;
                        font-weight: 800;
                    }

                    /* =====================================================
                       EMPTY
                    ===================================================== */

                    .tp-empty {
                        padding: 45px 20px;
                        text-align: center;
                        color: var(--tp-muted);
                    }

                    .tp-empty-icon {
                        width: 50px;
                        height: 50px;
                        margin: 0 auto 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 15px;
                        background: #f1f4f2;
                        color: #9aa39e;
                        font-size: 17px;
                    }

                    .tp-empty-text {
                        color: #7c8581;
                        font-size: 11px;
                    }

                    /* =====================================================
                       MODALS
                    ===================================================== */

                    .tp-modal-backdrop {
                        position: fixed;
                        inset: 0;
                        z-index: 1050;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                        background: rgba(12,18,15,.55);
                        backdrop-filter: blur(6px);
                    }

                    .tp-modal {
                        width: 100%;
                        max-width: 780px;
                        max-height: 90vh;
                        overflow-y: auto;
                        background: white;
                        border-radius: 20px;
                        box-shadow: 0 30px 80px rgba(0,0,0,.25);
                    }

                    .tp-modal-sm {
                        max-width: 500px;
                    }

                    .tp-modal-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        padding: 20px 23px;
                        border-bottom: 1px solid var(--tp-border);
                    }

                    .tp-modal-title {
                        margin: 0;
                        color: #1c2420;
                        font-size: 18px;
                        font-weight: 700;
                    }

                    .tp-modal-close {
                        width: 34px;
                        height: 34px;
                        border: 0;
                        border-radius: 9px;
                        background: #f1f4f2;
                        color: #69736e;
                        cursor: pointer;
                        transition: .2s;
                    }

                    .tp-modal-close:hover {
                        background: #e7ece9;
                        color: #252d29;
                    }

                    .tp-modal-body {
                        padding: 23px;
                    }

                    /* =====================================================
                       FORM
                    ===================================================== */

                    .tp-form-label {
                        display: block;
                        margin-bottom: 7px;
                        color: #333c38;
                        font-size: 11px;
                        font-weight: 800;
                    }

                    .tp-form-control {
                        width: 100%;
                        min-height: 42px;
                        padding: 10px 12px;
                        border: 1px solid #dfe5e2;
                        border-radius: 10px;
                        outline: none;
                        background: white;
                        color: #303834;
                        font-family: 'Inter', sans-serif;
                        font-size: 12px;
                        transition: .2s;
                    }

                    .tp-form-control::placeholder {
                        color: #a2aaa6;
                    }

                    .tp-form-control:focus {
                        border-color: var(--tp-primary);
                        box-shadow: 0 0 0 3px rgba(72,213,151,.12);
                    }

                    textarea.tp-form-control {
                        resize: vertical;
                    }

                    .tp-form-control.is-invalid {
                        border-color: #dc3545;
                    }

                    .tp-error {
                        margin-top: 5px;
                        color: #dc3545;
                        font-size: 10px;
                    }

                    .tp-photo-editor {
                        display: flex;
                        align-items: center;
                        gap: 17px;
                        margin-bottom: 23px;
                        padding: 15px;
                        border: 1px solid var(--tp-border);
                        border-radius: 14px;
                        background: #f8faf9;
                    }

                    .tp-photo-preview {
                        width: 82px;
                        height: 82px;
                        flex-shrink: 0;
                        border-radius: 50%;
                        object-fit: cover;
                        border: 3px solid white;
                        outline: 2px solid var(--tp-primary);
                    }

                    .tp-upload-note {
                        margin-top: 5px;
                        color: #929b97;
                        font-size: 9px;
                    }

                    .tp-modal-footer {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        gap: 8px;
                        margin-top: 22px;
                        padding-top: 17px;
                        border-top: 1px solid var(--tp-border);
                    }

                    .tp-cancel-btn {
                        border: 1px solid #dfe5e2;
                        border-radius: 10px;
                        background: white;
                        color: #59625e;
                        padding: 10px 15px;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .tp-cancel-btn:hover {
                        background: #f7f9f8;
                    }

                    .tp-password-intro {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        margin-bottom: 22px;
                        padding: 14px;
                        border: 1px solid #e7ece9;
                        border-radius: 13px;
                        background: #f7faf8;
                    }

                    .tp-password-intro-icon {
                        width: 43px;
                        height: 43px;
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 12px;
                        background: var(--tp-primary-soft);
                        color: var(--tp-primary-dark);
                    }

                    .tp-password-intro-title {
                        color: #2b342f;
                        font-size: 11px;
                        font-weight: 800;
                    }

                    .tp-password-intro-text {
                        margin: 3px 0 0;
                        color: #89928e;
                        font-size: 9px;
                        line-height: 1.5;
                    }

                    /* =====================================================
                       ALERT
                    ===================================================== */

                    .tp-success-alert {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        padding: 12px 15px;
                        margin-bottom: 20px;
                        border: 1px solid #cdeede;
                        border-radius: 12px;
                        background: #effaf4;
                        color: #17643f;
                        font-size: 12px;
                        font-weight: 600;
                    }

                    /* =====================================================
                       RESPONSIVE
                    ===================================================== */

                    @media (max-width: 1100px) {
                        .tp-grid {
                            grid-template-columns: 300px minmax(0, 1fr);
                        }

                        .tp-name {
                            font-size: 28px;
                        }
                    }

                    @media (max-width: 992px) {
                        .tp-grid {
                            grid-template-columns: 1fr;
                        }

                        .tp-profile-row {
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        .tp-actions {
                            width: 100%;
                        }
                    }

                    @media (max-width: 700px) {
                        .tp-container {
                            padding: 17px 13px 45px;
                        }

                        .tp-hero-inner {
                            padding: 22px;
                        }

                        .tp-profile-main {
                            width: 100%;
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        .tp-avatar {
                            width: 94px;
                            height: 94px;
                        }

                        .tp-name {
                            font-size: 25px;
                        }

                        .tp-actions {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                        }

                        .tp-actions .tp-btn {
                            width: 100%;
                        }

                        .tp-stats {
                            grid-template-columns: repeat(2, 1fr);
                            gap: 20px 0;
                        }

                        .tp-stat {
                            padding: 0 15px;
                            border-right: 0;
                        }

                        .tp-stat:nth-child(odd) {
                            padding-left: 0;
                        }

                        .tp-stat:nth-child(even) {
                            border-left: 1px solid #e2e9e5;
                        }

                        .tp-table {
                            min-width: 650px;
                        }

                        .tp-photo-editor {
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        .tp-modal-backdrop {
                            padding: 10px;
                        }

                        .tp-modal {
                            max-height: 94vh;
                            border-radius: 16px;
                        }
                    }

                    @media (max-width: 480px) {
                        .tp-actions {
                            grid-template-columns: 1fr;
                        }

                        .tp-profile-main {
                            gap: 16px;
                        }

                        .tp-stats {
                            gap: 17px 0;
                        }

                        .tp-stat-value {
                            font-size: 21px;
                        }

                        .tp-card-body {
                            padding: 17px;
                        }

                        .tp-modal-body {
                            padding: 18px;
                        }
                    }
                `}),e.jsxs("div",{className:"tp-container",children:[(p==null?void 0:p.success)&&e.jsxs("div",{className:"tp-success-alert",children:[e.jsx("i",{className:"fas fa-circle-check"}),e.jsx("span",{children:p.success})]}),e.jsx("div",{className:"tp-hero",children:e.jsxs("div",{className:"tp-hero-inner",children:[e.jsxs("div",{className:"tp-profile-row",children:[e.jsxs("div",{className:"tp-profile-main",children:[e.jsxs("div",{className:"tp-avatar-wrapper",children:[e.jsx("img",{src:s!=null&&s.image?`/${s.image}`:"/img/faces/face10.jpg",alt:(s==null?void 0:s.name)||"Profile",className:"tp-avatar"}),e.jsx("div",{className:"tp-avatar-camera",children:e.jsx("i",{className:"fas fa-camera"})})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"tp-name",children:(s==null?void 0:s.name)||"Unnamed Talent"}),e.jsxs("div",{className:"tp-email",children:[e.jsx("i",{className:"fas fa-envelope"}),e.jsx("span",{children:(s==null?void 0:s.email)||"Email not provided"})]}),e.jsxs("div",{className:"tp-badges",children:[((h=s==null?void 0:s.category)==null?void 0:h.name)&&e.jsxs("span",{className:"tp-badge tp-badge-primary",children:[e.jsx("i",{className:"fas fa-layer-group"}),s.category.name]}),(s==null?void 0:s.level)&&e.jsxs("span",{className:"tp-badge tp-badge-soft",children:[e.jsx("i",{className:"fas fa-chart-line"}),k(s.level)]}),(s==null?void 0:s.status)&&e.jsxs("span",{className:"tp-badge tp-badge-status",children:[e.jsx("i",{className:"fas fa-circle-check"}),k(s.status)]})]})]})]}),e.jsxs("div",{className:"tp-actions",children:[e.jsxs(P,{href:route("talent.page.stories.index"),className:"tp-btn tp-btn-secondary",children:[e.jsx("i",{className:"fas fa-book-open"}),"My Story"]}),e.jsxs("button",{type:"button",className:"tp-btn tp-btn-primary",onClick:()=>a(!0),children:[e.jsx("i",{className:"fas fa-pen"}),"Edit Profile"]})]})]}),(s==null?void 0:s.description)&&e.jsx("p",{className:"tp-hero-description",children:s.description}),e.jsxs("div",{className:"tp-stats",children:[e.jsxs("div",{className:"tp-stat",children:[e.jsx("div",{className:"tp-stat-value",children:r.length}),e.jsx("div",{className:"tp-stat-label",children:"Reviews"})]}),e.jsxs("div",{className:"tp-stat",children:[e.jsx("div",{className:"tp-stat-value",children:g}),e.jsx("div",{className:"tp-stat-label",children:"Average Rating"})]}),e.jsxs("div",{className:"tp-stat",children:[e.jsx("div",{className:"tp-stat-value",children:c.length}),e.jsx("div",{className:"tp-stat-label",children:"Courses"})]}),e.jsxs("div",{className:"tp-stat",children:[e.jsxs("div",{className:"tp-stat-value",children:[i,"%"]}),e.jsx("div",{className:"tp-stat-label",children:"Profile Complete"})]})]})]})}),e.jsxs("div",{className:"tp-grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"tp-card",children:e.jsxs("div",{className:"tp-card-body",children:[e.jsxs("div",{className:"tp-completion-top",children:[e.jsx("strong",{children:"Profile completion"}),e.jsxs("span",{children:[i,"%"]})]}),e.jsx("div",{className:"tp-progress",children:e.jsx("div",{className:"tp-progress-bar",style:{width:`${i}%`}})}),e.jsx("p",{className:"tp-completion-text",children:"A complete profile helps clients understand your expertise and improves your visibility."})]})}),e.jsxs("div",{className:"tp-card",children:[e.jsx("div",{className:"tp-card-header",children:e.jsx("h2",{className:"tp-card-title",children:"Contact Information"})}),e.jsxs("div",{className:"tp-card-body",children:[e.jsx(j,{icon:"fa-phone",label:"Phone",value:s==null?void 0:s.phone}),e.jsx(j,{icon:"fa-envelope",label:"Email",value:s==null?void 0:s.email}),e.jsx(j,{icon:"fa-location-dot",label:"Address",value:s==null?void 0:s.address}),e.jsx(j,{icon:"fa-language",label:"Language",value:s==null?void 0:s.language})]})]}),e.jsxs("div",{className:"tp-card",children:[e.jsx("div",{className:"tp-card-header",children:e.jsx("h2",{className:"tp-card-title",children:"Account Security"})}),e.jsxs("div",{className:"tp-card-body",children:[e.jsxs("div",{className:"tp-security",children:[e.jsx("div",{className:"tp-security-icon",children:e.jsx("i",{className:"fas fa-shield-halved"})}),e.jsxs("div",{children:[e.jsx("div",{className:"tp-security-title",children:"Password protected"}),e.jsx("div",{className:"tp-security-text",children:"Keep your account secure with a strong password."})]})]}),e.jsxs("button",{type:"button",className:"tp-security-button",onClick:()=>n(!0),children:[e.jsx("i",{className:"fas fa-key me-2"}),"Change Password"]})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"tp-card",children:[e.jsxs("div",{className:"tp-card-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"tp-card-title",children:"Client Reviews"}),e.jsx("div",{className:"tp-card-subtitle",children:"Feedback from your clients"})]}),e.jsx("span",{className:"tp-count",children:r.length})]}),e.jsxs("div",{className:"tp-card-body",children:[r.length>0&&e.jsxs("div",{className:"tp-rating-summary",children:[e.jsx("div",{className:"tp-rating-number",children:g}),e.jsxs("div",{children:[e.jsx("div",{className:"tp-rating-stars",children:C(Number(g))}),e.jsxs("div",{className:"tp-rating-text",children:["Based on"," ",r.length," ",r.length===1?"review":"reviews"]})]})]}),x.length===0?e.jsx(w,{icon:"fa-comment-slash",text:"You don't have any reviews yet."}):x.map(l=>e.jsx(R,{review:l},l.id))]})]}),e.jsxs("div",{className:"tp-card",children:[e.jsxs("div",{className:"tp-card-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"tp-card-title",children:"My Courses"}),e.jsx("div",{className:"tp-card-subtitle",children:"Courses and professional training"})]}),e.jsx("span",{className:"tp-count",children:c.length})]}),u.length===0?e.jsx(w,{icon:"fa-book-open",text:"No courses available yet."}):e.jsx("div",{className:"tp-table-wrapper",children:e.jsxs("table",{className:"tp-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Course"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:u.map(l=>{var m;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"tp-course-title",children:l.title})}),e.jsx("td",{children:e.jsx("span",{className:"tp-course-category",children:((m=l.category)==null?void 0:m.name)||"General"})}),e.jsx("td",{children:e.jsx("div",{className:"tp-course-description",children:l.description||"No description"})})]},l.id)})})]})})]})]})]})]}),e.jsx(N,{show:t,onClose:()=>a(!1),title:"Edit Profile",children:e.jsx(_,{talent:s,categories:o,onSaved:()=>a(!1)})}),e.jsx(N,{show:d,onClose:()=>n(!1),title:"Change Password",small:!0,children:e.jsx(A,{onSaved:()=>n(!1)})})]})]})}function j({icon:s,label:o,value:p}){return e.jsxs("div",{className:"tp-contact",children:[e.jsx("div",{className:"tp-contact-icon",children:e.jsx("i",{className:`fas ${s}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"tp-section-label",children:o}),e.jsx("div",{className:"tp-contact-value",children:p||"Not provided"})]})]})}function R({review:s}){const o=Math.max(0,Math.min(5,Number((s==null?void 0:s.rating)||0))),p=(s==null?void 0:s.reviewer_name)||"Anonymous",t=p.split(" ").filter(Boolean).map(a=>a.charAt(0)).join("").slice(0,2).toUpperCase();return e.jsxs("div",{className:"tp-review",children:[e.jsx("div",{className:"tp-review-avatar",children:t||"AN"}),e.jsxs("div",{className:"tp-review-content",children:[e.jsxs("div",{className:"tp-review-top",children:[e.jsx("div",{className:"tp-review-name",children:p}),e.jsx("div",{className:"tp-stars",children:C(o)})]}),e.jsx("div",{className:"tp-review-comment",children:(s==null?void 0:s.comment)||"No comment provided."}),e.jsx("div",{className:"tp-review-date",children:(s==null?void 0:s.created_at_human)||""})]})]})}function w({icon:s,text:o}){return e.jsxs("div",{className:"tp-empty",children:[e.jsx("div",{className:"tp-empty-icon",children:e.jsx("i",{className:`fas ${s}`})}),e.jsx("div",{className:"tp-empty-text",children:o})]})}function N({show:s,onClose:o,title:p,children:t,small:a=!1}){return f.useEffect(()=>{if(!s)return;const d=document.body.style.overflow;document.body.style.overflow="hidden";const n=r=>{r.key==="Escape"&&o()};return document.addEventListener("keydown",n),()=>{document.body.style.overflow=d,document.removeEventListener("keydown",n)}},[s,o]),s?e.jsx("div",{className:"tp-modal-backdrop",onClick:o,children:e.jsxs("div",{className:`tp-modal ${a?"tp-modal-sm":""}`,onClick:d=>d.stopPropagation(),children:[e.jsxs("div",{className:"tp-modal-header",children:[e.jsx("h2",{className:"tp-modal-title",children:p}),e.jsx("button",{type:"button",className:"tp-modal-close",onClick:o,"aria-label":"Close",children:e.jsx("i",{className:"fas fa-xmark"})})]}),e.jsx("div",{className:"tp-modal-body",children:t})]})}):null}function _({talent:s,categories:o=[],onSaved:p}){const{data:t,setData:a,post:d,processing:n,errors:r,progress:c}=z({_method:"put",name:(s==null?void 0:s.name)??"",level:(s==null?void 0:s.level)??"",description:(s==null?void 0:s.description)??"",address:(s==null?void 0:s.address)??"",phone:(s==null?void 0:s.phone)??"",email:(s==null?void 0:s.email)??"",language:(s==null?void 0:s.language)??"",category_id:(s==null?void 0:s.category_id)??"",image:null}),[x,u]=f.useState(s!=null&&s.image?`/${s.image}`:"/img/faces/face10.jpg");function g(i){var m;const h=(m=i.target.files)==null?void 0:m[0];if(!h)return;a("image",h);const l=URL.createObjectURL(h);u(l)}f.useEffect(()=>()=>{x&&x.startsWith("blob:")&&URL.revokeObjectURL(x)},[x]);function v(i){i.preventDefault(),d(route("talent.profile.update",s.id),{forceFormData:!0,preserveScroll:!0,onSuccess:()=>{p()}})}return e.jsxs("form",{onSubmit:v,children:[e.jsxs("div",{className:"tp-photo-editor",children:[e.jsx("img",{src:x,alt:"Profile preview",className:"tp-photo-preview"}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("label",{className:"tp-form-label",children:"Profile Photo"}),e.jsx("input",{type:"file",accept:"image/jpeg,image/png,image/webp",className:`tp-form-control ${r.image?"is-invalid":""}`,onChange:g}),e.jsx("div",{className:"tp-upload-note",children:"JPG, PNG or WEBP. Maximum file size: 2MB."}),r.image&&e.jsx("div",{className:"tp-error",children:r.image}),c&&e.jsx("div",{className:"progress mt-2",style:{height:5,borderRadius:10},children:e.jsx("div",{className:"progress-bar",style:{width:`${c.percentage}%`,background:"#48d597"}})})]})]}),e.jsxs("div",{className:"row g-3",children:[e.jsx(b,{label:"Full Name",value:t.name,error:r.name,col:"col-md-6",onChange:i=>a("name",i)}),e.jsx(b,{label:"Email",type:"email",value:t.email,error:r.email,col:"col-md-6",onChange:i=>a("email",i)}),e.jsx(b,{label:"Phone",value:t.phone,error:r.phone,col:"col-md-6",onChange:i=>a("phone",i)}),e.jsx(b,{label:"Address",value:t.address,error:r.address,col:"col-md-6",onChange:i=>a("address",i)}),e.jsx(b,{label:"Language",value:t.language,error:r.language,col:"col-md-6",placeholder:"e.g. English, French",onChange:i=>a("language",i)}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"tp-form-label",children:"Professional Category"}),e.jsxs("select",{className:`tp-form-control ${r.category_id?"is-invalid":""}`,value:t.category_id,onChange:i=>a("category_id",i.target.value),children:[e.jsx("option",{value:"",children:"Select category"}),o.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]}),r.category_id&&e.jsx("div",{className:"tp-error",children:r.category_id})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"tp-form-label",children:"Professional Level"}),e.jsxs("select",{className:`tp-form-control ${r.level?"is-invalid":""}`,value:t.level,onChange:i=>a("level",i.target.value),children:[e.jsx("option",{value:"",children:"Select level"}),e.jsx("option",{value:"beginner",children:"Beginner"}),e.jsx("option",{value:"intermediate",children:"Intermediate"}),e.jsx("option",{value:"advanced",children:"Advanced"}),e.jsx("option",{value:"expert",children:"Expert"}),e.jsx("option",{value:"senior",children:"Senior"})]}),r.level&&e.jsx("div",{className:"tp-error",children:r.level})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"tp-form-label",children:"Professional Description"}),e.jsx("textarea",{rows:"5",className:`tp-form-control ${r.description?"is-invalid":""}`,value:t.description,onChange:i=>a("description",i.target.value),placeholder:"Tell clients about your experience, expertise and services..."}),r.description&&e.jsx("div",{className:"tp-error",children:r.description})]})]}),e.jsxs("div",{className:"tp-modal-footer",children:[e.jsx("button",{type:"button",className:"tp-cancel-btn",onClick:p,children:"Cancel"}),e.jsx("button",{type:"submit",className:"tp-btn tp-btn-primary",disabled:n,children:n?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-check"}),"Save Changes"]})})]})]})}function A({onSaved:s}){const{data:o,setData:p,put:t,processing:a,errors:d,reset:n}=z({current_password:"",password:"",password_confirmation:""});function r(c){c.preventDefault(),t(route("talent.password.update"),{preserveScroll:!0,onSuccess:()=>{n(),s()}})}return e.jsxs("form",{onSubmit:r,children:[e.jsxs("div",{className:"tp-password-intro",children:[e.jsx("div",{className:"tp-password-intro-icon",children:e.jsx("i",{className:"fas fa-shield-halved"})}),e.jsxs("div",{children:[e.jsx("div",{className:"tp-password-intro-title",children:"Secure your account"}),e.jsx("p",{className:"tp-password-intro-text",children:"Choose a strong password that you don't use on other websites."})]})]}),e.jsx(y,{label:"Current Password",value:o.current_password,error:d.current_password,onChange:c=>p("current_password",c)}),e.jsx(y,{label:"New Password",value:o.password,error:d.password,onChange:c=>p("password",c)}),e.jsx(y,{label:"Confirm New Password",value:o.password_confirmation,error:d.password_confirmation,onChange:c=>p("password_confirmation",c)}),e.jsxs("div",{className:"tp-modal-footer",children:[e.jsx("button",{type:"button",className:"tp-cancel-btn",onClick:s,children:"Cancel"}),e.jsx("button",{type:"submit",className:"tp-btn tp-btn-primary",disabled:a,children:a?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm"}),"Updating..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-key"}),"Update Password"]})})]})]})}function b({label:s,value:o,onChange:p,error:t,col:a="col-12",type:d="text",placeholder:n=""}){return e.jsxs("div",{className:a,children:[e.jsx("label",{className:"tp-form-label",children:s}),e.jsx("input",{type:d,value:o??"",placeholder:n,className:`tp-form-control ${t?"is-invalid":""}`,onChange:r=>p(r.target.value)}),t&&e.jsx("div",{className:"tp-error",children:t})]})}function y({label:s,value:o,onChange:p,error:t}){const[a,d]=f.useState(!1);return e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"tp-form-label",children:s}),e.jsxs("div",{className:"position-relative",children:[e.jsx("input",{type:a?"text":"password",value:o??"",className:`tp-form-control pe-5 ${t?"is-invalid":""}`,onChange:n=>p(n.target.value)}),e.jsx("button",{type:"button",className:"position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent me-2",onClick:()=>d(!a),style:{color:"#727b77",cursor:"pointer"},"aria-label":a?"Hide password":"Show password",children:e.jsx("i",{className:`fas ${a?"fa-eye-slash":"fa-eye"}`})})]}),t&&e.jsx("div",{className:"tp-error",children:t})]})}function C(s){const o=Math.round(Number(s||0)),p=Math.max(0,Math.min(5,o));return e.jsx(e.Fragment,{children:Array.from({length:5},(t,a)=>e.jsx("i",{className:`${a<p?"fas":"far"} fa-star`,style:{marginRight:2}},a))})}function k(s){return s?s.charAt(0).toUpperCase()+s.slice(1):""}export{$ as default};
