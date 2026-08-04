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
            primary: '#5b5fc7',
            success: '#16a34a',
            info: '#0ea5e9',
            warning: '#f59e0b',
            danger: '#ef4444',
            gridLine: 'rgba(0,0,0,0.05)',
        };

        Chart.defaults.font.family =
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
        Chart.defaults.color = '#6b7280';

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
                            palette.primary,
                            palette.info,
                            palette.warning,
                            palette.success,
                            '#8b5cf6',
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
                        backgroundColor: [palette.warning, palette.success, '#8b5cf6'],
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
                        borderColor: palette.warning,
                        backgroundColor: 'rgba(245, 158, 11, 0.08)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: palette.warning,
                    },
                    {
                        label: 'Feedback',
                        data: monthlyFeedback,
                        borderColor: palette.success,
                        backgroundColor: 'rgba(22, 163, 74, 0.08)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: palette.success,
                    },
                    {
                        label: 'Connections',
                        data: monthlyConnections,
                        borderColor: '#8b5cf6',
                        backgroundColor: 'rgba(139, 92, 246, 0.08)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: '#8b5cf6',
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
        { label: 'Total Courses', value: totals.courses, icon: 'fa-graduation-cap', color: 'primary' },
        { label: 'Skills', value: totals.skills, icon: 'fa-star', color: 'info' },
        { label: 'Connections', value: totals.connections, icon: 'fa-people-group', color: 'purple' },
        { label: 'Feedback', value: totals.feedback, icon: 'fa-comment-dots', color: 'success' },
    ];

    return (
        <AppLayout>
            <Head title="Dashboard" />

            <div className="container-fluid px-4 py-4" style={{ backgroundColor: '#f7f8fb' }}>

                {/* Header */}
                <div
                    className="d-flex flex-wrap justify-content-between align-items-center rounded-4 p-4 mb-4 text-white"
                    style={{
                        background: 'linear-gradient(135deg, #5b5fc7 0%, #7c3aed 100%)',
                    }}
                >
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
                                    matched ? 'bg-success' : 'bg-secondary'
                                }`}
                            >
                                {matched ? 'Matched' : 'Not Matched'}
                            </span>
                        </div>
                    </div>
                    <a href="#" className="btn btn-light fw-semibold px-4 py-2 rounded-pill shadow-sm">
                        <i className="fas fa-download me-2"></i>Export
                    </a>
                </div>

                {/* Toolbar */}
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                    <ul className="nav nav-pills bg-white rounded-pill p-1 shadow-sm">
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
                                className="btn btn-white border shadow-sm rounded-pill px-3 py-1 small text-secondary"
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
                            <div className="card border-0 shadow-sm rounded-4 h-100">
                                <div className="card-body d-flex align-items-center gap-3 p-3">
                                    <div
                                        className={`d-flex align-items-center justify-content-center rounded-3 bg-${stat.color} bg-opacity-10`}
                                        style={{ width: 48, height: 48, flexShrink: 0 }}
                                    >
                                        <i className={`fas ${stat.icon} text-${stat.color}`}></i>
                                    </div>
                                    <div>
                                        <div className="text-secondary small">{stat.label}</div>
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
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-header bg-white border-0 rounded-4 pt-4 px-4 d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="fw-bold mb-0">Talent Overview</h6>
                                    <p className="text-secondary small mb-0">Your activity summary</p>
                                </div>
                                <div className="btn-group btn-group-sm" role="group">
                                    <button className="btn btn-primary">Day</button>
                                    <button className="btn btn-outline-secondary">Week</button>
                                    <button className="btn btn-outline-secondary">Month</button>
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
                                <div className="card border-0 shadow-sm rounded-4 h-100">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <div>
                                                <div className="fs-4 fw-bold">
                                                    {totals.feedback.toLocaleString()}
                                                </div>
                                                <span className="badge bg-success bg-opacity-10 text-success">
                                                    <i className="fas fa-arrow-trend-up me-1"></i>
                                                    {totals.feedbackRate}%
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-secondary small mb-3">Feedback Received</p>
                                        <div style={{ height: 130 }}>
                                            <canvas ref={donutCanvasRef}></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card border-0 shadow-sm rounded-4 h-100">
                                    <div className="card-body p-4 d-flex flex-column justify-content-between">
                                        <div>
                                            <p className="text-secondary small mb-2">Total Users</p>
                                            <div className="fs-5 fw-semibold text-secondary">
                                                Not tracked yet
                                            </div>
                                        </div>
                                        <div className="alert alert-light border small text-secondary mb-0 mt-3">
                                            <i className="fas fa-circle-info me-1"></i>
                                            Wire up a sessions/users metric to populate this card.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div className="card border-0 shadow-sm rounded-4">
                                    <div className="card-body p-4">
                                        <p className="text-secondary small mb-1">All Sessions</p>
                                        <div className="fs-5 fw-semibold text-secondary mb-2">
                                            Not tracked yet
                                        </div>
                                        <small className="text-secondary">
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
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-header bg-white border-0 rounded-4 pt-4 px-4">
                                <h6 className="fw-bold mb-0">Monthly Activity</h6>
                                <small className="text-secondary">Last 6 months performance</small>
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