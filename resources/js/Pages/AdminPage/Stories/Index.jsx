import React, { useMemo, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/*
|--------------------------------------------------------------------------
| Inline SVG Icon
|--------------------------------------------------------------------------
| Using inline SVG means the icons work without Bootstrap Icons,
| Font Awesome, Lucide, or any external icon library.
*/
function Icon({
    name,
    size = 20,
    strokeWidth = 1.8,
    className = '',
}) {
    const commonProps = {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className: className,
        'aria-hidden': 'true',
    };

    const icons = {
        book: (
            <>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
            </>
        ),
        plus: (
            <>
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </>
        ),
        checkCircle: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 2.5 2.5L16 9" />
            </>
        ),
        clock: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </>
        ),
        xCircle: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="m9 9 6 6" />
                <path d="m15 9-6 6" />
            </>
        ),
        search: (
            <>
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
            </>
        ),
        tag: (
            <>
                <path d="M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z" />
                <circle cx="7.5" cy="7.5" r="1" />
            </>
        ),
        eye: (
            <>
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                <circle cx="12" cy="12" r="2.5" />
            </>
        ),
        edit: (
            <>
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
            </>
        ),
        trash: (
            <>
                <path d="M4 7h16" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M6 7l1 14h10l1-14" />
                <path d="M9 7V4h6v3" />
            </>
        ),
        close: (
            <>
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
            </>
        ),
    };

    return (
        <svg {...commonProps}>
            {icons[name] || icons.book}
        </svg>
    );
}

/*
|--------------------------------------------------------------------------
| Main Page
|--------------------------------------------------------------------------
*/

