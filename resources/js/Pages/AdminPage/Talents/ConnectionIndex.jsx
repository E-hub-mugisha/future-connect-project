import React, { useState } from "react";
import { Head, Link, router, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

const routes = {
    connectionShow: (id) => `/admin/connections/show/${id}`,
    connectionsIndex: "/admin/connections",
    connectionStore: "/admin/connections",
};

function initials(name) {
    if (!name) return "—";
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase())
        .join("");
}

function decodePaginationLabel(label) {
    return label
        .replace(/&laquo;/g, "‹")
        .replace(/&raquo;/g, "›")
        .replace(/Previous/i, "Prev");
}

function StatusBadge({ status }) {
    const s = (status ?? "pending").toLowerCase();
    const map = {
        pending: { cls: "badge-pending", label: "Pending", icon: "ti-clock" },
        accepted: { cls: "badge-success", label: "Accepted", icon: "ti-check" },
        approved: { cls: "badge-success", label: "Approved", icon: "ti-check" },
        rejected: { cls: "badge-danger", label: "Rejected", icon: "ti-x" },
        declined: { cls: "badge-danger", label: "Declined", icon: "ti-x" },
    };
    const meta = map[s] ?? {
        cls: "badge-pending",
        label: status ?? "Pending",
        icon: "ti-clock",
    };
    return (
        <span className={`badge ${meta.cls}`}>
            <i className={`ti ${meta.icon}`} /> {meta.label}
        </span>
    );
}

