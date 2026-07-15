import{r as w,j as e,H as k,L as i,d as z}from"./app-B7IJkTeC.js";import{G as C}from"./GuestLayout-Dmb6shQU.js";function L({courses:a,categories:n=[]}){const o=(a==null?void 0:a.data)??[],c=(a==null?void 0:a.links)??[],l=(a==null?void 0:a.total)??o.length,j=o.length,[d,N]=w.useState("all"),p=o.filter(r=>d==="all"||(r.tag??"featured").toLowerCase()===d);function g(r){var t;return r.courses_count??((t=r.courses)==null?void 0:t.length)??0}function m(r){return r.avg_rating!=null?Number(r.avg_rating):Array.isArray(r.feedback)&&r.feedback.length?r.feedback.reduce((t,s)=>t+s.rating,0)/r.feedback.length:0}function y(r){return r.reviews_count!=null?r.reviews_count:Array.isArray(r.feedback)?r.feedback.length:0}return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Learning Center and Courses"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
        :root {
          --bg:         #0e1618;
          --bg2:        #131d20;
          --bg3:        #18242a;
          --border:     rgba(255,255,255,0.07);
          --green:      #48d597;
          --green-dim:  rgba(0,166,103,0.12);
          --green-glow: rgba(0,166,103,0.3);
          --text:       #e8eef0;
          --muted:      #7a9199;
          --white:      #ffffff;
          --font-head:  'Syne', sans-serif;
          --font-body:  'DM Sans', sans-serif;
          --radius:     12px;
          --radius-lg:  18px;
          --t:          .25s ease;
        }

        *, *::before, *::after { box-sizing: border-box; }
        body { background: var(--bg); font-family: var(--font-body); color: var(--text); }

        /* ─── HERO ─── */
        .lc-hero {
          position: relative;
          background: var(--bg2);
          border-bottom: 1px solid var(--border);
          padding: 72px 0 60px;
          overflow: hidden;
        }

        .lc-hero::before {
          content: '';
          position: absolute;
          top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 500px;
          background: radial-gradient(ellipse, rgba(0,166,103,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .lc-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,166,103,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,166,103,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green-dim);
          border: 1px solid rgba(0,166,103,0.3);
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 11px; font-weight: 600;
          color: var(--green); letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero-eyebrow span {
          width: 6px; height: 6px;
          background: var(--green); border-radius: 50%;
          animation: pdot 2s infinite;
        }

        @keyframes pdot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(1.5); }
        }

        .lc-hero h1 {
          font-family: var(--font-head);
          font-size: clamp(1.9rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 16px;
          position: relative; z-index: 1;
        }

        .lc-hero h1 .accent { color: var(--green); }

        .lc-hero p.hero-sub {
          color: var(--muted);
          font-size: 1rem;
          max-width: 500px;
          line-height: 1.7;
          margin-bottom: 32px;
          position: relative; z-index: 1;
        }

        .hero-cta-row {
          display: flex; gap: 12px; flex-wrap: wrap;
          position: relative; z-index: 1;
        }

        .hero-info-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          position: relative; z-index: 1;
        }

        .hi-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 18px;
          transition: var(--t);
        }

        .hi-card:hover { border-color: rgba(0,166,103,0.3); transform: translateY(-2px); }

        .hi-card-icon {
          width: 36px; height: 36px;
          background: var(--green-dim);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: var(--green); font-size: 16px;
          margin-bottom: 12px;
        }

        .hi-card h6 {
          font-family: var(--font-head);
          font-size: 0.88rem; font-weight: 700;
          color: var(--white); margin-bottom: 5px;
        }

        .hi-card p { font-size: 0.78rem; color: var(--muted); margin: 0 0 12px; line-height: 1.5; }

        .hi-card a {
          font-size: 0.78rem; color: var(--green); font-weight: 600;
          text-decoration: none; display: inline-flex; align-items: center; gap: 5px;
          transition: gap var(--t);
        }

        .hi-card a:hover { gap: 9px; }

        .m-hero-card {
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px 22px;
          text-align: center;
          position: relative; z-index: 1;
        }

        .m-hero-card h4 {
          font-family: var(--font-head); font-weight: 700;
          color: var(--white); margin-bottom: 10px;
        }

        .m-hero-card p { color: var(--muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 20px; }

        /* ─── BUTTONS ─── */
        .btn-green {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green); color: #fff;
          font-family: var(--font-body); font-weight: 600; font-size: 0.88rem;
          padding: 11px 22px; border-radius: var(--radius);
          border: none; cursor: pointer; text-decoration: none;
          transition: var(--t);
        }
        .btn-green:hover { background: #00bf76; color:#fff; transform: translateY(-2px); box-shadow: 0 0 18px var(--green-glow); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--text);
          font-family: var(--font-body); font-weight: 500; font-size: 0.88rem;
          padding: 11px 22px; border-radius: var(--radius);
          border: 1px solid var(--border); cursor: pointer; text-decoration: none;
          transition: var(--t);
        }
        .btn-outline:hover { border-color: var(--green); color: var(--green); background: var(--green-dim); }

        .carousel-indicators [data-bs-target] {
          background-color: var(--green); border-radius: 2px;
          width: 18px; height: 3px; border: none; opacity: 0.4;
          transition: opacity var(--t), width var(--t);
        }
        .carousel-indicators .active { opacity: 1; width: 28px; }

        /* ─── STATS BAR ─── */
        .stats-bar {
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          padding: 20px 0;
        }

        .stat-item {
          text-align: center; padding: 0 20px;
          border-right: 1px solid var(--border);
        }
        .stat-item:last-child { border-right: none; }
        .stat-num { font-family: var(--font-head); font-size: 1.6rem; font-weight: 800; color: var(--green); display: block; }
        .stat-label { font-size: 0.72rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }

        /* ─── SECTION LABELS ─── */
        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--green); margin-bottom: 8px;
        }
        .section-label::before {
          content:''; display:inline-block;
          width:18px; height:2px; background:var(--green); border-radius:1px;
        }

        .section-title {
          font-family: var(--font-head);
          font-size: clamp(1.3rem, 2.5vw, 1.9rem);
          font-weight: 800; color: var(--white);
          letter-spacing: -0.02em; margin-bottom: 6px;
        }

        .section-sub { color: var(--muted); font-size: 0.9rem; }

        /* ─── CATEGORY STRIP ─── */
        .cat-strip { padding: 48px 0 0; }

        .cat-scroll {
          display: flex; gap: 10px; overflow-x: auto;
          padding-bottom: 4px; scrollbar-width: none; margin-top: 20px;
        }
        .cat-scroll::-webkit-scrollbar { display: none; }

        .cat-chip {
          flex-shrink: 0;
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 50px; padding: 8px 18px;
          font-size: 0.8rem; font-weight: 500;
          color: var(--muted); text-decoration: none; white-space: nowrap;
          transition: var(--t);
        }
        .cat-chip:hover {
          border-color: var(--green); color: var(--green); background: var(--green-dim);
        }

        .cat-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 12px; margin-top: 20px;
        }

        .cat-card-item {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 18px 14px;
          text-decoration: none; display: block;
          text-align: center; transition: var(--t);
          position: relative; overflow: hidden;
        }

        .cat-card-item::after {
          content:''; position:absolute; bottom:0; left:0; right:0;
          height:0; background:var(--green-dim);
          transition: height var(--t);
        }

        .cat-card-item:hover {
          border-color: rgba(0,166,103,0.4);
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.3);
        }
        .cat-card-item:hover::after { height: 100%; }
        .cat-card-item:hover .cci-icon { background: var(--green); color: #fff; }
        .cat-card-item:hover .cci-name { color: var(--green); }

        .cci-icon {
          width: 38px; height: 38px;
          background: var(--green-dim); border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: var(--green); font-size: 16px;
          margin: 0 auto 12px;
          position: relative; z-index: 1; transition: var(--t);
        }

        .cci-name {
          font-family: var(--font-head); font-size: 0.82rem; font-weight: 700;
          color: var(--text); margin-bottom: 4px;
          position: relative; z-index: 1; transition: color var(--t);
        }

        .cci-count { font-size: 0.72rem; color: var(--muted); position: relative; z-index:1; }

        /* ─── FILTER BAR ─── */
        .filter-bar {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 14px 20px;
          display: flex; align-items: center; flex-wrap: wrap;
          gap: 10px; justify-content: space-between;
          margin-bottom: 28px;
        }

        .filter-tabs { display: flex; gap: 6px; flex-wrap: wrap; }

        .filter-tab {
          padding: 7px 16px; border-radius: 50px;
          font-size: 0.78rem; font-weight: 600;
          border: 1px solid var(--border);
          background: transparent; color: var(--muted);
          cursor: pointer; transition: var(--t);
        }
        .filter-tab:hover { border-color: var(--green); color: var(--green); }
        .filter-tab.active {
          background: var(--green); border-color: var(--green);
          color: #fff; box-shadow: 0 0 10px var(--green-glow);
        }

        .courses-count {
          font-size: 0.8rem; color: var(--muted);
        }
        .courses-count strong { color: var(--green); font-family: var(--font-head); }

        /* ─── COURSE CARDS ─── */
        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .course-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden; display: flex; flex-direction: column;
          transition: transform var(--t), border-color var(--t), box-shadow var(--t);
        }

        .course-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0,166,103,0.35);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .course-thumb {
          position: relative; overflow: hidden;
          height: 190px;
        }

        .course-thumb img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.4s ease;
        }

        .course-card:hover .course-thumb img { transform: scale(1.06); }

        .course-thumb-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(14,22,24,0.7) 0%, transparent 50%);
        }

        .thumb-badge {
          position: absolute; top: 12px; left: 12px;
          background: var(--green); color: #fff;
          font-size: 0.7rem; font-weight: 700;
          padding: 4px 10px; border-radius: 50px;
          letter-spacing: 0.05em;
        }

        .thumb-price {
          position: absolute; bottom: 12px; right: 12px;
          background: var(--bg2); color: var(--green);
          font-family: var(--font-head); font-size: 0.88rem; font-weight: 800;
          padding: 4px 12px; border-radius: 50px;
          border: 1px solid rgba(0,166,103,0.3);
        }

        .course-body { padding: 18px; flex: 1; display: flex; flex-direction: column; }

        .course-cat {
          font-size: 0.7rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--green); margin-bottom: 8px;
          text-decoration: none;
        }

        .course-title {
          font-family: var(--font-head); font-size: 0.95rem; font-weight: 700;
          color: var(--white); margin-bottom: 12px; line-height: 1.4;
          text-decoration: none; display: block;
          overflow: hidden; display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          transition: color var(--t);
        }
        .course-title:hover { color: var(--green); }

        .course-rating {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.78rem; color: var(--muted);
          margin-bottom: 14px;
        }

        .course-rating .stars { color: #f59e0b; font-size: 11px; }
        .course-rating .score { color: var(--text); font-weight: 600; }

        .course-instructor {
          display: flex; align-items: center; gap: 10px;
          padding-top: 14px; margin-top: auto;
          border-top: 1px solid var(--border);
        }

        .inst-avatar {
          width: 30px; height: 30px;
          border-radius: 50%; object-fit: cover;
          border: 1px solid var(--border);
        }

        .inst-info { flex: 1; min-width: 0; }
        .inst-name { font-size: 0.78rem; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .inst-loc  { font-size: 0.7rem; color: var(--muted); }

        .course-view-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--green-dim); border: 1px solid rgba(0,166,103,0.2);
          color: var(--green); border-radius: 50px;
          padding: 6px 14px; font-size: 0.75rem; font-weight: 700;
          text-decoration: none; transition: var(--t); flex-shrink: 0;
        }
        .course-view-btn:hover { background: var(--green); color:#fff; border-color:var(--green); }

        .empty-state {
          grid-column: 1/-1; text-align: center;
          padding: 80px 20px; color: var(--muted);
        }
        .empty-state i { font-size: 3rem; color: var(--border); display: block; margin-bottom: 16px; }
        .empty-state h4 { font-family: var(--font-head); color: var(--text); margin-bottom: 8px; }

        /* ─── PAGINATION ─── */
        .pagination-wrap {
          display: flex; justify-content: center;
          gap: 8px; margin-top: 48px; flex-wrap: wrap;
        }

        .page-btn {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          border-radius: var(--radius); border: 1px solid var(--border);
          background: var(--bg2); color: var(--text);
          font-size: 0.85rem; cursor: pointer; text-decoration: none;
          transition: var(--t);
        }
        .page-btn:hover, .page-btn.active {
          border-color: var(--green); color: var(--green); background: var(--green-dim);
        }
        .page-btn.disabled { opacity: 0.3; pointer-events: none; }

        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg:         #f6faf8;
          --bg2:        #ffffff;
          --bg3:        #eef4f1;
          --border:     rgba(0, 100, 60, 0.1);
          --green:      #00a667;
          --green-dim:  rgba(0, 166, 103, 0.08);
          --green-glow: rgba(0, 166, 103, 0.22);
          --text:       #10201b;
          --muted:      #5b7a70;
          --white:      #10201b;
        }

        [data-h-theme="light"] body {
          background: var(--bg);
        }

        [data-h-theme="light"] .lc-hero::after {
          background-image:
            linear-gradient(rgba(0, 100, 60, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 100, 60, 0.06) 1px, transparent 1px);
        }

        [data-h-theme="light"] .lc-hero::before {
          background: radial-gradient(ellipse, rgba(0,166,103,0.08) 0%, transparent 70%);
        }

        [data-h-theme="light"] .course-thumb-overlay {
          background: linear-gradient(to top, rgba(16,32,27,0.35) 0%, transparent 50%);
        }

        [data-h-theme="light"] .thumb-price {
          border-color: rgba(0, 100, 60, 0.25);
        }
      `}),e.jsx("section",{className:"lc-hero",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("div",{className:"hero-eyebrow",children:[e.jsx("span",{})," Learning Center"]}),e.jsxs("h1",{children:["Where ",e.jsx("span",{className:"accent",children:"knowledge"}),e.jsx("br",{}),"meets opportunity"]}),e.jsx("p",{className:"hero-sub",children:"Explore courses and learning materials crafted by skilled professionals — enhance your skills and advance your career today."}),e.jsxs("div",{className:"hero-cta-row",children:[e.jsxs("a",{href:"#courses",className:"btn-green",children:[e.jsx("i",{className:"ti ti-book-2"})," Explore Courses"]}),e.jsxs(i,{href:route("register"),className:"btn-outline",children:[e.jsx("i",{className:"ti ti-users"})," Join Platform"]})]})]}),e.jsx("div",{className:"col-lg-6 d-none d-lg-block",children:e.jsxs("div",{className:"hero-info-cards",children:[e.jsxs("div",{className:"hi-card",children:[e.jsx("div",{className:"hi-card-icon",children:e.jsx("i",{className:"ti ti-certificate"})}),e.jsx("h6",{children:"Certified Courses"}),e.jsx("p",{children:"Learn from verified professionals with recognized certifications."}),e.jsxs("a",{href:"#courses",children:["Browse now ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"hi-card",children:[e.jsx("div",{className:"hi-card-icon",children:e.jsx("i",{className:"ti ti-clock"})}),e.jsx("h6",{children:"Learn at Your Pace"}),e.jsx("p",{children:"All courses available on-demand, accessible anytime anywhere."}),e.jsxs("a",{href:"#courses",children:["Get started ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"hi-card",children:[e.jsx("div",{className:"hi-card-icon",children:e.jsx("i",{className:"ti ti-currency-dollar"})}),e.jsx("h6",{children:"Free & Paid Content"}),e.jsx("p",{children:"Access free courses or invest in premium skill-building content."}),e.jsxs("a",{href:"#courses",children:["Explore free ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"hi-card",children:[e.jsx("div",{className:"hi-card-icon",children:e.jsx("i",{className:"ti ti-world"})}),e.jsx("h6",{children:"Africa-Focused"}),e.jsx("p",{children:"Skills and insights tailored for professionals across Africa."}),e.jsxs(i,{href:route("register"),children:["Join community ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})}),e.jsxs("div",{className:"col-12 d-lg-none",children:[e.jsxs("div",{id:"heroCarousel",className:"carousel slide","data-bs-ride":"carousel","data-bs-interval":"5000",children:[e.jsxs("div",{className:"carousel-indicators",style:{bottom:"-30px"},children:[e.jsx("button",{type:"button","data-bs-target":"#heroCarousel","data-bs-slide-to":"0",className:"active"}),e.jsx("button",{type:"button","data-bs-target":"#heroCarousel","data-bs-slide-to":"1"})]}),e.jsxs("div",{className:"carousel-inner",children:[e.jsx("div",{className:"carousel-item active",children:e.jsxs("div",{className:"m-hero-card",children:[e.jsx("div",{className:"hi-card-icon mx-auto mb-3",children:e.jsx("i",{className:"ti ti-book-2"})}),e.jsx("h4",{children:"Knowledge Meets Opportunity"}),e.jsx("p",{children:"Explore courses and categories to enhance your skills and advance your career."}),e.jsx("a",{href:"#courses",className:"btn-green mx-auto",children:"Explore Courses"})]})}),e.jsx("div",{className:"carousel-item",children:e.jsxs("div",{className:"m-hero-card",children:[e.jsx("div",{className:"hi-card-icon mx-auto mb-3",children:e.jsx("i",{className:"ti ti-users"})}),e.jsx("h4",{children:"Unlock New Opportunities"}),e.jsx("p",{children:"Join the platform and share your skills with the community."}),e.jsx(i,{href:route("register"),className:"btn-green mx-auto",children:"Join Platform"})]})})]})]}),e.jsx("div",{style:{height:"40px"}})]})]})})}),e.jsx("div",{className:"stats-bar",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-0",children:[e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-item",children:[e.jsxs("span",{className:"stat-num",children:[l,e.jsx("span",{style:{color:"var(--green)"},children:"+"})]}),e.jsx("span",{className:"stat-label",children:"Courses"})]})}),e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-item",children:[e.jsxs("span",{className:"stat-num",children:[n.length,e.jsx("span",{style:{color:"var(--green)"},children:"+"})]}),e.jsx("span",{className:"stat-label",children:"Categories"})]})}),e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-item",children:[e.jsxs("span",{className:"stat-num",children:["74K",e.jsx("span",{style:{color:"var(--green)"},children:"+"})]}),e.jsx("span",{className:"stat-label",children:"Learners"})]})}),e.jsx("div",{className:"col-6 col-md-3",children:e.jsxs("div",{className:"stat-item",children:[e.jsxs("span",{className:"stat-num",children:["Free",e.jsx("span",{style:{color:"var(--green)"},children:"+"})]}),e.jsx("span",{className:"stat-label",children:"Content Available"})]})})]})})}),e.jsx("div",{className:"section-divider"}),e.jsx("div",{className:"cat-strip",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"section-label",children:"Browse"}),e.jsx("div",{className:"section-title",children:"Trending Learning Categories"}),e.jsx("p",{className:"section-sub",children:"View all learning materials and courses offered by skilled people"}),e.jsx("div",{className:"cat-scroll d-lg-none",children:n.map(r=>e.jsxs(i,{href:`/courses/category/${r.slug}`,className:"cat-chip",children:[r.name,e.jsxs("span",{style:{color:"var(--green)",marginLeft:"4px"},children:["(",g(r),")"]})]},r.id))}),e.jsx("div",{className:"cat-cards-grid d-none d-lg-grid",children:n.map(r=>e.jsxs(i,{href:`/courses/category/${r.slug}`,className:"cat-card-item",children:[e.jsx("div",{className:"cci-icon",children:e.jsx("i",{className:"ti ti-book"})}),e.jsx("div",{className:"cci-name",children:r.name}),e.jsxs("div",{className:"cci-count",children:[g(r)," courses"]})]},r.id))})]})}),e.jsx("div",{className:"section-divider",style:{marginTop:"48px"}}),e.jsxs("div",{className:"container py-5",id:"courses",children:[e.jsx("div",{className:"d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"section-label",children:"Courses"}),e.jsx("div",{className:"section-title",children:"Learning Center & Courses"}),e.jsxs("p",{className:"section-sub",children:["Browse listing & more —"," ",e.jsxs("strong",{style:{color:"var(--green)",fontFamily:"var(--font-head)"},children:[l," courses"]})," ","available"]})]})}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("div",{className:"filter-tabs",children:A.map(r=>e.jsx("button",{className:`filter-tab${d===r.value?" active":""}`,onClick:()=>N(r.value),children:r.label},r.value))}),e.jsxs("span",{className:"courses-count d-none d-md-block",children:["Showing ",e.jsx("strong",{children:j})," of ",e.jsx("strong",{children:l})," courses"]})]}),e.jsx("div",{className:"course-grid",id:"courseGrid",children:p.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-books"}),e.jsx("h4",{children:"No courses found"}),e.jsx("p",{children:"Try a different category or check back later."})]}):p.map(r=>{var t,s,x,h,b,f,v;return e.jsx("div",{className:"course-item",children:e.jsxs("div",{className:"course-card",children:[e.jsxs("div",{className:"course-thumb",children:[e.jsx(i,{href:route("user.courses.show",r.slug),children:e.jsx("img",{src:`/image/thumbnails/${r.thumbnail}`,alt:r.title})}),e.jsx("div",{className:"course-thumb-overlay"}),e.jsx("span",{className:"thumb-badge",children:((t=r.category)==null?void 0:t.name)??"Course"}),e.jsx("span",{className:"thumb-price",children:r.is_free?"Free":`$${Number(r.price).toFixed(2)}`})]}),e.jsxs("div",{className:"course-body",children:[e.jsx(i,{href:route("user.courses",{category:(s=r.category)==null?void 0:s.slug}),className:"course-cat",children:((x=r.category)==null?void 0:x.name)??""}),e.jsx(i,{href:route("user.courses.show",r.slug),className:"course-title",children:r.title}),e.jsxs("div",{className:"course-rating",children:[e.jsx("span",{className:"stars",children:Array.from({length:5}).map((S,u)=>e.jsx("i",{className:u<Math.round(m(r))?"ti ti-star-filled":"ti ti-star"},u))}),e.jsx("span",{className:"score",children:m(r).toFixed(1)}),e.jsxs("span",{children:["(",y(r)," reviews)"]})]}),e.jsxs("div",{className:"course-instructor",children:[e.jsx("img",{className:"inst-avatar",src:(h=r.talent)!=null&&h.image?`/image/talents/${r.talent.image}`:"/assets/img/user/profile.jpg",alt:((b=r.talent)==null?void 0:b.name)??""}),e.jsxs("div",{className:"inst-info",children:[e.jsx("div",{className:"inst-name",children:((f=r.talent)==null?void 0:f.name)??"Unknown"}),e.jsxs("div",{className:"inst-loc",children:[e.jsx("i",{className:"ti ti-map-pin",style:{fontSize:"10px"}})," ",((v=r.talent)==null?void 0:v.region)??"N/A"]})]}),e.jsx(i,{href:route("user.courses.show",r.slug),className:"course-view-btn",children:e.jsx("i",{className:"feather-arrow-right"})})]})]})]})},r.id)})}),c.length>3&&e.jsx("div",{className:"pagination-wrap",children:c.map((r,t)=>e.jsx("button",{className:`page-btn${r.active?" active":""}${r.url?"":" disabled"}`,onClick:()=>r.url&&z.get(r.url,{},{preserveScroll:!0}),dangerouslySetInnerHTML:{__html:r.label}},t))})]})]})}const A=[{value:"all",label:"All"},{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"featured",label:"Featured"},{value:"recommended",label:"Recommended"}];L.layout=a=>e.jsx(C,{children:a,title:"Learning Center and Courses",description:"Explore courses and learning materials crafted by skilled professionals — enhance your skills and advance your career today."});export{L as default};
