@extends('layouts.guest')
@section('title', 'Skilled Marketplace – Discover Skilled Professionals')
@section('content')

<!-- SwiperJS for carousel -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

@php
$categories = \App\Models\Category::all();
@endphp

<style>
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

  /* Hero radial glow — soften so it doesn't look like a smear on white */
  [data-h-theme="light"] #hero-section::before {
    background: radial-gradient(circle, rgba(0,166,103,0.08) 0%, transparent 70%);
  }

  [data-h-theme="light"] #cta-band::before {
    background: radial-gradient(circle, rgba(0,166,103,0.06) 0%, transparent 70%);
  }

  /* Modal close icon: Bootstrap's btn-close-white forces a white X,
     invisible on a light modal header — revert to the default dark icon */
  [data-h-theme="light"] .btn-close-white {
    filter: none;
  }

  /* form-control/select placeholder + option colors were fine via --muted,
     but modal header background (--bg3) + title (--white→now dark) already
     cascade correctly through variables — no extra rule needed there */

  /* faq-q background uses --bg2, text uses --text — cascades automatically */

  /* step-dot "done" state background uses --green-dim — cascades fine */
</style>

<!-- ═══ HERO ═══ -->
<section id="hero-section">
  <div class="container">
    <div class="row align-items-center g-5">

      <!-- Left -->
      <div class="col-lg-6">
        <div class="hero-eyebrow">
          <span></span> Africa's Top Skills Marketplace
        </div>
        <h1 class="hero-headline">
          Your gateway to <span class="accent">skills</span>, opportunities &amp; growth.
        </h1>
        <p class="hero-sub">
          Connect with verified professionals, showcase your expertise, and build the career you deserve — all in one platform.
        </p>
        <div class="hero-cta-group">
          <a class="btn-green" data-bs-toggle="modal" data-bs-target="#searchModal">
            <i class="ti ti-search"></i> Find Skills
          </a>
          <a class="btn-outline" href="{{ route('user.register_skills') }}">
            <i class="ti ti-star"></i> Register your Skills
          </a>
          <a class="btn-outline" href="{{ route('talent.connections-room') }}">
            <i class="ti ti-users"></i> Connection Room
          </a>
        </div>
      </div>

      <!-- Right — 3 feature cards (desktop) -->
      <div class="col-lg-6 d-none d-lg-block">
        <div class="hero-cards">
          <div class="hero-card">
            <div class="hero-card-icon"><i class="ti ti-speakerphone"></i></div>
            <h5>Promote Your Skills</h5>
            <p>Boost your profile and reach 3× more employers. Get verified and feature your story on our homepage.</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#searchModal">
              Search skilled people <i class="ti ti-arrow-right"></i>
            </a>
          </div>

          <div class="row g-4">
            <div class="col-6">
              <div class="hero-card">
                <div class="hero-card-icon"><i class="ti ti-badge"></i></div>
                <h5>Join Our Skill Hub</h5>
                <p>Showcase skills, get verified, and connect with global clients.</p>
                <a class="card-link" href="{{ route('user.register_skills') }}">
                  Register now <i class="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-6">
              <div class="hero-card">
                <div class="hero-card-icon"><i class="ti ti-world"></i></div>
                <h5>Expand Network</h5>
                <p>Join groups, attend virtual events, and build connections that matter.</p>
                <a class="card-link" href="{{ route('talent.connections-room') }}">
                  Connection Room <i class="ti ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile carousel -->
      <div class="col-12 d-lg-none">
        <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4500">
          <div class="carousel-indicators" style="bottom:-30px;">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="m-hero-card">
                <div class="hero-card-icon mx-auto mb-3"><i class="ti ti-speakerphone"></i></div>
                <h4>Promote Your Skills</h4>
                <p>Stand out! Boost your profile and reach 3× more employers. Get verified today.</p>
                <a class="btn-green mx-auto" data-bs-toggle="modal" data-bs-target="#searchModal">
                  <i class="ti ti-search"></i> Search Talent
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <div class="m-hero-card">
                <div class="hero-card-icon mx-auto mb-3"><i class="ti ti-badge"></i></div>
                <h4>Join Our Skill Hub</h4>
                <p>Showcase your skills, get verified, and connect with clients globally.</p>
                <a class="btn-green mx-auto" href="{{ route('user.register_skills') }}">Register Skills</a>
              </div>
            </div>
            <div class="carousel-item">
              <div class="m-hero-card">
                <div class="hero-card-icon mx-auto mb-3"><i class="ti ti-world"></i></div>
                <h4>Expand Your Network</h4>
                <p>Connect with industry professionals, mentors, and peers across Africa.</p>
                <a class="btn-green mx-auto" href="{{ route('register') }}">Join Community</a>
              </div>
            </div>
          </div>
        </div>
        <div style="height:36px;"></div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ STATS BAR ═══ -->
