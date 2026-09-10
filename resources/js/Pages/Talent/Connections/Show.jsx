// resources/js/Pages/Talent/Connections/Show.jsx

import { Head, Link, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

const PAID_STATUSES = [
    "paid",
    "completed",
    "success",
    "successful",
];

export default function Show({
    connection,
    earnings = {},
}) {
    const {
        data,
        setData,
        patch,
        processing,
        errors,
    } = useForm({
        status: connection?.status ?? "pending",
        response: connection?.response ?? "",
    });

    function submitResponse(e) {
        e.preventDefault();

        patch(
            route(
                "talent.connections.respond",
                connection.id,
            ),
        );
    }

    const payment = connection?.payment;

    /*
     * IMPORTANT:
     *
     * The payment amount comes from:
     *
     * connection_payments.amount
     *
     * NOT:
     *
     * talent_connections.amount
     */
    const amount = Number(
        payment?.amount ?? earnings?.amount ?? 0,
    );

    const futureConnectFee = amount * 0.05;

    const talentEarning = amount * 0.95;

    const currency =
        payment?.currency ??
        earnings?.currency ??
        "RWF";

    return (
        <AppLayout>
            <Head
                title={`Connection #${connection?.id ?? ""}`}
            />

            <div data-h-scope="talent-connection-show">
                <style>{`
                    [data-h-scope="talent-connection-show"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f5f8f7;
                        --h-muted: #6b7678;
                        --h-border: rgba(6, 15, 17, 0.08);
                        --h-danger: #e5484d;
                        --h-warn: #f5a623;

                        background: var(--h-bg);
                        min-height: 100%;
                    }

                    [data-h-scope="talent-connection-show"] .h-page {
                        max-width: 1250px;
                        margin: 0 auto;
                    }

                    [data-h-scope="talent-connection-show"] .h-card {
                        background: white;
                        border: 1px solid var(--h-border);
                        box-shadow: 0 4px 20px rgba(6,15,17,.035);
                    }

                    [data-h-scope="talent-connection-show"] .h-back {
                        color: var(--h-ink);
                        text-decoration: none;
                        font-weight: 700;
                    }

                    [data-h-scope="talent-connection-show"] .h-back:hover {
                        color: var(--h-accent-dark);
                    }

                    [data-h-scope="talent-connection-show"] .h-avatar {
                        width: 72px;
                        height: 72px;
                        background: rgba(72,213,151,.14);
                        color: #229365;
                        font-weight: 800;
                        font-size: 22px;
                    }

                    [data-h-scope="talent-connection-show"] .h-badge {
                        display: inline-flex;
                        align-items: center;
                        white-space: nowrap;
                        font-size: 12px;
                        font-weight: 700;
                        padding: 7px 11px;
                        border-radius: 999px;
                    }

                    [data-h-scope="talent-connection-show"] .h-badge-pending {
                        background: rgba(245,166,35,.13);
                        color: #a66d08;
                    }

                    [data-h-scope="talent-connection-show"] .h-badge-accepted {
                        background: rgba(72,213,151,.14);
                        color: #208d62;
                    }

                    [data-h-scope="talent-connection-show"] .h-badge-declined {
                        background: rgba(229,72,77,.11);
                        color: #d13b40;
                    }

                    [data-h-scope="talent-connection-show"] .h-badge-paid {
                        background: rgba(72,213,151,.14);
                        color: #208d62;
                    }

                    [data-h-scope="talent-connection-show"] .h-badge-unpaid {
                        background: rgba(245,166,35,.13);
                        color: #a66d08;
                    }

                    [data-h-scope="talent-connection-show"] .h-financial {
                        background: #f7faf9;
                        border: 1px solid rgba(6,15,17,.06);
                        border-radius: 16px;
                    }

                    [data-h-scope="talent-connection-show"] .h-total {
                        background: var(--h-ink);
                        color: white;
                        border-radius: 16px;
                    }

                    [data-h-scope="talent-connection-show"] .h-talent {
                        color: #229365;
                    }

                    [data-h-scope="talent-connection-show"] .h-fee {
                        color: #a36c08;
                    }

                    [data-h-scope="talent-connection-show"] .h-message {
                        background: #f8faf9;
                        border-left: 4px solid var(--h-accent);
                    }

                    [data-h-scope="talent-connection-show"] .h-label {
                        font-size: 12px;
                        color: var(--h-muted);
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: .04em;
                    }

                    [data-h-scope="talent-connection-show"] .h-value {
                        color: var(--h-ink);
                        font-weight: 600;
                    }

                    [data-h-scope="talent-connection-show"] .h-form-control {
                        border: 1px solid rgba(6,15,17,.12);
                        border-radius: 11px;
                        padding: 11px 13px;
                        box-shadow: none;
                    }

                    [data-h-scope="talent-connection-show"] .h-form-control:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 3px rgba(72,213,151,.12);
                    }

                    [data-h-scope="talent-connection-show"] .h-btn {
                        border-radius: 10px;
                        font-weight: 700;
                        padding: 10px 16px;
                    }

                    [data-h-scope="talent-connection-show"] .h-btn-dark {
                        background: var(--h-ink);
                        color: white;
                        border: 0;
                    }

                    [data-h-scope="talent-connection-show"] .h-btn-dark:hover {
                        background: #1b282b;
                        color: white;
                    }

                    [data-h-scope="talent-connection-show"] .h-btn-light {
                        background: white;
                        color: var(--h-ink);
                        border: 1px solid var(--h-border);
                    }

                    [data-h-scope="talent-connection-show"] .h-btn-light:hover {
                        background: #f4f7f6;
                        color: var(--h-ink);
                    }

                    [data-h-scope="talent-connection-show"] .h-info-row {
                        padding: 13px 0;
                        border-bottom: 1px solid rgba(6,15,17,.06);
                    }

                    [data-h-scope="talent-connection-show"] .h-info-row:last-child {
                        border-bottom: 0;
                    }

                    [data-h-scope="talent-connection-show"] .h-reference {
                        font-family: monospace;
                        font-size: 12px;
                        word-break: break-all;
                    }
                `}</style>

                <div className="container-fluid px-3 px-md-4 py-4">
                    <div className="h-page">

                        {/* ==================================================
                            BACK
                        ================================================== */}

                        <div className="mb-4">
                            <Link
                                href={route(
                                    "talent.connections.index",
                                )}
                                className="h-back"
                            >
                                <i className="fas fa-arrow-left me-2" />
                                Back to connections
                            </Link>
                        </div>

                        {/* ==================================================
                            HEADER
                        ================================================== */}

                        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">

                            <div>
                                <div
                                    className="small fw-bold text-uppercase mb-2"
                                    style={{
                                        color: "#229365",
                                        letterSpacing: ".08em",
                                    }}
                                >
                                    Connection Request
                                </div>

                                <h3 className="fw-bold mb-1">
                                    Connection details
                                </h3>

                                <p className="text-secondary mb-0">
                                    Review the request, payment and
                                    your earnings.
                                </p>
                            </div>

                            <StatusBadge
                                status={
                                    connection?.status
                                }
                            />

                        </div>

                        <div className="row g-4">

                            {/* ==================================================
                                LEFT COLUMN
                            ================================================== */}

                            <div className="col-lg-7">

                                {/* Requester card */}
                                <div className="card h-card border-0 rounded-4 mb-4">

                                    <div className="card-body p-4">

                                        <div className="d-flex align-items-center gap-3 mb-4">

                                            <div className="h-avatar rounded-circle d-flex align-items-center justify-content-center">
                                                {getInitials(
                                                    connection?.name,
                                                )}
                                            </div>

                                            <div className="min-w-0">

                                                <h5 className="fw-bold mb-1">
                                                    {connection?.name ||
                                                        "Unknown user"}
                                                </h5>

                                                <div className="small text-secondary">
                                                    Connection requester
                                                </div>

                                            </div>

                                        </div>

                                        <div className="row g-3">

                                            <InfoItem
                                                icon="fa-envelope"
                                                label="Email"
                                                value={
                                                    connection?.email ||
                                                    "Not provided"
                                                }
                                            />

                                            <InfoItem
                                                icon="fa-phone"
                                                label="Phone"
                                                value={
                                                    connection?.phone ||
                                                    "Not provided"
                                                }
                                            />

                                            <InfoItem
                                                icon="fa-calendar"
                                                label="Requested"
                                                value={
                                                    connection?.created_at ||
                                                    connection?.created_at_human ||
                                                    "—"
                                                }
                                            />

                                            <InfoItem
                                                icon="fa-hashtag"
                                                label="Connection ID"
                                                value={`#${connection?.id}`}
                                            />

                                        </div>

                                    </div>
                                </div>

                                {/* Message */}
                                <div className="card h-card border-0 rounded-4 mb-4">

                                    <div className="card-body p-4">

                                        <h5 className="fw-bold mb-3">
                                            Request message
                                        </h5>

                                        {connection?.message ? (
                                            <div className="h-message rounded-3 p-3">
                                                <div
                                                    style={{
                                                        whiteSpace:
                                                            "pre-wrap",
                                                    }}
                                                >
                                                    {
                                                        connection.message
                                                    }
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-secondary small">
                                                No message was included
                                                with this request.
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* Previous response */}
                                {connection?.response && (
                                    <div className="card h-card border-0 rounded-4 mb-4">

                                        <div className="card-body p-4">

                                            <h5 className="fw-bold mb-3">
                                                Your response
                                            </h5>

                                            <div className="h-message rounded-3 p-3">
                                                <div
                                                    style={{
                                                        whiteSpace:
                                                            "pre-wrap",
                                                    }}
                                                >
                                                    {
                                                        connection.response
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )}

                                {/* Respond */}
                                {String(
                                    connection?.status,
                                ).toLowerCase() ===
                                    "pending" && (
                                    <div className="card h-card border-0 rounded-4">

                                        <div className="card-body p-4">

                                            <div className="mb-4">
                                                <h5 className="fw-bold mb-1">
                                                    Respond to request
                                                </h5>

                                                <p className="small text-secondary mb-0">
                                                    Accept or decline this
                                                    connection request.
                                                </p>
                                            </div>

                                            <form
                                                onSubmit={
                                                    submitResponse
                                                }
                                            >

                                                <div className="mb-3">

                                                    <label className="form-label fw-semibold">
                                                        Decision
                                                    </label>

                                                    <select
                                                        className={`form-select h-form-control ${
                                                            errors.status
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        value={
                                                            data.status
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "status",
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    >
                                                        <option value="accepted">
                                                            Accept connection
                                                        </option>

                                                        <option value="declined">
                                                            Decline connection
                                                        </option>
                                                    </select>

                                                    {errors.status && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                errors.status
                                                            }
                                                        </div>
                                                    )}

                                                </div>

                                                <div className="mb-4">

                                                    <label className="form-label fw-semibold">
                                                        Response
                                                        <span className="text-secondary fw-normal ms-1">
                                                            (optional)
                                                        </span>
                                                    </label>

                                                    <textarea
                                                        rows="5"
                                                        className={`form-control h-form-control ${
                                                            errors.response
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        placeholder="Write a response to the requester..."
                                                        value={
                                                            data.response
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "response",
                                                                e.target
                                                                    .value,
                                                            )
                                                        }
                                                    />

                                                    {errors.response && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                errors.response
                                                            }
                                                        </div>
                                                    )}

                                                </div>

                                                <div className="d-flex flex-wrap gap-2">

                                                    <button
                                                        type="submit"
                                                        className="btn h-btn h-btn-dark"
                                                        disabled={
                                                            processing
                                                        }
                                                    >
                                                        {processing ? (
                                                            <>
                                                                <span
                                                                    className="spinner-border spinner-border-sm me-2"
                                                                    role="status"
                                                                />

                                                                Saving...
                                                            </>
                                                        ) : (
                                                            <>
                                                                <i className="fas fa-paper-plane me-2" />

                                                                Save response
                                                            </>
                                                        )}
                                                    </button>

                                                    <Link
                                                        href={route(
                                                            "talent.connections.index",
                                                        )}
                                                        className="btn h-btn h-btn-light"
                                                    >
                                                        Cancel
                                                    </Link>

                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* ==================================================
                                RIGHT COLUMN
                            ================================================== */}

                            <div className="col-lg-5">

                                {/* Financial summary */}
                                <div className="card h-card border-0 rounded-4 mb-4">

                                    <div className="card-body p-4">

                                        <div className="d-flex justify-content-between align-items-center mb-4">

                                            <div>
                                                <h5 className="fw-bold mb-1">
                                                    Payment & Earnings
                                                </h5>

                                                <p className="small text-secondary mb-0">
                                                    Connection payment breakdown
                                                </p>
                                            </div>

                                            {payment ? (
                                                <PaymentBadge
                                                    status={
                                                        payment.status
                                                    }
                                                />
                                            ) : (
                                                <span className="h-badge h-badge-unpaid">
                                                    <i className="fas fa-clock me-1" />
                                                    Unpaid
                                                </span>
                                            )}

                                        </div>

                                        {/* Total */}
                                        <div className="h-total p-4 mb-3">

                                            <div className="small opacity-75 mb-1">
                                                Total connection payment
                                            </div>

                                            <div className="fs-3 fw-bold">
                                                {payment
                                                    ? money(
                                                          amount,
                                                          currency,
                                                      )
                                                    : "—"}
                                            </div>

                                        </div>

                                        {/* Talent earning */}
                                        <div className="h-financial p-3 mb-3">

                                            <div className="d-flex justify-content-between align-items-center gap-3">

                                                <div>
                                                    <div className="small text-secondary">
                                                        Your earnings
                                                    </div>

                                                    <div className="fw-bold h-talent fs-5">
                                                        {payment
                                                            ? money(
                                                                  talentEarning,
                                                                  currency,
                                                              )
                                                            : "—"}
                                                    </div>
                                                </div>

                                                <div
                                                    className="rounded-circle d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: 42,
                                                        height: 42,
                                                        background:
                                                            "rgba(72,213,151,.13)",
                                                        color: "#229365",
                                                    }}
                                                >
                                                    <i className="fas fa-user" />
                                                </div>

                                            </div>

                                            <div className="small text-secondary mt-1">
                                                95% of the connection payment
                                            </div>

                                        </div>

                                        {/* Future Connect fee */}
                                        <div className="h-financial p-3">

                                            <div className="d-flex justify-content-between align-items-center gap-3">

                                                <div>
                                                    <div className="small text-secondary">
                                                        Future Connect
                                                    </div>

                                                    <div className="fw-bold h-fee fs-5">
                                                        {payment
                                                            ? money(
                                                                  futureConnectFee,
                                                                  currency,
                                                              )
                                                            : "—"}
                                                    </div>
                                                </div>

                                                <div
                                                    className="rounded-circle d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: 42,
                                                        height: 42,
                                                        background:
                                                            "rgba(245,166,35,.13)",
                                                        color: "#a36c08",
                                                    }}
                                                >
                                                    <i className="fas fa-building" />
                                                </div>

                                            </div>

                                            <div className="small text-secondary mt-1">
                                                5% platform fee
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                {/* Payment details */}
                                <div className="card h-card border-0 rounded-4 mb-4">

                                    <div className="card-body p-4">

                                        <h5 className="fw-bold mb-3">
                                            Payment details
                                        </h5>

                                        {payment ? (
                                            <>

                                                <DetailRow
                                                    label="Amount"
                                                    value={money(
                                                        payment.amount,
                                                        currency,
                                                    )}
                                                />

                                                <DetailRow
                                                    label="Currency"
                                                    value={
                                                        currency
                                                    }
                                                />

                                                <DetailRow
                                                    label="Status"
                                                    value={
                                                        <PaymentBadge
                                                            status={
                                                                payment.status
                                                            }
                                                        />
                                                    }
                                                />

                                                <DetailRow
                                                    label="Provider"
                                                    value={
                                                        payment.provider ||
                                                        "—"
                                                    }
                                                />

                                                <DetailRow
                                                    label="Reference"
                                                    value={
                                                        <span className="h-reference">
                                                            {
                                                                payment.reference ||
                                                                "—"
                                                            }
                                                        </span>
                                                    }
                                                />

                                                <DetailRow
                                                    label="Transaction ID"
                                                    value={
                                                        <span className="h-reference">
                                                            {
                                                                payment.provider_transaction_id ||
                                                                "—"
                                                            }
                                                        </span>
                                                    }
                                                />

                                                <DetailRow
                                                    label="Paid at"
                                                    value={
                                                        payment.paid_at ||
                                                        "—"
                                                    }
                                                />

                                            </>
                                        ) : (
                                            <div className="text-center py-3">

                                                <div
                                                    className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: 52,
                                                        height: 52,
                                                        background:
                                                            "rgba(245,166,35,.12)",
                                                        color: "#a66d08",
                                                    }}
                                                >
                                                    <i className="fas fa-receipt" />
                                                </div>

                                                <div className="fw-semibold mb-1">
                                                    No payment found
                                                </div>

                                                <div className="small text-secondary">
                                                    No payment record is
                                                    currently associated
                                                    with this connection.
                                                </div>

                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* Earnings explanation */}
                                <div className="card h-card border-0 rounded-4">

                                    <div className="card-body p-4">

                                        <h6 className="fw-bold mb-3">
                                            Earnings breakdown
                                        </h6>

                                        <div className="small text-secondary mb-3">
                                            Future Connect retains 5% of
                                            each successful connection
                                            payment. You receive the
                                            remaining 95%.
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="small">
                                                Connection payment
                                            </span>

                                            <strong>
                                                {payment
                                                    ? money(
                                                          amount,
                                                          currency,
                                                      )
                                                    : "—"}
                                            </strong>
                                        </div>

                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="small h-talent">
                                                Talent · 95%
                                            </span>

                                            <strong className="h-talent">
                                                {payment
                                                    ? money(
                                                          talentEarning,
                                                          currency,
                                                      )
                                                    : "—"}
                                            </strong>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <span className="small h-fee">
                                                Future Connect · 5%
                                            </span>

                                            <strong className="h-fee">
                                                {payment
                                                    ? money(
                                                          futureConnectFee,
                                                          currency,
                                                      )
                                                    : "—"}
                                            </strong>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

