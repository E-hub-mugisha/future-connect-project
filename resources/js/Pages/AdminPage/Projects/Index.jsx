import React, { useEffect, useMemo, useRef } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

function initials(name) {
    if (!name) return '—';

    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase())
        .join('');
}

function formatBudget(project) {
    if (project?.budget_amount == null) return '—';

    const currency = project.budget_currency ?? '';
    const amount = Number(project.budget_amount).toLocaleString();

    return currency ? `${currency} ${amount}` : amount;
}

function truncate(text, length = 65) {
    if (!text) return 'No description provided';

    return text.length > length
        ? `${text.slice(0, length)}…`
        : text;
}

function formatDate(date) {
    if (!date) return '—';

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) return '—';

    return parsed.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}

function StatusBadge({ status }) {
    const value = (status ?? '').toLowerCase();

    const statuses = {
        open: {
            label: 'Open',
            className: 'pm-status-open',
            dot: 'pm-dot-success',
        },
        in_progress: {
            label: 'In Progress',
            className: 'pm-status-progress',
            dot: 'pm-dot-info',
        },
        completed: {
            label: 'Completed',
            className: 'pm-status-completed',
            dot: 'pm-dot-success',
        },
        cancelled: {
            label: 'Cancelled',
            className: 'pm-status-danger',
            dot: 'pm-dot-danger',
        },
        closed: {
            label: 'Closed',
            className: 'pm-status-danger',
            dot: 'pm-dot-danger',
        },
    };

    const meta = statuses[value] ?? {
        label: status
            ? status.charAt(0).toUpperCase() + status.slice(1)
            : 'Unknown',
        className: 'pm-status-neutral',
        dot: 'pm-dot-neutral',
    };

    return (
        <span className={`pm-status ${meta.className}`}>
            <span className={`pm-status-dot ${meta.dot}`} />
            {meta.label}
        </span>
    );
}

function VerificationBadge({ verified }) {
    return verified ? (
        <span className="pm-verification verified">
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M20 6 9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            Verified
        </span>
    ) : (
        <span className="pm-verification pending">
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle
                    cx="12"
                    cy="12"
                    r="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M12 8v4l2.5 2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
            Pending
        </span>
    );
}

function Icon({ name, size = 17 }) {
    const common = {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true,
    };

    const icons = {
        plus: (
            <>
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </>
        ),

        folder: (
            <>
                <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z" />
            </>
        ),

        check: (
            <path d="m5 12 4 4L19 6" />
        ),

        clock: (
            <>
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7v5l3 2" />
            </>
        ),

        users: (
            <>
                <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
                <circle cx="9.5" cy="7.5" r="3" />
                <path d="M17 11a3 3 0 1 0 0-6" />
                <path d="M21 20v-1.5a4 4 0 0 0-3-3.87" />
            </>
        ),

        eye: (
            <>
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                <circle cx="12" cy="12" r="2.5" />
            </>
        ),

        edit: (
            <>
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z" />
            </>
        ),

        trash: (
            <>
                <path d="M4 7h16" />
                <path d="M10 11v5M14 11v5" />
                <path d="M6 7l1 13h10l1-13" />
                <path d="M9 7V4h6v3" />
            </>
        ),

        verify: (
            <>
                <path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
                <path d="m9 12 2 2 4-4" />
            </>
        ),

        calendar: (
            <>
                <rect x="3.5" y="5" width="17" height="15" rx="2" />
                <path d="M7 3v4M17 3v4M3.5 9h17" />
            </>
        ),

        location: (
            <>
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
            </>
        ),

        chevronRight: (
            <path d="m9 18 6-6-6-6" />
        ),

        search: (
            <>
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.5 4.5" />
            </>
        ),
    };

    return (
        <svg {...common}>
            {icons[name]}
        </svg>
    );
}

