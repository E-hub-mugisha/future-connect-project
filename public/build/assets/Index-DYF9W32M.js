import{d as z,r as g,j as e,H as A,L as b,a as c}from"./app-B2SIh33N.js";import{A as L}from"./AppLayout-CkTPU_ZW.js";const d={Search:()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"m20 20-4-4"})]}),Check:()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m5 12 4 4L19 6"})}),ArrowRight:()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m13 6 6 6-6 6"})]}),Users:()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Clock:()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 2"})]}),Calendar:()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]})};function T({demoRequests:t,filters:o,statusCounts:s}){var u;const{flash:i}=z().props,[l,v]=g.useState(o.search??""),p=(t==null?void 0:t.data)??[],n=g.useMemo(()=>Object.values(s??{}).reduce((r,a)=>r+Number(a||0),0),[s]),y=Number((s==null?void 0:s.pending)??0),j=Number((s==null?void 0:s.confirmed)??0),w=Number((s==null?void 0:s.completed)??0),m={pending:{label:"Pending",className:"status-pending"},confirmed:{label:"Confirmed",className:"status-confirmed"},completed:{label:"Completed",className:"status-completed"},cancelled:{label:"Cancelled",className:"status-cancelled"}};function x(r){c.get(route("admin.demo-requests.index"),{status:r||void 0,search:o.search||void 0},{preserveState:!0,preserveScroll:!0})}function q(r){r.preventDefault(),c.get(route("admin.demo-requests.index"),{status:o.status||void 0,search:l||void 0},{preserveState:!0,preserveScroll:!0})}function N(r){window.confirm(`Confirm the demo request from ${r.full_name}?`)&&c.patch(route("admin.demo-requests.confirm",r.id),{},{preserveState:!0,preserveScroll:!0})}function h(r){if(!r)return"—";const a=new Date(r);return Number.isNaN(a.getTime())?r:a.toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"})}function k(r){return r||"Time not specified"}function S(r){return r?r.trim().split(/\s+/).slice(0,2).map(a=>a.charAt(0).toUpperCase()).join(""):"DR"}return e.jsxs("div",{"data-h-scope":"demo-requests-index",children:[e.jsx(A,{title:"Demo Requests"}),e.jsx("style",{children:`
                [data-h-scope="demo-requests-index"] {
                    --dr-bg: #f7f8fa;
                    --dr-card: #ffffff;
                    --dr-text: #1d1d1f;
                    --dr-muted: #6e6e73;
                    --dr-subtle: #86868b;
                    --dr-border: #e6e6eb;

                    --dr-primary: #0b8f5b;
                    --dr-primary-dark: #087a4d;
                    --dr-primary-soft: #edf9f3;

                    --dr-warning: #b7791f;
                    --dr-warning-soft: #fff8e8;

                    --dr-blue: #2563eb;
                    --dr-blue-soft: #eff6ff;

                    --dr-danger: #d93025;
                    --dr-danger-soft: #fff1f0;

                    color-scheme: light !important;
                    min-height: 100%;
                    background: var(--dr-bg) !important;
                    color: var(--dr-text) !important;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                }

                [data-h-scope="demo-requests-index"] *,
                [data-h-scope="demo-requests-index"] *::before,
                [data-h-scope="demo-requests-index"] *::after {
                    box-sizing: border-box;
                }

                @media (prefers-color-scheme: dark) {
                    [data-h-scope="demo-requests-index"] {
                        color-scheme: light !important;
                        background: #f7f8fa !important;
                        color: #1d1d1f !important;
                    }

                    [data-h-scope="demo-requests-index"] input,
                    [data-h-scope="demo-requests-index"] button {
                        color-scheme: light !important;
                    }
                }

                /* =====================================================
                   PAGE
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-page {
                    width: 100%;
                    max-width: 1250px;
                    margin: 0 auto;
                    padding: 28px 24px 48px;
                }

                /* =====================================================
                   HEADER
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 24px;
                }

                [data-h-scope="demo-requests-index"] .dr-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    margin-bottom: 8px;
                    color: var(--dr-primary);
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .06em;
                    text-transform: uppercase;
                }

                [data-h-scope="demo-requests-index"] .dr-eyebrow-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .dr-title {
                    margin: 0;
                    color: var(--dr-text);
                    font-size: 25px;
                    line-height: 1.2;
                    font-weight: 700;
                    letter-spacing: -.025em;
                }

                [data-h-scope="demo-requests-index"] .dr-subtitle {
                    max-width: 650px;
                    margin: 7px 0 0;
                    color: var(--dr-muted);
                    font-size: 13px;
                    line-height: 1.55;
                }

                [data-h-scope="demo-requests-index"] .dr-total {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 11px;
                    border: 1px solid var(--dr-border);
                    border-radius: 9px;
                    background: #fff;
                    color: var(--dr-muted);
                    font-size: 11px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                [data-h-scope="demo-requests-index"] .dr-total strong {
                    color: var(--dr-text);
                    font-size: 13px;
                }

                /* =====================================================
                   FLASH
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-flash {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    margin-bottom: 18px;
                    padding: 11px 13px;
                    border: 1px solid #cdebdc;
                    border-radius: 10px;
                    background: var(--dr-primary-soft);
                    color: #087a4d;
                    font-size: 12px;
                    font-weight: 600;
                }

                [data-h-scope="demo-requests-index"] .dr-flash svg {
                    width: 15px;
                    height: 15px;
                    flex-shrink: 0;
                }

                /* =====================================================
                   SUMMARY CARDS
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-summary {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 12px;
                    margin-bottom: 18px;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-card {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    min-width: 0;
                    padding: 15px;
                    border: 1px solid var(--dr-border);
                    border-radius: 12px;
                    background: #fff;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, .02);
                }

                [data-h-scope="demo-requests-index"] .dr-summary-info {
                    min-width: 0;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-label {
                    margin-bottom: 5px;
                    color: var(--dr-muted);
                    font-size: 10.5px;
                    font-weight: 600;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-number {
                    color: var(--dr-text);
                    font-size: 20px;
                    line-height: 1;
                    font-weight: 700;
                    letter-spacing: -.02em;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    border-radius: 9px;
                    background: #f4f4f6;
                    color: #66666c;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-icon svg {
                    width: 16px;
                    height: 16px;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-card.pending .dr-summary-icon {
                    background: var(--dr-warning-soft);
                    color: var(--dr-warning);
                }

                [data-h-scope="demo-requests-index"] .dr-summary-card.confirmed .dr-summary-icon {
                    background: var(--dr-primary-soft);
                    color: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .dr-summary-card.completed .dr-summary-icon {
                    background: var(--dr-blue-soft);
                    color: var(--dr-blue);
                }

                /* =====================================================
                   TOOLBAR
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 14px;
                    margin-bottom: 14px;
                    padding: 12px;
                    border: 1px solid var(--dr-border);
                    border-radius: 12px;
                    background: #fff;
                }

                [data-h-scope="demo-requests-index"] .dr-search-form {
                    position: relative;
                    flex: 1;
                    max-width: 390px;
                }

                [data-h-scope="demo-requests-index"] .dr-search-icon {
                    position: absolute;
                    top: 50%;
                    left: 12px;
                    display: flex;
                    width: 15px;
                    height: 15px;
                    transform: translateY(-50%);
                    color: #9a9aa0;
                    pointer-events: none;
                }

                [data-h-scope="demo-requests-index"] .dr-search-icon svg {
                    width: 100%;
                    height: 100%;
                }

                [data-h-scope="demo-requests-index"] .dr-search {
                    width: 100%;
                    height: 36px;
                    padding: 0 12px 0 35px;
                    border: 1px solid #dedee3;
                    border-radius: 8px;
                    outline: none;
                    background: #fff;
                    color: var(--dr-text);
                    font-family: inherit;
                    font-size: 12px;
                    transition: border-color .15s ease, box-shadow .15s ease;
                }

                [data-h-scope="demo-requests-index"] .dr-search::placeholder {
                    color: #a1a1a7;
                }

                [data-h-scope="demo-requests-index"] .dr-search:focus {
                    border-color: #8bcfb0;
                    box-shadow: 0 0 0 3px rgba(11, 143, 91, .08);
                }

                [data-h-scope="demo-requests-index"] .status-tabs {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    flex-wrap: wrap;
                }

                [data-h-scope="demo-requests-index"] .status-tab {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    height: 32px;
                    padding: 0 9px;
                    border: 1px solid transparent;
                    border-radius: 7px;
                    background: transparent;
                    color: var(--dr-muted);
                    cursor: pointer;
                    font-family: inherit;
                    font-size: 11px;
                    font-weight: 600;
                    transition: all .15s ease;
                }

                [data-h-scope="demo-requests-index"] .status-tab:hover {
                    background: #f5f5f7;
                    color: var(--dr-text);
                }

                [data-h-scope="demo-requests-index"] .status-tab.active {
                    border-color: #d7eee2;
                    background: var(--dr-primary-soft);
                    color: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .status-count {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 20px;
                    height: 18px;
                    padding: 0 5px;
                    border-radius: 999px;
                    background: #f1f1f3;
                    color: #707077;
                    font-size: 9px;
                    font-weight: 700;
                }

                [data-h-scope="demo-requests-index"] .status-tab.active .status-count {
                    background: #dff4e9;
                    color: var(--dr-primary);
                }

                /* =====================================================
                   TABLE
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-table-wrap {
                    overflow: hidden;
                    border: 1px solid var(--dr-border);
                    border-radius: 13px;
                    background: #fff;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, .025);
                }

                [data-h-scope="demo-requests-index"] .dr-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                [data-h-scope="demo-requests-index"] .dr-table th {
                    padding: 11px 14px;
                    border-bottom: 1px solid var(--dr-border);
                    background: #fafafa;
                    color: #74747a;
                    font-size: 9.5px;
                    font-weight: 700;
                    letter-spacing: .055em;
                    text-align: left;
                    text-transform: uppercase;
                    white-space: nowrap;
                }

                [data-h-scope="demo-requests-index"] .dr-table td {
                    padding: 13px 14px;
                    border-bottom: 1px solid #eeeeF1;
                    color: #3d3d42;
                    font-size: 11.5px;
                    vertical-align: middle;
                }

                [data-h-scope="demo-requests-index"] .dr-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                [data-h-scope="demo-requests-index"] .dr-table tbody tr {
                    transition: background .12s ease;
                }

                [data-h-scope="demo-requests-index"] .dr-table tbody tr:hover {
                    background: #fafbfc;
                }

                /* =====================================================
                   REQUESTER
                ===================================================== */

                [data-h-scope="demo-requests-index"] .requester {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    min-width: 200px;
                }

                [data-h-scope="demo-requests-index"] .requester-avatar {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    flex: 0 0 34px;
                    border-radius: 9px;
                    background: var(--dr-primary-soft);
                    color: var(--dr-primary);
                    font-size: 10px;
                    font-weight: 750;
                    letter-spacing: .01em;
                }

                [data-h-scope="demo-requests-index"] .requester-info {
                    min-width: 0;
                }

                [data-h-scope="demo-requests-index"] .requester-name {
                    overflow: hidden;
                    color: var(--dr-text);
                    font-size: 12px;
                    font-weight: 650;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                [data-h-scope="demo-requests-index"] .requester-email {
                    margin-top: 3px;
                    overflow: hidden;
                    color: var(--dr-muted);
                    font-size: 10px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* =====================================================
                   COMPANY
                ===================================================== */

                [data-h-scope="demo-requests-index"] .company-name {
                    color: #343438;
                    font-size: 11.5px;
                    font-weight: 600;
                }

                [data-h-scope="demo-requests-index"] .table-sub {
                    margin-top: 3px;
                    color: var(--dr-muted);
                    font-size: 9.8px;
                }

                /* =====================================================
                   DATE / TIME
                ===================================================== */

                [data-h-scope="demo-requests-index"] .request-date {
                    color: #38383d;
                    font-size: 11px;
                    font-weight: 600;
                }

                [data-h-scope="demo-requests-index"] .request-time {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: 4px;
                    color: var(--dr-muted);
                    font-size: 9.8px;
                }

                /* =====================================================
                   STATUS
                ===================================================== */

                [data-h-scope="demo-requests-index"] .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 5px 8px;
                    border-radius: 999px;
                    font-size: 9.5px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                [data-h-scope="demo-requests-index"] .status-badge::before {
                    content: "";
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: currentColor;
                }

                [data-h-scope="demo-requests-index"] .status-pending {
                    background: var(--dr-warning-soft);
                    color: var(--dr-warning);
                }

                [data-h-scope="demo-requests-index"] .status-confirmed {
                    background: var(--dr-primary-soft);
                    color: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .status-completed {
                    background: var(--dr-blue-soft);
                    color: var(--dr-blue);
                }

                [data-h-scope="demo-requests-index"] .status-cancelled {
                    background: var(--dr-danger-soft);
                    color: var(--dr-danger);
                }

                /* =====================================================
                   ACTIONS
                ===================================================== */

                [data-h-scope="demo-requests-index"] .actions {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 6px;
                    white-space: nowrap;
                }

                [data-h-scope="demo-requests-index"] .action-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    height: 30px;
                    padding: 0 9px;
                    border: 1px solid #dedee3;
                    border-radius: 7px;
                    background: #fff;
                    color: #55565b;
                    cursor: pointer;
                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 650;
                    text-decoration: none;
                    transition: all .15s ease;
                }

                [data-h-scope="demo-requests-index"] .action-btn svg {
                    width: 12px;
                    height: 12px;
                }

                [data-h-scope="demo-requests-index"] .action-btn:hover {
                    border-color: #c9c9cf;
                    background: #f8f8fa;
                    color: var(--dr-text);
                }

                [data-h-scope="demo-requests-index"] .action-btn.confirm {
                    border-color: #cdebdc;
                    background: var(--dr-primary-soft);
                    color: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .action-btn.confirm:hover {
                    border-color: #a9ddc3;
                    background: #e2f6eb;
                    color: var(--dr-primary-dark);
                }

                /* =====================================================
                   EMPTY STATE
                ===================================================== */

                [data-h-scope="demo-requests-index"] .empty-state {
                    padding: 55px 20px;
                    text-align: center;
                }

                [data-h-scope="demo-requests-index"] .empty-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    margin: 0 auto 12px;
                    border-radius: 11px;
                    background: #f3f3f5;
                    color: #88888f;
                }

                [data-h-scope="demo-requests-index"] .empty-icon svg {
                    width: 20px;
                    height: 20px;
                }

                [data-h-scope="demo-requests-index"] .empty-title {
                    margin: 0;
                    color: var(--dr-text);
                    font-size: 13px;
                    font-weight: 650;
                }

                [data-h-scope="demo-requests-index"] .empty-text {
                    max-width: 380px;
                    margin: 5px auto 0;
                    color: var(--dr-muted);
                    font-size: 11px;
                    line-height: 1.5;
                }

                /* =====================================================
                   PAGINATION
                ===================================================== */

                [data-h-scope="demo-requests-index"] .pagination {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-top: 15px;
                    flex-wrap: wrap;
                }

                [data-h-scope="demo-requests-index"] .pagination a,
                [data-h-scope="demo-requests-index"] .pagination span {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 31px;
                    height: 31px;
                    padding: 0 9px;
                    border: 1px solid var(--dr-border);
                    border-radius: 7px;
                    background: #fff;
                    color: var(--dr-muted);
                    font-size: 10px;
                    font-weight: 600;
                    text-decoration: none;
                }

                [data-h-scope="demo-requests-index"] .pagination a:hover {
                    border-color: #cbded4;
                    color: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .pagination .current {
                    border-color: var(--dr-primary);
                    background: var(--dr-primary);
                    color: #fff;
                }

                /* =====================================================
                   RESPONSIVE
                ===================================================== */

                @media (max-width: 1050px) {
                    [data-h-scope="demo-requests-index"] .dr-summary {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    [data-h-scope="demo-requests-index"] .dr-table-wrap {
                        overflow-x: auto;
                    }

                    [data-h-scope="demo-requests-index"] .dr-table {
                        min-width: 900px;
                    }
                }

                @media (max-width: 760px) {
                    [data-h-scope="demo-requests-index"] .dr-page {
                        padding: 20px 14px 35px;
                    }

                    [data-h-scope="demo-requests-index"] .dr-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    [data-h-scope="demo-requests-index"] .dr-title {
                        font-size: 22px;
                    }

                    [data-h-scope="demo-requests-index"] .dr-total {
                        width: 100%;
                        justify-content: space-between;
                    }

                    [data-h-scope="demo-requests-index"] .dr-toolbar {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    [data-h-scope="demo-requests-index"] .dr-search-form {
                        max-width: none;
                    }

                    [data-h-scope="demo-requests-index"] .status-tabs {
                        overflow-x: auto;
                        flex-wrap: nowrap;
                        padding-bottom: 2px;
                    }

                    [data-h-scope="demo-requests-index"] .status-tab {
                        flex-shrink: 0;
                    }
                }

                @media (max-width: 500px) {
                    [data-h-scope="demo-requests-index"] .dr-summary {
                        grid-template-columns: 1fr 1fr;
                        gap: 8px;
                    }

                    [data-h-scope="demo-requests-index"] .dr-summary-card {
                        padding: 12px;
                    }

                    [data-h-scope="demo-requests-index"] .dr-summary-icon {
                        display: none;
                    }

                    [data-h-scope="demo-requests-index"] .dr-summary-number {
                        font-size: 18px;
                    }
                }
            `}),e.jsxs("div",{className:"dr-page",children:[e.jsxs("div",{className:"dr-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"dr-eyebrow",children:[e.jsx("span",{className:"dr-eyebrow-dot"}),"Talent platform"]}),e.jsx("h1",{className:"dr-title",children:"Demo requests"}),e.jsx("p",{className:"dr-subtitle",children:"Manage companies and professionals requesting product demonstrations from your team."})]}),e.jsxs("div",{className:"dr-total",children:[e.jsx("strong",{children:n}),"total requests"]})]}),(i==null?void 0:i.success)&&e.jsxs("div",{className:"dr-flash",children:[e.jsx(d.Check,{}),i.success]}),e.jsxs("div",{className:"dr-summary",children:[e.jsxs("div",{className:"dr-summary-card",children:[e.jsxs("div",{className:"dr-summary-info",children:[e.jsx("div",{className:"dr-summary-label",children:"All requests"}),e.jsx("div",{className:"dr-summary-number",children:n})]}),e.jsx("div",{className:"dr-summary-icon",children:e.jsx(d.Users,{})})]}),e.jsxs("div",{className:"dr-summary-card pending",children:[e.jsxs("div",{className:"dr-summary-info",children:[e.jsx("div",{className:"dr-summary-label",children:"Pending"}),e.jsx("div",{className:"dr-summary-number",children:y})]}),e.jsx("div",{className:"dr-summary-icon",children:e.jsx(d.Clock,{})})]}),e.jsxs("div",{className:"dr-summary-card confirmed",children:[e.jsxs("div",{className:"dr-summary-info",children:[e.jsx("div",{className:"dr-summary-label",children:"Confirmed"}),e.jsx("div",{className:"dr-summary-number",children:j})]}),e.jsx("div",{className:"dr-summary-icon",children:e.jsx(d.Check,{})})]}),e.jsxs("div",{className:"dr-summary-card completed",children:[e.jsxs("div",{className:"dr-summary-info",children:[e.jsx("div",{className:"dr-summary-label",children:"Completed"}),e.jsx("div",{className:"dr-summary-number",children:w})]}),e.jsx("div",{className:"dr-summary-icon",children:e.jsx(d.Calendar,{})})]})]}),e.jsxs("div",{className:"dr-toolbar",children:[e.jsxs("form",{className:"dr-search-form",onSubmit:q,children:[e.jsx("span",{className:"dr-search-icon",children:e.jsx(d.Search,{})}),e.jsx("input",{type:"text",className:"dr-search",placeholder:"Search name, email, company or phone...",value:l,onChange:r=>v(r.target.value)})]}),e.jsxs("div",{className:"status-tabs",children:[e.jsxs("button",{type:"button",className:`status-tab ${o.status?"":"active"}`,onClick:()=>x(null),children:["All",e.jsx("span",{className:"status-count",children:n})]}),Object.entries(s??{}).map(([r,a])=>{var f;return e.jsxs("button",{type:"button",className:`status-tab ${o.status===r?"active":""}`,onClick:()=>x(r),children:[((f=m[r])==null?void 0:f.label)??r,e.jsx("span",{className:"status-count",children:a})]},r)})]})]}),e.jsx("div",{className:"dr-table-wrap",children:e.jsxs("table",{className:"dr-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Requester"}),e.jsx("th",{children:"Company"}),e.jsx("th",{children:"Preferred schedule"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Submitted"}),e.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),e.jsxs("tbody",{children:[p.map(r=>{const a=m[r.status]??{label:r.status,className:""};return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"requester",children:[e.jsx("div",{className:"requester-avatar",children:S(r.full_name)}),e.jsxs("div",{className:"requester-info",children:[e.jsx("div",{className:"requester-name",children:r.full_name}),e.jsx("div",{className:"requester-email",children:r.work_email})]})]})}),e.jsxs("td",{children:[e.jsx("div",{className:"company-name",children:r.company_name}),e.jsxs("div",{className:"table-sub",children:[r.role||"Role not specified",r.company_size?` · ${r.company_size}`:""]})]}),e.jsxs("td",{children:[e.jsx("div",{className:"request-date",children:h(r.preferred_date)}),e.jsxs("div",{className:"request-time",children:[e.jsx(d.Clock,{}),k(r.preferred_time)]})]}),e.jsx("td",{children:e.jsx("span",{className:`status-badge ${a.className}`,children:a.label})}),e.jsx("td",{children:e.jsx("div",{className:"request-date",children:h(r.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"actions",children:[e.jsxs(b,{href:route("admin.demo-requests.show",r.id),className:"action-btn",children:["View",e.jsx(d.ArrowRight,{})]}),r.status==="pending"&&e.jsxs("button",{type:"button",className:"action-btn confirm",onClick:()=>N(r),children:[e.jsx(d.Check,{}),"Confirm"]})]})})]},r.id)}),p.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:"6",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(d.Users,{})}),e.jsx("h3",{className:"empty-title",children:"No demo requests found"}),e.jsx("p",{className:"empty-text",children:"There are no requests matching the current search or status filter."})]})})})]})]})}),((u=t==null?void 0:t.links)==null?void 0:u.length)>3&&e.jsx("div",{className:"pagination",children:t.links.map((r,a)=>r.url?e.jsx(b,{href:r.url,className:r.active?"current":"",dangerouslySetInnerHTML:{__html:r.label}},a):e.jsx("span",{style:{opacity:.4},dangerouslySetInnerHTML:{__html:r.label}},a))})]})]})}T.layout=t=>e.jsx(L,{children:t,title:"Demo Requests"});export{T as default};
