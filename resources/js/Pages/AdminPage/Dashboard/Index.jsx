import { Head } from '@inertiajs/react';
import {
    ResponsiveContainer,
    BarChart, Bar,
    PieChart, Pie, Cell,
    LineChart, Line,
    CartesianGrid, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';
import AppLayout from '@/Layouts/AppLayout';

/**
 * Admin Dashboard — Talent Platform (Bootstrap 5 edition)
 *
 * Drop-in Inertia page. Expects the DashboardController@index props:
 * kpis, talentsByCategory, talentsByLevel, signupsOverTime,
 * courseEnrollments, quickHiresByStatus, recruitmentsByStatus,
 * topRatedTalents, skillsByCategory
 *
 * npm dependencies:
 *   npm install recharts bootstrap
 *
 * This component loads Bootstrap 5 + Google Fonts from CDN via <link> tags
 * in the <Head>, so no build-step changes are required. If you already
 * import bootstrap/dist/css/bootstrap.min.css globally in app.jsx, you can
 * safely remove the CDN <link> below to avoid loading it twice.
 */

// Five accent hues, one per talent category — echoes the geometric
// triangle motif used in the header strip.
const PALETTE = ['#00a667', '#d9a441', '#c9683f', '#3f8fc9', '#8b6fc9'];

const STATUS_COLORS = {
    pending: '#d9a441',
    active: '#00a667',
    matched: '#00a667',
    contacted: '#3f8fc9',
    in_progress: '#3f8fc9',
    completed: '#00a667',
    closed: '#7f9a9d',
    cancelled: '#c9683f',
    canceled: '#c9683f',
    rejected: '#c9683f',
};

function statusColor(status, fallbackIndex = 0) {
    return STATUS_COLORS[status] ?? PALETTE[fallbackIndex % PALETTE.length];
}

function formatLabel(value) {
    return value
        ?.toString()
        .split('_')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}

function initials(name) {
    if (!name) return '—';
    return name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join('');
}

/* ── Inline icon set for KPI cards ── */
const Icon = {
    Users: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
            <path d="M16.5 8.5a3.2 3.2 0 1 1 0 6.4M22 20c0-2.8-1.8-5.1-4.3-6" />
        </svg>
    ),
    Check: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="m20 7-11 11-5-5" />
        </svg>
    ),
    Book: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
        </svg>
    ),
    Clock: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
        </svg>
    ),
    Bolt: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M13 2 3 14h7l-1 8 11-13h-7l1-7Z" />
        </svg>
    ),
    Star: (p) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
            <path d="M12 2.5 15 9l7 1-5.1 5 1.2 7L12 18.8 5.9 22l1.2-7L2 10l7-1 3-6.5Z" />
        </svg>
    ),
    Inbox: (p) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
            <path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.5 5h13l3.5 7v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7l3.5-7Z" />
        </svg>
    ),
};

