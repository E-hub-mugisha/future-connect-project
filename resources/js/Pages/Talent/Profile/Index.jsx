// resources/js/Pages/Talent/Profile/Index.jsx
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function Profile({ talent, categories, flash }) {
    const [editOpen, setEditOpen] = useState(false);

    // Show only the most recent items — no "view all" modals anymore
    const recentReviews = talent.feedback?.slice(0, 3) ?? [];
    const recentCourses = talent.courses?.slice(0, 3) ?? [];

    return (
        <AppLayout>
            <Head title={`${talent.name} — Profile`} />

            <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#f7f8fb' }}>

                {flash?.success && (
                    <div className="alert alert-success rounded-3 shadow-sm border-0">
                        <i className="fas fa-circle-check me-2"></i>
                        {flash.success}
                    </div>
                )}

                {/* Header — simple, no gradient banner */}
                <div className="card border-0 shadow-sm rounded-4 mb-4">
                    <div className="card-body p-4">
                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <img
                                    src={talent.profile_photo ?? '/img/faces/face10.jpg'}
                                    alt={talent.name}
                                    className="rounded-circle border"
                                    style={{ width: 72, height: 72, objectFit: 'cover' }}
                                />
                                <div>
                                    <h5 className="fw-bold mb-1">{talent.name}</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                                            {talent.category?.name ?? 'No Category'}
                                        </span>
                                        {talent.level && (
                                            <span className="badge bg-light text-secondary border px-3 py-2 rounded-pill">
                                                {capitalize(talent.level)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="btn btn-primary rounded-pill px-4 py-2"
                                onClick={() => setEditOpen(true)}
                            >
                                <i className="fas fa-pen me-2"></i>
                                Edit Profile
                            </button>
                        </div>

                        {talent.description && (
                            <p className="text-secondary mt-3 mb-0" style={{ maxWidth: 720 }}>
                                {talent.description}
                            </p>
                        )}
                    </div>
                </div>

                <div className="row g-4">
                    {/* Left: contact only */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-4">
                                <label className="text-uppercase text-secondary small fw-semibold mb-3 d-block">
                                    Contact Information
                                </label>
                                <div className="d-flex flex-column gap-3">
                                    <ContactRow icon="fa-mobile-screen-button" label="Mobile" value={talent.phone} />
                                    <ContactRow icon="fa-envelope" label="Email" value={talent.email} />
                                    <ContactRow icon="fa-location-dot" label="Address" value={talent.address} />
                                    {talent.language && (
                                        <ContactRow icon="fa-language" label="Language" value={talent.language} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: recent reviews + courses */}
                    <div className="col-lg-8">
                        {/* Recent Reviews */}
                        <div className="card border-0 shadow-sm rounded-4 mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="fw-bold mb-0">Recent Reviews</h6>
                                    {talent.feedback?.length > 0 && (
                                        <span className="small text-secondary">
                                            {talent.feedback.length} total
                                        </span>
                                    )}
                                </div>

                                {recentReviews.length === 0 ? (
                                    <EmptyState icon="fa-comment-slash" text="No reviews yet." />
                                ) : (
                                    <div className="d-flex flex-column gap-3">
                                        {recentReviews.map((review) => (
                                            <ReviewCard key={review.id} review={review} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Recent Courses */}
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="fw-bold mb-0">Recent Courses</h6>
                                    {talent.courses?.length > 0 && (
                                        <span className="small text-secondary">
                                            {talent.courses.length} total
                                        </span>
                                    )}
                                </div>

                                {recentCourses.length === 0 ? (
                                    <EmptyState icon="fa-book" text="No courses available." />
                                ) : (
                                    <div className="row g-3">
                                        {recentCourses.map((course) => (
                                            <div className="col-md-6" key={course.id}>
                                                <CourseCard course={course} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Profile modal — the only modal remaining */}
            <Modal show={editOpen} onClose={() => setEditOpen(false)} title="Edit Profile" size="lg">
                <EditProfileForm
                    talent={talent}
                    categories={categories}
                    onSaved={() => setEditOpen(false)}
                />
            </Modal>
        </AppLayout>
    );
}

/* ---------- inline modal (no external import) ---------- */

function Modal({ show, onClose, title, size, children }) {
    if (!show) return null;

    const sizeClass = size === 'lg' ? 'modal-lg' : size === 'sm' ? 'modal-sm' : '';

    return (
        <>
            <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
                onClick={onClose}
            >
                <div
                    className={`modal-dialog modal-dialog-centered ${sizeClass}`}
                    role="document"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-content rounded-4 border-0 shadow">
                        <div className="modal-header border-0 pb-0">
                            <h5 className="modal-title fw-bold">{title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={onClose}
                            />
                        </div>
                        <div className="modal-body p-4">{children}</div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" onClick={onClose}></div>
        </>
    );
}

/* ---------- small presentational pieces ---------- */

function ContactRow({ icon, label, value }) {
    return (
        <div className="d-flex align-items-center gap-3">
            <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-primary bg-opacity-10"
                style={{ width: 38, height: 38, flexShrink: 0 }}
            >
                <i className={`fas ${icon} text-primary`}></i>
            </div>
            <div>
                <div className="small text-secondary">{label}</div>
                <div className="fw-semibold">{value || '—'}</div>
            </div>
        </div>
    );
}

function ReviewCard({ review }) {
    return (
        <div className="border rounded-4 p-3">
            <div className="d-flex justify-content-between align-items-start mb-2">
                <strong>{review.reviewer_name ?? 'Anonymous'}</strong>
                <StarRating rating={review.rating} />
            </div>
            <p className="text-secondary mb-2">{review.comment}</p>
            <small className="text-secondary">{review.created_at_human}</small>
        </div>
    );
}

function StarRating({ rating }) {
    return (
        <span className="text-warning small">
            {'★'.repeat(rating)}
            <span className="text-secondary">{'★'.repeat(5 - rating)}</span>
            <span className="text-dark ms-1">{rating}/5</span>
        </span>
    );
}

function CourseCard({ course }) {
    return (
        <div className="border rounded-4 p-3 h-100">
            <h6 className="fw-bold mb-2">{course.title}</h6>
            <p className="text-secondary small mb-3">{course.description}</p>
            <span className="badge bg-light text-secondary border">{course.category?.name}</span>
        </div>
    );
}

function EmptyState({ icon, text }) {
    return (
        <div className="text-center py-4 text-secondary">
            <i className={`fas ${icon} fs-2 mb-2 d-block opacity-25`}></i>
            <p className="mb-0 small">{text}</p>
        </div>
    );
}

/* ---------- edit form (inside the modal) ---------- */

function EditProfileForm({ talent, categories, onSaved }) {
    const { data, setData, put, processing, errors, progress } = useForm({
        name: talent.name ?? '',
        level: talent.level ?? '',
        description: talent.description ?? '',
        address: talent.address ?? '',
        phone: talent.phone ?? '',
        language: talent.language ?? '',
        category_id: talent.category_id ?? '',
        image: null,
    });

    const [preview, setPreview] = useState(talent.image ? `/storage/${talent.image}` : null);

    function handleImageChange(e) {
        const file = e.target.files[0];
        setData('image', file);
        if (file) setPreview(URL.createObjectURL(file));
    }

    function submit(e) {
        e.preventDefault();
        put(route('talent.profile.update', talent.id), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => onSaved(),
        });
    }

    return (
        <form onSubmit={submit}>
            <div className="row g-3">
                <div className="col-md-12 d-flex align-items-center gap-3">
                    {preview ? (
                        <img
                            src={preview}
                            alt="Profile preview"
                            className="rounded-3 border"
                            style={{ width: 84, height: 84, objectFit: 'cover' }}
                        />
                    ) : (
                        <div
                            className="rounded-3 border d-flex align-items-center justify-content-center text-secondary bg-light"
                            style={{ width: 84, height: 84 }}
                        >
                            <i className="fas fa-user fs-4 opacity-50"></i>
                        </div>
                    )}
                    <div className="flex-grow-1">
                        <label className="form-label small fw-semibold">Profile Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            className={`form-control rounded-3 ${errors.image ? 'is-invalid' : ''}`}
                            onChange={handleImageChange}
                        />
                        {errors.image && <div className="text-danger small mt-1">{errors.image}</div>}
                        {progress && (
                            <div className="progress mt-2" style={{ height: 6 }}>
                                <div className="progress-bar" style={{ width: `${progress.percentage}%` }} />
                            </div>
                        )}
                    </div>
                </div>

                <Field label="Name" value={data.name} onChange={(v) => setData('name', v)} error={errors.name} col="col-md-6" />
                <Field label="Level" value={data.level} onChange={(v) => setData('level', v)} error={errors.level} col="col-md-6" />

                <div className="col-md-12">
                    <label className="form-label small fw-semibold">Description</label>
                    <textarea
                        className={`form-control rounded-3 ${errors.description ? 'is-invalid' : ''}`}
                        rows={3}
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                    />
                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>

                <Field label="Address" value={data.address} onChange={(v) => setData('address', v)} error={errors.address} col="col-md-6" />
                <Field label="Phone" value={data.phone} onChange={(v) => setData('phone', v)} error={errors.phone} col="col-md-6" />
                <Field label="Language" value={data.language} onChange={(v) => setData('language', v)} error={errors.language} col="col-md-6" />

                <div className="col-md-6">
                    <label className="form-label small fw-semibold">Category</label>
                    <select
                        className={`form-select rounded-3 ${errors.category_id ? 'is-invalid' : ''}`}
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.category_id && <div className="invalid-feedback">{errors.category_id}</div>}
                </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
                <button type="button" className="btn btn-light rounded-pill px-4" onClick={onSaved}>
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary rounded-pill px-4" disabled={processing}>
                    {processing ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" />
                            Saving...
                        </>
                    ) : (
                        'Save Changes'
                    )}
                </button>
            </div>
        </form>
    );
}

function Field({ label, value, onChange, error, col }) {
    return (
        <div className={col}>
            <label className="form-label small fw-semibold">{label}</label>
            <input
                type="text"
                className={`form-control rounded-3 ${error ? 'is-invalid' : ''}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

function capitalize(value) {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
}