import { useState, useMemo, useRef } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AppLayout';

/**
 * Partners — Admin
 *
 * Bootstrap's data-bs-toggle modals relied on the global Bootstrap JS
 * bundle wiring up on page load, which doesn't happen the same way
 * inside an SPA-like Inertia page. Replaced with lightweight React-driven
 * modals (open/close via state) so behavior is fully self-contained.
 */
export default function Index({ partners, flash }) {
    const routes = {
        store:   () => route('admin.partners.store'),
        update:  (id) => route('admin.partners.update', id),
        destroy: (id) => route('admin.partners.destroy', id),
    };

    const [search, setSearch] = useState('');
    const [addOpen, setAddOpen] = useState(false);
    const [viewingPartner, setViewingPartner] = useState(null);
    const [editingPartner, setEditingPartner] = useState(null);
    const [deletingPartner, setDeletingPartner] = useState(null);

    const filtered = useMemo(() => {
        if (!search.trim()) return partners;
        const q = search.toLowerCase();
        return partners.filter((p) =>
            [p.name, p.description, p.link].filter(Boolean).some((v) => v.toLowerCase().includes(q))
        );
    }, [search, partners]);

    const destroyPartner = () => {
        if (!deletingPartner) return;
        router.delete(routes.destroy(deletingPartner.id), {
            preserveScroll: true,
            onSuccess: () => setDeletingPartner(null),
        });
    };

    return (
        <AdminLayout>
            <Head title="Partners" />
            <style>{css}</style>

            <div data-h-scope="partners" className="partners-page">
                {/* Header */}
                <div className="page-header">
                    <div className="page-header-left">
                        <div className="eyebrow">Management</div>
                        <h1>Partners</h1>
                        <div className="sub">Manage your partner and their visibility</div>
                    </div>
                    <button className="btn-add" onClick={() => setAddOpen(true)}>
                        <PlusIcon /> Add Partner
                    </button>
                </div>

                {/* Flash */}
                {flash?.success && (
                    <div className="flash-success">
                        <CheckIcon />
                        {flash.success}
                    </div>
                )}

                {/* Main card */}
                <div className="partners-card">
                    <div className="partners-card-header">
                        <span className="partners-count">
                            {partners.length} partner{partners.length !== 1 ? 's' : ''}
                        </span>
                        <div className="search-wrap">
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder="Search partners…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    {partners.length === 0 ? (
                        <EmptyState onAdd={() => setAddOpen(true)} />
                    ) : filtered.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon"><SearchIcon size={26} /></div>
                            <h3>No matches</h3>
                            <p>Try a different search term.</p>
                        </div>
                    ) : (
                        <table className="partners-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Partner</th>
                                    <th>Logo</th>
                                    <th>Website</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((partner, i) => (
                                    <tr key={partner.id}>
                                        <td><span className="partner-row-num">{String(i + 1).padStart(2, '0')}</span></td>
                                        <td><span className="partner-row-name">{partner.name}</span></td>
                                        <td>
                                            {partner.logo ? (
                                                <img src={partner.logo} alt={partner.name} className="logo-thumb" />
                                            ) : (
                                                <div className="logo-placeholder"><ImagePlaceholderIcon /></div>
                                            )}
                                        </td>
                                        <td className="link-cell">
                                            {partner.link ? (
                                                <a href={partner.link} target="_blank" rel="noreferrer">
                                                    {limit(partner.link, 28)} <ExternalIcon />
                                                </a>
                                            ) : (
                                                <span className="dash">—</span>
                                            )}
                                        </td>
                                        <td>
                                            <span className={partner.status ? 'badge-active' : 'badge-inactive'}>
                                                {partner.status ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="actions-cell">
                                                <button className="btn-action btn-view" onClick={() => setViewingPartner(partner)}>
                                                    <EyeIcon /> View
                                                </button>
                                                <button className="btn-action btn-edit" onClick={() => setEditingPartner(partner)}>
                                                    <PencilIcon /> Edit
                                                </button>
                                                <button className="btn-action btn-delete" onClick={() => setDeletingPartner(partner)}>
                                                    <TrashIcon /> Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Modals */}
            {addOpen && <PartnerFormModal mode="add" routes={routes} onClose={() => setAddOpen(false)} />}
            {editingPartner && (
                <PartnerFormModal
                    mode="edit"
                    partner={editingPartner}
                    routes={routes}
                    onClose={() => setEditingPartner(null)}
                />
            )}
            {viewingPartner && <PartnerViewModal partner={viewingPartner} onClose={() => setViewingPartner(null)} />}
            {deletingPartner && (
                <DeleteConfirmModal
                    name={deletingPartner.name}
                    onCancel={() => setDeletingPartner(null)}
                    onConfirm={destroyPartner}
                />
            )}
        </AdminLayout>
    );
}

/* ── Empty state ── */
function EmptyState({ onAdd }) {
    return (
        <div className="empty-state">
            <div className="empty-icon"><UsersIcon /></div>
            <h3>No partners yet</h3>
            <p>Add your first partner to get started.</p>
            <button className="btn-add" onClick={onAdd}>
                <PlusIcon /> Add Partner
            </button>
        </div>
    );
}

/* ── View modal ── */
function PartnerViewModal({ partner, onClose }) {
    return (
        <ModalShell onClose={onClose} title="Partner details">
            <div className="modal-body">
                {partner.logo && (
                    <div style={{ textAlign: 'center', marginBottom: 18 }}>
                        <img src={partner.logo} alt={partner.name} className="modal-logo-preview" />
                    </div>
                )}
                <DetailRow label="Name" value={partner.name} />
                {partner.description && <DetailRow label="Description" value={partner.description} />}
                <DetailRow
                    label="Website"
                    value={
                        partner.link ? (
                            <a href={partner.link} target="_blank" rel="noreferrer" className="detail-link">{partner.link}</a>
                        ) : (
                            <span className="dash">—</span>
                        )
                    }
                />
                <DetailRow
                    label="Status"
                    value={<span className={partner.status ? 'badge-active' : 'badge-inactive'}>{partner.status ? 'Active' : 'Inactive'}</span>}
                />
            </div>
            <div className="modal-footer">
                <button type="button" className="btn-modal-secondary" onClick={onClose}>Close</button>
            </div>
        </ModalShell>
    );
}

function DetailRow({ label, value }) {
    return (
        <div className="detail-row">
            <span className="detail-label">{label}</span>
            <span className="detail-value">{value}</span>
        </div>
    );
}

/* ── Add / Edit form modal ── */
function PartnerFormModal({ mode, partner, routes, onClose }) {
    const isEdit = mode === 'edit';
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors, transform } = useForm({
        name: partner?.name ?? '',
        description: partner?.description ?? '',
        logo: null,
        link: partner?.link ?? '',
        status: isEdit ? !!partner?.status : true,
    });

    const handleLogoChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setData('logo', file);
        const reader = new FileReader();
        reader.onload = (ev) => setPreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const submit = (e) => {
        e.preventDefault();
        const url = isEdit ? routes.update(partner.id) : routes.store();
        if (isEdit) transform((d) => ({ ...d, _method: 'put' }));
        post(url, { forceFormData: true, onSuccess: onClose });
    };

    return (
        <ModalShell onClose={onClose} title={isEdit ? 'Edit partner' : 'Add partner'}>
            <form onSubmit={submit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label className="form-label">Name <span className="req-mark">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Partner organisation name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        {errors.name && <span className="err-msg">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            placeholder="Brief description (optional)"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Logo</label>
                        {isEdit && partner?.logo && !preview && (
                            <div className="logo-preview-wrap">
                                <img src={partner.logo} alt={partner.name} />
                            </div>
                        )}
                        {preview && (
                            <div className="logo-preview-wrap">
                                <img src={preview} alt="New logo preview" />
                            </div>
                        )}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="form-control"
                            style={{ marginTop: 8 }}
                            onChange={handleLogoChange}
                        />
                        {errors.logo && <span className="err-msg">{errors.logo}</span>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Website link</label>
                        <input
                            type="url"
                            className="form-control"
                            placeholder="https://partner-site.com"
                            value={data.link}
                            onChange={(e) => setData('link', e.target.value)}
                        />
                    </div>

                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`status_${mode}_${partner?.id ?? 'new'}`}
                            checked={data.status}
                            onChange={(e) => setData('status', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor={`status_${mode}_${partner?.id ?? 'new'}`}>
                            Mark as active
                        </label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn-modal-secondary" onClick={onClose}>Cancel</button>
                    <button type="submit" className="btn-modal-primary" disabled={processing}>
                        {processing ? 'Saving…' : isEdit ? 'Save changes' : 'Add partner'}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* ── Delete confirm modal ── */
function DeleteConfirmModal({ name, onCancel, onConfirm }) {
    return (
        <ModalShell onClose={onCancel} hideHeaderTitle>
            <div className="modal-body delete-confirm-body">
                <div className="delete-icon"><TrashIcon size={22} /></div>
                <h5>Delete partner?</h5>
                <p>You're about to remove <strong>{name}</strong>.<br />This action cannot be undone.</p>
            </div>
            <div className="modal-footer" style={{ justifyContent: 'center' }}>
                <button type="button" className="btn-modal-secondary" onClick={onCancel}>Cancel</button>
                <button type="button" className="btn-modal-danger" onClick={onConfirm}>Yes, delete</button>
            </div>
        </ModalShell>
    );
}

/* ── Shared modal shell ── */
function ModalShell({ title, hideHeaderTitle, onClose, children }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header" style={hideHeaderTitle ? { borderBottom: 'none' } : undefined}>
                        <h5 className="modal-title" style={hideHeaderTitle ? { visibility: 'hidden' } : undefined}>
                            {title || 'Modal'}
                        </h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close">
                            <CloseIcon />
                        </button>
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
function PlusIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>; }
function CheckIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>; }
function SearchIcon({ size = 14 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>; }
function ImagePlaceholderIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>; }
function ExternalIcon() { return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>; }
function EyeIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>; }
function PencilIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>; }
function TrashIcon({ size = 13 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg>; }
function UsersIcon() { return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>; }
function CloseIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>; }

/* ── Styles ──
   Modernized from the original: consistent radius/shadow scale, refined
   status badges, a real overlay-based modal system (no Bootstrap JS
   dependency), softer hover states, and tightened spacing/typography. */
const css = `
[data-h-scope="partners"] {
    --accent:        #2563EB;
    --accent-dark:   #1D4ED8;
    --accent-light:  #EFF6FF;
    --canvas:        #F7F8FB;
    --surface:       #FFFFFF;
    --border:        #E7EAF0;
    --border-soft:   #F1F3F6;
    --text-hi:       #101423;
    --text-mid:      #3D4457;
    --text-lo:       #8B93A6;
    --success:       #16A34A;
    --success-bg:    #EFFCF3;
    --danger:        #DC2626;
    --danger-bg:     #FEF2F2;
    --warning:       #B45309;
    --warning-bg:    #FFFBEB;
    --radius-lg:     16px;
    --radius-md:     10px;
    --radius-sm:     8px;
    --shadow-sm:     0 1px 3px rgba(16,20,35,.05), 0 1px 8px rgba(16,20,35,.04);
    --shadow-lg:     0 20px 60px rgba(16,20,35,.18);
    font-family: inherit;
}

.partners-page { background: var(--canvas); padding: 28px 32px; min-height: 100vh; }

.page-header { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; }
.page-header-left .eyebrow { font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin-bottom: 4px; }
.page-header-left h1 { font-size: 23px; font-weight: 800; color: var(--text-hi); margin: 0; letter-spacing: -.4px; line-height: 1.2; }
.page-header-left .sub { font-size: 13px; color: var(--text-lo); margin-top: 4px; }

.flash-success { display: flex; align-items: center; gap: 10px; background: var(--success-bg); border: 1px solid #BBF7D0; color: #166534; border-radius: var(--radius-md); padding: 12px 16px; font-size: 13px; margin-bottom: 20px; }

.btn-add { background: var(--accent); color: #fff; border: none; border-radius: var(--radius-md); padding: 10px 20px; font-size: 13px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 7px; transition: background .15s, box-shadow .2s, transform .12s; white-space: nowrap; }
.btn-add:hover { background: var(--accent-dark); transform: translateY(-1px); box-shadow: 0 8px 20px rgba(37,99,235,.25); }

.partners-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); }
.partners-card-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 22px; border-bottom: 1px solid var(--border-soft); gap: 12px; flex-wrap: wrap; }
.partners-count { font-size: 12px; font-weight: 700; color: var(--text-lo); background: #F1F3F6; padding: 4px 11px; border-radius: 20px; }

.search-wrap { display: flex; align-items: center; gap: 8px; background: var(--canvas); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 7px 12px; flex: 1; max-width: 260px; transition: border-color .15s, box-shadow .15s; }
.search-wrap:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(37,99,235,.1); background: #fff; }
.search-wrap svg { color: var(--text-lo); flex-shrink: 0; }
.search-wrap input { border: none; background: transparent; outline: none; font-size: 13px; color: var(--text-hi); width: 100%; }
.search-wrap input::placeholder { color: #B0B8C4; }

.partners-table { width: 100%; border-collapse: collapse; }
.partners-table thead tr { background: var(--canvas); border-bottom: 1px solid var(--border-soft); }
.partners-table thead th { padding: 11px 20px; font-size: 11px; font-weight: 700; color: var(--text-lo); text-transform: uppercase; letter-spacing: .06em; text-align: left; white-space: nowrap; }
.partners-table tbody tr { border-bottom: 1px solid var(--border-soft); transition: background .12s; }
.partners-table tbody tr:last-child { border-bottom: none; }
.partners-table tbody tr:hover { background: #FAFBFD; }
.partners-table td { padding: 13px 20px; font-size: 13px; color: var(--text-mid); vertical-align: middle; }

.partner-row-name { font-weight: 700; color: var(--text-hi); font-size: 13px; }
.partner-row-num { font-size: 12px; color: var(--text-lo); font-weight: 600; }

.logo-thumb { width: 48px; height: 36px; object-fit: contain; border-radius: var(--radius-sm); border: 1px solid var(--border-soft); padding: 3px; background: #fff; }
.logo-placeholder { width: 48px; height: 36px; background: #F1F3F6; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; }
.logo-placeholder svg { color: #C8CDD5; }

.link-cell a { color: var(--accent); font-size: 12px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; }
.link-cell a:hover { text-decoration: underline; }
.dash { color: #C8CDD5; font-size: 12px; }

.badge-active, .badge-inactive { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; }
.badge-active { background: var(--success-bg); color: #166534; border: 1px solid #BBF7D0; }
.badge-active::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--success); }
.badge-inactive { background: #F7F8FB; color: var(--text-lo); border: 1px solid var(--border); }
.badge-inactive::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #C8CDD5; }

.actions-cell { display: flex; gap: 6px; align-items: center; }
.btn-action { height: 30px; padding: 0 12px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 700; border: 1px solid transparent; cursor: pointer; transition: background .12s, border-color .12s, transform .1s; display: inline-flex; align-items: center; gap: 5px; }
.btn-action:hover { transform: translateY(-1px); }
.btn-view { background: var(--accent-light); color: var(--accent); border-color: #BFDBFE; }
.btn-view:hover { background: #DBEAFE; }
.btn-edit { background: var(--warning-bg); color: var(--warning); border-color: #FDE68A; }
.btn-edit:hover { background: #FEF3C7; }
.btn-delete { background: var(--danger-bg); color: var(--danger); border-color: #FECACA; }
.btn-delete:hover { background: #FEE2E2; }

.empty-state { padding: 60px 20px; text-align: center; }
.empty-icon { width: 56px; height: 56px; background: #F1F3F6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #B0B8C4; }
.empty-state h3 { font-size: 15px; font-weight: 700; color: var(--text-mid); margin: 0 0 6px; }
.empty-state p { font-size: 13px; color: var(--text-lo); margin: 0 0 20px; }

/* ── Custom modal system (replaces Bootstrap JS modals) ── */
.modal-overlay { position: fixed; inset: 0; background: rgba(16,20,35,.5); backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center; padding: 20px; z-index: 1000; animation: fadeIn .15s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.modal-dialog { width: 100%; max-width: 460px; animation: slideUp .18s ease-out; }
@keyframes slideUp { from { opacity: 0; transform: translateY(12px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
.modal-content { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); }
.modal-header { background: #fff; border-bottom: 1px solid var(--border-soft); padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; }
.modal-title { font-size: 15px; font-weight: 700; color: var(--text-hi); margin: 0; }
.btn-close { background: #F1F3F6; border: none; border-radius: var(--radius-sm); width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--text-mid); transition: background .12s; }
.btn-close:hover { background: #E7EAF0; }
.modal-body { background: #fff; padding: 20px 24px; }
.modal-footer { background: var(--canvas); border-top: 1px solid var(--border-soft); padding: 14px 24px; display: flex; gap: 8px; justify-content: flex-end; }
.modal-logo-preview { max-height: 72px; object-fit: contain; border-radius: 10px; border: 1px solid var(--border-soft); padding: 6px; background: #fff; }

.detail-row { display: flex; gap: 12px; padding: 11px 0; border-bottom: 1px solid var(--border-soft); font-size: 13px; }
.detail-row:last-child { border-bottom: none; }
.detail-label { font-weight: 700; color: var(--text-lo); min-width: 100px; }
.detail-value { color: var(--text-mid); }
.detail-link { color: var(--accent); text-decoration: none; font-size: 13px; }
.detail-link:hover { text-decoration: underline; }

.form-group { margin-bottom: 16px; }
.form-label { font-size: 12px; font-weight: 700; color: var(--text-mid); margin-bottom: 6px; display: block; }
.req-mark { color: var(--danger); }
.form-control { background: var(--canvas); border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--text-hi); font-size: 13px; padding: 9px 13px; width: 100%; font-family: inherit; transition: border-color .15s, box-shadow .15s, background .15s; }
.form-control:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(37,99,235,.1); background: #fff; }
textarea.form-control { min-height: 80px; resize: vertical; }
.err-msg { display: block; font-size: 11.5px; color: var(--danger); font-weight: 600; margin-top: 5px; }

.form-check { display: flex; align-items: center; gap: 9px; margin-bottom: 4px; }
.form-check-input { width: 16px; height: 16px; border: 1.5px solid #D1D5DB; border-radius: 5px; accent-color: var(--accent); cursor: pointer; }
.form-check-label { font-size: 13px; color: var(--text-mid); cursor: pointer; }

.logo-preview-wrap { margin-top: 8px; }
.logo-preview-wrap img { height: 52px; object-fit: contain; border-radius: var(--radius-sm); border: 1px solid var(--border); padding: 4px; background: #fff; }

.btn-modal-primary { background: var(--accent); color: #fff; border: none; border-radius: var(--radius-sm); padding: 9px 20px; font-size: 13px; font-weight: 700; cursor: pointer; transition: background .15s; }
.btn-modal-primary:hover { background: var(--accent-dark); }
.btn-modal-primary:disabled { opacity: .7; cursor: default; }
.btn-modal-secondary { background: #fff; color: var(--text-mid); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 9px 20px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background .15s; }
.btn-modal-secondary:hover { background: var(--canvas); }
.btn-modal-danger { background: var(--danger-bg); color: var(--danger); border: 1px solid #FECACA; border-radius: var(--radius-sm); padding: 9px 20px; font-size: 13px; font-weight: 700; cursor: pointer; transition: background .15s, color .15s; }
.btn-modal-danger:hover { background: var(--danger); color: #fff; }

.delete-confirm-body { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 28px 24px; }
.delete-icon { width: 52px; height: 52px; background: var(--danger-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: var(--danger); }
.delete-confirm-body h5 { font-size: 16px; font-weight: 800; color: var(--text-hi); margin: 0 0 6px; }
.delete-confirm-body p { font-size: 13px; color: var(--text-lo); margin: 0; }
`;
