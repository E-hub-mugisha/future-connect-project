import{d as c,j as e,H as p,L as s,a as l}from"./app-BO26Fp_i.js";import{A as m}from"./AppLayout-Do3g3cSn.js";const g=()=>e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),x=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),h=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z"})}),f=()=>e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6Z"})}),u=()=>e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})});function v({plans:r}){const{flash:a}=c().props;function t(i){confirm(`Delete "${i.name}"? This cannot be undone.`)&&l.delete(route("admin.pricing-plans.destroy",i.id),{preserveScroll:!0})}function n(i){return i==null||i===""?null:Number(i).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2})}return e.jsxs("div",{"data-h-scope":"pricing-plans-index",children:[e.jsx(p,{title:"Pricing Plans"}),e.jsx("style",{children:`
        [data-h-scope="pricing-plans-index"] {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1); --accent-glow: rgba(0,166,103,.22);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
          --danger: #dc4c4c; --danger-dim: rgba(220,76,76,.08);
        }
        [data-h-scope="pricing-plans-index"] .pi-wrap { max-width: 1200px; margin: 0 auto; padding: 2.5rem 2rem; font-family: 'DM Sans', sans-serif; color: var(--text); }
        [data-h-scope="pricing-plans-index"] .pi-header {
          display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem;
        }
        [data-h-scope="pricing-plans-index"] .pi-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: var(--white); }
        [data-h-scope="pricing-plans-index"] .pi-sub { color: var(--muted); font-size: .85rem; margin-top: .3rem; }
        [data-h-scope="pricing-plans-index"] .pi-new {
          display: inline-flex; align-items: center; gap: .45rem; background: var(--accent); color: #ffffff;
          border: none; font-family: 'Syne', sans-serif; font-weight: 800; font-size: .85rem;
          padding: .7rem 1.2rem; border-radius: 10px; text-decoration: none; box-shadow: 0 0 20px var(--accent-glow);
          transition: transform .15s;
        }
        [data-h-scope="pricing-plans-index"] .pi-new:hover { transform: translateY(-1px); }

        [data-h-scope="pricing-plans-index"] .pi-flash {
          background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3); color: var(--accent);
          border-radius: 10px; padding: .85rem 1.1rem; font-size: .85rem; margin-bottom: 1.5rem;
        }

        [data-h-scope="pricing-plans-index"] .pi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }

        [data-h-scope="pricing-plans-index"] .pi-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(16,32,27,.04); display: flex; flex-direction: column; position: relative;
        }
        [data-h-scope="pricing-plans-index"] .pi-card.featured { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 8px 24px var(--accent-glow); }
        [data-h-scope="pricing-plans-index"] .pi-card.inactive { opacity: .6; }

        [data-h-scope="pricing-plans-index"] .pi-badges { position: absolute; top: 1.25rem; right: 1.25rem; display: flex; gap: .35rem; }
        [data-h-scope="pricing-plans-index"] .pi-badge {
          display: inline-flex; align-items: center; gap: .3rem; padding: .25rem .6rem; border-radius: 50px;
          font-size: .68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .03em;
        }
        [data-h-scope="pricing-plans-index"] .pi-badge.featured { background: var(--accent-dim); color: var(--accent); }
        [data-h-scope="pricing-plans-index"] .pi-badge.inactive { background: var(--danger-dim); color: var(--danger); }

        [data-h-scope="pricing-plans-index"] .pi-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.15rem; color: var(--white); margin-bottom: .35rem; padding-right: 4rem; }
        [data-h-scope="pricing-plans-index"] .pi-desc { font-size: .82rem; color: var(--muted); margin-bottom: 1.1rem; min-height: 1.2rem; }

        [data-h-scope="pricing-plans-index"] .pi-prices { display: flex; gap: 1.25rem; margin-bottom: 1.1rem; padding-bottom: 1.1rem; border-bottom: 1px solid var(--border); }
        [data-h-scope="pricing-plans-index"] .pi-price-block .pi-price-label { font-size: .68rem; text-transform: uppercase; letter-spacing: .04em; color: var(--muted); margin-bottom: .15rem; }
        [data-h-scope="pricing-plans-index"] .pi-price-block .pi-price-value { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.05rem; color: var(--white); }
        [data-h-scope="pricing-plans-index"] .pi-price-block .pi-price-value.empty { color: var(--muted); font-weight: 600; font-size: .85rem; }

        [data-h-scope="pricing-plans-index"] .pi-features { list-style: none; margin: 0 0 1.25rem; padding: 0; flex: 1; }
        [data-h-scope="pricing-plans-index"] .pi-features li { display: flex; align-items: flex-start; gap: .5rem; font-size: .8rem; color: var(--text); padding: .3rem 0; }
        [data-h-scope="pricing-plans-index"] .pi-features li svg { color: var(--accent); margin-top: .15rem; flex-shrink: 0; }
        [data-h-scope="pricing-plans-index"] .pi-no-features { font-size: .8rem; color: var(--muted); margin-bottom: 1.25rem; }

        [data-h-scope="pricing-plans-index"] .pi-actions { display: flex; gap: .5rem; margin-top: auto; }
        [data-h-scope="pricing-plans-index"] .pi-btn {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: .4rem;
          background: var(--bg-raised); color: var(--text); border: 1px solid var(--border);
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .78rem; padding: .55rem;
          border-radius: 8px; cursor: pointer; text-decoration: none; transition: all .15s;
        }
        [data-h-scope="pricing-plans-index"] .pi-btn:hover { border-color: var(--accent); color: var(--accent); }
        [data-h-scope="pricing-plans-index"] .pi-btn.danger:hover { border-color: var(--danger); color: var(--danger); background: var(--danger-dim); }

        [data-h-scope="pricing-plans-index"] .pi-empty {
          background: var(--bg-card); border: 1px dashed var(--border); border-radius: 16px;
          padding: 3rem 2rem; text-align: center; color: var(--muted); font-size: .88rem;
        }
      `}),e.jsxs("div",{className:"pi-wrap",children:[e.jsxs("div",{className:"pi-header",children:[e.jsxs("div",{children:[e.jsx("div",{className:"pi-title",children:"Pricing Plans"}),e.jsxs("div",{className:"pi-sub",children:[r.length," plan",r.length===1?"":"s"," configured"]})]}),e.jsxs(s,{href:route("admin.pricing-plans.create"),className:"pi-new",children:[e.jsx(g,{})," New Plan"]})]}),(a==null?void 0:a.success)&&e.jsx("div",{className:"pi-flash",children:a.success}),r.length===0?e.jsx("div",{className:"pi-empty",children:"No pricing plans yet. Create your first plan to get started."}):e.jsx("div",{className:"pi-grid",children:r.map(i=>e.jsxs("div",{className:`pi-card${i.is_featured?" featured":""}${i.is_active?"":" inactive"}`,children:[e.jsxs("div",{className:"pi-badges",children:[i.is_featured&&e.jsxs("span",{className:"pi-badge featured",children:[e.jsx(f,{})," Featured"]}),!i.is_active&&e.jsx("span",{className:"pi-badge inactive",children:"Inactive"})]}),e.jsx("div",{className:"pi-name",children:i.name}),e.jsx("div",{className:"pi-desc",children:i.description||"No description"}),e.jsxs("div",{className:"pi-prices",children:[e.jsxs("div",{className:"pi-price-block",children:[e.jsx("div",{className:"pi-price-label",children:"Monthly"}),n(i.monthly_price)?e.jsxs("div",{className:"pi-price-value",children:[n(i.monthly_price)," RWF"]}):e.jsx("div",{className:"pi-price-value empty",children:"Not set"})]}),e.jsxs("div",{className:"pi-price-block",children:[e.jsx("div",{className:"pi-price-label",children:"Annual"}),n(i.annual_price)?e.jsxs("div",{className:"pi-price-value",children:[n(i.annual_price)," RWF"]}):e.jsx("div",{className:"pi-price-value empty",children:"Not set"})]})]}),i.features.length>0?e.jsxs("ul",{className:"pi-features",children:[i.features.slice(0,5).map((o,d)=>e.jsxs("li",{children:[e.jsx(u,{}),o]},d)),i.features.length>5&&e.jsxs("li",{style:{color:"var(--muted)"},children:["+",i.features.length-5," more"]})]}):e.jsx("div",{className:"pi-no-features",children:"No features listed"}),e.jsxs("div",{className:"pi-actions",children:[e.jsxs(s,{href:route("admin.pricing-plans.edit",i.id),className:"pi-btn",children:[e.jsx(x,{})," Edit"]}),e.jsxs("button",{className:"pi-btn danger",onClick:()=>t(i),children:[e.jsx(h,{})," Delete"]})]})]},i.id))})]})]})}v.layout=r=>e.jsx(m,{children:r,title:"Pricing Plans"});export{v as default};
