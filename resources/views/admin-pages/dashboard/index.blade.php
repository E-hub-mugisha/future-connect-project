@extends('layouts.app')
@section('title', 'Dashboard')

@push('styles')
<style>
    /* ── TOKENS (LIGHT THEME) ── */
    :root {
        --bg: #f0f4f5;
        --bg-2: #F5f5f7;
        --bg-3: #f5f8f9;
        --bg-4: #e8eef0;
        --green: #1da870;
        --green-dim: rgba(29, 168, 112, 0.09);
        --green-bd: rgba(29, 168, 112, 0.25);
        --ink: #0f2027;
        --ink-70: rgba(15, 32, 39, 0.70);
        --ink-40: rgba(15, 32, 39, 0.40);
        --ink-12: rgba(15, 32, 39, 0.07);
        --border: rgba(15, 32, 39, 0.09);
        --danger: #d63b4b;
        --warning: #d9820a;
        --info: #2b7fbe;
    }

    /* ── BASE ── */
    body {
        background: var(--bg);
        color: var(--ink-70);
        font-family: 'Inter', sans-serif;
    }

    .content-wrapper {
        background: var(--bg);
        min-height: 100vh;
        padding: 28px 24px;
    }

    /* ── PAGE HEADER ── */
    .page-header {
        margin-bottom: 28px;
    }

    .page-header h3 {
        font-size: 20px;
        font-weight: 600;
        color: var(--ink);
        margin-bottom: 4px;
        letter-spacing: -0.2px;
    }

    .page-header p {
        font-size: 13px;
        color: var(--ink-40);
        margin: 0;
    }

    /* ── CARDS ── */
    .dash-card {
        background: var(--bg-2);
        border: 1px solid var(--border);
        border-radius: 14px;
        height: 100%;
        overflow: hidden;
        transition: border-color 0.18s, box-shadow 0.18s;
    }

    .dash-card:hover {
        border-color: var(--green-bd);
        box-shadow: 0 4px 20px rgba(15, 32, 39, 0.07);
    }

    .dash-card-body {
        padding: 20px 22px;
    }

    .dash-card-header {
        padding: 16px 22px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }

    .dash-card-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--ink);
        margin: 0;
        letter-spacing: 0.1px;
    }

    .dash-card-sub {
        font-size: 11px;
        color: var(--ink-40);
        margin: 2px 0 0;
    }

    /* ── STAT CARDS ── */
    .stat-card {
        background: var(--bg-2);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 20px 22px;
        position: relative;
        overflow: hidden;
        transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
    }

    .stat-card:hover {
        border-color: var(--green-bd);
        box-shadow: 0 6px 24px rgba(15, 32, 39, 0.08);
        transform: translateY(-2px);
    }

    .stat-card::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        opacity: 0.06;
        transform: translate(20px, -20px);
    }

    .stat-card.green::before {
        background: var(--green);
    }

    .stat-card.blue::before {
        background: var(--info);
    }

    .stat-card.danger::before {
        background: var(--danger);
    }

    .stat-card.warning::before {
        background: var(--warning);
    }

    .stat-icon {
        width: 42px;
        height: 42px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        margin-bottom: 14px;
        flex-shrink: 0;
    }

    .stat-icon.green {
        background: var(--green-dim);
        color: var(--green);
    }

    .stat-icon.blue {
        background: rgba(43, 127, 190, 0.10);
        color: var(--info);
    }

    .stat-icon.danger {
        background: rgba(214, 59, 75, 0.10);
        color: var(--danger);
    }

    .stat-icon.warning {
        background: rgba(217, 130, 10, 0.10);
        color: var(--warning);
    }

    .stat-value {
        font-size: 28px;
        font-weight: 700;
        color: var(--ink);
        line-height: 1;
        margin-bottom: 6px;
        letter-spacing: -0.5px;
    }

    .stat-label {
        font-size: 12px;
        color: var(--ink-40);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .stat-badge {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        font-size: 11px;
        font-weight: 600;
        padding: 3px 8px;
        border-radius: 20px;
        margin-top: 8px;
    }

    .stat-badge.up {
        background: rgba(29, 168, 112, 0.10);
        color: var(--green);
    }

    .stat-badge.down {
        background: rgba(214, 59, 75, 0.10);
        color: var(--danger);
    }

    /* ── CHART AREA ── */
    .chart-area {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: var(--bg-3);
        border: 1px solid var(--border);
        margin-top: 16px;
        position: relative;
        overflow: hidden;
    }

    .chart-area canvas {
        width: 100% !important;
        height: 100% !important;
    }

    .chart-area-lg {
        height: 240px;
    }

    .chart-area-sm {
        height: 60px;
        background: transparent;
        border: none;
        margin-top: 8px;
    }

    /* ── SECTION NAV TABS ── */
    .card-tabs {
        display: flex;
        gap: 2px;
        background: var(--bg-3);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 3px;
    }

    .card-tab {
        font-size: 12px;
        font-weight: 500;
        color: var(--ink-40);
        padding: 4px 12px;
        border-radius: 6px;
        text-decoration: none;
        transition: background 0.15s, color 0.15s;
        white-space: nowrap;
    }

    .card-tab:hover {
        color: var(--ink-70);
        background: var(--bg-4);
    }

    .card-tab.active {
        background: var(--bg-2);
        color: var(--ink);
        box-shadow: 0 1px 4px rgba(15, 32, 39, 0.10);
    }

    /* ── TABLE ── */
    .dash-table {
        width: 100%;
        border-collapse: collapse;
    }

    .dash-table thead tr {
        border-bottom: 1px solid var(--border);
        background: var(--bg-3);
    }

    .dash-table thead th {
        font-size: 11px;
        font-weight: 600;
        color: var(--ink-40);
        text-transform: uppercase;
        letter-spacing: 0.6px;
        padding: 10px 22px;
        white-space: nowrap;
    }

    .dash-table tbody tr {
        border-bottom: 1px solid var(--border);
        transition: background 0.12s;
    }

    .dash-table tbody tr:last-child {
        border-bottom: none;
    }

    .dash-table tbody tr:hover {
        background: var(--bg-3);
    }

    .dash-table tbody td {
        padding: 13px 22px;
        font-size: 13px;
        color: var(--ink-70);
        vertical-align: middle;
    }

    .tb-lead {
        font-size: 13px;
        font-weight: 500;
        color: var(--ink);
        text-decoration: none;
    }

    .tb-lead:hover {
        color: var(--green);
    }

    .tb-sub {
        font-size: 12px;
        color: var(--ink-40);
    }

    .tb-phone {
        font-size: 12px;
        color: var(--info);
    }

    /* user cell */
    .user-cell {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .user-avatar-sm {
        width: 34px;
        height: 34px;
        border-radius: 8px;
        object-fit: cover;
        border: 1px solid var(--border);
        flex-shrink: 0;
    }

    .user-initials-sm {
        width: 34px;
        height: 34px;
        border-radius: 8px;
        background: var(--green-dim);
        color: var(--green);
        font-size: 11px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    /* ── STATUS BADGES ── */
    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: 11px;
        font-weight: 600;
        padding: 3px 10px;
        border-radius: 20px;
        white-space: nowrap;
    }

    .status-badge::before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .status-badge.approved {
        background: rgba(29, 168, 112, 0.12);
        color: #1a8a5e;
    }

    .status-badge.approved::before {
        background: var(--green);
    }

    .status-badge.pending {
        background: rgba(217, 130, 10, 0.12);
        color: var(--warning);
    }

    .status-badge.pending::before {
        background: var(--warning);
    }

    .status-badge.rejected {
        background: rgba(214, 59, 75, 0.12);
        color: var(--danger);
    }

    .status-badge.rejected::before {
        background: var(--danger);
    }

    /* ── CATEGORY PILL ── */
    .cat-pill {
        display: inline-block;
        font-size: 11px;
        font-weight: 500;
        padding: 3px 10px;
        border-radius: 6px;
        background: var(--bg-3);
        color: var(--ink-70);
        border: 1px solid var(--border);
    }

    /* ── ACTION DROPDOWN BTN ── */
    .action-btn {
        width: 30px;
        height: 30px;
        border: 1px solid var(--border);
        border-radius: 7px;
        background: var(--bg-3);
        color: var(--ink-40);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.12s, color 0.12s, border-color 0.12s;
        font-size: 16px;
    }

    .action-btn:hover {
        background: var(--bg-4);
        color: var(--ink);
        border-color: var(--green-bd);
    }

    /* ── DROPDOWN MENUS ── */
    .dash-dropdown {
        background: var(--bg-2) !important;
        border: 1px solid var(--border) !important;
        border-radius: 10px !important;
        box-shadow: 0 8px 30px rgba(15, 32, 39, 0.12) !important;
        padding: 6px !important;
        min-width: 160px;
    }

    .dash-dropdown .dropdown-item {
        font-size: 12px;
        color: var(--ink-70);
        border-radius: 7px;
        padding: 8px 12px;
        transition: background 0.12s, color 0.12s;
    }

    .dash-dropdown .dropdown-item:hover {
        background: var(--bg-3);
        color: var(--ink);
    }

    .dash-dropdown .dropdown-item.text-danger {
        color: var(--danger) !important;
    }

    .dash-dropdown .dropdown-item.text-danger:hover {
        background: rgba(214, 59, 75, 0.07);
    }

    .dash-dropdown .dropdown-divider {
        border-color: var(--border);
        margin: 4px 0;
    }

    /* ── ACTIVITY LIST ── */
    .activity-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .activity-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 14px 22px;
        border-bottom: 1px solid var(--border);
        transition: background 0.12s;
    }

    .activity-item:last-child {
        border-bottom: none;
    }

    .activity-item:hover {
        background: var(--bg-3);
    }

    .activity-dot {
        width: 36px;
        height: 36px;
        border-radius: 9px;
        background: var(--green-dim);
        color: var(--green);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        flex-shrink: 0;
        margin-top: 1px;
    }

    .activity-title {
        font-size: 13px;
        font-weight: 500;
        color: var(--ink);
        margin: 0 0 2px;
        line-height: 1.4;
    }

    .activity-time {
        font-size: 11px;
        color: var(--ink-40);
    }

    /* ── USER ROW ── */
    .user-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 13px 22px;
        border-bottom: 1px solid var(--border);
        transition: background 0.12s;
    }

    .user-row:last-child {
        border-bottom: none;
    }

    .user-row:hover {
        background: var(--bg-3);
    }

    .user-initials-md {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: var(--green-dim);
        color: var(--green);
        font-size: 12px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .user-lead {
        font-size: 13px;
        font-weight: 500;
        color: var(--ink);
        line-height: 1.2;
    }

    .user-sub {
        font-size: 11px;
        color: var(--ink-40);
    }

    /* ── PAYMENT ROW ── */
    .payment-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 22px;
        border-bottom: 1px solid var(--border);
        transition: background 0.12s;
    }

    .payment-row:last-child {
        border-bottom: none;
    }

    .payment-row:hover {
        background: var(--bg-3);
    }

    .pay-avatar {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: rgba(217, 130, 10, 0.10);
        color: var(--warning);
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .pay-title {
        font-size: 13px;
        font-weight: 500;
        color: var(--ink);
        line-height: 1.3;
    }

    .pay-sub {
        font-size: 11px;
        color: var(--ink-40);
    }

    /* ── TIMELINE ── */
    .timeline {
        padding: 4px 0;
    }

    .timeline-head {
        font-size: 11px;
        font-weight: 600;
        color: var(--ink-40);
        text-transform: uppercase;
        letter-spacing: 0.7px;
        margin-bottom: 12px;
    }

    .timeline-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .timeline-item {
        display: flex;
        gap: 14px;
        padding-bottom: 18px;
        position: relative;
    }

    .timeline-item:not(:last-child)::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 14px;
        bottom: 0;
        width: 1px;
        background: var(--border);
    }

    .tl-dot {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        border: 2px solid var(--green);
        background: var(--bg-2);
        flex-shrink: 0;
        margin-top: 4px;
        position: relative;
        z-index: 1;
    }

    .tl-dot.filled {
        background: var(--green);
    }

    .tl-dot.pink {
        border-color: #c0365e;
        background: #c0365e;
    }

    .tl-date {
        font-size: 11px;
        color: var(--ink-40);
        min-width: 44px;
        margin-top: 3px;
    }

    .tl-title {
        font-size: 13px;
        font-weight: 500;
        color: var(--ink);
        margin-bottom: 3px;
    }

    .tl-desc {
        font-size: 12px;
        color: var(--ink-40);
        line-height: 1.5;
    }

    .tl-time {
        font-size: 11px;
        color: var(--ink-40);
        margin-top: 3px;
        display: block;
    }

    /* ── BUTTONS ── */
    .btn-green {
        background: var(--green);
        color: #F5f5f7;
        border: none;
        font-size: 12px;
        font-weight: 700;
        padding: 7px 16px;
        border-radius: 8px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        transition: opacity 0.15s, transform 0.15s;
    }

    .btn-green:hover {
        color: #F5f5f7;
        opacity: 0.88;
        transform: translateY(-1px);
    }

    .btn-outline-dim {
        background: var(--bg-2);
        color: var(--ink-70);
        border: 1px solid var(--border);
        font-size: 12px;
        font-weight: 500;
        padding: 7px 14px;
        border-radius: 8px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        transition: background 0.15s, border-color 0.15s, color 0.15s;
    }

    .btn-outline-dim:hover {
        background: var(--bg-3);
        border-color: var(--green-bd);
        color: var(--ink);
    }

    .btn-ghost-green {
        background: var(--green-dim);
        color: var(--green);
        border: 1px solid var(--green-bd);
        font-size: 12px;
        font-weight: 600;
        padding: 5px 14px;
        border-radius: 8px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        transition: background 0.15s;
    }

    .btn-ghost-green:hover {
        background: rgba(29, 168, 112, 0.16);
        color: var(--green);
    }

    .btn-view {
        background: none;
        border: 1px solid var(--border);
        color: var(--ink-40);
        font-size: 11px;
        font-weight: 500;
        padding: 3px 10px;
        border-radius: 6px;
        transition: all 0.12s;
        cursor: pointer;
        text-decoration: none;
    }

    .btn-view:hover {
        border-color: var(--green-bd);
        color: var(--green);
        background: var(--green-dim);
    }

    .link-green {
        color: var(--green);
        text-decoration: none;
        font-size: 12px;
        font-weight: 500;
    }

    .link-green:hover {
        color: var(--green);
        text-decoration: underline;
    }

    /* ── MODALS ── */
    .modal-content {
        background: var(--bg-2) !important;
        border: 1px solid var(--border) !important;
        border-radius: 16px !important;
        color: var(--ink-70);
        box-shadow: 0 20px 60px rgba(15, 32, 39, 0.15) !important;
    }

    .modal-header {
        border-bottom: 1px solid var(--border) !important;
        padding: 18px 22px;
        background: var(--bg-3);
        border-radius: 16px 16px 0 0 !important;
    }

    .modal-title {
        font-size: 15px;
        font-weight: 600;
        color: var(--ink);
    }

    .modal-body {
        padding: 20px 22px;
    }

    .modal-footer {
        border-top: 1px solid var(--border) !important;
        padding: 14px 22px;
        gap: 8px;
        background: var(--bg-3);
        border-radius: 0 0 16px 16px !important;
    }

    .btn-close {
        filter: none;
        opacity: 0.5;
    }

    .btn-close:hover {
        opacity: 1;
    }

    .form-label {
        font-size: 12px;
        font-weight: 500;
        color: var(--ink-70);
        margin-bottom: 6px;
    }

    .form-control,
    .form-select {
        background: var(--bg-3) !important;
        border: 1px solid var(--border) !important;
        color: var(--ink) !important;
        border-radius: 8px;
        font-size: 13px;
        padding: 9px 14px;
        transition: border-color 0.15s;
    }

    .form-control:focus,
    .form-select:focus {
        border-color: var(--green-bd) !important;
        box-shadow: 0 0 0 3px rgba(29, 168, 112, 0.10) !important;
        outline: none;
        background: var(--bg-2) !important;
    }

    .form-control::placeholder {
        color: var(--ink-40) !important;
    }

    .form-select option {
        background: var(--bg-2);
        color: var(--ink);
    }

    .btn-modal-primary {
        background: var(--green);
        color: #F5f5f7;
        border: none;
        font-size: 13px;
        font-weight: 700;
        padding: 9px 20px;
        border-radius: 9px;
        transition: opacity 0.15s;
    }

    .btn-modal-primary:hover {
        opacity: 0.88;
        color: #F5f5f7;
    }

    .btn-modal-secondary {
        background: var(--bg-4);
        color: var(--ink-70);
        border: 1px solid var(--border);
        font-size: 13px;
        font-weight: 500;
        padding: 9px 20px;
        border-radius: 9px;
        transition: background 0.15s;
    }

    .btn-modal-secondary:hover {
        background: var(--bg-4);
        color: var(--ink);
        border-color: rgba(15, 32, 39, 0.18);
    }

    .btn-modal-danger {
        background: rgba(214, 59, 75, 0.10);
        color: var(--danger);
        border: 1px solid rgba(214, 59, 75, 0.25);
        font-size: 13px;
        font-weight: 600;
        padding: 9px 20px;
        border-radius: 9px;
        transition: background 0.15s;
    }

    .btn-modal-danger:hover {
        background: rgba(214, 59, 75, 0.18);
    }

    /* summary grid */
    .summary-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: var(--border);
        border-radius: 10px;
        overflow: hidden;
    }

    .summary-cell {
        background: var(--bg-3);
        padding: 14px 16px;
    }

    .summary-cell h6 {
        font-size: 11px;
        color: var(--ink-40);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
        font-weight: 500;
    }

    .summary-cell p {
        font-size: 13px;
        color: var(--ink);
        font-weight: 500;
        margin: 0;
    }

    /* radio */
    .radio-group {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .radio-option {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 14px;
        border: 1px solid var(--border);
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.15s, background 0.15s;
        font-size: 13px;
        color: var(--ink-70);
        background: var(--bg-3);
    }

    .radio-option:has(input:checked) {
        border-color: var(--green-bd);
        background: var(--green-dim);
        color: var(--ink);
    }

    .radio-option input {
        accent-color: var(--green);
    }

    /* amt shortcuts */
    .amt-shortcuts {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 10px;
    }

    .amt-shortcut {
        font-size: 12px;
        font-weight: 600;
        padding: 5px 14px;
        border: 1px solid var(--border);
        border-radius: 7px;
        background: var(--bg-3);
        color: var(--ink-70);
        cursor: pointer;
        transition: all 0.12s;
    }

    .amt-shortcut:hover {
        border-color: var(--green-bd);
        color: var(--green);
        background: var(--green-dim);
    }

    /* ── SCROLLBAR ── */
    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: var(--bg);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--bg-4);
        border-radius: 4px;
    }

    @media (max-width: 768px) {
        .content-wrapper {
            padding: 18px 14px;
        }

        .stat-value {
            font-size: 22px;
        }
    }
