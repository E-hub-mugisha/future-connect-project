// resources/js/Pages/Talent/Courses/Create.jsx
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

export default function CourseForm({ course, categories }) {
    const isEdit = !!course?.id;
    const [thumbPreview, setThumbPreview] = useState(
        course?.thumbnail ? `/${course.thumbnail}` : null,
    );

    const { data, setData, post, processing, errors } = useForm({
        _method: isEdit ? "put" : "post",
        title: course?.title ?? "",
        category_id: course?.category_id ?? "",
        level: course?.level ?? "",
        description: course?.description ?? "",
        thumbnail: null,
        video: course?.video ?? "",
        price: course?.price ?? "",
        is_free: course?.is_free ?? false,
        status: course?.status ?? "draft",
    });

    function handleThumbnailChange(e) {
        const file = e.target.files[0];
        setData("thumbnail", file);
        if (file) setThumbPreview(URL.createObjectURL(file));
    }

    function submit(e) {
        e.preventDefault();
        const url = isEdit
            ? route("talent.courses.update", course.id)
            : route("talent.courses.store");

        post(url, {
            forceFormData: true,
            preserveScroll: true,
        });
    }

    return (
        <AppLayout>
            <Head title={isEdit ? "Edit Course" : "Add New Course"} />

            <div data-h-scope="talent-course-form">
                <style>{`
                    [data-h-scope="talent-course-form"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        background-color: var(--h-bg);
                    }
                    [data-h-scope="talent-course-form"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6,15,17,0.06);
                    }
                    [data-h-scope="talent-course-form"] .h-header-card {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-course-form"] .h-btn-accent {
                        background: var(--h-accent);
                        color: var(--h-ink);
                        border: none;
                        font-weight: 600;
                        transition: background .15s ease;
                    }
                    [data-h-scope="talent-course-form"] .h-btn-accent:hover {
                        background: var(--h-accent-dark);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-course-form"] .h-btn-accent:disabled {
                        opacity: 0.6;
                    }
                    [data-h-scope="talent-course-form"] .h-btn-ghost {
                        background: transparent;
                        color: var(--h-white);
                        border: 1px solid rgba(255,255,255,0.25);
                    }
                    [data-h-scope="talent-course-form"] .h-btn-ghost:hover {
                        background: rgba(255,255,255,0.1);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-course-form"] .form-control:focus,
                    [data-h-scope="talent-course-form"] .form-select:focus {
                        border-color: var(--h-accent);
                        box-shadow: 0 0 0 0.2rem rgba(72,213,151,0.25);
                    }
                    [data-h-scope="talent-course-form"] .h-section-label {
                        color: var(--h-ink);
                        opacity: 0.55;
                        letter-spacing: 0.04em;
                    }
                    [data-h-scope="talent-course-form"] .h-switch .form-check-input:checked {
                        background-color: var(--h-accent);
                        border-color: var(--h-accent);
                    }
                    [data-h-scope="talent-course-form"] .h-thumb-preview {
                        border: 2px solid var(--h-accent);
                    }
                    [data-h-scope="talent-course-form"] .h-status-pill {
                        border: 2px solid transparent;
                        cursor: pointer;
                        transition: all .15s ease;
                    }
                    [data-h-scope="talent-course-form"] .h-status-pill.active-draft {
                        border-color: #f5b301;
                        background: #fff8e6;
                    }
                    [data-h-scope="talent-course-form"] .h-status-pill.active-published {
                        border-color: var(--h-accent);
                        background: rgba(72,213,151,0.1);
                    }
                    [data-h-scope="talent-course-form"] .h-alert-danger {
                        background: #fdecea;
                        border: 1px solid #f5c2c0;
                        color: #7a1f1a;
                    }
                `}</style>

                <div className="container-fluid px-4 py-4">
                    {/* Header */}
                    <div className="card h-header-card border-0 shadow-sm rounded-4 mb-4">
                        <div className="card-body p-4 d-flex flex-wrap justify-content-between align-items-center gap-3">
                            <div>
                                <h4 className="fw-bold mb-1">
                                    {isEdit ? "Edit Course" : "Add New Course"}
                                </h4>
                                <p className="mb-0" style={{ opacity: 0.7 }}>
                                    {isEdit
                                        ? "Update your course details below"
                                        : "Fill in the details below to create and publish a course"}
                                </p>
                            </div>
                            <Link
                                href={route("talent.courses.index")}
                                className="btn h-btn-ghost rounded-pill px-4 py-2"
                            >
                                <i className="fas fa-arrow-left me-2"></i>
                                Back
                            </Link>
                        </div>
                    </div>

                    {Object.keys(errors).length > 0 && (
                        <div className="alert h-alert-danger rounded-3 mb-4">
                            <strong>Please fix the following errors:</strong>
                            <ul className="mb-0 mt-2">
                                {Object.entries(errors).map(
                                    ([key, message]) => (
                                        <li key={key}>{message}</li>
                                    ),
                                )}
                            </ul>
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div className="row g-4">
                            {/* Left column: main details */}
                            <div className="col-lg-8">
                                <div className="card h-card border-0 shadow-sm rounded-4 mb-4">
                                    <div className="card-body p-4">
                                        <label className="text-uppercase h-section-label small fw-semibold mb-3 d-block">
                                            Course Details
                                        </label>

                                        <div className="row g-3">
                                            <div className="col-md-12">
                                                <label className="form-label small fw-semibold">
                                                    Course Title
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control rounded-3 ${errors.title ? "is-invalid" : ""}`}
                                                    placeholder="Enter course title"
                                                    value={data.title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "title",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {errors.title && (
                                                    <div className="invalid-feedback">
                                                        {errors.title}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">
                                                    Category
                                                </label>
                                                <select
                                                    className={`form-select rounded-3 ${errors.category_id ? "is-invalid" : ""}`}
                                                    value={data.category_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "category_id",
                                                            e.target.value,
                                                        )
                                                    }
                                                >
                                                    <option value="" disabled>
                                                        -- Select Category --
                                                    </option>
                                                    {categories.map((cat) => (
                                                        <option
                                                            key={cat.id}
                                                            value={cat.id}
                                                        >
                                                            {cat.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.category_id && (
                                                    <div className="invalid-feedback">
                                                        {errors.category_id}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">
                                                    Level
                                                </label>
                                                <select
                                                    className={`form-select rounded-3 ${errors.level ? "is-invalid" : ""}`}
                                                    value={data.level}
                                                    onChange={(e) =>
                                                        setData(
                                                            "level",
                                                            e.target.value,
                                                        )
                                                    }
                                                >
                                                    <option value="" disabled>
                                                        -- Select Level --
                                                    </option>
                                                    <option value="Beginner">
                                                        Beginner
                                                    </option>
                                                    <option value="Intermediate">
                                                        Intermediate
                                                    </option>
                                                    <option value="Advanced">
                                                        Advanced
                                                    </option>
                                                </select>
                                                {errors.level && (
                                                    <div className="invalid-feedback">
                                                        {errors.level}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="col-md-12">
                                                <label className="form-label small fw-semibold">
                                                    Description
                                                </label>
                                                <textarea
                                                    rows={5}
                                                    className={`form-control rounded-3 ${errors.description ? "is-invalid" : ""}`}
                                                    placeholder="Write a short description..."
                                                    value={data.description}
                                                    onChange={(e) =>
                                                        setData(
                                                            "description",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {errors.description && (
                                                    <div className="invalid-feedback">
                                                        {errors.description}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="col-md-12">
                                                <label className="form-label small fw-semibold">
                                                    Intro Video URL
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control rounded-3 ${errors.video ? "is-invalid" : ""}`}
                                                    placeholder="https://..."
                                                    value={data.video}
                                                    onChange={(e) =>
                                                        setData(
                                                            "video",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {errors.video && (
                                                    <div className="invalid-feedback">
                                                        {errors.video}
                                                    </div>
                                                )}

                                                {data.video && (
                                                    <div className="mt-3">
                                                        <video
                                                            width="260"
                                                            controls
                                                            className="rounded-3"
                                                        >
                                                            <source
                                                                src={data.video}
                                                                type="video/mp4"
                                                            />
                                                        </video>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right column: thumbnail, pricing, status */}
                            <div className="col-lg-4">
                                <div className="card h-card border-0 shadow-sm rounded-4 mb-4">
                                    <div className="card-body p-4">
                                        <label className="text-uppercase h-section-label small fw-semibold mb-3 d-block">
                                            Thumbnail
                                        </label>

                                        {thumbPreview ? (
                                            <img
                                                src={thumbPreview}
                                                alt="Thumbnail preview"
                                                className="w-100 rounded-3 h-thumb-preview mb-3"
                                                style={{
                                                    height: 150,
                                                    objectFit: "cover",
                                                }}
                                            />
                                        ) : (
                                            <div
                                                className="w-100 rounded-3 mb-3 d-flex align-items-center justify-content-center"
                                                style={{
                                                    height: 150,
                                                    background:
                                                        "rgba(72,213,151,0.08)",
                                                }}
                                            >
                                                <i
                                                    className="fas fa-image fs-2"
                                                    style={{
                                                        color: "#48d597",
                                                        opacity: 0.5,
                                                    }}
                                                ></i>
                                            </div>
                                        )}

                                        <input
                                            type="file"
                                            accept="image/*"
                                            className={`form-control rounded-3 ${errors.thumbnail ? "is-invalid" : ""}`}
                                            onChange={handleThumbnailChange}
                                        />
                                        {errors.thumbnail && (
                                            <div className="invalid-feedback">
                                                {errors.thumbnail}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="card h-card border-0 shadow-sm rounded-4 mb-4">
                                    <div className="card-body p-4">
                                        <label className="text-uppercase h-section-label small fw-semibold mb-3 d-block">
                                            Pricing
                                        </label>

                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <span className="fw-semibold small">
                                                This course is free
                                            </span>
                                            <div className="form-check form-switch h-switch m-0">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={data.is_free}
                                                    onChange={(e) =>
                                                        setData(
                                                            "is_free",
                                                            e.target.checked,
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>

                                        {!data.is_free && (
                                            <div>
                                                <label className="form-label small fw-semibold">
                                                    Price (USD)
                                                </label>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    className={`form-control rounded-3 ${errors.price ? "is-invalid" : ""}`}
                                                    placeholder="0.00"
                                                    value={data.price}
                                                    onChange={(e) =>
                                                        setData(
                                                            "price",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                {errors.price && (
                                                    <div className="invalid-feedback">
                                                        {errors.price}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="card h-card border-0 shadow-sm rounded-4">
                                    <div className="card-body p-4">
                                        <label className="text-uppercase h-section-label small fw-semibold mb-3 d-block">
                                            Status
                                        </label>

                                        <div className="d-flex flex-column gap-2">
                                            <StatusPill
                                                label="Draft"
                                                icon="fa-file-pen"
                                                active={data.status === "draft"}
                                                variant="draft"
                                                onClick={() =>
                                                    setData("status", "draft")
                                                }
                                            />
                                            <StatusPill
                                                label="Published"
                                                icon="fa-circle-check"
                                                active={
                                                    data.status === "published"
                                                }
                                                variant="published"
                                                onClick={() =>
                                                    setData(
                                                        "status",
                                                        "published",
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn h-btn-accent rounded-pill w-100 py-3 mt-4 fw-bold"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" />
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-save me-2"></i>
                                            {isEdit
                                                ? "Update Course"
                                                : "Save Course"}
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}

function StatusPill({ label, icon, active, variant, onClick }) {
    return (
        <div
            className={`h-status-pill rounded-3 px-3 py-2 d-flex align-items-center gap-2 ${
                active ? `active-${variant}` : ""
            }`}
            style={{ background: active ? undefined : "rgba(6,15,17,0.03)" }}
            onClick={onClick}
        >
            <i
                className={`fas ${icon}`}
                style={{
                    color: variant === "published" ? "#2fb87c" : "#f5b301",
                }}
            ></i>
            <span className="fw-semibold small">{label}</span>
        </div>
    );
}
