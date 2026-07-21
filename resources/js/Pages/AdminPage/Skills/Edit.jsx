import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminPageScope from '@/Components/AdminPageStyles';

/**
 * Create + Edit share one form component (mirrors the Courses pattern).
 * `skill` is null for create, the model for edit.
 */
export default function SkillsCreate({ skill = null, categories = [], talents = [] }) {
    const isEdit = !!skill;
    const { data, setData, post, put, processing, errors } = useForm({
        name: skill?.name ?? '',
        description: skill?.description ?? '',
        image: null,
        tags: skill?.tags ?? '',
        status: skill?.status ?? 'draft',
        level: skill?.level ?? 'Beginner',
        talent_id: skill?.talent_id ?? '',
        category_id: skill?.category_id ?? '',
    });

    const [imagePreview, setImagePreview] = useState(
        skill?.image ? `/storage/${skill.image}` : null
    );

    const handleImage = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route('admin.skills.update', skill.id), { forceFormData: true });
        } else {
            post(route('admin.skills.store'), { forceFormData: true });
        }
    };

    return (
        <AppLayout>
            <Head title={isEdit ? 'Edit Skill' : 'Create Skill'} />
            <AdminPageScope name="skills">
                <div className="ap-page">
                    <div className="ap-page-head">
                        <h1 className="ap-page-title">{isEdit ? 'Edit' : 'Add New'} <span>Skill</span></h1>
                        <Link href={route('admin.skills.index')} className="ap-btn ap-btn-ghost">
                            <i className="bi bi-arrow-left" /> Back to Skills
                        </Link>
                    </div>

                    <form onSubmit={submit} encType="multipart/form-data">
                        <div className="row g-4">
                            {/* Left column */}
                            <div className="col-lg-8">
                                <div className="ap-card">
                                    <div className="ap-card-head"><h5><i className="bi bi-info-circle" /> Basic Information</h5></div>
                                    <div className="ap-card-body">
                                        <div className="mb-3">
                                            <label className="ap-label">Skill Name</label>
                                            <input
                                                type="text"
                                                className={`ap-input ${errors.name ? 'is-invalid' : ''}`}
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Enter skill name"
                                                required
                                            />
                                            {errors.name && <span className="ap-field-error">{errors.name}</span>}
                                        </div>

                                        <div className="mb-3">
                                            <label className="ap-label">Description</label>
                                            <textarea
                                                className={`ap-textarea ${errors.description ? 'is-invalid' : ''}`}
                                                rows={4}
                                                value={data.description}
                                                onChange={(e) => setData('description', e.target.value)}
                                                placeholder="Write a short description…"
                                            />
                                            {errors.description && <span className="ap-field-error">{errors.description}</span>}
                                        </div>

                                        <div className="mb-0">
                                            <label className="ap-label">Skill Image</label>
                                            <div className="ap-upload">
                                                <input type="file" accept="image/*" onChange={handleImage} />
                                                <i className="bi bi-cloud-upload" />
                                                <p>{imagePreview ? 'Change image' : 'Click to upload or drag & drop'}</p>
                                                <small>PNG, JPG, WEBP — max 2MB</small>
                                            </div>
                                            {imagePreview && (
                                                <div style={{ marginTop: 10 }}>
                                                    <img src={imagePreview} alt="preview" style={{ maxWidth: '100%', maxHeight: 160, borderRadius: 'var(--ap-radius-md)' }} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="ap-card">
                                    <div className="ap-card-head"><h5><i className="bi bi-sliders" /> Settings</h5></div>
                                    <div className="ap-card-body">
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label className="ap-label">Tags</label>
                                                <input
                                                    type="text"
                                                    className="ap-input"
                                                    value={data.tags}
                                                    onChange={(e) => setData('tags', e.target.value)}
                                                    placeholder="php, laravel…"
                                                />
                                                <small className="ap-hint">Separate with commas</small>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="ap-label">Status</label>
                                                <select className="ap-select" value={data.status} onChange={(e) => setData('status', e.target.value)}>
                                                    <option value="draft">Draft</option>
                                                    <option value="published">Published</option>
                                                    <option value="archived">Archived</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-0">
                                                <label className="ap-label">Level</label>
                                                <select className="ap-select" value={data.level} onChange={(e) => setData('level', e.target.value)}>
                                                    <option value="Beginner">Beginner</option>
                                                    <option value="Intermediate">Intermediate</option>
                                                    <option value="Advanced">Advanced</option>
                                                    <option value="Expert">Expert</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="col-lg-4">
                                <div className="ap-card">
                                    <div className="ap-card-head"><h5><i className="bi bi-link-45deg" /> Associations</h5></div>
                                    <div className="ap-card-body">
                                        <div className="mb-3">
                                            <label className="ap-label">Talent</label>
                                            <select
                                                className={`ap-select ${errors.talent_id ? 'is-invalid' : ''}`}
                                                value={data.talent_id}
                                                onChange={(e) => setData('talent_id', e.target.value)}
                                                required
                                            >
                                                <option value="">Select Talent</option>
                                                {talents.map((t) => (
                                                    <option key={t.id} value={t.id}>{t.name}</option>
                                                ))}
                                            </select>
                                            {errors.talent_id && <span className="ap-field-error">{errors.talent_id}</span>}
                                        </div>
                                        <div className="mb-0">
                                            <label className="ap-label">Category</label>
                                            <select
                                                className={`ap-select ${errors.category_id ? 'is-invalid' : ''}`}
                                                value={data.category_id}
                                                onChange={(e) => setData('category_id', e.target.value)}
                                                required
                                            >
                                                <option value="">Select Category</option>
                                                {categories.map((c) => (
                                                    <option key={c.id} value={c.id}>{c.name}</option>
                                                ))}
                                            </select>
                                            {errors.category_id && <span className="ap-field-error">{errors.category_id}</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="ap-card">
                                    <div className="ap-card-body">
                                        <button type="submit" className="ap-btn ap-btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={processing}>
                                            <i className="bi bi-check-lg" /> {isEdit ? 'Update Skill' : 'Create Skill'}
                                        </button>
                                        <p className="ap-hint" style={{ textAlign: 'center', marginTop: 10 }}>
                                            <i className="bi bi-lock" /> Changes are saved immediately
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </AdminPageScope>
        </AppLayout>
    );
}
