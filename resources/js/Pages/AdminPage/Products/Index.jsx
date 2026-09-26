import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Head, Link, router, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

/* ================================================================
   APPLE / SF FONT STACK
================================================================ */

const APPLE_FONT =
    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif';

/* ================================================================
   ICONS
================================================================ */

const Icon = {
    Plus: (p) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width="16"
            height="16"
            {...p}
        >
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
    ),

    Eye: (p) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width="16"
            height="16"
            {...p}
        >
            <path
                d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="3.2" />
        </svg>
    ),

    Search: (p) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width="17"
            height="17"
            {...p}
        >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
    ),

    Trash: (p) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width="16"
            height="16"
            {...p}
        >
            <path
                d="M4 7h16M9 7V4.8c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8V7M6 7l.9 12.2a2 2 0 0 0 2 1.8h6.2a2 2 0 0 0 2-1.8L18 7"
                strokeLinecap="round"
            />
        </svg>
    ),

    Refresh: (p) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width="16"
            height="16"
            {...p}
        >
            <path
                d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9M20.5 12a8.5 8.5 0 0 1-14.6 5.9"
                strokeLinecap="round"
            />
            <path
                d="M4 4v5h5M20 20v-5h-5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    More: (p) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
            {...p}
        >
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
        </svg>
    ),

    Box: (p) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width="22"
            height="22"
            {...p}
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

    Category: (p) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width="17"
            height="17"
            {...p}
        >
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
    ),

    Arrow: (p) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width="15"
            height="15"
            {...p}
        >
            <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    Close: (p) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            width="18"
            height="18"
            {...p}
        >
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
    ),
};

/* ================================================================
   HELPERS
================================================================ */

const STATUS_META = {
    approved: {
        label: "Approved",
        bg: "#eaf8f1",
        fg: "#16734b",
        dot: "#20a464",
    },

    pending: {
        label: "Pending",
        bg: "#fff7e5",
        fg: "#986500",
        dot: "#e0a11a",
    },

    rejected: {
        label: "Rejected",
        bg: "#fff0ef",
        fg: "#b42318",
        dot: "#df4b42",
    },
};

function formatPrice(value) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
        return "—";
    }

    return new Intl.NumberFormat("en-RW", {
        style: "currency",
        currency: "RWF",
        maximumFractionDigits: 0,
    }).format(number);
}

function formatDate(value) {
    if (!value) {
        return "—";
    }

    try {
        return new Date(value).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    } catch {
        return value;
    }
}

function getInitials(name) {
    if (!name) {
        return "NA";
    }

    const parts = String(name)
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (parts.length === 0) {
        return "NA";
    }

    if (parts.length === 1) {
        return parts[0].substring(0, 2).toUpperCase();
    }

    return (
        parts[0].charAt(0) + parts[1].charAt(0)
    ).toUpperCase();
}

function avatarColor(name) {
    const colors = [
        ["#eef4ff", "#3567d6"],
        ["#edf9f3", "#168455"],
        ["#fff3e8", "#bd6b16"],
        ["#f5efff", "#7650c9"],
        ["#fff0f3", "#c24b6d"],
    ];

    let hash = 0;

    String(name || "seller")
        .split("")
        .forEach((char) => {
            hash = char.charCodeAt(0) + ((hash << 5) - hash);
        });

    return colors[Math.abs(hash) % colors.length];
}

/* ================================================================
   STATUS BADGE
================================================================ */

function StatusBadge({ status }) {
    const meta = STATUS_META[status] || STATUS_META.pending;

    return (
        <span
            className="d-inline-flex align-items-center gap-2"
            style={{
                backgroundColor: meta.bg,
                color: meta.fg,
                borderRadius: "999px",
                padding: "5px 10px",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "-0.1px",
                whiteSpace: "nowrap",
                colorScheme: "light",
            }}
        >
            <span
                style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: meta.dot,
                }}
            />

            {meta.label}
        </span>
    );
}

/* ================================================================
   PRODUCT THUMB
================================================================ */

function ProductThumb({ src, name }) {
    if (!src) {
        return (
            <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "#f5f5f7",
                    color: "#8e8e93",
                }}
            >
                <Icon.Box />
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={name}
            className="flex-shrink-0"
            style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                objectFit: "cover",
                background: "#f5f5f7",
            }}
        />
    );
}

/* ================================================================
   STAT CARD
================================================================ */

function StatCard({ label, value, icon, tone }) {
    return (
        <div className="col-6 col-xl-3">
            <div
                className="h-100"
                style={{
                    background: "#ffffff",
                    border: "1px solid #e8e8ed",
                    borderRadius: 18,
                    padding: "18px 19px",
                    colorScheme: "light",
                }}
            >
                <div className="d-flex align-items-start justify-content-between">
                    <div>
                        <div
                            style={{
                                color: "#86868b",
                                fontSize: 11,
                                fontWeight: 500,
                                letterSpacing: "-0.1px",
                                marginBottom: 7,
                            }}
                        >
                            {label}
                        </div>

                        <div
                            style={{
                                color: "#1d1d1f",
                                fontSize: 25,
                                lineHeight: 1,
                                fontWeight: 650,
                                letterSpacing: "-0.8px",
                            }}
                        >
                            {value}
                        </div>
                    </div>

                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                            width: 34,
                            height: 34,
                            borderRadius: 10,
                            background: tone,
                        }}
                    >
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ================================================================
   MODAL SHELL
