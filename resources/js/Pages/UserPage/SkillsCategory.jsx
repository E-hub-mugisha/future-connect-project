import React, { useState, useMemo } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const routes = {
    talentsCategory: (slug) => `/skills/category/${slug}`,
    talentDetails: (id) => `/skills/${id}`,
    skills: '/register/skills',
    search: '/search'
};

export default function SkillsCategory({
    categoryName,
    categories = [],
    talents = [],
    filters = {},
}) {
    const [activeFilter, setActiveFilter] = useState('all');
    const [sidebarQuery, setSidebarQuery] = useState('');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [keyword, setKeyword] = useState(filters.keyword || '');
    const [categoryId, setCategoryId] = useState(filters.category || '');

    const avgRating = (talent) => {
        if (!talent.feedback || talent.feedback.length === 0) return '0.0';
        const sum = talent.feedback.reduce((acc, f) => acc + (f.rating || 0), 0);
        return (sum / talent.feedback.length).toFixed(1);
    };

    const filteredTalents = useMemo(() => {
        return talents.filter((talent) => {
            const matchesFilter =
                activeFilter === 'all' ||
                (talent.tag || 'featured').toLowerCase() === activeFilter;

            const q = sidebarQuery.toLowerCase();
            const matchesSearch =
                !q ||
                talent.name?.toLowerCase().includes(q) ||
                talent.category?.name?.toLowerCase().includes(q);

            return matchesFilter && matchesSearch;
        });
    }, [talents, activeFilter, sidebarQuery]);

    const submitSearch = (e) => {
    e.preventDefault();
    router.get(routes.search, { keyword, category: categoryId }, { preserveState: true });
};

    const filterTabs = [
        { key: 'all', label: 'All' },
        { key: 'latest', label: 'Newest' },
        { key: 'popular', label: 'Most Popular' },
        { key: 'featured', label: 'Featured' },
        { key: 'recommended', label: 'Recommended' },
    ];

    return (
        <>
            <Head title={`Hire ${categoryName} Talent — Verified Skilled People`} />

            {/* Apple's system font is used instead of a web-font import — see developer.apple.com/fonts */}

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

                    /* Apple system font stack — renders native San Francisco / SF Pro
                       on Apple devices (see https://developer.apple.com/fonts/) and
                       each platform's own system font elsewhere. No web-font request. */
                    --font-head:  -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    --font-body:  -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

                    --radius:     12px;
                    --radius-lg:  18px;
                    --t:          .25s ease;
                }

                .fc-talents, .fc-talents *, .fc-talents *::before, .fc-talents *::after { box-sizing: border-box; }
                .fc-talents { background: var(--bg); font-family: var(--font-body); color: var(--text); -webkit-font-smoothing: antialiased; }

                /* ─── PAGE HEADER ─── */
                .page-header {
                    background: var(--bg2);
                    border-bottom: 1px solid var(--border);
                    padding: 48px 0 40px;
                    position: relative;
                    overflow: hidden;
                }

                .page-header::before {
                    content: '';
                    position: absolute;
                    top: -80px; right: -80px;
                    width: 320px; height: 320px;
                    background: radial-gradient(circle, rgba(0,166,103,0.1) 0%, transparent 70%);
                    pointer-events: none;
                }

                .page-header-eyebrow {
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

                .page-header-eyebrow::before {
                    content: '';
                    display: inline-block;
                    width: 18px; height: 2px;
                    background: var(--green);
                    border-radius: 1px;
                }

                .page-header h1 {
                    font-family: var(--font-head);
                    font-size: clamp(1.6rem, 4vw, 2.4rem);
                    font-weight: 800;
                    color: var(--white);
                    letter-spacing: -0.03em;
                    margin-bottom: 8px;
                }

                .page-header h1 .accent { color: var(--green); }

                .page-header p {
                    color: var(--muted);
                    font-size: 0.92rem;
                    max-width: 480px;
                }

                .page-header-cta {
                    margin-top: 20px;
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }

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

                .btn-outline {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: transparent; color: var(--text);
                    font-family: var(--font-body); font-weight: 500; font-size: 0.85rem;
                    padding: 10px 20px; border-radius: var(--radius);
                    border: 1px solid var(--border); cursor: pointer; text-decoration: none;
                    transition: var(--t);
                }
                .btn-outline:hover { border-color: var(--green); color: var(--green); background: var(--green-dim); }

                /* ─── CATEGORY STRIP ─── */
                .cat-strip {
                    background: var(--bg);
                    border-bottom: 1px solid var(--border);
                    padding: 16px 0;
                }

                .cat-scroll {
                    display: flex; gap: 10px;
                    overflow-x: auto; padding-bottom: 4px;
                    scrollbar-width: none;
                }
                .cat-scroll::-webkit-scrollbar { display: none; }

                .cat-chip {
                    flex-shrink: 0;
                    background: var(--bg2);
                    border: 1px solid var(--border);
                    border-radius: 50px;
                    padding: 7px 16px;
                    font-size: 0.78rem; font-weight: 500;
                    color: var(--muted); text-decoration: none;
                    white-space: nowrap;
                    transition: var(--t);
                }
                .cat-chip:hover, .cat-chip.active {
                    border-color: var(--green);
                    color: var(--green);
                    background: var(--green-dim);
                }

                /* ─── LAYOUT ─── */
                .listing-layout {
                    padding: 48px 0 80px;
                }

                /* ─── FILTER BAR ─── */
                .filter-bar {
                    background: var(--bg2);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 16px 20px;
                    margin-bottom: 28px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: space-between;
                }

                .filter-tabs {
                    display: flex; gap: 6px; flex-wrap: wrap;
                }

                .filter-tab {
                    padding: 7px 16px;
                    border-radius: 50px;
                    font-size: 0.8rem; font-weight: 600;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--muted);
                    cursor: pointer;
                    transition: var(--t);
                }

                .filter-tab:hover { border-color: var(--green); color: var(--green); }

                .filter-tab.active {
                    background: var(--green);
                    border-color: var(--green);
                    color: #fff;
                    box-shadow: 0 0 10px var(--green-glow);
                }

                .sort-select {
                    background: var(--bg3);
                    border: 1px solid var(--border);
                    color: var(--text);
                    border-radius: var(--radius);
                    padding: 8px 14px;
                    font-size: 0.8rem;
                    font-family: var(--font-body);
                    cursor: pointer;
                    transition: border-color var(--t);
                    min-width: 160px;
                }
                .sort-select:focus { border-color: var(--green); outline: none; }

                /* ─── TALENT CARDS ─── */
                .talent-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                    gap: 20px;
                }

                .talent-card {
                    background: var(--bg2);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 24px 20px 20px;
                    display: flex; flex-direction: column; align-items: center;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    transition: transform var(--t), border-color var(--t), box-shadow var(--t);
                    text-decoration: none;
                }

                .talent-card::before {
                    content: '';
                    position: absolute; top: 0; left: 0; right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, var(--green), transparent);
                    opacity: 0; transition: opacity var(--t);
                }

                .talent-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(0,166,103,0.35);
                    box-shadow: 0 16px 40px rgba(0,0,0,0.35);
                }

                .talent-card:hover::before { opacity: 1; }

                .talent-avatar-wrap {
                    position: relative;
                    width: 84px; height: 84px;
                    margin-bottom: 16px;
                }

                .talent-avatar {
                    width: 84px; height: 84px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid var(--border);
                    transition: border-color var(--t);
                }

                .talent-card:hover .talent-avatar { border-color: var(--green); }

                .verify-badge {
                    position: absolute; bottom: 2px; right: 2px;
                    width: 22px; height: 22px;
                    background: var(--bg2);
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 13px; color: var(--green);
                    border: 1px solid var(--border);
                }

                .talent-name {
                    font-family: var(--font-head);
                    font-size: 0.95rem; font-weight: 700;
                    color: var(--white);
                    margin-bottom: 4px;
                    text-decoration: none;
                    transition: color var(--t);
                }

                .talent-card:hover .talent-name { color: var(--green); }

                .talent-cat {
                    font-size: 0.75rem;
                    color: var(--green);
                    background: var(--green-dim);
                    border: 1px solid rgba(0,166,103,0.2);
                    border-radius: 50px;
                    padding: 3px 10px;
                    margin-bottom: 14px;
                    display: inline-block;
                }

                .talent-badges {
                    display: flex; gap: 8px; justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 16px;
                }

                .tbadge {
                    display: inline-flex; align-items: center; gap: 5px;
                    background: var(--bg3);
                    border: 1px solid var(--border);
                    border-radius: 50px;
                    padding: 4px 12px;
                    font-size: 0.75rem;
                    color: var(--muted);
                }

                .tbadge i { color: var(--green); font-size: 11px; }

                .talent-view-btn {
                    display: inline-flex; align-items: center; gap: 7px;
                    background: var(--green-dim);
                    border: 1px solid rgba(0,166,103,0.25);
                    color: var(--green);
                    border-radius: 50px;
                    padding: 9px 22px;
                    font-size: 0.8rem; font-weight: 700;
                    text-decoration: none;
                    transition: var(--t);
                    margin-top: auto;
                    width: 100%; justify-content: center;
                }

                .talent-view-btn:hover {
                    background: var(--green);
                    color: #fff;
                    border-color: var(--green);
                    box-shadow: 0 0 14px var(--green-glow);
                }

                .empty-state {
                    grid-column: 1/-1;
                    text-align: center;
                    padding: 80px 20px;
                    color: var(--muted);
                }

                .empty-state i { font-size: 3rem; color: var(--border); display: block; margin-bottom: 16px; }

                .empty-state h4 {
                    font-family: var(--font-head);
                    color: var(--text);
                    margin-bottom: 8px;
                }

                .empty-state .btn-green { margin-top: 18px; }

                /* ─── SIDEBAR (desktop) ─── */
                .sidebar-card {
                    background: var(--bg2);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 20px;
                    margin-bottom: 18px;
                }

                .sidebar-card.promo {
                    background: linear-gradient(160deg, var(--green-dim), var(--bg2) 70%);
                    border-color: rgba(0,166,103,0.3);
                    text-align: center;
                }

                .sidebar-card.promo h6 {
                    font-family: var(--font-head);
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--white);
                    margin-bottom: 6px;
                }

                .sidebar-card.promo p {
                    font-size: 0.8rem;
                    color: var(--muted);
                    margin-bottom: 14px;
                    line-height: 1.5;
                }

                .sidebar-title {
                    font-family: var(--font-head);
                    font-size: 0.85rem; font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--muted);
                    margin-bottom: 14px;
                    display: flex; align-items: center; gap: 8px;
                }

                .sidebar-title i { color: var(--green); }

                .sidebar-cat-link {
                    display: flex; align-items: center; justify-content: space-between;
                    padding: 9px 0;
                    border-bottom: 1px solid var(--border);
                    text-decoration: none;
                    color: var(--text);
                    font-size: 0.85rem;
                    transition: color var(--t);
                }

                .sidebar-cat-link:last-child { border-bottom: none; }
                .sidebar-cat-link:hover, .sidebar-cat-link.active { color: var(--green); }

                .sidebar-cat-link .count {
                    font-size: 0.72rem;
                    color: var(--muted);
                    background: var(--bg3);
                    border-radius: 50px;
                    padding: 2px 8px;
                }

                .sidebar-search {
                    background: var(--bg3);
                    border: 1px solid var(--border);
                    color: var(--text);
                    border-radius: var(--radius);
                    padding: 10px 14px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    width: 100%;
                    transition: border-color var(--t);
                }
                .sidebar-search::placeholder { color: var(--muted); }
                .sidebar-search:focus { border-color: var(--green); outline: none; }

                /* ─── OFFCANVAS ─── */
                #mobileFilters .offcanvas-body,
                #mobileFilters .offcanvas-header {
                    background: var(--bg2);
                    color: var(--white);
                    border-right: 1px solid var(--border);
                }

                #mobileFilters .btn-close { filter: invert(1); }

                /* ─── MOBILE CAROUSEL ─── */
                .carousel-indicators [data-bs-target] {
                    background-color: var(--green);
                    border-radius: 2px;
                    width: 18px; height: 3px;
                    border: none;
                    opacity: 0.4;
                }
                .carousel-indicators .active { opacity: 1; width: 28px; }

                .carousel-control-prev-icon,
                .carousel-control-next-icon {
                    filter: none;
                    background-color: var(--green-dim);
                    border-radius: 50%;
                    padding: 18px;
                }

                /* ─── PAGINATION ─── */
                .pagination-wrap {
                    display: flex; justify-content: center;
                    gap: 8px; margin-top: 48px;
                }

                .page-btn {
                    width: 38px; height: 38px;
                    display: flex; align-items: center; justify-content: center;
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                    background: var(--bg2);
                    color: var(--text);
                    font-size: 0.85rem;
                    cursor: pointer;
                    text-decoration: none;
                    transition: var(--t);
                }

                .page-btn:hover, .page-btn.active {
                    border-color: var(--green);
                    color: var(--green);
                    background: var(--green-dim);
                }

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
                    --green-glow: rgba(0, 166, 103, 0.2);
                    --text:       #10201b;
                    --muted:      #5b7a70;
                    --white:      #10201b;
                }

                [data-h-theme="light"] .page-header::before {
                    background: radial-gradient(circle, rgba(0,166,103,0.07) 0%, transparent 70%);
                }

                [data-h-theme="light"] #mobileFilters .btn-close,
                [data-h-theme="light"] .btn-close-white {
                    filter: none;
                }
            `}</style>

            <div className="fc-talents">
                {/* ═══ PAGE HEADER ═══ */}
                <div className="page-header">
                    <div className="container">
                        <div className="page-header-eyebrow">Category</div>
                        <h1>
                            Hire verified <span className="accent">{categoryName}</span> skills today
                        </h1>
                        <p>Every profile below is a real, verified professional ready to work — browse, compare, and message the right one in minutes.</p>
                        <div className="page-header-cta">
                            <Link href={routes.skills} className="btn-green">
                                <i className="ti ti-star" /> Register Your Own Skills
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ═══ CATEGORY STRIP ═══ */}
                <div className="cat-strip">
                    <div className="container">
                        <div className="cat-scroll">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.id}
                                    href={routes.talentsCategory(cat.slug)}
                                    className={`cat-chip ${cat.name === categoryName ? 'active' : ''}`}
                                >
                                    {cat.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="section-divider" />

                {/* ═══ MAIN LISTING ═══ */}
                <div className="listing-layout">
                    <div className="container">
                        {/* Mobile filter toggle */}
                        <div className="d-lg-none mb-4 d-flex gap-3 align-items-center">
                            <button className="btn-outline" data-bs-toggle="offcanvas" data-bs-target="#mobileFilters">
                                <i className="ti ti-filter" /> Filters &amp; Categories
                            </button>
                            <button className="btn-outline" data-bs-toggle="modal" data-bs-target="#searchModal">
                                <i className="ti ti-search" /> Search
                            </button>
                        </div>

                        <div className="row g-4">
                            {/* ── SIDEBAR (desktop) ── */}
                            <div className="col-lg-3 d-none d-lg-block">
                                <div className="sidebar-card">
                                    <div className="sidebar-title">
                                        <i className="ti ti-search" /> Find Someone Fast
                                    </div>
                                    <input
                                        type="text"
                                        className="sidebar-search"
                                        placeholder="Search by name or skill..."
                                        value={sidebarQuery}
                                        onChange={(e) => setSidebarQuery(e.target.value)}
                                    />
                                </div>

                                <div className="sidebar-card">
                                    <div className="sidebar-title">
                                        <i className="ti ti-layout-grid" /> Browse Categories
                                    </div>
                                    {categories.map((cat) => (
                                        <Link
                                            key={cat.id}
                                            href={routes.talentsCategory(cat.slug)}
                                            className={`sidebar-cat-link ${cat.name === categoryName ? 'active' : ''}`}
                                        >
                                            {cat.name}
                                            <span className="count">{cat.talents?.length ?? 0}</span>
                                        </Link>
                                    ))}
                                </div>

                                <div className="sidebar-card promo">
                                    <h6>Have this skill yourself?</h6>
                                    <p>Create a free profile and start getting discovered by clients browsing this category.</p>
                                    <Link href={routes.skills} className="btn-green" style={{ width: '100%', justifyContent: 'center' }}>
                                        Join Free
                                    </Link>
                                </div>
                            </div>
                            {/* /Sidebar */}

                            {/* ── CONTENT ── */}
                            <div className="col-lg-9">
                                {/* Filter bar */}
                                <div className="filter-bar">
                                    <div className="filter-tabs">
                                        {filterTabs.map((tab) => (
                                            <button
                                                key={tab.key}
                                                className={`filter-tab ${activeFilter === tab.key ? 'active' : ''}`}
                                                onClick={() => setActiveFilter(tab.key)}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <button
                                            className="btn-green d-none d-md-inline-flex"
                                            data-bs-toggle="modal"
                                            data-bs-target="#searchModal"
                                        >
                                            <i className="ti ti-search" /> Refine Search
                                        </button>
                                    </div>
                                </div>

                                {/* Desktop grid */}
                                <div className="talent-grid d-none d-md-grid">
                                    {filteredTalents.length > 0 ? (
                                        filteredTalents.map((talent) => (
                                            <div
                                                className="talent-card-wrap talent-item"
                                                key={talent.id}
                                                onMouseEnter={() => setHoveredCard(talent.id)}
                                                onMouseLeave={() => setHoveredCard(null)}
                                            >
                                                <div className="talent-card">
                                                    <div className="talent-avatar-wrap">
                                                        <img
                                                            className="talent-avatar"
                                                            src={
                                                                talent.image
                                                                    ? `/${talent.image}`
                                                                    : '/assets/img/user/profile.jpg'
                                                            }
                                                            alt={talent.name}
                                                        />
                                                        <span className="verify-badge">
                                                            <i className="ti ti-discount-check-filled" />
                                                        </span>
                                                    </div>

                                                    <Link href={routes.talentDetails(talent.id)} className="talent-name">
                                                        {talent.name}
                                                    </Link>

                                                    <span className="talent-cat">{talent.category?.name ?? 'Uncategorized'}</span>

                                                    {hoveredCard === talent.id ? (
                                                        <div className="talent-badges">
                                                            <span className="tbadge">{talent.skill}</span>
                                                            <span className="tbadge">{talent.language}</span>
                                                        </div>
                                                    ) : (
                                                        <div className="talent-badges">
                                                            <span className="tbadge">
                                                                <i className="ti ti-star" />
                                                                {avgRating(talent)}
                                                            </span>
                                                            <span className="tbadge">
                                                                <i className="ti ti-message-2" />
                                                                {talent.feedback?.length ?? 0}
                                                            </span>
                                                        </div>
                                                    )}

                                                    <Link href={routes.talentDetails(talent.id)} className="talent-view-btn">
                                                        <i className="feather-arrow-right" /> View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="empty-state">
                                            <i className="ti ti-users-off" />
                                            <h4>No matches yet — but this could be you</h4>
                                            <p>Try a different category or search keyword, or be the first to claim this space.</p>
                                            <Link href={routes.skills} className="btn-green">
                                                <i className="ti ti-star" /> Register Your Skills
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile carousel */}
                                <div id="talentsCarousel" className="carousel slide d-md-none" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {filteredTalents.length > 0 ? (
                                            filteredTalents.map((talent, index) => (
                                                <div
                                                    key={talent.id}
                                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                                >
                                                    <div className="talent-card mx-auto" style={{ maxWidth: 320 }}>
                                                        <div className="talent-avatar-wrap">
                                                            <img
                                                                className="talent-avatar"
                                                                src={
                                                                    talent.image
                                                                        ? `/image/talents/${talent.image}`
                                                                        : '/assets/img/user/profile.jpg'
                                                                }
                                                                alt={talent.name}
                                                            />
                                                            <span className="verify-badge">
                                                                <i className="ti ti-discount-check-filled" />
                                                            </span>
                                                        </div>

                                                        <Link href={routes.talentDetails(talent.id)} className="talent-name">
                                                            {talent.name}
                                                        </Link>

                                                        <span className="talent-cat">{talent.category?.name ?? 'Uncategorized'}</span>

                                                        <div className="talent-badges">
                                                            <span className="tbadge">
                                                                <i className="ti ti-star" /> {avgRating(talent)}
                                                            </span>
                                                            <span className="tbadge">
                                                                <i className="ti ti-message-2" /> {talent.feedback?.length ?? 0}
                                                            </span>
                                                            <span className="tbadge">{talent.language}</span>
                                                        </div>

                                                        <Link href={routes.talentDetails(talent.id)} className="talent-view-btn">
                                                            <i className="feather-arrow-right" /> View Profile
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="carousel-item active">
                                                <div className="empty-state">
                                                    <i className="ti ti-users-off" />
                                                    <h4>No matches yet — but this could be you</h4>
                                                    <Link href={routes.skills} className="btn-green">
                                                        <i className="ti ti-star" /> Register Your Skills
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {filteredTalents.length > 0 && (
                                        <>
                                            <button
                                                className="carousel-control-prev"
                                                type="button"
                                                data-bs-target="#talentsCarousel"
                                                data-bs-slide="prev"
                                            >
                                                <span className="carousel-control-prev-icon" />
                                            </button>
                                            <button
                                                className="carousel-control-next"
                                                type="button"
                                                data-bs-target="#talentsCarousel"
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon" />
                                            </button>

                                            <div className="carousel-indicators" style={{ bottom: -32 }}>
                                                {filteredTalents.map((talent, index) => (
                                                    <button
                                                        key={talent.id}
                                                        type="button"
                                                        data-bs-target="#talentsCarousel"
                                                        data-bs-slide-to={index}
                                                        className={index === 0 ? 'active' : ''}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            {/* /Content */}
                        </div>
                    </div>
                </div>

                {/* ═══ OFFCANVAS (Mobile Filters) ═══ */}
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="mobileFilters">
                    <div
                        className="offcanvas-header"
                        style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}
                    >
                        <h5
                            className="offcanvas-title"
                            style={{ fontFamily: 'var(--font-head)', color: 'var(--white)' }}
                        >
                            Filters &amp; Categories
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            style={{ filter: 'invert(1)' }}
                        />
                    </div>
                    <div className="offcanvas-body" style={{ background: 'var(--bg2)' }}>
                        <input
                            type="text"
                            className="sidebar-search mb-4"
                            placeholder="Search by name or skill..."
                            value={sidebarQuery}
                            onChange={(e) => setSidebarQuery(e.target.value)}
                        />

                        <div className="sidebar-title mb-3">
                            <i className="ti ti-layout-grid" /> Browse Categories
                        </div>
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={routes.talentsCategory(cat.slug)}
                                className={`sidebar-cat-link ${cat.name === categoryName ? 'active' : ''}`}
                            >
                                {cat.name}
                                <span className="count">{cat.talents?.length ?? 0}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* ═══ SEARCH MODAL ═══ */}
                <div className="modal fade" id="searchModal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div
                            className="modal-content"
                            style={{
                                background: 'var(--bg2)',
                                border: '1px solid var(--border)',
                                borderRadius: 'var(--radius-lg)',
                            }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    background: 'var(--bg3)',
                                    borderBottom: '1px solid var(--border)',
                                    padding: '20px 28px',
                                }}
                            >
                                <h5
                                    className="modal-title"
                                    style={{ fontFamily: 'var(--font-head)', color: 'var(--white)' }}
                                >
                                    <i className="ti ti-search me-2" style={{ color: 'var(--green)' }} />
                                    Find the Right Talent, Fast
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="modal"
                                />
                            </div>
                            <div className="modal-body" style={{ padding: 28 }}>
                                <form onSubmit={submitSearch} className="row g-4">
                                    <div className="col-md-6">
                                        <label
                                            style={{
                                                fontSize: '.78rem',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '.07em',
                                                color: 'var(--muted)',
                                                marginBottom: 6,
                                                display: 'block',
                                            }}
                                        >
                                            Keyword
                                        </label>
                                        <input
                                            type="text"
                                            className="sidebar-search"
                                            style={{ borderRadius: 'var(--radius)' }}
                                            placeholder="Search talents, skills, or names..."
                                            value={keyword}
                                            onChange={(e) => setKeyword(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label
                                            style={{
                                                fontSize: '.78rem',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '.07em',
                                                color: 'var(--muted)',
                                                marginBottom: 6,
                                                display: 'block',
                                            }}
                                        >
                                            Category
                                        </label>
                                        <select
                                            className="sidebar-search"
                                            style={{ borderRadius: 'var(--radius)', cursor: 'pointer' }}
                                            value={categoryId}
                                            onChange={(e) => setCategoryId(e.target.value)}
                                        >
                                            <option value="">All Categories</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-12 d-flex justify-content-end gap-3">
                                        <button type="button" className="btn-outline" data-bs-dismiss="modal">
                                            Cancel
                                        </button>
                                        <button type="submit" className="btn-green">
                                            <i className="ti ti-search" /> Search Talent
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

SkillsCategory.layout = (page) => <GuestLayout children={page} title="Skills Marketplace" />;