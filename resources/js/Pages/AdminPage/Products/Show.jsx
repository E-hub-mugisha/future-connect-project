import { useMemo, useState } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* =========================================================
   FONT / DESIGN SYSTEM
========================================================= */

const FONT_STACK =
    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

const COLORS = {
    page: '#f7f7f8',
    white: '#ffffff',
    text: '#1d1d1f',
    secondary: '#6e6e73',
    muted: '#86868b',
    border: '#e5e5ea',
    soft: '#f2f2f7',
    dark: '#1d1d1f',
    danger: '#e5483f',
    warning: '#e6a400',
    success: '#16a66b',
};

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
        bg: '#e9f8f0',
        fg: '#087a50',
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
        fg: '#936000',
        dot: '#e6a400',
    },
};

function StatusBadge({ status }) {
    const meta =
        STATUS_META[status] || STATUS_META.pending;

    return (
        <span
            className="d-inline-flex align-items-center gap-2"
            style={{
                background: meta.bg,
                color: meta.fg,
                padding: '6px 10px',
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 700,
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
   HELPERS
========================================================= */

function formatPrice(value) {
    const num = Number(value);

    return Number.isFinite(num)
        ? `$${num.toFixed(2)}`
        : '—';
}

function formatDate(value) {
    if (!value) return '—';

    try {
        return new Date(value).toLocaleDateString(
            undefined,
            {
                year: 'numeric',
                month: 'short',
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

    if (!parts.length) return '?';

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
    size = 14,
    showValue = false,
}) {
    const numericRating = Number(rating) || 0;

    const percentage = Math.max(
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
                style={{ lineHeight: 0 }}
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
                        color: COLORS.secondary,
                        fontSize: 11,
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
   MODAL
========================================================= */

function ModalShell({
    open,
    onClose,
    title,
    eyebrow,
    children,
    width = 460,
}) {
    if (!open) return null;

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
                zIndex: 1055,
                background: 'rgba(0,0,0,.38)',
                backdropFilter: 'blur(7px)',
                padding: 20,
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
                    maxWidth: width,
                    borderRadius: 18,
                    overflow: 'hidden',
                    boxShadow:
                        '0 25px 80px rgba(0,0,0,.18)',
                }}
            >
                <div
                    className="d-flex align-items-start justify-content-between"
                    style={{
                        padding: '20px 22px',
                        borderBottom:
                            `1px solid ${COLORS.border}`,
                    }}
                >
                    <div>
                        {eyebrow && (
                            <div
                                className="text-uppercase mb-1"
                                style={{
                                    color:
                                        COLORS.muted,
                                    fontSize: 10,
                                    fontWeight: 700,
                                    letterSpacing:
                                        '.7px',
                                }}
                            >
                                {eyebrow}
                            </div>
                        )}

                        <h5
                            className="mb-0"
                            style={{
                                color: COLORS.text,
                                fontSize: 18,
                                fontWeight: 700,
                                letterSpacing:
                                    '-.3px',
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
                            padding: 0,
                            borderRadius: 9,
                            border:
                                `1px solid ${COLORS.border}`,
                            background:
                                COLORS.soft,
                            color: COLORS.text,
                        }}
                    >
                        <Icon.Close size={16} />
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
            product?.status || 'pending',
    });

    if (!product) return null;

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
            hint: 'Waiting for review before publishing.',
        },
        {
            value: 'approved',
            label: 'Approved',
            hint: 'The product can be displayed to buyers.',
        },
        {
            value: 'rejected',
            label: 'Rejected',
            hint: 'The listing remains hidden from buyers.',
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
                    className="p-3 p-md-4"
                    style={{
                        background: '#fff',
                    }}
                >
                    <div className="d-flex flex-column gap-2">
                        {options.map((option) => {
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
                                            '14px',
                                        borderRadius:
                                            12,
                                        border: selected
                                            ? `1px solid ${meta.fg}`
                                            : `1px solid ${COLORS.border}`,
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
                                                    13,
                                                fontWeight:
                                                    650,
                                                color:
                                                    COLORS.text,
                                            }}
                                        >
                                            {
                                                option.label
                                            }
                                        </div>

                                        <div
                                            style={{
                                                fontSize:
                                                    11,
                                                color:
                                                    COLORS.secondary,
                                                lineHeight:
                                                    1.5,
                                                marginTop: 3,
                                            }}
                                        >
                                            {
                                                option.hint
                                            }
                                        </div>
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                        padding:
                            '14px 22px',
                        background:
                            '#f7f7f8',
                        borderTop:
                            `1px solid ${COLORS.border}`,
                    }}
                >
                    <button
                        type="button"
                        className="btn"
                        onClick={onClose}
                        style={{
                            height: 40,
                            padding: '0 15px',
                            borderRadius: 10,
                            border:
                                '1px solid #d2d2d7',
                            background: '#fff',
                            color: COLORS.text,
                            fontSize: 12,
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
                            height: 40,
                            padding: '0 16px',
                            borderRadius: 10,
                            border:
                                `1px solid ${COLORS.dark}`,
                            background:
                                COLORS.dark,
                            color: '#fff',
                            fontSize: 12,
                            fontWeight: 600,
                            opacity:
                                processing ||
                                data.status ===
                                    product.status
                                    ? 0.5
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
    if (!product) return null;

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
                className="text-center"
                style={{
                    padding: '28px 22px',
                }}
            >
                <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                        width: 56,
                        height: 56,
                        borderRadius: 16,
                        background: '#fff0ef',
                        color: COLORS.danger,
                    }}
                >
                    <Icon.Alert size={25} />
                </div>

                <p
                    className="mb-2"
                    style={{
                        color: COLORS.text,
                        fontSize: 14,
                        lineHeight: 1.55,
                    }}
                >
                    Delete{' '}
                    <strong>
                        {product.name}
                    </strong>
                    ?
                </p>

                <p
                    className="mb-0"
                    style={{
                        color: COLORS.muted,
                        fontSize: 12,
                        lineHeight: 1.5,
                    }}
                >
                    This product will be
                    permanently removed from the
                    catalog.
                </p>
            </div>

            <div
                className="d-flex justify-content-between align-items-center"
                style={{
                    padding: '14px 22px',
                    background: '#f7f7f8',
                    borderTop:
                        `1px solid ${COLORS.border}`,
                }}
            >
                <button
                    type="button"
                    className="btn"
                    onClick={onClose}
                    style={{
                        height: 40,
                        padding: '0 16px',
                        borderRadius: 10,
                        border:
                            '1px solid #d2d2d7',
                        background: '#fff',
                        color: COLORS.text,
                        fontSize: 12,
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
                        height: 40,
                        padding: '0 16px',
                        borderRadius: 10,
                        border:
                            `1px solid ${COLORS.danger}`,
                        background:
                            COLORS.danger,
                        color: '#fff',
                        fontSize: 12,
                        fontWeight: 600,
                    }}
                >
                    <Icon.Trash size={15} />
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

    const userName =
        review.user?.name ||
        'Anonymous';

    return (
        <div
            className="d-flex gap-3"
            style={{
                padding: '15px 0',
                borderBottom:
                    `1px solid #f0f0f2`,
            }}
        >
            {avatarSrc ? (
                <img
                    src={avatarSrc}
                    alt={userName}
                    style={{
                        width: 38,
                        height: 38,
                        borderRadius: 11,
                        objectFit: 'cover',
                        flexShrink: 0,
                    }}
                />
            ) : (
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                        width: 38,
                        height: 38,
                        borderRadius: 11,
                        background:
                            COLORS.soft,
                        color: COLORS.text,
                        fontSize: 11,
                        fontWeight: 700,
                        flexShrink: 0,
                    }}
                >
                    {initialsFor(userName)}
                </div>
            )}

            <div className="flex-grow-1 min-w-0">
                <div className="d-flex justify-content-between align-items-center gap-2">
                    <div
                        className="text-truncate"
                        style={{
                            color: COLORS.text,
                            fontSize: 12,
                            fontWeight: 650,
                        }}
                    >
                        {userName}
                    </div>

                    <StarRating
                        rating={
                            review.rating || 0
                        }
                        size={11}
                    />
                </div>

                {review.comment && (
                    <p
                        className="mb-0 mt-2"
                        style={{
                            color:
                                COLORS.secondary,
                            fontSize: 11,
                            lineHeight: 1.6,
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
            className="h-100"
            style={{
                padding: 14,
                border:
                    `1px solid ${COLORS.border}`,
                borderRadius: 12,
                background: '#fff',
            }}
        >
            <div
                className="d-flex align-items-center gap-2 mb-2"
                style={{
                    color: COLORS.muted,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '.2px',
                }}
            >
                {icon}
                {label}
            </div>

            <div
                className="text-truncate"
                style={{
                    color: COLORS.text,
                    fontSize: 12,
                    fontWeight: 650,
                }}
                title={value || '—'}
            >
                {value || '—'}
            </div>
        </div>
    );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
    title,
    description,
    right,
}) {
    return (
        <div
            className="d-flex align-items-start justify-content-between gap-3"
            style={{
                padding: '19px 21px',
                borderBottom:
                    `1px solid ${COLORS.border}`,
            }}
        >
            <div>
                <h3
                    className="mb-1"
                    style={{
                        color: COLORS.text,
                        fontSize: 16,
                        fontWeight: 700,
                        letterSpacing: '-.2px',
                    }}
                >
                    {title}
                </h3>

                {description && (
                    <p
                        className="mb-0"
                        style={{
                            color: COLORS.muted,
                            fontSize: 11,
                        }}
                    >
                        {description}
                    </p>
                )}
            </div>

            {right}
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

    const actualProduct =
        product?.data && !product.id
            ? product.data
            : product;

    const reviews = Array.isArray(
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

        if (!reviews.length) return 0;

        const total = reviews.reduce(
            (sum, review) =>
                sum +
                (Number(review.rating) || 0),
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

    const sellerName =
        actualProduct?.seller
            ?.company_name ||
        actualProduct?.seller?.name ||
        'N/A';

    const categoryName =
        actualProduct?.category?.name ||
        'Uncategorized';

    if (!actualProduct?.id) {
        return (
            <AppLayout>
                <Head title="Product not found" />

                <div
                    className="container-fluid d-flex align-items-center justify-content-center"
                    style={{
                        minHeight: '80vh',
                        fontFamily: FONT_STACK,
                        background: COLORS.page,
                    }}
                >
                    <div
                        className="bg-white text-center w-100"
                        style={{
                            maxWidth: 520,
                            padding: '45px 30px',
                            borderRadius: 18,
                            border:
                                `1px solid ${COLORS.border}`,
                        }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-center mx-auto mb-3"
                            style={{
                                width: 58,
                                height: 58,
                                borderRadius: 16,
                                background:
                                    COLORS.soft,
                                color:
                                    COLORS.muted,
                            }}
                        >
                            <Icon.Box size={25} />
                        </div>

                        <h4
                            className="mb-2"
                            style={{
                                color:
                                    COLORS.text,
                                fontSize: 19,
                                fontWeight: 700,
                            }}
                        >
                            Product not found
                        </h4>

                        <p
                            className="mb-4"
                            style={{
                                color:
                                    COLORS.secondary,
                                fontSize: 12,
                                lineHeight: 1.6,
                            }}
                        >
                            The requested product
                            could not be found.
                        </p>

                        <Link
                            href={route(
                                'admin.products.index'
                            )}
                            className="btn d-inline-flex align-items-center gap-2"
                            style={{
                                height: 40,
                                padding: '0 16px',
                                borderRadius: 10,
                                background:
                                    COLORS.dark,
                                border:
                                    `1px solid ${COLORS.dark}`,
                                color: '#fff',
                                fontSize: 12,
                                fontWeight: 600,
                                textDecoration:
                                    'none',
                            }}
                        >
                            <Icon.ArrowLeft
                                size={15}
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
                    fontFamily: FONT_STACK,
                    background: COLORS.page,
                    minHeight: '100vh',
                }}
            >
                <div className="container-fluid px-3 px-md-4 px-xl-5 py-4">

                    {/* =================================================
                        PAGE HEADER
                    ================================================= */}

                    <div className="d-flex flex-column flex-xl-row justify-content-between align-items-xl-end gap-3 mb-4">

                        <div>
                            <Link
                                href={route(
                                    'admin.products.index'
                                )}
                                className="d-inline-flex align-items-center gap-1 text-decoration-none mb-2"
                                style={{
                                    color:
                                        COLORS.muted,
                                    fontSize: 11,
                                    fontWeight: 600,
                                }}
                            >
                                <Icon.ArrowLeft
                                    size={14}
                                />
                                Products
                            </Link>

                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <h1
                                    className="mb-0"
                                    style={{
                                        color:
                                            COLORS.text,
                                        fontSize: 27,
                                        lineHeight:
                                            1.15,
                                        fontWeight: 700,
                                        letterSpacing:
                                            '-.7px',
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
                                        COLORS.secondary,
                                    fontSize: 12,
                                }}
                            >
                                View product information,
                                seller details and
                                customer feedback.
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
                                    height: 38,
                                    padding:
                                        '0 13px',
                                    borderRadius: 9,
                                    border:
                                        `1px solid #d2d2d7`,
                                    background:
                                        '#fff',
                                    color:
                                        COLORS.text,
                                    fontSize: 12,
                                    fontWeight: 600,
                                }}
                            >
                                <Icon.Refresh
                                    size={15}
                                />
                                Status
                            </button>

                            <Link
                                href={route(
                                    'admin.products.edit',
                                    actualProduct.id
                                )}
                                className="btn d-flex align-items-center gap-2"
                                style={{
                                    height: 38,
                                    padding:
                                        '0 14px',
                                    borderRadius: 9,
                                    border:
                                        `1px solid ${COLORS.dark}`,
                                    background:
                                        COLORS.dark,
                                    color: '#fff',
                                    fontSize: 12,
                                    fontWeight: 600,
                                    textDecoration:
                                        'none',
                                }}
                            >
                                <Icon.Pencil
                                    size={15}
                                />
                                Edit Product
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
                                    height: 38,
                                    padding:
                                        '0 13px',
                                    borderRadius: 9,
                                    border:
                                        `1px solid #f0c2be`,
                                    background:
                                        '#fff',
                                    color:
                                        COLORS.danger,
                                    fontSize: 12,
                                    fontWeight: 600,
                                }}
                            >
                                <Icon.Trash
                                    size={15}
                                />
                                Delete
                            </button>
                        </div>
                    </div>

                    {/* =================================================
                        PRODUCT CARD
                    ================================================= */}

                    <div
                        className="bg-white mb-4"
                        style={{
                            borderRadius: 18,
                            border:
                                `1px solid ${COLORS.border}`,
                            overflow: 'hidden',
                        }}
                    >
                        <div className="row g-0">

                            {/* PRODUCT IMAGE */}

                            <div className="col-lg-4">
                                <div
                                    className="h-100"
                                    style={{
                                        minHeight: 430,
                                        background:
                                            COLORS.soft,
                                    }}
                                >
                                    {imageSrc ? (
                                        <img
                                            src={imageSrc}
                                            alt={
                                                actualProduct.name
                                            }
                                            className="w-100 h-100"
                                            style={{
                                                minHeight:
                                                    430,
                                                objectFit:
                                                    'cover',
                                                display:
                                                    'block',
                                            }}
                                        />
                                    ) : (
                                        <div
                                            className="h-100 d-flex align-items-center justify-content-center"
                                            style={{
                                                minHeight:
                                                    430,
                                            }}
                                        >
                                            <div className="text-center">
                                                <div
                                                    className="d-flex align-items-center justify-content-center mx-auto mb-2"
                                                    style={{
                                                        width: 62,
                                                        height: 62,
                                                        borderRadius:
                                                            17,
                                                        background:
                                                            '#e8e8ed',
                                                        color:
                                                            COLORS.muted,
                                                    }}
                                                >
                                                    <Icon.Box
                                                        size={
                                                            29
                                                        }
                                                    />
                                                </div>

                                                <div
                                                    style={{
                                                        color:
                                                            COLORS.muted,
                                                        fontSize: 11,
                                                        fontWeight: 600,
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

                            {/* PRODUCT INFORMATION */}

                            <div className="col-lg-8">
                                <div
                                    className="h-100"
                                    style={{
                                        padding:
                                            '28px 30px',
                                    }}
                                >
                                    <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <StatusBadge
                                                status={
                                                    actualProduct.status
                                                }
                                            />

                                            <span
                                                style={{
                                                    color:
                                                        COLORS.muted,
                                                    fontSize: 10,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                ID #
                                                {
                                                    actualProduct.id
                                                }
                                            </span>
                                        </div>

                                        <span
                                            style={{
                                                color:
                                                    COLORS.muted,
                                                fontSize: 10,
                                            }}
                                        >
                                            Listed{' '}
                                            {formatDate(
                                                actualProduct.created_at
                                            )}
                                        </span>
                                    </div>

                                    <h2
                                        className="mb-2"
                                        style={{
                                            color:
                                                COLORS.text,
                                            fontSize: 28,
                                            lineHeight:
                                                1.15,
                                            fontWeight: 700,
                                            letterSpacing:
                                                '-.6px',
                                        }}
                                    >
                                        {
                                            actualProduct.name
                                        }
                                    </h2>

                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <StarRating
                                            rating={
                                                averageRating
                                            }
                                            showValue
                                        />

                                        <span
                                            style={{
                                                color:
                                                    COLORS.muted,
                                                fontSize: 11,
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
                                            color:
                                                COLORS.text,
                                            fontSize: 29,
                                            fontWeight: 750,
                                            letterSpacing:
                                                '-.7px',
                                        }}
                                    >
                                        {formatPrice(
                                            actualProduct.price
                                        )}
                                    </div>

                                    <div
                                        style={{
                                            borderTop:
                                                `1px solid ${COLORS.border}`,
                                            paddingTop: 20,
                                        }}
                                    >
                                        <p
                                            className="mb-4"
                                            style={{
                                                color:
                                                    COLORS.secondary,
                                                fontSize: 12,
                                                lineHeight:
                                                    1.75,
                                            }}
                                        >
                                            {actualProduct.description ||
                                                'No description has been provided for this product.'}
                                        </p>

                                        <div className="row g-2">
                                            <div className="col-12 col-sm-6">
                                                <InfoItem
                                                    icon={
                                                        <Icon.Layers
                                                            size={
                                                                14
                                                            }
                                                        />
                                                    }
                                                    label="CATEGORY"
                                                    value={
                                                        categoryName
                                                    }
                                                />
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <InfoItem
                                                    icon={
                                                        <Icon.Building
                                                            size={
                                                                14
                                                            }
                                                        />
                                                    }
                                                    label="SELLER"
                                                    value={
                                                        sellerName
                                                    }
                                                />
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <InfoItem
                                                    icon={
                                                        <Icon.Stack
                                                            size={
                                                                14
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
                        LOWER GRID
                    ================================================= */}

                    <div className="row g-4">

                        {/* DESCRIPTION */}

                        <div className="col-lg-7">
                            <div
                                className="bg-white h-100"
                                style={{
                                    borderRadius: 18,
                                    border:
                                        `1px solid ${COLORS.border}`,
                                    overflow:
                                        'hidden',
                                }}
                            >
                                <SectionHeader
                                    title="Product Description"
                                    description="Complete information provided for this listing."
                                />

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
                                                COLORS.secondary,
                                            fontSize: 12,
                                            lineHeight:
                                                1.85,
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
                                className="bg-white h-100"
                                style={{
                                    borderRadius: 18,
                                    border:
                                        `1px solid ${COLORS.border}`,
                                    overflow:
                                        'hidden',
                                }}
                            >
                                <SectionHeader
                                    title="Customer Reviews"
                                    description={`${reviewsCount} ${
                                        reviewsCount ===
                                        1
                                            ? 'review'
                                            : 'reviews'
                                    }`}
                                    right={
                                        reviews.length >
                                        0 ? (
                                            <StarRating
                                                rating={
                                                    averageRating
                                                }
                                                showValue
                                            />
                                        ) : null
                                    }
                                />

                                <div
                                    style={{
                                        padding:
                                            '0 21px',
                                    }}
                                >
                                    {reviews.length ===
                                    0 ? (
                                        <div
                                            className="text-center"
                                            style={{
                                                padding:
                                                    '50px 10px',
                                            }}
                                        >
                                            <div
                                                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                                                style={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius:
                                                        14,
                                                    background:
                                                        COLORS.soft,
                                                    color:
                                                        COLORS.muted,
                                                }}
                                            >
                                                <Icon.Star
                                                    size={
                                                        20
                                                    }
                                                />
                                            </div>

                                            <div
                                                style={{
                                                    color:
                                                        COLORS.text,
                                                    fontSize: 13,
                                                    fontWeight: 650,
                                                }}
                                            >
                                                No reviews yet
                                            </div>

                                            <div
                                                style={{
                                                    color:
                                                        COLORS.muted,
                                                    fontSize: 11,
                                                    marginTop: 4,
                                                }}
                                            >
                                                Customer
                                                feedback will
                                                appear here.
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