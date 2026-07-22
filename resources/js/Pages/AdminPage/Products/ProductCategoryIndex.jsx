import React, { useEffect, useState } from 'react';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const routes = {
    categoriesIndex: '/admin/product-categories',
    categoryStore: '/admin/product-categories',
    categoryUpdate: (id) => `/admin/product-categories/${id}`,
    categoryDestroy: (id) => `/admin/product-categories/${id}`,
};

/* ── Inline icon set ── */
const Icon = {
    Plus: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 5v14M5 12h14" />
        </svg>
    ),
    Tag: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M20 12.5 12.5 20a1.5 1.5 0 0 1-2.1 0l-6.4-6.4a1.5 1.5 0 0 1 0-2.1L11.5 4H19a1 1 0 0 1 1 1v7.5Z" />
            <circle cx="15" cy="9" r="1.4" fill="currentColor" stroke="none" />
        </svg>
    ),
    Search: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
        </svg>
    ),
    Edit: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
        </svg>
    ),
    Trash: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M4 7h16M9 7V4.8c0-.4.4-.8.9-.8h4.2c.5 0 .9.4.9.8V7M6 7l1 13.2c0 .9.8 1.8 1.8 1.8h6.4c1 0 1.8-.9 1.8-1.8L18 7" />
        </svg>
    ),
    Close: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M18 6 6 18M6 6l12 12" />
        </svg>
    ),
    Save: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M5 4h11l3 3v13H5V4Z" /><path d="M8 4v5h7V4" /><path d="M8 14h8v6H8v-6Z" />
        </svg>
    ),
    Alert: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
        </svg>
    ),
    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M20 6 9 17l-5-5" />
        </svg>
    ),
    Inbox: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.5 5h13l3.5 7v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7l3.5-7Z" />
        </svg>
    ),
};

function decodePaginationLabel(label) {
    return label
        .replace(/&laquo;/g, '‹')
        .replace(/&raquo;/g, '›')
        .replace(/Previous/i, 'Prev');
}

