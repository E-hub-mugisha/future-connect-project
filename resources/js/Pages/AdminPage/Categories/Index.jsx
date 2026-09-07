import { useEffect, useMemo, useRef, useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AppLayout';

/*
|--------------------------------------------------------------------------
| Categories — Modern Admin Management
|--------------------------------------------------------------------------
| Backend contract preserved:
| - admin.categories.store
| - admin.categories.update
| - admin.categories.destroy
| - name
| - description
| - featured
|--------------------------------------------------------------------------
*/

export default function Index({
    categories = [],
    flash = {},
    errors: pageErrors = {},
}) {
    const categoryList = Array.isArray(categories)
        ? categories
        : categories?.data ?? [];

    const routes = {
        store: () => route('admin.categories.store'),
        update: (id) => route('admin.categories.update', id),
        destroy: (id) => route('admin.categories.destroy', id),
    };

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    const [addOpen, setAddOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [deletingCategory, setDeletingCategory] = useState(null);

    const stats = useMemo(() => {
        const total = categoryList.length;
        const featured = categoryList.filter(
            (category) => Boolean(category.featured)
        ).length;

        return {
            total,
            featured,
            standard: total - featured,
        };
    }, [categoryList]);

    const filteredCategories = useMemo(() => {
        const query = search.trim().toLowerCase();

        return categoryList.filter((category) => {
            const matchesSearch =
                !query ||
                String(category.name ?? '')
                    .toLowerCase()
                    .includes(query) ||
                String(category.description ?? '')
                    .toLowerCase()
                    .includes(query) ||
                String(category.slug ?? '')
                    .toLowerCase()
                    .includes(query);

            const matchesFilter =
                filter === 'all' ||
                (filter === 'featured' && Boolean(category.featured)) ||
                (filter === 'standard' && !Boolean(category.featured));

            return matchesSearch && matchesFilter;
        });
    }, [categoryList, search, filter]);

    const clearFilters = () => {
        setSearch('');
        setFilter('all');
    };

    const hasFilters = search.trim() !== '' || filter !== 'all';

    const destroyCategory = () => {
        if (!deletingCategory) return;

        router.delete(routes.destroy(deletingCategory.id), {
            preserveScroll: true,
            onSuccess: () => {
                setDeletingCategory(null);
            },
        });
    };

    return (
        <AdminLayout>
            <Head title="Categories" />

            <style>{styles}</style>

            <div className="categories-page">
                <ToastStack
                    flash={flash}
                    errors={pageErrors}
                />

                {/* ---------------------------------------------------------
                    HERO / PAGE INTRO
                --------------------------------------------------------- */}
                <section className="categories-hero">
                    <div className="hero-main">
                        <div className="hero-kicker">
                            <span className="kicker-line" />
                            Content structure
                        </div>

                        <div className="hero-title-row">
                            <div>
                                <h1>Categories</h1>

                                <p>
                                    Organize your platform content into clear,
                                    meaningful groups that are easy to discover
                                    and manage.
                                </p>
                            </div>

                            <div className="hero-count">
                                <strong>{stats.total}</strong>
                                <span>Total categories</span>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="primary-button hero-add"
                        onClick={() => setAddOpen(true)}
                    >
                        <PlusIcon />
                        <span>Create category</span>
                    </button>
                </section>

                {/* ---------------------------------------------------------
                    OVERVIEW
                --------------------------------------------------------- */}
                <section className="overview-panel">
                    <div className="overview-intro">
                        <div className="overview-icon">
                            <LayersIcon />
                        </div>

                        <div>
                            <span className="section-label">
                                Category overview
                            </span>

                            <h2>
                                Keep your content structure organized
                            </h2>
                        </div>
                    </div>

                    <div className="overview-stats">
                        <StatItem
                            label="All categories"
                            value={stats.total}
                            icon={<LayersIcon />}
                            active={filter === 'all'}
                            onClick={() => setFilter('all')}
                        />

                        <StatItem
                            label="Featured"
                            value={stats.featured}
                            icon={<StarIcon />}
                            active={filter === 'featured'}
                            onClick={() => setFilter('featured')}
                        />

                        <StatItem
                            label="Standard"
                            value={stats.standard}
                            icon={<FolderIcon />}
                            active={filter === 'standard'}
                            onClick={() => setFilter('standard')}
                        />
                    </div>
                </section>

                {/* ---------------------------------------------------------
                    TOOLBAR
                --------------------------------------------------------- */}
                <section className="content-toolbar">
                    <div className="toolbar-search">
                        <SearchIcon />

                        <input
                            type="search"
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                            placeholder="Search categories, descriptions or slugs..."
                            aria-label="Search categories"
                        />

                        {search && (
                            <button
                                type="button"
                                className="search-clear"
                                onClick={() => setSearch('')}
                                aria-label="Clear search"
                            >
                                <CloseIcon />
                            </button>
                        )}
                    </div>

                    <div className="toolbar-right">
                        <div className="filter-group">
                            <button
                                type="button"
                                className={
                                    filter === 'all'
                                        ? 'filter-button active'
                                        : 'filter-button'
                                }
                                onClick={() => setFilter('all')}
                            >
                                All
                            </button>

                            <button
                                type="button"
                                className={
                                    filter === 'featured'
                                        ? 'filter-button active'
                                        : 'filter-button'
                                }
                                onClick={() => setFilter('featured')}
                            >
                                <StarIcon />
                                Featured
                            </button>

                            <button
                                type="button"
                                className={
                                    filter === 'standard'
                                        ? 'filter-button active'
                                        : 'filter-button'
                                }
                                onClick={() => setFilter('standard')}
                            >
                                Standard
                            </button>
                        </div>

                        {hasFilters && (
                            <button
                                type="button"
                                className="reset-button"
                                onClick={clearFilters}
                            >
                                Reset
                            </button>
                        )}
                    </div>
                </section>

                {/* ---------------------------------------------------------
                    RESULTS HEADER
                --------------------------------------------------------- */}
                <div className="results-header">
                    <div>
                        <strong>
                            {filteredCategories.length}
                        </strong>{' '}
                        {filteredCategories.length === 1
                            ? 'category'
                            : 'categories'}{' '}
                        displayed
                    </div>

                    {hasFilters && (
                        <span>
                            Filtered from {categoryList.length} total
                        </span>
                    )}
                </div>

                {/* ---------------------------------------------------------
                    CATEGORY CONTENT
                --------------------------------------------------------- */}
                {categoryList.length === 0 ? (
                    <EmptyState
                        type="all"
                        onAdd={() => setAddOpen(true)}
                    />
                ) : filteredCategories.length === 0 ? (
                    <EmptyState
                        type="filtered"
                        onReset={clearFilters}
                    />
                ) : (
                    <div className="category-grid">
                        {filteredCategories.map((category, index) => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                                index={index}
                                onEdit={() =>
                                    setEditingCategory(category)
                                }
                                onDelete={() =>
                                    setDeletingCategory(category)
                                }
                            />
                        ))}

                        {/* Add another card */}
                        <button
                            type="button"
                            className="create-card"
                            onClick={() => setAddOpen(true)}
                        >
                            <span className="create-card-icon">
                                <PlusIcon size={20} />
                            </span>

                            <span className="create-card-title">
                                Add another category
                            </span>

                            <span className="create-card-subtitle">
                                Create a new content group
                            </span>
                        </button>
                    </div>
                )}

                {/* ---------------------------------------------------------
                    MODALS
                --------------------------------------------------------- */}
                {addOpen && (
                    <CategoryFormModal
                        mode="add"
                        routes={routes}
                        onClose={() => setAddOpen(false)}
                    />
                )}

                {editingCategory && (
                    <CategoryFormModal
                        mode="edit"
                        category={editingCategory}
                        routes={routes}
                        onClose={() => setEditingCategory(null)}
                    />
                )}

                {deletingCategory && (
                    <DeleteConfirmModal
                        category={deletingCategory}
                        onCancel={() =>
                            setDeletingCategory(null)
                        }
                        onConfirm={destroyCategory}
                    />
                )}
            </div>
        </AdminLayout>
    );
}

/* ==========================================================================
   STAT ITEM
========================================================================== */

function StatItem({
    label,
    value,
    icon,
    active,
    onClick,
}) {
    return (
        <button
            type="button"
            className={`stat-item ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <span className="stat-icon">
                {icon}
            </span>

            <span className="stat-copy">
                <strong>{value}</strong>
                <span>{label}</span>
            </span>

            <ArrowUpRightIcon />
        </button>
    );
}

/* ==========================================================================
   CATEGORY CARD
========================================================================== */

function CategoryCard({
    category,
    index,
    onEdit,
    onDelete,
}) {
    const featured = Boolean(category.featured);

    const initials = getInitials(category.name);

    const description =
        category.description ||
        'No description has been added for this category yet.';

    return (
        <article
            className={`category-card ${
                featured ? 'is-featured' : ''
            }`}
        >
            <div className="card-top-line">
                <span className="category-index">
                    {String(index + 1).padStart(2, '0')}
                </span>

                <ActionsDropdown
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </div>

            <div className="category-identity">
                <div
                    className={`category-mark ${
                        featured ? 'featured-mark' : ''
                    }`}
                >
                    {featured ? (
                        <StarIcon />
                    ) : (
                        <span>{initials}</span>
                    )}
                </div>

                <div className="category-title-area">
                    <div className="category-status-row">
                        <span
                            className={`status-badge ${
                                featured
                                    ? 'featured'
                                    : 'standard'
                            }`}
                        >
                            <span className="status-dot" />
                            {featured
                                ? 'Featured'
                                : 'Standard'}
                        </span>
                    </div>

                    <h3>{category.name}</h3>
                </div>
            </div>

            <p className="category-description">
                {description}
            </p>

            <div className="card-divider" />

            <div className="category-meta">
                <div className="slug-block">
                    <span>SLUG</span>

                    <code>
                        {category.slug ||
                            slugify(category.name)}
                    </code>
                </div>

                <button
                    type="button"
                    className="card-edit"
                    onClick={onEdit}
                >
                    Edit
                    <ArrowRightIcon />
                </button>
            </div>
        </article>
    );
}

/* ==========================================================================
   ACTIONS DROPDOWN
========================================================================== */

function ActionsDropdown({
    onEdit,
    onDelete,
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!open) return;

        const handleClick = (event) => {
            if (
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener(
            'mousedown',
            handleClick
        );

        document.addEventListener(
            'keydown',
            handleKeyDown
        );

        return () => {
            document.removeEventListener(
                'mousedown',
                handleClick
            );

            document.removeEventListener(
                'keydown',
                handleKeyDown
            );
        };
    }, [open]);

    return (
        <div
            className="actions-container"
            ref={ref}
        >
            <button
                type="button"
                className={`actions-button ${
                    open ? 'open' : ''
                }`}
                onClick={() => setOpen((value) => !value)}
                aria-label="Category actions"
                aria-expanded={open}
            >
                <DotsIcon />
            </button>

            {open && (
                <div className="actions-menu">
                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            onEdit();
                        }}
                    >
                        <PencilIcon />
                        Edit category
                    </button>

                    <div className="menu-separator" />

                    <button
                        type="button"
                        className="danger"
                        onClick={() => {
                            setOpen(false);
                            onDelete();
                        }}
                    >
                        <TrashIcon />
                        Delete category
                    </button>
                </div>
            )}
        </div>
    );
}

/* ==========================================================================
   EMPTY STATE
========================================================================== */

function EmptyState({
    type,
    onAdd,
    onReset,
}) {
    if (type === 'filtered') {
        return (
            <section className="empty-state">
                <div className="empty-visual">
                    <SearchIcon size={28} />
                </div>

                <span className="empty-eyebrow">
                    No matches
                </span>

                <h2>No categories found</h2>

                <p>
                    Try a different search term or change
                    the current filter.
                </p>

                <button
                    type="button"
                    className="secondary-button"
                    onClick={onReset}
                >
                    Clear filters
                </button>
            </section>
        );
    }

    return (
        <section className="empty-state">
            <div className="empty-visual">
                <FolderIcon size={30} />
            </div>

            <span className="empty-eyebrow">
                Get started
            </span>

            <h2>Your categories live here</h2>

            <p>
                Create your first category to start organizing
                content across the platform.
            </p>

            <button
                type="button"
                className="primary-button"
                onClick={onAdd}
            >
                <PlusIcon />
                Create first category
            </button>
        </section>
    );
}

/* ==========================================================================
   FORM MODAL
========================================================================== */

function CategoryFormModal({
    mode,
    category,
    routes,
    onClose,
}) {
    const isEdit = mode === 'edit';

    const {
        data,
        setData,
        post,
        processing,
        errors,
        transform,
    } = useForm({
        name: category?.name ?? '',
        description: category?.description ?? '',
        featured: isEdit
            ? Boolean(category?.featured)
            : false,
    });

    const slug = useMemo(
        () => slugify(data.name),
        [data.name]
    );

    const descriptionLength =
        data.description?.length ?? 0;

    const submit = (event) => {
        event.preventDefault();

        const url = isEdit
            ? routes.update(category.id)
            : routes.store();

        if (isEdit) {
            transform((formData) => ({
                ...formData,
                _method: 'put',
            }));
        }

        post(url, {
            preserveScroll: true,
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <ModalShell
            title={
                isEdit
                    ? 'Edit category'
                    : 'Create category'
            }
            subtitle={
                isEdit
                    ? 'Update the details and visibility of this category.'
                    : 'Add a new category to organize your platform content.'
            }
            icon={
                isEdit ? (
                    <PencilIcon size={18} />
                ) : (
                    <FolderPlusIcon size={18} />
                )
            }
            onClose={onClose}
            size="large"
        >
            <form
                onSubmit={submit}
                className="category-form"
            >
                <div className="form-content">
                    {/* NAME */}
                    <div className="form-field">
                        <div className="field-heading">
                            <label
                                htmlFor={`category-name-${mode}`}
                            >
                                Category name
                            </label>

                            <span>Required</span>
                        </div>

                        <div
                            className={`input-shell ${
                                errors.name
                                    ? 'has-error'
                                    : ''
                            }`}
                        >
                            <FolderIcon />

                            <input
                                id={`category-name-${mode}`}
                                type="text"
                                value={data.name}
                                onChange={(event) =>
                                    setData(
                                        'name',
                                        event.target.value
                                    )
                                }
                                placeholder="e.g. Web Development"
                                autoComplete="off"
                                autoFocus
                                required
                            />
                        </div>

                        {errors.name && (
                            <FieldError>
                                {errors.name}
                            </FieldError>
                        )}
                    </div>

                    {/* SLUG PREVIEW */}
                    <div className="slug-preview">
                        <div className="slug-preview-label">
                            <HashIcon />
                            <span>URL slug</span>
                        </div>

                        <code>
                            {slug || 'your-category-slug'}
                        </code>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="form-field">
                        <div className="field-heading">
                            <label
                                htmlFor={`category-description-${mode}`}
                            >
                                Description
                            </label>

                            <span>
                                {descriptionLength}/500
                            </span>
                        </div>

                        <div
                            className={`textarea-shell ${
                                errors.description
                                    ? 'has-error'
                                    : ''
                            }`}
                        >
                            <textarea
                                id={`category-description-${mode}`}
                                value={data.description}
                                onChange={(event) =>
                                    setData(
                                        'description',
                                        event.target.value.slice(
                                            0,
                                            500
                                        )
                                    )
                                }
                                placeholder="Briefly explain what belongs in this category..."
                                rows={5}
                                maxLength={500}
                                required
                            />
                        </div>

                        {errors.description && (
                            <FieldError>
                                {errors.description}
                            </FieldError>
                        )}
                    </div>

                    {/* FEATURED OPTION */}
                    <label
                        className={`featured-option ${
                            data.featured
                                ? 'selected'
                                : ''
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={Boolean(data.featured)}
                            onChange={(event) =>
                                setData(
                                    'featured',
                                    event.target.checked
                                )
                            }
                        />

                        <span className="featured-option-icon">
                            <StarIcon />
                        </span>

                        <span className="featured-option-copy">
                            <strong>
                                Feature this category
                            </strong>

                            <span>
                                Give this category extra
                                visibility across the platform.
                            </span>
                        </span>

                        <span
                            className={`toggle ${
                                data.featured
                                    ? 'on'
                                    : ''
                            }`}
                        >
                            <span />
                        </span>
                    </label>
                </div>

                <div className="modal-footer">
                    <button
                        type="button"
                        className="secondary-button"
                        onClick={onClose}
                        disabled={processing}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="primary-button"
                        disabled={processing}
                    >
                        {processing ? (
                            <>
                                <SpinnerIcon />
                                Saving...
                            </>
                        ) : (
                            <>
                                {isEdit ? (
                                    <CheckIcon />
                                ) : (
                                    <PlusIcon />
                                )}

                                {isEdit
                                    ? 'Save changes'
                                    : 'Create category'}
                            </>
                        )}
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}

/* ==========================================================================
   DELETE MODAL
========================================================================== */

function DeleteConfirmModal({
    category,
    onCancel,
    onConfirm,
}) {
    return (
        <ModalShell
            title="Delete category"
            subtitle="This action cannot be undone."
            icon={<TrashIcon size={18} />}
            onClose={onCancel}
            size="small"
            danger
        >
            <div className="delete-content">
                <div className="delete-visual">
                    <TrashIcon size={26} />
                </div>

                <h2>
                    Delete "{category.name}"?
                </h2>

                <p>
                    This category will be permanently removed.
                    Any content associated with it may be
                    affected.
                </p>

                <div className="delete-warning">
                    <AlertTriangleIcon />

                    <span>
                        Please make sure this category is no
                        longer needed before continuing.
                    </span>
                </div>
            </div>

            <div className="modal-footer delete-footer">
                <button
                    type="button"
                    className="secondary-button"
                    onClick={onCancel}
                >
                    Keep category
                </button>

                <button
                    type="button"
                    className="danger-button"
                    onClick={onConfirm}
                >
                    <TrashIcon />
                    Delete permanently
                </button>
            </div>
        </ModalShell>
    );
}

/* ==========================================================================
   MODAL SHELL
========================================================================== */

function ModalShell({
    title,
    subtitle,
    icon,
    onClose,
    children,
    size = 'medium',
    danger = false,
}) {
    useEffect(() => {
        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener(
            'keydown',
            handleKeyDown
        );

        return () => {
            document.body.style.overflow =
                previousOverflow;

            document.removeEventListener(
                'keydown',
                handleKeyDown
            );
        };
    }, [onClose]);

    return (
        <div
            className="modal-overlay"
            onMouseDown={(event) => {
                if (
                    event.target === event.currentTarget
                ) {
                    onClose();
                }
            }}
        >
            <div
                className={`modal-panel modal-${size} ${
                    danger ? 'modal-danger' : ''
                }`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="category-modal-title"
            >
                <div className="modal-heading">
                    <div
                        className={`modal-heading-icon ${
                            danger ? 'danger' : ''
                        }`}
                    >
                        {icon}
                    </div>

                    <div className="modal-heading-copy">
                        <h2 id="category-modal-title">
                            {title}
                        </h2>

                        {subtitle && (
                            <p>{subtitle}</p>
                        )}
                    </div>

                    <button
                        type="button"
                        className="modal-close"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {children}
            </div>
        </div>
    );
}

/* ==========================================================================
   TOASTS
========================================================================== */

function ToastStack({
    flash,
    errors,
}) {
    const hasValidation =
        errors &&
        Object.keys(errors).length > 0;

    const [items, setItems] = useState([]);

    useEffect(() => {
        const next = [];

        if (flash?.success) {
            next.push({
                id: 'success',
                tone: 'success',
                title: 'Changes saved',
                message: flash.success,
            });
        }

        if (flash?.error) {
            next.push({
                id: 'error',
                tone: 'error',
                title: 'Something went wrong',
                message: flash.error,
            });
        }

        if (hasValidation) {
            next.push({
                id: 'validation',
                tone: 'warning',
                title: 'Check the form',
                message: Object.values(errors).join(' '),
            });
        }

        setItems(next);
    }, [
        flash?.success,
        flash?.error,
        hasValidation,
    ]);

    useEffect(() => {
        if (!items.length) return;

        const timer = setTimeout(() => {
            setItems([]);
        }, 6000);

        return () => clearTimeout(timer);
    }, [items]);

    if (!items.length) return null;

    return (
        <div className="toast-stack">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`toast toast-${item.tone}`}
                >
                    <div className="toast-icon">
                        {item.tone === 'success' && (
                            <CheckCircleIcon />
                        )}

                        {item.tone === 'error' && (
                            <AlertCircleIcon />
                        )}

                        {item.tone === 'warning' && (
                            <AlertTriangleIcon />
                        )}
                    </div>

                    <div className="toast-copy">
                        <strong>{item.title}</strong>
                        <span>{item.message}</span>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            setItems((current) =>
                                current.filter(
                                    (toast) =>
                                        toast.id !==
                                        item.id
                                )
                            )
                        }
                        aria-label="Close notification"
                    >
                        <CloseIcon />
                    </button>
                </div>
            ))}
        </div>
    );
}

