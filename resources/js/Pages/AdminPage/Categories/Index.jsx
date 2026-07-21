import { useState, useEffect, useRef, useMemo } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AppLayout';

const ICONS = {
    'ti ti-star': 'Star',
    'ti ti-movie': 'Movie',
    'ti ti-music': 'Music',
    'ti ti-camera': 'Camera',
    'ti ti-briefcase': 'Briefcase',
    'ti ti-book': 'Book',
    'ti ti-heart': 'Heart',
    'ti ti-crown': 'Crown',
    'ti ti-code': 'Code',
    'ti ti-palette': 'Graphic Design',
    'fa-solid fa-bullhorn': 'Digital Marketing',
};

function slugify(value) {
    return value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Categories — Admin
 *
 * Bootstrap dropdowns/toasts/modals relied on global bootstrap.js
 * auto-wiring elements on DOMContentLoaded, which doesn't fire again on
 * Inertia navigations. Replaced with React-driven equivalents: a
 * per-row dropdown with outside-click handling, self-dismissing toasts,
 * and the same overlay modal pattern used elsewhere in the admin.
 */
export default function Index({ categories, flash, errors: pageErrors }) {
    const routes = {
        store:   () => route('admin.categories.store'),
        update:  (id) => route('admin.categories.update', id),
        destroy: (id) => route('admin.categories.destroy', id),
    };

    const [addOpen, setAddOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [deletingCategory, setDeletingCategory] = useState(null);

    const destroyCategory = () => {
        if (!deletingCategory) return;
        router.delete(routes.destroy(deletingCategory.id), {
            preserveScroll: true,
            onSuccess: () => setDeletingCategory(null),
        });
    };

    return (
        <AdminLayout>
            <Head title="Categories" />
            <style>{css}</style>

            <div data-h-scope="categories" className="container-fluid">
                <ToastStack flash={flash} errors={pageErrors} />

                {/* Page header */}
                <div className="page-header">
                    <h2>Categories <span>Management</span></h2>
                    <button type="button" className="btn-accent" onClick={() => setAddOpen(true)}>
                        <PlusIcon /> Add Category
                    </button>
                </div>

                {/* Table card */}
                <div className="data-card">
                    <div className="table-responsive">
                        <table className="categories-table" role="table" aria-label="Categories list">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Featured</th>
                                    <th scope="col">Slug</th>
                                    <th scope="col">Icon</th>
                                    <th scope="col" className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.length === 0 ? (
                                    <tr>
                                        <td colSpan={6}>
                                            <div className="empty-state">
                                                <FolderOffIcon />
                                                <h5>No categories yet</h5>
                                                <p>Get started by creating your first category.</p>
                                                <button className="btn-accent" onClick={() => setAddOpen(true)}>
                                                    <PlusIcon /> Add First Category
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    categories.map((cat) => (
                                        <tr key={cat.id}>
                                            <td data-label="Name"><span className="cat-name">{cat.name}</span></td>
                                            <td data-label="Description">
                                                <span className="cat-desc" title={cat.description}>
                                                    {limit(cat.description, 50)}
                                                </span>
                                            </td>
                                            <td data-label="Featured">
                                                {cat.featured ? (
                                                    <span className="badge-featured yes"><CheckSmallIcon /> Yes</span>
                                                ) : (
                                                    <span className="badge-featured no">No</span>
                                                )}
                                            </td>
                                            <td data-label="Slug"><code className="cat-slug">{cat.slug}</code></td>
                                            <td data-label="Icon">
                                                <span className="icon-wrap" title={cat.image ?? 'Default icon'}>
                                                    <i className={cat.image ?? 'ti ti-star'} />
                                                </span>
                                            </td>
                                            <td data-label="Actions" className="text-end">
                                                <ActionsDropdown
                                                    onEdit={() => setEditingCategory(cat)}
                                                    onDelete={() => setDeletingCategory(cat)}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {addOpen && (
                <CategoryFormModal mode="add" routes={routes} onClose={() => setAddOpen(false)} />
            )}
            {editingCategory && (
                <CategoryFormModal
                    mode="edit"
                    category={editingCategory}
                    routes={routes}
                    onClose={() => setEditingCategory(null)}
                />
            )}
            {deletingCategory && (
                <DeleteConfirmModal
                    name={deletingCategory.name}
                    onCancel={() => setDeletingCategory(null)}
                    onConfirm={destroyCategory}
                />
            )}
        </AdminLayout>
    );
}

/* ── Toasts ── */
function ToastStack({ flash, errors }) {
    const [visible, setVisible] = useState({ success: !!flash?.success, error: !!flash?.error, validation: !!(errors && Object.keys(errors).length) });

    useEffect(() => {
        setVisible({ success: !!flash?.success, error: !!flash?.error, validation: !!(errors && Object.keys(errors).length) });
    }, [flash, errors]);

    useEffect(() => {
        const timers = [];
        if (visible.success) timers.push(setTimeout(() => setVisible((v) => ({ ...v, success: false })), 5000));
        if (visible.error) timers.push(setTimeout(() => setVisible((v) => ({ ...v, error: false })), 7000));
        if (visible.validation) timers.push(setTimeout(() => setVisible((v) => ({ ...v, validation: false })), 8000));
        return () => timers.forEach(clearTimeout);
    }, [visible.success, visible.error, visible.validation]);

    if (!visible.success && !visible.error && !visible.validation) return null;

    return (
        <div className="toast-stack">
            {visible.success && (
                <Toast tone="success" title="Success" onClose={() => setVisible((v) => ({ ...v, success: false }))}>
                    {flash.success}
                </Toast>
            )}
            {visible.error && (
                <Toast tone="danger" title="Error" onClose={() => setVisible((v) => ({ ...v, error: false }))}>
                    {flash.error}
                </Toast>
            )}
            {visible.validation && errors && (
                <Toast tone="warning" title="Validation Error" onClose={() => setVisible((v) => ({ ...v, validation: false }))}>
                    <ul className="toast-error-list">
                        {Object.values(errors).map((msg, i) => <li key={i}>{msg}</li>)}
                    </ul>
                </Toast>
            )}
        </div>
    );
}

function Toast({ tone, title, onClose, children }) {
    return (
        <div className="toast-item">
            <div className="toast-header">
                {tone === 'success' && <CheckCircleIcon />}
                {tone === 'danger' && <AlertCircleIcon />}
                {tone === 'warning' && <AlertTriangleIcon />}
                <strong>{title}</strong>
                <button type="button" className="btn-close" onClick={onClose} aria-label="Close"><CloseIcon /></button>
            </div>
            <div className="toast-body">{children}</div>
        </div>
    );
}

/* ── Actions dropdown ── */
function ActionsDropdown({ onEdit, onDelete }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!open) return;
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [open]);

    return (
        <div className="dropdown-wrap" ref={ref}>
            <button type="button" className="btn-actions" onClick={() => setOpen((o) => !o)}>
                <DotsIcon /> Action
            </button>
            {open && (
                <ul className="dropdown-menu">
                    <li>
                        <button type="button" className="dropdown-item" onClick={() => { setOpen(false); onEdit(); }}>
                            <PencilIcon /> Edit
                        </button>
                    </li>
                    <li className="dropdown-divider" />
                    <li>
                        <button type="button" className="dropdown-item text-danger" onClick={() => { setOpen(false); onDelete(); }}>
                            <TrashIcon /> Delete
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
}

/* ── Add / Edit modal ── */
function CategoryFormModal({ mode, category, routes, onClose }) {
    const isEdit = mode === 'edit';

    const { data, setData, post, processing, errors, transform } = useForm({
        name: category?.name ?? '',
        description: category?.description ?? '',
        image: category?.image ?? '',
        featured: isEdit ? !!category?.featured : false,
    });

    const slugHint = useMemo(() => {
        if (data.name.trim().length < 2) return '';
        return `Suggested slug: ${slugify(data.name)}`;
    }, [data.name]);

    const submit = (e) => {
        e.preventDefault();
        const url = isEdit ? routes.update(category.id) : routes.store();
        if (isEdit) transform((d) => ({ ...d, _method: 'put' }));
        post(url, { onSuccess: onClose });
    };

    return (
        <ModalShell onClose={onClose} title={isEdit ? 'Edit Category' : 'Add Category'} icon={isEdit ? <PencilIcon /> : <FolderPlusIcon />}>
            <form onSubmit={submit}>
                <div className="modal-body">
                    <div className="mb-3">
                        <label className="form-label" htmlFor={`name-${mode}`}>Name</label>
                        <input
                            id={`name-${mode}`}
                            className="form-control"
                            placeholder="e.g. Web Development"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            autoComplete="off"
                            required
                        />
                        <small className="slug-hint">{slugHint}</small>
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor={`desc-${mode}`}>Description</label>
                        <input
                            id={`desc-${mode}`}
                            className="form-control"
                            placeholder="Short description…"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            autoComplete="off"
                            required
                        />
                        {errors.description && <small className="text-danger">{errors.description}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor={`icon-${mode}`}>Icon</label>
                        <select
                            id={`icon-${mode}`}
                            className="form-select"
                            value={data.image}
                            onChange={(e) => setData('image', e.target.value)}
                            required
                        >
                            <option value="">— Select Icon —</option>
                            {Object.entries(ICONS).map(([cls, label]) => (
                                <option key={cls} value={cls}>{label}</option>
                            ))}
                        </select>
                        <div className="icon-preview">
                            <span className="icon-wrap"><i className={data.image || 'ti ti-star'} /></span>
                            <small>Preview</small>
                        </div>
                        {errors.image && <small className="text-danger">{errors.image}</small>}
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id={`featured-${mode}`}
                            checked={data.featured}
                            onChange={(e) => setData('featured', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor={`featured-${mode}`}>Mark as Featured</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn-modal-cancel" onClick={onClose}>Cancel</button>
                    <button type="submit" className="btn-modal-save" disabled={processing}>
                        {isEdit ? <RefreshIcon /> : <CheckIcon />} {processing ? 'Saving…' : isEdit ? 'Update Category' : 'Save Category'}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* ── Delete modal ── */
function DeleteConfirmModal({ name, onCancel, onConfirm }) {
    return (
        <ModalShell onClose={onCancel} title="Delete Category" icon={<AlertTriangleIcon />} noBorder>
            <div className="modal-body" style={{ textAlign: 'center', paddingTop: 8 }}>
                <div className="delete-icon-wrap"><TrashIcon size={20} /></div>
                <h5 className="delete-title">Delete "{name}"?</h5>
                <p className="delete-sub">This action cannot be undone. All associated data may be affected.</p>
            </div>
            <div className="modal-footer" style={{ justifyContent: 'center', borderTop: 'none', paddingTop: 0 }}>
                <button type="button" className="btn-modal-cancel" onClick={onCancel}>Cancel</button>
                <button type="button" className="btn-modal-delete" onClick={onConfirm}>
                    <TrashIcon /> Yes, Delete
                </button>
            </div>
        </ModalShell>
    );
}

/* ── Modal shell ── */
function ModalShell({ title, icon, onClose, noBorder, children }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header" style={noBorder ? { borderBottom: 'none', paddingBottom: 0 } : undefined}>
                        <h5 className="modal-title">{icon}{title}</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"><CloseIcon /></button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

/* ── Helpers ── */
function limit(str, n) {
    if (!str) return '';
    return str.length > n ? str.slice(0, n).trim() + '…' : str;
}

/* ── Inline icons ── */
function PlusIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>; }
function DotsIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="12" cy="19" r="1.7" /></svg>; }
function PencilIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>; }
function TrashIcon({ size = 14 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg>; }
function FolderOffIcon() { return <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: .45, marginBottom: 12 }}><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2h-8l-2-3H5a2 2 0 00-2 2z" /><line x1="2" y1="2" x2="22" y2="22" /></svg>; }
function FolderPlusIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2h-8l-2-3H5a2 2 0 00-2 2z" /><line x1="12" y1="11" x2="12" y2="17" /><line x1="9" y1="14" x2="15" y2="14" /></svg>; }
function CheckIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>; }
function CheckSmallIcon() { return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>; }
function RefreshIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" /></svg>; }
function AlertTriangleIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>; }
function CheckCircleIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>; }
function AlertCircleIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>; }
function CloseIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>; }

/* ── Styles ──
   Kept the Terra-green accent (#00a667) and card treatment from the
   original but tightened the type scale, unified radii/shadow tokens,
   and rebuilt dropdown/toast/modal chrome as real components instead
   of relying on Bootstrap JS state classes. */
const css = `
[data-h-scope="categories"] {
    --bg-deep:       #F0F4F8;
    --bg-card:       #FFFFFF;
    --bg-surface:    #F8FAFC;
    --bg-hover:      #F1F5F9;
    --accent:        #00A667;
    --accent-dark:   #008F57;
    --accent-dim:    rgba(0,166,103,.10);
    --accent-glow:   rgba(0,166,103,.25);
    --text-primary:  #0F1C2E;
    --text-secondary:#4A6380;
    --text-muted:    #8EA5BE;
    --border:        rgba(15,28,46,.09);
    --border-accent: rgba(0,166,103,.28);
    --danger:        #DC3545;
    --danger-dim:    rgba(220,53,69,.09);
    --warning:       #F59E0B;
    --warning-dim:   rgba(245,158,11,.10);
    --radius-sm:     6px;
    --radius-md:     10px;
    --radius-lg:     16px;
    --shadow-card:   0 1px 4px rgba(15,28,46,.07), 0 4px 16px rgba(15,28,46,.05);
    --shadow-glow:   0 0 18px rgba(0,166,103,.18);
    --focus-ring:    0 0 0 3px rgba(0,166,103,.22);
    background: var(--bg-deep);
    color: var(--text-primary);
    font-family: inherit;
    padding: 24px 28px 40px;
}

[data-h-scope="categories"] *:focus-visible { outline: none; box-shadow: var(--focus-ring); }

.page-header { display: flex; align-items: center; justify-content: space-between; padding: 4px 0 22px; border-bottom: 1px solid var(--border); margin-bottom: 24px; flex-wrap: wrap; gap: 16px; }
.page-header h2 { font-size: 1.5rem; font-weight: 800; color: var(--text-primary); letter-spacing: -.02em; margin: 0; }
.page-header h2 span { color: var(--accent); }

.btn-accent { background: var(--accent); color: #fff; border: none; padding: 9px 22px; border-radius: var(--radius-sm); font-weight: 700; font-size: .85rem; letter-spacing: .02em; cursor: pointer; display: inline-flex; align-items: center; gap: 7px; transition: background .15s, box-shadow .15s, transform .15s; }
.btn-accent:hover { background: var(--accent-dark); box-shadow: var(--shadow-glow); transform: translateY(-1px); }
.btn-accent:disabled { opacity: .7; cursor: default; }

.data-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-card); overflow: hidden; }
.table-responsive { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.categories-table { width: 100%; border-collapse: collapse; font-size: .875rem; min-width: 720px; }
.categories-table thead tr { background: var(--bg-surface); border-bottom: 1.5px solid var(--border-accent); }
.categories-table thead th { padding: 14px 20px; text-transform: uppercase; font-size: .7rem; font-weight: 700; letter-spacing: .1em; color: var(--accent); white-space: nowrap; text-align: left; }
.categories-table tbody tr { border-bottom: 1px solid var(--border); transition: background .15s; }
.categories-table tbody tr:last-child { border-bottom: none; }
.categories-table tbody tr:hover { background: #F6FDF9; }
.categories-table tbody td { padding: 15px 20px; color: var(--text-primary); vertical-align: middle; text-align: left; }
.text-end { text-align: right; }

@media (max-width: 991px) {
    .categories-table thead { display: none; }
    .categories-table, .categories-table tbody, .categories-table tr, .categories-table td { display: block; width: 100%; }
    .categories-table tbody tr { border: 1px solid var(--border); border-radius: var(--radius-md); margin: 12px; background: var(--bg-card); padding: 8px; box-shadow: var(--shadow-card); }
    .categories-table tbody td { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border-bottom: 1px solid var(--border); text-align: right; }
    .categories-table tbody td:last-child { border-bottom: none; }
    .categories-table tbody td::before { content: attr(data-label); font-weight: 700; color: var(--accent); text-transform: uppercase; font-size: .7rem; letter-spacing: .05em; margin-right: auto; padding-right: 12px; }
    .cat-desc { max-width: 100%; white-space: normal; }
}

.cat-name { font-weight: 700; color: var(--text-primary); display: block; }
.cat-desc { color: var(--text-secondary); max-width: 260px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inline-block; }
.cat-slug { font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: .78rem; color: var(--text-secondary); background: #EEF2F7; padding: 3px 8px; border-radius: 4px; border: 1px solid var(--border); display: inline-block; }

.badge-featured { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 20px; font-size: .72rem; font-weight: 700; letter-spacing: .04em; }
.badge-featured.yes { background: var(--accent-dim); color: var(--accent); border: 1px solid var(--border-accent); }
.badge-featured.no { background: #F1F5F9; color: var(--text-muted); border: 1px solid var(--border); }

.icon-wrap { width: 34px; height: 34px; border-radius: var(--radius-sm); background: var(--accent-dim); border: 1px solid var(--border-accent); display: inline-flex; align-items: center; justify-content: center; color: var(--accent); font-size: 1rem; transition: box-shadow .15s, transform .15s; }
tr:hover .icon-wrap { box-shadow: var(--shadow-glow); transform: scale(1.05); }

/* Dropdown */
.dropdown-wrap { position: relative; display: inline-block; }
.btn-actions { background: var(--bg-surface); border: 1px solid var(--border); color: var(--text-secondary); padding: 6px 14px; border-radius: var(--radius-sm); font-size: .8rem; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: background .15s, color .15s, border-color .15s; }
.btn-actions:hover { background: #EDF7F2; border-color: var(--accent); color: var(--accent); }
.dropdown-menu { position: absolute; right: 0; top: calc(100% + 6px); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); box-shadow: 0 8px 32px rgba(15,28,46,.12); min-width: 160px; padding: 6px; list-style: none; margin: 0; z-index: 40; animation: dropdownSlide .15s ease-out; }
@keyframes dropdownSlide { from { opacity: 0; transform: scale(.95) translateY(-8px); } to { opacity: 1; transform: scale(1) translateY(0); } }
.dropdown-item { width: 100%; background: none; border: none; text-align: left; color: var(--text-secondary); border-radius: var(--radius-sm); padding: 8px 12px; font-size: .83rem; font-weight: 500; transition: background .15s, color .15s; display: flex; align-items: center; gap: 8px; cursor: pointer; }
.dropdown-item:hover { background: var(--bg-hover); color: var(--text-primary); }
.dropdown-item.text-danger { color: var(--danger); }
.dropdown-item.text-danger:hover { background: var(--danger-dim); color: var(--danger); }
.dropdown-divider { border: none; border-top: 1px solid var(--border); margin: 4px 0; list-style: none; }

/* Empty state */
.empty-state { text-align: center; padding: 56px 24px; color: var(--text-muted); }
.empty-state h5 { color: var(--text-primary); margin-bottom: 8px; font-weight: 700; }
.empty-state p { margin: 0 0 20px; font-size: .9rem; }

/* Toasts */
.toast-stack { position: fixed; top: 16px; right: 16px; z-index: 1100; display: flex; flex-direction: column; gap: 10px; width: 320px; max-width: calc(100vw - 32px); }
.toast-item { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); box-shadow: 0 4px 20px rgba(15,28,46,.12); overflow: hidden; animation: toastIn .2s ease-out; }
@keyframes toastIn { from { opacity: 0; transform: translateX(12px); } to { opacity: 1; transform: translateX(0); } }
.toast-header { background: var(--bg-surface); border-bottom: 1px solid var(--border); color: var(--text-secondary); display: flex; align-items: center; gap: 8px; padding: 10px 12px; font-size: .8rem; }
.toast-header strong { color: var(--text-primary); margin-right: auto; }
.toast-body { color: var(--text-primary); padding: 10px 12px; font-size: .82rem; }
.toast-error-list { margin: 0; padding-left: 16px; }

/* Modals */
.modal-overlay { position: fixed; inset: 0; background: rgba(15,28,46,.35); backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center; padding: 20px; z-index: 1000; animation: fadeIn .15s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.modal-dialog { width: 100%; max-width: 480px; animation: slideUp .2s cubic-bezier(.4,0,.2,1); }
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.modal-content { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: 0 20px 60px rgba(15,28,46,.14); color: var(--text-primary); overflow: hidden; }
.modal-header { border-bottom: 1px solid var(--border); padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface); }
.modal-title { font-weight: 700; font-size: 1rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px; margin: 0; }
.modal-body { padding: 24px; }
.modal-footer { border-top: 1px solid var(--border); padding: 16px 24px; display: flex; justify-content: flex-end; gap: 10px; background: var(--bg-surface); }
.btn-close { background: none; border: none; opacity: .45; cursor: pointer; color: var(--text-secondary); display: flex; align-items: center; justify-content: center; padding: 4px; border-radius: 6px; transition: opacity .15s, background .15s; }
.btn-close:hover { opacity: .8; background: var(--bg-hover); }

.form-label { font-size: .8rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 7px; display: block; }
.form-control, .form-select { background: var(--bg-card); border: 1px solid #DAE2EC; color: var(--text-primary); border-radius: var(--radius-sm); padding: 10px 14px; font-size: .875rem; transition: border-color .15s, box-shadow .15s; width: 100%; font-family: inherit; }
.form-control:focus, .form-select:focus { border-color: var(--accent); box-shadow: var(--focus-ring); outline: none; background: #fff; }
.form-control::placeholder { color: var(--text-muted); }
.slug-hint { color: var(--text-muted); display: block; margin-top: 4px; font-size: .75rem; min-height: 1.2em; }
.mb-3 { margin-bottom: 16px; }

.form-check { margin-top: 4px; display: flex; align-items: center; gap: 8px; }
.form-check-input { background-color: var(--bg-card); border: 1.5px solid #C8D8E8; width: 18px; height: 18px; cursor: pointer; accent-color: var(--accent); }
.form-check-label { color: var(--text-secondary); font-size: .875rem; cursor: pointer; margin: 0; }

.text-danger { color: var(--danger); font-size: .78rem; display: block; margin-top: 4px; }

.btn-modal-save, .btn-modal-delete { color: #fff; border: none; padding: 9px 22px; border-radius: var(--radius-sm); font-weight: 700; font-size: .85rem; cursor: pointer; transition: background .15s, box-shadow .15s; display: inline-flex; align-items: center; gap: 6px; }
.btn-modal-save { background: var(--accent); }
.btn-modal-save:hover { background: var(--accent-dark); box-shadow: var(--shadow-glow); }
.btn-modal-save:disabled { opacity: .7; cursor: default; }
.btn-modal-delete { background: var(--danger); }
.btn-modal-delete:hover { background: #B02A37; }
.btn-modal-cancel { background: transparent; color: var(--text-secondary); border: 1px solid #DAE2EC; padding: 9px 22px; border-radius: var(--radius-sm); font-weight: 600; font-size: .85rem; cursor: pointer; transition: background .15s, color .15s, border-color .15s; }
.btn-modal-cancel:hover { background: var(--bg-hover); color: var(--text-primary); border-color: #B0C4D8; }

.delete-icon-wrap { width: 52px; height: 52px; border-radius: 50%; background: var(--danger-dim); border: 1px solid rgba(220,53,69,.18); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: var(--danger); }
.delete-title { font-weight: 800; margin-bottom: 8px; color: var(--text-primary); }
.delete-sub { color: var(--text-secondary); font-size: .875rem; margin: 0; }

.icon-preview { background: #F6FDF9; border: 1px solid var(--border-accent); border-radius: var(--radius-sm); padding: 8px 12px; display: flex; align-items: center; gap: 10px; margin-top: 8px; }
.icon-preview .icon-wrap { width: 28px; height: 28px; font-size: .9rem; }
.icon-preview small { color: var(--text-muted); font-size: .75rem; }
`;
