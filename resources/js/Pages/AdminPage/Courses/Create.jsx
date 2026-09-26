import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Form({
    course = null,
    categories = [],
    talents = [],
}) {
    const isEdit = !!course;

    const initialPreviewDuration =
        Number(course?.preview_duration ?? 300) > 0
            ? Number(course?.preview_duration ?? 300)
            : 300;

    const { data, setData, post, put, processing, errors } = useForm({
        title: course?.title ?? "",
        description: course?.description ?? "",
        category_id: course?.category_id ?? "",
        talent_id: course?.talent_id ?? "",
        level: course?.level ?? "Beginner",
        status: course?.status ?? "draft",
        video: course?.video ?? "",
        is_free: Boolean(course?.is_free ?? false),
        price: course?.is_free ? 0 : course?.price ?? 0,
        preview_duration: course?.is_free
            ? 0
            : initialPreviewDuration,
        thumbnail: null,
    });

    const [thumbPreview, setThumbPreview] = useState(
        course?.thumbnail
            ? `/images/thumbnails/${course.thumbnail}`
            : "/images/placeholder-course.png",
    );

    function handleThumbChange(e) {
        const file = e.target.files?.[0];

        if (!file) return;

        setData("thumbnail", file);
        setThumbPreview(URL.createObjectURL(file));
    }

    function handleFreeToggle(e) {
        const isFree = e.target.checked;

        setData({
            ...data,
            is_free: isFree,
            price: isFree ? 0 : data.price || 0,
            preview_duration: isFree
                ? 0
                : Number(data.preview_duration || 300),
        });
    }

    function handlePreviewDurationChange(e) {
        const value = Number(e.target.value);

        if (!value) {
            setData("preview_duration", 60);
            return;
        }

        const minutes = Math.max(1, Math.min(120, value));

        setData("preview_duration", minutes * 60);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (isEdit) {
            put(route("admin.courses.update", course.id), {
                forceFormData: true,
            });
        } else {
            post(route("admin.courses.store"), {
                forceFormData: true,
            });
        }
    }

    const selectedTalent = talents.find(
        (talent) =>
            String(talent.id) === String(data.talent_id),
    );

    const previewMinutes = data.is_free
        ? 0
        : Math.max(
              1,
              Math.floor(
                  Number(data.preview_duration || 300) / 60,
              ),
          );

    return (
        <AppLayout>
            <Head
                title={
                    isEdit
                        ? "Edit Course"
                        : "Create Course"
                }
            />

            <style>{`
                :root {
                    --course-primary: #2563eb;
                    --course-primary-dark: #1d4ed8;
                    --course-primary-light: #eff6ff;
                    --course-bg: #f6f8fc;
                    --course-card: #ffffff;
                    --course-border: #e5e7eb;
                    --course-text: #111827;
                    --course-muted: #6b7280;
                    --course-success: #16a34a;
                    --course-warning: #d97706;
                    --course-danger: #dc2626;
                    --course-radius: 18px;
                    --course-shadow: 0 8px 30px rgba(15, 23, 42, .06);
                }

                .course-editor {
                    min-height: 100vh;
                    background: var(--course-bg);
                    padding: 28px 0 50px;
                }

                .course-container {
                    max-width: 1450px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .course-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 28px;
                }

                .breadcrumb-area {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--course-muted);
                    font-size: 13px;
                    margin-bottom: 8px;
                }

                .breadcrumb-area a {
                    color: var(--course-muted);
                    text-decoration: none;
                }

                .breadcrumb-area a:hover {
                    color: var(--course-primary);
                }

                .course-header-title {
                    margin: 0;
                    font-size: 28px;
                    font-weight: 750;
                    letter-spacing: -.5px;
                    color: var(--course-text);
                }

                .course-header-subtitle {
                    margin: 7px 0 0;
                    color: var(--course-muted);
                    font-size: 14px;
                }

                .back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #fff;
                    color: #374151;
                    border: 1px solid var(--course-border);
                    border-radius: 11px;
                    padding: 10px 15px;
                    font-size: 13px;
                    font-weight: 650;
                    text-decoration: none;
                    transition: .2s ease;
                    white-space: nowrap;
                }

                .back-btn:hover {
                    color: var(--course-primary);
                    border-color: #bfdbfe;
                    background: var(--course-primary-light);
                }

                .editor-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 370px;
                    gap: 24px;
                    align-items: start;
                }

                .editor-main,
                .editor-sidebar {
                    min-width: 0;
                }

                .editor-card {
                    background: var(--course-card);
                    border: 1px solid var(--course-border);
                    border-radius: var(--course-radius);
                    box-shadow: var(--course-shadow);
                    margin-bottom: 20px;
                    overflow: hidden;
                }

                .card-header {
                    padding: 20px 24px;
                    border-bottom: 1px solid #edf0f4;
                    display: flex;
                    align-items: center;
                    gap: 13px;
                }

                .card-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 11px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--course-primary-light);
                    color: var(--course-primary);
                    font-size: 18px;
                    flex-shrink: 0;
                }

                .card-title {
                    margin: 0;
                    color: var(--course-text);
                    font-size: 15px;
                    font-weight: 700;
                }

                .card-description {
                    margin: 3px 0 0;
                    color: var(--course-muted);
                    font-size: 12px;
                }

                .card-body {
                    padding: 24px;
                }

                .field {
                    margin-bottom: 21px;
                }

                .field:last-child {
                    margin-bottom: 0;
                }

                .field-label {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    margin-bottom: 8px;
                    color: #374151;
                    font-size: 13px;
                    font-weight: 650;
                }

                .required {
                    color: var(--course-danger);
                }

                .field-hint {
                    color: #9ca3af;
                    font-size: 11px;
                    font-weight: 400;
                }

                .course-input,
                .course-select,
                .course-textarea {
                    width: 100%;
                    border: 1px solid #dfe3e8;
                    background: #fff;
                    color: var(--course-text);
                    border-radius: 11px;
                    padding: 12px 14px;
                    font-size: 13px;
                    outline: none;
                    transition: .2s ease;
                }

                .course-input,
                .course-select {
                    height: 46px;
                }

                .course-textarea {
                    min-height: 145px;
                    resize: vertical;
                    line-height: 1.6;
                }

                .course-input::placeholder,
                .course-textarea::placeholder {
                    color: #a4aab4;
                }

                .course-input:focus,
                .course-select:focus,
                .course-textarea:focus {
                    border-color: #93c5fd;
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, .08);
                }

                .course-input.is-invalid,
                .course-select.is-invalid,
                .course-textarea.is-invalid {
                    border-color: #fca5a5;
                }

                .error-message {
                    margin-top: 6px;
                    color: var(--course-danger);
                    font-size: 11px;
                }

                .two-columns {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 18px;
                }

                .thumbnail-preview {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    overflow: hidden;
                    border-radius: 14px;
                    background: #f1f5f9;
                    border: 1px solid var(--course-border);
                    margin-bottom: 15px;
                }

                .thumbnail-preview img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                }

                .thumbnail-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0,0,0,.35),
                        transparent 55%
                    );
                    pointer-events: none;
                }

                .thumbnail-label {
                    position: absolute;
                    left: 12px;
                    bottom: 12px;
                    padding: 5px 9px;
                    border-radius: 7px;
                    background: rgba(0,0,0,.55);
                    color: white;
                    font-size: 10px;
                    font-weight: 600;
                }

                .upload-zone {
                    position: relative;
                    display: block;
                    border: 1.5px dashed #cbd5e1;
                    border-radius: 13px;
                    padding: 20px;
                    text-align: center;
                    background: #fafbfc;
                    cursor: pointer;
                    transition: .2s ease;
                }

                .upload-zone:hover {
                    border-color: #93c5fd;
                    background: var(--course-primary-light);
                }

                .upload-icon {
                    width: 44px;
                    height: 44px;
                    margin: 0 auto 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: #eaf2ff;
                    color: var(--course-primary);
                    font-size: 19px;
                }

                .upload-title {
                    margin: 0 0 4px;
                    color: #374151;
                    font-size: 12px;
                    font-weight: 650;
                }

                .upload-description {
                    margin: 0;
                    color: #9ca3af;
                    font-size: 10px;
                }

                .free-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 14px;
                    border: 1px solid var(--course-border);
                    border-radius: 12px;
                    background: #fafbfc;
                    margin-bottom: 18px;
                }

                .toggle-text strong {
                    display: block;
                    color: #374151;
                    font-size: 12px;
                }

                .toggle-text span {
                    display: block;
                    margin-top: 3px;
                    color: #9ca3af;
                    font-size: 10px;
                }

                .custom-switch {
                    position: relative;
                    width: 42px;
                    height: 23px;
                    flex-shrink: 0;
                }

                .custom-switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .switch-slider {
                    position: absolute;
                    cursor: pointer;
                    inset: 0;
                    border-radius: 30px;
                    background: #d1d5db;
                    transition: .2s;
                }

                .switch-slider::before {
                    content: "";
                    position: absolute;
                    width: 17px;
                    height: 17px;
                    left: 3px;
                    top: 3px;
                    background: #fff;
                    border-radius: 50%;
                    transition: .2s;
                    box-shadow: 0 1px 3px rgba(0,0,0,.2);
                }

                .custom-switch input:checked + .switch-slider {
                    background: var(--course-primary);
                }

                .custom-switch input:checked + .switch-slider::before {
                    transform: translateX(19px);
                }

                .price-disabled {
                    opacity: .45;
                }

                .status-options {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .status-option {
                    position: relative;
                }

                .status-option input {
                    position: absolute;
                    opacity: 0;
                }

                .status-label {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    padding: 11px;
                    border: 1px solid var(--course-border);
                    border-radius: 10px;
                    cursor: pointer;
                    transition: .2s;
                    font-size: 11px;
                    font-weight: 650;
                    color: #4b5563;
                }

                .status-dot {
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background: #9ca3af;
                }

                .status-option input:checked + .status-label {
                    border-color: #93c5fd;
                    background: var(--course-primary-light);
                    color: var(--course-primary);
                }

                .status-option input:checked + .status-label .status-dot {
                    background: var(--course-primary);
                }

                .status-dot.published {
                    background: var(--course-success);
                }

                .sidebar-card {
                    position: sticky;
                    top: 20px;
                }

                .course-preview {
                    border: 1px solid var(--course-border);
                    border-radius: 14px;
                    overflow: hidden;
                    background: #fff;
                }

                .preview-image {
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    object-fit: cover;
                    display: block;
                }

                .preview-content {
                    padding: 15px;
                }

                .preview-badge {
                    display: inline-flex;
                    padding: 4px 8px;
                    border-radius: 6px;
                    background: #eff6ff;
                    color: var(--course-primary);
                    font-size: 9px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: .3px;
                }

                .preview-title {
                    margin: 10px 0 5px;
                    color: var(--course-text);
                    font-size: 15px;
                    font-weight: 700;
                    line-height: 1.35;
                }

                .preview-description {
                    margin: 0;
                    color: var(--course-muted);
                    font-size: 11px;
                    line-height: 1.55;
                }

                .preview-meta {
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;
                    margin-top: 15px;
                    padding-top: 12px;
                    border-top: 1px solid #edf0f4;
                    color: #6b7280;
                    font-size: 10px;
                }

                .preview-access {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    margin-top: 12px;
                    padding: 9px 10px;
                    border-radius: 9px;
                    background: #f8fafc;
                    border: 1px solid #edf0f4;
                    color: #64748b;
                    font-size: 10px;
                    line-height: 1.4;
                }

                .preview-access i {
                    color: var(--course-primary);
                    font-size: 13px;
                }

                .action-bar {
                    display: flex;
                    gap: 10px;
                    margin-top: 22px;
                }

                .btn-save {
                    flex: 1;
                    border: none;
                    border-radius: 11px;
                    background: var(--course-primary);
                    color: white;
                    padding: 13px 18px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: .2s;
                }

                .btn-save:hover:not(:disabled) {
                    background: var(--course-primary-dark);
                    transform: translateY(-1px);
                }

                .btn-save:disabled {
                    opacity: .65;
                    cursor: not-allowed;
                }

                .btn-cancel {
                    border: 1px solid var(--course-border);
                    border-radius: 11px;
                    background: #fff;
                    color: #4b5563;
                    padding: 13px 17px;
                    font-size: 13px;
                    font-weight: 650;
                    text-decoration: none;
                }

                .btn-cancel:hover {
                    background: #f9fafb;
                    color: #111827;
                }

                .completion-box {
                    padding: 16px;
                    border-radius: 13px;
                    background: linear-gradient(
                        135deg,
                        #eff6ff,
                        #f8fbff
                    );
                    border: 1px solid #dbeafe;
                }

                .completion-top {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 9px;
                }

                .completion-top span {
                    font-size: 11px;
                    color: #64748b;
                }

                .completion-top strong {
                    color: var(--course-primary);
                    font-size: 11px;
                }

                .progress-track {
                    height: 6px;
                    border-radius: 10px;
                    background: #dbeafe;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    width: 75%;
                    border-radius: inherit;
                    background: var(--course-primary);
                }

                @media (max-width: 1100px) {
                    .editor-layout {
                        grid-template-columns: minmax(0, 1fr) 320px;
                    }
                }

                @media (max-width: 900px) {
                    .editor-layout {
                        grid-template-columns: 1fr;
                    }

                    .sidebar-card {
                        position: static;
                    }

                    .editor-sidebar {
                        order: -1;
                    }
                }

                @media (max-width: 650px) {
                    .course-container {
                        padding: 0 14px;
                    }

                    .course-editor {
                        padding-top: 20px;
                    }

                    .course-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .course-header-title {
                        font-size: 23px;
                    }

                    .two-columns {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }

                    .card-header,
                    .card-body {
                        padding: 18px;
                    }

                    .status-options {
                        grid-template-columns: 1fr;
                    }

                    .action-bar {
                        flex-direction: column;
                    }

                    .btn-cancel {
                        text-align: center;
                    }
                }
            `}</style>

            <div className="course-editor">
                <div className="course-container">

                    {/* Header */}
                    <div className="course-header">
                        <div>
                            <div className="breadcrumb-area">
                                <Link
                                    href={route(
                                        "admin.courses.index",
                                    )}
                                >
                                    Courses
                                </Link>

                                <i className="bi bi-chevron-right"></i>

                                <span>
                                    {isEdit
                                        ? "Edit Course"
                                        : "Create Course"}
                                </span>
                            </div>

                            <h1 className="course-header-title">
                                {isEdit
                                    ? "Edit Course"
                                    : "Create New Course"}
                            </h1>

                            <p className="course-header-subtitle">
                                {isEdit
                                    ? "Update your course information and publishing settings."
                                    : "Build a professional course for your learners."}
                            </p>
                        </div>

                        <Link
                            href={route(
                                "admin.courses.index",
                            )}
                            className="back-btn"
                        >
                            <i className="bi bi-arrow-left"></i>
                            Back to Courses
                        </Link>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <div className="editor-layout">

                            {/* MAIN CONTENT */}
                            <div className="editor-main">

                                {/* Basic Information */}
                                <div className="editor-card">
                                    <div className="card-header">
                                        <div className="card-icon">
                                            <i className="bi bi-journal-text"></i>
                                        </div>

                                        <div>
                                            <h2 className="card-title">
                                                Basic Information
                                            </h2>

                                            <p className="card-description">
                                                Give your course a clear
                                                identity.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card-body">

                                        <div className="field">
                                            <label className="field-label">
                                                <span>
                                                    Course Title{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </span>

                                                <span className="field-hint">
                                                    Keep it clear and concise
                                                </span>
                                            </label>

                                            <input
                                                type="text"
                                                value={data.title}
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value,
                                                    )
                                                }
                                                className={`course-input ${
                                                    errors.title
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                placeholder="e.g. Introduction to Web Development"
                                            />

                                            {errors.title && (
                                                <div className="error-message">
                                                    {errors.title}
                                                </div>
                                            )}
                                        </div>

                                        <div className="field">
                                            <label className="field-label">
                                                Description
                                            </label>

                                            <textarea
                                                value={
                                                    data.description
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value,
                                                    )
                                                }
                                                className={`course-textarea ${
                                                    errors.description
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                placeholder="Describe what students will learn from this course..."
                                            />

                                            {errors.description && (
                                                <div className="error-message">
                                                    {
                                                        errors.description
                                                    }
                                                </div>
                                            )}
                                        </div>

                                        <div className="two-columns">

                                            <div className="field">
                                                <label className="field-label">
                                                    Category{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>

                                                <select
                                                    value={
                                                        data.category_id
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "category_id",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={`course-select ${
                                                        errors.category_id
                                                            ? "is-invalid"
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
                                                                {
                                                                    category.name
                                                                }
                                                            </option>
                                                        ),
                                                    )}
                                                </select>

                                                {errors.category_id && (
                                                    <div className="error-message">
                                                        {
                                                            errors.category_id
                                                        }
                                                    </div>
                                                )}
                                            </div>

                                            <div className="field">
                                                <label className="field-label">
                                                    Instructor / Talent{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>

                                                <select
                                                    value={
                                                        data.talent_id
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "talent_id",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={`course-select ${
                                                        errors.talent_id
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                >
                                                    <option value="">
                                                        Select instructor
                                                    </option>

                                                    {talents.map(
                                                        (talent) => (
                                                            <option
                                                                key={
                                                                    talent.id
                                                                }
                                                                value={
                                                                    talent.id
                                                                }
                                                            >
                                                                {
                                                                    talent.name
                                                                }
                                                            </option>
                                                        ),
                                                    )}
                                                </select>

                                                {errors.talent_id && (
                                                    <div className="error-message">
                                                        {
                                                            errors.talent_id
                                                        }
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Course Configuration */}
                                <div className="editor-card">
                                    <div className="card-header">
                                        <div className="card-icon">
                                            <i className="bi bi-sliders"></i>
                                        </div>

                                        <div>
                                            <h2 className="card-title">
                                                Course Configuration
                                            </h2>

                                            <p className="card-description">
                                                Define the learning level and
                                                course content.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card-body">

                                        <div className="two-columns">

                                            <div className="field">
                                                <label className="field-label">
                                                    Difficulty Level
                                                </label>

                                                <select
                                                    value={data.level}
                                                    onChange={(e) =>
                                                        setData(
                                                            "level",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={`course-select ${
                                                        errors.level
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                >
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
                                                    <div className="error-message">
                                                        {errors.level}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="field">
                                                <label className="field-label">
                                                    Publishing Status
                                                </label>

                                                <div className="status-options">

                                                    <div className="status-option">
                                                        <input
                                                            type="radio"
                                                            id="draftStatus"
                                                            name="courseStatus"
                                                            checked={
                                                                data.status ===
                                                                "draft"
                                                            }
                                                            onChange={() =>
                                                                setData(
                                                                    "status",
                                                                    "draft",
                                                                )
                                                            }
                                                        />

                                                        <label
                                                            htmlFor="draftStatus"
                                                            className="status-label"
                                                        >
                                                            <span className="status-dot"></span>
                                                            Draft
                                                        </label>
                                                    </div>

                                                    <div className="status-option">
                                                        <input
                                                            type="radio"
                                                            id="publishedStatus"
                                                            name="courseStatus"
                                                            checked={
                                                                data.status ===
                                                                "published"
                                                            }
                                                            onChange={() =>
                                                                setData(
                                                                    "status",
                                                                    "published",
                                                                )
                                                            }
                                                        />

                                                        <label
                                                            htmlFor="publishedStatus"
                                                            className="status-label"
                                                        >
                                                            <span className="status-dot published"></span>
                                                            Published
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        <div className="field">
                                            <label className="field-label">
                                                Video URL

                                                <span className="field-hint">
                                                    YouTube, Vimeo, or hosted
                                                    video
                                                </span>
                                            </label>

                                            <div
                                                style={{
                                                    position: "relative",
                                                }}
                                            >
                                                <i
                                                    className="bi bi-play-circle"
                                                    style={{
                                                        position:
                                                            "absolute",
                                                        left: 14,
                                                        top: 14,
                                                        color: "#94a3b8",
                                                        zIndex: 2,
                                                    }}
                                                ></i>

                                                <input
                                                    type="url"
                                                    value={data.video}
                                                    onChange={(e) =>
                                                        setData(
                                                            "video",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={`course-input ${
                                                        errors.video
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    style={{
                                                        paddingLeft: 40,
                                                    }}
                                                    placeholder="https://..."
                                                />
                                            </div>

                                            {errors.video && (
                                                <div className="error-message">
                                                    {errors.video}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="editor-card">
                                    <div className="card-header">
                                        <div className="card-icon">
                                            <i className="bi bi-wallet2"></i>
                                        </div>

                                        <div>
                                            <h2 className="card-title">
                                                Pricing & Preview Access
                                            </h2>

                                            <p className="card-description">
                                                Set the course price and free
                                                preview duration.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card-body">

                                        {/* Free Course */}
                                        <div className="free-toggle">

                                            <div className="toggle-text">
                                                <strong>
                                                    Free Course
                                                </strong>

                                                <span>
                                                    Learners get full access
                                                    without payment.
                                                </span>
                                            </div>

                                            <label className="custom-switch">
                                                <input
                                                    type="checkbox"
                                                    checked={
                                                        data.is_free
                                                    }
                                                    onChange={
                                                        handleFreeToggle
                                                    }
                                                />

                                                <span className="switch-slider"></span>
                                            </label>

                                        </div>

                                        {/* Price */}
                                        <div
                                            className={
                                                data.is_free
                                                    ? "price-disabled"
                                                    : ""
                                            }
                                        >
                                            <label className="field-label">
                                                Course Price

                                                <span className="field-hint">
                                                    RWF
                                                </span>
                                            </label>

                                            <div
                                                style={{
                                                    position: "relative",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        position:
                                                            "absolute",
                                                        left: 14,
                                                        top: 13,
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: "#64748b",
                                                        zIndex: 2,
                                                    }}
                                                >
                                                    RWF
                                                </span>

                                                <input
                                                    type="number"
                                                    step="1"
                                                    min="0"
                                                    value={
                                                        data.price
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "price",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className={`course-input ${
                                                        errors.price
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    style={{
                                                        paddingLeft: 58,
                                                    }}
                                                    placeholder="0"
                                                    disabled={
                                                        data.is_free
                                                    }
                                                />
                                            </div>

                                            {errors.price && (
                                                <div className="error-message">
                                                    {errors.price}
                                                </div>
                                            )}
                                        </div>

                                        {/* Preview Duration */}
                                        {!data.is_free && (
                                            <div className="field mt-4">

                                                <label className="field-label">
                                                    <span>
                                                        Free Preview Duration
                                                        <span className="required ms-1">
                                                            *
                                                        </span>
                                                    </span>

                                                    <span className="field-hint">
                                                        Minutes
                                                    </span>
                                                </label>

                                                <div
                                                    style={{
                                                        position:
                                                            "relative",
                                                    }}
                                                >
                                                    <i
                                                        className="bi bi-clock"
                                                        style={{
                                                            position:
                                                                "absolute",
                                                            left: 14,
                                                            top: 14,
                                                            color: "#94a3b8",
                                                            zIndex: 2,
                                                        }}
                                                    ></i>

                                                    <input
                                                        type="number"
                                                        min="1"
                                                        max="120"
                                                        step="1"
                                                        value={
                                                            Math.max(
                                                                1,
                                                                Math.floor(
                                                                    Number(
                                                                        data.preview_duration ||
                                                                            300,
                                                                    ) / 60,
                                                                ),
                                                            )
                                                        }
                                                        onChange={
                                                            handlePreviewDurationChange
                                                        }
                                                        className={`course-input ${
                                                            errors.preview_duration
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        style={{
                                                            paddingLeft: 40,
                                                        }}
                                                        placeholder="5"
                                                    />
                                                </div>

                                                <div
                                                    style={{
                                                        marginTop: 7,
                                                        display:
                                                            "flex",
                                                        alignItems:
                                                            "flex-start",
                                                        gap: 6,
                                                        color: "#64748b",
                                                        fontSize: 11,
                                                        lineHeight: 1.5,
                                                    }}
                                                >
                                                    <i
                                                        className="bi bi-info-circle"
                                                        style={{
                                                            color:
                                                                "#2563eb",
                                                            marginTop: 1,
                                                        }}
                                                    ></i>

                                                    <span>
                                                        Learners can watch{" "}
                                                        <strong
                                                            style={{
                                                                color:
                                                                    "#2563eb",
                                                            }}
                                                        >
                                                            {
                                                                previewMinutes
                                                            }{" "}
                                                            minute
                                                            {previewMinutes !==
                                                            1
                                                                ? "s"
                                                                : ""}
                                                        </strong>{" "}
                                                        before payment is
                                                        required.
                                                    </span>
                                                </div>

                                                {errors.preview_duration && (
                                                    <div className="error-message">
                                                        {
                                                            errors.preview_duration
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Free course information */}
                                        {data.is_free && (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems:
                                                        "flex-start",
                                                    gap: 10,
                                                    padding: 13,
                                                    marginTop: 18,
                                                    border:
                                                        "1px solid #dcfce7",
                                                    borderRadius: 11,
                                                    background:
                                                        "#f0fdf4",
                                                    color: "#166534",
                                                    fontSize: 11,
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                <i
                                                    className="bi bi-check-circle-fill"
                                                    style={{
                                                        marginTop: 1,
                                                    }}
                                                ></i>

                                                <span>
                                                    This course is free.
                                                    Learners will have full
                                                    access and no preview
                                                    restriction will be
                                                    applied.
                                                </span>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>

                            {/* SIDEBAR */}
                            <div className="editor-sidebar">

                                <div className="sidebar-card">

                                    {/* Thumbnail */}
                                    <div className="editor-card">

                                        <div className="card-header">
                                            <div className="card-icon">
                                                <i className="bi bi-image"></i>
                                            </div>

                                            <div>
                                                <h2 className="card-title">
                                                    Course Thumbnail
                                                </h2>

                                                <p className="card-description">
                                                    Main course image.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="card-body">

                                            <div className="thumbnail-preview">
                                                <img
                                                    src={thumbPreview}
                                                    alt="Course thumbnail preview"
                                                />

                                                <div className="thumbnail-overlay"></div>

                                                <span className="thumbnail-label">
                                                    Preview
                                                </span>
                                            </div>

                                            <label className="upload-zone">

                                                <div className="upload-icon">
                                                    <i className="bi bi-cloud-arrow-up"></i>
                                                </div>

                                                <p className="upload-title">
                                                    Upload new thumbnail
                                                </p>

                                                <p className="upload-description">
                                                    PNG, JPG or WEBP · Max 2MB
                                                </p>

                                                <input
                                                    type="file"
                                                    accept="image/jpeg,image/png,image/jpg,image/webp"
                                                    className="d-none"
                                                    onChange={
                                                        handleThumbChange
                                                    }
                                                />
                                            </label>

                                            {errors.thumbnail && (
                                                <div className="error-message">
                                                    {
                                                        errors.thumbnail
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Live Preview */}
                                    <div className="editor-card">

                                        <div className="card-header">
                                            <div className="card-icon">
                                                <i className="bi bi-eye"></i>
                                            </div>

                                            <div>
                                                <h2 className="card-title">
                                                    Course Preview
                                                </h2>

                                                <p className="card-description">
                                                    How learners will see it.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="card-body">

                                            <div className="course-preview">

                                                <img
                                                    src={thumbPreview}
                                                    alt=""
                                                    className="preview-image"
                                                />

                                                <div className="preview-content">

                                                    <span className="preview-badge">
                                                        {data.level}
                                                    </span>

                                                    <h3 className="preview-title">
                                                        {data.title ||
                                                            "Your course title"}
                                                    </h3>

                                                    <p className="preview-description">
                                                        {data.description ||
                                                            "Your course description will appear here."}
                                                    </p>

                                                    <div className="preview-meta">

                                                        <span>
                                                            <i className="bi bi-person me-1"></i>

                                                            {selectedTalent?.name ||
                                                                "Instructor"}
                                                        </span>

                                                        <span
                                                            style={{
                                                                textAlign:
                                                                    "right",
                                                            }}
                                                        >
                                                            {data.is_free ? (
                                                                <strong
                                                                    style={{
                                                                        color:
                                                                            "#16a34a",
                                                                        fontSize:
                                                                            11,
                                                                    }}
                                                                >
                                                                    Free
                                                                </strong>
                                                            ) : (
                                                                <>
                                                                    <strong
                                                                        style={{
                                                                            display:
                                                                                "block",
                                                                            color:
                                                                                "#111827",
                                                                            fontSize:
                                                                                11,
                                                                        }}
                                                                    >
                                                                        {Number(
                                                                            data.price ||
                                                                                0,
                                                                        ).toLocaleString()}{" "}
                                                                        RWF
                                                                    </strong>

                                                                    <small
                                                                        style={{
                                                                            display:
                                                                                "block",
                                                                            marginTop:
                                                                                2,
                                                                            color:
                                                                                "#64748b",
                                                                            fontSize:
                                                                                9,
                                                                        }}
                                                                    >
                                                                        <i className="bi bi-play-circle me-1"></i>
                                                                        {
                                                                            previewMinutes
                                                                        }{" "}
                                                                        min
                                                                        preview
                                                                    </small>
                                                                </>
                                                            )}
                                                        </span>

                                                    </div>

                                                    <div className="preview-access">
                                                        <i
                                                            className={
                                                                data.is_free
                                                                    ? "bi bi-unlock-fill"
                                                                    : "bi bi-clock-history"
                                                            }
                                                        ></i>

                                                        <span>
                                                            {data.is_free
                                                                ? "Full course access included"
                                                                : `${previewMinutes} minute${previewMinutes !== 1 ? "s" : ""} free preview, then payment is required`}
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Completion */}
                                    <div className="editor-card">
                                        <div className="card-body">

                                            <div className="completion-box">

                                                <div className="completion-top">
                                                    <span>
                                                        Course setup
                                                    </span>

                                                    <strong>
                                                        Ready
                                                    </strong>
                                                </div>

                                                <div className="progress-track">
                                                    <div className="progress-fill"></div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="action-bar">

                                        <button
                                            type="submit"
                                            className="btn-save"
                                            disabled={processing}
                                        >
                                            {processing ? (
                                                <>
                                                    <span
                                                        className="spinner-border spinner-border-sm me-2"
                                                        role="status"
                                                        aria-hidden="true"
                                                    ></span>

                                                    Saving...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-check2-circle me-2"></i>

                                                    {isEdit
                                                        ? "Update Course"
                                                        : "Create Course"}
                                                </>
                                            )}
                                        </button>

                                        <Link
                                            href={route(
                                                "admin.courses.index",
                                            )}
                                            className="btn-cancel"
                                        >
                                            Cancel
                                        </Link>

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