<div class="stats-bar">
  <div class="container">
    <div class="row g-0">
      <div class="col-6 col-md-3">
        <div class="stat-item">
          <span class="stat-num">74K<span style="color:var(--green);">+</span></span>
          <span class="stat-label">Skilled People</span>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-item">
          <span class="stat-num">120<span style="color:var(--green);">+</span></span>
          <span class="stat-label">Categories</span>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-item">
          <span class="stat-num">98<span style="color:var(--green);">%</span></span>
          <span class="stat-label">Satisfaction Rate</span>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-item">
          <span class="stat-num">30+</span>
          <span class="stat-label">Countries</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section-divider"></div>

<!-- ═══ CATEGORIES (Mobile scroll) ═══ -->
<div class="container d-lg-none py-5">
  <div class="mb-3">
    <div class="section-label">Browse</div>
    <div class="section-title">Trending Categories</div>
  </div>
  <div class="cat-scroll">
    @foreach($categories as $cat)
      <a href="{{ route('user.talents.category', $cat->slug) }}" class="cat-chip">
        {{ $cat->name }}
      </a>
    @endforeach
  </div>
</div>

<!-- ═══ CATEGORIES (Desktop grid) ═══ -->
<section id="categories-section" class="d-none d-lg-block">
  <div class="container">
    <div class="d-flex align-items-end justify-content-between mb-8 flex-wrap gap-3">
      <div>
        <div class="section-label">Explore</div>
        <div class="section-title">Trending Categories of Skilled People</div>
        <p class="section-sub">Discover inspiring stories, impactful skills, and creative people across Africa</p>
      </div>
    </div>

    <div class="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mt-4">
      @foreach($categories as $cat)
      <div class="col d-flex">
        <div class="pop-category flex-fill">
          <span><i class="ti ti-speakerphone"></i></span>
          <h6 class="mb-1"><a href="{{ route('user.talents.category', $cat->slug) }}">{{ $cat->name }}</a></h6>
          <p>{{ optional($cat->talents)->count() ?? 0 }} skills</p>
          <a href="{{ route('user.talents.category', $cat->slug) }}" class="slide-line-btn">
            <i class="feather-arrow-right"></i> View Skills
          </a>
        </div>
      </div>
      @endforeach
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ═══ CTA BAND ═══ -->
<section id="cta-band">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-md-8">
        <div class="section-label">Join Today</div>
        <div class="section-title">Want to Showcase Your Skills?</div>
        <p class="section-sub mt-2">
          Over 74K skilled people on the platform, available today for employers and clients. Join our community and take the first step towards your dream career.
        </p>
      </div>
      <div class="col-md-4 text-md-end">
        <a role="button" href="{{ route('user.register_skills') }}" class="btn-green" style="font-size:1rem; padding:14px 32px;">
          Register Your Skills <i class="ti ti-chevron-right"></i>
        </a>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ═══ FAQ ═══ -->
