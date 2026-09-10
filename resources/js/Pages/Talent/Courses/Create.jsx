// resources/js/Pages/Talent/Courses/Create.jsx

import { Head, Link, useForm } from "@inertiajs/react";
import { useMemo, useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

// ─────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────

function Icon({ name, className = "w-5 h-5", strokeWidth = 1.8 }) {
    const paths = {
        arrowLeft: (
            <>
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
            </>
        ),
        image: (
            <>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
            </>
        ),
        upload: (
            <>
                <path d="M12 16V4" />
                <path d="M7 9l5-5 5 5" />
                <path d="M5 20h14" />
            </>
        ),
        video: (
            <>
                <rect x="3" y="5" width="15" height="14" rx="2" />
                <path d="M18 10l3-2v8l-3-2" />
            </>
        ),
        check: (
            <>
                <path d="M5 12l4 4L19 6" />
            </>
        ),
        checkCircle: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l2.5 2.5L16 9" />
            </>
        ),
        alert: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5" />
                <path d="M12 16h.01" />
            </>
        ),
        save: (
            <>
                <path d="M5 4h12l2 2v14H5z" />
                <path d="M8 4v5h8V4" />
                <path d="M9 20v-6h6v6" />
            </>
        ),
        book: (
            <>
                <path d="M4 5.5A2.5 2.5 0 016.5 3H20v16H6.5A2.5 2.5 0 014 16.5z" />
                <path d="M4 16.5A2.5 2.5 0 016.5 14H20" />
            </>
        ),
        dollar: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M15 8.5c-.7-.6-1.6-1-3-1-1.7 0-3 1-3 2.3 0 3.2 6 1.6 6 4.6 0 1.3-1.3 2.3-3 2.3-1.4 0-2.5-.4-3.2-1.1" />
                <path d="M12 6v12" />
            </>
        ),
        layers: (
            <>
                <path d="M12 3l9 5-9 5-9-5 9-5z" />
                <path d="M3 12l9 5 9-5" />
                <path d="M3 16l9 5 9-5" />
            </>
        ),
        sparkle: (
            <>
                <path d="M12 3l1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3z" />
                <path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15z" />
            </>
        ),
        eye: (
            <>
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
                <circle cx="12" cy="12" r="2.5" />
            </>
        ),
        x: (
            <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
            </>
        ),
        plus: (
            <>
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </>
        ),
        edit: (
            <>
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4z" />
            </>
        ),
        clock: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </>
        ),
        users: (
            <>
                <circle cx="9" cy="8" r="3" />
                <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                <path d="M16 5.5a3 3 0 010 5.5" />
                <path d="M18 14c1.7.8 3 2.5 3 4.5" />
            </>
        ),
        shield: (
            <>
                <path d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6z" />
                <path d="M9 12l2 2 4-4" />
            </>
        ),
    };

    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {paths[name]}
        </svg>
    );
}

