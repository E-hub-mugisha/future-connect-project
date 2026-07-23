import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);

export default function Index({ demoRequests, filters, statusCounts }) {
  const { flash } = usePage().props;
  const [search, setSearch] = useState(filters.search ?? '');

  function applyFilter(status) {
    router.get(route('admin.demo-requests.index'), { status, search: filters.search }, { preserveState: true });
  }

  function submitSearch(e) {
    e.preventDefault();
    router.get(route('admin.demo-requests.index'), { status: filters.status, search }, { preserveState: true });
  }

  function confirmRequest(demoRequest) {
    router.patch(route('admin.demo-requests.confirm', demoRequest.id), {}, { preserveState: true, preserveScroll: true });
  }

  const statusBadge = {
    pending: { bg: 'rgba(245,158,11,.15)', color: '#f59e0b' },
    confirmed: { bg: 'rgba(0,166,103,.15)', color: '#00a667' },
    completed: { bg: 'rgba(59,130,246,.15)', color: '#3b82f6' },
    cancelled: { bg: 'rgba(220,76,76,.12)', color: '#dc4c4c' },
  };

  return (
    <div data-h-scope="demo-requests-index">
      <Head title="Demo Requests" />
      <style>{`
        [data-h-scope="demo-requests-index"] {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
        }
        [data-h-scope="demo-requests-index"] .di-wrap { max-width: 1200px; margin: 0 auto; padding: 2.5rem 2rem; font-family: 'DM Sans', sans-serif; color: var(--text); }
        [data-h-scope="demo-requests-index"] .di-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: var(--white); margin-bottom: 1.5rem; }

        [data-h-scope="demo-requests-index"] .di-flash {
          background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3); color: var(--accent);
          border-radius: 10px; padding: .85rem 1.1rem; font-size: .85rem; margin-bottom: 1.5rem;
        }

        [data-h-scope="demo-requests-index"] .status-tabs { display: flex; gap: .6rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        [data-h-scope="demo-requests-index"] .status-tab {
          border: 1px solid var(--border); border-radius: 10px; padding: .6rem 1.1rem;
          font-size: .82rem; font-weight: 600; color: var(--muted); cursor: pointer;
          background: var(--bg-card); transition: all .2s; display: flex; align-items: center; gap: .5rem;
        }
        [data-h-scope="demo-requests-index"] .status-tab.active { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
        [data-h-scope="demo-requests-index"] .status-tab .count { background: var(--bg-raised); border-radius: 50px; padding: .1rem .55rem; font-size: .72rem; }

        [data-h-scope="demo-requests-index"] .search-row { margin-bottom: 1.5rem; }
        [data-h-scope="demo-requests-index"] .search-row input {
          width: 100%; max-width: 360px; background: var(--bg-raised); border: 1px solid var(--border);
          color: var(--text); border-radius: 10px; padding: .65rem .9rem; font-size: .85rem; outline: none;
        }
        [data-h-scope="demo-requests-index"] .search-row input:focus { border-color: var(--accent); }

        [data-h-scope="demo-requests-index"] .dr-table { width: 100%; border-collapse: collapse; background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; box-shadow: 0 1px 3px rgba(16,32,27,.04); }
        [data-h-scope="demo-requests-index"] .dr-table th {
          text-align: left; font-size: .72rem; text-transform: uppercase; letter-spacing: .05em;
          color: var(--muted); padding: .9rem 1.1rem; border-bottom: 1px solid var(--border); font-weight: 600;
          background: var(--bg-raised);
        }
        [data-h-scope="demo-requests-index"] .dr-table td { padding: .9rem 1.1rem; border-bottom: 1px solid var(--border); font-size: .85rem; vertical-align: middle; }
        [data-h-scope="demo-requests-index"] .dr-table tr:last-child td { border-bottom: none; }
        [data-h-scope="demo-requests-index"] .dr-table tr:hover td { background: var(--bg-raised); }
        [data-h-scope="demo-requests-index"] .dr-name { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); }
        [data-h-scope="demo-requests-index"] .dr-name a { color: inherit; text-decoration: none; }
        [data-h-scope="demo-requests-index"] .dr-name a:hover { color: var(--accent); }
        [data-h-scope="demo-requests-index"] .dr-sub { font-size: .72rem; color: var(--muted); margin-top: .15rem; }
        [data-h-scope="demo-requests-index"] .badge { display: inline-block; padding: .25rem .7rem; border-radius: 50px; font-size: .72rem; font-weight: 700; text-transform: capitalize; }

        [data-h-scope="demo-requests-index"] .dr-confirm {
          display: inline-flex; align-items: center; gap: .35rem; background: var(--accent); color: #ffffff;
          border: none; font-family: 'Syne', sans-serif; font-weight: 700; font-size: .75rem;
          padding: .4rem .75rem; border-radius: 7px; cursor: pointer; transition: transform .15s;
        }
        [data-h-scope="demo-requests-index"] .dr-confirm:hover { transform: translateY(-1px); }

        [data-h-scope="demo-requests-index"] .pagination { display: flex; gap: .4rem; margin-top: 1.5rem; flex-wrap: wrap; }
        [data-h-scope="demo-requests-index"] .pagination a, [data-h-scope="demo-requests-index"] .pagination span {
          display: inline-flex; align-items: center; justify-content: center;
          min-width: 32px; height: 32px; border-radius: 8px; font-size: .8rem;
          border: 1px solid var(--border); color: var(--muted); text-decoration: none;
        }
        [data-h-scope="demo-requests-index"] .pagination a:hover { border-color: var(--accent); color: var(--accent); }
        [data-h-scope="demo-requests-index"] .pagination .current { background: var(--accent); color: #ffffff; border-color: var(--accent); }
      `}</style>

      <div className="di-wrap">
        <h1 className="di-title">Demo Requests</h1>

        {flash?.success && <div className="di-flash">{flash.success}</div>}

        <div className="status-tabs">
          <div className={`status-tab${!filters.status ? ' active' : ''}`} onClick={() => applyFilter(null)}>
            All
          </div>
          {Object.entries(statusCounts).map(([status, count]) => (
            <div
              key={status}
              className={`status-tab${filters.status === status ? ' active' : ''}`}
              onClick={() => applyFilter(status)}
            >
              <span style={{ textTransform: 'capitalize' }}>{status}</span>
              <span className="count">{count}</span>
            </div>
          ))}
        </div>

        <form className="search-row" onSubmit={submitSearch}>
          <input
            type="text"
            placeholder="Search by name, email, company, or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <table className="dr-table">
          <thead>
            <tr>
              <th>Requester</th>
              <th>Company</th>
              <th>Preferred Time</th>
              <th>Status</th>
              <th>Submitted</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {demoRequests.data.map((demoRequest) => (
              <tr key={demoRequest.id}>
                <td className="dr-name">
                  <Link href={route('admin.demo-requests.show', demoRequest.id)}>{demoRequest.full_name}</Link>
                  <div className="dr-sub">{demoRequest.work_email}</div>
                </td>
                <td>
                  {demoRequest.company_name}
                  <div className="dr-sub">{demoRequest.role}{demoRequest.company_size ? ` · ${demoRequest.company_size}` : ''}</div>
                </td>
                <td>
                  {demoRequest.preferred_date ? new Date(demoRequest.preferred_date).toLocaleDateString() : '—'}
                  <div className="dr-sub">{demoRequest.preferred_time ?? ''}</div>
                </td>
                <td>
                  <span className="badge" style={{ background: statusBadge[demoRequest.status]?.bg, color: statusBadge[demoRequest.status]?.color }}>
                    {demoRequest.status}
                  </span>
                </td>
                <td style={{ color: 'var(--muted)' }}>{new Date(demoRequest.created_at).toLocaleDateString()}</td>
                <td>
                  {demoRequest.status === 'pending' && (
                    <button className="dr-confirm" onClick={() => confirmRequest(demoRequest)}>
                      <IconCheck /> Confirm
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {demoRequests.data.length === 0 && (
              <tr><td colSpan="6" style={{ textAlign: 'center', color: 'var(--muted)', padding: '2rem' }}>No demo requests found.</td></tr>
            )}
          </tbody>
        </table>

        {demoRequests.links?.length > 3 && (
          <div className="pagination">
            {demoRequests.links.map((link, i) =>
              link.url ? (
                <Link key={i} href={link.url} className={link.active ? 'current' : ''} dangerouslySetInnerHTML={{ __html: link.label }} />
              ) : (
                <span key={i} style={{ opacity: 0.4 }} dangerouslySetInnerHTML={{ __html: link.label }} />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

Index.layout = (page) => <AppLayout children={page} title="Demo Requests" />;
