import React, { useMemo, useState } from "react";
import { usePage, Link } from "@inertiajs/react";
import UserPanelLayout from "@/Layouts/UserPanelLayout";

function r(name, params) {
    try {
        return route(name, params);
    } catch (e) {
        console.warn(`route("${name}") failed — check Ziggy config.`);
        return "#";
    }
}

function formatDate(dateStr) {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

function levelLabel(level) {
    if (!level) return null;
    return String(level).charAt(0).toUpperCase() + String(level).slice(1);
}

const STATUS_META = {
    completed: { label: "Completed", cls: "success", icon: "ti-circle-check" },
    in_progress: { label: "In progress", cls: "warning", icon: "ti-player-play" },
    enrolled: { label: "Not started", cls: "muted", icon: "ti-player-play" },
    dropped: { label: "Dropped", cls: "danger", icon: "ti-circle-x" },
};

function statusMeta(status, progress) {
    const key = (status || "").toLowerCase();
    if (STATUS_META[key]) return STATUS_META[key];
    // fall back to progress-based inference if status doesn't match known values
    if (Number(progress) >= 100) return STATUS_META.completed;
    if (Number(progress) > 0) return STATUS_META.in_progress;
    return STATUS_META.enrolled;
}

const FILTERS = [
    { key: "all", label: "All" },
    { key: "in_progress", label: "In progress" },
    { key: "completed", label: "Completed" },
];

export default function Courses() {
    const { props } = usePage();
    const enrollments = props?.enrollments || [];
    const [filter, setFilter] = useState("all");

    const withMeta = useMemo(
        () =>
            enrollments.map((e) => ({
                ...e,
                _meta: statusMeta(e.status, e.progress),
            })),
        [enrollments]
    );

    const counts = useMemo(() => {
        const c = { all: withMeta.length, in_progress: 0, completed: 0 };
        withMeta.forEach((e) => {
            if (e._meta.label === "Completed") c.completed++;
            else if (e._meta.label === "In progress") c.in_progress++;
        });
        return c;
    }, [withMeta]);

    const filtered = useMemo(() => {
        if (filter === "all") return withMeta;
        if (filter === "completed") return withMeta.filter((e) => e._meta.label === "Completed");
        if (filter === "in_progress") return withMeta.filter((e) => e._meta.label === "In progress");
        return withMeta;
    }, [withMeta, filter]);

    const overallAvgProgress = enrollments.length
        ? Math.round(enrollments.reduce((sum, e) => sum + (Number(e.progress) || 0), 0) / enrollments.length)
        : 0;

    return (
        <>
            <style>{`
        .cs-wrap * { box-sizing: border-box; }
        .cs-wrap {
          --cs-green: var(--up-green, #48d597);
          --cs-surface: var(--up-surface, #141d20);
          --cs-surface2: var(--up-surface2, #1a2428);
          --cs-border: var(--up-border, rgba(0,166,103,0.16));
          --cs-border-h: var(--up-border-h, rgba(0,166,103,0.34));
          --cs-text: var(--up-text, #e8f0ed);
          --cs-muted: var(--up-muted, #7a9a8e);
          font-family: "DM Sans", "IBM Plex Sans", sans-serif;
          color: var(--cs-text);
        }

        .cs-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 22px; }
        .cs-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cs-green); margin: 0 0 6px; }
        .cs-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 26px; margin: 0; }
        .cs-subtitle { font-size: 13.5px; color: var(--cs-muted); margin: 6px 0 0; }

        /* Stat strip */
        .cs-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 22px; }
        .cs-stat {
          background: var(--cs-surface); border: 1px solid var(--cs-border); border-radius: 14px; padding: 16px 18px;
          display: flex; align-items: center; gap: 12px;
        }
        .cs-stat-icon {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0; background: rgba(72,213,151,0.12);
          color: var(--cs-green); display: flex; align-items: center; justify-content: center; font-size: 17px;
        }
        .cs-stat-value { font-family: "Syne", sans-serif; font-weight: 700; font-size: 19px; line-height: 1.1; }
        .cs-stat-label { font-size: 12px; color: var(--cs-muted); }
        @media (max-width: 640px) { .cs-stats { grid-template-columns: 1fr; } }

        .cs-tabs { display: flex; gap: 6px; margin-bottom: 20px; flex-wrap: wrap; }
        .cs-tab {
          display: flex; align-items: center; gap: 7px; padding: 8px 14px; border-radius: 999px;
          border: 1px solid var(--cs-border); background: var(--cs-surface); color: var(--cs-muted);
          font-size: 12.5px; font-weight: 600; cursor: pointer; transition: all 0.15s;
        }
        .cs-tab:hover { border-color: var(--cs-border-h); color: var(--cs-text); }
        .cs-tab.active { background: var(--cs-green); color: #06231a; border-color: var(--cs-green); }
        .cs-tab .n { font-size: 11px; opacity: 0.8; }

        .cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 1080px) { .cs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 680px) { .cs-grid { grid-template-columns: 1fr; } }

        .cs-card {
          background: var(--cs-surface); border: 1px solid var(--cs-border); border-radius: 16px; overflow: hidden;
          display: flex; flex-direction: column; transition: border-color 0.15s;
        }
        .cs-card:hover { border-color: var(--cs-border-h); }
        .cs-thumb { width: 100%; height: 140px; object-fit: cover; background: var(--cs-surface2); display: block; }
        .cs-thumb-fallback {
          width: 100%; height: 140px; background: linear-gradient(135deg, rgba(72,213,151,0.18), rgba(72,213,151,0.04));
          display: flex; align-items: center; justify-content: center; color: var(--cs-green); font-size: 30px;
        }
        .cs-card-body { padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .cs-card-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .cs-cat { font-size: 11px; color: var(--cs-muted); text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600; }
        .cs-badge {
          display: inline-flex; align-items: center; gap: 4px; padding: 3px 9px; border-radius: 999px;
          font-size: 10.5px; font-weight: 700; white-space: nowrap;
        }
        .cs-badge-success { background: rgba(72,213,151,0.14); color: var(--cs-green); }
        .cs-badge-warning { background: rgba(240,180,60,0.14); color: #f0b43c; }
        .cs-badge-muted { background: var(--cs-surface2); color: var(--cs-muted); }
        .cs-badge-danger { background: rgba(255,107,107,0.14); color: #ff6b6b; }

        .cs-card-title { font-size: 14.5px; font-weight: 700; margin: 0; line-height: 1.35; }
        .cs-instructor { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--cs-muted); }
        .cs-instructor i { color: var(--cs-green); font-size: 13px; }

        .cs-progress-row { display: flex; align-items: center; justify-content: space-between; font-size: 11.5px; color: var(--cs-muted); }
        .cs-progress-bar { height: 6px; border-radius: 4px; background: var(--cs-surface2); overflow: hidden; }
        .cs-progress-fill { height: 100%; background: var(--cs-green); border-radius: 4px; transition: width 0.3s; }

        .cs-card-footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: auto; padding-top: 4px; }
        .cs-enrolled-date { font-size: 11px; color: var(--cs-muted); }
        .cs-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 9px;
          background: var(--cs-green); color: #06231a; font-size: 12.5px; font-weight: 700;
          text-decoration: none; white-space: nowrap; transition: opacity 0.15s;
        }
        .cs-btn:hover { opacity: 0.9; }
        .cs-btn-outline { background: transparent; border: 1px solid var(--cs-border); color: var(--cs-text); }
        .cs-btn-outline:hover { border-color: var(--cs-border-h); }

        .cs-empty {
          text-align: center; padding: 60px 20px; background: var(--cs-surface); border: 1px solid var(--cs-border);
          border-radius: 16px; color: var(--cs-muted);
        }
        .cs-empty i { font-size: 34px; color: var(--cs-green); margin-bottom: 12px; display: block; }
        .cs-empty h6 { font-family: "Syne", sans-serif; color: var(--cs-text); font-size: 15px; margin: 0 0 6px; }
        .cs-empty p { font-size: 13px; margin: 0 0 18px; }
      `}</style>

            <div className="cs-wrap">
                <div className="cs-head">
                    <div>
                        <p className="cs-eyebrow">Learning</p>
                        <h1 className="cs-title">My courses</h1>
                        <p className="cs-subtitle">Track your progress across every course you're enrolled in.</p>
                    </div>
                    <Link href={r("user.courses.browse")} className="cs-btn cs-btn-outline">
                        <i className="ti ti-plus" /> Browse courses
                    </Link>
                </div>

                <div className="cs-stats">
                    <div className="cs-stat">
                        <span className="cs-stat-icon">
                            <i className="ti ti-book-2" />
                        </span>
                        <div>
                            <div className="cs-stat-value">{enrollments.length}</div>
                            <div className="cs-stat-label">Enrolled courses</div>
                        </div>
                    </div>
                    <div className="cs-stat">
                        <span className="cs-stat-icon">
                            <i className="ti ti-circle-check" />
                        </span>
                        <div>
                            <div className="cs-stat-value">{counts.completed}</div>
                            <div className="cs-stat-label">Completed</div>
                        </div>
                    </div>
                    <div className="cs-stat">
                        <span className="cs-stat-icon">
                            <i className="ti ti-chart-arcs" />
                        </span>
                        <div>
                            <div className="cs-stat-value">{overallAvgProgress}%</div>
                            <div className="cs-stat-label">Average progress</div>
                        </div>
                    </div>
                </div>

                <div className="cs-tabs">
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            className={`cs-tab${filter === f.key ? " active" : ""}`}
                            onClick={() => setFilter(f.key)}
                            type="button"
                        >
                            {f.label} <span className="n">({counts[f.key]})</span>
                        </button>
                    ))}
                </div>

                {filtered.length === 0 ? (
                    <div className="cs-empty">
                        <i className="ti ti-book-2" />
                        <h6>No courses {filter !== "all" ? `(${FILTERS.find((f) => f.key === filter)?.label.toLowerCase()})` : "yet"}</h6>
                        <p>Enroll in a course to start tracking your learning progress here.</p>
                        <Link href={r("user.courses.browse")} className="cs-btn">
                            <i className="ti ti-search" /> Browse courses
                        </Link>
                    </div>
                ) : (
                    <div className="cs-grid">
                        {filtered.map((enrollment) => {
                            const course = enrollment.course || {};
                            const meta = enrollment._meta;
                            const progress = Math.min(100, Math.max(0, Number(enrollment.progress) || 0));

                            return (
                                <div className="cs-card" key={enrollment.id}>
                                    {course.thumbnail ? (
                                        <img className="cs-thumb" src={`/image/courses/${course.thumbnail}`} alt={course.title} />
                                    ) : (
                                        <div className="cs-thumb-fallback">
                                            <i className="ti ti-book-2" />
                                        </div>
                                    )}

                                    <div className="cs-card-body">
                                        <div className="cs-card-top">
                                            <span className="cs-cat">{course.category?.name || "General"}</span>
                                            <span className={`cs-badge cs-badge-${meta.cls}`}>
                                                <i className={`ti ${meta.icon}`} /> {meta.label}
                                            </span>
                                        </div>

                                        <h6 className="cs-card-title">{course.title}</h6>

                                        {course.talent?.name && (
                                            <div className="cs-instructor">
                                                <i className="ti ti-user" /> {course.talent.name}
                                            </div>
                                        )}

                                        <div>
                                            <div className="cs-progress-row">
                                                <span>Progress</span>
                                                <span>{progress}%</span>
                                            </div>
                                            <div className="cs-progress-bar" style={{ marginTop: 5 }}>
                                                <div className="cs-progress-fill" style={{ width: `${progress}%` }} />
                                            </div>
                                        </div>

                                        <div className="cs-card-footer">
                                            <span className="cs-enrolled-date">Enrolled {formatDate(enrollment.created_at)}</span>
                                            <Link href={r("user.courses.show", course.id)} className="cs-btn">
                                                {meta.label === "Completed" ? (
                                                    <>
                                                        <i className="ti ti-eye" /> Review
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="ti ti-player-play" /> Continue
                                                    </>
                                                )}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

Courses.layout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
