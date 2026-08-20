import{r as a,u as w,j as e,H as k,L as n}from"./app-CgjB0zLb.js";const x="fc-theme";function y(){if(typeof window>"u")return"dark";const t=localStorage.getItem(x);return t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function N({status:t,canResetPassword:p}){const[o,g]=a.useState(y),[c,h]=a.useState(!1),{data:s,setData:l,post:f,processing:d,errors:i,reset:m}=w({email:"",password:"",remember:!1});a.useEffect(()=>{document.documentElement.setAttribute("data-theme",o),localStorage.setItem(x,o)},[o]);const b=a.useCallback(()=>{g(r=>r==="dark"?"light":"dark")},[]),u=r=>{r.preventDefault(),f(route("login"),{onFinish:()=>m("password")})};return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Login | Future Connect"}),e.jsxs("div",{className:"page",children:[e.jsx("div",{className:"orb orb-1"}),e.jsx("div",{className:"orb orb-2"}),e.jsx("div",{className:"top-nav",children:e.jsx("button",{type:"button",className:"theme-btn",onClick:b,"aria-label":"Toggle light / dark theme",title:o==="dark"?"Switch to light mode":"Switch to dark mode",children:o==="dark"?e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}):e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})}),e.jsx("div",{className:"back-nav",children:e.jsxs(n,{href:"/",className:"back-btn",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),e.jsx("polyline",{points:"12 19 5 12 12 5"})]}),e.jsx("span",{children:"Back"})]})}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"panel-left",children:[e.jsx("div",{className:"dots",children:Array.from({length:20}).map((r,v)=>e.jsx("span",{},v))}),e.jsxs(n,{href:route("user.home"),className:"fc-logo-lockup",children:[e.jsx("div",{className:"fc-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-logo-wordmark",children:"Future Connect"}),e.jsx("p",{className:"fc-logo-tagline",children:"Empowering Stories. Real Impact."})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"pill",children:"Rwanda’s #1 skills Platform"}),e.jsxs("div",{className:"tagline",children:[e.jsxs("h2",{children:["Empowering",e.jsx("br",{}),e.jsx("em",{children:"skills,"}),e.jsx("br",{}),"Opportunities",e.jsx("br",{}),"& Growth."]}),e.jsx("p",{children:"Connect with verified employers, showcase your skills, and unlock new career paths — all in one place."})]})]}),e.jsxs("div",{className:"stats",children:[e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-val",children:"8K+"}),e.jsx("div",{className:"stat-lbl",children:"Skills"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-val",children:"4.8★"}),e.jsx("div",{className:"stat-lbl",children:"Rating"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-val",children:"100%"}),e.jsx("div",{className:"stat-lbl",children:"Verified"})]})]})]}),e.jsxs("div",{className:"panel-right",children:[e.jsxs("div",{className:"form-head",children:[e.jsx("div",{className:"eyebrow",children:"Welcome back"}),e.jsxs("h1",{children:["Sign in to",e.jsx("br",{}),"your account"]}),e.jsx("p",{children:"Enter your credentials to continue"})]}),t&&e.jsx("div",{className:"status-banner",children:t}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"email",children:"Email Address"}),e.jsxs("div",{className:"input-wrap",children:[e.jsxs("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),e.jsx("input",{id:"email",className:`fc-input ${i.email?"is-invalid":""}`,type:"email",name:"email",value:s.email,onChange:r=>l("email",r.target.value),placeholder:"you@example.com",required:!0,autoFocus:!0,autoComplete:"username"})]}),i.email&&e.jsx("div",{className:"field-error",children:i.email})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsxs("div",{className:"input-wrap",children:[e.jsxs("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),e.jsx("input",{id:"password",className:`fc-input ${i.password?"is-invalid":""}`,type:c?"text":"password",name:"password",value:s.password,onChange:r=>l("password",r.target.value),placeholder:"••••••••",required:!0,autoComplete:"current-password"}),e.jsx("button",{type:"button",className:"eye-btn",onClick:()=>h(r=>!r),"aria-label":"Toggle password visibility",children:c?e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})})]}),i.password&&e.jsx("div",{className:"field-error",children:i.password})]}),e.jsxs("div",{className:"row-mid",children:[e.jsxs("label",{className:"check-wrap",children:[e.jsx("input",{type:"checkbox",name:"remember",checked:s.remember,onChange:r=>l("remember",r.target.checked)}),e.jsx("span",{children:"Remember me"})]}),p&&e.jsx(n,{className:"forgot",href:route("password.request"),children:"Forgot password?"})]}),e.jsx("button",{className:"btn",type:"submit",disabled:d,children:e.jsxs("span",{className:"btn-inner",children:[d?"Logging in…":"Log In",!d&&e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]}),e.jsx("div",{className:"divider",children:"or"}),e.jsxs("div",{className:"signup-row",children:["Don’t have an account? ",e.jsx(n,{href:route("register"),children:"Sign Up for free"})]})]})]})]}),e.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                :root, [data-theme="dark"] {
                    --bg: #0e1618;
                    --surface: #131e21;
                    --border: #1f2f33;
                    --green: #48d597;
                    --green-hover: #00bd76;
                    --green-dim: rgba(0, 166, 103, .12);
                    --green-glow: rgba(0, 166, 103, .28);
                    --text: #e8f0ef;
                    --muted: #6a8a85;
                    --input-bg: #0b1315;
                    --card-shadow: rgba(0, 0, 0, .4);
                    --grid-line: rgba(0, 166, 103, .04);
                    --orb-1: rgba(0,166,103,.1);
                    --orb-2: rgba(0,166,103,.07);
                    --left-grad: linear-gradient(145deg, #091315 0%, #0c1e21 55%, #081213 100%);
                    --panel-white-overlay: rgba(255,255,255,.09);
                    --field-error: #e07070;
                }

                [data-theme="light"] {
                    --bg: #f4f9f7;
                    --surface: #ffffff;
                    --border: #dde8e4;
                    --green: #00a65e;
                    --green-hover: #00bd76;
                    --green-dim: rgba(0, 166, 94, .10);
                    --green-glow: rgba(0, 166, 94, .22);
                    --text: #0e1618;
                    --muted: #5c7570;
                    --input-bg: #f3f8f6;
                    --card-shadow: rgba(20, 50, 40, .12);
                    --grid-line: rgba(0, 166, 94, .05);
                    --orb-1: rgba(0,166,94,.08);
                    --orb-2: rgba(0,166,94,.06);
                    --left-grad: linear-gradient(145deg, #e6f5ef 0%, #d9f0e6 55%, #eefaf5 100%);
                    --panel-white-overlay: rgba(255,255,255,.4);
                    --field-error: #c9463f;
                }

                html, body { height: 100%; background: var(--bg); font-family: 'DM Sans', sans-serif; color: var(--text); transition: background .25s, color .25s; }

                .page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px 16px; position: relative; overflow: hidden; }

                .page::before {
                    content: ''; position: fixed; inset: 0;
                    background-image:
                        linear-gradient(var(--grid-line) 1px, transparent 1px),
                        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
                    background-size: 40px 40px; pointer-events: none; z-index: 0;
                }

                .orb { position: fixed; border-radius: 50%; pointer-events: none; filter: blur(60px); z-index: 0; }
                .orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, var(--orb-1) 0%, transparent 70%); top: -120px; right: -120px; }
                .orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, var(--orb-2) 0%, transparent 70%); bottom: -100px; left: -80px; }

                .top-nav { position: fixed; top: 24px; right: 24px; z-index: 5; }
                .theme-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 38px; height: 38px;
                    background: rgba(19, 30, 33, .1); backdrop-filter: blur(8px);
                    border: 1.5px solid var(--border); border-radius: 50%;
                    color: var(--muted); cursor: pointer;
                    transition: border-color .2s, color .2s, background .2s, transform .15s;
                }
                .theme-btn:hover { color: var(--green); border-color: rgba(0,166,103,.35); transform: rotate(15deg); }

                .back-nav { position: fixed; top: 24px; left: 24px; z-index: 5; }
                .back-btn {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(19, 30, 33, .07); backdrop-filter: blur(8px);
                    border: 1.5px solid var(--border); border-radius: 99px;
                    padding: 9px 16px 9px 12px;
                    font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
                    color: var(--muted); text-decoration: none; cursor: pointer;
                    transition: border-color .2s, color .2s, background .2s, transform .15s;
                }
                .back-btn svg { width: 15px; height: 15px; flex-shrink: 0; transition: transform .2s; }
                .back-btn:hover { color: var(--green); border-color: rgba(0,166,103,.35); transform: translateX(-2px); }
                .back-btn:hover svg { transform: translateX(-2px); }

                @media (max-width: 480px) {
                    .back-nav { top: 14px; left: 14px; }
                    .top-nav { top: 14px; right: 14px; }
                    .back-btn span { display: none; }
                    .back-btn { padding: 10px; }
                }

                .card {
                    display: grid; grid-template-columns: minmax(0, 1fr) 420px;
                    width: 100%; max-width: 980px; min-height: 580px; max-height: calc(100vh - 48px);
                    border-radius: 20px; overflow: hidden; border: 1px solid var(--border);
                    position: relative; z-index: 1;
                    animation: fadeUp .65s cubic-bezier(.22, 1, .36, 1) both;
                    box-shadow: 0 40px 80px var(--card-shadow);
                }

                @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }

                .panel-left {
                    background: var(--left-grad); padding: 52px 44px;
                    display: flex; flex-direction: column; justify-content: space-between;
                    position: relative; overflow-y: auto; min-height: 0; border-right: 1px solid var(--border);
                }

                .panel-left::before, .panel-left::after { content: ''; position: absolute; border-radius: 50%; border: 1px solid; }
                .panel-left::before { width: 340px; height: 340px; bottom: -60px; left: -60px; border-color: rgba(0,166,103,.14); }
                .panel-left::after  { width: 500px; height: 500px; bottom: -120px; left: -120px; border-color: rgba(0,166,103,.07); }

                .dots { position: absolute; top: 44px; right: 40px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; opacity: .25; }
                .dots span { width: 3px; height: 3px; border-radius: 50%; background: var(--green); display: block; }

                .fc-logo-lockup { display: flex; align-items: center; gap: 10px; text-decoration: none; position: relative; z-index: 1; }
                .fc-logo-mark { width: 36px; height: 36px; background: var(--green); border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .fc-logo-mark svg { width: 18px; height: 18px; fill: var(--bg); }
                .fc-logo-wordmark { font-size: 15px; font-weight: 700; color: var(--text); letter-spacing: .3px; line-height: 1.2; margin: 0; }
                .fc-logo-tagline { font-size: 11px; color: var(--muted); letter-spacing: .3px; margin: 0; line-height: 1; }

                .pill {
                    display: inline-flex; align-items: center; gap: 6px;
                    background: var(--green-dim); border: 1px solid rgba(0,166,103,.2);
                    border-radius: 99px; padding: 5px 12px; font-size: 11.5px; color: var(--green); font-weight: 500;
                    margin-bottom: 28px; margin-top: 24px; position: relative; z-index: 1; width: fit-content;
                }
                .pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--green); display: inline-block; animation: pulse 2s ease infinite; }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }

                .tagline { position: relative; z-index: 1; }
                .tagline h2 { font-family: 'Syne', sans-serif; font-size: clamp(24px, 3vw, 36px); font-weight: 800; line-height: 1.15; letter-spacing: -1.2px; color: var(--text); margin-bottom: 18px; }
                .tagline h2 em { font-style: normal; color: var(--green); }
                .tagline p { color: var(--muted); font-size: 14px; line-height: 1.65; max-width: 280px; }

                .stats { display: flex; position: relative; z-index: 1; }
                .stat { padding: 16px 20px; background: var(--green-dim); border: 1px solid rgba(0,166,103,.12); border-radius: 10px; flex: 1; }
                .stat + .stat { margin-left: 10px; }
                .stat-val { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--green); letter-spacing: -1px; }
                .stat-lbl { font-size: 10.5px; color: var(--muted); text-transform: uppercase; letter-spacing: .6px; margin-top: 2px; }

                .panel-right { background: var(--surface); padding: 52px 44px; display: flex; flex-direction: column; justify-content: center; position: relative; overflow-y: auto; min-height: 0; min-width: 0; }
                .panel-right::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--green), transparent); opacity: .6; }

                .status-banner { background: var(--green-dim); border: 1px solid rgba(0,166,103,.25); color: var(--green); font-size: 13px; padding: 10px 14px; border-radius: 8px; margin-bottom: 20px; }

                .form-head { margin-bottom: 36px; }
                .eyebrow { display: inline-flex; align-items: center; gap: 7px; font-size: 10.5px; font-weight: 600; color: var(--green); text-transform: uppercase; letter-spacing: 1.8px; margin-bottom: 12px; }
                .eyebrow::before { content: ''; width: 18px; height: 2px; background: var(--green); border-radius: 2px; display: inline-block; }
                .form-head h1 { font-family: 'Syne', sans-serif; font-size: 30px; font-weight: 800; color: var(--text); letter-spacing: -1px; line-height: 1.08; }
                .form-head p { margin-top: 10px; font-size: 13.5px; color: var(--muted); line-height: 1.5; }

                .field { margin-bottom: 20px; }
                .field label { display: block; font-size: 11.5px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .9px; margin-bottom: 8px; }

                .input-wrap { position: relative; }
                .input-wrap .ico { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; color: var(--muted); pointer-events: none; transition: color .2s; }
                .input-wrap:focus-within .ico { color: var(--green); }

                .fc-input {
                    width: 100%; background: var(--input-bg); border: 1.5px solid var(--border); border-radius: 10px;
                    padding: 13px 42px 13px 44px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--text); outline: none;
                    transition: border-color .2s, box-shadow .2s, background .2s;
                }
                .fc-input::placeholder { color: var(--muted); opacity: .5; }
                .fc-input:focus { border-color: var(--green); box-shadow: 0 0 0 4px var(--green-dim); }
                .fc-input.is-invalid { border-color: var(--field-error); }

                .field-error { font-size: 12px; color: var(--field-error); margin-top: 6px; }

                .eye-btn {
                    position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
                    background: none; border: none; padding: 4px; color: var(--muted); cursor: pointer; display: flex;
                    border-radius: 4px; transition: color .2s, background .2s;
                }
                .eye-btn:hover { color: var(--green); background: var(--green-dim); }

                .row-mid { display: flex; align-items: center; justify-content: space-between; margin: 2px 0 28px; }
                .check-wrap { display: flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; }
                .check-wrap input[type="checkbox"] {
                    appearance: none; width: 17px; height: 17px; border-radius: 5px;
                    border: 1.5px solid var(--border); background: var(--input-bg); cursor: pointer;
                    display: grid; place-items: center; flex-shrink: 0; transition: border-color .2s, background .2s;
                }
                .check-wrap input[type="checkbox"]:checked { background: var(--green); border-color: var(--green); }
                .check-wrap input[type="checkbox"]:checked::after {
                    content: ''; display: block; width: 9px; height: 5px;
                    border-left: 2px solid #fff; border-bottom: 2px solid #fff; transform: rotate(-45deg) translateY(-1px);
                }
                .check-wrap span { font-size: 13px; color: var(--muted); }
                .forgot { font-size: 12.5px; color: var(--green); text-decoration: none; font-weight: 500; transition: opacity .2s; }
                .forgot:hover { opacity: .7; }

                .btn {
                    width: 100%; padding: 15px; background: linear-gradient(135deg, var(--green), #009a5e);
                    color: #fff; border: none; border-radius: 10px; font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
                    letter-spacing: .2px; cursor: pointer; position: relative; overflow: hidden;
                    transition: transform .15s, box-shadow .2s, background .2s;
                }
                .btn:disabled { opacity: .7; cursor: not-allowed; }
                .btn::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, var(--panel-white-overlay), transparent); pointer-events: none; }
                .btn:hover:not(:disabled) { background: linear-gradient(135deg, var(--green-hover), #00a65e); box-shadow: 0 12px 32px var(--green-glow); transform: translateY(-2px); }
                .btn:active:not(:disabled) { transform: translateY(0); box-shadow: none; }
                .btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }

                .divider { display: flex; align-items: center; gap: 12px; margin: 24px 0; color: var(--muted); font-size: 12px; }
                .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }

                .signup-row { text-align: center; font-size: 13px; color: var(--muted); }
                .signup-row a { color: var(--green); text-decoration: none; font-weight: 600; }
                .signup-row a:hover { text-decoration: underline; }

                @media (max-width: 820px) {
                    .card { grid-template-columns: 1fr; min-height: unset; max-height: none; overflow: visible; max-width: 520px; border-radius: 16px; }
                    .panel-left { padding: 36px 32px 32px; border-right: none; border-bottom: 1px solid var(--border); overflow: visible; }
                    .dots { display: none; }
                    .tagline h2 { font-size: 22px; margin-bottom: 12px; }
                    .tagline p { display: none; }
                    .stat { padding: 12px 14px; }
                    .stat-val { font-size: 17px; }
                    .pill { margin-bottom: 20px; }
                    .panel-right { padding: 36px 32px 40px; overflow: visible; }
                    .panel-right::before { display: none; }
                }

                @media (max-width: 520px) {
                    .page { padding: 16px; }
                    .card { border-radius: 14px; }
                    .panel-left { padding: 28px 24px 24px; }
                    .fc-logo-wordmark { font-size: 14px; }
                    .tagline h2 { font-size: 20px; }
                    .stat { padding: 10px 12px; }
                    .stat-val { font-size: 16px; }
                    .stat-lbl { font-size: 10px; }
                    .panel-right { padding: 28px 24px 36px; }
                    .form-head h1 { font-size: 24px; }
                }

                @media (max-width: 380px) {
                    .stats { flex-direction: column; gap: 8px; }
                    .stat + .stat { margin-left: 0; margin-top: 8px; }
                }
            `})]})}export{N as default};
