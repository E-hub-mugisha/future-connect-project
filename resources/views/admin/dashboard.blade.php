{{--
    resources/views/admin/dashboard.blade.php
    Main admin dashboard page.
    Controller: App\Http\Controllers\Admin\DashboardController@index
--}}
@extends('layouts.admin')

@section('title', 'Dashboard')
@section('page_title', 'Dashboard Overview')

@section('content')

    {{-- ── STAT CARDS ─────────────────────────────────────────── --}}
    <div class="stats-row">

        <div class="stat-card green">
            <div class="stat-label">Total Users</div>
            <div class="stat-value" id="c-users">{{ number_format($stats['total_users']) }}</div>
            <div class="stat-change {{ $stats['users_change'] >= 0 ? 'up' : 'down' }}">
                @if($stats['users_change'] >= 0)
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>
                @else
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                @endif
                {{ abs($stats['users_change']) }}% this month
            </div>
            <div class="stat-icon">👥</div>
        </div>

        <div class="stat-card blue">
            <div class="stat-label">Active Talents</div>
            <div class="stat-value" id="c-talents">{{ number_format($stats['active_talents']) }}</div>
            <div class="stat-change {{ $stats['talents_change'] >= 0 ? 'up' : 'down' }}">
                @if($stats['talents_change'] >= 0)
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>
                @else
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                @endif
                {{ abs($stats['talents_change']) }}% this month
            </div>
            <div class="stat-icon">⭐</div>
        </div>

        <div class="stat-card amber">
            <div class="stat-label">Open Jobs</div>
            <div class="stat-value" id="c-jobs">{{ number_format($stats['open_jobs']) }}</div>
            <div class="stat-change {{ $stats['jobs_change'] >= 0 ? 'up' : 'down' }}">
                @if($stats['jobs_change'] >= 0)
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>
                @else
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                @endif
                {{ abs($stats['jobs_change']) }}% this month
            </div>
            <div class="stat-icon">💼</div>
        </div>

        <div class="stat-card red">
            <div class="stat-label">Revenue (RWF)</div>
            <div class="stat-value" id="c-rev">{{ $stats['revenue_formatted'] }}</div>
            <div class="stat-change {{ $stats['revenue_change'] >= 0 ? 'up' : 'down' }}">
                @if($stats['revenue_change'] >= 0)
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>
                @else
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                @endif
                {{ abs($stats['revenue_change']) }}% this month
            </div>
            <div class="stat-icon">💰</div>
        </div>

    </div>

    {{-- ── REGISTRATIONS + PLATFORM HEALTH ─────────────────────── --}}
    <div class="grid-3-1">

        {{-- Registration chart --}}
        <div class="card">
            <div class="card-header">
                <div class="card-title">User Registrations</div>
                <div style="display:flex;gap:12px;align-items:center;">
                    <div style="font-size:11px;color:var(--white-30)">Last 12 months</div>
                    <a href="{{ route('admin.reports.registrations') }}" class="card-action">Export →</a>
                </div>
            </div>
            <canvas id="regChart" height="80"></canvas>
        </div>

        {{-- Platform health --}}
        <div class="card">
            <div class="card-header">
                <div class="card-title">Platform Health</div>
            </div>
            <div class="prog-list">
                @foreach($platformHealth as $metric)
                    <div class="prog-item">
                        <div class="prog-header">
                            <span class="prog-label">{{ $metric['label'] }}</span>
                            <span class="prog-val">{{ $metric['value'] }}%</span>
                        </div>
                        <div class="prog-bar">
                            <div class="prog-fill" style="width:{{ $metric['value'] }}%;background:{{ $metric['color'] }}"></div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

    </div>

    {{-- ── SKILLS DONUT + ACTIVITY FEED ────────────────────────── --}}
    <div class="grid-2">

        {{-- Skills by category --}}
        <div class="card">
            <div class="card-header">
                <div class="card-title">Skills by Category</div>
                <a href="{{ route('admin.talents.index') }}" class="card-action">View All →</a>
            </div>
            <div class="donut-wrap">
                <div class="donut-chart-area">
                    <canvas id="donutChart"></canvas>
                    <div class="donut-center">
                        <div class="big">{{ number_format($stats['active_talents']) }}</div>
                        <div class="sm">Talents</div>
                    </div>
                </div>
                <div class="donut-legend">
                    @foreach($skillCategories as $cat)
                        <div class="legend-item">
                            <div class="legend-dot" style="background:{{ $cat['color'] }}"></div>
                            <span class="legend-label">{{ $cat['name'] }}</span>
                            <span class="legend-pct">{{ $cat['percentage'] }}%</span>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>

        {{-- Recent activity --}}
        <div class="card">
            <div class="card-header">
                <div class="card-title">Recent Activity</div>
                <a href="{{ route('admin.activity') }}" class="card-action">See All →</a>
            </div>
            <div class="activity-list">
                @foreach($recentActivity as $activity)
                    <div class="activity-item">
                        <div class="activity-icon {{ $activity['color'] }}">
                            {!! $activity['icon'] !!}
                        </div>
                        <div class="activity-text">
                            <div class="activity-title">{!! $activity['message'] !!}</div>
                            <div class="activity-time">{{ $activity['time']->diffForHumans() }}</div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

    </div>

    {{-- ── RECENT USERS TABLE + QUICK ACTIONS ──────────────────── --}}
    <div class="grid-3-1">

        {{-- Recent users --}}
        <div class="card">
            <div class="card-header">
                <div class="card-title">Recent Users</div>
                <div style="display:flex;gap:12px;align-items:center;">
                    <div style="display:flex;gap:6px;">
                        <span class="badge green">Active</span>
                        <span class="badge amber">Pending</span>
                    </div>
                    <a href="{{ route('admin.users.index') }}" class="card-action">Manage →</a>
                </div>
            </div>
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Category</th>
                            <th>Joined</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($recentUsers as $user)
                            <tr>
                                <td>
                                    <div class="user-cell">
                                        <div class="u-avatar" style="background:{{ $user['avatar_bg'] }};color:{{ $user['avatar_color'] }}">
                                            {{ $user['initials'] }}
                                        </div>
                                        <div>
                                            <div class="u-name">{{ $user['name'] }}</div>
                                            <div class="u-email">{{ $user['email'] }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge {{ $user['category_color'] }}">{{ $user['category'] }}</span>
                                </td>
                                <td style="color:var(--white-60);font-size:12px;">
                                    {{ $user['joined_at']->format('d M Y') }}
                                </td>
                                <td>
                                    @php
                                        $statusMap = [
                                            'verified'  => 'green',
                                            'pending'   => 'amber',
                                            'suspended' => 'red',
                                        ];
                                    @endphp
                                    <span class="badge {{ $statusMap[$user['status']] ?? 'blue' }}">
                                        {{ ucfirst($user['status']) }}
                                    </span>
                                </td>
                                <td>
                                    <a href="{{ route('admin.users.show', $user['id']) }}"
                                       style="font-size:12px;color:var(--green);text-decoration:none;">
                                        View
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>

        {{-- Quick actions + pending reviews --}}
        <div class="card">
            <div class="card-header">
                <div class="card-title">Quick Actions</div>
            </div>
            <div class="quick-grid">
                <a href="{{ route('admin.users.create') }}" class="quick-btn">
                    <span class="quick-btn-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                    </span>
                    Add User
                </a>
                <a href="{{ route('admin.verification.index') }}" class="quick-btn">
                    <span class="quick-btn-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </span>
                    Verify ({{ $pendingVerifications }})
                </a>
                <a href="{{ route('admin.jobs.create') }}" class="quick-btn">
                    <span class="quick-btn-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </span>
                    Post Job
                </a>
                <a href="{{ route('admin.announcements.create') }}" class="quick-btn">
                    <span class="quick-btn-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    Announce
                </a>
                <a href="{{ route('admin.reports.index') }}" class="quick-btn">
                    <span class="quick-btn-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    </span>
                    Reports
                </a>
                <a href="{{ route('admin.settings.index') }}" class="quick-btn">
                    <span class="quick-btn-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 1 21 12a10 10 0 0 1-1.93 5.07M4.93 4.93A10 10 0 0 0 3 12a10 10 0 0 0 1.93 5.07"/></svg>
                    </span>
                    Settings
                </a>
            </div>

            {{-- Pending reviews --}}
            <div class="pending-section">
                <div class="pending-section-title">Pending Reviews</div>
                <div class="pending-list">
                    <div class="review-item amber">
                        <span class="review-label">Skill Verification</span>
                        <span class="badge amber">{{ $pendingVerifications }} pending</span>
                    </div>
                    <div class="review-item blue">
                        <span class="review-label">Seller Applications</span>
                        <span class="badge blue">{{ $pendingSellerApplications }} new</span>
                    </div>
                    <div class="review-item red">
                        <span class="review-label">Flagged Content</span>
                        <span class="badge red">4 urgent</span>
                    </div>
                </div>
            </div>
        </div>

    </div>

@endsection

@push('scripts')
<script>
const green      = '#00a667';
const gridColor  = 'rgba(255,255,255,0.05)';
const labelColor = 'rgba(255,255,255,0.4)';

// ── Registration line chart ──────────────────────────────
const regCtx = document.getElementById('regChart').getContext('2d');
new Chart(regCtx, {
    type: 'line',
    data: {
        labels:   @json($chartLabels),
        datasets: [{
            label:              'New Users',
            data:               @json($chartData),
            borderColor:        green,
            backgroundColor:    'rgba(0,166,103,0.08)',
            borderWidth:        2,
            pointBackgroundColor: green,
            pointRadius:        3,
            pointHoverRadius:   5,
            fill:               true,
            tension:            0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#0b2540',
                borderColor:     'rgba(0,166,103,0.3)',
                borderWidth:     1,
                titleColor:      '#fff',
                bodyColor:       'rgba(255,255,255,0.7)',
                padding:         10
            }
        },
        scales: {
            x: { grid: { color: gridColor }, ticks: { color: labelColor, font: { size: 11 } } },
            y: { grid: { color: gridColor }, ticks: { color: labelColor, font: { size: 11 } } }
        }
    }
});

// ── Skills donut chart ───────────────────────────────────
const dCtx = document.getElementById('donutChart').getContext('2d');
new Chart(dCtx, {
    type: 'doughnut',
    data: {
        labels:   @json($skillCategories->pluck('name')),
        datasets: [{
            data:            @json($skillCategories->pluck('percentage')),
            backgroundColor: @json($skillCategories->pluck('color')),
            borderWidth:     0,
            hoverOffset:     4
        }]
    },
    options: {
        cutout: '70%',
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#0b2540',
                borderColor:     'rgba(0,166,103,0.3)',
                borderWidth:     1,
                titleColor:      '#fff',
                bodyColor:       'rgba(255,255,255,0.7)',
                padding:         10
            }
        }
    }
});
</script>
@endpush
