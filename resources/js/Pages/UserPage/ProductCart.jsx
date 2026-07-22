import { Head, Link, router } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';

/**
 * Shopping Cart — Inertia/React conversion of resources/views/cart/index.blade.php
 *
 * Expects the same controller props as the Blade view:
 *   cartItems: [{ id, quantity, product: { id, name, price, image, stock } }, ...]
 *   flash.success (optional, via HandleInertiaRequests shared props)
 *
 * Routes used (Ziggy `route()` helper):
 *   route('cart.remove', id)         — DELETE
 *   route('cart.update', id)         — PUT   { quantity }
 *   route('checkout.index')          — GET
 *   route('user.products.index')     — GET
 *
 * Theme: no theme toggle here and no ThemeContext import — this page just
 * inherits whatever mode is already active site-wide. Dark mode is driven by
 * Bootstrap's native `data-bs-theme="dark"` attribute set on an ancestor
 * (root layout, same mechanism Topbar.jsx relies on), so this component's
 * styles are scoped with `[data-bs-theme="dark"] .cart-page` and just follow
 * along automatically.
 */

/* ── Inline icons (no extra icon-font dependency required) ── */
const Icon = {
    Cart: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="9" cy="21" r="1.4" /><circle cx="18" cy="21" r="1.4" />
            <path d="M2.5 3h2.2l2.3 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7.5H6.1" />
        </svg>
    ),
    Trash: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M4 7h16M9 7V4.8A1.8 1.8 0 0 1 10.8 3h2.4A1.8 1.8 0 0 1 15 4.8V7m2 0-.8 12.2A2 2 0 0 1 14.2 21H9.8a2 2 0 0 1-2-1.8L7 7" />
        </svg>
    ),
    Plus: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
            <path d="M12 5v14M5 12h14" />
        </svg>
    ),
    Minus: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
            <path d="M5 12h14" />
        </svg>
    ),
    Sun: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
    ),
    Moon: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
    ),
    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="m20 7-11 11-5-5" />
        </svg>
    ),
    Lock: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="4.5" y="10.5" width="15" height="9.5" rx="1.8" />
            <path d="M8 10.5V7.2A4 4 0 0 1 16 7.2v3.3" />
        </svg>
    ),
    Bag: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M6 8h12l1 12.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 20.5L6 8Z" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
    ),
};

const CartThemeStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .cart-page {
            --cp-bg: #f4f7f7;
            --cp-panel: #ffffff;
            --cp-panel-alt: #fafcfc;
            --cp-border: rgba(14,22,24,0.08);
            --cp-text: #10201f;
            --cp-muted: #5c7274;
            --cp-muted-dim: #93a5a6;
            --cp-shadow: 0 1px 2px rgba(14,22,24,0.04);
            --cp-shadow-lg: 0 12px 32px rgba(14,22,24,0.08);
        }
        [data-bs-theme="dark"] .cart-page {
            --cp-bg: #0e1618;
            --cp-panel: #141f21;
            --cp-panel-alt: #182427;
            --cp-border: rgba(255,255,255,0.07);
            --cp-text: #e7eeee;
            --cp-muted: #7f9a9d;
            --cp-muted-dim: #4d6062;
            --cp-shadow: 0 1px 2px rgba(0,0,0,0.2);
            --cp-shadow-lg: 0 16px 40px rgba(0,0,0,0.4);
        }
        .cart-page {
            --cp-green: #00a667;
            --cp-green-dark: #008755;
            --cp-clay: #c9683f;
            background: var(--cp-bg);
            color: var(--cp-text);
            font-family: 'DM Sans', sans-serif;
            min-height: 100vh;
            transition: background 0.2s ease, color 0.2s ease;
        }
        .cart-page .display-font { font-family: 'Syne', sans-serif; }

        .cp-card {
            background: var(--cp-panel);
            border: 1px solid var(--cp-border);
            border-radius: 1rem;
            box-shadow: var(--cp-shadow);
        }

        .cp-alert-success {
            background: color-mix(in srgb, var(--cp-green) 12%, var(--cp-panel));
            border: 1px solid color-mix(in srgb, var(--cp-green) 30%, transparent);
            color: var(--cp-green-dark);
            border-radius: 0.85rem;
        }
        [data-bs-theme="dark"] .cp-alert-success { color: #6fe0af; }

        .cp-item-row {
            border-bottom: 1px solid var(--cp-border);
            transition: background 0.15s ease;
        }
        .cp-item-row:last-child { border-bottom: none; }
        .cp-item-row:hover { background: var(--cp-panel-alt); }

        .cp-thumb {
            width: 68px; height: 68px; object-fit: cover;
            border-radius: 0.65rem;
            border: 1px solid var(--cp-border);
            background: var(--cp-panel-alt);
            flex-shrink: 0;
        }

        .cp-qty-group {
            display: inline-flex; align-items: center;
            border: 1px solid var(--cp-border);
            border-radius: 999px;
            overflow: hidden;
            background: var(--cp-panel-alt);
        }
        .cp-qty-btn {
            width: 2.1rem; height: 2.1rem;
            display: flex; align-items: center; justify-content: center;
            background: transparent; border: none;
            color: var(--cp-text);
            transition: background 0.15s ease, color 0.15s ease;
        }
        .cp-qty-btn:hover:not(:disabled) { background: var(--cp-green); color: #fff; }
        .cp-qty-btn:disabled { color: var(--cp-muted-dim); cursor: not-allowed; }
        .cp-qty-input {
            width: 2.6rem; border: none; background: transparent;
            text-align: center; font-weight: 600; color: var(--cp-text);
            -moz-appearance: textfield;
        }
        .cp-qty-input:focus { outline: none; }
        .cp-qty-input::-webkit-outer-spin-button,
        .cp-qty-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }

        .cp-remove-btn {
            border: 1px solid var(--cp-border);
            color: var(--cp-clay);
            background: transparent;
            border-radius: 999px;
            transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .cp-remove-btn:hover { background: var(--cp-clay); border-color: var(--cp-clay); color: #fff; }

        .cp-summary { position: sticky; top: 1.5rem; }
        .cp-summary-row { display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--cp-muted); padding: 0.4rem 0; }
        .cp-summary-total { display: flex; justify-content: space-between; align-items: baseline; padding-top: 0.9rem; border-top: 1px solid var(--cp-border); margin-top: 0.6rem; }

        .cp-checkout-btn {
            background: var(--cp-green);
            border: none; color: #fff;
            border-radius: 999px;
            font-weight: 600;
            transition: background 0.15s ease, transform 0.15s ease;
        }
        .cp-checkout-btn:hover { background: var(--cp-green-dark); color: #fff; transform: translateY(-1px); }

        .cp-empty {
            border: 1px dashed var(--cp-border);
            border-radius: 1rem;
            background: var(--cp-panel);
        }
        .cp-empty-icon {
            width: 3.5rem; height: 3.5rem;
            border-radius: 999px;
            display: flex; align-items: center; justify-content: center;
            background: color-mix(in srgb, var(--cp-green) 12%, transparent);
            color: var(--cp-green);
            margin: 0 auto 1rem;
        }
        .cp-browse-link { color: var(--cp-green); font-weight: 600; text-decoration: none; }
        .cp-browse-link:hover { text-decoration: underline; color: var(--cp-green-dark); }

        .cp-muted { color: var(--cp-muted); }
        .cp-eyebrow { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cp-green); }
    `}</style>
);

function QuantityStepper({ value, min, max, onChange }) {
    const dec = () => onChange(Math.max(min, value - 1));
    const inc = () => onChange(Math.min(max, value + 1));

    return (
        <div className="cp-qty-group">
            <button type="button" className="cp-qty-btn" onClick={dec} disabled={value <= min} aria-label="Decrease quantity">
                <Icon.Minus style={{ width: 14, height: 14 }} />
            </button>
            <input
                type="number"
                className="cp-qty-input"
                min={min}
                max={max}
                value={value}
                onChange={(e) => {
                    const next = parseInt(e.target.value, 10);
                    if (Number.isNaN(next)) return;
                    onChange(Math.min(max, Math.max(min, next)));
                }}
            />
            <button type="button" className="cp-qty-btn" onClick={inc} disabled={value >= max} aria-label="Increase quantity">
                <Icon.Plus style={{ width: 14, height: 14 }} />
            </button>
        </div>
    );
}

function CartRow({ item, onQuantityChange, onRemove, removing }) {
    const total = item.quantity * item.product.price;

    return (
        <div className="cp-item-row px-3 px-md-4 py-3">
            <div className="row align-items-center g-3">
                <div className="col-12 col-md-5">
                    <div className="d-flex align-items-center gap-3">
                        <img
                            src={`/storage/${item.product.image}`}
                            alt={item.product.name}
                            className="cp-thumb"
                        />
                        <div className="min-w-0">
                            <p className="mb-0 fw-semibold text-truncate" style={{ maxWidth: 220 }}>{item.product.name}</p>
                            <p className="mb-0 cp-muted small">${Number(item.product.price).toFixed(2)} each</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3 d-flex justify-content-md-center">
                    <QuantityStepper
                        value={item.quantity}
                        min={1}
                        max={item.product.stock ?? 1000}
                        onChange={(qty) => onQuantityChange(item.id, qty)}
                    />
                </div>

                <div className="col-4 col-md-2 text-md-center">
                    <span className="display-font fw-bold">${total.toFixed(2)}</span>
                </div>

                <div className="col-2 col-md-2 text-end">
                    <button
                        type="button"
                        className="cp-remove-btn btn btn-sm d-inline-flex align-items-center gap-1"
                        onClick={() => onRemove(item.id)}
                        disabled={removing === item.id}
                    >
                        <Icon.Trash style={{ width: 14, height: 14 }} />
                        <span className="d-none d-md-inline">{removing === item.id ? 'Removing…' : 'Remove'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ProductCart({ cartItems: initialCartItems, flash }) {
    const [cartItems, setCartItems] = useState(initialCartItems ?? []);
    const [removingId, setRemovingId] = useState(null);

    useEffect(() => {
        setCartItems(initialCartItems ?? []);
    }, [initialCartItems]);

    const grandTotal = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.quantity * item.product.price, 0),
        [cartItems]
    );

    const itemCount = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
        [cartItems]
    );

    function handleQuantityChange(id, quantity) {
        setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));

        router.put(
            route('cart.update', id),
            { quantity },
            { preserveScroll: true, preserveState: true }
        );
    }

    function handleRemove(id) {
        setRemovingId(id);
        router.delete(route('cart.remove', id), {
            preserveScroll: true,
            onFinish: () => setRemovingId(null),
        });
    }

    return (
        <div className="cart-page pb-5">
            <Head title="My Cart" />
            <CartThemeStyles />

            <div className="container py-5" style={{ maxWidth: 1140 }}>
                <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
                    <div>
                        <p className="cp-eyebrow mb-1 d-flex align-items-center gap-2">
                            <Icon.Cart style={{ width: 14, height: 14 }} /> Cart
                        </p>
                        <h1 className="display-font fw-bold mb-0" style={{ fontSize: '1.7rem' }}>My Shopping Cart</h1>
                    </div>
                </div>

                {flash?.success && (
                    <div className="cp-alert-success px-3 py-2 mb-4 d-flex align-items-center gap-2">
                        <Icon.Check style={{ width: 16, height: 16 }} />
                        <span>{flash.success}</span>
                    </div>
                )}

                {cartItems.length > 0 ? (
                    <div className="row g-4">
                        <div className="col-12 col-lg-8">
                            <div className="cp-card overflow-hidden">
                                <div className="d-none d-md-flex px-4 py-3 cp-muted small fw-semibold text-uppercase" style={{ letterSpacing: '0.04em', borderBottom: '1px solid var(--cp-border)' }}>
                                    <span className="col-5">Product</span>
                                    <span className="col-3 text-center">Quantity</span>
                                    <span className="col-2 text-center">Total</span>
                                    <span className="col-2 text-end">Action</span>
                                </div>
                                {cartItems.map((item) => (
                                    <CartRow
                                        key={item.id}
                                        item={item}
                                        onQuantityChange={handleQuantityChange}
                                        onRemove={handleRemove}
                                        removing={removingId}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="cp-card cp-summary p-4">
                                <h2 className="display-font fw-bold mb-3" style={{ fontSize: '1.1rem' }}>Order Summary</h2>

                                <div className="cp-summary-row">
                                    <span>Items ({itemCount})</span>
                                    <span>${grandTotal.toFixed(2)}</span>
                                </div>
                                <div className="cp-summary-row">
                                    <span>Shipping</span>
                                    <span>Calculated at checkout</span>
                                </div>

                                <div className="cp-summary-total">
                                    <span className="fw-semibold">Grand Total</span>
                                    <span className="display-font fw-bold fs-4">${grandTotal.toFixed(2)}</span>
                                </div>

                                <Link
                                    href={route('checkout.index')}
                                    className="cp-checkout-btn btn w-100 mt-4 py-2 d-flex align-items-center justify-content-center gap-2"
                                >
                                    <Icon.Lock style={{ width: 15, height: 15 }} />
                                    Proceed to Checkout
                                </Link>

                                <Link href={route('user.products.index')} className="cp-browse-link d-block text-center mt-3 small">
                                    Continue shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="cp-empty text-center py-5 px-4">
                        <div className="cp-empty-icon">
                            <Icon.Bag style={{ width: 26, height: 26 }} />
                        </div>
                        <h2 className="display-font fw-bold mb-2" style={{ fontSize: '1.15rem' }}>Your cart is empty</h2>
                        <p className="cp-muted mb-3">Looks like you haven't added anything yet.</p>
                        <Link href={route('user.products.index')} className="cp-browse-link">Browse Products</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

ProductCart.layout = (page) => <GuestLayout children={page} />;