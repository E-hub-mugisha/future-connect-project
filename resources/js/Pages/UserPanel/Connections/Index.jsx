import React, { useMemo, useState } from "react";
import { usePage, Link } from "@inertiajs/react";
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

function formatDate(dateStr) {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

const STATUS_META = {
    pending: { label: "Pending", cls: "warning" },
    accepted: { label: "Accepted", cls: "success" },
    approved: { label: "Accepted", cls: "success" },
    declined: { label: "Declined", cls: "danger" },
    rejected: { label: "Declined", cls: "danger" },
};

function StatusBadge({ status }) {
    const meta = STATUS_META[(status || "").toLowerCase()] || {
        label: status || "Pending",
        cls: "warning",
    };
    return (
        <span className={`cn-badge cn-badge-${meta.cls}`}>{meta.label}</span>
    );
}

const FILTERS = [
    { key: "all", label: "All" },
    { key: "pending", label: "Pending" },
    { key: "accepted", label: "Accepted" },
    { key: "declined", label: "Declined" },
];

export default function Connections() {
    const { props } = usePage();
    const connections = props?.connections || [];
    const [filter, setFilter] = useState("all");
    const [openId, setOpenId] = useState(null);

    const counts = useMemo(() => {
        const c = {
            all: connections.length,
            pending: 0,
            accepted: 0,
            declined: 0,
        };
        connections.forEach((item) => {
            const s = (item.status || "pending").toLowerCase();
            if (s === "accepted" || s === "approved") c.accepted++;
            else if (s === "declined" || s === "rejected") c.declined++;
            else c.pending++;
        });
        return c;
    }, [connections]);

    const filtered = useMemo(() => {
        if (filter === "all") return connections;
        return connections.filter((item) => {
            const s = (item.status || "pending").toLowerCase();
            if (filter === "accepted")
                return s === "accepted" || s === "approved";
            if (filter === "declined")
                return s === "declined" || s === "rejected";
            return s === "pending" || !STATUS_META[s];
        });
    }, [connections, filter]);

    return (
        <>
            <style>{`
        .cn-wrap * { box-sizing: border-box; }
        .cn-wrap {
          --cn-green: var(--up-green, #48d597);
          --cn-surface: var(--up-surface, #141d20);
          --cn-surface2: var(--up-surface2, #1a2428);
          --cn-border: var(--up-border, rgba(0,166,103,0.16));
          --cn-border-h: var(--up-border-h, rgba(0,166,103,0.34));
          --cn-text: var(--up-text, #e8f0ed);
          --cn-muted: var(--up-muted, #7a9a8e);
          font-family: "DM Sans", "IBM Plex Sans", sans-serif;
          color: var(--cn-text);
        }

        .cn-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 22px; }
        .cn-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cn-green); margin: 0 0 6px; }
        .cn-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 26px; margin: 0; }
        .cn-subtitle { font-size: 13.5px; color: var(--cn-muted); margin: 6px 0 0; }

        .cn-tabs { display: flex; gap: 6px; margin-bottom: 20px; flex-wrap: wrap; }
        .cn-tab {
          display: flex; align-items: center; gap: 7px; padding: 8px 14px; border-radius: 999px;
          border: 1px solid var(--cn-border); background: var(--cn-surface); color: var(--cn-muted);
          font-size: 12.5px; font-weight: 600; cursor: pointer; transition: all 0.15s;
        }
        .cn-tab:hover { border-color: var(--cn-border-h); color: var(--cn-text); }
        .cn-tab.active { background: var(--cn-green); color: #06231a; border-color: var(--cn-green); }
        .cn-tab .n { font-size: 11px; opacity: 0.8; }

        .cn-list { display: flex; flex-direction: column; gap: 12px; }

        .cn-card {
          background: var(--cn-surface); border: 1px solid var(--cn-border); border-radius: 14px;
          overflow: hidden; transition: border-color 0.15s;
        }
        .cn-card:hover { border-color: var(--cn-border-h); }
        .cn-card-main {
          display: flex; align-items: center; gap: 14px; padding: 16px 18px; cursor: pointer;
        }
        .cn-avatar {
          width: 44px; height: 44px; border-radius: 12px; overflow: hidden; flex-shrink: 0;
          background: var(--cn-green); color: #06231a; display: flex; align-items: center; justify-content: center;
          font-family: "Syne", sans-serif; font-weight: 700; font-size: 14px;
        }
        .cn-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .cn-card-info { min-width: 0; flex: 1; }
        .cn-card-name { font-size: 14.5px; font-weight: 600; margin: 0 0 2px; }
        .cn-card-sub { font-size: 12px; color: var(--cn-muted); display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .cn-card-sub .dot { width: 3px; height: 3px; border-radius: 50%; background: var(--cn-muted); }
        .cn-card-right { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
        .cn-card-date { font-size: 11.5px; color: var(--cn-muted); white-space: nowrap; }
        .cn-chevron { font-size: 16px; color: var(--cn-muted); transition: transform 0.2s; }
        .cn-chevron.open { transform: rotate(180deg); }

        .cn-badge {
          display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 999px;
          font-size: 11px; font-weight: 700; white-space: nowrap;
        }
        .cn-badge-success { background: rgba(72,213,151,0.14); color: var(--cn-green); }
        .cn-badge-warning { background: rgba(240,180,60,0.14); color: #f0b43c; }
        .cn-badge-danger { background: rgba(255,107,107,0.14); color: #ff6b6b; }

        .cn-card-body { padding: 0 18px 18px; border-top: 1px solid var(--cn-border); }
        .cn-msg-block { padding-top: 14px; }
        .cn-msg-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--cn-muted); margin: 0 0 6px; }
        .cn-msg-text {
          font-size: 13px; line-height: 1.6; color: var(--cn-text); margin: 0 0 16px;
          background: var(--cn-surface2); border: 1px solid var(--cn-border); border-radius: 10px; padding: 12px 14px;
        }
        .cn-response {
          background: rgba(72,213,151,0.06); border: 1px solid var(--cn-border); border-radius: 10px; padding: 12px 14px;
        }
        .cn-response .cn-msg-label { color: var(--cn-green); }
        .cn-card-actions { display: flex; gap: 10px; margin-top: 14px; }
        .cn-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 9px;
          border: 1px solid var(--cn-border); background: transparent; color: var(--cn-text);
          font-size: 12.5px; font-weight: 600; text-decoration: none; cursor: pointer; transition: all 0.15s;
        }
        .cn-btn:hover { border-color: var(--cn-border-h); }
        .cn-btn-primary { background: var(--cn-green); color: #06231a; border-color: var(--cn-green); }
        .cn-btn-primary:hover { opacity: 0.9; }

        .cn-empty {
          text-align: center; padding: 60px 20px; background: var(--cn-surface); border: 1px solid var(--cn-border);
          border-radius: 16px; color: var(--cn-muted);
        }
        .cn-empty i { font-size: 34px; color: var(--cn-green); margin-bottom: 12px; display: block; }
        .cn-empty h6 { font-family: "Syne", sans-serif; color: var(--cn-text); font-size: 15px; margin: 0 0 6px; }
        .cn-empty p { font-size: 13px; margin: 0; }
      `}</style>

            <div className="cn-wrap">
                <div className="cn-head">
                    <div>
                        <p className="cn-eyebrow">Network</p>
                        <h1 className="cn-title">My connections</h1>
                        <p className="cn-subtitle">
                            Requests you've sent to talents using{" "}
                            {props?.auth?.user?.email && (
                                <strong>{props.auth.user.email}</strong>
                            )}
                            .
                        </p>
                    </div>
                </div>

                <div className="cn-tabs">
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            className={`cn-tab${filter === f.key ? " active" : ""}`}
                            onClick={() => setFilter(f.key)}
                            type="button"
                        >
                            {f.label}{" "}
                            <span className="n">({counts[f.key]})</span>
                        </button>
                    ))}
                </div>

                {filtered.length === 0 ? (
                    <div className="cn-empty">
                        <i className="ti ti-plug-connected" />
                        <h6>
                            No connections{" "}
                            {filter !== "all" ? `(${filter})` : ""} yet
                        </h6>
                        <p>
                            Reach out to a talent from their profile to start a
                            conversation.
                        </p>
                    </div>
                ) : (
                    <div className="cn-list">
                        {filtered.map((item) => {
                            const talent = item.talent || {};
                            const isOpen = openId === item.id;
                            return (
                                <div className="cn-card" key={item.id}>
                                    <div
                                        className="cn-card-main"
                                        onClick={() =>
                                            setOpenId(isOpen ? null : item.id)
                                        }
                                    >
                                        <span className="cn-avatar">
                                            {talent.image ? (
                                                <img
                                                    src={`/image/talents/${talent.image}`}
                                                    alt={talent.name}
                                                />
                                            ) : (
                                                getInitials(talent.name)
                                            )}
                                        </span>
                                        <div className="cn-card-info">
                                            <p className="cn-card-name">
                                                {talent.name || "Talent"}
                                            </p>
                                            <div className="cn-card-sub">
                                                <span>
                                                    {talent.category?.name ||
                                                        "Uncategorized"}
                                                </span>
                                                <span className="dot" />
                                                <span>
                                                    {formatDate(
                                                        item.created_at,
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cn-card-right">
                                            <StatusBadge status={item.status} />
                                            <i
                                                className={`ti ti-chevron-down cn-chevron${isOpen ? " open" : ""}`}
                                            />
                                        </div>
                                    </div>

                                    {isOpen && (
                                        <div className="cn-card-body">
                                            <div className="cn-msg-block">
                                                <p className="cn-msg-label">
                                                    Your message
                                                </p>
                                                <p className="cn-msg-text">
                                                    {item.message ||
                                                        "No message was included with this request."}
                                                </p>

                                                {item.response && (
                                                    <>
                                                        <p className="cn-msg-label">
                                                            Response from talent
                                                        </p>
                                                        <div className="cn-response">
                                                            <p
                                                                className="cn-msg-text"
                                                                style={{
                                                                    margin: 0,
                                                                    background:
                                                                        "transparent",
                                                                    border: "none",
                                                                    padding: 0,
                                                                }}
                                                            >
                                                                {item.response}
                                                            </p>
                                                        </div>
                                                    </>
                                                )}

                                                <div className="cn-card-actions">
                                                    {talent.id && (
                                                        <Link
                                                            href={r(
                                                                "user.connections.show",
                                                                talent.id,
                                                            )}
                                                            className="cn-btn cn-btn-primary"
                                                        >
                                                            <i className="ti ti-user" />{" "}
                                                            View profile
                                                        </Link>
                                                    )}
                                                    {talent.phone && (
                                                        <a
                                                            href={`tel:${talent.phone}`}
                                                            className="cn-btn"
                                                        >
                                                            <i className="ti ti-phone" />{" "}
                                                            Call
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

Connections.layout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
