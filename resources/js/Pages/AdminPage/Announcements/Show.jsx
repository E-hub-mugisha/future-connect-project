import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/*
|--------------------------------------------------------------------------
| Inline Icons
|--------------------------------------------------------------------------
*/

function Icon({
    name,
    size = 20,
    strokeWidth = 1.8,
    className = '',
}) {
    const props = {
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

        arrowLeft: (
            <>
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
            </>
        ),

        arrowRight: (
            <>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
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

        checkCircle: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 2.5 2.5L16 9" />
            </>
        ),

        minusCircle: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12h8" />
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

        calendar: (
            <>
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h18" />
            </>
        ),

        link: (
            <>
                <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
                <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
            </>
        ),

        image: (
            <>
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="8.5" cy="9" r="1.5" />
                <path d="m21 15-4.5-4.5L7 20" />
            </>
        ),

        close: (
            <>
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
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
        <svg {...props}>
            {icons[name] || icons.alert}
        </svg>
    );
}


/*
|--------------------------------------------------------------------------
| Announcement Show
|--------------------------------------------------------------------------
*/

export default function Show({ announcement }) {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [processing, setProcessing] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Actions
    |--------------------------------------------------------------------------
    */

    const handleActivate = () => {
        setProcessing(true);

        router.put(
            route(
                'admin.announcements.activate',
                announcement.id
            ),
            {},
            {
                preserveScroll: true,
                onFinish: () => setProcessing(false),
            }
        );
    };

    const handleDeactivate = () => {
        setProcessing(true);

        router.put(
            route(
                'admin.announcements.deactivate',
                announcement.id
            ),
            {},
            {
                preserveScroll: true,
                onFinish: () => setProcessing(false),
            }
        );
    };

    const handleDelete = () => {
        setProcessing(true);

        router.delete(
            route(
                'admin.announcements.destroy',
                announcement.id
            ),
            {
                preserveScroll: true,
                onSuccess: () => {
                    setDeleteOpen(false);
                },
                onFinish: () => setProcessing(false),
            }
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Helpers
    |--------------------------------------------------------------------------
    */

    const formatDate = (date) => {
        if (!date) {
            return 'N/A';
        }

        const parsed = new Date(date);

        if (Number.isNaN(parsed.getTime())) {
            return 'N/A';
        }

        return parsed.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    };

    const formatShortDate = (date) => {
        if (!date) {
            return 'N/A';
        }

        const parsed = new Date(date);

        if (Number.isNaN(parsed.getTime())) {
            return 'N/A';
        }

        return parsed.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
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

    const content = String(
        announcement?.content || ''
    );

    const imageUrl = announcement?.image
        ? '/image/announcements/' +
          String(announcement.image).replace(
              /^\/+/,
              ''
          )
        : null;

    const isActive = Boolean(
        announcement?.is_active
    );

    return (
        <AppLayout>
            <Head
                title={
                    announcement?.title ||
                    'Announcement Details'
                }
            />

            <div className="announcement-show-page">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <header className="announcement-show-header">

                    <div className="header-main">

                        <div className="header-icon">
                            <Icon
                                name="megaphone"
                                size={25}
                            />
                        </div>

                        <div>

                            <div className="breadcrumb">
                                <Link
                                    href={route(
                                        'admin.announcements.index'
                                    )}
                                >
                                    Announcements
                                </Link>

                                <span>/</span>

                                <span>Details</span>
                            </div>

                            <h1>
                                Announcement Details
                            </h1>

                            <p>
                                View and manage announcement information.
                            </p>

                        </div>

                    </div>


                    <div className="header-actions">

                        <Link
                            href={route(
                                'admin.announcements.index'
                            )}
                            className="btn btn-secondary"
                        >
                            <Icon
                                name="arrowLeft"
                                size={17}
                            />

                            Back
                        </Link>


                        <Link
                            href={route(
                                'admin.announcements.edit',
                                announcement.id
                            )}
                            className="btn btn-secondary"
                        >
                            <Icon
                                name="edit"
                                size={17}
                            />

                            Edit
                        </Link>


                        {!isActive ? (

                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={handleActivate}
                                disabled={processing}
                            >
                                <Icon
                                    name="checkCircle"
                                    size={17}
                                />

                                {processing
                                    ? 'Processing...'
                                    : 'Activate'}
                            </button>

                        ) : (

                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={handleDeactivate}
                                disabled={processing}
                            >
                                <Icon
                                    name="minusCircle"
                                    size={17}
                                />

                                {processing
                                    ? 'Processing...'
                                    : 'Deactivate'}
                            </button>

                        )}


                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() =>
                                setDeleteOpen(true)
                            }
                        >
                            <Icon
                                name="trash"
                                size={17}
                            />

                            Delete
                        </button>

                    </div>

                </header>


                {/* =====================================================
                    STATUS BANNER
                ===================================================== */}

                <section
                    className={
                        'status-banner ' +
                        (isActive
                            ? 'active'
                            : 'inactive')
                    }
                >

                    <div className="status-left">

                        <div className="status-icon">

                            <Icon
                                name={
                                    isActive
                                        ? 'checkCircle'
                                        : 'minusCircle'
                                }
                                size={21}
                            />

                        </div>

                        <div>

                            <strong>
                                {isActive
                                    ? 'Announcement is active'
                                    : 'Announcement is inactive'}
                            </strong>

                            <span>
                                {isActive
                                    ? 'This announcement is currently active and visible to users.'
                                    : 'This announcement is currently inactive and may not be visible to users.'}
                            </span>

                        </div>

                    </div>


                    <span className="status-badge">

                        <span className="status-dot" />

                        {isActive
                            ? 'Active'
                            : 'Inactive'}

                    </span>

                </section>


                {/* =====================================================
                    CONTENT GRID
                ===================================================== */}

                <div className="content-grid">

                    {/* =================================================
                        MAIN CONTENT
                    ================================================= */}

                    <main className="main-column">

                        <article className="content-card">

                            <div className="content-card-header">

                                <div>

                                    <span className="eyebrow">
                                        ANNOUNCEMENT
                                    </span>

                                    <h2>
                                        {announcement?.title ||
                                            'Untitled Announcement'}
                                    </h2>

                                </div>

                            </div>


                            {/* Content */}

                            <div className="announcement-content">

                                <div className="content-label">
                                    Content
                                </div>

                                <div className="content-body">

                                    {content
                                        ? content
                                              .split('\n')
                                              .map(
                                                  (
                                                      line,
                                                      index
                                                  ) => (
                                                      <React.Fragment
                                                          key={
                                                              index
                                                          }
                                                      >
                                                          {line}

                                                          {index <
                                                              content.split(
                                                                  '\n'
                                                              ).length -
                                                                  1 && (
                                                              <br />
                                                          )}
                                                      </React.Fragment>
                                                  )
                                              )
                                        : (
                                            <span className="empty-content">
                                                No content has been added to this announcement.
                                            </span>
                                        )}

                                </div>

                            </div>

                        </article>


                        {/* =================================================
                            IMAGE
                        ================================================= */}

                        {imageUrl && (

                            <article className="content-card">

                                <div className="content-card-header compact">

                                    <div>

                                        <span className="eyebrow">
                                            MEDIA
                                        </span>

                                        <h3>
                                            Announcement Image
                                        </h3>

                                    </div>

                                </div>


                                <div className="image-container">

                                    <img
                                        src={imageUrl}
                                        alt={
                                            announcement?.title ||
                                            'Announcement'
                                        }
                                    />

                                </div>

                            </article>

                        )}


                        {/* =================================================
                            EXTERNAL LINK
                        ================================================= */}

                        {announcement?.link && (

                            <article className="content-card">

                                <div className="content-card-header compact">

                                    <div>

                                        <span className="eyebrow">
                                            RESOURCE
                                        </span>

                                        <h3>
                                            External Link
                                        </h3>

                                    </div>

                                </div>


                                <div className="external-link-card">

                                    <div className="external-link-icon">
                                        <Icon
                                            name="link"
                                            size={21}
                                        />
                                    </div>

                                    <div className="external-link-info">

                                        <span>
                                            External resource
                                        </span>

                                        <a
                                            href={
                                                announcement.link
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {
                                                announcement.link
                                            }
                                        </a>

                                    </div>

                                    <a
                                        href={
                                            announcement.link
                                        }
                                        target="_blank"
                                        rel="noreferrer"
                                        className="open-link"
                                    >
                                        Open
                                        <Icon
                                            name="arrowRight"
                                            size={15}
                                        />
                                    </a>

                                </div>

                            </article>

                        )}

                    </main>


                    {/* =================================================
                        SIDEBAR
                    ================================================= */}

                    <aside className="sidebar">

                        {/* Details */}

                        <section className="side-card">

                            <div className="side-card-header">

                                <h3>
                                    Announcement Details
                                </h3>

                            </div>


                            <div className="detail-list">

                                {/* Author */}

                                <div className="detail-item">

                                    <div className="detail-icon purple">
                                        <Icon
                                            name="user"
                                            size={17}
                                        />
                                    </div>

                                    <div className="detail-copy">

                                        <span>
                                            Created By
                                        </span>

                                        <strong>
                                            {
                                                announcement
                                                    ?.user
                                                    ?.name ||
                                                'N/A'
                                            }
                                        </strong>

                                    </div>

                                </div>


                                {/* Category */}

                                <div className="detail-item">

                                    <div className="detail-icon green">
                                        <Icon
                                            name="tag"
                                            size={17}
                                        />
                                    </div>

                                    <div className="detail-copy">

                                        <span>
                                            Category
                                        </span>

                                        <strong>
                                            {
                                                announcement
                                                    ?.category
                                                    ?.name ||
                                                'N/A'
                                            }
                                        </strong>

                                    </div>

                                </div>


                                {/* Created */}

                                <div className="detail-item">

                                    <div className="detail-icon blue">
                                        <Icon
                                            name="calendar"
                                            size={17}
                                        />
                                    </div>

                                    <div className="detail-copy">

                                        <span>
                                            Created At
                                        </span>

                                        <strong>
                                            {formatDate(
                                                announcement?.created_at
                                            )}
                                        </strong>

                                    </div>

                                </div>


                                {/* Status */}

                                <div className="detail-item">

                                    <div
                                        className={
                                            'detail-icon ' +
                                            (isActive
                                                ? 'green'
                                                : 'gray')
                                        }
                                    >
                                        <Icon
                                            name={
                                                isActive
                                                    ? 'checkCircle'
                                                    : 'minusCircle'
                                            }
                                            size={17}
                                        />
                                    </div>

                                    <div className="detail-copy">

                                        <span>
                                            Status
                                        </span>

                                        <strong>
                                            {isActive
                                                ? 'Active'
                                                : 'Inactive'}
                                        </strong>

                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* Quick Actions */}

                        <section className="side-card">

                            <div className="side-card-header">

                                <h3>
                                    Quick Actions
                                </h3>

                            </div>


                            <div className="quick-actions">

                                <Link
                                    href={route(
                                        'admin.announcements.edit',
                                        announcement.id
                                    )}
                                    className="quick-action"
                                >
                                    <span className="quick-action-icon blue">
                                        <Icon
                                            name="edit"
                                            size={17}
                                        />
                                    </span>

                                    <span>
                                        Edit Announcement
                                    </span>

                                    <Icon
                                        name="arrowRight"
                                        size={15}
                                    />
                                </Link>


                                <Link
                                    href={route(
                                        'admin.announcements.index'
                                    )}
                                    className="quick-action"
                                >
                                    <span className="quick-action-icon gray">
                                        <Icon
                                            name="arrowLeft"
                                            size={17}
                                        />
                                    </span>

                                    <span>
                                        All Announcements
                                    </span>

                                    <Icon
                                        name="arrowRight"
                                        size={15}
                                    />
                                </Link>

                            </div>

                        </section>


                        {/* Created Date */}

                        <section className="date-card">

                            <Icon
                                name="calendar"
                                size={18}
                            />

                            <div>

                                <span>
                                    Created
                                </span>

                                <strong>
                                    {formatShortDate(
                                        announcement?.created_at
                                    )}
                                </strong>

                            </div>

                        </section>

                    </aside>

                </div>


                {/* =====================================================
                    DELETE MODAL
                ===================================================== */}

                {deleteOpen && (

                    <div
                        className="modal-backdrop"
                        onMouseDown={(e) => {
                            if (
                                e.target ===
                                e.currentTarget
                            ) {
                                setDeleteOpen(false);
                            }
                        }}
                    >

                        <div className="delete-modal">

                            <button
                                type="button"
                                className="modal-close"
                                onClick={() =>
                                    setDeleteOpen(false)
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
                                        announcement?.title
                                    }
                                    "
                                </strong>
                                .
                                <br />
                                This action cannot be undone.
                            </p>


                            <div className="modal-actions">

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() =>
                                        setDeleteOpen(
                                            false
                                        )
                                    }
                                    disabled={processing}
                                >
                                    Cancel
                                </button>


                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleDelete}
                                    disabled={processing}
                                >
                                    <Icon
                                        name="trash"
                                        size={17}
                                    />

                                    {processing
                                        ? 'Deleting...'
                                        : 'Confirm Delete'}
                                </button>

                            </div>

                        </div>

                    </div>

                )}

            </div>


            {/* =========================================================
                STYLES
            ========================================================= */}

            <style>{`

                * {
                    box-sizing: border-box;
                }

                .announcement-show-page {
                    min-height: 100vh;
                    padding: 28px;
                    background: #f7f9fc;
                    color: #172033;
                }

                /* =====================================================
                   HEADER
                ===================================================== */

                .announcement-show-header {
                    max-width: 1440px;
                    margin: 0 auto 22px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 24px;
                }

                .header-main {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .header-icon {
                    width: 52px;
                    height: 52px;
                    flex-shrink: 0;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #059669;
                    background: #ecfdf5;
                    border: 1px solid #d1fae5;
                }

                .breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 5px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .breadcrumb a {
                    color: #059669;
                    text-decoration: none;
                }

                .breadcrumb a:hover {
                    text-decoration: underline;
                }

                .breadcrumb span {
                    color: #98a2b3;
                }

                .announcement-show-header h1 {
                    margin: 0;
                    color: #101828;
                    font-size: 27px;
                    font-weight: 750;
                    letter-spacing: -.5px;
                }

                .announcement-show-header p {
                    margin: 5px 0 0;
                    color: #667085;
                    font-size: 13px;
                }

                .header-actions {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 8px;
                }

                /* =====================================================
                   BUTTONS
                ===================================================== */

                .btn {
                    height: 40px;
                    padding: 0 14px;
                    border: 1px solid transparent;
                    border-radius: 9px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    cursor: pointer;
                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        transform .15s ease;
                }

                .btn:hover:not(:disabled) {
                    transform: translateY(-1px);
                }

                .btn:disabled {
                    opacity: .6;
                    cursor: not-allowed;
                }

                .btn-secondary {
                    color: #344054;
                    background: #ffffff;
                    border-color: #d0d5dd;
                }

                .btn-secondary:hover:not(:disabled) {
                    background: #f9fafb;
                    border-color: #98a2b3;
                }

                .btn-success {
                    color: #ffffff;
                    background: #059669;
                    border-color: #059669;
                }

                .btn-success:hover:not(:disabled) {
                    background: #047857;
                    border-color: #047857;
                }

                .btn-warning {
                    color: #92400e;
                    background: #fffbeb;
                    border-color: #fde68a;
                }

                .btn-warning:hover:not(:disabled) {
                    background: #fef3c7;
                }

                .btn-danger {
                    color: #ffffff;
                    background: #dc2626;
                    border-color: #dc2626;
                }

                .btn-danger:hover:not(:disabled) {
                    background: #b91c1c;
                    border-color: #b91c1c;
                }

                /* =====================================================
                   STATUS BANNER
                ===================================================== */

                .status-banner {
                    max-width: 1440px;
                    margin: 0 auto 20px;
                    padding: 15px 18px;
                    border: 1px solid;
                    border-radius: 13px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                }

                .status-banner.active {
                    background: #f0fdf4;
                    border-color: #bbf7d0;
                }

                .status-banner.inactive {
                    background: #f8fafc;
                    border-color: #e2e8f0;
                }

                .status-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .status-icon {
                    width: 39px;
                    height: 39px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .status-banner.active .status-icon {
                    color: #059669;
                    background: #dcfce7;
                }

                .status-banner.inactive .status-icon {
                    color: #64748b;
                    background: #e2e8f0;
                }

                .status-left strong {
                    display: block;
                    color: #344054;
                    font-size: 13px;
                }

                .status-left span {
                    display: block;
                    margin-top: 2px;
                    color: #667085;
                    font-size: 11px;
                }

                .status-badge {
                    height: 28px;
                    padding: 0 10px;
                    border-radius: 999px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: #ffffff;
                    color: #475467;
                    border: 1px solid #e4e7ec;
                    font-size: 10px;
                    font-weight: 750;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #98a2b3;
                }

                .status-banner.active .status-dot {
                    background: #10b981;
                }

                /* =====================================================
                   CONTENT GRID
                ===================================================== */

                .content-grid {
                    max-width: 1440px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 340px;
                    gap: 20px;
                    align-items: start;
                }

                .main-column {
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                /* =====================================================
                   CONTENT CARDS
                ===================================================== */

                .content-card,
                .side-card,
                .date-card {
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 15px;
                    box-shadow: 0 2px 6px rgba(16, 24, 40, .025);
                }

                .content-card {
                    overflow: hidden;
                }

                .content-card-header {
                    padding: 21px 23px;
                    border-bottom: 1px solid #eef1f5;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .content-card-header.compact {
                    padding: 18px 20px;
                }

                .eyebrow {
                    display: block;
                    margin-bottom: 7px;
                    color: #059669;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                .content-card-header h2 {
                    max-width: 850px;
                    margin: 0;
                    color: #101828;
                    font-size: 22px;
                    line-height: 1.35;
                    font-weight: 750;
                    letter-spacing: -.3px;
                }

                .content-card-header h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 16px;
                    font-weight: 750;
                }

                .announcement-content {
                    padding: 24px;
                }

                .content-label {
                    margin-bottom: 10px;
                    color: #667085;
                    font-size: 11px;
                    font-weight: 750;
                    text-transform: uppercase;
                    letter-spacing: .6px;
                }

                .content-body {
                    padding: 20px;
                    min-height: 170px;
                    border: 1px solid #e8ebef;
                    border-radius: 11px;
                    background: #fafbfc;
                    color: #344054;
                    font-size: 14px;
                    line-height: 1.8;
                    white-space: normal;
                    overflow-wrap: anywhere;
                }

                .empty-content {
                    color: #98a2b3;
                    font-style: italic;
                }

                /* =====================================================
                   IMAGE
                ===================================================== */

                .image-container {
                    padding: 20px;
                    background: #fafbfc;
                    text-align: center;
                }

                .image-container img {
                    display: block;
                    max-width: 100%;
                    max-height: 430px;
                    margin: 0 auto;
                    border-radius: 10px;
                    border: 1px solid #e4e7ec;
                    object-fit: contain;
                    background: #ffffff;
                }

                /* =====================================================
                   EXTERNAL LINK
                ===================================================== */

                .external-link-card {
                    margin: 20px;
                    padding: 15px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    border: 1px solid #e4e7ec;
                    border-radius: 11px;
                    background: #fafbfc;
                }

                .external-link-icon {
                    width: 42px;
                    height: 42px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563eb;
                    background: #eff6ff;
                }

                .external-link-info {
                    min-width: 0;
                    flex: 1;
                }

                .external-link-info span {
                    display: block;
                    margin-bottom: 3px;
                    color: #98a2b3;
                    font-size: 10px;
                    font-weight: 650;
                }

                .external-link-info a {
                    display: block;
                    overflow: hidden;
                    color: #2563eb;
                    font-size: 12px;
                    font-weight: 650;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-decoration: none;
                }

                .external-link-info a:hover {
                    text-decoration: underline;
                }

                .open-link {
                    height: 34px;
                    padding: 0 10px;
                    border-radius: 8px;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    color: #2563eb;
                    background: #eff6ff;
                    font-size: 11px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .open-link:hover {
                    background: #dbeafe;
                }

                /* =====================================================
                   SIDEBAR
                ===================================================== */

                .side-card {
                    overflow: hidden;
                }

                .side-card-header {
                    padding: 17px 18px;
                    border-bottom: 1px solid #eef1f5;
                }

                .side-card-header h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 14px;
                    font-weight: 750;
                }

                .detail-list {
                    padding: 5px 18px;
                }

                .detail-item {
                    min-height: 67px;
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    border-bottom: 1px solid #f0f2f5;
                }

                .detail-item:last-child {
                    border-bottom: 0;
                }

                .detail-icon {
                    width: 35px;
                    height: 35px;
                    flex-shrink: 0;
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .detail-icon.purple {
                    color: #7c3aed;
                    background: #f5f3ff;
                }

                .detail-icon.green {
                    color: #059669;
                    background: #ecfdf5;
                }

                .detail-icon.blue {
                    color: #2563eb;
                    background: #eff6ff;
                }

                .detail-icon.gray {
                    color: #64748b;
                    background: #f1f5f9;
                }

                .detail-copy {
                    min-width: 0;
                }

                .detail-copy span {
                    display: block;
                    margin-bottom: 3px;
                    color: #98a2b3;
                    font-size: 10px;
                }

                .detail-copy strong {
                    display: block;
                    overflow: hidden;
                    color: #344054;
                    font-size: 12px;
                    font-weight: 700;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* =====================================================
                   QUICK ACTIONS
                ===================================================== */

                .quick-actions {
                    padding: 7px 10px;
                }

                .quick-action {
                    min-height: 52px;
                    padding: 0 8px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border-bottom: 1px solid #f0f2f5;
                    color: #344054;
                    font-size: 12px;
                    font-weight: 650;
                    text-decoration: none;
                }

                .quick-action:last-child {
                    border-bottom: 0;
                }

                .quick-action > span:nth-child(2) {
                    flex: 1;
                }

                .quick-action > svg {
                    color: #98a2b3;
                }

                .quick-action:hover {
                    color: #059669;
                }

                .quick-action:hover > svg {
                    color: #059669;
                }

                .quick-action-icon {
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .quick-action-icon.blue {
                    color: #2563eb;
                    background: #eff6ff;
                }

                .quick-action-icon.gray {
                    color: #64748b;
                    background: #f1f5f9;
                }

                /* =====================================================
                   DATE CARD
                ===================================================== */

                .date-card {
                    padding: 15px;
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    color: #2563eb;
                    background: #eff6ff;
                    border-color: #dbeafe;
                }

                .date-card span {
                    display: block;
                    margin-bottom: 2px;
                    color: #64748b;
                    font-size: 10px;
                }

                .date-card strong {
                    display: block;
                    color: #344054;
                    font-size: 12px;
                }

                /* =====================================================
                   DELETE MODAL
                ===================================================== */

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

                /* =====================================================
                   RESPONSIVE
                ===================================================== */

                @media (max-width: 1100px) {

                    .content-grid {
                        grid-template-columns: minmax(0, 1fr) 290px;
                    }

                }

                @media (max-width: 900px) {

                    .announcement-show-page {
                        padding: 20px 15px;
                    }

                    .announcement-show-header {
                        flex-direction: column;
                    }

                    .header-actions {
                        width: 100%;
                        justify-content: flex-start;
                    }

                    .content-grid {
                        grid-template-columns: 1fr;
                    }

                    .sidebar {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        align-items: start;
                    }

                    .date-card {
                        grid-column: span 2;
                    }

                }

                @media (max-width: 600px) {

                    .announcement-show-header h1 {
                        font-size: 23px;
                    }

                    .header-main {
                        align-items: flex-start;
                    }

                    .header-actions {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .header-actions .btn {
                        width: 100%;
                    }

                    .status-banner {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .status-badge {
                        align-self: flex-start;
                    }

                    .content-card-header {
                        padding: 18px;
                    }

                    .content-card-header h2 {
                        font-size: 19px;
                    }

                    .announcement-content {
                        padding: 18px;
                    }

                    .content-body {
                        padding: 16px;
                        font-size: 13px;
                    }

                    .sidebar {
                        display: flex;
                    }

                    .date-card {
                        grid-column: auto;
                    }

                    .external-link-card {
                        align-items: flex-start;
                        flex-wrap: wrap;
                    }

                    .external-link-info {
                        width: calc(100% - 55px);
                    }

                    .open-link {
                        margin-left: 53px;
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