/* ==========================================================================
   FIELD ERROR
========================================================================== */

function FieldError({ children }) {
    return (
        <div className="field-error">
            <AlertCircleIcon />
            {children}
        </div>
    );
}

/* ==========================================================================
   HELPERS
========================================================================== */

function slugify(value = '') {
    return value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function getInitials(name = '') {
    const words = name
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (!words.length) return 'C';

    if (words.length === 1) {
        return words[0].slice(0, 2).toUpperCase();
    }

    return (
        words[0][0] +
        words[words.length - 1][0]
    ).toUpperCase();
}

/* ==========================================================================
   ICONS
========================================================================== */

function PlusIcon({ size = 16 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
        </svg>
    );
}

function SearchIcon({ size = 17 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
        </svg>
    );
}

function FolderIcon({ size = 17 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2.5h6.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z" />
            <path d="M3.5 10h17" />
        </svg>
    );
}

function FolderPlusIcon({ size = 17 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2.5h6.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z" />
            <path d="M3.5 10h17" />
            <path d="M12 13v5" />
            <path d="M9.5 15.5h5" />
        </svg>
    );
}

function LayersIcon({ size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 3 9 5-9 5-9-5 9-5Z" />
            <path d="m3 12 9 5 9-5" />
            <path d="m3 16 9 5 9-5" />
        </svg>
    );
}

function StarIcon({ size = 16 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
        </svg>
    );
}

function HashIcon({ size = 14 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        >
            <path d="M10 3 8 21" />
            <path d="m16 3-2 18" />
            <path d="M4 9h17" />
            <path d="M3 15h17" />
        </svg>
    );
}

function DotsIcon() {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <circle cx="5" cy="12" r="1.7" />
            <circle cx="12" cy="12" r="1.7" />
            <circle cx="19" cy="12" r="1.7" />
        </svg>
    );
}

