// resources/js/Pages/Admin/Talents/Index.jsx

import { useMemo, useState } from "react";
import { Head, Link, useForm, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AppLayout";

export default function Index({ talents, categories = [], stats = {}, filters = {} }) {
    const routes = {
        create: () => route("admin.talents.create"),
        index: () => route("admin.talents.index"),
        bulk: () => route("admin.talents.bulk"),
        show: (id) => route("admin.talents.show", id),
        edit: (id) => route("admin.talents.edit", id),
        destroy: (id) => route("admin.talents.destroy", id),
        connections: () => route("admin.connections"),
    };

    const {
        data,
        setData,
        get,
        processing,
    } = useForm({
        search: filters?.search ?? "",
        status: filters?.status ?? "",
        category_id: filters?.category_id ?? "",
        level: filters?.level ?? "",
        featured: filters?.featured ?? "",
    });

    const [selected, setSelected] = useState([]);
    const [bulkAction, setBulkAction] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    const talentRows = talents?.data ?? [];

    const allChecked =
        talentRows.length > 0 && selected.length === talentRows.length;

    const hasSelection = selected.length > 0;

    const activeFilterCount = [
        data.status,
        data.category_id,
        data.level,
        data.featured,
    ].filter(Boolean).length;

    const toggleAll = (checked) => {
        setSelected(checked ? talentRows.map((talent) => talent.id) : []);
    };

    const toggleOne = (id) => {
        setSelected((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id],
        );
    };

    const submitFilters = (e) => {
        e.preventDefault();

        get(routes.index(), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const resetFilters = () => {
        setData({
            search: "",
            status: "",
            category_id: "",
            level: "",
            featured: "",
        });

        router.get(
            routes.index(),
            {},
            {
                preserveState: false,
                preserveScroll: true,
            },
        );
    };

    const clearSearch = () => {
        setData("search", "");

        router.get(
            routes.index(),
            {
                ...filters,
                search: "",
                page: 1,
            },
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const applyBulk = () => {
        if (!bulkAction) {
            window.alert("Please select a bulk action.");
            return;
        }

        if (selected.length === 0) {
            window.alert("Please select at least one talent.");
            return;
        }

        if (
            bulkAction === "delete" &&
            !window.confirm(
                `Delete ${selected.length} selected talent profile(s)? This action cannot be undone.`,
            )
        ) {
            return;
        }

        router.post(
            routes.bulk(),
            {
                action: bulkAction,
                ids: selected,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSelected([]);
                    setBulkAction("");
                },
            },
        );
    };

    const destroyTalent = (id) => {
        if (
            !window.confirm(
                "Delete this talent profile? This action cannot be undone.",
            )
        ) {
            return;
        }

        router.delete(routes.destroy(id), {
            preserveScroll: true,
        });
    };

    const pageNumbers = useMemo(() => {
        if (!talents?.last_page || talents.last_page <= 1) {
            return [];
        }

        const current = talents.current_page;
        const start = Math.max(1, current - 2);
        const end = Math.min(talents.last_page, current + 2);

        return Array.from(
            { length: end - start + 1 },
            (_, index) => start + index,
        );
    }, [talents?.current_page, talents?.last_page]);

    return (
        <AdminLayout>
            <Head title="Talent Management" />

            <style>{css}</style>

            <div className="talent-admin-page">
                {/* =====================================================
                    FLASH MESSAGE
                ====================================================== */}

                {filters?.flash?.success && (
                    <div className="flash-message flash-success">
                        <div className="flash-icon">
                            <CheckIcon size={16} />
                        </div>

                        <div>
                            <strong>Success</strong>
                            <span>{filters.flash.success}</span>
                        </div>

                        <button
                            type="button"
                            className="flash-close"
                            onClick={() => {}}
                        >
                            ×
                        </button>
                    </div>
                )}

                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}

                <header className="talent-header">
                    <div className="header-left">
                        <div className="breadcrumb">
                            <span>Admin</span>
                            <ChevronIcon />
                            <span className="current">Talent</span>
                        </div>

                        <div className="title-row">
                            <div className="title-icon">
                                <TalentIcon />
                            </div>

                            <div>
                                <h1>Talent management</h1>

                                <p>
                                    Manage talent profiles, skills,
                                    categories and professional levels.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="header-actions">
                        <Link
                            href={routes.connections()}
                            className="secondary-button"
                        >
                            <UsersIcon />
                            <span>Connections</span>
                        </Link>

                        <Link
                            href={routes.create()}
                            className="primary-button"
                        >
                            <PlusIcon />
                            <span>Add talent</span>
                        </Link>
                    </div>
                </header>

                {/* =====================================================
                    KPI CARDS
                ====================================================== */}

                <section className="stats-grid">
                    <StatCard
                        label="Total talent"
                        value={stats?.total}
                        description="Registered profiles"
                        icon={<UsersIcon />}
                        accent
                    />

                    <StatCard
                        label="Active"
                        value={stats?.active}
                        description="Currently available"
                        icon={<CheckIcon />}
                    />

                    <StatCard
                        label="Featured"
                        value={stats?.featured}
                        description="Highlighted talent"
                        icon={<StarIcon />}
                    />

                    <StatCard
                        label="Matched"
                        value={stats?.matched}
                        description="Successfully connected"
                        icon={<ConnectionIcon />}
                    />

                    <StatCard
                        label="Categories"
                        value={stats?.categories}
                        description="Skill categories"
                        icon={<LayersIcon />}
                    />
                </section>

                {/* =====================================================
                    SEARCH + FILTER AREA
                ====================================================== */}

                <form onSubmit={submitFilters} className="search-panel">
                    <div className="search-main">
                        <div className="search-box">
                            <SearchIcon />

                            <input
                                type="text"
                                value={data.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                                placeholder="Search by name, email or phone..."
                            />

                            {data.search && (
                                <button
                                    type="button"
                                    className="clear-search"
                                    onClick={clearSearch}
                                >
                                    ×
                                </button>
                            )}
                        </div>

                        <button
                            type="button"
                            className={`filter-toggle ${
                                showFilters ? "active" : ""
                            }`}
                            onClick={() => setShowFilters((value) => !value)}
                        >
                            <FilterIcon />

                            <span>Filters</span>

                            {activeFilterCount > 0 && (
                                <span className="filter-count">
                                    {activeFilterCount}
                                </span>
                            )}

                            <ChevronDownIcon
                                className={showFilters ? "rotate" : ""}
                            />
                        </button>

                        <button
                            type="submit"
                            className="search-button"
                            disabled={processing}
                        >
                            {processing ? (
                                <SpinnerIcon />
                            ) : (
                                <SearchIcon />
                            )}

                            <span>{processing ? "Searching..." : "Search"}</span>
                        </button>
                    </div>

                    {showFilters && (
                        <div className="advanced-filters">
                            <div className="filter-field">
                                <label>Status</label>

                                <select
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value="">All statuses</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>

                            <div className="filter-field">
                                <label>Category</label>

                                <select
                                    value={data.category_id}
                                    onChange={(e) =>
                                        setData(
                                            "category_id",
                                            e.target.value,
                                        )
                                    }
                                >
                                    <option value="">
                                        All categories
                                    </option>

                                    {categories.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="filter-field">
                                <label>Professional level</label>

                                <select
                                    value={data.level}
                                    onChange={(e) =>
                                        setData("level", e.target.value)
                                    }
                                >
                                    <option value="">All levels</option>
                                    <option value="beginner">
                                        Beginner
                                    </option>
                                    <option value="intermediate">
                                        Intermediate
                                    </option>
                                    <option value="advanced">
                                        Advanced
                                    </option>
                                    <option value="expert">
                                        Expert
                                    </option>
                                </select>
                            </div>

                            <div className="filter-field">
                                <label>Featured</label>

                                <select
                                    value={data.featured}
                                    onChange={(e) =>
                                        setData("featured", e.target.value)
                                    }
                                >
                                    <option value="">All</option>
                                    <option value="1">Featured only</option>
                                    <option value="0">Not featured</option>
                                </select>
                            </div>

                            <div className="filter-actions">
                                <button
                                    type="button"
                                    className="reset-button"
                                    onClick={resetFilters}
                                >
                                    <RefreshIcon />
                                    Reset
                                </button>
                            </div>
                        </div>
                    )}
                </form>

                {/* =====================================================
                    RESULTS CARD
                ====================================================== */}

                <section className="talent-card">
                    {/* Toolbar */}

                    <div className="results-toolbar">
                        <div className="results-heading">
                            <div className="results-title">
                                Talent profiles
                            </div>

                            <span className="results-count">
                                {Number(talents?.total ?? 0).toLocaleString()}
                            </span>

                            {activeFilterCount > 0 && (
                                <span className="filtered-label">
                                    Filtered
                                </span>
                            )}
                        </div>

                        {hasSelection ? (
                            <div className="selection-toolbar">
                                <span className="selected-count">
                                    <CheckCircleIcon />
                                    {selected.length} selected
                                </span>

                                <select
                                    value={bulkAction}
                                    onChange={(e) =>
                                        setBulkAction(e.target.value)
                                    }
                                    className="bulk-select"
                                >
                                    <option value="">
                                        Bulk action
                                    </option>

                                    <option value="activate">
                                        Activate
                                    </option>

                                    <option value="deactivate">
                                        Deactivate
                                    </option>

                                    <option value="feature">
                                        Mark featured
                                    </option>

                                    <option value="delete">
                                        Delete
                                    </option>
                                </select>

                                <button
                                    type="button"
                                    className="bulk-apply"
                                    onClick={applyBulk}
                                >
                                    Apply
                                </button>

                                <button
                                    type="button"
                                    className="cancel-selection"
                                    onClick={() => setSelected([])}
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <div className="toolbar-meta">
                                <span>
                                    Showing{" "}
                                    <strong>{talents?.from ?? 0}</strong>–
                                    <strong>{talents?.to ?? 0}</strong>
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Table */}

                    {talentRows.length > 0 ? (
                        <div className="table-wrapper">
                            <table className="talent-table">
                                <thead>
                                    <tr>
                                        <th className="checkbox-column">
                                            <input
                                                type="checkbox"
                                                checked={allChecked}
                                                onChange={(e) =>
                                                    toggleAll(
                                                        e.target.checked,
                                                    )
                                                }
                                            />
                                        </th>

                                        <th>Talent</th>

                                        <th>Category</th>

                                        <th>Level</th>

                                        <th>Language</th>

                                        <th>Status</th>

                                        <th className="actions-column">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {talentRows.map((talent) => {
                                        const status = (
                                            talent.status || "inactive"
                                        ).toLowerCase();

                                        return (
                                            <tr key={talent.id}>
                                                <td className="checkbox-column">
                                                    <input
                                                        type="checkbox"
                                                        checked={selected.includes(
                                                            talent.id,
                                                        )}
                                                        onChange={() =>
                                                            toggleOne(
                                                                talent.id,
                                                            )
                                                        }
                                                    />
                                                </td>

                                                {/* Talent */}

                                                <td>
                                                    <div className="talent-identity">
                                                        <div className="avatar-wrapper">
                                                            {talent.image ? (
                                                                <img
                                                                    src={
                                                                        talent.image
                                                                    }
                                                                    alt={
                                                                        talent.name
                                                                    }
                                                                    className="talent-avatar"
                                                                />
                                                            ) : (
                                                                <div className="talent-avatar-placeholder">
                                                                    {getInitials(
                                                                        talent.name,
                                                                    )}
                                                                </div>
                                                            )}

                                                            {status ===
                                                                "active" && (
                                                                <span className="online-indicator" />
                                                            )}
                                                        </div>

                                                        <div className="talent-details">
                                                            <div className="talent-name-row">
                                                                <Link
                                                                    href={routes.show(
                                                                        talent.id,
                                                                    )}
                                                                    className="talent-name"
                                                                >
                                                                    {talent.name ||
                                                                        "Unnamed talent"}
                                                                </Link>

                                                                {talent.featured && (
                                                                    <span className="featured-badge">
                                                                        <StarIcon
                                                                            size={
                                                                                10
                                                                            }
                                                                        />
                                                                        Featured
                                                                    </span>
                                                                )}
                                                            </div>

                                                            <div className="talent-contact">
                                                                {talent.email ||
                                                                    talent.phone ||
                                                                    "No contact information"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Category */}

                                                <td>
                                                    <div className="category-cell">
                                                        <span className="category-icon">
                                                            <LayersIcon
                                                                size={14}
                                                            />
                                                        </span>

                                                        <span>
                                                            {talent.category
                                                                ?.name ?? "—"}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* Level */}

                                                <td>
                                                    {talent.level ? (
                                                        <span
                                                            className={`level-badge level-${String(
                                                                talent.level,
                                                            ).toLowerCase()}`}
                                                        >
                                                            {cap(
                                                                talent.level,
                                                            )}
                                                        </span>
                                                    ) : (
                                                        <span className="muted">
                                                            Not specified
                                                        </span>
                                                    )}
                                                </td>

                                                {/* Language */}

                                                <td>
                                                    {talent.language ? (
                                                        <span className="language-value">
                                                            <GlobeIcon />
                                                            {talent.language}
                                                        </span>
                                                    ) : (
                                                        <span className="muted">
                                                            —
                                                        </span>
                                                    )}
                                                </td>

                                                {/* Status */}

                                                <td>
                                                    <StatusBadge
                                                        status={status}
                                                    />
                                                </td>

                                                {/* Actions */}

                                                <td className="actions-column">
                                                    <div className="row-actions">
                                                        <Link
                                                            href={routes.show(
                                                                talent.id,
                                                            )}
                                                            className="row-action view"
                                                            title="View profile"
                                                        >
                                                            <EyeIcon />
                                                        </Link>

                                                        <Link
                                                            href={routes.edit(
                                                                talent.id,
                                                            )}
                                                            className="row-action edit"
                                                            title="Edit profile"
                                                        >
                                                            <PencilIcon />
                                                        </Link>

                                                        <button
                                                            type="button"
                                                            className="row-action delete"
                                                            title="Delete profile"
                                                            onClick={() =>
                                                                destroyTalent(
                                                                    talent.id,
                                                                )
                                                            }
                                                        >
                                                            <TrashIcon />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <EmptyState
                            search={data.search}
                            hasFilters={activeFilterCount > 0}
                            onReset={resetFilters}
                            createRoute={routes.create}
                        />
                    )}

                    {/* Pagination */}

                    {talents?.last_page > 1 && (
                        <div className="pagination-bar">
                            <div className="pagination-info">
                                Showing{" "}
                                <strong>{talents.from}</strong> to{" "}
                                <strong>{talents.to}</strong> of{" "}
                                <strong>{talents.total}</strong> talent
                                profiles
                            </div>

                            <div className="pagination">
                                <PgLink
                                    href={pageUrl(
                                        routes,
                                        talents.current_page - 1,
                                    )}
                                    disabled={talents.current_page === 1}
                                >
                                    <ChevronLeftIcon />
                                </PgLink>

                                {pageNumbers.map((page) => (
                                    <PgLink
                                        key={page}
                                        href={pageUrl(routes, page)}
                                        active={
                                            page === talents.current_page
                                        }
                                    >
                                        {page}
                                    </PgLink>
                                ))}

                                <PgLink
                                    href={pageUrl(
                                        routes,
                                        talents.current_page + 1,
                                    )}
                                    disabled={
                                        talents.current_page ===
                                        talents.last_page
                                    }
                                >
                                    <ChevronRightIcon />
                                </PgLink>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </AdminLayout>
    );

    function pageUrl(r, page) {
        const params = new URLSearchParams();

        Object.entries(filters || {}).forEach(([key, value]) => {
            if (
                key !== "flash" &&
                value !== null &&
                value !== undefined &&
                value !== ""
            ) {
                params.set(key, value);
            }
        });

        params.set("page", page);

        return `${r.index()}?${params.toString()}`;
    }
}

/* ============================================================
   COMPONENTS
============================================================ */

function StatCard({
    label,
    value,
    description,
    icon,
    accent = false,
}) {
    return (
        <div className={`stat-card ${accent ? "stat-card-accent" : ""}`}>
            <div className="stat-top">
                <span className="stat-label">{label}</span>

                <span className="stat-icon">{icon}</span>
            </div>

            <div className="stat-value">
                {Number(value ?? 0).toLocaleString()}
            </div>

            <div className="stat-description">{description}</div>
        </div>
    );
}

function StatusBadge({ status }) {
    const normalized = status || "inactive";

    return (
        <span className={`status-badge status-${normalized}`}>
            <span className="status-dot" />

            {cap(normalized)}
        </span>
    );
}

function EmptyState({
    search,
    hasFilters,
    onReset,
    createRoute,
}) {
    return (
        <div className="empty-state">
            <div className="empty-illustration">
                <div className="empty-circle">
                    <TalentIcon size={28} />
                </div>

                <span className="empty-dot empty-dot-one" />
                <span className="empty-dot empty-dot-two" />
                <span className="empty-dot empty-dot-three" />
            </div>

            <h3>
                {search || hasFilters
                    ? "No talent profiles found"
                    : "Your talent registry is empty"}
            </h3>

            <p>
                {search || hasFilters
                    ? "Try changing your search or filter criteria."
                    : "Start building your talent network by adding your first profile."}
            </p>

            <div className="empty-actions">
                {(search || hasFilters) && (
                    <button
                        type="button"
                        className="secondary-button"
                        onClick={onReset}
                    >
                        <RefreshIcon />
                        Reset filters
                    </button>
                )}

                <Link href={createRoute()} className="primary-button">
                    <PlusIcon />
                    Add talent
                </Link>
            </div>
        </div>
    );
}

function PgLink({
    href,
    active = false,
    disabled = false,
    children,
}) {
    if (disabled) {
        return (
            <span className="pagination-button disabled">
                {children}
            </span>
        );
    }

    return (
        <Link
            href={href}
            preserveScroll
            className={`pagination-button ${
                active ? "active" : ""
            }`}
        >
            {children}
        </Link>
    );
}

/* ============================================================
   HELPERS
============================================================ */

function cap(value) {
    if (!value) return "";

    return value.charAt(0).toUpperCase() + value.slice(1);
}

function getInitials(name) {
    if (!name) return "?";

    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase();
}

/* ============================================================
   ICONS
============================================================ */

function TalentIcon({ size = 18 }) {
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
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0116 0" />
            <path d="M19 5v4M21 7h-4" />
        </svg>
    );
}

function PlusIcon() {
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
            <path d="M12 5v14M5 12h14" />
        </svg>
    );
}

function UsersIcon({ size = 16 }) {
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
            <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 00-3-3.87" />
            <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
    );
}

function CheckIcon({ size = 16 }) {
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
            <path d="M20 6L9 17l-5-5" />
        </svg>
    );
}

function CheckCircleIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12l2.5 2.5L16 9" />
        </svg>
    );
}

function GridIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
    );
}

function StarIcon({ size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}

function ConnectionIcon() {
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
            <path d="M18 8a6 6 0 01-6 6H6" />
            <path d="M6 18l-3-3 3-3" />
            <path d="M6 8a6 6 0 016-6h6" />
            <path d="M18 2l3 3-3 3" />
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
            <path d="M12 2l9 5-9 5-9-5 9-5z" />
            <path d="M3 12l9 5 9-5" />
            <path d="M3 17l9 5 9-5" />
        </svg>
    );
}

function SearchIcon() {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-4-4" />
        </svg>
    );
}

function FilterIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        >
            <path d="M4 6h16M7 12h10M10 18h4" />
        </svg>
    );
}

