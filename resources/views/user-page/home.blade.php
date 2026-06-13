@extends('layouts.guest')
@section('title', 'Empowering Talent, Opportunities & Growth')
@section('content')

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">

<style>
/* ╔══════════════════════════════════╗
   ║        DESIGN TOKENS             ║
   ╚══════════════════════════════════╝ */
:root {
    --bg:          #0e1618;
    --bg-card:     #131e21;
    --bg-glass:    rgba(255,255,255,0.035);
    --bg-glass2:   rgba(0,166,103,0.08);
    --accent:      #48d597;
    --accent-dim:  #008f59;
    --accent-glow: rgba(0,166,103,0.22);
    --accent-line: rgba(0,166,103,0.35);
    --border:      rgba(255,255,255,0.07);
    --border-h:    rgba(0,166,103,0.3);
    --text-1:      #f0f4f3;
    --text-2:      #8da4a0;
    --text-3:      #4d6460;
    --font-head:   'Syne', sans-serif;
    --font-body:   'DM Sans', sans-serif;
    --r-sm:        8px;
    --r-md:        14px;
    --r-lg:        20px;
    --r-pill:      50px;
}
body { background: var(--bg) !important; color: var(--text-1); font-family: var(--font-body); }

/* ── SHARED UTILITIES ── */
.fc-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--bg-glass2); border: 1px solid var(--border-h);
    color: var(--accent); border-radius: var(--r-pill);
    padding: 4px 14px; font-size: 0.72rem; font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase;
}
.fc-section-head {
    margin-bottom: 48px;
}
.fc-section-head .eyebrow {
    font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em;
    color: var(--accent); font-weight: 600; margin-bottom: 12px; display: block;
}
.fc-section-head h2 {
    font-family: var(--font-head); font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 800; color: var(--text-1); margin-bottom: 14px; line-height: 1.15;
}
.fc-section-head p { color: var(--text-2); font-size: 0.95rem; max-width: 560px; line-height: 1.7; }

.btn-fc-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--accent); color: #fff; border: none;
    border-radius: var(--r-pill); padding: 12px 28px;
    font-family: var(--font-head); font-size: 0.875rem; font-weight: 700;
    text-decoration: none; cursor: pointer;
    transition: background .2s, transform .15s, box-shadow .2s;
    box-shadow: 0 4px 22px var(--accent-glow);
}
.btn-fc-primary:hover { background: var(--accent-dim); transform: translateY(-2px); box-shadow: 0 8px 32px var(--accent-glow); color: #fff; }

.btn-fc-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--text-1);
    border: 1px solid var(--border); border-radius: var(--r-pill);
    padding: 11px 26px; font-family: var(--font-head); font-size: 0.875rem;
    font-weight: 600; text-decoration: none; cursor: pointer;
    transition: border-color .2s, color .2s, background .2s;
}
.btn-fc-outline:hover { border-color: var(--border-h); color: var(--accent); background: var(--bg-glass2); }

/* ══════════════════════════════════════
   1. HERO
══════════════════════════════════════ */
.fc-hero {
    position: relative; min-height: 92vh;
    display: flex; align-items: center; overflow: hidden;
}
.fc-hero-bg {
    position: absolute; inset: 0; z-index: 0;
}
.fc-hero-bg .carousel, .fc-hero-bg .carousel-inner, .fc-hero-bg .carousel-item { height: 100%; }
.fc-hero-bg-slide {
    width: 100%; height: 100%;
    background-size: cover; background-position: center;
}
.fc-hero-bg-slide video { width: 100%; height: 100%; object-fit: cover; }
.fc-hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(135deg,
        rgba(14,22,24,0.92) 0%,
        rgba(14,22,24,0.75) 50%,
        rgba(0,166,103,0.08) 100%);
}
/* animated grid lines */
.fc-hero-grid {
    position: absolute; inset: 0; z-index: 1; pointer-events: none;
    background-image:
        linear-gradient(rgba(0,166,103,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,166,103,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
}
.fc-hero-content {
    position: relative; z-index: 2; padding: 80px 40px;
}
.hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;
    color: var(--accent); font-weight: 600; margin-bottom: 20px;
}
.hero-eyebrow::before {
    content: ''; display: inline-block;
    width: 24px; height: 2px; background: var(--accent); border-radius: 2px;
}
.fc-hero h1 {
    font-family: var(--font-head);
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    font-weight: 800; line-height: 1.08;
    color: var(--text-1); margin-bottom: 22px;
}
.fc-hero h1 .hl { color: var(--accent); }
.fc-hero p {
    font-size: 1.05rem; color: var(--text-2); max-width: 520px;
    line-height: 1.75; margin-bottom: 36px;
}
.hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 52px; }

