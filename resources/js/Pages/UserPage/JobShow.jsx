import React, { useRef, useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";


const DEFAULT_ROUTES = {
  "user.jobs.index": "/jobs",
  "user.jobs.show": "/jobs/:id",
  "user.jobs.apply": "/jobs",
  pricing: "/pricing",
};

const MIN_COVER_LETTER_LENGTH = 50;
const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_RESUME_EXT = /\.(pdf|doc|docx)$/i;

export default function JobShow({
  job,
  categories = [],
  recent = [],
  filters = {},
  routes = {},
  assetBase = "",
  showSubscribeModal = false,
}) {
  const r = (name) => routes[name] || DEFAULT_ROUTES[name] || "#";
  const asset = (path) => `${assetBase}${path}`;
  const applyUrl = job.apply_url || `${r("user.jobs.apply")}/${job.id}`;
  const jobShowUrl = (aJob) => aJob.show_url || `${r("user.jobs.show")}/${aJob.id}`;

  // ── Bootstrap Modal instances, via refs (same reliable pattern as JobsIndex) ──
  const applyModalRef = useRef(null);
  const applyModalInstance = useRef(null);
  const subscribeModalRef = useRef(null);
  const subscribeModalInstance = useRef(null);

  useEffect(() => {
    let cancelled = false;
    import("bootstrap").then(({ Modal }) => {
      if (cancelled) return;
      if (applyModalRef.current) {
        applyModalInstance.current = new Modal(applyModalRef.current);
      }
      if (subscribeModalRef.current) {
        subscribeModalInstance.current = new Modal(subscribeModalRef.current);
        if (showSubscribeModal) {
          subscribeModalInstance.current.show();
        }
      }
    });
    return () => {
      cancelled = true;
      applyModalInstance.current?.dispose();
      subscribeModalInstance.current?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openApplyModal = () => applyModalInstance.current?.show();
  const closeApplyModal = () => applyModalInstance.current?.hide();
  const closeSubscribeModal = () => subscribeModalInstance.current?.hide();

  // ── Apply form (Inertia useForm — file upload handled automatically) ──
  const applyForm = useForm({
    cover_letter: "",
    resume: null,
    name: "",
    email: ""
  });

  const [formErrors, setFormErrors] = useState({ cover_letter: "", resume: "", name: "", email: "" });
  const coverLength = applyForm.data.cover_letter.trim().length;
  const coverCountColor = coverLength >= MIN_COVER_LETTER_LENGTH ? "#48d597" : "#f07070";

  const validateApplyForm = () => {
    const errors = { cover_letter: "", resume: "", name: "", email: "" };

    if (coverLength < MIN_COVER_LETTER_LENGTH) {
      errors.cover_letter = `Please write at least ${MIN_COVER_LETTER_LENGTH} characters.`;
    }

    const file = applyForm.data.resume;
    if (!file) {
      errors.resume = "Please upload your resume.";
    } else if (!ALLOWED_RESUME_EXT.test(file.name) && !ALLOWED_RESUME_TYPES.includes(file.type)) {
      errors.resume = "Only PDF, DOC, or DOCX files are accepted.";
    } else if (file.size > MAX_RESUME_BYTES) {
      errors.resume = "File size must not exceed 5 MB.";
    }

    setFormErrors(errors);
    return !errors.cover_letter && !errors.resume;
  };

  const onApplySubmit = (e) => {
    e.preventDefault();
    if (!validateApplyForm()) {
      // Scroll to the first invalid field inside the modal
      const firstErr = document.querySelector("#jobApplyModalPage .is-invalid");
      if (firstErr) firstErr.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    applyForm.post(applyUrl, {
      forceFormData: true,
      onSuccess: () => {
        applyForm.reset();
        setFormErrors({ cover_letter: "", resume: "", name: "", email: "" });
        closeApplyModal();
      },
    });
  };

  if (!job) return null;

  return (
    <>
      <Head title={job.title} />

      <style>{`
        /* ── Tokens ─────────────────────────────────────── */
        :root {
            --bg: #0e1618;
            --surface: #131e21;
            --surface-2: #192428;
            --border: rgba(255, 255, 255, .08);
            --accent: #48d597;
            --accent-dim: rgba(72, 213, 151, .10);
            --accent-glow: rgba(72, 213, 151, .18);
            --text: #ffffff;
            --muted: rgba(255, 255, 255, .45);
            --radius: 12px;
            --radius-sm: 8px;
        }

        /* ── Page shell ─────────────────────────────────── */
        .jd-page {
            background: var(--bg);
            min-height: 100vh;
            padding: 48px 0 80px;
            font-family: 'DM Sans', sans-serif;
        }

        /* ── Hero banner ────────────────────────────────── */
        .jd-hero {
            position: relative;
            border-radius: var(--radius);
            overflow: hidden;
            margin-bottom: 28px;
            height: 220px;
        }

        .jd-hero img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(.45) saturate(.6);
        }

        [data-h-theme="light"] .jd-hero img {
            filter: brightness(.65) saturate(.8);
        }

        .jd-hero__overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 30%, rgba(14, 22, 24, .92) 100%);
            display: flex;
            align-items: flex-end;
            padding: 24px 28px;
        }

        [data-h-theme="light"] .jd-hero__overlay {
            background: linear-gradient(180deg, transparent 30%, rgba(16, 32, 27, .88) 100%);
        }

        .jd-hero__title {
            font-family: 'Syne', sans-serif;
            font-size: clamp(22px, 3vw, 32px);
            font-weight: 800;
            color: var(--text);
            margin: 0;
            line-height: 1.2;
        }

        /* ── Meta strip ─────────────────────────────────── */
        .jd-meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 16px 0 20px;
            border-bottom: 1px solid var(--border);
            margin-bottom: 28px;
        }

        .jd-meta__left {
            display: flex;
            flex-wrap: wrap;
            gap: 18px;
            align-items: center;
        }

        .jd-meta__item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: var(--muted);
        }

        .jd-meta__item a {
            color: var(--accent);
            text-decoration: none;
            font-weight: 600;
        }

        .jd-meta__item a:hover {
            text-decoration: underline;
        }

        .jd-meta__item i {
            font-size: 14px;
        }

        .jd-badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            background: var(--accent-dim);
            color: var(--accent);
            border: 1px solid rgba(72, 213, 151, .25);
        }

        /* ── Section labels ─────────────────────────────── */
        .jd-section-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: var(--muted);
            margin-bottom: 10px;
        }

        /* ── Description ─────────────────────────────────── */
        .jd-description {
            font-size: 15px;
            color: rgba(255, 255, 255, .75);
            line-height: 1.75;
            margin-bottom: 28px;
        }

        [data-h-theme="light"] .jd-description {
            color: rgba(16, 32, 27, .78);
        }

        /* ── Info pills row ─────────────────────────────── */
        .jd-info-row {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 28px;
        }

        .jd-info-pill {
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--surface-2);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            padding: 10px 16px;
            font-size: 13px;
            color: rgba(255, 255, 255, .75);
        }

        [data-h-theme="light"] .jd-info-pill {
            color: rgba(16, 32, 27, .78);
        }

        .jd-info-pill strong {
            color: var(--text);
            font-weight: 600;
            margin-right: 4px;
        }

        .jd-info-pill i {
            color: var(--accent);
            font-size: 15px;
        }

        /* ── Skills ─────────────────────────────────────── */
        .jd-skills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 32px;
        }

        .jd-skill-tag {
            padding: 5px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            background: var(--surface-2);
            border: 1px solid var(--border);
            color: rgba(255, 255, 255, .75);
            transition: border-color .2s, color .2s;
        }

        [data-h-theme="light"] .jd-skill-tag {
            color: rgba(16, 32, 27, .78);
        }

        .jd-skill-tag:hover {
            border-color: var(--accent);
            color: var(--accent);
        }

        /* ── Company card ───────────────────────────────── */
        .jd-company {
            display: flex;
            align-items: center;
            gap: 16px;
            background: var(--surface-2);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 20px 20px;
            margin-bottom: 32px;
        }

        .jd-company__avatar {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--accent-dim);
            flex-shrink: 0;
        }

        .jd-company__name {
            font-family: 'Syne', sans-serif;
            font-size: 15px;
            font-weight: 700;
            color: var(--text);
            margin: 0 0 4px;
        }

        .jd-company__bio {
            font-size: 13px;
            color: var(--muted);
            margin: 0;
            line-height: 1.5;
        }

        /* ── Apply CTA ──────────────────────────────────── */
        .jd-apply-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 32px;
            border-radius: var(--radius-sm);
            background: var(--accent);
            color: #0e1618;
            font-size: 15px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            font-family: 'DM Sans', sans-serif;
            transition: background .2s, transform .15s;
            text-decoration: none;
        }

        .jd-apply-btn:hover {
            background: #5fe8a8;
            color: #0e1618;
            transform: translateY(-1px);
        }

        .jd-apply-btn i {
            font-size: 16px;
        }

        /* ── Sidebar cards ──────────────────────────────── */
        .jd-sidebar-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            overflow: hidden;
            margin-bottom: 20px;
            transition: border-color .25s;
        }

        .jd-sidebar-card:hover {
            border-color: rgba(255, 255, 255, .15);
        }

        [data-h-theme="light"] .jd-sidebar-card:hover {
            border-color: rgba(0, 100, 60, .2);
        }

        .jd-sidebar-card__header {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 14px 18px;
            border-bottom: 1px solid var(--border);
        }

        .jd-sidebar-card__header img {
            width: 18px;
            height: 18px;
            opacity: .7;
        }

        [data-h-theme="light"] .jd-sidebar-card__header img {
            filter: invert(0.4) sepia(1) saturate(4) hue-rotate(100deg);
        }

        .jd-sidebar-card__header h6 {
            font-size: 13px;
            font-weight: 700;
            color: var(--text);
            margin: 0;
            letter-spacing: .02em;
        }

        .jd-sidebar-card__body {
            padding: 16px 18px;
        }

        /* Categories */
        .jd-cat-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .jd-cat-list li a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 10px;
            border-radius: var(--radius-sm);
            font-size: 13px;
            color: var(--muted);
            text-decoration: none;
            transition: background .2s, color .2s;
        }

        .jd-cat-list li a:hover,
        .jd-cat-list li a.active {
            background: var(--accent-dim);
            color: var(--accent);
        }

        /* Recent jobs */
        .jd-recent-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .jd-recent-item {
            display: flex;
            gap: 12px;
            align-items: flex-start;
        }

        .jd-recent-item__thumb {
            width: 54px;
            height: 44px;
            border-radius: 6px;
            object-fit: cover;
            flex-shrink: 0;
            border: 1px solid var(--border);
        }

        .jd-recent-item__title a {
            font-size: 13px;
            font-weight: 600;
            color: rgba(255, 255, 255, .8);
            text-decoration: none;
            line-height: 1.4;
            display: block;
            margin-bottom: 4px;
        }

        [data-h-theme="light"] .jd-recent-item__title a {
            color: rgba(16, 32, 27, .85);
        }

        .jd-recent-item__title a:hover {
            color: var(--accent);
        }

        .jd-recent-item__meta {
            font-size: 11px;
            color: var(--muted);
        }

        /* Tags */
        .jd-tags-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .jd-tags-list li a {
            display: inline-block;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            background: var(--surface-2);
            border: 1px solid var(--border);
            color: var(--muted);
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
        }

        .jd-tags-list li a:hover {
            border-color: var(--accent);
            color: var(--accent);
            background: var(--accent-dim);
        }

        /* ── Modals — genuine Bootstrap Modal, themed to match app ── */
        .jd-modal .modal-content {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            color: var(--text);
        }

        .jd-modal .modal-header {
            border-bottom: 1px solid var(--border);
            padding: 18px 24px;
        }

        .jd-modal .modal-title {
            font-family: 'Syne', sans-serif;
            font-size: 17px;
            font-weight: 700;
        }

        .jd-modal .modal-body {
            padding: 24px;
        }

        .jd-modal .form-label {
            font-size: 13px;
            font-weight: 600;
            color: rgba(255, 255, 255, .7);
            margin-bottom: 6px;
        }

        [data-h-theme="light"] .jd-modal .form-label {
            color: rgba(16, 32, 27, .75);
        }

        .jd-modal .form-control {
            background: var(--surface-2);
            border: 1px solid var(--border);
            color: var(--text);
            border-radius: var(--radius-sm);
            font-size: 14px;
            padding: 10px 14px;
            font-family: 'DM Sans', sans-serif;
        }

        .jd-modal .form-control:focus {
            background: var(--surface-2);
            border-color: var(--accent);
            color: var(--text);
            box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .jd-modal .form-control::placeholder {
            color: var(--muted);
        }

        .jd-modal .form-control.is-invalid {
            border-color: #f07070;
        }

        .jd-modal .fc-error-text {
            font-size: 12px;
            color: #f07070;
            margin-top: 6px;
        }

        .jd-cover-count {
            font-size: 11px;
            color: var(--muted);
            margin-top: 6px;
            text-align: right;
        }

        .jd-modal-submit {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 28px;
            background: var(--accent);
            color: #0e1618;
            border: none;
            border-radius: var(--radius-sm);
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            font-family: 'DM Sans', sans-serif;
            transition: background .2s;
        }

        .jd-modal-submit:hover {
            background: #5fe8a8;
        }

        .jd-modal-submit:disabled {
            opacity: .65;
            cursor: not-allowed;
        }

        .jd-modal-subscribe .modal-content {
            background: var(--surface);
            border: 1px solid rgba(72, 213, 151, .2);
            border-radius: var(--radius);
            color: var(--text);
        }

        .jd-modal-subscribe .modal-header {
            border-bottom: 1px solid rgba(72, 213, 151, .15);
            padding: 18px 24px;
        }

        .jd-modal-subscribe .modal-title {
            font-family: 'Syne', sans-serif;
            font-size: 17px;
            font-weight: 700;
            color: var(--accent);
        }

        .jd-modal-subscribe .modal-body {
            padding: 24px;
            font-size: 14px;
            color: rgba(255, 255, 255, .75);
            line-height: 1.65;
        }

        [data-h-theme="light"] .jd-modal-subscribe .modal-body {
            color: rgba(16, 32, 27, .78);
        }

        .jd-modal-subscribe .modal-footer {
            border-top: 1px solid var(--border);
            padding: 16px 24px;
            gap: 10px;
        }

        .jd-subscribe-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 24px;
            background: var(--accent);
            color: #0e1618;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
            border: none;
            transition: background .2s;
        }

        .jd-subscribe-btn:hover {
            background: #5fe8a8;
            color: #0e1618;
        }

        .jd-close-btn {
            padding: 10px 24px;
            background: transparent;
            color: var(--muted);
            border: 1px solid var(--border);
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: border-color .2s, color .2s;
            font-family: 'DM Sans', sans-serif;
        }

        .jd-close-btn:hover {
            border-color: rgba(255, 255, 255, .25);
            color: var(--text);
        }

        .jd-btn-close {
            background: transparent;
            border: none;
            color: var(--text);
            filter: invert(1) brightness(2);
            font-size: 1rem;
            cursor: pointer;
            line-height: 1;
            opacity: .8;
        }

        .jd-btn-close:hover {
            opacity: 1;
        }

        [data-h-theme="light"] .jd-btn-close {
            filter: none;
            color: var(--text);
        }

        /* ══════════════════════════════════════
           LIGHT THEME OVERRIDES
           (matches the app-wide header toggle, same token set used
           in SkillProfile / JobsIndex)
        ══════════════════════════════════════ */
        [data-h-theme="light"] {
            --bg: #f6faf8;
            --surface: #ffffff;
            --surface-2: #eef6f2;
            --border: rgba(0, 100, 60, .1);
            --accent: #00a667;
            --accent-dim: rgba(0, 166, 103, .08);
            --accent-glow: rgba(0, 166, 103, .18);
            --text: #10201b;
            --muted: rgba(16, 32, 27, .5);
        }
      `}</style>

      <div className="jd-page">
        <div className="container">
          <div className="row g-4">

            {/* ════════════════════════════════════════
                 MAIN COLUMN
            ════════════════════════════════════════ */}
            <div className="col-lg-8">
              <div className="col-lg-10 mx-auto">

                {/* Hero */}
                <div className="jd-hero">
                  <img src={asset("/assets/img/blog/blog-large-01.jpg")} alt="" />
                  <div className="jd-hero__overlay">
                    <h1 className="jd-hero__title">{job.title}</h1>
                  </div>
                </div>

                {/* Meta strip */}
                <div className="jd-meta">
                  <div className="jd-meta__left">
                    <span className="jd-meta__item">
                      <i className="feather-briefcase"></i>
                      <a href="javascript:void(0);">{job.company?.name}</a>
                    </span>
                    <span className="jd-meta__item">
                      <i className="feather-calendar"></i>
                      {job.updated_at &&
                        new Date(job.updated_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}
                    </span>
                    <span className="jd-meta__item">
                      <i className="feather-map-pin"></i>
                      {job.location ?? "Remote"}
                    </span>
                  </div>
                  <span className="jd-badge">{job.type ?? "Full-time"}</span>
                </div>

                {/* Description */}
                <p className="jd-section-label">About this role</p>
                <p className="jd-description">{job.description}</p>

                {/* Info pills */}
                <div className="jd-info-row">
                  <div className="jd-info-pill">
                    <i className="feather-trending-up"></i>
                    <span><strong>Experience</strong> {job.experience_level ?? "Any"}</span>
                  </div>
                  <div className="jd-info-pill">
                    <i className="feather-dollar-sign"></i>
                    <span><strong>Salary</strong> {job.salary_range ?? "Negotiable"}</span>
                  </div>
                </div>

                {/* Skills */}
                <p className="jd-section-label">Skills Required</p>
                <div className="jd-skills mb-4">
                  {(job.skills_list || []).map((skill, i) => (
                    <span className="jd-skill-tag" key={i}>{skill}</span>
                  ))}
                </div>

                {/* Company card */}
                <p className="jd-section-label">About the company</p>
                <div className="jd-company">
                  <img src={asset("/assets/img/user/user-06.jpg")} className="jd-company__avatar" alt="" />
                  <div>
                    <p className="jd-company__name">{job.company?.name}</p>
                    <p className="jd-company__bio">
                      Experienced project management and digital talent acquisition team focused on connecting top Rwandan talent with global opportunities.
                    </p>
                  </div>
                </div>

                {/* Apply CTA */}
                <button className="jd-apply-btn" onClick={() => openApplyModal()}>
                  <i className="feather-send"></i>
                  Apply for this Job
                </button>

              </div>
            </div>
            {/* /Main column */}

            {/* ════════════════════════════════════════
                 SIDEBAR
            ════════════════════════════════════════ */}
            <div className="col-lg-4">

              {/* Categories */}
              <div className="jd-sidebar-card">
                <div className="jd-sidebar-card__header">
                  <img src={asset("/assets/img/icons/category-icon.svg")} alt="" />
                  <h6>Categories</h6>
                </div>
                <div className="jd-sidebar-card__body">
                  <ul className="jd-cat-list">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={`${r("user.jobs.index")}?${new URLSearchParams({
                            ...filters,
                            category: cat.id,
                          }).toString()}`}
                          className={String(filters.category) === String(cat.id) ? "active" : ""}
                        >
                          {cat.name}
                          <span className="jd-badge" style={{ fontSize: 10, padding: "2px 8px" }}>
                            {cat.job_sections_count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recent Jobs */}
              <div className="jd-sidebar-card">
                <div className="jd-sidebar-card__header">
                  <img src={asset("/assets/img/icons/blog-icon.svg")} alt="" />
                  <h6>Recent Jobs</h6>
                </div>
                <div className="jd-sidebar-card__body">
                  <ul className="jd-recent-list">
                    {recent.map((recentJob) => (
                      <li className="jd-recent-item" key={recentJob.id}>
                        <img
                          className="jd-recent-item__thumb"
                          src={asset("/assets/img/blog/blog-thumb-01.jpg")}
                          alt=""
                        />
                        <div className="jd-recent-item__title">
                          <Link href={jobShowUrl(recentJob)}>{recentJob.title}</Link>
                          <div className="jd-recent-item__meta">
                            {recentJob.company?.name} &middot;{" "}
                            {recentJob.updated_at &&
                              new Date(recentJob.updated_at).toLocaleDateString("en-US", {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                              })}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="jd-sidebar-card">
                <div className="jd-sidebar-card__header">
                  <img src={asset("/assets/img/icons/tag-icon.svg")} alt="" />
                  <h6>Popular Tags</h6>
                </div>
                <div className="jd-sidebar-card__body">
                  <ul className="jd-tags-list">
                    <li><a href="#">In-Demand Skills</a></li>
                    <li><a href="#">Freelancing</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Future Trends</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                    <li><a href="#">Home Care</a></li>
                  </ul>
                </div>
              </div>

            </div>
            {/* /Sidebar */}

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
           APPLY MODAL
      ════════════════════════════════════════ */}
      <div
        className="modal fade jd-modal"
        id="jobApplyModalPage"
        tabIndex="-1"
        aria-labelledby="jobApplyModalLabel"
        aria-hidden="true"
        ref={applyModalRef}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="jobApplyModalLabel">
                Apply for &ldquo;{job.title}&rdquo;
              </h5>
              <button type="button" className="jd-btn-close" onClick={() => closeApplyModal()} aria-label="Close">
                ✕
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onApplySubmit} noValidate encType="multipart/form-data">
                <div className="mb-2">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control${formErrors.name ? " is-invalid" : ""}`}
                    placeholder="Your Name"
                    value={applyForm.data.name}
                    onChange={(e) => applyForm.setData("name", e.target.value)}
                  />
                  {formErrors.name && (
                    <div className="fc-error-text">{formErrors.name}</div>
                  )}
                </div>
                <div className="mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control${formErrors.email ? " is-invalid" : ""}`}
                    placeholder="Your Email"
                    value={applyForm.data.email}
                    onChange={(e) => applyForm.setData("email", e.target.value)}
                  />
                  {formErrors.email && (
                    <div className="fc-error-text">{formErrors.email}</div>
                  )}
                </div>
                <div className="mb-2">
                  <label className="form-label">Cover Letter</label>
                  <textarea
                    className={`form-control${formErrors.cover_letter ? " is-invalid" : ""}`}
                    rows={5}
                    placeholder="Tell the employer why you're a great fit…"
                    value={applyForm.data.cover_letter}
                    onChange={(e) => applyForm.setData("cover_letter", e.target.value)}
                  />
                  <div className="jd-cover-count" style={{ color: coverCountColor }}>
                    {coverLength} / {MIN_COVER_LETTER_LENGTH}+ characters
                  </div>
                  {formErrors.cover_letter && (
                    <div className="fc-error-text">{formErrors.cover_letter}</div>
                  )}
                  {applyForm.errors.cover_letter && (
                    <div className="fc-error-text">{applyForm.errors.cover_letter}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label">Resume (PDF / DOC)</label>
                  <input
                    type="file"
                    className={`form-control${formErrors.resume ? " is-invalid" : ""}`}
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => applyForm.setData("resume", e.target.files?.[0] ?? null)}
                  />
                  {formErrors.resume && <div className="fc-error-text">{formErrors.resume}</div>}
                  {applyForm.errors.resume && (
                    <div className="fc-error-text">{applyForm.errors.resume}</div>
                  )}
                </div>

                <button type="submit" className="jd-modal-submit" disabled={applyForm.processing}>
                  <i className={`feather-${applyForm.processing ? "loader" : "send"}`} />{" "}
                  {applyForm.processing ? "Submitting…" : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
           SUBSCRIBE MODAL
      ════════════════════════════════════════ */}
      <div
        className="modal fade jd-modal-subscribe"
        id="jobSubscribeModalPage"
        tabIndex="-1"
        aria-hidden="true"
        ref={subscribeModalRef}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Subscription Required</h5>
              <button type="button" className="jd-btn-close" onClick={() => closeSubscribeModal()}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p>To apply for jobs on FutureConnect, you need an active subscription.</p>
              <p className="mb-0">Upgrade your plan to start applying and get noticed by top companies.</p>
            </div>
            <div className="modal-footer">
              <Link href={r("pricing")} className="jd-subscribe-btn">
                <i className="feather-zap"></i> Subscribe Now
              </Link>
              <button type="button" className="jd-close-btn" onClick={() => closeSubscribeModal()}>
                Not now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

JobShow.layout = (page) => <GuestLayout children={page} title="Job Details" />;