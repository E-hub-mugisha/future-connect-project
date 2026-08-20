import{r as b,u as h,j as e,H as k,a as w}from"./app-CgjB0zLb.js";import{A as C}from"./AppLayout-BhRRfzUA.js";function z({testimonials:i,talents:o}){const[s,p]=b.useState(!1),[m,x]=b.useState(null),a=h({title:"",talent_id:"",content:"",rating:"5"}),r=h({title:"",talent_id:"",content:"",rating:"5"}),g=t=>{r.setData({title:t.title??"",talent_id:t.talent_id??"",content:t.content??"",rating:t.rating?String(t.rating):"5"}),x(t.id)},d=()=>{x(null),r.clearErrors(),r.reset()},c=()=>{p(!1),a.clearErrors(),a.reset()},f=t=>{t.preventDefault(),a.post(route("admin.testimonials.store"),{preserveScroll:!0,onSuccess:()=>c()})},v=(t,l)=>{t.preventDefault(),r.put(route("admin.testimonials.update",l),{preserveScroll:!0,onSuccess:()=>d()})},j=t=>{confirm("Delete this testimonial?")&&w.delete(route("admin.testimonials.destroy",t),{preserveScroll:!0})},y=t=>new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),N=({rating:t})=>e.jsx("span",{className:"star-row","aria-label":`${t??0} out of 5 stars`,children:[1,2,3,4,5].map(l=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:l<=(t??0)?"#f5a623":"#e2e5ea",children:e.jsx("path",{d:"M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z"})},l))});return e.jsxs(C,{children:[e.jsx(k,{title:"Testimonials"}),e.jsxs("div",{className:"testi-page",children:[e.jsxs("div",{className:"testi-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"testi-title",children:"Testimonials"}),e.jsx("p",{className:"testi-subtitle",children:"Manage client feedback shown across the platform"})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>p(!0),children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 5v14M5 12h14",strokeLinecap:"round"})}),"Add Testimonial"]})]}),e.jsx("div",{className:"testi-card",children:i.data&&i.data.length===0?e.jsxs("div",{className:"testi-empty",children:[e.jsx("p",{children:"No testimonials yet."}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>p(!0),children:"Add your first testimonial"})]}):e.jsx("div",{className:"testi-table-wrap",children:e.jsxs("table",{className:"testi-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Talent"}),e.jsx("th",{children:"Rating"}),e.jsx("th",{children:"Date"}),e.jsx("th",{className:"text-right",children:"Actions"})]})}),e.jsx("tbody",{children:(i.data??i).map(t=>{var l;return e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"testi-title-cell",children:t.title}),e.jsx("div",{className:"testi-content-preview",children:t.content})]}),e.jsx("td",{children:((l=t.talent)==null?void 0:l.name)??e.jsx("span",{className:"muted",children:"N/A"})}),e.jsx("td",{children:e.jsx(N,{rating:t.rating})}),e.jsx("td",{className:"muted",children:y(t.created_at)}),e.jsx("td",{className:"text-right",children:e.jsxs("div",{className:"testi-actions",children:[e.jsx("button",{type:"button",className:"btn btn-outline btn-sm",onClick:()=>g(t),children:"Edit"}),e.jsx("button",{type:"button",className:"btn btn-danger-ghost btn-sm",onClick:()=>j(t.id),children:"Delete"})]})})]},t.id)})})]})})})]}),s&&e.jsx("div",{className:"modal-backdrop",onClick:c,children:e.jsx("div",{className:"modal-panel",onClick:t=>t.stopPropagation(),children:e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h2",{children:"Add Testimonial"}),e.jsx("button",{type:"button",className:"modal-close",onClick:c,"aria-label":"Close",children:"×"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx(n,{label:"Title",error:a.errors.title,children:e.jsx("input",{className:"form-input",value:a.data.title,onChange:t=>a.setData("title",t.target.value),required:!0})}),e.jsx(n,{label:"Talent",error:a.errors.talent_id,children:e.jsxs("select",{className:"form-input",value:a.data.talent_id,onChange:t=>a.setData("talent_id",t.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select Talent"}),o.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]})}),e.jsx(n,{label:"Content",error:a.errors.content,children:e.jsx("textarea",{className:"form-input",rows:4,value:a.data.content,onChange:t=>a.setData("content",t.target.value),placeholder:"Your testimonial content here",required:!0})}),e.jsx(n,{label:"Rating",error:a.errors.rating,children:e.jsx(u,{value:a.data.rating,onChange:t=>a.setData("rating",t)})})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:a.processing,children:a.processing?"Saving…":"Save"})]})]})})}),m&&e.jsx("div",{className:"modal-backdrop",onClick:d,children:e.jsx("div",{className:"modal-panel",onClick:t=>t.stopPropagation(),children:e.jsxs("form",{onSubmit:t=>v(t,m),children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h2",{children:"Edit Testimonial"}),e.jsx("button",{type:"button",className:"modal-close",onClick:d,"aria-label":"Close",children:"×"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx(n,{label:"Title",error:r.errors.title,children:e.jsx("input",{className:"form-input",value:r.data.title,onChange:t=>r.setData("title",t.target.value),required:!0})}),e.jsx(n,{label:"Talent",error:r.errors.talent_id,children:e.jsxs("select",{className:"form-input",value:r.data.talent_id,onChange:t=>r.setData("talent_id",t.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select Talent"}),o.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]})}),e.jsx(n,{label:"Content",error:r.errors.content,children:e.jsx("textarea",{className:"form-input",rows:4,value:r.data.content,onChange:t=>r.setData("content",t.target.value),required:!0})}),e.jsx(n,{label:"Rating",error:r.errors.rating,children:e.jsx(u,{value:r.data.rating,onChange:t=>r.setData("rating",t)})})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:d,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:r.processing,children:r.processing?"Saving…":"Save"})]})]})})}),e.jsx("style",{children:`
                :root {
                    --testi-primary: #4f46e5;
                    --testi-primary-hover: #4338ca;
                    --testi-danger: #e11d48;
                    --testi-text: #1f2430;
                    --testi-muted: #7c8397;
                    --testi-border: #e6e8ef;
                    --testi-bg-card: #ffffff;
                    --testi-bg-page: #f6f7fb;
                    --testi-radius: 12px;
                }

                .testi-page {
                    padding: 28px;
                    background: var(--testi-bg-page);
                    min-height: 100%;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    color: var(--testi-text);
                }

                .testi-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 24px;
                    flex-wrap: wrap;
                    gap: 12px;
                }

                .testi-title {
                    font-size: 24px;
                    font-weight: 700;
                    margin: 0;
                }

                .testi-subtitle {
                    margin: 4px 0 0;
                    color: var(--testi-muted);
                    font-size: 14px;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: none;
                    border-radius: 8px;
                    padding: 10px 16px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.15s ease, transform 0.05s ease;
                }
                .btn:active { transform: translateY(1px); }
                .btn-sm { padding: 6px 12px; font-size: 13px; }

                .btn-primary { background: var(--testi-primary); color: #fff; }
                .btn-primary:hover { background: var(--testi-primary-hover); }
                .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

                .btn-secondary { background: #eef0f5; color: var(--testi-text); }
                .btn-secondary:hover { background: #e3e6ee; }

                .btn-outline {
                    background: #fff;
                    color: var(--testi-primary);
                    border: 1px solid var(--testi-border);
                }
                .btn-outline:hover { background: #f1f1fd; }

                .btn-danger-ghost {
                    background: transparent;
                    color: var(--testi-danger);
                }
                .btn-danger-ghost:hover { background: #fdeaee; }

                .testi-card {
                    background: var(--testi-bg-card);
                    border: 1px solid var(--testi-border);
                    border-radius: var(--testi-radius);
                    overflow: hidden;
                    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
                }

                .testi-table-wrap { overflow-x: auto; }

                .testi-table {
                    width: 100%;
                    border-collapse: collapse;
                    min-width: 720px;
                }

                .testi-table thead th {
                    text-align: left;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    color: var(--testi-muted);
                    padding: 14px 20px;
                    border-bottom: 1px solid var(--testi-border);
                    background: #fafbfd;
                }

                .testi-table tbody td {
                    padding: 16px 20px;
                    border-bottom: 1px solid var(--testi-border);
                    font-size: 14px;
                    vertical-align: top;
                }

                .testi-table tbody tr:last-child td { border-bottom: none; }
                .testi-table tbody tr:hover { background: #fafbff; }

                .testi-title-cell { font-weight: 600; margin-bottom: 4px; }

                .testi-content-preview {
                    color: var(--testi-muted);
                    font-size: 13px;
                    max-width: 320px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .muted { color: var(--testi-muted); }
                .text-right { text-align: right; }

                .testi-actions {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                .star-row { display: inline-flex; gap: 2px; align-items: center; }

                .testi-empty {
                    padding: 60px 20px;
                    text-align: center;
                    color: var(--testi-muted);
                }
                .testi-empty p { margin-bottom: 16px; }

                /* Modal */
                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 18, 30, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    padding: 16px;
                }

                .modal-panel {
                    background: #fff;
                    border-radius: var(--testi-radius);
                    width: 100%;
                    max-width: 480px;
                    max-height: 90vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 40px rgba(16, 24, 40, 0.2);
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .modal-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px 24px;
                    border-bottom: 1px solid var(--testi-border);
                }

                .modal-header h2 {
                    font-size: 17px;
                    margin: 0;
                    font-weight: 700;
                }

                .modal-close {
                    background: none;
                    border: none;
                    font-size: 22px;
                    line-height: 1;
                    color: var(--testi-muted);
                    cursor: pointer;
                }
                .modal-close:hover { color: var(--testi-text); }

                .modal-body { padding: 20px 24px; }
                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    padding: 16px 24px;
                    border-top: 1px solid var(--testi-border);
                }

                .form-field { margin-bottom: 16px; }
                .form-field:last-child { margin-bottom: 0; }

                .form-label {
                    display: block;
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 6px;
                    color: var(--testi-text);
                }

                .form-input {
                    width: 100%;
                    padding: 10px 12px;
                    font-size: 14px;
                    border: 1px solid var(--testi-border);
                    border-radius: 8px;
                    background: #fff;
                    color: var(--testi-text);
                    font-family: inherit;
                }
                .form-input:focus {
                    outline: none;
                    border-color: var(--testi-primary);
                    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
                }

                textarea.form-input { resize: vertical; }

                .form-error {
                    color: var(--testi-danger);
                    font-size: 12px;
                    margin-top: 4px;
                }

                .rating-picker { display: flex; gap: 6px; }
                .rating-btn {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    border: 1px solid var(--testi-border);
                    background: #fff;
                    cursor: pointer;
                    font-weight: 600;
                    color: var(--testi-muted);
                    transition: all 0.15s ease;
                }
                .rating-btn.active {
                    background: var(--testi-primary);
                    border-color: var(--testi-primary);
                    color: #fff;
                }
            `})]})}function n({label:i,error:o,children:s}){return e.jsxs("div",{className:"form-field",children:[e.jsx("label",{className:"form-label",children:i}),s,o&&e.jsx("div",{className:"form-error",children:o})]})}function u({value:i,onChange:o}){return e.jsx("div",{className:"rating-picker",children:[1,2,3,4,5].map(s=>e.jsx("button",{type:"button",className:`rating-btn ${String(s)===String(i)?"active":""}`,onClick:()=>o(String(s)),children:s},s))})}export{z as default};