</style>
@endpush

@section('content')
<div class="content-wrapper">

    {{-- ── PAGE HEADER ── --}}
    <div class="page-header d-flex align-items-start justify-content-between flex-wrap gap-3">
        <div>
            <h3>{{ config('app.name') }} Overview</h3>
            <p>Welcome back — here's what's happening today.</p>
        </div>
        <div class="d-flex align-items-center gap-2 flex-wrap">
            <div class="dropdown">
                <a href="#" class="btn-outline-dim dropdown-toggle" data-bs-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Last 30 Days
                </a>
                <ul class="dropdown-menu dash-dropdown">
                    <li><a class="dropdown-item" href="#">Last 30 Days</a></li>
                    <li><a class="dropdown-item" href="#">Last 6 Months</a></li>
                    <li><a class="dropdown-item" href="#">Last 1 Year</a></li>
                </ul>
            </div>
            <a href="#" class="btn-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Reports
            </a>
        </div>
    </div>

    {{-- ── STAT CARDS ── --}}
    <div class="row g-3 mb-4">
        <div class="col-6 col-lg-3">
            <div class="stat-card green">
                <div class="stat-icon green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                </div>
                <div class="stat-value">{{ $totalCourses }}</div>
                <div class="stat-label">Total Courses</div>
                <div class="stat-badge up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                    4.26%
                </div>
            </div>
        </div>
        <div class="col-6 col-lg-3">
            <div class="stat-card blue">
                <div class="stat-icon blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                </div>
                <div class="stat-value">{{ $totalUsers }}</div>
                <div class="stat-label">Total Users</div>
                <div class="stat-badge up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                    2.1%
                </div>
            </div>
        </div>
        <div class="col-6 col-lg-3">
            <div class="stat-card warning">
                <div class="stat-icon warning">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </div>
                <div class="stat-value">{{ $totalTestimonials }}</div>
                <div class="stat-label">Testimonials</div>
                <div class="stat-badge up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                    1.8%
                </div>
            </div>
        </div>
        <div class="col-6 col-lg-3">
            <div class="stat-card danger">
                <div class="stat-icon danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </div>
                <div class="stat-value">{{ $totalTalents }}</div>
                <div class="stat-label">Skills</div>
                <div class="stat-badge up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                    3.5%
                </div>
            </div>
        </div>
    </div>

    {{-- ── CHARTS ROW ── --}}
    <div class="row g-3 mb-4">
        {{-- Course Enrollment Chart --}}
        <div class="col-lg-4">
            <div class="dash-card">
                <div class="dash-card-body">
                    <div class="d-flex align-items-start justify-content-between mb-1">
                        <div>
                            <p class="dash-card-sub mb-1">Course Enrollment</p>
                            <div class="stat-value" style="font-size:22px">{{ $totalCourses }}</div>
                        </div>
                        <span class="stat-badge up mt-1">↑ 4.26%</span>
                    </div>
                    <div class="chart-area chart-area-lg">
                        <canvas id="salesRevenue"></canvas>
                    </div>
                </div>
            </div>
        </div>

        {{-- Talent Overview --}}
        <div class="col-lg-8">
            <div class="dash-card">
                <div class="dash-card-header">
                    <div>
                        <p class="dash-card-title">Skills Overview</p>
                        <p class="dash-card-sub mb-0">30-day activity · <a href="/admin/talents" class="link-green">See all Skills</a></p>
                    </div>
                    <div class="dropdown">
                        <a href="#" class="btn-ghost-green dropdown-toggle" data-bs-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="8 17 12 21 16 17" />
                                <line x1="12" y1="3" x2="12" y2="21" />
                            </svg>
                            Download Report
                        </a>
                        <ul class="dropdown-menu dash-dropdown">
                            <li><a class="dropdown-item" href="#">Mini Version</a></li>
                            <li><a class="dropdown-item" href="#">Full Version</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">More Options</a></li>
                        </ul>
                    </div>
                </div>
                <div class="dash-card-body">
                    <span style="font-size:26px;font-weight:700;color:var(--white)">{{ $totalTalents }}</span>
                    <span style="font-size:12px;color:var(--w40);margin-left:6px">Registered Skills</span>
                    <div class="chart-area chart-area-lg mt-3">
                        <canvas id="salesOverview"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- ── TALENTS TABLE + ANNOUNCEMENTS ── --}}
    <div class="row g-3 mb-4">
        {{-- Talents Table --}}
        <div class="col-md-12">
            <div class="dash-card">
                <div class="dash-card-header">
                    <div>
                        <p class="dash-card-title">
                            Skills
                            <a href="{{ route('admin.talents.index') }}" class="link-green ms-2">See all</a>
                        </p>
                    </div>
                    <div class="card-tabs">
                        <a href="#" class="card-tab">Pending</a>
                        <a href="#" class="card-tab">Approved</a>
                        <a href="#" class="card-tab active">All</a>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="dash-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th class="d-none d-md-table-cell">Joined</th>
                                <th class="d-none d-lg-table-cell">Phone</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($talents as $talent)
                            <tr>
                                <td>
                                    <span class="tb-sub">{{ $talent->id }}</span>
                                </td>
                                <td>
                                    <div class="user-cell">
                                        <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}"
                                            class="user-avatar-sm" alt="{{ $talent->name }}">
                                        <span class="tb-lead">{{ $talent->name }}</span>
                                    </div>
                                </td>
                                <td class="d-none d-md-table-cell">
                                    <span class="tb-sub">{{ $talent->created_at->format('d M Y') }}</span>
                                </td>
                                <td class="d-none d-lg-table-cell">
                                    <span class="tb-phone">{{ $talent->phone }}</span>
                                </td>
                                <td>
                                    <span class="cat-pill">{{ $talent->category->name ?? 'Uncategorized' }}</span>
                                </td>
                                <td>
                                    <span class="status-badge {{ strtolower($talent->status) }}">
                                        {{ ucfirst($talent->status) }}
                                    </span>
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="action-btn" data-bs-toggle="dropdown" aria-label="Actions">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                <circle cx="12" cy="5" r="1.5" />
                                                <circle cx="12" cy="12" r="1.5" />
                                                <circle cx="12" cy="19" r="1.5" />
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu dash-dropdown">
                                            <li>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#quickViewModal{{ $talent->id }}">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                    Quick View
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#statusModal{{ $talent->id }}">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    Update Status
                                                </a>
                                            </li>
                                            <li>
                                                <hr class="dropdown-divider">
                                            </li>
                                            <li>
                                                <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $talent->id }}">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">
                                                        <polyline points="3 6 5 6 21 6" />
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                                    </svg>
                                                    Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {{-- New Users --}}
        <div class="col-md-6">
            <div class="dash-card">
                <div class="dash-card-header">
                    <p class="dash-card-title">New Users</p>
                    <a href="{{ route('admin.users.index') }}" class="link-green">View all</a>
                </div>
                @foreach ($users as $user)
                <div class="user-row">
                    <div class="user-initials-md">{{ strtoupper(substr($user->name, 0, 2)) }}</div>
                    <div class="flex-grow-1 overflow-hidden">
                        <div class="user-lead text-truncate">{{ $user->name }}</div>
                        <div class="user-sub text-truncate">{{ $user->email }}</div>
                    </div>
                    <div class="dropdown flex-shrink-0">
                        <button class="action-btn" data-bs-toggle="dropdown" aria-label="User actions">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="5" r="1.5" />
                                <circle cx="12" cy="12" r="1.5" />
                                <circle cx="12" cy="19" r="1.5" />
                            </svg>
                        </button>
                        <ul class="dropdown-menu dash-dropdown">
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Push Notification</a></li>
                        </ul>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        {{-- Announcements --}}
        <div class="col-md-6">
            <div class="dash-card">
                <div class="dash-card-header">
                    <p class="dash-card-title">Recent Announcements</p>
                    <div class="card-tabs">
                        <a href="#" class="card-tab">Published</a>
                        <a href="#" class="card-tab active">All</a>
                    </div>
                </div>
                <ul class="activity-list">
                    @foreach($announcements as $announcement)
                    <li class="activity-item">
                        <div class="activity-dot">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </div>
                        <div>
                            <p class="activity-title">{{ Str::limit($announcement->title, 50) }}</p>
                            <span class="activity-time">{{ $announcement->created_at->format('d M Y') }}</span>
                        </div>
                    </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>

    {{-- ── BOTTOM ROW ── --}}
    <div class="row g-3">
        {{-- New Users --}}
        <div class="col-md-6">
            <div class="dash-card">
                <div class="dash-card-header">
                    <p class="dash-card-title">New Users</p>
                    <a href="{{ route('admin.users.index') }}" class="link-green">View all</a>
                </div>
                @foreach ($users as $user)
                <div class="user-row">
                    <div class="user-initials-md">{{ strtoupper(substr($user->name, 0, 2)) }}</div>
                    <div class="flex-grow-1 overflow-hidden">
                        <div class="user-lead text-truncate">{{ $user->name }}</div>
                        <div class="user-sub text-truncate">{{ $user->email }}</div>
                    </div>
                    <div class="dropdown flex-shrink-0">
                        <button class="action-btn" data-bs-toggle="dropdown" aria-label="User actions">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="5" r="1.5" />
                                <circle cx="12" cy="12" r="1.5" />
                                <circle cx="12" cy="19" r="1.5" />
                            </svg>
                        </button>
                        <ul class="dropdown-menu dash-dropdown">
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Push Notification</a></li>
                        </ul>
                    </div>
                </div>
                @endforeach
            </div>
        </div>

        {{-- Recent Payments --}}
        <div class="col-md-6 col-xxl-4">
            <div class="dash-card">
                <div class="dash-card-header">
                    <p class="dash-card-title">Recent Payments</p>
                    <a href="{{ route('admin.payments.index') }}" class="link-green">All payments</a>
                </div>
                @foreach($payments as $payment)
                <div class="payment-row">
                    <div class="pay-avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                            <line x1="1" y1="10" x2="23" y2="10" />
                        </svg>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                        <div class="pay-title text-truncate">{{ $payment->email ?? 'User' }}</div>
                        <div class="pay-sub text-truncate">{{ $payment->story->title ?? '—' }}</div>
                        <div class="pay-sub">{{ \Carbon\Carbon::parse($payment->created_at)->format('d M Y') }}</div>
                    </div>
                    <div class="d-flex flex-column align-items-end gap-1 flex-shrink-0">
                        <span class="status-badge {{ $payment->status === 'completed' ? 'approved' : 'pending' }}">
                            {{ ucfirst($payment->status) }}
                        </span>
                        <a href="#" class="btn-view" data-bs-toggle="modal" data-bs-target="#transaction_details{{ $payment->id }}">View</a>
                    </div>
                </div>
                @endforeach
            </div>
        </div>

    </div>

