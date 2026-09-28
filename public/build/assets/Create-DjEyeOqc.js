import{u as i,j as e,H as t,L as o}from"./app-B2SIh33N.js";import{A as n}from"./AppLayout-CkTPU_ZW.js";import s from"./PlanForm-BKUuhI4V.js";function c(){const a=i({name:"",description:"",features:[],is_featured:!1,is_active:!0,monthly_price:"",annual_price:""});function p(r){r.preventDefault(),a.post(route("admin.pricing-plans.store"))}return e.jsxs("div",{"data-h-scope":"pricing-plan-create",children:[e.jsx(t,{title:"Create Pricing Plan"}),e.jsx("style",{children:`
                [data-h-scope="pricing-plan-create"] {
                    --pp-bg: #f7f8fa;
                    --pp-card: #ffffff;
                    --pp-text: #1d1d1f;
                    --pp-muted: #6e6e73;
                    --pp-subtle: #86868b;
                    --pp-border: #e6e6eb;
                    --pp-primary: #0b8f5b;
                    --pp-primary-dark: #087a4d;
                    --pp-primary-soft: #edf9f3;
                    --pp-blue-soft: #f1f6ff;
                    --pp-danger: #d93025;

                    color-scheme: light !important;
                    min-height: 100%;
                    background: var(--pp-bg) !important;
                    color: var(--pp-text) !important;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                }

                [data-h-scope="pricing-plan-create"] *,
                [data-h-scope="pricing-plan-create"] *::before,
                [data-h-scope="pricing-plan-create"] *::after {
                    box-sizing: border-box;
                }

                /*
                 * Force this page to remain light even when the application
                 * or operating system is using dark mode.
                 */
                @media (prefers-color-scheme: dark) {
                    [data-h-scope="pricing-plan-create"] {
                        color-scheme: light !important;
                        background: #f7f8fa !important;
                        color: #1d1d1f !important;
                    }

                    [data-h-scope="pricing-plan-create"] input,
                    [data-h-scope="pricing-plan-create"] textarea,
                    [data-h-scope="pricing-plan-create"] select {
                        color-scheme: light !important;
                        background: #ffffff !important;
                        color: #1d1d1f !important;
                    }
                }

                [data-h-scope="pricing-plan-create"] .pp-page {
                    width: 100%;
                    max-width: 1180px;
                    margin: 0 auto;
                    padding: 28px 24px 48px;
                }

                /* ---------------------------------------------------------
                   Header
                --------------------------------------------------------- */

                [data-h-scope="pricing-plan-create"] .pp-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 24px;
                    margin-bottom: 26px;
                }

                [data-h-scope="pricing-plan-create"] .pp-header-content {
                    min-width: 0;
                }

                [data-h-scope="pricing-plan-create"] .pp-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    margin-bottom: 8px;
                    color: var(--pp-primary);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: .04em;
                    text-transform: uppercase;
                }

                [data-h-scope="pricing-plan-create"] .pp-eyebrow-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--pp-primary);
                }

                [data-h-scope="pricing-plan-create"] .pp-title {
                    margin: 0;
                    color: var(--pp-text);
                    font-size: 25px;
                    line-height: 1.2;
                    font-weight: 700;
                    letter-spacing: -.025em;
                }

                [data-h-scope="pricing-plan-create"] .pp-subtitle {
                    max-width: 650px;
                    margin: 7px 0 0;
                    color: var(--pp-muted);
                    font-size: 13px;
                    line-height: 1.55;
                }

                [data-h-scope="pricing-plan-create"] .pp-back {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    flex-shrink: 0;
                    padding: 9px 13px;
                    border: 1px solid var(--pp-border);
                    border-radius: 9px;
                    background: #ffffff;
                    color: #4d4d52;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 600;
                    transition:
                        border-color .15s ease,
                        background .15s ease,
                        color .15s ease,
                        transform .15s ease;
                }

                [data-h-scope="pricing-plan-create"] .pp-back:hover {
                    border-color: #d0d0d5;
                    background: #fafafa;
                    color: var(--pp-text);
                    transform: translateY(-1px);
                }

                [data-h-scope="pricing-plan-create"] .pp-back svg {
                    width: 14px;
                    height: 14px;
                }

                /* ---------------------------------------------------------
                   Layout
                --------------------------------------------------------- */

                [data-h-scope="pricing-plan-create"] .pp-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 285px;
                    gap: 20px;
                    align-items: start;
                }

                [data-h-scope="pricing-plan-create"] .pp-form-card {
                    min-width: 0;
                    overflow: hidden;
                    border: 1px solid var(--pp-border);
                    border-radius: 14px;
                    background: var(--pp-card);
                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .025),
                        0 5px 20px rgba(0, 0, 0, .025);
                }

                [data-h-scope="pricing-plan-create"] .pp-form-header {
                    padding: 18px 20px;
                    border-bottom: 1px solid var(--pp-border);
                    background: #ffffff;
                }

                [data-h-scope="pricing-plan-create"] .pp-form-header-title {
                    margin: 0;
                    color: var(--pp-text);
                    font-size: 14px;
                    line-height: 1.4;
                    font-weight: 700;
                    letter-spacing: -.01em;
                }

                [data-h-scope="pricing-plan-create"] .pp-form-header-text {
                    margin: 4px 0 0;
                    color: var(--pp-muted);
                    font-size: 12px;
                    line-height: 1.5;
                }

                [data-h-scope="pricing-plan-create"] .pp-form-body {
                    padding: 20px;
                }

                /* ---------------------------------------------------------
                   Sidebar
                --------------------------------------------------------- */

                [data-h-scope="pricing-plan-create"] .pp-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                [data-h-scope="pricing-plan-create"] .pp-side-card {
                    padding: 17px;
                    border: 1px solid var(--pp-border);
                    border-radius: 13px;
                    background: #ffffff;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, .02);
                }

                [data-h-scope="pricing-plan-create"] .pp-side-card.highlight {
                    border-color: #d6eee2;
                    background: var(--pp-primary-soft);
                }

                [data-h-scope="pricing-plan-create"] .pp-side-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 31px;
                    height: 31px;
                    margin-bottom: 11px;
                    border-radius: 8px;
                    background: #f2f3f5;
                    color: #55565b;
                }

                [data-h-scope="pricing-plan-create"] .pp-side-card.highlight .pp-side-icon {
                    background: #dff4e9;
                    color: var(--pp-primary);
                }

                [data-h-scope="pricing-plan-create"] .pp-side-icon svg {
                    width: 15px;
                    height: 15px;
                }

                [data-h-scope="pricing-plan-create"] .pp-side-title {
                    margin: 0 0 5px;
                    color: var(--pp-text);
                    font-size: 12px;
                    font-weight: 700;
                }

                [data-h-scope="pricing-plan-create"] .pp-side-text {
                    margin: 0;
                    color: var(--pp-muted);
                    font-size: 11.5px;
                    line-height: 1.6;
                }

                [data-h-scope="pricing-plan-create"] .pp-check-list {
                    display: flex;
                    flex-direction: column;
                    gap: 9px;
                    margin: 12px 0 0;
                    padding: 0;
                    list-style: none;
                }

                [data-h-scope="pricing-plan-create"] .pp-check-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    color: #505057;
                    font-size: 11.5px;
                    line-height: 1.45;
                }

                [data-h-scope="pricing-plan-create"] .pp-check {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 17px;
                    height: 17px;
                    flex: 0 0 17px;
                    margin-top: 1px;
                    border-radius: 50%;
                    background: var(--pp-primary-soft);
                    color: var(--pp-primary);
                }

                [data-h-scope="pricing-plan-create"] .pp-check svg {
                    width: 10px;
                    height: 10px;
                }

                /* ---------------------------------------------------------
                   Overrides for PlanForm
                   
                   These styles make the existing PlanForm fit the new
                   professional light theme without changing its logic.
                --------------------------------------------------------- */

                [data-h-scope="pricing-plan-create"] .pp-form-body form {
                    color: var(--pp-text);
                }

                [data-h-scope="pricing-plan-create"] .pp-form-body label {
                    color: #343438 !important;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif !important;
                    font-size: 12px !important;
                    font-weight: 600 !important;
                }

                [data-h-scope="pricing-plan-create"] .pp-form-body input,
                [data-h-scope="pricing-plan-create"] .pp-form-body textarea,
                [data-h-scope="pricing-plan-create"] .pp-form-body select {
                    color: #1d1d1f !important;
                    background: #ffffff !important;
                    border-color: #dedee3 !important;
                    border-radius: 8px !important;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif !important;
                    font-size: 12.5px !important;
                    box-shadow: none !important;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;
                }

                [data-h-scope="pricing-plan-create"] .pp-form-body input:focus,
                [data-h-scope="pricing-plan-create"] .pp-form-body textarea:focus,
                [data-h-scope="pricing-plan-create"] .pp-form-body select:focus {
                    border-color: #8bcfb0 !important;
                    box-shadow: 0 0 0 3px rgba(11, 143, 91, .09) !important;
                    outline: none !important;
                }

                [data-h-scope="pricing-plan-create"] .pp-form-body input::placeholder,
                [data-h-scope="pricing-plan-create"] .pp-form-body textarea::placeholder {
                    color: #a1a1a7 !important;
                }

                /* Prevent inherited dark backgrounds from PlanForm */
                [data-h-scope="pricing-plan-create"] .pp-form-body .bg-dark,
                [data-h-scope="pricing-plan-create"] .pp-form-body .bg-black,
                [data-h-scope="pricing-plan-create"] .pp-form-body [class*="dark"] {
                    background: #ffffff !important;
                    color: #1d1d1f !important;
                }

                /* Bootstrap-compatible button styling */
                [data-h-scope="pricing-plan-create"] .pp-form-body button[type="submit"],
                [data-h-scope="pricing-plan-create"] .pp-form-body .btn-primary {
                    border: 0 !important;
                    border-radius: 8px !important;
                    background: var(--pp-primary) !important;
                    color: #ffffff !important;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif !important;
                    font-size: 12px !important;
                    font-weight: 650 !important;
                    box-shadow: none !important;
                }

                [data-h-scope="pricing-plan-create"] .pp-form-body button[type="submit"]:hover,
                [data-h-scope="pricing-plan-create"] .pp-form-body .btn-primary:hover {
                    background: var(--pp-primary-dark) !important;
                }

                /* ---------------------------------------------------------
                   Responsive
                --------------------------------------------------------- */

                @media (max-width: 900px) {
                    [data-h-scope="pricing-plan-create"] .pp-layout {
                        grid-template-columns: 1fr;
                    }

                    [data-h-scope="pricing-plan-create"] .pp-sidebar {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 640px) {
                    [data-h-scope="pricing-plan-create"] .pp-page {
                        padding: 20px 14px 35px;
                    }

                    [data-h-scope="pricing-plan-create"] .pp-header {
                        flex-direction: column;
                        margin-bottom: 20px;
                    }

                    [data-h-scope="pricing-plan-create"] .pp-title {
                        font-size: 22px;
                    }

                    [data-h-scope="pricing-plan-create"] .pp-back {
                        width: 100%;
                        justify-content: center;
                    }

                    [data-h-scope="pricing-plan-create"] .pp-form-body {
                        padding: 15px;
                    }

                    [data-h-scope="pricing-plan-create"] .pp-sidebar {
                        grid-template-columns: 1fr;
                    }
                }
            `}),e.jsxs("div",{className:"pp-page",children:[e.jsxs("div",{className:"pp-header",children:[e.jsxs("div",{className:"pp-header-content",children:[e.jsxs("div",{className:"pp-eyebrow",children:[e.jsx("span",{className:"pp-eyebrow-dot"}),"Talent platform"]}),e.jsx("h1",{className:"pp-title",children:"Create pricing plan"}),e.jsx("p",{className:"pp-subtitle",children:"Set up a professional plan with clear pricing, features, and visibility settings for your platform users."})]}),e.jsxs(o,{href:route("admin.pricing-plans.index"),className:"pp-back",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"m12 19-7-7 7-7"})]}),"Back to plans"]})]}),e.jsxs("div",{className:"pp-layout",children:[e.jsxs("div",{className:"pp-form-card",children:[e.jsxs("div",{className:"pp-form-header",children:[e.jsx("h2",{className:"pp-form-header-title",children:"Plan information"}),e.jsx("p",{className:"pp-form-header-text",children:"Define how this plan will appear and what members will receive."})]}),e.jsx("div",{className:"pp-form-body",children:e.jsx(s,{mode:"create",form:a,onSubmit:p,backHref:route("admin.pricing-plans.index")})})]}),e.jsxs("aside",{className:"pp-sidebar",children:[e.jsxs("div",{className:"pp-side-card highlight",children:[e.jsx("div",{className:"pp-side-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20"}),e.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"})]})}),e.jsx("h3",{className:"pp-side-title",children:"Keep pricing clear"}),e.jsx("p",{className:"pp-side-text",children:"Use simple pricing and concise benefits so professionals can understand the value of a plan quickly."})]}),e.jsxs("div",{className:"pp-side-card",children:[e.jsx("div",{className:"pp-side-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m12 3 1.9 5.8H20l-4.9 3.6 1.9 5.8-5-3.5-5 3.5 1.9-5.8L4 8.8h6.1L12 3Z"})})}),e.jsx("h3",{className:"pp-side-title",children:"Plan checklist"}),e.jsxs("ul",{className:"pp-check-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"pp-check",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m5 12 4 4L19 6"})})}),"Use a clear and recognizable plan name."]}),e.jsxs("li",{children:[e.jsx("span",{className:"pp-check",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m5 12 4 4L19 6"})})}),"Add concise benefits and features."]}),e.jsxs("li",{children:[e.jsx("span",{className:"pp-check",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m5 12 4 4L19 6"})})}),"Set monthly and annual pricing where applicable."]}),e.jsxs("li",{children:[e.jsx("span",{className:"pp-check",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m5 12 4 4L19 6"})})}),"Feature only the plan you want to promote."]})]})]}),e.jsxs("div",{className:"pp-side-card",children:[e.jsx("div",{className:"pp-side-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 3a9 9 0 1 0 9 9"}),e.jsx("path",{d:"M12 7v5l3 2"}),e.jsx("path",{d:"M16 3h5v5"})]})}),e.jsx("h3",{className:"pp-side-title",children:"Visibility"}),e.jsx("p",{className:"pp-side-text",children:"Active plans can be made available to users. Keep a plan inactive while preparing or reviewing it."})]})]})]})]})]})}c.layout=a=>e.jsx(n,{children:a,title:"Create Pricing Plan"});export{c as default};
