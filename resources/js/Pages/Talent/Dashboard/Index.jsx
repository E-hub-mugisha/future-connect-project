// resources/js/Pages/Talent/Dashboard.jsx
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({
    totals,
    months,
    monthlyStories,
    monthlyFeedback,
    monthlyConnections,
    level,
    status,
    matched,
}) {
    const { auth } = usePage().props;

    const barCanvasRef = useRef(null);
    const donutCanvasRef = useRef(null);
    const lineCanvasRef = useRef(null);

    useEffect(() => {
        
        const palette = {
            accent: '#48d597',
            accent70: 'rgba(72, 213, 151, 0.70)',
            accent55: 'rgba(72, 213, 151, 0.55)',
            accent35: 'rgba(72, 213, 151, 0.30)',
            accentFaint: 'rgba(72, 213, 151, 0.10)',
            ink: '#14181a',
            ink85: 'rgba(20, 24, 26, 0.85)',
            ink55: 'rgba(20, 24, 26, 0.55)',
            inkFaint: 'rgba(20, 24, 26, 0.06)',
            gridLine: 'rgba(20, 24, 26, 0.06)',
        };

        Chart.defaults.font.family =
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
        Chart.defaults.color = palette.ink55;

        const barChart = new Chart(barCanvasRef.current, {
            type: 'bar',
            data: {
                labels: ['Courses', 'Skills', 'Stories', 'Feedback', 'Connections'],
                datasets: [
                    {
                        data: [
                            totals.courses,
                            totals.skills,
                            totals.stories,
                            totals.feedback,
                            totals.connections,
                        ],
                        backgroundColor: [
                            palette.accent,
                            palette.ink85,
                            palette.accent55,
                            palette.ink55,
                            palette.accent35,
                        ],
                        borderRadius: 6,
                        borderSkipped: false,
                        maxBarThickness: 42,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: palette.gridLine },
                        ticks: { precision: 0 },
                    },
                    x: { grid: { display: false } },
                },
            },
        });

        const donutChart = new Chart(donutCanvasRef.current, {
            type: 'doughnut',
            data: {
                labels: ['Stories', 'Feedback', 'Connections'],
                datasets: [
                    {
                        data: [totals.stories, totals.feedback, totals.connections],
                        backgroundColor: [palette.accent, palette.ink85, palette.accent35],
                        borderWidth: 0,
                        hoverOffset: 6,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '72%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { boxWidth: 10, padding: 16, usePointStyle: true },
                    },
                },
            },
        });

        const lineChart = new Chart(lineCanvasRef.current, {
            type: 'line',
            data: {
                labels: months,
                datasets: [
                    {
                        label: 'Stories',
                        data: monthlyStories,
                        borderColor: palette.accent,
                        backgroundColor: palette.accentFaint,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: palette.accent,
                    },
                    {
                        label: 'Feedback',
                        data: monthlyFeedback,
                        borderColor: palette.ink85,
                        backgroundColor: palette.inkFaint,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: palette.ink85,
                    },
                    {
                        label: 'Connections',
                        data: monthlyConnections,
                        borderColor: palette.accent55,
                        backgroundColor: 'rgba(72, 213, 151, 0.06)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: palette.accent55,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'end',
                        labels: { boxWidth: 10, padding: 16, usePointStyle: true },
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: palette.gridLine },
                        ticks: { precision: 0 },
                    },
                    x: { grid: { display: false } },
                },
            },
        });

        return () => {
            barChart.destroy();
            donutChart.destroy();
            lineChart.destroy();
        };
    }, [totals, months, monthlyStories, monthlyFeedback, monthlyConnections]);

    const statCards = [
        { label: 'Total Courses', value: totals.courses, icon: 'fa-graduation-cap', tone: 'accent' },
        { label: 'Skills', value: totals.skills, icon: 'fa-star', tone: 'ink' },
        { label: 'Connections', value: totals.connections, icon: 'fa-people-group', tone: 'accent' },
        { label: 'Feedback', value: totals.feedback, icon: 'fa-comment-dots', tone: 'ink' },
    ];

    return (
        <AppLayout>
            <Head title="Skills Dashboard" />

            <style>{`
                /* Scoped overrides so this page only ever renders #48d597 / white / black,
                   instead of Bootstrap's default blue/red/amber/purple utility colors. */
                .td-dashboard {
                    --td-accent:       #48d597;
                    --td-accent-dim:   rgba(72, 213, 151, 0.12);
                    --td-accent-mid:   rgba(72, 213, 151, 0.35);
                    --td-ink:          #14181a;
                    --td-ink-soft:     rgba(20, 24, 26, 0.60);
                    --td-ink-faint:    rgba(20, 24, 26, 0.38);
                    --td-ink-dim:      rgba(20, 24, 26, 0.08);
                    --td-border:       rgba(20, 24, 26, 0.08);
                    background-color: #F5f5f7;
                }
                .td-header {
                    background: linear-gradient(135deg, var(--td-accent) 0%, var(--td-ink) 100%);
                }
                .td-icon-accent { background: var(--td-accent-dim); color: var(--td-accent); }
                .td-icon-ink { background: var(--td-ink-dim); color: var(--td-ink); }
                .td-text-soft { color: var(--td-ink-soft) !important; }
                .td-badge-accent { background: var(--td-accent-dim); color: var(--td-accent); }
                .td-badge-matched { background: var(--td-accent); color: #F5f5f7; }
                .td-badge-unmatched { background: var(--td-ink-dim); color: var(--td-ink-soft); }
                .td-pill { background: #F5f5f7; }
                .td-pill .nav-link { color: var(--td-ink-soft); }
                .td-pill .nav-link.active { background: var(--td-accent) !important; color: #F5f5f7 !important; }
                .td-action-btn { background: #F5f5f7; border: 1px solid var(--td-border); color: var(--td-ink-soft); }
                .td-action-btn:hover { background: var(--td-accent-dim); color: var(--td-ink); }
                .td-btngroup .td-btn-active { background: var(--td-accent); border-color: var(--td-accent); color: #F5f5f7; }
                .td-btngroup .td-btn-inactive { background: #F5f5f7; border-color: var(--td-border); color: var(--td-ink-soft); }
                .td-card { border: 1px solid var(--td-border); }
                .td-alert { background: var(--td-ink-dim); border: 1px solid var(--td-border); color: var(--td-ink-soft); }
                .td-export-btn { background: #F5f5f7; color: var(--td-ink); }
            `}</style>

            <div className="td-dashboard container-fluid px-4 py-4">

                {/* Header */}
                <div className="td-header d-flex flex-wrap justify-content-between align-items-center rounded-4 p-4 mb-4 text-white">
                    <div>
                        <h2 className="fw-bold mb-1">Welcome back, {auth.user.name.split(' ')[0]} 👋</h2>
                        <p className="mb-2 opacity-75">Here's what's happening with your profile.</p>
                        <div className="d-flex gap-2">
                            <span className="badge rounded-pill bg-white text-dark px-3 py-2">
                                Level: <strong>{capitalize(level)}</strong>
                            </span>
                            <span className="badge rounded-pill bg-white text-dark px-3 py-2">
                                Status: <strong>{capitalize(status)}</strong>
                            </span>
                            <span
                                className={`badge rounded-pill px-3 py-2 ${
                                    matched ? 'td-badge-matched' : 'td-badge-unmatched'
                                }`}
                            >
                                {matched ? 'Matched' : 'Not Matched'}
                            </span>
                        </div>
                    </div>
                    <a href="#" className="td-export-btn btn fw-semibold px-4 py-2 rounded-pill shadow-sm">
                        <i className="fas fa-download me-2"></i>Export
                    </a>
                </div>

                {/* Toolbar */}
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                    <ul className="td-pill nav nav-pills rounded-pill p-1 shadow-sm">
                        <li className="nav-item">
                            <a className="nav-link active rounded-pill px-4" href="#">
                                Overview
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex gap-2 mt-2 mt-md-0">
                        {[
                            { icon: 'fa-floppy-disk', label: 'Save Report' },
                            { icon: 'fa-file-pdf', label: 'Export PDF' },
                            { icon: 'fa-envelope', label: 'Email' },
                        ].map((action) => (
                            <button
                                key={action.label}
                                className="td-action-btn btn shadow-sm rounded-pill px-3 py-1 small"
                            >
                                <i className={`fas ${action.icon} me-2`}></i>
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stat cards */}
                <div className="row g-3 mb-4">
                    {statCards.map((stat) => (
                        <div className="col-6 col-lg-3" key={stat.label}>
                            <div className="td-card card border-0 shadow-sm rounded-4 h-100">
                                <div className="card-body d-flex align-items-center gap-3 p-3">
                                    <div
                                        className={`d-flex align-items-center justify-content-center rounded-3 ${
                                            stat.tone === 'accent' ? 'td-icon-accent' : 'td-icon-ink'
                                        }`}
                                        style={{ width: 48, height: 48, flexShrink: 0 }}
                                    >
                                        <i className={`fas ${stat.icon}`}></i>
                                    </div>
                                    <div>
                                        <div className="td-text-soft small">{stat.label}</div>
                                        <div className="fs-4 fw-bold text-dark">
                                            {stat.value.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row g-3 mb-4">
                    {/* Talent Overview bar chart */}
                    <div className="col-lg-7">
                        <div className="td-card card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-header bg-white border-0 rounded-4 pt-4 px-4 d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="fw-bold mb-0">Talent Overview</h6>
                                    <p className="td-text-soft small mb-0">Your activity summary</p>
                                </div>
                                <div className="td-btngroup btn-group btn-group-sm" role="group">
                                    <button className="btn td-btn-active">Day</button>
                                    <button className="btn td-btn-inactive">Week</button>
                                    <button className="btn td-btn-inactive">Month</button>
                                </div>
                            </div>
                            <div className="card-body px-4 pb-4">
                                <div style={{ height: 280 }}>
                                    <canvas ref={barCanvasRef}></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feedback donut + placeholders */}
                    <div className="col-lg-5">
                        <div className="row g-3 h-100">
                            <div className="col-sm-6">
                                <div className="td-card card border-0 shadow-sm rounded-4 h-100">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <div>
                                                <div className="fs-4 fw-bold">
                                                    {totals.feedback.toLocaleString()}
                                                </div>
                                                <span className="td-badge-accent badge">
                                                    <i className="fas fa-arrow-trend-up me-1"></i>
                                                    {totals.feedbackRate}%
                                                </span>
                                            </div>
                                        </div>
                                        <p className="td-text-soft small mb-3">Feedback Received</p>
                                        <div style={{ height: 130 }}>
                                            <canvas ref={donutCanvasRef}></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="td-card card border-0 shadow-sm rounded-4 h-100">
                                    <div className="card-body p-4 d-flex flex-column justify-content-between">
                                        <div>
                                            <p className="td-text-soft small mb-2">Total Users</p>
                                            <div className="fs-5 fw-semibold td-text-soft">
                                                Not tracked yet
                                            </div>
                                        </div>
                                        <div className="td-alert alert small mb-0 mt-3">
                                            <i className="fas fa-circle-info me-1"></i>
                                            Wire up a sessions/users metric to populate this card.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="td-card card border-0 shadow-sm rounded-4">
                                    <div className="card-body p-4">
                                        <p className="td-text-soft small mb-1">All Sessions</p>
                                        <div className="fs-5 fw-semibold td-text-soft mb-2">
                                            Not tracked yet
                                        </div>
                                        <small className="td-text-soft">
                                            The total number of sessions within the date range —
                                            the period a user is actively engaged with your
                                            website, page, or app.
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Monthly activity line chart */}
                <div className="row g-3">
                    <div className="col-12">
                        <div className="td-card card border-0 shadow-sm rounded-4">
                            <div className="card-header bg-white border-0 rounded-4 pt-4 px-4">
                                <h6 className="fw-bold mb-0">Monthly Activity</h6>
                                <small className="td-text-soft">Last 6 months performance</small>
                            </div>
                            <div className="card-body px-4 pb-4">
                                <div style={{ height: 320 }}>
                                    <canvas ref={lineCanvasRef}></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function capitalize(value) {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
}