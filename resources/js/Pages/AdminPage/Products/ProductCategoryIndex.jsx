import React, { useMemo, useState } from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* =========================================================
   ICONS
========================================================= */

const Icon = {
    Plus: ({ size = 18, strokeWidth = 1.8 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
        </svg>
    ),

    Tag: ({ size = 18, strokeWidth = 1.8 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20.59 13.41 13.41 20.59a2 2 0 0 1-2.82 0L3.41 13.41a2 2 0 0 1 0-2.82L10.59 3.41A2 2 0 0 1 12 3h7a2 2 0 0 1 2 2v7a2 2 0 0 1-.41 1.41Z" />
            <circle cx="16.5" cy="7.5" r="1.2" />
        </svg>
    ),

    Search: ({ size = 18, strokeWidth = 1.8 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
        </svg>
    ),

    Edit: ({ size = 17, strokeWidth = 1.8 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
    ),

    Trash: ({ size = 17, strokeWidth = 1.8 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v5" />
            <path d="M14 11v5" />
        </svg>
    ),

    Close: ({ size = 20, strokeWidth = 1.8 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    ),

    Save: ({ size = 17, strokeWidth = 1.8 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
            <path d="M17 21v-8H7v8" />
            <path d="M7 3v5h8" />
        </svg>
    ),

    Alert: ({ size = 20, strokeWidth = 1.8 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    ),

    Check: ({ size = 18, strokeWidth = 2 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 12 4 4L19 6" />
        </svg>
    ),

    Inbox: ({ size = 20, strokeWidth = 1.7 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 4h16v16H4z" />
            <path d="M4 13h4l2 3h4l2-3h4" />
        </svg>
    ),

    ChevronLeft: ({ size = 16, strokeWidth = 2 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    ),

    ChevronRight: ({ size = 16, strokeWidth = 2 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    ),

    Folder: ({ size = 20, strokeWidth = 1.7 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z" />
        </svg>
    ),

    Box: ({ size = 20, strokeWidth = 1.7 }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21 8-9 5-9-5 9-5 9 5Z" />
            <path d="m3 8 9 5 9-5" />
            <path d="M3 8v8l9 5 9-5V8" />
            <path d="M12 13v8" />
        </svg>
    ),
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ProductCategoryIndex(props) {
    /*
     * Laravel paginate() returns an object like:
     *
     * {
     *   current_page: 1,
     *   data: [...],
     *   last_page: 3,
     *   per_page: 10,
     *   total: 25,
     *   links: [...]
     * }
     *
     * The previous error happened because the component
     * treated the entire paginator object as an array.
     */

    const categoryResponse =
        props.categories ||
        props.productCategories ||
        [];

    const categories = Array.isArray(categoryResponse)
        ? categoryResponse
        : Array.isArray(categoryResponse.data)
            ? categoryResponse.data
            : [];

    const pagination = Array.isArray(categoryResponse)
        ? null
        : categoryResponse;

    const paginationLinks =
        pagination && Array.isArray(pagination.links)
            ? pagination.links
            : Array.isArray(props.links)
                ? props.links
                : [];

    /* =====================================================
       STATE
    ===================================================== */

    const [search, setSearch] = useState('');
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [toast, setToast] = useState({
        show: false,
        type: 'success',
        message: '',
    });

    /* =====================================================
       ROUTES
    ===================================================== */

    const routes = {
        categoriesIndex: '/admin/product-categories',

        categoryStore: '/admin/product-categories',

        categoryUpdate: (id) =>
            `/admin/product-categories/${id}`,

        categoryDestroy: (id) =>
            `/admin/product-categories/${id}`,
    };

    /* =====================================================
       CREATE FORM
    ===================================================== */

    const createForm = useForm({
        name: '',
        description: '',
    });

    /* =====================================================
       EDIT FORM
    ===================================================== */

    const editForm = useForm({
        name: '',
        description: '',
    });

    /* =====================================================
       SEARCH
    ===================================================== */

    const filteredCategories = useMemo(() => {
        if (!search.trim()) {
            return categories;
        }

        const query = search.toLowerCase().trim();

        return categories.filter((category) => {
            const name =
                category.name ||
                category.title ||
                '';

            const description =
                category.description ||
                '';

            return (
                name.toLowerCase().includes(query) ||
                description.toLowerCase().includes(query)
            );
        });
    }, [categories, search]);

    /* =====================================================
       STATISTICS
    ===================================================== */

    const statistics = useMemo(() => {
        const totalCategories = categories.length;

        const totalProducts = categories.reduce(
            (total, category) =>
                total +
                Number(
                    category.products_count ??
                    category.product_count ??
                    0
                ),
            0
        );

        const categoriesWithProducts = categories.filter(
            (category) =>
                Number(
                    category.products_count ??
                    category.product_count ??
                    0
                ) > 0
        ).length;

        const emptyCategories =
            totalCategories - categoriesWithProducts;

        return {
            totalCategories,
            totalProducts,
            categoriesWithProducts,
            emptyCategories,
        };
    }, [categories]);

    /* =====================================================
       TOAST
    ===================================================== */

    const showToast = (message, type = 'success') => {
        setToast({
            show: true,
            type,
            message,
        });

        window.setTimeout(() => {
            setToast({
                show: false,
                type: 'success',
                message: '',
            });
        }, 3500);
    };

    /* =====================================================
       CREATE
    ===================================================== */

    const openCreateModal = () => {
        createForm.reset();
        createForm.clearErrors();
        setShowCreateModal(true);
    };

    const closeCreateModal = () => {
        if (createForm.processing) {
            return;
        }

        createForm.reset();
        createForm.clearErrors();
        setShowCreateModal(false);
    };

    const submitCreate = (event) => {
        event.preventDefault();

        createForm.post(routes.categoryStore, {
            preserveScroll: true,

            onSuccess: () => {
                closeCreateModal();

                showToast(
                    'Product category created successfully.'
                );
            },

            onError: () => {
                showToast(
                    'Please correct the highlighted fields.',
                    'error'
                );
            },
        });
    };

    /* =====================================================
       EDIT
    ===================================================== */

    const openEditModal = (category) => {
        setSelectedCategory(category);

        editForm.setData({
            name: category.name || category.title || '',
            description: category.description || '',
        });

        editForm.clearErrors();

        setShowEditModal(true);
    };

    const closeEditModal = () => {
        if (editForm.processing) {
            return;
        }

        editForm.reset();
        editForm.clearErrors();
        setSelectedCategory(null);
        setShowEditModal(false);
    };

    const submitEdit = (event) => {
        event.preventDefault();

        if (!selectedCategory) {
            return;
        }

        editForm.put(
            routes.categoryUpdate(selectedCategory.id),
            {
                preserveScroll: true,

                onSuccess: () => {
                    closeEditModal();

                    showToast(
                        'Product category updated successfully.'
                    );
                },

                onError: () => {
                    showToast(
                        'Please correct the highlighted fields.',
                        'error'
                    );
                },
            }
        );
    };

    /* =====================================================
       DELETE
    ===================================================== */

    const openDeleteModal = (category) => {
        setSelectedCategory(category);
        setShowDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setSelectedCategory(null);
        setShowDeleteModal(false);
    };

    const deleteCategory = () => {
        if (!selectedCategory) {
            return;
        }

        router.delete(
            routes.categoryDestroy(selectedCategory.id),
            {
                preserveScroll: true,

                onSuccess: () => {
                    closeDeleteModal();

                    showToast(
                        'Product category deleted successfully.'
                    );
                },

                onError: () => {
                    showToast(
                        'Unable to delete this category.',
                        'error'
                    );
                },
            }
        );
    };

    /* =====================================================
       PAGINATION
    ===================================================== */

    const goToPage = (url) => {
        if (!url) {
            return;
        }

        router.visit(url, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    /* =====================================================
       HELPERS
    ===================================================== */

    const getCategoryName = (category) => {
        return (
            category.name ||
            category.title ||
            'Untitled Category'
        );
    };

    const getCategoryDescription = (category) => {
        return (
            category.description ||
            'No description provided.'
        );
    };

    const getProductCount = (category) => {
        return Number(
            category.products_count ??
            category.product_count ??
            0
        );
    };

    const getInitial = (category) => {
        const name = getCategoryName(category);

        return name.charAt(0).toUpperCase();
    };

    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <>
            <Head title="Product Categories" />

            <div
                className="product-category-page"
                style={{
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    color: '#1d1d1f',
                    background: '#f5f5f7',
                    minHeight: '100vh',
                }}
            >
                {/* =================================================
                    PAGE CONTAINER
                ================================================= */}

                <div className="container-fluid px-3 px-md-4 px-xl-5 py-4">

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3 mb-4">

                        <div>
                            <div
                                className="d-flex align-items-center gap-2 mb-2"
                                style={{
                                    fontSize: '13px',
                                    color: '#86868b',
                                    fontWeight: 500,
                                }}
                            >
                                <Link
                                    href="/admin"
                                    className="text-decoration-none"
                                    style={{
                                        color: '#86868b',
                                    }}
                                >
                                    Admin
                                </Link>

                                <span>/</span>

                                <span>
                                    Products
                                </span>

                                <span>/</span>

                                <span
                                    style={{
                                        color: '#1d1d1f',
                                    }}
                                >
                                    Categories
                                </span>
                            </div>

                            <h1
                                className="mb-1"
                                style={{
                                    fontSize: '30px',
                                    lineHeight: 1.15,
                                    fontWeight: 700,
                                    letterSpacing: '-0.7px',
                                }}
                            >
                                Product Categories
                            </h1>

                            <p
                                className="mb-0"
                                style={{
                                    color: '#6e6e73',
                                    fontSize: '14px',
                                }}
                            >
                                Organize your products into clear,
                                manageable categories.
                            </p>
                        </div>

                        <div className="d-flex align-items-center gap-2">

                            <Link
                                href="/admin/products"
                                className="btn d-flex align-items-center gap-2"
                                style={{
                                    height: '42px',
                                    padding: '0 16px',
                                    borderRadius: '12px',
                                    border: '1px solid #d2d2d7',
                                    background: '#fff',
                                    color: '#1d1d1f',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                }}
                            >
                                <Icon.Box size={17} />
                                Products
                            </Link>

                            <button
                                type="button"
                                className="btn d-flex align-items-center gap-2"
                                onClick={openCreateModal}
                                style={{
                                    height: '42px',
                                    padding: '0 17px',
                                    borderRadius: '12px',
                                    border: '1px solid #1d1d1f',
                                    background: '#1d1d1f',
                                    color: '#fff',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    boxShadow:
                                        '0 2px 5px rgba(0,0,0,.12)',
                                }}
                            >
                                <Icon.Plus size={17} />
                                Add Category
                            </button>

                        </div>
                    </div>

                    {/* =================================================
                        STATS
                    ================================================= */}

                    <div className="row g-3 mb-4">

                        {/* Total Categories */}
                        <div className="col-12 col-md-6 col-xl-3">
                            <div
                                className="bg-white h-100"
                                style={{
                                    borderRadius: '16px',
                                    border: '1px solid #e5e5ea',
                                    padding: '18px',
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-between">

                                    <div>
                                        <div
                                            style={{
                                                fontSize: '12px',
                                                color: '#86868b',
                                                fontWeight: 600,
                                                marginBottom: '6px',
                                            }}
                                        >
                                            TOTAL CATEGORIES
                                        </div>

                                        <div
                                            style={{
                                                fontSize: '28px',
                                                lineHeight: 1,
                                                fontWeight: 700,
                                                letterSpacing: '-0.5px',
                                            }}
                                        >
                                            {pagination?.total ??
                                                statistics.totalCategories}
                                        </div>
                                    </div>

                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: '#f2f2f7',
                                            color: '#1d1d1f',
                                        }}
                                    >
                                        <Icon.Folder size={21} />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Products */}
                        <div className="col-12 col-md-6 col-xl-3">
                            <div
                                className="bg-white h-100"
                                style={{
                                    borderRadius: '16px',
                                    border: '1px solid #e5e5ea',
                                    padding: '18px',
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-between">

                                    <div>
                                        <div
                                            style={{
                                                fontSize: '12px',
                                                color: '#86868b',
                                                fontWeight: 600,
                                                marginBottom: '6px',
                                            }}
                                        >
                                            PRODUCTS
                                        </div>

                                        <div
                                            style={{
                                                fontSize: '28px',
                                                lineHeight: 1,
                                                fontWeight: 700,
                                                letterSpacing: '-0.5px',
                                            }}
                                        >
                                            {statistics.totalProducts}
                                        </div>
                                    </div>

                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: '#f2f2f7',
                                            color: '#1d1d1f',
                                        }}
                                    >
                                        <Icon.Box size={21} />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Active Categories */}
                        <div className="col-12 col-md-6 col-xl-3">
                            <div
                                className="bg-white h-100"
                                style={{
                                    borderRadius: '16px',
                                    border: '1px solid #e5e5ea',
                                    padding: '18px',
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-between">

                                    <div>
                                        <div
                                            style={{
                                                fontSize: '12px',
                                                color: '#86868b',
                                                fontWeight: 600,
                                                marginBottom: '6px',
                                            }}
                                        >
                                            WITH PRODUCTS
                                        </div>

                                        <div
                                            style={{
                                                fontSize: '28px',
                                                lineHeight: 1,
                                                fontWeight: 700,
                                                letterSpacing: '-0.5px',
                                            }}
                                        >
                                            {statistics.categoriesWithProducts}
                                        </div>
                                    </div>

                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: '#f2f2f7',
                                            color: '#1d1d1f',
                                        }}
                                    >
                                        <Icon.Tag size={21} />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Empty Categories */}
                        <div className="col-12 col-md-6 col-xl-3">
                            <div
                                className="bg-white h-100"
                                style={{
                                    borderRadius: '16px',
                                    border: '1px solid #e5e5ea',
                                    padding: '18px',
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-between">

                                    <div>
                                        <div
                                            style={{
                                                fontSize: '12px',
                                                color: '#86868b',
                                                fontWeight: 600,
                                                marginBottom: '6px',
                                            }}
                                        >
                                            EMPTY CATEGORIES
                                        </div>

                                        <div
                                            style={{
                                                fontSize: '28px',
                                                lineHeight: 1,
                                                fontWeight: 700,
                                                letterSpacing: '-0.5px',
                                            }}
                                        >
                                            {statistics.emptyCategories}
                                        </div>
                                    </div>

                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: '#f2f2f7',
                                            color: '#1d1d1f',
                                        }}
                                    >
                                        <Icon.Inbox size={21} />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* =================================================
                        MAIN CARD
                    ================================================= */}

                    <div
                        className="bg-white"
                        style={{
                            borderRadius: '18px',
                            border: '1px solid #e5e5ea',
                            overflow: 'hidden',
                        }}
                    >

                        {/* Toolbar */}

                        <div
                            className="p-3 p-md-4"
                            style={{
                                borderBottom:
                                    '1px solid #e5e5ea',
                            }}
                        >
                            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">

                                <div>
                                    <h2
                                        className="mb-1"
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            letterSpacing: '-0.2px',
                                        }}
                                    >
                                        All Categories
                                    </h2>

                                    <p
                                        className="mb-0"
                                        style={{
                                            color: '#86868b',
                                            fontSize: '13px',
                                        }}
                                    >
                                        Manage product categories
                                        and their descriptions.
                                    </p>
                                </div>

                                <div
                                    className="position-relative"
                                    style={{
                                        width: '100%',
                                        maxWidth: '320px',
                                    }}
                                >
                                    <div
                                        className="position-absolute top-50 translate-middle-y"
                                        style={{
                                            left: '13px',
                                            color: '#86868b',
                                            pointerEvents: 'none',
                                        }}
                                    >
                                        <Icon.Search size={17} />
                                    </div>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={search}
                                        onChange={(event) =>
                                            setSearch(
                                                event.target.value
                                            )
                                        }
                                        placeholder="Search categories..."
                                        style={{
                                            height: '42px',
                                            paddingLeft: '40px',
                                            paddingRight: '14px',
                                            borderRadius: '12px',
                                            border: '1px solid #d2d2d7',
                                            fontSize: '13px',
                                            boxShadow: 'none',
                                        }}
                                    />
                                </div>

                            </div>
                        </div>

                        {/* =================================================
                            TABLE
                        ================================================= */}

                        {filteredCategories.length > 0 ? (
                            <div className="table-responsive">

                                <table
                                    className="table align-middle mb-0"
                                    style={{
                                        minWidth: '760px',
                                    }}
                                >
                                    <thead>
                                        <tr
                                            style={{
                                                background:
                                                    '#fbfbfd',
                                                borderBottom:
                                                    '1px solid #e5e5ea',
                                            }}
                                        >
                                            <th
                                                style={{
                                                    padding:
                                                        '13px 20px',
                                                    fontSize: '11px',
                                                    textTransform:
                                                        'uppercase',
                                                    letterSpacing:
                                                        '0.5px',
                                                    color: '#86868b',
                                                    fontWeight: 700,
                                                    borderBottom:
                                                        'none',
                                                }}
                                            >
                                                Category
                                            </th>

                                            <th
                                                style={{
                                                    padding:
                                                        '13px 20px',
                                                    fontSize: '11px',
                                                    textTransform:
                                                        'uppercase',
                                                    letterSpacing:
                                                        '0.5px',
                                                    color: '#86868b',
                                                    fontWeight: 700,
                                                    borderBottom:
                                                        'none',
                                                }}
                                            >
                                                Description
                                            </th>

                                            <th
                                                style={{
                                                    padding:
                                                        '13px 20px',
                                                    fontSize: '11px',
                                                    textTransform:
                                                        'uppercase',
                                                    letterSpacing:
                                                        '0.5px',
                                                    color: '#86868b',
                                                    fontWeight: 700,
                                                    borderBottom:
                                                        'none',
                                                    width: '150px',
                                                }}
                                            >
                                                Products
                                            </th>

                                            <th
                                                className="text-end"
                                                style={{
                                                    padding:
                                                        '13px 20px',
                                                    fontSize: '11px',
                                                    textTransform:
                                                        'uppercase',
                                                    letterSpacing:
                                                        '0.5px',
                                                    color: '#86868b',
                                                    fontWeight: 700,
                                                    borderBottom:
                                                        'none',
                                                    width: '130px',
                                                }}
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {filteredCategories.map(
                                            (category) => {
                                                const productCount =
                                                    getProductCount(
                                                        category
                                                    );

                                                return (
                                                    <tr
                                                        key={
                                                            category.id
                                                        }
                                                        style={{
                                                            borderBottom:
                                                                '1px solid #f0f0f2',
                                                        }}
                                                    >

                                                        {/* Category */}

                                                        <td
                                                            style={{
                                                                padding:
                                                                    '16px 20px',
                                                            }}
                                                        >
                                                            <div className="d-flex align-items-center gap-3">

                                                                <div
                                                                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                                                                    style={{
                                                                        width: '42px',
                                                                        height: '42px',
                                                                        borderRadius:
                                                                            '12px',
                                                                        background:
                                                                            '#f2f2f7',
                                                                        color:
                                                                            '#1d1d1f',
                                                                        fontSize:
                                                                            '15px',
                                                                        fontWeight:
                                                                            700,
                                                                    }}
                                                                >
                                                                    {getInitial(
                                                                        category
                                                                    )}
                                                                </div>

                                                                <div
                                                                    style={{
                                                                        minWidth: 0,
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            fontSize:
                                                                                '14px',
                                                                            fontWeight:
                                                                                650,
                                                                            color:
                                                                                '#1d1d1f',
                                                                            marginBottom:
                                                                                '3px',
                                                                        }}
                                                                    >
                                                                        {getCategoryName(
                                                                            category
                                                                        )}
                                                                    </div>

                                                                    <div
                                                                        style={{
                                                                            fontSize:
                                                                                '12px',
                                                                            color:
                                                                                '#86868b',
                                                                        }}
                                                                    >
                                                                        Category
                                                                        #
                                                                        {
                                                                            category.id
                                                                        }
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </td>

                                                        {/* Description */}

                                                        <td
                                                            style={{
                                                                padding:
                                                                    '16px 20px',
                                                                maxWidth:
                                                                    '400px',
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    color:
                                                                        '#6e6e73',
                                                                    fontSize:
                                                                        '13px',
                                                                    lineHeight:
                                                                        1.5,
                                                                }}
                                                            >
                                                                {
                                                                    getCategoryDescription(
                                                                        category
                                                                    )
                                                                }
                                                            </div>
                                                        </td>

                                                        {/* Products */}

                                                        <td
                                                            style={{
                                                                padding:
                                                                    '16px 20px',
                                                            }}
                                                        >
                                                            <span
                                                                className="d-inline-flex align-items-center"
                                                                style={{
                                                                    minWidth:
                                                                        '74px',
                                                                    justifyContent:
                                                                        'center',
                                                                    padding:
                                                                        '6px 10px',
                                                                    borderRadius:
                                                                        '999px',
                                                                    background:
                                                                        '#f2f2f7',
                                                                    color:
                                                                        '#1d1d1f',
                                                                    fontSize:
                                                                        '12px',
                                                                    fontWeight:
                                                                        650,
                                                                }}
                                                            >
                                                                {
                                                                    productCount
                                                                }{' '}
                                                                {productCount ===
                                                                1
                                                                    ? 'product'
                                                                    : 'products'}
                                                            </span>
                                                        </td>

                                                        {/* Actions */}

                                                        <td
                                                            className="text-end"
                                                            style={{
                                                                padding:
                                                                    '16px 20px',
                                                            }}
                                                        >
                                                            <div className="d-inline-flex align-items-center gap-2">

                                                                <button
                                                                    type="button"
                                                                    className="btn btn-sm d-flex align-items-center justify-content-center"
                                                                    onClick={() =>
                                                                        openEditModal(
                                                                            category
                                                                        )
                                                                    }
                                                                    title="Edit category"
                                                                    style={{
                                                                        width: '34px',
                                                                        height: '34px',
                                                                        padding: 0,
                                                                        borderRadius:
                                                                            '9px',
                                                                        border:
                                                                            '1px solid #d2d2d7',
                                                                        background:
                                                                            '#fff',
                                                                        color:
                                                                            '#1d1d1f',
                                                                    }}
                                                                >
                                                                    <Icon.Edit
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    className="btn btn-sm d-flex align-items-center justify-content-center"
                                                                    onClick={() =>
                                                                        openDeleteModal(
                                                                            category
                                                                        )
                                                                    }
                                                                    title="Delete category"
                                                                    style={{
                                                                        width: '34px',
                                                                        height: '34px',
                                                                        padding: 0,
                                                                        borderRadius:
                                                                            '9px',
                                                                        border:
                                                                            '1px solid #d2d2d7',
                                                                        background:
                                                                            '#fff',
                                                                        color:
                                                                            '#1d1d1f',
                                                                    }}
                                                                >
                                                                    <Icon.Trash
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                </button>

                                                            </div>
                                                        </td>

                                                    </tr>
                                                );
                                            }
                                        )}

                                    </tbody>
                                </table>

                            </div>
                        ) : (
                            /* =================================================
                               EMPTY STATE
                            ================================================= */

                            <div
                                className="text-center"
                                style={{
                                    padding:
                                        '70px 20px',
                                }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center mx-auto mb-3"
                                    style={{
                                        width: '58px',
                                        height: '58px',
                                        borderRadius: '16px',
                                        background:
                                            '#f2f2f7',
                                        color: '#86868b',
                                    }}
                                >
                                    {search ? (
                                        <Icon.Search size={24} />
                                    ) : (
                                        <Icon.Folder size={24} />
                                    )}
                                </div>

                                <h3
                                    className="mb-2"
                                    style={{
                                        fontSize: '17px',
                                        fontWeight: 700,
                                    }}
                                >
                                    {search
                                        ? 'No categories found'
                                        : 'No categories yet'}
                                </h3>

                                <p
                                    className="mb-4"
                                    style={{
                                        color: '#86868b',
                                        fontSize: '13px',
                                    }}
                                >
                                    {search
                                        ? 'Try changing your search term.'
                                        : 'Create your first product category to get started.'}
                                </p>

                                {!search && (
                                    <button
                                        type="button"
                                        className="btn d-inline-flex align-items-center gap-2"
                                        onClick={
                                            openCreateModal
                                        }
                                        style={{
                                            height: '40px',
                                            padding:
                                                '0 15px',
                                            borderRadius:
                                                '11px',
                                            background:
                                                '#1d1d1f',
                                            border:
                                                '1px solid #1d1d1f',
                                            color: '#fff',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Icon.Plus
                                            size={16}
                                        />
                                        Add Category
                                    </button>
                                )}
                            </div>
                        )}

                        {/* =================================================
                            PAGINATION
                        ================================================= */}

                        {pagination &&
                            paginationLinks.length > 0 && (
                                <div
                                    className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 p-3 p-md-4"
                                    style={{
                                        borderTop:
                                            '1px solid #e5e5ea',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize:
                                                '12px',
                                            color:
                                                '#86868b',
                                        }}
                                    >
                                        Showing{' '}
                                        <strong
                                            style={{
                                                color:
                                                    '#1d1d1f',
                                            }}
                                        >
                                            {pagination.from ||
                                                0}
                                        </strong>{' '}
                                        to{' '}
                                        <strong
                                            style={{
                                                color:
                                                    '#1d1d1f',
                                            }}
                                        >
                                            {pagination.to ||
                                                0}
                                        </strong>{' '}
                                        of{' '}
                                        <strong
                                            style={{
                                                color:
                                                    '#1d1d1f',
                                            }}
                                        >
                                            {pagination.total ||
                                                0}
                                        </strong>{' '}
                                        categories
                                    </div>

                                    <div className="d-flex align-items-center gap-1">

                                        {paginationLinks.map(
                                            (
                                                link,
                                                index
                                            ) => {
                                                const isPrevious =
                                                    index ===
                                                    0;

                                                const isNext =
                                                    index ===
                                                    paginationLinks.length -
                                                        1;

                                                const isActive =
                                                    link.active;

                                                return (
                                                    <button
                                                        key={`${link.label}-${index}`}
                                                        type="button"
                                                        disabled={
                                                            !link.url
                                                        }
                                                        onClick={() =>
                                                            goToPage(
                                                                link.url
                                                            )
                                                        }
                                                        className="btn d-flex align-items-center justify-content-center"
                                                        style={{
                                                            minWidth:
                                                                isPrevious ||
                                                                isNext
                                                                    ? '34px'
                                                                    : '34px',
                                                            height: '34px',
                                                            padding:
                                                                '0 9px',
                                                            borderRadius:
                                                                '8px',
                                                            border:
                                                                isActive
                                                                    ? '1px solid #1d1d1f'
                                                                    : '1px solid transparent',
                                                            background:
                                                                isActive
                                                                    ? '#1d1d1f'
                                                                    : 'transparent',
                                                            color:
                                                                isActive
                                                                    ? '#fff'
                                                                    : link.url
                                                                        ? '#1d1d1f'
                                                                        : '#c7c7cc',
                                                            fontSize:
                                                                '12px',
                                                            fontWeight:
                                                                isActive
                                                                    ? 700
                                                                    : 500,
                                                        }}
                                                    >
                                                        {isPrevious ? (
                                                            <Icon.ChevronLeft
                                                                size={
                                                                    15
                                                                }
                                                            />
                                                        ) : isNext ? (
                                                            <Icon.ChevronRight
                                                                size={
                                                                    15
                                                                }
                                                            />
                                                        ) : (
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        link.label,
                                                                }}
                                                            />
                                                        )}
                                                    </button>
                                                );
                                            }
                                        )}

                                    </div>
                                </div>
                            )}

                    </div>
                </div>

                {/* =========================================================
                    CREATE MODAL
                ========================================================= */}

                {showCreateModal && (
                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        role="dialog"
                        style={{
                            background:
                                'rgba(0,0,0,.42)',
                            backdropFilter:
                                'blur(4px)',
                        }}
                    >
                        <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                        >
                            <div
                                className="modal-content"
                                style={{
                                    border: 'none',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow:
                                        '0 25px 70px rgba(0,0,0,.18)',
                                }}
                            >

                                {/* Header */}

                                <div
                                    className="modal-header"
                                    style={{
                                        borderBottom:
                                            '1px solid #e5e5ea',
                                        padding:
                                            '20px 22px',
                                    }}
                                >
                                    <div>
                                        <h5
                                            className="modal-title mb-1"
                                            style={{
                                                fontSize:
                                                    '18px',
                                                fontWeight:
                                                    700,
                                            }}
                                        >
                                            Add Product Category
                                        </h5>

                                        <p
                                            className="mb-0"
                                            style={{
                                                fontSize:
                                                    '12px',
                                                color:
                                                    '#86868b',
                                            }}
                                        >
                                            Create a category for
                                            organizing products.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn d-flex align-items-center justify-content-center"
                                        onClick={
                                            closeCreateModal
                                        }
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
                                            color:
                                                '#1d1d1f',
                                        }}
                                    >
                                        <Icon.Close
                                            size={17}
                                        />
                                    </button>
                                </div>

                                {/* Body */}

                                <form
                                    onSubmit={submitCreate}
                                >
                                    <div
                                        className="modal-body"
                                        style={{
                                            padding:
                                                '22px',
                                        }}
                                    >

                                        {/* Name */}

                                        <div className="mb-3">

                                            <label
                                                className="form-label"
                                                style={{
                                                    fontSize:
                                                        '13px',
                                                    fontWeight:
                                                        650,
                                                    color:
                                                        '#1d1d1f',
                                                }}
                                            >
                                                Category Name
                                                <span
                                                    style={{
                                                        color:
                                                            '#ff3b30',
                                                    }}
                                                >
                                                    {' '}
                                                    *
                                                </span>
                                            </label>

                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    createForm.errors
                                                        .name
                                                        ? 'is-invalid'
                                                        : ''
                                                }`}
                                                value={
                                                    createForm
                                                        .data
                                                        .name
                                                }
                                                onChange={(
                                                    event
                                                ) =>
                                                    createForm.setData(
                                                        'name',
                                                        event
                                                            .target
                                                            .value
                                                    )
                                                }
                                                placeholder="e.g. Electronics"
                                                autoFocus
                                                style={{
                                                    height: '44px',
                                                    borderRadius:
                                                        '11px',
                                                    fontSize:
                                                        '13px',
                                                    boxShadow:
                                                        'none',
                                                }}
                                            />

                                            {createForm
                                                .errors
                                                .name && (
                                                <div className="invalid-feedback">
                                                    {
                                                        createForm
                                                            .errors
                                                            .name
                                                    }
                                                </div>
                                            )}

                                        </div>

                                        {/* Description */}

                                        <div className="mb-0">

                                            <label
                                                className="form-label"
                                                style={{
                                                    fontSize:
                                                        '13px',
                                                    fontWeight:
                                                        650,
                                                    color:
                                                        '#1d1d1f',
                                                }}
                                            >
                                                Description
                                            </label>

                                            <textarea
                                                className={`form-control ${
                                                    createForm.errors
                                                        .description
                                                        ? 'is-invalid'
                                                        : ''
                                                }`}
                                                rows="4"
                                                value={
                                                    createForm
                                                        .data
                                                        .description
                                                }
                                                onChange={(
                                                    event
                                                ) =>
                                                    createForm.setData(
                                                        'description',
                                                        event
                                                            .target
                                                            .value
                                                    )
                                                }
                                                placeholder="Briefly describe this category..."
                                                style={{
                                                    borderRadius:
                                                        '11px',
                                                    fontSize:
                                                        '13px',
                                                    resize:
                                                        'vertical',
                                                    boxShadow:
                                                        'none',
                                                }}
                                            />

                                            {createForm
                                                .errors
                                                .description && (
                                                <div className="invalid-feedback">
                                                    {
                                                        createForm
                                                            .errors
                                                            .description
                                                    }
                                                </div>
                                            )}

                                        </div>

                                    </div>

                                    {/* Footer */}

                                    <div
                                        className="modal-footer"
                                        style={{
                                            borderTop:
                                                '1px solid #e5e5ea',
                                            padding:
                                                '16px 22px',
                                        }}
                                    >
                                        <button
                                            type="button"
                                            className="btn"
                                            onClick={
                                                closeCreateModal
                                            }
                                            disabled={
                                                createForm.processing
                                            }
                                            style={{
                                                height:
                                                    '40px',
                                                padding:
                                                    '0 15px',
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
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn d-flex align-items-center gap-2"
                                            disabled={
                                                createForm.processing
                                            }
                                            style={{
                                                height:
                                                    '40px',
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
                                                fontWeight:
                                                    600,
                                            }}
                                        >
                                            <Icon.Save
                                                size={16}
                                            />

                                            {createForm.processing
                                                ? 'Creating...'
                                                : 'Create Category'}
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                )}

                {/* =========================================================
                    EDIT MODAL
                ========================================================= */}

                {showEditModal && (
                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        role="dialog"
                        style={{
                            background:
                                'rgba(0,0,0,.42)',
                            backdropFilter:
                                'blur(4px)',
                        }}
                    >
                        <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                        >
                            <div
                                className="modal-content"
                                style={{
                                    border: 'none',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow:
                                        '0 25px 70px rgba(0,0,0,.18)',
                                }}
                            >

                                {/* Header */}

                                <div
                                    className="modal-header"
                                    style={{
                                        borderBottom:
                                            '1px solid #e5e5ea',
                                        padding:
                                            '20px 22px',
                                    }}
                                >
                                    <div>
                                        <h5
                                            className="modal-title mb-1"
                                            style={{
                                                fontSize:
                                                    '18px',
                                                fontWeight:
                                                    700,
                                            }}
                                        >
                                            Edit Product Category
                                        </h5>

                                        <p
                                            className="mb-0"
                                            style={{
                                                fontSize:
                                                    '12px',
                                                color:
                                                    '#86868b',
                                            }}
                                        >
                                            Update the category
                                            information.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn d-flex align-items-center justify-content-center"
                                        onClick={
                                            closeEditModal
                                        }
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
                                            color:
                                                '#1d1d1f',
                                        }}
                                    >
                                        <Icon.Close
                                            size={17}
                                        />
                                    </button>
                                </div>

                                {/* Body */}

                                <form
                                    onSubmit={submitEdit}
                                >
                                    <div
                                        className="modal-body"
                                        style={{
                                            padding:
                                                '22px',
                                        }}
                                    >

                                        <div className="mb-3">

                                            <label
                                                className="form-label"
                                                style={{
                                                    fontSize:
                                                        '13px',
                                                    fontWeight:
                                                        650,
                                                }}
                                            >
                                                Category Name
                                                <span
                                                    style={{
                                                        color:
                                                            '#ff3b30',
                                                    }}
                                                >
                                                    {' '}
                                                    *
                                                </span>
                                            </label>

                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    editForm.errors
                                                        .name
                                                        ? 'is-invalid'
                                                        : ''
                                                }`}
                                                value={
                                                    editForm
                                                        .data
                                                        .name
                                                }
                                                onChange={(
                                                    event
                                                ) =>
                                                    editForm.setData(
                                                        'name',
                                                        event
                                                            .target
                                                            .value
                                                    )
                                                }
                                                style={{
                                                    height: '44px',
                                                    borderRadius:
                                                        '11px',
                                                    fontSize:
                                                        '13px',
                                                    boxShadow:
                                                        'none',
                                                }}
                                            />

                                            {editForm
                                                .errors
                                                .name && (
                                                <div className="invalid-feedback">
                                                    {
                                                        editForm
                                                            .errors
                                                            .name
                                                    }
                                                </div>
                                            )}

                                        </div>

                                        <div>

                                            <label
                                                className="form-label"
                                                style={{
                                                    fontSize:
                                                        '13px',
                                                    fontWeight:
                                                        650,
                                                }}
                                            >
                                                Description
                                            </label>

                                            <textarea
                                                className={`form-control ${
                                                    editForm.errors
                                                        .description
                                                        ? 'is-invalid'
                                                        : ''
                                                }`}
                                                rows="4"
                                                value={
                                                    editForm
                                                        .data
                                                        .description
                                                }
                                                onChange={(
                                                    event
                                                ) =>
                                                    editForm.setData(
                                                        'description',
                                                        event
                                                            .target
                                                            .value
                                                    )
                                                }
                                                style={{
                                                    borderRadius:
                                                        '11px',
                                                    fontSize:
                                                        '13px',
                                                    resize:
                                                        'vertical',
                                                    boxShadow:
                                                        'none',
                                                }}
                                            />

                                            {editForm
                                                .errors
                                                .description && (
                                                <div className="invalid-feedback">
                                                    {
                                                        editForm
                                                            .errors
                                                            .description
                                                    }
                                                </div>
                                            )}

                                        </div>

                                    </div>

                                    {/* Footer */}

                                    <div
                                        className="modal-footer"
                                        style={{
                                            borderTop:
                                                '1px solid #e5e5ea',
                                            padding:
                                                '16px 22px',
                                        }}
                                    >
                                        <button
                                            type="button"
                                            className="btn"
                                            onClick={
                                                closeEditModal
                                            }
                                            disabled={
                                                editForm.processing
                                            }
                                            style={{
                                                height:
                                                    '40px',
                                                padding:
                                                    '0 15px',
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
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn d-flex align-items-center gap-2"
                                            disabled={
                                                editForm.processing
                                            }
                                            style={{
                                                height:
                                                    '40px',
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
                                                fontWeight:
                                                    600,
                                            }}
                                        >
                                            <Icon.Save
                                                size={16}
                                            />

                                            {editForm.processing
                                                ? 'Saving...'
                                                : 'Save Changes'}
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                )}

                {/* =========================================================
                    DELETE MODAL
                ========================================================= */}

                {showDeleteModal &&
                    selectedCategory && (
                        <div
                            className="modal fade show d-block"
                            tabIndex="-1"
                            role="dialog"
                            style={{
                                background:
                                    'rgba(0,0,0,.42)',
                                backdropFilter:
                                    'blur(4px)',
                            }}
                        >
                            <div
                                className="modal-dialog modal-dialog-centered"
                                role="document"
                            >
                                <div
                                    className="modal-content"
                                    style={{
                                        border: 'none',
                                        borderRadius:
                                            '20px',
                                        overflow:
                                            'hidden',
                                        boxShadow:
                                            '0 25px 70px rgba(0,0,0,.18)',
                                    }}
                                >

                                    <div
                                        className="modal-body text-center"
                                        style={{
                                            padding:
                                                '32px 26px 24px',
                                        }}
                                    >

                                        <div
                                            className="d-flex align-items-center justify-content-center mx-auto mb-3"
                                            style={{
                                                width: '54px',
                                                height: '54px',
                                                borderRadius:
                                                    '16px',
                                                background:
                                                    '#fff2f1',
                                                color:
                                                    '#ff3b30',
                                            }}
                                        >
                                            <Icon.Alert
                                                size={25}
                                            />
                                        </div>

                                        <h5
                                            style={{
                                                fontSize:
                                                    '19px',
                                                fontWeight:
                                                    700,
                                                marginBottom:
                                                    '8px',
                                            }}
                                        >
                                            Delete Category?
                                        </h5>

                                        <p
                                            style={{
                                                color:
                                                    '#6e6e73',
                                                fontSize:
                                                    '13px',
                                                lineHeight:
                                                    1.55,
                                                marginBottom:
                                                    '6px',
                                            }}
                                        >
                                            You are about to
                                            delete
                                            <strong
                                                style={{
                                                    color:
                                                        '#1d1d1f',
                                                }}
                                            >
                                                {' '}
                                                "
                                                {
                                                    getCategoryName(
                                                        selectedCategory
                                                    )
                                                }
                                                "
                                            </strong>
                                            .
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
                                            This action cannot be
                                            undone.
                                        </p>

                                    </div>

                                    <div
                                        className="d-flex justify-content-center gap-2"
                                        style={{
                                            borderTop:
                                                '1px solid #e5e5ea',
                                            padding:
                                                '16px 22px',
                                        }}
                                    >

                                        <button
                                            type="button"
                                            className="btn"
                                            onClick={
                                                closeDeleteModal
                                            }
                                            style={{
                                                height:
                                                    '40px',
                                                padding:
                                                    '0 18px',
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
                                            Cancel
                                        </button>

                                        <button
                                            type="button"
                                            className="btn d-flex align-items-center gap-2"
                                            onClick={
                                                deleteCategory
                                            }
                                            style={{
                                                height:
                                                    '40px',
                                                padding:
                                                    '0 18px',
                                                borderRadius:
                                                    '10px',
                                                border:
                                                    '1px solid #ff3b30',
                                                background:
                                                    '#ff3b30',
                                                color: '#fff',
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
                            </div>
                        </div>
                    )}

                {/* =========================================================
                    TOAST
                ========================================================= */}

                {toast.show && (
                    <div
                        className="position-fixed"
                        style={{
                            right: '22px',
                            bottom: '22px',
                            zIndex: 1100,
                            maxWidth: '360px',
                        }}
                    >
                        <div
                            className="d-flex align-items-center gap-3"
                            style={{
                                background:
                                    '#1d1d1f',
                                color: '#fff',
                                padding:
                                    '13px 16px',
                                borderRadius:
                                    '13px',
                                boxShadow:
                                    '0 12px 35px rgba(0,0,0,.20)',
                            }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center flex-shrink-0"
                                style={{
                                    width: '28px',
                                    height: '28px',
                                    borderRadius:
                                        '50%',
                                    background:
                                        toast.type ===
                                        'error'
                                            ? '#ff3b30'
                                            : '#34c759',
                                }}
                            >
                                {toast.type ===
                                'error' ? (
                                    <Icon.Alert
                                        size={15}
                                    />
                                ) : (
                                    <Icon.Check
                                        size={16}
                                    />
                                )}
                            </div>

                            <div
                                style={{
                                    fontSize:
                                        '13px',
                                    fontWeight:
                                        550,
                                    lineHeight:
                                        1.35,
                                }}
                            >
                                {toast.message}
                            </div>

                            <button
                                type="button"
                                className="btn p-0 ms-auto d-flex"
                                onClick={() =>
                                    setToast({
                                        show: false,
                                        type: 'success',
                                        message: '',
                                    })
                                }
                                style={{
                                    color: '#fff',
                                    opacity: 0.7,
                                }}
                            >
                                <Icon.Close
                                    size={15}
                                />
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}

/* =========================================================
   INERTIA LAYOUT
========================================================= */

ProductCategoryIndex.layout = (page) => (
    <AppLayout
        children={page}
        title="Product Categories"
    />
);