function ChevronDownIcon({ className = "" }) {
    return (
        <svg
            className={className}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

function ChevronIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M9 18l6-6-6-6" />
        </svg>
    );
}

function ChevronLeftIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M15 18l-6-6 6-6" />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M9 18l6-6-6-6" />
        </svg>
    );
}

function RefreshIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 11a8.1 8.1 0 00-15.5-2M4 5v4h4" />
            <path d="M4 13a8.1 8.1 0 0015.5 2M20 19v-4h-4" />
        </svg>
    );
}

function EyeIcon() {
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
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function PencilIcon() {
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
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 013 3L8 18l-4 1 1-4z" />
        </svg>
    );
}

function TrashIcon() {
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
            <path d="M4 7h16" />
            <path d="M10 11v6M14 11v6" />
            <path d="M6 7l1 14h10l1-14" />
            <path d="M9 7V4h6v3" />
        </svg>
    );
}

function GlobeIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a14 14 0 010 18" />
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
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                strokeDasharray="40 20"
            />
        </svg>
    );
}

/* ============================================================
   CSS
============================================================ */

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

.talent-admin-page {
    --brand: #5D89C8;
    --brand-dark: #4775B3;
    --brand-light: #EEF4FC;
    --brand-lighter: #F6F9FD;

    --ink: #172033;
    --ink-2: #39445A;
    --muted: #7C879A;
    --muted-2: #A5ADBB;

    --border: #E7EAF0;
    --border-light: #EFF1F5;

    --canvas: #F6F8FB;
    --white: #FFFFFF;

    --success: #198754;
    --success-bg: #EAF7F0;

    --warning: #B7791F;
    --warning-bg: #FFF6E4;

    --danger: #D64545;
    --danger-bg: #FFF0F0;

    --purple: #7556B5;
    --purple-bg: #F2EEFA;

    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    background: var(--canvas);
    min-height: 100%;
    padding: 30px 32px 45px;
}

