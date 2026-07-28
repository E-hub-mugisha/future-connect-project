import{j as e,H as o,L as t}from"./app-ClS8wKza.js";import{G as s}from"./GuestLayout-CXbJ8NXm.js";const i={talentsSearch:"/skills-marketplace",postJob:"/jobs/create",startHiring:"/quick-hire/create"};function n(){const a=[{icon:"ti-filter",title:"Skill-based search",text:"Search by skill, category, and location instead of sorting through résumés one by one."},{icon:"ti-badge",title:"Verification badges",text:"Every verified profile has been checked — hire with confidence, not guesswork."},{icon:"ti-adjustments",title:"Flexible engagement",text:"Hire for a one-off project, ongoing freelance work, or a full-time role — your choice."},{icon:"ti-users-group",title:"Team & bulk hiring",text:"Post multiple roles for a project at once and manage applicants from a single dashboard."}],c=[{capability:"Verified skill profiles",traditional:"Rarely",fc:"Always"},{capability:"Search by exact skill",traditional:"Limited",fc:"Built-in"},{capability:"Direct messaging with candidates",traditional:"Through recruiters",fc:"Connect Room"},{capability:"Local talent focus",traditional:"Varies",fc:"Yes"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"For Companies"}),e.jsx("style",{children:`
                :root{
                    --fc-bg:#0e1618; --fc-bg-alt:#141d20; --fc-card:#172124; --fc-border:#243033;
                    --fc-accent:#48d597; --fc-accent-dark:#33a876; --fc-white:#ffffff; --fc-muted:#9fb0ae;
                    --fc-cta-text:#06231a;
                }
                .fc-sol-page{ background:var(--fc-bg); color:var(--fc-white); }
                .fc-sol-hero{ padding:90px 0 70px; background:radial-gradient(circle at 12% 15%, rgba(72,213,151,.14), transparent 45%), radial-gradient(circle at 88% 85%, rgba(72,213,151,.08), transparent 50%), var(--fc-bg); border-bottom:1px solid var(--fc-border); }
                .fc-sol-eyebrow{ display:inline-flex; align-items:center; gap:8px; color:var(--fc-accent); font-weight:700; font-size:.82rem; text-transform:uppercase; letter-spacing:.08em; background:rgba(72,213,151,.1); padding:6px 16px; border-radius:30px; margin-bottom:18px; }
                .fc-sol-hero h1{ font-weight:700; font-size:2.6rem; letter-spacing:-.5px; margin-bottom:18px; }
                .fc-sol-hero h1 span{ color:var(--fc-accent); }
                .fc-sol-hero p.lead{ color:var(--fc-muted); font-size:1.1rem; max-width:520px; margin-bottom:28px; }
                .btn-fc-primary{ background:var(--fc-accent); border:none; color:var(--fc-cta-text); font-weight:700; border-radius:30px; padding:.8rem 2rem; transition:.2s ease; display:inline-flex; align-items:center; gap:8px; text-decoration:none; }
                .btn-fc-primary:hover{ background:var(--fc-accent-dark); color:var(--fc-cta-text); transform:translateY(-2px); }
                .btn-fc-ghost{ background:transparent; border:1px solid var(--fc-border); color:var(--fc-white); font-weight:600; border-radius:30px; padding:.8rem 2rem; text-decoration:none; transition:.2s; display:inline-flex; align-items:center; gap:8px; }
                .btn-fc-ghost:hover{ border-color:var(--fc-accent); color:var(--fc-accent); }
                .fc-hero-visual{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:24px; padding:34px; position:relative; overflow:hidden; }
                .fc-hero-visual::before{ content:""; position:absolute; top:-50px; right:-50px; width:180px; height:180px; background:radial-gradient(circle, rgba(72,213,151,.2), transparent 70%); }
                .fc-mini-stat{ background:var(--fc-bg-alt); border:1px solid var(--fc-border); border-radius:14px; padding:16px 18px; margin-bottom:12px; }
                .fc-mini-stat strong{ color:var(--fc-accent); font-size:1.4rem; display:block; }
                .fc-mini-stat span{ color:var(--fc-muted); font-size:.82rem; }
                .fc-sol-section{ padding:70px 0; }
                .fc-sol-section.alt{ background:var(--fc-bg-alt); border-top:1px solid var(--fc-border); border-bottom:1px solid var(--fc-border); }
                .fc-sol-header{ text-align:center; max-width:640px; margin:0 auto 46px; }
                .fc-sol-header h2{ font-weight:700; font-size:2rem; margin-bottom:10px; }
                .fc-sol-header h2 span{ color:var(--fc-accent); }
                .fc-sol-header p{ color:var(--fc-muted); }
                .fc-benefit-card{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:18px; padding:30px 26px; height:100%; transition:.25s; }
                .fc-benefit-card:hover{ border-color:var(--fc-accent); transform:translateY(-4px); box-shadow:0 16px 32px rgba(72,213,151,.1); }
                .fc-benefit-icon{ width:52px; height:52px; border-radius:14px; background:rgba(72,213,151,.12); color:var(--fc-accent); display:flex; align-items:center; justify-content:center; font-size:1.35rem; margin-bottom:18px; }
                .fc-benefit-card h5{ font-weight:700; margin-bottom:10px; }
                .fc-benefit-card p{ color:var(--fc-muted); font-size:.92rem; margin:0; }
                .fc-step{ display:flex; gap:20px; padding:26px 0; border-bottom:1px solid var(--fc-border); }
                .fc-step:last-child{ border-bottom:none; }
                .fc-step-num{ flex:0 0 auto; width:44px; height:44px; border-radius:50%; background:rgba(72,213,151,.12); color:var(--fc-accent); display:flex; align-items:center; justify-content:center; font-weight:700; }
                .fc-step h6{ font-weight:700; margin-bottom:6px; }
                .fc-step p{ color:var(--fc-muted); margin:0; font-size:.92rem; }
                .fc-stats-bar{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:20px; padding:36px; }
                .fc-stat-item{ text-align:center; }
                .fc-stat-item strong{ display:block; font-size:2rem; font-weight:700; color:var(--fc-accent); }
                .fc-stat-item span{ color:var(--fc-muted); font-size:.85rem; }
                .fc-testimonial{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:20px; padding:40px; position:relative; }
                .fc-testimonial .quote-mark{ font-size:3rem; color:var(--fc-accent); opacity:.3; line-height:1; }
                .fc-testimonial p.quote{ font-size:1.1rem; color:var(--fc-white); margin:10px 0 20px; }
                .fc-testimonial .author strong{ color:var(--fc-white); display:block; }
                .fc-testimonial .author span{ color:var(--fc-muted); font-size:.85rem; }
                .fc-final-cta{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:24px; padding:60px; text-align:center; position:relative; overflow:hidden; margin-bottom:80px; }
                .fc-final-cta::before{ content:""; top:-70px; left:50%; transform:translateX(-50%); width:280px; height:280px; background:radial-gradient(circle, rgba(72,213,151,.16), transparent 70%); }
                .fc-final-cta h2{ font-weight:700; margin-bottom:12px; position:relative; }
                .fc-final-cta p{ color:var(--fc-muted); max-width:480px; margin:0 auto 26px; position:relative; }

                /* Table (companies-specific: verification comparison) */
                .fc-compare{ background:var(--fc-card); border:1px solid var(--fc-border); border-radius:18px; overflow:hidden; }
                .fc-compare table{ width:100%; border-collapse:collapse; color:var(--fc-white); margin:0; }
                .fc-compare th{ text-align:left; padding:16px 20px; background:var(--fc-bg-alt); color:var(--fc-muted); font-size:.8rem; text-transform:uppercase; letter-spacing:.04em; }
                .fc-compare td{ padding:16px 20px; border-top:1px solid var(--fc-border); font-size:.92rem; }
                .fc-compare td.yes{ color:var(--fc-accent); font-weight:700; }

                /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
                [data-h-theme="light"] {
                    --fc-bg:      #f6faf8;
                    --fc-bg-alt:  #eef4f1;
                    --fc-card:    #ffffff;
                    --fc-border:  rgba(0,100,60,0.12);
                    --fc-accent:  #00a667;
                    --fc-accent-dark: #00854f;
                    --fc-white:   #10201b;
                    --fc-muted:   #5b7a70;
                    --fc-cta-text:#ffffff;
                }

                /* Hero radial glows tuned for dark bg — soften for light */
                [data-h-theme="light"] .fc-sol-hero {
                    background:
                        radial-gradient(circle at 12% 15%, rgba(0,166,103,.08), transparent 45%),
                        radial-gradient(circle at 88% 85%, rgba(0,166,103,.05), transparent 50%),
                        var(--fc-bg);
                }
                [data-h-theme="light"] .fc-hero-visual::before {
                    background: radial-gradient(circle, rgba(0,166,103,.12), transparent 70%);
                }
                [data-h-theme="light"] .fc-final-cta::before {
                    background: radial-gradient(circle, rgba(0,166,103,.1), transparent 70%);
                }
            `}),e.jsxs("div",{className:"fc-sol-page",children:[e.jsx("section",{className:"fc-sol-hero",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsxs("div",{className:"col-lg-7",children:[e.jsxs("span",{className:"fc-sol-eyebrow",children:[e.jsx("i",{className:"ti ti-building-skyscraper"})," ","For Companies"]}),e.jsxs("h1",{children:["Find verified and ",e.jsx("span",{children:"sharp skills"})," ","faster"]}),e.jsx("p",{className:"lead",children:"Skip the guesswork. Search a marketplace of verified professionals, hire for a project or full-time, and cut your time-to-hire dramatically."}),e.jsxs("div",{className:"d-flex gap-3 flex-wrap",children:[e.jsxs(t,{href:i.talentsSearch,className:"btn-fc-primary",children:[e.jsx("i",{className:"ti ti-search"})," Search talent"]}),e.jsxs(t,{href:i.postJob,className:"btn-fc-ghost",children:[e.jsx("i",{className:"ti ti-file-plus"})," Post a job"]})]})]}),e.jsx("div",{className:"col-lg-5",children:e.jsxs("div",{className:"fc-hero-visual",children:[e.jsxs("div",{className:"fc-mini-stat",children:[e.jsx("strong",{children:"8K+"}),e.jsx("span",{children:"Verified skills to search from"})]}),e.jsxs("div",{className:"fc-mini-stat",children:[e.jsx("strong",{children:"Faster"}),e.jsx("span",{children:"Time-to-hire vs traditional recruiting"})]}),e.jsxs("div",{className:"fc-mini-stat mb-0",children:[e.jsx("strong",{children:"Flexible"}),e.jsx("span",{children:"Freelance, contract, or full-time hires"})]})]})})]})})}),e.jsx("section",{className:"fc-sol-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-sol-header",children:[e.jsxs("h2",{children:["Hiring, ",e.jsx("span",{children:"simplified"})]}),e.jsx("p",{children:"Everything a hiring team needs to find real skill, fast."})]}),e.jsx("div",{className:"row g-4",children:a.map(r=>e.jsx("div",{className:"col-md-6 col-lg-3",children:e.jsxs("div",{className:"fc-benefit-card",children:[e.jsx("div",{className:"fc-benefit-icon",children:e.jsx("i",{className:`ti ${r.icon}`})}),e.jsx("h5",{children:r.title}),e.jsx("p",{children:r.text})]})},r.title))})]})}),e.jsx("section",{className:"fc-sol-section alt",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-sol-header",children:[e.jsxs("h2",{children:["Why hire on ",e.jsx("span",{children:"Future Connect"})]}),e.jsx("p",{children:"See the difference verified skill search makes."})]}),e.jsx("div",{className:"fc-compare",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Capability"}),e.jsx("th",{children:"Traditional hiring"}),e.jsx("th",{children:"Future Connect"})]})}),e.jsx("tbody",{children:c.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.capability}),e.jsx("td",{children:r.traditional}),e.jsx("td",{className:"yes",children:r.fc})]},r.capability))})]})})]})}),e.jsx("section",{className:"fc-sol-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"fc-testimonial",children:[e.jsx("div",{className:"quote-mark",children:'"'}),e.jsx("p",{className:"quote",children:"We filled a specialised design role in under a week — something that would normally take us over a month through traditional recruiting."}),e.jsxs("div",{className:"author",children:[e.jsx("strong",{children:"Hiring manager"}),e.jsx("span",{children:"Tech company, Kigali"})]})]})})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"fc-final-cta",children:[e.jsx("h2",{children:"Hire sharper, hire faster"}),e.jsx("p",{children:"Search verified talent or post your next role today."}),e.jsx(t,{href:i.startHiring,className:"btn-fc-primary",children:"Quick hiring"})]})})]})]})}n.layout=a=>e.jsx(s,{children:a,title:"For Companies - Future Connect"});export{n as default};
