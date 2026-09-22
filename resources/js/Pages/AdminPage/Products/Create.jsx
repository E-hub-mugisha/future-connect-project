import React, { useRef, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const routes = {
    productsStore: '/admin/products',
    productsIndex: '/admin/products',
};

/* ─────────────────────────────────────────────
   Icons
───────────────────────────────────────────── */
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

function Field({ label, hint, icon, children, full = false }) {
    return (
        <div className={full ? 'col-12' : 'col-12 col-lg-6'}>
            <div className="mb-1 d-flex align-items-center justify-content-between">
                <label
                    className="form-label mb-1"
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

            <div className="position-relative">
                {icon && (
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

export default function Create({ sellers = [], categories = [] }) {
    const fileRef = useRef(null);

    const [preview, setPreview] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        seller_id: '',
        product_category_id: '',
        price: '',
        stock: '',
        description: '',
        image: null,
        status: 'active',
    });

    const submit = (e) => {
        e.preventDefault();

        post(routes.productsStore, {
            forceFormData: true,
        });
    };

    const handleFile = (file) => {
        if (!file) return;

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
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                }}
            >
                <div className="container-fluid px-3 px-md-4 py-4 py-lg-5">
                    <div
                        className="mx-auto"
                        style={{
                            maxWidth: '1080px',
                        }}
                    >
                        {/* ───────────────── HEADER ───────────────── */}
                        <div className="mb-4">
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-2 mb-3"
                                style={{
                                    color: '#6e6e73',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                }}
                            >
                                <Icon.ArrowLeft width={16} height={16} />
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
                                        TALENT MARKETPLACE
                                    </div>

                                    <h1
                                        className="mb-1"
                                        style={{
                                            fontSize: '30px',
                                            fontWeight: 700,
                                            letterSpacing: '-0.035em',
                                            lineHeight: 1.15,
                                        }}
                                    >
                                        Create a listing
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
                                        Add a new opportunity, service or
                                        product to the talent marketplace.
                                        Give people the information they need
                                        to discover and connect with it.
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
                                                    background: '#34c759',
                                                }}
                                            />
                                            Ready to publish
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={submit}>
                            <div className="row g-4">
                                {/* ───────────────── MAIN ───────────────── */}
                                <div className="col-12 col-xl-8">
                                    <div
                                        className="bg-white"
                                        style={{
                                            border: '1px solid #e5e5ea',
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
                                                description="Introduce the listing clearly."
                                            />

                                            <div className="row g-4">
                                                <Field
                                                    label="Listing name"
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
                                                        placeholder="e.g. Senior Product Designer"
                                                        required
                                                        style={{
                                                            ...inputStyle,
                                                            paddingLeft: '42px',
                                                        }}
                                                    />

                                                    <ErrorMessage
                                                        message={errors.name}
                                                    />
                                                </Field>

                                                <Field
                                                    label="Seller / provider"
                                                    hint="Required"
                                                    icon={
                                                        <Icon.User
                                                            width={17}
                                                            height={17}
                                                        />
                                                    }
                                                >
                                                    <Select
                                                        value={data.seller_id}
                                                        onChange={(e) =>
                                                            setData(
                                                                'seller_id',
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value="">
                                                            Select provider
                                                        </option>

                                                        {sellers.map((seller) => (
                                                            <option
                                                                key={seller.id}
                                                                value={seller.id}
                                                            >
                                                                {
                                                                    seller.company_name
                                                                }
                                                            </option>
                                                        ))}
                                                    </Select>

                                                    <ErrorMessage
                                                        message={
                                                            errors.seller_id
                                                        }
                                                    />
                                                </Field>

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
                                                description="Set the value and availability."
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
                                                            paddingLeft: '42px',
                                                        }}
                                                    />

                                                    <ErrorMessage
                                                        message={errors.price}
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
                                                            paddingLeft: '42px',
                                                        }}
                                                    />

                                                    <ErrorMessage
                                                        message={errors.stock}
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
                                                title="About this listing"
                                                description="Help people understand what you are offering."
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
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData(
                                                        'description',
                                                        e.target.value
                                                    )
                                                }
                                                rows={7}
                                                placeholder="Describe the role, service or product. Include important details, requirements, benefits, experience, materials, or anything people should know."
                                                style={{
                                                    width: '100%',
                                                    border: '1px solid #e2e2e7',
                                                    borderRadius: '14px',
                                                    background: '#fbfbfc',
                                                    padding: '14px 15px',
                                                    fontSize: '14px',
                                                    color: '#1d1d1f',
                                                    resize: 'vertical',
                                                    minHeight: '170px',
                                                    lineHeight: 1.6,
                                                    outline: 'none',
                                                }}
                                            />

                                            <ErrorMessage
                                                message={errors.description}
                                            />
                                        </section>

                                        <Divider />

                                        {/* MEDIA */}
                                        <section className="p-4 p-md-5">
                                            <SectionHeader
                                                number="04"
                                                icon={
                                                    <Icon.Image
                                                        width={18}
                                                        height={18}
                                                    />
                                                }
                                                title="Visual identity"
                                                description="Add an image that represents this listing."
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
                                                        background: dragActive
                                                            ? '#f0f7ff'
                                                            : '#fafafa',
                                                        borderRadius: '16px',
                                                        padding: '42px 20px',
                                                        textAlign: 'center',
                                                        cursor: 'pointer',
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
                                                            color: '#0071e3',
                                                        }}
                                                    >
                                                        <Icon.Upload
                                                            width={23}
                                                            height={23}
                                                        />
                                                    </div>

                                                    <div
                                                        style={{
                                                            fontSize: '14px',
                                                            fontWeight: 600,
                                                            color: '#1d1d1f',
                                                        }}
                                                    >
                                                        Upload listing image
                                                    </div>

                                                    <div
                                                        className="mt-1"
                                                        style={{
                                                            fontSize: '12px',
                                                            color: '#8e8e93',
                                                        }}
                                                    >
                                                        Drag and drop or click to
                                                        browse
                                                    </div>

                                                    <div
                                                        className="mt-2"
                                                        style={{
                                                            fontSize: '11px',
                                                            color: '#aeaeb2',
                                                        }}
                                                    >
                                                        PNG, JPG or JPEG ·
                                                        Maximum 5MB
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    className="d-flex align-items-center gap-3"
                                                    style={{
                                                        padding: '12px',
                                                        border: '1px solid #e5e5ea',
                                                        borderRadius: '14px',
                                                        background: '#fafafa',
                                                    }}
                                                >
                                                    <img
                                                        src={preview}
                                                        alt="Listing preview"
                                                        style={{
                                                            width: '84px',
                                                            height: '84px',
                                                            objectFit: 'cover',
                                                            borderRadius: '12px',
                                                            border: '1px solid #e5e5ea',
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
                                                                fontSize: '14px',
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            {data.image?.name}
                                                        </div>

                                                        <div
                                                            className="mt-1"
                                                            style={{
                                                                fontSize: '12px',
                                                                color: '#8e8e93',
                                                            }}
                                                        >
                                                            {data.image
                                                                ? `${(
                                                                      data.image
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
                                                                fontSize: '12px',
                                                                fontWeight: 600,
                                                                color: '#0071e3',
                                                            }}
                                                        >
                                                            Replace image
                                                        </button>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={clearImage}
                                                        className="btn d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: '38px',
                                                            height: '38px',
                                                            borderRadius: '10px',
                                                            border: '1px solid #e5e5ea',
                                                            background: '#fff',
                                                            color: '#d93025',
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

                                {/* ───────────────── SIDEBAR ───────────────── */}
                                <div className="col-12 col-xl-4">
                                    <div
                                        className="sticky-xl-top"
                                        style={{
                                            top: '24px',
                                            zIndex: 1,
                                        }}
                                    >
                                        {/* Publish card */}
                                        <div
                                            className="bg-white mb-3"
                                            style={{
                                                border: '1px solid #e5e5ea',
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
                                                            fontSize: '15px',
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        Publishing
                                                    </div>

                                                    <div
                                                        className="mt-1"
                                                        style={{
                                                            fontSize: '12px',
                                                            color: '#8e8e93',
                                                        }}
                                                    >
                                                        Choose how this listing
                                                        appears.
                                                    </div>
                                                </div>

                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle"
                                                    style={{
                                                        width: '36px',
                                                        height: '36px',
                                                        background: '#eaf8f1',
                                                        color: '#16845b',
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
                                                    background: '#f8f8fa',
                                                    border: '1px solid #ededf0',
                                                    borderRadius: '12px',
                                                }}
                                            >
                                                <div>
                                                    <div
                                                        style={{
                                                            fontSize: '13px',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        Active
                                                    </div>

                                                    <div
                                                        style={{
                                                            fontSize: '11px',
                                                            color: '#8e8e93',
                                                        }}
                                                    >
                                                        Visible to users
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
                                                        borderRadius: '20px',
                                                        background:
                                                            data.status ===
                                                            'active'
                                                                ? '#34c759'
                                                                : '#d2d2d7',
                                                        position: 'relative',
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
                                                            borderRadius: '50%',
                                                            background: '#fff',
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
                                                    borderRadius: '12px',
                                                    border: 'none',
                                                    background: '#0071e3',
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
                                                    ? 'Publishing…'
                                                    : 'Create listing'}
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    window.history.back()
                                                }
                                                className="btn w-100 mt-2"
                                                style={{
                                                    height: '44px',
                                                    borderRadius: '12px',
                                                    border: '1px solid #e2e2e7',
                                                    background: '#fff',
                                                    color: '#6e6e73',
                                                    fontSize: '13px',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Cancel
                                            </button>
                                        </div>

                                        {/* Listing preview */}
                                        <div
                                            className="bg-white mb-3"
                                            style={{
                                                border: '1px solid #e5e5ea',
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
                                                Listing preview
                                            </div>

                                            <div
                                                style={{
                                                    border: '1px solid #e5e5ea',
                                                    borderRadius: '14px',
                                                    overflow: 'hidden',
                                                    background: '#fafafa',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        height: '135px',
                                                        background: preview
                                                            ? `url(${preview}) center / cover`
                                                            : '#f2f2f7',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        color: '#aeaeb2',
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
                                                            fontSize: '14px',
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        {data.name ||
                                                            'Your listing title'}
                                                    </div>

                                                    <div
                                                        className="mb-2"
                                                        style={{
                                                            fontSize: '11px',
                                                            color: '#8e8e93',
                                                        }}
                                                    >
                                                        {data.product_category_id
                                                            ? categories.find(
                                                                  (category) =>
                                                                      String(
                                                                          category.id
                                                                      ) ===
                                                                      String(
                                                                          data.product_category_id
                                                                      )
                                                              )?.name ||
                                                              'Category'
                                                            : 'Category'}
                                                    </div>

                                                    <div
                                                        className="d-flex align-items-center justify-content-between"
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize: '13px',
                                                                fontWeight: 700,
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
                                                                fontSize: '10px',
                                                                padding:
                                                                    '4px 8px',
                                                                borderRadius:
                                                                    '20px',
                                                                background:
                                                                    '#eaf8f1',
                                                                color: '#16845b',
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            Active
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tip card */}
                                        <div
                                            style={{
                                                borderRadius: '18px',
                                                padding: '20px',
                                                background:
                                                    'linear-gradient(135deg, #eef5ff 0%, #f7faff 100%)',
                                                border: '1px solid #dceaff',
                                            }}
                                        >
                                            <div className="d-flex gap-3">
                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                                    style={{
                                                        width: '36px',
                                                        height: '36px',
                                                        background: '#fff',
                                                        color: '#0071e3',
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
                                                            fontSize: '13px',
                                                            fontWeight: 700,
                                                            color: '#1d1d1f',
                                                        }}
                                                    >
                                                        Make it discoverable
                                                    </div>

                                                    <p
                                                        className="mb-0 mt-1"
                                                        style={{
                                                            fontSize: '11px',
                                                            lineHeight: 1.55,
                                                            color: '#6e6e73',
                                                        }}
                                                    >
                                                        Use a clear title,
                                                        accurate category and
                                                        detailed description so
                                                        people can quickly
                                                        understand what you are
                                                        offering.
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

/* ─────────────────────────────────────────────
   Supporting components
───────────────────────────────────────────── */

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

Create.layout = (page) => (
    <AppLayout children={page} title="Create Product" />
);