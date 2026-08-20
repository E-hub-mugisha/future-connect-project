import{j as e,H as c,L as t}from"./app-CgjB0zLb.js";import{G as d}from"./GuestLayout-B7urfbcg.js";const h={"user.talents":"/skills-marketplace"},m=(a,i)=>(a["user.talents.category"]||"/skills/category/:slug").replace(":slug",i);function p({categories:a=[],routes:i={},assetBase:o=""}){const n=r=>i[r]||h[r]||"#",s=r=>`${o}${r}`,l=a.slice(0,6);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Connection Room – Every Connection You Need, In One Place"}),e.jsx("style",{children:`
        /*
          Font note: Apple does not license the SF Pro / San Francisco font
          files for embedding on non-Apple-platform web pages. The correct,
          fully-licensed way to render actual San Francisco on Apple devices
          is the system-font stack below — Safari/macOS/iOS resolve
          -apple-system / BlinkMacSystemFont straight to San Francisco,
          and every other OS falls back to its own native UI font.
        */

        /* ── Tokens ──────────────────────────────────────────────── */
        :root {
            --bg-base: #0e1618;
            --bg-card: #131e21;
            --bg-card-alt: #192429;
            --bg-elevated: #1e2d32;
            --accent: #48d597;
            --accent-dim: #48d59718;
            --accent-muted: #48d59740;
            --accent-hover: #00c27a;
            --text-primary: #f0f4f5;
            --text-secondary: #8fa8ad;
            --text-muted: #4d6b72;
            --border: #1f3038;
            --border-hover: #2a4550;
            --radius-sm: 6px;
            --radius-md: 10px;
            --radius-lg: 16px;
            --font-head: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background: var(--bg-base) !important;
            color: var(--text-primary) !important;
            font-family: var(--font-body);
        }

        /* ── Hero ────────────────────────────────────────────────── */
        .nh-hero {
            position: relative;
            overflow: hidden;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 4rem 2.5rem;
            margin: 2rem 0 3rem;
        }

        /* subtle grid pattern */
        .nh-hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(var(--border) 1px, transparent 1px),
                linear-gradient(90deg, var(--border) 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: .4;
            pointer-events: none;
        }

        /* glow blobs */
        .nh-hero-glow-1 {
            position: absolute;
            top: -80px;
            right: -80px;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, var(--accent-muted) 0%, transparent 65%);
            pointer-events: none;
        }

        .nh-hero-glow-2 {
            position: absolute;
            bottom: -60px;
            left: 10%;
            width: 260px;
            height: 260px;
            border-radius: 50%;
            background: radial-gradient(circle, #48d59710 0%, transparent 70%);
            pointer-events: none;
        }

        .nh-hero-content {
            position: relative;
            z-index: 2;
        }

        .nh-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            background: var(--accent-dim);
            border: 1px solid var(--accent-muted);
            color: var(--accent);
            font-size: .72rem;
            font-weight: 700;
            padding: 4px 14px;
            border-radius: 50px;
            letter-spacing: .8px;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }

        .nh-hero-title {
            font-family: var(--font-head);
            font-size: clamp(1.8rem, 4vw, 3rem);
            font-weight: 900;
            color: var(--text-primary);
            line-height: 1.15;
            margin-bottom: 1rem;
        }

        .nh-hero-title span {
            color: var(--accent);
        }

        .nh-hero-sub {
            color: var(--text-secondary);
            font-size: .95rem;
            line-height: 1.7;
            max-width: 520px;
            margin-bottom: 1.75rem;
        }

        .nh-cta-row {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        .nh-cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--accent);
            color: #fff;
            border: none;
            border-radius: var(--radius-md);
            padding: .9rem 2rem;
            font-weight: 700;
            font-size: .95rem;
            text-decoration: none;
            transition: background .2s, transform .15s;
            letter-spacing: .3px;
        }

        .nh-cta-btn:hover {
            background: var(--accent-hover);
            transform: translateY(-2px);
            color: #fff;
        }

        .nh-cta-btn-outline {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            color: var(--text-primary);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: .85rem 1.9rem;
            font-weight: 700;
            font-size: .95rem;
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
            letter-spacing: .3px;
        }

        .nh-cta-btn-outline:hover {
            border-color: var(--accent-muted);
            color: var(--accent);
            background: var(--accent-dim);
        }

        .nh-cta-btn i,
        .nh-cta-btn-outline i {
            font-size: 1rem;
        }

        /* Popular search tags */
        .nh-popular {
            margin-top: 1.5rem;
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .nh-popular-label {
            font-size: .75rem;
            color: var(--text-muted);
            font-weight: 600;
            white-space: nowrap;
        }

        .nh-tag {
            display: inline-block;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            color: var(--text-secondary);
            font-size: .75rem;
            padding: 4px 12px;
            border-radius: 50px;
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
        }

        .nh-tag:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: var(--accent-dim);
            text-decoration: none;
        }

        /* Hero image collage */
        .nh-hero-img-wrap {
            position: relative;
            z-index: 2;
            height: 100%;
        }

        .nh-hero-img-main {
            width: 100%;
            border-radius: var(--radius-lg);
            border: 1px solid var(--border);
            object-fit: cover;
            height: 260px;
            display: block;
        }

        .nh-hero-stat {
            position: absolute;
            bottom: -16px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: .6rem 1.25rem;
            display: flex;
            align-items: center;
            gap: 20px;
            white-space: nowrap;
        }

        .nh-stat-item {
            text-align: center;
        }

        .nh-stat-num {
            font-family: var(--font-head);
            font-size: 1.1rem;
            font-weight: 900;
            color: var(--accent);
        }

        .nh-stat-lbl {
            font-size: .65rem;
            color: var(--text-muted);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: .6px;
        }

        /* ── Section heading ─────────────────────────────────────── */
        .nh-section-head {
            margin-bottom: 2rem;
        }

        .nh-section-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: .72rem;
            font-weight: 700;
            color: var(--accent);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: .5rem;
        }

        .nh-section-eyebrow::before {
            content: '';
            width: 3px;
            height: .85rem;
            background: var(--accent);
            border-radius: 2px;
            display: inline-block;
        }

        .nh-section-title {
            font-family: var(--font-head);
            font-size: clamp(1.4rem, 2.5vw, 1.9rem);
            font-weight: 800;
            color: var(--text-primary);
            margin-bottom: .5rem;
        }

        .nh-section-sub {
            color: var(--text-secondary);
            font-size: .88rem;
        }

        /* ── About Section ───────────────────────────────────────── */
        .nh-about {
            padding: 4rem 0;
        }

        .nh-about-img-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            gap: 12px;
        }

        .nh-about-img-grid img {
            width: 100%;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            object-fit: cover;
            display: block;
        }

        .nh-about-img-grid img:first-child {
            grid-row: 1 / 3;
            height: 100%;
        }

        .nh-about-img-grid img:nth-child(2) {
            height: 150px;
        }

        .nh-about-img-grid img:nth-child(3) {
            height: 150px;
        }

        .nh-about-text {
            padding-left: 1.5rem;
        }

        .nh-about-text h6 {
            color: var(--accent);
            font-size: .8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: .75rem;
        }

        .nh-about-text p {
            color: var(--text-secondary);
            font-size: .88rem;
            line-height: 1.75;
            margin-bottom: 1rem;
        }

        .nh-about-text h5 {
            color: var(--text-primary);
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: .5rem;
        }

        .nh-feature-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .nh-feature-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: .875rem;
            color: var(--text-secondary);
        }

        .nh-feature-list li::before {
            content: '';
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--accent-dim);
            border: 1px solid var(--accent-muted);
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 10px;
        }

        /* ── Marketing / Start Connecting panel (replaces categories) ── */
        .nh-market {
            padding: 3.5rem 0;
        }

        .nh-market-panel {
            position: relative;
            overflow: hidden;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 3rem 2.5rem;
        }

        .nh-market-panel::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .nh-market-glow {
            position: absolute;
            top: -70px;
            left: -70px;
            width: 320px;
            height: 320px;
            border-radius: 50%;
            background: radial-gradient(circle, var(--accent-muted) 0%, transparent 65%);
            pointer-events: none;
        }

        .nh-market-title {
            font-family: var(--font-head);
            font-size: clamp(1.5rem, 3vw, 2.1rem);
            font-weight: 900;
            color: var(--text-primary);
            margin-bottom: .85rem;
            position: relative;
        }

        .nh-market-title span {
            color: var(--accent);
        }

        .nh-market-sub {
            color: var(--text-secondary);
            font-size: .92rem;
            line-height: 1.75;
            max-width: 560px;
            margin-bottom: 1.75rem;
            position: relative;
        }

        .nh-market-points {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1.25rem;
            margin-top: 2.25rem;
            position: relative;
        }

        .nh-market-point {
            display: flex;
            flex-direction: column;
            gap: .4rem;
        }

        .nh-market-point-num {
            font-family: var(--font-head);
            font-weight: 900;
            font-size: 1.6rem;
            color: var(--accent);
        }

        .nh-market-point-lbl {
            font-size: .82rem;
            color: var(--text-secondary);
            line-height: 1.5;
        }

        .nh-market-note {
            font-size: .78rem;
            color: var(--text-muted);
            margin-top: 1rem;
            position: relative;
        }

        /* ── Benefits ────────────────────────────────────────────── */
        .nh-benefits {
            padding: 3.5rem 0;
        }

        .nh-benefit-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 1.75rem;
            height: 100%;
            transition: border-color .25s, transform .25s;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .nh-benefit-card:hover {
            border-color: var(--accent-muted);
            transform: translateY(-3px);
        }

        .nh-benefit-icon {
            width: 52px;
            height: 52px;
            border-radius: var(--radius-md);
            background: var(--accent-dim);
            border: 1px solid var(--accent-muted);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            color: var(--accent);
        }

        .nh-benefit-title {
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .nh-benefit-desc {
            font-size: .85rem;
            color: var(--text-secondary);
            line-height: 1.7;
            margin: 0;
        }

        /* ── Closing CTA ─────────────────────────────────────────── */
        .nh-close-cta {
            margin: 1rem 0 3.5rem;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 3rem 2.5rem;
            position: relative;
            overflow: hidden;
            text-align: center;
        }

        .nh-close-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .nh-close-cta h2 {
            font-family: var(--font-head);
            font-size: clamp(1.4rem, 2.8vw, 2rem);
            font-weight: 900;
            color: var(--text-primary);
            margin-bottom: .75rem;
        }

        .nh-close-cta p {
            color: var(--text-secondary);
            font-size: .92rem;
            max-width: 480px;
            margin: 0 auto 1.75rem;
            line-height: 1.7;
        }

        /* ── Divider ─────────────────────────────────────────────── */
        .nh-divider {
            border: none;
            border-top: 1px solid var(--border);
            margin: 0;
        }

        /* ── Responsive ──────────────────────────────────────────── */
        @media (max-width: 768px) {
            .nh-hero {
                padding: 2.5rem 1.25rem;
            }

            .nh-about-text {
                padding-left: 0;
                margin-top: 1.5rem;
            }

            .nh-hero-img-wrap {
                margin-top: 2rem;
            }

            .nh-market-panel {
                padding: 2.25rem 1.5rem;
            }

            .nh-close-cta {
                padding: 2.25rem 1.5rem;
            }
        }

        [data-h-theme="light"] {
            --bg-base: #f6faf8;
            --bg-card: #ffffff;
            --bg-card-alt: #eef4f1;
            --bg-elevated: #e7f0ec;
            --accent: #00a667;
            --accent-dim: rgba(0, 166, 103, 0.08);
            --accent-muted: rgba(0, 166, 103, 0.25);
            --accent-hover: #00814f;
            --text-primary: #10201b;
            --text-secondary: #4f6b65;
            --text-muted: #7d9791;
            --border: rgba(0, 60, 40, 0.1);
            --border-hover: rgba(0, 100, 60, 0.22);
        }

        [data-h-theme="light"] body {
            background: var(--bg-base) !important;
            color: var(--text-primary) !important;
        }

        /* CTA button text stays white on the solid accent green */
        [data-h-theme="light"] .nh-cta-btn,
        [data-h-theme="light"] .nh-cta-btn:hover {
            color: #fff;
        }

        /* Hero glow blobs were tuned for a dark background; soften for light */
        [data-h-theme="light"] .nh-hero-glow-1 {
            background: radial-gradient(circle, rgba(0, 166, 103, 0.14) 0%, transparent 65%);
        }

        [data-h-theme="light"] .nh-hero-glow-2 {
            background: radial-gradient(circle, rgba(0, 166, 103, 0.08) 0%, transparent 70%);
        }

        [data-h-theme="light"] .nh-market-glow {
            background: radial-gradient(circle, rgba(0, 166, 103, 0.14) 0%, transparent 65%);
        }

        /* Feature-list checkmark icon uses a hardcoded green stroke (#00a667),
       already correct for light mode as-is — no override needed. */
      `}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"nh-hero",children:[e.jsx("div",{className:"nh-hero-glow-1"}),e.jsx("div",{className:"nh-hero-glow-2"}),e.jsxs("div",{className:"row align-items-center nh-hero-content",children:[e.jsxs("div",{className:"col-lg-7",children:[e.jsxs("span",{className:"nh-eyebrow",children:[e.jsx("i",{className:"fa-solid fa-network-wired"})," Networking Hub"]}),e.jsxs("h1",{className:"nh-hero-title",children:["Every Connection ",e.jsx("span",{children:"You Need"}),e.jsx("br",{}),"Is Already Here"]}),e.jsx("p",{className:"nh-hero-sub",children:"Stop networking the slow way. Future Connect puts verified skills, real opportunities, and the people who can change your career one conversation away — starting the moment you sign in."}),e.jsxs("div",{className:"nh-cta-row",children:[e.jsxs(t,{href:n("user.talents"),className:"nh-cta-btn",children:["Start Connecting ",e.jsx("i",{className:"feather-arrow-right"})]}),e.jsxs(t,{href:n("user.talents"),className:"nh-cta-btn-outline",children:["Explore Skills ",e.jsx("i",{className:"feather-arrow-right"})]})]}),e.jsxs("div",{className:"nh-popular",children:[e.jsx("span",{className:"nh-popular-label",children:"Popular:"}),l.map(r=>e.jsx(t,{href:m(i,r.slug),className:"nh-tag",children:r.name},r.id))]})]}),e.jsx("div",{className:"col-lg-5",children:e.jsxs("div",{className:"nh-hero-img-wrap",children:[e.jsx("img",{src:s("/assets/img/bg/provide-bg.jpg"),className:"nh-hero-img-main",alt:"Networking Hub"}),e.jsxs("div",{className:"nh-hero-stat",children:[e.jsxs("div",{className:"nh-stat-item",children:[e.jsx("div",{className:"nh-stat-num",children:"10K+"}),e.jsx("div",{className:"nh-stat-lbl",children:"Skills"})]}),e.jsx("div",{style:{width:1,height:32,background:"var(--border)"}}),e.jsxs("div",{className:"nh-stat-item",children:[e.jsx("div",{className:"nh-stat-num",children:a.length}),e.jsx("div",{className:"nh-stat-lbl",children:"Categories"})]}),e.jsx("div",{style:{width:1,height:32,background:"var(--border)"}}),e.jsxs("div",{className:"nh-stat-item",children:[e.jsx("div",{className:"nh-stat-num",children:"98%"}),e.jsx("div",{className:"nh-stat-lbl",children:"Satisfaction"})]})]})]})})]})]}),e.jsx("hr",{className:"nh-divider"}),e.jsx("section",{className:"nh-about",children:e.jsxs("div",{className:"row align-items-center g-5",children:[e.jsx("div",{className:"col-lg-5",children:e.jsxs("div",{className:"nh-about-img-grid",children:[e.jsx("img",{src:s("/assets/img/bg/provide-bg.jpg"),alt:"About"}),e.jsx("img",{src:s("/assets/img/aboutus/about-us-02.jpg"),alt:"About"}),e.jsx("img",{src:s("/assets/img/aboutus/about-us-03.jpg"),alt:"About"})]})}),e.jsx("div",{className:"col-lg-7",children:e.jsxs("div",{className:"nh-about-text",children:[e.jsxs("div",{className:"nh-section-head",children:[e.jsx("div",{className:"nh-section-eyebrow",children:"About the Hub"}),e.jsxs("h2",{className:"nh-section-title",children:["Your gateway to meaningful",e.jsx("br",{}),"professional connections."]}),e.jsx("p",{children:"Whether you are a skill seeker looking for opportunities, a project owner looking for collaborators, or an entrepreneur looking to expand your network — this hub puts the right people directly in front of you, without the wait."}),e.jsx("h5",{children:"Our Mission"}),e.jsx("p",{children:"At Future Connect, our mission is to empower individuals and businesses by facilitating easy access to a diverse range of high-quality services. We believe in creating a collaborative and inclusive marketplace that fosters growth, creativity, and mutual success."})]}),e.jsxs("ul",{className:"nh-feature-list",children:[e.jsx("li",{children:"Diverse Network of Professionals"}),e.jsx("li",{children:"Trust and Transparency"}),e.jsx("li",{children:"User Friendly Platform"}),e.jsx("li",{children:"Innovation In Technology"})]})]})})]})}),e.jsx("hr",{className:"nh-divider"}),e.jsx("section",{className:"nh-market",children:e.jsxs("div",{className:"nh-market-panel",children:[e.jsx("div",{className:"nh-market-glow"}),e.jsx("span",{className:"nh-eyebrow",children:"Why Wait?"}),e.jsxs("h2",{className:"nh-market-title",children:["Your Next Opportunity Is ",e.jsx("span",{children:"One Connection Away."})]}),e.jsx("p",{className:"nh-market-sub",children:"Every day you're not connected is a day someone else claims the client, the collaborator, or the mentor who should've found you. Future Connect brings the network to you — verified people, real opportunities, no cold outreach required."}),e.jsxs("div",{className:"nh-cta-row",children:[e.jsxs(t,{href:n("user.talents"),className:"nh-cta-btn",children:["Start Connecting ",e.jsx("i",{className:"feather-arrow-right"})]}),e.jsxs(t,{href:n("user.talents"),className:"nh-cta-btn-outline",children:["Explore Skills ",e.jsx("i",{className:"feather-arrow-right"})]})]}),e.jsxs("div",{className:"nh-market-points",children:[e.jsxs("div",{className:"nh-market-point",children:[e.jsx("span",{className:"nh-market-point-num",children:"10K+"}),e.jsx("span",{className:"nh-market-point-lbl",children:"Verified skills ready to work with you"})]}),e.jsxs("div",{className:"nh-market-point",children:[e.jsx("span",{className:"nh-market-point-num",children:"98%"}),e.jsx("span",{className:"nh-market-point-lbl",children:"Satisfaction from people who made the switch"})]}),e.jsxs("div",{className:"nh-market-point",children:[e.jsx("span",{className:"nh-market-point-num",children:"3 min"}),e.jsx("span",{className:"nh-market-point-lbl",children:"Average time to set up your profile"})]})]}),e.jsx("p",{className:"nh-market-note",children:"Free to join. No credit card required."})]})}),e.jsx("hr",{className:"nh-divider"}),e.jsxs("section",{className:"nh-benefits",children:[e.jsxs("div",{className:"row align-items-end mb-4",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsx("div",{className:"nh-section-eyebrow",children:"Why Us"}),e.jsx("h2",{className:"nh-section-title",children:"Key Benefits"})]}),e.jsx("div",{className:"col-lg-6",children:e.jsx("p",{className:"nh-section-sub mb-0",children:"Find professionals across various fields and expand your network effortlessly."})})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"nh-benefit-card",children:[e.jsx("div",{className:"nh-benefit-icon",children:e.jsx("i",{className:"fa-solid fa-people-arrows"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"nh-benefit-title",children:"Collaborate on Projects"}),e.jsx("p",{className:"nh-benefit-desc",children:"Work together with skilled individuals to bring your ideas to life and create something remarkable."})]})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"nh-benefit-card",children:[e.jsx("div",{className:"nh-benefit-icon",children:e.jsx("i",{className:"fa-solid fa-user-tie"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"nh-benefit-title",children:"Connect with Skills"}),e.jsx("p",{className:"nh-benefit-desc",children:"Find professionals across various fields and expand your network effortlessly with verified profiles."})]})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"nh-benefit-card",children:[e.jsx("div",{className:"nh-benefit-icon",children:e.jsx("i",{className:"fa-solid fa-calendar-check"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"nh-benefit-title",children:"Attend Networking Events"}),e.jsx("p",{className:"nh-benefit-desc",children:"Discover and participate in events designed to foster professional relationships and career growth."})]})]})})]})]}),e.jsxs("div",{className:"nh-close-cta",children:[e.jsx("h2",{children:"Ready to Start Connecting?"}),e.jsx("p",{children:"Join the professionals already building real careers and real networks on Future Connect. It only takes a few minutes to begin."}),e.jsx("div",{className:"nh-cta-row",style:{justifyContent:"center"},children:e.jsxs(t,{href:n("user.talents"),className:"nh-cta-btn",children:["Start Connecting ",e.jsx("i",{className:"feather-arrow-right"})]})})]})]})]})}p.layout=a=>e.jsx(d,{children:a});export{p as default};
