import { Head, Link, router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

const RATING_FILTERS = [null, 5, 4, 3, 2, 1];

export default function Index({ testimonials, stats, filters }) {
    const [formOpen, setFormOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const [viewing, setViewing] = useState(null);
    const [deleting, setDeleting] = useState(null);
    const [deleteProcessing, setDeleteProcessing] = useState(false);
    const [hoverRating, setHoverRating] = useState(0);

    const form = useForm({
        title: "",
        content: "",
        rating: 5,
    });

    function filterByRating(rating) {
        router.get(
            route("talent.testimonials.index"),
            rating ? { rating } : {},
            { preserveState: true, preserveScroll: true, replace: true },
        );
    }

    function openAdd() {
        form.clearErrors();
        form.reset();
        setEditing(null);
        setFormOpen(true);
    }

    function openEdit(t) {
        form.clearErrors();
        form.setData({
            title: t.title || "",
            content: t.content || "",
            rating: t.rating || 5,
        });
        setEditing(t);
        setFormOpen(true);
    }

    function closeForm() {
        setFormOpen(false);
        setEditing(null);
        form.reset();
        form.clearErrors();
    }

    function submit(e) {
        e.preventDefault();
        if (editing) {
            form.put(route("talent.testimonials.update", editing.id), {
                preserveScroll: true,
                onSuccess: () => closeForm(),
            });
        } else {
            form.post(route("talent.testimonials.store"), {
                preserveScroll: true,
                onSuccess: () => closeForm(),
            });
        }
    }

    function confirmDelete() {
        if (!deleting) return;
        setDeleteProcessing(true);
        router.delete(route("talent.testimonials.destroy", deleting.id), {
            preserveScroll: true,
            onSuccess: () => {
                setDeleting(null);
                setDeleteProcessing(false);
            },
            onError: () => setDeleteProcessing(false),
        });
    }

    useEffect(() => {
        function onKey(e) {
            if (e.key !== "Escape") return;
            if (formOpen) closeForm();
            else if (viewing) setViewing(null);
            else if (deleting) setDeleting(null);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [formOpen, viewing, deleting]);

    return (
        <AppLayout>
            <Head title="Testimonials" />

            <div data-h-scope="talent-testimonials">
                <style>{`
                    [data-h-scope="talent-testimonials"] {
                        --h-accent: #48d597;
                        --h-accent-dark: #2fb87c;
                        --h-ink: #060f11;
                        --h-white: #ffffff;
                        --h-bg: #f4f9f7;
                        --h-star: #f5a623;
                        background-color: var(--h-bg);
                        min-height: 100%;
                    }
                    [data-h-scope="talent-testimonials"] .h-card {
                        background: var(--h-white);
                        border: 1px solid rgba(6, 15, 17, 0.06);
                    }
                    [data-h-scope="talent-testimonials"] .h-hero {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-testimonials"] .h-hero .text-secondary {
                        color: rgba(255,255,255,0.65) !important;
                    }
                    [data-h-scope="talent-testimonials"] .h-bar-track {
                        background: rgba(255,255,255,0.1);
                        height: 6px;
                        border-radius: 999px;
                        overflow: hidden;
                    }
                    [data-h-scope="talent-testimonials"] .h-bar-fill {
                        background: var(--h-accent);
                        height: 100%;
                        border-radius: 999px;
                    }
                    [data-h-scope="talent-testimonials"] .h-chip {
                        border: none;
                        background: rgba(255,255,255,0.08);
                        color: rgba(255,255,255,0.75);
                        font-weight: 600;
                        padding: 6px 14px;
                        border-radius: 999px;
                        font-size: 13px;
                        transition: all 0.15s ease;
                        white-space: nowrap;
                    }
                    [data-h-scope="talent-testimonials"] .h-chip.active {
                        background: var(--h-accent);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-testimonials"] .h-chip:not(.active):hover {
                        background: rgba(255,255,255,0.14);
                    }
                    [data-h-scope="talent-testimonials"] .h-tile {
                        border: 1px solid rgba(6,15,17,0.06);
                        transition: box-shadow 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
                    }
                    [data-h-scope="talent-testimonials"] .h-tile:hover {
                        border-color: rgba(72, 213, 151, 0.4);
                        box-shadow: 0 10px 24px rgba(6,15,17,0.07);
                        transform: translateY(-2px);
                    }
                    [data-h-scope="talent-testimonials"] .h-quote-mark {
                        color: rgba(72, 213, 151, 0.35);
                        font-size: 2.75rem;
                        line-height: 1;
                        font-family: Georgia, serif;
                    }
                    [data-h-scope="talent-testimonials"] .h-pagination a,
                    [data-h-scope="talent-testimonials"] .h-pagination span {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 34px;
                        height: 34px;
                        padding: 0 8px;
                        border-radius: 8px;
                        color: var(--h-ink);
                        font-size: 14px;
                        text-decoration: none;
                    }
                    [data-h-scope="talent-testimonials"] .h-pagination a:hover {
                        background: rgba(6,15,17,0.05);
                    }
                    [data-h-scope="talent-testimonials"] .h-pagination .active span {
                        background: var(--h-ink);
                        color: var(--h-white);
                    }
                    [data-h-scope="talent-testimonials"] .h-pagination .disabled span {
                        opacity: 0.35;
                    }
                    [data-h-scope="talent-testimonials"] .h-action-btn {
                        width: 30px;
                        height: 30px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 8px;
                        border: none;
                        background: rgba(6,15,17,0.04);
                        color: rgba(6,15,17,0.55);
                        transition: all 0.15s ease;
                    }
                    [data-h-scope="talent-testimonials"] .h-action-btn:hover {
                        background: rgba(6,15,17,0.08);
                        color: var(--h-ink);
                    }
                    [data-h-scope="talent-testimonials"] .h-action-btn.h-danger:hover {
                        background: rgba(220, 53, 69, 0.1);
                        color: #dc3545;
                    }
                `}</style>

                <div className="container-fluid px-4 py-4">
                    <div className="mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div>
                            <h4 className="fw-bold mb-1">Testimonials</h4>
                            <p className="text-secondary mb-0 small">
                                What people are saying about your work
                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn d-flex align-items-center gap-2"
                            style={{
                                background: "var(--h-ink)",
                                color: "#fff",
                                borderRadius: 10,
                                padding: "9px 18px",
                                fontWeight: 600,
                                fontSize: 14,
                            }}
                            onClick={openAdd}
                        >
                            <i className="fas fa-plus"></i>
                            Add Testimonial
                        </button>
                    </div>

                    {/* Hero summary */}
                    <div className="h-hero card border-0 rounded-4 mb-4">
                        <div className="card-body p-4">
                            <div className="row align-items-center g-4">
                                <div className="col-md-3 text-center text-md-start">
                                    <div className="display-5 fw-bold mb-1">
                                        {stats.average || "—"}
                                    </div>
                                    <div className="mb-2">
                                        <StarDisplay rating={Math.round(stats.average)} />
                                    </div>
                                    <div className="small text-secondary">
                                        {stats.total} testimonial{stats.total === 1 ? "" : "s"}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    {[5, 4, 3, 2, 1].map((n) => (
                                        <div
                                            key={n}
                                            className="d-flex align-items-center gap-2 mb-2"
                                        >
                                            <span className="small" style={{ width: 44 }}>
                                                {n} star
                                            </span>
                                            <div className="h-bar-track flex-grow-1">
                                                <div
                                                    className="h-bar-fill"
                                                    style={{
                                                        width: stats.total
                                                            ? `${(stats.breakdown[n] / stats.total) * 100}%`
                                                            : "0%",
                                                    }}
                                                />
                                            </div>
                                            <span
                                                className="small text-secondary text-end"
                                                style={{ width: 24 }}
                                            >
                                                {stats.breakdown[n]}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-md-3">
                                    <div className="d-flex flex-md-column flex-wrap gap-2 justify-content-md-end">
                                        {RATING_FILTERS.map((r) => (
                                            <button
                                                key={r ?? "all"}
                                                type="button"
                                                className={`h-chip ${filters.rating === r ? "active" : ""}`}
                                                onClick={() => filterByRating(r)}
                                            >
                                                {r ? (
                                                    <>
                                                        {r} <i className="fas fa-star fa-xs"></i>
                                                    </>
                                                ) : (
                                                    "All ratings"
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* List */}
                    {testimonials.data.length === 0 ? (
                        <div className="card h-card border-0 shadow-sm rounded-4">
                            <div className="card-body text-center py-5 text-secondary">
                                <i className="fas fa-quote-right fs-1 mb-3 d-block opacity-25"></i>
                                <p className="mb-3">
                                    {filters.rating
                                        ? `No ${filters.rating}-star testimonials yet.`
                                        : "No testimonials yet."}
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-success btn-sm"
                                    onClick={openAdd}
                                >
                                    <i className="fas fa-plus me-2"></i>
                                    Add your first testimonial
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="row g-3">
                            {testimonials.data.map((t) => (
                                <div className="col-md-6 col-lg-4" key={t.id}>
                                    <TestimonialCard
                                        testimonial={t}
                                        onView={() => setViewing(t)}
                                        onEdit={() => openEdit(t)}
                                        onDelete={() => setDeleting(t)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {testimonials.links && testimonials.data.length > 0 && (
                        <Pagination links={testimonials.links} />
                    )}
                </div>

                {/* Add / Edit Modal */}
                {formOpen && (
                    <Modal
                        onClose={closeForm}
                        title={editing ? "Edit Testimonial" : "Add Testimonial"}
                        size="lg"
                    >
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold small">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${form.errors.title ? "is-invalid" : ""}`}
                                    value={form.data.title}
                                    onChange={(e) => form.setData("title", e.target.value)}
                                    placeholder="e.g. Outstanding work!"
                                    autoFocus
                                />
                                {form.errors.title && (
                                    <div className="invalid-feedback d-block">
                                        {form.errors.title}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold small">
                                    Content
                                </label>
                                <textarea
                                    className={`form-control ${form.errors.content ? "is-invalid" : ""}`}
                                    rows="4"
                                    value={form.data.content}
                                    onChange={(e) => form.setData("content", e.target.value)}
                                    placeholder="Share the testimonial content..."
                                    style={{ resize: "vertical" }}
                                ></textarea>
                                {form.errors.content && (
                                    <div className="invalid-feedback d-block">
                                        {form.errors.content}
                                    </div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold small d-block mb-2">
                                    Rating
                                </label>
                                <div className="d-flex align-items-center gap-2">
                                    {[1, 2, 3, 4, 5].map((n) => (
                                        <button
                                            key={n}
                                            type="button"
                                            onClick={() => form.setData("rating", n)}
                                            onMouseEnter={() => setHoverRating(n)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            className="btn btn-link p-0 border-0"
                                            style={{ lineHeight: 1, textDecoration: "none" }}
                                        >
                                            <i
                                                className="fas fa-star"
                                                style={{
                                                    fontSize: 26,
                                                    color:
                                                        n <= (hoverRating || form.data.rating)
                                                            ? "#f5a623"
                                                            : "rgba(6,15,17,0.15)",
                                                }}
                                            ></i>
                                        </button>
                                    ))}
                                    <span className="small text-secondary ms-2">
                                        {form.data.rating} / 5
                                    </span>
                                </div>
                                {form.errors.rating && (
                                    <div className="text-danger small mt-1">
                                        {form.errors.rating}
                                    </div>
                                )}
                            </div>

                            <div className="d-flex justify-content-end gap-2 pt-3 border-top">
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={closeForm}
                                    disabled={form.processing}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn text-white"
                                    style={{ background: "var(--h-accent-dark)" }}
                                    disabled={form.processing}
                                >
                                    {form.processing ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                            Saving...
                                        </>
                                    ) : editing ? (
                                        <>
                                            <i className="fas fa-check me-2"></i>
                                            Update Testimonial
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-plus me-2"></i>
                                            Save Testimonial
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </Modal>
                )}

                {/* View Modal */}
                {viewing && (
                    <Modal onClose={() => setViewing(null)} title="Testimonial Details">
                        <div className="mb-3 d-flex align-items-center justify-content-between">
                            <span className="small text-secondary fw-semibold">Rating</span>
                            <span>
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <i
                                        key={n}
                                        className="fas fa-star me-1"
                                        style={{
                                            color:
                                                n <= viewing.rating
                                                    ? "#f5a623"
                                                    : "rgba(6,15,17,0.15)",
                                        }}
                                    ></i>
                                ))}
                            </span>
                        </div>

                        <div className="mb-3">
                            <span className="small text-secondary fw-semibold d-block mb-1">
                                Title
                            </span>
                            <h6 className="fw-bold mb-0" style={{ fontSize: 18 }}>
                                {viewing.title}
                            </h6>
                        </div>

                        <div className="mb-3">
                            <span className="small text-secondary fw-semibold d-block mb-1">
                                Content
                            </span>
                            <p
                                className="text-secondary mb-0"
                                style={{ lineHeight: 1.7, whiteSpace: "pre-wrap" }}
                            >
                                {viewing.content}
                            </p>
                        </div>

                        <div className="mb-2">
                            <span className="small text-secondary fw-semibold d-block mb-1">
                                Date
                            </span>
                            <span className="small text-secondary">
                                {viewing.created_at_human ?? viewing.created_at}
                            </span>
                        </div>

                        <div className="d-flex justify-content-end gap-2 pt-3 border-top mt-3">
                            <button
                                type="button"
                                className="btn btn-light"
                                onClick={() => setViewing(null)}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn text-white"
                                style={{ background: "var(--h-accent-dark)" }}
                                onClick={() => {
                                    const t = viewing;
                                    setViewing(null);
                                    openEdit(t);
                                }}
                            >
                                <i className="fas fa-pen me-2"></i>
                                Edit
                            </button>
                        </div>
                    </Modal>
                )}

                {/* Delete Confirmation Modal */}
                {deleting && (
                    <Modal
                        onClose={() => setDeleting(null)}
                        title="Delete Testimonial"
                        size="sm"
                    >
                        <div className="text-center py-2">
                            <div
                                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                                style={{
                                    width: 64,
                                    height: 64,
                                    background: "rgba(220, 53, 69, 0.1)",
                                }}
                            >
                                <i
                                    className="fas fa-trash text-danger"
                                    style={{ fontSize: 24 }}
                                ></i>
                            </div>
                            <p className="mb-1 fw-semibold">Are you sure?</p>
                            <p className="text-secondary small mb-0">
                                This will permanently delete "{deleting.title}". This action
                                cannot be undone.
                            </p>
                        </div>
                        <div className="d-flex justify-content-center gap-2 pt-3 border-top mt-3">
                            <button
                                type="button"
                                className="btn btn-light"
                                onClick={() => setDeleting(null)}
                                disabled={deleteProcessing}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={confirmDelete}
                                disabled={deleteProcessing}
                            >
                                {deleteProcessing ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                        Deleting...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-trash me-2"></i>
                                        Delete
                                    </>
                                )}
                            </button>
                        </div>
                    </Modal>
                )}
            </div>
        </AppLayout>
    );
}

/* ---------- pieces ---------- */

function Modal({ children, onClose, title, size = "" }) {
    const sizeClass =
        size === "lg" ? "modal-lg" : size === "sm" ? "modal-sm" : "";

    return (
        <div
            className="modal show d-block"
            tabIndex="-1"
            style={{ background: "rgba(6,15,17,0.55)" }}
            onClick={onClose}
        >
            <div
                className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${sizeClass}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="modal-content border-0 shadow"
                    style={{ borderRadius: 16 }}
                >
                    <div className="modal-header border-0 pb-0">
                        <h5 className="modal-title fw-bold">{title}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body pt-2">{children}</div>
                </div>
            </div>
        </div>
    );
}

function StarDisplay({ rating }) {
    return (
        <span>
            {[1, 2, 3, 4, 5].map((n) => (
                <i
                    key={n}
                    className="fas fa-star me-1"
                    style={{ color: n <= rating ? "#f5a623" : "rgba(255,255,255,0.2)" }}
                ></i>
            ))}
        </span>
    );
}

function TestimonialCard({ testimonial, onView, onEdit, onDelete }) {
    return (
        <div className="h-tile card border-0 rounded-4 h-100">
            <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-1">
                    <span className="h-quote-mark">&ldquo;</span>
                    <div className="d-flex align-items-center gap-1">
                        <button
                            type="button"
                            className="h-action-btn"
                            onClick={onView}
                            title="View"
                        >
                            <i className="fas fa-eye"></i>
                        </button>
                        <button
                            type="button"
                            className="h-action-btn"
                            onClick={onEdit}
                            title="Edit"
                        >
                            <i className="fas fa-pen"></i>
                        </button>
                        <button
                            type="button"
                            className="h-action-btn h-danger"
                            onClick={onDelete}
                            title="Delete"
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>

                <h6 className="fw-bold mb-2">{testimonial.title}</h6>
                <p
                    className="text-secondary small flex-grow-1"
                    style={{
                        lineHeight: 1.7,
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {testimonial.content}
                </p>

                <div className="d-flex align-items-center justify-content-between mt-2 pt-3 border-top">
                    <span>
                        {[1, 2, 3, 4, 5].map((n) => (
                            <i
                                key={n}
                                className="fas fa-star me-1"
                                style={{
                                    color:
                                        n <= testimonial.rating
                                            ? "#f5a623"
                                            : "rgba(6,15,17,0.15)",
                                }}
                            ></i>
                        ))}
                    </span>
                    <span className="small text-secondary">
                        {testimonial.created_at_human ?? testimonial.created_at}
                    </span>
                </div>
            </div>
        </div>
    );
}

function Pagination({ links }) {
    return (
        <div className="h-pagination d-flex flex-wrap gap-1 justify-content-center mt-4">
            {links.map((link, i) =>
                link.url ? (
                    <Link
                        key={i}
                        href={link.url}
                        preserveScroll
                        className={link.active ? "active" : ""}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <span
                        key={i}
                        className="disabled"
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ),
            )}
        </div>
    );
}