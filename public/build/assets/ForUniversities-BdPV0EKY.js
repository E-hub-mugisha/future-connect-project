import{j as e,H as c,L as t}from"./app-CZoN4D26.js";import{G as o}from"./GuestLayout-CYGwNZhv.js";function s(a,r){try{return route(a,r)}catch{return console.warn(`route("${a}") failed — Ziggy config not found. Make sure @routes is included in resources/views/app.blade.php (in <head>, before the Inertia app div).`),"#"}}const n=[{icon:"ti-users-group",title:"Bulk onboarding",desc:"Onboard entire graduating classes onto verified profiles in a single coordinated rollout."},{icon:"ti-book-2",title:"Co-branded learning",desc:"Offer Learning Center tracks alongside your curriculum, tailored to your programs."},{icon:"ti-building-store",title:"Employer pipeline",desc:"Connect your students directly to the companies actively hiring on the platform."},{icon:"ti-chart-bar",title:"Outcomes dashboard",desc:"Track placement rates, in-demand skills, and program impact from an admin dashboard."}],d=[{title:"Set up your partnership",desc:"We work with your career services office to define scope and rollout timeline."},{title:"Onboard students",desc:"Graduating classes get verified profiles and access to the Learning Center."},{title:"Connect to employers",desc:"Students plug into a live pipeline of companies hiring on the platform."},{title:"Track outcomes",desc:"Your institution gets a dashboard showing placement rates and skill trends."}],l={studentsOnboarded:1240,verifiedProfilesPct:82,placementRatePct:68,activeEmployerPartners:54};function f({stats:a=l}){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"For Universities"}),e.jsx("style",{children:`
        .fc-sol-page * { box-sizing: border-box; }

        /* Dark theme (default — matches the rest of the site's dark mode) */
        .fc-sol-page {
          --fc-bg: #0e1618;
          --fc-bg-alt: #141d20;
          --fc-card: #172124;
          --fc-border: #243033;
          --fc-accent: #48d597;
          --fc-accent-dark: #33a876;
          --fc-white: #ffffff;
          --fc-muted: #9fb0ae;
          background: var(--fc-bg);
          color: var(--fc-white);
        }

        /* Light theme override — toggled via data-h-theme="light" on <html>,
           the same attribute the header's theme switch sets. */
        [data-h-theme="light"] .fc-sol-page {
          --fc-bg: #f6faf8;
          --fc-bg-alt: #eef4f1;
          --fc-card: #ffffff;
          --fc-border: rgba(0, 100, 60, 0.14);
          --fc-accent: #00a667;
          --fc-accent-dark: #00814f;
          --fc-white: #10201b;
          --fc-muted: #4f6b65;
        }

        .fc-sol-hero {
          padding: 90px 0 70px;
          background:
            radial-gradient(circle at 12% 15%, rgba(72,213,151,.14), transparent 45%),
            radial-gradient(circle at 88% 85%, rgba(72,213,151,.08), transparent 50%),
            var(--fc-bg);
          border-bottom: 1px solid var(--fc-border);
        }
        [data-h-theme="light"] .fc-sol-hero {
          background:
            radial-gradient(circle at 12% 15%, rgba(0,166,103,.08), transparent 45%),
            radial-gradient(circle at 88% 85%, rgba(0,166,103,.05), transparent 50%),
            var(--fc-bg);
        }
        .fc-sol-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; color: var(--fc-accent); font-weight: 700;
          font-size: .82rem; text-transform: uppercase; letter-spacing: .08em;
          background: rgba(72,213,151,.1); padding: 6px 16px; border-radius: 30px; margin-bottom: 18px;
        }
        [data-h-theme="light"] .fc-sol-eyebrow { background: rgba(0,166,103,.08); }
        .fc-sol-hero h1 { font-weight: 700; font-size: 2.6rem; letter-spacing: -.5px; margin-bottom: 18px; }
        .fc-sol-hero h1 span { color: var(--fc-accent); }
        .fc-sol-hero p.lead { color: var(--fc-muted); font-size: 1.1rem; max-width: 520px; margin-bottom: 28px; }

        .btn-fc-primary {
          background: var(--fc-accent); border: none; color: #06231a; font-weight: 700; border-radius: 30px;
          padding: .8rem 2rem; transition: .2s ease; display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none;
        }
        .btn-fc-primary:hover { background: var(--fc-accent-dark); color: #06231a; transform: translateY(-2px); }
        [data-h-theme="light"] .btn-fc-primary { color: #ffffff; }
        [data-h-theme="light"] .btn-fc-primary:hover { color: #ffffff; }

        .btn-fc-ghost {
          background: transparent; border: 1px solid var(--fc-border); color: var(--fc-white); font-weight: 600;
          border-radius: 30px; padding: .8rem 2rem; text-decoration: none; transition: .2s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-fc-ghost:hover { border-color: var(--fc-accent); color: var(--fc-accent); }

        .fc-sol-section { padding: 70px 0; }
        .fc-sol-section.alt { background: var(--fc-bg-alt); border-top: 1px solid var(--fc-border); border-bottom: 1px solid var(--fc-border); }
        .fc-sol-header { text-align: center; max-width: 640px; margin: 0 auto 46px; }
        .fc-sol-header h2 { font-weight: 700; font-size: 2rem; margin-bottom: 10px; }
        .fc-sol-header h2 span { color: var(--fc-accent); }
        .fc-sol-header p { color: var(--fc-muted); }

        .fc-benefit-card {
          background: var(--fc-card); border: 1px solid var(--fc-border); border-radius: 18px;
          padding: 30px 26px; height: 100%; transition: .25s;
        }
        .fc-benefit-card:hover {
          border-color: var(--fc-accent); transform: translateY(-4px); box-shadow: 0 16px 32px rgba(72,213,151,.1);
        }
        [data-h-theme="light"] .fc-benefit-card:hover { box-shadow: 0 16px 32px rgba(0,166,103,.1); }
        .fc-benefit-icon {
          width: 52px; height: 52px; border-radius: 14px; background: rgba(72,213,151,.12); color: var(--fc-accent);
          display: flex; align-items: center; justify-content: center; font-size: 1.35rem; margin-bottom: 18px;
        }
        [data-h-theme="light"] .fc-benefit-icon { background: rgba(0,166,103,.1); }
        .fc-benefit-card h5 { font-weight: 700; margin-bottom: 10px; }
        .fc-benefit-card p { color: var(--fc-muted); font-size: .92rem; margin: 0; }

        .fc-step { display: flex; gap: 20px; padding: 26px 0; border-bottom: 1px solid var(--fc-border); }
        .fc-step:last-child { border-bottom: none; }
        .fc-step-num {
          flex: 0 0 auto; width: 44px; height: 44px; border-radius: 50%; background: rgba(72,213,151,.12);
          color: var(--fc-accent); display: flex; align-items: center; justify-content: center; font-weight: 700;
        }
        [data-h-theme="light"] .fc-step-num { background: rgba(0,166,103,.1); }
        .fc-step h6 { font-weight: 700; margin-bottom: 6px; }
        .fc-step p { color: var(--fc-muted); margin: 0; font-size: .92rem; }

        .fc-testimonial { background: var(--fc-card); border: 1px solid var(--fc-border); border-radius: 20px; padding: 40px; position: relative; }
        .fc-testimonial .quote-mark { font-size: 3rem; color: var(--fc-accent); opacity: .3; line-height: 1; }
        .fc-testimonial p.quote { font-size: 1.1rem; color: var(--fc-white); margin: 10px 0 20px; }
        .fc-testimonial .author strong { color: var(--fc-white); display: block; }
        .fc-testimonial .author span { color: var(--fc-muted); font-size: .85rem; }

        .fc-final-cta {
          background: var(--fc-card); border: 1px solid var(--fc-border); border-radius: 24px; padding: 60px;
          text-align: center; position: relative; overflow: hidden;
        }
        .fc-final-cta::before {
          content: ""; position: absolute; top: -70px; left: 50%; transform: translateX(-50%);
          width: 280px; height: 280px; background: radial-gradient(circle, rgba(72,213,151,.16), transparent 70%);
        }
        [data-h-theme="light"] .fc-final-cta::before {
          background: radial-gradient(circle, rgba(0,166,103,.1), transparent 70%);
        }
        .fc-final-cta h2 { font-weight: 700; margin-bottom: 12px; position: relative; }
        .fc-final-cta p { color: var(--fc-muted); max-width: 480px; margin: 0 auto 26px; position: relative; }

        /* Dashboard preview mock — universities specific */
        .fc-dash-mock { background: var(--fc-card); border: 1px solid var(--fc-border); border-radius: 20px; padding: 24px; }
        .fc-dash-row { display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-bottom: 1px solid var(--fc-border); }
        .fc-dash-row:last-child { border-bottom: none; }
        .fc-dash-row span.label { color: var(--fc-muted); font-size: .85rem; }
        .fc-dash-row span.val { color: var(--fc-white); font-weight: 700; }
        .fc-dash-bar { height: 8px; background: var(--fc-bg-alt); border-radius: 6px; overflow: hidden; width: 120px; }
        .fc-dash-bar-fill { height: 100%; background: var(--fc-accent); }
      `}),e.jsxs("div",{className:"fc-sol-page",children:[e.jsx("section",{className:"fc-sol-hero",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-7",children:[e.jsxs("span",{className:"fc-sol-eyebrow",children:[e.jsx("i",{className:"ti ti-building-bank"})," For Universities"]}),e.jsxs("h1",{children:["Empower students ",e.jsx("span",{children:"beyond graduation"})]}),e.jsx("p",{className:"lead",children:"Give your graduating classes a head start with verified profiles, employer pipelines, and outcome tracking — extending your career services beyond the classroom."}),e.jsxs("div",{className:"d-flex gap-3 flex-wrap",children:[e.jsxs(t,{href:s("user.contact"),className:"btn-fc-primary",children:[e.jsx("i",{className:"ti ti-handshake"})," Partner with us"]}),e.jsxs(t,{href:s("user.success-stories"),className:"btn-fc-ghost",children:[e.jsx("i",{className:"ti ti-chart-bar"})," See outcomes"]})]})]}),e.jsx("div",{className:"col-lg-5",children:e.jsxs("div",{className:"fc-dash-mock",children:[e.jsxs("div",{className:"fc-dash-row",children:[e.jsx("span",{className:"label",children:"Students onboarded"}),e.jsx("span",{className:"val",children:a.studentsOnboarded.toLocaleString()})]}),e.jsxs("div",{className:"fc-dash-row",children:[e.jsx("span",{className:"label",children:"Verified profiles"}),e.jsx("div",{className:"fc-dash-bar",children:e.jsx("div",{className:"fc-dash-bar-fill",style:{width:`${a.verifiedProfilesPct}%`}})})]}),e.jsxs("div",{className:"fc-dash-row",children:[e.jsx("span",{className:"label",children:"Placement rate"}),e.jsx("div",{className:"fc-dash-bar",children:e.jsx("div",{className:"fc-dash-bar-fill",style:{width:`${a.placementRatePct}%`}})})]}),e.jsxs("div",{className:"fc-dash-row",children:[e.jsx("span",{className:"label",children:"Active employer partners"}),e.jsx("span",{className:"val",children:a.activeEmployerPartners})]})]})})]})})}),e.jsx("section",{className:"fc-sol-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-sol-header",children:[e.jsxs("h2",{children:["Career services that ",e.jsx("span",{children:"don't end at graduation"})]}),e.jsx("p",{children:"Give your institution and its students a lasting bridge into the job market."})]}),e.jsx("div",{className:"row g-4",children:n.map(r=>e.jsx("div",{className:"col-md-6 col-lg-3",children:e.jsxs("div",{className:"fc-benefit-card",children:[e.jsx("div",{className:"fc-benefit-icon",children:e.jsx("i",{className:`ti ${r.icon}`})}),e.jsx("h5",{children:r.title}),e.jsx("p",{children:r.desc})]})},r.title))})]})}),e.jsx("section",{className:"fc-sol-section alt",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-5 align-items-center",children:[e.jsx("div",{className:"col-lg-5",children:e.jsxs("div",{className:"fc-sol-header text-lg-start mx-lg-0",children:[e.jsxs("h2",{children:["Partnership ",e.jsx("span",{children:"process"})]}),e.jsx("p",{children:"From agreement to measurable outcomes."})]})}),e.jsx("div",{className:"col-lg-7",children:d.map((r,i)=>e.jsxs("div",{className:"fc-step",children:[e.jsx("div",{className:"fc-step-num",children:i+1}),e.jsxs("div",{children:[e.jsx("h6",{children:r.title}),e.jsx("p",{children:r.desc})]})]},r.title))})]})})}),e.jsx("section",{className:"fc-sol-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"fc-testimonial",children:[e.jsx("div",{className:"quote-mark",children:'"'}),e.jsx("p",{className:"quote",children:"Partnering with Future Connect gave our career office real visibility into where our graduates were landing — and helped more of them land somewhere at all."}),e.jsxs("div",{className:"author",children:[e.jsx("strong",{children:"Career services director"}),e.jsx("span",{children:"Partner university"})]})]})})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"fc-final-cta",children:[e.jsx("h2",{children:"Extend your impact past graduation day"}),e.jsx("p",{children:"Partner with Future Connect to support your students long after they leave campus."}),e.jsx(t,{href:s("user.contact"),className:"btn-fc-primary",children:"Start a partnership"})]})})]})]})}f.layout=a=>e.jsx(o,{children:a,title:"For Universities"});export{f as default};
