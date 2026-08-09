import{d as j,r as p,u as y,j as e,H as w,L as c}from"./app-CZoN4D26.js";function l(s,a){try{return route(s,a)}catch{return console.warn(`route("${s}") failed — Ziggy config not found. Make sure @routes is included in resources/views/app.blade.php (in <head>, before the Inertia app div).`),"#"}}const k={"1-10":"1 – 10 employees","11-50":"11 – 50 employees","51-200":"51 – 200 employees","200+":"200+ employees"},N={morning:"Morning",afternoon:"Afternoon",evening:"Evening",flexible:"I'm flexible"};function z(){const[s,a]=p.useState("dark");return p.useEffect(()=>{const o=localStorage.getItem("fc-theme"),h=window.matchMedia("(prefers-color-scheme: light)").matches;a(o||(h?"light":"dark"))},[]),p.useEffect(()=>{const o=document.documentElement;s==="light"?o.setAttribute("data-h-theme","light"):o.removeAttribute("data-h-theme"),localStorage.setItem("fc-theme",s)},[s]),[s,()=>a(o=>o==="light"?"dark":"light")]}function _(s){p.useEffect(()=>{function a(){s.current&&document.documentElement.style.setProperty("--dr-header-h",`${s.current.offsetHeight}px`)}return a(),window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[s])}function L({companySizes:s=k,preferredTimes:a=N}){const{flash:d}=j().props,[,o]=z(),h=p.useRef(null);_(h);const{data:m,setData:f,post:u,processing:g,errors:r}=y({full_name:"",work_email:"",phone:"",role:"",company_name:"",company_size:"",preferred_date:"",preferred_time:"",message:""}),x=Object.keys(r).length,b=new Date().toISOString().slice(0,10),i=t=>({id:t,name:t,value:m[t],onChange:n=>f(t,n.target.value)}),v=t=>{t.preventDefault(),u(l("demo.store"))};return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Request a Demo — Future Connect",children:e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap",rel:"stylesheet"})}),e.jsx("style",{children:`
        :root {
          --bg: #0e1618;
          --surface: #141d20;
          --surface2: #1a2428;
          --green: #48d597;
          --green-mid: #00a667;
          --green-dim: rgba(0, 166, 103, 0.12);
          --red: #f07070;
          --red-dim: rgba(240, 112, 112, 0.10);
          --red-border: rgba(240, 112, 112, 0.35);
          --text: #e8f0ed;
          --muted: #7a9a8e;
          --muted2: #4a6a60;
          --border: rgba(0, 166, 103, 0.18);
          --border-h: rgba(0, 166, 103, 0.42);
          --radius: 10px;
          --radius-lg: 18px;
          --dr-header-h: 0px;
        }

        [data-h-theme="light"] {
          --bg: #f6faf8;
          --surface: #ffffff;
          --surface2: #eef4f1;
          --green: #00a667;
          --green-mid: #00a667;
          --green-dim: rgba(0, 166, 103, 0.08);
          --red: #d64545;
          --red-dim: rgba(214, 69, 69, 0.08);
          --red-border: rgba(214, 69, 69, 0.3);
          --text: #10201b;
          --muted: #5b7a70;
          --muted2: #8aa89e;
          --border: rgba(0, 100, 60, 0.14);
          --border-h: rgba(0, 100, 60, 0.35);
        }

        .dr-root, .dr-root *, .dr-root *::before, .dr-root *::after { box-sizing: border-box; }

        .dr-root { background: var(--bg); margin: 0; font-family: 'Montserrat', sans-serif; color: var(--text); min-height: 100vh; }

        /* ── TOP BAR (this is the fix — the original page's equivalent
           markup had zero matching CSS anywhere) ── */
        .dr-topheader {
          position: sticky; top: 0; z-index: 50;
          background: var(--surface); border-bottom: 1px solid var(--border);
        }
        .dr-topheader-inner {
          max-width: 1400px; margin: 0 auto; padding: 14px 52px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .dr-th-logo { display: flex; align-items: center; gap: 9px; text-decoration: none; }
        .dr-th-logo-mark {
          width: 32px; height: 32px; border-radius: 8px; background: var(--green);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .dr-th-logo-mark svg { width: 16px; height: 16px; fill: #fff; }
        .dr-th-logo-text { font-size: 15px; font-weight: 700; color: var(--text); white-space: nowrap; }
        .dr-th-logo-text span { color: var(--green); }
        .dr-th-actions { display: flex; align-items: center; gap: 10px; }
        .dr-th-home {
          display: inline-flex; align-items: center; gap: 6px; color: var(--muted); font-size: 13px;
          font-weight: 500; text-decoration: none; padding: 7px 14px; border: 1px solid var(--border);
          border-radius: 100px; background: var(--surface2); transition: all 0.2s;
        }
        .dr-th-home:hover { color: var(--green); border-color: var(--border-h); background: var(--green-dim); }
        .dr-th-toggle {
          width: 36px; height: 36px; border: 1px solid var(--border); border-radius: 8px; background: var(--surface2);
          color: var(--muted); display: flex; align-items: center; justify-content: center; cursor: pointer;
          transition: all 0.2s; font-size: 15px;
        }
        .dr-th-toggle:hover { color: var(--green); border-color: var(--border-h); }
        .dr-th-toggle .ti-sun { display: none; }
        .dr-th-toggle .ti-moon { display: inline-flex; }
        [data-h-theme="light"] .dr-th-toggle .ti-sun { display: inline-flex; }
        [data-h-theme="light"] .dr-th-toggle .ti-moon { display: none; }
        @media (max-width: 520px) {
          .dr-topheader-inner { padding: 12px 18px; }
          .dr-th-home span { display: none; }
        }

        .dr-page { min-height: calc(100vh - 65px); display: grid; grid-template-columns: 1fr 1fr; }

        .dr-left {
          border-right: 1px solid var(--border); padding: 60px 52px; display: flex; flex-direction: column;
          justify-content: space-between; position: sticky; top: var(--dr-header-h); overflow-y: auto;
        }
        .dr-logo-lockup { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .dr-logo-mark {
          width: 36px; height: 36px; background: var(--green); border-radius: 9px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .dr-logo-mark svg { width: 18px; height: 18px; fill: #fff; }
        .dr-logo-wordmark { font-size: 15px; font-weight: 700; color: var(--text); letter-spacing: .3px; line-height: 1.2; margin: 0; }
        .dr-logo-tagline { font-size: 11px; color: var(--muted2); letter-spacing: .3px; margin: 0; line-height: 1; }

        .dr-left-body { position: relative; z-index: 1; }
        .dr-badge {
          display: inline-flex; align-items: center; gap: 7px; background: var(--green-dim);
          border: 1px solid rgba(0, 166, 103, 0.3); color: var(--green); font-size: 10px; font-weight: 500;
          letter-spacing: 1.4px; text-transform: uppercase; padding: 5px 14px; border-radius: 100px; margin-bottom: 22px;
        }
        .dr-badge::before {
          content: ''; display: inline-block; width: 6px; height: 6px; border-radius: 50%;
          background: var(--green); animation: drPulse 2s infinite;
        }
        @keyframes drPulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(.7); } }

        .dr-left-body h1 {
          font-family: 'Montserrat', sans-serif; font-size: 2.4rem; font-weight: 800; color: var(--text);
          line-height: 1.15; letter-spacing: -0.5px; margin: 0 0 16px;
        }
        .dr-left-body h1 span { color: var(--green); }
        .dr-left-body > p { font-size: 14.5px; color: var(--muted); line-height: 1.8; margin: 0 0 34px; max-width: 380px; }

        .dr-features { display: flex; flex-direction: column; gap: 14px; }
        .dr-feature { display: flex; align-items: flex-start; gap: 14px; }
        .dr-feature-icon {
          width: 38px; height: 38px; border-radius: 10px; background: var(--green-dim);
          border: 1px solid rgba(0, 166, 103, 0.25); display: flex; align-items: center; justify-content: center;
          font-size: 16px; flex-shrink: 0; margin-top: 1px;
        }
        .dr-feature-text strong { display: block; font-size: 13.5px; font-weight: 500; color: var(--text); margin-bottom: 2px; }
        .dr-feature-text span { font-size: 12px; color: var(--muted); line-height: 1.55; }

        .dr-stats {
          display: flex; gap: 28px; flex-wrap: wrap; position: relative; z-index: 1;
          padding-top: 26px; border-top: 1px solid var(--border);
        }
        .dr-stat-num { font-family: 'Montserrat', sans-serif; font-size: 1.45rem; font-weight: 800; color: var(--green); line-height: 1; margin-bottom: 4px; }
        .dr-stat-label { font-size: 11.5px; color: var(--muted); }

        .dr-right { background: var(--bg); overflow-y: auto; display: flex; flex-direction: column; }
        .dr-topbar { display: flex; align-items: center; justify-content: space-between; padding: 22px 52px 0; flex-shrink: 0; }
        .dr-home-btn {
          display: inline-flex; align-items: center; gap: 8px; color: var(--muted); font-size: 12.5px; font-weight: 500;
          text-decoration: none; padding: 7px 14px 7px 10px; border: 1px solid var(--border); border-radius: 100px;
          background: var(--surface); transition: all 0.2s ease;
        }
        .dr-home-btn svg { width: 15px; height: 15px; stroke: var(--muted); transition: stroke 0.2s ease, transform 0.2s ease; flex-shrink: 0; }
        .dr-home-btn:hover { color: var(--green); border-color: var(--border-h); background: var(--green-dim); }
        .dr-home-btn:hover svg { stroke: var(--green); transform: translateX(-2px); }
        .dr-login-hint { font-size: 12.5px; color: var(--muted); }
        .dr-login-hint a { color: var(--green); text-decoration: none; font-weight: 500; }
        .dr-login-hint a:hover { text-decoration: underline; }

        .dr-right-body { padding: 28px 52px 56px; flex: 1; }
        .dr-right-head { margin-bottom: 24px; }
        .dr-right-head h2 { font-family: 'Montserrat', sans-serif; font-size: 1.5rem; font-weight: 700; color: var(--text); margin: 0 0 6px; }
        .dr-right-head p { font-size: 13px; color: var(--muted); margin: 0; }

        .dr-panel {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
          padding: 32px; position: relative; overflow: hidden;
        }
        .dr-panel::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--green), transparent); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .dr-alert-success {
          display: flex; align-items: flex-start; gap: 12px; background: var(--green-dim);
          border: 1px solid var(--border-h); border-radius: var(--radius); padding: 14px 16px; margin-bottom: 22px;
        }
        .dr-alert-success-icon {
          width: 32px; height: 32px; border-radius: 8px; background: rgba(0, 166, 103, 0.18);
          border: 1px solid var(--border-h); color: var(--green); display: flex; align-items: center;
          justify-content: center; flex-shrink: 0; font-size: 15px;
        }
        .dr-alert-success-body strong { display: block; font-size: 13px; font-weight: 600; color: var(--green); margin-bottom: 3px; }
        .dr-alert-success-body p { margin: 0; font-size: 12.5px; color: var(--muted); line-height: 1.6; }

        .dr-error-banner {
          display: flex; align-items: flex-start; gap: 12px; background: var(--red-dim);
          border: 1px solid var(--red-border); border-radius: var(--radius); padding: 14px 16px; margin-bottom: 22px;
        }
        .dr-error-banner-icon {
          width: 32px; height: 32px; border-radius: 8px; background: rgba(240, 112, 112, 0.15);
          border: 1px solid var(--red-border); display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 15px;
        }
        .dr-error-banner-body strong { display: block; font-size: 12.5px; font-weight: 600; color: var(--red); margin-bottom: 5px; }
        .dr-error-banner-body ul { margin: 0; padding-left: 16px; list-style: disc; }
        .dr-error-banner-body ul li { font-size: 12px; color: var(--red); line-height: 1.6; opacity: .85; }

        .dr-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
        .dr-row.single { grid-template-columns: 1fr; }
        .dr-field { display: flex; flex-direction: column; gap: 6px; }
        .dr-field label {
          display: flex; align-items: center; justify-content: space-between; font-size: 10px; font-weight: 500;
          color: var(--muted); letter-spacing: 0.6px; text-transform: uppercase;
        }
        .dr-field-error-tag {
          font-size: 9.5px; font-weight: 500; color: var(--red); text-transform: none;
          display: flex; align-items: center; gap: 4px;
        }
        .dr-field-error-tag::before {
          content: ''; display: inline-block; width: 4px; height: 4px; border-radius: 50%;
          background: var(--red); flex-shrink: 0;
        }
        .dr-field input, .dr-field select, .dr-field textarea {
          background: var(--surface2); border: 1px solid var(--border); border-radius: var(--radius);
          color: var(--text); font-family: 'Montserrat', sans-serif; font-size: 13.5px; padding: 11px 14px;
          outline: none; transition: border-color 0.2s, background 0.2s, box-shadow 0.2s; width: 100%;
          -webkit-appearance: none; appearance: none;
        }
        .dr-field input::placeholder, .dr-field textarea::placeholder { color: var(--muted2); }
        .dr-field input:focus, .dr-field select:focus, .dr-field textarea:focus {
          border-color: var(--green); background: rgba(0, 166, 103, 0.06); box-shadow: 0 0 0 3px rgba(0, 166, 103, 0.08);
        }
        .dr-field.has-error input, .dr-field.has-error select, .dr-field.has-error textarea {
          border-color: var(--red-border); background: var(--red-dim); box-shadow: 0 0 0 3px rgba(240, 112, 112, 0.08);
        }
        .dr-field select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 12px center; background-size: 16px;
          padding-right: 36px; cursor: pointer;
        }
        .dr-field select option { background: var(--surface2); color: var(--text); }
        .dr-field textarea { resize: vertical; min-height: 96px; }

        .dr-actions { display: flex; justify-content: flex-end; align-items: center; margin-top: 24px; padding-top: 22px; border-top: 1px solid var(--border); }
        .dr-btn-submit {
          display: inline-flex; align-items: center; gap: 7px; background: var(--green); color: #0a1f14;
          font-family: 'Montserrat', sans-serif; font-size: 13.5px; font-weight: 700; border: none;
          border-radius: var(--radius); padding: 13px 28px; cursor: pointer; transition: background 0.2s ease, transform 0.2s ease;
        }
        .dr-btn-submit:hover { background: #62eaaa; transform: translateY(-1px); }
        .dr-btn-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .dr-note { font-size: 11.5px; color: var(--muted2); margin-top: 14px; line-height: 1.6; }

        @media (max-width: 960px) {
          .dr-page { grid-template-columns: 1fr; }
          .dr-left { position: static; height: auto; padding: 44px 28px 40px; }
          .dr-topbar { padding: 22px 24px 0; }
          .dr-right-body { padding: 24px 24px 56px; }
        }
        @media (max-width: 520px) {
          .dr-left { padding: 36px 18px 32px; }
          .dr-topbar { padding: 18px 14px 0; }
          .dr-right-body { padding: 18px 14px 48px; }
          .dr-left-body h1 { font-size: 1.9rem; }
          .dr-panel { padding: 20px 14px; }
          .dr-row { grid-template-columns: 1fr; }
        }
      `}),e.jsxs("div",{className:"dr-root",children:[e.jsx("header",{className:"dr-topheader",ref:h,children:e.jsxs("div",{className:"dr-topheader-inner",children:[e.jsxs(c,{href:l("user.home"),className:"dr-th-logo",children:[e.jsx("div",{className:"dr-th-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("span",{className:"dr-th-logo-text",children:["Future",e.jsx("span",{children:"Connect"})]})]}),e.jsxs("div",{className:"dr-th-actions",children:[e.jsxs(c,{href:l("user.home"),className:"dr-th-home",children:[e.jsx("i",{className:"ti ti-home"})," ",e.jsx("span",{children:"Home"})]}),e.jsxs("button",{className:"dr-th-toggle",onClick:o,"aria-label":"Toggle theme",children:[e.jsx("i",{className:"ti ti-sun"}),e.jsx("i",{className:"ti ti-moon"})]})]})]})}),e.jsxs("div",{className:"dr-page",children:[e.jsxs("div",{className:"dr-left",children:[e.jsxs(c,{href:l("user.home"),className:"dr-logo-lockup",children:[e.jsx("div",{className:"dr-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"dr-logo-wordmark",children:"Future Connect"}),e.jsx("p",{className:"dr-logo-tagline",children:"Empowering Stories. Real Impact."})]})]}),e.jsxs("div",{className:"dr-left-body",children:[e.jsx("div",{className:"dr-badge",children:"Live Demo"}),e.jsxs("h1",{children:["See Future Connect",e.jsx("br",{}),"in ",e.jsx("span",{children:"Action"})]}),e.jsx("p",{children:"Book a personalized walkthrough with our team and discover how Future Connect can help you find, vet, and hire the right talent — fast."}),e.jsxs("div",{className:"dr-features",children:[e.jsxs("div",{className:"dr-feature",children:[e.jsx("div",{className:"dr-feature-icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"})})}),e.jsxs("div",{className:"dr-feature-text",children:[e.jsx("strong",{children:"Tailored to You"}),e.jsx("span",{children:"We'll walk through the features most relevant to your team and use case."})]})]}),e.jsxs("div",{className:"dr-feature",children:[e.jsx("div",{className:"dr-feature-icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"})})}),e.jsxs("div",{className:"dr-feature-text",children:[e.jsx("strong",{children:"30 Minutes, No Pressure"}),e.jsx("span",{children:"A quick, friendly session — ask anything, no obligation to buy."})]})]}),e.jsxs("div",{className:"dr-feature",children:[e.jsx("div",{className:"dr-feature-icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"})})}),e.jsxs("div",{className:"dr-feature-text",children:[e.jsx("strong",{children:"Real Talent Pool"}),e.jsx("span",{children:"See live examples of verified talent matching your industry."})]})]}),e.jsxs("div",{className:"dr-feature",children:[e.jsx("div",{className:"dr-feature-icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"})})}),e.jsxs("div",{className:"dr-feature-text",children:[e.jsx("strong",{children:"Flexible Scheduling"}),e.jsx("span",{children:"Pick a time that works for you — we'll confirm within one business day."})]})]})]})]}),e.jsxs("div",{className:"dr-stats",children:[e.jsxs("div",{children:[e.jsx("div",{className:"dr-stat-num",children:"8K+"}),e.jsx("div",{className:"dr-stat-label",children:"Skills listed"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"dr-stat-num",children:"4.8"}),e.jsx("div",{className:"dr-stat-label",children:"Avg. rating"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"dr-stat-num",children:"24h"}),e.jsx("div",{className:"dr-stat-label",children:"Response time"})]})]})]}),e.jsxs("div",{className:"dr-right",children:[e.jsxs("div",{className:"dr-topbar",children:[e.jsxs(c,{href:l("user.home"),className:"dr-home-btn",children:[e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M19 12H5M5 12l7-7M5 12l7 7"})}),"Back to Home"]}),e.jsxs("span",{className:"dr-login-hint",children:["Have an account? ",e.jsx(c,{href:l("login"),children:"Sign in →"})]})]}),e.jsxs("div",{className:"dr-right-body",children:[e.jsxs("div",{className:"dr-right-head",children:[e.jsx("h2",{children:"Request a Demo"}),e.jsx("p",{children:"Tell us a bit about your team and we'll set up a time to show you around."})]}),(d==null?void 0:d.success)&&e.jsxs("div",{className:"dr-alert-success",children:[e.jsx("div",{className:"dr-alert-success-icon",children:"✓"}),e.jsxs("div",{className:"dr-alert-success-body",children:[e.jsx("strong",{children:"Request received"}),e.jsx("p",{children:d.success})]})]}),x>0&&e.jsxs("div",{className:"dr-error-banner",children:[e.jsx("div",{className:"dr-error-banner-icon",children:"⚠️"}),e.jsxs("div",{className:"dr-error-banner-body",children:[e.jsxs("strong",{children:["Please fix ",x," ",x===1?"issue":"issues"," before continuing:"]}),e.jsx("ul",{children:Object.values(r).map((t,n)=>e.jsx("li",{children:t},n))})]})]}),e.jsx("div",{className:"dr-panel",children:e.jsxs("form",{onSubmit:v,children:[e.jsxs("div",{className:"dr-row",children:[e.jsxs("div",{className:`dr-field${r.full_name?" has-error":""}`,children:[e.jsxs("label",{htmlFor:"full_name",children:["Full Name",r.full_name&&e.jsx("span",{className:"dr-field-error-tag",children:r.full_name})]}),e.jsx("input",{type:"text",placeholder:"e.g. Jane Uwimana",required:!0,...i("full_name")})]}),e.jsxs("div",{className:`dr-field${r.work_email?" has-error":""}`,children:[e.jsxs("label",{htmlFor:"work_email",children:["Work Email",r.work_email&&e.jsx("span",{className:"dr-field-error-tag",children:r.work_email})]}),e.jsx("input",{type:"email",placeholder:"you@company.com",required:!0,...i("work_email")})]})]}),e.jsxs("div",{className:"dr-row",children:[e.jsxs("div",{className:`dr-field${r.phone?" has-error":""}`,children:[e.jsxs("label",{htmlFor:"phone",children:["Phone ",e.jsx("span",{style:{textTransform:"none",fontWeight:400},children:"(optional)"}),r.phone&&e.jsx("span",{className:"dr-field-error-tag",children:r.phone})]}),e.jsx("input",{type:"tel",placeholder:"+250 788 123 456",...i("phone")})]}),e.jsxs("div",{className:`dr-field${r.role?" has-error":""}`,children:[e.jsxs("label",{htmlFor:"role",children:["Your Role ",e.jsx("span",{style:{textTransform:"none",fontWeight:400},children:"(optional)"}),r.role&&e.jsx("span",{className:"dr-field-error-tag",children:r.role})]}),e.jsx("input",{type:"text",placeholder:"e.g. HR Manager, Founder",...i("role")})]})]}),e.jsxs("div",{className:"dr-row",children:[e.jsxs("div",{className:`dr-field${r.company_name?" has-error":""}`,children:[e.jsxs("label",{htmlFor:"company_name",children:["Company Name",r.company_name&&e.jsx("span",{className:"dr-field-error-tag",children:r.company_name})]}),e.jsx("input",{type:"text",placeholder:"e.g. Umoja NGO",required:!0,...i("company_name")})]}),e.jsxs("div",{className:`dr-field${r.company_size?" has-error":""}`,children:[e.jsxs("label",{htmlFor:"company_size",children:["Company Size ",e.jsx("span",{style:{textTransform:"none",fontWeight:400},children:"(optional)"}),r.company_size&&e.jsx("span",{className:"dr-field-error-tag",children:r.company_size})]}),e.jsxs("select",{...i("company_size"),children:[e.jsx("option",{value:"",children:"Select size"}),Object.entries(s).map(([t,n])=>e.jsx("option",{value:t,children:n},t))]})]})]}),e.jsxs("div",{className:"dr-row",children:[e.jsxs("div",{className:`dr-field${r.preferred_date?" has-error":""}`,children:[e.jsxs("label",{htmlFor:"preferred_date",children:["Preferred Date ",e.jsx("span",{style:{textTransform:"none",fontWeight:400},children:"(optional)"}),r.preferred_date&&e.jsx("span",{className:"dr-field-error-tag",children:r.preferred_date})]}),e.jsx("input",{type:"date",min:b,...i("preferred_date")})]}),e.jsxs("div",{className:`dr-field${r.preferred_time?" has-error":""}`,children:[e.jsxs("label",{htmlFor:"preferred_time",children:["Preferred Time ",e.jsx("span",{style:{textTransform:"none",fontWeight:400},children:"(optional)"}),r.preferred_time&&e.jsx("span",{className:"dr-field-error-tag",children:r.preferred_time})]}),e.jsxs("select",{...i("preferred_time"),children:[e.jsx("option",{value:"",children:"Select time"}),Object.entries(a).map(([t,n])=>e.jsx("option",{value:t,children:n},t))]})]})]}),e.jsx("div",{className:"dr-row single",children:e.jsxs("div",{className:`dr-field${r.message?" has-error":""}`,children:[e.jsxs("label",{htmlFor:"message",children:["What would you like to see? ",e.jsx("span",{style:{textTransform:"none",fontWeight:400},children:"(optional)"}),r.message&&e.jsx("span",{className:"dr-field-error-tag",children:r.message})]}),e.jsx("textarea",{placeholder:"e.g. Hiring for a 6-month design contract, want to see the talent matching flow...",...i("message")})]})}),e.jsx("div",{className:"dr-actions",children:e.jsx("button",{type:"submit",className:"dr-btn-submit",disabled:g,children:g?"Sending…":"Request My Demo →"})}),e.jsx("p",{className:"dr-note",children:"By submitting, you agree to be contacted by our team regarding your demo request. We won't share your details with third parties."})]})})]})]})]})]})]})}export{L as default};
