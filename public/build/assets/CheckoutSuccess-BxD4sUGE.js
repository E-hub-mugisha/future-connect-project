import{j as e,H as a,L as t}from"./app-ClS8wKza.js";import{G as c}from"./GuestLayout-CXbJ8NXm.js";function n({order:s}){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Order Confirmed"}),e.jsx("style",{children:`
        :root {
          --bg-deep: #0e1618; --bg-card: #121d1f; --accent: #48d597;
          --accent-dim: rgba(0,166,103,.15); --border: rgba(255,255,255,.07);
          --text: #f0f4f3; --muted: #7a9490; --white: #ffffff;
        }
        [data-h-theme="light"] {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --accent: #00a667;
          --accent-dim: rgba(0,166,103,.1); --border: rgba(0,100,60,.12);
          --text: #10201b; --muted: #5b7a70; --white: #10201b;
        }
        body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }
        .success-wrap { max-width: 640px; margin: 4rem auto; padding: 0 2rem; text-align: center; }
        .success-icon { width: 72px; height: 72px; border-radius: 50%; background: var(--accent-dim); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--accent); font-size: 2rem; }
        .success-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.6rem; color: var(--white); margin-bottom: .5rem; }
        .success-order-no { color: var(--accent); font-weight: 700; }
        .success-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; margin-top: 2rem; text-align: left; }
        .success-row { display: flex; justify-content: space-between; padding: .6rem 0; border-bottom: 1px solid var(--border); font-size: .9rem; }
        .success-row:last-child { border-bottom: none; }
        .success-row span:first-child { color: var(--muted); }
        .btn-home { display: inline-block; margin-top: 2rem; background: var(--accent); color: var(--white); font-family: 'Syne', sans-serif; font-weight: 700; padding: .8rem 2rem; border-radius: 10px; text-decoration: none; }
      `}),e.jsxs("div",{className:"success-wrap",children:[e.jsx("div",{className:"success-icon",children:e.jsx("i",{className:"fa-solid fa-check"})}),e.jsx("h1",{className:"success-title",children:"Order Placed Successfully!"}),e.jsxs("p",{style:{color:"var(--muted)"},children:["Your order number is ",e.jsx("span",{className:"success-order-no",children:s.order_number}),".",s.user_id?" You can track it from your dashboard.":` A confirmation has been noted for ${s.customer_email}.`]}),e.jsxs("div",{className:"success-card",children:[s.items.map(r=>e.jsxs("div",{className:"success-row",children:[e.jsxs("span",{children:[r.product_name," × ",r.quantity]}),e.jsxs("span",{children:[Number(r.subtotal).toLocaleString()," RWF"]})]},r.id)),e.jsxs("div",{className:"success-row",children:[e.jsx("span",{children:"Payment Method"}),e.jsx("span",{children:s.payment_method.toUpperCase()})]}),e.jsxs("div",{className:"success-row",children:[e.jsx("span",{children:"Total"}),e.jsxs("span",{style:{fontWeight:700,color:"var(--white)"},children:[Number(s.total_amount).toLocaleString()," RWF"]})]})]}),e.jsx(t,{href:"/",className:"btn-home",children:"Back to Home"})]})]})}n.layout=s=>e.jsx(c,{children:s,title:"Order Confirmed"});export{n as default};
