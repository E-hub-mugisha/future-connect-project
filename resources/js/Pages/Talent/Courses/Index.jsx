import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function CoursesIndex({ courses }) {
    const [query, setQuery] = useState('');
    const [deleteTarget, setDeleteTarget] = useState(null);

    const filtered = courses.filter((c) =>
        c.title.toLowerCase().includes(query.toLowerCase())
    );

    function confirmDelete() {
        router.delete(route('talent.courses.destroy', deleteTarget.id), {
            preserveScroll: true,
            onSuccess: () => setDeleteTarget(null),
        });
    }

    return (
        <AppLayout>
            <Head title="Courses" />

            <div data-h-scope="talent-courses">
                <style>{`
                    [data-h-scope="talent-courses"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-courses"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6,15,17,0.06);
                    }
                    [data-h-scope="talent-courses"] .h-header-card {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-courses"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-courses"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-white);
                        border: 1px solid rgba(255,255,255,0.25);
                    }
                    [data-h-scope="talent-courses"] .h-btn-ghost:hover {
                        background: rgba(255,255,255,0.1);
                    }
                    [data-h-scope="talent-courses"] .h-stat {
                        background: rgba(255,255,255,0.06);
                        border: 1px solid rgba(255,255,255,0.12);
                    }
                    [data-h-scope="talent-courses"] .h-course-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6,15,17,0.06);
                        transition: transform .15s ease, box-shadow .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-course-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 18px rgba(6,15,17,0.07);
                    }
                    [data-h-scope="talent-courses"] .h-thumb {
                        height: 96px;
                        object-fit: cover;
                        background: rgba(72,213,151,0.08);
                    }
                    [data-h-scope="talent-courses"] .h-badge-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-badge-ink {
                        background: rgba(6,15,17,0.06);
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-badge-warning {
                        background: #fff3cd;
                        color: #7a5b00;
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-badge-success {
                        background: rgba(72,213,151,0.15);
                        color: var(--h-accent-dark);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-meta-icon {
                        color: var(--h-accent-dark);
                        width: 13px;
                    }
                    [data-h-scope="talent-courses"] .h-search:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72,213,151,0.25);
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-menu {
                        min-width: 150px;
                        border: 1px solid rgba(6,15,17,0.08);
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item {
                        cursor: pointer;
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item:hover {
                        background: rgba(72,213,151,0.1);
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item.text-danger:hover {
                        background: #fdecea;
                    }
                    [data-h-scope="talent-courses"] .h-view-btn {
                        background: rgba(6,15,17,0.04);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-view-btn:hover {
                        background: rgba(72,213,151,0.18);
                        color: var(--h-accent-dark);
                    }
                `}</style>

                <div className="container-fluid px-4 py-4">

                    {/* Header */}
                    <div className="card h-header-card border-0 shadow-sm rounded-4 mb-4">
                        <div className="card-body p-4">
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
                                <div>
                                    <h4 className="fw-bold mb-1">My Courses</h4>
                                    <p className="mb-0" style={{ opacity: 0.7 }}>
                                        Manage the courses you've published on the platform
                                    </p>
                                </div>
                                <Link
                                    href={route('talent.courses.create')}
                                    className="btn h-btn-accent rounded-pill px-4 py-2"
                                >
                                    <i className="fas fa-plus me-2"></i>
                                    Create New Course
                                </Link>
                            </div>

                            <div className="row g-3">
                                <StatPill icon="fa-layer-group" label="Total Courses" value={courses.length} />
                                <StatPill
                                    icon="fa-circle-check"
                                    label="Published"
                                    value={courses.filter((c) => c.status === 'published').length}
                                />
                                <StatPill
                                    icon="fa-users"
                                    label="Total Enrollments"
                                    value={courses.reduce((s, c) => s + (c.enrollments_count ?? 0), 0)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="d-flex align-items-center mb-4">
                        <div className="position-relative" style={{ maxWidth: 340, width: '100%' }}>
                            <i className="fas fa-search position-absolute" style={{ left: 14, top: 12, opacity: 0.4 }}></i>
                            <input
                                type="text"
                                className="form-control h-search rounded-pill ps-5"
                                placeholder="Search courses..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Course grid */}
                    {filtered.length === 0 ? (
                        <div className="card h-card border-0 shadow-sm rounded-4">
                            <div className="card-body text-center py-5 text-secondary">
                                <i className="fas fa-book-open fs-1 mb-3 d-block opacity-25"></i>
                                <p className="mb-0">No courses found.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="row g-3">
                            {filtered.map((course) => (
                                <div className="col-md-6 col-lg-4 col-xl-3" key={course.id}>
                                    <CourseCard course={course} onDelete={() => setDeleteTarget(course)} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <DeleteModal
                course={deleteTarget}
                onCancel={() => setDeleteTarget(null)}
                onConfirm={confirmDelete}
            />
        </AppLayout>
    );
}

/* ---------- Stat pill (header) ---------- */

function StatPill({ icon, label, value }) {
    return (
        <div className="col-sm-4">
            <div className="h-stat rounded-4 p-3 d-flex align-items-center gap-3">
                <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{ width: 40, height: 40, background: 'rgba(72,213,151,0.2)', flexShrink: 0 }}
                >
                    <i className={`fas ${icon}`} style={{ color: '#48d597' }}></i>
                </div>
                <div>
                    <div className="small" style={{ opacity: 0.65 }}>{label}</div>
                    <div className="fw-bold fs-5">{value}</div>
                </div>
            </div>
        </div>
    );
}

/* ---------- Course card ---------- */

function CourseCard({ course, onDelete }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="h-course-card rounded-4 overflow-hidden position-relative">
            <div className="position-relative">
                {course.thumbnail ? (
                    <img
                        src={`/${course.thumbnail}`}
                        alt={course.title}
                        className="w-100 h-thumb"
                    />
                ) : (
                    <div className="w-100 h-thumb d-flex align-items-center justify-content-center">
                        <i className="fas fa-image" style={{ color: '#48d597', opacity: 0.5 }}></i>
                    </div>
                )}

                <span
                    className={`badge position-absolute top-0 end-0 m-2 rounded-pill px-2 py-1 ${
                        course.status === 'published' ? 'h-badge-success' : 'h-badge-warning'
                    }`}
                    style={{ fontSize: 10 }}
                >
                    {course.status === 'published' ? 'Published' : 'Draft'}
                </span>
            </div>

            <div className="p-2">
                <div className="d-flex justify-content-between align-items-start gap-1 mb-1">
                    <span className="badge h-badge-ink rounded-pill px-2 py-1" style={{ fontSize: 10 }}>
                        {course.category?.name ?? 'Uncategorized'}
                    </span>

                    <div className="position-relative">
                        <button
                            type="button"
                            className="btn btn-sm btn-light rounded-circle p-0"
                            style={{ width: 24, height: 24 }}
                            onClick={() => setMenuOpen((v) => !v)}
                        >
                            <i className="fas fa-ellipsis-vertical" style={{ fontSize: 11 }}></i>
                        </button>

                        {menuOpen && (
                            <>
                                <div
                                    className="position-fixed top-0 start-0 w-100 h-100"
                                    style={{ zIndex: 10 }}
                                    onClick={() => setMenuOpen(false)}
                                ></div>
                                <div
                                    className="h-dropdown-menu bg-white rounded-3 shadow-sm position-absolute end-0 mt-1 py-1"
                                    style={{ zIndex: 20 }}
                                >
                                    <Link
                                        href={route('talent.courses.edit', course.id)}
                                        className="h-dropdown-item d-block px-3 py-2 text-decoration-none text-dark small"
                                    >
                                        <i className="fas fa-pen me-2" style={{ width: 14 }}></i>
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        className="h-dropdown-item d-block w-100 text-start border-0 bg-transparent px-3 py-2 text-danger small"
                                        onClick={() => {
                                            setMenuOpen(false);
                                            onDelete();
                                        }}
                                    >
                                        <i className="fas fa-trash me-2" style={{ width: 14 }}></i>
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <h6 className="fw-bold mb-1" style={{ fontSize: 13.5, lineHeight: 1.3 }}>
                    {truncate(course.title, 42)}
                </h6>

                <div className="d-flex flex-wrap gap-2 small text-secondary mb-2" style={{ fontSize: 11 }}>
                    <span><i className="fas fa-graduation-cap h-meta-icon me-1"></i>{course.lessons_count ?? 0}</span>
                    <span><i className="fas fa-users h-meta-icon me-1"></i>{course.enrollments_count ?? 0}</span>
                    {course.feedback_avg_rating ? (
                        <span>
                            <i className="fas fa-star me-1" style={{ color: '#f5b301' }}></i>
                            {Number(course.feedback_avg_rating).toFixed(1)}
                        </span>
                    ) : null}
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                    {course.is_free ? (
                        <span className="badge h-badge-success rounded-pill px-2 py-1" style={{ fontSize: 11 }}>Free</span>
                    ) : (
                        <span className="fw-bold" style={{ color: '#060f11', fontSize: 13 }}>
                            ${Number(course.price ?? 0).toFixed(2)}
                        </span>
                    )}
                </div>

                <Link
                    href={route('talent.courses.show', course.id)}
                    className="btn h-view-btn rounded-pill w-100 py-1"
                    style={{ fontSize: 12 }}
                >
                    <i className="fas fa-eye me-1"></i>
                    View Course
                </Link>
            </div>
        </div>
    );
}

/* ---------- Delete confirmation modal ---------- */

function DeleteModal({ course, onCancel, onConfirm }) {
    if (!course) return null;

    return (
        <div data-h-scope="talent-courses">
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={onCancel}>
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-content rounded-4 border-0 shadow">
                        <div className="modal-body p-4 text-center">
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                style={{ width: 56, height: 56, background: '#fdecea' }}
                            >
                                <i className="fas fa-trash text-danger fs-5"></i>
                            </div>
                            <h6 className="fw-bold mb-2">Delete Course</h6>
                            <p className="text-secondary mb-4">
                                Are you sure you want to delete <strong>{course.title}</strong>? This action cannot be undone.
                            </p>
                            <div className="d-flex justify-content-center gap-2">
                                <button type="button" className="btn btn-light rounded-pill px-4" onClick={onCancel}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger rounded-pill px-4" onClick={onConfirm}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" onClick={onCancel}></div>
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