export default function Index({
    stories = [],
    stats = {},
}) {
    const storyList = Array.isArray(stories)
        ? stories
        : stories?.data ?? [];

    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedStory, setSelectedStory] = useState(null);

    /*
    |--------------------------------------------------------------------------
    | Stats
    |--------------------------------------------------------------------------
    */

    const computedStats = useMemo(() => {
        return {
            total: stats?.total ?? storyList.length,
            approved:
                stats?.approved ??
                storyList.filter(
                    (s) => String(s?.status || '').toLowerCase() === 'approved'
                ).length,
            pending:
                stats?.pending ??
                storyList.filter(
                    (s) => String(s?.status || '').toLowerCase() === 'pending'
                ).length,
            rejected:
                stats?.rejected ??
                storyList.filter(
                    (s) => String(s?.status || '').toLowerCase() === 'rejected'
                ).length,
        };
    }, [stats, storyList]);

    /*
    |--------------------------------------------------------------------------
    | Filter Stories
    |--------------------------------------------------------------------------
    */

    const filteredStories = useMemo(() => {
        const query = search.trim().toLowerCase();

        return storyList.filter((story) => {
            const title = String(story?.title || '').toLowerCase();
            const talent = String(
                story?.talent?.name || story?.talent_name || ''
            ).toLowerCase();
            const category = String(
                story?.category?.name || story?.category_name || ''
            ).toLowerCase();
            const status = String(story?.status || '').toLowerCase();

            const matchesSearch =
                !query ||
                title.includes(query) ||
                talent.includes(query) ||
                category.includes(query);

            const matchesStatus =
                statusFilter === 'all' || status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [storyList, search, statusFilter]);

    /*
    |--------------------------------------------------------------------------
    | Helpers
    |--------------------------------------------------------------------------
    */

    const getStatusClass = (status) => {
        const value = String(status || 'pending').toLowerCase();
        if (value === 'approved') return 'approved';
        if (value === 'published') return 'published';
        if (value === 'rejected') return 'rejected';
        return 'pending';
    };

    const getStatusLabel = (status) => {
        const value = String(status || 'pending').toLowerCase();
        return value.charAt(0).toUpperCase() + value.slice(1);
    };

    const getInitial = (name) => {
        if (!name) return '?';
        return String(name).trim().charAt(0).toUpperCase();
    };

    const getExcerpt = (content) => {
        if (!content) return 'No story description available.';
        const text = String(content)
            .replace(/<[^>]*>/g, '')
            .replace(/\s+/g, ' ')
            .trim();
        if (text.length <= 130) return text;
        return text.substring(0, 130) + '…';
    };

    const assetUrl = (value) => {
        if (!value) return '/images/placeholder-story.png';
        const stringValue = String(value);
        if (/^https?:\/\//i.test(stringValue)) return stringValue;
        if (stringValue.charAt(0) === '/') return stringValue;
        return '/' + stringValue;
    };

    /*
    |--------------------------------------------------------------------------
    | Delete Story
    |--------------------------------------------------------------------------
    */

    const deleteStory = () => {
        if (!selectedStory?.id) return;

        router.delete(route('admin.stories.destroy', selectedStory.id), {
            preserveScroll: true,
            onSuccess: () => setSelectedStory(null),
        });
    };

    const filterChips = [
        { key: 'all', label: 'All', count: computedStats.total },
        { key: 'pending', label: 'Pending', count: computedStats.pending },
        { key: 'approved', label: 'Approved', count: computedStats.approved },
        { key: 'rejected', label: 'Rejected', count: computedStats.rejected },
    ];

    return (
        <AppLayout>
            <Head title="Stories" />

            <div data-h-scope="stories-index" className="stories-index">

                {/* =========================================================
                    MASTHEAD
                ========================================================= */}

                <header className="masthead">
                    <div className="masthead-text">
                        <p className="kicker">Admin — Story desk</p>
                        <h1>Talent stories</h1>
                        <p className="dek">
                            Read, verify and publish the stories talent submit about their work.
                        </p>
                    </div>

                    <Link
                        href={route('admin.stories.create')}
                        className="btn btn-primary"
                    >
                        <Icon name="plus" size={17} />
                        <span>New story</span>
                    </Link>
                </header>

                {/* =========================================================
                    TALLY — the numbers that matter for moderation
                ========================================================= */}

                <section className="tally" aria-label="Story counts">
                    <div className="tally-item tally-item--lead">
                        <strong>{computedStats.pending}</strong>
                        <span>Waiting on you</span>
                    </div>
                    <div className="tally-item">
                        <strong>{computedStats.approved}</strong>
                        <span>Approved</span>
                    </div>
                    <div className="tally-item">
                        <strong>{computedStats.rejected}</strong>
                        <span>Rejected</span>
                    </div>
                    <div className="tally-item">
                        <strong>{computedStats.total}</strong>
                        <span>Submitted in total</span>
                    </div>
                </section>

                {/* =========================================================
                    TOOLBAR
                ========================================================= */}

                <section className="toolbar">
                    <div className="search-field">
                        <Icon name="search" size={18} />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by title, talent or category"
                        />
                        {search && (
                            <button
                                type="button"
                                className="clear-search"
                                onClick={() => setSearch('')}
                                aria-label="Clear search"
                            >
                                <Icon name="close" size={14} />
                            </button>
                        )}
                    </div>

                    <div className="chip-row" role="group" aria-label="Filter by status">
                        {filterChips.map((chip) => (
                            <button
                                key={chip.key}
                                type="button"
                                className={
                                    'chip' +
                                    (statusFilter === chip.key ? ' is-active' : '')
                                }
                                onClick={() => setStatusFilter(chip.key)}
                            >
                                {chip.label}
                                <span className="chip-count">{chip.count}</span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* =========================================================
                    INDEX — one fluid layout for every screen size
                ========================================================= */}

                <section className="index-list">

                    <div className="index-list-head">
                        <span>{filteredStories.length} of {storyList.length} stories</span>
                    </div>

                    {filteredStories.length > 0 ? (

                        <ul className="entries">
                            {filteredStories.map((story) => {
                                const statusClass = getStatusClass(story?.status);
                                const talentName =
                                    story?.talent?.name || story?.talent_name || 'Unknown talent';
                                const categoryName =
                                    story?.category?.name || story?.category_name || 'Uncategorized';

                                return (
                                    <li key={story.id} className="entry">

                                        <Link
                                            href={route('admin.stories.show', story.id)}
                                            className="entry-thumb"
                                        >
                                            <img
                                                src={assetUrl(story?.thumbnail)}
                                                alt={story?.title || 'Story'}
                                                onError={(e) => {
                                                    e.currentTarget.src = '/images/placeholder-story.png';
                                                }}
                                            />
                                        </Link>

                                        <div className="entry-body">
                                            <div className="entry-top">
                                                <Link
                                                    href={route('admin.stories.show', story.id)}
                                                    className="entry-title"
                                                >
                                                    {story?.title || 'Untitled story'}
                                                </Link>
                                                <span className={'status-pill ' + statusClass}>
                                                    <span className="status-dot" />
                                                    {getStatusLabel(story?.status)}
                                                </span>
                                            </div>

                                            <p className="entry-excerpt">{getExcerpt(story?.content)}</p>

                                            <div className="entry-meta">
                                                <span className="byline">
                                                    <span className="byline-avatar">
                                                        {getInitial(talentName)}
                                                    </span>
                                                    By {talentName}
                                                </span>
                                                <span className="entry-category">
                                                    <Icon name="tag" size={13} />
                                                    {categoryName}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="entry-actions">
                                            <Link
                                                href={route('admin.stories.show', story.id)}
                                                className="icon-button"
                                                title="View story"
                                            >
                                                <Icon name="eye" size={16} />
                                            </Link>
                                            <Link
                                                href={route('admin.stories.edit', story.id)}
                                                className="icon-button"
                                                title="Edit story"
                                            >
                                                <Icon name="edit" size={16} />
                                            </Link>
                                            <button
                                                type="button"
                                                className="icon-button danger"
                                                title="Delete story"
                                                onClick={() => setSelectedStory(story)}
                                            >
                                                <Icon name="trash" size={16} />
                                            </button>
                                        </div>

                                    </li>
                                );
                            })}
                        </ul>

                    ) : (

                        <div className="empty-state">
                            <div className="empty-icon">
                                <Icon name="book" size={26} />
                            </div>
                            <h3>
                                {search || statusFilter !== 'all'
                                    ? 'No stories match'
                                    : 'No stories yet'}
                            </h3>
                            <p>
                                {search || statusFilter !== 'all'
                                    ? 'Try a different search term or filter.'
                                    : 'Stories talent submit will appear here for review.'}
                            </p>
                            {(search || statusFilter !== 'all') && (
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        setSearch('');
                                        setStatusFilter('all');
                                    }}
                                >
                                    Clear filters
                                </button>
                            )}
                        </div>

                    )}

                </section>

            </div>

            {/* =============================================================
                DELETE MODAL
            ============================================================= */}

            {selectedStory && (
                <div
                    className="modal-backdrop"
                    data-h-scope="stories-index"
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) setSelectedStory(null);
                    }}
                >
                    <div className="delete-modal">
                        <button
                            type="button"
                            className="modal-close"
                            onClick={() => setSelectedStory(null)}
                            aria-label="Close"
                        >
                            <Icon name="close" size={18} />
                        </button>

                        <div className="delete-modal-icon">
                            <Icon name="trash" size={22} />
                        </div>

                        <h3>Delete this story?</h3>
                        <p>
                            "{selectedStory?.title || 'This story'}" will be permanently removed.
                            This can't be undone.
                        </p>

                        <div className="modal-actions">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setSelectedStory(null)}
                            >
                                Cancel
                            </button>
                            <button type="button" className="btn btn-danger" onClick={deleteStory}>
                                <Icon name="trash" size={16} />
                                Delete story
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* =============================================================
                STYLES
            ============================================================= */}

            <style>{`

                [data-h-scope="stories-index"] {
                    --ink: #1d1d1f;
                    --ink-soft: #6e6e73;
                    --ink-faint: #a1a1a6;
                    --paper: #ffffff;
                    --surface: #ffffff;
                    --line: #e5e5e7;
                    --brand: #48d597;
                    --brand-ink: #157a4e;
                    --brand-wash: #eaf9f1;
                    --amber: #b8790f;
                    --amber-wash: #fbf1de;
                    --clay: #b5433a;
                    --clay-wash: #faeae8;

                    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
                    color: var(--ink);
                }

                [data-h-scope="stories-index"] * {
                    box-sizing: border-box;
                }

                .stories-index {
                    background: var(--paper);
                    min-height: 100vh;
                    padding: 40px clamp(18px, 4vw, 56px) 64px;
                }

                .stories-index > * {
                    max-width: 1080px;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* -----------------------------------------------------------
                   MASTHEAD
                ----------------------------------------------------------- */

                .masthead {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;
                    padding-bottom: 22px;
                    border-bottom: 2px solid var(--ink);
                    margin-bottom: 30px;
                    flex-wrap: wrap;
                }

                .kicker {
                    margin: 0 0 5px;
                    font-size: 11px;
                    font-weight: 600;
                    color: var(--brand-ink);
                    letter-spacing: 0.01em;
                }

                .masthead h1 {
                    margin: 0;
                    font-weight: 700;
                    font-size: clamp(20px, 2.4vw, 26px);
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                }

                .dek {
                    margin: 6px 0 0;
                    font-size: 12.5px;
                    color: var(--ink-soft);
                    max-width: 46ch;
                }

                /* -----------------------------------------------------------
                   BUTTONS
                ----------------------------------------------------------- */

                .btn {
                    height: 36px;
                    padding: 0 15px;
                    border-radius: 7px;
                    border: 1.5px solid transparent;
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    font-family: inherit;
                    font-size: 12.5px;
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: transform 0.12s ease, background 0.12s ease, border-color 0.12s ease;
                }

                .btn:hover {
                    transform: translateY(-1px);
                }

                .btn-primary {
                    background: var(--ink);
                    color: #fff;
                    border-color: var(--ink);
                }

                .btn-primary:hover {
                    background: var(--brand-ink);
                    border-color: var(--brand-ink);
                }

                .btn-secondary {
                    background: transparent;
                    color: var(--ink);
                    border-color: var(--line);
                }

                .btn-secondary:hover {
                    border-color: var(--ink-faint);
                }

                .btn-danger {
                    background: var(--clay);
                    color: #fff;
                    border-color: var(--clay);
                }

                .btn-danger:hover {
                    background: #983630;
                    border-color: #983630;
                }

                /* -----------------------------------------------------------
                   TALLY
                ----------------------------------------------------------- */

                .tally {
                    display: flex;
                    gap: clamp(16px, 3vw, 32px);
                    padding: 4px 0 24px;
                    flex-wrap: wrap;
                }

                .tally-item {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    padding-left: clamp(16px, 3vw, 32px);
                    border-left: 1px solid var(--line);
                }

                .tally-item:first-child {
                    padding-left: 0;
                    border-left: 0;
                }

                .tally-item strong {
                    font-weight: 700;
                    font-size: 19px;
                    line-height: 1;
                }

                .tally-item--lead strong {
                    font-size: 26px;
                    color: var(--brand-ink);
                }

                .tally-item span {
                    font-size: 11px;
                    color: var(--ink-soft);
                }

                /* -----------------------------------------------------------
                   TOOLBAR
                ----------------------------------------------------------- */

                .toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    flex-wrap: wrap;
                    padding: 16px 0;
                    border-top: 1px solid var(--line);
                    border-bottom: 1px solid var(--line);
                    margin-bottom: 22px;
                }

                .search-field {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: var(--ink-faint);
                    min-width: 220px;
                    flex: 1 1 260px;
                    max-width: 380px;
                    border-bottom: 1.5px solid var(--line);
                    padding-bottom: 7px;
                }

                .search-field input {
                    flex: 1;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    font-family: inherit;
                    font-size: 13px;
                    color: var(--ink);
                }

                .search-field input::placeholder {
                    color: var(--ink-faint);
                }

                .search-field:has(input:focus) {
                    border-color: var(--brand-ink);
                }

                .clear-search {
                    border: 0;
                    background: transparent;
                    color: var(--ink-faint);
                    cursor: pointer;
                    display: flex;
                    padding: 2px;
                }

                .clear-search:hover {
                    color: var(--ink);
                }

                .chip-row {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                .chip {
                    height: 30px;
                    padding: 0 12px;
                    border-radius: 999px;
                    border: 1px solid var(--line);
                    background: var(--surface);
                    color: var(--ink-soft);
                    font-family: inherit;
                    font-size: 11.5px;
                    font-weight: 600;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                }

                .chip:hover {
                    border-color: var(--ink-faint);
                    color: var(--ink);
                }

                .chip.is-active {
                    background: var(--ink);
                    border-color: var(--ink);
                    color: #fff;
                }

                .chip-count {
                    font-size: 11px;
                    opacity: 0.7;
                }

                /* -----------------------------------------------------------
                   INDEX LIST
                ----------------------------------------------------------- */

                .index-list-head {
                    font-size: 12px;
                    color: var(--ink-faint);
                    margin-bottom: 10px;
                }

                .entries {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
                    gap: 14px;
                }

                .entry {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid var(--line);
                    border-radius: 10px;
                    overflow: hidden;
                    background: var(--surface);
                    transition: border-color 0.12s ease, box-shadow 0.12s ease;
                }

                .entry:hover {
                    border-color: var(--ink-faint);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }

                .entry-thumb {
                    width: 100%;
                    height: 120px;
                    flex-shrink: 0;
                    background: var(--line);
                    display: block;
                }

                .entry-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .entry-body {
                    flex: 1;
                    min-width: 0;
                    padding: 12px 14px 6px;
                }

                .entry-top {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 8px;
                }

                .entry-title {
                    font-weight: 600;
                    font-size: 13px;
                    color: var(--ink);
                    text-decoration: none;
                    line-height: 1.35;
                }

                .entry-title:hover {
                    color: var(--brand-ink);
                }

                .entry-excerpt {
                    margin: 5px 0 9px;
                    font-size: 11.5px;
                    color: var(--ink-soft);
                    line-height: 1.5;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .entry-meta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                .byline {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    font-weight: 600;
                    color: var(--ink-soft);
                }

                .byline-avatar {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: var(--brand-wash);
                    color: var(--brand-ink);
                    font-size: 9px;
                    font-weight: 800;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .entry-category {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 10.5px;
                    color: var(--ink-faint);
                }

                /* -----------------------------------------------------------
                   STATUS PILL
                ----------------------------------------------------------- */

                .status-pill {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 3px 8px;
                    border-radius: 999px;
                    font-size: 9.5px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .status-pill.approved,
                .status-pill.published {
                    color: var(--brand-ink);
                    background: var(--brand-wash);
                }

                .status-pill.approved .status-dot,
                .status-pill.published .status-dot {
                    background: var(--brand);
                }

                .status-pill.pending {
                    color: var(--amber);
                    background: var(--amber-wash);
                }

                .status-pill.pending .status-dot {
                    background: var(--amber);
                }

                .status-pill.rejected {
                    color: var(--clay);
                    background: var(--clay-wash);
                }

                .status-pill.rejected .status-dot {
                    background: var(--clay);
                }

                /* -----------------------------------------------------------
                   ACTIONS
                ----------------------------------------------------------- */

                .entry-actions {
                    display: flex;
                    gap: 6px;
                    padding: 8px 14px 12px;
                    border-top: 1px solid var(--line);
                    margin-top: 8px;
                }

                .icon-button {
                    width: 28px;
                    height: 28px;
                    border: 1px solid var(--line);
                    border-radius: 6px;
                    background: var(--surface);
                    color: var(--ink-soft);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    cursor: pointer;
                }

                .icon-button:hover {
                    color: var(--brand-ink);
                    border-color: var(--brand);
                    background: var(--brand-wash);
                }

                .icon-button.danger:hover {
                    color: var(--clay);
                    border-color: var(--clay);
                    background: var(--clay-wash);
                }

                /* -----------------------------------------------------------
                   EMPTY STATE
                ----------------------------------------------------------- */

                .empty-state {
                    text-align: center;
                    padding: 70px 20px;
                }

                .empty-icon {
                    width: 56px;
                    height: 56px;
                    margin: 0 auto 16px;
                    border-radius: 14px;
                    background: var(--brand-wash);
                    color: var(--brand-ink);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .empty-state h3 {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 600;
                }

                .empty-state p {
                    margin: 6px 0 16px;
                    color: var(--ink-soft);
                    font-size: 12.5px;
                }

                /* -----------------------------------------------------------
                   DELETE MODAL
                ----------------------------------------------------------- */

                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(23, 27, 31, 0.5);
                }

                .delete-modal {
                    position: relative;
                    width: min(400px, 100%);
                    background: var(--surface);
                    border-radius: 14px;
                    padding: 26px;
                    text-align: center;
                }

                .modal-close {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    width: 30px;
                    height: 30px;
                    border: 0;
                    border-radius: 7px;
                    background: var(--paper);
                    color: var(--ink-soft);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                .delete-modal-icon {
                    width: 50px;
                    height: 50px;
                    margin: 4px auto 14px;
                    border-radius: 50%;
                    background: var(--clay-wash);
                    color: var(--clay);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .delete-modal h3 {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 600;
                }

                .delete-modal p {
                    margin: 7px 0 18px;
                    color: var(--ink-soft);
                    font-size: 12px;
                    line-height: 1.55;
                }

                .modal-actions {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                }

                /* -----------------------------------------------------------
                   RESPONSIVE — one entry layout, no duplicate markup
                ----------------------------------------------------------- */

                @media (max-width: 720px) {

                    .masthead {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .masthead .btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .toolbar {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .search-field {
                        max-width: none;
                    }

                    .entries {
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    }
                }

                @media (max-width: 460px) {

                    .entries {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 10px;
                    }

                    .entry-body {
                        padding: 10px 10px 4px;
                    }

                    .entry-actions {
                        padding: 6px 10px 10px;
                    }
                }

            `}</style>

        </AppLayout>
    );
}