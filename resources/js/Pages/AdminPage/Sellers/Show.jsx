import { useState } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

const Icon = {
    ArrowLeft: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" {...p}>
            <path
                d="M19 12H5M11 6l-6 6 6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Pencil: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
            <path
                d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19 3 20l1-4L16.5 3.5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Refresh: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
            <path
                d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9M20.5 12a8.5 8.5 0 0 1-14.6 5.9M4 4v5h5M20 20v-5h-5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Trash: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
            <path
                d="M4 7h16M9 7V4.8c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8V7M6 7l.9 12.2a2 2 0 0 0 2 1.8h6.2a2 2 0 0 0 2-1.8L18 7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Mail: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" {...p}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path
                d="m3.5 6 8.5 6 8.5-6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Phone: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" {...p}>
            <path
                d="M4.5 4h3.2l1.5 4.2-2 1.8a12.5 12.5 0 0 0 5.8 5.8l1.8-2 4.2 1.5V18a2 2 0 0 1-2.2 2A16 16 0 0 1 2.5 6.2 2 2 0 0 1 4.5 4Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Pin: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" {...p}>
            <path
                d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="9.5" r="2.3" />
        </svg>
    ),

    Box: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" {...p}>
            <path
                d="M21 8 12 3 3 8l9 5 9-5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 8v8l9 5 9-5V8M12 13v8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Calendar: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" {...p}>
            <rect x="3.5" y="5" width="17" height="16" rx="2" />
            <path
                d="M8 3v4M16 3v4M3.5 10h17"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Store: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" {...p}>
            <path
                d="M4 10v9.5h16V10M3 10l1.5-6h15L21 10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 10c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    X: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" {...p}>
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
    ),

    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...p}>
            <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    Alert: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" {...p}>
            <path
                d="M12 3 2.8 19a1.4 1.4 0 0 0 1.2 2h16a1.4 1.4 0 0 0 1.2-2L12 3Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
        </svg>
    ),
};

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const AVATAR_PALETTES = [
    ['#e8f7ef', '#16845c'],
    ['#eaf2ff', '#315dcc'],
    ['#fff1e7', '#c66a18'],
    ['#f2eaff', '#7540c4'],
    ['#ffeaf0', '#c73867'],
    ['#e8f8f6', '#087d73'],
];

function paletteFor(seed = '') {
    let hash = 0;

    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }

    return AVATAR_PALETTES[Math.abs(hash) % AVATAR_PALETTES.length];
}

function initialsFor(name = '') {
    const parts = name.trim().split(/\s+/).filter(Boolean);

    if (!parts.length) return '?';

    return (
        parts[0][0] +
        (parts[1]?.[0] ?? '')
    ).toUpperCase();
}

function Avatar({ name, size = 76 }) {
    const [bg, fg] = paletteFor(name);

    return (
        <div
            className="d-flex align-items-center justify-content-center rounded-4 fw-semibold flex-shrink-0"
            style={{
                width: size,
                height: size,
                backgroundColor: bg,
                color: fg,
                fontSize: size * 0.34,
                letterSpacing: '-0.03em',
            }}
        >
            {initialsFor(name)}
        </div>
    );
}

const STATUS_META = {
    approved: {
        label: 'Approved',
        bg: '#e8f7ef',
        fg: '#16845c',
        dot: '#16a66f',
    },
    rejected: {
        label: 'Rejected',
        bg: '#ffeded',
        fg: '#c43832',
        dot: '#e45750',
    },
    pending: {
        label: 'Pending',
        bg: '#fff6df',
        fg: '#a96a00',
        dot: '#e5a600',
    },
};

