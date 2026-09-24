import React, { useMemo, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

import {
    Plus,
    Search,
    Pencil,
    Trash2,
    FolderOpen,
    BriefcaseBusiness,
    Users,
    ChevronRight,
    X,
} from 'lucide-react';


/* ================================================================
   CREATE CATEGORY MODAL
================================================================ */

function CreateCategoryModal({ categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        parent_id: '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        post(route('admin.job-categories.store'), {
            onSuccess: () => {
                reset();

                const modalEl =
                    document.getElementById('createCategoryModal');

                window.bootstrap?.Modal.getInstance(modalEl)?.hide();
            },
        });
    }

    return (
        <div
            className="modal fade"
            id="createCategoryModal"
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content apple-modal">

                    <form onSubmit={handleSubmit}>

                        <div className="modal-header">
                            <div>
                                <div className="modal-kicker">
                                    JOB MANAGEMENT
                                </div>

                                <h5 className="modal-title">
                                    Add category
                                </h5>
                            </div>

                            <button
                                type="button"
                                className="modal-close"
                                data-bs-dismiss="modal"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="modal-body">

                            <div className="field-group">

                                <label>
                                    Category name
                                </label>

                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className={`apple-input ${
                                        errors.name
                                            ? 'input-error'
                                            : ''
                                    }`}
                                    placeholder="e.g. Software Development"
                                    autoFocus
                                    required
                                />

                                {errors.name && (
                                    <div className="field-error">
                                        {errors.name}
                                    </div>
                                )}

                            </div>


                            <div className="field-group">

                                <label>
                                    Parent category
                                </label>

                                <select
                                    value={data.parent_id}
                                    onChange={(e) =>
                                        setData(
                                            'parent_id',
                                            e.target.value
                                        )
                                    }
                                    className="apple-input"
                                >
                                    <option value="">
                                        No parent category
                                    </option>

                                    {categories.map((parent) => (
                                        <option
                                            key={parent.id}
                                            value={parent.id}
                                        >
                                            {parent.name}
                                        </option>
                                    ))}
                                </select>

                            </div>

                        </div>


                        <div className="modal-footer">

                            <button
                                type="button"
                                className="btn-light-apple"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn-primary-apple"
                                disabled={processing}
                            >
                                {processing ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Plus size={15} />
                                        Create category
                                    </>
                                )}
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}


/* ================================================================
   EDIT CATEGORY MODAL
================================================================ */

function EditCategoryModal({ category, categories }) {

    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
        parent_id: category.parent_id ?? '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        put(
            route(
                'admin.job-categories.update',
                category.id
            ),
            {
                onSuccess: () => {

                    const modalEl =
                        document.getElementById(
                            `editCategoryModal${category.id}`
                        );

                    window.bootstrap?.Modal
                        .getInstance(modalEl)
                        ?.hide();
                },
            }
        );
    }

    return (
        <div
            className="modal fade"
            id={`editCategoryModal${category.id}`}
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content apple-modal">

                    <form onSubmit={handleSubmit}>

                        <div className="modal-header">

                            <div>
                                <div className="modal-kicker">
                                    JOB MANAGEMENT
                                </div>

                                <h5 className="modal-title">
                                    Edit category
                                </h5>
                            </div>

                            <button
                                type="button"
                                className="modal-close"
                                data-bs-dismiss="modal"
                            >
                                <X size={16} />
                            </button>

                        </div>


                        <div className="modal-body">

                            <div className="field-group">

                                <label>
                                    Category name
                                </label>

                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData(
                                            'name',
                                            e.target.value
                                        )
                                    }
                                    className={`apple-input ${
                                        errors.name
                                            ? 'input-error'
                                            : ''
                                    }`}
                                    required
                                />

                                {errors.name && (
                                    <div className="field-error">
                                        {errors.name}
                                    </div>
                                )}

                            </div>


                            <div className="field-group">

                                <label>
                                    Parent category
                                </label>

                                <select
                                    value={data.parent_id}
                                    onChange={(e) =>
                                        setData(
                                            'parent_id',
                                            e.target.value
                                        )
                                    }
                                    className="apple-input"
                                >
                                    <option value="">
                                        No parent category
                                    </option>

                                    {categories
                                        .filter(
                                            (parent) =>
                                                parent.id !==
                                                category.id
                                        )
                                        .map((parent) => (
                                            <option
                                                key={parent.id}
                                                value={parent.id}
                                            >
                                                {parent.name}
                                            </option>
                                        ))}
                                </select>

                                {errors.parent_id && (
                                    <div className="field-error">
                                        {errors.parent_id}
                                    </div>
                                )}

                            </div>

                        </div>


                        <div className="modal-footer">

                            <button
                                type="button"
                                className="btn-light-apple"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn-primary-apple"
                                disabled={processing}
                            >
                                {processing ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" />
                                        Updating...
                                    </>
                                ) : (
                                    <>
                                        <Pencil size={14} />
                                        Save changes
                                    </>
                                )}
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}


