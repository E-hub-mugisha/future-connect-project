import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Form({ announcement = null, categories = [] }) {
    const isEdit = !!announcement;

    const { data, setData, post, put, processing, errors } = useForm({
        title: announcement?.title ?? '',
        content: announcement?.content ?? '',
        image: null,
        link: announcement?.link ?? '',
        category_id: announcement?.category_id ?? '',
        is_active: announcement?.is_active ?? false,
    });

    const [imagePreview, setImagePreview] = useState(
        announcement?.image ? `/storage/${announcement.image}` : null
    );

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isEdit) {
            put(route('admin.announcements.update', announcement.id), {
                forceFormData: true,
            });
        } else {
            post(route('admin.announcements.store'), {
                forceFormData: true,
            });
        }
    }

    return (
        <AppLayout>
            <Head title={isEdit ? 'Edit' : 'Create'} />

            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <h3 className="nk-block-title mb-4">{isEdit ? 'Edit' : 'Create'} Announcement</h3>

                        <div className="nk-block nk-block-lg">
                            <div className="card card-bordered shadow-sm">
                                <div className="card-inner">
                                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                                        <div className="mb-3">
                                            <label className="form-label">Title</label>
                                            <input
                                                type="text"
                                                value={data.title}
                                                onChange={e => setData('title', e.target.value)}
                                                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                                required
                                            />
                                            {errors.title && <div className="invalid-feedback d-block">{errors.title}</div>}
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Content</label>
                                            <textarea
                                                value={data.content}
                                                onChange={e => setData('content', e.target.value)}
                                                className={`form-control ${errors.content ? 'is-invalid' : ''}`}
                                                rows="5"
                                                required
                                            />
                                            {errors.content && <div className="invalid-feedback d-block">{errors.content}</div>}
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label className="form-label">Image</label>
                                                {imagePreview && (
                                                    <div className="mb-2">
                                                        <img
                                                            src={imagePreview}
                                                            alt="Announcement Image"
                                                            className="img-fluid rounded"
                                                            style={{ maxHeight: '120px' }}
                                                        />
                                                    </div>
                                                )}
                                                <input
                                                    type="file"
                                                    onChange={handleImageChange}
                                                    className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                                                />
                                                {errors.image && <div className="invalid-feedback d-block">{errors.image}</div>}
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <label className="form-label">Link</label>
                                                <input
                                                    type="text"
                                                    value={data.link}
                                                    onChange={e => setData('link', e.target.value)}
                                                    className={`form-control ${errors.link ? 'is-invalid' : ''}`}
                                                    placeholder="https://example.com"
                                                />
                                                {errors.link && <div className="invalid-feedback d-block">{errors.link}</div>}
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <label className="form-label">Category</label>
                                                <select
                                                    value={data.category_id}
                                                    onChange={e => setData('category_id', e.target.value)}
                                                    className={`form-select ${errors.category_id ? 'is-invalid' : ''}`}
                                                    required
                                                >
                                                    <option value="">-- Select Category --</option>
                                                    {categories.map(category => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.category_id && <div className="invalid-feedback d-block">{errors.category_id}</div>}
                                            </div>
                                        </div>

                                        <div className="form-check mb-3">
                                            <input
                                                type="checkbox"
                                                checked={data.is_active}
                                                onChange={e => setData('is_active', e.target.checked)}
                                                className="form-check-input"
                                                id="is_active"
                                            />
                                            <label className="form-check-label" htmlFor="is_active">Active</label>
                                        </div>

                                        {/* Submit */}
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary btn-lg" disabled={processing}>
                                                {isEdit ? 'Update' : 'Create'} Announcement
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
