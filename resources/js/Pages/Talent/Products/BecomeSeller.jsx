import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

// ─── SVG Icons ───────────────────────────────────────────────
function StoreIcon({ className = "w-6 h-6" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.617A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.617m-16.5 0V13.5C2.25 11.97 3.53 10.75 5.25 10.75c.896 0 1.7.393 2.25 1.016.55-.623 1.354-1.016 2.25-1.016 1.78 0 3.25 1.22 3.25 2.75v7.5m0 0V13.5c0-1.52 1.22-2.75 3.25-2.75.896 0 1.7.393 2.25 1.016.55-.623 1.354-1.016 2.25-1.016 1.72 0 3 1.22 3 2.75v7.5" />
        </svg>
    );
}

function BoxIcon({ className = "w-6 h-6" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
    );
}

function ChartIcon({ className = "w-6 h-6" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
    );
}

function MegaphoneIcon({ className = "w-6 h-6" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 01-4.5-4.5v-1.61c0-.873.093-1.732.27-2.566C3.702 6.614 4.974 5.5 6.5 5.5h.5c.698 0 1.39.062 2.07.181l1.82-3.64a1.125 1.125 0 012.01 0l1.82 3.64c.68-.119 1.372-.181 2.07-.181h.5c1.526 0 2.798 1.114 3.23 2.609.177.834.27 1.693.27 2.566v1.61a4.5 4.5 0 01-4.5 4.5h-.75c-.704 0-1.402.03-2.09.09m-1.82 3.64a1.125 1.125 0 01-2.01 0l-1.82-3.64m9.64-3.64l-1.82 3.64" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5" />
        </svg>
    );
}

function ShieldIcon({ className = "w-6 h-6" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    );
}

function StarIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
    );
}

function CloseIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

function SpinnerIcon({ className = "w-4 h-4 animate-spin" }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
    );
}

function CheckIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    );
}

