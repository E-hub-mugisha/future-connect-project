import { useMemo, useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* ------------------------------------------------------------------ */
/*  Icons (inline SVG — no external icon dependency)                  */
/* ------------------------------------------------------------------ */

const Icon = {
  Eye: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Pencil: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19 3 20l1-4L16.5 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Refresh: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9M20.5 12a8.5 8.5 0 0 1-14.6 5.9M4 4v5h5M20 20v-5h-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Trash: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M4 7h16M9 7V4.8c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8V7M6 7l.9 12.2a2 2 0 0 0 2 1.8h6.2a2 2 0 0 0 2-1.8L18 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Search: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" strokeLinecap="round" />
    </svg>
  ),
  Dots: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...p}>
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  ),
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" {...p}>
      <path d="M4.5 4h3.2l1.5 4.2-2 1.8a12.5 12.5 0 0 0 5.8 5.8l1.8-2 4.2 1.5V18a2 2 0 0 1-2.2 2A16 16 0 0 1 2.5 6.2 2 2 0 0 1 4.5 4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" {...p}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  ),
  Building: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" {...p}>
      <path d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M13 21v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v9M4 21h16M7.5 7.5h1M7.5 11h1M7.5 14.5h1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Box: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" {...p}>
      <path d="M21 8 12 3 3 8l9 5 9-5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const AVATAR_PALETTES = [
  ['#dff5ea', '#0e8f5f'],
  ['#e6f0ff', '#2757d6'],
  ['#fdeee3', '#c2660f'],
  ['#f3e8ff', '#7c3aed'],
  ['#ffe8ee', '#d6336c'],
  ['#e7f9f2', '#0c8577'],
];

function paletteFor(seed = '') {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_PALETTES[Math.abs(hash) % AVATAR_PALETTES.length];
}

function initialsFor(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase();
}

function Avatar({ name, size = 44 }) {
  const [bg, fg] = paletteFor(name);
  return (
    <div
      className="d-flex align-items-center justify-content-center rounded-3 fw-semibold flex-shrink-0"
      style={{ width: size, height: size, backgroundColor: bg, color: fg, fontSize: size * 0.38 }}
    >
      {initialsFor(name)}
    </div>
  );
}

const STATUS_META = {
  approved: { label: 'Approved', bg: '#e6f7ee', fg: '#0e8f5f', dot: '#12b76a' },
  rejected: { label: 'Rejected', bg: '#fdecec', fg: '#c0362c', dot: '#e5493f' },
  pending: { label: 'Pending', bg: '#fff6e0', fg: '#a86400', dot: '#f2a900' },
};

