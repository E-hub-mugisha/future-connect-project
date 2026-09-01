import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Projects({ categories = [], projects = [] }) {
  // On the landing page `projects` is a plain preview array (see
  // ProjectController@index), not a paginator, so no `.data` unwrap here.
  const [search, setSearch] = useState({ category: '', location: '', keyword: '' });

  function handleSearchSubmit(e) {
    e.preventDefault();
    // Fixed: this used to post back to `user.projects` (this same landing
    // page), which never read the filters. It now goes to the real
    // filterable listing page, and drops empty fields from the query string.
    const query = Object.fromEntries(
      Object.entries(search).filter(([, value]) => value !== '')
    );
    router.get(route('user.projects.all'), query);
  }

  function searchPopular(keyword) {
    router.get(route('user.projects.all'), { keyword });
  }

  return (
    <>
      <Head title="Projects Collaborations" />

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

        .fc-page {
          background: var(--fc-bg);
          color: var(--fc-white);
        }

        /* ---- Hero ---- */
        .fc-hero {
          border-bottom: 1px solid var(--fc-border);
          padding: 70px 0 60px;
        }

        .fc-hero h1 {
          font-weight: 700;
          font-size: 2.4rem;
          color: var(--fc-white);
          letter-spacing: -.5px;
        }

        .fc-hero h1 span {
          color: var(--fc-accent);
        }

        .fc-hero p.lead-text {
          color: var(--fc-muted);
          font-size: 1.05rem;
          max-width: 520px;
        }

        .fc-search-card {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, .35);
        }

        .fc-search-card label {
          color: var(--fc-muted);
          font-size: .78rem;
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: 6px;
          display: block;
          font-weight: 600;
        }

        .fc-search-card .form-control,
        .fc-search-card .form-select {
          background: var(--fc-bg-alt);
          border: 1px solid var(--fc-border);
          color: var(--fc-white);
          border-radius: 10px;
          padding: .65rem .9rem;
        }

        .fc-search-card .form-control::placeholder {
          color: #5f7370;
        }

        .fc-search-card .form-control:focus,
        .fc-search-card .form-select:focus {
          background: var(--fc-bg-alt);
          border-color: var(--fc-accent);
          color: var(--fc-white);
          box-shadow: 0 0 0 3px rgba(72, 213, 151, .15);
        }

        .fc-input-block {
          margin-bottom: 16px;
        }

        .fc-input-locaion {
          position: relative;
        }

        .fc-input-locaion img {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          opacity: .7;
        }

        .btn-fc-primary {
          background: var(--fc-accent);
          border: none;
          color: #06231a;
          font-weight: 700;
          border-radius: 10px;
          padding: .7rem 1.6rem;
          transition: .2s ease;
        }

        .btn-fc-primary:hover {
          background: var(--fc-accent-dark);
          color: #06231a;
          transform: translateY(-1px);
        }

        .fc-popular-search {
          margin-top: 20px;
        }

        .fc-popular-search h5 {
          color: var(--fc-muted);
          font-size: .85rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .fc-popular-search ul {
          list-style: none;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          padding: 0;
          margin: 0;
        }

        .fc-popular-search a,
        .fc-popular-search button {
          display: inline-block;
          padding: 6px 14px;
          border: 1px solid var(--fc-border);
          border-radius: 30px;
          color: var(--fc-white);
          font-size: .85rem;
          text-decoration: none;
          background: transparent;
          transition: .2s;
          cursor: pointer;
        }

        .fc-popular-search a:hover,
        .fc-popular-search button:hover {
          border-color: var(--fc-accent);
          color: var(--fc-accent);
        }

        /* ---- Categories ---- */
        .fc-categories {
          background: var(--fc-bg-alt);
          padding: 60px 0;
          border-bottom: 1px solid var(--fc-border);
        }

        .fc-section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .fc-section-header.fc-section-header-split {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          text-align: left;
        }

        .fc-section-header h2 {
          font-weight: 700;
          font-size: 1.9rem;
          color: var(--fc-white);
          margin-bottom: 8px;
        }

        .fc-section-header h2 .accent-dot {
          color: var(--fc-accent);
        }

        .fc-section-header p {
          color: var(--fc-muted);
        }

        .fc-cat-card {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 16px;
          padding: 26px 16px;
          text-align: center;
          transition: .25s ease;
          height: 100%;
          text-decoration: none;
          display: block;
        }

        .fc-cat-card:hover {
          border-color: var(--fc-accent);
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(72, 213, 151, .12);
        }

        .fc-cat-card .fc-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          border-radius: 50%;
          background: rgba(72, 213, 151, .12);
          color: var(--fc-accent);
          font-size: 1.3rem;
        }

        .fc-cat-card h6 {
          color: var(--fc-white);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 1px;
        }

        .fc-cat-card:hover h6 {
          color: var(--fc-accent);
        }

        .fc-cat-card p {
          color: var(--fc-muted);
          font-size: .85rem;
          margin: 6px 0 0;
        }

        /* ---- Project cards ---- */
        .fc-projects {
          padding: 70px 0;
        }

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
          background:
            linear-gradient(135deg, rgba(72, 213, 151, .18), rgba(72, 213, 151, .03));
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

        .fc-badge-verified {
          background: rgba(72, 213, 151, .18);
          color: var(--fc-accent);
        }

        .fc-badge-status {
          background: rgba(255, 255, 255, .08);
          color: var(--fc-white);
        }

        .fc-gig-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

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

        .fc-gig-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .fc-gig-title a {
          color: var(--fc-white);
          text-decoration: none;
        }

        .fc-gig-title a:hover {
          color: var(--fc-accent);
        }

        .fc-gig-desc {
          color: var(--fc-muted);
          font-size: .88rem;
          margin-bottom: 18px;
          flex: 1;
        }

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
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .btn-fc-outline:hover {
          background: var(--fc-accent);
          color: #06231a;
        }

        /* ---- CTA ---- */
        .fc-cta {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 24px;
          padding: 50px;
          // margin-bottom: 70px;
          position: relative;
          overflow: hidden;
        }

        .fc-cta::before {
          content: "";
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(72, 213, 151, .18), transparent 70%);
        }

        .fc-cta h2 {
          font-weight: 700;
          color: var(--fc-white);
        }

        .fc-cta p {
          color: var(--fc-muted);
          max-width: 420px;
        }

        .fc-cta img {
          max-width: 100%;
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

        [data-h-theme="light"] .fc-search-card {
          box-shadow: 0 10px 30px rgba(0, 0, 0, .08);
        }

        [data-h-theme="light"] .fc-search-card .form-control::placeholder {
          color: #a9c2b8;
        }

        [data-h-theme="light"] .fc-search-card .form-control:focus,
        [data-h-theme="light"] .fc-search-card .form-select:focus {
          box-shadow: 0 0 0 3px rgba(0, 166, 103, .15);
        }

        [data-h-theme="light"] .fc-cat-card .fc-icon {
          background: rgba(0, 166, 103, .1);
        }

        [data-h-theme="light"] .fc-cat-card:hover {
          box-shadow: 0 12px 24px rgba(0, 166, 103, .15);
        }

        [data-h-theme="light"] .fc-gig-img {
          background: linear-gradient(135deg, rgba(0, 166, 103, .16), rgba(0, 166, 103, .03));
        }

        [data-h-theme="light"] .fc-badge-verified {
          background: rgba(0, 166, 103, .14);
        }

        [data-h-theme="light"] .fc-badge-status {
          background: rgba(0, 100, 60, .08);
          color: var(--fc-white);
        }

        [data-h-theme="light"] .fc-gig-card:hover {
          box-shadow: 0 16px 32px rgba(0, 0, 0, .1);
        }

        [data-h-theme="light"] .fc-gig-cat {
          background: rgba(0, 166, 103, .08);
        }

        [data-h-theme="light"] .fc-cta::before {
          background: radial-gradient(circle, rgba(0, 166, 103, .14), transparent 70%);
        }
      `}</style>

      <div className="fc-page">

        {/* Hero */}
        <section className="fc-hero">
          <div className="container p-4">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="banner-content">
                  <div className="mb-4">
                    <h1 className="mb-2">Get inspired with <span>projects</span> &amp; opportunities</h1>
                    <p className="lead-text">Discover the latest initiatives, programs, and collaborations that drive impact.</p>
                  </div>
                  <div className="fc-search-card">
                    <form onSubmit={handleSearchSubmit}>
                      <div className="row">
                        <div className="col-md-4 fc-input-block">
                          <label>Category</label>
                          <select
                            className="form-select"
                            value={search.category}
                            onChange={(e) => setSearch((s) => ({ ...s, category: e.target.value }))}
                          >
                            <option value="">Select</option>
                            {categories.map((cat) => (
                              <option value={cat.id} key={cat.id}>{cat.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-4 fc-input-block">
                          <label>Location</label>
                          <div className="fc-input-locaion">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Miami, USA"
                              value={search.location}
                              onChange={(e) => setSearch((s) => ({ ...s, location: e.target.value }))}
                            />
                            <img src="/assets/img/icons/map-pin-heart.svg" alt="Icon" />
                          </div>
                        </div>
                        <div className="col-md-4 fc-input-block">
                          <label>Keyword</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Need Graphic Designer"
                            value={search.keyword}
                            onChange={(e) => setSearch((s) => ({ ...s, keyword: e.target.value }))}
                          />
                        </div>
                      </div>
                      <button className="btn btn-fc-primary d-inline-flex align-items-center" type="submit">
                        <i className="ti ti-search me-2"></i> Search
                      </button>
                    </form>
                  </div>
                  <div className="fc-popular-search">
                    <h5>Popular Searches</h5>
                    <ul>
                      <li><button onClick={() => searchPopular('Online Mockup')}>Online Mockup</button></li>
                      <li><button onClick={() => searchPopular('Carpentering')}>Carpentering</button></li>
                      <li><button onClick={() => searchPopular('Event Organiser')}>Event Organiser</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block text-center">
                <div className="fc-search-card" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                  <i className="ti ti-bulb" style={{ fontSize: '8rem', color: 'var(--fc-accent)', opacity: .25 }}></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <div className="fc-categories">
          <div className="container">
            <div className="fc-section-header">
              <h2>Popular <span className="accent-dot">Categories</span></h2>
              <p>Unlock a world of opportunities and take control of your future</p>
            </div>
            <div className="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
              {categories.map((category) => (
                <div className="col d-flex" key={category.id}>
                  {/* Category cards now route into the filterable listing,
                      pre-filtered to this category. */}
                  <Link
                    href={route('user.projects.all', { category: category.id })}
                    className="fc-cat-card flex-fill"
                  >
                    <span className="fc-icon"><i className="ti ti-speakerphone"></i></span>
                    <h6 className="mb-1">{category.name}</h6>
                    <p>{category.projects_count ? category.projects_count : 0} Projects</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ongoing projects (preview only — full list lives on the "all projects" page) */}
        <div className="fc-projects">
          <div className="container">
            <div className="fc-section-header fc-section-header-split">
              <div>
                <h2>Our ongoing <span className="accent-dot">projects</span></h2>
                <p>Get inspired with projects like these</p>
              </div>
              <Link href={route('user.projects.all')} className="btn-fc-outline">
                View all projects <i className="ti ti-arrow-right"></i>
              </Link>
            </div>
            <div className="row g-4">
              {projects.map((project) => (
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
                      <Link href={route('user.projects.all', { category: project.category?.id })} className="fc-gig-cat">
                        {project.category?.name ?? 'General'}
                      </Link>
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
          </div>
        </div>

        {/* CTA */}
        <div className="container">
          <div className="fc-cta">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <img src="/assets/img/home/jointeam.svg" alt="img" className="d-none d-lg-block" />
              </div>
              <div className="col-lg-5">
                <h2 className="mb-3">Want to Get Involved?</h2>
                <p>Explore more projects, collaborate with talented individuals, or submit your own initiatives to make a meaningful impact.</p>
                <a href="/user/projects/submit" className="btn btn-fc-primary">Submit a Project</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

/** Mirrors Blade's Str::limit($text, 120) — truncates and appends '...' */
function truncate(text, length) {
  if (!text) return '';
  return text.length > length ? `${text.slice(0, length).trimEnd()}...` : text;
}

Projects.layout = (page) => (
  <GuestLayout
    children={page}
    title="Projects collaboration"
    description="Discover the latest initiatives, programs, and collaborations that drive impact."
  />
);