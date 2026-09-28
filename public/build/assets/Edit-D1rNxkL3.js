import{u as c,j as e,H as p,L as o}from"./app-B2SIh33N.js";import{A as x}from"./AppLayout-CkTPU_ZW.js";function f({job:a}){const{data:s,setData:t,put:l,processing:r,errors:n}=c({title:a.title??"",type:a.type??"",experience_level:a.experience_level??"",location:a.location??"",salary_range:a.salary_range??"",skills:a.skills??"",description:a.description??""});function d(i){i.preventDefault(),l(route("admin.jobs.update",a.id))}return e.jsxs(x,{children:[e.jsx(p,{title:`Edit Job — ${a.title}`}),e.jsx("div",{className:"edit-job-page",children:e.jsxs("div",{className:"edit-job-container",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("div",{className:"eyebrow",children:[e.jsx("span",{className:"eyebrow-dot"}),"Recruitment"]}),e.jsx("h1",{children:"Edit Job"}),e.jsx("p",{className:"header-description",children:"Update the information below to keep this job posting accurate and up to date."})]}),e.jsxs(o,{href:route("admin.jobs.index"),className:"back-button",children:[e.jsx("i",{className:"bi bi-arrow-left"}),e.jsx("span",{children:"Back to Jobs"})]})]}),e.jsxs("div",{className:"job-summary",children:[e.jsx("div",{className:"summary-icon",children:e.jsx("i",{className:"bi bi-briefcase"})}),e.jsxs("div",{className:"summary-content",children:[e.jsx("span",{className:"summary-label",children:"Currently editing"}),e.jsx("h2",{children:a.title})]}),e.jsxs("div",{className:"summary-status",children:[e.jsx("span",{className:"status-dot"}),"Job Posting"]})]}),e.jsx("div",{className:"form-card",children:e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{className:"form-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"bi bi-pencil-square"})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Basic Information"}),e.jsx("p",{children:"Update the main information candidates will see about this position."})]})]}),e.jsxs("div",{className:"fields-grid",children:[e.jsxs("div",{className:"field full-width",children:[e.jsxs("label",{htmlFor:"title",children:["Job Title",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{id:"title",type:"text",value:s.title,onChange:i=>t("title",i.target.value),className:n.title?"input-error":"",placeholder:"e.g. Full Stack Developer",required:!0}),n.title&&e.jsxs("div",{className:"error-message",children:[e.jsx("i",{className:"bi bi-exclamation-circle"}),n.title]}),e.jsx("span",{className:"field-hint",children:"Use a clear and specific title that describes the position."})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"type",children:"Job Type"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("i",{className:"bi bi-clock input-icon"}),e.jsxs("select",{id:"type",value:s.type,onChange:i=>t("type",i.target.value),children:[e.jsx("option",{value:"",children:"Select job type"}),e.jsx("option",{value:"Full-time",children:"Full-time"}),e.jsx("option",{value:"Part-time",children:"Part-time"}),e.jsx("option",{value:"Contract",children:"Contract"}),e.jsx("option",{value:"Internship",children:"Internship"}),e.jsx("option",{value:"Remote",children:"Remote"})]})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"experience_level",children:"Experience Level"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("i",{className:"bi bi-bar-chart input-icon"}),e.jsxs("select",{id:"experience_level",value:s.experience_level,onChange:i=>t("experience_level",i.target.value),children:[e.jsx("option",{value:"",children:"Select experience level"}),e.jsx("option",{value:"Junior",children:"Junior"}),e.jsx("option",{value:"Mid",children:"Mid-level"}),e.jsx("option",{value:"Senior",children:"Senior"})]})]})]})]})]}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"form-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"bi bi-geo-alt"})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Position Details"}),e.jsx("p",{children:"Specify where the position is based and the compensation information."})]})]}),e.jsxs("div",{className:"fields-grid",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"location",children:"Location"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("i",{className:"bi bi-geo-alt input-icon"}),e.jsx("input",{id:"location",type:"text",value:s.location,onChange:i=>t("location",i.target.value),placeholder:"e.g. Kigali, Rwanda"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"salary_range",children:"Salary Range"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("i",{className:"bi bi-cash-stack input-icon"}),e.jsx("input",{id:"salary_range",type:"text",value:s.salary_range,onChange:i=>t("salary_range",i.target.value),placeholder:"e.g. 500,000 - 800,000 RWF"})]}),e.jsx("span",{className:"field-hint",children:"You can leave this blank if salary is not publicly disclosed."})]}),e.jsxs("div",{className:"field full-width",children:[e.jsx("label",{htmlFor:"skills",children:"Required Skills"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("i",{className:"bi bi-stars input-icon"}),e.jsx("input",{id:"skills",type:"text",value:s.skills,onChange:i=>t("skills",i.target.value),placeholder:"e.g. Laravel, React, MySQL, Git"})]}),e.jsx("span",{className:"field-hint",children:"Separate multiple skills with commas."})]})]})]}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"form-section",children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("div",{className:"section-icon",children:e.jsx("i",{className:"bi bi-file-text"})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Job Description"}),e.jsx("p",{children:"Provide candidates with enough context to understand the role and expectations."})]})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"description",children:["Description",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("textarea",{id:"description",value:s.description,onChange:i=>t("description",i.target.value),rows:9,className:n.description?"textarea-error":"",placeholder:"Describe the role, responsibilities, expectations, qualifications and other important information...",required:!0}),e.jsxs("div",{className:"textarea-footer",children:[e.jsx("span",{children:"Keep the description clear and easy to scan."}),e.jsxs("span",{children:[s.description.length," characters"]})]}),n.description&&e.jsxs("div",{className:"error-message",children:[e.jsx("i",{className:"bi bi-exclamation-circle"}),n.description]})]})]}),e.jsxs("div",{className:"form-footer",children:[e.jsxs("div",{className:"footer-note",children:[e.jsx("i",{className:"bi bi-shield-check"}),e.jsx("span",{children:"Your changes will be saved to this job posting."})]}),e.jsxs("div",{className:"footer-actions",children:[e.jsx(o,{href:route("admin.jobs.index"),className:"cancel-button",children:"Cancel"}),e.jsx("button",{type:"submit",className:"save-button",disabled:r,children:r?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"button-spinner"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"bi bi-check2"}),"Save Changes"]})})]})]})]})})]})}),e.jsx("style",{children:`
                .edit-job-page {
                    min-height: 100vh;
                    background: #f5f5f7;
                    color: #1d1d1f;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Inter",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                    font-size: 13px;
                    padding: 28px 30px 55px;
                }

                .edit-job-container {
                    width: 100%;
                    max-width: 1080px;
                    margin: 0 auto;
                }

                /* ================= HEADER ================= */

                .page-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 25px;
                    margin-bottom: 24px;
                }

                .header-left {
                    min-width: 0;
                }

                .eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    margin-bottom: 8px;
                    color: #167c52;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                }

                .eyebrow-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #167c52;
                }

                .page-header h1 {
                    margin: 0;
                    font-size: 27px;
                    line-height: 1.15;
                    font-weight: 700;
                    letter-spacing: -.03em;
                    color: #1d1d1f;
                }

                .header-description {
                    margin: 7px 0 0;
                    max-width: 590px;
                    color: #6e6e73;
                    font-size: 12px;
                    line-height: 1.55;
                }

                .back-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    height: 35px;
                    padding: 0 14px;
                    flex-shrink: 0;
                    border: 1px solid #dcdcdf;
                    border-radius: 9px;
                    background: #fff;
                    color: #38383a;
                    font-size: 11px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all .18s ease;
                }

                .back-button:hover {
                    background: #f8f8f8;
                    border-color: #c9c9cc;
                    color: #1d1d1f;
                    transform: translateY(-1px);
                }

                /* ================= JOB SUMMARY ================= */

                .job-summary {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    padding: 15px 17px;
                    margin-bottom: 18px;
                    background: #fff;
                    border: 1px solid #e5e5e7;
                    border-radius: 13px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, .025);
                }

                .summary-icon {
                    width: 39px;
                    height: 39px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    border-radius: 10px;
                    background: #edf8f2;
                    color: #167c52;
                    font-size: 15px;
                }

                .summary-content {
                    min-width: 0;
                    flex: 1;
                }

                .summary-label {
                    display: block;
                    margin-bottom: 2px;
                    color: #86868b;
                    font-size: 9px;
                    font-weight: 600;
                    letter-spacing: .03em;
                    text-transform: uppercase;
                }

                .summary-content h2 {
                    margin: 0;
                    overflow: hidden;
                    color: #1d1d1f;
                    font-size: 14px;
                    font-weight: 650;
                    line-height: 1.35;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .summary-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 9px;
                    border-radius: 999px;
                    background: #f3f8f5;
                    color: #167c52;
                    font-size: 9px;
                    font-weight: 650;
                    white-space: nowrap;
                }

                .status-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: #167c52;
                }

                /* ================= FORM CARD ================= */

                .form-card {
                    overflow: hidden;
                    background: #fff;
                    border: 1px solid #e5e5e7;
                    border-radius: 15px;
                    box-shadow: 0 4px 18px rgba(0, 0, 0, .035);
                }

                .form-section {
                    padding: 25px 27px;
                }

                .section-heading {
                    display: flex;
                    align-items: flex-start;
                    gap: 11px;
                    margin-bottom: 22px;
                }

                .section-icon {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    border-radius: 8px;
                    background: #f2f7f4;
                    color: #167c52;
                    font-size: 13px;
                }

                .section-heading h3 {
                    margin: 0 0 3px;
                    color: #1d1d1f;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: -.01em;
                }

                .section-heading p {
                    margin: 0;
                    color: #86868b;
                    font-size: 10.5px;
                    line-height: 1.5;
                }

                .fields-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 18px 20px;
                }

                .field {
                    min-width: 0;
                }

                .full-width {
                    grid-column: 1 / -1;
                }

                .field label {
                    display: block;
                    margin: 0 0 7px;
                    color: #3a3a3c;
                    font-size: 10.5px;
                    font-weight: 650;
                }

                .required {
                    margin-left: 3px;
                    color: #c43d3d;
                }

                .field input,
                .field select,
                .field textarea {
                    width: 100%;
                    box-sizing: border-box;
                    border: 1px solid #dedee1;
                    outline: none;
                    background: #fff;
                    color: #1d1d1f;
                    font-family: inherit;
                    font-size: 11.5px;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease,
                        background .15s ease;
                }

                .field input,
                .field select {
                    height: 39px;
                    border-radius: 9px;
                    padding: 0 11px;
                }

                .field textarea {
                    min-height: 190px;
                    resize: vertical;
                    border-radius: 9px;
                    padding: 11px 12px;
                    line-height: 1.6;
                }

                .field input::placeholder,
                .field textarea::placeholder {
                    color: #b0b0b5;
                }

                .field input:focus,
                .field select:focus,
                .field textarea:focus {
                    border-color: #4ca47c;
                    box-shadow: 0 0 0 3px rgba(22, 124, 82, .09);
                }

                .input-wrapper {
                    position: relative;
                }

                .input-wrapper .input-icon {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    z-index: 1;
                    color: #98989d;
                    font-size: 11px;
                    pointer-events: none;
                    transform: translateY(-50%);
                }

                .input-wrapper input,
                .input-wrapper select {
                    padding-left: 31px;
                }

                .input-wrapper select {
                    appearance: auto;
                }

                .field-hint {
                    display: block;
                    margin-top: 6px;
                    color: #9a9a9f;
                    font-size: 9.5px;
                    line-height: 1.4;
                }

                .error-message {
                    display: flex;
                    align-items: flex-start;
                    gap: 5px;
                    margin-top: 6px;
                    color: #c43d3d;
                    font-size: 9.5px;
                    line-height: 1.4;
                }

                .input-error,
                .textarea-error {
                    border-color: #d96a6a !important;
                }

                .input-error:focus,
                .textarea-error:focus {
                    box-shadow: 0 0 0 3px rgba(196, 61, 61, .08) !important;
                }

                .section-divider {
                    height: 1px;
                    margin: 0 27px;
                    background: #ededee;
                }

                /* ================= TEXTAREA ================= */

                .textarea-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    margin-top: 7px;
                    color: #9a9a9f;
                    font-size: 9.5px;
                }

                /* ================= FOOTER ================= */

                .form-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 17px 27px;
                    background: #fafafa;
                    border-top: 1px solid #ededee;
                }

                .footer-note {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: #86868b;
                    font-size: 9.5px;
                }

                .footer-note i {
                    color: #167c52;
                    font-size: 11px;
                }

                .footer-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .cancel-button,
                .save-button {
                    height: 36px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    padding: 0 15px;
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 10.5px;
                    font-weight: 650;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all .18s ease;
                }

                .cancel-button {
                    border: 1px solid #dcdcdf;
                    background: #fff;
                    color: #55555a;
                }

                .cancel-button:hover {
                    background: #f4f4f5;
                    color: #1d1d1f;
                }

                .save-button {
                    border: 1px solid #167c52;
                    background: #167c52;
                    color: #fff;
                    box-shadow: 0 2px 6px rgba(22, 124, 82, .16);
                }

                .save-button:hover:not(:disabled) {
                    background: #116440;
                    border-color: #116440;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 10px rgba(22, 124, 82, .2);
                }

                .save-button:disabled {
                    opacity: .65;
                    cursor: not-allowed;
                    transform: none;
                }

                .button-spinner {
                    width: 11px;
                    height: 11px;
                    border: 1.5px solid rgba(255,255,255,.4);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spin .7s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* ================= RESPONSIVE ================= */

                @media (max-width: 760px) {
                    .edit-job-page {
                        padding: 22px 16px 40px;
                    }

                    .page-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .back-button {
                        width: 100%;
                        justify-content: center;
                    }

                    .job-summary {
                        align-items: flex-start;
                    }

                    .summary-status {
                        display: none;
                    }

                    .form-section {
                        padding: 21px 18px;
                    }

                    .fields-grid {
                        grid-template-columns: 1fr;
                        gap: 17px;
                    }

                    .full-width {
                        grid-column: auto;
                    }

                    .section-divider {
                        margin: 0 18px;
                    }

                    .form-footer {
                        align-items: stretch;
                        flex-direction: column;
                        padding: 16px 18px;
                    }

                    .footer-note {
                        justify-content: center;
                    }

                    .footer-actions {
                        width: 100%;
                    }

                    .cancel-button,
                    .save-button {
                        flex: 1;
                    }
                }

                @media (max-width: 450px) {
                    .edit-job-page {
                        padding: 17px 11px 30px;
                    }

                    .page-header h1 {
                        font-size: 23px;
                    }

                    .header-description {
                        font-size: 11px;
                    }

                    .job-summary {
                        padding: 12px;
                    }

                    .form-section {
                        padding: 18px 14px;
                    }

                    .section-heading {
                        margin-bottom: 18px;
                    }

                    .section-divider {
                        margin: 0 14px;
                    }

                    .form-footer {
                        padding: 14px;
                    }

                    .textarea-footer {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 3px;
                    }
                }
            `})]})}export{f as default};
