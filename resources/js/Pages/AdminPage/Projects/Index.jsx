import React, { useEffect, useRef } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ projects }) {
    const tableRef = useRef(null);
    const projectList = Array.isArray(projects) ? projects : (projects?.data ?? []);

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
    }, [projectList]);

    function handleVerify(project) {
        router.post(route('admin.projects.verify', project.id));
    }

    function handleDelete(project) {
        if (confirm('Delete this project?')) {
            router.delete(route('admin.projects.destroy', project.id));
        }
    }

    return (
        <AppLayout>
            <Head title="Manage Projects" />

            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold">Manage Projects</h2>
                            <Link href={route('admin.projects.create')} className="btn btn-primary btn-sm rounded-pill">
                                <i className="bi bi-plus-circle"></i> Add Project
                            </Link>
                        </div>

                        <div className="card card-bordered card-preview">
                            <div className="card-inner">
                                <table className="datatable-init nowrap table" ref={tableRef}>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Owner</th>
                                            <th>Category</th>
                                            <th>Budget</th>
                                            <th>Status</th>
                                            <th>Verified</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projectList.map(project => (
                                            <tr key={project.id}>
                                                <td>
                                                    <span className="fw-bold">{project.title}</span><br />
                                                    <small className="text-muted">
                                                        {project.description
                                                            ? (project.description.length > 40
                                                                ? `${project.description.slice(0, 40)}…`
                                                                : project.description)
                                                            : ''}
                                                    </small>
                                                </td>
                                                <td>
                                                    <div className="fw-bold text-dark">
                                                        {project.user?.name}
                                                    </div>
                                                    <div className="small text-muted mt-1">
                                                        {project.user?.email}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fw-bold text-dark">
                                                        {project.category}
                                                    </div>
                                                    <div className="small text-muted mt-1">
                                                        {project.location}
                                                    </div>
                                                </td>
                                                <td>{project.budget}</td>
                                                <td>{project.status ? project.status.charAt(0).toUpperCase() + project.status.slice(1) : ''}</td>
                                                <td>
                                                    {project.verified ? (
                                                        <span className="badge bg-success">Yes</span>
                                                    ) : (
                                                        <span className="badge bg-warning text-dark">No</span>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-outline-info btn-sm dropdown-toggle"
                                                            type="button"
                                                            id={`actionsDropdown${project.id}`}
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            Actions
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby={`actionsDropdown${project.id}`}>
                                                            <li>
                                                                <Link href={route('admin.projects.show', project.id)} className="dropdown-item">View</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={route('admin.projects.edit', project.id)} className="dropdown-item">Edit</Link>
                                                            </li>
                                                            {!project.verified && (
                                                                <li>
                                                                    <button type="button" onClick={() => handleVerify(project)} className="dropdown-item">
                                                                        Verify
                                                                    </button>
                                                                </li>
                                                            )}
                                                            <li>
                                                                <button type="button" onClick={() => handleDelete(project)} className="dropdown-item">
                                                                    Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {projects.links && projects.links.length > 3 && (
                                    <div className="d-flex flex-wrap gap-1 mt-3">
                                        {projects.links.map((link, i) => (
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
