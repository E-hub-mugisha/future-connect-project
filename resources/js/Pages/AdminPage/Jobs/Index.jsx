import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

function initials(title) {
    if (!title) return '—';
    return title
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join('');
}

function decodePaginationLabel(label) {
    return label
        .replace(/&laquo;/g, '‹')
        .replace(/&raquo;/g, '›')
        .replace(/Previous/i, 'Prev')
        .replace(/Next/i, 'Next');
}

function TypeBadge({ type }) {
    const t = (type ?? '').toLowerCase();
    const map = {
        'full-time': { cls: 'badge-success', label: 'Full-Time' },
        'part-time': { cls: 'badge-info', label: 'Part-Time' },
        contract: { cls: 'badge-warn', label: 'Contract' },
        internship: { cls: 'badge-muted', label: 'Internship' },
        remote: { cls: 'badge-info', label: 'Remote' },
    };
    const meta = map[t] ?? { cls: 'badge-muted', label: type ?? '—' };
    return <span className={`badge ${meta.cls}`}>{meta.label}</span>;
}

export default function Index({ jobs }) {
    const tableRef = useRef(null);
    const jobList = jobs.data ?? [];

    const [search, setSearch] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [openMenuId, setOpenMenuId] = useState(null);

    // Re-init a jQuery DataTable on the plain table if one is available globally.
    useEffect(() => {
        let instance;
        if (window.$ && window.$.fn && window.$.fn.DataTable && tableRef.current) {
            instance = window.$(tableRef.current).DataTable({
                destroy: true,
                autoWidth: false,
                paging: false, // pagination is handled server-side via Laravel's paginator
            });
        }
        return () => {
            instance?.destroy();
        };
    }, [jobList]);

    // Close any open action menu on outside click
    useEffect(() => {
        function onDocClick() {
            setOpenMenuId(null);
        }
        document.addEventListener('click', onDocClick);
        return () => document.removeEventListener('click', onDocClick);
    }, []);

    function handleDelete(job) {
        if (confirm('Delete this job?')) {
            router.delete(route('admin.jobs.destroy', job.id));
        }
    }

    const stats = useMemo(() => {
        const total = jobs.total ?? jobList.length;
        const typesSet = new Set(jobList.map((j) => (j.type ?? '').toLowerCase()).filter(Boolean));
        const locationsSet = new Set(jobList.map((j) => j.location).filter(Boolean));
        return { total, types: typesSet.size, locations: locationsSet.size };
    }, [jobList, jobs.total]);

    const visibleJobs = useMemo(() => {
        return jobList.filter((job) => {
            const matchesSearch =
                !search ||
                job.title?.toLowerCase().includes(search.toLowerCase()) ||
                job.location?.toLowerCase().includes(search.toLowerCase());
            const matchesType = !typeFilter || (job.type ?? '').toLowerCase() === typeFilter;
            return matchesSearch && matchesType;
        });
    }, [jobList, search, typeFilter]);

    return (
        <AppLayout>
            <Head title="Manage Jobs" />

            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
                rel="stylesheet"
            />

            <style>{`
                :root {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #F5f5f7;
                    --bg-glass:   rgba(0,100,60,0.035);
                    --bg-glass2:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #7f958d;
                    --border:     rgba(0,100,60,0.1);
                    --border-accent: rgba(0,166,103,0.3);
                    --radius-lg:  16px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                    --warn:       #b3820f;
                    --danger:     #c94a3f;
                    --info:       #2f7dbd;
                }

                .fc-jobs-page, .fc-jobs-page * { box-sizing: border-box; }
                .fc-jobs-page {
                    background: var(--bg-deep);
                    color: var(--text-primary);
                    font-family: var(--font-body);
                    padding: 32px;
                    min-height: 100%;
                }
                @media(max-width: 768px) { .fc-jobs-page { padding: 20px 16px; } }

                .jobs-header {
                    display: flex; align-items: flex-start; justify-content: space-between;
                    gap: 20px; flex-wrap: wrap;
                    margin-bottom: 28px;
                }
                .jobs-header h2 {
                    font-family: var(--font-head);
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin: 0 0 4px;
                }
                .jobs-header p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; }

                .header-actions { display: flex; gap: 10px; flex-wrap: wrap; }

                .btn-pill {
                    display: inline-flex; align-items: center; gap: 8px;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s, box-shadow 0.2s, color 0.2s, border-color 0.2s;
                    white-space: nowrap;
                    border: none;
                }
                .btn-pill.primary {
                    background: var(--accent);
                    color: #fff;
                    box-shadow: 0 4px 18px var(--accent-glow);
                }
                .btn-pill.primary:hover { background: var(--accent-dim); transform: translateY(-1px); }
                .btn-pill.secondary {
                    background: transparent;
                    color: var(--text-secondary);
                    border: 1px solid var(--border);
                }
                .btn-pill.secondary:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }

                /* ── Stat cards ── */
                .stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
                @media(max-width: 900px) { .stat-row { grid-template-columns: repeat(2, 1fr); } }
                .stat-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 14px;
                    padding: 20px;
                    display: flex; align-items: center; gap: 14px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                }
                .stat-icon {
                    width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
                    display: flex; align-items: center; justify-content: center;
                    background: var(--bg-glass2);
                    color: var(--accent);
                    font-size: 1.1rem;
                }
                .stat-meta p { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 4px; }
                .stat-meta h4 { font-family: var(--font-head); font-size: 1.25rem; font-weight: 800; margin: 0; }

                /* ── Card / toolbar ── */
                .table-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: visible;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                }
                .table-toolbar {
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 16px; flex-wrap: wrap;
                    padding: 20px 22px;
                    border-bottom: 1px solid var(--border);
                }
                .search-wrap {
                    display: flex; align-items: center; gap: 8px;
                    background: rgba(0,0,0,0.02);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-pill);
                    padding: 8px 16px;
                    flex: 1;
                    max-width: 340px;
                }
                .search-wrap:focus-within { border-color: var(--border-accent); }
                .search-wrap i { color: var(--text-muted); font-size: 0.95rem; }
                .search-wrap input {
                    background: transparent; border: none; outline: none;
                    color: var(--text-primary); font-size: 0.85rem; width: 100%;
                    font-family: var(--font-body);
                }
                .search-wrap input::placeholder { color: var(--text-muted); }

                .type-filters { display: flex; gap: 8px; flex-wrap: wrap; }
                .type-chip {
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 7px 15px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .type-chip:hover { border-color: var(--border-accent); color: var(--accent); }
                .type-chip.active { background: var(--bg-glass2); border-color: var(--border-accent); color: var(--accent); }

                /* ── Table (overrides bootstrap/datatable defaults) ── */
                .fc-jobs-page table.jobs-table {
                    width: 100% !important;
                    border-collapse: collapse;
                    margin: 0 !important;
                }
                .fc-jobs-page table.jobs-table thead th {
                    text-align: left;
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-muted);
                    font-weight: 600;
                    padding: 14px 22px;
                    border-bottom: 1px solid var(--border);
                    white-space: nowrap;
                    background: transparent !important;
                }
                .fc-jobs-page table.jobs-table tbody tr td {
                    background-color: var(--bg-card) !important;
                    padding: 16px 22px;
                    border-bottom: 1px solid var(--border);
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    vertical-align: middle;
                }
                .fc-jobs-page table.jobs-table tbody tr:last-child td { border-bottom: none; }
                .fc-jobs-page table.jobs-table tbody tr:hover td { background-color: var(--bg-glass) !important; }

                .cell-job { display: flex; align-items: center; gap: 12px; }
                .job-avatar {
                    width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.78rem;
                }
                .cell-job h6 { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    white-space: nowrap;
                }
                .badge-success { background: rgba(0,166,103,0.12); color: var(--accent); }
                .badge-info { background: rgba(47,125,189,0.12); color: var(--info); }
                .badge-warn { background: rgba(179,130,15,0.12); color: var(--warn); }
                .badge-muted { background: rgba(127,149,141,0.14); color: var(--text-muted); }

                .empty-state { text-align: center; padding: 64px 24px; color: var(--text-muted); font-size: 0.9rem; }
                .empty-state i { font-size: 2.2rem; margin-bottom: 12px; display: block; color: var(--text-muted); }

                /* ── Action menu (custom, replaces bootstrap dropdown visuals) ── */
                .action-menu-wrap { position: relative; display: inline-block; }
                .btn-actions {
                    display: inline-flex; align-items: center; gap: 6px;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 7px 16px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .btn-actions:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }
                .action-menu {
                    position: absolute;
                    right: 0;
                    top: calc(100% + 6px);
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
                    min-width: 150px;
                    padding: 6px;
                    z-index: 20;
                }
                .action-menu button, .action-menu a {
                    display: flex; align-items: center; gap: 8px;
                    width: 100%;
                    background: transparent;
                    border: none;
                    text-align: left;
                    padding: 9px 10px;
                    border-radius: 8px;
                    font-size: 0.82rem;
                    font-weight: 500;
                    color: var(--text-secondary);
                    text-decoration: none;
                    cursor: pointer;
                    transition: background 0.15s, color 0.15s;
                }
                .action-menu button:hover, .action-menu a:hover { background: var(--bg-glass2); color: var(--accent); }
                .action-menu button.danger:hover { background: rgba(201,74,63,0.1); color: var(--danger); }

                /* ── Pagination ── */
                .table-footer { padding: 18px 22px; display: flex; justify-content: flex-end; border-top: 1px solid var(--border); }
                .pagination-nav { display: flex; gap: 6px; flex-wrap: wrap; }
                .page-link {
                    min-width: 36px; height: 36px;
                    display: inline-flex; align-items: center; justify-content: center;
                    padding: 0 10px;
                    border-radius: 8px;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .page-link:hover { border-color: var(--border-accent); color: var(--accent); }
                .page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .page-link.disabled { opacity: 0.35; pointer-events: none; }

                @media(max-width: 768px) {
                    .jobs-table-wrap { overflow-x: auto; }
                    .fc-jobs-page table.jobs-table { white-space: nowrap; }
                }
            `}</style>

            <div className="fc-jobs-page">
                <div className="jobs-header">
                    <div>
                        <h2>Job Listings</h2>
                        <p>Manage open positions, categories, and applicant-facing job details.</p>
                    </div>
                    <div className="header-actions">
                        <Link href={route('admin.job-categories.index')} className="btn-pill secondary">
                            <i className="bi bi-tags"></i> Job Categories
                        </Link>
                        <Link href={route('admin.jobs.create')} className="btn-pill primary">
                            <i className="bi bi-plus-lg"></i> Add Job
                        </Link>
                    </div>
                </div>

                {/* ═══════════════ STATS ═══════════════ */}
                <div className="stat-row">
                    <div className="stat-card">
                        <div className="stat-icon"><i className="bi bi-briefcase"></i></div>
                        <div className="stat-meta">
                            <p>Total Jobs</p>
                            <h4>{stats.total}</h4>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon"><i className="bi bi-diagram-3"></i></div>
                        <div className="stat-meta">
                            <p>Job Types</p>
                            <h4>{stats.types}</h4>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon"><i className="bi bi-geo-alt"></i></div>
                        <div className="stat-meta">
                            <p>Locations</p>
                            <h4>{stats.locations}</h4>
                        </div>
                    </div>
                </div>

                {/* ═══════════════ TABLE ═══════════════ */}
                <div className="table-card">
                    <div className="table-toolbar">
                        <div className="search-wrap">
                            <i className="bi bi-search"></i>
                            <input
                                type="text"
                                placeholder="Search by title or location…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="type-filters">
                            {[
                                { key: '', label: 'All' },
                                { key: 'full-time', label: 'Full-Time' },
                                { key: 'part-time', label: 'Part-Time' },
                                { key: 'contract', label: 'Contract' },
                                { key: 'internship', label: 'Internship' },
                            ].map((opt) => (
                                <button
                                    key={opt.key || 'all'}
                                    className={`type-chip ${typeFilter === opt.key ? 'active' : ''}`}
                                    onClick={() => setTypeFilter(opt.key)}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="jobs-table-wrap">
                        <table className="datatable-init nowrap jobs-table" ref={tableRef}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Location</th>
                                    <th>Experience</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visibleJobs.length > 0 ? visibleJobs.map((job, index) => (
                                    <tr key={job.id}>
                                        <td>{(jobs.from ?? 1) + index}</td>
                                        <td>
                                            <div className="cell-job">
                                                <div className="job-avatar">{initials(job.title)}</div>
                                                <h6>{job.title}</h6>
                                            </div>
                                        </td>
                                        <td><TypeBadge type={job.type} /></td>
                                        <td>{job.location ?? '—'}</td>
                                        <td>{job.experience_level ?? '—'}</td>
                                        <td>
                                            <div
                                                className="action-menu-wrap"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <button
                                                    className="btn-actions"
                                                    onClick={() => setOpenMenuId(openMenuId === job.id ? null : job.id)}
                                                >
                                                    Actions <i className="bi bi-chevron-down"></i>
                                                </button>
                                                {openMenuId === job.id && (
                                                    <div className="action-menu">
                                                        <Link href={route('admin.jobs.show', job.id)}>
                                                            <i className="bi bi-eye"></i> View
                                                        </Link>
                                                        <Link href={route('admin.jobs.edit', job.id)}>
                                                            <i className="bi bi-pencil"></i> Edit
                                                        </Link>
                                                        <button
                                                            type="button"
                                                            className="danger"
                                                            onClick={() => handleDelete(job)}
                                                        >
                                                            <i className="bi bi-trash"></i> Delete
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6">
                                            <div className="empty-state">
                                                <i className="bi bi-inbox"></i>
                                                No jobs found.
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {jobs.links && jobs.links.length > 3 && (
                        <div className="table-footer">
                            <div className="pagination-nav">
                                {jobs.links.map((link, i) => (
                                    link.url ? (
                                        <Link
                                            key={i}
                                            href={link.url}
                                            preserveState
                                            className={`page-link ${link.active ? 'active' : ''}`}
                                        >
                                            {decodePaginationLabel(link.label)}
                                        </Link>
                                    ) : (
                                        <span key={i} className="page-link disabled">
                                            {decodePaginationLabel(link.label)}
                                        </span>
                                    )
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}