.hero-stats {
    display: flex; gap: 36px; flex-wrap: wrap;
    border-top: 1px solid var(--border); padding-top: 28px;
}
.hero-stat-val {
    font-family: var(--font-head); font-size: 1.7rem; font-weight: 800; color: var(--accent);
}
.hero-stat-lbl { font-size: 0.78rem; color: var(--text-3); margin-top: 2px; }

/* Avatar stack in hero */
.avatar-stack { display: flex; }
.avatar-stack img {
    width: 36px; height: 36px; border-radius: 50%;
    border: 2px solid var(--bg); object-fit: cover;
    margin-left: -10px;
}
.avatar-stack img:first-child { margin-left: 0; }

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
@media(max-width: 767px) { .feature-strip-grid { grid-template-columns: 1fr; } }
.feature-strip-item {
    background: var(--bg-card);
    padding: 28px 32px;
    transition: background .2s;
}
.feature-strip-item:hover { background: var(--bg-glass2); }
.feature-strip-item h5 {
    font-family: var(--font-head); font-size: 1rem; font-weight: 700;
    color: var(--text-1); margin-bottom: 8px;
}
.feature-strip-item p { font-size: 0.83rem; color: var(--text-2); margin-bottom: 14px; line-height: 1.6; }
.strip-link {
    font-size: 0.8rem; font-weight: 600; color: var(--accent);
    text-decoration: none; display: inline-flex; align-items: center; gap: 4px;
    transition: gap .2s;
}
.strip-link:hover { gap: 8px; }
.strip-icon {
    width: 40px; height: 40px; border-radius: var(--r-sm);
    background: var(--bg-glass2); border: 1px solid var(--border-h);
    display: flex; align-items: center; justify-content: center;
    color: var(--accent); font-size: 1rem; margin-bottom: 16px;
}

/* ══════════════════════════════════════
   3. TRENDING CATEGORIES
══════════════════════════════════════ */
.fc-categories { padding: 80px 0; }
.category-scroll {
    display: flex; gap: 14px; overflow-x: auto;
    padding-bottom: 12px; scrollbar-width: none;
}
.category-scroll::-webkit-scrollbar { display: none; }
.cat-pill {
    display: flex; flex-direction: column; gap: 4px; flex-shrink: 0;
    background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-md); padding: 18px 22px;
    text-decoration: none; transition: border-color .2s, transform .2s, background .2s;
    min-width: 160px;
}
.cat-pill:hover { border-color: var(--border-h); background: var(--bg-glass2); transform: translateY(-3px); }
.cat-pill-name {
    font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1);
}
.cat-pill-count { font-size: 0.75rem; color: var(--text-3); }
.cat-pill-arrow { color: var(--accent); font-size: 0.75rem; margin-top: 8px; }

/* ══════════════════════════════════════
   4. FEATURES TABS SECTION
══════════════════════════════════════ */
.fc-features { padding: 80px 0; }
.fc-tab-bar {
    display: flex; gap: 4px; flex-wrap: wrap;
    background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-md); padding: 6px; margin-bottom: 32px;
}
.fc-tab-btn {
    flex: 1; min-width: 100px;
    background: transparent; border: none;
    border-radius: var(--r-sm); padding: 10px 20px;
    font-family: var(--font-head); font-size: 0.8rem; font-weight: 600;
    color: var(--text-3); cursor: pointer;
    transition: background .2s, color .2s;
    white-space: nowrap;
}
.fc-tab-btn.active {
    background: var(--bg-glass2); color: var(--accent);
    border: 1px solid var(--border-h);
}
.fc-tab-btn:hover:not(.active) { color: var(--text-2); }

.fc-tab-panel { display: none; animation: panelIn .3s ease; }
.fc-tab-panel.active { display: block; }
@keyframes panelIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }

.feature-panel-card {
    background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-lg); padding: 40px; overflow: hidden; position: relative;
}
.feature-panel-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0;
    height: 2px; background: linear-gradient(90deg, transparent, var(--accent), transparent);
}
.feature-panel-card h2 {
    font-family: var(--font-head); font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 800; color: var(--text-1); margin-bottom: 16px; line-height: 1.2;
}
.feature-panel-card h2 span { color: var(--accent); }
.feature-panel-card p { color: var(--text-2); line-height: 1.75; margin-bottom: 28px; max-width: 520px; }

