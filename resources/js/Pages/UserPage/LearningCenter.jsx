import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';


const DEFAULT_STORIES = [
  {
    id: 'story-1',
    name: 'Aline U.',
    role: 'Graphic Designer → UI/UX Instructor',
    avatar: '/assets/img/user/profile.jpg',
    quote:
      "I listed my design skills, then took two courses on the platform to sharpen my UI/UX process. Six months later I was teaching my own course to 400+ learners.",
    stat: '400+ students taught',
  },
  {
    id: 'story-2',
    name: 'Eric N.',
    role: 'Self-taught Developer',
    avatar: '/assets/img/user/profile.jpg',
    quote:
      "I had no formal training — just a laptop and curiosity. The free coding courses here got me from zero to my first freelance contract in four months.",
    stat: 'First client in 4 months',
  },
  {
    id: 'story-3',
    name: 'Grace M.',
    role: 'Tailor & Business Coach',
    avatar: '/assets/img/user/profile.jpg',
    quote:
      "My tailoring business was stuck at the same five clients for years. The business-skills courses taught me pricing and pitching — now I run a small team.",
    stat: 'Grew from solo to a team of 4',
  },
];

export default function LearningCenter({
  categories = [],
  stats = {},
  stories = DEFAULT_STORIES,
}) {
  const totalCourses = stats.totalCourses ?? 0;
  const totalLearners = stats.totalLearners ?? '74K';
  const totalCategories = stats.totalCategories ?? categories.length;

  function categoryCoursesCount(category) {
    return category.courses_count ?? category.courses?.length ?? 0;
  }

  return (
    <>
      <Head title="Learning Center and Courses" />

      <style>{`
        :root {
          --bg:         #0e1618;
          --bg2:        #131d20;
          --bg3:        #18242a;
          --border:     rgba(255,255,255,0.07);
          --green:      #48d597;
          --green-dim:  rgba(0,166,103,0.12);
          --green-glow: rgba(0,166,103,0.3);
          --gold:       #f5b942;
          --gold-dim:   rgba(245,185,66,0.12);
          --text:       #e8eef0;
          --muted:      #7a9199;
          --white:      #F5f5f7;
          --font-head:  -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
          --font-body:  -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
          --radius:     12px;
          --radius-lg:  18px;
          --t:          .25s ease;
        }

        *, *::before, *::after { box-sizing: border-box; }
        body { background: var(--bg); font-family: var(--font-body); color: var(--text); }

        /* ─── HERO ─── */
        .lc-hero {
          position: relative;
          background: var(--bg2);
          border-bottom: 1px solid var(--border);
          padding: 72px 0 60px;
          overflow: hidden;
        }

        .lc-hero::before {
          content: '';
          position: absolute;
          top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 500px;
          background: radial-gradient(ellipse, rgba(0,166,103,0.14) 0%, transparent 70%);
          pointer-events: none;
        }

        .lc-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,166,103,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,166,103,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green-dim);
          border: 1px solid rgba(0,166,103,0.3);
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 11px; font-weight: 600;
          color: var(--green); letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero-eyebrow span {
          width: 6px; height: 6px;
          background: var(--green); border-radius: 50%;
          animation: pdot 2s infinite;
        }

        @keyframes pdot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(1.5); }
        }

        .lc-hero h1 {
          font-family: var(--font-head);
          font-size: clamp(1.9rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 16px;
          position: relative; z-index: 1;
        }

        .lc-hero h1 .accent { color: var(--green); }

        .lc-hero p.hero-sub {
          color: var(--muted);
          font-size: 1rem;
          max-width: 500px;
          line-height: 1.7;
          margin-bottom: 24px;
          position: relative; z-index: 1;
        }

        .hero-cta-row {
          display: flex; gap: 12px; flex-wrap: wrap;
          position: relative; z-index: 1;
          margin-bottom: 26px;
        }

        .hero-proof {
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
          position: relative; z-index: 1;
        }

        .proof-avatars { display: flex; }
        .proof-avatars img {
          width: 32px; height: 32px; border-radius: 50%;
          border: 2px solid var(--bg2); object-fit: cover;
          margin-left: -10px;
        }
        .proof-avatars img:first-child { margin-left: 0; }

        .proof-text { font-size: 0.8rem; color: var(--muted); line-height: 1.4; }
        .proof-text strong { color: var(--text); font-family: var(--font-head); }
        .proof-rating { color: var(--gold); font-size: 11px; letter-spacing: 1px; }

        /* Glass hero cards */
        .hero-info-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          position: relative; z-index: 1;
        }

        .hi-card {
          background: rgba(255,255,255,0.055);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: var(--radius);
          padding: 20px 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08);
          transition: var(--t);
          position: relative;
          overflow: hidden;
        }

        .hi-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
        }

        .hi-card:hover {
          border-color: rgba(0,166,103,0.4);
          background: rgba(255,255,255,0.09);
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(0,0,0,0.32), 0 0 24px var(--green-glow), inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .hi-card-icon {
          width: 36px; height: 36px;
          background: rgba(0,166,103,0.18);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(0,166,103,0.3);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: var(--green); font-size: 16px;
          margin-bottom: 12px;
        }

        .hi-card h6 {
          font-family: var(--font-head);
          font-size: 0.88rem; font-weight: 700;
          color: var(--white); margin-bottom: 5px;
        }

        .hi-card p { font-size: 0.78rem; color: var(--muted); margin: 0 0 12px; line-height: 1.5; }

        .hi-card a {
          font-size: 0.78rem; color: var(--green); font-weight: 600;
          text-decoration: none; display: inline-flex; align-items: center; gap: 5px;
          transition: gap var(--t);
        }

        .hi-card a:hover { gap: 9px; }

        .m-hero-card {
          background: rgba(255,255,255,0.055);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: var(--radius-lg);
          padding: 28px 22px;
          text-align: center;
          position: relative; z-index: 1;
          box-shadow: 0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .m-hero-card h4 {
          font-family: var(--font-head); font-weight: 700;
          color: var(--white); margin-bottom: 10px;
        }

        .m-hero-card p { color: var(--muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 20px; }

        /* ─── BUTTONS ─── */
        .btn-green {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green); color: #fff;
          font-family: var(--font-body); font-weight: 600; font-size: 0.88rem;
          padding: 11px 22px; border-radius: var(--radius);
          border: none; cursor: pointer; text-decoration: none;
          transition: var(--t);
        }
        .btn-green:hover { background: #00bf76; color:#fff; transform: translateY(-2px); box-shadow: 0 0 18px var(--green-glow); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--text);
          font-family: var(--font-body); font-weight: 500; font-size: 0.88rem;
          padding: 11px 22px; border-radius: var(--radius);
          border: 1px solid var(--border); cursor: pointer; text-decoration: none;
          transition: var(--t);
        }
        .btn-outline:hover { border-color: var(--green); color: var(--green); background: var(--green-dim); }

        .carousel-indicators [data-bs-target] {
          background-color: var(--green); border-radius: 2px;
          width: 18px; height: 3px; border: none; opacity: 0.4;
          transition: opacity var(--t), width var(--t);
        }
        .carousel-indicators .active { opacity: 1; width: 28px; }

        /* ─── STATS BAR ─── */
        .stats-bar {
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          padding: 20px 0;
        }

        .stat-item {
          text-align: center; padding: 0 20px;
          border-right: 1px solid var(--border);
        }
        .stat-item:last-child { border-right: none; }
        .stat-num { font-family: var(--font-head); font-size: 1.6rem; font-weight: 800; color: var(--green); display: block; }
        .stat-label { font-size: 0.72rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }

        /* ─── SECTION LABELS ─── */
        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--green); margin-bottom: 8px;
        }
        .section-label::before {
          content:''; display:inline-block;
          width:18px; height:2px; background:var(--green); border-radius:1px;
        }
        .section-label.gold { color: var(--gold); }
        .section-label.gold::before { background: var(--gold); }

        .section-title {
          font-family: var(--font-head);
          font-size: clamp(1.3rem, 2.5vw, 1.9rem);
          font-weight: 800; color: var(--white);
          letter-spacing: -0.02em; margin-bottom: 6px;
        }

        .section-sub { color: var(--muted); font-size: 0.9rem; }

        /* ─── ABOUT LEARNING CENTER ─── */
        .about-lc { padding: 64px 0; }

        .about-lc-lead {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.8;
          max-width: 560px;
          margin: 0;
        }

        .about-lc-points {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-lc-point {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 16px 18px;
          transition: var(--t);
        }

        .about-lc-point:hover { border-color: rgba(0,166,103,0.3); }

        .about-lc-point .hi-card-icon {
          background: var(--green-dim);
          backdrop-filter: none;
          margin-bottom: 0;
          flex-shrink: 0;
        }

        .about-lc-point h6 {
          font-family: var(--font-head);
          font-size: 0.86rem; font-weight: 700;
          color: var(--white); margin-bottom: 3px;
        }

        .about-lc-point p { font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.55; }

        /* ─── CATEGORY STRIP ─── */
        .cat-strip { padding: 56px 0 0; }

        .cat-scroll {
          display: flex; gap: 10px; overflow-x: auto;
          padding-bottom: 4px; scrollbar-width: none; margin-top: 20px;
        }
        .cat-scroll::-webkit-scrollbar { display: none; }

        .cat-chip {
          flex-shrink: 0;
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 50px; padding: 8px 18px;
          font-size: 0.8rem; font-weight: 500;
          color: var(--muted); text-decoration: none; white-space: nowrap;
          transition: var(--t);
        }
        .cat-chip:hover {
          border-color: var(--green); color: var(--green); background: var(--green-dim);
        }

        .cat-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 12px; margin-top: 20px;
        }

        .cat-card-item {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 18px 14px;
          text-decoration: none; display: block;
          text-align: center; transition: var(--t);
          position: relative; overflow: hidden;
        }

        .cat-card-item::after {
          content:''; position:absolute; bottom:0; left:0; right:0;
          height:0; background:var(--green-dim);
          transition: height var(--t);
        }

        .cat-card-item:hover {
          border-color: rgba(0,166,103,0.4);
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.3);
        }
        .cat-card-item:hover::after { height: 100%; }
        .cat-card-item:hover .cci-icon { background: var(--green); color: #fff; }
        .cat-card-item:hover .cci-name { color: var(--green); }

        .cci-icon {
          width: 38px; height: 38px;
          background: var(--green-dim); border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: var(--green); font-size: 16px;
          margin: 0 auto 12px;
          position: relative; z-index: 1; transition: var(--t);
        }

        .cci-name {
          font-family: var(--font-head); font-size: 0.82rem; font-weight: 700;
          color: var(--text); margin-bottom: 4px;
          position: relative; z-index: 1; transition: color var(--t);
        }

        .cci-count { font-size: 0.72rem; color: var(--muted); position: relative; z-index:1; }

        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
        }

        /* ─── JOIN CTAs (teach vs learn) ─── */
        .join-options { padding: 64px 0; }

        .join-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 32px;
        }

        @media (max-width: 900px) {
          .join-grid { grid-template-columns: 1fr; }
        }

        .join-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          transition: var(--t);
        }

        .join-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
        }

        .join-card.teach::before { background: linear-gradient(90deg, transparent, var(--gold), transparent); }
        .join-card.learn::before { background: linear-gradient(90deg, transparent, var(--green), transparent); }

        .join-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }
        .join-card.teach:hover { border-color: rgba(245,185,66,0.4); }
        .join-card.learn:hover { border-color: rgba(0,166,103,0.4); }

        .join-card .jc-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          margin-bottom: 18px;
        }

        .join-card.teach .jc-icon { background: var(--gold-dim); color: var(--gold); }
        .join-card.learn .jc-icon { background: var(--green-dim); color: var(--green); }

        .join-card h3 {
          font-family: var(--font-head);
          font-size: 1.2rem; font-weight: 800;
          color: var(--white); margin-bottom: 8px;
        }

        .join-card p.jc-sub {
          color: var(--muted); font-size: 0.86rem; line-height: 1.65;
          margin-bottom: 18px;
        }

        .jc-list {
          list-style: none; padding: 0; margin: 0 0 24px;
          display: flex; flex-direction: column; gap: 10px;
        }

        .jc-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.82rem; color: var(--text); line-height: 1.5;
        }

        .jc-list li i { color: var(--green); font-size: 14px; margin-top: 2px; flex-shrink: 0; }
        .join-card.teach .jc-list li i { color: var(--gold); }

        .btn-gold {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--gold); color: #1a1400;
          font-family: var(--font-body); font-weight: 700; font-size: 0.88rem;
          padding: 11px 22px; border-radius: var(--radius);
          border: none; cursor: pointer; text-decoration: none;
          transition: var(--t);
        }
        .btn-gold:hover { background: #ffcb5c; transform: translateY(-2px); box-shadow: 0 0 18px rgba(245,185,66,0.35); color: #1a1400; }

        /* ─── INSPIRING STORIES ─── */
        .stories-section { padding: 64px 0; background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }

        .story-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 32px;
        }

        .story-card {
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 26px 24px;
          transition: var(--t);
          position: relative;
        }

        .story-card:hover { border-color: rgba(0,166,103,0.3); transform: translateY(-3px); }

        .story-quote-icon { color: var(--green); font-size: 22px; opacity: 0.5; margin-bottom: 10px; }

        .story-quote {
          font-size: 0.88rem; color: var(--text); line-height: 1.7;
          margin-bottom: 20px; font-style: italic;
        }

        .story-person { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }

        .story-avatar { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-h, var(--border)); }

        .story-name { font-family: var(--font-head); font-size: 0.88rem; font-weight: 700; color: var(--white); }
        .story-role { font-size: 0.75rem; color: var(--muted); }

        .story-stat {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--green-dim); border: 1px solid rgba(0,166,103,0.25);
          color: var(--green); border-radius: 50px;
          padding: 5px 12px; font-size: 0.74rem; font-weight: 700;
        }

        /* ─── FINAL CTA BANNER ─── */
        .cta-banner {
          margin: 64px 0;
          background: linear-gradient(135deg, var(--bg3) 0%, var(--bg2) 100%);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 46px 40px;
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
        }
        .cta-banner::before {
          content: '';
          position: absolute; top: -80px; right: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,166,103,0.15) 0%, transparent 70%);
        }
        .cta-banner h3 {
          font-family: var(--font-head); font-weight: 800; font-size: 1.4rem;
          color: var(--white); margin-bottom: 8px; position: relative; z-index: 1;
        }
        .cta-banner p { color: var(--muted); font-size: 0.9rem; max-width: 420px; position: relative; z-index: 1; margin: 0; }
        .cta-banner .btn-green { position: relative; z-index: 1; flex-shrink: 0; }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg:         #f6faf8;
          --bg2:        #F5f5f7;
          --bg3:        #eef4f1;
          --border:     rgba(0, 100, 60, 0.1);
          --green:      #00a667;
          --green-dim:  rgba(0, 166, 103, 0.08);
          --green-glow: rgba(0, 166, 103, 0.22);
          --gold:       #b8790c;
          --gold-dim:   rgba(184, 121, 12, 0.1);
          --text:       #10201b;
          --muted:      #5b7a70;
          --white:      #10201b;
        }

        [data-h-theme="light"] body { background: var(--bg); }

        [data-h-theme="light"] .lc-hero::after {
          background-image:
            linear-gradient(rgba(0, 100, 60, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 100, 60, 0.06) 1px, transparent 1px);
        }

        [data-h-theme="light"] .lc-hero::before {
          background: radial-gradient(ellipse, rgba(0,166,103,0.08) 0%, transparent 70%);
        }

        [data-h-theme="light"] .hi-card,
        [data-h-theme="light"] .m-hero-card {
          background: rgba(255,255,255,0.55);
          border-color: rgba(0,100,60,0.14);
          box-shadow: 0 8px 32px rgba(0,60,40,0.08), inset 0 1px 0 rgba(255,255,255,0.5);
        }

        [data-h-theme="light"] .popular-thumb-overlay {
          background: linear-gradient(to top, rgba(16,32,27,0.35) 0%, transparent 50%);
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section className="lc-hero">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left */}
            <div className="col-lg-6">
              <div className="hero-eyebrow"><span></span> Learning Center</div>
              <h1>
                Where <span className="accent">knowledge</span><br />meets opportunity
              </h1>
              <p className="hero-sub">
                Career-ready courses taught by verified professionals — learn in-demand skills, earn a certificate, and grow your career on your own schedule.
              </p>
              <div className="hero-cta-row">
                <Link href={route('user.courses.browse')} className="btn-green"><i className="ti ti-book-2"></i> Explore Courses</Link>
                <Link href={route('register')} className="btn-outline"><i className="ti ti-users"></i> Join Platform</Link>
              </div>
              <div className="hero-proof">
                <div className="proof-avatars">
                  <img src="/assets/img/user/profile.jpg" alt="" />
                  <img src="/assets/img/user/profile.jpg" alt="" />
                  <img src="/assets/img/user/profile.jpg" alt="" />
                </div>
                <div className="proof-text">
                  <span className="proof-rating">★★★★★</span> <strong>4.8/5</strong> from thousands of learners
                </div>
              </div>
            </div>

            {/* Right (desktop) — glass cards */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-info-cards">
                <div className="hi-card">
                  <div className="hi-card-icon"><i className="ti ti-certificate"></i></div>
                  <h6>Certified Courses</h6>
                  <p>Learn from verified professionals with recognized certifications.</p>
                  <Link href={route('user.courses.browse')}>Browse now <i className="ti ti-arrow-right"></i></Link>
                </div>
                <div className="hi-card">
                  <div className="hi-card-icon"><i className="ti ti-clock"></i></div>
                  <h6>Learn at Your Pace</h6>
                  <p>All courses available on-demand, accessible anytime anywhere.</p>
                  <Link href={route('user.courses.browse')}>Get started <i className="ti ti-arrow-right"></i></Link>
                </div>
                <div className="hi-card">
                  <div className="hi-card-icon"><i className="ti ti-currency-dollar"></i></div>
                  <h6>Free &amp; Paid Content</h6>
                  <p>Access free courses or invest in premium skill-building content.</p>
                  <Link href={route('user.courses.browse')}>Explore free <i className="ti ti-arrow-right"></i></Link>
                </div>
                <div className="hi-card">
                  <div className="hi-card-icon"><i className="ti ti-world"></i></div>
                  <h6>Africa-Focused</h6>
                  <p>Skills and insights tailored for professionals across Africa.</p>
                  <Link href={route('register')}>Join community <i className="ti ti-arrow-right"></i></Link>
                </div>
              </div>
            </div>

            {/* Mobile carousel */}
            <div className="col-12 d-lg-none">
              <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-indicators" style={{ bottom: '-30px' }}>
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="m-hero-card">
                      <div className="hi-card-icon mx-auto mb-3"><i className="ti ti-book-2"></i></div>
                      <h4>Knowledge Meets Opportunity</h4>
                      <p>Explore courses and categories to enhance your skills and advance your career.</p>
                      <Link href={route('user.courses.browse')} className="btn-green mx-auto">Explore Courses</Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="m-hero-card">
                      <div className="hi-card-icon mx-auto mb-3"><i className="ti ti-users"></i></div>
                      <h4>Unlock New Opportunities</h4>
                      <p>Join the platform and share your skills with the community.</p>
                      <Link href={route('register')} className="btn-green mx-auto">Join Platform</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: '40px' }}></div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <div className="stats-bar">
        <div className="container">
          <div className="row g-0">
            <div className="col-6 col-md-3">
              <div className="stat-item"><span className="stat-num">{totalCourses}<span style={{ color: 'var(--green)' }}>+</span></span><span className="stat-label">Courses</span></div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item"><span className="stat-num">{totalCategories}<span style={{ color: 'var(--green)' }}>+</span></span><span className="stat-label">Categories</span></div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item"><span className="stat-num">{totalLearners}<span style={{ color: 'var(--green)' }}>+</span></span><span className="stat-label">Learners</span></div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item"><span className="stat-num">Free<span style={{ color: 'var(--green)' }}>+</span></span><span className="stat-label">Content Available</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* ═══ ABOUT LEARNING CENTER ═══ */}
      <section className="about-lc">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <div className="section-label">About the Learning Center</div>
              <div className="section-title">Built to turn curiosity into a career</div>
              <p className="about-lc-lead">
                The Learning Center is where skilled people on the platform teach what they know, and where anyone can pick up a new skill without leaving the community they'll eventually work in. Every course is created by a verified talent, so what you're learning is grounded in real, paid work — not just theory. Finish a course, add it to your profile, and you're already one step closer to getting hired.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-lc-points">
                <div className="about-lc-point">
                  <div className="hi-card-icon"><i className="ti ti-user-check"></i></div>
                  <div>
                    <h6>Taught by real practitioners</h6>
                    <p>Every course comes from a verified talent already doing the work — not a generic curriculum.</p>
                  </div>
                </div>
                <div className="about-lc-point">
                  <div className="hi-card-icon"><i className="ti ti-route"></i></div>
                  <div>
                    <h6>Straight from learning to earning</h6>
                    <p>Finish a course and turn it into a skill listing on your profile in minutes.</p>
                  </div>
                </div>
                <div className="about-lc-point">
                  <div className="hi-card-icon"><i className="ti ti-device-laptop"></i></div>
                  <div>
                    <h6>Self-paced, always available</h6>
                    <p>No fixed schedule — learn in the evenings, on weekends, or between jobs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CATEGORIES ═══ */}
      <div className="cat-strip">
        <div className="container">
          <div className="section-label">Browse</div>
          <div className="section-title">Trending Learning Categories</div>
          <p className="section-sub">View all learning materials and courses offered by skilled people</p>

          {/* Mobile: horizontal scroll chips */}
          <div className="cat-scroll d-lg-none">
            {categories.map((category) => (
              <Link key={category.id} href={route('user.courses.category', { category: category.slug })} className="cat-chip">
                {category.name}
                <span style={{ color: 'var(--green)', marginLeft: '4px' }}>({categoryCoursesCount(category)})</span>
              </Link>
            ))}
          </div>

          {/* Desktop: card grid */}
          <div className="cat-cards-grid d-none d-lg-grid">
            {categories.map((category) => (
              <Link key={category.id} href={route('user.courses.category', { category: category.slug })} className="cat-card-item">
                <div className="cci-icon"><i className="ti ti-book"></i></div>
                <div className="cci-name">{category.name}</div>
                <div className="cci-count">{categoryCoursesCount(category)} courses</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ JOIN CTAs: TEACH vs LEARN ═══ */}
      <section className="join-options">
        <div className="container">
          <div className="section-label">Two Ways In</div>
          <div className="section-title">Whichever side you're on, start here</div>
          <p className="section-sub">Teach what you know, or learn what you need — both start with a free account.</p>

          <div className="join-grid">
            <div className="join-card teach">
              <div className="jc-icon"><i className="ti ti-chalkboard"></i></div>
              <h3>Share your skills. Teach a course.</h3>
              <p className="jc-sub">
                Turn what you already know into a course, reach learners across Africa, and build your reputation as a verified expert.
              </p>
              <ul className="jc-list">
                <li><i className="ti ti-check"></i> Publish free or paid courses in minutes</li>
                <li><i className="ti ti-check"></i> Get discovered as a verified instructor</li>
                <li><i className="ti ti-check"></i> Build an audience that can also hire you</li>
              </ul>
              <Link href={route('register', { intent: 'instructor' })} className="btn-gold">
                <i className="ti ti-rocket"></i> Join & Teach a Course
              </Link>
            </div>

            <div className="join-card learn">
              <div className="jc-icon"><i className="ti ti-school"></i></div>
              <h3>Don't have a skill yet? Go learn one.</h3>
              <p className="jc-sub">
                Pick a course, work at your own pace, and walk away with a skill you can list on your profile and get hired for.
              </p>
              <ul className="jc-list">
                <li><i className="ti ti-check"></i> Free and paid courses, no fixed schedule</li>
                <li><i className="ti ti-check"></i> Earn a certificate on completion</li>
                <li><i className="ti ti-check"></i> Turn your finished course into a skill listing</li>
              </ul>
              <Link href={route('register', { intent: 'learner' })} className="btn-green">
                <i className="ti ti-user-plus"></i> Join & Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INSPIRING STORIES ═══ */}
      <section className="stories-section">
        <div className="container">
          <div className="section-label gold">Real Results</div>
          <div className="section-title">Stories from talents who learned here first</div>
          <p className="section-sub">A skill listing is a starting point — here's where some of our members took it.</p>

          <div className="story-grid">
            {stories.map((story) => (
              <div className="story-card" key={story.id}>
                <div className="story-quote-icon"><i className="ti ti-quote"></i></div>
                <p className="story-quote">&ldquo;{story.quote}&rdquo;</p>
                <div className="story-person">
                  <img className="story-avatar" src={story.avatar} alt={story.name} />
                  <div>
                    <div className="story-name">{story.name}</div>
                    <div className="story-role">{story.role}</div>
                  </div>
                </div>
                <span className="story-stat"><i className="ti ti-trending-up"></i> {story.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA — BROWSE COURSES ═══ */}
      <div className="container">
        <div className="cta-banner">
          <div>
            <h3>Ready to see everything on offer?</h3>
            <p>Search, filter by category, and browse the full course catalog — updated as new courses are published.</p>
          </div>
          <Link href={route('user.courses.browse')} className="btn-green">
            <i className="ti ti-search"></i> Browse All Courses
          </Link>
        </div>
      </div>
    </>
  );
}

LearningCenter.layout = (page) => (
  <GuestLayout
    children={page}
    title="Learning Center and Courses"
    description="Explore courses and learning materials crafted by skilled professionals — enhance your skills and advance your career today."
  />
);