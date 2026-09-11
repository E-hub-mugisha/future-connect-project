// resources/js/Pages/Talent/Connections/Index.jsx

import React, { useMemo } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

const money = (value, currency = "RWF") => {
    const amount = Number(value || 0);

    return `${new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount)} ${currency}`;
};

const titleCase = (value) => {
    if (!value) return "";

    return value
        .toString()
        .replace(/[_-]/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

/*
|--------------------------------------------------------------------------
| Status Badge
|--------------------------------------------------------------------------
*/

function StatusBadge({ status }) {
    const normalized = String(status || "").toLowerCase();

    const config = {
        pending: {
            label: "Pending",
            className: "status-pending",
            icon: "bi-hourglass-split",
        },
        accepted: {
            label: "Accepted",
            className: "status-accepted",
            icon: "bi-check-circle",
        },
        declined: {
            label: "Declined",
            className: "status-declined",
            icon: "bi-x-circle",
        },
    };

    const current = config[normalized] || {
        label: titleCase(normalized) || "Unknown",
        className: "status-default",
        icon: "bi-circle",
    };

    return (
        <span className={`fc-status ${current.className}`}>
            <i className={`bi ${current.icon}`} />
            {current.label}
        </span>
    );
}

/*
|--------------------------------------------------------------------------
| Payment Badge
|--------------------------------------------------------------------------
*/

function PaymentBadge({ payment, isPaid }) {
    if (!payment) {
        return (
            <span className="fc-payment-badge payment-none">
                <i className="bi bi-dash-circle me-1" />
                No payment
            </span>
        );
    }

    if (isPaid) {
        return (
            <span className="fc-payment-badge payment-paid">
                <i className="bi bi-check-circle-fill me-1" />
                Paid
            </span>
        );
    }

    return (
        <span className="fc-payment-badge payment-pending">
            <i className="bi bi-clock me-1" />
            {titleCase(payment.status || "Pending")}
        </span>
    );
}

/*
|--------------------------------------------------------------------------
| Empty State
|--------------------------------------------------------------------------
*/

function EmptyState({ status }) {
    const messages = {
        all: {
            title: "No connection requests yet",
            description:
                "When people request to connect with you, their requests will appear here.",
            icon: "bi-people",
        },
        pending: {
            title: "No pending requests",
            description:
                "You currently have no connection requests waiting for your response.",
            icon: "bi-hourglass",
        },
        accepted: {
            title: "No accepted connections",
            description: "Accepted connection requests will appear here.",
            icon: "bi-check2-circle",
        },
        declined: {
            title: "No declined connections",
            description: "Declined connection requests will appear here.",
            icon: "bi-x-circle",
        },
    };

    const current = messages[status] || messages.all;

    return (
        <div className="fc-empty-state">
            <div className="empty-icon">
                <i className={`bi ${current.icon}`} />
            </div>

            <h5>{current.title}</h5>

            <p>{current.description}</p>

            <Link
                href={route("talent.dashboard")}
                className="btn btn-fc-primary"
            >
                <i className="bi bi-grid me-2" />
                Go to dashboard
            </Link>
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| Pagination
|--------------------------------------------------------------------------
*/

function Pagination({ links = [] }) {
    if (!links || links.length <= 3) {
        return null;
    }

    return (
        <nav className="fc-pagination" aria-label="Connection pagination">
            <ul className="pagination mb-0">
                {links.map((link, index) => {
                    const isPrevious = index === 0;

                    const isNext = index === links.length - 1;

                    return (
                        <li
                            key={`${link.label}-${index}`}
                            className={`page-item ${
                                link.active ? "active" : ""
                            } ${!link.url ? "disabled" : ""}`}
                        >
                            <Link
                                href={link.url || "#"}
                                preserveScroll
                                className="page-link"
                            >
                                {isPrevious ? (
                                    <i className="bi bi-chevron-left" />
                                ) : isNext ? (
                                    <i className="bi bi-chevron-right" />
                                ) : (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

/*
|--------------------------------------------------------------------------
| Summary Card
|--------------------------------------------------------------------------
*/

function SummaryCard({ icon, title, value, description, className = "" }) {
    return (
        <div className={`fc-summary-card ${className}`}>
            <div className="summary-card-top">
                <div className="summary-icon">
                    <i className={`bi ${icon}`} />
                </div>
            </div>

            <div className="summary-content">
                <span className="summary-title">{title}</span>

                <div className="summary-value">{value}</div>

                {description && (
                    <span className="summary-description">{description}</span>
                )}
            </div>
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| Desktop Connection Row
|--------------------------------------------------------------------------
*/

function ConnectionRow({ connection }) {
    /*
    |--------------------------------------------------------------------------
    | IMPORTANT
    |--------------------------------------------------------------------------
    |
    | Financial information comes from:
    |
    | connection_payments.amount
    |
    | NOT:
    |
    | connection.amount
    |
    */

    const payment = connection?.payment ?? null;

    const rowEarnings = connection?.earnings ?? null;

    const amount = Number(rowEarnings?.amount ?? payment?.amount ?? 0);

    const talentEarning = Number(rowEarnings?.talent ?? 0);

    const futureConnectFee = Number(rowEarnings?.future_connect ?? 0);

    const currency = rowEarnings?.currency ?? payment?.currency ?? "RWF";

    const isPaid = rowEarnings?.is_paid === true;

    return (
        <tr>
            {/* Contact */}
            <td>
                <div className="contact-cell">
                    <div className="contact-avatar">
                        {connection?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>

                    <div className="contact-details">
                        <div className="contact-name">
                            {connection?.name || "Unknown user"}
                        </div>

                        <div className="contact-email">
                            {connection?.email || "No email"}
                        </div>

                        {connection?.phone && (
                            <div className="contact-phone">
                                <i className="bi bi-telephone me-1" />
                                {connection.phone}
                            </div>
                        )}
                    </div>
                </div>
            </td>

            {/* Status */}
            <td>
                <StatusBadge status={connection?.status} />
            </td>

            {/* Payment */}
            <td>
                <div className="payment-cell">
                    <PaymentBadge payment={payment} isPaid={isPaid} />

                    {payment && (
                        <div className="payment-amount">
                            {money(amount, currency)}
                        </div>
                    )}

                    {payment?.reference && (
                        <div
                            className="payment-reference"
                            title={payment.reference}
                        >
                            {payment.reference}
                        </div>
                    )}
                </div>
            </td>

            {/* Talent Earnings */}
            <td>
                <div className="earnings-cell">
                    {isPaid ? (
                        <>
                            <div className="earning-main">
                                {money(talentEarning, currency)}
                            </div>

                            <div className="earning-sub">
                                <span className="earning-percent">95%</span>

                                <span>your earnings</span>
                            </div>
                        </>
                    ) : (
                        <span className="not-available">—</span>
                    )}
                </div>
            </td>

            {/* Date */}
            <td>
                <div className="date-cell">
                    <div className="date-main">
                        {connection?.created_at || "—"}
                    </div>

                    {connection?.created_at_human && (
                        <div className="date-human">
                            {connection.created_at_human}
                        </div>
                    )}
                </div>
            </td>

            {/* Action */}
            <td className="text-end">
                <Link
                    href={route("talent.connections.show", connection.id)}
                    className="btn btn-view"
                >
                    View
                    <i className="bi bi-arrow-right ms-2" />
                </Link>
            </td>
        </tr>
    );
}

/*
|--------------------------------------------------------------------------
| Mobile Connection Card
|--------------------------------------------------------------------------
*/

function ConnectionCard({ connection }) {
    const payment = connection?.payment ?? null;

    const rowEarnings = connection?.earnings ?? null;

    const amount = Number(rowEarnings?.amount ?? payment?.amount ?? 0);

    const talentEarning = Number(rowEarnings?.talent ?? 0);

    const currency = rowEarnings?.currency ?? payment?.currency ?? "RWF";

    const isPaid = rowEarnings?.is_paid === true;

    return (
        <div className="mobile-connection-card">
            {/* Header */}
            <div className="mobile-card-header">
                <div className="contact-cell">
                    <div className="contact-avatar">
                        {connection?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>

                    <div className="contact-details">
                        <div className="contact-name">
                            {connection?.name || "Unknown user"}
                        </div>

                        <div className="contact-email">
                            {connection?.email || "No email"}
                        </div>
                    </div>
                </div>

                <StatusBadge status={connection?.status} />
            </div>

            {/* Message */}
            {connection?.message && (
                <div className="mobile-message">
                    <div className="mobile-section-label">Message</div>

                    <p>{connection.message}</p>
                </div>
            )}

            {/* Financials */}
            <div className="mobile-financial-grid">
                <div className="mobile-financial-item">
                    <span>Payment</span>

                    <strong>{payment ? money(amount, currency) : "—"}</strong>

                    <PaymentBadge payment={payment} isPaid={isPaid} />
                </div>

                <div className="mobile-financial-item earning">
                    <span>Your earnings</span>

                    <strong>
                        {isPaid ? money(talentEarning, currency) : "—"}
                    </strong>

                    {isPaid && <small>95% of payment</small>}
                </div>
            </div>

            {/* Footer */}
            <div className="mobile-card-footer">
                <div className="mobile-date">
                    <i className="bi bi-calendar3 me-1" />

                    {connection?.created_at || "—"}
                </div>

                <Link
                    href={route("talent.connections.show", connection.id)}
                    className="btn btn-view"
                >
                    View details
                    <i className="bi bi-arrow-right ms-2" />
                </Link>
            </div>
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| Main Page
|--------------------------------------------------------------------------
*/

export default function Index({
    connections,
    counts = {},
    filters = {},
    earnings = {},
}) {
    const activeStatus = filters?.status || "all";

    const connectionData = connections?.data || [];

    const currency = earnings?.currency || "RWF";

    /*
    |--------------------------------------------------------------------------
    | Financial Summary
    |--------------------------------------------------------------------------
    */

    const totalAmount = Number(earnings?.total_amount || 0);

    const talentEarnings = Number(earnings?.talent_earnings || 0);

    const futureConnectEarnings = Number(
        earnings?.future_connect_earnings || 0,
    );

    const paidConnections = Number(earnings?.paid_connections || 0);

    const pendingPayments = Number(earnings?.pending_payments || 0);

    /*
    |--------------------------------------------------------------------------
    | Calculate visible page earnings
    |--------------------------------------------------------------------------
    */

    const visibleEarnings = useMemo(() => {
        return connectionData.reduce((total, connection) => {
            const isPaid = connection?.earnings?.is_paid === true;

            if (!isPaid) {
                return total;
            }

            return total + Number(connection?.earnings?.talent || 0);
        }, 0);
    }, [connectionData]);

    /*
    |--------------------------------------------------------------------------
    | Status Filter
    |--------------------------------------------------------------------------
    */

    const handleStatusChange = (status) => {
        router.get(
            route("talent.connections.index"),
            {
                status,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Filter Tabs
    |--------------------------------------------------------------------------
    */

    const tabs = [
        {
            key: "all",
            label: "All requests",
            icon: "bi-inbox",
            count: counts?.all || 0,
        },
        {
            key: "pending",
            label: "Pending",
            icon: "bi-hourglass-split",
            count: counts?.pending || 0,
        },
        {
            key: "accepted",
            label: "Accepted",
            icon: "bi-check-circle",
            count: counts?.accepted || 0,
        },
        {
            key: "declined",
            label: "Declined",
            icon: "bi-x-circle",
            count: counts?.declined || 0,
        },
    ];

    return (
        <AppLayout>
            <Head title="Connection Requests" />

            <div className="fc-connections-page">
                <div className="container-fluid px-3 px-lg-4">
                    {/* ==================================================
                        Page Header
                    ================================================== */}

                    <div className="page-header">
                        <div>
                            <div className="page-eyebrow">
                                <span className="eyebrow-dot" />
                                Talent workspace
                            </div>

                            <h1>Connection requests</h1>

                            <p>
                                Manage people who want to connect with you and
                                track your earnings.
                            </p>
                        </div>

                        <div className="header-action">
                            <Link
                                href={route("talent.dashboard")}
                                className="btn btn-dashboard"
                            >
                                <i className="bi bi-grid me-2" />
                                Dashboard
                            </Link>
                        </div>
                    </div>

                    {/* ==================================================
                        Earnings Summary
                    ================================================== */}

                    <div className="summary-section">
                        <div className="summary-grid">
                            <SummaryCard
                                icon="bi-wallet2"
                                title="Total payments"
                                value={money(totalAmount, currency)}
                                description={`${paidConnections} paid connection${
                                    paidConnections === 1 ? "" : "s"
                                }`}
                                className="summary-total"
                            />

                            <SummaryCard
                                icon="bi-person-check"
                                title="Your earnings"
                                value={money(talentEarnings, currency)}
                                description="95% of successful payments"
                                className="summary-talent"
                            />

                            <SummaryCard
                                icon="bi-building"
                                title="Future Connect"
                                value={money(futureConnectEarnings, currency)}
                                description="5% platform fee"
                                className="summary-platform"
                            />

                            <SummaryCard
                                icon="bi-clock-history"
                                title="Pending payments"
                                value={pendingPayments}
                                description="Awaiting successful payment"
                                className="summary-pending"
                            />
                        </div>
                    </div>

                    {/* ==================================================
                        Earnings Explanation
                    ================================================== */}

                    <div className="earnings-info">
                        <div className="earnings-info-icon">
                            <i className="bi bi-shield-check" />
                        </div>

                        <div className="earnings-info-content">
                            <strong>Transparent earnings</strong>

                            <span>
                                For every successful connection payment, you
                                receive <b>95%</b> while Future Connect retains{" "}
                                <b>5%</b> as the platform fee.
                            </span>
                        </div>

                        <div className="earnings-info-value">
                            <span>Your current share</span>

                            <strong>95%</strong>
                        </div>
                    </div>

                    {/* ==================================================
                        Filters
                    ================================================== */}

                    <div className="connections-panel">
                        <div className="panel-header">
                            <div>
                                <h2>Your connections</h2>

                                <p>Review and respond to incoming requests.</p>
                            </div>

                            <div className="panel-stat">
                                <span>Page earnings</span>

                                <strong>
                                    {money(visibleEarnings, currency)}
                                </strong>
                            </div>
                        </div>

                        <div className="filter-tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    type="button"
                                    onClick={() => handleStatusChange(tab.key)}
                                    className={`filter-tab ${
                                        activeStatus === tab.key ? "active" : ""
                                    }`}
                                >
                                    <i className={`bi ${tab.icon}`} />

                                    <span>{tab.label}</span>

                                    <span className="filter-count">
                                        {tab.count}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* ==================================================
                            Desktop Table
                        ================================================== */}

                        {connectionData.length > 0 ? (
                            <>
                                <div className="table-responsive connection-table-wrapper">
                                    <table className="table connection-table align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th>Contact</th>

                                                <th>Status</th>

                                                <th>Payment</th>

                                                <th>Your earnings</th>

                                                <th>Requested</th>

                                                <th className="text-end">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {connectionData.map(
                                                (connection) => (
                                                    <ConnectionRow
                                                        key={connection.id}
                                                        connection={connection}
                                                    />
                                                ),
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                {/* ==================================================
                                    Mobile Cards
                                ================================================== */}

                                <div className="mobile-connections">
                                    {connectionData.map((connection) => (
                                        <ConnectionCard
                                            key={connection.id}
                                            connection={connection}
                                        />
                                    ))}
                                </div>

                                {/* ==================================================
                                    Pagination
                                ================================================== */}

                                <div className="pagination-wrapper">
                                    <div className="pagination-info">
                                        {connections?.from &&
                                        connections?.to &&
                                        connections?.total ? (
                                            <>
                                                Showing{" "}
                                                <strong>
                                                    {connections.from}
                                                </strong>{" "}
                                                to{" "}
                                                <strong>
                                                    {connections.to}
                                                </strong>{" "}
                                                of{" "}
                                                <strong>
                                                    {connections.total}
                                                </strong>{" "}
                                                connections
                                            </>
                                        ) : (
                                            `${connectionData.length} connection${
                                                connectionData.length === 1
                                                    ? ""
                                                    : "s"
                                            }`
                                        )}
                                    </div>

                                    <Pagination links={connections?.links} />
                                </div>
                            </>
                        ) : (
                            <EmptyState status={activeStatus} />
                        )}
                    </div>
                </div>
            </div>

            {/* ==========================================================
                Page Styles
            ========================================================== */}

            <style>{`
                .fc-connections-page {
                    min-height: calc(100vh - 70px);
                    background: #f7faf9;
                    padding: 32px 0 60px;
                    color: #060f11;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 24px;
                    margin-bottom: 30px;
                }

                .page-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #48d597;
                    font-size: 12px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.09em;
                    margin-bottom: 10px;
                }

                .eyebrow-dot {
                    width: 7px;
                    height: 7px;
                    background: #48d597;
                    border-radius: 50%;
                    box-shadow: 0 0 0 5px rgba(72, 213, 151, 0.12);
                }

                .page-header h1 {
                    margin: 0;
                    font-size: clamp(28px, 3vw, 38px);
                    line-height: 1.15;
                    font-weight: 800;
                    letter-spacing: -0.04em;
                    color: #060f11;
                }

                .page-header p {
                    margin: 9px 0 0;
                    color: #687574;
                    font-size: 15px;
                    max-width: 600px;
                }

                .btn-dashboard {
                    border: 1px solid #e0e9e5;
                    background: #ffffff;
                    color: #060f11;
                    font-weight: 700;
                    padding: 11px 17px;
                    border-radius: 10px;
                    transition: all .2s ease;
                }

                .btn-dashboard:hover {
                    border-color: #48d597;
                    color: #060f11;
                    background: #f5fffa;
                    transform: translateY(-1px);
                }

                /* Summary */

                .summary-section {
                    margin-bottom: 20px;
                }

                .summary-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                }

                .fc-summary-card {
                    position: relative;
                    overflow: hidden;
                    background: #ffffff;
                    border: 1px solid #e6eeeb;
                    border-radius: 16px;
                    padding: 20px;
                    min-height: 155px;
                    box-shadow: 0 3px 14px rgba(6, 15, 17, 0.035);
                    transition: transform .2s ease,
                                box-shadow .2s ease;
                }

                .fc-summary-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 28px rgba(6, 15, 17, 0.07);
                }

                .fc-summary-card::after {
                    content: "";
                    position: absolute;
                    width: 90px;
                    height: 90px;
                    right: -35px;
                    bottom: -40px;
                    border-radius: 50%;
                    background: rgba(72, 213, 151, 0.08);
                }

                .summary-card-top {
                    margin-bottom: 16px;
                }

                .summary-icon {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 11px;
                    background: #effcf6;
                    color: #159a68;
                    font-size: 18px;
                }

                .summary-content {
                    display: flex;
                    flex-direction: column;
                }

                .summary-title {
                    color: #75827f;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: .055em;
                    margin-bottom: 5px;
                }

                .summary-value {
                    font-size: 25px;
                    font-weight: 800;
                    line-height: 1.15;
                    letter-spacing: -.025em;
                    color: #060f11;
                }

                .summary-description {
                    color: #899390;
                    font-size: 12px;
                    margin-top: 6px;
                }

                .summary-talent {
                    border-color: rgba(72, 213, 151, 0.35);
                }

                .summary-talent .summary-icon {
                    background: #48d597;
                    color: #060f11;
                }

                /* Earnings Info */

                .earnings-info {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    background: #060f11;
                    color: #ffffff;
                    border-radius: 15px;
                    padding: 17px 20px;
                    margin-bottom: 22px;
                }

                .earnings-info-icon {
                    width: 42px;
                    height: 42px;
                    flex: 0 0 42px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(72, 213, 151, .13);
                    color: #48d597;
                    font-size: 18px;
                }

                .earnings-info-content {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    flex: 1;
                }

                .earnings-info-content strong {
                    font-size: 13px;
                    font-weight: 800;
                }

                .earnings-info-content span {
                    color: #aab7b3;
                    font-size: 12px;
                }

                .earnings-info-content b {
                    color: #48d597;
                }

                .earnings-info-value {
                    text-align: right;
                    padding-left: 20px;
                    border-left: 1px solid rgba(255,255,255,.1);
                }

                .earnings-info-value span {
                    display: block;
                    color: #82918c;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: .06em;
                    font-weight: 700;
                }

                .earnings-info-value strong {
                    display: block;
                    color: #48d597;
                    font-size: 24px;
                    line-height: 1;
                    margin-top: 5px;
                }

                /* Main Panel */

                .connections-panel {
                    background: #ffffff;
                    border: 1px solid #e4ece8;
                    border-radius: 18px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(6, 15, 17, 0.035);
                }

                .panel-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                    padding: 23px 24px 20px;
                }

                .panel-header h2 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 800;
                    letter-spacing: -.02em;
                }

                .panel-header p {
                    margin: 5px 0 0;
                    color: #8a9592;
                    font-size: 12px;
                }

                .panel-stat {
                    text-align: right;
                }

                .panel-stat span {
                    display: block;
                    color: #8a9592;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: .06em;
                    font-weight: 700;
                }

                .panel-stat strong {
                    display: block;
                    color: #159a68;
                    font-size: 16px;
                    margin-top: 3px;
                }

                /* Filters */

                .filter-tabs {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    padding: 0 24px;
                    border-bottom: 1px solid #edf2f0;
                    overflow-x: auto;
                }

                .filter-tab {
                    appearance: none;
                    border: 0;
                    background: transparent;
                    color: #76827f;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 13px 13px 14px;
                    white-space: nowrap;
                    font-size: 12px;
                    font-weight: 700;
                    position: relative;
                    cursor: pointer;
                }

                .filter-tab::after {
                    content: "";
                    position: absolute;
                    left: 10px;
                    right: 10px;
                    bottom: -1px;
                    height: 2px;
                    background: transparent;
                    border-radius: 2px 2px 0 0;
                }

                .filter-tab:hover {
                    color: #060f11;
                }

                .filter-tab.active {
                    color: #060f11;
                }

                .filter-tab.active::after {
                    background: #48d597;
                }

                .filter-count {
                    min-width: 22px;
                    height: 21px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 7px;
                    background: #f0f4f2;
                    color: #6e7b77;
                    font-size: 10px;
                    font-weight: 800;
                }

                .filter-tab.active .filter-count {
                    background: #e4faef;
                    color: #159a68;
                }

                /* Table */

                .connection-table-wrapper {
                    width: 100%;
                }

                .connection-table {
                    min-width: 1000px;
                }

                .connection-table thead th {
                    background: #fafcfb;
                    color: #7d8985;
                    border-bottom: 1px solid #e8efec;
                    padding: 13px 18px;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: .065em;
                    font-weight: 800;
                    white-space: nowrap;
                }

                .connection-table tbody td {
                    padding: 17px 18px;
                    border-bottom: 1px solid #edf2f0;
                    vertical-align: middle;
                }

                .connection-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .connection-table tbody tr {
                    transition: background .15s ease;
                }

                .connection-table tbody tr:hover {
                    background: #fbfdfc;
                }

                /* Contact */

                .contact-cell {
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    min-width: 200px;
                }

                .contact-avatar {
                    width: 40px;
                    height: 40px;
                    flex: 0 0 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: #eafaf3;
                    color: #159a68;
                    font-size: 14px;
                    font-weight: 800;
                }

                .contact-details {
                    min-width: 0;
                }

                .contact-name {
                    color: #060f11;
                    font-size: 13px;
                    font-weight: 800;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 180px;
                }

                .contact-email {
                    color: #899491;
                    font-size: 11px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 190px;
                    margin-top: 2px;
                }

                .contact-phone {
                    color: #9aa5a2;
                    font-size: 10px;
                    margin-top: 2px;
                }

                /* Status */

                .fc-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 5px 8px;
                    border-radius: 7px;
                    font-size: 10px;
                    font-weight: 800;
                    white-space: nowrap;
                }

                .fc-status i {
                    font-size: 9px;
                }

                .status-pending {
                    background: #fff7e6;
                    color: #a66c00;
                }

                .status-accepted {
                    background: #eafaf3;
                    color: #12885c;
                }

                .status-declined {
                    background: #fff0f0;
                    color: #c44c4c;
                }

                .status-default {
                    background: #f1f4f3;
                    color: #697571;
                }

                /* Payment */

                .payment-cell {
                    min-width: 135px;
                }

                .fc-payment-badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 4px 7px;
                    border-radius: 6px;
                    font-size: 9px;
                    font-weight: 800;
                }

                .payment-paid {
                    background: #eafaf3;
                    color: #12885c;
                }

                .payment-pending {
                    background: #fff7e6;
                    color: #a66c00;
                }

                .payment-none {
                    background: #f2f4f3;
                    color: #8b9692;
                }

                .payment-amount {
                    margin-top: 5px;
                    color: #060f11;
                    font-size: 12px;
                    font-weight: 800;
                }

                .payment-reference {
                    margin-top: 2px;
                    color: #a1aaa7;
                    font-size: 9px;
                    max-width: 125px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                /* Earnings */

                .earnings-cell {
                    min-width: 120px;
                }

                .earning-main {
                    color: #12885c;
                    font-size: 13px;
                    font-weight: 800;
                }

                .earning-sub {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: 3px;
                    color: #9aa5a2;
                    font-size: 9px;
                }

                .earning-percent {
                    color: #159a68;
                    font-weight: 800;
                }

                .not-available {
                    color: #aeb7b4;
                    font-size: 17px;
                }

                /* Date */

                .date-cell {
                    min-width: 120px;
                }

                .date-main {
                    color: #4f5d59;
                    font-size: 11px;
                    font-weight: 700;
                }

                .date-human {
                    color: #a0aaa7;
                    font-size: 9px;
                    margin-top: 3px;
                }

                /* Action */

                .btn-view {
                    border: 1px solid #dfe9e5;
                    background: #ffffff;
                    color: #060f11;
                    border-radius: 8px;
                    padding: 7px 10px;
                    font-size: 10px;
                    font-weight: 800;
                    white-space: nowrap;
                    transition: all .2s ease;
                }

                .btn-view:hover {
                    border-color: #48d597;
                    background: #effcf6;
                    color: #08764d;
                }

                .btn-view i {
                    font-size: 9px;
                }

                /* Pagination */

                .pagination-wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                    padding: 17px 24px;
                    border-top: 1px solid #edf2f0;
                }

                .pagination-info {
                    color: #8b9692;
                    font-size: 11px;
                }

                .pagination-info strong {
                    color: #4d5a57;
                }

                .fc-pagination .pagination {
                    gap: 4px;
                }

                .fc-pagination .page-item .page-link {
                    border: 1px solid #e2eae7;
                    border-radius: 7px !important;
                    min-width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #596763;
                    background: #ffffff;
                    font-size: 10px;
                    font-weight: 700;
                    padding: 0 8px;
                }

                .fc-pagination .page-item.active .page-link {
                    background: #48d597;
                    border-color: #48d597;
                    color: #060f11;
                }

                .fc-pagination .page-item.disabled .page-link {
                    color: #c2cac7;
                    background: #fafcfb;
                }

                /* Empty State */

                .fc-empty-state {
                    text-align: center;
                    padding: 70px 25px;
                }

                .empty-icon {
                    width: 68px;
                    height: 68px;
                    margin: 0 auto 18px;
                    border-radius: 20px;
                    background: #effcf6;
                    color: #48d597;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 27px;
                }

                .fc-empty-state h5 {
                    margin: 0;
                    font-size: 17px;
                    font-weight: 800;
                }

                .fc-empty-state p {
                    color: #899491;
                    max-width: 420px;
                    margin: 8px auto 20px;
                    font-size: 12px;
                    line-height: 1.7;
                }

                .btn-fc-primary {
                    background: #48d597;
                    border: 1px solid #48d597;
                    color: #060f11;
                    border-radius: 9px;
                    font-size: 11px;
                    font-weight: 800;
                    padding: 9px 14px;
                }

                .btn-fc-primary:hover {
                    background: #36c486;
                    border-color: #36c486;
                    color: #060f11;
                }

                /* Mobile */

                .mobile-connections {
                    display: none;
                    padding: 14px;
                    background: #f8faf9;
                }

                .mobile-connection-card {
                    background: #ffffff;
                    border: 1px solid #e3ebe7;
                    border-radius: 14px;
                    margin-bottom: 10px;
                    overflow: hidden;
                }

                .mobile-connection-card:last-child {
                    margin-bottom: 0;
                }

                .mobile-card-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 10px;
                    padding: 15px;
                }

                .mobile-message {
                    padding: 0 15px 14px;
                    border-bottom: 1px solid #edf2f0;
                }

                .mobile-section-label {
                    color: #8a9692;
                    text-transform: uppercase;
                    letter-spacing: .06em;
                    font-size: 9px;
                    font-weight: 800;
                    margin-bottom: 5px;
                }

                .mobile-message p {
                    color: #52615d;
                    font-size: 11px;
                    line-height: 1.6;
                    margin: 0;
                }

                .mobile-financial-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    border-bottom: 1px solid #edf2f0;
                }

                .mobile-financial-item {
                    padding: 14px 15px;
                }

                .mobile-financial-item + .mobile-financial-item {
                    border-left: 1px solid #edf2f0;
                }

                .mobile-financial-item > span {
                    display: block;
                    color: #8b9692;
                    font-size: 9px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: .05em;
                    margin-bottom: 5px;
                }

                .mobile-financial-item strong {
                    display: block;
                    color: #060f11;
                    font-size: 13px;
                    font-weight: 800;
                    margin-bottom: 5px;
                }

                .mobile-financial-item.earning strong {
                    color: #12885c;
                }

                .mobile-financial-item small {
                    color: #9aa5a2;
                    font-size: 9px;
                }

                .mobile-card-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    padding: 12px 15px;
                }

                .mobile-date {
                    color: #8b9692;
                    font-size: 9px;
                }

                /* Responsive */

                @media (max-width: 1199px) {
                    .summary-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 767px) {
                    .fc-connections-page {
                        padding-top: 22px;
                    }

                    .page-header {
                        margin-bottom: 22px;
                    }

                    .page-header h1 {
                        font-size: 28px;
                    }

                    .page-header p {
                        font-size: 13px;
                    }

                    .header-action {
                        display: none;
                    }

                    .summary-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                    }

                    .fc-summary-card {
                        min-height: 135px;
                        padding: 15px;
                        border-radius: 13px;
                    }

                    .summary-icon {
                        width: 34px;
                        height: 34px;
                        border-radius: 9px;
                        font-size: 15px;
                    }

                    .summary-card-top {
                        margin-bottom: 12px;
                    }

                    .summary-value {
                        font-size: 17px;
                    }

                    .summary-title {
                        font-size: 9px;
                    }

                    .summary-description {
                        font-size: 9px;
                    }

                    .earnings-info {
                        align-items: flex-start;
                        padding: 15px;
                    }

                    .earnings-info-content span {
                        line-height: 1.5;
                    }

                    .earnings-info-value {
                        display: none;
                    }

                    .panel-header {
                        padding: 18px 15px;
                    }

                    .panel-stat {
                        display: none;
                    }

                    .filter-tabs {
                        padding: 0 10px;
                    }

                    .filter-tab {
                        padding-left: 9px;
                        padding-right: 9px;
                    }

                    .connection-table-wrapper {
                        display: none;
                    }

                    .mobile-connections {
                        display: block;
                    }

                    .pagination-wrapper {
                        flex-direction: column;
                        align-items: center;
                        padding: 15px;
                    }

                    .pagination-info {
                        text-align: center;
                    }
                }

                @media (max-width: 480px) {
                    .summary-grid {
                        grid-template-columns: 1fr;
                    }

                    .fc-summary-card {
                        min-height: auto;
                    }

                    .mobile-card-header {
                        flex-direction: column;
                    }

                    .mobile-card-header .fc-status {
                        align-self: flex-start;
                    }

                    .mobile-card-footer {
                        align-items: flex-end;
                    }

                    .mobile-date {
                        max-width: 120px;
                        line-height: 1.4;
                    }
                }
            `}</style>
        </AppLayout>
    );
}
