// resources/js/Pages/Talent/Connections/Index.jsx

import { Head, Link, router } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

const STATUS_TABS = [
    {
        key: "all",
        label: "All",
        icon: "fa-layer-group",
    },
    {
        key: "pending",
        label: "Pending",
        icon: "fa-clock",
    },
    {
        key: "accepted",
        label: "Accepted",
        icon: "fa-check-circle",
    },
    {
        key: "declined",
        label: "Declined",
        icon: "fa-times-circle",
    },
];

const PAID_STATUSES = [
    "paid",
    "completed",
    "success",
    "successful",
];

export default function Index({
    connections,
    counts = {},
    filters = {},
    earnings = {},
    flash,
}) {
    function switchTab(status) {
        router.get(
            route("talent.connections.index"),
            status === "all"
                ? {}
                : {
                      status,
                  },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    }

    const activeStatus = filters.status ?? "all";

    return (
        <AppLayout>
            <Head title="Connections & Earnings" />

            <div data-h-scope="talent-connections">
                <style>{`
                    [data-h-scope="talent-connections"] {
                        --fc-green: #48d597;
                        --fc-green-dark: #229365;
                        --fc-green-soft: #eafaf3;
                        --fc-black: #060f11;
                        --fc-black-soft: #182326;
                        --fc-white: #ffffff;
                        --fc-bg: #f6f9f8;
                        --fc-muted: #718083;
                        --fc-border: #e4ebe8;
                        --fc-warning: #f5a623;
                        --fc-danger: #df4d52;

                        min-height: 100%;
                        background:
                            linear-gradient(
                                180deg,
                                #f8fbfa 0%,
                                #f4f8f6 100%
                            );
                        color: var(--fc-black);
                    }

                    [data-h-scope="talent-connections"] .fc-page {
                        max-width: 1480px;
                        margin: 0 auto;
                    }

                    /* ==========================================
                       PAGE HEADER
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-header {
                        position: relative;
                        overflow: hidden;
                        background: var(--fc-black);
                        color: white;
                        border-radius: 24px;
                        padding: 30px;
                        box-shadow:
                            0 18px 45px rgba(6, 15, 17, .12);
                    }

                    [data-h-scope="talent-connections"] .fc-header::after {
                        content: "";
                        position: absolute;
                        width: 300px;
                        height: 300px;
                        right: -100px;
                        top: -150px;
                        border-radius: 50%;
                        background: rgba(72, 213, 151, .14);
                        pointer-events: none;
                    }

                    [data-h-scope="talent-connections"] .fc-header::before {
                        content: "";
                        position: absolute;
                        width: 180px;
                        height: 180px;
                        right: 180px;
                        bottom: -130px;
                        border-radius: 50%;
                        background: rgba(72, 213, 151, .07);
                        pointer-events: none;
                    }

                    [data-h-scope="talent-connections"] .fc-header-content {
                        position: relative;
                        z-index: 2;
                    }

                    [data-h-scope="talent-connections"] .fc-header-icon {
                        width: 48px;
                        height: 48px;
                        border-radius: 14px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        background: rgba(72, 213, 151, .16);
                        color: var(--fc-green);
                        font-size: 19px;
                    }

                    [data-h-scope="talent-connections"] .fc-eyebrow {
                        color: var(--fc-green);
                        font-size: 11px;
                        font-weight: 800;
                        letter-spacing: .12em;
                        text-transform: uppercase;
                    }

                    [data-h-scope="talent-connections"] .fc-header h1 {
                        font-size: clamp(25px, 3vw, 34px);
                        line-height: 1.15;
                        font-weight: 800;
                        margin: 0;
                        letter-spacing: -.025em;
                    }

                    [data-h-scope="talent-connections"] .fc-header p {
                        color: rgba(255,255,255,.68);
                        max-width: 680px;
                        margin: 0;
                        line-height: 1.6;
                    }

                    [data-h-scope="talent-connections"] .fc-fee-box {
                        position: relative;
                        z-index: 2;
                        min-width: 190px;
                        padding: 18px 20px;
                        border: 1px solid rgba(255,255,255,.1);
                        background: rgba(255,255,255,.055);
                        border-radius: 16px;
                        backdrop-filter: blur(8px);
                    }

                    [data-h-scope="talent-connections"] .fc-fee-box .fee {
                        color: var(--fc-green);
                        font-size: 26px;
                        font-weight: 800;
                    }

                    /* ==========================================
                       FLASH
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-alert {
                        border: 1px solid rgba(72,213,151,.3);
                        background: #ecfaf4;
                        color: #1c7955;
                    }

                    /* ==========================================
                       FINANCIAL CARDS
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-stat {
                        height: 100%;
                        background: white;
                        border: 1px solid var(--fc-border);
                        border-radius: 20px;
                        padding: 22px;
                        transition:
                            transform .2s ease,
                            box-shadow .2s ease,
                            border-color .2s ease;
                    }

                    [data-h-scope="talent-connections"] .fc-stat:hover {
                        transform: translateY(-3px);
                        border-color: rgba(72,213,151,.45);
                        box-shadow:
                            0 15px 35px rgba(6,15,17,.07);
                    }

                    [data-h-scope="talent-connections"] .fc-stat-icon {
                        width: 46px;
                        height: 46px;
                        border-radius: 14px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    }

                    [data-h-scope="talent-connections"] .fc-stat-label {
                        color: var(--fc-muted);
                        font-size: 13px;
                        font-weight: 600;
                    }

                    [data-h-scope="talent-connections"] .fc-stat-value {
                        font-size: clamp(19px, 2vw, 25px);
                        line-height: 1.2;
                        font-weight: 800;
                        letter-spacing: -.02em;
                        color: var(--fc-black);
                    }

                    [data-h-scope="talent-connections"] .fc-stat-description {
                        color: var(--fc-muted);
                        font-size: 12px;
                    }

                    /* ==========================================
                       SPLIT CARD
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-split-card {
                        background: white;
                        border: 1px solid var(--fc-border);
                        border-radius: 20px;
                        padding: 20px 22px;
                    }

                    [data-h-scope="talent-connections"] .fc-split-track {
                        height: 9px;
                        background: #edf2f0;
                        border-radius: 999px;
                        overflow: hidden;
                    }

                    [data-h-scope="talent-connections"] .fc-split-talent {
                        width: 95%;
                        height: 100%;
                        background: var(--fc-green);
                        border-radius: 999px 0 0 999px;
                    }

                    [data-h-scope="talent-connections"] .fc-split-platform {
                        width: 5%;
                        height: 100%;
                        background: var(--fc-black);
                        border-radius: 0 999px 999px 0;
                    }

                    /* ==========================================
                       MAIN CARD
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-main-card {
                        background: white;
                        border: 1px solid var(--fc-border);
                        border-radius: 24px;
                        box-shadow:
                            0 8px 30px rgba(6,15,17,.035);
                        overflow: hidden;
                    }

                    [data-h-scope="talent-connections"] .fc-main-header {
                        padding: 24px 26px 20px;
                        border-bottom: 1px solid var(--fc-border);
                    }

                    [data-h-scope="talent-connections"] .fc-main-title {
                        font-size: 18px;
                        font-weight: 800;
                        margin-bottom: 4px;
                    }

                    [data-h-scope="talent-connections"] .fc-main-subtitle {
                        color: var(--fc-muted);
                        font-size: 13px;
                    }

                    /* ==========================================
                       TABS
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-tabs {
                        display: flex;
                        align-items: center;
                        gap: 4px;
                        background: #f1f5f3;
                        padding: 5px;
                        border-radius: 13px;
                    }

                    [data-h-scope="talent-connections"] .fc-tab {
                        border: 0;
                        background: transparent;
                        color: #6f7c7e;
                        font-size: 13px;
                        font-weight: 700;
                        padding: 9px 13px;
                        border-radius: 9px;
                        white-space: nowrap;
                        transition: all .15s ease;
                    }

                    [data-h-scope="talent-connections"] .fc-tab:hover {
                        color: var(--fc-black);
                        background: rgba(255,255,255,.7);
                    }

                    [data-h-scope="talent-connections"] .fc-tab.active {
                        background: var(--fc-black);
                        color: white;
                        box-shadow: 0 3px 9px rgba(6,15,17,.13);
                    }

                    [data-h-scope="talent-connections"] .fc-tab-count {
                        margin-left: 5px;
                        opacity: .7;
                        font-size: 11px;
                    }

                    /* ==========================================
                       COLUMN HEADER
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-columns {
                        display: grid;
                        grid-template-columns:
                            minmax(260px, 1.5fr)
                            140px
                            200px
                            160px
                            120px;
                        gap: 16px;
                        padding: 16px 22px 9px;
                    }

                    [data-h-scope="talent-connections"] .fc-column-label {
                        color: #899496;
                        font-size: 10px;
                        font-weight: 800;
                        letter-spacing: .08em;
                        text-transform: uppercase;
                    }

                    /* ==========================================
                       CONNECTION ROW
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-row {
                        margin: 0 22px;
                        padding: 17px;
                        border: 1px solid var(--fc-border);
                        border-radius: 18px;
                        background: white;
                        transition:
                            border-color .18s ease,
                            box-shadow .18s ease,
                            transform .18s ease;
                    }

                    [data-h-scope="talent-connections"] .fc-row:hover {
                        border-color: rgba(72,213,151,.5);
                        box-shadow:
                            0 10px 26px rgba(6,15,17,.055);
                        transform: translateY(-1px);
                    }

                    [data-h-scope="talent-connections"] .fc-avatar {
                        width: 48px;
                        height: 48px;
                        border-radius: 15px;
                        background: var(--fc-green-soft);
                        color: var(--fc-green-dark);
                        font-size: 14px;
                        font-weight: 900;
                        flex-shrink: 0;
                    }

                    [data-h-scope="talent-connections"] .fc-person-name {
                        font-size: 14px;
                        font-weight: 800;
                        color: var(--fc-black);
                    }

                    [data-h-scope="talent-connections"] .fc-person-email {
                        color: var(--fc-muted);
                        font-size: 12px;
                    }

                    [data-h-scope="talent-connections"] .fc-date {
                        color: #899496;
                        font-size: 11px;
                    }

                    /* ==========================================
                       PAYMENT
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-payment {
                        background: #f7faf9;
                        border: 1px solid #e9efec;
                        border-radius: 13px;
                        padding: 11px 13px;
                    }

                    [data-h-scope="talent-connections"] .fc-payment-amount {
                        font-size: 14px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-connections"] .fc-reference {
                        max-width: 165px;
                        color: #8a9698;
                        font-size: 10px;
                    }

                    /* ==========================================
                       EARNINGS
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-earning {
                        color: #208d62;
                        font-size: 14px;
                        font-weight: 800;
                    }

                    [data-h-scope="talent-connections"] .fc-platform-fee {
                        color: #9a6b13;
                        font-size: 11px;
                    }

                    /* ==========================================
                       BADGES
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                        width: fit-content;
                        padding: 6px 9px;
                        border-radius: 999px;
                        font-size: 10px;
                        font-weight: 800;
                        white-space: nowrap;
                    }

                    [data-h-scope="talent-connections"] .fc-badge-pending {
                        background: #fff5df;
                        color: #a66d08;
                    }

                    [data-h-scope="talent-connections"] .fc-badge-accepted {
                        background: #e8f9f1;
                        color: #208d62;
                    }

                    [data-h-scope="talent-connections"] .fc-badge-declined {
                        background: #fcebed;
                        color: #ce4147;
                    }

                    [data-h-scope="talent-connections"] .fc-badge-paid {
                        background: #e8f9f1;
                        color: #208d62;
                    }

                    [data-h-scope="talent-connections"] .fc-badge-unpaid {
                        background: #fff5df;
                        color: #a66d08;
                    }

                    [data-h-scope="talent-connections"] .fc-badge-neutral {
                        background: #eef2f1;
                        color: #647173;
                    }

                    /* ==========================================
                       BUTTON
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-btn {
                        border-radius: 10px;
                        font-size: 12px;
                        font-weight: 800;
                        padding: 9px 13px;
                        border: 0;
                        transition: all .15s ease;
                    }

                    [data-h-scope="talent-connections"] .fc-btn-dark {
                        color: white;
                        background: var(--fc-black);
                    }

                    [data-h-scope="talent-connections"] .fc-btn-dark:hover {
                        color: white;
                        background: #1b292c;
                        transform: translateY(-1px);
                    }

                    /* ==========================================
                       EMPTY STATE
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-empty {
                        margin: 22px;
                        padding: 65px 20px;
                        border: 1px dashed #d9e2de;
                        border-radius: 18px;
                        background: #fbfdfc;
                    }

                    [data-h-scope="talent-connections"] .fc-empty-icon {
                        width: 68px;
                        height: 68px;
                        border-radius: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 18px;
                        background: var(--fc-green-soft);
                        color: var(--fc-green-dark);
                        font-size: 25px;
                    }

                    /* ==========================================
                       PAGINATION
                    ========================================== */

                    [data-h-scope="talent-connections"] .fc-pagination {
                        padding: 20px 22px 24px;
                    }

                    [data-h-scope="talent-connections"] .fc-pagination a,
                    [data-h-scope="talent-connections"] .fc-pagination span {
                        min-width: 36px;
                        height: 36px;
                        padding: 0 10px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 10px;
                        color: var(--fc-black);
                        font-size: 12px;
                        font-weight: 700;
                        text-decoration: none;
                    }

                    [data-h-scope="talent-connections"] .fc-pagination a:hover {
                        background: #edf2f0;
                    }

                    [data-h-scope="talent-connections"] .fc-pagination .active span {
                        color: white;
                        background: var(--fc-black);
                    }

                    /* ==========================================
                       MOBILE
                    ========================================== */

                    @media (max-width: 1199px) {
                        [data-h-scope="talent-connections"] .fc-desktop {
                            display: none !important;
                        }

                        [data-h-scope="talent-connections"] .fc-row {
                            margin: 0 14px;
                        }

                        [data-h-scope="talent-connections"] .fc-empty {
                            margin: 14px;
                        }

                        [data-h-scope="talent-connections"] .fc-columns {
                            display: none;
                        }
                    }

                    @media (min-width: 1200px) {
                        [data-h-scope="talent-connections"] .fc-mobile {
                            display: none !important;
                        }
                    }

                    @media (max-width: 767px) {
                        [data-h-scope="talent-connections"] .fc-header {
                            padding: 22px;
                            border-radius: 20px;
                        }

                        [data-h-scope="talent-connections"] .fc-fee-box {
                            width: 100%;
                            min-width: 0;
                        }

                        [data-h-scope="talent-connections"] .fc-main-header {
                            padding: 20px 16px;
                        }

                        [data-h-scope="talent-connections"] .fc-tabs {
                            width: 100%;
                            overflow-x: auto;
                        }

                        [data-h-scope="talent-connections"] .fc-tab {
                            flex: 1;
                        }

                        [data-h-scope="talent-connections"] .fc-row {
                            padding: 15px;
                            border-radius: 16px;
                        }

                        [data-h-scope="talent-connections"] .fc-avatar {
                            width: 44px;
                            height: 44px;
                        }

                        [data-h-scope="talent-connections"] .fc-stat {
                            padding: 17px;
                        }

                        [data-h-scope="talent-connections"] .fc-stat-icon {
                            width: 40px;
                            height: 40px;
                            border-radius: 12px;
                        }
                    }
                `}</style>

                <div className="container-fluid px-3 px-md-4 py-4">
                    <div className="fc-page">

                        {/* ==================================================
                            HEADER
                        ================================================== */}

                        <div className="fc-header mb-4">
                            <div className="fc-header-content">
                                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-4">

                                    <div>
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <div className="fc-header-icon">
                                                <i className="fas fa-handshake" />
                                            </div>

                                            <span className="fc-eyebrow">
                                                Talent workspace
                                            </span>
                                        </div>

                                        <h1 className="mb-2">
                                            Connections & Earnings
                                        </h1>

                                        <p>
                                            Manage people who want to connect
                                            with you and monitor the income
                                            generated through Future Connect.
                                        </p>
                                    </div>

                                    <div className="fc-fee-box">
                                        <div className="small text-white-50 mb-1">
                                            Platform fee
                                        </div>

                                        <div className="fee">
                                            5%
                                        </div>

                                        <div className="small text-white-50 mt-1">
                                            You keep 95% of every paid
                                            connection.
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* ==================================================
                            FLASH MESSAGE
                        ================================================== */}

                        {flash?.success && (
                            <div className="fc-alert rounded-4 p-3 mb-4">
                                <i className="fas fa-circle-check me-2" />
                                <strong>{flash.success}</strong>
                            </div>
                        )}

                        {/* ==================================================
                            FINANCIAL SUMMARY
                        ================================================== */}

                        <div className="row g-3 mb-3">

                            <MoneyStat
                                icon="fa-wallet"
                                label="Total paid"
                                value={money(
                                    earnings.total_amount,
                                    earnings.currency,
                                )}
                                description="Total value of paid connections"
                                iconStyle="green"
                            />

                            <MoneyStat
                                icon="fa-arrow-trend-up"
                                label="Your earnings"
                                value={money(
                                    earnings.talent_earnings,
                                    earnings.currency,
                                )}
                                description="95% paid directly to your share"
                                iconStyle="green"
                            />

                            <MoneyStat
                                icon="fa-building"
                                label="Platform earnings"
                                value={money(
                                    earnings.future_connect_earnings,
                                    earnings.currency,
                                )}
                                description="Future Connect's 5% share"
                                iconStyle="black"
                            />

                            <MoneyStat
                                icon="fa-circle-check"
                                label="Paid connections"
                                value={
                                    earnings.paid_connections ?? 0
                                }
                                description="Successfully completed payments"
                                iconStyle="orange"
                            />

                        </div>

                        {/* ==================================================
                            REVENUE SPLIT
                        ================================================== */}

                        <div className="fc-split-card mb-4">

                            <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-3">

                                <div>
                                    <div className="fw-bold">
                                        Connection revenue split
                                    </div>

                                    <div className="small text-secondary">
                                        Every successful payment is
                                        automatically divided between you and
                                        Future Connect.
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-3">

                                    <div className="d-flex align-items-center gap-2">
                                        <span
                                            style={{
                                                width: 9,
                                                height: 9,
                                                borderRadius: "50%",
                                                background: "#48d597",
                                            }}
                                        />

                                        <span className="small fw-bold">
                                            You 95%
                                        </span>
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        <span
                                            style={{
                                                width: 9,
                                                height: 9,
                                                borderRadius: "50%",
                                                background: "#060f11",
                                            }}
                                        />

                                        <span className="small fw-bold">
                                            FC 5%
                                        </span>
                                    </div>

                                </div>

                            </div>

                            <div className="fc-split-track d-flex">
                                <div className="fc-split-talent" />
                                <div className="fc-split-platform" />
                            </div>

                        </div>

                        {/* ==================================================
                            MAIN CONNECTIONS CARD
                        ================================================== */}

                        <div className="fc-main-card">

                            <div className="fc-main-header">

                                <div className="d-flex flex-column flex-xl-row justify-content-between align-items-xl-center gap-3">

                                    <div>
                                        <div className="fc-main-title">
                                            Connection requests
                                        </div>

                                        <div className="fc-main-subtitle">
                                            Review requests, payment activity
                                            and your earnings.
                                        </div>
                                    </div>

                                    <div className="fc-tabs">

                                        {STATUS_TABS.map((tab) => (
                                            <button
                                                key={tab.key}
                                                type="button"
                                                className={`fc-tab ${
                                                    activeStatus ===
                                                    tab.key
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    switchTab(
                                                        tab.key,
                                                    )
                                                }
                                            >
                                                <i
                                                    className={`fas ${tab.icon} me-1`}
                                                />

                                                {tab.label}

                                                <span className="fc-tab-count">
                                                    {tab.key === "all"
                                                        ? counts.all ?? 0
                                                        : counts[
                                                              tab.key
                                                          ] ?? 0}
                                                </span>
                                            </button>
                                        ))}

                                    </div>

                                </div>
                            </div>

                            {/* Desktop column headings */}

                            {connections?.data?.length > 0 && (
                                <div className="fc-columns fc-desktop">

                                    <div className="fc-column-label">
                                        Connection
                                    </div>

                                    <div className="fc-column-label">
                                        Request
                                    </div>

                                    <div className="fc-column-label">
                                        Payment
                                    </div>

                                    <div className="fc-column-label">
                                        Earnings
                                    </div>

                                    <div />
                                </div>
                            )}

                            {/* ==================================================
                                LIST
                            ================================================== */}

                            {!connections?.data ||
                            connections.data.length === 0 ? (
                                <EmptyState />
                            ) : (
                                <div className="d-flex flex-column gap-3 py-2">

                                    {connections.data.map(
                                        (connection) => (
                                            <ConnectionRow
                                                key={
                                                    connection.id
                                                }
                                                connection={
                                                    connection
                                                }
                                            />
                                        ),
                                    )}

                                </div>
                            )}

                            {/* ==================================================
                                PAGINATION
                            ================================================== */}

                            {connections?.links &&
                                connections?.data?.length > 0 && (
                                    <Pagination
                                        links={
                                            connections.links
                                        }
                                    />
                                )}

                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

/* ============================================================
   FINANCIAL STAT
============================================================ */

function MoneyStat({
    icon,
    label,
    value,
    description,
    iconStyle = "green",
}) {
    const styles = {
        green: {
            background: "#eafaf3",
            color: "#229365",
        },

        black: {
            background: "#eef1f0",
            color: "#060f11",
        },

        orange: {
            background: "#fff5df",
            color: "#a66d08",
        },
    };

    return (
        <div className="col-6 col-xl-3">

            <div className="fc-stat">

                <div className="d-flex align-items-center justify-content-between mb-4">

                    <div
                        className="fc-stat-icon"
                        style={
                            styles[iconStyle] ??
                            styles.green
                        }
                    >
                        <i className={`fas ${icon}`} />
                    </div>

                </div>

                <div className="fc-stat-label mb-1">
                    {label}
                </div>

                <div
                    className="fc-stat-value text-truncate"
                    title={String(value)}
                >
                    {value}
                </div>

                <div className="fc-stat-description mt-2">
                    {description}
                </div>

            </div>

        </div>
    );
}

/* ============================================================
   CONNECTION ROW
============================================================ */

function ConnectionRow({ connection }) {
    const initials = (connection.name || "?")
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    /*
     * ==========================================================
     * IMPORTANT PAYMENT RULE
     * ==========================================================
     *
     * All financial information MUST come from:
     *
     * connection.payment
     *
     * which represents:
     *
     * connection_payments
     *
     * Do NOT use:
     *
     * connection.amount
     * connection.currency
     * connection.payment_status
     *
     */

    const payment = connection.payment ?? null;

    const amount = payment
        ? Number(payment.amount || 0)
        : 0;

    const currency =
        payment?.currency || "RWF";

    const talentEarning =
        amount * 0.95;

    const futureConnectFee =
        amount * 0.05;

    const isPaid = payment
        ? PAID_STATUSES.includes(
              String(
                  payment.status || "",
              ).toLowerCase(),
          )
        : false;

    return (
        <div className="fc-row">

            {/* ==================================================
                DESKTOP
            ================================================== */}

            <div
                className="fc-desktop"
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "minmax(260px,1.5fr) 140px 200px 160px 120px",
                    gap: "16px",
                    alignItems: "center",
                }}
            >

                {/* Connection */}

                <div className="d-flex align-items-center gap-3">

                    <div className="fc-avatar d-flex align-items-center justify-content-center">
                        {initials}
                    </div>

                    <div className="min-w-0">

                        <div className="fc-person-name text-truncate">
                            {connection.name ||
                                "Unknown user"}
                        </div>

                        <div className="fc-person-email text-truncate">
                            {connection.email ||
                                "No email provided"}
                        </div>

                        <div className="fc-date mt-1">
                            <i className="far fa-calendar me-1" />

                            {connection.created_at_human ??
                                connection.created_at ??
                                "—"}
                        </div>

                    </div>

                </div>

                {/* Request status */}

                <div>
                    <div className="small text-secondary mb-1">
                        Status
                    </div>

                    <StatusBadge
                        status={
                            connection.status
                        }
                    />
                </div>

                {/* Payment */}

                <div className="fc-payment">

                    {payment ? (
                        <>
                            <div className="d-flex align-items-center justify-content-between gap-2">

                                <div className="min-w-0">

                                    <div className="small text-secondary">
                                        Paid amount
                                    </div>

                                    <div className="fc-payment-amount text-truncate">
                                        {money(
                                            amount,
                                            currency,
                                        )}
                                    </div>

                                </div>

                                <PaymentBadge
                                    status={
                                        payment.status
                                    }
                                />

                            </div>

                            {payment.reference && (
                                <div
                                    className="fc-reference text-truncate mt-1"
                                    title={
                                        payment.reference
                                    }
                                >
                                    Ref:{" "}
                                    {
                                        payment.reference
                                    }
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="small text-secondary">
                            <i className="fas fa-receipt me-1" />
                            No payment record
                        </div>
                    )}

                </div>

                {/* Earnings */}

                <div>

                    <div className="small text-secondary">
                        Your 95%
                    </div>

                    <div className="fc-earning">
                        {payment
                            ? money(
                                  talentEarning,
                                  currency,
                              )
                            : "—"}
                    </div>

                    {payment && (
                        <div className="fc-platform-fee mt-1">
                            FC 5%:{" "}
                            {money(
                                futureConnectFee,
                                currency,
                            )}
                        </div>
                    )}

                </div>

                {/* Action */}

                <div className="text-end">

                    <Link
                        href={route(
                            "talent.connections.show",
                            connection.id,
                        )}
                        className="btn fc-btn fc-btn-dark"
                    >
                        Details
                        <i className="fas fa-arrow-right ms-2" />
                    </Link>

                </div>

            </div>

            {/* ==================================================
                MOBILE / TABLET
            ================================================== */}

            <div className="fc-mobile">

                {/* User header */}

                <div className="d-flex align-items-center gap-3">

                    <div className="fc-avatar d-flex align-items-center justify-content-center">
                        {initials}
                    </div>

                    <div className="min-w-0 flex-grow-1">

                        <div className="fc-person-name text-truncate">
                            {connection.name ||
                                "Unknown user"}
                        </div>

                        <div className="fc-person-email text-truncate">
                            {connection.email ||
                                "No email provided"}
                        </div>

                        <div className="fc-date mt-1">
                            <i className="far fa-calendar me-1" />

                            {connection.created_at_human ??
                                connection.created_at ??
                                "—"}
                        </div>

                    </div>

                    <StatusBadge
                        status={
                            connection.status
                        }
                    />

                </div>

                {/* Financial information */}

                <div className="border-top mt-3 pt-3">

                    <div className="row g-3">

                        {/* Amount */}

                        <div className="col-6">

                            <div className="small text-secondary mb-1">
                                Paid amount
                            </div>

                            <div className="fw-bold">
                                {payment
                                    ? money(
                                          amount,
                                          currency,
                                      )
                                    : "—"}
                            </div>

                        </div>

                        {/* Payment status */}

                        <div className="col-6">

                            <div className="small text-secondary mb-1">
                                Payment
                            </div>

                            {payment ? (
                                <PaymentBadge
                                    status={
                                        payment.status
                                    }
                                />
                            ) : (
                                <span className="fc-badge fc-badge-unpaid">
                                    <i className="fas fa-clock" />
                                    No payment
                                </span>
                            )}

                        </div>

                        {/* Talent earning */}

                        <div className="col-6">

                            <div className="small text-secondary mb-1">
                                Your 95%
                            </div>

                            <div className="fc-earning">
                                {payment
                                    ? money(
                                          talentEarning,
                                          currency,
                                      )
                                    : "—"}
                            </div>

                        </div>

                        {/* Platform earning */}

                        <div className="col-6">

                            <div className="small text-secondary mb-1">
                                Future Connect 5%
                            </div>

                            <div className="fc-platform-fee fw-bold">
                                {payment
                                    ? money(
                                          futureConnectFee,
                                          currency,
                                      )
                                    : "—"}
                            </div>

                        </div>

                        {/* Reference */}

                        {payment?.reference && (
                            <div className="col-12">

                                <div className="small text-secondary mb-1">
                                    Payment reference
                                </div>

                                <div
                                    className="small fw-bold text-truncate"
                                    title={
                                        payment.reference
                                    }
                                >
                                    {payment.reference}
                                </div>

                            </div>
                        )}

                        {/* Payment provider */}

                        {payment?.provider && (
                            <div className="col-12">

                                <div className="small text-secondary mb-1">
                                    Payment provider
                                </div>

                                <div className="small fw-semibold text-capitalize">
                                    {payment.provider}
                                </div>

                            </div>
                        )}

                        {/* Action */}

                        <div className="col-12">

                            <Link
                                href={route(
                                    "talent.connections.show",
                                    connection.id,
                                )}
                                className="btn fc-btn fc-btn-dark w-100 py-2"
                            >
                                View connection details

                                <i className="fas fa-arrow-right ms-2" />
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

/* ============================================================
   REQUEST STATUS
============================================================ */

function StatusBadge({ status }) {
    const normalized = String(
        status || "pending",
    ).toLowerCase();

    const map = {
        pending: {
            cls: "fc-badge-pending",
            icon: "fa-clock",
            label: "Pending",
        },

        accepted: {
            cls: "fc-badge-accepted",
            icon: "fa-check",
            label: "Accepted",
        },

        declined: {
            cls: "fc-badge-declined",
            icon: "fa-times",
            label: "Declined",
        },
    };

    const entry =
        map[normalized] ?? map.pending;

    return (
        <span
            className={`fc-badge ${entry.cls}`}
        >
            <i className={`fas ${entry.icon}`} />
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

    const paid =
        PAID_STATUSES.includes(
            normalized,
        );

    return (
        <span
            className={`fc-badge ${
                paid
                    ? "fc-badge-paid"
                    : "fc-badge-unpaid"
            }`}
        >
            <i
                className={`fas ${
                    paid
                        ? "fa-check-circle"
                        : "fa-clock"
                }`}
            />

            {paid ? "Paid" : "Unpaid"}
        </span>
    );
}

/* ============================================================
   EMPTY STATE
============================================================ */

function EmptyState() {
    return (
        <div className="fc-empty text-center">

            <div className="fc-empty-icon">
                <i className="fas fa-handshake" />
            </div>

            <h5 className="fw-bold mb-2">
                No connection requests yet
            </h5>

            <p
                className="text-secondary small mb-0 mx-auto"
                style={{
                    maxWidth: 480,
                    lineHeight: 1.7,
                }}
            >
                When someone wants to connect with
                you, their request and payment
                information will appear here.
            </p>

        </div>
    );
}

/* ============================================================
   PAGINATION
============================================================ */

function Pagination({ links }) {
    return (
        <div className="fc-pagination d-flex flex-wrap justify-content-center gap-1">

            {links.map((link, index) =>
                link.url ? (
                    <Link
                        key={index}
                        href={link.url}
                        preserveScroll
                        className={
                            link.active
                                ? "active"
                                : ""
                        }
                        dangerouslySetInnerHTML={{
                            __html: link.label,
                        }}
                    />
                ) : (
                    <span
                        key={index}
                        className="disabled"
                        dangerouslySetInnerHTML={{
                            __html: link.label,
                        }}
                    />
                ),
            )}

        </div>
    );
}

/* ============================================================
   MONEY FORMATTER
============================================================ */

function money(
    value,
    currency = "RWF",
) {
    const amount = Number(value || 0);

    let safeCurrency = currency || "RWF";

    /*
     * Avoid Intl.NumberFormat crashing if an
     * unexpected currency value comes from the DB.
     */
    try {
        return new Intl.NumberFormat(
            "en-RW",
            {
                style: "currency",
                currency: safeCurrency,
                maximumFractionDigits: 2,
            },
        ).format(amount);
    } catch {
        return `${safeCurrency} ${amount.toLocaleString(
            "en-RW",
            {
                maximumFractionDigits: 2,
            },
        )}`;
    }
}