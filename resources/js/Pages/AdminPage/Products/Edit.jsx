import React, { useRef, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const routes = {
    productUpdate: (id) => `/seller/products/${id}`,
};

/* =========================================================
   Icons
========================================================= */
const Icon = {
    ArrowLeft: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M19 12H5" />
            <path d="M11 6l-6 6 6 6" />
        </svg>
    ),

    Package: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M21 8l-9-5-9 5 9 5 9-5Z" />
            <path d="M3 8v8l9 5 9-5V8" />
            <path d="M12 13v8" />
        </svg>
    ),

    Tag: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M20 12.5 12.5 20a1.5 1.5 0 0 1-2.1 0l-6.4-6.4a1.5 1.5 0 0 1 0-2.1L11.5 4H19a1 1 0 0 1 1 1v7.5Z" />
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
            <path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" />
            <path d="M2.5 12 12 17l9.5-5" />
            <path d="M2.5 16 12 21l9.5-5" />
        </svg>
    ),

    Edit: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-12 1 1-4L16.5 3.5Z" />
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

    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M20 6 9 17l-5-5" />
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

    Image: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
        </svg>
    ),
};

/* =========================================================
   Reusable Field
========================================================= */
function Field({ label, icon, children, full = false, hint }) {
    return (
        <div className={full ? 'col-12' : 'col-12 col-md-6'}>
            <div className="mb-2 d-flex align-items-center justify-content-between">
                <label
                    className="form-label mb-0"
                    style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#48484a',
                        letterSpacing: '-0.01em',
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

            <div className="position-relative">
                {icon && (
                    <span
                        className="position-absolute d-flex align-items-center justify-content-center"
                        style={{
                            left: '14px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '17px',
                            height: '17px',
                            color: '#8e8e93',
                            pointerEvents: 'none',
                            zIndex: 2,
                        }}
                    >
                        {icon}
                    </span>
                )}

                {children}
            </div>
        </div>
    );
}

/* =========================================================
   Input
========================================================= */
function Input({ icon, ...props }) {
    return (
        <input
            {...props}
            className="form-control"
            style={{
                height: '48px',
                borderRadius: '12px',
                border: '1px solid #dedee3',
                background: '#fbfbfc',
                paddingLeft: icon ? '42px' : '14px',
                paddingRight: '14px',
                fontSize: '13px',
                fontWeight: 500,
                color: '#1d1d1f',
                boxShadow: 'none',
                outline: 'none',
            }}
        />
    );
}

