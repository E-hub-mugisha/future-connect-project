import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Show({ announcement }) {
    function handleActivate(e) {
        e.preventDefault();
        router.put(route('admin.announcements.activate', announcement.id));
    }

    function handleDeactivate(e) {
        e.preventDefault();
        router.put(route('admin.announcements.deactivate', announcement.id));
    }

    function handleDelete(e) {
        e.preventDefault();
        router.delete(route('admin.announcements.destroy', announcement.id));
    }

    function nl2br(text) {
        return text.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
            </React.Fragment>
        ));
    }

    return (
        <AppLayout>
            <Head title={announcement.title} />

            <div className="container">
                <div className="nk-content-inner">
                    <div className="nk-content-body">

                        {/* ===================== PAGE HEADER ===================== */}
                        <div className="d-flex justify-content-between align-items-start mb-4">

                            <div>
                                <h3 className="nk-block-title mb-1">📢 Announcement Details</h3>
                                <span className="text-muted small">View full announcement information</span>
                            </div>

                            <div className="d-flex gap-2">

                                {/* Back */}
                                <Link href={route('admin.announcements.index')} className="btn btn-outline-primary btn-sm">
                                    <em className="icon ni ni-arrow-left"></em> Back
                                </Link>

                                {/* Edit */}
                                <Link href={route('admin.announcements.edit', announcement.id)} className="btn btn-outline-primary btn-sm">
                                    <em className="icon ni ni-edit"></em> Edit
                                </Link>

                                {/* Activate / Deactivate */}
                                {!announcement.is_active ? (
                                    <form onSubmit={handleActivate}>
                                        <button type="submit" className="btn btn-success btn-sm">
                                            <em className="icon ni ni-check-circle"></em> Activate
                                        </button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleDeactivate}>
                                        <button type="submit" className="btn btn-secondary btn-sm">
                                            <em className="icon ni ni-minus-circle"></em> Deactivate
                                        </button>
                                    </form>
                                )}

                                {/* Delete */}
                                <button
                                    className="btn btn-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteAnnouncementModal"
                                >
                                    <em className="icon ni ni-trash"></em>
                                </button>

                            </div>
                        </div>


                        {/* ===================== MAIN CARD ===================== */}
                        <div className="card shadow-sm border-0">
                            <div className="card-header bg-white border-bottom">
                                <h5 className="card-title mb-0 text-primary fw-bold">
                                    {announcement.title}
                                </h5>
                            </div>

                            <div className="card-body">

                                {/* ======== META INFORMATION ======== */}
                                <div className="row g-4 mb-4">

                                    <div className="col-md-4">
                                        <div className="border rounded p-3 bg-light">
                                            <strong className="text-dark">🧑 Created By:</strong>
                                            <p className="text-muted small mb-0">{announcement.user?.name ?? 'N/A'}</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="border rounded p-3 bg-light">
                                            <strong className="text-dark">📂 Category:</strong>
                                            <p className="text-muted small mb-0">{announcement.category?.name ?? 'N/A'}</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="border rounded p-3 bg-light">
                                            <strong className="text-dark">📅 Created At:</strong>
                                            <p className="text-muted small mb-0">
                                                {new Date(announcement.created_at).toLocaleString('en-GB', {
                                                    day: '2-digit', month: 'short', year: 'numeric',
                                                    hour: '2-digit', minute: '2-digit', hour12: false,
                                                })}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                {/* ======== STATUS BADGE ======== */}
                                <div className="mb-4">
                                    <strong>Status:</strong>{' '}
                                    <span className={`badge rounded-pill px-3 py-2 ${announcement.is_active ? 'bg-success' : 'bg-secondary'}`}>
                                        {announcement.is_active ? 'Active' : 'Inactive'}
                                    </span>
                                </div>

                                {/* ======== CONTENT ======== */}
                                <div className="mb-4">
                                    <strong>📝 Content:</strong>
                                    <div className="alert alert-secondary mt-2">
                                        {nl2br(announcement.content)}
                                    </div>
                                </div>

                                {/* ======== IMAGE ======== */}
                                {announcement.image && (
                                    <div className="mb-4">
                                        <strong>🖼 Image:</strong>
                                        <div className="mt-2">
                                            <img
                                                src={`/image/announcements/${announcement.image}`}
                                                className="img-thumbnail"
                                                alt="Announcement Image"
                                                style={{ maxHeight: '260px' }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* ======== LINK ======== */}
                                {announcement.link && (
                                    <div className="mb-4">
                                        <strong>🔗 External Link:</strong>
                                        <p className="mt-2 mb-0">
                                            <a href={announcement.link} target="_blank" rel="noreferrer" className="btn btn-outline-info btn-sm">
                                                Visit Link <em className="icon ni ni-arrow-right"></em>
                                            </a>
                                        </p>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ===================== DELETE MODAL ===================== */}
            <div className="modal fade" id="deleteAnnouncementModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header bg-danger text-white">
                            <h5 className="modal-title">Delete Announcement</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <p className="text-muted">
                                Are you sure you want to delete this announcement?
                                <br /><strong>This action cannot be undone.</strong>
                            </p>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-light" data-bs-dismiss="modal">Cancel</button>

                            <form onSubmit={handleDelete}>
                                <button className="btn btn-danger">
                                    <em className="icon ni ni-trash"></em> Confirm Delete
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
