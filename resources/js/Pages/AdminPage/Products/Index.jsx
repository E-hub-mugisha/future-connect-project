import { useMemo, useState } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* ------------------------------------------------------------------ */
/*  Icons (inline SVG — no external icon dependency)                  */
/* ------------------------------------------------------------------ */

const Icon = {
  Plus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Eye: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3.2" strokeLinecap="round" strokeLinejoin="round" />
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
  Image: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m21 15-5-5-9 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Box: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24" {...p}>
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
  if (parts.length === 0) return 'NA';
  return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase();
}

function SellerAvatar({ name }) {
  const [bg, fg] = paletteFor(name || 'NA');
  return (
    <div
      className="d-flex align-items-center justify-content-center rounded-3 fw-semibold flex-shrink-0"
      style={{ width: 36, height: 36, backgroundColor: bg, color: fg, fontSize: 13 }}
    >
      {initialsFor(name || 'NA')}
    </div>
  );
}

function ProductThumb({ src, alt, size = 48 }) {
  if (!src) {
    return (
      <div
        className="d-flex align-items-center justify-content-center rounded-3 text-secondary flex-shrink-0"
        style={{ width: size, height: size, backgroundColor: '#f3f4f6' }}
      >
        <Icon.Image />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-3 flex-shrink-0"
      style={{ width: size, height: size, objectFit: 'cover' }}
    />
  );
}

const STATUS_META = {
  approved: { label: 'Approved', bg: '#e6f7ee', fg: '#0e8f5f', dot: '#12b76a' },
  rejected: { label: 'Rejected', bg: '#fdecec', fg: '#c0362c', dot: '#e5493f' },
  pending: { label: 'Pending', bg: '#fff6e0', fg: '#a86400', dot: '#f2a900' },
};

function StatusBadge({ status }) {
  const meta = STATUS_META[status] ?? STATUS_META.pending;
  return (
    <span
      className="d-inline-flex align-items-center gap-2 rounded-pill fw-semibold text-capitalize"
      style={{ backgroundColor: meta.bg, color: meta.fg, padding: '5px 12px', fontSize: 12.5 }}
    >
      <span className="rounded-circle" style={{ width: 6, height: 6, backgroundColor: meta.dot }} />
      {meta.label}
    </span>
  );
}

function formatDate(value) {
  if (!value) return '—';
  try {
    return new Date(value).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return value;
  }
}

function formatPrice(value) {
  const num = Number(value);
  return Number.isFinite(num) ? `$${num.toFixed(2)}` : '—';
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
            <Icon.Trash /> Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  View (quick look) modal                                            */
/* ------------------------------------------------------------------ */

function ViewModal({ product, open, onClose }) {
  if (!product) return null;
  const imageSrc = product.image ? `/storage/${product.image}` : null;

  return (
    <ModalShell open={open} onClose={onClose} eyebrow={`Product #${product.id}`} title={product.name}>
      <div className="modal-body px-4 pb-4 pt-0">
        <div className="row g-4">
          <div className="col-md-5">
            <div className="rounded-4 overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              {imageSrc ? (
                <img src={imageSrc} alt={product.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
              ) : (
                <div className="w-100 h-100 d-flex align-items-center justify-content-center text-secondary" style={{ backgroundColor: '#f3f4f6' }}>
                  <Icon.Box />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-7">
            <div className="mb-3">
              <StatusBadge status={product.status} />
            </div>
            <p className="text-secondary" style={{ lineHeight: 1.6 }}>
              {product.description || 'No description provided.'}
            </p>
            <hr />
            <div className="row g-3">
              <div className="col-6">
                <div className="text-secondary small fw-semibold mb-1">Price</div>
                <div className="fw-semibold text-dark">{formatPrice(product.price)}</div>
              </div>
              <div className="col-6">
                <div className="text-secondary small fw-semibold mb-1">Category</div>
                <div className="text-dark">{product.category?.name ?? 'Uncategorized'}</div>
              </div>
              <div className="col-12">
                <div className="text-secondary small fw-semibold mb-1">Seller</div>
                <div className="text-dark">{product.seller?.company_name ?? 'N/A'}</div>
                <div className="small text-secondary">{product.seller?.address ?? ''}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer border-0 bg-light d-flex justify-content-between px-4 py-3">
        <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
          Close
        </button>
        <Link href={route('admin.products.view', product.id)} className="btn btn-primary">
          Full view
        </Link>
      </div>
    </ModalShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Status modal                                                       */
/* ------------------------------------------------------------------ */

function StatusModal({ product, open, onClose }) {
  const { data, setData, patch, processing, reset } = useForm({
    status: product?.status ?? 'pending',
  });

  if (!product) return null;

  const submit = (e) => {
    e.preventDefault();
    patch(route('admin.products.updateStatus', product.id), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  const options = [
    { value: 'pending', label: 'Pending', hint: 'Awaiting review — not yet visible to buyers.' },
    { value: 'approved', label: 'Approved', hint: 'Product goes live and becomes visible to buyers.' },
    { value: 'rejected', label: 'Rejected', hint: 'Seller is notified and the listing stays hidden.' },
  ];

  return (
    <ModalShell open={open} onClose={onClose} eyebrow={product.name} title="Update status" size="modal-md">
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
          <button type="submit" className="btn btn-primary" disabled={processing || data.status === product.status}>
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

function DeleteModal({ product, open, onClose }) {
  if (!product) return null;

  const confirmDelete = () => {
    router.delete(route('admin.products.destroy', product.id), {
      preserveScroll: true,
      onSuccess: onClose,
    });
  };

  return (
    <ModalShell open={open} onClose={onClose} eyebrow="This can't be undone" title="Delete product" size="modal-md">
      <div className="modal-body px-4 pb-4 pt-0">
        <p className="mb-0 text-secondary">
          Are you sure you want to delete <span className="fw-semibold text-dark">{product.name}</span>? This will
          permanently remove it from the catalog.
        </p>
      </div>
      <div className="modal-footer border-0 bg-light d-flex justify-content-between px-4 py-3">
        <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="btn btn-danger d-flex align-items-center gap-2" onClick={confirmDelete}>
          <Icon.Trash /> Delete product
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

export default function Index({ products, counts, filters, flash }) {
  const [viewTarget, setViewTarget] = useState(null);
  const [statusTarget, setStatusTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [query, setQuery] = useState('');

  const activeStatus = filters?.status ?? 'all';

  // Falls back to counting the currently loaded page if the controller
  // didn't pass accurate platform-wide counts.
  const stats = useMemo(
    () =>
      counts ?? {
        total: products.length,
        approved: products.filter((p) => p.status === 'approved').length,
        pending: products.filter((p) => p.status === 'pending').length,
        rejected: products.filter((p) => p.status === 'rejected').length,
      },
    [products, counts]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.seller?.company_name?.toLowerCase().includes(q) ||
        p.category?.name?.toLowerCase().includes(q)
    );
  }, [products, query]);

  const goToStatus = (status) => {
    router.get(
      route('admin.products.index'),
      status === 'all' ? {} : { status },
      { preserveState: true, preserveScroll: true, replace: true }
    );
  };

  return (
    <AppLayout>
      <Head title="Products Management" />

      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
          <div>
            <h3 className="mb-1 fw-semibold text-dark">Products Management</h3>
            <p className="text-secondary mb-0 small">
              Review, approve, and manage every product listed on the platform.
            </p>
          </div>
          <Link
            href={route('admin.products.create')}
            className="btn btn-primary rounded-pill px-4 d-flex align-items-center gap-2"
          >
            <Icon.Plus /> Add product
          </Link>
        </div>

        {flash?.success && (
          <div className="alert alert-success border-0 shadow-sm rounded-3">{flash.success}</div>
        )}

        <div className="row g-3 mb-4">
          <StatCard label="Total products" value={stats.total} accent="#2757d6" />
          <StatCard label="Approved" value={stats.approved} accent="#12b76a" />
          <StatCard label="Pending" value={stats.pending} accent="#f2a900" />
          <StatCard label="Rejected" value={stats.rejected} accent="#e5493f" />
        </div>

        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-header bg-white border-0 pt-4 px-4 pb-3">
            <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
              <div className="d-flex flex-wrap gap-2">
                {['all', 'pending', 'approved', 'rejected'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`btn btn-sm text-capitalize rounded-pill px-3 ${
                      activeStatus === s ? 'btn-dark' : 'btn-outline-secondary'
                    }`}
                    onClick={() => goToStatus(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="position-relative" style={{ maxWidth: 280, width: '100%' }}>
                <span className="position-absolute text-secondary" style={{ left: 12, top: 10 }}>
                  <Icon.Search />
                </span>
                <input
                  type="text"
                  className="form-control ps-5 rounded-pill"
                  placeholder="Search product, seller, category…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr className="text-secondary small text-uppercase border-bottom bg-light">
                    <th className="px-4 py-3 fw-semibold">Product</th>
                    <th className="px-4 py-3 fw-semibold">Seller</th>
                    <th className="px-4 py-3 fw-semibold">Price</th>
                    <th className="px-4 py-3 fw-semibold">Status</th>
                    <th className="px-4 py-3 fw-semibold">Created</th>
                    <th className="px-4 py-3 fw-semibold text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={6} className="text-center text-secondary py-5">
                        <Icon.Box className="mb-2 opacity-50" />
                        <div>No products match this filter.</div>
                      </td>
                    </tr>
                  )}

                  {filtered.map((product) => (
                    <tr key={product.id}>
                      <td className="px-4 py-3">
                        <div className="d-flex align-items-center gap-3">
                          <ProductThumb src={product.image ? `/storage/${product.image}` : null} alt={product.name} />
                          <div>
                            <div className="fw-semibold text-dark">{product.name}</div>
                            <div className="small text-secondary">{product.category?.name ?? 'Uncategorized'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="d-flex align-items-center gap-2">
                          <SellerAvatar name={product.seller?.company_name} />
                          <div>
                            <div className="text-dark">{product.seller?.company_name ?? 'N/A'}</div>
                            <div className="small text-secondary">{product.seller?.address ?? ''}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 fw-semibold text-dark">{formatPrice(product.price)}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={product.status} />
                      </td>
                      <td className="px-4 py-3 text-secondary small">{formatDate(product.created_at)}</td>
                      <td className="px-4 py-3 text-end">
                        <div className="d-flex justify-content-end gap-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-primary rounded-3 d-flex align-items-center gap-2"
                            onClick={() => setViewTarget(product)}
                          >
                            <Icon.Eye /> View
                          </button>
                          <ActionsMenu
                            onStatus={() => setStatusTarget(product)}
                            onDelete={() => setDeleteTarget(product)}
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
            Showing {filtered.length} of {products.length} product{products.length === 1 ? '' : 's'}
          </div>
        </div>
      </div>

      <ViewModal product={viewTarget} open={!!viewTarget} onClose={() => setViewTarget(null)} />
      <StatusModal product={statusTarget} open={!!statusTarget} onClose={() => setStatusTarget(null)} />
      <DeleteModal product={deleteTarget} open={!!deleteTarget} onClose={() => setDeleteTarget(null)} />
    </AppLayout>
  );
}
