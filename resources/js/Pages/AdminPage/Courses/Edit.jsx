import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Form({ course = null, categories = [], talents = [] }) {
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
        course?.thumbnail ? `/images/thumbnails/${course.thumbnail}` : '/images/placeholder-course.png'
    );

    function handleThumbChange(e) {
        const file = e.target.files[0];
        if (file) {
            setData('thumbnail', file);
            setThumbPreview(URL.createObjectURL(file));
        }
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

    return (
        <AppLayout>
            <Head title={isEdit ? 'Edit Course' : 'New Course'} />

            <style>{`
                :root{
                    --c-bg:#f7f8fa;
                    --c-card:#F5f5f7;
                    --c-border:#e9ecf1;
                    --c-text:#1f2430;
                    --c-muted:#7b828f;
                    --c-primary:#4f46e5;
                    --c-primary-soft:#eef0ff;
                    --c-radius:14px;
                }
                .page-wrap{ background:var(--c-bg); }
                .form-card{
                    background:var(--c-card);
                    border:1px solid var(--c-border);
                    border-radius:var(--c-radius);
                    padding:1.75rem;
                }
                .section-title{
                    font-size:.95rem; font-weight:700; color:var(--c-text);
                    margin-bottom:1rem; display:flex; align-items:center; gap:.5rem;
                }
                .section-title i{ color:var(--c-primary); }
                .form-label{ font-size:.82rem; font-weight:600; color:var(--c-text); }
                .form-control, .form-select{
                    border-radius:10px; border:1px solid var(--c-border); font-size:.9rem;
                    padding:.6rem .85rem;
                }
                .form-control:focus, .form-select:focus{
                    border-color:var(--c-primary); box-shadow:0 0 0 3px var(--c-primary-soft);
                }
                textarea.form-control{ min-height:120px; }
                .thumb-preview{
                    width:100%; max-width:220px; aspect-ratio:16/10; object-fit:cover;
                    border-radius:12px; border:1px solid var(--c-border); background:#f1f2f5;
                }
                .upload-box{
                    border:1.5px dashed var(--c-border); border-radius:12px; padding:1rem;
                    text-align:center; cursor:pointer; transition:.15s ease;
                }
                .upload-box:hover{ border-color:var(--c-primary); background:var(--c-primary-soft); }
                .form-check-input:checked{ background-color:var(--c-primary); border-color:var(--c-primary); }
                .btn-primary-soft{
                    background:var(--c-primary); border:none; color:#fff; font-weight:600;
                    border-radius:10px; padding:.6rem 1.3rem;
                }
                .btn-primary-soft:hover{ background:#4338ca; color:#fff; }
                .btn-cancel{
                    border-radius:10px; border:1px solid var(--c-border); color:var(--c-muted);
                    font-weight:600; padding:.6rem 1.3rem; background:#fff;
                }
                .btn-cancel:hover{ background:#f1f2f5; }
                .page-header h1{ font-size:1.4rem; font-weight:700; color:var(--c-text); }
                .page-header p{ color:var(--c-muted); font-size:.9rem; }
                .invalid-feedback{ font-size:.78rem; }
                .price-wrap[data-disabled="true"]{ opacity:.5; pointer-events:none; }
            `}</style>

            <div className="page-wrap py-4">
                <div className="container-fluid">

                    <div className="d-flex flex-wrap justify-content-between align-items-center page-header mb-4">
                        <div>
                            <h1 className="mb-1">{isEdit ? 'Edit Course' : 'New Course'}</h1>
                            <p className="mb-0">{isEdit ? 'Update course details below' : 'Fill in the details to create a new course'}</p>
                        </div>
                        <Link href={route('admin.courses.index')} className="btn btn-cancel">
                            <i className="bi bi-arrow-left me-1"></i> Back to Courses
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="row g-4">
                            {/* Main details */}
                            <div className="col-lg-8">
                                <div className="form-card mb-4">
                                    <div className="section-title"><i className="bi bi-info-circle"></i> Basic Information</div>

                                    <div className="mb-3">
                                        <label className="form-label">Course Title <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            value={data.title}
                                            onChange={e => setData('title', e.target.value)}
                                            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                            placeholder="e.g. Introduction to Web Development"
                                        />
                                        {errors.title && <div className="invalid-feedback d-block">{errors.title}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            value={data.description}
                                            onChange={e => setData('description', e.target.value)}
                                            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                            placeholder="Brief overview of what students will learn..."
                                        />
                                        {errors.description && <div className="invalid-feedback d-block">{errors.description}</div>}
                                    </div>

                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Category <span className="text-danger">*</span></label>
                                            <select
                                                value={data.category_id}
                                                onChange={e => setData('category_id', e.target.value)}
                                                className={`form-select ${errors.category_id ? 'is-invalid' : ''}`}
                                            >
                                                <option value="">Select category</option>
                                                {categories.map(category => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.category_id && <div className="invalid-feedback d-block">{errors.category_id}</div>}
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Instructor / Talent <span className="text-danger">*</span></label>
                                            <select
                                                value={data.talent_id}
                                                onChange={e => setData('talent_id', e.target.value)}
                                                className={`form-select ${errors.talent_id ? 'is-invalid' : ''}`}
                                            >
                                                <option value="">Select instructor</option>
                                                {talents.map(talent => (
                                                    <option key={talent.id} value={talent.id}>
                                                        {talent.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.talent_id && <div className="invalid-feedback d-block">{errors.talent_id}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="form-card mb-4">
                                    <div className="section-title"><i className="bi bi-bar-chart-steps"></i> Course Details</div>

                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Level</label>
                                            <select
                                                value={data.level}
                                                onChange={e => setData('level', e.target.value)}
                                                className={`form-select ${errors.level ? 'is-invalid' : ''}`}
                                            >
                                                <option value="Beginner">Beginner</option>
                                                <option value="Intermediate">Intermediate</option>
                                                <option value="Advanced">Advanced</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Status <span className="text-danger">*</span></label>
                                            <select
                                                value={data.status}
                                                onChange={e => setData('status', e.target.value)}
                                                className={`form-select ${errors.status ? 'is-invalid' : ''}`}
                                            >
                                                <option value="draft">Draft</option>
                                                <option value="published">Published</option>
                                            </select>
                                            {errors.status && <div className="invalid-feedback d-block">{errors.status}</div>}
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">Video URL</label>
                                            <input
                                                type="url"
                                                value={data.video}
                                                onChange={e => setData('video', e.target.value)}
                                                className={`form-control ${errors.video ? 'is-invalid' : ''}`}
                                                placeholder="https://..."
                                            />
                                            {errors.video && <div className="invalid-feedback d-block">{errors.video}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="col-lg-4">
                                <div className="form-card mb-4">
                                    <div className="section-title"><i className="bi bi-image"></i> Thumbnail</div>

                                    <img
                                        id="thumbPreview"
                                        src={thumbPreview}
                                        className="thumb-preview mb-3"
                                        alt="Thumbnail preview"
                                    />

                                    <label className="upload-box d-block">
                                        <i className="bi bi-cloud-upload fs-4 d-block mb-1 text-muted"></i>
                                        <span className="small text-muted">Click to upload image (max 2MB)</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="d-none"
                                            onChange={handleThumbChange}
                                        />
                                    </label>
                                    {errors.thumbnail && <div className="invalid-feedback d-block">{errors.thumbnail}</div>}
                                </div>

                                <div className="form-card mb-4">
                                    <div className="section-title"><i className="bi bi-cash-coin"></i> Pricing</div>

                                    <div className="form-check form-switch mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="isFreeSwitch"
                                            checked={data.is_free}
                                            onChange={e => setData('is_free', e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="isFreeSwitch">This course is free</label>
                                    </div>

                                    <div className="price-wrap" data-disabled={data.is_free ? 'true' : 'false'}>
                                        <label className="form-label">Price (RWF)</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            value={data.price}
                                            onChange={e => setData('price', e.target.value)}
                                            className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                                            placeholder="0.00"
                                            disabled={data.is_free}
                                        />
                                        {errors.price && <div className="invalid-feedback d-block">{errors.price}</div>}
                                    </div>
                                </div>

                                <div className="d-flex gap-2">
                                    <button type="submit" className="btn btn-primary-soft flex-fill" disabled={processing}>
                                        <i className="bi bi-check2-circle me-1"></i> {isEdit ? 'Update Course' : 'Create Course'}
                                    </button>
                                    <Link href={route('admin.courses.index')} className="btn btn-cancel">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </AppLayout>
    );
}
