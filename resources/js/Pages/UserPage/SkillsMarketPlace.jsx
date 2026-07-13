import React, { useState } from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function SkillsMarketPlace({ categories = [] }) {
  const [openFaqId, setOpenFaqId] = useState(null);
  const [step, setStep] = useState(0);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  const [search, setSearch] = useState({ keyword: '', category: '' });

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    address: '',
    phone: '',
    email: '',
    language: '',
    category_id: '',
    description: '',
    image: null,
  });

  const stepCount = 4;

  function toggleFaq(id) {
    setOpenFaqId((current) => (current === id ? null : id));
  }

  function goNext() {
    setStep((s) => Math.min(s + 1, stepCount - 1));
  }

  function goPrev() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    router.get(route('user.talents'), search);
    setSearchModalOpen(false);
  }

  function handleTalentSubmit(e) {
    e.preventDefault();
    post(route('talent.register'), {
      forceFormData: true,
      onSuccess: () => {
        reset();
        setStep(0);
        setTalentModalOpen(false);
      },
    });
  }

  return (
    <>
      <Head title="Skilled Marketplace – Discover Skilled Professionals" />

      {/* SwiperJS + fonts */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
          --bg:        #0e1618;
          --bg2:       #131d20;
          --bg3:       #18242a;
          --border:    rgba(255,255,255,0.07);
          --green:     #48d597;
          --green-dim: rgba(0,166,103,0.15);
          --green-glow:rgba(0,166,103,0.35);
          --text:      #e8eef0;
          --muted:     #7a9199;
          --white:     #ffffff;
          --font-head: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
          --radius:    12px;
          --radius-lg: 20px;
          --transition:.25s ease;
        }

        *, *::before, *::after { box-sizing: border-box; }

        body {
          background: var(--bg);
          font-family: var(--font-body);
          color: var(--text);
        }

        /* ─── HERO ─── */
        #hero-section {
          position: relative;
          background: var(--bg);
          padding: 80px 0 60px;
          overflow: hidden;
        }

        #hero-section::before {
          content: '';
          position: absolute;
          top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(0,166,103,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green-dim);
          border: 1px solid rgba(0,166,103,0.3);
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 500;
          color: var(--green);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-eyebrow span {
          width: 6px; height: 6px;
          background: var(--green);
          border-radius: 50%;
          display: inline-block;
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(1.5); }
        }

        .hero-headline {
          font-family: var(--font-head);
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.1;
          color: var(--white);
          margin-bottom: 18px;
          letter-spacing: -0.03em;
        }

        .hero-headline .accent {
          color: var(--green);
          position: relative;
          display: inline-block;
        }

        .hero-headline .accent::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--green), transparent);
          border-radius: 2px;
        }

        .hero-sub {
          font-size: 1.05rem;
          color: var(--muted);
          max-width: 480px;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        /* ─── BUTTONS ─── */
        .btn-green {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green);
          color: #fff;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 12px 24px;
          border-radius: var(--radius);
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition);
          box-shadow: 0 0 0 0 var(--green-glow);
        }

        .btn-green:hover {
          background: #00bf76;
          color: #fff;
          box-shadow: 0 0 20px var(--green-glow);
          transform: translateY(-2px);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--text);
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.9rem;
          padding: 12px 24px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition);
        }

        .btn-outline:hover {
          border-color: var(--green);
          color: var(--green);
          background: var(--green-dim);
          transform: translateY(-2px);
        }

        /* ─── HERO CARDS ─── */
        .hero-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .hero-card {
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
          position: relative;
          overflow: hidden;
          transition: var(--transition);
        }

        .hero-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--green), transparent);
          opacity: 0;
          transition: opacity var(--transition);
        }

        .hero-card:hover {
          border-color: rgba(0,166,103,0.3);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }

        .hero-card:hover::before { opacity: 1; }

        .hero-card-icon {
          width: 42px; height: 42px;
          background: var(--green-dim);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
          color: var(--green);
          font-size: 18px;
        }

        .hero-card h5 {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 6px;
        }

        .hero-card p {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.6;
          margin: 0 0 16px;
        }

        .hero-card .card-link {
          font-size: 0.83rem;
          color: var(--green);
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap var(--transition);
        }

        .hero-card .card-link:hover { gap: 10px; }

        /* ─── STATS BAR ─── */
        .stats-bar {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 24px 0;
        }

        .stat-item {
          text-align: center;
          padding: 0 20px;
          border-right: 1px solid var(--border);
        }

        .stat-item:last-child { border-right: none; }

        .stat-num {
          font-family: var(--font-head);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--green);
          display: block;
        }

        .stat-label {
          font-size: 0.78rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ─── SECTION COMMON ─── */
        .section-label {
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

        .section-label::before {
          content: '';
          display: inline-block;
          width: 20px; height: 2px;
          background: var(--green);
          border-radius: 1px;
        }

        .section-title {
          font-family: var(--font-head);
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .section-sub {
          color: var(--muted);
          font-size: 0.95rem;
          max-width: 500px;
        }

        /* ─── CATEGORIES ─── */
        #categories-section {
          padding: 80px 0;
          background: var(--bg);
        }

        .cat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 14px;
          margin-top: 40px;
        }

        .cat-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 18px;
          text-decoration: none;
          display: block;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .cat-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0;
          background: var(--green-dim);
          transition: height var(--transition);
        }

        .cat-card:hover {
          border-color: rgba(0,166,103,0.4);
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }

        .cat-card:hover::after { height: 100%; }

        .cat-card:hover .cat-icon { background: var(--green); color: #fff; }
        .cat-card:hover .cat-name { color: var(--green); }

        .cat-icon {
          width: 36px; height: 36px;
          background: var(--green-dim);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: var(--green);
          font-size: 15px;
          margin-bottom: 12px;
          position: relative; z-index: 1;
          transition: var(--transition);
        }

        .cat-name {
          font-family: var(--font-head);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 4px;
          position: relative; z-index: 1;
          transition: var(--transition);
        }

        .cat-count {
          font-size: 0.75rem;
          color: var(--muted);
          position: relative; z-index: 1;
        }

        /* ─── CTA BAND ─── */
        #cta-band {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        #cta-band::before {
          content: '';
          position: absolute;
          left: -100px; top: 50%;
          transform: translateY(-50%);
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0,166,103,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-number {
          font-family: var(--font-head);
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          color: var(--green);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .cta-plus { color: var(--muted); }

        /* ─── FAQ ─── */
        #faq-section {
          padding: 80px 0;
          background: var(--bg);
        }

        .faq-item {
          border: 1px solid var(--border);
          border-radius: var(--radius);
          margin-bottom: 10px;
          overflow: hidden;
          transition: var(--transition);
        }

        .faq-item:hover { border-color: rgba(0,166,103,0.3); }
        .faq-item.open  { border-color: rgba(0,166,103,0.4); }

        .faq-q {
          width: 100%;
          background: var(--bg2);
          border: none;
          padding: 18px 22px;
          text-align: left;
          color: var(--text);
          font-family: var(--font-body);
          font-size: 0.92rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: var(--transition);
        }

        .faq-q:hover { color: var(--white); }

        .faq-icon {
          flex-shrink: 0;
          width: 22px; height: 22px;
          background: var(--green-dim);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--green);
          font-size: 12px;
          transition: transform var(--transition);
        }

        .faq-item.open .faq-icon { transform: rotate(45deg); background: var(--green); color: #fff; }

        .faq-a {
          background: var(--bg3);
          padding: 0 22px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.25s ease;
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.7;
        }

        .faq-item.open .faq-a { max-height: 200px; padding: 16px 22px; }

        /* ─── MODALS ─── */
        .modal-content {
          background: var(--bg2) !important;
          border: 1px solid var(--border) !important;
          border-radius: var(--radius-lg) !important;
        }

        .modal-header {
          background: var(--bg3);
          border-bottom: 1px solid var(--border);
          padding: 20px 28px;
        }

        .modal-title {
          font-family: var(--font-head);
          color: var(--white);
        }

        .modal-body { padding: 28px; }

        /* Form controls */
        .form-control, .form-select {
          background: var(--bg3) !important;
          border: 1px solid var(--border) !important;
          color: var(--text) !important;
          border-radius: var(--radius) !important;
          padding: 11px 16px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: border-color var(--transition);
        }

        .form-control::placeholder { color: var(--muted); }

        .form-control:focus, .form-select:focus {
          border-color: var(--green) !important;
          box-shadow: 0 0 0 3px var(--green-dim) !important;
          outline: none;
        }

        .form-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 6px;
        }

        /* Step wizard */
        .step-indicator {
          display: flex;
          align-items: center;
          gap: 0;
          margin-bottom: 28px;
        }

        .step-dot {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: var(--bg3);
          border: 2px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: var(--muted);
          flex-shrink: 0;
          transition: var(--transition);
        }

        .step-dot.active {
          background: var(--green);
          border-color: var(--green);
          color: #fff;
          box-shadow: 0 0 12px var(--green-glow);
        }

        .step-dot.done {
          background: var(--green-dim);
          border-color: var(--green);
          color: var(--green);
        }

        .step-line {
          flex: 1;
          height: 2px;
          background: var(--border);
          transition: background var(--transition);
        }

        .step-line.done { background: var(--green); }

        .step-section { display: none; }
        .step-section.active {
          display: block;
          animation: fadeUp .3s ease;
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .step-title {
          font-family: var(--font-head);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 4px;
        }

        .step-sub {
          font-size: 0.83rem;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .info-note {
          background: var(--green-dim);
          border-left: 3px solid var(--green);
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.83rem;
          color: var(--green);
          margin-bottom: 20px;
        }

        /* Carousel (mobile) */
        .m-hero-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px 24px;
          text-align: center;
        }

        .m-hero-card h4 {
          font-family: var(--font-head);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 10px;
        }

        .m-hero-card p {
          color: var(--muted);
          font-size: 0.9rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .carousel-indicators [data-bs-target] {
          background-color: var(--green);
          border-radius: 2px;
          width: 18px; height: 3px;
          border: none;
          opacity: 0.4;
          transition: opacity var(--transition), width var(--transition);
        }

        .carousel-indicators .active {
          opacity: 1;
          width: 28px;
        }

        /* mobile category strip */
        .cat-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: none;
        }
        .cat-scroll::-webkit-scrollbar { display: none; }

        .cat-chip {
          flex-shrink: 0;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 50px;
          padding: 8px 16px;
          font-size: 0.8rem;
          color: var(--text);
          text-decoration: none;
          white-space: nowrap;
          transition: var(--transition);
        }

        .cat-chip:hover {
          border-color: var(--green);
          color: var(--green);
        }

        /* Popular Section */
        .pop-category {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 22px 18px;
          text-align: center;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .pop-category::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0;
          background: var(--green-dim);
          transition: height var(--transition);
          z-index: 0;
        }

        .pop-category:hover {
          border-color: rgba(0,166,103,0.4);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .pop-category:hover::before { height: 100%; }

        .pop-category * { position: relative; z-index: 1; }

        .pop-category span {
          width: 44px; height: 44px;
          background: var(--green-dim);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 14px;
          color: var(--green);
          font-size: 18px;
          transition: var(--transition);
        }

        .pop-category:hover span { background: var(--green); color: #fff; }

        .pop-category h6 a {
          font-family: var(--font-head);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--white);
          text-decoration: none;
          transition: var(--transition);
        }

        .pop-category:hover h6 a { color: var(--green); }

        .pop-category p {
          font-size: 0.75rem;
          color: var(--muted);
          margin: 4px 0 12px;
        }

        .slide-line-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--green);
          text-decoration: none;
          font-weight: 600;
          transition: gap var(--transition);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .slide-line-btn:hover { gap: 10px; color: var(--green); }

        /* ─── DIVIDER ─── */
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
          margin: 0;
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

        [data-h-theme="light"] #hero-section::before {
          background: radial-gradient(circle, rgba(0,166,103,0.08) 0%, transparent 70%);
        }

        [data-h-theme="light"] #cta-band::before {
          background: radial-gradient(circle, rgba(0,166,103,0.06) 0%, transparent 70%);
        }

        [data-h-theme="light"] .btn-close-white {
          filter: none;
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section id="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left */}
            <div className="col-lg-6">
              <div className="hero-eyebrow">
                <span></span> Africa&apos;s Top Skills Marketplace
              </div>
              <h1 className="hero-headline">
                Your gateway to <span className="accent">skills</span>, opportunities &amp; growth.
              </h1>
              <p className="hero-sub">
                Connect with verified professionals, showcase your expertise, and build the career you deserve — all in one platform.
              </p>
              <div className="hero-cta-group">
                <a
                  className="btn-green"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                  onClick={() => setSearchModalOpen(true)}
                >
                  <i className="ti ti-search"></i> Find Skills
                </a>
                <Link className="btn-outline" href={route('user.register_skills')}>
                  <i className="ti ti-star"></i> Register your Skills
                </Link>
                <Link className="btn-outline" href={route('talent.connections-room')}>
                  <i className="ti ti-users"></i> Connection Room
                </Link>
              </div>
            </div>

            {/* Right — 3 feature cards (desktop) */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-cards">
                <div className="hero-card">
                  <div className="hero-card-icon"><i className="ti ti-speakerphone"></i></div>
                  <h5>Promote Your Skills</h5>
                  <p>Boost your profile and reach 3× more employers. Get verified and feature your story on our homepage.</p>
                  <a
                    className="card-link"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                    onClick={() => setSearchModalOpen(true)}
                  >
                    Search skilled people <i className="ti ti-arrow-right"></i>
                  </a>
                </div>

                <div className="row g-4">
                  <div className="col-6">
                    <div className="hero-card">
                      <div className="hero-card-icon"><i className="ti ti-badge"></i></div>
                      <h5>Join Our Skill Hub</h5>
                      <p>Showcase skills, get verified, and connect with global clients.</p>
                      <Link className="card-link" href={route('user.register_skills')}>
                        Register now <i className="ti ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="hero-card">
                      <div className="hero-card-icon"><i className="ti ti-world"></i></div>
                      <h5>Expand Network</h5>
                      <p>Join groups, attend virtual events, and build connections that matter.</p>
                      <Link className="card-link" href={route('talent.connections-room')}>
                        Connection Room <i className="ti ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile carousel */}
            <div className="col-12 d-lg-none">
              <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4500">
                <div className="carousel-indicators" style={{ bottom: '-30px' }}>
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="m-hero-card">
                      <div className="hero-card-icon mx-auto mb-3"><i className="ti ti-speakerphone"></i></div>
                      <h4>Promote Your Skills</h4>
                      <p>Stand out! Boost your profile and reach 3× more employers. Get verified today.</p>
                      <a
                        className="btn-green mx-auto"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal"
                        onClick={() => setSearchModalOpen(true)}
                      >
                        <i className="ti ti-search"></i> Search Talent
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="m-hero-card">
                      <div className="hero-card-icon mx-auto mb-3"><i className="ti ti-badge"></i></div>
                      <h4>Join Our Skill Hub</h4>
                      <p>Showcase your skills, get verified, and connect with clients globally.</p>
                      <Link className="btn-green mx-auto" href={route('user.register_skills')}>Register Skills</Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="m-hero-card">
                      <div className="hero-card-icon mx-auto mb-3"><i className="ti ti-world"></i></div>
                      <h4>Expand Your Network</h4>
                      <p>Connect with industry professionals, mentors, and peers across Africa.</p>
                      <Link className="btn-green mx-auto" href={route('register')}>Join Community</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: '36px' }}></div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <div className="stats-bar">
        <div className="container">
          <div className="row g-0">
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-num">74K<span style={{ color: 'var(--green)' }}>+</span></span>
                <span className="stat-label">Skilled People</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-num">120<span style={{ color: 'var(--green)' }}>+</span></span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-num">98<span style={{ color: 'var(--green)' }}>%</span></span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-num">30+</span>
                <span className="stat-label">Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* ═══ CATEGORIES (Mobile scroll) ═══ */}
      <div className="container d-lg-none py-5">
        <div className="mb-3">
          <div className="section-label">Browse</div>
          <div className="section-title">Trending Categories</div>
        </div>
        <div className="cat-scroll">
          {categories.map((cat) => (
            <Link key={cat.id} href={route('user.talents.category', cat.slug)} className="cat-chip">
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* ═══ CATEGORIES (Desktop grid) ═══ */}
      <section id="categories-section" className="d-none d-lg-block">
        <div className="container">
          <div className="d-flex align-items-end justify-content-between mb-8 flex-wrap gap-3">
            <div>
              <div className="section-label">Explore</div>
              <div className="section-title">Trending Categories of Skilled People</div>
              <p className="section-sub">Discover inspiring stories, impactful skills, and creative people across Africa</p>
            </div>
          </div>

          <div className="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mt-4">
            {categories.map((cat) => (
              <div className="col d-flex" key={cat.id}>
                <div className="pop-category flex-fill">
                  <span><i className="ti ti-speakerphone"></i></span>
                  <h6 className="mb-1">
                    <Link href={route('user.talents.category', cat.slug)}>{cat.name}</Link>
                  </h6>
                  <p>{cat.talents_count ?? 0} skills</p>
                  <Link href={route('user.talents.category', cat.slug)} className="slide-line-btn">
                    <i className="feather-arrow-right"></i> View Skills
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ═══ CTA BAND ═══ */}
      <section id="cta-band">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-8">
              <div className="section-label">Join Today</div>
              <div className="section-title">Want to Showcase Your Skills?</div>
              <p className="section-sub mt-2">
                Over 74K skilled people on the platform, available today for employers and clients. Join our community and take the first step towards your dream career.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <Link
                role="button"
                href={route('user.register_skills')}
                className="btn-green"
                style={{ fontSize: '1rem', padding: '14px 32px' }}
              >
                Register Your Skills <i className="ti ti-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ═══ FAQ ═══ */}
      <section id="faq-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="section-label">FAQ</div>
              <div className="section-title">Skilled People Frequently Asked Questions</div>
              <p className="section-sub mt-3">
                Don&apos;t see your question? We&apos;re here to help you connect with the right skilled people.
              </p>
              <Link href={route('user.contact')} className="btn-green mt-4 d-inline-flex">
                Ask a Question <i className="ti ti-arrow-badge-right ms-1"></i>
              </Link>
            </div>

            <div className="col-lg-8">
              {FAQ_ITEMS.map((item) => (
                <div className={`faq-item${openFaqId === item.id ? ' open' : ''}`} id={item.id} key={item.id}>
                  <button className="faq-q" onClick={() => toggleFaq(item.id)}>
                    {item.question}
                    <span className="faq-icon"><i className="ti ti-plus"></i></span>
                  </button>
                  <div className="faq-a">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SEARCH MODAL ═══ */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="searchModalLabel">
                <i className="ti ti-search me-2" style={{ color: 'var(--green)' }}></i>Find Your Skills
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                onClick={() => setSearchModalOpen(false)}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSearchSubmit} className="row g-4">
                <div className="col-md-6">
                  <label className="form-label">Keyword</label>
                  <input
                    type="text"
                    name="keyword"
                    className="form-control"
                    placeholder="Search talents, skills, or names..."
                    value={search.keyword}
                    onChange={(e) => setSearch((s) => ({ ...s, keyword: e.target.value }))}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Category</label>
                  <select
                    name="category"
                    className="form-select"
                    value={search.category}
                    onChange={(e) => setSearch((s) => ({ ...s, category: e.target.value }))}
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option value={cat.id} key={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12 d-flex justify-content-end gap-3">
                  <button
                    type="button"
                    className="btn-outline"
                    data-bs-dismiss="modal"
                    onClick={() => setSearchModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-green">
                    <i className="ti ti-search"></i> Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TALENT REGISTRATION MODAL ═══ */}
      <div className="modal fade" id="talentModal" tabIndex="-1" aria-labelledby="talentModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="talentModalLabel">Skill Registration</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                onClick={() => setTalentModalOpen(false)}
              ></button>
            </div>
            <div className="modal-body">

              {/* Step indicator */}
              <div className="step-indicator">
                {Array.from({ length: stepCount }).map((_, i) => (
                  <React.Fragment key={i}>
                    <div className={`step-dot${step === i ? ' active' : ''}${step > i ? ' done' : ''}`}>
                      {i + 1}
                    </div>
                    {i < stepCount - 1 && (
                      <div className={`step-line${step > i ? ' done' : ''}`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <form onSubmit={handleTalentSubmit}>
                {/* Step 1 */}
                <div className={`step-section${step === 0 ? ' active' : ''}`}>
                  <div className="step-title">Personal Info</div>
                  <div className="step-sub">Fill your basic information for profile setup.</div>
                  <div className="info-note">This information will appear on your public profile.</div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. John Doe"
                        required
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                      />
                      {errors.name && <div className="text-danger small mt-1">{errors.name}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Kigali, Rwanda"
                        required
                        value={data.address}
                        onChange={(e) => setData('address', e.target.value)}
                      />
                      {errors.address && <div className="text-danger small mt-1">{errors.address}</div>}
                    </div>
                  </div>
                  <div className="text-end mt-4">
                    <button type="button" className="btn-green" onClick={goNext}>
                      Next <i className="ti ti-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`step-section${step === 1 ? ' active' : ''}`}>
                  <div className="step-title">Contact Info</div>
                  <div className="step-sub">Provide your contact details for clients to reach you.</div>
                  <div className="info-note">Your email will not be shared publicly.</div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. +250 788 123 456"
                        required
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                      />
                      {errors.phone && <div className="text-danger small mt-1">{errors.phone}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="e.g. john@example.com"
                        required
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                      />
                      {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-4">
                    <button type="button" className="btn-outline" onClick={goPrev}>
                      <i className="ti ti-arrow-left me-1"></i> Back
                    </button>
                    <button type="button" className="btn-green" onClick={goNext}>
                      Next <i className="ti ti-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`step-section${step === 2 ? ' active' : ''}`}>
                  <div className="step-title">Skill Info</div>
                  <div className="step-sub">Define your skills and expertise to attract the right clients.</div>
                  <div className="info-note">Be specific — detailed descriptions get 2× more views.</div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Languages Spoken</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. English, Kinyarwanda"
                        required
                        value={data.language}
                        onChange={(e) => setData('language', e.target.value)}
                      />
                      {errors.language && <div className="text-danger small mt-1">{errors.language}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Skill Category</label>
                      <select
                        className="form-select"
                        required
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option value={cat.id} key={cat.id}>{cat.name}</option>
                        ))}
                      </select>
                      {errors.category_id && <div className="text-danger small mt-1">{errors.category_id}</div>}
                    </div>
                    <div className="col-12">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Describe your talent and experience..."
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                      ></textarea>
                      {errors.description && <div className="text-danger small mt-1">{errors.description}</div>}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-4">
                    <button type="button" className="btn-outline" onClick={goPrev}>
                      <i className="ti ti-arrow-left me-1"></i> Back
                    </button>
                    <button type="button" className="btn-green" onClick={goNext}>
                      Next <i className="ti ti-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>

                {/* Step 4 */}
                <div className={`step-section${step === 3 ? ' active' : ''}`}>
                  <div className="step-title">Profile Photo</div>
                  <div className="step-sub">Add a professional photo to complete your profile.</div>
                  <div className="info-note">A clear headshot increases profile views by 40%.</div>
                  <div className="mb-3">
                    <label className="form-label">Profile Image</label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      required
                      onChange={(e) => setData('image', e.target.files[0])}
                    />
                    {errors.image && <div className="text-danger small mt-1">{errors.image}</div>}
                  </div>
                  <div className="form-check mt-3 mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terms"
                      required
                      style={{ accentColor: 'var(--green)' }}
                    />
                    <label className="form-check-label" htmlFor="terms" style={{ fontSize: '.88rem', color: 'var(--muted)' }}>
                      I accept the <Link href={route('user.terms-condition')} style={{ color: 'var(--green)' }}>Terms &amp; Conditions</Link>
                    </label>
                  </div>
                  <div className="d-flex justify-content-between mt-4">
                    <button type="button" className="btn-outline" onClick={goPrev}>
                      <i className="ti ti-arrow-left me-1"></i> Back
                    </button>
                    <button type="submit" className="btn-green" style={{ background: '#48d597' }} disabled={processing}>
                      <i className="ti ti-check me-1"></i> Submit Registration
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How can I find the right skilled people for my project?',
    answer:
      'Our Skilled People Marketplace lets you filter professionals by skills, categories, experience, and location — making it easy to find the perfect match for your project.',
  },
  {
    id: 'faq-2',
    question: 'How do I hire a skilled person?',
    answer:
      'After browsing profiles, you can contact skilled people directly through the platform or request a proposal. Our messaging system ensures smooth communication and collaboration.',
  },
  {
    id: 'faq-3',
    question: 'Can skilled people showcase their past projects?',
    answer:
      'Yes! Skilled people can upload portfolios, project samples, and certifications to highlight their skills and achievements, helping you make informed hiring decisions.',
  },
  {
    id: 'faq-4',
    question: 'Is there a verification process for talents?',
    answer:
      'We verify all registered talents to ensure authenticity. Verified talents are marked with a badge on their profiles, giving you full confidence in your collaboration.',
  },
  {
    id: 'faq-5',
    question: 'How much does it cost to hire a talent?',
    answer:
      "Costs vary depending on the talent's experience, skills, and project scope. The platform provides transparent pricing or allows you to negotiate directly with the talent.",
  },
];

SkillsMarketPlace.layout = (page) => <GuestLayout children={page} title="Skills Marketplace" description="Discover skilled people across Africa, showcase your expertise, and connect with opportunities in our Skills Marketplace." />;