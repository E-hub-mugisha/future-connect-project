import{d as l,j as e,H as m,L as f,a as c}from"./app-CgjB0zLb.js";import{A as p}from"./AppLayout-BhRRfzUA.js";function h({order:s}){var t,o;const{flash:a}=l().props;function d(){c.patch(route("admin.orders.confirm",s.id))}function n(r){c.patch(route("admin.orders.status",s.id),{status:r})}const i={pending:{bg:"rgba(245,158,11,.15)",color:"#f59e0b"},processing:{bg:"rgba(0,166,103,.15)",color:"#48d597"},completed:{bg:"rgba(59,130,246,.15)",color:"#3b82f6"},cancelled:{bg:"rgba(248,113,113,.15)",color:"#f87171"}};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:`Order ${s.order_number}`}),e.jsx("style",{children:`
        :root {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1); --accent-glow: rgba(0,166,103,.22);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
        }
        [data-h-theme="dark"] {
          --bg-deep: #0e1618; --bg-card: #121d1f; --bg-raised: #172224;
          --accent: #48d597; --accent-dim: rgba(0,166,103,.15); --accent-glow: rgba(0,166,103,.35);
          --border: rgba(255,255,255,.07); --text: #f0f4f3; --muted: #7a9490; --white: #ffffff;
        }
        body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }
        .os-wrap { max-width: 1000px; margin: 0 auto; padding: 2.5rem 2rem; }
        .os-back { color: var(--muted); text-decoration: none; font-size: .82rem; display: inline-flex; align-items: center; gap: .4rem; margin-bottom: 1.25rem; }
        .os-back:hover { color: var(--accent); }

        .os-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem; }
        .os-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.4rem; color: var(--white); }
        .os-sub { color: var(--muted); font-size: .82rem; margin-top: .3rem; }
        .badge { display: inline-block; padding: .35rem .9rem; border-radius: 50px; font-size: .78rem; font-weight: 700; text-transform: capitalize; }

        .flash-banner { background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3); color: var(--accent); border-radius: 10px; padding: .85rem 1.1rem; font-size: .85rem; margin-bottom: 1.5rem; }

        .os-grid { display: grid; grid-template-columns: 1fr 320px; gap: 1.75rem; align-items: start; }
        @media (max-width: 900px) { .os-grid { grid-template-columns: 1fr; } }

        .card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(16,32,27,.04); }
        .card h3 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .95rem; color: var(--white); margin: 0 0 1rem; padding-bottom: .75rem; border-bottom: 1px solid var(--border); }

        .info-row { display: flex; justify-content: space-between; padding: .5rem 0; font-size: .85rem; border-bottom: 1px solid var(--border); }
        .info-row:last-child { border-bottom: none; }
        .info-row span:first-child { color: var(--muted); }
        .info-row span:last-child { color: var(--text); font-weight: 500; text-align: right; }

        .item-row { display: flex; justify-content: space-between; align-items: center; padding: .85rem 0; border-bottom: 1px solid var(--border); }
        .item-row:last-child { border-bottom: none; }
        .item-name { font-weight: 600; color: var(--text); font-size: .88rem; }
        .item-meta { font-size: .75rem; color: var(--muted); }
        .item-sub { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); }

        .totals-row { display: flex; justify-content: space-between; font-size: .9rem; padding: .4rem 0; }
        .totals-row.grand { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; color: var(--white); border-top: 1px solid var(--border); margin-top: .5rem; padding-top: .75rem; }
        .totals-row.grand span:last-child { color: var(--accent); }

        .btn-confirm {
          width: 100%; background: var(--accent); color: #ffffff; border: none;
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: .9rem;
          padding: .85rem; border-radius: 10px; cursor: pointer; margin-bottom: .6rem;
          box-shadow: 0 0 24px var(--accent-glow); transition: all .25s;
        }
        .btn-confirm:hover { transform: translateY(-2px); }
        .btn-secondary {
          width: 100%; background: var(--bg-raised); color: var(--text); border: 1px solid var(--border);
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem;
          padding: .75rem; border-radius: 10px; cursor: pointer; margin-bottom: .5rem; transition: all .2s;
        }
        .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
        .btn-danger:hover { border-color: #f87171; color: #f87171; }
        .confirmed-note { font-size: .78rem; color: var(--muted); text-align: center; margin-top: .5rem; }
      `}),e.jsxs("div",{className:"os-wrap",children:[e.jsx(f,{href:route("admin.orders.index"),className:"os-back",children:"← Back to Orders"}),(a==null?void 0:a.success)&&e.jsx("div",{className:"flash-banner",children:a.success}),e.jsxs("div",{className:"os-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"os-title",children:s.order_number}),e.jsxs("div",{className:"os-sub",children:["Placed on ",new Date(s.created_at).toLocaleString()]})]}),e.jsx("span",{className:"badge",style:{background:(t=i[s.status])==null?void 0:t.bg,color:(o=i[s.status])==null?void 0:o.color},children:s.status})]}),e.jsxs("div",{className:"os-grid",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Customer"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Name"}),e.jsx("span",{children:s.customer_name})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Email"}),e.jsx("span",{children:s.customer_email})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Phone"}),e.jsx("span",{children:s.customer_phone})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Account Type"}),e.jsx("span",{children:s.user?`Registered (${s.user.email})`:"Guest Checkout"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Shipping"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Province"}),e.jsx("span",{children:s.province})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"District"}),e.jsx("span",{children:s.district})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Sector"}),e.jsx("span",{children:s.sector})]}),s.cell&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Cell"}),e.jsx("span",{children:s.cell})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Address"}),e.jsx("span",{children:s.shipping_address})]}),s.notes&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Notes"}),e.jsx("span",{children:s.notes})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Items"}),s.items.map(r=>e.jsxs("div",{className:"item-row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"item-name",children:r.product_name}),e.jsxs("div",{className:"item-meta",children:[Number(r.price).toLocaleString()," RWF × ",r.quantity]})]}),e.jsxs("div",{className:"item-sub",children:[Number(r.subtotal).toLocaleString()," RWF"]})]},r.id))]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Payment"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Method"}),e.jsx("span",{style:{textTransform:"uppercase"},children:s.payment_method})]}),s.payment_phone&&e.jsxs("div",{className:"info-row",children:[e.jsx("span",{children:"Charge Number"}),e.jsx("span",{children:s.payment_phone})]}),e.jsxs("div",{className:"totals-row grand",children:[e.jsx("span",{children:"Total"}),e.jsxs("span",{children:[Number(s.total_amount).toLocaleString()," RWF"]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Actions"}),s.status==="pending"&&e.jsx("button",{className:"btn-confirm",onClick:d,children:"✓ Confirm Order"}),s.status==="processing"&&e.jsx("button",{className:"btn-secondary",onClick:()=>n("completed"),children:"Mark as Completed"}),(s.status==="pending"||s.status==="processing")&&e.jsx("button",{className:"btn-secondary btn-danger",onClick:()=>n("cancelled"),children:"Cancel Order"}),s.confirmed_at&&e.jsxs("div",{className:"confirmed-note",children:["Confirmed ",new Date(s.confirmed_at).toLocaleString(),s.confirmed_by&&` by ${s.confirmed_by.name}`]})]})]})]})]})]})}h.layout=s=>e.jsx(p,{children:s,title:`Order ${s.props.order.order_number}`});export{h as default};
