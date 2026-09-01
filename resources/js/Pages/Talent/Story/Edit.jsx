// resources/js/Pages/Talent/Story/Edit.jsx
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

export default function Edit({ story, categories }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        _method: "put",
        title: story.title ?? "",
        content: story.content ?? "",
        category_id: story.category_id ?? "",
        tags: story.tags ?? "",
        status: story.status ?? "published",
        thumbnail: null,
        media: null,
    });

    const [thumbPreview, setThumbPreview] = useState(
        story.thumbnail ? `/storage/${story.thumbnail}` : null,
    );

    function handleThumbnail(e) {
        const file = e.target.files[0];
        setData("thumbnail", file);
        if (file) setThumbPreview(URL.createObjectURL(file));
    }

    function submit(e) {
        e.preventDefault();
        post(route("talent.page.stories.update", story.id), { forceFormData: true });
    }

    return (
        <AppLayout>
            <Head title={`Edit — ${story.title}`} />

            <div data-h-scope="talent-story-form">
                <style>{`
                    [data-h-scope="talent-story-form"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #F5f5f7;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-story-form"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                    }
                    [data-h-scope="talent-story-form"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background 0.15s ease;
                    }
                    [data-h-scope="talent-story-form"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-story-form"] .h-btn-accent:disabled {
                        opacity: 0.6;
                    }
                    [data-h-scope="talent-story-form"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid rgba(6,15,17,0.15);
                    }
                    [data-h-scope="talent-story-form"] .h-btn-ghost:hover {
                        background: rgba(6,15,17,0.04);
                    }
                    [data-h-scope="talent-story-form"] .form-control:focus,
                    [data-h-scope="talent-story-form"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72, 213, 151, 0.25);
                    }
                `}</style>

                <div className="container-fluid px-4 py-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h5 className="fw-bold mb-0">Edit Your Story</h5>
                        <Link
                            href={route("talent.page.stories.show", story.id)}
                            className="btn h-btn-ghost rounded-pill px-3 py-2"
                        >
                            <i className="fas fa-arrow-left me-2"></i>
                            Back to Story
                        </Link>
                    </div>

                    <div className="card h-card border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">
                            <form onSubmit={submit}>
                                <div className="row g-3">
                                    <div className="col-md-8">
                                        <label className="form-label small fw-semibold">Title</label>
                                        <input
                                            type="text"
                                            className={`form-control rounded-3 ${errors.title ? "is-invalid" : ""}`}
                                            value={data.title}
                                            onChange={(e) => setData("title", e.target.value)}
                                        />
                                        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                                    </div>

                                    <div className="col-md-4">
                                        <label className="form-label small fw-semibold">Category</label>
                                        <select
                                            className={`form-select rounded-3 ${errors.category_id ? "is-invalid" : ""}`}
                                            value={data.category_id}
                                            onChange={(e) => setData("category_id", e.target.value)}
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((c) => (
                                                <option key={c.id} value={c.id}>
                                                    {c.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category_id && (
                                            <div className="invalid-feedback">{errors.category_id}</div>
                                        )}
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label small fw-semibold">Your Story</label>
                                        <textarea
                                            className={`form-control rounded-3 ${errors.content ? "is-invalid" : ""}`}
                                            rows={8}
                                            value={data.content}
                                            onChange={(e) => setData("content", e.target.value)}
                                        />
                                        {errors.content && <div className="invalid-feedback">{errors.content}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label small fw-semibold">Tags</label>
                                        <input
                                            type="text"
                                            className={`form-control rounded-3 ${errors.tags ? "is-invalid" : ""}`}
                                            value={data.tags}
                                            onChange={(e) => setData("tags", e.target.value)}
                                            placeholder="e.g. music, design, mentorship"
                                        />
                                        {errors.tags && <div className="invalid-feedback">{errors.tags}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label small fw-semibold">Status</label>
                                        <select
                                            className="form-select rounded-3"
                                            value={data.status}
                                            onChange={(e) => setData("status", e.target.value)}
                                        >
                                            <option value="published">Published</option>
                                            <option value="draft">Draft</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label small fw-semibold">Thumbnail Image</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className={`form-control rounded-3 ${errors.thumbnail ? "is-invalid" : ""}`}
                                            onChange={handleThumbnail}
                                        />
                                        {errors.thumbnail && (
                                            <div className="invalid-feedback">{errors.thumbnail}</div>
                                        )}
                                        {thumbPreview && (
                                            <img
                                                src={thumbPreview}
                                                alt="Thumbnail preview"
                                                className="rounded-3 mt-2"
                                                style={{ width: 100, height: 100, objectFit: "cover" }}
                                            />
                                        )}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label small fw-semibold">
                                            Replace Media (video/audio/document)
                                        </label>
                                        <input
                                            type="file"
                                            className={`form-control rounded-3 ${errors.media ? "is-invalid" : ""}`}
                                            onChange={(e) => setData("media", e.target.files[0])}
                                        />
                                        {errors.media && <div className="invalid-feedback">{errors.media}</div>}
                                        {story.media && (
                                            <div className="small text-secondary mt-1">
                                                Current file: {story.media.split("/").pop()}
                                            </div>
                                        )}
                                    </div>

                                    {progress && (
                                        <div className="col-12">
                                            <div className="progress" style={{ height: 6 }}>
                                                <div
                                                    className="progress-bar"
                                                    style={{
                                                        width: `${progress.percentage}%`,
                                                        backgroundColor: "#48d597",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="d-flex justify-content-end gap-2 mt-4">
                                    <Link
                                        href={route("talent.page.stories.show", story.id)}
                                        className="btn h-btn-ghost rounded-pill px-4"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        className="btn h-btn-accent rounded-pill px-4"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" />
                                                Saving...
                                            </>
                                        ) : (
                                            "Save Changes"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
