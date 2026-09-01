import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function CheckoutSuccess({ order }) {
  return (
    <>
      <Head title="Order Confirmed" />
      <style>{`
        :root {
          --bg-deep: #0e1618; --bg-card: #121d1f; --accent: #48d597;
          --accent-dim: rgba(0,166,103,.15); --border: rgba(255,255,255,.07);
          --text: #f0f4f3; --muted: #7a9490; --white: #F5f5f7;
        }
        [data-h-theme="light"] {
          --bg-deep: #f6faf8; --bg-card: #F5f5f7; --accent: #00a667;
          --accent-dim: rgba(0,166,103,.1); --border: rgba(0,100,60,.12);
          --text: #10201b; --muted: #5b7a70; --white: #10201b;
        }
        body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }
        .success-wrap { max-width: 640px; margin: 4rem auto; padding: 0 2rem; text-align: center; }
        .success-icon { width: 72px; height: 72px; border-radius: 50%; background: var(--accent-dim); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--accent); font-size: 2rem; }
        .success-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.6rem; color: var(--white); margin-bottom: .5rem; }
        .success-order-no { color: var(--accent); font-weight: 700; }
        .success-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; margin-top: 2rem; text-align: left; }
        .success-row { display: flex; justify-content: space-between; padding: .6rem 0; border-bottom: 1px solid var(--border); font-size: .9rem; }
        .success-row:last-child { border-bottom: none; }
        .success-row span:first-child { color: var(--muted); }
        .btn-home { display: inline-block; margin-top: 2rem; background: var(--accent); color: var(--white); font-family: 'Syne', sans-serif; font-weight: 700; padding: .8rem 2rem; border-radius: 10px; text-decoration: none; }
      `}</style>

      <div className="success-wrap">
        <div className="success-icon"><i className="fa-solid fa-check"></i></div>
        <h1 className="success-title">Order Placed Successfully!</h1>
        <p style={{ color: 'var(--muted)' }}>
          Your order number is <span className="success-order-no">{order.order_number}</span>.
          {order.user_id
            ? ' You can track it from your dashboard.'
            : ` A confirmation has been noted for ${order.customer_email}.`}
        </p>

        <div className="success-card">
          {order.items.map((item) => (
            <div className="success-row" key={item.id}>
              <span>{item.product_name} × {item.quantity}</span>
              <span>{Number(item.subtotal).toLocaleString()} RWF</span>
            </div>
          ))}
          <div className="success-row">
            <span>Payment Method</span>
            <span>{order.payment_method.toUpperCase()}</span>
          </div>
          <div className="success-row">
            <span>Total</span>
            <span style={{ fontWeight: 700, color: 'var(--white)' }}>{Number(order.total_amount).toLocaleString()} RWF</span>
          </div>
        </div>

        <Link href="/" className="btn-home">Back to Home</Link>
      </div>
    </>
  );
}

CheckoutSuccess.layout = (page) => <GuestLayout children={page} title="Order Confirmed" />;