</div>{{-- /content-wrapper --}}


{{-- ══════════════════════════════════
     MODALS
══════════════════════════════════ --}}

{{-- Withdraw Modal --}}
<div class="modal fade" id="withdraw" tabindex="-1" data-bs-keyboard="false" data-bs-backdrop="static" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Withdraw Payment</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label class="form-label">Enter Amount ($) <span style="color:var(--danger)">*</span></label>
                    <input type="text" class="form-control" placeholder="0.00">
                    <div class="amt-shortcuts mt-2">
                        <span class="amt-shortcut">$50</span>
                        <span class="amt-shortcut">$100</span>
                        <span class="amt-shortcut">$150</span>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Payment Gateway <span style="color:var(--danger)">*</span></label>
                    <div class="radio-group">
                        <label class="radio-option"><input type="radio" name="payment" value="paypal"> PayPal</label>
                        <label class="radio-option"><input type="radio" name="payment" value="stripe"> Stripe</label>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email <span style="color:var(--danger)">*</span></label>
                    <input type="email" class="form-control" placeholder="your@email.com">
                </div>
                <div class="mb-4">
                    <label class="form-label">Password <span style="color:var(--danger)">*</span></label>
                    <input type="password" class="form-control" placeholder="••••••••">
                </div>
                <button type="button" class="btn-modal-primary w-100" data-bs-toggle="modal" data-bs-target="#success_credit" data-bs-dismiss="modal">
                    Withdraw Funds
                </button>
            </div>
        </div>
    </div>
