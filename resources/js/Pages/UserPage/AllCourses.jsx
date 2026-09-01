import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

/**
 * Converted/generalized from courses-by-category.blade.php.
 *
 * Difference from the category-scoped version: this page shows ALL courses
 * across every category. `categoryName` is gone; category chips/sidebar links
 * still navigate into `/courses/category/{slug}` (the scoped page), but this
 * page itself applies no category filter — only the client-side
 * All/Latest/Popular/Featured tag filter still applies.
 *
 * Same backend-shape assumptions as before:
 * - `courses` is a plain array (not paginated).
 * - `category.courses_count` (from `withCount('courses')`), falling back to
 *   `category.courses?.length`.
 * - `course.avg_rating` / `course.reviews_count`, falling back to computing
 *   from a loaded `course.feedback` array.
 */
export default function AllCourses({ categories = [], courses = [] }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleCourses = courses.filter(
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
      <Head title="All Courses" />

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
          --white:      #F5f5f7;
          --font-head:  'Syne', sans-serif;
          --font-body:  'DM Sans', sans-serif;
          --radius:     12px;
          --radius-lg:  18px;
          --t:          .25s ease;
        }

        *, *::before, *::after { box-sizing: border-box; }
        body { background: var(--bg); font-family: var(--font-body); color: var(--text); }

        /* ─── PAGE HEADER ─── */
        .page-header {
          position: relative;
          background: var(--bg2);
          border-bottom: 1px solid var(--border);
          padding: 52px 0 44px;
          overflow: hidden;
        }

        .page-header::before {
          content: '';
          position: absolute;
          top: -100px; right: -60px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(0,166,103,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .page-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,166,103,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,166,103,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .ph-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: var(--green); margin-bottom: 10px;
          position: relative; z-index: 1;
        }

        .ph-eyebrow::before {
          content: '';
          display: inline-block; width: 18px; height: 2px;
          background: var(--green); border-radius: 1px;
        }

        .page-header h1 {
          font-family: var(--font-head);
          font-size: clamp(1.7rem, 4vw, 2.6rem);
          font-weight: 800; color: var(--white);
          letter-spacing: -0.03em; margin-bottom: 10px;
          position: relative; z-index: 1;
        }

        .page-header h1 .accent { color: var(--green); }

        .page-header p {
          color: var(--muted); font-size: 0.92rem;
          max-width: 480px; line-height: 1.7;
          position: relative; z-index: 1;
        }

        .ph-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.78rem; color: var(--muted);
          margin-bottom: 16px;
          position: relative; z-index: 1;
        }

        .ph-breadcrumb a { color: var(--muted); text-decoration: none; transition: color var(--t); }
        .ph-breadcrumb a:hover { color: var(--green); }
        .ph-breadcrumb .sep { color: var(--border); }
        .ph-breadcrumb .current { color: var(--green); font-weight: 600; }

        /* ─── CATEGORY STRIP ─── */
        .cat-strip {
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          padding: 14px 0;
        }

        .cat-scroll {
          display: flex; gap: 10px; overflow-x: auto;
          padding-bottom: 4px; scrollbar-width: none;
        }
        .cat-scroll::-webkit-scrollbar { display: none; }

        .cat-chip {
          flex-shrink: 0;
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 50px; padding: 7px 16px;
          font-size: 0.78rem; font-weight: 500;
          color: var(--muted); text-decoration: none; white-space: nowrap;
          transition: var(--t);
        }
        .cat-chip:hover { border-color: var(--green); color: var(--green); background: var(--green-dim); }
        .cat-chip.active { border-color: var(--green); color: var(--green); background: var(--green-dim); }

        /* ─── BUTTONS ─── */
        .btn-green {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--green); color: #fff;
          font-family: var(--font-body); font-weight: 600; font-size: 0.85rem;
          padding: 10px 20px; border-radius: var(--radius);
          border: none; cursor: pointer; text-decoration: none;
          transition: var(--t);
        }
        .btn-green:hover { background: #00bf76; color:#fff; transform: translateY(-2px); box-shadow: 0 0 18px var(--green-glow); }

        /* ─── LAYOUT ─── */
        .listing-layout { padding: 48px 0 80px; }

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
          border: 1px solid var(--border); background: transparent;
          color: var(--muted); cursor: pointer; transition: var(--t);
        }
        .filter-tab:hover { border-color: var(--green); color: var(--green); }
        .filter-tab.active {
          background: var(--green); border-color: var(--green);
          color: #fff; box-shadow: 0 0 10px var(--green-glow);
        }

        .result-count { font-size: 0.8rem; color: var(--muted); }
        .result-count strong { color: var(--green); font-family: var(--font-head); }

        /* ─── COURSE GRID ─── */
        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .course-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: var(--radius-lg); overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform var(--t), border-color var(--t), box-shadow var(--t);
        }

        .course-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0,166,103,0.35);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .course-thumb {
          position: relative; overflow: hidden; height: 190px;
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
          text-decoration: none; display: inline-block;
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
          font-size: 0.78rem; color: var(--muted); margin-bottom: 14px;
        }
        .course-rating .stars { color: #f59e0b; font-size: 11px; }
        .course-rating .score { color: var(--text); font-weight: 600; }

        .delivery-tag {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.72rem; color: var(--green);
          background: var(--green-dim); border: 1px solid rgba(0,166,103,0.2);
          border-radius: 50px; padding: 3px 10px;
          margin-bottom: 14px;
        }

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

        /* ─── SIDEBAR ─── */
        .sidebar-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 20px; margin-bottom: 16px;
        }

        .sidebar-title {
          font-family: var(--font-head); font-size: 0.82rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: var(--muted); margin-bottom: 14px;
          display: flex; align-items: center; gap: 8px;
        }
        .sidebar-title i { color: var(--green); }

        .sidebar-cat-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 9px 0; border-bottom: 1px solid var(--border);
          text-decoration: none; color: var(--text); font-size: 0.85rem;
          transition: color var(--t);
        }
        .sidebar-cat-link:last-child { border-bottom: none; }
        .sidebar-cat-link:hover, .sidebar-cat-link.active { color: var(--green); }

        .sidebar-count {
          font-size: 0.72rem; color: var(--muted);
          background: var(--bg3); border-radius: 50px; padding: 2px 8px;
        }

        /* ─── SECTION LABEL ─── */
        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--green); margin-bottom: 6px;
        }
        .section-label::before {
          content:''; display:inline-block;
          width:18px; height:2px; background:var(--green); border-radius:1px;
        }

        .section-title {
          font-family: var(--font-head);
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          font-weight: 800; color: var(--white);
          letter-spacing: -0.02em; margin-bottom: 4px;
        }

        .section-sub { color: var(--muted); font-size: 0.88rem; }

        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --bg:         #f6faf8;
          --bg2:        #F5f5f7;
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

        [data-h-theme="light"] .page-header::after {
          background-image:
            linear-gradient(rgba(0, 100, 60, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 100, 60, 0.06) 1px, transparent 1px);
        }

        [data-h-theme="light"] .page-header::before {
          background: radial-gradient(circle, rgba(0,166,103,0.08) 0%, transparent 70%);
        }

        [data-h-theme="light"] .course-thumb-overlay {
          background: linear-gradient(to top, rgba(16,32,27,0.35) 0%, transparent 50%);
        }

        [data-h-theme="light"] .thumb-price {
          border-color: rgba(0, 100, 60, 0.25);
        }

        [data-h-theme="light"] .sidebar-card[style*="border-color"] {
          border-color: rgba(0, 166, 103, 0.3) !important;
        }
      `}</style>

      {/* ═══ PAGE HEADER ═══ */}
      <div className="page-header">
        <div className="container">
          <div className="ph-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Courses</span>
          </div>
          <div className="ph-eyebrow">Learning Center</div>
          <h1>
            All <span className="accent">Courses</span>
          </h1>
          <p>Browse every course on the platform, taught by verified professionals across all categories.</p>
        </div>
      </div>

      {/* ═══ CATEGORY STRIP ═══ */}
      <div className="cat-strip">
        <div className="container">
          <div className="cat-scroll">
            <Link href={route('user.courses')} className="cat-chip active">
              All Categories
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/courses/category/${category.slug}`}
                className="cat-chip"
              >
                {category.name}
                <span style={{ color: 'var(--green)', marginLeft: '4px', fontSize: '0.7rem' }}>
                  ({categoryCoursesCount(category)})
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="listing-layout">
        <div className="container">
          <div className="row g-4">

            {/* Sidebar (desktop) */}
            <div className="col-lg-3 d-none d-lg-block">

              <div className="sidebar-card" style={{ borderColor: 'rgba(0,166,103,0.3)', background: 'var(--green-dim)' }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--green)', fontWeight: 700, marginBottom: '6px' }}>Viewing</div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--white)' }}>All Courses</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '4px' }}>{courses.length} course(s) available</div>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title"><i className="ti ti-layout-grid"></i> Categories</div>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/courses/category/${category.slug}`}
                    className="sidebar-cat-link"
                  >
                    {category.name}
                    <span className="sidebar-count">{categoryCoursesCount(category)}</span>
                  </Link>
                ))}
              </div>

            </div>

            {/* Content */}
            <div className="col-lg-9">

              <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
                <div>
                  <div className="section-label">Catalog</div>
                  <div className="section-title">Browse All Courses</div>
                  <p className="section-sub">Learning center &amp; courses listing</p>
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
                <span className="result-count d-none d-md-block">
                  <strong>{visibleCourses.length}</strong> of <strong>{courses.length}</strong> course(s)
                </span>
              </div>

              {/* Course grid */}
              <div className="course-grid" id="courseGrid">
                {visibleCourses.length > 0 ? (
                  visibleCourses.map((course) => (
                    <div className="course-item" key={course.id}>
                      <div className="course-card">

                        {/* Thumbnail */}
                        <div className="course-thumb">
                          <Link href={route('user.courses.show', course.slug)}>
                            <img src={`/images/thumbnails/${course.thumbnail}`} alt={course.title} />
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
                            href={course.category?.slug ? `/courses/category/${course.category.slug}` : route('user.courses')}
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

                          <div className="delivery-tag">
                            <i className="ti ti-clock" style={{ fontSize: '11px' }}></i> Delivery in 1 day
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
                ) : (
                  <div className="empty-state">
                    <i className="ti ti-books"></i>
                    <h4>No courses found</h4>
                    <p>No courses match this filter yet.</p>
                    <Link href={route('user.courses')} className="btn-green mt-3" style={{ margin: '0 auto' }}>
                      <i className="ti ti-arrow-left"></i> View All Courses
                    </Link>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

const FILTER_TABS = [
  { value: 'all', label: 'All' },
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'featured', label: 'Featured' },
];

AllCourses.layout = (page) => (
  <GuestLayout
    children={page}
    title="All Courses"
    description="Browse every course on the platform, taught by verified professionals across all categories."
  />
);