/* ── Scoped theme tokens, layered on top of Bootstrap's utility classes ── */
const ThemeStyles = () => (
    <style>{`
        .fc-dash {
            --bg: #f4f7f7;
            --panel: #ffffff;
            --panel-border: rgba(14,22,24,0.08);
            --panel-border-hover: rgba(14,22,24,0.14);
            --text: #10201f;
            --muted: #5c7274;
            --muted-dim: #93a5a6;
            --green: #00a667;
            --gold: #b9862a;
            --clay: #c9683f;
            --blue: #3f8fc9;
            --violet: #8b6fc9;
            background: var(--bg);
            color: var(--text);
            font-family: 'DM Sans', sans-serif;
            min-height: 100vh;
        }
        .fc-dash .display-font { font-family: 'Syne', sans-serif; }
        .fc-dash .fc-eyebrow {
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--green);
        }
        .fc-dash .fc-triangle-strip { height: 6px; width: 100%; display: flex; overflow: hidden; }
        .fc-dash .fc-triangle-strip span { flex: 1; height: 100%; }
        .fc-dash .fc-triangle-strip span:nth-child(odd) { clip-path: polygon(0 0, 100% 0, 50% 100%); }
        .fc-dash .fc-triangle-strip span:nth-child(even) { clip-path: polygon(50% 0, 100% 100%, 0 100%); }

        .fc-card {
            background: var(--panel);
            border: 1px solid var(--panel-border);
            border-radius: 0.75rem;
            box-shadow: 0 1px 2px rgba(14,22,24,0.04);
            transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .fc-card:hover { border-color: var(--panel-border-hover); box-shadow: 0 4px 14px rgba(14,22,24,0.06); }

        .fc-stat-card { position: relative; overflow: hidden; padding: 1.1rem 1.25rem; }
        .fc-stat-card::before {
            content: '';
            position: absolute; top: 0; left: 0; right: 0; height: 2px;
            background: var(--accent, #2a3a3c);
            opacity: 0.75;
        }
        .fc-stat-label {
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--muted);
        }
        .fc-stat-value {
            font-size: 1.9rem;
            font-weight: 700;
            letter-spacing: -0.01em;
            color: var(--accent, var(--text));
        }
        .fc-icon-chip {
            width: 2.4rem; height: 2.4rem;
            border-radius: 0.6rem;
            display: flex; align-items: center; justify-content: center;
            background: color-mix(in srgb, var(--accent, var(--muted)) 14%, transparent);
            color: var(--accent, var(--muted));
            flex-shrink: 0;
        }

        .fc-card-head { display: flex; align-items: center; gap: 0.65rem; margin-bottom: 1rem; }
        .fc-card-marker { width: 8px; height: 8px; flex-shrink: 0; transform: rotate(45deg); background: var(--accent, var(--green)); }
        .fc-card-title { font-size: 0.9rem; font-weight: 700; margin: 0; color: var(--text); }
        .fc-card-subtitle { font-size: 0.75rem; color: var(--muted); margin: 0; }

        .fc-chart-body { height: 17rem; width: 100%; }
        .fc-empty-state { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; color: var(--muted-dim); }
        .fc-empty-state span { font-size: 0.75rem; font-weight: 500; }

        .fc-tooltip { background: var(--panel); border: 1px solid rgba(14,22,24,0.1); border-radius: 0.5rem; padding: 0.5rem 0.75rem; font-size: 0.75rem; box-shadow: 0 8px 24px rgba(14,22,24,0.12); }
        .fc-tooltip .fc-tooltip-label { color: var(--text); font-weight: 500; margin-bottom: 0.15rem; }

        .fc-rank-badge {
            width: 1.9rem; height: 1.9rem; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.72rem;
            border: 1px solid rgba(92,114,116,0.2);
            background: rgba(92,114,116,0.08);
            color: var(--muted);
        }
        .fc-rank-1 { background: rgba(185,134,42,0.12); color: var(--gold); border-color: rgba(185,134,42,0.3); }
        .fc-rank-2 { background: rgba(92,114,116,0.12); color: #64797b; border-color: rgba(92,114,116,0.3); }
        .fc-rank-3 { background: rgba(201,104,63,0.12); color: var(--clay); border-color: rgba(201,104,63,0.3); }

        .fc-avatar {
            width: 2.4rem; height: 2.4rem; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.72rem;
            background: rgba(14,22,24,0.03); border: 1px solid rgba(14,22,24,0.08);
            color: var(--text);
        }

        .fc-progress-track { height: 5px; border-radius: 999px; background: rgba(14,22,24,0.07); overflow: hidden; }
        .fc-progress-fill { height: 100%; border-radius: 999px; background: var(--green); }

        .fc-table-row { border-color: rgba(14,22,24,0.06) !important; }
        .fc-table-row td { vertical-align: middle; padding: 0.85rem 0.5rem; }

        .fc-dash .table > :not(caption) > * > * { background: transparent; color: var(--text); box-shadow: none; }

        @media (max-width: 575.98px) {
            .fc-stat-value { font-size: 1.5rem; }
        }
    `}</style>
);