.talent-admin-page *,
.talent-admin-page *::before,
.talent-admin-page *::after {
    box-sizing: border-box;
}

/* ============================================================
   FLASH
============================================================ */

.flash-message {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 16px;
    border-radius: 12px;
    margin-bottom: 22px;
}

.flash-success {
    background: var(--success-bg);
    border: 1px solid #CBE9D9;
    color: var(--success);
}

.flash-icon {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: #D7F1E2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flash-message strong {
    display: block;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 1px;
}

.flash-message span {
    display: block;
    font-size: 12px;
}

.flash-close {
    margin-left: auto;
    border: 0;
    background: transparent;
    color: currentColor;
    opacity: .55;
    font-size: 20px;
    cursor: pointer;
}

/* ============================================================
   HEADER
============================================================ */

.talent-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 25px;
    margin-bottom: 28px;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 12px;
}

.breadcrumb .current {
    color: var(--ink-2);
    font-weight: 600;
}

.breadcrumb svg {
    color: #B8BFCA;
}

.title-row {
    display: flex;
    align-items: center;
    gap: 13px;
}

.title-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: var(--brand-light);
    color: var(--brand);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #DDE8F7;
}

.title-row h1 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 25px;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: -.5px;
    color: var(--ink);
    margin: 0 0 5px;
}

