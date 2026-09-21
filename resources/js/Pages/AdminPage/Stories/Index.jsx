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

        wallet: (
            <>
                <path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6" />
                <path d="M16 15h.01" />
            </>
        ),

        plus: (
            <>
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </>
        ),

        file: (
            <>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8" />
                <path d="M8 17h6" />
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

        grid: (
            <>
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
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

        chevronDown: (
            <>
                <path d="m6 9 6 6 6-6" />
            </>
        ),

        chevronLeft: (
            <>
                <path d="m15 18-6-6 6-6" />
            </>
        ),

        chevronRight: (
            <>
                <path d="m9 18 6-6-6-6" />
            </>
        ),

        alert: (
            <>
                <path d="M10.3 3.3 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
            </>
        ),

        layers: (
            <>
                <path d="m12 3-9 5 9 5 9-5-9-5Z" />
                <path d="m3 12 9 5 9-5" />
                <path d="m3 16 9 5 9-5" />
            </>
        ),
    };

    return (
        <svg {...commonProps}>
            {icons[name] || icons.file}
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
            total:
                stats?.total ??
                storyList.length,

            approved:
                stats?.approved ??
                storyList.filter(
                    (story) =>
                        String(story?.status || '').toLowerCase() ===
                        'approved'
                ).length,

            pending:
                stats?.pending ??
                storyList.filter(
                    (story) =>
                        String(story?.status || '').toLowerCase() ===
                        'pending'
                ).length,

            rejected:
                stats?.rejected ??
                storyList.filter(
                    (story) =>
                        String(story?.status || '').toLowerCase() ===
                        'rejected'
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
                story?.talent?.name ||
                    story?.talent_name ||
                    ''
            ).toLowerCase();

            const category = String(
                story?.category?.name ||
                    story?.category_name ||
                    ''
            ).toLowerCase();

            const status = String(
                story?.status || ''
            ).toLowerCase();

            const matchesSearch =
                !query ||
                title.includes(query) ||
                talent.includes(query) ||
                category.includes(query);

            const matchesStatus =
                statusFilter === 'all' ||
                status === statusFilter;

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

        if (value === 'approved') {
            return 'approved';
        }

        if (value === 'published') {
            return 'published';
        }

        if (value === 'rejected') {
            return 'rejected';
        }

        return 'pending';
    };

    const getStatusLabel = (status) => {
        const value = String(status || 'pending').toLowerCase();

        return value.charAt(0).toUpperCase() + value.slice(1);
    };

    const getInitial = (name) => {
        if (!name) {
            return '?';
        }

        return String(name)
            .trim()
            .charAt(0)
            .toUpperCase();
    };

    const getExcerpt = (content) => {
        if (!content) {
            return 'No story description available.';
        }

        const text = String(content)
            .replace(/<[^>]*>/g, '')
            .replace(/\s+/g, ' ')
            .trim();

        if (text.length <= 100) {
            return text;
        }

        return text.substring(0, 100) + '…';
    };

    const assetUrl = (value) => {
        if (!value) {
            return '/images/placeholder-story.png';
        }

        const stringValue = String(value);

        if (/^https?:\/\//i.test(stringValue)) {
            return stringValue;
        }

        if (stringValue.charAt(0) === '/') {
            return stringValue;
        }

        return '/' + stringValue;
    };

    /*
    |--------------------------------------------------------------------------
    | Delete Story
    |--------------------------------------------------------------------------
    */

    const deleteStory = () => {
        if (!selectedStory?.id) {
            return;
        }

        router.delete(
            route(
                'admin.stories.destroy',
                selectedStory.id
            ),
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSelectedStory(null);
                },
            }
        );
    };

    return (
        <AppLayout>
            <Head title="Stories" />

            <div className="stories-page">

                {/* =========================================================
                    HEADER
                ========================================================= */}

                <header className="stories-header">

                    <div className="header-left">

                        <div className="header-icon">
                            <Icon
                                name="book"
                                size={24}
                            />
                        </div>

                        <div>
                            <div className="breadcrumb">
                                Admin
                                <span>/</span>
                                Stories
                            </div>

                            <h1>Stories</h1>

                            <p>
                                Manage and moderate talent stories
                            </p>
                        </div>

                    </div>

                    <div className="header-actions">

                        <Link
                            href={route(
                                'admin.stories.create'
                            )}
                            className="btn btn-primary"
                        >
                            <Icon
                                name="plus"
                                size={18}
                            />

                            <span>
                                Create Story
                            </span>
                        </Link>

                    </div>

                </header>


                {/* =========================================================
                    STATS
                ========================================================= */}

                <section className="stats-grid">

                    <div className="stat-card">

                        <div className="stat-content">
                            <span className="stat-label">
                                Total Stories
                            </span>

                            <strong className="stat-value">
                                {computedStats.total}
                            </strong>

                            <span className="stat-description">
                                All submitted stories
                            </span>
                        </div>

                        <div className="stat-icon blue">
                            <Icon
                                name="file"
                                size={22}
                            />
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-content">
                            <span className="stat-label">
                                Approved
                            </span>

                            <strong className="stat-value">
                                {computedStats.approved}
                            </strong>

                            <span className="stat-description">
                                Approved stories
                            </span>
                        </div>

                        <div className="stat-icon green">
                            <Icon
                                name="checkCircle"
                                size={22}
                            />
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-content">
                            <span className="stat-label">
                                Pending
                            </span>

                            <strong className="stat-value">
                                {computedStats.pending}
                            </strong>

                            <span className="stat-description">
                                Awaiting moderation
                            </span>
                        </div>

                        <div className="stat-icon orange">
                            <Icon
                                name="clock"
                                size={22}
                            />
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-content">
                            <span className="stat-label">
                                Rejected
                            </span>

                            <strong className="stat-value">
                                {computedStats.rejected}
                            </strong>

                            <span className="stat-description">
                                Rejected stories
                            </span>
                        </div>

                        <div className="stat-icon red">
                            <Icon
                                name="xCircle"
                                size={22}
                            />
                        </div>

                    </div>

                </section>


                {/* =========================================================
                    MAIN CARD
                ========================================================= */}

                <section className="stories-card">

                    <div className="stories-card-header">

                        <div>
                            <div className="section-eyebrow">
                                <Icon
                                    name="layers"
                                    size={15}
                                />

                                STORY LIBRARY
                            </div>

                            <h2>
                                All Stories
                            </h2>

                            <p>
                                Browse, review and manage submitted stories.
                            </p>
                        </div>

                        <div className="stories-count">
                            {filteredStories.length}
                            <span>
                                stories
                            </span>
                        </div>

                    </div>


                    {/* =====================================================
                        TOOLBAR
                    ===================================================== */}

                    <div className="stories-toolbar">

                        <div className="search-box">

                            <Icon
                                name="search"
                                size={19}
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search stories, talents or categories..."
                            />

                            {search && (
                                <button
                                    type="button"
                                    className="clear-search"
                                    onClick={() => setSearch('')}
                                    aria-label="Clear search"
                                >
                                    <Icon
                                        name="close"
                                        size={15}
                                    />
                                </button>
                            )}

                        </div>


                        <div className="filter-wrapper">

                            <Icon
                                name="grid"
                                size={17}
                            />

                            <select
                                value={statusFilter}
                                onChange={(e) =>
                                    setStatusFilter(
                                        e.target.value
                                    )
                                }
                                aria-label="Filter by status"
                            >
                                <option value="all">
                                    All statuses
                                </option>

                                <option value="pending">
                                    Pending
                                </option>

                                <option value="approved">
                                    Approved
                                </option>

                                <option value="published">
                                    Published
                                </option>

                                <option value="rejected">
                                    Rejected
                                </option>
                            </select>

                            <Icon
                                name="chevronDown"
                                size={16}
                            />

                        </div>

                    </div>


                    {/* =====================================================
                        DESKTOP TABLE
                    ===================================================== */}

                    <div className="table-wrapper">

                        {filteredStories.length > 0 ? (

                            <table className="stories-table">

                                <thead>
                                    <tr>

                                        <th>
                                            Story
                                        </th>

                                        <th>
                                            Talent
                                        </th>

                                        <th>
                                            Category
                                        </th>

                                        <th>
                                            Status
                                        </th>

                                        <th className="actions-column">
                                            Actions
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    {filteredStories.map(
                                        (story) => {

                                            const statusClass =
                                                getStatusClass(
                                                    story?.status
                                                );

                                            const talentName =
                                                story?.talent?.name ||
                                                story?.talent_name ||
                                                'Unknown talent';

                                            const categoryName =
                                                story?.category?.name ||
                                                story?.category_name ||
                                                'Uncategorized';

                                            return (
                                                <tr
                                                    key={story.id}
                                                >

                                                    {/* Story */}

                                                    <td>

                                                        <div className="story-cell">

                                                            <div className="story-thumbnail">

                                                                <img
                                                                    src={assetUrl(
                                                                        story?.thumbnail
                                                                    )}
                                                                    alt={
                                                                        story?.title ||
                                                                        'Story'
                                                                    }
                                                                    onError={(
                                                                        e
                                                                    ) => {
                                                                        e.currentTarget.src =
                                                                            '/images/placeholder-story.png';
                                                                    }}
                                                                />

                                                            </div>

                                                            <div className="story-information">

                                                                <Link
                                                                    href={route(
                                                                        'admin.stories.show',
                                                                        story.id
                                                                    )}
                                                                    className="story-title"
                                                                >
                                                                    {story?.title ||
                                                                        'Untitled Story'}
                                                                </Link>

                                                                <p>
                                                                    {getExcerpt(
                                                                        story?.content
                                                                    )}
                                                                </p>

                                                            </div>

                                                        </div>

                                                    </td>


                                                    {/* Talent */}

                                                    <td>

                                                        <div className="talent-cell">

                                                            <div className="talent-avatar">
                                                                {getInitial(
                                                                    talentName
                                                                )}
                                                            </div>

                                                            <div>

                                                                <span className="talent-name">
                                                                    {talentName}
                                                                </span>

                                                                {story?.talent?.email && (
                                                                    <span className="talent-email">
                                                                        {
                                                                            story
                                                                                .talent
                                                                                .email
                                                                        }
                                                                    </span>
                                                                )}

                                                            </div>

                                                        </div>

                                                    </td>


                                                    {/* Category */}

                                                    <td>

                                                        <span className="category-badge">

                                                            <Icon
                                                                name="tag"
                                                                size={14}
                                                            />

                                                            {categoryName}

                                                        </span>

                                                    </td>


                                                    {/* Status */}

                                                    <td>

                                                        <span
                                                            className={
                                                                'status-badge ' +
                                                                statusClass
                                                            }
                                                        >

                                                            <span className="status-dot" />

                                                            {getStatusLabel(
                                                                story?.status
                                                            )}

                                                        </span>

                                                    </td>


                                                    {/* Actions */}

                                                    <td>

                                                        <div className="table-actions">

                                                            <Link
                                                                href={route(
                                                                    'admin.stories.show',
                                                                    story.id
                                                                )}
                                                                className="icon-button"
                                                                title="View story"
                                                            >
                                                                <Icon
                                                                    name="eye"
                                                                    size={17}
                                                                />
                                                            </Link>


                                                            <Link
                                                                href={route(
                                                                    'admin.stories.edit',
                                                                    story.id
                                                                )}
                                                                className="icon-button"
                                                                title="Edit story"
                                                            >
                                                                <Icon
                                                                    name="edit"
                                                                    size={17}
                                                                />
                                                            </Link>


                                                            <button
                                                                type="button"
                                                                className="icon-button danger"
                                                                title="Delete story"
                                                                onClick={() =>
                                                                    setSelectedStory(
                                                                        story
                                                                    )
                                                                }
                                                            >
                                                                <Icon
                                                                    name="trash"
                                                                    size={17}
                                                                />
                                                            </button>

                                                        </div>

                                                    </td>

                                                </tr>
                                            );
                                        }
                                    )}

                                </tbody>

                            </table>

                        ) : (

                            <div className="empty-state">

                                <div className="empty-icon">
                                    <Icon
                                        name="file"
                                        size={30}
                                    />
                                </div>

                                <h3>
                                    {search ||
                                    statusFilter !== 'all'
                                        ? 'No stories found'
                                        : 'No stories yet'}
                                </h3>

                                <p>
                                    {search ||
                                    statusFilter !== 'all'
                                        ? 'Try changing your search or filter.'
                                        : 'Create your first story to get started.'}
                                </p>

                                {search ||
                                statusFilter !== 'all' ? (

                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => {
                                            setSearch('');
                                            setStatusFilter(
                                                'all'
                                            );
                                        }}
                                    >
                                        Clear Filters
                                    </button>

                                ) : (

                                    <Link
                                        href={route(
                                            'admin.stories.create'
                                        )}
                                        className="btn btn-primary"
                                    >
                                        <Icon
                                            name="plus"
                                            size={17}
                                        />

                                        Create Story
                                    </Link>

                                )}

                            </div>

                        )}

                    </div>


                    {/* =====================================================
                        MOBILE CARDS
                    ===================================================== */}

                    {filteredStories.length > 0 && (

                        <div className="mobile-story-list">

                            {filteredStories.map(
                                (story) => {

                                    const statusClass =
                                        getStatusClass(
                                            story?.status
                                        );

                                    const talentName =
                                        story?.talent?.name ||
                                        story?.talent_name ||
                                        'Unknown talent';

                                    const categoryName =
                                        story?.category?.name ||
                                        story?.category_name ||
                                        'Uncategorized';

                                    return (
                                        <article
                                            key={story.id}
                                            className="mobile-story-card"
                                        >

                                            <div className="mobile-story-top">

                                                <div className="mobile-story-image">

                                                    <img
                                                        src={assetUrl(
                                                            story?.thumbnail
                                                        )}
                                                        alt={
                                                            story?.title ||
                                                            'Story'
                                                        }
                                                        onError={(
                                                            e
                                                        ) => {
                                                            e.currentTarget.src =
                                                                '/images/placeholder-story.png';
                                                        }}
                                                    />

                                                </div>

                                                <div className="mobile-story-info">

                                                    <Link
                                                        href={route(
                                                            'admin.stories.show',
                                                            story.id
                                                        )}
                                                        className="story-title"
                                                    >
                                                        {story?.title ||
                                                            'Untitled Story'}
                                                    </Link>

                                                    <p>
                                                        {getExcerpt(
                                                            story?.content
                                                        )}
                                                    </p>

                                                </div>

                                            </div>


                                            <div className="mobile-story-meta">

                                                <div className="mobile-meta-item">

                                                    <div className="talent-avatar small">
                                                        {getInitial(
                                                            talentName
                                                        )}
                                                    </div>

                                                    <span>
                                                        {talentName}
                                                    </span>

                                                </div>


                                                <span className="category-badge">

                                                    <Icon
                                                        name="tag"
                                                        size={13}
                                                    />

                                                    {categoryName}

                                                </span>


                                                <span
                                                    className={
                                                        'status-badge ' +
                                                        statusClass
                                                    }
                                                >

                                                    <span className="status-dot" />

                                                    {getStatusLabel(
                                                        story?.status
                                                    )}

                                                </span>

                                            </div>


                                            <div className="mobile-story-actions">

                                                <Link
                                                    href={route(
                                                        'admin.stories.show',
                                                        story.id
                                                    )}
                                                    className="mobile-action"
                                                >
                                                    <Icon
                                                        name="eye"
                                                        size={16}
                                                    />

                                                    View
                                                </Link>

                                                <Link
                                                    href={route(
                                                        'admin.stories.edit',
                                                        story.id
                                                    )}
                                                    className="mobile-action"
                                                >
                                                    <Icon
                                                        name="edit"
                                                        size={16}
                                                    />

                                                    Edit
                                                </Link>

                                                <button
                                                    type="button"
                                                    className="mobile-action danger"
                                                    onClick={() =>
                                                        setSelectedStory(
                                                            story
                                                        )
                                                    }
                                                >
                                                    <Icon
                                                        name="trash"
                                                        size={16}
                                                    />

                                                    Delete
                                                </button>

                                            </div>

                                        </article>
                                    );
                                }
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
                    onMouseDown={(e) => {
                        if (
                            e.target ===
                            e.currentTarget
                        ) {
                            setSelectedStory(null);
                        }
                    }}
                >

                    <div className="delete-modal">

                        <button
                            type="button"
                            className="modal-close"
                            onClick={() =>
                                setSelectedStory(null)
                            }
                            aria-label="Close"
                        >
                            <Icon
                                name="close"
                                size={19}
                            />
                        </button>


                        <div className="delete-modal-icon">
                            <Icon
                                name="trash"
                                size={25}
                            />
                        </div>


                        <h3>
                            Delete story?
                        </h3>

                        <p>
                            You are about to permanently delete
                            <strong>
                                {' "'}
                                {selectedStory?.title ||
                                    'this story'}
                                {'"'}
                            </strong>
                            . This action cannot be undone.
                        </p>


                        <div className="modal-actions">

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() =>
                                    setSelectedStory(null)
                                }
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={deleteStory}
                            >
                                <Icon
                                    name="trash"
                                    size={17}
                                />

                                Delete Story
                            </button>

                        </div>

                    </div>

                </div>

            )}


            {/* =============================================================
                STYLES
            ============================================================= */}

            <style>{`

                * {
                    box-sizing: border-box;
                }

                .stories-page {
                    min-height: 100vh;
                    background: #f7f9fc;
                    color: #172033;
                    padding: 28px;
                }

                /* ---------------------------------------------------------
                   HEADER
                --------------------------------------------------------- */

                .stories-header {
                    max-width: 1440px;
                    margin: 0 auto 28px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .header-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ecfdf5;
                    color: #059669;
                    border: 1px solid #d1fae5;
                    flex-shrink: 0;
                }

                .breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    font-weight: 600;
                    color: #98a2b3;
                    margin-bottom: 5px;
                }

                .breadcrumb span {
                    color: #cbd5e1;
                }

                .stories-header h1 {
                    margin: 0;
                    font-size: 28px;
                    line-height: 1.2;
                    font-weight: 750;
                    letter-spacing: -0.6px;
                    color: #101828;
                }

                .stories-header p {
                    margin: 5px 0 0;
                    font-size: 14px;
                    color: #667085;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                /* ---------------------------------------------------------
                   BUTTONS
                --------------------------------------------------------- */

                .btn {
                    height: 42px;
                    padding: 0 16px;
                    border-radius: 10px;
                    border: 1px solid transparent;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 13px;
                    font-weight: 650;
                    text-decoration: none;
                    cursor: pointer;
                    transition:
                        transform 0.15s ease,
                        box-shadow 0.15s ease,
                        background 0.15s ease,
                        border-color 0.15s ease;
                    white-space: nowrap;
                }

                .btn:hover {
                    transform: translateY(-1px);
                }

                .btn-primary {
                    background: #059669;
                    color: #ffffff;
                    border-color: #059669;
                    box-shadow: 0 2px 5px rgba(5, 150, 105, 0.18);
                }

                .btn-primary:hover {
                    background: #047857;
                    border-color: #047857;
                }

                .btn-secondary {
                    background: #ffffff;
                    color: #344054;
                    border-color: #d0d5dd;
                }

                .btn-secondary:hover {
                    background: #f9fafb;
                    border-color: #98a2b3;
                }

                .btn-danger {
                    background: #dc2626;
                    color: white;
                    border-color: #dc2626;
                }

                .btn-danger:hover {
                    background: #b91c1c;
                }

                /* ---------------------------------------------------------
                   STATS
                --------------------------------------------------------- */

                .stats-grid {
                    max-width: 1440px;
                    margin: 0 auto 24px;
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 16px;
                }

                .stat-card {
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 15px;
                    padding: 20px;
                    min-height: 130px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 14px;
                    box-shadow: 0 2px 5px rgba(16, 24, 40, 0.025);
                }

                .stat-content {
                    min-width: 0;
                }

                .stat-label {
                    display: block;
                    color: #667085;
                    font-size: 12px;
                    font-weight: 650;
                    margin-bottom: 8px;
                }

                .stat-value {
                    display: block;
                    color: #101828;
                    font-size: 28px;
                    line-height: 1;
                    letter-spacing: -0.5px;
                }

                .stat-description {
                    display: block;
                    color: #98a2b3;
                    font-size: 11px;
                    margin-top: 9px;
                }

                .stat-icon {
                    width: 43px;
                    height: 43px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .stat-icon.blue {
                    color: #2563eb;
                    background: #eff6ff;
                }

                .stat-icon.green {
                    color: #059669;
                    background: #ecfdf5;
                }

                .stat-icon.orange {
                    color: #d97706;
                    background: #fffbeb;
                }

                .stat-icon.red {
                    color: #dc2626;
                    background: #fef2f2;
                }

                /* ---------------------------------------------------------
                   MAIN CARD
                --------------------------------------------------------- */

                .stories-card {
                    max-width: 1440px;
                    margin: 0 auto;
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 16px;
                    box-shadow: 0 3px 10px rgba(16, 24, 40, 0.035);
                    overflow: hidden;
                }

                .stories-card-header {
                    padding: 22px 24px 18px;
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;
                    border-bottom: 1px solid #eef1f5;
                }

                .section-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: #059669;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    margin-bottom: 7px;
                }

                .stories-card-header h2 {
                    margin: 0;
                    font-size: 19px;
                    font-weight: 750;
                    color: #101828;
                }

                .stories-card-header p {
                    margin: 5px 0 0;
                    font-size: 13px;
                    color: #667085;
                }

                .stories-count {
                    color: #101828;
                    font-size: 16px;
                    font-weight: 750;
                    white-space: nowrap;
                }

                .stories-count span {
                    color: #98a2b3;
                    font-size: 12px;
                    font-weight: 500;
                    margin-left: 4px;
                }

                /* ---------------------------------------------------------
                   TOOLBAR
                --------------------------------------------------------- */

                .stories-toolbar {
                    padding: 16px 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    border-bottom: 1px solid #eef1f5;
                    background: #fcfdfe;
                }

                .search-box {
                    width: min(480px, 100%);
                    height: 42px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    color: #98a2b3;
                }

                .search-box > svg {
                    position: absolute;
                    left: 13px;
                    pointer-events: none;
                }

                .search-box input {
                    width: 100%;
                    height: 100%;
                    border: 1px solid #dfe3e8;
                    background: #ffffff;
                    border-radius: 9px;
                    padding: 0 40px;
                    color: #101828;
                    font-size: 13px;
                    outline: none;
                    transition:
                        border-color 0.15s ease,
                        box-shadow 0.15s ease;
                }

                .search-box input::placeholder {
                    color: #a0a8b5;
                }

                .search-box input:focus {
                    border-color: #10b981;
                    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
                }

                .clear-search {
                    position: absolute;
                    right: 10px;
                    width: 25px;
                    height: 25px;
                    border: 0;
                    border-radius: 6px;
                    background: #f2f4f7;
                    color: #667085;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                .clear-search:hover {
                    background: #e4e7ec;
                }

                .filter-wrapper {
                    height: 42px;
                    min-width: 175px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 0 12px;
                    border: 1px solid #dfe3e8;
                    border-radius: 9px;
                    background: #ffffff;
                    color: #667085;
                }

                .filter-wrapper select {
                    appearance: none;
                    -webkit-appearance: none;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    width: 100%;
                    color: #344054;
                    font-size: 13px;
                    cursor: pointer;
                }

                .filter-wrapper > svg:last-child {
                    pointer-events: none;
                    flex-shrink: 0;
                }

                /* ---------------------------------------------------------
                   TABLE
                --------------------------------------------------------- */

                .table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                }

                .stories-table {
                    width: 100%;
                    min-width: 950px;
                    border-collapse: collapse;
                }

                .stories-table thead {
                    background: #fafbfc;
                }

                .stories-table th {
                    padding: 12px 20px;
                    text-align: left;
                    color: #667085;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.7px;
                    text-transform: uppercase;
                    border-bottom: 1px solid #eef1f5;
                    white-space: nowrap;
                }

                .stories-table td {
                    padding: 15px 20px;
                    border-bottom: 1px solid #f0f2f5;
                    vertical-align: middle;
                }

                .stories-table tbody tr {
                    transition: background 0.15s ease;
                }

                .stories-table tbody tr:hover {
                    background: #fcfdfd;
                }

                .stories-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .actions-column {
                    width: 130px;
                    text-align: right !important;
                }

                /* ---------------------------------------------------------
                   STORY CELL
                --------------------------------------------------------- */

                .story-cell {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    min-width: 330px;
                }

                .story-thumbnail {
                    width: 58px;
                    height: 58px;
                    flex-shrink: 0;
                    overflow: hidden;
                    border-radius: 10px;
                    background: #f2f4f7;
                    border: 1px solid #eaecf0;
                }

                .story-thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .story-information {
                    min-width: 0;
                }

                .story-title {
                    display: block;
                    max-width: 320px;
                    color: #101828;
                    font-size: 13px;
                    font-weight: 700;
                    line-height: 1.35;
                    text-decoration: none;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .story-title:hover {
                    color: #059669;
                }

                .story-information p {
                    max-width: 340px;
                    margin: 5px 0 0;
                    color: #98a2b3;
                    font-size: 11px;
                    line-height: 1.45;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* ---------------------------------------------------------
                   TALENT
                --------------------------------------------------------- */

                .talent-cell {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                }

                .talent-avatar {
                    width: 34px;
                    height: 34px;
                    flex-shrink: 0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ecfdf5;
                    color: #047857;
                    border: 1px solid #d1fae5;
                    font-size: 12px;
                    font-weight: 800;
                }

                .talent-avatar.small {
                    width: 28px;
                    height: 28px;
                    font-size: 10px;
                }

                .talent-name {
                    display: block;
                    max-width: 150px;
                    color: #344054;
                    font-size: 12px;
                    font-weight: 650;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .talent-email {
                    display: block;
                    max-width: 170px;
                    color: #98a2b3;
                    font-size: 10px;
                    margin-top: 2px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* ---------------------------------------------------------
                   BADGES
                --------------------------------------------------------- */

                .category-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 8px;
                    border-radius: 7px;
                    background: #f2f4f7;
                    color: #475467;
                    font-size: 10px;
                    font-weight: 650;
                    white-space: nowrap;
                }

                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 5px 9px;
                    border-radius: 999px;
                    font-size: 10px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .status-badge.approved,
                .status-badge.published {
                    color: #047857;
                    background: #ecfdf5;
                }

                .status-badge.approved .status-dot,
                .status-badge.published .status-dot {
                    background: #10b981;
                }

                .status-badge.pending {
                    color: #b45309;
                    background: #fffbeb;
                }

                .status-badge.pending .status-dot {
                    background: #f59e0b;
                }

                .status-badge.rejected {
                    color: #b91c1c;
                    background: #fef2f2;
                }

                .status-badge.rejected .status-dot {
                    background: #ef4444;
                }

                /* ---------------------------------------------------------
                   ACTIONS
                --------------------------------------------------------- */

                .table-actions {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 5px;
                }

                .icon-button {
                    width: 34px;
                    height: 34px;
                    border: 1px solid #e4e7ec;
                    border-radius: 8px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #ffffff;
                    color: #667085;
                    text-decoration: none;
                    cursor: pointer;
                    transition:
                        color 0.15s ease,
                        background 0.15s ease,
                        border-color 0.15s ease;
                }

                .icon-button:hover {
                    color: #059669;
                    border-color: #a7f3d0;
                    background: #ecfdf5;
                }

                .icon-button.danger:hover {
                    color: #dc2626;
                    border-color: #fecaca;
                    background: #fef2f2;
                }

                /* ---------------------------------------------------------
                   EMPTY
                --------------------------------------------------------- */

                .empty-state {
                    min-height: 330px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    text-align: center;
                    padding: 50px 20px;
                }

                .empty-icon {
                    width: 64px;
                    height: 64px;
                    margin-bottom: 16px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f2f4f7;
                    color: #98a2b3;
                }

                .empty-state h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 17px;
                    font-weight: 700;
                }

                .empty-state p {
                    max-width: 390px;
                    margin: 7px 0 18px;
                    color: #98a2b3;
                    font-size: 13px;
                    line-height: 1.5;
                }

                /* ---------------------------------------------------------
                   MOBILE
                --------------------------------------------------------- */

                .mobile-story-list {
                    display: none;
                }

                /* ---------------------------------------------------------
                   DELETE MODAL
                --------------------------------------------------------- */

                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(15, 23, 42, 0.45);
                    backdrop-filter: blur(3px);
                }

                .delete-modal {
                    position: relative;
                    width: min(430px, 100%);
                    background: #ffffff;
                    border-radius: 18px;
                    padding: 28px;
                    text-align: center;
                    box-shadow: 0 25px 60px rgba(15, 23, 42, 0.18);
                }

                .modal-close {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    width: 34px;
                    height: 34px;
                    border: 0;
                    border-radius: 8px;
                    background: #f2f4f7;
                    color: #667085;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                .modal-close:hover {
                    background: #e4e7ec;
                }

                .delete-modal-icon {
                    width: 58px;
                    height: 58px;
                    margin: 2px auto 17px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #dc2626;
                    background: #fef2f2;
                    border: 1px solid #fee2e2;
                }

                .delete-modal h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 19px;
                    font-weight: 750;
                }

                .delete-modal p {
                    margin: 9px 0 22px;
                    color: #667085;
                    font-size: 13px;
                    line-height: 1.6;
                }

                .delete-modal p strong {
                    color: #344054;
                }

                .modal-actions {
                    display: flex;
                    justify-content: center;
                    gap: 9px;
                }

                /* ---------------------------------------------------------
                   RESPONSIVE
                --------------------------------------------------------- */

                @media (max-width: 1100px) {

                    .stats-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                }

                @media (max-width: 800px) {

                    .stories-page {
                        padding: 20px 15px;
                    }

                    .stories-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .header-actions .btn {
                        flex: 1;
                    }

                    .stories-toolbar {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .filter-wrapper {
                        width: 100%;
                    }

                    .stories-table {
                        display: none;
                    }

                    .mobile-story-list {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                        padding: 14px;
                    }

                    .mobile-story-card {
                        padding: 14px;
                        border: 1px solid #e8ebef;
                        border-radius: 13px;
                        background: #ffffff;
                    }

                    .mobile-story-top {
                        display: flex;
                        gap: 12px;
                    }

                    .mobile-story-image {
                        width: 70px;
                        height: 70px;
                        flex-shrink: 0;
                        overflow: hidden;
                        border-radius: 10px;
                        background: #f2f4f7;
                    }

                    .mobile-story-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .mobile-story-info {
                        min-width: 0;
                    }

                    .mobile-story-info .story-title {
                        max-width: none;
                        white-space: normal;
                    }

                    .mobile-story-info p {
                        margin: 5px 0 0;
                        color: #98a2b3;
                        font-size: 11px;
                        line-height: 1.45;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .mobile-story-meta {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin-top: 14px;
                        padding-top: 12px;
                        border-top: 1px solid #f0f2f5;
                    }

                    .mobile-meta-item {
                        display: flex;
                        align-items: center;
                        gap: 7px;
                        color: #475467;
                        font-size: 11px;
                        font-weight: 650;
                    }

                    .mobile-story-actions {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 7px;
                        margin-top: 12px;
                    }

                    .mobile-action {
                        height: 35px;
                        border: 1px solid #e4e7ec;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 5px;
                        background: #ffffff;
                        color: #475467;
                        font-size: 11px;
                        font-weight: 650;
                        text-decoration: none;
                        cursor: pointer;
                    }

                    .mobile-action:hover {
                        color: #059669;
                        background: #ecfdf5;
                        border-color: #a7f3d0;
                    }

                    .mobile-action.danger:hover {
                        color: #dc2626;
                        background: #fef2f2;
                        border-color: #fecaca;
                    }

                }

                @media (max-width: 560px) {

                    .stats-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                    }

                    .stat-card {
                        min-height: 115px;
                        padding: 15px;
                    }

                    .stat-value {
                        font-size: 23px;
                    }

                    .stat-icon {
                        width: 36px;
                        height: 36px;
                    }

                    .stories-header h1 {
                        font-size: 24px;
                    }

                    .stories-card-header {
                        padding: 18px 16px;
                    }

                    .stories-toolbar {
                        padding: 13px 16px;
                    }

                    .header-actions {
                        flex-direction: column;
                    }

                    .header-actions .btn {
                        width: 100%;
                    }

                    .modal-actions {
                        flex-direction: column-reverse;
                    }

                    .modal-actions .btn {
                        width: 100%;
                    }

                }

            `}</style>

        </AppLayout>
    );
}