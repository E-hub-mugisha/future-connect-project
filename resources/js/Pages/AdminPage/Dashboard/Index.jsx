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
 * Admin Dashboard — Talent Platform
 *
 * Drop-in Inertia page. Expects the DashboardController@index props:
 * kpis, talentsByCategory, talentsByLevel, signupsOverTime,
 * courseEnrollments, quickHiresByStatus, recruitmentsByStatus,
 * topRatedTalents, skillsByCategory
 *
 * Uses the project's persistent AppLayout via Dashboard.layout below.
 *
 * npm dependency: recharts
 *   npm install recharts
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

function StatCard({ label, value, accent }) {
    return (
        <div className="rounded-xl border border-white/[0.06] bg-[#141f21] p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-[#7f9a9d]">
                {label}
            </p>
            <p
                className="mt-2 text-3xl font-semibold tracking-tight text-[#e7eeee]"
                style={accent ? { color: accent } : undefined}
            >
                {value}
            </p>
        </div>
    );
}

function ChartCard({ title, subtitle, children, className = '' }) {
    return (
        <div className={`rounded-xl border border-white/[0.06] bg-[#141f21] p-5 ${className}`}>
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-[#e7eeee]">{title}</h3>
                {subtitle && <p className="text-xs text-[#7f9a9d]">{subtitle}</p>}
            </div>
            <div className="h-64 w-full">{children}</div>
        </div>
    );
}

function ChartTooltip({ active, payload, label }) {
    if (!active || !payload?.length) return null;
    return (
        <div className="rounded-lg border border-white/10 bg-[#0e1618] px-3 py-2 text-xs shadow-lg">
            {label && <p className="mb-1 font-medium text-[#e7eeee]">{label}</p>}
            {payload.map((entry, i) => (
                <p key={i} style={{ color: entry.color || entry.fill }}>
                    {formatLabel(entry.name)}: <span className="font-semibold">{entry.value}</span>
                </p>
            ))}
        </div>
    );
}

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
    return (
        <div className="min-h-screen bg-[#0e1618] pb-16 text-[#e7eeee]">
            <Head title="Admin Dashboard" />

            {/* Signature header strip — Imigongo-inspired triangle band */}
            <div className="flex h-2 w-full overflow-hidden">
                {PALETTE.map((color, i) => (
                    <div
                        key={color}
                        className="h-full flex-1"
                        style={{
                            background: color,
                            clipPath:
                                i % 2 === 0
                                    ? 'polygon(0 0, 100% 0, 50% 100%)'
                                    : 'polygon(50% 0, 100% 100%, 0 100%)',
                        }}
                    />
                ))}
            </div>

            <div className="mx-auto max-w-7xl px-6 pt-10">
                <header className="mb-8">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#00a667]">
                        Overview
                    </p>
                    <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                        Talent Platform Dashboard
                    </h1>
                    <p className="mt-1 text-sm text-[#7f9a9d]">
                        Talents, courses, recruitment and hiring activity across the platform.
                    </p>
                </header>

                {/* KPI row */}
                <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    <StatCard label="Total Talents" value={kpis.totalTalents} />
                    <StatCard label="Approved" value={kpis.approvedTalents} accent="#00a667" />
                    <StatCard label="Total Users" value={kpis.totalUsers} />
                    <StatCard label="Active Courses" value={kpis.activeCourses} />
                    <StatCard label="Pending Recruitments" value={kpis.pendingRecruitments} accent="#d9a441" />
                    <StatCard label="Open Quick Hires" value={kpis.openQuickHires} accent="#3f8fc9" />
                </div>

                {/* Charts grid */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    <ChartCard
                        title="Talents by Category"
                        subtitle="Approved & pending, by skill category"
                        className="lg:col-span-2"
                    >
                        <ResponsiveContainer>
                            <BarChart data={talentsByCategory} margin={{ left: -20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                                <XAxis dataKey="category" tick={{ fill: '#7f9a9d', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#7f9a9d', fontSize: 12 }} axisLine={false} tickLine={false} allowDecimals={false} />
                                <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                                <Bar dataKey="total" radius={[6, 6, 0, 0]}>
                                    {talentsByCategory?.map((_, i) => (
                                        <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Talent Levels" subtitle="Skill level distribution">
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
                                        <Cell key={i} fill={PALETTE[i % PALETTE.length]} stroke="#0e1618" />
                                    ))}
                                </Pie>
                                <Tooltip content={<ChartTooltip />} />
                                <Legend
                                    verticalAlign="bottom"
                                    formatter={(value) => (
                                        <span className="text-xs text-[#7f9a9d]">{formatLabel(value)}</span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard
                        title="New Talent Signups"
                        subtitle="Last 6 months"
                        className="lg:col-span-2"
                    >
                        <ResponsiveContainer>
                            <LineChart data={signupsOverTime} margin={{ left: -20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                                <XAxis dataKey="month" tick={{ fill: '#7f9a9d', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#7f9a9d', fontSize: 12 }} axisLine={false} tickLine={false} allowDecimals={false} />
                                <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)' }} />
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

                    <ChartCard title="Skills by Category" subtitle="Published skill listings">
                        <ResponsiveContainer>
                            <BarChart data={skillsByCategory} layout="vertical" margin={{ left: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
                                <XAxis type="number" tick={{ fill: '#7f9a9d', fontSize: 12 }} axisLine={false} tickLine={false} allowDecimals={false} />
                                <YAxis
                                    type="category"
                                    dataKey="category"
                                    tick={{ fill: '#7f9a9d', fontSize: 12 }}
                                    axisLine={false}
                                    tickLine={false}
                                    width={110}
                                />
                                <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                                <Bar dataKey="total" radius={[0, 6, 6, 0]}>
                                    {skillsByCategory?.map((_, i) => (
                                        <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Course Enrollments" subtitle="By status">
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
                                        <Cell key={i} fill={statusColor(entry.status, i)} stroke="#0e1618" />
                                    ))}
                                </Pie>
                                <Tooltip content={<ChartTooltip />} />
                                <Legend
                                    verticalAlign="bottom"
                                    formatter={(value) => (
                                        <span className="text-xs text-[#7f9a9d]">{formatLabel(value)}</span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Corporate Recruitments" subtitle="By status">
                        <ResponsiveContainer>
                            <BarChart data={recruitmentsByStatus} margin={{ left: -20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                                <XAxis dataKey="status" tickFormatter={formatLabel} tick={{ fill: '#7f9a9d', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#7f9a9d', fontSize: 12 }} axisLine={false} tickLine={false} allowDecimals={false} />
                                <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                                <Bar dataKey="total" radius={[6, 6, 0, 0]}>
                                    {recruitmentsByStatus?.map((entry, i) => (
                                        <Cell key={i} fill={statusColor(entry.status, i)} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Quick Hires" subtitle="By status">
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
                                        <Cell key={i} fill={statusColor(entry.status, i)} stroke="#0e1618" />
                                    ))}
                                </Pie>
                                <Tooltip content={<ChartTooltip />} />
                                <Legend
                                    verticalAlign="bottom"
                                    formatter={(value) => (
                                        <span className="text-xs text-[#7f9a9d]">{formatLabel(value)}</span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    {/* Top rated talents table */}
                    <div className="rounded-xl border border-white/[0.06] bg-[#141f21] p-5 lg:col-span-3">
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-[#e7eeee]">Top Rated Talents</h3>
                            <p className="text-xs text-[#7f9a9d]">By average client feedback rating</p>
                        </div>
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-white/[0.06] text-xs uppercase tracking-wider text-[#7f9a9d]">
                                    <th className="pb-3 font-medium">Talent</th>
                                    <th className="pb-3 font-medium">Rating</th>
                                    <th className="pb-3 font-medium">Reviews</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topRatedTalents?.map((t) => (
                                    <tr key={t.name} className="border-b border-white/[0.03] last:border-0">
                                        <td className="py-3 text-[#e7eeee]">{t.name}</td>
                                        <td className="py-3">
                                            <span className="font-semibold text-[#00a667]">{t.avg_rating}</span>
                                            <span className="text-[#7f9a9d]"> / 5</span>
                                        </td>
                                        <td className="py-3 text-[#7f9a9d]">{t.reviews}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <AppLayout children={page} />;

export default Dashboard;