export default function ConnectionIndex({
    connections,
    filters = {},
    talents = [],
}) {
    const [requestModalOpen, setRequestModalOpen] = useState(false);
    const [search, setSearch] = useState(filters.search ?? "");
    const [statusFilter, setStatusFilter] = useState(filters.status ?? "");

    const rows = connections?.data ?? [];
    const paginationLinks = connections?.links ?? [];

    const computedStats = {
        total: connections?.total ?? rows.length,
        pending: rows.filter(
            (c) => (c.status ?? "pending").toLowerCase() === "pending",
        ).length,
        responded: rows.filter((c) => !!c.response).length,
    };

    const applyFilters = (nextSearch = search, nextStatus = statusFilter) => {
        router.get(
            routes.connectionsIndex,
            { search: nextSearch, status: nextStatus },
            { preserveState: true, preserveScroll: true, replace: true },
        );
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        applyFilters();
    };

    const handleStatusClick = (value) => {
        setStatusFilter(value);
        applyFilters(search, value);
    };

    const requestForm = useForm({
        talent_id: "",
        name: "",
        email: "",
        message: "",
    });

    const submitRequest = (e) => {
        e.preventDefault();
        requestForm.post(routes.connectionStore, {
            preserveScroll: true,
            onSuccess: () => {
                requestForm.reset();
                setRequestModalOpen(false);
            },
        });
    };

    return (
        <>
            <Head title="Skill Connections" />

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

                .admin-page { padding: 40px 32px 56px; max-width: 1200px; margin: 0 auto; }
                @media(max-width: 768px) { .admin-page { padding: 24px 16px 40px; } }

                .admin-header {
                    display: flex; align-items: flex-end; justify-content: space-between;
                    gap: 20px; flex-wrap: wrap;
                    margin-bottom: 28px;
                    padding-bottom: 22px;
                    border-bottom: 2px solid var(--ink);
                }
                .admin-header h2 {
                    font-family: var(--font-head);
                    font-size: 1.5rem;
                    font-weight: 700;
                    letter-spacing: -.3px;
                    color: var(--ink);
                    margin: 0 0 5px;
                }
                .admin-header p { font-size: 0.85rem; color: var(--text-label); margin: 0; }

                .btn-primary-pill {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent);
                    color: #fff;
                    border: none;
                    border-radius: var(--radius);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.15s;
                    white-space: nowrap;
                }
                .btn-primary-pill:hover { background: var(--accent-dim); }

                /* ── Stat cards ── */
                .stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
                @media(max-width: 900px) { .stat-row { grid-template-columns: repeat(2, 1fr); } }
                .stat-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-left: 3px solid var(--ink);
                    border-radius: var(--radius-lg);
                    padding: 18px 20px;
                    display: flex; align-items: center; justify-content: space-between; gap: 14px;
                }
                .stat-card.pending { border-left-color: var(--warn); }
                .stat-meta p { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 6px; }
                .stat-meta h4 { font-family: var(--font-head); font-size: 1.5rem; font-weight: 700; color: var(--ink); margin: 0; }
                .stat-card i { font-size: 1.15rem; color: var(--border); }
                .stat-card.pending i { color: var(--warn); }

                /* ── Toolbar ── */
                .table-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                }
                .table-toolbar {
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 16px; flex-wrap: wrap;
                    padding: 18px 22px;
                    border-bottom: 1px solid var(--border);
                }
                .search-wrap {
                    display: flex; align-items: center; gap: 8px;
                    background: var(--bg-deep);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 9px 14px;
                    flex: 1;
                    max-width: 320px;
                    transition: border-color 0.15s, box-shadow 0.15s;
                }
                .search-wrap:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-tint); }
                .search-wrap i { color: var(--text-muted); font-size: 0.9rem; }
                .search-wrap input {
                    background: transparent; border: none; outline: none;
                    color: var(--ink); font-size: 0.85rem; width: 100%;
                    font-family: var(--font-body);
                }
                .search-wrap input::placeholder { color: var(--text-muted); }

                .status-filters { display: flex; gap: 6px; flex-wrap: wrap; }
                .status-chip {
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--text-label);
                    border-radius: var(--radius);
                    padding: 8px 15px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: border-color 0.15s, color 0.15s, background 0.15s;
                }
                .status-chip:hover { border-color: var(--ink); color: var(--ink); }
                .status-chip.active { background: var(--ink); border-color: var(--ink); color: #fff; }

                /* ── Table ── */
                .admin-table { width: 100%; border-collapse: collapse; }
                .admin-table th {
                    text-align: left;
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-muted);
                    font-weight: 700;
                    padding: 14px 22px;
                    border-bottom: 1px solid var(--border);
                    white-space: nowrap;
                }
                .fc-admin-page .admin-table tr td {
                    background-color: var(--bg-card) !important;
                    padding: 16px 22px;
                    border-bottom: 1px solid var(--border);
                    font-size: 0.85rem;
                    color: var(--ink-soft);
                    vertical-align: middle;
                }
                .admin-table tbody tr:last-child td { border-bottom: none; }
                .admin-table tbody tr { transition: background 0.15s; }
                .admin-table tbody tr:hover td { background: var(--bg-deep) !important; }

                .cell-person { display: flex; align-items: center; gap: 12px; }
                .avatar-circle {
                    width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
                    background: var(--bg-muted);
                    border: 1px solid var(--border);
                    color: var(--ink);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-head);
                    font-weight: 700;
                    font-size: 0.75rem;
                }
                .cell-person h6 { font-size: 0.85rem; font-weight: 700; color: var(--ink); margin: 0 0 2px; }
                .cell-person p { font-size: 0.75rem; color: var(--text-muted); margin: 0; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius);
                    padding: 4px 11px;
                    font-size: 0.72rem;
                    font-weight: 700;
                }
                .badge-success { background: var(--accent-tint); color: var(--accent-dim); }
                .badge-danger { background: var(--danger-tint); color: var(--danger); }
                .badge-pending { background: var(--warn-tint); color: var(--warn); }

                .message-cell {
                    max-width: 260px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .btn-view {
                    display: inline-flex; align-items: center; gap: 6px;
                    border: 1px solid var(--border-strong);
                    background: transparent;
                    color: var(--ink);
                    border-radius: var(--radius);
                    padding: 7px 15px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: background 0.15s, color 0.15s;
                }
                .btn-view:hover { background: var(--ink); color: #fff; }

                .empty-state { text-align: center; padding: 64px 24px; color: var(--text-muted); font-size: 0.9rem; }
                .empty-state i { font-size: 2.2rem; margin-bottom: 12px; display: block; color: var(--text-muted); }

                .table-footer { padding: 18px 22px; display: flex; justify-content: flex-end; border-top: 1px solid var(--border); }
                .pagination-nav { display: flex; gap: 6px; flex-wrap: wrap; }
                .page-link {
                    min-width: 34px; height: 34px;
                    display: inline-flex; align-items: center; justify-content: center;
                    padding: 0 10px;
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                    background: transparent;
                    color: var(--ink-soft);
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: border-color 0.15s, color 0.15s, background 0.15s;
                }
                .page-link:hover { border-color: var(--ink); color: var(--ink); }
                .page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .page-link.disabled { opacity: 0.35; pointer-events: none; }

                /* ── Modal ── */
                .fc-modal-backdrop {
                    position: fixed; inset: 0; background: rgba(10,10,10,.6);
                    display: flex; align-items: flex-start; justify-content: center;
                    z-index: 1050; padding: 3rem 1rem;
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                }
                .modal-dark {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    color: var(--ink);
                    width: 100%;
                    max-width: 460px;
                    margin: auto 0;
                    max-height: calc(100vh - 6rem);
                    display: flex;
                    flex-direction: column;
                }
                .modal-dark .modal-header {
                    border-bottom: 2px solid var(--ink);
                    padding: 20px 24px 18px;
                    display: flex; align-items: flex-start; justify-content: space-between;
                    flex-shrink: 0;
                }
                .modal-dark .modal-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; margin: 0; }
                .modal-dark .accent-bar { display: block; width: 28px; height: 3px; background: var(--accent); margin-top: 7px; }
                .modal-dark .modal-body { padding: 24px; overflow-y: auto; }
                .modal-dark .btn-close { background: transparent; border: none; color: var(--ink); font-size: 1.1rem; cursor: pointer; line-height: 1; }
                .form-label { font-size: 0.78rem; font-weight: 600; color: var(--text-label); margin-bottom: 6px; display: block; }
                .form-control-dark {
                    width: 100%;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    color: var(--ink);
                    padding: 10px 13px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.15s, box-shadow 0.15s;
                    margin-bottom: 14px;
                }
                .form-control-dark:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-tint); }
                .form-control-dark::placeholder { color: var(--text-muted); }
                textarea.form-control-dark { resize: vertical; min-height: 80px; }
                select.form-control-dark { appearance: none; cursor: pointer; }
                .btn-submit {
                    width: 100%;
                    background: var(--accent);
                    border: none;
                    border-radius: var(--radius);
                    color: #fff;
                    padding: 12px;
                    font-family: var(--font-head);
                    font-size: 0.875rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.15s;
                }
                .btn-submit:hover { background: var(--accent-dim); }
                .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

                @media(max-width: 768px) {
                    .admin-table { display: block; overflow-x: auto; white-space: nowrap; }
                    .fc-modal-backdrop { padding: 1.5rem 1rem; }
                    .modal-dark { max-height: calc(100vh - 3rem); }
                }
            `}</style>

            <div className="fc-admin-page">
                <div className="admin-page">
                    <div className="admin-header">
                        <div>
                            <h2>Skill connections</h2>
                            <p>
                                Review and manage connection requests between
                                users and skills.
                            </p>
                        </div>
                        <button
                            className="btn-primary-pill"
                            onClick={() => setRequestModalOpen(true)}
                        >
                            <i className="ti ti-plus" /> Connection request
                        </button>
                    </div>

                    {/* ═══════════════ STATS ═══════════════ */}
                    <div className="stat-row">
                        <div className="stat-card">
                            <div className="stat-meta">
                                <p>Total requests</p>
                                <h4>{computedStats.total}</h4>
                            </div>
                            <i className="ti ti-users-group" />
                        </div>
                        <div className="stat-card pending">
                            <div className="stat-meta">
                                <p>Pending</p>
                                <h4>{computedStats.pending}</h4>
                            </div>
                            <i className="ti ti-clock" />
                        </div>
                        <div className="stat-card">
                            <div className="stat-meta">
                                <p>Responded</p>
                                <h4>{computedStats.responded}</h4>
                            </div>
                            <i className="ti ti-message-circle" />
                        </div>
                    </div>

                    {/* ═══════════════ TABLE ═══════════════ */}
                    <div className="table-card">
                        <div className="table-toolbar">
                            <form
                                onSubmit={handleSearchSubmit}
                                className="search-wrap"
                            >
                                <i className="ti ti-search" />
                                <input
                                    type="text"
                                    placeholder="Search by name or email…"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </form>
                            <div className="status-filters">
                                {[
                                    { key: "", label: "All" },
                                    { key: "pending", label: "Pending" },
                                    { key: "accepted", label: "Accepted" },
                                    { key: "rejected", label: "Rejected" },
                                ].map((opt) => (
                                    <button
                                        key={opt.key || "all"}
                                        className={`status-chip ${statusFilter === opt.key ? "active" : ""}`}
                                        onClick={() =>
                                            handleStatusClick(opt.key)
                                        }
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {rows.length > 0 ? (
                            <div style={{ overflowX: "auto" }}>
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Requester</th>
                                            <th>Skill</th>
                                            <th>Status</th>
                                            <th>Requested at</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows.map((connection, i) => (
                                            <tr key={connection.id}>
                                                <td>
                                                    {(connections.from ?? 1) +
                                                        i}
                                                </td>
                                                <td>
                                                    <div className="cell-person">
                                                        <div className="avatar-circle">
                                                            {initials(
                                                                connection.name,
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h6>
                                                                {connection.name ??
                                                                    "N/A"}
                                                            </h6>
                                                            <p>
                                                                {connection.email ??
                                                                    ""}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="cell-person">
                                                        <div className="avatar-circle">
                                                            {initials(
                                                                connection
                                                                    .talent
                                                                    ?.name,
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h6>
                                                                {
                                                                    connection
                                                                        .talent
                                                                        ?.name
                                                                }
                                                            </h6>
                                                            <p>
                                                                {
                                                                    connection
                                                                        .talent
                                                                        ?.email
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <StatusBadge
                                                        status={
                                                            connection.status
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    {new Date(
                                                        connection.created_at,
                                                    ).toLocaleString("en-US", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric",
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </td>
                                                <td>
                                                    <Link
                                                        href={routes.connectionShow(
                                                            connection.id ?? 0,
                                                        )}
                                                        className="btn-view"
                                                    >
                                                        <i className="ti ti-eye" />{" "}
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="empty-state">
                                <i className="ti ti-inbox" />
                                No connection requests found at this moment.
                            </div>
                        )}

                        {paginationLinks.length > 3 && (
                            <div className="table-footer">
                                <div className="pagination-nav">
                                    {paginationLinks.map((link, i) => (
                                        <Link
                                            key={i}
                                            href={link.url || "#"}
                                            className={`page-link ${link.active ? "active" : ""} ${!link.url ? "disabled" : ""}`}
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

                {/* ═══════════════ NEW CONNECTION REQUEST MODAL ═══════════════ */}
                {requestModalOpen && (
                    <div
                        className="fc-modal-backdrop"
                        onClick={() => setRequestModalOpen(false)}
                    >
                        <div
                            className="modal-dark"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <div>
                                    <h5 className="modal-title">
                                        New connection request
                                    </h5>
                                    <span className="accent-bar" />
                                </div>
                                <button
                                    className="btn-close"
                                    onClick={() => setRequestModalOpen(false)}
                                >
                                    ✕
                                </button>
                            </div>
                            <form onSubmit={submitRequest}>
                                <div className="modal-body">
                                    <label className="form-label">Talent</label>
                                    {talents.length > 0 ? (
                                        <select
                                            className="form-control-dark"
                                            value={requestForm.data.talent_id}
                                            onChange={(e) =>
                                                requestForm.setData(
                                                    "talent_id",
                                                    e.target.value,
                                                )
                                            }
                                            required
                                        >
                                            <option value="">
                                                Select a talent
                                            </option>
                                            {talents.map((t) => (
                                                <option value={t.id} key={t.id}>
                                                    {t.name}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type="text"
                                            className="form-control-dark"
                                            placeholder="Talent name"
                                            value={requestForm.data.talent_id}
                                            onChange={(e) =>
                                                requestForm.setData(
                                                    "talent_id",
                                                    e.target.value,
                                                )
                                            }
                                            required
                                        />
                                    )}

                                    <label className="form-label">
                                        Requester name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control-dark"
                                        placeholder="Full name"
                                        value={requestForm.data.name}
                                        onChange={(e) =>
                                            requestForm.setData(
                                                "name",
                                                e.target.value,
                                            )
                                        }
                                        required
                                    />

                                    <label className="form-label">
                                        Requester email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control-dark"
                                        placeholder="email@example.com"
                                        value={requestForm.data.email}
                                        onChange={(e) =>
                                            requestForm.setData(
                                                "email",
                                                e.target.value,
                                            )
                                        }
                                        required
                                    />

                                    <label className="form-label">
                                        Message (optional)
                                    </label>
                                    <textarea
                                        className="form-control-dark"
                                        placeholder="Add a note about this request…"
                                        value={requestForm.data.message}
                                        onChange={(e) =>
                                            requestForm.setData(
                                                "message",
                                                e.target.value,
                                            )
                                        }
                                    />

                                    <button
                                        type="submit"
                                        className="btn-submit"
                                        disabled={requestForm.processing}
                                    >
                                        {requestForm.processing
                                            ? "Submitting…"
                                            : "Submit request"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

ConnectionIndex.layout = (page) => (
    <AppLayout children={page} title="Talent Connection" />
);