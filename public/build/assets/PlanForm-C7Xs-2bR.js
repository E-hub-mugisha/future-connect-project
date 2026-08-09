import{j as e,L as l}from"./app-CZoN4D26.js";const u=()=>e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),x=()=>e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z"})}),b=()=>e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m12 19-7-7 7-7M5 12h14"})});function j({mode:s,form:d,onSubmit:f,backHref:p}){const{data:r,setData:i,errors:n,processing:c}=d;function m(a,t){const o=[...r.features];o[a]=t,i("features",o)}function h(){i("features",[...r.features,""])}function g(a){i("features",r.features.filter((t,o)=>o!==a))}return e.jsxs("div",{"data-h-scope":"pricing-plan-form",children:[e.jsx("style",{children:`
        [data-h-scope="pricing-plan-form"] {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1); --accent-glow: rgba(0,166,103,.22);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
          --danger: #dc4c4c; --danger-dim: rgba(220,76,76,.08);
        }
        [data-h-scope="pricing-plan-form"] .pf-wrap { max-width: 720px; margin: 0 auto; padding: 2.5rem 2rem; font-family: 'DM Sans', sans-serif; color: var(--text); }
        [data-h-scope="pricing-plan-form"] .pf-back {
          color: var(--muted); text-decoration: none; font-size: .82rem; display: inline-flex;
          align-items: center; gap: .4rem; margin-bottom: 1.25rem;
        }
        [data-h-scope="pricing-plan-form"] .pf-back:hover { color: var(--accent); }
        [data-h-scope="pricing-plan-form"] .pf-title {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.4rem; color: var(--white); margin-bottom: .3rem;
        }
        [data-h-scope="pricing-plan-form"] .pf-sub { color: var(--muted); font-size: .85rem; margin-bottom: 1.75rem; }

        [data-h-scope="pricing-plan-form"] .pf-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
          padding: 1.75rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(16,32,27,.04);
        }
        [data-h-scope="pricing-plan-form"] .pf-card h3 {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .92rem; color: var(--white);
          margin: 0 0 1.1rem; padding-bottom: .75rem; border-bottom: 1px solid var(--border);
        }

        [data-h-scope="pricing-plan-form"] .pf-field { margin-bottom: 1.1rem; }
        [data-h-scope="pricing-plan-form"] .pf-field:last-child { margin-bottom: 0; }
        [data-h-scope="pricing-plan-form"] .pf-label {
          display: block; font-size: .78rem; font-weight: 600; color: var(--muted); margin-bottom: .4rem;
        }
        [data-h-scope="pricing-plan-form"] .pf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 560px) { [data-h-scope="pricing-plan-form"] .pf-row { grid-template-columns: 1fr; } }

        [data-h-scope="pricing-plan-form"] input[type="text"],
        [data-h-scope="pricing-plan-form"] input[type="number"],
        [data-h-scope="pricing-plan-form"] textarea {
          width: 100%; background: var(--bg-raised); border: 1px solid var(--border);
          color: var(--text); border-radius: 10px; padding: .65rem .9rem; font-size: .88rem;
          font-family: inherit; outline: none; transition: border-color .15s;
        }
        [data-h-scope="pricing-plan-form"] input:focus, [data-h-scope="pricing-plan-form"] textarea:focus { border-color: var(--accent); }
        [data-h-scope="pricing-plan-form"] textarea { resize: vertical; min-height: 80px; }
        [data-h-scope="pricing-plan-form"] .pf-price-input { position: relative; }
        [data-h-scope="pricing-plan-form"] .pf-price-input input { padding-right: 4.2rem; }
        [data-h-scope="pricing-plan-form"] .pf-price-suffix {
          position: absolute; right: .9rem; top: 50%; transform: translateY(-50%);
          font-size: .75rem; color: var(--muted); font-weight: 600; pointer-events: none;
        }

        [data-h-scope="pricing-plan-form"] .pf-error { color: var(--danger); font-size: .75rem; margin-top: .35rem; }

        [data-h-scope="pricing-plan-form"] .pf-feature-row { display: flex; gap: .5rem; margin-bottom: .55rem; align-items: center; }
        [data-h-scope="pricing-plan-form"] .pf-feature-row input { flex: 1; }
        [data-h-scope="pricing-plan-form"] .pf-feature-remove {
          flex-shrink: 0; width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--border);
          background: var(--bg-raised); color: var(--muted); display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .15s;
        }
        [data-h-scope="pricing-plan-form"] .pf-feature-remove:hover { border-color: var(--danger); color: var(--danger); background: var(--danger-dim); }
        [data-h-scope="pricing-plan-form"] .pf-add-feature {
          display: inline-flex; align-items: center; gap: .4rem; background: none; border: 1px dashed var(--border);
          color: var(--accent); font-size: .82rem; font-weight: 600; border-radius: 8px; padding: .5rem .85rem;
          cursor: pointer; margin-top: .25rem; transition: all .15s; width: 100%; justify-content: center;
        }
        [data-h-scope="pricing-plan-form"] .pf-add-feature:hover { background: var(--accent-dim); border-color: var(--accent); }
        [data-h-scope="pricing-plan-form"] .pf-empty-features { font-size: .8rem; color: var(--muted); margin-bottom: .75rem; }

        [data-h-scope="pricing-plan-form"] .pf-toggle-row {
          display: flex; align-items: center; justify-content: space-between; padding: .85rem 0;
          border-bottom: 1px solid var(--border);
        }
        [data-h-scope="pricing-plan-form"] .pf-toggle-row:last-child { border-bottom: none; }
        [data-h-scope="pricing-plan-form"] .pf-toggle-label { font-size: .85rem; font-weight: 600; color: var(--text); }
        [data-h-scope="pricing-plan-form"] .pf-toggle-hint { font-size: .75rem; color: var(--muted); margin-top: .15rem; }
        [data-h-scope="pricing-plan-form"] .pf-switch {
          width: 42px; height: 24px; border-radius: 50px; border: none; cursor: pointer; position: relative;
          background: var(--border); transition: background .2s; flex-shrink: 0;
        }
        [data-h-scope="pricing-plan-form"] .pf-switch.on { background: var(--accent); }
        [data-h-scope="pricing-plan-form"] .pf-switch span {
          position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%;
          background: #fff; transition: transform .2s; box-shadow: 0 1px 2px rgba(0,0,0,.15);
        }
        [data-h-scope="pricing-plan-form"] .pf-switch.on span { transform: translateX(18px); }

        [data-h-scope="pricing-plan-form"] .pf-actions { display: flex; gap: .75rem; margin-top: 1.75rem; }
        [data-h-scope="pricing-plan-form"] .pf-submit {
          background: var(--accent); color: #ffffff; border: none; font-family: 'Syne', sans-serif;
          font-weight: 800; font-size: .88rem; padding: .8rem 1.6rem; border-radius: 10px; cursor: pointer;
          box-shadow: 0 0 20px var(--accent-glow); transition: transform .15s;
        }
        [data-h-scope="pricing-plan-form"] .pf-submit:hover { transform: translateY(-1px); }
        [data-h-scope="pricing-plan-form"] .pf-submit:disabled { opacity: .6; cursor: not-allowed; transform: none; }
        [data-h-scope="pricing-plan-form"] .pf-cancel {
          background: var(--bg-raised); color: var(--text); border: 1px solid var(--border);
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem; padding: .8rem 1.4rem;
          border-radius: 10px; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center;
        }
        [data-h-scope="pricing-plan-form"] .pf-cancel:hover { border-color: var(--muted); }
      `}),e.jsxs("div",{className:"pf-wrap",children:[e.jsxs(l,{href:p,className:"pf-back",children:[e.jsx(b,{})," Back to Pricing Plans"]}),e.jsx("div",{className:"pf-title",children:s==="edit"?"Edit Pricing Plan":"New Pricing Plan"}),e.jsx("div",{className:"pf-sub",children:s==="edit"?"Update plan details, pricing, and features.":"Set up a new plan for the pricing page."}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"pf-card",children:[e.jsx("h3",{children:"Plan Details"}),e.jsxs("div",{className:"pf-field",children:[e.jsx("label",{className:"pf-label",children:"Plan Name"}),e.jsx("input",{type:"text",value:r.name,onChange:a=>i("name",a.target.value),placeholder:"e.g. Professional"}),n.name&&e.jsx("div",{className:"pf-error",children:n.name})]}),e.jsxs("div",{className:"pf-field",children:[e.jsx("label",{className:"pf-label",children:"Description"}),e.jsx("textarea",{value:r.description,onChange:a=>i("description",a.target.value),placeholder:"A short line describing who this plan is for..."}),n.description&&e.jsx("div",{className:"pf-error",children:n.description})]})]}),e.jsxs("div",{className:"pf-card",children:[e.jsx("h3",{children:"Pricing"}),e.jsxs("div",{className:"pf-row",children:[e.jsxs("div",{className:"pf-field",children:[e.jsx("label",{className:"pf-label",children:"Monthly Price"}),e.jsxs("div",{className:"pf-price-input",children:[e.jsx("input",{type:"number",min:"0",step:"0.01",value:r.monthly_price,onChange:a=>i("monthly_price",a.target.value),placeholder:"0.00"}),e.jsx("span",{className:"pf-price-suffix",children:"/ mo"})]}),n.monthly_price&&e.jsx("div",{className:"pf-error",children:n.monthly_price})]}),e.jsxs("div",{className:"pf-field",children:[e.jsx("label",{className:"pf-label",children:"Annual Price"}),e.jsxs("div",{className:"pf-price-input",children:[e.jsx("input",{type:"number",min:"0",step:"0.01",value:r.annual_price,onChange:a=>i("annual_price",a.target.value),placeholder:"0.00"}),e.jsx("span",{className:"pf-price-suffix",children:"/ yr"})]}),n.annual_price&&e.jsx("div",{className:"pf-error",children:n.annual_price})]})]})]}),e.jsxs("div",{className:"pf-card",children:[e.jsx("h3",{children:"Features"}),r.features.length===0&&e.jsx("div",{className:"pf-empty-features",children:"No features added yet."}),r.features.map((a,t)=>e.jsxs("div",{className:"pf-feature-row",children:[e.jsx("input",{type:"text",value:a,onChange:o=>m(t,o.target.value),placeholder:`Feature ${t+1}`}),e.jsx("button",{type:"button",className:"pf-feature-remove",onClick:()=>g(t),children:e.jsx(x,{})})]},t)),e.jsxs("button",{type:"button",className:"pf-add-feature",onClick:h,children:[e.jsx(u,{})," Add Feature"]})]}),e.jsxs("div",{className:"pf-card",children:[e.jsx("h3",{children:"Visibility"}),e.jsxs("div",{className:"pf-toggle-row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"pf-toggle-label",children:"Featured"}),e.jsx("div",{className:"pf-toggle-hint",children:"Highlight this plan as the recommended choice"})]}),e.jsx("button",{type:"button",className:`pf-switch${r.is_featured?" on":""}`,onClick:()=>i("is_featured",!r.is_featured),"aria-pressed":r.is_featured,children:e.jsx("span",{})})]}),e.jsxs("div",{className:"pf-toggle-row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"pf-toggle-label",children:"Active"}),e.jsx("div",{className:"pf-toggle-hint",children:"Show this plan on the public pricing page"})]}),e.jsx("button",{type:"button",className:`pf-switch${r.is_active?" on":""}`,onClick:()=>i("is_active",!r.is_active),"aria-pressed":r.is_active,children:e.jsx("span",{})})]})]}),e.jsxs("div",{className:"pf-actions",children:[e.jsx("button",{type:"submit",className:"pf-submit",disabled:c,children:c?"Saving...":s==="edit"?"Save Changes":"Create Plan"}),e.jsx(l,{href:p,className:"pf-cancel",children:"Cancel"})]})]})]})]})}export{j as default};
