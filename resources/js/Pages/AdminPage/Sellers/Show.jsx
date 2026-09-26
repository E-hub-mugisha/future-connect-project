import { useEffect, useState } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* ================================================================
   LIGHT / APPLE STYLE
================================================================ */

const FONT_STACK =
    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

/* ================================================================
   ICONS
================================================================ */

const Icon = {
    ArrowLeft: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
            <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    Pencil: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" {...p}>
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19 3 20l1-4L16.5 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    Refresh: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" {...p}>
            <path d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9M20.5 12a8.5 8.5 0 0 1-14.6 5.9M4 4v5h5M20 20v-5h-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    Trash: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" {...p}>
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
            <path d="M8 3v4M16 3v4M3.5 10h17" strokeLinecap="round" />
        </svg>
    ),

    Store: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" {...p}>
            <path d="M4 10v9.5h16V10M3 10l1.5-6h15L21 10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 10c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    X: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" {...p}>
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
    ),

    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" {...p}>
            <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    Alert: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" {...p}>
            <path d="M12 3 2.8 19a1.4 1.4 0 0 0 1.2 2h16a1.4 1.4 0 0 0 1.2-2L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
        </svg>
    ),

    ChevronRight: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15" {...p}>
            <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

/* ================================================================
   HELPERS
================================================================ */

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

/* ================================================================
   AVATAR
================================================================ */

function Avatar({ name, size = 72 }) {
    const [bg, fg] = paletteFor(name);

    return (
        <div
            className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-4 fw-semibold"
            style={{
                width: size,
                height: size,
                backgroundColor: bg,
                color: fg,
                fontSize: size * 0.31,
                letterSpacing: '-0.04em',
            }}
        >
            {initialsFor(name)}
        </div>
    );
}

/* ================================================================
   STATUS
================================================================ */

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

function StatusBadge({ status, small = false }) {
    const meta = STATUS_META[status] ?? STATUS_META.pending;

    return (
        <span
            className="d-inline-flex align-items-center gap-2 rounded-pill fw-semibold"
            style={{
                backgroundColor: meta.bg,
                color: meta.fg,
                padding: small ? '5px 9px' : '6px 10px',
                fontSize: small ? 10.5 : 11.5,
                lineHeight: 1,
            }}
        >
            <span
                className="rounded-circle"
                style={{
                    width: 5,
                    height: 5,
                    backgroundColor: meta.dot,
                }}
            />

            {meta.label}
        </span>
    );
}

/* ================================================================
   MODAL
================================================================ */

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
                backgroundColor: 'rgba(245,245,247,.82)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                fontFamily: FONT_STACK,
                colorScheme: 'light',
                zIndex: 1055,
            }}
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className={`modal-dialog modal-dialog-centered ${size}`}>
                <div
                    className="modal-content border-0 overflow-hidden"
                    style={{
                        borderRadius: 20,
                        backgroundColor: '#fff',
                        color: '#1d1d1f',
                        boxShadow:
                            '0 24px 70px rgba(0,0,0,.14), 0 4px 16px rgba(0,0,0,.05)',
                        border: '1px solid #e4e4e7',
                    }}
                >
                    <div
                        className="modal-header border-0 px-4 pt-4 pb-3"
                        style={{ backgroundColor: '#fff' }}
                    >
                        <div>
                            {eyebrow && (
                                <div
                                    className="text-uppercase fw-semibold mb-1"
                                    style={{
                                        color: '#8e8e93',
                                        letterSpacing: '.07em',
                                        fontSize: 9.5,
                                    }}
                                >
                                    {eyebrow}
                                </div>
                            )}

                            <h5
                                className="mb-0 fw-semibold"
                                style={{
                                    color: '#1d1d1f',
                                    fontSize: 17,
                                    letterSpacing: '-.025em',
                                }}
                            >
                                {title}
                            </h5>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="border-0 rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                width: 32,
                                height: 32,
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

/* ================================================================
   STATUS MODAL
================================================================ */

