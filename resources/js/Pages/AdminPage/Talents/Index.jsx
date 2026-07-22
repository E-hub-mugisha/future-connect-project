import { useState, useMemo } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AppLayout';


export default function Index({ talents, categories, stats, filters }) {
    const routes = {
        create:  () => route('admin.talents.create'),
        index:   () => route('admin.talents.index'),
        bulk:    () => route('admin.talents.bulk'),
        show:    (id) => route('admin.talents.show', id),
        edit:    (id) => route('admin.talents.edit', id),
        destroy: (id) => route('admin.talents.destroy', id),
        connections: () => route('admin.connections')
    };

    const { data, setData, get, processing } = useForm({
        search:      filters?.search      ?? '',
        status:      filters?.status      ?? '',
        category_id: filters?.category_id ?? '',
        level:       filters?.level       ?? '',
        featured:    filters?.featured    ?? '',
    });

    const [selected, setSelected] = useState([]);
    const [bulkAction, setBulkAction] = useState('');

    const allChecked = talents.data.length > 0 && selected.length === talents.data.length;

    const toggleAll = (checked) => {
        setSelected(checked ? talents.data.map((t) => t.id) : []);
    };

    const toggleOne = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
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
        if (!bulkAction) return alert('Please select a bulk action.');
        if (selected.length === 0) return alert('Please select at least one skill.');
        if (bulkAction === 'delete' && !confirm('Delete selected skills?')) return;

        router.post(
            routes.bulk(),
            { action: bulkAction, ids: selected },
            { preserveScroll: true, onSuccess: () => setSelected([]) }
        );
    };

    const destroyTalent = (id) => {
        if (!confirm('Delete this skill?')) return;
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
                        <div className="eyebrow">Management</div>
                        <h1 className="page-title">Skills Registry</h1>
                        <p className="page-sub">Manage talent skills, categories, and levels</p>
                    </div>
                    <Link href={routes.create()} className="btn-accent">
                        <PlusIcon /> Add Skill
                    </Link>
                    <Link href={routes.connections()} className="btn-accent">
                        <UsersIcon /> Connections requests
                    </Link>
                </div>

                {/* Stat cards */}
                <div className="stat-grid">
                    <StatCard tone="accent" label="Total Skills" value={stats?.total} sub="All registered" icon={<GridIcon />} />
                    <StatCard tone="success" label="Active" value={stats?.active} sub="Currently live" icon={<CheckIcon />} />
                    <StatCard tone="gold" label="Featured" value={stats?.featured} sub="Highlighted profiles" icon={<StarIcon />} />
                    <StatCard tone="info" label="Matched" value={stats?.matched} sub="Successfully placed" icon={<RepeatIcon />} />
                    <StatCard tone="purple" label="Categories" value={stats?.categories} sub="Skill types" icon={<LayersIcon />} />
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
                                onChange={(e) => setData('search', e.target.value)}
                            />
                        </div>

                        <div className="filter-field">
                            <label className="filter-label">Status</label>
                            <select className="filter-input" value={data.status} onChange={(e) => setData('status', e.target.value)}>
                                <option value="">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>

                        <div className="filter-field">
                            <label className="filter-label">Category</label>
                            <select className="filter-input" value={data.category_id} onChange={(e) => setData('category_id', e.target.value)}>
                                <option value="">All Categories</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-field">
                            <label className="filter-label">Level</label>
                            <select className="filter-input" value={data.level} onChange={(e) => setData('level', e.target.value)}>
                                <option value="">All Levels</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>

                        <div className="filter-field filter-field--sm">
                            <label className="filter-label">Featured</label>
                            <select className="filter-input" value={data.featured} onChange={(e) => setData('featured', e.target.value)}>
                                <option value="">All</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>

                        <div className="filter-actions">
                            <button type="submit" className="btn-filter" disabled={processing}>Filter</button>
                            <button type="button" className="btn-reset" onClick={resetFilters}>Reset</button>
                        </div>
                    </div>
                </form>

                {/* Table card */}
                <div className="ui-card">
                    <div className="card-bar">
                        <span className="card-bar-label">
                            All Skills <span className="count-badge">{talents.total}</span>
                        </span>
                        <div className="bulk-row">
                            <select className="bulk-select" value={bulkAction} onChange={(e) => setBulkAction(e.target.value)}>
                                <option value="">Bulk action</option>
                                <option value="activate">Activate</option>
                                <option value="deactivate">Deactivate</option>
                                <option value="feature">Mark Featured</option>
                                <option value="delete">Delete</option>
                            </select>
                            <button className="btn-bulk-apply" onClick={applyBulk}>Apply</button>
                        </div>
                    </div>

                    {talents.data.length > 0 ? (
                        <div className="table-scroll">
                            <table className="ui-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: 44 }}>
                                            <input type="checkbox" checked={allChecked} onChange={(e) => toggleAll(e.target.checked)} />
                                        </th>
                                        <th>Skill</th>
                                        <th>Category</th>
                                        <th>Level</th>
                                        <th>Language</th>
                                        <th>Status</th>
                                        <th style={{ textAlign: 'right' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {talents.data.map((talent) => {
                                        const status = (talent.status || 'inactive').toLowerCase();
                                        return (
                                            <tr key={talent.id}>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        checked={selected.includes(talent.id)}
                                                        onChange={() => toggleOne(talent.id)}
                                                    />
                                                </td>
                                                <td>
                                                    <div className="skill-cell">
                                                        {talent.image ? (
                                                            <img src={talent.image} alt={talent.name} className="skill-avatar" />
                                                        ) : (
                                                            <div className="skill-avatar-placeholder">
                                                                {talent.name?.charAt(0)?.toUpperCase()}
                                                            </div>
                                                        )}
                                                        <div>
                                                            <div className="skill-name">
                                                                {talent.name}
                                                                {talent.featured && <span className="badge-featured">FEATURED</span>}
                                                            </div>
                                                            <div className="skill-meta">{talent.email || talent.phone || '—'}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="col-muted">{talent.category?.name ?? '—'}</td>
                                                <td>
                                                    {talent.level ? (
                                                        <span className="level-pill">{cap(talent.level)}</span>
                                                    ) : (
                                                        <span className="col-muted">—</span>
                                                    )}
                                                </td>
                                                <td className="col-muted">{talent.language ?? '—'}</td>
                                                <td>
                                                    <span className={`badge badge-${status}`}>
                                                        <span className="badge-dot" />
                                                        {cap(status)}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="action-group">
                                                        <Link href={routes.show(talent.id)} className="action-btn" title="View">
                                                            <EyeIcon />
                                                        </Link>
                                                        <Link href={routes.edit(talent.id)} className="action-btn btn-edit" title="Edit">
                                                            <PencilIcon />
                                                        </Link>
                                                        <button
                                                            type="button"
                                                            className="action-btn btn-del"
                                                            title="Delete"
                                                            onClick={() => destroyTalent(talent.id)}
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
                            <div className="empty-icon"><SparkleIcon /></div>
                            <h3>No skills found</h3>
                            <p>Try adjusting your filters or add a new skill.</p>
                        </div>
                    )}

                    {talents.last_page > 1 && (
                        <div className="pg-bar">
                            <span className="pg-info">
                                Showing {talents.from}–{talents.to} of {talents.total} skills
                            </span>
                            <div className="pg-links">
                                <PgLink disabled={talents.current_page === 1} href={pageUrl(routes, talents.current_page - 1)}>‹</PgLink>
                                {pageNumbers.map((pg) => (
                                    <PgLink key={pg} active={pg === talents.current_page} href={pageUrl(routes, pg)}>
                                        {pg}
                                    </PgLink>
                                ))}
                                <PgLink disabled={talents.current_page === talents.last_page} href={pageUrl(routes, talents.current_page + 1)}>›</PgLink>
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
            <div className="stat-value">{Number(value ?? 0).toLocaleString()}</div>
            <div className="stat-sub">{sub}</div>
            <div className="stat-icon">{icon}</div>
        </div>
    );
}

function PgLink({ href, active, disabled, children }) {
    if (disabled) return <span className="pg-btn disabled">{children}</span>;
    return (
        <Link href={href} className={`pg-btn ${active ? 'active' : ''}`} preserveScroll>
            {children}
        </Link>
    );
}

/* ── Inline icon set (no external icon dependency) ── */
function PlusIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
        </svg>
    );
}
function UsersIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );
}
function CheckIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
        </svg>
    );
}
function GridIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
    );
}
function StarIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}
function RepeatIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3" />
        </svg>
    );
}
function LayersIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
        </svg>
    );
}
function EyeIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}
function PencilIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
        </svg>
    );
}
function TrashIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
    );
}
function SparkleIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
    );
}