.title-row p {
    margin: 0;
    font-size: 13px;
    color: var(--muted);
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 9px;
}

.primary-button,
.secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 40px;
    padding: 0 16px;
    border-radius: 9px;
    font-size: 12.5px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all .18s ease;
    white-space: nowrap;
}

.primary-button {
    background: var(--brand);
    border: 1px solid var(--brand);
    color: #fff;
    box-shadow: 0 3px 8px rgba(93,137,200,.18);
}

.primary-button:hover {
    background: var(--brand-dark);
    border-color: var(--brand-dark);
    color: #fff;
    transform: translateY(-1px);
}

.secondary-button {
    background: #fff;
    border: 1px solid var(--border);
    color: var(--ink-2);
}

.secondary-button:hover {
    border-color: #C7D3E5;
    background: var(--brand-lighter);
    color: var(--brand-dark);
}

/* ============================================================
   STAT CARDS
============================================================ */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 14px;
    margin-bottom: 20px;
}

.stat-card {
    position: relative;
    min-height: 135px;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 17px 18px;
    overflow: hidden;
    transition: transform .18s ease, box-shadow .18s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(24,39,75,.06);
}

.stat-card-accent {
    border-color: #D9E6F6;
    background: linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 100%);
}

.stat-card-accent::after {
    content: '';
    position: absolute;
    width: 70px;
    height: 70px;
    right: -25px;
    bottom: -25px;
    border-radius: 50%;
    background: var(--brand-light);
}

