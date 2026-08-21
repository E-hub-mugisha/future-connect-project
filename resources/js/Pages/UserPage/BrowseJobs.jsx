import React, { useRef, useEffect } from "react";
import { Head, Link, router, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";


const DEFAULT_ROUTES = {
  "user.jobs.index": "/jobs",
  "user.jobs.browse": "/jobs/browse",
  "user.jobs.store": "/jobs",
  "user.talents": "/talents",
};

const JOB_TYPES = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Internship" },
];

const EXPERIENCE_LEVELS = [
  { value: "entry", label: "Entry Level" },
  { value: "mid", label: "Mid Level" },
  { value: "senior", label: "Senior Level" },
];

export default function BrowseJobs({
  jobs = { data: [], total: 0, links: [] },
  categories = [],
  locations = [],
  salary = [],
  filters = {},
  routes = {},
  assetBase = "",
}) {
  const r = (name) => routes[name] || DEFAULT_ROUTES[name] || "#";
  const asset = (path) => `${assetBase}${path}`;

  // ── Bootstrap Modal / Offcanvas, instantiated imperatively ──
  const postJobModalRef = useRef(null);
  const postJobModalInstance = useRef(null);
  const filterDrawerRef = useRef(null);
  const filterDrawerInstance = useRef(null);

  useEffect(() => {
    let cancelled = false;
    import("bootstrap").then(({ Modal, Offcanvas }) => {
      if (cancelled) return;
      if (postJobModalRef.current) {
        postJobModalInstance.current = new Modal(postJobModalRef.current);
      }
      if (filterDrawerRef.current) {
        filterDrawerInstance.current = new Offcanvas(filterDrawerRef.current);
      }
    });
    return () => {
      cancelled = true;
      postJobModalInstance.current?.dispose();
      filterDrawerInstance.current?.dispose();
    };
  }, []);

  const openPostJobModal = () => postJobModalInstance.current?.show();
  const closePostJobModal = () => postJobModalInstance.current?.hide();
  const openFilterDrawer = () => filterDrawerInstance.current?.show();
  const closeFilterDrawer = () => filterDrawerInstance.current?.hide();

  const hasActiveFilters = !!(filters.category || filters.location || filters.salary);

  const buildJobsUrl = (overrides = {}) => {
    const merged = { ...filters, ...overrides };
    const params = new URLSearchParams();
    Object.entries(merged).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        params.set(key, value);
      }
    });
    const qs = params.toString();
    return qs ? `${r("user.jobs.browse")}?${qs}` : r("user.jobs.browse");
  };

  const handleSortChange = (e) => {
    router.get(
      buildJobsUrl({ sort: e.target.value || undefined }),
      {},
      { preserveState: true, preserveScroll: true }
    );
  };

  // ── Post Job form ──
  const postJobForm = useForm({
    title: "",
    description: "",
    job_category_id: "",
    location: "",
    type: "full-time",
    experience_level: "entry",
    salary_range: "",
    skills: "",
  });

  const onPostJobSubmit = (e) => {
    e.preventDefault();
    postJobForm.post(r("user.jobs.store"), {
      preserveScroll: true,
      onSuccess: () => {
        postJobForm.reset();
        closePostJobModal();
      },
    });
  };

  const JobCard = ({ job, mobile = false }) => (
    <div className={`job-card${mobile ? " mobile-job-card" : ""}`}>
      {!mobile && (
        <div className="job-card-thumb">
          <img src={asset("/assets/img/blog/blog-01.jpg")} alt={job.title} />
          {job.type && <span className="job-type-badge">{job.type}</span>}
        </div>
      )}
      <div className="job-card-body" style={mobile ? { padding: 20 } : undefined}>
        <div className="job-company-row">
          <img src={asset("/assets/img/user/user-01.jpg")} className="company-avatar" alt="" />
          <span className="company-name">{job.company?.name ?? "Company"}</span>
          {mobile && job.type && (
            <span className="fc-badge" style={{ marginLeft: "auto", fontSize: "0.65rem", padding: "2px 10px" }}>
              {job.type}
            </span>
          )}
        </div>
        <h3 className="job-title">
          <Link href={r("user.jobs.show") !== "#" ? r("user.jobs.show") : `/jobs/${job.id}`}>{job.title}</Link>
        </h3>
        <div className="job-meta">
          <span className="job-meta-item">
            <i className="ti ti-map-pin"></i> {job.location ?? "Remote"}
          </span>
          {!mobile && job.experience_level && (
            <span className="job-meta-item">
              <i className="ti ti-chart-bar"></i> {job.experience_level.charAt(0).toUpperCase() + job.experience_level.slice(1)}
            </span>
          )}
        </div>
        <div className="job-card-footer">
          <span className="job-salary">{job.salary_range}</span>
          <Link href={`/jobs/${job.id}`} className="btn-view-job">
            View <i className="ti ti-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head title="Browse Jobs" />

      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
            --bg: #0e1618;
            --bg-card: #131e21;
            --bg-glass: rgba(255, 255, 255, 0.035);
            --bg-glass2: rgba(0, 166, 103, 0.08);
            --accent: #48d597;
            --accent-dim: #008f59;
            --accent-glow: rgba(0, 166, 103, 0.22);
            --border: rgba(255, 255, 255, 0.07);
            --border-h: rgba(0, 166, 103, 0.3);
            --text-1: #f0f4f3;
            --text-2: #8da4a0;
            --text-3: #4d6460;
            --font-head: 'Syne', sans-serif;
            --font-body: 'DM Sans', sans-serif;
            --r-sm: 8px;
            --r-md: 14px;
            --r-lg: 20px;
            --r-pill: 50px;
        }

        body {
            background: var(--bg) !important;
            color: var(--text-1);
            font-family: var(--font-body);
        }

        .btn-fc-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--accent);
            color: #fff;
            border: none;
            border-radius: var(--r-pill);
            padding: 11px 26px;
            font-family: var(--font-head);
            font-size: 0.875rem;
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            transition: background .2s, transform .15s, box-shadow .2s;
            box-shadow: 0 4px 20px var(--accent-glow);
        }

        .btn-fc-primary:hover {
            background: var(--accent-dim);
            transform: translateY(-2px);
            box-shadow: 0 6px 30px var(--accent-glow);
            color: #fff;
        }

        .btn-fc-primary:disabled {
            opacity: 0.65;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .btn-fc-outline {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            color: var(--text-1);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            padding: 10px 22px;
            font-family: var(--font-head);
            font-size: 0.875rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: border-color .2s, color .2s, background .2s;
        }

        .btn-fc-outline:hover {
            border-color: var(--border-h);
            color: var(--accent);
            background: var(--bg-glass2);
        }

        .fc-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: var(--bg-glass2);
            border: 1px solid var(--border-h);
            color: var(--accent);
            border-radius: var(--r-pill);
            padding: 4px 14px;
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        .eyebrow {
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--accent);
            font-weight: 600;
            display: block;
            margin-bottom: 10px;
        }

        /* ── COMPACT PAGE HEADER ── */
        .browse-header {
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            padding: 40px 0 32px;
            position: relative;
            overflow: hidden;
        }

        .browse-header::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .browse-back {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8rem;
            color: var(--text-2);
            text-decoration: none;
            margin-bottom: 14px;
            transition: color .2s;
        }

        .browse-back:hover { color: var(--accent); }

        .browse-header h1 {
            font-family: var(--font-head);
            font-size: clamp(1.5rem, 3vw, 2.1rem);
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 8px;
        }

        .browse-header h1 span { color: var(--accent); }

        .browse-header p {
            color: var(--text-2);
            font-size: 0.9rem;
            max-width: 500px;
            margin: 0;
        }

        /* ── CATEGORIES SCROLL ── */
        .cats-bar {
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            padding: 18px 0;
        }

        .cats-scroll {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            scrollbar-width: none;
            align-items: center;
        }

        .cats-scroll::-webkit-scrollbar { display: none; }

        .cat-chip {
            display: flex;
            align-items: center;
            gap: 6px;
            flex-shrink: 0;
            background: var(--bg-glass);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            padding: 7px 16px;
            font-size: 0.78rem;
            font-weight: 500;
            color: var(--text-2);
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
            white-space: nowrap;
        }

        .cat-chip:hover,
        .cat-chip.active {
            border-color: var(--border-h);
            color: var(--accent);
            background: var(--bg-glass2);
        }

        .cat-chip .count {
            background: var(--bg-glass2);
            border: 1px solid var(--border-h);
            color: var(--accent);
            border-radius: 20px;
            padding: 1px 7px;
            font-size: 0.68rem;
        }

        /* ── MAIN LAYOUT ── */
        .jobs-main {
            padding: 40px 0 80px;
        }

        .jobs-sidebar {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-lg);
            padding: 24px;
            position: sticky;
            top: 24px;
        }

        .sidebar-title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .sidebar-title-row h4 {
            font-family: var(--font-head);
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-1);
            margin: 0;
        }

        .reset-link {
            font-size: 0.75rem;
            color: var(--accent);
            text-decoration: none;
        }

        .reset-link:hover { text-decoration: underline; }

        .filter-group { margin-bottom: 22px; }

        .filter-group-label {
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-3);
            font-weight: 600;
            margin-bottom: 10px;
            display: block;
        }

        .filter-divider {
            border-top: 1px solid var(--border);
            margin: 18px 0;
        }

        .filter-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .filter-list li a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 12px;
            border-radius: var(--r-sm);
            font-size: 0.82rem;
            color: var(--text-2);
            text-decoration: none;
            transition: background .15s, color .15s;
        }

        .filter-list li a:hover,
        .filter-list li a.active {
            background: var(--bg-glass2);
            color: var(--accent);
        }

        .filter-list li a .fcount {
            font-size: 0.7rem;
            color: var(--text-3);
            background: var(--bg-glass);
            border-radius: 10px;
            padding: 1px 7px;
        }

        .filter-list li a.active .fcount { color: var(--accent); }

        /* ── JOBS GRID ── */
        .jobs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 18px;
        }

        .job-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-md);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: border-color .25s, transform .2s;
        }

        .job-card:hover {
            border-color: var(--border-h);
            transform: translateY(-3px);
        }

        .job-card-thumb {
            position: relative;
            height: 150px;
            overflow: hidden;
            flex-shrink: 0;
        }

        .job-card-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform .35s;
        }

        .job-card:hover .job-card-thumb img { transform: scale(1.04); }

        .job-type-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background: var(--accent);
            color: #fff;
            border-radius: var(--r-pill);
            padding: 3px 10px;
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.04em;
            text-transform: capitalize;
        }

        .job-card-body {
            padding: 18px;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .job-company-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .company-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            object-fit: cover;
            border: 1px solid var(--border-h);
            flex-shrink: 0;
        }

        .company-name {
            font-size: 0.78rem;
            color: var(--text-3);
        }

        .job-title {
            font-family: var(--font-head);
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-1);
            margin-bottom: 10px;
            line-height: 1.3;
        }

        .job-title a { color: inherit; text-decoration: none; }
        .job-title a:hover { color: var(--accent); }

        .job-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 14px;
        }

        .job-meta-item {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 0.75rem;
            color: var(--text-3);
        }

        .job-meta-item i { color: var(--accent); font-size: 0.8rem; }

        .job-card-footer {
            margin-top: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid var(--border);
            padding-top: 12px;
        }

        .job-salary {
            font-family: var(--font-head);
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--accent);
        }

        .btn-view-job {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: var(--bg-glass2);
            border: 1px solid var(--border-h);
            color: var(--accent);
            border-radius: var(--r-pill);
            padding: 6px 14px;
            font-size: 0.75rem;
            font-weight: 600;
            text-decoration: none;
            transition: background .2s, color .2s;
        }

        .btn-view-job:hover {
            background: var(--accent);
            color: #fff;
            border-color: var(--accent);
        }

        /* ── RESULTS HEADER ── */
        .results-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 14px;
            margin-bottom: 24px;
            padding-bottom: 18px;
            border-bottom: 1px solid var(--border);
        }

        .results-count {
            font-family: var(--font-head);
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-1);
        }

        .results-count span { color: var(--accent); }

        .sort-select {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            color: var(--text-2);
            padding: 8px 16px;
            font-size: 0.8rem;
            font-family: var(--font-body);
            outline: none;
            cursor: pointer;
        }

        .sort-select:focus { border-color: var(--border-h); }

        /* ── PAGINATION ── */
        .fc-pagination {
            display: flex;
            justify-content: center;
            margin-top: 36px;
        }

        .fc-pagination nav { width: 100%; }

        .fc-pagination .pagination {
            display: flex;
            gap: 6px;
            list-style: none;
            padding: 0;
            margin: 0;
            justify-content: center;
            flex-wrap: wrap;
        }

        .fc-pagination .page-item .page-link {
            background: var(--bg-card);
            border: 1px solid var(--border);
            color: var(--text-2);
            border-radius: var(--r-sm);
            padding: 8px 14px;
            font-size: 0.82rem;
            text-decoration: none;
            transition: border-color .2s, color .2s, background .2s;
        }

        .fc-pagination .page-item.active .page-link,
        .fc-pagination .page-item .page-link:hover {
            background: var(--bg-glass2);
            border-color: var(--border-h);
            color: var(--accent);
        }

        /* ── MOBILE FILTER ── */
        .mobile-filter-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-pill);
            padding: 10px 20px;
            font-size: 0.82rem;
            font-weight: 600;
            color: var(--text-2);
            cursor: pointer;
            font-family: var(--font-body);
            transition: border-color .2s, color .2s;
        }

        .mobile-filter-btn:hover {
            border-color: var(--border-h);
            color: var(--accent);
        }

        .mobile-filter-btn i { color: var(--accent); }

        .filter-offcanvas {
            --bs-offcanvas-bg: var(--bg-card);
            --bs-offcanvas-color: var(--text-1);
        }

        .filter-offcanvas .offcanvas-header { border-bottom: 1px solid var(--border); }

        .filter-offcanvas .offcanvas-title {
            font-family: var(--font-head);
            font-weight: 700;
        }

        .filter-offcanvas .btn-close {
            background: transparent;
            border: none;
            color: var(--text-1);
            filter: invert(1) brightness(0.6);
            font-size: 1.1rem;
            cursor: pointer;
            line-height: 1;
        }

        [data-h-theme="light"] .filter-offcanvas .btn-close { filter: none; }

        .mobile-job-card { padding: 0 4px 24px; }

        /* ── CTA BAND (post job) ── */
        .jobs-cta {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-lg);
            padding: 44px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 28px;
            margin-bottom: 60px;
            position: relative;
            overflow: hidden;
        }

        .jobs-cta::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .jobs-cta-glow {
            position: absolute;
            top: -60px;
            right: -60px;
            width: 260px;
            height: 260px;
            border-radius: 50%;
            background: var(--accent-glow);
            filter: blur(70px);
            pointer-events: none;
        }

        .jobs-cta-content { position: relative; }

        .jobs-cta h3 {
            font-family: var(--font-head);
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--text-1);
            margin-bottom: 8px;
        }

        .jobs-cta p {
            color: var(--text-2);
            font-size: 0.88rem;
            max-width: 480px;
            margin: 0;
        }

        .jobs-cta-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            position: relative;
        }

        /* ── MODAL ── */
        .fc-modal .modal-content {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--r-lg);
            color: var(--text-1);
        }

        .fc-modal .modal-header {
            border-bottom: 1px solid var(--border);
            padding: 22px 28px;
        }

        .fc-modal .modal-title {
            font-family: var(--font-head);
            font-weight: 700;
            font-size: 1.05rem;
            color: var(--text-1);
        }

        .fc-modal .modal-title small {
            display: block;
            font-size: 0.72rem;
            color: var(--text-3);
            font-weight: 400;
            margin-top: 3px;
        }

        .fc-modal .accent-line {
            display: block;
            width: 32px;
            height: 3px;
            background: var(--accent);
            border-radius: 2px;
            margin-top: 6px;
        }

        .fc-modal .btn-close { filter: invert(1) brightness(0.6); }

        .fc-modal .modal-body { padding: 28px; }

        .fc-modal .modal-footer {
            border-top: 1px solid var(--border);
            padding: 18px 28px;
        }

        .fc-form-label {
            font-size: 0.8rem;
            font-weight: 500;
            color: var(--text-2);
            margin-bottom: 6px;
            display: block;
        }

        .fc-form-control {
            width: 100%;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--border);
            border-radius: var(--r-sm);
            color: var(--text-1);
            padding: 11px 14px;
            font-family: var(--font-body);
            font-size: 0.85rem;
            outline: none;
            transition: border-color .2s;
            margin-bottom: 0;
        }

        .fc-form-control:focus {
            border-color: var(--border-h);
            box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .fc-form-control::placeholder { color: var(--text-3); }

        .fc-form-control.is-invalid {
            border-color: #e0554f;
            box-shadow: 0 0 0 3px rgba(224, 85, 79, 0.16);
        }

        .fc-form-error {
            font-size: 0.72rem;
            color: #e0554f;
            margin-top: 6px;
        }

        textarea.fc-form-control { resize: vertical; min-height: 90px; }

        select.fc-form-control option {
            background: var(--bg-card);
            color: var(--text-1);
        }

        /* ── LIGHT THEME OVERRIDES ── */
        [data-h-theme="light"] {
            --bg: #f6faf8;
            --bg-card: #ffffff;
            --bg-glass: rgba(0, 100, 60, 0.035);
            --bg-glass2: rgba(0, 166, 103, 0.08);
            --accent: #00a667;
            --accent-dim: #00c07a;
            --accent-glow: rgba(0, 166, 103, 0.18);
            --border: rgba(0, 100, 60, 0.1);
            --border-h: rgba(0, 100, 60, 0.28);
            --text-1: #10201b;
            --text-2: #5b7a70;
            --text-3: #8fa89e;
        }

        [data-h-theme="light"] body { background: var(--bg) !important; }

        [data-h-theme="light"] .fc-modal .btn-close { filter: none; }

        [data-h-theme="light"] .sort-select { color-scheme: light; }
      `}</style>

      {/* ════════════════════════════════════
           COMPACT PAGE HEADER
      ════════════════════════════════════ */}
      <section className="browse-header">
        <div className="container">
          <Link href={r("user.jobs.index")} className="browse-back">
            <i className="ti ti-arrow-left"></i> Back to Job Opportunities
          </Link>
          <span className="eyebrow">Works & Opportunities</span>
          <h1>Browse <span>{jobs.total}+</span> Open Roles</h1>
          <p>Filter by category, location and salary to find the work that fits you — updated as new opportunities are posted.</p>
        </div>
      </section>

      {/* ════════════════════════════════════
           CATEGORIES SCROLL BAR
      ════════════════════════════════════ */}
      <div className="cats-bar">
        <div className="container">
          <div className="cats-scroll">
            <Link
              href={buildJobsUrl({ category: undefined })}
              className={`cat-chip${!filters.category ? " active" : ""}`}
              preserveScroll
            >
              All <span className="count">{jobs.total}</span>
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={buildJobsUrl({ category: cat.id })}
                className={`cat-chip${String(filters.category) === String(cat.id) ? " active" : ""}`}
                preserveScroll
              >
                {cat.name}
                <span className="count">{cat.job_sections_count ?? 0}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
           MAIN CONTENT
      ════════════════════════════════════ */}
      <div className="jobs-main" id="jobs-list">
        <div className="container">
          <div className="row g-4">

            {/* ── SIDEBAR (desktop) ── */}
            <div className="col-lg-3 d-none d-lg-block">
              <div className="jobs-sidebar">
                <div className="sidebar-title-row">
                  <h4><i className="ti ti-adjustments-horizontal me-2" style={{ color: "var(--accent)" }}></i>Filters</h4>
                  <Link href={r("user.jobs.browse")} className="reset-link">
                    <i className="ti ti-refresh"></i> Reset
                  </Link>
                </div>

                <div className="filter-group">
                  <span className="filter-group-label">Categories</span>
                  <ul className="filter-list">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={buildJobsUrl({ category: cat.id })}
                          className={String(filters.category) === String(cat.id) ? "active" : ""}
                          preserveScroll
                        >
                          {cat.name}
                          <span className="fcount">{cat.job_sections_count ?? 0}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="filter-divider"></div>

                <div className="filter-group">
                  <span className="filter-group-label">Location</span>
                  <ul className="filter-list">
                    {locations.map((loc) => (
                      <li key={loc}>
                        <Link
                          href={buildJobsUrl({ location: loc })}
                          className={filters.location === loc ? "active" : ""}
                          preserveScroll
                        >
                          <span><i className="ti ti-map-pin me-1" style={{ fontSize: "0.75rem", color: "var(--accent)" }}></i>{loc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="filter-divider"></div>

                <div className="filter-group" style={{ marginBottom: 0 }}>
                  <span className="filter-group-label">Salary Range</span>
                  <ul className="filter-list">
                    {salary.map((b) => (
                      <li key={b}>
                        <Link
                          href={buildJobsUrl({ salary: b })}
                          className={filters.salary === b ? "active" : ""}
                          preserveScroll
                        >
                          <span><i className="ti ti-coin me-1" style={{ fontSize: "0.75rem", color: "var(--accent)" }}></i>{b}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ── JOBS CONTENT ── */}
            <div className="col-lg-9">

              <div className="results-header">
                <div className="results-count">
                  <span>{jobs.total}</span> Jobs Found
                  {hasActiveFilters && (
                    <span style={{ fontSize: "0.75rem", color: "var(--text-3)", fontWeight: 400, marginLeft: 10 }}>
                      (filtered)
                      <Link href={r("user.jobs.browse")} style={{ color: "var(--accent)", textDecoration: "none", marginLeft: 4 }}>
                        <i className="ti ti-x"></i> Clear
                      </Link>
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    type="button"
                    className="mobile-filter-btn d-lg-none"
                    onClick={() => openFilterDrawer()}
                  >
                    <i className="ti ti-adjustments-horizontal"></i> Filters
                  </button>
                  <select className="sort-select" value={filters.sort || ""} onChange={handleSortChange}>
                    <option value="">Sort: Latest</option>
                    <option value="salary">Sort: Salary</option>
                  </select>
                </div>
              </div>

              <div className="jobs-grid d-none d-md-grid">
                {jobs.data.length > 0 ? (
                  jobs.data.map((job) => <JobCard key={job.id} job={job} />)
                ) : (
                  <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px 20px", color: "var(--text-3)" }}>
                    <i className="ti ti-briefcase-off" style={{ fontSize: "2.5rem", display: "block", marginBottom: 12 }}></i>
                    No jobs found matching your filters.
                    <br />
                    <Link href={r("user.jobs.browse")} style={{ color: "var(--accent)", fontSize: "0.85rem" }}>Clear filters</Link>
                  </div>
                )}
              </div>

              <div className="d-md-none">
                {jobs.data.length > 0 ? (
                  jobs.data.map((job) => <JobCard key={job.id} job={job} mobile />)
                ) : (
                  <p style={{ textAlign: "center", color: "var(--text-3)", padding: 40 }}>No jobs found.</p>
                )}
              </div>

              {jobs.links && jobs.links.length > 0 && (
                <div className="fc-pagination">
                  <nav>
                    <ul className="pagination">
                      {jobs.links.map((link, i) => {
                        const label = link.label
                          .replace("&laquo; Previous", "‹ Prev")
                          .replace("Next &raquo;", "Next ›");
                        return (
                          <li key={i} className={`page-item${link.active ? " active" : ""}${!link.url ? " disabled" : ""}`}>
                            {link.url ? (
                              <Link
                                href={link.url}
                                className="page-link"
                                preserveScroll
                                dangerouslySetInnerHTML={{ __html: label }}
                              />
                            ) : (
                              <span className="page-link" dangerouslySetInnerHTML={{ __html: label }} />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
           MOBILE FILTER OFFCANVAS
      ════════════════════════════════════ */}
      <div
        className="offcanvas offcanvas-start filter-offcanvas"
        tabIndex="-1"
        id="jobsFilterOffcanvasPage"
        ref={filterDrawerRef}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">
            <i className="ti ti-adjustments-horizontal me-2" style={{ color: "var(--accent)" }}></i>Filters
          </h5>
          <button type="button" className="btn-close" onClick={() => closeFilterDrawer()}>✕</button>
        </div>
        <div className="offcanvas-body">
          <div className="sidebar-title-row" style={{ marginBottom: 16 }}>
            <span style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>{jobs.total} results</span>
            <Link href={r("user.jobs.browse")} className="reset-link"><i className="ti ti-refresh"></i> Reset All</Link>
          </div>

          <div className="filter-group">
            <span className="filter-group-label">Categories</span>
            <ul className="filter-list">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={buildJobsUrl({ category: cat.id })}
                    className={String(filters.category) === String(cat.id) ? "active" : ""}
                    onClick={() => closeFilterDrawer()}
                    preserveScroll
                  >
                    {cat.name} <span className="fcount">{cat.job_sections_count ?? 0}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="filter-divider"></div>
          <div className="filter-group">
            <span className="filter-group-label">Location</span>
            <ul className="filter-list">
              {locations.map((loc) => (
                <li key={loc}>
                  <Link
                    href={buildJobsUrl({ location: loc })}
                    className={filters.location === loc ? "active" : ""}
                    onClick={() => closeFilterDrawer()}
                    preserveScroll
                  >
                    <i className="ti ti-map-pin me-1" style={{ color: "var(--accent)" }}></i>{loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="filter-divider"></div>
          <div className="filter-group">
            <span className="filter-group-label">Salary Range</span>
            <ul className="filter-list">
              {salary.map((b) => (
                <li key={b}>
                  <Link
                    href={buildJobsUrl({ salary: b })}
                    className={filters.salary === b ? "active" : ""}
                    onClick={() => closeFilterDrawer()}
                    preserveScroll
                  >
                    <i className="ti ti-coin me-1" style={{ color: "var(--accent)" }}></i>{b}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
           CTA BAND — post a job
      ════════════════════════════════════ */}
      <div className="container">
        <div className="jobs-cta">
          <div className="jobs-cta-glow"></div>
          <div className="jobs-cta-content">
            <span className="eyebrow">Post Your work</span>
            <h3>Showcase Your Skills & Find Work Today!</h3>
            <p>Post your work in minutes and reach thousands of potential clients. Verified listings get more visibility and faster responses. Takes less than 5 minutes.</p>
          </div>
          <div className="jobs-cta-actions">
            <button type="button" onClick={() => openPostJobModal()} className="btn-fc-primary">
              <i className="ti ti-plus"></i> Post Your work
            </button>
            <Link href={r("user.talents")} className="btn-fc-outline">Browse Skills</Link>
          </div>
        </div>
      </div>

      {/* ════════════════════ POST JOB MODAL ════════════════════ */}
      <div
        className="modal fade fc-modal"
        id="postJobModalBrowse"
        tabIndex="-1"
        aria-hidden="true"
        ref={postJobModalRef}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title">
                  Post a New Job / work
                  <small>Fill in the details below to publish your listing</small>
                </h5>
                <span className="accent-line" />
              </div>
              <button type="button" className="btn-close" onClick={() => closePostJobModal()}>✕</button>
            </div>

            <form onSubmit={onPostJobSubmit} noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12">
                    <label className="fc-form-label">
                      Job Title <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`fc-form-control${postJobForm.errors.title ? " is-invalid" : ""}`}
                      placeholder="e.g., Senior Laravel Developer"
                      value={postJobForm.data.title}
                      onChange={(e) => postJobForm.setData("title", e.target.value)}
                      required
                    />
                    {postJobForm.errors.title && (
                      <p className="fc-form-error">{postJobForm.errors.title}</p>
                    )}
                  </div>

                  <div className="col-12">
                    <label className="fc-form-label">
                      Description <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <textarea
                      className={`fc-form-control${postJobForm.errors.description ? " is-invalid" : ""}`}
                      rows="4"
                      placeholder="Describe the job responsibilities, requirements, and benefits..."
                      value={postJobForm.data.description}
                      onChange={(e) => postJobForm.setData("description", e.target.value)}
                      required
                    />
                    {postJobForm.errors.description && (
                      <p className="fc-form-error">{postJobForm.errors.description}</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">
                      Category <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <select
                      className={`fc-form-control${postJobForm.errors.job_category_id ? " is-invalid" : ""}`}
                      value={postJobForm.data.job_category_id}
                      onChange={(e) => postJobForm.setData("job_category_id", e.target.value)}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                    {postJobForm.errors.job_category_id && (
                      <p className="fc-form-error">{postJobForm.errors.job_category_id}</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">
                      Location <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`fc-form-control${postJobForm.errors.location ? " is-invalid" : ""}`}
                      placeholder="e.g., Kigali, Rwanda / Remote"
                      value={postJobForm.data.location}
                      onChange={(e) => postJobForm.setData("location", e.target.value)}
                      required
                    />
                    {postJobForm.errors.location && (
                      <p className="fc-form-error">{postJobForm.errors.location}</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">Job Type</label>
                    <select
                      className="fc-form-control"
                      value={postJobForm.data.type}
                      onChange={(e) => postJobForm.setData("type", e.target.value)}
                    >
                      {JOB_TYPES.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">Experience Level</label>
                    <select
                      className="fc-form-control"
                      value={postJobForm.data.experience_level}
                      onChange={(e) => postJobForm.setData("experience_level", e.target.value)}
                    >
                      {EXPERIENCE_LEVELS.map((lvl) => (
                        <option key={lvl.value} value={lvl.value}>{lvl.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">Salary Range</label>
                    <input
                      type="text"
                      className="fc-form-control"
                      placeholder="e.g., 300K – 800K RWF"
                      value={postJobForm.data.salary_range}
                      onChange={(e) => postJobForm.setData("salary_range", e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="fc-form-label">Skills (comma separated)</label>
                    <input
                      type="text"
                      className="fc-form-control"
                      placeholder="e.g., Laravel, Vue, CSS"
                      value={postJobForm.data.skills}
                      onChange={(e) => postJobForm.setData("skills", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer" style={{ gap: 10 }}>
                <button
                  type="button"
                  className="btn-fc-outline"
                  onClick={() => closePostJobModal()}
                  disabled={postJobForm.processing}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-fc-primary" disabled={postJobForm.processing}>
                  <i className={`ti ${postJobForm.processing ? "ti-loader-2" : "ti-send"}`} />{" "}
                  {postJobForm.processing ? "Posting…" : "Post Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

BrowseJobs.layout = (page) => <GuestLayout children={page} title="Browse Jobs" />;