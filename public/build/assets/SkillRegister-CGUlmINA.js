import{r as o,u as I,j as e,H as _,L as d,R as $}from"./app-DAdnLqM_.js";const q={"user.home":"/",login:"/login","talent.register":"/talent/register","user.terms-condition":"/terms",home:"/"},x=4,H=/^\+?\d[\d\s-]{6,}$/,D=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function Y({categories:E=[],routes:C={},submitted:M=!1}){var S;const c=r=>C[r]||q[r]||"#",[v,k]=o.useState("dark");o.useEffect(()=>{const r=typeof window<"u"?localStorage.getItem("fc-theme"):null,i=typeof window<"u"&&window.matchMedia("(prefers-color-scheme: light)").matches;k(r||(i?"light":"dark"))},[]),o.useEffect(()=>{const r=document.documentElement;v==="light"?r.setAttribute("data-h-theme","light"):r.removeAttribute("data-h-theme"),localStorage.setItem("fc-theme",v)},[v]);const B=()=>k(r=>r==="light"?"dark":"light"),[t,f]=o.useState(0),[s,h]=o.useState({}),[w,R]=o.useState(!1),[p,N]=o.useState(null),A=o.useRef(null),a=I({name:"",address:"",phone:"",email:"",language:"",category_id:"",description:"",image:null});o.useEffect(()=>{const r=a.errors;!r||Object.keys(r).length===0||(r.name||r.address?f(0):r.phone||r.email?f(1):r.language||r.category_id||r.description?f(2):r.image&&f(3))},[a.errors]);const g={0:()=>{const r={};return a.data.name.trim()||(r.name="Full name is required"),a.data.address.trim()||(r.address="Location is required"),r},1:()=>{const r={};return H.test(a.data.phone.trim())||(r.phone="A valid phone number is required"),D.test(a.data.email.trim())||(r.email="A valid email address is required"),r},2:()=>{const r={};return a.data.language.trim()||(r.language="At least one language is required"),a.data.category_id||(r.category_id="Please select a category"),a.data.description.trim()||(r.description="A short description is required"),r},3:()=>{const r={};return a.data.image||(r.image="A profile photo is required"),w||(r.terms="You must agree to the Terms & Conditions"),r}},z=r=>{h(i=>{if(!i[r])return i;const n={...i};return delete n[r],n})},l=(r,i)=>{a.setData(r,i),z(r)},m=r=>f(r),j=r=>{var b;const i=r-1,n=((b=g[i])==null?void 0:b.call(g))||{};if(Object.keys(n).length>0){h(n),requestAnimationFrame(()=>{const O=Object.keys(n)[0],y=document.querySelector(`[data-field="${O}"]`);y==null||y.scrollIntoView({behavior:"smooth",block:"center"})});return}h({}),m(r)},F=r=>{var n;const i=((n=r.target.files)==null?void 0:n[0])??null;if(l("image",i),i){const b=URL.createObjectURL(i);N(b)}else N(null)};o.useEffect(()=>()=>{p&&URL.revokeObjectURL(p)},[p]);const P=r=>{r.preventDefault();const i=g[3]();if(Object.keys(i).length>0){h(i);return}a.post(c("talent.register"),{forceFormData:!0})},T=t===0?0:t/(x-1)*100,L=M||a.wasSuccessful,u=[...Object.values(s).filter(r=>typeof r=="string"),...Object.values(a.errors||{})];return e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"Register Your Skills — Future Connect"}),e.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap",rel:"stylesheet"}),e.jsx("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"}),e.jsx("style",{children:`
        /* ─── TOKENS ─────────────────────────────────────────── */
        :root {
          --bg: #0e1618;
          --surface: #141d20;
          --surface2: #1a2428;
          --surface3: #1f2c30;
          --green: #48d597;
          --green-mid: #00a667;
          --green-dim: rgba(0, 166, 103, 0.12);
          --green-glow: rgba(72, 213, 151, 0.18);
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
        }

        .fc-skill-register-page, .fc-skill-register-page *,
        .fc-skill-register-page *::before,
        .fc-skill-register-page *::after {
          box-sizing: border-box;
        }

        .fc-skill-register-page {
          background: var(--bg);
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          color: var(--text);
        }

        /* ─── TOP HEADER (standalone page — carries its own header + toggle) ── */
        .fc-topheader {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          padding: 14px 0;
          position: sticky;
          top: 0;
          z-index: 500;
        }

        .fc-topheader-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .fc-th-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
        }

        .fc-th-logo-mark {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fc-th-logo-mark svg {
          width: 16px;
          height: 16px;
          fill: #0e1618;
        }

        .fc-th-logo-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
        }

        .fc-th-logo-text span {
          color: var(--green);
        }

        .fc-th-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .fc-th-home {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--muted);
          font-size: 12.5px;
          font-weight: 500;
          text-decoration: none;
          padding: 8px 14px;
          border: 1px solid var(--border);
          border-radius: 100px;
          background: transparent;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .fc-th-home:hover {
          color: var(--green);
          border-color: var(--border-h);
          background: var(--green-dim);
        }

        .fc-th-toggle {
          width: 38px;
          height: 38px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: transparent;
          color: var(--muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 15px;
          flex-shrink: 0;
        }

        .fc-th-toggle:hover {
          color: #fff;
          border-color: var(--border-h);
          background: rgba(255, 255, 255, 0.04);
        }

        .fc-th-toggle .ti-sun { display: none; }
        .fc-th-toggle .ti-moon { display: inline-flex; }
        [data-h-theme="light"] .fc-th-toggle .ti-sun { display: inline-flex; }
        [data-h-theme="light"] .fc-th-toggle .ti-moon { display: none; }

        @media (max-width: 520px) {
          .fc-topheader-inner { padding: 0 18px; }
          .fc-th-home span { display: none; }
        }

        /* ─── PAGE GRID ───────────────────────────────────────── */
        .fc-page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* ─── LEFT PANEL ──────────────────────────────────────── */
        .fc-left {
          border-right: 1px solid var(--border);
          padding: 60px 52px;
          display: flex;
          flex-direction: column;
          top: 0;
          overflow: hidden;
        }

        .fc-logo-lockup {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .fc-logo-mark {
          width: 36px;
          height: 36px;
          background: #48d597;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fc-logo-mark svg {
          width: 18px;
          height: 18px;
          fill: #0e1618;
        }

        .fc-logo-wordmark {
          font-size: 15px;
          font-weight: 700;
          color: #e2ecee;
          letter-spacing: .3px;
          line-height: 1.2;
          margin: 0;
        }

        .fc-logo-tagline {
          font-size: 11px;
          color: #4e6b70;
          letter-spacing: .3px;
          margin: 0;
          line-height: 1;
        }

        .fc-left-body {
          position: relative;
          z-index: 1;
        }

        .fc-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--green-dim);
          border: 1px solid rgba(0, 166, 103, 0.3);
          color: var(--green);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 22px;
          margin-top: 22px;
        }

        .fc-badge::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
          animation: fcPulse 2s infinite;
        }

        @keyframes fcPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .4; transform: scale(.7); }
        }

        .fc-left-body h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.12;
          letter-spacing: -0.5px;
          margin: 16px 0 16px;
        }

        .fc-left-body h1 span {
          color: var(--green);
        }

        .fc-left-body > p {
          font-size: 14.5px;
          color: var(--muted);
          line-height: 1.8;
          margin: 0 0 34px;
          max-width: 360px;
        }

        .fc-features {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .fc-feature {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .fc-feature-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--green-dim);
          border: 1px solid rgba(0, 166, 103, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .fc-feature-icon svg {
          width: 18px;
          height: 18px;
          stroke: var(--green);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-feature-text strong {
          display: block;
          font-size: 13.5px;
          font-weight: 500;
          color: #fff;
          margin-bottom: 2px;
        }

        .fc-feature-text span {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.55;
        }

        .fc-stats {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
          padding-top: 26px;
          border-top: 1px solid var(--border);
        }

        .fc-stat-num {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--green);
          line-height: 1;
          margin-bottom: 4px;
        }

        .fc-stat-label {
          font-size: 11.5px;
          color: var(--muted);
        }

        /* ─── RIGHT PANEL ─────────────────────────────────────── */
        .fc-right {
          background: var(--bg);
          padding: 0;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .fc-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 52px 0;
          flex-shrink: 0;
        }

        .fc-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 12.5px;
          font-weight: 500;
          text-decoration: none;
          padding: 7px 14px 7px 10px;
          border: 1px solid var(--border);
          border-radius: 100px;
          background: var(--surface);
          transition: all 0.2s ease;
          letter-spacing: 0.2px;
        }

        .fc-home-btn svg {
          width: 15px;
          height: 15px;
          stroke: var(--muted);
          transition: stroke 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }

        .fc-home-btn:hover {
          color: var(--green);
          border-color: var(--border-h);
          background: var(--green-dim);
        }

        .fc-home-btn:hover svg {
          stroke: var(--green);
          transform: translateX(-2px);
        }

        .fc-login-hint {
          font-size: 12.5px;
          color: var(--muted);
        }

        .fc-login-hint a {
          color: var(--green);
          text-decoration: none;
          font-weight: 500;
        }

        .fc-login-hint a:hover {
          text-decoration: underline;
        }

        .fc-right-body {
          padding: 28px 52px 56px;
          flex: 1;
        }

        .fc-right-head {
          margin-bottom: 24px;
        }

        .fc-right-head h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
        }

        .fc-right-head p {
          font-size: 13px;
          color: var(--muted);
          margin: 0;
        }

        /* ─── STEPPER ──────────────────────────────────────────── */
        .fc-stepper {
          display: flex;
          align-items: center;
          margin-bottom: 28px;
          position: relative;
        }

        .fc-stepper-track {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border);
          z-index: 0;
        }

        .fc-stepper-fill {
          height: 100%;
          background: var(--green);
          transition: width 0.4s ease;
        }

        .fc-step-node {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--surface);
          border: 1.5px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: var(--muted);
          z-index: 1;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .fc-step-node svg {
          width: 16px;
          height: 16px;
          stroke: #fff;
          fill: none;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-step-node.fc-done {
          background: var(--green);
          border-color: var(--green);
          color: #fff;
        }

        .fc-step-node.fc-active {
          background: var(--green-dim);
          border-color: var(--green);
          color: var(--green);
          box-shadow: 0 0 0 5px rgba(0, 166, 103, 0.1);
        }

        [data-h-theme="light"] .fc-step-node.fc-active svg {
          stroke: var(--green);
        }

        .fc-step-spacer {
          flex: 1;
          z-index: 0;
        }

        /* ─── PANEL ────────────────────────────────────────────── */
        .fc-panel {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 32px;
          position: relative;
          overflow: hidden;
        }

        .fc-panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--green), transparent);
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        /* ─── GLOBAL ERROR BANNER ──────────────────────────────── */
        .fc-error-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: var(--red-dim);
          border: 1px solid var(--red-border);
          border-radius: var(--radius);
          padding: 14px 16px;
          margin-bottom: 22px;
          animation: fcShake 0.4s ease;
        }

        .fc-error-banner-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(240, 112, 112, 0.15);
          border: 1px solid var(--red-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 15px;
        }

        [data-h-theme="light"] .fc-error-banner-icon {
          background: rgba(217, 72, 72, 0.1);
        }

        .fc-error-banner-icon svg {
          width: 17px;
          height: 17px;
          stroke: var(--red);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-error-banner-body strong {
          display: block;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--red);
          margin-bottom: 5px;
        }

        .fc-error-banner-body ul {
          margin: 0;
          padding-left: 16px;
          list-style: disc;
        }

        .fc-error-banner-body ul li {
          font-size: 12px;
          color: #f0a0a0;
          line-height: 1.6;
        }

        [data-h-theme="light"] .fc-error-banner-body ul li {
          color: #b03a3a;
        }

        @keyframes fcShake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(3px); }
        }

        .fc-panel-head {
          margin-bottom: 22px;
        }

        .fc-step-label {
          font-size: 10px;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          color: var(--green);
          font-weight: 500;
          margin-bottom: 4px;
        }

        .fc-panel-head h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        /* ─── FIELDS ───────────────────────────────────────────── */
        .fc-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .fc-row.single {
          grid-template-columns: 1fr;
        }

        .fc-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .fc-field label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 500;
          color: var(--muted);
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .fc-field-error-tag {
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.3px;
          color: var(--red);
          text-transform: none;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .fc-field-error-tag::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--red);
          flex-shrink: 0;
        }

        .fc-input-wrap {
          position: relative;
        }

        .fc-field input,
        .fc-field select,
        .fc-field textarea {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--text);
          font-family: 'Montserrat', sans-serif;
          font-size: 13.5px;
          padding: 11px 14px;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          width: 100%;
          -webkit-appearance: none;
          appearance: none;
        }

        .fc-field input::placeholder,
        .fc-field textarea::placeholder {
          color: var(--muted2);
        }

        .fc-field input:focus,
        .fc-field select:focus,
        .fc-field textarea:focus {
          border-color: var(--green);
          background: rgba(0, 166, 103, 0.06);
          box-shadow: 0 0 0 3px rgba(0, 166, 103, 0.08);
        }

        .fc-field.has-error input,
        .fc-field.has-error select,
        .fc-field.has-error textarea {
          border-color: var(--red-border);
          background: var(--red-dim);
          box-shadow: 0 0 0 3px rgba(240, 112, 112, 0.08);
          animation: fcShake 0.35s ease;
        }

        .fc-field.has-error input:focus,
        .fc-field.has-error select:focus,
        .fc-field.has-error textarea:focus {
          border-color: var(--red);
          box-shadow: 0 0 0 3px rgba(240, 112, 112, 0.12);
        }

        .fc-field-msg {
          display: none;
          align-items: center;
          gap: 5px;
          font-size: 11.5px;
          color: var(--red);
          line-height: 1.5;
          padding: 4px 0 0;
        }

        .fc-field-msg svg {
          width: 12px;
          height: 12px;
          stroke: var(--red);
          flex-shrink: 0;
        }

        .fc-field.has-error .fc-field-msg {
          display: flex;
        }

        .fc-field select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 36px;
          cursor: pointer;
        }

        .fc-field select option {
          background: #141d20;
          color: var(--text);
        }

        [data-h-theme="light"] .fc-field select option {
          background: #ffffff;
          color: var(--text);
        }

        .fc-field textarea {
          resize: vertical;
          min-height: 88px;
        }

        /* ─── FILE UPLOAD ──────────────────────────────────────── */
        .fc-file-zone {
          border: 1.5px dashed var(--border);
          border-radius: var(--radius);
          padding: 28px 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s;
          background: var(--surface2);
          position: relative;
        }

        .fc-file-zone:hover {
          border-color: var(--green);
          background: var(--green-dim);
        }

        .fc-file-zone.has-error {
          border-color: var(--red-border);
          background: var(--red-dim);
        }

        .fc-file-zone input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }

        .fc-file-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--green-dim);
          border: 1px solid rgba(0, 166, 103, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          font-size: 18px;
        }

        .fc-file-icon svg {
          width: 19px;
          height: 19px;
          stroke: var(--green);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-file-zone p {
          margin: 0;
          font-size: 13px;
          color: var(--muted);
        }

        .fc-file-zone p span {
          color: var(--green);
          font-weight: 500;
        }

        #preview-wrap {
          margin-top: 14px;
          text-align: center;
        }

        #preview-img {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--green);
        }

        #preview-name {
          font-size: 11.5px;
          color: var(--muted);
          margin: 8px 0 0;
        }

        /* ─── TERMS ────────────────────────────────────────────── */
        .fc-check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 20px;
          cursor: pointer;
        }

        .fc-check input[type="checkbox"] {
          accent-color: var(--green);
          margin-top: 3px;
          flex-shrink: 0;
          width: 15px;
          height: 15px;
          cursor: pointer;
        }

        .fc-check span {
          font-size: 12.5px;
          color: var(--muted);
          line-height: 1.65;
        }

        .fc-check a {
          color: var(--green);
          text-decoration: none;
        }

        .fc-check a:hover {
          text-decoration: underline;
        }

        /* ─── ACTIONS ──────────────────────────────────────────── */
        .fc-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid var(--border);
        }

        .fc-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 22px;
          border-radius: var(--radius);
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .fc-btn svg {
          width: 15px;
          height: 15px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-back {
          background: var(--surface2);
          color: var(--muted);
          border: 1px solid var(--border);
        }

        .btn-back:hover {
          border-color: var(--border-h);
          color: var(--text);
        }

        .btn-next {
          background: var(--green);
          color: #0a1f14;
          margin-left: auto;
        }

        .btn-next:hover {
          background: #62eaaa;
          transform: translateY(-1px);
        }

        .btn-submit {
          background: var(--green);
          color: #0a1f14;
          margin-left: auto;
          padding: 12px 28px;
        }

        .btn-submit:hover {
          background: #62eaaa;
          transform: translateY(-1px);
        }

        /* ─── STEP SECTIONS ────────────────────────────────────── */
        .fc-section {
          display: none;
        }

        .fc-section.fc-visible {
          display: block;
          animation: fcFadeUp 0.3s ease;
        }

        @keyframes fcFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ─── SUCCESS ──────────────────────────────────────────── */
        .fc-success {
          text-align: center;
          padding: 24px 0 12px;
        }

        .fc-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--green-dim);
          border: 2px solid rgba(0, 166, 103, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          font-size: 28px;
          color: var(--green);
        }

        .fc-success-icon svg {
          width: 30px;
          height: 30px;
          stroke: var(--green);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .fc-success h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.3rem;
          color: #fff;
          margin: 0 0 10px;
        }

        .fc-success p {
          color: var(--muted);
          font-size: 13.5px;
          margin: 0;
          line-height: 1.75;
        }

        .fc-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 22px;
          color: var(--green);
          font-size: 13.5px;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
        }

        .fc-back-link:hover {
          text-decoration: underline;
        }

        /* ─── PROGRESS HINT ────────────────────────────────────── */
        .fc-progress-hint {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .fc-progress-bar-wrap {
          flex: 1;
          height: 3px;
          background: var(--surface2);
          border-radius: 99px;
          overflow: hidden;
        }

        .fc-progress-bar {
          height: 100%;
          background: var(--green);
          border-radius: 99px;
          transition: width 0.4s ease;
        }

        .fc-progress-text {
          font-size: 11px;
          color: var(--muted);
          white-space: nowrap;
          font-weight: 500;
        }

        /* ─── RESPONSIVE ───────────────────────────────────────── */
        @media (max-width: 960px) {
          .fc-page { grid-template-columns: 1fr; }
          .fc-left { position: static; height: auto; padding: 44px 28px 40px; }
          .fc-topbar { padding: 22px 24px 0; }
          .fc-right-body { padding: 24px 24px 56px; }
        }

        @media (max-width: 520px) {
          .fc-left { padding: 36px 18px 32px; }
          .fc-topbar { padding: 18px 14px 0; }
          .fc-right-body { padding: 18px 14px 48px; }
          .fc-left-body h1 { font-size: 1.9rem; }
          .fc-panel { padding: 20px 14px; }
          .fc-row { grid-template-columns: 1fr; }
        }

        /* ══════════════════════════════════════
           LIGHT THEME OVERRIDES (matches shared header toggle site-wide)
        ══════════════════════════════════════ */
        [data-h-theme="light"] {
          --bg: #f6faf8;
          --surface: #ffffff;
          --surface2: #eef4f1;
          --surface3: #e6f1ec;
          --green: #00a667;
          --green-mid: #00c07a;
          --green-dim: rgba(0, 166, 103, 0.08);
          --green-glow: rgba(0, 166, 103, 0.16);
          --red: #d94848;
          --red-dim: rgba(217, 72, 72, 0.08);
          --red-border: rgba(217, 72, 72, 0.3);
          --text: #10201b;
          --muted: #5b7a70;
          --muted2: #8fa89e;
          --border: rgba(0, 100, 60, 0.12);
          --border-h: rgba(0, 100, 60, 0.3);
        }

        [data-h-theme="light"] .fc-th-logo-text,
        [data-h-theme="light"] .fc-logo-text,
        [data-h-theme="light"] .fc-logo-wordmark,
        [data-h-theme="light"] .fc-left-body h1,
        [data-h-theme="light"] .fc-feature-text strong,
        [data-h-theme="light"] .fc-panel-head h3,
        [data-h-theme="light"] .fc-right-head h2,
        [data-h-theme="light"] .fc-success h3 {
          color: #10201b;
        }

        [data-h-theme="light"] .fc-th-toggle:hover {
          color: #10201b;
          background: rgba(0, 100, 60, 0.06);
        }

        [data-h-theme="light"] .fc-logo-tagline {
          color: #8fa89e;
        }
      `}),e.jsxs("div",{className:"fc-skill-register-page",children:[e.jsx("header",{className:"fc-topheader",children:e.jsxs("div",{className:"fc-topheader-inner",children:[e.jsxs(d,{href:c("user.home"),className:"fc-th-logo",children:[e.jsx("div",{className:"fc-th-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("span",{className:"fc-th-logo-text",children:["Future",e.jsx("span",{children:"Connect"})]})]}),e.jsxs("div",{className:"fc-th-actions",children:[e.jsxs(d,{href:c("user.home"),className:"fc-th-home",children:[e.jsx("i",{className:"ti ti-home"})," ",e.jsx("span",{children:"Home"})]}),e.jsxs("button",{className:"fc-th-toggle",onClick:B,"aria-label":"Toggle theme",children:[e.jsx("i",{className:"ti ti-sun"}),e.jsx("i",{className:"ti ti-moon"})]})]})]})}),e.jsxs("div",{className:"fc-page",children:[e.jsxs("div",{className:"fc-left",children:[e.jsxs(d,{href:c("user.home"),className:"fc-logo-lockup",children:[e.jsx("div",{className:"fc-logo-mark",children:e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsxs("div",{children:[e.jsx("p",{className:"fc-logo-wordmark",children:"Future Connect"}),e.jsx("p",{className:"fc-logo-tagline",children:"Empowering Stories. Real Impact."})]})]}),e.jsxs("div",{className:"fc-left-body",children:[e.jsx("div",{className:"fc-badge",children:"skill Hub"}),e.jsxs("h1",{children:["Showcase Your ",e.jsx("span",{children:"Skills"})," to the World"]}),e.jsxs("div",{className:"fc-features",children:[e.jsxs("div",{className:"fc-feature",children:[e.jsx("div",{className:"fc-feature-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("circle",{cx:"12",cy:"12",r:"1.2",fill:"currentColor",stroke:"none"})]})}),e.jsxs("div",{className:"fc-feature-text",children:[e.jsx("strong",{children:"Get Verified"}),e.jsx("span",{children:"Earn a verified badge and build instant credibility with clients."})]})]}),e.jsxs("div",{className:"fc-feature",children:[e.jsx("div",{className:"fc-feature-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("path",{d:"M12 3a13 13 0 0 1 0 18a13 13 0 0 1 0-18z"})]})}),e.jsxs("div",{className:"fc-feature-text",children:[e.jsx("strong",{children:"Global Exposure"}),e.jsx("span",{children:"Reach clients and employers locally and across the globe."})]})]}),e.jsxs("div",{className:"fc-feature",children:[e.jsx("div",{className:"fc-feature-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})})}),e.jsxs("div",{className:"fc-feature-text",children:[e.jsx("strong",{children:"Direct Connections"}),e.jsx("span",{children:"Connect securely with clients through our Connection Room."})]})]}),e.jsxs("div",{className:"fc-feature",children:[e.jsx("div",{className:"fc-feature-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]})}),e.jsxs("div",{className:"fc-feature-text",children:[e.jsx("strong",{children:"Grow With Us"}),e.jsx("span",{children:"Access courses, opportunities and tools to level up your career."})]})]})]})]})]}),e.jsxs("div",{className:"fc-right",children:[e.jsxs("div",{className:"fc-topbar",children:[e.jsx("span",{}),e.jsxs("span",{className:"fc-login-hint",children:["Have a profile? ",e.jsx(d,{href:c("login"),children:"Sign in →"})]})]}),e.jsxs("div",{className:"fc-right-body",children:[!L&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"fc-right-head",children:[e.jsx("h2",{children:"Create Your skill Profile"}),e.jsx("p",{children:"Fill in four quick steps — takes less than 3 minutes."})]}),u.length>0&&e.jsxs("div",{className:"fc-error-banner",children:[e.jsx("div",{className:"fc-error-banner-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[e.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),e.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),e.jsxs("div",{className:"fc-error-banner-body",children:[e.jsxs("strong",{children:["Please fix ",u.length," ",u.length===1?"issue":"issues"," before continuing:"]}),e.jsx("ul",{children:u.map((r,i)=>e.jsx("li",{children:r},i))})]})]}),e.jsxs("div",{className:"fc-progress-hint",children:[e.jsx("div",{className:"fc-progress-bar-wrap",children:e.jsx("div",{className:"fc-progress-bar",style:{width:`${(t+1)/x*100}%`}})}),e.jsxs("span",{className:"fc-progress-text",children:["Step ",t+1," of ",x]})]}),e.jsxs("div",{className:"fc-stepper",children:[e.jsx("div",{className:"fc-stepper-track",children:e.jsx("div",{className:"fc-stepper-fill",style:{width:`${T}%`}})}),Array.from({length:x}).map((r,i)=>e.jsxs($.Fragment,{children:[e.jsx("div",{className:`fc-step-node${i<t?" fc-done":i===t?" fc-active":""}`,children:i<t?e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}):i+1}),i<x-1&&e.jsx("div",{className:"fc-step-spacer"})]},i))]}),e.jsx("div",{className:"fc-panel",children:e.jsxs("form",{onSubmit:P,noValidate:!0,encType:"multipart/form-data",children:[e.jsxs("div",{className:`fc-section${t===0?" fc-visible":""}`,children:[e.jsxs("div",{className:"fc-panel-head",children:[e.jsx("div",{className:"fc-step-label",children:"Step 1 of 4"}),e.jsx("h3",{children:"Personal Information"})]}),e.jsxs("div",{className:"fc-row",children:[e.jsxs("div",{className:`fc-field${s.name?" has-error":""}`,"data-field":"name",children:[e.jsxs("label",{htmlFor:"name",children:["Full Name",s.name&&e.jsx("span",{className:"fc-field-error-tag",children:s.name})]}),e.jsx("input",{type:"text",id:"name",value:a.data.name,onChange:r=>l("name",r.target.value),placeholder:"e.g. John Doe"}),e.jsxs("span",{className:"fc-field-msg",children:[e.jsxs("svg",{fill:"none",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),s.name||"Full name is required"]})]}),e.jsxs("div",{className:`fc-field${s.address?" has-error":""}`,"data-field":"address",children:[e.jsxs("label",{htmlFor:"address",children:["Location / Address",s.address&&e.jsx("span",{className:"fc-field-error-tag",children:s.address})]}),e.jsx("input",{type:"text",id:"address",value:a.data.address,onChange:r=>l("address",r.target.value),placeholder:"e.g. Kigali, Rwanda"}),e.jsxs("span",{className:"fc-field-msg",children:[e.jsxs("svg",{fill:"none",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),s.address||"Location is required"]})]})]}),e.jsxs("div",{className:"fc-actions",children:[e.jsx("span",{}),e.jsxs("button",{type:"button",className:"fc-btn btn-next",onClick:()=>j(1),children:["Continue",e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]})]})]}),e.jsxs("div",{className:`fc-section${t===1?" fc-visible":""}`,children:[e.jsxs("div",{className:"fc-panel-head",children:[e.jsx("div",{className:"fc-step-label",children:"Step 2 of 4"}),e.jsx("h3",{children:"Contact Details"})]}),e.jsxs("div",{className:"fc-row",children:[e.jsxs("div",{className:`fc-field${s.phone?" has-error":""}`,"data-field":"phone",children:[e.jsxs("label",{htmlFor:"phone",children:["Phone Number",s.phone&&e.jsx("span",{className:"fc-field-error-tag",children:s.phone})]}),e.jsx("input",{type:"tel",id:"phone",value:a.data.phone,onChange:r=>l("phone",r.target.value),placeholder:"e.g. +250 788 123 456"}),e.jsxs("span",{className:"fc-field-msg",children:[e.jsxs("svg",{fill:"none",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),s.phone||"A valid phone number is required"]})]}),e.jsxs("div",{className:`fc-field${s.email?" has-error":""}`,"data-field":"email",children:[e.jsxs("label",{htmlFor:"email",children:["Email Address",s.email&&e.jsx("span",{className:"fc-field-error-tag",children:s.email})]}),e.jsx("input",{type:"email",id:"email",value:a.data.email,onChange:r=>l("email",r.target.value),placeholder:"e.g. you@example.com"}),e.jsxs("span",{className:"fc-field-msg",children:[e.jsxs("svg",{fill:"none",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),s.email||"A valid email address is required"]})]})]}),e.jsxs("div",{className:"fc-actions",children:[e.jsxs("button",{type:"button",className:"fc-btn btn-back",onClick:()=>m(0),children:[e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back"]}),e.jsxs("button",{type:"button",className:"fc-btn btn-next",onClick:()=>j(2),children:["Continue",e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]})]})]}),e.jsxs("div",{className:`fc-section${t===2?" fc-visible":""}`,children:[e.jsxs("div",{className:"fc-panel-head",children:[e.jsx("div",{className:"fc-step-label",children:"Step 3 of 4"}),e.jsx("h3",{children:"Skills & Expertise"})]}),e.jsxs("div",{className:"fc-row",children:[e.jsxs("div",{className:`fc-field${s.language?" has-error":""}`,"data-field":"language",children:[e.jsxs("label",{htmlFor:"language",children:["Languages Spoken",s.language&&e.jsx("span",{className:"fc-field-error-tag",children:s.language})]}),e.jsx("input",{type:"text",id:"language",value:a.data.language,onChange:r=>l("language",r.target.value),placeholder:"e.g. English, Kinyarwanda"}),e.jsxs("span",{className:"fc-field-msg",children:[e.jsxs("svg",{fill:"none",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),s.language||"At least one language is required"]})]}),e.jsxs("div",{className:`fc-field${s.category_id?" has-error":""}`,"data-field":"category_id",children:[e.jsxs("label",{htmlFor:"category_id",children:["skill Category",s.category_id&&e.jsx("span",{className:"fc-field-error-tag",children:s.category_id})]}),e.jsxs("select",{id:"category_id",value:a.data.category_id,onChange:r=>l("category_id",r.target.value),children:[e.jsx("option",{value:"",children:"Select a category"}),E.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsxs("span",{className:"fc-field-msg",children:[e.jsxs("svg",{fill:"none",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),s.category_id||"Please select a category"]})]})]}),e.jsx("div",{className:"fc-row single",children:e.jsxs("div",{className:`fc-field${s.description?" has-error":""}`,"data-field":"description",children:[e.jsxs("label",{htmlFor:"description",children:["About Your skill",s.description&&e.jsx("span",{className:"fc-field-error-tag",children:s.description})]}),e.jsx("textarea",{id:"description",value:a.data.description,onChange:r=>l("description",r.target.value),placeholder:"Describe your skills, experience, and what makes you unique..."}),e.jsxs("span",{className:"fc-field-msg",children:[e.jsxs("svg",{fill:"none",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),s.description||"A short description is required"]})]})}),e.jsxs("div",{className:"fc-actions",children:[e.jsxs("button",{type:"button",className:"fc-btn btn-back",onClick:()=>m(1),children:[e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back"]}),e.jsxs("button",{type:"button",className:"fc-btn btn-next",onClick:()=>j(3),children:["Continue",e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]})]})]}),e.jsxs("div",{className:`fc-section${t===3?" fc-visible":""}`,children:[e.jsxs("div",{className:"fc-panel-head",children:[e.jsx("div",{className:"fc-step-label",children:"Step 4 of 4"}),e.jsx("h3",{children:"Profile Photo"})]}),e.jsxs("div",{className:`fc-file-zone${s.image?" has-error":""}`,"data-field":"image",children:[e.jsx("input",{type:"file",ref:A,accept:"image/*",onChange:F}),e.jsx("div",{className:"fc-file-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[e.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),e.jsx("circle",{cx:"12",cy:"13",r:"4"})]})}),e.jsxs("p",{children:[e.jsx("span",{children:"Click to upload"})," or drag & drop"]}),e.jsx("p",{style:{fontSize:11,marginTop:5,color:"var(--muted2)"},children:"JPG, PNG — max 5 MB"})]}),s.image&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:8,fontSize:12,color:"var(--red)"},children:[e.jsxs("svg",{width:"13",height:"13",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),s.image]}),p&&e.jsxs("div",{id:"preview-wrap",children:[e.jsx("img",{id:"preview-img",src:p,alt:"Preview"}),e.jsx("p",{id:"preview-name",children:(S=a.data.image)==null?void 0:S.name})]}),e.jsxs("label",{className:"fc-check",children:[e.jsx("input",{type:"checkbox",checked:w,onChange:r=>{R(r.target.checked),z("terms")}}),e.jsxs("span",{children:["I agree to the"," ",e.jsx(d,{href:c("user.terms-condition"),children:"Terms & Conditions"})," ","of Future Connect."]})]}),s.terms&&e.jsx("div",{style:{fontSize:12,color:"var(--red)",marginTop:6},children:s.terms}),e.jsxs("div",{className:"fc-actions",children:[e.jsxs("button",{type:"button",className:"fc-btn btn-back",onClick:()=>m(2),children:[e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back"]}),e.jsxs("button",{type:"submit",className:"fc-btn btn-submit",disabled:a.processing,children:[a.processing?"Submitting…":"Submit Registration",e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})]})]})]})]})})]}),L&&e.jsx("div",{className:"fc-panel",children:e.jsx("div",{className:"fc-section fc-visible",children:e.jsxs("div",{className:"fc-success",children:[e.jsx("div",{className:"fc-success-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),e.jsx("h3",{children:"Registration Submitted!"}),e.jsxs("p",{children:["Your skill profile has been submitted for review.",e.jsx("br",{}),"You'll receive a confirmation email within 24–48 hours."]}),e.jsxs(d,{href:c("home"),className:"fc-back-link",children:[e.jsx("svg",{width:"15",height:"15",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 12H5M5 12l7-7M5 12l7 7"})}),"Back to Home"]})]})})})]})]})]})]})]})}export{Y as default};
