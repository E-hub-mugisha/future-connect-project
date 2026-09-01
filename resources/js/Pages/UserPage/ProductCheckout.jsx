import React, { useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

/**
 * Checkout / Buy Now page.
 *
 * Guest vs account checkout:
 * - `auth.user` comes from Inertia's shared props (HandleInertiaRequests middleware).
 * - If logged in, name/email are prefilled and locked (read-only) since they come
 *   from the account — phone is still editable since it may differ from profile.
 * - If a guest, all contact fields are open, plus a small banner offering to log in
 *   or continue as guest. No redirect is forced either way — `checkout.store` has
 *   no auth middleware, so guests can submit freely.
 *
 * Assumptions:
 * 1. Province/District/Sector are plain text inputs (per your instruction) rather
 *    than cascading dropdowns — swap to selects later if you wire up a location API.
 * 2. Quantity stepper mirrors the pattern from your product-details cart modal.
 * 3. Payment method drives which extra field shows (MoMo/Airtel phone vs none for cash).
 * 4. Rwandan phone validation client-side mirrors the server regex: 07[2-9]XXXXXXX.
 */
export default function ProductCheckout({ product, quantity: initialQuantity }) {
  const { auth } = usePage().props;
  const isGuest = !auth?.user;

  const [quantity, setQuantity] = useState(initialQuantity || 1);

  const { data, setData, post, processing, errors } = useForm({
    quantity: initialQuantity || 1,
    customer_name: auth?.user?.name ?? '',
    customer_email: auth?.user?.email ?? '',
    customer_phone: '',
    province: '',
    district: '',
    sector: '',
    cell: '',
    shipping_address: '',
    payment_method: 'momo',
    payment_phone: '',
    notes: '',
  });

  const maxQty = product.stock ?? 1000;

  function changeQuantity(next) {
    const q = Math.max(1, Math.min(maxQty, next));
    setQuantity(q);
    setData('quantity', q);
  }

  function submit(e) {
    e.preventDefault();
    post(route('checkout.store', product.slug));
  }

  const subtotal = (Number(product.price) * Number(quantity || 1)).toFixed(2);

  return (
    <>
      <Head title={`Checkout — ${product.name}`} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --bg-deep:    #0e1618;
          --bg-card:    #121d1f;
          --bg-raised:  #172224;
          --accent:     #48d597;
          --accent-dim: rgba(0,166,103,.15);
          --accent-glow:rgba(0,166,103,.35);
          --border:     rgba(255,255,255,.07);
          --text:       #f0f4f3;
          --muted:      #7a9490;
          --white:      #F5f5f7;
          --danger:     #f87171;
        }

        * { box-sizing: border-box; }
        body { background: var(--bg-deep); color: var(--text); font-family: 'DM Sans', sans-serif; }

        .co-wrapper { max-width: 1100px; margin: 0 auto; padding: 2.5rem 2rem; }
        .co-grid { display: grid; grid-template-columns: 1fr 360px; gap: 2rem; align-items: start; }
        @media (max-width: 1024px) { .co-grid { grid-template-columns: 1fr; } }

        .co-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.6rem; color: var(--white); margin-bottom: .35rem; }
        .co-subtitle { color: var(--muted); font-size: .9rem; margin-bottom: 2rem; }

        .guest-banner {
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3);
          border-radius: 14px; padding: 1rem 1.25rem; margin-bottom: 1.75rem;
        }
        .guest-banner p { font-size: .85rem; color: var(--text); margin: 0; }
        .guest-banner strong { color: var(--accent); }
        .guest-banner a {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .8rem;
          color: var(--accent); text-decoration: none; white-space: nowrap;
          border: 1px solid rgba(0,166,103,.3); padding: .5rem 1rem; border-radius: 8px;
          transition: all .2s;
        }
        .guest-banner a:hover { background: var(--accent); color: var(--white); }

        .form-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; padding: 1.75rem;
        }
        .section-title {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem;
          color: var(--white); margin: 0 0 1.1rem;
          padding-bottom: .75rem; border-bottom: 1px solid var(--border);
        }
        .section-title:not(:first-child) { margin-top: 1.75rem; }

        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 560px) { .field-row { grid-template-columns: 1fr; } }

        .field { margin-bottom: 1.1rem; }
        .field label { display: block; font-size: .78rem; color: var(--muted); margin-bottom: .4rem; font-weight: 500; }
        .field input, .field textarea {
          width: 100%; background: var(--bg-raised); border: 1px solid var(--border);
          color: var(--text); border-radius: 10px; padding: .7rem .9rem;
          font-family: 'DM Sans', sans-serif; font-size: .9rem; outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .field input:disabled { opacity: .6; cursor: not-allowed; }
        .field input:focus, .field textarea:focus {
          border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-dim);
        }
        .field-error { color: var(--danger); font-size: .75rem; margin-top: .35rem; display: block; }

        .payment-options { display: flex; gap: .75rem; flex-wrap: wrap; margin-bottom: .25rem; }
        .payment-opt {
          flex: 1; min-width: 140px; border: 1px solid var(--border); border-radius: 10px;
          padding: .8rem 1rem; cursor: pointer; transition: all .2s;
          display: flex; align-items: center; gap: .6rem;
        }
        .payment-opt.selected { border-color: var(--accent); background: var(--accent-dim); }
        .payment-opt input { width: auto; }
        .payment-opt span { font-size: .85rem; font-weight: 600; color: var(--text); }

        .sidebar-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; overflow: hidden; position: sticky; top: 1.5rem;
        }
        .summary-product { display: flex; gap: 1rem; padding: 1.5rem; border-bottom: 1px solid var(--border); }
        .summary-img { width: 72px; height: 72px; border-radius: 12px; object-fit: cover; flex-shrink: 0; }
        .summary-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .92rem; color: var(--white); margin-bottom: .3rem; }
        .summary-cat { font-size: .75rem; color: var(--muted); }

        .qty-block { padding: 1.5rem; border-bottom: 1px solid var(--border); }
        .qty-block label { font-size: .78rem; color: var(--muted); display: block; margin-bottom: .6rem; }
        .qty-control { display: flex; align-items: center; gap: 0; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; width: fit-content; }
        .qty-btn { width: 36px; height: 40px; background: var(--bg-raised); border: none; color: var(--text); font-size: 1rem; cursor: pointer; transition: all .2s; }
        .qty-btn:hover { background: var(--accent-dim); color: var(--accent); }
        .qty-num { width: 56px; height: 40px; text-align: center; background: var(--bg-deep); border: none; border-left: 1px solid var(--border); border-right: 1px solid var(--border); color: var(--white); font-family: 'Syne', sans-serif; font-weight: 700; outline: none; }
        .stock-note { font-size: .75rem; color: var(--muted); margin-top: .6rem; }

        .totals-block { padding: 1.5rem; }
        .totals-row { display: flex; justify-content: space-between; font-size: .85rem; color: var(--muted); margin-bottom: .6rem; }
        .totals-row.grand { font-size: 1.05rem; color: var(--white); font-family: 'Syne', sans-serif; font-weight: 800; margin-top: .75rem; padding-top: .75rem; border-top: 1px solid var(--border); }
        .totals-row.grand span:last-child { color: var(--accent); }

        .btn-place-order {
          display: flex; align-items: center; justify-content: center; gap: .5rem;
          background: var(--accent); color: var(--white);
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: .95rem;
          padding: .9rem; border-radius: 10px; border: none; cursor: pointer;
          width: 100%; margin-top: 1.25rem;
          box-shadow: 0 0 24px var(--accent-glow); transition: all .25s;
        }
        .btn-place-order:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 0 36px var(--accent-glow); }
        .btn-place-order:disabled { opacity: .65; cursor: not-allowed; }

        [data-h-theme="light"] {
          --bg-deep:    #f6faf8;
          --bg-card:    #F5f5f7;
          --bg-raised:  #eef4f1;
          --accent:     #00a667;
          --accent-dim: rgba(0, 166, 103, 0.1);
          --accent-glow:rgba(0, 166, 103, 0.22);
          --border:     rgba(0, 100, 60, 0.12);
          --text:       #10201b;
          --muted:      #5b7a70;
          --white:      #10201b;
        }
      `}</style>

      <div className="co-wrapper">
        <h1 className="co-title">Checkout</h1>
        <p className="co-subtitle">Complete your order for {product.name}</p>

        {isGuest && (
          <div className="guest-banner">
            <p>You're checking out as a <strong>guest</strong>. No account needed — but logging in lets you track this order later.</p>
            <Link href={route('login')}>Log In Instead</Link>
          </div>
        )}

        <form onSubmit={submit}>
          <div className="co-grid">
            {/* LEFT: form */}
            <div className="form-card">
              <h3 className="section-title">Contact Details</h3>
              <div className="field-row">
                <div className="field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={data.customer_name}
                    onChange={(e) => setData('customer_name', e.target.value)}
                    disabled={!isGuest}
                    required
                  />
                  {errors.customer_name && <span className="field-error">{errors.customer_name}</span>}
                </div>
                <div className="field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={data.customer_email}
                    onChange={(e) => setData('customer_email', e.target.value)}
                    disabled={!isGuest}
                    required
                  />
                  {errors.customer_email && <span className="field-error">{errors.customer_email}</span>}
                </div>
              </div>
              <div className="field">
                <label>Phone Number (e.g. 0788123456)</label>
                <input
                  type="text"
                  placeholder="07XXXXXXXX"
                  value={data.customer_phone}
                  onChange={(e) => setData('customer_phone', e.target.value)}
                  required
                />
                {errors.customer_phone && <span className="field-error">{errors.customer_phone}</span>}
              </div>

              <h3 className="section-title">Shipping Location</h3>
              <div className="field-row">
                <div className="field">
                  <label>Province</label>
                  <input
                    type="text"
                    value={data.province}
                    onChange={(e) => setData('province', e.target.value)}
                    required
                  />
                  {errors.province && <span className="field-error">{errors.province}</span>}
                </div>
                <div className="field">
                  <label>District</label>
                  <input
                    type="text"
                    value={data.district}
                    onChange={(e) => setData('district', e.target.value)}
                    required
                  />
                  {errors.district && <span className="field-error">{errors.district}</span>}
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Sector</label>
                  <input
                    type="text"
                    value={data.sector}
                    onChange={(e) => setData('sector', e.target.value)}
                    required
                  />
                  {errors.sector && <span className="field-error">{errors.sector}</span>}
                </div>
                <div className="field">
                  <label>Cell (optional)</label>
                  <input
                    type="text"
                    value={data.cell}
                    onChange={(e) => setData('cell', e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label>Delivery Address / Landmark</label>
                <textarea
                  rows="3"
                  placeholder="Street, house number, or nearby landmark"
                  value={data.shipping_address}
                  onChange={(e) => setData('shipping_address', e.target.value)}
                  required
                ></textarea>
                {errors.shipping_address && <span className="field-error">{errors.shipping_address}</span>}
              </div>

              <h3 className="section-title">Payment Method</h3>
              <div className="payment-options">
                {[
                  { value: 'momo', label: 'MTN MoMo' },
                  { value: 'airtel', label: 'Airtel Money' },
                  { value: 'cash', label: 'Cash on Delivery' },
                ].map((opt) => (
                  <label key={opt.value} className={`payment-opt${data.payment_method === opt.value ? ' selected' : ''}`}>
                    <input
                      type="radio"
                      name="payment_method"
                      value={opt.value}
                      checked={data.payment_method === opt.value}
                      onChange={(e) => setData('payment_method', e.target.value)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
              {errors.payment_method && <span className="field-error">{errors.payment_method}</span>}

              {(data.payment_method === 'momo' || data.payment_method === 'airtel') && (
                <div className="field" style={{ marginTop: '1rem' }}>
                  <label>{data.payment_method === 'momo' ? 'MTN' : 'Airtel'} Number to Charge</label>
                  <input
                    type="text"
                    placeholder="07XXXXXXXX"
                    value={data.payment_phone}
                    onChange={(e) => setData('payment_phone', e.target.value)}
                    required
                  />
                  {errors.payment_phone && <span className="field-error">{errors.payment_phone}</span>}
                </div>
              )}

              <div className="field" style={{ marginTop: '1rem' }}>
                <label>Order Notes (optional)</label>
                <textarea
                  rows="2"
                  placeholder="Any delivery instructions..."
                  value={data.notes}
                  onChange={(e) => setData('notes', e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* RIGHT: order summary */}
            <div className="sidebar-card">
              <div className="summary-product">
                <img
                  src={product.image ? `/storage/${product.image}` : '/assets/img/service/service-slide-01.jpg'}
                  alt={product.name}
                  className="summary-img"
                />
                <div>
                  <div className="summary-name">{product.name}</div>
                  <div className="summary-cat">{product.category?.name ?? 'Uncategorized'}</div>
                </div>
              </div>

              <div className="qty-block">
                <label>Quantity</label>
                <div className="qty-control">
                  <button type="button" className="qty-btn" onClick={() => changeQuantity(quantity - 1)}>−</button>
                  <input
                    type="number"
                    className="qty-num"
                    value={quantity}
                    min="1"
                    max={maxQty}
                    onChange={(e) => changeQuantity(Number(e.target.value) || 1)}
                  />
                  <button type="button" className="qty-btn" onClick={() => changeQuantity(quantity + 1)}>+</button>
                </div>
                {errors.quantity && <span className="field-error">{errors.quantity}</span>}
                <div className="stock-note">{product.stock ?? 'Unlimited'} in stock</div>
              </div>

              <div className="totals-block">
                <div className="totals-row">
                  <span>Price per unit</span>
                  <span>{Number(product.price).toLocaleString()} RWF</span>
                </div>
                <div className="totals-row">
                  <span>Quantity</span>
                  <span>× {quantity}</span>
                </div>
                <div className="totals-row grand">
                  <span>Total</span>
                  <span>{Number(subtotal).toLocaleString()} RWF</span>
                </div>

                <button type="submit" className="btn-place-order" disabled={processing}>
                  <i className="feather-check-circle"></i> {processing ? 'Placing Order...' : 'Place Order'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

ProductCheckout.layout = (page) => <GuestLayout children={page} title="Product Checkout" />;