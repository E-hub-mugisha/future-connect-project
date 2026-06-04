@extends('layouts.app')
@section('title', 'Dashboard')
@section('content')

<style>
    /* ===== GLOBAL ===== */
    * {
        box-sizing: border-box;
    }

    body,
    .nk-content-inner {
        background: #0e1618;
        color: #c8dde0;
    }

    /* ===== PAGE HEADER ===== */
    .nk-block-head {
        padding: 24px 0 16px;
    }

    .nk-block-title.page-title {
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;
        margin: 0 0 4px;
    }

    .nk-block-des p {
        font-size: 13px;
        color: #6b8a90;
        margin: 0;
    }

    .btn-white.btn-dim.btn-outline-light {
        background: #0f1e21;
        border: 1px solid #1e3035;
        color: #8aa4aa;
        font-size: 13px;
        border-radius: 8px;
        padding: 7px 14px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        transition: border-color 0.2s, color 0.2s;
    }

    .btn-white.btn-dim.btn-outline-light:hover {
        border-color: rgba(0, 166, 103, 0.4);
        color: #00a667;
    }

    .nk-block-tools .btn-primary {
        background: #00a667;
        border: none;
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        border-radius: 8px;
        padding: 8px 16px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        transition: background 0.2s, transform 0.2s;
    }

    .nk-block-tools .btn-primary:hover {
        background: #008f58;
        transform: translateY(-1px);
    }

    /* Dropdown */
    .dropdown-menu {
        background: #0f1e21;
        border: 1px solid #1e3035;
        border-radius: 10px;
        padding: 6px;
        min-width: 160px;
    }

    .link-list-opt li a,
    .link-list-plain li a {
        display: block;
        padding: 7px 12px;
        font-size: 13px;
        color: #8aa4aa;
        text-decoration: none;
        border-radius: 6px;
        transition: background 0.15s, color 0.15s;
    }

    .link-list-opt li a:hover,
    .link-list-plain li a:hover {
        background: rgba(0, 166, 103, 0.08);
        color: #00a667;
    }

    .divider {
        border-top: 1px solid #1a2a2e;
        margin: 4px 0;
    }

    /* ===== CARDS ===== */
    .card.card-bordered {
        background: #0f1e21;
        border: 1px solid #1e3035 !important;
        border-radius: 14px;
        transition: border-color 0.25s;
    }

    .card.card-bordered:hover {
        border-color: rgba(0, 166, 103, 0.3) !important;
    }

    .card-inner {
        padding: 20px 24px;
    }

    .card-inner-sm {
        padding: 12px 24px;
    }

    .card-inner-md {
        padding: 14px 24px;
    }

    .card-inner.border-bottom,
    .card-inner-group .card-inner.border-bottom,
    .card-inner.p-0.border-top {
        border-color: #1a2a2e !important;
    }

    .border-bottom {
        border-bottom: 1px solid #1a2a2e !important;
    }

    .border-top {
        border-top: 1px solid #1a2a2e !important;
    }

    .card-title h6.title {
        font-size: 14px;
        font-weight: 600;
        color: #e0f0f0;
        margin: 0 0 2px;
    }

    .card-title p {
        font-size: 12px;
        color: #6b8a90;
        margin: 0;
    }

    .card-title p a {
        color: #00a667;
        text-decoration: none;
    }

    .card-title p a:hover {
        text-decoration: underline;
    }

    .card-hint {
        color: #4a6670;
        font-size: 16px;
        cursor: pointer;
    }

    .card-hint:hover {
        color: #00a667;
    }

    /* Card tools nav */
    .card-tools-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 4px;
    }

    .card-tools-nav li a {
        font-size: 12px;
        color: #6b8a90;
        text-decoration: none;
        padding: 4px 10px;
        border-radius: 6px;
        transition: background 0.15s, color 0.15s;
    }

    .card-tools-nav li a:hover,
    .card-tools-nav li.active a {
        background: rgba(0, 166, 103, 0.1);
        color: #00a667;
    }

    /* ===== STAT / SALE DATA ===== */
    .nk-sale-data .amount {
        font-size: 22px;
        font-weight: 700;
        color: #ffffff;
        display: block;
        line-height: 1.2;
    }

    .nk-sale-data .amount.sm {
        font-size: 28px;
    }

    .nk-sale-data .sub-title {
        font-size: 11px;
        color: #6b8a90;
        margin-top: 2px;
        display: block;
    }

    .nk-sale-data .change {
        font-size: 12px;
        font-weight: 500;
    }

    .nk-sale-data .change.up.text-success {
        color: #00a667 !important;
    }

    /* ===== TALENT TABLE ===== */
    .nk-tb-list {
        width: 100%;
    }

    .nk-tb-item {
        display: flex;
        align-items: center;
        padding: 10px 24px;
        border-bottom: 1px solid #1a2a2e;
    }

    .nk-tb-item:last-child {
        border-bottom: none;
    }

    .nk-tb-item.nk-tb-head {
        background: #0b1416;
    }

    .nk-tb-head .nk-tb-col span {
        font-size: 11px;
        font-weight: 600;
        color: #6b8a90;
        text-transform: uppercase;
        letter-spacing: 0.4px;
    }

    .nk-tb-col {
        flex: 1;
        min-width: 0;
        padding: 0 8px;
    }

    .nk-tb-col:first-child {
        flex: 0 0 50px;
    }

    .nk-tb-col.nk-tb-col-action {
        flex: 0 0 40px;
    }

    .tb-lead {
        font-size: 13px;
        color: #c8dde0;
        font-weight: 500;
    }

    .tb-lead a {
        color: #c8dde0;
        text-decoration: none;
    }

    .tb-lead a:hover {
        color: #00a667;
    }

    .tb-sub {
        font-size: 12px;
        color: #6b8a90;
    }

    .tb-sub.text-primary {
        color: #00a667 !important;
    }

    .tb-amount {
        font-size: 12px;
        color: #8aa4aa;
    }

    .user-card {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .user-avatar {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
    }

    .user-avatar.bg-purple {
        background: rgba(83, 74, 183, 0.15);
        color: #7F77DD;
    }

    .user-avatar.bg-primary-dim {
        background: rgba(0, 166, 103, 0.12);
        color: #00a667;
    }

    .user-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .user-name .tb-lead,
    .lead-text {
        font-size: 13px;
        color: #c8dde0;
        font-weight: 500;
    }

    .sub-text {
        font-size: 11px;
        color: #6b8a90;
    }

    .user-info {
        display: flex;
        flex-direction: column;
        gap: 1px;
    }

    .badge-dot {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        color: #8aa4aa;
        padding: 3px 8px;
        border-radius: 20px;
    }

    .badge-dot::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .badge-dot.bg-success {
        background: rgba(0, 166, 103, 0.1);
        color: #00a667;
    }

    .badge-dot.bg-success::before {
        background: #00a667;
    }

    .badge-dot.bg-warning {
        background: rgba(244, 185, 66, 0.1);
        color: #f4b942;
    }

    .badge-dot.bg-warning::before {
        background: #f4b942;
    }

    .btn-icon.btn-trigger {
        background: transparent;
        border: none;
        color: #4a6670;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
    }

    .btn-icon.btn-trigger:hover {
        background: rgba(0, 166, 103, 0.08);
        color: #00a667;
    }

    /* ===== ANNOUNCEMENTS / ACTIVITY ===== */
    .nk-activity {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nk-activity-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 14px 24px;
        border-bottom: 1px solid #1a2a2e;
        transition: background 0.15s;
    }

    .nk-activity-item:last-child {
        border-bottom: none;
    }

    .nk-activity-item:hover {
        background: rgba(0, 166, 103, 0.04);
    }

    .nk-activity-media.user-avatar.bg-success {
        background: rgba(0, 166, 103, 0.15);
        color: #00a667;
        width: 36px;
        height: 36px;
        flex-shrink: 0;
    }

    .nk-activity-data .label {
        font-size: 13px;
        color: #c8dde0;
        line-height: 1.5;
    }

    .nk-activity-data .time {
        font-size: 11px;
        color: #4a6670;
        margin-top: 2px;
        display: block;
    }

    /* ===== NEW USERS ===== */
    .card-inner-group>.card-inner+.card-inner {
        border-top: 1px solid #1a2a2e;
    }

    .user-action .btn-icon.btn-trigger {
        color: #4a6670;
    }

    /* ===== PAYMENTS ===== */
    .nk-support {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nk-support-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 14px 24px;
        border-bottom: 1px solid #1a2a2e;
        transition: background 0.15s;
    }

    .nk-support-item:last-child {
        border-bottom: none;
    }

    .nk-support-item:hover {
        background: rgba(0, 166, 103, 0.04);
    }

    .nk-support-item .user-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
    }

    .nk-support-item .user-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .nk-support-content {
        flex: 1;
        min-width: 0;
    }

    .nk-support-content .title {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 600;
        color: #c8dde0;
        margin-bottom: 2px;
        flex-wrap: wrap;
    }

    .nk-support-content .title .btn-primary.btn-md {
        background: rgba(0, 166, 103, 0.1);
        border: 1px solid rgba(0, 166, 103, 0.25);
        color: #00a667;
        font-size: 11px;
        font-weight: 600;
        padding: 2px 10px;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s;
        margin-left: auto;
    }

    .nk-support-content .title .btn-primary.btn-md:hover {
        background: #00a667;
        color: #fff;
    }

    .nk-support-content p {
        font-size: 12px;
        color: #6b8a90;
        margin: 2px 0;
    }

    .nk-support-content .time {
        font-size: 11px;
        color: #4a6670;
    }

    /* ===== TIMELINE ===== */
    .timeline-head {
        font-size: 11px;
        font-weight: 600;
        color: #4a6670;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 14px;
    }

    .timeline-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .timeline-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
    }

    .timeline-status {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        flex-shrink: 0;
        margin-top: 4px;
    }

    .timeline-status.bg-primary {
        background: #00a667;
    }

    .timeline-status.bg-primary.is-outline {
        background: transparent;
        border: 2px solid #00a667;
    }

    .timeline-status.bg-pink {
        background: #D4537E;
    }

    .timeline-date {
        font-size: 11px;
        color: #4a6670;
        white-space: nowrap;
        min-width: 52px;
    }

    .timeline-title {
        font-size: 13px;
        font-weight: 600;
        color: #c8dde0;
        margin: 0 0 2px;
    }

    .timeline-des p {
        font-size: 12px;
        color: #6b8a90;
        margin: 0 0 2px;
    }

    .timeline-des .time {
        font-size: 11px;
        color: #4a6670;
    }

    /* ===== MODALS ===== */
    .modal-content {
        background: #0f1e21 !important;
        border: 1px solid #1e3035 !important;
        border-radius: 14px !important;
        overflow: hidden;
    }

    .modal-header {
        background: #0b1416;
        border-bottom: 1px solid #1a2a2e !important;
        padding: 16px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .modal-header .modal-title {
        font-size: 15px;
        font-weight: 600;
        color: #ffffff;
        margin: 0;
    }

    .modal-header .btn-close,
    .close-btn {
        background: transparent;
        border: none;
        color: #6b8a90;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        transition: color 0.2s;
    }

    .modal-header .btn-close:hover,
    .close-btn:hover {
        color: #00a667;
    }

    .modal-body {
        background: #0f1e21;
        padding: 20px 24px;
        color: #8aa4aa;
        font-size: 13px;
        line-height: 1.7;
    }

    .modal-body h4 {
        font-size: 17px;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 10px;
    }

    .modal-body p strong {
        color: #c8dde0;
    }

    .modal-body .img-fluid.rounded {
        border-radius: 10px !important;
        border: 1px solid #1e3035;
        width: 100%;
        object-fit: cover;
    }

    .modal-footer {
        background: #0b1416;
        border-top: 1px solid #1a2a2e !important;
        padding: 14px 24px;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }

    .modal-footer .btn-secondary,
    .modal-footer .btn.btn-secondary {
        background: transparent;
        border: 1px solid #1e3035;
        color: #8aa4aa;
        padding: 8px 18px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s;
    }

    .modal-footer .btn-secondary:hover {
        border-color: #6b8a90;
        color: #c8dde0;
    }

    .modal-footer .btn-primary,
    .modal-footer .btn.btn-primary {
        background: #00a667;
        border: none;
        color: #fff;
        padding: 8px 20px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        transition: background 0.2s, transform 0.2s;
    }

    .modal-footer .btn-primary:hover {
        background: #008f58;
        transform: translateY(-1px);
    }

    .modal-footer .btn-danger,
    .modal-footer .btn.btn-danger {
        background: rgba(226, 75, 74, 0.12);
        border: 1px solid rgba(226, 75, 74, 0.3);
        color: #E24B4A;
        padding: 8px 20px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
    }

    .modal-footer .btn-danger:hover {
        background: #E24B4A;
        color: #fff;
    }

    /* Form elements in modals */
    .form-select,
    .form-control {
        background: #0b1416;
        border: 1px solid #1e3035;
        color: #c8dde0;
        border-radius: 8px;
        font-size: 13px;
        padding: 9px 12px;
        width: 100%;
        transition: border-color 0.2s;
        appearance: auto;
    }

    .form-select:focus,
    .form-control:focus {
        outline: none;
        border-color: #00a667;
        box-shadow: 0 0 0 3px rgba(0, 166, 103, 0.1);
    }

    .form-label {
        font-size: 12px;
        font-weight: 600;
        color: #8aa4aa;
        margin-bottom: 6px;
        display: block;
    }

    .form-wrap {
        margin-bottom: 14px;
    }

    /* Transaction summary modal */
    .model-head-text {
        font-size: 13px;
        font-weight: 600;
        color: #00a667;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        margin-bottom: 14px;
    }

    .sumary-widget {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .summary-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #1a2a2e;
    }

    .summary-info:last-child {
        border-bottom: none;
    }

    .summary-info h6 {
        font-size: 12px;
        color: #6b8a90;
        margin: 0;
        font-weight: 500;
    }

    .summary-info p {
        font-size: 13px;
        color: #c8dde0;
        margin: 0;
        font-weight: 500;
    }

    /* Withdraw modal */
    .amt-wrap {
        margin-bottom: 16px;
    }

    .amt-list {
        list-style: none;
        padding: 0;
        margin: 10px 0 0;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .amt-list li {
        font-size: 12px;
        color: #4a6670;
    }

    .vary-amt {
        display: inline-block;
        background: #0b1416;
        border: 1px solid #1e3035;
        color: #8aa4aa;
        padding: 4px 12px;
        border-radius: 6px;
        font-size: 12px;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s;
    }

    .vary-amt:hover {
        border-color: rgba(0, 166, 103, 0.4);
        color: #00a667;
    }

    .buyer-method {
        margin-bottom: 14px;
    }

    .buyer-method h6 {
        font-size: 12px;
        font-weight: 600;
        color: #8aa4aa;
        margin-bottom: 10px;
    }

    .custom_radio {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: #c8dde0;
        cursor: pointer;
        margin-bottom: 8px;
    }

    .custom_radio input[type="radio"] {
        accent-color: #00a667;
    }

    .wallet-custom {
        margin-bottom: 12px;
    }

    .btn.btn-primary.w-100 {
        background: #00a667;
        border: none;
        color: #fff;
        width: 100%;
        padding: 11px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        display: block;
        text-align: center;
        transition: background 0.2s;
    }

    .btn.btn-primary.w-100:hover {
        background: #008f58;
    }

    /* Alert */
    .alert-info {
        background: rgba(0, 166, 103, 0.08);
        border: 1px solid rgba(0, 166, 103, 0.25);
        color: #8adfc0;
        border-radius: 8px;
        font-size: 13px;
        padding: 12px 16px;
    }

    /* Link */
    .link {
        font-size: 12px;
        color: #00a667;
        text-decoration: none;
    }

    .link:hover {
        text-decoration: underline;
    }

    .btn-link {
        color: #00a667;
        text-decoration: none;
        font-size: 13px;
    }

    .btn-link:hover {
        text-decoration: underline;
    }

    /* Card tools download btn */
    .card-tools .btn-primary.btn-dim {
        background: rgba(0, 166, 103, 0.1);
        border: 1px solid rgba(0, 166, 103, 0.25);
        color: #00a667;
        font-size: 12px;
        font-weight: 600;
        border-radius: 8px;
        padding: 6px 14px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        transition: background 0.2s, color 0.2s;
    }

    .card-tools .btn-primary.btn-dim:hover {
        background: #00a667;
        color: #fff;
    }
</style>

<div class="container-fluid" style="background:#0e1618; min-height:100vh; padding: 0 20px 40px;">
    <div class="nk-content-inner">
        <div class="nk-content-body">

            {{-- PAGE HEADER --}}
            <div class="nk-block-head nk-block-head-sm">
                <div class="nk-block-between d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="nk-block-head-content">
                        <h3 class="nk-block-title page-title">{{ config('app.name') }} Overview</h3>
                        <div class="nk-block-des text-soft">
                            <p>Welcome to {{ config('app.name') }} Dashboard.</p>
                        </div>
                    </div>
                    <div class="nk-block-head-content">
                        <div class="toggle-wrap nk-block-tools-toggle">
                            <div class="toggle-expand-content">
                                <ul class="nk-block-tools g-3 d-flex align-items-center gap-2 list-unstyled mb-0">
                                    <li>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                                data-bs-toggle="dropdown">
                                                <em class="d-none d-sm-inline icon ni ni-calender-date"></em>
                                                <span>Last 30 Days</span>
                                                <em class="icon ni ni-chevron-right" style="font-size:11px"></em>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <ul class="link-list-opt no-bdr list-unstyled mb-0">
                                                    <li><a href="#"><span>Last 30 Days</span></a></li>
                                                    <li><a href="#"><span>Last 6 Months</span></a></li>
                                                    <li><a href="#"><span>Last 1 Year</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nk-block-tools-opt">
                                        <a href="#" class="btn btn-primary">
                                            <em class="icon ni ni-reports"></em><span>Reports</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {{-- MAIN CONTENT --}}
            <div class="nk-block">
                <div class="row g-gs">

                    {{-- COURSES + SMALL STATS --}}
                    <div class="col-xxl-6">
                        <div class="row g-gs">
                            <div class="col-lg-6 col-xxl-12">
                                <div class="card card-bordered">
                                    <div class="card-inner">
                                        <div class="card-title-group align-start mb-3 d-flex justify-content-between">
                                            <div class="card-title">
                                                <h6 class="title">Courses Overview</h6>
                                                <p>An overview of total courses</p>
                                            </div>
                                            <div class="card-tools">
                                                <em class="card-hint icon ni ni-help-fill"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Revenue from subscriptions"></em>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-end flex-wrap gap-4">
                                            <div class="nk-sale-data-group d-flex gap-4 flex-wrap">
                                                <div class="nk-sale-data">
                                                    <span class="amount" style="font-size:15px;color:#6b8a90">Total Courses</span>
                                                    <span class="sub-title">All Talents</span>
                                                </div>
                                                <div class="nk-sale-data">
                                                    <span class="amount">{{ $totalCourses }}
                                                        <span class="change up text-success" style="font-size:12px">
                                                            <em class="icon ni ni-arrow-long-up"></em>4.26%
                                                        </span>
                                                    </span>
                                                    <span class="sub-title">Course Enrollment</span>
                                                </div>
                                            </div>
                                            <div class="nk-sales-ck sales-revenue ms-auto">
                                                <canvas class="sales-bar-chart" id="salesRevenue"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-xxl-12">
                                <div class="row g-gs">
                                    <div class="col-sm-6 col-lg-12 col-xxl-6">
                                        <div class="card card-bordered">
                                            <div class="card-inner">
                                                <div class="card-title-group align-start mb-2 d-flex justify-content-between">
                                                    <div class="card-title">
                                                        <h6 class="title">Total Testimonials</h6>
                                                    </div>
                                                    <div class="card-tools">
                                                        <em class="card-hint icon ni ni-help-fill"
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Total active subscriptions"></em>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-end gap-4">
                                                    <div class="nk-sale-data">
                                                        <span class="amount">{{ $totalTestimonials }}</span>
                                                    </div>
                                                    <div class="nk-sales-ck ms-auto">
                                                        <canvas class="sales-bar-chart" id="activeSubscription"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-12 col-xxl-6">
                                        <div class="card card-bordered">
                                            <div class="card-inner">
                                                <div class="card-title-group align-start mb-2 d-flex justify-content-between">
                                                    <div class="card-title">
                                                        <h6 class="title">Total Users</h6>
                                                    </div>
                                                    <div class="card-tools">
                                                        <em class="card-hint icon ni ni-help-fill"
                                                            data-bs-toggle="tooltip" data-bs-placement="left"
                                                            title="Daily avg. subscriptions"></em>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-end gap-4">
                                                    <div class="nk-sale-data">
                                                        <span class="amount">{{ $totalUsers }}</span>
                                                    </div>
                                                    <div class="nk-sales-ck ms-auto">
                                                        <canvas class="sales-bar-chart" id="totalSubscription"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- TALENT OVERVIEW CHART --}}
                    <div class="col-xxl-6">
                        <div class="card card-bordered h-100">
                            <div class="card-inner">
                                <div class="card-title-group align-start gx-3 mb-3 d-flex justify-content-between">
                                    <div class="card-title">
                                        <h6 class="title">Talent Overview</h6>
                                        <p>In 30 days of talent activity. <a href="/admin/talents">See talents</a></p>
                                    </div>
                                    <div class="card-tools">
                                        <div class="dropdown">
                                            <a href="#" class="btn-primary btn-dim d-none d-sm-inline-flex"
                                                style="padding:6px 14px;border-radius:8px;font-size:12px;font-weight:600;display:inline-flex;align-items:center;gap:6px;text-decoration:none;background:rgba(0,166,103,0.1);border:1px solid rgba(0,166,103,0.25);color:#00a667;"
                                                data-bs-toggle="dropdown">
                                                <em class="icon ni ni-download-cloud"></em><span>Download Report</span>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <ul class="link-list-opt no-bdr list-unstyled mb-0">
                                                    <li><a href="#"><span>Download Mini Version</span></a></li>
                                                    <li><a href="#"><span>Download Full Version</span></a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#"><em class="icon ni ni-opt-alt"></em><span>More Options</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="nk-sale-data-group d-flex align-items-center justify-content-between">
                                    <div class="nk-sale-data">
                                        <span class="amount sm">{{ $totalTalents }} <small style="font-size:14px;color:#6b8a90;font-weight:400">Registered</small></span>
                                    </div>
                                </div>
                                <div class="nk-sales-ck large pt-4">
                                    <canvas class="sales-overview-chart" id="salesOverview"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- TALENTS TABLE --}}
                    <div class="col-xxl-8">
                        <div class="card card-bordered card-full">
                            <div class="card-inner d-flex justify-content-between align-items-center">
                                <div class="card-title">
                                    <h6 class="title">
                                        <span class="me-2">Talents</span>
                                        <a href="{{ route('admin.talents.index') }}" class="link d-none d-sm-inline">See All</a>
                                    </h6>
                                </div>
                                <div class="card-tools">
                                    <ul class="card-tools-nav list-unstyled mb-0 d-flex gap-1">
                                        <li><a href="#"><span>Pending</span></a></li>
                                        <li><a href="#"><span>Approved</span></a></li>
                                        <li class="active"><a href="#"><span>All</span></a></li>
                                    </ul>
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
                                        <div class="nk-tb-col"><span>Status</span></div>
                                        <div class="nk-tb-col nk-tb-col-action"><span>&nbsp;</span></div>
                                    </div>

                                    @foreach ($talents as $talent)
                                    <div class="nk-tb-item">
                                        <div class="nk-tb-col">
                                            <span class="tb-lead"><a href="#">{{ $talent->id }}</a></span>
                                        </div>
                                        <div class="nk-tb-col tb-col-sm">
                                            <div class="user-card">
                                                <div class="user-avatar user-avatar-sm bg-purple">
                                                    <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}"
                                                        class="img-fluid rounded-pill" alt="{{ $talent->name }}">
                                                </div>
                                                <div class="user-name"><span class="tb-lead">{{ $talent->name }}</span></div>
                                            </div>
                                        </div>
                                        <div class="nk-tb-col tb-col-md">
                                            <span class="tb-sub">{{ $talent->created_at->format('d M Y') }}</span>
                                        </div>
                                        <div class="nk-tb-col tb-col-lg">
                                            <span class="tb-sub text-primary">{{ $talent->phone }}</span>
                                        </div>
                                        <div class="nk-tb-col">
                                            <span class="tb-amount">{{ $talent->category->name ?? 'Uncategorized' }}</span>
                                        </div>
                                        <div class="nk-tb-col">
                                            <span class="badge badge-dot badge-dot-xs bg-success">{{ $talent->status }}</span>
                                        </div>
                                        <div class="nk-tb-col nk-tb-col-action">
                                            <div class="dropdown">
                                                <a class="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                                    data-bs-toggle="dropdown">
                                                    <em class="icon ni ni-more-h"></em>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                                    <ul class="link-list-plain list-unstyled mb-0">
                                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickViewModal{{ $talent->id }}">Quick View</a></li>
                                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#statusModal{{ $talent->id }}">Status Update</a></li>
                                                        <li><a href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $talent->id }}">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                </div>
                            </div>

                            <div class="card-inner-sm border-top text-center d-sm-none">
                                <a href="#" class="btn-link">See History</a>
                            </div>
                        </div>
                    </div>

                    {{-- ANNOUNCEMENTS --}}
                    <div class="col-md-6 col-xxl-4">
                        <div class="card card-bordered card-full">
                            <div class="card-inner border-bottom d-flex justify-content-between align-items-center">
                                <div class="card-title">
                                    <h6 class="title">Recent Announcements</h6>
                                </div>
                                <div class="card-tools">
                                    <ul class="card-tools-nav list-unstyled mb-0 d-flex gap-1">
                                        <li><a href="#"><span>Published</span></a></li>
                                        <li class="active"><a href="#"><span>All</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <ul class="nk-activity list-unstyled mb-0">
                                @foreach($announcements as $announcement)
                                <li class="nk-activity-item">
                                    <div class="nk-activity-media user-avatar bg-success">
                                        <img src="images/avatar/c-sm.jpg" alt="">
                                    </div>
                                    <div class="nk-activity-data">
                                        <div class="label">{{ Str::limit($announcement->title, 50) }}</div>
                                        <span class="time">{{ $announcement->created_at->format('Y-m-d') }}</span>
                                    </div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>

                    {{-- NEW USERS --}}
                    <div class="col-md-6 col-xxl-4">
                        <div class="card card-bordered card-full">
                            <div class="card-inner-group">
                                <div class="card-inner d-flex justify-content-between align-items-center">
                                    <div class="card-title">
                                        <h6 class="title">New Users</h6>
                                    </div>
                                    <div class="card-tools">
                                        <a href="{{ route('admin.users.index') }}" class="link">View All</a>
                                    </div>
                                </div>
                                @foreach ($users as $user)
                                <div class="card-inner card-inner-md">
                                    <div class="user-card d-flex align-items-center gap-3">
                                        <div class="user-avatar bg-primary-dim"><span>{{ strtoupper(substr($user->name,0,2)) }}</span></div>
                                        <div class="user-info">
                                            <span class="lead-text">{{ $user->name }}</span>
                                            <span class="sub-text">{{ $user->email }}</span>
                                        </div>
                                        <div class="user-action ms-auto">
                                            <div class="dropdown">
                                                <a href="#" class="dropdown-toggle btn btn-icon btn-trigger"
                                                    data-bs-toggle="dropdown">
                                                    <em class="icon ni ni-more-h"></em>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <ul class="link-list-opt no-bdr list-unstyled mb-0">
                                                        <li><a href="#"><em class="icon ni ni-setting"></em><span>Action Settings</span></a></li>
                                                        <li><a href="#"><em class="icon ni ni-notify"></em><span>Push Notification</span></a></li>
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

                    {{-- RECENT PAYMENTS --}}
                    <div class="col-lg-6 col-xxl-4">
                        <div class="card card-bordered h-100">
                            <div class="card-inner border-bottom d-flex justify-content-between align-items-center">
                                <div class="card-title">
                                    <h6 class="title">Recent Story Payments</h6>
                                </div>
                                <div class="card-tools">
                                    <a href="{{ route('admin.payments.index') }}" class="link">All Payments</a>
                                </div>
                            </div>
                            <ul class="nk-support list-unstyled mb-0">
                                @foreach($payments as $payment)
                                <li class="nk-support-item">
                                    <div class="user-avatar">
                                        <img src="images/avatar/a-sm.jpg" alt="">
                                    </div>
                                    <div class="nk-support-content">
                                        <div class="title">
                                            <span>{{ $payment->email ?? 'User' }}</span>
                                            <span class="badge badge-dot badge-dot-xs bg-warning ms-1">{{ $payment->status }}</span>
                                            <a role="button" tabindex="0" class="btn btn-primary btn-md"
                                                data-bs-toggle="modal" data-bs-target="#transaction_details{{ $payment->id }}">View</a>
                                        </div>
                                        <p>{{ $payment->story->title }}</p>
                                        <span class="time">{{ \Carbon\Carbon::parse($payment->created_at)->format('d M Y') }}</span>
                                    </div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>

                    {{-- NOTIFICATIONS / TIMELINE --}}
                    <div class="col-lg-6 col-xxl-4">
                        <div class="card card-bordered h-100">
                            <div class="card-inner border-bottom d-flex justify-content-between align-items-center">
                                <div class="card-title">
                                    <h6 class="title">Notifications</h6>
                                </div>
                                <div class="card-tools"><a href="#" class="link">View All</a></div>
                            </div>
                            <div class="card-inner">
                                <div class="timeline">
                                    <h6 class="timeline-head">November, 2019</h6>
                                    <ul class="timeline-list list-unstyled mb-0">
                                        <li class="timeline-item">
                                            <div class="timeline-status bg-primary is-outline"></div>
                                            <div class="timeline-date">13 Nov <em class="icon ni ni-alarm-alt"></em></div>
                                            <div class="timeline-data">
                                                <h6 class="timeline-title">Submitted KYC Application</h6>
                                                <div class="timeline-des">
                                                    <p>Re-submitted KYC Application form.</p>
                                                    <span class="time">09:30am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="timeline-item">
                                            <div class="timeline-status bg-primary"></div>
                                            <div class="timeline-date">13 Nov <em class="icon ni ni-alarm-alt"></em></div>
                                            <div class="timeline-data">
                                                <h6 class="timeline-title">Submitted KYC Application</h6>
                                                <div class="timeline-des">
                                                    <p>Re-submitted KYC Application form.</p>
                                                    <span class="time">09:30am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="timeline-item">
                                            <div class="timeline-status bg-pink"></div>
                                            <div class="timeline-date">13 Nov <em class="icon ni ni-alarm-alt"></em></div>
                                            <div class="timeline-data">
                                                <h6 class="timeline-title">Submitted KYC Application</h6>
                                                <div class="timeline-des">
                                                    <p>Re-submitted KYC Application form.</p>
                                                    <span class="time">09:30am</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>{{-- /row --}}
            </div>{{-- /nk-block --}}
        </div>
    </div>