.feature-img-wrap { text-align: center; }
.feature-img-wrap img { max-height: 260px; }

/* Provide boxes in marketplace tab */
.fc-provide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-top: 24px; }
.fc-provide-box {
    background: var(--bg-glass); border: 1px solid var(--border);
    border-radius: var(--r-md); padding: 24px; transition: border-color .2s, transform .2s;
}
.fc-provide-box:hover { border-color: var(--border-h); transform: translateY(-3px); }
.fc-provide-box .provide-icon { margin-bottom: 14px; }
.fc-provide-box .provide-icon img { height: 36px; filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(130deg) brightness(104%) contrast(101%); }
.fc-provide-box h6 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); margin-bottom: 8px; }
.fc-provide-box p { font-size: 0.82rem; color: var(--text-2); line-height: 1.6; margin-bottom: 16px; }

/* Feature list */
.feature-list { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 12px; }
.feature-list li {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 0.87rem; color: var(--text-2); line-height: 1.5;
}
.feature-list li::before {
    content: ''; flex-shrink: 0; margin-top: 5px;
    width: 16px; height: 16px; border-radius: 50%;
    background: var(--bg-glass2); border: 1px solid var(--border-h);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
    background-size: 10px; background-repeat: no-repeat; background-position: center;
}

/* ══════════════════════════════════════
   5. HOW IT WORKS
══════════════════════════════════════ */
.fc-how { padding: 80px 0; background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2px; background: var(--border); }
.step-card {
    background: var(--bg-card); padding: 36px 28px;
    transition: background .2s;
}
.step-card:hover { background: var(--bg-glass2); }
.step-num {
    font-family: var(--font-head); font-size: 3rem; font-weight: 800;
    color: var(--accent); opacity: 0.15; line-height: 1; margin-bottom: 16px;
    display: block;
}
.step-card h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 10px; }
.step-card p { font-size: 0.83rem; color: var(--text-2); line-height: 1.65; margin-bottom: 16px; }

/* ══════════════════════════════════════
   6. PARTNERS
══════════════════════════════════════ */
.fc-partners { padding: 60px 0; }
.partners-label {
    font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em;
    color: var(--text-3); font-weight: 600; text-align: center; margin-bottom: 32px;
}
.partners-scroll {
    display: flex; align-items: center; gap: 48px;
    overflow-x: auto; scrollbar-width: none; padding-bottom: 8px;
}
.partners-scroll::-webkit-scrollbar { display: none; }
.partners-scroll img {
    height: 36px; width: auto; object-fit: contain;
    filter: brightness(0) invert(1); opacity: 0.25;
    flex-shrink: 0; transition: opacity .2s;
}
.partners-scroll img:hover { opacity: 0.6; }

/* ══════════════════════════════════════
   7. TESTIMONIALS
══════════════════════════════════════ */
.fc-testimonials { padding: 80px 0; }
.testimonial-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
.testimonial-card {
    background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-md); padding: 24px;
    display: flex; flex-direction: column; gap: 16px;
    transition: border-color .2s, transform .2s;
}
.testimonial-card:hover { border-color: var(--border-h); transform: translateY(-3px); }
.testimonial-head { display: flex; align-items: center; gap: 14px; }
.testimonial-head img {
    width: 48px; height: 48px; border-radius: 50%;
    object-fit: cover; border: 2px solid var(--border-h); flex-shrink: 0;
}
.testimonial-name { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-1); }
.testimonial-role { font-size: 0.75rem; color: var(--text-3); }
.testimonial-stars { color: var(--accent); font-size: 0.8rem; margin-left: auto; }
.testimonial-body p { font-size: 0.85rem; color: var(--text-2); line-height: 1.7; }
.testimonial-loc { font-size: 0.75rem; color: var(--text-3); display: flex; align-items: center; gap: 5px; }

/* ══════════════════════════════════════
   8. CTA BANNER
══════════════════════════════════════ */
.fc-cta {
    margin: 0 0 80px;
    background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-lg); padding: 56px 48px;
    position: relative; overflow: hidden;
}
.fc-cta::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0;
    height: 2px; background: linear-gradient(90deg, transparent, var(--accent), transparent);
}
.fc-cta-glow {
    position: absolute; top: -60px; right: -60px;
    width: 280px; height: 280px; border-radius: 50%;
    background: var(--accent-glow); filter: blur(80px); pointer-events: none;
}
.fc-cta h2 {
    font-family: var(--font-head); font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 800; color: var(--text-1); margin-bottom: 12px;
}
.fc-cta p { color: var(--text-2); font-size: 0.95rem; max-width: 480px; margin-bottom: 28px; }