function StatusModal({ seller, open, onClose }) {
    const { data, setData, patch, processing, reset } = useForm({
        status: seller?.status ?? 'pending',
    });

    useEffect(() => {
        if (seller) {
            setData('status', seller.status ?? 'pending');
        }
    }, [seller?.id]);

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
            hint: 'Seller can operate on the marketplace.',
        },
        {
            value: 'rejected',
            label: 'Rejected',
            hint: 'Seller remains unavailable to buyers.',
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
                <div className="modal-body px-4 pt-1 pb-4">
                    <div className="d-flex flex-column gap-2">
                        {options.map((option) => {
                            const meta = STATUS_META[option.value];
                            const active =
                                data.status === option.value;

                            return (
                                <label
                                    key={option.value}
                                    className="d-flex align-items-start gap-3 p-3"
                                    style={{
                                        cursor: 'pointer',
                                        borderRadius: 14,
                                        border: `1px solid ${
                                            active
                                                ? meta.fg
                                                : '#e5e5ea'
                                        }`,
                                        backgroundColor: active
                                            ? meta.bg
                                            : '#fff',
                                    }}
                                >
                                    <input
                                        type="radio"
                                        name="seller_status"
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
                                                fontSize: 13,
                                                color: '#1d1d1f',
                                            }}
                                        >
                                            {option.label}
                                        </div>

                                        <div
                                            className="mt-1"
                                            style={{
                                                fontSize: 12,
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
                                backgroundColor: '#f2f7ff',
                                color: '#315dcc',
                                border: '1px solid #dce8ff',
                                fontSize: 12,
                            }}
                        >
                            <Icon.Alert />

                            <span style={{ lineHeight: 1.5 }}>
                                Approving this seller may create their
                                marketplace account and send login
                                credentials by email.
                            </span>
                        </div>
                    )}
                </div>

                <div
                    className="modal-footer border-0 px-4 py-3"
                    style={{
                        backgroundColor: '#fafafa',
                        borderTop: '1px solid #eeeeF0',
                    }}
                >
                    <button
                        type="button"
                        className="btn rounded-3 px-3"
                        onClick={onClose}
                        style={{
                            backgroundColor: '#fff',
                            border: '1px solid #dedee3',
                            color: '#1d1d1f',
                            fontSize: 12,
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
                            color: '#fff',
                            border: 0,
                            fontSize: 12,
                            fontWeight: 600,
                        }}
                    >
                        {processing && (
                            <span className="spinner-border spinner-border-sm" />
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

/* ================================================================
   EDIT MODAL
================================================================ */

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

    useEffect(() => {
        if (seller) {
            setData({
                company_name: seller.company_name ?? '',
                email: seller.email ?? '',
                phone: seller.phone ?? '',
                address: seller.address ?? '',
                description: seller.description ?? '',
            });
        }
    }, [seller?.id]);

    if (!seller) return null;

    const inputStyle = {
        borderRadius: 11,
        padding: '10px 12px',
        border: '1px solid #dcdce1',
        backgroundColor: '#fff',
        color: '#1d1d1f',
        fontSize: 13,
        boxShadow: 'none',
    };

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
                <div className="modal-body px-4 pt-1 pb-4">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label small fw-semibold">
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
                                style={inputStyle}
                            />

                            {errors.company_name && (
                                <div className="invalid-feedback">
                                    {errors.company_name}
                                </div>
                            )}
                        </div>

                        <div className="col-md-6">
                            <label className="form-label small fw-semibold">
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
                                style={inputStyle}
                            />

                            {errors.email && (
                                <div className="invalid-feedback">
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        <div className="col-md-6">
                            <label className="form-label small fw-semibold">
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
                                style={inputStyle}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label small fw-semibold">
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
                                style={inputStyle}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label small fw-semibold">
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
                                    ...inputStyle,
                                    resize: 'vertical',
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="modal-footer border-0 px-4 py-3"
                    style={{
                        backgroundColor: '#fafafa',
                        borderTop: '1px solid #eeeeF0',
                    }}
                >
                    <button
                        type="button"
                        className="btn rounded-3 px-3"
                        onClick={onClose}
                        style={{
                            backgroundColor: '#fff',
                            border: '1px solid #dedee3',
                            color: '#1d1d1f',
                            fontSize: 12,
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
                            color: '#fff',
                            border: 0,
                            fontSize: 12,
                            fontWeight: 600,
                        }}
                    >
                        {processing ? 'Saving…' : 'Save changes'}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* ================================================================
   DELETE MODAL
================================================================ */

function DeleteModal({ seller, open, onClose }) {
    const [deleting, setDeleting] = useState(false);

    if (!seller) return null;

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
            <div className="modal-body px-4 pt-2 pb-4">
                <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle"
                    style={{
                        width: 54,
                        height: 54,
                        backgroundColor: '#fff0ef',
                        color: '#d6453d',
                    }}
                >
                    <Icon.Trash width={20} height={20} />
                </div>

                <div className="text-center">
                    <h6
                        className="fw-semibold mb-2"
                        style={{
                            color: '#1d1d1f',
                            fontSize: 15,
                        }}
                    >
                        Remove this seller?
                    </h6>

                    <p
                        className="mb-0"
                        style={{
                            color: '#6e6e73',
                            fontSize: 13,
                            lineHeight: 1.55,
                        }}
                    >
                        This will permanently delete{' '}
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
                    backgroundColor: '#fafafa',
                    borderTop: '1px solid #eeeeF0',
                }}
            >
                <button
                    type="button"
                    className="btn rounded-3 px-3"
                    onClick={onClose}
                    disabled={deleting}
                    style={{
                        backgroundColor: '#fff',
                        border: '1px solid #dedee3',
                        color: '#1d1d1f',
                        fontSize: 12,
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
                        color: '#fff',
                        border: 0,
                        fontSize: 12,
                        fontWeight: 600,
                    }}
                >
                    {deleting && (
                        <span className="spinner-border spinner-border-sm" />
                    )}

                    {deleting
                        ? 'Deleting…'
                        : 'Delete seller'}
                </button>
            </div>
        </ModalShell>
    );
}

/* ================================================================
   INFO ITEM
================================================================ */

function InfoItem({ icon, label, value }) {
    return (
        <div
            className="d-flex align-items-center gap-3 py-3"
            style={{
                borderBottom: '1px solid #f0f0f2',
            }}
        >
            <div
                className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                style={{
                    width: 36,
                    height: 36,
                    backgroundColor: '#f5f5f7',
                    color: '#6e6e73',
                }}
            >
                {icon}
            </div>

            <div className="min-w-0">
                <div
                    className="mb-1"
                    style={{
                        color: '#8e8e93',
                        fontSize: 10.5,
                        fontWeight: 600,
                    }}
                >
                    {label}
                </div>

                <div
                    className="text-break"
                    style={{
                        color: '#1d1d1f',
                        fontSize: 13,
                    }}
                >
                    {value || 'Not provided'}
                </div>
            </div>
        </div>
    );
}

/* ================================================================
   STAT
================================================================ */

function MiniStat({ icon, label, value }) {
    return (
        <div
            className="d-flex align-items-center gap-3"
            style={{
                minHeight: 64,
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

            <div>
                <div
                    className="fw-semibold"
                    style={{
                        color: '#1d1d1f',
                        fontSize: 16,
                        letterSpacing: '-.02em',
                    }}
                >
                    {value}
                </div>

                <div
                    style={{
                        color: '#8e8e93',
                        fontSize: 10.5,
                    }}
                >
                    {label}
                </div>
            </div>
        </div>
    );
}

/* ================================================================
   PRODUCT ROW
================================================================ */

function ProductRow({ product }) {
    return (
        <tr>
            <td className="px-4 py-3">
                <div className="d-flex align-items-center gap-3">
                    <div
                        className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#f5f5f7',
                            color: '#6e6e73',
                        }}
                    >
                        <Icon.Box />
                    </div>

                    <div className="min-w-0">
                        <div
                            className="fw-semibold text-truncate"
                            style={{
                                color: '#1d1d1f',
                                fontSize: 13,
                                maxWidth: 300,
                            }}
                        >
                            {product.name}
                        </div>

                        {product.category?.name && (
                            <div
                                className="mt-1"
                                style={{
                                    color: '#8e8e93',
                                    fontSize: 11,
                                }}
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
                    color: '#424245',
                    fontSize: 12,
                    whiteSpace: 'nowrap',
                }}
            >
                {formatPrice(product.price)}
            </td>

            <td className="pe-4 py-3">
                <StatusBadge
                    status={product.status ?? 'pending'}
                    small
                />
            </td>
        </tr>
    );
}

/* ================================================================
   PAGE
================================================================ */

export default function Show({ seller, flash }) {
    const [statusOpen, setStatusOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const products = Array.isArray(seller.products)
        ? seller.products
        : [];

    const productsCount =
        seller.products_count ?? products.length;

    const approvedProducts = products.filter(
        (product) => product.status === 'approved'
    ).length;

    return (
        <AppLayout>
            <Head title={`${seller.company_name} · Seller`} />

            <div
                className="seller-show-page min-vh-100"
                style={{
                    backgroundColor: '#f5f5f7',
                    color: '#1d1d1f',
                    fontFamily: FONT_STACK,
                    colorScheme: 'light',
                }}
            >
                <style>{`
                    .seller-show-page,
                    .seller-show-page * {
                        color-scheme: light !important;
                    }

                    .seller-show-page .form-control,
                    .seller-show-page .form-select {
                        background-color: #ffffff !important;
                        color: #1d1d1f !important;
                    }

                    .seller-show-page .form-control::placeholder {
                        color: #8e8e93 !important;
                        opacity: 1;
                    }

                    .seller-show-page .table {
                        --bs-table-bg: #ffffff;
                        --bs-table-color: #1d1d1f;
                        --bs-table-border-color: #eeeeF0;
                    }

                    .seller-show-page .table > :not(caption) > * > * {
                        background-color: transparent;
                    }

                    .seller-show-page button {
                        font-family: inherit;
                    }

                    .seller-show-page .btn:focus,
                    .seller-show-page .form-control:focus {
                        box-shadow: 0 0 0 3px rgba(0,113,227,.10) !important;
                    }

                    .seller-show-page .seller-action {
                        transition: all .16s ease;
                    }

                    .seller-show-page .seller-action:hover {
                        transform: translateY(-1px);
                    }

                    .seller-show-page .seller-card {
                        transition: box-shadow .18s ease, border-color .18s ease;
                    }

                    @media (prefers-color-scheme: dark) {
                        .seller-show-page {
                            background-color: #f5f5f7 !important;
                            color: #1d1d1f !important;
                        }

                        .seller-show-page .form-control,
                        .seller-show-page .form-select,
                        .seller-show-page .modal-content {
                            background-color: #ffffff !important;
                            color: #1d1d1f !important;
                        }
                    }
                `}</style>

                <div
                    className="container-fluid px-3 px-md-4 py-4"
                    style={{
                        maxWidth: 1160,
                    }}
                >
                    {/* =====================================================
                        HEADER
                    ====================================================== */}

                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <Link
                            href={route('admin.sellers.index')}
                            className="d-inline-flex align-items-center gap-2 text-decoration-none"
                            style={{
                                color: '#6e6e73',
                                fontSize: 12,
                                fontWeight: 600,
                            }}
                        >
                            <Icon.ArrowLeft />
                            Back to sellers
                        </Link>

                        <span
                            style={{
                                color: '#8e8e93',
                                fontSize: 11,
                            }}
                        >
                            Seller #{seller.id}
                        </span>
                    </div>

                    {/* =====================================================
                        FLASH
                    ====================================================== */}

                    {flash?.success && (
                        <div
                            className="d-flex align-items-center gap-2 mb-4 px-3 py-2 rounded-3"
                            style={{
                                backgroundColor: '#eaf8f0',
                                color: '#16845c',
                                border: '1px solid #d1f0df',
                                fontSize: 12,
                            }}
                        >
                            <Icon.Check />
                            {flash.success}
                        </div>
                    )}

                    {/* =====================================================
                        PROFILE HEADER
                    ====================================================== */}

                    <section
                        className="seller-card mb-4"
                        style={{
                            backgroundColor: '#fff',
                            border: '1px solid #e5e5e9',
                            borderRadius: 20,
                            boxShadow: '0 5px 20px rgba(0,0,0,.035)',
                        }}
                    >
                        <div className="p-4 p-md-5">
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
                                <div className="d-flex align-items-center gap-3">
                                    <Avatar
                                        name={seller.company_name}
                                        size={74}
                                    />

                                    <div>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <h1
                                                className="mb-0 fw-semibold"
                                                style={{
                                                    fontSize: 'clamp(21px, 3vw, 29px)',
                                                    letterSpacing: '-.04em',
                                                }}
                                            >
                                                {seller.company_name}
                                            </h1>

                                            <StatusBadge
                                                status={seller.status}
                                            />
                                        </div>

                                        <div
                                            className="d-flex align-items-center gap-2 mt-2 flex-wrap"
                                            style={{
                                                color: '#8e8e93',
                                                fontSize: 11.5,
                                            }}
                                        >
                                            <span>
                                                Seller #{seller.id}
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
                                        className="seller-action btn rounded-3 d-flex align-items-center gap-2"
                                        onClick={() =>
                                            setStatusOpen(true)
                                        }
                                        style={{
                                            backgroundColor: '#fff',
                                            color: '#1d1d1f',
                                            border: '1px solid #dedee3',
                                            padding: '9px 12px',
                                            fontSize: 11.5,
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Icon.Refresh />
                                        Status
                                    </button>

                                    <button
                                        type="button"
                                        className="seller-action btn rounded-3 d-flex align-items-center gap-2"
                                        onClick={() =>
                                            setEditOpen(true)
                                        }
                                        style={{
                                            backgroundColor: '#0071e3',
                                            color: '#fff',
                                            border: 0,
                                            padding: '9px 13px',
                                            fontSize: 11.5,
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Icon.Pencil />
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        className="seller-action btn rounded-3 d-flex align-items-center gap-2"
                                        onClick={() =>
                                            setDeleteOpen(true)
                                        }
                                        style={{
                                            backgroundColor: '#fff',
                                            color: '#d6453d',
                                            border: '1px solid #f0d5d2',
                                            padding: '9px 12px',
                                            fontSize: 11.5,
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Icon.Trash />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            className="px-4 px-md-5 py-3"
                            style={{
                                backgroundColor: '#fafafa',
                                borderTop: '1px solid #eeeeF0',
                            }}
                        >
                            <div className="row g-0">
                                <div className="col-12 col-sm-4">
                                    <MiniStat
                                        icon={<Icon.Box />}
                                        label="Products"
                                        value={productsCount}
                                    />
                                </div>

                                <div className="col-12 col-sm-4">
                                    <MiniStat
                                        icon={<Icon.Check />}
                                        label="Approved products"
                                        value={approvedProducts}
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

                    {/* =====================================================
                        CONTENT
                    ====================================================== */}

                    <div className="row g-4">
                        {/* =================================================
                            LEFT
                        ================================================== */}

                        <div className="col-lg-4">
                            <div
                                className="seller-card h-100 p-4"
                                style={{
                                    backgroundColor: '#fff',
                                    border: '1px solid #e5e5e9',
                                    borderRadius: 18,
                                    boxShadow:
                                        '0 5px 20px rgba(0,0,0,.03)',
                                }}
                            >
                                <div className="d-flex align-items-center gap-2 mb-1">
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-3"
                                        style={{
                                            width: 32,
                                            height: 32,
                                            backgroundColor: '#eef5ff',
                                            color: '#0071e3',
                                        }}
                                    >
                                        <Icon.Store />
                                    </div>

                                    <h5
                                        className="mb-0 fw-semibold"
                                        style={{
                                            fontSize: 14,
                                            letterSpacing: '-.02em',
                                        }}
                                    >
                                        Seller information
                                    </h5>
                                </div>

                                <div
                                    className="mb-2"
                                    style={{
                                        color: '#8e8e93',
                                        fontSize: 11,
                                    }}
                                >
                                    Contact and account details
                                </div>

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

                                <div className="d-flex align-items-center gap-3 pt-3">
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                                        style={{
                                            width: 36,
                                            height: 36,
                                            backgroundColor: '#f5f5f7',
                                            color: '#6e6e73',
                                        }}
                                    >
                                        <Icon.Calendar />
                                    </div>

                                    <div>
                                        <div
                                            className="mb-1"
                                            style={{
                                                color: '#8e8e93',
                                                fontSize: 10.5,
                                                fontWeight: 600,
                                            }}
                                        >
                                            Joined
                                        </div>

                                        <div
                                            style={{
                                                color: '#1d1d1f',
                                                fontSize: 13,
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

                        {/* =================================================
                            RIGHT
                        ================================================== */}

                        <div className="col-lg-8">
                            {/* About */}
                            <section
                                className="seller-card p-4 mb-4"
                                style={{
                                    backgroundColor: '#fff',
                                    border: '1px solid #e5e5e9',
                                    borderRadius: 18,
                                    boxShadow:
                                        '0 5px 20px rgba(0,0,0,.03)',
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h5
                                            className="mb-1 fw-semibold"
                                            style={{
                                                fontSize: 14,
                                                letterSpacing: '-.02em',
                                            }}
                                        >
                                            About the seller
                                        </h5>

                                        <div
                                            style={{
                                                color: '#8e8e93',
                                                fontSize: 11,
                                            }}
                                        >
                                            Company description
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="rounded-3 p-3"
                                    style={{
                                        backgroundColor: '#f8f8fa',
                                        color: '#424245',
                                        fontSize: 12.5,
                                        lineHeight: 1.7,
                                        border: '1px solid #f0f0f2',
                                    }}
                                >
                                    {seller.description ||
                                        'No description has been provided for this seller.'}
                                </div>
                            </section>

                            {/* Products */}
                            <section
                                className="seller-card overflow-hidden"
                                style={{
                                    backgroundColor: '#fff',
                                    border: '1px solid #e5e5e9',
                                    borderRadius: 18,
                                    boxShadow:
                                        '0 5px 20px rgba(0,0,0,.03)',
                                }}
                            >
                                <div className="p-4">
                                    <div className="d-flex align-items-center justify-content-between gap-3">
                                        <div>
                                            <h5
                                                className="mb-1 fw-semibold"
                                                style={{
                                                    fontSize: 14,
                                                    letterSpacing: '-.02em',
                                                }}
                                            >
                                                Products
                                            </h5>

                                            <div
                                                style={{
                                                    color: '#8e8e93',
                                                    fontSize: 11,
                                                }}
                                            >
                                                Products listed by this
                                                seller
                                            </div>
                                        </div>

                                        <span
                                            className="rounded-pill px-3 py-2 fw-semibold"
                                            style={{
                                                backgroundColor: '#f5f5f7',
                                                color: '#6e6e73',
                                                fontSize: 10.5,
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
                                                width: 48,
                                                height: 48,
                                                backgroundColor: '#f5f5f7',
                                                color: '#8e8e93',
                                            }}
                                        >
                                            <Icon.Box />
                                        </div>

                                        <div
                                            className="fw-semibold mb-1"
                                            style={{
                                                color: '#1d1d1f',
                                                fontSize: 13,
                                            }}
                                        >
                                            No products yet
                                        </div>

                                        <div
                                            style={{
                                                color: '#8e8e93',
                                                fontSize: 11.5,
                                            }}
                                        >
                                            This seller has not listed
                                            any products.
                                        </div>
                                    </div>
                                ) : (
                                    <div className="table-responsive">
                                        <table
                                            className="table align-middle mb-0"
                                            style={{
                                                fontSize: 12,
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
                                                            color: '#8e8e93',
                                                            fontSize: 9.5,
                                                            letterSpacing:
                                                                '.07em',
                                                            textTransform:
                                                                'uppercase',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        Product
                                                    </th>

                                                    <th
                                                        className="py-3"
                                                        style={{
                                                            color: '#8e8e93',
                                                            fontSize: 9.5,
                                                            letterSpacing:
                                                                '.07em',
                                                            textTransform:
                                                                'uppercase',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        Price
                                                    </th>

                                                    <th
                                                        className="pe-4 py-3"
                                                        style={{
                                                            color: '#8e8e93',
                                                            fontSize: 9.5,
                                                            letterSpacing:
                                                                '.07em',
                                                            textTransform:
                                                                'uppercase',
                                                            fontWeight: 600,
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
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================
                MODALS
            ============================================================= */}

            <StatusModal
                seller={statusOpen ? seller : null}
                open={statusOpen}
                onClose={() => setStatusOpen(false)}
            />

            <ManageModal
                seller={editOpen ? seller : null}
                open={editOpen}
                onClose={() => setEditOpen(false)}
            />

            <DeleteModal
                seller={deleteOpen ? seller : null}
                open={deleteOpen}
                onClose={() => setDeleteOpen(false)}
            />
        </AppLayout>
    );
}