function StatusBadge({ status, size = 'md' }) {
    const meta = STATUS_META[status] ?? STATUS_META.pending;

    return (
        <span
            className="d-inline-flex align-items-center gap-2 rounded-pill fw-semibold"
            style={{
                backgroundColor: meta.bg,
                color: meta.fg,
                padding: size === 'sm' ? '5px 10px' : '7px 12px',
                fontSize: size === 'sm' ? 11.5 : 12,
                lineHeight: 1,
            }}
        >
            <span
                className="rounded-circle"
                style={{
                    width: 6,
                    height: 6,
                    backgroundColor: meta.dot,
                }}
            />
            {meta.label}
        </span>
    );
}

function formatDate(value) {
    if (!value) return '—';

    try {
        return new Date(value).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } catch {
        return value;
    }
}

function formatPrice(value) {
    if (value === null || value === undefined || value === '') {
        return '—';
    }

    const numeric = Number(value);

    if (!Number.isNaN(numeric)) {
        return numeric.toLocaleString();
    }

    return value;
}

/* ------------------------------------------------------------------ */
/* Modal Shell                                                         */
/* ------------------------------------------------------------------ */

function ModalShell({
    open,
    onClose,
    title,
    eyebrow,
    children,
    size = 'modal-md',
}) {
    if (!open) return null;

    return (
        <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.68)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
            }}
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className={`modal-dialog modal-dialog-centered ${size}`}>
                <div
                    className="modal-content border-0 overflow-hidden"
                    style={{
                        borderRadius: 22,
                        boxShadow:
                            '0 24px 70px rgba(0, 0, 0, 0.14), 0 4px 16px rgba(0, 0, 0, 0.06)',
                        border: '1px solid #e5e5ea',
                    }}
                >
                    <div
                        className="modal-header border-0 px-4 pt-4 pb-3"
                        style={{ backgroundColor: '#ffffff' }}
                    >
                        <div>
                            {eyebrow && (
                                <div
                                    className="text-uppercase fw-semibold mb-1"
                                    style={{
                                        color: '#86868b',
                                        letterSpacing: '.07em',
                                        fontSize: 10.5,
                                    }}
                                >
                                    {eyebrow}
                                </div>
                            )}

                            <h5
                                className="modal-title fw-semibold mb-0"
                                style={{
                                    color: '#1d1d1f',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                {title}
                            </h5>
                        </div>

                        <button
                            type="button"
                            className="border-0 d-flex align-items-center justify-content-center rounded-circle"
                            onClick={onClose}
                            style={{
                                width: 34,
                                height: 34,
                                backgroundColor: '#f5f5f7',
                                color: '#6e6e73',
                            }}
                        >
                            <Icon.X />
                        </button>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Status Modal                                                        */
/* ------------------------------------------------------------------ */

function StatusModal({ seller, open, onClose }) {
    const { data, setData, patch, processing, reset } = useForm({
        status: seller?.status ?? 'pending',
    });

    if (!seller) return null;

    const submit = (e) => {
        e.preventDefault();

        patch(
            route('admin.sellers.updateStatus', seller.id),
            {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    onClose();
                },
            }
        );
    };

    const options = [
        {
            value: 'pending',
            label: 'Pending',
            hint: 'Seller is awaiting review.',
        },
        {
            value: 'approved',
            label: 'Approved',
            hint: 'Creates a user account and emails login credentials.',
        },
        {
            value: 'rejected',
            label: 'Rejected',
            hint: 'Seller remains hidden from buyers.',
        },
    ];

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow={seller.company_name}
            title="Update seller status"
        >
            <form onSubmit={submit}>
                <div className="modal-body px-4 pt-0 pb-4">
                    <div className="d-flex flex-column gap-2">
                        {options.map((option) => {
                            const meta = STATUS_META[option.value];
                            const active = data.status === option.value;

                            return (
                                <label
                                    key={option.value}
                                    className="d-flex align-items-start gap-3 p-3"
                                    style={{
                                        cursor: 'pointer',
                                        borderRadius: 15,
                                        border: `1px solid ${
                                            active
                                                ? meta.fg
                                                : '#e5e5ea'
                                        }`,
                                        backgroundColor: active
                                            ? meta.bg
                                            : '#ffffff',
                                        transition:
                                            'all .15s ease',
                                    }}
                                >
                                    <input
                                        type="radio"
                                        name="status"
                                        className="form-check-input mt-1"
                                        checked={active}
                                        onChange={() =>
                                            setData(
                                                'status',
                                                option.value
                                            )
                                        }
                                    />

                                    <div>
                                        <div
                                            className="fw-semibold"
                                            style={{
                                                color: '#1d1d1f',
                                                fontSize: 14,
                                            }}
                                        >
                                            {option.label}
                                        </div>

                                        <div
                                            className="small mt-1"
                                            style={{
                                                color: '#6e6e73',
                                                lineHeight: 1.45,
                                            }}
                                        >
                                            {option.hint}
                                        </div>
                                    </div>
                                </label>
                            );
                        })}
                    </div>

                    {data.status === 'approved' && (
                        <div
                            className="d-flex align-items-start gap-2 mt-3 p-3 rounded-3"
                            style={{
                                backgroundColor: '#f5f9ff',
                                color: '#315dcc',
                                border: '1px solid #dce8ff',
                            }}
                        >
                            <Icon.Alert />

                            <div
                                className="small"
                                style={{ lineHeight: 1.5 }}
                            >
                                Approving this seller may create their
                                marketplace account and send login
                                credentials by email.
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className="modal-footer border-0 px-4 py-3"
                    style={{
                        backgroundColor: '#f8f8fa',
                        borderTop: '1px solid #ededf0',
                    }}
                >
                    <button
                        type="button"
                        className="btn btn-light rounded-3 px-3"
                        onClick={onClose}
                        style={{
                            border: '1px solid #dedee3',
                            color: '#1d1d1f',
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="btn rounded-3 px-4 d-flex align-items-center gap-2"
                        disabled={
                            processing ||
                            data.status === seller.status
                        }
                        style={{
                            backgroundColor: '#0071e3',
                            color: '#ffffff',
                            border: 0,
                        }}
                    >
                        {processing && (
                            <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                            />
                        )}

                        {processing
                            ? 'Updating…'
                            : 'Update status'}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* ------------------------------------------------------------------ */
/* Edit Modal                                                          */
/* ------------------------------------------------------------------ */

function ManageModal({ seller, open, onClose }) {
    const {
        data,
        setData,
        patch,
        processing,
        errors,
        reset,
    } = useForm({
        company_name: seller?.company_name ?? '',
        email: seller?.email ?? '',
        phone: seller?.phone ?? '',
        address: seller?.address ?? '',
        description: seller?.description ?? '',
    });

    if (!seller) return null;

    const submit = (e) => {
        e.preventDefault();

        patch(
            route('admin.sellers.update', seller.id),
            {
                preserveScroll: true,
                onSuccess: () => {
                    reset();
                    onClose();
                },
            }
        );
    };

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow={`Seller #${seller.id}`}
            title="Edit seller profile"
            size="modal-lg"
        >
            <form onSubmit={submit}>
                <div className="modal-body px-4 pt-0 pb-4">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">
                                Company name
                            </label>

                            <input
                                type="text"
                                className={`form-control ${
                                    errors.company_name
                                        ? 'is-invalid'
                                        : ''
                                }`}
                                value={data.company_name}
                                onChange={(e) =>
                                    setData(
                                        'company_name',
                                        e.target.value
                                    )
                                }
                                style={{
                                    borderRadius: 12,
                                    padding: '11px 13px',
                                    borderColor: '#d8d8dd',
                                }}
                            />

                            {errors.company_name && (
                                <div className="invalid-feedback">
                                    {errors.company_name}
                                </div>
                            )}
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                className={`form-control ${
                                    errors.email
                                        ? 'is-invalid'
                                        : ''
                                }`}
                                value={data.email}
                                onChange={(e) =>
                                    setData(
                                        'email',
                                        e.target.value
                                    )
                                }
                                style={{
                                    borderRadius: 12,
                                    padding: '11px 13px',
                                    borderColor: '#d8d8dd',
                                }}
                            />

                            {errors.email && (
                                <div className="invalid-feedback">
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">
                                Phone
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={data.phone}
                                onChange={(e) =>
                                    setData(
                                        'phone',
                                        e.target.value
                                    )
                                }
                                style={{
                                    borderRadius: 12,
                                    padding: '11px 13px',
                                    borderColor: '#d8d8dd',
                                }}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">
                                Address
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={data.address}
                                onChange={(e) =>
                                    setData(
                                        'address',
                                        e.target.value
                                    )
                                }
                                style={{
                                    borderRadius: 12,
                                    padding: '11px 13px',
                                    borderColor: '#d8d8dd',
                                }}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">
                                Description
                            </label>

                            <textarea
                                rows="4"
                                className="form-control"
                                value={data.description}
                                onChange={(e) =>
                                    setData(
                                        'description',
                                        e.target.value
                                    )
                                }
                                style={{
                                    borderRadius: 12,
                                    padding: '11px 13px',
                                    borderColor: '#d8d8dd',
                                    resize: 'vertical',
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="modal-footer border-0 px-4 py-3"
                    style={{
                        backgroundColor: '#f8f8fa',
                        borderTop: '1px solid #ededf0',
                    }}
                >
                    <button
                        type="button"
                        className="btn btn-light rounded-3 px-3"
                        onClick={onClose}
                        style={{
                            border: '1px solid #dedee3',
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="btn rounded-3 px-4"
                        disabled={processing}
                        style={{
                            backgroundColor: '#0071e3',
                            color: '#ffffff',
                            border: 0,
                        }}
                    >
                        {processing
                            ? 'Saving…'
                            : 'Save changes'}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* ------------------------------------------------------------------ */
/* Delete Modal                                                        */
/* ------------------------------------------------------------------ */

function DeleteModal({ seller, open, onClose }) {
    if (!seller) return null;

    const [deleting, setDeleting] = useState(false);

    const confirmDelete = () => {
        setDeleting(true);

        router.delete(
            route('admin.sellers.destroy', seller.id),
            {
                preserveScroll: true,
                onSuccess: () => {
                    router.visit(
                        route('admin.sellers.index')
                    );
                },
                onFinish: () => {
                    setDeleting(false);
                },
            }
        );
    };

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow="Permanent action"
            title="Delete seller"
        >
            <div className="modal-body px-4 pt-0 pb-4">
                <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle"
                    style={{
                        width: 58,
                        height: 58,
                        backgroundColor: '#fff0ef',
                        color: '#d6453d',
                    }}
                >
                    <Icon.Trash width={21} height={21} />
                </div>

                <div className="text-center">
                    <h6
                        className="fw-semibold mb-2"
                        style={{ color: '#1d1d1f' }}
                    >
                        Remove this seller?
                    </h6>

                    <p
                        className="mb-0"
                        style={{
                            color: '#6e6e73',
                            lineHeight: 1.55,
                        }}
                    >
                        You are about to permanently delete{' '}
                        <strong style={{ color: '#1d1d1f' }}>
                            {seller.company_name}
                        </strong>{' '}
                        and its associated records.
                    </p>
                </div>
            </div>

            <div
                className="modal-footer border-0 px-4 py-3"
                style={{
                    backgroundColor: '#f8f8fa',
                    borderTop: '1px solid #ededf0',
                }}
            >
                <button
                    type="button"
                    className="btn btn-light rounded-3 px-3"
                    onClick={onClose}
                    disabled={deleting}
                    style={{
                        border: '1px solid #dedee3',
                    }}
                >
                    Cancel
                </button>

                <button
                    type="button"
                    className="btn rounded-3 px-4 d-flex align-items-center gap-2"
                    onClick={confirmDelete}
                    disabled={deleting}
                    style={{
                        backgroundColor: '#d6453d',
                        color: '#ffffff',
                        border: 0,
                    }}
                >
                    {deleting && (
                        <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                        />
                    )}

                    {deleting
                        ? 'Deleting…'
                        : 'Delete seller'}
                </button>
            </div>
        </ModalShell>
    );
}

/* ------------------------------------------------------------------ */
/* Info Item                                                           */
/* ------------------------------------------------------------------ */

function InfoItem({ icon, label, value }) {
    return (
        <div
            className="d-flex align-items-start gap-3 py-3"
            style={{
                borderBottom: '1px solid #eeeeF0',
            }}
        >
            <div
                className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                style={{
                    width: 38,
                    height: 38,
                    backgroundColor: '#f5f5f7',
                    color: '#6e6e73',
                }}
            >
                {icon}
            </div>

            <div className="min-w-0">
                <div
                    className="small fw-semibold mb-1"
                    style={{ color: '#86868b' }}
                >
                    {label}
                </div>

                <div
                    className="text-break"
                    style={{
                        color: '#1d1d1f',
                        fontSize: 14,
                    }}
                >
                    {value || 'Not provided'}
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Stat Card                                                           */
/* ------------------------------------------------------------------ */

function MiniStat({ icon, label, value }) {
    return (
        <div
            className="d-flex align-items-center gap-3 p-3 h-100"
            style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8e8eb',
                borderRadius: 16,
            }}
        >
            <div
                className="d-flex align-items-center justify-content-center rounded-3"
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#f5f5f7',
                    color: '#6e6e73',
                }}
            >
                {icon}
            </div>

            <div>
                <div
                    className="fw-semibold"
                    style={{
                        color: '#1d1d1f',
                        fontSize: 18,
                        letterSpacing: '-0.02em',
                    }}
                >
                    {value}
                </div>

                <div
                    style={{
                        color: '#86868b',
                        fontSize: 12,
                    }}
                >
                    {label}
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Product Row                                                         */
/* ------------------------------------------------------------------ */

function ProductRow({ product }) {
    return (
        <tr>
            <td
                className="py-3"
                style={{ minWidth: 230 }}
            >
                <div className="d-flex align-items-center gap-3">
                    <div
                        className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                        style={{
                            width: 42,
                            height: 42,
                            backgroundColor: '#f5f5f7',
                            color: '#86868b',
                        }}
                    >
                        <Icon.Box />
                    </div>

                    <div className="min-w-0">
                        <div
                            className="fw-semibold text-truncate"
                            style={{
                                color: '#1d1d1f',
                                maxWidth: 280,
                            }}
                        >
                            {product.name}
                        </div>

                        {product.category?.name && (
                            <div
                                className="small mt-1"
                                style={{ color: '#86868b' }}
                            >
                                {product.category.name}
                            </div>
                        )}
                    </div>
                </div>
            </td>

            <td
                className="py-3"
                style={{
                    color: '#6e6e73',
                    whiteSpace: 'nowrap',
                }}
            >
                {formatPrice(product.price)}
            </td>

            <td className="py-3">
                <StatusBadge
                    status={product.status ?? 'pending'}
                    size="sm"
                />
            </td>
        </tr>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Show({ seller, flash }) {
    const [statusOpen, setStatusOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const products = Array.isArray(seller.products)
        ? seller.products
        : [];

    const productsCount =
        seller.products_count ??
        products.length ??
        0;

    const approvedProducts = products.filter(
        (product) => product.status === 'approved'
    ).length;

    return (
        <AppLayout>
            <Head title={`${seller.company_name} · Seller`} />

            <div
                className="min-vh-100"
                style={{
                    backgroundColor: '#f5f5f7',
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    color: '#1d1d1f',
                }}
            >
                <div
                    className="container-fluid px-3 px-md-4 py-4"
                    style={{ maxWidth: 1180 }}
                >
                    {/* Back navigation */}
                    <Link
                        href={route('admin.sellers.index')}
                        className="d-inline-flex align-items-center gap-2 text-decoration-none mb-4"
                        style={{
                            color: '#6e6e73',
                            fontSize: 13,
                            fontWeight: 600,
                        }}
                    >
                        <Icon.ArrowLeft />
                        Sellers
                    </Link>

                    {/* Flash message */}
                    {flash?.success && (
                        <div
                            className="d-flex align-items-center gap-2 mb-4 px-3 py-3 rounded-4"
                            style={{
                                backgroundColor: '#eaf8f0',
                                color: '#16845c',
                                border: '1px solid #d1f0df',
                                fontSize: 13,
                            }}
                        >
                            <Icon.Check />
                            <span>{flash.success}</span>
                        </div>
                    )}

                    {/* Hero */}
                    <section
                        className="mb-4 overflow-hidden"
                        style={{
                            backgroundColor: '#ffffff',
                            border: '1px solid #e6e6e9',
                            borderRadius: 22,
                            boxShadow:
                                '0 8px 28px rgba(0,0,0,.045)',
                        }}
                    >
                        <div className="p-4 p-md-5">
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
                                <div className="d-flex align-items-center gap-3">
                                    <Avatar
                                        name={seller.company_name}
                                        size={82}
                                    />

                                    <div>
                                        <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                                            <h1
                                                className="mb-0 fw-semibold"
                                                style={{
                                                    fontSize: 'clamp(23px, 3vw, 32px)',
                                                    letterSpacing:
                                                        '-0.035em',
                                                    color: '#1d1d1f',
                                                }}
                                            >
                                                {seller.company_name}
                                            </h1>

                                            <StatusBadge
                                                status={
                                                    seller.status
                                                }
                                            />
                                        </div>

                                        <div
                                            className="d-flex align-items-center gap-2 flex-wrap"
                                            style={{
                                                color: '#86868b',
                                                fontSize: 13,
                                            }}
                                        >
                                            <span>
                                                Seller #
                                                {seller.id}
                                            </span>

                                            <span>•</span>

                                            <span>
                                                Joined{' '}
                                                {formatDate(
                                                    seller.created_at
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-wrap gap-2">
                                    <button
                                        type="button"
                                        className="btn rounded-3 d-flex align-items-center gap-2"
                                        onClick={() =>
                                            setStatusOpen(
                                                true
                                            )
                                        }
                                        style={{
                                            backgroundColor:
                                                '#f5f5f7',
                                            color: '#1d1d1f',
                                            border: '1px solid #dedee3',
                                            padding:
                                                '10px 14px',
                                            fontSize: 13,
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Icon.Refresh />
                                        Status
                                    </button>

                                    <button
                                        type="button"
                                        className="btn rounded-3 d-flex align-items-center gap-2"
                                        onClick={() =>
                                            setEditOpen(true)
                                        }
                                        style={{
                                            backgroundColor:
                                                '#0071e3',
                                            color: '#ffffff',
                                            border: 0,
                                            padding:
                                                '10px 15px',
                                            fontSize: 13,
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Icon.Pencil />
                                        Edit profile
                                    </button>

                                    <button
                                        type="button"
                                        className="btn rounded-3 d-flex align-items-center gap-2"
                                        onClick={() =>
                                            setDeleteOpen(
                                                true
                                            )
                                        }
                                        style={{
                                            backgroundColor:
                                                '#fff4f3',
                                            color: '#d6453d',
                                            border: '1px solid #f5d5d2',
                                            padding:
                                                '10px 14px',
                                            fontSize: 13,
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Icon.Trash />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick stats */}
                        <div
                            className="px-4 px-md-5 py-3"
                            style={{
                                backgroundColor: '#fafafa',
                                borderTop:
                                    '1px solid #eeeeF0',
                            }}
                        >
                            <div className="row g-3">
                                <div className="col-12 col-sm-4">
                                    <MiniStat
                                        icon={<Icon.Box />}
                                        label="Products listed"
                                        value={productsCount}
                                    />
                                </div>

                                <div className="col-12 col-sm-4">
                                    <MiniStat
                                        icon={<Icon.Check />}
                                        label="Approved products"
                                        value={
                                            approvedProducts
                                        }
                                    />
                                </div>

                                <div className="col-12 col-sm-4">
                                    <MiniStat
                                        icon={<Icon.Calendar />}
                                        label="Member since"
                                        value={
                                            seller.created_at
                                                ? new Date(
                                                      seller.created_at
                                                  ).getFullYear()
                                                : '—'
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Main content */}
                    <div className="row g-4">
                        {/* Company information */}
                        <div className="col-lg-4">
                            <div
                                className="h-100 p-4"
                                style={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e6e6e9',
                                    borderRadius: 20,
                                    boxShadow:
                                        '0 6px 24px rgba(0,0,0,.035)',
                                }}
                            >
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-3"
                                        style={{
                                            width: 34,
                                            height: 34,
                                            backgroundColor:
                                                '#eef5ff',
                                            color: '#0071e3',
                                        }}
                                    >
                                        <Icon.Store />
                                    </div>

                                    <h5
                                        className="mb-0 fw-semibold"
                                        style={{
                                            fontSize: 16,
                                            letterSpacing:
                                                '-0.02em',
                                        }}
                                    >
                                        Company details
                                    </h5>
                                </div>

                                <p
                                    className="small mb-2"
                                    style={{
                                        color: '#86868b',
                                    }}
                                >
                                    Contact and account
                                    information
                                </p>

                                <InfoItem
                                    icon={<Icon.Mail />}
                                    label="Email"
                                    value={seller.email}
                                />

                                <InfoItem
                                    icon={<Icon.Phone />}
                                    label="Phone"
                                    value={seller.phone}
                                />

                                <InfoItem
                                    icon={<Icon.Pin />}
                                    label="Address"
                                    value={seller.address}
                                />

                                <InfoItem
                                    icon={<Icon.Box />}
                                    label="Products listed"
                                    value={productsCount}
                                />

                                <div className="d-flex align-items-start gap-3 pt-3">
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                                        style={{
                                            width: 38,
                                            height: 38,
                                            backgroundColor:
                                                '#f5f5f7',
                                            color: '#6e6e73',
                                        }}
                                    >
                                        <Icon.Calendar />
                                    </div>

                                    <div>
                                        <div
                                            className="small fw-semibold mb-1"
                                            style={{
                                                color: '#86868b',
                                            }}
                                        >
                                            Joined
                                        </div>

                                        <div
                                            style={{
                                                color: '#1d1d1f',
                                                fontSize: 14,
                                            }}
                                        >
                                            {formatDate(
                                                seller.created_at
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company content */}
                        <div className="col-lg-8">
                            {/* About */}
                            <div
                                className="p-4 mb-4"
                                style={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e6e6e9',
                                    borderRadius: 20,
                                    boxShadow:
                                        '0 6px 24px rgba(0,0,0,.035)',
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h5
                                            className="fw-semibold mb-1"
                                            style={{
                                                fontSize: 16,
                                                letterSpacing:
                                                    '-0.02em',
                                            }}
                                        >
                                            About the company
                                        </h5>

                                        <div
                                            className="small"
                                            style={{
                                                color: '#86868b',
                                            }}
                                        >
                                            Seller description
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="p-3 rounded-4"
                                    style={{
                                        backgroundColor:
                                            '#f8f8fa',
                                        color: '#424245',
                                        fontSize: 14,
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {seller.description ||
                                        'No description has been provided for this seller.'}
                                </div>
                            </div>

                            {/* Products */}
                            <div
                                className="overflow-hidden"
                                style={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e6e6e9',
                                    borderRadius: 20,
                                    boxShadow:
                                        '0 6px 24px rgba(0,0,0,.035)',
                                }}
                            >
                                <div className="p-4">
                                    <div className="d-flex align-items-center justify-content-between gap-3">
                                        <div>
                                            <h5
                                                className="fw-semibold mb-1"
                                                style={{
                                                    fontSize: 16,
                                                    letterSpacing:
                                                        '-0.02em',
                                                }}
                                            >
                                                Products
                                            </h5>

                                            <div
                                                className="small"
                                                style={{
                                                    color: '#86868b',
                                                }}
                                            >
                                                Items listed by this
                                                seller
                                            </div>
                                        </div>

                                        <span
                                            className="rounded-pill px-3 py-2 fw-semibold"
                                            style={{
                                                backgroundColor:
                                                    '#f5f5f7',
                                                color: '#6e6e73',
                                                fontSize: 12,
                                            }}
                                        >
                                            {productsCount} total
                                        </span>
                                    </div>
                                </div>

                                {products.length === 0 ? (
                                    <div
                                        className="text-center px-4 py-5"
                                        style={{
                                            borderTop:
                                                '1px solid #eeeeF0',
                                        }}
                                    >
                                        <div
                                            className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle"
                                            style={{
                                                width: 54,
                                                height: 54,
                                                backgroundColor:
                                                    '#f5f5f7',
                                                color: '#86868b',
                                            }}
                                        >
                                            <Icon.Box />
                                        </div>

                                        <div
                                            className="fw-semibold mb-1"
                                            style={{
                                                color: '#1d1d1f',
                                            }}
                                        >
                                            No products yet
                                        </div>

                                        <div
                                            className="small"
                                            style={{
                                                color: '#86868b',
                                            }}
                                        >
                                            This seller has not
                                            listed any products.
                                        </div>
                                    </div>
                                ) : (
                                    <div className="table-responsive">
                                        <table
                                            className="table align-middle mb-0"
                                            style={{
                                                fontSize: 13,
                                            }}
                                        >
                                            <thead>
                                                <tr
                                                    style={{
                                                        backgroundColor:
                                                            '#fafafa',
                                                        borderTop:
                                                            '1px solid #eeeeF0',
                                                        borderBottom:
                                                            '1px solid #eeeeF0',
                                                    }}
                                                >
                                                    <th
                                                        className="px-4 py-3"
                                                        style={{
                                                            color: '#86868b',
                                                            fontSize: 10.5,
                                                            letterSpacing:
                                                                '.06em',
                                                            textTransform:
                                                                'uppercase',
                                                        }}
                                                    >
                                                        Product
                                                    </th>

                                                    <th
                                                        className="py-3"
                                                        style={{
                                                            color: '#86868b',
                                                            fontSize: 10.5,
                                                            letterSpacing:
                                                                '.06em',
                                                            textTransform:
                                                                'uppercase',
                                                        }}
                                                    >
                                                        Price
                                                    </th>

                                                    <th
                                                        className="pe-4 py-3"
                                                        style={{
                                                            color: '#86868b',
                                                            fontSize: 10.5,
                                                            letterSpacing:
                                                                '.06em',
                                                            textTransform:
                                                                'uppercase',
                                                        }}
                                                    >
                                                        Status
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {products.map(
                                                    (product) => (
                                                        <ProductRow
                                                            key={
                                                                product.id
                                                            }
                                                            product={
                                                                product
                                                            }
                                                        />
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <StatusModal
                seller={
                    statusOpen
                        ? seller
                        : null
                }
                open={statusOpen}
                onClose={() =>
                    setStatusOpen(false)
                }
            />

            <ManageModal
                seller={
                    editOpen
                        ? seller
                        : null
                }
                open={editOpen}
                onClose={() =>
                    setEditOpen(false)
                }
            />

            <DeleteModal
                seller={
                    deleteOpen
                        ? seller
                        : null
                }
                open={deleteOpen}
                onClose={() =>
                    setDeleteOpen(false)
                }
            />
        </AppLayout>
    );
}