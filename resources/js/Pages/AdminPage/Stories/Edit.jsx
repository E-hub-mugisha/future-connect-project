import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const styles = `
    :root {
        --edit-bg: #f6f8fb;
        --edit-card: #ffffff;
        --edit-border: #e5eaf0;
        --edit-text: #17202a;
        --edit-muted: #718096;
        --edit-primary: #059669;
        --edit-primary-dark: #047857;
        --edit-primary-soft: #ecfdf5;
        --edit-warning: #d97706;
        --edit-warning-soft: #fffbeb;
        --edit-danger: #dc2626;
        --edit-input: #ffffff;
        --edit-radius: 18px;
        --edit-shadow: 0 8px 30px rgba(15, 23, 42, .06);
    }

    .story-edit-page {
        min-height: 100vh;
        background: var(--edit-bg);
        padding: 30px;
        color: var(--edit-text);
    }

    .story-edit-container {
        max-width: 1250px;
        margin: 0 auto;
    }

    .edit-page-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 26px;
    }

    .edit-breadcrumb {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #94a3b8;
        font-size: 12px;
        margin-bottom: 10px;
    }

    .edit-breadcrumb a {
        color: #64748b;
        text-decoration: none;
    }

    .edit-breadcrumb a:hover {
        color: var(--edit-primary);
    }

    .edit-mode-badge {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 6px 10px;
        background: var(--edit-warning-soft);
        border: 1px solid #fde68a;
        color: var(--edit-warning);
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .05em;
        margin-bottom: 10px;
    }

    .edit-page-title {
        margin: 0;
        color: var(--edit-text);
        font-size: 28px;
        line-height: 1.2;
        font-weight: 800;
        letter-spacing: -.03em;
    }

    .edit-page-subtitle {
        margin: 7px 0 0;
        color: var(--edit-muted);
        font-size: 14px;
    }

    .edit-back-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 42px;
        padding: 0 15px;
        border: 1px solid var(--edit-border);
        border-radius: 10px;
        background: #fff;
        color: #475569;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
        transition: all .18s ease;
    }

    .edit-back-btn:hover {
        color: var(--edit-text);
        border-color: #cbd5e1;
        transform: translateY(-1px);
        box-shadow: 0 5px 14px rgba(15,23,42,.05);
    }

    .edit-card {
        background: var(--edit-card);
        border: 1px solid var(--edit-border);
        border-radius: 20px;
        box-shadow: var(--edit-shadow);
        overflow: hidden;
    }

    .edit-card-header {
        display: flex;
        align-items: center;
        gap: 13px;
        padding: 20px 24px;
        border-bottom: 1px solid var(--edit-border);
        background: linear-gradient(135deg, #fffbeb 0%, #ffffff 70%);
    }

    .edit-card-icon {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: var(--edit-warning-soft);
        color: var(--edit-warning);
        border: 1px solid #fde68a;
        flex-shrink: 0;
    }

    .edit-card-title {
        margin: 0;
        color: var(--edit-text);
        font-size: 15px;
        font-weight: 800;
    }

    .edit-card-subtitle {
        margin: 4px 0 0;
        color: #94a3b8;
        font-size: 12px;
    }

    .edit-card-body {
        padding: 28px;
    }

    .edit-section {
        margin-bottom: 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid #edf1f5;
    }

    .edit-section:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }

    .section-heading {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
    }

    .section-number {
        width: 29px;
        height: 29px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9px;
        background: var(--edit-primary-soft);
        color: var(--edit-primary-dark);
        font-size: 11px;
        font-weight: 900;
        flex-shrink: 0;
    }

    .section-heading-text h3 {
        margin: 0;
        color: var(--edit-text);
        font-size: 14px;
        font-weight: 800;
    }

    .section-heading-text p {
        margin: 3px 0 0;
        color: #94a3b8;
        font-size: 11px;
    }

    .edit-field {
        margin-bottom: 18px;
    }

    .edit-field:last-child {
        margin-bottom: 0;
    }

    .edit-field-row {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
    }

    .edit-label {
        display: block;
        margin-bottom: 7px;
        color: #475569;
        font-size: 12px;
        font-weight: 800;
    }

    .required {
        color: var(--edit-danger);
    }

    .edit-input,
    .edit-select,
    .edit-textarea {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #dce2e8;
        background: var(--edit-input);
        border-radius: 11px;
        padding: 11px 13px;
        color: #1e293b;
        font-family: inherit;
        font-size: 13px;
        outline: none;
        transition: all .18s ease;
    }

    .edit-input::placeholder,
    .edit-textarea::placeholder {
        color: #a0aec0;
    }

    .edit-input:focus,
    .edit-select:focus,
    .edit-textarea:focus {
        border-color: #6ee7b7;
        box-shadow: 0 0 0 3px rgba(5,150,105,.08);
    }

    .edit-select {
        cursor: pointer;
    }

    .edit-textarea {
        min-height: 190px;
        resize: vertical;
        line-height: 1.7;
    }

    .field-help {
        margin-top: 6px;
        color: #94a3b8;
        font-size: 11px;
    }

    .field-error {
        margin-top: 6px;
        color: var(--edit-danger);
        font-size: 11px;
        font-weight: 600;
    }

    .thumbnail-box {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 14px;
        border: 1px solid var(--edit-border);
        background: #f8fafc;
        margin-bottom: 12px;
    }

    .thumbnail-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .thumbnail-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to top,
            rgba(15,23,42,.4),
            transparent 55%
        );
        pointer-events: none;
    }

    .current-thumbnail-label {
        position: absolute;
        left: 12px;
        bottom: 12px;
        display: inline-flex;
        align-items: center;
        padding: 6px 9px;
        border-radius: 999px;
        background: rgba(255,255,255,.93);
        color: #475569;
        font-size: 10px;
        font-weight: 800;
    }

    .thumbnail-placeholder {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7px;
        color: #94a3b8;
        font-size: 12px;
    }

    .file-upload {
        position: relative;
        min-height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        padding: 15px;
        border: 1.5px dashed #cbd5e1;
        border-radius: 13px;
        background: #fafbfc;
        color: #64748b;
        text-align: center;
        cursor: pointer;
        transition: all .18s ease;
        box-sizing: border-box;
    }

    .file-upload:hover {
        border-color: #6ee7b7;
        background: var(--edit-primary-soft);
        color: var(--edit-primary-dark);
    }

    .file-upload.has-file {
        border-color: #86efac;
        background: var(--edit-primary-soft);
        color: var(--edit-primary-dark);
    }

    .file-upload strong {
        font-size: 12px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .file-upload span {
        font-size: 10px;
        color: #94a3b8;
    }

    .file-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
    }

    .status-options {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
    }

    .status-option {
        position: relative;
    }

    .status-option input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }

    .status-label {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        padding: 8px 10px;
        border: 1px solid #dce2e8;
        border-radius: 10px;
        background: #fff;
        color: #64748b;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition: all .18s ease;
    }

    .status-label:hover {
        border-color: #cbd5e1;
    }

    .status-option input:checked + .status-label {
        border-color: #6ee7b7;
        background: var(--edit-primary-soft);
        color: var(--edit-primary-dark);
        box-shadow: 0 0 0 2px rgba(5,150,105,.05);
    }

    .story-preview {
        margin-top: 20px;
        padding: 16px;
        border: 1px solid #e5eaf0;
        border-radius: 14px;
        background: #fafbfc;
    }

    .preview-label {
        margin-bottom: 10px;
        color: #94a3b8;
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .08em;
    }

    .preview-card {
        display: flex;
        gap: 14px;
        padding: 13px;
        border: 1px solid #e5eaf0;
        border-radius: 12px;
        background: #fff;
    }

    .preview-image {
        width: 115px;
        height: 75px;
        flex-shrink: 0;
        border-radius: 9px;
        overflow: hidden;
        background: #f1f5f9;
    }

    .preview-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .preview-info {
        min-width: 0;
    }

    .preview-category {
        color: var(--edit-primary);
        font-size: 9px;
        font-weight: 800;
        text-transform: uppercase;
        margin-bottom: 4px;
    }

    .preview-title {
        margin: 0 0 5px;
        color: #1e293b;
        font-size: 13px;
        font-weight: 800;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .preview-text {
        margin: 0;
        color: #94a3b8;
        font-size: 10px;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .edit-form-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        padding-top: 24px;
        border-top: 1px solid #edf1f5;
    }

    .footer-info {
        color: #94a3b8;
        font-size: 11px;
    }

    .footer-actions {
        display: flex;
        align-items: center;
        gap: 9px;
    }

    .cancel-btn,
    .update-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 43px;
        padding: 0 17px;
        border-radius: 10px;
        font-family: inherit;
        font-size: 13px;
        font-weight: 800;
        text-decoration: none;
        cursor: pointer;
        transition: all .18s ease;
    }

    .cancel-btn {
        background: #fff;
        border: 1px solid #dce2e8;
        color: #64748b;
    }

    .cancel-btn:hover {
        color: #1e293b;
        border-color: #cbd5e1;
    }

    .update-btn {
        background: var(--edit-primary);
        border: 1px solid var(--edit-primary);
        color: #fff;
        box-shadow: 0 5px 15px rgba(5,150,105,.16);
    }

    .update-btn:hover {
        background: var(--edit-primary-dark);
        border-color: var(--edit-primary-dark);
        transform: translateY(-1px);
    }

    .update-btn:disabled {
        opacity: .65;
        cursor: not-allowed;
        transform: none;
    }

    @media (max-width: 800px) {
        .story-edit-page {
            padding: 20px 14px;
        }

        .edit-page-header {
            flex-direction: column;
        }

        .edit-back-btn {
            width: 100%;
            justify-content: center;
        }

        .edit-field-row {
            grid-template-columns: 1fr;
        }

        .status-options {
            grid-template-columns: repeat(2, 1fr);
        }

        .edit-card-body {
            padding: 20px;
        }

        .edit-form-footer {
            flex-direction: column;
            align-items: stretch;
        }

        .footer-actions {
            width: 100%;
        }

        .cancel-btn,
        .update-btn {
            flex: 1;
        }
    }

    @media (max-width: 500px) {
        .edit-page-title {
            font-size: 23px;
        }

        .preview-card {
            flex-direction: column;
        }

        .preview-image {
            width: 100%;
            height: 130px;
        }
    }
`;

