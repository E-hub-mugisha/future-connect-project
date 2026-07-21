import React from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

function timeAgo(dateString) {
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
    const intervals = [
        ['year', 31536000], ['month', 2592000], ['week', 604800],
        ['day', 86400], ['hour', 3600], ['minute', 60],
    ];
    for (const [label, secondsInUnit] of intervals) {
        const count = Math.floor(seconds / secondsInUnit);
        if (count >= 1) return `${count} ${label}${count > 1 ? 's' : ''} ago`;
    }
    return 'just now';
}

function ApplicationItem({ application }) {
    const { data, setData, post, processing } = useForm({
        message: '',
    });

    function handleAccept(e) {
        e.preventDefault();
        router.post(route('admin.applications.accept', application.id));
    }

    function handleReject(e) {
        e.preventDefault();
        post(route('admin.applications.reject', application.id));
    }

    return (
        <>
            <div className="list-group-item py-3 border-0 border-bottom">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                        <h6 className="fw-semibold mb-0">{application.user?.name ?? 'Unknown User'}</h6>
                        <small className="text-muted">{timeAgo(application.created_at)}</small>
                    </div>
                    {application.status === 'accepted' ? (
                        <span className="badge bg-success">Accepted</span>
                    ) : application.status === 'rejected' ? (
                        <span className="badge bg-danger">Rejected</span>
                    ) : (
                        <span className="badge bg-warning text-dark">Pending</span>
                    )}
                </div>

                <p className="mb-2 text-muted">{application.message}</p>

                {application.portfolio_url && (
                    <p className="mb-1">
                        <i className="bi bi-link-45deg"></i>
                        <a href={application.portfolio_url} target="_blank" rel="noreferrer"> View Portfolio</a>
                    </p>
                )}

                {application.attachment && (
                    <p className="mb-1">
                        <i className="bi bi-paperclip"></i>
                        <a href={`/storage/${application.attachment}`} target="_blank" rel="noreferrer"> Download Attachment</a>
                    </p>
                )}

                <div className="mt-3">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-success rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target={`#acceptModal${application.id}`}
                    >
                        Accept
                    </button>

                    <button
                        type="button"
                        className="btn btn-sm btn-outline-danger rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target={`#rejectModal${application.id}`}
                    >
                        Reject
                    </button>
                </div>
            </div>

            {/* Accept Modal */}
            <div className="modal fade" id={`acceptModal${application.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-4">
                        <div className="modal-header bg-success text-white rounded-top-4">
                            <h5 className="modal-title">Accept Application</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <p className="mb-0">
                                Are you sure you want to <strong className="text-success">ACCEPT</strong> this
                                application from <strong>{application.user?.name}</strong>?
                            </p>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>
                            <form onSubmit={handleAccept}>
                                <button type="submit" className="btn btn-success rounded-pill">
                                    Confirm Accept
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reject Modal */}
            <div className="modal fade" id={`rejectModal${application.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-4">
                        <div className="modal-header bg-danger text-white rounded-top-4">
                            <h5 className="modal-title">Reject Application</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>

                        <form onSubmit={handleReject}>
                            <div className="modal-body">
                                <p>
                                    Are you sure you want to <strong className="text-danger">REJECT</strong> this
                                    application from <strong>{application.user?.name}</strong>?
                                </p>

                                <label className="mb-1 fw-semibold">Reason (optional):</label>
                                <textarea
                                    value={data.message}
                                    onChange={e => setData('message', e.target.value)}
                                    className="form-control rounded-3"
                                    rows="2"
                                />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-danger rounded-pill" disabled={processing}>
                                    Confirm Reject
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Show({ project }) {
    const applications = project.applications ?? [];

    function handleVerify(e) {
        e.preventDefault();
        router.post(route('admin.projects.verify', project.id));
    }

    return (
        <AppLayout>
            <Head title="Project Details" />

            <div className="container py-4">
                <div className="row">
                    {/* Project Info */}
                    <div className="col-lg-7 mb-4">
                        <div className="card shadow-sm border-0 rounded-4">
                            <div className="card-body">
                                <h3 className="fw-bold mb-3">{project.title}</h3>

                                <p className="text-muted mb-3">{project.description}</p>

                                <div className="mb-3">
                                    <strong>Category:</strong> {project.category}<br />
                                    <strong>Status:</strong> {project.status ? project.status.charAt(0).toUpperCase() + project.status.slice(1) : ''}<br />
                                    <strong>Budget:</strong> {project.budget}<br />
                                    <strong>Location:</strong> {project.location ?? 'Remote'}
                                </div>

                                <div className="mt-4">
                                    {!project.verified ? (
                                        <form onSubmit={handleVerify} className="d-inline">
                                            <button type="submit" className="btn btn-success rounded-pill">
                                                <i className="bi bi-check-circle me-1"></i> Verify Project
                                            </button>
                                        </form>
                                    ) : (
                                        <span className="badge bg-success p-2 rounded-pill">Verified</span>
                                    )}

                                    <Link href={route('admin.projects.index')} className="btn btn-outline-secondary rounded-pill ms-2">
                                        <i className="bi bi-arrow-left"></i> Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Applications List */}
                    <div className="col-lg-5">
                        <div className="card shadow-sm border-0 rounded-4">
                            <div className="card-header bg-primary text-white rounded-top-4 d-flex justify-content-between align-items-center">
                                <h5 className="mb-0 fw-semibold"><i className="bi bi-people me-2"></i>Project Applications</h5>
                                <span className="badge bg-light text-dark">{applications.length}</span>
                            </div>

                            <div className="card-body">
                                {applications.length === 0 ? (
                                    <p className="text-muted text-center my-4">No one has applied yet.</p>
                                ) : (
                                    <div className="list-group list-group-flush">
                                        {applications.map(application => (
                                            <ApplicationItem key={application.id} application={application} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
