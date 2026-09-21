import React, { useMemo, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/*
|--------------------------------------------------------------------------
| Inline SVG Icons
|--------------------------------------------------------------------------
| No Font Awesome or Bootstrap Icons dependency required.
|--------------------------------------------------------------------------
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
        className,
        'aria-hidden': 'true',
    };

    const icons = {
        megaphone: (
            <>
                <path d="M3 11v2a2 2 0 0 0 2 2h2l4 5h2l-2-5h2l7 3V6l-7 3H5a2 2 0 0 0-2 2Z" />
                <path d="M20 6v12" />
            </>
        ),

        plus: (
            <>
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </>
        ),

        search: (
            <>
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
            </>
        ),

        close: (
            <>
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
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

        calendar: (
            <>
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h18" />
            </>
        ),

        user: (
            <>
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 21a7 7 0 0 1 14 0" />
            </>
        ),

        tag: (
            <>
                <path d="M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z" />
                <circle cx="7.5" cy="7.5" r="1" />
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

        chevronDown: (
            <>
                <path d="m6 9 6 6 6-6" />
            </>
        ),

        alert: (
            <>
                <path d="M10.3 3.3 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
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
| Page
|--------------------------------------------------------------------------
*/

export default function Index({ announcements = [] }) {
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

    /*
    |--------------------------------------------------------------------------
    | Normalize announcements
    |--------------------------------------------------------------------------
    */

    const announcementList = Array.isArray(announcements)
        ? announcements
        : announcements?.data ?? [];

    /*
    |--------------------------------------------------------------------------
    | Categories
    |--------------------------------------------------------------------------
    */

    const categories = useMemo(() => {
        const values = announcementList
            .map(
                (announcement) =>
                    announcement?.category?.name ||
                    announcement?.category_name ||
                    ''
            )
            .filter(Boolean);

        return [...new Set(values)].sort();
    }, [announcementList]);

    /*
    |--------------------------------------------------------------------------
    | Filter
    |--------------------------------------------------------------------------
    */

    const filteredAnnouncements = useMemo(() => {
        const query = search.trim().toLowerCase();

        return announcementList.filter((announcement) => {
            const title = String(
                announcement?.title || ''
            ).toLowerCase();

            const category = String(
                announcement?.category?.name ||
                    announcement?.category_name ||
                    ''
            ).toLowerCase();

            const author = String(
                announcement?.user?.name || ''
            ).toLowerCase();

            const matchesSearch =
                !query ||
                title.includes(query) ||
                category.includes(query) ||
                author.includes(query);

            const matchesCategory =
                categoryFilter === 'all' ||
                category === categoryFilter.toLowerCase();

            return matchesSearch && matchesCategory;
        });
    }, [
        announcementList,
        search,
        categoryFilter,
    ]);

    /*
    |--------------------------------------------------------------------------
    | Stats
    |--------------------------------------------------------------------------
    */

    const stats = {
        total: announcementList.length,

        categories: categories.length,

        authors: new Set(
            announcementList
                .map(
                    (announcement) =>
                        announcement?.user?.id ||
                        announcement?.user?.name
                )
                .filter(Boolean)
        ).size,

        recent: announcementList.filter(
            (announcement) => {
                if (!announcement?.created_at) {
                    return false;
                }

                const date = new Date(
                    announcement.created_at
                );

                const now = new Date();

                const difference =
                    now.getTime() -
                    date.getTime();

                return (
                    difference <=
                    30 * 24 * 60 * 60 * 1000
                );
            }
        ).length,
    };

    /*
    |--------------------------------------------------------------------------
    | Helpers
    |--------------------------------------------------------------------------
    */

    const getInitial = (name) => {
        if (!name) {
            return '?';
        }

        return String(name)
            .trim()
            .charAt(0)
            .toUpperCase();
    };

    const formatDate = (date) => {
        if (!date) {
            return 'N/A';
        }

        const parsed = new Date(date);

        if (Number.isNaN(parsed.getTime())) {
            return 'N/A';
        }

        return parsed.toLocaleDateString(
            'en-GB',
            {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            }
        );
    };

    const getExcerpt = (title) => {
        if (!title) {
            return 'Untitled announcement';
        }

        const value = String(title);

        if (value.length <= 80) {
            return value;
        }

        return value.substring(0, 80) + '…';
    };

    /*
    |--------------------------------------------------------------------------
    | Delete
    |--------------------------------------------------------------------------
    */

    const handleDelete = () => {
        if (!selectedAnnouncement?.id) {
            return;
        }

        router.delete(
            route(
                'admin.announcements.destroy',
                selectedAnnouncement.id
            ),
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSelectedAnnouncement(null);
                },
            }
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (
        <AppLayout>
            <Head title="Announcements" />

            <div className="announcements-page">

                {/* =========================================================
                    HEADER
                ========================================================= */}

                <header className="announcements-header">

                    <div className="header-left">

                        <div className="header-icon">
                            <Icon
                                name="megaphone"
                                size={24}
                            />
                        </div>

                        <div>
                            <div className="breadcrumb">
                                Admin
                                <span>/</span>
                                Announcements
                            </div>

                            <h1>
                                Announcements
                            </h1>

                            <p>
                                Create, manage and publish important announcements.
                            </p>
                        </div>

                    </div>

                    <div className="header-actions">

                        <Link
                            href={route(
                                'admin.announcements.create'
                            )}
                            className="btn btn-primary"
                        >
                            <Icon
                                name="plus"
                                size={18}
                            />

                            Create Announcement
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
                                Total Announcements
                            </span>

                            <strong className="stat-value">
                                {stats.total}
                            </strong>

                            <span className="stat-description">
                                All announcements
                            </span>

                        </div>

                        <div className="stat-icon blue">
                            <Icon
                                name="megaphone"
                                size={21}
                            />
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-content">

                            <span className="stat-label">
                                Categories
                            </span>

                            <strong className="stat-value">
                                {stats.categories}
                            </strong>

                            <span className="stat-description">
                                Announcement categories
                            </span>

                        </div>

                        <div className="stat-icon green">
                            <Icon
                                name="tag"
                                size={21}
                            />
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-content">

                            <span className="stat-label">
                                Authors
                            </span>

                            <strong className="stat-value">
                                {stats.authors}
                            </strong>

                            <span className="stat-description">
                                Unique contributors
                            </span>

                        </div>

                        <div className="stat-icon purple">
                            <Icon
                                name="user"
                                size={21}
                            />
                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-content">

                            <span className="stat-label">
                                Recent
                            </span>

                            <strong className="stat-value">
                                {stats.recent}
                            </strong>

                            <span className="stat-description">
                                Published in last 30 days
                            </span>

                        </div>

                        <div className="stat-icon orange">
                            <Icon
                                name="clock"
                                size={21}
                            />
                        </div>

                    </div>

                </section>


                {/* =========================================================
                    MAIN CARD
                ========================================================= */}

                <section className="announcements-card">

                    <div className="card-header">

                        <div>

                            <div className="section-eyebrow">

                                <Icon
                                    name="file"
                                    size={15}
                                />

                                ANNOUNCEMENT LIBRARY

                            </div>

                            <h2>
                                All Announcements
                            </h2>

                            <p>
                                Browse and manage your announcements.
                            </p>

                        </div>

                        <div className="results-count">
                            {filteredAnnouncements.length}
                            <span>
                                results
                            </span>
                        </div>

                    </div>


                    {/* =====================================================
                        TOOLBAR
                    ===================================================== */}

                    <div className="toolbar">

                        <div className="search-box">

                            <Icon
                                name="search"
                                size={18}
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                                placeholder="Search announcements, categories or authors..."
                            />

                            {search && (
                                <button
                                    type="button"
                                    className="clear-search"
                                    onClick={() =>
                                        setSearch('')
                                    }
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
                                name="tag"
                                size={16}
                            />

                            <select
                                value={categoryFilter}
                                onChange={(e) =>
                                    setCategoryFilter(
                                        e.target.value
                                    )
                                }
                            >
                                <option value="all">
                                    All categories
                                </option>

                                {categories.map(
                                    (category) => (
                                        <option
                                            key={category}
                                            value={category}
                                        >
                                            {category}
                                        </option>
                                    )
                                )}

                            </select>

                            <Icon
                                name="chevronDown"
                                size={15}
                            />

                        </div>

                    </div>


                    {/* =====================================================
                        TABLE
                    ===================================================== */}

                    {filteredAnnouncements.length > 0 ? (

                        <div className="table-wrapper">

                            <table className="announcements-table">

                                <thead>

                                    <tr>
                                        <th>
                                            Announcement
                                        </th>

                                        <th>
                                            Category
                                        </th>

                                        <th>
                                            Author
                                        </th>

                                        <th>
                                            Created
                                        </th>

                                        <th className="actions-column">
                                            Actions
                                        </th>
                                    </tr>

                                </thead>


                                <tbody>

                                    {filteredAnnouncements.map(
                                        (announcement) => {

                                            const categoryName =
                                                announcement
                                                    ?.category
                                                    ?.name ||
                                                announcement
                                                    ?.category_name ||
                                                'Uncategorized';

                                            const authorName =
                                                announcement
                                                    ?.user
                                                    ?.name ||
                                                'N/A';

                                            return (
                                                <tr
                                                    key={
                                                        announcement.id
                                                    }
                                                >

                                                    {/* Announcement */}

                                                    <td>

                                                        <div className="announcement-cell">

                                                            <div className="announcement-icon">
                                                                <Icon
                                                                    name="megaphone"
                                                                    size={19}
                                                                />
                                                            </div>

                                                            <div className="announcement-info">

                                                                <Link
                                                                    href={route(
                                                                        'admin.announcements.show',
                                                                        announcement.id
                                                                    )}
                                                                    className="announcement-title"
                                                                >
                                                                    {
                                                                        announcement.title
                                                                    }
                                                                </Link>

                                                                <span className="announcement-excerpt">
                                                                    {getExcerpt(
                                                                        announcement.title
                                                                    )}
                                                                </span>

                                                            </div>

                                                        </div>

                                                    </td>


                                                    {/* Category */}

                                                    <td>

                                                        <span className="category-badge">

                                                            <Icon
                                                                name="tag"
                                                                size={13}
                                                            />

                                                            {
                                                                categoryName
                                                            }

                                                        </span>

                                                    </td>


                                                    {/* Author */}

                                                    <td>

                                                        <div className="author-cell">

                                                            <div className="author-avatar">
                                                                {getInitial(
                                                                    authorName
                                                                )}
                                                            </div>

                                                            <div>

                                                                <span className="author-name">
                                                                    {
                                                                        authorName
                                                                    }
                                                                </span>

                                                                {announcement
                                                                    ?.user
                                                                    ?.email && (
                                                                    <span className="author-email">
                                                                        {
                                                                            announcement
                                                                                .user
                                                                                .email
                                                                        }
                                                                    </span>
                                                                )}

                                                            </div>

                                                        </div>

                                                    </td>


                                                    {/* Date */}

                                                    <td>

                                                        <div className="date-cell">

                                                            <Icon
                                                                name="calendar"
                                                                size={15}
                                                            />

                                                            <span>
                                                                {formatDate(
                                                                    announcement.created_at
                                                                )}
                                                            </span>

                                                        </div>

                                                    </td>


                                                    {/* Actions */}

                                                    <td>

                                                        <div className="table-actions">

                                                            <Link
                                                                href={route(
                                                                    'admin.announcements.show',
                                                                    announcement.id
                                                                )}
                                                                className="icon-button"
                                                                title="View"
                                                            >
                                                                <Icon
                                                                    name="eye"
                                                                    size={17}
                                                                />
                                                            </Link>


                                                            <Link
                                                                href={route(
                                                                    'admin.announcements.edit',
                                                                    announcement.id
                                                                )}
                                                                className="icon-button"
                                                                title="Edit"
                                                            >
                                                                <Icon
                                                                    name="edit"
                                                                    size={17}
                                                                />
                                                            </Link>


                                                            <button
                                                                type="button"
                                                                className="icon-button danger"
                                                                title="Delete"
                                                                onClick={() =>
                                                                    setSelectedAnnouncement(
                                                                        announcement
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

                        </div>

                    ) : (

                        /* =================================================
                           EMPTY STATE
                        ================================================= */

                        <div className="empty-state">

                            <div className="empty-icon">
                                <Icon
                                    name="megaphone"
                                    size={30}
                                />
                            </div>

                            <h3>
                                {search ||
                                categoryFilter !==
                                    'all'
                                    ? 'No announcements found'
                                    : 'No announcements yet'}
                            </h3>

                            <p>
                                {search ||
                                categoryFilter !==
                                    'all'
                                    ? 'Try adjusting your search or category filter.'
                                    : 'Create your first announcement to get started.'}
                            </p>

                            {search ||
                            categoryFilter !==
                                'all' ? (

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        setSearch('');
                                        setCategoryFilter(
                                            'all'
                                        );
                                    }}
                                >
                                    Clear Filters
                                </button>

                            ) : (

                                <Link
                                    href={route(
                                        'admin.announcements.create'
                                    )}
                                    className="btn btn-primary"
                                >
                                    <Icon
                                        name="plus"
                                        size={17}
                                    />

                                    Create Announcement
                                </Link>

                            )}

                        </div>

                    )}

                </section>


                {/* =========================================================
                    MOBILE CARDS
                ========================================================= */}

                {filteredAnnouncements.length >
                    0 && (

                    <div className="mobile-announcement-list">

                        {filteredAnnouncements.map(
                            (announcement) => {

                                const categoryName =
                                    announcement
                                        ?.category
                                        ?.name ||
                                    announcement
                                        ?.category_name ||
                                    'Uncategorized';

                                const authorName =
                                    announcement
                                        ?.user
                                        ?.name ||
                                    'N/A';

                                return (
                                    <article
                                        key={
                                            announcement.id
                                        }
                                        className="mobile-announcement-card"
                                    >

                                        <div className="mobile-top">

                                            <div className="announcement-icon">
                                                <Icon
                                                    name="megaphone"
                                                    size={19}
                                                />
                                            </div>

                                            <div className="mobile-info">

                                                <Link
                                                    href={route(
                                                        'admin.announcements.show',
                                                        announcement.id
                                                    )}
                                                    className="announcement-title"
                                                >
                                                    {
                                                        announcement.title
                                                    }
                                                </Link>

                                                <span className="announcement-excerpt">
                                                    {getExcerpt(
                                                        announcement.title
                                                    )}
                                                </span>

                                            </div>

                                        </div>


                                        <div className="mobile-meta">

                                            <span className="category-badge">
                                                <Icon
                                                    name="tag"
                                                    size={13}
                                                />

                                                {
                                                    categoryName
                                                }
                                            </span>


                                            <div className="mobile-author">

                                                <div className="author-avatar small">
                                                    {getInitial(
                                                        authorName
                                                    )}
                                                </div>

                                                {
                                                    authorName
                                                }

                                            </div>


                                            <div className="date-cell">
                                                <Icon
                                                    name="calendar"
                                                    size={14}
                                                />

                                                {formatDate(
                                                    announcement.created_at
                                                )}
                                            </div>

                                        </div>


                                        <div className="mobile-actions">

                                            <Link
                                                href={route(
                                                    'admin.announcements.show',
                                                    announcement.id
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
                                                    'admin.announcements.edit',
                                                    announcement.id
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
                                                    setSelectedAnnouncement(
                                                        announcement
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


                {/* =========================================================
                    DELETE MODAL
                ========================================================= */}

                {selectedAnnouncement && (

                    <div
                        className="modal-backdrop"
                        onMouseDown={(e) => {
                            if (
                                e.target ===
                                e.currentTarget
                            ) {
                                setSelectedAnnouncement(
                                    null
                                );
                            }
                        }}
                    >

                        <div className="delete-modal">

                            <button
                                type="button"
                                className="modal-close"
                                onClick={() =>
                                    setSelectedAnnouncement(
                                        null
                                    )
                                }
                            >
                                <Icon
                                    name="close"
                                    size={18}
                                />
                            </button>


                            <div className="delete-icon">
                                <Icon
                                    name="alert"
                                    size={25}
                                />
                            </div>


                            <h3>
                                Delete announcement?
                            </h3>

                            <p>
                                You are about to permanently
                                delete{' '}
                                <strong>
                                    "
                                    {
                                        selectedAnnouncement.title
                                    }
                                    "
                                </strong>
                                . This action cannot be
                                undone.
                            </p>


                            <div className="modal-actions">

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() =>
                                        setSelectedAnnouncement(
                                            null
                                        )
                                    }
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={
                                        handleDelete
                                    }
                                >
                                    <Icon
                                        name="trash"
                                        size={17}
                                    />

                                    Yes, Delete
                                </button>

                            </div>

                        </div>

                    </div>

                )}

            </div>


            {/* =============================================================
                STYLES
            ============================================================= */}

            <style>{`

                * {
                    box-sizing: border-box;
                }

                .announcements-page {
                    min-height: 100vh;
                    background: #f7f9fc;
                    color: #172033;
                    padding: 28px;
                }

                /* =========================================================
                   HEADER
                ========================================================= */

                .announcements-header {
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
                    margin-bottom: 5px;
                    color: #98a2b3;
                    font-size: 12px;
                    font-weight: 600;
                }

                .breadcrumb span {
                    color: #cbd5e1;
                }

                .announcements-header h1 {
                    margin: 0;
                    color: #101828;
                    font-size: 28px;
                    line-height: 1.2;
                    font-weight: 750;
                    letter-spacing: -0.6px;
                }

                .announcements-header p {
                    margin: 5px 0 0;
                    color: #667085;
                    font-size: 14px;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                }

                /* =========================================================
                   BUTTONS
                ========================================================= */

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
                        background .15s ease,
                        border-color .15s ease,
                        transform .15s ease,
                        box-shadow .15s ease;
                }

                .btn:hover {
                    transform: translateY(-1px);
                }

                .btn-primary {
                    color: #ffffff;
                    background: #059669;
                    border-color: #059669;
                    box-shadow: 0 2px 6px rgba(5, 150, 105, .18);
                }

                .btn-primary:hover {
                    background: #047857;
                    border-color: #047857;
                }

                .btn-secondary {
                    color: #344054;
                    background: #ffffff;
                    border-color: #d0d5dd;
                }

                .btn-secondary:hover {
                    background: #f9fafb;
                    border-color: #98a2b3;
                }

                .btn-danger {
                    color: #ffffff;
                    background: #dc2626;
                    border-color: #dc2626;
                }

                .btn-danger:hover {
                    background: #b91c1c;
                    border-color: #b91c1c;
                }

                /* =========================================================
                   STATS
                ========================================================= */

                .stats-grid {
                    max-width: 1440px;
                    margin: 0 auto 24px;
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 16px;
                }

                .stat-card {
                    min-height: 130px;
                    padding: 20px;
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 15px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 15px;
                    box-shadow: 0 2px 5px rgba(16, 24, 40, .025);
                }

                .stat-content {
                    min-width: 0;
                }

                .stat-label {
                    display: block;
                    margin-bottom: 8px;
                    color: #667085;
                    font-size: 12px;
                    font-weight: 650;
                }

                .stat-value {
                    display: block;
                    color: #101828;
                    font-size: 28px;
                    line-height: 1;
                    letter-spacing: -.5px;
                }

                .stat-description {
                    display: block;
                    margin-top: 9px;
                    color: #98a2b3;
                    font-size: 11px;
                }

                .stat-icon {
                    width: 43px;
                    height: 43px;
                    flex-shrink: 0;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .stat-icon.blue {
                    color: #2563eb;
                    background: #eff6ff;
                }

                .stat-icon.green {
                    color: #059669;
                    background: #ecfdf5;
                }

                .stat-icon.purple {
                    color: #7c3aed;
                    background: #f5f3ff;
                }

                .stat-icon.orange {
                    color: #d97706;
                    background: #fffbeb;
                }

                /* =========================================================
                   MAIN CARD
                ========================================================= */

                .announcements-card {
                    max-width: 1440px;
                    margin: 0 auto;
                    overflow: hidden;
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 16px;
                    box-shadow: 0 3px 10px rgba(16, 24, 40, .035);
                }

                .card-header {
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
                    margin-bottom: 7px;
                    color: #059669;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                .card-header h2 {
                    margin: 0;
                    color: #101828;
                    font-size: 19px;
                    font-weight: 750;
                }

                .card-header p {
                    margin: 5px 0 0;
                    color: #667085;
                    font-size: 13px;
                }

                .results-count {
                    color: #101828;
                    font-size: 16px;
                    font-weight: 750;
                    white-space: nowrap;
                }

                .results-count span {
                    margin-left: 4px;
                    color: #98a2b3;
                    font-size: 12px;
                    font-weight: 500;
                }

                /* =========================================================
                   TOOLBAR
                ========================================================= */

                .toolbar {
                    padding: 16px 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    background: #fcfdfe;
                    border-bottom: 1px solid #eef1f5;
                }

                .search-box {
                    width: min(500px, 100%);
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
                    padding: 0 40px;
                    outline: none;
                    border: 1px solid #dfe3e8;
                    border-radius: 9px;
                    background: #ffffff;
                    color: #101828;
                    font-size: 13px;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;
                }

                .search-box input::placeholder {
                    color: #a0a8b5;
                }

                .search-box input:focus {
                    border-color: #10b981;
                    box-shadow: 0 0 0 3px rgba(16, 185, 129, .1);
                }

                .clear-search {
                    position: absolute;
                    right: 10px;
                    width: 25px;
                    height: 25px;
                    border: 0;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f2f4f7;
                    color: #667085;
                    cursor: pointer;
                }

                .filter-wrapper {
                    position: relative;
                    min-width: 190px;
                    height: 42px;
                    padding: 0 11px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid #dfe3e8;
                    border-radius: 9px;
                    background: #ffffff;
                    color: #667085;
                }

                .filter-wrapper select {
                    appearance: none;
                    -webkit-appearance: none;
                    width: 100%;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    color: #344054;
                    font-size: 13px;
                    cursor: pointer;
                }

                .filter-wrapper > svg:last-child {
                    pointer-events: none;
                    flex-shrink: 0;
                }

                /* =========================================================
                   TABLE
                ========================================================= */

                .table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                }

                .announcements-table {
                    width: 100%;
                    min-width: 900px;
                    border-collapse: collapse;
                }

                .announcements-table thead {
                    background: #fafbfc;
                }

                .announcements-table th {
                    padding: 12px 20px;
                    text-align: left;
                    border-bottom: 1px solid #eef1f5;
                    color: #667085;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: .7px;
                    text-transform: uppercase;
                    white-space: nowrap;
                }

                .announcements-table td {
                    padding: 15px 20px;
                    border-bottom: 1px solid #f0f2f5;
                    vertical-align: middle;
                }

                .announcements-table tbody tr {
                    transition: background .15s ease;
                }

                .announcements-table tbody tr:hover {
                    background: #fcfdfd;
                }

                .announcements-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .actions-column {
                    width: 125px;
                    text-align: right !important;
                }

                /* =========================================================
                   ANNOUNCEMENT
                ========================================================= */

                .announcement-cell {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-width: 330px;
                }

                .announcement-icon {
                    width: 43px;
                    height: 43px;
                    flex-shrink: 0;
                    border-radius: 11px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ecfdf5;
                    color: #059669;
                    border: 1px solid #d1fae5;
                }

                .announcement-info {
                    min-width: 0;
                }

                .announcement-title {
                    display: block;
                    max-width: 390px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #101828;
                    font-size: 13px;
                    font-weight: 700;
                    line-height: 1.4;
                    text-decoration: none;
                }

                .announcement-title:hover {
                    color: #059669;
                }

                .announcement-excerpt {
                    display: block;
                    max-width: 390px;
                    margin-top: 4px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #98a2b3;
                    font-size: 11px;
                }

                /* =========================================================
                   CATEGORY
                ========================================================= */

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

                /* =========================================================
                   AUTHOR
                ========================================================= */

                .author-cell {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                }

                .author-avatar {
                    width: 34px;
                    height: 34px;
                    flex-shrink: 0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f5f3ff;
                    color: #6d28d9;
                    border: 1px solid #ede9fe;
                    font-size: 12px;
                    font-weight: 800;
                }

                .author-avatar.small {
                    width: 28px;
                    height: 28px;
                    font-size: 10px;
                }

                .author-name {
                    display: block;
                    max-width: 160px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #344054;
                    font-size: 12px;
                    font-weight: 650;
                }

                .author-email {
                    display: block;
                    max-width: 170px;
                    margin-top: 2px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #98a2b3;
                    font-size: 10px;
                }

                /* =========================================================
                   DATE
                ========================================================= */

                .date-cell {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: #667085;
                    font-size: 11px;
                    white-space: nowrap;
                }

                /* =========================================================
                   ACTIONS
                ========================================================= */

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
                        color .15s ease,
                        background .15s ease,
                        border-color .15s ease;
                }

                .icon-button:hover {
                    color: #059669;
                    background: #ecfdf5;
                    border-color: #a7f3d0;
                }

                .icon-button.danger:hover {
                    color: #dc2626;
                    background: #fef2f2;
                    border-color: #fecaca;
                }

                /* =========================================================
                   EMPTY STATE
                ========================================================= */

                .empty-state {
                    min-height: 330px;
                    padding: 50px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    text-align: center;
                }

                .empty-icon {
                    width: 64px;
                    height: 64px;
                    margin-bottom: 16px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ecfdf5;
                    color: #059669;
                }

                .empty-state h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 17px;
                    font-weight: 700;
                }

                .empty-state p {
                    max-width: 400px;
                    margin: 7px 0 18px;
                    color: #98a2b3;
                    font-size: 13px;
                    line-height: 1.5;
                }

                /* =========================================================
                   MOBILE
                ========================================================= */

                .mobile-announcement-list {
                    display: none;
                }

                /* =========================================================
                   DELETE MODAL
                ========================================================= */

                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(15, 23, 42, .45);
                    backdrop-filter: blur(3px);
                }

                .delete-modal {
                    position: relative;
                    width: min(430px, 100%);
                    padding: 28px;
                    border-radius: 18px;
                    background: #ffffff;
                    text-align: center;
                    box-shadow: 0 25px 60px rgba(15, 23, 42, .18);
                }

                .modal-close {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    width: 34px;
                    height: 34px;
                    border: 0;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f2f4f7;
                    color: #667085;
                    cursor: pointer;
                }

                .delete-icon {
                    width: 58px;
                    height: 58px;
                    margin: 2px auto 17px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #fef2f2;
                    color: #dc2626;
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

                /* =========================================================
                   RESPONSIVE
                ========================================================= */

                @media (max-width: 1100px) {

                    .stats-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                }

                @media (max-width: 800px) {

                    .announcements-page {
                        padding: 20px 15px;
                    }

                    .announcements-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .header-actions .btn {
                        width: 100%;
                    }

                    .toolbar {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .filter-wrapper {
                        width: 100%;
                    }

                    .announcements-table {
                        display: none;
                    }

                    .mobile-announcement-list {
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                        padding: 14px;
                    }

                    .mobile-announcement-card {
                        padding: 14px;
                        border: 1px solid #e8ebef;
                        border-radius: 13px;
                        background: #ffffff;
                    }

                    .mobile-top {
                        display: flex;
                        align-items: flex-start;
                        gap: 12px;
                    }

                    .mobile-info {
                        min-width: 0;
                    }

                    .mobile-info .announcement-title {
                        max-width: none;
                        white-space: normal;
                    }

                    .mobile-info .announcement-excerpt {
                        max-width: none;
                        white-space: normal;
                    }

                    .mobile-meta {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 9px;
                        margin-top: 14px;
                        padding-top: 12px;
                        border-top: 1px solid #f0f2f5;
                    }

                    .mobile-author {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        color: #475467;
                        font-size: 11px;
                        font-weight: 650;
                    }

                    .mobile-actions {
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

                    .announcements-header h1 {
                        font-size: 24px;
                    }

                    .card-header {
                        padding: 18px 16px;
                    }

                    .toolbar {
                        padding: 13px 16px;
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