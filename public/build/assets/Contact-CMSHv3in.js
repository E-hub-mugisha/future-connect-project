import{d as c,u as l,j as e,H as d}from"./app-C-Atdk99.js";import{G as p}from"./GuestLayout-be1venag.js";function x(){var t;const{props:i}=c(),s=(t=i.flash)==null?void 0:t.success,r=l({names:"",email:"",subject:"",message:""});function o(a){a.preventDefault(),r.post(route("contact.send"),{preserveScroll:!0,onSuccess:()=>r.reset()})}const n=Object.keys(r.errors).length>0;return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Contact Us"}),e.jsx("style",{children:`
        /* ── Google Font ─────────────────────────────── */
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Variables ───────────────────────────────── */
        :root {
          --bg-deep: #0e1618;
          --bg-card: #131f22;
          --bg-input: #0a1214;
          --accent: #48d597;
          --accent-dim: rgba(0, 166, 103, .12);
          --accent-mid: rgba(0, 166, 103, .25);
          --danger: #e07070;
          --danger-dim: rgba(220, 50, 50, .08);
          --danger-border: rgba(220, 50, 50, .3);
          --text-head: #e4eeef;
          --text-body: #7fa0a6;
          --text-muted: #3d5a5e;
          --border: rgba(255, 255, 255, .06);
          --border-soft: rgba(255, 255, 255, .08);
          --focus-ring: rgba(0, 166, 103, .08);
          --success-text: #4dd9a0;
          --submit-text: #0e1618;
          --radius-lg: 16px;
          --radius-md: 10px;
        }

        /* ── LIGHT THEME OVERRIDES ──────────────────────
           Driven by the same [data-h-theme="light"] attribute
           the header sets on <html> (and persists via
           localStorage 'fc-theme'), so this page just follows
           whatever the header's toggle already decided. ── */
        [data-h-theme="light"] {
          --bg-deep: #f6faf8;
          --bg-card: #ffffff;
          --bg-input: #f2f7f4;
          --accent: #00a667;
          --accent-dim: rgba(0, 166, 103, .08);
          --accent-mid: rgba(0, 100, 60, .22);
          --danger: #c94040;
          --danger-dim: rgba(220, 50, 50, .06);
          --danger-border: rgba(220, 50, 50, .28);
          --text-head: #10201b;
          --text-body: #52716a;
          --text-muted: #86a49b;
          --border: rgba(0, 100, 60, .1);
          --border-soft: rgba(0, 100, 60, .16);
          --focus-ring: rgba(0, 166, 103, .12);
          --success-text: #0a8a56;
          --submit-text: #ffffff;
        }

        [data-h-theme="light"] .cp-page {
          box-shadow: none;
        }

        [data-h-theme="light"] .cp-info-card,
        [data-h-theme="light"] .cp-info-panel,
        [data-h-theme="light"] .cp-form-panel {
          box-shadow: 0 1px 3px rgba(16, 32, 27, .05);
        }

        /* ── Page Shell ──────────────────────────────── */
        .cp-page {
          background: var(--bg-deep);
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          padding: 0 0 80px;
          position: relative;
          overflow: hidden;
          transition: background .25s ease;
        }

        .cp-page::before,
        .cp-page::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .cp-page > * {
          position: relative;
          z-index: 1;
        }

        /* ── Hero Header ─────────────────────────────── */
        .cp-hero {
          text-align: center;
          padding: 72px 24px 52px;
        }

        .cp-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-dim);
          border: 1px solid var(--accent-mid);
          border-radius: 100px;
          padding: 5px 14px;
          margin-bottom: 22px;
        }

        .cp-hero__eyebrow::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {

          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: .4;
            transform: scale(1.4);
          }
        }

        .cp-hero h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 400;
          color: var(--text-head);
          line-height: 1.15;
          margin: 0 0 16px;
        }

        .cp-hero h1 em {
          font-style: italic;
          color: var(--accent);
        }

        .cp-hero p {
          font-size: 16px;
          color: var(--text-body);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.75;
        }

        /* ── Info Cards Row ──────────────────────────── */
        .cp-info-row {
          max-width: 880px;
          margin: 0 auto 56px;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .cp-info-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: border-color .25s, transform .25s, background .25s;
        }

        .cp-info-card:hover {
          border-color: var(--accent-mid);
          transform: translateY(-3px);
        }

        .cp-info-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border-radius: 12px;
          background: var(--accent-dim);
          border: 1px solid var(--accent-mid);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cp-info-icon svg {
          width: 18px;
          height: 18px;
          stroke: var(--accent);
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .cp-info-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .8px;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 4px;
        }

        .cp-info-value {
          font-size: 13.5px;
          color: var(--text-body);
          margin: 0;
          line-height: 1.5;
        }

        .cp-info-value a {
          color: var(--text-body);
          text-decoration: none;
          transition: color .2s;
        }

        .cp-info-value a:hover {
          color: var(--accent);
        }

        /* ── Main Content Row (map + form) ───────────── */
        .cp-content {
          max-width: 880px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        /* ── Contact Info Panel ──────────────────────── */
        .cp-info-panel {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          transition: background .25s, border-color .25s;
        }

        .cp-info-panel h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 1.6rem;
          font-weight: 400;
          color: var(--text-head);
          margin: 0 0 6px;
          line-height: 1.2;
        }

        .cp-info-panel > p {
          font-size: 13.5px;
          color: var(--text-body);
          margin: 0 0 28px;
          line-height: 1.65;
        }

        .cp-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 28px;
        }

        .cp-info-list-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .cp-info-list-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border-radius: 10px;
          background: var(--accent-dim);
          border: 1px solid var(--accent-mid);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cp-info-list-icon svg {
          width: 16px;
          height: 16px;
          stroke: var(--accent);
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .cp-info-list-body p {
          margin: 0;
        }

        .cp-info-list-title {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: .7px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 3px !important;
        }

        .cp-info-list-value {
          font-size: 13.5px;
          color: var(--text-head);
          line-height: 1.6;
        }

        .cp-info-list-value a {
          color: var(--text-head);
          text-decoration: none;
          transition: color .2s;
        }

        .cp-info-list-value a:hover {
          color: var(--accent);
        }

        .cp-info-divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 0 0 22px;
        }

        .cp-social-label {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: .7px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 14px;
        }

        .cp-social-row {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .cp-social-link {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--bg-input);
          border: 1px solid var(--border-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color .2s, background .2s, transform .2s;
        }

        .cp-social-link svg {
          width: 16px;
          height: 16px;
          stroke: var(--text-body);
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke .2s;
        }

        .cp-social-link:hover {
          border-color: var(--accent-mid);
          background: var(--accent-dim);
          transform: translateY(-2px);
        }

        .cp-social-link:hover svg {
          stroke: var(--accent);
        }

        /* ── Form Panel ──────────────────────────────── */
        .cp-form-panel {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 36px 32px;
          transition: background .25s, border-color .25s;
        }

        .cp-form-panel h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 1.6rem;
          font-weight: 400;
          color: var(--text-head);
          margin: 0 0 6px;
          line-height: 1.2;
        }

        .cp-form-panel > p {
          font-size: 13.5px;
          color: var(--text-body);
          margin: 0 0 28px;
          line-height: 1.65;
        }

        /* Form fields */
        .cp-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .cp-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
        }

        .cp-field label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .6px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .cp-field-error-tag {
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: .3px;
          color: var(--danger);
          text-transform: none;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .cp-field-error-tag::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--danger);
          flex-shrink: 0;
        }

        .cp-field input,
        .cp-field textarea {
          background: var(--bg-input);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-md);
          color: var(--text-head);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          padding: 12px 16px;
          width: 100%;
          transition: border-color .2s, box-shadow .2s, background .25s;
          outline: none;
          -webkit-appearance: none;
        }

        .cp-field input::placeholder,
        .cp-field textarea::placeholder {
          color: var(--text-muted);
        }

        .cp-field input:focus,
        .cp-field textarea:focus {
          border-color: var(--accent-mid);
          box-shadow: 0 0 0 3px var(--focus-ring);
        }

        .cp-field.has-error input,
        .cp-field.has-error textarea {
          border-color: var(--danger-border);
          background: var(--danger-dim);
          box-shadow: 0 0 0 3px rgba(220, 50, 50, .08);
        }

        .cp-field.has-error input:focus,
        .cp-field.has-error textarea:focus {
          border-color: var(--danger);
          box-shadow: 0 0 0 3px rgba(220, 50, 50, .12);
        }

        .cp-field textarea {
          resize: vertical;
          min-height: 110px;
          line-height: 1.6;
        }

        /* Submit button */
        .cp-submit {
          width: 100%;
          background: var(--accent);
          color: var(--submit-text);
          border: none;
          border-radius: var(--radius-md);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: .3px;
          padding: 14px 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background .2s, transform .15s;
          margin-top: 6px;
        }

        .cp-submit:hover {
          background: #00c07a;
          transform: translateY(-1px);
        }

        .cp-submit:active {
          transform: scale(.98);
        }

        .cp-submit:disabled {
          opacity: .65;
          cursor: not-allowed;
          transform: none;
        }

        .cp-submit svg {
          width: 15px;
          height: 15px;
          stroke: var(--submit-text);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* Alert messages */
        .cp-alert {
          border-radius: var(--radius-md);
          padding: 12px 16px;
          font-size: 13px;
          margin-bottom: 18px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .cp-alert svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .cp-alert--success {
          background: rgba(0, 166, 103, .1);
          border: 1px solid rgba(0, 166, 103, .25);
          color: var(--success-text);
        }

        .cp-alert--error {
          background: var(--danger-dim);
          border: 1px solid var(--danger-border);
          color: var(--danger);
        }

        /* ── Responsive ──────────────────────────────── */
        @media (max-width: 720px) {
          .cp-info-row {
            grid-template-columns: 1fr;
          }

          .cp-content {
            grid-template-columns: 1fr;
          }

          .cp-form-row {
            grid-template-columns: 1fr;
          }

          .cp-form-panel {
            padding: 24px 20px;
          }
        }

        @media (max-width: 480px) {
          .cp-hero {
            padding: 48px 20px 36px;
          }
        }
      `}),e.jsxs("div",{className:"cp-page",children:[e.jsxs("div",{className:"cp-hero",children:[e.jsx("div",{className:"cp-hero__eyebrow",children:"Get in Touch"}),e.jsxs("h1",{children:["Let's ",e.jsx("em",{children:"Talk"})]}),e.jsx("p",{children:"Have a question, idea, or feedback? Drop us a message — we'd love to hear from you."})]}),e.jsxs("div",{className:"cp-content",children:[e.jsxs("div",{className:"cp-info-panel",children:[e.jsx("h3",{children:"Reach Us Directly"}),e.jsx("p",{children:"Prefer not to fill out a form? Here's every other way to reach the Future Connect team."}),e.jsxs("div",{className:"cp-info-list",children:[e.jsxs("div",{className:"cp-info-list-item",children:[e.jsx("div",{className:"cp-info-list-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),e.jsx("circle",{cx:"12",cy:"9",r:"2.5"})]})}),e.jsxs("div",{className:"cp-info-list-body",children:[e.jsx("p",{className:"cp-info-list-title",children:"Office"}),e.jsxs("p",{className:"cp-info-list-value",children:["Future Connect HQ,",e.jsx("br",{}),"Kigali City, Rwanda"]})]})]}),e.jsxs("div",{className:"cp-info-list-item",children:[e.jsx("div",{className:"cp-info-list-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),e.jsxs("div",{className:"cp-info-list-body",children:[e.jsx("p",{className:"cp-info-list-title",children:"Email"}),e.jsx("p",{className:"cp-info-list-value",children:e.jsx("a",{href:"mailto:info@futureconnect.rw",children:"info@futureconnect.rw"})})]})]}),e.jsxs("div",{className:"cp-info-list-item",children:[e.jsx("div",{className:"cp-info-list-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})})}),e.jsxs("div",{className:"cp-info-list-body",children:[e.jsx("p",{className:"cp-info-list-title",children:"Phone"}),e.jsx("p",{className:"cp-info-list-value",children:e.jsx("a",{href:"tel:+250788123456",children:"+250 788 123 456"})})]})]}),e.jsxs("div",{className:"cp-info-list-item",children:[e.jsx("div",{className:"cp-info-list-icon",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]})}),e.jsxs("div",{className:"cp-info-list-body",children:[e.jsx("p",{className:"cp-info-list-title",children:"Business Hours"}),e.jsx("p",{className:"cp-info-list-value",children:"Mon – Fri, 8:00 AM – 6:00 PM (CAT)"})]})]})]}),e.jsx("hr",{className:"cp-info-divider"}),e.jsx("p",{className:"cp-social-label",children:"Follow Future Connect"}),e.jsxs("div",{className:"cp-social-row",children:[e.jsx("a",{href:"#",className:"cp-social-link","aria-label":"LinkedIn",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),e.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),e.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}),e.jsx("a",{href:"#",className:"cp-social-link","aria-label":"X (Twitter)",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M4 4l7.5 9.5L4.5 20H7l5.5-6 4.5 6h4l-7.8-9.9L19.5 4H17l-5 5.7L8 4z"})})}),e.jsx("a",{href:"#",className:"cp-social-link","aria-label":"Instagram",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),e.jsx("circle",{cx:"12",cy:"12",r:"4"}),e.jsx("circle",{cx:"17.5",cy:"6.5",r:"0.6",fill:"currentColor",stroke:"none"})]})}),e.jsx("a",{href:"#",className:"cp-social-link","aria-label":"Facebook",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})})]})]}),e.jsxs("div",{className:"cp-form-panel",children:[e.jsx("h3",{children:"Send Us a Message"}),e.jsx("p",{children:"We typically respond within 24 hours on business days."}),s&&e.jsxs("div",{className:"cp-alert cp-alert--success",children:[e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),s]}),n&&e.jsxs("div",{className:"cp-alert cp-alert--error",children:[e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),"Please fix the errors below and try again."]}),e.jsxs("form",{onSubmit:o,noValidate:!0,children:[e.jsxs("div",{className:"cp-form-row",children:[e.jsxs("div",{className:`cp-field ${r.errors.names?"has-error":""}`,children:[e.jsxs("label",{htmlFor:"cp-name",children:["Full Name",r.errors.names&&e.jsx("span",{className:"cp-field-error-tag",children:r.errors.names})]}),e.jsx("input",{type:"text",id:"cp-name",name:"names",placeholder:"Jane Doe",value:r.data.names,onChange:a=>r.setData("names",a.target.value),required:!0})]}),e.jsxs("div",{className:`cp-field ${r.errors.email?"has-error":""}`,children:[e.jsxs("label",{htmlFor:"cp-email",children:["Email Address",r.errors.email&&e.jsx("span",{className:"cp-field-error-tag",children:r.errors.email})]}),e.jsx("input",{type:"email",id:"cp-email",name:"email",placeholder:"jane@example.com",value:r.data.email,onChange:a=>r.setData("email",a.target.value),required:!0})]})]}),e.jsxs("div",{className:`cp-field ${r.errors.subject?"has-error":""}`,children:[e.jsxs("label",{htmlFor:"cp-subject",children:["Subject",r.errors.subject&&e.jsx("span",{className:"cp-field-error-tag",children:r.errors.subject})]}),e.jsx("input",{type:"text",id:"cp-subject",name:"subject",placeholder:"What's this about?",value:r.data.subject,onChange:a=>r.setData("subject",a.target.value),required:!0})]}),e.jsxs("div",{className:`cp-field ${r.errors.message?"has-error":""}`,children:[e.jsxs("label",{htmlFor:"cp-message",children:["Your Message",r.errors.message&&e.jsx("span",{className:"cp-field-error-tag",children:r.errors.message})]}),e.jsx("textarea",{id:"cp-message",name:"message",placeholder:"Tell us more…",value:r.data.message,onChange:a=>r.setData("message",a.target.value),required:!0})]}),e.jsxs("button",{type:"submit",className:"cp-submit",disabled:r.processing,children:[r.processing?"Sending…":"Send Message",e.jsxs("svg",{viewBox:"0 0 24 24",children:[e.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),e.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})]})]})]})]})]})]})}x.layout=i=>e.jsx(p,{children:i,title:"Contact Us"});export{x as default};
