import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Head, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* -------------------------------------------------------------------------- */
/* ICONS                                                                      */
/* -------------------------------------------------------------------------- */

function Icon({ name, size = 17, strokeWidth = 1.8 }) {
    const common = {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true,
    };

    const icons = {
        plus: (
            <>
                <path d="M12 5v14" />
                <path d="M5 12h14" />
            </>
        ),

        edit: (
            <>
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </>
        ),

        trash: (
            <>
                <path d="M3 6h18" />
                <path d="M8 6V4h8v2" />
                <path d="M19 6l-1 14H6L5 6" />
                <path d="M10 11v5" />
                <path d="M14 11v5" />
            </>
        ),

        close: (
            <>
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
            </>
        ),

        quote: (
            <>
                <path d="M9 10H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z" />
                <path d="M5 10c0-4 1.5-6 4-7" />
                <path d="M19 10h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z" />
                <path d="M15 10c0-4 1.5-6 4-7" />
            </>
        ),

        user: (
            <>
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20a7 7 0 0 1 14 0" />
            </>
        ),

        star: (
            <path d="m12 3 2.78 5.63 6.22.9-4.5 4.38 1.06 6.2L12 17.18l-5.56 2.93 1.06-6.2L3 9.53l6.22-.9L12 3Z" />
        ),

        calendar: (
            <>
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 10h18" />
            </>
        ),

        search: (
            <>
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 5 5" />
            </>
        ),

        users: (
            <>
                <circle cx="9" cy="8" r="3" />
                <path d="M3 20a6 6 0 0 1 12 0" />
                <path d="M16 5.5a3 3 0 0 1 0 5.8" />
                <path d="M18 14a5 5 0 0 1 3 4.5" />
            </>
        ),

        chevronDown: (
            <path d="m6 9 6 6 6-6" />
        ),

        check: (
            <path d="m5 12 4 4L19 6" />
        ),
    };

    return <svg {...common}>{icons[name]}</svg>;
}

/* -------------------------------------------------------------------------- */
/* HELPERS                                                                    */
/* -------------------------------------------------------------------------- */

