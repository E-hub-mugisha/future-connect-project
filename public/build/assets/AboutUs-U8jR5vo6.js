import{r as n,j as e,H as l,L as c,R as d}from"./app-DQcVR1sC.js";import{G as h}from"./GuestLayout-AyS9Rfgz.js";function u(a,r){try{return route(a,r)}catch{return console.warn(`route("${a}") failed — Ziggy config not found. Make sure @routes is included in resources/views/app.blade.php (in <head>, before the Inertia app div).`),"#"}}const b=[{icon:"/assets/img/icons/why-choose-icon-01.svg",title:"Real Impact",desc:"Our platform helps youth turn passion into purpose, with real results and community support."},{icon:"/assets/img/icons/why-choose-icon-02.svg",title:"Inspiring Stories",desc:"Every Future Connect profile tells a powerful story. Be heard. Be seen. Be remembered."},{icon:"/assets/img/icons/why-choose-icon-03.svg",title:"Skill Marketplace",desc:"Discover, hire, or support skilled youth who are ready to deliver excellence."},{icon:"/assets/img/icons/why-choose-icon-04.svg",title:"Safe & Supportive",desc:"Your content and data are protected as you grow in a nurturing community."},{icon:"/assets/img/icons/why-choose-icon-05.svg",title:"Easy Donations",desc:"Support talents with secure, transparent donation tools and reward systems."},{icon:"/assets/img/icons/why-choose-icon-06.svg",title:"Community First",desc:"Our agents, mentors, and volunteers uplift every talent's journey to success."}];function m({text:a=""}){const r=a.split(`
`);return e.jsx("p",{children:r.map((o,t)=>e.jsxs(d.Fragment,{children:[o,t<r.length-1&&e.jsx("br",{})]},t))})}function g({faqs:a=[]}){const[r,o]=n.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"About Us"}),e.jsx("style",{children:`
        .fc-about-page * { box-sizing: border-box; }

        .breadcrumb-bar { background: #0a1214; border-bottom: 1px solid #1a2a2e; padding: 16px 0; }
        .breadcrumb-bar .page-breadcrumb .breadcrumb {
          display: flex; align-items: center; gap: 8px; list-style: none; padding: 0; margin: 0 0 6px; font-size: 12px;
        }
        .breadcrumb-bar .breadcrumb-item a { color: #48d597; text-decoration: none; }
        .breadcrumb-bar .breadcrumb-item.active { color: #c8dde0; }
        .breadcrumb-bar .breadcrumb-item + .breadcrumb-item::before { content: '/'; color: #4a6670; padding-right: 8px; }
        .breadcrumb-title { font-size: 26px; font-weight: 600; color: #F5f5f7; }
        .breadcrumb-title span { color: #48d597; }

        .about-us-section { background: #0e1618; padding: 60px 0; }
        .about-inner-img {
          background: #0f1e21; border: 1px solid #1e3035; border-radius: 12px; overflow: hidden; margin-bottom: 12px;
        }
        .about-inner-img img { width: 100%; height: 100%; object-fit: cover; display: block; opacity: 0.9; transition: opacity 0.3s; }
        .about-inner-img img:hover { opacity: 1; }
        .about-us-info { padding-left: 16px; }
        .about-badge {
          display: inline-block; background: rgba(0, 166, 103, 0.1); color: #48d597; border: 1px solid rgba(0, 166, 103, 0.3);
          border-radius: 20px; font-size: 11px; font-weight: 600; padding: 4px 14px; margin-bottom: 14px;
          letter-spacing: 0.5px; text-transform: uppercase;
        }
        .about-us-head h2 { font-size: 28px; font-weight: 600; color: #F5f5f7; line-height: 1.35; margin-bottom: 14px; }
        .about-us-head p { font-size: 14px; color: #8aa4aa; line-height: 1.8; margin-bottom: 14px; }
        .about-us-head h5 { font-size: 14px; font-weight: 600; color: #48d597; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.4px; }

        .about-features { display: flex; gap: 12px; margin-top: 20px; }
        .about-features ul { list-style: none; padding: 0; margin: 0; flex: 1; display: flex; flex-direction: column; gap: 8px; }
        .about-features ul li {
          display: flex; align-items: center; gap: 10px; font-size: 13px; color: #c8dde0; background: #0f1e21;
          border: 1px solid #1e3035; border-radius: 8px; padding: 9px 12px; transition: border-color 0.2s;
        }
        .about-features ul li:hover { border-color: rgba(0, 166, 103, 0.4); }
        .about-features ul li span { width: 7px; height: 7px; border-radius: 50%; background: #48d597; flex-shrink: 0; display: inline-block; }

        .stats-strip {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #1a2a2e;
          border-radius: 12px; overflow: hidden; margin-top: 48px;
        }
        .stats-strip .stat-item { background: #0f1e21; padding: 20px; text-align: center; }
        .stats-strip .stat-num { font-size: 26px; font-weight: 700; color: #48d597; line-height: 1; }
        .stats-strip .stat-label { font-size: 12px; color: #6b8a90; margin-top: 4px; }

        .why-choose-sec { background: #0b1416; padding: 60px 0; border-top: 1px solid #1a2a2e; border-bottom: 1px solid #1a2a2e; }
        .about-us-header { text-align: center; margin-bottom: 36px; }
        .about-us-header h2 { font-size: 26px; font-weight: 600; color: #F5f5f7; margin-bottom: 8px; }
        .about-us-header h2 span { color: #48d597; }
        .about-us-header p { font-size: 14px; color: #6b8a90; }

        .why-choose-card {
          background: #0f1e21; border: 1px solid #1e3035; border-radius: 14px; padding: 24px 20px; margin-bottom: 20px;
          transition: border-color 0.25s, transform 0.25s;
        }
        .why-choose-card:hover { border-color: rgba(0, 166, 103, 0.5); transform: translateY(-3px); }
        .why-choose-card .card-icon {
          width: 44px; height: 44px; background: rgba(0, 166, 103, 0.1); border: 1px solid rgba(0, 166, 103, 0.25);
          border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
        }
        .why-choose-card .card-icon img { width: 22px; height: 22px; filter: invert(52%) sepia(70%) saturate(500%) hue-rotate(115deg) brightness(95%); }
        .why-choose-card h4 { font-size: 15px; font-weight: 600; color: #e0f0f0; margin-bottom: 8px; }
        .why-choose-card p { font-size: 13px; color: #6b8a90; line-height: 1.7; margin: 0; }

        .faq-section { background: #0e1618; padding: 60px 0; }
        .faq-section .section-title h2 { font-size: 26px; font-weight: 600; color: #F5f5f7; margin-bottom: 6px; }
        .faq-section .section-title p { font-size: 14px; color: #6b8a90; }

        .faq-card { background: #0f1e21; border: 1px solid #1e3035; border-radius: 12px; margin-bottom: 10px; overflow: hidden; transition: border-color 0.2s; }
        .faq-card:hover { border-color: rgba(0, 166, 103, 0.35); }
        .faq-title { margin: 0; font-size: 14px; font-weight: 500; }
        .faq-title button {
          display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 16px 18px;
          color: #c8dde0; text-decoration: none; transition: color 0.2s; background: none; border: none;
          font-size: 14px; font-weight: 500; text-align: left; cursor: pointer;
        }
        .faq-title button:hover, .faq-title button[aria-expanded="true"] { color: #48d597; }
        .faq-title button::after {
          content: '\\203A'; font-size: 20px; color: rgba(0, 166, 103, 0.5); transform: rotate(90deg);
          transition: transform 0.25s, color 0.2s; flex-shrink: 0; margin-left: 12px;
        }
        .faq-title button.collapsed::after { transform: rotate(0deg); color: rgba(0, 166, 103, 0.4); }
        .faq-title button[aria-expanded="true"]::after { color: #48d597; }

        .card-collapse { border-top: 1px solid #1a2a2e; }
        .faq-content { padding: 14px 18px 16px; }
        .faq-content p { font-size: 13px; color: #6b8a90; line-height: 1.8; margin: 0; }

        [data-h-theme="light"] .breadcrumb-bar { background: #eef4f1; border-bottom-color: rgba(0, 100, 60, 0.1); }
        [data-h-theme="light"] .breadcrumb-bar .breadcrumb-item.active { color: #3d5a52; }
        [data-h-theme="light"] .breadcrumb-bar .breadcrumb-item + .breadcrumb-item::before { color: #8ba59d; }
        [data-h-theme="light"] .breadcrumb-title { color: #10201b; }

        [data-h-theme="light"] .about-us-section { background: #f6faf8; }
        [data-h-theme="light"] .about-inner-img { background: #F5f5f7; border-color: rgba(0, 100, 60, 0.12); }
        [data-h-theme="light"] .about-us-head h2 { color: #10201b; }
        [data-h-theme="light"] .about-us-head p { color: #4f6b65; }
        [data-h-theme="light"] .about-badge { background: rgba(0, 166, 103, 0.08); border-color: rgba(0, 166, 103, 0.28); color: #00a667; }
        [data-h-theme="light"] .about-us-head h5 { color: #00a667; }
        [data-h-theme="light"] .about-features ul li { color: #2d453f; background: #F5f5f7; border-color: rgba(0, 100, 60, 0.12); }
        [data-h-theme="light"] .about-features ul li:hover { border-color: rgba(0, 166, 103, 0.4); }
        [data-h-theme="light"] .about-features ul li span { background: #00a667; }

        [data-h-theme="light"] .stats-strip { background: rgba(0, 100, 60, 0.1); }
        [data-h-theme="light"] .stats-strip .stat-item { background: #F5f5f7; }
        [data-h-theme="light"] .stats-strip .stat-num { color: #00a667; }
        [data-h-theme="light"] .stats-strip .stat-label { color: #6f8a85; }

        [data-h-theme="light"] .why-choose-sec { background: #eef4f1; border-top-color: rgba(0, 100, 60, 0.1); border-bottom-color: rgba(0, 100, 60, 0.1); }
        [data-h-theme="light"] .about-us-header h2 { color: #10201b; }
        [data-h-theme="light"] .about-us-header p { color: #6f8a85; }
        [data-h-theme="light"] .why-choose-card { background: #F5f5f7; border-color: rgba(0, 100, 60, 0.12); }
        [data-h-theme="light"] .why-choose-card:hover { border-color: rgba(0, 166, 103, 0.45); }
        [data-h-theme="light"] .why-choose-card .card-icon { background: rgba(0, 166, 103, 0.08); border-color: rgba(0, 166, 103, 0.25); }
        [data-h-theme="light"] .why-choose-card .card-icon img { filter: invert(38%) sepia(90%) saturate(900%) hue-rotate(115deg) brightness(90%); }
        [data-h-theme="light"] .why-choose-card h4 { color: #10201b; }
        [data-h-theme="light"] .why-choose-card p { color: #6f8a85; }

        [data-h-theme="light"] .faq-section { background: #f6faf8; }
        [data-h-theme="light"] .faq-section .section-title h2 { color: #10201b; }
        [data-h-theme="light"] .faq-section .section-title p { color: #6f8a85; }
        [data-h-theme="light"] .faq-card { background: #F5f5f7; border-color: rgba(0, 100, 60, 0.12); }
        [data-h-theme="light"] .faq-card:hover { border-color: rgba(0, 166, 103, 0.35); }
        [data-h-theme="light"] .faq-title button { color: #2d453f; }
        [data-h-theme="light"] .faq-title button:hover,
        [data-h-theme="light"] .faq-title button[aria-expanded="true"] { color: #00a667; }
        [data-h-theme="light"] .faq-title button::after { color: rgba(0, 166, 103, 0.45); }
        [data-h-theme="light"] .faq-title button.collapsed::after { color: rgba(0, 166, 103, 0.35); }
        [data-h-theme="light"] .faq-title button[aria-expanded="true"]::after { color: #00a667; }
        [data-h-theme="light"] .card-collapse { border-top-color: rgba(0, 100, 60, 0.1); }
        [data-h-theme="light"] .faq-content p { color: #6f8a85; }
      `}),e.jsxs("div",{className:"fc-about-page",children:[e.jsx("div",{className:"breadcrumb-bar",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12 col-12",children:[e.jsx("nav",{"aria-label":"breadcrumb",className:"page-breadcrumb",children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx(c,{href:u("user.home"),children:"Home"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"About Us"})]})}),e.jsxs("h2",{className:"breadcrumb-title",children:["About ",e.jsx("span",{children:"Future Connect"})]})]})})})}),e.jsx("section",{className:"about-us-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"row me-4",children:[e.jsx("div",{className:"col-sm-6",children:e.jsx("div",{className:"about-inner-img",style:{height:290},children:e.jsx("img",{src:"/assets/img/aboutus/Future Connect-01.jpg",className:"img-fluid",alt:"Future Connect"})})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-12",children:e.jsx("div",{className:"about-inner-img",style:{height:138},children:e.jsx("img",{src:"/assets/img/aboutus/Future Connect-02.jpg",className:"img-fluid",alt:"Future Connect"})})}),e.jsx("div",{className:"col-sm-12",children:e.jsx("div",{className:"about-inner-img",style:{height:138},children:e.jsx("img",{src:"/assets/img/aboutus/Future Connect-03.jpg",className:"img-fluid",alt:"Future Connect"})})})]})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"about-us-info",children:[e.jsx("span",{className:"about-badge",children:"About Future Connect"}),e.jsxs("div",{className:"about-us-head",children:[e.jsx("h2",{children:"Empowering Young Talents Through Stories & Skills"}),e.jsx("p",{children:"Future Connect is a digital hub where emerging talents shine. We connect youth with opportunities to showcase their stories, share unique skills, and grow through meaningful exposure and community support."}),e.jsx("h5",{children:"Our Mission"}),e.jsx("p",{children:"To ignite the potential in every young dreamer by offering a space to inspire, learn, and thrive. We believe in storytelling as a catalyst for connection and skills as the bridge to brighter futures."})]}),e.jsxs("div",{className:"about-features",children:[e.jsxs("ul",{className:"list-one",children:[e.jsxs("li",{children:[e.jsx("span",{})," Talent-Powered Stories"]}),e.jsxs("li",{children:[e.jsx("span",{})," Inclusive & Empowering Platform"]})]}),e.jsxs("ul",{className:"list-two",children:[e.jsxs("li",{children:[e.jsx("span",{})," Mentorship & Opportunities"]}),e.jsxs("li",{children:[e.jsx("span",{})," Skill Sharing & Growth"]})]})]})]})})]}),e.jsxs("div",{className:"stats-strip",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-num",children:"10K+"}),e.jsx("div",{className:"stat-label",children:"Young Talents"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-num",children:"150+"}),e.jsx("div",{className:"stat-label",children:"Opportunities"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-num",children:"50+"}),e.jsx("div",{className:"stat-label",children:"Mentors & Volunteers"})]})]})]})}),e.jsx("section",{className:"why-choose-sec",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"about-us-header",children:[e.jsxs("h2",{children:["Why Choose ",e.jsx("span",{children:"Future Connect"})]}),e.jsx("p",{children:"Because every story matters and every skill deserves a stage."})]}),e.jsx("div",{className:"row",children:b.map(t=>e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"why-choose-card",children:[e.jsx("div",{className:"card-icon",children:e.jsx("img",{src:t.icon,alt:""})}),e.jsx("h4",{children:t.title}),e.jsx("p",{children:t.desc})]})},t.title))})]})}),e.jsx("section",{className:"faq-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title mb-4",children:[e.jsx("h2",{className:"mb-1",children:"Most frequently asked questions"}),e.jsx("p",{children:"Here are the most frequently asked questions you may check before getting started."})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsx("div",{className:"faq-wrapper faq-lists",children:a.map((t,s)=>{const i=r===s;return e.jsxs("div",{className:"faq-card",children:[e.jsx("h4",{className:"faq-title",children:e.jsx("button",{type:"button",className:i?"":"collapsed","aria-expanded":i,"aria-controls":`faq${s}`,onClick:()=>o(i?null:s),children:t.question})}),i&&e.jsx("div",{id:`faq${s}`,className:"card-collapse collapse show",children:e.jsx("div",{className:"faq-content",children:e.jsx(m,{text:t.answer})})})]},t.id??s)})})})})]})})]})]})}g.layout=a=>e.jsx(h,{children:a});export{g as default};
