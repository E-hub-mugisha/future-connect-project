import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const STATUS_COLOR = {
    pending: 'warning',
    accepted: 'success',
    rejected: 'danger',
};

export default function Applications({ job, applications }) {
    function handleStatusChange(application, status) {
        router.patch(route('admin.jobs.updateApplicationStatus', application.id), { status });
    }

    return (
        <AppLayout>
            <Head title={`Applications for: ${job.title}`} />

            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Applications for: {job.title}</h2>
                    <Link href={route('admin.jobs.show', job.id)} className="btn btn-outline-primary rounded-pill">
                        <i className="bi bi-arrow-left me-1"></i> Back to Job
                    </Link>
                </div>

                <div className="card border-0 shadow-lg rounded-4">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Applicant</th>
                                        <th>Email</th>
                                        <th>CV</th>
                                        <th>Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {applications && applications.length > 0 ? applications.map((application, index) => (
                                        <tr key={application.id}>
                                            <td>{index + 1}</td>
                                            <td>{application.user.name}</td>
                                            <td>{application.user.email}</td>
                                            <td>
                                                {application.resume ? (
                                                    <a
                                                        href={`/storage/${application.resume}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="btn btn-sm btn-outline-secondary rounded-pill"
                                                    >
                                                        <i className="bi bi-download"></i> Download
                                                    </a>
                                                ) : (
                                                    <span className="text-muted">N/A</span>
                                                )}
                                            </td>
                                            <td>
                                                <span className={`badge bg-${STATUS_COLOR[application.status] ?? 'secondary'}`}>
                                                    {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                                                </span>
                                            </td>
                                            <td className="text-center">
                                                <select
                                                    value={application.status}
                                                    onChange={e => handleStatusChange(application, e.target.value)}
                                                    className="form-select form-select-sm d-inline w-auto"
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="accepted">Accepted</option>
                                                    <option value="rejected">Rejected</option>
                                                </select>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="6" className="text-center text-muted py-4">
                                                No applications submitted for this job yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
