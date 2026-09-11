// resources/js/Pages/Talent/Connections/Show.jsx

import { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

const PAID_STATUSES = ["paid", "completed", "success", "successful"];

export default function Show({ connection, earnings = {} }) {
    const [confirmOpen, setConfirmOpen] = useState(false);

    const { data, setData, patch, processing, errors, reset } = useForm({
        status: connection?.status ?? "pending",
        response: connection?.response ?? "",
    });

    const payment = connection?.payment ?? null;

    /*
     * IMPORTANT:
     *
     * The money that matters here always comes from
     * connection_payments — never from talent_connections.amount.
     *
     * A payment record can exist without being *paid* yet
     * (pending / failed provider callback, etc). Earnings are
     * only real once the payment status is one of PAID_STATUSES,
     * so the breakdown below is split into:
     *   - "amount"    -> the gross figure on the payment record
     *   - "isPaid"    -> whether that gross figure has actually
     *                     settled and can be called an earning
     *
     * Previously the page computed talent/platform splits off any
     * payment record regardless of status, which showed money as
     * "earned" for connections that were only pending or had failed
     * payments. `earnings` (a legacy prop) is only used as a last
     * resort when there is no payment relation at all.
     */
    const hasPayment = Boolean(payment);
    const amount = Number(payment?.amount ?? (hasPayment ? 0 : earnings?.amount) ?? 0);
    const currency = payment?.currency ?? earnings?.currency ?? "RWF";
    const paymentStatus = String(payment?.status ?? "").toLowerCase();
    const isPaid = hasPayment && PAID_STATUSES.includes(paymentStatus);

    const talentEarning = amount * 0.95;
    const platformFee = amount * 0.05;

    const isPending = String(connection?.status).toLowerCase() === "pending";

    function openConfirm(e) {
        e.preventDefault();
        setConfirmOpen(true);
    }

    function submitResponse() {
        patch(route("talent.connections.respond", connection.id), {
            onSuccess: () => setConfirmOpen(false),
        });
    }

    return (
        <AppLayout>
            <Head title={`Connection #${connection?.id ?? ""}`} />

            <div data-h-scope="talent-connection-show">
                <style>{`
                    [data-h-scope="talent-connection-show"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-accent-soft: rgba(72,213,151,.12);
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f5f8f7;
                        --h-muted: #6b7678;
                        --h-border: rgba(6, 15, 17, 0.08);
                        --h-danger: #e5484d;
                        --h-warn: #f5a623;
                        --h-warn-soft: rgba(245,166,35,.12);
                        --h-warn-ink: #a36c08;

                        background: var(--h-bg);
                        min-height: 100%;
                    }

                    [data-h-scope="talent-connection-show"] .h-page { max-width: 1200px; margin: 0 auto; }

                    [data-h-scope="talent-connection-show"] .h-back {
                        display: inline-flex; align-items: center; gap: .5rem;
                        color: var(--h-muted); text-decoration: none; font-weight: 600; font-size: 14px;
                    }
                    [data-h-scope="talent-connection-show"] .h-back:hover { color: var(--h-ink); }

                    [data-h-scope="talent-connection-show"] .h-eyebrow {
                        color: var(--h-accent-dark); font-weight: 700; font-size: 13px;
                    }

                    [data-h-scope="talent-connection-show"] .h-card {
                        background: white;
                        border: 1px solid var(--h-border);
                        border-radius: 18px;
                    }

                    [data-h-scope="talent-connection-show"] .h-avatar {
                        width: 56px; height: 56px; flex-shrink: 0;
                        background: var(--h-accent-soft); color: #229365;
                        font-weight: 700; font-size: 18px;
                    }

                    [data-h-scope="talent-connection-show"] .h-badge {
                        display: inline-flex; align-items: center; gap: 6px;
                        white-space: nowrap; font-size: 12.5px; font-weight: 700;
                        padding: 6px 12px; border-radius: 999px;
                    }
                    [data-h-scope="talent-connection-show"] .h-badge-pending { background: var(--h-warn-soft); color: var(--h-warn-ink); }
                    [data-h-scope="talent-connection-show"] .h-badge-accepted { background: var(--h-accent-soft); color: #208d62; }
                    [data-h-scope="talent-connection-show"] .h-badge-declined { background: rgba(229,72,77,.11); color: #d13b40; }
                    [data-h-scope="talent-connection-show"] .h-badge-paid { background: var(--h-accent-soft); color: #208d62; }
                    [data-h-scope="talent-connection-show"] .h-badge-unpaid { background: var(--h-warn-soft); color: var(--h-warn-ink); }
                    [data-h-scope="talent-connection-show"] .h-badge-failed { background: rgba(229,72,77,.11); color: #d13b40; }

                    [data-h-scope="talent-connection-show"] .h-divider { border-top: 1px solid var(--h-border); }

                    [data-h-scope="talent-connection-show"] .h-total {
                        background: var(--h-ink); color: white; border-radius: 14px;
                    }

                    [data-h-scope="talent-connection-show"] .h-split-row {
                        display: flex; align-items: center; justify-content: space-between; gap: 12px;
                        padding: 14px 0; border-bottom: 1px solid var(--h-border);
                    }
                    [data-h-scope="talent-connection-show"] .h-split-row:last-child { border-bottom: none; }

                    [data-h-scope="talent-connection-show"] .h-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
                    [data-h-scope="talent-connection-show"] .h-dot-talent { background: var(--h-accent); }
                    [data-h-scope="talent-connection-show"] .h-dot-fee { background: var(--h-warn); }

                    [data-h-scope="talent-connection-show"] .h-message {
                        background: #f8faf9; border-left: 3px solid var(--h-accent);
                        border-radius: 0 10px 10px 0; white-space: pre-wrap;
                    }

                    [data-h-scope="talent-connection-show"] .h-label {
                        font-size: 12.5px; color: var(--h-muted); font-weight: 600;
                    }
                    [data-h-scope="talent-connection-show"] .h-value { color: var(--h-ink); font-weight: 600; }

                    [data-h-scope="talent-connection-show"] .h-form-control {
                        border: 1px solid rgba(6,15,17,.12); border-radius: 10px; padding: 10px 13px;
                    }
                    [data-h-scope="talent-connection-show"] .h-form-control:focus {
                        border-color: var(--h-accent); box-shadow: 0 0 0 3px var(--h-accent-soft);
                    }

                    [data-h-scope="talent-connection-show"] .h-btn { border-radius: 10px; font-weight: 700; padding: 10px 18px; }
                    [data-h-scope="talent-connection-show"] .h-btn-dark { background: var(--h-ink); color: white; border: 0; }
                    [data-h-scope="talent-connection-show"] .h-btn-dark:hover { background: #1b282b; color: white; }
                    [data-h-scope="talent-connection-show"] .h-btn-dark:disabled { opacity: .6; }
                    [data-h-scope="talent-connection-show"] .h-btn-light { background: white; color: var(--h-ink); border: 1px solid var(--h-border); }
                    [data-h-scope="talent-connection-show"] .h-btn-light:hover { background: #f4f7f6; color: var(--h-ink); }
                    [data-h-scope="talent-connection-show"] .h-btn-danger { background: var(--h-danger); color: white; border: 0; }
                    [data-h-scope="talent-connection-show"] .h-btn-danger:hover { background: #cf3e42; color: white; }

                    [data-h-scope="talent-connection-show"] .h-reference {
                        font-family: monospace; font-size: 12px; word-break: break-all;
                    }

                    [data-h-scope="talent-connection-show"] .h-pending-note {
                        background: var(--h-warn-soft); color: var(--h-warn-ink);
                        border-radius: 10px; font-size: 13px; padding: 10px 12px;
                    }

                    /* Confirm modal */
                    [data-h-scope="talent-connection-show"] .h-modal-backdrop {
                        position: fixed; inset: 0; background: rgba(6,15,17,.5);
                        display: flex; align-items: center; justify-content: center;
                        z-index: 1050; padding: 16px;
                    }
                    [data-h-scope="talent-connection-show"] .h-modal {
                        background: white; border-radius: 16px; max-width: 460px; width: 100%;
                        padding: 28px;
                    }
                `}</style>

                <div className="container-fluid px-3 px-md-4 py-4">
                    <div className="h-page">

                        <div className="mb-4">
                            <Link href={route("talent.connections.index")} className="h-back">
                                <i className="fas fa-arrow-left" />
                                Back to connections
                            </Link>
                        </div>

                        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
                            <div>
                                <div className="h-eyebrow mb-1">Connection request</div>
                                <h3 className="fw-bold mb-1">Connection details</h3>
                                <p className="text-secondary mb-0">
                                    Review the request, payment, and your earnings.
                                </p>
                            </div>
                            <StatusBadge status={connection?.status} />
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-7">

                                {/* Requester */}
                                <div className="card h-card border-0 mb-4">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center gap-3 mb-4">
                                            <div className="h-avatar rounded-circle d-flex align-items-center justify-content-center">
                                                {getInitials(connection?.name)}
                                            </div>
                                            <div className="min-w-0">
                                                <h5 className="fw-bold mb-1">{connection?.name || "Unknown user"}</h5>
                                                <div className="small text-secondary">Connection requester</div>
                                            </div>
                                        </div>

                                        <div className="row g-3">
                                            <InfoItem icon="fa-envelope" label="Email" value={connection?.email || "Not provided"} />
                                            <InfoItem icon="fa-phone" label="Phone" value={connection?.phone || "Not provided"} />
                                            <InfoItem icon="fa-calendar" label="Requested" value={connection?.created_at || connection?.created_at_human || "—"} />
                                            <InfoItem icon="fa-hashtag" label="Connection ID" value={`#${connection?.id}`} />
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="card h-card border-0 mb-4">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3">Request message</h5>
                                        {connection?.message ? (
                                            <div className="h-message p-3">{connection.message}</div>
                                        ) : (
                                            <div className="text-secondary small">No message was included with this request.</div>
                                        )}
                                    </div>
                                </div>

                                {/* Previous response */}
                                {connection?.response && (
                                    <div className="card h-card border-0 mb-4">
                                        <div className="card-body p-4">
                                            <h5 className="fw-bold mb-3">Your response</h5>
                                            <div className="h-message p-3">{connection.response}</div>
                                        </div>
                                    </div>
                                )}

                                {/* Respond */}
                                {isPending && (
                                    <div className="card h-card border-0">
                                        <div className="card-body p-4">
                                            <div className="mb-4">
                                                <h5 className="fw-bold mb-1">Respond to request</h5>
                                                <p className="small text-secondary mb-0">
                                                    Accept or decline this connection request.
                                                </p>
                                            </div>

                                            <form onSubmit={openConfirm}>
                                                <div className="mb-3">
                                                    <label className="form-label fw-semibold">Decision</label>
                                                    <select
                                                        className={`form-select h-form-control ${errors.status ? "is-invalid" : ""}`}
                                                        value={data.status}
                                                        onChange={(e) => setData("status", e.target.value)}
                                                    >
                                                        <option value="accepted">Accept connection</option>
                                                        <option value="declined">Decline connection</option>
                                                    </select>
                                                    {errors.status && <div className="invalid-feedback">{errors.status}</div>}
                                                </div>

                                                <div className="mb-4">
                                                    <label className="form-label fw-semibold">
                                                        Response <span className="text-secondary fw-normal ms-1">(optional)</span>
                                                    </label>
                                                    <textarea
                                                        rows="5"
                                                        className={`form-control h-form-control ${errors.response ? "is-invalid" : ""}`}
                                                        placeholder="Write a response to the requester..."
                                                        value={data.response}
                                                        onChange={(e) => setData("response", e.target.value)}
                                                    />
                                                    {errors.response && <div className="invalid-feedback">{errors.response}</div>}
                                                </div>

                                                <div className="d-flex flex-wrap gap-2">
                                                    <button type="submit" className="btn h-btn h-btn-dark">
                                                        <i className="fas fa-paper-plane me-2" />
                                                        Review & save
                                                    </button>
                                                    <Link href={route("talent.connections.index")} className="btn h-btn h-btn-light">
                                                        Cancel
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="col-lg-5">

                                {/* Financial summary */}
                                <div className="card h-card border-0 mb-4">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <h5 className="fw-bold mb-1">Payment & earnings</h5>
                                                <p className="small text-secondary mb-0">Connection payment breakdown</p>
                                            </div>
                                            {hasPayment ? (
                                                <PaymentBadge status={payment.status} />
                                            ) : (
                                                <span className="h-badge h-badge-unpaid">
                                                    <i className="fas fa-clock" /> Unpaid
                                                </span>
                                            )}
                                        </div>

                                        <div className="h-total p-4 mb-3">
                                            <div className="small opacity-75 mb-1">Total connection payment</div>
                                            <div className="fs-3 fw-bold">{hasPayment ? money(amount, currency) : "—"}</div>
                                        </div>

                                        {hasPayment && !isPaid && (
                                            <div className="h-pending-note mb-3">
                                                <i className="fas fa-circle-info me-2" />
                                                This payment hasn't settled yet ({paymentStatus || "pending"}), so the
                                                split below is a projection, not a confirmed earning.
                                            </div>
                                        )}

                                        <div className="h-split-row">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="h-dot h-dot-talent" />
                                                <div>
                                                    <div className="small text-secondary">
                                                        {isPaid ? "Your earnings" : "Projected earnings"} · 95%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fw-bold fs-6" style={{ color: "#229365" }}>
                                                {hasPayment ? money(talentEarning, currency) : "—"}
                                            </div>
                                        </div>

                                        <div className="h-split-row">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="h-dot h-dot-fee" />
                                                <div className="small text-secondary">Future Connect · 5%</div>
                                            </div>
                                            <div className="fw-bold fs-6" style={{ color: "#a36c08" }}>
                                                {hasPayment ? money(platformFee, currency) : "—"}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment details */}
                                <div className="card h-card border-0 mb-4">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3">Payment details</h5>

                                        {hasPayment ? (
                                            <>
                                                <DetailRow label="Amount" value={money(payment.amount, currency)} />
                                                <DetailRow label="Currency" value={currency} />
                                                <DetailRow label="Status" value={<PaymentBadge status={payment.status} />} />
                                                <DetailRow label="Provider" value={payment.provider || "—"} />
                                                <DetailRow label="Reference" value={<span className="h-reference">{payment.reference || "—"}</span>} />
                                                <DetailRow label="Transaction ID" value={<span className="h-reference">{payment.provider_transaction_id || "—"}</span>} />
                                                <DetailRow label="Paid at" value={payment.paid_at || "—"} />
                                            </>
                                        ) : (
                                            <div className="text-center py-3">
                                                <div
                                                    className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                                                    style={{ width: 52, height: 52, background: "var(--h-warn-soft)", color: "var(--h-warn-ink)" }}
                                                >
                                                    <i className="fas fa-receipt" />
                                                </div>
                                                <div className="fw-semibold mb-1">No payment found</div>
                                                <div className="small text-secondary">
                                                    No payment record is currently associated with this connection.
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Earnings explanation */}
                                <div className="card h-card border-0">
                                    <div className="card-body p-4">
                                        <h6 className="fw-bold mb-2">How the split works</h6>
                                        <div className="small text-secondary">
                                            Future Connect retains 5% of each connection payment once it settles.
                                            You receive the remaining 95% as your earnings.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Confirmation modal */}
                {confirmOpen && (
                    <div
                        className="h-modal-backdrop"
                        onClick={() => !processing && setConfirmOpen(false)}
                    >
                        <div className="h-modal" onClick={(e) => e.stopPropagation()}>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span
                                    className="h-badge"
                                    style={
                                        data.status === "accepted"
                                            ? { background: "var(--h-accent-soft)", color: "#208d62" }
                                            : { background: "rgba(229,72,77,.11)", color: "#d13b40" }
                                    }
                                >
                                    {data.status === "accepted" ? "Accepting" : "Declining"}
                                </span>
                            </div>

                            <h5 className="fw-bold mb-2">
                                {data.status === "accepted" ? "Accept this connection?" : "Decline this connection?"}
                            </h5>

                            <p className="text-secondary small mb-3">
                                {data.status === "accepted"
                                    ? `${connection?.name || "This user"} will be notified that you've accepted their request.`
                                    : `${connection?.name || "This user"} will be notified that you've declined their request.`}
                                {" "}This can't be undone.
                            </p>

                            {data.response?.trim() && (
                                <div className="h-message p-3 mb-4 small">{data.response}</div>
                            )}

                            <div className="d-flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    className={`btn h-btn ${data.status === "accepted" ? "h-btn-dark" : "h-btn-danger"}`}
                                    onClick={submitResponse}
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" />
                                            Saving...
                                        </>
                                    ) : (
                                        `Confirm ${data.status === "accepted" ? "accept" : "decline"}`
                                    )}
                                </button>
                                <button
                                    type="button"
                                    className="btn h-btn h-btn-light"
                                    onClick={() => setConfirmOpen(false)}
                                    disabled={processing}
                                >
                                    Go back
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}

function InfoItem({ icon, label, value }) {
    return (
        <div className="col-md-6">
            <div className="h-label mb-1">
                <i className={`fas ${icon} me-1`} />
                {label}
            </div>
            <div className="h-value text-break">{value}</div>
        </div>
    );
}

function DetailRow({ label, value }) {
    return (
        <div className="h-split-row">
            <div className="small text-secondary">{label}</div>
            <div className="text-end">
                {typeof value === "string" ? <div className="fw-semibold text-break">{value}</div> : value}
            </div>
        </div>
    );
}

function StatusBadge({ status }) {
    const normalized = String(status || "pending").toLowerCase();
    const map = {
        pending: { cls: "h-badge-pending", label: "Pending" },
        accepted: { cls: "h-badge-accepted", label: "Accepted" },
        declined: { cls: "h-badge-declined", label: "Declined" },
    };
    const entry = map[normalized] ?? map.pending;
    return <span className={`h-badge ${entry.cls}`}>{entry.label}</span>;
}

function PaymentBadge({ status }) {
    const normalized = String(status || "pending").toLowerCase();
    const paid = PAID_STATUSES.includes(normalized);
    const failed = ["failed", "cancelled", "canceled", "declined"].includes(normalized);

    const cls = paid ? "h-badge-paid" : failed ? "h-badge-failed" : "h-badge-unpaid";
    const icon = paid ? "fa-check-circle" : failed ? "fa-circle-xmark" : "fa-clock";
    const label = paid ? "Paid" : failed ? "Failed" : "Pending";

    return (
        <span className={`h-badge ${cls}`}>
            <i className={`fas ${icon}`} />
            {label}
        </span>
    );
}

function getInitials(name) {
    if (!name) return "?";
    return name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();
}

function money(value, currency = "RWF") {
    const amount = Number(value || 0);
    return new Intl.NumberFormat("en-RW", {
        style: "currency",
        currency: currency || "RWF",
        maximumFractionDigits: 2,
    }).format(amount);
}