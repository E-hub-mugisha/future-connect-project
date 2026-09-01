import { Head, Link, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

/* ------------------------------------------------------------------ */
/*  Inline SVG icon set (stroke-based, Heroicons / Lucide style)       */
/* ------------------------------------------------------------------ */

function Icon({ name, className = '', size = 18, strokeWidth = 1.75 }) {
    const common = {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className,
        'aria-hidden': true,
    };

    switch (name) {
        case 'info':
            return (<svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8h.01" /></svg>);
        case 'star':
            return (<svg {...common}><path d="M12 3.5l2.7 5.47 6.04.88-4.37 4.26 1.03 6.02L12 17.6l-5.4 2.84 1.03-6.02L3.26 9.85l6.04-.88L12 3.5z" /></svg>);
        case 'list':
            return (<svg {...common}><path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" /><circle cx="3.5" cy="6" r="1" /><circle cx="3.5" cy="12" r="1" /><circle cx="3.5" cy="18" r="1" /></svg>);
        case 'cap':
            return (<svg {...common}><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg>);
        case 'user':
            return (<svg {...common}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>);
        case 'pen':
            return (<svg {...common}><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>);
        case 'plus':
            return (<svg {...common}><path d="M12 5v14" /><path d="M5 12h14" /></svg>);
        case 'comment':
            return (<svg {...common}><path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.5 8.5 0 1 1 21 11.5z" /></svg>);
        case 'arrow-left':
            return (<svg {...common}><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>);
        case 'signal':
            return (<svg {...common}><path d="M3 20h2v-4H3v4z" /><path d="M8 20h2v-9H8v9z" /><path d="M13 20h2v-13h-2v13z" /><path d="M18 20h2V4h-2v16z" /></svg>);
        case 'tag':
            return (<svg {...common}><path d="M20 13.5L13.5 20a2 2 0 0 1-2.83 0L4 13.41a2 2 0 0 1-.59-1.42V5a1 1 0 0 1 1-1h6.99a2 2 0 0 1 1.42.59L20 11.5a2 2 0 0 1 0 2.83z" /><circle cx="8" cy="8" r="1.2" /></svg>);
        case 'image':
            return (<svg {...common}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>);
        case 'users':
            return (<svg {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
        case 'comment-slash':
            return (<svg {...common}><path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.5 8.5 0 1 1 21 11.5z" /><path d="M3 3l18 18" /></svg>);
        case 'play':
            return (<svg {...common}><polygon points="6 4 20 12 6 20 6 4" /></svg>);
        case 'trash':
            return (<svg {...common}><path d="M3 6h18" /><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /></svg>);
        case 'x':
            return (<svg {...common}><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>);
        case 'mail':
            return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>);
        case 'phone':
            return (<svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>);
        case 'check':
            return (<svg {...common}><path d="M20 6L9 17l-5-5" /></svg>);
        default:
            return null;
    }
}

/* Filled star used by rating widgets */
function StarIcon({ filled = true, size = 14 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24"
            fill={filled ? 'currentColor' : 'none'}
            stroke="currentColor" strokeWidth={filled ? 0 : 1.5}
            strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 3.5l2.7 5.47 6.04.88-4.37 4.26 1.03 6.02L12 17.6l-5.4 2.84 1.03-6.02L3.26 9.85l6.04-.88L12 3.5z" />
        </svg>
    );
}

const TABS = [
    { key: 'overview', label: 'Overview', icon: 'info' },
    { key: 'reviews', label: 'Reviews', icon: 'star' },
    { key: 'details', label: 'Details', icon: 'list' },
    { key: 'lessons', label: 'Lessons', icon: 'cap' },
    { key: 'author', label: 'Author', icon: 'user' },
];

export default function CourseShow({ course }) {
    const [activeTab, setActiveTab] = useState('overview');
    const [addLessonOpen, setAddLessonOpen] = useState(false);
    const [editLesson, setEditLesson] = useState(null);
    const [deleteLesson, setDeleteLesson] = useState(null);
    const [addReviewOpen, setAddReviewOpen] = useState(false);

    const firstLesson = course.lessons?.[0];
    const avgRating = course.feedback?.length
        ? course.feedback.reduce((s, f) => s + f.rating, 0) / course.feedback.length
        : null;

    return (
        <AppLayout>
            <Head title={course.title} />

            <div data-h-scope="talent-course-show">
                <style>{`
                    [data-h-scope="talent-course-show"] {
                        --h-accent: #4f46e5;
                        --h-accent-dark: #4338ca;
                        --h-accent-soft: #eef2ff;
                        --h-ink: #0f172a;
                        --h-ink-soft: #475569;
                        --h-muted: #64748b;
                        --h-white: #F5f5f7;
                        --h-bg: #f7f8fb;
                        --h-border: #e6e8ee;
                        --h-border-soft: #eef0f4;
                        --h-success: #10b981;
                        --h-success-soft: #ecfdf5;
                        --h-warning: #f59e0b;
                        --h-warning-soft: #fffbeb;
                        --h-danger: #ef4444;
                        --h-danger-soft: #fef2f2;
                        --h-star: #f59e0b;
                        --h-shadow-sm: 0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06);
                        --h-shadow-md: 0 4px 12px rgba(15,23,42,0.06), 0 2px 4px rgba(15,23,42,0.04);
                        --h-shadow-lg: 0 10px 30px rgba(15,23,42,0.08), 0 4px 8px rgba(15,23,42,0.04);
                        background-color: var(--h-bg);
                        color: var(--h-ink);
                        font-feature-settings: "cv11", "ss01";
                    }
                    [data-h-scope="talent-course-show"] .h-card {
                        background: var(--h-white);
                        border: 1px solid var(--h-border);
                        box-shadow: var(--h-shadow-sm);
                    }
                    [data-h-scope="talent-course-show"] .h-header-card {
                        background: linear-gradient(135deg, #F5f5f7 0%, #fafbff 100%);
                        border: 1px solid var(--h-border);
                        color: var(--h-ink);
                        position: relative;
                        overflow: hidden;
                        box-shadow: var(--h-shadow-md);
                    }
                    [data-h-scope="talent-course-show"] .h-header-card::before {
                        content: "";
                        position: absolute;
                        inset: 0 auto 0 0;
                        width: 4px;
                        background: linear-gradient(180deg, var(--h-accent) 0%, #818cf8 100%);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-accent {
                        background: var(--h-accent);
                        color: #F5f5f7;
                        border: 1px solid var(--h-accent);
                        font-weight: 600;
                        transition: all .18s ease;
                        display: inline-flex;
                        align-items: center;
                        gap: .5rem;
                        line-height: 1;
                    }
                    [data-h-scope="talent-course-show"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        border-color: var(--h-accent-dark);
                        color: #F5f5f7;
                        box-shadow: 0 4px 12px rgba(79,70,229,0.25);
                        transform: translateY(-1px);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-ghost {
                        background: var(--h-white);
                        color: var(--h-ink);
                        border: 1px solid var(--h-border);
                        font-weight: 600;
                        transition: all .18s ease;
                        display: inline-flex;
                        align-items: center;
                        gap: .5rem;
                        line-height: 1;
                    }
                    [data-h-scope="talent-course-show"] .h-btn-ghost:hover {
                        background: var(--h-accent-soft);
                        border-color: #c7d2fe;
                        color: var(--h-accent-dark);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-outline {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid var(--h-border);
                        font-weight: 600;
                        transition: all .18s ease;
                        display: inline-flex;
                        align-items: center;
                        gap: .5rem;
                        line-height: 1;
                    }
                    [data-h-scope="talent-course-show"] .h-btn-outline:hover {
                        background: #f8fafc;
                        border-color: #cbd5e1;
                    }
                    [data-h-scope="talent-course-show"] .h-btn-icon {
                        width: 32px;
                        height: 32px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        background: #f8fafc;
                        border: 1px solid var(--h-border);
                        color: var(--h-ink-soft);
                        border-radius: 8px;
                        transition: all .18s ease;
                        padding: 0;
                    }
                    [data-h-scope="talent-course-show"] .h-btn-icon:hover {
                        background: var(--h-white);
                        border-color: #cbd5e1;
                        color: var(--h-ink);
                        box-shadow: var(--h-shadow-sm);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-icon.danger:hover {
                        background: var(--h-danger-soft);
                        border-color: #fecaca;
                        color: var(--h-danger);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-danger {
                        background: var(--h-danger);
                        color: #F5f5f7;
                        border: 1px solid var(--h-danger);
                        font-weight: 600;
                        transition: all .18s ease;
                    }
                    [data-h-scope="talent-course-show"] .h-btn-danger:hover {
                        background: #dc2626;
                        border-color: #dc2626;
                        box-shadow: 0 4px 12px rgba(239,68,68,0.25);
                    }
                    [data-h-scope="talent-course-show"] .h-tabs {
                        border-bottom: 1px solid var(--h-border);
                    }
                    [data-h-scope="talent-course-show"] .h-tab {
                        background: transparent;
                        border: none;
                        padding: 12px 18px;
                        color: var(--h-muted);
                        font-weight: 600;
                        font-size: 0.9rem;
                        border-bottom: 2px solid transparent;
                        cursor: pointer;
                        white-space: nowrap;
                        display: inline-flex;
                        align-items: center;
                        gap: .5rem;
                        transition: color .15s ease, border-color .15s ease, background .15s ease;
                        border-radius: 8px 8px 0 0;
                    }
                    [data-h-scope="talent-course-show"] .h-tab.active {
                        color: var(--h-accent);
                        border-bottom-color: var(--h-accent);
                    }
                    [data-h-scope="talent-course-show"] .h-tab:hover:not(.active) {
                        color: var(--h-ink);
                        background: rgba(79,70,229,0.04);
                    }
                    [data-h-scope="talent-course-show"] .h-badge-accent {
                        background: var(--h-accent-soft);
                        color: var(--h-accent-dark);
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                        gap: .35rem;
                    }
                    [data-h-scope="talent-course-show"] .h-badge-ink {
                        background: #f1f5f9;
                        color: var(--h-ink-soft);
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                        gap: .35rem;
                    }
                    [data-h-scope="talent-course-show"] .h-badge-success {
                        background: var(--h-success-soft);
                        color: #047857;
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                        gap: .35rem;
                    }
                    [data-h-scope="talent-course-show"] .h-badge-warning {
                        background: var(--h-warning-soft);
                        color: #b45309;
                        font-weight: 600;
                        display: inline-flex;
                        align-items: center;
                        gap: .35rem;
                    }
                    [data-h-scope="talent-course-show"] .h-media {
                        background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
                        aspect-ratio: 16/9;
                        object-fit: cover;
                    }
                    [data-h-scope="talent-course-show"] .h-lesson-row {
                        border: 1px solid var(--h-border);
                        transition: all .18s ease;
                        background: var(--h-white);
                    }
                    [data-h-scope="talent-course-show"] .h-lesson-row:hover {
                        border-color: #c7d2fe;
                        box-shadow: var(--h-shadow-md);
                        transform: translateY(-1px);
                    }
                    [data-h-scope="talent-course-show"] .h-lesson-num {
                        background: var(--h-accent-soft);
                        color: var(--h-accent-dark);
                        font-weight: 700;
                        width: 36px;
                        height: 36px;
                        flex-shrink: 0;
                    }
                    [data-h-scope="talent-course-show"] .h-stat-tile {
                        background: #f8fafc;
                        border: 1px solid var(--h-border-soft);
                        border-radius: 12px;
                    }
                    [data-h-scope="talent-course-show"] .h-star-filled { color: var(--h-star); }
                    [data-h-scope="talent-course-show"] .h-star-empty { color: #d1d5db; }
                    [data-h-scope="talent-course-show"] .form-control,
                    [data-h-scope="talent-course-show"] .form-select {
                        border-color: var(--h-border);
                        background-color: #F5f5f7;
                        color: var(--h-ink);
                        transition: border-color .15s ease, box-shadow .15s ease;
                    }
                    [data-h-scope="talent-course-show"] .form-control:focus,
                    [data-h-scope="talent-course-show"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 3px rgba(79,70,229,0.15);
                    }
                    [data-h-scope="talent-course-show"] .modal-content {
                        background: var(--h-white);
                        border: 1px solid var(--h-border);
                        box-shadow: var(--h-shadow-lg);
                    }
                `}</style>

                <div className="container-fluid px-4 py-4">

                    {/* Header */}
                    <div className="card h-header-card rounded-4 mb-4">
                        <div className="card-body p-4 ps-5">
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                                <div className="min-w-0">
                                    <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                                        <span className="badge h-badge-accent rounded-pill px-3 py-2">
                                            <Icon name="tag" size={12} />
                                            {course.category?.name ?? 'Uncategorized'}
                                        </span>
                                        <span className={`badge rounded-pill px-3 py-2 ${course.status === 'published' ? 'h-badge-success' : 'h-badge-warning'}`}>
                                            {course.status === 'published'
                                                ? <Icon name="check" size={12} />
                                                : <Icon name="info" size={12} />}
                                            {capitalize(course.status)}
                                        </span>
                                    </div>
                                    <h4 className="fw-bold mb-1 text-truncate" style={{ maxWidth: 640 }}>{course.title}</h4>
                                    <p className="mb-0 d-flex align-items-center gap-3 flex-wrap" style={{ color: 'var(--h-muted)', fontSize: '.9rem' }}>
                                        <span className="d-inline-flex align-items-center gap-1">
                                            <Icon name="cap" size={14} />
                                            {course.lessons?.length ?? 0} lessons
                                        </span>
                                        <span className="d-inline-flex align-items-center gap-1">
                                            <Icon name="users" size={14} />
                                            {course.enrollments_count ?? 0} enrolled
                                        </span>
                                        {avgRating && (
                                            <span className="d-inline-flex align-items-center gap-1">
                                                <StarIcon filled size={14} />
                                                {avgRating.toFixed(1)}
                                            </span>
                                        )}
                                    </p>
                                </div>

                                <div className="d-flex flex-wrap gap-2">
                                    <Link
                                        href={route('talent.courses.edit', course.id)}
                                        className="btn h-btn-accent rounded-3 px-3 py-2"
                                    >
                                        <Icon name="pen" size={15} />
                                        Edit Course
                                    </Link>
                                    <button
                                        type="button"
                                        className="btn h-btn-ghost rounded-3 px-3 py-2"
                                        onClick={() => setAddLessonOpen(true)}
                                    >
                                        <Icon name="plus" size={15} />
                                        Add Lesson
                                    </button>
                                    <button
                                        type="button"
                                        className="btn h-btn-ghost rounded-3 px-3 py-2"
                                        onClick={() => setAddReviewOpen(true)}
                                    >
                                        <Icon name="comment" size={15} />
                                        Add Review
                                    </button>
                                    <Link
                                        href={route('talent.courses.index')}
                                        className="btn h-btn-outline rounded-3 px-3 py-2"
                                    >
                                        <Icon name="arrow-left" size={15} />
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="h-tabs d-flex gap-1 mb-4 overflow-auto">
                        {TABS.map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                className={`h-tab ${activeTab === tab.key ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                <Icon name={tab.icon} size={15} />
                                {tab.label}
                                {tab.key === 'lessons' && ` (${course.lessons?.length ?? 0})`}
                                {tab.key === 'reviews' && ` (${course.feedback?.length ?? 0})`}
                            </button>
                        ))}
                    </div>

                    {/* Tab content */}
                    {activeTab === 'overview' && (
                        <OverviewTab course={course} firstLesson={firstLesson} />
                    )}

                    {activeTab === 'reviews' && (
                        <ReviewsTab feedback={course.feedback ?? []} />
                    )}

                    {activeTab === 'details' && <DetailsTab course={course} />}

                    {activeTab === 'lessons' && (
                        <LessonsTab
                            course={course}
                            onEdit={setEditLesson}
                            onDelete={setDeleteLesson}
                        />
                    )}

                    {activeTab === 'author' && <AuthorTab talent={course.talent} />}
                </div>
            </div>

            <AddLessonModal
                show={addLessonOpen}
                courseId={course.id}
                onClose={() => setAddLessonOpen(false)}
            />

            <EditLessonModal
                lesson={editLesson}
                onClose={() => setEditLesson(null)}
            />

            <DeleteLessonModal
                lesson={deleteLesson}
                onCancel={() => setDeleteLesson(null)}
            />

            <AddReviewModal
                show={addReviewOpen}
                courseId={course.id}
                onClose={() => setAddReviewOpen(false)}
            />
        </AppLayout>
    );
}

/* ---------- Overview tab ---------- */

function OverviewTab({ course, firstLesson }) {
    return (
        <div className="row g-4">
            <div className="col-lg-6">
                <div className="card h-card rounded-4 overflow-hidden">
                    {course.is_free && firstLesson?.video_url ? (
                        <video className="w-100 h-media" controls>
                            <source src={firstLesson.video_url} type="video/mp4" />
                        </video>
                    ) : course.video ? (
                        <video
                            className="w-100 h-media"
                            controls
                            poster={course.thumbnail ? `/${course.thumbnail}` : undefined}
                        >
                            <source src={course.video} type="video/mp4" />
                        </video>
                    ) : course.thumbnail ? (
                        <img src={`/${course.thumbnail}`} alt={course.title} className="w-100 h-media" />
                    ) : (
                        <div className="w-100 h-media d-flex align-items-center justify-content-center">
                            <Icon name="image" size={56} className="text-secondary" />
                        </div>
                    )}
                </div>
            </div>

            <div className="col-lg-6">
                <div className="card h-card rounded-4 h-100">
                    <div className="card-body p-4">
                        <h5 className="fw-bold mb-3">{course.title}</h5>

                        <p className="mb-4" style={{ color: 'var(--h-ink-soft)', lineHeight: 1.6 }}>{course.description}</p>

                        <div className="d-flex flex-wrap gap-2 mb-4">
                            <InfoChip icon="signal" label={capitalize(course.level ?? 'Beginner')} />
                            <InfoChip icon="tag" label={course.category?.name ?? 'Uncategorized'} />
                        </div>

                        <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                            {course.is_free ? (
                                <span className="badge h-badge-success rounded-pill px-3 py-2 fs-6">
                                    <Icon name="check" size={14} />
                                    Free
                                </span>
                            ) : (
                                <span className="fw-bold fs-4" style={{ color: 'var(--h-ink)' }}>
                                    ${Number(course.price ?? 0).toFixed(2)}
                                </span>
                            )}
                            <span className="d-inline-flex align-items-center gap-1 small" style={{ color: 'var(--h-muted)' }}>
                                <Icon name="users" size={14} />
                                {course.enrollments_count ?? 0} enrolled
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoChip({ icon, label }) {
    return (
        <span className="badge h-badge-ink rounded-pill px-3 py-2">
            <Icon name={icon} size={13} />
            {label}
        </span>
    );
}

/* ---------- Reviews tab ---------- */

function ReviewsTab({ feedback }) {
    return (
        <div className="card h-card rounded-4">
            <div className="card-body p-4">
                <h6 className="fw-bold mb-4">Student Feedback</h6>

                {feedback.length === 0 ? (
                    <div className="text-center py-5" style={{ color: 'var(--h-muted)' }}>
                        <div className="d-inline-flex align-items-center justify-content-center mb-3"
                            style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--h-accent-soft)', color: 'var(--h-accent)' }}>
                            <Icon name="comment-slash" size={28} />
                        </div>
                        <p className="mb-0">No feedback available yet.</p>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-3">
                        {feedback.map((item) => (
                            <div key={item.id} className="d-flex gap-3 pb-3 border-bottom">
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                    style={{ width: 40, height: 40, background: 'var(--h-accent-soft)', color: 'var(--h-accent-dark)' }}
                                >
                                    <Icon name="user" size={18} />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <strong style={{ color: 'var(--h-ink)' }}>{item.name}</strong>
                                        <small style={{ color: 'var(--h-muted)' }}>{item.created_at_human ?? ''}</small>
                                    </div>
                                    <p className="mb-1" style={{ color: 'var(--h-ink-soft)' }}>{item.comment}</p>
                                    <Stars value={item.rating} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function Stars({ value }) {
    return (
        <div className="d-inline-flex align-items-center gap-1" style={{ color: 'var(--h-star)' }}>
            {[1, 2, 3, 4, 5].map((n) => (
                <StarIcon key={n} filled={n <= value} size={14} />
            ))}
        </div>
    );
}

/* ---------- Details tab ---------- */

function DetailsTab({ course }) {
    return (
        <div className="card h-card rounded-4">
            <div className="card-body p-4">
                <h6 className="fw-bold mb-3">Course Details</h6>
                <p className="mb-4" style={{ color: 'var(--h-ink-soft)', lineHeight: 1.6 }}>{course.description}</p>

                <div className="d-flex flex-wrap gap-2">
                    <span className="badge h-badge-ink rounded-pill px-3 py-2">
                        Status: {capitalize(course.status)}
                    </span>
                    <span className="badge h-badge-ink rounded-pill px-3 py-2">
                        Level: {capitalize(course.level ?? 'Beginner')}
                    </span>
                    <span className="badge h-badge-ink rounded-pill px-3 py-2">
                        Created: {course.created_at_human ?? '—'}
                    </span>
                    <span className="badge h-badge-ink rounded-pill px-3 py-2">
                        Slug: {course.slug}
                    </span>
                </div>
            </div>
        </div>
    );
}

/* ---------- Lessons tab ---------- */

function LessonsTab({ course, onEdit, onDelete }) {
    const lessons = course.lessons ?? [];

    return (
        <div className="card h-card rounded-4">
            <div className="card-body p-4">
                <h6 className="fw-bold mb-4">Course Lessons</h6>

                {lessons.length === 0 ? (
                    <div className="text-center py-5" style={{ color: 'var(--h-muted)' }}>
                        <div className="d-inline-flex align-items-center justify-content-center mb-3"
                            style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--h-accent-soft)', color: 'var(--h-accent)' }}>
                            <Icon name="cap" size={28} />
                        </div>
                        <p className="mb-0">No lessons available for this course.</p>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-2">
                        {lessons.map((lesson, i) => (
                            <div
                                key={lesson.id}
                                className="h-lesson-row rounded-3 p-3 d-flex align-items-center gap-3"
                            >
                                <div className="h-lesson-num rounded-3 d-flex align-items-center justify-content-center">
                                    {i + 1}
                                </div>

                                <div className="flex-grow-1 min-w-0">
                                    <div className="fw-semibold text-truncate" style={{ color: 'var(--h-ink)' }}>{lesson.title}</div>
                                    {lesson.content && (
                                        <div className="small text-truncate" style={{ color: 'var(--h-muted)' }}>
                                            {truncate(lesson.content, 90)}
                                        </div>
                                    )}
                                </div>

                                {course.is_free ? (
                                    <a
                                        href={lesson.video_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm h-btn-outline rounded-3 px-3"
                                    >
                                        <Icon name="play" size={13} />
                                        Watch
                                    </a>
                                ) : (
                                    <span className="badge h-badge-ink rounded-pill px-3 py-2">Premium</span>
                                )}

                                <div className="d-flex gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-sm h-btn-icon"
                                        onClick={() => onEdit(lesson)}
                                        aria-label="Edit lesson"
                                    >
                                        <Icon name="pen" size={14} />
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm h-btn-icon danger"
                                        onClick={() => onDelete(lesson)}
                                        aria-label="Delete lesson"
                                    >
                                        <Icon name="trash" size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ---------- Author tab ---------- */

function AuthorTab({ talent }) {
    return (
        <div className="card h-card rounded-4">
            <div className="card-body p-4">
                <h6 className="fw-bold mb-4">Course Author</h6>

                <div className="d-flex align-items-center gap-3 mb-4">
                    <img
                        src={talent?.image ? `/${talent.image}` : '/img/faces/face10.jpg'}
                        alt={talent?.name}
                        className="rounded-circle"
                        style={{ width: 64, height: 64, objectFit: 'cover', border: '2px solid var(--h-accent)' }}
                    />
                    <div>
                        <div className="fw-bold" style={{ color: 'var(--h-ink)' }}>{talent?.name}</div>
                        <div className="small" style={{ color: 'var(--h-muted)' }}>{talent?.email}</div>
                    </div>
                </div>

                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="h-stat-tile p-3">
                            <div className="small mb-1 d-flex align-items-center gap-1" style={{ color: 'var(--h-muted)' }}>
                                <Icon name="mail" size={13} />
                                Email
                            </div>
                            <div className="fw-semibold text-truncate" style={{ color: 'var(--h-ink)' }}>{talent?.email || '—'}</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-stat-tile p-3">
                            <div className="small mb-1 d-flex align-items-center gap-1" style={{ color: 'var(--h-muted)' }}>
                                <Icon name="phone" size={13} />
                                Phone
                            </div>
                            <div className="fw-semibold" style={{ color: 'var(--h-ink)' }}>{talent?.phone || '—'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- Add Lesson modal ---------- */

function AddLessonModal({ show, courseId, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        course_id: courseId,
        title: '',
        content: '',
        video_url: '',
        order: '',
    });

    if (!show) return null;

    function submit(e) {
        e.preventDefault();
        post(route('talent.courses.lessons.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    }

    return (
        <ModalShell title="Add Lesson" onClose={onClose}>
            <LessonForm data={data} setData={setData} errors={errors} onSubmit={submit} onCancel={onClose} processing={processing} submitLabel="Save Lesson" />
        </ModalShell>
    );
}

/* ---------- Edit Lesson modal ---------- */

function EditLessonModal({ lesson, onClose }) {
    const { data, setData, put, processing, errors } = useForm({
        title: lesson?.title ?? '',
        content: lesson?.content ?? '',
        video_url: lesson?.video_url ?? '',
        order: lesson?.order ?? '',
    });

    if (!lesson) return null;

    function submit(e) {
        e.preventDefault();
        put(route('talent.courses.lessons.update', lesson.id), {
            preserveScroll: true,
            onSuccess: onClose,
        });
    }

    return (
        <ModalShell title="Edit Lesson" onClose={onClose}>
            <LessonForm data={data} setData={setData} errors={errors} onSubmit={submit} onCancel={onClose} processing={processing} submitLabel="Update Lesson" />
        </ModalShell>
    );
}

function LessonForm({ data, setData, errors, onSubmit, onCancel, processing, submitLabel }) {
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label small fw-semibold">Lesson Title</label>
                <input
                    type="text"
                    className={`form-control rounded-3 ${errors.title ? 'is-invalid' : ''}`}
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label small fw-semibold">Lesson Description</label>
                <textarea
                    rows={3}
                    className={`form-control rounded-3 ${errors.content ? 'is-invalid' : ''}`}
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
                />
                {errors.content && <div className="invalid-feedback">{errors.content}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label small fw-semibold">Lesson Video Link</label>
                <input
                    type="text"
                    placeholder="https://..."
                    className={`form-control rounded-3 ${errors.video_url ? 'is-invalid' : ''}`}
                    value={data.video_url}
                    onChange={(e) => setData('video_url', e.target.value)}
                />
                {errors.video_url && <div className="invalid-feedback">{errors.video_url}</div>}
            </div>

            <div className="mb-4">
                <label className="form-label small fw-semibold">Lesson Order</label>
                <input
                    type="number"
                    min="1"
                    className={`form-control rounded-3 ${errors.order ? 'is-invalid' : ''}`}
                    value={data.order}
                    onChange={(e) => setData('order', e.target.value)}
                />
                {errors.order && <div className="invalid-feedback">{errors.order}</div>}
            </div>

            <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn h-btn-outline rounded-3 px-4" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit" className="btn h-btn-accent rounded-3 px-4" disabled={processing}>
                    {processing ? 'Saving...' : submitLabel}
                </button>
            </div>
        </form>
    );
}

/* ---------- Delete Lesson modal ---------- */

function DeleteLessonModal({ lesson, onCancel }) {
    if (!lesson) return null;

    function confirmDelete() {
        router.delete(route('talent.courses.lessons.destroy', lesson.id), {
            preserveScroll: true,
            onSuccess: onCancel,
        });
    }

    return (
        <ModalShell title="Delete Lesson" onClose={onCancel} size="sm">
            <p className="mb-4" style={{ color: 'var(--h-ink-soft)' }}>
                Are you sure you want to delete <strong>{lesson.title}</strong>? This action cannot be undone.
            </p>
            <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn h-btn-outline rounded-3 px-4" onClick={onCancel}>
                    Cancel
                </button>
                <button type="button" className="btn h-btn-danger rounded-3 px-4" onClick={confirmDelete}>
                    Delete
                </button>
            </div>
        </ModalShell>
    );
}

/* ---------- Add Review modal ---------- */

function AddReviewModal({ show, courseId, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        course_id: courseId,
        rating: 5,
        comment: '',
    });

    if (!show) return null;

    function submit(e) {
        e.preventDefault();
        post(route('admin.courses.feedback.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    }

    return (
        <ModalShell title="Add Review" onClose={onClose}>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label small fw-semibold">Rating (1–5)</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        className={`form-control rounded-3 ${errors.rating ? 'is-invalid' : ''}`}
                        value={data.rating}
                        onChange={(e) => setData('rating', e.target.value)}
                    />
                    {errors.rating && <div className="invalid-feedback">{errors.rating}</div>}
                </div>

                <div className="mb-4">
                    <label className="form-label small fw-semibold">Comment</label>
                    <textarea
                        rows={3}
                        className={`form-control rounded-3 ${errors.comment ? 'is-invalid' : ''}`}
                        value={data.comment}
                        onChange={(e) => setData('comment', e.target.value)}
                    />
                    {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
                </div>

                <div className="d-flex justify-content-end gap-2">
                    <button type="button" className="btn h-btn-outline rounded-3 px-4" onClick={onClose}>
                        Cancel
                    </button>
                    <button type="submit" className="btn h-btn-accent rounded-3 px-4" disabled={processing}>
                        {processing ? 'Submitting...' : 'Submit Review'}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* ---------- shared modal shell ---------- */

function ModalShell({ title, onClose, size, children }) {
    const sizeClass = size === 'sm' ? 'modal-sm' : '';

    return (
        <div data-h-scope="talent-course-show">
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={onClose}>
                <div
                    className={`modal-dialog modal-dialog-centered ${sizeClass}`}
                    role="document"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-content rounded-4 border-0 shadow">
                        <div className="modal-header border-0 pb-0">
                            <h5 className="modal-title fw-bold" style={{ color: 'var(--h-ink)' }}>{title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={onClose}
                            />
                        </div>
                        <div className="modal-body p-4">{children}</div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" onClick={onClose}></div>
        </div>
    );
}

/* ---------- helpers ---------- */

function truncate(text, length) {
    if (!text) return '';
    return text.length > length ? text.slice(0, length) + '…' : text;
}

function capitalize(value) {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
}
