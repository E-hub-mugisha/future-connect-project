import React, { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/*
|--------------------------------------------------------------------------
| Inline SVG Icon
|--------------------------------------------------------------------------
*/
function Icon({ name, size = 18, strokeWidth = 1.8 }) {
    const common = {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': 'true',
    };

    const icons = {
        arrowLeft: (
            <>
                <path d="M19 12H5" />
                <path d="m11 18-6-6 6-6" />
            </>
        ),

        refresh: (
            <>
                <path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 5v4h4" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 19v-4h-4" />
            </>
        ),

        edit: (
            <>
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </>
        ),

        star: (
            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z" />
        ),

        play: (
            <path d="m9 6 10 6-10 6Z" />
        ),

        message: (
            <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-4-.8L3 21l1.8-4A8.2 8.2 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" />
        ),

        tag: (
            <>
                <path d="M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z" />
                <circle cx="7.5" cy="7.5" r="1" />
            </>
        ),

        close: (
            <>
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
            </>
        ),
    };

    return <svg {...common}>{icons[name]}</svg>;
}

/*
|--------------------------------------------------------------------------
| Date Formatter
|--------------------------------------------------------------------------
*/
function formatDate(value) {
    if (!value) return '—';

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return String(value);
    }

    const difference = Date.now() - date.getTime();

    if (difference < 0) {
        return date.toLocaleDateString(undefined, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    }

    const seconds = Math.floor(difference / 1000);

    if (seconds < 60) return 'just now';

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
        return `${minutes}m ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
        return `${hours}h ago`;
    }

    const days = Math.floor(hours / 24);

    if (days < 30) {
        return `${days}d ago`;
    }

    return date.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

/*
|--------------------------------------------------------------------------
| Image URL
|--------------------------------------------------------------------------
*/
function getImageUrl(value) {
    if (!value) {
        return '/images/placeholder-story.png';
    }

    const path = String(value);

    if (
        path.startsWith('http://') ||
        path.startsWith('https://') ||
        path.startsWith('//')
    ) {
        return path;
    }

    if (path.startsWith('/')) {
        return path;
    }

    return `/${path}`;
}

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/
export default function Show({ story = {} }) {
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Status Form
    |--------------------------------------------------------------------------
    */
    const {
        data: statusData,
        setData: setStatusData,
        put: updateStatus,
        processing: updatingStatus,
        errors: statusErrors,
    } = useForm({
        status: story.status || 'pending',
    });

    /*
    |--------------------------------------------------------------------------
    | Review Form
    |--------------------------------------------------------------------------
    */
    const {
        data: reviewData,
        setData: setReviewData,
        post: submitReview,
        processing: submittingReview,
        errors: reviewErrors,
        reset: resetReview,
    } = useForm({
        story_id: story.id || '',
        name: '',
        email: '',
        rating: 5,
        comment: '',
    });

    /*
    |--------------------------------------------------------------------------
    | Comments
    |--------------------------------------------------------------------------
    */
    const comments = Array.isArray(story.comments)
        ? story.comments
        : [];

    /*
    |--------------------------------------------------------------------------
    | Average Rating
    |--------------------------------------------------------------------------
    */
    const averageRating = useMemo(() => {
        if (comments.length === 0) {
            return 0;
        }

        const total = comments.reduce(
            (sum, comment) => sum + Number(comment.rating || 0),
            0
        );

        return total / comments.length;
    }, [comments]);

    const roundedRating = Math.round(averageRating);

    /*
    |--------------------------------------------------------------------------
    | Tags
    |--------------------------------------------------------------------------
    */
    const tags = useMemo(() => {
        if (!story.tags) {
            return [];
        }

        return String(story.tags)
            .split(',')
            .map((tag) => tag.trim())
            .filter(Boolean);
    }, [story.tags]);

    /*
    |--------------------------------------------------------------------------
    | Status
    |--------------------------------------------------------------------------
    */
    const status = String(
        story.status || 'pending'
    ).toLowerCase();

    const statusClass = [
        'approved',
        'pending',
        'rejected',
        'published',
    ].includes(status)
        ? status
        : 'pending';

    /*
    |--------------------------------------------------------------------------
    | Media
    |--------------------------------------------------------------------------
    */
    const thumbnail = getImageUrl(story.thumbnail);
    const mediaUrl = story.media || '';

    /*
    |--------------------------------------------------------------------------
    | Display Status
    |--------------------------------------------------------------------------
    */
    const displayStatus = (value) => {
        const text = String(value || 'pending');

        return (
            text.charAt(0).toUpperCase() +
            text.slice(1)
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Status Submit
    |--------------------------------------------------------------------------
    */
    const handleStatusSubmit = (event) => {
        event.preventDefault();

        updateStatus(
            route(
                'admin.stories.updateStatus',
                story.id
            ),
            {
                preserveScroll: true,

                onSuccess: () => {
                    setShowStatusModal(false);
                },
            }
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Review Submit
    |--------------------------------------------------------------------------
    */
    const handleReviewSubmit = (event) => {
        event.preventDefault();

        submitReview(
            route('admin.reviews.store'),
            {
                preserveScroll: true,

                onSuccess: () => {
                    setShowReviewModal(false);

                    resetReview();

                    setReviewData(
                        'story_id',
                        story.id
                    );
                },
            }
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Close Modals
    |--------------------------------------------------------------------------
    */
    const closeStatusModal = () => {
        if (!updatingStatus) {
            setShowStatusModal(false);
        }
    };

    const closeReviewModal = () => {
        if (!submittingReview) {
            setShowReviewModal(false);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */
    return (
        <AppLayout>
            <Head title={story.title || 'Story Details'} />

            <div
                data-h-scope="story-show"
                className="story-show"
            >

                {/* =========================================================
                    HEADER
                ========================================================= */}

                <header className="page-header">
                    <div>
                        <Link
                            href={route(
                                'admin.stories.index'
                            )}
                            className="back-link"
                        >
                            <Icon
                                name="arrowLeft"
                                size={14}
                            />

                            All stories
                        </Link>

                        <h1>
                            {story.title ||
                                'Untitled story'}
                        </h1>

                        <p className="dek">
                            By{' '}
                            {story.talent?.name ||
                                'Unknown talent'}{' '}
                            ·{' '}
                            {formatDate(
                                story.created_at
                            )}
                        </p>
                    </div>

                    <div className="header-actions">

                        <button
                            type="button"
                            className="btn btn-outline"
                            onClick={() =>
                                setShowStatusModal(
                                    true
                                )
                            }
                        >
                            <Icon
                                name="refresh"
                                size={14}
                            />

                            Update status
                        </button>

                        <Link
                            href={route(
                                'admin.stories.edit',
                                story.id
                            )}
                            className="btn btn-outline"
                        >
                            <Icon
                                name="edit"
                                size={14}
                            />

                            Edit
                        </Link>

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() =>
                                setShowReviewModal(
                                    true
                                )
                            }
                        >
                            <Icon
                                name="star"
                                size={14}
                            />

                            Add review
                        </button>
                    </div>
                </header>

                {/* =========================================================
                    OVERVIEW
                ========================================================= */}

                <section className="overview-grid">

                    <div className="panel thumb-panel">
                        <div className="thumb-hero">

                            <img
                                src={thumbnail}
                                alt={
                                    story.title ||
                                    'Story'
                                }
                                onError={(event) => {
                                    event.currentTarget.src =
                                        '/images/placeholder-story.png';
                                }}
                            />

                            <span
                                className={
                                    'status-pill ' +
                                    statusClass
                                }
                            >
                                <span className="status-dot" />

                                {displayStatus(
                                    status
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="panel">
                        <div className="panel-body">

                            <span className="category-tag">
                                <Icon
                                    name="tag"
                                    size={12}
                                />

                                {story.category?.name ||
                                    'Uncategorized'}
                            </span>

                            <h2 className="story-title">
                                {story.title ||
                                    'Untitled story'}
                            </h2>

                            <div className="rating-row">

                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(
                                        (number) => (
                                            <span
                                                key={number}
                                                className={
                                                    number <=
                                                    roundedRating
                                                        ? 'star'
                                                        : 'star empty'
                                                }
                                            >
                                                ★
                                            </span>
                                        )
                                    )}
                                </div>

                                <span className="rating-text">
                                    {averageRating.toFixed(
                                        1
                                    )}{' '}
                                    · {comments.length}{' '}
                                    {comments.length === 1
                                        ? 'review'
                                        : 'reviews'}
                                </span>
                            </div>

                            <blockquote className="excerpt">
                                {story.content
                                    ? String(
                                          story.content
                                      ).length > 200
                                        ? String(
                                              story.content
                                          ).substring(
                                              0,
                                              200
                                          ) + '…'
                                        : String(
                                              story.content
                                          )
                                    : 'No story content available.'}
                            </blockquote>

                            <div className="meta-grid">

                                <div className="meta-item">
                                    <span className="meta-label">
                                        Author
                                    </span>

                                    <span className="meta-value">
                                        {story.talent
                                            ?.name || '—'}
                                    </span>
                                </div>

                                <div className="meta-item">
                                    <span className="meta-label">
                                        Phone
                                    </span>

                                    <span className="meta-value">
                                        {story.talent
                                            ?.phone || '—'}
                                    </span>
                                </div>

                                <div className="meta-item">
                                    <span className="meta-label">
                                        Email
                                    </span>

                                    <span className="meta-value">
                                        {story.talent
                                            ?.email ? (
                                            <a
                                                href={
                                                    'mailto:' +
                                                    story
                                                        .talent
                                                        .email
                                                }
                                            >
                                                {
                                                    story
                                                        .talent
                                                        .email
                                                }
                                            </a>
                                        ) : (
                                            '—'
                                        )}
                                    </span>
                                </div>

                                <div className="meta-item">
                                    <span className="meta-label">
                                        Created
                                    </span>

                                    <span className="meta-value">
                                        {formatDate(
                                            story.created_at
                                        )}
                                    </span>
                                </div>

                                <div className="meta-item meta-item--wide">
                                    <span className="meta-label">
                                        Tags
                                    </span>

                                    <div className="tag-row">
                                        {tags.length > 0 ? (
                                            tags.map(
                                                (
                                                    tag,
                                                    index
                                                ) => (
                                                    <span
                                                        className="tag-chip"
                                                        key={
                                                            tag +
                                                            index
                                                        }
                                                    >
                                                        {tag}
                                                    </span>
                                                )
                                            )
                                        ) : (
                                            <span className="meta-value">
                                                No tags
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    FULL STORY
                ========================================================= */}

                <section className="panel">

                    <div className="panel-head">
                        <h2>
                            Full story
                            {story.talent?.name
                                ? ' of ' +
                                  story.talent.name
                                : ''}
                        </h2>

                        <p>
                            The complete content and
                            any linked media.
                        </p>
                    </div>

                    <div className="media-grid">

                        <div className="media-preview">

                            <img
                                src={thumbnail}
                                alt={
                                    story.title ||
                                    'Story media'
                                }
                                onError={(event) => {
                                    event.currentTarget.src =
                                        '/images/placeholder-story.png';
                                }}
                            />

                            {mediaUrl && (
                                <a
                                    href={mediaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="play-btn"
                                    aria-label="Open media"
                                >
                                    <Icon
                                        name="play"
                                        size={20}
                                        strokeWidth={2}
                                    />
                                </a>
                            )}
                        </div>

                        <div className="full-content">

                            <p>
                                {story.content ||
                                    'No story content available.'}
                            </p>

                            {mediaUrl && (
                                <a
                                    href={mediaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary open-media"
                                >
                                    <Icon
                                        name="play"
                                        size={13}
                                    />

                                    Open media
                                </a>
                            )}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    COMMENTS
                ========================================================= */}

                <section className="panel">

                    <div className="panel-head panel-head-row">

                        <div>
                            <h2>Comments</h2>

                            <p>
                                Reviews and feedback
                                from visitors.
                            </p>
                        </div>

                        <span className="comment-count">
                            {comments.length}
                        </span>
                    </div>

                    <div className="comments-body">

                        {comments.length > 0 ? (
                            comments.map((comment) => {
                                const rating = Number(
                                    comment.rating || 0
                                );

                                const name =
                                    comment.name ||
                                    'Anonymous';

                                return (
                                    <div
                                        className="comment-item"
                                        key={
                                            comment.id
                                        }
                                    >
                                        <span className="byline-avatar">
                                            {name
                                                .charAt(
                                                    0
                                                )
                                                .toUpperCase()}
                                        </span>

                                        <div className="comment-body">

                                            <div className="comment-top">

                                                <span className="comment-author">
                                                    {name}
                                                </span>

                                                <span className="comment-time">
                                                    {formatDate(
                                                        comment.created_at
                                                    )}
                                                </span>
                                            </div>

                                            <p className="comment-text">
                                                {comment.comment ||
                                                    'No comment provided.'}
                                            </p>

                                            <div className="stars small">
                                                {[
                                                    1,
                                                    2,
                                                    3,
                                                    4,
                                                    5,
                                                ].map(
                                                    (
                                                        number
                                                    ) => (
                                                        <span
                                                            key={
                                                                number
                                                            }
                                                            className={
                                                                number <=
                                                                rating
                                                                    ? 'star'
                                                                    : 'star empty'
                                                            }
                                                        >
                                                            ★
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="empty-comments">

                                <Icon
                                    name="message"
                                    size={20}
                                />

                                <strong>
                                    No reviews yet
                                </strong>

                                <span>
                                    Be the first to
                                    add a review to
                                    this story.
                                </span>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            {/* =============================================================
                UPDATE STATUS MODAL
            ============================================================= */}

            {showStatusModal &&
                createPortal(
                    <>
                        <div
                            className="modal fade show d-block"
                            tabIndex="-1"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="statusModalTitle"
                            style={{
                                backgroundColor:
                                    'rgba(0, 0, 0, 0.45)',
                            }}
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content border-0 shadow">

                                    <div className="modal-header px-4 py-3">

                                        <div>
                                            <h5
                                                className="modal-title mb-1"
                                                id="statusModalTitle"
                                            >
                                                Update status
                                            </h5>

                                            <small className="text-muted">
                                                Change the
                                                status of
                                                this story.
                                            </small>
                                        </div>

                                        <button
                                            type="button"
                                            className="btn-close"
                                            aria-label="Close"
                                            onClick={
                                                closeStatusModal
                                            }
                                        />
                                    </div>

                                    <form
                                        onSubmit={
                                            handleStatusSubmit
                                        }
                                    >
                                        <div className="modal-body p-4">

                                            <div className="mb-3">

                                                <label
                                                    htmlFor="story-status"
                                                    className="form-label fw-semibold"
                                                >
                                                    New status
                                                </label>

                                                <select
                                                    id="story-status"
                                                    className={
                                                        'form-select ' +
                                                        (statusErrors.status
                                                            ? 'is-invalid'
                                                            : '')
                                                    }
                                                    value={
                                                        statusData.status
                                                    }
                                                    onChange={(
                                                        event
                                                    ) =>
                                                        setStatusData(
                                                            'status',
                                                            event
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                    required
                                                >
                                                    <option value="pending">
                                                        Pending
                                                    </option>

                                                    <option value="approved">
                                                        Approved
                                                    </option>

                                                    <option value="rejected">
                                                        Rejected
                                                    </option>

                                                    <option value="published">
                                                        Published
                                                    </option>
                                                </select>

                                                {statusErrors.status && (
                                                    <div className="invalid-feedback">
                                                        {
                                                            statusErrors.status
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="modal-footer px-4 py-3">

                                            <button
                                                type="button"
                                                className="btn btn-light"
                                                onClick={
                                                    closeStatusModal
                                                }
                                                disabled={
                                                    updatingStatus
                                                }
                                            >
                                                Cancel
                                            </button>

                                            <button
                                                type="submit"
                                                className="btn btn-dark"
                                                disabled={
                                                    updatingStatus
                                                }
                                            >
                                                {updatingStatus
                                                    ? 'Updating...'
                                                    : 'Update status'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div
                            className="modal-backdrop fade show"
                            onClick={closeStatusModal}
                        />
                    </>,
                    document.body
                )}

            {/* =============================================================
                ADD REVIEW MODAL
            ============================================================= */}

            {showReviewModal &&
                createPortal(
                    <>
                        <div
                            className="modal fade show d-block"
                            tabIndex="-1"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="reviewModalTitle"
                            style={{
                                backgroundColor:
                                    'rgba(0, 0, 0, 0.45)',
                            }}
                        >
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content border-0 shadow">

                                    <div className="modal-header px-4 py-3">

                                        <div>
                                            <h5
                                                className="modal-title mb-1"
                                                id="reviewModalTitle"
                                            >
                                                Add review
                                            </h5>

                                            <small className="text-muted">
                                                Add feedback
                                                and rating
                                                for this
                                                story.
                                            </small>
                                        </div>

                                        <button
                                            type="button"
                                            className="btn-close"
                                            aria-label="Close"
                                            onClick={
                                                closeReviewModal
                                            }
                                        />
                                    </div>

                                    <form
                                        onSubmit={
                                            handleReviewSubmit
                                        }
                                    >
                                        <div className="modal-body p-4">

                                            <div className="row g-3">

                                                {/* Name */}
                                                <div className="col-md-6">

                                                    <label
                                                        htmlFor="review-name"
                                                        className="form-label fw-semibold"
                                                    >
                                                        Name
                                                    </label>

                                                    <input
                                                        id="review-name"
                                                        type="text"
                                                        className={
                                                            'form-control ' +
                                                            (reviewErrors.name
                                                                ? 'is-invalid'
                                                                : '')
                                                        }
                                                        placeholder="Jane Doe"
                                                        value={
                                                            reviewData.name
                                                        }
                                                        onChange={(
                                                            event
                                                        ) =>
                                                            setReviewData(
                                                                'name',
                                                                event
                                                                    .target
                                                                    .value
                                                            )
                                                        }
                                                        required
                                                    />

                                                    {reviewErrors.name && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                reviewErrors.name
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Email */}
                                                <div className="col-md-6">

                                                    <label
                                                        htmlFor="review-email"
                                                        className="form-label fw-semibold"
                                                    >
                                                        Email
                                                    </label>

                                                    <input
                                                        id="review-email"
                                                        type="email"
                                                        className={
                                                            'form-control ' +
                                                            (reviewErrors.email
                                                                ? 'is-invalid'
                                                                : '')
                                                        }
                                                        placeholder="jane@example.com"
                                                        value={
                                                            reviewData.email
                                                        }
                                                        onChange={(
                                                            event
                                                        ) =>
                                                            setReviewData(
                                                                'email',
                                                                event
                                                                    .target
                                                                    .value
                                                            )
                                                        }
                                                        required
                                                    />

                                                    {reviewErrors.email && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                reviewErrors.email
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Rating */}
                                                <div className="col-md-6">

                                                    <label
                                                        htmlFor="review-rating"
                                                        className="form-label fw-semibold"
                                                    >
                                                        Rating
                                                    </label>

                                                    <select
                                                        id="review-rating"
                                                        className={
                                                            'form-select ' +
                                                            (reviewErrors.rating
                                                                ? 'is-invalid'
                                                                : '')
                                                        }
                                                        value={
                                                            reviewData.rating
                                                        }
                                                        onChange={(
                                                            event
                                                        ) =>
                                                            setReviewData(
                                                                'rating',
                                                                Number(
                                                                    event
                                                                        .target
                                                                        .value
                                                                )
                                                            )
                                                        }
                                                        required
                                                    >
                                                        <option value={5}>
                                                            ★★★★★ Excellent
                                                        </option>

                                                        <option value={4}>
                                                            ★★★★ Good
                                                        </option>

                                                        <option value={3}>
                                                            ★★★ Average
                                                        </option>

                                                        <option value={2}>
                                                            ★★ Poor
                                                        </option>

                                                        <option value={1}>
                                                            ★ Terrible
                                                        </option>
                                                    </select>

                                                    {reviewErrors.rating && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                reviewErrors.rating
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Comment */}
                                                <div className="col-12">

                                                    <label
                                                        htmlFor="review-comment"
                                                        className="form-label fw-semibold"
                                                    >
                                                        Comment
                                                    </label>

                                                    <textarea
                                                        id="review-comment"
                                                        className={
                                                            'form-control ' +
                                                            (reviewErrors.comment
                                                                ? 'is-invalid'
                                                                : '')
                                                        }
                                                        rows="5"
                                                        placeholder="Share your thoughts..."
                                                        value={
                                                            reviewData.comment
                                                        }
                                                        onChange={(
                                                            event
                                                        ) =>
                                                            setReviewData(
                                                                'comment',
                                                                event
                                                                    .target
                                                                    .value
                                                            )
                                                        }
                                                        required
                                                    />

                                                    {reviewErrors.comment && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                reviewErrors.comment
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal-footer px-4 py-3">

                                            <button
                                                type="button"
                                                className="btn btn-light"
                                                onClick={
                                                    closeReviewModal
                                                }
                                                disabled={
                                                    submittingReview
                                                }
                                            >
                                                Cancel
                                            </button>

                                            <button
                                                type="submit"
                                                className="btn btn-dark"
                                                disabled={
                                                    submittingReview
                                                }
                                            >
                                                {submittingReview
                                                    ? 'Submitting...'
                                                    : 'Submit review'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div
                            className="modal-backdrop fade show"
                            onClick={closeReviewModal}
                        />
                    </>,
                    document.body
                )}

            {/* =============================================================
                PAGE CSS
            ============================================================= */}

            <style>{`
                [data-h-scope="story-show"] {
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

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    color: var(--ink);
                }

                [data-h-scope="story-show"] * {
                    box-sizing: border-box;
                }

                .story-show {
                    background: var(--paper);
                    min-height: 100vh;
                    padding: 32px clamp(18px, 4vw, 48px) 64px;
                }

                .story-show > * {
                    max-width: 1080px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .story-show > * + * {
                    margin-top: 16px;
                }

                /* HEADER */

                .page-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 16px;
                    flex-wrap: wrap;
                    border-bottom: 2px solid var(--ink);
                    padding-bottom: 20px !important;
                    margin-bottom: 24px !important;
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--ink-soft);
                    text-decoration: none;
                    margin-bottom: 10px;
                }

                .back-link:hover {
                    color: var(--brand-ink);
                }

                .page-header h1 {
                    margin: 0;
                    font-weight: 700;
                    font-size: clamp(20px, 2.4vw, 26px);
                    letter-spacing: -0.01em;
                }

                .dek {
                    margin: 6px 0 0;
                    font-size: 12.5px;
                    color: var(--ink-soft);
                }

                .header-actions {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                /* BUTTONS */

                .story-show .btn {
                    height: 36px;
                    padding: 0 14px;
                    border-radius: 7px;
                    border: 1.5px solid transparent;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    font-family: inherit;
                    font-size: 12.5px;
                    font-weight: 600;
                    cursor: pointer;
                    text-decoration: none;
                    white-space: nowrap;
                }

                .story-show .btn-outline {
                    background: var(--surface);
                    color: var(--ink);
                    border-color: var(--line);
                }

                .story-show .btn-outline:hover {
                    border-color: var(--ink-faint);
                }

                .story-show .btn-primary {
                    background: var(--ink);
                    color: #fff;
                    border-color: var(--ink);
                }

                .story-show .btn-primary:hover {
                    background: var(--brand-ink);
                    border-color: var(--brand-ink);
                }

                /* PANELS */

                .panel {
                    border: 1px solid var(--line);
                    border-radius: 10px;
                    background: var(--surface);
                    overflow: hidden;
                }

                .panel-head {
                    padding: 14px 16px;
                    border-bottom: 1px solid var(--line);
                }

                .panel-head-row {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 10px;
                }

                .panel-head h2 {
                    margin: 0;
                    font-size: 13px;
                    font-weight: 600;
                }

                .panel-head p {
                    margin: 3px 0 0;
                    font-size: 11.5px;
                    color: var(--ink-soft);
                }

                .panel-body {
                    padding: 16px;
                }

                /* OVERVIEW */

                .overview-grid {
                    display: grid;
                    grid-template-columns: 280px minmax(0, 1fr);
                    gap: 14px;
                    align-items: start;
                }

                .thumb-panel {
                    padding: 0;
                }

                .thumb-hero {
                    position: relative;
                    aspect-ratio: 4 / 3;
                    background: var(--brand-wash);
                }

                .thumb-hero img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .thumb-hero .status-pill {
                    position: absolute;
                    left: 10px;
                    bottom: 10px;
                }

                .category-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 3px 9px;
                    border-radius: 999px;
                    background: var(--brand-wash);
                    color: var(--brand-ink);
                    font-size: 10.5px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                .story-title {
                    margin: 0 0 10px;
                    font-size: 19px;
                    font-weight: 700;
                    line-height: 1.3;
                }

                .rating-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 14px;
                }

                .stars {
                    display: flex;
                    gap: 1px;
                }

                .stars .star {
                    color: var(--amber);
                    font-size: 14px;
                }

                .stars.small .star {
                    font-size: 11px;
                }

                .stars .star.empty {
                    color: var(--line);
                }

                .rating-text {
                    font-size: 11.5px;
                    color: var(--ink-soft);
                }

                .excerpt {
                    margin: 0 0 16px;
                    padding: 10px 12px;
                    border-left: 2px solid var(--brand);
                    background: var(--paper);
                    color: var(--ink-soft);
                    font-size: 12.5px;
                    line-height: 1.6;
                    font-style: normal;
                }

                .meta-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px 16px;
                    padding-top: 14px;
                    border-top: 1px solid var(--line);
                }

                .meta-item--wide {
                    grid-column: 1 / -1;
                }

                .meta-label {
                    display: block;
                    font-size: 10px;
                    color: var(--ink-faint);
                    margin-bottom: 3px;
                }

                .meta-value {
                    display: block;
                    font-size: 12.5px;
                    font-weight: 600;
                    color: var(--ink);
                    word-break: break-word;
                }

                .meta-value a {
                    color: var(--brand-ink);
                    text-decoration: none;
                }

                .meta-value a:hover {
                    text-decoration: underline;
                }

                .tag-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;
                }

                .tag-chip {
                    padding: 3px 8px;
                    border-radius: 999px;
                    background: var(--paper);
                    border: 1px solid var(--line);
                    color: var(--ink-soft);
                    font-size: 10.5px;
                    font-weight: 600;
                }

                /* STATUS */

                .status-pill {
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

                /* MEDIA */

                .media-grid {
                    display: grid;
                    grid-template-columns:
                        minmax(0, 1fr)
                        minmax(0, 1fr);
                }

                .media-preview {
                    position: relative;
                    min-height: 220px;
                    background: var(--ink);
                }

                .media-preview img {
                    width: 100%;
                    height: 100%;
                    min-height: 220px;
                    object-fit: cover;
                    opacity: 0.85;
                    display: block;
                }

                .play-btn {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    text-decoration: none;
                }

                .play-btn::before {
                    content: '';
                    position: absolute;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: rgba(
                        255,
                        255,
                        255,
                        0.16
                    );
                    backdrop-filter: blur(2px);
                }

                .full-content {
                    padding: 20px;
                }

                .full-content p {
                    margin: 0 0 16px;
                    color: var(--ink-soft);
                    font-size: 13px;
                    line-height: 1.7;
                    white-space: pre-line;
                }

                .open-media {
                    width: fit-content;
                }

                /* COMMENTS */

                .comment-count {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 20px;
                    height: 20px;
                    padding: 0 6px;
                    border-radius: 999px;
                    background: var(--brand-wash);
                    color: var(--brand-ink);
                    font-size: 10.5px;
                    font-weight: 700;
                }

                .comments-body {
                    padding: 4px 16px;
                }

                .comment-item {
                    display: flex;
                    gap: 10px;
                    padding: 14px 0;
                    border-bottom: 1px solid var(--line);
                }

                .comment-item:last-child {
                    border-bottom: none;
                }

                .byline-avatar {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    flex-shrink: 0;
                    background: var(--brand-wash);
                    color: var(--brand-ink);
                    font-size: 11px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .comment-body {
                    flex: 1;
                    min-width: 0;
                }

                .comment-top {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: 8px;
                    margin-bottom: 3px;
                }

                .comment-author {
                    font-size: 12.5px;
                    font-weight: 600;
                }

                .comment-time {
                    font-size: 10.5px;
                    color: var(--ink-faint);
                    white-space: nowrap;
                }

                .comment-text {
                    margin: 0 0 5px;
                    font-size: 12px;
                    color: var(--ink-soft);
                    line-height: 1.55;
                }

                .empty-comments {
                    text-align: center;
                    padding: 44px 16px;
                    color: var(--ink-faint);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                }

                .empty-comments strong {
                    color: var(--ink-soft);
                    font-size: 13px;
                    font-weight: 600;
                }

                .empty-comments span {
                    font-size: 11.5px;
                }

                /* BOOTSTRAP MODAL OVERRIDES */

                body:has(.story-show .modal.show) {
                    overflow: hidden;
                }

                .story-show .modal {
                    z-index: 1060;
                }

                .story-show .modal-backdrop {
                    z-index: 1050;
                }

                .story-show .modal-content {
                    border-radius: 12px;
                    overflow: hidden;
                }

                .story-show .modal-header {
                    border-bottom: 1px solid #e5e5e7;
                }

                .story-show .modal-footer {
                    border-top: 1px solid #e5e5e7;
                }

                .story-show .modal-title {
                    font-size: 15px;
                    font-weight: 700;
                    color: #1d1d1f;
                }

                .story-show .modal-body {
                    color: #1d1d1f;
                }

                .story-show .form-label {
                    font-size: 12px;
                    margin-bottom: 6px;
                }

                .story-show .form-control,
                .story-show .form-select {
                    min-height: 38px;
                    border-color: #e5e5e7;
                    border-radius: 8px;
                    font-size: 13px;
                    box-shadow: none;
                }

                .story-show .form-control:focus,
                .story-show .form-select:focus {
                    border-color: #48d597;
                    box-shadow:
                        0 0 0 3px
                        rgba(72, 213, 151, 0.15);
                }

                .story-show textarea.form-control {
                    min-height: 110px;
                    resize: vertical;
                }

                .story-show .modal .btn {
                    height: 36px;
                    min-height: 36px;
                }

                /* RESPONSIVE */

                @media (max-width: 800px) {
                    .overview-grid {
                        grid-template-columns: 1fr;
                    }

                    .thumb-hero {
                        aspect-ratio: 16 / 9;
                    }

                    .media-grid {
                        grid-template-columns: 1fr;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .header-actions .btn {
                        flex: 1;
                    }
                }

                @media (max-width: 480px) {
                    .meta-grid {
                        grid-template-columns: 1fr;
                    }

                    .comment-top {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 2px;
                    }

                    .story-show {
                        padding-left: 14px;
                        padding-right: 14px;
                    }

                    .story-show .modal-dialog {
                        margin: 12px;
                    }

                    .story-show .modal-footer {
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </AppLayout>
    );
}
