import React, { useMemo, useRef, useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import { Eye, Pencil, Trash2 } from "lucide-react";

function initials(title) {
    if (!title) return "—";

    return title
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join("");
}

function decodePaginationLabel(label) {
    return label
        .replace(/&laquo;/g, "‹")
        .replace(/&raquo;/g, "›")
        .replace(/Previous/i, "Prev")
        .replace(/Next/i, "Next");
}

function TypeBadge({ type }) {
    const value = (type ?? "").toLowerCase();

    const map = {
        "full-time": {
            label: "Full-Time",
            className: "job-badge green",
        },
        "part-time": {
            label: "Part-Time",
            className: "job-badge blue",
        },
        contract: {
            label: "Contract",
            className: "job-badge orange",
        },
        internship: {
            label: "Internship",
            className: "job-badge gray",
        },
        remote: {
            label: "Remote",
            className: "job-badge purple",
        },
    };

    const meta = map[value] ?? {
        label: type ?? "—",
        className: "job-badge gray",
    };

    return (
        <span className={meta.className}>
            <span className="badge-dot" />
            {meta.label}
        </span>
    );
}

function StatCard({ icon, label, value }) {
    return (
        <div className="job-stat">
            <div className="stat-icon">
                <i className={`bi ${icon}`} />
            </div>

            <div>
                <div className="stat-label">{label}</div>
                <div className="stat-value">{value}</div>
            </div>
        </div>
    );
}

function ActionButton({ href, icon, label, danger = false, onClick }) {
    const Icon = icon;

    const className = `table-action ${danger ? "danger" : ""}`;

    if (onClick) {
        return (
            <button
                type="button"
                className={className}
                onClick={onClick}
                title={label}
                aria-label={label}
            >
                <Icon size={14} strokeWidth={1.8} />
            </button>
        );
    }

    return (
        <Link
            href={href}
            className={className}
            title={label}
            aria-label={label}
        >
            <Icon size={14} strokeWidth={1.8} />
        </Link>
    );
}

export default function Index({ jobs }) {
    const tableRef = useRef(null);

    const jobList = jobs.data ?? [];

    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("");

    function handleDelete(job) {
        if (confirm(`Delete "${job.title}"?`)) {
            router.delete(route("admin.jobs.destroy", job.id));
        }
    }

    const stats = useMemo(() => {
        const total = jobs.total ?? jobList.length;

        const types = new Set(
            jobList
                .map((job) => (job.type ?? "").toLowerCase())
                .filter(Boolean),
        );

        const locations = new Set(
            jobList.map((job) => job.location).filter(Boolean),
        );

        return {
            total,
            types: types.size,
            locations: locations.size,
        };
    }, [jobList, jobs.total]);

    const visibleJobs = useMemo(() => {
        const query = search.trim().toLowerCase();

        return jobList.filter((job) => {
            const matchesSearch =
                !query ||
                job.title?.toLowerCase().includes(query) ||
                job.location?.toLowerCase().includes(query);

            const matchesType =
                !typeFilter || (job.type ?? "").toLowerCase() === typeFilter;

            return matchesSearch && matchesType;
        });
    }, [jobList, search, typeFilter]);

    return (
        <AppLayout>
            <Head title="Manage Jobs" />

            {/* Apple-inspired typography */}
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            <style>{`

                /* =====================================================
                   APPLE-STYLE LIGHT ADMIN
                   ===================================================== */

                .jobs-page,
                .jobs-page * {
                    box-sizing: border-box;
                }

                .jobs-page {
                    --green: #007f5f;
                    --green-light: #eaf8f3;

                    --blue: #2878c8;
                    --blue-light: #edf5fd;

                    --orange: #b7791f;
                    --orange-light: #fff7e8;

                    --purple: #7357b8;
                    --purple-light: #f3effc;

                    --red: #c2413a;
                    --red-light: #fff0ef;

                    --text: #1d1d1f;
                    --text-secondary: #62666a;
                    --text-muted: #86868b;

                    --border: #e7e7e8;
                    --border-hover: #d2d2d4;

                    --surface: #ffffff;
                    --surface-soft: #f8f8f8;
                    --page: #f7f7f8;

                    background: var(--page);
                    color: var(--text);

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Inter",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    min-height: 100%;
                    padding: 28px 32px 48px;

                    color-scheme: light;
                }

                .jobs-page *,
                .jobs-page *::before,
                .jobs-page *::after {
                    color-scheme: light;
                }

                /* =====================================================
                   HEADER
                   ===================================================== */

                .jobs-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 20px;

                    margin-bottom: 24px;
                }

                .jobs-title {
                    margin: 0 0 4px;

                    font-size: 21px;
                    line-height: 1.25;
                    font-weight: 600;
                    letter-spacing: -0.025em;

                    color: var(--text);
                }

                .jobs-subtitle {
                    margin: 0;

                    font-size: 13px;
                    line-height: 1.5;
                    color: var(--text-secondary);
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .apple-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;

                    height: 36px;
                    padding: 0 14px;

                    border-radius: 9px;

                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 500;

                    text-decoration: none;
                    cursor: pointer;

                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        transform .15s ease;
                }

                .apple-btn.secondary {
                    background: #fff;
                    border: 1px solid var(--border);
                    color: var(--text-secondary);
                }

                .apple-btn.secondary:hover {
                    background: var(--surface-soft);
                    border-color: var(--border-hover);
                    color: var(--text);
                }

                .apple-btn.primary {
                    background: var(--green);
                    border: 1px solid var(--green);
                    color: #fff;
                }

                .apple-btn.primary:hover {
                    background: #006e52;
                    border-color: #006e52;
                }

                /* =====================================================
                   STATS
                   ===================================================== */

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;

                    margin-bottom: 18px;
                }

                .job-stat {
                    display: flex;
                    align-items: center;
                    gap: 12px;

                    min-height: 76px;
                    padding: 14px 16px;

                    background: var(--surface);
                    border: 1px solid var(--border);
                    border-radius: 12px;

                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025);
                }

                .stat-icon {
                    width: 34px;
                    height: 34px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                    border-radius: 9px;

                    background: var(--green-light);
                    color: var(--green);

                    font-size: 14px;
                }

                .stat-label {
                    margin-bottom: 2px;

                    font-size: 11px;
                    font-weight: 500;

                    color: var(--text-muted);
                }

                .stat-value {
                    font-size: 18px;
                    line-height: 1.2;
                    font-weight: 600;

                    letter-spacing: -0.02em;

                    color: var(--text);
                }

                /* =====================================================
                   MAIN CARD
                   ===================================================== */

                .jobs-card {
                    background: var(--surface);
                    border: 1px solid var(--border);
                    border-radius: 13px;

                    overflow: hidden;

                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025);
                }

                /* =====================================================
                   TOOLBAR
                   ===================================================== */

                .jobs-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    gap: 16px;

                    padding: 13px 16px;

                    border-bottom: 1px solid var(--border);
                }

                .search-box {
                    width: 280px;
                    height: 34px;

                    display: flex;
                    align-items: center;
                    gap: 8px;

                    padding: 0 11px;

                    background: #f5f5f6;
                    border: 1px solid transparent;

                    border-radius: 8px;

                    transition:
                        background .15s ease,
                        border-color .15s ease;
                }

                .search-box:focus-within {
                    background: #fff;
                    border-color: #b9dcd2;
                    box-shadow: 0 0 0 3px rgba(0,127,95,.08);
                }

                .search-box i {
                    font-size: 12px;
                    color: var(--text-muted);
                }

                .search-box input {
                    width: 100%;

                    border: 0;
                    outline: 0;
                    background: transparent;

                    font-family: inherit;
                    font-size: 12px;
                    color: var(--text);
                }

                .search-box input::placeholder {
                    color: #9a9a9f;
                }

                .filter-group {
                    display: flex;
                    align-items: center;
                    gap: 4px;

                    padding: 3px;

                    background: #f5f5f6;
                    border-radius: 8px;
                }

                .filter-btn {
                    height: 28px;

                    padding: 0 10px;

                    border: 0;
                    border-radius: 6px;

                    background: transparent;
                    color: var(--text-secondary);

                    font-family: inherit;
                    font-size: 11px;
                    font-weight: 500;

                    cursor: pointer;
                }

                .filter-btn:hover {
                    color: var(--text);
                }

                .filter-btn.active {
                    background: #fff;
                    color: var(--text);

                    box-shadow:
                        0 1px 3px rgba(0,0,0,.08);
                }

                /* =====================================================
                   TABLE
                   ===================================================== */

                .jobs-table-wrap {
                    width: 100%;
                    overflow-x: auto;
                }

                table.jobs-table {
                    width: 100% !important;

                    border-collapse: collapse;
                    border-spacing: 0;

                    margin: 0 !important;
                }

                .jobs-table thead th {
                    height: 38px;

                    padding: 0 16px;

                    text-align: left;
                    vertical-align: middle;

                    background: #fafafa !important;

                    border-bottom: 1px solid var(--border);

                    color: #8a8a8f;

                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 600;

                    letter-spacing: .04em;
                    text-transform: uppercase;

                    white-space: nowrap;
                }

                .jobs-table tbody td {
                    height: 58px;

                    padding: 8px 16px;

                    background: #fff !important;

                    border-bottom: 1px solid #f0f0f1;

                    color: var(--text-secondary);

                    font-size: 12px;
                    font-weight: 400;

                    vertical-align: middle;
                }

                .jobs-table tbody tr:last-child td {
                    border-bottom: 0;
                }

                .jobs-table tbody tr:hover td {
                    background: #fafafa !important;
                }

                /* =====================================================
                   JOB CELL
                   ===================================================== */

                .job-cell {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .job-avatar {
                    width: 32px;
                    height: 32px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                    border-radius: 8px;

                    background: var(--green-light);
                    border: 1px solid #d8eee7;

                    color: var(--green);

                    font-size: 10px;
                    font-weight: 600;
                }

                .job-name {
                    margin: 0;

                    color: var(--text);

                    font-size: 12px;
                    font-weight: 500;

                    line-height: 1.3;
                }

                .job-location {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                }

                .job-location i {
                    color: #9a9a9f;
                    font-size: 11px;
                }

                /* =====================================================
                   BADGES
                   ===================================================== */

                .job-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;

                    min-height: 23px;

                    padding: 0 8px;

                    border-radius: 6px;

                    font-size: 10px;
                    font-weight: 500;

                    white-space: nowrap;
                }

                .badge-dot {
                    width: 5px;
                    height: 5px;

                    border-radius: 50%;

                    background: currentColor;
                }

                .job-badge.green {
                    background: var(--green-light);
                    color: var(--green);
                }

                .job-badge.blue {
                    background: var(--blue-light);
                    color: var(--blue);
                }

                .job-badge.orange {
                    background: var(--orange-light);
                    color: var(--orange);
                }

                .job-badge.purple {
                    background: var(--purple-light);
                    color: var(--purple);
                }

                .job-badge.gray {
                    background: #f1f1f2;
                    color: #737378;
                }

                
                .actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    min-width: 100px;
}

.table-action {
    width: 30px;
    height: 30px;

    display: inline-flex !important;
    align-items: center;
    justify-content: center;

    flex: 0 0 30px;

    border: 1px solid #e5e5e7;
    border-radius: 7px;

    background: #ffffff !important;
    color: #6b6b70 !important;

    padding: 0;
    margin: 0;

    text-decoration: none !important;

    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;

    transition:
        background .15s ease,
        color .15s ease,
        border-color .15s ease,
        transform .15s ease;
}

.table-action:hover {
    background: #f5f5f7 !important;
    border-color: #d8d8dc;
    color: #1d1d1f !important;

    transform: translateY(-1px);
}

.table-action.edit:hover {
    background: #eaf8f3 !important;
    border-color: #cce8de;
    color: #007f5f !important;
}

.table-action.danger {
    color: #77777c !important;
}

.table-action.danger:hover {
    background: #fff0ef !important;
    border-color: #f0d5d2;
    color: #c2413a !important;
}

.table-action svg {
    display: block;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
}

                
                .empty-state {
                    padding: 54px 20px;

                    text-align: center;

                    color: var(--text-muted);

                    font-size: 12px;
                }

                .empty-icon {
                    width: 42px;
                    height: 42px;

                    margin: 0 auto 10px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 10px;

                    background: #f5f5f6;

                    color: #a0a0a5;

                    font-size: 17px;
                }

                /* =====================================================
                   FOOTER / PAGINATION
                   ===================================================== */

                .jobs-footer {
                    display: flex;
                    justify-content: flex-end;

                    padding: 12px 16px;

                    border-top: 1px solid var(--border);
                }

                .pagination {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .page-link {
                    min-width: 29px;
                    height: 29px;

                    display: inline-flex;
                    align-items: center;
                    justify-content: center;

                    padding: 0 8px;

                    border: 1px solid var(--border);
                    border-radius: 7px;

                    background: #fff;
                    color: var(--text-secondary);

                    font-size: 10px;
                    font-weight: 500;

                    text-decoration: none;
                }

                .page-link:hover {
                    border-color: #cfcfd1;
                    color: var(--text);
                    background: #fafafa;
                }

                .page-link.active {
                    background: var(--green);
                    border-color: var(--green);
                    color: #fff;
                }

                .page-link.disabled {
                    opacity: .35;
                    pointer-events: none;
                }

                /* =====================================================
                   RESPONSIVE
                   ===================================================== */

                @media (max-width: 900px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .jobs-toolbar {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .filter-group {
                        width: fit-content;
                    }
                }

                @media (max-width: 650px) {
                    .jobs-page {
                        padding: 20px 14px 32px;
                    }

                    .jobs-header {
                        flex-direction: column;
                    }

                    .header-actions {
                        width: 100%;
                    }

                    .apple-btn {
                        flex: 1;
                    }

                    .stats-grid {
                        grid-template-columns: 1fr;
                    }

                    .filter-group {
                        width: 100%;
                        overflow-x: auto;
                    }

                    .filter-btn {
                        white-space: nowrap;
                    }
                }

                .actions-column {
    width: 120px;
    min-width: 120px;
}
    
                @media (prefers-color-scheme: dark) {
                    .jobs-page {
                        background: #f7f7f8 !important;
                        color: #1d1d1f !important;
                    }

                    .jobs-card,
                    .job-stat,
                    .jobs-table tbody td,
                    .page-link {
                        background: #fff !important;
                        color: #1d1d1f;
                    }
                }

            `}</style>

            <div className="jobs-page">
                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="jobs-header">
                    <div>
                        <h1 className="jobs-title">Job Listings</h1>

                        <p className="jobs-subtitle">
                            Manage positions, job types and applicant-facing
                            details.
                        </p>
                    </div>

                    <div className="header-actions">
                        <Link
                            href={route("admin.job-categories.index")}
                            className="apple-btn secondary"
                        >
                            <i className="bi bi-grid-3x3-gap" />
                            Categories
                        </Link>

                        <Link
                            href={route("admin.jobs.create")}
                            className="apple-btn primary"
                        >
                            <i className="bi bi-plus-lg" />
                            Add Job
                        </Link>
                    </div>
                </div>

                {/* =================================================
                    STATISTICS
                ================================================= */}

                <div className="stats-grid">
                    <StatCard
                        icon="bi-briefcase"
                        label="Total Jobs"
                        value={stats.total}
                    />

                    <StatCard
                        icon="bi-layers"
                        label="Job Types"
                        value={stats.types}
                    />

                    <StatCard
                        icon="bi-geo-alt"
                        label="Locations"
                        value={stats.locations}
                    />
                </div>

                {/* =================================================
                    JOBS TABLE
                ================================================= */}

                <div className="jobs-card">
                    <div className="jobs-toolbar">
                        <div className="search-box">
                            <i className="bi bi-search" />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search jobs or locations"
                            />
                        </div>

                        <div className="filter-group">
                            {[
                                { key: "", label: "All" },
                                { key: "full-time", label: "Full-Time" },
                                { key: "part-time", label: "Part-Time" },
                                { key: "contract", label: "Contract" },
                                { key: "internship", label: "Internship" },
                            ].map((item) => (
                                <button
                                    key={item.key || "all"}
                                    type="button"
                                    className={`filter-btn ${
                                        typeFilter === item.key ? "active" : ""
                                    }`}
                                    onClick={() => setTypeFilter(item.key)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="jobs-table-wrap">
                        <table className="jobs-table" ref={tableRef}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Position</th>
                                    <th>Type</th>
                                    <th>Location</th>
                                    <th>Experience</th>
                                    <th className="actions-column">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {visibleJobs.length > 0 ? (
                                    visibleJobs.map((job, index) => (
                                        <tr key={job.id}>
                                            <td>{(jobs.from ?? 1) + index}</td>

                                            <td>
                                                <div className="job-cell">
                                                    <div className="job-avatar">
                                                        {initials(job.title)}
                                                    </div>

                                                    <p className="job-name">
                                                        {job.title}
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <TypeBadge type={job.type} />
                                            </td>

                                            <td>
                                                <span className="job-location">
                                                    <i className="bi bi-geo-alt" />
                                                    {job.location ?? "—"}
                                                </span>
                                            </td>

                                            <td>
                                                {job.experience_level ?? "—"}
                                            </td>

                                            <td>
                                                <div className="actions">
                                                    <ActionButton
                                                        href={route(
                                                            "admin.jobs.show",
                                                            job.id,
                                                        )}
                                                        icon={Eye}
                                                        label="View job"
                                                    />

                                                    <ActionButton
                                                        href={route(
                                                            "admin.jobs.edit",
                                                            job.id,
                                                        )}
                                                        icon={Pencil}
                                                        label="Edit job"
                                                    />

                                                    <ActionButton
                                                        icon={Trash2}
                                                        label="Delete job"
                                                        danger
                                                        onClick={() =>
                                                            handleDelete(job)
                                                        }
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">
                                            <div className="empty-state">
                                                <div className="empty-icon">
                                                    <i className="bi bi-inbox" />
                                                </div>
                                                No jobs found.
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* =================================================
                        PAGINATION
                    ================================================= */}

                    {jobs.links && jobs.links.length > 3 && (
                        <div className="jobs-footer">
                            <div className="pagination">
                                {jobs.links.map((link, index) =>
                                    link.url ? (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            preserveState
                                            className={`page-link ${
                                                link.active ? "active" : ""
                                            }`}
                                        >
                                            {decodePaginationLabel(link.label)}
                                        </Link>
                                    ) : (
                                        <span
                                            key={index}
                                            className="page-link disabled"
                                        >
                                            {decodePaginationLabel(link.label)}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
