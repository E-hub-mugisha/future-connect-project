import{r as d,_ as D,u as I,j as e,H as T,L as t,d as F}from"./app-DAdnLqM_.js";import{G as O}from"./GuestLayout-DypAKmPK.js";const P={"user.jobs.index":"/jobs","user.jobs.store":"/jobs","user.talents":"/talents"},A=[{value:"full-time",label:"Full-time"},{value:"part-time",label:"Part-time"},{value:"freelance",label:"Freelance"},{value:"internship",label:"Internship"}],J=[{value:"entry",label:"Entry Level"},{value:"mid",label:"Mid Level"},{value:"senior",label:"Senior Level"}];function M({jobs:i={data:[],total:0,links:[]},categories:p=[],locations:j=[],salary:y=[],filters:l={},routes:S={},assetBase:z=""}){const n=r=>S[r]||P[r]||"#",N=r=>`${z}${r}`,h=d.useRef(null),m=d.useRef(null),g=d.useRef(null),x=d.useRef(null);d.useEffect(()=>{let r=!1;return D(async()=>{const{Modal:s,Offcanvas:o}=await import("./bootstrap.esm-ifhUiil8.js");return{Modal:s,Offcanvas:o}},[]).then(({Modal:s,Offcanvas:o})=>{r||(h.current&&(m.current=new s(h.current)),g.current&&(x.current=new o(g.current)))}),()=>{var s,o;r=!0,(s=m.current)==null||s.dispose(),(o=x.current)==null||o.dispose()}},[]);const v=()=>{var r;return(r=m.current)==null?void 0:r.show()},u=()=>{var r;return(r=m.current)==null?void 0:r.hide()},_=()=>{var r;return(r=x.current)==null?void 0:r.show()},b=()=>{var r;return(r=x.current)==null?void 0:r.hide()},E=!!(l.category||l.location||l.salary),c=(r={})=>{const s={...l,...r},o=new URLSearchParams;Object.entries(s).forEach(([R,f])=>{f!=null&&f!==""&&o.set(R,f)});const k=o.toString();return k?`${n("user.jobs.index")}?${k}`:n("user.jobs.index")},C=r=>{F.get(c({sort:r.target.value||void 0}),{},{preserveState:!0,preserveScroll:!0})},a=I({title:"",description:"",job_category_id:"",location:"",type:"full-time",experience_level:"entry",salary_range:"",skills:""}),L=r=>{r.preventDefault(),a.post(n("user.jobs.store"),{preserveScroll:!0,onSuccess:()=>{a.reset(),u()}})},w=({job:r,mobile:s=!1})=>{var o;return e.jsxs("div",{className:`job-card${s?" mobile-job-card":""}`,children:[!s&&e.jsxs("div",{className:"job-card-thumb",children:[e.jsx("img",{src:N("/assets/img/blog/blog-01.jpg"),alt:r.title}),r.type&&e.jsx("span",{className:"job-type-badge",children:r.type})]}),e.jsxs("div",{className:"job-card-body",style:s?{padding:20}:void 0,children:[e.jsxs("div",{className:"job-company-row",children:[e.jsx("img",{src:N("/assets/img/user/user-01.jpg"),className:"company-avatar",alt:""}),e.jsx("span",{className:"company-name",children:((o=r.company)==null?void 0:o.name)??"Company"}),s&&r.type&&e.jsx("span",{className:"fc-badge",style:{marginLeft:"auto",fontSize:"0.65rem",padding:"2px 10px"},children:r.type})]}),e.jsx("h3",{className:"job-title",children:e.jsx(t,{href:n("user.jobs.show")!=="#"?n("user.jobs.show"):`/jobs/${r.id}`,children:r.title})}),e.jsxs("div",{className:"job-meta",children:[e.jsxs("span",{className:"job-meta-item",children:[e.jsx("i",{className:"ti ti-map-pin"})," ",r.location??"Remote"]}),!s&&r.experience_level&&e.jsxs("span",{className:"job-meta-item",children:[e.jsx("i",{className:"ti ti-chart-bar"})," ",r.experience_level.charAt(0).toUpperCase()+r.experience_level.slice(1)]})]}),e.jsxs("div",{className:"job-card-footer",children:[e.jsx("span",{className:"job-salary",children:r.salary_range}),e.jsxs(t,{href:`/jobs/${r.id}`,className:"btn-view-job",children:["View ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})]})};return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Explore Works & Jobs"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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

        /* Hero stat pills */
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

        /* Mini feature cards */
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
       CATEGORIES SCROLL
    ══════════════════════════════════════ */
        .cats-bar {
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            padding: 18px 0;
        }

        .cats-scroll {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            scrollbar-width: none;
            align-items: center;
        }

        .cats-scroll::-webkit-scrollbar {
            display: none;
        }

        .cat-chip {
            display: flex;
            align-items: center;
            gap: 6px;
            flex-shrink: 0;
            background: var(--bg-glass);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            padding: 7px 16px;
            font-size: 0.78rem;
            font-weight: 500;
            color: var(--text-2);
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
            white-space: nowrap;
        }

        .cat-chip:hover,
        .cat-chip.active {
            border-color: var(--border-h);
            color: var(--accent);
            background: var(--bg-glass2);
        }

        .cat-chip .count {
            background: var(--bg-glass2);
            border: 1px solid var(--border-h);
            color: var(--accent);
            border-radius: 20px;
            padding: 1px 7px;
            font-size: 0.68rem;
        }

        /* ══════════════════════════════════════
       MAIN LAYOUT
    ══════════════════════════════════════ */
        .jobs-main {
            padding: 40px 0 80px;
        }

        /* ── SIDEBAR ── */
        .jobs-sidebar {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-lg);
            padding: 24px;
            position: sticky;
            top: 24px;
        }

        .sidebar-title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .sidebar-title-row h4 {
            font-family: var(--font-head);
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-1);
            margin: 0;
        }

        .reset-link {
            font-size: 0.75rem;
            color: var(--accent);
            text-decoration: none;
        }

        .reset-link:hover {
            text-decoration: underline;
        }

        .filter-group {
            margin-bottom: 22px;
        }

        .filter-group-label {
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-3);
            font-weight: 600;
            margin-bottom: 10px;
            display: block;
        }

        .filter-divider {
            border-top: 1px solid var(--border);
            margin: 18px 0;
        }

        .filter-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .filter-list li a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 12px;
            border-radius: var(--r-sm);
            font-size: 0.82rem;
            color: var(--text-2);
            text-decoration: none;
            transition: background .15s, color .15s;
        }

        .filter-list li a:hover,
        .filter-list li a.active {
            background: var(--bg-glass2);
            color: var(--accent);
        }

        .filter-list li a .fcount {
            font-size: 0.7rem;
            color: var(--text-3);
            background: var(--bg-glass);
            border-radius: 10px;
            padding: 1px 7px;
        }

        .filter-list li a.active .fcount {
            color: var(--accent);
        }

        /* ── JOBS GRID ── */
        .jobs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 18px;
        }

        .job-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-md);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: border-color .25s, transform .2s;
        }

        .job-card:hover {
            border-color: var(--border-h);
            transform: translateY(-3px);
        }

        .job-card-thumb {
            position: relative;
            height: 150px;
            overflow: hidden;
            flex-shrink: 0;
        }

        .job-card-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform .35s;
        }

        .job-card:hover .job-card-thumb img {
            transform: scale(1.04);
        }

        .job-type-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background: var(--accent);
            color: #fff;
            border-radius: var(--r-pill);
            padding: 3px 10px;
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.04em;
            text-transform: capitalize;
        }

        .job-card-body {
            padding: 18px;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .job-company-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .company-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            object-fit: cover;
            border: 1px solid var(--border-h);
            flex-shrink: 0;
        }

        .company-name {
            font-size: 0.78rem;
            color: var(--text-3);
        }

        .job-title {
            font-family: var(--font-head);
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-1);
            margin-bottom: 10px;
            line-height: 1.3;
        }

        .job-title a {
            color: inherit;
            text-decoration: none;
        }

        .job-title a:hover {
            color: var(--accent);
        }

        .job-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 14px;
        }

        .job-meta-item {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 0.75rem;
            color: var(--text-3);
        }

        .job-meta-item i {
            color: var(--accent);
            font-size: 0.8rem;
        }

        .job-card-footer {
            margin-top: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid var(--border);
            padding-top: 12px;
        }

        .job-salary {
            font-family: var(--font-head);
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--accent);
        }

        .btn-view-job {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: var(--bg-glass2);
            border: 1px solid var(--border-h);
            color: var(--accent);
            border-radius: var(--r-pill);
            padding: 6px 14px;
            font-size: 0.75rem;
            font-weight: 600;
            text-decoration: none;
            transition: background .2s, color .2s;
        }

        .btn-view-job:hover {
            background: var(--accent);
            color: #fff;
            border-color: var(--accent);
        }

        /* ── RESULTS HEADER ── */
        .results-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 14px;
            margin-bottom: 24px;
            padding-bottom: 18px;
            border-bottom: 1px solid var(--border);
        }

        .results-count {
            font-family: var(--font-head);
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-1);
        }

        .results-count span {
            color: var(--accent);
        }

        .sort-select {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            color: var(--text-2);
            padding: 8px 16px;
            font-size: 0.8rem;
            font-family: var(--font-body);
            outline: none;
            cursor: pointer;
        }

        .sort-select:focus {
            border-color: var(--border-h);
        }

        /* ── PAGINATION ── */
        .fc-pagination {
            display: flex;
            justify-content: center;
            margin-top: 36px;
        }

        .fc-pagination nav {
            width: 100%;
        }

        .fc-pagination .pagination {
            display: flex;
            gap: 6px;
            list-style: none;
            padding: 0;
            margin: 0;
            justify-content: center;
            flex-wrap: wrap;
        }

        .fc-pagination .page-item .page-link {
            background: var(--bg-card);
            border: 1px solid var(--border);
            color: var(--text-2);
            border-radius: var(--r-sm);
            padding: 8px 14px;
            font-size: 0.82rem;
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
        }

        .fc-pagination .page-item.active .page-link,
        .fc-pagination .page-item .page-link:hover {
            background: var(--bg-glass2);
            border-color: var(--border-h);
            color: var(--accent);
        }

        /* ── MOBILE FILTER ── */
        .mobile-filter-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            padding: 10px 20px;
            font-size: 0.82rem;
            font-weight: 600;
            color: var(--text-2);
            cursor: pointer;
            font-family: var(--font-body);
            transition: border-color .2s, color .2s;
        }

        .mobile-filter-btn:hover {
            border-color: var(--border-h);
            color: var(--accent);
        }

        .mobile-filter-btn i {
            color: var(--accent);
        }

        /* Mobile Filter Drawer — genuine Bootstrap Offcanvas, themed to match app */
        .filter-offcanvas {
            --bs-offcanvas-bg: var(--bg-card);
            --bs-offcanvas-color: var(--text-1);
        }

        .filter-offcanvas .offcanvas-header {
            border-bottom: 1px solid var(--border);
        }

        .filter-offcanvas .offcanvas-title {
            font-family: var(--font-head);
            font-weight: 700;
        }

        .filter-offcanvas .btn-close {
            background: transparent;
            border: none;
            color: var(--text-1);
            filter: invert(1) brightness(0.6);
            font-size: 1.1rem;
            cursor: pointer;
            line-height: 1;
        }

        [data-h-theme="light"] .filter-offcanvas .btn-close {
            filter: none;
        }

        /* ── MOBILE JOB CARD (carousel fallback) ── */
        .mobile-job-card {
            padding: 0 4px 24px;
        }

        /* ══════════════════════════════════════
       CTA BAND
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

        /* Hero grid lines need a darker tint on light bg to stay visible */
        [data-h-theme="light"] .jobs-hero-grid {
            background-image:
                linear-gradient(rgba(0, 100, 60, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 100, 60, 0.05) 1px, transparent 1px);
        }

        [data-h-theme="light"] .fc-modal .btn-close {
            filter: none;
        }

        [data-h-theme="light"] .sort-select {
            color-scheme: light;
        }
      `}),e.jsxs("section",{className:"jobs-hero",children:[e.jsx("div",{className:"jobs-hero-grid"}),e.jsx("div",{className:"jobs-hero-glow"}),e.jsxs("div",{className:"container jobs-hero-inner",children:[e.jsx("div",{className:"row align-items-center",children:e.jsxs("div",{className:"col-lg-8",children:[e.jsx("span",{className:"eyebrow",children:"Works & Opportunities"}),e.jsxs("h1",{children:["Explore ",e.jsxs("span",{children:[i.total,"+"]})," Available Works"]}),e.jsx("p",{children:"Discover full-time, part-time and remote job opportunities tailored for your skills. Every role is posted by verified companies."}),e.jsxs("div",{className:"hero-pills",children:[e.jsxs("div",{className:"hero-pill",children:[e.jsx("i",{className:"ti ti-map-pin"}),e.jsx("strong",{children:"Remote"})," & On-site"]}),e.jsxs("div",{className:"hero-pill",children:[e.jsx("i",{className:"ti ti-briefcase"}),"Full-time, Part-time & Freelance"]}),e.jsxs("div",{className:"hero-pill",children:[e.jsx("i",{className:"ti ti-shield-check"}),"Verified Listings"]})]}),e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsxs("a",{href:"#jobs-list",className:"btn-fc-primary",children:["Browse Jobs ",e.jsx("i",{className:"ti ti-arrow-down"})]}),e.jsxs("button",{type:"button",onClick:()=>v(),className:"btn-fc-outline",children:[e.jsx("i",{className:"ti ti-plus"})," Post a work"]})]})]})}),e.jsxs("div",{className:"hero-feature-row",children:[e.jsxs("div",{className:"hero-feature-item",children:[e.jsx("div",{className:"fi-icon",children:e.jsx("i",{className:"ti ti-search"})}),e.jsx("h5",{children:"Find Work Today"}),e.jsx("p",{children:"Thousands of people browse our marketplace daily. Don't miss out on matching opportunities."}),e.jsxs("a",{href:"#jobs-list",className:"strip-link",children:["Browse Jobs ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"hero-feature-item",children:[e.jsx("div",{className:"fi-icon",children:e.jsx("i",{className:"ti ti-bolt"})}),e.jsx("h5",{children:"Unlock New Opportunities"}),e.jsx("p",{children:"Tailored job listings, collaboration projects, and freelance works matched to your profile."}),e.jsxs("a",{href:"#jobs-list",className:"strip-link",children:["Start Exploring ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"hero-feature-item",children:[e.jsx("div",{className:"fi-icon",children:e.jsx("i",{className:"ti ti-coin"})}),e.jsx("h5",{children:"Ways to Earn"}),e.jsx("p",{children:"Learn how to earn through the Future Connect platform with verified payment protection."}),e.jsxs("button",{type:"button",onClick:()=>v(),className:"strip-link",style:{background:"none",border:"none",cursor:"pointer",padding:0},children:["Get Started ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})]})]}),e.jsx("div",{className:"cats-bar",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cats-scroll",children:[e.jsxs(t,{href:c({category:void 0}),className:`cat-chip${l.category?"":" active"}`,preserveScroll:!0,children:["All ",e.jsx("span",{className:"count",children:i.total})]}),p.map(r=>e.jsxs(t,{href:c({category:r.id}),className:`cat-chip${String(l.category)===String(r.id)?" active":""}`,preserveScroll:!0,children:[r.name,e.jsx("span",{className:"count",children:r.job_sections_count??0})]},r.id))]})})}),e.jsx("div",{className:"jobs-main",id:"jobs-list",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-3 d-none d-lg-block",children:e.jsxs("div",{className:"jobs-sidebar",children:[e.jsxs("div",{className:"sidebar-title-row",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"ti ti-adjustments-horizontal me-2",style:{color:"var(--accent)"}}),"Filters"]}),e.jsxs(t,{href:n("user.jobs.index"),className:"reset-link",children:[e.jsx("i",{className:"ti ti-refresh"})," Reset"]})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-group-label",children:"Categories"}),e.jsx("ul",{className:"filter-list",children:p.map(r=>e.jsx("li",{children:e.jsxs(t,{href:c({category:r.id}),className:String(l.category)===String(r.id)?"active":"",preserveScroll:!0,children:[r.name,e.jsx("span",{className:"fcount",children:r.job_sections_count??0})]})},r.id))})]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-group-label",children:"Location"}),e.jsx("ul",{className:"filter-list",children:j.map(r=>e.jsx("li",{children:e.jsx(t,{href:c({location:r}),className:l.location===r?"active":"",preserveScroll:!0,children:e.jsxs("span",{children:[e.jsx("i",{className:"ti ti-map-pin me-1",style:{fontSize:"0.75rem",color:"var(--accent)"}}),r]})})},r))})]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("div",{className:"filter-group",style:{marginBottom:0},children:[e.jsx("span",{className:"filter-group-label",children:"Salary Range"}),e.jsx("ul",{className:"filter-list",children:y.map(r=>e.jsx("li",{children:e.jsx(t,{href:c({salary:r}),className:l.salary===r?"active":"",preserveScroll:!0,children:e.jsxs("span",{children:[e.jsx("i",{className:"ti ti-coin me-1",style:{fontSize:"0.75rem",color:"var(--accent)"}}),r]})})},r))})]})]})}),e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"results-header",children:[e.jsxs("div",{className:"results-count",children:[e.jsx("span",{children:i.total})," Jobs Found",E&&e.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-3)",fontWeight:400,marginLeft:10},children:["(filtered)",e.jsxs(t,{href:n("user.jobs.index"),style:{color:"var(--accent)",textDecoration:"none",marginLeft:4},children:[e.jsx("i",{className:"ti ti-x"})," Clear"]})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsxs("button",{type:"button",className:"mobile-filter-btn d-lg-none",onClick:()=>_(),children:[e.jsx("i",{className:"ti ti-adjustments-horizontal"})," Filters"]}),e.jsxs("select",{className:"sort-select",value:l.sort||"",onChange:C,children:[e.jsx("option",{value:"",children:"Sort: Latest"}),e.jsx("option",{value:"salary",children:"Sort: Salary"})]})]})]}),e.jsx("div",{className:"jobs-grid d-none d-md-grid",children:i.data.length>0?i.data.map(r=>e.jsx(w,{job:r},r.id)):e.jsxs("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"60px 20px",color:"var(--text-3)"},children:[e.jsx("i",{className:"ti ti-briefcase-off",style:{fontSize:"2.5rem",display:"block",marginBottom:12}}),"No jobs found matching your filters.",e.jsx("br",{}),e.jsx(t,{href:n("user.jobs.index"),style:{color:"var(--accent)",fontSize:"0.85rem"},children:"Clear filters"})]})}),e.jsx("div",{className:"d-md-none",children:i.data.length>0?i.data.map(r=>e.jsx(w,{job:r,mobile:!0},r.id)):e.jsx("p",{style:{textAlign:"center",color:"var(--text-3)",padding:40},children:"No jobs found."})}),i.links&&i.links.length>0&&e.jsx("div",{className:"fc-pagination",children:e.jsx("nav",{children:e.jsx("ul",{className:"pagination",children:i.links.map((r,s)=>{const o=r.label.replace("&laquo; Previous","‹ Prev").replace("Next &raquo;","Next ›");return e.jsx("li",{className:`page-item${r.active?" active":""}${r.url?"":" disabled"}`,children:r.url?e.jsx(t,{href:r.url,className:"page-link",preserveScroll:!0,dangerouslySetInnerHTML:{__html:o}}):e.jsx("span",{className:"page-link",dangerouslySetInnerHTML:{__html:o}})},s)})})})})]})]})})}),e.jsxs("div",{className:"offcanvas offcanvas-start filter-offcanvas",tabIndex:"-1",id:"jobsFilterOffcanvasPage",ref:g,children:[e.jsxs("div",{className:"offcanvas-header",children:[e.jsxs("h5",{className:"offcanvas-title",children:[e.jsx("i",{className:"ti ti-adjustments-horizontal me-2",style:{color:"var(--accent)"}}),"Filters"]}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>b(),children:"✕"})]}),e.jsxs("div",{className:"offcanvas-body",children:[e.jsxs("div",{className:"sidebar-title-row",style:{marginBottom:16},children:[e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-3)"},children:[i.total," results"]}),e.jsxs(t,{href:n("user.jobs.index"),className:"reset-link",children:[e.jsx("i",{className:"ti ti-refresh"})," Reset All"]})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-group-label",children:"Categories"}),e.jsx("ul",{className:"filter-list",children:p.map(r=>e.jsx("li",{children:e.jsxs(t,{href:c({category:r.id}),className:String(l.category)===String(r.id)?"active":"",onClick:()=>b(),preserveScroll:!0,children:[r.name," ",e.jsx("span",{className:"fcount",children:r.job_sections_count??0})]})},r.id))})]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-group-label",children:"Location"}),e.jsx("ul",{className:"filter-list",children:j.map(r=>e.jsx("li",{children:e.jsxs(t,{href:c({location:r}),className:l.location===r?"active":"",onClick:()=>b(),preserveScroll:!0,children:[e.jsx("i",{className:"ti ti-map-pin me-1",style:{color:"var(--accent)"}}),r]})},r))})]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-group-label",children:"Salary Range"}),e.jsx("ul",{className:"filter-list",children:y.map(r=>e.jsx("li",{children:e.jsxs(t,{href:c({salary:r}),className:l.salary===r?"active":"",onClick:()=>b(),preserveScroll:!0,children:[e.jsx("i",{className:"ti ti-coin me-1",style:{color:"var(--accent)"}}),r]})},r))})]})]})]}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"jobs-cta",children:[e.jsx("div",{className:"jobs-cta-glow"}),e.jsxs("div",{className:"jobs-cta-content",children:[e.jsx("span",{className:"eyebrow",children:"Post Your work"}),e.jsx("h3",{children:"Showcase Your Skills & Find Work Today!"}),e.jsx("p",{children:"Post your work in minutes and reach thousands of potential clients. Verified listings get more visibility and faster responses. Takes less than 5 minutes."})]}),e.jsxs("div",{className:"jobs-cta-actions",children:[e.jsxs("button",{type:"button",onClick:()=>v(),className:"btn-fc-primary",children:[e.jsx("i",{className:"ti ti-plus"})," Post Your work"]}),e.jsx(t,{href:n("user.talents"),className:"btn-fc-outline",children:"Browse Skills"})]})]})}),e.jsx("div",{className:"modal fade fc-modal",id:"postJobModalPage",tabIndex:"-1","aria-hidden":"true",ref:h,children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsxs("h5",{className:"modal-title",children:["Post a New Job / work",e.jsx("small",{children:"Fill in the details below to publish your listing"})]}),e.jsx("span",{className:"accent-line"})]}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>u(),children:"✕"})]}),e.jsxs("form",{onSubmit:L,noValidate:!0,children:[e.jsx("div",{className:"modal-body",children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-12",children:[e.jsxs("label",{className:"fc-form-label",children:["Job Title ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("input",{type:"text",className:`fc-form-control${a.errors.title?" is-invalid":""}`,placeholder:"e.g., Senior Laravel Developer",value:a.data.title,onChange:r=>a.setData("title",r.target.value),required:!0}),a.errors.title&&e.jsx("p",{className:"fc-form-error",children:a.errors.title})]}),e.jsxs("div",{className:"col-12",children:[e.jsxs("label",{className:"fc-form-label",children:["Description ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("textarea",{className:`fc-form-control${a.errors.description?" is-invalid":""}`,rows:"4",placeholder:"Describe the job responsibilities, requirements, and benefits...",value:a.data.description,onChange:r=>a.setData("description",r.target.value),required:!0}),a.errors.description&&e.jsx("p",{className:"fc-form-error",children:a.errors.description})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"fc-form-label",children:["Category ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsxs("select",{className:`fc-form-control${a.errors.job_category_id?" is-invalid":""}`,value:a.data.job_category_id,onChange:r=>a.setData("job_category_id",r.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select Category"}),p.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),a.errors.job_category_id&&e.jsx("p",{className:"fc-form-error",children:a.errors.job_category_id})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"fc-form-label",children:["Location ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("input",{type:"text",className:`fc-form-control${a.errors.location?" is-invalid":""}`,placeholder:"e.g., Kigali, Rwanda / Remote",value:a.data.location,onChange:r=>a.setData("location",r.target.value),required:!0}),a.errors.location&&e.jsx("p",{className:"fc-form-error",children:a.errors.location})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Job Type"}),e.jsx("select",{className:"fc-form-control",value:a.data.type,onChange:r=>a.setData("type",r.target.value),children:A.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Experience Level"}),e.jsx("select",{className:"fc-form-control",value:a.data.experience_level,onChange:r=>a.setData("experience_level",r.target.value),children:J.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Salary Range"}),e.jsx("input",{type:"text",className:"fc-form-control",placeholder:"e.g., 300K – 800K RWF",value:a.data.salary_range,onChange:r=>a.setData("salary_range",r.target.value)})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Skills (comma separated)"}),e.jsx("input",{type:"text",className:"fc-form-control",placeholder:"e.g., Laravel, Vue, CSS",value:a.data.skills,onChange:r=>a.setData("skills",r.target.value)})]})]})}),e.jsxs("div",{className:"modal-footer",style:{gap:10},children:[e.jsx("button",{type:"button",className:"btn-fc-outline",onClick:()=>u(),disabled:a.processing,children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-fc-primary",disabled:a.processing,children:[e.jsx("i",{className:`ti ${a.processing?"ti-loader-2":"ti-send"}`})," ",a.processing?"Posting…":"Post Job"]})]})]})]})})})]})}M.layout=i=>e.jsx(O,{children:i,title:"Works & Opportunities"});export{M as default};
