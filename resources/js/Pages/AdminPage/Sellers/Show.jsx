import { useState } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* ------------------------------------------------------------------ */
/*  Icons (inline SVG — no external icon dependency)                  */
/* ------------------------------------------------------------------ */

const Icon = {
  ArrowLeft: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
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
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M4.5 4h3.2l1.5 4.2-2 1.8a12.5 12.5 0 0 0 5.8 5.8l1.8-2 4.2 1.5V18a2 2 0 0 1-2.2 2A16 16 0 0 1 2.5 6.2 2 2 0 0 1 4.5 4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  ),
  Box: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M21 8 12 3 3 8l9 5 9-5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Calendar: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  User: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.5-4 4-6 7.5-6s6 2 7.5 6" strokeLinecap="round" strokeLinejoin="round" />
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

function Avatar({ name, size = 72 }) {
  const [bg, fg] = paletteFor(name);
  return (
    <div
      className="d-flex align-items-center justify-content-center rounded-4 fw-semibold flex-shrink-0"
      style={{ width: size, height: size, backgroundColor: bg, color: fg, fontSize: size * 0.36 }}
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

function formatDate(value) {
  if (!value) return '—';
  try {
    return new Date(value).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return value;
  }
}

/* ------------------------------------------------------------------ */
/*  Modal shell                                                        */
/* ------------------------------------------------------------------ */

function ModalShell({ open, onClose, title, eyebrow, children, size = 'modal-md' }) {
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
/*  Update status modal                                                */
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

  const options = [
    { value: 'pending', label: 'Pending', hint: 'Awaiting review — not yet visible to buyers.' },
    { value: 'approved', label: 'Approved', hint: 'Creates a user account and emails login credentials.' },
    { value: 'rejected', label: 'Rejected', hint: 'Seller is notified and the listing stays hidden.' },
  ];

  return (
    <ModalShell open={open} onClose={onClose} eyebrow={seller.company_name} title="Update status">
      <form onSubmit={submit}>
        <div className="modal-body px-4 pb-4 pt-0">
          <div className="d-flex flex-column gap-2">
            {options.map((opt) => (
              <label
                key={opt.value}
                className="d-flex align-items-start gap-3 p-3 rounded-3 border"
                style={{
                  cursor: 'pointer',
                  borderColor: data.status === opt.value ? STATUS_META[opt.value].fg : '#e5e7eb',
                  backgroundColor: data.status === opt.value ? STATUS_META[opt.value].bg : 'transparent',
                }}
              >
                <input
                  type="radio"
                  name="status"
                  className="form-check-input mt-1"
                  checked={data.status === opt.value}
                  onChange={() => setData('status', opt.value)}
                />
                <div>
                  <div className="fw-semibold text-dark">{opt.label}</div>
                  <div className="small text-secondary">{opt.hint}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="modal-footer border-0 bg-light d-flex justify-content-between px-4 py-3">
          <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={processing || data.status === seller.status}>
            {processing ? 'Updating…' : 'Update status'}
          </button>
        </div>
      </form>
    </ModalShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Edit modal                                                         */
/* ------------------------------------------------------------------ */

function ManageModal({ seller, open, onClose }) {
  const { data, setData, patch, processing, errors, reset } = useForm({
    company_name: seller?.company_name ?? '',
    email: seller?.email ?? '',
    phone: seller?.phone ?? '',
    address: seller?.address ?? '',
    description: seller?.description ?? '',
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
    <ModalShell open={open} onClose={onClose} eyebrow={`Seller #${seller.id}`} title="Edit seller profile" size="modal-lg">
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
/*  Delete confirm modal                                               */
/* ------------------------------------------------------------------ */

function DeleteModal({ seller, open, onClose }) {
  if (!seller) return null;

  const confirmDelete = () => {
    router.delete(route('admin.sellers.destroy', seller.id), {
      preserveScroll: true,
      onSuccess: () => router.visit(route('admin.sellers.index')),
    });
  };

  return (
    <ModalShell open={open} onClose={onClose} eyebrow="This can't be undone" title="Delete seller">
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
/*  Info row                                                           */
/* ------------------------------------------------------------------ */

function InfoRow({ icon, label, value }) {
  return (
    <div className="d-flex align-items-start gap-3 py-3 border-bottom">
      <div
        className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 text-secondary"
        style={{ width: 36, height: 36, backgroundColor: '#f4f5f7' }}
      >
        {icon}
      </div>
      <div>
        <div className="text-secondary small fw-semibold mb-1">{label}</div>
        <div className="text-dark">{value || '—'}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Show({ seller, flash }) {
  const [statusOpen, setStatusOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const productsCount = seller.products_count ?? seller.products?.length ?? null;
  const products = seller.products ?? [];

  return (
    <AppLayout>
      <Head title={seller.company_name} />

      <div className="container-fluid py-4" style={{ maxWidth: 1100 }}>
        <Link
          href={route('admin.sellers.index')}
          className="d-inline-flex align-items-center gap-2 text-secondary text-decoration-none small fw-semibold mb-3"
        >
          <Icon.ArrowLeft /> Back to sellers
        </Link>

        {flash?.success && (
          <div className="alert alert-success border-0 shadow-sm rounded-3">{flash.success}</div>
        )}

        {/* Header card */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div className="d-flex align-items-center gap-3">
                <Avatar name={seller.company_name} />
                <div>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <h4 className="fw-semibold text-dark mb-0">{seller.company_name}</h4>
                    <StatusBadge status={seller.status} />
                  </div>
                  <div className="text-secondary small mt-1">Seller #{seller.id} · Joined {formatDate(seller.created_at)}</div>
                </div>
              </div>

              <div className="d-flex gap-2 flex-wrap">
                <button
                  type="button"
                  className="btn btn-outline-primary d-flex align-items-center gap-2 rounded-3"
                  onClick={() => setStatusOpen(true)}
                >
                  <Icon.Refresh /> Update status
                </button>
                <button
                  type="button"
                  className="btn btn-primary d-flex align-items-center gap-2 rounded-3"
                  onClick={() => setEditOpen(true)}
                >
                  <Icon.Pencil /> Edit profile
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger d-flex align-items-center gap-2 rounded-3"
                  onClick={() => setDeleteOpen(true)}
                >
                  <Icon.Trash /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Left: contact + meta */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <h6 className="fw-semibold text-dark mb-2">Company details</h6>
                <InfoRow icon={<Icon.Mail />} label="Email" value={seller.email} />
                <InfoRow icon={<Icon.Phone />} label="Phone" value={seller.phone} />
                <InfoRow icon={<Icon.Pin />} label="Address" value={seller.address} />
                <InfoRow icon={<Icon.Box />} label="Products listed" value={productsCount ?? 'Not available'} />
                <div className="d-flex align-items-start gap-3 pt-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 text-secondary"
                    style={{ width: 36, height: 36, backgroundColor: '#f4f5f7' }}
                  >
                    <Icon.Calendar />
                  </div>
                  <div>
                    <div className="text-secondary small fw-semibold mb-1">Joined</div>
                    <div className="text-dark">{formatDate(seller.created_at)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: description + products */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h6 className="fw-semibold text-dark mb-3">About the company</h6>
                <p className="text-dark mb-0" style={{ lineHeight: 1.7 }}>
                  {seller.description || 'No description provided.'}
                </p>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h6 className="fw-semibold text-dark mb-0">Products</h6>
                  <span className="text-secondary small">{productsCount ?? 0} total</span>
                </div>

                {products.length === 0 ? (
                  <div className="text-center text-secondary py-4 small">
                    This seller hasn&apos;t listed any products yet.
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                      <thead>
                        <tr className="text-secondary small text-uppercase border-bottom">
                          <th className="fw-semibold py-2">Name</th>
                          <th className="fw-semibold py-2">Price</th>
                          <th className="fw-semibold py-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id}>
                            <td className="py-2 text-dark">{product.name}</td>
                            <td className="py-2 text-secondary">{product.price ?? '—'}</td>
                            <td className="py-2">
                              <StatusBadge status={product.status ?? 'pending'} size="sm" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <StatusModal seller={statusOpen ? seller : null} open={statusOpen} onClose={() => setStatusOpen(false)} />
      <ManageModal seller={editOpen ? seller : null} open={editOpen} onClose={() => setEditOpen(false)} />
      <DeleteModal seller={deleteOpen ? seller : null} open={deleteOpen} onClose={() => setDeleteOpen(false)} />
    </AppLayout>
  );
}
