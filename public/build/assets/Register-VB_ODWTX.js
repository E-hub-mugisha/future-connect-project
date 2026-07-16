import{r as s,u as y,j as e,H as N,L as c}from"./app-DAdnLqM_.js";const g="fc-theme";function C(){if(typeof window>"u")return"dark";const t=localStorage.getItem(g);return t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}const h=["Use 8+ chars, numbers & symbols","Weak — keep going","Fair — add numbers or symbols","Good — add a special character","Strong password ✓"],L=["","weak","fair","good","strong"];function z(t){let n=0;return t.length>=8&&n++,/[A-Z]/.test(t)&&n++,/[0-9]/.test(t)&&n++,/[^A-Za-z0-9]/.test(t)&&n++,n}function M(){const[t,n]=s.useState(C),[p,f]=s.useState(!1),[x,m]=s.useState(!1),{data:i,setData:a,post:u,processing:d,errors:o,reset:b}=y({name:"",email:"",phone:"",password:"",password_confirmation:"",terms:!1});s.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem(g,t)},[t]);const v=s.useCallback(()=>{n(r=>r==="dark"?"light":"dark")},[]),l=s.useMemo(()=>z(i.password),[i.password]),j=i.password.length===0?h[0]:h[l],w=r=>{r.preventDefault(),u(route("register"),{onFinish:()=>b("password","password_confirmation")})};return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Register | Future Connect"}),e.jsxs("div",{className:"page",children:[e.jsx("div",{className:"orb orb-1"}),e.jsx("div",{className:"orb orb-2"}),e.jsx("div",{className:"top-nav",children:e.jsx("button",{type:"button",className:"theme-btn",onClick:v,"aria-label":"Toggle light / dark theme",title:t==="dark"?"Switch to light mode":"Switch to dark mode",children:t==="dark"?e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}):e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})}),e.jsx("div",{className:"back-nav",children:e.jsxs(c,{href:"/",className:"back-btn",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),e.jsx("polyline",{points:"12 19 5 12 12 5"})]}),e.jsx("span",{children:"Back"})]})}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"panel-left",children:[e.jsx("div",{className:"dots",children:Array.from({length:20}).map((r,k)=>e.jsx("span",{},k))}),e.jsxs(c,{href:route("user.home"),className:"fc-logo-lockup",children:[e.jsx("div",{className:"fc-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-logo-wordmark",children:"Future Connect"}),e.jsx("p",{className:"fc-logo-tagline",children:"Empowering Stories. Real Impact."})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"pill",children:"Join 8K+ Professionals"}),e.jsxs("div",{className:"tagline",children:[e.jsxs("h2",{children:["Start your",e.jsx("br",{}),e.jsx("em",{children:"journey"}),e.jsx("br",{}),"today."]}),e.jsx("p",{children:"Create your free account and get discovered by verified employers across Rwanda."})]})]}),e.jsxs("div",{className:"features",children:[e.jsxs("div",{className:"feat",children:[e.jsx("div",{className:"feat-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),e.jsxs("div",{className:"feat-text",children:[e.jsx("strong",{children:"Verified Profiles"}),e.jsx("span",{children:"Stand out to employers"})]})]}),e.jsxs("div",{className:"feat",children:[e.jsx("div",{className:"feat-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})}),e.jsxs("div",{className:"feat-text",children:[e.jsx("strong",{children:"Rwanda-Wide"}),e.jsx("span",{children:"Opportunities nationwide"})]})]}),e.jsxs("div",{className:"feat",children:[e.jsx("div",{className:"feat-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),e.jsxs("div",{className:"feat-text",children:[e.jsx("strong",{children:"Secure Platform"}),e.jsx("span",{children:"Your data, protected"})]})]}),e.jsxs("div",{className:"feat",children:[e.jsx("div",{className:"feat-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]})}),e.jsxs("div",{className:"feat-text",children:[e.jsx("strong",{children:"Career Growth"}),e.jsx("span",{children:"Courses & mentorship"})]})]})]})]}),e.jsxs("div",{className:"panel-right",children:[e.jsxs("div",{className:"form-head",children:[e.jsx("div",{className:"eyebrow",children:"Create Account"}),e.jsx("h1",{children:"Join Future Connect"}),e.jsx("p",{children:"Fill in your details to get started for free"})]}),e.jsxs("form",{onSubmit:w,children:[e.jsxs("div",{className:"fields-grid",children:[e.jsxs("div",{className:"field field-full",children:[e.jsx("label",{htmlFor:"name",children:"Your Name"}),e.jsxs("div",{className:"input-wrap",children:[e.jsxs("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),e.jsx("input",{id:"name",className:`fc-input ${o.name?"is-invalid":""}`,type:"text",name:"name",value:i.name,onChange:r=>a("name",r.target.value),placeholder:"Jean Mugisha",required:!0,autoComplete:"given-name"})]}),o.name&&e.jsx("div",{className:"field-error",children:o.name})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"email",children:"Email Address"}),e.jsxs("div",{className:"input-wrap",children:[e.jsxs("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),e.jsx("input",{id:"email",className:`fc-input ${o.email?"is-invalid":""}`,type:"email",name:"email",value:i.email,onChange:r=>a("email",r.target.value),placeholder:"you@example.com",required:!0,autoComplete:"email"})]}),o.email&&e.jsx("div",{className:"field-error",children:o.email})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"phone",children:"Phone Number"}),e.jsxs("div",{className:"input-wrap",children:[e.jsx("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})}),e.jsx("input",{id:"phone",className:`fc-input ${o.phone?"is-invalid":""}`,type:"tel",name:"phone",value:i.phone,onChange:r=>a("phone",r.target.value),placeholder:"+250 7XX XXX XXX",autoComplete:"tel"})]}),o.phone&&e.jsx("div",{className:"field-error",children:o.phone})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsxs("div",{className:"input-wrap",children:[e.jsxs("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),e.jsx("input",{id:"password",className:`fc-input ${o.password?"is-invalid":""}`,type:p?"text":"password",name:"password",value:i.password,onChange:r=>a("password",r.target.value),placeholder:"••••••••",required:!0,autoComplete:"new-password"}),e.jsx("button",{type:"button",className:"eye-btn",onClick:()=>f(r=>!r),"aria-label":"Toggle password",children:p?e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}):e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})})]}),e.jsx("div",{className:"strength-bar",children:[0,1,2,3].map(r=>e.jsx("span",{className:`strength-seg ${r<l?L[l]:""}`},r))}),e.jsx("div",{className:"strength-label",style:{color:i.password.length===0?"var(--muted)":["","#e07070","#e0a045","#5ab4e0","var(--green)"][l]},children:j}),o.password&&e.jsx("div",{className:"field-error",children:o.password})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"password_confirmation",children:"Confirm Password"}),e.jsxs("div",{className:"input-wrap",children:[e.jsxs("svg",{className:"ico",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),e.jsx("input",{id:"password_confirmation",className:"fc-input",type:x?"text":"password",name:"password_confirmation",value:i.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),placeholder:"••••••••",required:!0,autoComplete:"new-password"}),e.jsx("button",{type:"button",className:"eye-btn",onClick:()=>m(r=>!r),"aria-label":"Toggle confirm password",children:x?e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}):e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})})]}),o.password_confirmation&&e.jsx("div",{className:"field-error",children:o.password_confirmation})]}),e.jsxs("div",{className:"field field-full",children:[e.jsxs("div",{className:"terms-row",children:[e.jsx("input",{type:"checkbox",id:"terms",name:"terms",checked:i.terms,onChange:r=>a("terms",r.target.checked),required:!0}),e.jsxs("label",{htmlFor:"terms",children:["I agree to the ",e.jsx("a",{href:"#",children:"Terms of Service"})," and"," ",e.jsx("a",{href:"#",children:"Privacy Policy"})," of Future Connect"]})]}),o.terms&&e.jsx("div",{className:"field-error",children:o.terms})]})]}),e.jsx("button",{className:"btn",type:"submit",disabled:d,children:e.jsxs("span",{className:"btn-inner",children:[d?"Creating account…":"Create Account",!d&&e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]}),e.jsxs("div",{className:"login-row",children:["Already have an account? ",e.jsx(c,{href:route("login"),children:"Sign In"})]})]})]})]}),e.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                :root, [data-theme="dark"] {
                    --bg: #0e1618; --surface: #131e21; --border: #1f2f33;
                    --green: #48d597; --green-hover: #00bd76;
                    --green-dim: rgba(0, 166, 103, .12); --green-glow: rgba(0, 166, 103, .28);
                    --text: #e8f0ef; --muted: #6a8a85; --input-bg: #0b1315;
                    --card-shadow: rgba(0, 0, 0, .4);
                    --grid-line: rgba(0, 166, 103, .04);
                    --orb-1: rgba(0,166,103,.1);
                    --orb-2: rgba(0,166,103,.07);
                    --left-grad: linear-gradient(145deg, #091315 0%, #0c1e21 55%, #081213 100%);
                    --panel-white-overlay: rgba(255,255,255,.09);
                    --field-error: #e07070;
                }

                [data-theme="light"] {
                    --bg: #f4f9f7; --surface: #ffffff; --border: #dde8e4;
                    --green: #00a65e; --green-hover: #00bd76;
                    --green-dim: rgba(0, 166, 94, .10); --green-glow: rgba(0, 166, 94, .22);
                    --text: #0e1618; --muted: #5c7570; --input-bg: #f3f8f6;
                    --card-shadow: rgba(20, 50, 40, .12);
                    --grid-line: rgba(0, 166, 94, .05);
                    --orb-1: rgba(0,166,94,.08);
                    --orb-2: rgba(0,166,94,.06);
                    --left-grad: linear-gradient(145deg, #e6f5ef 0%, #d9f0e6 55%, #eefaf5 100%);
                    --panel-white-overlay: rgba(255,255,255,.4);
                    --field-error: #c9463f;
                }

                html, body { min-height: 100%; background: var(--bg); font-family: 'DM Sans', sans-serif; color: var(--text); transition: background .25s, color .25s; }

                .page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px 16px; position: relative; overflow: hidden; }

                .page::before {
                    content: ''; position: fixed; inset: 0; z-index: 0; pointer-events: none;
                    background-image:
                        linear-gradient(var(--grid-line) 1px, transparent 1px),
                        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
                    background-size: 40px 40px;
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
                    display: grid; grid-template-columns: 340px minmax(0, 1fr);
                    width: 100%; max-width: 1020px; max-height: calc(100vh - 48px);
                    border-radius: 20px; overflow: hidden;
                    border: 1px solid var(--border); position: relative; z-index: 1;
                    animation: fadeUp .65s cubic-bezier(.22, 1, .36, 1) both;
                    box-shadow: 0 40px 80px var(--card-shadow);
                }

                @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }

                .panel-left {
                    background: var(--left-grad); padding: 52px 40px;
                    display: flex; flex-direction: column; justify-content: space-between;
                    position: relative; overflow-y: auto; min-height: 0;
                    border-right: 1px solid var(--border);
                }

                .panel-left::before, .panel-left::after { content: ''; position: absolute; border-radius: 50%; border: 1px solid; }
                .panel-left::before { width: 340px; height: 340px; bottom: -60px; left: -60px; border-color: rgba(0,166,103,.14); }
                .panel-left::after  { width: 500px; height: 500px; bottom: -120px; left: -120px; border-color: rgba(0,166,103,.07); }

                .dots { position: absolute; top: 44px; right: 32px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; opacity: .25; }
                .dots span { width: 3px; height: 3px; border-radius: 50%; background: var(--green); display: block; }

                .fc-logo-lockup { display: flex; align-items: center; gap: 10px; text-decoration: none; position: relative; z-index: 1; }
                .fc-logo-mark { width: 36px; height: 36px; background: var(--green); border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .fc-logo-mark svg { width: 18px; height: 18px; fill: var(--bg); }
                .fc-logo-wordmark { font-size: 15px; font-weight: 700; color: var(--text); letter-spacing: .3px; line-height: 1.2; margin: 0; }
                .fc-logo-tagline { font-size: 11px; color: var(--muted); letter-spacing: .3px; margin: 0; line-height: 1; }

                .pill { display: inline-flex; align-items: center; gap: 6px; background: var(--green-dim); border: 1px solid rgba(0,166,103,.2); border-radius: 99px; padding: 5px 12px; font-size: 11px; color: var(--green); font-weight: 500; margin-bottom: 22px; margin-top: 24px; width: fit-content; position: relative; z-index: 1; }
                .pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--green); display: inline-block; animation: pulse 2s ease infinite; }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }

                .tagline { position: relative; z-index: 1; }
                .tagline h2 { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; line-height: 1.15; letter-spacing: -1px; color: var(--text); margin-bottom: 16px; }
                .tagline h2 em { font-style: normal; color: var(--green); }
                .tagline p { color: var(--muted); font-size: 13.5px; line-height: 1.65; }

                .features { display: flex; flex-direction: column; gap: 14px; position: relative; z-index: 1; }
                .feat { display: flex; align-items: flex-start; gap: 12px; }
                .feat-icon { width: 32px; height: 32px; border-radius: 8px; background: var(--green-dim); border: 1px solid rgba(0,166,103,.2); display: grid; place-items: center; flex-shrink: 0; }
                .feat-icon svg { width: 15px; height: 15px; color: var(--green); }
                .feat-text strong { display: block; font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
                .feat-text span { font-size: 12px; color: var(--muted); }

                .panel-right {
                    background: var(--surface); padding: 48px 48px;
                    display: flex; flex-direction: column; justify-content: center;
                    position: relative; overflow-y: auto; min-height: 0; min-width: 0;
                }
                .panel-right::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--green), transparent); opacity: .6; }

                .form-head { margin-bottom: 28px; }
                .eyebrow { display: inline-flex; align-items: center; gap: 7px; font-size: 10.5px; font-weight: 600; color: var(--green); text-transform: uppercase; letter-spacing: 1.8px; margin-bottom: 10px; }
                .eyebrow::before { content: ''; width: 18px; height: 2px; background: var(--green); border-radius: 2px; display: inline-block; }
                .form-head h1 { font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; color: var(--text); letter-spacing: -.8px; line-height: 1.1; }
                .form-head p { margin-top: 8px; font-size: 13px; color: var(--muted); }

                .fields-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .field-full { grid-column: 1 / -1; }

                .field { display: flex; flex-direction: column; }
                .field label { font-size: 11px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: .9px; margin-bottom: 7px; }

                .input-wrap { position: relative; }
                .input-wrap .ico { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 15px; height: 15px; color: var(--muted); pointer-events: none; transition: color .2s; }
                .input-wrap:focus-within .ico { color: var(--green); }

                .fc-input {
                    width: 100%; background: var(--input-bg); border: 1.5px solid var(--border); border-radius: 10px;
                    padding: 12px 14px 12px 42px; font-family: 'DM Sans', sans-serif; font-size: 13.5px; color: var(--text); outline: none;
                    transition: border-color .2s, box-shadow .2s, background .2s;
                }
                .fc-input::placeholder { color: var(--muted); opacity: .5; }
                .fc-input:focus { border-color: var(--green); box-shadow: 0 0 0 4px var(--green-dim); }
                .fc-input.is-invalid { border-color: var(--field-error); }

                .field-error { font-size: 11.5px; color: var(--field-error); margin-top: 5px; }

                .strength-bar { display: flex; gap: 4px; margin-top: 8px; }
                .strength-seg { height: 3px; flex: 1; border-radius: 2px; background: var(--border); transition: background .3s; }
                .strength-seg.weak   { background: #e05a5a; }
                .strength-seg.fair   { background: #e0a045; }
                .strength-seg.good   { background: #5ab4e0; }
                .strength-seg.strong { background: var(--green); }
                .strength-label { font-size: 11px; color: var(--muted); margin-top: 5px; }

                .eye-btn { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; padding: 4px; color: var(--muted); cursor: pointer; display: flex; border-radius: 4px; transition: color .2s, background .2s; }
                .eye-btn:hover { color: var(--green); background: var(--green-dim); }

                .terms-row { display: flex; align-items: flex-start; gap: 10px; }
                .terms-row input[type="checkbox"] { appearance: none; width: 17px; height: 17px; border-radius: 5px; border: 1.5px solid var(--border); background: var(--input-bg); cursor: pointer; display: grid; place-items: center; flex-shrink: 0; margin-top: 1px; transition: border-color .2s, background .2s; }
                .terms-row input[type="checkbox"]:checked { background: var(--green); border-color: var(--green); }
                .terms-row input[type="checkbox"]:checked::after { content: ''; display: block; width: 9px; height: 5px; border-left: 2px solid #fff; border-bottom: 2px solid #fff; transform: rotate(-45deg) translateY(-1px); }
                .terms-row label { font-size: 12.5px; color: var(--muted); line-height: 1.5; cursor: pointer; }
                .terms-row label a { color: var(--green); text-decoration: none; font-weight: 500; }
                .terms-row label a:hover { text-decoration: underline; }

                .btn {
                    width: 100%; padding: 14px; background: linear-gradient(135deg, var(--green), #009a5e);
                    color: #fff; border: none; border-radius: 10px; font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
                    letter-spacing: .2px; cursor: pointer; position: relative; overflow: hidden;
                    transition: transform .15s, box-shadow .2s, background .2s; margin-top: 20px;
                }
                .btn:disabled { opacity: .7; cursor: not-allowed; }
                .btn::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, var(--panel-white-overlay), transparent); pointer-events: none; }
                .btn:hover:not(:disabled) { background: linear-gradient(135deg, var(--green-hover), #00a65e); box-shadow: 0 12px 32px var(--green-glow); transform: translateY(-2px); }
                .btn:active:not(:disabled) { transform: translateY(0); }
                .btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }

                .login-row { text-align: center; margin-top: 20px; font-size: 13px; color: var(--muted); }
                .login-row a { color: var(--green); text-decoration: none; font-weight: 600; }
                .login-row a:hover { text-decoration: underline; }

                @media (max-width: 880px) {
                    .card { grid-template-columns: 1fr; max-width: 560px; max-height: none; overflow: visible; }
                    .panel-left { border-right: none; border-bottom: 1px solid var(--border); padding: 32px 28px 28px; overflow: visible; }
                    .dots { display: none; }
                    .tagline h2 { font-size: 22px; }
                    .tagline p { display: none; }
                    .features { flex-direction: row; flex-wrap: wrap; gap: 10px; }
                    .feat { flex: 1; min-width: 140px; }
                    .panel-right { padding: 36px 32px 40px; overflow: visible; }
                }

                @media (max-width: 600px) {
                    .fields-grid { grid-template-columns: 1fr; }
                    .field-full { grid-column: unset; }
                }

                @media (max-width: 480px) {
                    .page { padding: 16px; }
                    .panel-left { padding: 24px 20px; }
                    .panel-right { padding: 28px 20px 36px; }
                    .form-head h1 { font-size: 22px; }
                    .features { display: none; }
                }
            `})]})}export{M as default};
