import{r as c,u as q,j as e,H as b}from"./app-B7IJkTeC.js";import{G as v}from"./GuestLayout-Dmb6shQU.js";function y(r){return r?r.replace(/<[^>]*>/g,""):""}function w(r){return r?r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function j(r){return w(r).replace(/\n/g,"<br>")}function k({title:r,subtitle:n,onClose:l,children:p,footer:d,formId:h,onSubmit:s}){return e.jsxs("div",{className:"modal fade fq-modal show",style:{display:"block"},tabIndex:"-1",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"modal-backdrop fade show",onClick:l,style:{zIndex:1040}}),e.jsx("div",{className:"modal-dialog modal-dialog-centered",style:{zIndex:1050,position:"relative"},children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{children:e.jsxs("h5",{className:"modal-title",children:[r,n&&e.jsx("small",{children:n})]})}),e.jsx("button",{type:"button",className:"btn-close",onClick:l,"aria-label":"Close"})]}),e.jsxs("form",{id:h,onSubmit:s,children:[e.jsx("div",{className:"modal-body",children:p}),d&&e.jsx("div",{className:"modal-footer",style:{gap:10},children:d})]})]})})]})}function N({faqs:r=[]}){const[n,l]=c.useState(""),[p,d]=c.useState(null),[h,s]=c.useState(!1),f=r.length,m=c.useMemo(()=>{const a=n.trim().toLowerCase();return a?r.filter(o=>{const i=(o.question||"").toLowerCase(),x=y(o.answer||"").toLowerCase();return i.includes(a)||x.includes(a)}):r},[r,n]),t=q({question:""});function g(a){a.preventDefault(),t.post(route("faq.ask.store"),{preserveScroll:!0,onSuccess:()=>{s(!1),t.reset()}})}return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"FAQ - Future Connect"}),e.jsx("style",{children:`
        :root {
          --fq-bg: #0e1618;
          --fq-surface: #141d20;
          --fq-surface2: #1a2428;
          --fq-green: #48d597;
          --fq-green-d: rgba(0, 166, 103, 0.14);
          --fq-green-b: rgba(0, 166, 103, 0.22);
          --fq-text: #e8f0ed;
          --fq-muted: #7a9a8e;
          --fq-border: rgba(0, 166, 103, 0.16);
          --fq-border-h: rgba(0, 166, 103, 0.38);
        }

        .fq-page * {
          box-sizing: border-box;
        }

        .fq-page {
          background: var(--fq-bg);
          padding-bottom: 90px;
        }

        /* ── HERO ── */
        .fq-hero {
          position: relative;
          overflow: hidden;
          padding: 68px 0 54px;
          border-bottom: 1px solid var(--fq-border);
        }

        .fq-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--fq-green), transparent);
        }

        .fq-hero-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(72, 213, 151, 0.16), transparent 70%);
          pointer-events: none;
        }

        .fq-hero-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .fq-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--fq-green-d);
          border: 1px solid var(--fq-border-h);
          color: var(--fq-green);
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 18px;
          font-family: 'Syne', sans-serif;
        }

        .fq-hero h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.15;
        }

        .fq-hero h1 span {
          color: var(--fq-green);
        }

        .fq-hero p {
          color: var(--fq-muted);
          font-size: 0.98rem;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        /* Search */
        .fq-search-wrap {
          position: relative;
          max-width: 460px;
          margin: 0 auto;
        }

        .fq-search-wrap i {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--fq-muted);
          font-size: 15px;
          pointer-events: none;
        }

        .fq-search-wrap input {
          width: 100%;
          background: var(--fq-surface);
          border: 1px solid var(--fq-border);
          border-radius: 12px;
          color: var(--fq-text);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          padding: 14px 16px 14px 44px;
          outline: none;
          transition: border-color .2s, background .2s;
        }

        .fq-search-wrap input::placeholder {
          color: #3d5a52;
        }

        .fq-search-wrap input:focus {
          border-color: var(--fq-green);
          background: rgba(0, 166, 103, 0.06);
        }

        /* ── LAYOUT ── */
        .fq-body {
          max-width: 780px;
          margin: 0 auto;
          padding: 52px 24px 0;
        }

        .fq-count {
          font-size: 0.8rem;
          color: var(--fq-muted);
          margin-bottom: 18px;
          font-family: 'DM Sans', sans-serif;
        }

        .fq-count strong {
          color: var(--fq-green);
          font-weight: 600;
        }

        /* ── FAQ CARD / ACCORDION ── */
        .faq-lists {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-card {
          background: var(--fq-surface);
          border: 1px solid var(--fq-border);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color .2s, background .2s;
        }

        .faq-card:hover {
          border-color: var(--fq-border-h);
        }

        .faq-card.fq-hidden {
          display: none;
        }

        .faq-title {
          margin: 0;
        }

        .faq-title a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 22px;
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--fq-text);
          text-decoration: none;
          cursor: pointer;
        }

        .faq-title a .fq-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: var(--fq-green-d);
          border: 1px solid var(--fq-border-h);
          color: var(--fq-green);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          transition: transform .25s, background .2s, color .2s;
        }

        .faq-title a:not(.collapsed) .fq-icon {
          background: var(--fq-green);
          color: #fff;
          transform: rotate(45deg);
        }

        .card-collapse .faq-content {
          padding: 0 22px 20px;
          border-top: 1px solid var(--fq-border);
          margin-top: -1px;
          padding-top: 14px;
        }

        .card-collapse .faq-content p {
          color: var(--fq-muted);
          font-size: 0.88rem;
          line-height: 1.7;
          margin: 0;
        }

        .fq-empty {
          display: none;
          text-align: center;
          padding: 40px 20px;
          color: var(--fq-muted);
          font-size: 0.9rem;
          border: 1px dashed var(--fq-border);
          border-radius: 14px;
        }

        .fq-empty.show {
          display: block;
        }

        /* ── ASK CTA BAND ── */
        .fq-cta {
          max-width: 780px;
          margin: 44px auto 0;
          padding: 0 24px;
        }

        .fq-cta-card {
          background: linear-gradient(135deg, var(--fq-surface), var(--fq-surface2));
          border: 1px solid var(--fq-border);
          border-radius: 18px;
          padding: 36px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          position: relative;
          overflow: hidden;
        }

        .fq-cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--fq-green), transparent);
        }

        .fq-cta-text h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          color: #fff;
          margin: 0 0 6px;
        }

        .fq-cta-text p {
          color: var(--fq-muted);
          font-size: 0.86rem;
          margin: 0;
          max-width: 420px;
          line-height: 1.6;
        }

        .fq-btn-ask {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--fq-green);
          border: 1px solid var(--fq-green);
          color: #fff;
          border-radius: 10px;
          padding: 12px 24px;
          font-family: 'Syne', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: background .2s, transform .15s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .fq-btn-ask:hover {
          background: #00c07a;
          border-color: #00c07a;
          transform: translateY(-2px);
        }

        .fq-btn-ask:disabled {
          opacity: .6;
          cursor: not-allowed;
          transform: none;
        }

        /* ── ASK MODAL ── */
        .fq-modal .modal-content {
          background: var(--fq-surface);
          border: 1px solid var(--fq-border);
          border-radius: 18px;
          color: var(--fq-text);
        }

        .fq-modal .modal-header {
          border-bottom: 1px solid var(--fq-border);
          padding: 22px 26px;
        }

        .fq-modal .modal-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #fff;
        }

        .fq-modal .modal-title small {
          display: block;
          font-size: 0.75rem;
          color: var(--fq-muted);
          font-weight: 400;
          margin-top: 4px;
        }

        .fq-modal .btn-close {
          filter: invert(1) brightness(0.6);
        }

        .fq-modal .modal-body {
          padding: 26px;
        }

        .fq-modal .modal-footer {
          border-top: 1px solid var(--fq-border);
          padding: 18px 26px;
        }

        .fq-form-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--fq-text);
          margin-bottom: 6px;
          display: block;
        }

        .fq-form-control {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--fq-border);
          border-radius: 10px;
          color: var(--fq-text);
          padding: 11px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          outline: none;
          transition: border-color .2s;
        }

        .fq-form-control:focus {
          border-color: var(--fq-border-h);
          box-shadow: 0 0 0 3px var(--fq-green-d);
        }

        .fq-form-control::placeholder {
          color: #3d5a52;
        }

        textarea.fq-form-control {
          resize: vertical;
          min-height: 100px;
        }

        .fq-form-error {
          color: #ff8a8a;
          font-size: 0.75rem;
          margin-top: 5px;
        }

        .fq-btn-outline {
          background: transparent;
          color: var(--fq-muted);
          border: 1px solid var(--fq-border);
          border-radius: 10px;
          padding: 10px 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all .2s;
        }

        .fq-btn-outline:hover {
          color: #fff;
          border-color: var(--fq-border-h);
        }

        @media (max-width: 576px) {
          .fq-cta-card {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }

          .fq-btn-ask {
            width: 100%;
            justify-content: center;
          }
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --fq-bg: #f6faf8;
          --fq-surface: #ffffff;
          --fq-surface2: #eef4f1;
          --fq-green: #00a667;
          --fq-green-d: rgba(0, 166, 103, 0.08);
          --fq-green-b: rgba(0, 166, 103, 0.18);
          --fq-text: #10201b;
          --fq-muted: #5b7a70;
          --fq-border: rgba(0, 100, 60, 0.12);
          --fq-border-h: rgba(0, 100, 60, 0.3);
        }

        /* Hero glow — soften so it doesn't look like a smear on white */
        [data-h-theme="light"] .fq-hero-glow {
          background: radial-gradient(circle, rgba(0, 166, 103, 0.1), transparent 70%);
        }

        /* Headings hardcoded to #fff need to flip dark */
        [data-h-theme="light"] .fq-hero h1,
        [data-h-theme="light"] .fq-cta-text h3,
        [data-h-theme="light"] .fq-modal .modal-title {
          color: #10201b;
        }

        /* Search + FAQ answer form placeholder was hardcoded to a dark-theme-only hex */
        [data-h-theme="light"] .fq-search-wrap input::placeholder,
        [data-h-theme="light"] .fq-form-control::placeholder {
          color: #a9c2b8;
        }

        /* Modal close icon: dark theme inverts it to white, revert on light */
        [data-h-theme="light"] .fq-modal .btn-close {
          filter: none;
        }

        /* fq-btn-outline hover color hardcoded to #fff */
        [data-h-theme="light"] .fq-btn-outline:hover {
          color: #10201b;
        }

        /* Form control background was a flat white-on-black translucent fill;
           on a white surface it needs to go the other direction to stay visible */
        [data-h-theme="light"] .fq-form-control {
          background: rgba(0, 100, 60, 0.04);
        }
      `}),e.jsxs("div",{className:"fq-page",children:[e.jsxs("section",{className:"fq-hero",children:[e.jsx("div",{className:"fq-hero-glow"}),e.jsxs("div",{className:"fq-hero-inner",children:[e.jsxs("span",{className:"fq-eyebrow",children:[e.jsx("i",{className:"ti ti-help-circle"})," Support"]}),e.jsxs("h1",{children:["Frequently asked ",e.jsx("span",{children:"questions"})]}),e.jsx("p",{children:"Everything you need to know before getting started. Can't find what you're looking for? Ask us directly below."}),e.jsxs("div",{className:"fq-search-wrap",children:[e.jsx("i",{className:"ti ti-search"}),e.jsx("input",{type:"text",id:"fqSearchInput",placeholder:"Search questions...",autoComplete:"off",value:n,onChange:a=>l(a.target.value)})]})]})]}),e.jsxs("div",{className:"fq-body",children:[e.jsx("p",{className:"fq-count",id:"fqCount",children:n?e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:m.length})," of ",f," question",f===1?"":"s"]}):e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:f})," question",f===1?"":"s"]})}),e.jsxs("div",{className:"faq-wrapper",children:[e.jsx("div",{className:"faq-lists",id:"fqList",children:r.map((a,o)=>{const i=p===o,x=m.includes(a);return e.jsxs("div",{className:`faq-card${x?"":" fq-hidden"}`,children:[e.jsx("h4",{className:"faq-title",children:e.jsxs("a",{className:i?"":"collapsed",href:`#faq${o}`,"aria-expanded":i,"aria-controls":`faq${o}`,onClick:u=>{u.preventDefault(),d(i?null:o)},children:[e.jsx("span",{children:a.question}),e.jsx("span",{className:"fq-icon",children:e.jsx("i",{className:"ti ti-plus"})})]})}),i&&e.jsx("div",{id:`faq${o}`,className:"card-collapse",children:e.jsx("div",{className:"faq-content",children:e.jsx("p",{dangerouslySetInnerHTML:{__html:j(a.answer)}})})})]},a.id??o)})}),e.jsx("div",{className:`fq-empty${m.length===0?" show":""}`,id:"fqEmpty",children:"No questions match your search. Try a different term, or ask us directly below."})]}),e.jsx("div",{className:"fq-cta",children:e.jsxs("div",{className:"fq-cta-card",children:[e.jsxs("div",{className:"fq-cta-text",children:[e.jsx("h3",{children:"Still have questions?"}),e.jsx("p",{children:"Can't find the answer you're looking for? Send us your question and our team will get back to you."})]}),e.jsxs("button",{type:"button",className:"fq-btn-ask",onClick:()=>s(!0),children:[e.jsx("i",{className:"ti ti-message-circle-2"})," Ask a Question"]})]})})]})]}),h&&e.jsx(k,{title:"Ask a question",subtitle:"We'll get back to you by email",onClose:()=>s(!1),formId:"fqAskForm",onSubmit:g,footer:e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"fq-btn-outline",onClick:()=>s(!1),children:"Cancel"}),e.jsxs("button",{type:"submit",className:"fq-btn-ask",disabled:t.processing,children:[e.jsx("i",{className:"ti ti-send"})," ",t.processing?"Sending…":"Submit Question"]})]}),children:e.jsx("div",{className:"row g-3",children:e.jsxs("div",{className:"col-12",children:[e.jsxs("label",{className:"fq-form-label",children:["Your Question ",e.jsx("span",{style:{color:"var(--fq-green)"},children:"*"})]}),e.jsx("textarea",{className:"fq-form-control",rows:4,placeholder:"Type your question here...",value:t.data.question,onChange:a=>t.setData("question",a.target.value),required:!0}),t.errors.question&&e.jsx("div",{className:"fq-form-error",children:t.errors.question})]})})})]})}N.layout=r=>e.jsx(v,{children:r,title:"FAQ - Future Connect"});export{N as default};
