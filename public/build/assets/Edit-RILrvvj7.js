import{r as l,u as L,j as e,H as M}from"./app-CgjB0zLb.js";import{A as z}from"./AppLayout-BhRRfzUA.js";const S={productUpdate:a=>`/seller/products/${a}`},o={Edit:a=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"})]}),Package:a=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[e.jsx("path",{d:"M21 8l-9-5-9 5 9 5 9-5Z"}),e.jsx("path",{d:"M3 8v8l9 5 9-5V8"}),e.jsx("path",{d:"M12 13v8"})]}),Tag:a=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[e.jsx("path",{d:"M20 12.5 12.5 20a1.5 1.5 0 0 1-2.1 0l-6.4-6.4a1.5 1.5 0 0 1 0-2.1L11.5 4H19a1 1 0 0 1 1 1v7.5Z"}),e.jsx("circle",{cx:"15",cy:"9",r:"1.4",fill:"currentColor",stroke:"none"})]}),Cash:a=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[e.jsx("rect",{x:"2.5",y:"6",width:"19",height:"12",rx:"2.5"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.6"}),e.jsx("path",{d:"M6.5 9v.01M17.5 15v.01"})]}),Stack:a=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[e.jsx("path",{d:"M12 3 2.5 8 12 13l9.5-5L12 3Z"}),e.jsx("path",{d:"M2.5 12 12 17l9.5-5"}),e.jsx("path",{d:"M2.5 16 12 21l9.5-5"})]}),Upload:a=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[e.jsx("path",{d:"M12 16V4M12 4 7 9M12 4l5 5"}),e.jsx("path",{d:"M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"})]}),Trash:a=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...a,children:e.jsx("path",{d:"M4 7h16M9 7V4.8c0-.4.4-.8.9-.8h4.2c.5 0 .9.4.9.8V7M6 7l1 13.2c0 .9.8 1.8 1.8 1.8h6.4c1 0 1.8-.9 1.8-1.8L18 7"})}),Check:a=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...a,children:e.jsx("path",{d:"M20 6 9 17l-5-5"})}),Save:a=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[e.jsx("path",{d:"M5 4h11l3 3v13H5V4Z"}),e.jsx("path",{d:"M8 4v5h7V4"}),e.jsx("path",{d:"M8 14h8v6H8v-6Z"})]})};function c({label:a,icon:x,children:d,span:p}){return e.jsxs("div",{className:`p-field ${p?`p-field--${p}`:""}`,children:[e.jsx("label",{className:"p-label",children:a}),e.jsxs("div",{className:"p-input-wrap",children:[e.jsx("span",{className:"p-input-icon",children:x}),d]})]})}function B({product:a,categories:x=[]}){var f;const d=l.useRef(null),[p,u]=l.useState(a.image?`/storage/${a.image}`:null),[b,h]=l.useState(!1),[j,g]=l.useState(!1),{data:i,setData:n,post:w,processing:m,errors:t,transform:k}=L({name:a.name??"",product_category_id:a.product_category_id??"",price:a.price??"",stock:a.stock??"",description:a.description??"",image:null,status:a.status??"active"});k(r=>({...r,_method:"PUT"}));const y=r=>{r.preventDefault(),w(S.productUpdate(a.id),{forceFormData:!0})},v=r=>{if(!r)return;n("image",r),g(!1);const s=new FileReader;s.onload=()=>u(s.result),s.readAsDataURL(r)},N=r=>{var s;r.preventDefault(),h(!1),v((s=r.dataTransfer.files)==null?void 0:s[0])},C=()=>{n("image",null),u(null),g(!0),d.current&&(d.current.value="")};return e.jsxs("div",{"data-h-scope":"product-edit",children:[e.jsx(M,{title:`Edit Product: ${a.name}`}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
                [data-h-scope="product-edit"] {
                    --bg-page:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-soft:    rgba(0,100,60,0.035);
                    --bg-accent:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #839a92;
                    --border:     rgba(0,100,60,0.12);
                    --border-accent: rgba(0,166,103,0.35);
                    --danger:     #c94a3f;
                    --radius-lg:  18px;
                    --radius-md:  12px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                    box-sizing: border-box;
                }
                [data-h-scope="product-edit"] *,
                [data-h-scope="product-edit"] *::before,
                [data-h-scope="product-edit"] *::after { box-sizing: border-box; }

                [data-h-scope="product-edit"] {
                    background: var(--bg-page);
                    font-family: var(--font-body);
                    color: var(--text-primary);
                    min-height: 100%;
                    padding: 40px 32px;
                }
                @media(max-width: 768px) { [data-h-scope="product-edit"] { padding: 24px 16px; } }

                .p-wrap { max-width: 920px; margin: 0 auto; }

                .p-eyebrow {
                    display: inline-flex; align-items: center; gap: 8px;
                    font-family: var(--font-head);
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: var(--accent);
                    background: var(--bg-accent);
                    border: 1px solid var(--border-accent);
                    border-radius: var(--radius-pill);
                    padding: 5px 14px;
                    margin-bottom: 14px;
                }
                .p-header h1 {
                    font-family: var(--font-head);
                    font-size: 1.85rem;
                    font-weight: 800;
                    margin: 0 0 6px;
                    letter-spacing: -0.01em;
                }
                .p-header p { color: var(--text-secondary); margin: 0 0 28px; font-size: 0.92rem; }
                .p-header p strong { color: var(--text-primary); font-weight: 700; }

                .p-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 30px;
                    box-shadow: 0 1px 2px rgba(16,32,27,0.03), 0 12px 32px -18px rgba(16,32,27,0.12);
                }
                @media(max-width: 600px) { .p-card { padding: 22px; } }

                .p-section + .p-section { margin-top: 30px; padding-top: 30px; border-top: 1px dashed var(--border); }
                .p-section-title {
                    display: flex; align-items: center; gap: 10px;
                    font-family: var(--font-head);
                    font-size: 0.78rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    color: var(--text-muted);
                    margin: 0 0 18px;
                }
                .p-section-title .p-count {
                    width: 20px; height: 20px; border-radius: 50%;
                    background: var(--bg-accent); color: var(--accent);
                    display: inline-flex; align-items: center; justify-content: center;
                    font-size: 0.68rem; font-weight: 800;
                }

                .p-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
                @media(max-width: 820px) { .p-grid { grid-template-columns: repeat(2, 1fr); } }
                @media(max-width: 560px) { .p-grid { grid-template-columns: 1fr; } }

                .p-field--full { grid-column: 1 / -1; }

                .p-label {
                    display: block;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    margin-bottom: 7px;
                }

                .p-input-wrap { position: relative; }
                .p-input-icon {
                    position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
                    color: var(--text-muted); width: 18px; height: 18px;
                    display: flex; pointer-events: none;
                }
                .p-input-icon svg { width: 100%; height: 100%; }

                .p-input, .p-select, .p-textarea {
                    width: 100%;
                    background: var(--bg-soft);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-md);
                    color: var(--text-primary);
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    padding: 12px 14px 12px 42px;
                    outline: none;
                    transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
                }
                .p-input:focus, .p-select:focus, .p-textarea:focus {
                    border-color: var(--border-accent);
                    box-shadow: 0 0 0 3px var(--accent-glow);
                    background: var(--bg-card);
                }
                .p-input::placeholder, .p-textarea::placeholder { color: var(--text-muted); }
                .p-select { appearance: none; cursor: pointer; }
                .p-select-wrap { position: relative; }
                .p-select-caret {
                    position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
                    width: 14px; height: 14px; color: var(--text-muted); pointer-events: none;
                }
                .p-textarea { padding-left: 14px; resize: vertical; min-height: 110px; line-height: 1.55; }

                .p-error { color: var(--danger); font-size: 0.76rem; margin-top: 6px; font-weight: 500; }

                /* status pills */
                .p-status-group { display: flex; gap: 10px; }
                .p-status-pill {
                    flex: 1;
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                    border: 1px solid var(--border);
                    background: var(--bg-soft);
                    border-radius: var(--radius-md);
                    padding: 12px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: border-color 0.15s, background 0.15s, color 0.15s;
                }
                .p-status-pill svg { width: 16px; height: 16px; opacity: 0; transition: opacity 0.15s; }
                .p-status-pill.is-active {
                    border-color: var(--border-accent);
                    background: var(--bg-accent);
                    color: var(--accent);
                }
                .p-status-pill.is-active svg { opacity: 1; }
                .p-status-pill input { position: absolute; opacity: 0; pointer-events: none; }

                /* image dropzone */
                .p-drop {
                    border: 1.5px dashed var(--border-accent);
                    border-radius: var(--radius-md);
                    background: var(--bg-soft);
                    padding: 28px;
                    text-align: center;
                    cursor: pointer;
                    transition: border-color 0.15s, background 0.15s;
                }
                .p-drop:hover, .p-drop.is-active { background: var(--bg-accent); border-color: var(--accent); }
                .p-drop-icon {
                    width: 38px; height: 38px; margin: 0 auto 12px;
                    color: var(--accent);
                    background: var(--bg-card);
                    border: 1px solid var(--border-accent);
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                }
                .p-drop-icon svg { width: 18px; height: 18px; }
                .p-drop-title { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin: 0 0 3px; }
                .p-drop-hint { font-size: 0.76rem; color: var(--text-muted); margin: 0; }

                .p-preview {
                    display: flex; align-items: center; gap: 14px;
                    border: 1px solid var(--border);
                    border-radius: var(--radius-md);
                    padding: 12px;
                    background: var(--bg-soft);
                }
                .p-preview img {
                    width: 64px; height: 64px; object-fit: cover;
                    border-radius: 10px; border: 1px solid var(--border);
                    flex-shrink: 0;
                }
                .p-preview-meta { flex: 1; min-width: 0; }
                .p-preview-name { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin: 0 0 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
                .p-preview-size { font-size: 0.75rem; color: var(--text-muted); margin: 0; }
                .p-preview-remove {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 32px; height: 32px; border-radius: 50%;
                    border: 1px solid var(--border);
                    background: var(--bg-card);
                    color: var(--danger);
                    cursor: pointer;
                    flex-shrink: 0;
                }
                .p-preview-remove svg { width: 15px; height: 15px; }
                .p-preview-remove:hover { border-color: var(--danger); background: rgba(201,74,63,0.08); }

                .p-footer {
                    display: flex; align-items: center; justify-content: flex-end; gap: 12px;
                    margin-top: 30px; padding-top: 24px;
                    border-top: 1px solid var(--border);
                }
                .p-btn-ghost {
                    background: transparent;
                    border: 1px solid var(--border);
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 12px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: border-color 0.15s, color 0.15s;
                }
                .p-btn-ghost:hover { border-color: var(--border-accent); color: var(--accent); }
                .p-btn-primary {
                    display: inline-flex; align-items: center; gap: 9px;
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius-pill);
                    padding: 12px 26px;
                    font-family: var(--font-head);
                    font-size: 0.9rem;
                    font-weight: 700;
                    cursor: pointer;
                    box-shadow: 0 6px 20px var(--accent-glow);
                    transition: background 0.15s, transform 0.15s;
                }
                .p-btn-primary svg { width: 17px; height: 17px; }
                .p-btn-primary:hover { background: var(--accent-dim); transform: translateY(-1px); }
                .p-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
            `}),e.jsxs("div",{className:"p-wrap",children:[e.jsxs("div",{className:"p-header",children:[e.jsxs("span",{className:"p-eyebrow",children:[e.jsx(o.Edit,{style:{width:13,height:13}})," Catalog"]}),e.jsx("h1",{children:"Edit product"}),e.jsxs("p",{children:["Updating ",e.jsx("strong",{children:a.name})]})]}),e.jsxs("form",{onSubmit:y,children:[e.jsxs("div",{className:"p-card",children:[e.jsxs("div",{className:"p-section",children:[e.jsxs("h3",{className:"p-section-title",children:[e.jsx("span",{className:"p-count",children:"1"})," Basics"]}),e.jsxs("div",{className:"p-grid",children:[e.jsxs(c,{label:"Product name",icon:e.jsx(o.Package,{}),span:"full",children:[e.jsx("input",{type:"text",className:"p-input",placeholder:"e.g. Handwoven Basket",value:i.name,onChange:r=>n("name",r.target.value),required:!0}),t.name&&e.jsx("p",{className:"p-error",children:t.name})]}),e.jsxs(c,{label:"Category",icon:e.jsx(o.Tag,{}),span:"full",children:[e.jsxs("div",{className:"p-select-wrap",children:[e.jsxs("select",{className:"p-select",value:i.product_category_id,onChange:r=>n("product_category_id",r.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select category"}),x.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsx("svg",{className:"p-select-caret",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"m6 9 6 6 6-6"})})]}),t.product_category_id&&e.jsx("p",{className:"p-error",children:t.product_category_id})]})]})]}),e.jsxs("div",{className:"p-section",children:[e.jsxs("h3",{className:"p-section-title",children:[e.jsx("span",{className:"p-count",children:"2"})," Pricing & inventory"]}),e.jsxs("div",{className:"p-grid",children:[e.jsxs(c,{label:"Price (RWF)",icon:e.jsx(o.Cash,{}),children:[e.jsx("input",{type:"number",step:"100",min:"0",className:"p-input",placeholder:"0",value:i.price,onChange:r=>n("price",r.target.value),required:!0}),t.price&&e.jsx("p",{className:"p-error",children:t.price})]}),e.jsxs(c,{label:"Stock quantity",icon:e.jsx(o.Stack,{}),children:[e.jsx("input",{type:"number",min:"0",className:"p-input",placeholder:"0",value:i.stock,onChange:r=>n("stock",r.target.value),required:!0}),t.stock&&e.jsx("p",{className:"p-error",children:t.stock})]}),e.jsxs("div",{className:"p-field",children:[e.jsx("label",{className:"p-label",children:"Status"}),e.jsx("div",{className:"p-status-group",children:[{value:"active",label:"Active"},{value:"draft",label:"Draft"}].map(r=>e.jsxs("label",{className:`p-status-pill ${i.status===r.value?"is-active":""}`,children:[e.jsx("input",{type:"radio",name:"status",value:r.value,checked:i.status===r.value,onChange:s=>n("status",s.target.value)}),e.jsx(o.Check,{})," ",r.label]},r.value))})]})]})]}),e.jsxs("div",{className:"p-section",children:[e.jsxs("h3",{className:"p-section-title",children:[e.jsx("span",{className:"p-count",children:"3"})," Description"]}),e.jsxs("div",{className:"p-field p-field--full",children:[e.jsx("label",{className:"p-label",children:"Product description"}),e.jsx("textarea",{className:"p-textarea",rows:4,placeholder:"Write a clear, detailed description of the product — materials, size, condition, what makes it worth buying…",value:i.description,onChange:r=>n("description",r.target.value)}),t.description&&e.jsx("p",{className:"p-error",children:t.description})]})]}),e.jsxs("div",{className:"p-section",children:[e.jsxs("h3",{className:"p-section-title",children:[e.jsx("span",{className:"p-count",children:"4"})," Product image"]}),e.jsxs("div",{className:"p-field p-field--full",children:[e.jsx("input",{ref:d,type:"file",accept:"image/*",style:{display:"none"},onChange:r=>{var s;return v((s=r.target.files)==null?void 0:s[0])}}),p?e.jsxs("div",{className:"p-preview",children:[e.jsx("img",{src:p,alt:"Product preview"}),e.jsxs("div",{className:"p-preview-meta",children:[e.jsx("p",{className:"p-preview-name",children:((f=i.image)==null?void 0:f.name)??(j?"":"Current image")}),e.jsx("p",{className:"p-preview-size",children:i.image?`${(i.image.size/1024).toFixed(0)} KB`:"Uploaded previously — pick a new file to replace it"})]}),e.jsx("button",{type:"button",className:"p-preview-remove",onClick:C,children:e.jsx(o.Trash,{})})]}):e.jsxs("div",{className:`p-drop ${b?"is-active":""}`,onClick:()=>{var r;return(r=d.current)==null?void 0:r.click()},onDragOver:r=>{r.preventDefault(),h(!0)},onDragLeave:()=>h(!1),onDrop:N,children:[e.jsx("div",{className:"p-drop-icon",children:e.jsx(o.Upload,{})}),e.jsx("p",{className:"p-drop-title",children:"Click to upload or drag an image here"}),e.jsx("p",{className:"p-drop-hint",children:"PNG or JPG, up to 5MB"})]}),t.image&&e.jsx("p",{className:"p-error",children:t.image})]})]})]}),e.jsxs("div",{className:"p-footer",children:[e.jsx("button",{type:"button",className:"p-btn-ghost",onClick:()=>window.history.back(),children:"Cancel"}),e.jsxs("button",{type:"submit",className:"p-btn-primary",disabled:m,children:[e.jsx(o.Save,{})," ",m?"Saving…":"Update product"]})]})]})]})]})}B.layout=a=>e.jsx(z,{children:a,title:"Edit Product"});export{B as default};
