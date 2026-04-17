@extends('layouts.app')
@section('title', 'Dashboard')
@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="nk-block-head nk-block-head-sm">
                <div class="nk-block-between">
                    <div class="nk-block-head-content">
                        <h3 class="nk-block-title page-title">{{ config('app.name')}} Overview</h3>
                        <div class="nk-block-des text-soft">
                            <p>Welcome to {{ config('app.name')}} Dashboard.</p>
                        </div>
                    </div>
                    <div class="nk-block-head-content">
                        <div class="toggle-wrap nk-block-tools-toggle"><a href="#"
                                class="btn btn-icon btn-trigger toggle-expand me-n1"
                                data-target="pageMenu"><em class="icon ni ni-more-v"></em></a>
                            <div class="toggle-expand-content" data-content="pageMenu">
                                <ul class="nk-block-tools g-3">
                                    <li>
                                        <div class="dropdown"><a href="#"
                                                class="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                                data-bs-toggle="dropdown"><em
                                                    class="d-none d-sm-inline icon ni ni-calender-date"></em><span><span
                                                        class="d-none d-md-inline">Last</span> 30
                                                    Days</span><em
                                                    class="dd-indc icon ni ni-chevron-right"></em></a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <ul class="link-list-opt no-bdr">
                                                    <li><a href="#"><span>Last 30 Days</span></a>
                                                    </li>
                                                    <li><a href="#"><span>Last 6 Months</span></a>
                                                    </li>
                                                    <li><a href="#"><span>Last 1 Years</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nk-block-tools-opt"><a href="#"
                                            class="btn btn-primary"><em
                                                class="icon ni ni-reports"></em><span>Reports</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nk-block">
                <div class="row g-gs">
                    <div class="col-xxl-6">
                        <div class="row g-gs">
                            <div class="col-lg-6 col-xxl-12">
                                <div class="card card-bordered">
                                    <div class="card-inner">
                                        <div class="card-title-group align-start mb-2">
                                            <div class="card-title">
                                                <h6 class="title">Courses Overview</h6>
                                                <p>An overview of total courses</p>
                                            </div>
                                            <div class="card-tools"><em
                                                    class="card-hint icon ni ni-help-fill"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Revenue from subscription"></em></div>
                                        </div>
                                        <div
                                            class="align-end gy-3 gx-5 flex-wrap flex-md-nowrap flex-lg-wrap flex-xxl-nowrap">
                                            <div class="nk-sale-data-group flex-md-nowrap g-4">
                                                <div class="nk-sale-data"><span
                                                        class="amount">Total Courses</span><span
                                                        class="sub-title">All Talents</span></div>
                                                <div class="nk-sale-data"><span
                                                        class="amount">{{ $totalCourses }} <span
                                                            class="change up text-success"><em
                                                                class="icon ni ni-arrow-long-up"></em>4.26%</span></span><span
                                                        class="sub-title">Course Enrollment</span></div>
                                            </div>
                                            <div class="nk-sales-ck sales-revenue"><canvas
                                                    class="sales-bar-chart"
                                                    id="salesRevenue"></canvas></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-xxl-12">
                                <div class="row g-gs">
                                    <div class="col-sm-6 col-lg-12 col-xxl-6">
                                        <div class="card card-bordered">
                                            <div class="card-inner">
                                                <div class="card-title-group align-start mb-2">
                                                    <div class="card-title">
                                                        <h6 class="title">Total Testimonials</h6>
                                                    </div>
                                                    <div class="card-tools"><em
                                                            class="card-hint icon ni ni-help-fill"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="left"
                                                            title="Total active subscription"></em>
                                                    </div>
                                                </div>
                                                <div
                                                    class="align-end flex-sm-wrap g-4 flex-md-nowrap">
                                                    <div class="nk-sale-data"><span
                                                            class="amount">{{ $totalTestimonials }}</span></div>
                                                    <div class="nk-sales-ck"><canvas
                                                            class="sales-bar-chart"
                                                            id="activeSubscription"></canvas></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-12 col-xxl-6">
                                        <div class="card card-bordered">
                                            <div class="card-inner">
                                                <div class="card-title-group align-start mb-2">
                                                    <div class="card-title">
                                                        <h6 class="title">Total Users</h6>
                                                    </div>
                                                    <div class="card-tools"><em
                                                            class="card-hint icon ni ni-help-fill"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="left"
                                                            title="Daily Avg. subscription"></em>
                                                    </div>
                                                </div>
                                                <div
                                                    class="align-end flex-sm-wrap g-4 flex-md-nowrap">
                                                    <div class="nk-sale-data"><span
                                                            class="amount">{{ $totalUsers }}</span></div>
                                                    <div class="nk-sales-ck"><canvas
                                                            class="sales-bar-chart"
                                                            id="totalSubscription"></canvas></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-6">
                        <div class="card card-bordered h-100">
                            <div class="card-inner">
                                <div class="card-title-group align-start gx-3 mb-3">
                                    <div class="card-title">
                                        <h6 class="title">Talent Overview</h6>
                                        <p>In 30 days of talent overview. <a href="/admin/talents">See
                                                talents</a></p>
                                    </div>
                                    <div class="card-tools">
                                        <div class="dropdown"><a href="#"
                                                class="btn btn-primary btn-dim d-none d-sm-inline-flex"
                                                data-bs-toggle="dropdown"><em
                                                    class="icon ni ni-download-cloud"></em><span><span
                                                        class="d-none d-md-inline">Download</span>
                                                    Report</span></a><a href="#"
                                                class="btn btn-icon btn-primary btn-dim d-sm-none"
                                                data-bs-toggle="dropdown"><em
                                                    class="icon ni ni-download-cloud"></em></a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <ul class="link-list-opt no-bdr">
                                                    <li><a href="#"><span>Download Mini
                                                                Version</span></a></li>
                                                    <li><a href="#"><span>Download Full
                                                                Version</span></a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#"><em
                                                                class="icon ni ni-opt-alt"></em><span>More
                                                                Options</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="nk-sale-data-group align-center justify-between gy-3 gx-5">
                                    <div class="nk-sale-data"><span class="amount sm">{{ $totalTalents }}
                                            <small>Registeres</small></span></div>
                                </div>
                                <div class="nk-sales-ck large pt-4"><canvas
                                        class="sales-overview-chart" id="salesOverview"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-8">
                        <div class="card card-bordered card-full">
                            <div class="card-inner">
                                <div class="card-title-group">
                                    <div class="card-title">
                                        <h6 class="title"><span class="me-2">Talents</span> <a
                                                href="{{ route('admin.talents.index')}}" class="link d-none d-sm-inline">See
                                                All</a></h6>
                                    </div>
                                    <div class="card-tools">
                                        <ul class="card-tools-nav">
                                            <li><a href="#"><span>Pending</span></a></li>
                                            <li><a href="#"><span>Approved</span></a></li>
                                            <li class="active"><a href="#"><span>All</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-inner p-0 border-top">
                                <div class="nk-tb-list nk-tb-orders">
                                    <div class="nk-tb-item nk-tb-head">
                                        <div class="nk-tb-col"><span>No.</span></div>
                                        <div class="nk-tb-col tb-col-sm"><span>Name</span></div>
                                        <div class="nk-tb-col tb-col-md"><span>Date</span></div>
                                        <div class="nk-tb-col tb-col-lg"><span>Phone</span></div>
                                        <div class="nk-tb-col"><span>Category</span></div>
                                        <div class="nk-tb-col"><span
                                                class="d-none d-sm-inline">Status</span></div>
                                        <div class="nk-tb-col"><span>&nbsp;</span></div>
                                    </div>
                                    @foreach ($talents as $talent)
                                    <div class="nk-tb-item">
                                        <div class="nk-tb-col"><span class="tb-lead"><a
                                                    href="#">{{ $talent->id }}</a></span></div>
                                        <div class="nk-tb-col tb-col-sm">
                                            <div class="user-card">
                                                <div class="user-avatar user-avatar-sm bg-purple">
                                                    <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}"
                                                        class="img-fluid rounded-pill" alt="img">
                                                </div>
                                                <div class="user-name"><span class="tb-lead">{{ $talent->name }}</span></div>
                                            </div>
                                        </div>
                                        <div class="nk-tb-col tb-col-md"><span
                                                class="tb-sub">{{ $talent->created_at->format('d M Y') }}</span></div>
                                        <div class="nk-tb-col tb-col-lg"><span
                                                class="tb-sub text-primary">{{ $talent->phone }}</span></div>
                                        <div class="nk-tb-col"><span
                                                class="tb-sub tb-amount">{{ $talent->category->name ?? 'Uncategorized' }}</span></div>
                                        <div class="nk-tb-col"><span
                                                class="badge badge-dot badge-dot-xs bg-success">{{ $talent->status }}</span>
                                        </div>
                                        <div class="nk-tb-col nk-tb-col-action">
                                            <div class="dropdown"><a
                                                    class="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                                    data-bs-toggle="dropdown"><em
                                                        class="icon ni ni-more-h"></em></a>
                                                <div
                                                    class="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                    <ul class="link-list-plain">
                                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickViewModal{{ $talent->id }}">Quick View</a></li>
                                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#statusModal{{ $talent->id }}">Status Update</a></li>
                                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $talent->id }}">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach

                                    @foreach($talents as $talent)
                                    <!-- Status Modal -->
                                    <div class="modal fade" id="statusModal{{ $talent->id }}" tabindex="-1"
                                        aria-labelledby="statusModalLabel{{ $talent->id }}" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <form method="POST"
                                                action="{{ route('admin.talents.updateStatus', $talent->id ) }}">
                                                @csrf
                                                @method('PUT')
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="statusModalLabel{{ $talent->id }}">Update Status
                                                        </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <select name="status" class="form-select" required>
                                                            <option value="pending"
                                                                {{ (isset($talent) && $talent->status == 'pending') ? 'selected' : '' }}>
                                                                Pending</option>
                                                            <option value="approved"
                                                                {{ (isset($talent) && $talent->status == 'approved') ? 'selected' : '' }}>
                                                                Approved</option>
                                                            <option value="rejected"
                                                                {{ (isset($talent) && $talent->status == 'rejected') ? 'selected' : '' }}>
                                                                Rejected</option>
                                                        </select>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    @endforeach

                                    @foreach($talents as $talent)
                                    <!-- Quick View Modal -->
                                    <div class="modal fade" id="quickViewModal{{ $talent->id }}" tabindex="-1"
                                        aria-labelledby="quickViewLabel{{ $talent->id }}" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">

                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="quickViewLabel{{ $talent->id }}">Talent Quick View
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>

                                                <div class="modal-body">

                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <img src="{{ asset('image/talents/' . $talent->image) }}"
                                                                alt="Talent Image" class="img-fluid rounded">


                                                        </div>

                                                        <div class="col-md-8">
                                                            <h4>{{ $talent->name }}</h4>
                                                            <p><strong>Address:</strong> {{ $talent->address }}</p>
                                                            <p><strong>Phone:</strong> {{ $talent->phone }}</p>
                                                            <p><strong>Email:</strong> {{ $talent->email }}</p>
                                                            <p><strong>Category:</strong>
                                                                {{ $talent->category->name ?? 'N/A' }}
                                                            </p>
                                                            <p><strong>Language:</strong> {{ $talent->language }}</p>
                                                            <p><strong>Description:</strong> {{ $talent->description }}</p>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <a type="button" href="{{ route('admin.talents.show', $talent->id) }}" class="btn btn-primary">View Talent</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    @endforeach

                                    @foreach($talents as $talent)
                                    <!-- Delete Modal -->
                                    <div class="modal fade" id="deleteModal{{ $talent->id }}" tabindex="-1"
                                        aria-labelledby="deleteModalLabel{{ $talent->id }}" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <form action="{{ route('admin.talents.destroy', $talent->id) }}"
                                                method="POST" class="modal-content">
                                                @csrf
                                                @method('DELETE')

                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="deleteModalLabel{{ $talent->id }}">
                                                        Confirm Delete
                                                    </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    Are you sure you want to delete this talent? This action cannot be undone.
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                    <button type="submit" class="btn btn-danger">Yes, Delete</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                            <div class="card-inner-sm border-top text-center d-sm-none"><a href="#"
                                    class="btn btn-link btn-block">See History</a></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xxl-4">
                        <div class="card card-bordered card-full">
                            <div class="card-inner border-bottom">
                                <div class="card-title-group">
                                    <div class="card-title">
                                        <h6 class="title">Recent Announcements</h6>
                                    </div>
                                    <div class="card-tools">
                                        <ul class="card-tools-nav">
                                            <li><a href="#"><span>Published</span></a></li>
                                            <li class="active"><a href="#"><span>All</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul class="nk-activity">
                                @foreach($announcements as $announcement)
                                <li class="nk-activity-item">
                                    <div class="nk-activity-media user-avatar bg-success"><img
                                            src="images/avatar/c-sm.jpg" alt=""></div>
                                    <div class="nk-activity-data">
                                        <div class="label">{{ Str::limit($announcement->title, 50) }}
                                        </div><span class="time">{{ $announcement->created_at->format('Y-m-d') }}</span>
                                    </div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-xxl-4">
                        <div class="card card-bordered card-full">
                            <div class="card-inner-group">
                                <div class="card-inner">
                                    <div class="card-title-group">
                                        <div class="card-title">
                                            <h6 class="title">New Users</h6>
                                        </div>
                                        <div class="card-tools"><a href="{{ route('admin.users.index') }}"
                                                class="link">View All</a></div>
                                    </div>
                                </div>
                                @foreach ($users as $user)
                                <div class="card-inner card-inner-md">
                                    <div class="user-card">
                                        <div class="user-avatar bg-primary-dim"><span>AB</span>
                                        </div>
                                        <div class="user-info"><span class="lead-text">{{ $user->name }}</span><span
                                                class="sub-text">{{ $user->email }}</span></div>
                                        <div class="user-action">
                                            <div class="drodown"><a href="#"
                                                    class="dropdown-toggle btn btn-icon btn-trigger me-n1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"><em
                                                        class="icon ni ni-more-h"></em></a>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <ul class="link-list-opt no-bdr">
                                                        <li><a href="#"><em
                                                                    class="icon ni ni-setting"></em><span>Action
                                                                    Settings</span></a></li>
                                                        <li>
                                                            <a href="#"><em class="icon ni ni-notify"></em><span>Push
                                                                    Notification</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4">
                        <div class="card card-bordered h-100">
                            <div class="card-inner border-bottom">
                                <div class="card-title-group">
                                    <div class="card-title">
                                        <h6 class="title">Recent Story Payments</h6>
                                    </div>
                                    <div class="card-tools"><a href="{{ route('admin.payments.index') }}" class="link">All Payments</a>
                                    </div>
                                </div>
                            </div>
                            <ul class="nk-support">
                                @foreach($payments as $payment)
                                <li class="nk-support-item">
                                    <div class="user-avatar"><img src="images/avatar/a-sm.jpg"
                                            alt=""></div>
                                    <div class="nk-support-content">
                                        <div class="title"><span>Vincent Lopez</span><span
                                                class="badge badge-dot badge-dot-xs bg-warning ms-1">{{ $payment->status }}</span>
                                            <a role="button" tabIndex="0" class="btn btn-primary btn-md"
                                                data-bs-toggle="modal" data-bs-target="#transaction_details{{ $payment->id }}">View</a>
                                        </div>
                                        <p>{{ $payment->story->title }}</p><span
                                            class="time">{{ \Carbon\Carbon::parse($payment->created_at)->format('d M Y') }}</span>
                                    </div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4">
                        <div class="card card-bordered h-100">
                            <div class="card-inner border-bottom">
                                <div class="card-title-group">
                                    <div class="card-title">
                                        <h6 class="title">Notifications</h6>
                                    </div>
                                    <div class="card-tools"><a href="#" class="link">View All</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-inner">
                                <div class="timeline">
                                    <h6 class="timeline-head">November, 2019</h6>
                                    <ul class="timeline-list">
                                        <li class="timeline-item">
                                            <div class="timeline-status bg-primary is-outline">
                                            </div>
                                            <div class="timeline-date">13 Nov <em
                                                    class="icon ni ni-alarm-alt"></em></div>
                                            <div class="timeline-data">
                                                <h6 class="timeline-title">Submited KYC Application
                                                </h6>
                                                <div class="timeline-des">
                                                    <p>Re-submitted KYC Application form.</p><span
                                                        class="time">09:30am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="timeline-item">
                                            <div class="timeline-status bg-primary"></div>
                                            <div class="timeline-date">13 Nov <em
                                                    class="icon ni ni-alarm-alt"></em></div>
                                            <div class="timeline-data">
                                                <h6 class="timeline-title">Submited KYC Application
                                                </h6>
                                                <div class="timeline-des">
                                                    <p>Re-submitted KYC Application form.</p><span
                                                        class="time">09:30am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="timeline-item">
                                            <div class="timeline-status bg-pink"></div>
                                            <div class="timeline-date">13 Nov <em
                                                    class="icon ni ni-alarm-alt"></em></div>
                                            <div class="timeline-data">
                                                <h6 class="timeline-title">Submited KYC Application
                                                </h6>
                                                <div class="timeline-des">
                                                    <p>Re-submitted KYC Application form.</p><span
                                                        class="time">09:30am</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Withdraw -->
