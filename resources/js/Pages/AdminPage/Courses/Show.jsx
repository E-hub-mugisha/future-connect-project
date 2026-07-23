import React from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Show({ course }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        course_id: course.id,
        title: '',
        content: '',
        video_url: '',
        order: (course.lessons?.length ?? 0) + 1,
    });

    const sortedLessons = [...(course.lessons ?? [])].sort((a, b) => a.order - b.order);

    const avgRating = course.feedback_avg_rating != null
        ? Number(course.feedback_avg_rating)
        : (course.feedback && course.feedback.length
            ? course.feedback.reduce((sum, f) => sum + f.rating, 0) / course.feedback.length
            : 0);

    const enrolledCount = course.enrollments_count ?? course.enrollments?.length ?? 0;
    const reviewsCount = course.feedback_count ?? course.feedback?.length ?? 0;

    function handleAddLesson(e) {
        e.preventDefault();
        post(route('admin.courses.lessons.store', { course: course.id }), {
            onSuccess: () => {
                reset();
                const modalEl = document.getElementById('addLessonModal');
                const modal = window.bootstrap?.Modal.getInstance(modalEl);
                modal?.hide();
            },
        });
    }

    function handleDeleteLesson(lesson) {
        if (confirm('Delete this lesson?')) {
            // Nested route needs both the parent course id and the lesson id.
            router.delete(route('admin.courses.lessons.destroy', { course: course.id, lesson: lesson.id }));
        }
    }

    function limit(text, len) {
        if (!text) return '';
        return text.length > len ? `${text.slice(0, len)}…` : text;
    }

    return (
        <AppLayout>
            <Head title={course.title} />

            <style>{`
                :root{
                    --c-bg:#f7f8fa;
                    --c-card:#ffffff;
                    --c-border:#e9ecf1;
                    --c-text:#1f2430;
                    --c-muted:#7b828f;
                    --c-primary:#4f46e5;
                    --c-primary-soft:#eef0ff;
                    --c-success:#16a34a;
                    --c-success-soft:#e9f9ee;
                    --c-warning:#d97706;
                    --c-warning-soft:#fff4e5;
                    --c-gold:#b8790c;
                    --c-gold-soft:#fdf3e2;
                    --c-radius:14px;
                }
                .page-wrap{ background:var(--c-bg); }
                .hero-card{
                    background:var(--c-card); border:1px solid var(--c-border); border-radius:var(--c-radius);
                    overflow:hidden;
                }
                .hero-thumb{ width:100%; height:260px; object-fit:cover; background:#f1f2f5; }
                .hero-body{ padding:1.5rem; }
                .badge-soft{ font-weight:600; font-size:.72rem; padding:.4em .75em; border-radius:999px; }
                .badge-published{ background:var(--c-success-soft); color:var(--c-success); }
                .badge-draft{ background:var(--c-warning-soft); color:var(--c-warning); }
                .badge-free{ background:var(--c-primary-soft); color:var(--c-primary); }
                .badge-paid{ background:#f1f2f5; color:var(--c-text); }

                /* Quick stats strip */
                .stat-strip{
                    display:grid; grid-template-columns:repeat(4,1fr); gap:0;
                    background:var(--c-card); border:1px solid var(--c-border); border-radius:var(--c-radius);
                    overflow:hidden; margin-bottom:1.5rem;
                }
                .stat-cell{
                    padding:1.1rem 1rem; text-align:center; border-right:1px solid var(--c-border);
                }
                .stat-cell:last-child{ border-right:none; }
                .stat-cell .val{ font-size:1.25rem; font-weight:800; color:var(--c-text); display:block; line-height:1.3; }
                .stat-cell .val i{ color:var(--c-gold); font-size:.95rem; margin-right:.2rem; }
                .stat-cell .lbl{ font-size:.72rem; color:var(--c-muted); text-transform:uppercase; letter-spacing:.05em; }

                .info-card{
                    background:var(--c-card); border:1px solid var(--c-border); border-radius:var(--c-radius);
                    padding:1.5rem; height:100%;
                }
                .info-card .section-title{
                    font-size:.95rem; font-weight:700; color:var(--c-text); margin-bottom:1rem;
                    display:flex; align-items:center; gap:.5rem;
                }
                .info-card .section-title i{ color:var(--c-primary); }
                .meta-row{ display:flex; justify-content:space-between; padding:.55rem 0; border-bottom:1px solid var(--c-border); font-size:.87rem; }
                .meta-row:last-child{ border-bottom:none; }
                .meta-label{ color:var(--c-muted); }
                .meta-value{ color:var(--c-text); font-weight:600; }
                .lesson-item{
                    display:flex; align-items:center; justify-content:between; gap:1rem;
                    padding:.85rem 1rem; border:1px solid var(--c-border); border-radius:12px; margin-bottom:.6rem;
                    background:#fff;
                }
                .lesson-index{
                    width:32px;height:32px;border-radius:8px;background:var(--c-primary-soft);color:var(--c-primary);
                    display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem;flex-shrink:0;
                }
                .lesson-title{ font-weight:600; color:var(--c-text); font-size:.9rem; }
                .lesson-sub{ font-size:.76rem; color:var(--c-muted); }
                .btn-icon{
                    width:32px;height:32px;border-radius:8px; display:inline-flex;align-items:center;justify-content:center;
                    border:1px solid var(--c-border); background:#fff; color:var(--c-muted);
                }
                .btn-icon:hover{ background:var(--c-primary-soft); color:var(--c-primary); }
                .btn-icon.danger:hover{ background:#fdecec; color:#dc2626; }
                .feedback-item{ border-bottom:1px solid var(--c-border); padding:1rem 0; }
                .feedback-item:last-child{ border-bottom:none; }
                .stars i{ color:#f59e0b; font-size:.85rem; }
                .btn-primary-soft{
                    background:var(--c-primary); border:none; color:#fff; font-weight:600; border-radius:10px; padding:.55rem 1.1rem;
                }
                .btn-primary-soft:hover{ background:#4338ca; color:#fff; }
                .btn-cancel{
                    border-radius:10px; border:1px solid var(--c-border); color:var(--c-muted); font-weight:600;
                    padding:.55rem 1.1rem; background:#fff;
                }
                .btn-cancel:hover{ background:#f1f2f5; }
                .page-header h1{ font-size:1.4rem; font-weight:700; color:var(--c-text); }
                .page-header p{ color:var(--c-muted); font-size:.9rem; }
            `}</style>

            <div className="page-wrap py-4">
                <div className="container-fluid">

                    <div className="d-flex flex-wrap justify-content-between align-items-center page-header mb-4">
                        <div>
                            <h1 className="mb-1">{course.title}</h1>
                            <p className="mb-0">Course details, lessons and student feedback</p>
                        </div>
                        <div className="d-flex gap-2 mt-2 mt-md-0">
                            <Link href={route('admin.courses.edit', course.id)} className="btn btn-primary-soft">
                                <i className="bi bi-pencil me-1"></i> Edit Course
                            </Link>
                            <Link href={route('admin.courses.index')} className="btn btn-cancel">
                                <i className="bi bi-arrow-left me-1"></i> Back
                            </Link>
                        </div>
                    </div>

                    {/* Quick stats */}
                    <div className="stat-strip">
                        <div className="stat-cell">
                            <span className="val"><i className="bi bi-star-fill"></i>{avgRating.toFixed(1)}</span>
                            <span className="lbl">Avg Rating</span>
                        </div>
                        <div className="stat-cell">
                            <span className="val">{reviewsCount}</span>
                            <span className="lbl">Reviews</span>
                        </div>
                        <div className="stat-cell">
                            <span className="val">{enrolledCount}</span>
                            <span className="lbl">Enrolled</span>
                        </div>
                        <div className="stat-cell">
                            <span className="val">{sortedLessons.length}</span>
                            <span className="lbl">Lessons</span>
                        </div>
                    </div>

                    <div className="row g-4 mb-4">
                        {/* Hero */}
                        <div className="col-lg-8">
                            <div className="hero-card">
                                <img
                                    src={course.thumbnail ? `/images/thumbnails/${course.thumbnail}` : '/images/placeholder-course.png'}
                                    className="hero-thumb"
                                    alt={course.title}
                                />
                                <div className="hero-body">
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {course.status === 'published' ? (
                                            <span className="badge-soft badge-published">Published</span>
                                        ) : (
                                            <span className="badge-soft badge-draft">Draft</span>
                                        )}

                                        {course.is_free ? (
                                            <span className="badge-soft badge-free">Free</span>
                                        ) : (
                                            <span className="badge-soft badge-paid">{Number(course.price).toLocaleString()} RWF</span>
                                        )}

                                        <span className="badge-soft" style={{ background: '#f1f2f5', color: '#1f2430' }}>{course.level}</span>
                                    </div>
                                    <p className="text-muted mb-0">{course.description || 'No description provided.'}</p>

                                    {course.video && (
                                        <a href={course.video} target="_blank" rel="noreferrer" className="btn btn-cancel mt-3">
                                            <i className="bi bi-play-circle me-1"></i> Watch Preview Video
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Meta sidebar */}
                        <div className="col-lg-4">
                            <div className="info-card">
                                <div className="section-title"><i className="bi bi-info-circle"></i> Overview</div>
                                <div className="meta-row">
                                    <span className="meta-label">Instructor</span>
                                    <span className="meta-value">{course.talent?.name ?? '—'}</span>
                                </div>
                                <div className="meta-row">
                                    <span className="meta-label">Category</span>
                                    <span className="meta-value">{course.category?.name ?? '—'}</span>
                                </div>
                                <div className="meta-row">
                                    <span className="meta-label">Slug</span>
                                    <span className="meta-value text-truncate" style={{ maxWidth: '160px' }}>{course.slug}</span>
                                </div>
                                <div className="meta-row">
                                    <span className="meta-label">Created</span>
                                    <span className="meta-value">{course.created_at ? new Date(course.created_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : '—'}</span>
                                </div>
                                <div className="meta-row">
                                    <span className="meta-label">Last Updated</span>
                                    <span className="meta-value">{course.updated_at ? new Date(course.updated_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : '—'}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Lessons */}
                        <div className="col-lg-7">
                            <div className="info-card">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="section-title mb-0"><i className="bi bi-collection-play"></i> Lessons</div>
                                    <button type="button" className="btn btn-sm btn-primary-soft" data-bs-toggle="modal" data-bs-target="#addLessonModal">
                                        <i className="bi bi-plus-lg me-1"></i> Add Lesson
                                    </button>
                                </div>

                                {sortedLessons.length > 0 ? sortedLessons.map((lesson, index) => (
                                    <div className="lesson-item" key={lesson.id}>
                                        <div className="lesson-index">{index + 1}</div>
                                        <div className="flex-grow-1">
                                            <div className="lesson-title">{lesson.title}</div>
                                            <div className="lesson-sub">{limit(lesson.content, 60)}</div>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <Link
                                                href={route('admin.courses.lessons.edit', { course: course.id, lesson: lesson.id })}
                                                className="btn-icon"
                                                title="Edit"
                                            >
                                                <i className="bi bi-pencil"></i>
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteLesson(lesson)}
                                                className="btn-icon danger"
                                                title="Delete"
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                )) : (
                                    <p className="text-muted text-center py-4 mb-0">No lessons added yet.</p>
                                )}
                            </div>
                        </div>

                        {/* Feedback */}
                        <div className="col-lg-5">
                            <div className="info-card">
                                <div className="section-title"><i className="bi bi-chat-square-text"></i> Student Feedback</div>

                                {course.feedback && course.feedback.length > 0 ? course.feedback.map((feedback, i) => (
                                    <div className="feedback-item" key={feedback.id ?? i}>
                                        <div className="d-flex justify-content-between mb-1">
                                            <span className="fw-semibold small">{feedback.user?.name ?? 'Anonymous'}</span>
                                            <span className="stars">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <i key={star} className={`bi bi-star${star <= feedback.rating ? '-fill' : ''}`}></i>
                                                ))}
                                            </span>
                                        </div>
                                        <p className="small text-muted mb-0">{feedback.comment}</p>
                                    </div>
                                )) : (
                                    <p className="text-muted text-center py-4 mb-0">No feedback yet.</p>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Add Lesson Modal */}
            <div className="modal fade" id="addLessonModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ borderRadius: '14px', border: 'none' }}>
                        <form onSubmit={handleAddLesson}>
                            <div className="modal-header" style={{ borderBottom: '1px solid #e9ecf1' }}>
                                <h5 className="modal-title fw-bold">Add Lesson</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold small">Title</label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                    {errors.title && <div className="text-danger small mt-1">{errors.title}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold small">Content</label>
                                    <textarea
                                        value={data.content}
                                        onChange={e => setData('content', e.target.value)}
                                        className="form-control"
                                        rows="3"
                                    />
                                    {errors.content && <div className="text-danger small mt-1">{errors.content}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold small">Video URL</label>
                                    <input
                                        type="url"
                                        value={data.video_url}
                                        onChange={e => setData('video_url', e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                    {errors.video_url && <div className="text-danger small mt-1">{errors.video_url}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold small">Order</label>
                                    <input
                                        type="number"
                                        value={data.order}
                                        onChange={e => setData('order', e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer" style={{ borderTop: '1px solid #e9ecf1' }}>
                                <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary-soft" disabled={processing}>Save Lesson</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}