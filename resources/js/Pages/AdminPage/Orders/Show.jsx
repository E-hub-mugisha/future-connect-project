import React from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Show({ order }) {
  const { flash } = usePage().props;

  function confirmOrder() {
    router.patch(route('admin.orders.confirm', order.id));
  }

  function updateStatus(status) {
    router.patch(route('admin.orders.status', order.id), { status });
  }

  const statusBadge = {
    pending: { bg: 'rgba(245,158,11,.15)', color: '#f59e0b' },
    processing: { bg: 'rgba(0,166,103,.15)', color: '#48d597' },
    completed: { bg: 'rgba(59,130,246,.15)', color: '#3b82f6' },
    cancelled: { bg: 'rgba(248,113,113,.15)', color: '#f87171' },
  };

  return (
    <>
      <Head title={`Order ${order.order_number}`} />
      <style>{`
        :root {
          --bg-deep: #f6faf8; --bg-card: #F5f5f7; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1); --accent-glow: rgba(0,166,103,.22);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
        }
        [data-h-theme="dark"] {
          --bg-deep: #0e1618; --bg-card: #121d1f; --bg-raised: #172224;
          --accent: #48d597; --accent-dim: rgba(0,166,103,.15); --accent-glow: rgba(0,166,103,.35);
          --border: rgba(255,255,255,.07); --text: #f0f4f3; --muted: #7a9490; --white: #F5f5f7;
        }
        body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }
        .os-wrap { max-width: 1000px; margin: 0 auto; padding: 2.5rem 2rem; }
        .os-back { color: var(--muted); text-decoration: none; font-size: .82rem; display: inline-flex; align-items: center; gap: .4rem; margin-bottom: 1.25rem; }
        .os-back:hover { color: var(--accent); }

        .os-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem; }
        .os-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.4rem; color: var(--white); }
        .os-sub { color: var(--muted); font-size: .82rem; margin-top: .3rem; }
        .badge { display: inline-block; padding: .35rem .9rem; border-radius: 50px; font-size: .78rem; font-weight: 700; text-transform: capitalize; }

        .flash-banner { background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3); color: var(--accent); border-radius: 10px; padding: .85rem 1.1rem; font-size: .85rem; margin-bottom: 1.5rem; }

        .os-grid { display: grid; grid-template-columns: 1fr 320px; gap: 1.75rem; align-items: start; }
        @media (max-width: 900px) { .os-grid { grid-template-columns: 1fr; } }

        .card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(16,32,27,.04); }
        .card h3 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .95rem; color: var(--white); margin: 0 0 1rem; padding-bottom: .75rem; border-bottom: 1px solid var(--border); }

        .info-row { display: flex; justify-content: space-between; padding: .5rem 0; font-size: .85rem; border-bottom: 1px solid var(--border); }
        .info-row:last-child { border-bottom: none; }
        .info-row span:first-child { color: var(--muted); }
        .info-row span:last-child { color: var(--text); font-weight: 500; text-align: right; }

        .item-row { display: flex; justify-content: space-between; align-items: center; padding: .85rem 0; border-bottom: 1px solid var(--border); }
        .item-row:last-child { border-bottom: none; }
        .item-name { font-weight: 600; color: var(--text); font-size: .88rem; }
        .item-meta { font-size: .75rem; color: var(--muted); }
        .item-sub { font-family: 'Syne', sans-serif; font-weight: 700; color: var(--white); }

        .totals-row { display: flex; justify-content: space-between; font-size: .9rem; padding: .4rem 0; }
        .totals-row.grand { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; color: var(--white); border-top: 1px solid var(--border); margin-top: .5rem; padding-top: .75rem; }
        .totals-row.grand span:last-child { color: var(--accent); }

        .btn-confirm {
          width: 100%; background: var(--accent); color: #F5f5f7; border: none;
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: .9rem;
          padding: .85rem; border-radius: 10px; cursor: pointer; margin-bottom: .6rem;
          box-shadow: 0 0 24px var(--accent-glow); transition: all .25s;
        }
        .btn-confirm:hover { transform: translateY(-2px); }
        .btn-secondary {
          width: 100%; background: var(--bg-raised); color: var(--text); border: 1px solid var(--border);
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem;
          padding: .75rem; border-radius: 10px; cursor: pointer; margin-bottom: .5rem; transition: all .2s;
        }
        .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
        .btn-danger:hover { border-color: #f87171; color: #f87171; }
        .confirmed-note { font-size: .78rem; color: var(--muted); text-align: center; margin-top: .5rem; }
      `}</style>

      <div className="os-wrap">
        <Link href={route('admin.orders.index')} className="os-back">← Back to Orders</Link>

        {flash?.success && <div className="flash-banner">{flash.success}</div>}

        <div className="os-header">
          <div>
            <div className="os-title">{order.order_number}</div>
            <div className="os-sub">Placed on {new Date(order.created_at).toLocaleString()}</div>
          </div>
          <span className="badge" style={{ background: statusBadge[order.status]?.bg, color: statusBadge[order.status]?.color }}>
            {order.status}
          </span>
        </div>

        <div className="os-grid">
          <div>
            <div className="card">
              <h3>Customer</h3>
              <div className="info-row"><span>Name</span><span>{order.customer_name}</span></div>
              <div className="info-row"><span>Email</span><span>{order.customer_email}</span></div>
              <div className="info-row"><span>Phone</span><span>{order.customer_phone}</span></div>
              <div className="info-row"><span>Account Type</span><span>{order.user ? `Registered (${order.user.email})` : 'Guest Checkout'}</span></div>
            </div>

            <div className="card">
              <h3>Shipping</h3>
              <div className="info-row"><span>Province</span><span>{order.province}</span></div>
              <div className="info-row"><span>District</span><span>{order.district}</span></div>
              <div className="info-row"><span>Sector</span><span>{order.sector}</span></div>
              {order.cell && <div className="info-row"><span>Cell</span><span>{order.cell}</span></div>}
              <div className="info-row"><span>Address</span><span>{order.shipping_address}</span></div>
              {order.notes && <div className="info-row"><span>Notes</span><span>{order.notes}</span></div>}
            </div>

            <div className="card">
              <h3>Items</h3>
              {order.items.map((item) => (
                <div className="item-row" key={item.id}>
                  <div>
                    <div className="item-name">{item.product_name}</div>
                    <div className="item-meta">{Number(item.price).toLocaleString()} RWF × {item.quantity}</div>
                  </div>
                  <div className="item-sub">{Number(item.subtotal).toLocaleString()} RWF</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="card">
              <h3>Payment</h3>
              <div className="info-row"><span>Method</span><span style={{ textTransform: 'uppercase' }}>{order.payment_method}</span></div>
              {order.payment_phone && <div className="info-row"><span>Charge Number</span><span>{order.payment_phone}</span></div>}
              <div className="totals-row grand">
                <span>Total</span>
                <span>{Number(order.total_amount).toLocaleString()} RWF</span>
              </div>
            </div>

            <div className="card">
              <h3>Actions</h3>
              {order.status === 'pending' && (
                <button className="btn-confirm" onClick={confirmOrder}>
                  ✓ Confirm Order
                </button>
              )}
              {order.status === 'processing' && (
                <button className="btn-secondary" onClick={() => updateStatus('completed')}>
                  Mark as Completed
                </button>
              )}
              {(order.status === 'pending' || order.status === 'processing') && (
                <button className="btn-secondary btn-danger" onClick={() => updateStatus('cancelled')}>
                  Cancel Order
                </button>
              )}
              {order.confirmed_at && (
                <div className="confirmed-note">
                  Confirmed {new Date(order.confirmed_at).toLocaleString()}
                  {order.confirmed_by && ` by ${order.confirmed_by.name}`}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Show.layout = (page) => (
  <AppLayout children={page} title={`Order ${page.props.order.order_number}`} />
);