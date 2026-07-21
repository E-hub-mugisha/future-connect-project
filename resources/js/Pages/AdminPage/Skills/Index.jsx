import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminPageScope, { Pagination } from '@/Components/AdminPageStyles';

export default function SkillsIndex({ skills }) {
    const list = skills?.data ?? [];

    const handleDelete = (skill) => {
        if (confirm(`Delete "${skill.name}"? This action cannot be undone.`)) {
            router.delete(route('admin.skills.destroy', skill.id));
        }
    };

    return (
        <AppLayout>
            <Head title="Skills" />
            <AdminPageScope name="skills">
                <div className="ap-page">
                    <div className="ap-page-head">
                        <h1 className="ap-page-title">Skills <span>Management</span></h1>
                        <Link href={route('admin.skills.create')} className="ap-btn ap-btn-primary">
                            <i className="bi bi-plus-lg" /> Add Skill
                        </Link>
                    </div>

                    <div className="ap-card">
                        <div style={{ overflowX: 'auto' }}>
                            <table className="ap-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Talent</th>
                                        <th>Category</th>
                                        <th>Status</th>
                                        <th>Level</th>
                                        <th style={{ textAlign: 'right' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.length > 0 ? list.map((skill) => (
                                        <tr key={skill.id}>
                                            <td style={{ fontWeight: 600 }}>{skill.name}</td>
                                            <td className="ap-muted">{skill.talent?.name ?? 'N/A'}</td>
                                            <td className="ap-muted">{skill.category?.name ?? 'N/A'}</td>
                                            <td>
                                                <StatusBadge status={skill.status} />
                                            </td>
                                            <td>
                                                <span className="ap-badge muted">{skill.level}</span>
                                            </td>
                                            <td>
                                                <div className="dropdown text-end" style={{ display: 'inline-block' }}>
                                                    <button
                                                        className="ap-btn ap-btn-icon"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                        title="Actions"
                                                    >
                                                        <i className="bi bi-three-dots-vertical" />
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <Link className="dropdown-item" href={route('admin.skills.show', skill.id)}>
                                                                <i className="bi bi-eye" style={{ color: 'var(--ap-accent)' }} /> Quick View
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="dropdown-item" href={route('admin.skills.edit', skill.id)}>
                                                                <i className="bi bi-pencil" style={{ color: 'var(--ap-accent)' }} /> Edit
                                                            </Link>
                                                        </li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="dropdown-item text-danger"
                                                                onClick={() => handleDelete(skill)}
                                                            >
                                                                <i className="bi bi-trash" /> Delete
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={6}>
                                                <div className="ap-table-empty">
                                                    <i className="bi bi-puzzle" style={{ fontSize: '2.5rem', opacity: 0.4 }} />
                                                    <div style={{ marginTop: 8 }}>No skills yet.</div>
                                                    <Link href={route('admin.skills.create')} className="ap-btn ap-btn-primary" style={{ marginTop: 14 }}>
                                                        <i className="bi bi-plus-lg" /> Add First Skill
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <Pagination paginator={skills} />
                    </div>
                </div>
            </AdminPageScope>
        </AppLayout>
    );
}

function StatusBadge({ status }) {
    const map = {
        published: '',
        draft: 'warning',
        archived: 'muted',
    };
    return <span className={`ap-badge ${map[status?.toLowerCase()] ?? ''}`}>{status}</span>;
}