/* ================================================================
   DELETE MODAL
================================================================ */

function DeleteCategoryModal({ category }) {

    const { delete: destroy, processing } = useForm();

    function handleSubmit(e) {
        e.preventDefault();

        destroy(
            route(
                'admin.job-categories.destroy',
                category.id
            )
        );
    }

    return (
        <div
            className="modal fade"
            id={`deleteCategoryModal${category.id}`}
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-sm">

                <div className="modal-content apple-modal">

                    <form onSubmit={handleSubmit}>

                        <div className="delete-modal-body">

                            <div className="delete-icon">
                                <Trash2 size={19} />
                            </div>

                            <h5>
                                Delete category?
                            </h5>

                            <p>
                                This will remove{' '}
                                <strong>{category.name}</strong>.
                                Make sure there are no dependent
                                records before continuing.
                            </p>

                        </div>


                        <div className="delete-actions">

                            <button
                                type="button"
                                className="btn-light-apple"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn-danger-apple"
                                disabled={processing}
                            >
                                {processing
                                    ? 'Deleting...'
                                    : 'Delete'}
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
}


/* ================================================================
   STAT CARD
================================================================ */

function StatCard({
    icon,
    label,
    value,
    description,
}) {
    return (
        <div className="stat-card">

            <div className="stat-icon">
                {icon}
            </div>

            <div className="stat-content">

                <div className="stat-label">
                    {label}
                </div>

                <div className="stat-value">
                    {value}
                </div>

                <div className="stat-description">
                    {description}
                </div>

            </div>

        </div>
    );
}


/* ================================================================
   MAIN PAGE
================================================================ */

export default function Categories({
    categories = [],
}) {

    const [search, setSearch] = useState('');

    /* ------------------------------------------------------------
       FILTER CATEGORIES
    ------------------------------------------------------------ */

    const filteredCategories = useMemo(() => {

        const keyword = search
            .toLowerCase()
            .trim();

        if (!keyword) {
            return categories;
        }

        return categories.filter((category) =>
            category.name
                ?.toLowerCase()
                .includes(keyword) ||
            category.slug
                ?.toLowerCase()
                .includes(keyword) ||
            category.parent?.name
                ?.toLowerCase()
                .includes(keyword)
        );

    }, [categories, search]);


    /* ------------------------------------------------------------
       STATISTICS
    ------------------------------------------------------------ */

    const totalCategories = categories.length;

    const totalJobs = categories.reduce(
        (total, category) =>
            total +
            Number(category.job_sections_count ?? 0),
        0
    );

    const parentCategories = categories.filter(
        (category) => !category.parent_id
    ).length;


    return (
        <AppLayout>

            <Head title="Job Categories" />

            <div className="categories-page">

                {/* ==================================================
                    HEADER
                ================================================== */}

                <div className="page-header">

                    <div>

                        <div className="page-eyebrow">
                            JOB MANAGEMENT
                        </div>

                        <h1>
                            Job categories
                        </h1>

                        <p>
                            Organize and manage the categories used
                            across your job listings.
                        </p>

                    </div>


                    <button
                        className="add-category-button"
                        data-bs-toggle="modal"
                        data-bs-target="#createCategoryModal"
                    >
                        <Plus size={16} />
                        <span>Add category</span>
                    </button>

                </div>


                {/* ==================================================
                    STATISTICS
                ================================================== */}

                <div className="stats-grid">

                    <StatCard
                        icon={<FolderOpen size={17} />}
                        label="Categories"
                        value={totalCategories}
                        description="Total job categories"
                    />

                    <StatCard
                        icon={<BriefcaseBusiness size={17} />}
                        label="Jobs"
                        value={totalJobs}
                        description="Jobs across categories"
                    />

                    <StatCard
                        icon={<Users size={17} />}
                        label="Parent categories"
                        value={parentCategories}
                        description="Top-level categories"
                    />

                </div>


                {/* ==================================================
                    CONTENT CARD
                ================================================== */}

                <div className="categories-card">

                    {/* Toolbar */}

                    <div className="categories-toolbar">

                        <div>

                            <div className="section-title">
                                All categories
                            </div>

                            <div className="section-subtitle">
                                {filteredCategories.length}{' '}
                                {filteredCategories.length === 1
                                    ? 'category'
                                    : 'categories'}{' '}
                                displayed
                            </div>

                        </div>


                        <div className="search-wrapper">

                            <Search size={15} />

                            <input
                                type="search"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search categories..."
                            />

                            {search && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSearch('')
                                    }
                                    className="clear-search"
                                >
                                    <X size={14} />
                                </button>
                            )}

                        </div>

                    </div>


                    {/* ==================================================
                        TABLE
                    ================================================== */}

                    {filteredCategories.length > 0 ? (

                        <div className="table-responsive">

                            <table className="categories-table">

                                <thead>

                                    <tr>
                                        <th className="number-column">
                                            #
                                        </th>

                                        <th>
                                            Category
                                        </th>

                                        <th>
                                            Slug
                                        </th>

                                        <th>
                                            Parent
                                        </th>

                                        <th>
                                            Jobs
                                        </th>

                                        <th className="actions-column">
                                            Actions
                                        </th>
                                    </tr>

                                </thead>


                                <tbody>

                                    {filteredCategories.map(
                                        (category, index) => {

                                            const jobCount =
                                                Number(
                                                    category.job_sections_count ??
                                                    0
                                                );

                                            return (
                                                <React.Fragment
                                                    key={category.id}
                                                >

                                                    <tr>

                                                        {/* Number */}

                                                        <td className="row-number">
                                                            {String(
                                                                index + 1
                                                            ).padStart(
                                                                2,
                                                                '0'
                                                            )}
                                                        </td>


                                                        {/* Category */}

                                                        <td>

                                                            <div className="category-cell">

                                                                <div className="category-avatar">
                                                                    <FolderOpen
                                                                        size={
                                                                            15
                                                                        }
                                                                    />
                                                                </div>

                                                                <div>

                                                                    <div className="category-name">
                                                                        {
                                                                            category.name
                                                                        }
                                                                    </div>

                                                                    <div className="category-id">
                                                                        ID #
                                                                        {
                                                                            category.id
                                                                        }
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </td>


                                                        {/* Slug */}

                                                        <td>

                                                            <span className="slug">
                                                                /
                                                                {
                                                                    category.slug
                                                                }
                                                            </span>

                                                        </td>


                                                        {/* Parent */}

                                                        <td>

                                                            {category.parent ? (

                                                                <div className="parent-cell">

                                                                    <ChevronRight
                                                                        size={
                                                                            13
                                                                        }
                                                                    />

                                                                    <span>
                                                                        {
                                                                            category
                                                                                .parent
                                                                                .name
                                                                        }
                                                                    </span>

                                                                </div>

                                                            ) : (

                                                                <span className="root-badge">
                                                                    Root
                                                                </span>

                                                            )}

                                                        </td>


                                                        {/* Jobs */}

                                                        <td>

                                                            <div className="job-count">

                                                                <span className="job-count-number">
                                                                    {
                                                                        jobCount
                                                                    }
                                                                </span>

                                                                <span>
                                                                    {
                                                                        jobCount ===
                                                                        1
                                                                            ? 'job'
                                                                            : 'jobs'
                                                                    }
                                                                </span>

                                                            </div>

                                                        </td>


                                                        {/* Actions */}

                                                        <td>

                                                            <div className="row-actions">

                                                                <button
                                                                    type="button"
                                                                    className="table-action edit"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target={`#editCategoryModal${category.id}`}
                                                                    title="Edit category"
                                                                >
                                                                    <Pencil
                                                                        size={
                                                                            14
                                                                        }
                                                                    />

                                                                    <span>
                                                                        Edit
                                                                    </span>
                                                                </button>


                                                                <button
                                                                    type="button"
                                                                    className="table-action delete"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target={`#deleteCategoryModal${category.id}`}
                                                                    title="Delete category"
                                                                >
                                                                    <Trash2
                                                                        size={
                                                                            14
                                                                        }
                                                                    />
                                                                </button>

                                                            </div>

                                                        </td>

                                                    </tr>


                                                    <EditCategoryModal
                                                        category={
                                                            category
                                                        }
                                                        categories={
                                                            categories
                                                        }
                                                    />

                                                    <DeleteCategoryModal
                                                        category={
                                                            category
                                                        }
                                                    />

                                                </React.Fragment>
                                            );
                                        }
                                    )}

                                </tbody>

                            </table>

                        </div>

                    ) : (

                        /* ==================================================
                           EMPTY STATE
                        ================================================== */

                        <div className="empty-state">

                            <div className="empty-icon">
                                <Search size={20} />
                            </div>

                            <h3>
                                No categories found
                            </h3>

                            <p>
                                {search
                                    ? `No category matches "${search}".`
                                    : 'Create your first job category to get started.'}
                            </p>

                            {search ? (

                                <button
                                    type="button"
                                    className="btn-light-apple"
                                    onClick={() =>
                                        setSearch('')
                                    }
                                >
                                    Clear search
                                </button>

                            ) : (

                                <button
                                    type="button"
                                    className="btn-primary-apple"
                                    data-bs-toggle="modal"
                                    data-bs-target="#createCategoryModal"
                                >
                                    <Plus size={15} />
                                    Add category
                                </button>

                            )}

                        </div>

                    )}

                </div>

            </div>


            {/* Create Modal */}

            <CreateCategoryModal
                categories={categories}
            />


            {/* ==================================================
                PAGE STYLES
            ================================================== */}

            <style>{`

                /* ==================================================
                   LIGHT / APPLE FONT
                ================================================== */

                .categories-page {

                    --apple-font:
                        -apple-system,
                        BlinkMacSystemFont,
                        "SF Pro Display",
                        "SF Pro Text",
                        "Inter",
                        "Helvetica Neue",
                        Arial,
                        sans-serif;

                    --page-bg: #f7f7f9;
                    --card: #ffffff;
                    --text: #1d1d1f;
                    --muted: #86868b;
                    --muted-dark: #5f6368;
                    --border: #e8e8ed;
                    --border-light: #f0f0f3;

                    --green: #16834b;
                    --green-soft: #edf8f2;

                    --red: #d92d20;
                    --red-soft: #fff1f0;

                    font-family: var(--apple-font);
                    color: var(--text);
                    background: var(--page-bg);

                    min-height: calc(100vh - 60px);

                    padding: 28px 30px 45px;

                    -webkit-font-smoothing: antialiased;

                    color-scheme: light !important;
                }


                .categories-page *,
                .categories-page *::before,
                .categories-page *::after {

                    box-sizing: border-box;

                }


                /* ==================================================
                   HEADER
                ================================================== */

                .page-header {

                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;

                    margin-bottom: 24px;

                }


                .page-eyebrow {

                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .08em;
                    color: var(--green);

                    margin-bottom: 6px;

                }


                .page-header h1 {

                    margin: 0;

                    font-size: 23px;
                    line-height: 1.2;

                    font-weight: 700;
                    letter-spacing: -.035em;

                }


                .page-header p {

                    margin: 6px 0 0;

                    font-size: 12px;
                    line-height: 1.5;

                    color: var(--muted);

                }


                .add-category-button {

                    border: 0;
                    border-radius: 9px;

                    background: #1d1d1f;
                    color: white;

                    height: 36px;
                    padding: 0 14px;

                    display: inline-flex;
                    align-items: center;
                    gap: 7px;

                    font-family: inherit;
                    font-size: 12px;
                    font-weight: 600;

                    white-space: nowrap;

                    transition:
                        transform .15s ease,
                        background .15s ease;

                }


                .add-category-button:hover {

                    background: #000;
                    transform: translateY(-1px);

                }


                /* ==================================================
                   STATS
                ================================================== */

                .stats-grid {

                    display: grid;

                    grid-template-columns:
                        repeat(3, minmax(0, 1fr));

                    gap: 12px;

                    margin-bottom: 18px;

                }


                .stat-card {

                    background: var(--card);

                    border: 1px solid var(--border);

                    border-radius: 13px;

                    padding: 15px 16px;

                    display: flex;
                    align-items: center;

                    gap: 12px;

                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025);

                }


                .stat-icon {

                    width: 34px;
                    height: 34px;

                    border-radius: 9px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background: var(--green-soft);
                    color: var(--green);

                    flex-shrink: 0;

                }


                .stat-label {

                    font-size: 10px;
                    font-weight: 600;

                    text-transform: uppercase;
                    letter-spacing: .04em;

                    color: var(--muted);

                }


                .stat-value {

                    font-size: 19px;
                    line-height: 1.15;

                    font-weight: 700;

                    margin-top: 2px;

                    letter-spacing: -.02em;

                }


                .stat-description {

                    font-size: 10px;
                    color: var(--muted);

                    margin-top: 2px;

                }


                /* ==================================================
                   MAIN CARD
                ================================================== */

                .categories-card {

                    background: var(--card);

                    border: 1px solid var(--border);

                    border-radius: 14px;

                    overflow: hidden;

                    box-shadow:
                        0 1px 2px rgba(0,0,0,.025);

                }


                /* ==================================================
                   TOOLBAR
                ================================================== */

                .categories-toolbar {

                    min-height: 68px;

                    padding: 14px 17px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    gap: 20px;

                    border-bottom: 1px solid var(--border-light);

                }


                .section-title {

                    font-size: 13px;
                    font-weight: 650;

                    letter-spacing: -.01em;

                }


                .section-subtitle {

                    font-size: 10px;

                    color: var(--muted);

                    margin-top: 3px;

                }


                .search-wrapper {

                    width: 245px;
                    height: 33px;

                    display: flex;
                    align-items: center;

                    gap: 7px;

                    padding: 0 10px;

                    border: 1px solid var(--border);

                    border-radius: 8px;

                    background: #fafafa;

                    color: var(--muted);

                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;

                }


                .search-wrapper:focus-within {

                    background: white;

                    border-color: #b9cfc3;

                    box-shadow:
                        0 0 0 3px rgba(22,131,75,.07);

                }


                .search-wrapper input {

                    border: 0;
                    outline: 0;

                    background: transparent;

                    width: 100%;

                    font-family: inherit;
                    font-size: 11px;

                    color: var(--text);

                }


                .search-wrapper input::placeholder {

                    color: #a1a1a6;

                }


                .clear-search {

                    border: 0;
                    background: transparent;

                    padding: 2px;

                    display: flex;

                    color: var(--muted);

                }


                /* ==================================================
                   TABLE
                ================================================== */

                .categories-table {

                    width: 100%;
                    border-collapse: collapse;

                }


                .categories-table thead th {

                    height: 39px;

                    padding: 0 17px;

                    background: #fafafa;

                    border-bottom: 1px solid var(--border);

                    color: #737373;

                    font-size: 9px;
                    font-weight: 700;

                    letter-spacing: .055em;

                    text-transform: uppercase;

                    text-align: left;

                    white-space: nowrap;

                }


                .categories-table tbody td {

                    padding: 11px 17px;

                    border-bottom: 1px solid var(--border-light);

                    vertical-align: middle;

                    font-size: 11px;

                }


                .categories-table tbody tr:last-child td {

                    border-bottom: 0;

                }


                .categories-table tbody tr {

                    transition:
                        background .12s ease;

                }


                .categories-table tbody tr:hover {

                    background: #fbfbfc;

                }


                .number-column {

                    width: 55px;

                }


                .row-number {

                    color: #a1a1a6;

                    font-size: 10px !important;

                    font-variant-numeric: tabular-nums;

                }


                /* ==================================================
                   CATEGORY
                ================================================== */

                .category-cell {

                    display: flex;
                    align-items: center;

                    gap: 10px;

                }


                .category-avatar {

                    width: 31px;
                    height: 31px;

                    border-radius: 8px;

                    background: #f1f8f4;

                    color: var(--green);

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                }


                .category-name {

                    font-size: 11px;
                    font-weight: 650;

                    color: var(--text);

                }


                .category-id {

                    margin-top: 2px;

                    font-size: 9px;

                    color: #a1a1a6;

                }


                /* ==================================================
                   SLUG
                ================================================== */

                .slug {

                    display: inline-block;

                    padding: 4px 7px;

                    border-radius: 6px;

                    background: #f7f7f8;

                    color: #68686c;

                    font-family:
                        ui-monospace,
                        SFMono-Regular,
                        Menlo,
                        Monaco,
                        Consolas,
                        monospace;

                    font-size: 9px;

                }


                /* ==================================================
                   PARENT
                ================================================== */

                .parent-cell {

                    display: inline-flex;
                    align-items: center;

                    gap: 4px;

                    color: var(--muted-dark);

                    font-size: 10px;

                }


                .parent-cell svg {

                    color: #b0b0b5;

                }


                .root-badge {

                    display: inline-flex;

                    padding: 4px 7px;

                    border-radius: 6px;

                    background: #f5f5f7;

                    color: #77777c;

                    font-size: 9px;
                    font-weight: 600;

                }


                /* ==================================================
                   JOB COUNT
                ================================================== */

                .job-count {

                    display: inline-flex;
                    align-items: baseline;

                    gap: 4px;

                }


                .job-count-number {

                    font-size: 13px;

                    font-weight: 700;

                    color: var(--text);

                }


                .job-count span:last-child {

                    color: var(--muted);

                    font-size: 9px;

                }


                /* ==================================================
                   ACTIONS
                ================================================== */

                .actions-column {

                    width: 105px;

                    text-align: right !important;

                }


                .row-actions {

                    display: flex;

                    align-items: center;
                    justify-content: flex-end;

                    gap: 5px;

                }


                .table-action {

                    height: 28px;

                    border: 1px solid var(--border);

                    background: white;

                    border-radius: 7px;

                    display: inline-flex;
                    align-items: center;
                    justify-content: center;

                    gap: 5px;

                    padding: 0 8px;

                    font-family: inherit;

                    font-size: 10px;
                    font-weight: 600;

                    transition:
                        background .15s ease,
                        border-color .15s ease,
                        color .15s ease;

                }


                .table-action.edit {

                    color: #52525a;

                }


                .table-action.edit:hover {

                    background: #f5f5f7;
                    border-color: #d7d7dc;

                    color: var(--text);

                }


                .table-action.delete {

                    width: 28px;
                    padding: 0;

                    color: #9b9ba0;

                }


                .table-action.delete:hover {

                    color: var(--red);

                    background: var(--red-soft);

                    border-color: #f2c8c4;

                }


                /* ==================================================
                   EMPTY STATE
                ================================================== */

                .empty-state {

                    min-height: 260px;

                    display: flex;
                    flex-direction: column;

                    align-items: center;
                    justify-content: center;

                    padding: 40px 20px;

                    text-align: center;

                }


                .empty-icon {

                    width: 42px;
                    height: 42px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 11px;

                    background: #f4f4f6;

                    color: #88888d;

                    margin-bottom: 11px;

                }


                .empty-state h3 {

                    margin: 0;

                    font-size: 13px;
                    font-weight: 650;

                }


                .empty-state p {

                    max-width: 350px;

                    margin: 5px 0 15px;

                    font-size: 10px;
                    line-height: 1.5;

                    color: var(--muted);

                }


                /* ==================================================
                   MODALS
                ================================================== */

                .apple-modal {

                    border: 1px solid #e6e6ea;

                    border-radius: 14px;

                    overflow: hidden;

                    box-shadow:
                        0 18px 50px rgba(0,0,0,.12);

                    font-family: var(--apple-font);

                    color: var(--text);

                    background: white;

                }


                .apple-modal .modal-header {

                    padding: 18px 20px 13px;

                    border-bottom: 1px solid var(--border-light);

                }


                .modal-kicker {

                    font-size: 8px;

                    font-weight: 700;

                    letter-spacing: .08em;

                    color: var(--green);

                    margin-bottom: 4px;

                }


                .apple-modal .modal-title {

                    font-size: 15px;

                    font-weight: 700;

                    letter-spacing: -.02em;

                    margin: 0;

                }


                .modal-close {

                    width: 27px;
                    height: 27px;

                    border: 0;

                    border-radius: 50%;

                    background: #f3f3f5;

                    color: #666;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                }


                .apple-modal .modal-body {

                    padding: 18px 20px;

                }


                .field-group {

                    margin-bottom: 16px;

                }


                .field-group:last-child {

                    margin-bottom: 0;

                }


                .field-group label {

                    display: block;

                    margin-bottom: 6px;

                    font-size: 10px;

                    font-weight: 650;

                    color: #4c4c51;

                }


                .apple-input {

                    width: 100%;

                    height: 36px;

                    border: 1px solid #dedee3;

                    border-radius: 8px;

                    background: #fbfbfc;

                    padding: 0 10px;

                    outline: none;

                    font-family: inherit;

                    font-size: 11px;

                    color: var(--text);

                    transition:
                        border-color .15s ease,
                        box-shadow .15s ease;

                }


                .apple-input:focus {

                    background: white;

                    border-color: #a7cbb7;

                    box-shadow:
                        0 0 0 3px rgba(22,131,75,.07);

                }


                .input-error {

                    border-color: #e0aaa5;

                }


                .field-error {

                    margin-top: 5px;

                    color: var(--red);

                    font-size: 9px;

                }


                .apple-modal .modal-footer {

                    padding: 12px 20px;

                    border-top: 1px solid var(--border-light);

                    display: flex;

                    justify-content: flex-end;

                    gap: 7px;

                }


                .btn-light-apple,
                .btn-primary-apple,
                .btn-danger-apple {

                    min-height: 32px;

                    border-radius: 8px;

                    padding: 0 11px;

                    border: 1px solid transparent;

                    font-family: inherit;

                    font-size: 10px;

                    font-weight: 600;

                    display: inline-flex;

                    align-items: center;

                    justify-content: center;

                    gap: 6px;

                    transition: .15s ease;

                }


                .btn-light-apple {

                    background: #f4f4f6;

                    border-color: #e6e6ea;

                    color: #55555b;

                }


                .btn-light-apple:hover {

                    background: #ebebee;

                }


                .btn-primary-apple {

                    background: #1d1d1f;

                    color: white;

                }


                .btn-primary-apple:hover {

                    background: #000;

                }


                .btn-danger-apple {

                    background: var(--red);

                    color: white;

                }


                .btn-danger-apple:hover {

                    background: #bb2118;

                }


                /* ==================================================
                   DELETE
                ================================================== */

                .delete-modal-body {

                    text-align: center;

                    padding: 26px 22px 18px;

                }


                .delete-icon {

                    width: 40px;
                    height: 40px;

                    margin: 0 auto 11px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 11px;

                    background: var(--red-soft);

                    color: var(--red);

                }


                .delete-modal-body h5 {

                    font-size: 14px;

                    font-weight: 700;

                    margin: 0;

                }


                .delete-modal-body p {

                    margin: 7px 0 0;

                    font-size: 10px;

                    line-height: 1.55;

                    color: var(--muted);

                }


                .delete-actions {

                    display: flex;

                    justify-content: center;

                    gap: 7px;

                    padding: 0 22px 20px;

                }


                /* ==================================================
                   RESPONSIVE
                ================================================== */

                @media (max-width: 900px) {

                    .categories-page {

                        padding: 22px 18px 35px;

                    }

                    .stats-grid {

                        grid-template-columns:
                            repeat(3, minmax(0, 1fr));

                    }

                }


                @media (max-width: 700px) {

                    .page-header {

                        align-items: flex-start;

                        flex-direction: column;

                    }


                    .add-category-button {

                        width: 100%;

                        justify-content: center;

                    }


                    .stats-grid {

                        grid-template-columns: 1fr;

                    }


                    .categories-toolbar {

                        align-items: stretch;

                        flex-direction: column;

                    }


                    .search-wrapper {

                        width: 100%;

                    }


                    .categories-table {

                        min-width: 720px;

                    }

                }


                @media (max-width: 480px) {

                    .categories-page {

                        padding: 18px 12px 30px;

                    }


                    .page-header h1 {

                        font-size: 21px;

                    }

                }


                /* ==================================================
                   FORCE LIGHT MODE
                ================================================== */

                @media (prefers-color-scheme: dark) {

                    .categories-page {

                        background: #f7f7f9 !important;
                        color: #1d1d1f !important;

                    }

                    .categories-card,
                    .stat-card,
                    .apple-modal {

                        background: #ffffff !important;
                        color: #1d1d1f !important;

                    }

                    .categories-table thead th {

                        background: #fafafa !important;
                        color: #737373 !important;

                    }

                    .categories-table tbody tr:hover {

                        background: #fbfbfc !important;

                    }

                    .apple-input {

                        background: #fbfbfc !important;
                        color: #1d1d1f !important;

                    }

                }

            `}</style>

        </AppLayout>
    );
}