function formatDate(dateStr) {
    if (!dateStr) return '—';

    const date = new Date(dateStr);

    if (Number.isNaN(date.getTime())) {
        return '—';
    }

    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

/* -------------------------------------------------------------------------- */
/* STARS                                                                      */
/* -------------------------------------------------------------------------- */

function Stars({ rating = 0, large = false }) {
    const value = Number(rating) || 0;

    return (
        <div
            className={`stars ${large ? 'stars-large' : ''}`}
            aria-label={`${value} out of 5 stars`}
        >
            {[1, 2, 3, 4, 5].map((n) => (
                <svg
                    key={n}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={n <= value ? 'star-filled' : 'star-empty'}
                >
                    <path d="M10 1.8 12.5 7l5.7.8-4.1 4 .97 5.65L10 14.8l-5.07 2.65.97-5.65-4.1-4L7.5 7 10 1.8Z" />
                </svg>
            ))}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* FIELD                                                                      */
/* -------------------------------------------------------------------------- */

function Field({ label, error, required = false, children }) {
    return (
        <div className="form-field">
            <label className="form-label">
                {label}
                {required && <span className="required-mark">*</span>}
            </label>

            {children}

            {error && (
                <div className="form-error">
                    {error}
                </div>
            )}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* RATING PICKER                                                              */
/* -------------------------------------------------------------------------- */

function RatingPicker({ value, onChange }) {
    return (
        <div className="rating-picker">
            {[1, 2, 3, 4, 5].map((n) => {
                const active = String(n) === String(value);

                return (
                    <button
                        key={n}
                        type="button"
                        className={`rating-option ${active ? 'active' : ''}`}
                        onClick={() => onChange(String(n))}
                        aria-label={`Give ${n} star${n > 1 ? 's' : ''}`}
                    >
                        <Icon name="star" size={15} />
                        <span>{n}</span>
                    </button>
                );
            })}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* MODAL                                                                      */
/* -------------------------------------------------------------------------- */

function TestimonialModal({
    mode,
    form,
    talents,
    onClose,
    onSubmit,
}) {
    const isEdit = mode === 'edit';

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && !form.processing) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, form.processing]);

    if (typeof document === 'undefined') {
        return null;
    }

    return createPortal(
        <div
            className="testimonial-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-modal-title"
            onMouseDown={(event) => {
                if (
                    event.target === event.currentTarget &&
                    !form.processing
                ) {
                    onClose();
                }
            }}
        >
            <div
                className="testimonial-modal"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <form onSubmit={onSubmit}>
                    {/* Modal header */}
                    <div className="testimonial-modal-header">
                        <div className="modal-heading">
                            <div className="modal-icon">
                                <Icon name="quote" size={19} />
                            </div>

                            <div>
                                <h2 id="testimonial-modal-title">
                                    {isEdit
                                        ? 'Edit testimonial'
                                        : 'Add testimonial'}
                                </h2>

                                <p>
                                    {isEdit
                                        ? 'Update the testimonial details below.'
                                        : 'Add feedback from a talent or client.'}
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="modal-close"
                            onClick={onClose}
                            disabled={form.processing}
                            aria-label="Close modal"
                        >
                            <Icon name="close" size={17} />
                        </button>
                    </div>

                    {/* Modal body */}
                    <div className="testimonial-modal-body">
                        <Field
                            label="Testimonial title"
                            required
                            error={form.errors.title}
                        >
                            <input
                                type="text"
                                className="form-input"
                                placeholder="e.g. Exceptional creative work"
                                value={form.data.title}
                                onChange={(event) =>
                                    form.setData(
                                        'title',
                                        event.target.value
                                    )
                                }
                                autoFocus
                                required
                            />
                        </Field>

                        <Field
                            label="Talent"
                            required
                            error={form.errors.talent_id}
                        >
                            <div className="select-wrapper">
                                <select
                                    className="form-input"
                                    value={form.data.talent_id}
                                    onChange={(event) =>
                                        form.setData(
                                            'talent_id',
                                            event.target.value
                                        )
                                    }
                                    required
                                >
                                    <option value="">
                                        Select a talent
                                    </option>

                                    {talents.map((talent) => (
                                        <option
                                            key={talent.id}
                                            value={talent.id}
                                        >
                                            {talent.name}
                                        </option>
                                    ))}
                                </select>

                                <span className="select-icon">
                                    <Icon
                                        name="chevronDown"
                                        size={15}
                                    />
                                </span>
                            </div>
                        </Field>

                        <Field
                            label="Testimonial"
                            required
                            error={form.errors.content}
                        >
                            <textarea
                                className="form-input form-textarea"
                                rows={5}
                                placeholder="Write the testimonial content..."
                                value={form.data.content}
                                onChange={(event) =>
                                    form.setData(
                                        'content',
                                        event.target.value
                                    )
                                }
                                required
                            />

                            <div className="character-hint">
                                {form.data.content?.length || 0} characters
                            </div>
                        </Field>

                        <Field
                            label="Rating"
                            required
                            error={form.errors.rating}
                        >
                            <RatingPicker
                                value={form.data.rating}
                                onChange={(value) =>
                                    form.setData('rating', value)
                                }
                            />
                        </Field>
                    </div>

                    {/* Modal footer */}
                    <div className="testimonial-modal-footer">
                        <button
                            type="button"
                            className="platform-btn platform-btn-secondary"
                            onClick={onClose}
                            disabled={form.processing}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="platform-btn platform-btn-primary"
                            disabled={form.processing}
                        >
                            {form.processing ? (
                                <>
                                    <span className="button-spinner" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Icon
                                        name={isEdit ? 'check' : 'plus'}
                                        size={15}
                                    />

                                    {isEdit
                                        ? 'Save changes'
                                        : 'Add testimonial'}
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}

/* -------------------------------------------------------------------------- */
/* MAIN PAGE                                                                  */
/* -------------------------------------------------------------------------- */

export default function Testimonials({
    testimonials,
    talents = [],
}) {
    const [addOpen, setAddOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [search, setSearch] = useState('');

    const addForm = useForm({
        title: '',
        talent_id: '',
        content: '',
        rating: '5',
    });

    const editForm = useForm({
        title: '',
        talent_id: '',
        content: '',
        rating: '5',
    });

    const testimonialList = Array.isArray(testimonials)
        ? testimonials
        : testimonials?.data ?? [];

    const filteredTestimonials = testimonialList.filter((testimonial) => {
        const searchValue = search.trim().toLowerCase();

        if (!searchValue) {
            return true;
        }

        return [
            testimonial.title,
            testimonial.content,
            testimonial.talent?.name,
        ]
            .filter(Boolean)
            .some((value) =>
                String(value)
                    .toLowerCase()
                    .includes(searchValue)
            );
    });

    const averageRating =
        testimonialList.length > 0
            ? testimonialList.reduce(
                  (total, item) =>
                      total + Number(item.rating || 0),
                  0
              ) / testimonialList.length
            : 0;

    const openAdd = () => {
        addForm.clearErrors();
        addForm.reset();
        addForm.setData('rating', '5');
        setAddOpen(true);
    };

    const closeAdd = () => {
        if (addForm.processing) return;

        setAddOpen(false);
        addForm.clearErrors();
        addForm.reset();
        addForm.setData('rating', '5');
    };

    const openEdit = (testimonial) => {
        editForm.clearErrors();

        editForm.setData({
            title: testimonial.title ?? '',
            talent_id: testimonial.talent_id ?? '',
            content: testimonial.content ?? '',
            rating: testimonial.rating
                ? String(testimonial.rating)
                : '5',
        });

        setEditingId(testimonial.id);
    };

    const closeEdit = () => {
        if (editForm.processing) return;

        setEditingId(null);
        editForm.clearErrors();
        editForm.reset();
        editForm.setData('rating', '5');
    };

    const submitAdd = (event) => {
        event.preventDefault();

        addForm.post(
            route('admin.testimonials.store'),
            {
                preserveScroll: true,

                onSuccess: () => {
                    closeAdd();
                },
            }
        );
    };

    const submitEdit = (event) => {
        event.preventDefault();

        editForm.put(
            route(
                'admin.testimonials.update',
                editingId
            ),
            {
                preserveScroll: true,

                onSuccess: () => {
                    closeEdit();
                },
            }
        );
    };

    const destroy = (id) => {
        if (!window.confirm('Delete this testimonial?')) {
            return;
        }

        router.delete(
            route('admin.testimonials.destroy', id),
            {
                preserveScroll: true,
            }
        );
    };

    return (
        <AppLayout>
            <Head title="Testimonials" />

            <div className="talent-testimonials-page">

                {/* ---------------------------------------------------------- */}
                {/* PAGE HEADER                                                 */}
                {/* ---------------------------------------------------------- */}

                <header className="platform-header">
                    <div className="header-copy">
                        <div className="eyebrow">
                            <span className="eyebrow-line" />
                            Talent platform
                        </div>

                        <h1>Testimonials</h1>

                        <p>
                            Manage the experiences and feedback
                            that showcase your talent community.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="platform-btn platform-btn-primary add-btn"
                        onClick={openAdd}
                    >
                        <Icon name="plus" size={16} />
                        Add testimonial
                    </button>
                </header>

                {/* ---------------------------------------------------------- */}
                {/* OVERVIEW                                                     */}
                {/* ---------------------------------------------------------- */}

                <section className="overview-cards">

                    <div className="overview-card">
                        <div className="overview-icon">
                            <Icon name="quote" size={18} />
                        </div>

                        <div>
                            <span className="overview-label">
                                Total testimonials
                            </span>

                            <strong>
                                {testimonialList.length}
                            </strong>
                        </div>
                    </div>

                    <div className="overview-card">
                        <div className="overview-icon">
                            <Icon name="star" size={18} />
                        </div>

                        <div>
                            <span className="overview-label">
                                Average rating
                            </span>

                            <strong>
                                {averageRating.toFixed(1)}
                            </strong>
                        </div>

                        <Stars rating={Math.round(averageRating)} />
                    </div>

                    <div className="overview-card">
                        <div className="overview-icon">
                            <Icon name="users" size={18} />
                        </div>

                        <div>
                            <span className="overview-label">
                                Talents
                            </span>

                            <strong>
                                {talents.length}
                            </strong>
                        </div>
                    </div>

                </section>

                {/* ---------------------------------------------------------- */}
                {/* CONTENT                                                      */}
                {/* ---------------------------------------------------------- */}

                <section className="testimonial-section">

                    <div className="section-toolbar">
                        <div>
                            <h2>All testimonials</h2>
                            <p>
                                Feedback currently available
                                across your platform.
                            </p>
                        </div>

                        <div className="search-box">
                            <Icon name="search" size={16} />

                            <input
                                type="search"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search testimonials..."
                            />
                        </div>
                    </div>

                    {filteredTestimonials.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">
                                <Icon name="quote" size={23} />
                            </div>

                            <h3>
                                {search
                                    ? 'No testimonials found'
                                    : 'No testimonials yet'}
                            </h3>

                            <p>
                                {search
                                    ? 'Try a different search term.'
                                    : 'Start building your social proof by adding the first testimonial.'}
                            </p>

                            {!search && (
                                <button
                                    type="button"
                                    className="platform-btn platform-btn-primary"
                                    onClick={openAdd}
                                >
                                    <Icon name="plus" size={15} />
                                    Add testimonial
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="testimonial-list">

                            {filteredTestimonials.map(
                                (testimonial) => (
                                    <article
                                        className="testimonial-item"
                                        key={testimonial.id}
                                    >

                                        <div className="testimonial-main">

                                            <div className="quote-mark">
                                                <Icon
                                                    name="quote"
                                                    size={18}
                                                />
                                            </div>

                                            <div className="testimonial-content">

                                                <div className="testimonial-heading">
                                                    <h3>
                                                        {testimonial.title ||
                                                            'Untitled testimonial'}
                                                    </h3>

                                                    <Stars
                                                        rating={
                                                            testimonial.rating
                                                        }
                                                    />
                                                </div>

                                                <p>
                                                    {testimonial.content ||
                                                        'No testimonial content provided.'}
                                                </p>

                                                <div className="testimonial-meta">

                                                    <div className="talent-person">

                                                        <span className="talent-avatar">
                                                            {(
                                                                testimonial
                                                                    .talent
                                                                    ?.name ||
                                                                'T'
                                                            )
                                                                .charAt(0)
                                                                .toUpperCase()}
                                                        </span>

                                                        <div>
                                                            <strong>
                                                                {testimonial
                                                                    .talent
                                                                    ?.name ||
                                                                    'Unknown talent'}
                                                            </strong>

                                                            <span>
                                                                Talent
                                                            </span>
                                                        </div>

                                                    </div>

                                                    <span className="meta-separator" />

                                                    <span className="date-meta">
                                                        <Icon
                                                            name="calendar"
                                                            size={13}
                                                        />

                                                        {formatDate(
                                                            testimonial.created_at
                                                        )}
                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="testimonial-actions">

                                            <button
                                                type="button"
                                                className="icon-action"
                                                onClick={() =>
                                                    openEdit(
                                                        testimonial
                                                    )
                                                }
                                                title="Edit testimonial"
                                                aria-label="Edit testimonial"
                                            >
                                                <Icon
                                                    name="edit"
                                                    size={15}
                                                />
                                            </button>

                                            <button
                                                type="button"
                                                className="icon-action icon-action-danger"
                                                onClick={() =>
                                                    destroy(
                                                        testimonial.id
                                                    )
                                                }
                                                title="Delete testimonial"
                                                aria-label="Delete testimonial"
                                            >
                                                <Icon
                                                    name="trash"
                                                    size={15}
                                                />
                                            </button>

                                        </div>

                                    </article>
                                )
                            )}

                        </div>
                    )}

                </section>

            </div>

            {/* -------------------------------------------------------------- */}
            {/* ADD MODAL                                                       */}
            {/* -------------------------------------------------------------- */}

            {addOpen && (
                <TestimonialModal
                    mode="add"
                    form={addForm}
                    talents={talents}
                    onClose={closeAdd}
                    onSubmit={submitAdd}
                />
            )}

            {/* -------------------------------------------------------------- */}
            {/* EDIT MODAL                                                      */}
            {/* -------------------------------------------------------------- */}

            {editingId !== null && (
                <TestimonialModal
                    mode="edit"
                    form={editForm}
                    talents={talents}
                    onClose={closeEdit}
                    onSubmit={submitEdit}
                />
            )}

            {/* -------------------------------------------------------------- */}
            {/* STYLES                                                           */}
            {/* -------------------------------------------------------------- */}

            <style>{`

                /* ==========================================================
                   DESIGN TOKENS
                ========================================================== */

                .talent-testimonials-page {
                    --tp-text: #1d1d1f;
                    --tp-secondary: #6e6e73;
                    --tp-tertiary: #86868b;
                    --tp-border: #e5e5e7;
                    --tp-border-light: #eeeeef;
                    --tp-background: #f5f5f7;
                    --tp-card: #ffffff;
                    --tp-black: #1d1d1f;
                    --tp-blue: #0071e3;
                    --tp-blue-hover: #0077ed;
                    --tp-green: #34c759;
                    --tp-orange: #ff9f0a;
                    --tp-red: #ff3b30;

                    min-height: 100vh;
                    padding: 38px clamp(20px, 4vw, 56px) 70px;

                    background: var(--tp-background);
                    color: var(--tp-text);

                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                }

                .talent-testimonials-page *,
                .talent-testimonials-page *::before,
                .talent-testimonials-page *::after {
                    box-sizing: border-box;
                }

                /* ==========================================================
                   HEADER
                ========================================================== */

                .platform-header {
                    max-width: 1180px;
                    margin: 0 auto 28px;

                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 24px;
                }

                .header-copy {
                    min-width: 0;
                }

                .eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    margin-bottom: 9px;

                    color: var(--tp-tertiary);
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                }

                .eyebrow-line {
                    width: 20px;
                    height: 1px;
                    background: var(--tp-secondary);
                }

                .platform-header h1 {
                    margin: 0;

                    font-size: clamp(27px, 3vw, 36px);
                    line-height: 1.1;
                    letter-spacing: -.035em;
                    font-weight: 700;
                }

                .platform-header p {
                    max-width: 540px;
                    margin: 9px 0 0;

                    color: var(--tp-secondary);
                    font-size: 13px;
                    line-height: 1.55;
                    letter-spacing: -.005em;
                }

                /* ==========================================================
                   BUTTONS
                ========================================================== */

                .platform-btn {
                    height: 38px;
                    padding: 0 15px;

                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;

                    border: 0;
                    border-radius: 8px;

                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 600;

                    cursor: pointer;
                    white-space: nowrap;

                    transition:
                        background .16s ease,
                        transform .12s ease,
                        opacity .16s ease;
                }

                .platform-btn:active {
                    transform: scale(.98);
                }

                .platform-btn:disabled {
                    opacity: .55;
                    cursor: not-allowed;
                }

                .platform-btn-primary {
                    background: var(--tp-black);
                    color: #fff;
                }

                .platform-btn-primary:hover {
                    background: #000;
                }

                .platform-btn-secondary {
                    background: #f5f5f7;
                    color: var(--tp-text);
                    border: 1px solid var(--tp-border);
                }

                .platform-btn-secondary:hover {
                    background: #ebebed;
                }

                .add-btn {
                    min-width: 150px;
                }

                /* ==========================================================
                   OVERVIEW
                ========================================================== */

                .overview-cards {
                    max-width: 1180px;
                    margin: 0 auto 22px;

                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                }

                .overview-card {
                    min-height: 88px;
                    padding: 17px 18px;

                    display: flex;
                    align-items: center;
                    gap: 12px;

                    background: var(--tp-card);
                    border: 1px solid var(--tp-border);
                    border-radius: 11px;
                }

                .overview-icon {
                    width: 36px;
                    height: 36px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 9px;
                    background: #f5f5f7;
                    color: var(--tp-text);
                }

                .overview-card > div:nth-child(2) {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .overview-label {
                    color: var(--tp-tertiary);
                    font-size: 10.5px;
                    font-weight: 500;
                }

                .overview-card strong {
                    font-size: 20px;
                    line-height: 1;
                    letter-spacing: -.02em;
                }

                .overview-card .stars {
                    margin-left: auto;
                }

                /* ==========================================================
                   SECTION
                ========================================================== */

                .testimonial-section {
                    max-width: 1180px;
                    margin: 0 auto;

                    background: var(--tp-card);
                    border: 1px solid var(--tp-border);
                    border-radius: 12px;
                    overflow: hidden;
                }

                .section-toolbar {
                    min-height: 76px;
                    padding: 15px 18px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;

                    border-bottom: 1px solid var(--tp-border-light);
                }

                .section-toolbar h2 {
                    margin: 0;

                    font-size: 14px;
                    font-weight: 650;
                    letter-spacing: -.01em;
                }

                .section-toolbar p {
                    margin: 4px 0 0;

                    color: var(--tp-tertiary);
                    font-size: 11px;
                }

                .search-box {
                    width: 245px;
                    height: 34px;

                    display: flex;
                    align-items: center;
                    gap: 8px;

                    padding: 0 10px;

                    background: #f5f5f7;
                    border: 1px solid transparent;
                    border-radius: 7px;

                    color: var(--tp-tertiary);

                    transition:
                        border-color .15s ease,
                        background .15s ease;
                }

                .search-box:focus-within {
                    background: #fff;
                    border-color: var(--tp-border);
                }

                .search-box input {
                    width: 100%;
                    min-width: 0;

                    border: 0;
                    outline: 0;
                    background: transparent;

                    color: var(--tp-text);
                    font-family: inherit;
                    font-size: 11.5px;
                }

                .search-box input::placeholder {
                    color: #a1a1a6;
                }

                /* ==========================================================
                   TESTIMONIAL LIST
                ========================================================== */

                .testimonial-list {
                    display: flex;
                    flex-direction: column;
                }

                .testimonial-item {
                    padding: 21px 20px;

                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;

                    border-bottom: 1px solid var(--tp-border-light);

                    transition: background .15s ease;
                }

                .testimonial-item:last-child {
                    border-bottom: 0;
                }

                .testimonial-item:hover {
                    background: #fafafa;
                }

                .testimonial-main {
                    min-width: 0;
                    flex: 1;

                    display: flex;
                    gap: 14px;
                }

                .quote-mark {
                    width: 34px;
                    height: 34px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 8px;

                    background: #f5f5f7;
                    color: #6e6e73;
                }

                .testimonial-content {
                    min-width: 0;
                    flex: 1;
                }

                .testimonial-heading {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .testimonial-heading h3 {
                    margin: 0;

                    font-size: 14px;
                    line-height: 1.3;
                    font-weight: 650;
                    letter-spacing: -.012em;
                }

                .testimonial-content > p {
                    max-width: 800px;
                    margin: 8px 0 14px;

                    color: var(--tp-secondary);
                    font-size: 12.5px;
                    line-height: 1.65;
                }

                .testimonial-meta {
                    display: flex;
                    align-items: center;
                    gap: 11px;
                }

                .talent-person {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .talent-avatar {
                    width: 25px;
                    height: 25px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 50%;

                    background: #e8e8ed;
                    color: #3a3a3c;

                    font-size: 10px;
                    font-weight: 700;
                }

                .talent-person div {
                    display: flex;
                    flex-direction: column;
                    gap: 1px;
                }

                .talent-person strong {
                    font-size: 10.5px;
                    font-weight: 600;
                }

                .talent-person span {
                    color: var(--tp-tertiary);
                    font-size: 9px;
                }

                .meta-separator {
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    background: #c7c7cc;
                }

                .date-meta {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;

                    color: var(--tp-tertiary);
                    font-size: 9.5px;
                }

                /* ==========================================================
                   STARS
                ========================================================== */

                .stars {
                    display: inline-flex;
                    align-items: center;
                    gap: 2px;
                    flex-shrink: 0;
                }

                .stars svg {
                    width: 12px;
                    height: 12px;
                }

                .stars-large svg {
                    width: 14px;
                    height: 14px;
                }

                .star-filled {
                    fill: #ffb340;
                    color: #ffb340;
                }

                .star-empty {
                    fill: #e5e5e7;
                    color: #e5e5e7;
                }

                /* ==========================================================
                   ACTIONS
                ========================================================== */

                .testimonial-actions {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    flex-shrink: 0;
                }

                .icon-action {
                    width: 31px;
                    height: 31px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid transparent;
                    border-radius: 7px;

                    background: transparent;
                    color: var(--tp-secondary);

                    cursor: pointer;

                    transition:
                        background .15s ease,
                        color .15s ease,
                        border-color .15s ease;
                }

                .icon-action:hover {
                    background: #f5f5f7;
                    border-color: var(--tp-border);
                    color: var(--tp-text);
                }

                .icon-action-danger:hover {
                    background: #fff2f1;
                    border-color: #ffd9d6;
                    color: var(--tp-red);
                }

                /* ==========================================================
                   EMPTY STATE
                ========================================================== */

                .empty-state {
                    min-height: 330px;
                    padding: 50px 20px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    text-align: center;
                }

                .empty-icon {
                    width: 48px;
                    height: 48px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    margin-bottom: 14px;

                    border-radius: 12px;

                    background: #f5f5f7;
                    color: var(--tp-secondary);
                }

                .empty-state h3 {
                    margin: 0 0 6px;

                    font-size: 15px;
                    font-weight: 650;
                }

                .empty-state p {
                    max-width: 380px;
                    margin: 0 0 17px;

                    color: var(--tp-tertiary);
                    font-size: 11.5px;
                    line-height: 1.6;
                }

                /* ==========================================================
                   MODAL
                ========================================================== */

                .testimonial-modal-backdrop {
                    position: fixed;
                    inset: 0;

                    z-index: 99999;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    padding: 20px;

                    background: rgba(0, 0, 0, .42);

                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);

                    animation: modalBackdropIn .16s ease-out;
                }

                .testimonial-modal {
                    width: min(510px, 100%);
                    max-height: calc(100vh - 40px);

                    overflow: hidden;

                    background: #fff;

                    border: 1px solid rgba(0, 0, 0, .08);
                    border-radius: 14px;

                    box-shadow:
                        0 30px 80px rgba(0, 0, 0, .18),
                        0 8px 24px rgba(0, 0, 0, .08);

                    animation: modalIn .18s ease-out;
                }

                .testimonial-modal form {
                    max-height: calc(100vh - 40px);

                    display: flex;
                    flex-direction: column;
                }

                .testimonial-modal-header {
                    min-height: 70px;

                    padding: 15px 17px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;

                    border-bottom: 1px solid var(--tp-border);
                }

                .modal-heading {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    min-width: 0;
                }

                .modal-icon {
                    width: 35px;
                    height: 35px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 9px;

                    background: #f5f5f7;
                    color: var(--tp-text);
                }

                .modal-heading h2 {
                    margin: 0;

                    font-size: 14px;
                    font-weight: 650;
                    letter-spacing: -.01em;
                }

                .modal-heading p {
                    margin: 3px 0 0;

                    color: var(--tp-tertiary);
                    font-size: 10px;
                    line-height: 1.4;
                }

                .modal-close {
                    width: 30px;
                    height: 30px;

                    flex: 0 0 auto;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 0;
                    border-radius: 7px;

                    background: transparent;
                    color: var(--tp-secondary);

                    cursor: pointer;
                }

                .modal-close:hover {
                    background: #f5f5f7;
                    color: var(--tp-text);
                }

                .modal-close:disabled {
                    opacity: .5;
                    cursor: not-allowed;
                }

                .testimonial-modal-body {
                    padding: 20px;

                    overflow-y: auto;
                }

                .testimonial-modal-footer {
                    padding: 13px 17px;

                    display: flex;
                    justify-content: flex-end;
                    gap: 8px;

                    border-top: 1px solid var(--tp-border);

                    background: #fff;
                }

                /* ==========================================================
                   FORM
                ========================================================== */

                .form-field {
                    margin-bottom: 17px;
                }

                .form-field:last-child {
                    margin-bottom: 0;
                }

                .form-label {
                    display: block;

                    margin-bottom: 6px;

                    color: var(--tp-text);
                    font-size: 11px;
                    font-weight: 600;
                }

                .required-mark {
                    margin-left: 3px;
                    color: var(--tp-red);
                }

                .form-input {
                    width: 100%;
                    min-height: 37px;

                    padding: 8px 10px;

                    border: 1px solid var(--tp-border);
                    border-radius: 7px;

                    outline: none;

                    background: #fff;
                    color: var(--tp-text);

                    font-family: inherit;
                    font-size: 12px;

                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;
                }

                .form-input::placeholder {
                    color: #a1a1a6;
                }

                .form-input:hover {
                    border-color: #d1d1d6;
                }

                .form-input:focus {
                    border-color: #8f8f94;
                    box-shadow: 0 0 0 3px rgba(0, 0, 0, .055);
                }

                .form-textarea {
                    min-height: 112px;
                    resize: vertical;
                    line-height: 1.55;
                }

                .select-wrapper {
                    position: relative;
                }

                .select-wrapper select {
                    appearance: none;
                    -webkit-appearance: none;

                    padding-right: 35px;
                }

                .select-icon {
                    position: absolute;
                    top: 50%;
                    right: 10px;

                    transform: translateY(-50%);

                    pointer-events: none;
                    color: var(--tp-secondary);
                }

                .character-hint {
                    margin-top: 4px;

                    color: #a1a1a6;
                    font-size: 9px;
                    text-align: right;
                }

                .form-error {
                    margin-top: 5px;

                    color: var(--tp-red);
                    font-size: 10px;
                }

                /* ==========================================================
                   RATING PICKER
                ========================================================== */

                .rating-picker {
                    display: flex;
                    gap: 6px;
                }

                .rating-option {
                    min-width: 44px;
                    height: 34px;

                    padding: 0 9px;

                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;

                    border: 1px solid var(--tp-border);
                    border-radius: 7px;

                    background: #fff;
                    color: var(--tp-secondary);

                    font-family: inherit;
                    font-size: 10px;
                    font-weight: 600;

                    cursor: pointer;

                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        color .15s ease;
                }

                .rating-option:hover {
                    border-color: #c7c7cc;
                    background: #f8f8f8;
                }

                .rating-option.active {
                    border-color: var(--tp-text);
                    background: var(--tp-text);
                    color: #fff;
                }

                .rating-option.active svg {
                    fill: #ffb340;
                    stroke: #ffb340;
                }

                /* ==========================================================
                   LOADING
                ========================================================== */

                .button-spinner {
                    width: 13px;
                    height: 13px;

                    border: 1.5px solid rgba(255,255,255,.4);
                    border-top-color: #fff;
                    border-radius: 50%;

                    animation: spinner .7s linear infinite;
                }

                /* ==========================================================
                   ANIMATIONS
                ========================================================== */

                @keyframes modalBackdropIn {
                    from {
                        opacity: 0;
                    }

                    to {
                        opacity: 1;
                    }
                }

                @keyframes modalIn {
                    from {
                        opacity: 0;
                        transform: translateY(8px) scale(.985);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes spinner {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* ==========================================================
                   RESPONSIVE
                ========================================================== */

                @media (max-width: 760px) {

                    .talent-testimonials-page {
                        padding: 25px 16px 50px;
                    }

                    .platform-header {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .add-btn {
                        width: 100%;
                    }

                    .overview-cards {
                        grid-template-columns: 1fr;
                    }

                    .section-toolbar {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .testimonial-item {
                        flex-direction: column;
                    }

                    .testimonial-actions {
                        width: 100%;
                        justify-content: flex-end;
                    }
                }

                @media (max-width: 500px) {

                    .testimonial-modal-backdrop {
                        padding: 10px;
                        align-items: flex-end;
                    }

                    .testimonial-modal {
                        max-height: calc(100vh - 20px);
                        border-radius: 14px 14px 10px 10px;
                    }

                    .testimonial-modal form {
                        max-height: calc(100vh - 20px);
                    }

                    .testimonial-meta {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 7px;
                    }

                    .meta-separator {
                        display: none;
                    }

                    .rating-picker {
                        width: 100%;
                    }

                    .rating-option {
                        flex: 1;
                    }
                }

            `}</style>
        </AppLayout>
    );
}