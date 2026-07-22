import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const routes = {
    loginActivityIndex: '/admin/login-activity',
};

/* ── Inline icon set ── */
const Icon = {
    Search: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
        </svg>
    ),
    Shield: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 3 4.5 6v6c0 4.6 3.2 8.4 7.5 9 4.3-.6 7.5-4.4 7.5-9V6L12 3Z" />
        </svg>
    ),
    Users: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
            <path d="M16.5 8.5a3.2 3.2 0 1 1 0 6.4M22 20c0-2.8-1.8-5.1-4.3-6" />
        </svg>
    ),
    Globe: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-6-3.8-9s1.3-6.4 3.8-9Z" />
        </svg>
    ),
    Clock: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
        </svg>
    ),
    Desktop: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="2.5" y="4" width="19" height="12" rx="2" /><path d="M8 20h8M12 16v4" />
        </svg>
    ),
    Mobile: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="6.5" y="2.5" width="11" height="19" rx="2.3" /><path d="M11 18.5h2" />
        </svg>
    ),
    Inbox: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.5 5h13l3.5 7v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7l3.5-7Z" />
        </svg>
    ),
};

function initials(name) {
    if (!name) return '—';
    return name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join('');
}

/* Lightweight UA parser — enough to surface browser + OS without a dependency */
function parseUserAgent(ua) {
    if (!ua) return { browser: 'Unknown', os: 'Unknown', isMobile: false };

    const browserMatch =
        ua.match(/Edg\/([\d.]+)/) ? 'Edge' :
        ua.match(/OPR\/([\d.]+)/) ? 'Opera' :
        ua.match(/Chrome\/([\d.]+)/) && !ua.includes('Chromium') ? 'Chrome' :
        ua.match(/Firefox\/([\d.]+)/) ? 'Firefox' :
        ua.match(/Version\/([\d.]+).*Safari/) ? 'Safari' :
        ua.match(/MSIE|Trident/) ? 'Internet Explorer' : 'Unknown';

    const os =
        ua.match(/Windows NT 10/) ? 'Windows 10/11' :
        ua.match(/Windows NT/) ? 'Windows' :
        ua.match(/Mac OS X/) ? 'macOS' :
        ua.match(/Android/) ? 'Android' :
        ua.match(/iPhone|iPad|iPod/) ? 'iOS' :
        ua.match(/Linux/) ? 'Linux' : 'Unknown';

    const isMobile = /Android|iPhone|iPad|iPod|Mobile/.test(ua);

    return { browser: browserMatch, os, isMobile };
}

