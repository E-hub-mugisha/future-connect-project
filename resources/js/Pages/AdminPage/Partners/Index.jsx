import { useState, useMemo, useRef } from "react";
import { Head, useForm, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AppLayout";

export default function Index({ partners, flash }) {
    const routes = {
        store: () => route("admin.partners.store"),
        update: (id) => route("admin.partners.update", id),
        destroy: (id) => route("admin.partners.destroy", id),
    };

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all"); // all | active | inactive
    const [addOpen, setAddOpen] = useState(false);
    const [viewingPartner, setViewingPartner] = useState(null);
    const [editingPartner, setEditingPartner] = useState(null);
    const [deletingPartner, setDeletingPartner] = useState(null);

    const counts = useMemo(
        () => ({
            all: partners.length,
            active: partners.filter((p) => p.is_active ?? p.status).length,
            inactive: partners.filter((p) => !(p.is_active ?? p.status)).length,
        }),
        [partners],
    );

    const filtered = useMemo(() => {
        let list = partners;
        if (filter !== "all") {
            list = list.filter(
                (p) => (filter === "active") === !!(p.is_active ?? p.status),
            );
        }
        if (search.trim()) {
            const q = search.toLowerCase();
            list = list.filter((p) =>
                [p.name, p.description, p.link]
                    .filter(Boolean)
                    .some((v) => v.toLowerCase().includes(q)),
            );
        }
        return list;
    }, [search, filter, partners]);

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
                        <h1>Partners</h1>
                        <p className="sub">
                            The organizations backing your skill network —
                            manage their visibility here.
                        </p>
                    </div>
                    <button
                        className="btn-add"
                        onClick={() => setAddOpen(true)}
                    >
                        <PlusIcon /> Add partner
                    </button>
                </div>

                {flash?.success && (
                    <div className="flash-success">
                        <CheckIcon />
                        {flash.success}
                    </div>
                )}

                {/* Stat strip */}
                <div className="stat-strip">
                    <StatChip
                        label="Total partners"
                        value={counts.all}
                        active={filter === "all"}
                        onClick={() => setFilter("all")}
                        tone="neutral"
                    />
                    <StatChip
                        label="Active"
                        value={counts.active}
                        active={filter === "active"}
                        onClick={() => setFilter("active")}
                        tone="good"
                    />
                    <StatChip
                        label="Inactive"
                        value={counts.inactive}
                        active={filter === "inactive"}
                        onClick={() => setFilter("inactive")}
                        tone="muted"
                    />
                </div>

                {/* Toolbar */}
                <div className="toolbar">
                    <div className="search-wrap">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search by name, description or link…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {search && (
                            <button
                                className="search-clear"
                                onClick={() => setSearch("")}
                                aria-label="Clear search"
                            >
                                <CloseIcon />
                            </button>
                        )}
                    </div>
                    <span className="result-count">
                        {filtered.length} of {partners.length} shown
                    </span>
                </div>

                {/* Card grid */}
                {partners.length === 0 ? (
                    <EmptyState onAdd={() => setAddOpen(true)} />
                ) : filtered.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">
                            <SearchIcon size={24} />
                        </div>
                        <h3>No partners match this view</h3>
                        <p>Try a different search term or switch filters.</p>
                    </div>
                ) : (
                    <div className="partner-grid">
                        {filtered.map((partner) => (
                            <PartnerCard
                                key={partner.id}
                                partner={partner}
                                onView={() => setViewingPartner(partner)}
                                onEdit={() => setEditingPartner(partner)}
                                onDelete={() => setDeletingPartner(partner)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Modals */}
            {addOpen && (
                <PartnerFormModal
                    mode="add"
                    routes={routes}
                    onClose={() => setAddOpen(false)}
                />
            )}
            {editingPartner && (
                <PartnerFormModal
                    mode="edit"
                    partner={editingPartner}
                    routes={routes}
                    onClose={() => setEditingPartner(null)}
                />
            )}
            {viewingPartner && (
                <PartnerViewModal
                    partner={viewingPartner}
                    onClose={() => setViewingPartner(null)}
                />
            )}
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

/* ── Stat chip ── */
function StatChip({ label, value, active, onClick, tone }) {
    return (
        <button
            type="button"
            className={`stat-chip tone-${tone} ${active ? "is-active" : ""}`}
            onClick={onClick}
        >
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
        </button>
    );
}

/* ── Partner card ── */
function PartnerCard({ partner, onView, onEdit, onDelete }) {
    const isActive = !!(partner.is_active ?? partner.status);
    const domain = getDomain(partner.link);
    const initials = getInitials(partner.name);

    return (
        <div
            className={`partner-card ${isActive ? "is-active" : "is-inactive"}`}
        >
            <div className="card-top">
                <div
                    className={`logo-badge ${isActive ? "ring-active" : "ring-inactive"}`}
                >
                    {partner.logo ? (
                        <img
                            src={`/image/partners/${partner.logo}`}
                            alt={partner.name}
                        />
                    ) : (
                        <span className="logo-initials">{initials}</span>
                    )}
                </div>
                <span className={isActive ? "badge-active" : "badge-inactive"}>
                    {isActive ? "Active" : "Inactive"}
                </span>
            </div>

            <h3 className="card-name">{partner.name}</h3>
            <p className="card-desc">
                {partner.description ? (
                    limit(partner.description, 110)
                ) : (
                    <span className="dash">No description added</span>
                )}
            </p>

            <div className="card-divider" />

            <div className="card-footer">
                {partner.link ? (
                    <a
                        href={partner.link}
                        target="_blank"
                        rel="noreferrer"
                        className="card-link"
                    >
                        <ExternalIcon /> {domain}
                    </a>
                ) : (
                    <span className="dash">No website</span>
                )}
                <div className="card-actions">
                    <button
                        className="icon-btn"
                        title="View details"
                        onClick={onView}
                    >
                        <EyeIcon />
                    </button>
                    <button
                        className="icon-btn"
                        title="Edit partner"
                        onClick={onEdit}
                    >
                        <PencilIcon />
                    </button>
                    <button
                        className="icon-btn icon-btn-danger"
                        title="Delete partner"
                        onClick={onDelete}
                    >
                        <TrashIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ── Empty state ── */
function EmptyState({ onAdd }) {
    return (
        <div className="empty-state">
            <div className="empty-icon">
                <UsersIcon />
            </div>
            <h3>No partners yet</h3>
            <p>Add the first organisation supporting your talent network.</p>
            <button className="btn-add" onClick={onAdd}>
                <PlusIcon /> Add partner
            </button>
        </div>
    );
}

/* ── View modal ── */
function PartnerViewModal({ partner, onClose }) {
    const isActive = !!(partner.is_active ?? partner.status);
    return (
        <ModalShell onClose={onClose} title="Partner details">
            <div className="modal-body">
                <div className="modal-hero">
                    <div
                        className={`logo-badge logo-badge-lg ${isActive ? "ring-active" : "ring-inactive"}`}
                    >
                        {partner.logo ? (
                            <img src={`/image/partners/${partner.logo}`} alt={partner.name} />
                        ) : (
                            <span className="logo-initials">
                                {getInitials(partner.name)}
                            </span>
                        )}
                    </div>
                    <div>
                        <div className="modal-hero-name">{partner.name}</div>
                        <span
                            className={
                                isActive ? "badge-active" : "badge-inactive"
                            }
                        >
                            {isActive ? "Active" : "Inactive"}
                        </span>
                    </div>
                </div>
                {partner.description && (
                    <DetailRow
                        label="Description"
                        value={partner.description}
                    />
                )}
                <DetailRow
                    label="Website"
                    value={
                        partner.link ? (
                            <a
                                href={partner.link}
                                target="_blank"
                                rel="noreferrer"
                                className="detail-link"
                            >
                                {partner.link}
                            </a>
                        ) : (
                            <span className="dash">—</span>
                        )
                    }
                />
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn-modal-secondary"
                    onClick={onClose}
                >
                    Close
                </button>
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
    const isEdit = mode === "edit";
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors, transform } = useForm({
        name: partner?.name ?? "",
        description: partner?.description ?? "",
        logo: null,
        link: partner?.link ?? "",
        is_active: isEdit ? !!(partner?.is_active ?? partner?.status) : true,
    });

    const handleLogoChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setData("logo", file);
        const reader = new FileReader();
        reader.onload = (ev) => setPreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const submit = (e) => {
        e.preventDefault();
        const url = isEdit ? routes.update(partner.id) : routes.store();
        if (isEdit) transform((d) => ({ ...d, _method: "put" }));
        post(url, { forceFormData: true, onSuccess: onClose });
    };

    return (
        <ModalShell
            onClose={onClose}
            title={isEdit ? "Edit partner" : "Add partner"}
        >
            <form onSubmit={submit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label className="form-label">
                            Name <span className="req-mark">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Partner organization name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        {errors.name && (
                            <span className="err-msg">{errors.name}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            placeholder="Brief description (optional)"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Logo</label>
                        {isEdit && partner?.logo && !preview && (
                            <div className="logo-preview-wrap">
                                <img src={`/image/partners/${partner.logo}`} alt={partner.name} />
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
                        {errors.logo && (
                            <span className="err-msg">{errors.logo}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Website link</label>
                        <input
                            type="url"
                            className="form-control"
                            placeholder="https://partner-site.com"
                            value={data.link}
                            onChange={(e) => setData("link", e.target.value)}
                        />
                    </div>

                    <label
                        className="form-toggle"
                        htmlFor={`active_${mode}_${partner?.id ?? "new"}`}
                    >
                        <input
                            type="checkbox"
                            id={`active_${mode}_${partner?.id ?? "new"}`}
                            checked={data.is_active}
                            onChange={(e) =>
                                setData("is_active", e.target.checked)
                            }
                        />
                        <span className="toggle-track">
                            <span className="toggle-thumb" />
                        </span>
                        <span className="toggle-text">Mark as active</span>
                    </label>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn-modal-secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn-modal-primary"
                        disabled={processing}
                    >
                        {processing
                            ? "Saving…"
                            : isEdit
                              ? "Save changes"
                              : "Add partner"}
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
                <div className="delete-icon">
                    <TrashIcon size={20} />
                </div>
                <h5>Delete partner?</h5>
                <p>
                    You're about to remove <strong>{name}</strong>.<br />
                    This action cannot be undone.
                </p>
            </div>
            <div className="modal-footer" style={{ justifyContent: "center" }}>
                <button
                    type="button"
                    className="btn-modal-secondary"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="btn-modal-danger"
                    onClick={onConfirm}
                >
                    Yes, delete
                </button>
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
                    <div
                        className="modal-header"
                        style={
                            hideHeaderTitle
                                ? { borderBottom: "none" }
                                : undefined
                        }
                    >
                        <h5
                            className="modal-title"
                            style={
                                hideHeaderTitle
                                    ? { visibility: "hidden" }
                                    : undefined
                            }
                        >
                            {title || "Modal"}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        >
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
    if (!str) return "";
    return str.length > n ? str.slice(0, n).trim() + "…" : str;
}

function getDomain(url) {
    if (!url) return "";
    try {
        const { hostname } = new URL(url);
        return hostname.replace(/^www\./, "");
    } catch {
        return limit(url, 26);
    }
}

function getInitials(name) {
    if (!name) return "?";
    const parts = name.trim().split(/\s+/);
    return parts.length === 1
        ? parts[0].slice(0, 2).toUpperCase()
        : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* ── Inline icons ── */
function PlusIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    );
}
function CheckIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
function SearchIcon({ size = 14 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    );
}
function ExternalIcon() {
    return (
        <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}
function EyeIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}
function PencilIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
    );
}
function TrashIcon({ size = 14 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
    );
}
function UsersIcon() {
    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
function CloseIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
        >
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    );
}

/* ── Styles ──
   Same system as the rest of the admin panel: near-black ink, white
   surfaces, #00A667 as the single accent. The logo badge's ring colour
   still encodes status (green = active, grey = inactive) so the
   decoration carries real information, matching the badge language used
   on the connections pages. Flat cards, sharp radii, no glow shadows. */
const css = `
[data-h-scope="partners"] {
    --ink:          #0A0A0A;
    --ink-2:        #4A4A4A;
    --ink-3:        #9A9A9A;
    --canvas:       #FAFAFA;
    --surface:      #FFFFFF;
    --border:       #E1E1E1;
    --border-strong:#0A0A0A;
    --accent:       #00A667;
    --accent-deep:  #00854F;
    --accent-tint:  #E6F7EF;
    --good:         #00A667;
    --good-wash:    #E6F7EF;
    --bad:          #C0362C;
    --bad-wash:     #FBEDEC;
    --radius-lg:    4px;
    --radius-md:    6px;
    --radius-sm:    6px;
    --font-display: inherit;
    font-family: inherit;
}

.partners-page { background: var(--canvas); padding: 40px 34px 56px; min-height: 100vh; }

.page-header { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 18px; margin-bottom: 24px; padding-bottom: 22px; border-bottom: 2px solid var(--ink); }
.page-header-left h1 { font-family: var(--font-display); font-size: 25px; font-weight: 700; color: var(--ink); margin: 0; letter-spacing: -.4px; line-height: 1.15; }
.page-header-left .sub { font-size: 13.5px; color: var(--ink-2); margin: 6px 0 0; max-width: 440px; line-height: 1.5; }

.flash-success { display: flex; align-items: center; gap: 10px; background: var(--good-wash); border: 1px solid var(--good); color: var(--accent-deep); border-radius: var(--radius-md); padding: 12px 16px; font-size: 13px; font-weight: 600; margin-bottom: 20px; }

.btn-add { background: var(--accent); color: #fff; border: none; border-radius: var(--radius-md); padding: 11px 22px; font-size: 13px; font-weight: 700; font-family: var(--font-display); cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: background .15s; white-space: nowrap; flex-shrink: 0; }
.btn-add:hover { background: var(--accent-deep); }

/* Stat strip */
.stat-strip { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
.stat-chip { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 11px 20px; cursor: pointer; transition: border-color .15s; font-family: inherit; }
.stat-chip:hover { border-color: var(--ink); }
.stat-value { font-family: var(--font-display); font-size: 19px; font-weight: 700; color: var(--ink); line-height: 1; }
.stat-label { font-size: 11.5px; font-weight: 600; color: var(--ink-3); }
.stat-chip.is-active { border-color: var(--ink); background: var(--ink); }
.stat-chip.is-active .stat-value, .stat-chip.is-active .stat-label { color: #fff; }
.stat-chip.tone-good.is-active { border-color: var(--accent); background: var(--accent); }
.stat-chip.tone-muted.is-active { border-color: var(--ink-3); background: var(--ink-3); }

/* Toolbar */
.toolbar { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; flex-wrap: wrap; }
.search-wrap { display: flex; align-items: center; gap: 9px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 9px 14px; flex: 1; max-width: 380px; transition: border-color .15s, box-shadow .15s; }
.search-wrap:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-tint); }
.search-wrap svg { color: var(--ink-3); flex-shrink: 0; }
.search-wrap input { border: none; background: transparent; outline: none; font-size: 13px; color: var(--ink); width: 100%; }
.search-wrap input::placeholder { color: var(--ink-3); }
.search-clear { background: none; border: none; color: var(--ink-3); cursor: pointer; display: flex; padding: 2px; border-radius: 4px; }
.search-clear:hover { background: var(--canvas); color: var(--ink); }
.result-count { font-size: 12px; color: var(--ink-3); font-weight: 600; white-space: nowrap; }

/* Card grid */
.partner-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(288px, 1fr)); gap: 16px; }

.partner-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px; display: flex; flex-direction: column; transition: border-color .15s; }
.partner-card:hover { border-color: var(--ink); }

.card-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; }

.logo-badge { width: 52px; height: 52px; border-radius: 8px; background: var(--canvas); border: 2px solid var(--ring-color, var(--border)); display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0; }
.logo-badge.ring-active { --ring-color: var(--accent); }
.logo-badge.ring-inactive { --ring-color: var(--border); }
.logo-badge img { width: 100%; height: 100%; object-fit: contain; padding: 8px; }
.logo-badge-lg { width: 64px; height: 64px; border-radius: 10px; }
.logo-initials { font-family: var(--font-display); font-weight: 700; font-size: 16px; color: var(--ink-2); letter-spacing: .02em; }

.badge-active, .badge-inactive { display: inline-flex; align-items: center; gap: 5px; font-size: 10.5px; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-sm); white-space: nowrap; font-family: var(--font-display); }
.badge-active { background: var(--good-wash); color: var(--accent-deep); }
.badge-inactive { background: var(--canvas); color: var(--ink-3); border: 1px solid var(--border); }

.card-name { font-family: var(--font-display); font-size: 15.5px; font-weight: 700; color: var(--ink); margin: 0 0 6px; letter-spacing: -.1px; }
.card-desc { font-size: 12.5px; color: var(--ink-2); line-height: 1.55; margin: 0; min-height: 38px; }

.card-divider { height: 1px; background: var(--border); margin: 16px 0 12px; }

.card-footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.card-link { font-size: 12px; font-weight: 600; color: var(--ink); text-decoration: none; display: inline-flex; align-items: center; gap: 5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; border-bottom: 1px solid transparent; }
.card-link:hover { border-color: var(--accent); color: var(--accent-deep); }
.dash { color: var(--ink-3); font-size: 12px; }

.card-actions { display: flex; gap: 4px; flex-shrink: 0; }
.icon-btn { width: 30px; height: 30px; border-radius: var(--radius-sm); border: 1px solid var(--border); background: var(--surface); color: var(--ink-2); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background .12s, color .12s, border-color .12s; }
.icon-btn:hover { background: var(--ink); color: #fff; border-color: var(--ink); }
.icon-btn-danger:hover { background: var(--bad); color: #fff; border-color: var(--bad); }

/* Empty / no-match states */
.empty-state { background: var(--surface); border: 1px dashed var(--border); border-radius: var(--radius-lg); padding: 60px 20px; text-align: center; }
.empty-icon { width: 54px; height: 54px; background: var(--canvas); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: var(--ink-3); }
.empty-state h3 { font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--ink-2); margin: 0 0 6px; }
.empty-state p { font-size: 13px; color: var(--ink-3); margin: 0 0 20px; }

/* Modal system */
.modal-overlay { position: fixed; inset: 0; background: rgba(10,10,10,.6); display: flex; align-items: center; justify-content: center; padding: 20px; z-index: 1000; }
.modal-dialog { width: 100%; max-width: 460px; }
.modal-content { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
.modal-header { background: #fff; border-bottom: 2px solid var(--ink); padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; }
.modal-title { font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--ink); margin: 0; }
.btn-close { background: var(--canvas); border: 1px solid var(--border); border-radius: var(--radius-sm); width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--ink-2); transition: background .12s, color .12s; }
.btn-close:hover { background: var(--ink); color: #fff; border-color: var(--ink); }
.modal-body { background: #fff; padding: 22px 24px; max-height: 70vh; overflow-y: auto; }
.modal-footer { background: #00a667; border-top: 1px solid var(--border); padding: 14px 24px; display: flex; gap: 8px; justify-content: flex-end; }

.modal-hero { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
.modal-hero-name { font-family: var(--font-display); font-weight: 700; font-size: 16px; color: var(--ink); margin-bottom: 6px; }

.detail-row { display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
.detail-row:last-child { border-bottom: none; }
.detail-label { font-weight: 700; color: var(--ink-3); min-width: 92px; flex-shrink: 0; }
.detail-value { color: var(--ink-2); line-height: 1.5; }
.detail-link { color: var(--ink); text-decoration: none; font-size: 13px; border-bottom: 1px solid var(--accent); }
.detail-link:hover { color: var(--accent-deep); }

.form-group { margin-bottom: 16px; }
.form-label { font-size: 12px; font-weight: 600; color: var(--ink-2); margin-bottom: 6px; display: block; }
.req-mark { color: var(--bad); }
.form-control { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--ink); font-size: 13px; padding: 10px 13px; width: 100%; font-family: inherit; transition: border-color .15s, box-shadow .15s; }
.form-control:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-tint); }
textarea.form-control { min-height: 80px; resize: vertical; }
.err-msg { display: block; font-size: 11.5px; color: var(--bad); font-weight: 600; margin-top: 5px; }

.form-toggle { display: flex; align-items: center; gap: 10px; cursor: pointer; margin-top: 4px; }
.form-toggle input { position: absolute; opacity: 0; width: 0; height: 0; }
.toggle-track { width: 38px; height: 22px; background: var(--border); border-radius: 20px; position: relative; transition: background .18s; flex-shrink: 0; }
.toggle-thumb { position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: #fff; border-radius: 50%; box-shadow: 0 1px 2px rgba(0,0,0,.25); transition: transform .18s; }
.form-toggle input:checked + .toggle-track { background: var(--accent); }
.form-toggle input:checked + .toggle-track .toggle-thumb { transform: translateX(16px); }
.toggle-text { font-size: 13px; color: var(--ink-2); font-weight: 600; }

.logo-preview-wrap { margin-top: 8px; }
.logo-preview-wrap img { height: 52px; object-fit: contain; border-radius: var(--radius-sm); border: 1px solid var(--border); padding: 4px; background: #fff; }

.btn-modal-primary { background: var(--accent); color: #fff; border: none; border-radius: var(--radius-sm); padding: 10px 20px; font-size: 13px; font-weight: 700; font-family: var(--font-display); cursor: pointer; transition: background .15s; }
.btn-modal-primary:hover { background: var(--accent-deep); }
.btn-modal-primary:disabled { opacity: .6; cursor: default; }
.btn-modal-secondary { background: #fff; color: var(--ink); border: 1px solid var(--border-strong); border-radius: var(--radius-sm); padding: 10px 20px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background .15s, color .15s; }
.btn-modal-secondary:hover { background: var(--ink); color: #fff; }
.btn-modal-danger { background: var(--bad-wash); color: var(--bad); border: 1px solid var(--bad); border-radius: var(--radius-sm); padding: 10px 20px; font-size: 13px; font-weight: 700; cursor: pointer; transition: background .15s, color .15s; }
.btn-modal-danger:hover { background: var(--bad); color: #fff; }

.delete-confirm-body { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 30px 24px; }
.delete-icon { width: 50px; height: 50px; background: var(--bad-wash); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: var(--bad); }
.delete-confirm-body h5 { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--ink); margin: 0 0 6px; }
.delete-confirm-body p { font-size: 13px; color: var(--ink-3); margin: 0; line-height: 1.5; }

@media (max-width: 560px) {
    .partners-page { padding: 24px 16px 40px; }
    .page-header { flex-direction: column; }
    .btn-add { width: 100%; justify-content: center; }
    .partner-grid { grid-template-columns: 1fr; }
}
`;
