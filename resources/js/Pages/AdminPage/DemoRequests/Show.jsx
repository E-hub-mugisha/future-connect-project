import React from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const IconBack = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7M5 12h14" /></svg>
);
const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z" /></svg>
);

export default function Show({ demoRequest }) {
  const { flash } = usePage().props;

  const statusBadge = {
    pending: { bg: 'rgba(245,158,11,.15)', color: '#f59e0b' },
    confirmed: { bg: 'rgba(0,166,103,.15)', color: '#00a667' },
    completed: { bg: 'rgba(59,130,246,.15)', color: '#3b82f6' },
    cancelled: { bg: 'rgba(220,76,76,.12)', color: '#dc4c4c' },
  };

  function confirmRequest() {
    router.patch(route('admin.demo-requests.confirm', demoRequest.id), {}, { preserveScroll: true });
  }

  function cancelRequest() {
    router.patch(route('admin.demo-requests.cancel', demoRequest.id), {}, { preserveScroll: true });
  }

  function completeRequest() {
    router.patch(route('admin.demo-requests.complete', demoRequest.id), {}, { preserveScroll: true });
  }

  function destroy() {
    if (!confirm(`Delete the demo request from ${demoRequest.full_name}? This cannot be undone.`)) return;
    router.delete(route('admin.demo-requests.destroy', demoRequest.id));
  }

  return (
    <div data-h-scope="demo-request-show">
      <Head title={demoRequest.full_name} />
      <style>{`
        [data-h-scope="demo-request-show"] {
          --bg-deep: #f6faf8; --bg-card: #F5f5f7; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1); --accent-glow: rgba(0,166,103,.22);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
          --danger: #dc4c4c; --danger-dim: rgba(220,76,76,.08);
        }
        [data-h-scope="demo-request-show"] .ds-wrap { max-width: 1000px; margin: 0 auto; padding: 2.5rem 2rem; font-family: 'DM Sans', sans-serif; color: var(--text); }
        [data-h-scope="demo-request-show"] .ds-back {
          color: var(--muted); text-decoration: none; font-size: .82rem; display: inline-flex;
          align-items: center; gap: .4rem; margin-bottom: 1.25rem;
        }
        [data-h-scope="demo-request-show"] .ds-back:hover { color: var(--accent); }

        [data-h-scope="demo-request-show"] .ds-flash {
          background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3); color: var(--accent);
          border-radius: 10px; padding: .85rem 1.1rem; font-size: .85rem; margin-bottom: 1.5rem;
        }

        [data-h-scope="demo-request-show"] .ds-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem; }
        [data-h-scope="demo-request-show"] .ds-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.4rem; color: var(--white); }
        [data-h-scope="demo-request-show"] .ds-sub { color: var(--muted); font-size: .82rem; margin-top: .3rem; }
        [data-h-scope="demo-request-show"] .badge { display: inline-block; padding: .35rem .9rem; border-radius: 50px; font-size: .78rem; font-weight: 700; text-transform: capitalize; }

        [data-h-scope="demo-request-show"] .ds-grid { display: grid; grid-template-columns: 1fr 300px; gap: 1.75rem; align-items: start; }
        @media (max-width: 900px) { [data-h-scope="demo-request-show"] .ds-grid { grid-template-columns: 1fr; } }

        [data-h-scope="demo-request-show"] .card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem;
          margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(16,32,27,.04);
        }
        [data-h-scope="demo-request-show"] .card h3 {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .95rem; color: var(--white);
          margin: 0 0 1rem; padding-bottom: .75rem; border-bottom: 1px solid var(--border);
        }

        [data-h-scope="demo-request-show"] .info-row { display: flex; justify-content: space-between; padding: .5rem 0; font-size: .85rem; border-bottom: 1px solid var(--border); gap: 1rem; }
        [data-h-scope="demo-request-show"] .info-row:last-child { border-bottom: none; }
        [data-h-scope="demo-request-show"] .info-row span:first-child { color: var(--muted); flex-shrink: 0; }
        [data-h-scope="demo-request-show"] .info-row span:last-child { color: var(--text); font-weight: 500; text-align: right; }

        [data-h-scope="demo-request-show"] .ds-message { font-size: .87rem; line-height: 1.6; color: var(--text); white-space: pre-wrap; }
        [data-h-scope="demo-request-show"] .ds-no-message { font-size: .85rem; color: var(--muted); }

        [data-h-scope="demo-request-show"] .btn-primary {
          width: 100%; background: var(--accent); color: #F5f5f7; border: none;
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: .9rem;
          padding: .85rem; border-radius: 10px; cursor: pointer; margin-bottom: .6rem;
          box-shadow: 0 0 24px var(--accent-glow); transition: transform .25s;
        }
        [data-h-scope="demo-request-show"] .btn-primary:hover { transform: translateY(-2px); }
        [data-h-scope="demo-request-show"] .btn-secondary {
          width: 100%; background: var(--bg-raised); color: var(--text); border: 1px solid var(--border);
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem;
          padding: .75rem; border-radius: 10px; cursor: pointer; margin-bottom: .5rem; transition: all .2s;
        }
        [data-h-scope="demo-request-show"] .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
        [data-h-scope="demo-request-show"] .btn-danger:hover { border-color: var(--danger); color: var(--danger); background: var(--danger-dim); }
      `}</style>

      <div className="ds-wrap">
        <Link href={route('admin.demo-requests.index')} className="ds-back"><IconBack /> Back to Demo Requests</Link>

        {flash?.success && <div className="ds-flash">{flash.success}</div>}

        <div className="ds-header">
          <div>
            <div className="ds-title">{demoRequest.full_name}</div>
            <div className="ds-sub">Requested on {new Date(demoRequest.created_at).toLocaleString()}</div>
          </div>
          <span className="badge" style={{ background: statusBadge[demoRequest.status]?.bg, color: statusBadge[demoRequest.status]?.color }}>
            {demoRequest.status}
          </span>
        </div>

        <div className="ds-grid">
          <div>
            <div className="card">
              <h3>Contact</h3>
              <div className="info-row"><span>Full Name</span><span>{demoRequest.full_name}</span></div>
              <div className="info-row"><span>Work Email</span><span>{demoRequest.work_email}</span></div>
              <div className="info-row"><span>Phone</span><span>{demoRequest.phone || '—'}</span></div>
              <div className="info-row"><span>Role</span><span>{demoRequest.role || '—'}</span></div>
            </div>

            <div className="card">
              <h3>Company</h3>
              <div className="info-row"><span>Company Name</span><span>{demoRequest.company_name || '—'}</span></div>
              <div className="info-row"><span>Company Size</span><span>{demoRequest.company_size || '—'}</span></div>
            </div>

            <div className="card">
              <h3>Requested Schedule</h3>
              <div className="info-row">
                <span>Preferred Date</span>
                <span>{demoRequest.preferred_date ? new Date(demoRequest.preferred_date).toLocaleDateString() : '—'}</span>
              </div>
              <div className="info-row"><span>Preferred Time</span><span>{demoRequest.preferred_time || '—'}</span></div>
            </div>

            <div className="card">
              <h3>Message</h3>
              {demoRequest.message ? (
                <div className="ds-message">{demoRequest.message}</div>
              ) : (
                <div className="ds-no-message">No message provided.</div>
              )}
            </div>
          </div>

          <div>
            <div className="card">
              <h3>Actions</h3>
              {demoRequest.status === 'pending' && (
                <button className="btn-primary" onClick={confirmRequest}>
                  ✓ Confirm Demo
                </button>
              )}
              {demoRequest.status === 'confirmed' && (
                <button className="btn-secondary" onClick={completeRequest}>
                  Mark as Completed
                </button>
              )}
              {(demoRequest.status === 'pending' || demoRequest.status === 'confirmed') && (
                <button className="btn-secondary btn-danger" onClick={cancelRequest}>
                  Cancel Request
                </button>
              )}
              <button className="btn-secondary btn-danger" onClick={destroy}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', justifyContent: 'center', width: '100%' }}>
                  <IconTrash /> Delete
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Show.layout = (page) => <AppLayout children={page} title={page.props.demoRequest.full_name} />;
