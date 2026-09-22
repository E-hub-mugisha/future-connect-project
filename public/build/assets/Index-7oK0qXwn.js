import{r as _,j as e,H as C,L as x,a as P}from"./app-CJlpfYPO.js";import{A as S}from"./AppLayout-WTBEreOn.js";const o=(a,i="RWF")=>{const t=Number(a||0);return`${new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:2}).format(t)} ${i}`},u=a=>a?a.toString().replace(/[_-]/g," ").replace(/\b\w/g,i=>i.toUpperCase()):"";function j({status:a}){const i=String(a||"").toLowerCase(),s={pending:{label:"Pending",className:"status-pending",icon:"bi-hourglass-split"},accepted:{label:"Accepted",className:"status-accepted",icon:"bi-check-circle"},declined:{label:"Declined",className:"status-declined",icon:"bi-x-circle"}}[i]||{label:u(i)||"Unknown",className:"status-default",icon:"bi-circle"};return e.jsxs("span",{className:`fc-status ${s.className}`,children:[e.jsx("i",{className:`bi ${s.icon}`}),s.label]})}function y({payment:a,isPaid:i}){return a?i?e.jsxs("span",{className:"fc-payment-badge payment-paid",children:[e.jsx("i",{className:"bi bi-check-circle-fill me-1"}),"Paid"]}):e.jsxs("span",{className:"fc-payment-badge payment-pending",children:[e.jsx("i",{className:"bi bi-clock me-1"}),u(a.status||"Pending")]}):e.jsxs("span",{className:"fc-payment-badge payment-none",children:[e.jsx("i",{className:"bi bi-dash-circle me-1"}),"No payment"]})}function $({status:a}){const i={all:{title:"No connection requests yet",description:"When people request to connect with you, their requests will appear here.",icon:"bi-people"},pending:{title:"No pending requests",description:"You currently have no connection requests waiting for your response.",icon:"bi-hourglass"},accepted:{title:"No accepted connections",description:"Accepted connection requests will appear here.",icon:"bi-check2-circle"},declined:{title:"No declined connections",description:"Declined connection requests will appear here.",icon:"bi-x-circle"}},t=i[a]||i.all;return e.jsxs("div",{className:"fc-empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx("i",{className:`bi ${t.icon}`})}),e.jsx("h5",{children:t.title}),e.jsx("p",{children:t.description}),e.jsxs(x,{href:route("talent.dashboard"),className:"btn btn-fc-primary",children:[e.jsx("i",{className:"bi bi-grid me-2"}),"Go to dashboard"]})]})}function F({links:a=[]}){return!a||a.length<=3?null:e.jsx("nav",{className:"fc-pagination","aria-label":"Connection pagination",children:e.jsx("ul",{className:"pagination mb-0",children:a.map((i,t)=>{const s=t===0,d=t===a.length-1;return e.jsx("li",{className:`page-item ${i.active?"active":""} ${i.url?"":"disabled"}`,children:e.jsx(x,{href:i.url||"#",preserveScroll:!0,className:"page-link",children:s?e.jsx("i",{className:"bi bi-chevron-left"}):d?e.jsx("i",{className:"bi bi-chevron-right"}):e.jsx("span",{dangerouslySetInnerHTML:{__html:i.label}})})},`${i.label}-${t}`)})})})}function f({icon:a,title:i,value:t,description:s,className:d=""}){return e.jsxs("div",{className:`fc-summary-card ${d}`,children:[e.jsx("div",{className:"summary-card-top",children:e.jsx("div",{className:"summary-icon",children:e.jsx("i",{className:`bi ${a}`})})}),e.jsxs("div",{className:"summary-content",children:[e.jsx("span",{className:"summary-title",children:i}),e.jsx("div",{className:"summary-value",children:t}),s&&e.jsx("span",{className:"summary-description",children:s})]})]})}function q({connection:a}){var c,p;const i=(a==null?void 0:a.payment)??null,t=(a==null?void 0:a.earnings)??null,s=Number((t==null?void 0:t.amount)??(i==null?void 0:i.amount)??0),d=Number((t==null?void 0:t.talent)??0);Number((t==null?void 0:t.future_connect)??0);const l=(t==null?void 0:t.currency)??(i==null?void 0:i.currency)??"RWF",n=(t==null?void 0:t.is_paid)===!0;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"contact-cell",children:[e.jsx("div",{className:"contact-avatar",children:((p=(c=a==null?void 0:a.name)==null?void 0:c.charAt(0))==null?void 0:p.toUpperCase())||"U"}),e.jsxs("div",{className:"contact-details",children:[e.jsx("div",{className:"contact-name",children:(a==null?void 0:a.name)||"Unknown user"}),e.jsx("div",{className:"contact-email",children:(a==null?void 0:a.email)||"No email"}),(a==null?void 0:a.phone)&&e.jsxs("div",{className:"contact-phone",children:[e.jsx("i",{className:"bi bi-telephone me-1"}),a.phone]})]})]})}),e.jsx("td",{children:e.jsx(j,{status:a==null?void 0:a.status})}),e.jsx("td",{children:e.jsxs("div",{className:"payment-cell",children:[e.jsx(y,{payment:i,isPaid:n}),i&&e.jsx("div",{className:"payment-amount",children:o(s,l)}),(i==null?void 0:i.reference)&&e.jsx("div",{className:"payment-reference",title:i.reference,children:i.reference})]})}),e.jsx("td",{children:e.jsx("div",{className:"earnings-cell",children:n?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"earning-main",children:o(d,l)}),e.jsxs("div",{className:"earning-sub",children:[e.jsx("span",{className:"earning-percent",children:"95%"}),e.jsx("span",{children:"your earnings"})]})]}):e.jsx("span",{className:"not-available",children:"—"})})}),e.jsx("td",{children:e.jsxs("div",{className:"date-cell",children:[e.jsx("div",{className:"date-main",children:(a==null?void 0:a.created_at)||"—"}),(a==null?void 0:a.created_at_human)&&e.jsx("div",{className:"date-human",children:a.created_at_human})]})}),e.jsx("td",{className:"text-end",children:e.jsxs(x,{href:route("talent.connections.show",a.id),className:"btn btn-view",children:["View",e.jsx("i",{className:"bi bi-arrow-right ms-2"})]})})]})}function A({connection:a}){var c,p;const i=(a==null?void 0:a.payment)??null,t=(a==null?void 0:a.earnings)??null,s=Number((t==null?void 0:t.amount)??(i==null?void 0:i.amount)??0),d=Number((t==null?void 0:t.talent)??0),l=(t==null?void 0:t.currency)??(i==null?void 0:i.currency)??"RWF",n=(t==null?void 0:t.is_paid)===!0;return e.jsxs("div",{className:"mobile-connection-card",children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsxs("div",{className:"contact-cell",children:[e.jsx("div",{className:"contact-avatar",children:((p=(c=a==null?void 0:a.name)==null?void 0:c.charAt(0))==null?void 0:p.toUpperCase())||"U"}),e.jsxs("div",{className:"contact-details",children:[e.jsx("div",{className:"contact-name",children:(a==null?void 0:a.name)||"Unknown user"}),e.jsx("div",{className:"contact-email",children:(a==null?void 0:a.email)||"No email"})]})]}),e.jsx(j,{status:a==null?void 0:a.status})]}),(a==null?void 0:a.message)&&e.jsxs("div",{className:"mobile-message",children:[e.jsx("div",{className:"mobile-section-label",children:"Message"}),e.jsx("p",{children:a.message})]}),e.jsxs("div",{className:"mobile-financial-grid",children:[e.jsxs("div",{className:"mobile-financial-item",children:[e.jsx("span",{children:"Payment"}),e.jsx("strong",{children:i?o(s,l):"—"}),e.jsx(y,{payment:i,isPaid:n})]}),e.jsxs("div",{className:"mobile-financial-item earning",children:[e.jsx("span",{children:"Your earnings"}),e.jsx("strong",{children:n?o(d,l):"—"}),n&&e.jsx("small",{children:"95% of payment"})]})]}),e.jsxs("div",{className:"mobile-card-footer",children:[e.jsxs("div",{className:"mobile-date",children:[e.jsx("i",{className:"bi bi-calendar3 me-1"}),(a==null?void 0:a.created_at)||"—"]}),e.jsxs(x,{href:route("talent.connections.show",a.id),className:"btn btn-view",children:["View details",e.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})]})}function Y({connections:a,counts:i={},filters:t={},earnings:s={}}){const d=(t==null?void 0:t.status)||"all",l=(a==null?void 0:a.data)||[],n=(s==null?void 0:s.currency)||"RWF",c=Number((s==null?void 0:s.total_amount)||0),p=Number((s==null?void 0:s.talent_earnings)||0),N=Number((s==null?void 0:s.future_connect_earnings)||0),h=Number((s==null?void 0:s.paid_connections)||0),v=Number((s==null?void 0:s.pending_payments)||0),w=_.useMemo(()=>l.reduce((r,m)=>{var g,b;return((g=m==null?void 0:m.earnings)==null?void 0:g.is_paid)===!0?r+Number(((b=m==null?void 0:m.earnings)==null?void 0:b.talent)||0):r},0),[l]),k=r=>{P.get(route("talent.connections.index"),{status:r},{preserveState:!0,preserveScroll:!0,replace:!0})},z=[{key:"all",label:"All requests",icon:"bi-inbox",count:(i==null?void 0:i.all)||0},{key:"pending",label:"Pending",icon:"bi-hourglass-split",count:(i==null?void 0:i.pending)||0},{key:"accepted",label:"Accepted",icon:"bi-check-circle",count:(i==null?void 0:i.accepted)||0},{key:"declined",label:"Declined",icon:"bi-x-circle",count:(i==null?void 0:i.declined)||0}];return e.jsxs(S,{children:[e.jsx(C,{title:"Connection Requests"}),e.jsx("div",{className:"fc-connections-page",children:e.jsxs("div",{className:"container-fluid px-3 px-lg-4",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"page-eyebrow",children:[e.jsx("span",{className:"eyebrow-dot"}),"Talent workspace"]}),e.jsx("h1",{children:"Connection requests"}),e.jsx("p",{children:"Manage people who want to connect with you and track your earnings."})]}),e.jsx("div",{className:"header-action",children:e.jsxs(x,{href:route("talent.dashboard"),className:"btn btn-dashboard",children:[e.jsx("i",{className:"bi bi-grid me-2"}),"Dashboard"]})})]}),e.jsx("div",{className:"summary-section",children:e.jsxs("div",{className:"summary-grid",children:[e.jsx(f,{icon:"bi-wallet2",title:"Total payments",value:o(c,n),description:`${h} paid connection${h===1?"":"s"}`,className:"summary-total"}),e.jsx(f,{icon:"bi-person-check",title:"Your earnings",value:o(p,n),description:"95% of successful payments",className:"summary-talent"}),e.jsx(f,{icon:"bi-building",title:"Future Connect",value:o(N,n),description:"5% platform fee",className:"summary-platform"}),e.jsx(f,{icon:"bi-clock-history",title:"Pending payments",value:v,description:"Awaiting successful payment",className:"summary-pending"})]})}),e.jsxs("div",{className:"earnings-info",children:[e.jsx("div",{className:"earnings-info-icon",children:e.jsx("i",{className:"bi bi-shield-check"})}),e.jsxs("div",{className:"earnings-info-content",children:[e.jsx("strong",{children:"Transparent earnings"}),e.jsxs("span",{children:["For every successful connection payment, you receive ",e.jsx("b",{children:"95%"})," while Future Connect retains"," ",e.jsx("b",{children:"5%"})," as the platform fee."]})]}),e.jsxs("div",{className:"earnings-info-value",children:[e.jsx("span",{children:"Your current share"}),e.jsx("strong",{children:"95%"})]})]}),e.jsxs("div",{className:"connections-panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Your connections"}),e.jsx("p",{children:"Review and respond to incoming requests."})]}),e.jsxs("div",{className:"panel-stat",children:[e.jsx("span",{children:"Page earnings"}),e.jsx("strong",{children:o(w,n)})]})]}),e.jsx("div",{className:"filter-tabs",children:z.map(r=>e.jsxs("button",{type:"button",onClick:()=>k(r.key),className:`filter-tab ${d===r.key?"active":""}`,children:[e.jsx("i",{className:`bi ${r.icon}`}),e.jsx("span",{children:r.label}),e.jsx("span",{className:"filter-count",children:r.count})]},r.key))}),l.length>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"table-responsive connection-table-wrapper",children:e.jsxs("table",{className:"table connection-table align-middle mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Contact"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Payment"}),e.jsx("th",{children:"Your earnings"}),e.jsx("th",{children:"Requested"}),e.jsx("th",{className:"text-end",children:"Action"})]})}),e.jsx("tbody",{children:l.map(r=>e.jsx(q,{connection:r},r.id))})]})}),e.jsx("div",{className:"mobile-connections",children:l.map(r=>e.jsx(A,{connection:r},r.id))}),e.jsxs("div",{className:"pagination-wrapper",children:[e.jsx("div",{className:"pagination-info",children:a!=null&&a.from&&(a!=null&&a.to)&&(a!=null&&a.total)?e.jsxs(e.Fragment,{children:["Showing"," ",e.jsx("strong",{children:a.from})," ","to"," ",e.jsx("strong",{children:a.to})," ","of"," ",e.jsx("strong",{children:a.total})," ","connections"]}):`${l.length} connection${l.length===1?"":"s"}`}),e.jsx(F,{links:a==null?void 0:a.links})]})]}):e.jsx($,{status:d})]})]})}),e.jsx("style",{children:`
                .fc-connections-page {
                    min-height: calc(100vh - 70px);
                    background: #f7faf9;
                    padding: 32px 0 60px;
                    color: #060f11;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 24px;
                    margin-bottom: 30px;
                }

                .page-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #48d597;
                    font-size: 12px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.09em;
                    margin-bottom: 10px;
                }

                .eyebrow-dot {
                    width: 7px;
                    height: 7px;
                    background: #48d597;
                    border-radius: 50%;
                    box-shadow: 0 0 0 5px rgba(72, 213, 151, 0.12);
                }

                .page-header h1 {
                    margin: 0;
                    font-size: clamp(28px, 3vw, 38px);
                    line-height: 1.15;
                    font-weight: 800;
                    letter-spacing: -0.04em;
                    color: #060f11;
                }

                .page-header p {
                    margin: 9px 0 0;
                    color: #687574;
                    font-size: 15px;
                    max-width: 600px;
                }

                .btn-dashboard {
                    border: 1px solid #e0e9e5;
                    background: #ffffff;
                    color: #060f11;
                    font-weight: 700;
                    padding: 11px 17px;
                    border-radius: 10px;
                    transition: all .2s ease;
                }

                .btn-dashboard:hover {
                    border-color: #48d597;
                    color: #060f11;
                    background: #f5fffa;
                    transform: translateY(-1px);
                }

                /* Summary */

                .summary-section {
                    margin-bottom: 20px;
                }

                .summary-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                }

                .fc-summary-card {
                    position: relative;
                    overflow: hidden;
                    background: #ffffff;
                    border: 1px solid #e6eeeb;
                    border-radius: 16px;
                    padding: 20px;
                    min-height: 155px;
                    box-shadow: 0 3px 14px rgba(6, 15, 17, 0.035);
                    transition: transform .2s ease,
                                box-shadow .2s ease;
                }

                .fc-summary-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 28px rgba(6, 15, 17, 0.07);
                }

                .fc-summary-card::after {
                    content: "";
                    position: absolute;
                    width: 90px;
                    height: 90px;
                    right: -35px;
                    bottom: -40px;
                    border-radius: 50%;
                    background: rgba(72, 213, 151, 0.08);
                }

                .summary-card-top {
                    margin-bottom: 16px;
                }

                .summary-icon {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 11px;
                    background: #effcf6;
                    color: #159a68;
                    font-size: 18px;
                }

                .summary-content {
                    display: flex;
                    flex-direction: column;
                }

                .summary-title {
                    color: #75827f;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: .055em;
                    margin-bottom: 5px;
                }

                .summary-value {
                    font-size: 25px;
                    font-weight: 800;
                    line-height: 1.15;
                    letter-spacing: -.025em;
                    color: #060f11;
                }

                .summary-description {
                    color: #899390;
                    font-size: 12px;
                    margin-top: 6px;
                }

                .summary-talent {
                    border-color: rgba(72, 213, 151, 0.35);
                }

                .summary-talent .summary-icon {
                    background: #48d597;
                    color: #060f11;
                }

                /* Earnings Info */

                .earnings-info {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    background: #060f11;
                    color: #ffffff;
                    border-radius: 15px;
                    padding: 17px 20px;
                    margin-bottom: 22px;
                }

                .earnings-info-icon {
                    width: 42px;
                    height: 42px;
                    flex: 0 0 42px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(72, 213, 151, .13);
                    color: #48d597;
                    font-size: 18px;
                }

                .earnings-info-content {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    flex: 1;
                }

                .earnings-info-content strong {
                    font-size: 13px;
                    font-weight: 800;
                }

                .earnings-info-content span {
                    color: #aab7b3;
                    font-size: 12px;
                }

                .earnings-info-content b {
                    color: #48d597;
                }

                .earnings-info-value {
                    text-align: right;
                    padding-left: 20px;
                    border-left: 1px solid rgba(255,255,255,.1);
                }

                .earnings-info-value span {
                    display: block;
                    color: #82918c;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: .06em;
                    font-weight: 700;
                }

                .earnings-info-value strong {
                    display: block;
                    color: #48d597;
                    font-size: 24px;
                    line-height: 1;
                    margin-top: 5px;
                }

                /* Main Panel */

                .connections-panel {
                    background: #ffffff;
                    border: 1px solid #e4ece8;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(6, 15, 17, 0.035);
                }

                .panel-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                    padding: 23px 24px 20px;
                }

                .panel-header h2 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 800;
                    letter-spacing: -.02em;
                }

                .panel-header p {
                    margin: 5px 0 0;
                    color: #8a9592;
                    font-size: 12px;
                }

                .panel-stat {
                    text-align: right;
                }

                .panel-stat span {
                    display: block;
                    color: #8a9592;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: .06em;
                    font-weight: 700;
                }

                .panel-stat strong {
                    display: block;
                    color: #159a68;
                    font-size: 16px;
                    margin-top: 3px;
                }

                /* Filters */

                .filter-tabs {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    padding: 0 24px;
                    border-bottom: 1px solid #edf2f0;
                    overflow-x: auto;
                }

                .filter-tab {
                    appearance: none;
                    border: 0;
                    background: transparent;
                    color: #76827f;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 13px 13px 14px;
                    white-space: nowrap;
                    font-size: 12px;
                    font-weight: 700;
                    position: relative;
                    cursor: pointer;
                }

                .filter-tab::after {
                    content: "";
                    position: absolute;
                    left: 10px;
                    right: 10px;
                    bottom: -1px;
                    height: 2px;
                    background: transparent;
                    border-radius: 2px 2px 0 0;
                }

                .filter-tab:hover {
                    color: #060f11;
                }

                .filter-tab.active {
                    color: #060f11;
                }

                .filter-tab.active::after {
                    background: #48d597;
                }

                .filter-count {
                    min-width: 22px;
                    height: 21px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 7px;
                    background: #f0f4f2;
                    color: #6e7b77;
                    font-size: 10px;
                    font-weight: 800;
                }

                .filter-tab.active .filter-count {
                    background: #e4faef;
                    color: #159a68;
                }

                /* Table */

                .connection-table-wrapper {
                    width: 100%;
                }

                .connection-table {
                    min-width: 1000px;
                }

                .connection-table thead th {
                    background: #fafcfb;
                    color: #7d8985;
                    border-bottom: 1px solid #e8efec;
                    padding: 13px 18px;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: .065em;
                    font-weight: 800;
                    white-space: nowrap;
                }

                .connection-table tbody td {
                    padding: 17px 18px;
                    border-bottom: 1px solid #edf2f0;
                    vertical-align: middle;
                }

                .connection-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .connection-table tbody tr {
                    transition: background .15s ease;
                }

                .connection-table tbody tr:hover {
                    background: #fbfdfc;
                }

                /* Contact */

                .contact-cell {
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    min-width: 200px;
                }

                .contact-avatar {
                    width: 40px;
                    height: 40px;
                    flex: 0 0 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: #eafaf3;
                    color: #159a68;
                    font-size: 14px;
                    font-weight: 800;
                }

                .contact-details {
                    min-width: 0;
                }

                .contact-name {
                    color: #060f11;
                    font-size: 13px;
                    font-weight: 800;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 180px;
                }

                .contact-email {
                    color: #899491;
                    font-size: 11px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 190px;
                    margin-top: 2px;
                }

                .contact-phone {
                    color: #9aa5a2;
                    font-size: 10px;
                    margin-top: 2px;
                }

                /* Status */

                .fc-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 8px;
                    border-radius: 7px;
                    font-size: 10px;
                    font-weight: 800;
                    white-space: nowrap;
                }

                .fc-status i {
                    font-size: 9px;
                }

                .status-pending {
                    background: #fff7e6;
                    color: #a66c00;
                }

                .status-accepted {
                    background: #eafaf3;
                    color: #12885c;
                }

                .status-declined {
                    background: #fff0f0;
                    color: #c44c4c;
                }

                .status-default {
                    background: #f1f4f3;
                    color: #697571;
                }

                /* Payment */

                .payment-cell {
                    min-width: 135px;
                }

                .fc-payment-badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 4px 7px;
                    border-radius: 6px;
                    font-size: 9px;
                    font-weight: 800;
                }

                .payment-paid {
                    background: #eafaf3;
                    color: #12885c;
                }

                .payment-pending {
                    background: #fff7e6;
                    color: #a66c00;
                }

                .payment-none {
                    background: #f2f4f3;
                    color: #8b9692;
                }

                .payment-amount {
                    margin-top: 5px;
                    color: #060f11;
                    font-size: 12px;
                    font-weight: 800;
                }

                .payment-reference {
                    margin-top: 2px;
                    color: #a1aaa7;
                    font-size: 9px;
                    max-width: 125px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                /* Earnings */

                .earnings-cell {
                    min-width: 120px;
                }

                .earning-main {
                    color: #12885c;
                    font-size: 13px;
                    font-weight: 800;
                }

                .earning-sub {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: 3px;
                    color: #9aa5a2;
                    font-size: 9px;
                }

                .earning-percent {
                    color: #159a68;
                    font-weight: 800;
                }

                .not-available {
                    color: #aeb7b4;
                    font-size: 17px;
                }

                /* Date */

                .date-cell {
                    min-width: 120px;
                }

                .date-main {
                    color: #4f5d59;
                    font-size: 11px;
                    font-weight: 700;
                }

                .date-human {
                    color: #a0aaa7;
                    font-size: 9px;
                    margin-top: 3px;
                }

                /* Action */

                .btn-view {
                    border: 1px solid #dfe9e5;
                    background: #ffffff;
                    color: #060f11;
                    border-radius: 8px;
                    padding: 7px 10px;
                    font-size: 10px;
                    font-weight: 800;
                    white-space: nowrap;
                    transition: all .2s ease;
                }

                .btn-view:hover {
                    border-color: #48d597;
                    background: #effcf6;
                    color: #08764d;
                }

                .btn-view i {
                    font-size: 9px;
                }

                /* Pagination */

                .pagination-wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                    padding: 17px 24px;
                    border-top: 1px solid #edf2f0;
                }

                .pagination-info {
                    color: #8b9692;
                    font-size: 11px;
                }

                .pagination-info strong {
                    color: #4d5a57;
                }

                .fc-pagination .pagination {
                    gap: 4px;
                }

                .fc-pagination .page-item .page-link {
                    border: 1px solid #e2eae7;
                    border-radius: 7px !important;
                    min-width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #596763;
                    background: #ffffff;
                    font-size: 10px;
                    font-weight: 700;
                    padding: 0 8px;
                }

                .fc-pagination .page-item.active .page-link {
                    background: #48d597;
                    border-color: #48d597;
                    color: #060f11;
                }

                .fc-pagination .page-item.disabled .page-link {
                    color: #c2cac7;
                    background: #fafcfb;
                }

                /* Empty State */

                .fc-empty-state {
                    text-align: center;
                    padding: 70px 25px;
                }

                .empty-icon {
                    width: 68px;
                    height: 68px;
                    margin: 0 auto 18px;
                    border-radius: 20px;
                    background: #effcf6;
                    color: #48d597;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 27px;
                }

                .fc-empty-state h5 {
                    margin: 0;
                    font-size: 17px;
                    font-weight: 800;
                }

                .fc-empty-state p {
                    color: #899491;
                    max-width: 420px;
                    margin: 8px auto 20px;
                    font-size: 12px;
                    line-height: 1.7;
                }

                .btn-fc-primary {
                    background: #48d597;
                    border: 1px solid #48d597;
                    color: #060f11;
                    border-radius: 9px;
                    font-size: 11px;
                    font-weight: 800;
                    padding: 9px 14px;
                }

                .btn-fc-primary:hover {
                    background: #36c486;
                    border-color: #36c486;
                    color: #060f11;
                }

                /* Mobile */

                .mobile-connections {
                    display: none;
                    padding: 14px;
                    background: #f8faf9;
                }

                .mobile-connection-card {
                    background: #ffffff;
                    border: 1px solid #e3ebe7;
                    border-radius: 14px;
                    margin-bottom: 10px;
                    overflow: hidden;
                }

                .mobile-connection-card:last-child {
                    margin-bottom: 0;
                }

                .mobile-card-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 10px;
                    padding: 15px;
                }

                .mobile-message {
                    padding: 0 15px 14px;
                    border-bottom: 1px solid #edf2f0;
                }

                .mobile-section-label {
                    color: #8a9692;
                    text-transform: uppercase;
                    letter-spacing: .06em;
                    font-size: 9px;
                    font-weight: 800;
                    margin-bottom: 5px;
                }

                .mobile-message p {
                    color: #52615d;
                    font-size: 11px;
                    line-height: 1.6;
                    margin: 0;
                }

                .mobile-financial-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    border-bottom: 1px solid #edf2f0;
                }

                .mobile-financial-item {
                    padding: 14px 15px;
                }

                .mobile-financial-item + .mobile-financial-item {
                    border-left: 1px solid #edf2f0;
                }

                .mobile-financial-item > span {
                    display: block;
                    color: #8b9692;
                    font-size: 9px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: .05em;
                    margin-bottom: 5px;
                }

                .mobile-financial-item strong {
                    display: block;
                    color: #060f11;
                    font-size: 13px;
                    font-weight: 800;
                    margin-bottom: 5px;
                }

                .mobile-financial-item.earning strong {
                    color: #12885c;
                }

                .mobile-financial-item small {
                    color: #9aa5a2;
                    font-size: 9px;
                }

                .mobile-card-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    padding: 12px 15px;
                }

                .mobile-date {
                    color: #8b9692;
                    font-size: 9px;
                }

                /* Responsive */

                @media (max-width: 1199px) {
                    .summary-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 767px) {
                    .fc-connections-page {
                        padding-top: 22px;
                    }

                    .page-header {
                        margin-bottom: 22px;
                    }

                    .page-header h1 {
                        font-size: 28px;
                    }

                    .page-header p {
                        font-size: 13px;
                    }

                    .header-action {
                        display: none;
                    }

                    .summary-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                    }

                    .fc-summary-card {
                        min-height: 135px;
                        padding: 15px;
                        border-radius: 13px;
                    }

                    .summary-icon {
                        width: 34px;
                        height: 34px;
                        border-radius: 9px;
                        font-size: 15px;
                    }

                    .summary-card-top {
                        margin-bottom: 12px;
                    }

                    .summary-value {
                        font-size: 17px;
                    }

                    .summary-title {
                        font-size: 9px;
                    }

                    .summary-description {
                        font-size: 9px;
                    }

                    .earnings-info {
                        align-items: flex-start;
                        padding: 15px;
                    }

                    .earnings-info-content span {
                        line-height: 1.5;
                    }

                    .earnings-info-value {
                        display: none;
                    }

                    .panel-header {
                        padding: 18px 15px;
                    }

                    .panel-stat {
                        display: none;
                    }

                    .filter-tabs {
                        padding: 0 10px;
                    }

                    .filter-tab {
                        padding-left: 9px;
                        padding-right: 9px;
                    }

                    .connection-table-wrapper {
                        display: none;
                    }

                    .mobile-connections {
                        display: block;
                    }

                    .pagination-wrapper {
                        flex-direction: column;
                        align-items: center;
                        padding: 15px;
                    }

                    .pagination-info {
                        text-align: center;
                    }
                }

                @media (max-width: 480px) {
                    .summary-grid {
                        grid-template-columns: 1fr;
                    }

                    .fc-summary-card {
                        min-height: auto;
                    }

                    .mobile-card-header {
                        flex-direction: column;
                    }

                    .mobile-card-header .fc-status {
                        align-self: flex-start;
                    }

                    .mobile-card-footer {
                        align-items: flex-end;
                    }

                    .mobile-date {
                        max-width: 120px;
                        line-height: 1.4;
                    }
                }
            `})]})}export{Y as default};
