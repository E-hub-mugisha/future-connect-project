import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Form({
    course = null,
    categories = [],
    talents = [],
}) {
    const isEdit = !!course;

    const { data, setData, post, put, processing, errors } = useForm({
        title: course?.title ?? '',
        description: course?.description ?? '',
        category_id: course?.category_id ?? '',
        talent_id: course?.talent_id ?? '',
        level: course?.level ?? 'Beginner',
        status: course?.status ?? 'draft',
        video: course?.video ?? '',
        is_free: course?.is_free ?? false,
        price: course?.price ?? 0,
        thumbnail: null,
    });

    const [thumbPreview, setThumbPreview] = useState(
        course?.thumbnail
            ? `/images/thumbnails/${course.thumbnail}`
            : '/images/placeholder-course.png'
    );

    function handleThumbChange(e) {
        const file = e.target.files[0];

        if (!file) return;

        setData('thumbnail', file);
        setThumbPreview(URL.createObjectURL(file));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (isEdit) {
            put(route('admin.courses.update', course.id), {
                forceFormData: true,
            });
        } else {
            post(route('admin.courses.store'), {
                forceFormData: true,
            });
        }
    }

    const selectedTalent = talents.find(
        talent => String(talent.id) === String(data.talent_id)
    );

    const selectedCategory = categories.find(
        category => String(category.id) === String(data.category_id)
    );

    return (
        <AppLayout>
            <Head title={isEdit ? 'Edit Course' : 'Create Course'} />

            <style>{`
                :root {
                    --ce-bg: #f6f8fc;
                    --ce-card: #ffffff;
                    --ce-border: #e5e7eb;
                    --ce-text: #111827;
                    --ce-muted: #6b7280;
                    --ce-light: #f8fafc;
                    --ce-primary: #2563eb;
                    --ce-primary-dark: #1d4ed8;
                    --ce-primary-soft: #eff6ff;
                    --ce-success: #16a34a;
                    --ce-warning: #f59e0b;
                    --ce-danger: #dc2626;
                    --ce-radius: 18px;
                    --ce-shadow: 0 10px 35px rgba(15, 23, 42, .06);
                }

                .course-editor-page {
                    min-height: 100vh;
                    background: var(--ce-bg);
                    padding: 26px 0 50px;
                }

                .course-editor-container {
                    max-width: 1500px;
                    margin: 0 auto;
                    padding: 0 25px;
                }

                /* HEADER */

                .ce-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 25px;
                }

                .ce-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 8px;
                    color: #94a3b8;
                    font-size: 12px;
                }

                .ce-breadcrumb a {
                    color: #64748b;
                    text-decoration: none;
                    font-weight: 500;
                }

                .ce-breadcrumb a:hover {
                    color: var(--ce-primary);
                }

                .ce-title {
                    margin: 0;
                    color: var(--ce-text);
                    font-size: 27px;
                    font-weight: 750;
                    letter-spacing: -.5px;
                }

                .ce-subtitle {
                    margin: 6px 0 0;
                    color: var(--ce-muted);
                    font-size: 13px;
                }

                .ce-back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 15px;
                    background: white;
                    color: #475569;
                    border: 1px solid var(--ce-border);
                    border-radius: 11px;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 650;
                    transition: .2s;
                }

                .ce-back-btn:hover {
                    color: var(--ce-primary);
                    border-color: #bfdbfe;
                    background: var(--ce-primary-soft);
                }

                /* PROGRESS */

                .ce-progress {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 25px;
                    padding: 13px 17px;
                    background: white;
                    border: 1px solid var(--ce-border);
                    border-radius: 13px;
                    box-shadow: 0 4px 15px rgba(15, 23, 42, .03);
                }

                .ce-progress-icon {
                    width: 34px;
                    height: 34px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--ce-primary);
                    background: var(--ce-primary-soft);
                    font-size: 15px;
                }

                .ce-progress-content {
                    flex: 1;
                }

                .ce-progress-title {
                    color: #334155;
                    font-size: 11px;
                    font-weight: 700;
                    margin-bottom: 6px;
                }

                .ce-progress-bar {
                    height: 5px;
                    width: 100%;
                    max-width: 360px;
                    border-radius: 10px;
                    overflow: hidden;
                    background: #e5e7eb;
                }

                .ce-progress-fill {
                    width: 75%;
                    height: 100%;
                    background: var(--ce-primary);
                    border-radius: inherit;
                }

                .ce-progress-percent {
                    color: var(--ce-primary);
                    font-size: 11px;
                    font-weight: 750;
                }

                /* LAYOUT */

                .ce-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 370px;
                    gap: 24px;
                    align-items: start;
                }

                .ce-main {
                    min-width: 0;
                }

                .ce-sidebar {
                    min-width: 0;
                }

                /* CARD */

                .ce-card {
                    background: var(--ce-card);
                    border: 1px solid var(--ce-border);
                    border-radius: var(--ce-radius);
                    box-shadow: var(--ce-shadow);
                    overflow: hidden;
                    margin-bottom: 20px;
                }

                .ce-card-header {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    padding: 20px 23px;
                    border-bottom: 1px solid #edf0f4;
                }

                .ce-card-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 11px;
                    background: var(--ce-primary-soft);
                    color: var(--ce-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 17px;
                    flex-shrink: 0;
                }

                .ce-card-title {
                    margin: 0;
                    color: var(--ce-text);
                    font-size: 14px;
                    font-weight: 750;
                }

                .ce-card-description {
                    margin: 3px 0 0;
                    color: #94a3b8;
                    font-size: 11px;
                }

                .ce-card-body {
                    padding: 23px;
                }

                /* FORM */

                .ce-field {
                    margin-bottom: 20px;
                }

                .ce-field:last-child {
                    margin-bottom: 0;
                }

                .ce-label {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    margin-bottom: 7px;
                    color: #374151;
                    font-size: 12px;
                    font-weight: 700;
                }

                .ce-label-hint {
                    color: #9ca3af;
                    font-size: 10px;
                    font-weight: 400;
                }

                .ce-required {
                    color: var(--ce-danger);
                }

                .ce-input,
                .ce-select,
                .ce-textarea {
                    width: 100%;
                    border: 1px solid #dfe4ea;
                    border-radius: 11px;
                    background: #fff;
                    color: #111827;
                    font-size: 13px;
                    outline: none;
                    transition: .2s;
                }

                .ce-input,
                .ce-select {
                    height: 46px;
                    padding: 0 14px;
                }

                .ce-textarea {
                    min-height: 145px;
                    padding: 13px 14px;
                    resize: vertical;
                    line-height: 1.6;
                }

                .ce-input::placeholder,
                .ce-textarea::placeholder {
                    color: #a8b0bb;
                }

                .ce-input:focus,
                .ce-select:focus,
                .ce-textarea:focus {
                    border-color: #93c5fd;
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, .08);
                }

                .ce-invalid {
                    border-color: #fca5a5 !important;
                }

                .ce-error {
                    margin-top: 5px;
                    color: var(--ce-danger);
                    font-size: 10px;
                }

                .ce-two-columns {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 18px;
                }

                /* INPUT WITH ICON */

                .ce-input-wrapper {
                    position: relative;
                }

                .ce-input-icon {
                    position: absolute;
                    left: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94a3b8;
                    font-size: 14px;
                    pointer-events: none;
                }

                .ce-input-with-icon {
                    padding-left: 40px;
                }

                /* STATUS */

                .ce-status-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .ce-status-option {
                    position: relative;
                }

                .ce-status-option input {
                    position: absolute;
                    opacity: 0;
                    pointer-events: none;
                }

                .ce-status-label {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    min-height: 46px;
                    padding: 0 12px;
                    border: 1px solid var(--ce-border);
                    border-radius: 10px;
                    cursor: pointer;
                    color: #64748b;
                    font-size: 11px;
                    font-weight: 650;
                    transition: .2s;
                }

                .ce-status-label:hover {
                    border-color: #bfdbfe;
                }

                .ce-status-option input:checked + .ce-status-label {
                    border-color: #93c5fd;
                    color: var(--ce-primary);
                    background: var(--ce-primary-soft);
                }

                .ce-status-dot {
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background: #94a3b8;
                }

                .ce-status-dot.published {
                    background: var(--ce-success);
                }

                /* THUMBNAIL */

                .ce-thumbnail {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    border-radius: 14px;
                    background: #f1f5f9;
                    border: 1px solid var(--ce-border);
                    margin-bottom: 14px;
                }

                .ce-thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .ce-thumbnail-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0,0,0,.4),
                        transparent 60%
                    );
                }

                .ce-preview-tag {
                    position: absolute;
                    left: 11px;
                    bottom: 10px;
                    padding: 5px 8px;
                    border-radius: 6px;
                    background: rgba(0,0,0,.55);
                    color: #fff;
                    font-size: 9px;
                    font-weight: 700;
                }

                .ce-upload {
                    display: block;
                    padding: 18px;
                    border: 1.5px dashed #cbd5e1;
                    border-radius: 13px;
                    background: #fafbfc;
                    text-align: center;
                    cursor: pointer;
                    transition: .2s;
                }

                .ce-upload:hover {
                    border-color: #93c5fd;
                    background: var(--ce-primary-soft);
                }

                .ce-upload-icon {
                    width: 42px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 9px;
                    border-radius: 11px;
                    background: #eaf2ff;
                    color: var(--ce-primary);
                    font-size: 18px;
                }

                .ce-upload-title {
                    margin: 0 0 3px;
                    color: #475569;
                    font-size: 11px;
                    font-weight: 700;
                }

                .ce-upload-subtitle {
                    margin: 0;
                    color: #94a3b8;
                    font-size: 9px;
                }

                /* PRICING */

                .ce-free-box {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 14px;
                    border: 1px solid var(--ce-border);
                    border-radius: 12px;
                    background: #fafbfc;
                    margin-bottom: 18px;
                }

                .ce-free-title {
                    margin: 0;
                    color: #374151;
                    font-size: 11px;
                    font-weight: 700;
                }

                .ce-free-description {
                    margin: 3px 0 0;
                    color: #9ca3af;
                    font-size: 9px;
                }

                /* CUSTOM SWITCH */

                .ce-switch {
                    position: relative;
                    width: 42px;
                    height: 23px;
                    flex-shrink: 0;
                }

                .ce-switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .ce-switch-slider {
                    position: absolute;
                    inset: 0;
                    cursor: pointer;
                    border-radius: 30px;
                    background: #d1d5db;
                    transition: .2s;
                }

                .ce-switch-slider:before {
                    content: "";
                    position: absolute;
                    width: 17px;
                    height: 17px;
                    left: 3px;
                    top: 3px;
                    border-radius: 50%;
                    background: white;
                    box-shadow: 0 1px 3px rgba(0,0,0,.2);
                    transition: .2s;
                }

                .ce-switch input:checked + .ce-switch-slider {
                    background: var(--ce-primary);
                }

                .ce-switch input:checked + .ce-switch-slider:before {
                    transform: translateX(19px);
                }

                .ce-price-disabled {
                    opacity: .45;
                }

                /* PREVIEW */

                .ce-course-preview {
                    overflow: hidden;
                    border: 1px solid var(--ce-border);
                    border-radius: 14px;
                    background: white;
                }

                .ce-course-preview-image {
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    display: block;
                    object-fit: cover;
                }

                .ce-course-preview-content {
                    padding: 15px;
                }

                .ce-course-preview-category {
                    display: inline-flex;
                    padding: 4px 8px;
                    border-radius: 6px;
                    color: var(--ce-primary);
                    background: var(--ce-primary-soft);
                    font-size: 9px;
                    font-weight: 750;
                    text-transform: uppercase;
                    letter-spacing: .3px;
                }

                .ce-course-preview-title {
                    margin: 9px 0 5px;
                    color: var(--ce-text);
                    font-size: 15px;
                    font-weight: 750;
                    line-height: 1.35;
                }

                .ce-course-preview-description {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin: 0;
                    color: #64748b;
                    font-size: 10px;
                    line-height: 1.55;
                }

                .ce-course-preview-meta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    margin-top: 14px;
                    padding-top: 12px;
                    border-top: 1px solid #edf0f4;
                }

                .ce-preview-instructor {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    min-width: 0;
                    color: #64748b;
                    font-size: 9px;
                }

                .ce-preview-instructor i {
                    color: var(--ce-primary);
                }

                .ce-preview-price {
                    color: var(--ce-primary);
                    font-size: 10px;
                    font-weight: 750;
                    white-space: nowrap;
                }

                /* SAVE */

                .ce-actions {
                    display: flex;
                    gap: 10px;
                }

                .ce-save {
                    flex: 1;
                    height: 46px;
                    border: none;
                    border-radius: 11px;
                    background: var(--ce-primary);
                    color: white;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: .2s;
                }

                .ce-save:hover:not(:disabled) {
                    background: var(--ce-primary-dark);
                    transform: translateY(-1px);
                }

                .ce-save:disabled {
                    opacity: .65;
                    cursor: not-allowed;
                }

                .ce-cancel {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 82px;
                    height: 46px;
                    padding: 0 14px;
                    border: 1px solid var(--ce-border);
                    border-radius: 11px;
                    background: white;
                    color: #64748b;
                    font-size: 12px;
                    font-weight: 650;
                    text-decoration: none;
                }

                .ce-cancel:hover {
                    background: #f8fafc;
                    color: #334155;
                }

                /* TIPS */

                .ce-tip {
                    padding: 15px;
                    border-radius: 13px;
                    background: linear-gradient(
                        135deg,
                        #eff6ff,
                        #f8fbff
                    );
                    border: 1px solid #dbeafe;
                }

                .ce-tip-title {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    margin-bottom: 7px;
                    color: #1e40af;
                    font-size: 10px;
                    font-weight: 750;
                }

                .ce-tip-text {
                    margin: 0;
                    color: #64748b;
                    font-size: 9px;
                    line-height: 1.55;
                }

                /* MOBILE */

                @media (max-width: 1050px) {
                    .ce-layout {
                        grid-template-columns: minmax(0, 1fr) 320px;
                    }
                }

                @media (max-width: 900px) {
                    .ce-layout {
                        grid-template-columns: 1fr;
                    }

                    .ce-sidebar {
                        order: -1;
                    }
                }

                @media (max-width: 650px) {
                    .course-editor-page {
                        padding-top: 18px;
                    }

                    .course-editor-container {
                        padding: 0 14px;
                    }

                    .ce-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .ce-title {
                        font-size: 23px;
                    }

                    .ce-back-btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .ce-progress {
                        align-items: flex-start;
                    }

                    .ce-two-columns {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }

                    .ce-card-header,
                    .ce-card-body {
                        padding: 18px;
                    }

                    .ce-status-grid {
                        grid-template-columns: 1fr;
                    }

                    .ce-actions {
                        flex-direction: column;
                    }

                    .ce-cancel {
                        width: 100%;
                    }
                }
            `}</style>

            <div className="course-editor-page">
                <div className="course-editor-container">

                    {/* =========================================
                        HEADER
                    ========================================== */}
                    <div className="ce-header">
                        <div>
                            <div className="ce-breadcrumb">
                                <Link href={route('admin.courses.index')}>
                                    Courses
                                </Link>

                                <i className="bi bi-chevron-right"></i>

                                <span>
                                    {isEdit
                                        ? 'Edit Course'
                                        : 'Create Course'}
                                </span>
                            </div>

                            <h1 className="ce-title">
                                {isEdit
                                    ? 'Edit Course'
                                    : 'Create New Course'}
                            </h1>

                            <p className="ce-subtitle">
                                {isEdit
                                    ? 'Update your course content and settings.'
                                    : 'Create a professional learning experience for your students.'}
                            </p>
                        </div>

                        <Link
                            href={route('admin.courses.index')}
                            className="ce-back-btn"
                        >
                            <i className="bi bi-arrow-left"></i>
                            Back to Courses
                        </Link>
                    </div>

                    {/* =========================================
                        PROGRESS
                    ========================================== */}
                    <div className="ce-progress">
                        <div className="ce-progress-icon">
                            <i className="bi bi-check2-circle"></i>
                        </div>

                        <div className="ce-progress-content">
                            <div className="ce-progress-title">
                                Course setup
                            </div>

                            <div className="ce-progress-bar">
                                <div className="ce-progress-fill"></div>
                            </div>
                        </div>

                        <div className="ce-progress-percent">
                            75% ready
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <div className="ce-layout">

                            {/* =====================================
                                MAIN FORM
                            ====================================== */}
                            <main className="ce-main">

                                {/* BASIC INFORMATION */}
                                <section className="ce-card">

                                    <div className="ce-card-header">
                                        <div className="ce-card-icon">
                                            <i className="bi bi-journal-text"></i>
                                        </div>

                                        <div>
                                            <h2 className="ce-card-title">
                                                Basic Information
                                            </h2>

                                            <p className="ce-card-description">
                                                Introduce learners to your course.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="ce-card-body">

                                        <div className="ce-field">
                                            <label className="ce-label">
                                                <span>
                                                    Course Title{' '}
                                                    <span className="ce-required">
                                                        *
                                                    </span>
                                                </span>

                                                <span className="ce-label-hint">
                                                    Clear and descriptive
                                                </span>
                                            </label>

                                            <input
                                                type="text"
                                                value={data.title}
                                                onChange={e =>
                                                    setData(
                                                        'title',
                                                        e.target.value
                                                    )
                                                }
                                                className={`ce-input ${
                                                    errors.title
                                                        ? 'ce-invalid'
                                                        : ''
                                                }`}
                                                placeholder="e.g. Introduction to Web Development"
                                            />

                                            {errors.title && (
                                                <div className="ce-error">
                                                    {errors.title}
                                                </div>
                                            )}
                                        </div>

                                        <div className="ce-field">
                                            <label className="ce-label">
                                                Description
                                                <span className="ce-label-hint">
                                                    Explain what students will learn
                                                </span>
                                            </label>

                                            <textarea
                                                value={data.description}
                                                onChange={e =>
                                                    setData(
                                                        'description',
                                                        e.target.value
                                                    )
                                                }
                                                className={`ce-textarea ${
                                                    errors.description
                                                        ? 'ce-invalid'
                                                        : ''
                                                }`}
                                                placeholder="Write a short and engaging description of your course..."
                                            />

                                            {errors.description && (
                                                <div className="ce-error">
                                                    {errors.description}
                                                </div>
                                            )}
                                        </div>

                                        <div className="ce-two-columns">

                                            <div className="ce-field">
                                                <label className="ce-label">
                                                    Category{' '}
                                                    <span className="ce-required">
                                                        *
                                                    </span>
                                                </label>

                                                <select
                                                    value={data.category_id}
                                                    onChange={e =>
                                                        setData(
                                                            'category_id',
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`ce-select ${
                                                        errors.category_id
                                                            ? 'ce-invalid'
                                                            : ''
                                                    }`}
                                                >
                                                    <option value="">
                                                        Select category
                                                    </option>

                                                    {categories.map(
                                                        category => (
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
                                                        )
                                                    )}
                                                </select>

                                                {errors.category_id && (
                                                    <div className="ce-error">
                                                        {
                                                            errors.category_id
                                                        }
                                                    </div>
                                                )}
                                            </div>

                                            <div className="ce-field">
                                                <label className="ce-label">
                                                    Instructor / Talent{' '}
                                                    <span className="ce-required">
                                                        *
                                                    </span>
                                                </label>

                                                <select
                                                    value={data.talent_id}
                                                    onChange={e =>
                                                        setData(
                                                            'talent_id',
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`ce-select ${
                                                        errors.talent_id
                                                            ? 'ce-invalid'
                                                            : ''
                                                    }`}
                                                >
                                                    <option value="">
                                                        Select instructor
                                                    </option>

                                                    {talents.map(talent => (
                                                        <option
                                                            key={talent.id}
                                                            value={talent.id}
                                                        >
                                                            {talent.name}
                                                        </option>
                                                    ))}
                                                </select>

                                                {errors.talent_id && (
                                                    <div className="ce-error">
                                                        {errors.talent_id}
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </section>

                                {/* COURSE DETAILS */}
                                <section className="ce-card">

                                    <div className="ce-card-header">
                                        <div className="ce-card-icon">
                                            <i className="bi bi-sliders"></i>
                                        </div>

                                        <div>
                                            <h2 className="ce-card-title">
                                                Course Details
                                            </h2>

                                            <p className="ce-card-description">
                                                Configure how your course is delivered.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="ce-card-body">

                                        <div className="ce-two-columns">

                                            <div className="ce-field">
                                                <label className="ce-label">
                                                    Difficulty Level
                                                </label>

                                                <select
                                                    value={data.level}
                                                    onChange={e =>
                                                        setData(
                                                            'level',
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`ce-select ${
                                                        errors.level
                                                            ? 'ce-invalid'
                                                            : ''
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
                                                    <div className="ce-error">
                                                        {errors.level}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="ce-field">
                                                <label className="ce-label">
                                                    Course Status{' '}
                                                    <span className="ce-required">
                                                        *
                                                    </span>
                                                </label>

                                                <div className="ce-status-grid">

                                                    <div className="ce-status-option">
                                                        <input
                                                            type="radio"
                                                            id="statusDraft"
                                                            name="status"
                                                            checked={
                                                                data.status ===
                                                                'draft'
                                                            }
                                                            onChange={() =>
                                                                setData(
                                                                    'status',
                                                                    'draft'
                                                                )
                                                            }
                                                        />

                                                        <label
                                                            htmlFor="statusDraft"
                                                            className="ce-status-label"
                                                        >
                                                            <span className="ce-status-dot"></span>
                                                            Draft
                                                        </label>
                                                    </div>

                                                    <div className="ce-status-option">
                                                        <input
                                                            type="radio"
                                                            id="statusPublished"
                                                            name="status"
                                                            checked={
                                                                data.status ===
                                                                'published'
                                                            }
                                                            onChange={() =>
                                                                setData(
                                                                    'status',
                                                                    'published'
                                                                )
                                                            }
                                                        />

                                                        <label
                                                            htmlFor="statusPublished"
                                                            className="ce-status-label"
                                                        >
                                                            <span className="ce-status-dot published"></span>
                                                            Published
                                                        </label>
                                                    </div>

                                                </div>

                                                {errors.status && (
                                                    <div className="ce-error">
                                                        {errors.status}
                                                    </div>
                                                )}
                                            </div>

                                        </div>

                                        <div className="ce-field">
                                            <label className="ce-label">
                                                Course Video
                                                <span className="ce-label-hint">
                                                    YouTube, Vimeo or hosted video
                                                </span>
                                            </label>

                                            <div className="ce-input-wrapper">
                                                <i className="bi bi-play-circle ce-input-icon"></i>

                                                <input
                                                    type="url"
                                                    value={data.video}
                                                    onChange={e =>
                                                        setData(
                                                            'video',
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`ce-input ce-input-with-icon ${
                                                        errors.video
                                                            ? 'ce-invalid'
                                                            : ''
                                                    }`}
                                                    placeholder="https://..."
                                                />
                                            </div>

                                            {errors.video && (
                                                <div className="ce-error">
                                                    {errors.video}
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </section>

                                {/* PRICING */}
                                <section className="ce-card">

                                    <div className="ce-card-header">
                                        <div className="ce-card-icon">
                                            <i className="bi bi-wallet2"></i>
                                        </div>

                                        <div>
                                            <h2 className="ce-card-title">
                                                Pricing
                                            </h2>

                                            <p className="ce-card-description">
                                                Choose how learners access this course.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="ce-card-body">

                                        <div className="ce-free-box">

                                            <div>
                                                <p className="ce-free-title">
                                                    Free Course
                                                </p>

                                                <p className="ce-free-description">
                                                    Allow learners to access this course for free.
                                                </p>
                                            </div>

                                            <label className="ce-switch">
                                                <input
                                                    type="checkbox"
                                                    checked={data.is_free}
                                                    onChange={e =>
                                                        setData(
                                                            'is_free',
                                                            e.target.checked
                                                        )
                                                    }
                                                />

                                                <span className="ce-switch-slider"></span>
                                            </label>

                                        </div>

                                        <div
                                            className={
                                                data.is_free
                                                    ? 'ce-price-disabled'
                                                    : ''
                                            }
                                        >
                                            <label className="ce-label">
                                                Course Price
                                                <span className="ce-label-hint">
                                                    RWF
                                                </span>
                                            </label>

                                            <div className="ce-input-wrapper">
                                                <span
                                                    className="ce-input-icon"
                                                    style={{
                                                        fontSize: 10,
                                                        fontWeight: 750,
                                                    }}
                                                >
                                                    RWF
                                                </span>

                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    value={data.price}
                                                    onChange={e =>
                                                        setData(
                                                            'price',
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`ce-input ce-input-with-icon ${
                                                        errors.price
                                                            ? 'ce-invalid'
                                                            : ''
                                                    }`}
                                                    placeholder="0.00"
                                                    disabled={data.is_free}
                                                />
                                            </div>

                                            {errors.price && (
                                                <div className="ce-error">
                                                    {errors.price}
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </section>

                            </main>

                            {/* =====================================
                                SIDEBAR
                            ====================================== */}
                            <aside className="ce-sidebar">

                                {/* THUMBNAIL */}
                                <section className="ce-card">

                                    <div className="ce-card-header">
                                        <div className="ce-card-icon">
                                            <i className="bi bi-image"></i>
                                        </div>

                                        <div>
                                            <h2 className="ce-card-title">
                                                Course Thumbnail
                                            </h2>

                                            <p className="ce-card-description">
                                                Main visual for your course.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="ce-card-body">

                                        <div className="ce-thumbnail">
                                            <img
                                                src={thumbPreview}
                                                alt="Course thumbnail preview"
                                            />

                                            <div className="ce-thumbnail-overlay"></div>

                                            <span className="ce-preview-tag">
                                                Preview
                                            </span>
                                        </div>

                                        <label className="ce-upload">

                                            <div className="ce-upload-icon">
                                                <i className="bi bi-cloud-arrow-up"></i>
                                            </div>

                                            <p className="ce-upload-title">
                                                Upload course thumbnail
                                            </p>

                                            <p className="ce-upload-subtitle">
                                                PNG, JPG or WEBP · Maximum 2MB
                                            </p>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="d-none"
                                                onChange={handleThumbChange}
                                            />

                                        </label>

                                        {errors.thumbnail && (
                                            <div className="ce-error">
                                                {errors.thumbnail}
                                            </div>
                                        )}

                                    </div>
                                </section>

                                {/* LIVE PREVIEW */}
                                <section className="ce-card">

                                    <div className="ce-card-header">
                                        <div className="ce-card-icon">
                                            <i className="bi bi-eye"></i>
                                        </div>

                                        <div>
                                            <h2 className="ce-card-title">
                                                Course Preview
                                            </h2>

                                            <p className="ce-card-description">
                                                Learner-facing preview.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="ce-card-body">

                                        <div className="ce-course-preview">

                                            <img
                                                src={thumbPreview}
                                                alt=""
                                                className="ce-course-preview-image"
                                            />

                                            <div className="ce-course-preview-content">

                                                <span className="ce-course-preview-category">
                                                    {selectedCategory?.name ||
                                                        data.level}
                                                </span>

                                                <h3 className="ce-course-preview-title">
                                                    {data.title ||
                                                        'Your course title'}
                                                </h3>

                                                <p className="ce-course-preview-description">
                                                    {data.description ||
                                                        'Your course description will appear here once you add it.'}
                                                </p>

                                                <div className="ce-course-preview-meta">

                                                    <div className="ce-preview-instructor">
                                                        <i className="bi bi-person-circle"></i>

                                                        <span>
                                                            {selectedTalent?.name ||
                                                                'Instructor'}
                                                        </span>
                                                    </div>

                                                    <div className="ce-preview-price">
                                                        {data.is_free
                                                            ? 'FREE'
                                                            : `${Number(
                                                                  data.price ||
                                                                      0
                                                              ).toLocaleString()} RWF`}
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </section>

                                {/* QUICK TIP */}
                                <div className="ce-card">
                                    <div className="ce-card-body">

                                        <div className="ce-tip">

                                            <div className="ce-tip-title">
                                                <i className="bi bi-lightbulb"></i>
                                                Course tip
                                            </div>

                                            <p className="ce-tip-text">
                                                Use a clear course title,
                                                attractive thumbnail and concise
                                                description to help learners
                                                understand what they will gain.
                                            </p>

                                        </div>

                                    </div>
                                </div>

                                {/* ACTIONS */}
                                <div className="ce-actions">

                                    <button
                                        type="submit"
                                        className="ce-save"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                ></span>

                                                Saving Course...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-check2-circle me-2"></i>

                                                {isEdit
                                                    ? 'Update Course'
                                                    : 'Create Course'}
                                            </>
                                        )}
                                    </button>

                                    <Link
                                        href={route(
                                            'admin.courses.index'
                                        )}
                                        className="ce-cancel"
                                    >
                                        Cancel
                                    </Link>

                                </div>

                            </aside>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}