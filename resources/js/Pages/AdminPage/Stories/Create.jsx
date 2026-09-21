import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Create({ talents = [], categories = [] }) {
    const [thumbnailPreview, setThumbnailPreview] = useState(null);

    const { data, setData, post, processing, errors, progress } = useForm({
        title: '',
        talent_id: '',
        category_id: '',
        content: '',
        thumbnail: null,
        media: '',
        tags: '',
        status: 'pending',
    });

    const handleThumbnailChange = (e) => {
        const file = e.target.files && e.target.files[0];

        if (!file) {
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('The thumbnail must not be larger than 5MB.');
            e.target.value = '';
            return;
        }

        setData('thumbnail', file);

        const reader = new FileReader();

        reader.onload = (event) => {
            setThumbnailPreview(event.target.result);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('admin.stories.store'), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    const selectedTalent = talents.find(
        (talent) => String(talent.id) === String(data.talent_id)
    );

    const selectedCategory = categories.find(
        (category) => String(category.id) === String(data.category_id)
    );

    return (
        <AppLayout>
            <Head title="Create Story" />

            <div className="create-story-page">

                <div className="page-container">

                    {/* Header */}
                    <div className="page-header">

                        <div>
                            <div className="eyebrow">
                                Story Management
                            </div>

                            <h1>Create New Story</h1>

                            <p>
                                Create and publish a new story for your talent
                                community.
                            </p>
                        </div>

                        <Link
                            href={route('admin.stories.index')}
                            className="back-button"
                        >
                            ← Back to Stories
                        </Link>

                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="content-grid">

                            {/* LEFT */}
                            <div className="main-column">

                                {/* Basic Information */}
                                <div className="card">

                                    <div className="card-header">
                                        <div>
                                            <h2>Story Details</h2>
                                            <p>
                                                Add the basic information for
                                                your story.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card-body">

                                        <div className="form-group full">
                                            <label htmlFor="title">
                                                Story Title
                                                <span>*</span>
                                            </label>

                                            <input
                                                id="title"
                                                type="text"
                                                value={data.title}
                                                onChange={(e) =>
                                                    setData(
                                                        'title',
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Enter story title"
                                                className={
                                                    errors.title
                                                        ? 'input error'
                                                        : 'input'
                                                }
                                            />

                                            {errors.title && (
                                                <div className="error-text">
                                                    {errors.title}
                                                </div>
                                            )}
                                        </div>

                                        <div className="two-columns">

                                            <div className="form-group">
                                                <label htmlFor="talent_id">
                                                    Talent
                                                    <span>*</span>
                                                </label>

                                                <select
                                                    id="talent_id"
                                                    value={data.talent_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            'talent_id',
                                                            e.target.value
                                                        )
                                                    }
                                                    className={
                                                        errors.talent_id
                                                            ? 'input error'
                                                            : 'input'
                                                    }
                                                >
                                                    <option value="">
                                                        Select talent
                                                    </option>

                                                    {talents.map((talent) => (
                                                        <option
                                                            key={talent.id}
                                                            value={talent.id}
                                                        >
                                                            {talent.name}
                                                        </option>
                                                    ))}
                                                </select>

                                                {errors.talent_id && (
                                                    <div className="error-text">
                                                        {errors.talent_id}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="category_id">
                                                    Category
                                                    <span>*</span>
                                                </label>

                                                <select
                                                    id="category_id"
                                                    value={data.category_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            'category_id',
                                                            e.target.value
                                                        )
                                                    }
                                                    className={
                                                        errors.category_id
                                                            ? 'input error'
                                                            : 'input'
                                                    }
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
                                                        )
                                                    )}
                                                </select>

                                                {errors.category_id && (
                                                    <div className="error-text">
                                                        {
                                                            errors.category_id
                                                        }
                                                    </div>
                                                )}
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* Content */}
                                <div className="card">

                                    <div className="card-header">
                                        <div>
                                            <h2>Story Content</h2>
                                            <p>
                                                Write the full story content.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card-body">

                                        <div className="form-group">
                                            <label htmlFor="content">
                                                Content
                                                <span>*</span>
                                            </label>

                                            <textarea
                                                id="content"
                                                value={data.content}
                                                onChange={(e) =>
                                                    setData(
                                                        'content',
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Write your story here..."
                                                className={
                                                    errors.content
                                                        ? 'textarea error'
                                                        : 'textarea'
                                                }
                                            />

                                            {errors.content && (
                                                <div className="error-text">
                                                    {errors.content}
                                                </div>
                                            )}
                                        </div>

                                    </div>

                                </div>

                                {/* Media */}
                                <div className="card">

                                    <div className="card-header">
                                        <div>
                                            <h2>Media</h2>
                                            <p>
                                                Add a thumbnail and optional
                                                media URL.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card-body">

                                        <div className="form-group">
                                            <label htmlFor="thumbnail">
                                                Story Thumbnail
                                            </label>

                                            {thumbnailPreview && (
                                                <div className="image-preview">
                                                    <img
                                                        src={
                                                            thumbnailPreview
                                                        }
                                                        alt="Thumbnail preview"
                                                    />
                                                </div>
                                            )}

                                            <div className="upload-box">

                                                <input
                                                    id="thumbnail"
                                                    type="file"
                                                    accept="image/png,image/jpeg,image/webp"
                                                    onChange={
                                                        handleThumbnailChange
                                                    }
                                                />

                                                <p>
                                                    Choose story thumbnail
                                                </p>

                                                <small>
                                                    PNG, JPG or WEBP · Maximum
                                                    5MB
                                                </small>

                                            </div>

                                            {errors.thumbnail && (
                                                <div className="error-text">
                                                    {errors.thumbnail}
                                                </div>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="media">
                                                Media / Video URL
                                            </label>

                                            <input
                                                id="media"
                                                type="url"
                                                value={data.media}
                                                onChange={(e) =>
                                                    setData(
                                                        'media',
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="https://youtube.com/..."
                                                className={
                                                    errors.media
                                                        ? 'input error'
                                                        : 'input'
                                                }
                                            />

                                            {errors.media && (
                                                <div className="error-text">
                                                    {errors.media}
                                                </div>
                                            )}
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* RIGHT */}
                            <div className="sidebar">

                                {/* Preview */}
                                <div className="card">

                                    <div className="card-header">
                                        <div>
                                            <h2>Live Preview</h2>
                                            <p>
                                                Preview your story.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card-body">

                                        <div className="preview-card">

                                            <div className="preview-image">

                                                {thumbnailPreview ? (
                                                    <img
                                                        src={
                                                            thumbnailPreview
                                                        }
                                                        alt="Preview"
                                                    />
                                                ) : (
                                                    <div className="placeholder">
                                                        📷
                                                    </div>
                                                )}

                                            </div>

                                            <div className="preview-body">

                                                <div className="category-badge">
                                                    {selectedCategory
                                                        ? selectedCategory.name
                                                        : 'STORY'}
                                                </div>

                                                <h3>
                                                    {data.title ||
                                                        'Your story title'}
                                                </h3>

                                                <p>
                                                    {data.content ||
                                                        'Your story content will appear here.'}
                                                </p>

                                                <div className="author">

                                                    <div className="avatar">
                                                        {selectedTalent
                                                            ? selectedTalent.name
                                                                  .charAt(0)
                                                                  .toUpperCase()
                                                            : 'T'}
                                                    </div>

                                                    <div>
                                                        <strong>
                                                            {selectedTalent
                                                                ? selectedTalent.name
                                                                : 'Talent'}
                                                        </strong>

                                                        <small>
                                                            Story author
                                                        </small>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* Publishing */}
                                <div className="card">

                                    <div className="card-header">
                                        <div>
                                            <h2>Publishing</h2>
                                            <p>
                                                Configure story visibility.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card-body">

                                        <div className="form-group">
                                            <label htmlFor="tags">
                                                Tags
                                            </label>

                                            <input
                                                id="tags"
                                                type="text"
                                                value={data.tags}
                                                onChange={(e) =>
                                                    setData(
                                                        'tags',
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="success, talent, innovation"
                                                className="input"
                                            />

                                            <small className="hint">
                                                Separate tags with commas.
                                            </small>
                                        </div>

                                        <div className="form-group">
                                            <label>
                                                Status
                                            </label>

                                            <div className="status-list">

                                                <label className="status-option">
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="pending"
                                                        checked={
                                                            data.status ===
                                                            'pending'
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                'status',
                                                                e.target.value
                                                            )
                                                        }
                                                    />

                                                    <div>
                                                        <strong>
                                                            Pending
                                                        </strong>
                                                        <small>
                                                            Awaiting review
                                                        </small>
                                                    </div>
                                                </label>

                                                <label className="status-option">
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="approved"
                                                        checked={
                                                            data.status ===
                                                            'approved'
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                'status',
                                                                e.target.value
                                                            )
                                                        }
                                                    />

                                                    <div>
                                                        <strong>
                                                            Approved
                                                        </strong>
                                                        <small>
                                                            Approved for
                                                            publication
                                                        </small>
                                                    </div>
                                                </label>

                                                <label className="status-option">
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="published"
                                                        checked={
                                                            data.status ===
                                                            'published'
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                'status',
                                                                e.target.value
                                                            )
                                                        }
                                                    />

                                                    <div>
                                                        <strong>
                                                            Published
                                                        </strong>
                                                        <small>
                                                            Visible to users
                                                        </small>
                                                    </div>
                                                </label>

                                                <label className="status-option">
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="rejected"
                                                        checked={
                                                            data.status ===
                                                            'rejected'
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                'status',
                                                                e.target.value
                                                            )
                                                        }
                                                    />

                                                    <div>
                                                        <strong>
                                                            Rejected
                                                        </strong>
                                                        <small>
                                                            Not approved
                                                        </small>
                                                    </div>
                                                </label>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                                {/* Actions */}
                                <div className="card actions-card">

                                    <Link
                                        href={route(
                                            'admin.stories.index'
                                        )}
                                        className="cancel-button"
                                    >
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        className="submit-button"
                                        disabled={processing}
                                    >
                                        {processing
                                            ? 'Creating...'
                                            : 'Create Story'}
                                    </button>

                                    {progress && (
                                        <div className="progress-container">

                                            <div className="progress-info">
                                                <span>
                                                    Uploading...
                                                </span>

                                                <span>
                                                    {progress.percentage}%
                                                </span>
                                            </div>

                                            <div className="progress-track">
                                                <div
                                                    className="progress-bar"
                                                    style={{
                                                        width:
                                                            progress.percentage +
                                                            '%',
                                                    }}
                                                />
                                            </div>

                                        </div>
                                    )}

                                </div>

                            </div>

                        </div>

                    </form>

                </div>

                <style>{`
                    .create-story-page {
                        min-height: 100vh;
                        background: #f8fafc;
                        color: #0f172a;
                        padding: 30px;
                    }

                    .page-container {
                        max-width: 1400px;
                        margin: auto;
                    }

                    .page-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        gap: 20px;
                        margin-bottom: 28px;
                    }

                    .eyebrow {
                        color: #059669;
                        font-size: 12px;
                        font-weight: 800;
                        text-transform: uppercase;
                        letter-spacing: .08em;
                        margin-bottom: 5px;
                    }

                    .page-header h1 {
                        margin: 0;
                        font-size: 30px;
                        font-weight: 800;
                        letter-spacing: -.03em;
                    }

                    .page-header p {
                        margin: 7px 0 0;
                        color: #64748b;
                        font-size: 14px;
                    }

                    .back-button {
                        display: inline-flex;
                        align-items: center;
                        height: 42px;
                        padding: 0 15px;
                        border: 1px solid #e2e8f0;
                        border-radius: 10px;
                        background: white;
                        color: #334155;
                        text-decoration: none;
                        font-size: 13px;
                        font-weight: 700;
                    }

                    .content-grid {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr) 360px;
                        gap: 24px;
                        align-items: start;
                    }

                    .main-column,
                    .sidebar {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }

                    .card {
                        background: white;
                        border: 1px solid #e2e8f0;
                        border-radius: 16px;
                        overflow: hidden;
                        box-shadow: 0 2px 8px rgba(15, 23, 42, .035);
                    }

                    .card-header {
                        padding: 20px 22px;
                        border-bottom: 1px solid #e2e8f0;
                    }

                    .card-header h2 {
                        margin: 0;
                        font-size: 16px;
                        font-weight: 800;
                    }

                    .card-header p {
                        margin: 4px 0 0;
                        color: #64748b;
                        font-size: 12px;
                    }

                    .card-body {
                        padding: 22px;
                    }

                    .two-columns {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 18px;
                    }

                    .form-group {
                        margin-bottom: 20px;
                    }

                    .form-group:last-child {
                        margin-bottom: 0;
                    }

                    .form-group.full {
                        width: 100%;
                    }

                    label {
                        display: block;
                        margin-bottom: 8px;
                        color: #334155;
                        font-size: 13px;
                        font-weight: 700;
                    }

                    label span {
                        color: #dc2626;
                        margin-left: 3px;
                    }

                    .input,
                    .textarea {
                        width: 100%;
                        box-sizing: border-box;
                        border: 1px solid #e2e8f0;
                        border-radius: 10px;
                        background: white;
                        color: #0f172a;
                        font-family: inherit;
                        font-size: 14px;
                        outline: none;
                        transition: .2s;
                    }

                    .input {
                        height: 44px;
                        padding: 0 13px;
                    }

                    .textarea {
                        min-height: 300px;
                        padding: 13px;
                        resize: vertical;
                        line-height: 1.7;
                    }

                    .input:focus,
                    .textarea:focus {
                        border-color: #059669;
                        box-shadow: 0 0 0 3px rgba(5, 150, 105, .08);
                    }

                    .input.error,
                    .textarea.error {
                        border-color: #ef4444;
                    }

                    .error-text {
                        color: #dc2626;
                        font-size: 12px;
                        margin-top: 6px;
                    }

                    .hint {
                        display: block;
                        margin-top: 6px;
                        color: #64748b;
                        font-size: 11px;
                    }

                    .upload-box {
                        border: 1.5px dashed #cbd5e1;
                        border-radius: 12px;
                        padding: 30px 20px;
                        text-align: center;
                        background: #f8fafc;
                    }

                    .upload-box input {
                        width: 100%;
                        margin-bottom: 12px;
                    }

                    .upload-box p {
                        margin: 0;
                        font-size: 13px;
                        font-weight: 700;
                        color: #334155;
                    }

                    .upload-box small {
                        display: block;
                        margin-top: 5px;
                        color: #64748b;
                    }

                    .image-preview {
                        width: 100%;
                        height: 220px;
                        border-radius: 12px;
                        overflow: hidden;
                        margin-bottom: 12px;
                        background: #f1f5f9;
                    }

                    .image-preview img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .preview-card {
                        border: 1px solid #e2e8f0;
                        border-radius: 12px;
                        overflow: hidden;
                    }

                    .preview-image {
                        height: 180px;
                        background: #ecfdf5;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                    }

                    .preview-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .placeholder {
                        font-size: 40px;
                        opacity: .4;
                    }

                    .preview-body {
                        padding: 16px;
                    }

                    .category-badge {
                        display: inline-block;
                        padding: 5px 8px;
                        border-radius: 6px;
                        background: #ecfdf5;
                        color: #047857;
                        font-size: 10px;
                        font-weight: 800;
                        text-transform: uppercase;
                    }

                    .preview-body h3 {
                        margin: 10px 0 7px;
                        font-size: 17px;
                        line-height: 1.35;
                    }

                    .preview-body p {
                        color: #64748b;
                        font-size: 12px;
                        line-height: 1.6;
                        margin: 0;
                        display: -webkit-box;
                        -webkit-line-clamp: 5;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .author {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        margin-top: 15px;
                        padding-top: 13px;
                        border-top: 1px solid #f1f5f9;
                    }

                    .avatar {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: #ecfdf5;
                        color: #047857;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        font-weight: 800;
                    }

                    .author strong {
                        display: block;
                        font-size: 12px;
                    }

                    .author small {
                        display: block;
                        color: #64748b;
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    .status-list {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                    }

                    .status-option {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 11px;
                        border: 1px solid #e2e8f0;
                        border-radius: 10px;
                        cursor: pointer;
                        margin: 0;
                    }

                    .status-option:hover {
                        background: #f8fafc;
                    }

                    .status-option input {
                        accent-color: #059669;
                    }

                    .status-option strong {
                        display: block;
                        font-size: 12px;
                    }

                    .status-option small {
                        display: block;
                        color: #64748b;
                        font-size: 10px;
                        margin-top: 2px;
                    }

                    .actions-card {
                        padding: 18px;
                        display: flex;
                        gap: 10px;
                    }

                    .cancel-button,
                    .submit-button {
                        height: 43px;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-family: inherit;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .cancel-button {
                        flex: 1;
                        border: 1px solid #e2e8f0;
                        background: white;
                        color: #475569;
                        text-decoration: none;
                    }

                    .submit-button {
                        flex: 1.3;
                        border: 0;
                        background: #059669;
                        color: white;
                    }

                    .submit-button:hover {
                        background: #047857;
                    }

                    .submit-button:disabled {
                        opacity: .6;
                        cursor: not-allowed;
                    }

                    .progress-container {
                        position: absolute;
                        margin-top: 60px;
                        left: 18px;
                        right: 18px;
                    }

                    .progress-info {
                        display: flex;
                        justify-content: space-between;
                        color: #64748b;
                        font-size: 11px;
                        margin-bottom: 5px;
                    }

                    .progress-track {
                        height: 5px;
                        background: #e2e8f0;
                        border-radius: 99px;
                        overflow: hidden;
                    }

                    .progress-bar {
                        height: 100%;
                        background: #059669;
                    }

                    @media (max-width: 1000px) {
                        .content-grid {
                            grid-template-columns: 1fr;
                        }

                        .sidebar {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            align-items: start;
                        }

                        .actions-card {
                            grid-column: 1 / -1;
                        }
                    }

                    @media (max-width: 700px) {
                        .create-story-page {
                            padding: 18px 14px;
                        }

                        .page-header {
                            flex-direction: column;
                        }

                        .back-button {
                            width: 100%;
                            justify-content: center;
                        }

                        .two-columns {
                            grid-template-columns: 1fr;
                        }

                        .sidebar {
                            display: flex;
                        }

                        .page-header h1 {
                            font-size: 25px;
                        }

                        .card-body,
                        .card-header {
                            padding: 17px;
                        }

                        .actions-card {
                            flex-direction: column;
                        }
                    }
                `}</style>
            </div>
        </AppLayout>
    );
}