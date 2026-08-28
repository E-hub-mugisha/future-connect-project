import{r as c,u as v,j as e,H as k,L as N,R as z}from"./app-CzHhKsxF.js";import{G as S}from"./GuestLayout-XZ7pV8zu.js";function u(p,i){try{return route(p,i)}catch{return console.warn(`route("${p}") failed — Ziggy config not found. Make sure @routes is included in resources/views/app.blade.php (in <head>, before the Inertia app div).`),"#"}}function M(){z.useEffect(()=>{const p=document.documentElement,i="fc-theme";function a(o){o==="light"?p.setAttribute("data-h-theme","light"):p.removeAttribute("data-h-theme")}function s(){const o=localStorage.getItem(i);return o==="light"||o==="dark"?o:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.querySelector("#fcThemeToggle, [data-theme-toggle]")||a(s());function r(o){o.key===i&&a(o.newValue==="light"?"light":"dark")}return window.addEventListener("storage",r),()=>window.removeEventListener("storage",r)},[])}function P(p,i){var a;return((a=p.prices)==null?void 0:a.find(s=>s.billing_cycle===i))||null}function C({plans:p=[],auth:i=null}){M();const[a,s]=c.useState("annually"),[r,o]=c.useState(null),d=c.useRef(null),l=c.useRef(null),h=v({}),m=v({plan_id:"",billing_cycle:""});c.useEffect(()=>(window.bootstrap&&d.current&&(l.current=new window.bootstrap.Modal(d.current),d.current.addEventListener("hidden.bs.modal",()=>o(null))),()=>{var t;return(t=l.current)==null?void 0:t.dispose()}),[]);const y=(t,n,x)=>{var b;o({id:t.id,name:t.name,price:n.price??n.amount,cycle:x}),m.setData({plan_id:t.id,billing_cycle:x}),(b=l.current)==null||b.show()},f=()=>{var t;return(t=l.current)==null?void 0:t.hide()},w=t=>{t.preventDefault(),m.post(u("subscribe"),{onSuccess:()=>{var n;return(n=l.current)==null?void 0:n.hide()}})},j=t=>{t.preventDefault(),h.post(u("trial.activate"))},g=p.map(t=>({plan:t,price:P(t,a)})).filter(t=>t.price);return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Pricing Plan"}),e.jsx("style",{children:`
        .pp-page * { box-sizing: border-box; }

        /* Dark theme (default — matches the rest of the site's dark mode) */
        .pp-page {
          --pp-bg: #0e1618;
          --pp-surface: #131e21;
          --pp-border: #223338;
          --pp-border-soft: #1a2a2e;
          --pp-accent: #48d597;
          --pp-accent-dark: #2fb87d;
          --pp-accent-tint: rgba(72, 213, 151, 0.12);
          --pp-text: #f0f4f3;
          --pp-text-soft: #dce8e6;
          --pp-muted: #8da4a0;
          --pp-muted2: #62787a;
          --pp-badge-bg: rgba(72, 213, 151, 0.12);
          --pp-badge-border: rgba(72, 213, 151, 0.3);
          --pp-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
          --pp-shadow-hover: 0 16px 36px rgba(0, 0, 0, 0.45);
          background: var(--pp-bg);
          font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;
          transition: background 0.2s;
        }

        /* Light theme override — toggled via data-h-theme="light" on <html>,
           the same attribute the header's theme switch sets. */
        [data-h-theme="light"] .pp-page {
          --pp-bg: #f7f8fa;
          --pp-surface: #ffffff;
          --pp-border: #e4e7eb;
          --pp-border-soft: #edeff2;
          --pp-accent: #00a667;
          --pp-accent-dark: #00814f;
          --pp-accent-tint: #eafbe7;
          --pp-text: #1a1a1a;
          --pp-text-soft: #2c2c2c;
          --pp-muted: #5e6b74;
          --pp-muted2: #8a97a0;
          --pp-badge-bg: #eafbe7;
          --pp-badge-border: #b8ebae;
          --pp-shadow: 0 1px 2px rgba(20, 24, 28, 0.04);
          --pp-shadow-hover: 0 12px 28px rgba(20, 24, 28, 0.08);
        }

        .pp-eyebrow {
          display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600;
          color: var(--pp-accent-dark); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px;
        }

        /* ===== TRIAL BANNER ===== */
        .pp-trial-banner {
          background: var(--pp-surface);
          border: 1px solid var(--pp-border);
          border-radius: 12px;
          padding: 40px 40px;
          margin: 32px 0;
          box-shadow: var(--pp-shadow);
        }
        .pp-trial-image img { max-height: 220px; object-fit: contain; }
        .pp-trial-banner h2 { font-size: 24px; font-weight: 700; color: var(--pp-text); line-height: 1.3; margin-bottom: 8px; }
        .pp-trial-banner p { font-size: 14px; color: var(--pp-muted); margin-bottom: 20px; }

        .pp-btn-primary {
          display: inline-flex; align-items: center; gap: 8px; background: var(--pp-accent); color: #fff;
          border: none; padding: 12px 26px; border-radius: 6px; font-size: 14px; font-weight: 600;
          text-decoration: none; cursor: pointer; transition: background 0.15s;
        }
        .pp-btn-primary:hover { background: var(--pp-accent-dark); color: #fff; }
        .pp-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

        .pp-btn-outline {
          display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--pp-text-soft);
          border: 1px solid var(--pp-border); padding: 11px 22px; border-radius: 6px; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: border-color 0.15s, color 0.15s;
        }
        .pp-btn-outline:hover { border-color: var(--pp-muted2); color: var(--pp-text); }

        .pp-trial-note { display: block; font-size: 12.5px; color: var(--pp-muted2); margin-top: 14px; }

        /* ===== PRICING SECTION ===== */
        .pp-price-section { padding: 48px 0 88px; }

        .pp-section-head { text-align: center; max-width: 560px; margin: 0 auto 40px; }
        .pp-section-head h1 { font-size: 32px; font-weight: 700; color: var(--pp-text); margin-bottom: 10px; }
        .pp-section-head p { font-size: 15px; color: var(--pp-muted); }

        /* Billing switch — pill style */
        .pp-billing-switch {
          display: inline-flex; align-items: center; gap: 4px; background: var(--pp-surface);
          border: 1px solid var(--pp-border); border-radius: 999px; padding: 4px; box-shadow: var(--pp-shadow);
        }
        .pp-billing-switch button {
          border: none; background: transparent; padding: 9px 22px; border-radius: 999px; font-size: 13.5px;
          font-weight: 600; color: var(--pp-muted); cursor: pointer; transition: background 0.15s, color 0.15s;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .pp-billing-switch button.active { background: var(--pp-accent); color: #fff; }
        .pp-billing-switch .pp-save-tag {
          font-size: 10.5px; font-weight: 700; background: rgba(255,255,255,0.25); padding: 1px 6px; border-radius: 999px;
        }
        .pp-billing-switch button:not(.active) .pp-save-tag { background: var(--pp-accent-tint); color: var(--pp-accent-dark); }

        .pp-switch-wrap { display: flex; justify-content: center; margin-bottom: 44px; }

        /* Price cards */
        .pp-price-card {
          background: var(--pp-surface); border: 1px solid var(--pp-border); border-radius: 14px;
          padding: 32px 28px; height: 100%; display: flex; flex-direction: column;
          box-shadow: var(--pp-shadow); transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
        }
        .pp-price-card:hover { box-shadow: var(--pp-shadow-hover); transform: translateY(-2px); }
        .pp-price-card.featured { border: 2px solid var(--pp-accent); position: relative; }
        .pp-featured-ribbon {
          position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
          background: var(--pp-accent); color: #fff; font-size: 11px; font-weight: 700;
          letter-spacing: 0.04em; text-transform: uppercase; padding: 5px 16px; border-radius: 999px;
          box-shadow: 0 4px 10px rgba(20, 168, 0, 0.3);
        }

        .pp-plan-name { font-size: 18px; font-weight: 700; color: var(--pp-text); margin: 0 0 4px; }
        .pp-plan-subtitle { font-size: 13px; color: var(--pp-muted); margin: 0 0 20px; }

        .pp-amount-row { display: flex; align-items: baseline; gap: 6px; margin-bottom: 4px; }
        .pp-amount-row .pp-amount { font-size: 38px; font-weight: 800; color: var(--pp-text); line-height: 1; }
        .pp-amount-row .pp-cycle { font-size: 13.5px; color: var(--pp-muted); }
        .pp-limit-text { font-size: 12.5px; color: var(--pp-muted2); margin-bottom: 24px; }

        .pp-divider { border: none; border-top: 1px solid var(--pp-border-soft); margin: 0 0 22px; }

        .pp-features-label { font-size: 11px; font-weight: 700; color: var(--pp-muted2); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 14px; }
        .pp-features { flex: 1; list-style: none; margin: 0 0 26px; padding: 0; display: flex; flex-direction: column; gap: 11px; }
        .pp-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 13.5px; color: var(--pp-text-soft); line-height: 1.5; }
        .pp-features li .pp-check {
          width: 18px; height: 18px; border-radius: 50%; background: var(--pp-accent-tint); color: var(--pp-accent-dark);
          display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; margin-top: 1px;
        }

        .pp-choose-btn {
          margin-top: auto; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px 20px; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer;
          border: 1.5px solid var(--pp-accent); background: transparent; color: var(--pp-accent-dark);
          transition: background 0.15s, color 0.15s;
        }
        .pp-choose-btn:hover { background: var(--pp-accent-tint); }
        .pp-price-card.featured .pp-choose-btn { background: var(--pp-accent); color: #fff; }
        .pp-price-card.featured .pp-choose-btn:hover { background: var(--pp-accent-dark); }

        .pp-empty-state { text-align: center; padding: 60px 20px; color: var(--pp-muted); }

        /* ===== MODAL (Bootstrap's own .modal component, themed with the
           same --pp-* variables as the rest of this page) ===== */
        #confirmPlanModal .modal-content {
          background: var(--pp-surface) !important;
          border: 1px solid var(--pp-border) !important;
          border-radius: 14px !important;
          overflow: hidden;
        }
        #confirmPlanModal .modal-header {
          background: var(--pp-accent-tint) !important;
          border-bottom: 1px solid var(--pp-border-soft) !important;
          padding: 20px 24px;
        }
        #confirmPlanModal .modal-title { font-size: 16px; font-weight: 700; color: var(--pp-text); }
        #confirmPlanModal .btn-close-white {
          filter: invert(1) grayscale(1) brightness(2);
          opacity: 0.6;
        }
        [data-h-theme="light"] #confirmPlanModal .btn-close-white { filter: none; }
        #confirmPlanModal .btn-close-white:hover { opacity: 1; }
        #confirmPlanModal .modal-body { padding: 24px; background: var(--pp-surface); }
        #confirmPlanModal .modal-body p.pp-lead { font-size: 13px; color: var(--pp-muted); margin-bottom: 8px; }
        #confirmPlanModal .modal-body h4 { font-size: 19px; font-weight: 700; color: var(--pp-text); margin: 0 0 4px; }
        #confirmPlanModal .modal-body .pp-price-line { font-size: 13px; color: var(--pp-muted2); margin-bottom: 16px; }
        #confirmPlanModal .pp-modal-alert {
          background: var(--pp-accent-tint); border: 1px solid var(--pp-badge-border); color: var(--pp-accent-dark);
          border-radius: 8px; font-size: 13px; padding: 12px 16px;
        }
        #confirmPlanModal .modal-footer {
          background: var(--pp-bg); border-top: 1px solid var(--pp-border-soft) !important; padding: 16px 24px;
          display: flex; gap: 10px; justify-content: flex-end;
        }

        @media (max-width: 767px) {
          .pp-trial-banner { padding: 28px 24px; }
          .pp-section-head h1 { font-size: 26px; }
        }
      `}),e.jsxs("div",{className:"pp-page",children:[e.jsx("div",{className:"container mt-4",children:e.jsx("div",{className:"pp-trial-banner",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-lg-7",children:e.jsx("div",{className:"pp-trial-image position-relative d-lg-block d-none text-center",children:e.jsx("img",{src:"/assets/img/home/jointeam.svg",alt:"Join Future Connect",className:"img-fluid"})})}),e.jsxs("div",{className:"col-lg-5",children:[e.jsx("span",{className:"pp-eyebrow",children:"Free Trial"}),e.jsx("h2",{children:"Start with a 7-day free trial"}),e.jsx("p",{children:"Access all basic features — no commitment required."}),!i&&e.jsx(N,{href:u("trial.start"),className:"pp-btn-primary",children:"Start Free Trial"}),i&&!i.hasUsedTrial&&e.jsx("form",{onSubmit:j,children:e.jsx("button",{type:"submit",className:"pp-btn-primary",disabled:h.processing,children:h.processing?"Starting…":"Start Free Trial"})}),e.jsx("span",{className:"pp-trial-note d-lg-block d-none",children:"Takes less than 5 minutes — you stay in control of your work."})]})]})})}),e.jsx("section",{className:"pp-price-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"pp-section-head",children:[e.jsx("h1",{children:"Simple, transparent pricing"}),e.jsx("p",{children:"Pick the plan that fits how you work. Switch or cancel anytime."})]}),e.jsx("div",{className:"pp-switch-wrap",children:e.jsxs("div",{className:"pp-billing-switch",role:"tablist",children:[e.jsx("button",{type:"button",role:"tab","aria-selected":a==="monthly",className:a==="monthly"?"active":"",onClick:()=>s("monthly"),children:"Monthly"}),e.jsxs("button",{type:"button",role:"tab","aria-selected":a==="annually",className:a==="annually"?"active":"",onClick:()=>s("annually"),children:["Yearly ",e.jsx("span",{className:"pp-save-tag",children:"Save 20%"})]})]})}),g.length===0?e.jsx("p",{className:"pp-empty-state",children:"No plans available for this billing cycle yet."}):e.jsx("div",{className:"row justify-content-center",children:g.map(({plan:t,price:n})=>e.jsx("div",{className:"col-lg-4 col-md-6 mb-4",children:e.jsxs("div",{className:`pp-price-card${t.is_featured?" featured":""}`,children:[t.is_featured&&e.jsx("span",{className:"pp-featured-ribbon",children:"Most Popular"}),e.jsx("h3",{className:"pp-plan-name",children:t.name}),e.jsx("p",{className:"pp-plan-subtitle",children:t.subtitle??(a==="monthly"?"Perfect plan for you":"Best yearly value")}),e.jsxs("div",{className:"pp-amount-row",children:[e.jsxs("span",{className:"pp-amount",children:["$",n.price??n.amount]}),e.jsxs("span",{className:"pp-cycle",children:["/ ",a==="monthly"?"month":"year"]})]}),t.limit_text&&e.jsx("p",{className:"pp-limit-text",children:t.limit_text}),e.jsx("hr",{className:"pp-divider"}),e.jsx("div",{className:"pp-features-label",children:"Includes"}),e.jsx("ul",{className:"pp-features",children:(t.features||[]).map((x,b)=>e.jsxs("li",{children:[e.jsx("span",{className:"pp-check",children:e.jsx("i",{className:"ti ti-check"})}),x]},b))}),e.jsxs("button",{type:"button",className:"pp-choose-btn",onClick:()=>y(t,n,a),children:[e.jsx("i",{className:"ti ti-shopping-cart"})," Choose Plan"]})]})},t.id))})]})})]}),e.jsx("div",{className:"modal fade",id:"confirmPlanModal",ref:d,tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Confirm Subscription"}),e.jsx("button",{type:"button",className:"btn-close btn-close-white",onClick:f,"aria-label":"Close"})]}),e.jsxs("form",{onSubmit:w,children:[e.jsxs("div",{className:"modal-body",children:[e.jsx("p",{className:"pp-lead mb-2",children:"You are about to subscribe to:"}),e.jsx("h4",{children:r==null?void 0:r.name}),e.jsxs("p",{className:"pp-price-line",children:["$",r==null?void 0:r.price," / ",r==null?void 0:r.cycle]}),e.jsx("div",{className:"pp-modal-alert mt-3",children:"This plan will be activated immediately after confirmation."})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"pp-btn-outline",onClick:f,children:"Cancel"}),e.jsx("button",{type:"submit",className:"pp-btn-primary",disabled:m.processing,children:m.processing?"Confirming…":"Confirm & Subscribe"})]})]})]})})})]})}C.layout=p=>e.jsx(S,{children:p});export{C as default};
