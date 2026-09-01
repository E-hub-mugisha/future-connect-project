import React, { useEffect, useRef, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const routes = {
    storiesFilter: '/stories/filter',
    storyCategory: (slug) => `/story/category/${slug}`,
    storyDetails: (slug) => `/story-details/${slug}`,
};

const STATUS_META = {
    approved: { label: 'Approved', icon: 'ti-bolt', className: 'status-approved' },
    pending: { label: 'Pending', icon: 'ti-clock', className: 'status-pending' },
};

function decodePaginationLabel(label) {
    return label
        .replace(/&laquo;/g, '‹')
        .replace(/&raquo;/g, '›')
        .replace(/Previous/i, 'Prev');
}

export default function StoriesIndex({ featuredStories = [], categories = [], stories, filters = {} }) {
    const swiperElRef = useRef(null);
    const swiperInstanceRef = useRef(null);

    const [category, setCategory] = useState(filters.category ?? '');
    const [region, setRegion] = useState(filters.region ?? '');
    const [keyword, setKeyword] = useState(filters.keyword ?? '');

    // ── Trending carousel (Swiper, loaded from CDN like the existing setup) ──
    useEffect(() => {
        if (!featuredStories.length) return;

        function initSwiper() {
            swiperInstanceRef.current?.destroy?.(true, true);
            swiperInstanceRef.current = new window.Swiper(swiperElRef.current, {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                loop: featuredStories.length > 2,
                coverflowEffect: { rotate: 24, stretch: 0, depth: 220, modifier: 1, slideShadows: false },
                autoplay: { delay: 4800, disableOnInteraction: false },
                navigation: { nextEl: '.trend-next', prevEl: '.trend-prev' },
                pagination: { el: '.trend-pagination', clickable: true },
            });
        }

        if (window.Swiper) {
            initSwiper();
        } else {
            if (!document.getElementById('swiper-bundle-css')) {
                const link = document.createElement('link');
                link.id = 'swiper-bundle-css';
                link.rel = 'stylesheet';
                link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
                document.head.appendChild(link);
            }
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
            script.onload = initSwiper;
            document.body.appendChild(script);
        }

        return () => swiperInstanceRef.current?.destroy?.(true, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [featuredStories.length]);

    const applyFilters = (e) => {
        e.preventDefault();
        router.get(
            routes.storiesFilter,
            { category, region, keyword },
            { preserveState: true, preserveScroll: true, replace: true }
        );
    };

    const resetFilters = () => {
        setCategory('');
        setRegion('');
        setKeyword('');
        router.get(routes.storiesFilter, {}, { preserveState: true, preserveScroll: true, replace: true });
    };

    const storyList = stories?.data ?? [];
    const paginationLinks = stories?.links ?? [];

    return (
        <>
            <Head title="Stories" />
            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
                rel="stylesheet"
            />

            <style>{`
                :root {
                    --bg-deep:    #0e1618;
                    --bg-card:    #131e21;
                    --bg-glass:   rgba(255,255,255,0.035);
                    --bg-glass2:  rgba(0,166,103,0.07);
                    --accent:     #48d597;
                    --accent-dim: #008f59;
                    --accent-glow:rgba(0,166,103,0.25);
                    --text-primary:   #f0f4f3;
                    --text-secondary: #8da4a0;
                    --text-muted:     #4d6460;
                    --border:     rgba(255,255,255,0.07);
                    --border-accent: rgba(0,166,103,0.3);
                    --radius-lg:  16px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                    --warn:       #e8b94a;
                }

                .fc-stories-page, .fc-stories-page * { box-sizing: border-box; }
                .fc-stories-page { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); }
                .fc-stories-page .container { max-width: 1240px; margin: 0 auto; padding: 0 20px; }

                .stories-page { padding: 40px 0 80px; }

                /* ── Trending hero ── */
                .trend-hero {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(165deg, var(--bg-card) 10%, var(--accent-dim) 160%);
                    border-radius: 28px;
                    padding: 64px 24px;
                    margin-bottom: 48px;
                    border: 1px solid var(--border);
                }
                .trend-eyebrow {
                    text-align: center;
                    text-transform: uppercase;
                    letter-spacing: 0.14em;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.65);
                    margin-bottom: 6px;
                }
                .trend-heading {
                    text-align: center;
                    font-family: var(--font-head);
                    font-size: 1.9rem;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 40px;
                }
                .trend-swiper { width: 100%; padding: 10px 0 50px; }
                .trend-swiper .swiper-slide {
                    width: min(680px, 84vw);
                    border-radius: 20px;
                    overflow: hidden;
                }
                .trend-slide {
                    position: relative;
                    display: block;
                    border-radius: 20px;
                    overflow: hidden;
                    aspect-ratio: 16 / 8;
                }
                .trend-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
                .trend-slide-overlay {
                    position: absolute; inset: 0;
                    background: linear-gradient(to top, rgba(2,10,10,0.88) 0%, rgba(2,10,10,0.25) 55%, transparent 100%);
                    display: flex; flex-direction: column; justify-content: flex-end;
                    padding: 24px;
                }
                .trend-slide-title {
                    font-family: var(--font-head);
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #fff;
                    line-height: 1.3;
                    margin-bottom: 14px;
                    max-width: 90%;
                }
                .trend-read-more {
                    display: inline-flex; align-items: center; gap: 8px;
                    align-self: flex-start;
                    background: var(--accent);
                    color: #06251a;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.8rem;
                    padding: 9px 18px;
                    border-radius: var(--radius-pill);
                    text-decoration: none;
                    transition: transform 0.2s, background 0.2s;
                }
                .trend-read-more:hover { background: #fff; transform: translateY(-2px); color: #06251a; }

                .trend-controls {
                    display: flex; align-items: center; justify-content: center; gap: 20px;
                    margin-top: 8px;
                }
                .trend-arrow {
                    width: 42px; height: 42px; border-radius: 50%;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    color: #fff;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    transition: background 0.2s;
                    flex-shrink: 0;
                }
                .trend-arrow:hover { background: rgba(255,255,255,0.2); }
                .trend-pagination { position: relative; display: flex; align-items: center; gap: 6px; }
                .trend-pagination .swiper-pagination-bullet {
                    background: rgba(255,255,255,0.35);
                    opacity: 1;
                    width: 7px; height: 7px;
                }
                .trend-pagination .swiper-pagination-bullet-active { background: var(--accent); width: 20px; border-radius: 4px; }

                /* ── Category strip ── */
                .section-heading {
                    display: flex; align-items: baseline; justify-content: space-between;
                    margin-bottom: 18px;
                }
                .section-heading h5 {
                    font-family: var(--font-head);
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 0;
                }
                .category-strip {
                    display: flex; gap: 14px;
                    overflow-x: auto;
                    padding-bottom: 8px;
                    margin-bottom: 44px;
                    scroll-snap-type: x proximity;
                }
                .category-strip::-webkit-scrollbar { height: 5px; }
                .category-strip::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
                .category-chip {
                    flex: 0 0 auto;
                    scroll-snap-align: start;
                    display: flex; align-items: center; justify-content: space-between; gap: 16px;
                    min-width: 220px;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 14px;
                    padding: 16px 18px;
                    text-decoration: none;
                    transition: border-color 0.2s, transform 0.2s;
                }
                .category-chip:hover { border-color: var(--border-accent); transform: translateY(-2px); }
                .category-chip h6 { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
                .category-chip p { font-size: 0.76rem; color: var(--text-muted); margin: 0; }
                .category-chip-arrow {
                    width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    display: flex; align-items: center; justify-content: center;
                }

                /* ── Filters ── */
                .filters-bar {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 22px 24px;
                    margin-bottom: 36px;
                }
                .filters-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr auto;
                    gap: 14px;
                    align-items: end;
                }
                @media(max-width: 900px) { .filters-grid { grid-template-columns: 1fr 1fr; } }
                @media(max-width: 560px) { .filters-grid { grid-template-columns: 1fr; } }
                .filter-field label {
                    display: block; font-size: 0.75rem; font-weight: 500;
                    color: var(--text-secondary); margin-bottom: 6px;
                }
                .filter-control {
                    width: 100%;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid var(--border);
                    border-radius: 10px;
                    color: var(--text-primary);
                    padding: 11px 14px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .filter-control:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }
                .filter-control::placeholder { color: var(--text-muted); }
                select.filter-control { appearance: none; cursor: pointer; }
                .filter-actions { display: flex; gap: 10px; }
                .btn-apply {
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.82rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s;
                    white-space: nowrap;
                }
                .btn-apply:hover { background: var(--accent-dim); }
                .btn-reset {
                    background: transparent;
                    border: 1px solid var(--border);
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 11px 20px;
                    font-family: var(--font-head);
                    font-size: 0.82rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s;
                    white-space: nowrap;
                }
                .btn-reset:hover { border-color: var(--border-accent); color: var(--accent); }

                /* ── Story grid ── */
                .story-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 22px; margin-bottom: 40px; }
                .story-tile {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: border-color 0.25s, transform 0.2s;
                }
                .story-tile:hover { border-color: var(--border-accent); transform: translateY(-3px); }
                .story-tile-img { position: relative; height: 210px; overflow: hidden; }
                .story-tile-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.35s ease; }
                .story-tile:hover .story-tile-img img { transform: scale(1.04); }
                .story-status-pill {
                    position: absolute; top: 12px; left: 12px;
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    font-size: 0.7rem;
                    font-weight: 700;
                    backdrop-filter: blur(6px);
                }
                .status-approved { background: rgba(0,166,103,0.9); color: #fff; }
                .status-pending { background: rgba(232,185,74,0.92); color: #2b2004; }

                .story-tile-body { padding: 18px 20px; }
                .story-tile-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
                .story-cat-badge {
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    border-radius: var(--radius-pill);
                    padding: 3px 11px;
                    font-size: 0.7rem;
                    font-weight: 600;
                }
                .story-tags-count { font-size: 0.72rem; color: var(--text-muted); }
                .story-tile-title {
                    font-family: var(--font-head);
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    line-height: 1.35;
                    margin-bottom: 16px;
                    display: block;
                    text-decoration: none;
                }
                .story-tile-title:hover { color: var(--accent); }
                .story-tile-footer { display: flex; align-items: center; gap: 10px; padding-top: 14px; border-top: 1px solid var(--border); }
                .story-tile-footer img { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
                .story-tile-footer h6 { font-size: 0.82rem; font-weight: 700; color: var(--text-primary); margin: 0; }
                .story-tile-footer p { font-size: 0.72rem; color: var(--text-muted); margin: 0; }

                .empty-state { text-align: center; padding: 64px 24px; color: var(--text-muted); font-size: 0.9rem; grid-column: 1 / -1; }
                .empty-state i { font-size: 2.2rem; margin-bottom: 12px; display: block; color: var(--text-muted); }

                /* ── Pagination ── */
                .pagination-nav { display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; }
                .page-link {
                    min-width: 38px; height: 38px;
                    display: inline-flex; align-items: center; justify-content: center;
                    padding: 0 12px;
                    border-radius: 10px;
                    border: 1px solid var(--border);
                    background: var(--bg-card);
                    color: var(--text-secondary);
                    font-size: 0.82rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .page-link:hover { border-color: var(--border-accent); color: var(--accent); }
                .page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .page-link.disabled { opacity: 0.35; pointer-events: none; }

                @media(max-width: 768px) {
                    .trend-hero { padding: 40px 16px; border-radius: 20px; }
                    .trend-heading { font-size: 1.4rem; }
                }

                /* ── LIGHT THEME ── */
                [data-h-theme="light"] {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #F5f5f7;
                    --bg-glass:   rgba(0,100,60,0.035);
                    --bg-glass2:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #7f958d;
                    --border:     rgba(0,100,60,0.1);
                    --border-accent: rgba(0,166,103,0.3);
                    --warn: #b3820f;
                }
                [data-h-theme="light"] .filter-control { background: rgba(0,100,60,0.03); }
                [data-h-theme="light"] .trend-hero { background: linear-gradient(165deg, #0d3324 10%, var(--accent) 170%); }
            `}</style>

            <div className="fc-stories-page">
                <div className="stories-page">
                    <div className="container">
                        {/* ═══════════════ TRENDING HERO ═══════════════ */}
                        {featuredStories.length > 0 && (
                            <div className="trend-hero">
                                <p className="trend-eyebrow">Featured</p>
                                <h2 className="trend-heading">Trending Stories</h2>

                                <div className="swiper trend-swiper" ref={swiperElRef}>
                                    <div className="swiper-wrapper">
                                        {featuredStories.map((story) => (
                                            <div className="swiper-slide" key={story.id}>
                                                <div className="trend-slide">
                                                    <img
                                                        src={`/images/stories/${story.thumbnail}`}
                                                        alt={story.title}
                                                    />
                                                    <div className="trend-slide-overlay">
                                                        <h3 className="trend-slide-title">
                                                            {story.title?.length > 60 ? `${story.title.slice(0, 60)}…` : story.title}
                                                        </h3>
                                                        <Link href={routes.storyDetails(story.slug)} className="trend-read-more">
                                                            <i className="feather-arrow-right" /> Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="trend-controls">
                                    <div className="trend-arrow trend-prev">
                                        <i className="ti ti-chevron-left" />
                                    </div>
                                    <div className="trend-pagination" />
                                    <div className="trend-arrow trend-next">
                                        <i className="ti ti-chevron-right" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ═══════════════ CATEGORIES ═══════════════ */}
                        {categories.length > 0 && (
                            <>
                                <div className="section-heading">
                                    <h5>Trending Categories of Stories</h5>
                                </div>
                                <div className="category-strip">
                                    {categories.map((cat) => (
                                        <Link href={routes.storyCategory(cat.slug)} className="category-chip" key={cat.id}>
                                            <div>
                                                <h6>{cat.name}</h6>
                                                <p>{cat.stories_count ?? 0} stories</p>
                                            </div>
                                            <span className="category-chip-arrow">
                                                <i className="feather-arrow-up-right" />
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* ═══════════════ FILTERS ═══════════════ */}
                        <form onSubmit={applyFilters} className="filters-bar">
                            <div className="filters-grid">
                                <div className="filter-field">
                                    <label>Category</label>
                                    <select
                                        className="filter-control"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map((cat) => (
                                            <option value={cat.id} key={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="filter-field">
                                    <label>Region</label>
                                    <input
                                        type="text"
                                        className="filter-control"
                                        placeholder="e.g., Kigali, Nairobi, Lagos"
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                    />
                                </div>
                                <div className="filter-field">
                                    <label>Keyword</label>
                                    <input
                                        type="text"
                                        className="filter-control"
                                        placeholder="e.g., photography, coding, music"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                    />
                                </div>
                                <div className="filter-actions">
                                    <button type="submit" className="btn-apply">
                                        Apply Filters
                                    </button>
                                    <button type="button" className="btn-reset" onClick={resetFilters}>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* ═══════════════ STORY GRID ═══════════════ */}
                        <div className="story-grid">
                            {storyList.length > 0 ? (
                                storyList.map((story) => {
                                    const status = STATUS_META[story.status];
                                    const tagCount = story.tags ? story.tags.split(',').filter(Boolean).length : 0;
                                    return (
                                        <div className="story-tile" key={story.id}>
                                            <div className="story-tile-img">
                                                <Link href={routes.storyDetails(story.slug)}>
                                                    <img src={`/image/stories/${story.thumbnail}`} alt={story.title} />
                                                </Link>
                                                {status && (
                                                    <span className={`story-status-pill ${status.className}`}>
                                                        <i className={`ti ${status.icon}`} /> {status.label}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="story-tile-body">
                                                <div className="story-tile-meta">
                                                    <span className="story-cat-badge">{story.category?.name}</span>
                                                    {tagCount > 0 && <span className="story-tags-count">+{tagCount} Tags</span>}
                                                </div>
                                                <Link href={routes.storyDetails(story.slug)} className="story-tile-title">
                                                    {story.title?.length > 60 ? `${story.title.slice(0, 60)}…` : story.title}
                                                </Link>
                                                <div className="story-tile-footer">
                                                    <img src="/assets/img/user/profile.jpg" alt="" />
                                                    <div>
                                                        <h6>{story.talent?.name}</h6>
                                                        <p>
                                                            Posted:{' '}
                                                            {story.created_at &&
                                                                new Date(story.created_at).toLocaleDateString('en-US', {
                                                                    month: 'short',
                                                                    day: '2-digit',
                                                                    year: 'numeric',
                                                                })}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="empty-state">
                                    <i className="ti ti-mood-empty" />
                                    No stories match your filters yet.
                                </div>
                            )}
                        </div>

                        {/* ═══════════════ PAGINATION ═══════════════ */}
                        {paginationLinks.length > 3 && (
                            <div className="pagination-nav">
                                {paginationLinks.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url || '#'}
                                        className={`page-link ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                                        preserveScroll
                                    >
                                        {decodePaginationLabel(link.label)}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

StoriesIndex.layout = (page) => <GuestLayout children={page} title="Stories" />;