.stat-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.stat-label {
    color: var(--muted);
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .065em;
}

.stat-icon {
    width: 33px;
    height: 33px;
    border-radius: 9px;
    background: #F5F7FA;
    color: var(--ink-2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.stat-card-accent .stat-icon {
    background: var(--brand-light);
    color: var(--brand);
}

.stat-value {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 25px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -.6px;
    color: var(--ink);
    font-variant-numeric: tabular-nums;
}

.stat-description {
    color: var(--muted);
    font-size: 11.5px;
    margin-top: 8px;
}

/* ============================================================
   SEARCH
============================================================ */

.search-panel {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 14px;
    margin-bottom: 20px;
    padding: 13px;
}

.search-main {
    display: flex;
    gap: 9px;
}

.search-box {
    position: relative;
    flex: 1;
    height: 42px;
    display: flex;
    align-items: center;
    border: 1px solid var(--border);
    background: #FBFCFE;
    border-radius: 9px;
    color: var(--muted);
    transition: border-color .15s, box-shadow .15s;
}

.search-box:focus-within {
    border-color: var(--brand);
    background: #fff;
    box-shadow: 0 0 0 3px rgba(93,137,200,.10);
}

.search-box > svg {
    margin-left: 13px;
    flex-shrink: 0;
}

.search-box input {
    border: 0;
    outline: 0;
    background: transparent;
    width: 100%;
    height: 100%;
    padding: 0 36px 0 10px;
    color: var(--ink);
    font-family: inherit;
    font-size: 13px;
}

.search-box input::placeholder {
    color: #A2AAB7;
}

.clear-search {
    position: absolute;
    right: 10px;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 50%;
    background: #E9EDF3;
    color: var(--muted);
    cursor: pointer;
    line-height: 18px;
    font-size: 17px;
}

.filter-toggle,
.search-button {
    height: 42px;
    border-radius: 9px;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
}

.filter-toggle {
    min-width: 105px;
    padding: 0 13px;
    background: #fff;
    color: var(--ink-2);
    border: 1px solid var(--border);
}

.filter-toggle:hover,
.filter-toggle.active {
    color: var(--brand-dark);
    border-color: #C7D7EA;
    background: var(--brand-lighter);
}

.filter-toggle svg:last-child {
    transition: transform .2s ease;
}

.filter-toggle svg.rotate {
    transform: rotate(180deg);
}

.filter-count {
    min-width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--brand);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
}

.search-button {
    min-width: 92px;
    padding: 0 15px;
    background: var(--ink);
    color: #fff;
    border: 1px solid var(--ink);
}

.search-button:hover {
    background: #0E1420;
}

.search-button:disabled {
    opacity: .65;
    cursor: wait;
}

.advanced-filters {
    border-top: 1px solid var(--border-light);
    margin-top: 13px;
    padding-top: 14px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr)) auto;
    gap: 12px;
    align-items: end;
}