function StatusBadge({ status, size = 'md' }) {
  const meta = STATUS_META[status] ?? STATUS_META.pending;
  const padding = size === 'sm' ? '3px 10px' : '6px 14px';
  return (
    <span
      className="d-inline-flex align-items-center gap-2 rounded-pill fw-semibold text-capitalize"
      style={{ backgroundColor: meta.bg, color: meta.fg, padding, fontSize: size === 'sm' ? 12 : 13 }}
    >
      <span className="rounded-circle" style={{ width: 6, height: 6, backgroundColor: meta.dot }} />
      {meta.label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal shell                                                        */
/* ------------------------------------------------------------------ */

function ModalShell({ open, onClose, title, eyebrow, children, size = 'modal-lg' }) {
  if (!open) return null;
  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ background: 'rgba(15, 23, 42, 0.45)', backdropFilter: 'blur(2px)' }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={`modal-dialog modal-dialog-centered ${size}`}>
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div className="modal-header border-0 px-4 pt-4 pb-3">
            <div>
              {eyebrow && (
                <div className="text-uppercase small fw-semibold text-secondary mb-1" style={{ letterSpacing: '.06em', fontSize: 11 }}>
                  {eyebrow}
                </div>
              )}
              <h5 className="modal-title fw-semibold mb-0">{title}</h5>
            </div>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Row actions menu                                                   */
/* ------------------------------------------------------------------ */

function ActionsMenu({ onStatus, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown position-relative">
      <button
        type="button"
        className="btn btn-sm btn-light border rounded-3 d-flex align-items-center justify-content-center"
        style={{ width: 34, height: 34 }}
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      >
        <Icon.Dots className="text-secondary" />
      </button>
      <ul
        className={`dropdown-menu dropdown-menu-end shadow border-0 rounded-3 mt-1 ${open ? 'show' : ''}`}
        style={{ position: 'absolute', right: 0, minWidth: 190 }}
      >
        <li>
          <button type="button" className="dropdown-item d-flex align-items-center gap-2 py-2" onMouseDown={onStatus}>
            <Icon.Refresh className="text-secondary" /> Update status
          </button>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <button type="button" className="dropdown-item d-flex align-items-center gap-2 py-2 text-danger" onMouseDown={onDelete}>
            <Icon.Trash /> Delete seller
          </button>
        </li>
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Profile modal — read-only seller overview                          */
/* ------------------------------------------------------------------ */

function ProfileModal({ seller, open, onClose, onEdit, onStatus, onDelete }) {
  if (!seller) return null;
  const productsCount = seller.products_count ?? seller.products?.length ?? null;

  return (
    <ModalShell open={open} onClose={onClose} eyebrow={`Seller #${seller.id}`} title="Company profile">
      <div className="modal-body px-4 pb-4 pt-0">
        <div className="d-flex align-items-center gap-3 p-3 rounded-4 mb-4" style={{ backgroundColor: '#f7f8fa' }}>
          <Avatar name={seller.company_name} size={56} />
          <div className="flex-grow-1">
            <div className="fw-semibold fs-5 text-dark">{seller.company_name}</div>
            <div className="text-secondary small">{seller.address || 'No address on file'}</div>
          </div>
          <StatusBadge status={seller.status} />
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="p-3 rounded-3 border h-100">
              <div className="d-flex align-items-center gap-2 text-secondary small fw-semibold mb-1">
                <Icon.Mail /> Email
              </div>
              <div className="text-dark">{seller.email || '—'}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 rounded-3 border h-100">
              <div className="d-flex align-items-center gap-2 text-secondary small fw-semibold mb-1">
                <Icon.Phone /> Phone
              </div>
              <div className="text-dark">{seller.phone || '—'}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 rounded-3 border h-100">
              <div className="d-flex align-items-center gap-2 text-secondary small fw-semibold mb-1">
                <Icon.Pin /> Address
              </div>
              <div className="text-dark">{seller.address || '—'}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 rounded-3 border h-100">
              <div className="d-flex align-items-center gap-2 text-secondary small fw-semibold mb-1">
                <Icon.Box /> Products listed
              </div>
              <div className="text-dark">{productsCount ?? 'Not available'}</div>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-secondary small fw-semibold mb-2">About the company</div>
          <p className="text-dark mb-0" style={{ lineHeight: 1.6 }}>
            {seller.description || 'No description provided.'}
          </p>
        </div>
      </div>
      <div className="modal-footer border-0 bg-light d-flex justify-content-between px-4 py-3">
        <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
          Close
        </button>
        <div className="d-flex gap-2">
          <button type="button" className="btn btn-outline-primary d-flex align-items-center gap-2" onClick={onStatus}>
            <Icon.Refresh /> Status
          </button>
          <button type="button" className="btn btn-primary d-flex align-items-center gap-2" onClick={onEdit}>
            <Icon.Pencil /> Edit profile
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Manage (edit) modal                                                */
/* ------------------------------------------------------------------ */

function ManageModal({ seller, open, onClose }) {
  const { data, setData, patch, processing, errors, reset } = useForm({
    company_name: seller?.company_name ?? '',
    email: seller?.email ?? '',
    phone: seller?.phone ?? '',
    address: seller?.address ?? '',
    description: seller?.description ?? '',
    status: seller?.status ?? 'pending',
  });

  if (!seller) return null;

  const submit = (e) => {
    e.preventDefault();
    patch(route('admin.sellers.update', seller.id), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  return (
    <ModalShell open={open} onClose={onClose} eyebrow={`Seller #${seller.id}`} title="Edit seller profile">
      <form onSubmit={submit}>
        <div className="modal-body px-4 pb-4 pt-0">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">Company name</label>
              <input
                type="text"
                className={`form-control ${errors.company_name ? 'is-invalid' : ''}`}
                value={data.company_name}
                onChange={(e) => setData('company_name', e.target.value)}
              />
              {errors.company_name && <div className="invalid-feedback">{errors.company_name}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">Phone</label>
              <input
                type="text"
                className="form-control"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">Address</label>
              <input
                type="text"
                className="form-control"
                value={data.address}
                onChange={(e) => setData('address', e.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold small text-secondary">Description</label>
              <textarea
                rows="3"
                className="form-control"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold small text-secondary">Status</label>
              <select
                className="form-select"
                value={data.status}
                onChange={(e) => setData('status', e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-footer border-0 bg-light d-flex justify-content-between px-4 py-3">
          <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={processing}>
            {processing ? 'Saving…' : 'Save changes'}
          </button>
        </div>
      </form>
    </ModalShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Status modal                                                       */
/* ------------------------------------------------------------------ */

function StatusModal({ seller, open, onClose }) {
  const { data, setData, patch, processing, reset } = useForm({
    status: seller?.status ?? 'pending',
  });

  if (!seller) return null;

  const submit = (e) => {
    e.preventDefault();
    patch(route('admin.sellers.updateStatus', seller.id), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  return (
    <ModalShell open={open} onClose={onClose} eyebrow={seller.company_name} title="Update status" size="modal-md">
      <form onSubmit={submit}>
        <div className="modal-body px-4 pb-4 pt-0">
          <label className="form-label fw-semibold small text-secondary">Status</label>
          <select
            className="form-select"
            value={data.status}
            onChange={(e) => setData('status', e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          {data.status === 'approved' && (
            <div className="alert alert-warning mt-3 mb-0 py-2 small border-0 rounded-3">
              Approving this seller creates a user account and emails their login credentials.
            </div>
          )}
        </div>
        <div className="modal-footer border-0 bg-light d-flex justify-content-between px-4 py-3">
          <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={processing}>
            {processing ? 'Updating…' : 'Update status'}
          </button>
        </div>
      </form>
    </ModalShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Delete confirm modal                                               */
/* ------------------------------------------------------------------ */

function DeleteModal({ seller, open, onClose }) {
  if (!seller) return null;

  const confirmDelete = () => {
    router.delete(route('admin.sellers.destroy', seller.id), {
      preserveScroll: true,
      onSuccess: onClose,
    });
  };

  return (
    <ModalShell open={open} onClose={onClose} eyebrow="This can't be undone" title="Delete seller" size="modal-md">
      <div className="modal-body px-4 pb-4 pt-0">
        <p className="mb-0 text-secondary">
          Are you sure you want to delete <span className="fw-semibold text-dark">{seller.company_name}</span> and
          all associated records?
        </p>
      </div>
      <div className="modal-footer border-0 bg-light d-flex justify-content-between px-4 py-3">
        <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="btn btn-danger d-flex align-items-center gap-2" onClick={confirmDelete}>
          <Icon.Trash /> Delete seller
        </button>
      </div>
    </ModalShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Stat card                                                          */
/* ------------------------------------------------------------------ */

function StatCard({ label, value, accent }) {
  return (
    <div className="col-6 col-lg-3">
      <div className="card border-0 shadow-sm rounded-4 h-100">
        <div className="card-body d-flex align-items-center gap-3 py-3">
          <span className="rounded-3" style={{ width: 8, height: 32, backgroundColor: accent }} />
          <div>
            <div className="text-secondary small fw-semibold mb-1">{label}</div>
            <div className="fs-4 fw-bold text-dark lh-1">{value}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Index({ sellers, flash }) {
  const [profileTarget, setProfileTarget] = useState(null);
  const [manageTarget, setManageTarget] = useState(null);
  const [statusTarget, setStatusTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const counts = useMemo(
    () => ({
      total: sellers.length,
      approved: sellers.filter((s) => s.status === 'approved').length,
      pending: sellers.filter((s) => s.status === 'pending').length,
      rejected: sellers.filter((s) => s.status === 'rejected').length,
    }),
    [sellers]
  );

  const filtered = useMemo(() => {
    return sellers.filter((s) => {
      const matchesStatus = statusFilter === 'all' || s.status === statusFilter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        s.company_name?.toLowerCase().includes(q) ||
        s.email?.toLowerCase().includes(q) ||
        s.address?.toLowerCase().includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [sellers, query, statusFilter]);

  return (
    <AppLayout>
      <Head title="Sellers" />

      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
          <div>
            <h3 className="mb-1 fw-semibold text-dark">Seller companies</h3>
            <p className="text-secondary mb-0 small">
              Manage the businesses selling on the platform
            </p>
          </div>
        </div>

        {flash?.success && (
          <div className="alert alert-success border-0 shadow-sm rounded-3">{flash.success}</div>
        )}

        <div className="row g-3 mb-4">
          <StatCard label="Total sellers" value={counts.total} accent="#2757d6" />
          <StatCard label="Approved" value={counts.approved} accent="#12b76a" />
          <StatCard label="Pending" value={counts.pending} accent="#f2a900" />
          <StatCard label="Rejected" value={counts.rejected} accent="#e5493f" />
        </div>

        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-header bg-white border-0 pt-4 px-4 pb-3">
            <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
              <div className="position-relative" style={{ maxWidth: 320, width: '100%' }}>
                <span className="position-absolute text-secondary" style={{ left: 12, top: 10 }}>
                  <Icon.Search />
                </span>
                <input
                  type="text"
                  className="form-control ps-5 rounded-pill"
                  placeholder="Search by company, email, address…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="btn-group" role="group">
                {['all', 'pending', 'approved', 'rejected'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`btn btn-sm text-capitalize ${statusFilter === s ? 'btn-dark' : 'btn-outline-secondary'}`}
                    onClick={() => setStatusFilter(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr className="text-secondary small text-uppercase border-bottom bg-light">
                    <th className="px-4 py-3 fw-semibold">Company</th>
                    <th className="px-4 py-3 fw-semibold">Contact</th>
                    <th className="px-4 py-3 fw-semibold">Description</th>
                    <th className="px-4 py-3 fw-semibold">Status</th>
                    <th className="px-4 py-3 fw-semibold text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center text-secondary py-5">
                        <Icon.Building className="mb-2 text-secondary opacity-50" />
                        <div>No sellers match your filters.</div>
                      </td>
                    </tr>
                  )}

                  {filtered.map((seller) => (
                    <tr key={seller.id} style={{ cursor: 'pointer' }} onClick={() => setProfileTarget(seller)}>
                      <td className="px-4 py-3">
                        <div className="d-flex align-items-center gap-3">
                          <Avatar name={seller.company_name} />
                          <div>
                            <div className="fw-semibold text-dark">{seller.company_name}</div>
                            <div className="small text-secondary">#{seller.id} · {seller.address || 'No address'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-dark small d-flex align-items-center gap-1">
                          <Icon.Mail className="text-secondary" /> {seller.email}
                        </div>
                        <div className="small text-secondary d-flex align-items-center gap-1 mt-1">
                          <Icon.Phone className="text-secondary" /> {seller.phone || '—'}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="text-secondary small d-inline-block text-truncate"
                          style={{ maxWidth: 220 }}
                          title={seller.description}
                        >
                          {seller.description || '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={seller.status} />
                      </td>
                      <td className="px-4 py-3 text-end" onClick={(e) => e.stopPropagation()}>
                        <div className="d-flex justify-content-end gap-2">
                          <a href={route('admin.sellers.show', seller.id)} className="btn btn-sm btn-outline-primary rounded-3 d-flex align-items-center gap-2">
                            <Icon.Eye /> View profile
                          </a>
                          <ActionsMenu
                            onStatus={() => setStatusTarget(seller)}
                            onDelete={() => setDeleteTarget(seller)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-footer bg-white border-0 px-4 py-3 text-secondary small">
            Showing {filtered.length} of {sellers.length} seller{sellers.length === 1 ? '' : 's'}
          </div>
        </div>
      </div>

      <ProfileModal
        seller={profileTarget}
        open={!!profileTarget}
        onClose={() => setProfileTarget(null)}
        onEdit={() => {
          setManageTarget(profileTarget);
          setProfileTarget(null);
        }}
        onStatus={() => {
          setStatusTarget(profileTarget);
          setProfileTarget(null);
        }}
        onDelete={() => {
          setDeleteTarget(profileTarget);
          setProfileTarget(null);
        }}
      />
      <ManageModal seller={manageTarget} open={!!manageTarget} onClose={() => setManageTarget(null)} />
      <StatusModal seller={statusTarget} open={!!statusTarget} onClose={() => setStatusTarget(null)} />
      <DeleteModal seller={deleteTarget} open={!!deleteTarget} onClose={() => setDeleteTarget(null)} />
    </AppLayout>
  );
}