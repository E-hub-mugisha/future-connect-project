import{u as f,j as e,H as b,L as x}from"./app-B2SIh33N.js";import{A as v}from"./AppLayout-CkTPU_ZW.js";function s({name:t,size:p=18}){const r={width:p,height:p,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},i={arrowLeft:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"m12 19-7-7 7-7"})]}),folder:e.jsx(e.Fragment,{children:e.jsx("path",{d:"M3.5 7.5A2.5 2.5 0 0 1 6 5h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z"})}),tag:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20 13 13 20 4 11V4h7l9 9Z"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.2"})]}),wallet:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M4 7.5A2.5 2.5 0 0 1 6.5 5H19"}),e.jsx("path",{d:"M4 7.5V18a2 2 0 0 0 2 2h13V8H6.5A2.5 2.5 0 0 1 4 5v2.5Z"}),e.jsx("path",{d:"M15 14h3"})]}),location:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"}),e.jsx("circle",{cx:"12",cy:"10",r:"2.5"})]}),document:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M6 3.5h8l4 4V20.5H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z"}),e.jsx("path",{d:"M14 3.5v4h4"}),e.jsx("path",{d:"M8 12h8M8 16h6"})]}),check:e.jsx("path",{d:"m5 12 4 4L19 6"}),save:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M5 3.5h12l2 2V20.5H5a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 5 3.5Z"}),e.jsx("path",{d:"M8 3.5v5h7v-5"}),e.jsx("path",{d:"M8 20.5v-6h8v6"})]}),chevronDown:e.jsx("path",{d:"m7 10 5 5 5-5"}),info:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 11v5"}),e.jsx("path",{d:"M12 8h.01"})]}),clock:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),e.jsx("path",{d:"M12 7v5l3 2"})]})};return e.jsx("svg",{...r,children:i[t]})}function o({label:t,required:p=!1,error:r,hint:i,icon:l,children:d}){return e.jsxs("div",{className:"pm-form-field",children:[e.jsxs("div",{className:"pm-field-heading",children:[e.jsxs("label",{className:"pm-label",children:[t,p&&e.jsx("span",{className:"pm-required",children:"*"})]}),i&&e.jsx("span",{className:"pm-field-hint",children:i})]}),e.jsxs("div",{className:`pm-input-wrap ${r?"has-error":""}`,children:[l&&e.jsx("span",{className:"pm-input-icon",children:e.jsx(s,{name:l,size:16})}),d]}),r&&e.jsx("div",{className:"pm-error",children:r})]})}const j={pending:{label:"Pending",className:"pm-status-pending"},approved:{label:"Approved",className:"pm-status-approved"},closed:{label:"Closed",className:"pm-status-closed"}};function N({project:t,categories:p=[]}){var m;const{data:r,setData:i,put:l,processing:d,errors:n}=f({title:t.title??"",category_id:t.category_id??"",budget_amount:t.budget_amount??"",budget_currency:t.budget_currency??"RWF",location:t.location??"",description:t.description??"",status:t.status??"pending",verified:t.verified?"1":"0"});function h(a){a.preventDefault(),l(route("admin.projects.update",t.id))}const c=j[r.status]??{label:r.status||"Pending",className:"pm-status-pending"},u=((m=p.find(a=>String(a.id)===String(r.category_id)))==null?void 0:m.name)??"Project category",g=r.budget_amount?`${Number(r.budget_amount).toLocaleString()} ${r.budget_currency}`:"Budget not specified";return e.jsxs(v,{children:[e.jsx(b,{title:"Edit Project"}),e.jsx("style",{children:`
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
                    --pm-orange: #b7791f;

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

                .pm-create-subtitle strong {
                    color: var(--pm-text);
                    font-weight: 650;
                }

                .pm-header-status {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    height: 30px;
                    padding: 0 13px;
                    margin-top: 2px;
                    border-radius: 20px;
                    font-size: 11.5px;
                    font-weight: 650;
                    text-transform: capitalize;
                    white-space: nowrap;
                }

                .pm-status-pending {
                    background: #fff7e8;
                    color: var(--pm-orange);
                }

                .pm-status-approved {
                    background: #edf8f3;
                    color: var(--pm-green);
                }

                .pm-status-closed {
                    background: #f2f2f7;
                    color: var(--pm-secondary);
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

                .pm-spinner {
                    width: 13px;
                    height: 13px;
                    border-radius: 50%;
                    border: 2px solid rgba(255,255,255,.5);
                    border-top-color: #fff;
                    animation: pm-spin .7s linear infinite;
                }

                @keyframes pm-spin {
                    to { transform: rotate(360deg); }
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

                    .pm-header-status {
                        margin-top: 12px;
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
            `}),e.jsx("div",{className:"pm-create-page",children:e.jsxs("div",{className:"pm-create-container",children:[e.jsxs("header",{className:"pm-create-header",children:[e.jsxs("div",{children:[e.jsxs(x,{href:route("admin.projects.index"),className:"pm-back-link",children:[e.jsx(s,{name:"arrowLeft",size:15}),"Back to Projects"]}),e.jsx("h1",{className:"pm-create-title",children:"Edit Project"}),e.jsxs("p",{className:"pm-create-subtitle",children:["Editing ",e.jsx("strong",{children:t.title})," — update the details below and save your changes."]})]}),e.jsx("span",{className:`pm-header-status ${c.className}`,children:c.label})]}),e.jsx("form",{onSubmit:h,noValidate:!0,children:e.jsxs("div",{className:"pm-form-layout",children:[e.jsxs("div",{className:"pm-main-card",children:[e.jsxs("div",{className:"pm-card-header",children:[e.jsx("div",{className:"pm-card-icon",children:e.jsx(s,{name:"folder",size:17})}),e.jsxs("div",{children:[e.jsx("h2",{className:"pm-card-title",children:"Project Information"}),e.jsx("p",{className:"pm-card-description",children:"Basic information about the project."})]})]}),e.jsx("div",{className:"pm-card-body",children:e.jsxs("div",{className:"pm-form-grid",children:[e.jsx(o,{label:"Project Title",required:!0,error:n.title,icon:"document",children:e.jsx("input",{type:"text",value:r.title,onChange:a=>i("title",a.target.value),className:"pm-input has-icon",placeholder:"e.g. Kigali Heights Landscaping",required:!0})}),e.jsx(o,{label:"Project Category",required:!0,error:n.category_id,icon:"tag",children:e.jsxs("select",{value:r.category_id,onChange:a=>i("category_id",a.target.value),className:"pm-select has-icon",required:!0,children:[e.jsx("option",{value:"",children:"Select a category"}),p.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})}),e.jsx(o,{label:"Budget",required:!0,error:n.budget_amount,hint:"Project budget",children:e.jsxs("div",{className:"pm-budget-group",children:[e.jsxs("div",{className:"pm-input-wrap",children:[e.jsx("span",{className:"pm-input-icon",children:e.jsx(s,{name:"wallet",size:16})}),e.jsx("input",{type:"number",step:"0.01",min:"0",value:r.budget_amount,onChange:a=>i("budget_amount",a.target.value),className:"pm-input has-icon",placeholder:"0.00",required:!0})]}),e.jsx("div",{className:"pm-currency-wrap",children:e.jsxs("select",{value:r.budget_currency,onChange:a=>i("budget_currency",a.target.value),className:"pm-select",children:[e.jsx("option",{value:"RWF",children:"RWF"}),e.jsx("option",{value:"USD",children:"USD"})]})})]})}),e.jsx(o,{label:"Location",error:n.location,icon:"location",children:e.jsx("input",{type:"text",value:r.location,onChange:a=>i("location",a.target.value),className:"pm-input has-icon",placeholder:"e.g. Kicukiro, Kigali"})}),e.jsxs("div",{className:"pm-form-field pm-full",children:[e.jsxs("div",{className:"pm-field-heading",children:[e.jsx("label",{className:"pm-label",children:"Project Description"}),e.jsx("span",{className:"pm-field-hint",children:"Describe the opportunity"})]}),e.jsx("div",{className:`pm-input-wrap ${n.description?"has-error":""}`,children:e.jsx("textarea",{value:r.description,onChange:a=>i("description",a.target.value),rows:7,className:"pm-textarea",placeholder:"Describe the project, goals, expected deliverables, required skills and any important details talent should know..."})}),n.description&&e.jsx("div",{className:"pm-error",children:n.description})]})]})}),e.jsxs("div",{className:"pm-form-footer",children:[e.jsxs("div",{className:"pm-footer-note",children:[e.jsx(s,{name:"check",size:14}),"Changes are saved securely."]}),e.jsxs("div",{className:"pm-footer-actions",children:[e.jsx(x,{href:route("admin.projects.index"),className:"pm-cancel-button",children:"Cancel"}),e.jsx("button",{type:"submit",className:"pm-submit-button",disabled:d,children:d?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"pm-spinner"}),"Saving…"]}):e.jsxs(e.Fragment,{children:[e.jsx(s,{name:"save",size:15}),"Save Changes"]})})]})]})]}),e.jsxs("aside",{className:"pm-side-column",children:[e.jsxs("div",{className:"pm-side-card",children:[e.jsxs("div",{className:"pm-side-header",children:[e.jsx("h2",{className:"pm-side-title",children:"Publishing Settings"}),e.jsx("p",{className:"pm-side-subtitle",children:"Control how this project appears on the platform."})]}),e.jsxs("div",{className:"pm-side-body",children:[e.jsxs(o,{label:"Project Status",error:n.status,children:[e.jsxs("select",{value:r.status,onChange:a=>i("status",a.target.value),className:"pm-select",children:[e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"approved",children:"Approved"}),e.jsx("option",{value:"closed",children:"Closed"})]}),e.jsx("span",{className:"pm-select-chevron",children:e.jsx(s,{name:"chevronDown",size:15})})]}),e.jsx("div",{style:{height:16}}),e.jsxs(o,{label:"Verification",error:n.verified,children:[e.jsxs("select",{value:r.verified,onChange:a=>i("verified",a.target.value),className:"pm-select",children:[e.jsx("option",{value:"1",children:"Verified"}),e.jsx("option",{value:"0",children:"Not Verified"})]}),e.jsx("span",{className:"pm-select-chevron",children:e.jsx(s,{name:"chevronDown",size:15})})]})]})]}),e.jsxs("div",{className:"pm-side-card",children:[e.jsxs("div",{className:"pm-side-header",children:[e.jsx("h2",{className:"pm-side-title",children:"Project Preview"}),e.jsx("p",{className:"pm-side-subtitle",children:"A quick look at the project details."})]}),e.jsx("div",{className:"pm-side-body",children:e.jsxs("div",{className:"pm-preview",children:[e.jsx("p",{className:"pm-preview-label",children:"Project"}),e.jsx("h3",{className:"pm-preview-title",children:r.title||"Your project title"}),e.jsxs("div",{className:"pm-preview-row",children:[e.jsx(s,{name:"tag",size:12}),u]}),e.jsxs("div",{className:"pm-preview-row",children:[e.jsx(s,{name:"wallet",size:12}),g]}),e.jsxs("div",{className:"pm-preview-row",children:[e.jsx(s,{name:"location",size:12}),r.location||"Remote"]})]})})]}),e.jsxs("div",{className:"pm-info-box",children:[e.jsx(s,{name:"info",size:16}),e.jsx("p",{children:"Changes take effect immediately once saved — talent will see the updated details right away."})]})]})]})})]})})]})}export{N as default};
