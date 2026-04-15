{{-- Shared styles injected into every talent admin view --}}
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap');

  :root {
    --fc-bg:       #0d0f14;
    --fc-surface:  #13161e;
    --fc-card:     #181c27;
    --fc-border:   #252a38;
    --fc-accent:   #4ade80;
    --fc-accent2:  #38bdf8;
    --fc-muted:    #6b7280;
    --fc-text:     #e2e8f0;
    --fc-text-dim: #94a3b8;
    --fc-danger:   #f87171;
    --fc-warn:     #fbbf24;
    --fc-radius:   12px;
    --fc-radius-sm:8px;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body.fc-admin {
    font-family: 'DM Sans', sans-serif;
    background: var(--fc-bg);
    color: var(--fc-text);
    min-height: 100vh;
  }

  .fc-wrap { max-width: 1280px; margin: 0 auto; padding: 2rem 1.5rem; }

  /* Page header */
  .fc-header {
    display: flex; align-items: flex-start; justify-content: space-between;
    gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;
  }
  .fc-header-left h1 {
    font-family: 'Syne', sans-serif; font-size: 1.75rem; font-weight: 700;
    color: var(--fc-text); letter-spacing: -0.02em;
  }
  .fc-header-left p { color: var(--fc-text-dim); font-size: 0.875rem; margin-top: 0.25rem; }
  .fc-breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--fc-muted); margin-bottom: 0.5rem; }
  .fc-breadcrumb a { color: var(--fc-text-dim); text-decoration: none; }
  .fc-breadcrumb a:hover { color: var(--fc-accent); }
  .fc-breadcrumb span { color: var(--fc-muted); }

  /* Buttons */
  .fc-btn {
    display: inline-flex; align-items: center; gap: 0.4rem;
    padding: 0.55rem 1.1rem; border-radius: var(--fc-radius-sm);
    font-size: 0.875rem; font-weight: 500; cursor: pointer;
    border: none; transition: all .15s ease; text-decoration: none; white-space: nowrap;
  }
  .fc-btn-primary { background: var(--fc-accent); color: #0d0f14; }
  .fc-btn-primary:hover { background: #86efac; }
  .fc-btn-secondary { background: var(--fc-card); color: var(--fc-text); border: 1px solid var(--fc-border); }
  .fc-btn-secondary:hover { background: var(--fc-border); }
  .fc-btn-danger { background: transparent; color: var(--fc-danger); border: 1px solid var(--fc-danger); }
  .fc-btn-danger:hover { background: var(--fc-danger); color: #fff; }
  .fc-btn-ghost { background: transparent; color: var(--fc-text-dim); border: 1px solid transparent; }
  .fc-btn-ghost:hover { background: var(--fc-card); border-color: var(--fc-border); }
  .fc-btn-sm { padding: 0.35rem 0.75rem; font-size: 0.8rem; }
  .fc-btn-icon { padding: 0.5rem; border-radius: var(--fc-radius-sm); }

  /* Cards */
  .fc-card {
    background: var(--fc-card); border: 1px solid var(--fc-border);
    border-radius: var(--fc-radius); padding: 1.5rem;
  }

  /* Badges */
  .fc-badge {
    display: inline-flex; align-items: center; gap: 0.3rem;
    padding: 0.2rem 0.6rem; border-radius: 999px; font-size: 0.75rem; font-weight: 500;
  }
  .fc-badge-green  { background: #052e16; color: var(--fc-accent); }
  .fc-badge-blue   { background: #0c2340; color: var(--fc-accent2); }
  .fc-badge-yellow { background: #2d1b00; color: var(--fc-warn); }
  .fc-badge-red    { background: #2d0a0a; color: var(--fc-danger); }
  .fc-badge-gray   { background: #1e2433; color: var(--fc-muted); }
  .fc-badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

  /* Forms */
  .fc-form-group { display: flex; flex-direction: column; gap: 0.4rem; }
  .fc-label { font-size: 0.8rem; font-weight: 500; color: var(--fc-text-dim); letter-spacing: 0.04em; text-transform: uppercase; }
  .fc-input, .fc-select, .fc-textarea {
    background: var(--fc-surface); border: 1px solid var(--fc-border);
    border-radius: var(--fc-radius-sm); color: var(--fc-text);
    padding: 0.65rem 0.9rem; font-size: 0.9rem; font-family: inherit;
    transition: border-color .15s; width: 100%; outline: none;
  }
  .fc-input:focus, .fc-select:focus, .fc-textarea:focus { border-color: var(--fc-accent); }
  .fc-input::placeholder, .fc-textarea::placeholder { color: var(--fc-muted); }
  .fc-select option { background: var(--fc-surface); }
  .fc-textarea { resize: vertical; min-height: 110px; }
  .fc-input-error { border-color: var(--fc-danger) !important; }
  .fc-error-msg { font-size: 0.78rem; color: var(--fc-danger); margin-top: 0.2rem; }
  .fc-hint { font-size: 0.78rem; color: var(--fc-muted); margin-top: 0.2rem; }

  /* Toggle / checkbox */
  .fc-toggle-wrap { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; }
  .fc-toggle-wrap input[type=checkbox] { display: none; }
  .fc-toggle {
    width: 40px; height: 22px; background: var(--fc-border); border-radius: 999px;
    position: relative; transition: background .2s;
  }
  .fc-toggle::after {
    content: ''; position: absolute; top: 3px; left: 3px;
    width: 16px; height: 16px; border-radius: 50%; background: #fff;
    transition: transform .2s;
  }
  .fc-toggle-wrap input:checked ~ .fc-toggle { background: var(--fc-accent); }
  .fc-toggle-wrap input:checked ~ .fc-toggle::after { transform: translateX(18px); }
  .fc-toggle-label { font-size: 0.875rem; color: var(--fc-text-dim); }

  /* Alert */
  .fc-alert {
    display: flex; align-items: flex-start; gap: 0.75rem;
    padding: 0.875rem 1rem; border-radius: var(--fc-radius-sm);
    font-size: 0.875rem; margin-bottom: 1.5rem;
  }
  .fc-alert-success { background: #052e16; border: 1px solid #166534; color: var(--fc-accent); }
  .fc-alert-error   { background: #2d0a0a; border: 1px solid #7f1d1d; color: var(--fc-danger); }

  /* Grid helpers */
  .fc-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
  .fc-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.25rem; }
  .fc-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }

  @media (max-width: 768px) {
    .fc-grid-2, .fc-grid-3, .fc-grid-4 { grid-template-columns: 1fr; }
  }

  /* Divider */
  .fc-divider { border: none; border-top: 1px solid var(--fc-border); margin: 1.5rem 0; }

  /* Section title inside card */
  .fc-section-title {
    font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700;
    color: var(--fc-text-dim); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;
  }
</style>
