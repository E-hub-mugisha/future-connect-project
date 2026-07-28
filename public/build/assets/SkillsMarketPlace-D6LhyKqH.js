import{r as c,u as C,j as e,H as q,L as t,R as z,a as M}from"./app-ClS8wKza.js";import{G as A}from"./GuestLayout-CXbJ8NXm.js";function R({categories:l=[]}){const[f,v]=c.useState(null),[o,m]=c.useState(0),[T,d]=c.useState(!1),[I,b]=c.useState(!1),[h,u]=c.useState({keyword:"",category:""}),{data:n,setData:i,post:j,processing:N,errors:r,reset:y}=C({name:"",address:"",phone:"",email:"",language:"",category_id:"",description:"",image:null}),p=4;function w(a){v(s=>s===a?null:a)}function g(){m(a=>Math.min(a+1,p-1))}function x(){m(a=>Math.max(a-1,0))}function k(a){a.preventDefault(),M.get(route("talent.search"),h),d(!1)}function S(a){a.preventDefault(),j(route("talent.register"),{forceFormData:!0,onSuccess:()=>{y(),m(0),b(!1)}})}return e.jsxs(e.Fragment,{children:[e.jsx(q,{title:"Skilled Marketplace – Discover Skilled Professionals"}),e.jsx("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
        :root {
          --bg:        #0e1618;
          --bg2:       #131d20;
          --bg3:       #18242a;
          --border:    rgba(255,255,255,0.07);
          --green:     #48d597;
          --green-dim: rgba(0,166,103,0.15);
          --green-glow:rgba(0,166,103,0.35);
          --text:      #e8eef0;
          --muted:     #7a9199;
          --white:     #ffffff;
          --font-head: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
          --radius:    12px;
          --radius-lg: 20px;
          --transition:.25s ease;
        }

        *, *::before, *::after { box-sizing: border-box; }

        body {
          background: var(--bg);
          font-family: var(--font-body);
          color: var(--text);
        }

        /* ─── HERO ─── */
        #hero-section {
          position: relative;
          background: var(--bg);
          padding: 80px 0 60px;
          overflow: hidden;
        }

        #hero-section::before {
          content: '';
          position: absolute;
          top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(0,166,103,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green-dim);
          border: 1px solid rgba(0,166,103,0.3);
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 500;
          color: var(--green);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-eyebrow span {
          width: 6px; height: 6px;
          background: var(--green);
          border-radius: 50%;
          display: inline-block;
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(1.5); }
        }

        .hero-headline {
          font-family: var(--font-head);
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.1;
          color: var(--white);
          margin-bottom: 18px;
          letter-spacing: -0.03em;
        }

        .hero-headline .accent {
          color: var(--green);
          position: relative;
          display: inline-block;
        }

        .hero-headline .accent::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--green), transparent);
          border-radius: 2px;
        }

        .hero-sub {
          font-size: 1.05rem;
          color: var(--muted);
          max-width: 480px;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        /* ─── BUTTONS ─── */
        .btn-green {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green);
          color: #fff;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 12px 24px;
          border-radius: var(--radius);
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition);
          box-shadow: 0 0 0 0 var(--green-glow);
        }

        .btn-green:hover {
          background: #00bf76;
          color: #fff;
          box-shadow: 0 0 20px var(--green-glow);
          transform: translateY(-2px);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--text);
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.9rem;
          padding: 12px 24px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition);
        }

        .btn-outline:hover {
          border-color: var(--green);
          color: var(--green);
          background: var(--green-dim);
          transform: translateY(-2px);
        }

        /* ─── HERO CARDS ─── */
        .hero-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .hero-card {
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
          position: relative;
          overflow: hidden;
          transition: var(--transition);
        }

        .hero-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--green), transparent);
          opacity: 0;
          transition: opacity var(--transition);
        }

        .hero-card:hover {
          border-color: rgba(0,166,103,0.3);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }

        .hero-card:hover::before { opacity: 1; }

        .hero-card-icon {
          width: 42px; height: 42px;
          background: var(--green-dim);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
          color: var(--green);
          font-size: 18px;
        }

        .hero-card h5 {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 6px;
        }

        .hero-card p {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.6;
          margin: 0 0 16px;
        }

        .hero-card .card-link {
          font-size: 0.83rem;
          color: var(--green);
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap var(--transition);
        }

        .hero-card .card-link:hover { gap: 10px; }

        /* ─── STATS BAR ─── */
        .stats-bar {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 24px 0;
        }

        .stat-item {
          text-align: center;
          padding: 0 20px;
          border-right: 1px solid var(--border);
        }

        .stat-item:last-child { border-right: none; }

        .stat-num {
          font-family: var(--font-head);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--green);
          display: block;
        }

        .stat-label {
          font-size: 0.78rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ─── SECTION COMMON ─── */
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--green);
          margin-bottom: 10px;
        }

        .section-label::before {
          content: '';
          display: inline-block;
          width: 20px; height: 2px;
          background: var(--green);
          border-radius: 1px;
        }

        .section-title {
          font-family: var(--font-head);
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .section-sub {
          color: var(--muted);
          font-size: 0.95rem;
          max-width: 500px;
        }

        /* ─── CATEGORIES ─── */
        #categories-section {
          padding: 80px 0;
          background: var(--bg);
        }

        .cat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 14px;
          margin-top: 40px;
        }

        .cat-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 18px;
          text-decoration: none;
          display: block;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .cat-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0;
          background: var(--green-dim);
          transition: height var(--transition);
        }

        .cat-card:hover {
          border-color: rgba(0,166,103,0.4);
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }

        .cat-card:hover::after { height: 100%; }

        .cat-card:hover .cat-icon { background: var(--green); color: #fff; }
        .cat-card:hover .cat-name { color: var(--green); }

        .cat-icon {
          width: 36px; height: 36px;
          background: var(--green-dim);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: var(--green);
          font-size: 15px;
          margin-bottom: 12px;
          position: relative; z-index: 1;
          transition: var(--transition);
        }

        .cat-name {
          font-family: var(--font-head);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 4px;
          position: relative; z-index: 1;
          transition: var(--transition);
        }

        .cat-count {
          font-size: 0.75rem;
          color: var(--muted);
          position: relative; z-index: 1;
        }

        /* ─── CTA BAND ─── */
        #cta-band {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        #cta-band::before {
          content: '';
          position: absolute;
          left: -100px; top: 50%;
          transform: translateY(-50%);
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0,166,103,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-number {
          font-family: var(--font-head);
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          color: var(--green);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .cta-plus { color: var(--muted); }

        /* ─── FAQ ─── */
        #faq-section {
          padding: 80px 0;
          background: var(--bg);
        }

        .faq-item {
          border: 1px solid var(--border);
          border-radius: var(--radius);
          margin-bottom: 10px;
          overflow: hidden;
          transition: var(--transition);
        }

        .faq-item:hover { border-color: rgba(0,166,103,0.3); }
        .faq-item.open  { border-color: rgba(0,166,103,0.4); }

        .faq-q {
          width: 100%;
          background: var(--bg2);
          border: none;
          padding: 18px 22px;
          text-align: left;
          color: var(--text);
          font-family: var(--font-body);
          font-size: 0.92rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: var(--transition);
        }

        .faq-q:hover { color: var(--white); }

        .faq-icon {
          flex-shrink: 0;
          width: 22px; height: 22px;
          background: var(--green-dim);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--green);
          font-size: 12px;
          transition: transform var(--transition);
        }

        .faq-item.open .faq-icon { transform: rotate(45deg); background: var(--green); color: #fff; }

        .faq-a {
          background: var(--bg3);
          padding: 0 22px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.25s ease;
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.7;
        }

        .faq-item.open .faq-a { max-height: 200px; padding: 16px 22px; }

        /* ─── MODALS ─── */
        .modal-content {
          background: var(--bg2) !important;
          border: 1px solid var(--border) !important;
          border-radius: var(--radius-lg) !important;
        }

        .modal-header {
          background: var(--bg3);
          border-bottom: 1px solid var(--border);
          padding: 20px 28px;
        }

        .modal-title {
          font-family: var(--font-head);
          color: var(--white);
        }

        .modal-body { padding: 28px; }

        /* Form controls */
        .form-control, .form-select {
          background: var(--bg3) !important;
          border: 1px solid var(--border) !important;
          color: var(--text) !important;
          border-radius: var(--radius) !important;
          padding: 11px 16px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: border-color var(--transition);
        }

        .form-control::placeholder { color: var(--muted); }

        .form-control:focus, .form-select:focus {
          border-color: var(--green) !important;
          box-shadow: 0 0 0 3px var(--green-dim) !important;
          outline: none;
        }

        .form-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 6px;
        }

        /* Step wizard */
        .step-indicator {
          display: flex;
          align-items: center;
          gap: 0;
          margin-bottom: 28px;
        }

        .step-dot {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: var(--bg3);
          border: 2px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: var(--muted);
          flex-shrink: 0;
          transition: var(--transition);
        }

        .step-dot.active {
          background: var(--green);
          border-color: var(--green);
          color: #fff;
          box-shadow: 0 0 12px var(--green-glow);
        }

        .step-dot.done {
          background: var(--green-dim);
          border-color: var(--green);
          color: var(--green);
        }

        .step-line {
          flex: 1;
          height: 2px;
          background: var(--border);
          transition: background var(--transition);
        }

        .step-line.done { background: var(--green); }

        .step-section { display: none; }
        .step-section.active {
          display: block;
          animation: fadeUp .3s ease;
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .step-title {
          font-family: var(--font-head);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 4px;
        }

        .step-sub {
          font-size: 0.83rem;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .info-note {
          background: var(--green-dim);
          border-left: 3px solid var(--green);
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.83rem;
          color: var(--green);
          margin-bottom: 20px;
        }

        /* Carousel (mobile) */
        .m-hero-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px 24px;
          text-align: center;
        }

        .m-hero-card h4 {
          font-family: var(--font-head);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 10px;
        }

        .m-hero-card p {
          color: var(--muted);
          font-size: 0.9rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .carousel-indicators [data-bs-target] {
          background-color: var(--green);
          border-radius: 2px;
          width: 18px; height: 3px;
          border: none;
          opacity: 0.4;
          transition: opacity var(--transition), width var(--transition);
        }

        .carousel-indicators .active {
          opacity: 1;
          width: 28px;
        }

        /* mobile category strip */
        .cat-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: none;
        }
        .cat-scroll::-webkit-scrollbar { display: none; }

        .cat-chip {
          flex-shrink: 0;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 50px;
          padding: 8px 16px;
          font-size: 0.8rem;
          color: var(--text);
          text-decoration: none;
          white-space: nowrap;
          transition: var(--transition);
        }

        .cat-chip:hover {
          border-color: var(--green);
          color: var(--green);
        }

        /* Popular Section */
        .pop-category {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 22px 18px;
          text-align: center;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .pop-category::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0;
          background: var(--green-dim);
          transition: height var(--transition);
          z-index: 0;
        }

        .pop-category:hover {
          border-color: rgba(0,166,103,0.4);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .pop-category:hover::before { height: 100%; }

        .pop-category * { position: relative; z-index: 1; }

        .pop-category span {
          width: 44px; height: 44px;
          background: var(--green-dim);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 14px;
          color: var(--green);
          font-size: 18px;
          transition: var(--transition);
        }

        .pop-category:hover span { background: var(--green); color: #fff; }

        .pop-category h6 a {
          font-family: var(--font-head);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--white);
          text-decoration: none;
          transition: var(--transition);
        }

        .pop-category:hover h6 a { color: var(--green); }

        .pop-category p {
          font-size: 0.75rem;
          color: var(--muted);
          margin: 4px 0 12px;
        }

        .slide-line-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--green);
          text-decoration: none;
          font-weight: 600;
          transition: gap var(--transition);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .slide-line-btn:hover { gap: 10px; color: var(--green); }

        /* ─── DIVIDER ─── */
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
          margin: 0;
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg:         #f6faf8;
          --bg2:        #ffffff;
          --bg3:        #eef4f1;
          --border:     rgba(0, 100, 60, 0.1);
          --green:      #00a667;
          --green-dim:  rgba(0, 166, 103, 0.08);
          --green-glow: rgba(0, 166, 103, 0.2);
          --text:       #10201b;
          --muted:      #5b7a70;
          --white:      #10201b;
        }

        [data-h-theme="light"] #hero-section::before {
          background: radial-gradient(circle, rgba(0,166,103,0.08) 0%, transparent 70%);
        }

        [data-h-theme="light"] #cta-band::before {
          background: radial-gradient(circle, rgba(0,166,103,0.06) 0%, transparent 70%);
        }

        [data-h-theme="light"] .btn-close-white {
          filter: none;
        }
      `}),e.jsx("section",{id:"hero-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("div",{className:"hero-eyebrow",children:[e.jsx("span",{})," Africa's Top Skills Marketplace"]}),e.jsxs("h1",{className:"hero-headline",children:["Your gateway to ",e.jsx("span",{className:"accent",children:"skills"}),", opportunities & growth."]}),e.jsx("p",{className:"hero-sub",children:"Connect with verified professionals, showcase your expertise, and build the career you deserve — all in one platform."}),e.jsxs("div",{className:"hero-cta-group",children:[e.jsxs("a",{className:"btn-green",role:"button","data-bs-toggle":"modal","data-bs-target":"#searchModal",onClick:()=>d(!0),children:[e.jsx("i",{className:"ti ti-search"})," Find Skills"]}),e.jsxs(t,{className:"btn-outline",href:route("user.register_skills"),children:[e.jsx("i",{className:"ti ti-star"})," Register your Skills"]}),e.jsxs(t,{className:"btn-outline",href:route("talent.connections-room"),children:[e.jsx("i",{className:"ti ti-users"})," Connection Room"]})]})]}),e.jsx("div",{className:"col-lg-6 d-none d-lg-block",children:e.jsxs("div",{className:"hero-cards",children:[e.jsxs("div",{className:"hero-card",children:[e.jsx("div",{className:"hero-card-icon",children:e.jsx("i",{className:"ti ti-speakerphone"})}),e.jsx("h5",{children:"Promote Your Skills"}),e.jsx("p",{children:"Boost your profile and reach 3× more employers. Get verified and feature your story on our homepage."}),e.jsxs("a",{className:"card-link",role:"button","data-bs-toggle":"modal","data-bs-target":"#searchModal",onClick:()=>d(!0),children:["Search skilled people ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-6",children:e.jsxs("div",{className:"hero-card",children:[e.jsx("div",{className:"hero-card-icon",children:e.jsx("i",{className:"ti ti-badge"})}),e.jsx("h5",{children:"Join Our Skill Hub"}),e.jsx("p",{children:"Showcase skills, get verified, and connect with global clients."}),e.jsxs(t,{className:"card-link",href:route("user.register_skills"),children:["Register now ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})}),e.jsx("div",{className:"col-6",children:e.jsxs("div",{className:"hero-card",children:[e.jsx("div",{className:"hero-card-icon",children:e.jsx("i",{className:"ti ti-world"})}),e.jsx("h5",{children:"Expand Network"}),e.jsx("p",{children:"Join groups, attend virtual events, and build connections that matter."}),e.jsxs(t,{className:"card-link",href:route("talent.connections-room"),children:["Connection Room ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})})]})]})}),e.jsxs("div",{className:"col-12 d-lg-none",children:[e.jsxs("div",{id:"heroCarousel",className:"carousel slide","data-bs-ride":"carousel","data-bs-interval":"4500",children:[e.jsxs("div",{className:"carousel-indicators",style:{bottom:"-30px"},children:[e.jsx("button",{type:"button","data-bs-target":"#heroCarousel","data-bs-slide-to":"0",className:"active"}),e.jsx("button",{type:"button","data-bs-target":"#heroCarousel","data-bs-slide-to":"1"}),e.jsx("button",{type:"button","data-bs-target":"#heroCarousel","data-bs-slide-to":"2"})]}),e.jsxs("div",{className:"carousel-inner",children:[e.jsx("div",{className:"carousel-item active",children:e.jsxs("div",{className:"m-hero-card",children:[e.jsx("div",{className:"hero-card-icon mx-auto mb-3",children:e.jsx("i",{className:"ti ti-speakerphone"})}),e.jsx("h4",{children:"Promote Your Skills"}),e.jsx("p",{children:"Stand out! Boost your profile and reach 3× more employers. Get verified today."}),e.jsxs("a",{className:"btn-green mx-auto",role:"button","data-bs-toggle":"modal","data-bs-target":"#searchModal",onClick:()=>d(!0),children:[e.jsx("i",{className:"ti ti-search"})," Search Talent"]})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"m-hero-card",children:[e.jsx("div",{className:"hero-card-icon mx-auto mb-3",children:e.jsx("i",{className:"ti ti-badge"})}),e.jsx("h4",{children:"Join Our Skill Hub"}),e.jsx("p",{children:"Showcase your skills, get verified, and connect with clients globally."}),e.jsx(t,{className:"btn-green mx-auto",href:route("user.register_skills"),children:"Register Skills"})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"m-hero-card",children:[e.jsx("div",{className:"hero-card-icon mx-auto mb-3",children:e.jsx("i",{className:"ti ti-world"})}),e.jsx("h4",{children:"Expand Your Network"}),e.jsx("p",{children:"Connect with industry professionals, mentors, and peers across Africa."}),e.jsx(t,{className:"btn-green mx-auto",href:route("register"),children:"Join Community"})]})})]})]}),e.jsx("div",{style:{height:"36px"}})]})]})})}),e.jsx("div",{className:"stats-bar",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-0",children:[e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-item",children:[e.jsxs("span",{className:"stat-num",children:["74K",e.jsx("span",{style:{color:"var(--green)"},children:"+"})]}),e.jsx("span",{className:"stat-label",children:"Skilled People"})]})}),e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-item",children:[e.jsxs("span",{className:"stat-num",children:["120",e.jsx("span",{style:{color:"var(--green)"},children:"+"})]}),e.jsx("span",{className:"stat-label",children:"Categories"})]})}),e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-item",children:[e.jsxs("span",{className:"stat-num",children:["98",e.jsx("span",{style:{color:"var(--green)"},children:"%"})]}),e.jsx("span",{className:"stat-label",children:"Satisfaction Rate"})]})}),e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-num",children:"30+"}),e.jsx("span",{className:"stat-label",children:"Countries"})]})})]})})}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"container d-lg-none py-5",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("div",{className:"section-label",children:"Browse"}),e.jsx("div",{className:"section-title",children:"Trending Categories"})]}),e.jsx("div",{className:"cat-scroll",children:l.map(a=>e.jsx(t,{href:route("user.talents.category",a.slug),className:"cat-chip",children:a.name},a.id))})]}),e.jsx("section",{id:"categories-section",className:"d-none d-lg-block",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"d-flex align-items-end justify-content-between mb-8 flex-wrap gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"section-label",children:"Explore"}),e.jsx("div",{className:"section-title",children:"Trending Categories of Skilled People"}),e.jsx("p",{className:"section-sub",children:"Discover inspiring stories, impactful skills, and creative people across Africa"})]})}),e.jsx("div",{className:"row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mt-4",children:l.map(a=>e.jsx("div",{className:"col d-flex",children:e.jsxs("div",{className:"pop-category flex-fill",children:[e.jsx("span",{children:e.jsx("i",{className:"ti ti-speakerphone"})}),e.jsx("h6",{className:"mb-1",children:e.jsx(t,{href:route("user.talents.category",a.slug),children:a.name})}),e.jsxs("p",{children:[a.talents_count??0," skills"]}),e.jsxs(t,{href:route("user.talents.category",a.slug),className:"slide-line-btn",children:[e.jsx("i",{className:"feather-arrow-right"})," View Skills"]})]})},a.id))})]})}),e.jsx("div",{className:"section-divider"}),e.jsx("section",{id:"cta-band",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-md-8",children:[e.jsx("div",{className:"section-label",children:"Join Today"}),e.jsx("div",{className:"section-title",children:"Want to Showcase Your Skills?"}),e.jsx("p",{className:"section-sub mt-2",children:"Over 74K skilled people on the platform, available today for employers and clients. Join our community and take the first step towards your dream career."})]}),e.jsx("div",{className:"col-md-4 text-md-end",children:e.jsxs(t,{role:"button",href:route("user.register_skills"),className:"btn-green",style:{fontSize:"1rem",padding:"14px 32px"},children:["Register Your Skills ",e.jsx("i",{className:"ti ti-chevron-right"})]})})]})})}),e.jsx("div",{className:"section-divider"}),e.jsx("section",{id:"faq-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-lg-4",children:[e.jsx("div",{className:"section-label",children:"FAQ"}),e.jsx("div",{className:"section-title",children:"Skilled People Frequently Asked Questions"}),e.jsx("p",{className:"section-sub mt-3",children:"Don't see your question? We're here to help you connect with the right skilled people."}),e.jsxs(t,{href:route("user.contact"),className:"btn-green mt-4 d-inline-flex",children:["Ask a Question ",e.jsx("i",{className:"ti ti-arrow-badge-right ms-1"})]})]}),e.jsx("div",{className:"col-lg-8",children:D.map(a=>e.jsxs("div",{className:`faq-item${f===a.id?" open":""}`,id:a.id,children:[e.jsxs("button",{className:"faq-q",onClick:()=>w(a.id),children:[a.question,e.jsx("span",{className:"faq-icon",children:e.jsx("i",{className:"ti ti-plus"})})]}),e.jsx("div",{className:"faq-a",children:a.answer})]},a.id))})]})})}),e.jsx("div",{className:"modal fade",id:"searchModal",tabIndex:"-1","aria-labelledby":"searchModalLabel","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title",id:"searchModalLabel",children:[e.jsx("i",{className:"ti ti-search me-2",style:{color:"var(--green)"}}),"Find Your Skills"]}),e.jsx("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal",onClick:()=>d(!1)})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("form",{onSubmit:k,className:"row g-4",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Keyword"}),e.jsx("input",{type:"text",name:"keyword",className:"form-control",placeholder:"Search talents, skills, or names...",value:h.keyword,onChange:a=>u(s=>({...s,keyword:a.target.value}))})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Category"}),e.jsxs("select",{name:"category",className:"form-select",value:h.category,onChange:a=>u(s=>({...s,category:a.target.value})),children:[e.jsx("option",{value:"",children:"All Categories"}),l.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]}),e.jsxs("div",{className:"col-12 d-flex justify-content-end gap-3",children:[e.jsx("button",{type:"button",className:"btn-outline","data-bs-dismiss":"modal",onClick:()=>d(!1),children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-green",children:[e.jsx("i",{className:"ti ti-search"})," Search"]})]})]})})]})})}),e.jsx("div",{className:"modal fade",id:"talentModal",tabIndex:"-1","aria-labelledby":"talentModalLabel","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-lg modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",id:"talentModalLabel",children:"Skill Registration"}),e.jsx("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal",onClick:()=>b(!1)})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("div",{className:"step-indicator",children:Array.from({length:p}).map((a,s)=>e.jsxs(z.Fragment,{children:[e.jsx("div",{className:`step-dot${o===s?" active":""}${o>s?" done":""}`,children:s+1}),s<p-1&&e.jsx("div",{className:`step-line${o>s?" done":""}`})]},s))}),e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:`step-section${o===0?" active":""}`,children:[e.jsx("div",{className:"step-title",children:"Personal Info"}),e.jsx("div",{className:"step-sub",children:"Fill your basic information for profile setup."}),e.jsx("div",{className:"info-note",children:"This information will appear on your public profile."}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Full Name"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g. John Doe",required:!0,value:n.name,onChange:a=>i("name",a.target.value)}),r.name&&e.jsx("div",{className:"text-danger small mt-1",children:r.name})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Address"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g. Kigali, Rwanda",required:!0,value:n.address,onChange:a=>i("address",a.target.value)}),r.address&&e.jsx("div",{className:"text-danger small mt-1",children:r.address})]})]}),e.jsx("div",{className:"text-end mt-4",children:e.jsxs("button",{type:"button",className:"btn-green",onClick:g,children:["Next ",e.jsx("i",{className:"ti ti-arrow-right ms-1"})]})})]}),e.jsxs("div",{className:`step-section${o===1?" active":""}`,children:[e.jsx("div",{className:"step-title",children:"Contact Info"}),e.jsx("div",{className:"step-sub",children:"Provide your contact details for clients to reach you."}),e.jsx("div",{className:"info-note",children:"Your email will not be shared publicly."}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Phone"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g. +250 788 123 456",required:!0,value:n.phone,onChange:a=>i("phone",a.target.value)}),r.phone&&e.jsx("div",{className:"text-danger small mt-1",children:r.phone})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsx("input",{type:"email",className:"form-control",placeholder:"e.g. john@example.com",required:!0,value:n.email,onChange:a=>i("email",a.target.value)}),r.email&&e.jsx("div",{className:"text-danger small mt-1",children:r.email})]})]}),e.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[e.jsxs("button",{type:"button",className:"btn-outline",onClick:x,children:[e.jsx("i",{className:"ti ti-arrow-left me-1"})," Back"]}),e.jsxs("button",{type:"button",className:"btn-green",onClick:g,children:["Next ",e.jsx("i",{className:"ti ti-arrow-right ms-1"})]})]})]}),e.jsxs("div",{className:`step-section${o===2?" active":""}`,children:[e.jsx("div",{className:"step-title",children:"Skill Info"}),e.jsx("div",{className:"step-sub",children:"Define your skills and expertise to attract the right clients."}),e.jsx("div",{className:"info-note",children:"Be specific — detailed descriptions get 2× more views."}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Languages Spoken"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g. English, Kinyarwanda",required:!0,value:n.language,onChange:a=>i("language",a.target.value)}),r.language&&e.jsx("div",{className:"text-danger small mt-1",children:r.language})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Skill Category"}),e.jsxs("select",{className:"form-select",required:!0,value:n.category_id,onChange:a=>i("category_id",a.target.value),children:[e.jsx("option",{value:"",children:"Select Category"}),l.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]}),r.category_id&&e.jsx("div",{className:"text-danger small mt-1",children:r.category_id})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Description"}),e.jsx("textarea",{className:"form-control",rows:"4",placeholder:"Describe your talent and experience...",value:n.description,onChange:a=>i("description",a.target.value)}),r.description&&e.jsx("div",{className:"text-danger small mt-1",children:r.description})]})]}),e.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[e.jsxs("button",{type:"button",className:"btn-outline",onClick:x,children:[e.jsx("i",{className:"ti ti-arrow-left me-1"})," Back"]}),e.jsxs("button",{type:"button",className:"btn-green",onClick:g,children:["Next ",e.jsx("i",{className:"ti ti-arrow-right ms-1"})]})]})]}),e.jsxs("div",{className:`step-section${o===3?" active":""}`,children:[e.jsx("div",{className:"step-title",children:"Profile Photo"}),e.jsx("div",{className:"step-sub",children:"Add a professional photo to complete your profile."}),e.jsx("div",{className:"info-note",children:"A clear headshot increases profile views by 40%."}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Profile Image"}),e.jsx("input",{type:"file",className:"form-control",accept:"image/*",required:!0,onChange:a=>i("image",a.target.files[0])}),r.image&&e.jsx("div",{className:"text-danger small mt-1",children:r.image})]}),e.jsxs("div",{className:"form-check mt-3 mb-3",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",id:"terms",required:!0,style:{accentColor:"var(--green)"}}),e.jsxs("label",{className:"form-check-label",htmlFor:"terms",style:{fontSize:".88rem",color:"var(--muted)"},children:["I accept the ",e.jsx(t,{href:route("user.terms-condition"),style:{color:"var(--green)"},children:"Terms & Conditions"})]})]}),e.jsxs("div",{className:"d-flex justify-content-between mt-4",children:[e.jsxs("button",{type:"button",className:"btn-outline",onClick:x,children:[e.jsx("i",{className:"ti ti-arrow-left me-1"})," Back"]}),e.jsxs("button",{type:"submit",className:"btn-green",style:{background:"#48d597"},disabled:N,children:[e.jsx("i",{className:"ti ti-check me-1"})," Submit Registration"]})]})]})]})]})]})})})]})}const D=[{id:"faq-1",question:"How can I find the right skilled people for my project?",answer:"Our Skilled People Marketplace lets you filter professionals by skills, categories, experience, and location — making it easy to find the perfect match for your project."},{id:"faq-2",question:"How do I hire a skilled person?",answer:"After browsing profiles, you can contact skilled people directly through the platform or request a proposal. Our messaging system ensures smooth communication and collaboration."},{id:"faq-3",question:"Can skilled people showcase their past projects?",answer:"Yes! Skilled people can upload portfolios, project samples, and certifications to highlight their skills and achievements, helping you make informed hiring decisions."},{id:"faq-4",question:"Is there a verification process for talents?",answer:"We verify all registered talents to ensure authenticity. Verified talents are marked with a badge on their profiles, giving you full confidence in your collaboration."},{id:"faq-5",question:"How much does it cost to hire a talent?",answer:"Costs vary depending on the talent's experience, skills, and project scope. The platform provides transparent pricing or allows you to negotiate directly with the talent."}];R.layout=l=>e.jsx(A,{children:l,title:"Skills Marketplace",description:"Discover skilled people across Africa, showcase your expertise, and connect with opportunities in our Skills Marketplace."});export{R as default};
