import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ courses, categories = [], stats, filters = {} }) {
    const [search, setSearch] = useState(filters.search ?? '');
    const [status, setStatus] = useState(filters.status ?? '');
    const [level, setLevel] = useState(filters.level ?? '');
    const [categoryId, setCategoryId] = useState(filters.category_id ?? '');

    function handleFilter(e) {
        e.preventDefault();
        router.get(route('admin.courses.index'), {
            search,
            status,
            level,
            category_id: categoryId,
        }, {
            preserveState: true,
            replace: true,
        });
    }

    function resetFilters() {
        setSearch('');
        setStatus('');
        setLevel('');
        setCategoryId('');
        router.get(route('admin.courses.index'));
    }

    function handleDelete(course) {
        if (confirm('Delete this course? This action cannot be undone.')) {
            router.delete(route('admin.courses.destroy', course.id));
        }
    }

    return (
        <AppLayout>
            <Head title="Courses" />

            <style>{`
                :root{
                    --c-bg:#f7f8fa;
                    --c-card:#F5f5f7;
                    --c-border:#e9ecf1;
                    --c-text:#1f2430;
                    --c-muted:#7b828f;
                    --c-primary:#4f46e5;
                    --c-primary-soft:#eef0ff;
                    --c-success:#16a34a;
                    --c-success-soft:#e9f9ee;
                    --c-warning:#d97706;
                    --c-warning-soft:#fff4e5;
                    --c-danger:#dc2626;
                    --c-danger-soft:#fdecec;
                    --c-radius:14px;
                }
                .page-wrap{background:var(--c-bg);}
                .stat-card{
                    background:var(--c-card);
                    border:1px solid var(--c-border);
                    border-radius:var(--c-radius);
                    padding:1.25rem 1.5rem;
                    height:100%;
                    transition:transform .15s ease, box-shadow .15s ease;
                }
                .stat-card:hover{ transform:translateY(-2px); box-shadow:0 8px 24px rgba(31,36,48,.06); }
                .stat-icon{
                    width:44px;height:44px;border-radius:12px;
                    display:flex;align-items:center;justify-content:center;
                    font-size:1.1rem;
                }
                .stat-value{ font-size:1.6rem; font-weight:700; color:var(--c-text); line-height:1; }
                .stat-label{ font-size:.8rem; color:var(--c-muted); font-weight:500; text-transform:uppercase; letter-spacing:.03em; }

                .filter-card{
                    background:var(--c-card);
                    border:1px solid var(--c-border);
                    border-radius:var(--c-radius);
                    padding:1.25rem;
                }
                .table-card{
                    background:var(--c-card);
                    border:1px solid var(--c-border);
                    border-radius:var(--c-radius);
                    overflow:hidden;
                }
                .table-modern thead th{
                    background:#fafbfc;
                    color:var(--c-muted);
                    font-size:.72rem;
                    text-transform:uppercase;
                    letter-spacing:.04em;
                    font-weight:700;
                    border-bottom:1px solid var(--c-border);
                    padding:.9rem 1rem;
                    white-space:nowrap;
                }
                .table-modern td{
                    padding:.9rem 1rem;
                    vertical-align:middle;
                    border-bottom:1px solid var(--c-border);
                    color:var(--c-text);
                }
                .table-modern tbody tr:last-child td{ border-bottom:none; }
                .table-modern tbody tr{ transition:background .12s ease; }
                .table-modern tbody tr:hover{ background:#fafbfd; }

                .course-thumb{
                    width:56px;height:56px;border-radius:10px;object-fit:cover;
                    border:1px solid var(--c-border);
                    background:#f1f2f5;
                }
                .course-title{ font-weight:600; color:var(--c-text); }
                .course-sub{ font-size:.78rem; color:var(--c-muted); }

                .badge-soft{
                    font-weight:600; font-size:.72rem; padding:.4em .75em; border-radius:999px;
                }
                .badge-published{ background:var(--c-success-soft); color:var(--c-success); }
                .badge-draft{ background:var(--c-warning-soft); color:var(--c-warning); }
                .badge-free{ background:var(--c-primary-soft); color:var(--c-primary); }
                .badge-paid{ background:#f1f2f5; color:var(--c-text); }

                .btn-icon{
                    width:34px;height:34px;border-radius:9px;
                    display:inline-flex;align-items:center;justify-content:center;
                    border:1px solid var(--c-border);
                    background:#fff;color:var(--c-muted);
                    transition:.15s ease;
                }
                .btn-icon:hover{ background:var(--c-primary-soft); color:var(--c-primary); border-color:var(--c-primary-soft); }
                .btn-icon.danger:hover{ background:var(--c-danger-soft); color:var(--c-danger); border-color:var(--c-danger-soft); }

                .btn-primary-soft{
                    background:var(--c-primary);
                    border:none;
                    color:#fff;
                    font-weight:600;
                    border-radius:10px;
                    padding:.55rem 1.1rem;
                }
                .btn-primary-soft:hover{ background:#4338ca; color:#fff; }

                .page-header h1{ font-size:1.4rem; font-weight:700; color:var(--c-text); }
                .page-header p{ color:var(--c-muted); font-size:.9rem; }

                .form-select, .form-control{
                    border-radius:10px;
                    border:1px solid var(--c-border);
                    font-size:.875rem;
                }
                .form-select:focus, .form-control:focus{
                    border-color:var(--c-primary);
                    box-shadow:0 0 0 3px var(--c-primary-soft);
                }
            `}</style>

            <div className="page-wrap py-4">
                <div className="container-fluid">

                    {/* Header */}
                    <div className="d-flex flex-wrap justify-content-between align-items-center page-header mb-4">
                        <div>
                            <h1 className="mb-1">Courses</h1>
                            <p className="mb-0">Manage, publish and track all platform courses</p>
                        </div>
                        <Link href={route('admin.courses.create')} className="btn btn-primary-soft mt-2 mt-md-0">
                            <i className="bi bi-plus-lg me-1"></i> New Course
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="row g-3 mb-4">
                        <div className="col-6 col-md-3">
                            <div className="stat-card d-flex align-items-center gap-3">
                                <div className="stat-icon" style={{ background: 'var(--c-primary-soft)', color: 'var(--c-primary)' }}>
                                    <i className="bi bi-collection-play"></i>
                                </div>
                                <div>
                                    <div className="stat-value">{stats.total}</div>
                                    <div className="stat-label">Total Courses</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="stat-card d-flex align-items-center gap-3">
                                <div className="stat-icon" style={{ background: 'var(--c-success-soft)', color: 'var(--c-success)' }}>
                                    <i className="bi bi-check-circle"></i>
                                </div>
                                <div>
                                    <div className="stat-value">{stats.published}</div>
                                    <div className="stat-label">Published</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="stat-card d-flex align-items-center gap-3">
                                <div className="stat-icon" style={{ background: 'var(--c-warning-soft)', color: 'var(--c-warning)' }}>
                                    <i className="bi bi-pencil-square"></i>
                                </div>
                                <div>
                                    <div className="stat-value">{stats.draft}</div>
                                    <div className="stat-label">Drafts</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="stat-card d-flex align-items-center gap-3">
                                <div className="stat-icon" style={{ background: '#f1f2f5', color: 'var(--c-text)' }}>
                                    <i className="bi bi-people"></i>
                                </div>
                                <div>
                                    <div className="stat-value">{stats.enrollments}</div>
                                    <div className="stat-label">Enrollments</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="filter-card mb-4">
                        <form onSubmit={handleFilter} className="row g-2 align-items-end">
                            <div className="col-12 col-md-4">
                                <label className="form-label small text-muted mb-1">Search</label>
                                <input
                                    type="text"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="form-control"
                                    placeholder="Search by course title..."
                                />
                            </div>
                            <div className="col-6 col-md-2">
                                <label className="form-label small text-muted mb-1">Status</label>
                                <select value={status} onChange={e => setStatus(e.target.value)} className="form-select">
                                    <option value="">All</option>
                                    <option value="published">Published</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>
                            <div className="col-6 col-md-2">
                                <label className="form-label small text-muted mb-1">Level</label>
                                <select value={level} onChange={e => setLevel(e.target.value)} className="form-select">
                                    <option value="">All</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </div>
                            <div className="col-6 col-md-2">
                                <label className="form-label small text-muted mb-1">Category</label>
                                <select value={categoryId} onChange={e => setCategoryId(e.target.value)} className="form-select">
                                    <option value="">All</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-6 col-md-2 d-flex gap-2">
                                <button type="submit" className="btn btn-primary-soft flex-fill">
                                    <i className="bi bi-funnel me-1"></i> Filter
                                </button>
                                <button type="button" onClick={resetFilters} className="btn btn-icon" title="Reset">
                                    <i className="bi bi-arrow-counterclockwise"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Table */}
                    <div className="table-card">
                        <div className="table-responsive">
                            <table className="table table-modern mb-0">
                                <thead>
                                    <tr>
                                        <th>Course</th>
                                        <th>Talent</th>
                                        <th>Category</th>
                                        <th>Level</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Enrollments</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.data.length > 0 ? courses.data.map(course => (
                                        <tr key={course.id}>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <img
                                                        src={course.thumbnail ? `/images/thumbnails/${course.thumbnail}` : '/images/placeholder-course.png'}
                                                        className="course-thumb"
                                                        alt={course.title}
                                                    />
                                                    <div>
                                                        <div className="course-title">{course.title}</div>
                                                        <div className="course-sub">
                                                            {course.description ? `${course.description.slice(0, 40)}${course.description.length > 40 ? '…' : ''}` : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{course.talent?.name ?? '—'}</td>
                                            <td>{course.category?.name ?? '—'}</td>
                                            <td>
                                                <span className="badge-soft" style={{ background: '#f1f2f5', color: '#1f2430' }}>{course.level}</span>
                                            </td>
                                            <td>
                                                {course.is_free ? (
                                                    <span className="badge-soft badge-free">Free</span>
                                                ) : (
                                                    <span className="badge-soft badge-paid">{Number(course.price).toLocaleString()} RWF</span>
                                                )}
                                            </td>
                                            <td>
                                                {course.status === 'published' ? (
                                                    <span className="badge-soft badge-published">Published</span>
                                                ) : (
                                                    <span className="badge-soft badge-draft">Draft</span>
                                                )}
                                            </td>
                                            <td>
                                                <span className="fw-semibold">{course.enrollments_count}</span>
                                            </td>
                                            <td className="text-end">
                                                <div className="d-flex justify-content-end gap-2">
                                                    <Link href={route('admin.courses.show', course.slug)} className="btn-icon" title="View">
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
                                                    <Link href={route('admin.courses.edit', course.id)} className="btn-icon" title="Edit">
                                                        <i className="bi bi-pencil"></i>
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDelete(course)}
                                                        className="btn-icon danger"
                                                        title="Delete"
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="8" className="text-center py-5 text-muted">
                                                <i className="bi bi-inbox fs-3 d-block mb-2"></i>
                                                No courses found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {courses.links && courses.links.length > 3 && (
                            <div className="p-3 border-top d-flex flex-wrap gap-1">
                                {courses.links.map((link, i) => (
                                    link.url ? (
                                        <Link
                                            key={i}
                                            href={link.url}
                                            preserveState
                                            className={`btn btn-sm ${link.active ? 'btn-primary-soft' : 'btn-cancel'}`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ) : (
                                        <span
                                            key={i}
                                            className="btn btn-sm btn-cancel disabled"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    )
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}
