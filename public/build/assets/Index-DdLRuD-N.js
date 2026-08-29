import{r as b,j as e,H as x,a as u,L as g,u as f}from"./app-BO26Fp_i.js";import{A as j}from"./AppLayout-Do3g3cSn.js";const v=[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"accepted",label:"Accepted"},{key:"declined",label:"Declined"}];function R({connections:a,counts:s,filters:t,flash:l}){const[i,d]=b.useState(null);function c(n){u.get(route("talent.connections.index"),n==="all"?{}:{status:n},{preserveState:!0,preserveScroll:!0,replace:!0})}return e.jsxs(j,{children:[e.jsx(x,{title:"Connection Requests"}),e.jsxs("div",{"data-h-scope":"talent-connections",children:[e.jsx("style",{children:`
                    [data-h-scope="talent-connections"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        --h-warn: #f5a623;
                        --h-danger: #e5484d;
                        background-color: var(--h-bg);
                        min-height: 100%;
                    }
                    [data-h-scope="talent-connections"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                    }
                    [data-h-scope="talent-connections"] .h-stat {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                        transition: transform 0.15s ease, box-shadow 0.15s ease;
                    }
                    [data-h-scope="talent-connections"] .h-stat:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 20px rgba(6,15,17,0.06);
                    }
                    [data-h-scope="talent-connections"] .h-stat-icon {
                        width: 44px;
                        height: 44px;
                    }
                    [data-h-scope="talent-connections"] .h-tab {
                        border: none;
                        background: transparent;
                        color: rgba(6,15,17,0.55);
                        font-weight: 600;
                        padding: 8px 16px;
                        border-radius: 999px;
                        transition: all 0.15s ease;
                        white-space: nowrap;
                    }
                    [data-h-scope="talent-connections"] .h-tab.active {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-connections"] .h-tab:not(.active):hover {
                        background: rgba(6,15,17,0.05);
                    }
                    [data-h-scope="talent-connections"] .h-row {
                        border: 1px solid rgba(6,15,17,0.06);
                        transition: box-shadow 0.15s ease, border-color 0.15s ease;
                    }
                    [data-h-scope="talent-connections"] .h-row:hover {
                        border-color: rgba(72, 213, 151, 0.4);
                        box-shadow: 0 4px 14px rgba(6,15,17,0.05);
                    }
                    [data-h-scope="talent-connections"] .h-avatar {
                        width: 44px;
                        height: 44px;
                        background: rgba(72, 213, 151, 0.14);
                        color: var(--h-accent-dark);
                        font-weight: 700;
                        flex-shrink: 0;
                    }
                    [data-h-scope="talent-connections"] .h-badge-pending {
                        background: rgba(245, 166, 35, 0.14);
                        color: #b5750f;
                    }
                    [data-h-scope="talent-connections"] .h-badge-accepted {
                        background: rgba(72, 213, 151, 0.14);
                        color: var(--h-accent-dark);
                    }
                    [data-h-scope="talent-connections"] .h-badge-declined {
                        background: rgba(229, 72, 77, 0.12);
                        color: var(--h-danger);
                    }
                    [data-h-scope="talent-connections"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background 0.15s ease;
                    }
                    [data-h-scope="talent-connections"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-connections"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid rgba(6,15,17,0.15);
                    }
                    [data-h-scope="talent-connections"] .h-btn-ghost:hover {
                        background: rgba(6,15,17,0.04);
                    }
                    [data-h-scope="talent-connections"] .h-alert-success {
                        background: rgba(72, 213, 151, 0.15);
                        border: 1px solid rgba(72, 213, 151, 0.4);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-connections"] .form-control:focus,
                    [data-h-scope="talent-connections"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72, 213, 151, 0.25);
                    }
                    [data-h-scope="talent-connections"] .h-pagination a,
                    [data-h-scope="talent-connections"] .h-pagination span {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 34px;
                        height: 34px;
                        padding: 0 8px;
                        border-radius: 8px;
                        color: var(--h-ink);
                        font-size: 14px;
                        text-decoration: none;
                    }
                    [data-h-scope="talent-connections"] .h-pagination a:hover {
                        background: rgba(6,15,17,0.05);
                    }
                    [data-h-scope="talent-connections"] .h-pagination .active span {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-connections"] .h-pagination .disabled span {
                        opacity: 0.35;
                    }
                `}),e.jsxs("div",{className:"container-fluid px-4 py-4",children:[(l==null?void 0:l.success)&&e.jsxs("div",{className:"alert h-alert-success rounded-3 border-0 mb-4",children:[e.jsx("i",{className:"fas fa-circle-check me-2"}),l.success]}),e.jsx("div",{className:"d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4",children:e.jsxs("div",{children:[e.jsx("h4",{className:"fw-bold mb-1",children:"Connection Requests"}),e.jsx("p",{className:"text-secondary mb-0 small",children:"People who want to connect with you"})]})}),e.jsxs("div",{className:"row g-3 mb-4",children:[e.jsx(o,{icon:"fa-users",label:"Total Requests",value:s.all,color:"#48d597"}),e.jsx(o,{icon:"fa-hourglass-half",label:"Pending",value:s.pending,color:"#f5a623"}),e.jsx(o,{icon:"fa-circle-check",label:"Accepted",value:s.accepted,color:"#48d597"}),e.jsx(o,{icon:"fa-circle-xmark",label:"Declined",value:s.declined,color:"#e5484d"})]}),e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("div",{className:"d-flex gap-2 flex-wrap mb-4",children:v.map(n=>e.jsxs("button",{type:"button",className:`h-tab ${t.status===n.key?"active":""}`,onClick:()=>c(n.key),children:[n.label,n.key!=="all"&&e.jsx("span",{className:"ms-2 opacity-75",children:s[n.key]??0})]},n.key))}),a.data.length===0?e.jsx(k,{}):e.jsx("div",{className:"d-flex flex-column gap-3",children:a.data.map(n=>e.jsx(N,{connection:n,onRespond:()=>d(n)},n.id))}),a.links&&a.data.length>0&&e.jsx(y,{links:a.links})]})})]}),e.jsx(w,{connection:i,onClose:()=>d(null)})]})]})}function o({icon:a,label:s,value:t,color:l}){return e.jsx("div",{className:"col-6 col-lg-3",children:e.jsxs("div",{className:"h-stat rounded-4 p-3 d-flex align-items-center gap-3",children:[e.jsx("div",{className:"h-stat-icon rounded-3 d-flex align-items-center justify-content-center",style:{background:`${l}22`,color:l},children:e.jsx("i",{className:`fas ${a}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"fw-bold fs-4 lh-1",children:t}),e.jsx("div",{className:"small text-secondary",children:s})]})]})})}function N({connection:a,onRespond:s}){const t=(a.name||"?").split(" ").map(l=>l[0]).slice(0,2).join("").toUpperCase();return e.jsxs("div",{className:"h-row rounded-4 p-3 d-flex flex-wrap align-items-center gap-3",children:[e.jsx("div",{className:"h-avatar rounded-circle d-flex align-items-center justify-content-center",children:t}),e.jsxs("div",{className:"flex-grow-1",style:{minWidth:200},children:[e.jsx("div",{className:"fw-semibold",children:a.name||"N/A"}),e.jsx("div",{className:"small text-secondary",children:a.email||"—"}),a.message&&e.jsxs("div",{className:"small text-secondary mt-1",style:{maxWidth:480},children:["“",a.message,"”"]})]}),e.jsx("div",{className:"text-secondary small",style:{minWidth:140},children:a.created_at_human??a.created_at}),e.jsx(p,{status:a.status}),a.status==="pending"?e.jsx("button",{type:"button",className:"btn h-btn-accent btn-sm rounded-pill px-3",onClick:s,children:"Respond"}):e.jsx("button",{type:"button",className:"btn h-btn-ghost btn-sm rounded-pill px-3",onClick:s,children:"View"})]})}function p({status:a}){const s={pending:{cls:"h-badge-pending",label:"Pending"},accepted:{cls:"h-badge-accepted",label:"Accepted"},declined:{cls:"h-badge-declined",label:"Declined"}},t=s[a]??s.pending;return e.jsx("span",{className:`badge ${t.cls} px-3 py-2 rounded-pill fw-semibold`,children:t.label})}function k(){return e.jsxs("div",{className:"text-center py-5 text-secondary",children:[e.jsx("i",{className:"fas fa-inbox fs-1 mb-3 d-block opacity-25"}),e.jsx("p",{className:"mb-0",children:"No connection requests found."})]})}function y({links:a}){return e.jsx("div",{className:"h-pagination d-flex flex-wrap gap-1 justify-content-center mt-4",children:a.map((s,t)=>s.url?e.jsx(g,{href:s.url,preserveScroll:!0,className:s.active?"active":"",dangerouslySetInnerHTML:{__html:s.label}},t):e.jsx("span",{className:"disabled",dangerouslySetInnerHTML:{__html:s.label}},t))})}function w({connection:a,onClose:s}){const{data:t,setData:l,patch:i,processing:d,errors:c,reset:n}=f({status:"accepted",response:""});if(!a)return null;const h=a.status!=="pending";function m(r){r.preventDefault(),i(route("talent.connections.respond",a.id),{preserveScroll:!0,onSuccess:()=>{n(),s()}})}return e.jsxs("div",{"data-h-scope":"talent-connections",children:[e.jsx("div",{className:"modal fade show d-block",tabIndex:"-1",role:"dialog",onClick:s,children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",role:"document",onClick:r=>r.stopPropagation(),children:e.jsxs("div",{className:"modal-content rounded-4 border-0 shadow",children:[e.jsxs("div",{className:"modal-header border-0 pb-0",children:[e.jsx("h5",{className:"modal-title fw-bold",style:{color:"#060f11"},children:h?"Connection Request":"Respond to Request"}),e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:s})]}),e.jsxs("div",{className:"modal-body p-4",children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[e.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center fw-bold",style:{width:48,height:48,background:"rgba(72,213,151,0.14)",color:"#2fb87c"},children:(a.name||"?").slice(0,2).toUpperCase()}),e.jsxs("div",{children:[e.jsx("div",{className:"fw-semibold",children:a.name}),e.jsx("div",{className:"small text-secondary",children:a.email})]})]}),a.message&&e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"small fw-semibold text-uppercase text-secondary d-block mb-1",children:"Message"}),e.jsx("p",{className:"mb-0",children:a.message})]}),h?e.jsxs("div",{children:[e.jsx(p,{status:a.status}),a.response&&e.jsx("p",{className:"mt-3 mb-0",children:a.response})]}):e.jsxs("form",{onSubmit:m,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Decision"}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsxs("button",{type:"button",className:`btn rounded-pill px-4 flex-fill ${t.status==="accepted"?"h-btn-accent":"h-btn-ghost"}`,onClick:()=>l("status","accepted"),children:[e.jsx("i",{className:"fas fa-check me-2"}),"Accept"]}),e.jsxs("button",{type:"button",className:`btn rounded-pill px-4 flex-fill ${t.status==="declined"?"btn-danger text-white":"h-btn-ghost"}`,onClick:()=>l("status","declined"),children:[e.jsx("i",{className:"fas fa-xmark me-2"}),"Decline"]})]}),c.status&&e.jsx("div",{className:"text-danger small mt-1",children:c.status})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label small fw-semibold",children:"Reply (optional)"}),e.jsx("textarea",{className:`form-control rounded-3 ${c.response?"is-invalid":""}`,rows:3,value:t.response,onChange:r=>l("response",r.target.value),placeholder:"Add a short note back to them..."}),c.response&&e.jsx("div",{className:"invalid-feedback",children:c.response})]}),e.jsxs("div",{className:"d-flex justify-content-end gap-2",children:[e.jsx("button",{type:"button",className:"btn h-btn-ghost rounded-pill px-4",onClick:s,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn h-btn-accent rounded-pill px-4",disabled:d,children:d?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Sending..."]}):"Send Response"})]})]})]})]})})}),e.jsx("div",{className:"modal-backdrop fade show",onClick:s})]})}export{R as default};
