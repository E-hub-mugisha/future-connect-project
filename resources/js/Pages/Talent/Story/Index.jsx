// resources/js/Pages/Talent/Story/Index.jsx
import { Head, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Index({ talent, message }) {
    return (
        <AppLayout>
            <Head title="My Story" />

            <div data-h-scope="talent-story">
                <style>{`
                    [data-h-scope="talent-story"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #F5f5f7;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                        min-height: 60vh;
                    }
                    [data-h-scope="talent-story"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                    }
                    [data-h-scope="talent-story"] .h-icon-circle {
                        width: 88px;
                        height: 88px;
                        background: rgba(72, 213, 151, 0.12);
                    }
                    [data-h-scope="talent-story"] .h-icon-circle i {
                        color: var(--h-accent-dark);
                    }
                    [data-h-scope="talent-story"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background 0.15s ease;
                    }
                    [data-h-scope="talent-story"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                `}</style>

                <div className="container-fluid px-4 py-4 d-flex align-items-center justify-content-center">
                    <div className="card h-card border-0 shadow-sm rounded-4 text-center p-5" style={{ maxWidth: 480 }}>
                        <div className="card-body">
                            <div className="h-icon-circle rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4">
                                <i className="fas fa-book-open fs-2"></i>
                            </div>
                            <h5 className="fw-bold mb-2">No Story Yet</h5>
                            <p className="text-secondary mb-4">
                                {message ?? "You haven't shared your story yet."} Tell your
                                audience who you are, what you do, and what drives you.
                            </p>
                            <Link
                                href={route("talent.page.stories.create")}
                                className="btn h-btn-accent rounded-pill px-4 py-2"
                            >
                                <i className="fas fa-plus me-2"></i>
                                Add Your Story
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
