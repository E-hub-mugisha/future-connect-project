import{r as l,j as e,H as y,L as h,a as x}from"./app-C-Atdk99.js";import{G as j}from"./GuestLayout-be1venag.js";const o={Cart:r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("circle",{cx:"9",cy:"21",r:"1.4"}),e.jsx("circle",{cx:"18",cy:"21",r:"1.4"}),e.jsx("path",{d:"M2.5 3h2.2l2.3 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7.5H6.1"})]}),Trash:r=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e.jsx("path",{d:"M4 7h16M9 7V4.8A1.8 1.8 0 0 1 10.8 3h2.4A1.8 1.8 0 0 1 15 4.8V7m2 0-.8 12.2A2 2 0 0 1 14.2 21H9.8a2 2 0 0 1-2-1.8L7 7"})}),Plus:r=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",...r,children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),Minus:r=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",...r,children:e.jsx("path",{d:"M5 12h14"})}),Check:r=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e.jsx("path",{d:"m20 7-11 11-5-5"})}),Lock:r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("rect",{x:"4.5",y:"10.5",width:"15",height:"9.5",rx:"1.8"}),e.jsx("path",{d:"M8 10.5V7.2A4 4 0 0 1 16 7.2v3.3"})]}),Bag:r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[e.jsx("path",{d:"M6 8h12l1 12.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 20.5L6 8Z"}),e.jsx("path",{d:"M9 8V6a3 3 0 0 1 6 0v2"})]})},v=()=>e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .cart-page {
            --cp-bg: #f4f7f7;
            --cp-panel: #ffffff;
            --cp-panel-alt: #fafcfc;
            --cp-border: rgba(14,22,24,0.08);
            --cp-text: #10201f;
            --cp-muted: #5c7274;
            --cp-muted-dim: #93a5a6;
            --cp-shadow: 0 1px 2px rgba(14,22,24,0.04);
            --cp-shadow-lg: 0 12px 32px rgba(14,22,24,0.08);
        }
        [data-bs-theme="dark"] .cart-page {
            --cp-bg: #0e1618;
            --cp-panel: #141f21;
            --cp-panel-alt: #182427;
            --cp-border: rgba(255,255,255,0.07);
            --cp-text: #e7eeee;
            --cp-muted: #7f9a9d;
            --cp-muted-dim: #4d6062;
            --cp-shadow: 0 1px 2px rgba(0,0,0,0.2);
            --cp-shadow-lg: 0 16px 40px rgba(0,0,0,0.4);
        }
        .cart-page {
            --cp-green: #00a667;
            --cp-green-dark: #008755;
            --cp-clay: #c9683f;
            background: var(--cp-bg);
            color: var(--cp-text);
            font-family: 'DM Sans', sans-serif;
            min-height: 100vh;
            transition: background 0.2s ease, color 0.2s ease;
        }
        .cart-page .display-font { font-family: 'Syne', sans-serif; }

        .cp-card {
            background: var(--cp-panel);
            border: 1px solid var(--cp-border);
            border-radius: 1rem;
            box-shadow: var(--cp-shadow);
        }

        .cp-alert-success {
            background: color-mix(in srgb, var(--cp-green) 12%, var(--cp-panel));
            border: 1px solid color-mix(in srgb, var(--cp-green) 30%, transparent);
            color: var(--cp-green-dark);
            border-radius: 0.85rem;
        }
        [data-bs-theme="dark"] .cp-alert-success { color: #6fe0af; }

        .cp-item-row {
            border-bottom: 1px solid var(--cp-border);
            transition: background 0.15s ease;
        }
        .cp-item-row:last-child { border-bottom: none; }
        .cp-item-row:hover { background: var(--cp-panel-alt); }

        .cp-thumb {
            width: 68px; height: 68px; object-fit: cover;
            border-radius: 0.65rem;
            border: 1px solid var(--cp-border);
            background: var(--cp-panel-alt);
            flex-shrink: 0;
        }

        .cp-qty-group {
            display: inline-flex; align-items: center;
            border: 1px solid var(--cp-border);
            border-radius: 999px;
            overflow: hidden;
            background: var(--cp-panel-alt);
        }
        .cp-qty-btn {
            width: 2.1rem; height: 2.1rem;
            display: flex; align-items: center; justify-content: center;
            background: transparent; border: none;
            color: var(--cp-text);
            transition: background 0.15s ease, color 0.15s ease;
        }
        .cp-qty-btn:hover:not(:disabled) { background: var(--cp-green); color: #fff; }
        .cp-qty-btn:disabled { color: var(--cp-muted-dim); cursor: not-allowed; }
        .cp-qty-input {
            width: 2.6rem; border: none; background: transparent;
            text-align: center; font-weight: 600; color: var(--cp-text);
            -moz-appearance: textfield;
        }
        .cp-qty-input:focus { outline: none; }
        .cp-qty-input::-webkit-outer-spin-button,
        .cp-qty-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }

        .cp-remove-btn {
            border: 1px solid var(--cp-border);
            color: var(--cp-clay);
            background: transparent;
            border-radius: 999px;
            transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .cp-remove-btn:hover { background: var(--cp-clay); border-color: var(--cp-clay); color: #fff; }

        .cp-summary { position: sticky; top: 1.5rem; }
        .cp-summary-row { display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--cp-muted); padding: 0.4rem 0; }
        .cp-summary-total { display: flex; justify-content: space-between; align-items: baseline; padding-top: 0.9rem; border-top: 1px solid var(--cp-border); margin-top: 0.6rem; }

        .cp-checkout-btn {
            background: var(--cp-green);
            border: none; color: #fff;
            border-radius: 999px;
            font-weight: 600;
            transition: background 0.15s ease, transform 0.15s ease;
        }
        .cp-checkout-btn:hover { background: var(--cp-green-dark); color: #fff; transform: translateY(-1px); }

        .cp-empty {
            border: 1px dashed var(--cp-border);
            border-radius: 1rem;
            background: var(--cp-panel);
        }
        .cp-empty-icon {
            width: 3.5rem; height: 3.5rem;
            border-radius: 999px;
            display: flex; align-items: center; justify-content: center;
            background: color-mix(in srgb, var(--cp-green) 12%, transparent);
            color: var(--cp-green);
            margin: 0 auto 1rem;
        }
        .cp-browse-link { color: var(--cp-green); font-weight: 600; text-decoration: none; }
        .cp-browse-link:hover { text-decoration: underline; color: var(--cp-green-dark); }

        .cp-muted { color: var(--cp-muted); }
        .cp-eyebrow { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cp-green); }
    `});function k({value:r,min:a,max:t,onChange:c}){const d=()=>c(Math.max(a,r-1)),i=()=>c(Math.min(t,r+1));return e.jsxs("div",{className:"cp-qty-group",children:[e.jsx("button",{type:"button",className:"cp-qty-btn",onClick:d,disabled:r<=a,"aria-label":"Decrease quantity",children:e.jsx(o.Minus,{style:{width:14,height:14}})}),e.jsx("input",{type:"number",className:"cp-qty-input",min:a,max:t,value:r,onChange:p=>{const m=parseInt(p.target.value,10);Number.isNaN(m)||c(Math.min(t,Math.max(a,m)))}}),e.jsx("button",{type:"button",className:"cp-qty-btn",onClick:i,disabled:r>=t,"aria-label":"Increase quantity",children:e.jsx(o.Plus,{style:{width:14,height:14}})})]})}function w({item:r,onQuantityChange:a,onRemove:t,removing:c}){const d=r.quantity*r.product.price;return e.jsx("div",{className:"cp-item-row px-3 px-md-4 py-3",children:e.jsxs("div",{className:"row align-items-center g-3",children:[e.jsx("div",{className:"col-12 col-md-5",children:e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("img",{src:`/storage/${r.product.image}`,alt:r.product.name,className:"cp-thumb"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"mb-0 fw-semibold text-truncate",style:{maxWidth:220},children:r.product.name}),e.jsxs("p",{className:"mb-0 cp-muted small",children:["$",Number(r.product.price).toFixed(2)," each"]})]})]})}),e.jsx("div",{className:"col-6 col-md-3 d-flex justify-content-md-center",children:e.jsx(k,{value:r.quantity,min:1,max:r.product.stock??1e3,onChange:i=>a(r.id,i)})}),e.jsx("div",{className:"col-4 col-md-2 text-md-center",children:e.jsxs("span",{className:"display-font fw-bold",children:["$",d.toFixed(2)]})}),e.jsx("div",{className:"col-2 col-md-2 text-end",children:e.jsxs("button",{type:"button",className:"cp-remove-btn btn btn-sm d-inline-flex align-items-center gap-1",onClick:()=>t(r.id),disabled:c===r.id,children:[e.jsx(o.Trash,{style:{width:14,height:14}}),e.jsx("span",{className:"d-none d-md-inline",children:c===r.id?"Removing…":"Remove"})]})})]})})}function N({cartItems:r,flash:a}){const[t,c]=l.useState(r??[]),[d,i]=l.useState(null);l.useEffect(()=>{c(r??[])},[r]);const p=l.useMemo(()=>t.reduce((s,n)=>s+n.quantity*n.product.price,0),[t]),m=l.useMemo(()=>t.reduce((s,n)=>s+n.quantity,0),[t]);function b(s,n){c(f=>f.map(u=>u.id===s?{...u,quantity:n}:u)),x.put(route("cart.update",s),{quantity:n},{preserveScroll:!0,preserveState:!0})}function g(s){i(s),x.delete(route("cart.remove",s),{preserveScroll:!0,onFinish:()=>i(null)})}return e.jsxs("div",{className:"cart-page pb-5",children:[e.jsx(y,{title:"My Cart"}),e.jsx(v,{}),e.jsxs("div",{className:"container py-5",style:{maxWidth:1140},children:[e.jsx("div",{className:"d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4",children:e.jsxs("div",{children:[e.jsxs("p",{className:"cp-eyebrow mb-1 d-flex align-items-center gap-2",children:[e.jsx(o.Cart,{style:{width:14,height:14}})," Cart"]}),e.jsx("h1",{className:"display-font fw-bold mb-0",style:{fontSize:"1.7rem"},children:"My Shopping Cart"})]})}),(a==null?void 0:a.success)&&e.jsxs("div",{className:"cp-alert-success px-3 py-2 mb-4 d-flex align-items-center gap-2",children:[e.jsx(o.Check,{style:{width:16,height:16}}),e.jsx("span",{children:a.success})]}),t.length>0?e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-lg-8",children:e.jsxs("div",{className:"cp-card overflow-hidden",children:[e.jsxs("div",{className:"d-none d-md-flex px-4 py-3 cp-muted small fw-semibold text-uppercase",style:{letterSpacing:"0.04em",borderBottom:"1px solid var(--cp-border)"},children:[e.jsx("span",{className:"col-5",children:"Product"}),e.jsx("span",{className:"col-3 text-center",children:"Quantity"}),e.jsx("span",{className:"col-2 text-center",children:"Total"}),e.jsx("span",{className:"col-2 text-end",children:"Action"})]}),t.map(s=>e.jsx(w,{item:s,onQuantityChange:b,onRemove:g,removing:d},s.id))]})}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsxs("div",{className:"cp-card cp-summary p-4",children:[e.jsx("h2",{className:"display-font fw-bold mb-3",style:{fontSize:"1.1rem"},children:"Order Summary"}),e.jsxs("div",{className:"cp-summary-row",children:[e.jsxs("span",{children:["Items (",m,")"]}),e.jsxs("span",{children:["$",p.toFixed(2)]})]}),e.jsxs("div",{className:"cp-summary-row",children:[e.jsx("span",{children:"Shipping"}),e.jsx("span",{children:"Calculated at checkout"})]}),e.jsxs("div",{className:"cp-summary-total",children:[e.jsx("span",{className:"fw-semibold",children:"Grand Total"}),e.jsxs("span",{className:"display-font fw-bold fs-4",children:["$",p.toFixed(2)]})]}),e.jsxs(h,{href:route("checkout.index"),className:"cp-checkout-btn btn w-100 mt-4 py-2 d-flex align-items-center justify-content-center gap-2",children:[e.jsx(o.Lock,{style:{width:15,height:15}}),"Proceed to Checkout"]}),e.jsx(h,{href:route("user.products.index"),className:"cp-browse-link d-block text-center mt-3 small",children:"Continue shopping"})]})})]}):e.jsxs("div",{className:"cp-empty text-center py-5 px-4",children:[e.jsx("div",{className:"cp-empty-icon",children:e.jsx(o.Bag,{style:{width:26,height:26}})}),e.jsx("h2",{className:"display-font fw-bold mb-2",style:{fontSize:"1.15rem"},children:"Your cart is empty"}),e.jsx("p",{className:"cp-muted mb-3",children:"Looks like you haven't added anything yet."}),e.jsx(h,{href:route("user.products.index"),className:"cp-browse-link",children:"Browse Products"})]})]})]})}N.layout=r=>e.jsx(j,{children:r});export{N as default};
