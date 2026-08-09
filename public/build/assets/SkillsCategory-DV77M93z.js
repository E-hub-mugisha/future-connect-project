import{r as d,j as e,H as E,L as o,a as A}from"./app-CZoN4D26.js";import{G as R}from"./GuestLayout-CYGwNZhv.js";const i={talentsCategory:t=>`/skills/category/${t}`,talentDetails:t=>`/skills/${t}`,skills:"/skills",search:"/search"};function T({categoryName:t,categories:c=[],talents:p=[],filters:m={}}){const[g,k]=d.useState("all"),[b,x]=d.useState(""),[w,h]=d.useState(null),[v,S]=d.useState(m.keyword||""),[f,C]=d.useState(m.category||""),u=a=>!a.feedback||a.feedback.length===0?"0.0":(a.feedback.reduce((s,l)=>s+(l.rating||0),0)/a.feedback.length).toFixed(1),n=d.useMemo(()=>p.filter(a=>{var j,y,N;const r=g==="all"||(a.tag||"featured").toLowerCase()===g,s=b.toLowerCase(),l=!s||((j=a.name)==null?void 0:j.toLowerCase().includes(s))||((N=(y=a.category)==null?void 0:y.name)==null?void 0:N.toLowerCase().includes(s));return r&&l}),[p,g,b]),z=a=>{a.preventDefault(),A.get(i.search,{keyword:v,category:f},{preserveState:!0})},F=[{key:"all",label:"All"},{key:"latest",label:"Latest"},{key:"popular",label:"Popular"},{key:"featured",label:"Featured"},{key:"recommended",label:"Recommended"}];return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:`${t} Skills`}),e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap",rel:"stylesheet"}),e.jsx("style",{children:`
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

                .fc-talents, .fc-talents *, .fc-talents *::before, .fc-talents *::after { box-sizing: border-box; }
                .fc-talents { background: var(--bg); font-family: var(--font-body); color: var(--text); }

                /* ─── PAGE HEADER ─── */
                .page-header {
                    background: var(--bg2);
                    border-bottom: 1px solid var(--border);
                    padding: 48px 0 40px;
                    position: relative;
                    overflow: hidden;
                }

                .page-header::before {
                    content: '';
                    position: absolute;
                    top: -80px; right: -80px;
                    width: 320px; height: 320px;
                    background: radial-gradient(circle, rgba(0,166,103,0.1) 0%, transparent 70%);
                    pointer-events: none;
                }

                .page-header-eyebrow {
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

                .page-header-eyebrow::before {
                    content: '';
                    display: inline-block;
                    width: 18px; height: 2px;
                    background: var(--green);
                    border-radius: 1px;
                }

                .page-header h1 {
                    font-family: var(--font-head);
                    font-size: clamp(1.6rem, 4vw, 2.4rem);
                    font-weight: 800;
                    color: var(--white);
                    letter-spacing: -0.03em;
                    margin-bottom: 8px;
                }

                .page-header h1 .accent { color: var(--green); }

                .page-header p {
                    color: var(--muted);
                    font-size: 0.92rem;
                    max-width: 480px;
                }

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

                .btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: var(--text);
                    font-family: var(--font-body); font-weight: 500; font-size: 0.85rem;
                    padding: 10px 20px; border-radius: var(--radius);
                    border: 1px solid var(--border); cursor: pointer; text-decoration: none;
                    transition: var(--t);
                }
                .btn-outline:hover { border-color: var(--green); color: var(--green); background: var(--green-dim); }

                /* ─── CATEGORY STRIP ─── */
                .cat-strip {
                    background: var(--bg);
                    border-bottom: 1px solid var(--border);
                    padding: 16px 0;
                }

                .cat-scroll {
                    display: flex; gap: 10px;
                    overflow-x: auto; padding-bottom: 4px;
                    scrollbar-width: none;
                }
                .cat-scroll::-webkit-scrollbar { display: none; }

                .cat-chip {
                    flex-shrink: 0;
                    background: var(--bg2);
                    border: 1px solid var(--border);
                    border-radius: 50px;
                    padding: 7px 16px;
                    font-size: 0.78rem; font-weight: 500;
                    color: var(--muted); text-decoration: none;
                    white-space: nowrap;
                    transition: var(--t);
                }
                .cat-chip:hover, .cat-chip.active {
                    border-color: var(--green);
                    color: var(--green);
                    background: var(--green-dim);
                }

                /* ─── LAYOUT ─── */
                .listing-layout {
                    padding: 48px 0 80px;
                }

                /* ─── FILTER BAR ─── */
                .filter-bar {
                    background: var(--bg2);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 16px 20px;
                    margin-bottom: 28px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: space-between;
                }

                .filter-tabs {
                    display: flex; gap: 6px; flex-wrap: wrap;
                }

                .filter-tab {
                    padding: 7px 16px;
                    border-radius: 50px;
                    font-size: 0.8rem; font-weight: 600;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--muted);
                    cursor: pointer;
                    transition: var(--t);
                }

                .filter-tab:hover { border-color: var(--green); color: var(--green); }

                .filter-tab.active {
                    background: var(--green);
                    border-color: var(--green);
                    color: #fff;
                    box-shadow: 0 0 10px var(--green-glow);
                }

                .sort-select {
                    background: var(--bg3);
                    border: 1px solid var(--border);
                    color: var(--text);
                    border-radius: var(--radius);
                    padding: 8px 14px;
                    font-size: 0.8rem;
                    font-family: var(--font-body);
                    cursor: pointer;
                    transition: border-color var(--t);
                    min-width: 160px;
                }
                .sort-select:focus { border-color: var(--green); outline: none; }

                /* ─── TALENT CARDS ─── */
                .talent-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                    gap: 20px;
                }

                .talent-card {
                    background: var(--bg2);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 24px 20px 20px;
                    display: flex; flex-direction: column; align-items: center;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    transition: transform var(--t), border-color var(--t), box-shadow var(--t);
                    text-decoration: none;
                }

                .talent-card::before {
                    content: '';
                    position: absolute; top: 0; left: 0; right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, var(--green), transparent);
                    opacity: 0; transition: opacity var(--t);
                }

                .talent-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(0,166,103,0.35);
                    box-shadow: 0 16px 40px rgba(0,0,0,0.35);
                }

                .talent-card:hover::before { opacity: 1; }

                .talent-avatar-wrap {
                    position: relative;
                    width: 84px; height: 84px;
                    margin-bottom: 16px;
                }

                .talent-avatar {
                    width: 84px; height: 84px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid var(--border);
                    transition: border-color var(--t);
                }

                .talent-card:hover .talent-avatar { border-color: var(--green); }

                .verify-badge {
                    position: absolute; bottom: 2px; right: 2px;
                    width: 22px; height: 22px;
                    background: var(--bg2);
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 13px; color: var(--green);
                    border: 1px solid var(--border);
                }

                .talent-name {
                    font-family: var(--font-head);
                    font-size: 0.95rem; font-weight: 700;
                    color: var(--white);
                    margin-bottom: 4px;
                    text-decoration: none;
                    transition: color var(--t);
                }

                .talent-card:hover .talent-name { color: var(--green); }

                .talent-cat {
                    font-size: 0.75rem;
                    color: var(--green);
                    background: var(--green-dim);
                    border: 1px solid rgba(0,166,103,0.2);
                    border-radius: 50px;
                    padding: 3px 10px;
                    margin-bottom: 14px;
                    display: inline-block;
                }

                .talent-badges {
                    display: flex; gap: 8px; justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 16px;
                }

                .tbadge {
                    display: inline-flex; align-items: center; gap: 5px;
                    background: var(--bg3);
                    border: 1px solid var(--border);
                    border-radius: 50px;
                    padding: 4px 12px;
                    font-size: 0.75rem;
                    color: var(--muted);
                }

                .tbadge i { color: var(--green); font-size: 11px; }

                .talent-view-btn {
                    display: inline-flex; align-items: center; gap: 7px;
                    background: var(--green-dim);
                    border: 1px solid rgba(0,166,103,0.25);
                    color: var(--green);
                    border-radius: 50px;
                    padding: 9px 22px;
                    font-size: 0.8rem; font-weight: 700;
                    text-decoration: none;
                    transition: var(--t);
                    margin-top: auto;
                    width: 100%; justify-content: center;
                }

                .talent-view-btn:hover {
                    background: var(--green);
                    color: #fff;
                    border-color: var(--green);
                    box-shadow: 0 0 14px var(--green-glow);
                }

                .empty-state {
                    grid-column: 1/-1;
                    text-align: center;
                    padding: 80px 20px;
                    color: var(--muted);
                }

                .empty-state i { font-size: 3rem; color: var(--border); display: block; margin-bottom: 16px; }

                .empty-state h4 {
                    font-family: var(--font-head);
                    color: var(--text);
                    margin-bottom: 8px;
                }

                /* ─── SIDEBAR (desktop) ─── */
                .sidebar-card {
                    background: var(--bg2);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 20px;
                    margin-bottom: 18px;
                }

                .sidebar-title {
                    font-family: var(--font-head);
                    font-size: 0.85rem; font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--muted);
                    margin-bottom: 14px;
                    display: flex; align-items: center; gap: 8px;
                }

                .sidebar-title i { color: var(--green); }

                .sidebar-cat-link {
                    display: flex; align-items: center; justify-content: space-between;
                    padding: 9px 0;
                    border-bottom: 1px solid var(--border);
                    text-decoration: none;
                    color: var(--text);
                    font-size: 0.85rem;
                    transition: color var(--t);
                }

                .sidebar-cat-link:last-child { border-bottom: none; }
                .sidebar-cat-link:hover, .sidebar-cat-link.active { color: var(--green); }

                .sidebar-cat-link .count {
                    font-size: 0.72rem;
                    color: var(--muted);
                    background: var(--bg3);
                    border-radius: 50px;
                    padding: 2px 8px;
                }

                .sidebar-search {
                    background: var(--bg3);
                    border: 1px solid var(--border);
                    color: var(--text);
                    border-radius: var(--radius);
                    padding: 10px 14px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    width: 100%;
                    transition: border-color var(--t);
                }
                .sidebar-search::placeholder { color: var(--muted); }
                .sidebar-search:focus { border-color: var(--green); outline: none; }

                /* ─── OFFCANVAS ─── */
                #mobileFilters .offcanvas-body,
                #mobileFilters .offcanvas-header {
                    background: var(--bg2);
                    color: var(--white);
                    border-right: 1px solid var(--border);
                }

                #mobileFilters .btn-close { filter: invert(1); }

                /* ─── MOBILE CAROUSEL ─── */
                .carousel-indicators [data-bs-target] {
                    background-color: var(--green);
                    border-radius: 2px;
                    width: 18px; height: 3px;
                    border: none;
                    opacity: 0.4;
                }
                .carousel-indicators .active { opacity: 1; width: 28px; }

                .carousel-control-prev-icon,
                .carousel-control-next-icon {
                    filter: none;
                    background-color: var(--green-dim);
                    border-radius: 50%;
                    padding: 18px;
                }

                /* ─── PAGINATION ─── */
                .pagination-wrap {
                    display: flex; justify-content: center;
                    gap: 8px; margin-top: 48px;
                }

                .page-btn {
                    width: 38px; height: 38px;
                    display: flex; align-items: center; justify-content: center;
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                    background: var(--bg2);
                    color: var(--text);
                    font-size: 0.85rem;
                    cursor: pointer;
                    text-decoration: none;
                    transition: var(--t);
                }

                .page-btn:hover, .page-btn.active {
                    border-color: var(--green);
                    color: var(--green);
                    background: var(--green-dim);
                }

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
                    --green-glow: rgba(0, 166, 103, 0.2);
                    --text:       #10201b;
                    --muted:      #5b7a70;
                    --white:      #10201b;
                }

                [data-h-theme="light"] .page-header::before {
                    background: radial-gradient(circle, rgba(0,166,103,0.07) 0%, transparent 70%);
                }

                [data-h-theme="light"] #mobileFilters .btn-close,
                [data-h-theme="light"] .btn-close-white {
                    filter: none;
                }
            `}),e.jsxs("div",{className:"fc-talents",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"page-header-eyebrow",children:"Category"}),e.jsxs("h1",{children:["Explore ",e.jsx("span",{className:"accent",children:t})," Skilled People"]}),e.jsx("p",{children:"Connect with the next wave of skilled professionals — fresh perspectives, verified talent."})]})}),e.jsx("div",{className:"cat-strip",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"cat-scroll",children:c.map(a=>e.jsx(o,{href:i.talentsCategory(a.slug),className:`cat-chip ${a.name===t?"active":""}`,children:a.name},a.id))})})}),e.jsx("div",{className:"section-divider"}),e.jsx("div",{className:"listing-layout",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"d-lg-none mb-4 d-flex gap-3 align-items-center",children:[e.jsxs("button",{className:"btn-outline","data-bs-toggle":"offcanvas","data-bs-target":"#mobileFilters",children:[e.jsx("i",{className:"ti ti-filter"})," Filters & Categories"]}),e.jsxs("button",{className:"btn-outline","data-bs-toggle":"modal","data-bs-target":"#searchModal",children:[e.jsx("i",{className:"ti ti-search"})," Search"]})]}),e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-lg-3 d-none d-lg-block",children:[e.jsxs("div",{className:"sidebar-card",children:[e.jsxs("div",{className:"sidebar-title",children:[e.jsx("i",{className:"ti ti-search"})," Search"]}),e.jsx("input",{type:"text",className:"sidebar-search",placeholder:"Search talents...",value:b,onChange:a=>x(a.target.value)})]}),e.jsxs("div",{className:"sidebar-card",children:[e.jsxs("div",{className:"sidebar-title",children:[e.jsx("i",{className:"ti ti-layout-grid"})," Categories"]}),c.map(a=>{var r;return e.jsxs(o,{href:i.talentsCategory(a.slug),className:`sidebar-cat-link ${a.name===t?"active":""}`,children:[a.name,e.jsx("span",{className:"count",children:((r=a.talents)==null?void 0:r.length)??0})]},a.id)})]})]}),e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"filter-bar",children:[e.jsx("div",{className:"filter-tabs",children:F.map(a=>e.jsx("button",{className:`filter-tab ${g===a.key?"active":""}`,onClick:()=>k(a.key),children:a.label},a.key))}),e.jsx("div",{className:"d-flex align-items-center gap-3",children:e.jsxs("button",{className:"btn-green d-none d-md-inline-flex","data-bs-toggle":"modal","data-bs-target":"#searchModal",children:[e.jsx("i",{className:"ti ti-search"})," Search Skills"]})})]}),e.jsx("div",{className:"talent-grid d-none d-md-grid",children:n.length>0?n.map(a=>{var r,s;return e.jsx("div",{className:"talent-card-wrap talent-item",onMouseEnter:()=>h(a.id),onMouseLeave:()=>h(null),children:e.jsxs("div",{className:"talent-card",children:[e.jsxs("div",{className:"talent-avatar-wrap",children:[e.jsx("img",{className:"talent-avatar",src:a.image?`/${a.image}`:"/assets/img/user/profile.jpg",alt:a.name}),e.jsx("span",{className:"verify-badge",children:e.jsx("i",{className:"ti ti-discount-check-filled"})})]}),e.jsx(o,{href:i.talentDetails(a.id),className:"talent-name",children:a.name}),e.jsx("span",{className:"talent-cat",children:((r=a.category)==null?void 0:r.name)??"Uncategorized"}),w===a.id?e.jsxs("div",{className:"talent-badges",children:[e.jsx("span",{className:"tbadge",children:a.skill}),e.jsx("span",{className:"tbadge",children:a.language})]}):e.jsxs("div",{className:"talent-badges",children:[e.jsxs("span",{className:"tbadge",children:[e.jsx("i",{className:"ti ti-star"}),u(a)]}),e.jsxs("span",{className:"tbadge",children:[e.jsx("i",{className:"ti ti-message-2"}),((s=a.feedback)==null?void 0:s.length)??0]})]}),e.jsxs(o,{href:i.talentDetails(a.id),className:"talent-view-btn",children:[e.jsx("i",{className:"feather-arrow-right"})," View Profile"]})]})},a.id)}):e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-users-off"}),e.jsx("h4",{children:"No skills found"}),e.jsx("p",{children:"Try a different category or search keyword."})]})}),e.jsxs("div",{id:"talentsCarousel",className:"carousel slide d-md-none","data-bs-ride":"carousel",children:[e.jsx("div",{className:"carousel-inner",children:n.length>0?n.map((a,r)=>{var s,l;return e.jsx("div",{className:`carousel-item ${r===0?"active":""}`,children:e.jsxs("div",{className:"talent-card mx-auto",style:{maxWidth:320},children:[e.jsxs("div",{className:"talent-avatar-wrap",children:[e.jsx("img",{className:"talent-avatar",src:a.image?`/image/talents/${a.image}`:"/assets/img/user/profile.jpg",alt:a.name}),e.jsx("span",{className:"verify-badge",children:e.jsx("i",{className:"ti ti-discount-check-filled"})})]}),e.jsx(o,{href:i.talentDetails(a.id),className:"talent-name",children:a.name}),e.jsx("span",{className:"talent-cat",children:((s=a.category)==null?void 0:s.name)??"Uncategorized"}),e.jsxs("div",{className:"talent-badges",children:[e.jsxs("span",{className:"tbadge",children:[e.jsx("i",{className:"ti ti-star"})," ",u(a)]}),e.jsxs("span",{className:"tbadge",children:[e.jsx("i",{className:"ti ti-message-2"})," ",((l=a.feedback)==null?void 0:l.length)??0]}),e.jsx("span",{className:"tbadge",children:a.language})]}),e.jsxs(o,{href:i.talentDetails(a.id),className:"talent-view-btn",children:[e.jsx("i",{className:"feather-arrow-right"})," View Profile"]})]})},a.id)}):e.jsx("div",{className:"carousel-item active",children:e.jsxs("div",{className:"empty-state",children:[e.jsx("i",{className:"ti ti-users-off"}),e.jsx("h4",{children:"No talents found"})]})})}),n.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#talentsCarousel","data-bs-slide":"prev",children:e.jsx("span",{className:"carousel-control-prev-icon"})}),e.jsx("button",{className:"carousel-control-next",type:"button","data-bs-target":"#talentsCarousel","data-bs-slide":"next",children:e.jsx("span",{className:"carousel-control-next-icon"})}),e.jsx("div",{className:"carousel-indicators",style:{bottom:-32},children:n.map((a,r)=>e.jsx("button",{type:"button","data-bs-target":"#talentsCarousel","data-bs-slide-to":r,className:r===0?"active":""},a.id))})]})]})]})]})]})}),e.jsxs("div",{className:"offcanvas offcanvas-start",tabIndex:-1,id:"mobileFilters",children:[e.jsxs("div",{className:"offcanvas-header",style:{background:"var(--bg2)",borderBottom:"1px solid var(--border)"},children:[e.jsx("h5",{className:"offcanvas-title",style:{fontFamily:"var(--font-head)",color:"var(--white)"},children:"Filters & Categories"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas",style:{filter:"invert(1)"}})]}),e.jsxs("div",{className:"offcanvas-body",style:{background:"var(--bg2)"},children:[e.jsx("input",{type:"text",className:"sidebar-search mb-4",placeholder:"Search talents...",value:b,onChange:a=>x(a.target.value)}),e.jsxs("div",{className:"sidebar-title mb-3",children:[e.jsx("i",{className:"ti ti-layout-grid"})," Categories"]}),c.map(a=>{var r;return e.jsxs(o,{href:i.talentsCategory(a.slug),className:`sidebar-cat-link ${a.name===t?"active":""}`,children:[a.name,e.jsx("span",{className:"count",children:((r=a.talents)==null?void 0:r.length)??0})]},a.id)})]})]}),e.jsx("div",{className:"modal fade",id:"searchModal",tabIndex:-1,"aria-hidden":"true",children:e.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:e.jsxs("div",{className:"modal-content",style:{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:"var(--radius-lg)"},children:[e.jsxs("div",{className:"modal-header",style:{background:"var(--bg3)",borderBottom:"1px solid var(--border)",padding:"20px 28px"},children:[e.jsxs("h5",{className:"modal-title",style:{fontFamily:"var(--font-head)",color:"var(--white)"},children:[e.jsx("i",{className:"ti ti-search me-2",style:{color:"var(--green)"}}),"Find Skills"]}),e.jsx("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal"})]}),e.jsx("div",{className:"modal-body",style:{padding:28},children:e.jsxs("form",{onSubmit:z,className:"row g-4",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{style:{fontSize:".78rem",fontWeight:600,textTransform:"uppercase",letterSpacing:".07em",color:"var(--muted)",marginBottom:6,display:"block"},children:"Keyword"}),e.jsx("input",{type:"text",className:"sidebar-search",style:{borderRadius:"var(--radius)"},placeholder:"Search talents, skills, or names...",value:v,onChange:a=>S(a.target.value)})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{style:{fontSize:".78rem",fontWeight:600,textTransform:"uppercase",letterSpacing:".07em",color:"var(--muted)",marginBottom:6,display:"block"},children:"Category"}),e.jsxs("select",{className:"sidebar-search",style:{borderRadius:"var(--radius)",cursor:"pointer"},value:f,onChange:a=>C(a.target.value),children:[e.jsx("option",{value:"",children:"All Categories"}),c.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]}),e.jsxs("div",{className:"col-12 d-flex justify-content-end gap-3",children:[e.jsx("button",{type:"button",className:"btn-outline","data-bs-dismiss":"modal",children:"Cancel"}),e.jsxs("button",{type:"submit",className:"btn-green",children:[e.jsx("i",{className:"ti ti-search"})," Search"]})]})]})})]})})})]})]})}T.layout=t=>e.jsx(R,{children:t,title:"Skills Marketplace"});export{T as default};