function Spinner({ className = "w-5 h-5" }) {
    return (
        <svg
            className={`${className} animate-spin`}
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="3"
                opacity=".25"
            />
            <path
                d="M21 12a9 9 0 00-9-9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

export default function CourseForm({ course, categories = [] }) {
    const isEdit = !!course?.id;

    const [thumbPreview, setThumbPreview] = useState(
        course?.thumbnail
            ? course.thumbnail.startsWith("/")
                ? course.thumbnail
                : `/${course.thumbnail}`
            : null
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

    // ─────────────────────────────────────────────────────────
    // FORM READINESS
    // ─────────────────────────────────────────────────────────

    const readiness = useMemo(() => {
        const checks = [
            {
                label: "Course title",
                complete: data.title.trim().length >= 5,
            },
            {
                label: "Category selected",
                complete: !!data.category_id,
            },
            {
                label: "Difficulty level",
                complete: !!data.level,
            },
            {
                label: "Course description",
                complete: data.description.trim().length >= 50,
            },
            {
                label: "Course thumbnail",
                complete: !!thumbPreview || !!data.thumbnail,
            },
            {
                label: "Pricing configured",
                complete:
                    data.is_free ||
                    (data.price !== "" &&
                        Number(data.price) >= 0),
            },
        ];

        const completed = checks.filter((item) => item.complete).length;

        return {
            checks,
            completed,
            total: checks.length,
            percentage: Math.round((completed / checks.length) * 100),
        };
    }, [data, thumbPreview]);

    // ─────────────────────────────────────────────────────────
    // THUMBNAIL
    // ─────────────────────────────────────────────────────────

    function handleThumbnailChange(e) {
        const file = e.target.files?.[0];

        if (!file) return;

        setData("thumbnail", file);
        setThumbPreview(URL.createObjectURL(file));
    }

    function removeThumbnail() {
        setThumbPreview(null);
        setData("thumbnail", null);
    }

    // ─────────────────────────────────────────────────────────
    // SUBMIT
    // ─────────────────────────────────────────────────────────

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

    const selectedCategory = categories.find(
        (category) => String(category.id) === String(data.category_id)
    );

    return (
        <AppLayout>
            <Head title={isEdit ? "Edit Course" : "Create Course"} />

            <div data-scope="modern-course-form">
                <style>{`

                    /* =====================================================
                       DESIGN TOKENS
                    ===================================================== */

                    [data-scope="modern-course-form"] {
                        --green: #00a667;
                        --green-dark: #008f59;
                        --green-light: #e9f9f2;
                        --green-soft: #f2fbf7;

                        --black: #111111;
                        --text: #1a1a1a;
                        --muted: #6b7280;

                        --white: #ffffff;
                        --surface: #f7f8f9;
                        --border: #e5e7eb;

                        --danger: #dc2626;
                        --danger-bg: #fef2f2;

                        --warning: #d97706;
                        --warning-bg: #fff7ed;

                        --radius: 18px;
                        --radius-sm: 12px;

                        --shadow:
                            0 1px 2px rgba(0,0,0,.03),
                            0 4px 12px rgba(0,0,0,.04);

                        --shadow-lg:
                            0 12px 30px rgba(0,0,0,.07);

                        background:
                            linear-gradient(
                                180deg,
                                #fbfcfc 0%,
                                #f6f8f7 100%
                            );

                        min-height: 100vh;
                        color: var(--text);
                    }

                    /* =====================================================
                       LAYOUT
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-container {
                        width: 100%;
                        max-width: 1450px;
                        margin: 0 auto;
                        padding: 28px;
                    }

                    @media(max-width: 768px) {
                        [data-scope="modern-course-form"] .mcf-container {
                            padding: 18px 14px;
                        }
                    }

                    /* =====================================================
                       HEADER
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-header {
                        background: var(--white);
                        border: 1px solid var(--border);
                        border-radius: var(--radius);
                        padding: 22px 24px;
                        position: relative;
                        overflow: hidden;
                        box-shadow: var(--shadow);
                    }

                    [data-scope="modern-course-form"] .mcf-header::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: var(--green);
                    }

                    [data-scope="modern-course-form"] .mcf-eyebrow {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        font-size: 11px;
                        font-weight: 800;
                        letter-spacing: .1em;
                        text-transform: uppercase;
                        color: var(--green-dark);
                        margin-bottom: 8px;
                    }

                    [data-scope="modern-course-form"] .mcf-title {
                        font-size: clamp(1.5rem, 3vw, 2rem);
                        line-height: 1.15;
                        font-weight: 800;
                        letter-spacing: -.035em;
                        color: var(--black);
                        margin: 0;
                    }

                    [data-scope="modern-course-form"] .mcf-subtitle {
                        margin: 8px 0 0;
                        color: var(--muted);
                        font-size: .92rem;
                    }

                    /* =====================================================
                       BUTTONS
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        min-height: 44px;
                        padding: 10px 17px;
                        border-radius: 11px;
                        font-size: .875rem;
                        font-weight: 700;
                        text-decoration: none;
                        border: 1px solid transparent;
                        transition: .2s ease;
                    }

                    [data-scope="modern-course-form"] .mcf-btn-primary {
                        background: var(--green);
                        color: white;
                        box-shadow: 0 5px 14px rgba(0,166,103,.2);
                    }

                    [data-scope="modern-course-form"] .mcf-btn-primary:hover {
                        background: var(--green-dark);
                        color: white;
                        transform: translateY(-1px);
                    }

                    [data-scope="modern-course-form"] .mcf-btn-primary:disabled {
                        opacity: .65;
                        cursor: not-allowed;
                        transform: none;
                    }

                    [data-scope="modern-course-form"] .mcf-btn-outline {
                        background: white;
                        border-color: var(--border);
                        color: var(--text);
                    }

                    [data-scope="modern-course-form"] .mcf-btn-outline:hover {
                        border-color: var(--green);
                        color: var(--green-dark);
                        background: var(--green-soft);
                    }

                    /* =====================================================
                       CARDS
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-card {
                        background: var(--white);
                        border: 1px solid var(--border);
                        border-radius: var(--radius);
                        box-shadow: var(--shadow);
                    }

                    [data-scope="modern-course-form"] .mcf-card-header {
                        padding: 20px 22px 16px;
                        border-bottom: 1px solid var(--border);
                    }

                    [data-scope="modern-course-form"] .mcf-card-body {
                        padding: 22px;
                    }

                    [data-scope="modern-course-form"] .mcf-section-title {
                        font-size: .98rem;
                        font-weight: 800;
                        color: var(--black);
                        margin: 0;
                    }

                    [data-scope="modern-course-form"] .mcf-section-description {
                        color: var(--muted);
                        font-size: .8rem;
                        margin: 4px 0 0;
                    }

                    /* =====================================================
                       FORM
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-label {
                        display: block;
                        font-size: .82rem;
                        font-weight: 750;
                        color: var(--text);
                        margin-bottom: 7px;
                    }

                    [data-scope="modern-course-form"] .mcf-control {
                        width: 100%;
                        border: 1px solid #dfe3e6;
                        background: white;
                        border-radius: 11px;
                        padding: 11px 13px;
                        font-size: .9rem;
                        color: var(--text);
                        outline: none;
                        transition: .2s ease;
                    }

                    [data-scope="modern-course-form"] .mcf-control:hover {
                        border-color: #cbd1d5;
                    }

                    [data-scope="modern-course-form"] .mcf-control:focus {
                        border-color: var(--green);
                        box-shadow: 0 0 0 3px rgba(0,166,103,.1);
                    }

                    [data-scope="modern-course-form"] textarea.mcf-control {
                        min-height: 150px;
                        resize: vertical;
                        line-height: 1.6;
                    }

                    [data-scope="modern-course-form"] .mcf-invalid {
                        border-color: var(--danger) !important;
                    }

                    [data-scope="modern-course-form"] .mcf-error {
                        color: var(--danger);
                        font-size: .75rem;
                        margin-top: 5px;
                    }

                    [data-scope="modern-course-form"] .mcf-help {
                        color: var(--muted);
                        font-size: .73rem;
                        margin-top: 6px;
                    }

                    /* =====================================================
                       SECTION NUMBER
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-number {
                        width: 34px;
                        height: 34px;
                        border-radius: 10px;
                        background: var(--green-light);
                        color: var(--green-dark);
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        font-size: .8rem;
                        font-weight: 800;
                        flex-shrink: 0;
                    }

                    /* =====================================================
                       THUMBNAIL
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-upload {
                        position: relative;
                        min-height: 205px;
                        border: 1.5px dashed #cfd6d3;
                        border-radius: 14px;
                        background: #fafcfb;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        cursor: pointer;
                        transition: .2s ease;
                    }

                    [data-scope="modern-course-form"] .mcf-upload:hover {
                        border-color: var(--green);
                        background: var(--green-soft);
                    }

                    [data-scope="modern-course-form"] .mcf-upload img {
                        width: 100%;
                        height: 205px;
                        object-fit: cover;
                    }

                    [data-scope="modern-course-form"] .mcf-upload-content {
                        text-align: center;
                        padding: 25px;
                    }

                    [data-scope="modern-course-form"] .mcf-upload-icon {
                        width: 48px;
                        height: 48px;
                        margin: 0 auto 10px;
                        border-radius: 13px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: var(--green-light);
                        color: var(--green);
                    }

                    [data-scope="modern-course-form"] .mcf-remove {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        width: 34px;
                        height: 34px;
                        border: 0;
                        border-radius: 50%;
                        background: rgba(0,0,0,.72);
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        z-index: 2;
                    }

                    /* =====================================================
                       PRICE
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-price-box {
                        border: 1px solid var(--border);
                        border-radius: 13px;
                        padding: 15px;
                        background: #fafafa;
                    }

                    [data-scope="modern-course-form"] .mcf-switch {
                        position: relative;
                        width: 46px;
                        height: 26px;
                        flex-shrink: 0;
                    }

                    [data-scope="modern-course-form"] .mcf-switch input {
                        opacity: 0;
                        width: 0;
                        height: 0;
                    }

                    [data-scope="modern-course-form"] .mcf-slider {
                        position: absolute;
                        inset: 0;
                        background: #d1d5db;
                        border-radius: 30px;
                        cursor: pointer;
                        transition: .2s;
                    }

                    [data-scope="modern-course-form"] .mcf-slider::before {
                        content: "";
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        left: 3px;
                        top: 3px;
                        background: white;
                        border-radius: 50%;
                        transition: .2s;
                        box-shadow: 0 1px 3px rgba(0,0,0,.2);
                    }

                    [data-scope="modern-course-form"] .mcf-switch input:checked + .mcf-slider {
                        background: var(--green);
                    }

                    [data-scope="modern-course-form"] .mcf-switch input:checked + .mcf-slider::before {
                        transform: translateX(20px);
                    }

                    /* =====================================================
                       STATUS
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-status {
                        border: 1px solid var(--border);
                        border-radius: 13px;
                        padding: 14px;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        cursor: pointer;
                        transition: .2s ease;
                    }

                    [data-scope="modern-course-form"] .mcf-status:hover {
                        border-color: #c8d0cc;
                    }

                    [data-scope="modern-course-form"] .mcf-status.active {
                        border-color: var(--green);
                        background: var(--green-soft);
                        box-shadow: 0 0 0 2px rgba(0,166,103,.05);
                    }

                    [data-scope="modern-course-form"] .mcf-status-icon {
                        width: 40px;
                        height: 40px;
                        border-radius: 11px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #f1f3f3;
                        color: #6b7280;
                    }

                    [data-scope="modern-course-form"] .mcf-status.active .mcf-status-icon {
                        background: var(--green-light);
                        color: var(--green-dark);
                    }

                    /* =====================================================
                       CHECKLIST
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-check {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 9px 0;
                        border-bottom: 1px solid #f0f1f1;
                    }

                    [data-scope="modern-course-form"] .mcf-check:last-child {
                        border-bottom: 0;
                    }

                    [data-scope="modern-course-form"] .mcf-check-icon {
                        width: 22px;
                        height: 22px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #eef0f0;
                        color: #9ca3af;
                    }

                    [data-scope="modern-course-form"] .mcf-check.complete .mcf-check-icon {
                        background: var(--green-light);
                        color: var(--green-dark);
                    }

                    /* =====================================================
                       PROGRESS
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-progress {
                        height: 7px;
                        background: #edf0ef;
                        border-radius: 20px;
                        overflow: hidden;
                    }

                    [data-scope="modern-course-form"] .mcf-progress-bar {
                        height: 100%;
                        background: var(--green);
                        border-radius: inherit;
                        transition: width .3s ease;
                    }

                    /* =====================================================
                       PREVIEW
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-preview {
                        overflow: hidden;
                        border-radius: 14px;
                        border: 1px solid var(--border);
                        background: white;
                    }

                    [data-scope="modern-course-form"] .mcf-preview-image {
                        height: 155px;
                        background:
                            linear-gradient(
                                135deg,
                                #e9f9f2,
                                #f7faf9
                            );
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                    }

                    [data-scope="modern-course-form"] .mcf-preview-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    [data-scope="modern-course-form"] .mcf-preview-body {
                        padding: 16px;
                    }

                    [data-scope="modern-course-form"] .mcf-preview-badge {
                        display: inline-flex;
                        padding: 5px 9px;
                        border-radius: 7px;
                        background: var(--green-light);
                        color: var(--green-dark);
                        font-size: .68rem;
                        font-weight: 800;
                    }

                    /* =====================================================
                       ALERT
                    ===================================================== */

                    [data-scope="modern-course-form"] .mcf-alert {
                        border: 1px solid #fecaca;
                        background: var(--danger-bg);
                        color: #991b1b;
                        border-radius: 13px;
                        padding: 15px;
                    }

                    /* =====================================================
                       RESPONSIVE
                    ===================================================== */

                    @media(max-width: 991px) {
                        [data-scope="modern-course-form"] .mcf-sticky {
                            position: static !important;
                        }
                    }

                    @media(max-width: 575px) {
                        [data-scope="modern-course-form"] .mcf-header {
                            padding: 18px;
                        }

                        [data-scope="modern-course-form"] .mcf-card-body {
                            padding: 17px;
                        }

                        [data-scope="modern-course-form"] .mcf-card-header {
                            padding: 17px;
                        }
                    }

                `}</style>

                <div className="mcf-container">

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div className="mcf-header mb-4">
                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">

                            <div>
                                <div className="mcf-eyebrow">
                                    <Icon name="book" className="w-3 h-3" />
                                    Talent Learning
                                </div>

                                <h1 className="mcf-title">
                                    {isEdit
                                        ? "Edit your course"
                                        : "Create a new course"}
                                </h1>

                                <p className="mcf-subtitle">
                                    {isEdit
                                        ? "Update your course information and improve your learning experience."
                                        : "Turn your knowledge into a professional learning experience."}
                                </p>
                            </div>

                            <Link
                                href={route("talent.courses.index")}
                                className="mcf-btn mcf-btn-outline"
                            >
                                <Icon name="arrowLeft" className="w-4 h-4" />
                                Back to Courses
                            </Link>

                        </div>
                    </div>

                    {/* =================================================
                        ERROR ALERT
                    ================================================= */}

                    {Object.keys(errors).length > 0 && (
                        <div className="mcf-alert mb-4">
                            <div className="d-flex gap-3">
                                <Icon
                                    name="alert"
                                    className="w-5 h-5 flex-shrink-0"
                                />

                                <div>
                                    <div className="fw-bold mb-1">
                                        Please review the form
                                    </div>

                                    <ul className="mb-0 ps-3 small">
                                        {Object.entries(errors).map(
                                            ([key, message]) => (
                                                <li key={key}>
                                                    {message}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={submit}>

                        <div className="row g-4">

                            {/* =================================================
                                MAIN COLUMN
                            ================================================= */}

                            <div className="col-xl-8">

                                {/* COURSE INFORMATION */}

                                <div className="mcf-card mb-4">

                                    <div className="mcf-card-header">
                                        <div className="d-flex align-items-center gap-3">

                                            <div className="mcf-number">
                                                01
                                            </div>

                                            <div>
                                                <h2 className="mcf-section-title">
                                                    Course information
                                                </h2>

                                                <p className="mcf-section-description">
                                                    Tell students what your course is about.
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mcf-card-body">

                                        <div className="mb-4">
                                            <label className="mcf-label">
                                                Course title
                                            </label>

                                            <input
                                                type="text"
                                                value={data.title}
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="e.g. Advanced React & Laravel Development"
                                                className={`mcf-control ${
                                                    errors.title
                                                        ? "mcf-invalid"
                                                        : ""
                                                }`}
                                            />

                                            {errors.title && (
                                                <div className="mcf-error">
                                                    {errors.title}
                                                </div>
                                            )}

                                            <div className="mcf-help">
                                                Use a clear and specific title that tells learners exactly what they will gain.
                                            </div>
                                        </div>

                                        <div className="row g-3">

                                            <div className="col-md-6">
                                                <label className="mcf-label">
                                                    Category
                                                </label>

                                                <select
                                                    value={data.category_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "category_id",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`mcf-control ${
                                                        errors.category_id
                                                            ? "mcf-invalid"
                                                            : ""
                                                    }`}
                                                >
                                                    <option value="">
                                                        Select category
                                                    </option>

                                                    {categories.map(
                                                        (category) => (
                                                            <option
                                                                key={
                                                                    category.id
                                                                }
                                                                value={
                                                                    category.id
                                                                }
                                                            >
                                                                {category.name}
                                                            </option>
                                                        )
                                                    )}
                                                </select>

                                                {errors.category_id && (
                                                    <div className="mcf-error">
                                                        {errors.category_id}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="col-md-6">
                                                <label className="mcf-label">
                                                    Difficulty level
                                                </label>

                                                <select
                                                    value={data.level}
                                                    onChange={(e) =>
                                                        setData(
                                                            "level",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`mcf-control ${
                                                        errors.level
                                                            ? "mcf-invalid"
                                                            : ""
                                                    }`}
                                                >
                                                    <option value="">
                                                        Select level
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
                                                    <div className="mcf-error">
                                                        {errors.level}
                                                    </div>
                                                )}
                                            </div>

                                        </div>

                                        <div className="mt-4">

                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <label className="mcf-label mb-0">
                                                    Course description
                                                </label>

                                                <span
                                                    className="small"
                                                    style={{
                                                        color:
                                                            data.description.length >=
                                                            50
                                                                ? "var(--green-dark)"
                                                                : "var(--muted)",
                                                    }}
                                                >
                                                    {data.description.length}{" "}
                                                    characters
                                                </span>
                                            </div>

                                            <textarea
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Explain what learners will learn, who this course is for, prerequisites and expected outcomes..."
                                                className={`mcf-control ${
                                                    errors.description
                                                        ? "mcf-invalid"
                                                        : ""
                                                }`}
                                            />

                                            {errors.description && (
                                                <div className="mcf-error">
                                                    {errors.description}
                                                </div>
                                            )}

                                            <div className="mcf-help">
                                                A detailed description improves learner confidence and course discoverability.
                                            </div>

                                        </div>

                                        <div className="mt-4">

                                            <label className="mcf-label d-flex align-items-center gap-2">
                                                <Icon
                                                    name="video"
                                                    className="w-4 h-4"
                                                    style={{
                                                        color: "var(--green)",
                                                    }}
                                                />
                                                Introduction video
                                            </label>

                                            <input
                                                type="url"
                                                value={data.video}
                                                onChange={(e) =>
                                                    setData(
                                                        "video",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="https://youtube.com/watch?v=..."
                                                className={`mcf-control ${
                                                    errors.video
                                                        ? "mcf-invalid"
                                                        : ""
                                                }`}
                                            />

                                            {errors.video && (
                                                <div className="mcf-error">
                                                    {errors.video}
                                                </div>
                                            )}

                                            <div className="mcf-help">
                                                Add a short video that introduces the course to potential learners.
                                            </div>

                                            {data.video && (
                                                <div className="mt-3">
                                                    <video
                                                        controls
                                                        style={{
                                                            width: "100%",
                                                            maxHeight: 320,
                                                            borderRadius: 14,
                                                            background:
                                                                "#111",
                                                        }}
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

                                {/* THUMBNAIL */}

                                <div className="mcf-card mb-4">

                                    <div className="mcf-card-header">

                                        <div className="d-flex align-items-center gap-3">

                                            <div className="mcf-number">
                                                02
                                            </div>

                                            <div>
                                                <h2 className="mcf-section-title">
                                                    Course thumbnail
                                                </h2>

                                                <p className="mcf-section-description">
                                                    Make your course stand out in the talent marketplace.
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="mcf-card-body">

                                        <label
                                            className="mcf-upload"
                                            htmlFor="course-thumbnail"
                                        >

                                            {thumbPreview ? (
                                                <>
                                                    <img
                                                        src={thumbPreview}
                                                        alt="Course thumbnail preview"
                                                    />

                                                    <button
                                                        type="button"
                                                        className="mcf-remove"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            removeThumbnail();
                                                        }}
                                                    >
                                                        <Icon
                                                            name="x"
                                                            className="w-4 h-4"
                                                        />
                                                    </button>
                                                </>
                                            ) : (
                                                <div className="mcf-upload-content">

                                                    <div className="mcf-upload-icon">
                                                        <Icon
                                                            name="upload"
                                                            className="w-5 h-5"
                                                        />
                                                    </div>

                                                    <div
                                                        className="fw-bold"
                                                        style={{
                                                            color: "var(--black)",
                                                        }}
                                                    >
                                                        Upload course thumbnail
                                                    </div>

                                                    <div
                                                        className="small mt-1"
                                                        style={{
                                                            color: "var(--muted)",
                                                        }}
                                                    >
                                                        JPG, PNG or WEBP · 1280×720 recommended
                                                    </div>

                                                </div>
                                            )}

                                            <input
                                                id="course-thumbnail"
                                                type="file"
                                                accept="image/*"
                                                hidden
                                                onChange={
                                                    handleThumbnailChange
                                                }
                                            />

                                        </label>

                                        {errors.thumbnail && (
                                            <div className="mcf-error">
                                                {errors.thumbnail}
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* COURSE PREVIEW */}

                                <div className="mcf-card">

                                    <div className="mcf-card-header">

                                        <div className="d-flex align-items-center gap-3">

                                            <div className="mcf-number">
                                                03
                                            </div>

                                            <div>
                                                <h2 className="mcf-section-title">
                                                    Marketplace preview
                                                </h2>

                                                <p className="mcf-section-description">
                                                    Preview how your course may appear to learners.
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="mcf-card-body">

                                        <div
                                            style={{
                                                maxWidth: 430,
                                                margin: "0 auto",
                                            }}
                                        >

                                            <div className="mcf-preview">

                                                <div className="mcf-preview-image">

                                                    {thumbPreview ? (
                                                        <img
                                                            src={thumbPreview}
                                                            alt=""
                                                        />
                                                    ) : (
                                                        <Icon
                                                            name="image"
                                                            className="w-10 h-10"
                                                            style={{
                                                                color: "#8abfa9",
                                                            }}
                                                        />
                                                    )}

                                                </div>

                                                <div className="mcf-preview-body">

                                                    <span className="mcf-preview-badge">
                                                        {selectedCategory?.name ||
                                                            "Course"}
                                                    </span>

                                                    <h3
                                                        className="fw-bold mt-2 mb-2"
                                                        style={{
                                                            fontSize: "1.05rem",
                                                            color: "var(--black)",
                                                        }}
                                                    >
                                                        {data.title ||
                                                            "Your course title"}
                                                    </h3>

                                                    <p
                                                        className="small mb-3"
                                                        style={{
                                                            color: "var(--muted)",
                                                            lineHeight: 1.55,
                                                        }}
                                                    >
                                                        {data.description ||
                                                            "Your course description will appear here."}
                                                    </p>

                                                    <div className="d-flex justify-content-between align-items-center">

                                                        <div className="small fw-semibold">
                                                            {data.level ||
                                                                "Level"}
                                                        </div>

                                                        <div
                                                            className="fw-bold"
                                                            style={{
                                                                color: "var(--green-dark)",
                                                            }}
                                                        >
                                                            {data.is_free
                                                                ? "Free"
                                                                : data.price
                                                                ? `$${Number(
                                                                      data.price
                                                                  ).toFixed(2)}`
                                                                : "$0.00"}
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                            {/* =================================================
                                SIDEBAR
                            ================================================= */}

                            <div className="col-xl-4">

                                <div
                                    className="mcf-sticky"
                                    style={{
                                        position: "sticky",
                                        top: 20,
                                    }}
                                >

                                    {/* READINESS */}

                                    <div className="mcf-card mb-4">

                                        <div className="mcf-card-body">

                                            <div className="d-flex justify-content-between align-items-center mb-2">

                                                <div>
                                                    <div
                                                        className="fw-bold"
                                                        style={{
                                                            color: "var(--black)",
                                                        }}
                                                    >
                                                        Course readiness
                                                    </div>

                                                    <div
                                                        className="small"
                                                        style={{
                                                            color: "var(--muted)",
                                                        }}
                                                    >
                                                        Prepare your course for publishing
                                                    </div>
                                                </div>

                                                <strong
                                                    style={{
                                                        color:
                                                            readiness.percentage ===
                                                            100
                                                                ? "var(--green-dark)"
                                                                : "var(--black)",
                                                    }}
                                                >
                                                    {readiness.percentage}%
                                                </strong>

                                            </div>

                                            <div className="mcf-progress mb-3">
                                                <div
                                                    className="mcf-progress-bar"
                                                    style={{
                                                        width: `${readiness.percentage}%`,
                                                    }}
                                                />
                                            </div>

                                            <div>
                                                {readiness.checks.map(
                                                    (check) => (
                                                        <div
                                                            key={check.label}
                                                            className={`mcf-check ${
                                                                check.complete
                                                                    ? "complete"
                                                                    : ""
                                                            }`}
                                                        >

                                                            <span className="mcf-check-icon">

                                                                {check.complete ? (
                                                                    <Icon
                                                                        name="check"
                                                                        className="w-3 h-3"
                                                                    />
                                                                ) : (
                                                                    <span
                                                                        style={{
                                                                            width: 5,
                                                                            height: 5,
                                                                            borderRadius:
                                                                                "50%",
                                                                            background:
                                                                                "#b6bdb9",
                                                                        }}
                                                                    />
                                                                )}

                                                            </span>

                                                            <span
                                                                className="small"
                                                                style={{
                                                                    color: check.complete
                                                                        ? "var(--text)"
                                                                        : "var(--muted)",
                                                                    fontWeight:
                                                                        check.complete
                                                                            ? 600
                                                                            : 500,
                                                                }}
                                                            >
                                                                {check.label}
                                                            </span>

                                                        </div>
                                                    )
                                                )}
                                            </div>

                                        </div>
                                    </div>

                                    {/* PRICING */}

                                    <div className="mcf-card mb-4">

                                        <div className="mcf-card-header">

                                            <div className="d-flex align-items-center gap-3">

                                                <div
                                                    className="mcf-number"
                                                    style={{
                                                        background:
                                                            "#f0f9f5",
                                                    }}
                                                >
                                                    <Icon
                                                        name="dollar"
                                                        className="w-4 h-4"
                                                    />
                                                </div>

                                                <div>
                                                    <h2 className="mcf-section-title">
                                                        Pricing
                                                    </h2>

                                                    <p className="mcf-section-description">
                                                        Set how learners access your course.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="mcf-card-body">

                                            <div className="mcf-price-box">

                                                <div className="d-flex align-items-center justify-content-between">

                                                    <div>
                                                        <div className="fw-bold">
                                                            Free course
                                                        </div>

                                                        <div
                                                            className="small"
                                                            style={{
                                                                color: "var(--muted)",
                                                            }}
                                                        >
                                                            Anyone can access it
                                                        </div>
                                                    </div>

                                                    <label className="mcf-switch">

                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                data.is_free
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "is_free",
                                                                    e.target
                                                                        .checked
                                                                )
                                                            }
                                                        />

                                                        <span className="mcf-slider" />

                                                    </label>

                                                </div>

                                            </div>

                                            {!data.is_free && (
                                                <div className="mt-3">

                                                    <label className="mcf-label">
                                                        Course price (USD)
                                                    </label>

                                                    <div className="input-group">

                                                        <span
                                                            className="input-group-text"
                                                            style={{
                                                                background:
                                                                    "#fafafa",
                                                                borderColor:
                                                                    "#dfe3e6",
                                                            }}
                                                        >
                                                            $
                                                        </span>

                                                        <input
                                                            type="number"
                                                            min="0"
                                                            step="0.01"
                                                            value={
                                                                data.price
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "price",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="29.99"
                                                            className={`form-control ${
                                                                errors.price
                                                                    ? "is-invalid"
                                                                    : ""
                                                            }`}
                                                        />

                                                    </div>

                                                    {errors.price && (
                                                        <div className="mcf-error">
                                                            {errors.price}
                                                        </div>
                                                    )}

                                                </div>
                                            )}

                                        </div>
                                    </div>

                                    {/* PUBLISH STATUS */}

                                    <div className="mcf-card mb-4">

                                        <div className="mcf-card-header">

                                            <div className="d-flex align-items-center gap-3">

                                                <div className="mcf-number">
                                                    <Icon
                                                        name="shield"
                                                        className="w-4 h-4"
                                                    />
                                                </div>

                                                <div>
                                                    <h2 className="mcf-section-title">
                                                        Publishing
                                                    </h2>

                                                    <p className="mcf-section-description">
                                                        Choose who can see your course.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="mcf-card-body">

                                            <div className="d-flex flex-column gap-2">

                                                <StatusCard
                                                    label="Draft"
                                                    description="Keep working on your course"
                                                    active={
                                                        data.status ===
                                                        "draft"
                                                    }
                                                    icon={
                                                        <Icon
                                                            name="edit"
                                                            className="w-4 h-4"
                                                        />
                                                    }
                                                    onClick={() =>
                                                        setData(
                                                            "status",
                                                            "draft"
                                                        )
                                                    }
                                                />

                                                <StatusCard
                                                    label="Published"
                                                    description="Make course visible to learners"
                                                    active={
                                                        data.status ===
                                                        "published"
                                                    }
                                                    icon={
                                                        <Icon
                                                            name="checkCircle"
                                                            className="w-4 h-4"
                                                        />
                                                    }
                                                    onClick={() =>
                                                        setData(
                                                            "status",
                                                            "published"
                                                        )
                                                    }
                                                />

                                            </div>

                                        </div>
                                    </div>

                                    {/* QUICK STATS */}

                                    <div className="mcf-card mb-4">

                                        <div className="mcf-card-body">

                                            <div className="fw-bold mb-3">
                                                Course snapshot
                                            </div>

                                            <div className="row g-2">

                                                <MiniStat
                                                    icon="layers"
                                                    label="Level"
                                                    value={
                                                        data.level ||
                                                        "Not set"
                                                    }
                                                />

                                                <MiniStat
                                                    icon="users"
                                                    label="Audience"
                                                    value="Learners"
                                                />

                                                <MiniStat
                                                    icon="video"
                                                    label="Intro"
                                                    value={
                                                        data.video
                                                            ? "Added"
                                                            : "Optional"
                                                    }
                                                />

                                                <MiniStat
                                                    icon="image"
                                                    label="Thumbnail"
                                                    value={
                                                        thumbPreview
                                                            ? "Ready"
                                                            : "Missing"
                                                    }
                                                />

                                            </div>

                                        </div>
                                    </div>

                                    {/* SUBMIT */}

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="mcf-btn mcf-btn-primary w-100"
                                        style={{
                                            minHeight: 54,
                                            fontSize: ".95rem",
                                        }}
                                    >

                                        {processing ? (
                                            <>
                                                <Spinner />
                                                Saving course...
                                            </>
                                        ) : (
                                            <>
                                                <Icon
                                                    name="save"
                                                    className="w-5 h-5"
                                                />

                                                {isEdit
                                                    ? "Update Course"
                                                    : data.status ===
                                                      "published"
                                                    ? "Publish Course"
                                                    : "Save Course"}
                                            </>
                                        )}

                                    </button>

                                    <div
                                        className="text-center mt-2"
                                        style={{
                                            color: "var(--muted)",
                                            fontSize: ".7rem",
                                        }}
                                    >
                                        You can change these settings later.
                                    </div>

                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}

// ─────────────────────────────────────────────────────────────
// STATUS CARD
// ─────────────────────────────────────────────────────────────

function StatusCard({
    label,
    description,
    icon,
    active,
    onClick,
}) {
    return (
        <div
            className={`mcf-status ${active ? "active" : ""}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    onClick();
                }
            }}
        >
            <div className="mcf-status-icon">
                {icon}
            </div>

            <div className="flex-grow-1">

                <div
                    className="fw-bold"
                    style={{
                        fontSize: ".84rem",
                    }}
                >
                    {label}
                </div>

                <div
                    style={{
                        color: "var(--muted)",
                        fontSize: ".7rem",
                        marginTop: 2,
                    }}
                >
                    {description}
                </div>

            </div>

            {active && (
                <div
                    style={{
                        color: "var(--green)",
                    }}
                >
                    <Icon
                        name="checkCircle"
                        className="w-4 h-4"
                    />
                </div>
            )}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────
// MINI STAT
// ─────────────────────────────────────────────────────────────

function MiniStat({ icon, label, value }) {
    return (
        <div
            className="col-6"
            style={{
                background: "#fafafa",
                border: "1px solid #eef0ef",
                borderRadius: 11,
                padding: 10,
            }}
        >
            <div
                className="d-flex align-items-center gap-2 mb-1"
                style={{
                    color: "var(--muted)",
                }}
            >
                <Icon
                    name={icon}
                    className="w-3 h-3"
                />

                <span
                    style={{
                        fontSize: ".65rem",
                    }}
                >
                    {label}
                </span>
            </div>

            <div
                className="fw-bold text-truncate"
                style={{
                    fontSize: ".75rem",
                    color:
                        value === "Missing"
                            ? "#dc2626"
                            : value === "Ready"
                            ? "var(--green-dark)"
                            : "var(--black)",
                }}
                title={value}
            >
                {value}
            </div>
        </div>
    );
}