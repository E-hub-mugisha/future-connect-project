import { useMemo, useState } from 'react';
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
  Box: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" {...p}>
      <path d="M21 8 12 3 3 8l9 5 9-5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Layers: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3 13 9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Building: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <path d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M13 21v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v9M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Stack: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
      <rect x="4" y="4" width="16" height="6" rx="1.5" />
      <rect x="4" y="14" width="16" height="6" rx="1.5" />
    </svg>
  ),
  Star: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" {...p}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3 6.2 20.4l1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

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
      style={{ backgroundColor: meta.bg, color: meta.fg, padding: '6px 14px', fontSize: 13 }}
    >
      <span className="rounded-circle" style={{ width: 6, height: 6, backgroundColor: meta.dot }} />
      {meta.label}
    </span>
  );
}

function formatPrice(value) {
  const num = Number(value);
  return Number.isFinite(num) ? `$${num.toFixed(2)}` : '—';
}

function formatDate(value) {
  if (!value) return '—';
  try {
    return new Date(value).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return value;
  }
}

function initialsFor(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase();
}

/** Five-star rating with fractional fill (e.g. 3.7 stars), no half-icon hack needed. */
function StarRating({ rating = 0, size = 15, showValue = false }) {
  const pct = Math.max(0, Math.min(1, rating / 5)) * 100;
  const stars = Array.from({ length: 5 });

  return (
    <span className="d-inline-flex align-items-center gap-2">
      <span className="position-relative d-inline-flex" style={{ lineHeight: 0 }}>
        <span className="d-inline-flex" style={{ color: '#e5e7eb', gap: 2 }}>
          {stars.map((_, i) => (
            <Icon.Star key={i} width={size} height={size} />
          ))}
        </span>
        <span
          className="position-absolute top-0 start-0 d-inline-flex overflow-hidden"
          style={{ width: `${pct}%`, color: '#f2a900', gap: 2 }}
        >
          {stars.map((_, i) => (
            <Icon.Star key={i} width={size} height={size} />
          ))}
        </span>
      </span>
      {showValue && <span className="small text-secondary">{rating.toFixed(1)}</span>}
    </span>
  );
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
    <ModalShell open={open} onClose={onClose} eyebrow={product.name} title="Update status">
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
      onSuccess: () => router.visit(route('admin.products.index')),
    });
  };

  return (
    <ModalShell open={open} onClose={onClose} eyebrow="This can't be undone" title="Delete product">
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
/*  Review card                                                        */
/* ------------------------------------------------------------------ */

function ReviewCard({ review }) {
  const avatarSrc = review.user?.profile_image ? `/storage/${review.user.profile_image}` : null;

  return (
    <div className="d-flex gap-3 py-3 border-bottom">
      {avatarSrc ? (
        <img src={avatarSrc} alt={review.user?.name} className="rounded-3 flex-shrink-0" style={{ width: 42, height: 42, objectFit: 'cover' }} />
      ) : (
        <div
          className="d-flex align-items-center justify-content-center rounded-3 fw-semibold flex-shrink-0"
          style={{ width: 42, height: 42, backgroundColor: '#eef1ff', color: '#3b4bc7', fontSize: 13 }}
        >
          {initialsFor(review.user?.name ?? '?')}
        </div>
      )}
      <div className="flex-grow-1">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-1">
          <div className="fw-semibold text-dark">{review.user?.name ?? 'Anonymous'}</div>
          <StarRating rating={review.rating ?? 0} size={13} />
        </div>
        <p className="text-secondary mb-0 mt-1" style={{ lineHeight: 1.6 }}>
          {review.comment}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Show({ product }) {
  const [statusOpen, setStatusOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // Defensive guard: if `product` (or `product.id`) is missing — e.g. the
  // controller wrapped it in an API Resource under `.data`, or a scoped
  // query dropped the `id` column — render a clear message instead of
  // crashing on route(...) calls below.
  if (!product?.id) {
    return (
      <AppLayout>
        <Head title="Product not found" />
        <div className="container-fluid py-4" style={{ maxWidth: 700 }}>
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 text-center">
              <Icon.Box className="text-secondary opacity-50 mb-2" />
              <h5 className="fw-semibold text-dark mb-2">Product data is missing an ID</h5>
              <p className="text-secondary mb-3">
                The <code>product</code> prop sent to this page doesn&apos;t include an <code>id</code>. Check
                that your controller passes the raw model (not wrapped in an API Resource&apos;s <code>data</code> key)
                and that any <code>select()</code> on the query includes <code>id</code>.
              </p>
              <Link href={route('admin.products.index')} className="btn btn-primary rounded-3">
                Back to products
              </Link>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  const reviews = product.reviews ?? [];
  const reviewsCount = product.reviews_count ?? reviews.length;
  const averageRating = useMemo(() => {
    if (product.average_rating != null) return Number(product.average_rating);
    if (!reviews.length) return 0;
    return reviews.reduce((sum, r) => sum + (r.rating ?? 0), 0) / reviews.length;
  }, [product.average_rating, reviews]);

  const imageSrc = product.image ? `/storage/${product.image}` : null;

  return (
    <AppLayout>
      <Head title={product.name} />

      <div className="container-fluid py-4" style={{ maxWidth: 1100 }}>
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-3">
          <div>
            <Link
              href={route('admin.products.index')}
              className="d-inline-flex align-items-center gap-2 text-secondary text-decoration-none small fw-semibold mb-2"
            >
              <Icon.ArrowLeft /> Back to products
            </Link>
            <h3 className="fw-semibold text-dark mb-0">Product details</h3>
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <button
              type="button"
              className="btn btn-outline-primary d-flex align-items-center gap-2 rounded-3"
              onClick={() => setStatusOpen(true)}
            >
              <Icon.Refresh /> Update status
            </button>
            <Link
              href={route('admin.products.edit', product.id)}
              className="btn btn-primary d-flex align-items-center gap-2 rounded-3"
            >
              <Icon.Pencil /> Edit
            </Link>
            <button
              type="button"
              className="btn btn-outline-danger d-flex align-items-center gap-2 rounded-3"
              onClick={() => setDeleteOpen(true)}
            >
              <Icon.Trash /> Delete
            </button>
          </div>
        </div>

        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4">
            <div className="row g-4">
              {/* Gallery */}
              <div className="col-lg-5">
                <div className="rounded-4 overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
                  {imageSrc ? (
                    <img src={imageSrc} alt={product.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  ) : (
                    <div
                      className="w-100 h-100 d-flex align-items-center justify-content-center text-secondary"
                      style={{ backgroundColor: '#f3f4f6' }}
                    >
                      <Icon.Box />
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="col-lg-7">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <StatusBadge status={product.status} />
                  <span className="text-secondary small">Product #{product.id}</span>
                </div>

                <h2 className="fw-semibold text-dark mb-2">{product.name}</h2>

                <div className="d-flex align-items-center gap-2 mb-3">
                  <StarRating rating={averageRating} showValue />
                  <span className="text-secondary small">({reviewsCount} review{reviewsCount === 1 ? '' : 's'})</span>
                </div>

                <div className="fs-3 fw-bold text-primary mb-3">{formatPrice(product.price)}</div>

                <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                  {product.description}
                </p>

                <div className="row g-3 mt-1">
                  <div className="col-6">
                    <div className="p-3 rounded-3 border h-100">
                      <div className="d-flex align-items-center gap-2 text-secondary small fw-semibold mb-1">
                        <Icon.Layers /> Category
                      </div>
                      <div className="text-dark fw-semibold">{product.category?.name ?? 'Uncategorized'}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-3 border h-100">
                      <div className="d-flex align-items-center gap-2 text-secondary small fw-semibold mb-1">
                        <Icon.Building /> Seller
                      </div>
                      <div className="text-dark fw-semibold">{product.seller?.company_name ?? 'N/A'}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-3 border h-100">
                      <div className="d-flex align-items-center gap-2 text-secondary small fw-semibold mb-1">
                        <Icon.Stack /> Stock
                      </div>
                      <div className="text-dark fw-semibold">{product.stock ?? '—'}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-3 border h-100">
                      <div className="text-secondary small fw-semibold mb-1">Listed on</div>
                      <div className="text-dark fw-semibold">{formatDate(product.created_at)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-7 order-lg-1 order-2">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <h5 className="fw-semibold text-dark mb-3">Full description</h5>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.7 }}>
                  {product.description}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 order-lg-2 order-1">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <h5 className="fw-semibold text-dark mb-3">Customer reviews ({reviewsCount})</h5>
                {reviews.length === 0 ? (
                  <div className="text-center text-secondary py-4 small">No reviews yet.</div>
                ) : (
                  <div>
                    {reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <StatusModal product={statusOpen ? product : null} open={statusOpen} onClose={() => setStatusOpen(false)} />
      <DeleteModal product={deleteOpen ? product : null} open={deleteOpen} onClose={() => setDeleteOpen(false)} />
    </AppLayout>
  );
}