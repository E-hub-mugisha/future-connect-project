import React, { useMemo, useRef, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const routes = {
    productsStore: '/admin/products',
    productsIndex: '/admin/products',
};

/* ================================================================
   ICONS
================================================================ */

const Icon = {
    ArrowLeft: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M19 12H5" />
            <path d="m11 6-6 6 6 6" />
        </svg>
    ),

    Package: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="m21 8-9-5-9 5 9 5 9-5Z" />
            <path d="M3 8v8l9 5 9-5V8" />
            <path d="M12 13v8" />
        </svg>
    ),

    User: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
    ),

    Search: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
        </svg>
    ),

    X: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M6 6l12 12" />
            <path d="M18 6 6 18" />
        </svg>
    ),

    Tag: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="m20 12.5-7.5 7.5a1.5 1.5 0 0 1-2.1 0L4 13.6a1.5 1.5 0 0 1 0-2.1L11.5 4H19a1 1 0 0 1 1 1v7.5Z" />
            <circle cx="15" cy="9" r="1.4" fill="currentColor" stroke="none" />
        </svg>
    ),

    Cash: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
            <circle cx="12" cy="12" r="2.6" />
            <path d="M6.5 9v.01M17.5 15v.01" />
        </svg>
    ),

    Stack: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="m12 3-9.5 5L12 13l9.5-5L12 3Z" />
            <path d="m2.5 12 9.5 5 9.5-5" />
            <path d="m2.5 16 9.5 5 9.5-5" />
        </svg>
    ),

    Image: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="3" y="4" width="18" height="16" rx="2.5" />
            <circle cx="8.5" cy="9.5" r="1.6" />
            <path d="M21 16.5 15.5 11 5 21" />
        </svg>
    ),

    Upload: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 16V4" />
            <path d="m7 9 5-5 5 5" />
            <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
        </svg>
    ),

    Trash: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M4 7h16" />
            <path d="M9 7V4.8c0-.4.4-.8.9-.8h4.2c.5 0 .9.4.9.8V7" />
            <path d="M6 7l1 13.2c0 .9.8 1.8 1.8 1.8h6.4c1 0 1.8-.9 1.8-1.8L18 7" />
        </svg>
    ),

    Save: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M5 4h11l3 3v13H5V4Z" />
            <path d="M8 4v5h7V4" />
            <path d="M8 14h8v6H8v-6Z" />
        </svg>
    ),

    ChevronDown: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="m6 9 6 6 6-6" />
        </svg>
    ),

    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M20 6 9 17l-5-5" />
        </svg>
    ),

    Sparkles: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />
            <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
        </svg>
    ),
};

/* ================================================================
   GLOBAL STYLES
================================================================ */

const inputStyle = {
    height: '48px',
    width: '100%',
    border: '1px solid #e2e2e7',
    borderRadius: '12px',
    background: '#fbfbfc',
    color: '#1d1d1f',
    fontSize: '14px',
    outline: 'none',
    boxShadow: 'none',
};

const appleFont =
    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

/* ================================================================
   FIELD
================================================================ */

function Field({ label, hint, icon, children, full = false }) {
    return (
        <div className={full ? 'col-12' : 'col-12 col-lg-6'}>
            <div className="mb-2 d-flex align-items-center justify-content-between">
                <label
                    className="form-label mb-0"
                    style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#242426',
                    }}
                >
                    {label}
                </label>

                {hint && (
                    <span
                        style={{
                            fontSize: '11px',
                            color: '#8e8e93',
                        }}
                    >
                        {hint}
                    </span>
                )}
            </div>

            {icon ? (
                <div className="position-relative">
                    <span
                        className="position-absolute d-flex align-items-center justify-content-center"
                        style={{
                            left: '14px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '18px',
                            height: '18px',
                            color: '#8e8e93',
                            pointerEvents: 'none',
                            zIndex: 3,
                        }}
                    >
                        {icon}
                    </span>

                    {children}
                </div>
            ) : (
                children
            )}
        </div>
    );
}

/* ================================================================
   SELECT
================================================================ */

function Select({ children, ...props }) {
    return (
        <div className="position-relative">
            <select
                {...props}
                style={{
                    ...inputStyle,
                    appearance: 'none',
                    paddingLeft: '42px',
                    paddingRight: '42px',
                    cursor: 'pointer',
                }}
            >
                {children}
            </select>

            <span
                className="position-absolute"
                style={{
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#8e8e93',
                    pointerEvents: 'none',
                }}
            >
                <Icon.ChevronDown width={15} height={15} />
            </span>
        </div>
    );
}

/* ================================================================
   SEARCHABLE SELLER
================================================================ */