</div>

{{-- ===== MODALS ===== --}}

{{-- Withdraw Modal --}}
<div class="modal new-modal fade" id="withdraw" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Withdraw Payment</h5>
                <button type="button" class="close-btn" data-bs-dismiss="modal"><span>×</span></button>
            </div>
            <div class="modal-body">
                <div class="amt-wrap">
                    <div class="form-wrap">
                        <label class="form-label">Enter Amount ($)<span class="text-danger ms-1">*</span></label>
                        <input type="text" class="form-control" placeholder="0.00">
                    </div>
                    <ul class="amt-list">
                        <li>Or</li>
                        <li><a role="button" tabindex="0" class="vary-amt">$50</a></li>
                        <li><a role="button" tabindex="0" class="vary-amt">$100</a></li>
                        <li><a role="button" tabindex="0" class="vary-amt">$150</a></li>
                    </ul>
                </div>
                <div class="buyer-method">
                    <h6>Select Payment Gateway *</h6>
                    <label class="custom_radio"><input type="radio" name="payment"><span class="checkmark"></span>Paypal</label>
                    <label class="custom_radio"><input type="radio" name="payment"><span class="checkmark"></span>Stripe</label>
                </div>
                <div class="form-wrap wallet-custom">
                    <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" placeholder="your@email.com">
                </div>
                <div class="form-wrap wallet-custom">
                    <label class="form-label">Password<span class="text-danger ms-1">*</span></label>
                    <input type="password" class="form-control" placeholder="••••••••">
                </div>
                <a role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#success_credit"
                    data-bs-dismiss="modal" class="btn btn-primary w-100 mt-2">Withdraw</a>
            </div>
        </div>
    </div>
