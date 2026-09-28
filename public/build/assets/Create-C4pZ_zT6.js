import{u,j as e,H as g,L as c}from"./app-B2SIh33N.js";import{A as f}from"./AppLayout-CkTPU_ZW.js";function i({name:n,size:a=18}){const t={width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},p={arrowLeft:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"m12 19-7-7 7-7"})]}),plus:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 5v14"}),e.jsx("path",{d:"M5 12h14"})]}),folder:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3.5 7.5A2.5 2.5 0 0 1 6 5h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z"})}),tag:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20 13 13 20 4 11V4h7l9 9Z"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.2"})]}),wallet:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H19"}),e.jsx("path",{d:"M4 7.5V18a2 2 0 0 0 2 2h13V8H6.5A2.5 2.5 0 0 1 4 5v2.5Z"}),e.jsx("path",{d:"M15 14h3"})]}),location:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),e.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),document:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M6 3.5h8l4 4V20.5H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z"}),e.jsx("path",{d:"M14 3.5v4h4"}),e.jsx("path",{d:"M8 12h8M8 16h6"})]}),settings:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.02 1.55V20h-2.4v-.09a1.7 1.7 0 0 0-1.02-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.55-1.02H6.8v-2.4h.05A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 12.66 5.2v-.1h2.4v.1a1.7 1.7 0 0 0 1.02 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10c.23.62.82 1.02 1.55 1.02H21v2.4h-.05c-.73 0-1.32.4-1.55 1.02Z"})]}),check:e.jsx("path",{d:"m5 12 4 4L19 6"}),save:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M5 3.5h12l2 2V20.5H5a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 5 3.5Z"}),e.jsx("path",{d:"M8 3.5v5h7v-5"}),e.jsx("path",{d:"M8 20.5v-6h8v6"})]}),chevronDown:e.jsx("path",{d:"m7 10 5 5 5-5"}),info:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 11v5"}),e.jsx("path",{d:"M12 8h.01"})]})};return e.jsx("svg",{...t,children:p[n]})}function o({label:n,required:a=!1,error:t,hint:p,icon:l,children:s}){return e.jsxs("div",{className:"pm-form-field",children:[e.jsxs("div",{className:"pm-field-heading",children:[e.jsxs("label",{className:"pm-label",children:[n,a&&e.jsx("span",{className:"pm-required",children:"*"})]}),p&&e.jsx("span",{className:"pm-field-hint",children:p})]}),e.jsxs("div",{className:`pm-input-wrap ${t?"has-error":""}`,children:[l&&e.jsx("span",{className:"pm-input-icon",children:e.jsx(i,{name:l,size:16})}),s]}),t&&e.jsx("div",{className:"pm-error",children:t})]})}function v({categories:n=[]}){var d;const{data:a,setData:t,post:p,processing:l,errors:s}=u({title:"",category_id:"",budget_amount:"",budget_currency:"RWF",location:"",description:"",status:"pending",verified:"0"});function m(r){r.preventDefault(),p(route("admin.projects.store"))}const x=((d=n.find(r=>String(r.id)===String(a.category_id)))==null?void 0:d.name)??"Project category",h=a.budget_amount?`${Number(a.budget_amount).toLocaleString()} ${a.budget_currency}`:"Budget not specified";return e.jsxs(f,{children:[e.jsx(g,{title:"Create New Project"}),e.jsx("style",{children:`
                .pm-create-page,
                .pm-create-page * {
                    box-sizing: border-box;
                }

                .pm-create-page {
                    --pm-bg: #f7f8fa;
                    --pm-card: #ffffff;
                    --pm-text: #1d1d1f;
                    --pm-secondary: #6e6e73;
                    --pm-muted: #8e8e93;
                    --pm-border: #e5e5ea;
                    --pm-primary: #1677ff;
                    --pm-primary-dark: #0d63d8;
                    --pm-green: #16845b;
                    --pm-red: #d9485f;

                    min-height: 100%;
                    padding: 28px;
                    background: var(--pm-bg);
                    color: var(--pm-text);

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    -webkit-font-smoothing: antialiased;
                }

                .pm-create-container {
                    width: 100%;
                    max-width: 1180px;
                    margin: 0 auto;
                }

                /* Header */

                .pm-create-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 23px;
                }

                .pm-back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 12px;
                    color: var(--pm-secondary);
                    font-size: 12px;
                    font-weight: 500;
                    text-decoration: none;
                    transition: color .15s ease;
                }

                .pm-back-link:hover {
                    color: var(--pm-primary);
                }

                .pm-create-title {
                    margin: 0;
                    font-size: 25px;
                    line-height: 1.2;
                    letter-spacing: -.035em;
                    font-weight: 700;
                }

                .pm-create-subtitle {
                    max-width: 650px;
                    margin: 7px 0 0;
                    color: var(--pm-secondary);
                    font-size: 13px;
                    line-height: 1.5;
                }

                /* Layout */

                .pm-form-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 310px;
                    align-items: start;
                    gap: 18px;
                }

                .pm-main-card,
                .pm-side-card {
                    background: var(--pm-card);
                    border: 1px solid var(--pm-border);
                    border-radius: 14px;
                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025),
                        0 5px 18px rgba(0,0,0,.025);
                }

                .pm-main-card {
                    overflow: hidden;
                }

                .pm-card-header {
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    padding: 17px 20px;
                    border-bottom: 1px solid var(--pm-border);
                }

                .pm-card-icon {
                    width: 35px;
                    height: 35px;
                    flex: 0 0 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 9px;
                    background: #eef5ff;
                    color: var(--pm-primary);
                }

                .pm-card-title {
                    margin: 0;
                    color: var(--pm-text);
                    font-size: 14px;
                    font-weight: 650;
                    letter-spacing: -.01em;
                }

                .pm-card-description {
                    margin: 2px 0 0;
                    color: var(--pm-muted);
                    font-size: 11px;
                }

                .pm-card-body {
                    padding: 21px;
                }

                /* Form grid */

                .pm-form-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 18px;
                }

                .pm-full {
                    grid-column: 1 / -1;
                }

                .pm-form-field {
                    min-width: 0;
                }

                .pm-field-heading {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    margin-bottom: 7px;
                }

                .pm-label {
                    display: block;
                    color: #38383a;
                    font-size: 11.5px;
                    font-weight: 600;
                }

                .pm-required {
                    margin-left: 3px;
                    color: var(--pm-red);
                }

                .pm-field-hint {
                    color: var(--pm-muted);
                    font-size: 10px;
                }

                .pm-input-wrap {
                    position: relative;
                }

                .pm-input-icon {
                    position: absolute;
                    top: 50%;
                    left: 12px;
                    z-index: 1;
                    display: flex;
                    color: #9b9ba0;
                    transform: translateY(-50%);
                    pointer-events: none;
                }

                .pm-input,
                .pm-textarea,
                .pm-select {
                    width: 100%;
                    border: 1px solid var(--pm-border);
                    outline: none;
                    background: #fff;
                    color: var(--pm-text);
                    font-family: inherit;
                    font-size: 12.5px;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease,
                        background .15s ease;
                }

                .pm-input,
                .pm-select {
                    height: 42px;
                    border-radius: 9px;
                    padding: 0 12px;
                }

                .pm-input.has-icon,
                .pm-select.has-icon {
                    padding-left: 37px;
                }

                .pm-textarea {
                    min-height: 160px;
                    resize: vertical;
                    border-radius: 9px;
                    padding: 12px;
                    line-height: 1.55;
                }

                .pm-input::placeholder,
                .pm-textarea::placeholder {
                    color: #b0b0b5;
                }

                .pm-input:focus,
                .pm-textarea:focus,
                .pm-select:focus {
                    border-color: #9ec5ff;
                    box-shadow: 0 0 0 3px rgba(22,119,255,.09);
                }

                .pm-input-wrap.has-error .pm-input,
                .pm-input-wrap.has-error .pm-textarea,
                .pm-input-wrap.has-error .pm-select {
                    border-color: #e7a2ad;
                }

                .pm-error {
                    margin-top: 5px;
                    color: var(--pm-red);
                    font-size: 10.5px;
                    line-height: 1.4;
                }

                /* Select */

                .pm-select {
                    appearance: none;
                    cursor: pointer;
                    padding-right: 36px;
                }

                .pm-select-chevron {
                    position: absolute;
                    top: 50%;
                    right: 12px;
                    display: flex;
                    color: #8e8e93;
                    pointer-events: none;
                    transform: translateY(-50%);
                }

                /* Budget group */

                .pm-budget-group {
                    display: flex;
                    gap: 8px;
                }

                .pm-budget-group .pm-input-wrap {
                    flex: 1 1 auto;
                }

                .pm-budget-group .pm-currency-wrap {
                    flex: 0 0 92px;
                }

                /* Sidebar */

                .pm-side-column {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .pm-side-card {
                    overflow: hidden;
                }

                .pm-side-header {
                    padding: 16px 17px;
                    border-bottom: 1px solid var(--pm-border);
                }

                .pm-side-title {
                    margin: 0;
                    font-size: 13px;
                    font-weight: 650;
                }

                .pm-side-subtitle {
                    margin: 4px 0 0;
                    color: var(--pm-muted);
                    font-size: 10.5px;
                    line-height: 1.45;
                }

                .pm-side-body {
                    padding: 16px 17px;
                }

                /* Publish preview */

                .pm-preview {
                    padding: 14px;
                    border: 1px solid var(--pm-border);
                    border-radius: 10px;
                    background: #fafafa;
                }

                .pm-preview-label {
                    margin: 0 0 6px;
                    color: var(--pm-muted);
                    font-size: 9.5px;
                    font-weight: 600;
                    letter-spacing: .04em;
                    text-transform: uppercase;
                }

                .pm-preview-title {
                    margin: 0 0 7px;
                    color: var(--pm-text);
                    font-size: 13px;
                    line-height: 1.35;
                    font-weight: 650;
                }

                .pm-preview-row {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin-top: 7px;
                    color: var(--pm-secondary);
                    font-size: 10.5px;
                }

                .pm-preview-row svg {
                    color: var(--pm-muted);
                    flex-shrink: 0;
                }

                /* Info box */

                .pm-info-box {
                    display: flex;
                    align-items: flex-start;
                    gap: 9px;
                    padding: 12px;
                    border-radius: 9px;
                    background: #f4f8ff;
                    color: #49627e;
                }

                .pm-info-box svg {
                    flex: 0 0 auto;
                    margin-top: 1px;
                    color: var(--pm-primary);
                }

                .pm-info-box p {
                    margin: 0;
                    font-size: 10.5px;
                    line-height: 1.5;
                }

                /* Footer */

                .pm-form-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    margin-top: 18px;
                    padding: 15px 20px;
                    border-top: 1px solid var(--pm-border);
                    background: #fafafa;
                }

                .pm-footer-note {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: var(--pm-muted);
                    font-size: 10.5px;
                }

                .pm-footer-note svg {
                    color: var(--pm-green);
                }

                .pm-footer-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .pm-cancel-button,
                .pm-submit-button {
                    height: 38px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    padding: 0 15px;
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 11.5px;
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all .15s ease;
                }

                .pm-cancel-button {
                    border: 1px solid var(--pm-border);
                    background: #fff;
                    color: var(--pm-secondary);
                }

                .pm-cancel-button:hover {
                    border-color: #cfd0d4;
                    background: #f7f7f8;
                    color: var(--pm-text);
                }

                .pm-submit-button {
                    border: 1px solid var(--pm-primary);
                    background: var(--pm-primary);
                    color: #fff;
                    box-shadow: 0 3px 10px rgba(22,119,255,.16);
                }

                .pm-submit-button:hover {
                    border-color: var(--pm-primary-dark);
                    background: var(--pm-primary-dark);
                    transform: translateY(-1px);
                }

                .pm-submit-button:disabled {
                    opacity: .6;
                    cursor: not-allowed;
                    transform: none;
                }

                /* Responsive */

                @media (max-width: 950px) {
                    .pm-form-layout {
                        grid-template-columns: 1fr;
                    }

                    .pm-side-column {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 700px) {
                    .pm-create-page {
                        padding: 20px 14px;
                    }

                    .pm-create-header {
                        display: block;
                    }

                    .pm-create-title {
                        font-size: 22px;
                    }

                    .pm-create-subtitle {
                        font-size: 12px;
                    }

                    .pm-form-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }

                    .pm-full {
                        grid-column: auto;
                    }

                    .pm-card-body {
                        padding: 16px;
                    }

                    .pm-form-footer {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .pm-footer-actions {
                        width: 100%;
                    }

                    .pm-cancel-button,
                    .pm-submit-button {
                        flex: 1;
                    }

                    .pm-side-column {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 430px) {
                    .pm-card-header {
                        padding: 15px;
                    }

                    .pm-form-footer {
                        padding: 14px 15px;
                    }

                    .pm-footer-actions {
                        flex-direction: column-reverse;
                    }

                    .pm-cancel-button,
                    .pm-submit-button {
                        width: 100%;
                    }
                }
            `}),e.jsx("div",{className:"pm-create-page",children:e.jsxs("div",{className:"pm-create-container",children:[e.jsx("header",{className:"pm-create-header",children:e.jsxs("div",{children:[e.jsxs(c,{href:route("admin.projects.index"),className:"pm-back-link",children:[e.jsx(i,{name:"arrowLeft",size:15}),"Back to Projects"]}),e.jsx("h1",{className:"pm-create-title",children:"Create New Project"}),e.jsx("p",{className:"pm-create-subtitle",children:"Add a new project to the talent platform and provide the information talent needs to understand the opportunity."})]})}),e.jsx("form",{onSubmit:m,children:e.jsxs("div",{className:"pm-form-layout",children:[e.jsxs("div",{className:"pm-main-card",children:[e.jsxs("div",{className:"pm-card-header",children:[e.jsx("div",{className:"pm-card-icon",children:e.jsx(i,{name:"folder",size:17})}),e.jsxs("div",{children:[e.jsx("h2",{className:"pm-card-title",children:"Project Information"}),e.jsx("p",{className:"pm-card-description",children:"Basic information about the project."})]})]}),e.jsx("div",{className:"pm-card-body",children:e.jsxs("div",{className:"pm-form-grid",children:[e.jsx(o,{label:"Project Title",required:!0,error:s.title,icon:"document",children:e.jsx("input",{type:"text",value:a.title,onChange:r=>t("title",r.target.value),className:"pm-input has-icon",placeholder:"e.g. Build a modern company website",required:!0})}),e.jsx(o,{label:"Project Category",required:!0,error:s.category_id,icon:"tag",children:e.jsxs("select",{value:a.category_id,onChange:r=>t("category_id",r.target.value),className:"pm-select has-icon",required:!0,children:[e.jsx("option",{value:"",children:"Select a category"}),n.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]})}),e.jsx(o,{label:"Budget",required:!0,error:s.budget_amount,hint:"Project budget",children:e.jsxs("div",{className:"pm-budget-group",children:[e.jsxs("div",{className:"pm-input-wrap",children:[e.jsx("span",{className:"pm-input-icon",children:e.jsx(i,{name:"wallet",size:16})}),e.jsx("input",{type:"number",step:"0.01",min:"0",value:a.budget_amount,onChange:r=>t("budget_amount",r.target.value),className:"pm-input has-icon",placeholder:"e.g. 500,000",required:!0})]}),e.jsx("div",{className:"pm-currency-wrap",children:e.jsxs("select",{value:a.budget_currency,onChange:r=>t("budget_currency",r.target.value),className:"pm-select",children:[e.jsx("option",{value:"RWF",children:"RWF"}),e.jsx("option",{value:"USD",children:"USD"})]})})]})}),e.jsx(o,{label:"Location",error:s.location,icon:"location",children:e.jsx("input",{type:"text",value:a.location,onChange:r=>t("location",r.target.value),className:"pm-input has-icon",placeholder:"e.g. Kigali or Remote"})}),e.jsxs("div",{className:"pm-form-field pm-full",children:[e.jsxs("div",{className:"pm-field-heading",children:[e.jsxs("label",{className:"pm-label",children:["Project Description",e.jsx("span",{className:"pm-required",children:"*"})]}),e.jsx("span",{className:"pm-field-hint",children:"Describe the opportunity"})]}),e.jsx("div",{className:`pm-input-wrap ${s.description?"has-error":""}`,children:e.jsx("textarea",{value:a.description,onChange:r=>t("description",r.target.value),rows:7,className:"pm-textarea",placeholder:"Describe the project, goals, expected deliverables, required skills and any important details talent should know..."})}),s.description&&e.jsx("div",{className:"pm-error",children:s.description})]})]})}),e.jsxs("div",{className:"pm-form-footer",children:[e.jsxs("div",{className:"pm-footer-note",children:[e.jsx(i,{name:"check",size:14}),"All changes will be saved securely."]}),e.jsxs("div",{className:"pm-footer-actions",children:[e.jsx(c,{href:route("admin.projects.index"),className:"pm-cancel-button",children:"Cancel"}),e.jsxs("button",{type:"submit",className:"pm-submit-button",disabled:l,children:[e.jsx(i,{name:"save",size:15}),l?"Publishing…":"Publish Project"]})]})]})]}),e.jsxs("aside",{className:"pm-side-column",children:[e.jsxs("div",{className:"pm-side-card",children:[e.jsxs("div",{className:"pm-side-header",children:[e.jsx("h2",{className:"pm-side-title",children:"Publishing Settings"}),e.jsx("p",{className:"pm-side-subtitle",children:"Control how this project appears on the platform."})]}),e.jsxs("div",{className:"pm-side-body",children:[e.jsxs(o,{label:"Project Status",error:s.status,children:[e.jsxs("select",{value:a.status,onChange:r=>t("status",r.target.value),className:"pm-select",children:[e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"approved",children:"Approved"}),e.jsx("option",{value:"closed",children:"Closed"})]}),e.jsx("span",{className:"pm-select-chevron",children:e.jsx(i,{name:"chevronDown",size:15})})]}),e.jsx("div",{style:{height:16}}),e.jsxs(o,{label:"Verification",error:s.verified,children:[e.jsxs("select",{value:a.verified,onChange:r=>t("verified",r.target.value),className:"pm-select",children:[e.jsx("option",{value:"1",children:"Verified"}),e.jsx("option",{value:"0",children:"Not Verified"})]}),e.jsx("span",{className:"pm-select-chevron",children:e.jsx(i,{name:"chevronDown",size:15})})]})]})]}),e.jsxs("div",{className:"pm-side-card",children:[e.jsxs("div",{className:"pm-side-header",children:[e.jsx("h2",{className:"pm-side-title",children:"Project Preview"}),e.jsx("p",{className:"pm-side-subtitle",children:"A quick look at the project details."})]}),e.jsx("div",{className:"pm-side-body",children:e.jsxs("div",{className:"pm-preview",children:[e.jsx("p",{className:"pm-preview-label",children:"Project"}),e.jsx("h3",{className:"pm-preview-title",children:a.title||"Your project title"}),e.jsxs("div",{className:"pm-preview-row",children:[e.jsx(i,{name:"tag",size:12}),x]}),e.jsxs("div",{className:"pm-preview-row",children:[e.jsx(i,{name:"wallet",size:12}),h]}),e.jsxs("div",{className:"pm-preview-row",children:[e.jsx(i,{name:"location",size:12}),a.location||"Remote"]})]})})]}),e.jsxs("div",{className:"pm-info-box",children:[e.jsx(i,{name:"info",size:16}),e.jsx("p",{children:"Clear project descriptions help talent understand the scope, required skills and expected outcome before applying."})]})]})]})})]})})]})}export{v as default};
