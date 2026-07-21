import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Edit({ project }) {
    const { data, setData, put, processing, errors } = useForm({
        title: project.title ?? '',
        category: project.category ?? '',
        budget: project.budget ?? '',
        location: project.location ?? '',
        description: project.description ?? '',
        status: project.status ?? '',
        verified: project.verified ? '1' : '0',
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route('admin.projects.update', project.id));
    }

    return (
        <AppLayout>
            <Head title="Edit Project" />

            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Edit Project</h2>
                    <Link href={route('admin.projects.index')} className="btn btn-outline-primary rounded-pill">
                        <i className="bi bi-arrow-left"></i> Back
                    </Link>
                </div>

                <div className="card border-0 shadow-lg rounded-4">
                    <div className="card-body p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Project Title</label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        className={`form-control rounded-pill ${errors.title ? 'is-invalid' : ''}`}
                                        required
                                    />
                                    {errors.title && <div className="invalid-feedback d-block">{errors.title}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Project Category</label>
                                    <input
                                        type="text"
                                        value={data.category}
                                        onChange={e => setData('category', e.target.value)}
                                        className={`form-control rounded-pill ${errors.category ? 'is-invalid' : ''}`}
                                        required
                                    />
                                    {errors.category && <div className="invalid-feedback d-block">{errors.category}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Budget</label>
                                    <input
                                        type="text"
                                        value={data.budget}
                                        onChange={e => setData('budget', e.target.value)}
                                        className={`form-control rounded-pill ${errors.budget ? 'is-invalid' : ''}`}
                                        required
                                    />
                                    {errors.budget && <div className="invalid-feedback d-block">{errors.budget}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Location</label>
                                    <input
                                        type="text"
                                        value={data.location}
                                        onChange={e => setData('location', e.target.value)}
                                        className="form-control rounded-pill"
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold">Project Description</label>
                                    <textarea
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        rows="6"
                                        className={`form-control rounded-4 ${errors.description ? 'is-invalid' : ''}`}
                                    />
                                    {errors.description && <div className="invalid-feedback d-block">{errors.description}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Status</label>
                                    <select
                                        value={data.status}
                                        onChange={e => setData('status', e.target.value)}
                                        className="form-select rounded-pill"
                                    >
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="approved">Approved</option>
                                        <option value="closed">Closed</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Verified</label>
                                    <select
                                        value={data.verified}
                                        onChange={e => setData('verified', e.target.value)}
                                        className="form-select rounded-pill"
                                    >
                                        <option value="">Select Verification Status</option>
                                        <option value="1">Verified</option>
                                        <option value="0">Not Verified</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 text-end">
                                <button type="submit" className="btn btn-primary rounded-pill px-4 py-2" disabled={processing}>
                                    <i className="bi bi-save"></i> Publish project
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
