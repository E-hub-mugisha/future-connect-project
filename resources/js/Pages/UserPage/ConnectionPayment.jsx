import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Payment({ payment, talent }) {
    const submitPayment = (e) => {
        e.preventDefault();

        const form = document.createElement("form");

        form.method = "POST";
        form.action = `/connection/payment/${payment.id}/pay`;

        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content");

        const csrfInput = document.createElement("input");

        csrfInput.type = "hidden";
        csrfInput.name = "_token";
        csrfInput.value = csrfToken || "";

        form.appendChild(csrfInput);

        document.body.appendChild(form);

        form.submit();
    };

    const formatAmount = (amount, currency = "RWF") => {
        return new Intl.NumberFormat("en-RW", {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const meta = payment?.meta || {};

    return (
        <>
            <Head title="Complete Connection Payment" />

            <div className="connection-payment-page">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9">
                            {/* Header */}
                            <div className="text-center mb-4">
                                <div className="payment-icon">
                                    <i className="ti ti-credit-card"></i>
                                </div>

                                <h1 className="payment-title">
                                    Complete Your Connection
                                </h1>

                                <p className="payment-subtitle">
                                    Complete the payment below to send your
                                    connection request to{" "}
                                    <strong>{talent?.name}</strong>.
                                </p>
                            </div>

                            {/* Main Card */}
                            <div className="payment-card">
                                {/* Talent Section */}
                                <div className="talent-summary">
                                    <div className="talent-avatar">
                                        {talent?.profile_photo ? (
                                            <img
                                                src={talent.profile_photo}
                                                alt={talent.name}
                                            />
                                        ) : talent?.photo ? (
                                            <img
                                                src={talent.photo}
                                                alt={talent.name}
                                            />
                                        ) : (
                                            <span>
                                                {talent?.name
                                                    ?.charAt(0)
                                                    ?.toUpperCase()}
                                            </span>
                                        )}
                                    </div>

                                    <div className="talent-info">
                                        <span className="small-label">
                                            CONNECTING WITH
                                        </span>

                                        <h3>{talent?.name}</h3>

                                        {talent?.title && <p>{talent.title}</p>}
                                    </div>

                                    <div className="payment-status">
                                        <span className="status-badge pending">
                                            <i className="ti ti-clock"></i>
                                            Pending Payment
                                        </span>
                                    </div>
                                </div>

                                <div className="divider"></div>

                                {/* Payment Summary */}
                                <div className="section-title">
                                    <i className="ti ti-file-invoice"></i>
                                    Connection Summary
                                </div>

                                <div className="summary-list">
                                    <div className="summary-row">
                                        <span>Connection request</span>
                                        <strong>{talent?.name}</strong>
                                    </div>

                                    <div className="summary-row">
                                        <span>Request status</span>
                                        <span className="text-pending">
                                            Pending
                                        </span>
                                    </div>

                                    <div className="summary-row">
                                        <span>Payment reference</span>
                                        <strong className="reference">
                                            {payment?.reference}
                                        </strong>
                                    </div>
                                </div>

                                {/* Message */}
                                {meta?.message && (
                                    <>
                                        <div className="divider"></div>

                                        <div className="section-title">
                                            <i className="ti ti-message"></i>
                                            Your Message
                                        </div>

                                        <div className="message-box">
                                            <p>{meta.message}</p>
                                        </div>
                                    </>
                                )}

                                {/* Contact Details */}
                                <div className="divider"></div>

                                <div className="section-title">
                                    <i className="ti ti-user"></i>
                                    Contact Information
                                </div>

                                <div className="contact-grid">
                                    <div className="contact-item">
                                        <span className="contact-label">
                                            Name
                                        </span>
                                        <strong>{meta?.name || "—"}</strong>
                                    </div>

                                    <div className="contact-item">
                                        <span className="contact-label">
                                            Email
                                        </span>
                                        <strong>{meta?.email || "—"}</strong>
                                    </div>

                                    {meta?.phone && (
                                        <div className="contact-item">
                                            <span className="contact-label">
                                                Phone
                                            </span>
                                            <strong>{meta.phone}</strong>
                                        </div>
                                    )}
                                </div>

                                <div className="divider"></div>

                                {/* Amount */}
                                <div className="amount-section">
                                    <div>
                                        <span className="amount-label">
                                            Connection Fee
                                        </span>

                                        <p>
                                            Payment is required before the
                                            connection request is sent.
                                        </p>
                                    </div>

                                    <div className="amount">
                                        {formatAmount(
                                            payment?.amount || 0,
                                            payment?.currency || "RWF",
                                        )}
                                    </div>
                                </div>

                                {/* Payment Notice */}
                                <div className="payment-notice">
                                    <div className="notice-icon">
                                        <i className="ti ti-shield-check"></i>
                                    </div>

                                    <div>
                                        <strong>
                                            Your request is not connected yet
                                        </strong>

                                        <p>
                                            This payment creates a pending
                                            payment request. Your connection
                                            request will only be sent to the
                                            talent after the payment is
                                            successfully confirmed.
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <form onSubmit={submitPayment}>
                                    <div className="payment-actions">
                                        <Link
                                            href={`/skill-profile/${talent?.id}`}
                                            className="btn-cancel"
                                        >
                                            <i className="ti ti-arrow-left"></i>
                                            Back to Profile
                                        </Link>

                                        <button
                                            type="submit"
                                            className="btn-pay"
                                        >
                                            <i className="ti ti-lock"></i>
                                            Pay & Connect
                                        </button>
                                    </div>
                                </form>

                                {/* Secure payment text */}
                                <div className="secure-payment">
                                    <i className="ti ti-lock"></i>
                                    Secure payment · Your connection request is
                                    only activated after successful payment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .connection-payment-page {
                    min-height: 100vh;
                    background: #0f1117;
                    color: #ffffff;
                }

                .payment-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 18px;
                    margin: 0 auto 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 166, 103, 0.12);
                    color: #00a667;
                    font-size: 30px;
                }

                .payment-title {
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    color: #ffffff;
                }

                .payment-subtitle {
                    color: rgba(255, 255, 255, 0.65);
                    max-width: 620px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .payment-subtitle strong {
                    color: #00a667;
                }

                .payment-card {
                    background: #171a21;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
                }

                .talent-summary {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                }

                .talent-avatar {
                    width: 70px;
                    height: 70px;
                    border-radius: 18px;
                    overflow: hidden;
                    background: #00a667;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    font-size: 28px;
                    font-weight: 700;
                    flex-shrink: 0;
                }

                .talent-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .talent-info {
                    flex: 1;
                }

                .small-label {
                    display: block;
                    color: rgba(255, 255, 255, 0.45);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    margin-bottom: 5px;
                }

                .talent-info h3 {
                    margin: 0;
                    color: #ffffff;
                    font-size: 20px;
                    font-weight: 700;
                }

                .talent-info p {
                    margin: 4px 0 0;
                    color: rgba(255, 255, 255, 0.55);
                    font-size: 14px;
                }

                .payment-status {
                    margin-left: auto;
                }

                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 7px 12px;
                    border-radius: 50px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .status-badge.pending {
                    background: rgba(255, 193, 7, 0.12);
                    color: #ffc107;
                    border: 1px solid rgba(255, 193, 7, 0.18);
                }

                .divider {
                    height: 1px;
                    background: rgba(255, 255, 255, 0.07);
                    margin: 28px 0;
                }

                .section-title {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: #ffffff;
                    font-size: 15px;
                    font-weight: 700;
                    margin-bottom: 18px;
                }

                .section-title i {
                    color: #00a667;
                    font-size: 19px;
                }

                .summary-list {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    color: rgba(255, 255, 255, 0.55);
                    font-size: 14px;
                }

                .summary-row strong {
                    color: #ffffff;
                    text-align: right;
                }

                .text-pending {
                    color: #ffc107;
                    font-weight: 600;
                }

                .reference {
                    font-family: monospace;
                    font-size: 13px;
                    color: #00a667 !important;
                }

                .message-box {
                    padding: 18px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.035);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                }

                .message-box p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.72);
                    line-height: 1.7;
                    white-space: pre-wrap;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 15px;
                }

                .contact-item {
                    padding: 15px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.035);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                }

                .contact-label {
                    display: block;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 12px;
                    margin-bottom: 5px;
                }

                .contact-item strong {
                    display: block;
                    color: #ffffff;
                    font-size: 14px;
                    word-break: break-word;
                }

                .amount-section {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }

                .amount-label {
                    display: block;
                    font-size: 17px;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 5px;
                }

                .amount-section p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.48);
                    font-size: 13px;
                }

                .amount {
                    color: #00a667;
                    font-size: 30px;
                    font-weight: 800;
                    white-space: nowrap;
                }

                .payment-notice {
                    display: flex;
                    gap: 14px;
                    padding: 16px;
                    margin-top: 28px;
                    border-radius: 12px;
                    background: rgba(0, 166, 103, 0.07);
                    border: 1px solid rgba(0, 166, 103, 0.16);
                }

                .notice-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    background: rgba(0, 166, 103, 0.12);
                    color: #00a667;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    font-size: 19px;
                }

                .payment-notice strong {
                    color: #ffffff;
                    font-size: 14px;
                    display: block;
                    margin-bottom: 4px;
                }

                .payment-notice p {
                    margin: 0;
                    color: rgba(255, 255, 255, 0.55);
                    font-size: 13px;
                    line-height: 1.6;
                }

                .payment-actions {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    margin-top: 28px;
                }

                .btn-cancel,
                .btn-pay {
                    min-height: 48px;
                    border-radius: 10px;
                    padding: 0 20px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .btn-cancel {
                    color: rgba(255, 255, 255, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: transparent;
                }

                .btn-cancel:hover {
                    color: #ffffff;
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .btn-pay {
                    border: 0;
                    background: #00a667;
                    color: #ffffff;
                    min-width: 180px;
                }

                .btn-pay:hover:not(:disabled) {
                    background: #008f58;
                    transform: translateY(-1px);
                }

                .btn-pay:disabled {
                    opacity: 0.65;
                    cursor: not-allowed;
                }

                .secure-payment {
                    text-align: center;
                    margin-top: 18px;
                    color: rgba(255, 255, 255, 0.35);
                    font-size: 11px;
                }

                .secure-payment i {
                    margin-right: 4px;
                    color: #00a667;
                }

                @media (max-width: 767px) {
                    .connection-payment-page .container {
                        padding-left: 15px;
                        padding-right: 15px;
                    }

                    .payment-card {
                        padding: 20px;
                        border-radius: 16px;
                    }

                    .payment-title {
                        font-size: 26px;
                    }

                    .talent-summary {
                        flex-wrap: wrap;
                    }

                    .payment-status {
                        width: 100%;
                        margin-left: 0;
                    }

                    .contact-grid {
                        grid-template-columns: 1fr;
                    }

                    .amount-section {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .amount {
                        font-size: 26px;
                    }

                    .payment-actions {
                        flex-direction: column-reverse;
                    }

                    .btn-cancel,
                    .btn-pay {
                        width: 100%;
                    }
                }
            `}</style>
        </>
    );
}

Payment.layout = (page) => (
    <GuestLayout children={page} title="Complete Connection Payment" />
);
