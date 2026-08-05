import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

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
        { 
            icon: "fa-box-open", 
            title: "Sell Unlimited Products", 
            desc: "List as many products as you want without hidden fees." 
        },
        { 
            icon: "fa-chart-line", 
            title: "Analytics Dashboard", 
            desc: "Track your sales, traffic, and customer behavior in real-time." 
        },
        { 
            icon: "fa-bullhorn", 
            title: "Promotions & Marketing", 
            desc: "Access built-in tools to boost your product visibility." 
        },
        { 
            icon: "fa-shield-halved", 
            title: "Secure Payments", 
            desc: "Get paid securely and reliably with our trusted payment gateway." 
        },
    ];

    return (
        <AppLayout>
            <Head title="Become a Seller" />

            <div className="container-fluid px-4 py-4 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                <div className="row w-100 justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        
                        {/* Main Promotional Card */}
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                            
                            {/* Header Banner */}
                            <div className="p-5 text-center text-white" style={{ background: "linear-gradient(135deg, #060f11 0%, #2fb87c 100%)" }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: 72, height: 72, background: "rgba(255,255,255,0.15)" }}>
                                    <i className="fas fa-store fa-2x"></i>
                                </div>
                                <h2 className="fw-bold mb-2">Become a Seller 🎉</h2>
                                <p className="mb-0 opacity-75">Join thousands of vendors and grow your business with us.</p>
                            </div>

                            {/* Benefits Grid */}
                            <div className="card-body p-4 p-md-5">
                                <div className="row g-4 mb-4">
                                    {benefits.map((b, i) => (
                                        <div className="col-md-6" key={i}>
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0" style={{ width: 44, height: 44, background: "rgba(47, 184, 124, 0.1)", color: "#2fb87c" }}>
                                                    <i className={`fas ${b.icon}`}></i>
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-1">{b.title}</h6>
                                                    <p className="text-secondary small mb-0">{b.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center mt-4 pt-3 border-top">
                                    <button 
                                        className="btn btn-lg px-5 fw-semibold text-white" 
                                        style={{ background: "#060f11", borderRadius: 10 }}
                                        onClick={() => setShowModal(true)}
                                    >
                                        Register as Seller
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Application Modal */}
            {showModal && (
                <div 
                    className="modal show d-block" 
                    tabIndex="-1" 
                    style={{ background: "rgba(6,15,17,0.65)" }} 
                    onClick={() => setShowModal(false)}
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content border-0 shadow" style={{ borderRadius: 16, overflow: "hidden" }}>
                            <form onSubmit={submit}>
                                
                                {/* Modal Header */}
                                <div 
                                    className="modal-header border-0 text-white p-4" 
                                    style={{ background: "linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC)" }}
                                >
                                    <h5 className="modal-title fw-bold d-flex align-items-center gap-2">
                                        🌟 Apply to Become a Seller
                                    </h5>
                                    <button 
                                        type="button" 
                                        className="btn-close btn-close-white" 
                                        onClick={() => setShowModal(false)}
                                    ></button>
                                </div>

                                {/* Modal Body */}
                                <div className="modal-body p-4">
                                    <p className="text-secondary mb-0" style={{ lineHeight: 1.7 }}>
                                        Join the <strong>Future Connect Shop</strong> and start selling products that empower our members. By clicking submit, your talent profile details will be used to initialize your seller account.
                                    </p>
                                </div>

                                {/* Modal Footer */}
                                <div className="modal-footer border-0 justify-content-between p-4 bg-light">
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-secondary px-4 py-2 rounded-3" 
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="btn text-white px-5 py-2 fw-semibold shadow-sm rounded-3" 
                                        style={{ background: "linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC)" }}
                                        disabled={form.processing}
                                    >
                                        {form.processing ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Confirmation"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}