/* ══════════════════════════════════════
   MOBILE ACCORDION
══════════════════════════════════════ */
.fc-accordion { padding: 48px 0; }
.fc-accordion .accordion-item {
    background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-md) !important; margin-bottom: 8px; overflow: hidden;
}
.fc-accordion .accordion-button {
    background: var(--bg-card); color: var(--text-1);
    font-family: var(--font-head); font-weight: 600; font-size: 0.9rem;
    box-shadow: none; padding: 18px 22px;
}
.fc-accordion .accordion-button:not(.collapsed) { color: var(--accent); background: var(--bg-glass2); }
.fc-accordion .accordion-button::after { filter: invert(1); }
.fc-accordion .accordion-collapse { border-top: 1px solid var(--border); }
.fc-accordion .accordion-body { padding: 24px; }
</style>

{{-- ════════════════════════════════════
     1. HERO
════════════════════════════════════ --}}
<section class="fc-hero">
    <div class="fc-hero-bg">
        <div id="heroBgCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="fc-hero-bg-slide" style="background-image: url('assets/img/banner-hero.jpg');"></div>
                </div>
                <div class="carousel-item">
                    <div class="fc-hero-bg-slide">
                        <video autoplay muted loop playsinline>
                            <source src="assets/img/banner-video.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="fc-hero-bg-slide" style="background-image: url('assets/img/provide-bg.jpg');"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="fc-hero-overlay"></div>
    <div class="fc-hero-grid"></div>

    <div class="container fc-hero-content">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <p class="hero-eyebrow">Skills Marketplace</p>
                <h1>On-Demand <span class="hl">Services</span> for Your Every Need</h1>
                <p>We pride ourselves on offering a seamless, secure, and efficient experience. Browse thousands of verified talents, read reviews, and grow with a community built for your success.</p>
                <div class="hero-ctas">
                    <a href="{{ route('user.talents') }}" class="btn-fc-primary">
                        Explore Services <i class="ti ti-arrow-right"></i>
                    </a>
                    <a href="{{ route('register') }}" class="btn-fc-outline">
                        Join Free <i class="ti ti-user-plus"></i>
                    </a>
                </div>
                <div class="hero-stats">
                    <div>
                        <div class="hero-stat-val">{{ $totalTalents }}+</div>
                        <div class="hero-stat-lbl">Skilled Professionals</div>
                    </div>
                    <div>
                        <div class="hero-stat-val">{{ $partners->count() }}+</div>
                        <div class="hero-stat-lbl">Trusted Partners</div>
                    </div>
                    <div>
                        <div class="hero-stat-val">4.8</div>
                        <div class="hero-stat-lbl">Average Rating</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    new bootstrap.Carousel(document.querySelector('#heroBgCarousel'), { interval: 6000, pause: false });
</script>

{{-- ════════════════════════════════════
     2. FEATURE STRIP
════════════════════════════════════ --}}
<div class="fc-feature-strip">
    <div class="container">
        <div class="feature-strip-grid">
            <div class="feature-strip-item">
                <div class="strip-icon"><i class="ti ti-rocket"></i></div>
                <h5>Skills Marketplace</h5>
                <p>Stand out and reach 3× more employers. Boost your profile, get verified, and feature your story.</p>
                <a href="{{ route('user.talents') }}" class="strip-link">Explore Marketplace <i class="ti ti-arrow-right"></i></a>
            </div>
            <div class="feature-strip-item">
                <div class="strip-icon"><i class="ti ti-briefcase"></i></div>
                <h5>Unlock Opportunities</h5>
                <p>Discover tailored job listings, collaboration projects, and freelance gigs matched to your skills.</p>
                <a href="#features" class="strip-link">Start Exploring <i class="ti ti-arrow-right"></i></a>
            </div>
            <div class="feature-strip-item">
                <div class="strip-icon"><i class="ti ti-users"></i></div>
                <h5>Expand Your Network</h5>
                <p>Connect with professionals, mentors, and peers. Join groups and build relationships that matter.</p>
                <a href="#features" class="strip-link">Join Community <i class="ti ti-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>

