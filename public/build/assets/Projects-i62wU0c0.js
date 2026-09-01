import{r as h,j as e,H as g,L as t,a as d}from"./app-DQcVR1sC.js";import{G as p}from"./GuestLayout-AyS9Rfgz.js";function m({categories:c=[],projects:o=[]}){const[i,n]=h.useState({category:"",location:"",keyword:""});function f(a){a.preventDefault();const r=Object.fromEntries(Object.entries(i).filter(([,s])=>s!==""));d.get(route("user.projects.all"),r)}function l(a){d.get(route("user.projects.all"),{keyword:a})}return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Projects Collaborations"}),e.jsx("style",{children:`
        :root {
          --fc-bg: #0e1618;
          --fc-bg-alt: #141d20;
          --fc-card: #172124;
          --fc-border: #243033;
          --fc-accent: #48d597;
          --fc-accent-dark: #33a876;
          --fc-white: #F5f5f7;
          --fc-muted: #9fb0ae;
        }

        .fc-page {
          background: var(--fc-bg);
          color: var(--fc-white);
        }

        /* ---- Hero ---- */
        .fc-hero {
          border-bottom: 1px solid var(--fc-border);
          padding: 70px 0 60px;
        }

        .fc-hero h1 {
          font-weight: 700;
          font-size: 2.4rem;
          color: var(--fc-white);
          letter-spacing: -.5px;
        }

        .fc-hero h1 span {
          color: var(--fc-accent);
        }

        .fc-hero p.lead-text {
          color: var(--fc-muted);
          font-size: 1.05rem;
          max-width: 520px;
        }

        .fc-search-card {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, .35);
        }

        .fc-search-card label {
          color: var(--fc-muted);
          font-size: .78rem;
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: 6px;
          display: block;
          font-weight: 600;
        }

        .fc-search-card .form-control,
        .fc-search-card .form-select {
          background: var(--fc-bg-alt);
          border: 1px solid var(--fc-border);
          color: var(--fc-white);
          border-radius: 10px;
          padding: .65rem .9rem;
        }

        .fc-search-card .form-control::placeholder {
          color: #5f7370;
        }

        .fc-search-card .form-control:focus,
        .fc-search-card .form-select:focus {
          background: var(--fc-bg-alt);
          border-color: var(--fc-accent);
          color: var(--fc-white);
          box-shadow: 0 0 0 3px rgba(72, 213, 151, .15);
        }

        .fc-input-block {
          margin-bottom: 16px;
        }

        .fc-input-locaion {
          position: relative;
        }

        .fc-input-locaion img {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          opacity: .7;
        }

        .btn-fc-primary {
          background: var(--fc-accent);
          border: none;
          color: #06231a;
          font-weight: 700;
          border-radius: 10px;
          padding: .7rem 1.6rem;
          transition: .2s ease;
        }

        .btn-fc-primary:hover {
          background: var(--fc-accent-dark);
          color: #06231a;
          transform: translateY(-1px);
        }

        .fc-popular-search {
          margin-top: 20px;
        }

        .fc-popular-search h5 {
          color: var(--fc-muted);
          font-size: .85rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .fc-popular-search ul {
          list-style: none;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          padding: 0;
          margin: 0;
        }

        .fc-popular-search a,
        .fc-popular-search button {
          display: inline-block;
          padding: 6px 14px;
          border: 1px solid var(--fc-border);
          border-radius: 30px;
          color: var(--fc-white);
          font-size: .85rem;
          text-decoration: none;
          background: transparent;
          transition: .2s;
          cursor: pointer;
        }

        .fc-popular-search a:hover,
        .fc-popular-search button:hover {
          border-color: var(--fc-accent);
          color: var(--fc-accent);
        }

        /* ---- Categories ---- */
        .fc-categories {
          background: var(--fc-bg-alt);
          padding: 60px 0;
          border-bottom: 1px solid var(--fc-border);
        }

        .fc-section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .fc-section-header.fc-section-header-split {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          text-align: left;
        }

        .fc-section-header h2 {
          font-weight: 700;
          font-size: 1.9rem;
          color: var(--fc-white);
          margin-bottom: 8px;
        }

        .fc-section-header h2 .accent-dot {
          color: var(--fc-accent);
        }

        .fc-section-header p {
          color: var(--fc-muted);
        }

        .fc-cat-card {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 16px;
          padding: 26px 16px;
          text-align: center;
          transition: .25s ease;
          height: 100%;
          text-decoration: none;
          display: block;
        }

        .fc-cat-card:hover {
          border-color: var(--fc-accent);
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(72, 213, 151, .12);
        }

        .fc-cat-card .fc-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          border-radius: 50%;
          background: rgba(72, 213, 151, .12);
          color: var(--fc-accent);
          font-size: 1.3rem;
        }

        .fc-cat-card h6 {
          color: var(--fc-white);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 1px;
        }

        .fc-cat-card:hover h6 {
          color: var(--fc-accent);
        }

        .fc-cat-card p {
          color: var(--fc-muted);
          font-size: .85rem;
          margin: 6px 0 0;
        }

        /* ---- Project cards ---- */
        .fc-projects {
          padding: 70px 0;
        }

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
          background:
            linear-gradient(135deg, rgba(72, 213, 151, .18), rgba(72, 213, 151, .03));
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

        .fc-badge-verified {
          background: rgba(72, 213, 151, .18);
          color: var(--fc-accent);
        }

        .fc-badge-status {
          background: rgba(255, 255, 255, .08);
          color: var(--fc-white);
        }

        .fc-gig-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

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

        .fc-gig-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .fc-gig-title a {
          color: var(--fc-white);
          text-decoration: none;
        }

        .fc-gig-title a:hover {
          color: var(--fc-accent);
        }

        .fc-gig-desc {
          color: var(--fc-muted);
          font-size: .88rem;
          margin-bottom: 18px;
          flex: 1;
        }

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
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .btn-fc-outline:hover {
          background: var(--fc-accent);
          color: #06231a;
        }

        /* ---- CTA ---- */
        .fc-cta {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 24px;
          padding: 50px;
          // margin-bottom: 70px;
          position: relative;
          overflow: hidden;
        }

        .fc-cta::before {
          content: "";
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(72, 213, 151, .18), transparent 70%);
        }

        .fc-cta h2 {
          font-weight: 700;
          color: var(--fc-white);
        }

        .fc-cta p {
          color: var(--fc-muted);
          max-width: 420px;
        }

        .fc-cta img {
          max-width: 100%;
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --fc-bg: #f6faf8;
          --fc-bg-alt: #eef4f1;
          --fc-card: #F5f5f7;
          --fc-border: rgba(0, 100, 60, 0.12);
          --fc-accent: #00a667;
          --fc-accent-dark: #00c07a;
          --fc-white: #10201b;
          --fc-muted: #5b7a70;
        }

        [data-h-theme="light"] .fc-search-card {
          box-shadow: 0 10px 30px rgba(0, 0, 0, .08);
        }

        [data-h-theme="light"] .fc-search-card .form-control::placeholder {
          color: #a9c2b8;
        }

        [data-h-theme="light"] .fc-search-card .form-control:focus,
        [data-h-theme="light"] .fc-search-card .form-select:focus {
          box-shadow: 0 0 0 3px rgba(0, 166, 103, .15);
        }

        [data-h-theme="light"] .fc-cat-card .fc-icon {
          background: rgba(0, 166, 103, .1);
        }

        [data-h-theme="light"] .fc-cat-card:hover {
          box-shadow: 0 12px 24px rgba(0, 166, 103, .15);
        }

        [data-h-theme="light"] .fc-gig-img {
          background: linear-gradient(135deg, rgba(0, 166, 103, .16), rgba(0, 166, 103, .03));
        }

        [data-h-theme="light"] .fc-badge-verified {
          background: rgba(0, 166, 103, .14);
        }

        [data-h-theme="light"] .fc-badge-status {
          background: rgba(0, 100, 60, .08);
          color: var(--fc-white);
        }

        [data-h-theme="light"] .fc-gig-card:hover {
          box-shadow: 0 16px 32px rgba(0, 0, 0, .1);
        }

        [data-h-theme="light"] .fc-gig-cat {
          background: rgba(0, 166, 103, .08);
        }

        [data-h-theme="light"] .fc-cta::before {
          background: radial-gradient(circle, rgba(0, 166, 103, .14), transparent 70%);
        }
      `}),e.jsxs("div",{className:"fc-page",children:[e.jsx("section",{className:"fc-hero",children:e.jsx("div",{className:"container p-4",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-lg-8",children:e.jsxs("div",{className:"banner-content",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("h1",{className:"mb-2",children:["Get inspired with ",e.jsx("span",{children:"projects"})," & opportunities"]}),e.jsx("p",{className:"lead-text",children:"Discover the latest initiatives, programs, and collaborations that drive impact."})]}),e.jsx("div",{className:"fc-search-card",children:e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-4 fc-input-block",children:[e.jsx("label",{children:"Category"}),e.jsxs("select",{className:"form-select",value:i.category,onChange:a=>n(r=>({...r,category:a.target.value})),children:[e.jsx("option",{value:"",children:"Select"}),c.map(a=>e.jsx("option",{value:a.id,children:a.name},a.id))]})]}),e.jsxs("div",{className:"col-md-4 fc-input-block",children:[e.jsx("label",{children:"Location"}),e.jsxs("div",{className:"fc-input-locaion",children:[e.jsx("input",{type:"text",className:"form-control",placeholder:"Miami, USA",value:i.location,onChange:a=>n(r=>({...r,location:a.target.value}))}),e.jsx("img",{src:"/assets/img/icons/map-pin-heart.svg",alt:"Icon"})]})]}),e.jsxs("div",{className:"col-md-4 fc-input-block",children:[e.jsx("label",{children:"Keyword"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Need Graphic Designer",value:i.keyword,onChange:a=>n(r=>({...r,keyword:a.target.value}))})]})]}),e.jsxs("button",{className:"btn btn-fc-primary d-inline-flex align-items-center",type:"submit",children:[e.jsx("i",{className:"ti ti-search me-2"})," Search"]})]})}),e.jsxs("div",{className:"fc-popular-search",children:[e.jsx("h5",{children:"Popular Searches"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{onClick:()=>l("Online Mockup"),children:"Online Mockup"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>l("Carpentering"),children:"Carpentering"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>l("Event Organiser"),children:"Event Organiser"})})]})]})]})}),e.jsx("div",{className:"col-lg-4 d-none d-lg-block text-center",children:e.jsx("div",{className:"fc-search-card",style:{background:"transparent",border:"none",boxShadow:"none"},children:e.jsx("i",{className:"ti ti-bulb",style:{fontSize:"8rem",color:"var(--fc-accent)",opacity:.25}})})})]})})}),e.jsx("div",{className:"fc-categories",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-header",children:[e.jsxs("h2",{children:["Popular ",e.jsx("span",{className:"accent-dot",children:"Categories"})]}),e.jsx("p",{children:"Unlock a world of opportunities and take control of your future"})]}),e.jsx("div",{className:"row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1",children:c.map(a=>e.jsx("div",{className:"col d-flex",children:e.jsxs(t,{href:route("user.projects.all",{category:a.id}),className:"fc-cat-card flex-fill",children:[e.jsx("span",{className:"fc-icon",children:e.jsx("i",{className:"ti ti-speakerphone"})}),e.jsx("h6",{className:"mb-1",children:a.name}),e.jsxs("p",{children:[a.projects_count?a.projects_count:0," Projects"]})]})},a.id))})]})}),e.jsx("div",{className:"fc-projects",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-header fc-section-header-split",children:[e.jsxs("div",{children:[e.jsxs("h2",{children:["Our ongoing ",e.jsx("span",{className:"accent-dot",children:"projects"})]}),e.jsx("p",{children:"Get inspired with projects like these"})]}),e.jsxs(t,{href:route("user.projects.all"),className:"btn-fc-outline",children:["View all projects ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsx("div",{className:"row g-4",children:o.map(a=>{var r,s;return e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs("div",{className:"fc-gig-card",children:[e.jsx("div",{className:"fc-gig-img",children:e.jsxs("div",{className:"fc-badge-row",children:[e.jsxs("span",{className:"fc-badge fc-badge-verified",children:[e.jsx("i",{className:"feather-star"}),a.verified?"Verified":"Pending"]}),e.jsxs("span",{className:"fc-badge fc-badge-status",children:[e.jsx("i",{className:"fa-solid fa-meteor"}),a.status??"Open"]})]})}),e.jsxs("div",{className:"fc-gig-body",children:[e.jsx(t,{href:route("user.projects.all",{category:(r=a.category)==null?void 0:r.id}),className:"fc-gig-cat",children:((s=a.category)==null?void 0:s.name)??"General"}),e.jsxs("div",{className:"fc-gig-location",children:[e.jsx("i",{className:"ti ti-map-pin-check"}),a.location??"Remote"]}),e.jsx("h3",{className:"fc-gig-title",children:e.jsx(t,{href:route("user.projects.show",a.id),children:a.title})}),e.jsx("p",{className:"fc-gig-desc",children:x(a.description,120)}),e.jsxs("div",{className:"fc-gig-footer",children:[e.jsx("span",{className:"badge",children:a.location??"Remote"}),e.jsx(t,{href:route("user.projects.show",a.id),className:"btn-fc-outline",children:"View details"})]})]})]})},a.id)})})]})}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"fc-cta",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-lg-7",children:e.jsx("img",{src:"/assets/img/home/jointeam.svg",alt:"img",className:"d-none d-lg-block"})}),e.jsxs("div",{className:"col-lg-5",children:[e.jsx("h2",{className:"mb-3",children:"Want to Get Involved?"}),e.jsx("p",{children:"Explore more projects, collaborate with talented individuals, or submit your own initiatives to make a meaningful impact."}),e.jsx("a",{href:"/user/projects/submit",className:"btn btn-fc-primary",children:"Submit a Project"})]})]})})})]})]})}function x(c,o){return c?c.length>o?`${c.slice(0,o).trimEnd()}...`:c:""}m.layout=c=>e.jsx(p,{children:c,title:"Projects collaboration",description:"Discover the latest initiatives, programs, and collaborations that drive impact."});export{m as default};
