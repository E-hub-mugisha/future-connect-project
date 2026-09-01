import{r as v,j as e,H as w,L as a}from"./app-DQcVR1sC.js";import{G as y}from"./GuestLayout-AyS9Rfgz.js";function j({categories:i=[],courses:s=[]}){const[n,f]=v.useState("all"),l=s.filter(r=>n==="all"||(r.tag??"featured").toLowerCase()===n);function d(r){var t;return r.courses_count??((t=r.courses)==null?void 0:t.length)??0}function c(r){return r.avg_rating!=null?Number(r.avg_rating):Array.isArray(r.feedback)&&r.feedback.length?r.feedback.reduce((t,o)=>t+o.rating,0)/r.feedback.length:0}function u(r){return r.reviews_count!=null?r.reviews_count:Array.isArray(r.feedback)?r.feedback.length:0}return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"All Courses"}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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

        /* ─── PAGE HEADER ─── */
        .page-header {
          position: relative;
          background: var(--bg2);
          border-bottom: 1px solid var(--border);
          padding: 52px 0 44px;
          overflow: hidden;
        }

        .page-header::before {
          content: '';
          position: absolute;
          top: -100px; right: -60px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(0,166,103,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .page-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,166,103,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,166,103,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .ph-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: var(--green); margin-bottom: 10px;
          position: relative; z-index: 1;
        }

        .ph-eyebrow::before {
          content: '';
          display: inline-block; width: 18px; height: 2px;
          background: var(--green); border-radius: 1px;
        }

        .page-header h1 {
          font-family: var(--font-head);
          font-size: clamp(1.7rem, 4vw, 2.6rem);
          font-weight: 800; color: var(--white);
          letter-spacing: -0.03em; margin-bottom: 10px;
          position: relative; z-index: 1;
        }

        .page-header h1 .accent { color: var(--green); }

        .page-header p {
          color: var(--muted); font-size: 0.92rem;
          max-width: 480px; line-height: 1.7;
          position: relative; z-index: 1;
        }

        .ph-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.78rem; color: var(--muted);
          margin-bottom: 16px;
          position: relative; z-index: 1;
        }

        .ph-breadcrumb a { color: var(--muted); text-decoration: none; transition: color var(--t); }
        .ph-breadcrumb a:hover { color: var(--green); }
        .ph-breadcrumb .sep { color: var(--border); }
        .ph-breadcrumb .current { color: var(--green); font-weight: 600; }

        /* ─── CATEGORY STRIP ─── */
        .cat-strip {
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          padding: 14px 0;
        }

        .cat-scroll {
          display: flex; gap: 10px; overflow-x: auto;
          padding-bottom: 4px; scrollbar-width: none;
        }
        .cat-scroll::-webkit-scrollbar { display: none; }

        .cat-chip {
          flex-shrink: 0;
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 50px; padding: 7px 16px;
          font-size: 0.78rem; font-weight: 500;
          color: var(--muted); text-decoration: none; white-space: nowrap;
          transition: var(--t);
        }
        .cat-chip:hover { border-color: var(--green); color: var(--green); background: var(--green-dim); }
        .cat-chip.active { border-color: var(--green); color: var(--green); background: var(--green-dim); }

        /* ─── BUTTONS ─── */
        .btn-green {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green); color: #fff;
          font-family: var(--font-body); font-weight: 600; font-size: 0.85rem;
          padding: 10px 20px; border-radius: var(--radius);
          border: none; cursor: pointer; text-decoration: none;
          transition: var(--t);
        }
        .btn-green:hover { background: #00bf76; color:#fff; transform: translateY(-2px); box-shadow: 0 0 18px var(--green-glow); }

        /* ─── LAYOUT ─── */
        .listing-layout { padding: 48px 0 80px; }

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
          border: 1px solid var(--border); background: transparent;
          color: var(--muted); cursor: pointer; transition: var(--t);
        }
        .filter-tab:hover { border-color: var(--green); color: var(--green); }
        .filter-tab.active {
          background: var(--green); border-color: var(--green);
          color: #fff; box-shadow: 0 0 10px var(--green-glow);
        }

        .result-count { font-size: 0.8rem; color: var(--muted); }
        .result-count strong { color: var(--green); font-family: var(--font-head); }

        /* ─── COURSE GRID ─── */
        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .course-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: var(--radius-lg); overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform var(--t), border-color var(--t), box-shadow var(--t);
        }

        .course-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0,166,103,0.35);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .course-thumb {
          position: relative; overflow: hidden; height: 190px;
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
          text-decoration: none; display: inline-block;
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
          font-size: 0.78rem; color: var(--muted); margin-bottom: 14px;
        }
        .course-rating .stars { color: #f59e0b; font-size: 11px; }
        .course-rating .score { color: var(--text); font-weight: 600; }

        .delivery-tag {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.72rem; color: var(--green);
          background: var(--green-dim); border: 1px solid rgba(0,166,103,0.2);
          border-radius: 50px; padding: 3px 10px;
          margin-bottom: 14px;
        }

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

        /* ─── SIDEBAR ─── */
        .sidebar-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 20px; margin-bottom: 16px;
        }

        .sidebar-title {
          font-family: var(--font-head); font-size: 0.82rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--muted); margin-bottom: 14px;
          display: flex; align-items: center; gap: 8px;
        }
        .sidebar-title i { color: var(--green); }

        .sidebar-cat-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 9px 0; border-bottom: 1px solid var(--border);
          text-decoration: none; color: var(--text); font-size: 0.85rem;
          transition: color var(--t);
        }
        .sidebar-cat-link:last-child { border-bottom: none; }
        .sidebar-cat-link:hover, .sidebar-cat-link.active { color: var(--green); }

        .sidebar-count {
          font-size: 0.72rem; color: var(--muted);
          background: var(--bg3); border-radius: 50px; padding: 2px 8px;
        }

        /* ─── SECTION LABEL ─── */
        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--green); margin-bottom: 6px;
        }
        .section-label::before {
          content:''; display:inline-block;
          width:18px; height:2px; background:var(--green); border-radius:1px;
        }

        .section-title {
          font-family: var(--font-head);
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          font-weight: 800; color: var(--white);
          letter-spacing: -0.02em; margin-bottom: 4px;
        }

        .section-sub { color: var(--muted); font-size: 0.88rem; }

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

        [data-h-theme="light"] .page-header::after {
          background-image:
            linear-gradient(rgba(0, 100, 60, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 100, 60, 0.06) 1px, transparent 1px);
        }

        [data-h-theme="light"] .page-header::before {
          background: radial-gradient(circle, rgba(0,166,103,0.08) 0%, transparent 70%);
        }

        [data-h-theme="light"] .course-thumb-overlay {
          background: linear-gradient(to top, rgba(16,32,27,0.35) 0%, transparent 50%);
        }

        [data-h-theme="light"] .thumb-price {
          border-color: rgba(0, 100, 60, 0.25);
        }

        [data-h-theme="light"] .sidebar-card[style*="border-color"] {
          border-color: rgba(0, 166, 103, 0.3) !important;
        }
      `}),e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"ph-breadcrumb",children:[e.jsx(a,{href:"/",children:"Home"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"current",children:"Courses"})]}),e.jsx("div",{className:"ph-eyebrow",children:"Learning Center"}),e.jsxs("h1",{children:["All ",e.jsx("span",{className:"accent",children:"Courses"})]}),e.jsx("p",{children:"Browse every course on the platform, taught by verified professionals across all categories."})]})}),e.jsx("div",{className:"cat-strip",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cat-scroll",children:[e.jsx(a,{href:route("user.courses"),className:"cat-chip active",children:"All Categories"}),i.map(r=>e.jsxs(a,{href:`/courses/category/${r.slug}`,className:"cat-chip",children:[r.name,e.jsxs("span",{style:{color:"var(--green)",marginLeft:"4px",fontSize:"0.7rem"},children:["(",d(r),")"]})]},r.id))]})})}),e.jsx("div",{className:"section-divider"}),e.jsx("div",{className:"listing-layout",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-lg-3 d-none d-lg-block",children:[e.jsxs("div",{className:"sidebar-card",style:{borderColor:"rgba(0,166,103,0.3)",background:"var(--green-dim)"},children:[e.jsx("div",{style:{fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--green)",fontWeight:700,marginBottom:"6px"},children:"Viewing"}),e.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"1.05rem",fontWeight:800,color:"var(--white)"},children:"All Courses"}),e.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--muted)",marginTop:"4px"},children:[s.length," course(s) available"]})]}),e.jsxs("div",{className:"sidebar-card",children:[e.jsxs("div",{className:"sidebar-title",children:[e.jsx("i",{className:"ti ti-layout-grid"})," Categories"]}),i.map(r=>e.jsxs(a,{href:`/courses/category/${r.slug}`,className:"sidebar-cat-link",children:[r.name,e.jsx("span",{className:"sidebar-count",children:d(r)})]},r.id))]})]}),e.jsxs("div",{className:"col-lg-9",children:[e.jsx("div",{className:"d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4",children:e.jsxs("div",{children:[e.jsx("div",{className:"section-label",children:"Catalog"}),e.jsx("div",{className:"section-title",children:"Browse All Courses"}),e.jsx("p",{className:"section-sub",children:"Learning center & courses listing"})]})}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("div",{className:"filter-tabs",children:N.map(r=>e.jsx("button",{className:`filter-tab${n===r.value?" active":""}`,onClick:()=>f(r.value),children:r.label},r.value))}),e.jsxs("span",{className:"result-count d-none d-md-block",children:[e.jsx("strong",{children:l.length})," of ",e.jsx("strong",{children:s.length})," course(s)"]})]}),e.jsx("div",{className:"course-grid",id:"courseGrid",children:l.length>0?l.map(r=>{var t,o,g,p,m,b,x;return e.jsx("div",{className:"course-item",children:e.jsxs("div",{className:"course-card",children:[e.jsxs("div",{className:"course-thumb",children:[e.jsx(a,{href:route("user.courses.show",r.slug),children:e.jsx("img",{src:`/images/thumbnails/${r.thumbnail}`,alt:r.title})}),e.jsx("div",{className:"course-thumb-overlay"}),e.jsx("span",{className:"thumb-badge",children:((t=r.category)==null?void 0:t.name)??"Course"}),e.jsx("span",{className:"thumb-price",children:r.is_free?"Free":`$${Number(r.price).toFixed(2)}`})]}),e.jsxs("div",{className:"course-body",children:[e.jsx(a,{href:(o=r.category)!=null&&o.slug?`/courses/category/${r.category.slug}`:route("user.courses"),className:"course-cat",children:((g=r.category)==null?void 0:g.name)??""}),e.jsx(a,{href:route("user.courses.show",r.slug),className:"course-title",children:r.title}),e.jsxs("div",{className:"course-rating",children:[e.jsx("span",{className:"stars",children:Array.from({length:5}).map((k,h)=>e.jsx("i",{className:h<Math.round(c(r))?"ti ti-star-filled":"ti ti-star"},h))}),e.jsx("span",{className:"score",children:c(r).toFixed(1)}),e.jsxs("span",{children:["(",u(r)," reviews)"]})]}),e.jsxs("div",{className:"delivery-tag",children:[e.jsx("i",{className:"ti ti-clock",style:{fontSize:"11px"}})," Delivery in 1 day"]}),e.jsxs("div",{className:"course-instructor",children:[e.jsx("img",{className:"inst-avatar",src:(p=r.talent)!=null&&p.image?`/image/talents/${r.talent.image}`:"/assets/img/user/profile.jpg",alt:((m=r.talent)==null?void 0:m.name)??""}),e.jsxs("div",{className:"inst-info",children:[e.jsx("div",{className:"inst-name",children:((b=r.talent)==null?void 0:b.name)??"Unknown"}),e.jsxs("div",{className:"inst-loc",children:[e.jsx("i",{className:"ti ti-map-pin",style:{fontSize:"10px"}})," ",((x=r.talent)==null?void 0:x.region)??"N/A"]})]}),e.jsx(a,{href:route("user.courses.show",r.slug),className:"course-view-btn",children:e.jsx("i",{className:"feather-arrow-right"})})]})]})]})},r.id)}):e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-books"}),e.jsx("h4",{children:"No courses found"}),e.jsx("p",{children:"No courses match this filter yet."}),e.jsxs(a,{href:route("user.courses"),className:"btn-green mt-3",style:{margin:"0 auto"},children:[e.jsx("i",{className:"ti ti-arrow-left"})," View All Courses"]})]})})]})]})})})]})}const N=[{value:"all",label:"All"},{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"featured",label:"Featured"}];j.layout=i=>e.jsx(y,{children:i,title:"All Courses",description:"Browse every course on the platform, taught by verified professionals across all categories."});export{j as default};