{{-- ════════════════════════════════════
     3. TRENDING CATEGORIES
════════════════════════════════════ --}}
<section class="fc-categories">
    <div class="container">
        <div class="row align-items-end mb-5">
            <div class="col-md-8">
                <div class="fc-section-head" style="margin-bottom:0">
                    <span class="eyebrow">Browse Categories</span>
                    <h2>Trending Skills for Today's Market</h2>
                    <p>Explore the most sought-after skills and connections in today's job market.</p>
                </div>
            </div>
            <div class="col-md-4 text-md-end">
                <a href="{{ route('user.talents') }}" class="btn-fc-outline" style="font-size:0.8rem; padding:9px 20px;">
                    All Categories <i class="ti ti-arrow-right"></i>
                </a>
            </div>
        </div>
        <div class="category-scroll">
            @foreach($categories as $cat)
            <a href="{{ route('user.talents.category', $cat->slug) }}" class="cat-pill">
                <span class="cat-pill-name">{{ $cat->name }}</span>
                <span class="cat-pill-count">{{ $cat->talents_count ?? 0 }} talents</span>
                <span class="cat-pill-arrow"><i class="ti ti-arrow-right"></i></span>
            </a>
            @endforeach
        </div>
    </div>
</section>

{{-- ════════════════════════════════════
     4. FEATURES TABS (DESKTOP)
════════════════════════════════════ --}}
<section class="fc-features d-none d-lg-block" id="features">
    <div class="container">
        <div class="fc-section-head">
            <span class="eyebrow">Platform Features</span>
            <h2>Explore Future Connect</h2>
            <p>Everything you need to grow your career, showcase your skills, and connect with the right people.</p>
        </div>

        <div class="fc-tab-bar" role="tablist">
            <button class="fc-tab-btn active" data-fctab="skills">Skills</button>
            <button class="fc-tab-btn" data-fctab="learning">Learning</button>
            <button class="fc-tab-btn" data-fctab="opportunity">Opportunities</button>
            <button class="fc-tab-btn" data-fctab="connect">Connect</button>
            <button class="fc-tab-btn" data-fctab="marketplace">Marketplace</button>
        </div>

        {{-- Skills --}}
        <div class="fc-tab-panel active" id="fctab-skills">
            <div class="feature-panel-card">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <span class="fc-badge mb-3"><i class="ti ti-sparkles"></i> Skills Marketplace</span>
                        <h2>Showcase your talent <span>and</span> reach verified employers.</h2>
                        <p>Future Connect's Skills Marketplace empowers professionals to present verified skills, attract clients, and secure freelance or full-time work opportunities.</p>
                        <ul class="feature-list">
                            <li>Get verified and build trust with employers</li>
                            <li>Feature your story on our homepage</li>
                            <li>Reach 3× more clients with a boosted profile</li>
                        </ul>
                        <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap;">
                            <a href="{{ route('user.talents') }}" class="btn-fc-primary">Explore Marketplace <i class="ti ti-arrow-right"></i></a>
                            <div style="display:flex; align-items:center; gap:12px;">
                                <div class="avatar-stack">
                                    @foreach($featuredTalents as $t)
                                    <img src="{{ $t->image ? asset('image/talents/'.$t->image) : asset('assets/img/user/profile.jpg') }}" alt="">
                                    @endforeach
                                </div>
                                <div>
                                    <div style="color:var(--accent); font-size:0.8rem;">★★★★★ 4.8/5</div>
                                    <div style="font-size:0.72rem; color:var(--text-3);">{{ $totalTalents }}+ professionals</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 feature-img-wrap">
                        <img src="assets/img/home/banner-image.svg" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>

        {{-- Learning --}}
        <div class="fc-tab-panel" id="fctab-learning">
            <div class="feature-panel-card">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <span class="fc-badge mb-3"><i class="ti ti-school"></i> Learning Center</span>
                        <h2>Upskill with short, impactful <span>professional courses.</span></h2>
                        <p>The Learning Center brings together experts and learners for short, affordable, high-quality experiences — designed for practical application so you can implement knowledge immediately.</p>
                        <ul class="feature-list">
                            <li>Short, high-impact micro-courses</li>
                            <li>Expert instructors from your industry</li>
                            <li>Certificates you can share on your profile</li>
                        </ul>
                        <a href="{{ route('user.courses') }}" class="btn-fc-primary">Explore Courses <i class="ti ti-arrow-right"></i></a>
                    </div>
                    <div class="col-lg-6 feature-img-wrap">
                        <img src="assets/img/banner-img.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>

        {{-- Opportunities --}}
        <div class="fc-tab-panel" id="fctab-opportunity">
            <div class="feature-panel-card">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <span class="fc-badge mb-3"><i class="ti ti-briefcase"></i> Opportunities</span>
                        <h2>Post work, find collaborators, <span>and build</span> your dream team.</h2>
                        <ul class="feature-list">
                            <li>Post freelance gigs and full-time roles</li>
                            <li>Find verified collaborators in one network</li>
                            <li>Set job alerts so you never miss a match</li>
                        </ul>
                        <a href="{{ route('user.talents') }}" class="btn-fc-primary">Explore Works <i class="ti ti-arrow-right"></i></a>
                    </div>
                    <div class="col-lg-6 feature-img-wrap">
                        <img src="assets/img/banner-img.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>

        {{-- Connect --}}
        <div class="fc-tab-panel" id="fctab-connect">
            <div class="feature-panel-card">
                <div class="row align-items-center g-5">
                    <div class="col-lg-5">
                        <div class="row g-3">
                            <div class="col-6">
                                <img src="assets/img/aboutus/about-us-01.jpg" alt="" class="img-fluid" style="border-radius: var(--r-md);">
                            </div>
                            <div class="col-6 d-flex flex-column gap-3">
                                <img src="assets/img/aboutus/about-us-02.jpg" alt="" class="img-fluid" style="border-radius: var(--r-md);">
                                <img src="assets/img/aboutus/about-us-03.jpg" alt="" class="img-fluid" style="border-radius: var(--r-md);">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <span class="fc-badge mb-3"><i class="ti ti-users"></i> Connection Room</span>
                        <h2>Network and collaborate <span>securely</span> with verified users.</h2>
                        <p>The Connect Room offers a secure messaging and meeting system for verified professionals. Build meaningful relationships, exchange ideas, or schedule mentorship calls.</p>
                        <ul class="feature-list">
                            <li>Diverse network of verified professionals</li>
                            <li>Trust and transparency at every step</li>
                            <li>User-friendly, innovation-driven platform</li>
                        </ul>
                        <a href="{{ route('user.talents') }}" class="btn-fc-primary">Join Community <i class="ti ti-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>

        {{-- Marketplace --}}
        <div class="fc-tab-panel" id="fctab-marketplace">
            <div class="feature-panel-card">
                <span class="fc-badge mb-3"><i class="ti ti-shopping-bag"></i> Marketplace</span>
                <h2>We're here to help <span>find your needs.</span></h2>
                <p>Our Marketplace lets creators showcase digital products — from templates to tools — with full payment protection via the platform.</p>
                <div class="fc-provide-grid">
                    <div class="fc-provide-box">
                        <div class="provide-icon"><img src="assets/img/icons/ipad-icon.svg" alt=""></div>
                        <h6>Browse Products</h6>
                        <p>Everything you need for your craft — safe payments through Future Connect.</p>
                        <a href="{{ route('user.products.index') }}" class="btn-fc-primary" style="font-size:0.8rem; padding:9px 18px;">Explore <i class="ti ti-arrow-right"></i></a>
                    </div>
                    <div class="fc-provide-box">
                        <div class="provide-icon"><img src="assets/img/icons/service-icon.svg" alt=""></div>
                        <h6>Sell a Product</h6>
                        <p>Showcase your digital products to thousands of buyers on the platform.</p>
                        <a href="#" class="btn-fc-outline" style="font-size:0.8rem; padding:9px 18px;">Learn More <i class="ti ti-arrow-right"></i></a>
                    </div>
                    <div class="fc-provide-box">
                        <div class="provide-icon"><img src="assets/img/icons/user-icon-01.svg" alt=""></div>
                        <h6>Become a Seller</h6>
                        <p>Sellers earn instantly — FC keeps a small fee for logistics and support.</p>
                        <a class="btn-fc-primary" data-bs-toggle="modal" data-bs-target="#applySellerModal" style="font-size:0.8rem; padding:9px 18px;">Apply <i class="ti ti-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

