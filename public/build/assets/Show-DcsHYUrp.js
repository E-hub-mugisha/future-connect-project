import{u as M,j as e,H as $,L as l,a as F}from"./app-CJlpfYPO.js";import{A as I}from"./AppLayout-WTBEreOn.js";function W({course:s}){var b,g,f,v,j,N,y,w,k;const{data:n,setData:c,post:L,processing:u,errors:i,reset:C}=M({course_id:s.id,title:"",content:"",video_url:"",order:(((b=s.lessons)==null?void 0:b.length)??0)+1}),d=[...s.lessons??[]].sort((a,r)=>Number(a.order)-Number(r.order)),m=s.feedback_avg_rating!=null?Number(s.feedback_avg_rating):(g=s.feedback)!=null&&g.length?s.feedback.reduce((a,r)=>a+Number(r.rating||0),0)/s.feedback.length:0,S=s.enrollments_count??((f=s.enrollments)==null?void 0:f.length)??0,p=s.feedback_count??((v=s.feedback)==null?void 0:v.length)??0,_=d.length;function E(a){a.preventDefault(),L(route("admin.courses.lessons.store",{course:s.id}),{onSuccess:()=>{var o;C();const r=document.getElementById("addLessonModal"),t=(o=window.bootstrap)==null?void 0:o.Modal.getInstance(r);t==null||t.hide()}})}function A(a){confirm(`Delete "${a.title}"?`)&&F.delete(route("admin.courses.lessons.destroy",{course:s.id,lesson:a.id}))}function D(a,r){return a?a.length>r?`${a.slice(0,r)}…`:a:""}function x(a){return a?new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—"}function h(a){return a?a.split(" ").map(r=>r.charAt(0)).join("").slice(0,2).toUpperCase():"U"}return e.jsxs(I,{children:[e.jsx($,{title:`${s.title} - Course`}),e.jsx("style",{children:`
                :root {
                    --course-bg: #f6f7fb;
                    --course-surface: #ffffff;
                    --course-border: #e7eaf0;
                    --course-text: #171a21;
                    --course-muted: #737b8c;
                    --course-primary: #4f46e5;
                    --course-primary-dark: #4338ca;
                    --course-primary-soft: #eef0ff;
                    --course-success: #16a34a;
                    --course-success-soft: #eaf8ef;
                    --course-warning: #d97706;
                    --course-warning-soft: #fff5e8;
                    --course-danger: #dc2626;
                    --course-danger-soft: #fff0f0;
                    --course-radius: 18px;
                    --course-shadow: 0 8px 30px rgba(15, 23, 42, .05);
                }

                .course-page {
                    min-height: 100vh;
                    background: var(--course-bg);
                    padding: 28px;
                }

                .course-container {
                    max-width: 1500px;
                    margin: 0 auto;
                }

                /* HEADER */

                .course-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 24px;
                }

                .course-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 8px;
                    color: var(--course-muted);
                    font-size: 13px;
                }

                .course-breadcrumb a {
                    color: var(--course-muted);
                    text-decoration: none;
                }

                .course-breadcrumb a:hover {
                    color: var(--course-primary);
                }

                .course-page-title {
                    margin: 0;
                    color: var(--course-text);
                    font-size: 28px;
                    font-weight: 800;
                    letter-spacing: -.5px;
                }

                .course-page-subtitle {
                    margin: 6px 0 0;
                    color: var(--course-muted);
                    font-size: 14px;
                }

                .header-actions {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }

                .course-btn {
                    min-height: 42px;
                    padding: 0 16px;
                    border-radius: 11px;
                    border: 1px solid transparent;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: .2s ease;
                    cursor: pointer;
                }

                .course-btn-primary {
                    color: white;
                    background: var(--course-primary);
                    border-color: var(--course-primary);
                }

                .course-btn-primary:hover {
                    background: var(--course-primary-dark);
                    border-color: var(--course-primary-dark);
                    color: white;
                    transform: translateY(-1px);
                }

                .course-btn-light {
                    color: var(--course-text);
                    background: white;
                    border-color: var(--course-border);
                }

                .course-btn-light:hover {
                    background: #f9fafb;
                    color: var(--course-primary);
                    border-color: #d9dcf5;
                }

                /* HERO */

                .course-hero {
                    position: relative;
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: minmax(280px, 420px) 1fr;
                    min-height: 330px;
                    background: var(--course-surface);
                    border: 1px solid var(--course-border);
                    border-radius: var(--course-radius);
                    box-shadow: var(--course-shadow);
                    margin-bottom: 20px;
                }

                .course-hero-image {
                    position: relative;
                    min-height: 330px;
                    background: #e9ebf1;
                }

                .course-hero-image img {
                    width: 100%;
                    height: 100%;
                    min-height: 330px;
                    display: block;
                    object-fit: cover;
                }

                .course-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        180deg,
                        rgba(0,0,0,.02),
                        rgba(0,0,0,.3)
                    );
                    pointer-events: none;
                }

                .course-hero-content {
                    padding: 36px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .course-tags {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 18px;
                }

                .course-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border-radius: 999px;
                    padding: 6px 11px;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: .03em;
                }

                .tag-published {
                    color: var(--course-success);
                    background: var(--course-success-soft);
                }

                .tag-draft {
                    color: var(--course-warning);
                    background: var(--course-warning-soft);
                }

                .tag-free {
                    color: var(--course-primary);
                    background: var(--course-primary-soft);
                }

                .tag-neutral {
                    color: #596273;
                    background: #f1f3f6;
                }

                .course-hero-title {
                    margin: 0 0 12px;
                    max-width: 760px;
                    color: var(--course-text);
                    font-size: 32px;
                    line-height: 1.18;
                    font-weight: 850;
                    letter-spacing: -.8px;
                }

                .course-description {
                    max-width: 780px;
                    margin: 0;
                    color: var(--course-muted);
                    font-size: 15px;
                    line-height: 1.75;
                }

                .course-hero-footer {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 18px;
                    margin-top: 25px;
                    padding-top: 20px;
                    border-top: 1px solid var(--course-border);
                }

                .instructor-mini {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .avatar {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    font-size: 12px;
                    font-weight: 800;
                }

                .instructor-label {
                    color: var(--course-muted);
                    font-size: 11px;
                    margin-bottom: 2px;
                }

                .instructor-name {
                    color: var(--course-text);
                    font-size: 13px;
                    font-weight: 700;
                }

                .preview-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--course-primary);
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .preview-link:hover {
                    color: var(--course-primary-dark);
                }

                /* STATS */

                .course-stats {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 14px;
                    margin-bottom: 20px;
                }

                .stat-card {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 18px;
                    background: var(--course-surface);
                    border: 1px solid var(--course-border);
                    border-radius: 15px;
                    box-shadow: var(--course-shadow);
                }

                .stat-icon {
                    width: 44px;
                    height: 44px;
                    flex-shrink: 0;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--course-primary-soft);
                    color: var(--course-primary);
                    font-size: 18px;
                }

                .stat-number {
                    display: block;
                    color: var(--course-text);
                    font-size: 21px;
                    line-height: 1.2;
                    font-weight: 800;
                }

                .stat-label {
                    display: block;
                    margin-top: 3px;
                    color: var(--course-muted);
                    font-size: 12px;
                }

                /* CONTENT */

                .content-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.55fr) minmax(300px, .85fr);
                    gap: 20px;
                }

                .content-card {
                    background: var(--course-surface);
                    border: 1px solid var(--course-border);
                    border-radius: var(--course-radius);
                    box-shadow: var(--course-shadow);
                    overflow: hidden;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 20px 22px;
                    border-bottom: 1px solid var(--course-border);
                }

                .card-title-wrap {
                    display: flex;
                    align-items: center;
                    gap: 11px;
                }

                .card-title-icon {
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    color: var(--course-primary);
                    background: var(--course-primary-soft);
                }

                .card-title {
                    margin: 0;
                    color: var(--course-text);
                    font-size: 15px;
                    font-weight: 800;
                }

                .card-subtitle {
                    margin: 2px 0 0;
                    color: var(--course-muted);
                    font-size: 11px;
                }

                .card-body {
                    padding: 20px 22px;
                }

                /* LESSONS */

                .lesson-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .lesson-row {
                    display: grid;
                    grid-template-columns: 42px minmax(0, 1fr) auto;
                    align-items: center;
                    gap: 13px;
                    padding: 13px;
                    border: 1px solid var(--course-border);
                    border-radius: 13px;
                    transition: .18s ease;
                }

                .lesson-row:hover {
                    border-color: #d8dbef;
                    background: #fbfbff;
                    transform: translateY(-1px);
                }

                .lesson-number {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 11px;
                    color: var(--course-primary);
                    background: var(--course-primary-soft);
                    font-size: 12px;
                    font-weight: 800;
                }

                .lesson-name {
                    color: var(--course-text);
                    font-size: 14px;
                    font-weight: 750;
                    margin-bottom: 3px;
                }

                .lesson-description {
                    color: var(--course-muted);
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .lesson-actions {
                    display: flex;
                    gap: 6px;
                }

                .lesson-action {
                    width: 34px;
                    height: 34px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 9px;
                    border: 1px solid var(--course-border);
                    color: var(--course-muted);
                    background: white;
                    text-decoration: none;
                    cursor: pointer;
                    transition: .18s ease;
                }

                .lesson-action:hover {
                    color: var(--course-primary);
                    border-color: #d8dbef;
                    background: var(--course-primary-soft);
                }

                .lesson-action.delete:hover {
                    color: var(--course-danger);
                    border-color: #ffd5d5;
                    background: var(--course-danger-soft);
                }

                .empty-state {
                    text-align: center;
                    padding: 50px 20px;
                    color: var(--course-muted);
                }

                .empty-icon {
                    width: 55px;
                    height: 55px;
                    margin: 0 auto 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 15px;
                    background: #f3f4f7;
                    color: #9aa1ae;
                    font-size: 22px;
                }

                .empty-state strong {
                    display: block;
                    color: var(--course-text);
                    margin-bottom: 4px;
                }

                .empty-state span {
                    font-size: 12px;
                }

                /* OVERVIEW */

                .meta-list {
                    display: flex;
                    flex-direction: column;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 14px 0;
                    border-bottom: 1px solid var(--course-border);
                }

                .meta-item:first-child {
                    padding-top: 0;
                }

                .meta-item:last-child {
                    padding-bottom: 0;
                    border-bottom: none;
                }

                .meta-label {
                    color: var(--course-muted);
                    font-size: 12px;
                }

                .meta-value {
                    max-width: 60%;
                    color: var(--course-text);
                    font-size: 13px;
                    font-weight: 700;
                    text-align: right;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* FEEDBACK */

                .rating-summary {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 15px;
                    margin-bottom: 18px;
                    border-radius: 13px;
                    background: #fffbf3;
                    border: 1px solid #f7ead0;
                }

                .rating-number {
                    color: var(--course-text);
                    font-size: 30px;
                    font-weight: 850;
                    line-height: 1;
                }

                .rating-stars {
                    display: flex;
                    gap: 2px;
                    color: #f59e0b;
                    font-size: 14px;
                }

                .rating-label {
                    color: var(--course-muted);
                    font-size: 11px;
                    margin-top: 4px;
                }

                .feedback-list {
                    display: flex;
                    flex-direction: column;
                }

                .feedback-item {
                    padding: 15px 0;
                    border-bottom: 1px solid var(--course-border);
                }

                .feedback-item:first-child {
                    padding-top: 0;
                }

                .feedback-item:last-child {
                    padding-bottom: 0;
                    border-bottom: none;
                }

                .feedback-user {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                }

                .feedback-avatar {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #eef0ff;
                    color: var(--course-primary);
                    font-size: 10px;
                    font-weight: 800;
                }

                .feedback-name {
                    color: var(--course-text);
                    font-size: 12px;
                    font-weight: 750;
                }

                .feedback-date {
                    color: var(--course-muted);
                    font-size: 10px;
                }

                .feedback-stars {
                    margin-left: auto;
                    color: #f59e0b;
                    font-size: 11px;
                }

                .feedback-comment {
                    margin: 10px 0 0 41px;
                    color: var(--course-muted);
                    font-size: 12px;
                    line-height: 1.6;
                }

                /* MODAL */

                .lesson-modal .modal-content {
                    border: 0;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 25px 80px rgba(15, 23, 42, .2);
                }

                .lesson-modal .modal-header {
                    padding: 20px 22px;
                    border-bottom: 1px solid var(--course-border);
                }

                .lesson-modal .modal-body {
                    padding: 22px;
                }

                .lesson-modal .modal-footer {
                    padding: 16px 22px;
                    border-top: 1px solid var(--course-border);
                    background: #fafbfc;
                }

                .form-label-modern {
                    display: block;
                    margin-bottom: 7px;
                    color: var(--course-text);
                    font-size: 12px;
                    font-weight: 750;
                }

                .form-control-modern {
                    width: 100%;
                    min-height: 44px;
                    padding: 10px 12px;
                    color: var(--course-text);
                    background: white;
                    border: 1px solid var(--course-border);
                    border-radius: 10px;
                    outline: none;
                    font-size: 13px;
                    transition: .18s ease;
                }

                textarea.form-control-modern {
                    min-height: 110px;
                    resize: vertical;
                }

                .form-control-modern:focus {
                    border-color: var(--course-primary);
                    box-shadow: 0 0 0 3px rgba(79, 70, 229, .1);
                }

                .field-error {
                    margin-top: 5px;
                    color: var(--course-danger);
                    font-size: 11px;
                }

                .modal-btn {
                    min-height: 40px;
                    padding: 0 15px;
                    border-radius: 9px;
                    font-size: 12px;
                    font-weight: 700;
                    border: 1px solid var(--course-border);
                    cursor: pointer;
                }

                .modal-btn-cancel {
                    color: var(--course-muted);
                    background: white;
                }

                .modal-btn-save {
                    color: white;
                    background: var(--course-primary);
                    border-color: var(--course-primary);
                }

                .modal-btn-save:hover {
                    background: var(--course-primary-dark);
                }

                /* RESPONSIVE */

                @media (max-width: 1100px) {
                    .course-hero {
                        grid-template-columns: 1fr;
                    }

                    .course-hero-image {
                        min-height: 260px;
                    }

                    .course-hero-image img {
                        min-height: 260px;
                    }

                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 800px) {
                    .course-page {
                        padding: 18px;
                    }

                    .course-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .course-page-title {
                        font-size: 23px;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .header-actions .course-btn {
                        flex: 1;
                    }

                    .course-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .course-hero-content {
                        padding: 24px;
                    }

                    .course-hero-title {
                        font-size: 25px;
                    }
                }

                @media (max-width: 560px) {
                    .course-page {
                        padding: 12px;
                    }

                    .course-stats {
                        grid-template-columns: 1fr 1fr;
                        gap: 8px;
                    }

                    .stat-card {
                        padding: 13px;
                    }

                    .stat-icon {
                        width: 38px;
                        height: 38px;
                    }

                    .stat-number {
                        font-size: 18px;
                    }

                    .lesson-row {
                        grid-template-columns: 38px minmax(0, 1fr);
                    }

                    .lesson-actions {
                        grid-column: 2;
                    }

                    .meta-item {
                        align-items: flex-start;
                    }

                    .meta-value {
                        max-width: 55%;
                    }
                }
            `}),e.jsx("div",{className:"course-page",children:e.jsxs("div",{className:"course-container",children:[e.jsxs("div",{className:"course-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"course-breadcrumb",children:[e.jsx(l,{href:route("admin.courses.index"),children:"Courses"}),e.jsx("i",{className:"bi bi-chevron-right"}),e.jsx("span",{children:"Course Details"})]}),e.jsx("h1",{className:"course-page-title",children:s.title}),e.jsx("p",{className:"course-page-subtitle",children:"Manage course content, lessons and student feedback"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs(l,{href:route("admin.courses.edit",s.id),className:"course-btn course-btn-primary",children:[e.jsx("i",{className:"bi bi-pencil"}),"Edit Course"]}),e.jsxs(l,{href:route("admin.courses.index"),className:"course-btn course-btn-light",children:[e.jsx("i",{className:"bi bi-arrow-left"}),"Back"]})]})]}),e.jsxs("div",{className:"course-hero",children:[e.jsxs("div",{className:"course-hero-image",children:[e.jsx("img",{src:s.thumbnail?`/images/thumbnails/${s.thumbnail}`:"/images/placeholder-course.png",alt:s.title}),e.jsx("div",{className:"course-image-overlay"})]}),e.jsxs("div",{className:"course-hero-content",children:[e.jsxs("div",{className:"course-tags",children:[e.jsxs("span",{className:`course-tag ${s.status==="published"?"tag-published":"tag-draft"}`,children:[e.jsx("i",{className:`bi ${s.status==="published"?"bi-check-circle-fill":"bi-pencil-square"}`}),s.status==="published"?"Published":"Draft"]}),e.jsxs("span",{className:`course-tag ${s.is_free?"tag-free":"tag-neutral"}`,children:[e.jsx("i",{className:`bi ${s.is_free?"bi-unlock":"bi-cash-stack"}`}),s.is_free?"Free Course":`${Number(s.price||0).toLocaleString()} RWF`]}),e.jsxs("span",{className:"course-tag tag-neutral",children:[e.jsx("i",{className:"bi bi-bar-chart"}),s.level]})]}),e.jsx("h2",{className:"course-hero-title",children:s.title}),e.jsx("p",{className:"course-description",children:s.description||"No description has been provided for this course yet."}),e.jsxs("div",{className:"course-hero-footer",children:[e.jsxs("div",{className:"instructor-mini",children:[e.jsx("div",{className:"avatar",children:h((j=s.talent)==null?void 0:j.name)}),e.jsxs("div",{children:[e.jsx("div",{className:"instructor-label",children:"Instructor"}),e.jsx("div",{className:"instructor-name",children:((N=s.talent)==null?void 0:N.name)||"Not assigned"})]})]}),s.video&&e.jsxs("a",{href:s.video,target:"_blank",rel:"noreferrer",className:"preview-link",children:[e.jsx("i",{className:"bi bi-play-circle-fill"}),"Watch course preview"]})]})]})]}),e.jsxs("div",{className:"course-stats",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"bi bi-star-fill"})}),e.jsxs("div",{children:[e.jsx("span",{className:"stat-number",children:m.toFixed(1)}),e.jsx("span",{className:"stat-label",children:"Average rating"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"bi bi-chat-left-text"})}),e.jsxs("div",{children:[e.jsx("span",{className:"stat-number",children:p}),e.jsx("span",{className:"stat-label",children:"Student reviews"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"bi bi-people"})}),e.jsxs("div",{children:[e.jsx("span",{className:"stat-number",children:S}),e.jsx("span",{className:"stat-label",children:"Enrolled students"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:e.jsx("i",{className:"bi bi-collection-play"})}),e.jsxs("div",{children:[e.jsx("span",{className:"stat-number",children:_}),e.jsx("span",{className:"stat-label",children:"Course lessons"})]})]})]}),e.jsxs("div",{className:"content-grid",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"content-card mb-4",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"card-title-wrap",children:[e.jsx("div",{className:"card-title-icon",children:e.jsx("i",{className:"bi bi-collection-play"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"card-title",children:"Course Lessons"}),e.jsx("p",{className:"card-subtitle",children:"Manage the learning content"})]})]}),e.jsxs("button",{type:"button",className:"course-btn course-btn-primary","data-bs-toggle":"modal","data-bs-target":"#addLessonModal",children:[e.jsx("i",{className:"bi bi-plus-lg"}),"Add Lesson"]})]}),e.jsx("div",{className:"card-body",children:d.length>0?e.jsx("div",{className:"lesson-list",children:d.map((a,r)=>e.jsxs("div",{className:"lesson-row",children:[e.jsx("div",{className:"lesson-number",children:String(r+1).padStart(2,"0")}),e.jsxs("div",{children:[e.jsx("div",{className:"lesson-name",children:a.title}),e.jsx("div",{className:"lesson-description",children:D(a.content,100)||"No lesson description"})]}),e.jsxs("div",{className:"lesson-actions",children:[e.jsx(l,{href:route("admin.courses.lessons.edit",{course:s.id,lesson:a.id}),className:"lesson-action",title:"Edit lesson",children:e.jsx("i",{className:"bi bi-pencil"})}),e.jsx("button",{type:"button",onClick:()=>A(a),className:"lesson-action delete",title:"Delete lesson",children:e.jsx("i",{className:"bi bi-trash"})})]})]},a.id))}):e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx("i",{className:"bi bi-journal-x"})}),e.jsx("strong",{children:"No lessons yet"}),e.jsx("span",{children:"Start building this course by adding your first lesson."})]})})]}),e.jsxs("div",{className:"content-card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{className:"card-title-wrap",children:[e.jsx("div",{className:"card-title-icon",children:e.jsx("i",{className:"bi bi-chat-square-text"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"card-title",children:"Student Feedback"}),e.jsx("p",{className:"card-subtitle",children:"What students are saying"})]})]})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"rating-summary",children:[e.jsx("div",{className:"rating-number",children:m.toFixed(1)}),e.jsxs("div",{children:[e.jsx("div",{className:"rating-stars",children:[1,2,3,4,5].map(a=>e.jsx("i",{className:`bi ${a<=Math.round(m)?"bi-star-fill":"bi-star"}`},a))}),e.jsxs("div",{className:"rating-label",children:["Based on ",p," ",p===1?"review":"reviews"]})]})]}),((y=s.feedback)==null?void 0:y.length)>0?e.jsx("div",{className:"feedback-list",children:s.feedback.map((a,r)=>{var t,o;return e.jsxs("div",{className:"feedback-item",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{className:"feedback-user",children:[e.jsx("div",{className:"feedback-avatar",children:h((t=a.user)==null?void 0:t.name)}),e.jsxs("div",{children:[e.jsx("div",{className:"feedback-name",children:((o=a.user)==null?void 0:o.name)||"Anonymous"}),a.created_at&&e.jsx("div",{className:"feedback-date",children:x(a.created_at)})]})]}),e.jsx("div",{className:"feedback-stars",children:[1,2,3,4,5].map(z=>e.jsx("i",{className:`bi ${z<=Number(a.rating)?"bi-star-fill":"bi-star"}`},z))})]}),a.comment&&e.jsx("p",{className:"feedback-comment",children:a.comment})]},a.id??r)})}):e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx("i",{className:"bi bi-chat-left"})}),e.jsx("strong",{children:"No feedback yet"}),e.jsx("span",{children:"Student reviews will appear here once submitted."})]})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"content-card mb-4",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{className:"card-title-wrap",children:[e.jsx("div",{className:"card-title-icon",children:e.jsx("i",{className:"bi bi-info-circle"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"card-title",children:"Course Overview"}),e.jsx("p",{className:"card-subtitle",children:"Course information"})]})]})}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"meta-list",children:[e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Instructor"}),e.jsx("span",{className:"meta-value",children:((w=s.talent)==null?void 0:w.name)||"—"})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Category"}),e.jsx("span",{className:"meta-value",children:((k=s.category)==null?void 0:k.name)||"—"})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Level"}),e.jsx("span",{className:"meta-value",children:s.level||"—"})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Price"}),e.jsx("span",{className:"meta-value",children:s.is_free?"Free":`${Number(s.price||0).toLocaleString()} RWF`})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Status"}),e.jsx("span",{className:"meta-value",children:s.status==="published"?"Published":"Draft"})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Created"}),e.jsx("span",{className:"meta-value",children:x(s.created_at)})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Updated"}),e.jsx("span",{className:"meta-value",children:x(s.updated_at)})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-label",children:"Slug"}),e.jsx("span",{className:"meta-value",title:s.slug,children:s.slug||"—"})]})]})})]}),e.jsxs("div",{className:"content-card",children:[e.jsx("div",{className:"card-header",children:e.jsxs("div",{className:"card-title-wrap",children:[e.jsx("div",{className:"card-title-icon",children:e.jsx("i",{className:"bi bi-lightning-charge"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"card-title",children:"Quick Actions"}),e.jsx("p",{className:"card-subtitle",children:"Manage this course"})]})]})}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-grid gap-2",children:[e.jsxs(l,{href:route("admin.courses.edit",s.id),className:"course-btn course-btn-primary",children:[e.jsx("i",{className:"bi bi-pencil"}),"Edit Course"]}),e.jsxs("button",{type:"button",className:"course-btn course-btn-light","data-bs-toggle":"modal","data-bs-target":"#addLessonModal",children:[e.jsx("i",{className:"bi bi-plus-circle"}),"Add New Lesson"]}),s.video&&e.jsxs("a",{href:s.video,target:"_blank",rel:"noreferrer",className:"course-btn course-btn-light",children:[e.jsx("i",{className:"bi bi-play-circle"}),"Watch Preview"]})]})})]})]})]})]})}),e.jsx("div",{className:"modal fade lesson-modal",id:"addLessonModal",tabIndex:"-1","aria-labelledby":"addLessonModalLabel","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsx("div",{className:"modal-content",children:e.jsxs("form",{onSubmit:E,children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"modal-title fw-bold mb-1",id:"addLessonModalLabel",children:"Add New Lesson"}),e.jsxs("small",{className:"text-muted",children:["Add a lesson to ",s.title]})]}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label-modern",children:"Lesson Title"}),e.jsx("input",{type:"text",value:n.title,onChange:a=>c("title",a.target.value),className:"form-control-modern",placeholder:"e.g. Introduction to the course",required:!0}),i.title&&e.jsx("div",{className:"field-error",children:i.title})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label-modern",children:"Lesson Content"}),e.jsx("textarea",{value:n.content,onChange:a=>c("content",a.target.value),className:"form-control-modern",placeholder:"Describe what students will learn in this lesson...",rows:"4"}),i.content&&e.jsx("div",{className:"field-error",children:i.content})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label-modern",children:"Video URL"}),e.jsx("input",{type:"url",value:n.video_url,onChange:a=>c("video_url",a.target.value),className:"form-control-modern",placeholder:"https://youtube.com/...",required:!0}),i.video_url&&e.jsx("div",{className:"field-error",children:i.video_url})]}),e.jsxs("div",{className:"mb-0",children:[e.jsx("label",{className:"form-label-modern",children:"Lesson Order"}),e.jsx("input",{type:"number",min:"1",value:n.order,onChange:a=>c("order",a.target.value),className:"form-control-modern"})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"modal-btn modal-btn-cancel","data-bs-dismiss":"modal",children:"Cancel"}),e.jsx("button",{type:"submit",className:"modal-btn modal-btn-save",disabled:u,children:u?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"bi bi-check-lg me-1"}),"Save Lesson"]})})]})]})})})})]})}export{W as default};
