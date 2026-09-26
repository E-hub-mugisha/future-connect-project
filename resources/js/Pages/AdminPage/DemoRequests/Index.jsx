import React, { useMemo, useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const Icon = {
    Search: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
        </svg>
    ),

    Check: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 4 4L19 6" />
        </svg>
    ),

    ArrowRight: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    ),

    Users: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),

    Clock: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    ),

    Calendar: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    ),

    Briefcase: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M3 12h18" />
        </svg>
    ),
};

export default function Index({
    demoRequests,
    filters,
    statusCounts,
}) {
    const { flash } = usePage().props;

    const [search, setSearch] = useState(filters.search ?? '');

    const requests = demoRequests?.data ?? [];

    const totalRequests = useMemo(() => {
        return Object.values(statusCounts ?? {}).reduce(
            (total, value) => total + Number(value || 0),
            0
        );
    }, [statusCounts]);

    const pendingCount = Number(statusCounts?.pending ?? 0);
    const confirmedCount = Number(statusCounts?.confirmed ?? 0);
    const completedCount = Number(statusCounts?.completed ?? 0);

    const statusMeta = {
        pending: {
            label: 'Pending',
            className: 'status-pending',
        },
        confirmed: {
            label: 'Confirmed',
            className: 'status-confirmed',
        },
        completed: {
            label: 'Completed',
            className: 'status-completed',
        },
        cancelled: {
            label: 'Cancelled',
            className: 'status-cancelled',
        },
    };

    function applyFilter(status) {
        router.get(
            route('admin.demo-requests.index'),
            {
                status: status || undefined,
                search: filters.search || undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    }

    function submitSearch(e) {
        e.preventDefault();

        router.get(
            route('admin.demo-requests.index'),
            {
                status: filters.status || undefined,
                search: search || undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    }

    function confirmRequest(demoRequest) {
        if (
            !window.confirm(
                `Confirm the demo request from ${demoRequest.full_name}?`
            )
        ) {
            return;
        }

        router.patch(
            route(
                'admin.demo-requests.confirm',
                demoRequest.id
            ),
            {},
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    }

    function formatDate(value) {
        if (!value) return '—';

        const date = new Date(value);

        if (Number.isNaN(date.getTime())) {
            return value;
        }

        return date.toLocaleDateString(undefined, {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    }

    function formatTime(value) {
        if (!value) return 'Time not specified';

        return value;
    }

    function getInitials(name) {
        if (!name) return 'DR';

        return name
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map((word) => word.charAt(0).toUpperCase())
            .join('');
    }

    return (
        <div data-h-scope="demo-requests-index">
            <Head title="Demo Requests" />

            <style>{`
                [data-h-scope="demo-requests-index"] {
                    --dr-bg: #f7f8fa;
                    --dr-card: #ffffff;
                    --dr-text: #1d1d1f;
                    --dr-muted: #6e6e73;
                    --dr-subtle: #86868b;
                    --dr-border: #e6e6eb;

                    --dr-primary: #0b8f5b;
                    --dr-primary-dark: #087a4d;
                    --dr-primary-soft: #edf9f3;

                    --dr-warning: #b7791f;
                    --dr-warning-soft: #fff8e8;

                    --dr-blue: #2563eb;
                    --dr-blue-soft: #eff6ff;

                    --dr-danger: #d93025;
                    --dr-danger-soft: #fff1f0;

                    color-scheme: light !important;
                    min-height: 100%;
                    background: var(--dr-bg) !important;
                    color: var(--dr-text) !important;

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                }

                [data-h-scope="demo-requests-index"] *,
                [data-h-scope="demo-requests-index"] *::before,
                [data-h-scope="demo-requests-index"] *::after {
                    box-sizing: border-box;
                }

                @media (prefers-color-scheme: dark) {
                    [data-h-scope="demo-requests-index"] {
                        color-scheme: light !important;
                        background: #f7f8fa !important;
                        color: #1d1d1f !important;
                    }

                    [data-h-scope="demo-requests-index"] input,
                    [data-h-scope="demo-requests-index"] button {
                        color-scheme: light !important;
                    }
                }

                /* =====================================================
                   PAGE
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-page {
                    width: 100%;
                    max-width: 1250px;
                    margin: 0 auto;
                    padding: 28px 24px 48px;
                }

                /* =====================================================
                   HEADER
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 24px;
                }

                [data-h-scope="demo-requests-index"] .dr-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    margin-bottom: 8px;
                    color: var(--dr-primary);
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .06em;
                    text-transform: uppercase;
                }

                [data-h-scope="demo-requests-index"] .dr-eyebrow-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .dr-title {
                    margin: 0;
                    color: var(--dr-text);
                    font-size: 25px;
                    line-height: 1.2;
                    font-weight: 700;
                    letter-spacing: -.025em;
                }

                [data-h-scope="demo-requests-index"] .dr-subtitle {
                    max-width: 650px;
                    margin: 7px 0 0;
                    color: var(--dr-muted);
                    font-size: 13px;
                    line-height: 1.55;
                }

                [data-h-scope="demo-requests-index"] .dr-total {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 11px;
                    border: 1px solid var(--dr-border);
                    border-radius: 9px;
                    background: #fff;
                    color: var(--dr-muted);
                    font-size: 11px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                [data-h-scope="demo-requests-index"] .dr-total strong {
                    color: var(--dr-text);
                    font-size: 13px;
                }

                /* =====================================================
                   FLASH
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-flash {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    margin-bottom: 18px;
                    padding: 11px 13px;
                    border: 1px solid #cdebdc;
                    border-radius: 10px;
                    background: var(--dr-primary-soft);
                    color: #087a4d;
                    font-size: 12px;
                    font-weight: 600;
                }

                [data-h-scope="demo-requests-index"] .dr-flash svg {
                    width: 15px;
                    height: 15px;
                    flex-shrink: 0;
                }

                /* =====================================================
                   SUMMARY CARDS
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-summary {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 12px;
                    margin-bottom: 18px;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-card {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    min-width: 0;
                    padding: 15px;
                    border: 1px solid var(--dr-border);
                    border-radius: 12px;
                    background: #fff;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, .02);
                }

                [data-h-scope="demo-requests-index"] .dr-summary-info {
                    min-width: 0;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-label {
                    margin-bottom: 5px;
                    color: var(--dr-muted);
                    font-size: 10.5px;
                    font-weight: 600;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-number {
                    color: var(--dr-text);
                    font-size: 20px;
                    line-height: 1;
                    font-weight: 700;
                    letter-spacing: -.02em;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    border-radius: 9px;
                    background: #f4f4f6;
                    color: #66666c;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-icon svg {
                    width: 16px;
                    height: 16px;
                }

                [data-h-scope="demo-requests-index"] .dr-summary-card.pending .dr-summary-icon {
                    background: var(--dr-warning-soft);
                    color: var(--dr-warning);
                }

                [data-h-scope="demo-requests-index"] .dr-summary-card.confirmed .dr-summary-icon {
                    background: var(--dr-primary-soft);
                    color: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .dr-summary-card.completed .dr-summary-icon {
                    background: var(--dr-blue-soft);
                    color: var(--dr-blue);
                }

                /* =====================================================
                   TOOLBAR
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 14px;
                    margin-bottom: 14px;
                    padding: 12px;
                    border: 1px solid var(--dr-border);
                    border-radius: 12px;
                    background: #fff;
                }

                [data-h-scope="demo-requests-index"] .dr-search-form {
                    position: relative;
                    flex: 1;
                    max-width: 390px;
                }

                [data-h-scope="demo-requests-index"] .dr-search-icon {
                    position: absolute;
                    top: 50%;
                    left: 12px;
                    display: flex;
                    width: 15px;
                    height: 15px;
                    transform: translateY(-50%);
                    color: #9a9aa0;
                    pointer-events: none;
                }

                [data-h-scope="demo-requests-index"] .dr-search-icon svg {
                    width: 100%;
                    height: 100%;
                }

                [data-h-scope="demo-requests-index"] .dr-search {
                    width: 100%;
                    height: 36px;
                    padding: 0 12px 0 35px;
                    border: 1px solid #dedee3;
                    border-radius: 8px;
                    outline: none;
                    background: #fff;
                    color: var(--dr-text);
                    font-family: inherit;
                    font-size: 12px;
                    transition: border-color .15s ease, box-shadow .15s ease;
                }

                [data-h-scope="demo-requests-index"] .dr-search::placeholder {
                    color: #a1a1a7;
                }

                [data-h-scope="demo-requests-index"] .dr-search:focus {
                    border-color: #8bcfb0;
                    box-shadow: 0 0 0 3px rgba(11, 143, 91, .08);
                }

                [data-h-scope="demo-requests-index"] .status-tabs {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    flex-wrap: wrap;
                }

                [data-h-scope="demo-requests-index"] .status-tab {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    height: 32px;
                    padding: 0 9px;
                    border: 1px solid transparent;
                    border-radius: 7px;
                    background: transparent;
                    color: var(--dr-muted);
                    cursor: pointer;
                    font-family: inherit;
                    font-size: 11px;
                    font-weight: 600;
                    transition: all .15s ease;
                }

                [data-h-scope="demo-requests-index"] .status-tab:hover {
                    background: #f5f5f7;
                    color: var(--dr-text);
                }

                [data-h-scope="demo-requests-index"] .status-tab.active {
                    border-color: #d7eee2;
                    background: var(--dr-primary-soft);
                    color: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .status-count {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 20px;
                    height: 18px;
                    padding: 0 5px;
                    border-radius: 999px;
                    background: #f1f1f3;
                    color: #707077;
                    font-size: 9px;
                    font-weight: 700;
                }

                [data-h-scope="demo-requests-index"] .status-tab.active .status-count {
                    background: #dff4e9;
                    color: var(--dr-primary);
                }

                /* =====================================================
                   TABLE
                ===================================================== */

                [data-h-scope="demo-requests-index"] .dr-table-wrap {
                    overflow: hidden;
                    border: 1px solid var(--dr-border);
                    border-radius: 13px;
                    background: #fff;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, .025);
                }

                [data-h-scope="demo-requests-index"] .dr-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                [data-h-scope="demo-requests-index"] .dr-table th {
                    padding: 11px 14px;
                    border-bottom: 1px solid var(--dr-border);
                    background: #fafafa;
                    color: #74747a;
                    font-size: 9.5px;
                    font-weight: 700;
                    letter-spacing: .055em;
                    text-align: left;
                    text-transform: uppercase;
                    white-space: nowrap;
                }

                [data-h-scope="demo-requests-index"] .dr-table td {
                    padding: 13px 14px;
                    border-bottom: 1px solid #eeeeF1;
                    color: #3d3d42;
                    font-size: 11.5px;
                    vertical-align: middle;
                }

                [data-h-scope="demo-requests-index"] .dr-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                [data-h-scope="demo-requests-index"] .dr-table tbody tr {
                    transition: background .12s ease;
                }

                [data-h-scope="demo-requests-index"] .dr-table tbody tr:hover {
                    background: #fafbfc;
                }

                /* =====================================================
                   REQUESTER
                ===================================================== */

                [data-h-scope="demo-requests-index"] .requester {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    min-width: 200px;
                }

                [data-h-scope="demo-requests-index"] .requester-avatar {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    flex: 0 0 34px;
                    border-radius: 9px;
                    background: var(--dr-primary-soft);
                    color: var(--dr-primary);
                    font-size: 10px;
                    font-weight: 750;
                    letter-spacing: .01em;
                }

                [data-h-scope="demo-requests-index"] .requester-info {
                    min-width: 0;
                }

                [data-h-scope="demo-requests-index"] .requester-name {
                    overflow: hidden;
                    color: var(--dr-text);
                    font-size: 12px;
                    font-weight: 650;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                [data-h-scope="demo-requests-index"] .requester-email {
                    margin-top: 3px;
                    overflow: hidden;
                    color: var(--dr-muted);
                    font-size: 10px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* =====================================================
                   COMPANY
                ===================================================== */

                [data-h-scope="demo-requests-index"] .company-name {
                    color: #343438;
                    font-size: 11.5px;
                    font-weight: 600;
                }

                [data-h-scope="demo-requests-index"] .table-sub {
                    margin-top: 3px;
                    color: var(--dr-muted);
                    font-size: 9.8px;
                }

                /* =====================================================
                   DATE / TIME
                ===================================================== */

                [data-h-scope="demo-requests-index"] .request-date {
                    color: #38383d;
                    font-size: 11px;
                    font-weight: 600;
                }

                [data-h-scope="demo-requests-index"] .request-time {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: 4px;
                    color: var(--dr-muted);
                    font-size: 9.8px;
                }

                /* =====================================================
                   STATUS
                ===================================================== */

                [data-h-scope="demo-requests-index"] .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 5px 8px;
                    border-radius: 999px;
                    font-size: 9.5px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                [data-h-scope="demo-requests-index"] .status-badge::before {
                    content: "";
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: currentColor;
                }

                [data-h-scope="demo-requests-index"] .status-pending {
                    background: var(--dr-warning-soft);
                    color: var(--dr-warning);
                }

                [data-h-scope="demo-requests-index"] .status-confirmed {
                    background: var(--dr-primary-soft);
                    color: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .status-completed {
                    background: var(--dr-blue-soft);
                    color: var(--dr-blue);
                }

                [data-h-scope="demo-requests-index"] .status-cancelled {
                    background: var(--dr-danger-soft);
                    color: var(--dr-danger);
                }

                /* =====================================================
                   ACTIONS
                ===================================================== */

                [data-h-scope="demo-requests-index"] .actions {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 6px;
                    white-space: nowrap;
                }

                [data-h-scope="demo-requests-index"] .action-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    height: 30px;
                    padding: 0 9px;
                    border: 1px solid #dedee3;
                    border-radius: 7px;
                    background: #fff;
                    color: #55565b;
                    cursor: pointer;
                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 650;
                    text-decoration: none;
                    transition: all .15s ease;
                }

                [data-h-scope="demo-requests-index"] .action-btn svg {
                    width: 12px;
                    height: 12px;
                }

                [data-h-scope="demo-requests-index"] .action-btn:hover {
                    border-color: #c9c9cf;
                    background: #f8f8fa;
                    color: var(--dr-text);
                }

                [data-h-scope="demo-requests-index"] .action-btn.confirm {
                    border-color: #cdebdc;
                    background: var(--dr-primary-soft);
                    color: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .action-btn.confirm:hover {
                    border-color: #a9ddc3;
                    background: #e2f6eb;
                    color: var(--dr-primary-dark);
                }

                /* =====================================================
                   EMPTY STATE
                ===================================================== */

                [data-h-scope="demo-requests-index"] .empty-state {
                    padding: 55px 20px;
                    text-align: center;
                }

                [data-h-scope="demo-requests-index"] .empty-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    margin: 0 auto 12px;
                    border-radius: 11px;
                    background: #f3f3f5;
                    color: #88888f;
                }

                [data-h-scope="demo-requests-index"] .empty-icon svg {
                    width: 20px;
                    height: 20px;
                }

                [data-h-scope="demo-requests-index"] .empty-title {
                    margin: 0;
                    color: var(--dr-text);
                    font-size: 13px;
                    font-weight: 650;
                }

                [data-h-scope="demo-requests-index"] .empty-text {
                    max-width: 380px;
                    margin: 5px auto 0;
                    color: var(--dr-muted);
                    font-size: 11px;
                    line-height: 1.5;
                }

                /* =====================================================
                   PAGINATION
                ===================================================== */

                [data-h-scope="demo-requests-index"] .pagination {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-top: 15px;
                    flex-wrap: wrap;
                }

                [data-h-scope="demo-requests-index"] .pagination a,
                [data-h-scope="demo-requests-index"] .pagination span {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 31px;
                    height: 31px;
                    padding: 0 9px;
                    border: 1px solid var(--dr-border);
                    border-radius: 7px;
                    background: #fff;
                    color: var(--dr-muted);
                    font-size: 10px;
                    font-weight: 600;
                    text-decoration: none;
                }

                [data-h-scope="demo-requests-index"] .pagination a:hover {
                    border-color: #cbded4;
                    color: var(--dr-primary);
                }

                [data-h-scope="demo-requests-index"] .pagination .current {
                    border-color: var(--dr-primary);
                    background: var(--dr-primary);
                    color: #fff;
                }

                /* =====================================================
                   RESPONSIVE
                ===================================================== */

                @media (max-width: 1050px) {
                    [data-h-scope="demo-requests-index"] .dr-summary {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    [data-h-scope="demo-requests-index"] .dr-table-wrap {
                        overflow-x: auto;
                    }

                    [data-h-scope="demo-requests-index"] .dr-table {
                        min-width: 900px;
                    }
                }

                @media (max-width: 760px) {
                    [data-h-scope="demo-requests-index"] .dr-page {
                        padding: 20px 14px 35px;
                    }

                    [data-h-scope="demo-requests-index"] .dr-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    [data-h-scope="demo-requests-index"] .dr-title {
                        font-size: 22px;
                    }

                    [data-h-scope="demo-requests-index"] .dr-total {
                        width: 100%;
                        justify-content: space-between;
                    }

                    [data-h-scope="demo-requests-index"] .dr-toolbar {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    [data-h-scope="demo-requests-index"] .dr-search-form {
                        max-width: none;
                    }

                    [data-h-scope="demo-requests-index"] .status-tabs {
                        overflow-x: auto;
                        flex-wrap: nowrap;
                        padding-bottom: 2px;
                    }

                    [data-h-scope="demo-requests-index"] .status-tab {
                        flex-shrink: 0;
                    }
                }

                @media (max-width: 500px) {
                    [data-h-scope="demo-requests-index"] .dr-summary {
                        grid-template-columns: 1fr 1fr;
                        gap: 8px;
                    }

                    [data-h-scope="demo-requests-index"] .dr-summary-card {
                        padding: 12px;
                    }

                    [data-h-scope="demo-requests-index"] .dr-summary-icon {
                        display: none;
                    }

                    [data-h-scope="demo-requests-index"] .dr-summary-number {
                        font-size: 18px;
                    }
                }
            `}</style>

            <div className="dr-page">
                {/* Header */}
                <div className="dr-header">
                    <div>
                        <div className="dr-eyebrow">
                            <span className="dr-eyebrow-dot" />
                            Talent platform
                        </div>

                        <h1 className="dr-title">
                            Demo requests
                        </h1>

                        <p className="dr-subtitle">
                            Manage companies and professionals requesting
                            product demonstrations from your team.
                        </p>
                    </div>

                    <div className="dr-total">
                        <strong>{totalRequests}</strong>
                        total requests
                    </div>
                </div>

                {/* Flash */}
                {flash?.success && (
                    <div className="dr-flash">
                        <Icon.Check />
                        {flash.success}
                    </div>
                )}

                {/* Summary */}
                <div className="dr-summary">
                    <div className="dr-summary-card">
                        <div className="dr-summary-info">
                            <div className="dr-summary-label">
                                All requests
                            </div>

                            <div className="dr-summary-number">
                                {totalRequests}
                            </div>
                        </div>

                        <div className="dr-summary-icon">
                            <Icon.Users />
                        </div>
                    </div>

                    <div className="dr-summary-card pending">
                        <div className="dr-summary-info">
                            <div className="dr-summary-label">
                                Pending
                            </div>

                            <div className="dr-summary-number">
                                {pendingCount}
                            </div>
                        </div>

                        <div className="dr-summary-icon">
                            <Icon.Clock />
                        </div>
                    </div>

                    <div className="dr-summary-card confirmed">
                        <div className="dr-summary-info">
                            <div className="dr-summary-label">
                                Confirmed
                            </div>

                            <div className="dr-summary-number">
                                {confirmedCount}
                            </div>
                        </div>

                        <div className="dr-summary-icon">
                            <Icon.Check />
                        </div>
                    </div>

                    <div className="dr-summary-card completed">
                        <div className="dr-summary-info">
                            <div className="dr-summary-label">
                                Completed
                            </div>

                            <div className="dr-summary-number">
                                {completedCount}
                            </div>
                        </div>

                        <div className="dr-summary-icon">
                            <Icon.Calendar />
                        </div>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="dr-toolbar">
                    <form
                        className="dr-search-form"
                        onSubmit={submitSearch}
                    >
                        <span className="dr-search-icon">
                            <Icon.Search />
                        </span>

                        <input
                            type="text"
                            className="dr-search"
                            placeholder="Search name, email, company or phone..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />
                    </form>

                    <div className="status-tabs">
                        <button
                            type="button"
                            className={`status-tab ${
                                !filters.status ? 'active' : ''
                            }`}
                            onClick={() => applyFilter(null)}
                        >
                            All

                            <span className="status-count">
                                {totalRequests}
                            </span>
                        </button>

                        {Object.entries(statusCounts ?? {}).map(
                            ([status, count]) => (
                                <button
                                    key={status}
                                    type="button"
                                    className={`status-tab ${
                                        filters.status === status
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        applyFilter(status)
                                    }
                                >
                                    {statusMeta[status]?.label ??
                                        status}

                                    <span className="status-count">
                                        {count}
                                    </span>
                                </button>
                            )
                        )}
                    </div>
                </div>

                {/* Table */}
                <div className="dr-table-wrap">
                    <table className="dr-table">
                        <thead>
                            <tr>
                                <th>Requester</th>
                                <th>Company</th>
                                <th>Preferred schedule</th>
                                <th>Status</th>
                                <th>Submitted</th>
                                <th style={{ textAlign: 'right' }}>
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {requests.map((demoRequest) => {
                                const status =
                                    statusMeta[
                                        demoRequest.status
                                    ] ?? {
                                        label: demoRequest.status,
                                        className: '',
                                    };

                                return (
                                    <tr key={demoRequest.id}>
                                        {/* Requester */}
                                        <td>
                                            <div className="requester">
                                                <div className="requester-avatar">
                                                    {getInitials(
                                                        demoRequest.full_name
                                                    )}
                                                </div>

                                                <div className="requester-info">
                                                    <div className="requester-name">
                                                        {
                                                            demoRequest.full_name
                                                        }
                                                    </div>

                                                    <div className="requester-email">
                                                        {
                                                            demoRequest.work_email
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Company */}
                                        <td>
                                            <div className="company-name">
                                                {
                                                    demoRequest.company_name
                                                }
                                            </div>

                                            <div className="table-sub">
                                                {demoRequest.role ||
                                                    'Role not specified'}

                                                {demoRequest.company_size
                                                    ? ` · ${demoRequest.company_size}`
                                                    : ''}
                                            </div>
                                        </td>

                                        {/* Schedule */}
                                        <td>
                                            <div className="request-date">
                                                {formatDate(
                                                    demoRequest.preferred_date
                                                )}
                                            </div>

                                            <div className="request-time">
                                                <Icon.Clock />
                                                {formatTime(
                                                    demoRequest.preferred_time
                                                )}
                                            </div>
                                        </td>

                                        {/* Status */}
                                        <td>
                                            <span
                                                className={`status-badge ${status.className}`}
                                            >
                                                {status.label}
                                            </span>
                                        </td>

                                        {/* Submitted */}
                                        <td>
                                            <div className="request-date">
                                                {formatDate(
                                                    demoRequest.created_at
                                                )}
                                            </div>
                                        </td>

                                        {/* Actions */}
                                        <td>
                                            <div className="actions">
                                                <Link
                                                    href={route(
                                                        'admin.demo-requests.show',
                                                        demoRequest.id
                                                    )}
                                                    className="action-btn"
                                                >
                                                    View
                                                    <Icon.ArrowRight />
                                                </Link>

                                                {demoRequest.status ===
                                                    'pending' && (
                                                    <button
                                                        type="button"
                                                        className="action-btn confirm"
                                                        onClick={() =>
                                                            confirmRequest(
                                                                demoRequest
                                                            )
                                                        }
                                                    >
                                                        <Icon.Check />
                                                        Confirm
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}

                            {requests.length === 0 && (
                                <tr>
                                    <td colSpan="6">
                                        <div className="empty-state">
                                            <div className="empty-icon">
                                                <Icon.Users />
                                            </div>

                                            <h3 className="empty-title">
                                                No demo requests found
                                            </h3>

                                            <p className="empty-text">
                                                There are no requests matching
                                                the current search or status
                                                filter.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {demoRequests?.links?.length > 3 && (
                    <div className="pagination">
                        {demoRequests.links.map((link, index) =>
                            link.url ? (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={
                                        link.active
                                            ? 'current'
                                            : ''
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ) : (
                                <span
                                    key={index}
                                    style={{ opacity: 0.4 }}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

Index.layout = (page) => (
    <AppLayout
        children={page}
        title="Demo Requests"
    />
);