import{r as g,u as y,j as e,H as k,L as M}from"./app-CJlpfYPO.js";import{A as C}from"./AppLayout-WTBEreOn.js";function t({name:r,className:n="w-5 h-5",strokeWidth:i=1.8}){const o={arrowLeft:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"M12 19l-7-7 7-7"})]}),image:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("path",{d:"M21 15l-5-5L5 21"})]}),upload:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 16V4"}),e.jsx("path",{d:"M7 9l5-5 5 5"}),e.jsx("path",{d:"M5 20h14"})]}),video:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"5",width:"15",height:"14",rx:"2"}),e.jsx("path",{d:"M18 10l3-2v8l-3-2"})]}),check:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M5 12l4 4L19 6"})}),checkCircle:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M8 12l2.5 2.5L16 9"})]}),alert:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 8v5"}),e.jsx("path",{d:"M12 16h.01"})]}),save:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M5 4h12l2 2v14H5z"}),e.jsx("path",{d:"M8 4v5h8V4"}),e.jsx("path",{d:"M9 20v-6h6v6"})]}),book:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 5.5A2.5 2.5 0 016.5 3H20v16H6.5A2.5 2.5 0 014 16.5z"}),e.jsx("path",{d:"M4 16.5A2.5 2.5 0 016.5 14H20"})]}),dollar:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M15 8.5c-.7-.6-1.6-1-3-1-1.7 0-3 1-3 2.3 0 3.2 6 1.6 6 4.6 0 1.3-1.3 2.3-3 2.3-1.4 0-2.5-.4-3.2-1.1"}),e.jsx("path",{d:"M12 6v12"})]}),layers:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 3l9 5-9 5-9-5 9-5z"}),e.jsx("path",{d:"M3 12l9 5 9-5"}),e.jsx("path",{d:"M3 16l9 5 9-5"})]}),sparkle:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 3l1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3z"}),e.jsx("path",{d:"M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15z"})]}),eye:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]}),x:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M6 6l12 12"}),e.jsx("path",{d:"M18 6L6 18"})]}),plus:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 5v14"}),e.jsx("path",{d:"M5 12h14"})]}),edit:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4z"})]}),clock:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 2"})]}),users:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"9",cy:"8",r:"3"}),e.jsx("path",{d:"M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"}),e.jsx("path",{d:"M16 5.5a3 3 0 010 5.5"}),e.jsx("path",{d:"M18 14c1.7.8 3 2.5 3 4.5"})]}),shield:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6z"}),e.jsx("path",{d:"M9 12l2 2 4-4"})]})};return e.jsx("svg",{className:n,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",children:o[r]})}function S({className:r="w-5 h-5"}){return e.jsxs("svg",{className:`${r} animate-spin`,fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"3",opacity:".25"}),e.jsx("path",{d:"M21 12a9 9 0 00-9-9",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]})}function z({course:r,categories:n=[]}){const i=!!(r!=null&&r.id),[o,m]=g.useState(r!=null&&r.thumbnail?r.thumbnail.startsWith("/")?r.thumbnail:`/${r.thumbnail}`:null),{data:a,setData:d,post:b,processing:u,errors:c}=y({_method:i?"put":"post",title:(r==null?void 0:r.title)??"",category_id:(r==null?void 0:r.category_id)??"",level:(r==null?void 0:r.level)??"",description:(r==null?void 0:r.description)??"",thumbnail:null,video:(r==null?void 0:r.video)??"",price:(r==null?void 0:r.price)??"",is_free:(r==null?void 0:r.is_free)??!1,status:(r==null?void 0:r.status)??"draft"}),h=g.useMemo(()=>{const s=[{label:"Course title",complete:a.title.trim().length>=5},{label:"Category selected",complete:!!a.category_id},{label:"Difficulty level",complete:!!a.level},{label:"Course description",complete:a.description.trim().length>=50},{label:"Course thumbnail",complete:!!o||!!a.thumbnail},{label:"Pricing configured",complete:a.is_free||a.price!==""&&Number(a.price)>=0}],l=s.filter(p=>p.complete).length;return{checks:s,completed:l,total:s.length,percentage:Math.round(l/s.length*100)}},[a,o]);function j(s){var p;const l=(p=s.target.files)==null?void 0:p[0];l&&(d("thumbnail",l),m(URL.createObjectURL(l)))}function N(){m(null),d("thumbnail",null)}function w(s){s.preventDefault();const l=i?route("talent.courses.update",r.id):route("talent.courses.store");b(l,{forceFormData:!0,preserveScroll:!0})}const f=n.find(s=>String(s.id)===String(a.category_id));return e.jsxs(C,{children:[e.jsx(k,{title:i?"Edit Course":"Create Course"}),e.jsxs("div",{"data-scope":"modern-course-form",children:[e.jsx("style",{children:`

                    /* =====================================================
                       DESIGN TOKENS
                    ===================================================== */

                    [data-scope="modern-course-form"] {
                        --green: #00a667;
                        --green-dark: #008f59;
                        --green-light: #e9f9f2;
                        --green-soft: #f2fbf7;

                        --black: #111111;
                        --text: #1a1a1a;
                        --muted: #6b7280;

                        --white: #ffffff;
                        --surface: #f7f8f9;
                        --border: #e5e7eb;

                        --danger: #dc2626;
                        --danger-bg: #fef2f2;

                        --warning: #d97706;
                        --warning-bg: #fff7ed;

                        --radius: 18px;
                        --radius-sm: 12px;

                        --shadow:
                            0 1px 2px rgba(0,0,0,.03),
                            0 4px 12px rgba(0,0,0,.04);

                        --shadow-lg:
                            0 12px 30px rgba(0,0,0,.07);

                        background:
                            linear-gradient(
                                180deg,
                                #fbfcfc 0%,
                                #f6f8f7 100%
                            );

                        min-height: 100vh;
                        color: var(--text);
                    }

                    /* =====================================================
                       LAYOUT
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-container {
                        width: 100%;
                        max-width: 1450px;
                        margin: 0 auto;
                        padding: 28px;
                    }

                    @media(max-width: 768px) {
                        [data-scope="modern-course-form"] .mcf-container {
                            padding: 18px 14px;
                        }
                    }

                    /* =====================================================
                       HEADER
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-header {
                        background: var(--white);
                        border: 1px solid var(--border);
                        border-radius: var(--radius);
                        padding: 22px 24px;
                        position: relative;
                        overflow: hidden;
                        box-shadow: var(--shadow);
                    }

                    [data-scope="modern-course-form"] .mcf-header::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: var(--green);
                    }

                    [data-scope="modern-course-form"] .mcf-eyebrow {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        font-size: 11px;
                        font-weight: 800;
                        letter-spacing: .1em;
                        text-transform: uppercase;
                        color: var(--green-dark);
                        margin-bottom: 8px;
                    }

                    [data-scope="modern-course-form"] .mcf-title {
                        font-size: clamp(1.5rem, 3vw, 2rem);
                        line-height: 1.15;
                        font-weight: 800;
                        letter-spacing: -.035em;
                        color: var(--black);
                        margin: 0;
                    }

                    [data-scope="modern-course-form"] .mcf-subtitle {
                        margin: 8px 0 0;
                        color: var(--muted);
                        font-size: .92rem;
                    }

                    /* =====================================================
                       BUTTONS
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        min-height: 44px;
                        padding: 10px 17px;
                        border-radius: 11px;
                        font-size: .875rem;
                        font-weight: 700;
                        text-decoration: none;
                        border: 1px solid transparent;
                        transition: .2s ease;
                    }

                    [data-scope="modern-course-form"] .mcf-btn-primary {
                        background: var(--green);
                        color: white;
                        box-shadow: 0 5px 14px rgba(0,166,103,.2);
                    }

                    [data-scope="modern-course-form"] .mcf-btn-primary:hover {
                        background: var(--green-dark);
                        color: white;
                        transform: translateY(-1px);
                    }

                    [data-scope="modern-course-form"] .mcf-btn-primary:disabled {
                        opacity: .65;
                        cursor: not-allowed;
                        transform: none;
                    }

                    [data-scope="modern-course-form"] .mcf-btn-outline {
                        background: white;
                        border-color: var(--border);
                        color: var(--text);
                    }

                    [data-scope="modern-course-form"] .mcf-btn-outline:hover {
                        border-color: var(--green);
                        color: var(--green-dark);
                        background: var(--green-soft);
                    }

                    /* =====================================================
                       CARDS
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-card {
                        background: var(--white);
                        border: 1px solid var(--border);
                        border-radius: var(--radius);
                        box-shadow: var(--shadow);
                    }

                    [data-scope="modern-course-form"] .mcf-card-header {
                        padding: 20px 22px 16px;
                        border-bottom: 1px solid var(--border);
                    }

                    [data-scope="modern-course-form"] .mcf-card-body {
                        padding: 22px;
                    }

                    [data-scope="modern-course-form"] .mcf-section-title {
                        font-size: .98rem;
                        font-weight: 800;
                        color: var(--black);
                        margin: 0;
                    }

                    [data-scope="modern-course-form"] .mcf-section-description {
                        color: var(--muted);
                        font-size: .8rem;
                        margin: 4px 0 0;
                    }

                    /* =====================================================
                       FORM
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-label {
                        display: block;
                        font-size: .82rem;
                        font-weight: 750;
                        color: var(--text);
                        margin-bottom: 7px;
                    }

                    [data-scope="modern-course-form"] .mcf-control {
                        width: 100%;
                        border: 1px solid #dfe3e6;
                        background: white;
                        border-radius: 11px;
                        padding: 11px 13px;
                        font-size: .9rem;
                        color: var(--text);
                        outline: none;
                        transition: .2s ease;
                    }

                    [data-scope="modern-course-form"] .mcf-control:hover {
                        border-color: #cbd1d5;
                    }

                    [data-scope="modern-course-form"] .mcf-control:focus {
                        border-color: var(--green);
                        box-shadow: 0 0 0 3px rgba(0,166,103,.1);
                    }

                    [data-scope="modern-course-form"] textarea.mcf-control {
                        min-height: 150px;
                        resize: vertical;
                        line-height: 1.6;
                    }

                    [data-scope="modern-course-form"] .mcf-invalid {
                        border-color: var(--danger) !important;
                    }

                    [data-scope="modern-course-form"] .mcf-error {
                        color: var(--danger);
                        font-size: .75rem;
                        margin-top: 5px;
                    }

                    [data-scope="modern-course-form"] .mcf-help {
                        color: var(--muted);
                        font-size: .73rem;
                        margin-top: 6px;
                    }

                    /* =====================================================
                       SECTION NUMBER
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-number {
                        width: 34px;
                        height: 34px;
                        border-radius: 10px;
                        background: var(--green-light);
                        color: var(--green-dark);
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: .8rem;
                        font-weight: 800;
                        flex-shrink: 0;
                    }

                    /* =====================================================
                       THUMBNAIL
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-upload {
                        position: relative;
                        min-height: 205px;
                        border: 1.5px dashed #cfd6d3;
                        border-radius: 14px;
                        background: #fafcfb;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        cursor: pointer;
                        transition: .2s ease;
                    }

                    [data-scope="modern-course-form"] .mcf-upload:hover {
                        border-color: var(--green);
                        background: var(--green-soft);
                    }

                    [data-scope="modern-course-form"] .mcf-upload img {
                        width: 100%;
                        height: 205px;
                        object-fit: cover;
                    }

                    [data-scope="modern-course-form"] .mcf-upload-content {
                        text-align: center;
                        padding: 25px;
                    }

                    [data-scope="modern-course-form"] .mcf-upload-icon {
                        width: 48px;
                        height: 48px;
                        margin: 0 auto 10px;
                        border-radius: 13px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: var(--green-light);
                        color: var(--green);
                    }

                    [data-scope="modern-course-form"] .mcf-remove {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        width: 34px;
                        height: 34px;
                        border: 0;
                        border-radius: 50%;
                        background: rgba(0,0,0,.72);
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        z-index: 2;
                    }

                    /* =====================================================
                       PRICE
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-price-box {
                        border: 1px solid var(--border);
                        border-radius: 13px;
                        padding: 15px;
                        background: #fafafa;
                    }

                    [data-scope="modern-course-form"] .mcf-switch {
                        position: relative;
                        width: 46px;
                        height: 26px;
                        flex-shrink: 0;
                    }

                    [data-scope="modern-course-form"] .mcf-switch input {
                        opacity: 0;
                        width: 0;
                        height: 0;
                    }

                    [data-scope="modern-course-form"] .mcf-slider {
                        position: absolute;
                        inset: 0;
                        background: #d1d5db;
                        border-radius: 30px;
                        cursor: pointer;
                        transition: .2s;
                    }

                    [data-scope="modern-course-form"] .mcf-slider::before {
                        content: "";
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        left: 3px;
                        top: 3px;
                        background: white;
                        border-radius: 50%;
                        transition: .2s;
                        box-shadow: 0 1px 3px rgba(0,0,0,.2);
                    }

                    [data-scope="modern-course-form"] .mcf-switch input:checked + .mcf-slider {
                        background: var(--green);
                    }

                    [data-scope="modern-course-form"] .mcf-switch input:checked + .mcf-slider::before {
                        transform: translateX(20px);
                    }

                    /* =====================================================
                       STATUS
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-status {
                        border: 1px solid var(--border);
                        border-radius: 13px;
                        padding: 14px;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        cursor: pointer;
                        transition: .2s ease;
                    }

                    [data-scope="modern-course-form"] .mcf-status:hover {
                        border-color: #c8d0cc;
                    }

                    [data-scope="modern-course-form"] .mcf-status.active {
                        border-color: var(--green);
                        background: var(--green-soft);
                        box-shadow: 0 0 0 2px rgba(0,166,103,.05);
                    }

                    [data-scope="modern-course-form"] .mcf-status-icon {
                        width: 40px;
                        height: 40px;
                        border-radius: 11px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #f1f3f3;
                        color: #6b7280;
                    }

                    [data-scope="modern-course-form"] .mcf-status.active .mcf-status-icon {
                        background: var(--green-light);
                        color: var(--green-dark);
                    }

                    /* =====================================================
                       CHECKLIST
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-check {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 9px 0;
                        border-bottom: 1px solid #f0f1f1;
                    }

                    [data-scope="modern-course-form"] .mcf-check:last-child {
                        border-bottom: 0;
                    }

                    [data-scope="modern-course-form"] .mcf-check-icon {
                        width: 22px;
                        height: 22px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #eef0f0;
                        color: #9ca3af;
                    }

                    [data-scope="modern-course-form"] .mcf-check.complete .mcf-check-icon {
                        background: var(--green-light);
                        color: var(--green-dark);
                    }

                    /* =====================================================
                       PROGRESS
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-progress {
                        height: 7px;
                        background: #edf0ef;
                        border-radius: 20px;
                        overflow: hidden;
                    }

                    [data-scope="modern-course-form"] .mcf-progress-bar {
                        height: 100%;
                        background: var(--green);
                        border-radius: inherit;
                        transition: width .3s ease;
                    }

                    /* =====================================================
                       PREVIEW
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-preview {
                        overflow: hidden;
                        border-radius: 14px;
                        border: 1px solid var(--border);
                        background: white;
                    }

                    [data-scope="modern-course-form"] .mcf-preview-image {
                        height: 155px;
                        background:
                            linear-gradient(
                                135deg,
                                #e9f9f2,
                                #f7faf9
                            );
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                    }

                    [data-scope="modern-course-form"] .mcf-preview-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-scope="modern-course-form"] .mcf-preview-body {
                        padding: 16px;
                    }

                    [data-scope="modern-course-form"] .mcf-preview-badge {
                        display: inline-flex;
                        padding: 5px 9px;
                        border-radius: 7px;
                        background: var(--green-light);
                        color: var(--green-dark);
                        font-size: .68rem;
                        font-weight: 800;
                    }

                    /* =====================================================
                       ALERT
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-alert {
                        border: 1px solid #fecaca;
                        background: var(--danger-bg);
                        color: #991b1b;
                        border-radius: 13px;
                        padding: 15px;
                    }

                    /* =====================================================
                       RESPONSIVE
                    ===================================================== */

                    @media(max-width: 991px) {
                        [data-scope="modern-course-form"] .mcf-sticky {
                            position: static !important;
                        }
                    }

                    @media(max-width: 575px) {
                        [data-scope="modern-course-form"] .mcf-header {
                            padding: 18px;
                        }

                        [data-scope="modern-course-form"] .mcf-card-body {
                            padding: 17px;
                        }

                        [data-scope="modern-course-form"] .mcf-card-header {
                            padding: 17px;
                        }
                    }

                `}),e.jsxs("div",{className:"mcf-container",children:[e.jsx("div",{className:"mcf-header mb-4",children:e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mcf-eyebrow",children:[e.jsx(t,{name:"book",className:"w-3 h-3"}),"Talent Learning"]}),e.jsx("h1",{className:"mcf-title",children:i?"Edit your course":"Create a new course"}),e.jsx("p",{className:"mcf-subtitle",children:i?"Update your course information and improve your learning experience.":"Turn your knowledge into a professional learning experience."})]}),e.jsxs(M,{href:route("talent.courses.index"),className:"mcf-btn mcf-btn-outline",children:[e.jsx(t,{name:"arrowLeft",className:"w-4 h-4"}),"Back to Courses"]})]})}),Object.keys(c).length>0&&e.jsx("div",{className:"mcf-alert mb-4",children:e.jsxs("div",{className:"d-flex gap-3",children:[e.jsx(t,{name:"alert",className:"w-5 h-5 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("div",{className:"fw-bold mb-1",children:"Please review the form"}),e.jsx("ul",{className:"mb-0 ps-3 small",children:Object.entries(c).map(([s,l])=>e.jsx("li",{children:l},s))})]})]})}),e.jsx("form",{onSubmit:w,children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-xl-8",children:[e.jsxs("div",{className:"mcf-card mb-4",children:[e.jsx("div",{className:"mcf-card-header",children:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"mcf-number",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"mcf-section-title",children:"Course information"}),e.jsx("p",{className:"mcf-section-description",children:"Tell students what your course is about."})]})]})}),e.jsxs("div",{className:"mcf-card-body",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"mcf-label",children:"Course title"}),e.jsx("input",{type:"text",value:a.title,onChange:s=>d("title",s.target.value),placeholder:"e.g. Advanced React & Laravel Development",className:`mcf-control ${c.title?"mcf-invalid":""}`}),c.title&&e.jsx("div",{className:"mcf-error",children:c.title}),e.jsx("div",{className:"mcf-help",children:"Use a clear and specific title that tells learners exactly what they will gain."})]}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"mcf-label",children:"Category"}),e.jsxs("select",{value:a.category_id,onChange:s=>d("category_id",s.target.value),className:`mcf-control ${c.category_id?"mcf-invalid":""}`,children:[e.jsx("option",{value:"",children:"Select category"}),n.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),c.category_id&&e.jsx("div",{className:"mcf-error",children:c.category_id})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"mcf-label",children:"Difficulty level"}),e.jsxs("select",{value:a.level,onChange:s=>d("level",s.target.value),className:`mcf-control ${c.level?"mcf-invalid":""}`,children:[e.jsx("option",{value:"",children:"Select level"}),e.jsx("option",{value:"Beginner",children:"Beginner"}),e.jsx("option",{value:"Intermediate",children:"Intermediate"}),e.jsx("option",{value:"Advanced",children:"Advanced"})]}),c.level&&e.jsx("div",{className:"mcf-error",children:c.level})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[e.jsx("label",{className:"mcf-label mb-0",children:"Course description"}),e.jsxs("span",{className:"small",style:{color:a.description.length>=50?"var(--green-dark)":"var(--muted)"},children:[a.description.length," ","characters"]})]}),e.jsx("textarea",{value:a.description,onChange:s=>d("description",s.target.value),placeholder:"Explain what learners will learn, who this course is for, prerequisites and expected outcomes...",className:`mcf-control ${c.description?"mcf-invalid":""}`}),c.description&&e.jsx("div",{className:"mcf-error",children:c.description}),e.jsx("div",{className:"mcf-help",children:"A detailed description improves learner confidence and course discoverability."})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("label",{className:"mcf-label d-flex align-items-center gap-2",children:[e.jsx(t,{name:"video",className:"w-4 h-4",style:{color:"var(--green)"}}),"Introduction video"]}),e.jsx("input",{type:"url",value:a.video,onChange:s=>d("video",s.target.value),placeholder:"https://youtube.com/watch?v=...",className:`mcf-control ${c.video?"mcf-invalid":""}`}),c.video&&e.jsx("div",{className:"mcf-error",children:c.video}),e.jsx("div",{className:"mcf-help",children:"Add a short video that introduces the course to potential learners."}),a.video&&e.jsx("div",{className:"mt-3",children:e.jsx("video",{controls:!0,style:{width:"100%",maxHeight:320,borderRadius:14,background:"#111"},children:e.jsx("source",{src:a.video,type:"video/mp4"})})})]})]})]}),e.jsxs("div",{className:"mcf-card mb-4",children:[e.jsx("div",{className:"mcf-card-header",children:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"mcf-number",children:"02"}),e.jsxs("div",{children:[e.jsx("h2",{className:"mcf-section-title",children:"Course thumbnail"}),e.jsx("p",{className:"mcf-section-description",children:"Make your course stand out in the talent marketplace."})]})]})}),e.jsxs("div",{className:"mcf-card-body",children:[e.jsxs("label",{className:"mcf-upload",htmlFor:"course-thumbnail",children:[o?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:o,alt:"Course thumbnail preview"}),e.jsx("button",{type:"button",className:"mcf-remove",onClick:s=>{s.preventDefault(),s.stopPropagation(),N()},children:e.jsx(t,{name:"x",className:"w-4 h-4"})})]}):e.jsxs("div",{className:"mcf-upload-content",children:[e.jsx("div",{className:"mcf-upload-icon",children:e.jsx(t,{name:"upload",className:"w-5 h-5"})}),e.jsx("div",{className:"fw-bold",style:{color:"var(--black)"},children:"Upload course thumbnail"}),e.jsx("div",{className:"small mt-1",style:{color:"var(--muted)"},children:"JPG, PNG or WEBP · 1280×720 recommended"})]}),e.jsx("input",{id:"course-thumbnail",type:"file",accept:"image/*",hidden:!0,onChange:j})]}),c.thumbnail&&e.jsx("div",{className:"mcf-error",children:c.thumbnail})]})]}),e.jsxs("div",{className:"mcf-card",children:[e.jsx("div",{className:"mcf-card-header",children:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"mcf-number",children:"03"}),e.jsxs("div",{children:[e.jsx("h2",{className:"mcf-section-title",children:"Marketplace preview"}),e.jsx("p",{className:"mcf-section-description",children:"Preview how your course may appear to learners."})]})]})}),e.jsx("div",{className:"mcf-card-body",children:e.jsx("div",{style:{maxWidth:430,margin:"0 auto"},children:e.jsxs("div",{className:"mcf-preview",children:[e.jsx("div",{className:"mcf-preview-image",children:o?e.jsx("img",{src:o,alt:""}):e.jsx(t,{name:"image",className:"w-10 h-10",style:{color:"#8abfa9"}})}),e.jsxs("div",{className:"mcf-preview-body",children:[e.jsx("span",{className:"mcf-preview-badge",children:(f==null?void 0:f.name)||"Course"}),e.jsx("h3",{className:"fw-bold mt-2 mb-2",style:{fontSize:"1.05rem",color:"var(--black)"},children:a.title||"Your course title"}),e.jsx("p",{className:"small mb-3",style:{color:"var(--muted)",lineHeight:1.55},children:a.description||"Your course description will appear here."}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("div",{className:"small fw-semibold",children:a.level||"Level"}),e.jsx("div",{className:"fw-bold",style:{color:"var(--green-dark)"},children:a.is_free?"Free":a.price?`$${Number(a.price).toFixed(2)}`:"$0.00"})]})]})]})})})]})]}),e.jsx("div",{className:"col-xl-4",children:e.jsxs("div",{className:"mcf-sticky",style:{position:"sticky",top:20},children:[e.jsx("div",{className:"mcf-card mb-4",children:e.jsxs("div",{className:"mcf-card-body",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"fw-bold",style:{color:"var(--black)"},children:"Course readiness"}),e.jsx("div",{className:"small",style:{color:"var(--muted)"},children:"Prepare your course for publishing"})]}),e.jsxs("strong",{style:{color:h.percentage===100?"var(--green-dark)":"var(--black)"},children:[h.percentage,"%"]})]}),e.jsx("div",{className:"mcf-progress mb-3",children:e.jsx("div",{className:"mcf-progress-bar",style:{width:`${h.percentage}%`}})}),e.jsx("div",{children:h.checks.map(s=>e.jsxs("div",{className:`mcf-check ${s.complete?"complete":""}`,children:[e.jsx("span",{className:"mcf-check-icon",children:s.complete?e.jsx(t,{name:"check",className:"w-3 h-3"}):e.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"#b6bdb9"}})}),e.jsx("span",{className:"small",style:{color:s.complete?"var(--text)":"var(--muted)",fontWeight:s.complete?600:500},children:s.label})]},s.label))})]})}),e.jsxs("div",{className:"mcf-card mb-4",children:[e.jsx("div",{className:"mcf-card-header",children:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"mcf-number",style:{background:"#f0f9f5"},children:e.jsx(t,{name:"dollar",className:"w-4 h-4"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"mcf-section-title",children:"Pricing"}),e.jsx("p",{className:"mcf-section-description",children:"Set how learners access your course."})]})]})}),e.jsxs("div",{className:"mcf-card-body",children:[e.jsx("div",{className:"mcf-price-box",children:e.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"fw-bold",children:"Free course"}),e.jsx("div",{className:"small",style:{color:"var(--muted)"},children:"Anyone can access it"})]}),e.jsxs("label",{className:"mcf-switch",children:[e.jsx("input",{type:"checkbox",checked:a.is_free,onChange:s=>d("is_free",s.target.checked)}),e.jsx("span",{className:"mcf-slider"})]})]})}),!a.is_free&&e.jsxs("div",{className:"mt-3",children:[e.jsx("label",{className:"mcf-label",children:"Course price (USD)"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-group-text",style:{background:"#fafafa",borderColor:"#dfe3e6"},children:"$"}),e.jsx("input",{type:"number",min:"0",step:"0.01",value:a.price,onChange:s=>d("price",s.target.value),placeholder:"29.99",className:`form-control ${c.price?"is-invalid":""}`})]}),c.price&&e.jsx("div",{className:"mcf-error",children:c.price})]})]})]}),e.jsxs("div",{className:"mcf-card mb-4",children:[e.jsx("div",{className:"mcf-card-header",children:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"mcf-number",children:e.jsx(t,{name:"shield",className:"w-4 h-4"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"mcf-section-title",children:"Publishing"}),e.jsx("p",{className:"mcf-section-description",children:"Choose who can see your course."})]})]})}),e.jsx("div",{className:"mcf-card-body",children:e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(v,{label:"Draft",description:"Keep working on your course",active:a.status==="draft",icon:e.jsx(t,{name:"edit",className:"w-4 h-4"}),onClick:()=>d("status","draft")}),e.jsx(v,{label:"Published",description:"Make course visible to learners",active:a.status==="published",icon:e.jsx(t,{name:"checkCircle",className:"w-4 h-4"}),onClick:()=>d("status","published")})]})})]}),e.jsx("div",{className:"mcf-card mb-4",children:e.jsxs("div",{className:"mcf-card-body",children:[e.jsx("div",{className:"fw-bold mb-3",children:"Course snapshot"}),e.jsxs("div",{className:"row g-2",children:[e.jsx(x,{icon:"layers",label:"Level",value:a.level||"Not set"}),e.jsx(x,{icon:"users",label:"Audience",value:"Learners"}),e.jsx(x,{icon:"video",label:"Intro",value:a.video?"Added":"Optional"}),e.jsx(x,{icon:"image",label:"Thumbnail",value:o?"Ready":"Missing"})]})]})}),e.jsx("button",{type:"submit",disabled:u,className:"mcf-btn mcf-btn-primary w-100",style:{minHeight:54,fontSize:".95rem"},children:u?e.jsxs(e.Fragment,{children:[e.jsx(S,{}),"Saving course..."]}):e.jsxs(e.Fragment,{children:[e.jsx(t,{name:"save",className:"w-5 h-5"}),i?"Update Course":a.status==="published"?"Publish Course":"Save Course"]})}),e.jsx("div",{className:"text-center mt-2",style:{color:"var(--muted)",fontSize:".7rem"},children:"You can change these settings later."})]})})]})})]})]})]})}function v({label:r,description:n,icon:i,active:o,onClick:m}){return e.jsxs("div",{className:`mcf-status ${o?"active":""}`,onClick:m,role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&m()},children:[e.jsx("div",{className:"mcf-status-icon",children:i}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("div",{className:"fw-bold",style:{fontSize:".84rem"},children:r}),e.jsx("div",{style:{color:"var(--muted)",fontSize:".7rem",marginTop:2},children:n})]}),o&&e.jsx("div",{style:{color:"var(--green)"},children:e.jsx(t,{name:"checkCircle",className:"w-4 h-4"})})]})}function x({icon:r,label:n,value:i}){return e.jsxs("div",{className:"col-6",style:{background:"#fafafa",border:"1px solid #eef0ef",borderRadius:11,padding:10},children:[e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-1",style:{color:"var(--muted)"},children:[e.jsx(t,{name:r,className:"w-3 h-3"}),e.jsx("span",{style:{fontSize:".65rem"},children:n})]}),e.jsx("div",{className:"fw-bold text-truncate",style:{fontSize:".75rem",color:i==="Missing"?"#dc2626":i==="Ready"?"var(--green-dark)":"var(--black)"},title:i,children:i})]})}export{z as default};
