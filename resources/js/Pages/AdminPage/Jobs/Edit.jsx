import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Edit({ job }) {
    const { data, setData, put, processing, errors } = useForm({
        title: job.title ?? '',
        type: job.type ?? '',
        experience_level: job.experience_level ?? '',
        location: job.location ?? '',
        salary_range: job.salary_range ?? '',
        skills: job.skills ?? '',
        description: job.description ?? '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route('admin.jobs.update', job.id));
    }

    return (
        <AppLayout>
            <Head title={`Edit Job: ${job.title}`} />

            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Edit Job — {job.title}</h2>
                    <Link href={route('admin.jobs.index')} className="btn btn-outline-primary rounded-pill">
                        <i className="bi bi-arrow-left"></i> Back
                    </Link>
                </div>

                <div className="card border-0 shadow-lg rounded-4">
                    <div className="card-body p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Job Title</label>
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
                                    <label className="form-label fw-semibold">Job Type</label>
                                    <select
                                        value={data.type}
                                        onChange={e => setData('type', e.target.value)}
                                        className="form-select rounded-pill"
                                    >
                                        <option value="">Select Type</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Experience Level</label>
                                    <select
                                        value={data.experience_level}
                                        onChange={e => setData('experience_level', e.target.value)}
                                        className="form-select rounded-pill"
                                    >
                                        <option value="">Select Level</option>
                                        <option value="Junior">Junior</option>
                                        <option value="Mid">Mid</option>
                                        <option value="Senior">Senior</option>
                                    </select>
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

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Salary Range</label>
                                    <input
                                        type="text"
                                        value={data.salary_range}
                                        onChange={e => setData('salary_range', e.target.value)}
                                        className="form-control rounded-pill"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Required Skills</label>
                                    <input
                                        type="text"
                                        value={data.skills}
                                        onChange={e => setData('skills', e.target.value)}
                                        className="form-control rounded-pill"
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold">Job Description</label>
                                    <textarea
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        rows="6"
                                        className={`form-control rounded-4 ${errors.description ? 'is-invalid' : ''}`}
                                        required
                                    />
                                    {errors.description && <div className="invalid-feedback d-block">{errors.description}</div>}
                                </div>
                            </div>

                            <div className="mt-4 text-end">
                                <button type="submit" className="btn btn-success rounded-pill px-4 py-2" disabled={processing}>
                                    <i className="bi bi-check2-circle"></i> Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