<div class="modal new-modal fade" id="withdraw" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Withdraw Payment</h5>
                <button type="button" class="close-btn" data-bs-dismiss="modal"><span>x</span></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="amt-wrap">
                            <div class="form-wrap">
                                <label class="form-label">Enter Amount ($)<span
                                        class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                            <ul class="amt-list">
                                <li>Or</li>
                                <li>
                                    <a role="button" tabIndex="0" class="vary-amt">$50</a>
                                </li>
                                <li>
                                    <a role="button" tabIndex="0" class="vary-amt">$100</a>
                                </li>
                                <li>
                                    <a role="button" tabIndex="0" class="vary-amt">$150</a>
                                </li>
                            </ul>
                        </div>
                        <div class="buyer-method">
                            <h6>Select Payment Gateway *</h6>
                            <label class="custom_radio">
                                <input type="radio" name="payment">
                                <span class="checkmark"></span>Paypal
                            </label>
                            <label class="custom_radio">
                                <input type="radio" name="payment">
                                <span class="checkmark"></span>Stripe
                            </label>
                        </div>
                        <div class="form-wrap form-item wallet-custom">
                            <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-wrap form-item wallet-custom">
                            <label class="form-label">Password<span class="text-danger ms-1">*</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <a role="button" tabIndex="0" data-bs-toggle="modal" data-bs-target="#success_credit"
                            data-bs-dismiss="modal" class="btn btn-primary w-100">Withdraw</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Withdraw -->