<section id="faq-section">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-4">
        <div class="section-label">FAQ</div>
        <div class="section-title">Skilled People Frequently Asked Questions</div>
        <p class="section-sub mt-3">
          Don't see your question? We're here to help you connect with the right skilled people.
        </p>
        <a href="{{ route('user.contact') }}" class="btn-green mt-4 d-inline-flex">
          Ask a Question <i class="ti ti-arrow-badge-right ms-1"></i>
        </a>
      </div>

      <div class="col-lg-8">
        <div class="faq-item" id="faq-1">
          <button class="faq-q" onclick="toggleFaq('faq-1')">
            How can I find the right skilled people for my project?
            <span class="faq-icon"><i class="ti ti-plus"></i></span>
          </button>
          <div class="faq-a">Our Skilled People Marketplace lets you filter professionals by skills, categories, experience, and location — making it easy to find the perfect match for your project.</div>
        </div>

        <div class="faq-item" id="faq-2">
          <button class="faq-q" onclick="toggleFaq('faq-2')">
            How do I hire a skilled person?
            <span class="faq-icon"><i class="ti ti-plus"></i></span>
          </button>
          <div class="faq-a">After browsing profiles, you can contact skilled people directly through the platform or request a proposal. Our messaging system ensures smooth communication and collaboration.</div>
        </div>

        <div class="faq-item" id="faq-3">
          <button class="faq-q" onclick="toggleFaq('faq-3')">
            Can skilled people showcase their past projects?
            <span class="faq-icon"><i class="ti ti-plus"></i></span>
          </button>
          <div class="faq-a">Yes! Skilled people can upload portfolios, project samples, and certifications to highlight their skills and achievements, helping you make informed hiring decisions.</div>
        </div>

        <div class="faq-item" id="faq-4">
          <button class="faq-q" onclick="toggleFaq('faq-4')">
            Is there a verification process for talents?
            <span class="faq-icon"><i class="ti ti-plus"></i></span>
          </button>
          <div class="faq-a">We verify all registered talents to ensure authenticity. Verified talents are marked with a badge on their profiles, giving you full confidence in your collaboration.</div>
        </div>

        <div class="faq-item" id="faq-5">
          <button class="faq-q" onclick="toggleFaq('faq-5')">
            How much does it cost to hire a talent?
            <span class="faq-icon"><i class="ti ti-plus"></i></span>
          </button>
          <div class="faq-a">Costs vary depending on the talent's experience, skills, and project scope. The platform provides transparent pricing or allows you to negotiate directly with the talent.</div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══ SEARCH MODAL ═══ -->
<div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><i class="ti ti-search me-2" style="color:var(--green);"></i>Find Your Skills</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form method="GET" action="{{ route('user.talents') }}" class="row g-4">
          <div class="col-md-6">
            <label class="form-label">Keyword</label>
            <input type="text" name="keyword" class="form-control"
              placeholder="Search talents, skills, or names..." value="{{ request('keyword') }}">
          </div>
          <div class="col-md-6">
            <label class="form-label">Category</label>
            <select name="category" class="form-select">
              <option value="">All Categories</option>
              @foreach($categories as $cat)
              <option value="{{ $cat->id }}" {{ request('category') == $cat->id ? 'selected' : '' }}>
                {{ $cat->name }}
              </option>
              @endforeach
            </select>
          </div>
          <div class="col-12 d-flex justify-content-end gap-3">
            <button type="button" class="btn-outline" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn-green">
              <i class="ti ti-search"></i> Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


