import{r as i,u as g,j as e,H as m,L as a,a as x}from"./app-DQcVR1sC.js";import{G as f}from"./GuestLayout-AyS9Rfgz.js";function b({categories:o=[]}){const[d,c]=i.useState(null),[v,y]=i.useState(0),[j,s]=i.useState(!1),[w,k]=i.useState(!1),[n,l]=i.useState({keyword:"",category:""}),{data:N,setData:S,post:z,processing:q,errors:C,reset:A}=g({name:"",address:"",phone:"",email:"",language:"",category_id:"",description:"",image:null});function p(r){c(t=>t===r?null:r)}function h(r){r.preventDefault(),x.get(route("talent.search"),n),s(!1)}return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Skilled Marketplace – Get Discovered. Get Hired. Get Growing."}),e.jsx("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"}),e.jsx("style",{children:`
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

          /* Apple system font stack — pulls the native San Francisco / SF Pro
             font on Apple devices (see https://developer.apple.com/fonts/)
             and falls back to each platform's own system font elsewhere,
             so type always looks native and loads instantly with no
             external font request. */
          --font-head: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

          --radius:    12px;
          --radius-lg: 20px;
          --transition:.25s ease;
        }

        *, *::before, *::after { box-sizing: border-box; }

        body {
          background: var(--bg);
          font-family: var(--font-body);
          color: var(--text);
          -webkit-font-smoothing: antialiased;
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
          font-weight: 600;
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

        .hero-trust {
          margin-top: 18px;
          font-size: 0.8rem;
          color: var(--muted);
        }

        .hero-trust strong { color: var(--text); font-weight: 600; }

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

        /* ─── HERO ABOUT PANEL ─── */
        .hero-about {
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 32px;
          position: relative;
          overflow: hidden;
        }

        .hero-about::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--green), transparent);
        }

        .hero-about .section-label { margin-bottom: 14px; }

        .hero-about h4 {
          font-family: var(--font-head);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .hero-about p {
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.75;
          margin: 0;
        }

        .hero-about-list {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .hero-about-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.88rem;
          color: var(--text);
          line-height: 1.5;
        }

        .hero-about-list li strong { display: block; color: var(--white); font-weight: 700; margin-bottom: 2px; }

        .hero-about-icon {
          flex-shrink: 0;
          width: 30px; height: 30px;
          background: var(--green-dim);
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          color: var(--green);
          font-size: 14px;
        }

        .hero-about .card-link {
          margin-top: 24px;
          font-size: 0.85rem;
          color: var(--green);
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap var(--transition);
        }

        .hero-about .card-link:hover { gap: 10px; }

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

        /* ─── LEARNING CENTER ─── */
        #learning-section {
          padding: 80px 0;
          background: var(--bg);
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
          margin-bottom: 0;
          line-height: 1.6;
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

        /* Popular Section / Learning Center cards */
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
      `}),e.jsx("section",{id:"hero-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("div",{className:"hero-eyebrow",children:[e.jsx("span",{})," 74,000+ Skilled People, One Platform"]}),e.jsxs("h1",{className:"hero-headline",children:["Your skills deserve to be ",e.jsx("span",{className:"accent",children:"found"}),"."]}),e.jsx("p",{className:"hero-sub",children:"Stop sending your CV into the void. List your skills, get verified, and let clients across Africa come to you — free to join, live in minutes."}),e.jsxs("div",{className:"hero-cta-group",children:[e.jsxs(a,{className:"btn-green",href:route("user.register_skills"),children:[e.jsx("i",{className:"ti ti-star"})," Join Free — It Takes 3 Minutes"]}),e.jsxs("a",{className:"btn-outline",role:"button","data-bs-toggle":"modal","data-bs-target":"#searchModal",onClick:()=>s(!0),children:[e.jsx("i",{className:"ti ti-search"})," Search Skilled People"]})]}),e.jsxs("p",{className:"hero-trust",children:[e.jsx("strong",{children:"No listing fees. No waiting."})," Verified profiles, trusted by employers in 30+ countries — your next opportunity could be one profile away."]})]}),e.jsx("div",{className:"col-lg-6 d-none d-lg-block",children:e.jsxs("div",{className:"hero-about",children:[e.jsx("div",{className:"section-label",children:"About Us"}),e.jsx("h4",{children:"A home for Africa's skilled workforce"}),e.jsx("p",{children:"We built this platform because too many talented people were staying invisible — buried under CVs no one reads. Here, your skills speak first. Create a verified profile, showcase real work, and let employers come to you."}),e.jsxs("ul",{className:"hero-about-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"hero-about-icon",children:e.jsx("i",{className:"ti ti-users"})}),e.jsxs("span",{children:[e.jsx("strong",{children:"74,000+ members"}),"already growing their careers on the platform."]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"hero-about-icon",children:e.jsx("i",{className:"ti ti-shield-check"})}),e.jsxs("span",{children:[e.jsx("strong",{children:"Verified, trusted profiles"}),"so employers can hire with confidence."]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"hero-about-icon",children:e.jsx("i",{className:"ti ti-world"})}),e.jsxs("span",{children:[e.jsx("strong",{children:"Reach across 30+ countries"}),"— your skills, seen far beyond your city."]})]})]}),e.jsxs(a,{className:"card-link",href:route("user.register_skills"),children:["Join now, it's free ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})}),e.jsx("div",{className:"col-12 d-lg-none",children:e.jsxs("div",{className:"m-hero-card",children:[e.jsx("div",{className:"section-label",children:"About Us"}),e.jsx("h4",{children:"A home for Africa's skilled workforce"}),e.jsx("p",{children:"Too many talented people stay invisible — buried under CVs no one reads. Here, your skills speak first: create a verified profile, showcase real work, and let employers come to you across 30+ countries."}),e.jsxs(a,{className:"btn-green mt-3",href:route("user.register_skills"),children:[e.jsx("i",{className:"ti ti-star"})," Join Free — Get Discovered"]})]})})]})})}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"container d-lg-none py-5",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("div",{className:"section-label",children:"Find Your Fit"}),e.jsx("div",{className:"section-title",children:"Whatever your skill, there's a home for it here"})]}),e.jsx("div",{className:"cat-scroll",children:o.map(r=>e.jsx(a,{href:route("user.talents.category",r.slug),className:"cat-chip",children:r.name},r.id))})]}),e.jsx("section",{id:"categories-section",className:"d-none d-lg-block",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"d-flex align-items-end justify-content-between mb-8 flex-wrap gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"section-label",children:"Find Your Fit"}),e.jsx("div",{className:"section-title",children:"Whatever your skill, there's a home for it here"}),e.jsx("p",{className:"section-sub",children:"Browse 120+ categories of talented professionals — or claim yours and start getting discovered today."})]})}),e.jsx("div",{className:"row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mt-4",children:o.map(r=>e.jsx("div",{className:"col d-flex",children:e.jsxs("div",{className:"pop-category flex-fill",children:[e.jsx("span",{children:e.jsx("i",{className:"ti ti-speakerphone"})}),e.jsx("h6",{className:"mb-1",children:e.jsx(a,{href:route("user.talents.category",r.slug),children:r.name})}),e.jsxs("p",{children:[r.talents_count??0," skilled people ready to work"]}),e.jsxs(a,{href:route("user.talents.category",r.slug),className:"slide-line-btn",children:[e.jsx("i",{className:"feather-arrow-right"})," Browse Skills"]})]})},r.id))})]})}),e.jsx("div",{className:"section-divider"}),e.jsx("section",{id:"learning-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"d-flex align-items-end justify-content-between mb-4 flex-wrap gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"section-label",children:"Learning Center"}),e.jsx("div",{className:"section-title",children:"Don't have a listed skill yet? Go learn one."}),e.jsx("p",{className:"section-sub",children:"Free, practical courses to help you build real, hireable skills — then bring them straight to your profile and start getting discovered."})]}),e.jsxs(a,{href:route("user.courses"),className:"btn-outline",children:["Explore All Courses ",e.jsx("i",{className:"ti ti-arrow-right ms-1"})]})]}),e.jsxs("div",{className:"row row-gap-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 mt-4",children:[e.jsx("div",{className:"col d-flex",children:e.jsxs("div",{className:"pop-category flex-fill",children:[e.jsx("span",{children:e.jsx("i",{className:"ti ti-code"})}),e.jsx("h6",{className:"mb-1",children:e.jsx(a,{href:route("user.courses"),children:"Digital & Tech Skills"})}),e.jsx("p",{children:"Web design, coding basics, and freelancing fundamentals."}),e.jsxs(a,{href:route("user.courses"),className:"slide-line-btn",children:[e.jsx("i",{className:"feather-arrow-right"})," Start Learning"]})]})}),e.jsx("div",{className:"col d-flex",children:e.jsxs("div",{className:"pop-category flex-fill",children:[e.jsx("span",{children:e.jsx("i",{className:"ti ti-hammer"})}),e.jsx("h6",{className:"mb-1",children:e.jsx(a,{href:route("user.courses"),children:"Trades & Craftsmanship"})}),e.jsx("p",{children:"Hands-on courses in carpentry, tailoring, repairs, and more."}),e.jsxs(a,{href:route("user.courses"),className:"slide-line-btn",children:[e.jsx("i",{className:"feather-arrow-right"})," Start Learning"]})]})}),e.jsx("div",{className:"col d-flex",children:e.jsxs("div",{className:"pop-category flex-fill",children:[e.jsx("span",{children:e.jsx("i",{className:"ti ti-briefcase"})}),e.jsx("h6",{className:"mb-1",children:e.jsx(a,{href:route("user.courses"),children:"Business & Client Skills"})}),e.jsx("p",{children:"Pricing your work, pitching clients, and getting hired again."}),e.jsxs(a,{href:route("user.courses"),className:"slide-line-btn",children:[e.jsx("i",{className:"feather-arrow-right"})," Start Learning"]})]})}),e.jsx("div",{className:"col d-flex",children:e.jsxs("div",{className:"pop-category flex-fill",children:[e.jsx("span",{children:e.jsx("i",{className:"ti ti-certificate"})}),e.jsx("h6",{className:"mb-1",children:e.jsx(a,{href:route("user.courses"),children:"Get Certified"})}),e.jsx("p",{children:"Earn a certificate that shows on your verified profile."}),e.jsxs(a,{href:route("user.courses"),className:"slide-line-btn",children:[e.jsx("i",{className:"feather-arrow-right"})," Start Learning"]})]})})]}),e.jsx("div",{className:"info-note mt-4 d-inline-block",children:"Finish any course and we'll help you turn it into a skill listing — free, in minutes."})]})}),e.jsx("div",{className:"section-divider"}),e.jsx("section",{id:"cta-band",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-md-8",children:[e.jsx("div",{className:"section-label",children:"Free to Join"}),e.jsx("div",{className:"section-title",children:"Your next opportunity is one profile away."}),e.jsx("p",{className:"section-sub mt-2",children:"Join 74K+ skilled people already getting discovered by employers and clients across Africa. It takes less than five minutes to set up your profile — and it's free."})]}),e.jsx("div",{className:"col-md-4 text-md-end",children:e.jsxs(a,{role:"button",href:route("user.register_skills"),className:"btn-green",style:{fontSize:"1rem",padding:"14px 32px"},children:["Join the Platform ",e.jsx("i",{className:"ti ti-chevron-right"})]})})]})})}),e.jsx("div",{className:"section-divider"}),e.jsx("section",{id:"faq-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-lg-4",children:[e.jsx("div",{className:"section-label",children:"FAQ"}),e.jsx("div",{className:"section-title",children:"Still deciding? Here's what people ask us first."}),e.jsx("p",{className:"section-sub mt-3",children:"Can't find your answer? Our team will walk you through exactly how to get set up and start getting hired."}),e.jsxs(a,{href:route("user.contact"),className:"btn-green mt-4 d-inline-flex",children:["Ask Us Anything ",e.jsx("i",{className:"ti ti-arrow-badge-right ms-1"})]})]}),e.jsx("div",{className:"col-lg-8",children:u.map(r=>e.jsxs("div",{className:`faq-item${d===r.id?" open":""}`,id:r.id,children:[e.jsxs("button",{className:"faq-q",onClick:()=>p(r.id),children:[r.question,e.jsx("span",{className:"faq-icon",children:e.jsx("i",{className:"ti ti-plus"})})]}),e.jsx("div",{className:"faq-a",children:r.answer})]},r.id))})]})})}),e.jsx("div",{className:"modal fade",id:"searchModal",tabIndex:"-1","aria-labelledby":"searchModalLabel","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title",id:"searchModalLabel",children:[e.jsx("i",{className:"ti ti-search me-2",style:{color:"var(--green)"}}),"Find the Right skills, Fast"]}),e.jsx("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal",onClick:()=>s(!1)})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("form",{onSubmit:h,className:"row g-4",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Keyword"}),e.jsx("input",{type:"text",name:"keyword",className:"form-control",placeholder:"Search talents, skills, or names...",value:n.keyword,onChange:r=>l(t=>({...t,keyword:r.target.value}))})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Category"}),e.jsxs("select",{name:"category",className:"form-select",value:n.category,onChange:r=>l(t=>({...t,category:r.target.value})),children:[e.jsx("option",{value:"",children:"All Categories"}),o.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]})]}),e.jsxs("div",{className:"col-12 d-flex justify-content-end gap-3",children:[e.jsx("button",{type:"button",className:"btn-outline","data-bs-dismiss":"modal",onClick:()=>s(!1),children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-green",children:[e.jsx("i",{className:"ti ti-search"})," Search Skills"]})]})]})})]})})})]})}const u=[{id:"faq-1",question:"How fast can I find the right skilled person for my project?",answer:"Filter by skill, category, experience, and location, and you'll have a shortlist of qualified, verified professionals in minutes — not days of scrolling."},{id:"faq-2",question:"How do I actually hire someone once I find them?",answer:`Message them directly through the platform or request a proposal on the spot. No middlemen, no waiting — just a straight line from "I found them" to "we're working together."`},{id:"faq-3",question:"Can I see proof of someone's past work before I hire?",answer:"Yes — every profile can include a portfolio, project samples, and certifications, so you're hiring based on evidence, not guesswork."},{id:"faq-4",question:"How do I know a talent is actually who they say they are?",answer:"We verify every registered talent and mark verified profiles with a badge, so you can hire with confidence from the very first message."},{id:"faq-5",question:"What does it cost to hire — or to list my own skills?",answer:"Creating your profile is free. Hiring costs vary by the talent's experience and scope of work, with transparent pricing or direct negotiation — no hidden platform fees."}];b.layout=o=>e.jsx(f,{children:o,title:"Skills Marketplace",description:"Join 74,000+ skilled people getting discovered by employers and clients across Africa. Create your free profile today."});export{b as default};
