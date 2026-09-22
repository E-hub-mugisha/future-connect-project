import{j as e,H as x,L as f}from"./app-CJlpfYPO.js";import{G as g}from"./GuestLayout-B3m7kG81.js";function h({payment:i,talent:s}){var r,c;const d=o=>{var l;o.preventDefault();const a=document.createElement("form");a.method="POST",a.action=`/connection/payment/${i.id}/pay`;const m=(l=document.querySelector('meta[name="csrf-token"]'))==null?void 0:l.getAttribute("content"),t=document.createElement("input");t.type="hidden",t.name="_token",t.value=m||"",a.appendChild(t),document.body.appendChild(a),a.submit()},p=(o,a="RWF")=>new Intl.NumberFormat("en-RW",{style:"currency",currency:a,maximumFractionDigits:0}).format(o),n=(i==null?void 0:i.meta)||{};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Complete Connection Payment"}),e.jsx("div",{className:"connection-payment-page",children:e.jsx("div",{className:"container py-5",children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-xl-8 col-lg-9",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("div",{className:"payment-icon",children:e.jsx("i",{className:"ti ti-credit-card"})}),e.jsx("h1",{className:"payment-title",children:"Complete Your Connection"}),e.jsxs("p",{className:"payment-subtitle",children:["Complete the payment below to send your connection request to"," ",e.jsx("strong",{children:s==null?void 0:s.name}),"."]})]}),e.jsxs("div",{className:"payment-card",children:[e.jsxs("div",{className:"talent-summary",children:[e.jsx("div",{className:"talent-avatar",children:s!=null&&s.profile_photo?e.jsx("img",{src:s.profile_photo,alt:s.name}):s!=null&&s.photo?e.jsx("img",{src:s.photo,alt:s.name}):e.jsx("span",{children:(c=(r=s==null?void 0:s.name)==null?void 0:r.charAt(0))==null?void 0:c.toUpperCase()})}),e.jsxs("div",{className:"talent-info",children:[e.jsx("span",{className:"small-label",children:"CONNECTING WITH"}),e.jsx("h3",{children:s==null?void 0:s.name}),(s==null?void 0:s.title)&&e.jsx("p",{children:s.title})]}),e.jsx("div",{className:"payment-status",children:e.jsxs("span",{className:"status-badge pending",children:[e.jsx("i",{className:"ti ti-clock"}),"Pending Payment"]})})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"section-title",children:[e.jsx("i",{className:"ti ti-file-invoice"}),"Connection Summary"]}),e.jsxs("div",{className:"summary-list",children:[e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Connection request"}),e.jsx("strong",{children:s==null?void 0:s.name})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Request status"}),e.jsx("span",{className:"text-pending",children:"Pending"})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Payment reference"}),e.jsx("strong",{className:"reference",children:i==null?void 0:i.reference})]})]}),(n==null?void 0:n.message)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"section-title",children:[e.jsx("i",{className:"ti ti-message"}),"Your Message"]}),e.jsx("div",{className:"message-box",children:e.jsx("p",{children:n.message})})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"section-title",children:[e.jsx("i",{className:"ti ti-user"}),"Contact Information"]}),e.jsxs("div",{className:"contact-grid",children:[e.jsxs("div",{className:"contact-item",children:[e.jsx("span",{className:"contact-label",children:"Name"}),e.jsx("strong",{children:(n==null?void 0:n.name)||"—"})]}),e.jsxs("div",{className:"contact-item",children:[e.jsx("span",{className:"contact-label",children:"Email"}),e.jsx("strong",{children:(n==null?void 0:n.email)||"—"})]}),(n==null?void 0:n.phone)&&e.jsxs("div",{className:"contact-item",children:[e.jsx("span",{className:"contact-label",children:"Phone"}),e.jsx("strong",{children:n.phone})]})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"amount-section",children:[e.jsxs("div",{children:[e.jsx("span",{className:"amount-label",children:"Connection Fee"}),e.jsx("p",{children:"Payment is required before the connection request is sent."})]}),e.jsx("div",{className:"amount",children:p((i==null?void 0:i.amount)||0,(i==null?void 0:i.currency)||"RWF")})]}),e.jsxs("div",{className:"payment-notice",children:[e.jsx("div",{className:"notice-icon",children:e.jsx("i",{className:"ti ti-shield-check"})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Your request is not connected yet"}),e.jsx("p",{children:"This payment creates a pending payment request. Your connection request will only be sent to the talent after the payment is successfully confirmed."})]})]}),e.jsx("form",{onSubmit:d,children:e.jsxs("div",{className:"payment-actions",children:[e.jsxs(f,{href:`/skill-profile/${s==null?void 0:s.id}`,className:"btn-cancel",children:[e.jsx("i",{className:"ti ti-arrow-left"}),"Back to Profile"]}),e.jsxs("button",{type:"submit",className:"btn-pay",children:[e.jsx("i",{className:"ti ti-lock"}),"Pay & Connect"]})]})}),e.jsxs("div",{className:"secure-payment",children:[e.jsx("i",{className:"ti ti-lock"}),"Secure payment · Your connection request is only activated after successful payment"]})]})]})})})}),e.jsx("style",{children:`
                .connection-payment-page {
                    min-height: 100vh;
                    background: #0f1117;
                    color: #ffffff;
                }

                .payment-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 18px;
                    margin: 0 auto 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 166, 103, 0.12);
                    color: #00a667;
                    font-size: 30px;
                }

                .payment-title {
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    color: #ffffff;
                }

                .payment-subtitle {
                    color: rgba(255, 255, 255, 0.65);
                    max-width: 620px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .payment-subtitle strong {
                    color: #00a667;
                }

                .payment-card {
                    background: #171a21;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
                }

                .talent-summary {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                }

                .talent-avatar {
                    width: 70px;
                    height: 70px;
                    border-radius: 18px;
                    overflow: hidden;
                    background: #00a667;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    font-size: 28px;
                    font-weight: 700;
                    flex-shrink: 0;
                }

                .talent-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .talent-info {
                    flex: 1;
                }

                .small-label {
                    display: block;
                    color: rgba(255, 255, 255, 0.45);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    margin-bottom: 5px;
                }

                .talent-info h3 {
                    margin: 0;
                    color: #ffffff;
                    font-size: 20px;
                    font-weight: 700;
                }

                .talent-info p {
                    margin: 4px 0 0;
                    color: rgba(255, 255, 255, 0.55);
                    font-size: 14px;
                }

                .payment-status {
                    margin-left: auto;
                }

                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 7px 12px;
                    border-radius: 50px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .status-badge.pending {
                    background: rgba(255, 193, 7, 0.12);
                    color: #ffc107;
                    border: 1px solid rgba(255, 193, 7, 0.18);
                }

                .divider {
                    height: 1px;
                    background: rgba(255, 255, 255, 0.07);
                    margin: 28px 0;
                }

                .section-title {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: #ffffff;
                    font-size: 15px;
                    font-weight: 700;
                    margin-bottom: 18px;
                }

                .section-title i {
                    color: #00a667;
                    font-size: 19px;
                }

                .summary-list {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    color: rgba(255, 255, 255, 0.55);
                    font-size: 14px;
                }

                .summary-row strong {
                    color: #ffffff;
                    text-align: right;
                }

                .text-pending {
                    color: #ffc107;
                    font-weight: 600;
                }

                .reference {
                    font-family: monospace;
                    font-size: 13px;
                    color: #00a667 !important;
                }

                .message-box {
                    padding: 18px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.035);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                }

                .message-box p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.72);
                    line-height: 1.7;
                    white-space: pre-wrap;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 15px;
                }

                .contact-item {
                    padding: 15px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.035);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                }

                .contact-label {
                    display: block;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 12px;
                    margin-bottom: 5px;
                }

                .contact-item strong {
                    display: block;
                    color: #ffffff;
                    font-size: 14px;
                    word-break: break-word;
                }

                .amount-section {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }

                .amount-label {
                    display: block;
                    font-size: 17px;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 5px;
                }

                .amount-section p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.48);
                    font-size: 13px;
                }

                .amount {
                    color: #00a667;
                    font-size: 30px;
                    font-weight: 800;
                    white-space: nowrap;
                }

                .payment-notice {
                    display: flex;
                    gap: 14px;
                    padding: 16px;
                    margin-top: 28px;
                    border-radius: 12px;
                    background: rgba(0, 166, 103, 0.07);
                    border: 1px solid rgba(0, 166, 103, 0.16);
                }

                .notice-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    background: rgba(0, 166, 103, 0.12);
                    color: #00a667;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    font-size: 19px;
                }

                .payment-notice strong {
                    color: #ffffff;
                    font-size: 14px;
                    display: block;
                    margin-bottom: 4px;
                }

                .payment-notice p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.55);
                    font-size: 13px;
                    line-height: 1.6;
                }

                .payment-actions {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    margin-top: 28px;
                }

                .btn-cancel,
                .btn-pay {
                    min-height: 48px;
                    border-radius: 10px;
                    padding: 0 20px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .btn-cancel {
                    color: rgba(255, 255, 255, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: transparent;
                }

                .btn-cancel:hover {
                    color: #ffffff;
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .btn-pay {
                    border: 0;
                    background: #00a667;
                    color: #ffffff;
                    min-width: 180px;
                }

                .btn-pay:hover:not(:disabled) {
                    background: #008f58;
                    transform: translateY(-1px);
                }

                .btn-pay:disabled {
                    opacity: 0.65;
                    cursor: not-allowed;
                }

                .secure-payment {
                    text-align: center;
                    margin-top: 18px;
                    color: rgba(255, 255, 255, 0.35);
                    font-size: 11px;
                }

                .secure-payment i {
                    margin-right: 4px;
                    color: #00a667;
                }

                @media (max-width: 767px) {
                    .connection-payment-page .container {
                        padding-left: 15px;
                        padding-right: 15px;
                    }

                    .payment-card {
                        padding: 20px;
                        border-radius: 16px;
                    }

                    .payment-title {
                        font-size: 26px;
                    }

                    .talent-summary {
                        flex-wrap: wrap;
                    }

                    .payment-status {
                        width: 100%;
                        margin-left: 0;
                    }

                    .contact-grid {
                        grid-template-columns: 1fr;
                    }

                    .amount-section {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .amount {
                        font-size: 26px;
                    }

                    .payment-actions {
                        flex-direction: column-reverse;
                    }

                    .btn-cancel,
                    .btn-pay {
                        width: 100%;
                    }
                }
            `})]})}h.layout=i=>e.jsx(g,{children:i,title:"Complete Connection Payment"});export{h as default};
