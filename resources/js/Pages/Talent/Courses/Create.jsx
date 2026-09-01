// resources/js/Pages/Talent/Courses/Create.jsx
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

// ─── SVG Icon Components ─────────────────────────────────────
function ArrowLeftIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
    );
}

function ImageIcon({ className = "w-6 h-6" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    );
}

function FileEditIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
    );
}

function CheckCircleIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function SaveIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 019.186 0z" />
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

function AlertIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
    );
}

function VideoIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
    );
}

// ─── Main Component ──────────────────────────────────────────
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

            <div data-scope="course-form" className="min-vh-100">
                <style>{`
                    [data-scope="course-form"] {
                        --cf-primary: #0f766e;
                        --cf-primary-light: #14b8a6;
                        --cf-primary-soft: rgba(20, 184, 166, 0.08);
                        --cf-surface: #f8fafc;
                        --cf-card: #F5f5f7;
                        --cf-text: #0f172a;
                        --cf-text-secondary: #64748b;
                        --cf-border: #e2e8f0;
                        --cf-border-focus: #14b8a6;
                        --cf-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
                        --cf-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                        --cf-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                        --cf-radius: 1rem;
                        --cf-radius-sm: 0.75rem;
                        background-color: var(--cf-surface);
                    }

                    [data-scope="course-form"] .cf-card {
                        background: var(--cf-card);
                        border: 1px solid var(--cf-border);
                        border-radius: var(--cf-radius);
                        box-shadow: var(--cf-shadow);
                        transition: box-shadow 0.2s ease;
                    }
                    [data-scope="course-form"] .cf-card:hover {
                        box-shadow: var(--cf-shadow-md);
                    }

                    [data-scope="course-form"] .cf-header {
                        background: linear-gradient(135deg, #f0fdfa 0%, #f8fafc 100%);
                        border: 1px solid var(--cf-border);
                        border-radius: var(--cf-radius);
                        position: relative;
                        overflow: hidden;
                    }
                    [data-scope="course-form"] .cf-header::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: linear-gradient(90deg, var(--cf-primary-light), var(--cf-primary));
                    }

                    [data-scope="course-form"] .cf-btn-primary {
                        background: linear-gradient(135deg, var(--cf-primary) 0%, var(--cf-primary-light) 100%);
                        color: white;
                        border: none;
                        font-weight: 600;
                        border-radius: 9999px;
                        transition: all 0.2s ease;
                        box-shadow: 0 4px 6px -1px rgba(15, 118, 110, 0.2);
                    }
                    [data-scope="course-form"] .cf-btn-primary:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 8px 12px -2px rgba(15, 118, 110, 0.25);
                        filter: brightness(1.05);
                    }
                    [data-scope="course-form"] .cf-btn-primary:active {
                        transform: translateY(0);
                    }
                    [data-scope="course-form"] .cf-btn-primary:disabled {
                        opacity: 0.7;
                        cursor: not-allowed;
                        transform: none;
                    }

                    [data-scope="course-form"] .cf-btn-ghost {
                        background: transparent;
                        color: var(--cf-text-secondary);
                        border: 1px solid var(--cf-border);
                        border-radius: 9999px;
                        font-weight: 500;
                        transition: all 0.2s ease;
                    }
                    [data-scope="course-form"] .cf-btn-ghost:hover {
                        background: var(--cf-surface);
                        color: var(--cf-text);
                        border-color: var(--cf-text-secondary);
                    }

                    [data-scope="course-form"] .form-control,
                    [data-scope="course-form"] .form-select {
                        border: 1.5px solid var(--cf-border);
                        border-radius: var(--cf-radius-sm);
                        padding: 0.625rem 0.875rem;
                        font-size: 0.9375rem;
                        background-color: var(--cf-card);
                        transition: all 0.2s ease;
                    }
                    [data-scope="course-form"] .form-control::placeholder,
                    [data-scope="course-form"] .form-select::placeholder {
                        color: #94a3b8;
                    }
                    [data-scope="course-form"] .form-control:focus,
                    [data-scope="course-form"] .form-select:focus {
                        border-color: var(--cf-border-focus);
                        box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
                        background-color: var(--cf-card);
                    }
                    [data-scope="course-form"] .form-control.is-invalid,
                    [data-scope="course-form"] .form-select.is-invalid {
                        border-color: #ef4444;
                    }
                    [data-scope="course-form"] .form-control.is-invalid:focus,
                    [data-scope="course-form"] .form-select.is-invalid:focus {
                        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
                    }

                    [data-scope="course-form"] .cf-section-label {
                        color: var(--cf-primary);
                        font-size: 0.75rem;
                        font-weight: 700;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                    }

                    [data-scope="course-form"] .cf-form-label {
                        color: var(--cf-text);
                        font-size: 0.875rem;
                        font-weight: 600;
                        margin-bottom: 0.5rem;
                    }

                    [data-scope="course-form"] .form-check-input:checked {
                        background-color: var(--cf-primary-light);
                        border-color: var(--cf-primary-light);
                    }
                    [data-scope="course-form"] .form-check-input:focus {
                        box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
                    }

                    [data-scope="course-form"] .cf-thumb-preview {
                        border: 2px solid var(--cf-primary-light);
                        border-radius: var(--cf-radius-sm);
                    }

                    [data-scope="course-form"] .cf-alert {
                        background: #fef2f2;
                        border: 1px solid #fecaca;
                        color: #991b1b;
                        border-radius: var(--cf-radius-sm);
                    }

                    [data-scope="course-form"] .cf-status-card {
                        border: 2px solid transparent;
                        border-radius: var(--cf-radius-sm);
                        cursor: pointer;
                        transition: all 0.2s ease;
                        background: var(--cf-surface);
                    }
                    [data-scope="course-form"] .cf-status-card:hover {
                        background: #f1f5f9;
                    }
                    [data-scope="course-form"] .cf-status-card.active {
                        background: var(--cf-primary-soft);
                        border-color: var(--cf-primary-light);
                    }
                    [data-scope="course-form"] .cf-status-card.active-draft {
                        background: #fffbeb;
                        border-color: #f59e0b;
                    }
                    [data-scope="course-form"] .cf-status-card.active-published {
                        background: #f0fdfa;
                        border-color: var(--cf-primary-light);
                    }

                    [data-scope="course-form"] .cf-upload-zone {
                        border: 2px dashed #cbd5e1;
                        border-radius: var(--cf-radius-sm);
                        transition: all 0.2s ease;
                    }
                    [data-scope="course-form"] .cf-upload-zone:hover {
                        border-color: var(--cf-primary-light);
                        background: var(--cf-primary-soft);
                    }

                    [data-scope="course-form"] .cf-video-preview {
                        border-radius: var(--cf-radius-sm);
                        box-shadow: var(--cf-shadow);
                    }

                    [data-scope="course-form"] .cf-badge {
                        display: inline-flex;
                        align-items: center;
                        padding: 0.25rem 0.75rem;
                        border-radius: 9999px;
                        font-size: 0.75rem;
                        font-weight: 600;
                    }
                    [data-scope="course-form"] .cf-badge-free {
                        background: #dcfce7;
                        color: #166534;
                    }
                    [data-scope="course-form"] .cf-badge-paid {
                        background: #dbeafe;
                        color: #1e40af;
                    }
                `}</style>

                <div className="container-fluid px-4 py-4" style={{ maxWidth: 1400 }}>
                    {/* Header */}
                    <div className="cf-header p-4 mb-4 d-flex flex-wrap justify-content-between align-items-center gap-3">
                        <div>
                            <div className="d-flex align-items-center gap-2 mb-1">
                                <span className={`cf-badge ${data.is_free ? 'cf-badge-free' : 'cf-badge-paid'}`}>
                                    {data.is_free ? 'Free Course' : 'Paid Course'}
                                </span>
                                {isEdit && (
                                    <span className="cf-badge" style={{ background: '#f1f5f9', color: '#475569' }}>
                                        Editing
                                    </span>
                                )}
                            </div>
                            <h3 className="fw-bold mb-1" style={{ color: 'var(--cf-text)' }}>
                                {isEdit ? "Edit Course" : "Create New Course"}
                            </h3>
                            <p className="mb-0" style={{ color: 'var(--cf-text-secondary)', fontSize: '0.9375rem' }}>
                                {isEdit
                                    ? "Update your course details and content"
                                    : "Design and publish your next learning experience"}
                            </p>
                        </div>
                        <Link
                            href={route("talent.courses.index")}
                            className="btn cf-btn-ghost px-4 py-2 d-inline-flex align-items-center gap-2"
                        >
                            <ArrowLeftIcon />
                            Back to Courses
                        </Link>
                    </div>

                    {Object.keys(errors).length > 0 && (
                        <div className="cf-alert p-3 mb-4 d-flex align-items-start gap-3">
                            <AlertIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <div>
                                <strong className="d-block mb-1">Please fix the following errors:</strong>
                                <ul className="mb-0 ps-3">
                                    {Object.entries(errors).map(([key, message]) => (
                                        <li key={key}>{message}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div className="row g-4">
                            {/* Left column: main details */}
                            <div className="col-xl-8 col-lg-7">
                                <div className="cf-card p-4 mb-4">
                                    <label className="cf-section-label mb-4 d-block">
                                        Course Details
                                    </label>

                                    <div className="row g-4">
                                        <div className="col-12">
                                            <label className="cf-form-label">
                                                Course Title
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                                                placeholder="e.g., Advanced React Patterns and Performance"
                                                value={data.title}
                                                onChange={(e) => setData("title", e.target.value)}
                                            />
                                            {errors.title && (
                                                <div className="invalid-feedback">{errors.title}</div>
                                            )}
                                        </div>

                                        <div className="col-md-6">
                                            <label className="cf-form-label">
                                                Category
                                            </label>
                                            <select
                                                className={`form-select ${errors.category_id ? "is-invalid" : ""}`}
                                                value={data.category_id}
                                                onChange={(e) => setData("category_id", e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Select a category
                                                </option>
                                                {categories.map((cat) => (
                                                    <option key={cat.id} value={cat.id}>
                                                        {cat.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.category_id && (
                                                <div className="invalid-feedback">{errors.category_id}</div>
                                            )}
                                        </div>

                                        <div className="col-md-6">
                                            <label className="cf-form-label">
                                                Difficulty Level
                                            </label>
                                            <select
                                                className={`form-select ${errors.level ? "is-invalid" : ""}`}
                                                value={data.level}
                                                onChange={(e) => setData("level", e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Select level
                                                </option>
                                                <option value="Beginner">Beginner</option>
                                                <option value="Intermediate">Intermediate</option>
                                                <option value="Advanced">Advanced</option>
                                            </select>
                                            {errors.level && (
                                                <div className="invalid-feedback">{errors.level}</div>
                                            )}
                                        </div>

                                        <div className="col-12">
                                            <label className="cf-form-label">
                                                Description
                                            </label>
                                            <textarea
                                                rows={5}
                                                className={`form-control ${errors.description ? "is-invalid" : ""}`}
                                                placeholder="Describe what students will learn, prerequisites, and course outcomes..."
                                                value={data.description}
                                                onChange={(e) => setData("description", e.target.value)}
                                                style={{ resize: 'vertical' }}
                                            />
                                            {errors.description && (
                                                <div className="invalid-feedback">{errors.description}</div>
                                            )}
                                            <div className="form-text mt-1" style={{ color: 'var(--cf-text-secondary)', fontSize: '0.8125rem' }}>
                                Minimum 50 characters recommended for better discoverability.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label className="cf-form-label d-flex align-items-center gap-2">
                                                <VideoIcon className="w-4 h-4" style={{ color: 'var(--cf-primary-light)' }} />
                                                Intro Video URL
                                            </label>
                                            <input
                                                type="url"
                                                className={`form-control ${errors.video ? "is-invalid" : ""}`}
                                                placeholder="https://youtube.com/watch?v=... or direct MP4 link"
                                                value={data.video}
                                                onChange={(e) => setData("video", e.target.value)}
                                            />
                                            {errors.video && (
                                                <div className="invalid-feedback">{errors.video}</div>
                                            )}

                                            {data.video && (
                                                <div className="mt-3">
                                                    <video
                                                        width="320"
                                                        controls
                                                        className="cf-video-preview"
                                                        style={{ maxWidth: '100%' }}
                                                    >
                                                        <source src={data.video} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right column: thumbnail, pricing, status */}
                            <div className="col-xl-4 col-lg-5">
                                {/* Thumbnail */}
                                <div className="cf-card p-4 mb-4">
                                    <label className="cf-section-label mb-4 d-block">
                                        Course Thumbnail
                                    </label>

                                    {thumbPreview ? (
                                        <div className="position-relative mb-3">
                                            <img
                                                src={thumbPreview}
                                                alt="Thumbnail preview"
                                                className="w-100 cf-thumb-preview"
                                                style={{ height: 180, objectFit: "cover" }}
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-sm position-absolute top-0 end-0 m-2"
                                                style={{ background: 'rgba(0,0,0,0.5)', color: 'white', borderRadius: '50%', width: 32, height: 32, padding: 0 }}
                                                onClick={() => {
                                                    setThumbPreview(null);
                                                    setData("thumbnail", null);
                                                }}
                                                title="Remove image"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ) : (
                                        <div
                                            className="cf-upload-zone w-100 mb-3 d-flex flex-column align-items-center justify-content-center"
                                            style={{ height: 180 }}
                                        >
                                            <ImageIcon className="w-10 h-10 mb-2" style={{ color: 'var(--cf-primary-light)', opacity: 0.6 }} />
                                            <span className="small fw-medium" style={{ color: 'var(--cf-text-secondary)' }}>
                                                No image selected
                                            </span>
                                        </div>
                                    )}

                                    <input
                                        type="file"
                                        accept="image/*"
                                        className={`form-control ${errors.thumbnail ? "is-invalid" : ""}`}
                                        onChange={handleThumbnailChange}
                                        style={{ fontSize: '0.875rem' }}
                                    />
                                    {errors.thumbnail && (
                                        <div className="invalid-feedback">{errors.thumbnail}</div>
                                    )}
                                    <div className="form-text mt-1" style={{ color: 'var(--cf-text-secondary)', fontSize: '0.8125rem' }}>
                                        Recommended: 1280×720px, JPG or PNG
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="cf-card p-4 mb-4">
                                    <label className="cf-section-label mb-4 d-block">
                                        Pricing
                                    </label>

                                    <div className="d-flex align-items-center justify-content-between mb-4 p-3 rounded-3" style={{ background: 'var(--cf-surface)' }}>
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="fw-semibold" style={{ fontSize: '0.9375rem' }}>
                                                Free Course
                                            </span>
                                        </div>
                                        <div className="form-check form-switch m-0">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                style={{ width: '2.5rem', height: '1.25rem' }}
                                                checked={data.is_free}
                                                onChange={(e) => setData("is_free", e.target.checked)}
                                            />
                                        </div>
                                    </div>

                                    {!data.is_free && (
                                        <div className="animate-fade-in">
                                            <label className="cf-form-label">
                                                Price (USD)
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white border-end-0" style={{ borderColor: 'var(--cf-border)', color: 'var(--cf-text-secondary)' }}>
                                                    $
                                                </span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    className={`form-control border-start-0 ${errors.price ? "is-invalid" : ""}`}
                                                    placeholder="29.99"
                                                    value={data.price}
                                                    onChange={(e) => setData("price", e.target.value)}
                                                />
                                            </div>
                                            {errors.price && (
                                                <div className="invalid-feedback d-block">{errors.price}</div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Status */}
                                <div className="cf-card p-4 mb-4">
                                    <label className="cf-section-label mb-4 d-block">
                                        Publish Status
                                    </label>

                                    <div className="d-flex flex-column gap-3">
                                        <StatusCard
                                            label="Draft"
                                            description="Save and continue editing later"
                                            icon={<FileEditIcon className="w-5 h-5" />}
                                            active={data.status === "draft"}
                                            variant="draft"
                                            onClick={() => setData("status", "draft")}
                                        />
                                        <StatusCard
                                            label="Published"
                                            description="Make visible to all students"
                                            icon={<CheckCircleIcon className="w-5 h-5" />}
                                            active={data.status === "published"}
                                            variant="published"
                                            onClick={() => setData("status", "published")}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn cf-btn-primary w-100 py-3 d-inline-flex align-items-center justify-content-center gap-2 fw-bold"
                                    disabled={processing}
                                    style={{ fontSize: '1rem' }}
                                >
                                    {processing ? (
                                        <>
                                            <SpinnerIcon />
                                            Saving Changes...
                                        </>
                                    ) : (
                                        <>
                                            <SaveIcon />
                                            {isEdit ? "Update Course" : "Publish Course"}
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

function StatusCard({ label, description, icon, active, variant, onClick }) {
    return (
        <div
            className={`cf-status-card p-3 d-flex align-items-center gap-3 ${active ? `active active-${variant}` : ""}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
        >
            <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: active
                        ? variant === 'published'
                            ? 'rgba(20, 184, 166, 0.15)'
                            : 'rgba(245, 158, 11, 0.15)'
                        : '#f1f5f9',
                    color: variant === 'published' ? 'var(--cf-primary)' : '#d97706',
                    transition: 'all 0.2s ease'
                }}
            >
                {icon}
            </div>
            <div className="flex-grow-1">
                <div className="fw-semibold" style={{ fontSize: '0.9375rem', color: 'var(--cf-text)' }}>
                    {label}
                </div>
                <div className="small" style={{ color: 'var(--cf-text-secondary)', fontSize: '0.8125rem' }}>
                    {description}
                </div>
            </div>
            {active && (
                <CheckCircleIcon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--cf-primary-light)' }} />
            )}
        </div>
    );
}