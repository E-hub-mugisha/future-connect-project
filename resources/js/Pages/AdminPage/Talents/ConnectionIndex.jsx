import React, { useMemo, useState } from "react";
import { Head, Link, router, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

/* ==========================================================================
   ICONS
============================================================================ */

const Icon = {
    Plus: ({ size = 17 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
        </svg>
    ),

    Search: ({ size = 17 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
        </svg>
    ),

    Users: ({ size = 19 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),

    Clock: ({ size = 19 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    ),

    Check: ({ size = 19 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 12 4 4L19 6" />
        </svg>
    ),

    CreditCard: ({ size = 19 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18" />
            <path d="M7 15h3" />
        </svg>
    ),

    User: ({ size = 16 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
    ),

    Briefcase: ({ size = 16 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M3 12h18" />
        </svg>
    ),

    Mail: ({ size = 14 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    ),

    Phone: ({ size = 14 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
        </svg>
    ),

    Calendar: ({ size = 14 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    ),

    Message: ({ size = 14 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.8-4.9A8.5 8.5 0 1 1 21 11.5Z" />
        </svg>
    ),

    ArrowRight: ({ size = 15 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    ),

    X: ({ size = 18 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    ),

    ChevronLeft: ({ size = 15 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    ),

    ChevronRight: ({ size = 15 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    ),
};

/* ==========================================================================
   HELPERS
============================================================================ */

function initials(value) {
    if (!value) return "TC";

    return value
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((item) => item.charAt(0).toUpperCase())
        .join("");
}

function formatDate(date) {
    if (!date) return "—";

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) return date;

    return parsed.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

function formatTime(date) {
    if (!date) return "";

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) return "";

    return parsed.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

function formatMoney(amount, currency = "RWF") {
    if (amount === null || amount === undefined || amount === "") {
        return "—";
    }

    const number = Number(amount);

    if (Number.isNaN(number)) {
        return `${amount} ${currency}`;
    }

    return `${new Intl.NumberFormat("en-US").format(number)} ${currency}`;
}

function cleanStatus(status) {
    if (!status) return "Unknown";

    return String(status)
        .replaceAll("_", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getStatusClass(status) {
    switch ((status || "").toLowerCase()) {
        case "accepted":
        case "approved":
            return "tc-success";

        case "pending":
            return "tc-warning";

        case "rejected":
        case "declined":
            return "tc-danger";

        default:
            return "tc-neutral";
    }
}

function getPaymentClass(status) {
    switch ((status || "").toLowerCase()) {
        case "paid":
        case "completed":
        case "success":
            return "tc-success";

        case "pending":
        case "unpaid":
            return "tc-warning";

        case "failed":
        case "cancelled":
        case "rejected":
            return "tc-danger";

        default:
            return "tc-neutral";
    }
}

/* ==========================================================================
   STAT CARD
============================================================================ */

function StatCard({
    icon,
    label,
    value,
    description,
    tone = "green",
}) {
    return (
        <div className="tc-stat">
            <div className={`tc-stat-icon tc-stat-${tone}`}>
                {icon}
            </div>

            <div className="tc-stat-content">
                <div className="tc-stat-label">{label}</div>

                <div className="tc-stat-value">
                    {Number(value || 0).toLocaleString()}
                </div>

                <div className="tc-stat-description">
                    {description}
                </div>
            </div>
        </div>
    );
}

/* ==========================================================================
   MAIN PAGE
============================================================================ */

export default function ConnectionIndex({
    connections,
    talents = [],
    stats = {},
    filters = {},
}) {
    const [showModal, setShowModal] = useState(false);

    const requestForm = useForm({
        talent_id: "",
        message: "",
    });

    const [search, setSearch] = useState(filters.search || "");
    const [status, setStatus] = useState(filters.status || "");

    const data = connections?.data || [];
    const links = connections?.links || [];

    const selectedTalent = useMemo(() => {
        return talents.find(
            (talent) =>
                String(talent.id) ===
                String(requestForm.data.talent_id)
        );
    }, [talents, requestForm.data.talent_id]);

    /* ----------------------------------------------------------------------
       FILTERS
    ---------------------------------------------------------------------- */

    const submitSearch = (e) => {
        e.preventDefault();

        router.get(
            "/admin/connections",
            {
                search: search || undefined,
                status: status || undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    };

    const changeStatus = (value) => {
        setStatus(value);

        router.get(
            "/admin/connections",
            {
                search: search || undefined,
                status: value || undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    };

    const clearSearch = () => {
        setSearch("");

        router.get(
            "/admin/connections",
            {
                status: status || undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    };

    /* ----------------------------------------------------------------------
       MODAL
    ---------------------------------------------------------------------- */

    const submitRequest = (e) => {
        e.preventDefault();

        requestForm.post("/admin/connections", {
            preserveScroll: true,

            onSuccess: () => {
                setShowModal(false);
                requestForm.reset();
            },
        });
    };

    const closeModal = () => {
        if (requestForm.processing) return;

        setShowModal(false);
        requestForm.reset();
    };

    return (
        <>
            <Head title="Talent Connections" />

            <div
                className="tc-page"
                data-theme="light"
            >
                {/* ==========================================================
                    PAGE HEADER
                ========================================================== */}

                <div className="tc-header">
                    <div className="tc-header-copy">
                        <div className="tc-eyebrow">
                            TALENT NETWORK
                        </div>

                        <h1 className="tc-title">
                            Talent connections
                        </h1>

                        <p className="tc-subtitle">
                            Manage connection requests between clients
                            and talents from one place.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="tc-primary-button"
                        onClick={() => setShowModal(true)}
                    >
                        <Icon.Plus size={16} />
                        New connection
                    </button>
                </div>

                {/* ==========================================================
                    STATS
                ========================================================== */}

                <div className="row g-3 tc-stats-row">
                    <div className="col-12 col-sm-6 col-xl-3">
                        <StatCard
                            icon={<Icon.Users />}
                            label="Total requests"
                            value={stats.total}
                            description="All connection requests"
                            tone="green"
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3">
                        <StatCard
                            icon={<Icon.Clock />}
                            label="Pending"
                            value={stats.pending}
                            description="Waiting for action"
                            tone="orange"
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3">
                        <StatCard
                            icon={<Icon.Check />}
                            label="Accepted"
                            value={stats.accepted}
                            description="Successfully accepted"
                            tone="blue"
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3">
                        <StatCard
                            icon={<Icon.CreditCard />}
                            label="Paid"
                            value={stats.paid}
                            description="Payment completed"
                            tone="purple"
                        />
                    </div>
                </div>

                {/* ==========================================================
                    TABLE CARD
                ========================================================== */}

                <div className="tc-card">

                    {/* Toolbar */}
                    <div className="tc-toolbar">
                        <form
                            onSubmit={submitSearch}
                            className="tc-search"
                        >
                            <Icon.Search size={16} />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search connections..."
                            />

                            {search && (
                                <button
                                    type="button"
                                    className="tc-search-clear"
                                    onClick={clearSearch}
                                >
                                    <Icon.X size={14} />
                                </button>
                            )}
                        </form>

                        <div className="tc-filters">
                            {[
                                ["", "All"],
                                ["pending", "Pending"],
                                ["accepted", "Accepted"],
                                ["rejected", "Rejected"],
                            ].map(([value, label]) => (
                                <button
                                    key={value || "all"}
                                    type="button"
                                    className={`tc-filter ${
                                        status === value
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        changeStatus(value)
                                    }
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ======================================================
                        DESKTOP TABLE
                    ====================================================== */}

                    <div className="tc-table-container">
                        <table className="tc-table">
                            <thead>
                                <tr>
                                    <th>REQUESTER</th>
                                    <th>TALENT</th>
                                    <th>MESSAGE</th>
                                    <th>STATUS</th>
                                    <th>PAYMENT</th>
                                    <th>DATE</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.length > 0 ? (
                                    data.map((connection) => {
                                        const requesterName =
                                            connection.user?.name ||
                                            connection.name ||
                                            "Unknown user";

                                        const requesterEmail =
                                            connection.user?.email ||
                                            connection.email ||
                                            "";

                                        const talentName =
                                            connection.talent?.name ||
                                            "Unknown talent";

                                        const paymentStatus =
                                            connection.payment?.status ||
                                            connection.payment_status ||
                                            "pending";

                                        const paymentAmount =
                                            connection.payment?.amount ??
                                            connection.amount;

                                        const currency =
                                            connection.payment?.currency ||
                                            "RWF";

                                        return (
                                            <tr key={connection.id}>

                                                {/* Requester */}
                                                <td>
                                                    <div className="tc-person">
                                                        <div className="tc-avatar">
                                                            {initials(
                                                                requesterName
                                                            )}
                                                        </div>

                                                        <div className="tc-person-details">
                                                            <div className="tc-person-name">
                                                                {
                                                                    requesterName
                                                                }
                                                            </div>

                                                            {requesterEmail && (
                                                                <div className="tc-person-meta">
                                                                    <Icon.Mail size={12} />
                                                                    {
                                                                        requesterEmail
                                                                    }
                                                                </div>
                                                            )}

                                                            {connection.phone && (
                                                                <div className="tc-person-meta">
                                                                    <Icon.Phone size={12} />
                                                                    {
                                                                        connection.phone
                                                                    }
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Talent */}
                                                <td>
                                                    <div className="tc-talent">
                                                        <div className="tc-talent-avatar">
                                                            <Icon.Briefcase
                                                                size={15}
                                                            />
                                                        </div>

                                                        <div>
                                                            <div className="tc-talent-name">
                                                                {
                                                                    talentName
                                                                }
                                                            </div>

                                                            {connection
                                                                .talent
                                                                ?.email && (
                                                                <div className="tc-secondary-text">
                                                                    {
                                                                        connection
                                                                            .talent
                                                                            .email
                                                                    }
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Message */}
                                                <td>
                                                    {connection.message ? (
                                                        <div className="tc-message">
                                                            <Icon.Message size={13} />

                                                            <span>
                                                                {
                                                                    connection.message
                                                                }
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <span className="tc-no-message">
                                                            No message
                                                        </span>
                                                    )}
                                                </td>

                                                {/* Status */}
                                                <td>
                                                    <span
                                                        className={`tc-status ${getStatusClass(
                                                            connection.status
                                                        )}`}
                                                    >
                                                        <span className="tc-status-dot" />
                                                        {cleanStatus(
                                                            connection.status
                                                        )}
                                                    </span>
                                                </td>

                                                {/* Payment */}
                                                <td>
                                                    <div className="tc-payment">
                                                        <span
                                                            className={`tc-status ${getPaymentClass(
                                                                paymentStatus
                                                            )}`}
                                                        >
                                                            {cleanStatus(
                                                                paymentStatus
                                                            )}
                                                        </span>

                                                        <div className="tc-payment-amount">
                                                            {formatMoney(
                                                                paymentAmount,
                                                                currency
                                                            )}
                                                        </div>

                                                        {connection.payment_reference && (
                                                            <div className="tc-payment-reference">
                                                                {
                                                                    connection.payment_reference
                                                                }
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>

                                                {/* Date */}
                                                <td>
                                                    <div className="tc-date">
                                                        <Icon.Calendar size={12} />

                                                        <span>
                                                            {formatDate(
                                                                connection.created_at
                                                            )}
                                                        </span>
                                                    </div>

                                                    <div className="tc-time">
                                                        {formatTime(
                                                            connection.created_at
                                                        )}
                                                    </div>
                                                </td>

                                                {/* Action */}
                                                <td className="tc-action-cell">
                                                    <Link
                                                        href={`/admin/connections/show/${connection.id}`}
                                                        className="tc-view"
                                                    >
                                                        View
                                                        <Icon.ArrowRight size={13} />
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="tc-empty-cell"
                                        >
                                            <div className="tc-empty">
                                                <div className="tc-empty-icon">
                                                    <Icon.Users size={23} />
                                                </div>

                                                <h3>
                                                    No connection requests
                                                </h3>

                                                <p>
                                                    No requests match your
                                                    current filters.
                                                </p>

                                                <button
                                                    type="button"
                                                    className="tc-primary-button"
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                >
                                                    <Icon.Plus size={15} />
                                                    New connection
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* ======================================================
                        MOBILE LIST
                    ====================================================== */}

                    <div className="tc-mobile-list">
                        {data.length > 0 ? (
                            data.map((connection) => {
                                const requesterName =
                                    connection.user?.name ||
                                    connection.name ||
                                    "Unknown user";

                                const requesterEmail =
                                    connection.user?.email ||
                                    connection.email ||
                                    "";

                                const talentName =
                                    connection.talent?.name ||
                                    "Unknown talent";

                                const paymentStatus =
                                    connection.payment?.status ||
                                    connection.payment_status ||
                                    "pending";

                                const paymentAmount =
                                    connection.payment?.amount ??
                                    connection.amount;

                                const currency =
                                    connection.payment?.currency ||
                                    "RWF";

                                return (
                                    <div
                                        key={connection.id}
                                        className="tc-mobile-card"
                                    >
                                        <div className="tc-mobile-top">
                                            <div className="tc-person">
                                                <div className="tc-avatar">
                                                    {initials(
                                                        requesterName
                                                    )}
                                                </div>

                                                <div className="tc-person-details">
                                                    <div className="tc-person-name">
                                                        {requesterName}
                                                    </div>

                                                    {requesterEmail && (
                                                        <div className="tc-person-meta">
                                                            {requesterEmail}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <span
                                                className={`tc-status ${getStatusClass(
                                                    connection.status
                                                )}`}
                                            >
                                                <span className="tc-status-dot" />
                                                {cleanStatus(
                                                    connection.status
                                                )}
                                            </span>
                                        </div>

                                        <div className="tc-mobile-divider" />

                                        <div className="tc-mobile-row">
                                            <span>Talent</span>

                                            <strong>
                                                {talentName}
                                            </strong>
                                        </div>

                                        <div className="tc-mobile-row">
                                            <span>Payment</span>

                                            <div className="tc-mobile-payment">
                                                <span
                                                    className={`tc-status ${getPaymentClass(
                                                        paymentStatus
                                                    )}`}
                                                >
                                                    {cleanStatus(
                                                        paymentStatus
                                                    )}
                                                </span>

                                                <small>
                                                    {formatMoney(
                                                        paymentAmount,
                                                        currency
                                                    )}
                                                </small>
                                            </div>
                                        </div>

                                        <div className="tc-mobile-row">
                                            <span>Requested</span>

                                            <strong>
                                                {formatDate(
                                                    connection.created_at
                                                )}
                                            </strong>
                                        </div>

                                        {connection.message && (
                                            <div className="tc-mobile-message">
                                                <span>Message</span>

                                                <p>
                                                    {connection.message}
                                                </p>
                                            </div>
                                        )}

                                        <Link
                                            href={`/admin/connections/show/${connection.id}`}
                                            className="tc-mobile-view"
                                        >
                                            View connection
                                            <Icon.ArrowRight size={14} />
                                        </Link>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="tc-mobile-empty">
                                <div className="tc-empty-icon">
                                    <Icon.Users size={22} />
                                </div>

                                <h3>No connection requests</h3>

                                <p>
                                    No requests match your current filters.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* ======================================================
                        PAGINATION
                    ====================================================== */}

                    {links.length > 3 && (
                        <div className="tc-pagination">
                            <div className="tc-pagination-summary">
                                Showing{" "}
                                <strong>
                                    {connections.from || 0}
                                </strong>{" "}
                                to{" "}
                                <strong>
                                    {connections.to || 0}
                                </strong>{" "}
                                of{" "}
                                <strong>
                                    {connections.total || 0}
                                </strong>
                            </div>

                            <div className="tc-pagination-links">
                                {links.map((link, index) => {
                                    const previous = index === 0;
                                    const next =
                                        index === links.length - 1;

                                    return (
                                        <Link
                                            key={index}
                                            href={link.url || "#"}
                                            preserveScroll
                                            className={`tc-page-link ${
                                                link.active
                                                    ? "active"
                                                    : ""
                                            } ${
                                                !link.url
                                                    ? "disabled"
                                                    : ""
                                            }`}
                                        >
                                            {previous ? (
                                                <Icon.ChevronLeft />
                                            ) : next ? (
                                                <Icon.ChevronRight />
                                            ) : (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            link.label,
                                                    }}
                                                />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ==============================================================
                NEW CONNECTION MODAL
            ============================================================== */}

            {showModal && (
                <div
                    className="tc-modal-backdrop"
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) {
                            closeModal();
                        }
                    }}
                >
                    <div className="tc-modal">

                        <div className="tc-modal-header">
                            <div>
                                <div className="tc-modal-eyebrow">
                                    NEW CONNECTION
                                </div>

                                <h2>
                                    Create a talent connection
                                </h2>

                                <p>
                                    Select a talent and add an optional
                                    introduction message.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="tc-modal-close"
                                onClick={closeModal}
                                disabled={requestForm.processing}
                            >
                                <Icon.X size={17} />
                            </button>
                        </div>

                        <form onSubmit={submitRequest}>
                            <div className="tc-modal-body">

                                {/* Talent */}
                                <div className="tc-field">
                                    <label htmlFor="talent_id">
                                        Talent
                                        <span>*</span>
                                    </label>

                                    <select
                                        id="talent_id"
                                        value={
                                            requestForm.data.talent_id
                                        }
                                        onChange={(e) =>
                                            requestForm.setData(
                                                "talent_id",
                                                e.target.value
                                            )
                                        }
                                        className={`tc-select ${
                                            requestForm.errors.talent_id
                                                ? "invalid"
                                                : ""
                                        }`}
                                    >
                                        <option value="">
                                            Select a talent
                                        </option>

                                        {talents.map((talent) => (
                                            <option
                                                key={talent.id}
                                                value={talent.id}
                                            >
                                                {talent.name}
                                                {talent.email
                                                    ? ` — ${talent.email}`
                                                    : ""}
                                            </option>
                                        ))}
                                    </select>

                                    {requestForm.errors.talent_id && (
                                        <div className="tc-error">
                                            {
                                                requestForm.errors
                                                    .talent_id
                                            }
                                        </div>
                                    )}
                                </div>

                                {/* Selected talent */}
                                {selectedTalent && (
                                    <div className="tc-selected">
                                        <div className="tc-selected-icon">
                                            <Icon.Briefcase size={17} />
                                        </div>

                                        <div className="tc-selected-content">
                                            <span>
                                                Selected talent
                                            </span>

                                            <strong>
                                                {selectedTalent.name}
                                            </strong>

                                            {selectedTalent.email && (
                                                <small>
                                                    {
                                                        selectedTalent.email
                                                    }
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Message */}
                                <div className="tc-field">
                                    <label htmlFor="message">
                                        Message
                                        <small>Optional</small>
                                    </label>

                                    <textarea
                                        id="message"
                                        rows="5"
                                        value={
                                            requestForm.data.message
                                        }
                                        onChange={(e) =>
                                            requestForm.setData(
                                                "message",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Write a short message explaining why you would like to connect..."
                                        className={`tc-textarea ${
                                            requestForm.errors.message
                                                ? "invalid"
                                                : ""
                                        }`}
                                    />

                                    {requestForm.errors.message && (
                                        <div className="tc-error">
                                            {
                                                requestForm.errors
                                                    .message
                                            }
                                        </div>
                                    )}
                                </div>

                                {/* Authenticated user */}
                                <div className="tc-auth-note">
                                    <div className="tc-auth-icon">
                                        <Icon.User size={15} />
                                    </div>

                                    <div>
                                        <strong>
                                            Requester information
                                        </strong>

                                        <p>
                                            The request will automatically
                                            use the currently authenticated
                                            user's account.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tc-modal-footer">
                                <button
                                    type="button"
                                    className="tc-secondary-button"
                                    onClick={closeModal}
                                    disabled={requestForm.processing}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="tc-primary-button"
                                    disabled={
                                        requestForm.processing ||
                                        !requestForm.data.talent_id
                                    }
                                >
                                    {requestForm.processing
                                        ? "Creating..."
                                        : "Create connection"}

                                    {!requestForm.processing && (
                                        <Icon.ArrowRight size={14} />
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ==============================================================
                STYLES
            ============================================================== */}

            <style>{`
                /* ==========================================================
                   LIGHT MODE ONLY
                ========================================================== */

                .tc-page {
                    --tc-bg: #f7f8fa;
                    --tc-card: #ffffff;
                    --tc-soft: #f8f9fa;
                    --tc-soft-2: #f4f6f7;

                    --tc-text: #202326;
                    --tc-heading: #151719;
                    --tc-muted: #73797f;
                    --tc-subtle: #9ca2a7;

                    --tc-border: #e7e9eb;
                    --tc-border-strong: #dfe3e6;

                    --tc-green: #00a667;
                    --tc-green-dark: #008d59;
                    --tc-green-soft: #eaf8f2;

                    color-scheme: light;

                    min-height: 100vh;
                    padding: 28px;
                    background: var(--tc-bg) !important;
                    color: var(--tc-text) !important;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    font-size: 13px;
                }

                .tc-page *,
                .tc-page *::before,
                .tc-page *::after {
                    box-sizing: border-box;
                }

                /* Prevent external dark styles from leaking in */

                .tc-page h1,
                .tc-page h2,
                .tc-page h3,
                .tc-page p {
                    font-family: inherit;
                }

                /* ==========================================================
                   HEADER
                ========================================================== */

                .tc-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 24px;
                    margin-bottom: 24px;
                }

                .tc-eyebrow,
                .tc-modal-eyebrow {
                    margin-bottom: 7px;
                    color: var(--tc-green);
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: .12em;
                }

                .tc-title {
                    margin: 0;
                    color: var(--tc-heading) !important;
                    font-size: 26px;
                    line-height: 1.15;
                    font-weight: 650;
                    letter-spacing: -.035em;
                }

                .tc-subtitle {
                    max-width: 620px;
                    margin: 7px 0 0;
                    color: var(--tc-muted) !important;
                    font-size: 12px;
                    line-height: 1.55;
                }

                .tc-primary-button,
                .tc-secondary-button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    min-height: 39px;
                    padding: 0 14px;
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 11px;
                    font-weight: 650;
                    white-space: nowrap;
                    cursor: pointer;
                    transition: .18s ease;
                }

                .tc-primary-button {
                    border: 1px solid var(--tc-green);
                    background: var(--tc-green);
                    color: #fff !important;
                    box-shadow: 0 3px 8px rgba(0, 166, 103, .12);
                }

                .tc-primary-button:hover {
                    border-color: var(--tc-green-dark);
                    background: var(--tc-green-dark);
                    color: #fff !important;
                    transform: translateY(-1px);
                }

                .tc-primary-button:disabled {
                    opacity: .5;
                    cursor: not-allowed;
                    transform: none;
                }

                .tc-secondary-button {
                    border: 1px solid var(--tc-border-strong);
                    background: #fff;
                    color: #42474c;
                }

                .tc-secondary-button:hover {
                    background: var(--tc-soft);
                }

                /* ==========================================================
                   STATISTICS
                ========================================================== */

                .tc-stats-row {
                    margin-bottom: 22px;
                }

                .tc-stat {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-height: 105px;
                    padding: 16px;
                    background: var(--tc-card);
                    border: 1px solid var(--tc-border);
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(15, 23, 42, .025);
                }

                .tc-stat-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 38px;
                    height: 38px;
                    flex: 0 0 38px;
                    border-radius: 10px;
                }

                .tc-stat-green {
                    background: #e9f8f2;
                    color: var(--tc-green);
                }

                .tc-stat-orange {
                    background: #fff5e3;
                    color: #bd7b08;
                }

                .tc-stat-blue {
                    background: #edf4ff;
                    color: #3978c8;
                }

                .tc-stat-purple {
                    background: #f3effc;
                    color: #7657af;
                }

                .tc-stat-label {
                    margin-bottom: 2px;
                    color: var(--tc-muted);
                    font-size: 10px;
                    font-weight: 500;
                }

                .tc-stat-value {
                    color: var(--tc-heading);
                    font-size: 22px;
                    line-height: 1.15;
                    font-weight: 650;
                    letter-spacing: -.025em;
                }

                .tc-stat-description {
                    margin-top: 3px;
                    color: var(--tc-subtle);
                    font-size: 9px;
                }

                /* ==========================================================
                   MAIN CARD
                ========================================================== */

                .tc-card {
                    overflow: hidden;
                    background: var(--tc-card) !important;
                    border: 1px solid var(--tc-border);
                    border-radius: 13px;
                    box-shadow: 0 3px 12px rgba(15, 23, 42, .03);
                }

                /* ==========================================================
                   TOOLBAR
                ========================================================== */

                .tc-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 14px;
                    border-bottom: 1px solid var(--tc-border);
                }

                .tc-search {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    width: min(390px, 100%);
                    height: 38px;
                    padding: 0 10px;
                    border: 1px solid var(--tc-border);
                    border-radius: 8px;
                    background: var(--tc-soft);
                    color: #92989e;
                }

                .tc-search:focus-within {
                    border-color: #a9dbc9;
                    box-shadow: 0 0 0 3px rgba(0, 166, 103, .06);
                    background: #fff;
                }

                .tc-search input {
                    width: 100%;
                    min-width: 0;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    color: var(--tc-text);
                    font-family: inherit;
                    font-size: 11px;
                }

                .tc-search input::placeholder {
                    color: #a2a7ac;
                }

                .tc-search-clear {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2px;
                    border: 0;
                    background: transparent;
                    color: #858b91;
                    cursor: pointer;
                }

                .tc-filters {
                    display: flex;
                    align-items: center;
                    gap: 2px;
                    padding: 3px;
                    border-radius: 8px;
                    background: #f3f4f5;
                }

                .tc-filter {
                    height: 30px;
                    padding: 0 11px;
                    border: 0;
                    border-radius: 6px;
                    background: transparent;
                    color: #777d83;
                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 550;
                    cursor: pointer;
                    transition: .15s ease;
                }

                .tc-filter:hover {
                    color: var(--tc-heading);
                }

                .tc-filter.active {
                    background: #fff;
                    color: var(--tc-green-dark);
                    box-shadow: 0 1px 3px rgba(0, 0, 0, .07);
                }

                /* ==========================================================
                   TABLE
                ========================================================== */

                .tc-table-container {
                    width: 100%;
                    overflow-x: auto;
                }

                .tc-table {
                    width: 100%;
                    min-width: 1050px;
                    border-collapse: collapse;
                }

                .tc-table th {
                    padding: 11px 14px;
                    background: #fbfbfc;
                    border-bottom: 1px solid var(--tc-border);
                    color: #999ea3;
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: .08em;
                    text-align: left;
                    white-space: nowrap;
                }

                .tc-table td {
                    padding: 14px;
                    border-bottom: 1px solid #f0f1f2;
                    vertical-align: middle;
                }

                .tc-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .tc-table tbody tr {
                    transition: background .15s ease;
                }

                .tc-table tbody tr:hover {
                    background: #fcfdfd;
                }

                /* ==========================================================
                   PEOPLE
                ========================================================== */

                .tc-person {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    min-width: 175px;
                }

                .tc-avatar {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    flex: 0 0 34px;
                    border-radius: 9px;
                    background: #eaf8f2;
                    color: var(--tc-green-dark);
                    font-size: 9px;
                    font-weight: 700;
                }

                .tc-person-details {
                    min-width: 0;
                }

                .tc-person-name {
                    overflow: hidden;
                    color: #292d31;
                    font-size: 11px;
                    font-weight: 650;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .tc-person-meta {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: 3px;
                    overflow: hidden;
                    color: #999fa5;
                    font-size: 9px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* ==========================================================
                   TALENT
                ========================================================== */

                .tc-talent {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    min-width: 155px;
                }

                .tc-talent-avatar {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 30px;
                    height: 30px;
                    border-radius: 8px;
                    background: #f1f3f4;
                    color: #697076;
                }

                .tc-talent-name {
                    color: #33373b;
                    font-size: 11px;
                    font-weight: 600;
                }

                .tc-secondary-text {
                    max-width: 140px;
                    overflow: hidden;
                    margin-top: 3px;
                    color: #9ba0a5;
                    font-size: 8px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* ==========================================================
                   MESSAGE
                ========================================================== */

                .tc-message {
                    display: flex;
                    align-items: flex-start;
                    gap: 6px;
                    width: 175px;
                    color: #697077;
                    font-size: 9px;
                    line-height: 1.5;
                }

                .tc-message span {
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .tc-no-message {
                    color: #a1a6ab;
                    font-size: 9px;
                }

                /* ==========================================================
                   STATUS
                ========================================================== */

                .tc-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    width: fit-content;
                    padding: 5px 8px;
                    border-radius: 999px;
                    font-size: 8px;
                    font-weight: 650;
                    white-space: nowrap;
                }

                .tc-status-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: currentColor;
                }

                .tc-success {
                    background: #eaf8f0;
                    color: #23824d;
                }

                .tc-warning {
                    background: #fff5e2;
                    color: #aa7308;
                }

                .tc-danger {
                    background: #fff0f0;
                    color: #c14d4d;
                }

                .tc-neutral {
                    background: #f1f2f3;
                    color: #757b80;
                }

                /* ==========================================================
                   PAYMENT
                ========================================================== */

                .tc-payment {
                    min-width: 100px;
                }

                .tc-payment-amount {
                    margin-top: 4px;
                    color: #454a4f;
                    font-size: 9px;
                    font-weight: 600;
                }

                .tc-payment-reference {
                    max-width: 105px;
                    overflow: hidden;
                    margin-top: 2px;
                    color: #a3a8ad;
                    font-size: 8px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* ==========================================================
                   DATE
                ========================================================== */

                .tc-date {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    color: #646a70;
                    font-size: 9px;
                    white-space: nowrap;
                }

                .tc-time {
                    margin-top: 3px;
                    color: #a0a5aa;
                    font-size: 8px;
                }

                /* ==========================================================
                   VIEW
                ========================================================== */

                .tc-action-cell {
                    text-align: right;
                }

                .tc-view {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 7px 9px;
                    border: 1px solid var(--tc-border);
                    border-radius: 7px;
                    background: #fff;
                    color: #555b60;
                    font-size: 9px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: .15s ease;
                }

                .tc-view:hover {
                    border-color: #b9dfd1;
                    background: #f2fbf7;
                    color: var(--tc-green-dark);
                }

                /* ==========================================================
                   EMPTY
                ========================================================== */

                .tc-empty-cell {
                    height: 300px;
                }

                .tc-empty {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    text-align: center;
                }

                .tc-empty-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    margin-bottom: 12px;
                    border-radius: 13px;
                    background: #eef7f3;
                    color: var(--tc-green);
                }

                .tc-empty h3 {
                    margin: 0;
                    color: #353a3e;
                    font-size: 13px;
                    font-weight: 650;
                }

                .tc-empty p {
                    margin: 5px 0 14px;
                    color: #989da2;
                    font-size: 10px;
                }

                /* ==========================================================
                   MOBILE
                ========================================================== */

                .tc-mobile-list {
                    display: none;
                }

                /* ==========================================================
                   PAGINATION
                ========================================================== */

                .tc-pagination {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 13px 14px;
                    border-top: 1px solid var(--tc-border);
                }

                .tc-pagination-summary {
                    color: #969ba0;
                    font-size: 9px;
                }

                .tc-pagination-summary strong {
                    color: #565c61;
                    font-weight: 650;
                }

                .tc-pagination-links {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .tc-page-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 28px;
                    height: 28px;
                    padding: 0 7px;
                    border: 1px solid var(--tc-border);
                    border-radius: 7px;
                    background: #fff;
                    color: #6e7479;
                    font-size: 9px;
                    text-decoration: none;
                }

                .tc-page-link:hover:not(.disabled) {
                    border-color: #b9dfd1;
                    color: var(--tc-green);
                }

                .tc-page-link.active {
                    border-color: var(--tc-green);
                    background: var(--tc-green);
                    color: #fff;
                }

                .tc-page-link.disabled {
                    opacity: .4;
                    pointer-events: none;
                }

                /* ==========================================================
                   MODAL
                ========================================================== */

                .tc-modal-backdrop {
                    position: fixed;
                    z-index: 2000;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    background: rgba(17, 24, 22, .35);
                    backdrop-filter: blur(5px);
                }

                .tc-modal {
                    width: min(510px, 100%);
                    max-height: calc(100vh - 40px);
                    overflow-y: auto;
                    background: #fff !important;
                    color: #202326 !important;
                    border: 1px solid rgba(20, 30, 27, .09);
                    border-radius: 14px;
                    box-shadow:
                        0 25px 70px rgba(20, 30, 27, .18),
                        0 4px 15px rgba(20, 30, 27, .07);
                }

                .tc-modal-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 20px 21px;
                    border-bottom: 1px solid var(--tc-border);
                }

                .tc-modal-header h2 {
                    margin: 0;
                    color: #191c1f !important;
                    font-size: 17px;
                    font-weight: 650;
                    letter-spacing: -.025em;
                }

                .tc-modal-header p {
                    margin: 5px 0 0;
                    color: #878d92 !important;
                    font-size: 10px;
                    line-height: 1.5;
                }

                .tc-modal-close {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 30px;
                    height: 30px;
                    flex: 0 0 30px;
                    border: 1px solid var(--tc-border);
                    border-radius: 7px;
                    background: #fff !important;
                    color: #73797e !important;
                    cursor: pointer;
                }

                .tc-modal-close:hover {
                    background: #f5f6f7 !important;
                }

                .tc-modal-body {
                    padding: 20px 21px;
                }

                .tc-field {
                    margin-bottom: 17px;
                }

                .tc-field label {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin-bottom: 7px;
                    color: #363b40 !important;
                    font-size: 10px;
                    font-weight: 650;
                }

                .tc-field label > span {
                    color: #d85252;
                }

                .tc-field label small {
                    margin-left: 3px;
                    color: #a0a5aa;
                    font-size: 8px;
                    font-weight: 400;
                }

                .tc-select,
                .tc-textarea {
                    width: 100%;
                    border: 1px solid #dfe3e5 !important;
                    outline: 0;
                    border-radius: 8px;
                    background: #fff !important;
                    color: #30353a !important;
                    font-family: inherit;
                    font-size: 11px;
                    transition: .15s ease;
                }

                .tc-select {
                    height: 41px;
                    padding: 0 10px;
                }

                .tc-textarea {
                    min-height: 115px;
                    padding: 10px;
                    resize: vertical;
                    line-height: 1.55;
                }

                .tc-select:focus,
                .tc-textarea:focus {
                    border-color: var(--tc-green) !important;
                    box-shadow: 0 0 0 3px rgba(0, 166, 103, .07);
                }

                .tc-select.invalid,
                .tc-textarea.invalid {
                    border-color: #df6969 !important;
                }

                .tc-error {
                    margin-top: 5px;
                    color: #d15353;
                    font-size: 9px;
                }

                /* Selected talent */

                .tc-selected {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: -3px;
                    margin-bottom: 17px;
                    padding: 10px;
                    border: 1px solid #d8eee5;
                    border-radius: 9px;
                    background: #f3fbf7;
                }

                .tc-selected-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    flex: 0 0 34px;
                    border-radius: 8px;
                    background: #def4e9;
                    color: var(--tc-green-dark);
                }

                .tc-selected-content {
                    min-width: 0;
                }

                .tc-selected-content span {
                    display: block;
                    color: #949a9f;
                    font-size: 8px;
                }

                .tc-selected-content strong {
                    display: block;
                    margin-top: 2px;
                    color: #292e32;
                    font-size: 11px;
                    font-weight: 650;
                }

                .tc-selected-content small {
                    display: block;
                    margin-top: 2px;
                    overflow: hidden;
                    color: #92989d;
                    font-size: 8px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* Auth note */

                .tc-auth-note {
                    display: flex;
                    align-items: flex-start;
                    gap: 9px;
                    padding: 10px;
                    border: 1px solid var(--tc-border);
                    border-radius: 9px;
                    background: #f8f9fa;
                }

                .tc-auth-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 27px;
                    height: 27px;
                    flex: 0 0 27px;
                    border-radius: 7px;
                    background: #fff;
                    color: #6e747a;
                }

                .tc-auth-note strong {
                    display: block;
                    color: #4b5055;
                    font-size: 9px;
                    font-weight: 650;
                }

                .tc-auth-note p {
                    margin: 3px 0 0;
                    color: #969ba0;
                    font-size: 8px;
                    line-height: 1.5;
                }

                .tc-modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 7px;
                    padding: 13px 21px;
                    border-top: 1px solid var(--tc-border);
                    background: #fbfbfc;
                }

                /* ==========================================================
                   MOBILE RESPONSIVE
                ========================================================== */

                @media (max-width: 991px) {
                    .tc-page {
                        padding: 21px;
                    }

                    .tc-header {
                        align-items: flex-start;
                    }

                    .tc-toolbar {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .tc-search {
                        width: 100%;
                    }

                    .tc-filters {
                        width: fit-content;
                    }
                }

                @media (max-width: 767px) {
                    .tc-page {
                        padding: 15px;
                    }

                    .tc-header {
                        flex-direction: column;
                        gap: 14px;
                        margin-bottom: 18px;
                    }

                    .tc-header .tc-primary-button {
                        width: 100%;
                    }

                    .tc-title {
                        font-size: 23px;
                    }

                    .tc-subtitle {
                        font-size: 11px;
                    }

                    .tc-stat {
                        min-height: 94px;
                        padding: 14px;
                    }

                    .tc-stat-value {
                        font-size: 20px;
                    }

                    .tc-table-container {
                        display: none;
                    }

                    .tc-mobile-list {
                        display: block;
                        padding: 10px;
                    }

                    .tc-mobile-card {
                        margin-bottom: 9px;
                        padding: 13px;
                        border: 1px solid var(--tc-border);
                        border-radius: 10px;
                        background: #fff;
                    }

                    .tc-mobile-card:last-child {
                        margin-bottom: 0;
                    }

                    .tc-mobile-top {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                    }

                    .tc-mobile-divider {
                        height: 1px;
                        margin: 12px 0;
                        background: #eef0f1;
                    }

                    .tc-mobile-row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 15px;
                        padding: 7px 0;
                    }

                    .tc-mobile-row > span {
                        color: #999fa4;
                        font-size: 9px;
                    }

                    .tc-mobile-row strong {
                        color: #41464b;
                        font-size: 9px;
                        font-weight: 600;
                        text-align: right;
                    }

                    .tc-mobile-payment {
                        text-align: right;
                    }

                    .tc-mobile-payment small {
                        display: block;
                        margin-top: 3px;
                        color: #969ba0;
                        font-size: 8px;
                    }

                    .tc-mobile-message {
                        margin-top: 8px;
                        padding-top: 9px;
                        border-top: 1px solid #eef0f1;
                    }

                    .tc-mobile-message > span {
                        color: #999fa4;
                        font-size: 9px;
                    }

                    .tc-mobile-message p {
                        margin: 5px 0 0;
                        color: #686e73;
                        font-size: 9px;
                        line-height: 1.5;
                    }

                    .tc-mobile-view {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 6px;
                        margin-top: 11px;
                        padding: 9px;
                        border: 1px solid var(--tc-border);
                        border-radius: 7px;
                        background: #fff;
                        color: var(--tc-green-dark);
                        font-size: 9px;
                        font-weight: 650;
                        text-decoration: none;
                    }

                    .tc-pagination {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .tc-pagination-links {
                        width: 100%;
                        justify-content: flex-end;
                    }

                    .tc-modal-backdrop {
                        align-items: flex-end;
                        padding: 0;
                    }

                    .tc-modal {
                        width: 100%;
                        max-height: 92vh;
                        border-radius: 14px 14px 0 0;
                    }

                    .tc-modal-header,
                    .tc-modal-body,
                    .tc-modal-footer {
                        padding-left: 16px;
                        padding-right: 16px;
                    }

                    .tc-modal-footer .tc-primary-button,
                    .tc-modal-footer .tc-secondary-button {
                        flex: 1;
                    }
                }

                @media (max-width: 420px) {
                    .tc-filters {
                        width: 100%;
                    }

                    .tc-filter {
                        flex: 1;
                        padding: 0 6px;
                    }

                    .tc-mobile-top .tc-status {
                        font-size: 7px;
                    }
                }

                /* ==========================================================
                   ABSOLUTELY FORCE LIGHT MODE
                ========================================================== */

                @media (prefers-color-scheme: dark) {
                    .tc-page {
                        color-scheme: light !important;
                        background: #f7f8fa !important;
                        color: #202326 !important;
                    }

                    .tc-card,
                    .tc-stat,
                    .tc-mobile-card,
                    .tc-modal {
                        background: #fff !important;
                        color: #202326 !important;
                    }

                    .tc-title,
                    .tc-stat-value,
                    .tc-modal-header h2 {
                        color: #151719 !important;
                    }

                    .tc-subtitle,
                    .tc-stat-label,
                    .tc-stat-description,
                    .tc-modal-header p {
                        color: #73797f !important;
                    }

                    .tc-select,
                    .tc-textarea {
                        background: #fff !important;
                        color: #30353a !important;
                    }
                }
            `}</style>
        </>
    );
}

ConnectionIndex.layout = (page) => (
    <AppLayout title="Talent Connections">
        {page}
    </AppLayout>
);