</div>

{{-- Status / Quick View / Delete Modals --}}
@foreach($talents as $talent)

{{-- Status Modal --}}
<div class="modal fade" id="statusModal{{ $talent->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <form method="POST" action="{{ route('admin.talents.updateStatus', $talent->id) }}">
            @csrf @method('PUT')
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Update Status</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label class="form-label">Select Status</label>
                    <select name="status" class="form-select" required>
                        <option value="pending" {{ $talent->status == 'pending'   ? 'selected' : '' }}>Pending</option>
                        <option value="approved" {{ $talent->status == 'approved'  ? 'selected' : '' }}>Approved</option>
                        <option value="rejected" {{ $talent->status == 'rejected'  ? 'selected' : '' }}>Rejected</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </form>
    </div>
</div>

{{-- Quick View Modal --}}
<div class="modal fade" id="quickViewModal{{ $talent->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Talent Quick View</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row g-3">
                    <div class="col-md-4">
                        <img src="{{ asset('image/talents/' . $talent->image) }}" alt="Talent" class="img-fluid rounded">
                    </div>
                    <div class="col-md-8">
                        <h4>{{ $talent->name }}</h4>
                        <p><strong>Address:</strong> {{ $talent->address }}</p>
                        <p><strong>Phone:</strong> {{ $talent->phone }}</p>
                        <p><strong>Email:</strong> {{ $talent->email }}</p>
                        <p><strong>Category:</strong> {{ $talent->category->name ?? 'N/A' }}</p>
                        <p><strong>Language:</strong> {{ $talent->language }}</p>
                        <p><strong>Description:</strong> {{ $talent->description }}</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href="{{ route('admin.talents.show', $talent->id) }}" class="btn btn-primary">View Talent</a>
            </div>
        </div>
    </div>