{{-- ════════════════════════════════════
     4b. FEATURES ACCORDION (MOBILE)
════════════════════════════════════ --}}
<div class="fc-accordion d-lg-none">
    <div class="container">
        <div class="fc-section-head">
            <span class="eyebrow">Platform Features</span>
            <h2>Explore Future Connect</h2>
        </div>
        <div class="accordion" id="fcAccordion">
            @php
            $panels = [
                ['id'=>'accSkills',   'label'=>'Skills Marketplace',  'icon'=>'ti-sparkles',  'route'=>route('user.talents'),  'cta'=>'Explore Marketplace'],
                ['id'=>'accLearn',    'label'=>'Learning Center',      'icon'=>'ti-school',    'route'=>route('user.courses'),  'cta'=>'Explore Courses'],
                ['id'=>'accOpp',      'label'=>'Opportunities',        'icon'=>'ti-briefcase', 'route'=>route('user.talents'),  'cta'=>'Explore Works'],
                ['id'=>'accConnect',  'label'=>'Connection Room',      'icon'=>'ti-users',     'route'=>route('user.talents'),  'cta'=>'Join Community'],
            ];
            $descs = [
                'Stand out and reach 3× more employers. Get verified and feature your story on our homepage.',
                'Short, affordable, high-quality learning designed for practical application.',
                'Post work, find collaborators, and build your dream team in one verified network.',
                'Secure messaging and meeting system for verified professionals.',
            ];
            @endphp
            @foreach($panels as $i => $panel)
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button {{ $i !== 0 ? 'collapsed' : '' }}"
                        data-bs-toggle="collapse" data-bs-target="#{{ $panel['id'] }}">
                        <i class="ti {{ $panel['icon'] }} me-2" style="color:var(--accent)"></i>
                        {{ $panel['label'] }}
                    </button>
                </h2>
                <div id="{{ $panel['id'] }}" class="accordion-collapse collapse {{ $i === 0 ? 'show' : '' }}" data-bs-parent="#fcAccordion">
                    <div class="accordion-body">
                        <p style="font-size:0.85rem; color:var(--text-2); margin-bottom:16px;">{{ $descs[$i] }}</p>
                        <a href="{{ $panel['route'] }}" class="btn-fc-primary" style="font-size:0.82rem; padding:10px 20px;">
                            {{ $panel['cta'] }} <i class="ti ti-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>

