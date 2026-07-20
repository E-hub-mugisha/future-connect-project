import { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Testimonials({ testimonials, talents }) {
    const [addOpen, setAddOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const addForm = useForm({
        title: '',
        talent_id: '',
        content: '',
        rating: '5',
    });

    const editForm = useForm({
        title: '',
        talent_id: '',
        content: '',
        rating: '5',
    });

    const openEdit = (t) => {
        editForm.setData({
            title: t.title ?? '',
            talent_id: t.talent_id ?? '',
            content: t.content ?? '',
            rating: t.rating ? String(t.rating) : '5',
        });
        setEditingId(t.id);
    };

    const closeEdit = () => {
        setEditingId(null);
        editForm.clearErrors();
        editForm.reset();
    };

    const closeAdd = () => {
        setAddOpen(false);
        addForm.clearErrors();
        addForm.reset();
    };

    const submitAdd = (e) => {
        e.preventDefault();
        addForm.post(route('admin.testimonials.store'), {
            preserveScroll: true,
            onSuccess: () => closeAdd(),
        });
    };

    const submitEdit = (e, id) => {
        e.preventDefault();
        editForm.put(route('admin.testimonials.update', id), {
            preserveScroll: true,
            onSuccess: () => closeEdit(),
        });
    };

    const destroy = (id) => {
        if (!confirm('Delete this testimonial?')) return;
        router.delete(route('admin.testimonials.destroy', id), { preserveScroll: true });
    };

    const formatDate = (dateStr) =>
        new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    const Stars = ({ rating }) => (
        <span className="star-row" aria-label={`${rating ?? 0} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((n) => (
                <svg
                    key={n}
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill={n <= (rating ?? 0) ? '#f5a623' : '#e2e5ea'}
                >
                    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
                </svg>
            ))}
        </span>
    );

    return (
        <AppLayout>
            <Head title="Testimonials" />

            <div className="testi-page">
                <div className="testi-header">
                    <div>
                        <h1 className="testi-title">Testimonials</h1>
                        <p className="testi-subtitle">Manage client feedback shown across the platform</p>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => setAddOpen(true)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                        Add Testimonial
                    </button>
                </div>

                <div className="testi-card">
                    {testimonials.data && testimonials.data.length === 0 ? (
                        <div className="testi-empty">
                            <p>No testimonials yet.</p>
                            <button type="button" className="btn btn-primary" onClick={() => setAddOpen(true)}>
                                Add your first testimonial
                            </button>
                        </div>
                    ) : (
                        <div className="testi-table-wrap">
                            <table className="testi-table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Talent</th>
                                        <th>Rating</th>
                                        <th>Date</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(testimonials.data ?? testimonials).map((t) => (
                                        <tr key={t.id}>
                                            <td>
                                                <div className="testi-title-cell">{t.title}</div>
                                                <div className="testi-content-preview">{t.content}</div>
                                            </td>
                                            <td>{t.talent?.name ?? <span className="muted">N/A</span>}</td>
                                            <td>
                                                <Stars rating={t.rating} />
                                            </td>
                                            <td className="muted">{formatDate(t.created_at)}</td>
                                            <td className="text-right">
                                                <div className="testi-actions">
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline btn-sm"
                                                        onClick={() => openEdit(t)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger-ghost btn-sm"
                                                        onClick={() => destroy(t.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Modal */}
            {addOpen && (
                <div className="modal-backdrop" onClick={closeAdd}>
                    <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={submitAdd}>
                            <div className="modal-header">
                                <h2>Add Testimonial</h2>
                                <button type="button" className="modal-close" onClick={closeAdd} aria-label="Close">
                                    &times;
                                </button>
                            </div>

                            <div className="modal-body">
                                <Field label="Title" error={addForm.errors.title}>
                                    <input
                                        className="form-input"
                                        value={addForm.data.title}
                                        onChange={(e) => addForm.setData('title', e.target.value)}
                                        required
                                    />
                                </Field>

                                <Field label="Talent" error={addForm.errors.talent_id}>
                                    <select
                                        className="form-input"
                                        value={addForm.data.talent_id}
                                        onChange={(e) => addForm.setData('talent_id', e.target.value)}
                                        required
                                    >
                                        <option value="">Select Talent</option>
                                        {talents.map((talent) => (
                                            <option key={talent.id} value={talent.id}>
                                                {talent.name}
                                            </option>
                                        ))}
                                    </select>
                                </Field>

                                <Field label="Content" error={addForm.errors.content}>
                                    <textarea
                                        className="form-input"
                                        rows={4}
                                        value={addForm.data.content}
                                        onChange={(e) => addForm.setData('content', e.target.value)}
                                        placeholder="Your testimonial content here"
                                        required
                                    />
                                </Field>

                                <Field label="Rating" error={addForm.errors.rating}>
                                    <RatingPicker
                                        value={addForm.data.rating}
                                        onChange={(v) => addForm.setData('rating', v)}
                                    />
                                </Field>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeAdd}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary" disabled={addForm.processing}>
                                    {addForm.processing ? 'Saving…' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {editingId && (
                <div className="modal-backdrop" onClick={closeEdit}>
                    <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={(e) => submitEdit(e, editingId)}>
                            <div className="modal-header">
                                <h2>Edit Testimonial</h2>
                                <button type="button" className="modal-close" onClick={closeEdit} aria-label="Close">
                                    &times;
                                </button>
                            </div>

                            <div className="modal-body">
                                <Field label="Title" error={editForm.errors.title}>
                                    <input
                                        className="form-input"
                                        value={editForm.data.title}
                                        onChange={(e) => editForm.setData('title', e.target.value)}
                                        required
                                    />
                                </Field>

                                <Field label="Talent" error={editForm.errors.talent_id}>
                                    <select
                                        className="form-input"
                                        value={editForm.data.talent_id}
                                        onChange={(e) => editForm.setData('talent_id', e.target.value)}
                                        required
                                    >
                                        <option value="">Select Talent</option>
                                        {talents.map((talent) => (
                                            <option key={talent.id} value={talent.id}>
                                                {talent.name}
                                            </option>
                                        ))}
                                    </select>
                                </Field>

                                <Field label="Content" error={editForm.errors.content}>
                                    <textarea
                                        className="form-input"
                                        rows={4}
                                        value={editForm.data.content}
                                        onChange={(e) => editForm.setData('content', e.target.value)}
                                        required
                                    />
                                </Field>

                                <Field label="Rating" error={editForm.errors.rating}>
                                    <RatingPicker
                                        value={editForm.data.rating}
                                        onChange={(v) => editForm.setData('rating', v)}
                                    />
                                </Field>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeEdit}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary" disabled={editForm.processing}>
                                    {editForm.processing ? 'Saving…' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <style>{`
                :root {
                    --testi-primary: #4f46e5;
                    --testi-primary-hover: #4338ca;
                    --testi-danger: #e11d48;
                    --testi-text: #1f2430;
                    --testi-muted: #7c8397;
                    --testi-border: #e6e8ef;
                    --testi-bg-card: #ffffff;
                    --testi-bg-page: #f6f7fb;
                    --testi-radius: 12px;
                }

                .testi-page {
                    padding: 28px;
                    background: var(--testi-bg-page);
                    min-height: 100%;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    color: var(--testi-text);
                }

                .testi-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 24px;
                    flex-wrap: wrap;
                    gap: 12px;
                }

                .testi-title {
                    font-size: 24px;
                    font-weight: 700;
                    margin: 0;
                }

                .testi-subtitle {
                    margin: 4px 0 0;
                    color: var(--testi-muted);
                    font-size: 14px;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: none;
                    border-radius: 8px;
                    padding: 10px 16px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.15s ease, transform 0.05s ease;
                }
                .btn:active { transform: translateY(1px); }
                .btn-sm { padding: 6px 12px; font-size: 13px; }

                .btn-primary { background: var(--testi-primary); color: #fff; }
                .btn-primary:hover { background: var(--testi-primary-hover); }
                .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

                .btn-secondary { background: #eef0f5; color: var(--testi-text); }
                .btn-secondary:hover { background: #e3e6ee; }

                .btn-outline {
                    background: #fff;
                    color: var(--testi-primary);
                    border: 1px solid var(--testi-border);
                }
                .btn-outline:hover { background: #f1f1fd; }

                .btn-danger-ghost {
                    background: transparent;
                    color: var(--testi-danger);
                }
                .btn-danger-ghost:hover { background: #fdeaee; }

                .testi-card {
                    background: var(--testi-bg-card);
                    border: 1px solid var(--testi-border);
                    border-radius: var(--testi-radius);
                    overflow: hidden;
                    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
                }

                .testi-table-wrap { overflow-x: auto; }

                .testi-table {
                    width: 100%;
                    border-collapse: collapse;
                    min-width: 720px;
                }

                .testi-table thead th {
                    text-align: left;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    color: var(--testi-muted);
                    padding: 14px 20px;
                    border-bottom: 1px solid var(--testi-border);
                    background: #fafbfd;
                }

                .testi-table tbody td {
                    padding: 16px 20px;
                    border-bottom: 1px solid var(--testi-border);
                    font-size: 14px;
                    vertical-align: top;
                }

                .testi-table tbody tr:last-child td { border-bottom: none; }
                .testi-table tbody tr:hover { background: #fafbff; }

                .testi-title-cell { font-weight: 600; margin-bottom: 4px; }

                .testi-content-preview {
                    color: var(--testi-muted);
                    font-size: 13px;
                    max-width: 320px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .muted { color: var(--testi-muted); }
                .text-right { text-align: right; }

                .testi-actions {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }

                .star-row { display: inline-flex; gap: 2px; align-items: center; }

                .testi-empty {
                    padding: 60px 20px;
                    text-align: center;
                    color: var(--testi-muted);
                }
                .testi-empty p { margin-bottom: 16px; }

                /* Modal */
                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 18, 30, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    padding: 16px;
                }

                .modal-panel {
                    background: #fff;
                    border-radius: var(--testi-radius);
                    width: 100%;
                    max-width: 480px;
                    max-height: 90vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 40px rgba(16, 24, 40, 0.2);
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .modal-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px 24px;
                    border-bottom: 1px solid var(--testi-border);
                }

                .modal-header h2 {
                    font-size: 17px;
                    margin: 0;
                    font-weight: 700;
                }

                .modal-close {
                    background: none;
                    border: none;
                    font-size: 22px;
                    line-height: 1;
                    color: var(--testi-muted);
                    cursor: pointer;
                }
                .modal-close:hover { color: var(--testi-text); }

                .modal-body { padding: 20px 24px; }
                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    padding: 16px 24px;
                    border-top: 1px solid var(--testi-border);
                }

                .form-field { margin-bottom: 16px; }
                .form-field:last-child { margin-bottom: 0; }

                .form-label {
                    display: block;
                    font-size: 13px;
                    font-weight: 600;
                    margin-bottom: 6px;
                    color: var(--testi-text);
                }

                .form-input {
                    width: 100%;
                    padding: 10px 12px;
                    font-size: 14px;
                    border: 1px solid var(--testi-border);
                    border-radius: 8px;
                    background: #fff;
                    color: var(--testi-text);
                    font-family: inherit;
                }
                .form-input:focus {
                    outline: none;
                    border-color: var(--testi-primary);
                    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
                }

                textarea.form-input { resize: vertical; }

                .form-error {
                    color: var(--testi-danger);
                    font-size: 12px;
                    margin-top: 4px;
                }

                .rating-picker { display: flex; gap: 6px; }
                .rating-btn {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    border: 1px solid var(--testi-border);
                    background: #fff;
                    cursor: pointer;
                    font-weight: 600;
                    color: var(--testi-muted);
                    transition: all 0.15s ease;
                }
                .rating-btn.active {
                    background: var(--testi-primary);
                    border-color: var(--testi-primary);
                    color: #fff;
                }
            `}</style>
        </AppLayout>
    );
}

function Field({ label, error, children }) {
    return (
        <div className="form-field">
            <label className="form-label">{label}</label>
            {children}
            {error && <div className="form-error">{error}</div>}
        </div>
    );
}

function RatingPicker({ value, onChange }) {
    return (
        <div className="rating-picker">
            {[1, 2, 3, 4, 5].map((n) => (
                <button
                    key={n}
                    type="button"
                    className={`rating-btn ${String(n) === String(value) ? 'active' : ''}`}
                    onClick={() => onChange(String(n))}
                >
                    {n}
                </button>
            ))}
        </div>
    );
}
