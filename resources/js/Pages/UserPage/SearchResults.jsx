import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const routes = {
    talentDetails: (id) => `/skills/${id}`,
    search: '/search',
    skills: '/skills-marketplace',
};

export default function SearchResults({
    talents = [],
    categories = [],
    filters = {},
}) {
    const [keyword, setKeyword] = useState(filters.keyword || '');
    const [category, setCategory] = useState(filters.category || '');
    const [region, setRegion] = useState(filters.region || '');

    const avgRating = (talent) => {
        if (!talent.feedback || talent.feedback.length === 0) return '0.0';
        const sum = talent.feedback.reduce((acc, f) => acc + (f.rating || 0), 0);
        return (sum / talent.feedback.length).toFixed(1);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        router.get(routes.search, { keyword, category, region }, { preserveState: true });
    };

    const clearFilters = () => {
        setKeyword('');
        setCategory('');
        setRegion('');
        router.get(routes.search, {}, { preserveState: false });
    };

    const activeFilterCount = [filters.keyword, filters.category, filters.region].filter(Boolean).length;

    return (
        <>
            <Head title="Search Results" />
            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
                rel="stylesheet"
            />

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

                .fc-search, .fc-search *, .fc-search *::before, .fc-search *::after { box-sizing: border-box; }
                .fc-search { background: var(--bg); font-family: var(--font-body); color: var(--text); }

                .search-header {
                    background: var(--bg2);
                    border-bottom: 1px solid var(--border);
                    padding: 40px 0 32px;
                    position: relative;
                    overflow: hidden;
                }
                .search-header::before {
                    content: '';
                    position: absolute; top: -80px; right: -80px;
                    width: 320px; height: 320px;
                    background: radial-gradient(circle, rgba(0,166,103,0.1) 0%, transparent 70%);
                    pointer-events: none;
                }
                .search-eyebrow {
                    display: inline-flex; align-items: center; gap: 8px;
                    font-size: 11px; font-weight: 600; text-transform: uppercase;
                    letter-spacing: 0.12em; color: var(--green); margin-bottom: 10px;
                }
                .search-eyebrow::before {
                    content: ''; display: inline-block; width: 18px; height: 2px;
                    background: var(--green); border-radius: 1px;
                }
                .search-header h1 {
                    font-family: var(--font-head);
                    font-size: clamp(1.5rem, 3.5vw, 2.2rem);
                    font-weight: 800; color: var(--white);
                    letter-spacing: -0.03em; margin-bottom: 6px;
                }
                .search-header p { color: var(--muted); font-size: 0.9rem; }
                .search-header .accent { color: var(--green); }

                .search-panel {
                    background: var(--bg2);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 22px;
                    margin-top: -20px;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
                }

                .search-field label {
                    font-size: 0.72rem; font-weight: 600; text-transform: uppercase;
                    letter-spacing: 0.07em; color: var(--muted); margin-bottom: 6px; display: block;
                }

                .search-input, .search-select {
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
                .search-input::placeholder { color: var(--muted); }
                .search-input:focus, .search-select:focus { border-color: var(--green); outline: none; }

                .btn-green {
                    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
                    background: var(--green); color: #fff;
                    font-family: var(--font-body); font-weight: 600; font-size: 0.85rem;
                    padding: 10px 22px; border-radius: var(--radius);
                    border: none; cursor: pointer; text-decoration: none;
                    transition: var(--t); width: 100%;
                }
                .btn-green:hover { background: #00bf76; color:#fff; transform: translateY(-2px); box-shadow: 0 0 18px var(--green-glow); }

                .btn-ghost {
                    display: inline-flex; align-items: center; gap: 6px;
                    background: transparent; color: var(--muted);
                    font-size: 0.8rem; font-weight: 500;
                    border: none; cursor: pointer; text-decoration: underline;
                    padding: 4px 0;
                }
                .btn-ghost:hover { color: var(--green); }

                .results-meta {
                    display: flex; align-items: center; justify-content: space-between;
                    margin: 32px 0 20px; flex-wrap: wrap; gap: 12px;
                }
                .results-count { font-size: 0.88rem; color: var(--muted); }
                .results-count strong { color: var(--white); font-family: var(--font-head); }

                .active-chips { display: flex; gap: 8px; flex-wrap: wrap; }
                .chip {
                    display: inline-flex; align-items: center; gap: 6px;
                    background: var(--green-dim);
                    border: 1px solid rgba(0,166,103,0.25);
                    color: var(--green);
                    border-radius: 50px;
                    padding: 5px 12px;
                    font-size: 0.75rem; font-weight: 600;
                }

                .talent-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                    gap: 20px;
                    padding-bottom: 60px;
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
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
                    background: linear-gradient(90deg, var(--green), transparent);
                    opacity: 0; transition: opacity var(--t);
                }
                .talent-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(0,166,103,0.35);
                    box-shadow: 0 16px 40px rgba(0,0,0,0.35);
                }
                .talent-card:hover::before { opacity: 1; }

                .talent-avatar-wrap { position: relative; width: 84px; height: 84px; margin-bottom: 16px; }
                .talent-avatar {
                    width: 84px; height: 84px; border-radius: 50%; object-fit: cover;
                    border: 2px solid var(--border); transition: border-color var(--t);
                }
                .talent-card:hover .talent-avatar { border-color: var(--green); }

                .verify-badge {
                    position: absolute; bottom: 2px; right: 2px; width: 22px; height: 22px;
                    background: var(--bg2); border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 13px; color: var(--green); border: 1px solid var(--border);
                }

                .talent-name {
                    font-family: var(--font-head); font-size: 0.95rem; font-weight: 700;
                    color: var(--white); margin-bottom: 4px; text-decoration: none;
                    transition: color var(--t);
                }
                .talent-card:hover .talent-name { color: var(--green); }

                .talent-cat {
                    font-size: 0.75rem; color: var(--green); background: var(--green-dim);
                    border: 1px solid rgba(0,166,103,0.2); border-radius: 50px;
                    padding: 3px 10px; margin-bottom: 10px; display: inline-block;
                }

                .talent-location {
                    font-size: 0.75rem; color: var(--muted);
                    display: flex; align-items: center; gap: 5px; margin-bottom: 14px;
                }

                .talent-badges { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 16px; }
                .tbadge {
                    display: inline-flex; align-items: center; gap: 5px;
                    background: var(--bg3); border: 1px solid var(--border);
                    border-radius: 50px; padding: 4px 12px; font-size: 0.75rem; color: var(--muted);
                }
                .tbadge i { color: var(--green); font-size: 11px; }

                .talent-view-btn {
                    display: inline-flex; align-items: center; gap: 7px;
                    background: var(--green-dim);
                    border: 1px solid rgba(0,166,103,0.25);
                    color: var(--green);
                    border-radius: 50px; padding: 9px 22px; font-size: 0.8rem; font-weight: 700;
                    text-decoration: none; transition: var(--t); margin-top: auto;
                    width: 100%; justify-content: center;
                }
                .talent-view-btn:hover {
                    background: var(--green); color: #fff; border-color: var(--green);
                    box-shadow: 0 0 14px var(--green-glow);
                }

                .empty-state {
                    grid-column: 1/-1; text-align: center; padding: 80px 20px; color: var(--muted);
                }
                .empty-state i { font-size: 3rem; color: var(--border); display: block; margin-bottom: 16px; }
                .empty-state h4 { font-family: var(--font-head); color: var(--text); margin-bottom: 8px; }

                /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
                [data-h-theme="light"] {
                    --bg:         #f6faf8;
                    --bg2:        #F5f5f7;
                    --bg3:        #eef4f1;
                    --border:     rgba(0, 100, 60, 0.1);
                    --green:      #00a667;
                    --green-dim:  rgba(0, 166, 103, 0.08);
                    --green-glow: rgba(0, 166, 103, 0.2);
                    --text:       #10201b;
                    --muted:      #5b7a70;
                    --white:      #10201b;
                }
                [data-h-theme="light"] .search-header::before {
                    background: radial-gradient(circle, rgba(0,166,103,0.07) 0%, transparent 70%);
                }
                [data-h-theme="light"] .search-panel {
                    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
                }
            `}</style>

            <div className="fc-search">
                {/* ═══ HEADER ═══ */}
                <div className="search-header">
                    <div className="container">
                        <div className="search-eyebrow">Search</div>
                        <h1>
                            Find your next <span className="accent">talent</span>
                        </h1>
                        <p>Search across all categories, skills, and regions on Future Connect.</p>
                    </div>
                </div>

                <div className="container">
                    {/* ═══ SEARCH PANEL ═══ */}
                    <form onSubmit={submitSearch} className="search-panel row g-3 align-items-end">
                        <div className="col-md-4 search-field">
                            <label>Keyword</label>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Name or skill..."
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3 search-field">
                            <label>Category</label>
                            <select
                                className="search-select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">All Categories</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3 search-field">
                            <label>Region</label>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="e.g. Kigali"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            />
                        </div>
                        <div className="col-md-2 search-field">
                            <button type="submit" className="btn-green">
                                <i className="ti ti-search" /> Search
                            </button>
                        </div>
                        {activeFilterCount > 0 && (
                            <div className="col-12">
                                <button type="button" className="btn-ghost" onClick={clearFilters}>
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </form>

                    {/* ═══ RESULTS META ═══ */}
                    <div className="results-meta">
                        <div className="results-count">
                            <strong>{talents.length}</strong> {talents.length === 1 ? 'result' : 'results'} found
                        </div>
                        {activeFilterCount > 0 && (
                            <div className="active-chips">
                                {filters.keyword && <span className="chip">Keyword: {filters.keyword}</span>}
                                {filters.category && (
                                    <span className="chip">
                                        Category: {categories.find((c) => String(c.id) === String(filters.category))?.name ?? filters.category}
                                    </span>
                                )}
                                {filters.region && <span className="chip">Region: {filters.region}</span>}
                            </div>
                        )}
                    </div>

                    {/* ═══ RESULTS GRID ═══ */}
                    <div className="talent-grid">
                        {talents.length > 0 ? (
                            talents.map((talent) => (
                                <div className="talent-card" key={talent.id}>
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

                                    <span className="talent-location">
                                        <img src="/assets/img/flags/flag-for-rwanda.svg" alt="flag" width="14" height="14" />
                                        {talent.address || 'Rwanda'}
                                    </span>

                                    <div className="talent-badges">
                                        <span className="tbadge">
                                            <i className="ti ti-star" /> {avgRating(talent)}
                                        </span>
                                        <span className="tbadge">
                                            <i className="ti ti-message-2" /> {talent.feedback?.length ?? 0}
                                        </span>
                                        {talent.skill && <span className="tbadge">{talent.skill}</span>}
                                    </div>

                                    <Link href={routes.talentDetails(talent.id)} className="talent-view-btn">
                                        <i className="feather-arrow-right" /> View Profile
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="empty-state">
                                <i className="ti ti-users-off" />
                                <h4>No talents found</h4>
                                <p>Try adjusting your keyword, category, or region.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

SearchResults.layout = (page) => <GuestLayout children={page} title="Search Results" />;
