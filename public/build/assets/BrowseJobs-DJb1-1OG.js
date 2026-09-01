import{r as d,_ as D,u as P,j as e,H as A,L as s,a as J}from"./app-DQcVR1sC.js";import{G as F}from"./GuestLayout-AyS9Rfgz.js";const I={"user.jobs.index":"/jobs","user.jobs.browse":"/jobs/browse","user.jobs.store":"/jobs","user.talents":"/skills-marketplace"},T=[{value:"full-time",label:"Full-time"},{value:"part-time",label:"Part-time"},{value:"freelance",label:"Freelance"},{value:"internship",label:"Internship"}],O=[{value:"entry",label:"Entry Level"},{value:"mid",label:"Mid Level"},{value:"senior",label:"Senior Level"}];function M({jobs:l={data:[],total:0,links:[]},categories:p=[],locations:u=[],salary:j=[],filters:i={},routes:k={},assetBase:S=""}){const n=r=>k[r]||I[r]||"#",y=r=>`${S}${r}`,g=d.useRef(null),m=d.useRef(null),h=d.useRef(null),x=d.useRef(null);d.useEffect(()=>{let r=!1;return D(async()=>{const{Modal:o,Offcanvas:t}=await import("./bootstrap.esm-ifhUiil8.js");return{Modal:o,Offcanvas:t}},[]).then(({Modal:o,Offcanvas:t})=>{r||(g.current&&(m.current=new o(g.current)),h.current&&(x.current=new t(h.current)))}),()=>{var o,t;r=!0,(o=m.current)==null||o.dispose(),(t=x.current)==null||t.dispose()}},[]);const z=()=>{var r;return(r=m.current)==null?void 0:r.show()},v=()=>{var r;return(r=m.current)==null?void 0:r.hide()},_=()=>{var r;return(r=x.current)==null?void 0:r.show()},b=()=>{var r;return(r=x.current)==null?void 0:r.hide()},C=!!(i.category||i.location||i.salary),c=(r={})=>{const o={...i,...r},t=new URLSearchParams;Object.entries(o).forEach(([R,f])=>{f!=null&&f!==""&&t.set(R,f)});const w=t.toString();return w?`${n("user.jobs.browse")}?${w}`:n("user.jobs.browse")},E=r=>{J.get(c({sort:r.target.value||void 0}),{},{preserveState:!0,preserveScroll:!0})},a=P({title:"",description:"",job_category_id:"",location:"",type:"full-time",experience_level:"entry",salary_range:"",skills:""}),L=r=>{r.preventDefault(),a.post(n("user.jobs.store"),{preserveScroll:!0,onSuccess:()=>{a.reset(),v()}})},N=({job:r,mobile:o=!1})=>{var t;return e.jsxs("div",{className:`job-card${o?" mobile-job-card":""}`,children:[!o&&e.jsxs("div",{className:"job-card-thumb",children:[e.jsx("img",{src:y("/assets/img/blog/blog-01.jpg"),alt:r.title}),r.type&&e.jsx("span",{className:"job-type-badge",children:r.type})]}),e.jsxs("div",{className:"job-card-body",style:o?{padding:20}:void 0,children:[e.jsxs("div",{className:"job-company-row",children:[e.jsx("img",{src:y("/assets/img/user/user-01.jpg"),className:"company-avatar",alt:""}),e.jsx("span",{className:"company-name",children:((t=r.company)==null?void 0:t.name)??"Company"}),o&&r.type&&e.jsx("span",{className:"fc-badge",style:{marginLeft:"auto",fontSize:"0.65rem",padding:"2px 10px"},children:r.type})]}),e.jsx("h3",{className:"job-title",children:e.jsx(s,{href:n("user.jobs.show")!=="#"?n("user.jobs.show"):`/jobs/${r.id}`,children:r.title})}),e.jsxs("div",{className:"job-meta",children:[e.jsxs("span",{className:"job-meta-item",children:[e.jsx("i",{className:"ti ti-map-pin"})," ",r.location??"Remote"]}),!o&&r.experience_level&&e.jsxs("span",{className:"job-meta-item",children:[e.jsx("i",{className:"ti ti-chart-bar"})," ",r.experience_level.charAt(0).toUpperCase()+r.experience_level.slice(1)]})]}),e.jsxs("div",{className:"job-card-footer",children:[e.jsx("span",{className:"job-salary",children:r.salary_range}),e.jsxs(s,{href:`/jobs/${r.id}`,className:"btn-view-job",children:["View ",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})]})};return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Browse Jobs"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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

        /* ── COMPACT PAGE HEADER ── */
        .browse-header {
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            padding: 40px 0 32px;
            position: relative;
            overflow: hidden;
        }

        .browse-header::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .browse-back {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8rem;
            color: var(--text-2);
            text-decoration: none;
            margin-bottom: 14px;
            transition: color .2s;
        }

        .browse-back:hover { color: var(--accent); }

        .browse-header h1 {
            font-family: var(--font-head);
            font-size: clamp(1.5rem, 3vw, 2.1rem);
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 8px;
        }

        .browse-header h1 span { color: var(--accent); }

        .browse-header p {
            color: var(--text-2);
            font-size: 0.9rem;
            max-width: 500px;
            margin: 0;
        }

        /* ── CATEGORIES SCROLL ── */
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

        .cats-scroll::-webkit-scrollbar { display: none; }

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

        /* ── MAIN LAYOUT ── */
        .jobs-main {
            padding: 40px 0 80px;
        }

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

        .reset-link:hover { text-decoration: underline; }

        .filter-group { margin-bottom: 22px; }

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

        .filter-list li a.active .fcount { color: var(--accent); }

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

        .job-card:hover .job-card-thumb img { transform: scale(1.04); }

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

        .job-title a { color: inherit; text-decoration: none; }
        .job-title a:hover { color: var(--accent); }

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

        .job-meta-item i { color: var(--accent); font-size: 0.8rem; }

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

        .results-count span { color: var(--accent); }

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

        .sort-select:focus { border-color: var(--border-h); }

        /* ── PAGINATION ── */
        .fc-pagination {
            display: flex;
            justify-content: center;
            margin-top: 36px;
        }

        .fc-pagination nav { width: 100%; }

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

        .mobile-filter-btn i { color: var(--accent); }

        .filter-offcanvas {
            --bs-offcanvas-bg: var(--bg-card);
            --bs-offcanvas-color: var(--text-1);
        }

        .filter-offcanvas .offcanvas-header { border-bottom: 1px solid var(--border); }

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

        [data-h-theme="light"] .filter-offcanvas .btn-close { filter: none; }

        .mobile-job-card { padding: 0 4px 24px; }

        /* ── CTA BAND (post job) ── */
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
            top: 0; left: 0; right: 0;
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

        .jobs-cta-content { position: relative; }

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

        /* ── MODAL ── */
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

        .fc-modal .btn-close { filter: invert(1) brightness(0.6); }

        .fc-modal .modal-body { padding: 28px; }

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

        .fc-form-control::placeholder { color: var(--text-3); }

        .fc-form-control.is-invalid {
            border-color: #e0554f;
            box-shadow: 0 0 0 3px rgba(224, 85, 79, 0.16);
        }

        .fc-form-error {
            font-size: 0.72rem;
            color: #e0554f;
            margin-top: 6px;
        }

        textarea.fc-form-control { resize: vertical; min-height: 90px; }

        select.fc-form-control option {
            background: var(--bg-card);
            color: var(--text-1);
        }

        /* ── LIGHT THEME OVERRIDES ── */
        [data-h-theme="light"] {
            --bg: #f6faf8;
            --bg-card: #F5f5f7;
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

        [data-h-theme="light"] body { background: var(--bg) !important; }

        [data-h-theme="light"] .fc-modal .btn-close { filter: none; }

        [data-h-theme="light"] .sort-select { color-scheme: light; }
      `}),e.jsx("section",{className:"browse-header",children:e.jsxs("div",{className:"container",children:[e.jsxs(s,{href:n("user.jobs.index"),className:"browse-back",children:[e.jsx("i",{className:"ti ti-arrow-left"})," Back to Job Opportunities"]}),e.jsx("span",{className:"eyebrow",children:"Works & Opportunities"}),e.jsxs("h1",{children:["Browse ",e.jsxs("span",{children:[l.total,"+"]})," Open Roles"]}),e.jsx("p",{children:"Filter by category, location and salary to find the work that fits you — updated as new opportunities are posted."})]})}),e.jsx("div",{className:"cats-bar",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cats-scroll",children:[e.jsxs(s,{href:c({category:void 0}),className:`cat-chip${i.category?"":" active"}`,preserveScroll:!0,children:["All ",e.jsx("span",{className:"count",children:l.total})]}),p.map(r=>e.jsxs(s,{href:c({category:r.id}),className:`cat-chip${String(i.category)===String(r.id)?" active":""}`,preserveScroll:!0,children:[r.name,e.jsx("span",{className:"count",children:r.job_sections_count??0})]},r.id))]})})}),e.jsx("div",{className:"jobs-main",id:"jobs-list",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-3 d-none d-lg-block",children:e.jsxs("div",{className:"jobs-sidebar",children:[e.jsxs("div",{className:"sidebar-title-row",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"ti ti-adjustments-horizontal me-2",style:{color:"var(--accent)"}}),"Filters"]}),e.jsxs(s,{href:n("user.jobs.browse"),className:"reset-link",children:[e.jsx("i",{className:"ti ti-refresh"})," Reset"]})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-group-label",children:"Categories"}),e.jsx("ul",{className:"filter-list",children:p.map(r=>e.jsx("li",{children:e.jsxs(s,{href:c({category:r.id}),className:String(i.category)===String(r.id)?"active":"",preserveScroll:!0,children:[r.name,e.jsx("span",{className:"fcount",children:r.job_sections_count??0})]})},r.id))})]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-group-label",children:"Location"}),e.jsx("ul",{className:"filter-list",children:u.map(r=>e.jsx("li",{children:e.jsx(s,{href:c({location:r}),className:i.location===r?"active":"",preserveScroll:!0,children:e.jsxs("span",{children:[e.jsx("i",{className:"ti ti-map-pin me-1",style:{fontSize:"0.75rem",color:"var(--accent)"}}),r]})})},r))})]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("div",{className:"filter-group",style:{marginBottom:0},children:[e.jsx("span",{className:"filter-group-label",children:"Salary Range"}),e.jsx("ul",{className:"filter-list",children:j.map(r=>e.jsx("li",{children:e.jsx(s,{href:c({salary:r}),className:i.salary===r?"active":"",preserveScroll:!0,children:e.jsxs("span",{children:[e.jsx("i",{className:"ti ti-coin me-1",style:{fontSize:"0.75rem",color:"var(--accent)"}}),r]})})},r))})]})]})}),e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"results-header",children:[e.jsxs("div",{className:"results-count",children:[e.jsx("span",{children:l.total})," Jobs Found",C&&e.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-3)",fontWeight:400,marginLeft:10},children:["(filtered)",e.jsxs(s,{href:n("user.jobs.browse"),style:{color:"var(--accent)",textDecoration:"none",marginLeft:4},children:[e.jsx("i",{className:"ti ti-x"})," Clear"]})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsxs("button",{type:"button",className:"mobile-filter-btn d-lg-none",onClick:()=>_(),children:[e.jsx("i",{className:"ti ti-adjustments-horizontal"})," Filters"]}),e.jsxs("select",{className:"sort-select",value:i.sort||"",onChange:E,children:[e.jsx("option",{value:"",children:"Sort: Latest"}),e.jsx("option",{value:"salary",children:"Sort: Salary"})]})]})]}),e.jsx("div",{className:"jobs-grid d-none d-md-grid",children:l.data.length>0?l.data.map(r=>e.jsx(N,{job:r},r.id)):e.jsxs("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"60px 20px",color:"var(--text-3)"},children:[e.jsx("i",{className:"ti ti-briefcase-off",style:{fontSize:"2.5rem",display:"block",marginBottom:12}}),"No jobs found matching your filters.",e.jsx("br",{}),e.jsx(s,{href:n("user.jobs.browse"),style:{color:"var(--accent)",fontSize:"0.85rem"},children:"Clear filters"})]})}),e.jsx("div",{className:"d-md-none",children:l.data.length>0?l.data.map(r=>e.jsx(N,{job:r,mobile:!0},r.id)):e.jsx("p",{style:{textAlign:"center",color:"var(--text-3)",padding:40},children:"No jobs found."})}),l.links&&l.links.length>0&&e.jsx("div",{className:"fc-pagination",children:e.jsx("nav",{children:e.jsx("ul",{className:"pagination",children:l.links.map((r,o)=>{const t=r.label.replace("&laquo; Previous","‹ Prev").replace("Next &raquo;","Next ›");return e.jsx("li",{className:`page-item${r.active?" active":""}${r.url?"":" disabled"}`,children:r.url?e.jsx(s,{href:r.url,className:"page-link",preserveScroll:!0,dangerouslySetInnerHTML:{__html:t}}):e.jsx("span",{className:"page-link",dangerouslySetInnerHTML:{__html:t}})},o)})})})})]})]})})}),e.jsxs("div",{className:"offcanvas offcanvas-start filter-offcanvas",tabIndex:"-1",id:"jobsFilterOffcanvasPage",ref:h,children:[e.jsxs("div",{className:"offcanvas-header",children:[e.jsxs("h5",{className:"offcanvas-title",children:[e.jsx("i",{className:"ti ti-adjustments-horizontal me-2",style:{color:"var(--accent)"}}),"Filters"]}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>b(),children:"✕"})]}),e.jsxs("div",{className:"offcanvas-body",children:[e.jsxs("div",{className:"sidebar-title-row",style:{marginBottom:16},children:[e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-3)"},children:[l.total," results"]}),e.jsxs(s,{href:n("user.jobs.browse"),className:"reset-link",children:[e.jsx("i",{className:"ti ti-refresh"})," Reset All"]})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-group-label",children:"Categories"}),e.jsx("ul",{className:"filter-list",children:p.map(r=>e.jsx("li",{children:e.jsxs(s,{href:c({category:r.id}),className:String(i.category)===String(r.id)?"active":"",onClick:()=>b(),preserveScroll:!0,children:[r.name," ",e.jsx("span",{className:"fcount",children:r.job_sections_count??0})]})},r.id))})]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-group-label",children:"Location"}),e.jsx("ul",{className:"filter-list",children:u.map(r=>e.jsx("li",{children:e.jsxs(s,{href:c({location:r}),className:i.location===r?"active":"",onClick:()=>b(),preserveScroll:!0,children:[e.jsx("i",{className:"ti ti-map-pin me-1",style:{color:"var(--accent)"}}),r]})},r))})]}),e.jsx("div",{className:"filter-divider"}),e.jsxs("div",{className:"filter-group",children:[e.jsx("span",{className:"filter-group-label",children:"Salary Range"}),e.jsx("ul",{className:"filter-list",children:j.map(r=>e.jsx("li",{children:e.jsxs(s,{href:c({salary:r}),className:i.salary===r?"active":"",onClick:()=>b(),preserveScroll:!0,children:[e.jsx("i",{className:"ti ti-coin me-1",style:{color:"var(--accent)"}}),r]})},r))})]})]})]}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"jobs-cta",children:[e.jsx("div",{className:"jobs-cta-glow"}),e.jsxs("div",{className:"jobs-cta-content",children:[e.jsx("span",{className:"eyebrow",children:"Post Your work"}),e.jsx("h3",{children:"Showcase Your Skills & Find Work Today!"}),e.jsx("p",{children:"Post your work in minutes and reach thousands of potential clients. Verified listings get more visibility and faster responses. Takes less than 5 minutes."})]}),e.jsxs("div",{className:"jobs-cta-actions",children:[e.jsxs("button",{type:"button",onClick:()=>z(),className:"btn-fc-primary",children:[e.jsx("i",{className:"ti ti-plus"})," Post Your work"]}),e.jsx(s,{href:n("user.talents"),className:"btn-fc-outline",children:"Browse Skills"})]})]})}),e.jsx("div",{className:"modal fade fc-modal",id:"postJobModalBrowse",tabIndex:"-1","aria-hidden":"true",ref:g,children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{children:[e.jsxs("h5",{className:"modal-title",children:["Post a New Job / work",e.jsx("small",{children:"Fill in the details below to publish your listing"})]}),e.jsx("span",{className:"accent-line"})]}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>v(),children:"✕"})]}),e.jsxs("form",{onSubmit:L,noValidate:!0,children:[e.jsx("div",{className:"modal-body",children:e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-12",children:[e.jsxs("label",{className:"fc-form-label",children:["Job Title ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("input",{type:"text",className:`fc-form-control${a.errors.title?" is-invalid":""}`,placeholder:"e.g., Senior Laravel Developer",value:a.data.title,onChange:r=>a.setData("title",r.target.value),required:!0}),a.errors.title&&e.jsx("p",{className:"fc-form-error",children:a.errors.title})]}),e.jsxs("div",{className:"col-12",children:[e.jsxs("label",{className:"fc-form-label",children:["Description ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("textarea",{className:`fc-form-control${a.errors.description?" is-invalid":""}`,rows:"4",placeholder:"Describe the job responsibilities, requirements, and benefits...",value:a.data.description,onChange:r=>a.setData("description",r.target.value),required:!0}),a.errors.description&&e.jsx("p",{className:"fc-form-error",children:a.errors.description})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"fc-form-label",children:["Category ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsxs("select",{className:`fc-form-control${a.errors.job_category_id?" is-invalid":""}`,value:a.data.job_category_id,onChange:r=>a.setData("job_category_id",r.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Select Category"}),p.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),a.errors.job_category_id&&e.jsx("p",{className:"fc-form-error",children:a.errors.job_category_id})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("label",{className:"fc-form-label",children:["Location ",e.jsx("span",{style:{color:"var(--accent)"},children:"*"})]}),e.jsx("input",{type:"text",className:`fc-form-control${a.errors.location?" is-invalid":""}`,placeholder:"e.g., Kigali, Rwanda / Remote",value:a.data.location,onChange:r=>a.setData("location",r.target.value),required:!0}),a.errors.location&&e.jsx("p",{className:"fc-form-error",children:a.errors.location})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Job Type"}),e.jsx("select",{className:"fc-form-control",value:a.data.type,onChange:r=>a.setData("type",r.target.value),children:T.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Experience Level"}),e.jsx("select",{className:"fc-form-control",value:a.data.experience_level,onChange:r=>a.setData("experience_level",r.target.value),children:O.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Salary Range"}),e.jsx("input",{type:"text",className:"fc-form-control",placeholder:"e.g., 300K – 800K RWF",value:a.data.salary_range,onChange:r=>a.setData("salary_range",r.target.value)})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("label",{className:"fc-form-label",children:"Skills (comma separated)"}),e.jsx("input",{type:"text",className:"fc-form-control",placeholder:"e.g., Laravel, Vue, CSS",value:a.data.skills,onChange:r=>a.setData("skills",r.target.value)})]})]})}),e.jsxs("div",{className:"modal-footer",style:{gap:10},children:[e.jsx("button",{type:"button",className:"btn-fc-outline",onClick:()=>v(),disabled:a.processing,children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-fc-primary",disabled:a.processing,children:[e.jsx("i",{className:`ti ${a.processing?"ti-loader-2":"ti-send"}`})," ",a.processing?"Posting…":"Post Job"]})]})]})]})})})]})}M.layout=l=>e.jsx(F,{children:l,title:"Browse Jobs"});export{M as default};
