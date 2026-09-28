import{u as U,j as e,H,L as I}from"./app-B2SIh33N.js";import{A as Y}from"./AppLayout-CkTPU_ZW.js";const v={connectionsIndex:"/admin/connections",connectionRespond:s=>`/admin/connections/${s}/respond`,connectionAccept:s=>`/admin/connections/${s}/accept`},r={ArrowLeft:({size:s=17})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"m12 19-7-7 7-7"})]}),User:({size:s=18})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 21a8 8 0 0 1 16 0"})]}),Briefcase:({size:s=18})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"7",width:"18",height:"13",rx:"2"}),e.jsx("path",{d:"M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"M3 12h18"})]}),Mail:({size:s=15})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]}),Phone:({size:s=15})=>e.jsx("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"})}),Calendar:({size:s=15})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"17",rx:"2"}),e.jsx("path",{d:"M16 2v4M8 2v4M3 10h18"})]}),CreditCard:({size:s=18})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"M3 10h18"}),e.jsx("path",{d:"M7 15h3"})]}),Message:({size:s=18})=>e.jsx("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.8-4.9A8.5 8.5 0 1 1 21 11.5Z"})}),Check:({size:s=18})=>e.jsx("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m5 12 4 4L19 6"})}),Clock:({size:s=18})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3 2"})]}),X:({size:s=18})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 6 6 18"}),e.jsx("path",{d:"m6 6 12 12"})]}),Send:({size:s=16})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m22 2-7 20-4-9-9-4Z"}),e.jsx("path",{d:"M22 2 11 13"})]}),Copy:({size:s=14})=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})};function G(s){return s?s.split(" ").filter(Boolean).slice(0,2).map(t=>t.charAt(0).toUpperCase()).join(""):"TC"}function W(s){if(!s)return"—";const t=new Date(s);return Number.isNaN(t.getTime())?s:t.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function x(s){if(!s)return"—";const t=new Date(s);return Number.isNaN(t.getTime())?s:t.toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}function y(s,t="RWF"){if(s==null||s==="")return"—";const i=Number(s);return Number.isNaN(i)?`${s} ${t}`:`${new Intl.NumberFormat("en-US").format(i)} ${t}`}function o(s){return s?s.replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase()):"Unknown"}function Q(s){switch((s||"").toLowerCase()){case"accepted":case"approved":return{label:o(s),className:"cs-success",icon:e.jsx(r.Check,{size:13})};case"rejected":case"declined":return{label:o(s),className:"cs-danger",icon:e.jsx(r.X,{size:13})};default:return{label:o(s||"pending"),className:"cs-warning",icon:e.jsx(r.Clock,{size:13})}}}function V(s){switch((s||"").toLowerCase()){case"paid":case"completed":case"success":return{label:o(s),className:"cs-success"};case"failed":case"cancelled":case"rejected":return{label:o(s),className:"cs-danger"};case"pending":case"unpaid":return{label:o(s),className:"cs-warning"};default:return{label:o(s||"Unknown"),className:"cs-neutral"}}}function m({icon:s,title:t,description:i}){return e.jsxs("div",{className:"cs-section-header",children:[e.jsx("div",{className:"cs-section-icon",children:s}),e.jsxs("div",{children:[e.jsx("h3",{children:t}),i&&e.jsx("p",{children:i})]})]})}function a({label:s,value:t,children:i,mono:d=!1}){return e.jsxs("div",{className:"cs-detail-row",children:[e.jsx("span",{className:"cs-detail-label",children:s}),e.jsx("span",{className:`cs-detail-value ${d?"cs-mono":""}`,children:i??t??"—"})]})}function Z({connection:s}){var S,A,T,R,E,q,B,D,P;const t=s.status==="accepted"||s.status==="approved",i=s.payment,d=((S=s.user)==null?void 0:S.name)||s.name||"Unknown user",f=((A=s.user)==null?void 0:A.email)||s.email||null,w=((T=s.user)==null?void 0:T.phone)||s.phone||null,N=((R=s.talent)==null?void 0:R.name)||"Unknown talent",u=((E=s.talent)==null?void 0:E.email)||null,k=(i==null?void 0:i.status)||s.payment_status||"pending",g=(i==null?void 0:i.amount)??s.amount,h=(i==null?void 0:i.currency)||"RWF",p=(i==null?void 0:i.reference)||s.payment_reference||null,C=(i==null?void 0:i.provider_transaction_id)||null,_=(i==null?void 0:i.provider)||null,j=(i==null?void 0:i.paid_at)||null,z=i!=null&&i.meta&&typeof i.meta=="object"?i.meta:null,n=Q(s.status),b=V(k),c=U({response:s.response??""}),L=U({}),F=l=>{l.preventDefault(),c.post(v.connectionRespond(s.id),{preserveScroll:!0})},$=l=>{l.preventDefault(),L.post(v.connectionAccept(s.id),{preserveScroll:!0})},M=async l=>{if(l)try{await navigator.clipboard.writeText(String(l))}catch(O){console.error("Unable to copy value.",O)}};return e.jsxs(e.Fragment,{children:[e.jsx(H,{title:`Connection #${s.id}`}),e.jsx("div",{className:"cs-page",children:e.jsxs("div",{className:"cs-container",children:[e.jsx("div",{className:"cs-header",children:e.jsxs("div",{className:"cs-header-left",children:[e.jsxs(I,{href:v.connectionsIndex,className:"cs-back",children:[e.jsx(r.ArrowLeft,{size:15}),"Back to connections"]}),e.jsxs("div",{className:"cs-title-row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"cs-eyebrow",children:"TALENT CONNECTION"}),e.jsxs("h1",{children:["Connection request #",s.id]}),e.jsx("p",{children:"Review the complete request, requester, talent and payment information."})]}),e.jsxs("div",{className:`cs-status-large ${n.className}`,children:[n.icon,n.label]})]})]})}),e.jsxs("div",{className:"cs-summary-grid",children:[e.jsxs("div",{className:"cs-summary-card",children:[e.jsx("div",{className:"cs-summary-icon green",children:e.jsx(r.User,{size:19})}),e.jsxs("div",{children:[e.jsx("div",{className:"cs-summary-label",children:"REQUESTER"}),e.jsx("div",{className:"cs-summary-value",children:d}),e.jsx("div",{className:"cs-summary-sub",children:f||"No email"})]})]}),e.jsxs("div",{className:"cs-summary-card",children:[e.jsx("div",{className:"cs-summary-icon blue",children:e.jsx(r.Briefcase,{size:19})}),e.jsxs("div",{children:[e.jsx("div",{className:"cs-summary-label",children:"TALENT"}),e.jsx("div",{className:"cs-summary-value",children:N}),e.jsx("div",{className:"cs-summary-sub",children:u||"No email"})]})]}),e.jsxs("div",{className:"cs-summary-card",children:[e.jsx("div",{className:"cs-summary-icon purple",children:e.jsx(r.CreditCard,{size:19})}),e.jsxs("div",{children:[e.jsx("div",{className:"cs-summary-label",children:"PAYMENT"}),e.jsx("div",{className:"cs-summary-value",children:y(g,h)}),e.jsx("div",{className:"cs-summary-sub",children:o(k)})]})]}),e.jsxs("div",{className:"cs-summary-card",children:[e.jsx("div",{className:"cs-summary-icon orange",children:e.jsx(r.Calendar,{size:19})}),e.jsxs("div",{children:[e.jsx("div",{className:"cs-summary-label",children:"REQUESTED"}),e.jsx("div",{className:"cs-summary-value",children:W(s.created_at)}),e.jsx("div",{className:"cs-summary-sub",children:x(s.created_at)})]})]})]}),e.jsxs("div",{className:"cs-layout",children:[e.jsxs("main",{children:[e.jsxs("section",{className:"cs-card",children:[e.jsx(m,{icon:e.jsx(r.User,{size:17}),title:"Requester information",description:"Account information belonging to the person who submitted this request."}),e.jsxs("div",{className:"cs-profile",children:[e.jsx("div",{className:"cs-profile-avatar",children:G(d)}),e.jsxs("div",{className:"cs-profile-main",children:[e.jsx("h4",{children:d}),e.jsxs("div",{className:"cs-profile-meta",children:[f&&e.jsxs("span",{children:[e.jsx(r.Mail,{size:13}),f]}),w&&e.jsxs("span",{children:[e.jsx(r.Phone,{size:13}),w]})]})]})]}),e.jsxs("div",{className:"cs-detail-grid",children:[e.jsx(a,{label:"User ID",value:s.user_id}),e.jsx(a,{label:"Full name",value:d}),e.jsx(a,{label:"Email address",value:f}),e.jsx(a,{label:"Phone number",value:w})]})]}),e.jsxs("section",{className:"cs-card",children:[e.jsx(m,{icon:e.jsx(r.Briefcase,{size:17}),title:"Talent information",description:"The talent selected for this connection request."}),e.jsxs("div",{className:"cs-profile",children:[e.jsx("div",{className:"cs-profile-avatar talent",children:e.jsx(r.Briefcase,{size:20})}),e.jsxs("div",{className:"cs-profile-main",children:[e.jsx("h4",{children:N}),u&&e.jsx("div",{className:"cs-profile-meta",children:e.jsxs("span",{children:[e.jsx(r.Mail,{size:13}),u]})})]})]}),e.jsxs("div",{className:"cs-detail-grid",children:[e.jsx(a,{label:"Talent ID",value:s.talent_id}),e.jsx(a,{label:"Talent name",value:N}),e.jsx(a,{label:"Talent email",value:u}),e.jsx(a,{label:"Skill",value:(q=s.talent)==null?void 0:q.skill}),e.jsx(a,{label:"Category",value:((D=(B=s.talent)==null?void 0:B.category)==null?void 0:D.name)||((P=s.talent)==null?void 0:P.category)})]})]}),e.jsxs("section",{className:"cs-card",children:[e.jsx(m,{icon:e.jsx(r.Message,{size:17}),title:"Connection request",description:"The message and current communication history."}),e.jsxs("div",{className:"cs-message-box",children:[e.jsx("div",{className:"cs-message-label",children:"REQUEST MESSAGE"}),e.jsx("p",{children:s.message||"The requester did not provide a message."})]}),e.jsxs("div",{className:"cs-detail-grid",children:[e.jsx(a,{label:"Request ID",value:s.id}),e.jsx(a,{label:"Status",children:e.jsxs("span",{className:`cs-status ${n.className}`,children:[n.icon,n.label]})}),e.jsx(a,{label:"Created",value:x(s.created_at)}),e.jsx(a,{label:"Last updated",value:x(s.updated_at)})]}),s.response&&e.jsxs("div",{className:"cs-response-box",children:[e.jsxs("div",{className:"cs-response-header",children:[e.jsx("span",{children:"ADMIN RESPONSE"}),e.jsx(r.Check,{size:14})]}),e.jsx("p",{children:s.response})]})]}),e.jsxs("section",{className:"cs-card payment-card",children:[e.jsx(m,{icon:e.jsx(r.CreditCard,{size:17}),title:"Payment information",description:"Complete payment information associated with this connection request."}),e.jsxs("div",{className:"payment-highlight",children:[e.jsxs("div",{children:[e.jsx("div",{className:"payment-highlight-label",children:"PAYMENT AMOUNT"}),e.jsx("div",{className:"payment-highlight-value",children:y(g,h)})]}),e.jsx("span",{className:`cs-status payment-status ${b.className}`,children:b.label})]}),e.jsxs("div",{className:"cs-detail-grid",children:[e.jsx(a,{label:"Payment status",children:e.jsx("span",{className:`cs-status ${b.className}`,children:b.label})}),e.jsx(a,{label:"Amount",value:y(g,h)}),e.jsx(a,{label:"Currency",value:h}),e.jsx(a,{label:"Provider",value:_}),e.jsx(a,{label:"Payment reference",children:p?e.jsxs("button",{type:"button",className:"cs-copy-value",onClick:()=>M(p),title:"Copy payment reference",children:[e.jsx("span",{className:"cs-mono",children:p}),e.jsx(r.Copy,{size:13})]}):"—"}),e.jsx(a,{label:"Provider transaction ID",children:C?e.jsxs("button",{type:"button",className:"cs-copy-value",onClick:()=>M(C),children:[e.jsx("span",{className:"cs-mono",children:C}),e.jsx(r.Copy,{size:13})]}):"—"}),e.jsx(a,{label:"Paid at",value:j?x(j):null}),e.jsx(a,{label:"Payment ID",value:i==null?void 0:i.id})]}),z&&Object.keys(z).length>0&&e.jsxs("div",{className:"payment-meta",children:[e.jsx("div",{className:"payment-meta-title",children:"PAYMENT METADATA"}),e.jsx("pre",{children:JSON.stringify(z,null,2)})]}),!i&&e.jsxs("div",{className:"payment-empty",children:[e.jsx(r.CreditCard,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:"No payment record linked"}),e.jsx("p",{children:"There is currently no ConnectionPayment record associated with this request."})]})]})]}),e.jsxs("section",{className:"cs-card",children:[e.jsx(m,{icon:e.jsx(r.Clock,{size:17}),title:"Request timeline",description:"Important timestamps for this connection."}),e.jsxs("div",{className:"cs-timeline",children:[e.jsxs("div",{className:"cs-timeline-item",children:[e.jsx("div",{className:"cs-timeline-dot green",children:e.jsx(r.User,{size:12})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Connection requested"}),e.jsx("p",{children:x(s.created_at)})]})]}),s.response&&e.jsxs("div",{className:"cs-timeline-item",children:[e.jsx("div",{className:"cs-timeline-dot blue",children:e.jsx(r.Message,{size:12})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Admin response added"}),e.jsx("p",{children:"Response is available above."})]})]}),t&&e.jsxs("div",{className:"cs-timeline-item",children:[e.jsx("div",{className:"cs-timeline-dot green",children:e.jsx(r.Check,{size:12})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Connection accepted"}),e.jsx("p",{children:"Current request status is accepted."})]})]}),j&&e.jsxs("div",{className:"cs-timeline-item",children:[e.jsx("div",{className:"cs-timeline-dot purple",children:e.jsx(r.CreditCard,{size:12})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Payment completed"}),e.jsx("p",{children:x(j)})]})]})]})]})]}),e.jsxs("aside",{children:[e.jsxs("div",{className:"cs-side-card",children:[e.jsx("div",{className:"cs-side-label",children:"CONNECTION STATUS"}),e.jsxs("div",{className:`cs-status-large side ${n.className}`,children:[n.icon,n.label]}),e.jsxs("div",{className:"cs-side-info",children:[e.jsx("span",{children:"Request ID"}),e.jsxs("strong",{children:["#",s.id]})]}),e.jsxs("div",{className:"cs-side-info",children:[e.jsx("span",{children:"Requested"}),e.jsx("strong",{children:W(s.created_at)})]})]}),e.jsxs("div",{className:"cs-side-card",children:[e.jsx("div",{className:"cs-side-label",children:"PAYMENT"}),e.jsxs("div",{className:"cs-side-payment",children:[e.jsx(r.CreditCard,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:y(g,h)}),e.jsx("span",{children:o(k)})]})]}),p&&e.jsxs("div",{className:"cs-side-reference",children:[e.jsx("span",{children:"Reference"}),e.jsxs("button",{type:"button",onClick:()=>M(p),children:[p,e.jsx(r.Copy,{size:12})]})]})]}),e.jsxs("div",{className:"cs-side-card",children:[e.jsx("div",{className:"cs-side-label",children:"ADMIN ACTIONS"}),t?e.jsxs("div",{className:"cs-accepted-box",children:[e.jsx(r.Check,{size:15}),"Connection accepted"]}):e.jsx("form",{onSubmit:$,children:e.jsxs("button",{type:"submit",className:"cs-accept-btn",disabled:L.processing,children:[e.jsx(r.Check,{size:15}),L.processing?"Accepting...":"Accept connection"]})}),e.jsxs(I,{href:v.connectionsIndex,className:"cs-secondary-btn",children:[e.jsx(r.ArrowLeft,{size:14}),"All connections"]})]})]})]}),e.jsxs("section",{className:"cs-card cs-response-card",children:[e.jsx(m,{icon:e.jsx(r.Send,{size:17}),title:"Admin response",description:"Send or update the response associated with this connection request."}),e.jsxs("form",{onSubmit:F,children:[e.jsxs("div",{className:"cs-form-group",children:[e.jsx("label",{htmlFor:"response",children:"Response"}),e.jsx("textarea",{id:"response",rows:5,value:c.data.response,onChange:l=>c.setData("response",l.target.value),placeholder:"Write a response to the requester...",className:`cs-textarea ${c.errors.response?"error":""}`}),c.errors.response&&e.jsx("div",{className:"cs-form-error",children:c.errors.response})]}),e.jsxs("div",{className:"cs-form-footer",children:[e.jsx("span",{children:"The response will be stored with this connection request."}),e.jsxs("button",{type:"submit",className:"cs-send-btn",disabled:c.processing,children:[e.jsx(r.Send,{size:14}),c.processing?"Sending...":s.response?"Update response":"Send response"]})]})]})]})]})}),e.jsx("style",{children:`
                .cs-page,
                .cs-page * {
                    box-sizing: border-box;
                }

                .cs-page {
                    min-height: 100vh;
                    padding: 28px;
                    background: #f7f8fa;
                    color: #17191c;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                    font-size: 13px;
                }

                .cs-container {
                    width: 100%;
                    max-width: 1240px;
                    margin: 0 auto;
                }

                /* Header */

                .cs-header {
                    margin-bottom: 22px;
                }

                .cs-back {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 19px;
                    color: #6e747a;
                    font-size: 11px;
                    font-weight: 550;
                    text-decoration: none;
                    transition: color .15s ease;
                }

                .cs-back:hover {
                    color: #00a667;
                }

                .cs-title-row {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;
                }

                .cs-eyebrow {
                    margin-bottom: 6px;
                    color: #00a667;
                    font-size: 9px;
                    font-weight: 750;
                    letter-spacing: .13em;
                }

                .cs-title-row h1 {
                    margin: 0;
                    color: #17191c;
                    font-size: 26px;
                    line-height: 1.15;
                    font-weight: 650;
                    letter-spacing: -.035em;
                }

                .cs-title-row p {
                    margin: 7px 0 0;
                    color: #7d8389;
                    font-size: 11px;
                }

                .cs-status-large {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    width: fit-content;
                    padding: 7px 11px;
                    border-radius: 999px;
                    font-size: 10px;
                    font-weight: 650;
                    white-space: nowrap;
                }

                .cs-status-large.side {
                    margin: 11px 0 17px;
                    font-size: 11px;
                }

                .cs-success {
                    background: #eaf8f0;
                    color: #23824d;
                }

                .cs-warning {
                    background: #fff5df;
                    color: #a97107;
                }

                .cs-danger {
                    background: #fff0ef;
                    color: #c14e4e;
                }

                .cs-neutral {
                    background: #f0f1f2;
                    color: #73797f;
                }

                .cs-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    width: fit-content;
                    padding: 5px 8px;
                    border-radius: 999px;
                    font-size: 9px;
                    font-weight: 650;
                    white-space: nowrap;
                }

                /* Summary */

                .cs-summary-grid {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 12px;
                    margin-bottom: 16px;
                }

                .cs-summary-card {
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    min-height: 91px;
                    padding: 15px;
                    border: 1px solid #e7e9eb;
                    border-radius: 12px;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(16,24,40,.025);
                }

                .cs-summary-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 37px;
                    height: 37px;
                    flex: 0 0 37px;
                    border-radius: 9px;
                }

                .cs-summary-icon.green {
                    background: #e7f7f0;
                    color: #00a667;
                }

                .cs-summary-icon.blue {
                    background: #edf4fb;
                    color: #4a7da9;
                }

                .cs-summary-icon.purple {
                    background: #f1edfb;
                    color: #7559a8;
                }

                .cs-summary-icon.orange {
                    background: #fff3e5;
                    color: #b87522;
                }

                .cs-summary-label {
                    margin-bottom: 3px;
                    color: #999ea3;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .08em;
                }

                .cs-summary-value {
                    overflow: hidden;
                    color: #282c30;
                    font-size: 12px;
                    font-weight: 650;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .cs-summary-sub {
                    overflow: hidden;
                    margin-top: 3px;
                    color: #969ba0;
                    font-size: 9px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* Layout */

                .cs-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 275px;
                    gap: 16px;
                    align-items: start;
                }

                main {
                    min-width: 0;
                }

                aside {
                    min-width: 0;
                }

                /* Cards */

                .cs-card,
                .cs-side-card {
                    margin-bottom: 16px;
                    padding: 20px;
                    border: 1px solid #e7e9eb;
                    border-radius: 12px;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(16,24,40,.025);
                }

                .cs-side-card {
                    padding: 17px;
                }

                .cs-section-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 18px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid #eceeef;
                }

                .cs-section-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 31px;
                    height: 31px;
                    flex: 0 0 31px;
                    border-radius: 8px;
                    background: #edf8f4;
                    color: #00a667;
                }

                .cs-section-header h3 {
                    margin: 0;
                    color: #282c30;
                    font-size: 13px;
                    font-weight: 650;
                }

                .cs-section-header p {
                    margin: 3px 0 0;
                    color: #92979c;
                    font-size: 9px;
                }

                /* Profiles */

                .cs-profile {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 13px;
                    margin-bottom: 16px;
                    border-radius: 9px;
                    background: #f8f9fa;
                    border: 1px solid #eceeef;
                }

                .cs-profile-avatar {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 43px;
                    height: 43px;
                    flex: 0 0 43px;
                    border-radius: 11px;
                    background: #e4f7ef;
                    color: #008e5b;
                    font-size: 11px;
                    font-weight: 750;
                }

                .cs-profile-avatar.talent {
                    background: #edf4f8;
                    color: #4b7188;
                }

                .cs-profile-main {
                    min-width: 0;
                }

                .cs-profile-main h4 {
                    margin: 0;
                    color: #272b2f;
                    font-size: 13px;
                    font-weight: 650;
                }

                .cs-profile-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 4px;
                }

                .cs-profile-meta span {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    color: #92979c;
                    font-size: 9px;
                }

                /* Details */

                .cs-detail-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    column-gap: 28px;
                }

                .cs-detail-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    min-height: 40px;
                    padding: 8px 0;
                    border-bottom: 1px solid #f0f1f2;
                }

                .cs-detail-label {
                    flex: 0 0 auto;
                    color: #8d9297;
                    font-size: 10px;
                }

                .cs-detail-value {
                    min-width: 0;
                    color: #363a3e;
                    font-size: 10px;
                    font-weight: 550;
                    text-align: right;
                    word-break: break-word;
                }

                .cs-mono {
                    font-family:
                        "SFMono-Regular",
                        Consolas,
                        "Liberation Mono",
                        monospace;
                    font-size: 9px;
                }

                /* Message */

                .cs-message-box {
                    padding: 14px;
                    margin-bottom: 17px;
                    border: 1px solid #e7e9eb;
                    border-left: 3px solid #00a667;
                    border-radius: 8px;
                    background: #fafbfb;
                }

                .cs-message-label {
                    margin-bottom: 7px;
                    color: #9b9fa4;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .08em;
                }

                .cs-message-box p {
                    margin: 0;
                    color: #53595e;
                    font-size: 11px;
                    line-height: 1.65;
                    white-space: pre-wrap;
                }

                /* Response */

                .cs-response-box {
                    margin-top: 16px;
                    padding: 13px;
                    border-radius: 8px;
                    background: #f1faf6;
                    border: 1px solid #dcefe7;
                }

                .cs-response-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: #00a667;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .08em;
                }

                .cs-response-box p {
                    margin: 7px 0 0;
                    color: #4f5954;
                    font-size: 10px;
                    line-height: 1.6;
                    white-space: pre-wrap;
                }

                /* Payment */

                .payment-highlight {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 15px;
                    margin-bottom: 17px;
                    border: 1px solid #e4e1f1;
                    border-radius: 10px;
                    background: #faf9fd;
                }

                .payment-highlight-label {
                    color: #9993aa;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .08em;
                }

                .payment-highlight-value {
                    margin-top: 4px;
                    color: #29242f;
                    font-size: 21px;
                    font-weight: 700;
                    letter-spacing: -.025em;
                }

                .payment-status {
                    flex-shrink: 0;
                }

                .cs-copy-value {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    max-width: 100%;
                    padding: 0;
                    border: 0;
                    background: transparent;
                    color: #00a667;
                    cursor: pointer;
                }

                .cs-copy-value:hover {
                    text-decoration: underline;
                }

                .payment-meta {
                    margin-top: 17px;
                    padding-top: 15px;
                    border-top: 1px solid #eceeef;
                }

                .payment-meta-title {
                    margin-bottom: 8px;
                    color: #999ea3;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .08em;
                }

                .payment-meta pre {
                    overflow: auto;
                    max-height: 220px;
                    margin: 0;
                    padding: 12px;
                    border-radius: 8px;
                    background: #f7f8f9;
                    color: #596067;
                    font-family:
                        "SFMono-Regular",
                        Consolas,
                        monospace;
                    font-size: 9px;
                    line-height: 1.55;
                }

                .payment-empty {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    padding: 12px;
                    margin-top: 15px;
                    border: 1px dashed #dfe2e5;
                    border-radius: 8px;
                    color: #9a9fa4;
                }

                .payment-empty strong {
                    display: block;
                    color: #5d6368;
                    font-size: 10px;
                }

                .payment-empty p {
                    margin: 3px 0 0;
                    font-size: 9px;
                    line-height: 1.5;
                }

                /* Timeline */

                .cs-timeline {
                    position: relative;
                    padding-left: 7px;
                }

                .cs-timeline-item {
                    position: relative;
                    display: flex;
                    gap: 12px;
                    padding: 0 0 19px 16px;
                }

                .cs-timeline-item:not(:last-child)::before {
                    position: absolute;
                    top: 22px;
                    left: 10px;
                    width: 1px;
                    height: calc(100% - 8px);
                    background: #e4e7e9;
                    content: "";
                }

                .cs-timeline-dot {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 21px;
                    height: 21px;
                    flex: 0 0 21px;
                    margin-left: -17px;
                    border-radius: 50%;
                }

                .cs-timeline-dot.green {
                    background: #e5f7ef;
                    color: #00a667;
                }

                .cs-timeline-dot.blue {
                    background: #eaf3fb;
                    color: #4e7ca4;
                }

                .cs-timeline-dot.purple {
                    background: #f1edfb;
                    color: #7356a6;
                }

                .cs-timeline-item strong {
                    display: block;
                    color: #42474c;
                    font-size: 10px;
                    font-weight: 650;
                }

                .cs-timeline-item p {
                    margin: 3px 0 0;
                    color: #969ba0;
                    font-size: 9px;
                }

                /* Sidebar */

                .cs-side-label {
                    color: #999ea3;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .09em;
                }

                .cs-side-info {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    padding: 10px 0;
                    border-top: 1px solid #f0f1f2;
                }

                .cs-side-info span {
                    color: #969ba0;
                    font-size: 9px;
                }

                .cs-side-info strong {
                    color: #464b50;
                    font-size: 9px;
                    font-weight: 650;
                }

                .cs-side-payment {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    margin: 13px 0;
                    padding: 11px;
                    border-radius: 8px;
                    background: #f7f6fb;
                    color: #7356a6;
                }

                .cs-side-payment strong {
                    display: block;
                    color: #36313f;
                    font-size: 12px;
                }

                .cs-side-payment span {
                    display: block;
                    margin-top: 2px;
                    color: #92979c;
                    font-size: 9px;
                }

                .cs-side-reference {
                    padding-top: 11px;
                    border-top: 1px solid #f0f1f2;
                }

                .cs-side-reference > span {
                    display: block;
                    margin-bottom: 5px;
                    color: #969ba0;
                    font-size: 9px;
                }

                .cs-side-reference button {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 6px;
                    width: 100%;
                    padding: 7px 8px;
                    border: 1px solid #e6e8ea;
                    border-radius: 6px;
                    background: #fafbfb;
                    color: #52585e;
                    font-family: inherit;
                    font-size: 8px;
                    text-align: left;
                    cursor: pointer;
                }

                .cs-side-reference button:hover {
                    border-color: #b9dfd1;
                    color: #00a667;
                }

                .cs-accept-btn,
                .cs-secondary-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    width: 100%;
                    min-height: 38px;
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 650;
                    cursor: pointer;
                    text-decoration: none;
                    transition: .15s ease;
                }

                .cs-accept-btn {
                    border: 1px solid #00a667;
                    background: #00a667;
                    color: #fff;
                }

                .cs-accept-btn:hover {
                    border-color: #008f58;
                    background: #008f58;
                }

                .cs-accept-btn:disabled {
                    opacity: .55;
                    cursor: not-allowed;
                }

                .cs-secondary-btn {
                    margin-top: 8px;
                    border: 1px solid #e1e4e6;
                    background: #fff;
                    color: #596067;
                }

                .cs-secondary-btn:hover {
                    background: #f7f8f9;
                    color: #00a667;
                }

                .cs-accepted-box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    width: 100%;
                    min-height: 38px;
                    border: 1px solid #d8ede3;
                    border-radius: 8px;
                    background: #f1faf6;
                    color: #23824d;
                    font-size: 10px;
                    font-weight: 650;
                }

                /* Response form */

                .cs-response-card {
                    margin-top: 0;
                }

                .cs-form-group label {
                    display: block;
                    margin-bottom: 6px;
                    color: #454a4f;
                    font-size: 10px;
                    font-weight: 650;
                }

                .cs-textarea {
                    display: block;
                    width: 100%;
                    min-height: 125px;
                    padding: 11px 12px;
                    border: 1px solid #dfe2e5;
                    border-radius: 8px;
                    outline: none;
                    background: #fff;
                    color: #303438;
                    font-family: inherit;
                    font-size: 11px;
                    line-height: 1.55;
                    resize: vertical;
                    transition: .15s ease;
                }

                .cs-textarea::placeholder {
                    color: #a1a6ab;
                }

                .cs-textarea:focus {
                    border-color: #00a667;
                    box-shadow: 0 0 0 3px rgba(0,166,103,.08);
                }

                .cs-textarea.error {
                    border-color: #d75b5b;
                }

                .cs-form-error {
                    margin-top: 5px;
                    color: #c84f4f;
                    font-size: 9px;
                }

                .cs-form-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    margin-top: 12px;
                }

                .cs-form-footer > span {
                    color: #9a9fa4;
                    font-size: 9px;
                }

                .cs-send-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    min-height: 37px;
                    padding: 0 14px;
                    border: 1px solid #00a667;
                    border-radius: 8px;
                    background: #00a667;
                    color: #fff;
                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 650;
                    cursor: pointer;
                    white-space: nowrap;
                }

                .cs-send-btn:hover {
                    background: #008f58;
                    border-color: #008f58;
                }

                .cs-send-btn:disabled {
                    opacity: .55;
                    cursor: not-allowed;
                }

                /* Responsive */

                @media (max-width: 1100px) {
                    .cs-layout {
                        grid-template-columns: minmax(0, 1fr) 245px;
                    }

                    .cs-summary-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 850px) {
                    .cs-page {
                        padding: 20px;
                    }

                    .cs-layout {
                        grid-template-columns: 1fr;
                    }

                    aside {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 12px;
                    }

                    .cs-side-card {
                        margin-bottom: 0;
                    }

                    .cs-side-card:last-child {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 650px) {
                    .cs-page {
                        padding: 14px;
                    }

                    .cs-title-row {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .cs-title-row h1 {
                        font-size: 22px;
                    }

                    .cs-summary-grid {
                        grid-template-columns: 1fr;
                    }

                    .cs-card {
                        padding: 15px;
                    }

                    .cs-detail-grid {
                        grid-template-columns: 1fr;
                    }

                    .cs-detail-row {
                        min-height: 38px;
                    }

                    .cs-detail-value {
                        max-width: 60%;
                    }

                    aside {
                        display: block;
                    }

                    .cs-side-card {
                        margin-bottom: 12px;
                    }

                    .cs-side-card:last-child {
                        margin-bottom: 12px;
                    }

                    .payment-highlight {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .cs-form-footer {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .cs-send-btn {
                        width: 100%;
                    }
                }
            `})]})}Z.layout=s=>e.jsx(Y,{children:s,title:"Connection Request Details"});export{Z as default};
