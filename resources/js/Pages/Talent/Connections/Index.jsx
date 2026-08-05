// resources/js/Pages/Talent/Connections/Index.jsx
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

const STATUS_TABS = [
    { key: "all", label: "All" },
    { key: "pending", label: "Pending" },
    { key: "accepted", label: "Accepted" },
    { key: "declined", label: "Declined" },
];

export default function Index({ connections, counts, filters, flash }) {
    const [activeConnection, setActiveConnection] = useState(null);

    function switchTab(status) {
        router.get(
            route("talent.connections.index"),
            status === "all" ? {} : { status },
            { preserveState: true, preserveScroll: true, replace: true },
        );
    }

    return (
        <AppLayout>
            <Head title="Connection Requests" />

            <div data-h-scope="talent-connections">
                <style>{`
                    [data-h-scope="talent-connections"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        --h-warn: #f5a623;
                        --h-danger: #e5484d;
                        background-color: var(--h-bg);
                        min-height: 100%;
                    }
                    [data-h-scope="talent-connections"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                    }
                    [data-h-scope="talent-connections"] .h-stat {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                        transition: transform 0.15s ease, box-shadow 0.15s ease;
                    }
                    [data-h-scope="talent-connections"] .h-stat:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 20px rgba(6,15,17,0.06);
                    }
                    [data-h-scope="talent-connections"] .h-stat-icon {
                        width: 44px;
                        height: 44px;
                    }
                    [data-h-scope="talent-connections"] .h-tab {
                        border: none;
                        background: transparent;
                        color: rgba(6,15,17,0.55);
                        font-weight: 600;
                        padding: 8px 16px;
                        border-radius: 999px;
                        transition: all 0.15s ease;
                        white-space: nowrap;
                    }
                    [data-h-scope="talent-connections"] .h-tab.active {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-connections"] .h-tab:not(.active):hover {
                        background: rgba(6,15,17,0.05);
                    }
                    [data-h-scope="talent-connections"] .h-row {
                        border: 1px solid rgba(6,15,17,0.06);
                        transition: box-shadow 0.15s ease, border-color 0.15s ease;
                    }
                    [data-h-scope="talent-connections"] .h-row:hover {
                        border-color: rgba(72, 213, 151, 0.4);
                        box-shadow: 0 4px 14px rgba(6,15,17,0.05);
                    }
                    [data-h-scope="talent-connections"] .h-avatar {
                        width: 44px;
                        height: 44px;
                        background: rgba(72, 213, 151, 0.14);
                        color: var(--h-accent-dark);
                        font-weight: 700;
                        flex-shrink: 0;
                    }
                    [data-h-scope="talent-connections"] .h-badge-pending {
                        background: rgba(245, 166, 35, 0.14);
                        color: #b5750f;
                    }
                    [data-h-scope="talent-connections"] .h-badge-accepted {
                        background: rgba(72, 213, 151, 0.14);
                        color: var(--h-accent-dark);
                    }
                    [data-h-scope="talent-connections"] .h-badge-declined {
                        background: rgba(229, 72, 77, 0.12);
                        color: var(--h-danger);
                    }
                    [data-h-scope="talent-connections"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background 0.15s ease;
                    }
                    [data-h-scope="talent-connections"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-connections"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid rgba(6,15,17,0.15);
                    }
                    [data-h-scope="talent-connections"] .h-btn-ghost:hover {
                        background: rgba(6,15,17,0.04);
                    }
                    [data-h-scope="talent-connections"] .h-alert-success {
                        background: rgba(72, 213, 151, 0.15);
                        border: 1px solid rgba(72, 213, 151, 0.4);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-connections"] .form-control:focus,
                    [data-h-scope="talent-connections"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72, 213, 151, 0.25);
                    }
                    [data-h-scope="talent-connections"] .h-pagination a,
                    [data-h-scope="talent-connections"] .h-pagination span {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 34px;
                        height: 34px;
                        padding: 0 8px;
                        border-radius: 8px;
                        color: var(--h-ink);
                        font-size: 14px;
                        text-decoration: none;
                    }
                    [data-h-scope="talent-connections"] .h-pagination a:hover {
                        background: rgba(6,15,17,0.05);
                    }
                    [data-h-scope="talent-connections"] .h-pagination .active span {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-connections"] .h-pagination .disabled span {
                        opacity: 0.35;
                    }
                `}</style>

                <div className="container-fluid px-4 py-4">
                    {flash?.success && (
                        <div className="alert h-alert-success rounded-3 border-0 mb-4">
                            <i className="fas fa-circle-check me-2"></i>
                            {flash.success}
                        </div>
                    )}

                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                        <div>
                            <h4 className="fw-bold mb-1">Connection Requests</h4>
                            <p className="text-secondary mb-0 small">
                                People who want to connect with you
                            </p>
                        </div>
                    </div>

                    {/* Stat cards */}
                    <div className="row g-3 mb-4">
                        <StatCard
                            icon="fa-users"
                            label="Total Requests"
                            value={counts.all}
                            color="#48d597"
                        />
                        <StatCard
                            icon="fa-hourglass-half"
                            label="Pending"
                            value={counts.pending}
                            color="#f5a623"
                        />
                        <StatCard
                            icon="fa-circle-check"
                            label="Accepted"
                            value={counts.accepted}
                            color="#48d597"
                        />
                        <StatCard
                            icon="fa-circle-xmark"
                            label="Declined"
                            value={counts.declined}
                            color="#e5484d"
                        />
                    </div>

                    <div className="card h-card border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">
                            {/* Filter tabs */}
                            <div className="d-flex gap-2 flex-wrap mb-4">
                                {STATUS_TABS.map((tab) => (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        className={`h-tab ${filters.status === tab.key ? "active" : ""}`}
                                        onClick={() => switchTab(tab.key)}
                                    >
                                        {tab.label}
                                        {tab.key !== "all" && (
                                            <span className="ms-2 opacity-75">
                                                {counts[tab.key] ?? 0}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {connections.data.length === 0 ? (
                                <EmptyState />
                            ) : (
                                <div className="d-flex flex-column gap-3">
                                    {connections.data.map((connection) => (
                                        <ConnectionRow
                                            key={connection.id}
                                            connection={connection}
                                            onRespond={() => setActiveConnection(connection)}
                                        />
                                    ))}
                                </div>
                            )}

                            {connections.links && connections.data.length > 0 && (
                                <Pagination links={connections.links} />
                            )}
                        </div>
                    </div>
                </div>

                <RespondModal
                    connection={activeConnection}
                    onClose={() => setActiveConnection(null)}
                />
            </div>
        </AppLayout>
    );
}

/* ---------- pieces ---------- */

function StatCard({ icon, label, value, color }) {
    return (
        <div className="col-6 col-lg-3">
            <div className="h-stat rounded-4 p-3 d-flex align-items-center gap-3">
                <div
                    className="h-stat-icon rounded-3 d-flex align-items-center justify-content-center"
                    style={{ background: `${color}22`, color }}
                >
                    <i className={`fas ${icon}`}></i>
                </div>
                <div>
                    <div className="fw-bold fs-4 lh-1">{value}</div>
                    <div className="small text-secondary">{label}</div>
                </div>
            </div>
        </div>
    );
}

function ConnectionRow({ connection, onRespond }) {
    const initials = (connection.name || "?")
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <div className="h-row rounded-4 p-3 d-flex flex-wrap align-items-center gap-3">
            <div className="h-avatar rounded-circle d-flex align-items-center justify-content-center">
                {initials}
            </div>

            <div className="flex-grow-1" style={{ minWidth: 200 }}>
                <div className="fw-semibold">{connection.name || "N/A"}</div>
                <div className="small text-secondary">{connection.email || "—"}</div>
                {connection.message && (
                    <div className="small text-secondary mt-1" style={{ maxWidth: 480 }}>
                        “{connection.message}”
                    </div>
                )}
            </div>

            <div className="text-secondary small" style={{ minWidth: 140 }}>
                {connection.created_at_human ?? connection.created_at}
            </div>

            <StatusBadge status={connection.status} />

            {connection.status === "pending" ? (
                <button
                    type="button"
                    className="btn h-btn-accent btn-sm rounded-pill px-3"
                    onClick={onRespond}
                >
                    Respond
                </button>
            ) : (
                <button
                    type="button"
                    className="btn h-btn-ghost btn-sm rounded-pill px-3"
                    onClick={onRespond}
                >
                    View
                </button>
            )}
        </div>
    );
}

function StatusBadge({ status }) {
    const map = {
        pending: { cls: "h-badge-pending", label: "Pending" },
        accepted: { cls: "h-badge-accepted", label: "Accepted" },
        declined: { cls: "h-badge-declined", label: "Declined" },
    };
    const entry = map[status] ?? map.pending;

    return (
        <span className={`badge ${entry.cls} px-3 py-2 rounded-pill fw-semibold`}>
            {entry.label}
        </span>
    );
}

function EmptyState() {
    return (
        <div className="text-center py-5 text-secondary">
            <i className="fas fa-inbox fs-1 mb-3 d-block opacity-25"></i>
            <p className="mb-0">No connection requests found.</p>
        </div>
    );
}

function Pagination({ links }) {
    return (
        <div className="h-pagination d-flex flex-wrap gap-1 justify-content-center mt-4">
            {links.map((link, i) =>
                link.url ? (
                    <Link
                        key={i}
                        href={link.url}
                        preserveScroll
                        className={link.active ? "active" : ""}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <span
                        key={i}
                        className="disabled"
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ),
            )}
        </div>
    );
}

function RespondModal({ connection, onClose }) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        status: "accepted",
        response: "",
    });

    if (!connection) return null;

    const alreadyResponded = connection.status !== "pending";

    function submit(e) {
        e.preventDefault();
        patch(route("talent.connections.respond", connection.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    }

    return (
        <div data-h-scope="talent-connections">
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={onClose}>
                <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-content rounded-4 border-0 shadow">
                        <div className="modal-header border-0 pb-0">
                            <h5 className="modal-title fw-bold" style={{ color: "#060f11" }}>
                                {alreadyResponded ? "Connection Request" : "Respond to Request"}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={onClose}
                            />
                        </div>
                        <div className="modal-body p-4">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                    style={{
                                        width: 48,
                                        height: 48,
                                        background: "rgba(72,213,151,0.14)",
                                        color: "#2fb87c",
                                    }}
                                >
                                    {(connection.name || "?").slice(0, 2).toUpperCase()}
                                </div>
                                <div>
                                    <div className="fw-semibold">{connection.name}</div>
                                    <div className="small text-secondary">{connection.email}</div>
                                </div>
                            </div>

                            {connection.message && (
                                <div className="mb-3">
                                    <label className="small fw-semibold text-uppercase text-secondary d-block mb-1">
                                        Message
                                    </label>
                                    <p className="mb-0">{connection.message}</p>
                                </div>
                            )}

                            {alreadyResponded ? (
                                <div>
                                    <StatusBadge status={connection.status} />
                                    {connection.response && (
                                        <p className="mt-3 mb-0">{connection.response}</p>
                                    )}
                                </div>
                            ) : (
                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <label className="form-label small fw-semibold">
                                            Decision
                                        </label>
                                        <div className="d-flex gap-2">
                                            <button
                                                type="button"
                                                className={`btn rounded-pill px-4 flex-fill ${
                                                    data.status === "accepted"
                                                        ? "h-btn-accent"
                                                        : "h-btn-ghost"
                                                }`}
                                                onClick={() => setData("status", "accepted")}
                                            >
                                                <i className="fas fa-check me-2"></i>
                                                Accept
                                            </button>
                                            <button
                                                type="button"
                                                className={`btn rounded-pill px-4 flex-fill ${
                                                    data.status === "declined"
                                                        ? "btn-danger text-white"
                                                        : "h-btn-ghost"
                                                }`}
                                                onClick={() => setData("status", "declined")}
                                            >
                                                <i className="fas fa-xmark me-2"></i>
                                                Decline
                                            </button>
                                        </div>
                                        {errors.status && (
                                            <div className="text-danger small mt-1">
                                                {errors.status}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label small fw-semibold">
                                            Reply (optional)
                                        </label>
                                        <textarea
                                            className={`form-control rounded-3 ${
                                                errors.response ? "is-invalid" : ""
                                            }`}
                                            rows={3}
                                            value={data.response}
                                            onChange={(e) => setData("response", e.target.value)}
                                            placeholder="Add a short note back to them..."
                                        />
                                        {errors.response && (
                                            <div className="invalid-feedback">
                                                {errors.response}
                                            </div>
                                        )}
                                    </div>

                                    <div className="d-flex justify-content-end gap-2">
                                        <button
                                            type="button"
                                            className="btn h-btn-ghost rounded-pill px-4"
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn h-btn-accent rounded-pill px-4"
                                            disabled={processing}
                                        >
                                            {processing ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" />
                                                    Sending...
                                                </>
                                            ) : (
                                                "Send Response"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" onClick={onClose}></div>
        </div>
    );
}
