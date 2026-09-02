import { useState, useMemo } from "react";
import { Head, Link, useForm, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AppLayout";

export default function Index({ talents, categories, stats, filters }) {
    const routes = {
        create: () => route("admin.talents.create"),
        index: () => route("admin.talents.index"),
        bulk: () => route("admin.talents.bulk"),
        show: (id) => route("admin.talents.show", id),
        edit: (id) => route("admin.talents.edit", id),
        destroy: (id) => route("admin.talents.destroy", id),
        connections: () => route("admin.connections"),
    };

    const { data, setData, get, processing } = useForm({
        search: filters?.search ?? "",
        status: filters?.status ?? "",
        category_id: filters?.category_id ?? "",
        level: filters?.level ?? "",
        featured: filters?.featured ?? "",
    });

    const [selected, setSelected] = useState([]);
    const [bulkAction, setBulkAction] = useState("");

    const allChecked =
        talents.data.length > 0 && selected.length === talents.data.length;

    const toggleAll = (checked) => {
        setSelected(checked ? talents.data.map((t) => t.id) : []);
    };

    const toggleOne = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
        );
    };

    const submitFilters = (e) => {
        e.preventDefault();
        get(routes.index(), { preserveState: true, preserveScroll: true });
    };

    const resetFilters = () => {
        router.get(routes.index(), {}, { preserveState: false });
    };

    const applyBulk = () => {
        if (!bulkAction) return alert("Please select a bulk action.");
        if (selected.length === 0)
            return alert("Please select at least one skill.");
        if (bulkAction === "delete" && !confirm("Delete selected skills?"))
            return;

        router.post(
            routes.bulk(),
            { action: bulkAction, ids: selected },
            { preserveScroll: true, onSuccess: () => setSelected([]) },
        );
    };

    const destroyTalent = (id) => {
        if (!confirm("Delete this skill?")) return;
        router.delete(routes.destroy(id), { preserveScroll: true });
    };

    const pageNumbers = useMemo(() => {
        if (!talents.last_page || talents.last_page <= 1) return [];
        const cur = talents.current_page;
        const start = Math.max(1, cur - 2);
        const end = Math.min(talents.last_page, cur + 2);
        const range = [];
        for (let i = start; i <= end; i++) range.push(i);
        return range;
    }, [talents.current_page, talents.last_page]);

    return (
        <AdminLayout>
            <Head title="Skills Management" />
            <style>{css}</style>

            <div data-h-scope="skills" className="skills-page">
                {/* Flash */}
                {filters?.flash?.success && (
                    <div className="flash-success mb-4">
                        <CheckIcon />
                        {filters.flash.success}
                    </div>
                )}

                {/* Header */}
                <div className="page-head">
                    <div>
                        <div className="page-title">
                            <span className="title-mark" />
                            Skills registry
                        </div>
                        <p className="page-sub">
                            Manage talent skills, categories, and levels
                        </p>
                    </div>
                    <div className="head-actions">
                        <Link
                            href={routes.connections()}
                            className="btn-outline"
                        >
                            <UsersIcon /> Connections requests
                        </Link>
                        <Link href={routes.create()} className="btn-accent">
                            <PlusIcon /> Add Skill
                        </Link>
                    </div>
                </div>

                {/* Stat cards */}
                <div className="stat-grid">
                    <StatCard
                        tone="neutral"
                        label="Total Skills"
                        value={stats?.total}
                        sub="All registered"
                        icon={<GridIcon />}
                    />
                    <StatCard
                        tone="accent"
                        label="Active"
                        value={stats?.active}
                        sub="Currently live"
                        icon={<CheckIcon />}
                    />
                    <StatCard
                        tone="neutral"
                        label="Featured"
                        value={stats?.featured}
                        sub="Highlighted profiles"
                        icon={<StarIcon />}
                    />
                    <StatCard
                        tone="neutral"
                        label="Matched"
                        value={stats?.matched}
                        sub="Successfully placed"
                        icon={<RepeatIcon />}
                    />
                    <StatCard
                        tone="neutral"
                        label="Categories"
                        value={stats?.categories}
                        sub="Skill types"
                        icon={<LayersIcon />}
                    />
                </div>

                {/* Filter bar */}
                <form onSubmit={submitFilters} className="filter-card">
                    <div className="filter-grid">
                        <div className="filter-field filter-field--wide">
                            <label className="filter-label">Search</label>
                            <input
                                type="text"
                                className="filter-input"
                                placeholder="Name, email, phone…"
                                value={data.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                            />
                        </div>

                        <div className="filter-field">
                            <label className="filter-label">Status</label>
                            <select
                                className="filter-input"
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                            >
                                <option value="">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>

                        <div className="filter-field">
                            <label className="filter-label">Category</label>
                            <select
                                className="filter-input"
                                value={data.category_id}
                                onChange={(e) =>
                                    setData("category_id", e.target.value)
                                }
                            >
                                <option value="">All Categories</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-field">
                            <label className="filter-label">Level</label>
                            <select
                                className="filter-input"
                                value={data.level}
                                onChange={(e) =>
                                    setData("level", e.target.value)
                                }
                            >
                                <option value="">All Levels</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">
                                    Intermediate
                                </option>
                                <option value="advanced">Advanced</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>

                        <div className="filter-field filter-field--sm">
                            <label className="filter-label">Featured</label>
                            <select
                                className="filter-input"
                                value={data.featured}
                                onChange={(e) =>
                                    setData("featured", e.target.value)
                                }
                            >
                                <option value="">All</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>

                        <div className="filter-actions">
                            <button
                                type="submit"
                                className="btn-filter"
                                disabled={processing}
                            >
                                Filter
                            </button>
                            <button
                                type="button"
                                className="btn-reset"
                                onClick={resetFilters}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </form>

                {/* Table card */}
                <div className="ui-card">
                    <div className="card-bar">
                        <span className="card-bar-label">
                            All Skills{" "}
                            <span className="count-badge">{talents.total}</span>
                        </span>
                        <div className="bulk-row">
                            <select
                                className="bulk-select"
                                value={bulkAction}
                                onChange={(e) => setBulkAction(e.target.value)}
                            >
                                <option value="">Bulk action</option>
                                <option value="activate">Activate</option>
                                <option value="deactivate">Deactivate</option>
                                <option value="feature">Mark Featured</option>
                                <option value="delete">Delete</option>
                            </select>
                            <button
                                className="btn-bulk-apply"
                                onClick={applyBulk}
                            >
                                Apply
                            </button>
                        </div>
                    </div>

                    {talents.data.length > 0 ? (
                        <div className="table-scroll">
                            <table className="ui-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: 44 }}>
                                            <input
                                                type="checkbox"
                                                checked={allChecked}
                                                onChange={(e) =>
                                                    toggleAll(e.target.checked)
                                                }
                                            />
                                        </th>
                                        <th>Skill</th>
                                        <th>Category</th>
                                        <th>Level</th>
                                        <th>Language</th>
                                        <th>Status</th>
                                        <th style={{ textAlign: "right" }}>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {talents.data.map((talent) => {
                                        const status = (
                                            talent.status || "inactive"
                                        ).toLowerCase();
                                        return (
                                            <tr key={talent.id}>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        checked={selected.includes(
                                                            talent.id,
                                                        )}
                                                        onChange={() =>
                                                            toggleOne(talent.id)
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <div className="skill-cell">
                                                        {talent.image ? (
                                                            <img
                                                                src={
                                                                    talent.image
                                                                }
                                                                alt={
                                                                    talent.name
                                                                }
                                                                className="skill-avatar"
                                                            />
                                                        ) : (
                                                            <div className="skill-avatar-placeholder">
                                                                {talent.name
                                                                    ?.charAt(0)
                                                                    ?.toUpperCase()}
                                                            </div>
                                                        )}
                                                        <div>
                                                            <div className="skill-name">
                                                                {talent.name}
                                                                {talent.featured && (
                                                                    <span className="badge-featured">
                                                                        <StarIcon
                                                                            size={
                                                                                9
                                                                            }
                                                                        />{" "}
                                                                        Featured
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="skill-meta">
                                                                {talent.email ||
                                                                    talent.phone ||
                                                                    "—"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="col-muted">
                                                    {talent.category?.name ??
                                                        "—"}
                                                </td>
                                                <td>
                                                    {talent.level ? (
                                                        <span className="level-pill">
                                                            {cap(talent.level)}
                                                        </span>
                                                    ) : (
                                                        <span className="col-muted">
                                                            —
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="col-muted">
                                                    {talent.language ?? "—"}
                                                </td>
                                                <td>
                                                    <span
                                                        className={`badge badge-${status}`}
                                                    >
                                                        <span className="badge-dot" />
                                                        {cap(status)}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="action-group">
                                                        <Link
                                                            href={routes.show(
                                                                talent.id,
                                                            )}
                                                            className="action-btn"
                                                            title="View"
                                                        >
                                                            <EyeIcon />
                                                        </Link>
                                                        <Link
                                                            href={routes.edit(
                                                                talent.id,
                                                            )}
                                                            className="action-btn btn-edit"
                                                            title="Edit"
                                                        >
                                                            <PencilIcon />
                                                        </Link>
                                                        <button
                                                            type="button"
                                                            className="action-btn btn-del"
                                                            title="Delete"
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
                        <div className="empty-state">
                            <div className="empty-icon">
                                <SparkleIcon />
                            </div>
                            <h3>No skills found</h3>
                            <p>
                                Try adjusting your filters or add a new skill.
                            </p>
                        </div>
                    )}

                    {talents.last_page > 1 && (
                        <div className="pg-bar">
                            <span className="pg-info">
                                Showing {talents.from}–{talents.to} of{" "}
                                {talents.total} skills
                            </span>
                            <div className="pg-links">
                                <PgLink
                                    disabled={talents.current_page === 1}
                                    href={pageUrl(
                                        routes,
                                        talents.current_page - 1,
                                    )}
                                >
                                    ‹
                                </PgLink>
                                {pageNumbers.map((pg) => (
                                    <PgLink
                                        key={pg}
                                        active={pg === talents.current_page}
                                        href={pageUrl(routes, pg)}
                                    >
                                        {pg}
                                    </PgLink>
                                ))}
                                <PgLink
                                    disabled={
                                        talents.current_page ===
                                        talents.last_page
                                    }
                                    href={pageUrl(
                                        routes,
                                        talents.current_page + 1,
                                    )}
                                >
                                    ›
                                </PgLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );

    function pageUrl(r, page) {
        const params = new URLSearchParams({ ...filters, page });
        return `${r.index()}?${params.toString()}`;
    }
}

function cap(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

function StatCard({ tone, label, value, sub, icon }) {
    return (
        <div className="stat-card" data-tone={tone}>
            <div className="stat-label">{label}</div>
            <div className="stat-value">
                {Number(value ?? 0).toLocaleString()}
            </div>
            <div className="stat-sub">{sub}</div>
            <div className="stat-icon">{icon}</div>
        </div>
    );
}

function PgLink({ href, active, disabled, children }) {
    if (disabled) return <span className="pg-btn disabled">{children}</span>;
    return (
        <Link
            href={href}
            className={`pg-btn ${active ? "active" : ""}`}
            preserveScroll
        >
            {children}
        </Link>
    );
}

/* ── Inline icon set (no external icon dependency) ── */
function PlusIcon() {
    return (
        <svg
            width="14"
            height="14"
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
function UsersIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        >
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );
}
function CheckIcon() {
    return (
        <svg
            width="16"
            height="16"
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
function GridIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}
function RepeatIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3" />
        </svg>
    );
}
function LayersIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
        </svg>
    );
}
function EyeIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    );
}
function PencilIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
            />
        </svg>
    );
}
function TrashIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
        </svg>
    );
}
function SparkleIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
            />
        </svg>
    );
}

/* ── Design tokens & styles: monochrome + single green accent, shared with Users/Profile ── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

[data-h-scope="skills"] {
    --ink:          #0A0A0A;
    --ink-2:        #45474A;
    --ink-faint:    #90928F;
    --line:         #E2E2DF;
    --line-soft:    #EEEEEB;
    --canvas:       #F5F5F3;
    --surface:      #FFFFFF;
    --surface-alt:  #FAFAF8;

    --accent:       #00A667;
    --accent-ink:   #00814F;
    --accent-soft:  #E3F5EC;

    --radius-lg: 12px;
    --radius-md: 10px;
    --radius-sm: 7px;

    font-family: var(--font-sans, 'Inter', sans-serif);
}

.skills-page { padding: 28px 32px; background: var(--canvas); }

.flash-success {
    background: var(--accent-soft); border: 1px solid var(--accent);
    color: var(--accent-ink); border-radius: var(--radius-md); padding: 12px 18px;
    font-size: 13px; display: flex; align-items: center; gap: 9px;
}

.page-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; flex-wrap: wrap; margin-bottom: 24px; }
.page-title {
    font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 600; color: var(--ink);
    display: flex; align-items: center; gap: 10px; margin: 0;
}
.title-mark { width: 8px; height: 8px; background: var(--accent); flex-shrink: 0; transform: rotate(45deg); }
.page-sub { font-size: 13px; color: var(--ink-faint); margin-top: 4px; margin-left: 18px; }
.head-actions { display: flex; gap: 10px; }

.btn-accent {
    background: var(--accent); color: #fff; border: none;
    border-radius: 8px; font-size: 13px; font-weight: 500;
    padding: 10px 18px; display: inline-flex; align-items: center; gap: 7px;
    transition: background .18s; text-decoration: none; cursor: pointer;
}
.btn-accent:hover { background: var(--accent-ink); color: #fff; }

.btn-outline {
    background: var(--surface); color: var(--ink); border: 1px solid var(--ink);
    border-radius: 8px; font-size: 13px; font-weight: 500;
    padding: 9px 18px; display: inline-flex; align-items: center; gap: 7px;
    transition: all .18s; text-decoration: none; cursor: pointer;
}
.btn-outline:hover { background: var(--ink); color: #fff; }

.stat-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-bottom: 22px; }
@media (max-width: 1200px) { .stat-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 720px)  { .stat-grid { grid-template-columns: repeat(2, 1fr); } }

.stat-card {
    background: var(--surface); border: 1px solid var(--line);
    border-radius: var(--radius-lg); padding: 18px 20px 16px;
    position: relative; overflow: hidden;
}
.stat-card[data-tone="accent"]  { --tone: var(--accent); --tone-bg: var(--accent-soft); }
.stat-card[data-tone="neutral"] { --tone: var(--ink); --tone-bg: var(--surface-alt); }
.stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--tone); opacity: .8; }
.stat-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--ink-faint); margin-bottom: 10px; }
.stat-value { font-family: 'Space Grotesk', sans-serif; font-size: 26px; font-weight: 700; color: var(--ink); letter-spacing: -.4px; line-height: 1; font-variant-numeric: tabular-nums; }
.stat-sub { font-size: 12px; color: var(--ink-faint); margin-top: 6px; }
.stat-icon {
    position: absolute; right: 16px; top: 16px; width: 34px; height: 34px; border-radius: 9px;
    display: flex; align-items: center; justify-content: center;
    background: var(--tone-bg); color: var(--tone);
}

.filter-card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 18px 20px; margin-bottom: 22px; }
.filter-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr .8fr auto; gap: 14px; align-items: end; }
@media (max-width: 1100px) { .filter-grid { grid-template-columns: repeat(2, 1fr); } }
.filter-field--wide { grid-column: span 1; }
.filter-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .07em; color: var(--ink-faint); margin-bottom: 6px; display: block; }
.filter-input {
    border: 1px solid var(--line); border-radius: var(--radius-sm);
    padding: 9px 12px; font-size: 13px; color: var(--ink);
    background: var(--surface-alt); outline: none; width: 100%; font-family: inherit;
    transition: border-color .15s, background .15s, box-shadow .15s;
}
.filter-input:focus { border-color: var(--accent); background: var(--surface); box-shadow: 0 0 0 3px rgba(0,166,103,.12); }
.filter-actions { display: flex; gap: 8px; }
.btn-filter {
    background: var(--ink); color: #fff; border: none; border-radius: var(--radius-sm);
    padding: 9px 18px; font-size: 13px; font-weight: 500; cursor: pointer; transition: background .18s;
}
.btn-filter:hover { background: #000; }
.btn-filter:disabled { opacity: .6; cursor: default; }
.btn-reset {
    background: var(--surface-alt); color: var(--ink-2); border: 1px solid var(--line); border-radius: var(--radius-sm);
    padding: 9px 16px; font-size: 13px; cursor: pointer; transition: background .15s;
}
.btn-reset:hover { background: var(--line-soft); color: var(--ink); }

.ui-card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
.card-bar { padding: 14px 20px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.card-bar-label { font-size: 13px; font-weight: 600; color: var(--ink-2); }
.count-badge { background: var(--accent-soft); color: var(--accent-ink); border-radius: 6px; font-size: 11px; font-weight: 600; padding: 2px 8px; margin-left: 6px; font-variant-numeric: tabular-nums; }
.bulk-row { display: flex; gap: 8px; }
.bulk-select { background: var(--surface-alt); border: 1px solid var(--line); color: var(--ink-2); border-radius: var(--radius-sm); padding: 7px 12px; font-size: 12.5px; outline: none; cursor: pointer; }
.bulk-select:focus { border-color: var(--accent); }
.btn-bulk-apply { background: var(--surface-alt); border: 1px solid var(--line); color: var(--ink-2); border-radius: var(--radius-sm); padding: 7px 14px; font-size: 12.5px; font-weight: 600; cursor: pointer; transition: all .15s; }
.btn-bulk-apply:hover { border-color: var(--ink); color: #fff; background: var(--ink); }

.table-scroll { overflow-x: auto; }
.ui-table { width: 100%; border-collapse: collapse; }
.ui-table thead tr { background: var(--surface-alt); }
.ui-table thead th { padding: 11px 18px; font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .07em; color: var(--ink-faint); white-space: nowrap; text-align: left; border-bottom: 1px solid var(--line); position: sticky; top: 0; background: var(--surface-alt); z-index: 1; }
.ui-table thead th:first-child { padding-left: 20px; }
.ui-table tbody tr { border-bottom: 1px solid var(--line-soft); transition: background .12s; }
.ui-table tbody tr:last-child { border-bottom: none; }
.ui-table tbody tr:hover { background: var(--surface-alt); }
.ui-table tbody td { padding: 12px 18px; font-size: 13.5px; color: var(--ink-2); vertical-align: middle; }
.ui-table tbody td:first-child { padding-left: 20px; }
.col-muted { color: var(--ink-faint); font-size: 13px; }

.skill-cell { display: flex; align-items: center; gap: 11px; }
.skill-avatar { width: 36px; height: 36px; border-radius: 9px; object-fit: cover; border: 1px solid var(--line); flex-shrink: 0; }
.skill-avatar-placeholder { width: 36px; height: 36px; border-radius: 9px; background: var(--ink); color: #fff; font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.skill-name { font-weight: 600; color: var(--ink); font-size: 13.5px; display: flex; align-items: center; }
.skill-meta { font-size: 11.5px; color: var(--ink-faint); margin-top: 2px; }

.badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 600; white-space: nowrap; }
.badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.badge-active   { background: var(--accent-soft); color: var(--accent-ink); }
.badge-inactive { background: var(--surface-alt); color: var(--ink-faint); border: 1px solid var(--line); }
.badge-pending  { background: var(--surface-alt); color: var(--ink-2); border: 1px dashed var(--ink-2); }
.badge-featured { display: inline-flex; align-items: center; gap: 4px; background: var(--surface); color: var(--ink); border: 1px solid var(--ink); border-radius: 5px; font-size: 10px; font-weight: 700; letter-spacing: .03em; padding: 2px 8px; margin-left: 8px; }
.level-pill { display: inline-block; padding: 3px 9px; border-radius: 6px; font-size: 11px; font-weight: 600; background: var(--surface-alt); color: var(--ink-2); border: 1px solid var(--line); }

input[type="checkbox"] { width: 15px; height: 15px; accent-color: var(--accent); cursor: pointer; }

.action-group { display: flex; gap: 5px; justify-content: flex-end; }
.action-btn { width: 30px; height: 30px; border-radius: var(--radius-sm); border: 1px solid var(--line); background: var(--surface); color: var(--ink-faint); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all .15s; text-decoration: none; }
.action-btn:hover { background: var(--accent-soft); color: var(--accent-ink); border-color: var(--accent); }
.action-btn.btn-edit:hover { background: var(--ink); color: #fff; border-color: var(--ink); }
.action-btn.btn-del { border-style: dashed; }
.action-btn.btn-del:hover { background: var(--ink); color: #fff; border-color: var(--ink); border-style: solid; }

.pg-bar { padding: 13px 20px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
.pg-info { font-size: 12.5px; color: var(--ink-faint); }
.pg-links { display: flex; gap: 4px; }
.pg-btn { width: 30px; height: 30px; border-radius: var(--radius-sm); border: 1px solid var(--line); background: var(--surface); color: var(--ink-2); font-size: 12.5px; font-variant-numeric: tabular-nums; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; transition: all .15s; cursor: pointer; }
.pg-btn:hover { border-color: var(--accent); color: var(--accent-ink); background: var(--accent-soft); }
.pg-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); font-weight: 600; }
.pg-btn.disabled { opacity: .35; pointer-events: none; }

.empty-state { text-align: center; padding: 64px 24px; }
.empty-icon { width: 52px; height: 52px; border-radius: 50%; background: var(--surface-alt); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 14px; color: var(--ink-faint); }
.empty-state h3 { font-size: 14px; font-weight: 700; color: var(--ink-2); margin-bottom: 5px; }
.empty-state p { font-size: 13px; color: var(--ink-faint); }

@media (max-width: 900px) {
    .ui-table th:nth-child(4), .ui-table th:nth-child(5),
    .ui-table td:nth-child(4), .ui-table td:nth-child(5) { display: none; }
}
`;
