import{d as A,r as n,u as G,j as e,L as t}from"./app-ClS8wKza.js";const Q={"user.home":"/","talent.connections-room":"/connection-room","user.projects.index":"/projects","user.jobs.index":"/find_work","user.courses":"/learning_center","user.talents":"/skills-marketplace","user.products.index":"/products","solutions.students":"/solutions/students","solutions.ngos":"/solutions/ngos","solutions.companies":"/solutions/companies","solutions.professionals":"/solutions/professionals","solutions.universities":"/solutions/universities","solutions.investors":"/solutions/investors","user.trending.index":"/trending","user.how-it-works":"/how-it-works","user.contact":"/contact","user.success-stories":"/success-stories","user.faq":"/faq",pricing:"/pricing","demo.request":"/demo-request","user.register_skills":"/register/skills","talent.search":"/search",login:"/login",register:"/register","password.request":"/forgot-password","admin.dashboard":"/admin/dashboard","agent.dashboard":"/agent/dashboard","talent.dashboard":"/talent/dashboard","seller.dashboard":"/seller/dashboard","user.dashboard":"/dashboard","seller.store":"/seller/apply","user.jobs.store":"/jobs"},Z={admin:"admin.dashboard",agent:"agent.dashboard",talent:"talent.dashboard",seller:"seller.dashboard",user:"user.dashboard"},ee=60,I=[{route:"talent.connections-room",title:"Professional Connections",desc:"Connect with experts and peers in your field."},{route:"user.projects.index",title:"Project Collaboration",desc:"Build projects with talented people."},{route:"user.jobs.index",title:"Job Opportunities",desc:"Find jobs, internships, and career opportunities."},{route:"user.courses",title:"Learning",desc:"Learn, grow, and earn new certifications."},{route:"user.talents",title:"Skills Hub",desc:"Showcase your skills and portfolio."},{route:"user.products.index",title:"Marketplace",desc:"Buy and sell technology solutions."}],T=[{route:"solutions.students",title:"For Students",desc:"Launch your career with confidence."},{route:"solutions.ngos",title:"For NGOs",desc:"Partner with skilled local talent."},{route:"solutions.companies",title:"For Companies",desc:"Find verified and sharp skills faster."},{route:"solutions.professionals",title:"For Professionals",desc:"Grow your network and opportunities."},{route:"solutions.universities",title:"For Universities",desc:"Empower students beyond graduation."},{route:"solutions.investors",title:"For Investors",desc:"Discover skills worth investing in."}],D=[{route:"user.how-it-works",title:"How It Works",desc:"See the platform in action."},{route:"user.contact",title:"Contact",desc:"Get in touch with our team."},{route:"user.success-stories",title:"Customer Stories",desc:"Real outcomes from real talent."},{route:"user.contact",title:"Partnerships",desc:"Team up with FutureConnect."},{route:"user.faq",title:"FAQ",desc:"Answers to common questions."},{route:"user.contact",title:"Help & Support",desc:"Get help when you need it."}];function re({categories:v=[],currentUser:i=null,routes:a={},csrfToken:u="",onLoginSuccess:b,onApplySellerSuccess:x,onPostJobSubmit:g}){const s=r=>a[r]||Q[r]||"#",{url:p}=A(),m=(p||"/").split("?")[0],f=(r,{exact:o=!1}={})=>{const h=s(r);return h==="#"?!1:o?m===h:h==="/"?m==="/":m.startsWith(h)},[N,W]=n.useState(!1),S=n.useRef(null),z=n.useRef(null),P=n.useRef(null);n.useEffect(()=>{function r(){W(window.scrollY>ee)}return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const y=()=>{S.current&&z.current&&(z.current.style.height=`${S.current.offsetHeight}px`)};n.useEffect(()=>(y(),window.addEventListener("resize",y,{passive:!0}),()=>window.removeEventListener("resize",y)),[]),n.useEffect(()=>{const r=P.current;if(!r)return;const o=()=>y();return r.addEventListener("transitionend",o),()=>r.removeEventListener("transitionend",o)},[]),n.useEffect(()=>{const r=requestAnimationFrame(y);return()=>cancelAnimationFrame(r)},[N]);const[C,O]=n.useState("dark");n.useEffect(()=>{const r=localStorage.getItem("fc-theme"),o=window.matchMedia("(prefers-color-scheme: light)").matches;O(r||(o?"light":"dark"))},[]),n.useEffect(()=>{const r=document.documentElement;C==="light"?r.setAttribute("data-h-theme","light"):r.removeAttribute("data-h-theme"),localStorage.setItem("fc-theme",C)},[C]);const $=()=>O(r=>r==="light"?"dark":"light"),[L,w]=n.useState(!1),E=n.useRef(null),_=n.useRef(null),l=G({email:"",password:"",remember:!1}),X=r=>{r.preventDefault(),l.post(s("login"),{preserveScroll:!0,onSuccess:()=>{l.reset("password"),w(!1),b&&b()},onError:o=>{console.log("Login errors:",o),l.reset("password")}})};n.useEffect(()=>{function r(h){L&&E.current&&!E.current.contains(h.target)&&h.target!==_.current&&w(!1)}function o(h){h.key==="Escape"&&w(!1)}return document.addEventListener("click",r),document.addEventListener("keydown",o),()=>{document.removeEventListener("click",r),document.removeEventListener("keydown",o)}},[L]);const c=G({company_name:"",email:"",phone:"",address:"",description:""}),K=r=>{r.preventDefault(),c.post(s("seller.store"),{preserveScroll:!0,onSuccess:()=>{c.reset(),x&&x();const o=document.getElementById("applySellerModal");if(o&&window.bootstrap){const h=window.bootstrap.Modal.getInstance(o);h&&h.hide()}}})},[F,k]=n.useState(!1),q=n.useRef(null);n.useEffect(()=>{if(F){const r=setTimeout(()=>{var o;return(o=q.current)==null?void 0:o.focus()},100);return()=>clearTimeout(r)}},[F]),n.useEffect(()=>{function r(o){o.key==="Escape"&&k(!1)}return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[]);const[R,d]=n.useState(!1),[j,V]=n.useState({platform:!1,solutions:!1,company:!1});n.useEffect(()=>(document.body.style.overflow=R?"hidden":"",()=>{document.body.style.overflow=""}),[R]);const M=r=>V(o=>({...o,[r]:!o[r]})),J=()=>{d(!1),setTimeout(()=>{var r;w(!0),(r=_.current)==null||r.scrollIntoView({behavior:"smooth",block:"center"})},350)},H=i?s(Z[i.role]||"user.dashboard"):null,B=I.some(r=>f(r.route)),Y=T.some(r=>f(r.route)),U=D.some(r=>f(r.route));return e.jsxs(e.Fragment,{children:[e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
        :root {
          --h-bg: #0e1618;
          --h-surface: #141d20;
          --h-surface2: #1a2428;
          --h-green: #48d597;
          --h-green-d: rgba(0, 166, 103, 0.14);
          --h-green-b: rgba(0, 166, 103, 0.22);
          --h-text: #e8f0ed;
          --h-muted: #7a9a8e;
          --h-border: rgba(0, 166, 103, 0.16);
          --h-border-h: rgba(0, 166, 103, 0.38);
          --h-radius: 10px;
          --h-error: #ff6b6b;
        }

        .fc-header *, .fc-header *::before, .fc-header *::after { box-sizing: border-box; }
        .fc-header a { text-decoration: none; }

        .fc-header-fixed-wrap { position: fixed; top: 0; left: 0; right: 0; z-index: 999; }

        .fc-topbar {
          background: #080f11;
          border-bottom: 1px solid rgba(0, 166, 103, 0.1);
          padding: 6px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: var(--h-muted);
          max-height: 40px;
          overflow: hidden;
          opacity: 1;
          transition: max-height 0.32s ease, opacity 0.22s ease, padding 0.32s ease, border-color 0.32s ease;
        }
        .fc-topbar.fc-hide {
          max-height: 0; opacity: 0; padding-top: 0; padding-bottom: 0;
          border-bottom-color: transparent; pointer-events: none;
        }
        .fc-topbar .fc-tb-inner {
          max-width: 1400px; margin: 0 auto; padding: 0 32px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .fc-topbar .fc-tb-contact { display: flex; align-items: center; gap: 16px; }
        .fc-topbar .fc-tb-contact span { display: flex; align-items: center; gap: 5px; }
        .fc-topbar .fc-tb-contact span::before {
          content: ''; display: inline-block; width: 5px; height: 5px;
          border-radius: 50%; background: var(--h-green);
        }
        .fc-topbar .fc-tb-social { display: flex; gap: 12px; }
        .fc-topbar .fc-tb-social a { color: var(--h-muted); font-size: 13px; transition: color 0.2s; }
        .fc-topbar .fc-tb-social a:hover { color: var(--h-green); }

        .fc-header {
          background: var(--h-bg);
          border-bottom: 1px solid var(--h-border);
          transition: box-shadow 0.3s, background 0.3s;
        }
        .fc-header.scrolled {
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
          background: rgba(14, 22, 24, 0.97);
          backdrop-filter: blur(12px);
        }
        .fc-header-inner {
          max-width: 1400px; margin: 0 auto; padding: 0 32px; height: 66px;
          display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;
          gap: 100px; font-family: 'DM Sans', sans-serif;
        }
        .fc-header-spacer { width: 100%; }

        .fc-logo-wrap {
          display: flex; align-items: center; gap: 9px; flex-shrink: 0;
          text-decoration: none; justify-self: start;
        }
        .fc-logo-mark {
          width: 32px; height: 32px; border-radius: 8px; background: var(--h-green);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 13px; color: #fff;
        }
        .fc-logo-mark svg { width: 16px; height: 16px; fill: #fff; }
        .fc-logo-name {
          font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
          color: #fff; line-height: 1.15; white-space: nowrap;
        }
        .fc-logo-name span { color: var(--h-green); }

        .fc-nav { display: flex; align-items: center; justify-content: center; gap: 2px; list-style: none; margin: 0; padding: 0; }
        .fc-nav > li { position: relative; }
        .fc-nav > li > a {
          position: relative; display: flex; align-items: center; gap: 4px; padding: 8px 11px;
          font-size: 13.5px; font-weight: 400; color: var(--h-muted); border-radius: 7px;
          transition: color 0.2s, background 0.2s; white-space: nowrap; cursor: pointer;
        }
        .fc-nav > li > a:hover, .fc-nav > li:hover > a { color: #fff; background: rgba(255, 255, 255, 0.05); }
        .fc-nav > li > a.active { color: #fff; background: var(--h-green-d); }
        .fc-nav > li > a.active::after {
          content: ''; position: absolute; left: 11px; right: 11px; bottom: 2px; height: 2px;
          background: var(--h-green); border-radius: 2px;
        }
        .fc-mega a.fc-card.active { background: var(--h-green-d); }
        .fc-mega a.fc-card.active .fc-card-title { color: var(--h-green); }
        .fc-drawer-nav > li > a.active, .fc-drawer-sub li a.active { color: #fff; background: var(--h-green-d); }
        .fc-nav > li > a .chevron { font-size: 10px; margin-top: 1px; transition: transform 0.2s; opacity: 0.6; }
        .fc-nav > li:hover > a .chevron { transform: rotate(180deg); opacity: 1; }

        .fc-mega {
          position: absolute; top: calc(100% + 10px); left: 50%;
          transform: translateX(-50%) translateY(6px);
          background: var(--h-surface); border: 1px solid var(--h-border); border-radius: 16px;
          padding: 14px; width: 460px; display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 6px; opacity: 0; visibility: hidden;
          transition: opacity 0.22s ease, visibility 0.22s ease, transform 0.22s ease;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); z-index: 100;
        }
        .fc-nav > li:hover .fc-mega { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }
        .fc-mega a.fc-card { display: block; padding: 12px 14px; border-radius: 10px; transition: background 0.18s; }
        .fc-mega a.fc-card:hover { background: var(--h-green-d); }
        .fc-mega a.fc-card .fc-card-title { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: var(--h-text); margin: 0 0 3px; line-height: 1.3; }
        .fc-mega a.fc-card:hover .fc-card-title { color: #fff; }
        .fc-mega a.fc-card .fc-card-desc { font-size: 11.5px; color: var(--h-muted); margin: 0; line-height: 1.4; }

        .fc-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; justify-self: end; }

        .fc-btn-ghost {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px;
          border: 1px solid var(--h-border); border-radius: 8px; font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 400; color: var(--h-muted); background: transparent;
          cursor: pointer; transition: all 0.2s; white-space: nowrap;
        }
        .fc-btn-ghost:hover { color: #fff; border-color: var(--h-border-h); background: rgba(255, 255, 255, 0.04); }
        .fc-btn-ghost:disabled { opacity: 0.6; cursor: not-allowed; }

        .fc-btn-green {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 18px;
          background: var(--h-green); border: 1px solid var(--h-green); border-radius: 8px;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600; color: #fff;
          cursor: pointer; transition: all 0.2s; white-space: nowrap;
        }
        .fc-btn-green:hover { background: #00c07a; border-color: #00c07a; transform: translateY(-1px); }
        .fc-btn-green:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

        .fc-btn-search, .fc-theme-toggle {
          width: 38px; height: 38px; border: 1px solid var(--h-border); border-radius: 8px;
          background: transparent; color: var(--h-muted); display: flex; align-items: center;
          justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 15px;
          flex-shrink: 0; position: relative;
        }
        .fc-btn-search:hover, .fc-theme-toggle:hover { color: #fff; border-color: var(--h-border-h); background: rgba(255, 255, 255, 0.04); }

        .fc-btn-register-mobile {
          width: 38px; height: 38px; background: var(--h-green); border: none; border-radius: 8px;
          color: #fff; display: none; align-items: center; justify-content: center; font-size: 20px;
          text-decoration: none; flex-shrink: 0; cursor: pointer; transition: background 0.2s, transform 0.15s;
        }
        .fc-btn-register-mobile:hover { background: #00c07a; transform: translateY(-1px); }

        .fc-login-wrap { position: relative; }
        .fc-login-panel {
          position: absolute; top: calc(100% + 12px); right: 0; width: 360px;
          background: var(--h-surface); border: 1px solid var(--h-border); border-radius: 18px;
          padding: 28px; opacity: 0; visibility: hidden; transform: translateY(8px) scale(0.98);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55); z-index: 200; overflow: hidden;
          max-width: calc(100vw - 32px);
        }
        .fc-login-panel::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--h-green), transparent); border-radius: 18px 18px 0 0;
        }
        .fc-login-panel.open { opacity: 1; visibility: visible; transform: translateY(0) scale(1); }

        .fc-lp-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
        .fc-lp-head-left h4 { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0 0 3px; }
        .fc-lp-head-left p { font-size: 12px; color: var(--h-muted); margin: 0; }
        .fc-lp-close {
          width: 30px; height: 30px; border-radius: 7px; background: var(--h-surface2);
          border: 1px solid var(--h-border); color: var(--h-muted); display: flex; align-items: center;
          justify-content: center; cursor: pointer; font-size: 14px; transition: all 0.2s; flex-shrink: 0;
        }
        .fc-lp-close:hover { color: #fff; border-color: var(--h-border-h); }

        .fc-lp-field { margin-bottom: 14px; }
        .fc-lp-field label {
          display: block; font-size: 10px; font-weight: 500; letter-spacing: 0.8px;
          text-transform: uppercase; color: var(--h-muted); margin-bottom: 6px;
        }
        .fc-lp-input-wrap { position: relative; }
        .fc-lp-input-wrap .fc-lp-icon {
          position: absolute; left: 13px; top: 50%; transform: translateY(-50%);
          color: var(--h-muted); font-size: 14px; pointer-events: none;
        }
        .fc-lp-field input {
          width: 100%; background: var(--h-surface2); border: 1px solid var(--h-border);
          border-radius: var(--h-radius); color: var(--h-text); font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; padding: 11px 14px 11px 38px; outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .fc-lp-field input::placeholder { color: #3d5a52; }
        .fc-lp-field input:focus { border-color: var(--h-green); background: rgba(0, 166, 103, 0.06); }
        .fc-lp-field input.has-error { border-color: var(--h-error); }
        .fc-lp-error { font-size: 11px; color: var(--h-error); margin-top: 5px; }

        .fc-lp-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
        .fc-lp-remember { display: flex; align-items: center; gap: 7px; cursor: pointer; }
        .fc-lp-remember input { accent-color: var(--h-green); cursor: pointer; }
        .fc-lp-remember span { font-size: 12px; color: var(--h-muted); }
        .fc-lp-forgot { font-size: 12px; color: var(--h-green); font-weight: 500; }
        .fc-lp-forgot:hover { text-decoration: underline; }

        .fc-lp-submit {
          width: 100%; padding: 12px; background: var(--h-green); border: none;
          border-radius: var(--h-radius); font-family: 'Syne', sans-serif; font-size: 14px;
          font-weight: 700; color: #fff; cursor: pointer; transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.2px;
        }
        .fc-lp-submit:hover { background: #00c07a; transform: translateY(-1px); }
        .fc-lp-submit:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }

        .fc-lp-footer {
          text-align: center; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--h-border);
          font-size: 12.5px; color: var(--h-muted);
        }
        .fc-lp-footer a { color: var(--h-green); font-weight: 500; }
        .fc-lp-footer a:hover { text-decoration: underline; }

        .fc-hamburger {
          display: none; width: 38px; height: 38px; align-items: center; justify-content: center;
          cursor: pointer; border-radius: 8px; border: 1px solid var(--h-border); background: transparent;
          color: var(--h-muted); font-size: 22px; flex-shrink: 0;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .fc-hamburger:hover { color: #fff; border-color: var(--h-border-h); background: rgba(255, 255, 255, 0.04); }

        .fc-drawer { display: none; position: fixed; inset: 0; z-index: 1050; pointer-events: none; }
        .fc-drawer.open { pointer-events: auto; }
        .fc-drawer-bg { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.7); opacity: 0; transition: opacity 0.3s; }
        .fc-drawer.open .fc-drawer-bg { opacity: 1; }
        .fc-drawer-panel {
          position: absolute; left: 0; top: 0; bottom: 0; width: 300px; max-width: 86vw; background: var(--h-surface);
          border-right: 1px solid var(--h-border); padding: 20px 18px; transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); overflow-y: auto;
          display: flex; flex-direction: column;
        }
        .fc-drawer.open .fc-drawer-panel { transform: translateX(0); }
        .fc-drawer-logo {
          display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;
          padding-bottom: 14px; border-bottom: 1px solid var(--h-border);
        }
        .fc-drawer-logo-actions { display: flex; align-items: center; gap: 6px; }
        .fc-drawer-close, .fc-drawer-theme-toggle, .fc-drawer-search-btn {
          width: 30px; height: 30px; border-radius: 7px; background: var(--h-surface2);
          border: 1px solid var(--h-border); color: var(--h-muted); display: flex; align-items: center;
          justify-content: center; cursor: pointer; font-size: 14px; transition: all 0.2s;
        }
        .fc-drawer-close:hover, .fc-drawer-theme-toggle:hover, .fc-drawer-search-btn:hover { color: #fff; }
        .fc-drawer-nav { list-style: none; margin: 0; padding: 0; flex: 1; }
        .fc-drawer-nav > li > a {
          display: flex; align-items: center; justify-content: space-between; padding: 10px 12px;
          font-size: 14px; color: var(--h-muted); border-radius: 8px; transition: color 0.18s, background 0.18s;
          cursor: pointer;
        }
        .fc-drawer-nav > li > a:hover { color: #fff; background: var(--h-green-d); }
        .fc-drawer-nav > li > a .chevron { font-size: 10px; opacity: 0.6; transition: transform 0.2s; }
        .fc-drawer-nav > li > a.sub-open .chevron { transform: rotate(180deg); opacity: 1; }
        .fc-drawer-sub { list-style: none; margin: 0; padding: 0 0 4px 12px; display: none; }
        .fc-drawer-sub.open { display: block; }
        .fc-drawer-sub li a {
          display: flex; flex-direction: column; gap: 1px; padding: 7px 12px; border-radius: 7px;
          transition: color 0.18s, background 0.18s;
        }
        .fc-drawer-sub li a:hover { background: var(--h-green-d); }
        .fc-drawer-sub li a .fc-drawer-sub-title { font-size: 13px; color: var(--h-text); font-weight: 500; }
        .fc-drawer-sub li a:hover .fc-drawer-sub-title { color: #fff; }
        .fc-drawer-sub li a .fc-drawer-sub-desc { font-size: 11px; color: var(--h-muted); }
        .fc-drawer-sub li a.active .fc-drawer-sub-title { color: var(--h-green); }
        .fc-drawer-ctas { margin-top: 20px; padding-top: 18px; border-top: 1px solid var(--h-border); display: flex; flex-direction: column; gap: 10px; }
        .fc-drawer-ctas .fc-btn-ghost, .fc-drawer-ctas .fc-btn-green { width: 100%; justify-content: center; }

        .fc-search-overlay {
          position: fixed; inset: 0; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px);
          z-index: 1100; display: flex; align-items: center; justify-content: center;
          opacity: 0; visibility: hidden; transition: all 0.25s;
        }
        .fc-search-overlay.open { opacity: 1; visibility: visible; }
        .fc-search-box { width: 100%; max-width: 640px; padding: 0 24px; }
        .fc-search-box p { text-align: center; font-size: 13px; color: var(--h-muted); margin: 0 0 20px; font-family: 'DM Sans', sans-serif; }
        .fc-search-input-wrap { position: relative; }
        .fc-search-input-wrap input {
          width: 100%; background: var(--h-surface); border: 1px solid var(--h-border-h); border-radius: 14px;
          color: var(--h-text); font-family: 'DM Sans', sans-serif; font-size: 18px; padding: 18px 60px 18px 24px;
          outline: none; transition: border-color 0.2s;
        }
        .fc-search-input-wrap input::placeholder { color: #3d5a52; }
        .fc-search-input-wrap input:focus { border-color: var(--h-green); }
        .fc-search-submit {
          position: absolute; right: 14px; top: 50%; transform: translateY(-50%); width: 36px; height: 36px;
          background: var(--h-green); border: none; border-radius: 8px; color: #fff; font-size: 15px;
          cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s;
        }
        .fc-search-submit:hover { background: #00c07a; }
        .fc-search-close {
          position: absolute; top: 20px; right: 20px; width: 36px; height: 36px; border-radius: 9px;
          background: var(--h-surface); border: 1px solid var(--h-border); color: var(--h-muted); cursor: pointer;
          display: flex; align-items: center; justify-content: center; font-size: 16px; transition: all 0.2s;
        }
        .fc-search-close:hover { color: #fff; border-color: var(--h-border-h); }

        /* ── Responsive breakpoints ── */
        @media (max-width: 1150px) {
          .fc-header-inner { gap: 40px; }
          .fc-nav > li > a { padding: 8px 8px; font-size: 13px; }
          .fc-btn-request-demo { display: none; }
        }
        @media (max-width: 900px) {
          .fc-nav { display: none; }
          .fc-hamburger { display: flex; }
          .fc-drawer { display: block; }
          .fc-topbar { display: none; }
          .fc-btn-ghost.fc-sign-in-desktop { display: none; }
          .fc-btn-green.fc-register-desktop { display: none; }
          .fc-btn-register-mobile { display: flex; }
          .fc-header-inner { grid-template-columns: auto 1fr auto; gap: 12px; height: 60px; }
        }
        @media (max-width: 640px) {
          .fc-btn-search { display: none; } /* search moved into drawer on small screens */
          .fc-theme-toggle { display: none; } /* theme toggle moved into drawer on small screens */
          .fc-header-inner { padding: 0 16px; }
          .fc-search-box { padding: 0 16px; }
          .fc-search-input-wrap input { font-size: 15px; padding: 15px 52px 15px 18px; }
        }
        @media (max-width: 480px) {
          .fc-header-inner { padding: 0 12px; }
          .fc-logo-name { font-size: 13px; }
          .fc-drawer-panel { width: 280px; padding: 16px 14px; }
        }
        @media (max-width: 380px) {
          .fc-btn-register-mobile { width: 34px; height: 34px; font-size: 17px; }
          .fc-hamburger { width: 34px; height: 34px; font-size: 19px; }
        }

        .fc-modal .modal-content { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); color: var(--text-1); }
        .fc-modal .modal-header { border-bottom: 1px solid var(--border); padding: 22px 28px; }
        .fc-modal .modal-title { font-family: var(--font-head); font-weight: 700; font-size: 1.05rem; color: var(--text-1); }
        .fc-modal .modal-title small { display: block; font-size: 0.72rem; color: var(--text-3); font-weight: 400; margin-top: 3px; }
        .fc-modal .accent-line { display: block; width: 32px; height: 3px; background: var(--accent); border-radius: 2px; margin-top: 6px; }
        .fc-modal .btn-close { filter: invert(1) brightness(0.6); }
        .fc-modal .modal-body { padding: 28px; }
        .fc-modal .modal-footer { border-top: 1px solid var(--border); padding: 18px 28px; }

        .fc-form-label { font-size: 0.8rem; font-weight: 500; color: var(--text-2); margin-bottom: 6px; display: block; }
        .fc-form-control {
          width: 100%; background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border); border-radius: var(--r-sm);
          color: var(--text-1); padding: 11px 14px; font-family: var(--font-body); font-size: 0.85rem; outline: none;
          transition: border-color .2s; margin-bottom: 0;
        }
        .fc-form-control:focus { border-color: var(--border-h); box-shadow: 0 0 0 3px var(--accent-glow); }
        .fc-form-control::placeholder { color: var(--text-3); }
        .fc-form-control.has-error { border-color: var(--h-error); }
        .fc-form-error { font-size: 11px; color: var(--h-error); margin-top: 5px; }
        textarea.fc-form-control { resize: vertical; min-height: 90px; }
        select.fc-form-control option { background: var(--bg-card); color: var(--text-1); }

        .btn-fc-primary {
          display: inline-flex; align-items: center; gap: 8px; background: var(--accent); color: #fff; border: none;
          border-radius: var(--r-pill); padding: 11px 26px; font-family: var(--font-head); font-size: 0.875rem;
          font-weight: 700; text-decoration: none; cursor: pointer; transition: background .2s, transform .15s, box-shadow .2s;
          box-shadow: 0 4px 20px var(--accent-glow);
        }
        .btn-fc-primary:hover { background: var(--accent-dim); transform: translateY(-2px); box-shadow: 0 6px 30px var(--accent-glow); color: #fff; }
        .btn-fc-outline {
          display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--text-1);
          border: 1px solid var(--border); border-radius: var(--r-pill); padding: 10px 22px; font-family: var(--font-head);
          font-size: 0.875rem; font-weight: 600; text-decoration: none; cursor: pointer;
          transition: border-color .2s, color .2s, background .2s;
        }
        .btn-fc-outline:hover { border-color: var(--border-h); color: var(--accent); background: var(--bg-glass2); }

        [data-h-theme="light"] {
          --h-bg: #f6faf8; --h-surface: #ffffff; --h-surface2: #eef4f1; --h-green: #00a667;
          --h-green-d: rgba(0, 166, 103, 0.08); --h-green-b: rgba(0, 166, 103, 0.18);
          --h-text: #10201b; --h-muted: #5b7a70; --h-border: rgba(0, 100, 60, 0.12); --h-border-h: rgba(0, 100, 60, 0.3);
        }
        [data-h-theme="light"] .fc-topbar { background: #eef4f1; border-bottom-color: rgba(0, 100, 60, 0.1); }
        [data-h-theme="light"] .fc-header.scrolled { background: rgba(246, 250, 248, 0.95); box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08); }
        [data-h-theme="light"] .fc-logo-mark, [data-h-theme="light"] .fc-btn-green,
        [data-h-theme="light"] .fc-lp-submit, [data-h-theme="light"] .fc-btn-register-mobile { color: #fff; }
        [data-h-theme="light"] .fc-logo-name { color: #10201b; }
        [data-h-theme="light"] .fc-nav > li > a:hover, [data-h-theme="light"] .fc-nav > li:hover > a { color: #10201b; background: rgba(0, 100, 60, 0.06); }
        [data-h-theme="light"] .fc-card-title { color: #10201b; }
        [data-h-theme="light"] .fc-card:hover .fc-card-title { color: #00a667; }
        [data-h-theme="light"] .fc-lp-field input::placeholder, [data-h-theme="light"] .fc-search-input-wrap input::placeholder { color: #a9c2b8; }
        [data-h-theme="light"] .fc-search-overlay { background: rgba(246, 250, 248, 0.92); }

        .fc-theme-toggle .ti-sun, .fc-drawer-theme-toggle .ti-sun { display: none; }
        .fc-theme-toggle .ti-moon, .fc-drawer-theme-toggle .ti-moon { display: inline-flex; }
        [data-h-theme="light"] .fc-theme-toggle .ti-sun,
        [data-h-theme="light"] .fc-drawer-theme-toggle .ti-sun { display: inline-flex; }
        [data-h-theme="light"] .fc-theme-toggle .ti-moon,
        [data-h-theme="light"] .fc-drawer-theme-toggle .ti-moon { display: none; }
      `}),e.jsxs("div",{className:"fc-header-fixed-wrap",ref:S,children:[e.jsx("div",{className:`fc-topbar d-none d-lg-block${N?" fc-hide":""}`,ref:P,children:e.jsxs("div",{className:"fc-tb-inner",children:[e.jsxs("div",{className:"fc-tb-contact",children:[e.jsx("span",{children:"info@futureconnect.rw"}),e.jsx("span",{children:"+250 784 123 456"})]}),e.jsxs("div",{className:"fc-tb-social",children:[e.jsx("a",{href:"#","aria-label":"Facebook",children:e.jsx("i",{className:"fa-brands fa-facebook"})}),e.jsx("a",{href:"#","aria-label":"Twitter",children:e.jsx("i",{className:"fa-brands fa-x-twitter"})}),e.jsx("a",{href:"#","aria-label":"LinkedIn",children:e.jsx("i",{className:"fa-brands fa-linkedin"})})]})]})}),e.jsx("header",{className:`fc-header${N?" scrolled":""}`,children:e.jsxs("div",{className:"fc-header-inner",children:[e.jsxs(t,{href:s("user.home"),className:"fc-logo-wrap",children:[e.jsx("div",{className:"fc-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("div",{className:"fc-logo-name",children:["Future",e.jsx("span",{children:"Connect"})]})]}),e.jsxs("ul",{className:"fc-nav",children:[e.jsxs("li",{children:[e.jsxs("a",{role:"button",tabIndex:0,className:B?"active":"",children:["Platform ",e.jsx("span",{className:"chevron",children:"▾"})]}),e.jsx("div",{className:"fc-mega",children:I.map(r=>e.jsxs(t,{className:`fc-card${f(r.route)?" active":""}`,href:s(r.route),children:[e.jsx("p",{className:"fc-card-title",children:r.title}),e.jsx("p",{className:"fc-card-desc",children:r.desc})]},r.route))})]}),e.jsxs("li",{children:[e.jsxs("a",{role:"button",tabIndex:0,className:Y?"active":"",children:["Solutions ",e.jsx("span",{className:"chevron",children:"▾"})]}),e.jsx("div",{className:"fc-mega",children:T.map(r=>e.jsxs(t,{className:`fc-card${f(r.route)?" active":""}`,href:s(r.route),children:[e.jsx("p",{className:"fc-card-title",children:r.title}),e.jsx("p",{className:"fc-card-desc",children:r.desc})]},r.route))})]}),e.jsx("li",{children:e.jsx(t,{href:s("user.trending.index"),className:f("user.trending.index")?"active":"",children:"Trending"})}),e.jsxs("li",{children:[e.jsxs("a",{role:"button",tabIndex:0,className:U?"active":"",children:["Company ",e.jsx("span",{className:"chevron",children:"▾"})]}),e.jsx("div",{className:"fc-mega",children:D.map((r,o)=>e.jsxs(t,{className:`fc-card${f(r.route)?" active":""}`,href:s(r.route),children:[e.jsx("p",{className:"fc-card-title",children:r.title}),e.jsx("p",{className:"fc-card-desc",children:r.desc})]},`${r.route}-${o}`))})]}),e.jsx("li",{children:e.jsx(t,{href:s("pricing"),className:f("pricing",{exact:!0})?"active":"",children:"Pricing"})})]}),e.jsxs("div",{className:"fc-actions",children:[e.jsx(t,{href:s("demo.request"),className:"fc-btn-ghost fc-btn-request-demo",children:"Request Demo"}),e.jsxs("button",{className:"fc-theme-toggle","aria-label":"Toggle theme",onClick:$,children:[e.jsx("i",{className:"ti ti-sun"}),e.jsx("i",{className:"ti ti-moon"})]}),e.jsx("button",{className:"fc-btn-search","aria-label":"Search",onClick:()=>k(!0),children:e.jsx("i",{className:"ti ti-search"})}),i?e.jsxs(t,{href:H,className:"fc-btn-green",children:[e.jsx("i",{className:"ti ti-layout-dashboard"})," ","Dashboard"]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"fc-login-wrap",children:[e.jsxs("button",{ref:_,className:"fc-btn-ghost fc-sign-in-desktop",onClick:r=>{r.stopPropagation(),w(o=>!o)},children:[e.jsx("i",{className:"ti ti-user"})," Sign In"]}),e.jsxs("div",{className:`fc-login-panel${L?" open":""}`,ref:E,children:[e.jsxs("div",{className:"fc-lp-head",children:[e.jsxs("div",{className:"fc-lp-head-left",children:[e.jsx("h4",{children:"Welcome Back"}),e.jsx("p",{children:"Sign in to your account"})]}),e.jsx("button",{className:"fc-lp-close",onClick:()=>w(!1),children:"✕"})]}),e.jsxs("form",{onSubmit:X,children:[e.jsxs("div",{className:"fc-lp-field",children:[e.jsx("label",{htmlFor:"lp_email",children:"Email"}),e.jsxs("div",{className:"fc-lp-input-wrap",children:[e.jsx("i",{className:"ti ti-mail fc-lp-icon"}),e.jsx("input",{type:"email",id:"lp_email",placeholder:"you@example.com",className:l.errors.email?"has-error":"",value:l.data.email,onChange:r=>l.setData("email",r.target.value),required:!0})]}),l.errors.email&&e.jsx("div",{className:"fc-lp-error",children:l.errors.email})]}),e.jsxs("div",{className:"fc-lp-field",children:[e.jsx("label",{htmlFor:"lp_password",children:"Password"}),e.jsxs("div",{className:"fc-lp-input-wrap",children:[e.jsx("i",{className:"ti ti-lock fc-lp-icon"}),e.jsx("input",{type:"password",id:"lp_password",placeholder:"••••••••",className:l.errors.password?"has-error":"",value:l.data.password,onChange:r=>l.setData("password",r.target.value),required:!0})]}),l.errors.password&&e.jsx("div",{className:"fc-lp-error",children:l.errors.password})]}),e.jsxs("div",{className:"fc-lp-row",children:[e.jsxs("label",{className:"fc-lp-remember",children:[e.jsx("input",{type:"checkbox",checked:l.data.remember,onChange:r=>l.setData("remember",r.target.checked)}),e.jsx("span",{children:"Remember me"})]}),e.jsx(t,{href:s("password.request"),className:"fc-lp-forgot",children:"Forgot password?"})]}),e.jsx("button",{type:"submit",className:"fc-lp-submit",disabled:l.processing,children:l.processing?"Signing in…":"Sign In →"})]}),e.jsxs("div",{className:"fc-lp-footer",children:["No account yet?"," ",e.jsx(t,{href:s("register"),children:"Create one →"})]})]})]}),e.jsx(t,{href:s("user.register_skills"),className:"fc-btn-register-mobile","aria-label":"Register Skills",title:"Register Skills",children:e.jsx("i",{className:"ti ti-plus"})}),e.jsx(t,{href:s("user.register_skills"),className:"fc-btn-green fc-register-desktop",children:"Register Skills"})]}),e.jsx("button",{className:"fc-hamburger","aria-label":"Menu",onClick:()=>d(!0),children:e.jsx("i",{className:"ti ti-menu-2"})})]})]})})]}),e.jsx("div",{className:"fc-header-spacer",ref:z}),e.jsxs("div",{className:`fc-drawer${R?" open":""}`,children:[e.jsx("div",{className:"fc-drawer-bg",onClick:()=>d(!1)}),e.jsxs("div",{className:"fc-drawer-panel",children:[e.jsxs("div",{className:"fc-drawer-logo",children:[e.jsxs(t,{href:s("user.home"),className:"fc-logo-wrap",onClick:()=>d(!1),children:[e.jsx("div",{className:"fc-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("div",{className:"fc-logo-name",children:["Future",e.jsx("span",{children:"Connect"})]})]}),e.jsxs("div",{className:"fc-drawer-logo-actions",children:[e.jsxs("button",{className:"fc-drawer-theme-toggle","aria-label":"Toggle theme",onClick:$,children:[e.jsx("i",{className:"ti ti-sun"}),e.jsx("i",{className:"ti ti-moon"})]}),e.jsx("button",{className:"fc-drawer-search-btn","aria-label":"Search",onClick:()=>{d(!1),setTimeout(()=>k(!0),300)},children:e.jsx("i",{className:"ti ti-search"})}),e.jsx("button",{className:"fc-drawer-close",onClick:()=>d(!1),children:"✕"})]})]}),e.jsxs("ul",{className:"fc-drawer-nav",children:[e.jsxs("li",{children:[e.jsxs("a",{className:`${j.platform?"sub-open":""}${B?" active":""}`,onClick:()=>M("platform"),children:["Platform ",e.jsx("span",{className:"chevron",children:"▾"})]}),e.jsx("ul",{className:`fc-drawer-sub${j.platform?" open":""}`,children:I.map(r=>e.jsx("li",{children:e.jsxs(t,{href:s(r.route),className:f(r.route)?"active":"",onClick:()=>d(!1),children:[e.jsx("span",{className:"fc-drawer-sub-title",children:r.title}),e.jsx("span",{className:"fc-drawer-sub-desc",children:r.desc})]})},r.route))})]}),e.jsxs("li",{children:[e.jsxs("a",{className:`${j.solutions?"sub-open":""}${Y?" active":""}`,onClick:()=>M("solutions"),children:["Solutions ",e.jsx("span",{className:"chevron",children:"▾"})]}),e.jsx("ul",{className:`fc-drawer-sub${j.solutions?" open":""}`,children:T.map(r=>e.jsx("li",{children:e.jsxs(t,{href:s(r.route),className:f(r.route)?"active":"",onClick:()=>d(!1),children:[e.jsx("span",{className:"fc-drawer-sub-title",children:r.title}),e.jsx("span",{className:"fc-drawer-sub-desc",children:r.desc})]})},r.route))})]}),e.jsx("li",{children:e.jsx(t,{href:s("user.trending.index"),className:f("user.trending.index")?"active":"",onClick:()=>d(!1),children:"Trending"})}),e.jsxs("li",{children:[e.jsxs("a",{className:`${j.company?"sub-open":""}${U?" active":""}`,onClick:()=>M("company"),children:["Company ",e.jsx("span",{className:"chevron",children:"▾"})]}),e.jsx("ul",{className:`fc-drawer-sub${j.company?" open":""}`,children:D.map((r,o)=>e.jsx("li",{children:e.jsxs(t,{href:s(r.route),className:f(r.route)?"active":"",onClick:()=>d(!1),children:[e.jsx("span",{className:"fc-drawer-sub-title",children:r.title}),e.jsx("span",{className:"fc-drawer-sub-desc",children:r.desc})]})},`${r.route}-${o}`))})]}),e.jsx("li",{children:e.jsx(t,{href:s("pricing"),className:f("pricing",{exact:!0})?"active":"",onClick:()=>d(!1),children:"Pricing"})})]}),e.jsxs("div",{className:"fc-drawer-ctas",children:[i?e.jsx(t,{href:H,className:"fc-btn-green",onClick:()=>d(!1),children:"Dashboard"}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"fc-btn-ghost",onClick:J,children:"Sign In"}),e.jsx(t,{href:s("user.register_skills"),className:"fc-btn-green",onClick:()=>d(!1),children:"Register Skills"})]}),e.jsx(t,{href:s("demo.request"),className:"fc-btn-ghost",onClick:()=>d(!1),children:"Request Demo"})]})]})]}),e.jsxs("div",{className:`fc-search-overlay${F?" open":""}`,children:[e.jsx("button",{className:"fc-search-close",onClick:()=>k(!1),children:"✕"}),e.jsxs("div",{className:"fc-search-box",children:[e.jsx("p",{children:"Search talents, skills, stories & more"}),e.jsx("form",{action:s("talent.search"),method:"GET",children:e.jsxs("div",{className:"fc-search-input-wrap",children:[e.jsx("input",{ref:q,type:"text",name:"keyword",placeholder:"e.g. Photography, Coding, Dance...",required:!0}),e.jsx("button",{type:"submit",className:"fc-search-submit",children:e.jsx("i",{className:"ti ti-search"})})]})})]})]}),e.jsx("div",{className:"modal fade",id:"applySellerModal",tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-lg modal-dialog-centered",children:e.jsx("div",{className:"modal-content border-0 shadow-lg",style:{background:"var(--h-surface)",border:"1px solid var(--h-border)",borderRadius:18,overflow:"hidden"},children:e.jsxs("form",{onSubmit:K,children:[e.jsxs("div",{className:"modal-header border-0",style:{background:"linear-gradient(135deg,#071a10,#0e1618)",padding:"20px 24px"},children:[e.jsx("h5",{className:"modal-title fw-bold",style:{color:"#fff",fontFamily:"'Syne',sans-serif"},children:"Apply to Become a Seller"}),e.jsx("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal"})]}),e.jsx("div",{className:"modal-body py-4 px-4",children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{style:{fontSize:11,textTransform:"uppercase",letterSpacing:".8px",color:"var(--h-muted)"},children:"Company Name"}),e.jsx("input",{type:"text",className:`fc-form-control mt-1${c.errors.company_name?" has-error":""}`,placeholder:"e.g. Creative Minds Ltd",value:c.data.company_name,onChange:r=>c.setData("company_name",r.target.value),style:{background:"var(--h-surface2)",border:"1px solid var(--h-border)",color:"var(--h-text)",borderRadius:10},required:!0}),c.errors.company_name&&e.jsx("div",{className:"fc-form-error",children:c.errors.company_name})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{style:{fontSize:11,textTransform:"uppercase",letterSpacing:".8px",color:"var(--h-muted)"},children:"Email"}),e.jsx("input",{type:"email",className:`fc-form-control mt-1${c.errors.email?" has-error":""}`,placeholder:"example@domain.com",value:c.data.email,onChange:r=>c.setData("email",r.target.value),style:{background:"var(--h-surface2)",border:"1px solid var(--h-border)",color:"var(--h-text)",borderRadius:10},required:!0}),c.errors.email&&e.jsx("div",{className:"fc-form-error",children:c.errors.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{style:{fontSize:11,textTransform:"uppercase",letterSpacing:".8px",color:"var(--h-muted)"},children:"Phone"}),e.jsx("input",{type:"text",className:"fc-form-control mt-1",placeholder:"+250 700 123 456",value:c.data.phone,onChange:r=>c.setData("phone",r.target.value),style:{background:"var(--h-surface2)",border:"1px solid var(--h-border)",color:"var(--h-text)",borderRadius:10}})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{style:{fontSize:11,textTransform:"uppercase",letterSpacing:".8px",color:"var(--h-muted)"},children:"Address"}),e.jsx("input",{type:"text",className:"fc-form-control mt-1",placeholder:"Kigali, Rwanda",value:c.data.address,onChange:r=>c.setData("address",r.target.value),style:{background:"var(--h-surface2)",border:"1px solid var(--h-border)",color:"var(--h-text)",borderRadius:10}})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{style:{fontSize:11,textTransform:"uppercase",letterSpacing:".8px",color:"var(--h-muted)"},children:"Company Description"}),e.jsx("textarea",{rows:"3",className:"fc-form-control mt-1",placeholder:"Tell us about your company...",value:c.data.description,onChange:r=>c.setData("description",r.target.value),style:{background:"var(--h-surface2)",border:"1px solid var(--h-border)",color:"var(--h-text)",borderRadius:10,resize:"vertical"}})]})]})}),e.jsxs("div",{className:"modal-footer border-0 px-4 py-3 d-flex justify-content-between",style:{background:"var(--h-surface2)"},children:[e.jsx("button",{type:"button",className:"btn","data-bs-dismiss":"modal",style:{background:"transparent",border:"1px solid var(--h-border)",color:"var(--h-muted)",borderRadius:9,padding:"9px 22px",fontFamily:"'DM Sans',sans-serif"},children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn",disabled:c.processing,style:{background:"var(--h-green)",color:"#fff",border:"none",borderRadius:9,padding:"9px 28px",fontFamily:"'Syne',sans-serif",fontWeight:700,opacity:c.processing?.65:1},children:c.processing?"Submitting…":"Submit Application"})]})]})})})})]})}const ae={"user.home":"/","user.about":"/about","user.how-it-works":"/how-it-works","user.talents":"/skills-marketplace","user.courses":"/learning_center","user.blogs":"/blogs","user.contact":"/contact","talent.connections-room":"/connections","user.success-stories":"/success-stories","user.jobs.index":"/jobs","user.faq":"/faq","user.privacy-policy":"/privacy-policy","user.terms-condition":"/terms-and-conditions","user.donation-policy":"/donation-policy","solutions.students":"/solutions/students","solutions.ngos":"/solutions/ngos","solutions.companies":"/solutions/companies","solutions.professionals":"/solutions/professionals","solutions.universities":"/solutions/universities","solutions.investors":"/solutions/investors"};function se({categories:v=[],routes:i={}}){const a=p=>i[p]||ae[p]||"#",u=new Date().getFullYear(),{url:b}=A(),x=b.split("?")[0].split("#")[0],g=p=>{if(!p||p==="#")return!1;const m=p.split("?")[0].split("#")[0];return m==="/"?x==="/":x===m||x.startsWith(`${m}/`)},s=(p,m="")=>g(p)?`${m} is-active`.trim():m;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .fc-footer *, .fc-footer *::before, .fc-footer *::after { box-sizing: border-box; }

        .fc-footer {
          background: #0e1618;
          color: #8fa8ac;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          font-size: 14px;
          line-height: 1.7;
          position: relative;
          overflow: hidden;
        }
        .fc-footer > * { position: relative; z-index: 1; }

        .fc-footer a { color: #8fa8ac; text-decoration: none; transition: color .2s ease; }
        .fc-footer a:hover { color: #48d597; }

        .fc-top-nav { border-bottom: 1px solid rgba(255, 255, 255, .07); padding: 14px 0; }
        .fc-top-nav__inner {
          max-width: 960px; margin: 0 auto; padding: 0 24px;
          display: flex; flex-wrap: wrap; justify-content: center; gap: 6px 28px;
        }
        .fc-top-nav__inner a {
          font-size: 13px; font-weight: 500; letter-spacing: .3px; color: #9ab0b4;
          padding: 2px 0; position: relative;
        }
        .fc-top-nav__inner a::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1.5px;
          background: #48d597; transition: width .25s ease;
        }
        .fc-top-nav__inner a:hover { color: #48d597; }
        .fc-top-nav__inner a:hover::after { width: 100%; }
        .fc-top-nav__inner a.is-active { color: #48d597; }
        .fc-top-nav__inner a.is-active::after { width: 100%; }

        .fc-main-body { padding: 52px 0 40px; }
        .fc-grid {
          max-width: 960px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 36px;
        }

        .fc-col-title {
          font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
          color: #48d597; margin: 0 0 18px; padding-bottom: 10px;
          border-bottom: 1px solid rgba(0, 166, 103, .22);
        }

        .fc-link-list { list-style: none; padding: 0; margin: 0; }
        .fc-link-list li { margin-bottom: 8px; }
        .fc-link-list a { font-size: 13px; color: #8fa8ac; display: inline-flex; align-items: center; gap: 6px; }
        .fc-link-list .arrow { font-size: 10px; color: #48d597; display: inline-block; transition: transform .2s ease; }
        .fc-link-list a:hover .arrow { transform: translateX(3px); }
        .fc-link-list a.is-active { color: #48d597; font-weight: 600; }
        .fc-link-list a.is-active .arrow { transform: translateX(3px); }

        .fc-contact-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 18px; }
        .fc-contact-item:last-child { margin-bottom: 0; }
        .fc-contact-icon {
          width: 34px; height: 34px; flex-shrink: 0; background: rgba(0, 166, 103, .08);
          border: 1px solid rgba(0, 166, 103, .2); border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        }
        .fc-contact-icon svg { width: 14px; height: 14px; stroke: #48d597; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .fc-contact-label { font-size: 11px; font-weight: 700; color: #48d597; text-transform: uppercase; letter-spacing: .5px; margin: 0 0 2px; }
        .fc-contact-value { font-size: 13px; color: #8fa8ac; margin: 0; }
        .fc-contact-value a { color: #8fa8ac; }
        .fc-contact-value a:hover { color: #48d597; }

        .fc-divider { border: none; border-top: 1px solid rgba(255, 255, 255, .06); margin: 0; }

        .fc-bottom {
          max-width: 960px; margin: 0 auto; padding: 22px 24px;
          display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;
        }

        .fc-logo-lockup { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .fc-logo-mark {
          width: 36px; height: 36px; background: #48d597; border-radius: 9px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .fc-logo-mark svg { width: 18px; height: 18px; fill: #0e1618; }
        .fc-logo-wordmark { font-size: 15px; font-weight: 700; color: #e2ecee; letter-spacing: .3px; line-height: 1.2; margin: 0; }
        .fc-logo-tagline { font-size: 11px; color: #4e6b70; letter-spacing: .3px; margin: 0; line-height: 1; }

        .fc-social { display: flex; gap: 8px; list-style: none; padding: 0; margin: 0; }
        .fc-social a {
          width: 34px; height: 34px; border: 1px solid rgba(255, 255, 255, .1); border-radius: 8px;
          display: flex; align-items: center; justify-content: center; color: #6a8c91; font-size: 14px;
          transition: background .2s, border-color .2s, color .2s;
        }
        .fc-social a:hover { background: #48d597; border-color: #48d597; color: #0e1618; }
        .fc-social svg { width: 14px; height: 14px; fill: currentColor; }

        .fc-legal { display: flex; flex-wrap: wrap; gap: 6px 18px; list-style: none; padding: 0; margin: 0; }
        .fc-legal a { font-size: 12px; color: #4e6b70; }
        .fc-legal a:hover { color: #48d597; }
        .fc-legal a.is-active { color: #48d597; }

        .fc-copy { font-size: 12px; color: #3d5a5e; margin: 0; }

        @media (max-width: 768px) {
          .fc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .fc-grid { grid-template-columns: 1fr; }
          .fc-bottom { flex-direction: column; align-items: flex-start; }
        }

        [data-h-theme="light"] .fc-footer { background: #f6faf8; color: #4a615d; }
        [data-h-theme="light"] .fc-footer a { color: #4a615d; }
        [data-h-theme="light"] .fc-footer a:hover { color: #00a667; }
        [data-h-theme="light"] .fc-top-nav { border-bottom-color: rgba(0, 100, 60, 0.1); }
        [data-h-theme="light"] .fc-top-nav__inner a { color: #3d5a52; }
        [data-h-theme="light"] .fc-top-nav__inner a:hover { color: #00a667; }
        [data-h-theme="light"] .fc-top-nav__inner a::after { background: #00a667; }
        [data-h-theme="light"] .fc-top-nav__inner a.is-active { color: #00a667; }
        [data-h-theme="light"] .fc-col-title { color: #00a667; border-bottom-color: rgba(0, 166, 103, 0.28); }
        [data-h-theme="light"] .fc-link-list a { color: #4a615d; }
        [data-h-theme="light"] .fc-link-list a.is-active { color: #00a667; }
        [data-h-theme="light"] .fc-link-list .arrow { color: #00a667; }
        [data-h-theme="light"] .fc-contact-icon { background: rgba(0, 166, 103, 0.08); border-color: rgba(0, 166, 103, 0.25); }
        [data-h-theme="light"] .fc-contact-icon svg { stroke: #00a667; }
        [data-h-theme="light"] .fc-contact-label { color: #00a667; }
        [data-h-theme="light"] .fc-contact-value, [data-h-theme="light"] .fc-contact-value a { color: #4a615d; }
        [data-h-theme="light"] .fc-contact-value a:hover { color: #00a667; }
        [data-h-theme="light"] .fc-divider { border-top-color: rgba(0, 60, 40, 0.08); }
        [data-h-theme="light"] .fc-logo-wordmark { color: #10201b; }
        [data-h-theme="light"] .fc-logo-tagline { color: #6f8a85; }
        [data-h-theme="light"] .fc-logo-mark svg { fill: #fff; }
        [data-h-theme="light"] .fc-social a { border-color: rgba(0, 60, 40, 0.12); color: #5b7a73; }
        [data-h-theme="light"] .fc-social a:hover { background: #00a667; border-color: #00a667; color: #fff; }
        [data-h-theme="light"] .fc-legal a { color: #6f8a85; }
        [data-h-theme="light"] .fc-legal a:hover { color: #00a667; }
        [data-h-theme="light"] .fc-legal a.is-active { color: #00a667; }
        [data-h-theme="light"] .fc-copy { color: #8ca39d; }
      `}),e.jsxs("footer",{className:"fc-footer",children:[e.jsx("div",{className:"fc-top-nav",children:e.jsxs("div",{className:"fc-top-nav__inner",children:[e.jsx(t,{href:a("user.about"),className:s(a("user.about")),children:"About Us"}),e.jsx(t,{href:a("user.how-it-works"),className:s(a("user.how-it-works")),children:"How It Works"}),e.jsx(t,{href:a("user.talents"),className:s(a("user.talents")),children:"Skills Hub"}),e.jsx(t,{href:a("user.courses"),className:s(a("user.courses")),children:"Learning Center"}),e.jsx(t,{href:a("user.blogs"),className:s(a("user.blogs")),children:"News & Insights"}),e.jsx(t,{href:a("user.contact"),className:s(a("user.contact")),children:"Help & Support"})]})}),e.jsx("div",{className:"fc-main-body",children:e.jsxs("div",{className:"fc-grid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"fc-col-title",children:"About Future Connect"}),e.jsxs("ul",{className:"fc-link-list",children:[e.jsx("li",{children:e.jsxs(t,{href:a("user.about"),className:s(a("user.about")),children:[e.jsx("span",{className:"arrow",children:"›"})," About Us"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("user.how-it-works"),className:s(a("user.how-it-works")),children:[e.jsx("span",{className:"arrow",children:"›"})," How It Works"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("talent.connections-room"),className:s(a("talent.connections-room")),children:[e.jsx("span",{className:"arrow",children:"›"})," Partnerships & Collaborations"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("user.success-stories"),className:s(a("user.success-stories")),children:[e.jsx("span",{className:"arrow",children:"›"})," Customer Success Stories"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("user.contact"),className:s(a("user.contact")),children:[e.jsx("span",{className:"arrow",children:"›"})," Help & Support"]})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-col-title",children:"Resources"}),e.jsxs("ul",{className:"fc-link-list",children:[e.jsx("li",{children:e.jsxs(t,{href:a("user.jobs.index"),className:s(a("user.jobs.index")),children:[e.jsx("span",{className:"arrow",children:"›"})," Find Jobs & Opportunities"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("user.courses"),className:s(a("user.courses")),children:[e.jsx("span",{className:"arrow",children:"›"})," Learning Center"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("user.blogs"),className:s(a("user.blogs")),children:[e.jsx("span",{className:"arrow",children:"›"})," News & Insights"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("user.talents"),className:s(a("user.talents")),children:[e.jsx("span",{className:"arrow",children:"›"})," Skills Hub"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("user.faq"),className:s(a("user.faq")),children:[e.jsx("span",{className:"arrow",children:"›"})," FAQs"]})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-col-title",children:"Solutions"}),e.jsxs("ul",{className:"fc-link-list",children:[e.jsx("li",{children:e.jsxs(t,{href:a("solutions.students"),className:s(a("solutions.students")),children:[e.jsx("span",{className:"arrow",children:"›"})," For Students"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("solutions.ngos"),className:s(a("solutions.ngos")),children:[e.jsx("span",{className:"arrow",children:"›"})," For NGOs"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("solutions.companies"),className:s(a("solutions.companies")),children:[e.jsx("span",{className:"arrow",children:"›"})," For Companies"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("solutions.professionals"),className:s(a("solutions.professionals")),children:[e.jsx("span",{className:"arrow",children:"›"})," For Professionals"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("solutions.universities"),className:s(a("solutions.universities")),children:[e.jsx("span",{className:"arrow",children:"›"})," For Universities"]})}),e.jsx("li",{children:e.jsxs(t,{href:a("solutions.investors"),className:s(a("solutions.investors")),children:[e.jsx("span",{className:"arrow",children:"›"})," For Investors"]})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-col-title",children:"Get in Touch"}),e.jsxs("div",{className:"fc-contact-item",children:[e.jsx("div",{className:"fc-contact-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),e.jsx("circle",{cx:"12",cy:"9",r:"2.5"})]})}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-contact-label",children:"Location"}),e.jsx("p",{className:"fc-contact-value",children:"Kigali, Rwanda"})]})]}),e.jsxs("div",{className:"fc-contact-item",children:[e.jsx("div",{className:"fc-contact-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),e.jsx("circle",{cx:"12",cy:"9",r:"2.5"})]})}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-contact-label",children:"Location"}),e.jsx("p",{className:"fc-contact-value",children:"Kigali, Rwanda"})]})]}),e.jsxs("div",{className:"fc-contact-item",children:[e.jsx("div",{className:"fc-contact-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-contact-label",children:"Phone"}),e.jsx("p",{className:"fc-contact-value",children:"+250 784 123 456"})]})]}),e.jsxs("div",{className:"fc-contact-item",children:[e.jsx("div",{className:"fc-contact-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-contact-label",children:"Email"}),e.jsx("p",{className:"fc-contact-value",children:e.jsx("a",{href:"mailto:info@futureconnect.rw",children:"info@futureconnect.rw"})})]})]})]})]})}),e.jsx("hr",{className:"fc-divider"}),e.jsxs("div",{className:"fc-bottom",children:[e.jsxs(t,{href:a("user.home"),className:s(a("user.home"),"fc-logo-lockup"),children:[e.jsx("div",{className:"fc-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-logo-wordmark",children:"Future Connect"}),e.jsx("p",{className:"fc-logo-tagline",children:"Empowering Stories. Real Impact."})]})]}),e.jsxs("ul",{className:"fc-social",children:[e.jsx("li",{children:e.jsx("a",{href:"#",title:"Facebook","aria-label":"Facebook",children:e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})})}),e.jsx("li",{children:e.jsx("a",{href:"#",title:"X / Twitter","aria-label":"X Twitter",children:e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})}),e.jsx("li",{children:e.jsx("a",{href:"#",title:"Instagram","aria-label":"Instagram",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{fill:"none"},children:[e.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),e.jsx("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"}),e.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})})}),e.jsx("li",{children:e.jsx("a",{href:"#",title:"LinkedIn","aria-label":"LinkedIn",children:e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),e.jsx("circle",{cx:"4",cy:"4",r:"2"})]})})}),e.jsx("li",{children:e.jsx("a",{href:"#",title:"YouTube","aria-label":"YouTube",children:e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("path",{d:"M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"}),e.jsx("polygon",{points:"9.75 15.02 15.5 12 9.75 8.98 9.75 15.02",fill:"#0e1618"})]})})})]}),e.jsxs("ul",{className:"fc-legal",children:[e.jsx("li",{children:e.jsx(t,{href:a("user.privacy-policy"),className:s(a("user.privacy-policy")),children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(t,{href:a("user.terms-condition"),className:s(a("user.terms-condition")),children:"Terms & Conditions"})}),e.jsx("li",{children:e.jsx(t,{href:a("user.donation-policy"),className:s(a("user.donation-policy")),children:"Donation Policy"})})]}),e.jsxs("p",{className:"fc-copy",children:["© ",u," Future Connect"]})]})]})]})}document.querySelector("html").setAttribute("data-theme",localStorage.getItem("theme")||"light");document.addEventListener("DOMContentLoaded",function(){typeof themesettings<"u"&&themesettings&&document.body.insertAdjacentHTML("beforeend",themesettings);const v=document.documentElement,i=document.getElementById("dark-mode-toggle"),a=document.getElementById("light-mode-toggle");let u;try{u=localStorage.getItem("darkMode")}catch(g){console.warn("LocalStorage is not accessible:",g)}function b(){v.setAttribute("data-theme","dark");try{localStorage.setItem("darkMode","enabled")}catch(g){console.warn("Failed to save to LocalStorage:",g)}i&&i.classList.add("active"),a&&a.classList.remove("active")}function x(){v.setAttribute("data-theme","light");try{localStorage.setItem("darkMode","disabled")}catch(g){console.warn("Failed to save to LocalStorage:",g)}a&&a.classList.add("active"),i&&i.classList.remove("active")}u==="enabled"?b():x(),i&&i.addEventListener("click",b),a&&a.addEventListener("click",x)});function oe({children:v}){n.useEffect(()=>{if(window.AOS&&window.AOS.init(),window.Swiper){const a=new window.Swiper("#captionSwiper",{effect:"fade",loop:!0,speed:700}),u=new window.Swiper("#imageSwiper",{effect:"coverflow",loop:!0,centeredSlides:!0,slidesPerView:"auto",autoplay:{delay:4e3}});u.on("slideChangeTransitionStart",()=>{a.slideToLoop(u.realIndex)})}},[]);const{flash:i}=A().props;return n.useEffect(()=>{window.toastr&&i&&(i.success&&toastr.success(i.success),i.error&&toastr.error(i.error),i.warning&&toastr.warning(i.warning),i.info&&toastr.info(i.info))},[i]),e.jsx("div",{className:"body-overlay-wrapper",children:e.jsxs("div",{className:"main-wrapper",children:[e.jsx(re,{}),v,e.jsx(se,{}),e.jsx("div",{className:"back-to-top",children:e.jsx("a",{href:"#top",className:`
                        back-to-top-icon
                        align-items-center
                        justify-content-center
                        d-flex
                        `,children:e.jsx("i",{className:"ti ti-arrow-badge-up"})})})]})})}export{oe as G};