// ─── Main Component ──────────────────────────────────────────
export default function BecomeSeller() {
    const [showModal, setShowModal] = useState(false);
    const form = useForm({});

    const submit = (e) => {
        e.preventDefault();
        form.post(route("talent.seller.register"), {
            preserveScroll: true,
            onSuccess: () => setShowModal(false),
        });
    };

    const benefits = [
        { icon: BoxIcon, title: "Sell Unlimited Products", desc: "List as many products as you want without hidden fees." },
        { icon: ChartIcon, title: "Analytics Dashboard", desc: "Track your sales, traffic, and customer behavior in real-time." },
        { icon: MegaphoneIcon, title: "Promotions & Marketing", desc: "Access built-in tools to boost your product visibility." },
        { icon: ShieldIcon, title: "Secure Payments", desc: "Get paid securely and reliably with our trusted payment gateway." },
    ];

    return (
        <AppLayout>
            <Head title="Become a Seller" />

            <div data-scope="seller-page" className="min-vh-100">
                <style>{`
                    [data-scope="seller-page"] {
                        --sp-accent: #48d597;
                        --sp-accent-soft: rgba(72, 213, 151, 0.08);
                        --sp-accent-hover: rgba(72, 213, 151, 0.12);
                        --sp-black: #0a0a0a;
                        --sp-surface: #fafafa;
                        --sp-card: #F5f5f7;
                        --sp-border: #e8e8e8;
                        --sp-text: #171717;
                        --sp-muted: #737373;
                        background-color: var(--sp-surface);
                    }

                    [data-scope="seller-page"] .sp-card {
                        background: var(--sp-card);
                        border: 1px solid var(--sp-border);
                        border-radius: 1.25rem;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.04);
                    }

                    [data-scope="seller-page"] .sp-hero {
                        background: var(--sp-card);
                        border: 1px solid var(--sp-border);
                        border-radius: 1.25rem;
                        position: relative;
                        overflow: hidden;
                    }
                    [data-scope="seller-page"] .sp-hero::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: var(--sp-accent);
                    }

                    [data-scope="seller-page"] .sp-hero-icon {
                        width: 80px;
                        height: 80px;
                        border-radius: 1.5rem;
                        background: var(--sp-accent-soft);
                        color: var(--sp-accent);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    [data-scope="seller-page"] .sp-btn-primary {
                        background: var(--sp-black);
                        color: #F5f5f7;
                        border: none;
                        font-weight: 600;
                        border-radius: 0.75rem;
                        padding: 0.875rem 2.5rem;
                        font-size: 1rem;
                        transition: all 0.2s ease;
                    }
                    [data-scope="seller-page"] .sp-btn-primary:hover {
                        background: #1a1a1a;
                        transform: translateY(-1px);
                        box-shadow: 0 8px 20px rgba(0,0,0,0.12);
                    }
                    [data-scope="seller-page"] .sp-btn-primary:active {
                        transform: translateY(0);
                    }

                    [data-scope="seller-page"] .sp-benefit-icon {
                        width: 48px;
                        height: 48px;
                        border-radius: 0.875rem;
                        background: var(--sp-accent-soft);
                        color: var(--sp-accent);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    }

                    [data-scope="seller-page"] .sp-modal-overlay {
                        background: rgba(10, 10, 10, 0.45);
                        backdrop-filter: blur(4px);
                    }

                    [data-scope="seller-page"] .sp-modal {
                        background: var(--sp-card);
                        border: 1px solid var(--sp-border);
                        border-radius: 1.25rem;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.15);
                        overflow: hidden;
                    }

                    [data-scope="seller-page"] .sp-modal-header {
                        background: var(--sp-black);
                        color: #F5f5f7;
                        padding: 1.5rem;
                        position: relative;
                    }
                    [data-scope="seller-page"] .sp-modal-header::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 3px;
                        background: var(--sp-accent);
                    }

                    [data-scope="seller-page"] .sp-btn-close {
                        background: rgba(255,255,255,0.1);
                        border: none;
                        color: #F5f5f7;
                        width: 36px;
                        height: 36px;
                        border-radius: 0.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: background 0.2s;
                    }
                    [data-scope="seller-page"] .sp-btn-close:hover {
                        background: rgba(255,255,255,0.2);
                    }

                    [data-scope="seller-page"] .sp-btn-ghost {
                        background: transparent;
                        color: var(--sp-muted);
                        border: 1px solid var(--sp-border);
                        border-radius: 0.75rem;
                        font-weight: 500;
                        padding: 0.625rem 1.5rem;
                        transition: all 0.2s;
                    }
                    [data-scope="seller-page"] .sp-btn-ghost:hover {
                        background: var(--sp-surface);
                        color: var(--sp-text);
                        border-color: #c2c2c2;
                    }

                    [data-scope="seller-page"] .sp-btn-accent {
                        background: var(--sp-accent);
                        color: var(--sp-black);
                        border: none;
                        font-weight: 600;
                        border-radius: 0.75rem;
                        padding: 0.625rem 1.75rem;
                        transition: all 0.2s;
                    }
                    [data-scope="seller-page"] .sp-btn-accent:hover {
                        background: #3bc484;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 12px rgba(72, 213, 151, 0.3);
                    }
                    [data-scope="seller-page"] .sp-btn-accent:disabled {
                        opacity: 0.6;
                        cursor: not-allowed;
                        transform: none;
                    }

                    [data-scope="seller-page"] .sp-divider {
                        height: 1px;
                        background: var(--sp-border);
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; transform: scale(0.98); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    [data-scope="seller-page"] .sp-animate-in {
                        animation: fadeIn 0.2s ease-out;
                    }
                `}</style>

                <div className="container-fluid px-4 py-5 d-flex justify-content-center align-items-center" style={{ minHeight: "85vh" }}>
                    <div className="row w-100 justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            
                            {/* Hero Card */}
                            <div className="sp-hero sp-animate-in">
                                
                                {/* Header */}
                                <div className="p-5 text-center">
                                    <div className="sp-hero-icon mx-auto mb-4">
                                        <StoreIcon className="w-10 h-10" />
                                    </div>
                                    <h2 className="fw-bold mb-2" style={{ color: 'var(--sp-text)', fontSize: '1.875rem' }}>
                                        Become a Seller
                                    </h2>
                                    <p className="mb-0" style={{ color: 'var(--sp-muted)', fontSize: '1.0625rem' }}>
                                        Join thousands of vendors and grow your business with us.
                                    </p>
                                </div>

                                {/* Benefits */}
                                <div className="px-4 px-md-5 pb-5">
                                    <div className="row g-4 mb-5">
                                        {benefits.map((b, i) => {
                                            const Icon = b.icon;
                                            return (
                                                <div className="col-md-6" key={i}>
                                                    <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'var(--sp-accent-soft)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                                                        <div className="sp-benefit-icon">
                                                            <Icon className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <h6 className="fw-bold mb-1" style={{ color: 'var(--sp-text)' }}>{b.title}</h6>
                                                            <p className="mb-0" style={{ color: 'var(--sp-muted)', fontSize: '0.9375rem', lineHeight: 1.5 }}>{b.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="sp-divider mb-5"></div>

                                    <div className="text-center">
                                        <button 
                                            className="btn sp-btn-primary d-inline-flex align-items-center gap-2" 
                                            onClick={() => setShowModal(true)}
                                        >
                                            <StarIcon className="w-4 h-4" />
                                            Register as Seller
                                        </button>
                                        <p className="mt-3 mb-0 small" style={{ color: 'var(--sp-muted)' }}>
                                            No setup fees. Start selling in minutes.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Modal */}
                {showModal && (
                    <div 
                        className="modal show d-block sp-modal-overlay" 
                        tabIndex="-1" 
                        onClick={() => setShowModal(false)}
                    >
                        <div className="modal-dialog modal-lg modal-dialog-centered sp-animate-in" onClick={(e) => e.stopPropagation()}>
                            <div className="sp-modal">
                                <form onSubmit={submit}>
                                    
                                    {/* Modal Header */}
                                    <div className="sp-modal-header d-flex align-items-center justify-content-between">
                                        <h5 className="modal-title fw-bold d-flex align-items-center gap-2 mb-0">
                                            <StarIcon className="w-5 h-5" style={{ color: '#48d597' }} />
                                            Apply to Become a Seller
                                        </h5>
                                        <button 
                                            type="button" 
                                            className="sp-btn-close" 
                                            onClick={() => setShowModal(false)}
                                            aria-label="Close"
                                        >
                                            <CloseIcon className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Modal Body */}
                                    <div className="p-4 p-md-5">
                                        <div className="d-flex align-items-start gap-3 mb-4">
                                            <div className="sp-benefit-icon flex-shrink-0">
                                                <StoreIcon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-2" style={{ color: 'var(--sp-text)' }}>
                                                    Future Connect Shop
                                                </h6>
                                                <p className="mb-0" style={{ color: 'var(--sp-muted)', lineHeight: 1.7 }}>
                                                    Join the marketplace and start selling products that empower our members. By clicking submit, your talent profile details will be used to initialize your seller account.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="rounded-3 p-3" style={{ background: 'var(--sp-accent-soft)', border: '1px solid rgba(72,213,151,0.15)' }}>
                                            <div className="d-flex align-items-center gap-2">
                                                <CheckIcon className="w-4 h-4 flex-shrink-0" style={{ color: '#48d597' }} />
                                                <span className="small fw-medium" style={{ color: 'var(--sp-text)' }}>
                                                    Your profile information will be automatically synced
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modal Footer */}
                                    <div className="d-flex justify-content-between align-items-center p-4" style={{ background: '#fafafa', borderTop: '1px solid var(--sp-border)' }}>
                                        <button 
                                            type="button" 
                                            className="btn sp-btn-ghost" 
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button 
                                            type="submit" 
                                            className="btn sp-btn-accent d-inline-flex align-items-center gap-2"
                                            disabled={form.processing}
                                        >
                                            {form.processing ? (
                                                <>
                                                    <SpinnerIcon />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <CheckIcon className="w-4 h-4" />
                                                    Submit Confirmation
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}