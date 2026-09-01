import React, { useState, useEffect } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function SubmitProject({ categories = [], old = {}, status = null, needsAccount = false }) {
  const { props } = usePage();

  const [accountKnown, setAccountKnown] = useState(!needsAccount);
  const [showAccountAlert, setShowAccountAlert] = useState(needsAccount);

  const { data, setData, post, processing, errors, reset } = useForm({
    title: old.title ?? '',
    description: old.description ?? '',
    category_id: old.category_id ?? '',
    budget_amount: old.budget_amount ?? '',
    budget_currency: old.budget_currency ?? 'RWF',
    location: old.location ?? '',
    email: old.email ?? '',
    first_name: old.first_name ?? '',
    last_name: old.last_name ?? '',
  });

  useEffect(() => {
    if (needsAccount) {
      setShowAccountAlert(true);
      setAccountKnown(false);
    }
  }, [needsAccount]);

  function handleSubmit(e) {
    e.preventDefault();
    post(route('user.projects.store'));
  }

  return (
    <>
      <Head title="Submit a Project" />

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
          --fc-danger: #ff6b6b;
        }

        .fc-page { background: var(--fc-bg); color: var(--fc-white); }

        .fc-list-header {
          border-bottom: 1px solid var(--fc-border);
          padding: 48px 0 36px;
        }
        .fc-list-header h1 { font-weight: 700; font-size: 2rem; color: var(--fc-white); margin-bottom: 6px; }
        .fc-list-header h1 span { color: var(--fc-accent); }
        .fc-list-header p { color: var(--fc-muted); }
        .fc-breadcrumb { color: var(--fc-muted); font-size: .85rem; margin-bottom: 14px; }
        .fc-breadcrumb a { color: var(--fc-muted); text-decoration: none; }
        .fc-breadcrumb a:hover { color: var(--fc-accent); }

        .fc-form-wrap { padding: 40px 0 80px; }

        .fc-form-card {
          background: var(--fc-card);
          border: 1px solid var(--fc-border);
          border-radius: 18px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, .35);
        }

        .fc-section-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--fc-white);
          margin-bottom: 4px;
        }
        .fc-section-sub { color: var(--fc-muted); font-size: .82rem; margin-bottom: 20px; }

        .fc-divider { border-top: 1px solid var(--fc-border); margin: 28px 0; }

        .fc-form-card label {
          color: var(--fc-muted);
          font-size: .78rem;
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: 6px;
          display: block;
          font-weight: 600;
        }

        .fc-form-card .form-control,
        .fc-form-card .form-select,
        .fc-form-card textarea.form-control {
          background: var(--fc-bg-alt);
          border: 1px solid var(--fc-border);
          color: var(--fc-white);
          border-radius: 10px;
          padding: .65rem .9rem;
        }

        .fc-form-card .form-control::placeholder { color: #5f7370; }

        .fc-form-card .form-control:focus,
        .fc-form-card .form-select:focus {
          background: var(--fc-bg-alt);
          border-color: var(--fc-accent);
          color: var(--fc-white);
          box-shadow: 0 0 0 3px rgba(72, 213, 151, .15);
        }

        .fc-field-error { color: var(--fc-danger); font-size: .78rem; margin-top: 6px; }

        .fc-account-toggle {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .fc-toggle-pill {
          flex: 1;
          border: 1px solid var(--fc-border);
          background: var(--fc-bg-alt);
          color: var(--fc-muted);
          border-radius: 12px;
          padding: 12px 14px;
          cursor: pointer;
          text-align: left;
          transition: .2s ease;
        }

        .fc-toggle-pill strong { display: block; color: var(--fc-white); font-size: .88rem; margin-bottom: 2px; }
        .fc-toggle-pill span { font-size: .76rem; color: var(--fc-muted); }

        .fc-toggle-pill.active {
          border-color: var(--fc-accent);
          background: rgba(72, 213, 151, .1);
        }
        .fc-toggle-pill.active strong { color: var(--fc-accent); }

        .fc-alert {
          border-radius: 12px;
          padding: 14px 16px;
          font-size: .85rem;
          margin-bottom: 20px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .fc-alert-info {
          background: rgba(72, 213, 151, .1);
          border: 1px solid rgba(72, 213, 151, .35);
          color: var(--fc-white);
        }
        .fc-alert-info .fc-alert-icon { color: var(--fc-accent); }

        .fc-alert-success {
          background: rgba(72, 213, 151, .12);
          border: 1px solid rgba(72, 213, 151, .4);
          color: var(--fc-white);
        }

        .fc-name-fields {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height .3s ease, opacity .25s ease;
        }
        .fc-name-fields.open { max-height: 240px; opacity: 1; margin-top: 4px; }

        .btn-fc-primary {
          background: var(--fc-accent);
          border: none;
          color: #06231a;
          font-weight: 700;
          border-radius: 10px;
          padding: .75rem 1.6rem;
          transition: .2s ease;
        }
        .btn-fc-primary:hover { background: var(--fc-accent-dark); color: #06231a; }
        .btn-fc-primary:disabled { opacity: .6; cursor: not-allowed; }

        .fc-hint { color: var(--fc-muted); font-size: .78rem; margin-top: 6px; }

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
          --fc-danger: #d64545;
        }

        [data-h-theme="light"] .fc-form-card { box-shadow: 0 10px 30px rgba(0, 0, 0, .08); }
        [data-h-theme="light"] .fc-form-card .form-control::placeholder { color: #a9c2b8; }
        [data-h-theme="light"] .fc-form-card .form-control:focus,
        [data-h-theme="light"] .fc-form-card .form-select:focus {
          box-shadow: 0 0 0 3px rgba(0, 166, 103, .15);
        }
        [data-h-theme="light"] .fc-alert-info,
        [data-h-theme="light"] .fc-alert-success {
          background: rgba(0, 166, 103, .08);
          border-color: rgba(0, 166, 103, .3);
        }
      `}</style>

      <div className="fc-page">
        <section className="fc-list-header">
          <div className="container p-4">
            <div className="fc-breadcrumb">
              <Link href={route('user.projects.index')}>Projects</Link> / Submit a project
            </div>
            <h1>Submit a <span>project</span></h1>
            <p>Tell us what you need done — talent on FutureConnect will start applying.</p>
          </div>
        </section>

        <section className="fc-form-wrap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="fc-form-card">

                  {status && (
                    <div className={`fc-alert ${showAccountAlert ? 'fc-alert-info' : 'fc-alert-success'}`}>
                      <span className="fc-alert-icon"><i className="fa-solid fa-circle-info"></i></span>
                      <span>{status}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* ---- Project details ---- */}
                    <div className="fc-section-title">Project details</div>
                    <div className="fc-section-sub">What are you looking to get done?</div>

                    <div className="mb-3">
                      <label>Project title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Need a graphic designer for a logo"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                      />
                      {errors.title && <div className="fc-field-error">{errors.title}</div>}
                    </div>

                    <div className="mb-3">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Describe the scope, deliverables and timeline..."
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                      />
                      {errors.description && <div className="fc-field-error">{errors.description}</div>}
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>Category</label>
                        <select
                          className="form-select"
                          value={data.category_id}
                          onChange={(e) => setData('category_id', e.target.value)}
                        >
                          <option value="">Select a category</option>
                          {categories.map((cat) => (
                            <option value={cat.id} key={cat.id}>{cat.name}</option>
                          ))}
                        </select>
                        {errors.category_id && <div className="fc-field-error">{errors.category_id}</div>}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Location</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Kigali, Rwanda"
                          value={data.location}
                          onChange={(e) => setData('location', e.target.value)}
                        />
                        {errors.location && <div className="fc-field-error">{errors.location}</div>}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>Budget amount</label>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          className="form-control"
                          placeholder="150000"
                          value={data.budget_amount}
                          onChange={(e) => setData('budget_amount', e.target.value)}
                        />
                        {errors.budget_amount && <div className="fc-field-error">{errors.budget_amount}</div>}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label>Currency</label>
                        <select
                          className="form-select"
                          value={data.budget_currency}
                          onChange={(e) => setData('budget_currency', e.target.value)}
                        >
                          <option value="RWF">RWF</option>
                          <option value="USD">USD</option>
                        </select>
                      </div>
                    </div>

                    <div className="fc-divider"></div>

                    {/* ---- Contact / account ---- */}
                    <div className="fc-section-title">Your contact details</div>
                    <div className="fc-section-sub">We'll use this to attach the project to your account.</div>

                    <div className="fc-account-toggle">
                      <button
                        type="button"
                        className={`fc-toggle-pill ${accountKnown ? 'active' : ''}`}
                        onClick={() => setAccountKnown(true)}
                      >
                        <strong>I already have an account</strong>
                        <span>We'll match it to your email</span>
                      </button>
                      <button
                        type="button"
                        className={`fc-toggle-pill ${!accountKnown ? 'active' : ''}`}
                        onClick={() => setAccountKnown(false)}
                      >
                        <strong>This is my first project</strong>
                        <span>We'll create an account for you</span>
                      </button>
                    </div>

                    <div className="mb-3">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="you@example.com"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                      />
                      {errors.email && <div className="fc-field-error">{errors.email}</div>}
                      <div className="fc-hint">
                        {accountKnown
                          ? "If this matches an existing account, we'll attach the project to it automatically."
                          : "We couldn't find an account yet? Add your name below and we'll create one and email you the login details."}
                      </div>
                    </div>

                    <div className={`fc-name-fields ${!accountKnown || showAccountAlert ? 'open' : ''}`}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label>First name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Eric"
                            value={data.first_name}
                            onChange={(e) => setData('first_name', e.target.value)}
                          />
                          {errors.first_name && <div className="fc-field-error">{errors.first_name}</div>}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label>Last name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Niyonzima"
                            value={data.last_name}
                            onChange={(e) => setData('last_name', e.target.value)}
                          />
                          {errors.last_name && <div className="fc-field-error">{errors.last_name}</div>}
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-fc-primary mt-2" disabled={processing}>
                      {processing ? 'Submitting...' : 'Submit project'}
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

SubmitProject.layout = (page) => (
  <GuestLayout
    children={page}
    title="Submit a Project"
    description="Post a project and get matched with verified skills on FutureConnect."
  />
);