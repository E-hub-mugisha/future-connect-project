import{r as p,_ as u,u as j,j as e,H as y,L as s}from"./app-BO26Fp_i.js";import{G as N}from"./GuestLayout-RkVoz6LJ.js";const w={"user.jobs.index":"/jobs","user.jobs.browse":"/jobs/browse","user.jobs.store":"/jobs","user.talents":"/talents",register:"/register",login:"/login"},k=[{value:"full-time",label:"Full-time"},{value:"part-time",label:"Part-time"},{value:"freelance",label:"Freelance"},{value:"internship",label:"Internship"}],z=[{value:"entry",label:"Entry Level"},{value:"mid",label:"Mid Level"},{value:"senior",label:"Senior Level"}];function E({jobs:n={total:0},categories:m=[],routes:x={},assetBase:S=""}){const o=r=>x[r]||w[r]||"#",c=p.useRef(null),i=p.useRef(null);p.useEffect(()=>{let r=!1;return u(async()=>{const{Modal:t}=await import("./bootstrap.esm-ifhUiil8.js");return{Modal:t}},[]).then(({Modal:t})=>{r||c.current&&(i.current=new t(c.current))}),()=>{var t;r=!0,(t=i.current)==null||t.dispose()}},[]);const b=()=>{var r;return(r=i.current)==null?void 0:r.show()},d=()=>{var r;return(r=i.current)==null?void 0:r.hide()},g=(r={})=>{const t=new URLSearchParams;Object.entries(r).forEach(([v,l])=>{l!=null&&l!==""&&t.set(v,l)});const h=t.toString();return h?`${o("user.jobs.browse")}?${h}`:o("user.jobs.browse")},a=j({title:"",description:"",job_category_id:"",location:"",type:"full-time",experience_level:"entry",salary_range:"",skills:""}),f=r=>{r.preventDefault(),a.post(o("user.jobs.store"),{preserveScroll:!0,onSuccess:()=>{a.reset(),d()}})};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Explore Works & Jobs"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
        /* ╔══════════════════════════════════╗
       ║        DESIGN TOKENS             ║
       ╚══════════════════════════════════╝ */
        :root {
            --bg: #0e1618;
            --bg-card: #131e21;
            --bg-glass: rgba(255, 255, 255, 0.035);
            --bg-glass2: rgba(0, 166, 103, 0.08);
            --accent: #48d597;
            --accent-dim: #008f59;
            --accent-glow: rgba(0, 166, 103, 0.22);
            --border: rgba(255, 255, 255, 0.07);
            --border-h: rgba(0, 166, 103, 0.3);
            --text-1: #f0f4f3;
            --text-2: #8da4a0;
            --text-3: #4d6460;
            --font-head: 'Syne', sans-serif;
            --font-body: 'DM Sans', sans-serif;
            --r-sm: 8px;
            --r-md: 14px;
            --r-lg: 20px;
            --r-pill: 50px;
        }

        body {
            background: var(--bg) !important;
            color: var(--text-1);
            font-family: var(--font-body);
        }

        /* ── SHARED UTILS ── */
        .btn-fc-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--accent);
            color: #fff;
            border: none;
            border-radius: var(--r-pill);
            padding: 11px 26px;
            font-family: var(--font-head);
            font-size: 0.875rem;
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            transition: background .2s, transform .15s, box-shadow .2s;
            box-shadow: 0 4px 20px var(--accent-glow);
        }

        .btn-fc-primary:hover {
            background: var(--accent-dim);
            transform: translateY(-2px);
            box-shadow: 0 6px 30px var(--accent-glow);
            color: #fff;
        }

        .btn-fc-primary:disabled {
            opacity: 0.65;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .btn-fc-outline {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            color: var(--text-1);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            padding: 10px 22px;
            font-family: var(--font-head);
            font-size: 0.875rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: border-color .2s, color .2s, background .2s;
        }

        .btn-fc-outline:hover {
            border-color: var(--border-h);
            color: var(--accent);
            background: var(--bg-glass2);
        }

        .fc-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: var(--bg-glass2);
            border: 1px solid var(--border-h);
            color: var(--accent);
            border-radius: var(--r-pill);
            padding: 4px 14px;
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        .eyebrow {
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--accent);
            font-weight: 600;
            display: block;
            margin-bottom: 10px;
        }

        /* ══════════════════════════════════════
       HERO STRIP
    ══════════════════════════════════════ */
        .jobs-hero {
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            padding: 52px 0 40px;
            position: relative;
            overflow: hidden;
        }

        .jobs-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .jobs-hero-grid {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(rgba(0, 166, 103, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 166, 103, 0.03) 1px, transparent 1px);
            background-size: 48px 48px;
        }

        .jobs-hero-glow {
            position: absolute;
            bottom: -80px;
            right: -80px;
            width: 320px;
            height: 320px;
            border-radius: 50%;
            background: var(--accent-glow);
            filter: blur(90px);
            pointer-events: none;
        }

        .jobs-hero-inner {
            position: relative;
            z-index: 2;
        }

        .jobs-hero h1 {
            font-family: var(--font-head);
            font-size: clamp(1.8rem, 4vw, 2.8rem);
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 12px;
            line-height: 1.1;
        }

        .jobs-hero h1 span {
            color: var(--accent);
        }

        .jobs-hero p {
            color: var(--text-2);
            font-size: 0.95rem;
            max-width: 540px;
            line-height: 1.7;
            margin-bottom: 28px;
        }

        .hero-pills {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 28px;
        }

        .hero-pill {
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--bg-glass);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            padding: 8px 16px;
            font-size: 0.8rem;
            color: var(--text-2);
        }

        .hero-pill i {
            color: var(--accent);
        }

        .hero-pill strong {
            color: var(--text-1);
        }

        .hero-feature-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
            background: var(--border);
            border-radius: var(--r-md);
            overflow: hidden;
            margin-top: 40px;
        }

        @media(max-width:767px) {
            .hero-feature-row {
                grid-template-columns: 1fr;
            }
        }

        .hero-feature-item {
            background: var(--bg-card);
            padding: 22px 24px;
            transition: background .2s;
        }

        .hero-feature-item:hover {
            background: var(--bg-glass2);
        }

        .hero-feature-item h5 {
            font-family: var(--font-head);
            font-size: 0.92rem;
            font-weight: 700;
            color: var(--text-1);
            margin-bottom: 6px;
        }

        .hero-feature-item p {
            font-size: 0.8rem;
            color: var(--text-2);
            margin-bottom: 12px;
            line-height: 1.5;
        }

        .strip-link {
            font-size: 0.78rem;
            font-weight: 600;
            color: var(--accent);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            transition: gap .2s;
        }

        .strip-link:hover {
            gap: 8px;
        }

        .fi-icon {
            width: 36px;
            height: 36px;
            border-radius: var(--r-sm);
            background: var(--bg-glass2);
            border: 1px solid var(--border-h);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent);
            font-size: 0.9rem;
            margin-bottom: 12px;
        }

        /* ══════════════════════════════════════
       ABOUT SECTION
    ══════════════════════════════════════ */
        .about-section {
            padding: 70px 0;
        }

        .about-section h2 {
            font-family: var(--font-head);
            font-size: clamp(1.5rem, 3vw, 2.1rem);
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 16px;
            letter-spacing: -0.01em;
        }

        .about-section p.lead {
            color: var(--text-2);
            font-size: 0.95rem;
            line-height: 1.8;
            max-width: 560px;
            margin-bottom: 0;
        }

        .about-stats {
            display: flex;
            flex-direction: column;
            gap: 18px;
        }

        .about-stat {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-md);
            padding: 18px 20px;
            transition: border-color .2s;
        }

        .about-stat:hover {
            border-color: var(--border-h);
        }

        .about-stat h6 {
            font-family: var(--font-head);
            font-size: 0.88rem;
            font-weight: 700;
            color: var(--text-1);
            margin-bottom: 4px;
        }

        .about-stat p {
            font-size: 0.8rem;
            color: var(--text-2);
            margin: 0;
            line-height: 1.55;
        }

        /* ══════════════════════════════════════
       CATEGORY CARDS
    ══════════════════════════════════════ */
        .categories-section {
            padding: 20px 0 70px;
        }

        .job-cat-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 16px;
            margin-top: 32px;
        }

        .job-cat-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-md);
            padding: 22px 20px;
            text-decoration: none;
            display: block;
            transition: border-color .2s, transform .2s;
            position: relative;
            overflow: hidden;
        }

        .job-cat-card::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0; right: 0;
            height: 0;
            background: var(--bg-glass2);
            transition: height .2s;
            z-index: 0;
        }

        .job-cat-card:hover {
            border-color: var(--border-h);
            transform: translateY(-3px);
        }

        .job-cat-card:hover::after { height: 100%; }
        .job-cat-card > * { position: relative; z-index: 1; }

        .job-cat-card:hover .fi-icon {
            background: var(--accent);
            color: #fff;
            border-color: var(--accent);
        }

        .job-cat-name {
            font-family: var(--font-head);
            font-size: 0.92rem;
            font-weight: 700;
            color: var(--text-1);
            margin-bottom: 4px;
            transition: color .2s;
        }

        .job-cat-card:hover .job-cat-name { color: var(--accent); }

        .job-cat-count {
            font-size: 0.78rem;
            color: var(--text-3);
        }

        /* ══════════════════════════════════════
       JOIN CTA (gated access)
    ══════════════════════════════════════ */
        .join-cta {
            background: linear-gradient(135deg, var(--bg-card), var(--bg-glass2));
            border: 1px solid var(--border-h);
            border-radius: var(--r-lg);
            padding: 46px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
            margin-bottom: 70px;
        }

        .join-cta::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .join-cta h3 {
            font-family: var(--font-head);
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 10px;
        }

        .join-cta p {
            color: var(--text-2);
            font-size: 0.9rem;
            max-width: 520px;
            margin: 0 auto 26px;
            line-height: 1.7;
        }

        .join-cta-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .join-cta-note {
            margin-top: 18px;
            font-size: 0.78rem;
            color: var(--text-3);
        }

        .join-cta-note a {
            color: var(--accent);
            text-decoration: none;
        }

        .join-cta-note a:hover { text-decoration: underline; }

        /* ══════════════════════════════════════
       CTA BAND (browse jobs)
    ══════════════════════════════════════ */
        .jobs-cta {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-lg);
            padding: 44px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 28px;
            margin-bottom: 60px;
            position: relative;
            overflow: hidden;
        }

        .jobs-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .jobs-cta-glow {
            position: absolute;
            top: -60px;
            right: -60px;
            width: 260px;
            height: 260px;
            border-radius: 50%;
            background: var(--accent-glow);
            filter: blur(70px);
            pointer-events: none;
        }

        .jobs-cta-content {
            position: relative;
        }

        .jobs-cta h3 {
            font-family: var(--font-head);
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 8px;
        }

        .jobs-cta p {
            color: var(--text-2);
            font-size: 0.88rem;
            max-width: 480px;
            margin: 0;
        }

        .jobs-cta-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            position: relative;
        }

        /* ══════════════════════════════════════
       MODAL — genuine Bootstrap Modal, themed to match app
    ══════════════════════════════════════ */
        .fc-modal .modal-content {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-lg);
            color: var(--text-1);
        }

        .fc-modal .modal-header {
            border-bottom: 1px solid var(--border);
            padding: 22px 28px;
        }

        .fc-modal .modal-title {
            font-family: var(--font-head);
            font-weight: 700;
            font-size: 1.05rem;
            color: var(--text-1);
        }

        .fc-modal .modal-title small {
            display: block;
            font-size: 0.72rem;
            color: var(--text-3);
            font-weight: 400;
            margin-top: 3px;
        }

        .fc-modal .accent-line {
            display: block;
            width: 32px;
            height: 3px;
            background: var(--accent);
            border-radius: 2px;
            margin-top: 6px;
        }

        .fc-modal .btn-close {
            filter: invert(1) brightness(0.6);
        }

        .fc-modal .modal-body {
            padding: 28px;
        }

        .fc-modal .modal-footer {
            border-top: 1px solid var(--border);
            padding: 18px 28px;
        }

        .fc-form-label {
            font-size: 0.8rem;
            font-weight: 500;
            color: var(--text-2);
            margin-bottom: 6px;
            display: block;
        }

        .fc-form-control {
            width: 100%;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border);
            border-radius: var(--r-sm);
            color: var(--text-1);
            padding: 11px 14px;
            font-family: var(--font-body);
            font-size: 0.85rem;
            outline: none;
            transition: border-color .2s;
            margin-bottom: 0;
        }

        .fc-form-control:focus {
            border-color: var(--border-h);
            box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .fc-form-control::placeholder {
            color: var(--text-3);
        }

        .fc-form-control.is-invalid {
            border-color: #e0554f;
            box-shadow: 0 0 0 3px rgba(224, 85, 79, 0.16);
        }

        .fc-form-error {
            font-size: 0.72rem;
            color: #e0554f;
            margin-top: 6px;
        }

        textarea.fc-form-control {
            resize: vertical;
            min-height: 90px;
        }

        select.fc-form-control option {
            background: var(--bg-card);
            color: var(--text-1);
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
            --bg: #f6faf8;
            --bg-card: #ffffff;
            --bg-glass: rgba(0, 100, 60, 0.035);
            --bg-glass2: rgba(0, 166, 103, 0.08);
            --accent: #00a667;
            --accent-dim: #00c07a;
            --accent-glow: rgba(0, 166, 103, 0.18);
            --border: rgba(0, 100, 60, 0.1);
            --border-h: rgba(0, 100, 60, 0.28);
            --text-1: #10201b;
            --text-2: #5b7a70;
            --text-3: #8fa89e;
        }

        [data-h-theme="light"] body {
            background: var(--bg) !important;
        }

        [data-h-theme="light"] .jobs-hero-grid {
            background-image:
                linear-gradient(rgba(0, 100, 60, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 100, 60, 0.05) 1px, transparent 1px);
        }

        [data-h-theme="light"] .fc-modal .btn-close {
            filter: none;
        }
      `}),e.jsxs("section",{className:"jobs-hero",children:[e.jsx("div",{className:"jobs-hero-grid"}),e.jsx("div",{className:"jobs-hero-glow"}),e.jsxs("div",{className:"container jobs-hero-inner",children:[e.jsx("div",{className:"row align-items-center",children:e.jsxs("div",{className:"col-lg-8",children:[e.jsx("span",{className:"eyebrow",children:"Works & Opportunities"}),e.jsxs("h1",{children:["Explore ",e.jsxs("span",{children:[n.total,"+"]})," Available Works"]}),e.jsx("p",{children:"Discover full-time, part-time and remote job opportunities tailored for your skills. Every role is posted by verified companies."}),e.jsxs("div",{className:"hero-pills",children:[e.jsxs("div",{className:"hero-pill",children:[e.jsx("i",{className:"ti ti-map-pin"}),e.jsx("strong",{children:"Remote"})," & On-site"]}),e.jsxs("div",{className:"hero-pill",children:[e.jsx("i",{className:"ti ti-briefcase"}),"Full-time, Part-time & Freelance"]}),e.jsxs("div",{className:"hero-pill",children:[e.jsx("i",{className:"ti ti-shield-check"}),"Verified Listings"]})]}),e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsxs(s,{href:o("user.jobs.browse"),className:"btn-fc-primary",children:["Browse Jobs ",e.jsx("i",{className:"ti ti-arrow-right"})]}),e.jsxs("a",{href:"#join-cta",className:"btn-fc-outline",children:[e.jsx("i",{className:"ti ti-plus"})," Post a work"]})]})]})}),e.jsxs("div",{className:"hero-feature-row",children:[e.jsxs("div",{className:"hero-feature-item",children:[e.jsx("div",{className:"fi-icon",children:e.jsx("i",{className:"ti ti-search"})}),e.jsx("h5",{children:"Find Work Today"}),e.jsx("p",{children:"Thousands of people browse our marketplace daily. Don't miss out on matching opportunities."}),e.jsxs(s,{href:o("user.jobs.browse"),className:"strip-link",children:["Browse Jobs ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"hero-feature-item",children:[e.jsx("div",{className:"fi-icon",children:e.jsx("i",{className:"ti ti-bolt"})}),e.jsx("h5",{children:"Unlock New Opportunities"}),e.jsx("p",{children:"Tailored job listings, collaboration projects, and freelance works matched to your profile."}),e.jsxs("a",{href:"#categories-section",className:"strip-link",children:["Explore Categories ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"hero-feature-item",children:[e.jsx("div",{className:"fi-icon",children:e.jsx("i",{className:"ti ti-coin"})}),e.jsx("h5",{children:"Ways to Earn"}),e.jsx("p",{children:"Learn how to earn through the Future Connect platform with verified payment protection."}),e.jsxs("a",{href:"#join-cta",className:"strip-link",children:["Get Started ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})]})]}),e.jsx("section",{className:"about-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-5 align-items-start",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsx("span",{className:"eyebrow",children:"About Job Opportunities"}),e.jsx("h2",{children:"A trusted place to find real work — or real talent"}),e.jsx("p",{className:"lead",children:"Every job on Future Connect comes from a verified company, so what you see is what you get: real roles, real budgets, and real people on the other end. Whether you're looking for full-time work, a freelance gig, or your first internship, opportunities are organized by category so you can go straight to what fits your skills — no scrolling through irrelevant listings."})]}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"about-stats",children:[e.jsxs("div",{className:"about-stat",children:[e.jsx("div",{className:"fi-icon",style:{marginBottom:0},children:e.jsx("i",{className:"ti ti-shield-check"})}),e.jsxs("div",{children:[e.jsx("h6",{children:"Verified companies only"}),e.jsx("p",{children:"Every listing is reviewed before it goes live, so you're never chasing a job that doesn't exist."})]})]}),e.jsxs("div",{className:"about-stat",children:[e.jsx("div",{className:"fi-icon",style:{marginBottom:0},children:e.jsx("i",{className:"ti ti-category"})}),e.jsxs("div",{children:[e.jsx("h6",{children:"Organized by category"}),e.jsx("p",{children:"Jobs are grouped by skill area, so you can jump straight to work that matches what you do."})]})]}),e.jsxs("div",{className:"about-stat",children:[e.jsx("div",{className:"fi-icon",style:{marginBottom:0},children:e.jsx("i",{className:"ti ti-users"})}),e.jsxs("div",{children:[e.jsx("h6",{children:"A two-way marketplace"}),e.jsx("p",{children:"Employers post roles, skilled people apply directly — no agencies, no middlemen."})]})]})]})})]})})}),e.jsx("section",{className:"categories-section",id:"categories-section",children:e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"eyebrow",children:"Browse by Category"}),e.jsx("h2",{style:{fontFamily:"var(--font-head)",fontWeight:800,fontSize:"clamp(1.4rem, 3vw, 2rem)",color:"var(--text-1)",marginBottom:8},children:"Find work in your field"}),e.jsx("p",{style:{color:"var(--text-2)",fontSize:"0.92rem",maxWidth:520,margin:0},children:"Pick a category to see every open role in that field, or join the platform to unlock full access and post your own opportunities."}),e.jsx("div",{className:"job-cat-grid",children:m.map(r=>e.jsxs(s,{href:g({category:r.id}),className:"job-cat-card",children:[e.jsx("div",{className:"fi-icon",children:e.jsx("i",{className:"ti ti-briefcase"})}),e.jsx("div",{className:"job-cat-name",children:r.name}),e.jsxs("div",{className:"job-cat-count",children:[r.job_sections_count??0," open roles"]})]},r.id))})]})}),e.jsx("div",{className:"container",id:"join-cta",children:e.jsxs("div",{className:"join-cta",children:[e.jsx("span",{className:"fc-badge",style:{marginBottom:16,display:"inline-flex"},children:"Free to Join"}),e.jsx("h3",{children:"Join to post jobs & unlock full access"}),e.jsx("p",{children:"Create a free account to post your own job listings, apply directly to open roles, and get full access to every opportunity on the platform — not just previews."}),e.jsxs("div",{className:"join-cta-actions",children:[e.jsxs(s,{href:o("register"),className:"btn-fc-primary",children:[e.jsx("i",{className:"ti ti-user-plus"})," Join Free — Get Full Access"]}),e.jsxs("button",{type:"button",onClick:()=>b(),className:"btn-fc-outline",children:[e.jsx("i",{className:"ti ti-plus"})," Already a member? Post a work"]})]}),e.jsxs("div",{className:"join-cta-note",children:["Already have an account? ",e.jsx(s,{href:o("login"),children:"Log in"})]})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"jobs-cta",children:[e.jsx("div",{className:"jobs-cta-glow"}),e.jsxs("div",{className:"jobs-cta-content",children:[e.jsx("span",{className:"eyebrow",children:"Ready to Explore?"}),e.jsx("h3",{children:"See every open role, filter by what fits you"}),e.jsx("p",{children:"Search, filter by location and salary, and sort the full list of live opportunities — updated as new work is posted."})]}),e.jsxs("div",{className:"jobs-cta-actions",children:[e.jsxs(s,{href:o("user.jobs.browse"),className:"btn-fc-primary",children:[e.jsx("i",{className:"ti ti-search"})," Browse All Jobs"]}),e.jsx(s,{href:o("user.talents"),className:"btn-fc-outline",children:"Browse Skills"})]})]})}),e.jsx("div",{className:"modal fade fc-modal",id:"postJobModalPage",tabIndex:"-1","aria-hidden":"true",ref:c,children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsxs("h5",{className:"modal-title",children:["Post a New Job / work",e.jsx("small",{children:"Fill in the details below to publish your listing"})]}),e.jsx("span",{className:"accent-line"})]}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>d(),children:"✕"})]}),e.jsxs("form",{onSubmit:f,noValidate:!0,children:[e.jsx("div",{className:"modal-body",children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-12",children:[e.jsxs("label",{className:"fc-form-label",children:["Job Title ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("input",{type:"text",className:`fc-form-control${a.errors.title?" is-invalid":""}`,placeholder:"e.g., Senior Laravel Developer",value:a.data.title,onChange:r=>a.setData("title",r.target.value),required:!0}),a.errors.title&&e.jsx("p",{className:"fc-form-error",children:a.errors.title})]}),e.jsxs("div",{className:"col-12",children:[e.jsxs("label",{className:"fc-form-label",children:["Description ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("textarea",{className:`fc-form-control${a.errors.description?" is-invalid":""}`,rows:"4",placeholder:"Describe the job responsibilities, requirements, and benefits...",value:a.data.description,onChange:r=>a.setData("description",r.target.value),required:!0}),a.errors.description&&e.jsx("p",{className:"fc-form-error",children:a.errors.description})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"fc-form-label",children:["Category ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsxs("select",{className:`fc-form-control${a.errors.job_category_id?" is-invalid":""}`,value:a.data.job_category_id,onChange:r=>a.setData("job_category_id",r.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select Category"}),m.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),a.errors.job_category_id&&e.jsx("p",{className:"fc-form-error",children:a.errors.job_category_id})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"fc-form-label",children:["Location ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("input",{type:"text",className:`fc-form-control${a.errors.location?" is-invalid":""}`,placeholder:"e.g., Kigali, Rwanda / Remote",value:a.data.location,onChange:r=>a.setData("location",r.target.value),required:!0}),a.errors.location&&e.jsx("p",{className:"fc-form-error",children:a.errors.location})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Job Type"}),e.jsx("select",{className:"fc-form-control",value:a.data.type,onChange:r=>a.setData("type",r.target.value),children:k.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Experience Level"}),e.jsx("select",{className:"fc-form-control",value:a.data.experience_level,onChange:r=>a.setData("experience_level",r.target.value),children:z.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Salary Range"}),e.jsx("input",{type:"text",className:"fc-form-control",placeholder:"e.g., 300K – 800K RWF",value:a.data.salary_range,onChange:r=>a.setData("salary_range",r.target.value)})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Skills (comma separated)"}),e.jsx("input",{type:"text",className:"fc-form-control",placeholder:"e.g., Laravel, Vue, CSS",value:a.data.skills,onChange:r=>a.setData("skills",r.target.value)})]})]})}),e.jsxs("div",{className:"modal-footer",style:{gap:10},children:[e.jsx("button",{type:"button",className:"btn-fc-outline",onClick:()=>d(),disabled:a.processing,children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-fc-primary",disabled:a.processing,children:[e.jsx("i",{className:`ti ${a.processing?"ti-loader-2":"ti-send"}`})," ",a.processing?"Posting…":"Post Job"]})]})]})]})})})]})}E.layout=n=>e.jsx(N,{children:n,title:"Works & Opportunities"});export{E as default};
