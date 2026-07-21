import React, { useEffect, useRef } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ announcements }) {
    const tableRef = useRef(null);

    // Re-init a jQuery DataTable on the plain table if one is available globally.
    useEffect(() => {
        let instance;
        if (window.$ && window.$.fn && window.$.fn.DataTable && tableRef.current) {
            instance = window.$(tableRef.current).DataTable({
                destroy: true,
                autoWidth: false,
            });
        }
        return () => {
            instance?.destroy();
        };
    }, [announcements]);

    function handleDelete(e, announcement) {
        // Native form submit is kept for parity with the modal confirm below;
        // this handler exists only if you want to bypass the modal via JS.
        e.preventDefault();
        router.delete(route('admin.announcements.destroy', announcement.id));
    }

    return (
        <AppLayout>
            <Head title="Announcements" />

            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2>Announcements</h2>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <Link href={route('admin.announcements.create')} className="btn btn-primary">
                                    <i className="fa fa-plus"></i> Create Announcement
                                </Link>
                            </div>
                        </div>

                        <div className="card card-bordered card-preview">
                            <div className="card-inner">
                                <table className="datatable-init nowrap table" ref={tableRef}>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th>Author</th>
                                            <th>Created At</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {announcements.map(announcement => (
                                            <tr key={announcement.id}>
                                                <td>{announcement.id}</td>
                                                <td>
                                                    {announcement.title.length > 50
                                                        ? `${announcement.title.slice(0, 50)}…`
                                                        : announcement.title}
                                                </td>
                                                <td>{announcement.category?.name}</td>
                                                <td>{announcement.user?.name ?? 'N/A'}</td>
                                                <td>{new Date(announcement.created_at).toISOString().slice(0, 10)}</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-outline-info btn-sm dropdown-toggle"
                                                            type="button"
                                                            id={`actionsDropdown${announcement.id}`}
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            Actions
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby={`actionsDropdown${announcement.id}`}>
                                                            <li>
                                                                <Link className="dropdown-item" href={route('admin.announcements.show', announcement.id)}>
                                                                    Quick View
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="dropdown-item" href={route('admin.announcements.edit', announcement.id)}>
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item text-danger"
                                                                    href="#"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target={`#deleteModal${announcement.id}`}
                                                                >
                                                                    Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {announcements.map(announcement => (
                                    <div
                                        className="modal fade"
                                        id={`deleteModal${announcement.id}`}
                                        tabIndex="-1"
                                        aria-labelledby={`deleteModalLabel${announcement.id}`}
                                        aria-hidden="true"
                                        key={`modal-${announcement.id}`}
                                    >
                                        <div className="modal-dialog">
                                            <form
                                                onSubmit={e => handleDelete(e, announcement)}
                                                className="modal-content"
                                            >
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id={`deleteModalLabel${announcement.id}`}>
                                                        Confirm Delete
                                                    </h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    Are you sure you want to delete this announcement? This action cannot be undone.
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                    <button type="submit" className="btn btn-danger">Yes, Delete</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