<!-- ═══ TALENT REGISTRATION MODAL ═══ -->
<div class="modal fade" id="talentModal" tabindex="-1" aria-labelledby="talentModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Skill Registration</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">

        <!-- Step indicator -->
        <div class="step-indicator" id="stepIndicator">
          <div class="step-dot active" data-step="0">1</div>
          <div class="step-line" data-line="0"></div>
          <div class="step-dot" data-step="1">2</div>
          <div class="step-line" data-line="1"></div>
          <div class="step-dot" data-step="2">3</div>
          <div class="step-line" data-line="2"></div>
          <div class="step-dot" data-step="3">4</div>
        </div>

        <form action="{{ route('talent.register') }}" method="POST" enctype="multipart/form-data">
          @csrf

          <!-- Step 1 -->
          <div class="step-section active" id="step-1">
            <div class="step-title">Personal Info</div>
            <div class="step-sub">Fill your basic information for profile setup.</div>
            <div class="info-note">This information will appear on your public profile.</div>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Full Name</label>
                <input type="text" name="name" class="form-control" placeholder="e.g. John Doe" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Address</label>
                <input type="text" name="address" class="form-control" placeholder="e.g. Kigali, Rwanda" required>
              </div>
            </div>
            <div class="text-end mt-4">
              <button type="button" class="btn-green btn-next">Next <i class="ti ti-arrow-right ms-1"></i></button>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="step-section" id="step-2">
            <div class="step-title">Contact Info</div>
            <div class="step-sub">Provide your contact details for clients to reach you.</div>
            <div class="info-note">Your email will not be shared publicly.</div>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Phone</label>
                <input type="text" name="phone" class="form-control" placeholder="e.g. +250 788 123 456" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Email</label>
                <input type="email" name="email" class="form-control" placeholder="e.g. john@example.com" required>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-4">
              <button type="button" class="btn-outline btn-prev"><i class="ti ti-arrow-left me-1"></i> Back</button>
              <button type="button" class="btn-green btn-next">Next <i class="ti ti-arrow-right ms-1"></i></button>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="step-section" id="step-3">
            <div class="step-title">Skill Info</div>
            <div class="step-sub">Define your skills and expertise to attract the right clients.</div>
            <div class="info-note">Be specific — detailed descriptions get 2× more views.</div>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Languages Spoken</label>
                <input type="text" name="language" class="form-control" placeholder="e.g. English, Kinyarwanda" required>
              </div>
              <div class="col-md-6">
                <label class="form-label">Skill Category</label>
                <select name="category_id" class="form-select" required>
                  <option value="">Select Category</option>
                  @foreach($categories as $cat)
                  <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                  @endforeach
                </select>
              </div>
              <div class="col-12">
                <label class="form-label">Description</label>
                <textarea name="description" class="form-control" rows="4" placeholder="Describe your talent and experience..."></textarea>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-4">
              <button type="button" class="btn-outline btn-prev"><i class="ti ti-arrow-left me-1"></i> Back</button>
              <button type="button" class="btn-green btn-next">Next <i class="ti ti-arrow-right ms-1"></i></button>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="step-section" id="step-4">
            <div class="step-title">Profile Photo</div>
            <div class="step-sub">Add a professional photo to complete your profile.</div>
            <div class="info-note">A clear headshot increases profile views by 40%.</div>
            <div class="mb-3">
              <label class="form-label">Profile Image</label>
              <input type="file" name="image" class="form-control" accept="image/*" required>
            </div>
            <div class="form-check mt-3 mb-3">
              <input type="checkbox" class="form-check-input" id="terms" required
                style="accent-color: var(--green);">
              <label class="form-check-label" for="terms" style="font-size:.88rem; color:var(--muted);">
                I accept the <a href="{{ route('user.terms-condition') }}" style="color:var(--green);">Terms &amp; Conditions</a>
              </label>
            </div>
            <div class="d-flex justify-content-between mt-4">
              <button type="button" class="btn-outline btn-prev"><i class="ti ti-arrow-left me-1"></i> Back</button>
              <button type="submit" class="btn-green" style="background:#48d597;">
                <i class="ti ti-check me-1"></i> Submit Registration
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
</div>


<!-- ═══ SCRIPTS ═══ -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>
  /* ── FAQ accordion ── */
  function toggleFaq(id) {
    const item = document.getElementById(id);
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  /* ── Step wizard ── */
  document.addEventListener("DOMContentLoaded", () => {
    const steps   = document.querySelectorAll(".step-section");
    const dots    = document.querySelectorAll(".step-dot");
    const lines   = document.querySelectorAll(".step-line");
    let current   = 0;

    function render(step) {
      steps.forEach((s, i) => s.classList.toggle("active", i === step));
      dots.forEach((d, i) => {
        d.classList.remove('active','done');
        if (i === step)   d.classList.add('active');
        if (i < step)     d.classList.add('done');
      });
      lines.forEach((l, i) => l.classList.toggle('done', i < step));
    }

    document.querySelectorAll(".btn-next").forEach(btn =>
      btn.addEventListener("click", () => {
        if (current < steps.length - 1) { current++; render(current); }
      })
    );

    document.querySelectorAll(".btn-prev").forEach(btn =>
      btn.addEventListener("click", () => {
        if (current > 0) { current--; render(current); }
      })
    );

    render(current);
  });
</script>

@endsection