</div>

{{-- Delete Modal --}}
<div class="modal fade" id="deleteModal{{ $talent->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <form action="{{ route('admin.talents.destroy', $talent->id) }}" method="POST" class="modal-content">
            @csrf @method('DELETE')
            <div class="modal-header">
                <h5 class="modal-title">Confirm Delete</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to delete <strong style="color:#e0f0f0">{{ $talent->name }}</strong>? This action cannot be undone.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-danger">Yes, Delete</button>
            </div>
        </form>
    </div>
</div>

@endforeach

{{-- Transaction Detail Modals --}}
@foreach($payments as $payment)
<div class="modal new-modal fade" id="transaction_details{{ $payment->id }}"
    data-keyboard="false" data-backdrop="static" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Transaction Details</h5>
                <button type="button" class="close-btn" data-bs-dismiss="modal"><span>×</span></button>
            </div>
            <div class="modal-body service-modal">
                <p class="model-head-text">Transaction Summary</p>
                <div class="sumary-widget">
                    <div class="summary-info">
                        <h6>Transaction ID</h6>
                        <p>#{{ $payment->tx_ref }}</p>
                    </div>
                    <div class="summary-info">
                        <h6>Transaction Type</h6>
                        <p>Purchase</p>
                    </div>
                    <div class="summary-info">
                        <h6>Amount</h6>
                        <p>${{ $payment->amount }}</p>
                    </div>
                    <div class="summary-info">
                        <h6>Currency</h6>
                        <p>{{ $payment->currency }}</p>
                    </div>
                    <div class="summary-info">
                        <h6>Processing Fee</h6>
                        <p>$20</p>
                    </div>
                    <div class="summary-info">
                        <h6>Payment Method</h6>
                        <p>Credit Card</p>
                    </div>
                    <div class="summary-info">
                        <h6>Sender</h6>
                        <p>{{ $payment->email }}</p>
                    </div>
                    <div class="summary-info">
                        <h6>Receiver</h6>
                        <p>kabosierik@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endforeach

@endsection