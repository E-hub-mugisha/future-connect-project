import { useMemo, useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* =========================================================
   Routes
========================================================= */

const routes = {
    store: 'admin.sellers.store',
    update: 'admin.sellers.update',
    updateStatus: 'admin.sellers.updateStatus',
    destroy: 'admin.sellers.destroy',
    show: 'admin.sellers.show',
};

/* =========================================================
   Apple / Professional Theme
========================================================= */

const FONT_STACK =
    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

/* =========================================================
   Icons
========================================================= */

const Icon = {
    Plus: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
            <path d="M12 5v14M5 12h14" />
        </svg>
    ),

    Eye: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <path
                d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="3.2" />
        </svg>
    ),

    Pencil: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <path
                d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19 3 20l1-4L16.5 3.5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Refresh: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <path
                d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9M20.5 12a8.5 8.5 0 0 1-14.6 5.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 4v5h5M20 20v-5h-5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Trash: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <path
                d="M4 7h16M9 7V4.8c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8V7M6 7l.9 12.2a2 2 0 0 0 2 1.8h6.2a2 2 0 0 0 2-1.8L18 7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Search: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
    ),

    Dots: (p) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
            <circle cx="12" cy="5" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="12" cy="19" r="1.6" />
        </svg>
    ),

    Mail: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3.5 6 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    Phone: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <path
                d="M4.5 4h3.2l1.5 4.2-2 1.8a12.5 12.5 0 0 0 5.8 5.8l1.8-2 4.2 1.5V18a2 2 0 0 1-2.2 2A16 16 0 0 1 2.5 6.2 2 2 0 0 1 4.5 4Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Pin: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <path
                d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="9.5" r="2.3" />
        </svg>
    ),

    Building: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <path
                d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M13 21v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v9M4 21h16M7.5 7.5h1M7.5 11h1M7.5 14.5h1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Box: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <path d="M21 8 12 3 3 8l9 5 9-5Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 8v8l9 5 9-5V8M12 13v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    User: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20c.8-3.6 3.1-5.5 7-5.5s6.2 1.9 7 5.5" strokeLinecap="round" />
        </svg>
    ),

    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="m5 12 4 4L19 6" />
        </svg>
    ),

    Close: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
            <path d="M6 6l12 12M18 6 6 18" />
        </svg>
    ),
};

/* =========================================================
   Avatar
========================================================= */

const AVATAR_PALETTES = [
    ['#e8f3ff', '#1769aa'],
    ['#e8f8f0', '#16845b'],
    ['#fff1e6', '#b85c00'],
    ['#f1eaff', '#7040c0'],
    ['#ffeaf0', '#c52f62'],
    ['#e7f7f5', '#087f73'],
];

function paletteFor(seed = '') {
    let hash = 0;

    for (let i = 0; i < seed.length; i++) {
        hash =
            seed.charCodeAt(i) +
            ((hash << 5) - hash);
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

function Avatar({ name, size = 44 }) {
    const [bg, fg] = paletteFor(name);

    return (
        <div
            className="d-flex align-items-center justify-content-center flex-shrink-0 fw-semibold"
            style={{
                width: size,
                height: size,
                borderRadius: '13px',
                background: bg,
                color: fg,
                fontSize: size * 0.36,
                letterSpacing: '-0.02em',
            }}
        >
            {initialsFor(name)}
        </div>
    );
}

/* =========================================================
   Status
========================================================= */

const STATUS_META = {
    approved: {
        label: 'Approved',
        bg: '#e9f8f0',
        fg: '#16845b',
        dot: '#20a568',
    },

    rejected: {
        label: 'Rejected',
        bg: '#fdeeee',
        fg: '#c9362d',
        dot: '#e5483f',
    },

    pending: {
        label: 'Pending',
        bg: '#fff6df',
        fg: '#9b6200',
        dot: '#e7a900',
    },
};

function StatusBadge({ status, small = false }) {
    const meta =
        STATUS_META[status] ??
        STATUS_META.pending;

    return (
        <span
            className="d-inline-flex align-items-center gap-2 rounded-pill fw-semibold"
            style={{
                background: meta.bg,
                color: meta.fg,
                padding: small
                    ? '5px 9px'
                    : '6px 11px',
                fontSize: small ? '10px' : '11px',
                whiteSpace: 'nowrap',
            }}
        >
            <span
                style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: meta.dot,
                }}
            />

            {meta.label}
        </span>
    );
}

/* =========================================================
   Modal
========================================================= */

function ModalShell({
    open,
    onClose,
    title,
    eyebrow,
    children,
    size = 'modal-lg',
}) {
    if (!open) return null;

    return (
        <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{
                background: 'rgba(0,0,0,.28)',
                backdropFilter: 'blur(8px)',
                zIndex: 1055,
                fontFamily: FONT_STACK,
            }}
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                className={`modal-dialog modal-dialog-centered ${size}`}
            >
                <div
                    className="modal-content border-0 overflow-hidden"
                    style={{
                        borderRadius: '22px',
                        boxShadow:
                            '0 25px 70px rgba(0,0,0,.16)',
                    }}
                >
                    <div
                        className="modal-header border-0 px-4 px-md-5 pt-4 pb-3"
                    >
                        <div>
                            {eyebrow && (
                                <div
                                    className="text-uppercase mb-1"
                                    style={{
                                        fontSize: '10px',
                                        fontWeight: 700,
                                        letterSpacing: '.07em',
                                        color: '#8e8e93',
                                    }}
                                >
                                    {eyebrow}
                                </div>
                            )}

                            <h5
                                className="modal-title mb-0"
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    letterSpacing: '-.025em',
                                    color: '#1d1d1f',
                                }}
                            >
                                {title}
                            </h5>
                        </div>

                        <button
                            type="button"
                            className="btn d-flex align-items-center justify-content-center"
                            onClick={onClose}
                            style={{
                                width: 34,
                                height: 34,
                                borderRadius: '10px',
                                background: '#f2f2f7',
                                color: '#6e6e73',
                            }}
                        >
                            <Icon.Close
                                width={17}
                                height={17}
                            />
                        </button>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
}

