import{j as s,H as c,L as r}from"./app-BV2sDVKx.js";import{G as o}from"./GuestLayout-zw3aPGz3.js";function a({payment:e,talent:i}){return s.jsxs(s.Fragment,{children:[s.jsx(c,{title:"Connection Request Sent"}),s.jsx("div",{className:"connection-success-page",children:s.jsx("div",{className:"container py-5",children:s.jsx("div",{className:"row justify-content-center",children:s.jsx("div",{className:"col-lg-7 col-md-9",children:s.jsxs("div",{className:"success-card",children:[s.jsx("div",{className:"success-icon",children:s.jsx("i",{className:"ti ti-check"})}),s.jsx("span",{className:"success-label",children:"PAYMENT SUCCESSFUL"}),s.jsx("h1",{children:"Connection Request Sent!"}),s.jsxs("p",{className:"success-description",children:["Your payment was successfully confirmed and your connection request has been sent to ",s.jsx("strong",{children:i==null?void 0:i.name}),"."]}),s.jsxs("div",{className:"status-box",children:[s.jsx("div",{className:"status-icon",children:s.jsx("i",{className:"ti ti-user-check"})}),s.jsxs("div",{children:[s.jsx("strong",{children:"Connection request is pending"}),s.jsxs("p",{children:[i==null?void 0:i.name," will review your request and respond to you."]})]})]}),s.jsxs("div",{className:"details-section",children:[s.jsxs("div",{className:"details-title",children:[s.jsx("i",{className:"ti ti-receipt"}),"Payment Details"]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{children:"Talent"}),s.jsx("strong",{children:i==null?void 0:i.name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{children:"Amount"}),s.jsx("strong",{className:"amount",children:new Intl.NumberFormat("en-RW",{style:"currency",currency:(e==null?void 0:e.currency)||"RWF",maximumFractionDigits:0}).format((e==null?void 0:e.amount)||0)})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{children:"Reference"}),s.jsx("strong",{className:"reference",children:e==null?void 0:e.reference})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{children:"Status"}),s.jsxs("span",{className:"paid-badge",children:[s.jsx("i",{className:"ti ti-check"}),"Paid"]})]}),(e==null?void 0:e.paid_at)&&s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{children:"Paid at"}),s.jsx("strong",{children:new Date(e.paid_at).toLocaleString()})]})]}),s.jsxs("div",{className:"success-actions",children:[s.jsxs(r,{href:`/skill-profile/${i==null?void 0:i.id}`,className:"btn-primary",children:[s.jsx("i",{className:"ti ti-user"}),"View Talent Profile"]}),s.jsxs(r,{href:"/",className:"btn-secondary",children:[s.jsx("i",{className:"ti ti-home"}),"Back Home"]})]}),s.jsxs("div",{className:"success-footer",children:[s.jsx("i",{className:"ti ti-shield-check"}),"Your payment has been securely recorded. Reference:",s.jsx("strong",{children:e==null?void 0:e.reference})]})]})})})})}),s.jsx("style",{children:`

                .connection-success-page {
                    min-height: 100vh;
                    background: #0f1117;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                }

                .success-card {
                    background: #171a21;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 22px;
                    padding: 45px 40px;
                    text-align: center;
                    box-shadow:
                        0 25px 70px rgba(0,0,0,0.3);
                }

                .success-icon {
                    width: 78px;
                    height: 78px;
                    border-radius: 50%;
                    margin: 0 auto 18px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background: rgba(0,166,103,0.12);
                    border: 1px solid rgba(0,166,103,0.25);

                    color: #00a667;
                    font-size: 38px;
                }

                .success-label {
                    color: #00a667;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                }

                .success-card h1 {
                    margin: 10px 0;
                    color: #ffffff;
                    font-size: 30px;
                    font-weight: 800;
                }

                .success-description {
                    max-width: 570px;
                    margin: 0 auto;
                    color: rgba(255,255,255,0.58);
                    line-height: 1.7;
                }

                .success-description strong {
                    color: #00a667;
                }

                .status-box {
                    margin-top: 30px;
                    padding: 18px;

                    display: flex;
                    align-items: center;
                    text-align: left;
                    gap: 14px;

                    border-radius: 13px;

                    background: rgba(0,166,103,0.07);
                    border: 1px solid rgba(0,166,103,0.15);
                }

                .status-icon {
                    width: 42px;
                    height: 42px;
                    border-radius: 11px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background: rgba(0,166,103,0.12);
                    color: #00a667;

                    font-size: 20px;
                    flex-shrink: 0;
                }

                .status-box strong {
                    display: block;
                    color: #ffffff;
                    font-size: 14px;
                    margin-bottom: 3px;
                }

                .status-box p {
                    margin: 0;
                    color: rgba(255,255,255,0.5);
                    font-size: 13px;
                    line-height: 1.5;
                }

                .details-section {
                    margin-top: 28px;
                    padding: 22px;

                    border-radius: 14px;

                    background: rgba(255,255,255,0.025);
                    border: 1px solid rgba(255,255,255,0.06);

                    text-align: left;
                }

                .details-title {
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    color: #ffffff;
                    font-size: 14px;
                    font-weight: 700;

                    margin-bottom: 18px;
                }

                .details-title i {
                    color: #00a667;
                    font-size: 18px;
                }

                .detail-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    gap: 20px;
                    padding: 11px 0;

                    border-bottom: 1px solid
                        rgba(255,255,255,0.05);

                    font-size: 13px;
                }

                .detail-row:last-child {
                    border-bottom: 0;
                }

                .detail-row > span:first-child {
                    color: rgba(255,255,255,0.45);
                }

                .detail-row strong {
                    color: #ffffff;
                    text-align: right;
                }

                .amount {
                    color: #00a667 !important;
                }

                .reference {
                    font-family: monospace;
                    font-size: 12px;
                }

                .paid-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;

                    padding: 5px 10px;
                    border-radius: 30px;

                    color: #00a667 !important;
                    background: rgba(0,166,103,0.1);

                    font-size: 12px;
                    font-weight: 700;
                }

                .success-actions {
                    display: flex;
                    justify-content: center;
                    gap: 12px;

                    margin-top: 28px;
                }

                .btn-primary,
                .btn-secondary {
                    min-height: 46px;
                    padding: 0 18px;

                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;

                    border-radius: 10px;

                    font-size: 13px;
                    font-weight: 700;

                    text-decoration: none;

                    transition: all .2s ease;
                }

                .btn-primary {
                    background: #00a667;
                    color: #ffffff;
                }

                .btn-primary:hover {
                    background: #008f58;
                    color: #ffffff;
                    transform: translateY(-1px);
                }

                .btn-secondary {
                    background: transparent;
                    border: 1px solid
                        rgba(255,255,255,0.1);

                    color: rgba(255,255,255,0.7);
                }

                .btn-secondary:hover {
                    color: #ffffff;
                    border-color:
                        rgba(255,255,255,0.2);
                }

                .success-footer {
                    margin-top: 22px;

                    color: rgba(255,255,255,0.3);
                    font-size: 11px;
                    line-height: 1.6;
                }

                .success-footer i {
                    color: #00a667;
                    margin-right: 4px;
                }

                .success-footer strong {
                    margin-left: 4px;
                    color: rgba(255,255,255,0.5);
                    font-family: monospace;
                }

                @media(max-width: 576px) {

                    .connection-success-page {
                        display: block;
                    }

                    .success-card {
                        padding: 32px 20px;
                    }

                    .success-card h1 {
                        font-size: 25px;
                    }

                    .success-actions {
                        flex-direction: column;
                    }

                    .btn-primary,
                    .btn-secondary {
                        width: 100%;
                    }

                    .detail-row {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 5px;
                    }

                    .detail-row strong {
                        text-align: left;
                    }
                }

            `})]})}a.layout=e=>s.jsx(o,{children:e,title:"Connection Request Sent"});export{a as default};
