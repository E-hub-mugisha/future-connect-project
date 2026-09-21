import React, { useMemo, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const styles = `
    :root {
        --story-bg: #f6f8fb;
        --story-card: #ffffff;
        --story-border: #e7ebf0;
        --story-text: #17202a;
        --story-muted: #718096;
        --story-primary: #059669;
        --story-primary-dark: #047857;
        --story-primary-soft: #ecfdf5;
        --story-blue: #2563eb;
        --story-blue-soft: #eff6ff;
        --story-warning: #d97706;
        --story-warning-soft: #fffbeb;
        --story-danger: #dc2626;
        --story-danger-soft: #fef2f2;
        --story-radius: 18px;
        --story-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
    }

    .story-show-page {
        min-height: 100vh;
        background: var(--story-bg);
        color: var(--story-text);
        padding: 28px;
    }

    .story-container {
        max-width: 1450px;
        margin: 0 auto;
    }

    .story-page-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 28px;
    }

    .story-breadcrumb {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--story-muted);
        font-size: 13px;
        margin-bottom: 8px;
    }

    .story-breadcrumb a {
        color: var(--story-muted);
        text-decoration: none;
    }

    .story-breadcrumb a:hover {
        color: var(--story-primary);
    }

    .story-page-title {
        margin: 0;
        font-size: 28px;
        line-height: 1.2;
        font-weight: 800;
        letter-spacing: -0.03em;
    }

    .story-page-subtitle {
        margin: 7px 0 0;
        color: var(--story-muted);
        font-size: 14px;
    }

    .story-header-actions {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: flex-end;
    }

    .story-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 42px;
        padding: 0 15px;
        border-radius: 11px;
        border: 1px solid transparent;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
        transition: all .18s ease;
        white-space: nowrap;
        font-family: inherit;
    }

    .story-btn:hover {
        transform: translateY(-1px);
    }

    .story-btn-outline {
        background: #fff;
        color: #475569;
        border-color: var(--story-border);
    }

    .story-btn-outline:hover {
        color: var(--story-text);
        border-color: #cbd5e1;
        box-shadow: 0 4px 12px rgba(15, 23, 42, .05);
    }

    .story-btn-warning {
        background: var(--story-warning-soft);
        color: var(--story-warning);
        border-color: #fde68a;
    }

    .story-btn-warning:hover {
        background: #fef3c7;
    }

    .story-btn-blue {
        background: var(--story-blue-soft);
        color: var(--story-blue);
        border-color: #bfdbfe;
    }

    .story-btn-blue:hover {
        background: #dbeafe;
    }

    .story-btn-primary {
        background: var(--story-primary);
        color: #fff;
        border-color: var(--story-primary);
        box-shadow: 0 5px 14px rgba(5, 150, 105, .18);
    }

    .story-btn-primary:hover {
        background: var(--story-primary-dark);
        border-color: var(--story-primary-dark);
    }

    .story-main-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 22px;
        margin-bottom: 22px;
    }

    .story-card {
        background: var(--story-card);
        border: 1px solid var(--story-border);
        border-radius: var(--story-radius);
        box-shadow: var(--story-shadow);
        overflow: hidden;
    }

    .story-thumbnail {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 10;
        background: #eef2f7;
        overflow: hidden;
    }

    .story-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform .35s ease;
    }

    .story-thumbnail:hover img {
        transform: scale(1.025);
    }

    .story-thumbnail-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to top,
            rgba(15, 23, 42, .32),
            transparent 55%
        );
        pointer-events: none;
    }

    .thumbnail-status {
        position: absolute;
        left: 18px;
        bottom: 18px;
    }

    .story-info {
        padding: 28px;
    }

    .story-category {
        display: inline-flex;
        align-items: center;
        padding: 6px 11px;
        background: var(--story-primary-soft);
        color: var(--story-primary-dark);
        border: 1px solid #bbf7d0;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .06em;
        margin-bottom: 13px;
    }

    .story-title {
        margin: 0;
        font-size: 27px;
        line-height: 1.25;
        letter-spacing: -.03em;
        font-weight: 800;
    }

    .story-rating {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 17px 0 20px;
    }

    .story-stars {
        display: flex;
        gap: 2px;
    }

    .story-star {
        color: #f59e0b;
        font-size: 18px;
        line-height: 1;
    }

    .story-star.empty {
        color: #d7dee7;
    }

    .rating-text {
        font-size: 13px;
        color: var(--story-muted);
    }

    .story-excerpt {
        padding: 15px 16px;
        background: #f8fafc;
        border: 1px solid #edf1f5;
        border-left: 3px solid var(--story-primary);
        border-radius: 0 12px 12px 0;
        color: #526174;
        font-size: 14px;
        line-height: 1.75;
    }

    .story-meta-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px 20px;
        margin-top: 25px;
        padding-top: 23px;
        border-top: 1px solid var(--story-border);
    }

    .meta-label {
        margin-bottom: 5px;
        color: #94a3b8;
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .08em;
    }

    .meta-value {
        color: #263445;
        font-size: 13px;
        font-weight: 700;
        word-break: break-word;
    }

    .meta-value a {
        color: var(--story-primary-dark);
        text-decoration: none;
    }

    .meta-value a:hover {
        text-decoration: underline;
    }

    .story-status {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 5px 10px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
    }

    .story-status::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
    }

    .status-approved {
        background: var(--story-primary-soft);
        color: #059669;
    }

    .status-pending {
        background: var(--story-warning-soft);
        color: #d97706;
    }

    .status-rejected {
        background: var(--story-danger-soft);
        color: #dc2626;
    }

    .status-published {
        background: var(--story-blue-soft);
        color: #2563eb;
    }

    .status-default {
        background: #f1f5f9;
        color: #64748b;
    }

    .story-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .story-tag {
        display: inline-flex;
        align-items: center;
        padding: 5px 9px;
        border-radius: 999px;
        background: #eff6ff;
        color: #2563eb;
        border: 1px solid #dbeafe;
        font-size: 11px;
        font-weight: 700;
    }

    .story-section-card {
        background: #fff;
        border: 1px solid var(--story-border);
        border-radius: var(--story-radius);
        box-shadow: var(--story-shadow);
        overflow: hidden;
        margin-bottom: 22px;
    }

    .story-section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        padding: 18px 22px;
        border-bottom: 1px solid var(--story-border);
    }

    .section-heading {
        display: flex;
        align-items: center;
        gap: 11px;
    }

    .section-icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: var(--story-primary-soft);
        color: var(--story-primary);
        flex-shrink: 0;
    }

    .section-heading h3 {
        margin: 0;
        font-size: 15px;
        font-weight: 800;
    }

    .section-heading p {
        margin: 3px 0 0;
        color: var(--story-muted);
        font-size: 12px;
    }

    .story-media-grid {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
    }

    .story-media-preview {
        position: relative;
        min-height: 330px;
        background: #0f172a;
        overflow: hidden;
    }

    .story-media-preview img {
        width: 100%;
        height: 100%;
        min-height: 330px;
        object-fit: cover;
        opacity: .82;
        display: block;
    }

    .media-overlay {
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, .35);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .media-play-btn {
        width: 68px;
        height: 68px;
        border-radius: 50%;
        background: #fff;
        color: var(--story-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        box-shadow: 0 12px 35px rgba(0, 0, 0, .25);
        transition: all .2s ease;
    }

    .media-play-btn:hover {
        transform: scale(1.08);
        color: var(--story-primary-dark);
    }

    .story-full-content {
        padding: 30px;
    }

    .story-full-content .content-label {
        color: var(--story-primary);
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .08em;
        margin-bottom: 8px;
    }

    .story-full-content h3 {
        margin: 0 0 12px;
        font-size: 20px;
        font-weight: 800;
    }

    .story-full-content p {
        margin: 0;
        color: #64748b;
        font-size: 14px;
        line-height: 1.85;
        white-space: pre-line;
    }

    .open-media-wrapper {
        margin-top: 20px;
    }

    .open-media-button {
        width: fit-content;
    }

    .comment-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 27px;
        height: 24px;
        padding: 0 8px;
        border-radius: 999px;
        background: var(--story-primary-soft);
        color: var(--story-primary-dark);
        font-size: 11px;
        font-weight: 800;
    }

    .comments-body {
        padding: 5px 22px;
    }

    .comment-item {
        display: flex;
        gap: 13px;
        padding: 18px 0;
        border-bottom: 1px solid #eef2f6;
    }

    .comment-item:last-child {
        border-bottom: none;
    }

    .comment-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--story-primary-soft);
        border: 1px solid #bbf7d0;
        color: var(--story-primary-dark);
        font-size: 13px;
        font-weight: 800;
    }

    .comment-content {
        flex: 1;
        min-width: 0;
    }

    .comment-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;
    }

    .comment-author {
        font-size: 13px;
        font-weight: 800;
    }

    .comment-time {
        color: #94a3b8;
        font-size: 11px;
        white-space: nowrap;
    }

    .comment-text {
        margin: 0 0 7px;
        color: #64748b;
        font-size: 13px;
        line-height: 1.65;
    }

    .comment-stars {
        display: flex;
        gap: 2px;
    }

    .comment-star {
        color: #d7dee7;
        font-size: 13px;
    }

    .comment-star.filled {
        color: #f59e0b;
    }

    .empty-comments {
        text-align: center;
        padding: 55px 20px;
        color: #94a3b8;
    }

    .empty-comments-icon {
        width: 50px;
        height: 50px;
        margin: 0 auto 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 14px;
        background: #f8fafc;
        color: #94a3b8;
    }

    .empty-comments strong {
        display: block;
        color: #475569;
        font-size: 14px;
        margin-bottom: 4px;
    }

    .empty-comments span {
        font-size: 12px;
    }

    .story-modal-backdrop {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background: rgba(15, 23, 42, .45);
        backdrop-filter: blur(4px);
    }

    .story-modal {
        width: 100%;
        max-width: 500px;
        max-height: calc(100vh - 40px);
        overflow: auto;
        background: #fff;
        border: 1px solid var(--story-border);
        border-radius: 18px;
        box-shadow: 0 25px 70px rgba(15, 23, 42, .2);
    }

    .story-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        padding: 18px 20px;
        border-bottom: 1px solid var(--story-border);
    }

    .story-modal-title {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
        font-size: 16px;
        font-weight: 800;
    }

    .modal-title-icon {
        color: var(--story-primary);
    }

    .modal-close {
        width: 34px;
        height: 34px;
        border: none;
        border-radius: 9px;
        background: #f8fafc;
        color: #64748b;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-close:hover {
        background: #f1f5f9;
        color: #1e293b;
    }

    .story-modal-body {
        padding: 22px 20px;
    }

    .modal-field {
        margin-bottom: 17px;
    }

    .modal-field:last-child {
        margin-bottom: 0;
    }

    .modal-label {
        display: block;
        margin-bottom: 7px;
        color: #475569;
        font-size: 12px;
        font-weight: 800;
    }

    .modal-input,
    .modal-select,
    .modal-textarea {
        width: 100%;
        border: 1px solid #dce2e8;
        background: #fff;
        border-radius: 10px;
        padding: 10px 12px;
        color: #1e293b;
        font-size: 13px;
        outline: none;
        font-family: inherit;
        transition: all .15s ease;
    }

    .modal-input:focus,
    .modal-select:focus,
    .modal-textarea:focus {
        border-color: #6ee7b7;
        box-shadow: 0 0 0 3px rgba(5, 150, 105, .08);
    }

    .modal-textarea {
        resize: vertical;
        min-height: 95px;
    }

    .story-modal-footer {
        display: flex;
        justify-content: flex-end;
        gap: 9px;
        padding: 15px 20px;
        border-top: 1px solid var(--story-border);
        background: #fafbfc;
    }

    .modal-cancel {
        min-height: 40px;
        padding: 0 15px;
        border: 1px solid #dce2e8;
        border-radius: 9px;
        background: #fff;
        color: #64748b;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
    }

    .modal-submit {
        min-height: 40px;
        padding: 0 17px;
        border: none;
        border-radius: 9px;
        background: var(--story-primary);
        color: #fff;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
    }

    .modal-submit:hover {
        background: var(--story-primary-dark);
    }

    .modal-submit:disabled {
        opacity: .65;
        cursor: not-allowed;
    }

    .form-error {
        margin-top: 5px;
        color: #dc2626;
        font-size: 11px;
    }

    @media (max-width: 1100px) {
        .story-main-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 850px) {
        .story-page-header {
            flex-direction: column;
        }

        .story-header-actions {
            width: 100%;
            justify-content: flex-start;
        }

        .story-media-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 640px) {
        .story-show-page {
            padding: 18px 14px;
        }

        .story-page-title {
            font-size: 23px;
        }

        .story-header-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
        }

        .story-btn {
            width: 100%;
        }

        .story-info {
            padding: 20px;
        }

        .story-title {
            font-size: 22px;
        }

        .story-meta-grid {
            grid-template-columns: 1fr;
            gap: 15px;
        }

        .story-media-preview,
        .story-media-preview img {
            min-height: 230px;
        }

        .story-full-content {
            padding: 22px;
        }

        .story-section-header {
            padding: 16px;
        }

        .comments-body {
            padding: 5px 16px;
        }

        .comment-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 3px;
        }

        .comment-time {
            white-space: normal;
        }
    }
`;

const Icon = ({ name, size = 18, stroke = 1.8 }) => {
    const icons = {
        arrowLeft: (
            <>
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
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
            <>
                <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-4-.8L3 21l1.8-4A8.2 8.2 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" />
                <path d="M8 12h.01M12 12h.01M16 12h.01" />
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
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {icons[name]}
        </svg>
    );
};

function formatDate(value) {
    if (!value) {
        return '—';
    }

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

    if (seconds < 60) {
        return 'just now';
    }

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
        return minutes + 'm ago';
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
        return hours + 'h ago';
    }

    const days = Math.floor(hours / 24);

    if (days < 30) {
        return days + 'd ago';
    }

    return date.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

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

    return '/' + path;
}

export default function Show({ story = {} }) {
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);

    const {
        data: statusData,
        setData: setStatusData,
        put: updateStatus,
        processing: updatingStatus,
        errors: statusErrors,
    } = useForm({
        status: story.status || 'pending',
    });

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

    const comments = Array.isArray(story.comments)
        ? story.comments
        : [];

    const averageRating = useMemo(() => {
        if (comments.length === 0) {
            return 0;
        }

        const total = comments.reduce(
            (sum, comment) => {
                return sum + Number(comment.rating || 0);
            },
            0
        );

        return total / comments.length;
    }, [comments]);

    const roundedRating = Math.round(averageRating);

    const tags = useMemo(() => {
        if (!story.tags) {
            return [];
        }

        return String(story.tags)
            .split(',')
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0);
    }, [story.tags]);

    const status = String(story.status || 'pending').toLowerCase();

    let statusClass = 'status-default';

    if (
        status === 'approved' ||
        status === 'pending' ||
        status === 'rejected' ||
        status === 'published'
    ) {
        statusClass = 'status-' + status;
    }

    const thumbnail = getImageUrl(story.thumbnail);
    const mediaUrl = story.media || '';

    const excerpt = story.content
        ? String(story.content).length > 200
            ? String(story.content).substring(0, 200) + '…'
            : String(story.content)
        : 'No story content available.';

    function displayStatus(value) {
        if (!value) {
            return 'Pending';
        }

        const text = String(value);

        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    function handleStatusSubmit(event) {
        event.preventDefault();

        updateStatus(
            route('admin.stories.updateStatus', story.id),
            {
                preserveScroll: true,
                onSuccess: () => {
                    setShowStatusModal(false);
                },
            }
        );
    }

    function handleReviewSubmit(event) {
        event.preventDefault();

        submitReview(
            route('admin.reviews.store'),
            {
                preserveScroll: true,
                onSuccess: () => {
                    setShowReviewModal(false);
                    resetReview();
                    setReviewData('story_id', story.id);
                },
            }
        );
    }

    return (
        <AppLayout>
            <Head title={story.title || 'Story Details'} />

            <style>{styles}</style>

            <div className="story-show-page">
                <div className="story-container">

                    {/* Header */}
                    <div className="story-page-header">
                        <div>
                            <div className="story-breadcrumb">
                                <Link href={route('admin.stories.index')}>
                                    Stories
                                </Link>

                                <span>/</span>

                                <span>Details</span>
                            </div>

                            <h1 className="story-page-title">
                                Story Details
                            </h1>

                            <p className="story-page-subtitle">
                                Review and manage this talent story.
                            </p>
                        </div>

                        <div className="story-header-actions">
                            <Link
                                href={route('admin.stories.index')}
                                className="story-btn story-btn-outline"
                            >
                                <Icon name="arrowLeft" size={16} />
                                Back
                            </Link>

                            <button
                                type="button"
                                className="story-btn story-btn-warning"
                                onClick={() => setShowStatusModal(true)}
                            >
                                <Icon name="refresh" size={16} />
                                Update Status
                            </button>

                            <Link
                                href={route(
                                    'admin.stories.edit',
                                    story.id
                                )}
                                className="story-btn story-btn-blue"
                            >
                                <Icon name="edit" size={16} />
                                Edit
                            </Link>

                            <button
                                type="button"
                                className="story-btn story-btn-primary"
                                onClick={() => setShowReviewModal(true)}
                            >
                                <Icon name="star" size={16} />
                                Add Review
                            </button>
                        </div>
                    </div>

                    {/* Story Summary */}
                    <div className="story-main-grid">

                        <div className="story-card">
                            <div className="story-thumbnail">
                                <img
                                    src={thumbnail}
                                    alt={story.title || 'Story'}
                                    onError={(event) => {
                                        event.currentTarget.src =
                                            '/images/placeholder-story.png';
                                    }}
                                />

                                <div className="story-thumbnail-overlay" />

                                <div className="thumbnail-status">
                                    <span
                                        className={
                                            'story-status ' + statusClass
                                        }
                                    >
                                        {displayStatus(status)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-info">

                                <div className="story-category">
                                    {story.category?.name ||
                                        'Uncategorized'}
                                </div>

                                <h2 className="story-title">
                                    {story.title || 'Untitled Story'}
                                </h2>

                                <div className="story-rating">
                                    <div className="story-stars">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                className={
                                                    star <= roundedRating
                                                        ? 'story-star'
                                                        : 'story-star empty'
                                                }
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>

                                    <span className="rating-text">
                                        {averageRating.toFixed(1)}
                                        {' · '}
                                        {comments.length}
                                        {' '}
                                        {comments.length === 1
                                            ? 'review'
                                            : 'reviews'}
                                    </span>
                                </div>

                                <div className="story-excerpt">
                                    {excerpt}
                                </div>

                                <div className="story-meta-grid">

                                    <div>
                                        <div className="meta-label">
                                            Author
                                        </div>

                                        <div className="meta-value">
                                            {story.talent?.name || '—'}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="meta-label">
                                            Phone
                                        </div>

                                        <div className="meta-value">
                                            {story.talent?.phone || '—'}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="meta-label">
                                            Email
                                        </div>

                                        <div className="meta-value">
                                            {story.talent?.email ? (
                                                <a
                                                    href={
                                                        'mailto:' +
                                                        story.talent.email
                                                    }
                                                >
                                                    {story.talent.email}
                                                </a>
                                            ) : (
                                                '—'
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="meta-label">
                                            Created
                                        </div>

                                        <div className="meta-value">
                                            {formatDate(
                                                story.created_at
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="meta-label">
                                            Status
                                        </div>

                                        <div className="meta-value">
                                            <span
                                                className={
                                                    'story-status ' +
                                                    statusClass
                                                }
                                            >
                                                {displayStatus(status)}
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="meta-label">
                                            Tags
                                        </div>

                                        <div className="story-tags">
                                            {tags.length > 0 ? (
                                                tags.map(
                                                    (tag, index) => (
                                                        <span
                                                            className="story-tag"
                                                            key={
                                                                tag +
                                                                '-' +
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
                    </div>

                    {/* Full Story */}
                    <div className="story-section-card">
                        <div className="story-section-header">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <Icon name="play" size={17} />
                                </div>

                                <div>
                                    <h3>
                                        Story Details
                                        {story.talent?.name
                                            ? ' of ' +
                                              story.talent.name
                                            : ''}
                                    </h3>

                                    <p>
                                        Full story content and media
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="story-media-grid">

                            <div className="story-media-preview">
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

                                {mediaUrl ? (
                                    <div className="media-overlay">
                                        <a
                                            href={mediaUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="media-play-btn"
                                            aria-label="Open story media"
                                        >
                                            <Icon
                                                name="play"
                                                size={25}
                                                stroke={2}
                                            />
                                        </a>
                                    </div>
                                ) : null}
                            </div>

                            <div className="story-full-content">
                                <div className="content-label">
                                    Full Story
                                </div>

                                <h3>
                                    {story.title ||
                                        'Untitled Story'}
                                </h3>

                                <p>
                                    {story.content ||
                                        'No story content available.'}
                                </p>

                                {mediaUrl ? (
                                    <div className="open-media-wrapper">
                                        <a
                                            href={mediaUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="story-btn story-btn-primary open-media-button"
                                        >
                                            <Icon
                                                name="play"
                                                size={15}
                                            />
                                            Open Media
                                        </a>
                                    </div>
                                ) : null}
                            </div>

                        </div>
                    </div>

                    {/* Comments */}
                    <div className="story-section-card">
                        <div className="story-section-header">
                            <div className="section-heading">
                                <div className="section-icon">
                                    <Icon
                                        name="message"
                                        size={17}
                                    />
                                </div>

                                <div>
                                    <h3>Story Comments</h3>

                                    <p>
                                        Reviews and feedback from
                                        visitors
                                    </p>
                                </div>
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
                                            key={comment.id}
                                        >
                                            <div className="comment-avatar">
                                                {name
                                                    .charAt(0)
                                                    .toUpperCase()}
                                            </div>

                                            <div className="comment-content">
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

                                                <div className="comment-stars">
                                                    {[1, 2, 3, 4, 5].map(
                                                        (star) => (
                                                            <span
                                                                key={star}
                                                                className={
                                                                    star <=
                                                                    rating
                                                                        ? 'comment-star filled'
                                                                        : 'comment-star'
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
                                    <div className="empty-comments-icon">
                                        <Icon
                                            name="message"
                                            size={22}
                                        />
                                    </div>

                                    <strong>
                                        No reviews yet
                                    </strong>

                                    <span>
                                        Be the first to add a review
                                        to this story.
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Update Status Modal */}
            {showStatusModal ? (
                <div
                    className="story-modal-backdrop"
                    onMouseDown={(event) => {
                        if (
                            event.target ===
                            event.currentTarget
                        ) {
                            setShowStatusModal(false);
                        }
                    }}
                >
                    <div className="story-modal">

                        <div className="story-modal-header">
                            <h3 className="story-modal-title">
                                <span className="modal-title-icon">
                                    <Icon
                                        name="refresh"
                                        size={19}
                                    />
                                </span>

                                Update Story Status
                            </h3>

                            <button
                                type="button"
                                className="modal-close"
                                onClick={() =>
                                    setShowStatusModal(false)
                                }
                            >
                                <Icon name="close" size={17} />
                            </button>
                        </div>

                        <form onSubmit={handleStatusSubmit}>
                            <div className="story-modal-body">
                                <div className="modal-field">
                                    <label className="modal-label">
                                        Select New Status
                                    </label>

                                    <select
                                        className="modal-select"
                                        value={statusData.status}
                                        onChange={(event) =>
                                            setStatusData(
                                                'status',
                                                event.target.value
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

                                    {statusErrors.status ? (
                                        <div className="form-error">
                                            {statusErrors.status}
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="story-modal-footer">
                                <button
                                    type="button"
                                    className="modal-cancel"
                                    onClick={() =>
                                        setShowStatusModal(false)
                                    }
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="modal-submit"
                                    disabled={updatingStatus}
                                >
                                    {updatingStatus
                                        ? 'Updating...'
                                        : 'Update Status'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}

            {/* Add Review Modal */}
            {showReviewModal ? (
                <div
                    className="story-modal-backdrop"
                    onMouseDown={(event) => {
                        if (
                            event.target ===
                            event.currentTarget
                        ) {
                            setShowReviewModal(false);
                        }
                    }}
                >
                    <div className="story-modal">

                        <div className="story-modal-header">
                            <h3 className="story-modal-title">
                                <span className="modal-title-icon">
                                    <Icon
                                        name="star"
                                        size={19}
                                    />
                                </span>

                                Add Review
                            </h3>

                            <button
                                type="button"
                                className="modal-close"
                                onClick={() =>
                                    setShowReviewModal(false)
                                }
                            >
                                <Icon name="close" size={17} />
                            </button>
                        </div>

                        <form onSubmit={handleReviewSubmit}>
                            <div className="story-modal-body">

                                <div className="modal-field">
                                    <label className="modal-label">
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        className="modal-input"
                                        placeholder="John Doe"
                                        value={reviewData.name}
                                        onChange={(event) =>
                                            setReviewData(
                                                'name',
                                                event.target.value
                                            )
                                        }
                                        required
                                    />

                                    {reviewErrors.name ? (
                                        <div className="form-error">
                                            {reviewErrors.name}
                                        </div>
                                    ) : null}
                                </div>

                                <div className="modal-field">
                                    <label className="modal-label">
                                        Your Email
                                    </label>

                                    <input
                                        type="email"
                                        className="modal-input"
                                        placeholder="john@example.com"
                                        value={reviewData.email}
                                        onChange={(event) =>
                                            setReviewData(
                                                'email',
                                                event.target.value
                                            )
                                        }
                                        required
                                    />

                                    {reviewErrors.email ? (
                                        <div className="form-error">
                                            {reviewErrors.email}
                                        </div>
                                    ) : null}
                                </div>

                                <div className="modal-field">
                                    <label className="modal-label">
                                        Rating
                                    </label>

                                    <select
                                        className="modal-select"
                                        value={reviewData.rating}
                                        onChange={(event) =>
                                            setReviewData(
                                                'rating',
                                                Number(
                                                    event.target
                                                        .value
                                                )
                                            )
                                        }
                                        required
                                    >
                                        <option value={5}>
                                            ★★★★★ — Excellent (5)
                                        </option>

                                        <option value={4}>
                                            ★★★★ — Good (4)
                                        </option>

                                        <option value={3}>
                                            ★★★ — Average (3)
                                        </option>

                                        <option value={2}>
                                            ★★ — Poor (2)
                                        </option>

                                        <option value={1}>
                                            ★ — Terrible (1)
                                        </option>
                                    </select>

                                    {reviewErrors.rating ? (
                                        <div className="form-error">
                                            {reviewErrors.rating}
                                        </div>
                                    ) : null}
                                </div>

                                <div className="modal-field">
                                    <label className="modal-label">
                                        Comment
                                    </label>

                                    <textarea
                                        className="modal-textarea"
                                        rows="4"
                                        placeholder="Share your thoughts..."
                                        value={reviewData.comment}
                                        onChange={(event) =>
                                            setReviewData(
                                                'comment',
                                                event.target.value
                                            )
                                        }
                                        required
                                    />

                                    {reviewErrors.comment ? (
                                        <div className="form-error">
                                            {reviewErrors.comment}
                                        </div>
                                    ) : null}
                                </div>

                            </div>

                            <div className="story-modal-footer">
                                <button
                                    type="button"
                                    className="modal-cancel"
                                    onClick={() =>
                                        setShowReviewModal(false)
                                    }
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="modal-submit"
                                    disabled={submittingReview}
                                >
                                    {submittingReview
                                        ? 'Submitting...'
                                        : 'Submit Review'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </AppLayout>
    );
}