export default function Index({ projects }) {
    const tableRef = useRef(null);

    const projectList = Array.isArray(projects)
        ? projects
        : (projects?.data ?? []);

    useEffect(() => {
        let instance;

        if (
            window.$ &&
            window.$.fn &&
            window.$.fn.DataTable &&
            tableRef.current
        ) {
            instance = window.$(tableRef.current).DataTable({
                destroy: true,
                autoWidth: false,
                responsive: false,
                pageLength: 10,
                searching: false,
                lengthChange: false,
                info: false,
            });
        }

        return () => {
            instance?.destroy();
        };
    }, [projectList]);

    const stats = useMemo(() => {
        const total = projects?.total ?? projectList.length;

        const verified = projectList.filter(
            (project) => Boolean(project.verified)
        ).length;

        const pending = projectList.filter(
            (project) => !project.verified
        ).length;

        const active = projectList.filter((project) =>
            ['open', 'in_progress'].includes(
                (project.status ?? '').toLowerCase()
            )
        ).length;

        return {
            total,
            verified,
            pending,
            active,
        };
    }, [projects, projectList]);

    function handleVerify(project) {
        router.post(
            route('admin.projects.verify', project.id),
            {},
            {
                preserveScroll: true,
            }
        );
    }

    function handleDelete(project) {
        if (!confirm(`Delete "${project.title}"?`)) return;

        router.delete(
            route('admin.projects.destroy', project.id),
            {
                preserveScroll: true,
            }
        );
    }

    return (
        <AppLayout>
            <Head title="Manage Projects" />

            <style>{`
                .talent-projects-page,
                .talent-projects-page * {
                    box-sizing: border-box;
                }

                .talent-projects-page {
                    --pm-bg: #f7f8fa;
                    --pm-card: #ffffff;
                    --pm-text: #1d1d1f;
                    --pm-secondary: #6e6e73;
                    --pm-muted: #8e8e93;
                    --pm-border: #e5e5ea;
                    --pm-primary: #1677ff;
                    --pm-primary-dark: #0d63d8;
                    --pm-green: #16845b;
                    --pm-red: #d9485f;
                    --pm-orange: #b7791f;
                    --pm-blue: #3178c6;

                    min-height: 100%;
                    padding: 28px;
                    background: var(--pm-bg);
                    color: var(--pm-text);

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Text",
                        "SF Pro Display",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    -webkit-font-smoothing: antialiased;
                }

                .pm-container {
                    width: 100%;
                    max-width: 1500px;
                    margin: 0 auto;
                }

                /* Header */

                .pm-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 24px;
                    margin-bottom: 24px;
                }

                .pm-heading {
                    min-width: 0;
                }

                .pm-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    color: var(--pm-primary);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                    margin-bottom: 7px;
                }

                .pm-eyebrow-line {
                    width: 20px;
                    height: 1px;
                    background: currentColor;
                }

                .pm-title {
                    margin: 0;
                    font-size: 25px;
                    line-height: 1.2;
                    letter-spacing: -.035em;
                    font-weight: 700;
                }

                .pm-subtitle {
                    margin: 7px 0 0;
                    color: var(--pm-secondary);
                    font-size: 13px;
                    line-height: 1.5;
                }

                .pm-add-button {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    height: 40px;
                    padding: 0 17px;
                    border: 0;
                    border-radius: 9px;
                    background: var(--pm-primary);
                    color: #fff;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 600;
                    box-shadow: 0 3px 10px rgba(22,119,255,.18);
                    transition:
                        background .18s ease,
                        transform .18s ease,
                        box-shadow .18s ease;
                }

                .pm-add-button:hover {
                    background: var(--pm-primary-dark);
                    color: #fff;
                    transform: translateY(-1px);
                    box-shadow: 0 5px 15px rgba(22,119,255,.22);
                }

                /* Stats */

                .pm-stat-grid {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 13px;
                    margin-bottom: 20px;
                }

                .pm-stat {
                    min-width: 0;
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    padding: 16px;
                    background: var(--pm-card);
                    border: 1px solid var(--pm-border);
                    border-radius: 12px;
                }

                .pm-stat-icon {
                    width: 39px;
                    height: 39px;
                    flex: 0 0 39px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    background: #eef5ff;
                    color: var(--pm-primary);
                }

                .pm-stat:nth-child(2) .pm-stat-icon {
                    background: #eef9f4;
                    color: var(--pm-green);
                }

                .pm-stat:nth-child(3) .pm-stat-icon {
                    background: #fff7e8;
                    color: var(--pm-orange);
                }

                .pm-stat:nth-child(4) .pm-stat-icon {
                    background: #f0f5ff;
                    color: var(--pm-blue);
                }

                .pm-stat-label {
                    margin: 0 0 2px;
                    color: var(--pm-muted);
                    font-size: 11px;
                    font-weight: 500;
                }

                .pm-stat-value {
                    margin: 0;
                    color: var(--pm-text);
                    font-size: 20px;
                    line-height: 1.15;
                    letter-spacing: -.025em;
                    font-weight: 700;
                }

                /* Table card */

                .pm-table-card {
                    background: var(--pm-card);
                    border: 1px solid var(--pm-border);
                    border-radius: 14px;
                    overflow: hidden;
                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025),
                        0 5px 18px rgba(0,0,0,.025);
                }

                .pm-table-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 15px 18px;
                    border-bottom: 1px solid var(--pm-border);
                }

                .pm-toolbar-title {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin: 0;
                    font-size: 13px;
                    font-weight: 600;
                }

                .pm-toolbar-count {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 24px;
                    height: 21px;
                    padding: 0 7px;
                    border-radius: 20px;
                    background: #f2f2f7;
                    color: var(--pm-secondary);
                    font-size: 11px;
                    font-weight: 600;
                }

                .pm-table-scroll {
                    width: 100%;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                }

                .talent-projects-page table.pm-table {
                    width: 100% !important;
                    min-width: 900px;
                    margin: 0 !important;
                    border-collapse: collapse;
                    border-spacing: 0;
                }

                .talent-projects-page table.pm-table thead th {
                    height: 42px;
                    padding: 0 18px;
                    background: #fafafa !important;
                    border-bottom: 1px solid var(--pm-border);
                    color: #86868b;
                    text-align: left;
                    white-space: nowrap;
                    font-size: 10px;
                    line-height: 1;
                    font-weight: 600;
                    letter-spacing: .055em;
                    text-transform: uppercase;
                }

                .talent-projects-page table.pm-table tbody td {
                    padding: 15px 18px;
                    background: #fff !important;
                    border-bottom: 1px solid #f0f0f2;
                    color: var(--pm-secondary);
                    font-size: 12.5px;
                    vertical-align: middle;
                }

                .talent-projects-page table.pm-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .talent-projects-page table.pm-table tbody tr:hover td {
                    background: #fbfcfe !important;
                }

                /* Project */

                .pm-project {
                    min-width: 210px;
                    max-width: 320px;
                }

                .pm-project-title {
                    margin: 0 0 4px;
                    color: var(--pm-text);
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 1.35;
                }

                .pm-project-description {
                    max-width: 300px;
                    margin: 0;
                    overflow: hidden;
                    color: var(--pm-muted);
                    font-size: 11.5px;
                    line-height: 1.45;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                /* Person */

                .pm-person {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    min-width: 170px;
                }

                .pm-avatar {
                    width: 34px;
                    height: 34px;
                    flex: 0 0 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #eef5ff;
                    color: var(--pm-primary);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: -.01em;
                }

                .pm-person-name {
                    margin: 0 0 2px;
                    color: var(--pm-text);
                    font-size: 12px;
                    font-weight: 600;
                }

                .pm-person-email {
                    max-width: 150px;
                    margin: 0;
                    overflow: hidden;
                    color: var(--pm-muted);
                    font-size: 10.5px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                /* Meta */

                .pm-meta-title {
                    margin: 0 0 3px;
                    color: var(--pm-text);
                    font-size: 12px;
                    font-weight: 600;
                }

                .pm-meta-sub {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin: 0;
                    color: var(--pm-muted);
                    font-size: 10.5px;
                }

                .pm-budget {
                    color: var(--pm-text);
                    font-size: 12px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                /* Status */

                .pm-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    min-height: 25px;
                    padding: 0 9px;
                    border-radius: 20px;
                    font-size: 10.5px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .pm-status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: currentColor;
                }

                .pm-dot-success { color: #16845b; }
                .pm-dot-info { color: #3178c6; }
                .pm-dot-danger { color: #d9485f; }
                .pm-dot-neutral { color: #8e8e93; }

                .pm-status-open,
                .pm-status-completed {
                    background: #edf8f3;
                    color: #16845b;
                }

                .pm-status-progress {
                    background: #eef5ff;
                    color: #3178c6;
                }

                .pm-status-danger {
                    background: #fff0f2;
                    color: #d9485f;
                }

                .pm-status-neutral {
                    background: #f2f2f7;
                    color: #6e6e73;
                }

                /* Verification */

                .pm-verification {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 11px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .pm-verification svg {
                    width: 14px;
                    height: 14px;
                }

                .pm-verification.verified {
                    color: var(--pm-green);
                }

                .pm-verification.pending {
                    color: var(--pm-orange);
                }

                /* Inline actions */

                .pm-actions {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    white-space: nowrap;
                }

                .pm-action {
                    width: 31px;
                    height: 31px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    border: 1px solid transparent;
                    border-radius: 8px;
                    background: transparent;
                    color: #6e6e73;
                    cursor: pointer;
                    text-decoration: none;
                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        color .15s ease;
                }

                .pm-action:hover {
                    background: #f2f5f9;
                    border-color: #e2e7ee;
                    color: var(--pm-primary);
                }

                .pm-action.verify:hover {
                    background: #edf8f3;
                    border-color: #d7eee3;
                    color: var(--pm-green);
                }

                .pm-action.delete:hover {
                    background: #fff0f2;
                    border-color: #f7d9de;
                    color: var(--pm-red);
                }

                .pm-action[title] {
                    position: relative;
                }

                /* Empty state */

                .pm-empty {
                    padding: 65px 25px;
                    text-align: center;
                }

                .pm-empty-icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 13px;
                    border-radius: 13px;
                    background: #eef5ff;
                    color: var(--pm-primary);
                }

                .pm-empty-title {
                    margin: 0 0 5px;
                    font-size: 14px;
                    font-weight: 600;
                }

                .pm-empty-text {
                    margin: 0;
                    color: var(--pm-muted);
                    font-size: 12px;
                }

                /* Pagination */

                .pm-pagination {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 5px;
                    padding: 14px 18px;
                    border-top: 1px solid var(--pm-border);
                    flex-wrap: wrap;
                }

                .pm-page-link {
                    min-width: 32px;
                    height: 32px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 9px;
                    border: 1px solid var(--pm-border);
                    border-radius: 7px;
                    background: #fff;
                    color: var(--pm-secondary);
                    font-size: 11px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all .15s ease;
                }

                .pm-page-link:hover {
                    border-color: #c9d9ef;
                    background: #f7faff;
                    color: var(--pm-primary);
                }

                .pm-page-link.active {
                    border-color: var(--pm-primary);
                    background: var(--pm-primary);
                    color: #fff;
                }

                .pm-page-link.disabled {
                    opacity: .35;
                    pointer-events: none;
                }

                /* Tablet */

                @media (max-width: 1100px) {
                    .pm-stat-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .pm-header {
                        align-items: flex-start;
                    }
                }

                /* Mobile */

                @media (max-width: 700px) {
                    .talent-projects-page {
                        padding: 20px 14px;
                    }

                    .pm-header {
                        display: block;
                        margin-bottom: 20px;
                    }

                    .pm-add-button {
                        width: 100%;
                        margin-top: 15px;
                    }

                    .pm-title {
                        font-size: 22px;
                    }

                    .pm-subtitle {
                        font-size: 12px;
                    }

                    .pm-stat-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 9px;
                    }

                    .pm-stat {
                        padding: 13px;
                        gap: 9px;
                    }

                    .pm-stat-icon {
                        width: 34px;
                        height: 34px;
                        flex-basis: 34px;
                    }

                    .pm-stat-label {
                        font-size: 9px;
                    }

                    .pm-stat-value {
                        font-size: 17px;
                    }

                    .pm-table-toolbar {
                        padding: 13px 14px;
                    }

                    .pm-pagination {
                        justify-content: center;
                    }
                }

                @media (max-width: 430px) {
                    .pm-stat-grid {
                        grid-template-columns: 1fr;
                    }

                    .pm-stat {
                        min-height: 62px;
                    }

                    .pm-table-card {
                        border-radius: 11px;
                    }
                }
            `}</style>

            <div className="talent-projects-page">
                <div className="pm-container">

                    {/* Header */}
                    <div className="pm-header">
                        <div className="pm-heading">
                            <div className="pm-eyebrow">
                                <span className="pm-eyebrow-line" />
                                Talent Platform
                            </div>

                            <h1 className="pm-title">
                                Project Management
                            </h1>

                            <p className="pm-subtitle">
                                Review, verify and manage projects submitted by
                                clients and talent.
                            </p>
                        </div>

                        <Link
                            href={route('admin.projects.create')}
                            className="pm-add-button"
                        >
                            <Icon name="plus" size={16} />
                            Add Project
                        </Link>
                    </div>

                    {/* Statistics */}
                    <div className="pm-stat-grid">

                        <div className="pm-stat">
                            <div className="pm-stat-icon">
                                <Icon name="folder" size={18} />
                            </div>

                            <div>
                                <p className="pm-stat-label">
                                    Total Projects
                                </p>

                                <h3 className="pm-stat-value">
                                    {stats.total}
                                </h3>
                            </div>
                        </div>

                        <div className="pm-stat">
                            <div className="pm-stat-icon">
                                <Icon name="check" size={18} />
                            </div>

                            <div>
                                <p className="pm-stat-label">
                                    Verified
                                </p>

                                <h3 className="pm-stat-value">
                                    {stats.verified}
                                </h3>
                            </div>
                        </div>

                        <div className="pm-stat">
                            <div className="pm-stat-icon">
                                <Icon name="clock" size={18} />
                            </div>

                            <div>
                                <p className="pm-stat-label">
                                    Pending Review
                                </p>

                                <h3 className="pm-stat-value">
                                    {stats.pending}
                                </h3>
                            </div>
                        </div>

                        <div className="pm-stat">
                            <div className="pm-stat-icon">
                                <Icon name="users" size={18} />
                            </div>

                            <div>
                                <p className="pm-stat-label">
                                    Active Projects
                                </p>

                                <h3 className="pm-stat-value">
                                    {stats.active}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="pm-table-card">

                        <div className="pm-table-toolbar">
                            <h2 className="pm-toolbar-title">
                                Projects
                                <span className="pm-toolbar-count">
                                    {stats.total}
                                </span>
                            </h2>
                        </div>

                        {projectList.length === 0 ? (
                            <div className="pm-empty">
                                <div className="pm-empty-icon">
                                    <Icon name="folder" size={21} />
                                </div>

                                <h3 className="pm-empty-title">
                                    No projects found
                                </h3>

                                <p className="pm-empty-text">
                                    Projects submitted to the platform will
                                    appear here.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="pm-table-scroll">
                                    <table
                                        className="pm-table"
                                        ref={tableRef}
                                    >
                                        <thead>
                                            <tr>
                                                <th>Project</th>
                                                <th>Owner</th>
                                                <th>Category</th>
                                                <th>Budget</th>
                                                <th>Status</th>
                                                <th>Verification</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {projectList.map((project) => (
                                                <tr key={project.id}>

                                                    {/* Project */}
                                                    <td>
                                                        <div className="pm-project">
                                                            <h3 className="pm-project-title">
                                                                {project.title}
                                                            </h3>

                                                            <p className="pm-project-description">
                                                                {truncate(
                                                                    project.description
                                                                )}
                                                            </p>
                                                        </div>
                                                    </td>

                                                    {/* Owner */}
                                                    <td>
                                                        <div className="pm-person">
                                                            <div className="pm-avatar">
                                                                {initials(
                                                                    project.user?.name
                                                                )}
                                                            </div>

                                                            <div>
                                                                <p className="pm-person-name">
                                                                    {project.user?.name ?? 'Unknown'}
                                                                </p>

                                                                <p className="pm-person-email">
                                                                    {project.user?.email ?? 'No email'}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    {/* Category */}
                                                    <td>
                                                        <div>
                                                            <p className="pm-meta-title">
                                                                {project.category?.name ?? '—'}
                                                            </p>

                                                            <p className="pm-meta-sub">
                                                                <Icon
                                                                    name="location"
                                                                    size={11}
                                                                />

                                                                {project.location ?? 'Remote'}
                                                            </p>
                                                        </div>
                                                    </td>

                                                    {/* Budget */}
                                                    <td>
                                                        <span className="pm-budget">
                                                            {formatBudget(project)}
                                                        </span>
                                                    </td>

                                                    {/* Status */}
                                                    <td>
                                                        <StatusBadge
                                                            status={project.status}
                                                        />
                                                    </td>

                                                    {/* Verification */}
                                                    <td>
                                                        <VerificationBadge
                                                            verified={
                                                                project.verified
                                                            }
                                                        />
                                                    </td>

                                                    {/* Actions */}
                                                    <td>
                                                        <div className="pm-actions">

                                                            {/* View */}
                                                            <Link
                                                                href={route(
                                                                    'admin.projects.show',
                                                                    project.id
                                                                )}
                                                                className="pm-action"
                                                                title="View project"
                                                                aria-label="View project"
                                                            >
                                                                <Icon
                                                                    name="eye"
                                                                    size={15}
                                                                />
                                                            </Link>

                                                            {/* Edit */}
                                                            <Link
                                                                href={route(
                                                                    'admin.projects.edit',
                                                                    project.id
                                                                )}
                                                                className="pm-action"
                                                                title="Edit project"
                                                                aria-label="Edit project"
                                                            >
                                                                <Icon
                                                                    name="edit"
                                                                    size={15}
                                                                />
                                                            </Link>

                                                            {/* Verify */}
                                                            {!project.verified && (
                                                                <button
                                                                    type="button"
                                                                    className="pm-action verify"
                                                                    title="Verify project"
                                                                    aria-label="Verify project"
                                                                    onClick={() =>
                                                                        handleVerify(
                                                                            project
                                                                        )
                                                                    }
                                                                >
                                                                    <Icon
                                                                        name="verify"
                                                                        size={15}
                                                                    />
                                                                </button>
                                                            )}

                                                            {/* Delete */}
                                                            <button
                                                                type="button"
                                                                className="pm-action delete"
                                                                title="Delete project"
                                                                aria-label="Delete project"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        project
                                                                    )
                                                                }
                                                            >
                                                                <Icon
                                                                    name="trash"
                                                                    size={15}
                                                                />
                                                            </button>

                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                {projects?.links &&
                                    projects.links.length > 3 && (
                                        <div className="pm-pagination">
                                            {projects.links.map(
                                                (link, index) =>
                                                    link.url ? (
                                                        <Link
                                                            key={index}
                                                            href={link.url}
                                                            preserveState
                                                            className={`pm-page-link ${
                                                                link.active
                                                                    ? 'active'
                                                                    : ''
                                                            }`}
                                                        >
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html: link.label,
                                                                }}
                                                            />
                                                        </Link>
                                                    ) : (
                                                        <span
                                                            key={index}
                                                            className="pm-page-link disabled"
                                                            dangerouslySetInnerHTML={{
                                                                __html: link.label,
                                                            }}
                                                        />
                                                    )
                                            )}
                                        </div>
                                    )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}