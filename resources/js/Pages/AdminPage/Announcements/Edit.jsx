import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/*
|--------------------------------------------------------------------------
| Inline Icons
|--------------------------------------------------------------------------
*/

function Icon({
    name,
    size = 20,
    strokeWidth = 1.8,
    className = '',
}) {
    const props = {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className,
        'aria-hidden': 'true',
    };

    const icons = {
        megaphone: (
            <>
                <path d="M3 11v2a2 2 0 0 0 2 2h2l4 5h2l-2-5h2l7 3V6l-7 3H5a2 2 0 0 0-2 2Z" />
                <path d="M20 6v12" />
            </>
        ),

        arrowLeft: (
            <>
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
            </>
        ),

        save: (
            <>
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
                <path d="M17 21v-8H7v8" />
                <path d="M7 3v5h8" />
            </>
        ),

        image: (
            <>
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="8.5" cy="9" r="1.5" />
                <path d="m21 15-4.5-4.5L7 20" />
            </>
        ),

        upload: (
            <>
                <path d="M12 16V4" />
                <path d="m7 9 5-5 5 5" />
                <path d="M5 20h14" />
            </>
        ),

        link: (
            <>
                <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
                <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
            </>
        ),

        tag: (
            <>
                <path d="M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 11.9V5a2 2 0 0 1 2-2h6.9a2 2 0 0 1 1.4.6l7.2 7.1a2 2 0 0 1 0 2.8Z" />
                <circle cx="7.5" cy="7.5" r="1" />
            </>
        ),

        check: (
            <>
                <path d="m5 12 4 4L19 6" />
            </>
        ),

        checkCircle: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 2.5 2.5L16 9" />
            </>
        ),

        eye: (
            <>
                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                <circle cx="12" cy="12" r="2.5" />
            </>
        ),

        close: (
            <>
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
            </>
        ),
    };

    return (
        <svg {...props}>
            {icons[name]}
        </svg>
    );
}


/*
|--------------------------------------------------------------------------
| Announcement Form
|--------------------------------------------------------------------------
*/