.filter-field label {
    display: block;
    color: var(--muted);
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .06em;
    margin-bottom: 6px;
}

.filter-field select {
    width: 100%;
    height: 38px;
    padding: 0 10px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: #FBFCFE;
    color: var(--ink-2);
    font-family: inherit;
    font-size: 12.5px;
    outline: none;
}

.filter-field select:focus {
    border-color: var(--brand);
}

.reset-button {
    height: 38px;
    padding: 0 13px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--border);
    background: #fff;
    border-radius: 8px;
    color: var(--muted);
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}

.reset-button:hover {
    color: var(--ink);
    background: #F7F8FA;
}

/* ============================================================
   TABLE CARD
============================================================ */

.talent-card {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 2px 7px rgba(23,32,51,.02);
}

.results-toolbar {
    min-height: 62px;
    padding: 11px 18px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
}

.results-heading {
    display: flex;
    align-items: center;
    gap: 8px;
}

.results-title {
    color: var(--ink);
    font-size: 13px;
    font-weight: 700;
}

.results-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 27px;
    height: 22px;
    padding: 0 7px;
    border-radius: 6px;
    background: var(--brand-light);
    color: var(--brand-dark);
    font-size: 10.5px;
    font-weight: 700;
}

.filtered-label {
    border: 1px solid #D9E4F3;
    color: var(--brand);
    background: #F8FBFF;
    border-radius: 20px;
    padding: 3px 8px;
    font-size: 9.5px;
    font-weight: 700;
}

.toolbar-meta {
    color: var(--muted);
    font-size: 11.5px;
}

.toolbar-meta strong {
    color: var(--ink-2);
}

.selection-toolbar {
    display: flex;
    align-items: center;
    gap: 7px;
}

