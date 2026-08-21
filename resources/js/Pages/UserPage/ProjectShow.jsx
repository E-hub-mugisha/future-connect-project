import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';


export default function ProjectShow({ project, recent = [] }) {
  const sponsorForm = useForm({
    message: '',
    amount: '',
    currency: 'USD',
  });

  const applyForm = useForm({
    message: '',
    portfolio_url: '',
    attachment: null,
    name: '',
    email: '',
  });

  function submitSponsor(e) {
    e.preventDefault();
    sponsorForm.post(route('diaspora.sponsorship.store', project.id));
  }

  function submitApply(e) {
    e.preventDefault();
    applyForm.post(route('user.projects.apply', project.id), {
      forceFormData: true,
    });
  }

  return (
    <>
      <Head title={project.title} />

      <style>{`
        :root{
          --fc-bg:#0e1618;
          --fc-bg-alt:#141d20;
          --fc-card:#172124;
          --fc-border:#243033;
          --fc-accent:#48d597;
          --fc-accent-dark:#33a876;
          --fc-white:#ffffff;
          --fc-muted:#9fb0ae;
        }

        .fc-page{ background:var(--fc-bg); color:var(--fc-white); padding:60px 0; }

        .fc-card{
          background:var(--fc-card);
          border:1px solid var(--fc-border);
          border-radius:20px;
          overflow:hidden;
        }

        /* Header */
        .fc-proj-header{
          padding:28px 30px;
          border-bottom:1px solid var(--fc-border);
          background:
            radial-gradient(circle at 90% 0%, rgba(72,213,151,.10), transparent 55%),
            var(--fc-bg-alt);
        }
        .fc-proj-header h2{ color:var(--fc-white); font-weight:700; margin:0; }
        .fc-proj-meta{ color:var(--fc-muted); font-size:.88rem; margin-top:10px; }
        .fc-proj-meta i{ color:var(--fc-accent); }

        .fc-badge-verified{
          background:rgba(72,213,151,.15);
          color:var(--fc-accent);
          font-weight:700;
          font-size:.78rem;
          padding:6px 14px;
          border-radius:30px;
        }

        /* Body */
        .fc-proj-body{ padding:30px; }
        .fc-proj-desc{ color:var(--fc-muted); line-height:1.7; margin-bottom:28px; }

        .fc-info-box{
          background:var(--fc-bg-alt);
          border:1px solid var(--fc-border);
          border-radius:14px;
          padding:18px;
          text-align:center;
          transition:.2s;
          height:100%;
        }
        .fc-info-box:hover{
          border-color:var(--fc-accent);
          transform:translateY(-3px);
        }
        .fc-info-box small{ color:var(--fc-muted); display:block; margin-bottom:6px; font-size:.78rem; text-transform:uppercase; letter-spacing:.04em; }
        .fc-info-box span{ color:var(--fc-white); font-weight:700; font-size:1.05rem; }

        .btn-fc-primary{
          background:var(--fc-accent);
          border:none;
          color:#06231a;
          font-weight:700;
          border-radius:30px;
          padding:.7rem 1.6rem;
          transition:.2s ease;
        }
        .btn-fc-primary:hover{ background:var(--fc-accent-dark); color:#06231a; transform:translateY(-1px); }

        .btn-fc-outline-primary{
          background:transparent;
          border:1px solid var(--fc-accent);
          color:var(--fc-accent);
          font-weight:600;
          border-radius:30px;
          padding:.6rem 1.4rem;
          transition:.2s;
        }
        .btn-fc-outline-primary:hover{ background:var(--fc-accent); color:#06231a; }

        /* Sidebar */
        .fc-sidebar-header{
          padding:18px 22px;
          border-bottom:1px solid var(--fc-border);
          font-weight:700;
          color:var(--fc-white);
        }
        .fc-sidebar-header i{ color:var(--fc-accent); }

        .fc-recent-item{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:16px 22px;
          border-bottom:1px solid var(--fc-border);
          text-decoration:none;
          transition:.2s;
        }
        .fc-recent-item:last-child{ border-bottom:none; }
        .fc-recent-item:hover{ background:var(--fc-bg-alt); }
        .fc-recent-item h6{ color:var(--fc-white); font-weight:600; margin-bottom:4px; }
        .fc-recent-item small{ color:var(--fc-muted); }
        .fc-recent-item small i{ color:var(--fc-accent); }
        .fc-recent-item .verified-icon{ color:var(--fc-accent); }

        .fc-cta-card{ padding:34px 24px; text-align:center; }
        .fc-cta-card h6{ color:var(--fc-white); font-weight:700; }
        .fc-cta-card p{ color:var(--fc-muted); font-size:.88rem; }

        /* Modals */
        .modal-content{
          background:var(--fc-card);
          border:1px solid var(--fc-border);
          border-radius:18px;
          color:var(--fc-white);
        }
        .modal-header{
          border-bottom:1px solid var(--fc-border);
          background:var(--fc-bg-alt) !important;
        }
        .modal-header h5{ color:var(--fc-white); }
        .modal-header small{ color:var(--fc-muted) !important; }
        .modal-footer{ border-top:1px solid var(--fc-border); }
        .modal .form-label{ color:var(--fc-muted); font-weight:600; font-size:.85rem; }
        .modal .form-control, .modal .form-select, .modal textarea{
          background:var(--fc-bg-alt) !important;
          border:1px solid var(--fc-border) !important;
          color:var(--fc-white) !important;
          border-radius:12px !important;
        }
        .modal .form-control::placeholder{ color:#5f7370; }
        .modal .form-control:focus, .modal .form-select:focus{
          border-color:var(--fc-accent) !important;
          box-shadow:0 0 0 3px rgba(72,213,151,.15) !important;
        }
        .modal .file-upload-box{
          background:var(--fc-bg-alt);
          border:1px dashed var(--fc-border) !important;
        }
        .modal .btn-light{
          background:var(--fc-bg-alt);
          border:1px solid var(--fc-border);
          color:var(--fc-white);
        }
        .modal .btn-light:hover{ background:var(--fc-border); color:var(--fc-white); }
        .modal .alert-danger{
          background:rgba(220,53,69,.12);
          border:1px solid rgba(220,53,69,.3);
          color:#ff8a97;
        }

        /* ── LIGHT THEME OVERRIDES (matches header toggle) ── */
        [data-h-theme="light"] {
          --fc-bg: #f6faf8;
          --fc-bg-alt: #eef4f1;
          --fc-card: #ffffff;
          --fc-border: rgba(0, 100, 60, 0.12);
          --fc-accent: #00a667;
          --fc-accent-dark: #00c07a;
          --fc-white: #10201b;
          --fc-muted: #5b7a70;
        }

        /* Header radial glow — soften on light bg */
        [data-h-theme="light"] .fc-proj-header {
          background:
            radial-gradient(circle at 90% 0%, rgba(0,166,103,.08), transparent 55%),
            var(--fc-bg-alt);
        }

        /* Verified badge background hardcoded rgba */
        [data-h-theme="light"] .fc-badge-verified {
          background: rgba(0, 166, 103, .14);
        }

        /* Focus glow ring hardcoded to dark-theme accent rgba */
        [data-h-theme="light"] .modal .form-control:focus,
        [data-h-theme="light"] .modal .form-select:focus {
          box-shadow: 0 0 0 3px rgba(0, 166, 103, .15) !important;
        }

        /* Placeholder color was a dark-theme-only hex */
        [data-h-theme="light"] .modal .form-control::placeholder {
          color: #a9c2b8;
        }

        /* Alert-danger tuned for dark bg — lighten to stay legible on white */
        [data-h-theme="light"] .modal .alert-danger {
          background: rgba(220,53,69,.08);
          border: 1px solid rgba(220,53,69,.25);
          color: #b3273a;
        }

        /* Primary button text color (#06231a) reads fine on the light-mode
           accent green too, so intentionally left unchanged. */
      `}</style>

      <div className="fc-page">
        <div className="container">
          <div className="row g-4">

            {/* Project Details */}
            <div className="col-lg-8">
              <div className="fc-card">

                <div className="fc-proj-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <h2>{project.title}</h2>
                    {project.verified && (
                      <span className="fc-badge-verified">
                        <i className="bi bi-patch-check-fill me-1"></i> Verified
                      </span>
                    )}
                  </div>
                  <p className="fc-proj-meta mb-0">
                    <i className="bi bi-person-circle me-1"></i> {project.user?.name ?? 'Unknown'}
                    &nbsp;•&nbsp;
                    <i className="bi bi-geo-alt me-1"></i> {project.location ?? 'Remote'}
                    &nbsp;•&nbsp;
                    <i className="bi bi-briefcase me-1"></i> {project.category?.name ?? 'General'}
                  </p>
                </div>

                <div className="fc-proj-body">
                  <p className="fc-proj-desc">{project.description}</p>

                  <div className="row g-3 mb-4">
                    <div className="col-md-4">
                      <div className="fc-info-box">
                        <small>💰 Budget</small>
                        <span>{project.budget}</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="fc-info-box">
                        <small>📊 Status</small>
                        <span>{capitalize(project.status)}</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="fc-info-box">
                        <small>🕒 Posted</small>
                        <span>{project.posted_ago}</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-2 flex-wrap">
                    <button className="btn btn-fc-primary" data-bs-toggle="modal" data-bs-target="#applyModal">
                      <i className="bi bi-envelope-paper me-2"></i> Apply for Collaboration
                    </button>
                    <button type="button" className="btn btn-fc-outline-primary" data-bs-toggle="modal" data-bs-target="#sponsorModal">
                      Sponsor This Project
                    </button>
                  </div>

                  {/* Sponsor Modal */}
                  <div className="modal fade" id="sponsorModal" tabIndex="-1" aria-labelledby="sponsorModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title fw-bold" id="sponsorModalLabel">Sponsor: {project.title}</h5>
                          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          {Object.keys(sponsorForm.errors).length > 0 && (
                            <div className="alert alert-danger">
                              <h6 className="mb-2 fw-bold">❗ Please fix the following errors:</h6>
                              <ul className="mb-0">
                                {Object.values(sponsorForm.errors).map((error, i) => (
                                  <li key={i}>{error}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <p className="text-muted mb-4" style={{ color: 'var(--fc-muted)' }}>{project.description}</p>

                          <form id="sponsorForm" onSubmit={submitSponsor}>
                            <div className="col-12 mb-3">
                              <label className="form-label">Message</label>
                              <textarea
                                name="message"
                                rows="4"
                                className="form-control"
                                placeholder="Leave a message..."
                                value={sponsorForm.data.message}
                                onChange={(e) => sponsorForm.setData('message', e.target.value)}
                              ></textarea>
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Amount</label>
                              <input
                                type="number"
                                name="amount"
                                className={`form-control${sponsorForm.errors.amount ? ' is-invalid' : ''}`}
                                value={sponsorForm.data.amount}
                                onChange={(e) => sponsorForm.setData('amount', e.target.value)}
                                required
                              />
                              {sponsorForm.errors.amount && (
                                <div className="invalid-feedback">{sponsorForm.errors.amount}</div>
                              )}
                            </div>

                            <div className="mb-3">
                              <label className="form-label">Currency</label>
                              <select
                                name="currency"
                                className={`form-select${sponsorForm.errors.currency ? ' is-invalid' : ''}`}
                                value={sponsorForm.data.currency}
                                onChange={(e) => sponsorForm.setData('currency', e.target.value)}
                              >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="RWF">RWF</option>
                              </select>
                              {sponsorForm.errors.currency && (
                                <div className="invalid-feedback">{sponsorForm.errors.currency}</div>
                              )}
                            </div>

                            <button type="submit" className="btn btn-fc-primary w-100" disabled={sponsorForm.processing}>
                              Sponsor Now
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="fc-card mb-4">
                <div className="fc-sidebar-header">
                  <i className="bi bi-stars me-2"></i> Recent Projects
                </div>
                <div>
                  {recent.map((item) => (
                    <Link key={item.id} href={route('user.projects.show', item.id)} className="fc-recent-item">
                      <div>
                        <h6 className="mb-1">{item.title}</h6>
                        <small>
                          <i className="bi bi-tag me-1"></i>{item.category?.name ?? 'General'}
                        </small>
                      </div>
                      {item.verified && (
                        <i className="bi bi-patch-check-fill verified-icon"></i>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="fc-card">
                <div className="fc-cta-card">
                  <h6 className="mb-2">Want to post your own project?</h6>
                  <p className="mb-3">Share your idea and find talented collaborators.</p>
                  <a href="#" className="btn btn-fc-outline-primary">
                    <i className="bi bi-plus-circle me-1"></i> Post a Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <div className="modal fade" id="applyModal" tabIndex="-1" aria-labelledby="applyModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content overflow-hidden">

            <div className="modal-header p-4">
              <div>
                <h5 className="modal-title fw-bold mb-1"><i className="bi bi-envelope-paper me-2" style={{ color: 'var(--fc-accent)' }}></i> Apply for Collaboration</h5>
                <small>Connect with this project by sharing your skills and experience</small>
              </div>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            <form onSubmit={submitApply} className="p-3 p-md-4">
              <div className="modal-body">
                <div className="mb-4">
                  <label className="form-label">
                    <i className="bi bi-person-circle me-1" style={{ color: 'var(--fc-accent)' }}></i> Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control p-3"
                    placeholder="Your full name"
                    value={applyForm.data.name}
                    onChange={(e) => applyForm.setData('name', e.target.value)}
                    required
                  />
                  {applyForm.errors.name && (
                    <div className="text-danger small mt-1">{applyForm.errors.name}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    <i className="bi bi-envelope me-1" style={{ color: 'var(--fc-accent)' }}></i> Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control p-3"
                    placeholder="Your email address"
                    value={applyForm.data.email}
                    onChange={(e) => applyForm.setData('email', e.target.value)}
                    required
                  />
                  {applyForm.errors.email && (
                    <div className="text-danger small mt-1">{applyForm.errors.email}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    <i className="bi bi-chat-dots me-1" style={{ color: 'var(--fc-accent)' }}></i> Message / Collaboration Proposal
                  </label>
                  <textarea
                    name="message"
                    className="form-control p-3"
                    rows="4"
                    placeholder="Tell us about your expertise and how you can contribute..."
                    value={applyForm.data.message}
                    onChange={(e) => applyForm.setData('message', e.target.value)}
                    required
                  ></textarea>
                  {applyForm.errors.message && (
                    <div className="text-danger small mt-1">{applyForm.errors.message}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    <i className="bi bi-link-45deg me-1" style={{ color: 'var(--fc-accent)' }}></i> Portfolio URL (optional)
                  </label>
                  <input
                    type="url"
                    name="portfolio_url"
                    className="form-control p-3"
                    placeholder="https://yourportfolio.com"
                    value={applyForm.data.portfolio_url}
                    onChange={(e) => applyForm.setData('portfolio_url', e.target.value)}
                  />
                  {applyForm.errors.portfolio_url && (
                    <div className="text-danger small mt-1">{applyForm.errors.portfolio_url}</div>
                  )}
                </div>

                <div className="mb-2">
                  <label className="form-label">
                    <i className="bi bi-paperclip me-1" style={{ color: 'var(--fc-accent)' }}></i> Attach File (optional)
                  </label>
                  <div className="file-upload-box p-4 rounded-4 text-center">
                    <input
                      type="file"
                      name="attachment"
                      className="form-control form-control-sm border-0"
                      accept=".pdf,.doc,.docx,.zip"
                      onChange={(e) => applyForm.setData('attachment', e.target.files[0])}
                    />
                    <small className="d-block mt-2" style={{ color: 'var(--fc-muted)' }}>Accepted: PDF, DOC, DOCX, ZIP — Max 2MB</small>
                  </div>
                  {applyForm.errors.attachment && (
                    <div className="text-danger small mt-1">{applyForm.errors.attachment}</div>
                  )}
                </div>
              </div>

              <div className="modal-footer d-flex justify-content-between px-4 pb-4">
                <button type="button" className="btn btn-light" data-bs-dismiss="modal">
                  <i className="bi bi-x-circle me-1"></i> Cancel
                </button>
                <button type="submit" className="btn btn-fc-primary px-5" disabled={applyForm.processing}>
                  <i className="bi bi-send-check me-1"></i> Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function capitalize(text) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

ProjectShow.layout = (page) => (
  <GuestLayout children={page} title={page.props.project.title} />
);