function timeAgo(dateStr) {
    const diffMs = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days}d ago`;
    return null;
}

function decodePaginationLabel(label) {
    return label
        .replace(/&laquo;/g, '‹')
        .replace(/&raquo;/g, '›')
        .replace(/Previous/i, 'Prev');
}

export default function LoginActivityIndex({ activities, filters = {}, stats }) {
    const [search, setSearch] = useState(filters.search ?? '');

    const rows = activities?.data ?? [];
    const paginationLinks = activities?.links ?? [];

    const computedStats = stats ?? {
        total: activities?.total ?? rows.length,
        uniqueUsers: new Set(rows.map((a) => a.user?.id).filter(Boolean)).size,
        uniqueIps: new Set(rows.map((a) => a.ip_address).filter(Boolean)).size,
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        router.get(routes.loginActivityIndex, { search }, { preserveState: true, preserveScroll: true, replace: true });
    };

    return (
        <div data-h-scope="login-activity">
            <Head title="Login Activity" />
            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
                rel="stylesheet"
            />

            <style>{`
                [data-h-scope="login-activity"] {
                    --bg-page:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-soft:    rgba(0,100,60,0.035);
                    --bg-accent:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #839a92;
                    --border:     rgba(0,100,60,0.12);
                    --border-accent: rgba(0,166,103,0.35);
                    --radius-lg:  18px;
                    --radius-md:  12px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                }
                [data-h-scope="login-activity"] *,
                [data-h-scope="login-activity"] *::before,
                [data-h-scope="login-activity"] *::after { box-sizing: border-box; }

                [data-h-scope="login-activity"] {
                    background: var(--bg-page);
                    font-family: var(--font-body);
                    color: var(--text-primary);
                    min-height: 100%;
                    padding: 40px 32px;
                }
                @media(max-width: 768px) { [data-h-scope="login-activity"] { padding: 20px 16px; } }

                .la-wrap { max-width: 1080px; margin: 0 auto; }

                .la-header { margin-bottom: 24px; }
                .la-header h1 { font-family: var(--font-head); font-size: 1.6rem; font-weight: 800; margin: 0 0 4px; }
                .la-header p { color: var(--text-secondary); margin: 0; font-size: 0.88rem; }

                .la-stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px; }
                @media(max-width: 700px) { .la-stat-row { grid-template-columns: 1fr; } }
                .la-stat-card {
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 14px; padding: 18px 20px;
                    display: flex; align-items: center; gap: 14px;
                }
                .la-stat-icon {
                    width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
                    background: var(--bg-accent); color: var(--accent);
                    display: flex; align-items: center; justify-content: center;
                }
                .la-stat-icon svg { width: 19px; height: 19px; }
                .la-stat-meta p { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 3px; }
                .la-stat-meta h4 { font-family: var(--font-head); font-size: 1.2rem; font-weight: 800; margin: 0; }

                .la-card {
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: var(--radius-lg); overflow: hidden;
                    box-shadow: 0 1px 2px rgba(16,32,27,0.03), 0 12px 32px -18px rgba(16,32,27,0.12);
                }

                .la-toolbar { padding: 18px 22px; border-bottom: 1px solid var(--border); }
                .la-search {
                    display: flex; align-items: center; gap: 8px;
                    background: var(--bg-soft); border: 1px solid var(--border);
                    border-radius: var(--radius-pill); padding: 9px 16px; max-width: 340px;
                    transition: border-color 0.15s;
                }
                .la-search:focus-within { border-color: var(--border-accent); }
                .la-search svg { width: 16px; height: 16px; color: var(--text-muted); flex-shrink: 0; }
                .la-search input {
                    background: transparent; border: none; outline: none;
                    color: var(--text-primary); font-size: 0.85rem; width: 100%; font-family: var(--font-body);
                }
                .la-search input::placeholder { color: var(--text-muted); }

                .la-table { width: 100%; border-collapse: collapse; }
                .la-table th {
                    text-align: left; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em;
                    color: var(--text-muted); font-weight: 700; padding: 14px 22px;
                    border-bottom: 1px solid var(--border); white-space: nowrap;
                }
                .la-table td {
                    padding: 15px 22px; border-bottom: 1px solid var(--border);
                    font-size: 0.86rem; color: var(--text-secondary); vertical-align: middle;
                }
                .la-table tbody tr:last-child td { border-bottom: none; }
                .la-table tbody tr:hover { background: var(--bg-soft); }

                .la-user-cell { display: flex; align-items: center; gap: 11px; }
                .la-avatar {
                    width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0;
                    background: var(--bg-accent); border: 1px solid var(--border-accent);
                    color: var(--accent); display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-head); font-weight: 700; font-size: 0.72rem;
                }
                .la-user-cell h6 { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin: 0; }

                .la-ip {
                    font-family: 'SFMono-Regular', Consolas, monospace;
                    font-size: 0.8rem;
                    background: var(--bg-soft);
                    border: 1px solid var(--border);
                    border-radius: 7px;
                    padding: 3px 9px;
                    color: var(--text-primary);
                }

                .la-device-cell { display: flex; align-items: center; gap: 10px; }
                .la-device-icon {
                    width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
                    background: var(--bg-soft); border: 1px solid var(--border);
                    color: var(--text-secondary); display: flex; align-items: center; justify-content: center;
                }
                .la-device-icon svg { width: 14px; height: 14px; }
                .la-device-meta h6 { font-size: 0.83rem; font-weight: 600; color: var(--text-primary); margin: 0 0 1px; }
                .la-device-meta p { font-size: 0.74rem; color: var(--text-muted); margin: 0; }

                .la-time-cell h6 { font-size: 0.83rem; font-weight: 600; color: var(--text-primary); margin: 0 0 1px; }
                .la-time-cell p { font-size: 0.74rem; color: var(--text-muted); margin: 0; }
                .la-time-recent { color: var(--accent) !important; font-weight: 700; }

                .la-empty { text-align: center; padding: 60px 24px; color: var(--text-muted); font-size: 0.88rem; }
                .la-empty svg { width: 34px; height: 34px; margin: 0 auto 12px; display: block; color: var(--text-muted); }

                .la-footer { padding: 16px 22px; display: flex; justify-content: flex-end; }
                .la-pagination { display: flex; gap: 6px; flex-wrap: wrap; }
                .la-page-link {
                    min-width: 34px; height: 34px; display: inline-flex; align-items: center; justify-content: center;
                    padding: 0 10px; border-radius: 8px; border: 1px solid var(--border);
                    background: transparent; color: var(--text-secondary); font-size: 0.78rem; font-weight: 600;
                    text-decoration: none; transition: border-color 0.15s, color 0.15s, background 0.15s;
                }
                .la-page-link:hover { border-color: var(--border-accent); color: var(--accent); }
                .la-page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .la-page-link.disabled { opacity: 0.35; pointer-events: none; }

                @media(max-width: 760px) { .la-table { display: block; overflow-x: auto; white-space: nowrap; } }
            `}</style>

            <div className="la-wrap">
                <div className="la-header">
                    <h1>Login Activity</h1>
                    <p>Track sign-ins across the platform, including device and location context.</p>
                </div>

                <div className="la-stat-row">
                    <div className="la-stat-card">
                        <div className="la-stat-icon"><Icon.Shield /></div>
                        <div className="la-stat-meta">
                            <p>Total Logins</p>
                            <h4>{computedStats.total}</h4>
                        </div>
                    </div>
                    <div className="la-stat-card">
                        <div className="la-stat-icon"><Icon.Users /></div>
                        <div className="la-stat-meta">
                            <p>Unique Users</p>
                            <h4>{computedStats.uniqueUsers}</h4>
                        </div>
                    </div>
                    <div className="la-stat-card">
                        <div className="la-stat-icon"><Icon.Globe /></div>
                        <div className="la-stat-meta">
                            <p>Unique IPs</p>
                            <h4>{computedStats.uniqueIps}</h4>
                        </div>
                    </div>
                </div>

                <div className="la-card">
                    <div className="la-toolbar">
                        <form onSubmit={handleSearchSubmit} className="la-search">
                            <Icon.Search />
                            <input
                                type="text"
                                placeholder="Search by user or IP address…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                    </div>

                    {rows.length > 0 ? (
                        <div style={{ overflowX: 'auto' }}>
                            <table className="la-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>User</th>
                                        <th>IP Address</th>
                                        <th>Device / Browser</th>
                                        <th>Logged In At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((activity, i) => {
                                        const { browser, os, isMobile } = parseUserAgent(activity.user_agent);
                                        const ago = timeAgo(activity.logged_in_at);
                                        return (
                                            <tr key={activity.id}>
                                                <td>{(activities.from ?? 1) + i}</td>
                                                <td>
                                                    <div className="la-user-cell">
                                                        <div className="la-avatar">{initials(activity.user?.name)}</div>
                                                        <h6>{activity.user?.name ?? 'N/A'}</h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="la-ip">{activity.ip_address}</span>
                                                </td>
                                                <td>
                                                    <div className="la-device-cell">
                                                        <div className="la-device-icon">
                                                            {isMobile ? <Icon.Mobile /> : <Icon.Desktop />}
                                                        </div>
                                                        <div className="la-device-meta">
                                                            <h6>{browser}</h6>
                                                            <p>{os}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="la-time-cell">
                                                        <h6 className={ago && ago.includes('m ago') ? 'la-time-recent' : ''}>
                                                            {ago ?? new Date(activity.logged_in_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                        </h6>
                                                        <p>
                                                            {new Date(activity.logged_in_at).toLocaleString('en-US', {
                                                                day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
                                                            })}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="la-empty">
                            <Icon.Inbox />
                            No login activity found.
                        </div>
                    )}

                    {paginationLinks.length > 3 && (
                        <div className="la-footer">
                            <div className="la-pagination">
                                {paginationLinks.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url || '#'}
                                        className={`la-page-link ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                                        preserveScroll
                                    >
                                        {decodePaginationLabel(link.label)}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

LoginActivityIndex.layout = (page) => <AppLayout children={page} title="Login Activity" />;
