import React from "react";
import { Link, usePage } from "@inertiajs/react";
import UserPanelLayout from "@/Layouts/UserPanelLayout";

function r(name, params) {
    try {
        return route(name, params);
    } catch (e) {
        console.warn(`route("${name}") failed — check Ziggy config.`);
        return "#";
    }
}

function getInitials(name) {
    if (!name || typeof name !== "string") return "?";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "?";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function timeAgo(dateStr) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const diffMs = Date.now() - date.getTime();
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

function StatCard({ icon, label, value }) {
    return (
        <div className="db-stat-card">
            <div className="db-stat-icon">
                <i className={`ti ${icon}`} />
            </div>
            <div className="db-stat-body">
                <span className="db-stat-value">{value}</span>
                <span className="db-stat-label">{label}</span>
            </div>
        </div>
    );
}

function StatusBadge({ status }) {
    const s = (status || "").toLowerCase();
    const cls =
        s === "approved" || s === "active"
            ? "success"
            : s === "rejected" || s === "declined"
              ? "danger"
              : "warning";
    return (
        <span className={`db-badge db-badge-${cls}`}>
            {status || "pending"}
        </span>
    );
}

export default function Dashboard() {
    const { props } = usePage();
    const {
        totalTestimonials = 0,
        totalStories = 0,
        totalTalents = 0,
        totalUsers = 0,
        users = [],
        talents = [],
        announcements = [],
    } = props;

    const currentUser = props?.auth?.user || null;

    return (
        <>
            <style>{`
        .db-wrap * { box-sizing: border-box; }
        .db-wrap {
          --db-green: var(--up-green, #48d597);
          --db-surface: var(--up-surface, #141d20);
          --db-surface2: var(--up-surface2, #1a2428);
          --db-border: var(--up-border, rgba(0,166,103,0.16));
          --db-text: var(--up-text, #e8f0ed);
          --db-muted: var(--up-muted, #7a9a8e);
          font-family: "DM Sans", "IBM Plex Sans", sans-serif;
          color: var(--db-text);
        }

        /* Header */
        .db-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 28px; }
        .db-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--db-green); margin: 0 0 6px; }
        .db-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 26px; margin: 0; }
        .db-subtitle { font-size: 13.5px; color: var(--db-muted); margin: 6px 0 0; }
        .db-head-right { font-size: 13px; color: var(--db-muted); }

        /* Stat cards */
        .db-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
        .db-stat-card {
          display: flex; align-items: center; gap: 14px; padding: 18px;
          background: var(--db-surface); border: 1px solid var(--db-border); border-radius: 14px;
          transition: border-color 0.2s;
        }
        .db-stat-card:hover { border-color: var(--up-border-h, rgba(0,166,103,0.34)); }
        .db-stat-icon {
          width: 44px; height: 44px; border-radius: 10px; flex-shrink: 0;
          background: rgba(72,213,151,0.12); color: var(--db-green);
          display: flex; align-items: center; justify-content: center; font-size: 19px;
        }
        .db-stat-body { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .db-stat-value { font-family: "Syne", sans-serif; font-weight: 700; font-size: 22px; line-height: 1.1; }
        .db-stat-label { font-size: 12.5px; color: var(--db-muted); }

        /* Panel */
        .db-panel {
          background: var(--db-surface); border: 1px solid var(--db-border); border-radius: 14px;
          overflow: hidden; display: flex; flex-direction: column; height: 100%;
        }
        .db-panel-head {
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          padding: 16px 18px; border-bottom: 1px solid var(--db-border);
        }
        .db-panel-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 14.5px; margin: 0; }
        .db-panel-link { font-size: 12.5px; color: var(--db-green); text-decoration: none; }
        .db-panel-link:hover { text-decoration: underline; }
        .db-panel-body { padding: 8px; flex: 1; }
        .db-empty { padding: 24px 12px; text-align: center; color: var(--db-muted); font-size: 13px; }

        /* Grid layout */
        .db-main-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 20px; margin-bottom: 20px; }
        .db-side-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        /* Talents table */
        .db-table { width: 100%; border-collapse: collapse; }
        .db-table th {
          text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;
          color: var(--db-muted); font-weight: 600; padding: 10px 12px; border-bottom: 1px solid var(--db-border);
        }
        .db-table td { padding: 10px 12px; font-size: 13px; border-bottom: 1px solid var(--db-border); vertical-align: middle; }
        .db-table tr:last-child td { border-bottom: none; }
        .db-person { display: flex; align-items: center; gap: 10px; }
        .db-avatar {
          width: 30px; height: 30px; border-radius: 50%; overflow: hidden; flex-shrink: 0;
          background: var(--db-green); color: #06231a; display: flex; align-items: center; justify-content: center;
          font-family: "Syne", sans-serif; font-weight: 700; font-size: 11px;
        }
        .db-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .db-person-name { font-weight: 500; }
        .db-muted-sm { color: var(--db-muted); font-size: 12px; }

        .db-badge {
          display: inline-flex; align-items: center; padding: 3px 9px; border-radius: 999px;
          font-size: 11px; font-weight: 600; text-transform: capitalize;
        }
        .db-badge-success { background: rgba(72,213,151,0.14); color: var(--db-green); }
        .db-badge-warning { background: rgba(240,180,60,0.14); color: #f0b43c; }
        .db-badge-danger { background: rgba(255,107,107,0.14); color: #ff6b6b; }

        /* Users list */
        .db-user-row { display: flex; align-items: center; gap: 12px; padding: 10px 10px; border-radius: 10px; }
        .db-user-row:hover { background: rgba(72,213,151,0.06); }
        .db-user-info { display: flex; flex-direction: column; min-width: 0; gap: 1px; }
        .db-user-info .name { font-size: 13.5px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .db-user-info .email { font-size: 12px; color: var(--db-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .db-user-row .time { margin-left: auto; font-size: 11.5px; color: var(--db-muted); white-space: nowrap; }

        /* Announcements */
        .db-annc-item { display: flex; gap: 12px; padding: 12px 10px; border-radius: 10px; }
        .db-annc-item:hover { background: rgba(72,213,151,0.06); }
        .db-annc-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--db-green); margin-top: 6px; flex-shrink: 0; }
        .db-annc-body { min-width: 0; }
        .db-annc-title { font-size: 13.5px; font-weight: 500; margin: 0 0 2px; }
        .db-annc-time { font-size: 11.5px; color: var(--db-muted); }

        @media (max-width: 1080px) {
          .db-main-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .db-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .db-side-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .db-stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            <div className="db-wrap">
                <div className="db-head">
                    <div>
                        <p className="db-eyebrow">Overview</p>
                        <h1 className="db-title">
                            Welcome back
                            {currentUser?.name
                                ? `, ${currentUser.name.split(" ")[0]}`
                                : ""}
                        </h1>
                        <p className="db-subtitle">
                            Here's what's happening across Future Connect today.
                        </p>
                    </div>
                    <div className="db-head-right">
                        {new Date().toLocaleDateString(undefined, {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </div>
                </div>

                <div className="db-stats-grid">
                    <StatCard
                        icon="ti-quote"
                        label="Testimonials"
                        value={totalTestimonials}
                    />
                    <StatCard
                        icon="ti-book-2"
                        label="Stories"
                        value={totalStories}
                    />
                    <StatCard
                        icon="ti-briefcase"
                        label="Talents"
                        value={totalTalents}
                    />
                    <StatCard
                        icon="ti-users"
                        label="Users"
                        value={totalUsers}
                    />
                </div>

                <div className="db-main-grid">
                    <div className="db-panel">
                        <div className="db-panel-head">
                            <h6 className="db-panel-title">Recent talents</h6>
                            <Link
                                href={r("user.talents.connected")}
                                className="db-panel-link"
                            >
                                View all
                            </Link>
                        </div>
                        <div className="db-panel-body">
                            {talents.length === 0 ? (
                                <div className="db-empty">No talents yet.</div>
                            ) : (
                                <table className="db-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Phone</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {talents.map((talent) => (
                                            <tr key={talent.id}>
                                                <td>
                                                    <div className="db-person">
                                                        <span className="db-avatar">
                                                            {talent.image ? (
                                                                <img
                                                                    src={`/image/talents/${talent.image}`}
                                                                    alt={
                                                                        talent.name
                                                                    }
                                                                />
                                                            ) : (
                                                                getInitials(
                                                                    talent.name,
                                                                )
                                                            )}
                                                        </span>
                                                        <span className="db-person-name">
                                                            {talent.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="db-muted-sm">
                                                        {talent.category
                                                            ?.name ||
                                                            "Uncategorized"}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="db-muted-sm">
                                                        {talent.phone || "—"}
                                                    </span>
                                                </td>
                                                <td>
                                                    <StatusBadge
                                                        status={talent.status}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>

                    <div className="db-panel">
                        <div className="db-panel-head">
                            <h6 className="db-panel-title">New users</h6>
                            <Link
                                href={r("admin.users.index")}
                                className="db-panel-link"
                            >
                                View all
                            </Link>
                        </div>
                        <div className="db-panel-body">
                            {users.length === 0 ? (
                                <div className="db-empty">No users yet.</div>
                            ) : (
                                users.map((u) => (
                                    <div className="db-user-row" key={u.id}>
                                        <span className="db-avatar">
                                            {u.avatar ? (
                                                <img
                                                    src={u.avatar}
                                                    alt={u.name}
                                                />
                                            ) : (
                                                getInitials(u.name)
                                            )}
                                        </span>
                                        <div className="db-user-info">
                                            <span className="name">
                                                {u.name}
                                            </span>
                                            <span className="email">
                                                {u.email}
                                            </span>
                                        </div>
                                        <span className="time">
                                            {timeAgo(u.created_at)}
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div className="db-side-grid">
                    <div className="db-panel">
                        <div className="db-panel-head">
                            <h6 className="db-panel-title">
                                Recent announcements
                            </h6>
                        </div>
                        <div className="db-panel-body">
                            {announcements.length === 0 ? (
                                <div className="db-empty">
                                    No announcements yet.
                                </div>
                            ) : (
                                announcements.map((a) => (
                                    <div className="db-annc-item" key={a.id}>
                                        <span className="db-annc-dot" />
                                        <div className="db-annc-body">
                                            <p className="db-annc-title">
                                                {a.title}
                                            </p>
                                            <span className="db-annc-time">
                                                {timeAgo(a.created_at)}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="db-panel">
                        <div className="db-panel-head">
                            <h6 className="db-panel-title">Quick summary</h6>
                        </div>
                        <div
                            className="db-panel-body"
                            style={{ padding: "18px 14px" }}
                        >
                            <p
                                style={{
                                    fontSize: 13.5,
                                    color: "var(--db-muted)",
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}
                            >
                                You currently have{" "}
                                <strong style={{ color: "var(--db-text)" }}>
                                    {totalTalents}
                                </strong>{" "}
                                talents,{" "}
                                <strong style={{ color: "var(--db-text)" }}>
                                    {totalStories}
                                </strong>{" "}
                                stories and{" "}
                                <strong style={{ color: "var(--db-text)" }}>
                                    {totalTestimonials}
                                </strong>{" "}
                                testimonials published across the platform,
                                serving{" "}
                                <strong style={{ color: "var(--db-text)" }}>
                                    {totalUsers}
                                </strong>{" "}
                                registered users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
