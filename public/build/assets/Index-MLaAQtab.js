import{d as h,j as e,H as u,L as o,a as b}from"./app-B2SIh33N.js";import{A as j}from"./AppLayout-CkTPU_ZW.js";const d='-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif',m=()=>e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),y=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),v=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"m19 6-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"})]}),x=()=>e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6Z"})}),f=()=>e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})}),l=()=>e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"7",width:"18",height:"13",rx:"2"}),e.jsx("path",{d:"M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"M3 12h18"}),e.jsx("path",{d:"M10 12v2h4v-2"})]}),N=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m12 3-1.2 4.1a5 5 0 0 1-3.4 3.4L3.3 12l4.1 1.2a5 5 0 0 1 3.4 3.4L12 20.7l1.2-4.1a5 5 0 0 1 3.4-3.4l4.1-1.2-4.1-1.2a5 5 0 0 1-3.4-3.4L12 3Z"})});function g(i){if(i==null||i==="")return null;const p=Number(i);return Number.isFinite(p)?p.toLocaleString("en-RW",{minimumFractionDigits:0,maximumFractionDigits:2}):null}function s({icon:i,label:p,value:a,description:r,tone:n}){return e.jsx("div",{className:"col-6 col-xl-3",children:e.jsxs("div",{className:"pp-stat-card h-100",children:[e.jsxs("div",{className:"d-flex align-items-start justify-content-between",children:[e.jsx("div",{className:"pp-stat-icon",style:{background:n},children:i}),e.jsx("span",{className:"pp-stat-value",children:a})]}),e.jsx("div",{className:"pp-stat-label",children:p}),e.jsx("div",{className:"pp-stat-description",children:r})]})})}function w({plan:i,onDelete:p}){const a=Array.isArray(i.features)?i.features:[],r=g(i.monthly_price),n=g(i.annual_price);return e.jsxs("article",{className:`pp-plan-card ${i.is_featured?"is-featured":""} ${i.is_active?"":"is-inactive"}`,children:[i.is_featured&&e.jsx("div",{className:"pp-featured-line"}),e.jsxs("div",{className:"pp-plan-header",children:[e.jsx("div",{children:e.jsx("div",{className:"pp-plan-icon",children:i.is_featured?e.jsx(x,{}):e.jsx(l,{})})}),e.jsxs("div",{className:"pp-plan-badges",children:[i.is_featured&&e.jsxs("span",{className:"pp-badge pp-badge-featured",children:[e.jsx(x,{}),"Featured"]}),e.jsxs("span",{className:`pp-badge ${i.is_active?"pp-badge-active":"pp-badge-inactive"}`,children:[e.jsx("span",{className:"pp-status-dot"}),i.is_active?"Active":"Inactive"]})]})]}),e.jsx("div",{className:"pp-plan-name",children:i.name}),e.jsx("div",{className:"pp-plan-description",children:i.description||"A flexible talent platform plan designed to support your hiring and growth needs."}),e.jsxs("div",{className:"pp-price-section",children:[e.jsxs("div",{className:"pp-price-item",children:[e.jsx("div",{className:"pp-price-label",children:"Monthly"}),e.jsx("div",{className:"pp-price",children:r?e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:r}),e.jsx("span",{children:"RWF"})]}):e.jsx("span",{className:"pp-price-empty",children:"Not set"})})]}),e.jsx("div",{className:"pp-price-divider"}),e.jsxs("div",{className:"pp-price-item",children:[e.jsx("div",{className:"pp-price-label",children:"Annual"}),e.jsx("div",{className:"pp-price",children:n?e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:n}),e.jsx("span",{children:"RWF"})]}):e.jsx("span",{className:"pp-price-empty",children:"Not set"})})]})]}),e.jsx("div",{className:"pp-feature-heading",children:"What's included"}),a.length>0?e.jsxs("ul",{className:"pp-features",children:[a.slice(0,6).map((c,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"pp-check",children:e.jsx(f,{})}),e.jsx("span",{children:c})]},t)),a.length>6&&e.jsxs("li",{className:"pp-more-feature",children:["+",a.length-6," more features"]})]}):e.jsx("div",{className:"pp-no-features",children:"No features have been configured for this plan."}),e.jsxs("div",{className:"pp-card-actions",children:[e.jsxs(o,{href:route("admin.pricing-plans.edit",i.id),className:"pp-action-secondary",children:[e.jsx(y,{}),"Edit plan"]}),e.jsx("button",{type:"button",className:"pp-action-delete",onClick:()=>p(i),"aria-label":`Delete ${i.name}`,children:e.jsx(v,{})})]})]})}function z({plans:i=[]}){const{flash:p}=h().props,a=i.filter(t=>t.is_active).length,r=i.filter(t=>t.is_featured).length,n=i.filter(t=>t.monthly_price!==null||t.annual_price!==null).length;function c(t){window.confirm(`Delete "${t.name}"? This action cannot be undone.`)&&b.delete(route("admin.pricing-plans.destroy",t.id),{preserveScroll:!0})}return e.jsxs(j,{children:[e.jsx(u,{title:"Pricing Plans"}),e.jsxs("div",{className:"pricing-platform-page",style:{fontFamily:d,colorScheme:"light"},children:[e.jsx("style",{children:`
                    /* =========================================================
                       LIGHT-ONLY APPLE STYLE
                    ========================================================= */

                    .pricing-platform-page,
                    .pricing-platform-page * {
                        box-sizing: border-box;
                        color-scheme: light !important;
                    }

                    .pricing-platform-page {
                        min-height: 100vh;
                        background: #f7f7f8 !important;
                        color: #1d1d1f !important;
                        font-family: ${d};
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        font-synthesis: none;
                    }

                    .pricing-platform-page a {
                        text-decoration: none;
                    }

                    .pricing-platform-page button,
                    .pricing-platform-page a,
                    .pricing-platform-page input {
                        font-family: ${d};
                    }

                    /* =========================================================
                       PAGE WRAPPER
                    ========================================================= */

                    .pp-wrap {
                        width: 100%;
                        max-width: 1320px;
                        margin: 0 auto;
                        padding: 30px 34px 50px;
                    }

                    /* =========================================================
                       HEADER
                    ========================================================= */

                    .pp-header {
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        gap: 20px;
                        margin-bottom: 25px;
                    }

                    .pp-breadcrumb {
                        display: flex;
                        align-items: center;
                        gap: 7px;
                        color: #8e8e93;
                        font-size: 11px;
                        font-weight: 500;
                        margin-bottom: 9px;
                    }

                    .pp-breadcrumb-current {
                        color: #515154;
                    }

                    .pp-title {
                        margin: 0;
                        color: #1d1d1f !important;
                        font-size: 28px;
                        line-height: 1.1;
                        font-weight: 700;
                        letter-spacing: -0.9px;
                    }

                    .pp-subtitle {
                        margin: 8px 0 0;
                        color: #6e6e73 !important;
                        font-size: 12.5px;
                        line-height: 1.55;
                        max-width: 620px;
                    }

                    .pp-header-actions {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                    }

                    .pp-secondary-link {
                        height: 39px;
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        padding: 0 14px;
                        border: 1px solid #dedee3;
                        border-radius: 999px;
                        background: #ffffff !important;
                        color: #1d1d1f !important;
                        font-size: 11.5px;
                        font-weight: 600;
                        transition: all .15s ease;
                    }

                    .pp-secondary-link:hover {
                        background: #f5f5f7 !important;
                        border-color: #cfcfd4;
                    }

                    .pp-primary-link {
                        height: 39px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 7px;
                        padding: 0 16px;
                        border: 1px solid #0071e3;
                        border-radius: 999px;
                        background: #0071e3 !important;
                        color: #ffffff !important;
                        font-size: 11.5px;
                        font-weight: 600;
                        box-shadow: 0 5px 14px rgba(0,113,227,.16);
                        transition: all .15s ease;
                    }

                    .pp-primary-link:hover {
                        background: #0077ed !important;
                        border-color: #0077ed;
                        transform: translateY(-1px);
                    }

                    /* =========================================================
                       FLASH
                    ========================================================= */

                    .pp-flash {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        margin-bottom: 22px;
                        padding: 11px 14px;
                        border: 1px solid #ccebdc;
                        border-radius: 12px;
                        background: #f0faf5 !important;
                        color: #177245 !important;
                        font-size: 12px;
                        font-weight: 500;
                    }

                    .pp-flash-icon {
                        width: 22px;
                        height: 22px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background: #d9f3e5;
                    }

                    /* =========================================================
                       STATS
                    ========================================================= */

                    .pp-stats {
                        margin-bottom: 27px;
                    }

                    .pp-stat-card {
                        min-height: 130px;
                        padding: 17px 18px;
                        border: 1px solid #e4e4e8;
                        border-radius: 17px;
                        background: #ffffff !important;
                        box-shadow: 0 2px 7px rgba(0,0,0,.025);
                    }

                    .pp-stat-icon {
                        width: 34px;
                        height: 34px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 10px;
                    }

                    .pp-stat-value {
                        color: #1d1d1f !important;
                        font-size: 22px;
                        line-height: 1;
                        font-weight: 700;
                        letter-spacing: -.6px;
                    }

                    .pp-stat-label {
                        margin-top: 18px;
                        color: #1d1d1f !important;
                        font-size: 12px;
                        font-weight: 600;
                    }

                    .pp-stat-description {
                        margin-top: 3px;
                        color: #8e8e93 !important;
                        font-size: 10.5px;
                    }

                    /* =========================================================
                       SECTION
                    ========================================================= */

                    .pp-section {
                        margin-bottom: 15px;
                    }

                    .pp-section-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        margin-bottom: 14px;
                    }

                    .pp-section-title {
                        color: #1d1d1f !important;
                        font-size: 15px;
                        font-weight: 650;
                        letter-spacing: -.25px;
                    }

                    .pp-section-meta {
                        color: #8e8e93 !important;
                        font-size: 10.5px;
                    }

                    /* =========================================================
                       PLAN GRID
                    ========================================================= */

                    .pp-plan-grid {
                        display: grid;
                        grid-template-columns: repeat(
                            auto-fit,
                            minmax(285px, 1fr)
                        );
                        gap: 16px;
                    }

                    /* =========================================================
                       PLAN CARD
                    ========================================================= */

                    .pp-plan-card {
                        position: relative;
                        min-width: 0;
                        display: flex;
                        flex-direction: column;
                        padding: 20px;
                        border: 1px solid #e4e4e8;
                        border-radius: 19px;
                        background: #ffffff !important;
                        box-shadow:
                            0 2px 8px rgba(0,0,0,.025),
                            0 1px 2px rgba(0,0,0,.02);
                        overflow: hidden;
                        transition:
                            transform .18s ease,
                            box-shadow .18s ease,
                            border-color .18s ease;
                    }

                    .pp-plan-card:hover {
                        transform: translateY(-2px);
                        border-color: #d8d8dd;
                        box-shadow:
                            0 12px 30px rgba(0,0,0,.06),
                            0 2px 5px rgba(0,0,0,.03);
                    }

                    .pp-plan-card.is-featured {
                        border-color: #b9d8ff;
                        box-shadow:
                            0 8px 28px rgba(0,113,227,.08),
                            0 2px 6px rgba(0,0,0,.025);
                    }

                    .pp-plan-card.is-inactive {
                        background: #fafafa !important;
                    }

                    .pp-featured-line {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 3px;
                        background: #0071e3;
                    }

                    /* =========================================================
                       PLAN HEADER
                    ========================================================= */

                    .pp-plan-header {
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        gap: 12px;
                        margin-bottom: 15px;
                    }

                    .pp-plan-icon {
                        width: 38px;
                        height: 38px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 11px;
                        background: #f2f6fc !important;
                        color: #0071e3 !important;
                    }

                    .pp-plan-badges {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        flex-wrap: wrap;
                        gap: 5px;
                    }

                    .pp-badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 4px;
                        min-height: 23px;
                        padding: 0 8px;
                        border-radius: 999px;
                        font-size: 9px;
                        font-weight: 650;
                        white-space: nowrap;
                    }

                    .pp-badge-featured {
                        background: #edf5ff !important;
                        color: #0066cc !important;
                    }

                    .pp-badge-active {
                        background: #edf9f3 !important;
                        color: #177245 !important;
                    }

                    .pp-badge-inactive {
                        background: #fff1f0 !important;
                        color: #b42318 !important;
                    }

                    .pp-status-dot {
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background: currentColor;
                    }

                    /* =========================================================
                       PLAN CONTENT
                    ========================================================= */

                    .pp-plan-name {
                        color: #1d1d1f !important;
                        font-size: 18px;
                        line-height: 1.2;
                        font-weight: 700;
                        letter-spacing: -.45px;
                        margin-bottom: 6px;
                    }

                    .pp-plan-description {
                        min-height: 38px;
                        color: #6e6e73 !important;
                        font-size: 11.5px;
                        line-height: 1.55;
                    }

                    /* =========================================================
                       PRICE
                    ========================================================= */

                    .pp-price-section {
                        display: flex;
                        align-items: stretch;
                        gap: 20px;
                        margin-top: 19px;
                        padding: 15px 0;
                        border-top: 1px solid #eeeeef;
                        border-bottom: 1px solid #eeeeef;
                    }

                    .pp-price-item {
                        flex: 1;
                        min-width: 0;
                    }

                    .pp-price-divider {
                        width: 1px;
                        background: #eeeeef;
                    }

                    .pp-price-label {
                        margin-bottom: 5px;
                        color: #8e8e93 !important;
                        font-size: 9px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: .05em;
                    }

                    .pp-price {
                        display: flex;
                        align-items: baseline;
                        gap: 4px;
                        color: #1d1d1f !important;
                    }

                    .pp-price strong {
                        font-size: 15px;
                        font-weight: 700;
                        letter-spacing: -.25px;
                    }

                    .pp-price span {
                        color: #6e6e73 !important;
                        font-size: 9px;
                        font-weight: 600;
                    }

                    .pp-price-empty {
                        color: #8e8e93 !important;
                        font-size: 11px !important;
                        font-weight: 500 !important;
                    }

                    /* =========================================================
                       FEATURES
                    ========================================================= */

                    .pp-feature-heading {
                        margin-top: 18px;
                        margin-bottom: 7px;
                        color: #515154 !important;
                        font-size: 10px;
                        font-weight: 650;
                    }

                    .pp-features {
                        min-height: 116px;
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }

                    .pp-features li {
                        display: flex;
                        align-items: flex-start;
                        gap: 7px;
                        padding: 4px 0;
                        color: #515154 !important;
                        font-size: 10.5px;
                        line-height: 1.4;
                    }

                    .pp-check {
                        width: 17px;
                        height: 17px;
                        flex: 0 0 17px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background: #edf9f3 !important;
                        color: #168455 !important;
                    }

                    .pp-more-feature {
                        color: #8e8e93 !important;
                        padding-left: 24px !important;
                    }

                    .pp-no-features {
                        min-height: 116px;
                        display: flex;
                        align-items: flex-start;
                        padding-top: 4px;
                        color: #8e8e93 !important;
                        font-size: 10.5px;
                        line-height: 1.5;
                    }

                    /* =========================================================
                       ACTIONS
                    ========================================================= */

                    .pp-card-actions {
                        display: flex;
                        gap: 7px;
                        margin-top: 17px;
                        padding-top: 14px;
                        border-top: 1px solid #eeeeef;
                    }

                    .pp-action-secondary {
                        flex: 1;
                        height: 34px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 6px;
                        border: 1px solid #dedee3;
                        border-radius: 9px;
                        background: #ffffff !important;
                        color: #1d1d1f !important;
                        font-size: 10.5px;
                        font-weight: 600;
                        transition: all .15s ease;
                    }

                    .pp-action-secondary:hover {
                        background: #f5f5f7 !important;
                        border-color: #cfcfd4;
                    }

                    .pp-action-delete {
                        width: 34px;
                        height: 34px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid #ead9d8;
                        border-radius: 9px;
                        background: #ffffff !important;
                        color: #b42318 !important;
                        cursor: pointer;
                        transition: all .15s ease;
                    }

                    .pp-action-delete:hover {
                        background: #fff3f2 !important;
                        border-color: #efb6b1;
                    }

                    /* =========================================================
                       EMPTY STATE
                    ========================================================= */

                    .pp-empty {
                        padding: 65px 25px;
                        border: 1px dashed #dcdce1;
                        border-radius: 19px;
                        background: #ffffff !important;
                        text-align: center;
                    }

                    .pp-empty-icon {
                        width: 50px;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 14px;
                        border-radius: 15px;
                        background: #f2f2f7 !important;
                        color: #6e6e73 !important;
                    }

                    .pp-empty-title {
                        color: #1d1d1f !important;
                        font-size: 13px;
                        font-weight: 650;
                    }

                    .pp-empty-text {
                        max-width: 400px;
                        margin: 5px auto 18px;
                        color: #8e8e93 !important;
                        font-size: 11px;
                        line-height: 1.5;
                    }

                    /* =========================================================
                       FOOTER INFO
                    ========================================================= */

                    .pp-footer {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        margin-top: 16px;
                        color: #8e8e93 !important;
                        font-size: 10.5px;
                    }

                    .pp-footer strong {
                        color: #515154 !important;
                        font-weight: 600;
                    }

                    /* =========================================================
                       RESPONSIVE
                    ========================================================= */

                    @media (max-width: 991.98px) {
                        .pp-wrap {
                            padding: 25px 22px 40px;
                        }

                        .pp-header {
                            align-items: flex-start;
                            flex-direction: column;
                        }

                        .pp-header-actions {
                            width: 100%;
                        }

                        .pp-secondary-link,
                        .pp-primary-link {
                            flex: 1;
                        }
                    }

                    @media (max-width: 575.98px) {
                        .pp-wrap {
                            padding: 20px 14px 35px;
                        }

                        .pp-title {
                            font-size: 24px;
                        }

                        .pp-subtitle {
                            font-size: 11.5px;
                        }

                        .pp-header-actions {
                            flex-direction: column;
                            align-items: stretch;
                        }

                        .pp-secondary-link,
                        .pp-primary-link {
                            width: 100%;
                        }

                        .pp-plan-grid {
                            grid-template-columns: 1fr;
                        }

                        .pp-stat-card {
                            min-height: 118px;
                        }

                        .pp-footer {
                            align-items: flex-start;
                            flex-direction: column;
                        }
                    }

                    /* =========================================================
                       FORCE LIGHT EVEN UNDER DARK OS
                    ========================================================= */

                    @media (prefers-color-scheme: dark) {
                        .pricing-platform-page,
                        .pricing-platform-page .pp-plan-card,
                        .pricing-platform-page .pp-stat-card,
                        .pricing-platform-page .pp-empty,
                        .pricing-platform-page .pp-secondary-link,
                        .pricing-platform-page .pp-action-secondary,
                        .pricing-platform-page .pp-action-delete {
                            background: #ffffff !important;
                            color: #1d1d1f !important;
                        }

                        .pricing-platform-page {
                            background: #f7f7f8 !important;
                        }

                        .pricing-platform-page .pp-title,
                        .pricing-platform-page .pp-plan-name,
                        .pricing-platform-page .pp-stat-value,
                        .pricing-platform-page .pp-stat-label,
                        .pricing-platform-page .pp-price,
                        .pricing-platform-page .pp-empty-title {
                            color: #1d1d1f !important;
                        }

                        .pricing-platform-page .pp-subtitle,
                        .pricing-platform-page .pp-plan-description,
                        .pricing-platform-page .pp-footer,
                        .pricing-platform-page .pp-section-meta,
                        .pricing-platform-page .pp-features li {
                            color: #6e6e73 !important;
                        }
                    }
                `}),e.jsxs("div",{className:"pp-wrap",children:[e.jsxs("div",{className:"pp-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"pp-breadcrumb",children:[e.jsx("span",{children:"Admin"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"pp-breadcrumb-current",children:"Talent platform"})]}),e.jsx("h1",{className:"pp-title",children:"Pricing plans"}),e.jsx("p",{className:"pp-subtitle",children:"Configure the plans that power access to your talent, recruitment and professional services platform."})]}),e.jsxs("div",{className:"pp-header-actions",children:[e.jsxs(o,{href:"/admin",className:"pp-secondary-link",children:[e.jsx(l,{}),"Dashboard"]}),e.jsxs(o,{href:route("admin.pricing-plans.create"),className:"pp-primary-link",children:[e.jsx(m,{}),"New plan"]})]})]}),(p==null?void 0:p.success)&&e.jsxs("div",{className:"pp-flash",children:[e.jsx("span",{className:"pp-flash-icon",children:e.jsx(f,{})}),p.success]}),e.jsx("div",{className:"pp-stats",children:e.jsxs("div",{className:"row g-3",children:[e.jsx(s,{icon:e.jsx(l,{}),label:"Total plans",value:i.length,description:"Plans configured",tone:"#edf5ff"}),e.jsx(s,{icon:e.jsx(f,{}),label:"Active plans",value:a,description:"Currently available",tone:"#edf9f3"}),e.jsx(s,{icon:e.jsx(x,{}),label:"Featured",value:r,description:"Highlighted plans",tone:"#fff7e5"}),e.jsx(s,{icon:e.jsx(N,{}),label:"Configured",value:n,description:"With pricing defined",tone:"#f3efff"})]})}),e.jsxs("section",{className:"pp-section",children:[e.jsxs("div",{className:"pp-section-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"pp-section-title",children:"Platform plans"}),e.jsx("div",{className:"pp-section-meta",children:"Manage pricing, benefits and availability."})]}),e.jsxs("span",{className:"pp-section-meta",children:[i.length," ",i.length===1?"plan":"plans"]})]}),i.length===0?e.jsxs("div",{className:"pp-empty",children:[e.jsx("div",{className:"pp-empty-icon",children:e.jsx(l,{})}),e.jsx("div",{className:"pp-empty-title",children:"No pricing plans yet"}),e.jsx("div",{className:"pp-empty-text",children:"Create your first plan to define how talent, employers or platform members can access your services."}),e.jsxs(o,{href:route("admin.pricing-plans.create"),className:"pp-primary-link",children:[e.jsx(m,{}),"Create first plan"]})]}):e.jsx("div",{className:"pp-plan-grid",children:i.map(t=>e.jsx(w,{plan:t,onDelete:c},t.id))})]}),i.length>0&&e.jsxs("div",{className:"pp-footer",children:[e.jsxs("span",{children:["Showing"," ",e.jsx("strong",{children:i.length})," ","configured"," ",i.length===1?"plan":"plans"]}),e.jsx("span",{children:"Talent platform administration"})]})]})]})]})}export{z as default};
