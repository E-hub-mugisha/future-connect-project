import React, { useEffect, useRef, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

function initials(name) {
    if (!name) return '—';
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join('');
}

function formatBudget(project) {
    if (project.budget_amount == null) return '—';
    const currency = project.budget_currency ?? '';
    const amount = Number(project.budget_amount).toLocaleString();
    return currency ? `${currency} ${amount}` : amount;
}

function StatusBadge({ status }) {
    const s = (status ?? '').toLowerCase();
    const map = {
        open: { cls: 'badge-success', label: 'Open' },
        in_progress: { cls: 'badge-info', label: 'In Progress' },
        completed: { cls: 'badge-muted', label: 'Completed' },
        cancelled: { cls: 'badge-danger', label: 'Cancelled' },
        closed: { cls: 'badge-danger', label: 'Closed' },
    };
    const meta = map[s] ?? { cls: 'badge-muted', label: status ? status.charAt(0).toUpperCase() + status.slice(1) : '—' };
    return <span className={`badge ${meta.cls}`}>{meta.label}</span>;
}

export default function Index({ projects }) {
    const tableRef = useRef(null);
    const projectList = Array.isArray(projects) ? projects : (projects?.data ?? []);
    const [openMenuId, setOpenMenuId] = useState(null);

    useEffect(() => {
        let instance;
        if (window.$ && window.$.fn && window.$.fn.DataTable && tableRef.current) {
            instance = window.$(tableRef.current).DataTable({
                destroy: true,
                autoWidth: false,
            });
        }
        return () => {
            instance?.destroy();
        };
    }, [projectList]);

    useEffect(() => {
        function onDocClick() {
            setOpenMenuId(null);
        }
        document.addEventListener('click', onDocClick);
        return () => document.removeEventListener('click', onDocClick);
    }, []);

    function handleVerify(project) {
        router.post(route('admin.projects.verify', project.id));
    }

    function handleDelete(project) {
        if (confirm('Delete this project?')) {
            router.delete(route('admin.projects.destroy', project.id));
        }
    }

    const stats = {
        total: projects?.total ?? projectList.length,
        verified: projectList.filter((p) => p.verified).length,
        pending: projectList.filter((p) => !p.verified).length,
    };

    return (
        <AppLayout>
            <Head title="Manage Projects" />

            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
                rel="stylesheet"
            />

            <style>{`
                :root {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #ffffff;
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

                .fc-proj-page, .fc-proj-page * { box-sizing: border-box; }
                .fc-proj-page { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); padding: 32px; min-height: 100%; }
                @media(max-width: 768px) { .fc-proj-page { padding: 20px 16px; } }

                .proj-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 28px; }
                .proj-header h2 { font-family: var(--font-head); font-size: 1.5rem; font-weight: 800; margin: 0 0 4px; }
                .proj-header p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; }

                .btn-pill { display: inline-flex; align-items: center; gap: 8px; border-radius: var(--radius-pill); padding: 11px 22px; font-family: var(--font-head); font-size: 0.85rem; font-weight: 700; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s, box-shadow 0.2s, color 0.2s, border-color 0.2s; white-space: nowrap; border: none; }
                .btn-pill.primary { background: var(--accent); color: #fff; box-shadow: 0 4px 18px var(--accent-glow); }
                .btn-pill.primary:hover { background: var(--accent-dim); transform: translateY(-1px); }

                .stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
                @media(max-width: 900px) { .stat-row { grid-template-columns: repeat(2, 1fr); } }
                .stat-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
                .stat-icon { width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: var(--bg-glass2); color: var(--accent); font-size: 1.1rem; }
                .stat-card.pending .stat-icon { background: rgba(232,185,74,0.12); color: var(--warn); }
                .stat-meta p { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 4px; }
                .stat-meta h4 { font-family: var(--font-head); font-size: 1.25rem; font-weight: 800; margin: 0; }

                .table-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: visible; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }

                .fc-proj-page table.proj-table { width: 100% !important; border-collapse: collapse; margin: 0 !important; }
                .fc-proj-page table.proj-table thead th { text-align: left; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); font-weight: 600; padding: 14px 22px; border-bottom: 1px solid var(--border); white-space: nowrap; background: transparent !important; }
                .fc-proj-page table.proj-table tbody tr td { background-color: var(--bg-card) !important; padding: 16px 22px; border-bottom: 1px solid var(--border); font-size: 0.85rem; color: var(--text-secondary); vertical-align: middle; }
                .fc-proj-page table.proj-table tbody tr:last-child td { border-bottom: none; }
                .fc-proj-page table.proj-table tbody tr:hover td { background-color: var(--bg-glass) !important; }

                .cell-title h6 { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0 0 3px; }
                .cell-title p { font-size: 0.78rem; color: var(--text-muted); margin: 0; max-width: 260px; }

                .cell-person { display: flex; align-items: center; gap: 12px; }
                .cell-avatar { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; background: var(--bg-glass2); border: 1px solid var(--border-accent); color: var(--accent); display: flex; align-items: center; justify-content: center; font-family: var(--font-head); font-weight: 700; font-size: 0.74rem; }
                .cell-person h6 { font-size: 0.83rem; font-weight: 700; color: var(--text-primary); margin: 0 0 2px; }
                .cell-person p { font-size: 0.74rem; color: var(--text-muted); margin: 0; }

                .cell-meta h6 { font-size: 0.83rem; font-weight: 700; color: var(--text-primary); margin: 0 0 2px; }
                .cell-meta p { font-size: 0.74rem; color: var(--text-muted); margin: 0; }

                .badge { display: inline-flex; align-items: center; gap: 5px; border-radius: var(--radius-pill); padding: 4px 12px; font-size: 0.72rem; font-weight: 700; white-space: nowrap; }
                .badge-success { background: rgba(0,166,103,0.12); color: var(--accent); }
                .badge-info { background: rgba(47,125,189,0.12); color: var(--info); }
                .badge-warn { background: rgba(179,130,15,0.12); color: var(--warn); }
                .badge-danger { background: rgba(201,74,63,0.12); color: var(--danger); }
                .badge-muted { background: rgba(127,149,141,0.14); color: var(--text-muted); }

                .action-menu-wrap { position: relative; display: inline-block; }
                .btn-actions { display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--border); background: transparent; color: var(--text-secondary); border-radius: var(--radius-pill); padding: 7px 16px; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: border-color 0.2s, color 0.2s, background 0.2s; }
                .btn-actions:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }
                .action-menu { position: absolute; right: 0; top: calc(100% + 6px); background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; box-shadow: 0 12px 30px rgba(0,0,0,0.12); min-width: 150px; padding: 6px; z-index: 20; }
                .action-menu button, .action-menu a { display: flex; align-items: center; gap: 8px; width: 100%; background: transparent; border: none; text-align: left; padding: 9px 10px; border-radius: 8px; font-size: 0.82rem; font-weight: 500; color: var(--text-secondary); text-decoration: none; cursor: pointer; transition: background 0.15s, color 0.15s; }
                .action-menu button:hover, .action-menu a:hover { background: var(--bg-glass2); color: var(--accent); }
                .action-menu button.danger:hover { background: rgba(201,74,63,0.1); color: var(--danger); }

                .table-footer { padding: 18px 22px; display: flex; justify-content: flex-end; border-top: 1px solid var(--border); }
                .pagination-nav { display: flex; gap: 6px; flex-wrap: wrap; }
                .page-link { min-width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center; padding: 0 10px; border-radius: 8px; border: 1px solid var(--border); background: transparent; color: var(--text-secondary); font-size: 0.8rem; font-weight: 600; text-decoration: none; transition: border-color 0.2s, color 0.2s, background 0.2s; }
                .page-link:hover { border-color: var(--border-accent); color: var(--accent); }
                .page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .page-link.disabled { opacity: 0.35; pointer-events: none; }

                @media(max-width: 768px) {
                    .proj-table-wrap { overflow-x: auto; }
                    .fc-proj-page table.proj-table { white-space: nowrap; }
                }
            `}</style>

            <div className="fc-proj-page">
                <div className="proj-header">
                    <div>
                        <h2>Manage Projects</h2>
                        <p>Review submitted projects, verify listings, and manage their status.</p>
                    </div>
                    <Link href={route('admin.projects.create')} className="btn-pill primary">
                        <i className="bi bi-plus-circle"></i> Add Project
                    </Link>
                </div>

                <div className="stat-row">
                    <div className="stat-card">
                        <div className="stat-icon"><i className="bi bi-kanban"></i></div>
                        <div className="stat-meta"><p>Total Projects</p><h4>{stats.total}</h4></div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon"><i className="bi bi-patch-check"></i></div>
                        <div className="stat-meta"><p>Verified</p><h4>{stats.verified}</h4></div>
                    </div>
                    <div className="stat-card pending">
                        <div className="stat-icon"><i className="bi bi-hourglass-split"></i></div>
                        <div className="stat-meta"><p>Pending Verification</p><h4>{stats.pending}</h4></div>
                    </div>
                </div>

                <div className="table-card">
                    <div className="proj-table-wrap">
                        <table className="datatable-init nowrap proj-table" ref={tableRef}>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Owner</th>
                                    <th>Category</th>
                                    <th>Budget</th>
                                    <th>Status</th>
                                    <th>Verified</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectList.map((project) => (
                                    <tr key={project.id}>
                                        <td>
                                            <div className="cell-title">
                                                <h6>{project.title}</h6>
                                                <p>
                                                    {project.description
                                                        ? (project.description.length > 40
                                                            ? `${project.description.slice(0, 40)}…`
                                                            : project.description)
                                                        : ''}
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cell-person">
                                                <div className="cell-avatar">{initials(project.user?.name)}</div>
                                                <div>
                                                    <h6>{project.user?.name ?? '—'}</h6>
                                                    <p>{project.user?.email ?? ''}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cell-meta">
                                                <h6>{project.category ?? '—'}</h6>
                                                <p>{project.location ?? 'Remote'}</p>
                                            </div>
                                        </td>
                                        <td>{formatBudget(project)}</td>
                                        <td><StatusBadge status={project.status} /></td>
                                        <td>
                                            {project.verified ? (
                                                <span className="badge badge-success">Yes</span>
                                            ) : (
                                                <span className="badge badge-warn">No</span>
                                            )}
                                        </td>
                                        <td>
                                            <div className="action-menu-wrap" onClick={(e) => e.stopPropagation()}>
                                                <button
                                                    className="btn-actions"
                                                    onClick={() => setOpenMenuId(openMenuId === project.id ? null : project.id)}
                                                >
                                                    Actions <i className="bi bi-chevron-down"></i>
                                                </button>
                                                {openMenuId === project.id && (
                                                    <div className="action-menu">
                                                        <Link href={route('admin.projects.show', project.id)}>
                                                            <i className="bi bi-eye"></i> View
                                                        </Link>
                                                        <Link href={route('admin.projects.edit', project.id)}>
                                                            <i className="bi bi-pencil"></i> Edit
                                                        </Link>
                                                        {!project.verified && (
                                                            <button type="button" onClick={() => handleVerify(project)}>
                                                                <i className="bi bi-patch-check"></i> Verify
                                                            </button>
                                                        )}
                                                        <button type="button" className="danger" onClick={() => handleDelete(project)}>
                                                            <i className="bi bi-trash"></i> Delete
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {projects?.links && projects.links.length > 3 && (
                        <div className="table-footer">
                            <div className="pagination-nav">
                                {projects.links.map((link, i) => (
                                    link.url ? (
                                        <Link
                                            key={i}
                                            href={link.url}
                                            preserveState
                                            className={`page-link ${link.active ? 'active' : ''}`}
                                        >
                                            <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                        </Link>
                                    ) : (
                                        <span key={i} className="page-link disabled" dangerouslySetInnerHTML={{ __html: link.label }} />
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