import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

/**
 * Converted from resources/views/.../learning-center.blade.php
 *
 * Assumptions made during conversion — check these against your controller:
 *
 * 1. `courses` is a Laravel paginator (Course::paginate(...)), so Inertia sends it as
 *    { data, links, current_page, last_page, total, ... } — same shape issue as the
 *    Projects page. `courses.total()` -> `courses.total`, `courses.count()` (count of
 *    items on the current page) -> `courses.data.length`.
 *
 * 2. `$category->courses->count()` in the Blade file recomputes a live collection count
 *    per category on every render. That only works because Blade has the loaded
 *    relation in PHP; over JSON you'd normally send this precomputed. I'm reading
 *    `category.courses_count` (i.e. your controller should use
 *    `Category::withCount('courses')->get()`), falling back to `category.courses?.length`
 *    if you're instead sending the full loaded relation.
 *
 * 3. Same pattern for `$course->feedback->avg('rating')` / `->count()` — I'm reading
 *    `course.avg_rating` / `course.reviews_count` (e.g. via `withAvg('feedback',
 *    'rating')` + `withCount('feedback')` in the controller), falling back to computing
 *    from a loaded `course.feedback` array if that's what you send instead.
 *
 * 4. The category links (`url('/courses/category/'.$category->slug)`) had no named
 *    route in the original file, so they stay as plain path strings via Inertia's
 *    <Link>, e.g. `/courses/category/${category.slug}`. Swap for `route(...)` if you
 *    add a named route.
 *
 * 5. The filter tabs (All / Latest / Popular / Featured / Recommended) were pure
 *    client-side show/hide against `data-category` in the original — I kept that
 *    exact behavior (no server round-trip), now via React state instead of DOM
 *    class/style toggling.
 */