================================================================ */

function ModalShell({
    open,
    onClose,
    title,
    eyebrow,
    children,
    width = 650,
}) {
    useEffect(() => {
        if (!open) {
            return;
        }

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = previousOverflow;
        };
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return createPortal(
        <div
            className="products-page-light-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
                zIndex: 1080,
                background: "rgba(20, 20, 22, 0.25)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                padding: 20,
                fontFamily: APPLE_FONT,
                colorScheme: "light",
            }}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                className="w-100"
                style={{
                    maxWidth: width,
                    maxHeight: "calc(100vh - 40px)",
                    overflowY: "auto",
                    background: "#ffffff",
                    color: "#1d1d1f",
                    colorScheme: "light",
                    border: "1px solid #e5e5ea",
                    borderRadius: 22,
                    boxShadow:
                        "0 25px 80px rgba(0,0,0,.16)",
                    overflow: "hidden",
                }}
            >
                <div
                    className="d-flex justify-content-between align-items-start"
                    style={{
                        padding: "23px 24px 18px",
                        borderBottom: "1px solid #f0f0f2",
                    }}
                >
                    <div>
                        {eyebrow && (
                            <div
                                style={{
                                    color: "#8e8e93",
                                    fontSize: 10,
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: ".08em",
                                    marginBottom: 5,
                                }}
                            >
                                {eyebrow}
                            </div>
                        )}

                        <h5
                            className="mb-0"
                            style={{
                                color: "#1d1d1f",
                                fontSize: 19,
                                fontWeight: 650,
                                letterSpacing: "-0.45px",
                            }}
                        >
                            {title}
                        </h5>
                    </div>

                    <button
                        type="button"
                        aria-label="Close"
                        className="border-0 d-flex align-items-center justify-content-center"
                        onClick={onClose}
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 50,
                            background: "#f5f5f7",
                            color: "#6e6e73",
                        }}
                    >
                        <Icon.Close />
                    </button>
                </div>

                {children}
            </div>
        </div>,
        document.body,
    );
}

/* ================================================================
   VIEW MODAL
================================================================ */

function ViewModal({ product, open, onClose }) {
    if (!product) {
        return null;
    }

    const imageSrc = product.image
        ? "/storage/" + product.image
        : null;

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow={"Product #" + product.id}
            title={product.name}
        >
            <div style={{ padding: 24 }}>
                <div className="row g-4">
                    <div className="col-md-5">
                        <div
                            style={{
                                width: "100%",
                                aspectRatio: "1 / 1",
                                borderRadius: 18,
                                overflow: "hidden",
                                background: "#f5f5f7",
                            }}
                        >
                            {imageSrc ? (
                                <img
                                    src={imageSrc}
                                    alt={product.name}
                                    className="w-100 h-100"
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            ) : (
                                <div
                                    className="w-100 h-100 d-flex align-items-center justify-content-center"
                                    style={{
                                        color: "#8e8e93",
                                    }}
                                >
                                    <Icon.Box />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-md-7">
                        <StatusBadge status={product.status} />

                        <p
                            className="mt-3 mb-4"
                            style={{
                                color: "#6e6e73",
                                fontSize: 13,
                                lineHeight: 1.65,
                            }}
                        >
                            {product.description ||
                                "No description provided."}
                        </p>

                        <div
                            className="row g-3"
                            style={{
                                borderTop: "1px solid #f0f0f2",
                                paddingTop: 18,
                            }}
                        >
                            <div className="col-6">
                                <div
                                    className="small mb-1"
                                    style={{
                                        color: "#86868b",
                                        fontSize: 11,
                                    }}
                                >
                                    Price
                                </div>

                                <div
                                    style={{
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: "#1d1d1f",
                                    }}
                                >
                                    {formatPrice(product.price)}
                                </div>
                            </div>

                            <div className="col-6">
                                <div
                                    className="small mb-1"
                                    style={{
                                        color: "#86868b",
                                        fontSize: 11,
                                    }}
                                >
                                    Category
                                </div>

                                <div
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: "#1d1d1f",
                                    }}
                                >
                                    {product.category?.name ||
                                        "Uncategorized"}
                                </div>
                            </div>

                            <div className="col-12">
                                <div
                                    className="small mb-1"
                                    style={{
                                        color: "#86868b",
                                        fontSize: 11,
                                    }}
                                >
                                    Seller
                                </div>

                                <div
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: "#1d1d1f",
                                    }}
                                >
                                    {product.seller?.company_name ||
                                        "N/A"}
                                </div>

                                <div
                                    style={{
                                        marginTop: 2,
                                        color: "#86868b",
                                        fontSize: 11,
                                    }}
                                >
                                    {product.seller?.address || ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="d-flex justify-content-end gap-2"
                style={{
                    padding: "15px 24px",
                    background: "#fafafa",
                    borderTop: "1px solid #f0f0f2",
                }}
            >
                <button
                    type="button"
                    className="btn rounded-pill px-4"
                    onClick={onClose}
                    style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#1d1d1f",
                        background: "#f2f2f7",
                        border: "1px solid #e5e5ea",
                    }}
                >
                    Close
                </button>

                <Link
                    href={route(
                        "admin.products.view",
                        product.id,
                    )}
                    className="btn rounded-pill px-4"
                    style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#ffffff",
                        background: "#0071e3",
                        border: "1px solid #0071e3",
                    }}
                >
                    Full view
                </Link>
            </div>
        </ModalShell>
    );
}

