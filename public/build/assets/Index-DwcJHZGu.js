import{r as u,u as k,j as e,H as D,a as F,c as L}from"./app-B2SIh33N.js";import{A as I}from"./AppLayout-CkTPU_ZW.js";function o({name:i,size:t=17,strokeWidth:n=1.8}){const s={width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},m={plus:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 5v14"}),e.jsx("path",{d:"M5 12h14"})]}),edit:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"})]}),trash:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M8 6V4h8v2"}),e.jsx("path",{d:"M19 6l-1 14H6L5 6"}),e.jsx("path",{d:"M10 11v5"}),e.jsx("path",{d:"M14 11v5"})]}),close:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M6 6l12 12"}),e.jsx("path",{d:"M18 6 6 18"})]}),quote:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M9 10H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M5 10c0-4 1.5-6 4-7"}),e.jsx("path",{d:"M19 10h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M15 10c0-4 1.5-6 4-7"})]}),user:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"8",r:"3.5"}),e.jsx("path",{d:"M5 20a7 7 0 0 1 14 0"})]}),star:e.jsx("path",{d:"m12 3 2.78 5.63 6.22.9-4.5 4.38 1.06 6.2L12 17.18l-5.56 2.93 1.06-6.2L3 9.53l6.22-.9L12 3Z"}),calendar:e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"16",rx:"2"}),e.jsx("path",{d:"M16 3v4M8 3v4M3 10h18"})]}),search:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"11",cy:"11",r:"6.5"}),e.jsx("path",{d:"m16 16 5 5"})]}),users:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"9",cy:"8",r:"3"}),e.jsx("path",{d:"M3 20a6 6 0 0 1 12 0"}),e.jsx("path",{d:"M16 5.5a3 3 0 0 1 0 5.8"}),e.jsx("path",{d:"M18 14a5 5 0 0 1 3 4.5"})]}),chevronDown:e.jsx("path",{d:"m6 9 6 6 6-6"}),check:e.jsx("path",{d:"m5 12 4 4L19 6"})};return e.jsx("svg",{...s,children:m[i]})}function C(i){if(!i)return"—";const t=new Date(i);return Number.isNaN(t.getTime())?"—":t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}function N({rating:i=0,large:t=!1}){const n=Number(i)||0;return e.jsx("div",{className:`stars ${t?"stars-large":""}`,"aria-label":`${n} out of 5 stars`,children:[1,2,3,4,5].map(s=>e.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:s<=n?"star-filled":"star-empty",children:e.jsx("path",{d:"M10 1.8 12.5 7l5.7.8-4.1 4 .97 5.65L10 14.8l-5.07 2.65.97-5.65-4.1-4L7.5 7 10 1.8Z"})},s))})}function g({label:i,error:t,required:n=!1,children:s}){return e.jsxs("div",{className:"form-field",children:[e.jsxs("label",{className:"form-label",children:[i,n&&e.jsx("span",{className:"required-mark",children:"*"})]}),s,t&&e.jsx("div",{className:"form-error",children:t})]})}function q({value:i,onChange:t}){return e.jsx("div",{className:"rating-picker",children:[1,2,3,4,5].map(n=>{const s=String(n)===String(i);return e.jsxs("button",{type:"button",className:`rating-option ${s?"active":""}`,onClick:()=>t(String(n)),"aria-label":`Give ${n} star${n>1?"s":""}`,children:[e.jsx(o,{name:"star",size:15}),e.jsx("span",{children:n})]},n)})})}function z({mode:i,form:t,talents:n,onClose:s,onSubmit:m}){var c;const p=i==="edit";return u.useEffect(()=>{const r=document.body.style.overflow;document.body.style.overflow="hidden";const l=d=>{d.key==="Escape"&&!t.processing&&s()};return document.addEventListener("keydown",l),()=>{document.body.style.overflow=r,document.removeEventListener("keydown",l)}},[s,t.processing]),typeof document>"u"?null:L.createPortal(e.jsx("div",{className:"testimonial-modal-backdrop",role:"dialog","aria-modal":"true","aria-labelledby":"testimonial-modal-title",onMouseDown:r=>{r.target===r.currentTarget&&!t.processing&&s()},children:e.jsx("div",{className:"testimonial-modal",onMouseDown:r=>r.stopPropagation(),children:e.jsxs("form",{onSubmit:m,children:[e.jsxs("div",{className:"testimonial-modal-header",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{className:"modal-icon",children:e.jsx(o,{name:"quote",size:19})}),e.jsxs("div",{children:[e.jsx("h2",{id:"testimonial-modal-title",children:p?"Edit testimonial":"Add testimonial"}),e.jsx("p",{children:p?"Update the testimonial details below.":"Add feedback from a talent or client."})]})]}),e.jsx("button",{type:"button",className:"modal-close",onClick:s,disabled:t.processing,"aria-label":"Close modal",children:e.jsx(o,{name:"close",size:17})})]}),e.jsxs("div",{className:"testimonial-modal-body",children:[e.jsx(g,{label:"Testimonial title",required:!0,error:t.errors.title,children:e.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. Exceptional creative work",value:t.data.title,onChange:r=>t.setData("title",r.target.value),autoFocus:!0,required:!0})}),e.jsx(g,{label:"Talent",required:!0,error:t.errors.talent_id,children:e.jsxs("div",{className:"select-wrapper",children:[e.jsxs("select",{className:"form-input",value:t.data.talent_id,onChange:r=>t.setData("talent_id",r.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select a talent"}),n.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsx("span",{className:"select-icon",children:e.jsx(o,{name:"chevronDown",size:15})})]})}),e.jsxs(g,{label:"Testimonial",required:!0,error:t.errors.content,children:[e.jsx("textarea",{className:"form-input form-textarea",rows:5,placeholder:"Write the testimonial content...",value:t.data.content,onChange:r=>t.setData("content",r.target.value),required:!0}),e.jsxs("div",{className:"character-hint",children:[((c=t.data.content)==null?void 0:c.length)||0," characters"]})]}),e.jsx(g,{label:"Rating",required:!0,error:t.errors.rating,children:e.jsx(q,{value:t.data.rating,onChange:r=>t.setData("rating",r)})})]}),e.jsxs("div",{className:"testimonial-modal-footer",children:[e.jsx("button",{type:"button",className:"platform-btn platform-btn-secondary",onClick:s,disabled:t.processing,children:"Cancel"}),e.jsx("button",{type:"submit",className:"platform-btn platform-btn-primary",disabled:t.processing,children:t.processing?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"button-spinner"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(o,{name:p?"check":"plus",size:15}),p?"Save changes":"Add testimonial"]})})]})]})})}),document.body)}function _({testimonials:i,talents:t=[]}){const[n,s]=u.useState(!1),[m,p]=u.useState(null),[c,r]=u.useState(""),l=k({title:"",talent_id:"",content:"",rating:"5"}),d=k({title:"",talent_id:"",content:"",rating:"5"}),h=Array.isArray(i)?i:(i==null?void 0:i.data)??[],b=h.filter(a=>{var f;const x=c.trim().toLowerCase();return x?[a.title,a.content,(f=a.talent)==null?void 0:f.name].filter(Boolean).some(A=>String(A).toLowerCase().includes(x)):!0}),v=h.length>0?h.reduce((a,x)=>a+Number(x.rating||0),0)/h.length:0,j=()=>{l.clearErrors(),l.reset(),l.setData("rating","5"),s(!0)},y=()=>{l.processing||(s(!1),l.clearErrors(),l.reset(),l.setData("rating","5"))},S=a=>{d.clearErrors(),d.setData({title:a.title??"",talent_id:a.talent_id??"",content:a.content??"",rating:a.rating?String(a.rating):"5"}),p(a.id)},w=()=>{d.processing||(p(null),d.clearErrors(),d.reset(),d.setData("rating","5"))},M=a=>{a.preventDefault(),l.post(route("admin.testimonials.store"),{preserveScroll:!0,onSuccess:()=>{y()}})},E=a=>{a.preventDefault(),d.put(route("admin.testimonials.update",m),{preserveScroll:!0,onSuccess:()=>{w()}})},T=a=>{window.confirm("Delete this testimonial?")&&F.delete(route("admin.testimonials.destroy",a),{preserveScroll:!0})};return e.jsxs(I,{children:[e.jsx(D,{title:"Testimonials"}),e.jsxs("div",{className:"talent-testimonials-page",children:[e.jsxs("header",{className:"platform-header",children:[e.jsxs("div",{className:"header-copy",children:[e.jsxs("div",{className:"eyebrow",children:[e.jsx("span",{className:"eyebrow-line"}),"Talent platform"]}),e.jsx("h1",{children:"Testimonials"}),e.jsx("p",{children:"Manage the experiences and feedback that showcase your talent community."})]}),e.jsxs("button",{type:"button",className:"platform-btn platform-btn-primary add-btn",onClick:j,children:[e.jsx(o,{name:"plus",size:16}),"Add testimonial"]})]}),e.jsxs("section",{className:"overview-cards",children:[e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"overview-icon",children:e.jsx(o,{name:"quote",size:18})}),e.jsxs("div",{children:[e.jsx("span",{className:"overview-label",children:"Total testimonials"}),e.jsx("strong",{children:h.length})]})]}),e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"overview-icon",children:e.jsx(o,{name:"star",size:18})}),e.jsxs("div",{children:[e.jsx("span",{className:"overview-label",children:"Average rating"}),e.jsx("strong",{children:v.toFixed(1)})]}),e.jsx(N,{rating:Math.round(v)})]}),e.jsxs("div",{className:"overview-card",children:[e.jsx("div",{className:"overview-icon",children:e.jsx(o,{name:"users",size:18})}),e.jsxs("div",{children:[e.jsx("span",{className:"overview-label",children:"Talents"}),e.jsx("strong",{children:t.length})]})]})]}),e.jsxs("section",{className:"testimonial-section",children:[e.jsxs("div",{className:"section-toolbar",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"All testimonials"}),e.jsx("p",{children:"Feedback currently available across your platform."})]}),e.jsxs("div",{className:"search-box",children:[e.jsx(o,{name:"search",size:16}),e.jsx("input",{type:"search",value:c,onChange:a=>r(a.target.value),placeholder:"Search testimonials..."})]})]}),b.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(o,{name:"quote",size:23})}),e.jsx("h3",{children:c?"No testimonials found":"No testimonials yet"}),e.jsx("p",{children:c?"Try a different search term.":"Start building your social proof by adding the first testimonial."}),!c&&e.jsxs("button",{type:"button",className:"platform-btn platform-btn-primary",onClick:j,children:[e.jsx(o,{name:"plus",size:15}),"Add testimonial"]})]}):e.jsx("div",{className:"testimonial-list",children:b.map(a=>{var x,f;return e.jsxs("article",{className:"testimonial-item",children:[e.jsxs("div",{className:"testimonial-main",children:[e.jsx("div",{className:"quote-mark",children:e.jsx(o,{name:"quote",size:18})}),e.jsxs("div",{className:"testimonial-content",children:[e.jsxs("div",{className:"testimonial-heading",children:[e.jsx("h3",{children:a.title||"Untitled testimonial"}),e.jsx(N,{rating:a.rating})]}),e.jsx("p",{children:a.content||"No testimonial content provided."}),e.jsxs("div",{className:"testimonial-meta",children:[e.jsxs("div",{className:"talent-person",children:[e.jsx("span",{className:"talent-avatar",children:(((x=a.talent)==null?void 0:x.name)||"T").charAt(0).toUpperCase()}),e.jsxs("div",{children:[e.jsx("strong",{children:((f=a.talent)==null?void 0:f.name)||"Unknown talent"}),e.jsx("span",{children:"Talent"})]})]}),e.jsx("span",{className:"meta-separator"}),e.jsxs("span",{className:"date-meta",children:[e.jsx(o,{name:"calendar",size:13}),C(a.created_at)]})]})]})]}),e.jsxs("div",{className:"testimonial-actions",children:[e.jsx("button",{type:"button",className:"icon-action",onClick:()=>S(a),title:"Edit testimonial","aria-label":"Edit testimonial",children:e.jsx(o,{name:"edit",size:15})}),e.jsx("button",{type:"button",className:"icon-action icon-action-danger",onClick:()=>T(a.id),title:"Delete testimonial","aria-label":"Delete testimonial",children:e.jsx(o,{name:"trash",size:15})})]})]},a.id)})})]})]}),n&&e.jsx(z,{mode:"add",form:l,talents:t,onClose:y,onSubmit:M}),m!==null&&e.jsx(z,{mode:"edit",form:d,talents:t,onClose:w,onSubmit:E}),e.jsx("style",{children:`

                /* ==========================================================
                   DESIGN TOKENS
                ========================================================== */

                .talent-testimonials-page {
                    --tp-text: #1d1d1f;
                    --tp-secondary: #6e6e73;
                    --tp-tertiary: #86868b;
                    --tp-border: #e5e5e7;
                    --tp-border-light: #eeeeef;
                    --tp-background: #f5f5f7;
                    --tp-card: #ffffff;
                    --tp-black: #1d1d1f;
                    --tp-blue: #0071e3;
                    --tp-blue-hover: #0077ed;
                    --tp-green: #34c759;
                    --tp-orange: #ff9f0a;
                    --tp-red: #ff3b30;

                    min-height: 100vh;
                    padding: 38px clamp(20px, 4vw, 56px) 70px;

                    background: var(--tp-background);
                    color: var(--tp-text);

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                }

                .talent-testimonials-page *,
                .talent-testimonials-page *::before,
                .talent-testimonials-page *::after {
                    box-sizing: border-box;
                }

                /* ==========================================================
                   HEADER
                ========================================================== */

                .platform-header {
                    max-width: 1180px;
                    margin: 0 auto 28px;

                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 24px;
                }

                .header-copy {
                    min-width: 0;
                }

                .eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    margin-bottom: 9px;

                    color: var(--tp-tertiary);
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                }

                .eyebrow-line {
                    width: 20px;
                    height: 1px;
                    background: var(--tp-secondary);
                }

                .platform-header h1 {
                    margin: 0;

                    font-size: clamp(27px, 3vw, 36px);
                    line-height: 1.1;
                    letter-spacing: -.035em;
                    font-weight: 700;
                }

                .platform-header p {
                    max-width: 540px;
                    margin: 9px 0 0;

                    color: var(--tp-secondary);
                    font-size: 13px;
                    line-height: 1.55;
                    letter-spacing: -.005em;
                }

                /* ==========================================================
                   BUTTONS
                ========================================================== */

                .platform-btn {
                    height: 38px;
                    padding: 0 15px;

                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;

                    border: 0;
                    border-radius: 8px;

                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 600;

                    cursor: pointer;
                    white-space: nowrap;

                    transition:
                        background .16s ease,
                        transform .12s ease,
                        opacity .16s ease;
                }

                .platform-btn:active {
                    transform: scale(.98);
                }

                .platform-btn:disabled {
                    opacity: .55;
                    cursor: not-allowed;
                }

                .platform-btn-primary {
                    background: var(--tp-black);
                    color: #fff;
                }

                .platform-btn-primary:hover {
                    background: #000;
                }

                .platform-btn-secondary {
                    background: #f5f5f7;
                    color: var(--tp-text);
                    border: 1px solid var(--tp-border);
                }

                .platform-btn-secondary:hover {
                    background: #ebebed;
                }

                .add-btn {
                    min-width: 150px;
                }

                /* ==========================================================
                   OVERVIEW
                ========================================================== */

                .overview-cards {
                    max-width: 1180px;
                    margin: 0 auto 22px;

                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                }

                .overview-card {
                    min-height: 88px;
                    padding: 17px 18px;

                    display: flex;
                    align-items: center;
                    gap: 12px;

                    background: var(--tp-card);
                    border: 1px solid var(--tp-border);
                    border-radius: 11px;
                }

                .overview-icon {
                    width: 36px;
                    height: 36px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 9px;
                    background: #f5f5f7;
                    color: var(--tp-text);
                }

                .overview-card > div:nth-child(2) {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .overview-label {
                    color: var(--tp-tertiary);
                    font-size: 10.5px;
                    font-weight: 500;
                }

                .overview-card strong {
                    font-size: 20px;
                    line-height: 1;
                    letter-spacing: -.02em;
                }

                .overview-card .stars {
                    margin-left: auto;
                }

                /* ==========================================================
                   SECTION
                ========================================================== */

                .testimonial-section {
                    max-width: 1180px;
                    margin: 0 auto;

                    background: var(--tp-card);
                    border: 1px solid var(--tp-border);
                    border-radius: 12px;
                    overflow: hidden;
                }

                .section-toolbar {
                    min-height: 76px;
                    padding: 15px 18px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;

                    border-bottom: 1px solid var(--tp-border-light);
                }

                .section-toolbar h2 {
                    margin: 0;

                    font-size: 14px;
                    font-weight: 650;
                    letter-spacing: -.01em;
                }

                .section-toolbar p {
                    margin: 4px 0 0;

                    color: var(--tp-tertiary);
                    font-size: 11px;
                }

                .search-box {
                    width: 245px;
                    height: 34px;

                    display: flex;
                    align-items: center;
                    gap: 8px;

                    padding: 0 10px;

                    background: #f5f5f7;
                    border: 1px solid transparent;
                    border-radius: 7px;

                    color: var(--tp-tertiary);

                    transition:
                        border-color .15s ease,
                        background .15s ease;
                }

                .search-box:focus-within {
                    background: #fff;
                    border-color: var(--tp-border);
                }

                .search-box input {
                    width: 100%;
                    min-width: 0;

                    border: 0;
                    outline: 0;
                    background: transparent;

                    color: var(--tp-text);
                    font-family: inherit;
                    font-size: 11.5px;
                }

                .search-box input::placeholder {
                    color: #a1a1a6;
                }

                /* ==========================================================
                   TESTIMONIAL LIST
                ========================================================== */

                .testimonial-list {
                    display: flex;
                    flex-direction: column;
                }

                .testimonial-item {
                    padding: 21px 20px;

                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;

                    border-bottom: 1px solid var(--tp-border-light);

                    transition: background .15s ease;
                }

                .testimonial-item:last-child {
                    border-bottom: 0;
                }

                .testimonial-item:hover {
                    background: #fafafa;
                }

                .testimonial-main {
                    min-width: 0;
                    flex: 1;

                    display: flex;
                    gap: 14px;
                }

                .quote-mark {
                    width: 34px;
                    height: 34px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 8px;

                    background: #f5f5f7;
                    color: #6e6e73;
                }

                .testimonial-content {
                    min-width: 0;
                    flex: 1;
                }

                .testimonial-heading {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .testimonial-heading h3 {
                    margin: 0;

                    font-size: 14px;
                    line-height: 1.3;
                    font-weight: 650;
                    letter-spacing: -.012em;
                }

                .testimonial-content > p {
                    max-width: 800px;
                    margin: 8px 0 14px;

                    color: var(--tp-secondary);
                    font-size: 12.5px;
                    line-height: 1.65;
                }

                .testimonial-meta {
                    display: flex;
                    align-items: center;
                    gap: 11px;
                }

                .talent-person {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .talent-avatar {
                    width: 25px;
                    height: 25px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 50%;

                    background: #e8e8ed;
                    color: #3a3a3c;

                    font-size: 10px;
                    font-weight: 700;
                }

                .talent-person div {
                    display: flex;
                    flex-direction: column;
                    gap: 1px;
                }

                .talent-person strong {
                    font-size: 10.5px;
                    font-weight: 600;
                }

                .talent-person span {
                    color: var(--tp-tertiary);
                    font-size: 9px;
                }

                .meta-separator {
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    background: #c7c7cc;
                }

                .date-meta {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;

                    color: var(--tp-tertiary);
                    font-size: 9.5px;
                }

                /* ==========================================================
                   STARS
                ========================================================== */

                .stars {
                    display: inline-flex;
                    align-items: center;
                    gap: 2px;
                    flex-shrink: 0;
                }

                .stars svg {
                    width: 12px;
                    height: 12px;
                }

                .stars-large svg {
                    width: 14px;
                    height: 14px;
                }

                .star-filled {
                    fill: #ffb340;
                    color: #ffb340;
                }

                .star-empty {
                    fill: #e5e5e7;
                    color: #e5e5e7;
                }

                /* ==========================================================
                   ACTIONS
                ========================================================== */

                .testimonial-actions {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    flex-shrink: 0;
                }

                .icon-action {
                    width: 31px;
                    height: 31px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid transparent;
                    border-radius: 7px;

                    background: transparent;
                    color: var(--tp-secondary);

                    cursor: pointer;

                    transition:
                        background .15s ease,
                        color .15s ease,
                        border-color .15s ease;
                }

                .icon-action:hover {
                    background: #f5f5f7;
                    border-color: var(--tp-border);
                    color: var(--tp-text);
                }

                .icon-action-danger:hover {
                    background: #fff2f1;
                    border-color: #ffd9d6;
                    color: var(--tp-red);
                }

                /* ==========================================================
                   EMPTY STATE
                ========================================================== */

                .empty-state {
                    min-height: 330px;
                    padding: 50px 20px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    text-align: center;
                }

                .empty-icon {
                    width: 48px;
                    height: 48px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    margin-bottom: 14px;

                    border-radius: 12px;

                    background: #f5f5f7;
                    color: var(--tp-secondary);
                }

                .empty-state h3 {
                    margin: 0 0 6px;

                    font-size: 15px;
                    font-weight: 650;
                }

                .empty-state p {
                    max-width: 380px;
                    margin: 0 0 17px;

                    color: var(--tp-tertiary);
                    font-size: 11.5px;
                    line-height: 1.6;
                }

                /* ==========================================================
                   MODAL
                ========================================================== */

                .testimonial-modal-backdrop {
                    position: fixed;
                    inset: 0;

                    z-index: 99999;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    padding: 20px;

                    background: rgba(0, 0, 0, .42);

                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);

                    animation: modalBackdropIn .16s ease-out;
                }

                .testimonial-modal {
                    width: min(510px, 100%);
                    max-height: calc(100vh - 40px);

                    overflow: hidden;

                    background: #fff;

                    border: 1px solid rgba(0, 0, 0, .08);
                    border-radius: 14px;

                    box-shadow:
                        0 30px 80px rgba(0, 0, 0, .18),
                        0 8px 24px rgba(0, 0, 0, .08);

                    animation: modalIn .18s ease-out;
                }

                .testimonial-modal form {
                    max-height: calc(100vh - 40px);

                    display: flex;
                    flex-direction: column;
                }

                .testimonial-modal-header {
                    min-height: 70px;

                    padding: 15px 17px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;

                    border-bottom: 1px solid var(--tp-border);
                }

                .modal-heading {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    min-width: 0;
                }

                .modal-icon {
                    width: 35px;
                    height: 35px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 9px;

                    background: #f5f5f7;
                    color: var(--tp-text);
                }

                .modal-heading h2 {
                    margin: 0;

                    font-size: 14px;
                    font-weight: 650;
                    letter-spacing: -.01em;
                }

                .modal-heading p {
                    margin: 3px 0 0;

                    color: var(--tp-tertiary);
                    font-size: 10px;
                    line-height: 1.4;
                }

                .modal-close {
                    width: 30px;
                    height: 30px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 0;
                    border-radius: 7px;

                    background: transparent;
                    color: var(--tp-secondary);

                    cursor: pointer;
                }

                .modal-close:hover {
                    background: #f5f5f7;
                    color: var(--tp-text);
                }

                .modal-close:disabled {
                    opacity: .5;
                    cursor: not-allowed;
                }

                .testimonial-modal-body {
                    padding: 20px;

                    overflow-y: auto;
                }

                .testimonial-modal-footer {
                    padding: 13px 17px;

                    display: flex;
                    justify-content: flex-end;
                    gap: 8px;

                    border-top: 1px solid var(--tp-border);

                    background: #fff;
                }

                /* ==========================================================
                   FORM
                ========================================================== */

                .form-field {
                    margin-bottom: 17px;
                }

                .form-field:last-child {
                    margin-bottom: 0;
                }

                .form-label {
                    display: block;

                    margin-bottom: 6px;

                    color: var(--tp-text);
                    font-size: 11px;
                    font-weight: 600;
                }

                .required-mark {
                    margin-left: 3px;
                    color: var(--tp-red);
                }

                .form-input {
                    width: 100%;
                    min-height: 37px;

                    padding: 8px 10px;

                    border: 1px solid var(--tp-border);
                    border-radius: 7px;

                    outline: none;

                    background: #fff;
                    color: var(--tp-text);

                    font-family: inherit;
                    font-size: 12px;

                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;
                }

                .form-input::placeholder {
                    color: #a1a1a6;
                }

                .form-input:hover {
                    border-color: #d1d1d6;
                }

                .form-input:focus {
                    border-color: #8f8f94;
                    box-shadow: 0 0 0 3px rgba(0, 0, 0, .055);
                }

                .form-textarea {
                    min-height: 112px;
                    resize: vertical;
                    line-height: 1.55;
                }

                .select-wrapper {
                    position: relative;
                }

                .select-wrapper select {
                    appearance: none;
                    -webkit-appearance: none;

                    padding-right: 35px;
                }

                .select-icon {
                    position: absolute;
                    top: 50%;
                    right: 10px;

                    transform: translateY(-50%);

                    pointer-events: none;
                    color: var(--tp-secondary);
                }

                .character-hint {
                    margin-top: 4px;

                    color: #a1a1a6;
                    font-size: 9px;
                    text-align: right;
                }

                .form-error {
                    margin-top: 5px;

                    color: var(--tp-red);
                    font-size: 10px;
                }

                /* ==========================================================
                   RATING PICKER
                ========================================================== */

                .rating-picker {
                    display: flex;
                    gap: 6px;
                }

                .rating-option {
                    min-width: 44px;
                    height: 34px;

                    padding: 0 9px;

                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;

                    border: 1px solid var(--tp-border);
                    border-radius: 7px;

                    background: #fff;
                    color: var(--tp-secondary);

                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 600;

                    cursor: pointer;

                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        color .15s ease;
                }

                .rating-option:hover {
                    border-color: #c7c7cc;
                    background: #f8f8f8;
                }

                .rating-option.active {
                    border-color: var(--tp-text);
                    background: var(--tp-text);
                    color: #fff;
                }

                .rating-option.active svg {
                    fill: #ffb340;
                    stroke: #ffb340;
                }

                /* ==========================================================
                   LOADING
                ========================================================== */

                .button-spinner {
                    width: 13px;
                    height: 13px;

                    border: 1.5px solid rgba(255,255,255,.4);
                    border-top-color: #fff;
                    border-radius: 50%;

                    animation: spinner .7s linear infinite;
                }

                /* ==========================================================
                   ANIMATIONS
                ========================================================== */

                @keyframes modalBackdropIn {
                    from {
                        opacity: 0;
                    }

                    to {
                        opacity: 1;
                    }
                }

                @keyframes modalIn {
                    from {
                        opacity: 0;
                        transform: translateY(8px) scale(.985);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes spinner {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* ==========================================================
                   RESPONSIVE
                ========================================================== */

                @media (max-width: 760px) {

                    .talent-testimonials-page {
                        padding: 25px 16px 50px;
                    }

                    .platform-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .add-btn {
                        width: 100%;
                    }

                    .overview-cards {
                        grid-template-columns: 1fr;
                    }

                    .section-toolbar {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .testimonial-item {
                        flex-direction: column;
                    }

                    .testimonial-actions {
                        width: 100%;
                        justify-content: flex-end;
                    }
                }

                @media (max-width: 500px) {

                    .testimonial-modal-backdrop {
                        padding: 10px;
                        align-items: flex-end;
                    }

                    .testimonial-modal {
                        max-height: calc(100vh - 20px);
                        border-radius: 14px 14px 10px 10px;
                    }

                    .testimonial-modal form {
                        max-height: calc(100vh - 20px);
                    }

                    .testimonial-meta {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 7px;
                    }

                    .meta-separator {
                        display: none;
                    }

                    .rating-picker {
                        width: 100%;
                    }

                    .rating-option {
                        flex: 1;
                    }
                }

            `})]})}export{_ as default};
