import { Head, Link, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

const TABS = [
    { key: 'overview', label: 'Overview', icon: 'fa-circle-info' },
    { key: 'reviews', label: 'Reviews', icon: 'fa-star' },
    { key: 'details', label: 'Details', icon: 'fa-list' },
    { key: 'lessons', label: 'Lessons', icon: 'fa-graduation-cap' },
    { key: 'author', label: 'Author', icon: 'fa-user' },
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
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-course-show"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6,15,17,0.06);
                    }
                    [data-h-scope="talent-course-show"] .h-header-card {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background .15s ease;
                    }
                    [data-h-scope="talent-course-show"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-white);
                        border: 1px solid rgba(255,255,255,0.25);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-ghost:hover {
                        background: rgba(255,255,255,0.1);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-outline {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid rgba(6,15,17,0.15);
                    }
                    [data-h-scope="talent-course-show"] .h-btn-outline:hover {
                        background: rgba(6,15,17,0.04);
                    }
                    [data-h-scope="talent-course-show"] .h-tabs {
                        border-bottom: 1px solid rgba(6,15,17,0.08);
                    }
                    [data-h-scope="talent-course-show"] .h-tab {
                        background: transparent;
                        border: none;
                        padding: 10px 18px;
                        color: rgba(6,15,17,0.55);
                        font-weight: 600;
                        font-size: 0.9rem;
                        border-bottom: 2px solid transparent;
                        cursor: pointer;
                        white-space: nowrap;
                    }
                    [data-h-scope="talent-course-show"] .h-tab.active {
                        color: var(--h-ink);
                        border-bottom-color: var(--h-accent);
                    }
                    [data-h-scope="talent-course-show"] .h-tab:hover:not(.active) {
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-course-show"] .h-badge-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-course-show"] .h-badge-ink {
                        background: rgba(6,15,17,0.06);
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-course-show"] .h-badge-success {
                        background: rgba(72,213,151,0.15);
                        color: var(--h-accent-dark);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-course-show"] .h-media {
                        background: rgba(6,15,17,0.03);
                        aspect-ratio: 16/9;
                        object-fit: cover;
                    }
                    [data-h-scope="talent-course-show"] .h-lesson-row {
                        border: 1px solid rgba(6,15,17,0.06);
                        transition: box-shadow .15s ease;
                    }
                    [data-h-scope="talent-course-show"] .h-lesson-row:hover {
                        box-shadow: 0 4px 14px rgba(6,15,17,0.06);
                    }
                    [data-h-scope="talent-course-show"] .h-lesson-num {
                        background: rgba(72,213,151,0.15);
                        color: var(--h-accent-dark);
                        font-weight: 700;
                        width: 34px;
                        height: 34px;
                        flex-shrink: 0;
                    }
                    [data-h-scope="talent-course-show"] .h-star-filled { color: #f5b301; }
                    [data-h-scope="talent-course-show"] .h-star-empty { color: rgba(6,15,17,0.15); }
                    [data-h-scope="talent-course-show"] .form-control:focus,
                    [data-h-scope="talent-course-show"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72,213,151,0.25);
                    }
                `}</style>

                <div className="container-fluid px-4 py-4">

                    {/* Header */}
                    <div className="card h-header-card border-0 shadow-sm rounded-4 mb-4">
                        <div className="card-body p-4">
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                                <div>
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <span className="badge h-badge-accent rounded-pill px-3 py-2">
                                            {course.category?.name ?? 'Uncategorized'}
                                        </span>
                                        <span
                                            className="badge rounded-pill px-3 py-2"
                                            style={{
                                                background: course.status === 'published' ? 'rgba(72,213,151,0.2)' : 'rgba(245,179,1,0.2)',
                                                color: course.status === 'published' ? '#48d597' : '#f5b301',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {capitalize(course.status)}
                                        </span>
                                    </div>
                                    <h4 className="fw-bold mb-1">{course.title}</h4>
                                    <p className="mb-0" style={{ opacity: 0.7 }}>
                                        {course.lessons?.length ?? 0} lessons · {course.enrollments_count ?? 0} enrolled
                                        {avgRating && (
                                            <> · <i className="fas fa-star mx-1" style={{ color: '#f5b301' }}></i>{avgRating.toFixed(1)}</>
                                        )}
                                    </p>
                                </div>

                                <div className="d-flex flex-wrap gap-2">
                                    <Link
                                        href={route('talent.courses.edit', course.id)}
                                        className="btn h-btn-accent rounded-pill px-3 py-2"
                                    >
                                        <i className="fas fa-pen me-2"></i>Edit Course
                                    </Link>
                                    <button
                                        type="button"
                                        className="btn h-btn-ghost rounded-pill px-3 py-2"
                                        onClick={() => setAddLessonOpen(true)}
                                    >
                                        <i className="fas fa-plus me-2"></i>Add Lesson
                                    </button>
                                    <button
                                        type="button"
                                        className="btn h-btn-ghost rounded-pill px-3 py-2"
                                        onClick={() => setAddReviewOpen(true)}
                                    >
                                        <i className="fas fa-comment me-2"></i>Add Review
                                    </button>
                                    <Link
                                        href={route('talent.courses.index')}
                                        className="btn h-btn-ghost rounded-pill px-3 py-2"
                                    >
                                        <i className="fas fa-arrow-left me-2"></i>Back
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
                                <i className={`fas ${tab.icon} me-2`}></i>
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
                <div className="card h-card border-0 shadow-sm rounded-4 overflow-hidden">
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
                            <i className="fas fa-image fs-1" style={{ color: '#48d597', opacity: 0.4 }}></i>
                        </div>
                    )}
                </div>
            </div>

            <div className="col-lg-6">
                <div className="card h-card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-4">
                        <h5 className="fw-bold mb-3">{course.title}</h5>

                        <p className="text-secondary mb-4">{course.description}</p>

                        <div className="d-flex flex-wrap gap-3 mb-3">
                            <InfoChip icon="fa-signal" label={capitalize(course.level ?? 'Beginner')} />
                            <InfoChip icon="fa-tag" label={course.category?.name ?? 'Uncategorized'} />
                        </div>

                        <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                            {course.is_free ? (
                                <span className="badge h-badge-success rounded-pill px-3 py-2 fs-6">Free</span>
                            ) : (
                                <span className="fw-bold fs-4" style={{ color: '#060f11' }}>
                                    ${Number(course.price ?? 0).toFixed(2)}
                                </span>
                            )}
                            <span className="text-secondary small">
                                <i className="fas fa-users me-1"></i>{course.enrollments_count ?? 0} enrolled
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
            <i className={`fas ${icon} me-2`}></i>{label}
        </span>
    );
}

/* ---------- Reviews tab ---------- */

function ReviewsTab({ feedback }) {
    return (
        <div className="card h-card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
                <h6 className="fw-bold mb-4">Student Feedback</h6>

                {feedback.length === 0 ? (
                    <div className="text-center py-5 text-secondary">
                        <i className="fas fa-comment-slash fs-2 mb-3 d-block opacity-25"></i>
                        <p className="mb-0">No feedback available yet.</p>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-3">
                        {feedback.map((item) => (
                            <div key={item.id} className="d-flex gap-3 pb-3 border-bottom">
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                    style={{ width: 40, height: 40, background: 'rgba(72,213,151,0.15)' }}
                                >
                                    <i className="fas fa-user" style={{ color: '#2fb87c' }}></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <strong>{item.name}</strong>
                                        <small className="text-secondary">{item.created_at_human ?? ''}</small>
                                    </div>
                                    <p className="mb-1 text-secondary">{item.comment}</p>
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
        <div>
            {[1, 2, 3, 4, 5].map((n) => (
                <i
                    key={n}
                    className={`fas fa-star ${n <= value ? 'h-star-filled' : 'h-star-empty'}`}
                    style={{ fontSize: 13, marginRight: 2 }}
                ></i>
            ))}
        </div>
    );
}

/* ---------- Details tab ---------- */

function DetailsTab({ course }) {
    return (
        <div className="card h-card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
                <h6 className="fw-bold mb-3">Course Details</h6>
                <p className="text-secondary mb-4">{course.description}</p>

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
        <div className="card h-card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
                <h6 className="fw-bold mb-4">Course Lessons</h6>

                {lessons.length === 0 ? (
                    <div className="text-center py-5 text-secondary">
                        <i className="fas fa-graduation-cap fs-2 mb-3 d-block opacity-25"></i>
                        <p className="mb-0">No lessons available for this course.</p>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-2">
                        {lessons.map((lesson, i) => (
                            <div
                                key={lesson.id}
                                className="h-lesson-row rounded-4 p-3 d-flex align-items-center gap-3"
                            >
                                <div className="h-lesson-num rounded-3 d-flex align-items-center justify-content-center">
                                    {i + 1}
                                </div>

                                <div className="flex-grow-1">
                                    <div className="fw-semibold">{lesson.title}</div>
                                    {lesson.content && (
                                        <div className="small text-secondary">{truncate(lesson.content, 90)}</div>
                                    )}
                                </div>

                                {course.is_free ? (
                                    
                                    <a    href={lesson.video_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm h-btn-outline rounded-pill px-3"
                                    >
                                        <i className="fas fa-play me-1"></i> Watch
                                    </a>
                                ) : (
                                    <span className="badge h-badge-ink rounded-pill px-3 py-2">Premium</span>
                                )}

                                <div className="d-flex gap-1">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-light rounded-circle"
                                        style={{ width: 32, height: 32 }}
                                        onClick={() => onEdit(lesson)}
                                    >
                                        <i className="fas fa-pen small"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-light rounded-circle text-danger"
                                        style={{ width: 32, height: 32 }}
                                        onClick={() => onDelete(lesson)}
                                    >
                                        <i className="fas fa-trash small"></i>
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
        <div className="card h-card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
                <h6 className="fw-bold mb-4">Course Author</h6>

                <div className="d-flex align-items-center gap-3 mb-4">
                    <img
                        src={talent?.image ? `/${talent.image}` : '/img/faces/face10.jpg'}
                        alt={talent?.name}
                        className="rounded-circle"
                        style={{ width: 64, height: 64, objectFit: 'cover', border: '2px solid #48d597' }}
                    />
                    <div>
                        <div className="fw-bold">{talent?.name}</div>
                        <div className="small text-secondary">{talent?.email}</div>
                    </div>
                </div>

                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="small h-badge-ink rounded-3 p-3">
                            <div className="text-secondary small mb-1">Email</div>
                            <div className="fw-semibold">{talent?.email || '—'}</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="small h-badge-ink rounded-3 p-3">
                            <div className="text-secondary small mb-1">Phone</div>
                            <div className="fw-semibold">{talent?.phone || '—'}</div>
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
                <button type="button" className="btn h-btn-outline rounded-pill px-4" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit" className="btn h-btn-accent rounded-pill px-4" disabled={processing}>
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
            <p className="text-secondary mb-4">
                Are you sure you want to delete <strong>{lesson.title}</strong>? This action cannot be undone.
            </p>
            <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn h-btn-outline rounded-pill px-4" onClick={onCancel}>
                    Cancel
                </button>
                <button type="button" className="btn btn-danger rounded-pill px-4" onClick={confirmDelete}>
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
                    <button type="button" className="btn h-btn-outline rounded-pill px-4" onClick={onClose}>
                        Cancel
                    </button>
                    <button type="submit" className="btn h-btn-accent rounded-pill px-4" disabled={processing}>
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
                            <h5 className="modal-title fw-bold" style={{ color: '#060f11' }}>{title}</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
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