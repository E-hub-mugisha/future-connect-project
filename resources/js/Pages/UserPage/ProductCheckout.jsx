import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';

/**
 * Checkout — Inertia/React conversion of resources/views/checkout/index.blade.php
 *
 * Expected controller props:
 *   cartItems:  [{ id, quantity, product: { id, name, price, image } }, ...]
 *   public_key: Flutterwave public key (string)
 *   cartId:     current cart identifier, used to build tx_ref / callback URL
 *
 * Auth user (name, email, phone) is read from the shared Inertia prop
 * `auth.user`, the same way Topbar.jsx reads it via usePage().props.auth.
 *
 * Routes used (Ziggy `route()` helper):
 *   route('cart.index')          — GET  (Back to Cart link)
 *   route('user.products.index') — GET  (empty-cart browse link)
 *
 * Payment: the Flutterwave inline v3 script is injected once on mount (if
 * not already present) rather than via a <script> tag in the page, since
 * Inertia pages don't reload <script> tags on navigation. The confirmation
 * step is a plain React modal (no Bootstrap JS / data-bs-* dependency),
 * matching the manual-state dropdown pattern already used in Topbar.jsx.
 *
 * Theme: no toggle here — same as the cart page, this inherits whichever
 * mode is already active via Bootstrap's `data-bs-theme="dark"` attribute
 * on an ancestor, and is styled with `[data-bs-theme="dark"] .checkout-page`.
 */

const FLUTTERWAVE_SRC = 'https://checkout.flutterwave.com/v3.js';

const Icon = {
    Bag: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M6 8h12l1 12.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 20.5L6 8Z" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
    ),
    List: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    ),
    Card: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
            <path d="M2.5 10h19" />
        </svg>
    ),
    ArrowLeft: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
    ),
    Phone: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />
        </svg>
    ),
    Pin: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
            <circle cx="12" cy="9" r="2.5" />
        </svg>
    ),
    Close: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M18 6 6 18M6 6l12 12" />
        </svg>
    ),
    Lock: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="4.5" y="10.5" width="15" height="9.5" rx="1.8" />
            <path d="M8 10.5V7.2A4 4 0 0 1 16 7.2v3.3" />
        </svg>
    ),
    Spinner: (p) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" />
            <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    ),
};

const CheckoutThemeStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .checkout-page {
            --co-bg: #f4f7f7;
            --co-panel: #ffffff;
            --co-panel-alt: #fafcfc;
            --co-border: rgba(14,22,24,0.08);
            --co-text: #10201f;
            --co-muted: #5c7274;
            --co-muted-dim: #93a5a6;
            --co-shadow: 0 1px 2px rgba(14,22,24,0.04);
            --co-overlay: rgba(14,22,24,0.45);
        }
        [data-bs-theme="dark"] .checkout-page {
            --co-bg: #0e1618;
            --co-panel: #141f21;
            --co-panel-alt: #182427;
            --co-border: rgba(255,255,255,0.07);
            --co-text: #e7eeee;
            --co-muted: #7f9a9d;
            --co-muted-dim: #4d6062;
            --co-shadow: 0 1px 2px rgba(0,0,0,0.2);
            --co-overlay: rgba(0,0,0,0.65);
        }
        .checkout-page {
            --co-green: #00a667;
            --co-green-dark: #008755;
            --co-blue: #3f8fc9;
            background: var(--co-bg);
            color: var(--co-text);
            font-family: 'DM Sans', sans-serif;
            min-height: 100vh;
        }
        .checkout-page .display-font { font-family: 'Syne', sans-serif; }

        .co-eyebrow { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--co-green); }
        .co-muted { color: var(--co-muted); }

        .co-card {
            background: var(--co-panel);
            border: 1px solid var(--co-border);
            border-radius: 1rem;
            box-shadow: var(--co-shadow);
        }

        .co-thumb {
            width: 44px; height: 44px; object-fit: cover;
            border-radius: 0.55rem;
            border: 1px solid var(--co-border);
            background: var(--co-panel-alt);
            flex-shrink: 0;
        }

        .co-table thead th {
            font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;
            color: var(--co-muted); border-bottom: 1px solid var(--co-border) !important;
            background: transparent;
        }
        .co-table td { border-bottom: 1px solid var(--co-border); color: var(--co-text); vertical-align: middle; }
        .co-table tr:last-child td { border-bottom: none; }

        .co-total-row { display: flex; justify-content: space-between; align-items: baseline; padding-top: 1rem; margin-top: 0.5rem; border-top: 1px solid var(--co-border); }

        .co-pay-option {
            display: flex; align-items: center; gap: 0.75rem;
            width: 100%; padding: 0.9rem 1.1rem;
            border-radius: 0.9rem;
            border: 1px solid var(--co-border);
            background: var(--co-panel-alt);
            color: var(--co-text);
            font-weight: 600;
            transition: border-color 0.15s ease, transform 0.15s ease, background 0.15s ease;
        }
        .co-pay-option:hover { border-color: var(--co-green); transform: translateY(-1px); background: var(--co-panel); }
        .co-pay-logo {
            width: 2.1rem; height: 2.1rem; border-radius: 0.6rem;
            display: flex; align-items: center; justify-content: center;
            background: color-mix(in srgb, var(--co-blue) 14%, transparent);
            color: var(--co-blue);
            flex-shrink: 0;
        }

        .co-back-link { color: var(--co-green); font-weight: 600; text-decoration: none; }
        .co-back-link:hover { text-decoration: underline; color: var(--co-green-dark); }

        .co-empty { border: 1px dashed var(--co-border); border-radius: 1rem; background: var(--co-panel); }
        .co-empty-icon {
            width: 3.5rem; height: 3.5rem; border-radius: 999px;
            display: flex; align-items: center; justify-content: center;
            background: color-mix(in srgb, var(--co-green) 12%, transparent);
            color: var(--co-green);
            margin: 0 auto 1rem;
        }

        /* Confirmation modal (plain React, no Bootstrap JS dependency) */
        .co-modal-overlay {
            position: fixed; inset: 0; z-index: 1050;
            background: var(--co-overlay);
            display: flex; align-items: center; justify-content: center;
            padding: 1rem;
        }
        .co-modal {
            width: 100%; max-width: 440px;
            background: var(--co-panel);
            border-radius: 1.1rem;
            overflow: hidden;
            box-shadow: 0 24px 60px rgba(0,0,0,0.3);
        }
        .co-modal-head {
            padding: 1.25rem 1.5rem;
            background: linear-gradient(135deg, #0052D4, #4364F7);
            color: #fff;
            display: flex; align-items: center; justify-content: space-between;
        }
        .co-modal-close {
            width: 2rem; height: 2rem; border-radius: 999px;
            border: none; background: rgba(255,255,255,0.15); color: #fff;
            display: flex; align-items: center; justify-content: center;
        }
        .co-modal-close:hover { background: rgba(255,255,255,0.25); }
        .co-modal-body { padding: 1.5rem; }

        .co-field-label { font-weight: 600; font-size: 0.82rem; color: var(--co-muted); margin-bottom: 0.35rem; display: block; }
        .co-input-group {
            display: flex; align-items: center; gap: 0.5rem;
            border: 1px solid var(--co-border);
            border-radius: 0.75rem;
            padding: 0 0.75rem;
            background: var(--co-panel-alt);
        }
        .co-input-group svg { flex-shrink: 0; color: var(--co-muted); }
        .co-input-group input {
            flex: 1; border: none; background: transparent; outline: none;
            padding: 0.65rem 0; color: var(--co-text); font-size: 0.92rem;
        }
        .co-input-group:focus-within { border-color: var(--co-green); }

        .co-pay-btn {
            background: var(--co-green); border: none; color: #fff;
            border-radius: 999px; font-weight: 600;
            transition: background 0.15s ease;
        }
        .co-pay-btn:hover:not(:disabled) { background: var(--co-green-dark); color: #fff; }
        .co-pay-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .co-cancel-btn {
            background: transparent; border: 1px solid var(--co-border); color: var(--co-text);
            border-radius: 999px; font-weight: 600;
        }
        .co-cancel-btn:hover { background: var(--co-panel-alt); }

        .co-error { color: #d94f4f; font-size: 0.8rem; margin-top: 0.4rem; }
    `}</style>
);

function loadFlutterwaveScript() {
    return new Promise((resolve, reject) => {
        if (window.FlutterwaveCheckout) {
            resolve();
            return;
        }
        const existing = document.querySelector(`script[src="${FLUTTERWAVE_SRC}"]`);
        if (existing) {
            existing.addEventListener('load', () => resolve());
            existing.addEventListener('error', reject);
            return;
        }
        const script = document.createElement('script');
        script.src = FLUTTERWAVE_SRC;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

function PaymentModal({ open, onClose, grandTotal, cartId, publicKey, user }) {
    const [phone, setPhone] = useState(user?.phone ?? '');
    const [address, setAddress] = useState('');
    const [paying, setPaying] = useState(false);
    const [error, setError] = useState('');
    const [scriptReady, setScriptReady] = useState(false);

    useEffect(() => {
        if (!open) return;
        loadFlutterwaveScript()
            .then(() => setScriptReady(true))
            .catch(() => setError('Could not load the payment provider. Please refresh and try again.'));
    }, [open]);

    if (!open) return null;

    function handlePay() {
        setError('');

        if (!phone.trim() || !address.trim()) {
            setError('Phone and delivery address are required.');
            return;
        }
        if (!scriptReady || !window.FlutterwaveCheckout) {
            setError('Payment provider is still loading, please wait a moment.');
            return;
        }

        setPaying(true);

        const txRef = `CART_${cartId}_${Date.now()}`;

        window.FlutterwaveCheckout({
            public_key: publicKey,
            tx_ref: txRef,
            amount: grandTotal,
            currency: 'RWF',
            payment_options: 'card,mobilemoneyrwanda',
            customer: {
                email: user?.email ?? '',
                phonenumber: phone || '0000000000',
                name: user?.name ?? '',
            },
            customizations: {
                title: 'Cart Checkout',
                description: 'Payment for products',
                logo: '/logo.png',
            },
            callback: function (data) {
                const params = new URLSearchParams({
                    cart_id: cartId,
                    amount: grandTotal,
                    email: user?.email ?? '',
                    status: data.status,
                    tx_ref: data.tx_ref,
                });
                window.location.href = `/cart/payment/callback?${params.toString()}`;
            },
            onclose: function () {
                setPaying(false);
            },
        });
    }

    return (
        <div className="co-modal-overlay" onClick={onClose}>
            <div className="co-modal" onClick={(e) => e.stopPropagation()}>
                <div className="co-modal-head">
                    <h5 className="display-font fw-bold mb-0" style={{ fontSize: '1.05rem' }}>Flutterwave Payment</h5>
                    <button type="button" className="co-modal-close" onClick={onClose} aria-label="Close">
                        <Icon.Close style={{ width: 15, height: 15 }} />
                    </button>
                </div>

                <div className="co-modal-body">
                    <p className="fw-semibold mb-3" style={{ fontSize: '0.9rem' }}>
                        Please confirm your details before paying.
                    </p>

                    <div className="row g-3 mb-3">
                        <div className="col-12">
                            <label className="co-field-label">Phone</label>
                            <div className="co-input-group">
                                <Icon.Phone style={{ width: 15, height: 15 }} />
                                <input
                                    type="text"
                                    placeholder="Phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="co-field-label">Address</label>
                            <div className="co-input-group">
                                <Icon.Pin style={{ width: 15, height: 15 }} />
                                <input
                                    type="text"
                                    placeholder="Delivery address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {error && <p className="co-error">{error}</p>}

                    <h5 className="display-font fw-bold mt-3" style={{ fontSize: '1rem' }}>
                        Amount to Pay: <span style={{ color: 'var(--co-green)' }}>${grandTotal.toFixed(2)}</span>
                    </h5>

                    <div className="d-grid gap-2 mt-4">
                        <button
                            type="button"
                            className="co-pay-btn btn py-2 d-flex align-items-center justify-content-center gap-2"
                            onClick={handlePay}
                            disabled={paying}
                        >
                            {paying ? (
                                <>
                                    <Icon.Spinner style={{ width: 16, height: 16, animation: 'spin 0.8s linear infinite' }} />
                                    Processing Payment…
                                </>
                            ) : (
                                <>
                                    <Icon.Lock style={{ width: 15, height: 15 }} />
                                    Pay Now
                                </>
                            )}
                        </button>
                        <button type="button" className="co-cancel-btn btn py-2" onClick={onClose} disabled={paying}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}

export default function CheckoutIndex({ cartItems = [], public_key, cartId }) {
    const { auth } = usePage().props;
    const user = auth?.user;
    const [modalOpen, setModalOpen] = useState(false);

    const grandTotal = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.quantity * item.product.price, 0),
        [cartItems]
    );

    return (
        <div className="checkout-page pb-5">
            <Head title="Checkout" />
            <CheckoutThemeStyles />

            <div className="container py-5" style={{ maxWidth: 1140 }}>
                <p className="co-eyebrow mb-1 d-flex align-items-center gap-2">
                    <Icon.Bag style={{ width: 14, height: 14 }} /> Checkout
                </p>
                <h1 className="display-font fw-bold mb-4" style={{ fontSize: '1.7rem' }}>Checkout</h1>

                {cartItems.length > 0 ? (
                    <>
                        <div className="row g-4">
                            <div className="col-12 col-lg-8">
                                <div className="co-card p-4">
                                    <h2 className="display-font fw-bold mb-3 d-flex align-items-center gap-2" style={{ fontSize: '1.05rem' }}>
                                        <Icon.List style={{ width: 17, height: 17, color: 'var(--co-green)' }} />
                                        Order Summary
                                    </h2>

                                    <div className="table-responsive">
                                        <table className="table co-table align-middle mb-0">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 32 }}>#</th>
                                                    <th className="text-start">Product</th>
                                                    <th className="text-center">Price</th>
                                                    <th className="text-center">Qty</th>
                                                    <th className="text-end">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map((item, i) => (
                                                    <tr key={item.id}>
                                                        <td className="co-muted">{i + 1}</td>
                                                        <td className="text-start">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img
                                                                    src={`/storage/${item.product.image}`}
                                                                    alt={item.product.name}
                                                                    className="co-thumb"
                                                                />
                                                                <span className="fw-medium">{item.product.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">${Number(item.product.price).toFixed(2)}</td>
                                                        <td className="text-center">{item.quantity}</td>
                                                        <td className="text-end fw-semibold">
                                                            ${(item.quantity * item.product.price).toFixed(2)}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="co-total-row">
                                        <span className="fw-semibold">Grand Total</span>
                                        <span className="display-font fw-bold fs-4" style={{ color: 'var(--co-green)' }}>
                                            ${grandTotal.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-4">
                                <div className="co-card p-4">
                                    <h2 className="display-font fw-bold mb-3 d-flex align-items-center gap-2" style={{ fontSize: '1.05rem' }}>
                                        <Icon.Card style={{ width: 17, height: 17, color: 'var(--co-blue)' }} />
                                        Payment Options
                                    </h2>

                                    <button type="button" className="co-pay-option" onClick={() => setModalOpen(true)}>
                                        <span className="co-pay-logo">
                                            <Icon.Card style={{ width: 18, height: 18 }} />
                                        </span>
                                        Flutterwave
                                    </button>

                                    <div className="text-center mt-3">
                                        <Link href={route('cart.index')} className="co-back-link small d-inline-flex align-items-center gap-1">
                                            <Icon.ArrowLeft style={{ width: 13, height: 13 }} />
                                            Back to Cart
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <PaymentModal
                            open={modalOpen}
                            onClose={() => setModalOpen(false)}
                            grandTotal={grandTotal}
                            cartId={cartId}
                            publicKey={public_key}
                            user={user}
                        />
                    </>
                ) : (
                    <div className="co-empty text-center py-5 px-4">
                        <div className="co-empty-icon">
                            <Icon.Bag style={{ width: 26, height: 26 }} />
                        </div>
                        <h2 className="display-font fw-bold mb-2" style={{ fontSize: '1.15rem' }}>Your cart is empty</h2>
                        <p className="co-muted mb-3">Add something to your cart before checking out.</p>
                        <Link href={route('user.products.index')} className="co-back-link">Browse Products</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

CheckoutIndex.layout = (page) => <GuestLayout children={page} />;
