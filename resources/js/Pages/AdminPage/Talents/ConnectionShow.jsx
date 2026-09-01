import React from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const routes = {
    connectionsIndex: '/admin/connections',
    connectionRespond: (id) => `/admin/connections/${id}/respond`,
    connectionAccept: (id) => `/admin/connections/${id}/accept`,
};

function StatusBadge({ status, map }) {
    const meta = map[status] ?? map.default;
    return (
        <span className={`badge ${meta.className}`}>
            <i className={`ti ${meta.icon}`} /> {meta.label}
        </span>
    );
}

const CONNECTION_STATUS_MAP = {
    accepted: { label: 'Accepted', icon: 'ti-check', className: 'badge-success' },
    rejected: { label: 'Rejected', icon: 'ti-x', className: 'badge-danger' },
    default: { label: 'Pending', icon: 'ti-clock', className: 'badge-neutral' },
};

export default function ConnectionShow({ connection }) {
    const isAccepted = connection.status === 'accepted';

    const respondForm = useForm({
        response: connection.response ?? '',
    });

    const submitResponse = (e) => {
        e.preventDefault();
        respondForm.post(routes.connectionRespond(connection.id), {
            preserveScroll: true,
        });
    };

    const acceptForm = useForm({});

    const submitAccept = (e) => {
        e.preventDefault();
        acceptForm.post(routes.connectionAccept(connection.id), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title={`Connection Request #${connection.id}`} />
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

                .fc-admin-page, .fc-admin-page * { box-sizing: border-box; }
                .fc-admin-page { background: var(--bg-deep); color: var(--text-primary); font-family: var(--font-body); min-height: 100%; }

                .admin-page { padding: 32px; }
                @media(max-width: 768px) { .admin-page { padding: 20px 16px; } }
                .admin-page .container-narrow { max-width: 880px; margin: 0 auto; }

                .admin-header {
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 16px; flex-wrap: wrap;
                    margin-bottom: 24px;
                }
                .admin-header h2 { font-family: var(--font-head); font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin: 0 0 4px; }
                .admin-header p { font-size: 0.82rem; color: var(--text-secondary); margin: 0; }

                .btn-back {
                    display: inline-flex; align-items: center; gap: 8px;
                    border: 1px solid var(--border);
                    background: var(--bg-card);
                    color: var(--text-secondary);
                    border-radius: var(--radius-pill);
                    padding: 9px 18px;
                    font-size: 0.82rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: border-color 0.2s, color 0.2s;
                    white-space: nowrap;
                }
                .btn-back:hover { border-color: var(--border-accent); color: var(--accent); }

                .info-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 26px;
                    margin-bottom: 20px;
                }
                .info-card-title {
                    font-family: var(--font-head);
                    font-size: 1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin: 0 0 18px;
                    display: flex; align-items: center; gap: 10px;
                }
                .info-card-title i { color: var(--accent); }

                .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
                @media(max-width: 700px) { .info-grid { grid-template-columns: 1fr; } }

                .info-block h6 {
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0 0 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                }
                .info-row { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--border); font-size: 0.85rem; }
                .info-row:last-child { border-bottom: none; }
                .info-row span:first-child { color: var(--text-muted); }
                .info-row span:last-child { color: var(--text-primary); font-weight: 500; text-align: right; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius-pill);
                    padding: 4px 12px;
                    font-size: 0.75rem;
                    font-weight: 700;
                }
                .badge-success { background: rgba(72,213,151,0.14); color: var(--accent); }
                .badge-danger { background: rgba(224,100,90,0.14); color: var(--danger); }
                .badge-pending { background: rgba(232,185,74,0.14); color: var(--warn); }
                .badge-neutral { background: var(--bg-glass); color: var(--text-secondary); border: 1px solid var(--border); }

                .response-note {
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    border-radius: 12px;
                    padding: 14px 16px;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin-top: 14px;
                }
                .response-note strong { color: var(--text-primary); }

                .actions-card-header {
                    display: flex; align-items: center; gap: 10px;
                    margin-bottom: 20px;
                }
                .actions-card-header i { color: var(--accent); font-size: 1.1rem; }
                .actions-card-header h5 { font-family: var(--font-head); font-size: 1rem; font-weight: 800; margin: 0; }

                .form-label { font-size: 0.8rem; font-weight: 500; color: var(--text-secondary); margin-bottom: 6px; display: block; }
                .form-control-dark {
                    width: 100%;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid var(--border);
                    border-radius: 10px;
                    color: var(--text-primary);
                    padding: 11px 14px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.2s;
                    margin-bottom: 14px;
                    resize: vertical;
                }
                .form-control-dark:focus { border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); }
                .form-control-dark::placeholder { color: var(--text-muted); }

                .action-divider { border: none; border-top: 1px solid var(--border); margin: 24px 0; }

                .btn-send {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s, box-shadow 0.2s;
                    box-shadow: 0 4px 18px var(--accent-glow);
                }
                .btn-send:hover { background: var(--accent-dim); }
                .btn-send:disabled { opacity: 0.6; cursor: not-allowed; }

                .btn-accept {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s;
                    box-shadow: 0 4px 18px var(--accent-glow);
                }
                .btn-accept:disabled {
                    background: var(--bg-glass);
                    color: var(--text-muted);
                    box-shadow: none;
                    cursor: not-allowed;
                    border: 1px solid var(--border);
                }

                .accepted-flag {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(72,213,151,0.14);
                    color: var(--accent);
                    border: 1px solid var(--border-accent);
                    border-radius: var(--radius-pill);
                    padding: 10px 20px;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.9rem;
                }

                /* ── DARK THEME (opt-in override) ── */
                [data-h-theme="dark"] {
                    --bg-deep:    #0e1618;
                    --bg-card:    #131e21;
                    --bg-glass:   rgba(255,255,255,0.035);
                    --bg-glass2:  rgba(0,166,103,0.07);
                    --accent:     #48d597;
                    --accent-dim: #008f59;
                    --accent-glow:rgba(0,166,103,0.25);
                    --text-primary:   #f0f4f3;
                    --text-secondary: #8da4a0;
                    --text-muted:     #4d6460;
                    --border:     rgba(255,255,255,0.07);
                    --border-accent: rgba(0,166,103,0.3);
                    --warn: #e8b94a;
                    --danger: #e0645a;
                }
                [data-h-theme="dark"] .form-control-dark { background: rgba(255,255,255,0.04); }
            `}</style>

            <div className="fc-admin-page">
                <div className="admin-page">
                    <div className="container-narrow">
                        <div className="admin-header">
                            <div>
                                <h2>Connection Request #{connection.id}</h2>
                                <p>Review talent and requester details, and take action.</p>
                            </div>
                            <Link href={routes.connectionsIndex} className="btn-back">
                                <i className="ti ti-arrow-left" /> Back
                            </Link>
                        </div>

                        {/* ═══════════════ TALENT / REQUESTER INFO ═══════════════ */}
                        <div className="info-card">
                            <div className="info-grid">
                                <div className="info-block">
                                    <h6>Talent Info</h6>
                                    <div className="info-row">
                                        <span>Name</span>
                                        <span>{connection.talent?.name}</span>
                                    </div>
                                    <div className="info-row">
                                        <span>Email</span>
                                        <span>{connection.talent?.email ?? 'N/A'}</span>
                                    </div>
                                    <div className="info-row">
                                        <span>Skill</span>
                                        <span>{connection.talent?.skill ?? 'N/A'}</span>
                                    </div>
                                </div>
                                <div className="info-block">
                                    <h6>Requester Info</h6>
                                    <div className="info-row">
                                        <span>Name</span>
                                        <span>{connection.name}</span>
                                    </div>
                                    <div className="info-row">
                                        <span>Email</span>
                                        <span>{connection.email}</span>
                                    </div>
                                    <div className="info-row">
                                        <span>Message</span>
                                        <span>{connection.message ?? 'N/A'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ═══════════════ CONNECTION STATUS ═══════════════ */}
                        <div className="info-card">
                            <h5 className="info-card-title">
                                <i className="ti ti-plug-connected" /> Connection Status
                            </h5>
                            <div className="info-row" style={{ borderBottom: 'none' }}>
                                <span>Current Status</span>
                                <span><StatusBadge status={connection.status} map={CONNECTION_STATUS_MAP} /></span>
                            </div>
                            {connection.response && (
                                <div className="response-note">
                                    <strong>Admin Response:</strong> {connection.response}
                                </div>
                            )}
                        </div>

                        {/* ═══════════════ ADMIN ACTIONS ═══════════════ */}
                        <div className="info-card">
                            <div className="actions-card-header">
                                <i className="ti ti-settings" />
                                <h5>Admin Actions</h5>
                            </div>

                            <form onSubmit={submitResponse}>
                                <label className="form-label">Send a Message to Requester</label>
                                <textarea
                                    className="form-control-dark"
                                    rows={4}
                                    placeholder="Write your response…"
                                    value={respondForm.data.response}
                                    onChange={(e) => respondForm.setData('response', e.target.value)}
                                />
                                <button type="submit" className="btn-send" disabled={respondForm.processing}>
                                    <i className="ti ti-send" /> {respondForm.processing ? 'Sending…' : 'Send Response'}
                                </button>
                            </form>

                            <hr className="action-divider" />

                            {!isAccepted ? (
                                <form onSubmit={submitAccept}>
                                    <button type="submit" className="btn-accept" disabled={acceptForm.processing}>
                                        <i className="ti ti-circle-check" />
                                        {acceptForm.processing ? 'Accepting…' : 'Accept Connection'}
                                    </button>
                                </form>
                            ) : (
                                <span className="accepted-flag">
                                    <i className="ti ti-check" /> Connection Already Accepted
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

ConnectionShow.layout = (page) => <AppLayout children={page} title="Connection Request Details" />;