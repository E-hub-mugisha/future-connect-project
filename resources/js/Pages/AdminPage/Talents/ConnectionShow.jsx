import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

const routes = {
    connectionsIndex: "/admin/connections",
    connectionRespond: (id) => `/admin/connections/${id}/respond`,
    connectionAccept: (id) => `/admin/connections/${id}/accept`,
};

/* -------------------------------------------------------------------------- */
/* Icons                                                                     */
/* -------------------------------------------------------------------------- */

const Icon = {
    ArrowLeft: ({ size = 17 }) => (
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
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
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

    User: ({ size = 18 }) => (
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

    Briefcase: ({ size = 18 }) => (
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

    Mail: ({ size = 15 }) => (
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

    Phone: ({ size = 15 }) => (
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

    Calendar: ({ size = 15 }) => (
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

    CreditCard: ({ size = 18 }) => (
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

    Message: ({ size = 18 }) => (
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

    Check: ({ size = 18 }) => (
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

    Clock: ({ size = 18 }) => (
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

    Send: ({ size = 16 }) => (
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
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    ),

    Copy: ({ size = 14 }) => (
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
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
    ),

    External: ({ size = 14 }) => (
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
            <path d="M14 3h7v7" />
            <path d="M10 14 21 3" />
            <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
        </svg>
    ),
};

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function initials(name) {
    if (!name) return "TC";

    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
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

function formatDateTime(date) {
    if (!date) return "—";

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) return date;

    return parsed.toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function formatMoney(amount, currency = "RWF") {
    if (amount === null || amount === undefined || amount === "") {
        return "—";
    }

    const value = Number(amount);

    if (Number.isNaN(value)) {
        return `${amount} ${currency}`;
    }

    return `${new Intl.NumberFormat("en-US").format(value)} ${currency}`;
}

function cleanStatus(status) {
    if (!status) return "Unknown";

    return status
        .replaceAll("_", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

function connectionStatusMeta(status) {
    switch ((status || "").toLowerCase()) {
        case "accepted":
        case "approved":
            return {
                label: cleanStatus(status),
                className: "cs-success",
                icon: <Icon.Check size={13} />,
            };

        case "rejected":
        case "declined":
            return {
                label: cleanStatus(status),
                className: "cs-danger",
                icon: <Icon.X size={13} />,
            };

        default:
            return {
                label: cleanStatus(status || "pending"),
                className: "cs-warning",
                icon: <Icon.Clock size={13} />,
            };
    }
}

function paymentStatusMeta(status) {
    switch ((status || "").toLowerCase()) {
        case "paid":
        case "completed":
        case "success":
            return {
                label: cleanStatus(status),
                className: "cs-success",
            };

        case "failed":
        case "cancelled":
        case "rejected":
            return {
                label: cleanStatus(status),
                className: "cs-danger",
            };

        case "pending":
        case "unpaid":
            return {
                label: cleanStatus(status),
                className: "cs-warning",
            };

        default:
            return {
                label: cleanStatus(status || "Unknown"),
                className: "cs-neutral",
            };
    }
}

/* -------------------------------------------------------------------------- */
/* Small reusable components                                                  */
/* -------------------------------------------------------------------------- */

function SectionHeader({ icon, title, description }) {
    return (
        <div className="cs-section-header">
            <div className="cs-section-icon">{icon}</div>

            <div>
                <h3>{title}</h3>

                {description && <p>{description}</p>}
            </div>
        </div>
    );
}

function DetailRow({ label, value, children, mono = false }) {
    return (
        <div className="cs-detail-row">
            <span className="cs-detail-label">{label}</span>

            <span className={`cs-detail-value ${mono ? "cs-mono" : ""}`}>
                {children ?? value ?? "—"}
            </span>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function ConnectionShow({ connection }) {
    const isAccepted =
        connection.status === "accepted" ||
        connection.status === "approved";

    const payment = connection.payment;

    const requesterName =
        connection.user?.name ||
        connection.name ||
        "Unknown user";

    const requesterEmail =
        connection.user?.email ||
        connection.email ||
        null;

    const requesterPhone =
        connection.user?.phone ||
        connection.phone ||
        null;

    const talentName =
        connection.talent?.name ||
        "Unknown talent";

    const talentEmail =
        connection.talent?.email ||
        null;

    const paymentStatus =
        payment?.status ||
        connection.payment_status ||
        "pending";

    const paymentAmount =
        payment?.amount ??
        connection.amount;

    const paymentCurrency =
        payment?.currency ||
        "RWF";

    const paymentReference =
        payment?.reference ||
        connection.payment_reference ||
        null;

    const providerTransactionId =
        payment?.provider_transaction_id ||
        null;

    const provider =
        payment?.provider ||
        null;

    const paidAt =
        payment?.paid_at ||
        null;

    const paymentMeta =
        payment?.meta &&
        typeof payment.meta === "object"
            ? payment.meta
            : null;

    const connectionMeta = connectionStatusMeta(
        connection.status
    );

    const paymentMetaStatus = paymentStatusMeta(
        paymentStatus
    );

    const respondForm = useForm({
        response: connection.response ?? "",
    });

    const acceptForm = useForm({});

    const submitResponse = (e) => {
        e.preventDefault();

        respondForm.post(
            routes.connectionRespond(connection.id),
            {
                preserveScroll: true,
            }
        );
    };

    const submitAccept = (e) => {
        e.preventDefault();

        acceptForm.post(
            routes.connectionAccept(connection.id),
            {
                preserveScroll: true,
            }
        );
    };

    const copyValue = async (value) => {
        if (!value) return;

        try {
            await navigator.clipboard.writeText(String(value));
        } catch (error) {
            console.error("Unable to copy value.", error);
        }
    };

    return (
        <>
            <Head
                title={`Connection #${connection.id}`}
            />

            <div className="cs-page">
                <div className="cs-container">

                    {/* ------------------------------------------------------ */}
                    {/* Header                                                   */}
                    {/* ------------------------------------------------------ */}

                    <div className="cs-header">
                        <div className="cs-header-left">
                            <Link
                                href={routes.connectionsIndex}
                                className="cs-back"
                            >
                                <Icon.ArrowLeft size={15} />
                                Back to connections
                            </Link>

                            <div className="cs-title-row">
                                <div>
                                    <div className="cs-eyebrow">
                                        TALENT CONNECTION
                                    </div>

                                    <h1>
                                        Connection request #
                                        {connection.id}
                                    </h1>

                                    <p>
                                        Review the complete request,
                                        requester, talent and payment
                                        information.
                                    </p>
                                </div>

                                <div
                                    className={`cs-status-large ${connectionMeta.className}`}
                                >
                                    {connectionMeta.icon}

                                    {connectionMeta.label}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------ */}
                    {/* Summary cards                                            */}
                    {/* ------------------------------------------------------ */}

                    <div className="cs-summary-grid">

                        <div className="cs-summary-card">
                            <div className="cs-summary-icon green">
                                <Icon.User size={19} />
                            </div>

                            <div>
                                <div className="cs-summary-label">
                                    REQUESTER
                                </div>

                                <div className="cs-summary-value">
                                    {requesterName}
                                </div>

                                <div className="cs-summary-sub">
                                    {requesterEmail || "No email"}
                                </div>
                            </div>
                        </div>

                        <div className="cs-summary-card">
                            <div className="cs-summary-icon blue">
                                <Icon.Briefcase size={19} />
                            </div>

                            <div>
                                <div className="cs-summary-label">
                                    TALENT
                                </div>

                                <div className="cs-summary-value">
                                    {talentName}
                                </div>

                                <div className="cs-summary-sub">
                                    {talentEmail || "No email"}
                                </div>
                            </div>
                        </div>

                        <div className="cs-summary-card">
                            <div className="cs-summary-icon purple">
                                <Icon.CreditCard size={19} />
                            </div>

                            <div>
                                <div className="cs-summary-label">
                                    PAYMENT
                                </div>

                                <div className="cs-summary-value">
                                    {formatMoney(
                                        paymentAmount,
                                        paymentCurrency
                                    )}
                                </div>

                                <div className="cs-summary-sub">
                                    {cleanStatus(paymentStatus)}
                                </div>
                            </div>
                        </div>

                        <div className="cs-summary-card">
                            <div className="cs-summary-icon orange">
                                <Icon.Calendar size={19} />
                            </div>

                            <div>
                                <div className="cs-summary-label">
                                    REQUESTED
                                </div>

                                <div className="cs-summary-value">
                                    {formatDate(
                                        connection.created_at
                                    )}
                                </div>

                                <div className="cs-summary-sub">
                                    {formatDateTime(
                                        connection.created_at
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------ */}
                    {/* Main content                                             */}
                    {/* ------------------------------------------------------ */}

                    <div className="cs-layout">

                        <main>

                            {/* Requester */}
                            <section className="cs-card">
                                <SectionHeader
                                    icon={<Icon.User size={17} />}
                                    title="Requester information"
                                    description="Account information belonging to the person who submitted this request."
                                />

                                <div className="cs-profile">
                                    <div className="cs-profile-avatar">
                                        {initials(requesterName)}
                                    </div>

                                    <div className="cs-profile-main">
                                        <h4>{requesterName}</h4>

                                        <div className="cs-profile-meta">
                                            {requesterEmail && (
                                                <span>
                                                    <Icon.Mail size={13} />
                                                    {requesterEmail}
                                                </span>
                                            )}

                                            {requesterPhone && (
                                                <span>
                                                    <Icon.Phone size={13} />
                                                    {requesterPhone}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="cs-detail-grid">
                                    <DetailRow
                                        label="User ID"
                                        value={
                                            connection.user_id
                                        }
                                    />

                                    <DetailRow
                                        label="Full name"
                                        value={
                                            requesterName
                                        }
                                    />

                                    <DetailRow
                                        label="Email address"
                                        value={
                                            requesterEmail
                                        }
                                    />

                                    <DetailRow
                                        label="Phone number"
                                        value={
                                            requesterPhone
                                        }
                                    />
                                </div>
                            </section>

                            {/* Talent */}
                            <section className="cs-card">
                                <SectionHeader
                                    icon={
                                        <Icon.Briefcase
                                            size={17}
                                        />
                                    }
                                    title="Talent information"
                                    description="The talent selected for this connection request."
                                />

                                <div className="cs-profile">
                                    <div className="cs-profile-avatar talent">
                                        <Icon.Briefcase
                                            size={20}
                                        />
                                    </div>

                                    <div className="cs-profile-main">
                                        <h4>{talentName}</h4>

                                        {talentEmail && (
                                            <div className="cs-profile-meta">
                                                <span>
                                                    <Icon.Mail
                                                        size={13}
                                                    />
                                                    {talentEmail}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="cs-detail-grid">
                                    <DetailRow
                                        label="Talent ID"
                                        value={
                                            connection.talent_id
                                        }
                                    />

                                    <DetailRow
                                        label="Talent name"
                                        value={
                                            talentName
                                        }
                                    />

                                    <DetailRow
                                        label="Talent email"
                                        value={
                                            talentEmail
                                        }
                                    />

                                    <DetailRow
                                        label="Skill"
                                        value={
                                            connection.talent?.skill
                                        }
                                    />

                                    <DetailRow
                                        label="Category"
                                        value={
                                            connection.talent?.category?.name ||
                                            connection.talent?.category
                                        }
                                    />
                                </div>
                            </section>

                            {/* Request */}
                            <section className="cs-card">
                                <SectionHeader
                                    icon={
                                        <Icon.Message
                                            size={17}
                                        />
                                    }
                                    title="Connection request"
                                    description="The message and current communication history."
                                />

                                <div className="cs-message-box">
                                    <div className="cs-message-label">
                                        REQUEST MESSAGE
                                    </div>

                                    <p>
                                        {connection.message ||
                                            "The requester did not provide a message."}
                                    </p>
                                </div>

                                <div className="cs-detail-grid">
                                    <DetailRow
                                        label="Request ID"
                                        value={
                                            connection.id
                                        }
                                    />

                                    <DetailRow
                                        label="Status"
                                    >
                                        <span
                                            className={`cs-status ${connectionMeta.className}`}
                                        >
                                            {connectionMeta.icon}
                                            {
                                                connectionMeta.label
                                            }
                                        </span>
                                    </DetailRow>

                                    <DetailRow
                                        label="Created"
                                        value={formatDateTime(
                                            connection.created_at
                                        )}
                                    />

                                    <DetailRow
                                        label="Last updated"
                                        value={formatDateTime(
                                            connection.updated_at
                                        )}
                                    />
                                </div>

                                {connection.response && (
                                    <div className="cs-response-box">
                                        <div className="cs-response-header">
                                            <span>
                                                ADMIN RESPONSE
                                            </span>

                                            <Icon.Check
                                                size={14}
                                            />
                                        </div>

                                        <p>
                                            {
                                                connection.response
                                            }
                                        </p>
                                    </div>
                                )}
                            </section>

                            {/* Payment */}
                            <section className="cs-card payment-card">
                                <SectionHeader
                                    icon={
                                        <Icon.CreditCard
                                            size={17}
                                        />
                                    }
                                    title="Payment information"
                                    description="Complete payment information associated with this connection request."
                                />

                                <div className="payment-highlight">
                                    <div>
                                        <div className="payment-highlight-label">
                                            PAYMENT AMOUNT
                                        </div>

                                        <div className="payment-highlight-value">
                                            {formatMoney(
                                                paymentAmount,
                                                paymentCurrency
                                            )}
                                        </div>
                                    </div>

                                    <span
                                        className={`cs-status payment-status ${paymentMetaStatus.className}`}
                                    >
                                        {paymentMetaStatus.label}
                                    </span>
                                </div>

                                <div className="cs-detail-grid">
                                    <DetailRow
                                        label="Payment status"
                                    >
                                        <span
                                            className={`cs-status ${paymentMetaStatus.className}`}
                                        >
                                            {
                                                paymentMetaStatus.label
                                            }
                                        </span>
                                    </DetailRow>

                                    <DetailRow
                                        label="Amount"
                                        value={formatMoney(
                                            paymentAmount,
                                            paymentCurrency
                                        )}
                                    />

                                    <DetailRow
                                        label="Currency"
                                        value={
                                            paymentCurrency
                                        }
                                    />

                                    <DetailRow
                                        label="Provider"
                                        value={provider}
                                    />

                                    <DetailRow
                                        label="Payment reference"
                                    >
                                        {paymentReference ? (
                                            <button
                                                type="button"
                                                className="cs-copy-value"
                                                onClick={() =>
                                                    copyValue(
                                                        paymentReference
                                                    )
                                                }
                                                title="Copy payment reference"
                                            >
                                                <span className="cs-mono">
                                                    {
                                                        paymentReference
                                                    }
                                                </span>

                                                <Icon.Copy
                                                    size={13}
                                                />
                                            </button>
                                        ) : (
                                            "—"
                                        )}
                                    </DetailRow>

                                    <DetailRow
                                        label="Provider transaction ID"
                                    >
                                        {providerTransactionId ? (
                                            <button
                                                type="button"
                                                className="cs-copy-value"
                                                onClick={() =>
                                                    copyValue(
                                                        providerTransactionId
                                                    )
                                                }
                                            >
                                                <span className="cs-mono">
                                                    {
                                                        providerTransactionId
                                                    }
                                                </span>

                                                <Icon.Copy
                                                    size={13}
                                                />
                                            </button>
                                        ) : (
                                            "—"
                                        )}
                                    </DetailRow>

                                    <DetailRow
                                        label="Paid at"
                                        value={
                                            paidAt
                                                ? formatDateTime(
                                                      paidAt
                                                  )
                                                : null
                                        }
                                    />

                                    <DetailRow
                                        label="Payment ID"
                                        value={
                                            payment?.id
                                        }
                                    />
                                </div>

                                {paymentMeta &&
                                    Object.keys(
                                        paymentMeta
                                    ).length > 0 && (
                                        <div className="payment-meta">
                                            <div className="payment-meta-title">
                                                PAYMENT METADATA
                                            </div>

                                            <pre>
                                                {JSON.stringify(
                                                    paymentMeta,
                                                    null,
                                                    2
                                                )}
                                            </pre>
                                        </div>
                                    )}

                                {!payment && (
                                    <div className="payment-empty">
                                        <Icon.CreditCard
                                            size={18}
                                        />

                                        <div>
                                            <strong>
                                                No payment record linked
                                            </strong>

                                            <p>
                                                There is currently no
                                                ConnectionPayment record
                                                associated with this request.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* Timeline */}
                            <section className="cs-card">
                                <SectionHeader
                                    icon={
                                        <Icon.Clock size={17} />
                                    }
                                    title="Request timeline"
                                    description="Important timestamps for this connection."
                                />

                                <div className="cs-timeline">
                                    <div className="cs-timeline-item">
                                        <div className="cs-timeline-dot green">
                                            <Icon.User size={12} />
                                        </div>

                                        <div>
                                            <strong>
                                                Connection requested
                                            </strong>

                                            <p>
                                                {formatDateTime(
                                                    connection.created_at
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {connection.response && (
                                        <div className="cs-timeline-item">
                                            <div className="cs-timeline-dot blue">
                                                <Icon.Message
                                                    size={12}
                                                />
                                            </div>

                                            <div>
                                                <strong>
                                                    Admin response added
                                                </strong>

                                                <p>
                                                    Response is available
                                                    above.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {isAccepted && (
                                        <div className="cs-timeline-item">
                                            <div className="cs-timeline-dot green">
                                                <Icon.Check
                                                    size={12}
                                                />
                                            </div>

                                            <div>
                                                <strong>
                                                    Connection accepted
                                                </strong>

                                                <p>
                                                    Current request status is
                                                    accepted.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {paidAt && (
                                        <div className="cs-timeline-item">
                                            <div className="cs-timeline-dot purple">
                                                <Icon.CreditCard
                                                    size={12}
                                                />
                                            </div>

                                            <div>
                                                <strong>
                                                    Payment completed
                                                </strong>

                                                <p>
                                                    {formatDateTime(
                                                        paidAt
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        </main>

                        {/* -------------------------------------------------- */}
                        {/* Sidebar                                             */}
                        {/* -------------------------------------------------- */}

                        <aside>

                            {/* Current status */}
                            <div className="cs-side-card">
                                <div className="cs-side-label">
                                    CONNECTION STATUS
                                </div>

                                <div
                                    className={`cs-status-large side ${connectionMeta.className}`}
                                >
                                    {connectionMeta.icon}

                                    {connectionMeta.label}
                                </div>

                                <div className="cs-side-info">
                                    <span>Request ID</span>
                                    <strong>
                                        #{connection.id}
                                    </strong>
                                </div>

                                <div className="cs-side-info">
                                    <span>Requested</span>
                                    <strong>
                                        {formatDate(
                                            connection.created_at
                                        )}
                                    </strong>
                                </div>
                            </div>

                            {/* Payment summary */}
                            <div className="cs-side-card">
                                <div className="cs-side-label">
                                    PAYMENT
                                </div>

                                <div className="cs-side-payment">
                                    <Icon.CreditCard
                                        size={18}
                                    />

                                    <div>
                                        <strong>
                                            {formatMoney(
                                                paymentAmount,
                                                paymentCurrency
                                            )}
                                        </strong>

                                        <span>
                                            {cleanStatus(
                                                paymentStatus
                                            )}
                                        </span>
                                    </div>
                                </div>

                                {paymentReference && (
                                    <div className="cs-side-reference">
                                        <span>Reference</span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                copyValue(
                                                    paymentReference
                                                )
                                            }
                                        >
                                            {paymentReference}
                                            <Icon.Copy
                                                size={12}
                                            />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="cs-side-card">
                                <div className="cs-side-label">
                                    ADMIN ACTIONS
                                </div>

                                {!isAccepted ? (
                                    <form
                                        onSubmit={
                                            submitAccept
                                        }
                                    >
                                        <button
                                            type="submit"
                                            className="cs-accept-btn"
                                            disabled={
                                                acceptForm.processing
                                            }
                                        >
                                            <Icon.Check
                                                size={15}
                                            />

                                            {acceptForm.processing
                                                ? "Accepting..."
                                                : "Accept connection"}
                                        </button>
                                    </form>
                                ) : (
                                    <div className="cs-accepted-box">
                                        <Icon.Check
                                            size={15}
                                        />

                                        Connection accepted
                                    </div>
                                )}

                                <Link
                                    href={
                                        routes.connectionsIndex
                                    }
                                    className="cs-secondary-btn"
                                >
                                    <Icon.ArrowLeft
                                        size={14}
                                    />

                                    All connections
                                </Link>
                            </div>
                        </aside>
                    </div>

                    {/* ------------------------------------------------------ */}
                    {/* Response section                                        */}
                    {/* ------------------------------------------------------ */}

                    <section className="cs-card cs-response-card">
                        <SectionHeader
                            icon={<Icon.Send size={17} />}
                            title="Admin response"
                            description="Send or update the response associated with this connection request."
                        />

                        <form onSubmit={submitResponse}>
                            <div className="cs-form-group">
                                <label htmlFor="response">
                                    Response
                                </label>

                                <textarea
                                    id="response"
                                    rows={5}
                                    value={
                                        respondForm.data.response
                                    }
                                    onChange={(e) =>
                                        respondForm.setData(
                                            "response",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Write a response to the requester..."
                                    className={`cs-textarea ${
                                        respondForm.errors.response
                                            ? "error"
                                            : ""
                                    }`}
                                />

                                {respondForm.errors.response && (
                                    <div className="cs-form-error">
                                        {
                                            respondForm.errors
                                                .response
                                        }
                                    </div>
                                )}
                            </div>

                            <div className="cs-form-footer">
                                <span>
                                    The response will be stored with this
                                    connection request.
                                </span>

                                <button
                                    type="submit"
                                    className="cs-send-btn"
                                    disabled={
                                        respondForm.processing
                                    }
                                >
                                    <Icon.Send size={14} />

                                    {respondForm.processing
                                        ? "Sending..."
                                        : connection.response
                                        ? "Update response"
                                        : "Send response"}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>

            <style>{`
                .cs-page,
                .cs-page * {
                    box-sizing: border-box;
                }

                .cs-page {
                    min-height: 100vh;
                    padding: 28px;
                    background: #f7f8fa;
                    color: #17191c;
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

                .cs-container {
                    width: 100%;
                    max-width: 1240px;
                    margin: 0 auto;
                }

                /* Header */

                .cs-header {
                    margin-bottom: 22px;
                }

                .cs-back {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 19px;
                    color: #6e747a;
                    font-size: 11px;
                    font-weight: 550;
                    text-decoration: none;
                    transition: color .15s ease;
                }

                .cs-back:hover {
                    color: #00a667;
                }

                .cs-title-row {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;
                }

                .cs-eyebrow {
                    margin-bottom: 6px;
                    color: #00a667;
                    font-size: 9px;
                    font-weight: 750;
                    letter-spacing: .13em;
                }

                .cs-title-row h1 {
                    margin: 0;
                    color: #17191c;
                    font-size: 26px;
                    line-height: 1.15;
                    font-weight: 650;
                    letter-spacing: -.035em;
                }

                .cs-title-row p {
                    margin: 7px 0 0;
                    color: #7d8389;
                    font-size: 11px;
                }

                .cs-status-large {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    width: fit-content;
                    padding: 7px 11px;
                    border-radius: 999px;
                    font-size: 10px;
                    font-weight: 650;
                    white-space: nowrap;
                }

                .cs-status-large.side {
                    margin: 11px 0 17px;
                    font-size: 11px;
                }

                .cs-success {
                    background: #eaf8f0;
                    color: #23824d;
                }

                .cs-warning {
                    background: #fff5df;
                    color: #a97107;
                }

                .cs-danger {
                    background: #fff0ef;
                    color: #c14e4e;
                }

                .cs-neutral {
                    background: #f0f1f2;
                    color: #73797f;
                }

                .cs-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    width: fit-content;
                    padding: 5px 8px;
                    border-radius: 999px;
                    font-size: 9px;
                    font-weight: 650;
                    white-space: nowrap;
                }

                /* Summary */

                .cs-summary-grid {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 12px;
                    margin-bottom: 16px;
                }

                .cs-summary-card {
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    min-height: 91px;
                    padding: 15px;
                    border: 1px solid #e7e9eb;
                    border-radius: 12px;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(16,24,40,.025);
                }

                .cs-summary-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 37px;
                    height: 37px;
                    flex: 0 0 37px;
                    border-radius: 9px;
                }

                .cs-summary-icon.green {
                    background: #e7f7f0;
                    color: #00a667;
                }

                .cs-summary-icon.blue {
                    background: #edf4fb;
                    color: #4a7da9;
                }

                .cs-summary-icon.purple {
                    background: #f1edfb;
                    color: #7559a8;
                }

                .cs-summary-icon.orange {
                    background: #fff3e5;
                    color: #b87522;
                }

                .cs-summary-label {
                    margin-bottom: 3px;
                    color: #999ea3;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .08em;
                }

                .cs-summary-value {
                    overflow: hidden;
                    color: #282c30;
                    font-size: 12px;
                    font-weight: 650;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .cs-summary-sub {
                    overflow: hidden;
                    margin-top: 3px;
                    color: #969ba0;
                    font-size: 9px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* Layout */

                .cs-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 275px;
                    gap: 16px;
                    align-items: start;
                }

                main {
                    min-width: 0;
                }

                aside {
                    min-width: 0;
                }

                /* Cards */

                .cs-card,
                .cs-side-card {
                    margin-bottom: 16px;
                    padding: 20px;
                    border: 1px solid #e7e9eb;
                    border-radius: 12px;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(16,24,40,.025);
                }

                .cs-side-card {
                    padding: 17px;
                }

                .cs-section-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 18px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid #eceeef;
                }

                .cs-section-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 31px;
                    height: 31px;
                    flex: 0 0 31px;
                    border-radius: 8px;
                    background: #edf8f4;
                    color: #00a667;
                }

                .cs-section-header h3 {
                    margin: 0;
                    color: #282c30;
                    font-size: 13px;
                    font-weight: 650;
                }

                .cs-section-header p {
                    margin: 3px 0 0;
                    color: #92979c;
                    font-size: 9px;
                }

                /* Profiles */

                .cs-profile {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 13px;
                    margin-bottom: 16px;
                    border-radius: 9px;
                    background: #f8f9fa;
                    border: 1px solid #eceeef;
                }

                .cs-profile-avatar {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 43px;
                    height: 43px;
                    flex: 0 0 43px;
                    border-radius: 11px;
                    background: #e4f7ef;
                    color: #008e5b;
                    font-size: 11px;
                    font-weight: 750;
                }

                .cs-profile-avatar.talent {
                    background: #edf4f8;
                    color: #4b7188;
                }

                .cs-profile-main {
                    min-width: 0;
                }

                .cs-profile-main h4 {
                    margin: 0;
                    color: #272b2f;
                    font-size: 13px;
                    font-weight: 650;
                }

                .cs-profile-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 4px;
                }

                .cs-profile-meta span {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    color: #92979c;
                    font-size: 9px;
                }

                /* Details */

                .cs-detail-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    column-gap: 28px;
                }

                .cs-detail-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    min-height: 40px;
                    padding: 8px 0;
                    border-bottom: 1px solid #f0f1f2;
                }

                .cs-detail-label {
                    flex: 0 0 auto;
                    color: #8d9297;
                    font-size: 10px;
                }

                .cs-detail-value {
                    min-width: 0;
                    color: #363a3e;
                    font-size: 10px;
                    font-weight: 550;
                    text-align: right;
                    word-break: break-word;
                }

                .cs-mono {
                    font-family:
                        "SFMono-Regular",
                        Consolas,
                        "Liberation Mono",
                        monospace;
                    font-size: 9px;
                }

                /* Message */

                .cs-message-box {
                    padding: 14px;
                    margin-bottom: 17px;
                    border: 1px solid #e7e9eb;
                    border-left: 3px solid #00a667;
                    border-radius: 8px;
                    background: #fafbfb;
                }

                .cs-message-label {
                    margin-bottom: 7px;
                    color: #9b9fa4;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .08em;
                }

                .cs-message-box p {
                    margin: 0;
                    color: #53595e;
                    font-size: 11px;
                    line-height: 1.65;
                    white-space: pre-wrap;
                }

                /* Response */

                .cs-response-box {
                    margin-top: 16px;
                    padding: 13px;
                    border-radius: 8px;
                    background: #f1faf6;
                    border: 1px solid #dcefe7;
                }

                .cs-response-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: #00a667;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .08em;
                }

                .cs-response-box p {
                    margin: 7px 0 0;
                    color: #4f5954;
                    font-size: 10px;
                    line-height: 1.6;
                    white-space: pre-wrap;
                }

                /* Payment */

                .payment-highlight {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 15px;
                    margin-bottom: 17px;
                    border: 1px solid #e4e1f1;
                    border-radius: 10px;
                    background: #faf9fd;
                }

                .payment-highlight-label {
                    color: #9993aa;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .08em;
                }

                .payment-highlight-value {
                    margin-top: 4px;
                    color: #29242f;
                    font-size: 21px;
                    font-weight: 700;
                    letter-spacing: -.025em;
                }

                .payment-status {
                    flex-shrink: 0;
                }

                .cs-copy-value {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    max-width: 100%;
                    padding: 0;
                    border: 0;
                    background: transparent;
                    color: #00a667;
                    cursor: pointer;
                }

                .cs-copy-value:hover {
                    text-decoration: underline;
                }

                .payment-meta {
                    margin-top: 17px;
                    padding-top: 15px;
                    border-top: 1px solid #eceeef;
                }

                .payment-meta-title {
                    margin-bottom: 8px;
                    color: #999ea3;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .08em;
                }

                .payment-meta pre {
                    overflow: auto;
                    max-height: 220px;
                    margin: 0;
                    padding: 12px;
                    border-radius: 8px;
                    background: #f7f8f9;
                    color: #596067;
                    font-family:
                        "SFMono-Regular",
                        Consolas,
                        monospace;
                    font-size: 9px;
                    line-height: 1.55;
                }

                .payment-empty {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    padding: 12px;
                    margin-top: 15px;
                    border: 1px dashed #dfe2e5;
                    border-radius: 8px;
                    color: #9a9fa4;
                }

                .payment-empty strong {
                    display: block;
                    color: #5d6368;
                    font-size: 10px;
                }

                .payment-empty p {
                    margin: 3px 0 0;
                    font-size: 9px;
                    line-height: 1.5;
                }

                /* Timeline */

                .cs-timeline {
                    position: relative;
                    padding-left: 7px;
                }

                .cs-timeline-item {
                    position: relative;
                    display: flex;
                    gap: 12px;
                    padding: 0 0 19px 16px;
                }

                .cs-timeline-item:not(:last-child)::before {
                    position: absolute;
                    top: 22px;
                    left: 10px;
                    width: 1px;
                    height: calc(100% - 8px);
                    background: #e4e7e9;
                    content: "";
                }

                .cs-timeline-dot {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 21px;
                    height: 21px;
                    flex: 0 0 21px;
                    margin-left: -17px;
                    border-radius: 50%;
                }

                .cs-timeline-dot.green {
                    background: #e5f7ef;
                    color: #00a667;
                }

                .cs-timeline-dot.blue {
                    background: #eaf3fb;
                    color: #4e7ca4;
                }

                .cs-timeline-dot.purple {
                    background: #f1edfb;
                    color: #7356a6;
                }

                .cs-timeline-item strong {
                    display: block;
                    color: #42474c;
                    font-size: 10px;
                    font-weight: 650;
                }

                .cs-timeline-item p {
                    margin: 3px 0 0;
                    color: #969ba0;
                    font-size: 9px;
                }

                /* Sidebar */

                .cs-side-label {
                    color: #999ea3;
                    font-size: 8px;
                    font-weight: 750;
                    letter-spacing: .09em;
                }

                .cs-side-info {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    padding: 10px 0;
                    border-top: 1px solid #f0f1f2;
                }

                .cs-side-info span {
                    color: #969ba0;
                    font-size: 9px;
                }

                .cs-side-info strong {
                    color: #464b50;
                    font-size: 9px;
                    font-weight: 650;
                }

                .cs-side-payment {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    margin: 13px 0;
                    padding: 11px;
                    border-radius: 8px;
                    background: #f7f6fb;
                    color: #7356a6;
                }

                .cs-side-payment strong {
                    display: block;
                    color: #36313f;
                    font-size: 12px;
                }

                .cs-side-payment span {
                    display: block;
                    margin-top: 2px;
                    color: #92979c;
                    font-size: 9px;
                }

                .cs-side-reference {
                    padding-top: 11px;
                    border-top: 1px solid #f0f1f2;
                }

                .cs-side-reference > span {
                    display: block;
                    margin-bottom: 5px;
                    color: #969ba0;
                    font-size: 9px;
                }

                .cs-side-reference button {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 6px;
                    width: 100%;
                    padding: 7px 8px;
                    border: 1px solid #e6e8ea;
                    border-radius: 6px;
                    background: #fafbfb;
                    color: #52585e;
                    font-family: inherit;
                    font-size: 8px;
                    text-align: left;
                    cursor: pointer;
                }

                .cs-side-reference button:hover {
                    border-color: #b9dfd1;
                    color: #00a667;
                }

                .cs-accept-btn,
                .cs-secondary-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    width: 100%;
                    min-height: 38px;
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 650;
                    cursor: pointer;
                    text-decoration: none;
                    transition: .15s ease;
                }

                .cs-accept-btn {
                    border: 1px solid #00a667;
                    background: #00a667;
                    color: #fff;
                }

                .cs-accept-btn:hover {
                    border-color: #008f58;
                    background: #008f58;
                }

                .cs-accept-btn:disabled {
                    opacity: .55;
                    cursor: not-allowed;
                }

                .cs-secondary-btn {
                    margin-top: 8px;
                    border: 1px solid #e1e4e6;
                    background: #fff;
                    color: #596067;
                }

                .cs-secondary-btn:hover {
                    background: #f7f8f9;
                    color: #00a667;
                }

                .cs-accepted-box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    width: 100%;
                    min-height: 38px;
                    border: 1px solid #d8ede3;
                    border-radius: 8px;
                    background: #f1faf6;
                    color: #23824d;
                    font-size: 10px;
                    font-weight: 650;
                }

                /* Response form */

                .cs-response-card {
                    margin-top: 0;
                }

                .cs-form-group label {
                    display: block;
                    margin-bottom: 6px;
                    color: #454a4f;
                    font-size: 10px;
                    font-weight: 650;
                }

                .cs-textarea {
                    display: block;
                    width: 100%;
                    min-height: 125px;
                    padding: 11px 12px;
                    border: 1px solid #dfe2e5;
                    border-radius: 8px;
                    outline: none;
                    background: #fff;
                    color: #303438;
                    font-family: inherit;
                    font-size: 11px;
                    line-height: 1.55;
                    resize: vertical;
                    transition: .15s ease;
                }

                .cs-textarea::placeholder {
                    color: #a1a6ab;
                }

                .cs-textarea:focus {
                    border-color: #00a667;
                    box-shadow: 0 0 0 3px rgba(0,166,103,.08);
                }

                .cs-textarea.error {
                    border-color: #d75b5b;
                }

                .cs-form-error {
                    margin-top: 5px;
                    color: #c84f4f;
                    font-size: 9px;
                }

                .cs-form-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    margin-top: 12px;
                }

                .cs-form-footer > span {
                    color: #9a9fa4;
                    font-size: 9px;
                }

                .cs-send-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    min-height: 37px;
                    padding: 0 14px;
                    border: 1px solid #00a667;
                    border-radius: 8px;
                    background: #00a667;
                    color: #fff;
                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 650;
                    cursor: pointer;
                    white-space: nowrap;
                }

                .cs-send-btn:hover {
                    background: #008f58;
                    border-color: #008f58;
                }

                .cs-send-btn:disabled {
                    opacity: .55;
                    cursor: not-allowed;
                }

                /* Responsive */

                @media (max-width: 1100px) {
                    .cs-layout {
                        grid-template-columns: minmax(0, 1fr) 245px;
                    }

                    .cs-summary-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 850px) {
                    .cs-page {
                        padding: 20px;
                    }

                    .cs-layout {
                        grid-template-columns: 1fr;
                    }

                    aside {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 12px;
                    }

                    .cs-side-card {
                        margin-bottom: 0;
                    }

                    .cs-side-card:last-child {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 650px) {
                    .cs-page {
                        padding: 14px;
                    }

                    .cs-title-row {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .cs-title-row h1 {
                        font-size: 22px;
                    }

                    .cs-summary-grid {
                        grid-template-columns: 1fr;
                    }

                    .cs-card {
                        padding: 15px;
                    }

                    .cs-detail-grid {
                        grid-template-columns: 1fr;
                    }

                    .cs-detail-row {
                        min-height: 38px;
                    }

                    .cs-detail-value {
                        max-width: 60%;
                    }

                    aside {
                        display: block;
                    }

                    .cs-side-card {
                        margin-bottom: 12px;
                    }

                    .cs-side-card:last-child {
                        margin-bottom: 12px;
                    }

                    .payment-highlight {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .cs-form-footer {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .cs-send-btn {
                        width: 100%;
                    }
                }
            `}</style>
        </>
    );
}

ConnectionShow.layout = (page) => (
    <AppLayout
        children={page}
        title="Connection Request Details"
    />
);