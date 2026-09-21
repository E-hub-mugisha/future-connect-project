```jsx
import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Form(props) {
    const announcement = props.announcement || null;
    const categories = props.categories || [];
    const isEdit = announcement !== null;

    const { data, setData, post, put, processing, errors } = useForm({
        title: announcement && announcement.title
            ? announcement.title
            : '',
        content: announcement && announcement.content
            ? announcement.content
            : '',
        image: null,
        link: announcement && announcement.link
            ? announcement.link
            : '',
        category_id: announcement && announcement.category_id
            ? announcement.category_id
            : '',
        is_active: announcement
            ? Boolean(announcement.is_active)
            : false,
    });

    const [imagePreview, setImagePreview] = useState(
        announcement && announcement.image
            ? '/storage/' + announcement.image
            : null
    );

    const handleImageChange = (event) => {
        const file = event.target.files && event.target.files[0];

        if (!file) {
            return;
        }

        setData('image', file);
        setImagePreview(URL.createObjectURL(file));
    };

    const removeImage = () => {
        setData('image', null);
        setImagePreview(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isEdit) {
            put(
                route('admin.announcements.update', announcement.id),
                {
                    forceFormData: true,
                }
            );
        } else {
            post(
                route('admin.announcements.store'),
                {
                    forceFormData: true,
                }
            );
        }
    };

    let selectedCategory = null;

    for (let i = 0; i < categories.length; i++) {
        if (
            String(categories[i].id) ===
            String(data.category_id)
        ) {
            selectedCategory = categories[i];
            break;
        }
    }

    return (
        <AppLayout>
            <Head
                title={
                    isEdit
                        ? 'Edit Announcement'
                        : 'Create Announcement'
                }
            />

            <div className="container-fluid py-4">

                {/* Header */}
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">

                    <div className="d-flex align-items-center">
                        <div className="bg-primary text-white rounded-3 p-3 me-3">
                            <i className="bi bi-megaphone-fill fs-4"></i>
                        </div>

                        <div>
                            <h3 className="fw-bold mb-1">
                                {isEdit
                                    ? 'Edit Announcement'
                                    : 'Create Announcement'}
                            </h3>

                            <p className="text-muted mb-0">
                                {isEdit
                                    ? 'Update your announcement details.'
                                    : 'Create a new announcement for your users.'}
                            </p>
                        </div>
                    </div>

                    <span
                        className={
                            data.is_active
                                ? 'badge bg-success rounded-pill px-3 py-2 mt-3 mt-md-0'
                                : 'badge bg-secondary rounded-pill px-3 py-2 mt-3 mt-md-0'
                        }
                    >
                        <i
                            className={
                                data.is_active
                                    ? 'bi bi-check-circle me-1'
                                    : 'bi bi-file-earmark me-1'
                            }
                        ></i>

                        {data.is_active
                            ? 'Published'
                            : 'Draft'}
                    </span>
                </div>

                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <div className="row g-4">

                        {/* FORM */}
                        <div className="col-xl-8">

                            <div className="card card-bordered shadow-sm">

                                <div className="card-inner">

                                    <div className="mb-4">
                                        <h5 className="fw-bold mb-1">
                                            Announcement Details
                                        </h5>

                                        <p className="text-muted small mb-0">
                                            Enter the information for your
                                            announcement.
                                        </p>
                                    </div>

                                    {/* Title */}
                                    <div className="mb-4">

                                        <label className="form-label fw-semibold">
                                            Title
                                            <span className="text-danger ms-1">
                                                *
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
                                            className={
                                                errors.title
                                                    ? 'form-control form-control-lg is-invalid'
                                                    : 'form-control form-control-lg'
                                            }
                                            placeholder="Enter announcement title"
                                            required
                                        />

                                        {errors.title && (
                                            <div className="invalid-feedback">
                                                {errors.title}
                                            </div>
                                        )}

                                    </div>

                                    {/* Content */}
                                    <div className="mb-4">

                                        <div className="d-flex justify-content-between">

                                            <label className="form-label fw-semibold">
                                                Content
                                                <span className="text-danger ms-1">
                                                    *
                                                </span>
                                            </label>

                                            <small className="text-muted">
                                                {data.content.length} characters
                                            </small>

                                        </div>

                                        <textarea
                                            value={data.content}
                                            onChange={(event) =>
                                                setData(
                                                    'content',
                                                    event.target.value
                                                )
                                            }
                                            className={
                                                errors.content
                                                    ? 'form-control is-invalid'
                                                    : 'form-control'
                                            }
                                            rows="8"
                                            placeholder="Write your announcement here..."
                                            required
                                        ></textarea>

                                        {errors.content && (
                                            <div className="invalid-feedback">
                                                {errors.content}
                                            </div>
                                        )}

                                    </div>

                                    {/* Category and Link */}
                                    <div className="row g-4">

                                        <div className="col-md-6">

                                            <label className="form-label fw-semibold">
                                                Category
                                                <span className="text-danger ms-1">
                                                    *
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
                                                className={
                                                    errors.category_id
                                                        ? 'form-select form-select-lg is-invalid'
                                                        : 'form-select form-select-lg'
                                                }
                                                required
                                            >
                                                <option value="">
                                                    Select Category
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
                                                <div className="invalid-feedback">
                                                    {
                                                        errors.category_id
                                                    }
                                                </div>
                                            )}

                                        </div>

                                        <div className="col-md-6">

                                            <label className="form-label fw-semibold">
                                                External Link
                                            </label>

                                            <div className="input-group input-group-lg">

                                                <span className="input-group-text">
                                                    <i className="bi bi-link-45deg"></i>
                                                </span>

                                                <input
                                                    type="url"
                                                    value={data.link}
                                                    onChange={(event) =>
                                                        setData(
                                                            'link',
                                                            event.target.value
                                                        )
                                                    }
                                                    className={
                                                        errors.link
                                                            ? 'form-control is-invalid'
                                                            : 'form-control'
                                                    }
                                                    placeholder="https://example.com"
                                                />

                                            </div>

                                            {errors.link && (
                                                <div className="text-danger small mt-1">
                                                    {errors.link}
                                                </div>
                                            )}

                                        </div>

                                    </div>

                                    {/* Image */}
                                    <div className="mt-4">

                                        <label className="form-label fw-semibold">
                                            Announcement Image
                                        </label>

                                        {!imagePreview ? (

                                            <div className="border border-2 border-dashed rounded-4 p-5 text-center bg-light">

                                                <div className="mb-3">
                                                    <i className="bi bi-cloud-arrow-up fs-1 text-primary"></i>
                                                </div>

                                                <h6 className="fw-bold">
                                                    Upload Image
                                                </h6>

                                                <p className="text-muted small">
                                                    Choose an image for your
                                                    announcement
                                                </p>

                                                <label
                                                    htmlFor="announcement-image"
                                                    className="btn btn-outline-primary"
                                                >
                                                    <i className="bi bi-upload me-2"></i>
                                                    Choose Image
                                                </label>

                                                <input
                                                    id="announcement-image"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={
                                                        handleImageChange
                                                    }
                                                    className="d-none"
                                                />

                                                <div className="mt-2">
                                                    <small className="text-muted">
                                                        JPG, PNG or WEBP
                                                    </small>
                                                </div>

                                            </div>

                                        ) : (

                                            <div className="position-relative">

                                                <img
                                                    src={imagePreview}
                                                    alt="Announcement preview"
                                                    className="img-fluid rounded-4 w-100"
                                                    style={{
                                                        height: '280px',
                                                        objectFit: 'cover',
                                                    }}
                                                />

                                                <div className="position-absolute top-0 end-0 p-3">

                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-sm rounded-circle"
                                                        onClick={
                                                            removeImage
                                                        }
                                                        title="Remove image"
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>

                                                </div>

                                                <label
                                                    htmlFor="replace-image"
                                                    className="position-absolute bottom-0 start-0 m-3 btn btn-light btn-sm"
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <i className="bi bi-camera me-1"></i>
                                                    Change Image

                                                    <input
                                                        id="replace-image"
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={
                                                            handleImageChange
                                                        }
                                                        className="d-none"
                                                    />
                                                </label>

                                            </div>

                                        )}

                                        {errors.image && (
                                            <div className="text-danger small mt-2">
                                                {errors.image}
                                            </div>
                                        )}

                                    </div>

                                    {/* Publish */}
                                    <div className="mt-4">

                                        <div className="bg-light border rounded-4 p-3">

                                            <div className="d-flex justify-content-between align-items-center">

                                                <div className="d-flex align-items-center">

                                                    <div
                                                        className={
                                                            data.is_active
                                                                ? 'bg-success-subtle text-success rounded-circle p-3 me-3'
                                                                : 'bg-secondary-subtle text-secondary rounded-circle p-3 me-3'
                                                        }
                                                    >
                                                        <i
                                                            className={
                                                                data.is_active
                                                                    ? 'bi bi-broadcast'
                                                                    : 'bi bi-pause-circle'
                                                            }
                                                        ></i>
                                                    </div>

                                                    <div>

                                                        <h6 className="fw-bold mb-1">
                                                            Publish Announcement
                                                        </h6>

                                                        <small className="text-muted">
                                                            {data.is_active
                                                                ? 'The announcement is visible to users.'
                                                                : 'The announcement will remain a draft.'}
                                                        </small>

                                                    </div>

                                                </div>

                                                <div className="form-check form-switch">

                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="is_active"
                                                        checked={
                                                            data.is_active
                                                        }
                                                        onChange={(event) =>
                                                            setData(
                                                                'is_active',
                                                                event.target.checked
                                                            )
                                                        }
                                                        style={{
                                                            width: '45px',
                                                            height: '23px',
                                                        }}
                                                    />

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* Footer */}
                                <div className="card-footer bg-white">

                                    <div className="d-flex justify-content-end gap-2">

                                        <button
                                            type="button"
                                            className="btn btn-light"
                                            onClick={() =>
                                                window.history.back()
                                            }
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            {processing ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                                    Saving...
                                                </>
                                            ) : (
                                                <>
                                                    <i
                                                        className={
                                                            isEdit
                                                                ? 'bi bi-check-lg me-2'
                                                                : 'bi bi-plus-lg me-2'
                                                        }
                                                    ></i>

                                                    {isEdit
                                                        ? 'Update Announcement'
                                                        : 'Create Announcement'}
                                                </>
                                            )}
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* PREVIEW */}
                        <div className="col-xl-4">

                            <div className="card card-bordered shadow-sm">

                                <div className="card-inner">

                                    <div className="d-flex align-items-center mb-4">

                                        <div className="bg-primary-subtle text-primary rounded-3 p-3 me-3">
                                            <i className="bi bi-eye fs-5"></i>
                                        </div>

                                        <div>
                                            <h5 className="fw-bold mb-1">
                                                Preview
                                            </h5>

                                            <small className="text-muted">
                                                Live announcement preview
                                            </small>
                                        </div>

                                    </div>

                                    {/* Preview Card */}
                                    <div className="card border shadow-sm">

                                        {imagePreview ? (

                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="card-img-top"
                                                style={{
                                                    height: '180px',
                                                    objectFit: 'cover',
                                                }}
                                            />

                                        ) : (

                                            <div
                                                className="bg-light d-flex flex-column align-items-center justify-content-center text-muted"
                                                style={{
                                                    height: '180px',
                                                }}
                                            >
                                                <i className="bi bi-image fs-1 mb-2"></i>

                                                <small>
                                                    No image selected
                                                </small>
                                            </div>

                                        )}

                                        <div className="card-body">

                                            <div className="d-flex justify-content-between align-items-center mb-3">

                                                <span className="badge bg-primary-subtle text-primary rounded-pill">
                                                    {selectedCategory
                                                        ? selectedCategory.name
                                                        : 'Category'}
                                                </span>

                                                <span
                                                    className={
                                                        data.is_active
                                                            ? 'badge bg-success-subtle text-success rounded-pill'
                                                            : 'badge bg-secondary-subtle text-secondary rounded-pill'
                                                    }
                                                >
                                                    {data.is_active
                                                        ? 'Published'
                                                        : 'Draft'}
                                                </span>

                                            </div>

                                            <h5 className="fw-bold">
                                                {data.title ||
                                                    'Announcement Title'}
                                            </h5>

                                            <p className="text-muted small mb-0">
                                                {data.content ||
                                                    'Your announcement content will appear here.'}
                                            </p>

                                            {data.link && (
                                                <div className="border-top mt-3 pt-3">

                                                    <span className="text-primary small fw-semibold">
                                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                                        Learn More
                                                    </span>

                                                </div>
                                            )}

                                        </div>

                                    </div>

                                    <div className="alert alert-light border mt-4 mb-0">

                                        <small className="text-muted">

                                            <i className="bi bi-lightbulb text-warning me-2"></i>

                                            The preview updates automatically
                                            as you type.

                                        </small>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
```
