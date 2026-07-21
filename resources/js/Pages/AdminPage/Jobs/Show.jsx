import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Show({ job }) {
    const skills = job.skills
        ? job.skills.split(',').map(skill => skill.trim()).filter(Boolean)
        : [];

    return (
        <AppLayout>
            <Head title={`Job Details: ${job.title}`} />

            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Job Details</h2>
                    <Link href={route('admin.jobs.index')} className="btn btn-outline-primary rounded-pill">
                        <i className="bi bi-arrow-left"></i> Back
                    </Link>
                </div>

                <div className="card border-0 shadow-lg rounded-4">
                    <div className="card-body p-4">
                        <h3 className="fw-bold mb-3">{job.title}</h3>
                        {job.company?.name && <h5 className="mb-1">Company: {job.company.name}</h5>}
                        <p className="text-muted mb-1"><i className="bi bi-geo-alt"></i> {job.location ?? 'Not specified'}</p>
                        <p className="text-muted mb-3">
                            <i className="bi bi-briefcase"></i> {job.type ?? 'N/A'} • {job.experience_level ?? 'N/A'}
                        </p>
                        <p><strong>Salary:</strong> {job.salary_range ?? 'N/A'}</p>

                        <hr />

                        <h5 className="fw-semibold mt-4 mb-3">Job Description</h5>
                        <p>{job.description}</p>

                        {skills.length > 0 && (
                            <>
                                <h6 className="fw-semibold mt-4">Skills Required:</h6>
                                {skills.map((skill, i) => (
                                    <span key={i} className="badge bg-primary-subtle text-primary rounded-pill me-1">
                                        {skill}
                                    </span>
                                ))}
                            </>
                        )}

                        <div className="mt-5">
                            <Link href={route('admin.jobs.applications', job.id)} className="btn btn-outline-success rounded-pill px-4 py-2">
                                <i className="bi bi-people"></i> View Applications
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
