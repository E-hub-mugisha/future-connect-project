import{r as n,u as m,j as e,H as b,L as p}from"./app-BO26Fp_i.js";const s="fc-theme";function u(){if(typeof window>"u")return"dark";const r=localStorage.getItem(s);return r==="light"||r==="dark"?r:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function w({status:r}){const[t,l]=n.useState(u),{data:d,setData:f,post:x,processing:a,errors:o}=m({email:""});n.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem(s,t)},[t]);const c=n.useCallback(()=>{l(i=>i==="dark"?"light":"dark")},[]),g=i=>{i.preventDefault(),x(route("password.email"))};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Forgot Password | Future Connect"}),e.jsx("div",{className:"fp-scope",children:e.jsxs("div",{className:"fp-page",children:[e.jsx("div",{className:"fp-orb fp-orb-1"}),e.jsx("div",{className:"fp-orb fp-orb-2"}),e.jsx("div",{className:"fp-top-nav",children:e.jsx("button",{type:"button",className:"fp-theme-btn",onClick:c,"aria-label":"Toggle light / dark theme",title:t==="dark"?"Switch to light mode":"Switch to dark mode",children:t==="dark"?e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}):e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})}),e.jsx("div",{className:"fp-back-nav",children:e.jsxs(p,{href:route("login"),className:"fp-back-btn",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),e.jsx("polyline",{points:"12 19 5 12 12 5"})]}),e.jsx("span",{children:"Back to login"})]})}),e.jsxs("div",{className:"fp-card",children:[e.jsxs("div",{className:"fp-panel-left",children:[e.jsx("div",{className:"fp-dots",children:Array.from({length:20}).map((i,h)=>e.jsx("span",{},h))}),e.jsxs(p,{href:route("user.home"),className:"fp-logo-lockup",children:[e.jsx("div",{className:"fp-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"fp-logo-wordmark",children:"Future Connect"}),e.jsx("p",{className:"fp-logo-tagline",children:"Empowering Stories. Real Impact."})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"fp-pill",children:"Rwanda’s #1 skills Platform"}),e.jsxs("div",{className:"fp-tagline",children:[e.jsxs("h2",{children:["Empowering",e.jsx("br",{}),e.jsx("em",{children:"skills,"}),e.jsx("br",{}),"Opportunities",e.jsx("br",{}),"& Growth."]}),e.jsx("p",{children:"Connect with verified employers, showcase your skills, and unlock new career paths — all in one place."})]})]}),e.jsxs("div",{className:"fp-stats",children:[e.jsxs("div",{className:"fp-stat",children:[e.jsx("div",{className:"fp-stat-val",children:"8K+"}),e.jsx("div",{className:"fp-stat-lbl",children:"Skills"})]}),e.jsxs("div",{className:"fp-stat",children:[e.jsx("div",{className:"fp-stat-val",children:"4.8★"}),e.jsx("div",{className:"fp-stat-lbl",children:"Rating"})]}),e.jsxs("div",{className:"fp-stat",children:[e.jsx("div",{className:"fp-stat-val",children:"100%"}),e.jsx("div",{className:"fp-stat-lbl",children:"Verified"})]})]})]}),e.jsxs("div",{className:"fp-panel-right",children:[e.jsxs("div",{className:"fp-form-head",children:[e.jsx("div",{className:"fp-eyebrow",children:"Reset password"}),e.jsxs("h1",{children:["Forgot your",e.jsx("br",{}),"password?"]}),e.jsx("p",{children:"No problem. Enter your email address and we’ll send you a link to choose a new one."})]}),r&&e.jsx("div",{className:"fp-status",children:r}),e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"fp-field",children:[e.jsx("label",{htmlFor:"email",children:"Email Address"}),e.jsxs("div",{className:"fp-input-wrap",children:[e.jsxs("svg",{className:"fp-ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),e.jsx("input",{id:"email",className:`fp-input ${o.email?"is-invalid":""}`,type:"email",name:"email",value:d.email,onChange:i=>f("email",i.target.value),placeholder:"you@example.com",required:!0,autoFocus:!0,autoComplete:"username"})]}),o.email&&e.jsx("div",{className:"fp-field-error",children:o.email})]}),e.jsx("button",{className:"fp-btn",type:"submit",disabled:a,children:e.jsxs("span",{className:"fp-btn-inner",children:[a?"Sending…":"Email Password Reset Link",!a&&e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]}),e.jsx("div",{className:"fp-divider",children:"or"}),e.jsxs("div",{className:"fp-signup-row",children:["Remember your password? ",e.jsx(p,{href:route("login"),children:"Log in"})]})]})]})]})}),e.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

                .fp-scope, .fp-scope *, .fp-scope *::before, .fp-scope *::after { box-sizing: border-box; }

                :root, [data-theme="dark"] {
                    --fp-bg: #0e1618; --fp-surface: #131e21; --fp-border: #1f2f33;
                    --fp-green: #48d597; --fp-green-hover: #00bd76;
                    --fp-green-dim: rgba(0, 166, 103, .12); --fp-green-glow: rgba(0, 166, 103, .28);
                    --fp-text: #e8f0ef; --fp-muted: #6a8a85; --fp-input-bg: #0b1315;
                    --fp-card-shadow: rgba(0, 0, 0, .4);
                    --fp-grid-line: rgba(0, 166, 103, .04);
                    --fp-orb-1: rgba(0,166,103,.1);
                    --fp-orb-2: rgba(0,166,103,.07);
                    --fp-left-grad: linear-gradient(145deg, #091315 0%, #0c1e21 55%, #081213 100%);
                    --fp-panel-white-overlay: rgba(255,255,255,.09);
                    --fp-field-error: #e07070;
                }

                [data-theme="light"] {
                    --fp-bg: #f4f9f7; --fp-surface: #ffffff; --fp-border: #dde8e4;
                    --fp-green: #00a65e; --fp-green-hover: #00bd76;
                    --fp-green-dim: rgba(0, 166, 94, .10); --fp-green-glow: rgba(0, 166, 94, .22);
                    --fp-text: #0e1618; --fp-muted: #5c7570; --fp-input-bg: #f3f8f6;
                    --fp-card-shadow: rgba(20, 50, 40, .12);
                    --fp-grid-line: rgba(0, 166, 94, .05);
                    --fp-orb-1: rgba(0,166,94,.08);
                    --fp-orb-2: rgba(0,166,94,.06);
                    --fp-left-grad: linear-gradient(145deg, #e6f5ef 0%, #d9f0e6 55%, #eefaf5 100%);
                    --fp-panel-white-overlay: rgba(255,255,255,.4);
                    --fp-field-error: #c9463f;
                }

                .fp-scope {
                    min-height: 100vh; background: var(--fp-bg); font-family: 'DM Sans', sans-serif;
                    color: var(--fp-text); margin: -1px 0 0; transition: background .25s, color .25s;
                }

                .fp-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px 16px; position: relative; overflow: hidden; }

                .fp-page::before {
                    content: ''; position: fixed; inset: 0;
                    background-image:
                        linear-gradient(var(--fp-grid-line) 1px, transparent 1px),
                        linear-gradient(90deg, var(--fp-grid-line) 1px, transparent 1px);
                    background-size: 40px 40px; pointer-events: none; z-index: 0;
                }

                .fp-orb { position: fixed; border-radius: 50%; pointer-events: none; filter: blur(60px); z-index: 0; }
                .fp-orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, var(--fp-orb-1) 0%, transparent 70%); top: -120px; right: -120px; }
                .fp-orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, var(--fp-orb-2) 0%, transparent 70%); bottom: -100px; left: -80px; }

                .fp-top-nav { position: fixed; top: 24px; right: 24px; z-index: 5; }
                .fp-theme-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 38px; height: 38px;
                    background: rgba(19, 30, 33, .1); backdrop-filter: blur(8px);
                    border: 1.5px solid var(--fp-border); border-radius: 50%;
                    color: var(--fp-muted); cursor: pointer;
                    transition: border-color .2s, color .2s, background .2s, transform .15s;
                }
                .fp-theme-btn:hover { color: var(--fp-green); border-color: rgba(0,166,103,.35); transform: rotate(15deg); }

                .fp-back-nav { position: fixed; top: 24px; left: 24px; z-index: 5; }
                .fp-back-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(19, 30, 33, .07); backdrop-filter: blur(8px);
                    border: 1.5px solid var(--fp-border); border-radius: 99px;
                    padding: 9px 16px 9px 12px;
                    font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
                    color: var(--fp-muted); text-decoration: none; cursor: pointer;
                    transition: border-color .2s, color .2s, background .2s, transform .15s;
                }
                .fp-back-btn svg { width: 15px; height: 15px; flex-shrink: 0; transition: transform .2s; }
                .fp-back-btn:hover { color: var(--fp-green); border-color: rgba(0,166,103,.35); transform: translateX(-2px); }
                .fp-back-btn:hover svg { transform: translateX(-2px); }

                @media (max-width: 480px) {
                    .fp-back-nav { top: 14px; left: 14px; }
                    .fp-top-nav { top: 14px; right: 14px; }
                    .fp-back-btn span { display: none; }
                    .fp-back-btn { padding: 10px; }
                }

                .fp-card {
                    display: grid; grid-template-columns: minmax(0, 1fr) 420px;
                    width: 100%; max-width: 980px; min-height: 580px; max-height: calc(100vh - 48px);
                    border-radius: 20px; overflow: hidden; border: 1px solid var(--fp-border);
                    position: relative; z-index: 1;
                    animation: fpFadeUp .65s cubic-bezier(.22, 1, .36, 1) both;
                    box-shadow: 0 40px 80px var(--fp-card-shadow);
                }

                @keyframes fpFadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }

                .fp-panel-left {
                    background: var(--fp-left-grad); padding: 52px 44px;
                    display: flex; flex-direction: column; justify-content: space-between;
                    position: relative; overflow-y: auto; min-height: 0; border-right: 1px solid var(--fp-border);
                }

                .fp-panel-left::before, .fp-panel-left::after { content: ''; position: absolute; border-radius: 50%; border: 1px solid; }
                .fp-panel-left::before { width: 340px; height: 340px; bottom: -60px; left: -60px; border-color: rgba(0,166,103,.14); }
                .fp-panel-left::after  { width: 500px; height: 500px; bottom: -120px; left: -120px; border-color: rgba(0,166,103,.07); }

                .fp-dots { position: absolute; top: 44px; right: 40px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; opacity: .25; }
                .fp-dots span { width: 3px; height: 3px; border-radius: 50%; background: var(--fp-green); display: block; }

                .fp-logo-lockup { display: flex; align-items: center; gap: 10px; text-decoration: none; position: relative; z-index: 1; }
                .fp-logo-mark { width: 36px; height: 36px; background: var(--fp-green); border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .fp-logo-mark svg { width: 18px; height: 18px; fill: var(--fp-bg); }
                .fp-logo-wordmark { font-size: 15px; font-weight: 700; color: var(--fp-text); letter-spacing: .3px; line-height: 1.2; margin: 0; }
                .fp-logo-tagline { font-size: 11px; color: var(--fp-muted); letter-spacing: .3px; margin: 0; line-height: 1; }

                .fp-pill {
                    display: inline-flex; align-items: center; gap: 6px;
                    background: var(--fp-green-dim); border: 1px solid rgba(0,166,103,.2);
                    border-radius: 99px; padding: 5px 12px; font-size: 11.5px; color: var(--fp-green); font-weight: 500;
                    margin-bottom: 28px; margin-top: 24px; position: relative; z-index: 1; width: fit-content;
                }
                .fp-pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--fp-green); display: inline-block; animation: fpPulse 2s ease infinite; }
                @keyframes fpPulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }

                .fp-tagline { position: relative; z-index: 1; }
                .fp-tagline h2 { font-family: 'Syne', sans-serif; font-size: clamp(24px, 3vw, 36px); font-weight: 800; line-height: 1.15; letter-spacing: -1.2px; color: var(--fp-text); margin-bottom: 18px; }
                .fp-tagline h2 em { font-style: normal; color: var(--fp-green); }
                .fp-tagline p { color: var(--fp-muted); font-size: 14px; line-height: 1.65; max-width: 280px; }

                .fp-stats { display: flex; position: relative; z-index: 1; }
                .fp-stat { padding: 16px 20px; background: var(--fp-green-dim); border: 1px solid rgba(0,166,103,.12); border-radius: 10px; flex: 1; }
                .fp-stat + .fp-stat { margin-left: 10px; }
                .fp-stat-val { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--fp-green); letter-spacing: -1px; }
                .fp-stat-lbl { font-size: 10.5px; color: var(--fp-muted); text-transform: uppercase; letter-spacing: .6px; margin-top: 2px; }

                .fp-panel-right {
                    background: var(--fp-surface); padding: 52px 44px;
                    display: flex; flex-direction: column; justify-content: center;
                    position: relative; overflow-y: auto; min-height: 0; min-width: 0;
                }
                .fp-panel-right::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--fp-green), transparent); opacity: .6; }

                .fp-form-head { margin-bottom: 30px; }
                .fp-eyebrow { display: inline-flex; align-items: center; gap: 7px; font-size: 10.5px; font-weight: 600; color: var(--fp-green); text-transform: uppercase; letter-spacing: 1.8px; margin-bottom: 12px; }
                .fp-eyebrow::before { content: ''; width: 18px; height: 2px; background: var(--fp-green); border-radius: 2px; display: inline-block; }
                .fp-form-head h1 { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; color: var(--fp-text); letter-spacing: -1px; line-height: 1.1; }
                .fp-form-head p { margin-top: 12px; font-size: 13.5px; color: var(--fp-muted); line-height: 1.65; }

                .fp-field { margin-bottom: 22px; }
                .fp-field label { display: block; font-size: 11.5px; font-weight: 600; color: var(--fp-muted); text-transform: uppercase; letter-spacing: .9px; margin-bottom: 8px; }

                .fp-input-wrap { position: relative; }
                .fp-input-wrap .fp-ico { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; color: var(--fp-muted); pointer-events: none; transition: color .2s; }
                .fp-input-wrap:focus-within .fp-ico { color: var(--fp-green); }

                .fp-input {
                    width: 100%; background: var(--fp-input-bg); border: 1.5px solid var(--fp-border); border-radius: 10px;
                    padding: 13px 16px 13px 44px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--fp-text); outline: none;
                    transition: border-color .2s, box-shadow .2s, background .2s;
                }
                .fp-input::placeholder { color: var(--fp-muted); opacity: .5; }
                .fp-input:focus { border-color: var(--fp-green); box-shadow: 0 0 0 4px var(--fp-green-dim); }
                .fp-input.is-invalid { border-color: var(--fp-field-error); }

                .fp-field-error { font-size: 12px; color: var(--fp-field-error); margin-top: 6px; }
                .fp-status { font-size: 13px; color: var(--fp-green); background: var(--fp-green-dim); border: 1px solid rgba(0,166,103,.25); border-radius: 10px; padding: 12px 14px; margin-bottom: 22px; }

                .fp-btn {
                    width: 100%; padding: 15px; background: linear-gradient(135deg, var(--fp-green), #009a5e);
                    color: #fff; border: none; border-radius: 10px; font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
                    letter-spacing: .2px; cursor: pointer; position: relative; overflow: hidden;
                    transition: transform .15s, box-shadow .2s, background .2s;
                }
                .fp-btn:disabled { opacity: .7; cursor: not-allowed; }
                .fp-btn::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, var(--fp-panel-white-overlay), transparent); pointer-events: none; }
                .fp-btn:hover:not(:disabled) { background: linear-gradient(135deg, var(--fp-green-hover), #00a65e); box-shadow: 0 12px 32px var(--fp-green-glow); transform: translateY(-2px); }
                .fp-btn:active:not(:disabled) { transform: translateY(0); box-shadow: none; }
                .fp-btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }

                .fp-divider { display: flex; align-items: center; gap: 12px; margin: 24px 0; color: var(--fp-muted); font-size: 12px; }
                .fp-divider::before, .fp-divider::after { content: ''; flex: 1; height: 1px; background: var(--fp-border); }

                .fp-signup-row { text-align: center; font-size: 13px; color: var(--fp-muted); }
                .fp-signup-row a { color: var(--fp-green); text-decoration: none; font-weight: 600; }
                .fp-signup-row a:hover { text-decoration: underline; }

                @media (max-width: 820px) {
                    .fp-card { grid-template-columns: 1fr; min-height: unset; max-height: none; overflow: visible; max-width: 520px; border-radius: 16px; }
                    .fp-panel-left { padding: 36px 32px 32px; border-right: none; border-bottom: 1px solid var(--fp-border); overflow: visible; }
                    .fp-dots { display: none; }
                    .fp-tagline h2 { font-size: 22px; margin-bottom: 12px; }
                    .fp-tagline p { display: none; }
                    .fp-stat { padding: 12px 14px; }
                    .fp-stat-val { font-size: 17px; }
                    .fp-pill { margin-bottom: 20px; }
                    .fp-panel-right { padding: 36px 32px 40px; overflow: visible; }
                    .fp-panel-right::before { display: none; }
                }

                @media (max-width: 520px) {
                    .fp-page { padding: 16px; }
                    .fp-card { border-radius: 14px; }
                    .fp-panel-left { padding: 28px 24px 24px; }
                    .fp-logo-wordmark { font-size: 14px; }
                    .fp-tagline h2 { font-size: 20px; }
                    .fp-stat { padding: 10px 12px; }
                    .fp-stat-val { font-size: 16px; }
                    .fp-stat-lbl { font-size: 10px; }
                    .fp-panel-right { padding: 28px 24px 36px; }
                    .fp-form-head h1 { font-size: 22px; }
                }

                @media (max-width: 380px) {
                    .fp-stats { flex-direction: column; gap: 8px; }
                    .fp-stat + .fp-stat { margin-left: 0; margin-top: 8px; }
                }
            `})]})}export{w as default};
