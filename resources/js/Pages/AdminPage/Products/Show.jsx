import { useMemo, useState } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* =========================================================
   ICONS
========================================================= */

const Icon = {
    ArrowLeft: ({ size = 17, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width={size}
            height={size}
            {...props}
        >
            <path
                d="M19 12H5M11 6l-6 6 6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Pencil: ({ size = 17, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width={size}
            height={size}
            {...props}
        >
            <path
                d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19 3 20l1-4L16.5 3.5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Refresh: ({ size = 17, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width={size}
            height={size}
            {...props}
        >
            <path
                d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9M20.5 12a8.5 8.5 0 0 1-14.6 5.9M4 4v5h5M20 20v-5h-5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Trash: ({ size = 17, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width={size}
            height={size}
            {...props}
        >
            <path
                d="M4 7h16M9 7V4.8c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8V7M6 7l.9 12.2a2 2 0 0 0 2 1.8h6.2a2 2 0 0 0 2-1.8L18 7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Box: ({ size = 28, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            width={size}
            height={size}
            {...props}
        >
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

    Layers: ({ size = 17, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width={size}
            height={size}
            {...props}
        >
            <path
                d="m12 3 9 5-9 5-9-5 9-5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="m3 13 9 5 9-5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Building: ({ size = 17, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width={size}
            height={size}
            {...props}
        >
            <path
                d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M13 21v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v9M4 21h16"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Stack: ({ size = 17, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width={size}
            height={size}
            {...props}
        >
            <rect x="4" y="4" width="16" height="6" rx="1.5" />
            <rect x="4" y="14" width="16" height="6" rx="1.5" />
        </svg>
    ),

    Star: ({ size = 15, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width={size}
            height={size}
            {...props}
        >
            <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3 6.2 20.4l1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
        </svg>
    ),

    ChevronLeft: ({ size = 17, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width={size}
            height={size}
            {...props}
        >
            <path
                d="m15 18-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Close: ({ size = 18, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width={size}
            height={size}
            {...props}
        >
            <path
                d="M18 6 6 18M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Check: ({ size = 17, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width={size}
            height={size}
            {...props}
        >
            <path
                d="m5 12 4 4L19 6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Alert: ({ size = 22, ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width={size}
            height={size}
            {...props}
        >
            <path
                d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 9v4M12 17h.01"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
};

/* =========================================================
   STATUS
========================================================= */

const STATUS_META = {
    approved: {
        label: 'Approved',
        bg: '#e8f8ef',
        fg: '#0b8155',
        dot: '#16a66b',
    },

    rejected: {
        label: 'Rejected',
        bg: '#fff0ef',
        fg: '#c53b32',
        dot: '#e5483f',
    },

    pending: {
        label: 'Pending',
        bg: '#fff7e5',
        fg: '#9a6500',
        dot: '#e6a400',
    },
};

function StatusBadge({ status }) {
    const meta =
        STATUS_META[status] ||
        STATUS_META.pending;

    return (
        <span
            className="d-inline-flex align-items-center gap-2"
            style={{
                backgroundColor: meta.bg,
                color: meta.fg,
                padding: '6px 11px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 650,
            }}
        >
            <span
                style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: meta.dot,
                }}
            />

            {meta.label}
        </span>
    );
}

/* =========================================================
   HELPERS
========================================================= */

function formatPrice(value) {
    const num = Number(value);

    return Number.isFinite(num)
        ? `$${num.toFixed(2)}`
        : '—';
}

function formatDate(value) {
    if (!value) {
        return '—';
    }

    try {
        return new Date(value).toLocaleDateString(
            undefined,
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
        );
    } catch {
        return value;
    }
}

function initialsFor(name = '') {
    const parts = name
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (!parts.length) {
        return '?';
    }

    return (
        parts[0][0] +
        (parts[1]?.[0] || '')
    ).toUpperCase();
}

/* =========================================================
   STAR RATING
========================================================= */

function StarRating({
    rating = 0,
    size = 15,
    showValue = false,
}) {
    const numericRating =
        Number(rating) || 0;

    const percentage =
        Math.max(
            0,
            Math.min(
                100,
                (numericRating / 5) * 100
            )
        );

    const stars = Array.from({
        length: 5,
    });

    return (
        <span className="d-inline-flex align-items-center gap-2">

            <span
                className="position-relative d-inline-flex"
                style={{
                    lineHeight: 0,
                }}
            >
                <span
                    className="d-inline-flex"
                    style={{
                        color: '#d9d9de',
                        gap: 2,
                    }}
                >
                    {stars.map((_, index) => (
                        <Icon.Star
                            key={index}
                            size={size}
                        />
                    ))}
                </span>

                <span
                    className="position-absolute top-0 start-0 d-inline-flex overflow-hidden"
                    style={{
                        width: `${percentage}%`,
                        color: '#f0a900',
                        gap: 2,
                    }}
                >
                    {stars.map((_, index) => (
                        <Icon.Star
                            key={index}
                            size={size}
                        />
                    ))}
                </span>
            </span>

            {showValue && (
                <span
                    style={{
                        fontSize: '12px',
                        color: '#6e6e73',
                        fontWeight: 600,
                    }}
                >
                    {numericRating.toFixed(1)}
                </span>
            )}
        </span>
    );
}

/* =========================================================
   MODAL SHELL
========================================================= */

function ModalShell({
    open,
    onClose,
    title,
    eyebrow,
    children,
    width = 470,
}) {
    if (!open) {
        return null;
    }

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
                zIndex: 1055,
                background:
                    'rgba(0,0,0,.42)',
                backdropFilter:
                    'blur(5px)',
                padding: '20px',
            }}
            onMouseDown={(event) => {
                if (
                    event.target ===
                    event.currentTarget
                ) {
                    onClose();
                }
            }}
        >
            <div
                className="bg-white w-100"
                style={{
                    maxWidth: `${width}px`,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow:
                        '0 25px 70px rgba(0,0,0,.20)',
                }}
            >
                <div
                    className="d-flex align-items-start justify-content-between"
                    style={{
                        padding:
                            '20px 22px 16px',
                        borderBottom:
                            '1px solid #e5e5ea',
                    }}
                >
                    <div>
                        {eyebrow && (
                            <div
                                className="text-uppercase mb-1"
                                style={{
                                    color: '#86868b',
                                    fontSize: '10px',
                                    fontWeight: 700,
                                    letterSpacing:
                                        '0.7px',
                                }}
                            >
                                {eyebrow}
                            </div>
                        )}

                        <h5
                            className="mb-0"
                            style={{
                                color: '#1d1d1f',
                                fontSize: '18px',
                                fontWeight: 700,
                                letterSpacing:
                                    '-0.25px',
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
                            width: '34px',
                            height: '34px',
                            padding: 0,
                            borderRadius:
                                '9px',
                            border:
                                '1px solid #e5e5ea',
                            background:
                                '#f5f5f7',
                            color: '#1d1d1f',
                        }}
                    >
                        <Icon.Close size={17} />
                    </button>
                </div>

                {children}
            </div>
        </div>
    );
}

/* =========================================================
   STATUS MODAL
========================================================= */

function StatusModal({
    product,
    open,
    onClose,
}) {
    const {
        data,
        setData,
        patch,
        processing,
        reset,
    } = useForm({
        status:
            product?.status ||
            'pending',
    });

    if (!product) {
        return null;
    }

    const submit = (event) => {
        event.preventDefault();

        patch(
            route(
                'admin.products.updateStatus',
                product.id
            ),
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
            hint:
                'Awaiting review. The product remains hidden from buyers.',
        },

        {
            value: 'approved',
            label: 'Approved',
            hint:
                'The product becomes visible to buyers.',
        },

        {
            value: 'rejected',
            label: 'Rejected',
            hint:
                'The listing stays hidden and the seller can be notified.',
        },
    ];

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow={product.name}
            title="Update status"
        >
            <form onSubmit={submit}>
                <div
                    style={{
                        padding:
                            '20px 22px',
                    }}
                >
                    <div className="d-flex flex-column gap-2">

                        {options.map(
                            (option) => {
                                const meta =
                                    STATUS_META[
                                        option.value
                                    ];

                                const selected =
                                    data.status ===
                                    option.value;

                                return (
                                    <label
                                        key={
                                            option.value
                                        }
                                        className="d-flex align-items-start gap-3"
                                        style={{
                                            cursor:
                                                'pointer',
                                            padding:
                                                '13px',
                                            borderRadius:
                                                '12px',
                                            border:
                                                selected
                                                    ? `1px solid ${meta.fg}`
                                                    : '1px solid #e5e5ea',
                                            background:
                                                selected
                                                    ? meta.bg
                                                    : '#fff',
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="status"
                                            className="form-check-input mt-1"
                                            checked={
                                                selected
                                            }
                                            onChange={() =>
                                                setData(
                                                    'status',
                                                    option.value
                                                )
                                            }
                                        />

                                        <div>
                                            <div
                                                style={{
                                                    fontSize:
                                                        '13px',
                                                    fontWeight:
                                                        650,
                                                    color:
                                                        '#1d1d1f',
                                                }}
                                            >
                                                {
                                                    option.label
                                                }
                                            </div>

                                            <div
                                                style={{
                                                    fontSize:
                                                        '12px',
                                                    color:
                                                        '#6e6e73',
                                                    lineHeight:
                                                        1.45,
                                                    marginTop:
                                                        '2px',
                                                }}
                                            >
                                                {
                                                    option.hint
                                                }
                                            </div>
                                        </div>
                                    </label>
                                );
                            }
                        )}

                    </div>
                </div>

                <div
                    className="d-flex align-items-center justify-content-between"
                    style={{
                        padding:
                            '15px 22px',
                        background:
                            '#f7f7f8',
                        borderTop:
                            '1px solid #e5e5ea',
                    }}
                >
                    <button
                        type="button"
                        className="btn"
                        onClick={onClose}
                        style={{
                            height: '40px',
                            padding:
                                '0 15px',
                            borderRadius:
                                '10px',
                            border:
                                '1px solid #d2d2d7',
                            background: '#fff',
                            color:
                                '#1d1d1f',
                            fontSize:
                                '13px',
                            fontWeight: 600,
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="btn"
                        disabled={
                            processing ||
                            data.status ===
                                product.status
                        }
                        style={{
                            height: '40px',
                            padding:
                                '0 16px',
                            borderRadius:
                                '10px',
                            border:
                                '1px solid #1d1d1f',
                            background:
                                '#1d1d1f',
                            color: '#fff',
                            fontSize:
                                '13px',
                            fontWeight: 600,
                            opacity:
                                processing ||
                                data.status ===
                                    product.status
                                    ? 0.55
                                    : 1,
                        }}
                    >
                        {processing
                            ? 'Updating...'
                            : 'Update Status'}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* =========================================================
   DELETE MODAL
========================================================= */

function DeleteModal({
    product,
    open,
    onClose,
}) {
    if (!product) {
        return null;
    }

    const confirmDelete = () => {
        router.delete(
            route(
                'admin.products.destroy',
                product.id
            ),
            {
                preserveScroll: true,

                onSuccess: () => {
                    router.visit(
                        route(
                            'admin.products.index'
                        )
                    );
                },
            }
        );
    };

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow="Permanent action"
            title="Delete product"
        >
            <div
                style={{
                    padding:
                        '24px 22px',
                }}
            >
                <div className="text-center">

                    <div
                        className="d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{
                            width: '54px',
                            height: '54px',
                            borderRadius:
                                '16px',
                            background:
                                '#fff0ef',
                            color:
                                '#e5483f',
                        }}
                    >
                        <Icon.Alert size={24} />
                    </div>

                    <p
                        className="mb-2"
                        style={{
                            color:
                                '#1d1d1f',
                            fontSize:
                                '14px',
                            lineHeight:
                                1.55,
                        }}
                    >
                        Are you sure you want to
                        delete{' '}
                        <strong>
                            {product.name}
                        </strong>
                        ?
                    </p>

                    <p
                        className="mb-0"
                        style={{
                            color:
                                '#86868b',
                            fontSize:
                                '12px',
                        }}
                    >
                        This product will be
                        permanently removed from
                        the catalog.
                    </p>

                </div>
            </div>

            <div
                className="d-flex align-items-center justify-content-between"
                style={{
                    padding:
                        '15px 22px',
                    background:
                        '#f7f7f8',
                    borderTop:
                        '1px solid #e5e5ea',
                }}
            >
                <button
                    type="button"
                    className="btn"
                    onClick={onClose}
                    style={{
                        height: '40px',
                        padding:
                            '0 16px',
                        borderRadius:
                            '10px',
                        border:
                            '1px solid #d2d2d7',
                        background: '#fff',
                        color:
                            '#1d1d1f',
                        fontSize:
                            '13px',
                        fontWeight: 600,
                    }}
                >
                    Cancel
                </button>

                <button
                    type="button"
                    className="btn d-flex align-items-center gap-2"
                    onClick={
                        confirmDelete
                    }
                    style={{
                        height: '40px',
                        padding:
                            '0 16px',
                        borderRadius:
                            '10px',
                        border:
                            '1px solid #e5483f',
                        background:
                            '#e5483f',
                        color: '#fff',
                        fontSize:
                            '13px',
                        fontWeight: 600,
                    }}
                >
                    <Icon.Trash size={16} />
                    Delete Product
                </button>
            </div>
        </ModalShell>
    );
}

/* =========================================================
   REVIEW CARD
========================================================= */

function ReviewCard({ review }) {
    const avatarSrc =
        review.user?.profile_image
            ? `/storage/${review.user.profile_image}`
            : null;

    return (
        <div
            className="d-flex gap-3"
            style={{
                padding: '16px 0',
                borderBottom:
                    '1px solid #f0f0f2',
            }}
        >
            {avatarSrc ? (
                <img
                    src={avatarSrc}
                    alt={
                        review.user?.name ||
                        'User'
                    }
                    className="flex-shrink-0"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius:
                            '11px',
                        objectFit:
                            'cover',
                    }}
                />
            ) : (
                <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius:
                            '11px',
                        background:
                            '#f2f2f7',
                        color:
                            '#1d1d1f',
                        fontSize:
                            '12px',
                        fontWeight: 700,
                    }}
                >
                    {initialsFor(
                        review.user?.name ||
                            'User'
                    )}
                </div>
            )}

            <div className="flex-grow-1">

                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">

                    <div
                        style={{
                            fontSize:
                                '13px',
                            fontWeight:
                                650,
                            color:
                                '#1d1d1f',
                        }}
                    >
                        {review.user?.name ||
                            'Anonymous'}
                    </div>

                    <StarRating
                        rating={
                            review.rating || 0
                        }
                        size={12}
                    />

                </div>

                {review.comment && (
                    <p
                        className="mb-0 mt-2"
                        style={{
                            fontSize:
                                '12px',
                            color:
                                '#6e6e73',
                            lineHeight:
                                1.55,
                        }}
                    >
                        {review.comment}
                    </p>
                )}

            </div>
        </div>
    );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
    icon,
    label,
    value,
}) {
    return (
        <div
            style={{
                padding:
                    '14px',
                border:
                    '1px solid #e5e5ea',
                borderRadius:
                    '12px',
                height: '100%',
                background:
                    '#fff',
            }}
        >
            <div
                className="d-flex align-items-center gap-2 mb-2"
                style={{
                    color:
                        '#86868b',
                    fontSize:
                        '11px',
                    fontWeight:
                        650,
                }}
            >
                {icon}

                <span>
                    {label}
                </span>
            </div>

            <div
                style={{
                    color:
                        '#1d1d1f',
                    fontSize:
                        '13px',
                    fontWeight:
                        650,
                }}
            >
                {value || '—'}
            </div>
        </div>
    );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Show({
    product,
}) {
    const [statusOpen, setStatusOpen] =
        useState(false);

    const [deleteOpen, setDeleteOpen] =
        useState(false);

    /*
     * Normalize product in case the controller
     * returns an API resource.
     */
    const actualProduct =
        product?.data &&
        !product.id
            ? product.data
            : product;

    /*
     * Keep hooks before any early return.
     */
    const reviews =
        Array.isArray(
            actualProduct?.reviews
        )
            ? actualProduct.reviews
            : [];

    const reviewsCount =
        Number(
            actualProduct?.reviews_count
        ) || reviews.length;

    const averageRating = useMemo(() => {
        if (
            actualProduct?.average_rating !==
                null &&
            actualProduct?.average_rating !==
                undefined
        ) {
            return (
                Number(
                    actualProduct.average_rating
                ) || 0
            );
        }

        if (!reviews.length) {
            return 0;
        }

        const total =
            reviews.reduce(
                (sum, review) =>
                    sum +
                    (Number(
                        review.rating
                    ) || 0),
                0
            );

        return total / reviews.length;
    }, [
        actualProduct?.average_rating,
        reviews,
    ]);

    const imageSrc =
        actualProduct?.image
            ? `/storage/${actualProduct.image}`
            : null;

    /*
     * Missing product guard.
     */
    if (!actualProduct?.id) {
        return (
            <AppLayout>
                <Head title="Product not found" />

                <div
                    className="container-fluid py-4 px-3 px-md-4 px-xl-5"
                    style={{
                        fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                        background:
                            '#f5f5f7',
                        minHeight:
                            '100vh',
                    }}
                >
                    <div
                        className="mx-auto bg-white text-center"
                        style={{
                            maxWidth:
                                '620px',
                            padding:
                                '50px 30px',
                            borderRadius:
                                '18px',
                            border:
                                '1px solid #e5e5ea',
                        }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-center mx-auto mb-3"
                            style={{
                                width: '58px',
                                height: '58px',
                                borderRadius:
                                    '16px',
                                background:
                                    '#f2f2f7',
                                color:
                                    '#86868b',
                            }}
                        >
                            <Icon.Box
                                size={25}
                            />
                        </div>

                        <h4
                            className="mb-2"
                            style={{
                                fontSize:
                                    '19px',
                                fontWeight:
                                    700,
                            }}
                        >
                            Product not found
                        </h4>

                        <p
                            className="mb-4"
                            style={{
                                color:
                                    '#6e6e73',
                                fontSize:
                                    '13px',
                                lineHeight:
                                    1.6,
                            }}
                        >
                            The product data sent
                            to this page is missing
                            a valid ID. Check that
                            your controller returns
                            the product model with
                            its ID.
                        </p>

                        <Link
                            href={route(
                                'admin.products.index'
                            )}
                            className="btn d-inline-flex align-items-center gap-2"
                            style={{
                                height: '40px',
                                padding:
                                    '0 16px',
                                borderRadius:
                                    '10px',
                                background:
                                    '#1d1d1f',
                                border:
                                    '1px solid #1d1d1f',
                                color: '#fff',
                                fontSize:
                                    '13px',
                                fontWeight: 600,
                                textDecoration:
                                    'none',
                            }}
                        >
                            <Icon.ArrowLeft
                                size={16}
                            />
                            Back to Products
                        </Link>
                    </div>
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout>
            <Head
                title={
                    actualProduct.name ||
                    'Product Details'
                }
            />

            <div
                style={{
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    background:
                        '#f5f5f7',
                    minHeight:
                        '100vh',
                }}
            >
                <div className="container-fluid px-3 px-md-4 px-xl-5 py-4">

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3 mb-4">

                        <div>
                            <Link
                                href={route(
                                    'admin.products.index'
                                )}
                                className="d-inline-flex align-items-center gap-2 text-decoration-none mb-2"
                                style={{
                                    color:
                                        '#86868b',
                                    fontSize:
                                        '12px',
                                    fontWeight:
                                        600,
                                }}
                            >
                                <Icon.ArrowLeft
                                    size={15}
                                />

                                Back to Products
                            </Link>

                            <div className="d-flex align-items-center gap-2">

                                <h1
                                    className="mb-0"
                                    style={{
                                        color:
                                            '#1d1d1f',
                                        fontSize:
                                            '29px',
                                        lineHeight:
                                            1.15,
                                        fontWeight:
                                            700,
                                        letterSpacing:
                                            '-0.7px',
                                    }}
                                >
                                    Product Details
                                </h1>

                                <StatusBadge
                                    status={
                                        actualProduct.status
                                    }
                                />

                            </div>

                            <p
                                className="mb-0 mt-1"
                                style={{
                                    color:
                                        '#6e6e73',
                                    fontSize:
                                        '13px',
                                }}
                            >
                                Review product information,
                                status, seller and customer
                                feedback.
                            </p>
                        </div>

                        <div className="d-flex align-items-center gap-2 flex-wrap">

                            <button
                                type="button"
                                className="btn d-flex align-items-center gap-2"
                                onClick={() =>
                                    setStatusOpen(
                                        true
                                    )
                                }
                                style={{
                                    height:
                                        '40px',
                                    padding:
                                        '0 14px',
                                    borderRadius:
                                        '10px',
                                    border:
                                        '1px solid #d2d2d7',
                                    background:
                                        '#fff',
                                    color:
                                        '#1d1d1f',
                                    fontSize:
                                        '13px',
                                    fontWeight:
                                        600,
                                }}
                            >
                                <Icon.Refresh
                                    size={16}
                                />

                                Update Status
                            </button>

                            <Link
                                href={route(
                                    'admin.products.edit',
                                    actualProduct.id
                                )}
                                className="btn d-flex align-items-center gap-2"
                                style={{
                                    height:
                                        '40px',
                                    padding:
                                        '0 15px',
                                    borderRadius:
                                        '10px',
                                    border:
                                        '1px solid #1d1d1f',
                                    background:
                                        '#1d1d1f',
                                    color:
                                        '#fff',
                                    fontSize:
                                        '13px',
                                    fontWeight:
                                        600,
                                    textDecoration:
                                        'none',
                                }}
                            >
                                <Icon.Pencil
                                    size={16}
                                />

                                Edit
                            </Link>

                            <button
                                type="button"
                                className="btn d-flex align-items-center gap-2"
                                onClick={() =>
                                    setDeleteOpen(
                                        true
                                    )
                                }
                                style={{
                                    height:
                                        '40px',
                                    padding:
                                        '0 14px',
                                    borderRadius:
                                        '10px',
                                    border:
                                        '1px solid #e5483f',
                                    background:
                                        '#fff',
                                    color:
                                        '#d13c34',
                                    fontSize:
                                        '13px',
                                    fontWeight:
                                        600,
                                }}
                            >
                                <Icon.Trash
                                    size={16}
                                />

                                Delete
                            </button>

                        </div>
                    </div>

                    {/* =================================================
                        PRODUCT HERO
                    ================================================= */}

                    <div
                        className="bg-white mb-4"
                        style={{
                            borderRadius:
                                '18px',
                            border:
                                '1px solid #e5e5ea',
                            overflow:
                                'hidden',
                        }}
                    >
                        <div className="row g-0">

                            {/* IMAGE */}

                            <div className="col-lg-5">

                                <div
                                    className="h-100"
                                    style={{
                                        minHeight:
                                            '470px',
                                        background:
                                            '#f2f2f7',
                                    }}
                                >
                                    {imageSrc ? (
                                        <img
                                            src={
                                                imageSrc
                                            }
                                            alt={
                                                actualProduct.name
                                            }
                                            className="w-100 h-100"
                                            style={{
                                                objectFit:
                                                    'cover',
                                                minHeight:
                                                    '470px',
                                                display:
                                                    'block',
                                            }}
                                        />
                                    ) : (
                                        <div
                                            className="w-100 h-100 d-flex align-items-center justify-content-center"
                                            style={{
                                                minHeight:
                                                    '470px',
                                                color:
                                                    '#86868b',
                                            }}
                                        >
                                            <div className="text-center">

                                                <div
                                                    className="d-flex align-items-center justify-content-center mx-auto mb-2"
                                                    style={{
                                                        width:
                                                            '64px',
                                                        height:
                                                            '64px',
                                                        borderRadius:
                                                            '18px',
                                                        background:
                                                            '#e9e9ee',
                                                    }}
                                                >
                                                    <Icon.Box
                                                        size={
                                                            30
                                                        }
                                                    />
                                                </div>

                                                <div
                                                    style={{
                                                        fontSize:
                                                            '12px',
                                                        fontWeight:
                                                            600,
                                                    }}
                                                >
                                                    No product
                                                    image
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>

                            {/* INFORMATION */}

                            <div className="col-lg-7">

                                <div
                                    className="h-100"
                                    style={{
                                        padding:
                                            '30px',
                                    }}
                                >

                                    <div className="d-flex align-items-center gap-2 mb-3">

                                        <StatusBadge
                                            status={
                                                actualProduct.status
                                            }
                                        />

                                        <span
                                            style={{
                                                fontSize:
                                                    '11px',
                                                color:
                                                    '#86868b',
                                                fontWeight:
                                                    600,
                                            }}
                                        >
                                            Product #
                                            {
                                                actualProduct.id
                                            }
                                        </span>

                                    </div>

                                    <h2
                                        className="mb-2"
                                        style={{
                                            color:
                                                '#1d1d1f',
                                            fontSize:
                                                '30px',
                                            lineHeight:
                                                1.15,
                                            fontWeight:
                                                700,
                                            letterSpacing:
                                                '-0.7px',
                                        }}
                                    >
                                        {
                                            actualProduct.name
                                        }
                                    </h2>

                                    <div className="d-flex align-items-center gap-3 mb-4">

                                        <StarRating
                                            rating={
                                                averageRating
                                            }
                                            showValue
                                        />

                                        <span
                                            style={{
                                                color:
                                                    '#86868b',
                                                fontSize:
                                                    '12px',
                                            }}
                                        >
                                            {reviewsCount}{' '}
                                            {reviewsCount ===
                                            1
                                                ? 'review'
                                                : 'reviews'}
                                        </span>

                                    </div>

                                    <div
                                        className="mb-4"
                                        style={{
                                            fontSize:
                                                '30px',
                                            fontWeight:
                                                750,
                                            color:
                                                '#1d1d1f',
                                            letterSpacing:
                                                '-0.7px',
                                        }}
                                    >
                                        {formatPrice(
                                            actualProduct.price
                                        )}
                                    </div>

                                    <div
                                        style={{
                                            borderTop:
                                                '1px solid #e5e5ea',
                                            paddingTop:
                                                '20px',
                                        }}
                                    >

                                        <p
                                            className="mb-4"
                                            style={{
                                                color:
                                                    '#6e6e73',
                                                fontSize:
                                                    '13px',
                                                lineHeight:
                                                    1.7,
                                            }}
                                        >
                                            {actualProduct.description ||
                                                'No description has been provided for this product.'}
                                        </p>

                                        <div className="row g-3">

                                            <div className="col-12 col-sm-6">
                                                <InfoItem
                                                    icon={
                                                        <Icon.Layers
                                                            size={
                                                                15
                                                            }
                                                        />
                                                    }
                                                    label="CATEGORY"
                                                    value={
                                                        actualProduct
                                                            .category
                                                            ?.name ||
                                                        'Uncategorized'
                                                    }
                                                />
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <InfoItem
                                                    icon={
                                                        <Icon.Building
                                                            size={
                                                                15
                                                            }
                                                        />
                                                    }
                                                    label="SELLER"
                                                    value={
                                                        actualProduct
                                                            .seller
                                                            ?.company_name ||
                                                        actualProduct
                                                            .seller
                                                            ?.name ||
                                                        'N/A'
                                                    }
                                                />
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <InfoItem
                                                    icon={
                                                        <Icon.Stack
                                                            size={
                                                                15
                                                            }
                                                        />
                                                    }
                                                    label="STOCK"
                                                    value={
                                                        actualProduct.stock ??
                                                        '—'
                                                    }
                                                />
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <InfoItem
                                                    label="LISTED ON"
                                                    value={formatDate(
                                                        actualProduct.created_at
                                                    )}
                                                />
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                    {/* =================================================
                        LOWER CONTENT
                    ================================================= */}

                    <div className="row g-4">

                        {/* DESCRIPTION */}

                        <div className="col-lg-7">

                            <div
                                className="bg-white h-100"
                                style={{
                                    borderRadius:
                                        '18px',
                                    border:
                                        '1px solid #e5e5ea',
                                    overflow:
                                        'hidden',
                                }}
                            >
                                <div
                                    style={{
                                        padding:
                                            '20px 22px',
                                        borderBottom:
                                            '1px solid #e5e5ea',
                                    }}
                                >
                                    <h3
                                        className="mb-1"
                                        style={{
                                            fontSize:
                                                '17px',
                                            fontWeight:
                                                700,
                                            color:
                                                '#1d1d1f',
                                        }}
                                    >
                                        Full Description
                                    </h3>

                                    <p
                                        className="mb-0"
                                        style={{
                                            fontSize:
                                                '12px',
                                            color:
                                                '#86868b',
                                        }}
                                    >
                                        Complete information
                                        provided for this
                                        product.
                                    </p>
                                </div>

                                <div
                                    style={{
                                        padding:
                                            '22px',
                                    }}
                                >
                                    <p
                                        className="mb-0"
                                        style={{
                                            color:
                                                '#6e6e73',
                                            fontSize:
                                                '13px',
                                            lineHeight:
                                                1.8,
                                            whiteSpace:
                                                'pre-line',
                                        }}
                                    >
                                        {actualProduct.description ||
                                            'No description has been provided for this product.'}
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* REVIEWS */}

                        <div className="col-lg-5">

                            <div
                                className="bg-white"
                                style={{
                                    borderRadius:
                                        '18px',
                                    border:
                                        '1px solid #e5e5ea',
                                    overflow:
                                        'hidden',
                                }}
                            >

                                <div
                                    className="d-flex align-items-center justify-content-between"
                                    style={{
                                        padding:
                                            '20px 22px',
                                        borderBottom:
                                            '1px solid #e5e5ea',
                                    }}
                                >
                                    <div>
                                        <h3
                                            className="mb-1"
                                            style={{
                                                fontSize:
                                                    '17px',
                                                fontWeight:
                                                    700,
                                                color:
                                                    '#1d1d1f',
                                            }}
                                        >
                                            Customer Reviews
                                        </h3>

                                        <div
                                            style={{
                                                fontSize:
                                                    '12px',
                                                color:
                                                    '#86868b',
                                            }}
                                        >
                                            {reviewsCount}{' '}
                                            {reviewsCount ===
                                            1
                                                ? 'review'
                                                : 'reviews'}
                                        </div>
                                    </div>

                                    {reviews.length >
                                        0 && (
                                        <StarRating
                                            rating={
                                                averageRating
                                            }
                                            showValue
                                        />
                                    )}
                                </div>

                                <div
                                    style={{
                                        padding:
                                            '0 22px',
                                    }}
                                >
                                    {reviews.length ===
                                    0 ? (
                                        <div
                                            className="text-center"
                                            style={{
                                                padding:
                                                    '55px 10px',
                                            }}
                                        >
                                            <div
                                                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                                                style={{
                                                    width:
                                                        '50px',
                                                    height:
                                                        '50px',
                                                    borderRadius:
                                                        '15px',
                                                    background:
                                                        '#f2f2f7',
                                                    color:
                                                        '#86868b',
                                                }}
                                            >
                                                <Icon.Star
                                                    size={
                                                        21
                                                    }
                                                />
                                            </div>

                                            <div
                                                style={{
                                                    fontSize:
                                                        '14px',
                                                    fontWeight:
                                                        650,
                                                    color:
                                                        '#1d1d1f',
                                                }}
                                            >
                                                No reviews yet
                                            </div>

                                            <div
                                                style={{
                                                    fontSize:
                                                        '12px',
                                                    color:
                                                        '#86868b',
                                                    marginTop:
                                                        '4px',
                                                }}
                                            >
                                                Customer feedback
                                                will appear here.
                                            </div>
                                        </div>
                                    ) : (
                                        reviews.map(
                                            (
                                                review
                                            ) => (
                                                <ReviewCard
                                                    key={
                                                        review.id
                                                    }
                                                    review={
                                                        review
                                                    }
                                                />
                                            )
                                        )
                                    )}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* =====================================================
                MODALS
            ===================================================== */}

            <StatusModal
                product={
                    statusOpen
                        ? actualProduct
                        : null
                }
                open={statusOpen}
                onClose={() =>
                    setStatusOpen(false)
                }
            />

            <DeleteModal
                product={
                    deleteOpen
                        ? actualProduct
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