/* ── Design tokens & styles ──
   Modernized: softer neutral surface, refined radii/shadows, tighter type
   scale, tokenized status/level colors, sticky header, glassy stat icons. */
const css = `
[data-h-scope="skills"] {
    --accent:        #4F46E5;
    --accent-light:  #EEF0FE;
    --accent-dark:   #4338CA;
    --surface:       #FFFFFF;
    --canvas:        #F6F7FB;
    --text-hi:       #101323;
    --text-mid:      #565D72;
    --text-lo:       #9AA0B4;
    --border:        #E9EBF3;
    --border-med:    #DCDFEC;
    --success:       #0EA96B;
    --success-bg:    #E9FAF2;
    --danger:        #E1493F;
    --danger-bg:     #FDEEEC;
    --warning:       #D48806;
    --warning-bg:    #FFF6E5;
    --info:          #2F80ED;
    --info-bg:       #EBF3FE;
    --gold:          #C07A05;
    --gold-bg:       #FCF2DD;
    --purple:        #7C4DE0;
    --purple-bg:     #F3EEFC;
    --radius-lg:     16px;
    --radius-md:     10px;
    --radius-sm:     7px;
    --shadow-card:   0 1px 2px rgba(16,19,35,.04), 0 1px 8px rgba(16,19,35,.04);
    --shadow-hover:  0 8px 24px rgba(16,19,35,.08);
    font-family: inherit;
}

.skills-page { padding: 28px 32px; background: var(--canvas); }

.flash-success {
    background: var(--success-bg); border: 1px solid rgba(14,169,107,.22);
    color: #085A3C; border-radius: var(--radius-md); padding: 12px 18px;
    font-size: 13px; display: flex; align-items: center; gap: 9px;
}

.page-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; flex-wrap: wrap; margin-bottom: 24px; }
.eyebrow { font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin-bottom: 5px; }
.page-title { font-size: 24px; font-weight: 800; color: var(--text-hi); letter-spacing: -.5px; margin: 0; }
.page-sub { font-size: 13px; color: var(--text-lo); margin-top: 4px; }

.btn-accent {
    background: var(--accent); color: #fff; border: none;
    border-radius: 10px; font-size: 13px; font-weight: 600;
    padding: 10px 18px; display: inline-flex; align-items: center; gap: 7px;
    transition: background .18s, box-shadow .18s, transform .12s;
    text-decoration: none; cursor: pointer;
}
.btn-accent:hover { background: var(--accent-dark); color: #fff; box-shadow: 0 8px 20px rgba(79,70,229,.28); transform: translateY(-1px); }

.stat-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-bottom: 22px; }
@media (max-width: 1200px) { .stat-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 720px)  { .stat-grid { grid-template-columns: repeat(2, 1fr); } }

.stat-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 18px 20px 16px;
    position: relative; overflow: hidden; box-shadow: var(--shadow-card);
    transition: box-shadow .2s, transform .2s;
}
.stat-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-2px); }
.stat-card[data-tone="accent"] { --tone: var(--accent); --tone-bg: var(--accent-light); }
.stat-card[data-tone="success"] { --tone: var(--success); --tone-bg: var(--success-bg); }
.stat-card[data-tone="gold"] { --tone: var(--gold); --tone-bg: var(--gold-bg); }
.stat-card[data-tone="info"] { --tone: var(--info); --tone-bg: var(--info-bg); }
.stat-card[data-tone="purple"] { --tone: var(--purple); --tone-bg: var(--purple-bg); }
.stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--tone); }
.stat-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--text-lo); margin-bottom: 10px; }
.stat-value { font-size: 26px; font-weight: 800; color: var(--text-hi); letter-spacing: -.8px; line-height: 1; }
.stat-sub { font-size: 12px; color: var(--text-lo); margin-top: 6px; }
.stat-icon {
    position: absolute; right: 16px; top: 16px; width: 36px; height: 36px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    background: var(--tone-bg); color: var(--tone);
}

.filter-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 18px 20px; margin-bottom: 22px; box-shadow: var(--shadow-card); }
.filter-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr .8fr auto; gap: 14px; align-items: end; }
@media (max-width: 1100px) { .filter-grid { grid-template-columns: repeat(2, 1fr); } }
.filter-field--wide { grid-column: span 1; }
.filter-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: var(--text-lo); margin-bottom: 6px; display: block; }
.filter-input {
    border: 1px solid var(--border-med); border-radius: var(--radius-sm);
    padding: 9px 12px; font-size: 13px; color: var(--text-hi);
    background: #FBFBFE; outline: none; width: 100%; font-family: inherit;
    transition: border-color .15s, background .15s, box-shadow .15s;
}
.filter-input:focus { border-color: var(--accent); background: #fff; box-shadow: 0 0 0 3px rgba(79,70,229,.1); }
.filter-actions { display: flex; gap: 8px; }
.btn-filter {
    background: var(--accent); color: #fff; border: none; border-radius: var(--radius-sm);
    padding: 9px 18px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background .18s;
}
.btn-filter:hover { background: var(--accent-dark); }
.btn-filter:disabled { opacity: .6; cursor: default; }
.btn-reset {
    background: #F1F2F8; color: var(--text-mid); border: 1px solid var(--border); border-radius: var(--radius-sm);
    padding: 9px 16px; font-size: 13px; cursor: pointer; transition: background .15s;
}
.btn-reset:hover { background: #E7E9F2; color: var(--text-hi); }

.ui-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-card); }
.card-bar { padding: 14px 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.card-bar-label { font-size: 13px; font-weight: 600; color: var(--text-mid); }
.count-badge { background: var(--accent-light); color: var(--accent); border-radius: 6px; font-size: 11px; font-weight: 700; padding: 2px 8px; margin-left: 6px; }
.bulk-row { display: flex; gap: 8px; }
.bulk-select { background: #FBFBFE; border: 1px solid var(--border-med); color: var(--text-mid); border-radius: var(--radius-sm); padding: 7px 12px; font-size: 12.5px; outline: none; cursor: pointer; }
.bulk-select:focus { border-color: var(--accent); }
.btn-bulk-apply { background: #F1F2F8; border: 1px solid var(--border); color: var(--text-mid); border-radius: var(--radius-sm); padding: 7px 14px; font-size: 12.5px; font-weight: 600; cursor: pointer; transition: all .15s; }
.btn-bulk-apply:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

.table-scroll { overflow-x: auto; }
.ui-table { width: 100%; border-collapse: collapse; }
.ui-table thead tr { background: #FAFAFD; }
.ui-table thead th { padding: 11px 18px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--text-lo); white-space: nowrap; text-align: left; border-bottom: 1px solid var(--border); position: sticky; top: 0; background: #FAFAFD; z-index: 1; }
.ui-table thead th:first-child { padding-left: 20px; }
.ui-table tbody tr { border-bottom: 1px solid #F1F2F7; transition: background .12s; }
.ui-table tbody tr:last-child { border-bottom: none; }
.ui-table tbody tr:hover { background: #FAFAFD; }
.ui-table tbody td { padding: 12px 18px; font-size: 13.5px; color: var(--text-mid); vertical-align: middle; }
.ui-table tbody td:first-child { padding-left: 20px; }
.col-muted { color: var(--text-lo); font-size: 13px; }

.skill-cell { display: flex; align-items: center; gap: 11px; }
.skill-avatar { width: 36px; height: 36px; border-radius: 9px; object-fit: cover; border: 1.5px solid var(--border); flex-shrink: 0; }
.skill-avatar-placeholder { width: 36px; height: 36px; border-radius: 9px; background: var(--accent-light); color: var(--accent); font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.skill-name { font-weight: 600; color: var(--text-hi); font-size: 13.5px; }
.skill-meta { font-size: 11.5px; color: var(--text-lo); margin-top: 2px; }

.badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 700; white-space: nowrap; }
.badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.badge-active { background: var(--success-bg); color: var(--success); }
.badge-inactive { background: #F1F2F7; color: var(--text-lo); }
.badge-pending { background: var(--warning-bg); color: var(--warning); }
.badge-featured { background: var(--gold-bg); color: var(--gold); border-radius: 5px; font-size: 10px; font-weight: 700; letter-spacing: .04em; padding: 2px 7px; margin-left: 6px; }
.level-pill { display: inline-block; padding: 3px 9px; border-radius: 6px; font-size: 11px; font-weight: 700; background: var(--info-bg); color: var(--info); }

input[type="checkbox"] { width: 15px; height: 15px; accent-color: var(--accent); cursor: pointer; }

.action-group { display: flex; gap: 5px; justify-content: flex-end; }
.action-btn { width: 30px; height: 30px; border-radius: var(--radius-sm); border: 1px solid var(--border); background: transparent; color: var(--text-lo); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: all .15s; text-decoration: none; }
.action-btn:hover { background: var(--accent-light); color: var(--accent); border-color: #C9CDF9; }
.action-btn.btn-edit:hover { background: var(--warning-bg); color: var(--warning); border-color: #F0D28C; }
.action-btn.btn-del:hover { background: var(--danger-bg); color: var(--danger); border-color: #F3B4AE; }

.pg-bar { padding: 13px 20px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
.pg-info { font-size: 12.5px; color: var(--text-lo); }
.pg-links { display: flex; gap: 4px; }
.pg-btn { width: 30px; height: 30px; border-radius: var(--radius-sm); border: 1px solid var(--border); background: #fff; color: var(--text-mid); font-size: 12.5px; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; transition: all .15s; cursor: pointer; }
.pg-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }
.pg-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); font-weight: 700; }
.pg-btn.disabled { opacity: .35; pointer-events: none; }

.empty-state { text-align: center; padding: 64px 24px; }
.empty-icon { width: 52px; height: 52px; border-radius: 50%; background: #F1F2F7; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 14px; color: var(--text-lo); }
.empty-state h3 { font-size: 14px; font-weight: 700; color: var(--text-mid); margin-bottom: 5px; }
.empty-state p { font-size: 13px; color: var(--text-lo); }

@media (max-width: 900px) {
    .ui-table th:nth-child(4), .ui-table th:nth-child(5),
    .ui-table td:nth-child(4), .ui-table td:nth-child(5) { display: none; }
}
`;
