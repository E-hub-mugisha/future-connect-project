import{u as s,j as e,H as n,L as o}from"./app-B2SIh33N.js";import{A as d}from"./AppLayout-CkTPU_ZW.js";import c from"./PlanForm-BKUuhI4V.js";function l({plan:a}){const i=s({name:a.name??"",description:a.description??"",features:Array.isArray(a.features)?a.features:[],is_featured:a.is_featured??!1,is_active:a.is_active??!0,monthly_price:a.monthly_price??"",annual_price:a.annual_price??""});function r(t){t.preventDefault(),i.transform(p=>({...p,_method:"put"})),i.post(route("admin.pricing-plans.update",a.id),{preserveScroll:!0})}return e.jsxs("div",{"data-h-scope":"pricing-plan-edit",children:[e.jsx(n,{title:`Edit ${a.name}`}),e.jsx("style",{children:`
                [data-h-scope="pricing-plan-edit"] {
                    --pe-bg: #f7f8fa;
                    --pe-card: #ffffff;
                    --pe-text: #1d1d1f;
                    --pe-muted: #6e6e73;
                    --pe-subtle: #86868b;
                    --pe-border: #e6e6eb;
                    --pe-primary: #0b8f5b;
                    --pe-primary-dark: #087a4d;
                    --pe-primary-soft: #edf9f3;
                    --pe-warning: #b7791f;
                    --pe-warning-soft: #fff8e8;
                    --pe-danger: #d93025;
                    --pe-danger-soft: #fff1f0;

                    color-scheme: light !important;
                    min-height: 100%;
                    background: var(--pe-bg) !important;
                    color: var(--pe-text) !important;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                }

                [data-h-scope="pricing-plan-edit"] *,
                [data-h-scope="pricing-plan-edit"] *::before,
                [data-h-scope="pricing-plan-edit"] *::after {
                    box-sizing: border-box;
                }

                @media (prefers-color-scheme: dark) {
                    [data-h-scope="pricing-plan-edit"] {
                        color-scheme: light !important;
                        background: #f7f8fa !important;
                        color: #1d1d1f !important;
                    }

                    [data-h-scope="pricing-plan-edit"] input,
                    [data-h-scope="pricing-plan-edit"] textarea,
                    [data-h-scope="pricing-plan-edit"] select {
                        color-scheme: light !important;
                        background: #ffffff !important;
                        color: #1d1d1f !important;
                    }
                }

                /* =========================================================
                   PAGE
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-page {
                    width: 100%;
                    max-width: 1180px;
                    margin: 0 auto;
                    padding: 28px 24px 48px;
                }

                /* =========================================================
                   HEADER
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 24px;
                    margin-bottom: 26px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-header-main {
                    min-width: 0;
                }

                [data-h-scope="pricing-plan-edit"] .pe-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    margin-bottom: 8px;
                    color: var(--pe-primary);
                    font-size: 11px;
                    line-height: 1;
                    font-weight: 700;
                    letter-spacing: .04em;
                    text-transform: uppercase;
                }

                [data-h-scope="pricing-plan-edit"] .pe-eyebrow-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--pe-primary);
                }

                [data-h-scope="pricing-plan-edit"] .pe-title-row {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 9px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-title {
                    margin: 0;
                    color: var(--pe-text);
                    font-size: 25px;
                    line-height: 1.2;
                    font-weight: 700;
                    letter-spacing: -.025em;
                }

                [data-h-scope="pricing-plan-edit"] .pe-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 5px 9px;
                    border-radius: 999px;
                    font-size: 10px;
                    line-height: 1;
                    font-weight: 700;
                    white-space: nowrap;
                }

                [data-h-scope="pricing-plan-edit"] .pe-status.active {
                    color: #087a4d;
                    background: var(--pe-primary-soft);
                }

                [data-h-scope="pricing-plan-edit"] .pe-status.inactive {
                    color: #9a3412;
                    background: #fff3ed;
                }

                [data-h-scope="pricing-plan-edit"] .pe-status-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: currentColor;
                }

                [data-h-scope="pricing-plan-edit"] .pe-subtitle {
                    max-width: 680px;
                    margin: 7px 0 0;
                    color: var(--pe-muted);
                    font-size: 13px;
                    line-height: 1.55;
                }

                [data-h-scope="pricing-plan-edit"] .pe-back {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    flex-shrink: 0;
                    padding: 9px 13px;
                    border: 1px solid var(--pe-border);
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

                [data-h-scope="pricing-plan-edit"] .pe-back:hover {
                    border-color: #d0d0d5;
                    background: #fafafa;
                    color: var(--pe-text);
                    transform: translateY(-1px);
                }

                [data-h-scope="pricing-plan-edit"] .pe-back svg {
                    width: 14px;
                    height: 14px;
                }

                /* =========================================================
                   MAIN LAYOUT
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 285px;
                    gap: 20px;
                    align-items: start;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-card {
                    min-width: 0;
                    overflow: hidden;
                    border: 1px solid var(--pe-border);
                    border-radius: 14px;
                    background: var(--pe-card);
                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .025),
                        0 5px 20px rgba(0, 0, 0, .025);
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    padding: 18px 20px;
                    border-bottom: 1px solid var(--pe-border);
                    background: #ffffff;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-header-content {
                    min-width: 0;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-title {
                    margin: 0;
                    color: var(--pe-text);
                    font-size: 14px;
                    line-height: 1.4;
                    font-weight: 700;
                    letter-spacing: -.01em;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-description {
                    margin: 4px 0 0;
                    color: var(--pe-muted);
                    font-size: 12px;
                    line-height: 1.5;
                }

                [data-h-scope="pricing-plan-edit"] .pe-edit-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 9px;
                    border: 1px solid #e3e3e8;
                    border-radius: 7px;
                    background: #f8f8fa;
                    color: #66666c;
                    font-size: 10px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                [data-h-scope="pricing-plan-edit"] .pe-edit-label svg {
                    width: 12px;
                    height: 12px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body {
                    padding: 20px;
                }

                /* =========================================================
                   SIDEBAR
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-card {
                    padding: 17px;
                    border: 1px solid var(--pe-border);
                    border-radius: 13px;
                    background: #ffffff;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, .02);
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-card.primary {
                    border-color: #d6eee2;
                    background: var(--pe-primary-soft);
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-card.warning {
                    border-color: #f0dfb9;
                    background: var(--pe-warning-soft);
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-icon {
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

                [data-h-scope="pricing-plan-edit"] .pe-side-card.primary .pe-side-icon {
                    background: #dff4e9;
                    color: var(--pe-primary);
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-card.warning .pe-side-icon {
                    background: #f9ebc9;
                    color: var(--pe-warning);
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-icon svg {
                    width: 15px;
                    height: 15px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-title {
                    margin: 0 0 5px;
                    color: var(--pe-text);
                    font-size: 12px;
                    font-weight: 700;
                }

                [data-h-scope="pricing-plan-edit"] .pe-side-text {
                    margin: 0;
                    color: var(--pe-muted);
                    font-size: 11.5px;
                    line-height: 1.6;
                }

                /* =========================================================
                   CURRENT PLAN SUMMARY
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-summary {
                    margin-top: 13px;
                    padding-top: 13px;
                    border-top: 1px solid rgba(11, 143, 91, .12);
                }

                [data-h-scope="pricing-plan-edit"] .pe-summary-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    padding: 5px 0;
                }

                [data-h-scope="pricing-plan-edit"] .pe-summary-label {
                    color: var(--pe-muted);
                    font-size: 10.5px;
                }

                [data-h-scope="pricing-plan-edit"] .pe-summary-value {
                    max-width: 150px;
                    overflow: hidden;
                    color: var(--pe-text);
                    font-size: 10.5px;
                    font-weight: 650;
                    text-align: right;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* =========================================================
                   FORM OVERRIDES
                ========================================================= */

                [data-h-scope="pricing-plan-edit"] .pe-form-body form {
                    color: var(--pe-text);
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body label {
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

                [data-h-scope="pricing-plan-edit"] .pe-form-body input,
                [data-h-scope="pricing-plan-edit"] .pe-form-body textarea,
                [data-h-scope="pricing-plan-edit"] .pe-form-body select {
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

                [data-h-scope="pricing-plan-edit"] .pe-form-body input:focus,
                [data-h-scope="pricing-plan-edit"] .pe-form-body textarea:focus,
                [data-h-scope="pricing-plan-edit"] .pe-form-body select:focus {
                    border-color: #8bcfb0 !important;
                    box-shadow: 0 0 0 3px rgba(11, 143, 91, .09) !important;
                    outline: none !important;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body input::placeholder,
                [data-h-scope="pricing-plan-edit"] .pe-form-body textarea::placeholder {
                    color: #a1a1a7 !important;
                }

                /*
                 * Prevent inherited dark-theme styles from affecting
                 * PlanForm elements.
                 */
                [data-h-scope="pricing-plan-edit"] .pe-form-body .bg-dark,
                [data-h-scope="pricing-plan-edit"] .pe-form-body .bg-black,
                [data-h-scope="pricing-plan-edit"] .pe-form-body [class*="dark"] {
                    background: #ffffff !important;
                    color: #1d1d1f !important;
                }

                [data-h-scope="pricing-plan-edit"] .pe-form-body button[type="submit"],
                [data-h-scope="pricing-plan-edit"] .pe-form-body .btn-primary {
                    border: 0 !important;
                    border-radius: 8px !important;
                    background: var(--pe-primary) !important;
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

                [data-h-scope="pricing-plan-edit"] .pe-form-body button[type="submit"]:hover,
                [data-h-scope="pricing-plan-edit"] .pe-form-body .btn-primary:hover {
                    background: var(--pe-primary-dark) !important;
                }

                /* =========================================================
                   RESPONSIVE
                ========================================================= */

                @media (max-width: 900px) {
                    [data-h-scope="pricing-plan-edit"] .pe-layout {
                        grid-template-columns: 1fr;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-sidebar {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 640px) {
                    [data-h-scope="pricing-plan-edit"] .pe-page {
                        padding: 20px 14px 35px;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-header {
                        flex-direction: column;
                        margin-bottom: 20px;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-title {
                        font-size: 22px;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-back {
                        width: 100%;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-form-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-form-body {
                        padding: 15px;
                    }

                    [data-h-scope="pricing-plan-edit"] .pe-sidebar {
                        grid-template-columns: 1fr;
                    }
                }
            `}),e.jsxs("div",{className:"pe-page",children:[e.jsxs("div",{className:"pe-header",children:[e.jsxs("div",{className:"pe-header-main",children:[e.jsxs("div",{className:"pe-eyebrow",children:[e.jsx("span",{className:"pe-eyebrow-dot"}),"Talent platform"]}),e.jsxs("div",{className:"pe-title-row",children:[e.jsx("h1",{className:"pe-title",children:"Edit pricing plan"}),e.jsxs("span",{className:`pe-status ${a.is_active?"active":"inactive"}`,children:[e.jsx("span",{className:"pe-status-dot"}),a.is_active?"Active":"Inactive"]})]}),e.jsx("p",{className:"pe-subtitle",children:"Update the pricing, benefits, visibility, and positioning of this plan without changing its existing configuration."})]}),e.jsxs(o,{href:route("admin.pricing-plans.index"),className:"pe-back",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"m12 19-7-7 7-7"})]}),"Back to plans"]})]}),e.jsxs("div",{className:"pe-layout",children:[e.jsxs("div",{className:"pe-form-card",children:[e.jsxs("div",{className:"pe-form-header",children:[e.jsxs("div",{className:"pe-form-header-content",children:[e.jsx("h2",{className:"pe-form-title",children:"Plan configuration"}),e.jsx("p",{className:"pe-form-description",children:"Make changes to the plan details, pricing, features, and availability."})]}),e.jsxs("div",{className:"pe-edit-label",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"})]}),"Editing existing plan"]})]}),e.jsx("div",{className:"pe-form-body",children:e.jsx(c,{mode:"edit",form:i,onSubmit:r,backHref:route("admin.pricing-plans.index")})})]}),e.jsxs("aside",{className:"pe-sidebar",children:[e.jsxs("div",{className:"pe-side-card primary",children:[e.jsx("div",{className:"pe-side-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 3v18"}),e.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"})]})}),e.jsx("h3",{className:"pe-side-title",children:"Current plan"}),e.jsx("p",{className:"pe-side-text",children:"Review the existing configuration before publishing your changes."}),e.jsxs("div",{className:"pe-summary",children:[e.jsxs("div",{className:"pe-summary-row",children:[e.jsx("span",{className:"pe-summary-label",children:"Name"}),e.jsx("span",{className:"pe-summary-value",children:a.name||"Unnamed"})]}),e.jsxs("div",{className:"pe-summary-row",children:[e.jsx("span",{className:"pe-summary-label",children:"Features"}),e.jsx("span",{className:"pe-summary-value",children:Array.isArray(a.features)?a.features.length:0})]}),e.jsxs("div",{className:"pe-summary-row",children:[e.jsx("span",{className:"pe-summary-label",children:"Status"}),e.jsx("span",{className:"pe-summary-value",children:a.is_active?"Active":"Inactive"})]}),e.jsxs("div",{className:"pe-summary-row",children:[e.jsx("span",{className:"pe-summary-label",children:"Featured"}),e.jsx("span",{className:"pe-summary-value",children:a.is_featured?"Yes":"No"})]})]})]}),e.jsxs("div",{className:"pe-side-card",children:[e.jsx("div",{className:"pe-side-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m12 3 1.9 5.8H20l-4.9 3.6 1.9 5.8-5-3.5-5 3.5 1.9-5.8L4 8.8h6.1L12 3Z"})})}),e.jsx("h3",{className:"pe-side-title",children:"Keep the value clear"}),e.jsx("p",{className:"pe-side-text",children:"Make sure the description and feature list clearly explain what professionals receive from this plan."})]}),!a.is_active&&e.jsxs("div",{className:"pe-side-card warning",children:[e.jsx("div",{className:"pe-side-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"}),e.jsx("path",{d:"M10.3 3.7 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z"})]})}),e.jsx("h3",{className:"pe-side-title",children:"Plan is inactive"}),e.jsx("p",{className:"pe-side-text",children:"This plan is currently not active. Enable it from the form when you are ready to make it available."})]}),a.is_featured&&e.jsxs("div",{className:"pe-side-card primary",children:[e.jsx("div",{className:"pe-side-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6Z"})})}),e.jsx("h3",{className:"pe-side-title",children:"Featured plan"}),e.jsx("p",{className:"pe-side-text",children:"This plan is currently marked as featured and may receive additional visual prominence across the platform."})]})]})]})]})]})}l.layout=a=>e.jsx(d,{children:a,title:`Edit ${a.props.plan.name}`});export{l as default};
