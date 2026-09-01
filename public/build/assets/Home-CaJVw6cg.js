import{r as p,j as e,H as y,L as t,R as v}from"./app-DQcVR1sC.js";import{G as k}from"./GuestLayout-AyS9Rfgz.js";function i(a,o){try{return route(a,o)}catch{return console.warn(`route("${a}") failed — Ziggy config not found. Make sure @routes is included in resources/views/app.blade.php (in <head>, before the Inertia app div).`),"#"}}function x(a,o=1){if(a!=null&&a.image)return a.image.startsWith("http")?a.image:`/image/talents/${a.image}`;const l=(o-1)%90+1;return`https://randomuser.me/api/portraits/${o%2===0?"women":"men"}/${l}.jpg`}function z(a){return a!=null&&a.logo?a.logo.startsWith("http")?a.logo:`/image/partners/${a.logo}`:a!=null&&a.domain?`https://www.google.com/s2/favicons?sz=128&domain=${a.domain}`:"https://www.google.com/s2/favicons?sz=128&domain=example.com"}const n={heroA:"https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?auto=format&fit=crop&w=1600&q=80",heroB:"https://images.unsplash.com/photo-1758518730384-be3d205838e8?auto=format&fit=crop&w=1600&q=80",skills:"https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?auto=format&fit=crop&w=900&q=80",learning:"https://images.unsplash.com/photo-1752650735119-8929e5f7d1ec?auto=format&fit=crop&w=900&q=80",jobs:"https://images.unsplash.com/photo-1758518730384-be3d205838e8?auto=format&fit=crop&w=900&q=80",connect1:"https://images.unsplash.com/photo-1758691737083-0e7fdbde0f05?auto=format&fit=crop&w=700&q=80",connect2:"https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?auto=format&fit=crop&w=700&q=80",volunteer:"https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80"},S=[{name:"MTN Rwanda",logo:"https://commons.wikimedia.org/wiki/Special:FilePath/MTN_2022_logo.svg"},{name:"RwandAir",logo:"https://commons.wikimedia.org/wiki/Special:FilePath/RwandAir_Logotype.png?width=300"},{name:"Airtel Rwanda",logo:"https://commons.wikimedia.org/wiki/Special:FilePath/Airtel_Africa_logo.svg"},{name:"Equity Bank Rwanda",logo:"https://commons.wikimedia.org/wiki/Special:FilePath/Equity_Group_Logo.png?width=300"}],j=[{icon:"ti-briefcase",label:"Job Opportunities"},{icon:"ti-users",label:"Professional Connections"},{icon:"ti-books",label:"Learning"},{icon:"ti-rocket",label:"Project Collaboration"},{icon:"ti-shopping-bag",label:"Future Connect Market"}],w=["Discover","Connect","Learn","Collaborate","Earn","Grow"],C=[{icon:"ti-code",title:"Technical Graduates",desc:"Engineers, developers, and competition winners ready to be found."},{icon:"ti-palette",title:"Creatives & Freelancers",desc:"Designers, writers, and makers looking for steady, real work."},{icon:"ti-building-community",title:"Organizations & Mentors",desc:"Teams and mentors looking for the exact expertise they need."},{icon:"ti-heart-handshake",title:"Volunteers & Changemakers",desc:"People ready to give their time and skills to a cause."}];function N({rating:a=0}){return e.jsx(e.Fragment,{children:Array.from({length:5}).map((o,l)=>e.jsx("span",{children:l<a?"★":"☆"},l))})}function P({totalTalents:a=0,partners:o=[],categories:l=[],featuredTalents:b=[],testimonials:h=[]}){const g=p.useRef(null),f=p.useRef(null),u=o.length>0?o:S;return p.useEffect(()=>{window.bootstrap&&g.current&&new window.bootstrap.Carousel(g.current,{interval:6e3,pause:!1})},[]),p.useEffect(()=>{window.bootstrap&&f.current&&new window.bootstrap.Carousel(f.current,{interval:6e3})},[h.length]),e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Future Connect — Your Skills Are Your Capital."}),e.jsx("style",{children:`
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
          --font-head: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          --r-sm: 8px; --r-md: 14px; --r-lg: 20px; --r-pill: 50px;
        }

        body { background: var(--bg) !important; color: var(--text-1); font-family: var(--font-body); }

        .fc-badge {
          display: inline-flex; align-items: center; gap: 6px; background: var(--bg-glass2);
          border: 1px solid var(--border-h); color: var(--accent); border-radius: var(--r-pill);
          padding: 4px 14px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
        }

        .fc-section-head { margin-bottom: 40px; }
        .fc-section-head .eyebrow {
          font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent);
          font-weight: 600; margin-bottom: 10px; display: block;
        }
        .fc-section-head h2 {
          font-family: var(--font-head); font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800;
          color: var(--text-1); margin-bottom: 12px; line-height: 1.15;
        }
        .fc-section-head p { color: var(--text-2); font-size: 0.95rem; max-width: 560px; line-height: 1.65; }

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

        .fc-hero { position: relative; min-height: 88vh; display: flex; align-items: center; overflow: hidden; }
        .fc-hero-bg { position: absolute; inset: 0; z-index: 0; }
        .fc-hero-bg .carousel, .fc-hero-bg .carousel-inner, .fc-hero-bg .carousel-item { height: 100%; }
        .fc-hero-bg-slide { width: 100%; height: 100%; background-size: cover; background-position: center; }
        .fc-hero-overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(135deg, rgba(14, 22, 24, 0.92) 0%, rgba(14, 22, 24, 0.75) 50%, rgba(0, 166, 103, 0.08) 100%);
        }
        .fc-hero-content { position: relative; z-index: 2; padding: 80px 40px; }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; font-size: 0.75rem; text-transform: uppercase;
          letter-spacing: 0.1em; color: var(--accent); font-weight: 600; margin-bottom: 18px;
        }
        .hero-eyebrow::before { content: ''; display: inline-block; width: 24px; height: 2px; background: var(--accent); border-radius: 2px; }

        .fc-hero h1 {
          font-family: var(--font-head); font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 800;
          line-height: 1.08; color: var(--text-1); margin-bottom: 18px;
        }
        .fc-hero h1 .hl { color: var(--accent); }
        .fc-hero p { font-size: 1.02rem; color: var(--text-2); max-width: 520px; line-height: 1.7; margin-bottom: 30px; }

        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 44px; }
        .hero-stats { display: flex; gap: 36px; flex-wrap: wrap; border-top: 1px solid var(--border); padding-top: 24px; }
        .hero-stat-val { font-family: var(--font-head); font-size: 1.7rem; font-weight: 800; color: var(--accent); }
        .hero-stat-lbl { font-size: 0.78rem; color: var(--text-3); margin-top: 2px; }

        .avatar-stack { display: flex; }
        .avatar-stack img { width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--bg); object-fit: cover; margin-left: -10px; }
        .avatar-stack img:first-child { margin-left: 0; }

        .fc-feature-strip { background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 26px 0; }
        .feature-strip-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); }
        @media(max-width: 767px) { .feature-strip-grid { grid-template-columns: 1fr; } }
        .feature-strip-item { background: var(--bg-card); padding: 26px 30px; transition: background .2s; }
        .feature-strip-item:hover { background: var(--bg-glass2); }
        .feature-strip-item h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
        .feature-strip-item p { font-size: 0.82rem; color: var(--text-2); margin-bottom: 12px; line-height: 1.55; }
        .strip-link { font-size: 0.8rem; font-weight: 600; color: var(--accent); text-decoration: none; display: inline-flex; align-items: center; gap: 4px; transition: gap .2s; }
        .strip-link:hover { gap: 8px; }
        .strip-icon {
          width: 40px; height: 40px; border-radius: var(--r-sm); background: var(--bg-glass2);
          border: 1px solid var(--border-h); display: flex; align-items: center; justify-content: center;
          color: var(--accent); font-size: 1rem; margin-bottom: 14px;
        }

        /* Problem section */
        .fc-problem { padding: 72px 0; background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .problem-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2px; background: var(--border); margin-top: 20px; }
        .problem-card { background: var(--bg-card); padding: 30px 26px; transition: background .2s; }
        .problem-card:hover { background: var(--bg-glass2); }
        .problem-icon { font-size: 1.6rem; margin-bottom: 14px; display: block; }
        .problem-card h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 8px; }
        .problem-card p { font-size: 0.85rem; color: var(--text-2); line-height: 1.65; }

        /* Solution / pathways section */
        .fc-solution { padding: 72px 0; }
        .pathway-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 10px; margin-top: 28px; }
        .pathway-chip {
          display: inline-flex; align-items: center; gap: 8px; background: var(--bg-glass2);
          border: 1px solid var(--border-h); color: var(--text-1); border-radius: var(--r-pill);
          padding: 10px 18px; font-size: 0.85rem; font-weight: 600;
        }
        .pathway-chip i { color: var(--accent); }
        .pathway-arrow { color: var(--text-3); font-size: 1.1rem; }
        .difference-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px; margin-top: 18px; }
        .difference-step {
          font-family: var(--font-head); font-weight: 700; font-size: 0.95rem; color: var(--accent);
          background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--r-pill); padding: 8px 18px;
        }

        .fc-feature-section { padding: 64px 0; }
        .fc-feature-section.alt { background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .feature-panel-card h2 { font-family: var(--font-head); font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: var(--text-1); margin-bottom: 14px; line-height: 1.2; }
        .feature-panel-card h2 span { color: var(--accent); }
        .feature-panel-card p { color: var(--text-2); line-height: 1.7; margin-bottom: 22px; max-width: 500px; }

        .feature-img-wrap img { width: 100%; height: 320px; object-fit: cover; border-radius: var(--r-lg); border: 1px solid var(--border); }

        .fc-provide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-top: 20px; }
        .fc-provide-box { background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--r-md); padding: 22px; transition: border-color .2s, transform .2s; }
        .fc-provide-box:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .fc-provide-box .provide-icon {
          width: 40px; height: 40px; border-radius: var(--r-sm); background: var(--bg-glass2); border: 1px solid var(--border-h);
          display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 1.1rem; margin-bottom: 12px;
        }
        .fc-provide-box h6 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
        .fc-provide-box p { font-size: 0.82rem; color: var(--text-2); line-height: 1.55; margin-bottom: 14px; }

        .feature-list { list-style: none; padding: 0; margin: 0 0 24px; display: flex; flex-direction: column; gap: 10px; }
        .feature-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.87rem; color: var(--text-2); line-height: 1.5; }
        .feature-list li::before {
          content: ''; flex-shrink: 0; margin-top: 5px; width: 16px; height: 16px; border-radius: 50%;
          background: var(--bg-glass2); border: 1px solid var(--border-h);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
          background-size: 10px; background-repeat: no-repeat; background-position: center;
        }

        .fc-how { padding: 72px 0; background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2px; background: var(--border); }
        .step-card { background: var(--bg-card); padding: 32px 26px; transition: background .2s; }
        .step-card:hover { background: var(--bg-glass2); }
        .step-num { font-family: var(--font-head); font-size: 2.6rem; font-weight: 800; color: var(--accent); opacity: 0.15; line-height: 1; margin-bottom: 14px; display: block; }
        .step-card h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 8px; }
        .step-card p { font-size: 0.83rem; color: var(--text-2); line-height: 1.6; margin-bottom: 14px; }

        /* Who it serves */
        .fc-who { padding: 72px 0; }
        .who-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-top: 20px; }
        .who-card { background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--r-md); padding: 24px; transition: border-color .2s, transform .2s; }
        .who-card:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .who-card .provide-icon { width: 44px; height: 44px; border-radius: var(--r-sm); background: var(--bg-glass2); border: 1px solid var(--border-h); display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 1.2rem; margin-bottom: 14px; }
        .who-card h6 { font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
        .who-card p { font-size: 0.83rem; color: var(--text-2); line-height: 1.6; }

        /* Philosophy banner */
        .fc-philosophy { padding: 76px 0; background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); text-align: center; }
        .fc-philosophy .eyebrow { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); font-weight: 600; margin-bottom: 14px; display: block; }
        .fc-philosophy h2 { font-family: var(--font-head); font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: var(--text-1); margin-bottom: 18px; }
        .fc-philosophy p { color: var(--text-2); font-size: 1rem; line-height: 1.75; max-width: 640px; margin: 0 auto; }

        /* Volunteering section */
        .fc-volunteer .feature-panel-card p.tagline { color: var(--accent); font-weight: 600; font-size: 0.85rem; margin-bottom: 8px; }

        /* ── Partners: full-color logos, laid out as a list/grid (no scroll) ── */
        .fc-partners { padding: 56px 0; }
        .partners-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-3); font-weight: 600; text-align: center; margin-bottom: 28px; }
        .partners-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px;
        }
        .partner-tile {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md);
          padding: 20px; display: flex; align-items: center; justify-content: center; height: 84px;
          transition: border-color .2s, transform .2s;
        }
        .partner-tile:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .partner-tile img { max-height: 34px; max-width: 100%; width: auto; object-fit: contain; }

        .fc-testimonials { padding: 72px 0; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
        .testimonial-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md); padding: 22px;
          display: flex; flex-direction: column; gap: 14px; transition: border-color .2s, transform .2s;
        }
        .testimonial-card:hover { border-color: var(--border-h); transform: translateY(-3px); }
        .testimonial-head { display: flex; align-items: center; gap: 14px; }
        .testimonial-head img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-h); flex-shrink: 0; }
        .testimonial-name { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); }
        .testimonial-role { font-size: 0.75rem; color: var(--text-3); }
        .testimonial-stars { color: var(--accent); font-size: 0.8rem; margin-left: auto; }
        .testimonial-body p { font-size: 0.85rem; color: var(--text-2); line-height: 1.65; }
        .testimonial-loc { font-size: 0.75rem; color: var(--text-3); display: flex; align-items: center; gap: 5px; }
        .testimonial-support { font-size: 0.75rem; color: var(--accent); font-weight: 600; margin-top: -4px; }

        .fc-cta { margin: 0 0 72px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 48px 44px; position: relative; overflow: hidden; }
        .fc-cta::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
        .fc-cta-glow { position: absolute; top: -60px; right: -60px; width: 280px; height: 280px; border-radius: 50%; background: var(--accent-glow); filter: blur(80px); pointer-events: none; }
        .fc-cta h2 { font-family: var(--font-head); font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 800; color: var(--text-1); margin-bottom: 10px; }
        .fc-cta p { color: var(--text-2); font-size: 0.95rem; max-width: 460px; margin-bottom: 24px; }
        .fc-cta-note { font-size: 0.78rem; color: var(--text-3); margin-top: -12px; margin-bottom: 0; }

        [data-h-theme="light"] {
          --bg: #f6faf8; --bg-card: #ffffff; --bg-glass: rgba(0, 60, 40, 0.03); --bg-glass2: rgba(0, 166, 103, 0.07);
          --accent: #00a667; --accent-dim: #00814f; --accent-glow: rgba(0, 166, 103, 0.16); --accent-line: rgba(0, 166, 103, 0.3);
          --border: rgba(0, 60, 40, 0.08); --border-h: rgba(0, 166, 103, 0.28);
          --text-1: #10201b; --text-2: #4f6b65; --text-3: #7d9791;
        }
        [data-h-theme="light"] body { background: var(--bg) !important; color: var(--text-1); }
        [data-h-theme="light"] .btn-fc-primary, [data-h-theme="light"] .btn-fc-primary:hover { color: #fff; }
        [data-h-theme="light"] .fc-hero-overlay {
          background: linear-gradient(135deg, rgba(246, 250, 248, 0.93) 0%, rgba(246, 250, 248, 0.78) 50%, rgba(0, 166, 103, 0.10) 100%);
        }
      `}),e.jsxs("section",{className:"fc-hero",children:[e.jsx("div",{className:"fc-hero-bg",children:e.jsx("div",{id:"heroBgCarousel",className:"carousel slide",ref:g,children:e.jsxs("div",{className:"carousel-inner",children:[e.jsx("div",{className:"carousel-item active",children:e.jsx("div",{className:"fc-hero-bg-slide",style:{backgroundImage:`url('${n.heroA}')`}})}),e.jsx("div",{className:"carousel-item",children:e.jsx("div",{className:"fc-hero-bg-slide",style:{backgroundImage:`url('${n.heroB}')`}})})]})})}),e.jsx("div",{className:"fc-hero-overlay"}),e.jsx("div",{className:"container fc-hero-content",children:e.jsx("div",{className:"row align-items-center",children:e.jsxs("div",{className:"col-lg-7",children:[e.jsxs("p",{className:"hero-eyebrow",children:[a,"+ verified skilled people, already connected"]}),e.jsxs("h1",{children:["Your skills are ",e.jsx("span",{className:"hl",children:"your capital."})]}),e.jsx("p",{children:"The digital ecosystem connecting Africa's skilled people to opportunities, collaborators, mentors, and organizations."}),e.jsxs("div",{className:"hero-ctas",children:[e.jsxs(t,{href:i("user.register_skills"),className:"btn-fc-primary",children:["Join Future Connect ",e.jsx("i",{className:"ti ti-arrow-right"})]}),e.jsxs(t,{href:i("user.talents"),className:"btn-fc-outline",children:["Explore the Network ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"hero-stats",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"hero-stat-val",children:[a,"+"]}),e.jsx("div",{className:"hero-stat-lbl",children:"Verified Skilled People"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"hero-stat-val",children:[u.length,"+"]}),e.jsx("div",{className:"hero-stat-lbl",children:"Trusted Partners"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"hero-stat-val",children:"4.8"}),e.jsx("div",{className:"hero-stat-lbl",children:"Average Rating"})]})]})]})})})]}),e.jsx("div",{className:"fc-feature-strip",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"feature-strip-grid",children:[e.jsxs("div",{className:"feature-strip-item",children:[e.jsx("div",{className:"strip-icon",children:e.jsx("i",{className:"ti ti-rocket"})}),e.jsx("h5",{children:"Get Seen Faster"}),e.jsx("p",{children:"Verified, boosted profiles jump the queue and get featured on our homepage."}),e.jsxs(t,{href:i("user.talents"),className:"strip-link",children:["Find Skilled People ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"feature-strip-item",children:[e.jsx("div",{className:"strip-icon",children:e.jsx("i",{className:"ti ti-briefcase"})}),e.jsx("h5",{children:"Never Miss the Right Job"}),e.jsx("p",{children:"Gigs and roles matched to your actual skills, not keyword spam."}),e.jsxs(t,{href:i("user.jobs.index"),className:"strip-link",children:["Start Exploring ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"feature-strip-item",children:[e.jsx("div",{className:"strip-icon",children:e.jsx("i",{className:"ti ti-users"})}),e.jsx("h5",{children:"Build a Network That Works"}),e.jsx("p",{children:"Meet the people and collaborators who move a career forward."}),e.jsxs(t,{href:i("talent.connections-room"),className:"strip-link",children:["Skill Connect ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})})}),e.jsx("section",{className:"fc-problem",id:"problem",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-head text-center",style:{maxWidth:680,margin:"0 auto 0"},children:[e.jsx("span",{className:"eyebrow",children:"The Problem"}),e.jsx("h2",{children:"Brilliant skills, disconnected from opportunity."})]}),e.jsxs("div",{className:"problem-grid",children:[e.jsxs("div",{className:"problem-card",children:[e.jsx("span",{className:"problem-icon","aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9"}),e.jsx("ellipse",{cx:"12",cy:"12",rx:"9",ry:"3.2"}),e.jsx("path",{d:"M6.5 9.5c1.4 1 3.4 1.6 5.5 1.6s4.1-.6 5.5-1.6"})]})}),e.jsx("h5",{children:"The Unseen Void"}),e.jsx("p",{children:"Thousands of brilliant technical minds and competition winners disappear from the grid right after graduation."})]}),e.jsxs("div",{className:"problem-card",children:[e.jsx("span",{className:"problem-icon","aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M9 3v4M15 3v4"}),e.jsx("path",{d:"M7 7h10v4a5 5 0 0 1-10 0V7Z"}),e.jsx("path",{d:"M12 16v3M9 21h6"})]})}),e.jsx("h5",{children:"The Connection Deficit"}),e.jsx("p",{children:"Skilled graduates often struggle to find the professional networks and opportunities needed to build careers around their expertise."})]}),e.jsxs("div",{className:"problem-card",children:[e.jsx("span",{className:"problem-icon","aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 3 2.5 20h19L12 3Z",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 9.5v4.2"}),e.jsx("circle",{cx:"12",cy:"17",r:"0.9",fill:"currentColor",stroke:"none"})]})}),e.jsx("h5",{children:"The Solution Shortage"}),e.jsx("p",{children:"Society's biggest challenges persist while the exact experts trained to solve them remain disconnected and underemployed."})]})]})]})}),e.jsx("section",{className:"fc-solution",id:"solution",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-head text-center",style:{maxWidth:680,margin:"0 auto"},children:[e.jsx("span",{className:"eyebrow",children:"The Solution"}),e.jsx("h2",{children:"One ecosystem. Multiple pathways."})]}),e.jsx("div",{className:"pathway-row",children:j.map((r,s)=>e.jsxs(v.Fragment,{children:[e.jsxs("span",{className:"pathway-chip",children:[e.jsx("i",{className:`ti ${r.icon}`})," ",r.label]}),s<j.length-1&&e.jsx("span",{className:"pathway-arrow",children:"→"})]},r.label))}),e.jsx("div",{className:"fc-section-head text-center",style:{maxWidth:680,margin:"56px auto 0"},children:e.jsx("span",{className:"eyebrow",children:"The Future Connect Difference"})}),e.jsx("div",{className:"difference-row",children:w.map((r,s)=>e.jsxs(v.Fragment,{children:[e.jsx("span",{className:"difference-step",children:r}),s<w.length-1&&e.jsx("span",{className:"pathway-arrow",children:"→"})]},r))})]})}),e.jsx("section",{className:"fc-feature-section alt",id:"skills",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"feature-panel-card",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-sparkles"})," Skills Marketplace"]}),e.jsxs("h2",{children:["Turn your skills ",e.jsx("span",{children:"into your next client."})]}),e.jsx("p",{children:"Get verified, showcase your best work, and turn profile views into paying opportunities."}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"Get verified and build instant credibility"}),e.jsx("li",{children:"Feature your work on our homepage"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},children:[e.jsxs(t,{href:i("user.talents"),className:"btn-fc-primary",children:["Get Discovered ",e.jsx("i",{className:"ti ti-arrow-right"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("div",{className:"avatar-stack",children:b.map((r,s)=>e.jsx("img",{src:x(r,s+1),alt:""},r.id??s))}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"var(--accent)",fontSize:"0.8rem"},children:"★★★★★ 4.8/5"}),e.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--text-3)"},children:[a,"+ skilled people already in"]})]})]})]})]}),e.jsx("div",{className:"col-lg-6 feature-img-wrap",children:e.jsx("img",{src:n.skills,alt:"Skilled person showcasing a portfolio"})})]})})})}),e.jsx("section",{className:"fc-feature-section",id:"learning",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"feature-panel-card",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-school"})," Learning Center"]}),e.jsxs("h2",{children:["The skills gap ends ",e.jsx("span",{children:"here."})]}),e.jsx("p",{children:"Short, sharp micro-courses taught by people doing the work right now."}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"Finish a course in a week, not a semester"}),e.jsx("li",{children:"Shareable certificates for your profile"})]}),e.jsxs(t,{href:i("user.courses"),className:"btn-fc-primary",children:["Start Learning Free ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsx("div",{className:"col-lg-6 feature-img-wrap",children:e.jsx("img",{src:n.learning,alt:"Person learning online"})})]})})})}),e.jsx("section",{className:"fc-feature-section alt",id:"opportunities",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"feature-panel-card",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-briefcase"})," Opportunities"]}),e.jsxs("h2",{children:["Real roles. ",e.jsx("span",{children:"Zero noise."})]}),e.jsx("p",{children:"Skip the open job boards. Get matched with verified skilled people and real work."}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"Post roles in minutes"}),e.jsx("li",{children:"Set alerts so the right match finds you"})]}),e.jsxs(t,{href:i("user.jobs.index"),className:"btn-fc-primary",children:["Browse Open Roles ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsx("div",{className:"col-lg-6 feature-img-wrap",children:e.jsx("img",{src:n.jobs,alt:"Person reviewing job opportunities"})})]})})})}),e.jsx("section",{className:"fc-feature-section",id:"connect",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"feature-panel-card",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsx("div",{className:"col-lg-5",children:e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-6",children:e.jsx("img",{src:n.connect1,alt:"Two skilled people collaborating at a laptop",className:"img-fluid",style:{borderRadius:"var(--r-md)",width:"100%",height:"260px",objectFit:"cover"}})}),e.jsx("div",{className:"col-6",children:e.jsx("img",{src:n.connect2,alt:"Colleagues talking together",className:"img-fluid",style:{borderRadius:"var(--r-md)",width:"100%",height:"260px",objectFit:"cover"}})})]})}),e.jsxs("div",{className:"col-lg-7",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-users"})," Connection Room"]}),e.jsxs("h2",{children:["Your next break ",e.jsx("span",{children:"starts with one message."})]}),e.jsx("p",{children:"A private space for verified skilled people to message, meet, and collaborate."}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"A diverse, verified professional network"}),e.jsx("li",{children:"A simple, distraction-free way to connect"})]}),e.jsxs(t,{href:i("talent.connections-room"),className:"btn-fc-primary",children:["Join the Room ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})})})}),e.jsx("section",{className:"fc-feature-section alt",id:"marketplace",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"feature-panel-card",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-shopping-bag"})," Marketplace"]}),e.jsxs("h2",{children:["Turn what you make ",e.jsx("span",{children:"into what you earn."})]}),e.jsx("p",{children:"Sell your digital work with full payment protection, or shop with total confidence."}),e.jsxs("div",{className:"fc-provide-grid",children:[e.jsxs("div",{className:"fc-provide-box",children:[e.jsx("div",{className:"provide-icon",children:e.jsx("i",{className:"ti ti-shopping-cart"})}),e.jsx("h6",{children:"Browse Products"}),e.jsx("p",{children:"Secure payments through Future Connect."}),e.jsxs(t,{href:i("user.products.index"),className:"btn-fc-primary",style:{fontSize:"0.8rem",padding:"9px 18px"},children:["Explore ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"fc-provide-box",children:[e.jsx("div",{className:"provide-icon",children:e.jsx("i",{className:"ti ti-package"})}),e.jsx("h6",{children:"Sell a Product"}),e.jsx("p",{children:"Reach buyers already on the platform."}),e.jsxs("a",{"data-bs-toggle":"modal","data-bs-target":"#applySellerModal",className:"btn-fc-outline",style:{fontSize:"0.8rem",padding:"9px 18px",cursor:"pointer"},children:["Learn More ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"fc-provide-box",children:[e.jsx("div",{className:"provide-icon",children:e.jsx("i",{className:"ti ti-user-check"})}),e.jsx("h6",{children:"Become a Seller"}),e.jsx("p",{children:"Get paid instantly, minus a small platform fee."}),e.jsxs("a",{className:"btn-fc-primary","data-bs-toggle":"modal","data-bs-target":"#applySellerModal",style:{fontSize:"0.8rem",padding:"9px 18px",cursor:"pointer"},children:["Apply Now ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})]})})}),e.jsx("section",{className:"fc-feature-section fc-volunteer",id:"volunteer",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"feature-panel-card",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("span",{className:"fc-badge mb-3",children:[e.jsx("i",{className:"ti ti-heart-handshake"})," Volunteering"]}),e.jsx("p",{className:"tagline",children:"Give your skills, not just your time."}),e.jsxs("h2",{children:["Skills built to help ",e.jsx("span",{children:"should get the chance to."})]}),e.jsx("p",{children:"Organizations post real needs, and skilled people step up to volunteer their expertise — from a one-off consultation to an ongoing project."}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"Organizations submit a request for volunteering in minutes"}),e.jsx("li",{children:"Skilled people browse and apply to causes that match their expertise"})]}),e.jsxs("div",{style:{display:"flex",gap:14,flexWrap:"wrap"},children:[e.jsxs("a",{"data-bs-toggle":"modal","data-bs-target":"#requestVolunteeringModal",className:"btn-fc-primary",style:{cursor:"pointer"},children:["Request for Volunteering ",e.jsx("i",{className:"ti ti-arrow-right"})]}),e.jsx(t,{href:i("user.volunteer.index"),className:"btn-fc-outline",children:"Become a Volunteer"})]})]}),e.jsx("div",{className:"col-lg-6 feature-img-wrap",children:e.jsx("img",{src:n.volunteer,alt:"Volunteers working together"})})]})})})}),e.jsx("section",{className:"fc-how",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-head text-center",style:{maxWidth:560,margin:"0 auto 40px"},children:[e.jsx("span",{className:"eyebrow",children:"How It Works"}),e.jsx("h2",{children:"From sign-up to standout — in 3 steps"})]}),e.jsxs("div",{className:"steps-grid",children:[e.jsxs("div",{className:"step-card",children:[e.jsx("span",{className:"step-num",children:"01"}),e.jsx("h5",{children:"Create Your Profile"}),e.jsx("p",{children:"Sign up free and showcase your skills in minutes."}),e.jsxs(t,{href:i("user.register_skills"),className:"strip-link",children:["Get Started ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("span",{className:"step-num",children:"02"}),e.jsx("h5",{children:"Get Discovered & Rated"}),e.jsx("p",{children:"Organizations browse, rate, and build your reputation."}),e.jsxs(t,{href:i("user.talents"),className:"strip-link",children:["Explore Skills ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("span",{className:"step-num",children:"03"}),e.jsx("h5",{children:"Grow With the Community"}),e.jsx("p",{children:"Connect with peers and keep learning as you go."}),e.jsxs(t,{href:i("talent.connections-room"),className:"strip-link",children:["Connection Room ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})]})}),e.jsx("section",{className:"fc-who",id:"who",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-head text-center",style:{maxWidth:680,margin:"0 auto"},children:[e.jsx("span",{className:"eyebrow",children:"Who It Serves"}),e.jsx("h2",{children:"Built for everyone with skills."})]}),e.jsx("div",{className:"who-grid",children:C.map(r=>e.jsxs("div",{className:"who-card",children:[e.jsx("div",{className:"provide-icon",children:e.jsx("i",{className:`ti ${r.icon}`})}),e.jsx("h6",{children:r.title}),e.jsx("p",{children:r.desc})]},r.title))})]})}),e.jsx("section",{className:"fc-philosophy",children:e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"eyebrow",children:"The Core Philosophy"}),e.jsx("h2",{children:"Your knowledge is your capital."}),e.jsx("p",{children:"In a world rich in knowledge but limited in opportunity, Future Connect helps turn skills into connections, opportunities, collaboration, and income."})]})}),e.jsx("section",{className:"fc-partners",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-head text-center",style:{margin:"0 auto 8px"},children:[e.jsx("span",{className:"eyebrow",children:"Our Partners"}),e.jsx("h2",{children:"Building a global network"})]}),e.jsxs("p",{className:"partners-label",children:["Trusted by ",u.length,"+ partners worldwide"]}),e.jsx("div",{className:"partners-grid",children:u.map((r,s)=>e.jsx("div",{className:"partner-tile",children:e.jsx("img",{src:z(r),alt:r.name??"Partner"})},r.id??r.domain??s))})]})}),e.jsx("section",{className:"fc-testimonials",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row align-items-end mb-5",children:[e.jsx("div",{className:"col-md-7",children:e.jsxs("div",{className:"fc-section-head",style:{marginBottom:0},children:[e.jsx("span",{className:"eyebrow",children:"Testimonials"}),e.jsx("h2",{children:"Real stories from real skilled people"}),e.jsx("p",{children:"People who've grown their careers through Future Connect."})]})}),e.jsxs("div",{className:"col-md-5 text-md-end",children:[e.jsx("div",{className:"avatar-stack",style:{justifyContent:"flex-end",marginBottom:8},children:h.map((r,s)=>e.jsx("img",{src:x(r.talent,s+1),alt:""},r.id??s))}),e.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-3)"},children:"Building a global talent community"})]})]}),e.jsx("div",{className:"testimonial-grid d-none d-md-grid",children:h.map((r,s)=>{var c,d,m;return e.jsxs("div",{className:"testimonial-card",children:[e.jsxs("div",{className:"testimonial-head",children:[e.jsx("img",{src:x(r.talent,s+1),alt:""}),e.jsxs("div",{children:[e.jsx("div",{className:"testimonial-name",children:((c=r.talent)==null?void 0:c.name)??"Skilled Person"}),e.jsx("div",{className:"testimonial-role",children:r.title??"Creative Professional"})]}),e.jsx("div",{className:"testimonial-stars",children:e.jsx(N,{rating:r.rating})})]}),e.jsx("div",{className:"testimonial-body",children:e.jsx("p",{children:r.content??"Future Connect helped me turn my skills into steady, real opportunities."})}),((d=r.talent)==null?void 0:d.username)&&e.jsxs("div",{className:"testimonial-support",children:[e.jsx("i",{className:"ti ti-heart"})," Support @",r.talent.username]}),e.jsxs("div",{className:"testimonial-loc",children:[e.jsx("i",{className:"ti ti-map-pin",style:{color:"var(--accent)"}}),((m=r.talent)==null?void 0:m.address)??"Kigali, Rwanda"]})]},r.id??s)})}),e.jsx("div",{id:"testimonialCarousel",className:"carousel slide d-md-none",ref:f,children:e.jsx("div",{className:"carousel-inner",children:h.map((r,s)=>{var c,d,m;return e.jsx("div",{className:`carousel-item${s===0?" active":""}`,children:e.jsxs("div",{className:"testimonial-card",style:{margin:"0 auto",maxWidth:380},children:[e.jsxs("div",{className:"testimonial-head",children:[e.jsx("img",{src:x(r.talent,s+1),alt:""}),e.jsxs("div",{children:[e.jsx("div",{className:"testimonial-name",children:((c=r.talent)==null?void 0:c.name)??"Skilled Person"}),e.jsx("div",{className:"testimonial-role",children:r.title??"Creative Professional"})]}),e.jsx("div",{className:"testimonial-stars",children:e.jsx(N,{rating:r.rating})})]}),e.jsx("div",{className:"testimonial-body",children:e.jsx("p",{children:r.content??"Future Connect helped me turn my skills into steady, real opportunities."})}),((d=r.talent)==null?void 0:d.username)&&e.jsxs("div",{className:"testimonial-support",children:[e.jsx("i",{className:"ti ti-heart"})," Support @",r.talent.username]}),e.jsxs("div",{className:"testimonial-loc",children:[e.jsx("i",{className:"ti ti-map-pin",style:{color:"var(--accent)"}}),((m=r.talent)==null?void 0:m.address)??"Kigali, Rwanda"]})]})},r.id??s)})})})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"fc-cta",children:[e.jsx("div",{className:"fc-cta-glow"}),e.jsx("div",{className:"row align-items-center",children:e.jsxs("div",{className:"col-md-7",style:{position:"relative"},children:[e.jsx("span",{className:"eyebrow",style:{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--accent)",fontWeight:600,display:"block",marginBottom:10},children:"Join Future Connect"}),e.jsx("h2",{children:"Your skills deserve to be seen."}),e.jsx("p",{children:"Join a growing community of verified skilled people building real careers."}),e.jsxs("div",{className:"hero-ctas",style:{marginBottom:6},children:[e.jsxs(t,{href:i("user.register_skills"),className:"btn-fc-primary",children:["Get Started Today ",e.jsx("i",{className:"ti ti-arrow-right"})]}),e.jsx(t,{href:i("user.talents"),className:"btn-fc-outline",children:"Browse Skills"})]}),e.jsx("p",{className:"fc-cta-note",children:"No credit card. No commitment."})]})})]})}),e.jsx("div",{className:"modal fade",id:"requestVolunteeringModal",tabIndex:"-1","aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",style:{background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"var(--r-lg)"},children:[e.jsxs("div",{className:"modal-header",style:{borderBottom:"1px solid var(--border)"},children:[e.jsx("h5",{className:"modal-title",style:{color:"var(--text-1)",fontFamily:"var(--font-head)",fontWeight:700},children:"Request for Volunteering"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsxs("form",{method:"POST",action:i("user.volunteer.request.store"),children:[e.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:14},children:[e.jsx("p",{style:{color:"var(--text-2)",fontSize:"0.85rem",marginBottom:0},children:"Tell us what your organization or cause needs, and we'll match you with skilled people ready to volunteer."}),e.jsx("input",{type:"text",name:"organization",placeholder:"Organization / cause name",className:"form-control",required:!0}),e.jsx("input",{type:"email",name:"email",placeholder:"Contact email",className:"form-control",required:!0}),e.jsx("input",{type:"text",name:"skills_needed",placeholder:"Skills needed (e.g. design, web development)",className:"form-control",required:!0}),e.jsx("textarea",{name:"details",rows:"4",placeholder:"Describe the volunteering opportunity",className:"form-control",required:!0})]}),e.jsxs("div",{className:"modal-footer",style:{borderTop:"1px solid var(--border)"},children:[e.jsx("button",{type:"button",className:"btn-fc-outline","data-bs-dismiss":"modal",children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-fc-primary",children:["Submit Request ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})]})})})]})}P.layout=a=>e.jsx(k,{children:a});export{P as default};
