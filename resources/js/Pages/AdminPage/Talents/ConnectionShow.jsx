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
    default: { label: 'Pending', icon: 'ti-clock', className: 'badge-pending' },
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

            <style>{`
                :root {
                    --ink:        #0A0A0A;
                    --ink-soft:   #4A4A4A;
                    --bg-deep:    #FAFAFA;
                    --bg-card:    #FFFFFF;
                    --bg-muted:   #F2F2F2;
                    --accent:     #00A667;
                    --accent-dim: #00854F;
                    --accent-tint:#E6F7EF;
                    --text-label: #5C5C5C;
                    --text-muted: #9A9A9A;
                    --border:     #E1E1E1;
                    --border-strong: #0A0A0A;
                    --radius:     6px;
                    --radius-lg:  4px;
                    --font-head:  inherit;
                    --font-body:  inherit;
                    --warn:       #92650A;
                    --warn-tint:  #FBF1DE;
                    --danger:     #C0362C;
                    --danger-tint:#FBEDEC;
                }

                .fc-admin-page, .fc-admin-page * { box-sizing: border-box; }
                .fc-admin-page { background: var(--bg-deep); color: var(--ink); font-family: var(--font-body); min-height: 100%; }

                .admin-page { padding: 40px 32px 56px; }
                @media(max-width: 768px) { .admin-page { padding: 24px 16px 40px; } }
                .admin-page .container-narrow { max-width: 880px; margin: 0 auto; }

                .admin-header {
                    display: flex; align-items: flex-end; justify-content: space-between;
                    gap: 16px; flex-wrap: wrap;
                    margin-bottom: 28px;
                    padding-bottom: 22px;
                    border-bottom: 2px solid var(--ink);
                }
                .admin-header h2 { font-family: var(--font-head); font-size: 1.4rem; font-weight: 700; letter-spacing: -.3px; color: var(--ink); margin: 0 0 5px; }
                .admin-header p { font-size: 0.85rem; color: var(--text-label); margin: 0; }

                .btn-back {
                    display: inline-flex; align-items: center; gap: 8px;
                    border: 1px solid var(--border-strong);
                    background: var(--bg-card);
                    color: var(--ink);
                    border-radius: var(--radius);
                    padding: 9px 18px;
                    font-size: 0.82rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: background 0.15s, color 0.15s;
                    white-space: nowrap;
                }
                .btn-back:hover { background: var(--ink); color: #fff; }

                .info-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 24px 26px;
                    margin-bottom: 18px;
                }
                .info-card-title {
                    font-family: var(--font-head);
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--ink);
                    margin: 0 0 18px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid var(--border);
                    display: flex; align-items: center; gap: 10px;
                }
                .info-card-title i { color: var(--accent); }

                .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
                @media(max-width: 700px) { .info-grid { grid-template-columns: 1fr; } }

                .info-block h6 {
                    font-family: var(--font-head);
                    font-size: 0.72rem;
                    font-weight: 700;
                    color: var(--text-muted);
                    margin: 0 0 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    padding-left: 10px;
                    border-left: 3px solid var(--accent);
                }
                .info-row { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--border); font-size: 0.85rem; }
                .info-row:last-child { border-bottom: none; }
                .info-row span:first-child { color: var(--text-label); }
                .info-row span:last-child { color: var(--ink); font-weight: 500; text-align: right; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius);
                    padding: 4px 11px;
                    font-size: 0.75rem;
                    font-weight: 700;
                }
                .badge-success { background: var(--accent-tint); color: var(--accent-dim); }
                .badge-danger { background: var(--danger-tint); color: var(--danger); }
                .badge-pending { background: var(--warn-tint); color: var(--warn); }
                .badge-neutral { background: var(--bg-muted); color: var(--text-label); border: 1px solid var(--border); }

                .response-note {
                    background: var(--bg-deep);
                    border: 1px solid var(--border);
                    border-left: 3px solid var(--accent);
                    border-radius: var(--radius-lg);
                    padding: 14px 16px;
                    font-size: 0.85rem;
                    color: var(--ink-soft);
                    margin-top: 14px;
                }
                .response-note strong { color: var(--ink); }

                .actions-card-header {
                    display: flex; align-items: center; gap: 10px;
                    margin-bottom: 20px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid var(--border);
                }
                .actions-card-header i { color: var(--accent); font-size: 1.05rem; }
                .actions-card-header h5 { font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; margin: 0; }

                .form-label { font-size: 0.78rem; font-weight: 600; color: var(--text-label); margin-bottom: 6px; display: block; }
                .form-control-dark {
                    width: 100%;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    color: var(--ink);
                    padding: 11px 14px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.15s, box-shadow 0.15s;
                    margin-bottom: 14px;
                    resize: vertical;
                }
                .form-control-dark:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-tint); }
                .form-control-dark::placeholder { color: var(--text-muted); }

                .action-divider { border: none; border-top: 1px solid var(--border); margin: 22px 0; }

                .btn-send {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.15s;
                }
                .btn-send:hover { background: var(--accent-dim); }
                .btn-send:disabled { opacity: 0.6; cursor: not-allowed; }

                .btn-accept {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    border: none;
                    color: #fff;
                    border-radius: var(--radius);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.15s;
                }
                .btn-accept:disabled {
                    background: var(--bg-muted);
                    color: var(--text-muted);
                    cursor: not-allowed;
                    border: 1px solid var(--border);
                }

                .accepted-flag {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent-tint);
                    color: var(--accent-dim);
                    border: 1px solid var(--accent);
                    border-radius: var(--radius);
                    padding: 10px 20px;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.9rem;
                }

                /* ── DARK THEME (opt-in override) ── */
                [data-h-theme="dark"] {
                    --ink:        #F2F2F2;
                    --ink-soft:   #C9C9C9;
                    --bg-deep:    #0A0A0A;
                    --bg-card:    #141414;
                    --bg-muted:   #1E1E1E;
                    --accent:     #00C97A;
                    --accent-dim: #00A667;
                    --accent-tint: rgba(0,201,122,0.12);
                    --text-label: #9A9A9A;
                    --text-muted: #6B6B6B;
                    --border:     #2A2A2A;
                    --border-strong: #F2F2F2;
                    --warn: #E0B84E;
                    --warn-tint: rgba(224,184,78,0.12);
                    --danger: #E0645A;
                    --danger-tint: rgba(224,100,90,0.12);
                }
                [data-h-theme="dark"] .btn-back:hover { color: var(--ink); }
            `}</style>

            <div className="fc-admin-page">
                <div className="admin-page">
                    <div className="container-narrow">
                        <div className="admin-header">
                            <div>
                                <h2>Connection request #{connection.id}</h2>
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
                                    <h6>Talent info</h6>
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
                                    <h6>Requester info</h6>
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
                                <i className="ti ti-plug-connected" /> Connection status
                            </h5>
                            <div className="info-row" style={{ borderBottom: 'none' }}>
                                <span>Current status</span>
                                <span><StatusBadge status={connection.status} map={CONNECTION_STATUS_MAP} /></span>
                            </div>
                            {connection.response && (
                                <div className="response-note">
                                    <strong>Admin response:</strong> {connection.response}
                                </div>
                            )}
                        </div>

                        {/* ═══════════════ ADMIN ACTIONS ═══════════════ */}
                        <div className="info-card">
                            <div className="actions-card-header">
                                <i className="ti ti-settings" />
                                <h5>Admin actions</h5>
                            </div>

                            <form onSubmit={submitResponse}>
                                <label className="form-label">Send a message to requester</label>
                                <textarea
                                    className="form-control-dark"
                                    rows={4}
                                    placeholder="Write your response…"
                                    value={respondForm.data.response}
                                    onChange={(e) => respondForm.setData('response', e.target.value)}
                                />
                                <button type="submit" className="btn-send" disabled={respondForm.processing}>
                                    <i className="ti ti-send" /> {respondForm.processing ? 'Sending…' : 'Send response'}
                                </button>
                            </form>

                            <hr className="action-divider" />

                            {!isAccepted ? (
                                <form onSubmit={submitAccept}>
                                    <button type="submit" className="btn-accept" disabled={acceptForm.processing}>
                                        <i className="ti ti-circle-check" />
                                        {acceptForm.processing ? 'Accepting…' : 'Accept connection'}
                                    </button>
                                </form>
                            ) : (
                                <span className="accepted-flag">
                                    <i className="ti ti-check" /> Connection already accepted
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