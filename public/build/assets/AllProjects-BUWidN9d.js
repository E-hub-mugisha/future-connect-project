import{r as v,j as e,H as j,L as g,a as m}from"./app-BO26Fp_i.js";import{G as y}from"./GuestLayout-RkVoz6LJ.js";function N({categories:t=[],projects:r,filters:l={}}){const n=(r==null?void 0:r.data)??[],h=(r==null?void 0:r.links)??[],[o,s]=v.useState({category:l.category??"",location:l.location??"",keyword:l.keyword??"",status:l.status??""});function i(a={}){const c={...o,...a},f=Object.fromEntries(Object.entries(c).filter(([,u])=>u!==""));s(c),m.get(route("user.projects.all"),f,{preserveState:!0,preserveScroll:!0})}function x(a){a.preventDefault(),i()}function b(){s({category:"",location:"",keyword:"",status:""}),m.get(route("user.projects.all"))}const d=t.find(a=>String(a.id)===String(o.category)),p=Object.values(o).some(a=>a!=="");return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"All Projects"}),e.jsx("style",{children:`
        :root {
          --fc-bg: #0e1618;
          --fc-bg-alt: #141d20;
          --fc-card: #172124;
          --fc-border: #243033;
          --fc-accent: #48d597;
          --fc-accent-dark: #33a876;
          --fc-white: #ffffff;
          --fc-muted: #9fb0ae;
        }

        .fc-page { background: var(--fc-bg); color: var(--fc-white); }

        /* ---- Page header ---- */
        .fc-list-header {
          border-bottom: 1px solid var(--fc-border);
          padding: 48px 0 36px;
        }

        .fc-list-header h1 {
          font-weight: 700;
          font-size: 2rem;
          color: var(--fc-white);
          margin-bottom: 6px;
        }

        .fc-list-header h1 span { color: var(--fc-accent); }

        .fc-list-header p { color: var(--fc-muted); }

        .fc-breadcrumb {
          color: var(--fc-muted);
          font-size: .85rem;
          margin-bottom: 14px;
        }

        .fc-breadcrumb a { color: var(--fc-muted); text-decoration: none; }
        .fc-breadcrumb a:hover { color: var(--fc-accent); }

        /* ---- Filters ---- */
        .fc-filters {
          padding: 32px 0;
        }

        .fc-filter-card {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, .35);
        }

        .fc-filter-card label {
          color: var(--fc-muted);
          font-size: .78rem;
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: 6px;
          display: block;
          font-weight: 600;
        }

        .fc-filter-card .form-control,
        .fc-filter-card .form-select {
          background: var(--fc-bg-alt);
          border: 1px solid var(--fc-border);
          color: var(--fc-white);
          border-radius: 10px;
          padding: .6rem .9rem;
        }

        .fc-filter-card .form-control::placeholder { color: #5f7370; }

        .fc-filter-card .form-control:focus,
        .fc-filter-card .form-select:focus {
          background: var(--fc-bg-alt);
          border-color: var(--fc-accent);
          color: var(--fc-white);
          box-shadow: 0 0 0 3px rgba(72, 213, 151, .15);
        }

        .fc-filter-actions {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-top: 18px;
        }

        .btn-fc-primary {
          background: var(--fc-accent);
          border: none;
          color: #06231a;
          font-weight: 700;
          border-radius: 10px;
          padding: .65rem 1.4rem;
          transition: .2s ease;
        }

        .btn-fc-primary:hover { background: var(--fc-accent-dark); color: #06231a; }

        .fc-clear-link {
          color: var(--fc-muted);
          font-size: .85rem;
          text-decoration: underline;
          background: none;
          border: none;
          cursor: pointer;
        }

        .fc-clear-link:hover { color: var(--fc-accent); }

        .fc-active-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(72, 213, 151, .12);
          color: var(--fc-accent);
          border-radius: 30px;
          padding: 6px 12px;
          font-size: .8rem;
          font-weight: 600;
          margin-bottom: 18px;
        }

        .fc-active-chip button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          line-height: 1;
        }

        .fc-results-count { color: var(--fc-muted); font-size: .9rem; }

        /* ---- Project cards (same visual language as the landing page) ---- */
        .fc-listing { padding: 10px 0 70px; }

        .fc-gig-card {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 18px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: .25s ease;
        }

        .fc-gig-card:hover {
          border-color: var(--fc-accent);
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, .4);
        }

        .fc-gig-img {
          height: 120px;
          background: linear-gradient(135deg, rgba(72, 213, 151, .18), rgba(72, 213, 151, .03));
          position: relative;
        }

        .fc-badge-row {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }

        .fc-badge {
          font-size: .72rem;
          font-weight: 700;
          padding: 5px 10px;
          border-radius: 30px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .fc-badge-verified { background: rgba(72, 213, 151, .18); color: var(--fc-accent); }
        .fc-badge-status { background: rgba(255, 255, 255, .08); color: var(--fc-white); }

        .fc-gig-body { padding: 20px; display: flex; flex-direction: column; flex: 1; }

        .fc-gig-cat {
          display: inline-block;
          font-size: .72rem;
          font-weight: 700;
          color: var(--fc-accent);
          background: rgba(72, 213, 151, .1);
          padding: 4px 10px;
          border-radius: 20px;
          margin-bottom: 10px;
          width: fit-content;
        }

        .fc-gig-location {
          color: var(--fc-muted);
          font-size: .8rem;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .fc-gig-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; line-height: 1.35; }
        .fc-gig-title a { color: var(--fc-white); text-decoration: none; }
        .fc-gig-title a:hover { color: var(--fc-accent); }

        .fc-gig-desc { color: var(--fc-muted); font-size: .88rem; margin-bottom: 18px; flex: 1; }

        .fc-gig-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid var(--fc-border);
        }

        .fc-gig-footer .badge {
          background: var(--fc-bg-alt);
          color: var(--fc-muted);
          border: 1px solid var(--fc-border);
          font-weight: 500;
          padding: 6px 12px;
        }

        .btn-fc-outline {
          border: 1px solid var(--fc-accent);
          color: var(--fc-accent);
          background: transparent;
          border-radius: 30px;
          padding: .4rem 1.1rem;
          font-size: .85rem;
          font-weight: 600;
          text-decoration: none;
          transition: .2s;
        }

        .btn-fc-outline:hover { background: var(--fc-accent); color: #06231a; }

        .fc-empty {
          text-align: center;
          padding: 60px 20px;
          color: var(--fc-muted);
          border: 1px dashed var(--fc-border);
          border-radius: 18px;
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --fc-bg: #f6faf8;
          --fc-bg-alt: #eef4f1;
          --fc-card: #ffffff;
          --fc-border: rgba(0, 100, 60, 0.12);
          --fc-accent: #00a667;
          --fc-accent-dark: #00c07a;
          --fc-white: #10201b;
          --fc-muted: #5b7a70;
        }

        [data-h-theme="light"] .fc-filter-card,
        [data-h-theme="light"] .fc-gig-card:hover { box-shadow: 0 10px 30px rgba(0, 0, 0, .08); }

        [data-h-theme="light"] .fc-filter-card .form-control::placeholder { color: #a9c2b8; }

        [data-h-theme="light"] .fc-filter-card .form-control:focus,
        [data-h-theme="light"] .fc-filter-card .form-select:focus {
          box-shadow: 0 0 0 3px rgba(0, 166, 103, .15);
        }

        [data-h-theme="light"] .fc-gig-img {
          background: linear-gradient(135deg, rgba(0, 166, 103, .16), rgba(0, 166, 103, .03));
        }

        [data-h-theme="light"] .fc-badge-verified { background: rgba(0, 166, 103, .14); }
        [data-h-theme="light"] .fc-badge-status { background: rgba(0, 100, 60, .08); color: var(--fc-white); }
        [data-h-theme="light"] .fc-gig-cat { background: rgba(0, 166, 103, .08); }
      `}),e.jsxs("div",{className:"fc-page",children:[e.jsx("section",{className:"fc-list-header",children:e.jsxs("div",{className:"container p-4",children:[e.jsxs("div",{className:"fc-breadcrumb",children:[e.jsx(g,{href:route("user.projects.index"),children:"Projects"})," / All projects"]}),e.jsx("h1",{children:d?e.jsxs(e.Fragment,{children:["Projects in ",e.jsx("span",{children:d.name})]}):e.jsxs(e.Fragment,{children:["All ",e.jsx("span",{children:"projects"})]})}),e.jsx("p",{children:"Browse every open project and filter down to what matches your skills."})]})}),e.jsx("section",{className:"fc-filters",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"fc-filter-card",children:e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-3 mb-3 mb-md-0",children:[e.jsx("label",{children:"Category"}),e.jsxs("select",{className:"form-select",value:o.category,onChange:a=>i({category:a.target.value}),children:[e.jsx("option",{value:"",children:"All categories"}),t.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]}),e.jsxs("div",{className:"col-md-3 mb-3 mb-md-0",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{className:"form-select",value:o.status,onChange:a=>i({status:a.target.value}),children:[e.jsx("option",{value:"",children:"Any status"}),e.jsx("option",{value:"open",children:"Open"}),e.jsx("option",{value:"closed",children:"Closed"})]})]}),e.jsxs("div",{className:"col-md-3 mb-3 mb-md-0",children:[e.jsx("label",{children:"Location"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Kigali, Rwanda",value:o.location,onChange:a=>s(c=>({...c,location:a.target.value}))})]}),e.jsxs("div",{className:"col-md-3",children:[e.jsx("label",{children:"Keyword"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Need Graphic Designer",value:o.keyword,onChange:a=>s(c=>({...c,keyword:a.target.value}))})]})]}),e.jsxs("div",{className:"fc-filter-actions",children:[e.jsx("button",{type:"submit",className:"btn btn-fc-primary",children:"Apply filters"}),p&&e.jsx("button",{type:"button",className:"fc-clear-link",onClick:b,children:"Clear all filters"})]})]})})})}),e.jsx("section",{className:"fc-listing",children:e.jsxs("div",{className:"container",children:[d&&e.jsxs("div",{className:"fc-active-chip",children:[d.name,e.jsx("button",{type:"button",onClick:()=>i({category:""}),"aria-label":"Remove category filter",children:"×"})]}),e.jsx("div",{className:"d-flex justify-content-between align-items-center mb-3",children:e.jsxs("span",{className:"fc-results-count",children:[(r==null?void 0:r.total)??n.length," project",((r==null?void 0:r.total)??n.length)===1?"":"s"," found"]})}),n.length===0?e.jsxs("div",{className:"fc-empty",children:[e.jsx("p",{className:"mb-2",children:"No projects match these filters yet."}),e.jsx("button",{type:"button",className:"btn-fc-outline",onClick:b,children:"Clear filters"})]}):e.jsx("div",{className:"row g-4",children:n.map(a=>{var c;return e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs("div",{className:"fc-gig-card",children:[e.jsx("div",{className:"fc-gig-img",children:e.jsxs("div",{className:"fc-badge-row",children:[e.jsxs("span",{className:"fc-badge fc-badge-verified",children:[e.jsx("i",{className:"feather-star"}),a.verified?"Verified":"Pending"]}),e.jsxs("span",{className:"fc-badge fc-badge-status",children:[e.jsx("i",{className:"fa-solid fa-meteor"}),a.status??"Open"]})]})}),e.jsxs("div",{className:"fc-gig-body",children:[e.jsx("button",{type:"button",className:"fc-gig-cat",style:{border:"none",cursor:"pointer"},onClick:()=>{var f;return i({category:((f=a.category)==null?void 0:f.id)??""})},children:((c=a.category)==null?void 0:c.name)??"General"}),e.jsxs("div",{className:"fc-gig-location",children:[e.jsx("i",{className:"ti ti-map-pin-check"}),a.location??"Remote"]}),e.jsx("h3",{className:"fc-gig-title",children:e.jsx(g,{href:route("user.projects.show",a.id),children:a.title})}),e.jsx("p",{className:"fc-gig-desc",children:w(a.description,120)}),e.jsxs("div",{className:"fc-gig-footer",children:[e.jsx("span",{className:"badge",children:a.location??"Remote"}),e.jsx(g,{href:route("user.projects.show",a.id),className:"btn-fc-outline",children:"View details"})]})]})]})},a.id)})}),h.length>3&&e.jsx("div",{className:"d-flex justify-content-center gap-2 mt-5",children:h.map((a,c)=>e.jsx("button",{disabled:!a.url,className:"btn-fc-outline",style:{opacity:a.url?1:.4,cursor:a.url?"pointer":"default",background:a.active?"var(--fc-accent)":"transparent",color:a.active?"#06231a":"var(--fc-accent)"},onClick:()=>a.url&&m.get(a.url,{},{preserveScroll:!0}),dangerouslySetInnerHTML:{__html:a.label}},c))})]})})]})]})}function w(t,r){return t?t.length>r?`${t.slice(0,r).trimEnd()}...`:t:""}N.layout=t=>e.jsx(y,{children:t,title:"All Projects",description:"Browse every open project and filter down to what matches your skills."});export{N as default};