/* ============================================================
   INFO ITEM
============================================================ */

function InfoItem({
    icon,
    label,
    value,
}) {
    return (
        <div className="col-md-6">

            <div className="h-label mb-1">
                <i
                    className={`fas ${icon} me-1`}
                />

                {label}
            </div>

            <div className="h-value text-break">
                {value}
            </div>

        </div>
    );
}

/* ============================================================
   DETAIL ROW
============================================================ */

function DetailRow({
    label,
    value,
}) {
    return (
        <div className="h-info-row">

            <div className="d-flex justify-content-between align-items-start gap-3">

                <div className="small text-secondary">
                    {label}
                </div>

                <div className="text-end">
                    {typeof value === "string" ? (
                        <div className="fw-semibold text-break">
                            {value}
                        </div>
                    ) : (
                        value
                    )}
                </div>

            </div>

        </div>
    );
}

/* ============================================================
   STATUS
============================================================ */

function StatusBadge({ status }) {
    const normalized = String(
        status || "pending",
    ).toLowerCase();

    const map = {
        pending: {
            cls: "h-badge-pending",
            label: "Pending",
        },

        accepted: {
            cls: "h-badge-accepted",
            label: "Accepted",
        },

        declined: {
            cls: "h-badge-declined",
            label: "Declined",
        },
    };

    const entry =
        map[normalized] ?? map.pending;

    return (
        <span className={`h-badge ${entry.cls}`}>
            {entry.label}
        </span>
    );
}

/* ============================================================
   PAYMENT STATUS
============================================================ */

function PaymentBadge({ status }) {
    const normalized = String(
        status || "pending",
    ).toLowerCase();

    const paid = PAID_STATUSES.includes(
        normalized,
    );

    return (
        <span
            className={`h-badge ${
                paid
                    ? "h-badge-paid"
                    : "h-badge-unpaid"
            }`}
        >
            <i
                className={`fas ${
                    paid
                        ? "fa-check-circle"
                        : "fa-clock"
                } me-1`}
            />

            {paid ? "Paid" : "Unpaid"}
        </span>
    );
}

/* ============================================================
   INITIALS
============================================================ */

function getInitials(name) {
    if (!name) {
        return "?";
    }

    return name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

/* ============================================================
   MONEY
============================================================ */

function money(
    value,
    currency = "RWF",
) {
    const amount = Number(value || 0);

    return new Intl.NumberFormat(
        "en-RW",
        {
            style: "currency",
            currency: currency || "RWF",
            maximumFractionDigits: 2,
        },
    ).format(amount);
}