@extends('layouts.guest')
@section('title', 'Learning Center and Courses')
@section('content')

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<style>
  :root {
    --bg:         #0e1618;
    --bg2:        #131d20;
    --bg3:        #18242a;
    --border:     rgba(255,255,255,0.07);
    --green:      #48d597;
    --green-dim:  rgba(0,166,103,0.12);
    --green-glow: rgba(0,166,103,0.3);
    --text:       #e8eef0;
    --muted:      #7a9199;
    --white:      #ffffff;
    --font-head:  'Syne', sans-serif;
    --font-body:  'DM Sans', sans-serif;
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
    background: radial-gradient(ellipse, rgba(0,166,103,0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Grid lines decoration */
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
    margin-bottom: 32px;
    position: relative; z-index: 1;
  }

  .hero-cta-row {
    display: flex; gap: 12px; flex-wrap: wrap;
    position: relative; z-index: 1;
  }

  /* Hero cards */
  .hero-info-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    position: relative; z-index: 1;
  }

  .hi-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px 18px;
    transition: var(--t);
  }

  .hi-card:hover { border-color: rgba(0,166,103,0.3); transform: translateY(-2px); }

  .hi-card-icon {
    width: 36px; height: 36px;
    background: var(--green-dim);
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

  /* Mobile hero carousel */
  .m-hero-card {
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 28px 22px;
    text-align: center;
    position: relative; z-index: 1;
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

  /* Carousel indicators */
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

  .section-title {
    font-family: var(--font-head);
    font-size: clamp(1.3rem, 2.5vw, 1.9rem);
    font-weight: 800; color: var(--white);
    letter-spacing: -0.02em; margin-bottom: 6px;
  }

  .section-sub { color: var(--muted); font-size: 0.9rem; }

  /* ─── CATEGORY STRIP ─── */
  .cat-strip { padding: 48px 0 0; }

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

  /* Desktop category cards */
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

  /* ─── FILTER BAR ─── */
  .filter-bar {
    background: var(--bg2); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 14px 20px;
    display: flex; align-items: center; flex-wrap: wrap;
    gap: 10px; justify-content: space-between;
    margin-bottom: 28px;
  }

  .filter-tabs { display: flex; gap: 6px; flex-wrap: wrap; }

  .filter-tab {
    padding: 7px 16px; border-radius: 50px;
    font-size: 0.78rem; font-weight: 600;
    border: 1px solid var(--border);
    background: transparent; color: var(--muted);
    cursor: pointer; transition: var(--t);
  }
  .filter-tab:hover { border-color: var(--green); color: var(--green); }
  .filter-tab.active {
    background: var(--green); border-color: var(--green);
    color: #fff; box-shadow: 0 0 10px var(--green-glow);
  }

  .courses-count {
    font-size: 0.8rem; color: var(--muted);
  }
  .courses-count strong { color: var(--green); font-family: var(--font-head); }

  /* ─── COURSE CARDS ─── */
  .course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
  }

  .course-card {
    background: var(--bg2); border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden; display: flex; flex-direction: column;
    transition: transform var(--t), border-color var(--t), box-shadow var(--t);
  }

  .course-card:hover {
    transform: translateY(-5px);
    border-color: rgba(0,166,103,0.35);
    box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  }

  /* Thumbnail */
  .course-thumb {
    position: relative; overflow: hidden;
    height: 190px;
  }

  .course-thumb img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.4s ease;
  }

  .course-card:hover .course-thumb img { transform: scale(1.06); }

  .course-thumb-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(14,22,24,0.7) 0%, transparent 50%);
  }

  .thumb-badge {
    position: absolute; top: 12px; left: 12px;
    background: var(--green); color: #fff;
    font-size: 0.7rem; font-weight: 700;
    padding: 4px 10px; border-radius: 50px;
    letter-spacing: 0.05em;
  }

  .thumb-price {
    position: absolute; bottom: 12px; right: 12px;
    background: var(--bg2); color: var(--green);
    font-family: var(--font-head); font-size: 0.88rem; font-weight: 800;
    padding: 4px 12px; border-radius: 50px;
    border: 1px solid rgba(0,166,103,0.3);
  }

  /* Body */
  .course-body { padding: 18px; flex: 1; display: flex; flex-direction: column; }

  .course-cat {
    font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--green); margin-bottom: 8px;
    text-decoration: none;
  }

  .course-title {
    font-family: var(--font-head); font-size: 0.95rem; font-weight: 700;
    color: var(--white); margin-bottom: 12px; line-height: 1.4;
    text-decoration: none; display: block;
    overflow: hidden; display: -webkit-box;
    -webkit-line-clamp: 2; -webkit-box-orient: vertical;
    transition: color var(--t);
  }
  .course-title:hover { color: var(--green); }

  /* Rating row */
  .course-rating {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.78rem; color: var(--muted);
    margin-bottom: 14px;
  }

  .course-rating .stars { color: #f59e0b; font-size: 11px; }
  .course-rating .score { color: var(--text); font-weight: 600; }

  /* Instructor row */
  .course-instructor {
    display: flex; align-items: center; gap: 10px;
    padding-top: 14px; margin-top: auto;
    border-top: 1px solid var(--border);
  }

  .inst-avatar {
    width: 30px; height: 30px;
    border-radius: 50%; object-fit: cover;
    border: 1px solid var(--border);
  }

  .inst-info { flex: 1; min-width: 0; }
  .inst-name { font-size: 0.78rem; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .inst-loc  { font-size: 0.7rem; color: var(--muted); }

  .course-view-btn {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--green-dim); border: 1px solid rgba(0,166,103,0.2);
    color: var(--green); border-radius: 50px;
    padding: 6px 14px; font-size: 0.75rem; font-weight: 700;
    text-decoration: none; transition: var(--t); flex-shrink: 0;
  }
  .course-view-btn:hover { background: var(--green); color:#fff; border-color:var(--green); }

  /* Empty state */
  .empty-state {
    grid-column: 1/-1; text-align: center;
    padding: 80px 20px; color: var(--muted);
  }
  .empty-state i { font-size: 3rem; color: var(--border); display: block; margin-bottom: 16px; }
  .empty-state h4 { font-family: var(--font-head); color: var(--text); margin-bottom: 8px; }

  /* ─── PAGINATION ─── */
  .pagination-wrap {
    display: flex; justify-content: center;
    gap: 8px; margin-top: 48px; flex-wrap: wrap;
  }

  .page-btn {
    width: 38px; height: 38px;
    display: flex; align-items: center; justify-content: center;
    border-radius: var(--radius); border: 1px solid var(--border);
    background: var(--bg2); color: var(--text);
    font-size: 0.85rem; cursor: pointer; text-decoration: none;
    transition: var(--t);
  }
  .page-btn:hover, .page-btn.active {
    border-color: var(--green); color: var(--green); background: var(--green-dim);
  }
  .page-btn.disabled { opacity: 0.3; pointer-events: none; }

  .section-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }
</style>


<!-- ═══ HERO ═══ -->
<section class="lc-hero">
  <div class="container">
    <div class="row align-items-center g-5">

      <!-- Left -->
      <div class="col-lg-6">
        <div class="hero-eyebrow"><span></span> Learning Center</div>
        <h1>
          Where <span class="accent">knowledge</span><br>meets opportunity
        </h1>
        <p class="hero-sub">
          Explore courses and learning materials crafted by skilled professionals — enhance your skills and advance your career today.
        </p>
        <div class="hero-cta-row">
          <a href="#courses" class="btn-green"><i class="ti ti-book-2"></i> Explore Courses</a>
          <a href="{{ route('register') }}" class="btn-outline"><i class="ti ti-users"></i> Join Platform</a>
        </div>
      </div>

      <!-- Right (desktop) -->
      <div class="col-lg-6 d-none d-lg-block">
        <div class="hero-info-cards">
          <div class="hi-card">
            <div class="hi-card-icon"><i class="ti ti-certificate"></i></div>
            <h6>Certified Courses</h6>
            <p>Learn from verified professionals with recognized certifications.</p>
            <a href="#courses">Browse now <i class="ti ti-arrow-right"></i></a>
          </div>
          <div class="hi-card">
            <div class="hi-card-icon"><i class="ti ti-clock"></i></div>
            <h6>Learn at Your Pace</h6>
            <p>All courses available on-demand, accessible anytime anywhere.</p>
            <a href="#courses">Get started <i class="ti ti-arrow-right"></i></a>
          </div>
          <div class="hi-card">
            <div class="hi-card-icon"><i class="ti ti-currency-dollar"></i></div>
            <h6>Free &amp; Paid Content</h6>
            <p>Access free courses or invest in premium skill-building content.</p>
            <a href="#courses">Explore free <i class="ti ti-arrow-right"></i></a>
          </div>
          <div class="hi-card">
            <div class="hi-card-icon"><i class="ti ti-world"></i></div>
            <h6>Africa-Focused</h6>
            <p>Skills and insights tailored for professionals across Africa.</p>
            <a href="{{ route('register') }}">Join community <i class="ti ti-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <!-- Mobile carousel -->
      <div class="col-12 d-lg-none">
        <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div class="carousel-indicators" style="bottom:-30px;">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="m-hero-card">
                <div class="hi-card-icon mx-auto mb-3"><i class="ti ti-book-2"></i></div>
                <h4>Knowledge Meets Opportunity</h4>
                <p>Explore courses and categories to enhance your skills and advance your career.</p>
                <a href="#courses" class="btn-green mx-auto">Explore Courses</a>
              </div>
            </div>
            <div class="carousel-item">
              <div class="m-hero-card">
                <div class="hi-card-icon mx-auto mb-3"><i class="ti ti-users"></i></div>
                <h4>Unlock New Opportunities</h4>
                <p>Join the platform and share your skills with the community.</p>
                <a href="{{ route('register') }}" class="btn-green mx-auto">Join Platform</a>
              </div>
            </div>
          </div>
        </div>
        <div style="height:40px;"></div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ STATS BAR ═══ -->
<div class="stats-bar">
  <div class="container">
    <div class="row g-0">
      <div class="col-6 col-md-3">
        <div class="stat-item"><span class="stat-num">{{ $courses->total() }}<span style="color:var(--green);">+</span></span><span class="stat-label">Courses</span></div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-item"><span class="stat-num">{{ $categories->count() }}<span style="color:var(--green);">+</span></span><span class="stat-label">Categories</span></div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-item"><span class="stat-num">74K<span style="color:var(--green);">+</span></span><span class="stat-label">Learners</span></div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-item"><span class="stat-num">Free<span style="color:var(--green);">+</span></span><span class="stat-label">Content Available</span></div>
      </div>
    </div>
  </div>
</div>

<div class="section-divider"></div>

<!-- ═══ CATEGORIES ═══ -->
<div class="cat-strip">
  <div class="container">
    <div class="section-label">Browse</div>
    <div class="section-title">Trending Learning Categories</div>
    <p class="section-sub">View all learning materials and courses offered by skilled people</p>

    <!-- Mobile: horizontal scroll chips -->
    <div class="cat-scroll d-lg-none">
      @foreach($categories as $category)
        <a href="{{ url('/courses/category/' . $category->slug) }}" class="cat-chip">
          {{ $category->name }}
          <span style="color:var(--green); margin-left:4px;">({{ $category->courses->count() }})</span>
        </a>
      @endforeach
    </div>

    <!-- Desktop: card grid -->
    <div class="cat-cards-grid d-none d-lg-grid">
      @foreach($categories as $category)
        <a href="{{ url('/courses/category/' . $category->slug) }}" class="cat-card-item">
          <div class="cci-icon"><i class="ti ti-book"></i></div>
          <div class="cci-name">{{ $category->name }}</div>
          <div class="cci-count">{{ $category->courses->count() }} courses</div>
        </a>
      @endforeach
    </div>
  </div>
</div>

<div class="section-divider" style="margin-top:48px;"></div>

<!-- ═══ COURSES LISTING ═══ -->
<div class="container py-5" id="courses">

  <!-- Header -->
  <div class="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
    <div>
      <div class="section-label">Courses</div>
      <div class="section-title">
        Learning Center &amp; Courses
      </div>
      <p class="section-sub">
        Browse listing &amp; more —
        <strong style="color:var(--green); font-family:var(--font-head);">{{ $courses->total() }} courses</strong>
        available
      </p>
    </div>
  </div>

  <!-- Filter bar -->
  <div class="filter-bar">
    <div class="filter-tabs">
      <button class="filter-tab active" data-filter="all">All</button>
      <button class="filter-tab" data-filter="latest">Latest</button>
      <button class="filter-tab" data-filter="popular">Popular</button>
      <button class="filter-tab" data-filter="featured">Featured</button>
      <button class="filter-tab" data-filter="recommended">Recommended</button>
    </div>
    <span class="courses-count d-none d-md-block">
      Showing <strong>{{ $courses->count() }}</strong> of <strong>{{ $courses->total() }}</strong> courses
    </span>
  </div>

  <!-- Course grid -->
  <div class="course-grid" id="courseGrid">
    @forelse($courses as $course)
    <div class="course-item" data-category="{{ strtolower($course->tag ?? 'featured') }}">
      <div class="course-card">

        <!-- Thumbnail -->
        <div class="course-thumb">
          <a href="{{ route('user.courses.show', $course->slug) }}">
            <img src="{{ asset('image/thumbnails/'.$course->thumbnail) }}"
                 alt="{{ $course->title }}">
          </a>
          <div class="course-thumb-overlay"></div>
          <span class="thumb-badge">{{ $course->category->name ?? 'Course' }}</span>
          <span class="thumb-price">
            @if($course->is_free) Free @else ${{ number_format($course->price, 2) }} @endif
          </span>
        </div>

        <!-- Body -->
        <div class="course-body">
          <a href="{{ route('user.courses', ['category' => $course->category->slug]) }}" class="course-cat">
            {{ $course->category->name ?? '' }}
          </a>

          <a href="{{ route('user.courses.show', $course->slug) }}" class="course-title">
            {{ $course->title }}
          </a>

          <div class="course-rating">
            <span class="stars">
              @for($s=1; $s<=5; $s++)
                @if($s <= round($course->feedback->avg('rating') ?? 0))
                  <i class="ti ti-star-filled"></i>
                @else
                  <i class="ti ti-star"></i>
                @endif
              @endfor
            </span>
            <span class="score">{{ number_format($course->feedback->avg('rating') ?? 0, 1) }}</span>
            <span>({{ $course->feedback->count() }} reviews)</span>
          </div>

          <div class="course-instructor">
            <img class="inst-avatar"
                 src="{{ $course->talent->image ? asset('image/talents/'.$course->talent->image) : asset('assets/img/user/profile.jpg') }}"
                 alt="{{ $course->talent->name ?? '' }}">
            <div class="inst-info">
              <div class="inst-name">{{ $course->talent->name ?? 'Unknown' }}</div>
              <div class="inst-loc">
                <i class="ti ti-map-pin" style="font-size:10px;"></i>
                {{ $course->talent->region ?? 'N/A' }}
              </div>
            </div>
            <a href="{{ route('user.courses.show', $course->slug) }}" class="course-view-btn">
              <i class="feather-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
    @empty
    <div class="empty-state">
      <i class="ti ti-books"></i>
      <h4>No courses found</h4>
      <p>Try a different category or check back later.</p>
    </div>
    @endforelse
  </div>

  <!-- Pagination -->
  @if($courses->hasPages())
  <div class="pagination-wrap">
    @if($courses->onFirstPage())
      <span class="page-btn disabled"><i class="ti ti-chevron-left"></i></span>
    @else
      <a href="{{ $courses->previousPageUrl() }}" class="page-btn"><i class="ti ti-chevron-left"></i></a>
    @endif

    @foreach($courses->getUrlRange(1, $courses->lastPage()) as $page => $url)
      <a href="{{ $url }}" class="page-btn {{ $page == $courses->currentPage() ? 'active' : '' }}">{{ $page }}</a>
    @endforeach

    @if($courses->hasMorePages())
      <a href="{{ $courses->nextPageUrl() }}" class="page-btn"><i class="ti ti-chevron-right"></i></a>
    @else
      <span class="page-btn disabled"><i class="ti ti-chevron-right"></i></span>
    @endif
  </div>
  @endif

</div>


<script>
document.addEventListener('DOMContentLoaded', () => {
  const tabs  = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.course-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
</script>

@endsection