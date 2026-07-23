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
        "full-time": { cls: "badge-success", label: "Full-Time" },
        "part-time": { cls: "badge-info", label: "Part-Time" },
        contract: { cls: "badge-warn", label: "Contract" },
        internship: { cls: "badge-muted", label: "Internship" },
        remote: { cls: "badge-info", label: "Remote" },
    };
    const meta = map[t] ?? { cls: "badge-muted", label: type ?? "N/A" };
    return <span className={`badge ${meta.cls}`}>{meta.label}</span>;
}

export default function Show({ job }) {
    // after
    const skills = Array.isArray(job.skills)
        ? job.skills.map((skill) => String(skill).trim()).filter(Boolean)
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
                href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
                rel="stylesheet"
            />

            <style>{`
                :root {
                    --bg-deep:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-glass:   rgba(0,100,60,0.035);
                    --bg-glass2:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #7f958d;
                    --border:     rgba(0,100,60,0.1);
                    --border-accent: rgba(0,166,103,0.3);
                    --radius-lg:  16px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                    --warn:       #b3820f;
                    --danger:     #c94a3f;
                    --info:       #2f7dbd;
                }

                .fc-job-show, .fc-job-show * { box-sizing: border-box; }
                .fc-job-show {
                    background: var(--bg-deep);
                    color: var(--text-primary);
                    font-family: var(--font-body);
                    padding: 32px;
                    min-height: 100%;
                }
                @media(max-width: 768px) { .fc-job-show { padding: 20px 16px; } }

                .show-header {
                    display: flex; align-items: flex-start; justify-content: space-between;
                    gap: 20px; flex-wrap: wrap;
                    margin-bottom: 24px;
                    max-width: 880px;
                    margin-left: auto; margin-right: auto;
                }
                .show-header h2 {
                    font-family: var(--font-head);
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin: 0 0 4px;
                }
                .show-header p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; }

                .btn-pill {
                    display: inline-flex; align-items: center; gap: 8px;
                    border-radius: var(--radius-pill);
                    padding: 11px 22px;
                    font-family: var(--font-head);
                    font-size: 0.85rem;
                    font-weight: 700;
                    cursor: pointer;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s, box-shadow 0.2s, color 0.2s, border-color 0.2s;
                    white-space: nowrap;
                    border: none;
                }
                .btn-pill.primary {
                    background: var(--accent);
                    color: #fff;
                    box-shadow: 0 4px 18px var(--accent-glow);
                }
                .btn-pill.primary:hover { background: var(--accent-dim); transform: translateY(-1px); }
                .btn-pill.secondary {
                    background: transparent;
                    color: var(--text-secondary);
                    border: 1px solid var(--border);
                }
                .btn-pill.secondary:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-glass2); }
                .btn-pill.success {
                    background: transparent;
                    color: var(--accent);
                    border: 1px solid var(--border-accent);
                }
                .btn-pill.success:hover { background: var(--bg-glass2); }

                /* ── Main card ── */
                .job-card {
                    max-width: 880px;
                    margin: 0 auto;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                    overflow: hidden;
                }
                .job-card-top {
                    padding: 28px 32px 24px;
                    border-bottom: 1px solid var(--border);
                    display: flex; align-items: flex-start; gap: 18px; flex-wrap: wrap;
                }
                .job-avatar-lg {
                    width: 56px; height: 56px; border-radius: 14px; flex-shrink: 0;
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-head);
                    font-weight: 800;
                    font-size: 1.1rem;
                }
                .job-title-block { flex: 1; min-width: 220px; }
                .job-title-block h3 {
                    font-family: var(--font-head);
                    font-size: 1.3rem;
                    font-weight: 800;
                    margin: 0 0 6px;
                }
                .job-company {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    font-weight: 600;
                    margin: 0 0 10px;
                }
                .job-meta-row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }

                .badge {
                    display: inline-flex; align-items: center; gap: 5px;
                    border-radius: var(--radius-pill);
                    padding: 5px 13px;
                    font-size: 0.74rem;
                    font-weight: 700;
                    white-space: nowrap;
                }
                .badge-success { background: rgba(0,166,103,0.12); color: var(--accent); }
                .badge-info { background: rgba(47,125,189,0.12); color: var(--info); }
                .badge-warn { background: rgba(179,130,15,0.12); color: var(--warn); }
                .badge-muted { background: rgba(127,149,141,0.14); color: var(--text-muted); }
                .badge-outline {
                    background: transparent;
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                }

                /* ── Info grid ── */
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 14px;
                    padding: 24px 32px;
                    border-bottom: 1px solid var(--border);
                }
                @media(max-width: 700px) { .info-grid { grid-template-columns: repeat(2, 1fr); } }
                .info-item {
                    background: var(--bg-glass);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 14px 16px;
                }
                .info-item p {
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-muted);
                    margin: 0 0 6px;
                    display: flex; align-items: center; gap: 6px;
                }
                .info-item h6 {
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0;
                }

                /* ── Description / skills ── */
                .job-section { padding: 26px 32px; border-bottom: 1px solid var(--border); }
                .job-section:last-of-type { border-bottom: none; }
                .job-section h5 {
                    font-family: var(--font-head);
                    font-size: 0.95rem;
                    font-weight: 700;
                    margin: 0 0 14px;
                    display: flex; align-items: center; gap: 8px;
                }
                .job-section h5 i { color: var(--accent); }
                .job-description {
                    font-size: 0.9rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    white-space: pre-line;
                    margin: 0;
                }
                .skills-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
                .skill-chip {
                    background: var(--bg-glass2);
                    border: 1px solid var(--border-accent);
                    color: var(--accent);
                    border-radius: var(--radius-pill);
                    padding: 6px 14px;
                    font-size: 0.78rem;
                    font-weight: 600;
                }

                .job-card-footer {
                    padding: 24px 32px 28px;
                    display: flex;
                    justify-content: flex-start;
                }

                .empty-hint { font-size: 0.85rem; color: var(--text-muted); font-style: italic; }

                @media(max-width: 700px) {
                    .job-card-top, .info-grid, .job-section, .job-card-footer { padding-left: 20px; padding-right: 20px; }
                }
            `}</style>

            <div className="fc-job-show">
                <div className="show-header">
                    <div>
                        <h2>Job Details</h2>
                        <p>Full listing information as seen by applicants.</p>
                    </div>
                    <Link
                        href={route("admin.jobs.index")}
                        className="btn-pill secondary"
                    >
                        <i className="bi bi-arrow-left"></i> Back to Jobs
                    </Link>
                </div>

                <div className="job-card">
                    {/* ═══════ TOP: title, company, quick badges ═══════ */}
                    <div className="job-card-top">
                        <div className="job-avatar-lg">
                            {initials(job.title)}
                        </div>
                        <div className="job-title-block">
                            <h3>{job.title}</h3>
                            {job.company?.name && (
                                <p className="job-company">
                                    {job.company.name}
                                </p>
                            )}
                            <div className="job-meta-row">
                                <TypeBadge type={job.type} />
                                {job.experience_level && (
                                    <span className="badge badge-outline">
                                        <i className="bi bi-bar-chart"></i>{" "}
                                        {job.experience_level}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ═══════ INFO GRID ═══════ */}
                    <div className="info-grid">
                        <div className="info-item">
                            <p>
                                <i className="bi bi-geo-alt"></i> Location
                            </p>
                            <h6>{job.location ?? "Not specified"}</h6>
                        </div>
                        <div className="info-item">
                            <p>
                                <i className="bi bi-briefcase"></i> Type
                            </p>
                            <h6>{job.type ?? "N/A"}</h6>
                        </div>
                        <div className="info-item">
                            <p>
                                <i className="bi bi-cash-stack"></i> Salary
                                Range
                            </p>
                            <h6>{job.salary_range ?? "N/A"}</h6>
                        </div>
                    </div>

                    {/* ═══════ DESCRIPTION ═══════ */}
                    <div className="job-section">
                        <h5>
                            <i className="bi bi-file-text"></i> Job Description
                        </h5>
                        {job.description ? (
                            <p className="job-description">{job.description}</p>
                        ) : (
                            <p className="empty-hint">
                                No description provided.
                            </p>
                        )}
                    </div>

                    {/* ═══════ SKILLS ═══════ */}
                    <div className="job-section">
                        <h5>
                            <i className="bi bi-stars"></i> Skills Required
                        </h5>
                        {skills.length > 0 ? (
                            <div className="skills-wrap">
                                {skills.map((skill, i) => (
                                    <span key={i} className="skill-chip">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="empty-hint">
                                No specific skills listed.
                            </p>
                        )}
                    </div>

                    {/* ═══════ FOOTER ACTION ═══════ */}
                    <div className="job-card-footer">
                        <Link
                            href={route("admin.jobs.applications", job.id)}
                            className="btn-pill success"
                        >
                            <i className="bi bi-people"></i> View Applications
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