<!-- Transaction details  -->
@foreach($payments as $payment)
<div class="modal new-modal fade" id="transaction_details{{ $payment->id }}" data-keyboard="false" data-backdrop="static" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Transaction details </h5>
                <button type="button" class="close-btn" data-bs-dismiss="modal"><span>×</span></button>
            </div>
            <div class="modal-body service-modal">
                <h6 class="model-head-text"> Transaction Summary </h6>
                <div class="sumary-widget">
                    <div class="summary-info">
                        <h6> Transaction ID</h6>
                        <p> #{{ $payment->tx_ref }} </p>
                    </div>
                    <div class="summary-info">
                        <h6> Transaction type </h6>
                        <p> Purchase </p>
                    </div>
                    <div class="summary-info">
                        <h6> Amount</h6>
                        <p> ${{ $payment->amount }} </p>
                    </div>
                    <div class="summary-info">
                        <h6> Currency</h6>
                        <p> {{ $payment->currency }} </p>
                    </div>
                    <div class="summary-info">
                        <h6> Processing Fee</h6>
                        <p> $20 </p>
                    </div>
                    <div class="summary-info">
                        <h6> Payment Method</h6>
                        <p> Credit Card </p>
                    </div>
                    <div class="summary-info mb-0">
                        <h6> Sender</h6>
                        <p> {{ $payment->email }} </p>
                    </div>
                    <div class="summary-info mb-0">
                        <h6> Receiver</h6>
                        <p> kabosierik@gmail.com </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endforeach
<!-- /Transaction details -->


@endsection