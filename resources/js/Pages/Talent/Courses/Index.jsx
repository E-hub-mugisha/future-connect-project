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
                    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

                    [data-h-scope="talent-courses"] {
                        --h-accent: #48d597;
                        --h-accent-ink: #0f3d2b;
                        --h-ink: #000000;
                        --h-white: #ffffff;
                        --h-bg: #f6f8f7;
                        --h-line: rgba(0, 0, 0, 0.1);
                        --h-line-soft: rgba(0, 0, 0, 0.06);
                        --h-muted: rgba(0, 0, 0, 0.55);
                        background-color: var(--h-bg);
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-courses"] h1,
                    [data-h-scope="talent-courses"] h2,
                    [data-h-scope="talent-courses"] h3,
                    [data-h-scope="talent-courses"] h4,
                    [data-h-scope="talent-courses"] h5,
                    [data-h-scope="talent-courses"] h6 {
                        font-family: 'Space Grotesk', 'Inter', sans-serif;
                        letter-spacing: -0.01em;
                    }

                    /* ---- header: light panel, accent stripe, no dark band ---- */
                    [data-h-scope="talent-courses"] .h-header-card {
                        background: var(--h-white);
                        border: 1px solid var(--h-line-soft);
                        border-radius: 16px;
                        position: relative;
                        overflow: hidden;
                    }
                    [data-h-scope="talent-courses"] .h-header-card::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        width: 4px;
                        background: var(--h-accent);
                    }

                    [data-h-scope="talent-courses"] .h-card {
                        background: var(--h-white);
                        border: 1px solid var(--h-line-soft);
                        border-radius: 14px;
                    }

                    [data-h-scope="talent-courses"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-accent-ink);
                        border: 1px solid var(--h-accent);
                        font-weight: 600;
                        transition: background .15s ease, border-color .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-btn-accent:hover {
                        background: #34c084;
                        border-color: #34c084;
                        color: var(--h-accent-ink);
                    }

                    /* ---- stat pills: light tinted tiles, not dark glass ---- */
                    [data-h-scope="talent-courses"] .h-stat {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                    }
                    [data-h-scope="talent-courses"] .h-stat-icon {
                        background: var(--h-white);
                        border: 1px solid var(--h-line-soft);
                    }

                    [data-h-scope="talent-courses"] .h-course-card {
                        background: var(--h-white);
                        border: 1px solid var(--h-line-soft);
                        border-radius: 14px;
                        transition: border-color .15s ease, transform .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-course-card:hover {
                        border-color: var(--h-line);
                        transform: translateY(-2px);
                    }
                    [data-h-scope="talent-courses"] .h-thumb {
                        height: 96px;
                        object-fit: cover;
                        background: var(--h-bg);
                    }

                    [data-h-scope="talent-courses"] .h-badge-accent {
                        background: var(--h-accent);
                        color: var(--h-accent-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-badge-ink {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                        color: var(--h-ink);
                        font-weight: 500;
                    }
                    [data-h-scope="talent-courses"] .h-badge-warning {
                        background: #fff8e6;
                        border: 1px solid #f2d488;
                        color: #7a5b00;
                        font-weight: 600;
                    }
                    [data-h-scope="talent-courses"] .h-badge-success {
                        background: rgba(72,213,151,0.15);
                        border: 1px solid rgba(72,213,151,0.4);
                        color: var(--h-accent-ink);
                        font-weight: 600;
                    }

                    [data-h-scope="talent-courses"] .h-meta-icon {
                        color: var(--h-ink);
                        opacity: 0.55;
                    }

                    [data-h-scope="talent-courses"] .h-search {
                        border: 1px solid var(--h-line);
                        background: var(--h-white);
                    }
                    [data-h-scope="talent-courses"] .h-search:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 3px rgba(72,213,151,0.2);
                    }

                    [data-h-scope="talent-courses"] .h-dropdown-menu {
                        min-width: 150px;
                        border: 1px solid var(--h-line-soft);
                        border-radius: 10px;
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item {
                        cursor: pointer;
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item:hover {
                        background: var(--h-bg);
                    }
                    [data-h-scope="talent-courses"] .h-dropdown-item.text-danger:hover {
                        background: #fdecea;
                    }

                    [data-h-scope="talent-courses"] .h-icon-btn {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-courses"] .h-icon-btn:hover {
                        background: var(--h-white);
                        border-color: var(--h-line);
                    }

                    [data-h-scope="talent-courses"] .h-view-btn {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                        color: var(--h-ink);
                        font-weight: 600;
                        transition: background .15s ease, border-color .15s ease;
                    }
                    [data-h-scope="talent-courses"] .h-view-btn:hover {
                        background: rgba(72,213,151,0.14);
                        border-color: rgba(72,213,151,0.4);
                        color: var(--h-accent-ink);
                    }

                    [data-h-scope="talent-courses"] .h-modal-content {
                        border-radius: 16px;
                        border: none;
                        overflow: hidden;
                    }
                `}</style>

                <div className="container-fluid px-4 py-4" style={{ maxWidth: 1240, margin: '0 auto' }}>

                    {/* Header */}
                    <div className="h-header-card mb-4">
                        <div className="p-4 ps-4">
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
                                <div>
                                    <h4 className="fw-bold mb-1">My Courses</h4>
                                    <p className="mb-0" style={{ color: 'var(--h-muted, rgba(0,0,0,0.55))' }}>
                                        Manage the courses you've published on the platform
                                    </p>
                                </div>
                                <Link
                                    href={route('talent.courses.create')}
                                    className="btn h-btn-accent rounded-pill px-4 py-2 d-inline-flex align-items-center"
                                >
                                    <IconPlus className="me-2" />
                                    Create New Course
                                </Link>
                            </div>

                            <div className="row g-3">
                                <StatPill icon={<IconLayers />} label="Total Courses" value={courses.length} />
                                <StatPill
                                    icon={<IconCheckCircle />}
                                    label="Published"
                                    value={courses.filter((c) => c.status === 'published').length}
                                />
                                <StatPill
                                    icon={<IconUsers />}
                                    label="Total Enrollments"
                                    value={courses.reduce((s, c) => s + (c.enrollments_count ?? 0), 0)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="d-flex align-items-center mb-4">
                        <div className="position-relative" style={{ maxWidth: 340, width: '100%' }}>
                            <span
                                className="position-absolute d-flex align-items-center"
                                style={{ left: 14, top: 0, bottom: 0, opacity: 0.45 }}
                            >
                                <IconSearch />
                            </span>
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
                        <div className="h-card text-center py-5">
                            <IconBookOpen className="mb-3" size={40} style={{ opacity: 0.2 }} />
                            <p className="mb-0" style={{ color: 'var(--h-muted, rgba(0,0,0,0.55))' }}>
                                No courses found.
                            </p>
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
                    className="h-stat-icon d-flex align-items-center justify-content-center rounded-3"
                    style={{ width: 40, height: 40, flexShrink: 0, color: '#48d597' }}
                >
                    {icon}
                </div>
                <div>
                    <div className="small" style={{ color: 'rgba(0,0,0,0.55)' }}>{label}</div>
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
        <div className="h-course-card overflow-hidden position-relative">
            <div className="position-relative">
                {course.thumbnail ? (
                    <img
                        src={`/${course.thumbnail}`}
                        alt={course.title}
                        className="w-100 h-thumb"
                    />
                ) : (
                    <div className="w-100 h-thumb d-flex align-items-center justify-content-center">
                        <IconImage style={{ opacity: 0.3 }} />
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
                            className="h-icon-btn btn btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center"
                            style={{ width: 24, height: 24 }}
                            onClick={() => setMenuOpen((v) => !v)}
                        >
                            <IconDots size={13} />
                        </button>

                        {menuOpen && (
                            <>
                                <div
                                    className="position-fixed top-0 start-0 w-100 h-100"
                                    style={{ zIndex: 10 }}
                                    onClick={() => setMenuOpen(false)}
                                ></div>
                                <div
                                    className="h-dropdown-menu bg-white position-absolute end-0 mt-1 py-1"
                                    style={{ zIndex: 20 }}
                                >
                                    <Link
                                        href={route('talent.courses.edit', course.id)}
                                        className="h-dropdown-item d-flex align-items-center px-3 py-2 text-decoration-none text-dark small"
                                    >
                                        <IconPencil className="me-2" size={13} />
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        className="h-dropdown-item d-flex align-items-center w-100 text-start border-0 bg-transparent px-3 py-2 text-danger small"
                                        onClick={() => {
                                            setMenuOpen(false);
                                            onDelete();
                                        }}
                                    >
                                        <IconTrash className="me-2" size={13} />
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

                <div className="d-flex flex-wrap align-items-center gap-3 small mb-2" style={{ fontSize: 11, color: 'rgba(0,0,0,0.55)' }}>
                    <span className="d-flex align-items-center gap-1">
                        <IconGraduationCap size={12} className="h-meta-icon" />
                        {course.lessons_count ?? 0}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                        <IconUsers size={12} className="h-meta-icon" />
                        {course.enrollments_count ?? 0}
                    </span>
                    {course.feedback_avg_rating ? (
                        <span className="d-flex align-items-center gap-1">
                            <IconStar size={12} style={{ color: '#f5b301' }} />
                            {Number(course.feedback_avg_rating).toFixed(1)}
                        </span>
                    ) : null}
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                    {course.is_free ? (
                        <span className="badge h-badge-success rounded-pill px-2 py-1" style={{ fontSize: 11 }}>Free</span>
                    ) : (
                        <span className="fw-bold" style={{ color: '#000000', fontSize: 13 }}>
                            ${Number(course.price ?? 0).toFixed(2)}
                        </span>
                    )}
                </div>

                <Link
                    href={route('talent.courses.show', course.id)}
                    className="h-view-btn btn rounded-pill w-100 py-1 d-flex align-items-center justify-content-center gap-1"
                    style={{ fontSize: 12 }}
                >
                    <IconEye size={13} />
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
                    <div className="modal-content h-modal-content">
                        <div className="modal-body p-4 text-center">
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                style={{ width: 56, height: 56, background: '#fdecea', border: '1px solid #f6c7c1' }}
                            >
                                <IconTrash size={20} style={{ color: '#d64545' }} />
                            </div>
                            <h6 className="fw-bold mb-2">Delete course</h6>
                            <p className="mb-4" style={{ color: 'rgba(0,0,0,0.6)' }}>
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

/* ---------- inline SVG icon set (lightweight, currentColor / stroke-based) ---------- */

function Icon({ children, size = 15, className = '', style = {}, viewBox = '0 0 24 24' }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox={viewBox}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            style={style}
        >
            {children}
        </svg>
    );
}

function IconPlus(props) {
    return (
        <Icon size={14} {...props}>
            <path d="M12 5v14M5 12h14" />
        </Icon>
    );
}

function IconSearch(props) {
    return (
        <Icon size={14} {...props}>
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
        </Icon>
    );
}

function IconLayers(props) {
    return (
        <Icon size={18} {...props}>
            <path d="m12 2 9 5-9 5-9-5 9-5Z" />
            <path d="m3 12 9 5 9-5" />
            <path d="m3 17 9 5 9-5" />
        </Icon>
    );
}

function IconCheckCircle(props) {
    return (
        <Icon size={18} {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="m8.5 12.5 2.3 2.3L15.5 10" />
        </Icon>
    );
}

function IconUsers(props) {
    return (
        <Icon {...props}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
            <circle cx="10" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </Icon>
    );
}

function IconBookOpen(props) {
    return (
        <Icon {...props}>
            <path d="M2 6a2 2 0 0 1 2-2h5a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2Z" />
            <path d="M22 6a2 2 0 0 0-2-2h-5a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22Z" />
        </Icon>
    );
}

function IconImage(props) {
    return (
        <Icon size={20} {...props}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="1.5" />
            <path d="m21 15-5-5L5 21" />
        </Icon>
    );
}

function IconDots({ size = 15, ...props }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
            <circle cx="12" cy="5" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="12" cy="19" r="1.6" />
        </svg>
    );
}

function IconPencil(props) {
    return (
        <Icon {...props}>
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </Icon>
    );
}

function IconTrash(props) {
    return (
        <Icon {...props}>
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M10 11v6M14 11v6" />
        </Icon>
    );
}

function IconEye(props) {
    return (
        <Icon {...props}>
            <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
            <circle cx="12" cy="12" r="3" />
        </Icon>
    );
}

function IconGraduationCap(props) {
    return (
        <Icon {...props}>
            <path d="m2 9 10-5 10 5-10 5-10-5Z" />
            <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
        </Icon>
    );
}

function IconStar({ size = 14, style = {}, ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            style={style}
            {...props}
        >
            <path d="m12 2 3.1 6.6 7.2.8-5.4 5 1.5 7.1L12 18l-6.4 3.5 1.5-7.1-5.4-5 7.2-.8L12 2Z" />
        </svg>
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