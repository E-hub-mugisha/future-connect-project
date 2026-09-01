import{j as e,H as p,L as u}from"./app-DQcVR1sC.js";import{G as g}from"./GuestLayout-AyS9Rfgz.js";const i={Check:s=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",...s,children:e.jsx("path",{d:"m20 7-11 11-5-5"})}),List:s=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...s,children:e.jsx("path",{d:"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"})}),User:s=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...s,children:[e.jsx("circle",{cx:"12",cy:"8",r:"3.5"}),e.jsx("path",{d:"M4.5 20c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5"})]}),Card:s=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...s,children:[e.jsx("rect",{x:"2.5",y:"5.5",width:"19",height:"13",rx:"2"}),e.jsx("path",{d:"M2.5 10h19"})]}),Pin:s=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...s,children:[e.jsx("path",{d:"M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"}),e.jsx("circle",{cx:"12",cy:"9",r:"2.5"})]}),Phone:s=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...s,children:e.jsx("path",{d:"M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z"})}),Mail:s=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...s,children:[e.jsx("rect",{x:"2.5",y:"4.5",width:"19",height:"15",rx:"2"}),e.jsx("path",{d:"m3 6 9 6 9-6"})]}),Hash:s=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...s,children:e.jsx("path",{d:"M5 9h14M5 15h14M10 4 8 20M16 4l-2 16"})}),Clock:s=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",...s,children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("path",{d:"M12 7v5l3.5 2"})]})},j=()=>e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .order-success-page {
            --os-bg: #f4f7f7;
            --os-panel: #F5f5f7;
            --os-panel-alt: #fafcfc;
            --os-border: rgba(14,22,24,0.08);
            --os-text: #10201f;
            --os-muted: #5c7274;
            --os-shadow: 0 1px 2px rgba(14,22,24,0.04);
        }
        [data-bs-theme="dark"] .order-success-page {
            --os-bg: #0e1618;
            --os-panel: #141f21;
            --os-panel-alt: #182427;
            --os-border: rgba(255,255,255,0.07);
            --os-text: #e7eeee;
            --os-muted: #7f9a9d;
            --os-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .order-success-page {
            --os-green: #00a667;
            --os-green-dark: #008755;
            background: var(--os-bg);
            color: var(--os-text);
            font-family: 'DM Sans', sans-serif;
            min-height: 100vh;
        }
        .order-success-page .display-font { font-family: 'Syne', sans-serif; }
        .os-muted { color: var(--os-muted); }

        .os-check-icon {
            width: 4.5rem; height: 4.5rem;
            border-radius: 999px;
            display: flex; align-items: center; justify-content: center;
            background: color-mix(in srgb, var(--os-green) 14%, transparent);
            color: var(--os-green);
            margin: 0 auto 1.25rem;
        }
        .os-order-number {
            font-weight: 700;
            color: var(--os-green);
        }

        .os-card {
            background: var(--os-panel);
            border: 1px solid var(--os-border);
            border-radius: 1rem;
            box-shadow: var(--os-shadow);
        }
        .os-card-title {
            font-size: 1.05rem;
            display: flex; align-items: center; gap: 0.5rem;
        }

        .os-item-row {
            background: var(--os-panel-alt);
            border-radius: 0.85rem;
            padding: 0.9rem;
        }
        .os-thumb {
            width: 64px; height: 64px; object-fit: cover;
            border-radius: 0.65rem;
            border: 1px solid var(--os-border);
            background: var(--os-panel);
            flex-shrink: 0;
        }

        .os-summary-list { list-style: none; padding: 0; margin: 0; }
        .os-summary-list li {
            display: flex; justify-content: space-between;
            padding: 0.55rem 0;
            border-bottom: 1px solid var(--os-border);
            color: var(--os-muted);
            font-size: 0.92rem;
        }
        .os-summary-list li:last-child { border-bottom: none; }
        .os-summary-list li span { color: var(--os-text); font-weight: 600; }

        .os-total-row {
            display: flex; justify-content: space-between; align-items: baseline;
            padding-top: 1rem; margin-top: 0.5rem;
            border-top: 1px solid var(--os-border);
        }

        .os-billing-row {
            display: flex; align-items: flex-start; gap: 0.6rem;
            padding: 0.4rem 0;
            font-size: 0.92rem;
        }
        .os-billing-row svg { color: var(--os-green); margin-top: 0.15rem; flex-shrink: 0; }

        .os-detail-grid { display: flex; flex-wrap: wrap; gap: 1.5rem; }
        .os-detail-item h6 { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--os-muted); margin-bottom: 0.25rem; }
        .os-detail-item p { margin: 0; font-weight: 600; }

        .os-back-link { color: var(--os-green); font-weight: 600; text-decoration: none; }
        .os-back-link:hover { text-decoration: underline; color: var(--os-green-dark); }
    `});function f(s,o){if(!s)return"N/A";const a=new Date(s);return Number.isNaN(a.getTime())?"N/A":a.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})}function b(s){if(!s)return"N/A";const o=new Date(s);return Number.isNaN(o.getTime())?"N/A":o.toLocaleString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}function v({order:s}){var n,l,d,c;const o=s.items.reduce((r,t)=>r+t.price*t.quantity,0),a=s.items.reduce((r,t)=>r+t.quantity,0);return e.jsxs("div",{className:"order-success-page pb-5",children:[e.jsx(p,{title:"Order Success"}),e.jsx(j,{}),e.jsxs("div",{className:"container py-5",style:{maxWidth:860},children:[e.jsxs("div",{className:"text-center mb-5",children:[e.jsx("div",{className:"os-check-icon",children:e.jsx(i.Check,{style:{width:32,height:32}})}),e.jsx("h1",{className:"display-font fw-bold mb-2",style:{fontSize:"1.5rem"},children:"Thank you! Your order has been received"}),e.jsxs("p",{className:"os-muted mb-0",children:["Order Number: ",e.jsxs("span",{className:"os-order-number",children:["#",s.id]})]})]}),e.jsxs("div",{className:"os-card p-4 mb-4",children:[e.jsxs("h2",{className:"display-font fw-bold os-card-title mb-3",children:[e.jsx(i.List,{style:{width:18,height:18,color:"var(--os-green)"}}),"Order Details"]}),e.jsx("div",{className:"d-flex flex-column gap-2 mb-3",children:s.items.map((r,t)=>{var h,m,x;return e.jsxs("div",{className:"os-item-row d-flex align-items-center gap-3",children:[e.jsx("img",{src:`/storage/${((h=r.product)==null?void 0:h.image)??"default.png"}`,alt:((m=r.product)==null?void 0:m.name)??"Product Deleted",className:"os-thumb"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"mb-1 fw-semibold",children:((x=r.product)==null?void 0:x.name)??"Product Deleted"}),e.jsxs("p",{className:"mb-1 os-muted small",children:["Delivery: ",f(s.delivery_date)]}),e.jsxs("p",{className:"mb-0 small",children:["Price: $",Number(r.price).toFixed(2)," × ",r.quantity," ="," ",e.jsxs("span",{className:"fw-semibold",children:["$",(r.price*r.quantity).toFixed(2)]})]})]})]},r.id??t)})}),e.jsxs("ul",{className:"os-summary-list",children:[e.jsxs("li",{children:["Subtotal ",e.jsxs("span",{children:["$",o.toFixed(2)]})]}),e.jsxs("li",{children:["Quantity ",e.jsx("span",{children:a})]}),s.extras>0&&e.jsxs("li",{children:["Extra Services ",e.jsxs("span",{children:["$",Number(s.extras).toFixed(2)]})]}),s.processing_fee>0&&e.jsxs("li",{children:["Processing Fee ",e.jsxs("span",{children:["$",Number(s.processing_fee).toFixed(2)]})]}),s.tax>0&&e.jsxs("li",{children:["Tax (",s.tax_rate,"%) ",e.jsxs("span",{children:["$",Number(s.tax).toFixed(2)]})]})]}),e.jsxs("div",{className:"os-total-row",children:[e.jsx("span",{className:"fw-semibold",children:"Total"}),e.jsxs("span",{className:"display-font fw-bold fs-4",style:{color:"var(--os-green)"},children:["$",Number(s.total).toFixed(2)]})]})]}),e.jsxs("div",{className:"os-card p-4 mb-4",children:[e.jsxs("h2",{className:"display-font fw-bold os-card-title mb-3",children:[e.jsx(i.User,{style:{width:18,height:18,color:"var(--os-green)"}}),"Billing Information"]}),e.jsx("p",{className:"fw-semibold mb-2",children:(n=s.user)==null?void 0:n.name}),e.jsxs("div",{className:"os-billing-row",children:[e.jsx(i.Pin,{style:{width:15,height:15}}),e.jsx("span",{children:(l=s.user)==null?void 0:l.address})]}),e.jsxs("div",{className:"os-billing-row",children:[e.jsx(i.Phone,{style:{width:15,height:15}}),e.jsx("span",{children:(d=s.user)==null?void 0:d.phone})]}),e.jsxs("div",{className:"os-billing-row",children:[e.jsx(i.Mail,{style:{width:15,height:15}}),e.jsx("span",{children:(c=s.user)==null?void 0:c.email})]})]}),e.jsxs("div",{className:"os-card p-4",children:[e.jsxs("h2",{className:"display-font fw-bold os-card-title mb-3",children:[e.jsx(i.Card,{style:{width:18,height:18,color:"var(--os-green)"}}),"Payment Details"]}),e.jsxs("div",{className:"os-detail-grid",children:[e.jsxs("div",{className:"os-detail-item",children:[e.jsx("h6",{children:"Payment Method"}),e.jsx("p",{children:s.payment_method?s.payment_method.charAt(0).toUpperCase()+s.payment_method.slice(1):"N/A"})]}),e.jsxs("div",{className:"os-detail-item",children:[e.jsxs("h6",{className:"d-flex align-items-center gap-1",children:[e.jsx(i.Hash,{style:{width:12,height:12}})," Transaction ID"]}),e.jsxs("p",{children:["#",s.transaction_ref]})]}),e.jsxs("div",{className:"os-detail-item",children:[e.jsxs("h6",{className:"d-flex align-items-center gap-1",children:[e.jsx(i.Clock,{style:{width:12,height:12}})," Time & Date"]}),e.jsx("p",{children:b(s.created_at)})]})]})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsx(u,{href:route("user.products.index"),className:"os-back-link",children:"Continue Shopping"})})]})]})}v.layout=s=>e.jsx(g,{children:s});export{v as default};
