// resources/js/Pages/Talent/Profile/Index.jsx
import { Head, useForm, Link } from "@inertiajs/react";
import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

export default function Profile({ talent, categories, flash }) {
    const [editOpen, setEditOpen] = useState(false);

    // Show only the most recent items — no "view all" modals anymore
    const recentReviews = talent.feedback?.slice(0, 3) ?? [];
    const recentCourses = talent.courses?.slice(0, 3) ?? [];

    return (
        <AppLayout>
            <Head title={`${talent.name} — Profile`} />

            <div data-h-scope="talent-profile">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

                    [data-h-scope="talent-profile"] {
                        --h-accent: #48d597;
                        --h-accent-ink: #0f3d2b;   /* readable text on accent */
                        --h-ink: #000000;
                        --h-white: #F5f5f7;
                        --h-bg: #f6f8f7;
                        --h-line: rgba(0, 0, 0, 0.1);
                        --h-line-soft: rgba(0, 0, 0, 0.06);
                        --h-muted: rgba(0, 0, 0, 0.56);
                        background-color: var(--h-bg);
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] h1,
                    [data-h-scope="talent-profile"] h2,
                    [data-h-scope="talent-profile"] h3,
                    [data-h-scope="talent-profile"] h4,
                    [data-h-scope="talent-profile"] h5,
                    [data-h-scope="talent-profile"] h6,
                    [data-h-scope="talent-profile"] .h-display {
                        font-family: 'Space Grotesk', 'Inter', sans-serif;
                        letter-spacing: -0.01em;
                    }

                    /* ---- flat panels, no shared shadow-kit look ---- */
                    [data-h-scope="talent-profile"] .h-panel {
                        background: var(--h-white);
                        border: 1px solid var(--h-line-soft);
                        border-radius: 14px;
                    }

                    /* ---- header: solid black band, editorial layout ---- */
                    [data-h-scope="talent-profile"] .h-header {
                        background: var(--h-ink);
                        color: var(--h-white);
                        border-radius: 16px;
                        position: relative;
                        overflow: hidden;
                    }
                    [data-h-scope="talent-profile"] .h-header::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        width: 4px;
                        background: var(--h-accent);
                    }
                    [data-h-scope="talent-profile"] .h-header .text-secondary {
                        color: rgba(255, 255, 255, 0.6) !important;
                    }
                    [data-h-scope="talent-profile"] .h-avatar {
                        border: 2px solid var(--h-accent) !important;
                    }
                    [data-h-scope="talent-profile"] .h-badge-accent {
                        background: var(--h-accent);
                        color: var(--h-accent-ink);
                        font-weight: 600;
                        font-size: 0.78rem;
                    }
                    [data-h-scope="talent-profile"] .h-badge-outline {
                        background: transparent;
                        color: var(--h-white);
                        border: 1px solid rgba(255, 255, 255, 0.3);
                        font-size: 0.78rem;
                        font-weight: 500;
                    }

                    /* ---- buttons ---- */
                    [data-h-scope="talent-profile"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-accent-ink);
                        border: 1px solid var(--h-accent);
                        font-weight: 600;
                        transition: background 0.15s ease, border-color 0.15s ease;
                    }
                    [data-h-scope="talent-profile"] .h-btn-accent:hover {
                        background: #34c084;
                        border-color: #34c084;
                        color: var(--h-accent-ink);
                    }
                    [data-h-scope="talent-profile"] .h-btn-accent:disabled {
                        opacity: 0.55;
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost-dark {
                        background: transparent;
                        color: var(--h-white);
                        border: 1px solid rgba(255, 255, 255, 0.35);
                        font-weight: 500;
                        transition: border-color 0.15s ease, background 0.15s ease;
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost-dark:hover {
                        background: rgba(255, 255, 255, 0.08);
                        border-color: rgba(255, 255, 255, 0.6);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid var(--h-line);
                        font-weight: 500;
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost:hover {
                        background: var(--h-bg);
                    }

                    /* ---- section labels: rule instead of uppercase tracking ---- */
                    [data-h-scope="talent-profile"] .h-section-title {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-profile"] .h-section-title::before {
                        content: "";
                        width: 4px;
                        height: 18px;
                        background: var(--h-accent);
                        border-radius: 2px;
                        display: inline-block;
                    }
                    [data-h-scope="talent-profile"] .h-label {
                        color: var(--h-muted);
                        font-weight: 500;
                        font-size: 0.8rem;
                    }
                    [data-h-scope="talent-profile"] .h-chip-count {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                        color: var(--h-muted);
                        font-weight: 500;
                    }

                    [data-h-scope="talent-profile"] .h-icon-tile {
                        background: var(--h-bg);
                        border: 1px solid var(--h-line-soft);
                    }
                    [data-h-scope="talent-profile"] .h-icon-tile i {
                        color: var(--h-ink);
                    }

                    [data-h-scope="talent-profile"] .h-review-card,
                    [data-h-scope="talent-profile"] .h-course-card {
                        border: 1px solid var(--h-line-soft);
                        border-radius: 12px;
                        transition: border-color 0.15s ease;
                    }
                    [data-h-scope="talent-profile"] .h-review-card:hover,
                    [data-h-scope="talent-profile"] .h-course-card:hover {
                        border-color: var(--h-line);
                    }
                    [data-h-scope="talent-profile"] .h-star-filled {
                        color: var(--h-accent-ink);
                    }
                    [data-h-scope="talent-profile"] .h-star-empty {
                        color: var(--h-line);
                    }
                    [data-h-scope="talent-profile"] .h-star-value {
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-profile"] .h-course-badge {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid var(--h-ink);
                        font-weight: 500;
                    }

                    [data-h-scope="talent-profile"] .h-alert-success {
                        background: var(--h-white);
                        border: 1px solid var(--h-accent);
                        border-left: 4px solid var(--h-accent);
                        color: var(--h-ink);
                        border-radius: 10px;
                    }

                    [data-h-scope="talent-profile"] .form-control,
                    [data-h-scope="talent-profile"] .form-select {
                        border: 1px solid var(--h-line);
                    }
                    [data-h-scope="talent-profile"] .form-control:focus,
                    [data-h-scope="talent-profile"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 3px rgba(72, 213, 151, 0.2);
                    }
                    [data-h-scope="talent-profile"] .form-label {
                        color: var(--h-ink);
                        font-weight: 500;
                        font-size: 0.85rem;
                    }
                `}</style>

                <div className="container-fluid px-4 py-4" style={{ maxWidth: 1180, margin: "0 auto" }}>
                    {flash?.success && (
                        <div className="alert h-alert-success px-3 py-3 mb-4 d-flex align-items-center">
                            <i className="fas fa-circle-check me-2" style={{ color: "#0f3d2b" }}></i>
                            {flash.success}
                        </div>
                    )}

                    {/* Header */}
                    <div className="h-header mb-4">
                        <div className="p-4 ps-4">
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                                <div className="d-flex align-items-center gap-3">
                                    <img
                                        src={
                                            talent.image
                                                ? `/${talent.image}`
                                                : "/img/faces/face10.jpg"
                                        }
                                        alt={talent.name}
                                        className="rounded-circle h-avatar"
                                        style={{
                                            width: 72,
                                            height: 72,
                                            objectFit: "cover",
                                        }}
                                    />
                                    <div>
                                        <h5 className="fw-bold mb-2">
                                            {talent.name}
                                        </h5>
                                        <div className="d-flex flex-wrap gap-2">
                                            <span className="badge h-badge-accent px-3 py-2 rounded-pill">
                                                {talent.category?.name ??
                                                    "No Category"}
                                            </span>
                                            {talent.level && (
                                                <span className="badge h-badge-outline px-3 py-2 rounded-pill">
                                                    {capitalize(talent.level)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex gap-2">
                                    <Link
                                        href={route("talent.page.stories.index")}
                                        className="btn h-btn-ghost-dark rounded-pill px-4 py-2"
                                    >
                                        <i className="fas fa-book-open me-2"></i>
                                        My Story
                                    </Link>
                                    <button
                                        type="button"
                                        className="btn h-btn-accent rounded-pill px-4 py-2"
                                        onClick={() => setEditOpen(true)}
                                    >
                                        <i className="fas fa-pen me-2"></i>
                                        Edit Profile
                                    </button>
                                </div>
                            </div>

                            {talent.description && (
                                <p
                                    className="mt-3 mb-0"
                                    style={{ maxWidth: 640, opacity: 0.8 }}
                                >
                                    {talent.description}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Left: contact only */}
                        <div className="col-lg-4">
                            <div className="h-panel p-4">
                                <div className="h-section-title mb-3">
                                    Contact Information
                                </div>
                                <div className="d-flex flex-column gap-3">
                                    <ContactRow
                                        icon="fa-mobile-screen-button"
                                        label="Mobile"
                                        value={talent.phone}
                                    />
                                    <ContactRow
                                        icon="fa-envelope"
                                        label="Email"
                                        value={talent.email}
                                    />
                                    <ContactRow
                                        icon="fa-location-dot"
                                        label="Address"
                                        value={talent.address}
                                    />
                                    {talent.language && (
                                        <ContactRow
                                            icon="fa-language"
                                            label="Language"
                                            value={talent.language}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right: recent reviews + courses */}
                        <div className="col-lg-8">
                            {/* Recent Reviews */}
                            <div className="h-panel p-4 mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="h-section-title">
                                        Recent Reviews
                                    </div>
                                    {talent.feedback?.length > 0 && (
                                        <span className="small h-chip-count px-2 py-1 rounded-pill">
                                            {talent.feedback.length} total
                                        </span>
                                    )}
                                </div>

                                {recentReviews.length === 0 ? (
                                    <EmptyState
                                        icon="fa-comment-slash"
                                        text="No reviews yet."
                                    />
                                ) : (
                                    <div className="d-flex flex-column gap-3">
                                        {recentReviews.map((review) => (
                                            <ReviewCard
                                                key={review.id}
                                                review={review}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Recent Courses */}
                            <div className="h-panel p-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="h-section-title">
                                        Recent Courses
                                    </div>
                                    {talent.courses?.length > 0 && (
                                        <span className="small h-chip-count px-2 py-1 rounded-pill">
                                            {talent.courses.length} total
                                        </span>
                                    )}
                                </div>

                                {recentCourses.length === 0 ? (
                                    <EmptyState
                                        icon="fa-book"
                                        text="No courses available."
                                    />
                                ) : (
                                    <div className="row g-3">
                                        {recentCourses.map((course) => (
                                            <div
                                                className="col-md-6"
                                                key={course.id}
                                            >
                                                <CourseCard
                                                    course={course}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit Profile modal */}
                <Modal
                    show={editOpen}
                    onClose={() => setEditOpen(false)}
                    title="Edit Profile"
                    size="lg"
                >
                    <EditProfileForm
                        talent={talent}
                        categories={categories}
                        onSaved={() => setEditOpen(false)}
                    />
                </Modal>
            </div>
        </AppLayout>
    );
}

/* ---------- inline modal (no external import) ---------- */

function Modal({ show, onClose, title, size, children }) {
    if (!show) return null;

    const sizeClass =
        size === "lg" ? "modal-lg" : size === "sm" ? "modal-sm" : "";

    return (
        <div data-h-scope="talent-profile">
            <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
                onClick={onClose}
            >
                <div
                    className={`modal-dialog modal-dialog-centered ${sizeClass}`}
                    role="document"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        className="modal-content border-0"
                        style={{ borderRadius: 16, overflow: "hidden" }}
                    >
                        <div
                            className="modal-header pb-3"
                            style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
                        >
                            <h5
                                className="modal-title fw-bold mb-0"
                                style={{ color: "#000000" }}
                            >
                                {title}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={onClose}
                            />
                        </div>
                        <div className="modal-body p-4">{children}</div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" onClick={onClose}></div>
        </div>
    );
}

/* ---------- small presentational pieces ---------- */

function ContactRow({ icon, label, value }) {
    return (
        <div className="d-flex align-items-center gap-3">
            <div
                className="d-flex align-items-center justify-content-center rounded-3 h-icon-tile"
                style={{ width: 38, height: 38, flexShrink: 0 }}
            >
                <i className={`fas ${icon}`}></i>
            </div>
            <div>
                <div className="h-label">{label}</div>
                <div className="fw-semibold">{value || "—"}</div>
            </div>
        </div>
    );
}

function ReviewCard({ review }) {
    return (
        <div className="h-review-card p-3">
            <div className="d-flex justify-content-between align-items-start mb-2">
                <strong>{review.reviewer_name ?? "Anonymous"}</strong>
                <StarRating rating={review.rating} />
            </div>
            <p className="mb-2" style={{ color: "rgba(0,0,0,0.65)" }}>
                {review.comment}
            </p>
            <small style={{ color: "rgba(0,0,0,0.45)" }}>
                {review.created_at_human}
            </small>
        </div>
    );
}

function StarRating({ rating }) {
    return (
        <span className="small d-flex align-items-center gap-1">
            <span className="h-star-filled">{"★".repeat(rating)}</span>
            <span className="h-star-empty">{"★".repeat(5 - rating)}</span>
            <span className="h-star-value ms-1">{rating}/5</span>
        </span>
    );
}

function CourseCard({ course }) {
    return (
        <div className="h-course-card p-3 h-100">
            <h6 className="fw-bold mb-2">{course.title}</h6>
            <p className="small mb-3" style={{ color: "rgba(0,0,0,0.6)" }}>
                {course.description}
            </p>
            <span className="badge h-course-badge px-2 py-1 rounded-pill">
                {course.category?.name}
            </span>
        </div>
    );
}

function EmptyState({ icon, text }) {
    return (
        <div className="text-center py-4">
            <i
                className={`fas ${icon} fs-2 mb-2 d-block`}
                style={{ color: "rgba(0,0,0,0.15)" }}
            ></i>
            <p className="mb-0 small" style={{ color: "rgba(0,0,0,0.45)" }}>
                {text}
            </p>
        </div>
    );
}

/* ---------- edit form (inside the modal) ---------- */

function EditProfileForm({ talent, categories, onSaved }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        _method: "put",
        name: talent.name ?? "",
        level: talent.level ?? "",
        description: talent.description ?? "",
        address: talent.address ?? "",
        phone: talent.phone ?? "",
        email: talent.email ?? "",
        language: talent.language ?? "",
        category_id: talent.category_id ?? "",
        image: null,
    });

    const [preview, setPreview] = useState(
        talent.image ? `/${talent.image}` : null,
    );

    function handleImageChange(e) {
        const file = e.target.files[0];
        setData("image", file);
        if (file) setPreview(URL.createObjectURL(file));
    }

    function submit(e) {
        e.preventDefault();
        post(route("talent.profile.update", talent.id), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => onSaved(),
        });
    }

    return (
        <form onSubmit={submit}>
            <div className="row g-3">
                <div className="col-md-12 d-flex align-items-center gap-3">
                    {preview ? (
                        <img
                            src={preview}
                            alt="Profile preview"
                            className="rounded-3"
                            style={{
                                width: 84,
                                height: 84,
                                objectFit: "cover",
                                border: "2px solid #48d597",
                            }}
                        />
                    ) : (
                        <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                                width: 84,
                                height: 84,
                                background: "#f6f8f7",
                                border: "1px solid rgba(0,0,0,0.1)",
                            }}
                        >
                            <i
                                className="fas fa-user fs-4"
                                style={{ color: "#000000", opacity: 0.4 }}
                            ></i>
                        </div>
                    )}
                    <div className="flex-grow-1">
                        <label className="form-label">Profile Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            className={`form-control rounded-3 ${errors.image ? "is-invalid" : ""}`}
                            onChange={handleImageChange}
                        />
                        {errors.image && (
                            <div className="text-danger small mt-1">
                                {errors.image}
                            </div>
                        )}
                        {progress && (
                            <div
                                className="progress mt-2"
                                style={{ height: 6, background: "#f0f0f0" }}
                            >
                                <div
                                    className="progress-bar"
                                    style={{
                                        width: `${progress.percentage}%`,
                                        backgroundColor: "#48d597",
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <Field
                    label="Name"
                    value={data.name}
                    onChange={(v) => setData("name", v)}
                    error={errors.name}
                    col="col-md-6"
                />
                <Field
                    label="Level"
                    value={data.level}
                    onChange={(v) => setData("level", v)}
                    error={errors.level}
                    col="col-md-6"
                />

                <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                        className={`form-control rounded-3 ${errors.description ? "is-invalid" : ""}`}
                        rows={3}
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                    {errors.description && (
                        <div className="invalid-feedback">
                            {errors.description}
                        </div>
                    )}
                </div>

                <Field
                    label="Address"
                    value={data.address}
                    onChange={(v) => setData("address", v)}
                    error={errors.address}
                    col="col-md-6"
                />
                <Field
                    label="Phone"
                    value={data.phone}
                    onChange={(v) => setData("phone", v)}
                    error={errors.phone}
                    col="col-md-6"
                />
                <Field
                    label="Email"
                    value={data.email}
                    onChange={(v) => setData("email", v)}
                    error={errors.email}
                    col="col-md-6"
                    type="email"
                />
                <Field
                    label="Language"
                    value={data.language}
                    onChange={(v) => setData("language", v)}
                    error={errors.language}
                    col="col-md-6"
                />

                <div className="col-md-6">
                    <label className="form-label">Category</label>
                    <select
                        className={`form-select rounded-3 ${errors.category_id ? "is-invalid" : ""}`}
                        value={data.category_id}
                        onChange={(e) => setData("category_id", e.target.value)}
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.category_id && (
                        <div className="invalid-feedback">
                            {errors.category_id}
                        </div>
                    )}
                </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
                <button
                    type="button"
                    className="btn h-btn-ghost rounded-pill px-4"
                    onClick={onSaved}
                >
                    Cancel
                </button>
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
    );
}

function Field({ label, value, onChange, error, col, type = "text" }) {
    return (
        <div className={col}>
            <label className="form-label">{label}</label>
            <input
                type={type}
                className={`form-control rounded-3 ${error ? "is-invalid" : ""}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

function capitalize(value) {
    if (!value) return "";
    return value.charAt(0).toUpperCase() + value.slice(1);
}