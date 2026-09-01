import React, { useState } from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
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

function timeAgo(dateString) {
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
    const intervals = [
        ['year', 31536000], ['month', 2592000], ['week', 604800],
        ['day', 86400], ['hour', 3600], ['minute', 60],
    ];
    for (const [label, secondsInUnit] of intervals) {
        const count = Math.floor(seconds / secondsInUnit);
        if (count >= 1) return `${count} ${label}${count > 1 ? 's' : ''} ago`;
    }
    return 'just now';
}

function ApplicationStatusBadge({ status }) {
    const s = (status ?? 'pending').toLowerCase();
    const map = {
        pending: { cls: 'badge-warn', label: 'Pending' },
        accepted: { cls: 'badge-success', label: 'Accepted' },
        rejected: { cls: 'badge-danger', label: 'Rejected' },
    };
    const meta = map[s] ?? { cls: 'badge-muted', label: status ?? 'Pending' };
    return <span className={`badge ${meta.cls}`}>{meta.label}</span>;
}

function ApplicationItem({ application }) {
    const [modal, setModal] = useState(null); // 'accept' | 'reject' | null
    const { data, setData, post, processing } = useForm({ message: '' });

    function handleAccept() {
        router.post(route('admin.applications.accept', application.id), {}, {
            onSuccess: () => setModal(null),
        });
    }

    function handleReject(e) {
        e.preventDefault();
        post(route('admin.applications.reject', application.id), {
            onSuccess: () => setModal(null),
        });
    }

    return (
        <>
            <div className="app-item">
                <div className="app-item-top">
                    <div className="cell-person">
                        <div className="cell-avatar">{initials(application.name)}</div>
                        <div>
                            <h6>{application.name ?? 'Unknown Applicant'}</h6>
                            <p>{timeAgo(application.created_at)}</p>
                        </div>
                    </div>
                    <ApplicationStatusBadge status={application.status} />
                </div>

                {application.message && <p className="app-message">{application.message}</p>}

                {application.portfolio_url && (
                    <a href={application.portfolio_url} target="_blank" rel="noreferrer" className="app-link">
                        <i className="bi bi-link-45deg"></i> View Portfolio
                    </a>
                )}

                <div className="app-actions">
                    <button type="button" className="btn-pill success-outline" onClick={() => setModal('accept')}>
                        Accept
                    </button>
                    <button type="button" className="btn-pill danger-outline" onClick={() => setModal('reject')}>
                        Reject
                    </button>
                </div>
            </div>

            {modal === 'accept' && (
                <div className="fc-modal-backdrop" onClick={() => setModal(null)}>
                    <div className="fc-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="fc-modal-header accent-success">
                            <h5>Accept Application</h5>
                            <button className="btn-close" onClick={() => setModal(null)}>✕</button>
                        </div>
                        <div className="fc-modal-body">
                            <p>Are you sure you want to <strong className="text-success">accept</strong> this application from <strong>{application.name}</strong>?</p>
                        </div>
                        <div className="fc-modal-footer">
                            <button className="btn-pill" onClick={() => setModal(null)}>Cancel</button>
                            <button className="btn-pill success" onClick={handleAccept}>Confirm Accept</button>
                        </div>
                    </div>
                </div>
            )}

            {modal === 'reject' && (
                <div className="fc-modal-backdrop" onClick={() => setModal(null)}>
                    <div className="fc-modal" onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={handleReject}>
                            <div className="fc-modal-header accent-danger">
                                <h5>Reject Application</h5>
                                <button type="button" className="btn-close" onClick={() => setModal(null)}>✕</button>
                            </div>
                            <div className="fc-modal-body">
                                <p>Are you sure you want to <strong className="text-danger">reject</strong> this application from <strong>{application.name}</strong>?</p>
                                <label className="form-label">Reason (optional)</label>
                                <textarea
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    className="form-control-dark"
                                    rows="3"
                                />
                            </div>
                            <div className="fc-modal-footer">
                                <button type="button" className="btn-pill" onClick={() => setModal(null)}>Cancel</button>
                                <button type="submit" className="btn-pill danger" disabled={processing}>
                                    {processing ? 'Rejecting…' : 'Confirm Reject'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default function Show({ project }) {
    const applications = project.applications ?? [];
    const [verifying, setVerifying] = useState(false);

    function handleVerify() {
        setVerifying(true);
        router.post(route('admin.projects.verify', project.id), {}, {
            onFinish: () => setVerifying(false),
        });
    }

    return (
        <AppLayout>
            <Head title="Project Details" />

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
                }

                .fc-proj-show, .fc-proj-show * { box-sizing: border-box; }
                .fc-proj-show { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); padding: 32px; min-height: 100%; }
                @media(max-width: 768px) { .fc-proj-show { padding: 20px 16px; } }

                .show-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 20px; align-items: start; max-width: 1100px; margin: 0 auto; }
                @media(max-width: 900px) { .show-grid { grid-template-columns: 1fr; } }

                .panel { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: 0 1px 3px rgba(0,0,0,0.04); overflow: hidden; }

                .panel-header { padding: 22px 26px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 12px; }
                .panel-header h3 { font-family: var(--font-head); font-size: 1.2rem; font-weight: 800; margin: 0; }
                .panel-header h5 { font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; margin: 0; display: flex; align-items: center; gap: 8px; }
                .panel-header h5 i { color: var(--accent); }

                .panel-body { padding: 22px 26px; }
                .proj-description { font-size: 0.9rem; line-height: 1.7; color: var(--text-secondary); margin: 0 0 20px; }

                .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 22px; }
                .info-item { background: var(--bg-glass); border: 1px solid var(--border); border-radius: 12px; padding: 12px 14px; }
                .info-item p { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 5px; }
                .info-item h6 { font-size: 0.88rem; font-weight: 700; margin: 0; }

                .badge { display: inline-flex; align-items: center; gap: 5px; border-radius: var(--radius-pill); padding: 5px 13px; font-size: 0.74rem; font-weight: 700; white-space: nowrap; }
                .badge-success { background: rgba(0,166,103,0.12); color: var(--accent); }
                .badge-danger { background: rgba(201,74,63,0.12); color: var(--danger); }
                .badge-warn { background: rgba(179,130,15,0.12); color: var(--warn); }
                .badge-muted { background: rgba(127,149,141,0.14); color: var(--text-muted); }
                .badge-count { background: rgba(255,255,255,0.25); color: #fff; }

                .btn-pill { display: inline-flex; align-items: center; gap: 8px; border-radius: var(--radius-pill); padding: 10px 20px; font-family: var(--font-head); font-size: 0.82rem; font-weight: 700; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s, box-shadow 0.2s, color 0.2s, border-color 0.2s; white-space: nowrap; border: 1px solid var(--border); background: transparent; color: var(--text-secondary); }
                .btn-pill:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }
                .btn-pill:disabled { opacity: 0.6; cursor: not-allowed; }
                .btn-pill.success { background: var(--accent); color: #fff; border: none; box-shadow: 0 4px 18px var(--accent-glow); }
                .btn-pill.success:hover { background: var(--accent-dim); color: #fff; }
                .btn-pill.success-outline { border-color: var(--border-accent); color: var(--accent); }
                .btn-pill.success-outline:hover { background: var(--bg-glass2); }
                .btn-pill.danger { background: var(--danger); color: #fff; border: none; }
                .btn-pill.danger:hover { background: #a8382e; color: #fff; }
                .btn-pill.danger-outline { border-color: rgba(201,74,63,0.3); color: var(--danger); }
                .btn-pill.danger-outline:hover { background: rgba(201,74,63,0.08); }

                .verify-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 6px; }

                /* ── Applications list ── */
                .app-list { display: flex; flex-direction: column; gap: 14px; padding: 22px 26px; }
                .app-item { border: 1px solid var(--border); border-radius: 14px; padding: 16px 18px; background: var(--bg-glass); }
                .app-item-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 10px; }
                .cell-person { display: flex; align-items: center; gap: 10px; }
                .cell-avatar { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; background: var(--bg-glass2); border: 1px solid var(--border-accent); color: var(--accent); display: flex; align-items: center; justify-content: center; font-family: var(--font-head); font-weight: 700; font-size: 0.74rem; }
                .cell-person h6 { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0 0 2px; }
                .cell-person p { font-size: 0.72rem; color: var(--text-muted); margin: 0; }
                .app-message { font-size: 0.83rem; color: var(--text-secondary); margin: 0 0 10px; line-height: 1.55; }
                .app-link { display: inline-flex; align-items: center; gap: 5px; font-size: 0.8rem; color: var(--accent); text-decoration: none; margin-bottom: 10px; }
                .app-link:hover { text-decoration: underline; }
                .app-actions { display: flex; gap: 8px; margin-top: 4px; }
                .empty-apps { text-align: center; padding: 40px 20px; color: var(--text-muted); font-size: 0.88rem; }
                .empty-apps i { font-size: 1.8rem; display: block; margin-bottom: 10px; }

                /* ── Modal ── */
                .fc-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: flex; align-items: center; justify-content: center; z-index: 1050; padding: 1.5rem; }
                .fc-modal { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; width: 100%; max-width: 420px; box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
                .fc-modal-header { padding: 18px 22px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); }
                .fc-modal-header h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; margin: 0; }
                .fc-modal-header.accent-success { background: rgba(0,166,103,0.06); }
                .fc-modal-header.accent-danger { background: rgba(201,74,63,0.06); }
                .fc-modal-header .btn-close { background: transparent; border: none; font-size: 1rem; cursor: pointer; color: var(--text-secondary); }
                .fc-modal-body { padding: 20px 22px; font-size: 0.87rem; color: var(--text-secondary); line-height: 1.6; }
                .fc-modal-body .text-success { color: var(--accent); }
                .fc-modal-body .text-danger { color: var(--danger); }
                .fc-modal-footer { padding: 16px 22px 20px; display: flex; justify-content: flex-end; gap: 10px; }
                .form-label { font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); margin: 14px 0 6px; display: block; }
                .form-control-dark { width: 100%; background: rgba(0,0,0,0.02); border: 1px solid var(--border); border-radius: 10px; color: var(--text-primary); padding: 10px 12px; font-family: var(--font-body); font-size: 0.85rem; outline: none; resize: vertical; }
                .form-control-dark:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }
            `}</style>

            <div className="fc-proj-show">
                <div className="show-grid">
                    {/* ═══════ PROJECT INFO ═══════ */}
                    <div className="panel">
                        <div className="panel-header">
                            <h3>{project.title}</h3>
                            <StatusBadgeLocal status={project.status} />
                        </div>
                        <div className="panel-body">
                            {project.description && <p className="proj-description">{project.description}</p>}

                            <div className="info-grid">
                                <div className="info-item">
                                    <p>Category</p>
                                    <h6>{project.category ?? '—'}</h6>
                                </div>
                                <div className="info-item">
                                    <p>Location</p>
                                    <h6>{project.location ?? 'Remote'}</h6>
                                </div>
                                <div className="info-item">
                                    <p>Budget</p>
                                    <h6>{formatBudget(project)}</h6>
                                </div>
                                <div className="info-item">
                                    <p>Verified</p>
                                    <h6>{project.verified ? 'Yes' : 'No'}</h6>
                                </div>
                            </div>

                            <div className="verify-row">
                                {!project.verified ? (
                                    <button type="button" className="btn-pill success" onClick={handleVerify} disabled={verifying}>
                                        <i className="bi bi-check-circle"></i> {verifying ? 'Verifying…' : 'Verify Project'}
                                    </button>
                                ) : (
                                    <span className="badge badge-success"><i className="bi bi-patch-check-fill"></i> Verified</span>
                                )}
                                <Link href={route('admin.projects.index')} className="btn-pill">
                                    <i className="bi bi-arrow-left"></i> Back to Projects
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* ═══════ APPLICATIONS ═══════ */}
                    <div className="panel">
                        <div className="panel-header">
                            <h5><i className="bi bi-people"></i> Project Applications</h5>
                            <span className="badge badge-muted">{applications.length}</span>
                        </div>

                        {applications.length === 0 ? (
                            <div className="empty-apps">
                                <i className="bi bi-inbox"></i>
                                No one has applied yet.
                            </div>
                        ) : (
                            <div className="app-list">
                                {applications.map((application) => (
                                    <ApplicationItem key={application.id} application={application} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function StatusBadgeLocal({ status }) {
    const s = (status ?? '').toLowerCase();
    const map = {
        open: { cls: 'badge-success', label: 'Open' },
        in_progress: { cls: 'badge-warn', label: 'In Progress' },
        completed: { cls: 'badge-muted', label: 'Completed' },
        cancelled: { cls: 'badge-danger', label: 'Cancelled' },
        closed: { cls: 'badge-danger', label: 'Closed' },
    };
    const meta = map[s] ?? { cls: 'badge-muted', label: status ? status.charAt(0).toUpperCase() + status.slice(1) : '—' };
    return <span className={`badge ${meta.cls}`}>{meta.label}</span>;
}