export default function ProductCategoryIndex({ categories, filters = {} }) {
    const { props } = usePage();
    const flashSuccess = props.flash?.success;
    const flashError = props.flash?.error;

    const [search, setSearch] = useState(filters.search ?? '');
    const [createOpen, setCreateOpen] = useState(false);
    const [editTarget, setEditTarget] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [toast, setToast] = useState(null);

    const rows = categories?.data ?? [];
    const paginationLinks = categories?.links ?? [];

    useEffect(() => {
        if (flashSuccess) setToast({ type: 'success', message: flashSuccess });
        else if (flashError) setToast({ type: 'error', message: flashError });
        if (flashSuccess || flashError) {
            const t = setTimeout(() => setToast(null), 4000);
            return () => clearTimeout(t);
        }
    }, [flashSuccess, flashError]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        router.get(routes.categoriesIndex, { search }, { preserveState: true, preserveScroll: true, replace: true });
    };

    return (
        <div data-h-scope="category-admin">
            <Head title="Product Categories" />
            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
                rel="stylesheet"
            />

            <style>{`
                [data-h-scope="category-admin"] {
                    --bg-page:    #f6faf8;
                    --bg-card:    #ffffff;
                    --bg-soft:    rgba(0,100,60,0.035);
                    --bg-accent:  rgba(0,166,103,0.08);
                    --accent:     #00a667;
                    --accent-dim: #00854f;
                    --accent-glow:rgba(0,166,103,0.2);
                    --text-primary:   #10201b;
                    --text-secondary: #4c6b62;
                    --text-muted:     #839a92;
                    --border:     rgba(0,100,60,0.12);
                    --border-accent: rgba(0,166,103,0.35);
                    --danger:     #c94a3f;
                    --danger-bg:  rgba(201,74,63,0.1);
                    --radius-lg:  18px;
                    --radius-md:  12px;
                    --radius-pill:50px;
                    --font-head:  'Syne', sans-serif;
                    --font-body:  'DM Sans', sans-serif;
                }
                [data-h-scope="category-admin"] *,
                [data-h-scope="category-admin"] *::before,
                [data-h-scope="category-admin"] *::after { box-sizing: border-box; }

                [data-h-scope="category-admin"] {
                    background: var(--bg-page);
                    font-family: var(--font-body);
                    color: var(--text-primary);
                    min-height: 100%;
                    padding: 40px 32px;
                }
                @media(max-width: 768px) { [data-h-scope="category-admin"] { padding: 20px 16px; } }

                .c-wrap { max-width: 960px; margin: 0 auto; }

                .c-header {
                    display: flex; align-items: flex-start; justify-content: space-between;
                    gap: 16px; flex-wrap: wrap; margin-bottom: 24px;
                }
                .c-header h1 { font-family: var(--font-head); font-size: 1.6rem; font-weight: 800; margin: 0 0 4px; }
                .c-header p { color: var(--text-secondary); margin: 0; font-size: 0.88rem; }

                .c-btn-primary {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent); color: #fff; border: none;
                    border-radius: var(--radius-pill); padding: 11px 20px;
                    font-family: var(--font-head); font-size: 0.85rem; font-weight: 700;
                    cursor: pointer; box-shadow: 0 4px 18px var(--accent-glow);
                    transition: background 0.15s, transform 0.15s; white-space: nowrap;
                }
                .c-btn-primary svg { width: 16px; height: 16px; }
                .c-btn-primary:hover { background: var(--accent-dim); transform: translateY(-1px); }

                .c-card {
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: var(--radius-lg); overflow: hidden;
                    box-shadow: 0 1px 2px rgba(16,32,27,0.03), 0 12px 32px -18px rgba(16,32,27,0.12);
                }

                .c-toolbar { padding: 18px 22px; border-bottom: 1px solid var(--border); }
                .c-search {
                    display: flex; align-items: center; gap: 8px;
                    background: var(--bg-soft); border: 1px solid var(--border);
                    border-radius: var(--radius-pill); padding: 9px 16px; max-width: 320px;
                    transition: border-color 0.15s;
                }
                .c-search:focus-within { border-color: var(--border-accent); }
                .c-search svg { width: 16px; height: 16px; color: var(--text-muted); flex-shrink: 0; }
                .c-search input {
                    background: transparent; border: none; outline: none;
                    color: var(--text-primary); font-size: 0.85rem; width: 100%; font-family: var(--font-body);
                }
                .c-search input::placeholder { color: var(--text-muted); }

                .c-table { width: 100%; border-collapse: collapse; }
                .c-table th {
                    text-align: left; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em;
                    color: var(--text-muted); font-weight: 700; padding: 14px 22px;
                    border-bottom: 1px solid var(--border); white-space: nowrap;
                }
                .c-table td {
                    padding: 15px 22px; border-bottom: 1px solid var(--border);
                    font-size: 0.87rem; color: var(--text-secondary); vertical-align: middle;
                }
                .c-table tbody tr:last-child td { border-bottom: none; }
                .c-table tbody tr:hover { background: var(--bg-soft); }

                .c-name-cell { display: flex; align-items: center; gap: 12px; }
                .c-icon-badge {
                    width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
                    background: var(--bg-accent); border: 1px solid var(--border-accent);
                    color: var(--accent); display: flex; align-items: center; justify-content: center;
                }
                .c-icon-badge svg { width: 16px; height: 16px; }
                .c-name-cell h6 { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 0 0 2px; }
                .c-name-cell p { font-size: 0.76rem; color: var(--text-muted); margin: 0; }

                .c-desc-cell { max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

                .c-count-pill {
                    display: inline-flex; align-items: center; gap: 6px;
                    background: var(--bg-soft); border: 1px solid var(--border);
                    border-radius: var(--radius-pill); padding: 4px 12px;
                    font-size: 0.76rem; font-weight: 700; color: var(--text-secondary);
                }

                .c-actions { display: flex; gap: 8px; justify-content: flex-end; }
                .c-icon-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 32px; height: 32px; border-radius: 9px;
                    border: 1px solid var(--border); background: var(--bg-card);
                    color: var(--text-secondary); cursor: pointer;
                    transition: border-color 0.15s, color 0.15s, background 0.15s;
                }
                .c-icon-btn svg { width: 15px; height: 15px; }
                .c-icon-btn:hover { border-color: var(--border-accent); color: var(--accent); background: var(--bg-accent); }
                .c-icon-btn.is-danger:hover { border-color: var(--danger); color: var(--danger); background: var(--danger-bg); }

                .c-empty { text-align: center; padding: 60px 24px; color: var(--text-muted); font-size: 0.88rem; }
                .c-empty svg { width: 34px; height: 34px; margin: 0 auto 12px; display: block; color: var(--text-muted); }

                .c-footer { padding: 16px 22px; display: flex; justify-content: flex-end; }
                .c-pagination { display: flex; gap: 6px; flex-wrap: wrap; }
                .c-page-link {
                    min-width: 34px; height: 34px; display: inline-flex; align-items: center; justify-content: center;
                    padding: 0 10px; border-radius: 8px; border: 1px solid var(--border);
                    background: transparent; color: var(--text-secondary); font-size: 0.78rem; font-weight: 600;
                    text-decoration: none; transition: border-color 0.15s, color 0.15s, background 0.15s;
                }
                .c-page-link:hover { border-color: var(--border-accent); color: var(--accent); }
                .c-page-link.active { background: var(--accent); border-color: var(--accent); color: #fff; }
                .c-page-link.disabled { opacity: 0.35; pointer-events: none; }

                @media(max-width: 700px) { .c-table { display: block; overflow-x: auto; white-space: nowrap; } }

                /* ── Toast ── */
                .c-toast {
                    position: fixed; top: 20px; right: 20px; z-index: 1200;
                    display: flex; align-items: center; gap: 10px;
                    background: var(--bg-card); border: 1px solid var(--border-accent);
                    border-radius: var(--radius-md); padding: 13px 18px;
                    font-size: 0.85rem; font-weight: 600; color: var(--text-primary);
                    box-shadow: 0 10px 30px -8px rgba(16,32,27,0.25);
                }
                .c-toast.is-error { border-color: rgba(201,74,63,0.4); }
                .c-toast svg { width: 17px; height: 17px; flex-shrink: 0; }
                .c-toast.is-success svg { color: var(--accent); }
                .c-toast.is-error svg { color: var(--danger); }

                /* ── Modal ── */
                .c-modal-backdrop {
                    position: fixed; inset: 0; background: rgba(16,32,27,.45);
                    display: flex; align-items: flex-start; justify-content: center;
                    z-index: 1050; padding: 3rem 1rem; overflow-y: auto;
                }
                .c-modal {
                    background: var(--bg-card); border: 1px solid var(--border);
                    border-radius: 18px; width: 100%; max-width: 440px; margin: auto 0;
                    box-shadow: 0 20px 60px -20px rgba(16,32,27,0.35);
                }
                .c-modal-header {
                    border-bottom: 1px solid var(--border); padding: 20px 24px;
                    display: flex; align-items: flex-start; justify-content: space-between;
                }
                .c-modal-title { font-family: var(--font-head); font-size: 1.02rem; font-weight: 800; margin: 0 0 4px; }
                .c-modal-subtitle { font-size: 0.8rem; color: var(--text-muted); margin: 0; }
                .c-modal-close {
                    background: transparent; border: none; color: var(--text-muted); cursor: pointer;
                    width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;
                    border-radius: 8px; transition: background 0.15s, color 0.15s;
                }
                .c-modal-close:hover { background: var(--bg-soft); color: var(--text-primary); }
                .c-modal-close svg { width: 16px; height: 16px; }
                .c-modal-body { padding: 22px 24px; }

                .c-label { display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 7px; }
                .c-input, .c-textarea {
                    width: 100%; background: var(--bg-soft); border: 1px solid var(--border);
                    border-radius: var(--radius-md); color: var(--text-primary); font-family: var(--font-body);
                    font-size: 0.88rem; padding: 11px 14px; outline: none;
                    transition: border-color 0.15s, box-shadow 0.15s, background 0.15s; margin-bottom: 16px;
                }
                .c-input:focus, .c-textarea:focus {
                    border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-glow); background: var(--bg-card);
                }
                .c-textarea { resize: vertical; min-height: 90px; line-height: 1.5; }
                .c-error { color: var(--danger); font-size: 0.76rem; margin: -10px 0 14px; font-weight: 500; }

                .c-modal-footer { display: flex; justify-content: flex-end; gap: 10px; margin-top: 4px; }
                .c-btn-ghost {
                    background: transparent; border: 1px solid var(--border); color: var(--text-secondary);
                    border-radius: var(--radius-pill); padding: 10px 18px;
                    font-family: var(--font-head); font-size: 0.82rem; font-weight: 700; cursor: pointer;
                    transition: border-color 0.15s, color 0.15s;
                }
                .c-btn-ghost:hover { border-color: var(--border-accent); color: var(--accent); }
                .c-btn-submit {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--accent); border: none; color: #fff;
                    border-radius: var(--radius-pill); padding: 10px 20px;
                    font-family: var(--font-head); font-size: 0.82rem; font-weight: 700; cursor: pointer;
                    box-shadow: 0 4px 16px var(--accent-glow); transition: background 0.15s;
                }
                .c-btn-submit svg { width: 15px; height: 15px; }
                .c-btn-submit:hover { background: var(--accent-dim); }
                .c-btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

                .c-btn-delete {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: var(--danger); border: none; color: #fff;
                    border-radius: var(--radius-pill); padding: 10px 20px;
                    font-family: var(--font-head); font-size: 0.82rem; font-weight: 700; cursor: pointer;
                    transition: background 0.15s;
                }
                .c-btn-delete:hover { background: #b03e34; }
                .c-btn-delete:disabled { opacity: 0.6; cursor: not-allowed; }

                .c-delete-icon {
                    width: 46px; height: 46px; border-radius: 50%;
                    background: var(--danger-bg); color: var(--danger);
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 14px;
                }
                .c-delete-icon svg { width: 22px; height: 22px; }
                .c-delete-text { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; margin: 0; }
                .c-delete-text strong { color: var(--text-primary); }
                .c-delete-warn {
                    margin-top: 12px; font-size: 0.78rem; color: var(--warn, #b3820f);
                    background: rgba(179,130,15,0.1); border: 1px solid rgba(179,130,15,0.25);
                    border-radius: 10px; padding: 10px 12px;
                }
            `}</style>

            <div className="c-wrap">
                <div className="c-header">
                    <div>
                        <h1>Product Categories</h1>
                        <p>Organize the shop catalog into browsable categories.</p>
                    </div>
                    <button className="c-btn-primary" onClick={() => setCreateOpen(true)}>
                        <Icon.Plus /> New Category
                    </button>
                </div>

                <div className="c-card">
                    <div className="c-toolbar">
                        <form onSubmit={handleSearchSubmit} className="c-search">
                            <Icon.Search />
                            <input
                                type="text"
                                placeholder="Search categories…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                    </div>

                    {rows.length > 0 ? (
                        <div style={{ overflowX: 'auto' }}>
                            <table className="c-table">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Products</th>
                                        <th style={{ textAlign: 'right' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((cat) => (
                                        <tr key={cat.id}>
                                            <td>
                                                <div className="c-name-cell">
                                                    <div className="c-icon-badge"><Icon.Tag /></div>
                                                    <div>
                                                        <h6>{cat.name}</h6>
                                                        <p>/{cat.slug}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="c-desc-cell" title={cat.description ?? ''}>
                                                {cat.description || '—'}
                                            </td>
                                            <td>
                                                <span className="c-count-pill">{cat.products_count ?? 0}</span>
                                            </td>
                                            <td>
                                                <div className="c-actions">
                                                    <button className="c-icon-btn" onClick={() => setEditTarget(cat)} title="Edit">
                                                        <Icon.Edit />
                                                    </button>
                                                    <button className="c-icon-btn is-danger" onClick={() => setDeleteTarget(cat)} title="Delete">
                                                        <Icon.Trash />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="c-empty">
                            <Icon.Inbox />
                            No categories found. Create one to get started.
                        </div>
                    )}

                    {paginationLinks.length > 3 && (
                        <div className="c-footer">
                            <div className="c-pagination">
                                {paginationLinks.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url || '#'}
                                        className={`c-page-link ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                                        preserveScroll
                                    >
                                        {decodePaginationLabel(link.label)}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {toast && (
                <div className={`c-toast ${toast.type === 'success' ? 'is-success' : 'is-error'}`}>
                    {toast.type === 'success' ? <Icon.Check /> : <Icon.Alert />}
                    {toast.message}
                </div>
            )}

            {createOpen && (
                <CategoryFormModal
                    mode="create"
                    onClose={() => setCreateOpen(false)}
                />
            )}

            {editTarget && (
                <CategoryFormModal
                    mode="edit"
                    category={editTarget}
                    onClose={() => setEditTarget(null)}
                />
            )}

            {deleteTarget && (
                <DeleteCategoryModal
                    category={deleteTarget}
                    onClose={() => setDeleteTarget(null)}
                />
            )}
        </div>
    );
}

function CategoryFormModal({ mode, category, onClose }) {
    const isEdit = mode === 'edit';

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: category?.name ?? '',
        description: category?.description ?? '',
    });

    const submit = (e) => {
        e.preventDefault();
        const opts = {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onClose();
            },
        };
        if (isEdit) {
            put(routes.categoryUpdate(category.id), opts);
        } else {
            post(routes.categoryStore, opts);
        }
    };

    return (
        <div className="c-modal-backdrop" onClick={onClose}>
            <div className="c-modal" onClick={(e) => e.stopPropagation()}>
                <div className="c-modal-header">
                    <div>
                        <h5 className="c-modal-title">{isEdit ? 'Edit Category' : 'New Category'}</h5>
                        <p className="c-modal-subtitle">
                            {isEdit ? `Updating "${category.name}"` : 'Add a new category to the catalog'}
                        </p>
                    </div>
                    <button className="c-modal-close" onClick={onClose}>
                        <Icon.Close />
                    </button>
                </div>
                <form onSubmit={submit}>
                    <div className="c-modal-body">
                        <label className="c-label">Category name</label>
                        <input
                            type="text"
                            className="c-input"
                            placeholder="e.g. Home & Living"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            autoFocus
                            required
                        />
                        {errors.name && <p className="c-error">{errors.name}</p>}

                        <label className="c-label">Description (optional)</label>
                        <textarea
                            className="c-textarea"
                            placeholder="A short description of what belongs in this category…"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                        />
                        {errors.description && <p className="c-error">{errors.description}</p>}

                        <div className="c-modal-footer">
                            <button type="button" className="c-btn-ghost" onClick={onClose}>Cancel</button>
                            <button type="submit" className="c-btn-submit" disabled={processing}>
                                <Icon.Save /> {processing ? 'Saving…' : isEdit ? 'Save changes' : 'Create category'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

function DeleteCategoryModal({ category, onClose }) {
    const [processing, setProcessing] = useState(false);
    const hasProducts = (category.products_count ?? 0) > 0;

    const confirmDelete = () => {
        setProcessing(true);
        router.delete(routes.categoryDestroy(category.id), {
            preserveScroll: true,
            onFinish: () => {
                setProcessing(false);
                onClose();
            },
        });
    };

    return (
        <div className="c-modal-backdrop" onClick={onClose}>
            <div className="c-modal" onClick={(e) => e.stopPropagation()}>
                <div className="c-modal-header">
                    <div>
                        <h5 className="c-modal-title">Delete Category</h5>
                        <p className="c-modal-subtitle">This action can't be undone</p>
                    </div>
                    <button className="c-modal-close" onClick={onClose}>
                        <Icon.Close />
                    </button>
                </div>
                <div className="c-modal-body">
                    <div className="c-delete-icon"><Icon.Alert /></div>
                    <p className="c-delete-text">
                        Are you sure you want to delete <strong>{category.name}</strong>?
                    </p>
                    {hasProducts && (
                        <p className="c-delete-warn">
                            This category has {category.products_count} product{category.products_count === 1 ? '' : 's'} assigned to it.
                            It can't be deleted until those products are moved or removed.
                        </p>
                    )}
                    <div className="c-modal-footer">
                        <button type="button" className="c-btn-ghost" onClick={onClose}>Cancel</button>
                        <button
                            type="button"
                            className="c-btn-delete"
                            onClick={confirmDelete}
                            disabled={processing || hasProducts}
                        >
                            <Icon.Trash /> {processing ? 'Deleting…' : 'Delete category'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductCategoryIndex.layout = (page) => <AppLayout children={page} title="Product Categories" />;
