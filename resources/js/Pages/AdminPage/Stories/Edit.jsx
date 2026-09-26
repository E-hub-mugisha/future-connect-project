import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/*
|--------------------------------------------------------------------------
| Inline SVG Icon
|--------------------------------------------------------------------------
*/
function Icon({ name, size = 18, strokeWidth = 1.8 }) {
    const common = {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': 'true',
    };

    const icons = {
        arrowLeft: (
            <>
                <path d="M19 12H5" />
                <path d="m11 18-6-6 6-6" />
            </>
        ),
        image: (
            <>
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="8.5" cy="9.5" r="1.5" />
                <path d="m21 15-5-5-4 4-3-3-5 5" />
            </>
        ),
        tag: (
            <>
                <path d="M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z" />
                <circle cx="7.5" cy="7.5" r="1" />
            </>
        ),
        upload: (
            <>
                <path d="M12 15V3" />
                <path d="m7 8 5-5 5 5" />
                <path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
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

    return <svg {...common}>{icons[name] || icons.image}</svg>;
}

const STATUS_OPTIONS = [
    { key: 'pending', label: 'Pending', hint: 'Awaiting review' },
    { key: 'approved', label: 'Approved', hint: 'Cleared to publish' },
    { key: 'published', label: 'Published', hint: 'Visible to users' },
    { key: 'rejected', label: 'Rejected', hint: 'Not approved' },
];

function assetUrl(value) {
    if (!value) return '';
    const stringValue = String(value);
    if (/^https?:\/\//i.test(stringValue)) return stringValue;
    if (stringValue.charAt(0) === '/') return stringValue;
    return '/' + stringValue;
}

export default function Edit({ story, talents = [], categories = [] }) {
    const initialThumbnail = assetUrl(story?.thumbnail);
    const [thumbnailPreview, setThumbnailPreview] = useState(initialThumbnail || null);
    const [selectedFileName, setSelectedFileName] = useState('');

    const { data, setData, put, processing, errors } = useForm({
        title: story?.title ?? '',
        talent_id: story?.talent_id ?? '',
        category_id: story?.category_id ?? '',
        content: story?.content ?? '',
        thumbnail: null,
        media: story?.media ?? '',
        tags: story?.tags ?? '',
        status: story?.status ?? 'pending',
    });

    const handleThumbnailChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) return;

        setData('thumbnail', file);
        setSelectedFileName(file.name);

        const reader = new FileReader();
        reader.onload = (e) => setThumbnailPreview(e.target?.result || null);
        reader.readAsDataURL(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        put(route('admin.stories.update', story.id), {
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

    const wordCount = data.content.trim()
        ? data.content.trim().split(/\s+/).length
        : 0;

    return (
        <AppLayout>
            <Head title={'Edit Story - ' + (story?.title || '')} />

            <div data-h-scope="story-edit" className="story-edit">

                <form onSubmit={handleSubmit}>

                    {/* =====================================================
                        HEADER
                    ===================================================== */}

                    <header className="page-header">
                        <div>
                            <Link href={route('admin.stories.index')} className="back-link">
                                <Icon name="arrowLeft" size={14} />
                                All stories
                            </Link>

                            <div className="title-row">
                                <h1>{story?.title || 'Edit story'}</h1>
                                <span className="editing-tag">Editing</span>
                            </div>

                            <p className="dek">
                                Story #{story?.id} — update the details below and save
                                when you're ready.
                            </p>
                        </div>
                    </header>

                    <div className="content-grid">

                        {/* =================================================
                            MAIN COLUMN
                        ================================================= */}

                        <div className="main-column">

                            <section className="panel">
                                <div className="panel-head">
                                    <h2>Details</h2>
                                    <p>Who this story is about, and what it's filed under.</p>
                                </div>

                                <div className="panel-body">

                                    <div className="field">
                                        <label htmlFor="title">
                                            Title <span>required</span>
                                        </label>
                                        <input
                                            id="title"
                                            type="text"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            placeholder="Enter story title"
                                            className={errors.title ? 'input has-error' : 'input'}
                                        />
                                        {errors.title && (
                                            <div className="error-text">{errors.title}</div>
                                        )}
                                    </div>

                                    <div className="field-row">

                                        <div className="field">
                                            <label htmlFor="talent_id">
                                                Talent <span>required</span>
                                            </label>
                                            <select
                                                id="talent_id"
                                                value={data.talent_id}
                                                onChange={(e) => setData('talent_id', e.target.value)}
                                                className={errors.talent_id ? 'input has-error' : 'input'}
                                            >
                                                <option value="">Select talent</option>
                                                {talents.map((talent) => (
                                                    <option key={talent.id} value={talent.id}>
                                                        {talent.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.talent_id && (
                                                <div className="error-text">{errors.talent_id}</div>
                                            )}
                                        </div>

                                        <div className="field">
                                            <label htmlFor="category_id">
                                                Category <span>required</span>
                                            </label>
                                            <select
                                                id="category_id"
                                                value={data.category_id}
                                                onChange={(e) => setData('category_id', e.target.value)}
                                                className={errors.category_id ? 'input has-error' : 'input'}
                                            >
                                                <option value="">Select category</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.category_id && (
                                                <div className="error-text">{errors.category_id}</div>
                                            )}
                                        </div>

                                    </div>

                                </div>
                            </section>

                            <section className="panel">
                                <div className="panel-head">
                                    <div className="panel-head-row">
                                        <div>
                                            <h2>Story</h2>
                                            <p>Keep it clear, engaging and easy to read.</p>
                                        </div>
                                        <span className="word-count">{wordCount} words</span>
                                    </div>
                                </div>

                                <div className="panel-body">
                                    <div className="field">
                                        <label htmlFor="content">
                                            Content <span>required</span>
                                        </label>
                                        <textarea
                                            id="content"
                                            value={data.content}
                                            onChange={(e) => setData('content', e.target.value)}
                                            placeholder="Write the full story content..."
                                            className={errors.content ? 'textarea has-error' : 'textarea'}
                                        />
                                        {errors.content && (
                                            <div className="error-text">{errors.content}</div>
                                        )}
                                    </div>
                                </div>
                            </section>

                            <section className="panel">
                                <div className="panel-head">
                                    <h2>Media</h2>
                                    <p>The story thumbnail and an optional video link.</p>
                                </div>

                                <div className="panel-body">

                                    <div className="field">
                                        <label>Thumbnail</label>

                                        <div className="thumb-preview">
                                            {thumbnailPreview ? (
                                                <>
                                                    <img src={thumbnailPreview} alt="Story thumbnail" />
                                                    <span className="thumb-tag">
                                                        {selectedFileName ? 'New thumbnail' : 'Current thumbnail'}
                                                    </span>
                                                </>
                                            ) : (
                                                <div className="thumb-empty">
                                                    <Icon name="image" size={22} />
                                                    <span>No thumbnail yet</span>
                                                </div>
                                            )}
                                        </div>

                                        <label className="upload-box">
                                            <Icon name="upload" size={16} />
                                            <span>
                                                {selectedFileName || 'Replace thumbnail'}
                                            </span>
                                            <input
                                                type="file"
                                                accept="image/png,image/jpeg,image/webp"
                                                onChange={handleThumbnailChange}
                                            />
                                        </label>

                                        {errors.thumbnail && (
                                            <div className="error-text">{errors.thumbnail}</div>
                                        )}
                                    </div>

                                    <div className="field">
                                        <label htmlFor="media">Video URL</label>
                                        <input
                                            id="media"
                                            type="url"
                                            value={data.media}
                                            onChange={(e) => setData('media', e.target.value)}
                                            placeholder="https://youtube.com/…"
                                            className={errors.media ? 'input has-error' : 'input'}
                                        />
                                        <small className="hint">Optional YouTube or external video link.</small>
                                        {errors.media && (
                                            <div className="error-text">{errors.media}</div>
                                        )}
                                    </div>

                                </div>
                            </section>

                        </div>

                        {/* =================================================
                            SIDEBAR
                        ================================================= */}

                        <div className="sidebar">

                            <section className="panel">
                                <div className="panel-head">
                                    <h2>Preview</h2>
                                    <p>How this appears in the story index.</p>
                                </div>

                                <div className="panel-body">
                                    <div className="preview-card">
                                        <div className="preview-thumb">
                                            {thumbnailPreview ? (
                                                <img src={thumbnailPreview} alt="" />
                                            ) : (
                                                <Icon name="image" size={22} />
                                            )}
                                        </div>

                                        <div className="preview-top">
                                            <span className="preview-title">
                                                {data.title || 'Story title'}
                                            </span>
                                            <span className={'status-pill ' + data.status}>
                                                <span className="status-dot" />
                                                {STATUS_OPTIONS.find((s) => s.key === data.status)?.label}
                                            </span>
                                        </div>

                                        <p className="preview-excerpt">
                                            {data.content || 'Story content will appear here.'}
                                        </p>

                                        <div className="preview-meta">
                                            <span className="byline">
                                                <span className="byline-avatar">
                                                    {selectedTalent ? selectedTalent.name.charAt(0).toUpperCase() : 'T'}
                                                </span>
                                                By {selectedTalent ? selectedTalent.name : 'Talent'}
                                            </span>
                                            <span className="preview-category">
                                                <Icon name="tag" size={12} />
                                                {selectedCategory ? selectedCategory.name : 'Uncategorized'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="panel">
                                <div className="panel-head">
                                    <h2>Publishing</h2>
                                    <p>Tags and review status.</p>
                                </div>

                                <div className="panel-body">

                                    <div className="field">
                                        <label htmlFor="tags">Tags</label>
                                        <input
                                            id="tags"
                                            type="text"
                                            value={data.tags}
                                            onChange={(e) => setData('tags', e.target.value)}
                                            placeholder="motivation, art, music"
                                            className="input"
                                        />
                                        <small className="hint">Separate tags with commas.</small>
                                        {errors.tags && (
                                            <div className="error-text">{errors.tags}</div>
                                        )}
                                    </div>

                                    <div className="field">
                                        <label>Status</label>
                                        <div className="status-grid">
                                            {STATUS_OPTIONS.map((option) => (
                                                <button
                                                    key={option.key}
                                                    type="button"
                                                    className={
                                                        'status-option ' + option.key +
                                                        (data.status === option.key ? ' is-active' : '')
                                                    }
                                                    onClick={() => setData('status', option.key)}
                                                >
                                                    <span className="status-dot" />
                                                    <span>
                                                        <strong>{option.label}</strong>
                                                        <small>{option.hint}</small>
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                        {errors.status && (
                                            <div className="error-text">{errors.status}</div>
                                        )}
                                    </div>

                                </div>
                            </section>

                            <section className="panel actions-panel">

                                <p className="footer-note">Changes save to story #{story?.id}.</p>

                                <div className="actions-row">
                                    <Link href={route('admin.stories.index')} className="btn btn-secondary">
                                        Cancel
                                    </Link>

                                    <button type="submit" className="btn btn-primary" disabled={processing}>
                                        {processing ? (
                                            'Saving…'
                                        ) : (
                                            <>
                                                <Icon name="save" size={14} />
                                                Update story
                                            </>
                                        )}
                                    </button>
                                </div>

                            </section>

                        </div>

                    </div>

                </form>

                <style>{`

                    [data-h-scope="story-edit"] {
                        --ink: #1d1d1f;
                        --ink-soft: #6e6e73;
                        --ink-faint: #a1a1a6;
                        --paper: #ffffff;
                        --surface: #ffffff;
                        --line: #e5e5e7;
                        --brand: #48d597;
                        --brand-ink: #157a4e;
                        --brand-wash: #eaf9f1;
                        --amber: #b8790f;
                        --amber-wash: #fbf1de;
                        --clay: #b5433a;
                        --clay-wash: #faeae8;

                        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
                        color: var(--ink);
                    }

                    [data-h-scope="story-edit"] * {
                        box-sizing: border-box;
                    }

                    .story-edit {
                        background: var(--paper);
                        min-height: 100vh;
                        padding: 32px clamp(18px, 4vw, 48px) 64px;
                    }

                    .story-edit form {
                        max-width: 1080px;
                        margin: 0 auto;
                    }

                    /* -------------------------------------------------------
                       HEADER
                    ------------------------------------------------------- */

                    .page-header {
                        border-bottom: 2px solid var(--ink);
                        padding-bottom: 20px;
                        margin-bottom: 24px;
                    }

                    .back-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                        font-size: 12px;
                        font-weight: 600;
                        color: var(--ink-soft);
                        text-decoration: none;
                        margin-bottom: 10px;
                    }

                    .back-link:hover {
                        color: var(--brand-ink);
                    }

                    .title-row {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        flex-wrap: wrap;
                    }

                    .page-header h1 {
                        margin: 0;
                        font-weight: 700;
                        font-size: clamp(20px, 2.4vw, 26px);
                        letter-spacing: -0.01em;
                    }

                    .editing-tag {
                        flex-shrink: 0;
                        font-size: 10.5px;
                        font-weight: 600;
                        color: var(--amber);
                        background: var(--amber-wash);
                        padding: 3px 9px;
                        border-radius: 999px;
                    }

                    .dek {
                        margin: 6px 0 0;
                        font-size: 12.5px;
                        color: var(--ink-soft);
                        max-width: 52ch;
                    }

                    /* -------------------------------------------------------
                       GRID
                    ------------------------------------------------------- */

                    .content-grid {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr) 320px;
                        gap: 18px;
                        align-items: start;
                    }

                    .main-column,
                    .sidebar {
                        display: flex;
                        flex-direction: column;
                        gap: 14px;
                    }

                    /* -------------------------------------------------------
                       PANEL
                    ------------------------------------------------------- */

                    .panel {
                        border: 1px solid var(--line);
                        border-radius: 10px;
                        background: var(--surface);
                    }

                    .panel-head {
                        padding: 14px 16px;
                        border-bottom: 1px solid var(--line);
                    }

                    .panel-head-row {
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        gap: 10px;
                    }

                    .panel-head h2 {
                        margin: 0;
                        font-size: 13px;
                        font-weight: 600;
                    }

                    .panel-head p {
                        margin: 3px 0 0;
                        font-size: 11.5px;
                        color: var(--ink-soft);
                    }

                    .word-count {
                        flex-shrink: 0;
                        font-size: 11px;
                        color: var(--ink-faint);
                        white-space: nowrap;
                        margin-top: 1px;
                    }

                    .panel-body {
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        gap: 14px;
                    }

                    /* -------------------------------------------------------
                       FIELDS
                    ------------------------------------------------------- */

                    .field-row {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 12px;
                    }

                    .field label {
                        display: block;
                        margin-bottom: 6px;
                        font-size: 12px;
                        font-weight: 600;
                        color: var(--ink);
                    }

                    .field label span {
                        color: var(--ink-faint);
                        font-weight: 500;
                        font-size: 10.5px;
                        margin-left: 4px;
                    }

                    .input,
                    .textarea {
                        width: 100%;
                        border: 1px solid var(--line);
                        border-radius: 8px;
                        background: var(--surface);
                        color: var(--ink);
                        font-family: inherit;
                        font-size: 13px;
                        outline: none;
                        transition: border-color 0.12s ease, box-shadow 0.12s ease;
                    }

                    .input {
                        height: 36px;
                        padding: 0 11px;
                    }

                    .textarea {
                        min-height: 220px;
                        padding: 11px;
                        resize: vertical;
                        line-height: 1.6;
                    }

                    .input:focus,
                    .textarea:focus {
                        border-color: var(--brand);
                        box-shadow: 0 0 0 3px var(--brand-wash);
                    }

                    .input.has-error,
                    .textarea.has-error {
                        border-color: var(--clay);
                    }

                    .error-text {
                        color: var(--clay);
                        font-size: 11px;
                        margin-top: 5px;
                    }

                    .hint {
                        display: block;
                        margin-top: 5px;
                        color: var(--ink-faint);
                        font-size: 10.5px;
                    }

                    /* -------------------------------------------------------
                       THUMBNAIL
                    ------------------------------------------------------- */

                    .thumb-preview {
                        position: relative;
                        width: 100%;
                        aspect-ratio: 16 / 9;
                        border-radius: 9px;
                        border: 1px solid var(--line);
                        overflow: hidden;
                        background: var(--brand-wash);
                        margin-bottom: 8px;
                    }

                    .thumb-preview img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }

                    .thumb-tag {
                        position: absolute;
                        left: 10px;
                        bottom: 10px;
                        padding: 4px 9px;
                        border-radius: 999px;
                        background: rgba(255, 255, 255, 0.94);
                        color: var(--ink-soft);
                        font-size: 10px;
                        font-weight: 600;
                    }

                    .thumb-empty {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 6px;
                        color: var(--ink-faint);
                        font-size: 12px;
                    }

                    .upload-box {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        height: 38px;
                        border: 1.5px dashed var(--line);
                        border-radius: 8px;
                        color: var(--ink-soft);
                        font-size: 12px;
                        cursor: pointer;
                        position: relative;
                    }

                    .upload-box:hover {
                        border-color: var(--brand);
                        color: var(--brand-ink);
                    }

                    .upload-box span {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        max-width: 220px;
                    }

                    .upload-box input {
                        position: absolute;
                        inset: 0;
                        opacity: 0;
                        cursor: pointer;
                    }

                    /* -------------------------------------------------------
                       PREVIEW CARD (mirrors the story index card)
                    ------------------------------------------------------- */

                    .preview-card {
                        border: 1px solid var(--line);
                        border-radius: 10px;
                        overflow: hidden;
                    }

                    .preview-thumb {
                        height: 100px;
                        background: var(--brand-wash);
                        color: var(--brand-ink);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                    }

                    .preview-thumb img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .preview-top {
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        gap: 8px;
                        padding: 12px 14px 0;
                    }

                    .preview-title {
                        font-size: 13px;
                        font-weight: 600;
                        line-height: 1.35;
                    }

                    .preview-excerpt {
                        margin: 5px 14px 10px;
                        font-size: 11.5px;
                        color: var(--ink-soft);
                        line-height: 1.5;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .preview-meta {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 8px;
                        padding: 10px 14px;
                        border-top: 1px solid var(--line);
                    }

                    .byline {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        font-size: 11px;
                        font-weight: 600;
                        color: var(--ink-soft);
                    }

                    .byline-avatar {
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        background: var(--brand-wash);
                        color: var(--brand-ink);
                        font-size: 9px;
                        font-weight: 800;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .preview-category {
                        display: inline-flex;
                        align-items: center;
                        gap: 4px;
                        font-size: 10.5px;
                        color: var(--ink-faint);
                    }

                    /* -------------------------------------------------------
                       STATUS PILL
                    ------------------------------------------------------- */

                    .status-pill {
                        flex-shrink: 0;
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                        padding: 3px 8px;
                        border-radius: 999px;
                        font-size: 9.5px;
                        font-weight: 700;
                        white-space: nowrap;
                    }

                    .status-dot {
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                    }

                    .status-pill.approved,
                    .status-pill.published {
                        color: var(--brand-ink);
                        background: var(--brand-wash);
                    }

                    .status-pill.approved .status-dot,
                    .status-pill.published .status-dot {
                        background: var(--brand);
                    }

                    .status-pill.pending {
                        color: var(--amber);
                        background: var(--amber-wash);
                    }

                    .status-pill.pending .status-dot {
                        background: var(--amber);
                    }

                    .status-pill.rejected {
                        color: var(--clay);
                        background: var(--clay-wash);
                    }

                    .status-pill.rejected .status-dot {
                        background: var(--clay);
                    }

                    /* -------------------------------------------------------
                       STATUS SELECTOR
                    ------------------------------------------------------- */

                    .status-grid {
                        display: flex;
                        flex-direction: column;
                        gap: 6px;
                    }

                    .status-option {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        padding: 9px 10px;
                        border: 1px solid var(--line);
                        border-radius: 8px;
                        background: var(--surface);
                        font-family: inherit;
                        text-align: left;
                        cursor: pointer;
                    }

                    .status-option:hover {
                        border-color: var(--ink-faint);
                    }

                    .status-option strong {
                        display: block;
                        font-size: 12px;
                        font-weight: 600;
                        color: var(--ink);
                    }

                    .status-option small {
                        display: block;
                        font-size: 10.5px;
                        color: var(--ink-soft);
                        margin-top: 1px;
                    }

                    .status-option .status-dot {
                        width: 7px;
                        height: 7px;
                        background: var(--ink-faint);
                        flex-shrink: 0;
                    }

                    .status-option.is-active {
                        border-color: var(--ink);
                        background: var(--paper);
                    }

                    .status-option.pending.is-active .status-dot { background: var(--amber); }
                    .status-option.approved.is-active .status-dot,
                    .status-option.published.is-active .status-dot { background: var(--brand); }
                    .status-option.rejected.is-active .status-dot { background: var(--clay); }

                    /* -------------------------------------------------------
                       ACTIONS
                    ------------------------------------------------------- */

                    .actions-panel {
                        padding: 14px;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }

                    .footer-note {
                        margin: 0;
                        font-size: 11px;
                        color: var(--ink-faint);
                    }

                    .actions-row {
                        display: flex;
                        gap: 8px;
                    }

                    .btn {
                        height: 36px;
                        border-radius: 7px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 6px;
                        font-family: inherit;
                        font-size: 12.5px;
                        font-weight: 600;
                        cursor: pointer;
                        text-decoration: none;
                        border: 1.5px solid transparent;
                        flex: 1;
                    }

                    .btn-secondary {
                        border-color: var(--line);
                        background: var(--surface);
                        color: var(--ink);
                    }

                    .btn-secondary:hover {
                        border-color: var(--ink-faint);
                    }

                    .btn-primary {
                        background: var(--ink);
                        color: #fff;
                        border-color: var(--ink);
                        flex: 1.3;
                    }

                    .btn-primary:hover {
                        background: var(--brand-ink);
                        border-color: var(--brand-ink);
                    }

                    .btn-primary:disabled {
                        opacity: 0.55;
                        cursor: not-allowed;
                    }

                    /* -------------------------------------------------------
                       RESPONSIVE
                    ------------------------------------------------------- */

                    @media (max-width: 900px) {

                        .content-grid {
                            grid-template-columns: 1fr;
                        }

                        .sidebar {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            align-items: start;
                        }

                        .actions-panel {
                            grid-column: 1 / -1;
                        }
                    }

                    @media (max-width: 620px) {

                        .story-edit {
                            padding: 22px 14px 48px;
                        }

                        .field-row {
                            grid-template-columns: 1fr;
                        }

                        .sidebar {
                            display: flex;
                        }
                    }

                `}</style>

            </div>
        </AppLayout>
    );
}