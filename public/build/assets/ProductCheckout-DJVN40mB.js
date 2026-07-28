import{d as j,r as w,u as N,j as e,H as k,L as _}from"./app-ClS8wKza.js";import{G as q}from"./GuestLayout-CXbJ8NXm.js";function C({product:s,quantity:m}){var h,g,x;const{auth:i}=j().props,d=!(i!=null&&i.user),[n,b]=w.useState(m||1),{data:t,setData:o,post:f,processing:p,errors:a}=N({quantity:m||1,customer_name:((h=i==null?void 0:i.user)==null?void 0:h.name)??"",customer_email:((g=i==null?void 0:i.user)==null?void 0:g.email)??"",customer_phone:"",province:"",district:"",sector:"",cell:"",shipping_address:"",payment_method:"momo",payment_phone:"",notes:""}),u=s.stock??1e3;function c(r){const l=Math.max(1,Math.min(u,r));b(l),o("quantity",l)}function v(r){r.preventDefault(),f(route("checkout.store",s.slug))}const y=(Number(s.price)*Number(n||1)).toFixed(2);return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:`Checkout — ${s.name}`}),e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --bg-deep:    #0e1618;
          --bg-card:    #121d1f;
          --bg-raised:  #172224;
          --accent:     #48d597;
          --accent-dim: rgba(0,166,103,.15);
          --accent-glow:rgba(0,166,103,.35);
          --border:     rgba(255,255,255,.07);
          --text:       #f0f4f3;
          --muted:      #7a9490;
          --white:      #ffffff;
          --danger:     #f87171;
        }

        * { box-sizing: border-box; }
        body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }

        .co-wrapper { max-width: 1100px; margin: 0 auto; padding: 2.5rem 2rem; }
        .co-grid { display: grid; grid-template-columns: 1fr 360px; gap: 2rem; align-items: start; }
        @media (max-width: 1024px) { .co-grid { grid-template-columns: 1fr; } }

        .co-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.6rem; color: var(--white); margin-bottom: .35rem; }
        .co-subtitle { color: var(--muted); font-size: .9rem; margin-bottom: 2rem; }

        .guest-banner {
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
          border-radius: 14px; padding: 1rem 1.25rem; margin-bottom: 1.75rem;
        }
        .guest-banner p { font-size: .85rem; color: var(--text); margin: 0; }
        .guest-banner strong { color: var(--accent); }
        .guest-banner a {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .8rem;
          color: var(--accent); text-decoration: none; white-space: nowrap;
          border: 1px solid rgba(0,166,103,.3); padding: .5rem 1rem; border-radius: 8px;
          transition: all .2s;
        }
        .guest-banner a:hover { background: var(--accent); color: var(--white); }

        .form-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; padding: 1.75rem;
        }
        .section-title {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem;
          color: var(--white); margin: 0 0 1.1rem;
          padding-bottom: .75rem; border-bottom: 1px solid var(--border);
        }
        .section-title:not(:first-child) { margin-top: 1.75rem; }

        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 560px) { .field-row { grid-template-columns: 1fr; } }

        .field { margin-bottom: 1.1rem; }
        .field label { display: block; font-size: .78rem; color: var(--muted); margin-bottom: .4rem; font-weight: 500; }
        .field input, .field textarea {
          width: 100%; background: var(--bg-raised); border: 1px solid var(--border);
          color: var(--text); border-radius: 10px; padding: .7rem .9rem;
          font-family: 'DM Sans', sans-serif; font-size: .9rem; outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .field input:disabled { opacity: .6; cursor: not-allowed; }
        .field input:focus, .field textarea:focus {
          border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-dim);
        }
        .field-error { color: var(--danger); font-size: .75rem; margin-top: .35rem; display: block; }

        .payment-options { display: flex; gap: .75rem; flex-wrap: wrap; margin-bottom: .25rem; }
        .payment-opt {
          flex: 1; min-width: 140px; border: 1px solid var(--border); border-radius: 10px;
          padding: .8rem 1rem; cursor: pointer; transition: all .2s;
          display: flex; align-items: center; gap: .6rem;
        }
        .payment-opt.selected { border-color: var(--accent); background: var(--accent-dim); }
        .payment-opt input { width: auto; }
        .payment-opt span { font-size: .85rem; font-weight: 600; color: var(--text); }

        .sidebar-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; overflow: hidden; position: sticky; top: 1.5rem;
        }
        .summary-product { display: flex; gap: 1rem; padding: 1.5rem; border-bottom: 1px solid var(--border); }
        .summary-img { width: 72px; height: 72px; border-radius: 12px; object-fit: cover; flex-shrink: 0; }
        .summary-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .92rem; color: var(--white); margin-bottom: .3rem; }
        .summary-cat { font-size: .75rem; color: var(--muted); }

        .qty-block { padding: 1.5rem; border-bottom: 1px solid var(--border); }
        .qty-block label { font-size: .78rem; color: var(--muted); display: block; margin-bottom: .6rem; }
        .qty-control { display: flex; align-items: center; gap: 0; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; width: fit-content; }
        .qty-btn { width: 36px; height: 40px; background: var(--bg-raised); border: none; color: var(--text); font-size: 1rem; cursor: pointer; transition: all .2s; }
        .qty-btn:hover { background: var(--accent-dim); color: var(--accent); }
        .qty-num { width: 56px; height: 40px; text-align: center; background: var(--bg-deep); border: none; border-left: 1px solid var(--border); border-right: 1px solid var(--border); color: var(--white); font-family: 'Syne', sans-serif; font-weight: 700; outline: none; }
        .stock-note { font-size: .75rem; color: var(--muted); margin-top: .6rem; }

        .totals-block { padding: 1.5rem; }
        .totals-row { display: flex; justify-content: space-between; font-size: .85rem; color: var(--muted); margin-bottom: .6rem; }
        .totals-row.grand { font-size: 1.05rem; color: var(--white); font-family: 'Syne', sans-serif; font-weight: 800; margin-top: .75rem; padding-top: .75rem; border-top: 1px solid var(--border); }
        .totals-row.grand span:last-child { color: var(--accent); }

        .btn-place-order {
          display: flex; align-items: center; justify-content: center; gap: .5rem;
          background: var(--accent); color: var(--white);
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: .95rem;
          padding: .9rem; border-radius: 10px; border: none; cursor: pointer;
          width: 100%; margin-top: 1.25rem;
          box-shadow: 0 0 24px var(--accent-glow); transition: all .25s;
        }
        .btn-place-order:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 0 36px var(--accent-glow); }
        .btn-place-order:disabled { opacity: .65; cursor: not-allowed; }

        [data-h-theme="light"] {
          --bg-deep:    #f6faf8;
          --bg-card:    #ffffff;
          --bg-raised:  #eef4f1;
          --accent:     #00a667;
          --accent-dim: rgba(0, 166, 103, 0.1);
          --accent-glow:rgba(0, 166, 103, 0.22);
          --border:     rgba(0, 100, 60, 0.12);
          --text:       #10201b;
          --muted:      #5b7a70;
          --white:      #10201b;
        }
      `}),e.jsxs("div",{className:"co-wrapper",children:[e.jsx("h1",{className:"co-title",children:"Checkout"}),e.jsxs("p",{className:"co-subtitle",children:["Complete your order for ",s.name]}),d&&e.jsxs("div",{className:"guest-banner",children:[e.jsxs("p",{children:["You're checking out as a ",e.jsx("strong",{children:"guest"}),". No account needed — but logging in lets you track this order later."]}),e.jsx(_,{href:route("login"),children:"Log In Instead"})]}),e.jsx("form",{onSubmit:v,children:e.jsxs("div",{className:"co-grid",children:[e.jsxs("div",{className:"form-card",children:[e.jsx("h3",{className:"section-title",children:"Contact Details"}),e.jsxs("div",{className:"field-row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Full Name"}),e.jsx("input",{type:"text",value:t.customer_name,onChange:r=>o("customer_name",r.target.value),disabled:!d,required:!0}),a.customer_name&&e.jsx("span",{className:"field-error",children:a.customer_name})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{type:"email",value:t.customer_email,onChange:r=>o("customer_email",r.target.value),disabled:!d,required:!0}),a.customer_email&&e.jsx("span",{className:"field-error",children:a.customer_email})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Phone Number (e.g. 0788123456)"}),e.jsx("input",{type:"text",placeholder:"07XXXXXXXX",value:t.customer_phone,onChange:r=>o("customer_phone",r.target.value),required:!0}),a.customer_phone&&e.jsx("span",{className:"field-error",children:a.customer_phone})]}),e.jsx("h3",{className:"section-title",children:"Shipping Location"}),e.jsxs("div",{className:"field-row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Province"}),e.jsx("input",{type:"text",value:t.province,onChange:r=>o("province",r.target.value),required:!0}),a.province&&e.jsx("span",{className:"field-error",children:a.province})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"District"}),e.jsx("input",{type:"text",value:t.district,onChange:r=>o("district",r.target.value),required:!0}),a.district&&e.jsx("span",{className:"field-error",children:a.district})]})]}),e.jsxs("div",{className:"field-row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Sector"}),e.jsx("input",{type:"text",value:t.sector,onChange:r=>o("sector",r.target.value),required:!0}),a.sector&&e.jsx("span",{className:"field-error",children:a.sector})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Cell (optional)"}),e.jsx("input",{type:"text",value:t.cell,onChange:r=>o("cell",r.target.value)})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Delivery Address / Landmark"}),e.jsx("textarea",{rows:"3",placeholder:"Street, house number, or nearby landmark",value:t.shipping_address,onChange:r=>o("shipping_address",r.target.value),required:!0}),a.shipping_address&&e.jsx("span",{className:"field-error",children:a.shipping_address})]}),e.jsx("h3",{className:"section-title",children:"Payment Method"}),e.jsx("div",{className:"payment-options",children:[{value:"momo",label:"MTN MoMo"},{value:"airtel",label:"Airtel Money"},{value:"cash",label:"Cash on Delivery"}].map(r=>e.jsxs("label",{className:`payment-opt${t.payment_method===r.value?" selected":""}`,children:[e.jsx("input",{type:"radio",name:"payment_method",value:r.value,checked:t.payment_method===r.value,onChange:l=>o("payment_method",l.target.value)}),e.jsx("span",{children:r.label})]},r.value))}),a.payment_method&&e.jsx("span",{className:"field-error",children:a.payment_method}),(t.payment_method==="momo"||t.payment_method==="airtel")&&e.jsxs("div",{className:"field",style:{marginTop:"1rem"},children:[e.jsxs("label",{children:[t.payment_method==="momo"?"MTN":"Airtel"," Number to Charge"]}),e.jsx("input",{type:"text",placeholder:"07XXXXXXXX",value:t.payment_phone,onChange:r=>o("payment_phone",r.target.value),required:!0}),a.payment_phone&&e.jsx("span",{className:"field-error",children:a.payment_phone})]}),e.jsxs("div",{className:"field",style:{marginTop:"1rem"},children:[e.jsx("label",{children:"Order Notes (optional)"}),e.jsx("textarea",{rows:"2",placeholder:"Any delivery instructions...",value:t.notes,onChange:r=>o("notes",r.target.value)})]})]}),e.jsxs("div",{className:"sidebar-card",children:[e.jsxs("div",{className:"summary-product",children:[e.jsx("img",{src:s.image?`/storage/${s.image}`:"/assets/img/service/service-slide-01.jpg",alt:s.name,className:"summary-img"}),e.jsxs("div",{children:[e.jsx("div",{className:"summary-name",children:s.name}),e.jsx("div",{className:"summary-cat",children:((x=s.category)==null?void 0:x.name)??"Uncategorized"})]})]}),e.jsxs("div",{className:"qty-block",children:[e.jsx("label",{children:"Quantity"}),e.jsxs("div",{className:"qty-control",children:[e.jsx("button",{type:"button",className:"qty-btn",onClick:()=>c(n-1),children:"−"}),e.jsx("input",{type:"number",className:"qty-num",value:n,min:"1",max:u,onChange:r=>c(Number(r.target.value)||1)}),e.jsx("button",{type:"button",className:"qty-btn",onClick:()=>c(n+1),children:"+"})]}),a.quantity&&e.jsx("span",{className:"field-error",children:a.quantity}),e.jsxs("div",{className:"stock-note",children:[s.stock??"Unlimited"," in stock"]})]}),e.jsxs("div",{className:"totals-block",children:[e.jsxs("div",{className:"totals-row",children:[e.jsx("span",{children:"Price per unit"}),e.jsxs("span",{children:[Number(s.price).toLocaleString()," RWF"]})]}),e.jsxs("div",{className:"totals-row",children:[e.jsx("span",{children:"Quantity"}),e.jsxs("span",{children:["× ",n]})]}),e.jsxs("div",{className:"totals-row grand",children:[e.jsx("span",{children:"Total"}),e.jsxs("span",{children:[Number(y).toLocaleString()," RWF"]})]}),e.jsxs("button",{type:"submit",className:"btn-place-order",disabled:p,children:[e.jsx("i",{className:"feather-check-circle"})," ",p?"Placing Order...":"Place Order"]})]})]})]})})]})]})}C.layout=s=>e.jsx(q,{children:s,title:"Product Checkout"});export{C as default};
