import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import AppLayout from '@/Layouts/AppLayout';

export default function Form(props) {
    const announcement = props.announcement || null;
    const categories = props.categories || [];
    const isEdit = announcement !== null;

    const { data, setData, post, put, processing, errors } = useForm({
        title: announcement?.title || '',
        content: announcement?.content || '',
        image: null,
        link: announcement?.link || '',
        category_id: announcement?.category_id || '',
        is_active: announcement
            ? Boolean(announcement.is_active)
            : false,
    });

    const [imagePreview, setImagePreview] = useState(
        announcement?.image
            ? `/storage/${announcement.image}`
            : null
    );

    const handleImageChange = (event) => {
        const file = event.target.files?.[0];

        if (!file) return;

        setData('image', file);
        setImagePreview(URL.createObjectURL(file));
    };

    const removeImage = () => {
        setData('image', null);
        setImagePreview(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const options = {
            forceFormData: true,
        };

        if (isEdit) {
            put(
                route(
                    'admin.announcements.update',
                    announcement.id
                ),
                options
            );
        } else {
            post(
                route('admin.announcements.store'),
                options
            );
        }
    };

    const selectedCategory = categories.find(
        (category) =>
            String(category.id) === String(data.category_id)
    );

    return (
        <AppLayout>
            <Head
                title={
                    isEdit
                        ? 'Edit Announcement'
                        : 'Create Announcement'
                }
            />

            <style>{`
                .apple-page {
                    --apple-bg: #f5f5f7;
                    --apple-card: #ffffff;
                    --apple-text: #1d1d1f;
                    --apple-secondary: #86868b;
                    --apple-border: #e5e5e7;
                    --apple-blue: #0071e3;
                    --apple-blue-hover: #0077ed;
                    --apple-green: #34c759;

                    min-height: 100vh;
                    background: var(--apple-bg);
                    color: var(--apple-text);
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;
                    letter-spacing: -0.01em;
                }

                .apple-container {
                    max-width: 1480px;
                    margin: 0 auto;
                    padding: 42px 28px 70px;
                }

                .apple-header {
                    margin-bottom: 30px;
                }

                .apple-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    color: var(--apple-blue);
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                .apple-title {
                    margin: 0;
                    font-size: clamp(30px, 4vw, 46px);
                    line-height: 1.05;
                    font-weight: 700;
                    letter-spacing: -0.045em;
                }

                .apple-subtitle {
                    margin: 10px 0 0;
                    color: var(--apple-secondary);
                    font-size: 16px;
                    line-height: 1.5;
                    max-width: 650px;
                }

                .apple-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 9px 14px;
                    border-radius: 999px;
                    font-size: 13px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .apple-status.published {
                    background: #e9f9ee;
                    color: #188038;
                }

                .apple-status.draft {
                    background: #e8e8ed;
                    color: #6e6e73;
                }

                .apple-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.55fr) minmax(320px, 0.75fr);
                    gap: 24px;
                    align-items: start;
                }

                .apple-card {
                    background: var(--apple-card);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    border-radius: 22px;
                    box-shadow:
                        0 1px 2px rgba(0, 0, 0, 0.03),
                        0 10px 35px rgba(0, 0, 0, 0.045);
                    overflow: hidden;
                }

                .apple-card-body {
                    padding: 30px;
                }

                .apple-section-title {
                    margin: 0;
                    font-size: 20px;
                    font-weight: 650;
                    letter-spacing: -0.025em;
                }

                .apple-section-description {
                    color: var(--apple-secondary);
                    margin: 6px 0 28px;
                    font-size: 14px;
                    line-height: 1.5;
                }

                .apple-field {
                    margin-bottom: 23px;
                }

                .apple-label {
                    display: block;
                    margin-bottom: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #3a3a3c;
                }

                .apple-required {
                    color: #ff3b30;
                }

                .apple-input,
                .apple-select,
                .apple-textarea {
                    width: 100%;
                    border: 1px solid #d2d2d7;
                    background: #fff;
                    color: var(--apple-text);
                    border-radius: 12px;
                    padding: 13px 14px;
                    font-family: inherit;
                    font-size: 15px;
                    outline: none;
                    transition:
                        border-color 0.2s ease,
                        box-shadow 0.2s ease,
                        background 0.2s ease;
                }

                .apple-input::placeholder,
                .apple-textarea::placeholder {
                    color: #a1a1a6;
                }

                .apple-input:hover,
                .apple-select:hover,
                .apple-textarea:hover {
                    border-color: #b8b8bd;
                }

                .apple-input:focus,
                .apple-select:focus,
                .apple-textarea:focus {
                    border-color: var(--apple-blue);
                    box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.12);
                }

                .apple-input.error,
                .apple-select.error,
                .apple-textarea.error {
                    border-color: #ff3b30;
                }

                .apple-textarea {
                    min-height: 190px;
                    resize: vertical;
                    line-height: 1.6;
                }

                .apple-field-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .apple-counter {
                    color: var(--apple-secondary);
                    font-size: 12px;
                }

                .apple-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 18px;
                }

                .apple-input-icon {
                    position: relative;
                }

                .apple-input-icon i {
                    position: absolute;
                    left: 14px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #8e8e93;
                    z-index: 2;
                }

                .apple-input-icon .apple-input {
                    padding-left: 42px;
                }

                .apple-error {
                    display: block;
                    margin-top: 6px;
                    color: #ff3b30;
                    font-size: 12px;
                }

                .apple-upload {
                    border: 1.5px dashed #c7c7cc;
                    border-radius: 18px;
                    background: #fafafa;
                    min-height: 245px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 30px;
                    transition:
                        border-color 0.2s ease,
                        background 0.2s ease;
                }

                .apple-upload:hover {
                    border-color: var(--apple-blue);
                    background: #f7fbff;
                }

                .apple-upload-icon {
                    width: 58px;
                    height: 58px;
                    border-radius: 17px;
                    background: #eaf3ff;
                    color: var(--apple-blue);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 25px;
                    margin-bottom: 16px;
                }

                .apple-upload-title {
                    font-size: 16px;
                    font-weight: 650;
                    margin-bottom: 5px;
                }

                .apple-upload-description {
                    color: var(--apple-secondary);
                    font-size: 13px;
                    margin-bottom: 18px;
                }

                .apple-button {
                    border: 0;
                    border-radius: 999px;
                    padding: 11px 19px;
                    font-family: inherit;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition:
                        transform 0.15s ease,
                        background 0.2s ease,
                        opacity 0.2s ease;
                }

                .apple-button:hover {
                    transform: translateY(-1px);
                }

                .apple-button:active {
                    transform: translateY(0);
                }

                .apple-button-primary {
                    background: var(--apple-blue);
                    color: white;
                }

                .apple-button-primary:hover {
                    background: var(--apple-blue-hover);
                }

                .apple-button-secondary {
                    background: #e8e8ed;
                    color: #1d1d1f;
                }

                .apple-button-secondary:hover {
                    background: #dedee3;
                }

                .apple-button-danger {
                    background: rgba(255, 59, 48, 0.92);
                    color: white;
                }

                .apple-image-preview {
                    position: relative;
                    overflow: hidden;
                    border-radius: 18px;
                    background: #f5f5f7;
                }

                .apple-image-preview img {
                    width: 100%;
                    height: 280px;
                    object-fit: cover;
                    display: block;
                }

                .apple-image-actions {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    display: flex;
                    gap: 8px;
                }

                .apple-action-button {
                    width: 38px;
                    height: 38px;
                    border: 0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    background: rgba(255, 255, 255, 0.88);
                    color: #1d1d1f;
                    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
                }

                .apple-action-button.delete {
                    color: #ff3b30;
                }

                .apple-publish {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 18px;
                    border: 1px solid var(--apple-border);
                    border-radius: 17px;
                    background: #fafafa;
                }

                .apple-publish-info {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                }

                .apple-publish-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #e8e8ed;
                    color: #6e6e73;
                    flex-shrink: 0;
                }

                .apple-publish-icon.active {
                    background: #e9f9ee;
                    color: #188038;
                }

                .apple-publish-title {
                    margin: 0 0 3px;
                    font-size: 14px;
                    font-weight: 650;
                }

                .apple-publish-description {
                    margin: 0;
                    color: var(--apple-secondary);
                    font-size: 12px;
                }

                .apple-switch {
                    position: relative;
                    width: 51px;
                    height: 31px;
                    flex-shrink: 0;
                }

                .apple-switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .apple-slider {
                    position: absolute;
                    inset: 0;
                    background: #d1d1d6;
                    border-radius: 999px;
                    cursor: pointer;
                    transition: 0.2s;
                }

                .apple-slider::before {
                    content: "";
                    position: absolute;
                    width: 27px;
                    height: 27px;
                    left: 2px;
                    top: 2px;
                    background: white;
                    border-radius: 50%;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
                    transition: 0.2s;
                }

                .apple-switch input:checked + .apple-slider {
                    background: var(--apple-green);
                }

                .apple-switch input:checked + .apple-slider::before {
                    transform: translateX(20px);
                }

                .apple-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    padding: 20px 30px;
                    border-top: 1px solid var(--apple-border);
                    background: #fbfbfc;
                }

                .apple-preview-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 20px;
                }

                .apple-preview-icon {
                    width: 42px;
                    height: 42px;
                    border-radius: 13px;
                    background: #eaf3ff;
                    color: var(--apple-blue);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .apple-preview-title {
                    margin: 0;
                    font-size: 17px;
                    font-weight: 650;
                }

                .apple-preview-subtitle {
                    display: block;
                    color: var(--apple-secondary);
                    font-size: 12px;
                    margin-top: 2px;
                }

                .apple-preview-card {
                    border: 1px solid var(--apple-border);
                    border-radius: 18px;
                    overflow: hidden;
                    background: white;
                }

                .apple-preview-image {
                    width: 100%;
                    height: 210px;
                    object-fit: cover;
                    display: block;
                }

                .apple-no-image {
                    height: 210px;
                    background: #f5f5f7;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #8e8e93;
                }

                .apple-no-image i {
                    font-size: 38px;
                    margin-bottom: 8px;
                }

                .apple-preview-content {
                    padding: 20px;
                }

                .apple-preview-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 15px;
                }

                .apple-badge {
                    display: inline-flex;
                    align-items: center;
                    border-radius: 999px;
                    padding: 6px 10px;
                    font-size: 11px;
                    font-weight: 650;
                }

                .apple-badge-category {
                    color: var(--apple-blue);
                    background: #eaf3ff;
                }

                .apple-badge-active {
                    color: #188038;
                    background: #e9f9ee;
                }

                .apple-badge-draft {
                    color: #6e6e73;
                    background: #e8e8ed;
                }

                .apple-preview-heading {
                    margin: 0 0 8px;
                    font-size: 20px;
                    line-height: 1.2;
                    font-weight: 650;
                    letter-spacing: -0.025em;
                }

                .apple-preview-text {
                    margin: 0;
                    color: #6e6e73;
                    font-size: 13px;
                    line-height: 1.6;
                    white-space: pre-wrap;
                }

                .apple-preview-link {
                    margin-top: 18px;
                    padding-top: 15px;
                    border-top: 1px solid var(--apple-border);
                    color: var(--apple-blue);
                    font-size: 13px;
                    font-weight: 600;
                }

                .apple-tip {
                    display: flex;
                    gap: 10px;
                    align-items: flex-start;
                    margin-top: 16px;
                    padding: 13px 14px;
                    border-radius: 14px;
                    background: #f5f5f7;
                    color: #6e6e73;
                    font-size: 12px;
                    line-height: 1.5;
                }

                .apple-tip i {
                    color: #ff9f0a;
                    font-size: 15px;
                    margin-top: 1px;
                }

                @media (max-width: 1100px) {
                    .apple-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 700px) {
                    .apple-container {
                        padding: 25px 16px 50px;
                    }

                    .apple-card-body {
                        padding: 20px;
                    }

                    .apple-row {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }

                    .apple-footer {
                        padding: 18px 20px;
                    }

                    .apple-publish {
                        align-items: flex-start;
                    }

                    .apple-title {
                        font-size: 34px;
                    }
                }
            `}</style>

            <div className="apple-page">
                <div className="apple-container">

                    {/* Header */}
                    <div className="apple-header">
                        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
                            <div>
                                <div className="apple-eyebrow">
                                    <i className="bi bi-megaphone"></i>
                                    Announcements
                                </div>

                                <h1 className="apple-title">
                                    {isEdit
                                        ? 'Edit announcement'
                                        : 'Create announcement'}
                                </h1>

                                <p className="apple-subtitle">
                                    {isEdit
                                        ? 'Update your announcement and keep your audience informed.'
                                        : 'Create a clear and engaging announcement for your users.'}
                                </p>
                            </div>

                            <div
                                className={`apple-status ${
                                    data.is_active
                                        ? 'published'
                                        : 'draft'
                                }`}
                            >
                                <i
                                    className={
                                        data.is_active
                                            ? 'bi bi-check-circle-fill'
                                            : 'bi bi-circle'
                                    }
                                ></i>

                                {data.is_active
                                    ? 'Published'
                                    : 'Draft'}
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <div className="apple-grid">

                            {/* Main Form */}
                            <div className="apple-card">

                                <div className="apple-card-body">

                                    <h2 className="apple-section-title">
                                        Announcement details
                                    </h2>

                                    <p className="apple-section-description">
                                        Add the information your users should see.
                                    </p>

                                    {/* Title */}
                                    <div className="apple-field">
                                        <label className="apple-label">
                                            Title
                                            <span className="apple-required">
                                                {' '}*
                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            value={data.title}
                                            onChange={(event) =>
                                                setData(
                                                    'title',
                                                    event.target.value
                                                )
                                            }
                                            className={`apple-input ${
                                                errors.title
                                                    ? 'error'
                                                    : ''
                                            }`}
                                            placeholder="Enter announcement title"
                                            required
                                        />

                                        {errors.title && (
                                            <span className="apple-error">
                                                {errors.title}
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="apple-field">
                                        <div className="apple-field-header">
                                            <label className="apple-label">
                                                Content
                                                <span className="apple-required">
                                                    {' '}*
                                                </span>
                                            </label>

                                            <span className="apple-counter">
                                                {data.content.length} characters
                                            </span>
                                        </div>

                                        <textarea
                                            value={data.content}
                                            onChange={(event) =>
                                                setData(
                                                    'content',
                                                    event.target.value
                                                )
                                            }
                                            className={`apple-textarea ${
                                                errors.content
                                                    ? 'error'
                                                    : ''
                                            }`}
                                            placeholder="Write your announcement here..."
                                            required
                                        />

                                        {errors.content && (
                                            <span className="apple-error">
                                                {errors.content}
                                            </span>
                                        )}
                                    </div>

                                    {/* Category + Link */}
                                    <div className="apple-row">

                                        <div className="apple-field">
                                            <label className="apple-label">
                                                Category
                                                <span className="apple-required">
                                                    {' '}*
                                                </span>
                                            </label>

                                            <select
                                                value={data.category_id}
                                                onChange={(event) =>
                                                    setData(
                                                        'category_id',
                                                        event.target.value
                                                    )
                                                }
                                                className={`apple-select ${
                                                    errors.category_id
                                                        ? 'error'
                                                        : ''
                                                }`}
                                                required
                                            >
                                                <option value="">
                                                    Select category
                                                </option>

                                                {categories.map(
                                                    (category) => (
                                                        <option
                                                            key={category.id}
                                                            value={category.id}
                                                        >
                                                            {category.name}
                                                        </option>
                                                    )
                                                )}
                                            </select>

                                            {errors.category_id && (
                                                <span className="apple-error">
                                                    {errors.category_id}
                                                </span>
                                            )}
                                        </div>

                                        <div className="apple-field">
                                            <label className="apple-label">
                                                External link
                                            </label>

                                            <div className="apple-input-icon">
                                                <i className="bi bi-link-45deg"></i>

                                                <input
                                                    type="url"
                                                    value={data.link}
                                                    onChange={(event) =>
                                                        setData(
                                                            'link',
                                                            event.target.value
                                                        )
                                                    }
                                                    className={`apple-input ${
                                                        errors.link
                                                            ? 'error'
                                                            : ''
                                                    }`}
                                                    placeholder="https://example.com"
                                                />
                                            </div>

                                            {errors.link && (
                                                <span className="apple-error">
                                                    {errors.link}
                                                </span>
                                            )}
                                        </div>

                                    </div>

                                    {/* Image */}
                                    <div className="apple-field">

                                        <label className="apple-label">
                                            Announcement image
                                        </label>

                                        {!imagePreview ? (
                                            <div className="apple-upload">

                                                <div className="apple-upload-icon">
                                                    <i className="bi bi-cloud-arrow-up"></i>
                                                </div>

                                                <div className="apple-upload-title">
                                                    Add an image
                                                </div>

                                                <div className="apple-upload-description">
                                                    Use a high-quality JPG, PNG or WEBP image.
                                                </div>

                                                <label
                                                    htmlFor="announcement-image"
                                                    className="apple-button apple-button-primary"
                                                >
                                                    <i className="bi bi-plus-lg me-2"></i>
                                                    Choose image
                                                </label>

                                                <input
                                                    id="announcement-image"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="d-none"
                                                />

                                            </div>
                                        ) : (
                                            <div className="apple-image-preview">

                                                <img
                                                    src={imagePreview}
                                                    alt="Announcement preview"
                                                />

                                                <div className="apple-image-actions">

                                                    <button
                                                        type="button"
                                                        className="apple-action-button delete"
                                                        onClick={removeImage}
                                                        title="Remove image"
                                                    >
                                                        <i className="bi bi-trash3"></i>
                                                    </button>

                                                    <label
                                                        htmlFor="replace-image"
                                                        className="apple-action-button"
                                                        title="Change image"
                                                    >
                                                        <i className="bi bi-pencil"></i>

                                                        <input
                                                            id="replace-image"
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleImageChange}
                                                            className="d-none"
                                                        />
                                                    </label>

                                                </div>

                                            </div>
                                        )}

                                        {errors.image && (
                                            <span className="apple-error">
                                                {errors.image}
                                            </span>
                                        )}

                                    </div>

                                    {/* Publish */}
                                    <div className="apple-field mb-0">

                                        <div className="apple-publish">

                                            <div className="apple-publish-info">

                                                <div
                                                    className={`apple-publish-icon ${
                                                        data.is_active
                                                            ? 'active'
                                                            : ''
                                                    }`}
                                                >
                                                    <i
                                                        className={
                                                            data.is_active
                                                                ? 'bi bi-broadcast'
                                                                : 'bi bi-pause'
                                                        }
                                                    ></i>
                                                </div>

                                                <div>
                                                    <p className="apple-publish-title">
                                                        Publish announcement
                                                    </p>

                                                    <p className="apple-publish-description">
                                                        {data.is_active
                                                            ? 'Your announcement is visible to users.'
                                                            : 'Your announcement will remain a draft.'}
                                                    </p>
                                                </div>

                                            </div>

                                            <label className="apple-switch">
                                                <input
                                                    type="checkbox"
                                                    checked={data.is_active}
                                                    onChange={(event) =>
                                                        setData(
                                                            'is_active',
                                                            event.target.checked
                                                        )
                                                    }
                                                />

                                                <span className="apple-slider"></span>
                                            </label>

                                        </div>

                                    </div>

                                </div>

                                {/* Footer */}
                                <div className="apple-footer">

                                    <button
                                        type="button"
                                        className="apple-button apple-button-secondary"
                                        onClick={() =>
                                            window.history.back()
                                        }
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="apple-button apple-button-primary"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                ></span>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <i
                                                    className={
                                                        isEdit
                                                            ? 'bi bi-check2 me-2'
                                                            : 'bi bi-plus-lg me-2'
                                                    }
                                                ></i>

                                                {isEdit
                                                    ? 'Save changes'
                                                    : 'Create announcement'}
                                            </>
                                        )}
                                    </button>

                                </div>

                            </div>

                            {/* Preview */}
                            <div className="apple-card">

                                <div className="apple-card-body">

                                    <div className="apple-preview-header">

                                        <div className="apple-preview-icon">
                                            <i className="bi bi-eye"></i>
                                        </div>

                                        <div>
                                            <h2 className="apple-preview-title">
                                                Live preview
                                            </h2>

                                            <span className="apple-preview-subtitle">
                                                See how your announcement will appear
                                            </span>
                                        </div>

                                    </div>

                                    <div className="apple-preview-card">

                                        {imagePreview ? (
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="apple-preview-image"
                                            />
                                        ) : (
                                            <div className="apple-no-image">
                                                <i className="bi bi-image"></i>
                                                <span>
                                                    No image selected
                                                </span>
                                            </div>
                                        )}

                                        <div className="apple-preview-content">

                                            <div className="apple-preview-meta">

                                                <span className="apple-badge apple-badge-category">
                                                    {selectedCategory
                                                        ? selectedCategory.name
                                                        : 'Category'}
                                                </span>

                                                <span
                                                    className={`apple-badge ${
                                                        data.is_active
                                                            ? 'apple-badge-active'
                                                            : 'apple-badge-draft'
                                                    }`}
                                                >
                                                    {data.is_active
                                                        ? 'Published'
                                                        : 'Draft'}
                                                </span>

                                            </div>

                                            <h3 className="apple-preview-heading">
                                                {data.title ||
                                                    'Announcement title'}
                                            </h3>

                                            <p className="apple-preview-text">
                                                {data.content ||
                                                    'Your announcement content will appear here as you type.'}
                                            </p>

                                            {data.link && (
                                                <div className="apple-preview-link">
                                                    <i className="bi bi-arrow-up-right me-1"></i>
                                                    Learn more
                                                </div>
                                            )}

                                        </div>

                                    </div>

                                    <div className="apple-tip">
                                        <i className="bi bi-lightbulb-fill"></i>

                                        <span>
                                            The preview updates automatically
                                            while you edit the announcement.
                                        </span>
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