{{-- ════════════════════════════════════
     5. HOW IT WORKS
════════════════════════════════════ --}}
<section class="fc-how">
    <div class="container">
        <div class="fc-section-head text-center" style="max-width:600px; margin:0 auto 48px;">
            <span class="eyebrow">How It Works</span>
            <h2>Get Started in 3 Simple Steps</h2>
        </div>
        <div class="steps-grid">
            <div class="step-card">
                <span class="step-num">01</span>
                <h5>Create Your Profile</h5>
                <p>Sign up and showcase your story, skills, and aspirations through text, images, and video.</p>
                <a href="{{ route('register') }}" class="strip-link">Get Started <i class="ti ti-arrow-right"></i></a>
            </div>
            <div class="step-card">
                <span class="step-num">02</span>
                <h5>Get Discovered & Rated</h5>
                <p>Employers browse skills by category, rate your profile, and share feedback to help you grow.</p>
                <a href="{{ route('user.talents') }}" class="strip-link">Explore Skills <i class="ti ti-arrow-right"></i></a>
            </div>
            <div class="step-card">
                <span class="step-num">03</span>
                <h5>Grow with the Community</h5>
                <p>Connect, collaborate, and access learning resources. Shop or sell tools from local creators.</p>
                <a href="{{ route('user.talents') }}" class="strip-link">Join Now <i class="ti ti-arrow-right"></i></a>
            </div>
        </div>
    </div>
</section>

{{-- ════════════════════════════════════
     6. PARTNERS
════════════════════════════════════ --}}
@if($partners->count())
<section class="fc-partners">
    <div class="container">
        <p class="partners-label">Trusted by {{ $partners->count() }}+ Partners Worldwide</p>
        <div class="partners-scroll">
            @foreach($partners as $partner)
            <img src="{{ $partner->logo ? asset('image/partners/'.$partner->logo) : asset('/assets/img/company/logo.svg') }}"
                 alt="{{ $partner->name ?? 'Partner' }}">
            @endforeach
        </div>
    </div>
</section>
@endif