.selected-count {
    height: 31px;
    padding: 0 9px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border-radius: 7px;
    background: var(--brand-light);
    color: var(--brand-dark);
    font-size: 11px;
    font-weight: 700;
}

.bulk-select {
    height: 31px;
    padding: 0 9px;
    border: 1px solid var(--border);
    background: #FBFCFE;
    color: var(--ink-2);
    border-radius: 7px;
    font-family: inherit;
    font-size: 11.5px;
    outline: none;
}

.bulk-apply,
.cancel-selection {
    height: 31px;
    padding: 0 11px;
    border-radius: 7px;
    font-family: inherit;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
}

.bulk-apply {
    border: 1px solid var(--ink);
    background: var(--ink);
    color: #fff;
}

.cancel-selection {
    border: 1px solid var(--border);
    background: #fff;
    color: var(--muted);
}

/* ============================================================
   TABLE
============================================================ */

.table-wrapper {
    overflow-x: auto;
}

.talent-table {
    width: 100%;
    min-width: 920px;
    border-collapse: collapse;
}

.talent-table thead {
    background: #FAFBFD;
}

.talent-table th {
    height: 43px;
    padding: 0 15px;
    border-bottom: 1px solid var(--border);
    color: #8993A4;
    font-size: 9.5px;
    font-weight: 700;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: .065em;
    white-space: nowrap;
}

.talent-table th:first-child,
.talent-table td:first-child {
    padding-left: 18px;
}

.talent-table th:last-child,
.talent-table td:last-child {
    padding-right: 18px;
}

.talent-table td {
    padding: 13px 15px;
    border-bottom: 1px solid var(--border-light);
    color: var(--ink-2);
    font-size: 12.5px;
    vertical-align: middle;
}

.talent-table tbody tr {
    transition: background .12s ease;
}

.talent-table tbody tr:hover {
    background: #FBFCFE;
}

.talent-table tbody tr:last-child td {
    border-bottom: 0;
}

.checkbox-column {
    width: 45px;
}

.actions-column {
    width: 125px;
    text-align: right !important;
}

input[type="checkbox"] {
    width: 15px;
    height: 15px;
    accent-color: var(--brand);
    cursor: pointer;
}

/* ============================================================
   TALENT IDENTITY
============================================================ */

.talent-identity {
    display: flex;
    align-items: center;
    gap: 11px;
    min-width: 230px;
}

.avatar-wrapper {
    position: relative;
    width: 39px;
    height: 39px;
    flex-shrink: 0;
}

.talent-avatar,
.talent-avatar-placeholder {
    width: 39px;
    height: 39px;
    border-radius: 10px;
}

.talent-avatar {
    object-fit: cover;
    border: 1px solid var(--border);
}

.talent-avatar-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #6D96CD, #4E79B7);
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .02em;
}

.online-indicator {
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #28A66A;
    border: 2px solid #fff;
}

.talent-details {
    min-width: 0;
}

.talent-name-row {
    display: flex;
    align-items: center;
    gap: 7px;
}

.talent-name {
    color: var(--ink);
    text-decoration: none;
    font-size: 12.5px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 190px;
}

.talent-name:hover {
    color: var(--brand-dark);
}

.talent-contact {
    color: var(--muted);
    font-size: 10.5px;
    margin-top: 3px;
    max-width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.featured-badge {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    height: 19px;
    padding: 0 6px;
    border-radius: 5px;
    background: var(--warning-bg);
    color: var(--warning);
    font-size: 8.5px;
    font-weight: 800;
}

/* ============================================================
   CATEGORY
============================================================ */

.category-cell {
    display: flex;
    align-items: center;
    gap: 7px;
    white-space: nowrap;
}

.category-icon {
    width: 26px;
    height: 26px;
    border-radius: 7px;
    background: #F5F7FA;
    color: #7C879A;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

/* ============================================================
   LEVEL
============================================================ */

.level-badge {
    display: inline-flex;
    align-items: center;
    height: 25px;
    padding: 0 9px;
    border-radius: 6px;
    font-size: 10.5px;
    font-weight: 700;
    white-space: nowrap;
}

.level-beginner {
    color: #56708F;
    background: #EFF4F9;
}

.level-intermediate {
    color: #607B42;
    background: #F0F6E9;
}

.level-advanced {
    color: #7562A3;
    background: #F2EFF9;
}

.level-expert {
    color: #9B6A22;
    background: #FFF5E5;
}

.muted {
    color: var(--muted-2);
    font-size: 11.5px;
}

.language-value {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--ink-2);
    font-size: 11.5px;
}

/* ============================================================
   STATUS
============================================================ */

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 25px;
    padding: 0 9px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 700;
    white-space: nowrap;
}

.status-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: currentColor;
}

.status-active {
    background: var(--success-bg);
    color: var(--success);
}

.status-inactive {
    background: #F2F3F5;
    color: #7F8998;
}

.status-pending {
    background: var(--warning-bg);
    color: var(--warning);
}

