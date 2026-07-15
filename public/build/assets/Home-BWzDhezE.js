import{r as l,j as e,H as N,L as s}from"./app-B7IJkTeC.js";import{G as w}from"./GuestLayout-Dmb6shQU.js";const k=[{key:"skills",label:"Skills"},{key:"learning",label:"Learning"},{key:"opportunity",label:"Opportunities"},{key:"connect",label:"Connect"},{key:"marketplace",label:"Marketplace"}],f=[{id:"accSkills",label:"Skills Marketplace",icon:"ti-sparkles",routeName:"user.talents",cta:"Explore Marketplace",desc:"Stand out and reach 3× more employers. Get verified and feature your story on our homepage."},{id:"accLearn",label:"Learning Center",icon:"ti-school",routeName:"user.courses",cta:"Explore Courses",desc:"Short, affordable, high-quality learning designed for practical application."},{id:"accOpp",label:"Opportunities",icon:"ti-briefcase",routeName:"user.talents",cta:"Explore Works",desc:"Post work, find collaborators, and build your dream team in one verified network."},{id:"accConnect",label:"Connection Room",icon:"ti-users",routeName:"user.talents",cta:"Join Community",desc:"Secure messaging and meeting system for verified professionals."}];function i(a,o){try{return route(a,o)}catch{return console.warn(`route("${a}") failed — Ziggy config not found. Make sure @routes is included in resources/views/app.blade.php (in <head>, before the Inertia app div).`),"#"}}function h(a){return a!=null&&a.image?`/image/talents/${a.image}`:"/assets/img/user/profile.jpg"}function S(a){return a!=null&&a.logo?`/image/partners/${a.logo}`:"/assets/img/company/logo.svg"}function u({rating:a=0}){return e.jsx(e.Fragment,{children:Array.from({length:5}).map((o,c)=>e.jsx("span",{children:c<a?"★":"☆"},c))})}function z({totalTalents:a=0,partners:o=[],categories:c=[],featuredTalents:b=[],testimonials:p=[]}){const[n,v]=l.useState("skills"),[j,y]=l.useState(f[0].id),x=l.useRef(null),g=l.useRef(null);return l.useEffect(()=>{window.bootstrap&&x.current&&new window.bootstrap.Carousel(x.current,{interval:6e3,pause:!1})},[]),l.useEffect(()=>{window.bootstrap&&g.current&&new window.bootstrap.Carousel(g.current,{interval:6e3})},[p.length]),e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Empowering Talent, Opportunities & Growth"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
        :root {
          --bg: #0e1618;
          --bg-card: #131e21;
          --bg-glass: rgba(255, 255, 255, 0.035);
          --bg-glass2: rgba(0, 166, 103, 0.08);
          --accent: #48d597;
          --accent-dim: #008f59;
          --accent-glow: rgba(0, 166, 103, 0.22);
          --accent-line: rgba(0, 166, 103, 0.35);
          --border: rgba(255, 255, 255, 0.07);
          --border-h: rgba(0, 166, 103, 0.3);
          --text-1: #f0f4f3;
          --text-2: #8da4a0;
          --text-3: #4d6460;
          --font-head: 'Montserrat', sans-serif;
          --font-body: 'Montserrat', sans-serif;
          --r-sm: 8px;
          --r-md: 14px;
          --r-lg: 20px;
          --r-pill: 50px;
        }

        body { background: var(--bg) !important; color: var(--text-1); font-family: var(--font-body); }

        .fc-badge {
          display: inline-flex; align-items: center; gap: 6px; background: var(--bg-glass2);
          border: 1px solid var(--border-h); color: var(--accent); border-radius: var(--r-pill);
          padding: 4px 14px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
        }

        .fc-section-head { margin-bottom: 48px; }
        .fc-section-head .eyebrow {
          font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent);
          font-weight: 600; margin-bottom: 12px; display: block;
        }
        .fc-section-head h2 {
          font-family: var(--font-head); font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800;
          color: var(--text-1); margin-bottom: 14px; line-height: 1.15;
        }
        .fc-section-head p { color: var(--text-2); font-size: 0.95rem; max-width: 560px; line-height: 1.7; }

        .btn-fc-primary {
          display: inline-flex; align-items: center; gap: 8px; background: var(--accent); color: #fff;
          border: none; border-radius: var(--r-pill); padding: 12px 28px; font-family: var(--font-head);
          font-size: 0.875rem; font-weight: 700; text-decoration: none; cursor: pointer;
          transition: background .2s, transform .15s, box-shadow .2s; box-shadow: 0 4px 22px var(--accent-glow);
        }
        .btn-fc-primary:hover { background: var(--accent-dim); transform: translateY(-2px); box-shadow: 0 8px 32px var(--accent-glow); color: #fff; }

        .btn-fc-outline {
          display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--text-1);
          border: 1px solid var(--border); border-radius: var(--r-pill); padding: 11px 26px; font-family: var(--font-head);
          font-size: 0.875rem; font-weight: 600; text-decoration: none; cursor: pointer;
          transition: border-color .2s, color .2s, background .2s;
        }
        .btn-fc-outline:hover { border-color: var(--border-h); color: var(--accent); background: var(--bg-glass2); }

        .fc-hero { position: relative; min-height: 92vh; display: flex; align-items: center; overflow: hidden; }
        .fc-hero-bg { position: absolute; inset: 0; z-index: 0; }
        .fc-hero-bg .carousel, .fc-hero-bg .carousel-inner, .fc-hero-bg .carousel-item { height: 100%; }
        .fc-hero-bg-slide { width: 100%; height: 100%; background-size: cover; background-position: center; }
        .fc-hero-bg-slide video { width: 100%; height: 100%; object-fit: cover; }
        .fc-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(135deg, rgba(14, 22, 24, 0.92) 0%, rgba(14, 22, 24, 0.75) 50%, rgba(0, 166, 103, 0.08) 100%);
        }
        .fc-hero-grid { position: absolute; inset: 0; z-index: 1; pointer-events: none; background-size: 60px 60px; }
        .fc-hero-content { position: relative; z-index: 2; padding: 80px 40px; }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; font-size: 0.75rem; text-transform: uppercase;
          letter-spacing: 0.1em; color: var(--accent); font-weight: 600; margin-bottom: 20px;
        }
        .hero-eyebrow::before { content: ''; display: inline-block; width: 24px; height: 2px; background: var(--accent); border-radius: 2px; }

        .fc-hero h1 {
          font-family: var(--font-head); font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 800;
          line-height: 1.08; color: var(--text-1); margin-bottom: 22px;
        }
        .fc-hero h1 .hl { color: var(--accent); }
        .fc-hero p { font-size: 1.05rem; color: var(--text-2); max-width: 520px; line-height: 1.75; margin-bottom: 36px; }

        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 52px; }
        .hero-stats { display: flex; gap: 36px; flex-wrap: wrap; border-top: 1px solid var(--border); padding-top: 28px; }
        .hero-stat-val { font-family: var(--font-head); font-size: 1.7rem; font-weight: 800; color: var(--accent); }
        .hero-stat-lbl { font-size: 0.78rem; color: var(--text-3); margin-top: 2px; }

        .avatar-stack { display: flex; }
        .avatar-stack img { width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--bg); object-fit: cover; margin-left: -10px; }
        .avatar-stack img:first-child { margin-left: 0; }

        .fc-feature-strip { background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 28px 0; }
        .feature-strip-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); }
        @media(max-width: 767px) { .feature-strip-grid { grid-template-columns: 1fr; } }
        .feature-strip-item { background: var(--bg-card); padding: 28px 32px; transition: background .2s; }
        .feature-strip-item:hover { background: var(--bg-glass2); }
        .feature-strip-item h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 8px; }
        .feature-strip-item p { font-size: 0.83rem; color: var(--text-2); margin-bottom: 14px; line-height: 1.6; }
        .strip-link {
          font-size: 0.8rem; font-weight: 600; color: var(--accent); text-decoration: none;
          display: inline-flex; align-items: center; gap: 4px; transition: gap .2s;
        }
        .strip-link:hover { gap: 8px; }
        .strip-icon {
          width: 40px; height: 40px; border-radius: var(--r-sm); background: var(--bg-glass2);
          border: 1px solid var(--border-h); display: flex; align-items: center; justify-content: center;
          color: var(--accent); font-size: 1rem; margin-bottom: 16px;
        }

        .fc-categories { padding: 80px 0; }
        .category-scroll { display: flex; gap: 14px; overflow-x: auto; padding-bottom: 12px; scrollbar-width: none; }
        .category-scroll::-webkit-scrollbar { display: none; }
        .cat-pill {
          display: flex; flex-direction: column; gap: 4px; flex-shrink: 0; background: var(--bg-card);
          border: 1px solid var(--border); border-radius: var(--r-md); padding: 18px 22px; text-decoration: none;
          transition: border-color .2s, transform .2s, background .2s; min-width: 160px;
        }
        .cat-pill:hover { border-color: var(--border-h); background: var(--bg-glass2); transform: translateY(-3px); }
        .cat-pill-name { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); }
        .cat-pill-count { font-size: 0.75rem; color: var(--text-3); }
        .cat-pill-arrow { color: var(--accent); font-size: 0.75rem; margin-top: 8px; }

        .fc-features { padding: 80px 0; }
        .fc-tab-bar {
          display: flex; gap: 4px; flex-wrap: wrap; background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--r-md); padding: 6px; margin-bottom: 32px;
        }
        .fc-tab-btn {
          flex: 1; min-width: 100px; background: transparent; border: none; border-radius: var(--r-sm);
          padding: 10px 20px; font-family: var(--font-head); font-size: 0.8rem; font-weight: 600; color: var(--text-3);
          cursor: pointer; transition: background .2s, color .2s; white-space: nowrap;
        }
        .fc-tab-btn.active { background: var(--bg-glass2); color: var(--accent); border: 1px solid var(--border-h); }
        .fc-tab-btn:hover:not(.active) { color: var(--text-2); }
        .fc-tab-panel { display: none; animation: panelIn .3s ease; }
        .fc-tab-panel.active { display: block; }
        @keyframes panelIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

        .feature-panel-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 40px; overflow: hidden; position: relative; }
        .feature-panel-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }
        .feature-panel-card h2 { font-family: var(--font-head); font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: var(--text-1); margin-bottom: 16px; line-height: 1.2; }
        .feature-panel-card h2 span { color: var(--accent); }
        .feature-panel-card p { color: var(--text-2); line-height: 1.75; margin-bottom: 28px; max-width: 520px; }

        .feature-img-wrap { text-align: center; }
        .feature-img-wrap img { max-height: 260px; }

        .fc-provide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-top: 24px; }
        .fc-provide-box { background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--r-md); padding: 24px; transition: border-color .2s, transform .2s; }
        .fc-provide-box:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .fc-provide-box .provide-icon { margin-bottom: 14px; }
        .fc-provide-box .provide-icon img {
          height: 36px;
          filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(130deg) brightness(104%) contrast(101%);
        }
        .fc-provide-box h6 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); margin-bottom: 8px; }
        .fc-provide-box p { font-size: 0.82rem; color: var(--text-2); line-height: 1.6; margin-bottom: 16px; }

        .feature-list { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 12px; }
        .feature-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.87rem; color: var(--text-2); line-height: 1.5; }
        .feature-list li::before {
          content: ''; flex-shrink: 0; margin-top: 5px; width: 16px; height: 16px; border-radius: 50%;
          background: var(--bg-glass2); border: 1px solid var(--border-h);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
          background-size: 10px; background-repeat: no-repeat; background-position: center;
        }

        .fc-how { padding: 80px 0; background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2px; background: var(--border); }
        .step-card { background: var(--bg-card); padding: 36px 28px; transition: background .2s; }
        .step-card:hover { background: var(--bg-glass2); }
        .step-num { font-family: var(--font-head); font-size: 3rem; font-weight: 800; color: var(--accent); opacity: 0.15; line-height: 1; margin-bottom: 16px; display: block; }
        .step-card h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 10px; }
        .step-card p { font-size: 0.83rem; color: var(--text-2); line-height: 1.65; margin-bottom: 16px; }

        .fc-partners { padding: 60px 0; }
        .partners-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-3); font-weight: 600; text-align: center; margin-bottom: 32px; }
        .partners-scroll { display: flex; align-items: center; gap: 48px; overflow-x: auto; scrollbar-width: none; padding-bottom: 8px; }
        .partners-scroll::-webkit-scrollbar { display: none; }
        .partners-scroll img { height: 36px; width: auto; object-fit: contain; filter: brightness(0) invert(1); opacity: 0.25; flex-shrink: 0; transition: opacity .2s; }
        .partners-scroll img:hover { opacity: 0.6; }

        .fc-testimonials { padding: 80px 0; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
        .testimonial-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md); padding: 24px;
          display: flex; flex-direction: column; gap: 16px; transition: border-color .2s, transform .2s;
        }
        .testimonial-card:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .testimonial-head { display: flex; align-items: center; gap: 14px; }
        .testimonial-head img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-h); flex-shrink: 0; }
        .testimonial-name { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); }
        .testimonial-role { font-size: 0.75rem; color: var(--text-3); }
        .testimonial-stars { color: var(--accent); font-size: 0.8rem; margin-left: auto; }
        .testimonial-body p { font-size: 0.85rem; color: var(--text-2); line-height: 1.7; }
        .testimonial-loc { font-size: 0.75rem; color: var(--text-3); display: flex; align-items: center; gap: 5px; }

        .fc-cta { margin: 0 0 80px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 56px 48px; position: relative; overflow: hidden; }
        .fc-cta::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
        .fc-cta-glow { position: absolute; top: -60px; right: -60px; width: 280px; height: 280px; border-radius: 50%; background: var(--accent-glow); filter: blur(80px); pointer-events: none; }
        .fc-cta h2 { font-family: var(--font-head); font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 800; color: var(--text-1); margin-bottom: 12px; }
        .fc-cta p { color: var(--text-2); font-size: 0.95rem; max-width: 480px; margin-bottom: 28px; }

        .fc-accordion { padding: 48px 0; }
        .fc-accordion .accordion-item { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md) !important; margin-bottom: 8px; overflow: hidden; }
        .fc-accordion .accordion-button { background: var(--bg-card); color: var(--text-1); font-family: var(--font-head); font-weight: 600; font-size: 0.9rem; box-shadow: none; padding: 18px 22px; }
        .fc-accordion .accordion-button:not(.collapsed) { color: var(--accent); background: var(--bg-glass2); }
        .fc-accordion .accordion-button::after { filter: invert(1); }
        .fc-accordion .accordion-collapse { border-top: 1px solid var(--border); }
        .fc-accordion .accordion-body { padding: 24px; }

        [data-h-theme="light"] {
          --bg: #f6faf8; --bg-card: #ffffff; --bg-glass: rgba(0, 60, 40, 0.03); --bg-glass2: rgba(0, 166, 103, 0.07);
          --accent: #00a667; --accent-dim: #00814f; --accent-glow: rgba(0, 166, 103, 0.16); --accent-line: rgba(0, 166, 103, 0.3);
          --border: rgba(0, 60, 40, 0.08); --border-h: rgba(0, 166, 103, 0.28);
          --text-1: #10201b; --text-2: #4f6b65; --text-3: #7d9791;
        }
        [data-h-theme="light"] body { background: var(--bg) !important; color: var(--text-1); }
        [data-h-theme="light"] .btn-fc-primary { color: #fff; }
        [data-h-theme="light"] .btn-fc-primary:hover { color: #fff; }
        [data-h-theme="light"] .fc-hero-overlay {
          background: linear-gradient(135deg, rgba(246, 250, 248, 0.93) 0%, rgba(246, 250, 248, 0.78) 50%, rgba(0, 166, 103, 0.10) 100%);
        }
        [data-h-theme="light"] .fc-provide-box .provide-icon img {
          filter: brightness(0) saturate(100%) invert(38%) sepia(90%) saturate(1000%) hue-rotate(120deg) brightness(90%) contrast(101%);
        }
        [data-h-theme="light"] .partners-scroll img { filter: none; opacity: 0.45; }
        [data-h-theme="light"] .partners-scroll img:hover { opacity: 0.85; }
        [data-h-theme="light"] .fc-accordion .accordion-button::after { filter: none; }
      `}),e.jsxs("section",{className:"fc-hero",children:[e.jsx("div",{className:"fc-hero-bg",children:e.jsx("div",{id:"heroBgCarousel",className:"carousel slide",ref:x,children:e.jsxs("div",{className:"carousel-inner",children:[e.jsx("div",{className:"carousel-item active",children:e.jsx("div",{className:"fc-hero-bg-slide",style:{backgroundImage:"url('/assets/img/banner-hero.jpg')"}})}),e.jsx("div",{className:"carousel-item",children:e.jsx("div",{className:"fc-hero-bg-slide",children:e.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:e.jsx("source",{src:"/assets/img/banner-video.mp4",type:"video/mp4"})})})}),e.jsx("div",{className:"carousel-item",children:e.jsx("div",{className:"fc-hero-bg-slide",style:{backgroundImage:"url('/assets/img/provide-bg.jpg')"}})})]})})}),e.jsx("div",{className:"fc-hero-overlay"}),e.jsx("div",{className:"fc-hero-grid"}),e.jsx("div",{className:"container fc-hero-content",children:e.jsx("div",{className:"row align-items-center",children:e.jsxs("div",{className:"col-lg-7",children:[e.jsx("p",{className:"hero-eyebrow",children:"Skills Marketplace"}),e.jsxs("h1",{children:["On-Demand ",e.jsx("span",{className:"hl",children:"Services"})," for Your Every Need"]}),e.jsx("p",{children:"We pride ourselves on offering a seamless, secure, and efficient experience. Browse thousands of verified talents, read reviews, and grow with a community built for your success."}),e.jsxs("div",{className:"hero-ctas",children:[e.jsxs(s,{href:i("user.talents"),className:"btn-fc-primary",children:["Find Skills ",e.jsx("i",{className:"ti ti-arrow-right"})]}),e.jsxs(s,{href:i("register"),className:"btn-fc-outline",children:["Join Free ",e.jsx("i",{className:"ti ti-user-plus"})]})]}),e.jsxs("div",{className:"hero-stats",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"hero-stat-val",children:[a,"+"]}),e.jsx("div",{className:"hero-stat-lbl",children:"Skilled Professionals"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"hero-stat-val",children:[o.length,"+"]}),e.jsx("div",{className:"hero-stat-lbl",children:"Trusted Partners"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"hero-stat-val",children:"4.8"}),e.jsx("div",{className:"hero-stat-lbl",children:"Average Rating"})]})]})]})})})]}),e.jsx("section",{className:"fc-how",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-head text-center",style:{maxWidth:600,margin:"0 auto 48px"},children:[e.jsx("span",{className:"eyebrow",children:"How It Works"}),e.jsx("h2",{children:"Get Started in 3 Simple Steps"})]}),e.jsxs("div",{className:"steps-grid",children:[e.jsxs("div",{className:"step-card",children:[e.jsx("span",{className:"step-num",children:"01"}),e.jsx("h5",{children:"Create Your Profile"}),e.jsx("p",{children:"Sign up and showcase your story, skills, and aspirations through text, images, and video."}),e.jsxs(s,{href:i("user.register_skills"),className:"strip-link",children:["Get Started ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("span",{className:"step-num",children:"02"}),e.jsx("h5",{children:"Get Discovered & Rated"}),e.jsx("p",{children:"Employers browse skills by category, rate your profile, and share feedback to help you grow."}),e.jsxs(s,{href:i("user.talents"),className:"strip-link",children:["Explore Skills ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("span",{className:"step-num",children:"03"}),e.jsx("h5",{children:"Grow with the Community"}),e.jsx("p",{children:"Connect, collaborate, and access learning resources. Shop or sell tools from local creators."}),e.jsxs(s,{href:i("talent.connections-room"),className:"strip-link",children:["Connection Room",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})]})}),e.jsx("div",{className:"fc-feature-strip",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"feature-strip-grid",children:[e.jsxs("div",{className:"feature-strip-item",children:[e.jsx("div",{className:"strip-icon",children:e.jsx("i",{className:"ti ti-rocket"})}),e.jsx("h5",{children:"Skills Marketplace"}),e.jsx("p",{children:"Stand out and reach 3× more employers. Boost your profile, get verified, and feature your story."}),e.jsxs(s,{href:i("user.talents"),className:"strip-link",children:["Find Skills ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"feature-strip-item",children:[e.jsx("div",{className:"strip-icon",children:e.jsx("i",{className:"ti ti-briefcase"})}),e.jsx("h5",{children:"Unlock Opportunities"}),e.jsx("p",{children:"Discover tailored job listings, collaboration projects, and freelance gigs matched to your skills."}),e.jsxs(s,{href:i("user.jobs.index"),className:"strip-link",children:["Start Exploring ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"feature-strip-item",children:[e.jsx("div",{className:"strip-icon",children:e.jsx("i",{className:"ti ti-users"})}),e.jsx("h5",{children:"Expand Your Network"}),e.jsx("p",{children:"Connect with professionals, mentors, and peers. Join groups and build relationships that matter."}),e.jsxs(s,{href:i("talent.connections-room"),className:"strip-link",children:["Skill Connect",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})})}),e.jsx("section",{className:"fc-categories",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row align-items-end mb-5",children:[e.jsx("div",{className:"col-md-8",children:e.jsxs("div",{className:"fc-section-head",style:{marginBottom:0},children:[e.jsx("span",{className:"eyebrow",children:"Browse Categories"}),e.jsx("h2",{children:"Trending Skills for Today's Market"}),e.jsx("p",{children:"Explore the most sought-after skills and connections in today's job market."})]})}),e.jsx("div",{className:"col-md-4 text-md-end",children:e.jsxs(s,{href:i("user.talents"),className:"btn-fc-outline",style:{fontSize:"0.8rem",padding:"9px 20px"},children:["All Categories ",e.jsx("i",{className:"ti ti-arrow-right"})]})})]}),e.jsx("div",{className:"category-scroll",children:c.map(r=>e.jsxs(s,{href:i("user.talents.category",r.slug),className:"cat-pill",children:[e.jsx("span",{className:"cat-pill-name",children:r.name}),e.jsxs("span",{className:"cat-pill-count",children:[r.talents_count??0," talents"]}),e.jsx("span",{className:"cat-pill-arrow",children:e.jsx("i",{className:"ti ti-arrow-right"})})]},r.id))})]})}),e.jsx("section",{className:"fc-features d-none d-lg-block",id:"features",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-head",children:[e.jsx("span",{className:"eyebrow",children:"Platform Features"}),e.jsx("h2",{children:"Explore Future Connect"}),e.jsx("p",{children:"Everything you need to grow your career, showcase your skills, and connect with the right people."})]}),e.jsx("div",{className:"fc-tab-bar",role:"tablist",children:k.map(r=>e.jsx("button",{className:`fc-tab-btn${n===r.key?" active":""}`,onClick:()=>v(r.key),children:r.label},r.key))}),e.jsx("div",{className:`fc-tab-panel${n==="skills"?" active":""}`,children:e.jsx("div",{className:"feature-panel-card",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-sparkles"})," Skills Marketplace"]}),e.jsxs("h2",{children:["Showcase your skills ",e.jsx("span",{children:"and"})," reach verified employers."]}),e.jsx("p",{children:"Future Connect's Skills Marketplace empowers professionals to present verified skills, attract clients, and secure freelance or full-time work opportunities."}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"Get verified and build trust with employers"}),e.jsx("li",{children:"Feature your story on our homepage"}),e.jsx("li",{children:"Reach 3× more clients with a boosted profile"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},children:[e.jsxs(s,{href:i("user.talents"),className:"btn-fc-primary",children:["Find skills",e.jsx("i",{className:"ti ti-arrow-right"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("div",{className:"avatar-stack",children:b.map((r,t)=>e.jsx("img",{src:h(r),alt:""},r.id??t))}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"var(--accent)",fontSize:"0.8rem"},children:"★★★★★ 4.8/5"}),e.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--text-3)"},children:[a,"+ professionals"]})]})]})]})]}),e.jsx("div",{className:"col-lg-6 feature-img-wrap",children:e.jsx("img",{src:"/assets/img/home/banner-image.svg",alt:"",className:"img-fluid"})})]})})}),e.jsx("div",{className:`fc-tab-panel${n==="learning"?" active":""}`,children:e.jsx("div",{className:"feature-panel-card",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-school"})," Learning Center"]}),e.jsxs("h2",{children:["Upskill with short, impactful ",e.jsx("span",{children:"professional courses."})]}),e.jsx("p",{children:"The Learning Center brings together experts and learners for short, affordable, high-quality experiences — designed for practical application so you can implement knowledge immediately."}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"Short, high-impact micro-courses"}),e.jsx("li",{children:"Expert instructors from your industry"}),e.jsx("li",{children:"Certificates you can share on your profile"})]}),e.jsxs(s,{href:i("user.courses"),className:"btn-fc-primary",children:["Explore Courses ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsx("div",{className:"col-lg-6 feature-img-wrap",children:e.jsx("img",{src:"/assets/img/banner-img.png",alt:"",className:"img-fluid"})})]})})}),e.jsx("div",{className:`fc-tab-panel${n==="opportunity"?" active":""}`,children:e.jsx("div",{className:"feature-panel-card",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-briefcase"})," Opportunities"]}),e.jsxs("h2",{children:["Post work, find collaborators, ",e.jsx("span",{children:"and build"})," your dream team."]}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"Post freelance gigs and full-time roles"}),e.jsx("li",{children:"Find verified collaborators in one network"}),e.jsx("li",{children:"Set job alerts so you never miss a match"})]}),e.jsxs(s,{href:i("user.jobs.index"),className:"btn-fc-primary",children:["Explore Opportunities ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsx("div",{className:"col-lg-6 feature-img-wrap",children:e.jsx("img",{src:"/assets/img/banner-img.png",alt:"",className:"img-fluid"})})]})})}),e.jsx("div",{className:`fc-tab-panel${n==="connect"?" active":""}`,children:e.jsx("div",{className:"feature-panel-card",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsx("div",{className:"col-lg-5",children:e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-6",children:e.jsx("img",{src:"/assets/img/aboutus/about-us-01.jpg",alt:"",className:"img-fluid",style:{borderRadius:"var(--r-md)"}})}),e.jsxs("div",{className:"col-6 d-flex flex-column gap-3",children:[e.jsx("img",{src:"/assets/img/aboutus/about-us-02.jpg",alt:"",className:"img-fluid",style:{borderRadius:"var(--r-md)"}}),e.jsx("img",{src:"/assets/img/aboutus/about-us-03.jpg",alt:"",className:"img-fluid",style:{borderRadius:"var(--r-md)"}})]})]})}),e.jsxs("div",{className:"col-lg-7",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-users"})," Connection Room"]}),e.jsxs("h2",{children:["Network and collaborate ",e.jsx("span",{children:"securely"})," with verified users."]}),e.jsx("p",{children:"The Connect Room offers a secure messaging and meeting system for verified professionals. Build meaningful relationships, exchange ideas, or schedule mentorship calls."}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"Diverse network of verified professionals"}),e.jsx("li",{children:"Trust and transparency at every step"}),e.jsx("li",{children:"User-friendly, innovation-driven platform"})]}),e.jsxs(s,{href:i("talent.connections-room"),className:"btn-fc-primary",children:["Skills Connect",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})})}),e.jsx("div",{className:`fc-tab-panel${n==="marketplace"?" active":""}`,children:e.jsxs("div",{className:"feature-panel-card",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-shopping-bag"})," Marketplace"]}),e.jsxs("h2",{children:["We're here to help ",e.jsx("span",{children:"find your needs."})]}),e.jsx("p",{children:"Our Marketplace lets creators showcase digital products — from templates to tools — with full payment protection via the platform."}),e.jsxs("div",{className:"fc-provide-grid",children:[e.jsxs("div",{className:"fc-provide-box",children:[e.jsx("div",{className:"provide-icon",children:e.jsx("img",{src:"/assets/img/icons/ipad-icon.svg",alt:""})}),e.jsx("h6",{children:"Browse Products"}),e.jsx("p",{children:"Everything you need for your craft — safe payments through Future Connect."}),e.jsxs(s,{href:i("user.products.index"),className:"btn-fc-primary",style:{fontSize:"0.8rem",padding:"9px 18px"},children:["Explore ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"fc-provide-box",children:[e.jsx("div",{className:"provide-icon",children:e.jsx("img",{src:"/assets/img/icons/service-icon.svg",alt:""})}),e.jsx("h6",{children:"Sell a Product"}),e.jsx("p",{children:"Showcase your digital products to thousands of buyers on the platform."}),e.jsxs("a",{"data-bs-toggle":"modal","data-bs-target":"#applySellerModal",className:"btn-fc-outline",style:{fontSize:"0.8rem",padding:"9px 18px",cursor:"pointer"},children:["Learn More ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"fc-provide-box",children:[e.jsx("div",{className:"provide-icon",children:e.jsx("img",{src:"/assets/img/icons/user-icon-01.svg",alt:""})}),e.jsx("h6",{children:"Become a Seller"}),e.jsx("p",{children:"Sellers earn instantly — FC keeps a small fee for logistics and support."}),e.jsxs("a",{className:"btn-fc-primary","data-bs-toggle":"modal","data-bs-target":"#applySellerModal",style:{fontSize:"0.8rem",padding:"9px 18px",cursor:"pointer"},children:["Apply ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})]})})]})}),e.jsx("div",{className:"fc-accordion d-lg-none",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-head",children:[e.jsx("span",{className:"eyebrow",children:"Platform Features"}),e.jsx("h2",{children:"Explore Future Connect"})]}),e.jsx("div",{className:"accordion",id:"fcAccordion",children:f.map(r=>{const t=j===r.id;return e.jsxs("div",{className:"accordion-item",children:[e.jsx("h2",{className:"accordion-header",children:e.jsxs("button",{className:`accordion-button${t?"":" collapsed"}`,onClick:()=>y(t?null:r.id),children:[e.jsx("i",{className:`ti ${r.icon} me-2`,style:{color:"var(--accent)"}}),r.label]})}),t&&e.jsx("div",{className:"accordion-collapse collapse show",children:e.jsxs("div",{className:"accordion-body",children:[e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-2)",marginBottom:16},children:r.desc}),e.jsxs(s,{href:i(r.routeName),className:"btn-fc-primary",style:{fontSize:"0.82rem",padding:"10px 20px"},children:[r.cta," ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})})]},r.id)})})]})}),o.length>0&&e.jsx("section",{className:"fc-partners",children:e.jsxs("div",{className:"container",children:[e.jsxs("p",{className:"partners-label",children:["Trusted by ",o.length,"+ Partners Worldwide"]}),e.jsx("div",{className:"partners-scroll",children:o.map((r,t)=>e.jsx("img",{src:S(r),alt:r.name??"Partner"},r.id??t))})]})}),e.jsx("section",{className:"fc-testimonials",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row align-items-end mb-5",children:[e.jsx("div",{className:"col-md-7",children:e.jsxs("div",{className:"fc-section-head",style:{marginBottom:0},children:[e.jsx("span",{className:"eyebrow",children:"Testimonials"}),e.jsx("h2",{children:"What Talents Say About Future Connect"}),e.jsx("p",{children:"Voices of passionate individuals whose lives have been impacted by sharing their skills and stories."})]})}),e.jsxs("div",{className:"col-md-5 text-md-end",children:[e.jsx("div",{className:"avatar-stack",style:{justifyContent:"flex-end",marginBottom:8},children:p.map((r,t)=>e.jsx("img",{src:h(r.talent),alt:""},r.id??t))}),e.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-3)"},children:"Building a Global Talent Community"})]})]}),e.jsx("div",{className:"testimonial-grid d-none d-md-grid",children:p.map((r,t)=>{var d,m;return e.jsxs("div",{className:"testimonial-card",children:[e.jsxs("div",{className:"testimonial-head",children:[e.jsx("img",{src:h(r.talent),alt:""}),e.jsxs("div",{children:[e.jsx("div",{className:"testimonial-name",children:((d=r.talent)==null?void 0:d.name)??"Talent"}),e.jsx("div",{className:"testimonial-role",children:r.title??"Creative Professional"})]}),e.jsx("div",{className:"testimonial-stars",children:e.jsx(u,{rating:r.rating})})]}),e.jsx("div",{className:"testimonial-body",children:e.jsx("p",{children:r.content??"Passionate professional making a difference on Future Connect."})}),e.jsxs("div",{className:"testimonial-loc",children:[e.jsx("i",{className:"ti ti-map-pin",style:{color:"var(--accent)"}}),((m=r.talent)==null?void 0:m.address)??"Kigali, Rwanda"]})]},r.id??t)})}),e.jsx("div",{id:"testimonialCarousel",className:"carousel slide d-md-none",ref:g,children:e.jsx("div",{className:"carousel-inner",children:p.map((r,t)=>{var d,m;return e.jsx("div",{className:`carousel-item${t===0?" active":""}`,children:e.jsxs("div",{className:"testimonial-card",style:{margin:"0 auto",maxWidth:380},children:[e.jsxs("div",{className:"testimonial-head",children:[e.jsx("img",{src:h(r.talent),alt:""}),e.jsxs("div",{children:[e.jsx("div",{className:"testimonial-name",children:((d=r.talent)==null?void 0:d.name)??"Talent"}),e.jsx("div",{className:"testimonial-role",children:r.title??"Creative Professional"})]}),e.jsx("div",{className:"testimonial-stars",children:e.jsx(u,{rating:r.rating})})]}),e.jsx("div",{className:"testimonial-body",children:e.jsx("p",{children:r.content??"Passionate professional making a difference on Future Connect."})}),e.jsxs("div",{className:"testimonial-loc",children:[e.jsx("i",{className:"ti ti-map-pin",style:{color:"var(--accent)"}}),((m=r.talent)==null?void 0:m.address)??"Kigali, Rwanda"]})]})},r.id??t)})})})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"fc-cta",children:[e.jsx("div",{className:"fc-cta-glow"}),e.jsx("div",{className:"row align-items-center",children:e.jsxs("div",{className:"col-md-7",style:{position:"relative"},children:[e.jsx("span",{className:"eyebrow",style:{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--accent)",fontWeight:600,display:"block",marginBottom:12},children:"Join Future Connect"}),e.jsx("h2",{children:"Showcase your skills, share your story, and inspire others."}),e.jsx("p",{children:"Be part of a community that empowers growth and recognition. Your journey starts here."}),e.jsxs("div",{className:"hero-ctas",style:{marginBottom:0},children:[e.jsxs(s,{href:i("user.register_skills"),className:"btn-fc-primary",children:["Get Started ",e.jsx("i",{className:"ti ti-arrow-right"})]}),e.jsx(s,{href:i("user.talents"),className:"btn-fc-outline",children:"Browse Skills"})]})]})})]})})]})}z.layout=a=>e.jsx(w,{children:a});export{z as default};
