@extends('layouts.app')
@section('content')

<!-- Page Content -->
<div class="page-wrapper">
    <div class="page-content content pb-0 bg-light">
        <div class="main-title mb-4">
            <h4>Dashboard</h4>
        </div>

        <!-- status -->
        <div class="row status-info">
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-start">
                            <div
                                class="avatar avatar-md bg-muted rounded-circle me-2 d-flex align-item-center justify-content-center text-center avatar-info">
                                <i
                                    class="ti ti-new-section text-white d-flex align-items-center justify-content-center"></i>
                            </div>
                            <div>
                                <p class="mb-1"> Orders Active</p>
                                <h6 class="mb-0">950</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-start">
                            <div
                                class="avatar avatar-md bg-warning rounded-circle me-2 d-flex align-item-center justify-content-center text-center avatar-info">
                                <i class="ti ti-checks text-white d-flex align-items-center justify-content-center"></i>
                            </div>
                            <div>
                                <p class="mb-1">Pending</p>
                                <h6 class="mb-0">800</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-start">
                            <div
                                class="avatar avatar-md bg-info rounded-circle me-2 d-flex align-item-center justify-content-center text-center avatar-info">
                                <i class="ti ti-heart text-white d-flex align-items-center justify-content-center"></i>
                            </div>
                            <div>
                                <p class="mb-1">Completed</p>
                                <h6 class="mb-0">150</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-start">
                            <div
                                class="avatar avatar-md bg-pink rounded-circle me-2 d-flex align-item-center justify-content-center text-center avatar-info">
                                <i class="ti ti-star text-white d-flex align-items-center justify-content-center"></i>
                            </div>
                            <div>
                                <p class="mb-1">Cancelled</p>
                                <h6 class="mb-0">₹500,000</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- status -->

        <!-- Overview -->
        <div class="row">
            <div class="col-xl-3 col-md-6 d-flex">
                <div class="dash-widget flex-fill w-100">
                    <div class="d-flex align-items-center mb-3">
                        <span class="dash-icon bg-success flex-shrink-0">
                            <i class="ti ti-credit-card"></i>
                        </span>
                        <div>
                            <p class="mb-1">Total Credit</p>
                            <h5 class="mb-0">$10,292.50</h5>
                        </div>
                    </div>
                    <div class="bg-light p-3 rounded-2">
                        <p class="text-dark"><span class="text-secondary">+10%</span> from last week</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex">
                <div class="dash-widget flex-fill w-100">
                    <div class="d-flex align-items-center mb-3">
                        <span class="dash-icon bg-danger flex-shrink-0">
                            <i class="ti ti-report-money"></i>
                        </span>
                        <div>
                            <p class="mb-1">Total Debit</p>
                            <h5 class="mb-0">$4,254.47</h5>
                        </div>
                    </div>
                    <div class="bg-light p-3 rounded-2">
                        <p class="text-dark"><span class="text-error">-1%</span> from last week</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-md-12 d-flex">
                <div class="dash-earning flex-fill w-100">
                    <div class="d-flex align-items-center gap-4">
                        <div class="earning-info">
                            <p class="mb-1">Earnings</p>
                            <h5>$1,57,815</h5>
                        </div>
                        <div class="earning-info">
                            <p class="mb-1">Wallet Balance</p>
                            <h5>$5690</h5>
                        </div>
                    </div>
                    <div class="earning-btn text-end">
                        <a href="seller-wallet.html" class="btn btn-primary btn-md"><i
                                class="ti ti-shopping-cart me-1"></i>Wallet</a>
                    </div>
                    <a role="button" tabIndex="0" class="withdraw-link" data-bs-toggle="modal"
                        data-bs-target="#withdraw">Withdraw Funds</a>
                </div>
            </div>
        </div>
        <!-- /Overview -->

        <!-- status -->
        <div class="row status-info">
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="mb-1"> Orders Active</p>
                                <h6 class="mb-0">454</h6>
                            </div>
                            <span class="bg-success-transparent status-icon"><i
                                    class="ti ti-news text-success"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="mb-1">Order Pending</p>
                                <h6 class="mb-1">47</h6>
                            </div>
                            <span class="bg-warning-transparent status-icon"><i
                                    class="ti ti-shopping-cart-bolt text-warning"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="mb-1">Orders Completed</p>
                                <h6 class="mb-1">25</h6>
                            </div>
                            <span class="bg-info-transparent status-icon"><i class="ti ti-hexagon text-info"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="mb-1">Orders Cancelled</p>
                                <h6 class="mb-1">632</h6>
                            </div>
                            <span class="bg-error-transparent status-icon"><i
                                    class="ti ti-status-change text-error"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- status -->

        <!-- order -->
        <div class="row">
            <div class="col-xl-8 col-md-6 d-flex">
                <div class="card dashboard-card flex-fill w-100">
                    <div class="card-header">
                        <div class="gig-card-head">
                            <h5 class="mb-0">Recent Orders</h5>
                        </div>
                        <a href="seller-orders.html" class="view-link mb-0">View All</a>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive card-table">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="table-img">
                                                    <a role="button" tabIndex="0"><img src="assets/img/gigs/gigs-07.jpg"
                                                            class="img-fluid rounded-pill" alt="img"></a>
                                                </div>
                                                <div class="recent-payment">
                                                    <h6><a role="button" tabIndex="0">I will do creating and promoting
                                                            video...</a></h6>
                                                    <ul>
                                                        <li>Delivery Date: 11 Jan 2025</li>
                                                        <li>Buyer : <span class="text-dark">Jones</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-pink-transparent">New</span>
                                        </td>
                                        <td class="text-end amount-info">
                                            <h6 class="mb-0">$1400</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="table-img">
                                                    <a role="button" tabIndex="0"><img src="assets/img/gigs/gigs-08.jpg"
                                                            class="img-fluid rounded-pill" alt="img"></a>
                                                </div>
                                                <div class="recent-payment">
                                                    <h6><a role="button" tabIndex="0">Optimizing online presence to
                                                            enhance...</a></h6>
                                                    <ul>
                                                        <li>Delivery Date: 11/01/2025</li>
                                                        <li>Buyer : <span class="text-dark">Rose</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-pink-transparent">New</span>
                                        </td>
                                        <td class="text-end amount-info">
                                            <h6 class="mb-0">$7500</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="table-img">
                                                    <a role="button" tabIndex="0"><img src="assets/img/gigs/gigs-09.jpg"
                                                            class="img-fluid rounded-pill" alt="img"></a>
                                                </div>
                                                <div class="recent-payment">
                                                    <h6><a role="button" tabIndex="0">I will do english or german
                                                            transcript of any...</a></h6>
                                                    <ul>
                                                        <li>Delivery Date: 09/01/2025</li>
                                                        <li>Buyer : <span class="text-dark">Smith</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-pink-transparent">New</span>
                                        </td>
                                        <td class="text-end amount-info">
                                            <h6 class="mb-0">$4470</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="table-img">
                                                    <a role="button" tabIndex="0"><img src="assets/img/gigs/gigs-04.jpg"
                                                            class="img-fluid rounded-pill" alt="img"></a>
                                                </div>
                                                <div class="recent-payment">
                                                    <h6><a role="button" tabIndex="0">I will do professional lifestyle
                                                            and product...</a></h6>
                                                    <ul>
                                                        <li>Delivery Date: 08/01/2025</li>
                                                        <li>Buyer : <span class="text-dark">Lidia</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-pink-transparent">New</span>
                                        </td>
                                        <td class="text-end amount-info">
                                            <h6 class="mb-0">$3570</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="table-img">
                                                    <a role="button" tabIndex="0"><img src="assets/img/gigs/gigs-06.jpg"
                                                            class="img-fluid rounded-pill" alt="img"></a>
                                                </div>
                                                <div class="recent-payment">
                                                    <h6><a role="button" tabIndex="0">I will develop openai, dalle, chat
                                                            gpt...</a></h6>
                                                    <ul>
                                                        <li>Delivery Date: 07/01/2025</li>
                                                        <li>Buyer : <span class="text-dark">Anderson</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-success-transparent text-success">Completed</span>
                                        </td>
                                        <td class="text-end amount-info">
                                            <h6 class="mb-0">$4780</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
                <div class="card files-card flex-fill w-100">
                    <div class="card-header d-flex align-items-center justify-content-between">
                        <div class="gig-card-head">
                            <h5 class="mb-0">Files</h5>
                        </div>
                        <a href="seller-files.html" class="view-link mb-0">View All</a>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive card-table">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <span class="files-icon flex-shrink-0"><i class="ti ti-pdf"></i></span>
                                                <div>
                                                    <h6 class="mb-1">Document.pdf</h6>
                                                    <p>Update on: 11 Jan 2025</p>
                                                </div>
                                                <div class="card-edit-icon d-flex gap-2">
                                                    <a role="button" tabIndex="0"
                                                        class="d-flex align-items-center justify-content-center"><i
                                                            class="ti ti-info-circle "></i> </a>
                                                    <a role="button" tabIndex="0"
                                                        class="d-flex align-items-center justify-content-center"><i
                                                            class="ti ti-download"></i> </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <span class="files-icon flex-shrink-0"><i
                                                        class="ti ti-photo"></i></span>
                                                <div>
                                                    <h6 class="mb-1">Logo.png</h6>
                                                    <p>Update on: 10 Jan 2025</p>
                                                </div>
                                                <div class="card-edit-icon d-flex gap-2">
                                                    <a role="button" tabIndex="0"
                                                        class="d-flex align-items-center justify-content-center"><i
                                                            class="ti ti-info-circle "></i> </a>
                                                    <a role="button" tabIndex="0"
                                                        class="d-flex align-items-center justify-content-center"><i
                                                            class="ti ti-download"></i> </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <span class="files-icon flex-shrink-0"><i
                                                        class="ti ti-photo"></i></span>
                                                <div>
                                                    <h6 class="mb-1">Worklog.png</h6>
                                                    <p>Update on: 09 Jan 2025</p>
                                                </div>
                                                <div class="card-edit-icon d-flex gap-2">
                                                    <a role="button" tabIndex="0"
                                                        class="d-flex align-items-center justify-content-center"><i
                                                            class="ti ti-info-circle "></i> </a>
                                                    <a role="button" tabIndex="0"
                                                        class="d-flex align-items-center justify-content-center"><i
                                                            class="ti ti-download"></i> </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <span class="files-icon flex-shrink-0"><i
                                                        class="ti ti-photo"></i></span>
                                                <div>
                                                    <h6 class="mb-1">Alter.png</h6>
                                                    <p>Update on: 08 Jan 2025</p>
                                                </div>
                                                <div class="card-edit-icon d-flex gap-2">
                                                    <a role="button" tabIndex="0"
                                                        class="d-flex align-items-center justify-content-center"><i
                                                            class="ti ti-info-circle "></i> </a>
                                                    <a role="button" tabIndex="0"
                                                        class="d-flex align-items-center justify-content-center"><i
                                                            class="ti ti-download"></i> </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <span class="files-icon flex-shrink-0"><i
                                                        class="ti ti-photo"></i></span>
                                                <div>
                                                    <h6 class="mb-1">Reportfile.png</h6>
                                                    <p>Update on: 07 Jan 2025</p>
                                                </div>
                                                <div class="card-edit-icon d-flex gap-2">
                                                    <a role="button" tabIndex="0"
                                                        class="d-flex align-items-center justify-content-center"><i
                                                            class="ti ti-info-circle "></i> </a>
                                                    <a role="button" tabIndex="0"
                                                        class="d-flex align-items-center justify-content-center"><i
                                                            class="ti ti-download"></i> </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- order -->

        <div class="row">
            <!-- Sales Statistics -->
            <div class="col-lg-12">
                <div class="card dashboard-card">
                    <div class="card-header">
                        <div class="gig-card-head">
                            <h5 class="card-title mb-0">Sales Statistics</h5>
                        </div>
                        <div class="d-flex align-item-center gap-3">
                            <ul class="revenue-tab nav nav-tabs m-0 border-0" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a role="button" tabIndex="0" class="nav-link active" data-bs-toggle="tab"
                                        data-bs-target="#gigs_Information" aria-selected="false" role="tab"
                                        tabindex="-1">
                                        Gigs
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a role="button" tabIndex="0" class="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#pay_Information" aria-selected="false" role="tab"
                                        tabindex="-1">
                                        Payments
                                    </a>
                                </li>
                            </ul>
                            <div class="input-icon-start mb-0 position-relative year">
                                <span class="input-icon-addon"><i class="ti ti-calendar-up"></i></span>
                                <input type="text" class="form-control yearpicker" placeholder="2025">
                                <i class="ti ti-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="gigs_Information" role="tabpanel">
                            <div class="card-body pb-0">
                                <div id="sales-income"></div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pay_Information" role="tabpanel">
                            <div class="card-body pb-0">
                                <div class="d-flex align-items-center justify-content-between gap-4 flex-wrap mb-4">
                                    <div class="d-flex align-items-center gap-4">
                                        <div>
                                            <p class="mb-1">Revenue</p>
                                            <h5 class="mb-0">$9,564.30</h5>
                                        </div>
                                        <div>
                                            <p class="mb-1">Withdrawn</p>
                                            <h5 class="mb-0">$3,855.64</h5>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <p class="revenue me-2 mb-0"><i class="ti ti-point-filled"></i>Revenue</p>
                                        <p class="mb-0"><i class="ti ti-point-filled"></i>Withdrawn</p>
                                    </div>
                                </div>
                                <div id="s-col" class="chart-set"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Sales Statistics -->

        </div>

        <div class="row">
            <div class="col-xl-8 col-md-6 d-flex">
                <div class="card recent-payment-card flex-fill w-100">
                    <div class="card-header d-flex align-items-center justify-content-between">
                        <div class="gig-card-head">
                            <h5 class="mb-0">Recent Payments</h5>
                        </div>
                        <a href="seller-transactions.html" class="view-link mb-0">View All</a>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive card-table">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="recent-payment">
                                                <h6><a role="button" tabIndex="0">I will create a chatbot to change
                                                        leads..</a></h6>
                                                <p>Id : #232 <span>|</span> Order Date: 11 Jan 2025</p>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-success-transparent text-success"><i
                                                    class="ti ti-point-filled me-1"></i>Paid</span>
                                        </td>
                                        <td class="text-end amount-info w-25">
                                            <h6 class="mb-0">+$500</h6>
                                            <a role="button" tabIndex="0" class="btn btn-primary btn-md"
                                                data-bs-toggle="modal" data-bs-target="#transaction_details">View</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="recent-payment">
                                                <h6><a role="button" tabIndex="0">I will do english or german transcript
                                                        of any..</a></h6>
                                                <p>Id : #231 <span>|</span> Order Date: 10 Jan 2025</p>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-success-transparent"><i
                                                    class="ti ti-point-filled me-1"></i>Paid</span>
                                        </td>
                                        <td class="text-end amount-info w-25">
                                            <h6 class="mb-0">+$500</h6>
                                            <a role="button" tabIndex="0" class="btn btn-primary btn-md "
                                                data-bs-toggle="modal" data-bs-target="#transaction_details">View</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="recent-payment">
                                                <h6><a role="button" tabIndex="0">I will do professional lifestyle and
                                                        product ph..</a></h6>
                                                <p>Id : #230 <span>|</span> Order Date: 09 Jan 2025</p>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-success-transparent"><i
                                                    class="ti ti-point-filled me-1"></i>Paid</span>
                                        </td>
                                        <td class="text-end amount-info w-25">
                                            <h6 class="mb-0">+$7800</h6>
                                            <a role="button" tabIndex="0" class="btn btn-primary btn-md"
                                                data-bs-toggle="modal" data-bs-target="#transaction_details">View</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="recent-payment">
                                                <h6><a role="button" tabIndex="0">I will develop openai, dall, chat gpt
                                                        app for...</a></h6>
                                                <p>Id : #229 <span>|</span> Order Date: 08 Jan 2025</p>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-success-transparent"><i
                                                    class="ti ti-point-filled me-1"></i>Paid</span>
                                        </td>
                                        <td class="text-end amount-info w-25">
                                            <h6 class="mb-0">+$7400</h6>
                                            <a role="button" tabIndex="0" class="btn btn-primary btn-md"
                                                data-bs-toggle="modal" data-bs-target="#transaction_details">View</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="recent-payment">
                                                <h6><a role="button" tabIndex="0">I will develop Website for
                                                        Ecommerce</a></h6>
                                                <p>Id : #414 <span>|</span> Order Date: 07 Jan 2025</p>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <span class="badge badge-success-transparent"><i
                                                    class="ti ti-point-filled me-1"></i>Paid</span>
                                        </td>
                                        <td class="text-end amount-info w-25">
                                            <h6 class="mb-0">+$1452</h6>
                                            <a role="button" tabIndex="0" class="btn btn-primary btn-md"
                                                data-bs-toggle="modal" data-bs-target="#transaction_details">View</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
                <div class="card recent-payment-card flex-fill w-100">
                    <div class="card-header d-flex align-items-center justify-content-between">
                        <div class="gig-card-head">
                            <h5 class="mb-0">Recent Notifications</h5>
                        </div>
                        <a href="seller-notifications.html" class="view-link mb-0">View All</a>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive card-table">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="recent-payment">
                                                <h6><a role="button" tabIndex="0">Your Password Changed</a></h6>
                                                <p>54 Min Ago</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="recent-payment">
                                                <h6><a role="button" tabIndex="0">Payment Settings Updated</a></h6>
                                                <p>1 Hour Ago</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="recent-payment">
                                                <h6><a role="button" tabIndex="0">Purchased Gigs “I will do
                                                        professional..”</a></h6>
                                                <p>1 Day Ago</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="recent-payment">
                                                <h6><a role="button" tabIndex="0">Added New Gig “I will do english”.</a>
                                                </h6>
                                                <p>15 Min Ago</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="recent-payment">
                                                <h6><a role="button" tabIndex="0">Profile Updated</a></h6>
                                                <p>1 Day Ago</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Page Content -->

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
<div class="modal new-modal fade" id="transaction_details" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Transaction details </h5><button type="button" class="close-btn"
                    data-bs-dismiss="modal"><span>×</span></button>
            </div>
            <div class="modal-body service-modal">
                <h6 class="model-head-text"> Transaction Summary </h6>
                <div class="sumary-widget">
                    <div class="summary-info">
                        <h6> Transaction ID</h6>
                        <p> #TXN-20250321-00123462 </p>
                    </div>
                    <div class="summary-info">
                        <h6> Transaction type </h6>
                        <p> Purchase </p>
                    </div>
                    <div class="summary-info">
                        <h6> Amount</h6>
                        <p> $320 </p>
                    </div>
                    <div class="summary-info">
                        <h6> Currency</h6>
                        <p> USD </p>
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
                        <p> John Doe </p>
                    </div>
                    <div class="summary-info mb-0">
                        <h6> Receiver</h6>
                        <p> Jane Smith </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Transaction details -->