{{-- ════════════════════════════════════
     7. TESTIMONIALS
════════════════════════════════════ --}}
<section class="fc-testimonials">
    <div class="container">
        <div class="row align-items-end mb-5">
            <div class="col-md-7">
                <div class="fc-section-head" style="margin-bottom:0">
                    <span class="eyebrow">Testimonials</span>
                    <h2>What Talents Say About Future Connect</h2>
                    <p>Voices of passionate individuals whose lives have been impacted by sharing their skills and stories.</p>
                </div>
            </div>
            <div class="col-md-5 text-md-end">
                <div class="avatar-stack" style="justify-content: flex-end; margin-bottom:8px;">
                    @foreach($testimonials as $t)
                    <img src="{{ $t->talent->image ? asset('image/talents/'.$t->talent->image) : asset('assets/img/user/profile.jpg') }}" alt="">
                    @endforeach
                </div>
                <p style="font-size:0.75rem; color:var(--text-3);">Building a Global Talent Community</p>
            </div>
        </div>

        {{-- Desktop grid --}}
        <div class="testimonial-grid d-none d-md-grid">
            @foreach($testimonials as $test)
            <div class="testimonial-card">
                <div class="testimonial-head">
                    <img src="{{ $test->talent->image ? asset('image/talents/'.$test->talent->image) : asset('assets/img/user/profile.jpg') }}" alt="">
                    <div>
                        <div class="testimonial-name">{{ $test->talent->name ?? 'Talent' }}</div>
                        <div class="testimonial-role">{{ $test->title ?? 'Creative Professional' }}</div>
                    </div>
                    <div class="testimonial-stars">
                        @for($i=0;$i<5;$i++){{ $i<$test->rating?'★':'☆' }}@endfor
                    </div>
                </div>
                <div class="testimonial-body">
                    <p>{{ $test->content ?? 'Passionate professional making a difference on Future Connect.' }}</p>
                </div>
                <div class="testimonial-loc">
                    <i class="ti ti-map-pin" style="color:var(--accent)"></i>
                    {{ $test->talent->address ?? 'Kigali, Rwanda' }}
                </div>
            </div>
            @endforeach
        </div>

        {{-- Mobile carousel --}}
        <div id="testimonialCarousel" class="carousel slide d-md-none" data-bs-ride="carousel" data-bs-interval="6000">
            <div class="carousel-inner">
                @foreach($testimonials as $i => $test)
                <div class="carousel-item {{ $i === 0 ? 'active' : '' }}">
                    <div class="testimonial-card" style="margin:0 auto; max-width:380px;">
                        <div class="testimonial-head">
                            <img src="{{ $test->talent->image ? asset('image/talents/'.$test->talent->image) : asset('assets/img/user/profile.jpg') }}" alt="">
                            <div>
                                <div class="testimonial-name">{{ $test->talent->name ?? 'Talent' }}</div>
                                <div class="testimonial-role">{{ $test->title ?? 'Creative Professional' }}</div>
                            </div>
                            <div class="testimonial-stars">
                                @for($i2=0;$i2<5;$i2++){{ $i2<$test->rating?'★':'☆' }}@endfor
                            </div>
                        </div>
                        <div class="testimonial-body">
                            <p>{{ $test->content ?? 'Passionate professional making a difference on Future Connect.' }}</p>
                        </div>
                        <div class="testimonial-loc">
                            <i class="ti ti-map-pin" style="color:var(--accent)"></i>
                            {{ $test->talent->address ?? 'Kigali, Rwanda' }}
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</section>

{{-- ════════════════════════════════════
     8. FIND SKILLS CTA BAND
════════════════════════════════════ --}}
<div class="container">
    <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--r-lg); padding:40px 36px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:24px; margin-bottom:60px; position:relative; overflow:hidden;">
        <div style="position:absolute;top:-40px;left:-40px;width:200px;height:200px;background:var(--accent-glow);filter:blur(60px);border-radius:50%;pointer-events:none;"></div>
        <div style="position:relative;">
            <h3 style="font-family:var(--font-head);font-weight:800;color:var(--text-1);margin-bottom:8px;">Find the right skills for your needs</h3>
            <p style="color:var(--text-2);font-size:0.9rem;margin:0;">Over {{ $totalTalents }}K skills available today for you.</p>
        </div>
        <a href="{{ route('user.talents') }}" class="btn-fc-primary" style="position:relative;">
            Explore Skills Hub <i class="ti ti-arrow-right"></i>
        </a>
    </div>
</div>

{{-- ════════════════════════════════════
     9. CTA JOIN BANNER
════════════════════════════════════ --}}
<div class="container">
    <div class="fc-cta">
        <div class="fc-cta-glow"></div>
        <div class="row align-items-center">
            <div class="col-md-7" style="position:relative;">
                <span class="eyebrow" style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent); font-weight:600; display:block; margin-bottom:12px;">Join Future Connect</span>
                <h2>Showcase your talent, share your story, and inspire others.</h2>
                <p>Be part of a community that empowers growth and recognition. Your journey starts here.</p>
                <div class="hero-ctas" style="margin-bottom:0;">
                    <a href="{{ route('register') }}" class="btn-fc-primary">Get Started <i class="ti ti-arrow-right"></i></a>
                    <a href="{{ route('user.talents') }}" class="btn-fc-outline">Browse Talents</a>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
    // ── Feature tabs ──
    document.querySelectorAll('.fc-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.fc-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.fc-tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const panel = document.getElementById('fctab-' + btn.dataset.fctab);
            if (panel) panel.classList.add('active');
        });
    });
});
</script>

@endsection