/* =========================================================
   Section Header
========================================================= */
function SectionHeader({ icon, title, description }) {
    return (
        <div className="d-flex align-items-start gap-3 mb-4">
            <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: '#f2f2f7',
                    color: '#1d1d1f',
                }}
            >
                {icon}
            </div>

            <div>
                <h2
                    className="mb-1"
                    style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: '#1d1d1f',
                    }}
                >
                    {title}
                </h2>

                <p
                    className="mb-0"
                    style={{
                        fontSize: '12px',
                        color: '#8e8e93',
                        lineHeight: 1.5,
                    }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function Edit({ product, categories = [] }) {
    const fileRef = useRef(null);

    const [preview, setPreview] = useState(
        product?.image ? `/storage/${product.image}` : null
    );

    const [dragActive, setDragActive] = useState(false);
    const [imageCleared, setImageCleared] = useState(false);

    const categoryOptions = Array.isArray(categories) ? categories : [];

    const { data, setData, post, processing, errors, transform } = useForm({
        name: product?.name ?? '',
        product_category_id: product?.product_category_id ?? '',
        price: product?.price ?? '',
        stock: product?.stock ?? '',
        description: product?.description ?? '',
        image: null,
        status: product?.status ?? 'active',
    });

    transform((formData) => ({
        ...formData,
        _method: 'PUT',
    }));

    const submit = (e) => {
        e.preventDefault();

        post(routes.productUpdate(product.id), {
            forceFormData: true,
        });
    };

    const handleFile = (file) => {
        if (!file) return;

        setData('image', file);
        setImageCleared(false);

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
        setImageCleared(true);

        if (fileRef.current) {
            fileRef.current.value = '';
        }
    };

    const formatPrice = (value) => {
        if (!value) return '0';

        return Number(value).toLocaleString('en-RW');
    };

    const selectedCategory = categoryOptions.find(
        (category) =>
            String(category.id) === String(data.product_category_id)
    );

    return (
        <>
            <Head title={`Edit Product - ${product?.name ?? 'Product'}`} />

            <div
                style={{
                    minHeight: '100vh',
                    background: '#f5f5f7',
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    color: '#1d1d1f',
                }}
            >
                <div className="container-fluid px-3 px-md-4 py-4 py-lg-5">
                    <div
                        className="mx-auto"
                        style={{
                            maxWidth: '1180px',
                        }}
                    >
                        {/* =================================================
                            Header
                        ================================================= */}
                        <div className="mb-4 mb-lg-5">
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="btn btn-link text-decoration-none p-0 mb-3 d-inline-flex align-items-center gap-2"
                                style={{
                                    color: '#6e6e73',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                }}
                            >
                                <Icon.ArrowLeft
                                    width={15}
                                    height={15}
                                />

                                Back to products
                            </button>

                            <div className="row align-items-end g-3">
                                <div className="col">
                                    <div
                                        className="d-inline-flex align-items-center gap-2 mb-2 px-2 py-1 rounded-pill"
                                        style={{
                                            background: '#eaf2ff',
                                            color: '#0066cc',
                                            fontSize: '10px',
                                            fontWeight: 700,
                                            letterSpacing: '0.06em',
                                        }}
                                    >
                                        <Icon.Edit
                                            width={12}
                                            height={12}
                                        />

                                        PRODUCT MANAGEMENT
                                    </div>

                                    <h1
                                        className="mb-1"
                                        style={{
                                            fontSize: '30px',
                                            lineHeight: 1.1,
                                            fontWeight: 700,
                                            letterSpacing: '-0.04em',
                                        }}
                                    >
                                        Edit product
                                    </h1>

                                    <p
                                        className="mb-0"
                                        style={{
                                            color: '#6e6e73',
                                            fontSize: '13px',
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        Keep your marketplace listing accurate,
                                        clear and up to date.
                                    </p>
                                </div>

                                {/* Status badge */}
                                <div className="col-auto">
                                    <div
                                        className="d-inline-flex align-items-center gap-2 px-3 py-2"
                                        style={{
                                            borderRadius: '999px',
                                            background:
                                                data.status === 'active'
                                                    ? '#eaf8f1'
                                                    : '#f2f2f7',
                                            color:
                                                data.status === 'active'
                                                    ? '#16845b'
                                                    : '#6e6e73',
                                            fontSize: '11px',
                                            fontWeight: 700,
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background:
                                                    data.status === 'active'
                                                        ? '#22a06b'
                                                        : '#8e8e93',
                                            }}
                                        />

                                        {data.status === 'active'
                                            ? 'Active listing'
                                            : 'Draft'}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={submit}>
                            <div className="row g-4">
                                {/* =================================================
                                    MAIN FORM
                                ================================================= */}
                                <div className="col-12 col-lg-8">
                                    <div
                                        className="bg-white"
                                        style={{
                                            border: '1px solid #e5e5ea',
                                            borderRadius: '20px',
                                            boxShadow:
                                                '0 10px 35px rgba(0,0,0,.035)',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* PRODUCT INFORMATION */}
                                        <section className="p-4 p-md-5">
                                            <SectionHeader
                                                icon={
                                                    <Icon.Package
                                                        width={19}
                                                        height={19}
                                                    />
                                                }
                                                title="Product information"
                                                description="Define the core information customers will see."
                                            />

                                            <div className="row g-4">
                                                <Field
                                                    label="Product name"
                                                    full
                                                    icon={
                                                        <Icon.Package
                                                            width={16}
                                                            height={16}
                                                        />
                                                    }
                                                >
                                                    <Input
                                                        type="text"
                                                        placeholder="e.g. Premium Cotton Bedsheet"
                                                        value={data.name}
                                                        onChange={(e) =>
                                                            setData(
                                                                'name',
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        icon
                                                    />

                                                    {errors.name && (
                                                        <div
                                                            className="mt-2"
                                                            style={{
                                                                color: '#d93025',
                                                                fontSize: '11px',
                                                            }}
                                                        >
                                                            {errors.name}
                                                        </div>
                                                    )}
                                                </Field>

                                                <Field
                                                    label="Category"
                                                    full
                                                    icon={
                                                        <Icon.Tag
                                                            width={16}
                                                            height={16}
                                                        />
                                                    }
                                                >
                                                    <select
                                                        className="form-select"
                                                        value={
                                                            data.product_category_id
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                'product_category_id',
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        style={{
                                                            height: '48px',
                                                            borderRadius: '12px',
                                                            border: '1px solid #dedee3',
                                                            backgroundColor:
                                                                '#fbfbfc',
                                                            paddingLeft: '42px',
                                                            paddingRight: '40px',
                                                            fontSize: '13px',
                                                            fontWeight: 500,
                                                            color: '#1d1d1f',
                                                            boxShadow: 'none',
                                                        }}
                                                    >
                                                        <option value="">
                                                            Select a category
                                                        </option>

                                                        {categoryOptions.map(
                                                            (category) => (
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
                                                    </select>

                                                    <span
                                                        className="position-absolute"
                                                        style={{
                                                            right: '14px',
                                                            top: '50%',
                                                            transform:
                                                                'translateY(-50%)',
                                                            pointerEvents:
                                                                'none',
                                                            color: '#8e8e93',
                                                        }}
                                                    >
                                                        <Icon.ChevronDown
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>

                                                    {errors.product_category_id && (
                                                        <div
                                                            className="mt-2"
                                                            style={{
                                                                color: '#d93025',
                                                                fontSize: '11px',
                                                            }}
                                                        >
                                                            {
                                                                errors.product_category_id
                                                            }
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                        </section>

                                        <div
                                            style={{
                                                height: '1px',
                                                background: '#f0f0f2',
                                            }}
                                        />

                                        {/* =================================================
                                            PRICING
                                        ================================================= */}
                                        <section className="p-4 p-md-5">
                                            <SectionHeader
                                                icon={
                                                    <Icon.Cash
                                                        width={19}
                                                        height={19}
                                                    />
                                                }
                                                title="Pricing & inventory"
                                                description="Control the commercial details and current availability."
                                            />

                                            <div className="row g-4">
                                                <Field
                                                    label="Price"
                                                    hint="Rwandan Francs"
                                                    icon={
                                                        <Icon.Cash
                                                            width={16}
                                                            height={16}
                                                        />
                                                    }
                                                >
                                                    <Input
                                                        type="number"
                                                        min="0"
                                                        step="100"
                                                        placeholder="0"
                                                        value={data.price}
                                                        onChange={(e) =>
                                                            setData(
                                                                'price',
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        icon
                                                    />

                                                    {errors.price && (
                                                        <div
                                                            className="mt-2"
                                                            style={{
                                                                color: '#d93025',
                                                                fontSize: '11px',
                                                            }}
                                                        >
                                                            {errors.price}
                                                        </div>
                                                    )}
                                                </Field>

                                                <Field
                                                    label="Stock quantity"
                                                    hint="Units available"
                                                    icon={
                                                        <Icon.Stack
                                                            width={16}
                                                            height={16}
                                                        />
                                                    }
                                                >
                                                    <Input
                                                        type="number"
                                                        min="0"
                                                        placeholder="0"
                                                        value={data.stock}
                                                        onChange={(e) =>
                                                            setData(
                                                                'stock',
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        icon
                                                    />

                                                    {errors.stock && (
                                                        <div
                                                            className="mt-2"
                                                            style={{
                                                                color: '#d93025',
                                                                fontSize: '11px',
                                                            }}
                                                        >
                                                            {errors.stock}
                                                        </div>
                                                    )}
                                                </Field>

                                                <div className="col-12">
                                                    <label
                                                        className="form-label mb-2"
                                                        style={{
                                                            fontSize: '12px',
                                                            fontWeight: 600,
                                                            color: '#48484a',
                                                        }}
                                                    >
                                                        Listing status
                                                    </label>

                                                    <div
                                                        className="p-1 d-flex gap-1"
                                                        style={{
                                                            background: '#f2f2f7',
                                                            borderRadius: '12px',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        {[
                                                            {
                                                                value: 'active',
                                                                label: 'Active',
                                                                description:
                                                                    'Visible to customers',
                                                            },
                                                            {
                                                                value: 'draft',
                                                                label: 'Draft',
                                                                description:
                                                                    'Keep unpublished',
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
                                                                    className="btn flex-grow-1 text-start"
                                                                    style={{
                                                                        minHeight:
                                                                            '58px',
                                                                        borderRadius:
                                                                            '9px',
                                                                        border: active
                                                                            ? '1px solid #dedee3'
                                                                            : '1px solid transparent',
                                                                        background:
                                                                            active
                                                                                ? '#fff'
                                                                                : 'transparent',
                                                                        color: active
                                                                            ? '#1d1d1f'
                                                                            : '#6e6e73',
                                                                        boxShadow:
                                                                            active
                                                                                ? '0 2px 7px rgba(0,0,0,.06)'
                                                                                : 'none',
                                                                        padding:
                                                                            '9px 13px',
                                                                    }}
                                                                >
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        {active && (
                                                                            <span
                                                                                className="d-flex align-items-center justify-content-center"
                                                                                style={{
                                                                                    width: '18px',
                                                                                    height: '18px',
                                                                                    borderRadius:
                                                                                        '50%',
                                                                                    background:
                                                                                        '#0071e3',
                                                                                    color: '#fff',
                                                                                }}
                                                                            >
                                                                                <Icon.Check
                                                                                    width={
                                                                                        11
                                                                                    }
                                                                                    height={
                                                                                        11
                                                                                    }
                                                                                />
                                                                            </span>
                                                                        )}

                                                                        <span
                                                                            style={{
                                                                                fontSize:
                                                                                    '12px',
                                                                                fontWeight: 700,
                                                                            }}
                                                                        >
                                                                            {
                                                                                option.label
                                                                            }
                                                                        </span>
                                                                    </div>

                                                                    <div
                                                                        className="mt-1"
                                                                        style={{
                                                                            fontSize:
                                                                                '10px',
                                                                            color: '#8e8e93',
                                                                        }}
                                                                    >
                                                                        {
                                                                            option.description
                                                                        }
                                                                    </div>
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <div
                                            style={{
                                                height: '1px',
                                                background: '#f0f0f2',
                                            }}
                                        />

                                        {/* =================================================
                                            DESCRIPTION
                                        ================================================= */}
                                        <section className="p-4 p-md-5">
                                            <SectionHeader
                                                icon={
                                                    <Icon.Edit
                                                        width={19}
                                                        height={19}
                                                    />
                                                }
                                                title="Product description"
                                                description="Give customers enough information to understand the product."
                                            />

                                            <textarea
                                                className="form-control"
                                                rows={7}
                                                placeholder="Describe the product, its features, materials, dimensions, benefits and other useful information..."
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData(
                                                        'description',
                                                        e.target.value
                                                    )
                                                }
                                                style={{
                                                    borderRadius: '13px',
                                                    border: '1px solid #dedee3',
                                                    background: '#fbfbfc',
                                                    fontSize: '13px',
                                                    lineHeight: 1.7,
                                                    padding: '14px',
                                                    resize: 'vertical',
                                                    minHeight: '170px',
                                                    color: '#1d1d1f',
                                                    boxShadow: 'none',
                                                }}
                                            />

                                            {errors.description && (
                                                <div
                                                    className="mt-2"
                                                    style={{
                                                        color: '#d93025',
                                                        fontSize: '11px',
                                                    }}
                                                >
                                                    {errors.description}
                                                </div>
                                            )}
                                        </section>

                                        <div
                                            style={{
                                                height: '1px',
                                                background: '#f0f0f2',
                                            }}
                                        />

                                        {/* =================================================
                                            IMAGE
                                        ================================================= */}
                                        <section className="p-4 p-md-5">
                                            <SectionHeader
                                                icon={
                                                    <Icon.Image
                                                        width={19}
                                                        height={19}
                                                    />
                                                }
                                                title="Product media"
                                                description="Use a clear, high-quality image to represent your listing."
                                            />

                                            <input
                                                ref={fileRef}
                                                type="file"
                                                accept="image/*"
                                                style={{ display: 'none' }}
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
                                                        setDragActive(true);
                                                    }}
                                                    onDragLeave={() =>
                                                        setDragActive(false)
                                                    }
                                                    onDrop={onDrop}
                                                    style={{
                                                        border: dragActive
                                                            ? '1.5px dashed #0071e3'
                                                            : '1.5px dashed #d2d2d7',
                                                        borderRadius: '16px',
                                                        background: dragActive
                                                            ? '#f0f7ff'
                                                            : '#fafafa',
                                                        padding: '42px 20px',
                                                        cursor: 'pointer',
                                                        transition:
                                                            'all .2s ease',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    <div
                                                        className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '54px',
                                                            height: '54px',
                                                            borderRadius: '16px',
                                                            background:
                                                                '#eaf2ff',
                                                            color: '#0071e3',
                                                        }}
                                                    >
                                                        <Icon.Upload
                                                            width={22}
                                                            height={22}
                                                        />
                                                    </div>

                                                    <div
                                                        style={{
                                                            fontSize: '14px',
                                                            fontWeight: 650,
                                                            color: '#1d1d1f',
                                                        }}
                                                    >
                                                        Upload product image
                                                    </div>

                                                    <div
                                                        className="mt-1"
                                                        style={{
                                                            fontSize: '12px',
                                                            color: '#6e6e73',
                                                        }}
                                                    >
                                                        Click here or drag and
                                                        drop an image
                                                    </div>

                                                    <div
                                                        className="mt-2"
                                                        style={{
                                                            fontSize: '10px',
                                                            color: '#8e8e93',
                                                        }}
                                                    >
                                                        PNG, JPG or JPEG ·
                                                        Maximum 5MB
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    style={{
                                                        border: '1px solid #e5e5ea',
                                                        borderRadius: '16px',
                                                        background: '#fafafa',
                                                        padding: '12px',
                                                    }}
                                                >
                                                    <div className="d-flex align-items-center gap-3">
                                                        <img
                                                            src={preview}
                                                            alt="Product preview"
                                                            style={{
                                                                width: '88px',
                                                                height: '88px',
                                                                objectFit:
                                                                    'cover',
                                                                borderRadius:
                                                                    '12px',
                                                                border: '1px solid #e5e5ea',
                                                                background:
                                                                    '#fff',
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
                                                                        '13px',
                                                                    fontWeight:
                                                                        650,
                                                                    color: '#1d1d1f',
                                                                }}
                                                            >
                                                                {data.image
                                                                    ?.name ??
                                                                    (imageCleared
                                                                        ? ''
                                                                        : 'Current product image')}
                                                            </div>

                                                            <div
                                                                className="mt-1"
                                                                style={{
                                                                    fontSize:
                                                                        '11px',
                                                                    color: '#8e8e93',
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
                                                                    : 'Current uploaded image'}
                                                            </div>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    fileRef.current?.click()
                                                                }
                                                                className="btn btn-link p-0 mt-2 text-decoration-none"
                                                                style={{
                                                                    color: '#0071e3',
                                                                    fontSize:
                                                                        '11px',
                                                                    fontWeight:
                                                                        600,
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
                                                            className="btn d-flex align-items-center justify-content-center flex-shrink-0"
                                                            style={{
                                                                width: '36px',
                                                                height: '36px',
                                                                borderRadius:
                                                                    '10px',
                                                                border: '1px solid #e5e5ea',
                                                                background:
                                                                    '#fff',
                                                                color: '#d93025',
                                                            }}
                                                            title="Remove image"
                                                        >
                                                            <Icon.Trash
                                                                width={15}
                                                                height={15}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {errors.image && (
                                                <div
                                                    className="mt-2"
                                                    style={{
                                                        color: '#d93025',
                                                        fontSize: '11px',
                                                    }}
                                                >
                                                    {errors.image}
                                                </div>
                                            )}
                                        </section>

                                        {/* =================================================
                                            ACTION BAR
                                        ================================================= */}
                                        <div
                                            className="p-4 p-md-5"
                                            style={{
                                                background: '#fafafa',
                                                borderTop:
                                                    '1px solid #f0f0f2',
                                            }}
                                        >
                                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                                                <div>
                                                    <div
                                                        style={{
                                                            fontSize: '11px',
                                                            fontWeight: 600,
                                                            color: '#6e6e73',
                                                        }}
                                                    >
                                                        Changes are saved to
                                                        your listing
                                                    </div>

                                                    <div
                                                        className="mt-1"
                                                        style={{
                                                            fontSize: '10px',
                                                            color: '#8e8e93',
                                                        }}
                                                    >
                                                        Review your information
                                                        before saving.
                                                    </div>
                                                </div>

                                                <div className="d-flex gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            window.history.back()
                                                        }
                                                        className="btn"
                                                        style={{
                                                            height: '44px',
                                                            borderRadius: '11px',
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
                                                        className="btn d-flex align-items-center justify-content-center gap-2"
                                                        style={{
                                                            height: '44px',
                                                            borderRadius: '11px',
                                                            padding: '0 20px',
                                                            border: 'none',
                                                            background:
                                                                '#0071e3',
                                                            color: '#fff',
                                                            fontSize: '12px',
                                                            fontWeight: 650,
                                                            boxShadow:
                                                                '0 4px 14px rgba(0,113,227,.20)',
                                                            opacity: processing
                                                                ? 0.65
                                                                : 1,
                                                        }}
                                                    >
                                                        <Icon.Save
                                                            width={15}
                                                            height={15}
                                                        />

                                                        {processing
                                                            ? 'Saving…'
                                                            : 'Save changes'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* =================================================
                                    LIVE PREVIEW / SIDE PANEL
                                ================================================= */}
                                <div className="col-12 col-lg-4">
                                    <div
                                        style={{
                                            position: 'sticky',
                                            top: '24px',
                                        }}
                                    >
                                        <div
                                            className="bg-white"
                                            style={{
                                                border: '1px solid #e5e5ea',
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                boxShadow:
                                                    '0 10px 35px rgba(0,0,0,.035)',
                                            }}
                                        >
                                            <div className="p-4">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div>
                                                        <div
                                                            style={{
                                                                fontSize:
                                                                    '14px',
                                                                fontWeight: 700,
                                                                letterSpacing:
                                                                    '-0.02em',
                                                            }}
                                                        >
                                                            Listing preview
                                                        </div>

                                                        <div
                                                            className="mt-1"
                                                            style={{
                                                                fontSize:
                                                                    '11px',
                                                                color: '#8e8e93',
                                                            }}
                                                        >
                                                            Customer-facing
                                                            appearance
                                                        </div>
                                                    </div>

                                                    <span
                                                        style={{
                                                            fontSize: '10px',
                                                            fontWeight: 700,
                                                            color:
                                                                data.status ===
                                                                'active'
                                                                    ? '#16845b'
                                                                    : '#6e6e73',
                                                            background:
                                                                data.status ===
                                                                'active'
                                                                    ? '#eaf8f1'
                                                                    : '#f2f2f7',
                                                            padding:
                                                                '5px 8px',
                                                            borderRadius:
                                                                '999px',
                                                        }}
                                                    >
                                                        {data.status ===
                                                        'active'
                                                            ? 'ACTIVE'
                                                            : 'DRAFT'}
                                                    </span>
                                                </div>

                                                {/* Preview image */}
                                                <div
                                                    className="d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '100%',
                                                        aspectRatio: '1 / 1',
                                                        borderRadius: '15px',
                                                        overflow: 'hidden',
                                                        background: '#f2f2f7',
                                                        border: '1px solid #e5e5ea',
                                                    }}
                                                >
                                                    {preview ? (
                                                        <img
                                                            src={preview}
                                                            alt={
                                                                data.name ||
                                                                'Product'
                                                            }
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit:
                                                                    'cover',
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="text-center">
                                                            <Icon.Image
                                                                width={32}
                                                                height={32}
                                                                style={{
                                                                    color: '#c7c7cc',
                                                                }}
                                                            />

                                                            <div
                                                                className="mt-2"
                                                                style={{
                                                                    fontSize:
                                                                        '11px',
                                                                    color: '#8e8e93',
                                                                }}
                                                            >
                                                                No product
                                                                image
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Preview details */}
                                                <div className="pt-4">
                                                    <div
                                                        style={{
                                                            fontSize: '10px',
                                                            color: '#8e8e93',
                                                            fontWeight: 600,
                                                            textTransform:
                                                                'uppercase',
                                                            letterSpacing:
                                                                '.05em',
                                                        }}
                                                    >
                                                        {selectedCategory
                                                            ?.name ||
                                                            'Product category'}
                                                    </div>

                                                    <div
                                                        className="mt-1"
                                                        style={{
                                                            fontSize: '18px',
                                                            lineHeight: 1.25,
                                                            fontWeight: 700,
                                                            letterSpacing:
                                                                '-0.03em',
                                                            color: '#1d1d1f',
                                                            wordBreak:
                                                                'break-word',
                                                        }}
                                                    >
                                                        {data.name ||
                                                            'Your product name'}
                                                    </div>

                                                    <div
                                                        className="mt-2"
                                                        style={{
                                                            fontSize: '18px',
                                                            fontWeight: 700,
                                                            color: '#0071e3',
                                                        }}
                                                    >
                                                        {formatPrice(
                                                            data.price
                                                        )}{' '}
                                                        RWF
                                                    </div>
                                                </div>

                                                <div
                                                    className="mt-4 pt-3"
                                                    style={{
                                                        borderTop:
                                                            '1px solid #f0f0f2',
                                                    }}
                                                >
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span
                                                            style={{
                                                                fontSize: '11px',
                                                                color: '#8e8e93',
                                                            }}
                                                        >
                                                            Available stock
                                                        </span>

                                                        <span
                                                            style={{
                                                                fontSize: '12px',
                                                                fontWeight: 650,
                                                                color: '#1d1d1f',
                                                            }}
                                                        >
                                                            {data.stock || 0}{' '}
                                                            units
                                                        </span>
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                                        <span
                                                            style={{
                                                                fontSize: '11px',
                                                                color: '#8e8e93',
                                                            }}
                                                        >
                                                            Category
                                                        </span>

                                                        <span
                                                            className="text-truncate ms-3"
                                                            style={{
                                                                maxWidth:
                                                                    '150px',
                                                                fontSize: '11px',
                                                                fontWeight: 600,
                                                                color: '#1d1d1f',
                                                            }}
                                                        >
                                                            {selectedCategory
                                                                ?.name ||
                                                                'Not selected'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quick tips */}
                                        <div
                                            className="mt-3 p-4"
                                            style={{
                                                borderRadius: '16px',
                                                background: '#eef6ff',
                                                border: '1px solid #dcecff',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: '11px',
                                                    fontWeight: 700,
                                                    color: '#0066cc',
                                                }}
                                            >
                                                Listing quality
                                            </div>

                                            <div
                                                className="mt-2"
                                                style={{
                                                    fontSize: '11px',
                                                    lineHeight: 1.6,
                                                    color: '#4d6680',
                                                }}
                                            >
                                                Use a clear product name,
                                                accurate pricing, sufficient
                                                stock information and a
                                                high-quality product image.
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

Edit.layout = (page) => (
    <AppLayout children={page} title="Edit Product" />
);