/* ================================================================
   STATUS MODAL
================================================================ */

function StatusModal({ product, open, onClose }) {
    const { data, setData, patch, processing } = useForm({
        status: product?.status || "pending",
    });

    useEffect(() => {
        if (product) {
            setData("status", product.status || "pending");
        }
    }, [product]);

    if (!product) {
        return null;
    }

    const options = [
        {
            value: "pending",
            label: "Pending",
            hint: "Awaiting review.",
        },
        {
            value: "approved",
            label: "Approved",
            hint: "Product becomes visible to buyers.",
        },
        {
            value: "rejected",
            label: "Rejected",
            hint: "Product remains hidden.",
        },
    ];

    const submit = (event) => {
        event.preventDefault();

        patch(
            route(
                "admin.products.updateStatus",
                product.id,
            ),
            {
                preserveScroll: true,
                onSuccess: onClose,
            },
        );
    };

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow={product.name}
            title="Update status"
            width={500}
        >
            <form onSubmit={submit}>
                <div style={{ padding: 24 }}>
                    <div className="d-flex flex-column gap-2">
                        {options.map((option) => {
                            const selected =
                                data.status === option.value;

                            const meta =
                                STATUS_META[option.value];

                            return (
                                <label
                                    key={option.value}
                                    className="d-flex align-items-center gap-3"
                                    style={{
                                        cursor: "pointer",
                                        padding: 13,
                                        borderRadius: 14,
                                        border:
                                            "1px solid " +
                                            (selected
                                                ? meta.fg
                                                : "#e8e8ed"),
                                        background: selected
                                            ? meta.bg
                                            : "#ffffff",
                                        colorScheme: "light",
                                    }}
                                >
                                    <input
                                        type="radio"
                                        name="status"
                                        checked={selected}
                                        onChange={() =>
                                            setData(
                                                "status",
                                                option.value,
                                            )
                                        }
                                        className="form-check-input m-0"
                                        style={{
                                            colorScheme: "light",
                                        }}
                                    />

                                    <div>
                                        <div
                                            style={{
                                                fontSize: 13,
                                                fontWeight: 600,
                                                color: "#1d1d1f",
                                            }}
                                        >
                                            {option.label}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: 11,
                                                color: "#86868b",
                                                marginTop: 2,
                                            }}
                                        >
                                            {option.hint}
                                        </div>
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div
                    className="d-flex justify-content-end gap-2"
                    style={{
                        padding: "15px 24px",
                        background: "#fafafa",
                        borderTop: "1px solid #f0f0f2",
                    }}
                >
                    <button
                        type="button"
                        className="btn rounded-pill px-4"
                        onClick={onClose}
                        style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#1d1d1f",
                            background: "#f2f2f7",
                            border: "1px solid #e5e5ea",
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="btn rounded-pill px-4"
                        disabled={
                            processing ||
                            data.status === product.status
                        }
                        style={{
                            fontSize: 12,
                            fontWeight: 600,
                            background:
                                processing ||
                                data.status === product.status
                                    ? "#c7c7cc"
                                    : "#0071e3",
                            color: "#ffffff",
                            border:
                                "1px solid " +
                                (processing ||
                                data.status === product.status
                                    ? "#c7c7cc"
                                    : "#0071e3"),
                        }}
                    >
                        {processing
                            ? "Updating…"
                            : "Update status"}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* ================================================================
   DELETE MODAL
================================================================ */

function DeleteModal({ product, open, onClose }) {
    if (!product) {
        return null;
    }

    const confirmDelete = () => {
        router.delete(
            route(
                "admin.products.destroy",
                product.id,
            ),
            {
                preserveScroll: true,
                onSuccess: onClose,
            },
        );
    };

    return (
        <ModalShell
            open={open}
            onClose={onClose}
            eyebrow="Permanent action"
            title="Delete product"
            width={460}
        >
            <div style={{ padding: 24 }}>
                <div
                    className="d-flex align-items-start gap-3"
                    style={{
                        background: "#fff4f3",
                        borderRadius: 14,
                        padding: 14,
                        border: "1px solid #fde1df",
                    }}
                >
                    <div
                        className="d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: "#fee4e2",
                            color: "#b42318",
                        }}
                    >
                        <Icon.Trash />
                    </div>

                    <div
                        style={{
                            fontSize: 12,
                            lineHeight: 1.6,
                            color: "#6e6e73",
                        }}
                    >
                        Are you sure you want to delete{" "}
                        <strong
                            style={{
                                color: "#1d1d1f",
                            }}
                        >
                            {product.name}
                        </strong>
                        ? This action cannot be undone.
                    </div>
                </div>
            </div>

            <div
                className="d-flex justify-content-end gap-2"
                style={{
                    padding: "15px 24px",
                    background: "#fafafa",
                    borderTop: "1px solid #f0f0f2",
                }}
            >
                <button
                    type="button"
                    className="btn rounded-pill px-4"
                    onClick={onClose}
                    style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#1d1d1f",
                        background: "#f2f2f7",
                        border: "1px solid #e5e5ea",
                    }}
                >
                    Cancel
                </button>

                <button
                    type="button"
                    className="btn rounded-pill px-4 d-flex align-items-center gap-2"
                    onClick={confirmDelete}
                    style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#ffffff",
                        background: "#d92d20",
                        border: "1px solid #d92d20",
                    }}
                >
                    <Icon.Trash />
                    Delete
                </button>
            </div>
        </ModalShell>
    );
}

