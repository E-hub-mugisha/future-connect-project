import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';


const Icon = {
    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="m20 7-11 11-5-5" />
        </svg>
    ),
    List: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    ),
    User: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="12" cy="8" r="3.5" /><path d="M4.5 20c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5" />
        </svg>
    ),
    Card: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
            <path d="M2.5 10h19" />
        </svg>
    ),
    Pin: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
            <circle cx="12" cy="9" r="2.5" />
        </svg>
    ),
    Phone: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />
        </svg>
    ),
    Mail: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
            <path d="m3 6 9 6 9-6" />
        </svg>
    ),
    Hash: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M5 9h14M5 15h14M10 4 8 20M16 4l-2 16" />
        </svg>
    ),
    Clock: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
        </svg>
    ),
};

const OrderSuccessThemeStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .order-success-page {
            --os-bg: #f4f7f7;
            --os-panel: #F5f5f7;
            --os-panel-alt: #fafcfc;
            --os-border: rgba(14,22,24,0.08);
            --os-text: #10201f;
            --os-muted: #5c7274;
            --os-shadow: 0 1px 2px rgba(14,22,24,0.04);
        }
        [data-bs-theme="dark"] .order-success-page {
            --os-bg: #0e1618;
            --os-panel: #141f21;
            --os-panel-alt: #182427;
            --os-border: rgba(255,255,255,0.07);
            --os-text: #e7eeee;
            --os-muted: #7f9a9d;
            --os-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .order-success-page {
            --os-green: #00a667;
            --os-green-dark: #008755;
            background: var(--os-bg);
            color: var(--os-text);
            font-family: 'DM Sans', sans-serif;
            min-height: 100vh;
        }
        .order-success-page .display-font { font-family: 'Syne', sans-serif; }
        .os-muted { color: var(--os-muted); }

        .os-check-icon {
            width: 4.5rem; height: 4.5rem;
            border-radius: 999px;
            display: flex; align-items: center; justify-content: center;
            background: color-mix(in srgb, var(--os-green) 14%, transparent);
            color: var(--os-green);
            margin: 0 auto 1.25rem;
        }
        .os-order-number {
            font-weight: 700;
            color: var(--os-green);
        }

        .os-card {
            background: var(--os-panel);
            border: 1px solid var(--os-border);
            border-radius: 1rem;
            box-shadow: var(--os-shadow);
        }
        .os-card-title {
            font-size: 1.05rem;
            display: flex; align-items: center; gap: 0.5rem;
        }

        .os-item-row {
            background: var(--os-panel-alt);
            border-radius: 0.85rem;
            padding: 0.9rem;
        }
        .os-thumb {
            width: 64px; height: 64px; object-fit: cover;
            border-radius: 0.65rem;
            border: 1px solid var(--os-border);
            background: var(--os-panel);
            flex-shrink: 0;
        }

        .os-summary-list { list-style: none; padding: 0; margin: 0; }
        .os-summary-list li {
            display: flex; justify-content: space-between;
            padding: 0.55rem 0;
            border-bottom: 1px solid var(--os-border);
            color: var(--os-muted);
            font-size: 0.92rem;
        }
        .os-summary-list li:last-child { border-bottom: none; }
        .os-summary-list li span { color: var(--os-text); font-weight: 600; }

        .os-total-row {
            display: flex; justify-content: space-between; align-items: baseline;
            padding-top: 1rem; margin-top: 0.5rem;
            border-top: 1px solid var(--os-border);
        }

        .os-billing-row {
            display: flex; align-items: flex-start; gap: 0.6rem;
            padding: 0.4rem 0;
            font-size: 0.92rem;
        }
        .os-billing-row svg { color: var(--os-green); margin-top: 0.15rem; flex-shrink: 0; }

        .os-detail-grid { display: flex; flex-wrap: wrap; gap: 1.5rem; }
        .os-detail-item h6 { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--os-muted); margin-bottom: 0.25rem; }
        .os-detail-item p { margin: 0; font-weight: 600; }

        .os-back-link { color: var(--os-green); font-weight: 600; text-decoration: none; }
        .os-back-link:hover { text-decoration: underline; color: var(--os-green-dark); }
    `}</style>
);

function formatDate(value, options) {
    if (!value) return 'N/A';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'N/A';
    return date.toLocaleDateString('en-US', options ?? { month: 'short', day: '2-digit', year: 'numeric' });
}

function formatDateTime(value) {
    if (!value) return 'N/A';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'N/A';
    return date.toLocaleString('en-US', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true,
    });
}

export default function OrderSuccess({ order }) {
    const subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalQuantity = order.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="order-success-page pb-5">
            <Head title="Order Success" />
            <OrderSuccessThemeStyles />

            <div className="container py-5" style={{ maxWidth: 860 }}>
                {/* Received */}
                <div className="text-center mb-5">
                    <div className="os-check-icon">
                        <Icon.Check style={{ width: 32, height: 32 }} />
                    </div>
                    <h1 className="display-font fw-bold mb-2" style={{ fontSize: '1.5rem' }}>
                        Thank you! Your order has been received
                    </h1>
                    <p className="os-muted mb-0">
                        Order Number: <span className="os-order-number">#{order.id}</span>
                    </p>
                </div>

                {/* Order details */}
                <div className="os-card p-4 mb-4">
                    <h2 className="display-font fw-bold os-card-title mb-3">
                        <Icon.List style={{ width: 18, height: 18, color: 'var(--os-green)' }} />
                        Order Details
                    </h2>

                    <div className="d-flex flex-column gap-2 mb-3">
                        {order.items.map((item, i) => (
                            <div className="os-item-row d-flex align-items-center gap-3" key={item.id ?? i}>
                                <img
                                    src={`/storage/${item.product?.image ?? 'default.png'}`}
                                    alt={item.product?.name ?? 'Product Deleted'}
                                    className="os-thumb"
                                />
                                <div className="min-w-0">
                                    <p className="mb-1 fw-semibold">{item.product?.name ?? 'Product Deleted'}</p>
                                    <p className="mb-1 os-muted small">Delivery: {formatDate(order.delivery_date)}</p>
                                    <p className="mb-0 small">
                                        Price: ${Number(item.price).toFixed(2)} &times; {item.quantity} ={' '}
                                        <span className="fw-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <ul className="os-summary-list">
                        <li>Subtotal <span>${subtotal.toFixed(2)}</span></li>
                        <li>Quantity <span>{totalQuantity}</span></li>
                        {order.extras > 0 && (
                            <li>Extra Services <span>${Number(order.extras).toFixed(2)}</span></li>
                        )}
                        {order.processing_fee > 0 && (
                            <li>Processing Fee <span>${Number(order.processing_fee).toFixed(2)}</span></li>
                        )}
                        {order.tax > 0 && (
                            <li>Tax ({order.tax_rate}%) <span>${Number(order.tax).toFixed(2)}</span></li>
                        )}
                    </ul>

                    <div className="os-total-row">
                        <span className="fw-semibold">Total</span>
                        <span className="display-font fw-bold fs-4" style={{ color: 'var(--os-green)' }}>
                            ${Number(order.total).toFixed(2)}
                        </span>
                    </div>
                </div>

                {/* Billing details */}
                <div className="os-card p-4 mb-4">
                    <h2 className="display-font fw-bold os-card-title mb-3">
                        <Icon.User style={{ width: 18, height: 18, color: 'var(--os-green)' }} />
                        Billing Information
                    </h2>

                    <p className="fw-semibold mb-2">{order.user?.name}</p>
                    <div className="os-billing-row">
                        <Icon.Pin style={{ width: 15, height: 15 }} />
                        <span>{order.user?.address}</span>
                    </div>
                    <div className="os-billing-row">
                        <Icon.Phone style={{ width: 15, height: 15 }} />
                        <span>{order.user?.phone}</span>
                    </div>
                    <div className="os-billing-row">
                        <Icon.Mail style={{ width: 15, height: 15 }} />
                        <span>{order.user?.email}</span>
                    </div>
                </div>

                {/* Payment details */}
                <div className="os-card p-4">
                    <h2 className="display-font fw-bold os-card-title mb-3">
                        <Icon.Card style={{ width: 18, height: 18, color: 'var(--os-green)' }} />
                        Payment Details
                    </h2>

                    <div className="os-detail-grid">
                        <div className="os-detail-item">
                            <h6>Payment Method</h6>
                            <p>{order.payment_method ? order.payment_method.charAt(0).toUpperCase() + order.payment_method.slice(1) : 'N/A'}</p>
                        </div>
                        <div className="os-detail-item">
                            <h6 className="d-flex align-items-center gap-1"><Icon.Hash style={{ width: 12, height: 12 }} /> Transaction ID</h6>
                            <p>#{order.transaction_ref}</p>
                        </div>
                        <div className="os-detail-item">
                            <h6 className="d-flex align-items-center gap-1"><Icon.Clock style={{ width: 12, height: 12 }} /> Time &amp; Date</h6>
                            <p>{formatDateTime(order.created_at)}</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <Link href={route('user.products.index')} className="os-back-link">Continue Shopping</Link>
                </div>
            </div>
        </div>
    );
}

OrderSuccess.layout = (page) => <GuestLayout children={page} />;
