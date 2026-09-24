import React from "react";
import { Head, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

function initials(title) {
    if (!title) return "—";

    return title
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join("");
}

function TypeBadge({ type }) {
    const t = (type ?? "").toLowerCase();

    const map = {
        "full-time": {
            cls: "badge-success",
            label: "Full-Time",
        },
        "part-time": {
            cls: "badge-info",
            label: "Part-Time",
        },
        contract: {
            cls: "badge-warning",
            label: "Contract",
        },
        internship: {
            cls: "badge-neutral",
            label: "Internship",
        },
        remote: {
            cls: "badge-info",
            label: "Remote",
        },
    };

    const meta = map[t] ?? {
        cls: "badge-neutral",
        label: type ?? "N/A",
    };

    return (
        <span className={`job-badge ${meta.cls}`}>
            {meta.label}
        </span>
    );
}

function ApplicationStatus({ status }) {
    const value = (status ?? "pending").toLowerCase();

    const statusMap = {
        pending: {
            label: "Pending",
            className: "application-status pending",
        },
        reviewed: {
            label: "Reviewed",
            className: "application-status reviewed",
        },
        shortlisted: {
            label: "Shortlisted",
            className: "application-status shortlisted",
        },
        rejected: {
            label: "Rejected",
            className: "application-status rejected",
        },
        accepted: {
            label: "Accepted",
            className: "application-status accepted",
        },
    };

    const meta = statusMap[value] ?? {
        label: status,
        className: "application-status pending",
    };

    return (
        <span className={meta.className}>
            {meta.label}
        </span>
    );
}

function formatDate(date) {
    if (!date) return "—";

    try {
        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    } catch {
        return date;
    }
}

export default function Show({ job }) {
    const applications = Array.isArray(job.applications)
        ? job.applications
        : [];

    const skills = Array.isArray(job.skills)
        ? job.skills
              .map((skill) => String(skill).trim())
              .filter(Boolean)
        : typeof job.skills === "string"
          ? job.skills
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean)
          : [];

    return (
        <AppLayout>
            <Head title={`Job Details: ${job.title}`} />

            <link
                rel="preconnect"
                href="https://fonts.googleapis.com"
            />

            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />

            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;600&display=swap"
                rel="stylesheet"
            />

            <style>{`
                :root {
                    --job-bg: #f5f5f7;
                    --job-card: #ffffff;
                    --job-surface: #f8f8fa;

                    --job-text: #1d1d1f;
                    --job-text-secondary: #6e6e73;
                    --job-text-muted: #86868b;

                    --job-border: #e5e5e7;
                    --job-border-soft: #ededee;

                    --job-green: #167c52;
                    --job-green-dark: #116440;
                    --job-green-light: #edf8f2;

                    --job-blue: #2878c8;
                    --job-blue-light: #eef6ff;

                    --job-orange: #a86d00;
                    --job-orange-light: #fff7e6;

                    --job-red: #c43d3d;
                    --job-red-light: #fff0f0;

                    --job-radius: 14px;
                    --job-radius-sm: 10px;

                    --job-font:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Inter",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                }

                .fc-job-show,
                .fc-job-show * {
                    box-sizing: border-box;
                }

                .fc-job-show {
                    min-height: 100%;
                    padding: 28px 30px 50px;
                    background: var(--job-bg);
                    color: var(--job-text);
                    font-family: var(--job-font);
                    font-size: 13px;
                    -webkit-font-smoothing: antialiased;
                }

                /* PAGE HEADER */

                .job-page-header {
                    max-width: 1320px;
                    margin: 0 auto 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 18px;
                }

                .job-page-heading {
                    min-width: 0;
                }

                .job-page-heading h1 {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 20px;
                    line-height: 1.25;
                    font-weight: 600;
                    letter-spacing: -0.025em;
                }

                .job-page-heading p {
                    margin: 5px 0 0;
                    color: var(--job-text-secondary);
                    font-size: 12px;
                    line-height: 1.5;
                }

                /* BUTTONS */

                .job-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    min-height: 36px;
                    padding: 0 14px;
                    border-radius: 9px;
                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 500;
                    text-decoration: none;
                    white-space: nowrap;
                    cursor: pointer;
                    transition:
                        background .18s ease,
                        border-color .18s ease,
                        color .18s ease;
                }

                .job-btn-secondary {
                    color: #424245;
                    background: #fff;
                    border: 1px solid #d9d9dc;
                }

                .job-btn-secondary:hover {
                    color: var(--job-text);
                    background: #f8f8f8;
                    border-color: #c8c8cc;
                }

                .job-btn-primary {
                    color: #fff;
                    background: var(--job-green);
                    border: 1px solid var(--job-green);
                }

                .job-btn-primary:hover {
                    color: #fff;
                    background: var(--job-green-dark);
                    border-color: var(--job-green-dark);
                }

                /* MAIN LAYOUT */

                .job-layout {
                    max-width: 1320px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 390px;
                    gap: 20px;
                    align-items: start;
                }

                /* JOB CARD */

                .job-card {
                    width: 100%;
                    overflow: hidden;
                    background: var(--job-card);
                    border: 1px solid var(--job-border);
                    border-radius: var(--job-radius);
                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .02),
                        0 5px 20px rgba(0, 0, 0, .035);
                }

                /* JOB HERO */

                .job-hero {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                    padding: 25px 27px 23px;
                }

                .job-avatar {
                    width: 48px;
                    height: 48px;
                    flex: 0 0 48px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 12px;
                    background: var(--job-green-light);
                    border: 1px solid #d7eee2;

                    color: var(--job-green);
                    font-size: 15px;
                    font-weight: 700;
                }

                .job-hero-content {
                    min-width: 0;
                    flex: 1;
                }

                .job-title {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 19px;
                    line-height: 1.3;
                    font-weight: 600;
                    letter-spacing: -0.025em;
                }

                .job-company {
                    margin: 4px 0 10px;
                    color: var(--job-text-secondary);
                    font-size: 12.5px;
                    font-weight: 500;
                }

                .job-badges {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .job-badge {
                    display: inline-flex;
                    align-items: center;
                    min-height: 24px;
                    padding: 0 9px;
                    border-radius: 7px;
                    font-size: 10.5px;
                    line-height: 1;
                    font-weight: 600;
                }

                .badge-success {
                    color: #167c52;
                    background: #edf8f2;
                }

                .badge-info {
                    color: #2878c8;
                    background: #eef6ff;
                }

                .badge-warning {
                    color: #a86d00;
                    background: #fff7e6;
                }

                .badge-neutral {
                    color: #6e6e73;
                    background: #f1f1f3;
                }

                .badge-outline {
                    color: #5f6368;
                    background: #fff;
                    border: 1px solid #e1e1e3;
                }

                .job-divider {
                    height: 1px;
                    background: var(--job-border-soft);
                }

                /* INFORMATION */

                .job-info-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                    padding: 18px 27px;
                }

                .job-info-item {
                    min-width: 0;
                    padding: 13px 14px;
                    background: var(--job-surface);
                    border: 1px solid var(--job-border-soft);
                    border-radius: var(--job-radius-sm);
                }

                .job-info-label {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin: 0 0 7px;
                    color: var(--job-text-muted);
                    font-size: 10px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: .045em;
                }

                .job-info-value {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 12.5px;
                    line-height: 1.4;
                    font-weight: 600;
                    overflow-wrap: anywhere;
                }

                /* CONTENT */

                .job-section {
                    padding: 22px 27px;
                }

                .job-section + .job-section {
                    border-top: 1px solid var(--job-border-soft);
                }

                .job-section-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 11px;
                }

                .job-section-icon {
                    width: 25px;
                    height: 25px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 7px;
                    background: var(--job-green-light);
                    color: var(--job-green);
                    font-size: 11px;
                }

                .job-section-title {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 13px;
                    font-weight: 600;
                }

                .job-description {
                    margin: 0;
                    color: #515154;
                    font-size: 12.5px;
                    line-height: 1.75;
                    white-space: pre-line;
                }

                .job-empty {
                    margin: 0;
                    color: var(--job-text-muted);
                    font-size: 12px;
                    font-style: italic;
                }

                /* SKILLS */

                .job-skills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .job-skill {
                    display: inline-flex;
                    align-items: center;
                    min-height: 28px;
                    padding: 0 10px;
                    border-radius: 7px;
                    border: 1px solid #dcebe3;
                    background: #f5faf7;
                    color: #34735a;
                    font-size: 11px;
                    font-weight: 500;
                }

                .job-footer {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding: 18px 27px;
                    background: #fafafa;
                    border-top: 1px solid var(--job-border-soft);
                }

                /* APPLICATIONS */

                .applications-card {
                    position: sticky;
                    top: 20px;
                    overflow: hidden;
                    background: #fff;
                    border: 1px solid var(--job-border);
                    border-radius: var(--job-radius);
                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, .02),
                        0 5px 20px rgba(0, 0, 0, .035);
                }

                .applications-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 18px 18px 16px;
                    border-bottom: 1px solid var(--job-border-soft);
                }

                .applications-heading {
                    min-width: 0;
                }

                .applications-title {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: -.01em;
                }

                .applications-subtitle {
                    margin: 4px 0 0;
                    color: var(--job-text-muted);
                    font-size: 10.5px;
                }

                .applications-count {
                    min-width: 27px;
                    height: 27px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 8px;
                    border-radius: 8px;
                    background: var(--job-green-light);
                    color: var(--job-green);
                    font-size: 11px;
                    font-weight: 700;
                }

                .applications-list {
                    max-height: 650px;
                    overflow-y: auto;
                }

                .application-item {
                    display: block;
                    padding: 15px 18px;
                    text-decoration: none;
                    color: inherit;
                    border-bottom: 1px solid #f0f0f2;
                    transition: background .15s ease;
                }

                .application-item:hover {
                    background: #fafafa;
                }

                .application-item:last-child {
                    border-bottom: 0;
                }

                .application-top {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                }

                .application-avatar {
                    width: 34px;
                    height: 34px;
                    flex: 0 0 34px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 9px;
                    background: #f1f1f3;
                    color: #555;
                    font-size: 11px;
                    font-weight: 700;
                }

                .application-main {
                    min-width: 0;
                    flex: 1;
                }

                .application-name {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 1.35;
                }

                .application-email {
                    margin: 3px 0 0;
                    color: var(--job-text-secondary);
                    font-size: 10.5px;
                    line-height: 1.35;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .application-bottom {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                    margin-top: 11px;
                    padding-left: 44px;
                }

                .application-date {
                    color: var(--job-text-muted);
                    font-size: 10px;
                }

                .application-status {
                    display: inline-flex;
                    align-items: center;
                    min-height: 21px;
                    padding: 0 7px;
                    border-radius: 6px;
                    font-size: 9px;
                    font-weight: 600;
                }

                .application-status.pending {
                    color: #9a6800;
                    background: #fff7df;
                }

                .application-status.reviewed {
                    color: #2878c8;
                    background: #eef6ff;
                }

                .application-status.shortlisted {
                    color: #167c52;
                    background: #edf8f2;
                }

                .application-status.accepted {
                    color: #167c52;
                    background: #e6f6ed;
                }

                .application-status.rejected {
                    color: #c43d3d;
                    background: #fff0f0;
                }

                .application-resume {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    margin-top: 8px;
                    padding-left: 44px;
                    color: var(--job-green);
                    font-size: 10px;
                    font-weight: 500;
                }

                .application-resume:hover {
                    text-decoration: underline;
                }

                .applications-empty {
                    padding: 45px 20px;
                    text-align: center;
                }

                .applications-empty-icon {
                    width: 40px;
                    height: 40px;
                    margin: 0 auto 10px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 11px;
                    background: #f4f4f5;
                    color: #8a8a8f;
                    font-size: 15px;
                }

                .applications-empty-title {
                    margin: 0;
                    color: var(--job-text);
                    font-size: 12px;
                    font-weight: 600;
                }

                .applications-empty-text {
                    margin: 5px 0 0;
                    color: var(--job-text-muted);
                    font-size: 10.5px;
                    line-height: 1.5;
                }

                .applications-footer {
                    padding: 12px 18px;
                    border-top: 1px solid var(--job-border-soft);
                    background: #fafafa;
                }

                .applications-footer .job-btn {
                    width: 100%;
                }

                /* RESPONSIVE */

                @media (max-width: 1100px) {
                    .job-layout {
                        grid-template-columns: minmax(0, 1fr) 340px;
                    }
                }

                @media (max-width: 900px) {
                    .job-layout {
                        grid-template-columns: 1fr;
                    }

                    .applications-card {
                        position: static;
                    }

                    .applications-list {
                        max-height: none;
                    }
                }

                @media (max-width: 760px) {
                    .fc-job-show {
                        padding: 20px 15px 40px;
                    }

                    .job-page-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .job-page-header .job-btn {
                        width: 100%;
                    }

                    .job-info-grid {
                        grid-template-columns: 1fr;
                    }

                    .job-hero,
                    .job-info-grid,
                    .job-section,
                    .job-footer {
                        padding-left: 19px;
                        padding-right: 19px;
                    }

                    .job-footer .job-btn {
                        width: 100%;
                    }
                }

                @media (max-width: 480px) {
                    .job-hero {
                        gap: 11px;
                    }

                    .job-avatar {
                        width: 42px;
                        height: 42px;
                        flex-basis: 42px;
                        border-radius: 10px;
                        font-size: 13px;
                    }

                    .job-title {
                        font-size: 17px;
                    }

                    .job-company {
                        font-size: 11.5px;
                    }
                }
            `}</style>

            <div className="fc-job-show">

                {/* PAGE HEADER */}
                <div className="job-page-header">
                    <div className="job-page-heading">
                        <h1>Job Details</h1>

                        <p>
                            Review the job information and submitted
                            applications.
                        </p>
                    </div>

                    <Link
                        href={route("admin.jobs.index")}
                        className="job-btn job-btn-secondary"
                    >
                        <i className="bi bi-arrow-left"></i>
                        Back to Jobs
                    </Link>
                </div>

                {/* TWO COLUMN LAYOUT */}
                <div className="job-layout">

                    {/* =========================
                        LEFT — JOB DETAILS
                    ========================== */}
                    <div className="job-card">

                        {/* HERO */}
                        <div className="job-hero">
                            <div className="job-avatar">
                                {initials(job.title)}
                            </div>

                            <div className="job-hero-content">
                                <h2 className="job-title">
                                    {job.title}
                                </h2>

                                {job.company?.name && (
                                    <p className="job-company">
                                        {job.company.name}
                                    </p>
                                )}

                                <div className="job-badges">
                                    <TypeBadge type={job.type} />

                                    {job.experience_level && (
                                        <span className="job-badge badge-outline">
                                            <i className="bi bi-bar-chart me-1"></i>
                                            {job.experience_level}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="job-divider"></div>

                        {/* INFORMATION */}
                        <div className="job-info-grid">

                            <div className="job-info-item">
                                <p className="job-info-label">
                                    <i className="bi bi-geo-alt"></i>
                                    Location
                                </p>

                                <p className="job-info-value">
                                    {job.location || "Not specified"}
                                </p>
                            </div>

                            <div className="job-info-item">
                                <p className="job-info-label">
                                    <i className="bi bi-briefcase"></i>
                                    Employment Type
                                </p>

                                <p className="job-info-value">
                                    {job.type || "Not specified"}
                                </p>
                            </div>

                            <div className="job-info-item">
                                <p className="job-info-label">
                                    <i className="bi bi-cash-stack"></i>
                                    Salary Range
                                </p>

                                <p className="job-info-value">
                                    {job.salary_range || "Not specified"}
                                </p>
                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <div className="job-section">
                            <div className="job-section-header">
                                <div className="job-section-icon">
                                    <i className="bi bi-file-text"></i>
                                </div>

                                <h3 className="job-section-title">
                                    Job Description
                                </h3>
                            </div>

                            {job.description ? (
                                <p className="job-description">
                                    {job.description}
                                </p>
                            ) : (
                                <p className="job-empty">
                                    No description provided.
                                </p>
                            )}
                        </div>

                        {/* SKILLS */}
                        <div className="job-section">
                            <div className="job-section-header">
                                <div className="job-section-icon">
                                    <i className="bi bi-stars"></i>
                                </div>

                                <h3 className="job-section-title">
                                    Skills Required
                                </h3>
                            </div>

                            {skills.length > 0 ? (
                                <div className="job-skills">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={`${skill}-${index}`}
                                            className="job-skill"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <p className="job-empty">
                                    No specific skills listed.
                                </p>
                            )}
                        </div>

                        {/* FOOTER */}
                        <div className="job-footer">
                            <Link
                                href={route(
                                    "admin.jobs.applications",
                                    job.id
                                )}
                                className="job-btn job-btn-primary"
                            >
                                <i className="bi bi-people"></i>
                                View All Applications
                            </Link>
                        </div>
                    </div>

                    {/* =========================
                        RIGHT — APPLICATIONS
                    ========================== */}
                    <aside className="applications-card">

                        <div className="applications-header">

                            <div className="applications-heading">
                                <h2 className="applications-title">
                                    Job Applications
                                </h2>

                                <p className="applications-subtitle">
                                    Applicants for this position
                                </p>
                            </div>

                            <span className="applications-count">
                                {applications.length}
                            </span>

                        </div>

                        <div className="applications-list">

                            {applications.length > 0 ? (

                                applications.map((application) => {

                                    const applicantInitials =
                                        application.name
                                            ?.split(" ")
                                            .filter(Boolean)
                                            .slice(0, 2)
                                            .map(
                                                (word) =>
                                                    word[0]?.toUpperCase()
                                            )
                                            .join("") || "?";

                                    return (
                                        <div
                                            key={application.id}
                                            className="application-item"
                                        >

                                            <div className="application-top">

                                                <div className="application-avatar">
                                                    {applicantInitials}
                                                </div>

                                                <div className="application-main">

                                                    <p className="application-name">
                                                        {application.name ||
                                                            "Unnamed Applicant"}
                                                    </p>

                                                    <p className="application-email">
                                                        {application.email ||
                                                            "No email provided"}
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="application-bottom">

                                                <span className="application-date">
                                                    <i className="bi bi-calendar3 me-1"></i>
                                                    {formatDate(
                                                        application.created_at
                                                    )}
                                                </span>

                                                <ApplicationStatus
                                                    status={
                                                        application.status
                                                    }
                                                />

                                            </div>

                                            {application.resume && (
                                                <a
                                                    href={`/storage/${application.resume}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="application-resume"
                                                >
                                                    <i className="bi bi-file-earmark-pdf"></i>
                                                    View Resume
                                                </a>
                                            )}

                                        </div>
                                    );
                                })

                            ) : (

                                <div className="applications-empty">

                                    <div className="applications-empty-icon">
                                        <i className="bi bi-people"></i>
                                    </div>

                                    <p className="applications-empty-title">
                                        No applications yet
                                    </p>

                                    <p className="applications-empty-text">
                                        Applications submitted for this
                                        position will appear here.
                                    </p>

                                </div>
                            )}

                        </div>

                        {applications.length > 0 && (
                            <div className="applications-footer">

                                <Link
                                    href={route(
                                        "admin.jobs.applications",
                                        job.id
                                    )}
                                    className="job-btn job-btn-primary"
                                >
                                    <i className="bi bi-list-ul"></i>
                                    Manage Applications
                                </Link>

                            </div>
                        )}

                    </aside>

                </div>
            </div>
        </AppLayout>
    );
}