function SellerSearch({
    sellers = [],
    value,
    onChange,
    error,
}) {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);

    const selectedSeller = useMemo(() => {
        return sellers.find(
            (seller) => String(seller.id) === String(value)
        );
    }, [sellers, value]);

    const filteredSellers = useMemo(() => {
        const term = search.trim().toLowerCase();

        if (!term) {
            return sellers.slice(0, 8);
        }

        return sellers
            .filter((seller) => {
                const company = seller.company_name || '';
                const name = seller.name || '';
                const email = seller.email || '';

                return `${company} ${name} ${email}`
                    .toLowerCase()
                    .includes(term);
            })
            .slice(0, 8);
    }, [sellers, search]);

    const selectSeller = (seller) => {
        onChange(String(seller.id));
        setSearch('');
        setOpen(false);
    };

    const clearSeller = () => {
        onChange('');
        setSearch('');
        setOpen(false);
    };

    return (
        <div className="position-relative">
            {!selectedSeller ? (
                <>
                    <div className="position-relative">
                        <span
                            className="position-absolute"
                            style={{
                                left: '14px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#8e8e93',
                                zIndex: 2,
                            }}
                        >
                            <Icon.Search width={17} height={17} />
                        </span>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setOpen(true);
                            }}
                            onFocus={() => setOpen(true)}
                            placeholder="Search seller or company..."
                            autoComplete="off"
                            style={{
                                ...inputStyle,
                                paddingLeft: '42px',
                                paddingRight: '14px',
                            }}
                        />
                    </div>

                    {open && (
                        <>
                            <div
                                className="position-fixed"
                                style={{
                                    inset: 0,
                                    zIndex: 1040,
                                }}
                                onClick={() => setOpen(false)}
                            />

                            <div
                                className="position-absolute w-100 bg-white"
                                style={{
                                    top: 'calc(100% + 6px)',
                                    left: 0,
                                    zIndex: 1050,
                                    border: '1px solid #e5e5ea',
                                    borderRadius: '14px',
                                    boxShadow:
                                        '0 14px 35px rgba(0,0,0,.10)',
                                    overflow: 'hidden',
                                }}
                            >
                                <div
                                    className="px-3 py-2"
                                    style={{
                                        borderBottom:
                                            '1px solid #f0f0f2',
                                        fontSize: '10px',
                                        color: '#8e8e93',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '.05em',
                                    }}
                                >
                                    {search
                                        ? 'Matching sellers'
                                        : 'Available sellers'}
                                </div>

                                <div
                                    style={{
                                        maxHeight: '260px',
                                        overflowY: 'auto',
                                    }}
                                >
                                    {filteredSellers.length > 0 ? (
                                        filteredSellers.map((seller) => (
                                            <button
                                                type="button"
                                                key={seller.id}
                                                onClick={() =>
                                                    selectSeller(seller)
                                                }
                                                className="w-100 border-0 bg-white text-start d-flex align-items-center gap-3"
                                                style={{
                                                    padding: '11px 14px',
                                                    transition:
                                                        'background .15s ease',
                                                }}
                                                onMouseEnter={(e) =>
                                                    (e.currentTarget.style.background =
                                                        '#f7f7f9')
                                                }
                                                onMouseLeave={(e) =>
                                                    (e.currentTarget.style.background =
                                                        '#fff')
                                                }
                                            >
                                                <div
                                                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                                                    style={{
                                                        width: '36px',
                                                        height: '36px',
                                                        borderRadius: '10px',
                                                        background: '#eef5ff',
                                                        color: '#0071e3',
                                                        fontSize: '13px',
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {(seller.company_name ||
                                                        seller.name ||
                                                        'S')
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                </div>

                                                <div
                                                    className="flex-grow-1"
                                                    style={{ minWidth: 0 }}
                                                >
                                                    <div
                                                        className="text-truncate"
                                                        style={{
                                                            fontSize: '13px',
                                                            fontWeight: 600,
                                                            color: '#1d1d1f',
                                                        }}
                                                    >
                                                        {seller.company_name ||
                                                            seller.name ||
                                                            'Unnamed seller'}
                                                    </div>

                                                    {(seller.name ||
                                                        seller.email) && (
                                                        <div
                                                            className="text-truncate mt-1"
                                                            style={{
                                                                fontSize: '11px',
                                                                color: '#8e8e93',
                                                            }}
                                                        >
                                                            {seller.name ||
                                                                seller.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </button>
                                        ))
                                    ) : (
                                        <div className="text-center px-3 py-4">
                                            <div
                                                className="d-flex align-items-center justify-content-center mx-auto mb-2 rounded-circle"
                                                style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    background: '#f5f5f7',
                                                    color: '#8e8e93',
                                                }}
                                            >
                                                <Icon.Search
                                                    width={18}
                                                    height={18}
                                                />
                                            </div>

                                            <div
                                                style={{
                                                    fontSize: '13px',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                No seller found
                                            </div>

                                            <div
                                                className="mt-1"
                                                style={{
                                                    fontSize: '11px',
                                                    color: '#8e8e93',
                                                }}
                                            >
                                                Try another seller or company
                                                name.
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div
                    className="d-flex align-items-center gap-2"
                    style={{
                        minHeight: '48px',
                        padding: '6px 8px 6px 10px',
                        border: '1px solid #d9d9df',
                        borderRadius: '12px',
                        background: '#fbfbfc',
                    }}
                >
                    <div
                        className="d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '9px',
                            background: '#eaf4ff',
                            color: '#0071e3',
                            fontSize: '12px',
                            fontWeight: 700,
                        }}
                    >
                        {(selectedSeller.company_name ||
                            selectedSeller.name ||
                            'S')
                            .charAt(0)
                            .toUpperCase()}
                    </div>

                    <div
                        className="flex-grow-1"
                        style={{ minWidth: 0 }}
                    >
                        <div
                            className="text-truncate"
                            style={{
                                fontSize: '13px',
                                fontWeight: 600,
                                color: '#1d1d1f',
                            }}
                        >
                            {selectedSeller.company_name ||
                                selectedSeller.name}
                        </div>

                        <div
                            className="text-truncate"
                            style={{
                                fontSize: '10px',
                                color: '#8e8e93',
                            }}
                        >
                            Seller selected
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={clearSeller}
                        className="btn p-0 d-flex align-items-center justify-content-center"
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            color: '#8e8e93',
                        }}
                        title="Change seller"
                    >
                        <Icon.X width={16} height={16} />
                    </button>
                </div>
            )}

            <ErrorMessage message={error} />
        </div>
    );
}

/* ================================================================
   SECTION HEADER
================================================================ */

function SectionHeader({
    number,
    icon,
    title,
    description,
}) {
    return (
        <div className="d-flex align-items-center gap-3 mb-4">
            <div
                className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                style={{
                    width: '40px',
                    height: '40px',
                    background: '#f2f2f7',
                    color: '#1d1d1f',
                }}
            >
                {icon}
            </div>

            <div>
                <div className="d-flex align-items-center gap-2">
                    <span
                        style={{
                            fontSize: '10px',
                            fontWeight: 700,
                            color: '#8e8e93',
                            letterSpacing: '.04em',
                        }}
                    >
                        {number}
                    </span>

                    <h2
                        className="mb-0"
                        style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            letterSpacing: '-.01em',
                        }}
                    >
                        {title}
                    </h2>
                </div>

                <p
                    className="mb-0 mt-1"
                    style={{
                        fontSize: '12px',
                        color: '#8e8e93',
                    }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

/* ================================================================
   DIVIDER
================================================================ */

function Divider() {
    return (
        <div
            style={{
                height: '1px',
                background: '#f0f0f2',
            }}
        />
    );
}

/* ================================================================
   ERROR
================================================================ */

function ErrorMessage({ message }) {
    if (!message) return null;

    return (
        <div
            className="mt-2"
            style={{
                fontSize: '12px',
                color: '#d93025',
            }}
        >
            {message}
        </div>
    );
}

/* ================================================================
   MAIN COMPONENT
================================================================ */

export default function Create({
    sellers = [],
    categories = [],
}) {
    const fileRef = useRef(null);

    const [preview, setPreview] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        name: '',
        seller_id: '',
        product_category_id: '',
        price: '',
        stock: '',
        description: '',
        image: null,
        status: 'active',
    });

    const selectedCategory = useMemo(() => {
        return categories.find(
            (category) =>
                String(category.id) ===
                String(data.product_category_id)
        );
    }, [categories, data.product_category_id]);

    const selectedSeller = useMemo(() => {
        return sellers.find(
            (seller) =>
                String(seller.id) === String(data.seller_id)
        );
    }, [sellers, data.seller_id]);

    const submit = (e) => {
        e.preventDefault();

        post(routes.productsStore, {
            forceFormData: true,
        });
    };

    const handleFile = (file) => {
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('Please select an image smaller than 5MB.');
            return;
        }

        setData('image', file);

        const reader = new FileReader();

        reader.onload = () => {
            setPreview(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const onDrop = (e) => {
        e.preventDefault();
        setDragActive(false);

        handleFile(e.dataTransfer.files?.[0]);
    };

    const clearImage = () => {
        setData('image', null);
        setPreview(null);

        if (fileRef.current) {
            fileRef.current.value = '';
        }
    };

    return (
        <>
            <Head title="Create Product" />

            <div
                style={{
                    minHeight: '100vh',
                    background: '#f5f5f7',
                    color: '#1d1d1f',
                    fontFamily: appleFont,
                }}
            >
                <div className="container-fluid px-3 px-md-4 py-4 py-lg-5">
                    <div
                        className="mx-auto"
                        style={{
                            maxWidth: '1120px',
                        }}
                    >
                        {/* =====================================================
                            HEADER
                        ====================================================== */}

                        <div className="mb-4">
                            <button
                                type="button"
                                onClick={() =>
                                    window.history.back()
                                }
                                className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-2 mb-3"
                                style={{
                                    color: '#6e6e73',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                }}
                            >
                                <Icon.ArrowLeft
                                    width={16}
                                    height={16}
                                />

                                Back to products
                            </button>

                            <div className="row align-items-end g-3">
                                <div className="col">
                                    <div
                                        className="d-inline-flex align-items-center gap-2 px-2 py-1 rounded-pill mb-2"
                                        style={{
                                            background: '#eaf4ff',
                                            color: '#0071e3',
                                            fontSize: '10px',
                                            fontWeight: 700,
                                            letterSpacing: '.06em',
                                        }}
                                    >
                                        <Icon.Sparkles
                                            width={13}
                                            height={13}
                                        />

                                        MARKETPLACE
                                    </div>

                                    <h1
                                        className="mb-1"
                                        style={{
                                            fontSize:
                                                'clamp(24px, 4vw, 30px)',
                                            fontWeight: 700,
                                            letterSpacing: '-0.035em',
                                            lineHeight: 1.15,
                                        }}
                                    >
                                        Create a product
                                    </h1>

                                    <p
                                        className="mb-0"
                                        style={{
                                            color: '#6e6e73',
                                            fontSize: '14px',
                                            maxWidth: '650px',
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        Add a product to your marketplace,
                                        assign it to a seller, set pricing
                                        and stock, and publish it for users.
                                    </p>
                                </div>

                                <div className="col-auto d-none d-md-block">
                                    <div
                                        className="px-3 py-2 rounded-3"
                                        style={{
                                            background: '#fff',
                                            border: '1px solid #e5e5ea',
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: '10px',
                                                color: '#8e8e93',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '.05em',
                                            }}
                                        >
                                            Listing status
                                        </div>

                                        <div
                                            className="d-flex align-items-center gap-2 mt-1"
                                            style={{
                                                fontSize: '13px',
                                                fontWeight: 600,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    width: '7px',
                                                    height: '7px',
                                                    borderRadius: '50%',
                                                    background:
                                                        data.status ===
                                                        'active'
                                                            ? '#34c759'
                                                            : '#ff9500',
                                                }}
                                            />

                                            {data.status === 'active'
                                                ? 'Ready to publish'
                                                : 'Draft'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =====================================================
                            FORM
                        ====================================================== */}

                        <form onSubmit={submit}>
                            <div className="row g-4">
                                {/* =================================================
                                    MAIN CONTENT
                                ================================================== */}

                                <div className="col-12 col-xl-8">
                                    <div
                                        className="bg-white"
                                        style={{
                                            border:
                                                '1px solid #e5e5ea',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow:
                                                '0 8px 30px rgba(0,0,0,.035)',
                                        }}
                                    >
                                        {/* BASIC DETAILS */}

                                        <section className="p-4 p-md-5">
                                            <SectionHeader
                                                number="01"
                                                icon={
                                                    <Icon.Package
                                                        width={18}
                                                        height={18}
                                                    />
                                                }
                                                title="Basic details"
                                                description="Introduce the product clearly."
                                            />

                                            <div className="row g-4">
                                                <Field
                                                    label="Product name"
                                                    hint="Required"
                                                    icon={
                                                        <Icon.Package
                                                            width={17}
                                                            height={17}
                                                        />
                                                    }
                                                    full
                                                >
                                                    <input
                                                        type="text"
                                                        value={data.name}
                                                        onChange={(e) =>
                                                            setData(
                                                                'name',
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="e.g. Premium Cotton Bed Sheet"
                                                        required
                                                        style={{
                                                            ...inputStyle,
                                                            paddingLeft:
                                                                '42px',
                                                        }}
                                                    />

                                                    <ErrorMessage
                                                        message={
                                                            errors.name
                                                        }
                                                    />
                                                </Field>

                                                {/* SEARCHABLE SELLER */}

                                                <div className="col-12 col-lg-6">
                                                    <div className="mb-2 d-flex align-items-center justify-content-between">
                                                        <label
                                                            className="form-label mb-0"
                                                            style={{
                                                                fontSize:
                                                                    '13px',
                                                                fontWeight: 600,
                                                                color: '#242426',
                                                            }}
                                                        >
                                                            Seller / provider
                                                        </label>

                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    '11px',
                                                                color: '#8e8e93',
                                                            }}
                                                        >
                                                            Required
                                                        </span>
                                                    </div>

                                                    <SellerSearch
                                                        sellers={sellers}
                                                        value={
                                                            data.seller_id
                                                        }
                                                        onChange={(value) =>
                                                            setData(
                                                                'seller_id',
                                                                value
                                                            )
                                                        }
                                                        error={
                                                            errors.seller_id
                                                        }
                                                    />
                                                </div>

                                                <Field
                                                    label="Category"
                                                    hint="Required"
                                                    icon={
                                                        <Icon.Tag
                                                            width={17}
                                                            height={17}
                                                        />
                                                    }
                                                >
                                                    <Select
                                                        value={
                                                            data.product_category_id
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                'product_category_id',
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value="">
                                                            Select category
                                                        </option>

                                                        {categories.map(
                                                            (
                                                                category
                                                            ) => (
                                                                <option
                                                                    key={
                                                                        category.id
                                                                    }
                                                                    value={
                                                                        category.id
                                                                    }
                                                                >
                                                                    {
                                                                        category.name
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </Select>

                                                    <ErrorMessage
                                                        message={
                                                            errors.product_category_id
                                                        }
                                                    />
                                                </Field>
                                            </div>
                                        </section>

                                        <Divider />

                                        {/* COMMERCIAL */}

                                        <section className="p-4 p-md-5">
                                            <SectionHeader
                                                number="02"
                                                icon={
                                                    <Icon.Cash
                                                        width={18}
                                                        height={18}
                                                    />
                                                }
                                                title="Commercial details"
                                                description="Set the product value and available quantity."
                                            />

                                            <div className="row g-4">
                                                <Field
                                                    label="Price"
                                                    hint="RWF"
                                                    icon={
                                                        <Icon.Cash
                                                            width={17}
                                                            height={17}
                                                        />
                                                    }
                                                >
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        step="100"
                                                        value={data.price}
                                                        onChange={(e) =>
                                                            setData(
                                                                'price',
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="0"
                                                        required
                                                        style={{
                                                            ...inputStyle,
                                                            paddingLeft:
                                                                '42px',
                                                        }}
                                                    />

                                                    <ErrorMessage
                                                        message={
                                                            errors.price
                                                        }
                                                    />
                                                </Field>

                                                <Field
                                                    label="Available quantity"
                                                    hint="Units"
                                                    icon={
                                                        <Icon.Stack
                                                            width={17}
                                                            height={17}
                                                        />
                                                    }
                                                >
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        value={data.stock}
                                                        onChange={(e) =>
                                                            setData(
                                                                'stock',
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="0"
                                                        required
                                                        style={{
                                                            ...inputStyle,
                                                            paddingLeft:
                                                                '42px',
                                                        }}
                                                    />

                                                    <ErrorMessage
                                                        message={
                                                            errors.stock
                                                        }
                                                    />
                                                </Field>
                                            </div>
                                        </section>

                                        <Divider />

                                        {/* DESCRIPTION */}

                                        <section className="p-4 p-md-5">
                                            <SectionHeader
                                                number="03"
                                                icon={
                                                    <Icon.Image
                                                        width={18}
                                                        height={18}
                                                    />
                                                }
                                                title="Product information"
                                                description="Give customers useful information about the product."
                                            />

                                            <label
                                                className="form-label mb-2"
                                                style={{
                                                    fontSize: '13px',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Description
                                            </label>

                                            <textarea
                                                value={
                                                    data.description
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'description',
                                                        e.target.value
                                                    )
                                                }
                                                rows={7}
                                                placeholder="Describe the product, materials, size, features, benefits, condition and other important details."
                                                style={{
                                                    width: '100%',
                                                    border:
                                                        '1px solid #e2e2e7',
                                                    borderRadius: '14px',
                                                    background:
                                                        '#fbfbfc',
                                                    padding:
                                                        '14px 15px',
                                                    fontSize: '14px',
                                                    color: '#1d1d1f',
                                                    resize: 'vertical',
                                                    minHeight: '170px',
                                                    lineHeight: 1.6,
                                                    outline: 'none',
                                                }}
                                            />

                                            <ErrorMessage
                                                message={
                                                    errors.description
                                                }
                                            />
                                        </section>

                                        <Divider />

                                        {/* IMAGE */}

                                        <section className="p-4 p-md-5">
                                            <SectionHeader
                                                number="04"
                                                icon={
                                                    <Icon.Image
                                                        width={18}
                                                        height={18}
                                                    />
                                                }
                                                title="Product image"
                                                description="Add a clear image that represents the product."
                                            />

                                            <input
                                                ref={fileRef}
                                                type="file"
                                                accept="image/png,image/jpeg,image/jpg,image/webp"
                                                style={{
                                                    display: 'none',
                                                }}
                                                onChange={(e) =>
                                                    handleFile(
                                                        e.target.files?.[0]
                                                    )
                                                }
                                            />

                                            {!preview ? (
                                                <div
                                                    onClick={() =>
                                                        fileRef.current?.click()
                                                    }
                                                    onDragOver={(e) => {
                                                        e.preventDefault();
                                                        setDragActive(
                                                            true
                                                        );
                                                    }}
                                                    onDragLeave={() =>
                                                        setDragActive(
                                                            false
                                                        )
                                                    }
                                                    onDrop={onDrop}
                                                    style={{
                                                        border:
                                                            dragActive
                                                                ? '1.5px dashed #0071e3'
                                                                : '1.5px dashed #d2d2d7',
                                                        background:
                                                            dragActive
                                                                ? '#f0f7ff'
                                                                : '#fafafa',
                                                        borderRadius:
                                                            '16px',
                                                        padding:
                                                            '42px 20px',
                                                        textAlign:
                                                            'center',
                                                        cursor:
                                                            'pointer',
                                                        transition:
                                                            'all .2s ease',
                                                    }}
                                                >
                                                    <div
                                                        className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                                                        style={{
                                                            width: '54px',
                                                            height: '54px',
                                                            background:
                                                                '#eef5ff',
                                                            color:
                                                                '#0071e3',
                                                        }}
                                                    >
                                                        <Icon.Upload
                                                            width={23}
                                                            height={23}
                                                        />
                                                    </div>

                                                    <div
                                                        style={{
                                                            fontSize:
                                                                '14px',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        Upload product image
                                                    </div>

                                                    <div
                                                        className="mt-1"
                                                        style={{
                                                            fontSize:
                                                                '12px',
                                                            color:
                                                                '#8e8e93',
                                                        }}
                                                    >
                                                        Drag and drop or click
                                                        to browse
                                                    </div>

                                                    <div
                                                        className="mt-2"
                                                        style={{
                                                            fontSize:
                                                                '11px',
                                                            color:
                                                                '#aeaeb2',
                                                        }}
                                                    >
                                                        PNG, JPG, JPEG or WEBP
                                                        · Maximum 5MB
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    className="d-flex align-items-center gap-3"
                                                    style={{
                                                        padding: '12px',
                                                        border:
                                                            '1px solid #e5e5ea',
                                                        borderRadius:
                                                            '14px',
                                                        background:
                                                            '#fafafa',
                                                    }}
                                                >
                                                    <img
                                                        src={preview}
                                                        alt="Product preview"
                                                        style={{
                                                            width: '84px',
                                                            height: '84px',
                                                            objectFit:
                                                                'cover',
                                                            borderRadius:
                                                                '12px',
                                                            border:
                                                                '1px solid #e5e5ea',
                                                        }}
                                                    />

                                                    <div
                                                        className="flex-grow-1"
                                                        style={{
                                                            minWidth: 0,
                                                        }}
                                                    >
                                                        <div
                                                            className="text-truncate"
                                                            style={{
                                                                fontSize:
                                                                    '14px',
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            {
                                                                data.image
                                                                    ?.name
                                                            }
                                                        </div>

                                                        <div
                                                            className="mt-1"
                                                            style={{
                                                                fontSize:
                                                                    '12px',
                                                                color:
                                                                    '#8e8e93',
                                                            }}
                                                        >
                                                            {data.image
                                                                ? `${(
                                                                      data
                                                                          .image
                                                                          .size /
                                                                      1024
                                                                  ).toFixed(
                                                                      0
                                                                  )} KB`
                                                                : ''}
                                                        </div>

                                                        <button
                                                            type="button"
                                                            className="btn btn-link p-0 mt-2 text-decoration-none"
                                                            onClick={() =>
                                                                fileRef.current?.click()
                                                            }
                                                            style={{
                                                                fontSize:
                                                                    '12px',
                                                                fontWeight:
                                                                    600,
                                                                color:
                                                                    '#0071e3',
                                                            }}
                                                        >
                                                            Replace image
                                                        </button>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={
                                                            clearImage
                                                        }
                                                        className="btn d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '38px',
                                                            height: '38px',
                                                            borderRadius:
                                                                '10px',
                                                            border:
                                                                '1px solid #e5e5ea',
                                                            background:
                                                                '#fff',
                                                            color:
                                                                '#d93025',
                                                        }}
                                                    >
                                                        <Icon.Trash
                                                            width={16}
                                                            height={16}
                                                        />
                                                    </button>
                                                </div>
                                            )}

                                            <ErrorMessage
                                                message={errors.image}
                                            />
                                        </section>
                                    </div>
                                </div>

                                {/* =================================================
                                    SIDEBAR
                                ================================================== */}

                                <div className="col-12 col-xl-4">
                                    <div
                                        className="sticky-xl-top"
                                        style={{
                                            top: '24px',
                                            zIndex: 1,
                                        }}
                                    >
                                        {/* PUBLISH */}

                                        <div
                                            className="bg-white mb-3"
                                            style={{
                                                border:
                                                    '1px solid #e5e5ea',
                                                borderRadius: '18px',
                                                padding: '22px',
                                                boxShadow:
                                                    '0 8px 30px rgba(0,0,0,.035)',
                                            }}
                                        >
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div>
                                                    <div
                                                        style={{
                                                            fontSize:
                                                                '15px',
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        Publishing
                                                    </div>

                                                    <div
                                                        className="mt-1"
                                                        style={{
                                                            fontSize:
                                                                '12px',
                                                            color:
                                                                '#8e8e93',
                                                        }}
                                                    >
                                                        Choose whether the
                                                        product is visible.
                                                    </div>
                                                </div>

                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle"
                                                    style={{
                                                        width: '36px',
                                                        height: '36px',
                                                        background:
                                                            '#eaf8f1',
                                                        color:
                                                            '#16845b',
                                                    }}
                                                >
                                                    <Icon.Check
                                                        width={17}
                                                        height={17}
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className="d-flex align-items-center justify-content-between p-3 mb-3"
                                                style={{
                                                    background:
                                                        '#f8f8fa',
                                                    border:
                                                        '1px solid #ededf0',
                                                    borderRadius:
                                                        '12px',
                                                }}
                                            >
                                                <div>
                                                    <div
                                                        style={{
                                                            fontSize:
                                                                '13px',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {data.status ===
                                                        'active'
                                                            ? 'Active'
                                                            : 'Draft'}
                                                    </div>

                                                    <div
                                                        style={{
                                                            fontSize:
                                                                '11px',
                                                            color:
                                                                '#8e8e93',
                                                        }}
                                                    >
                                                        {data.status ===
                                                        'active'
                                                            ? 'Visible to users'
                                                            : 'Not publicly visible'}
                                                    </div>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setData(
                                                            'status',
                                                            data.status ===
                                                                'active'
                                                                ? 'draft'
                                                                : 'active'
                                                        )
                                                    }
                                                    className="border-0 p-0"
                                                    style={{
                                                        width: '44px',
                                                        height: '26px',
                                                        borderRadius:
                                                            '20px',
                                                        background:
                                                            data.status ===
                                                            'active'
                                                                ? '#34c759'
                                                                : '#d2d2d7',
                                                        position:
                                                            'relative',
                                                        transition:
                                                            'background .2s ease',
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            position:
                                                                'absolute',
                                                            top: '3px',
                                                            left:
                                                                data.status ===
                                                                'active'
                                                                    ? '21px'
                                                                    : '3px',
                                                            width: '20px',
                                                            height: '20px',
                                                            borderRadius:
                                                                '50%',
                                                            background:
                                                                '#fff',
                                                            boxShadow:
                                                                '0 1px 3px rgba(0,0,0,.2)',
                                                            transition:
                                                                'left .2s ease',
                                                        }}
                                                    />
                                                </button>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                                                style={{
                                                    height: '46px',
                                                    borderRadius:
                                                        '12px',
                                                    border: 'none',
                                                    background:
                                                        '#0071e3',
                                                    color: '#fff',
                                                    fontSize: '13px',
                                                    fontWeight: 600,
                                                    boxShadow:
                                                        '0 6px 16px rgba(0,113,227,.18)',
                                                    opacity: processing
                                                        ? 0.65
                                                        : 1,
                                                }}
                                            >
                                                <Icon.Save
                                                    width={16}
                                                    height={16}
                                                />

                                                {processing
                                                    ? 'Creating…'
                                                    : 'Create product'}
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    window.history.back()
                                                }
                                                className="btn w-100 mt-2"
                                                style={{
                                                    height: '44px',
                                                    borderRadius:
                                                        '12px',
                                                    border:
                                                        '1px solid #e2e2e7',
                                                    background:
                                                        '#fff',
                                                    color:
                                                        '#6e6e73',
                                                    fontSize: '13px',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Cancel
                                            </button>
                                        </div>

                                        {/* PREVIEW */}

                                        <div
                                            className="bg-white mb-3"
                                            style={{
                                                border:
                                                    '1px solid #e5e5ea',
                                                borderRadius: '18px',
                                                padding: '20px',
                                            }}
                                        >
                                            <div
                                                className="mb-3"
                                                style={{
                                                    fontSize: '13px',
                                                    fontWeight: 700,
                                                }}
                                            >
                                                Product preview
                                            </div>

                                            <div
                                                style={{
                                                    border:
                                                        '1px solid #e5e5ea',
                                                    borderRadius:
                                                        '14px',
                                                    overflow: 'hidden',
                                                    background:
                                                        '#fafafa',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        height: '150px',
                                                        background:
                                                            preview
                                                                ? `url(${preview}) center / cover`
                                                                : '#f2f2f7',
                                                        display:
                                                            'flex',
                                                        alignItems:
                                                            'center',
                                                        justifyContent:
                                                            'center',
                                                        color:
                                                            '#aeaeb2',
                                                    }}
                                                >
                                                    {!preview && (
                                                        <Icon.Image
                                                            width={30}
                                                            height={30}
                                                        />
                                                    )}
                                                </div>

                                                <div className="p-3">
                                                    <div
                                                        className="mb-1 text-truncate"
                                                        style={{
                                                            fontSize:
                                                                '14px',
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        {data.name ||
                                                            'Your product name'}
                                                    </div>

                                                    <div
                                                        className="mb-2"
                                                        style={{
                                                            fontSize:
                                                                '11px',
                                                            color:
                                                                '#8e8e93',
                                                        }}
                                                    >
                                                        {selectedCategory
                                                            ?.name ||
                                                            'Category'}
                                                    </div>

                                                    {selectedSeller && (
                                                        <div
                                                            className="mb-2 text-truncate"
                                                            style={{
                                                                fontSize:
                                                                    '11px',
                                                                color:
                                                                    '#6e6e73',
                                                            }}
                                                        >
                                                            Seller:{' '}
                                                            <strong>
                                                                {selectedSeller.company_name ||
                                                                    selectedSeller.name}
                                                            </strong>
                                                        </div>
                                                    )}

                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    '13px',
                                                                fontWeight:
                                                                    700,
                                                            }}
                                                        >
                                                            {data.price
                                                                ? `${Number(
                                                                      data.price
                                                                  ).toLocaleString()} RWF`
                                                                : 'Price'}
                                                        </span>

                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    '10px',
                                                                padding:
                                                                    '4px 8px',
                                                                borderRadius:
                                                                    '20px',
                                                                background:
                                                                    data.status ===
                                                                    'active'
                                                                        ? '#eaf8f1'
                                                                        : '#fff4e5',
                                                                color:
                                                                    data.status ===
                                                                    'active'
                                                                        ? '#16845b'
                                                                        : '#b76e00',
                                                                fontWeight:
                                                                    600,
                                                            }}
                                                        >
                                                            {data.status ===
                                                            'active'
                                                                ? 'Active'
                                                                : 'Draft'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* TIP */}

                                        <div
                                            style={{
                                                borderRadius: '18px',
                                                padding: '20px',
                                                background:
                                                    'linear-gradient(135deg, #eef5ff 0%, #f7faff 100%)',
                                                border:
                                                    '1px solid #dceaff',
                                            }}
                                        >
                                            <div className="d-flex gap-3">
                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                                    style={{
                                                        width: '36px',
                                                        height: '36px',
                                                        background:
                                                            '#fff',
                                                        color:
                                                            '#0071e3',
                                                    }}
                                                >
                                                    <Icon.Sparkles
                                                        width={17}
                                                        height={17}
                                                    />
                                                </div>

                                                <div>
                                                    <div
                                                        style={{
                                                            fontSize:
                                                                '13px',
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        Make it discoverable
                                                    </div>

                                                    <p
                                                        className="mb-0 mt-1"
                                                        style={{
                                                            fontSize:
                                                                '11px',
                                                            lineHeight:
                                                                1.55,
                                                            color:
                                                                '#6e6e73',
                                                        }}
                                                    >
                                                        Use a clear product
                                                        name, accurate category,
                                                        correct seller and
                                                        detailed description.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

/* ================================================================
   LAYOUT
================================================================ */

Create.layout = (page) => (
    <AppLayout children={page} title="Create Product" />
);
