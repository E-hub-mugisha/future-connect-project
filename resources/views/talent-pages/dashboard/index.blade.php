@extends('layouts.talents')
@section('title', 'Dashboard')
@section('content')

<div class="container">
    <div class="az-content-body">
        <div class="az-dashboard-one-title">
            <div>
                <h2 class="az-dashboard-title">Hi, welcome back! {{ Auth::user()->name }}</h2>
                <p class="az-dashboard-text">Your web analytics dashboard .</p>
                <p class="az-dashboard-text">
                    Level: <strong>{{ ucfirst($level) }}</strong> |
                    Status: <strong>{{ ucfirst($status) }}</strong>
                </p>
            </div>
            <div class="az-content-header-right">
                <span class="badge bg-success">
                    {{ $matched ? 'Matched' : 'Not Matched' }}
                </span>
                <a href="#" class="btn btn-purple">Export</a>
            </div>
        </div><!-- az-dashboard-one-title -->

        <div class="az-dashboard-nav">
            <nav class="nav">
                <a class="nav-link active" data-bs-toggle="tab" href="#">Overview</a>
            </nav>

            <nav class="nav">
                <a class="nav-link" href="#"><i class="far fa-save"></i> Save Report</a>
                <a class="nav-link" href="#"><i class="far fa-file-pdf"></i> Export to PDF</a>
                <a class="nav-link" href="#"><i class="far fa-envelope"></i>Send to Email</a>
                <a class="nav-link" href="#"><i class="fas fa-ellipsis-h"></i></a>
            </nav>
        </div>

        <div class="row row-sm mg-b-20">
            <div class="col-lg-7 ht-lg-100p">
                <div class="card card-dashboard-one">
                    <div class="card-header">
                        <div>
                            <h6 class="card-title">Talent Overview</h6>
                            <p class="card-text">Your Activity summary</p>
                        </div>
                        <div class="btn-group">
                            <button class="btn active">Day</button>
                            <button class="btn">Week</button>
                            <button class="btn">Month</button>
                        </div>
                    </div><!-- card-header -->
                    <div class="card-body">
                        <div class="card-body-top mb-3 d-flex justify-content-between">
                            <div>
                                <label class="mg-b-0">Total Courses</label>
                                <h2>{{ number_format($totals['courses']) }}</h2>
                            </div>
                            <div>
                                <label class="mg-b-0">Skills</label>
                                <h2>{{ number_format($totals['skills']) }}</h2>
                            </div>
                            <div>
                                <label class="mg-b-0">Connections</label>
                                <h2>{{ number_format($totals['connections']) }}</h2>
                            </div>
                            <div>
                                <label class="mg-b-0">Feedback</label>
                                <h2>16,869</h2>
                            </div>
                        </div><!-- card-body-top -->
                        <div class="flot-chart-wrapper" style="margin-top: 4.5rem;">
                            <canvas id="talentBarChart" class="flot-chart"></canvas>
                        </div><!-- flot-chart-wrapper -->
                    </div><!-- card-body -->
                </div><!-- card -->
            </div><!-- col -->
            <div class="col-lg-5 mg-t-20 mg-lg-t-0">
                <div class="row row-sm">
                    <div class="col-sm-6">
                        <div class="card card-dashboard-two">
                            <div class="card-header">
                                <h6>{{ $totals['feedback'] }} <i class="icon ion-md-trending-up tx-success"></i> <small>{{ number_format($totals['feedback'] / $totals['stories'] * 100, 2) }}%</small></h6>
                                <p>Feedback Received</p>
                            </div><!-- card-header -->
                            <div class="card-body">
                                <div class="chart-wrapper">
                                    <canvas id="engagementDonut" class="flot-chart"></canvas>
                                </div><!-- chart-wrapper -->
                            </div><!-- card-body -->
                        </div><!-- card -->
                    </div><!-- col -->
                    <div class="col-sm-6 mg-t-20 mg-sm-t-0">
                        <div class="card card-dashboard-two">
                            <div class="card-header">
                                <h6>86k <i class="icon ion-md-trending-down tx-danger"></i> <small>0.86%</small></h6>
                                <p>Total Users</p>
                            </div><!-- card-header -->
                            <div class="card-body">
                                <div class="chart-wrapper">
                                    <div id="flotChart2" class="flot-chart"></div>
                                </div><!-- chart-wrapper -->
                            </div><!-- card-body -->
                        </div><!-- card -->
                    </div><!-- col -->
                    <div class="col-sm-12 mg-t-20">
                        <div class="card card-dashboard-three">
                            <div class="card-header">
                                <p>All Sessions</p>
                                <h6>16,869 <small class="tx-success"><i class="icon ion-md-arrow-up"></i> 2.87%</small></h6>
                                <small>The total number of sessions within the date range. It is the period time a user is actively
                                    engaged with your website, page or app, etc.</small>
                            </div><!-- card-header -->
                            <div class="card-body">
                                <div class="chart"><canvas id="chartBar5"></canvas></div>
                            </div>
                        </div>
                    </div>
                </div><!-- row -->
            </div><!--col -->
        </div><!-- row -->

        <div class="row row-sm mg-b-20">
            
            <div class="col-lg-12">
                <div class="card card-dashboard-three">
                    <div class="card-header mb-8">
                        <p>Monthly Activity</p>
                        <small>Last 6 months performance</small>
                    </div>
                    <div class="card-body" style="margin-top: 4rem;">
                        <canvas id="monthlyLineChart" height="100"></canvas>
                    </div>
                </div>
            </div>
        </div><!-- row -->


    </div><!-- az-content-body -->
</div>

{{-- CHART JS --}}
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
/* BAR CHART */
new Chart(document.getElementById('talentBarChart'), {
    type: 'bar',
    data: {
        labels: ['Courses', 'Skills', 'Stories', 'Feedback', 'Connections'],
        datasets: [{
            data: [
                {{ $totals['courses'] }},
                {{ $totals['skills'] }},
                {{ $totals['stories'] }},
                {{ $totals['feedback'] }},
                {{ $totals['connections'] }}
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

/* DONUT CHART */
new Chart(document.getElementById('engagementDonut'), {
    type: 'doughnut',
    data: {
        labels: ['Stories', 'Feedback', 'Connections'],
        datasets: [{
            data: [
                {{ $totals['stories'] }},
                {{ $totals['feedback'] }},
                {{ $totals['connections'] }}
            ]
        }]
    },
    options: {
        plugins: { legend: { position: 'bottom' } }
    }
});

/* LINE CHART */
new Chart(document.getElementById('monthlyLineChart'), {
    type: 'line',
    data: {
        labels: {!! json_encode($months) !!},
        datasets: [
            {
                label: 'Stories',
                data: {!! json_encode($monthlyStories) !!},
                tension: 0.4
            },
            {
                label: 'Feedback',
                data: {!! json_encode($monthlyFeedback) !!},
                tension: 0.4
            },
            {
                label: 'Connections',
                data: {!! json_encode($monthlyConnections) !!},
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
</script>
@endsection