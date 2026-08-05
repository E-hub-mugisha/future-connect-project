// resources/js/Pages/Talent/Story/Show.jsx
import { Head, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Show({ story, isOwner }) {
    return (
        <AppLayout>
            <Head title={story.title} />

            <div data-h-scope="talent-story">
                <style>{`
                    [data-h-scope="talent-story"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-story"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
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
                    [data-h-scope="talent-story"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid rgba(6,15,17,0.15);
                    }
                    [data-h-scope="talent-story"] .h-btn-ghost:hover {
                        background: rgba(6,15,17,0.04);
                    }
                    [data-h-scope="talent-story"] .h-badge-accent {
                        background: rgba(72, 213, 151, 0.12);
                        color: var(--h-accent-dark);
                        border: 1px solid rgba(72, 213, 151, 0.3);
                    }
                    [data-h-scope="talent-story"] .h-badge-draft {
                        background: rgba(6,15,17,0.06);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-story"] .h-content {
                        white-space: pre-line;
                        line-height: 1.8;
                        color: rgba(6,15,17,0.85);
                    }
                    [data-h-scope="talent-story"] .h-tag {
                        background: rgba(6,15,17,0.05);
                        color: var(--h-ink);
                    }
                `}</style>

                <div className="container-fluid px-4 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <Link
                            href={route("talent.get.profile", story.talent_id)}
                            className="btn h-btn-ghost rounded-pill px-3 py-2"
                        >
                            <i className="fas fa-arrow-left me-2"></i>
                            Back to Profile
                        </Link>

                        {isOwner && (
                            <Link
                                href={route("talent.page.stories.edit", story.id)}
                                className="btn h-btn-accent rounded-pill px-4 py-2"
                            >
                                <i className="fas fa-pen me-2"></i>
                                Edit Story
                            </Link>
                        )}
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-9">
                            <div className="card h-card border-0 shadow-sm rounded-4 overflow-hidden">
                                {story.thumbnail && (
                                    <img
                                        src={`/storage/${story.thumbnail}`}
                                        alt={story.title}
                                        className="w-100"
                                        style={{ maxHeight: 360, objectFit: "cover" }}
                                    />
                                )}
                                <div className="card-body p-4 p-md-5">
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {story.category?.name && (
                                            <span className="badge h-badge-accent px-3 py-2 rounded-pill">
                                                {story.category.name}
                                            </span>
                                        )}
                                        {story.status === "draft" && (
                                            <span className="badge h-badge-draft px-3 py-2 rounded-pill">
                                                Draft
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="fw-bold mb-3">{story.title}</h3>

                                    <div className="h-content mb-4">{story.content}</div>

                                    {story.media && (
                                        <a
                                            href={`/storage/${story.media}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn h-btn-ghost rounded-pill px-4 py-2 mb-4"
                                        >
                                            <i className="fas fa-paperclip me-2"></i>
                                            View Attached Media
                                        </a>
                                    )}

                                    {story.tags && (
                                        <div className="d-flex flex-wrap gap-2">
                                            {story.tags.split(",").map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="badge h-tag px-3 py-2 rounded-pill"
                                                >
                                                    #{tag.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
