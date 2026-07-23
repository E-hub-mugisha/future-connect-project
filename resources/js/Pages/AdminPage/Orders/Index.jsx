import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function OrdersIndex({ orders, filters, statusCounts }) {
  const [search, setSearch] = useState(filters.search ?? '');

  function applyFilter(status) {
    router.get(route('admin.orders.index'), { status, search: filters.search }, { preserveState: true });
  }

  function submitSearch(e) {
    e.preventDefault();
    router.get(route('admin.orders.index'), { status: filters.status, search }, { preserveState: true });
  }

  const statusBadge = {
    pending: { bg: 'rgba(245,158,11,.15)', color: '#f59e0b' },
    processing: { bg: 'rgba(0,166,103,.15)', color: '#48d597' },
    completed: { bg: 'rgba(59,130,246,.15)', color: '#3b82f6' },
    cancelled: { bg: 'rgba(248,113,113,.15)', color: '#f87171' },
  };

  return (
    <>
      <Head title="Orders" />
      <style>{`
        :root {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
        }
        [data-h-theme="dark"] {
          --bg-deep: #0e1618; --bg-card: #121d1f; --bg-raised: #172224;
          --accent: #48d597; --accent-dim: rgba(0,166,103,.15);
          --border: rgba(255,255,255,.07); --text: #f0f4f3; --muted: #7a9490; --white: #ffffff;
        }
        body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }
        .oi-wrap { max-width: 1200px; margin: 0 auto; padding: 2.5rem 2rem; }
        .oi-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: var(--white); margin-bottom: 1.5rem; }

        .status-tabs { display: flex; gap: .6rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .status-tab {
          border: 1px solid var(--border); border-radius: 10px; padding: .6rem 1.1rem;
          font-size: .82rem; font-weight: 600; color: var(--muted); cursor: pointer;
          background: var(--bg-card); transition: all .2s; display: flex; align-items: center; gap: .5rem;
        }
        .status-tab.active { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
        .status-tab .count { background: var(--bg-raised); border-radius: 50px; padding: .1rem .55rem; font-size: .72rem; }

        .search-row { margin-bottom: 1.5rem; }
        .search-row input {
          width: 100%; max-width: 360px; background: var(--bg-raised); border: 1px solid var(--border);
          color: var(--text); border-radius: 10px; padding: .65rem .9rem; font-size: .85rem; outline: none;
        }
        .search-row input:focus { border-color: var(--accent); }

        .orders-table { width: 100%; border-collapse: collapse; background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; box-shadow: 0 1px 3px rgba(16,32,27,.04); }
        .orders-table th {
          text-align: left; font-size: .72rem; text-transform: uppercase; letter-spacing: .05em;
          color: var(--muted); padding: .9rem 1.1rem; border-bottom: 1px solid var(--border); font-weight: 600;
          background: var(--bg-raised);
        }
        .orders-table td { padding: .9rem 1.1rem; border-bottom: 1px solid var(--border); font-size: .85rem; }
        .orders-table tr:last-child td { border-bottom: none; }
        .orders-table tr:hover td { background: var(--bg-raised); }
        .order-no { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); }
        .order-no a { color: inherit; text-decoration: none; }
        .order-no a:hover { color: var(--accent); }
        .badge { display: inline-block; padding: .25rem .7rem; border-radius: 50px; font-size: .72rem; font-weight: 700; text-transform: capitalize; }
        .cust-type { font-size: .72rem; color: var(--muted); }

        .pagination { display: flex; gap: .4rem; margin-top: 1.5rem; flex-wrap: wrap; }
        .pagination a, .pagination span {
          display: inline-flex; align-items: center; justify-content: center;
          min-width: 32px; height: 32px; border-radius: 8px; font-size: .8rem;
          border: 1px solid var(--border); color: var(--muted); text-decoration: none;
        }
        .pagination a:hover { border-color: var(--accent); color: var(--accent); }
        .pagination .current { background: var(--accent); color: #ffffff; border-color: var(--accent); }
      `}</style>

      <div className="oi-wrap">
        <h1 className="oi-title">Orders</h1>

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
            placeholder="Search by order #, name, email, or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <table className="orders-table">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.data.map((order) => (
              <tr key={order.id}>
                <td className="order-no">
                  <Link href={route('admin.orders.show', order.id)}>{order.order_number}</Link>
                </td>
                <td>
                  {order.customer_name}
                  <div className="cust-type">{order.user ? 'Account' : 'Guest'}</div>
                </td>
                <td>{order.items_count}</td>
                <td>{Number(order.total_amount).toLocaleString()} RWF</td>
                <td style={{ textTransform: 'uppercase', fontSize: '.75rem', color: 'var(--muted)' }}>{order.payment_method}</td>
                <td>
                  <span className="badge" style={{ background: statusBadge[order.status]?.bg, color: statusBadge[order.status]?.color }}>
                    {order.status}
                  </span>
                </td>
                <td style={{ color: 'var(--muted)' }}>{new Date(order.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
            {orders.data.length === 0 && (
              <tr><td colSpan="7" style={{ textAlign: 'center', color: 'var(--muted)', padding: '2rem' }}>No orders found.</td></tr>
            )}
          </tbody>
        </table>

        {orders.links?.length > 3 && (
          <div className="pagination">
            {orders.links.map((link, i) =>
              link.url ? (
                <Link key={i} href={link.url} className={link.active ? 'current' : ''} dangerouslySetInnerHTML={{ __html: link.label }} />
              ) : (
                <span key={i} style={{ opacity: 0.4 }} dangerouslySetInnerHTML={{ __html: link.label }} />
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}

OrdersIndex.layout = (page) => <AppLayout children={page} title="Orders" />;