</div>

{{-- Per-talent Modals --}}
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
                        <option value="pending" {{ $talent->status == 'pending'  ? 'selected' : '' }}>Pending</option>
                        <option value="approved" {{ $talent->status == 'approved' ? 'selected' : '' }}>Approved</option>
                        <option value="rejected" {{ $talent->status == 'rejected' ? 'selected' : '' }}>Rejected</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-modal-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn-modal-primary">Save Changes</button>
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
                <div class="row g-4">
                    <div class="col-md-4">
                        <img src="{{ asset('image/talents/' . $talent->image) }}" alt="{{ $talent->name }}"
                            class="img-fluid rounded-3 w-100" style="object-fit:cover;max-height:240px;border:1px solid var(--border)">
                    </div>
                    <div class="col-md-8">
                        <h5 style="color:var(--white);margin-bottom:16px">{{ $talent->name }}</h5>
                        <div class="summary-grid">
                            <div class="summary-cell">
                                <h6>Phone</h6>
                                <p>{{ $talent->phone }}</p>
                            </div>
                            <div class="summary-cell">
                                <h6>Email</h6>
                                <p class="text-truncate">{{ $talent->email }}</p>
                            </div>
                            <div class="summary-cell">
                                <h6>Category</h6>
                                <p>{{ $talent->category->name ?? 'N/A' }}</p>
                            </div>
                            <div class="summary-cell">
                                <h6>Language</h6>
                                <p>{{ $talent->language }}</p>
                            </div>
                            <div class="summary-cell" style="grid-column:span 2">
                                <h6>Address</h6>
                                <p>{{ $talent->address }}</p>
                            </div>
                            <div class="summary-cell" style="grid-column:span 2">
                                <h6>Description</h6>
                                <p style="white-space:pre-line">{{ $talent->description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-modal-secondary" data-bs-dismiss="modal">Close</button>
                <a href="{{ route('admin.talents.show', $talent->id) }}" class="btn-modal-primary">View Full Profile</a>
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
                <h5 class="modal-title">Confirm Deletion</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div style="text-align:center;padding:8px 0 16px">
                    <div style="width:52px;height:52px;border-radius:50%;background:rgba(224,92,106,0.12);color:var(--danger);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:22px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                    </div>
                    <p style="color:var(--white);font-size:14px;margin-bottom:6px">
                        Delete <strong>{{ $talent->name }}</strong>?
                    </p>
                    <p style="font-size:12px;color:var(--w40);margin:0">This action is permanent and cannot be undone.</p>
                </div>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn-modal-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn-modal-danger">Yes, Delete</button>
            </div>
        </form>
    </div>
</div>

@endforeach

{{-- Transaction Detail Modals --}}
@foreach($payments as $payment)
<div class="modal fade" id="transaction_details{{ $payment->id }}" tabindex="-1"
    data-bs-keyboard="false" data-bs-backdrop="static" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Transaction Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p style="font-size:11px;font-weight:600;color:var(--w40);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:12px">
                    Transaction Summary
                </p>
                <div class="summary-grid">
                    <div class="summary-cell">
                        <h6>Transaction ID</h6>
                        <p>#{{ $payment->tx_ref }}</p>
                    </div>
                    <div class="summary-cell">
                        <h6>Type</h6>
                        <p>Purchase</p>
                    </div>
                    <div class="summary-cell">
                        <h6>Amount</h6>
                        <p>${{ $payment->amount }}</p>
                    </div>
                    <div class="summary-cell">
                        <h6>Currency</h6>
                        <p>{{ $payment->currency }}</p>
                    </div>
                    <div class="summary-cell">
                        <h6>Processing Fee</h6>
                        <p>$20</p>
                    </div>
                    <div class="summary-cell">
                        <h6>Method</h6>
                        <p>Credit Card</p>
                    </div>
                    <div class="summary-cell">
                        <h6>Sender</h6>
                        <p class="text-truncate">{{ $payment->email }}</p>
                    </div>
                    <div class="summary-cell">
                        <h6>Receiver</h6>
                        <p class="text-truncate">kabosierik@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-modal-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
@endforeach

@endsection

@push('scripts')
<script>
    document.querySelectorAll('.amt-shortcut').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.closest('.modal-body').querySelector('input[type="text"]');
            if (input) input.value = btn.textContent.trim();
        });
    });
</script>
@endpush