/* ================================================================
   ACTION MENU
================================================================ */

function ActionsMenu({ onStatus, onDelete }) {
    const [open, setOpen] = useState(false);

    const buttonRef = useRef(null);
    const menuRef = useRef(null);

    const [position, setPosition] = useState({
        top: 0,
        left: 0,
    });

    const MENU_WIDTH = 190;
    const MENU_HEIGHT = 100;
    const GAP = 7;
    const PADDING = 10;

    const updatePosition = () => {
        if (!buttonRef.current) {
            return;
        }

        const rect =
            buttonRef.current.getBoundingClientRect();

        let left = rect.right - MENU_WIDTH;
        let top = rect.bottom + GAP;

        if (
            left + MENU_WIDTH >
            window.innerWidth - PADDING
        ) {
            left =
                window.innerWidth -
                MENU_WIDTH -
                PADDING;
        }

        if (left < PADDING) {
            left = PADDING;
        }

        const spaceBelow =
            window.innerHeight - rect.bottom;

        const spaceAbove = rect.top;

        if (
            spaceBelow < MENU_HEIGHT + GAP &&
            spaceAbove > MENU_HEIGHT + GAP
        ) {
            top = rect.top - MENU_HEIGHT - GAP;
        }

        if (top < PADDING) {
            top = PADDING;
        }

        if (
            top + MENU_HEIGHT >
            window.innerHeight - PADDING
        ) {
            top =
                window.innerHeight -
                MENU_HEIGHT -
                PADDING;
        }

        setPosition({
            top,
            left,
        });
    };

    const toggleMenu = () => {
        if (!open) {
            updatePosition();
        }

        setOpen((value) => !value);
    };

    useEffect(() => {
        if (!open) {
            return;
        }

        updatePosition();

        const handleOutsideClick = (event) => {
            if (
                buttonRef.current &&
                buttonRef.current.contains(event.target)
            ) {
                return;
            }

            if (
                menuRef.current &&
                menuRef.current.contains(event.target)
            ) {
                return;
            }

            setOpen(false);
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        const handlePositionUpdate = () => {
            updatePosition();
        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick,
        );

        document.addEventListener(
            "keydown",
            handleEscape,
        );

        window.addEventListener(
            "resize",
            handlePositionUpdate,
        );

        window.addEventListener(
            "scroll",
            handlePositionUpdate,
            true,
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick,
            );

            document.removeEventListener(
                "keydown",
                handleEscape,
            );

            window.removeEventListener(
                "resize",
                handlePositionUpdate,
            );

            window.removeEventListener(
                "scroll",
                handlePositionUpdate,
                true,
            );
        };
    }, [open]);

    const menu = open
        ? createPortal(
              <div
                  ref={menuRef}
                  role="menu"
                  className="products-page-light-modal"
                  style={{
                      position: "fixed",
                      top: position.top,
                      left: position.left,
                      width: MENU_WIDTH,
                      zIndex: 99999,
                      padding: 5,
                      background: "#ffffff",
                      color: "#1d1d1f",
                      colorScheme: "light",
                      border: "1px solid #e5e5ea",
                      borderRadius: 14,
                      boxShadow:
                          "0 18px 45px rgba(0,0,0,.12), 0 4px 12px rgba(0,0,0,.05)",
                      fontFamily: APPLE_FONT,
                  }}
              >
                  <button
                      type="button"
                      role="menuitem"
                      className="w-100 border-0 text-start d-flex align-items-center gap-2"
                      onClick={() => {
                          setOpen(false);
                          onStatus();
                      }}
                      style={{
                          minHeight: 39,
                          padding: "7px 9px",
                          borderRadius: 10,
                          background: "#ffffff",
                          color: "#1d1d1f",
                          fontSize: 12,
                          fontWeight: 500,
                          transition:
                              "background-color .15s ease",
                      }}
                      onMouseEnter={(event) => {
                          event.currentTarget.style.background =
                              "#f5f5f7";
                      }}
                      onMouseLeave={(event) => {
                          event.currentTarget.style.background =
                              "#ffffff";
                      }}
                  >
                      <span
                          className="d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                              width: 27,
                              height: 27,
                              borderRadius: 8,
                              background: "#f5f5f7",
                              color: "#6e6e73",
                          }}
                      >
                          <Icon.Refresh />
                      </span>

                      <span>Update status</span>
                  </button>

                  <button
                      type="button"
                      role="menuitem"
                      className="w-100 border-0 text-start d-flex align-items-center gap-2"
                      onClick={() => {
                          setOpen(false);
                          onDelete();
                      }}
                      style={{
                          minHeight: 39,
                          padding: "7px 9px",
                          borderRadius: 10,
                          background: "#ffffff",
                          color: "#b42318",
                          fontSize: 12,
                          fontWeight: 500,
                          transition:
                              "background-color .15s ease",
                      }}
                      onMouseEnter={(event) => {
                          event.currentTarget.style.background =
                              "#fff5f4";
                      }}
                      onMouseLeave={(event) => {
                          event.currentTarget.style.background =
                              "#ffffff";
                      }}
                  >
                      <span
                          className="d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                              width: 27,
                              height: 27,
                              borderRadius: 8,
                              background: "#fff0ef",
                              color: "#b42318",
                          }}
                      >
                          <Icon.Trash />
                      </span>

                      <span>Delete product</span>
                  </button>
              </div>,
              document.body,
          )
        : null;

    return (
        <>
            <button
                ref={buttonRef}
                type="button"
                aria-label="Product actions"
                aria-expanded={open}
                className="border-0 d-flex align-items-center justify-content-center"
                onClick={toggleMenu}
                style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: open
                        ? "#e8e8ed"
                        : "#f5f5f7",
                    color: "#6e6e73",
                    colorScheme: "light",
                    transition:
                        "background-color .15s ease",
                }}
                onMouseEnter={(event) => {
                    event.currentTarget.style.background =
                        "#e8e8ed";
                }}
                onMouseLeave={(event) => {
                    if (!open) {
                        event.currentTarget.style.background =
                            "#f5f5f7";
                    }
                }}
            >
                <Icon.More />
            </button>

            {menu}
        </>
    );
}

