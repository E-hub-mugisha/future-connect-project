import{r as i,u as v,j as e,H as j,L as n}from"./app-B2SIh33N.js";const c="fc-theme";function w(){if(typeof window>"u")return"dark";const t=localStorage.getItem(c);return t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function y({status:t,canResetPassword:x}){const[a,h]=i.useState(w),[s,m]=i.useState(!1),{data:d,setData:l,post:g,processing:p,errors:o,reset:u}=v({email:"",password:"",remember:!1});i.useEffect(()=>{document.documentElement.setAttribute("data-theme",a),localStorage.setItem(c,a)},[a]);const b=i.useCallback(()=>{h(r=>r==="dark"?"light":"dark")},[]),f=r=>{r.preventDefault(),g(route("login"),{onFinish:()=>u("password")})};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Sign In | Future Connect"}),e.jsxs("div",{className:"login-page",children:[e.jsxs("div",{className:"background",children:[e.jsx("div",{className:"background-grid"}),e.jsx("div",{className:"glow glow-one"}),e.jsx("div",{className:"glow glow-two"})]}),e.jsxs("header",{className:"topbar",children:[e.jsxs(n,{href:"/",className:"back-link",children:[e.jsx("span",{className:"back-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 12H5"}),e.jsx("path",{d:"M12 19l-7-7 7-7"})]})}),e.jsx("span",{children:"Back to home"})]}),e.jsx("button",{type:"button",className:"theme-toggle",onClick:b,"aria-label":"Toggle theme",children:a==="dark"?e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"4"}),e.jsx("path",{d:"M12 2v2"}),e.jsx("path",{d:"M12 20v2"}),e.jsx("path",{d:"m4.93 4.93 1.41 1.41"}),e.jsx("path",{d:"m17.66 17.66 1.41 1.41"}),e.jsx("path",{d:"M2 12h2"}),e.jsx("path",{d:"M20 12h2"}),e.jsx("path",{d:"m6.34 17.66-1.41 1.41"}),e.jsx("path",{d:"m19.07 4.93-1.41 1.41"})]}):e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})]}),e.jsx("main",{className:"login-container",children:e.jsxs("div",{className:"login-card",children:[e.jsxs("section",{className:"brand-panel",children:[e.jsxs("div",{className:"brand-content",children:[e.jsxs(n,{href:route("user.home"),className:"brand",children:[e.jsx("div",{className:"brand-logo",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.2 2L4 13.2H11.3L10.4 22L20 10.4H12.7L13.2 2Z",fill:"currentColor"})})}),e.jsxs("div",{className:"brand-text",children:[e.jsx("strong",{children:"Future Connect"}),e.jsx("span",{children:"Talent • Skills • Opportunities"})]})]}),e.jsxs("div",{className:"brand-message",children:[e.jsx("span",{className:"brand-label",children:"YOUR FUTURE STARTS HERE"}),e.jsxs("h2",{children:["Connect your",e.jsx("span",{children:" talent"}),e.jsx("br",{}),"with opportunity."]}),e.jsx("p",{children:"Discover inspiring stories, impactful skills, and creative talent across Africa."})]}),e.jsxs("div",{className:"feature-list",children:[e.jsxs("div",{className:"feature",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 7L10 17l-5-5"})})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Discover opportunities"}),e.jsx("span",{children:"Find jobs, gigs, courses and more."})]})]}),e.jsxs("div",{className:"feature",children:[e.jsx("div",{className:"feature-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M5 21a7 7 0 0 1 14 0"})]})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Showcase your skills"}),e.jsx("span",{children:"Build your professional presence."})]})]}),e.jsxs("div",{className:"feature",children:[e.jsx("div",{className:"feature-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Connect with people"}),e.jsx("span",{children:"Meet people who can move you forward."})]})]})]})]}),e.jsxs("div",{className:"brand-footer",children:[e.jsx("span",{children:"Future Connect"}),e.jsx("span",{className:"footer-dot"}),e.jsx("span",{children:"Building Africa's talent ecosystem"})]})]}),e.jsx("section",{className:"form-panel",children:e.jsxs("div",{className:"form-container",children:[e.jsxs("div",{className:"form-header",children:[e.jsxs("div",{className:"mobile-brand",children:[e.jsx("div",{className:"brand-logo",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.2 2L4 13.2H11.3L10.4 22L20 10.4H12.7L13.2 2Z",fill:"currentColor"})})}),e.jsx("span",{children:"Future Connect"})]}),e.jsx("span",{className:"welcome-label",children:"WELCOME BACK"}),e.jsxs("h1",{children:["Sign in to your",e.jsx("br",{}),"account"]}),e.jsx("p",{children:"Enter your details below to continue."})]}),t&&e.jsxs("div",{className:"status-message",children:[e.jsx("span",{className:"status-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})})}),e.jsx("span",{children:t})]}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email address"}),e.jsxs("div",{className:`input-container ${o.email?"has-error":""}`,children:[e.jsx("span",{className:"input-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),e.jsx("path",{d:"m3 7 9 6 9-6"})]})}),e.jsx("input",{id:"email",type:"email",name:"email",value:d.email,onChange:r=>l("email",r.target.value),placeholder:"you@example.com",autoComplete:"username",autoFocus:!0,required:!0})]}),o.email&&e.jsx("span",{className:"error-message",children:o.email})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("div",{className:"label-row",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),x&&e.jsx(n,{href:route("password.request"),className:"forgot-link",children:"Forgot password?"})]}),e.jsxs("div",{className:`input-container ${o.password?"has-error":""}`,children:[e.jsx("span",{className:"input-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"10",rx:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),e.jsx("input",{id:"password",type:s?"text":"password",name:"password",value:d.password,onChange:r=>l("password",r.target.value),placeholder:"Enter your password",autoComplete:"current-password",required:!0}),e.jsx("button",{type:"button",className:"password-toggle",onClick:()=>m(r=>!r),"aria-label":s?"Hide password":"Show password",children:s?e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}):e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 3l18 18"}),e.jsx("path",{d:"M10.6 10.6a2 2 0 0 0 2.8 2.8"}),e.jsx("path",{d:"M9.9 4.2A10.5 10.5 0 0 1 12 4c6.5 0 10 8 10 8a17 17 0 0 1-3.1 4.4"}),e.jsx("path",{d:"M6.6 6.6C3.8 8.5 2 12 2 12s3.5 8 10 8a10.8 10.8 0 0 0 4.1-.8"})]})})]}),o.password&&e.jsx("span",{className:"error-message",children:o.password})]}),e.jsx("div",{className:"form-options",children:e.jsxs("label",{className:"remember",children:[e.jsx("input",{type:"checkbox",checked:d.remember,onChange:r=>l("remember",r.target.checked)}),e.jsx("span",{className:"custom-checkbox",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M5 12l4 4L19 6"})})}),e.jsx("span",{children:"Remember me"})]})}),e.jsx("button",{type:"submit",className:"submit-button",disabled:p,children:p?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Signing you in..."]}):e.jsxs(e.Fragment,{children:["Sign in",e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m13 6 6 6-6 6"})]})]})})]}),e.jsxs("div",{className:"signup",children:[e.jsx("span",{children:"Don't have an account?"}),e.jsx(n,{href:route("register"),children:"Create an account"})]})]})})]})}),e.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," Future Connect. All rights reserved."]})]}),e.jsx("style",{children:`

                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap');

                * {
                    box-sizing: border-box;
                }

                html,
                body,
                #app {
                    min-height: 100%;
                    margin: 0;
                }

                :root,
                [data-theme="dark"] {
                    --bg: #07110f;
                    --surface: #101a18;
                    --surface-2: #0c1513;
                    --surface-soft: #15221f;

                    --border: rgba(255,255,255,.08);
                    --border-strong: rgba(255,255,255,.12);

                    --primary: #48d597;
                    --primary-dark: #00a667;
                    --primary-soft: rgba(72,213,151,.10);
                    --primary-border: rgba(72,213,151,.25);

                    --text: #f0f7f4;
                    --text-soft: #c1d0cb;
                    --muted: #78908a;

                    --danger: #f27777;

                    --shadow: rgba(0,0,0,.45);
                }

                [data-theme="light"] {
                    --bg: #f5f8f7;
                    --surface: #ffffff;
                    --surface-2: #f7faf9;
                    --surface-soft: #edf6f2;

                    --border: #e2ebe7;
                    --border-strong: #d5e2dd;

                    --primary: #00a667;
                    --primary-dark: #008c58;
                    --primary-soft: rgba(0,166,103,.08);
                    --primary-border: rgba(0,166,103,.20);

                    --text: #10201b;
                    --text-soft: #49615a;
                    --muted: #71857f;

                    --danger: #cf4e4e;

                    --shadow: rgba(23,55,45,.13);
                }

                body {
                    font-family: 'DM Sans', sans-serif;
                    background: var(--bg);
                    color: var(--text);
                }

                button,
                input {
                    font-family: inherit;
                }

                .login-page {
                    min-height: 100vh;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    background: var(--bg);
                }

                /* -------------------------
                   BACKGROUND
                ------------------------- */

                .background {
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    overflow: hidden;
                }

                .background-grid {
                    position: absolute;
                    inset: 0;

                    background-image:
                        linear-gradient(
                            rgba(72,213,151,.025) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(72,213,151,.025) 1px,
                            transparent 1px
                        );

                    background-size: 48px 48px;
                }

                .glow {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                }

                .glow-one {
                    width: 500px;
                    height: 500px;
                    top: -280px;
                    right: -120px;
                    background: rgba(0,166,103,.11);
                }

                .glow-two {
                    width: 420px;
                    height: 420px;
                    bottom: -250px;
                    left: -150px;
                    background: rgba(0,166,103,.07);
                }

                /* -------------------------
                   TOPBAR
                ------------------------- */

                .topbar {
                    position: relative;
                    z-index: 10;

                    width: 100%;
                    padding: 24px 32px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;

                    color: var(--muted);
                    text-decoration: none;

                    font-size: 13px;
                    font-weight: 600;

                    transition:
                        color .2s ease,
                        transform .2s ease;
                }

                .back-link:hover {
                    color: var(--primary);
                    transform: translateX(-2px);
                }

                .back-icon {
                    width: 32px;
                    height: 32px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid var(--border);
                    border-radius: 9px;

                    background: var(--surface);

                    transition: border-color .2s ease;
                }

                .back-link:hover .back-icon {
                    border-color: var(--primary-border);
                }

                .back-icon svg {
                    width: 16px;
                    height: 16px;
                }

                .theme-toggle {
                    width: 36px;
                    height: 36px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid var(--border);
                    border-radius: 10px;

                    background: var(--surface);
                    color: var(--muted);

                    cursor: pointer;

                    transition:
                        color .2s ease,
                        border-color .2s ease,
                        transform .2s ease;
                }

                .theme-toggle:hover {
                    color: var(--primary);
                    border-color: var(--primary-border);
                    transform: translateY(-1px);
                }

                .theme-toggle svg {
                    width: 17px;
                    height: 17px;
                }

                /* -------------------------
                   MAIN
                ------------------------- */

                .login-container {
                    position: relative;
                    z-index: 2;

                    flex: 1;

                    width: 100%;
                    max-width: 1120px;

                    margin: 0 auto;

                    padding: 24px 24px 48px;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .login-card {
                    width: 100%;
                    min-height: 650px;

                    display: grid;
                    grid-template-columns: minmax(0, 1.05fr) minmax(400px, .95fr);

                    overflow: hidden;

                    border: 1px solid var(--border);
                    border-radius: 24px;

                    background: var(--surface);

                    box-shadow:
                        0 35px 90px var(--shadow),
                        0 1px 0 rgba(255,255,255,.02) inset;

                    animation: card-enter .6s cubic-bezier(.22,1,.36,1);
                }

                @keyframes card-enter {
                    from {
                        opacity: 0;
                        transform: translateY(22px) scale(.985);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                /* -------------------------
                   BRAND PANEL
                ------------------------- */

                .brand-panel {
                    position: relative;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    padding: 54px;

                    background:
                        radial-gradient(
                            circle at 20% 80%,
                            rgba(72,213,151,.09),
                            transparent 35%
                        ),
                        linear-gradient(
                            145deg,
                            #091311 0%,
                            #0c1d19 50%,
                            #08110f 100%
                        );

                    border-right: 1px solid var(--border);

                    overflow: hidden;
                }

                [data-theme="light"] .brand-panel {
                    background:
                        radial-gradient(
                            circle at 20% 80%,
                            rgba(0,166,103,.08),
                            transparent 35%
                        ),
                        linear-gradient(
                            145deg,
                            #effaf5,
                            #e4f5ed 55%,
                            #f4fbf8
                        );
                }

                .brand-panel::before {
                    content: '';

                    position: absolute;

                    width: 420px;
                    height: 420px;

                    right: -250px;
                    top: -230px;

                    border: 1px solid rgba(72,213,151,.14);
                    border-radius: 50%;
                }

                .brand-panel::after {
                    content: '';

                    position: absolute;

                    width: 560px;
                    height: 560px;

                    right: -320px;
                    top: -300px;

                    border: 1px solid rgba(72,213,151,.07);
                    border-radius: 50%;
                }

                .brand-content {
                    position: relative;
                    z-index: 2;
                }

                .brand {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;

                    text-decoration: none;
                }

                .brand-logo {
                    width: 42px;
                    height: 42px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 11px;

                    background: var(--primary);
                    color: #06120e;

                    box-shadow: 0 8px 25px rgba(0,166,103,.18);
                }

                .brand-logo svg {
                    width: 22px;
                    height: 22px;
                }

                .brand-text {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .brand-text strong {
                    color: var(--text);
                    font-family: 'Manrope', sans-serif;
                    font-size: 15px;
                    font-weight: 800;
                    letter-spacing: -.2px;
                }

                .brand-text span {
                    color: var(--muted);
                    font-size: 10.5px;
                    letter-spacing: .2px;
                }

                .brand-message {
                    margin-top: 100px;
                }

                .brand-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;

                    color: var(--primary);

                    font-size: 10px;
                    font-weight: 700;

                    letter-spacing: 1.6px;
                }

                .brand-label::before {
                    content: '';

                    width: 20px;
                    height: 2px;

                    border-radius: 2px;

                    background: var(--primary);
                }

                .brand-message h2 {
                    margin: 18px 0 18px;

                    color: var(--text);

                    font-family: 'Manrope', sans-serif;
                    font-size: clamp(32px, 3.2vw, 46px);
                    line-height: 1.1;
                    letter-spacing: -2px;
                    font-weight: 800;
                }

                .brand-message h2 span {
                    color: var(--primary);
                }

                .brand-message p {
                    max-width: 390px;

                    margin: 0;

                    color: var(--text-soft);

                    font-size: 14px;
                    line-height: 1.7;
                }

                .feature-list {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;

                    margin-top: 42px;
                }

                .feature {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                }

                .feature-icon {
                    width: 34px;
                    height: 34px;

                    flex-shrink: 0;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid var(--primary-border);
                    border-radius: 9px;

                    background: var(--primary-soft);
                    color: var(--primary);
                }

                .feature-icon svg {
                    width: 16px;
                    height: 16px;
                }

                .feature div:last-child {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .feature strong {
                    color: var(--text);
                    font-size: 12.5px;
                    font-weight: 600;
                }

                .feature span {
                    color: var(--muted);
                    font-size: 11.5px;
                }

                .brand-footer {
                    position: relative;
                    z-index: 2;

                    display: flex;
                    align-items: center;
                    gap: 9px;

                    color: var(--muted);

                    font-size: 10.5px;
                }

                .footer-dot {
                    width: 3px;
                    height: 3px;

                    border-radius: 50%;

                    background: var(--primary);
                }

                /* -------------------------
                   FORM PANEL
                ------------------------- */

                .form-panel {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    padding: 54px 60px;

                    background: var(--surface);
                }

                .form-container {
                    width: 100%;
                    max-width: 390px;
                }

                .mobile-brand {
                    display: none;
                }

                .form-header {
                    margin-bottom: 34px;
                }

                .welcome-label {
                    display: inline-block;

                    margin-bottom: 12px;

                    color: var(--primary);

                    font-size: 10px;
                    font-weight: 700;

                    letter-spacing: 1.6px;
                }

                .form-header h1 {
                    margin: 0;

                    color: var(--text);

                    font-family: 'Manrope', sans-serif;
                    font-size: 30px;
                    line-height: 1.18;
                    letter-spacing: -1.2px;
                    font-weight: 800;
                }

                .form-header p {
                    margin: 11px 0 0;

                    color: var(--muted);

                    font-size: 13px;
                    line-height: 1.6;
                }

                /* Status */

                .status-message {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    margin-bottom: 22px;
                    padding: 11px 13px;

                    border: 1px solid var(--primary-border);
                    border-radius: 10px;

                    background: var(--primary-soft);

                    color: var(--primary);

                    font-size: 12px;
                }

                .status-icon {
                    width: 20px;
                    height: 20px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 50%;

                    background: var(--primary);

                    color: #07110f;
                }

                .status-icon svg {
                    width: 12px;
                    height: 12px;
                }

                /* Form */

                .form-group {
                    margin-bottom: 21px;
                }

                .form-group label {
                    display: block;

                    margin-bottom: 8px;

                    color: var(--text-soft);

                    font-size: 12px;
                    font-weight: 600;
                }

                .label-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .label-row label {
                    margin-bottom: 8px;
                }

                .forgot-link {
                    color: var(--primary);

                    font-size: 11.5px;
                    font-weight: 600;

                    text-decoration: none;

                    transition: opacity .2s;
                }

                .forgot-link:hover {
                    opacity: .7;
                }

                .input-container {
                    position: relative;
                }

                .input-icon {
                    position: absolute;

                    left: 14px;
                    top: 50%;

                    transform: translateY(-50%);

                    display: flex;

                    color: var(--muted);

                    pointer-events: none;

                    transition: color .2s;
                }

                .input-icon svg {
                    width: 17px;
                    height: 17px;
                }

                .input-container:focus-within .input-icon {
                    color: var(--primary);
                }

                .input-container input {
                    width: 100%;
                    height: 48px;

                    padding: 0 44px;

                    border: 1px solid var(--border-strong);
                    border-radius: 10px;

                    outline: none;

                    background: var(--surface-2);

                    color: var(--text);

                    font-size: 13px;

                    transition:
                        border-color .2s,
                        box-shadow .2s,
                        background .2s;
                }

                .input-container input::placeholder {
                    color: var(--muted);
                    opacity: .7;
                }

                .input-container input:hover {
                    border-color: var(--border-strong);
                }

                .input-container input:focus {
                    border-color: var(--primary);

                    background: var(--surface);

                    box-shadow:
                        0 0 0 3px var(--primary-soft);
                }

                .input-container.has-error input {
                    border-color: var(--danger);
                }

                .password-toggle {
                    position: absolute;

                    right: 12px;
                    top: 50%;

                    transform: translateY(-50%);

                    width: 28px;
                    height: 28px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 0;
                    border-radius: 7px;

                    background: transparent;
                    color: var(--muted);

                    cursor: pointer;

                    transition:
                        color .2s,
                        background .2s;
                }

                .password-toggle:hover {
                    color: var(--primary);
                    background: var(--primary-soft);
                }

                .password-toggle svg {
                    width: 16px;
                    height: 16px;
                }

                .error-message {
                    display: block;

                    margin-top: 6px;

                    color: var(--danger);

                    font-size: 11px;
                }

                /* Remember */

                .form-options {
                    display: flex;
                    align-items: center;

                    margin-top: -2px;
                    margin-bottom: 25px;
                }

                .remember {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;

                    color: var(--muted);

                    font-size: 12px;

                    cursor: pointer;
                    user-select: none;
                }

                .remember input {
                    position: absolute;
                    opacity: 0;
                    pointer-events: none;
                }

                .custom-checkbox {
                    width: 17px;
                    height: 17px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid var(--border-strong);
                    border-radius: 5px;

                    background: var(--surface-2);

                    transition:
                        background .2s,
                        border-color .2s;
                }

                .custom-checkbox svg {
                    width: 11px;
                    height: 11px;

                    color: white;

                    opacity: 0;
                    transform: scale(.7);

                    transition:
                        opacity .15s,
                        transform .15s;
                }

                .remember input:checked + .custom-checkbox {
                    background: var(--primary);
                    border-color: var(--primary);
                }

                .remember input:checked + .custom-checkbox svg {
                    opacity: 1;
                    transform: scale(1);
                }

                /* Button */

                .submit-button {
                    width: 100%;
                    height: 49px;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;

                    border: 0;
                    border-radius: 10px;

                    background: var(--primary);

                    color: #05120d;

                    font-family: 'Manrope', sans-serif;
                    font-size: 13px;
                    font-weight: 800;

                    cursor: pointer;

                    box-shadow:
                        0 8px 22px rgba(0,166,103,.14);

                    transition:
                        transform .2s,
                        box-shadow .2s,
                        background .2s;
                }

                .submit-button svg {
                    width: 16px;
                    height: 16px;

                    transition: transform .2s;
                }

                .submit-button:hover:not(:disabled) {
                    background: var(--primary-dark);

                    transform: translateY(-1px);

                    box-shadow:
                        0 12px 28px rgba(0,166,103,.20);
                }

                .submit-button:hover:not(:disabled) svg {
                    transform: translateX(3px);
                }

                .submit-button:active:not(:disabled) {
                    transform: translateY(0);
                }

                .submit-button:disabled {
                    cursor: not-allowed;
                    opacity: .7;
                }

                .spinner {
                    width: 15px;
                    height: 15px;

                    border: 2px solid rgba(5,18,13,.25);
                    border-top-color: #05120d;

                    border-radius: 50%;

                    animation: spin .7s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* Signup */

                .signup {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;

                    margin-top: 27px;

                    color: var(--muted);

                    font-size: 12px;
                }

                .signup a {
                    color: var(--primary);

                    font-weight: 700;

                    text-decoration: none;
                }

                .signup a:hover {
                    text-decoration: underline;
                }

                /* Copyright */

                .copyright {
                    position: relative;
                    z-index: 2;

                    padding: 0 24px 22px;

                    text-align: center;

                    color: var(--muted);

                    font-size: 10px;
                }

                /* -------------------------
                   TABLET
                ------------------------- */

                @media (max-width: 900px) {

                    .login-container {
                        padding-top: 12px;
                    }

                    .login-card {
                        grid-template-columns: 1fr 1fr;
                    }

                    .brand-panel {
                        padding: 42px;
                    }

                    .brand-message {
                        margin-top: 70px;
                    }

                    .brand-message h2 {
                        font-size: 32px;
                    }

                    .form-panel {
                        padding: 42px;
                    }

                }

                /* -------------------------
                   MOBILE
                ------------------------- */

                @media (max-width: 720px) {

                    .topbar {
                        padding: 16px 18px;
                    }

                    .back-link span:last-child {
                        display: none;
                    }

                    .back-icon {
                        width: 36px;
                        height: 36px;
                    }

                    .theme-toggle {
                        width: 36px;
                        height: 36px;
                    }

                    .login-container {
                        padding: 8px 16px 35px;

                        align-items: flex-start;
                    }

                    .login-card {
                        display: block;

                        min-height: auto;

                        border-radius: 18px;
                    }

                    .brand-panel {
                        display: none;
                    }

                    .form-panel {
                        padding: 38px 26px 34px;

                        min-height: 590px;
                    }

                    .mobile-brand {
                        display: flex;
                        align-items: center;
                        gap: 10px;

                        margin-bottom: 38px;
                    }

                    .mobile-brand .brand-logo {
                        width: 36px;
                        height: 36px;

                        border-radius: 9px;
                    }

                    .mobile-brand .brand-logo svg {
                        width: 19px;
                        height: 19px;
                    }

                    .mobile-brand span {
                        color: var(--text);

                        font-family: 'Manrope', sans-serif;
                        font-size: 14px;
                        font-weight: 800;
                    }

                    .form-header {
                        margin-bottom: 30px;
                    }

                    .form-header h1 {
                        font-size: 27px;
                    }

                    .copyright {
                        padding-bottom: 16px;
                    }

                }

                @media (max-width: 400px) {

                    .form-panel {
                        padding: 30px 20px;
                    }

                    .mobile-brand {
                        margin-bottom: 30px;
                    }

                    .form-header h1 {
                        font-size: 24px;
                    }

                    .input-container input {
                        height: 46px;
                    }

                    .submit-button {
                        height: 47px;
                    }

                }

                /* -------------------------
                   REDUCED MOTION
                ------------------------- */

                @media (prefers-reduced-motion: reduce) {

                    *,
                    *::before,
                    *::after {
                        animation-duration: .01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: .01ms !important;
                    }

                }

            `})]})}export{y as default};