function PencilIcon({ size = 15 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
        </svg>
    );
}

function TrashIcon({ size = 15 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 7h16" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="m6 7 1 13h10l1-13" />
            <path d="M9 7V4h6v3" />
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

function ArrowUpRightIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
        </svg>
    );
}

function CheckIcon({ size = 15 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 12 4 4L19 6" />
        </svg>
    );
}

function CheckCircleIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12 2.5 2.5L16 9" />
        </svg>
    );
}

function AlertCircleIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5" />
            <path d="M12 16h.01" />
        </svg>
    );
}

function AlertTriangleIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 3 10 18H2L12 3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

function SpinnerIcon() {
    return (
        <svg
            className="spinner"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        >
            <path d="M12 3a9 9 0 1 0 9 9" />
        </svg>
    );
}

/* ==========================================================================
   STYLES
========================================================================== */

const styles = `
:root {
    --cat-blue: #5D89C8;
    --cat-blue-dark: #426FAE;
    --cat-blue-deep: #315B91;
    --cat-blue-soft: #EEF4FB;
    --cat-blue-pale: #F7FAFE;

    --cat-text: #172033;
    --cat-heading: #111827;
    --cat-muted: #6B7280;
    --cat-light-text: #94A3B8;

    --cat-border: #E5EAF0;
    --cat-border-dark: #D9E0E9;

    --cat-bg: #F6F8FB;
    --cat-white: #FFFFFF;

    --cat-success: #198754;
    --cat-success-bg: #EDF8F2;

    --cat-danger: #D64545;
    --cat-danger-bg: #FEF1F1;

    --cat-warning: #B7791F;
    --cat-warning-bg: #FFF8E7;

    --cat-shadow:
        0 1px 2px rgba(15, 23, 42, .03),
        0 10px 30px rgba(15, 23, 42, .05);

    --cat-shadow-lg:
        0 20px 60px rgba(15, 23, 42, .15);
}

.categories-page {
    min-height: calc(100vh - 70px);
    padding: 32px 34px 60px;
    background: var(--cat-bg);
    color: var(--cat-text);
}

/* --------------------------------------------------------------------------
   HERO
-------------------------------------------------------------------------- */

.categories-hero {
    max-width: 1440px;
    margin: 0 auto 24px;
    min-height: 190px;
    padding: 32px 34px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 30px;

    background:
        linear-gradient(
            120deg,
            #FFFFFF 0%,
            #FFFFFF 66%,
            #F2F6FC 100%
        );

    border: 1px solid var(--cat-border);
    border-radius: 22px;

    box-shadow: var(--cat-shadow);

    position: relative;
    overflow: hidden;
}

.categories-hero::after {
    content: "";
    position: absolute;
    width: 280px;
    height: 280px;
    right: -90px;
    top: -145px;

    border: 1px solid rgba(93, 137, 200, .13);
    border-radius: 50%;

    pointer-events: none;
}

.categories-hero::before {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    right: 40px;
    bottom: -130px;

    border: 1px solid rgba(93, 137, 200, .08);
    border-radius: 50%;
}

.hero-main {
    position: relative;
    z-index: 1;
}

.hero-kicker {
    display: flex;
    align-items: center;
    gap: 9px;

    margin-bottom: 14px;

    color: var(--cat-blue-dark);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .13em;
    text-transform: uppercase;
}

.kicker-line {
    width: 25px;
    height: 2px;
    background: var(--cat-blue);
    border-radius: 10px;
}

.hero-title-row {
    display: flex;
    align-items: flex-end;
    gap: 55px;
}

.hero-title-row h1 {
    margin: 0;
    color: var(--cat-heading);

    font-size: clamp(31px, 3vw, 43px);
    line-height: 1.05;
    letter-spacing: -.045em;
    font-weight: 800;
}

.hero-title-row p {
    max-width: 620px;
    margin: 13px 0 0;

    color: var(--cat-muted);
    font-size: 14px;
    line-height: 1.7;
}

.hero-count {
    min-width: 125px;
    padding-left: 24px;

    border-left: 1px solid var(--cat-border);
}

.hero-count strong {
    display: block;
    color: var(--cat-heading);
    font-size: 29px;
    line-height: 1;
    letter-spacing: -.04em;
}

.hero-count span {
    display: block;
    margin-top: 6px;

    color: var(--cat-muted);
    font-size: 11px;
    font-weight: 600;
}

/* --------------------------------------------------------------------------
   BUTTONS
-------------------------------------------------------------------------- */

.primary-button,
.secondary-button,
.danger-button {
    height: 43px;
    padding: 0 17px;

    border-radius: 10px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-family: inherit;
    font-size: 13px;
    font-weight: 700;

    cursor: pointer;
    transition:
        transform .18s ease,
        box-shadow .18s ease,
        background .18s ease,
        border-color .18s ease;
}

.primary-button {
    color: #FFFFFF;
    background: var(--cat-blue);
    border: 1px solid var(--cat-blue);

    box-shadow: 0 5px 15px rgba(93, 137, 200, .20);
}

.primary-button:hover {
    background: var(--cat-blue-dark);
    border-color: var(--cat-blue-dark);
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(93, 137, 200, .25);
}

.primary-button:disabled,
.secondary-button:disabled,
.danger-button:disabled {
    opacity: .55;
    cursor: not-allowed;
    transform: none;
}

.secondary-button {
    color: #374151;
    background: #FFFFFF;
    border: 1px solid var(--cat-border-dark);
}

.secondary-button:hover {
    border-color: #BBC7D6;
    background: #F9FAFB;
}

.danger-button {
    color: #FFFFFF;
    background: var(--cat-danger);
    border: 1px solid var(--cat-danger);
}

.danger-button:hover {
    background: #C73B3B;
}

.hero-add {
    position: relative;
    z-index: 2;
    min-width: 157px;
}

/* --------------------------------------------------------------------------
   OVERVIEW
-------------------------------------------------------------------------- */

.overview-panel {
    max-width: 1440px;
    margin: 0 auto 22px;

    padding: 0;

    display: grid;
    grid-template-columns: minmax(300px, 1fr) minmax(560px, 1.45fr);

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 18px;

    box-shadow: var(--cat-shadow);

    overflow: hidden;
}

.overview-intro {
    padding: 25px 28px;

    display: flex;
    align-items: center;
    gap: 15px;

    border-right: 1px solid var(--cat-border);
}

.overview-icon {
    width: 43px;
    height: 43px;

    flex: 0 0 43px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);

    border: 1px solid #DDE9F7;
    border-radius: 12px;
}

.section-label {
    display: block;

    margin-bottom: 4px;

    color: var(--cat-light-text);

    font-size: 9px;
    font-weight: 800;
    letter-spacing: .13em;
    text-transform: uppercase;
}

.overview-intro h2 {
    margin: 0;

    color: var(--cat-heading);

    font-size: 15px;
    line-height: 1.35;
    font-weight: 750;
    letter-spacing: -.01em;
}

.overview-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.stat-item {
    min-width: 0;
    padding: 19px 21px;

    display: flex;
    align-items: center;
    gap: 12px;

    text-align: left;

    background: #FFFFFF;
    border: 0;
    border-left: 1px solid var(--cat-border);

    cursor: pointer;
    font-family: inherit;

    position: relative;
    transition:
        background .18s ease,
        box-shadow .18s ease;
}

.stat-item:first-child {
    border-left: 0;
}

.stat-item:hover {
    background: #FAFCFF;
}

.stat-item.active {
    background: var(--cat-blue-pale);
    box-shadow: inset 0 -2px 0 var(--cat-blue);
}

.stat-icon {
    width: 37px;
    height: 37px;

    flex: 0 0 37px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);

    border-radius: 9px;
}

.stat-copy {
    min-width: 0;
}

.stat-copy strong {
    display: block;

    color: var(--cat-heading);
    font-size: 20px;
    line-height: 1.1;
    letter-spacing: -.03em;
}

.stat-copy span {
    display: block;

    margin-top: 3px;

    color: var(--cat-muted);
    font-size: 11px;
    font-weight: 600;
}

.stat-item > svg {
    margin-left: auto;
    color: #B4C0CE;
}

/* --------------------------------------------------------------------------
   TOOLBAR
-------------------------------------------------------------------------- */

.content-toolbar {
    max-width: 1440px;
    margin: 0 auto 14px;

    padding: 9px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 14px;

    box-shadow: var(--cat-shadow);
}

.toolbar-search {
    min-width: 260px;
    max-width: 520px;
    flex: 1;

    height: 43px;

    display: flex;
    align-items: center;

    padding: 0 12px;
    gap: 9px;

    color: #8A98A9;
    background: #F8FAFC;

    border: 1px solid #EDF0F4;
    border-radius: 9px;

    transition:
        border-color .18s ease,
        background .18s ease;
}

.toolbar-search:focus-within {
    background: #FFFFFF;
    border-color: #BDD0E7;
    box-shadow: 0 0 0 3px rgba(93, 137, 200, .08);
}

.toolbar-search input {
    width: 100%;
    min-width: 0;

    border: 0;
    outline: 0;
    background: transparent;

    color: var(--cat-text);

    font-family: inherit;
    font-size: 12px;
}

.toolbar-search input::placeholder {
    color: #A5AFBB;
}

.toolbar-search input::-webkit-search-cancel-button {
    display: none;
}

.search-clear {
    width: 25px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #8B98A8;
    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 7px;

    cursor: pointer;
}

.toolbar-right {
    display: flex;
    align-items: center;
    gap: 9px;
}

.filter-group {
    display: flex;
    align-items: center;
    gap: 3px;

    padding: 3px;

    background: #F4F6F8;

    border-radius: 9px;
}

.filter-button {
    height: 35px;
    padding: 0 12px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    border: 0;
    border-radius: 7px;

    color: #697586;
    background: transparent;

    font-family: inherit;
    font-size: 11px;
    font-weight: 700;

    cursor: pointer;
    transition: .18s ease;
}

.filter-button svg {
    width: 13px;
    height: 13px;
}

.filter-button:hover {
    color: var(--cat-text);
}

.filter-button.active {
    color: var(--cat-blue-dark);
    background: #FFFFFF;
    box-shadow: 0 1px 4px rgba(15, 23, 42, .08);
}

.reset-button {
    height: 35px;
    padding: 0 10px;

    color: var(--cat-blue-dark);
    background: transparent;

    border: 0;

    font-family: inherit;
    font-size: 11px;
    font-weight: 700;

    cursor: pointer;
}

/* --------------------------------------------------------------------------
   RESULTS
-------------------------------------------------------------------------- */

.results-header {
    max-width: 1440px;
    margin: 0 auto 11px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #7A8797;

    font-size: 11px;
}

.results-header strong {
    color: var(--cat-heading);
}

.results-header span {
    color: #A0AAB7;
}

/* --------------------------------------------------------------------------
   GRID
-------------------------------------------------------------------------- */

.category-grid {
    max-width: 1440px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(285px, 1fr)
    );

    gap: 15px;
}

.category-card {
    min-height: 255px;

    padding: 20px;

    display: flex;
    flex-direction: column;

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 16px;

    box-shadow: var(--cat-shadow);

    position: relative;

    overflow: hidden;

    transition:
        transform .2s ease,
        box-shadow .2s ease,
        border-color .2s ease;
}

.category-card:hover {
    transform: translateY(-3px);

    border-color: #D5DFEB;

    box-shadow:
        0 2px 4px rgba(15, 23, 42, .04),
        0 16px 36px rgba(15, 23, 42, .08);
}

.category-card.is-featured {
    border-color: #D6E3F3;
}

.category-card.is-featured::before {
    content: "";

    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;

    height: 2px;

    background: var(--cat-blue);
    border-radius: 0 0 5px 5px;
}

.card-top-line {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;
}

.category-index {
    color: #B5BFCA;

    font-size: 10px;
    font-weight: 800;
    letter-spacing: .1em;
}

.category-identity {
    display: flex;
    align-items: center;
    gap: 13px;
}

.category-mark {
    width: 48px;
    height: 48px;

    flex: 0 0 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: #F2F6FB;

    border: 1px solid #E4ECF5;
    border-radius: 13px;

    font-size: 13px;
    font-weight: 800;
    letter-spacing: .03em;
}

.category-mark.featured-mark {
    color: #FFFFFF;
    background: var(--cat-blue);
    border-color: var(--cat-blue);
}

.category-title-area {
    min-width: 0;
}

.category-status-row {
    margin-bottom: 5px;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;

    font-size: 9px;
    font-weight: 800;
    letter-spacing: .06em;
    text-transform: uppercase;
}

.status-dot {
    width: 5px;
    height: 5px;

    border-radius: 50%;
}

.status-badge.featured {
    color: var(--cat-blue-dark);
}

.status-badge.featured .status-dot {
    background: var(--cat-blue);
}

.status-badge.standard {
    color: #7C8795;
}

.status-badge.standard .status-dot {
    background: #AEB8C4;
}

.category-title-area h3 {
    margin: 0;

    color: var(--cat-heading);

    font-size: 16px;
    line-height: 1.2;
    font-weight: 780;
    letter-spacing: -.02em;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.category-description {
    min-height: 61px;

    margin: 18px 0 17px;

    color: #687587;

    font-size: 12px;
    line-height: 1.7;
}

.card-divider {
    height: 1px;

    background: #EDF0F4;
}

.category-meta {
    min-width: 0;

    margin-top: auto;
    padding-top: 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.slug-block {
    min-width: 0;
}

.slug-block > span {
    display: block;

    margin-bottom: 4px;

    color: #A0AAB6;

    font-size: 8px;
    font-weight: 800;
    letter-spacing: .13em;
}

.slug-block code {
    display: block;

    max-width: 145px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: #607086;

    font-family:
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        monospace;

    font-size: 10px;
}

.card-edit {
    height: 31px;
    padding: 0 9px;

    display: inline-flex;
    align-items: center;
    gap: 6px;

    color: var(--cat-blue-dark);
    background: transparent;

    border: 1px solid #DCE6F1;
    border-radius: 7px;

    font-family: inherit;
    font-size: 10px;
    font-weight: 750;

    cursor: pointer;

    transition: .18s ease;
}

.card-edit:hover {
    color: #FFFFFF;
    background: var(--cat-blue);
    border-color: var(--cat-blue);
}

/* --------------------------------------------------------------------------
   CARD ACTIONS
-------------------------------------------------------------------------- */

.actions-container {
    position: relative;
}

.actions-button {
    width: 31px;
    height: 31px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #8B97A6;
    background: transparent;

    border: 1px solid transparent;
    border-radius: 8px;

    cursor: pointer;
    transition: .18s ease;
}

.actions-button:hover,
.actions-button.open {
    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);
    border-color: #DFE9F4;
}

.actions-menu {
    position: absolute;
    z-index: 30;

    top: calc(100% + 7px);
    right: 0;

    width: 175px;

    padding: 5px;

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 10px;

    box-shadow:
        0 10px 30px rgba(15, 23, 42, .12);

    animation: menuIn .13s ease-out;
}

@keyframes menuIn {
    from {
        opacity: 0;
        transform: translateY(-3px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.actions-menu button {
    width: 100%;
    height: 35px;

    padding: 0 9px;

    display: flex;
    align-items: center;
    gap: 9px;

    color: #4B5563;
    background: transparent;

    border: 0;
    border-radius: 7px;

    font-family: inherit;
    font-size: 11px;
    font-weight: 650;

    text-align: left;

    cursor: pointer;
}

.actions-menu button:hover {
    background: #F5F7FA;
    color: var(--cat-heading);
}

.actions-menu button.danger {
    color: var(--cat-danger);
}

.actions-menu button.danger:hover {
    background: var(--cat-danger-bg);
}

.menu-separator {
    height: 1px;
    margin: 4px 2px;
    background: #EEF1F4;
}

/* --------------------------------------------------------------------------
   CREATE CARD
-------------------------------------------------------------------------- */

.create-card {
    min-height: 255px;

    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    color: #718096;
    background:
        linear-gradient(
            180deg,
            rgba(255,255,255,.85),
            rgba(248,250,253,.9)
        );

    border: 1px dashed #CAD5E2;
    border-radius: 16px;

    font-family: inherit;

    cursor: pointer;

    transition:
        border-color .18s ease,
        background .18s ease,
        transform .18s ease;
}

.create-card:hover {
    color: var(--cat-blue-dark);

    background: var(--cat-blue-pale);

    border-color: #AFC5DF;

    transform: translateY(-2px);
}

.create-card-icon {
    width: 48px;
    height: 48px;

    margin-bottom: 13px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);

    border: 1px solid #DDE8F4;
    border-radius: 13px;
}

.create-card-title {
    color: var(--cat-heading);

    font-size: 13px;
    font-weight: 750;
}

.create-card-subtitle {
    margin-top: 5px;

    color: #96A1AF;

    font-size: 10px;
}

/* --------------------------------------------------------------------------
   EMPTY STATE
-------------------------------------------------------------------------- */

.empty-state {
    max-width: 700px;
    min-height: 330px;

    margin: 15px auto 0;
    padding: 45px 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 18px;

    box-shadow: var(--cat-shadow);
}

.empty-visual {
    width: 62px;
    height: 62px;

    margin-bottom: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);

    border: 1px solid #DFEAF6;
    border-radius: 17px;
}

.empty-eyebrow {
    margin-bottom: 6px;

    color: var(--cat-blue-dark);

    font-size: 9px;
    font-weight: 800;
    letter-spacing: .13em;
    text-transform: uppercase;
}

.empty-state h2 {
    margin: 0;

    color: var(--cat-heading);

    font-size: 20px;
    font-weight: 780;
    letter-spacing: -.025em;
}

.empty-state p {
    max-width: 410px;

    margin: 9px 0 20px;

    color: var(--cat-muted);

    font-size: 12px;
    line-height: 1.7;
}

/* --------------------------------------------------------------------------
   MODAL
-------------------------------------------------------------------------- */

.modal-overlay {
    position: fixed;
    z-index: 9999;

    inset: 0;

    padding: 22px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(15, 23, 42, .54);

    backdrop-filter: blur(4px);

    animation: overlayIn .18s ease-out;
}

@keyframes overlayIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.modal-panel {
    width: 100%;
    max-height: calc(100vh - 44px);

    display: flex;
    flex-direction: column;

    background: #FFFFFF;

    border: 1px solid rgba(255,255,255,.75);
    border-radius: 18px;

    box-shadow: var(--cat-shadow-lg);

    overflow: hidden;

    animation: modalIn .2s ease-out;
}

.modal-large {
    max-width: 650px;
}

.modal-medium {
    max-width: 570px;
}

.modal-small {
    max-width: 455px;
}

@keyframes modalIn {
    from {
        opacity: 0;
        transform: translateY(10px) scale(.985);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.modal-heading {
    padding: 21px 23px;

    display: flex;
    align-items: flex-start;
    gap: 12px;

    border-bottom: 1px solid #EDF0F4;
}

.modal-heading-icon {
    width: 38px;
    height: 38px;

    flex: 0 0 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-blue-dark);
    background: var(--cat-blue-soft);

    border: 1px solid #DFEAF6;
    border-radius: 10px;
}

.modal-heading-icon.danger {
    color: var(--cat-danger);
    background: var(--cat-danger-bg);
    border-color: #F6DADA;
}

.modal-heading-copy {
    min-width: 0;
}

.modal-heading-copy h2 {
    margin: 1px 0 4px;

    color: var(--cat-heading);

    font-size: 16px;
    line-height: 1.2;
    font-weight: 780;
    letter-spacing: -.02em;
}

.modal-heading-copy p {
    margin: 0;

    color: var(--cat-muted);

    font-size: 11px;
    line-height: 1.55;
}

.modal-close {
    width: 32px;
    height: 32px;

    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    flex: 0 0 32px;

    color: #8C98A7;
    background: transparent;

    border: 0;
    border-radius: 8px;

    cursor: pointer;
}

.modal-close:hover {
    color: var(--cat-heading);
    background: #F3F5F7;
}

/* --------------------------------------------------------------------------
   FORM
-------------------------------------------------------------------------- */

.category-form {
    min-height: 0;

    display: flex;
    flex-direction: column;
}

.form-content {
    padding: 23px;

    overflow-y: auto;
}

.form-field {
    margin-bottom: 19px;
}

.field-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 7px;
}

.field-heading label {
    color: #374151;

    font-size: 11px;
    font-weight: 750;
}

.field-heading span {
    color: #A0AAB6;

    font-size: 9px;
    font-weight: 650;
}

.input-shell {
    height: 45px;

    display: flex;
    align-items: center;
    gap: 9px;

    padding: 0 12px;

    background: #FAFBFC;

    border: 1px solid var(--cat-border);
    border-radius: 9px;

    transition:
        border-color .18s ease,
        box-shadow .18s ease,
        background .18s ease;
}

.input-shell:focus-within {
    background: #FFFFFF;
    border-color: #AFC5DF;
    box-shadow: 0 0 0 3px rgba(93, 137, 200, .08);
}

.input-shell.has-error,
.textarea-shell.has-error {
    border-color: #E6A7A7;
}

.input-shell > svg {
    flex: 0 0 auto;
    color: #94A3B8;
}

.input-shell input {
    width: 100%;

    border: 0;
    outline: 0;
    background: transparent;

    color: var(--cat-heading);

    font-family: inherit;
    font-size: 12px;
}

.input-shell input::placeholder,
.textarea-shell textarea::placeholder {
    color: #AAB3BE;
}

.slug-preview {
    min-height: 44px;

    margin: -3px 0 20px;

    padding: 9px 11px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    background: #F7F9FC;

    border: 1px solid #E9EDF2;
    border-radius: 9px;
}

.slug-preview-label {
    display: flex;
    align-items: center;
    gap: 6px;

    color: #8995A4;

    font-size: 9px;
    font-weight: 750;
    text-transform: uppercase;
    letter-spacing: .07em;
}

.slug-preview code {
    max-width: 60%;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: var(--cat-blue-dark);

    font-family:
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        monospace;

    font-size: 10px;
}

.textarea-shell {
    padding: 10px 12px;

    background: #FAFBFC;

    border: 1px solid var(--cat-border);
    border-radius: 9px;

    transition:
        border-color .18s ease,
        box-shadow .18s ease,
        background .18s ease;
}

.textarea-shell:focus-within {
    background: #FFFFFF;
    border-color: #AFC5DF;
    box-shadow: 0 0 0 3px rgba(93, 137, 200, .08);
}

.textarea-shell textarea {
    display: block;

    width: 100%;
    min-height: 110px;

    resize: vertical;

    border: 0;
    outline: 0;
    background: transparent;

    color: var(--cat-heading);

    font-family: inherit;
    font-size: 12px;
    line-height: 1.6;
}

.field-error {
    margin-top: 6px;

    display: flex;
    align-items: center;
    gap: 5px;

    color: var(--cat-danger);

    font-size: 10px;
    line-height: 1.4;
}

/* --------------------------------------------------------------------------
   FEATURED TOGGLE
-------------------------------------------------------------------------- */

.featured-option {
    min-height: 67px;

    padding: 11px 12px;

    display: flex;
    align-items: center;
    gap: 11px;

    background: #FAFBFC;

    border: 1px solid #E7EBF0;
    border-radius: 11px;

    cursor: pointer;

    transition: .18s ease;
}

.featured-option:hover {
    border-color: #CBD8E7;
    background: #F9FBFE;
}

.featured-option.selected {
    background: var(--cat-blue-pale);
    border-color: #C9D9EB;
}

.featured-option input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.featured-option-icon {
    width: 36px;
    height: 36px;

    flex: 0 0 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #8997A7;
    background: #FFFFFF;

    border: 1px solid #DFE5EC;
    border-radius: 9px;

    transition: .18s ease;
}

.featured-option.selected .featured-option-icon {
    color: var(--cat-blue-dark);
    background: #E5EEF9;
    border-color: #D0DEED;
}

.featured-option-copy {
    min-width: 0;
    flex: 1;
}

.featured-option-copy strong {
    display: block;

    color: var(--cat-heading);

    font-size: 11px;
    font-weight: 750;
}

.featured-option-copy span {
    display: block;

    margin-top: 3px;

    color: #8A96A5;

    font-size: 9px;
    line-height: 1.4;
}

.toggle {
    width: 37px;
    height: 21px;

    flex: 0 0 37px;

    padding: 2px;

    display: flex;
    align-items: center;

    background: #CBD3DC;

    border-radius: 20px;

    transition: .2s ease;
}

.toggle span {
    width: 17px;
    height: 17px;

    display: block;

    background: #FFFFFF;

    border-radius: 50%;

    box-shadow: 0 1px 3px rgba(0,0,0,.15);

    transition: .2s ease;
}

.toggle.on {
    justify-content: flex-end;
    background: var(--cat-blue);
}

/* --------------------------------------------------------------------------
   MODAL FOOTER
-------------------------------------------------------------------------- */

.modal-footer {
    padding: 15px 23px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;

    background: #FBFCFD;

    border-top: 1px solid #EDF0F4;
}

/* --------------------------------------------------------------------------
   DELETE
-------------------------------------------------------------------------- */

.delete-content {
    padding: 29px 25px 21px;

    text-align: center;
}

.delete-visual {
    width: 59px;
    height: 59px;

    margin: 0 auto 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--cat-danger);
    background: var(--cat-danger-bg);

    border: 1px solid #F5D9D9;
    border-radius: 16px;
}

.delete-content h2 {
    margin: 0;

    color: var(--cat-heading);

    font-size: 18px;
    font-weight: 780;
    letter-spacing: -.025em;
}

.delete-content p {
    max-width: 350px;

    margin: 8px auto 17px;

    color: var(--cat-muted);

    font-size: 11px;
    line-height: 1.65;
}

.delete-warning {
    max-width: 360px;

    margin: 0 auto;

    padding: 10px 12px;

    display: flex;
    align-items: flex-start;
    gap: 8px;

    text-align: left;

    color: #8A6A2B;
    background: var(--cat-warning-bg);

    border: 1px solid #F4E6BC;
    border-radius: 9px;

    font-size: 9px;
    line-height: 1.5;
}

.delete-warning svg {
    flex: 0 0 auto;
}

.delete-footer {
    background: #FFFFFF;
}

.delete-footer .secondary-button {
    margin-right: auto;
}

/* --------------------------------------------------------------------------
   TOAST
-------------------------------------------------------------------------- */

.toast-stack {
    position: fixed;
    z-index: 10000;

    top: 22px;
    right: 22px;

    width: min(370px, calc(100vw - 30px));

    display: flex;
    flex-direction: column;
    gap: 8px;
}

.toast {
    min-height: 62px;

    padding: 10px 11px;

    display: flex;
    align-items: flex-start;
    gap: 10px;

    background: #FFFFFF;

    border: 1px solid var(--cat-border);
    border-radius: 11px;

    box-shadow:
        0 12px 35px rgba(15, 23, 42, .13);

    animation: toastIn .22s ease-out;
}

@keyframes toastIn {
    from {
        opacity: 0;
        transform: translateX(12px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.toast-icon {
    width: 31px;
    height: 31px;

    flex: 0 0 31px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
}

.toast-success .toast-icon {
    color: var(--cat-success);
    background: var(--cat-success-bg);
}

.toast-error .toast-icon {
    color: var(--cat-danger);
    background: var(--cat-danger-bg);
}

.toast-warning .toast-icon {
    color: var(--cat-warning);
    background: var(--cat-warning-bg);
}

.toast-copy {
    min-width: 0;
    flex: 1;
    padding-top: 1px;
}

.toast-copy strong {
    display: block;

    color: var(--cat-heading);

    font-size: 11px;
    font-weight: 780;
}

.toast-copy span {
    display: block;

    margin-top: 3px;

    color: #718096;

    font-size: 10px;
    line-height: 1.5;
}

.toast > button {
    width: 25px;
    height: 25px;

    flex: 0 0 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #9AA5B2;
    background: transparent;

    border: 0;
    border-radius: 6px;

    cursor: pointer;
}

.toast > button:hover {
    background: #F3F5F7;
    color: var(--cat-heading);
}

/* --------------------------------------------------------------------------
   SPINNER
-------------------------------------------------------------------------- */

.spinner {
    animation: spinner .7s linear infinite;
}

@keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}

/* --------------------------------------------------------------------------
   RESPONSIVE — TABLET
-------------------------------------------------------------------------- */

@media (max-width: 1100px) {
    .categories-page {
        padding: 25px 22px 45px;
    }

    .categories-hero {
        padding: 27px;
    }

    .overview-panel {
        grid-template-columns: 1fr;
    }

    .overview-intro {
        border-right: 0;
        border-bottom: 1px solid var(--cat-border);
    }

    .stat-item:first-child {
        border-left: 0;
    }

    .stat-item {
        border-left: 1px solid var(--cat-border);
    }

    .hero-title-row {
        gap: 30px;
    }
}

/* --------------------------------------------------------------------------
   RESPONSIVE — TABLET / SMALL
-------------------------------------------------------------------------- */

@media (max-width: 820px) {
    .categories-page {
        padding: 20px 16px 40px;
    }

    .categories-hero {
        min-height: auto;

        padding: 25px;

        align-items: flex-start;
        flex-direction: column;
    }

    .hero-title-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
    }

    .hero-count {
        padding-left: 0;
        border-left: 0;

        display: flex;
        align-items: baseline;
        gap: 7px;
    }

    .hero-count span {
        margin-top: 0;
    }

    .hero-add {
        width: 100%;
    }

    .content-toolbar {
        align-items: stretch;
        flex-direction: column;
    }

    .toolbar-search {
        max-width: none;
        width: 100%;
    }

    .toolbar-right {
        justify-content: space-between;
    }

    .filter-group {
        width: 100%;
    }

    .filter-button {
        flex: 1;
    }

    .overview-stats {
        grid-template-columns: 1fr;
    }

    .stat-item {
        min-height: 62px;

        border-left: 0;
        border-top: 1px solid var(--cat-border);
    }

    .stat-item:first-child {
        border-top: 0;
    }

    .stat-item.active {
        box-shadow: inset 3px 0 0 var(--cat-blue);
    }
}

/* --------------------------------------------------------------------------
   RESPONSIVE — MOBILE
-------------------------------------------------------------------------- */

@media (max-width: 560px) {
    .categories-page {
        padding: 13px 10px 30px;
    }

    .categories-hero {
        margin-bottom: 12px;
        padding: 21px 18px;

        border-radius: 15px;
    }

    .hero-kicker {
        font-size: 9px;
    }

    .hero-title-row h1 {
        font-size: 29px;
    }

    .hero-title-row p {
        font-size: 11px;
        line-height: 1.65;
    }

    .hero-count strong {
        font-size: 24px;
    }

    .overview-panel {
        margin-bottom: 12px;
        border-radius: 13px;
    }

    .overview-intro {
        padding: 18px;
    }

    .overview-intro h2 {
        font-size: 13px;
    }

    .overview-stats {
        grid-template-columns: 1fr;
    }

    .content-toolbar {
        padding: 7px;
        border-radius: 12px;
    }

    .toolbar-right {
        flex-wrap: wrap;
    }

    .filter-group {
        order: 1;
    }

    .reset-button {
        order: 2;
        margin-left: auto;
    }

    .results-header {
        padding: 0 3px;
        margin-top: 12px;
    }

    .results-header span {
        display: none;
    }

    .category-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .category-card {
        min-height: 235px;
        padding: 17px;
        border-radius: 13px;
    }

    .create-card {
        min-height: 170px;
        border-radius: 13px;
    }

    .modal-overlay {
        padding: 10px;
        align-items: flex-end;
    }

    .modal-panel {
        max-height: calc(100vh - 20px);
        border-radius: 17px 17px 12px 12px;
    }

    .modal-heading {
        padding: 17px;
    }

    .form-content {
        padding: 18px;
    }

    .modal-footer {
        padding: 12px 17px;

        position: relative;
    }

    .modal-footer .primary-button,
    .modal-footer .secondary-button,
    .modal-footer .danger-button {
        flex: 1;
    }

    .delete-content {
        padding: 24px 18px 17px;
    }

    .delete-footer .secondary-button {
        margin-right: 0;
    }

    .toast-stack {
        top: 10px;
        right: 10px;
        width: calc(100vw - 20px);
    }
}

/* --------------------------------------------------------------------------
   REDUCED MOTION
-------------------------------------------------------------------------- */

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }
}
`;