import React, { useState } from "react";
import { usePage, useForm, Link } from "@inertiajs/react";
import UserPanelLayout from "@/Layouts/UserPanelLayout";

function r(name, params) {
    try {
        return route(name, params);
    } catch (e) {
        console.warn(`route("${name}") failed — check Ziggy config.`);
        return "#";
    }
}

function getInitials(name) {
    if (!name || typeof name !== "string") return "?";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "?";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatDate(dateStr) {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

function Stars({ value = 0 }) {
    const full = Math.round(value);
    return (
        <span className="td-stars" aria-label={`${value} out of 5`}>
            {[1, 2, 3, 4, 5].map((n) => (
                <i key={n} className={`ti ${n <= full ? "ti-star-filled" : "ti-star"}`} />
            ))}
        </span>
    );
}

const TABS = [
    { key: "about", label: "About" },
    { key: "skills", label: "Skills" },
    { key: "stories", label: "Portfolio" },
    { key: "feedback", label: "Reviews" },
];

export default function TalentShow() {
    const { props } = usePage();
    const talent = props?.talent || {};
    const currentUser = props?.auth?.user || null;
    const skills = talent.skills || [];
    const stories = talent.stories || [];
    const feedback = talent.feedback || [];

    const [tab, setTab] = useState("about");
    const [modalOpen, setModalOpen] = useState(false);
    const [sent, setSent] = useState(false);

    const avgRating = feedback.length
        ? feedback.reduce((sum, f) => sum + (Number(f.rating) || 0), 0) / feedback.length
        : 0;

    const form = useForm({
        name: currentUser?.name || "",
        email: currentUser?.email || "",
        message: "",
    });

    const submitConnection = (e) => {
        e.preventDefault();
        form.post(r("user.talents.connect", talent.id), {
            preserveScroll: true,
            onSuccess: () => {
                setSent(true);
                form.reset("message");
            },
        });
    };

    return (
        <>
            <style>{`
        .td-wrap * { box-sizing: border-box; }
        .td-wrap {
          --td-green: var(--up-green, #48d597);
          --td-surface: var(--up-surface, #141d20);
          --td-surface2: var(--up-surface2, #1a2428);
          --td-border: var(--up-border, rgba(0,166,103,0.16));
          --td-border-h: var(--up-border-h, rgba(0,166,103,0.34));
          --td-text: var(--up-text, #e8f0ed);
          --td-muted: var(--up-muted, #7a9a8e);
          font-family: "DM Sans", "IBM Plex Sans", sans-serif;
          color: var(--td-text);
        }

        .td-breadcrumb { font-size: 12.5px; color: var(--td-muted); margin-bottom: 18px; display: flex; align-items: center; gap: 6px; }
        .td-breadcrumb a { color: var(--td-muted); text-decoration: none; }
        .td-breadcrumb a:hover { color: var(--td-green); }
        .td-breadcrumb .cur { color: var(--td-text); }

        /* Hero */
        .td-hero {
          background: var(--td-surface); border: 1px solid var(--td-border); border-radius: 18px;
          padding: 28px; display: flex; gap: 22px; align-items: flex-start; flex-wrap: wrap; margin-bottom: 20px;
          position: relative; overflow: hidden;
        }
        .td-hero::before {
          content: ""; position: absolute; top: -60px; right: -60px; width: 220px; height: 220px;
          background: radial-gradient(circle, rgba(72,213,151,0.15), transparent 70%); pointer-events: none;
        }
        .td-avatar {
          width: 108px; height: 108px; border-radius: 20px; overflow: hidden; flex-shrink: 0;
          background: var(--td-green); color: #06231a; display: flex; align-items: center; justify-content: center;
          font-family: "Syne", sans-serif; font-weight: 700; font-size: 34px; position: relative; z-index: 1;
        }
        .td-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .td-hero-info { flex: 1; min-width: 220px; position: relative; z-index: 1; }
        .td-name-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 6px; }
        .td-name { font-family: "Syne", sans-serif; font-weight: 700; font-size: 24px; margin: 0; }
        .td-featured {
          display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: 999px;
          background: rgba(240,180,60,0.14); color: #f0b43c; font-size: 11px; font-weight: 700;
        }
        .td-meta { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; color: var(--td-muted); font-size: 13px; margin-bottom: 12px; }
        .td-meta span { display: flex; align-items: center; gap: 5px; }
        .td-meta i { color: var(--td-green); font-size: 15px; }
        .td-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .td-tag {
          padding: 4px 11px; border-radius: 999px; background: var(--td-surface2); border: 1px solid var(--td-border);
          font-size: 11.5px; color: var(--td-text); font-weight: 600;
        }
        .td-stars { display: inline-flex; gap: 2px; }
        .td-stars i { font-size: 14px; color: #f0b43c; }
        .td-rating-row { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
        .td-rating-num { font-size: 13px; color: var(--td-muted); }

        .td-hero-actions { display: flex; flex-direction: column; gap: 10px; position: relative; z-index: 1; }
        .td-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 11px 20px; border-radius: 10px;
          border: none; background: var(--td-green); color: #06231a; font-size: 13.5px; font-weight: 700;
          cursor: pointer; transition: opacity 0.15s; font-family: inherit; white-space: nowrap;
        }
        .td-btn:hover { opacity: 0.9; }
        .td-btn-ghost { background: transparent; border: 1px solid var(--td-border); color: var(--td-text); }
        .td-btn-ghost:hover { border-color: var(--td-border-h); }

        /* Layout */
        .td-grid { display: grid; grid-template-columns: 1fr 300px; gap: 20px; align-items: start; }
        @media (max-width: 900px) { .td-grid { grid-template-columns: 1fr; } }

        .td-panel { background: var(--td-surface); border: 1px solid var(--td-border); border-radius: 16px; padding: 24px; }

        .td-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--td-border); margin-bottom: 20px; }
        .td-tab {
          padding: 10px 16px; border: none; background: transparent; color: var(--td-muted); font-size: 13.5px;
          font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: all 0.15s;
        }
        .td-tab:hover { color: var(--td-text); }
        .td-tab.active { color: var(--td-green); border-color: var(--td-green); }

        .td-section-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 15px; margin: 0 0 12px; }
        .td-desc { font-size: 13.5px; line-height: 1.75; color: var(--td-text); }

        .td-skills-list { display: flex; flex-direction: column; gap: 12px; }
        .td-skill-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .td-skill-name { font-size: 13.5px; font-weight: 500; }
        .td-skill-bar { flex: 1; height: 6px; border-radius: 4px; background: var(--td-surface2); margin: 0 14px; overflow: hidden; }
        .td-skill-bar-fill { height: 100%; background: var(--td-green); border-radius: 4px; }
        .td-skill-level { font-size: 12px; color: var(--td-muted); width: 40px; text-align: right; }

        .td-stories-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        @media (max-width: 640px) { .td-stories-grid { grid-template-columns: 1fr; } }
        .td-story-card { border: 1px solid var(--td-border); border-radius: 12px; overflow: hidden; }
        .td-story-img { width: 100%; height: 130px; object-fit: cover; background: var(--td-surface2); }
        .td-story-body { padding: 12px 14px; }
        .td-story-title { font-size: 13.5px; font-weight: 600; margin: 0 0 4px; }
        .td-story-desc { font-size: 12px; color: var(--td-muted); margin: 0; line-height: 1.5; }

        .td-feedback-item { padding: 16px 0; border-bottom: 1px solid var(--td-border); }
        .td-feedback-item:last-child { border-bottom: none; padding-bottom: 0; }
        .td-feedback-head { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .td-fb-avatar {
          width: 32px; height: 32px; border-radius: 50%; background: var(--td-surface2); color: var(--td-text);
          display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; font-family: "Syne", sans-serif;
        }
        .td-fb-name { font-size: 13px; font-weight: 600; }
        .td-fb-date { font-size: 11.5px; color: var(--td-muted); margin-left: auto; }
        .td-fb-comment { font-size: 13px; color: var(--td-text); line-height: 1.6; margin: 0; }

        .td-empty { text-align: center; padding: 30px 10px; color: var(--td-muted); font-size: 13px; }

        /* Side card */
        .td-side-card { background: var(--td-surface); border: 1px solid var(--td-border); border-radius: 16px; padding: 20px; margin-bottom: 16px; }
        .td-side-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 13.5px; margin: 0 0 14px; }
        .td-contact-row { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--td-text); padding: 9px 0; border-bottom: 1px solid var(--td-border); }
        .td-contact-row:last-child { border-bottom: none; }
        .td-contact-row i { color: var(--td-green); font-size: 15px; width: 18px; }

        /* Modal */
        .td-modal-overlay {
          position: fixed; inset: 0; background: rgba(6,10,11,0.6); display: flex; align-items: center; justify-content: center;
          z-index: 200; padding: 20px; backdrop-filter: blur(2px);
        }
        .td-modal {
          background: var(--td-surface); border: 1px solid var(--td-border); border-radius: 16px; width: 100%; max-width: 440px;
          padding: 26px; max-height: 90vh; overflow-y: auto;
        }
        .td-modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
        .td-modal-title { font-family: "Syne", sans-serif; font-weight: 700; font-size: 17px; margin: 0; }
        .td-modal-close { background: none; border: none; color: var(--td-muted); font-size: 18px; cursor: pointer; }
        .td-modal-sub { font-size: 12.5px; color: var(--td-muted); margin: 0 0 18px; }

        .td-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
        .td-label { font-size: 12px; font-weight: 600; }
        .td-input {
          width: 100%; padding: 10px 12px; border-radius: 9px; border: 1px solid var(--td-border);
          background: var(--td-surface2); color: var(--td-text); font-size: 13px; font-family: inherit;
        }
        .td-input:focus { outline: none; border-color: var(--td-green); }
        textarea.td-input { resize: vertical; }
        .td-field-error { font-size: 11.5px; color: #ff6b6b; }

        .td-success { text-align: center; padding: 20px 10px; }
        .td-success i { font-size: 40px; color: var(--td-green); margin-bottom: 10px; display: block; }
        .td-success h6 { font-family: "Syne", sans-serif; margin: 0 0 6px; }
        .td-success p { font-size: 13px; color: var(--td-muted); margin: 0; }
      `}</style>

            <div className="td-wrap">
                <div className="td-breadcrumb">
                    <Link href={r("user.dashboard")}>Dashboard</Link>
                    <span>/</span>
                    <Link href={r("user.talents.connected")}>Talents</Link>
                    <span>/</span>
                    <span className="cur">{talent.name}</span>
                </div>

                {/* Hero */}
                <div className="td-hero">
                    <span className="td-avatar">
                        {talent.image ? <img src={`/image/talents/${talent.image}`} alt={talent.name} /> : getInitials(talent.name)}
                    </span>

                    <div className="td-hero-info">
                        <div className="td-name-row">
                            <h1 className="td-name">{talent.name}</h1>
                            {talent.featured && (
                                <span className="td-featured">
                                    <i className="ti ti-award" /> Featured
                                </span>
                            )}
                        </div>

                        <div className="td-meta">
                            {talent.category?.name && (
                                <span>
                                    <i className="ti ti-briefcase" /> {talent.category.name}
                                </span>
                            )}
                            {talent.address && (
                                <span>
                                    <i className="ti ti-map-pin" /> {talent.address}
                                </span>
                            )}
                            {talent.language && (
                                <span>
                                    <i className="ti ti-language" /> {talent.language}
                                </span>
                            )}
                            {talent.level && (
                                <span>
                                    <i className="ti ti-stairs-up" /> {talent.level}
                                </span>
                            )}
                        </div>

                        {feedback.length > 0 && (
                            <div className="td-rating-row">
                                <Stars value={avgRating} />
                                <span className="td-rating-num">
                                    {avgRating.toFixed(1)} ({feedback.length} review{feedback.length !== 1 ? "s" : ""})
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="td-hero-actions">
                        <button className="td-btn" onClick={() => setModalOpen(true)} type="button">
                            <i className="ti ti-send" /> Connect
                        </button>
                        {talent.phone && (
                            <a className="td-btn td-btn-ghost" href={`tel:${talent.phone}`}>
                                <i className="ti ti-phone" /> Call
                            </a>
                        )}
                    </div>
                </div>

                <div className="td-grid">
                    {/* Main content */}
                    <div className="td-panel">
                        <div className="td-tabs">
                            {TABS.map((t) => (
                                <button key={t.key} className={`td-tab${tab === t.key ? " active" : ""}`} onClick={() => setTab(t.key)} type="button">
                                    {t.label}
                                    {t.key === "skills" && skills.length > 0 && ` (${skills.length})`}
                                    {t.key === "stories" && stories.length > 0 && ` (${stories.length})`}
                                    {t.key === "feedback" && feedback.length > 0 && ` (${feedback.length})`}
                                </button>
                            ))}
                        </div>

                        {tab === "about" && (
                            <div>
                                <h6 className="td-section-title">About {talent.name}</h6>
                                <p className="td-desc">{talent.description || "No description provided yet."}</p>
                            </div>
                        )}

                        {tab === "skills" && (
                            <div>
                                <h6 className="td-section-title">Skills</h6>
                                {skills.length === 0 ? (
                                    <div className="td-empty">No skills listed yet.</div>
                                ) : (
                                    <div className="td-skills-list">
                                        {skills.map((s) => (
                                            <div className="td-skill-row" key={s.id}>
                                                <span className="td-skill-name">{s.name}</span>
                                                <span className="td-skill-bar">
                                                    <span
                                                        className="td-skill-bar-fill"
                                                        style={{ width: `${Math.min(100, Number(s.level) || 60)}%` }}
                                                    />
                                                </span>
                                                <span className="td-skill-level">{s.level ? `${s.level}%` : ""}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {tab === "stories" && (
                            <div>
                                <h6 className="td-section-title">Portfolio</h6>
                                {stories.length === 0 ? (
                                    <div className="td-empty">No portfolio items yet.</div>
                                ) : (
                                    <div className="td-stories-grid">
                                        {stories.map((s) => (
                                            <div className="td-story-card" key={s.id}>
                                                {s.image && <img className="td-story-img" src={`/image/stories/${s.image}`} alt={s.title} />}
                                                <div className="td-story-body">
                                                    <p className="td-story-title">{s.title}</p>
                                                    <p className="td-story-desc">{s.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {tab === "feedback" && (
                            <div>
                                <h6 className="td-section-title">Reviews</h6>
                                {feedback.length === 0 ? (
                                    <div className="td-empty">No reviews yet.</div>
                                ) : (
                                    feedback.map((f) => (
                                        <div className="td-feedback-item" key={f.id}>
                                            <div className="td-feedback-head">
                                                <span className="td-fb-avatar">{getInitials(f.name || f.user?.name)}</span>
                                                <span className="td-fb-name">{f.name || f.user?.name || "Anonymous"}</span>
                                                <span className="td-fb-date">{formatDate(f.created_at)}</span>
                                            </div>
                                            <Stars value={Number(f.rating) || 0} />
                                            <p className="td-fb-comment" style={{ marginTop: 6 }}>
                                                {f.comment}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="td-side-card">
                            <h6 className="td-side-title">Contact information</h6>
                            {talent.email && (
                                <div className="td-contact-row">
                                    <i className="ti ti-mail" /> {talent.email}
                                </div>
                            )}
                            {talent.phone && (
                                <div className="td-contact-row">
                                    <i className="ti ti-phone" /> {talent.phone}
                                </div>
                            )}
                            {talent.address && (
                                <div className="td-contact-row">
                                    <i className="ti ti-map-pin" /> {talent.address}
                                </div>
                            )}
                        </div>

                        <div className="td-side-card">
                            <h6 className="td-side-title">Details</h6>
                            <div className="td-contact-row">
                                <i className="ti ti-category" /> {talent.category?.name || "Uncategorized"}
                            </div>
                            <div className="td-contact-row">
                                <i className="ti ti-language" /> {talent.language || "—"}
                            </div>
                            <div className="td-contact-row">
                                <i className="ti ti-stairs-up" /> {talent.level || "—"}
                            </div>
                            <div className="td-contact-row">
                                <i className="ti ti-calendar" /> Joined {formatDate(talent.created_at)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div
                    className="td-modal-overlay"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setModalOpen(false);
                            setSent(false);
                        }
                    }}
                >
                    <div className="td-modal">
                        {sent ? (
                            <div className="td-success">
                                <i className="ti ti-circle-check" />
                                <h6>Request sent</h6>
                                <p>{talent.name} will receive your message and can respond via your connections page.</p>
                                <button
                                    className="td-btn"
                                    style={{ marginTop: 18, width: "100%" }}
                                    onClick={() => {
                                        setModalOpen(false);
                                        setSent(false);
                                    }}
                                    type="button"
                                >
                                    Done
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="td-modal-head">
                                    <h5 className="td-modal-title">Connect with {talent.name}</h5>
                                    <button className="td-modal-close" onClick={() => setModalOpen(false)} type="button">
                                        <i className="ti ti-x" />
                                    </button>
                                </div>
                                <p className="td-modal-sub">Send a short message to introduce yourself and start the conversation.</p>

                                <form onSubmit={submitConnection}>
                                    <div className="td-field">
                                        <label className="td-label">Your name</label>
                                        <input
                                            className="td-input"
                                            value={form.data.name}
                                            onChange={(e) => form.setData("name", e.target.value)}
                                        />
                                        {form.errors.name && <span className="td-field-error">{form.errors.name}</span>}
                                    </div>
                                    <div className="td-field">
                                        <label className="td-label">Your email</label>
                                        <input
                                            type="email"
                                            className="td-input"
                                            value={form.data.email}
                                            onChange={(e) => form.setData("email", e.target.value)}
                                        />
                                        {form.errors.email && <span className="td-field-error">{form.errors.email}</span>}
                                    </div>
                                    <div className="td-field">
                                        <label className="td-label">Message</label>
                                        <textarea
                                            className="td-input"
                                            rows={4}
                                            placeholder={`Hi ${talent.name}, I'd like to discuss...`}
                                            value={form.data.message}
                                            onChange={(e) => form.setData("message", e.target.value)}
                                        />
                                        {form.errors.message && <span className="td-field-error">{form.errors.message}</span>}
                                    </div>

                                    <button className="td-btn" style={{ width: "100%" }} type="submit" disabled={form.processing}>
                                        {form.processing ? "Sending..." : "Send request"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

TalentShow.layout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