function StatCard({ label, value, accent, icon }) {
    return (
        <div className="col">
            <div className="fc-card fc-stat-card h-100" style={{ '--accent': accent }}>
                <div className="d-flex align-items-start justify-content-between gap-3">
                    <div>
                        <p className="fc-stat-label mb-1">{label}</p>
                        <p className="display-font fc-stat-value mb-0">{value ?? '—'}</p>
                    </div>
                    {icon && (
                        <div className="fc-icon-chip">
                            {icon}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function EmptyChartState({ label = 'No data yet' }) {
    return (
        <div className="fc-empty-state">
            <Icon.Inbox style={{ width: '1.75rem', height: '1.75rem' }} />
            <span>{label}</span>
        </div>
    );
}

function ChartCard({ title, subtitle, children, colClass = 'col-12 col-lg-4', accent, isEmpty }) {
    return (
        <div className={colClass}>
            <div className="fc-card h-100 p-3 p-lg-4" style={{ '--accent': accent }}>
                <div className="fc-card-head">
                    <span className="fc-card-marker" />
                    <div>
                        <h3 className="display-font fc-card-title">{title}</h3>
                        {subtitle && <p className="fc-card-subtitle">{subtitle}</p>}
                    </div>
                </div>
                <div className="fc-chart-body">{isEmpty ? <EmptyChartState /> : children}</div>
            </div>
        </div>
    );
}

function ChartTooltip({ active, payload, label }) {
    if (!active || !payload?.length) return null;
    return (
        <div className="fc-tooltip">
            {label && <p className="fc-tooltip-label">{formatLabel(label) ?? label}</p>}
            {payload.map((entry, i) => (
                <p key={i} className="mb-0" style={{ color: entry.color || entry.fill }}>
                    {formatLabel(entry.name)}: <span className="fw-semibold">{entry.value}</span>
                </p>
            ))}
        </div>
    );
}

const RANK_CLASSES = ['fc-rank-1', 'fc-rank-2', 'fc-rank-3'];

function Dashboard({
    kpis,
    talentsByCategory,
    talentsByLevel,
    signupsOverTime,
    courseEnrollments,
    quickHiresByStatus,
    recruitmentsByStatus,
    topRatedTalents,
    skillsByCategory,
}) {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });

    return (
        <div className="fc-dash pb-5">
            <Head title="Admin Dashboard" />
            <link
                href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <ThemeStyles />

            {/* Signature header strip — Imigongo-inspired triangle band */}
            <div className="fc-triangle-strip">
                {PALETTE.map((color) => (
                    <span key={color} style={{ background: color }} />
                ))}
            </div>

            <div className="container-fluid px-3 px-lg-4 pt-4" style={{ maxWidth: '1400px' }}>
                <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 pb-4 mb-4 border-bottom" style={{ borderColor: 'rgba(14,22,24,0.08)' }}>
                    <div>
                        <p className="fc-eyebrow d-flex align-items-center gap-2 mb-1">
                            <span style={{ width: 6, height: 6, background: '#00a667', display: 'inline-block', transform: 'rotate(45deg)' }} />
                            Overview
                        </p>
                        <h1 className="display-font fw-bold mb-1" style={{ fontSize: '1.7rem', letterSpacing: '-0.01em' }}>
                            Talent Platform Dashboard
                        </h1>
                        <p className="mb-0" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                            Talents, courses, recruitment and hiring activity across the platform.
                        </p>
                    </div>
                    <p className="mb-0" style={{ color: 'var(--muted-dim)', fontSize: '0.78rem', fontWeight: 500 }}>{today}</p>
                </div>

                {/* KPI row */}
                <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-6 g-3 mb-4">
                    <StatCard label="Total Talents" value={kpis?.totalTalents} icon={<Icon.Users style={{ width: 16, height: 16 }} />} />
                    <StatCard label="Approved" value={kpis?.approvedTalents} accent="#00a667" icon={<Icon.Check style={{ width: 16, height: 16 }} />} />
                    <StatCard label="Total Users" value={kpis?.totalUsers} icon={<Icon.Users style={{ width: 16, height: 16 }} />} />
                    <StatCard label="Active Courses" value={kpis?.activeCourses} icon={<Icon.Book style={{ width: 16, height: 16 }} />} />
                    <StatCard label="Pending Recruitments" value={kpis?.pendingRecruitments} accent="#d9a441" icon={<Icon.Clock style={{ width: 16, height: 16 }} />} />
                    <StatCard label="Open Quick Hires" value={kpis?.openQuickHires} accent="#3f8fc9" icon={<Icon.Bolt style={{ width: 16, height: 16 }} />} />
                </div>

                {/* Charts grid */}
                <div className="row g-3 g-lg-4">
                    <ChartCard
                        title="Talents by Category"
                        subtitle="Approved & pending, by skill category"
                        colClass="col-12 col-lg-8"
                        isEmpty={!talentsByCategory?.length}
                    >
                        <ResponsiveContainer>
                            <BarChart data={talentsByCategory} margin={{ left: -20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(14,22,24,0.08)" vertical={false} />
                                <XAxis dataKey="category" tick={{ fill: '#5c7274', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#5c7274', fontSize: 12 }} axisLine={false} tickLine={false} allowDecimals={false} />
                                <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(14,22,24,0.04)' }} />
                                <Bar dataKey="total" radius={[6, 6, 0, 0]}>
                                    {talentsByCategory?.map((_, i) => (
                                        <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Talent Levels" subtitle="Skill level distribution" colClass="col-12 col-lg-4" accent="#d9a441" isEmpty={!talentsByLevel?.length}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={talentsByLevel}
                                    dataKey="total"
                                    nameKey="level"
                                    innerRadius={55}
                                    outerRadius={80}
                                    paddingAngle={3}
                                >
                                    {talentsByLevel?.map((_, i) => (
                                        <Cell key={i} fill={PALETTE[i % PALETTE.length]} stroke="#ffffff" />
                                    ))}
                                </Pie>
                                <Tooltip content={<ChartTooltip />} />
                                <Legend
                                    verticalAlign="bottom"
                                    formatter={(value) => (
                                        <span style={{ fontSize: 12, color: '#5c7274' }}>{formatLabel(value)}</span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard
                        title="New Talent Signups"
                        subtitle="Last 6 months"
                        colClass="col-12 col-lg-8"
                        isEmpty={!signupsOverTime?.length}
                    >
                        <ResponsiveContainer>
                            <LineChart data={signupsOverTime} margin={{ left: -20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(14,22,24,0.08)" vertical={false} />
                                <XAxis dataKey="month" tick={{ fill: '#5c7274', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#5c7274', fontSize: 12 }} axisLine={false} tickLine={false} allowDecimals={false} />
                                <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'rgba(14,22,24,0.15)' }} />
                                <Line
                                    type="monotone"
                                    dataKey="total"
                                    stroke="#00a667"
                                    strokeWidth={2.5}
                                    dot={{ fill: '#00a667', r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Skills by Category" subtitle="Published skill listings" colClass="col-12 col-lg-4" accent="#8b6fc9" isEmpty={!skillsByCategory?.length}>
                        <ResponsiveContainer>
                            <BarChart data={skillsByCategory} layout="vertical" margin={{ left: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(14,22,24,0.08)" horizontal={false} />
                                <XAxis type="number" tick={{ fill: '#5c7274', fontSize: 12 }} axisLine={false} tickLine={false} allowDecimals={false} />
                                <YAxis
                                    type="category"
                                    dataKey="category"
                                    tick={{ fill: '#5c7274', fontSize: 12 }}
                                    axisLine={false}
                                    tickLine={false}
                                    width={110}
                                />
                                <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(14,22,24,0.04)' }} />
                                <Bar dataKey="total" radius={[0, 6, 6, 0]}>
                                    {skillsByCategory?.map((_, i) => (
                                        <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Course Enrollments" subtitle="By status" colClass="col-12 col-md-6 col-lg-4" accent="#3f8fc9" isEmpty={!courseEnrollments?.length}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={courseEnrollments}
                                    dataKey="total"
                                    nameKey="status"
                                    innerRadius={55}
                                    outerRadius={80}
                                    paddingAngle={3}
                                >
                                    {courseEnrollments?.map((entry, i) => (
                                        <Cell key={i} fill={statusColor(entry.status, i)} stroke="#ffffff" />
                                    ))}
                                </Pie>
                                <Tooltip content={<ChartTooltip />} />
                                <Legend
                                    verticalAlign="bottom"
                                    formatter={(value) => (
                                        <span style={{ fontSize: 12, color: '#5c7274' }}>{formatLabel(value)}</span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Corporate Recruitments" subtitle="By status" colClass="col-12 col-md-6 col-lg-4" accent="#c9683f" isEmpty={!recruitmentsByStatus?.length}>
                        <ResponsiveContainer>
                            <BarChart data={recruitmentsByStatus} margin={{ left: -20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(14,22,24,0.08)" vertical={false} />
                                <XAxis dataKey="status" tickFormatter={formatLabel} tick={{ fill: '#5c7274', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#5c7274', fontSize: 12 }} axisLine={false} tickLine={false} allowDecimals={false} />
                                <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(14,22,24,0.04)' }} />
                                <Bar dataKey="total" radius={[6, 6, 0, 0]}>
                                    {recruitmentsByStatus?.map((entry, i) => (
                                        <Cell key={i} fill={statusColor(entry.status, i)} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Quick Hires" subtitle="By status" colClass="col-12 col-md-12 col-lg-4" accent="#00a667" isEmpty={!quickHiresByStatus?.length}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={quickHiresByStatus}
                                    dataKey="total"
                                    nameKey="status"
                                    innerRadius={55}
                                    outerRadius={80}
                                    paddingAngle={3}
                                >
                                    {quickHiresByStatus?.map((entry, i) => (
                                        <Cell key={i} fill={statusColor(entry.status, i)} stroke="#ffffff" />
                                    ))}
                                </Pie>
                                <Tooltip content={<ChartTooltip />} />
                                <Legend
                                    verticalAlign="bottom"
                                    formatter={(value) => (
                                        <span style={{ fontSize: 12, color: '#5c7274' }}>{formatLabel(value)}</span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    {/* Top rated talents */}
                    <div className="col-12">
                        <div className="fc-card p-3 p-lg-4" style={{ '--accent': '#d9a441' }}>
                            <div className="fc-card-head">
                                <span className="fc-card-marker" />
                                <div>
                                    <h3 className="display-font fc-card-title">Top Rated Talents</h3>
                                    <p className="fc-card-subtitle">By average client feedback rating</p>
                                </div>
                            </div>

                            {topRatedTalents?.length ? (
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <tbody>
                                            {topRatedTalents.map((t, i) => {
                                                const pct = Math.min(100, (Number(t.avg_rating) / 5) * 100);
                                                return (
                                                    <tr key={t.name} className="fc-table-row border-top">
                                                        <td style={{ width: 44 }}>
                                                            <span className={`fc-rank-badge ${RANK_CLASSES[i] ?? ''}`}>{i + 1}</span>
                                                        </td>
                                                        <td style={{ width: 52 }}>
                                                            <span className="fc-avatar">{initials(t.name)}</span>
                                                        </td>
                                                        <td>
                                                            <p className="mb-1 fw-medium" style={{ fontSize: '0.9rem' }}>{t.name}</p>
                                                            <div className="fc-progress-track" style={{ maxWidth: 180 }}>
                                                                <div className="fc-progress-fill" style={{ width: `${pct}%` }} />
                                                            </div>
                                                        </td>
                                                        <td className="text-nowrap">
                                                            <Icon.Star style={{ width: 14, height: 14, color: '#d9a441', marginRight: 4 }} />
                                                            <span className="display-font fw-bold">{t.avg_rating}</span>
                                                            <span style={{ color: 'var(--muted)' }}> / 5</span>
                                                        </td>
                                                        <td className="text-end text-nowrap" style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>
                                                            {t.reviews} review{t.reviews === 1 ? '' : 's'}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <EmptyChartState label="No rated talents yet" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <AppLayout children={page} />;

export default Dashboard;