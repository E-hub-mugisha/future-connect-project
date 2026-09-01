import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function AllProjects({ categories = [], projects, filters = {} }) {
  
  const projectList = projects?.data ?? [];
  const paginationLinks = projects?.links ?? [];

  const [form, setForm] = useState({
    category: filters.category ?? '',
    location: filters.location ?? '',
    keyword: filters.keyword ?? '',
    status: filters.status ?? '',
  });

  function applyFilters(overrides = {}) {
    const next = { ...form, ...overrides };
    const query = Object.fromEntries(
      Object.entries(next).filter(([, value]) => value !== '')
    );
    setForm(next);
    router.get(route('user.projects.all'), query, { preserveState: true, preserveScroll: true });
  }

  function handleSubmit(e) {
    e.preventDefault();
    applyFilters();
  }

  function clearFilters() {
    const cleared = { category: '', location: '', keyword: '', status: '' };
    setForm(cleared);
    router.get(route('user.projects.all'));
  }

  const activeCategory = categories.find((c) => String(c.id) === String(form.category));
  const hasActiveFilters = Object.values(form).some((v) => v !== '');

  return (
    <>
      <Head title="All Projects" />

      <style>{`
        :root {
          --fc-bg: #0e1618;
          --fc-bg-alt: #141d20;
          --fc-card: #172124;
          --fc-border: #243033;
          --fc-accent: #48d597;
          --fc-accent-dark: #33a876;
          --fc-white: #F5f5f7;
          --fc-muted: #9fb0ae;
        }

        .fc-page { background: var(--fc-bg); color: var(--fc-white); }

        /* ---- Page header ---- */
        .fc-list-header {
          border-bottom: 1px solid var(--fc-border);
          padding: 48px 0 36px;
        }

        .fc-list-header h1 {
          font-weight: 700;
          font-size: 2rem;
          color: var(--fc-white);
          margin-bottom: 6px;
        }

        .fc-list-header h1 span { color: var(--fc-accent); }

        .fc-list-header p { color: var(--fc-muted); }

        .fc-breadcrumb {
          color: var(--fc-muted);
          font-size: .85rem;
          margin-bottom: 14px;
        }

        .fc-breadcrumb a { color: var(--fc-muted); text-decoration: none; }
        .fc-breadcrumb a:hover { color: var(--fc-accent); }

        /* ---- Filters ---- */
        .fc-filters {
          padding: 32px 0;
        }

        .fc-filter-card {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, .35);
        }

        .fc-filter-card label {
          color: var(--fc-muted);
          font-size: .78rem;
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: 6px;
          display: block;
          font-weight: 600;
        }

        .fc-filter-card .form-control,
        .fc-filter-card .form-select {
          background: var(--fc-bg-alt);
          border: 1px solid var(--fc-border);
          color: var(--fc-white);
          border-radius: 10px;
          padding: .6rem .9rem;
        }

        .fc-filter-card .form-control::placeholder { color: #5f7370; }

        .fc-filter-card .form-control:focus,
        .fc-filter-card .form-select:focus {
          background: var(--fc-bg-alt);
          border-color: var(--fc-accent);
          color: var(--fc-white);
          box-shadow: 0 0 0 3px rgba(72, 213, 151, .15);
        }

        .fc-filter-actions {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-top: 18px;
        }

        .btn-fc-primary {
          background: var(--fc-accent);
          border: none;
          color: #06231a;
          font-weight: 700;
          border-radius: 10px;
          padding: .65rem 1.4rem;
          transition: .2s ease;
        }

        .btn-fc-primary:hover { background: var(--fc-accent-dark); color: #06231a; }

        .fc-clear-link {
          color: var(--fc-muted);
          font-size: .85rem;
          text-decoration: underline;
          background: none;
          border: none;
          cursor: pointer;
        }

        .fc-clear-link:hover { color: var(--fc-accent); }

        .fc-active-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(72, 213, 151, .12);
          color: var(--fc-accent);
          border-radius: 30px;
          padding: 6px 12px;
          font-size: .8rem;
          font-weight: 600;
          margin-bottom: 18px;
        }

        .fc-active-chip button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          line-height: 1;
        }

        .fc-results-count { color: var(--fc-muted); font-size: .9rem; }

        /* ---- Project cards (same visual language as the landing page) ---- */
        .fc-listing { padding: 10px 0 70px; }

        .fc-gig-card {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 18px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: .25s ease;
        }

        .fc-gig-card:hover {
          border-color: var(--fc-accent);
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, .4);
        }

        .fc-gig-img {
          height: 120px;
          background: linear-gradient(135deg, rgba(72, 213, 151, .18), rgba(72, 213, 151, .03));
          position: relative;
        }

        .fc-badge-row {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }

        .fc-badge {
          font-size: .72rem;
          font-weight: 700;
          padding: 5px 10px;
          border-radius: 30px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .fc-badge-verified { background: rgba(72, 213, 151, .18); color: var(--fc-accent); }
        .fc-badge-status { background: rgba(255, 255, 255, .08); color: var(--fc-white); }

        .fc-gig-body { padding: 20px; display: flex; flex-direction: column; flex: 1; }

        .fc-gig-cat {
          display: inline-block;
          font-size: .72rem;
          font-weight: 700;
          color: var(--fc-accent);
          background: rgba(72, 213, 151, .1);
          padding: 4px 10px;
          border-radius: 20px;
          margin-bottom: 10px;
          width: fit-content;
        }

        .fc-gig-location {
          color: var(--fc-muted);
          font-size: .8rem;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .fc-gig-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; line-height: 1.35; }
        .fc-gig-title a { color: var(--fc-white); text-decoration: none; }
        .fc-gig-title a:hover { color: var(--fc-accent); }

        .fc-gig-desc { color: var(--fc-muted); font-size: .88rem; margin-bottom: 18px; flex: 1; }

        .fc-gig-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid var(--fc-border);
        }

        .fc-gig-footer .badge {
          background: var(--fc-bg-alt);
          color: var(--fc-muted);
          border: 1px solid var(--fc-border);
          font-weight: 500;
          padding: 6px 12px;
        }

        .btn-fc-outline {
          border: 1px solid var(--fc-accent);
          color: var(--fc-accent);
          background: transparent;
          border-radius: 30px;
          padding: .4rem 1.1rem;
          font-size: .85rem;
          font-weight: 600;
          text-decoration: none;
          transition: .2s;
        }

        .btn-fc-outline:hover { background: var(--fc-accent); color: #06231a; }

        .fc-empty {
          text-align: center;
          padding: 60px 20px;
          color: var(--fc-muted);
          border: 1px dashed var(--fc-border);
          border-radius: 18px;
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --fc-bg: #f6faf8;
          --fc-bg-alt: #eef4f1;
          --fc-card: #F5f5f7;
          --fc-border: rgba(0, 100, 60, 0.12);
          --fc-accent: #00a667;
          --fc-accent-dark: #00c07a;
          --fc-white: #10201b;
          --fc-muted: #5b7a70;
        }

        [data-h-theme="light"] .fc-filter-card,
        [data-h-theme="light"] .fc-gig-card:hover { box-shadow: 0 10px 30px rgba(0, 0, 0, .08); }

        [data-h-theme="light"] .fc-filter-card .form-control::placeholder { color: #a9c2b8; }

        [data-h-theme="light"] .fc-filter-card .form-control:focus,
        [data-h-theme="light"] .fc-filter-card .form-select:focus {
          box-shadow: 0 0 0 3px rgba(0, 166, 103, .15);
        }

        [data-h-theme="light"] .fc-gig-img {
          background: linear-gradient(135deg, rgba(0, 166, 103, .16), rgba(0, 166, 103, .03));
        }

        [data-h-theme="light"] .fc-badge-verified { background: rgba(0, 166, 103, .14); }
        [data-h-theme="light"] .fc-badge-status { background: rgba(0, 100, 60, .08); color: var(--fc-white); }
        [data-h-theme="light"] .fc-gig-cat { background: rgba(0, 166, 103, .08); }
      `}</style>

      <div className="fc-page">

        <section className="fc-list-header">
          <div className="container p-4">
            <div className="fc-breadcrumb">
              <Link href={route('user.projects.index')}>Projects</Link> / All projects
            </div>
            <h1>
              {activeCategory ? <>Projects in <span>{activeCategory.name}</span></> : <>All <span>projects</span></>}
            </h1>
            <p>Browse every open project and filter down to what matches your skills.</p>
          </div>
        </section>

        <section className="fc-filters">
          <div className="container">
            <div className="fc-filter-card">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-3 mb-3 mb-md-0">
                    <label>Category</label>
                    <select
                      className="form-select"
                      value={form.category}
                      onChange={(e) => applyFilters({ category: e.target.value })}
                    >
                      <option value="">All categories</option>
                      {categories.map((cat) => (
                        <option value={cat.id} key={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3 mb-3 mb-md-0">
                    <label>Status</label>
                    <select
                      className="form-select"
                      value={form.status}
                      onChange={(e) => applyFilters({ status: e.target.value })}
                    >
                      <option value="">Any status</option>
                      <option value="open">Open</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3 mb-md-0">
                    <label>Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kigali, Rwanda"
                      value={form.location}
                      onChange={(e) => setForm((s) => ({ ...s, location: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-3">
                    <label>Keyword</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Need Graphic Designer"
                      value={form.keyword}
                      onChange={(e) => setForm((s) => ({ ...s, keyword: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="fc-filter-actions">
                  <button type="submit" className="btn btn-fc-primary">Apply filters</button>
                  {hasActiveFilters && (
                    <button type="button" className="fc-clear-link" onClick={clearFilters}>
                      Clear all filters
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="fc-listing">
          <div className="container">
            {activeCategory && (
              <div className="fc-active-chip">
                {activeCategory.name}
                <button type="button" onClick={() => applyFilters({ category: '' })} aria-label="Remove category filter">
                  &times;
                </button>
              </div>
            )}

            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="fc-results-count">
                {projects?.total ?? projectList.length} project{(projects?.total ?? projectList.length) === 1 ? '' : 's'} found
              </span>
            </div>

            {projectList.length === 0 ? (
              <div className="fc-empty">
                <p className="mb-2">No projects match these filters yet.</p>
                <button type="button" className="btn-fc-outline" onClick={clearFilters}>Clear filters</button>
              </div>
            ) : (
              <div className="row g-4">
                {projectList.map((project) => (
                  <div className="col-lg-4 col-md-6" key={project.id}>
                    <div className="fc-gig-card">
                      <div className="fc-gig-img">
                        <div className="fc-badge-row">
                          <span className="fc-badge fc-badge-verified">
                            <i className="feather-star"></i>{project.verified ? 'Verified' : 'Pending'}
                          </span>
                          <span className="fc-badge fc-badge-status">
                            <i className="fa-solid fa-meteor"></i>{project.status ?? 'Open'}
                          </span>
                        </div>
                      </div>
                      <div className="fc-gig-body">
                        <button
                          type="button"
                          className="fc-gig-cat"
                          style={{ border: 'none', cursor: 'pointer' }}
                          onClick={() => applyFilters({ category: project.category?.id ?? '' })}
                        >
                          {project.category?.name ?? 'General'}
                        </button>
                        <div className="fc-gig-location">
                          <i className="ti ti-map-pin-check"></i>{project.location ?? 'Remote'}
                        </div>
                        <h3 className="fc-gig-title">
                          <Link href={route('user.projects.show', project.id)}>{project.title}</Link>
                        </h3>
                        <p className="fc-gig-desc">{truncate(project.description, 120)}</p>
                        <div className="fc-gig-footer">
                          <span className="badge">{project.location ?? 'Remote'}</span>
                          <Link href={route('user.projects.show', project.id)} className="btn-fc-outline">View details</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {paginationLinks.length > 3 && (
              <div className="d-flex justify-content-center gap-2 mt-5">
                {paginationLinks.map((link, i) => (
                  <button
                    key={i}
                    disabled={!link.url}
                    className="btn-fc-outline"
                    style={{
                      opacity: link.url ? 1 : 0.4,
                      cursor: link.url ? 'pointer' : 'default',
                      background: link.active ? 'var(--fc-accent)' : 'transparent',
                      color: link.active ? '#06231a' : 'var(--fc-accent)',
                    }}
                    onClick={() => link.url && router.get(link.url, {}, { preserveScroll: true })}
                    // Laravel's paginator labels use HTML entities (&laquo; / &raquo;)
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

      </div>
    </>
  );
}

/** Mirrors Blade's Str::limit($text, 120) — truncates and appends '...' */
function truncate(text, length) {
  if (!text) return '';
  return text.length > length ? `${text.slice(0, length).trimEnd()}...` : text;
}

AllProjects.layout = (page) => (
  <GuestLayout
    children={page}
    title="All Projects"
    description="Browse every open project and filter down to what matches your skills."
  />
);