const Icon = ({ name, size = 18, stroke = 1.8 }) => {
    const icons = {
        arrowLeft: (
            <>
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
            </>
        ),

        pencil: (
            <>
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </>
        ),

        writing: (
            <>
                <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3Z" />
                <path d="m13.5 6.5 4 4" />
            </>
        ),

        image: (
            <>
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="8.5" cy="9" r="1.5" />
                <path d="m21 15-5-5L5 20" />
            </>
        ),

        upload: (
            <>
                <path d="M12 16V4" />
                <path d="m7 9 5-5 5 5" />
                <path d="M5 20h14" />
            </>
        ),

        save: (
            <>
                <path d="M5 3h12l3 3v15H4V3Z" />
                <path d="M8 3v6h8V3" />
                <path d="M8 21v-7h8v7" />
            </>
        ),
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {icons[name]}
        </svg>
    );
};

function assetUrl(value) {
    if (!value) {
        return '';
    }

    const stringValue = String(value);

    if (/^https?:\/\//i.test(stringValue)) {
        return stringValue;
    }

    if (stringValue.charAt(0) === '/') {
        return stringValue;
    }

    return '/' + stringValue;
}

export default function Edit({
    story,
    talents = [],
    categories = [],
}) {
    const initialThumbnail = assetUrl(story?.thumbnail);

    const [thumbnailPreview, setThumbnailPreview] = useState(
        initialThumbnail || null
    );

    const [selectedFileName, setSelectedFileName] = useState('');

    const {
        data,
        setData,
        put,
        processing,
        errors,
    } = useForm({
        title: story?.title ?? '',
        talent_id: story?.talent_id ?? '',
        category_id: story?.category_id ?? '',
        content: story?.content ?? '',
        thumbnail: null,
        media: story?.media ?? '',
        tags: story?.tags ?? '',
        status: story?.status ?? 'pending',
    });

    function handleThumbnailChange(event) {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        // Optional client-side validation
        if (!file.type.startsWith('image/')) {
            return;
        }

        setData('thumbnail', file);
        setSelectedFileName(file.name);

        const reader = new FileReader();

        reader.onload = function (e) {
            setThumbnailPreview(e.target?.result || null);
        };

        reader.readAsDataURL(file);
    }

    function handleSubmit(event) {
        event.preventDefault();

        put(route('admin.stories.update', story.id), {
            forceFormData: true,
            preserveScroll: true,
        });
    }

    const selectedCategory = categories.find(
        (category) =>
            String(category.id) === String(data.category_id)
    );

    const statuses = [
        'pending',
        'approved',
        'rejected',
        'published',
    ];

    const formattedStatus = function (status) {
        return status.charAt(0).toUpperCase() + status.slice(1);
    };

    return (
        <AppLayout>
            <Head
                title={
                    'Edit Story - ' +
                    (story?.title || '')
                }
            />

            <style>{styles}</style>

            <div className="story-edit-page">
                <div className="story-edit-container">

                    {/* Header */}
                    <div className="edit-page-header">
                        <div>
                            <div className="edit-breadcrumb">
                                <Link
                                    href={route(
                                        'admin.stories.index'
                                    )}
                                >
                                    Stories
                                </Link>

                                <span>/</span>

                                <span>Edit</span>
                            </div>

                            <div className="edit-mode-badge">
                                <Icon
                                    name="pencil"
                                    size={13}
                                />

                                Edit Mode
                            </div>

                            <h1 className="edit-page-title">
                                Edit Story
                            </h1>

                            <p className="edit-page-subtitle">
                                Update the details below to modify
                                this story.
                            </p>
                        </div>

                        <Link
                            href={route(
                                'admin.stories.index'
                            )}
                            className="edit-back-btn"
                        >
                            <Icon
                                name="arrowLeft"
                                size={16}
                            />

                            Back to Stories
                        </Link>
                    </div>

                    {/* Main Card */}
                    <div className="edit-card">

                        {/* Card Header */}
                        <div className="edit-card-header">
                            <div className="edit-card-icon">
                                <Icon
                                    name="pencil"
                                    size={19}
                                />
                            </div>

                            <div>
                                <h2 className="edit-card-title">
                                    {story?.title ||
                                        'Untitled Story'}
                                </h2>

                                <p className="edit-card-subtitle">
                                    Editing story #
                                    {story?.id}
                                </p>
                            </div>
                        </div>

                        <div className="edit-card-body">

                            <form
                                onSubmit={handleSubmit}
                            >

                                {/* Basic Information */}
                                <div className="edit-section">

                                    <div className="section-heading">
                                        <div className="section-number">
                                            01
                                        </div>

                                        <div className="section-heading-text">
                                            <h3>
                                                Basic Information
                                            </h3>

                                            <p>
                                                Set the story
                                                title, talent
                                                and category.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="edit-field">
                                        <label className="edit-label">
                                            Story Title{' '}
                                            <span className="required">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            className="edit-input"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData(
                                                    'title',
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Enter story title"
                                            required
                                        />

                                        {errors.title && (
                                            <div className="field-error">
                                                {errors.title}
                                            </div>
                                        )}
                                    </div>

                                    <div className="edit-field-row">

                                        {/* Talent */}
                                        <div className="edit-field">
                                            <label className="edit-label">
                                                Talent{' '}
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>

                                            <select
                                                className="edit-select"
                                                value={
                                                    data.talent_id
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'talent_id',
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value="">
                                                    Select Talent
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
                                                    )
                                                )}
                                            </select>

                                            {errors.talent_id && (
                                                <div className="field-error">
                                                    {
                                                        errors.talent_id
                                                    }
                                                </div>
                                            )}
                                        </div>

                                        {/* Category */}
                                        <div className="edit-field">
                                            <label className="edit-label">
                                                Category{' '}
                                                <span className="required">
                                                    *
                                                </span>
                                            </label>

                                            <select
                                                className="edit-select"
                                                value={
                                                    data.category_id
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'category_id',
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value="">
                                                    Select Category
                                                </option>

                                                {categories.map(
                                                    (
                                                        category
                                                    ) => (
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
                                                <div className="field-error">
                                                    {
                                                        errors.category_id
                                                    }
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>

                                {/* Content */}
                                <div className="edit-section">

                                    <div className="section-heading">
                                        <div className="section-number">
                                            02
                                        </div>

                                        <div className="section-heading-text">
                                            <h3>
                                                Story Content
                                            </h3>

                                            <p>
                                                Write or update
                                                the full story.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="edit-field">
                                        <label className="edit-label">
                                            Story Content{' '}
                                            <span className="required">
                                                *
                                            </span>
                                        </label>

                                        <textarea
                                            className="edit-textarea"
                                            value={
                                                data.content
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    'content',
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Write the full story content..."
                                            required
                                        />

                                        {errors.content && (
                                            <div className="field-error">
                                                {
                                                    errors.content
                                                }
                                            </div>
                                        )}

                                        <div className="field-help">
                                            Keep the story clear,
                                            engaging and easy
                                            to read.
                                        </div>
                                    </div>
                                </div>

                                {/* Media */}
                                <div className="edit-section">

                                    <div className="section-heading">
                                        <div className="section-number">
                                            03
                                        </div>

                                        <div className="section-heading-text">
                                            <h3>
                                                Media
                                            </h3>

                                            <p>
                                                Manage the story
                                                image and
                                                external media.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="edit-field-row">

                                        {/* Thumbnail */}
                                        <div className="edit-field">
                                            <label className="edit-label">
                                                Thumbnail
                                            </label>

                                            <div className="thumbnail-box">
                                                {thumbnailPreview ? (
                                                    <>
                                                        <img
                                                            src={
                                                                thumbnailPreview
                                                            }
                                                            alt="Story thumbnail preview"
                                                        />

                                                        <div className="thumbnail-overlay" />

                                                        <span className="current-thumbnail-label">
                                                            {selectedFileName
                                                                ? 'New thumbnail'
                                                                : 'Current thumbnail'}
                                                        </span>
                                                    </>
                                                ) : (
                                                    <div className="thumbnail-placeholder">
                                                        <Icon
                                                            name="image"
                                                            size={30}
                                                        />

                                                        <span>
                                                            No thumbnail
                                                            available
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            <label
                                                className={
                                                    'file-upload ' +
                                                    (
                                                        selectedFileName
                                                            ? 'has-file'
                                                            : ''
                                                    )
                                                }
                                            >
                                                <Icon
                                                    name="upload"
                                                    size={20}
                                                />

                                                <strong>
                                                    {selectedFileName ||
                                                        'Replace thumbnail'}
                                                </strong>

                                                <span>
                                                    PNG, JPG or
                                                    WEBP
                                                </span>

                                                <input
                                                    type="file"
                                                    accept="image/png,image/jpeg,image/webp"
                                                    onChange={
                                                        handleThumbnailChange
                                                    }
                                                />
                                            </label>

                                            {errors.thumbnail && (
                                                <div className="field-error">
                                                    {
                                                        errors.thumbnail
                                                    }
                                                </div>
                                            )}
                                        </div>

                                        {/* Media URL */}
                                        <div className="edit-field">
                                            <label className="edit-label">
                                                Media URL
                                            </label>

                                            <input
                                                type="url"
                                                className="edit-input"
                                                value={
                                                    data.media
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'media',
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="https://youtube.com/watch?v=..."
                                            />

                                            <div className="field-help">
                                                Optional YouTube
                                                or external video
                                                link.
                                            </div>

                                            {errors.media && (
                                                <div className="field-error">
                                                    {
                                                        errors.media
                                                    }
                                                </div>
                                            )}

                                            {/* Preview */}
                                            <div className="story-preview">
                                                <div className="preview-label">
                                                    Story Preview
                                                </div>

                                                <div className="preview-card">

                                                    <div className="preview-image">
                                                        {thumbnailPreview ? (
                                                            <img
                                                                src={
                                                                    thumbnailPreview
                                                                }
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <div
                                                                style={{
                                                                    width:
                                                                        '100%',
                                                                    height:
                                                                        '100%',
                                                                    display:
                                                                        'flex',
                                                                    alignItems:
                                                                        'center',
                                                                    justifyContent:
                                                                        'center',
                                                                    color:
                                                                        '#94a3b8',
                                                                }}
                                                            >
                                                                <Icon
                                                                    name="image"
                                                                    size={24}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="preview-info">

                                                        <div className="preview-category">
                                                            {
                                                                selectedCategory?.name ||
                                                                'Story'
                                                            }
                                                        </div>

                                                        <h4 className="preview-title">
                                                            {data.title ||
                                                                'Story title'}
                                                        </h4>

                                                        <p className="preview-text">
                                                            {data.content ||
                                                                'Your story preview will appear here.'}
                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Tags & Status */}
                                <div className="edit-section">

                                    <div className="section-heading">
                                        <div className="section-number">
                                            04
                                        </div>

                                        <div className="section-heading-text">
                                            <h3>
                                                Tags & Status
                                            </h3>

                                            <p>
                                                Organize and
                                                control the
                                                publication state.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="edit-field">
                                        <label className="edit-label">
                                            Tags
                                        </label>

                                        <input
                                            type="text"
                                            className="edit-input"
                                            value={data.tags}
                                            onChange={(e) =>
                                                setData(
                                                    'tags',
                                                    e.target.value
                                                )
                                            }
                                            placeholder="motivation, art, music..."
                                        />

                                        <div className="field-help">
                                            Separate multiple
                                            tags with commas.
                                        </div>

                                        {errors.tags && (
                                            <div className="field-error">
                                                {errors.tags}
                                            </div>
                                        )}
                                    </div>

                                    {/* Status */}
                                    <div className="edit-field">
                                        <label className="edit-label">
                                            Status
                                        </label>

                                        <div className="status-options">

                                            {statuses.map(
                                                (status) => (
                                                    <div
                                                        className="status-option"
                                                        key={
                                                            status
                                                        }
                                                    >
                                                        <input
                                                            type="radio"
                                                            id={
                                                                'status-' +
                                                                status
                                                            }
                                                            name="status"
                                                            value={
                                                                status
                                                            }
                                                            checked={
                                                                data.status ===
                                                                status
                                                            }
                                                            onChange={(
                                                                e
                                                            ) =>
                                                                setData(
                                                                    'status',
                                                                    e
                                                                        .target
                                                                        .value
                                                                )
                                                            }
                                                        />

                                                        <label
                                                            htmlFor={
                                                                'status-' +
                                                                status
                                                            }
                                                            className="status-label"
                                                        >
                                                            {
                                                                formattedStatus(
                                                                    status
                                                                )
                                                            }
                                                        </label>
                                                    </div>
                                                )
                                            )}

                                        </div>

                                        {errors.status && (
                                            <div className="field-error">
                                                {
                                                    errors.status
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="edit-form-footer">

                                    <div className="footer-info">
                                        Changes will be saved
                                        to story #
                                        {story?.id}.
                                    </div>

                                    <div className="footer-actions">

                                        <Link
                                            href={route(
                                                'admin.stories.index'
                                            )}
                                            className="cancel-btn"
                                        >
                                            Cancel
                                        </Link>

                                        <button
                                            type="submit"
                                            className="update-btn"
                                            disabled={
                                                processing
                                            }
                                        >
                                            {processing ? (
                                                'Saving...'
                                            ) : (
                                                <>
                                                    <Icon
                                                        name="save"
                                                        size={16}
                                                    />

                                                    Update Story
                                                </>
                                            )}
                                        </button>

                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}