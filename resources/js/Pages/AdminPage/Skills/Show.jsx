import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminPageScope from '@/Components/AdminPageStyles';

export default function SkillsShow({ skill }) {
    const tags = skill?.tags
        ? String(skill.tags).split(',').map((t) => t.trim()).filter(Boolean)
        : [];

    const avgRating = skill?.reviews?.length
        ? (skill.reviews.reduce((s, r) => s + (Number(r.rating) || 0), 0) / skill.reviews.length).toFixed(1)
        : null;

    const handleDelete = () => {
        if (confirm(`Delete "${skill.name}"? This action cannot be undone.`)) {
            router.delete(route('admin.skills.destroy', skill.id));
        }
    };

    return (
        <AppLayout>
            <Head title={skill.name} />
            <AdminPageScope name="skills">
                <div className="ap-page">
                    <div className="ap-page-head">
                        <div>
                            <h1 className="ap-page-title">Skill <span>Details</span></h1>
                            <div className="ap-page-sub">{skill.name}</div>
                        </div>
                        <Link href={route('admin.skills.index')} className="ap-btn ap-btn-ghost">
                            <i className="bi bi-arrow-left" /> Back to Skills
                        </Link>
                    </div>

                    <div className="ap-card">
                        <div className="ap-card-body">
                            <div className="row g-4 pb-4" style={{ borderBottom: '1px solid var(--ap-border)' }}>
                                <div className="col-lg-5">
                                    {skill.image ? (
                                        <img
                                            src={skill.image.startsWith('http') || skill.image.startsWith('/') ? skill.image : `/storage/${skill.image}`}
                                            alt={skill.name}
                                            style={{ width: '100%', borderRadius: 'var(--ap-radius-lg)', objectFit: 'cover', maxHeight: 320 }}
                                        />
                                    ) : (
                                        <div style={{
                                            width: '100%', height: 320, borderRadius: 'var(--ap-radius-lg)',
                                            background: 'var(--ap-bg-surface)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', color: 'var(--ap-text-muted)'
                                        }}>
                                            <i className="bi bi-image" style={{ fontSize: '2.5rem' }} />
                                        </div>
                                    )}
                                </div>
                                <div className="col-lg-7">
                                    {skill.category?.name && (
                                        <span className="ap-badge" style={{ marginBottom: 10 }}>
                                            <i className="bi bi-folder" /> {skill.category.name}
                                        </span>
                                    )}
                                    <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: 'var(--ap-text)', margin: '6px 0 8px' }}>
                                        {skill.name}
                                    </h1>

                                    {avgRating && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                                            <span style={{ color: '#f5b450' }}>
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <i key={i} className="bi bi-star-fill" />
                                                ))}
                                            </span>
                                            <strong style={{ color: 'var(--ap-text)' }}>{avgRating}</strong>
                                            <span className="ap-muted">({skill.reviews.length} reviews)</span>
                                        </div>
                                    )}

                                    <p className="ap-muted" style={{ lineHeight: 1.7, marginBottom: 18 }}>{skill.description}</p>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                        <Meta label="Author" value={skill.talent?.name} />
                                        <Meta label="Contact" value={skill.talent?.phone} />
                                        <Meta label="Email" value={skill.talent?.email} />
                                        <Meta label="Date Added" value={skill.created_at ? new Date(skill.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : null} />
                                        <div>
                                            <div className="ap-muted" style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>Status</div>
                                            <span className={`ap-badge ${skill.status === 'draft' ? 'warning' : skill.status === 'archived' ? 'muted' : ''}`}>{skill.status}</span>
                                        </div>
                                        <div>
                                            <div className="ap-muted" style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>Level</div>
                                            <span className="ap-badge muted">{skill.level}</span>
                                        </div>
                                    </div>

                                    {tags.length > 0 && (
                                        <div style={{ marginTop: 16 }}>
                                            <div className="ap-muted" style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>Tags</div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                                {tags.map((tag, i) => (
                                                    <span key={i} className="ap-badge muted">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
                                        <Link href={route('admin.skills.edit', skill.id)} className="ap-btn ap-btn-primary">
                                            <i className="bi bi-pencil" /> Edit Skill
                                        </Link>
                                        <button type="button" className="ap-btn ap-btn-danger" onClick={handleDelete}>
                                            <i className="bi bi-trash" /> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminPageScope>
        </AppLayout>
    );
}

function Meta({ label, value }) {
    return (
        <div>
            <div className="ap-muted" style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 600, color: 'var(--ap-text)' }}>{value || '—'}</div>
        </div>
    );
}