export default function LearningCenter({ courses, categories = [] }) {
  const courseList = courses?.data ?? [];
  const paginationLinks = courses?.links ?? [];
  const totalCourses = courses?.total ?? courseList.length;
  const currentPageCount = courseList.length;

  const [activeFilter, setActiveFilter] = useState('all');

  const visibleCourses = courseList.filter(
    (course) => activeFilter === 'all' || (course.tag ?? 'featured').toLowerCase() === activeFilter
  );

  function categoryCoursesCount(category) {
    return category.courses_count ?? category.courses?.length ?? 0;
  }

  function avgRating(course) {
    if (course.avg_rating != null) return Number(course.avg_rating);
    if (Array.isArray(course.feedback) && course.feedback.length) {
      return course.feedback.reduce((sum, f) => sum + f.rating, 0) / course.feedback.length;
    }
    return 0;
  }

  function reviewsCount(course) {
    if (course.reviews_count != null) return course.reviews_count;
    if (Array.isArray(course.feedback)) return course.feedback.length;
    return 0;
  }

  return (
    <>
      <Head title="Learning Center and Courses" />

      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>{`
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

        .course-rating {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.78rem; color: var(--muted);
          margin-bottom: 14px;
        }

        .course-rating .stars { color: #f59e0b; font-size: 11px; }
        .course-rating .score { color: var(--text); font-weight: 600; }

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

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg:         #f6faf8;
          --bg2:        #ffffff;
          --bg3:        #eef4f1;
          --border:     rgba(0, 100, 60, 0.1);
          --green:      #00a667;
          --green-dim:  rgba(0, 166, 103, 0.08);
          --green-glow: rgba(0, 166, 103, 0.22);
          --text:       #10201b;
          --muted:      #5b7a70;
          --white:      #10201b;
        }

        [data-h-theme="light"] body {
          background: var(--bg);
        }

        [data-h-theme="light"] .lc-hero::after {
          background-image:
            linear-gradient(rgba(0, 100, 60, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 100, 60, 0.06) 1px, transparent 1px);
        }

        [data-h-theme="light"] .lc-hero::before {
          background: radial-gradient(ellipse, rgba(0,166,103,0.08) 0%, transparent 70%);
        }

        [data-h-theme="light"] .course-thumb-overlay {
          background: linear-gradient(to top, rgba(16,32,27,0.35) 0%, transparent 50%);
        }

        [data-h-theme="light"] .thumb-price {
          border-color: rgba(0, 100, 60, 0.25);
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
                Explore courses and learning materials crafted by skilled professionals — enhance your skills and advance your career today.
              </p>
              <div className="hero-cta-row">
                <a href="#courses" className="btn-green"><i className="ti ti-book-2"></i> Explore Courses</a>
                <Link href={route('register')} className="btn-outline"><i className="ti ti-users"></i> Join Platform</Link>
              </div>
            </div>

            {/* Right (desktop) */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-info-cards">
                <div className="hi-card">
                  <div className="hi-card-icon"><i className="ti ti-certificate"></i></div>
                  <h6>Certified Courses</h6>
                  <p>Learn from verified professionals with recognized certifications.</p>
                  <a href="#courses">Browse now <i className="ti ti-arrow-right"></i></a>
                </div>
                <div className="hi-card">
                  <div className="hi-card-icon"><i className="ti ti-clock"></i></div>
                  <h6>Learn at Your Pace</h6>
                  <p>All courses available on-demand, accessible anytime anywhere.</p>
                  <a href="#courses">Get started <i className="ti ti-arrow-right"></i></a>
                </div>
                <div className="hi-card">
                  <div className="hi-card-icon"><i className="ti ti-currency-dollar"></i></div>
                  <h6>Free &amp; Paid Content</h6>
                  <p>Access free courses or invest in premium skill-building content.</p>
                  <a href="#courses">Explore free <i className="ti ti-arrow-right"></i></a>
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
                      <a href="#courses" className="btn-green mx-auto">Explore Courses</a>
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
              <div className="stat-item"><span className="stat-num">{categories.length}<span style={{ color: 'var(--green)' }}>+</span></span><span className="stat-label">Categories</span></div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item"><span className="stat-num">74K<span style={{ color: 'var(--green)' }}>+</span></span><span className="stat-label">Learners</span></div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item"><span className="stat-num">Free<span style={{ color: 'var(--green)' }}>+</span></span><span className="stat-label">Content Available</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* ═══ CATEGORIES ═══ */}
      <div className="cat-strip">
        <div className="container">
          <div className="section-label">Browse</div>
          <div className="section-title">Trending Learning Categories</div>
          <p className="section-sub">View all learning materials and courses offered by skilled people</p>

          {/* Mobile: horizontal scroll chips */}
          <div className="cat-scroll d-lg-none">
            {categories.map((category) => (
              <Link key={category.id} href={`/courses/category/${category.slug}`} className="cat-chip">
                {category.name}
                <span style={{ color: 'var(--green)', marginLeft: '4px' }}>({categoryCoursesCount(category)})</span>
              </Link>
            ))}
          </div>

          {/* Desktop: card grid */}
          <div className="cat-cards-grid d-none d-lg-grid">
            {categories.map((category) => (
              <Link key={category.id} href={`/courses/category/${category.slug}`} className="cat-card-item">
                <div className="cci-icon"><i className="ti ti-book"></i></div>
                <div className="cci-name">{category.name}</div>
                <div className="cci-count">{categoryCoursesCount(category)} courses</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider" style={{ marginTop: '48px' }}></div>

      {/* ═══ COURSES LISTING ═══ */}
      <div className="container py-5" id="courses">

        {/* Header */}
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
          <div>
            <div className="section-label">Courses</div>
            <div className="section-title">
              Learning Center &amp; Courses
            </div>
            <p className="section-sub">
              Browse listing &amp; more —{' '}
              <strong style={{ color: 'var(--green)', fontFamily: 'var(--font-head)' }}>{totalCourses} courses</strong>{' '}
              available
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="filter-bar">
          <div className="filter-tabs">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                className={`filter-tab${activeFilter === tab.value ? ' active' : ''}`}
                onClick={() => setActiveFilter(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <span className="courses-count d-none d-md-block">
            Showing <strong>{currentPageCount}</strong> of <strong>{totalCourses}</strong> courses
          </span>
        </div>

        {/* Course grid */}
        <div className="course-grid" id="courseGrid">
          {visibleCourses.length === 0 ? (
            <div className="empty-state">
              <i className="ti ti-books"></i>
              <h4>No courses found</h4>
              <p>Try a different category or check back later.</p>
            </div>
          ) : (
            visibleCourses.map((course) => (
              <div className="course-item" key={course.id}>
                <div className="course-card">

                  {/* Thumbnail */}
                  <div className="course-thumb">
                    <Link href={route('user.courses.show', course.slug)}>
                      <img src={`/image/thumbnails/${course.thumbnail}`} alt={course.title} />
                    </Link>
                    <div className="course-thumb-overlay"></div>
                    <span className="thumb-badge">{course.category?.name ?? 'Course'}</span>
                    <span className="thumb-price">
                      {course.is_free ? 'Free' : `$${Number(course.price).toFixed(2)}`}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="course-body">
                    <Link
                      href={route('user.courses', { category: course.category?.slug })}
                      className="course-cat"
                    >
                      {course.category?.name ?? ''}
                    </Link>

                    <Link href={route('user.courses.show', course.slug)} className="course-title">
                      {course.title}
                    </Link>

                    <div className="course-rating">
                      <span className="stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={i}
                            className={i < Math.round(avgRating(course)) ? 'ti ti-star-filled' : 'ti ti-star'}
                          ></i>
                        ))}
                      </span>
                      <span className="score">{avgRating(course).toFixed(1)}</span>
                      <span>({reviewsCount(course)} reviews)</span>
                    </div>

                    <div className="course-instructor">
                      <img
                        className="inst-avatar"
                        src={course.talent?.image ? `/image/talents/${course.talent.image}` : '/assets/img/user/profile.jpg'}
                        alt={course.talent?.name ?? ''}
                      />
                      <div className="inst-info">
                        <div className="inst-name">{course.talent?.name ?? 'Unknown'}</div>
                        <div className="inst-loc">
                          <i className="ti ti-map-pin" style={{ fontSize: '10px' }}></i>{' '}
                          {course.talent?.region ?? 'N/A'}
                        </div>
                      </div>
                      <Link href={route('user.courses.show', course.slug)} className="course-view-btn">
                        <i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {paginationLinks.length > 3 && (
          <div className="pagination-wrap">
            {paginationLinks.map((link, i) => (
              <button
                key={i}
                className={`page-btn${link.active ? ' active' : ''}${!link.url ? ' disabled' : ''}`}
                onClick={() => link.url && router.get(link.url, {}, { preserveScroll: true })}
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            ))}
          </div>
        )}

      </div>
    </>
  );
}

const FILTER_TABS = [
  { value: 'all', label: 'All' },
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'featured', label: 'Featured' },
  { value: 'recommended', label: 'Recommended' },
];

LearningCenter.layout = (page) => (
  <GuestLayout
    children={page}
    title="Learning Center and Courses"
    description="Explore courses and learning materials crafted by skilled professionals — enhance your skills and advance your career today."
  />
);