/* ================================================================
   MAIN PAGE
================================================================ */

export default function Index({
    products = [],
    counts,
    filters,
    flash,
}) {
    const [viewTarget, setViewTarget] = useState(null);
    const [statusTarget, setStatusTarget] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [query, setQuery] = useState("");

    const activeStatus =
        filters?.status || "all";

    /* ============================================================
       STATS
    ============================================================ */

    const stats = useMemo(() => {
        if (counts) {
            return counts;
        }

        return {
            total: products.length,

            approved: products.filter(
                (product) =>
                    product.status === "approved",
            ).length,

            pending: products.filter(
                (product) =>
                    product.status === "pending",
            ).length,

            rejected: products.filter(
                (product) =>
                    product.status === "rejected",
            ).length,
        };
    }, [products, counts]);

    /* ============================================================
       SEARCH
    ============================================================ */

    const filtered = useMemo(() => {
        const search = query.trim().toLowerCase();

        if (!search) {
            return products;
        }

        return products.filter((product) => {
            const name = String(product.name || "");

            const seller = String(
                product.seller?.company_name || "",
            );

            const category = String(
                product.category?.name || "",
            );

            return (
                name.toLowerCase().includes(search) ||
                seller.toLowerCase().includes(search) ||
                category.toLowerCase().includes(search)
            );
        });
    }, [products, query]);

    /* ============================================================
       STATUS FILTER
    ============================================================ */

    const changeStatusFilter = (status) => {
        router.get(
            route("admin.products.index"),
            status === "all"
                ? {}
                : {
                      status,
                  },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            },
        );
    };

    return (
        <AppLayout>
            <Head title="Products" />

            <div className="products-page-light">
                <style>{`
                    .products-page-light,
                    .products-page-light *,
                    .products-page-light-modal,
                    .products-page-light-modal * {
                        color-scheme: light !important;
                    }

                    .products-page-light {
                        min-height: 100vh;
                        padding: 25px 40px 40px;
                        font-family: ${APPLE_FONT};
                        font-synthesis: none;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        color: #1d1d1f !important;
                        background: #ffffff !important;
                        letter-spacing: -0.15px;
                    }

                    .products-page-light input,
                    .products-page-light textarea,
                    .products-page-light select,
                    .products-page-light .form-control,
                    .products-page-light .form-select {
                        color-scheme: light !important;
                        background-color: #ffffff !important;
                        color: #1d1d1f !important;
                        border-color: #dedee3 !important;
                    }

                    .products-page-light input::placeholder,
                    .products-page-light textarea::placeholder {
                        color: #8e8e93 !important;
                        opacity: 1 !important;
                    }

                    .products-page-light input:focus,
                    .products-page-light textarea:focus,
                    .products-page-light select:focus,
                    .products-page-light .form-control:focus,
                    .products-page-light .form-select:focus {
                        color: #1d1d1f !important;
                        background-color: #ffffff !important;
                        border-color: #b8b8be !important;
                        box-shadow: 0 0 0 0.2rem rgba(0, 113, 227, 0.10) !important;
                    }

                    .products-page-light option {
                        color: #1d1d1f !important;
                        background: #ffffff !important;
                    }

                    .products-page-light button,
                    .products-page-light .btn,
                    .products-page-light a {
                        color-scheme: light !important;
                    }

                    .products-page-light .table {
                        --bs-table-bg: #ffffff !important;
                        --bs-table-color: #1d1d1f !important;
                        --bs-table-border-color: #ededf0 !important;
                        color: #1d1d1f !important;
                        background-color: #ffffff !important;
                    }

                    .products-page-light .table > :not(caption) > * > * {
                        background-color: transparent !important;
                        color: inherit !important;
                    }

                    .products-page-light .table thead,
                    .products-page-light .table tbody,
                    .products-page-light .table tr,
                    .products-page-light .table td,
                    .products-page-light .table th {
                        color-scheme: light !important;
                    }

                    .products-page-light-modal {
                        color-scheme: light !important;
                    }

                    .products-page-light-modal input,
                    .products-page-light-modal textarea,
                    .products-page-light-modal select,
                    .products-page-light-modal .form-control,
                    .products-page-light-modal .form-select {
                        background-color: #ffffff !important;
                        color: #1d1d1f !important;
                    }

                    .products-page-light-modal button {
                        color-scheme: light !important;
                    }

                    @media (prefers-color-scheme: dark) {
                        .products-page-light {
                            background: #ffffff !important;
                            color: #1d1d1f !important;
                        }

                        .products-page-light input,
                        .products-page-light textarea,
                        .products-page-light select,
                        .products-page-light .form-control,
                        .products-page-light .form-select {
                            background-color: #ffffff !important;
                            color: #1d1d1f !important;
                            border-color: #dedee3 !important;
                        }

                        .products-page-light .table {
                            background-color: #ffffff !important;
                            color: #1d1d1f !important;
                        }

                        .products-page-light-modal {
                            color: #1d1d1f !important;
                        }

                        .products-page-light-modal > div {
                            background-color: #ffffff !important;
                            color: #1d1d1f !important;
                        }
                    }

                    .products-page-light ::selection {
                        background: #dbeafe !important;
                        color: #1d1d1f !important;
                    }

                    .products-page-light .product-filter-btn {
                        transition:
                            background-color .15s ease,
                            color .15s ease;
                    }

                    .products-page-light .product-filter-btn:hover {
                        background: #f5f5f7 !important;
                        color: #1d1d1f !important;
                    }

                    .products-page-light .product-view-btn {
                        transition:
                            background-color .15s ease,
                            transform .15s ease;
                    }

                    .products-page-light .product-view-btn:hover {
                        background: #e8e8ed !important;
                    }

                    .products-page-light .product-primary-btn {
                        transition:
                            background-color .15s ease,
                            border-color .15s ease;
                    }

                    .products-page-light .product-primary-btn:hover {
                        background: #0077ed !important;
                        border-color: #0077ed !important;
                    }

                    @media (max-width: 991.98px) {
                        .products-page-light {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                    }

                    @media (max-width: 575.98px) {
                        .products-page-light {
                            padding: 18px 14px 30px;
                        }
                    }
                `}</style>

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
                    <div>
                        <div
                            className="d-flex align-items-center gap-2 mb-2"
                            style={{
                                fontSize: 11,
                                color: "#86868b",
                                fontWeight: 500,
                            }}
                        >
                            <span>Admin</span>
                            <span>/</span>

                            <span
                                style={{
                                    color: "#1d1d1f",
                                }}
                            >
                                Products
                            </span>
                        </div>

                        <h2
                            className="mb-1"
                            style={{
                                fontSize: 27,
                                lineHeight: 1.15,
                                fontWeight: 650,
                                letterSpacing: "-0.9px",
                                color: "#1d1d1f",
                            }}
                        >
                            Products
                        </h2>

                        <p
                            className="mb-0"
                            style={{
                                color: "#86868b",
                                fontSize: 12.5,
                            }}
                        >
                            Manage your marketplace products,
                            categories and listings.
                        </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <Link
                            href="/admin/product-categories"
                            className="d-flex align-items-center gap-2 text-decoration-none"
                            style={{
                                height: 38,
                                padding: "0 15px",
                                borderRadius: 999,
                                border: "1px solid #dedee3",
                                background: "#ffffff",
                                color: "#1d1d1f",
                                fontSize: 12,
                                fontWeight: 600,
                            }}
                        >
                            <Icon.Category />
                            Product Categories
                            <Icon.Arrow />
                        </Link>

                        <Link
                            href={route(
                                "admin.products.create",
                            )}
                            className="product-primary-btn d-flex align-items-center gap-2 text-decoration-none"
                            style={{
                                height: 38,
                                padding: "0 16px",
                                borderRadius: 999,
                                background: "#0071e3",
                                color: "#ffffff",
                                border: "1px solid #0071e3",
                                fontSize: 12,
                                fontWeight: 600,
                            }}
                        >
                            <Icon.Plus />
                            Add Product
                        </Link>
                    </div>
                </div>

                {/* =================================================
                    FLASH
                ================================================= */}

                {flash?.success && (
                    <div
                        className="mb-4"
                        style={{
                            padding: "11px 14px",
                            borderRadius: 12,
                            background: "#edf9f3",
                            border: "1px solid #d5f1e1",
                            color: "#16734b",
                            fontSize: 12,
                        }}
                    >
                        {flash.success}
                    </div>
                )}

                {/* =================================================
                    STATS
                ================================================= */}

                <div className="row g-3 mb-4">
                    <StatCard
                        label="Total products"
                        value={stats.total}
                        tone="#eef3ff"
                        icon={
                            <Icon.Box
                                style={{
                                    color: "#4169d8",
                                }}
                            />
                        }
                    />

                    <StatCard
                        label="Approved"
                        value={stats.approved}
                        tone="#edf9f3"
                        icon={
                            <span
                                style={{
                                    color: "#168455",
                                    fontSize: 16,
                                    fontWeight: 700,
                                }}
                            >
                                ✓
                            </span>
                        }
                    />

                    <StatCard
                        label="Pending review"
                        value={stats.pending}
                        tone="#fff7e5"
                        icon={
                            <span
                                style={{
                                    color: "#a66b00",
                                    fontSize: 15,
                                    fontWeight: 700,
                                }}
                            >
                                •
                            </span>
                        }
                    />

                    <StatCard
                        label="Rejected"
                        value={stats.rejected}
                        tone="#fff0ef"
                        icon={
                            <span
                                style={{
                                    color: "#c5362c",
                                    fontSize: 16,
                                    fontWeight: 700,
                                }}
                            >
                                ×
                            </span>
                        }
                    />
                </div>

                {/* =================================================
                    PRODUCTS CARD
                ================================================= */}

                <div
                    style={{
                        background: "#ffffff",
                        color: "#1d1d1f",
                        colorScheme: "light",
                        border: "1px solid #e8e8ed",
                        borderRadius: 20,
                        overflow: "visible",
                    }}
                >
                    {/* TOOLBAR */}

                    <div
                        className="d-flex justify-content-between align-items-center flex-wrap gap-3"
                        style={{
                            padding: "17px 19px",
                            borderBottom:
                                "1px solid #ededf0",
                            borderRadius:
                                "20px 20px 0 0",
                        }}
                    >
                        <div className="d-flex align-items-center gap-1 flex-wrap">
                            {[
                                "all",
                                "pending",
                                "approved",
                                "rejected",
                            ].map((status) => {
                                const active =
                                    activeStatus === status;

                                return (
                                    <button
                                        key={status}
                                        type="button"
                                        className="product-filter-btn"
                                        onClick={() =>
                                            changeStatusFilter(
                                                status,
                                            )
                                        }
                                        style={{
                                            border: "none",
                                            background: active
                                                ? "#f2f2f7"
                                                : "transparent",
                                            color: active
                                                ? "#1d1d1f"
                                                : "#6e6e73",
                                            borderRadius: 999,
                                            padding: "7px 12px",
                                            fontSize: 11,
                                            fontWeight: 600,
                                            textTransform:
                                                "capitalize",
                                        }}
                                    >
                                        {status === "all"
                                            ? "All"
                                            : status}
                                    </button>
                                );
                            })}
                        </div>

                        <div
                            className="position-relative"
                            style={{
                                width: 270,
                                maxWidth: "100%",
                            }}
                        >
                            <span
                                className="position-absolute"
                                style={{
                                    left: 12,
                                    top: 8,
                                    color: "#8e8e93",
                                    zIndex: 2,
                                }}
                            >
                                <Icon.Search />
                            </span>

                            <input
                                type="text"
                                value={query}
                                onChange={(event) =>
                                    setQuery(
                                        event.target.value,
                                    )
                                }
                                placeholder="Search products..."
                                className="form-control"
                                style={{
                                    height: 34,
                                    borderRadius: 999,
                                    border:
                                        "1px solid #e0e0e5",
                                    background: "#f8f8fa",
                                    paddingLeft: 38,
                                    fontSize: 11.5,
                                    boxShadow: "none",
                                    color: "#1d1d1f",
                                }}
                            />
                        </div>
                    </div>

                    {/* TABLE */}

                    <div
                        className="table-responsive"
                        style={{
                            overflowX: "auto",
                            overflowY: "visible",
                        }}
                    >
                        <table
                            className="table align-middle mb-0"
                            style={{
                                minWidth: 850,
                                background: "#ffffff",
                                color: "#1d1d1f",
                            }}
                        >
                            <thead>
                                <tr
                                    style={{
                                        background: "#fafafa",
                                    }}
                                >
                                    {[
                                        "Product",
                                        "Seller",
                                        "Price",
                                        "Status",
                                        "Created",
                                    ].map((heading) => (
                                        <th
                                            key={heading}
                                            className="px-3 py-3"
                                            style={{
                                                color: "#86868b",
                                                fontSize: 10,
                                                fontWeight: 600,
                                                textTransform:
                                                    "uppercase",
                                                letterSpacing:
                                                    ".04em",
                                                borderBottom:
                                                    "1px solid #ededf0",
                                                background:
                                                    "#fafafa",
                                            }}
                                        >
                                            {heading}
                                        </th>
                                    ))}

                                    <th
                                        className="px-4 py-3 text-end"
                                        style={{
                                            color: "#86868b",
                                            fontSize: 10,
                                            fontWeight: 600,
                                            textTransform:
                                                "uppercase",
                                            letterSpacing:
                                                ".04em",
                                            borderBottom:
                                                "1px solid #ededf0",
                                            background:
                                                "#fafafa",
                                        }}
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {filtered.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="text-center"
                                            style={{
                                                padding:
                                                    "70px 20px",
                                                background:
                                                    "#ffffff",
                                            }}
                                        >
                                            <div
                                                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                                                style={{
                                                    width: 52,
                                                    height: 52,
                                                    borderRadius: 16,
                                                    background:
                                                        "#f5f5f7",
                                                    color: "#8e8e93",
                                                }}
                                            >
                                                <Icon.Box />
                                            </div>

                                            <div
                                                style={{
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    color: "#1d1d1f",
                                                }}
                                            >
                                                No products found
                                            </div>

                                            <div
                                                style={{
                                                    fontSize: 11,
                                                    color: "#86868b",
                                                    marginTop: 4,
                                                }}
                                            >
                                                Try another search or
                                                filter.
                                            </div>
                                        </td>
                                    </tr>
                                )}

                                {filtered.map((product) => {
                                    const image =
                                        product.image
                                            ? "/storage/" +
                                              product.image
                                            : null;

                                    const seller =
                                        product.seller
                                            ?.company_name ||
                                        "N/A";

                                    const category =
                                        product.category?.name ||
                                        "Uncategorized";

                                    const sellerColors =
                                        avatarColor(seller);

                                    return (
                                        <tr
                                            key={product.id}
                                            style={{
                                                borderBottom:
                                                    "1px solid #f1f1f3",
                                                background:
                                                    "#ffffff",
                                            }}
                                        >
                                            {/* PRODUCT */}

                                            <td className="px-4 py-3">
                                                <div className="d-flex align-items-center gap-3">
                                                    <ProductThumb
                                                        src={image}
                                                        name={
                                                            product.name
                                                        }
                                                    />

                                                    <div
                                                        style={{
                                                            minWidth: 0,
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                fontSize: 12.5,
                                                                fontWeight: 600,
                                                                color: "#1d1d1f",
                                                                marginBottom: 3,
                                                                whiteSpace:
                                                                    "nowrap",
                                                                overflow:
                                                                    "hidden",
                                                                textOverflow:
                                                                    "ellipsis",
                                                                maxWidth: 260,
                                                            }}
                                                        >
                                                            {
                                                                product.name
                                                            }
                                                        </div>

                                                        <div
                                                            style={{
                                                                fontSize: 10.5,
                                                                color: "#86868b",
                                                            }}
                                                        >
                                                            {
                                                                category
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* SELLER */}

                                            <td className="px-3 py-3">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div
                                                        className="d-flex align-items-center justify-content-center flex-shrink-0"
                                                        style={{
                                                            width: 31,
                                                            height: 31,
                                                            borderRadius: 10,
                                                            background:
                                                                sellerColors[0],
                                                            color:
                                                                sellerColors[1],
                                                            fontSize: 10,
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        {getInitials(
                                                            seller,
                                                        )}
                                                    </div>

                                                    <div>
                                                        <div
                                                            style={{
                                                                fontSize: 11.5,
                                                                fontWeight: 600,
                                                                color: "#1d1d1f",
                                                            }}
                                                        >
                                                            {
                                                                seller
                                                            }
                                                        </div>

                                                        <div
                                                            style={{
                                                                fontSize: 10,
                                                                color: "#86868b",
                                                            }}
                                                        >
                                                            {product
                                                                .seller
                                                                ?.address ||
                                                                ""}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* PRICE */}

                                            <td className="px-3 py-3">
                                                <span
                                                    style={{
                                                        fontSize: 12,
                                                        fontWeight: 650,
                                                        color: "#1d1d1f",
                                                    }}
                                                >
                                                    {formatPrice(
                                                        product.price,
                                                    )}
                                                </span>
                                            </td>

                                            {/* STATUS */}

                                            <td className="px-3 py-3">
                                                <StatusBadge
                                                    status={
                                                        product.status
                                                    }
                                                />
                                            </td>

                                            {/* DATE */}

                                            <td className="px-3 py-3">
                                                <span
                                                    style={{
                                                        fontSize: 11,
                                                        color: "#86868b",
                                                    }}
                                                >
                                                    {formatDate(
                                                        product.created_at,
                                                    )}
                                                </span>
                                            </td>

                                            {/* ACTION */}

                                            <td
                                                className="px-4 py-3"
                                                style={{
                                                    position:
                                                        "relative",
                                                }}
                                            >
                                                <div className="d-flex align-items-center justify-content-end gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setViewTarget(
                                                                product,
                                                            )
                                                        }
                                                        className="product-view-btn border-0 d-flex align-items-center gap-1"
                                                        style={{
                                                            height: 32,
                                                            padding:
                                                                "0 11px",
                                                            borderRadius: 999,
                                                            background:
                                                                "#f5f5f7",
                                                            color: "#1d1d1f",
                                                            fontSize: 11,
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        <Icon.Eye />
                                                        View
                                                    </button>

                                                    <ActionsMenu
                                                        onStatus={() =>
                                                            setStatusTarget(
                                                                product,
                                                            )
                                                        }
                                                        onDelete={() =>
                                                            setDeleteTarget(
                                                                product,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* FOOTER */}

                    <div
                        className="d-flex justify-content-between align-items-center flex-wrap gap-2"
                        style={{
                            padding: "13px 19px",
                            background: "#fafafa",
                            borderTop: "1px solid #ededf0",
                            borderRadius:
                                "0 0 20px 20px",
                        }}
                    >
                        <span
                            style={{
                                color: "#86868b",
                                fontSize: 10.5,
                            }}
                        >
                            Showing{" "}
                            <strong
                                style={{
                                    color: "#1d1d1f",
                                }}
                            >
                                {filtered.length}
                            </strong>{" "}
                            of{" "}
                            <strong
                                style={{
                                    color: "#1d1d1f",
                                }}
                            >
                                {products.length}
                            </strong>{" "}
                            products
                        </span>

                        <Link
                            href="/admin/product-categories"
                            className="text-decoration-none d-flex align-items-center gap-1"
                            style={{
                                color: "#0071e3",
                                fontSize: 10.5,
                                fontWeight: 600,
                            }}
                        >
                            Manage categories
                            <Icon.Arrow />
                        </Link>
                    </div>
                </div>
            </div>

            {/* ========================================================
                MODALS
            ======================================================== */}

            <ViewModal
                product={viewTarget}
                open={!!viewTarget}
                onClose={() => setViewTarget(null)}
            />

            <StatusModal
                product={statusTarget}
                open={!!statusTarget}
                onClose={() => setStatusTarget(null)}
            />

            <DeleteModal
                product={deleteTarget}
                open={!!deleteTarget}
                onClose={() => setDeleteTarget(null)}
            />
        </AppLayout>
    );
}