/* =========================================================
   Form Field
========================================================= */

function FormField({
    label,
    error,
    children,
    required = false,
}) {
    return (
        <div>
            <label
                className="form-label mb-2"
                style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#48484a',
                }}
            >
                {label}

                {required && (
                    <span
                        className="ms-1"
                        style={{ color: '#d93025' }}
                    >
                        *
                    </span>
                )}
            </label>

            {children}

            {error && (
                <div
                    className="mt-1"
                    style={{
                        fontSize: '11px',
                        color: '#d93025',
                    }}
                >
                    {error}
                </div>
            )}
        </div>
    );
}

/* =========================================================
   Create Seller Modal
========================================================= */

function CreateSellerModal({
    open,
    onClose,
}) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        company_name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
        status: 'pending',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route(routes.store), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    const inputStyle = {
        height: '46px',
        borderRadius: '11px',
        border: '1px solid #dedee3',
        background: '#fbfbfc',
        fontSize: '13px',
        color: '#1d1d1f',
        boxShadow: 'none',
    };

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow="Seller management"
            title="Create seller"
        >
            <form onSubmit={submit}>
                <div className="modal-body px-4 px-md-5 pt-2 pb-4">
                    <div
                        className="p-3 mb-4"
                        style={{
                            background: '#f5f9ff',
                            border: '1px solid #e2edff',
                            borderRadius: '13px',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '12px',
                                fontWeight: 650,
                                color: '#1769aa',
                            }}
                        >
                            Add a new marketplace seller
                        </div>

                        <div
                            className="mt-1"
                            style={{
                                fontSize: '11px',
                                color: '#66809a',
                                lineHeight: 1.5,
                            }}
                        >
                            Enter the company information below. You
                            can update the seller profile and status
                            later.
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col-12">
                            <FormField
                                label="Company name"
                                required
                                error={errors.company_name}
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter company name"
                                    value={data.company_name}
                                    onChange={(e) =>
                                        setData(
                                            'company_name',
                                            e.target.value
                                        )
                                    }
                                    style={inputStyle}
                                    autoFocus
                                />
                            </FormField>
                        </div>

                        <div className="col-md-6">
                            <FormField
                                label="Email address"
                                required
                                error={errors.email}
                            >
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="company@example.com"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData(
                                            'email',
                                            e.target.value
                                        )
                                    }
                                    style={inputStyle}
                                />
                            </FormField>
                        </div>

                        <div className="col-md-6">
                            <FormField
                                label="Phone number"
                                error={errors.phone}
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="+250 7XX XXX XXX"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData(
                                            'phone',
                                            e.target.value
                                        )
                                    }
                                    style={inputStyle}
                                />
                            </FormField>
                        </div>

                        <div className="col-12">
                            <FormField
                                label="Business address"
                                error={errors.address}
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Kigali, Rwanda"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData(
                                            'address',
                                            e.target.value
                                        )
                                    }
                                    style={inputStyle}
                                />
                            </FormField>
                        </div>

                        <div className="col-12">
                            <FormField
                                label="Company description"
                                error={errors.description}
                            >
                                <textarea
                                    rows="4"
                                    className="form-control"
                                    placeholder="Briefly describe the company and what it sells..."
                                    value={data.description}
                                    onChange={(e) =>
                                        setData(
                                            'description',
                                            e.target.value
                                        )
                                    }
                                    style={{
                                        ...inputStyle,
                                        height: 'auto',
                                        minHeight: '105px',
                                        resize: 'vertical',
                                        padding: '12px',
                                        lineHeight: 1.55,
                                    }}
                                />
                            </FormField>
                        </div>

                        <div className="col-12">
                            <FormField
                                label="Initial status"
                                error={errors.status}
                            >
                                <div
                                    className="d-flex gap-2"
                                >
                                    {[
                                        {
                                            value: 'pending',
                                            label: 'Pending',
                                        },
                                        {
                                            value: 'approved',
                                            label: 'Approved',
                                        },
                                    ].map((option) => {
                                        const active =
                                            data.status ===
                                            option.value;

                                        return (
                                            <button
                                                type="button"
                                                key={
                                                    option.value
                                                }
                                                onClick={() =>
                                                    setData(
                                                        'status',
                                                        option.value
                                                    )
                                                }
                                                className="btn flex-fill"
                                                style={{
                                                    height: '43px',
                                                    borderRadius:
                                                        '11px',
                                                    border: active
                                                        ? '1px solid #0071e3'
                                                        : '1px solid #dedee3',
                                                    background:
                                                        active
                                                            ? '#eef6ff'
                                                            : '#fff',
                                                    color: active
                                                        ? '#0066cc'
                                                        : '#6e6e73',
                                                    fontSize:
                                                        '12px',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {active && (
                                                    <Icon.Check
                                                        width={14}
                                                        height={14}
                                                        className="me-1"
                                                    />
                                                )}

                                                {
                                                    option.label
                                                }
                                            </button>
                                        );
                                    })}
                                </div>
                            </FormField>
                        </div>
                    </div>
                </div>

                <div
                    className="modal-footer border-0 px-4 px-md-5 py-3"
                    style={{
                        background: '#fafafa',
                        borderTop:
                            '1px solid #f0f0f2 !important',
                    }}
                >
                    <button
                        type="button"
                        className="btn"
                        onClick={onClose}
                        style={{
                            height: '42px',
                            borderRadius: '10px',
                            padding: '0 18px',
                            border: '1px solid #d2d2d7',
                            background: '#fff',
                            color: '#1d1d1f',
                            fontSize: '12px',
                            fontWeight: 600,
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        disabled={processing}
                        className="btn d-flex align-items-center gap-2"
                        style={{
                            height: '42px',
                            borderRadius: '10px',
                            padding: '0 20px',
                            border: 'none',
                            background: '#0071e3',
                            color: '#fff',
                            fontSize: '12px',
                            fontWeight: 650,
                            opacity: processing
                                ? 0.65
                                : 1,
                        }}
                    >
                        <Icon.Plus
                            width={15}
                            height={15}
                        />

                        {processing
                            ? 'Creating…'
                            : 'Create seller'}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* =========================================================
   Actions Menu
========================================================= */

function ActionsMenu({
    onEdit,
    onStatus,
    onDelete,
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="position-relative">
            <button
                type="button"
                className="btn d-flex align-items-center justify-content-center"
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: '10px',
                    border: '1px solid #e5e5ea',
                    background: '#fff',
                    color: '#6e6e73',
                }}
                onClick={() =>
                    setOpen((value) => !value)
                }
            >
                <Icon.Dots width={18} height={18} />
            </button>

            {open && (
                <>
                    <div
                        className="position-fixed"
                        style={{
                            inset: 0,
                            zIndex: 10,
                        }}
                        onClick={() => setOpen(false)}
                    />

                    <div
                        className="position-absolute bg-white"
                        style={{
                            right: 0,
                            top: '42px',
                            width: '190px',
                            borderRadius: '13px',
                            border: '1px solid #e5e5ea',
                            boxShadow:
                                '0 15px 35px rgba(0,0,0,.10)',
                            zIndex: 11,
                            padding: '5px',
                        }}
                    >
                        <button
                            type="button"
                            className="btn w-100 text-start d-flex align-items-center gap-2"
                            onClick={() => {
                                setOpen(false);
                                onEdit();
                            }}
                            style={{
                                height: '38px',
                                borderRadius: '8px',
                                color: '#1d1d1f',
                                fontSize: '12px',
                            }}
                        >
                            <Icon.Pencil
                                width={15}
                                height={15}
                            />
                            Edit seller
                        </button>

                        <button
                            type="button"
                            className="btn w-100 text-start d-flex align-items-center gap-2"
                            onClick={() => {
                                setOpen(false);
                                onStatus();
                            }}
                            style={{
                                height: '38px',
                                borderRadius: '8px',
                                color: '#1d1d1f',
                                fontSize: '12px',
                            }}
                        >
                            <Icon.Refresh
                                width={15}
                                height={15}
                            />
                            Update status
                        </button>

                        <div
                            style={{
                                height: '1px',
                                background: '#f0f0f2',
                                margin: '4px 0',
                            }}
                        />

                        <button
                            type="button"
                            className="btn w-100 text-start d-flex align-items-center gap-2"
                            onClick={() => {
                                setOpen(false);
                                onDelete();
                            }}
                            style={{
                                height: '38px',
                                borderRadius: '8px',
                                color: '#d93025',
                                fontSize: '12px',
                            }}
                        >
                            <Icon.Trash
                                width={15}
                                height={15}
                            />
                            Delete seller
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

/* =========================================================
   Profile Modal
========================================================= */

function ProfileModal({
    seller,
    open,
    onClose,
    onEdit,
    onStatus,
    onDelete,
}) {
    if (!seller) return null;

    const productsCount =
        seller.products_count ??
        seller.products?.length ??
        null;

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow={`Seller #${seller.id}`}
            title="Company profile"
        >
            <div className="modal-body px-4 px-md-5 pb-4 pt-1">
                <div
                    className="d-flex align-items-center gap-3 p-3 mb-4"
                    style={{
                        background: '#f7f8fa',
                        borderRadius: '15px',
                    }}
                >
                    <Avatar
                        name={seller.company_name}
                        size={56}
                    />

                    <div className="flex-grow-1">
                        <div
                            style={{
                                fontSize: '17px',
                                fontWeight: 700,
                                color: '#1d1d1f',
                            }}
                        >
                            {seller.company_name}
                        </div>

                        <div
                            className="mt-1"
                            style={{
                                fontSize: '11px',
                                color: '#8e8e93',
                            }}
                        >
                            {seller.address ||
                                'No address on file'}
                        </div>
                    </div>

                    <StatusBadge
                        status={seller.status}
                    />
                </div>

                <div className="row g-3 mb-4">
                    {[
                        {
                            icon: <Icon.Mail />,
                            label: 'Email',
                            value:
                                seller.email || '—',
                        },
                        {
                            icon: <Icon.Phone />,
                            label: 'Phone',
                            value:
                                seller.phone || '—',
                        },
                        {
                            icon: <Icon.Pin />,
                            label: 'Address',
                            value:
                                seller.address || '—',
                        },
                        {
                            icon: <Icon.Box />,
                            label: 'Products listed',
                            value:
                                productsCount ??
                                'Not available',
                        },
                    ].map((item) => (
                        <div
                            className="col-md-6"
                            key={item.label}
                        >
                            <div
                                className="p-3 h-100"
                                style={{
                                    border: '1px solid #e5e5ea',
                                    borderRadius: '13px',
                                }}
                            >
                                <div
                                    className="d-flex align-items-center gap-2 mb-2"
                                    style={{
                                        color: '#8e8e93',
                                        fontSize: '10px',
                                        fontWeight: 650,
                                        textTransform:
                                            'uppercase',
                                        letterSpacing:
                                            '.04em',
                                    }}
                                >
                                    {item.icon}
                                    {item.label}
                                </div>

                                <div
                                    style={{
                                        fontSize: '12px',
                                        color: '#1d1d1f',
                                        wordBreak:
                                            'break-word',
                                    }}
                                >
                                    {item.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <div
                        style={{
                            fontSize: '11px',
                            fontWeight: 650,
                            color: '#6e6e73',
                            marginBottom: '7px',
                        }}
                    >
                        About the company
                    </div>

                    <p
                        className="mb-0"
                        style={{
                            color: '#48484a',
                            fontSize: '12px',
                            lineHeight: 1.65,
                        }}
                    >
                        {seller.description ||
                            'No description provided.'}
                    </p>
                </div>
            </div>

            <div
                className="modal-footer border-0 px-4 px-md-5 py-3"
                style={{
                    background: '#fafafa',
                }}
            >
                <button
                    type="button"
                    className="btn"
                    onClick={onClose}
                    style={{
                        height: '40px',
                        borderRadius: '10px',
                        border: '1px solid #d2d2d7',
                        background: '#fff',
                        fontSize: '12px',
                        fontWeight: 600,
                    }}
                >
                    Close
                </button>

                <div className="d-flex gap-2">
                    <button
                        type="button"
                        className="btn d-flex align-items-center gap-2"
                        onClick={onStatus}
                        style={{
                            height: '40px',
                            borderRadius: '10px',
                            border: '1px solid #d2d2d7',
                            background: '#fff',
                            color: '#1d1d1f',
                            fontSize: '12px',
                            fontWeight: 600,
                        }}
                    >
                        <Icon.Refresh
                            width={14}
                            height={14}
                        />
                        Status
                    </button>

                    <button
                        type="button"
                        className="btn d-flex align-items-center gap-2"
                        onClick={onEdit}
                        style={{
                            height: '40px',
                            borderRadius: '10px',
                            border: 'none',
                            background: '#0071e3',
                            color: '#fff',
                            fontSize: '12px',
                            fontWeight: 600,
                        }}
                    >
                        <Icon.Pencil
                            width={14}
                            height={14}
                        />
                        Edit profile
                    </button>
                </div>
            </div>
        </ModalShell>
    );
}

/* =========================================================
   Manage Modal
========================================================= */

function ManageModal({
    seller,
    open,
    onClose,
}) {
    const {
        data,
        setData,
        patch,
        processing,
        errors,
    } = useForm({
        company_name:
            seller?.company_name ?? '',
        email: seller?.email ?? '',
        phone: seller?.phone ?? '',
        address: seller?.address ?? '',
        description:
            seller?.description ?? '',
        status:
            seller?.status ?? 'pending',
    });

    if (!seller) return null;

    const submit = (e) => {
        e.preventDefault();

        patch(
            route(routes.update, seller.id),
            {
                preserveScroll: true,
                onSuccess: onClose,
            }
        );
    };

    const inputStyle = {
        height: '44px',
        borderRadius: '10px',
        border: '1px solid #dedee3',
        background: '#fbfbfc',
        fontSize: '12px',
        boxShadow: 'none',
    };

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow={`Seller #${seller.id}`}
            title="Edit seller profile"
        >
            <form onSubmit={submit}>
                <div className="modal-body px-4 px-md-5 pt-1 pb-4">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <FormField
                                label="Company name"
                                required
                                error={
                                    errors.company_name
                                }
                            >
                                <input
                                    className="form-control"
                                    value={
                                        data.company_name
                                    }
                                    onChange={(e) =>
                                        setData(
                                            'company_name',
                                            e.target.value
                                        )
                                    }
                                    style={inputStyle}
                                />
                            </FormField>
                        </div>

                        <div className="col-md-6">
                            <FormField
                                label="Email"
                                required
                                error={errors.email}
                            >
                                <input
                                    type="email"
                                    className="form-control"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData(
                                            'email',
                                            e.target.value
                                        )
                                    }
                                    style={inputStyle}
                                />
                            </FormField>
                        </div>

                        <div className="col-md-6">
                            <FormField label="Phone">
                                <input
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
                            </FormField>
                        </div>

                        <div className="col-md-6">
                            <FormField label="Address">
                                <input
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
                            </FormField>
                        </div>

                        <div className="col-12">
                            <FormField label="Description">
                                <textarea
                                    rows="4"
                                    className="form-control"
                                    value={
                                        data.description
                                    }
                                    onChange={(e) =>
                                        setData(
                                            'description',
                                            e.target.value
                                        )
                                    }
                                    style={{
                                        ...inputStyle,
                                        height: 'auto',
                                        padding: '11px',
                                        lineHeight: 1.55,
                                        resize: 'vertical',
                                    }}
                                />
                            </FormField>
                        </div>

                        <div className="col-12">
                            <FormField label="Status">
                                <select
                                    className="form-select"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData(
                                            'status',
                                            e.target.value
                                        )
                                    }
                                    style={inputStyle}
                                >
                                    <option value="pending">
                                        Pending
                                    </option>
                                    <option value="approved">
                                        Approved
                                    </option>
                                    <option value="rejected">
                                        Rejected
                                    </option>
                                </select>
                            </FormField>
                        </div>
                    </div>
                </div>

                <div
                    className="modal-footer border-0 px-4 px-md-5 py-3"
                    style={{
                        background: '#fafafa',
                    }}
                >
                    <button
                        type="button"
                        className="btn"
                        onClick={onClose}
                        style={{
                            height: '40px',
                            borderRadius: '10px',
                            border: '1px solid #d2d2d7',
                            background: '#fff',
                            fontSize: '12px',
                            fontWeight: 600,
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        disabled={processing}
                        className="btn"
                        style={{
                            height: '40px',
                            borderRadius: '10px',
                            padding: '0 18px',
                            border: 'none',
                            background: '#0071e3',
                            color: '#fff',
                            fontSize: '12px',
                            fontWeight: 650,
                            opacity: processing
                                ? 0.65
                                : 1,
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

/* =========================================================
   Status Modal
========================================================= */

function StatusModal({
    seller,
    open,
    onClose,
}) {
    const {
        data,
        setData,
        patch,
        processing,
    } = useForm({
        status:
            seller?.status ?? 'pending',
    });

    if (!seller) return null;

    const submit = (e) => {
        e.preventDefault();

        patch(
            route(
                routes.updateStatus,
                seller.id
            ),
            {
                preserveScroll: true,
                onSuccess: onClose,
            }
        );
    };

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow={seller.company_name}
            title="Update status"
            size="modal-md"
        >
            <form onSubmit={submit}>
                <div className="modal-body px-4 px-md-5 pt-1 pb-4">
                    <label
                        className="form-label"
                        style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#48484a',
                        }}
                    >
                        Seller status
                    </label>

                    <select
                        className="form-select"
                        value={data.status}
                        onChange={(e) =>
                            setData(
                                'status',
                                e.target.value
                            )
                        }
                        style={{
                            height: '46px',
                            borderRadius: '11px',
                            border: '1px solid #dedee3',
                            background: '#fbfbfc',
                            fontSize: '13px',
                            boxShadow: 'none',
                        }}
                    >
                        <option value="pending">
                            Pending
                        </option>

                        <option value="approved">
                            Approved
                        </option>

                        <option value="rejected">
                            Rejected
                        </option>
                    </select>

                    {data.status ===
                        'approved' && (
                        <div
                            className="mt-3 p-3"
                            style={{
                                borderRadius: '12px',
                                background: '#fff7e5',
                                color: '#805500',
                                fontSize: '11px',
                                lineHeight: 1.5,
                            }}
                        >
                            Approving this seller creates
                            a user account and emails
                            their login credentials.
                        </div>
                    )}
                </div>

                <div
                    className="modal-footer border-0 px-4 px-md-5 py-3"
                    style={{
                        background: '#fafafa',
                    }}
                >
                    <button
                        type="button"
                        className="btn"
                        onClick={onClose}
                        style={{
                            height: '40px',
                            borderRadius: '10px',
                            border: '1px solid #d2d2d7',
                            background: '#fff',
                            fontSize: '12px',
                            fontWeight: 600,
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="btn"
                        disabled={processing}
                        style={{
                            height: '40px',
                            borderRadius: '10px',
                            padding: '0 18px',
                            background: '#0071e3',
                            color: '#fff',
                            border: 'none',
                            fontSize: '12px',
                            fontWeight: 650,
                        }}
                    >
                        {processing
                            ? 'Updating…'
                            : 'Update status'}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* =========================================================
   Delete Modal
========================================================= */

function DeleteModal({
    seller,
    open,
    onClose,
}) {
    if (!seller) return null;

    const confirmDelete = () => {
        router.delete(
            route(routes.destroy, seller.id),
            {
                preserveScroll: true,
                onSuccess: onClose,
            }
        );
    };

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow="Permanent action"
            title="Delete seller"
            size="modal-md"
        >
            <div className="modal-body px-4 px-md-5 pt-1 pb-4">
                <div
                    className="d-flex align-items-center gap-3 p-3"
                    style={{
                        borderRadius: '13px',
                        background: '#f7f8fa',
                    }}
                >
                    <Avatar
                        name={seller.company_name}
                        size={46}
                    />

                    <div>
                        <div
                            style={{
                                fontSize: '13px',
                                fontWeight: 650,
                                color: '#1d1d1f',
                            }}
                        >
                            {seller.company_name}
                        </div>

                        <div
                            style={{
                                fontSize: '10px',
                                color: '#8e8e93',
                            }}
                        >
                            Seller #{seller.id}
                        </div>
                    </div>
                </div>

                <p
                    className="mt-3 mb-0"
                    style={{
                        color: '#6e6e73',
                        fontSize: '12px',
                        lineHeight: 1.6,
                    }}
                >
                    Are you sure you want to delete this
                    seller and its associated records?
                    This action cannot be undone.
                </p>
            </div>

            <div
                className="modal-footer border-0 px-4 px-md-5 py-3"
                style={{
                    background: '#fafafa',
                }}
            >
                <button
                    type="button"
                    className="btn"
                    onClick={onClose}
                    style={{
                        height: '40px',
                        borderRadius: '10px',
                        border: '1px solid #d2d2d7',
                        background: '#fff',
                        fontSize: '12px',
                        fontWeight: 600,
                    }}
                >
                    Cancel
                </button>

                <button
                    type="button"
                    className="btn d-flex align-items-center gap-2"
                    onClick={confirmDelete}
                    style={{
                        height: '40px',
                        borderRadius: '10px',
                        border: 'none',
                        background: '#d93025',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 650,
                    }}
                >
                    <Icon.Trash
                        width={14}
                        height={14}
                    />

                    Delete seller
                </button>
            </div>
        </ModalShell>
    );
}

/* =========================================================
   Stat Card
========================================================= */

function StatCard({
    label,
    value,
    accent,
    icon,
}) {
    return (
        <div className="col-6 col-xl-3">
            <div
                className="h-100"
                style={{
                    background: '#fff',
                    border: '1px solid #e5e5ea',
                    borderRadius: '16px',
                    padding: '17px',
                    boxShadow:
                        '0 5px 20px rgba(0,0,0,.025)',
                }}
            >
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <div
                            style={{
                                fontSize: '10px',
                                fontWeight: 650,
                                color: '#8e8e93',
                                marginBottom: '7px',
                                textTransform:
                                    'uppercase',
                                letterSpacing:
                                    '.04em',
                            }}
                        >
                            {label}
                        </div>

                        <div
                            style={{
                                fontSize: '25px',
                                lineHeight: 1,
                                fontWeight: 700,
                                letterSpacing:
                                    '-.04em',
                                color: '#1d1d1f',
                            }}
                        >
                            {value}
                        </div>
                    </div>

                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '11px',
                            background: `${accent}14`,
                            color: accent,
                        }}
                    >
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* =========================================================
   Page
========================================================= */

export default function Index({
    sellers = [],
    flash,
}) {
    const [profileTarget, setProfileTarget] =
        useState(null);

    const [manageTarget, setManageTarget] =
        useState(null);

    const [statusTarget, setStatusTarget] =
        useState(null);

    const [deleteTarget, setDeleteTarget] =
        useState(null);

    const [createOpen, setCreateOpen] =
        useState(false);

    const [query, setQuery] =
        useState('');

    const [statusFilter, setStatusFilter] =
        useState('all');

    const sellerList = Array.isArray(sellers)
        ? sellers
        : [];

    const counts = useMemo(
        () => ({
            total: sellerList.length,

            approved: sellerList.filter(
                (s) => s.status === 'approved'
            ).length,

            pending: sellerList.filter(
                (s) => s.status === 'pending'
            ).length,

            rejected: sellerList.filter(
                (s) => s.status === 'rejected'
            ).length,
        }),
        [sellerList]
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        return sellerList.filter((seller) => {
            const matchesStatus =
                statusFilter === 'all' ||
                seller.status ===
                    statusFilter;

            const matchesQuery =
                !q ||
                seller.company_name
                    ?.toLowerCase()
                    .includes(q) ||
                seller.email
                    ?.toLowerCase()
                    .includes(q) ||
                seller.address
                    ?.toLowerCase()
                    .includes(q);

            return (
                matchesStatus &&
                matchesQuery
            );
        });
    }, [
        sellerList,
        query,
        statusFilter,
    ]);

    const filterButtonStyle = (active) => ({
        height: '34px',
        padding: '0 12px',
        borderRadius: '9px',
        border: active
            ? '1px solid #0071e3'
            : '1px solid #e5e5ea',
        background: active
            ? '#eef6ff'
            : '#fff',
        color: active
            ? '#0066cc'
            : '#6e6e73',
        fontSize: '11px',
        fontWeight: 600,
    });

    return (
        <AppLayout>
            <Head title="Sellers" />

            <div
                style={{
                    minHeight: '100vh',
                    background: '#f5f5f7',
                    fontFamily: FONT_STACK,
                    color: '#1d1d1f',
                }}
            >
                <div className="container-fluid px-3 px-md-4 py-4 py-lg-5">
                    <div
                        className="mx-auto"
                        style={{
                            maxWidth: '1400px',
                        }}
                    >
                        {/* =================================================
                            HEADER
                        ================================================= */}
                        <div className="mb-4">
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
                                <div>
                                    <div
                                        className="d-inline-flex align-items-center gap-2 mb-2 px-2 py-1 rounded-pill"
                                        style={{
                                            background:
                                                '#eaf2ff',
                                            color: '#0066cc',
                                            fontSize:
                                                '10px',
                                            fontWeight: 700,
                                            letterSpacing:
                                                '.06em',
                                        }}
                                    >
                                        <Icon.Building
                                            width={12}
                                            height={12}
                                        />

                                        MARKETPLACE
                                        MANAGEMENT
                                    </div>

                                    <h1
                                        className="mb-1"
                                        style={{
                                            fontSize:
                                                '29px',
                                            lineHeight:
                                                1.1,
                                            fontWeight: 700,
                                            letterSpacing:
                                                '-.04em',
                                        }}
                                    >
                                        Seller companies
                                    </h1>

                                    <p
                                        className="mb-0"
                                        style={{
                                            color: '#6e6e73',
                                            fontSize:
                                                '13px',
                                        }}
                                    >
                                        Manage companies,
                                        seller accounts
                                        and marketplace
                                        activity.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setCreateOpen(
                                            true
                                        )
                                    }
                                    className="btn d-inline-flex align-items-center justify-content-center gap-2"
                                    style={{
                                        height: '43px',
                                        borderRadius:
                                            '11px',
                                        padding:
                                            '0 17px',
                                        border: 'none',
                                        background:
                                            '#0071e3',
                                        color: '#fff',
                                        fontSize:
                                            '12px',
                                        fontWeight:
                                            650,
                                        boxShadow:
                                            '0 5px 15px rgba(0,113,227,.18)',
                                    }}
                                >
                                    <Icon.Plus
                                        width={16}
                                        height={16}
                                    />

                                    Add seller
                                </button>
                            </div>
                        </div>

                        {/* =================================================
                            FLASH
                        ================================================= */}
                        {flash?.success && (
                            <div
                                className="d-flex align-items-center gap-2 mb-4"
                                style={{
                                    padding:
                                        '11px 14px',
                                    borderRadius:
                                        '12px',
                                    background:
                                        '#eaf8f1',
                                    border: '1px solid #d3f0e2',
                                    color: '#16845b',
                                    fontSize:
                                        '12px',
                                    fontWeight:
                                        600,
                                }}
                            >
                                <Icon.Check
                                    width={15}
                                    height={15}
                                />

                                {flash.success}
                            </div>
                        )}

                        {/* =================================================
                            STATS
                        ================================================= */}
                        <div className="row g-3 mb-4">
                            <StatCard
                                label="Total sellers"
                                value={counts.total}
                                accent="#0071e3"
                                icon={
                                    <Icon.Building
                                        width={19}
                                        height={19}
                                    />
                                }
                            />

                            <StatCard
                                label="Approved"
                                value={
                                    counts.approved
                                }
                                accent="#16845b"
                                icon={
                                    <Icon.Check
                                        width={19}
                                        height={19}
                                    />
                                }
                            />

                            <StatCard
                                label="Pending"
                                value={
                                    counts.pending
                                }
                                accent="#b77900"
                                icon={
                                    <Icon.Refresh
                                        width={19}
                                        height={19}
                                    />
                                }
                            />

                            <StatCard
                                label="Rejected"
                                value={
                                    counts.rejected
                                }
                                accent="#d93025"
                                icon={
                                    <Icon.Close
                                        width={19}
                                        height={19}
                                    />
                                }
                            />
                        </div>

                        {/* =================================================
                            TABLE CARD
                        ================================================= */}
                        <div
                            style={{
                                background: '#fff',
                                border: '1px solid #e5e5ea',
                                borderRadius: '18px',
                                overflow: 'hidden',
                                boxShadow:
                                    '0 8px 30px rgba(0,0,0,.03)',
                            }}
                        >
                            {/* Toolbar */}
                            <div
                                className="p-3 p-md-4"
                                style={{
                                    borderBottom:
                                        '1px solid #f0f0f2',
                                }}
                            >
                                <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between">
                                    <div
                                        className="position-relative"
                                        style={{
                                            maxWidth:
                                                '380px',
                                            width: '100%',
                                        }}
                                    >
                                        <span
                                            className="position-absolute"
                                            style={{
                                                left: 13,
                                                top: 9,
                                                color: '#8e8e93',
                                            }}
                                        >
                                            <Icon.Search
                                                width={
                                                    16
                                                }
                                                height={
                                                    16
                                                }
                                            />
                                        </span>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search sellers..."
                                            value={
                                                query
                                            }
                                            onChange={(
                                                e
                                            ) =>
                                                setQuery(
                                                    e
                                                        .target
                                                        .value
                                                )
                                            }
                                            style={{
                                                height: '38px',
                                                borderRadius:
                                                    '10px',
                                                border: '1px solid #e5e5ea',
                                                background:
                                                    '#f8f8fa',
                                                paddingLeft:
                                                    '39px',
                                                fontSize:
                                                    '12px',
                                                boxShadow:
                                                    'none',
                                            }}
                                        />
                                    </div>

                                    <div className="d-flex gap-1 flex-wrap">
                                        {[
                                            'all',
                                            'pending',
                                            'approved',
                                            'rejected',
                                        ].map(
                                            (
                                                status
                                            ) => (
                                                <button
                                                    key={
                                                        status
                                                    }
                                                    type="button"
                                                    onClick={() =>
                                                        setStatusFilter(
                                                            status
                                                        )
                                                    }
                                                    style={filterButtonStyle(
                                                        statusFilter ===
                                                            status
                                                    )}
                                                >
                                                    {status ===
                                                    'all'
                                                        ? 'All sellers'
                                                        : status
                                                              .charAt(
                                                                  0
                                                              )
                                                              .toUpperCase() +
                                                          status.slice(
                                                              1
                                                          )}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="table-responsive">
                                <table
                                    className="table align-middle mb-0"
                                    style={{
                                        minWidth:
                                            '900px',
                                    }}
                                >
                                    <thead>
                                        <tr
                                            style={{
                                                background:
                                                    '#fafafa',
                                                borderBottom:
                                                    '1px solid #f0f0f2',
                                            }}
                                        >
                                            {[
                                                'Company',
                                                'Contact',
                                                'Description',
                                                'Status',
                                                'Actions',
                                            ].map(
                                                (
                                                    heading,
                                                    index
                                                ) => (
                                                    <th
                                                        key={
                                                            heading
                                                        }
                                                        className={
                                                            index ===
                                                            4
                                                                ? 'text-end'
                                                                : ''
                                                        }
                                                        style={{
                                                            padding:
                                                                '12px 18px',
                                                            fontSize:
                                                                '10px',
                                                            fontWeight:
                                                                700,
                                                            color: '#8e8e93',
                                                            textTransform:
                                                                'uppercase',
                                                            letterSpacing:
                                                                '.05em',
                                                            border:
                                                                'none',
                                                        }}
                                                    >
                                                        {
                                                            heading
                                                        }
                                                    </th>
                                                )
                                            )}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filtered.length ===
                                            0 && (
                                            <tr>
                                                <td
                                                    colSpan={
                                                        5
                                                    }
                                                    className="text-center"
                                                    style={{
                                                        padding:
                                                            '65px 20px',
                                                        border:
                                                            'none',
                                                    }}
                                                >
                                                    <div
                                                        className="mx-auto d-flex align-items-center justify-content-center mb-3"
                                                        style={{
                                                            width: '52px',
                                                            height: '52px',
                                                            borderRadius:
                                                                '15px',
                                                            background:
                                                                '#f2f2f7',
                                                            color: '#8e8e93',
                                                        }}
                                                    >
                                                        <Icon.Building
                                                            width={
                                                                23
                                                            }
                                                            height={
                                                                23
                                                            }
                                                        />
                                                    </div>

                                                    <div
                                                        style={{
                                                            fontSize:
                                                                '13px',
                                                            fontWeight:
                                                                650,
                                                            color: '#1d1d1f',
                                                        }}
                                                    >
                                                        No sellers
                                                        found
                                                    </div>

                                                    <div
                                                        className="mt-1"
                                                        style={{
                                                            fontSize:
                                                                '11px',
                                                            color: '#8e8e93',
                                                        }}
                                                    >
                                                        Try changing
                                                        your search
                                                        or filters.
                                                    </div>
                                                </td>
                                            </tr>
                                        )}

                                        {filtered.map(
                                            (
                                                seller
                                            ) => (
                                                <tr
                                                    key={
                                                        seller.id
                                                    }
                                                    onClick={() =>
                                                        setProfileTarget(
                                                            seller
                                                        )
                                                    }
                                                    style={{
                                                        cursor:
                                                            'pointer',
                                                        borderBottom:
                                                            '1px solid #f3f3f5',
                                                    }}
                                                >
                                                    {/* Company */}
                                                    <td
                                                        style={{
                                                            padding:
                                                                '15px 18px',
                                                            border:
                                                                'none',
                                                        }}
                                                    >
                                                        <div className="d-flex align-items-center gap-3">
                                                            <Avatar
                                                                name={
                                                                    seller.company_name
                                                                }
                                                                size={
                                                                    42
                                                                }
                                                            />

                                                            <div>
                                                                <div
                                                                    style={{
                                                                        fontSize:
                                                                            '12px',
                                                                        fontWeight:
                                                                            650,
                                                                        color: '#1d1d1f',
                                                                    }}
                                                                >
                                                                    {
                                                                        seller.company_name
                                                                    }
                                                                </div>

                                                                <div
                                                                    className="mt-1"
                                                                    style={{
                                                                        fontSize:
                                                                            '10px',
                                                                        color: '#8e8e93',
                                                                    }}
                                                                >
                                                                    #
                                                                    {
                                                                        seller.id
                                                                    }
                                                                    {' · '}
                                                                    {seller.address ||
                                                                        'No address'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    {/* Contact */}
                                                    <td
                                                        style={{
                                                            padding:
                                                                '15px 18px',
                                                            border:
                                                                'none',
                                                        }}
                                                    >
                                                        <div
                                                            className="d-flex align-items-center gap-2"
                                                            style={{
                                                                fontSize:
                                                                    '11px',
                                                                color: '#48484a',
                                                            }}
                                                        >
                                                            <Icon.Mail
                                                                width={
                                                                    14
                                                                }
                                                                height={
                                                                    14
                                                                }
                                                                style={{
                                                                    color: '#8e8e93',
                                                                }}
                                                            />

                                                            {
                                                                seller.email
                                                            }
                                                        </div>

                                                        <div
                                                            className="d-flex align-items-center gap-2 mt-1"
                                                            style={{
                                                                fontSize:
                                                                    '10px',
                                                                color: '#8e8e93',
                                                            }}
                                                        >
                                                            <Icon.Phone
                                                                width={
                                                                    14
                                                                }
                                                                height={
                                                                    14
                                                                }
                                                            />

                                                            {seller.phone ||
                                                                'No phone'}
                                                        </div>
                                                    </td>

                                                    {/* Description */}
                                                    <td
                                                        style={{
                                                            padding:
                                                                '15px 18px',
                                                            border:
                                                                'none',
                                                        }}
                                                    >
                                                        <span
                                                            className="d-inline-block text-truncate"
                                                            style={{
                                                                maxWidth:
                                                                    '240px',
                                                                fontSize:
                                                                    '11px',
                                                                color: '#6e6e73',
                                                            }}
                                                            title={
                                                                seller.description ||
                                                                ''
                                                            }
                                                        >
                                                            {seller.description ||
                                                                'No description'}
                                                        </span>
                                                    </td>

                                                    {/* Status */}
                                                    <td
                                                        style={{
                                                            padding:
                                                                '15px 18px',
                                                            border:
                                                                'none',
                                                        }}
                                                    >
                                                        <StatusBadge
                                                            status={
                                                                seller.status
                                                            }
                                                        />
                                                    </td>

                                                    {/* Actions */}
                                                    <td
                                                        className="text-end"
                                                        style={{
                                                            padding:
                                                                '15px 18px',
                                                            border:
                                                                'none',
                                                        }}
                                                        onClick={(
                                                            e
                                                        ) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        <div className="d-flex justify-content-end align-items-center gap-2">
                                                            <a
                                                                href={route(
                                                                    routes.show,
                                                                    seller.id
                                                                )}
                                                                className="btn d-flex align-items-center gap-2"
                                                                style={{
                                                                    height: '35px',
                                                                    borderRadius:
                                                                        '9px',
                                                                    border: '1px solid #d9e8f8',
                                                                    background:
                                                                        '#f4f9ff',
                                                                    color: '#0066cc',
                                                                    fontSize:
                                                                        '10px',
                                                                    fontWeight:
                                                                        650,
                                                                    padding:
                                                                        '0 11px',
                                                                    textDecoration:
                                                                        'none',
                                                                }}
                                                            >
                                                                <Icon.Eye
                                                                    width={
                                                                        14
                                                                    }
                                                                    height={
                                                                        14
                                                                    }
                                                                />

                                                                View
                                                            </a>

                                                            <ActionsMenu
                                                                onEdit={() => {
                                                                    setManageTarget(
                                                                        seller
                                                                    );
                                                                }}
                                                                onStatus={() => {
                                                                    setStatusTarget(
                                                                        seller
                                                                    );
                                                                }}
                                                                onDelete={() => {
                                                                    setDeleteTarget(
                                                                        seller
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Footer */}
                            <div
                                className="px-3 px-md-4 py-3"
                                style={{
                                    borderTop:
                                        '1px solid #f0f0f2',
                                    color: '#8e8e93',
                                    fontSize: '10px',
                                    background:
                                        '#fafafa',
                                }}
                            >
                                Showing{' '}
                                <strong
                                    style={{
                                        color: '#48484a',
                                    }}
                                >
                                    {filtered.length}
                                </strong>{' '}
                                of{' '}
                                <strong
                                    style={{
                                        color: '#48484a',
                                    }}
                                >
                                    {sellerList.length}
                                </strong>{' '}
                                seller
                                {sellerList.length ===
                                1
                                    ? ''
                                    : 's'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =====================================================
                CREATE SELLER
            ===================================================== */}

            <CreateSellerModal
                open={createOpen}
                onClose={() =>
                    setCreateOpen(false)
                }
            />

            {/* =====================================================
                PROFILE
            ===================================================== */}

            <ProfileModal
                seller={profileTarget}
                open={!!profileTarget}
                onClose={() =>
                    setProfileTarget(null)
                }
                onEdit={() => {
                    setManageTarget(
                        profileTarget
                    );
                    setProfileTarget(null);
                }}
                onStatus={() => {
                    setStatusTarget(
                        profileTarget
                    );
                    setProfileTarget(null);
                }}
                onDelete={() => {
                    setDeleteTarget(
                        profileTarget
                    );
                    setProfileTarget(null);
                }}
            />

            {/* =====================================================
                EDIT
            ===================================================== */}

            <ManageModal
                seller={manageTarget}
                open={!!manageTarget}
                onClose={() =>
                    setManageTarget(null)
                }
            />

            {/* =====================================================
                STATUS
            ===================================================== */}

            <StatusModal
                seller={statusTarget}
                open={!!statusTarget}
                onClose={() =>
                    setStatusTarget(null)
                }
            />

            {/* =====================================================
                DELETE
            ===================================================== */}

            <DeleteModal
                seller={deleteTarget}
                open={!!deleteTarget}
                onClose={() =>
                    setDeleteTarget(null)
                }
            />
        </AppLayout>
    );
}