export default function Form({
    announcement = null,
    categories = [],
}) {
    const isEdit = !!announcement;

    const {
        data,
        setData,
        post,
        put,
        processing,
        errors,
        progress,
    } = useForm({
        title: announcement?.title ?? '',
        content: announcement?.content ?? '',
        image: null,
        link: announcement?.link ?? '',
        category_id: announcement?.category_id ?? '',
        is_active: announcement?.is_active ?? false,
    });

    const [imagePreview, setImagePreview] = useState(
        announcement?.image
            ? '/storage/' +
                  String(announcement.image).replace(
                      /^\/+/,
                      ''
                  )
            : null
    );

    const [dragging, setDragging] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Image Upload
    |--------------------------------------------------------------------------
    */

    function handleImageChange(event) {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        setData('image', file);
        setImagePreview(URL.createObjectURL(file));
    }

    function handleDrop(event) {
        event.preventDefault();
        setDragging(false);

        const file = event.dataTransfer.files?.[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith('image/')) {
            return;
        }

        setData('image', file);
        setImagePreview(URL.createObjectURL(file));
    }

    function removeImage() {
        setData('image', null);

        if (announcement?.image) {
            setImagePreview(
                '/storage/' +
                    String(
                        announcement.image
                    ).replace(/^\/+/, '')
            );
        } else {
            setImagePreview(null);
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Submit
    |--------------------------------------------------------------------------
    */

    function handleSubmit(event) {
        event.preventDefault();

        if (isEdit) {
            put(
                route(
                    'admin.announcements.update',
                    announcement.id
                ),
                {
                    forceFormData: true,
                    preserveScroll: true,
                }
            );
        } else {
            post(
                route(
                    'admin.announcements.store'
                ),
                {
                    forceFormData: true,
                    preserveScroll: true,
                }
            );
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Helpers
    |--------------------------------------------------------------------------
    */

    const selectedCategory = categories.find(
        (category) =>
            String(category.id) ===
            String(data.category_id)
    );

    const contentLength = data.content?.length || 0;

    return (
        <AppLayout>

            <Head
                title={
                    isEdit
                        ? 'Edit Announcement'
                        : 'Create Announcement'
                }
            />

            <div className="announcement-form-page">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <header className="form-header">

                    <div className="form-header-main">

                        <div className="header-icon">
                            <Icon
                                name="megaphone"
                                size={24}
                            />
                        </div>

                        <div>

                            <div className="breadcrumb">

                                <Link
                                    href={route(
                                        'admin.announcements.index'
                                    )}
                                >
                                    Announcements
                                </Link>

                                <span>/</span>

                                <span>
                                    {isEdit
                                        ? 'Edit'
                                        : 'Create'}
                                </span>

                            </div>

                            <h1>
                                {isEdit
                                    ? 'Edit Announcement'
                                    : 'Create Announcement'}
                            </h1>

                            <p>
                                {isEdit
                                    ? 'Update the announcement information and visibility settings.'
                                    : 'Create a new announcement to share important information with your users.'}
                            </p>

                        </div>

                    </div>


                    <Link
                        href={route(
                            'admin.announcements.index'
                        )}
                        className="back-button"
                    >
                        <Icon
                            name="arrowLeft"
                            size={17}
                        />

                        Back to Announcements
                    </Link>

                </header>


                {/* =====================================================
                    FORM
                ===================================================== */}

                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >

                    <div className="form-layout">

                        {/* =================================================
                            LEFT COLUMN
                        ================================================= */}

                        <main className="form-main">

                            {/* =================================================
                                BASIC INFORMATION
                            ================================================= */}

                            <section className="form-card">

                                <div className="card-header">

                                    <div className="card-header-icon blue">
                                        <Icon
                                            name="megaphone"
                                            size={19}
                                        />
                                    </div>

                                    <div>

                                        <h2>
                                            Basic Information
                                        </h2>

                                        <p>
                                            Provide the main details
                                            of your announcement.
                                        </p>

                                    </div>

                                </div>


                                <div className="card-body">

                                    {/* Title */}

                                    <div className="field">

                                        <label htmlFor="title">
                                            Announcement Title
                                            <span>*</span>
                                        </label>

                                        <input
                                            id="title"
                                            type="text"
                                            value={data.title}
                                            onChange={(event) =>
                                                setData(
                                                    'title',
                                                    event.target
                                                        .value
                                                )
                                            }
                                            placeholder="Enter announcement title"
                                            className={
                                                errors.title
                                                    ? 'input error'
                                                    : 'input'
                                            }
                                            required
                                        />

                                        {errors.title && (
                                            <div className="field-error">
                                                {errors.title}
                                            </div>
                                        )}

                                    </div>


                                    {/* Content */}

                                    <div className="field">

                                        <div className="label-row">

                                            <label htmlFor="content">
                                                Announcement Content
                                                <span>*</span>
                                            </label>

                                            <small>
                                                {contentLength} characters
                                            </small>

                                        </div>

                                        <textarea
                                            id="content"
                                            value={
                                                data.content
                                            }
                                            onChange={(event) =>
                                                setData(
                                                    'content',
                                                    event.target
                                                        .value
                                                )
                                            }
                                            placeholder="Write your announcement here..."
                                            rows={10}
                                            className={
                                                errors.content
                                                    ? 'textarea error'
                                                    : 'textarea'
                                            }
                                            required
                                        />

                                        {errors.content && (
                                            <div className="field-error">
                                                {errors.content}
                                            </div>
                                        )}

                                        <p className="field-help">
                                            Write clear and concise
                                            information for your audience.
                                        </p>

                                    </div>

                                </div>

                            </section>


                            {/* =================================================
                                CATEGORY & LINK
                            ================================================= */}

                            <section className="form-card">

                                <div className="card-header">

                                    <div className="card-header-icon purple">
                                        <Icon
                                            name="tag"
                                            size={19}
                                        />
                                    </div>

                                    <div>

                                        <h2>
                                            Classification & Link
                                        </h2>

                                        <p>
                                            Organize the announcement
                                            and optionally add a resource.
                                        </p>

                                    </div>

                                </div>


                                <div className="card-body">

                                    <div className="two-columns">

                                        {/* Category */}

                                        <div className="field">

                                            <label htmlFor="category_id">
                                                Category
                                                <span>*</span>
                                            </label>

                                            <select
                                                id="category_id"
                                                value={
                                                    data.category_id
                                                }
                                                onChange={(event) =>
                                                    setData(
                                                        'category_id',
                                                        event.target
                                                            .value
                                                    )
                                                }
                                                className={
                                                    errors.category_id
                                                        ? 'select error'
                                                        : 'select'
                                                }
                                                required
                                            >

                                                <option value="">
                                                    Select a category
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


                                        {/* Link */}

                                        <div className="field">

                                            <label htmlFor="link">
                                                External Link
                                                <span className="optional">
                                                    Optional
                                                </span>
                                            </label>

                                            <div className="input-with-icon">

                                                <Icon
                                                    name="link"
                                                    size={17}
                                                />

                                                <input
                                                    id="link"
                                                    type="url"
                                                    value={
                                                        data.link
                                                    }
                                                    onChange={(event) =>
                                                        setData(
                                                            'link',
                                                            event.target
                                                                .value
                                                        )
                                                    }
                                                    placeholder="https://example.com"
                                                    className={
                                                        errors.link
                                                            ? 'input error'
                                                            : 'input'
                                                    }
                                                />

                                            </div>

                                            {errors.link && (
                                                <div className="field-error">
                                                    {errors.link}
                                                </div>
                                            )}

                                            <p className="field-help">
                                                Add an external page
                                                users can visit.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </section>


                            {/* =================================================
                                IMAGE
                            ================================================= */}

                            <section className="form-card">

                                <div className="card-header">

                                    <div className="card-header-icon orange">
                                        <Icon
                                            name="image"
                                            size={19}
                                        />
                                    </div>

                                    <div>

                                        <h2>
                                            Announcement Image
                                        </h2>

                                        <p>
                                            Add an optional image to
                                            make your announcement more engaging.
                                        </p>

                                    </div>

                                </div>


                                <div className="card-body">

                                    <div
                                        className={
                                            'upload-area ' +
                                            (dragging
                                                ? 'dragging '
                                                : '') +
                                            (imagePreview
                                                ? 'has-preview'
                                                : '')
                                        }
                                        onDragOver={(event) => {
                                            event.preventDefault();
                                            setDragging(true);
                                        }}
                                        onDragLeave={() =>
                                            setDragging(false)
                                        }
                                        onDrop={handleDrop}
                                    >

                                        {imagePreview ? (

                                            <div className="preview-wrapper">

                                                <img
                                                    src={
                                                        imagePreview
                                                    }
                                                    alt="Announcement preview"
                                                />

                                                <div className="preview-overlay">

                                                    <label
                                                        htmlFor="image"
                                                        className="change-image"
                                                    >
                                                        <Icon
                                                            name="upload"
                                                            size={16}
                                                        />

                                                        Change Image
                                                    </label>

                                                    <button
                                                        type="button"
                                                        className="remove-image"
                                                        onClick={
                                                            removeImage
                                                        }
                                                    >
                                                        <Icon
                                                            name="close"
                                                            size={15}
                                                        />

                                                        Remove
                                                    </button>

                                                </div>

                                            </div>

                                        ) : (

                                            <label
                                                htmlFor="image"
                                                className="upload-empty"
                                            >

                                                <div className="upload-icon">
                                                    <Icon
                                                        name="upload"
                                                        size={24}
                                                    />
                                                </div>

                                                <strong>
                                                    Upload an image
                                                </strong>

                                                <span>
                                                    Drag and drop an image
                                                    here, or click to browse
                                                </span>

                                                <small>
                                                    PNG, JPG or WEBP
                                                </small>

                                            </label>

                                        )}

                                        <input
                                            id="image"
                                            type="file"
                                            accept="image/png,image/jpeg,image/webp"
                                            onChange={
                                                handleImageChange
                                            }
                                            className="file-input"
                                        />

                                    </div>

                                    {errors.image && (
                                        <div className="field-error image-error">
                                            {errors.image}
                                        </div>
                                    )}

                                    {progress && (
                                        <div className="upload-progress">

                                            <div className="progress-header">
                                                <span>
                                                    Uploading image...
                                                </span>

                                                <strong>
                                                    {progress.percentage}%
                                                </strong>
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

                            </section>

                        </main>


                        {/* =================================================
                            RIGHT SIDEBAR
                        ================================================= */}

                        <aside className="form-sidebar">

                            {/* =================================================
                                STATUS
                            ================================================= */}

                            <section className="sidebar-card">

                                <div className="sidebar-card-header">

                                    <h3>
                                        Publication Status
                                    </h3>

                                </div>


                                <div className="status-options">

                                    <button
                                        type="button"
                                        className={
                                            data.is_active
                                                ? 'status-option active'
                                                : 'status-option'
                                        }
                                        onClick={() =>
                                            setData(
                                                'is_active',
                                                true
                                            )
                                        }
                                    >

                                        <span className="status-option-icon green">
                                            <Icon
                                                name="checkCircle"
                                                size={17}
                                            />
                                        </span>

                                        <span className="status-option-copy">

                                            <strong>
                                                Active
                                            </strong>

                                            <small>
                                                Visible to users
                                            </small>

                                        </span>

                                        <span className="radio">
                                            {data.is_active && (
                                                <span />
                                            )}
                                        </span>

                                    </button>


                                    <button
                                        type="button"
                                        className={
                                            !data.is_active
                                                ? 'status-option selected'
                                                : 'status-option'
                                        }
                                        onClick={() =>
                                            setData(
                                                'is_active',
                                                false
                                            )
                                        }
                                    >

                                        <span className="status-option-icon gray">
                                            <Icon
                                                name="eye"
                                                size={17}
                                            />
                                        </span>

                                        <span className="status-option-copy">

                                            <strong>
                                                Inactive
                                            </strong>

                                            <small>
                                                Hidden from users
                                            </small>

                                        </span>

                                        <span className="radio">
                                            {!data.is_active && (
                                                <span />
                                            )}
                                        </span>

                                    </button>

                                </div>

                            </section>


                            {/* =================================================
                                LIVE PREVIEW
                            ================================================= */}

                            <section className="sidebar-card preview-card">

                                <div className="sidebar-card-header">

                                    <div>

                                        <h3>
                                            Live Preview
                                        </h3>

                                        <span>
                                            Preview how it will appear
                                        </span>

                                    </div>

                                    <Icon
                                        name="eye"
                                        size={17}
                                    />

                                </div>


                                <div className="announcement-preview">

                                    {imagePreview ? (

                                        <div className="preview-image">

                                            <img
                                                src={
                                                    imagePreview
                                                }
                                                alt=""
                                            />

                                        </div>

                                    ) : (

                                        <div className="preview-image-placeholder">

                                            <Icon
                                                name="megaphone"
                                                size={25}
                                            />

                                        </div>

                                    )}


                                    <div className="preview-content">

                                        <div className="preview-category">

                                            {selectedCategory?.name ||
                                                'Announcement'}

                                        </div>

                                        <h4>
                                            {data.title ||
                                                'Announcement title'}
                                        </h4>

                                        <p>

                                            {data.content
                                                ? data.content.length >
                                                  130
                                                    ? data.content.slice(
                                                          0,
                                                          130
                                                      ) + '…'
                                                    : data.content
                                                : 'Your announcement content will appear here.'}

                                        </p>

                                        <div className="preview-footer">

                                            <span>
                                                {data.is_active
                                                    ? 'Active'
                                                    : 'Inactive'}
                                            </span>

                                            {data.link && (
                                                <Icon
                                                    name="link"
                                                    size={13}
                                                />
                                            )}

                                        </div>

                                    </div>

                                </div>

                            </section>


                            {/* =================================================
                                QUICK TIPS
                            ================================================= */}

                            <section className="tip-card">

                                <div className="tip-icon">
                                    <Icon
                                        name="check"
                                        size={17}
                                    />
                                </div>

                                <div>

                                    <strong>
                                        Quick tip
                                    </strong>

                                    <p>
                                        Keep your announcement title
                                        short and make the main message
                                        easy to understand.
                                    </p>

                                </div>

                            </section>

                        </aside>

                    </div>


                    {/* =================================================
                        FOOTER ACTIONS
                    ================================================= */}

                    <footer className="form-footer">

                        <Link
                            href={route(
                                'admin.announcements.index'
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

                            {processing ? (

                                <>
                                    <span className="spinner" />

                                    {isEdit
                                        ? 'Updating...'
                                        : 'Creating...'}
                                </>

                            ) : (

                                <>
                                    <Icon
                                        name="save"
                                        size={17}
                                    />

                                    {isEdit
                                        ? 'Update Announcement'
                                        : 'Create Announcement'}
                                </>

                            )}

                        </button>

                    </footer>

                </form>

            </div>


            {/* =========================================================
                STYLES
            ========================================================= */}

            <style>{`

                * {
                    box-sizing: border-box;
                }

                .announcement-form-page {
                    min-height: 100vh;
                    padding: 28px;
                    background: #f7f9fc;
                    color: #172033;
                }

                /* =====================================================
                   HEADER
                ===================================================== */

                .form-header {
                    max-width: 1440px;
                    margin: 0 auto 24px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                }

                .form-header-main {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .header-icon {
                    width: 52px;
                    height: 52px;
                    flex-shrink: 0;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #059669;
                    background: #ecfdf5;
                    border: 1px solid #d1fae5;
                }

                .breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 5px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .breadcrumb a {
                    color: #059669;
                    text-decoration: none;
                }

                .breadcrumb a:hover {
                    text-decoration: underline;
                }

                .breadcrumb span {
                    color: #98a2b3;
                }

                .form-header h1 {
                    margin: 0;
                    color: #101828;
                    font-size: 27px;
                    font-weight: 750;
                    letter-spacing: -.5px;
                }

                .form-header p {
                    margin: 5px 0 0;
                    color: #667085;
                    font-size: 13px;
                }

                .back-button {
                    min-height: 40px;
                    padding: 0 13px;
                    border: 1px solid #d0d5dd;
                    border-radius: 9px;
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    color: #344054;
                    background: #ffffff;
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .back-button:hover {
                    background: #f9fafb;
                    border-color: #98a2b3;
                }

                /* =====================================================
                   LAYOUT
                ===================================================== */

                .form-layout {
                    max-width: 1440px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 340px;
                    gap: 20px;
                    align-items: start;
                }

                .form-main {
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .form-sidebar {
                    position: sticky;
                    top: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                /* =====================================================
                   CARDS
                ===================================================== */

                .form-card,
                .sidebar-card,
                .tip-card {
                    background: #ffffff;
                    border: 1px solid #e6eaf0;
                    border-radius: 15px;
                    box-shadow: 0 2px 6px rgba(16, 24, 40, .025);
                }

                .form-card {
                    overflow: hidden;
                }

                .card-header {
                    padding: 20px 22px;
                    border-bottom: 1px solid #eef1f5;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .card-header-icon {
                    width: 39px;
                    height: 39px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .card-header-icon.blue {
                    color: #2563eb;
                    background: #eff6ff;
                }

                .card-header-icon.purple {
                    color: #7c3aed;
                    background: #f5f3ff;
                }

                .card-header-icon.orange {
                    color: #ea580c;
                    background: #fff7ed;
                }

                .card-header h2 {
                    margin: 0 0 3px;
                    color: #101828;
                    font-size: 15px;
                    font-weight: 750;
                }

                .card-header p {
                    margin: 0;
                    color: #98a2b3;
                    font-size: 11px;
                }

                .card-body {
                    padding: 22px;
                }

                /* =====================================================
                   FIELDS
                ===================================================== */

                .field {
                    margin-bottom: 21px;
                }

                .field:last-child {
                    margin-bottom: 0;
                }

                .field label {
                    display: block;
                    margin-bottom: 7px;
                    color: #344054;
                    font-size: 12px;
                    font-weight: 700;
                }

                .field label > span:not(.optional) {
                    margin-left: 3px;
                    color: #dc2626;
                }

                .field label .optional {
                    margin-left: 6px;
                    color: #98a2b3;
                    font-size: 10px;
                    font-weight: 500;
                }

                .label-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .label-row small {
                    color: #98a2b3;
                    font-size: 10px;
                }

                .input,
                .select,
                .textarea {
                    width: 100%;
                    border: 1px solid #d0d5dd;
                    border-radius: 9px;
                    outline: none;
                    color: #344054;
                    background: #ffffff;
                    font-family: inherit;
                    font-size: 13px;
                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;
                }

                .input {
                    height: 43px;
                    padding: 0 13px;
                }

                .select {
                    height: 43px;
                    padding: 0 12px;
                    cursor: pointer;
                }

                .textarea {
                    min-height: 220px;
                    padding: 12px 13px;
                    line-height: 1.7;
                    resize: vertical;
                }

                .input::placeholder,
                .textarea::placeholder {
                    color: #b2b8c2;
                }

                .input:focus,
                .select:focus,
                .textarea:focus {
                    border-color: #059669;
                    box-shadow: 0 0 0 3px rgba(5, 150, 105, .09);
                }

                .input.error,
                .select.error,
                .textarea.error {
                    border-color: #ef4444;
                }

                .input-with-icon {
                    position: relative;
                }

                .input-with-icon > svg {
                    position: absolute;
                    left: 13px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #98a2b3;
                    pointer-events: none;
                }

                .input-with-icon .input {
                    padding-left: 40px;
                }

                .field-error {
                    margin-top: 6px;
                    color: #dc2626;
                    font-size: 11px;
                    font-weight: 600;
                }

                .field-help {
                    margin: 6px 0 0;
                    color: #98a2b3;
                    font-size: 10px;
                    line-height: 1.5;
                }

                .two-columns {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 18px;
                }

                /* =====================================================
                   IMAGE UPLOAD
                ===================================================== */

                .upload-area {
                    position: relative;
                    min-height: 245px;
                    overflow: hidden;
                    border: 1.5px dashed #cfd6df;
                    border-radius: 12px;
                    background: #fafbfc;
                    transition: .2s ease;
                }

                .upload-area:hover,
                .upload-area.dragging {
                    border-color: #059669;
                    background: #f0fdf4;
                }

                .upload-area.has-preview {
                    border-style: solid;
                    border-color: #e4e7ec;
                    background: #f8fafc;
                }

                .file-input {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    opacity: 0;
                    pointer-events: none;
                }

                .upload-empty {
                    min-height: 245px;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    cursor: pointer;
                }

                .upload-icon {
                    width: 52px;
                    height: 52px;
                    margin-bottom: 13px;
                    border-radius: 13px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #059669;
                    background: #ecfdf5;
                }

                .upload-empty strong {
                    color: #344054;
                    font-size: 13px;
                }

                .upload-empty span {
                    max-width: 300px;
                    margin-top: 5px;
                    color: #98a2b3;
                    font-size: 11px;
                    line-height: 1.5;
                }

                .upload-empty small {
                    margin-top: 8px;
                    color: #b0b7c2;
                    font-size: 10px;
                }

                .preview-wrapper {
                    position: relative;
                    min-height: 245px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f8fafc;
                }

                .preview-wrapper img {
                    display: block;
                    width: 100%;
                    height: 245px;
                    object-fit: contain;
                }

                .preview-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    opacity: 0;
                    background: rgba(15, 23, 42, .58);
                    transition: opacity .2s ease;
                }

                .preview-wrapper:hover .preview-overlay {
                    opacity: 1;
                }

                .change-image,
                .remove-image {
                    height: 36px;
                    padding: 0 11px;
                    border-radius: 8px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    font-weight: 700;
                    cursor: pointer;
                }

                .change-image {
                    color: #344054;
                    background: #ffffff;
                }

                .remove-image {
                    border: 0;
                    color: #ffffff;
                    background: #dc2626;
                }

                .image-error {
                    margin-top: 8px;
                }

                .upload-progress {
                    margin-top: 12px;
                }

                .progress-header {
                    margin-bottom: 5px;
                    display: flex;
                    justify-content: space-between;
                    color: #667085;
                    font-size: 10px;
                }

                .progress-track {
                    height: 5px;
                    overflow: hidden;
                    border-radius: 99px;
                    background: #e5e7eb;
                }

                .progress-bar {
                    height: 100%;
                    border-radius: inherit;
                    background: #059669;
                    transition: width .2s ease;
                }

                /* =====================================================
                   SIDEBAR STATUS
                ===================================================== */

                .sidebar-card {
                    overflow: hidden;
                }

                .sidebar-card-header {
                    padding: 16px 17px;
                    border-bottom: 1px solid #eef1f5;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                }

                .sidebar-card-header h3 {
                    margin: 0;
                    color: #101828;
                    font-size: 14px;
                    font-weight: 750;
                }

                .sidebar-card-header span {
                    display: block;
                    margin-top: 3px;
                    color: #98a2b3;
                    font-size: 10px;
                }

                .sidebar-card-header > svg {
                    color: #98a2b3;
                }

                .status-options {
                    padding: 10px;
                }

                .status-option {
                    width: 100%;
                    padding: 12px 9px;
                    margin-bottom: 5px;
                    border: 1px solid transparent;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-align: left;
                    background: transparent;
                    cursor: pointer;
                    transition: .15s ease;
                }

                .status-option:last-child {
                    margin-bottom: 0;
                }

                .status-option:hover {
                    background: #f8fafc;
                }

                .status-option.active,
                .status-option.selected {
                    border-color: #bbf7d0;
                    background: #f0fdf4;
                }

                .status-option-icon {
                    width: 34px;
                    height: 34px;
                    flex-shrink: 0;
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .status-option-icon.green {
                    color: #059669;
                    background: #dcfce7;
                }

                .status-option-icon.gray {
                    color: #64748b;
                    background: #f1f5f9;
                }

                .status-option-copy {
                    flex: 1;
                }

                .status-option-copy strong {
                    display: block;
                    color: #344054;
                    font-size: 12px;
                }

                .status-option-copy small {
                    display: block;
                    margin-top: 2px;
                    color: #98a2b3;
                    font-size: 10px;
                }

                .radio {
                    width: 17px;
                    height: 17px;
                    border: 1.5px solid #cbd5e1;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .radio span {
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background: #059669;
                }

                /* =====================================================
                   LIVE PREVIEW
                ===================================================== */

                .preview-card .sidebar-card-header {
                    background: #fafbfc;
                }

                .announcement-preview {
                    margin: 14px;
                    overflow: hidden;
                    border: 1px solid #e4e7ec;
                    border-radius: 12px;
                    background: #ffffff;
                }

                .preview-image,
                .preview-image-placeholder {
                    width: 100%;
                    height: 125px;
                }

                .preview-image {
                    background: #f8fafc;
                }

                .preview-image img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                }

                .preview-image-placeholder {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #059669;
                    background: #ecfdf5;
                }

                .preview-content {
                    padding: 13px;
                }

                .preview-category {
                    margin-bottom: 5px;
                    color: #059669;
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: .5px;
                    text-transform: uppercase;
                }

                .preview-content h4 {
                    margin: 0;
                    color: #101828;
                    font-size: 14px;
                    line-height: 1.35;
                    font-weight: 750;
                }

                .preview-content p {
                    margin: 7px 0 12px;
                    color: #667085;
                    font-size: 10px;
                    line-height: 1.55;
                }

                .preview-footer {
                    padding-top: 9px;
                    border-top: 1px solid #eef1f5;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: #059669;
                    font-size: 9px;
                    font-weight: 750;
                }

                /* =====================================================
                   TIP
                ===================================================== */

                .tip-card {
                    padding: 14px;
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    background: #fffbeb;
                    border-color: #fde68a;
                }

                .tip-icon {
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #d97706;
                    background: #fef3c7;
                }

                .tip-card strong {
                    display: block;
                    color: #92400e;
                    font-size: 11px;
                }

                .tip-card p {
                    margin: 3px 0 0;
                    color: #a16207;
                    font-size: 10px;
                    line-height: 1.5;
                }

                /* =====================================================
                   FOOTER
                ===================================================== */

                .form-footer {
                    max-width: 1440px;
                    margin: 20px auto 0;
                    padding: 16px 0;
                    border-top: 1px solid #e4e7ec;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 9px;
                }

                .cancel-button {
                    height: 42px;
                    padding: 0 17px;
                    border: 1px solid #d0d5dd;
                    border-radius: 9px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #344054;
                    background: #ffffff;
                    font-size: 12px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .cancel-button:hover {
                    background: #f9fafb;
                }

                .submit-button {
                    min-width: 190px;
                    height: 42px;
                    padding: 0 17px;
                    border: 0;
                    border-radius: 9px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    color: #ffffff;
                    background: #059669;
                    font-size: 12px;
                    font-weight: 750;
                    cursor: pointer;
                    transition: .15s ease;
                }

                .submit-button:hover:not(:disabled) {
                    background: #047857;
                    transform: translateY(-1px);
                }

                .submit-button:disabled {
                    opacity: .65;
                    cursor: not-allowed;
                }

                .spinner {
                    width: 15px;
                    height: 15px;
                    border: 2px solid rgba(255,255,255,.35);
                    border-top-color: #ffffff;
                    border-radius: 50%;
                    animation: spin .7s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* =====================================================
                   RESPONSIVE
                ===================================================== */

                @media (max-width: 1050px) {

                    .form-layout {
                        grid-template-columns: minmax(0, 1fr) 290px;
                    }

                }

                @media (max-width: 850px) {

                    .announcement-form-page {
                        padding: 20px 15px;
                    }

                    .form-header {
                        flex-direction: column;
                    }

                    .back-button {
                        align-self: flex-start;
                    }

                    .form-layout {
                        grid-template-columns: 1fr;
                    }

                    .form-sidebar {
                        position: static;
                    }

                    .two-columns {
                        grid-template-columns: 1fr;
                    }

                }

                @media (max-width: 600px) {

                    .form-header-main {
                        align-items: flex-start;
                    }

                    .form-header h1 {
                        font-size: 22px;
                    }

                    .header-icon {
                        width: 45px;
                        height: 45px;
                    }

                    .card-header {
                        padding: 17px;
                    }

                    .card-body {
                        padding: 17px;
                    }

                    .form-footer {
                        flex-direction: column-reverse;
                        align-items: stretch;
                    }

                    .cancel-button,
                    .submit-button {
                        width: 100%;
                    }

                    .upload-empty {
                        padding: 20px;
                    }

                }

            `}</style>

        </AppLayout>
    );
}