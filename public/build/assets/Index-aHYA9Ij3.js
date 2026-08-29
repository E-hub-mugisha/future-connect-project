import{r as c,u as T,j as e,H as D,a as y,L as _}from"./app-BO26Fp_i.js";import{A as F}from"./AppLayout-Do3g3cSn.js";const z=[null,5,4,3,2,1];function M({testimonials:n,stats:t,filters:l}){const[r,o]=c.useState(!1),[d,p]=c.useState(null),[i,h]=c.useState(null),[m,x]=c.useState(null),[u,f]=c.useState(!1),[k,j]=c.useState(0),s=T({title:"",content:"",rating:5});function w(a){y.get(route("talent.testimonials.index"),a?{rating:a}:{},{preserveState:!0,preserveScroll:!0,replace:!0})}function N(){s.clearErrors(),s.reset(),p(null),o(!0)}function v(a){s.clearErrors(),s.setData({title:a.title||"",content:a.content||"",rating:a.rating||5}),p(a),o(!0)}function b(){o(!1),p(null),s.reset(),s.clearErrors()}function S(a){a.preventDefault(),d?s.put(route("talent.testimonials.update",d.id),{preserveScroll:!0,onSuccess:()=>b()}):s.post(route("talent.testimonials.store"),{preserveScroll:!0,onSuccess:()=>b()})}function C(){m&&(f(!0),y.delete(route("talent.testimonials.destroy",m.id),{preserveScroll:!0,onSuccess:()=>{x(null),f(!1)},onError:()=>f(!1)}))}return c.useEffect(()=>{function a(E){E.key==="Escape"&&(r?b():i?h(null):m&&x(null))}return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[r,i,m]),e.jsxs(F,{children:[e.jsx(D,{title:"Testimonials"}),e.jsxs("div",{"data-h-scope":"talent-testimonials",children:[e.jsx("style",{children:`
                    [data-h-scope="talent-testimonials"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        --h-star: #f5a623;
                        background-color: var(--h-bg);
                        min-height: 100%;
                    }
                    [data-h-scope="talent-testimonials"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                    }
                    [data-h-scope="talent-testimonials"] .h-hero {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-testimonials"] .h-hero .text-secondary {
                        color: rgba(255,255,255,0.65) !important;
                    }
                    [data-h-scope="talent-testimonials"] .h-bar-track {
                        background: rgba(255,255,255,0.1);
                        height: 6px;
                        border-radius: 999px;
                        overflow: hidden;
                    }
                    [data-h-scope="talent-testimonials"] .h-bar-fill {
                        background: var(--h-accent);
                        height: 100%;
                        border-radius: 999px;
                    }
                    [data-h-scope="talent-testimonials"] .h-chip {
                        border: none;
                        background: rgba(255,255,255,0.08);
                        color: rgba(255,255,255,0.75);
                        font-weight: 600;
                        padding: 6px 14px;
                        border-radius: 999px;
                        font-size: 13px;
                        transition: all 0.15s ease;
                        white-space: nowrap;
                    }
                    [data-h-scope="talent-testimonials"] .h-chip.active {
                        background: var(--h-accent);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-testimonials"] .h-chip:not(.active):hover {
                        background: rgba(255,255,255,0.14);
                    }
                    [data-h-scope="talent-testimonials"] .h-tile {
                        border: 1px solid rgba(6,15,17,0.06);
                        transition: box-shadow 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
                    }
                    [data-h-scope="talent-testimonials"] .h-tile:hover {
                        border-color: rgba(72, 213, 151, 0.4);
                        box-shadow: 0 10px 24px rgba(6,15,17,0.07);
                        transform: translateY(-2px);
                    }
                    [data-h-scope="talent-testimonials"] .h-quote-mark {
                        color: rgba(72, 213, 151, 0.35);
                        font-size: 2.75rem;
                        line-height: 1;
                        font-family: Georgia, serif;
                    }
                    [data-h-scope="talent-testimonials"] .h-pagination a,
                    [data-h-scope="talent-testimonials"] .h-pagination span {
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
                    [data-h-scope="talent-testimonials"] .h-pagination a:hover {
                        background: rgba(6,15,17,0.05);
                    }
                    [data-h-scope="talent-testimonials"] .h-pagination .active span {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-testimonials"] .h-pagination .disabled span {
                        opacity: 0.35;
                    }
                    [data-h-scope="talent-testimonials"] .h-action-btn {
                        width: 30px;
                        height: 30px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 8px;
                        border: none;
                        background: rgba(6,15,17,0.04);
                        color: rgba(6,15,17,0.55);
                        transition: all 0.15s ease;
                    }
                    [data-h-scope="talent-testimonials"] .h-action-btn:hover {
                        background: rgba(6,15,17,0.08);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-testimonials"] .h-action-btn.h-danger:hover {
                        background: rgba(220, 53, 69, 0.1);
                        color: #dc3545;
                    }
                `}),e.jsxs("div",{className:"container-fluid px-4 py-4",children:[e.jsxs("div",{className:"mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"fw-bold mb-1",children:"Testimonials"}),e.jsx("p",{className:"text-secondary mb-0 small",children:"What people are saying about your work"})]}),e.jsxs("button",{type:"button",className:"btn d-flex align-items-center gap-2",style:{background:"var(--h-ink)",color:"#fff",borderRadius:10,padding:"9px 18px",fontWeight:600,fontSize:14},onClick:N,children:[e.jsx("i",{className:"fas fa-plus"}),"Add Testimonial"]})]}),e.jsx("div",{className:"h-hero card border-0 rounded-4 mb-4",children:e.jsx("div",{className:"card-body p-4",children:e.jsxs("div",{className:"row align-items-center g-4",children:[e.jsxs("div",{className:"col-md-3 text-center text-md-start",children:[e.jsx("div",{className:"display-5 fw-bold mb-1",children:t.average||"—"}),e.jsx("div",{className:"mb-2",children:e.jsx(L,{rating:Math.round(t.average)})}),e.jsxs("div",{className:"small text-secondary",children:[t.total," testimonial",t.total===1?"":"s"]})]}),e.jsx("div",{className:"col-md-6",children:[5,4,3,2,1].map(a=>e.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[e.jsxs("span",{className:"small",style:{width:44},children:[a," star"]}),e.jsx("div",{className:"h-bar-track flex-grow-1",children:e.jsx("div",{className:"h-bar-fill",style:{width:t.total?`${t.breakdown[a]/t.total*100}%`:"0%"}})}),e.jsx("span",{className:"small text-secondary text-end",style:{width:24},children:t.breakdown[a]})]},a))}),e.jsx("div",{className:"col-md-3",children:e.jsx("div",{className:"d-flex flex-md-column flex-wrap gap-2 justify-content-md-end",children:z.map(a=>e.jsx("button",{type:"button",className:`h-chip ${l.rating===a?"active":""}`,onClick:()=>w(a),children:a?e.jsxs(e.Fragment,{children:[a," ",e.jsx("i",{className:"fas fa-star fa-xs"})]}):"All ratings"},a??"all"))})})]})})}),n.data.length===0?e.jsx("div",{className:"card h-card border-0 shadow-sm rounded-4",children:e.jsxs("div",{className:"card-body text-center py-5 text-secondary",children:[e.jsx("i",{className:"fas fa-quote-right fs-1 mb-3 d-block opacity-25"}),e.jsx("p",{className:"mb-3",children:l.rating?`No ${l.rating}-star testimonials yet.`:"No testimonials yet."}),e.jsxs("button",{type:"button",className:"btn btn-success btn-sm",onClick:N,children:[e.jsx("i",{className:"fas fa-plus me-2"}),"Add your first testimonial"]})]})}):e.jsx("div",{className:"row g-3",children:n.data.map(a=>e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsx(R,{testimonial:a,onView:()=>h(a),onEdit:()=>v(a),onDelete:()=>x(a)})},a.id))}),n.links&&n.data.length>0&&e.jsx(A,{links:n.links})]}),r&&e.jsx(g,{onClose:b,title:d?"Edit Testimonial":"Add Testimonial",size:"lg",children:e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold small",children:"Title"}),e.jsx("input",{type:"text",className:`form-control ${s.errors.title?"is-invalid":""}`,value:s.data.title,onChange:a=>s.setData("title",a.target.value),placeholder:"e.g. Outstanding work!",autoFocus:!0}),s.errors.title&&e.jsx("div",{className:"invalid-feedback d-block",children:s.errors.title})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label fw-semibold small",children:"Content"}),e.jsx("textarea",{className:`form-control ${s.errors.content?"is-invalid":""}`,rows:"4",value:s.data.content,onChange:a=>s.setData("content",a.target.value),placeholder:"Share the testimonial content...",style:{resize:"vertical"}}),s.errors.content&&e.jsx("div",{className:"invalid-feedback d-block",children:s.errors.content})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label fw-semibold small d-block mb-2",children:"Rating"}),e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[[1,2,3,4,5].map(a=>e.jsx("button",{type:"button",onClick:()=>s.setData("rating",a),onMouseEnter:()=>j(a),onMouseLeave:()=>j(0),className:"btn btn-link p-0 border-0",style:{lineHeight:1,textDecoration:"none"},children:e.jsx("i",{className:"fas fa-star",style:{fontSize:26,color:a<=(k||s.data.rating)?"#f5a623":"rgba(6,15,17,0.15)"}})},a)),e.jsxs("span",{className:"small text-secondary ms-2",children:[s.data.rating," / 5"]})]}),s.errors.rating&&e.jsx("div",{className:"text-danger small mt-1",children:s.errors.rating})]}),e.jsxs("div",{className:"d-flex justify-content-end gap-2 pt-3 border-top",children:[e.jsx("button",{type:"button",className:"btn btn-light",onClick:b,disabled:s.processing,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn text-white",style:{background:"var(--h-accent-dark)"},disabled:s.processing,children:s.processing?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Saving..."]}):d?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-check me-2"}),"Update Testimonial"]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-plus me-2"}),"Save Testimonial"]})})]})]})}),i&&e.jsxs(g,{onClose:()=>h(null),title:"Testimonial Details",children:[e.jsxs("div",{className:"mb-3 d-flex align-items-center justify-content-between",children:[e.jsx("span",{className:"small text-secondary fw-semibold",children:"Rating"}),e.jsx("span",{children:[1,2,3,4,5].map(a=>e.jsx("i",{className:"fas fa-star me-1",style:{color:a<=i.rating?"#f5a623":"rgba(6,15,17,0.15)"}},a))})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("span",{className:"small text-secondary fw-semibold d-block mb-1",children:"Title"}),e.jsx("h6",{className:"fw-bold mb-0",style:{fontSize:18},children:i.title})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("span",{className:"small text-secondary fw-semibold d-block mb-1",children:"Content"}),e.jsx("p",{className:"text-secondary mb-0",style:{lineHeight:1.7,whiteSpace:"pre-wrap"},children:i.content})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"small text-secondary fw-semibold d-block mb-1",children:"Date"}),e.jsx("span",{className:"small text-secondary",children:i.created_at_human??i.created_at})]}),e.jsxs("div",{className:"d-flex justify-content-end gap-2 pt-3 border-top mt-3",children:[e.jsx("button",{type:"button",className:"btn btn-light",onClick:()=>h(null),children:"Close"}),e.jsxs("button",{type:"button",className:"btn text-white",style:{background:"var(--h-accent-dark)"},onClick:()=>{const a=i;h(null),v(a)},children:[e.jsx("i",{className:"fas fa-pen me-2"}),"Edit"]})]})]}),m&&e.jsxs(g,{onClose:()=>x(null),title:"Delete Testimonial",size:"sm",children:[e.jsxs("div",{className:"text-center py-2",children:[e.jsx("div",{className:"d-inline-flex align-items-center justify-content-center rounded-circle mb-3",style:{width:64,height:64,background:"rgba(220, 53, 69, 0.1)"},children:e.jsx("i",{className:"fas fa-trash text-danger",style:{fontSize:24}})}),e.jsx("p",{className:"mb-1 fw-semibold",children:"Are you sure?"}),e.jsxs("p",{className:"text-secondary small mb-0",children:['This will permanently delete "',m.title,'". This action cannot be undone.']})]}),e.jsxs("div",{className:"d-flex justify-content-center gap-2 pt-3 border-top mt-3",children:[e.jsx("button",{type:"button",className:"btn btn-light",onClick:()=>x(null),disabled:u,children:"Cancel"}),e.jsx("button",{type:"button",className:"btn btn-danger",onClick:C,disabled:u,children:u?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}),"Deleting..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-trash me-2"}),"Delete"]})})]})]})]})]})}function g({children:n,onClose:t,title:l,size:r=""}){const o=r==="lg"?"modal-lg":r==="sm"?"modal-sm":"";return e.jsx("div",{className:"modal show d-block",tabIndex:"-1",style:{background:"rgba(6,15,17,0.55)"},onClick:t,children:e.jsx("div",{className:`modal-dialog modal-dialog-centered modal-dialog-scrollable ${o}`,onClick:d=>d.stopPropagation(),children:e.jsxs("div",{className:"modal-content border-0 shadow",style:{borderRadius:16},children:[e.jsxs("div",{className:"modal-header border-0 pb-0",children:[e.jsx("h5",{className:"modal-title fw-bold",children:l}),e.jsx("button",{type:"button",className:"btn-close",onClick:t})]}),e.jsx("div",{className:"modal-body pt-2",children:n})]})})})}function L({rating:n}){return e.jsx("span",{children:[1,2,3,4,5].map(t=>e.jsx("i",{className:"fas fa-star me-1",style:{color:t<=n?"#f5a623":"rgba(255,255,255,0.2)"}},t))})}function R({testimonial:n,onView:t,onEdit:l,onDelete:r}){return e.jsx("div",{className:"h-tile card border-0 rounded-4 h-100",children:e.jsxs("div",{className:"card-body p-4 d-flex flex-column",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-1",children:[e.jsx("span",{className:"h-quote-mark",children:"“"}),e.jsxs("div",{className:"d-flex align-items-center gap-1",children:[e.jsx("button",{type:"button",className:"h-action-btn",onClick:t,title:"View",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("button",{type:"button",className:"h-action-btn",onClick:l,title:"Edit",children:e.jsx("i",{className:"fas fa-pen"})}),e.jsx("button",{type:"button",className:"h-action-btn h-danger",onClick:r,title:"Delete",children:e.jsx("i",{className:"fas fa-trash"})})]})]}),e.jsx("h6",{className:"fw-bold mb-2",children:n.title}),e.jsx("p",{className:"text-secondary small flex-grow-1",style:{lineHeight:1.7,display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical",overflow:"hidden"},children:n.content}),e.jsxs("div",{className:"d-flex align-items-center justify-content-between mt-2 pt-3 border-top",children:[e.jsx("span",{children:[1,2,3,4,5].map(o=>e.jsx("i",{className:"fas fa-star me-1",style:{color:o<=n.rating?"#f5a623":"rgba(6,15,17,0.15)"}},o))}),e.jsx("span",{className:"small text-secondary",children:n.created_at_human??n.created_at})]})]})})}function A({links:n}){return e.jsx("div",{className:"h-pagination d-flex flex-wrap gap-1 justify-content-center mt-4",children:n.map((t,l)=>t.url?e.jsx(_,{href:t.url,preserveScroll:!0,className:t.active?"active":"",dangerouslySetInnerHTML:{__html:t.label}},l):e.jsx("span",{className:"disabled",dangerouslySetInnerHTML:{__html:t.label}},l))})}export{M as default};
