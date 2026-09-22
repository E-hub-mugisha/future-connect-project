import{r as D,u as F,j as e,H as $,L as w}from"./app-CJlpfYPO.js";import{A as q}from"./AppLayout-WTBEreOn.js";const k=["paid","completed","success","successful"];function L({connection:a,earnings:s={}}){var j;const[d,l]=D.useState(!1),{data:r,setData:m,patch:u,processing:p,errors:o,reset:_}=F({status:(a==null?void 0:a.status)??"pending",response:(a==null?void 0:a.response)??""}),t=(a==null?void 0:a.payment)??null,c=!!t,f=Number((t==null?void 0:t.amount)??(c?0:s==null?void 0:s.amount)??0),h=(t==null?void 0:t.currency)??(s==null?void 0:s.currency)??"RWF",g=String((t==null?void 0:t.status)??"").toLowerCase(),v=c&&k.includes(g),y=f*.95,C=f*.05,P=String(a==null?void 0:a.status).toLowerCase()==="pending";function S(n){n.preventDefault(),l(!0)}function R(){u(route("talent.connections.respond",a.id),{onSuccess:()=>l(!1)})}return e.jsxs(q,{children:[e.jsx($,{title:`Connection #${(a==null?void 0:a.id)??""}`}),e.jsxs("div",{"data-h-scope":"talent-connection-show",children:[e.jsx("style",{children:`
                    [data-h-scope="talent-connection-show"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-accent-soft: rgba(72,213,151,.12);
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f5f8f7;
                        --h-muted: #6b7678;
                        --h-border: rgba(6, 15, 17, 0.08);
                        --h-danger: #e5484d;
                        --h-warn: #f5a623;
                        --h-warn-soft: rgba(245,166,35,.12);
                        --h-warn-ink: #a36c08;

                        background: var(--h-bg);
                        min-height: 100%;
                    }

                    [data-h-scope="talent-connection-show"] .h-page { max-width: 1200px; margin: 0 auto; }

                    [data-h-scope="talent-connection-show"] .h-back {
                        display: inline-flex; align-items: center; gap: .5rem;
                        color: var(--h-muted); text-decoration: none; font-weight: 600; font-size: 14px;
                    }
                    [data-h-scope="talent-connection-show"] .h-back:hover { color: var(--h-ink); }

                    [data-h-scope="talent-connection-show"] .h-eyebrow {
                        color: var(--h-accent-dark); font-weight: 700; font-size: 13px;
                    }

                    [data-h-scope="talent-connection-show"] .h-card {
                        background: white;
                        border: 1px solid var(--h-border);
                        border-radius: 18px;
                    }

                    [data-h-scope="talent-connection-show"] .h-avatar {
                        width: 56px; height: 56px; flex-shrink: 0;
                        background: var(--h-accent-soft); color: #229365;
                        font-weight: 700; font-size: 18px;
                    }

                    [data-h-scope="talent-connection-show"] .h-badge {
                        display: inline-flex; align-items: center; gap: 6px;
                        white-space: nowrap; font-size: 12.5px; font-weight: 700;
                        padding: 6px 12px; border-radius: 999px;
                    }
                    [data-h-scope="talent-connection-show"] .h-badge-pending { background: var(--h-warn-soft); color: var(--h-warn-ink); }
                    [data-h-scope="talent-connection-show"] .h-badge-accepted { background: var(--h-accent-soft); color: #208d62; }
                    [data-h-scope="talent-connection-show"] .h-badge-declined { background: rgba(229,72,77,.11); color: #d13b40; }
                    [data-h-scope="talent-connection-show"] .h-badge-paid { background: var(--h-accent-soft); color: #208d62; }
                    [data-h-scope="talent-connection-show"] .h-badge-unpaid { background: var(--h-warn-soft); color: var(--h-warn-ink); }
                    [data-h-scope="talent-connection-show"] .h-badge-failed { background: rgba(229,72,77,.11); color: #d13b40; }

                    [data-h-scope="talent-connection-show"] .h-divider { border-top: 1px solid var(--h-border); }

                    [data-h-scope="talent-connection-show"] .h-total {
                        background: var(--h-ink); color: white; border-radius: 14px;
                    }

                    [data-h-scope="talent-connection-show"] .h-split-row {
                        display: flex; align-items: center; justify-content: space-between; gap: 12px;
                        padding: 14px 0; border-bottom: 1px solid var(--h-border);
                    }
                    [data-h-scope="talent-connection-show"] .h-split-row:last-child { border-bottom: none; }

                    [data-h-scope="talent-connection-show"] .h-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
                    [data-h-scope="talent-connection-show"] .h-dot-talent { background: var(--h-accent); }
                    [data-h-scope="talent-connection-show"] .h-dot-fee { background: var(--h-warn); }

                    [data-h-scope="talent-connection-show"] .h-message {
                        background: #f8faf9; border-left: 3px solid var(--h-accent);
                        border-radius: 0 10px 10px 0; white-space: pre-wrap;
                    }

                    [data-h-scope="talent-connection-show"] .h-label {
                        font-size: 12.5px; color: var(--h-muted); font-weight: 600;
                    }
                    [data-h-scope="talent-connection-show"] .h-value { color: var(--h-ink); font-weight: 600; }

                    [data-h-scope="talent-connection-show"] .h-form-control {
                        border: 1px solid rgba(6,15,17,.12); border-radius: 10px; padding: 10px 13px;
                    }
                    [data-h-scope="talent-connection-show"] .h-form-control:focus {
                        border-color: var(--h-accent); box-shadow: 0 0 0 3px var(--h-accent-soft);
                    }

                    [data-h-scope="talent-connection-show"] .h-btn { border-radius: 10px; font-weight: 700; padding: 10px 18px; }
                    [data-h-scope="talent-connection-show"] .h-btn-dark { background: var(--h-ink); color: white; border: 0; }
                    [data-h-scope="talent-connection-show"] .h-btn-dark:hover { background: #1b282b; color: white; }
                    [data-h-scope="talent-connection-show"] .h-btn-dark:disabled { opacity: .6; }
                    [data-h-scope="talent-connection-show"] .h-btn-light { background: white; color: var(--h-ink); border: 1px solid var(--h-border); }
                    [data-h-scope="talent-connection-show"] .h-btn-light:hover { background: #f4f7f6; color: var(--h-ink); }
                    [data-h-scope="talent-connection-show"] .h-btn-danger { background: var(--h-danger); color: white; border: 0; }
                    [data-h-scope="talent-connection-show"] .h-btn-danger:hover { background: #cf3e42; color: white; }

                    [data-h-scope="talent-connection-show"] .h-reference {
                        font-family: monospace; font-size: 12px; word-break: break-all;
                    }

                    [data-h-scope="talent-connection-show"] .h-pending-note {
                        background: var(--h-warn-soft); color: var(--h-warn-ink);
                        border-radius: 10px; font-size: 13px; padding: 10px 12px;
                    }

                    /* Confirm modal */
                    [data-h-scope="talent-connection-show"] .h-modal-backdrop {
                        position: fixed; inset: 0; background: rgba(6,15,17,.5);
                        display: flex; align-items: center; justify-content: center;
                        z-index: 1050; padding: 16px;
                    }
                    [data-h-scope="talent-connection-show"] .h-modal {
                        background: white; border-radius: 16px; max-width: 460px; width: 100%;
                        padding: 28px;
                    }
                `}),e.jsx("div",{className:"container-fluid px-3 px-md-4 py-4",children:e.jsxs("div",{className:"h-page",children:[e.jsx("div",{className:"mb-4",children:e.jsxs(w,{href:route("talent.connections.index"),className:"h-back",children:[e.jsx("i",{className:"fas fa-arrow-left"}),"Back to connections"]})}),e.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"h-eyebrow mb-1",children:"Connection request"}),e.jsx("h3",{className:"fw-bold mb-1",children:"Connection details"}),e.jsx("p",{className:"text-secondary mb-0",children:"Review the request, payment, and your earnings."})]}),e.jsx(z,{status:a==null?void 0:a.status})]}),e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-lg-7",children:[e.jsx("div",{className:"card h-card border-0 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-4",children:[e.jsx("div",{className:"h-avatar rounded-circle d-flex align-items-center justify-content-center",children:A(a==null?void 0:a.name)}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h5",{className:"fw-bold mb-1",children:(a==null?void 0:a.name)||"Unknown user"}),e.jsx("div",{className:"small text-secondary",children:"Connection requester"})]})]}),e.jsxs("div",{className:"row g-3",children:[e.jsx(b,{icon:"fa-envelope",label:"Email",value:(a==null?void 0:a.email)||"Not provided"}),e.jsx(b,{icon:"fa-phone",label:"Phone",value:(a==null?void 0:a.phone)||"Not provided"}),e.jsx(b,{icon:"fa-calendar",label:"Requested",value:(a==null?void 0:a.created_at)||(a==null?void 0:a.created_at_human)||"—"}),e.jsx(b,{icon:"fa-hashtag",label:"Connection ID",value:`#${a==null?void 0:a.id}`})]})]})}),e.jsx("div",{className:"card h-card border-0 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("h5",{className:"fw-bold mb-3",children:"Request message"}),a!=null&&a.message?e.jsx("div",{className:"h-message p-3",children:a.message}):e.jsx("div",{className:"text-secondary small",children:"No message was included with this request."})]})}),(a==null?void 0:a.response)&&e.jsx("div",{className:"card h-card border-0 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("h5",{className:"fw-bold mb-3",children:"Your response"}),e.jsx("div",{className:"h-message p-3",children:a.response})]})}),P&&e.jsx("div",{className:"card h-card border-0",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"fw-bold mb-1",children:"Respond to request"}),e.jsx("p",{className:"small text-secondary mb-0",children:"Accept or decline this connection request."})]}),e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold",children:"Decision"}),e.jsxs("select",{className:`form-select h-form-control ${o.status?"is-invalid":""}`,value:r.status,onChange:n=>m("status",n.target.value),children:[e.jsx("option",{value:"accepted",children:"Accept connection"}),e.jsx("option",{value:"declined",children:"Decline connection"})]}),o.status&&e.jsx("div",{className:"invalid-feedback",children:o.status})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("label",{className:"form-label fw-semibold",children:["Response ",e.jsx("span",{className:"text-secondary fw-normal ms-1",children:"(optional)"})]}),e.jsx("textarea",{rows:"5",className:`form-control h-form-control ${o.response?"is-invalid":""}`,placeholder:"Write a response to the requester...",value:r.response,onChange:n=>m("response",n.target.value)}),o.response&&e.jsx("div",{className:"invalid-feedback",children:o.response})]}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsxs("button",{type:"submit",className:"btn h-btn h-btn-dark",children:[e.jsx("i",{className:"fas fa-paper-plane me-2"}),"Review & save"]}),e.jsx(w,{href:route("talent.connections.index"),className:"btn h-btn h-btn-light",children:"Cancel"})]})]})]})})]}),e.jsxs("div",{className:"col-lg-5",children:[e.jsx("div",{className:"card h-card border-0 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"fw-bold mb-1",children:"Payment & earnings"}),e.jsx("p",{className:"small text-secondary mb-0",children:"Connection payment breakdown"})]}),c?e.jsx(N,{status:t.status}):e.jsxs("span",{className:"h-badge h-badge-unpaid",children:[e.jsx("i",{className:"fas fa-clock"})," Unpaid"]})]}),e.jsxs("div",{className:"h-total p-4 mb-3",children:[e.jsx("div",{className:"small opacity-75 mb-1",children:"Total connection payment"}),e.jsx("div",{className:"fs-3 fw-bold",children:c?x(f,h):"—"})]}),c&&!v&&e.jsxs("div",{className:"h-pending-note mb-3",children:[e.jsx("i",{className:"fas fa-circle-info me-2"}),"This payment hasn't settled yet (",g||"pending","), so the split below is a projection, not a confirmed earning."]}),e.jsxs("div",{className:"h-split-row",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("span",{className:"h-dot h-dot-talent"}),e.jsx("div",{children:e.jsxs("div",{className:"small text-secondary",children:[v?"Your earnings":"Projected earnings"," · 95%"]})})]}),e.jsx("div",{className:"fw-bold fs-6",style:{color:"#229365"},children:c?x(y,h):"—"})]}),e.jsxs("div",{className:"h-split-row",children:[e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("span",{className:"h-dot h-dot-fee"}),e.jsx("div",{className:"small text-secondary",children:"Future Connect · 5%"})]}),e.jsx("div",{className:"fw-bold fs-6",style:{color:"#a36c08"},children:c?x(C,h):"—"})]})]})}),e.jsx("div",{className:"card h-card border-0 mb-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("h5",{className:"fw-bold mb-3",children:"Payment details"}),c?e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Amount",value:x(t.amount,h)}),e.jsx(i,{label:"Currency",value:h}),e.jsx(i,{label:"Status",value:e.jsx(N,{status:t.status})}),e.jsx(i,{label:"Provider",value:t.provider||"—"}),e.jsx(i,{label:"Reference",value:e.jsx("span",{className:"h-reference",children:t.reference||"—"})}),e.jsx(i,{label:"Transaction ID",value:e.jsx("span",{className:"h-reference",children:t.provider_transaction_id||"—"})}),e.jsx(i,{label:"Paid at",value:t.paid_at||"—"})]}):e.jsxs("div",{className:"text-center py-3",children:[e.jsx("div",{className:"mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center",style:{width:52,height:52,background:"var(--h-warn-soft)",color:"var(--h-warn-ink)"},children:e.jsx("i",{className:"fas fa-receipt"})}),e.jsx("div",{className:"fw-semibold mb-1",children:"No payment found"}),e.jsx("div",{className:"small text-secondary",children:"No payment record is currently associated with this connection."})]})]})}),e.jsx("div",{className:"card h-card border-0",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("h6",{className:"fw-bold mb-2",children:"How the split works"}),e.jsx("div",{className:"small text-secondary",children:"Future Connect retains 5% of each connection payment once it settles. You receive the remaining 95% as your earnings."})]})})]})]})]})}),d&&e.jsx("div",{className:"h-modal-backdrop",onClick:()=>!p&&l(!1),children:e.jsxs("div",{className:"h-modal",onClick:n=>n.stopPropagation(),children:[e.jsx("div",{className:"d-flex align-items-center gap-2 mb-3",children:e.jsx("span",{className:"h-badge",style:r.status==="accepted"?{background:"var(--h-accent-soft)",color:"#208d62"}:{background:"rgba(229,72,77,.11)",color:"#d13b40"},children:r.status==="accepted"?"Accepting":"Declining"})}),e.jsx("h5",{className:"fw-bold mb-2",children:r.status==="accepted"?"Accept this connection?":"Decline this connection?"}),e.jsxs("p",{className:"text-secondary small mb-3",children:[r.status==="accepted"?`${(a==null?void 0:a.name)||"This user"} will be notified that you've accepted their request.`:`${(a==null?void 0:a.name)||"This user"} will be notified that you've declined their request.`," ","This can't be undone."]}),((j=r.response)==null?void 0:j.trim())&&e.jsx("div",{className:"h-message p-3 mb-4 small",children:r.response}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",className:`btn h-btn ${r.status==="accepted"?"h-btn-dark":"h-btn-danger"}`,onClick:R,disabled:p,children:p?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status"}),"Saving..."]}):`Confirm ${r.status==="accepted"?"accept":"decline"}`}),e.jsx("button",{type:"button",className:"btn h-btn h-btn-light",onClick:()=>l(!1),disabled:p,children:"Go back"})]})]})})]})]})}function b({icon:a,label:s,value:d}){return e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{className:"h-label mb-1",children:[e.jsx("i",{className:`fas ${a} me-1`}),s]}),e.jsx("div",{className:"h-value text-break",children:d})]})}function i({label:a,value:s}){return e.jsxs("div",{className:"h-split-row",children:[e.jsx("div",{className:"small text-secondary",children:a}),e.jsx("div",{className:"text-end",children:typeof s=="string"?e.jsx("div",{className:"fw-semibold text-break",children:s}):s})]})}function z({status:a}){const s=String(a||"pending").toLowerCase(),d={pending:{cls:"h-badge-pending",label:"Pending"},accepted:{cls:"h-badge-accepted",label:"Accepted"},declined:{cls:"h-badge-declined",label:"Declined"}},l=d[s]??d.pending;return e.jsx("span",{className:`h-badge ${l.cls}`,children:l.label})}function N({status:a}){const s=String(a||"pending").toLowerCase(),d=k.includes(s),l=["failed","cancelled","canceled","declined"].includes(s),r=d?"h-badge-paid":l?"h-badge-failed":"h-badge-unpaid",m=d?"fa-check-circle":l?"fa-circle-xmark":"fa-clock",u=d?"Paid":l?"Failed":"Pending";return e.jsxs("span",{className:`h-badge ${r}`,children:[e.jsx("i",{className:`fas ${m}`}),u]})}function A(a){return a?a.split(" ").map(s=>s[0]).slice(0,2).join("").toUpperCase():"?"}function x(a,s="RWF"){const d=Number(a||0);return new Intl.NumberFormat("en-RW",{style:"currency",currency:s||"RWF",maximumFractionDigits:2}).format(d)}export{L as default};