/* ============================================================
   ROW ACTIONS
============================================================ */

.row-actions {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
}

.row-action {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid var(--border);
    background: #fff;
    color: #8A94A5;
    cursor: pointer;
    text-decoration: none;
    transition: all .15s ease;
}

.row-action:hover {
    color: var(--brand-dark);
    border-color: #C9D8EA;
    background: var(--brand-light);
}

.row-action.edit:hover {
    color: var(--ink);
    border-color: #CCD2DB;
    background: #F5F6F8;
}

.row-action.delete:hover {
    color: var(--danger);
    border-color: #F0C9C9;
    background: var(--danger-bg);
}

/* ============================================================
   EMPTY
============================================================ */

.empty-state {
    padding: 75px 25px;
    text-align: center;
}

.empty-illustration {
    position: relative;
    width: 90px;
    height: 70px;
    margin: 0 auto 19px;
}

.empty-circle {
    width: 58px;
    height: 58px;
    border-radius: 17px;
    background: var(--brand-light);
    color: var(--brand);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.empty-dot {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #DDE8F6;
}

.empty-dot-one {
    top: 3px;
    left: 9px;
}

.empty-dot-two {
    right: 6px;
    top: 17px;
    width: 5px;
    height: 5px;
}

.empty-dot-three {
    left: 15px;
    bottom: 3px;
    width: 5px;
    height: 5px;
}

.empty-state h3 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: var(--ink);
    font-size: 15px;
    font-weight: 700;
    margin: 0 0 6px;
}

.empty-state p {
    color: var(--muted);
    font-size: 12.5px;
    margin: 0 auto 18px;
    max-width: 420px;
    line-height: 1.6;
}

.empty-actions {
    display: flex;
    justify-content: center;
    gap: 8px;
}

/* ============================================================
   PAGINATION
============================================================ */

.pagination-bar {
    min-height: 59px;
    border-top: 1px solid var(--border);
    padding: 11px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}

.pagination-info {
    color: var(--muted);
    font-size: 11.5px;
}

.pagination-info strong {
    color: var(--ink-2);
}

.pagination {
    display: flex;
    align-items: center;
    gap: 4px;
}

.pagination-button {
    min-width: 31px;
    height: 31px;
    padding: 0 8px;
    border-radius: 7px;
    border: 1px solid var(--border);
    background: #fff;
    color: var(--ink-2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 11.5px;
    font-weight: 600;
    transition: all .15s ease;
}

.pagination-button:hover {
    border-color: #C8D8EB;
    background: var(--brand-light);
    color: var(--brand-dark);
}

.pagination-button.active {
    background: var(--brand);
    border-color: var(--brand);
    color: #fff;
}

.pagination-button.disabled {
    opacity: .35;
    cursor: default;
}

/* ============================================================
   SPINNER
============================================================ */

.spinner {
    animation: spin .8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* ============================================================
   RESPONSIVE
============================================================ */

@media (max-width: 1250px) {
    .stats-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .advanced-filters {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 950px) {
    .talent-admin-page {
        padding: 24px 20px 35px;
    }

    .talent-header {
        align-items: flex-start;
        flex-direction: column;
    }

    .header-actions {
        width: 100%;
    }

    .header-actions .primary-button,
    .header-actions .secondary-button {
        flex: 1;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .advanced-filters {
        grid-template-columns: repeat(2, 1fr);
    }

    .filter-actions {
        grid-column: span 2;
    }
}

@media (max-width: 680px) {
    .talent-admin-page {
        padding: 18px 13px 28px;
    }

    .title-row h1 {
        font-size: 21px;
    }

    .title-row p {
        font-size: 12px;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr;
        gap: 9px;
    }

    .stat-card {
        min-height: 118px;
        padding: 14px;
    }

    .stat-value {
        font-size: 22px;
    }

    .stat-description {
        font-size: 10.5px;
    }

    .header-actions {
        flex-direction: column;
    }

    .header-actions .primary-button,
    .header-actions .secondary-button {
        width: 100%;
    }

    .search-main {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .search-box {
        grid-column: span 2;
    }

    .search-button,
    .filter-toggle {
        width: 100%;
    }

    .advanced-filters {
        grid-template-columns: 1fr;
    }

    .filter-actions {
        grid-column: auto;
    }

    .results-toolbar {
        align-items: flex-start;
        flex-direction: column;
    }

    .selection-toolbar {
        width: 100%;
        flex-wrap: wrap;
    }

    .pagination-bar {
        align-items: flex-start;
        flex-direction: column;
    }

    .pagination {
        width: 100%;
        justify-content: flex-end;
    }

    .empty-actions {
        flex-direction: column;
        align-items: stretch;
        max-width: 220px;
        margin: auto;
    }
}

@media (max-width: 420px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }

    .title-icon {
        width: 39px;
        height: 39px;
    }

    .breadcrumb {
        margin-bottom: 8px;
    }
}
`;