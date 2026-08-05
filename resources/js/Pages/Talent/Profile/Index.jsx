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
                    [data-h-scope="talent-profile"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-profile"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                    }
                    [data-h-scope="talent-profile"] .h-header-card {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-profile"] .h-header-card .text-secondary {
                        color: rgba(255,255,255,0.65) !important;
                    }
                    [data-h-scope="talent-profile"] .h-avatar {
                        border: 3px solid var(--h-accent) !important;
                    }
                    [data-h-scope="talent-profile"] .h-badge-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        font-weight: 600;
                    }
                    [data-h-scope="talent-profile"] .h-badge-outline {
                        background: rgba(255,255,255,0.08);
                        color: var(--h-white);
                        border: 1px solid rgba(255,255,255,0.2);
                    }
                    [data-h-scope="talent-profile"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background 0.15s ease;
                    }
                    [data-h-scope="talent-profile"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] .h-btn-accent:disabled {
                        opacity: 0.6;
                    }
                    [data-h-scope="talent-profile"] .h-icon-tile {
                        background: rgba(72, 213, 151, 0.12);
                    }
                    [data-h-scope="talent-profile"] .h-icon-tile i {
                        color: var(--h-accent-dark);
                    }
                    [data-h-scope="talent-profile"] .h-label {
                        color: var(--h-ink);
                        opacity: 0.55;
                        letter-spacing: 0.04em;
                    }
                    [data-h-scope="talent-profile"] .h-section-title {
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] .h-chip-count {
                        background: rgba(6,15,17,0.05);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] .h-star-value {
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] .h-course-badge {
                        background: rgba(72, 213, 151, 0.12);
                        color: var(--h-accent-dark);
                        border: 1px solid rgba(72, 213, 151, 0.3);
                    }
                    [data-h-scope="talent-profile"] .h-alert-success {
                        background: rgba(72, 213, 151, 0.15);
                        border: 1px solid rgba(72, 213, 151, 0.4);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-profile"] .form-control:focus,
                    [data-h-scope="talent-profile"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72, 213, 151, 0.25);
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-ink);
                        border: 1px solid rgba(6,15,17,0.15);
                    }
                    [data-h-scope="talent-profile"] .h-btn-ghost:hover {
                        background: rgba(6,15,17,0.04);
                    }
                `}</style>

                <div className="container-fluid px-4 py-4">
                    {flash?.success && (
                        <div className="alert h-alert-success rounded-3 border-0">
                            <i className="fas fa-circle-check me-2"></i>
                            {flash.success}
                        </div>
                    )}

                    {/* Header */}
                    <div className="card h-card h-header-card border-0 shadow-sm rounded-4 mb-4">
                        <div className="card-body p-4">
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
                                        <h5 className="fw-bold mb-1">
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
                                        className="btn h-btn-ghost rounded-pill px-4 py-2"
                                        style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}
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
                                    style={{ maxWidth: 720, opacity: 0.85 }}
                                >
                                    {talent.description}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="row g-4">
                        {/* Left: contact only */}
                        <div className="col-lg-4">
                            <div className="card h-card border-0 shadow-sm rounded-4">
                                <div className="card-body p-4">
                                    <label className="text-uppercase h-label small fw-semibold mb-3 d-block">
                                        Contact Information
                                    </label>
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
                        </div>

                        {/* Right: recent reviews + courses */}
                        <div className="col-lg-8">
                            {/* Recent Reviews */}
                            <div className="card h-card border-0 shadow-sm rounded-4 mb-4">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h6 className="fw-bold mb-0 h-section-title">
                                            Recent Reviews
                                        </h6>
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
                            </div>

                            {/* Recent Courses */}
                            <div className="card h-card border-0 shadow-sm rounded-4">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h6 className="fw-bold mb-0 h-section-title">
                                            Recent Courses
                                        </h6>
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
                    <div className="modal-content rounded-4 border-0 shadow">
                        <div className="modal-header border-0 pb-0">
                            <h5
                                className="modal-title fw-bold"
                                style={{ color: "#060f11" }}
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
                <div className="small h-label">{label}</div>
                <div className="fw-semibold">{value || "—"}</div>
            </div>
        </div>
    );
}

function ReviewCard({ review }) {
    return (
        <div className="border rounded-4 p-3">
            <div className="d-flex justify-content-between align-items-start mb-2">
                <strong>{review.reviewer_name ?? "Anonymous"}</strong>
                <StarRating rating={review.rating} />
            </div>
            <p className="text-secondary mb-2">{review.comment}</p>
            <small className="text-secondary">{review.created_at_human}</small>
        </div>
    );
}

function StarRating({ rating }) {
    return (
        <span className="small">
            <span style={{ color: "#48d597" }}>{"★".repeat(rating)}</span>
            <span className="text-secondary">{"★".repeat(5 - rating)}</span>
            <span className="h-star-value ms-1 fw-semibold">{rating}/5</span>
        </span>
    );
}

function CourseCard({ course }) {
    return (
        <div className="border rounded-4 p-3 h-100">
            <h6 className="fw-bold mb-2">{course.title}</h6>
            <p className="text-secondary small mb-3">{course.description}</p>
            <span className="badge h-course-badge">
                {course.category?.name}
            </span>
        </div>
    );
}

function EmptyState({ icon, text }) {
    return (
        <div className="text-center py-4 text-secondary">
            <i className={`fas ${icon} fs-2 mb-2 d-block opacity-25`}></i>
            <p className="mb-0 small">{text}</p>
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
                                background: "rgba(72,213,151,0.12)",
                            }}
                        >
                            <i
                                className="fas fa-user fs-4"
                                style={{ color: "#2fb87c" }}
                            ></i>
                        </div>
                    )}
                    <div className="flex-grow-1">
                        <label className="form-label small fw-semibold">
                            Profile Image
                        </label>
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
                                style={{ height: 6 }}
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
                    <label className="form-label small fw-semibold">
                        Description
                    </label>
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
                    <label className="form-label small fw-semibold">
                        Category
                    </label>
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
            <label className="form-label small fw-semibold">{label}</label>
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
