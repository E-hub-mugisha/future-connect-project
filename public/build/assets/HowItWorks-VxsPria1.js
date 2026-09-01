import{j as e,H as o,L as t}from"./app-DQcVR1sC.js";import{G as i}from"./GuestLayout-AyS9Rfgz.js";function s(a,r=80){return a?a.length>r?a.slice(0,r).trimEnd()+"...":a:""}function n({successStories:a=[]}){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"How It Works | Future Connect"}),e.jsx("style",{children:`
        :root {
          --bg: #0e1618;
          --bg-card: #131e21;
          --bg-glass: rgba(255, 255, 255, 0.035);
          --bg-glass2: rgba(0, 166, 103, 0.08);
          --accent: #48d597;
          --accent-dim: #008f59;
          --accent-glow: rgba(0, 166, 103, 0.22);
          --accent-line: rgba(0, 166, 103, 0.35);
          --border: rgba(255, 255, 255, 0.07);
          --border-h: rgba(0, 166, 103, 0.3);
          --text-1: #f0f4f3;
          --text-2: #8da4a0;
          --text-3: #4d6460;
          --font-head: 'Montserrat', sans-serif;
          --font-body: 'Montserrat', sans-serif;
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

        /* ── SHARED UTILITIES ── */
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

        .fc-section-head {
          margin-bottom: 48px;
        }

        .fc-section-head .eyebrow {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 12px;
          display: block;
        }

        .fc-section-head h2 {
          font-family: var(--font-head);
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          color: var(--text-1);
          margin-bottom: 14px;
          line-height: 1.15;
        }

        .fc-section-head p {
          color: var(--text-2);
          font-size: 0.95rem;
          max-width: 560px;
          line-height: 1.7;
        }

        .btn-fc-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent);
          color: #fff;
          border: none;
          border-radius: var(--r-pill);
          padding: 12px 28px;
          font-family: var(--font-head);
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: background .2s, transform .15s, box-shadow .2s;
          box-shadow: 0 4px 22px var(--accent-glow);
        }

        .btn-fc-primary:hover {
          background: var(--accent-dim);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px var(--accent-glow);
          color: #fff;
        }

        .btn-fc-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--text-1);
          border: 1px solid var(--border);
          border-radius: var(--r-pill);
          padding: 11px 26px;
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

        /* ══════════════════════════════════════
         1. HERO
        ══════════════════════════════════════ */
        .fc-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .fc-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .fc-hero-bg .carousel,
        .fc-hero-bg .carousel-inner,
        .fc-hero-bg .carousel-item {
          height: 100%;
        }

        .fc-hero-bg-slide {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        .fc-hero-bg-slide video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .fc-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(135deg,
              rgba(14, 22, 24, 0.92) 0%,
              rgba(14, 22, 24, 0.75) 50%,
              rgba(0, 166, 103, 0.08) 100%);
        }

        .fc-hero-grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-size: 60px 60px;
        }

        .fc-hero-content {
          position: relative;
          z-index: 2;
          padding: 80px 40px;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 20px;
        }

        .hero-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 2px;
          background: var(--accent);
          border-radius: 2px;
        }

        .fc-hero h1 {
          font-family: var(--font-head);
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.08;
          color: var(--text-1);
          margin-bottom: 22px;
        }

        .fc-hero h1 .hl {
          color: var(--accent);
        }

        .fc-hero p {
          font-size: 1.05rem;
          color: var(--text-2);
          max-width: 520px;
          line-height: 1.75;
          margin-bottom: 36px;
        }

        .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 52px;
        }

        .hero-stats {
          display: flex;
          gap: 36px;
          flex-wrap: wrap;
          border-top: 1px solid var(--border);
          padding-top: 28px;
        }

        .hero-stat-val {
          font-family: var(--font-head);
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--accent);
        }

        .hero-stat-lbl {
          font-size: 0.78rem;
          color: var(--text-3);
          margin-top: 2px;
        }

        .avatar-stack {
          display: flex;
        }

        .avatar-stack img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid var(--bg);
          object-fit: cover;
          margin-left: -10px;
        }

        .avatar-stack img:first-child {
          margin-left: 0;
        }

        /* ══════════════════════════════════════
         2. TRENDING FEATURE STRIP
        ══════════════════════════════════════ */
        .fc-feature-strip {
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 28px 0;
        }

        .feature-strip-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
        }

        @media(max-width: 767px) {
          .feature-strip-grid {
            grid-template-columns: 1fr;
          }
        }

        .feature-strip-item {
          background: var(--bg-card);
          padding: 28px 32px;
          transition: background .2s;
        }

        .feature-strip-item:hover {
          background: var(--bg-glass2);
        }

        .feature-strip-item h5 {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-1);
          margin-bottom: 8px;
        }

        .feature-strip-item p {
          font-size: 0.83rem;
          color: var(--text-2);
          margin-bottom: 14px;
          line-height: 1.6;
        }

        .strip-link {
          font-size: 0.8rem;
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

        .strip-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--r-sm);
          background: var(--bg-glass2);
          border: 1px solid var(--border-h);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-size: 1rem;
          margin-bottom: 16px;
        }

        /* ══════════════════════════════════════
         3. TRENDING CATEGORIES
        ══════════════════════════════════════ */
        .fc-categories {
          padding: 80px 0;
        }

        .category-scroll {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          padding-bottom: 12px;
          scrollbar-width: none;
        }

        .category-scroll::-webkit-scrollbar {
          display: none;
        }

        .cat-pill {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-shrink: 0;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 18px 22px;
          text-decoration: none;
          transition: border-color .2s, transform .2s, background .2s;
          min-width: 160px;
        }

        .cat-pill:hover {
          border-color: var(--border-h);
          background: var(--bg-glass2);
          transform: translateY(-3px);
        }

        .cat-pill-name {
          font-family: var(--font-head);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-1);
        }

        .cat-pill-count {
          font-size: 0.75rem;
          color: var(--text-3);
        }

        .cat-pill-arrow {
          color: var(--accent);
          font-size: 0.75rem;
          margin-top: 8px;
        }

        /* ══════════════════════════════════════
         4. FEATURES TABS SECTION
        ══════════════════════════════════════ */
        .fc-features {
          padding: 80px 0;
        }

        .fc-tab-bar {
          display: flex;
          gap: 4px;
          flex-wrap: wrap;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 6px;
          margin-bottom: 32px;
        }

        .fc-tab-btn {
          flex: 1;
          min-width: 100px;
          background: transparent;
          border: none;
          border-radius: var(--r-sm);
          padding: 10px 20px;
          font-family: var(--font-head);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-3);
          cursor: pointer;
          transition: background .2s, color .2s;
          white-space: nowrap;
        }

        .fc-tab-btn.active {
          background: var(--bg-glass2);
          color: var(--accent);
          border: 1px solid var(--border-h);
        }

        .fc-tab-btn:hover:not(.active) {
          color: var(--text-2);
        }

        .fc-tab-panel {
          display: none;
          animation: panelIn .3s ease;
        }

        .fc-tab-panel.active {
          display: block;
        }

        @keyframes panelIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-panel-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 40px;
          overflow: hidden;
          position: relative;
        }

        .feature-panel-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .feature-panel-card h2 {
          font-family: var(--font-head);
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 800;
          color: var(--text-1);
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .feature-panel-card h2 span {
          color: var(--accent);
        }

        .feature-panel-card p {
          color: var(--text-2);
          line-height: 1.75;
          margin-bottom: 28px;
          max-width: 520px;
        }

        .feature-img-wrap {
          text-align: center;
        }

        .feature-img-wrap img {
          max-height: 260px;
        }

        .fc-provide-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin-top: 24px;
        }

        .fc-provide-box {
          background: var(--bg-glass);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 24px;
          transition: border-color .2s, transform .2s;
        }

        .fc-provide-box:hover {
          border-color: var(--border-h);
          transform: translateY(-3px);
        }

        .fc-provide-box .provide-icon {
          margin-bottom: 14px;
        }

        .fc-provide-box .provide-icon img {
          height: 36px;
          filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(130deg) brightness(104%) contrast(101%);
        }

        .fc-provide-box h6 {
          font-family: var(--font-head);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-1);
          margin-bottom: 8px;
        }

        .fc-provide-box p {
          font-size: 0.82rem;
          color: var(--text-2);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.87rem;
          color: var(--text-2);
          line-height: 1.5;
        }

        .feature-list li::before {
          content: '';
          flex-shrink: 0;
          margin-top: 5px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--bg-glass2);
          border: 1px solid var(--border-h);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
          background-size: 10px;
          background-repeat: no-repeat;
          background-position: center;
        }

        /* ══════════════════════════════════════
         5. HOW IT WORKS
        ══════════════════════════════════════ */
        .fc-how {
          padding: 80px 0;
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2px;
          background: var(--border);
        }

        .step-card {
          background: var(--bg-card);
          padding: 36px 28px;
          transition: background .2s;
        }

        .step-card:hover {
          background: var(--bg-glass2);
        }

        .step-num {
          font-family: var(--font-head);
          font-size: 3rem;
          font-weight: 800;
          color: var(--accent);
          opacity: 0.15;
          line-height: 1;
          margin-bottom: 16px;
          display: block;
        }

        .step-card h5 {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-1);
          margin-bottom: 10px;
        }

        .step-card p {
          font-size: 0.83rem;
          color: var(--text-2);
          line-height: 1.65;
          margin-bottom: 16px;
        }

        /* ══════════════════════════════════════
         6. PARTNERS
        ══════════════════════════════════════ */
        .fc-partners {
          padding: 60px 0;
        }

        .partners-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-3);
          font-weight: 600;
          text-align: center;
          margin-bottom: 32px;
        }

        .partners-scroll {
          display: flex;
          align-items: center;
          gap: 48px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 8px;
        }

        .partners-scroll::-webkit-scrollbar {
          display: none;
        }

        .partners-scroll img {
          height: 36px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.25;
          flex-shrink: 0;
          transition: opacity .2s;
        }

        .partners-scroll img:hover {
          opacity: 0.6;
        }

        /* ══════════════════════════════════════
         7. TESTIMONIALS
        ══════════════════════════════════════ */
        .fc-testimonials {
          padding: 80px 0;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 18px;
        }

        .testimonial-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--r-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color .2s, transform .2s;
        }

        .testimonial-card:hover {
          border-color: var(--border-h);
          transform: translateY(-3px);
        }

        .testimonial-head {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .testimonial-head img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--border-h);
          flex-shrink: 0;
        }

        .testimonial-name {
          font-family: var(--font-head);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-1);
        }

        .testimonial-role {
          font-size: 0.75rem;
          color: var(--text-3);
        }

        .testimonial-stars {
          color: var(--accent);
          font-size: 0.8rem;
          margin-left: auto;
        }

        .testimonial-body p {
          font-size: 0.85rem;
          color: var(--text-2);
          line-height: 1.7;
        }

        .testimonial-loc {
          font-size: 0.75rem;
          color: var(--text-3);
          display: flex;
          align-items: center;
          gap: 5px;
        }

        /* ══════════════════════════════════════
         8. CTA BANNER
        ══════════════════════════════════════ */
        .fc-cta {
          margin: 0 0 80px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 56px 48px;
          position: relative;
          overflow: hidden;
        }

        .fc-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .fc-cta-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: var(--accent-glow);
          filter: blur(80px);
          pointer-events: none;
        }

        .fc-cta h2 {
          font-family: var(--font-head);
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 800;
          color: var(--text-1);
          margin-bottom: 12px;
        }

        .fc-cta p {
          color: var(--text-2);
          font-size: 0.95rem;
          max-width: 480px;
          margin-bottom: 28px;
        }

        /* ══════════════════════════════════════
         MOBILE ACCORDION
        ══════════════════════════════════════ */
        .fc-accordion {
          padding: 48px 0;
        }

        .fc-accordion .accordion-item {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--r-md) !important;
          margin-bottom: 8px;
          overflow: hidden;
        }

        .fc-accordion .accordion-button {
          background: var(--bg-card);
          color: var(--text-1);
          font-family: var(--font-head);
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: none;
          padding: 18px 22px;
        }

        .fc-accordion .accordion-button:not(.collapsed) {
          color: var(--accent);
          background: var(--bg-glass2);
        }

        .fc-accordion .accordion-button::after {
          filter: invert(1);
        }

        .fc-accordion .accordion-collapse {
          border-top: 1px solid var(--border);
        }

        .fc-accordion .accordion-body {
          padding: 24px;
        }

        /* ===== GLOBAL ===== */
        * {
          box-sizing: border-box;
        }

        /* ===== START SELLER SECTION ===== */
        .start-seller-sec {
          background: #0e1618;
          padding: 60px 0;
        }

        .seller-inner-img {
          background: #0f1e21;
          border: 1px solid #1e3035;
          border-radius: 14px;
          overflow: hidden;
          min-height: 340px;
        }

        .seller-inner-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0.9;
          transition: opacity 0.3s;
        }

        .seller-inner-img img:hover {
          opacity: 1;
        }

        .seller-info-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 32px;
        }

        .seller-head {
          margin-bottom: 24px;
        }

        .seller-head h3 {
          font-size: 28px;
          font-weight: 600;
          color: #F5f5f7;
          line-height: 1.35;
          margin-bottom: 10px;
        }

        .seller-head h3 span {
          color: #48d597;
        }

        .seller-head p {
          font-size: 14px;
          color: #8aa4aa;
          line-height: 1.8;
          margin: 0;
        }

        .seller-feature-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sllers-list ul {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sllers-list ul li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #c8dde0;
          background: #0f1e21;
          border: 1px solid #1e3035;
          border-radius: 8px;
          padding: 10px 14px;
          transition: border-color 0.2s;
        }

        .sllers-list ul li:hover {
          border-color: rgba(0, 166, 103, 0.4);
        }

        .sllers-list ul li span {
          color: #48d597;
          font-size: 16px;
          line-height: 1;
          flex-shrink: 0;
        }

        .sllers-list .btn-primary {
          background: #48d597;
          border: none;
          color: #fff;
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, transform 0.2s;
        }

        .sllers-list .btn-primary:hover {
          background: #008f58;
          transform: translateY(-2px);
          color: #fff;
        }

        /* ===== HOW IT WORKS / WHY CHOOSE SECTION ===== */
        .why-choose-sec {
          background: #0b1416;
          padding: 60px 0;
          border-top: 1px solid #1a2a2e;
          border-bottom: 1px solid #1a2a2e;
        }

        .about-us-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .about-us-header h2 {
          font-size: 26px;
          font-weight: 600;
          color: #F5f5f7;
          margin-bottom: 8px;
        }

        .about-us-header p {
          font-size: 14px;
          color: #6b8a90;
        }

        /* Nav Tabs */
        .why-choose-sec .nav-tabs {
          border-bottom: 1px solid #1a2a2e;
          gap: 4px;
          margin-bottom: 32px !important;
        }

        .why-choose-sec .nav-tabs .nav-link {
          background: transparent;
          border: 1px solid transparent;
          border-radius: 8px 8px 0 0;
          color: #6b8a90;
          font-size: 14px;
          font-weight: 500;
          padding: 10px 24px;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }

        .why-choose-sec .nav-tabs .nav-link:hover {
          color: #48d597;
          background: rgba(0, 166, 103, 0.06);
          border-color: transparent;
        }

        .why-choose-sec .nav-tabs .nav-link.active {
          background: rgba(0, 166, 103, 0.1);
          border-color: #1e3035 #1e3035 transparent;
          color: #48d597;
          font-weight: 600;
        }

        /* Cards */
        .why-choose-card {
          background: #0f1e21;
          border: 1px solid #1e3035;
          border-radius: 14px;
          padding: 24px 20px;
          margin-bottom: 20px;
          transition: border-color 0.25s, transform 0.25s;
        }

        .why-choose-card:hover {
          border-color: rgba(0, 166, 103, 0.5);
          transform: translateY(-4px);
        }

        .why-choose-card .card-icon {
          width: 46px;
          height: 46px;
          background: rgba(0, 166, 103, 0.1);
          border: 1px solid rgba(0, 166, 103, 0.25);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .why-choose-card .card-icon img {
          width: 22px;
          height: 22px;
          filter: invert(52%) sepia(70%) saturate(500%) hue-rotate(115deg) brightness(95%);
        }

        .why-choose-card h4 {
          font-size: 15px;
          font-weight: 600;
          color: #e0f0f0;
          margin-bottom: 8px;
        }

        .why-choose-card p {
          font-size: 13px;
          color: #6b8a90;
          line-height: 1.7;
          margin: 0;
        }

        /* ===== TESTIMONIALS SECTION ===== */
        .client-review-sec {
          background: #0e1618;
          padding: 60px 0;
        }

        .client-review-sec .about-us-header h2 {
          color: #F5f5f7;
        }

        .review-card {
          background: #0f1e21;
          border: 1px solid #1e3035;
          border-radius: 14px;
          padding: 24px;
          transition: border-color 0.25s, transform 0.25s;
          height: 100%;
        }

        .review-card:hover {
          border-color: rgba(0, 166, 103, 0.4);
          transform: translateY(-3px);
        }

        .quotation-icon img {
          width: 32px;
          opacity: 0.5;
          margin-bottom: 14px;
          filter: invert(52%) sepia(70%) saturate(500%) hue-rotate(115deg) brightness(95%);
        }

        .review-card h4 {
          font-size: 15px;
          font-weight: 600;
          color: #e0f0f0;
          margin-bottom: 10px;
        }

        .review-card > p {
          font-size: 13px;
          color: #8aa4aa;
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .star-rate {
          margin-bottom: 16px;
        }

        .star-rate i {
          color: #1e3035;
          font-size: 13px;
        }

        .star-rate i.filled {
          color: #f4b942;
        }

        .review-user {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid #1a2a2e;
        }

        .review-user img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(0, 166, 103, 0.3);
        }

        .review-user h6 {
          margin: 0;
          font-size: 13px;
          font-weight: 600;
          color: #c8dde0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .review-user h6 a {
          color: #c8dde0;
          text-decoration: none;
          transition: color 0.2s;
        }

        .review-user h6 a:hover {
          color: #48d597;
        }

        .review-user h6 span {
          font-size: 11px;
          color: #6b8a90;
          font-weight: 400;
        }

        /* Testimonial scroll row (replaces Owl Carousel — see conversion note above) */
        .review-scroll {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          padding-bottom: 12px;
          scrollbar-width: thin;
          scrollbar-color: #1e3035 transparent;
        }

        .review-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .review-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .review-scroll::-webkit-scrollbar-thumb {
          background: #1e3035;
          border-radius: 4px;
        }

        .review-scroll-item {
          flex: 0 0 340px;
        }

        /* ===== CTA SECTION ===== */
        .cta-section {
          padding: 40px 0 60px;
          background: #0e1618;
        }

        .cta-wrap {
          background: linear-gradient(135deg, #0f2a22 0%, #0f1e21 60%, #0b1c28 100%);
          border: 1px solid rgba(0, 166, 103, 0.25);
          border-radius: 16px;
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
        }

        .cta-wrap .row {
          position: relative;
          z-index: 2;
        }

        .cta-info .badge {
          display: inline-block;
          background: rgba(0, 166, 103, 0.12);
          color: #48d597;
          border: 1px solid rgba(0, 166, 103, 0.3);
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 14px;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .cta-info h3 {
          font-size: 22px;
          font-weight: 600;
          color: #F5f5f7;
          line-height: 1.4;
          margin: 0;
        }

        .cta-btn {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
        }

        .cta-btn .btn-primary {
          background: #48d597;
          border: none;
          color: #fff;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, transform 0.2s;
        }

        .cta-btn .btn-primary:hover {
          background: #008f58;
          transform: translateY(-2px);
          color: #fff;
        }

        .cta-btn .btn-primary i {
          font-size: 18px;
        }

        .cta-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .cta-bg1 {
          position: absolute;
          left: -40px;
          top: -40px;
          opacity: 0.04;
        }

        .cta-bg2 {
          position: absolute;
          right: -40px;
          bottom: -40px;
          opacity: 0.04;
        }

        .cta-bg1 img,
        .cta-bg2 img {
          width: 200px;
        }

        /* ===== EMPTY STATE ===== */
        .text-muted {
          color: #6b8a90 !important;
          padding: 32px 0;
        }

        [data-h-theme="light"] {
          --bg: #f6faf8;
          --bg-card: #F5f5f7;
          --bg-glass: rgba(0, 60, 40, 0.03);
          --bg-glass2: rgba(0, 166, 103, 0.07);
          --accent: #00a667;
          --accent-dim: #00814f;
          --accent-glow: rgba(0, 166, 103, 0.16);
          --accent-line: rgba(0, 166, 103, 0.3);
          --border: rgba(0, 60, 40, 0.08);
          --border-h: rgba(0, 166, 103, 0.28);
          --text-1: #10201b;
          --text-2: #4f6b65;
          --text-3: #7d9791;
        }

        [data-h-theme="light"] body {
          background: var(--bg) !important;
          color: var(--text-1);
        }

        [data-h-theme="light"] .btn-fc-primary,
        [data-h-theme="light"] .btn-fc-primary:hover {
          color: #fff;
        }

        [data-h-theme="light"] .fc-hero-overlay {
          background: linear-gradient(135deg,
              rgba(246, 250, 248, 0.93) 0%,
              rgba(246, 250, 248, 0.78) 50%,
              rgba(0, 166, 103, 0.10) 100%);
        }

        [data-h-theme="light"] .fc-provide-box .provide-icon img {
          filter: brightness(0) saturate(100%) invert(38%) sepia(90%) saturate(1000%) hue-rotate(120deg) brightness(90%) contrast(101%);
        }

        [data-h-theme="light"] .partners-scroll img {
          filter: none;
          opacity: 0.45;
        }

        [data-h-theme="light"] .partners-scroll img:hover {
          opacity: 0.85;
        }

        [data-h-theme="light"] .fc-accordion .accordion-button::after {
          filter: none;
        }

        /* ══════════════════════════════════════
         LIGHT THEME — hex-based classes in this block
        ══════════════════════════════════════ */

        /* Start Seller Section */
        [data-h-theme="light"] .start-seller-sec {
          background: #f6faf8;
        }
        [data-h-theme="light"] .seller-inner-img {
          background: #F5f5f7;
          border-color: rgba(0, 100, 60, 0.12);
        }
        [data-h-theme="light"] .seller-head h3 {
          color: #10201b;
        }
        [data-h-theme="light"] .seller-head p {
          color: #4f6b65;
        }
        [data-h-theme="light"] .sllers-list ul li {
          color: #2d453f;
          background: #F5f5f7;
          border-color: rgba(0, 100, 60, 0.12);
        }
        [data-h-theme="light"] .sllers-list ul li:hover {
          border-color: rgba(0, 166, 103, 0.4);
        }
        [data-h-theme="light"] .sllers-list ul li span {
          color: #00a667;
        }
        [data-h-theme="light"] .sllers-list .btn-primary,
        [data-h-theme="light"] .sllers-list .btn-primary:hover {
          color: #fff;
        }

        /* How It Works / Why Choose Section */
        [data-h-theme="light"] .why-choose-sec {
          background: #eef4f1;
          border-top-color: rgba(0, 100, 60, 0.1);
          border-bottom-color: rgba(0, 100, 60, 0.1);
        }
        [data-h-theme="light"] .about-us-header h2 {
          color: #10201b;
        }
        [data-h-theme="light"] .about-us-header p {
          color: #6f8a85;
        }
        [data-h-theme="light"] .why-choose-sec .nav-tabs {
          border-bottom-color: rgba(0, 100, 60, 0.1);
        }
        [data-h-theme="light"] .why-choose-sec .nav-tabs .nav-link {
          color: #6f8a85;
        }
        [data-h-theme="light"] .why-choose-sec .nav-tabs .nav-link:hover {
          color: #00a667;
          background: rgba(0, 166, 103, 0.06);
        }
        [data-h-theme="light"] .why-choose-sec .nav-tabs .nav-link.active {
          background: rgba(0, 166, 103, 0.08);
          border-color: rgba(0, 100, 60, 0.12) rgba(0, 100, 60, 0.12) transparent;
          color: #00a667;
        }
        [data-h-theme="light"] .why-choose-card {
          background: #F5f5f7;
          border-color: rgba(0, 100, 60, 0.12);
        }
        [data-h-theme="light"] .why-choose-card:hover {
          border-color: rgba(0, 166, 103, 0.45);
        }
        [data-h-theme="light"] .why-choose-card .card-icon {
          background: rgba(0, 166, 103, 0.08);
          border-color: rgba(0, 166, 103, 0.25);
        }
        [data-h-theme="light"] .why-choose-card .card-icon img {
          filter: invert(38%) sepia(90%) saturate(900%) hue-rotate(115deg) brightness(90%);
        }
        [data-h-theme="light"] .why-choose-card h4 {
          color: #10201b;
        }
        [data-h-theme="light"] .why-choose-card p {
          color: #6f8a85;
        }

        /* Testimonials */
        [data-h-theme="light"] .client-review-sec {
          background: #f6faf8;
        }
        [data-h-theme="light"] .client-review-sec .about-us-header h2 {
          color: #10201b;
        }
        [data-h-theme="light"] .review-card {
          background: #F5f5f7;
          border-color: rgba(0, 100, 60, 0.12);
        }
        [data-h-theme="light"] .review-card:hover {
          border-color: rgba(0, 166, 103, 0.4);
        }
        [data-h-theme="light"] .quotation-icon img {
          filter: invert(38%) sepia(90%) saturate(900%) hue-rotate(115deg) brightness(90%);
        }
        [data-h-theme="light"] .review-card h4 {
          color: #10201b;
        }
        [data-h-theme="light"] .review-card > p {
          color: #4f6b65;
        }
        [data-h-theme="light"] .star-rate i {
          color: #d8e5e0;
        }
        [data-h-theme="light"] .review-user {
          border-top-color: rgba(0, 100, 60, 0.1);
        }
        [data-h-theme="light"] .review-user h6,
        [data-h-theme="light"] .review-user h6 a {
          color: #2d453f;
        }
        [data-h-theme="light"] .review-user h6 a:hover {
          color: #00a667;
        }
        [data-h-theme="light"] .review-user h6 span {
          color: #7d9791;
        }
        [data-h-theme="light"] .review-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 100, 60, 0.12);
        }
        [data-h-theme="light"] .review-scroll {
          scrollbar-color: rgba(0, 100, 60, 0.12) transparent;
        }

        /* CTA Section */
        [data-h-theme="light"] .cta-section {
          background: #f6faf8;
        }
        [data-h-theme="light"] .cta-wrap {
          background: linear-gradient(135deg, #eaf7f1 0%, #F5f5f7 60%, #eaf3f6 100%);
          border-color: rgba(0, 166, 103, 0.22);
        }
        [data-h-theme="light"] .cta-info .badge {
          background: rgba(0, 166, 103, 0.1);
          color: #00a667;
          border-color: rgba(0, 166, 103, 0.28);
        }
        [data-h-theme="light"] .cta-info h3 {
          color: #10201b;
        }
        [data-h-theme="light"] .cta-btn .btn-primary,
        [data-h-theme="light"] .cta-btn .btn-primary:hover {
          color: #fff;
        }
        [data-h-theme="light"] .cta-bg1,
        [data-h-theme="light"] .cta-bg2 {
          opacity: 0.03;
        }

        /* Empty state */
        [data-h-theme="light"] .text-muted {
          color: #6f8a85 !important;
        }
      `}),e.jsx("section",{className:"fc-how",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"fc-section-head text-center",style:{maxWidth:600,margin:"0 auto 48px"},children:[e.jsx("span",{className:"eyebrow",children:"How It Works"}),e.jsx("h2",{children:"Get Started in 3 Simple Steps"})]}),e.jsxs("div",{className:"steps-grid",children:[e.jsxs("div",{className:"step-card",children:[e.jsx("span",{className:"step-num",children:"01"}),e.jsx("h5",{children:"Create Your Profile"}),e.jsx("p",{children:"Sign up and showcase your story, skills, and aspirations through text, images, and video."}),e.jsxs(t,{href:route("user.register_skills"),className:"strip-link",children:["Get Started ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("span",{className:"step-num",children:"02"}),e.jsx("h5",{children:"Get Discovered & Rated"}),e.jsx("p",{children:"Employers browse skills by category, rate your profile, and share feedback to help you grow."}),e.jsxs(t,{href:route("user.talents"),className:"strip-link",children:["Explore Skills ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("span",{className:"step-num",children:"03"}),e.jsx("h5",{children:"Grow with the Community"}),e.jsx("p",{children:"Connect, collaborate, and access learning resources. Shop or sell tools from local creators."}),e.jsxs(t,{href:route("talent.connections-room"),className:"strip-link",children:["Connection Room",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})]})}),e.jsx("div",{className:"fc-feature-strip",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"feature-strip-grid",children:[e.jsxs("div",{className:"feature-strip-item",children:[e.jsx("div",{className:"strip-icon",children:e.jsx("i",{className:"ti ti-rocket"})}),e.jsx("h5",{children:"Skills Marketplace"}),e.jsx("p",{children:"Stand out and reach 3× more employers. Boost your profile, get verified, and feature your story."}),e.jsxs(t,{href:route("user.talents"),className:"strip-link",children:["Find Skills ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"feature-strip-item",children:[e.jsx("div",{className:"strip-icon",children:e.jsx("i",{className:"ti ti-briefcase"})}),e.jsx("h5",{children:"Unlock Opportunities"}),e.jsx("p",{children:"Discover tailored job listings, collaboration projects, and freelance gigs matched to your skills."}),e.jsxs(t,{href:route("user.jobs.index"),className:"strip-link",children:["Start Exploring ",e.jsx("i",{className:"ti ti-arrow-right"})]})]}),e.jsxs("div",{className:"feature-strip-item",children:[e.jsx("div",{className:"strip-icon",children:e.jsx("i",{className:"ti ti-users"})}),e.jsx("h5",{children:"Expand Your Network"}),e.jsx("p",{children:"Connect with professionals, mentors, and peers. Join groups and build relationships that matter."}),e.jsxs(t,{href:route("talent.connections-room"),className:"strip-link",children:["Skill Connect",e.jsx("i",{className:"ti ti-arrow-right"})]})]})]})})}),e.jsx("section",{className:"why-choose-sec",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"about-us-header",children:[e.jsx("h2",{children:"How it Works"}),e.jsx("p",{children:"Connecting skills, clients, and opportunities for growth and success."})]}),e.jsxs("ul",{className:"nav nav-tabs justify-content-center mb-4",id:"howItWorksTab",role:"tablist",children:[e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link active",id:"talent-tab","data-bs-toggle":"tab","data-bs-target":"#talent",type:"button",role:"tab","aria-controls":"talent","aria-selected":"true",children:"Skills"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link",id:"client-tab","data-bs-toggle":"tab","data-bs-target":"#client",type:"button",role:"tab","aria-controls":"client","aria-selected":"false",children:"Client / Employer"})})]}),e.jsxs("div",{className:"tab-content",id:"howItWorksTabContent",children:[e.jsx("div",{className:"tab-pane fade show active",id:"talent",role:"tabpanel","aria-labelledby":"talent-tab",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"why-choose-card",children:[e.jsx("div",{className:"card-icon",children:e.jsx("img",{src:"/assets/img/icons/why-choose-icon-01.svg",alt:""})}),e.jsx("h4",{children:"Sign Up & Build Profile"}),e.jsx("p",{children:"Create your profile, showcase your skills, experience, and portfolio."})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"why-choose-card",children:[e.jsx("div",{className:"card-icon",children:e.jsx("img",{src:"/assets/img/icons/why-choose-icon-02.svg",alt:""})}),e.jsx("h4",{children:"Find Opportunities"}),e.jsx("p",{children:"Browse projects, apply, or get invited by clients based on your expertise."})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"why-choose-card",children:[e.jsx("div",{className:"card-icon",children:e.jsx("img",{src:"/assets/img/icons/why-choose-icon-03.svg",alt:""})}),e.jsx("h4",{children:"Work & Grow"}),e.jsx("p",{children:"Complete work, get paid securely, and build your reputation with ratings."})]})})]})}),e.jsx("div",{className:"tab-pane fade",id:"client",role:"tabpanel","aria-labelledby":"client-tab",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"why-choose-card",children:[e.jsx("div",{className:"card-icon",children:e.jsx("img",{src:"/assets/img/icons/why-choose-icon-01.svg",alt:""})}),e.jsx("h4",{children:"Post a Project"}),e.jsx("p",{children:"Share your project details and connect with suitable skills."})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"why-choose-card",children:[e.jsx("div",{className:"card-icon",children:e.jsx("img",{src:"/assets/img/icons/why-choose-icon-02.svg",alt:""})}),e.jsx("h4",{children:"Hire the Best"}),e.jsx("p",{children:"Search and review skills profiles to select the right candidate."})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"why-choose-card",children:[e.jsx("div",{className:"card-icon",children:e.jsx("img",{src:"/assets/img/icons/why-choose-icon-03.svg",alt:""})}),e.jsx("h4",{children:"Manage & Pay Securely"}),e.jsx("p",{children:"Track progress, communicate, and pay safely when work is delivered."})]})})]})})]})]})}),e.jsx("section",{className:"client-review-sec",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"about-us-header",children:[e.jsx("h2",{children:"What Our Clients Say"}),e.jsx("p",{children:"Hear what our clients have to say — testimonials that showcase our commitment to excellence."})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:a.length>0?e.jsx("div",{className:"review-scroll",children:a.map(r=>e.jsx("div",{className:"review-scroll-item",children:e.jsxs("div",{className:"review-card",children:[e.jsx("span",{className:"quotation-icon",children:e.jsx("img",{src:"/assets/img/icons/quotation-icon.svg",alt:""})}),e.jsx("h4",{children:r.title}),e.jsxs("p",{children:['"',s(r.excerpt,80),'"']}),e.jsx("div",{className:"star-rate",children:e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-star filled"}),e.jsx("i",{className:"fa-solid fa-star filled"}),e.jsx("i",{className:"fa-solid fa-star filled"}),e.jsx("i",{className:"fa-solid fa-star filled"}),e.jsx("i",{className:"fa-solid fa-star filled"})]})}),e.jsxs("div",{className:"review-user",children:[e.jsx("a",{href:"javascript:void(0);",children:e.jsx("img",{src:r.thumbnail_url,alt:r.author_name})}),e.jsxs("h6",{children:[e.jsx("a",{href:"javascript:void(0);",children:r.author_name}),e.jsx("span",{children:r.role})]})]})]})},r.id))}):e.jsx("p",{className:"text-muted text-center w-100",children:"No success stories yet. Check back soon!"})})})]})}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"cta-section",children:e.jsxs("div",{className:"cta-wrap",children:[e.jsxs("div",{className:"row gx-0 align-items-center",children:[e.jsx("div",{className:"col-md-8",children:e.jsxs("div",{className:"cta-info",children:[e.jsx("span",{className:"badge",children:"Ready to Get Started?"}),e.jsx("h3",{children:"Join Future Connect today and unlock your potential."})]})}),e.jsx("div",{className:"col-md-4 text-md-end",children:e.jsx("div",{className:"cta-btn",children:e.jsxs(t,{href:route("user.register_skills"),className:"btn btn-primary btn-lg",children:["Register your Skills ",e.jsx("i",{className:"ti ti-arrow-badge-right"})]})})})]}),e.jsxs("div",{className:"cta-bg",children:[e.jsx("div",{className:"cta-bg1",children:e.jsx("img",{src:"/assets/img/bg/contact-bg-01.png",alt:""})}),e.jsx("div",{className:"cta-bg2",children:e.jsx("img",{src:"/assets/img/bg/contact-bg-02.png",alt:""})})]})]})})})]})}n.layout=a=>e.jsx(i,{children:a,title:"How It Works | Future Connect"});export{n as default};
