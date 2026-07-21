import React, { useEffect, useRef } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ jobs }) {
    const tableRef = useRef(null);
    const jobList = jobs.data ?? [];

    // Re-init a jQuery DataTable on the plain table if one is available globally.
    useEffect(() => {
        let instance;
        if (window.$ && window.$.fn && window.$.fn.DataTable && tableRef.current) {
            instance = window.$(tableRef.current).DataTable({
                destroy: true,
                autoWidth: false,
                paging: false, // pagination is handled server-side via Laravel's paginator
            });
        }
        return () => {
            instance?.destroy();
        };
    }, [jobList]);

    function handleDelete(job) {
        if (confirm('Delete this job?')) {
            router.delete(route('admin.jobs.destroy', job.id));
        }
    }

    return (
        <AppLayout>
            <Head title="Manage Jobs" />

            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">

                            {/* Page Title */}
                            <h2 className="fw-bold mb-0">Job Listings</h2>

                            {/* Action Buttons */}
                            <div className="d-flex gap-2">
                                <Link href={route('admin.jobs.create')} className="btn btn-primary btn-md rounded-pill">
                                    Add Job
                                </Link>

                                <Link href={route('admin.job-categories.index')} className="btn btn-secondary btn-md rounded-pill">
                                    Job Categories
                                </Link>
                            </div>
                        </div>


                        <div className="card card-bordered card-preview">
                            <div className="card-inner">
                                <table className="datatable-init nowrap table" ref={tableRef}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Type</th>
                                            <th>Location</th>
                                            <th>Experience</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jobList.length > 0 ? jobList.map((job, index) => (
                                            <tr key={job.id}>
                                                <td>{(jobs.from ?? 1) + index}</td>
                                                <td>{job.title}</td>
                                                <td>{job.type ?? '—'}</td>
                                                <td>{job.location ?? '—'}</td>
                                                <td>{job.experience_level ?? '—'}</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-outline-info btn-sm dropdown-toggle"
                                                            type="button"
                                                            id={`actionsDropdown${job.id}`}
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            Actions
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby={`actionsDropdown${job.id}`}>
                                                            <li>
                                                                <Link href={route('admin.jobs.show', job.id)} className="dropdown-item">
                                                                    <i className="bi bi-eye"></i> View
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href={route('admin.jobs.edit', job.id)} className="dropdown-item">
                                                                    <i className="bi bi-pencil"></i> Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleDelete(job)}
                                                                    className="dropdown-item"
                                                                >
                                                                    <i className="bi bi-trash"></i> Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan="6" className="text-center text-muted py-4">
                                                    No jobs found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>

                                {jobs.links && jobs.links.length > 3 && (
                                    <div className="d-flex flex-wrap gap-1 mt-3">
                                        {jobs.links.map((link, i) => (
                                            link.url ? (
                                                <Link
                                                    key={i}
                                                    href={link.url}
                                                    preserveState
                                                    className={`btn btn-sm ${link.active ? 'btn-primary' : 'btn-outline-secondary'}`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ) : (
                                                <span
                                                    key={i}
                                                    className="btn btn-sm btn-outline-secondary disabled"
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            )
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
