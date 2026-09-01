@extends('layouts.guest')
@section('title', 'Pricing Plan')
@section('content')

<style>
    /* ===== GLOBAL ===== */
    * {
        box-sizing: border-box;
    }

    /* ===== THEME VARIABLES (driven by the same data-h-theme attribute the
       header's theme toggle sets on <html>, so this page follows it) ===== */
    :root {
        --pp-bg: #0e1618;
        --pp-bg-deep: #0b1416;
        --pp-surface: #0f1e21;
        --pp-border: #1e3035;
        --pp-border-soft: #1a2a2e;
        --pp-green: #48d597;
        --pp-green-dark: #008f58;
        --pp-green-deep-bg: #0d2219;
        --pp-text: #F5f5f7;
        --pp-text-soft: #e0f0f0;
        --pp-text-body: #c8dde0;
        --pp-muted: #8aa4aa;
        --pp-muted2: #6b8a90;
        --pp-alert-text: #8adfc0;
        --pp-glow: rgba(0, 166, 103, 0.08);
        --pp-border-hover: rgba(0, 166, 103, 0.45);
        --pp-badge-bg: rgba(0, 166, 103, 0.15);
        --pp-badge-border: rgba(0, 166, 103, 0.35);
        --pp-btn-bg: #0f2a22;
        --pp-btn-border: rgba(0, 166, 103, 0.4);
        --pp-alert-bg: rgba(0, 166, 103, 0.08);
        --pp-alert-border: rgba(0, 166, 103, 0.25);
        --pp-modal-header-grad: linear-gradient(135deg, #0a2a1c, #0f2a22, #0b1e2a);
        --pp-close-filter: invert(1) grayscale(1) brightness(2);
    }

    [data-h-theme="light"] {
        --pp-bg: #f6faf8;
        --pp-bg-deep: #eef4f1;
        --pp-surface: #F5f5f7;
        --pp-border: rgba(0, 100, 60, 0.14);
        --pp-border-soft: rgba(0, 100, 60, 0.12);
        --pp-green: #00a667;
        --pp-green-dark: #00854f;
        --pp-green-deep-bg: #e3f5ec;
        --pp-text: #10201b;
        --pp-text-soft: #10201b;
        --pp-text-body: #274a40;
        --pp-muted: #5b7a70;
        --pp-muted2: #5b7a70;
        --pp-alert-text: #00704a;
        --pp-glow: rgba(0, 166, 103, 0.06);
        --pp-border-hover: rgba(0, 100, 60, 0.4);
        --pp-badge-bg: rgba(0, 166, 103, 0.1);
        --pp-badge-border: rgba(0, 100, 60, 0.3);
        --pp-btn-bg: #eef4f1;
        --pp-btn-border: rgba(0, 100, 60, 0.3);
        --pp-alert-bg: rgba(0, 166, 103, 0.06);
        --pp-alert-border: rgba(0, 100, 60, 0.2);
        --pp-modal-header-grad: linear-gradient(135deg, #e3f5ec, #eef4f1, #e7f0f5);
        --pp-close-filter: none;
    }

    /* ===== TRIAL BANNER ===== */
    .trusted-customers-two {
        background: var(--pp-bg-deep);
        border: 1px solid var(--pp-border-soft);
        border-radius: 16px;
        padding: 40px 36px 0px;
        margin: 32px 0;
        position: relative;
        overflow: hidden;
    }

    .trusted-customers-two::before {
        content: '';
        position: absolute;
        top: -60px;
        right: -60px;
        width: 240px;
        height: 240px;
        background: radial-gradient(circle, var(--pp-glow) 0%, transparent 70%);
        pointer-events: none;
    }

    .trusted-customers-image img {
        max-height: 280px;
        object-fit: contain;
        opacity: 0.92;
    }

    .trusted-customers-two h2 {
        font-size: 26px;
        font-weight: 600;
        color: var(--pp-text);
        line-height: 1.35;
        margin-bottom: 8px;
    }

    .trusted-customers-two>.container>.row>div>p,
    .trusted-customers-two p {
        font-size: 14px;
        color: var(--pp-muted);
        margin-bottom: 20px;
    }

    .btn-white {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--pp-green);
        color: #fff;
        border: none;
        padding: 11px 26px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition: background 0.2s, transform 0.2s;
    }

    .btn-white:hover {
        background: var(--pp-green-dark);
        transform: translateY(-2px);
        color: #fff;
    }

    .trusted-customers-shape {
        display: block;
        font-size: 12px;
        color: var(--pp-muted2) !important;
        margin-top: 12px;
    }

    /* ===== PRICING SECTION ===== */
    .price-section {
        background: var(--pp-bg);
        padding: 56px 0 72px;
    }

    /* Toggle tabs */
    .pricing-tab {
        display: flex;
        justify-content: center;
        margin-bottom: 36px;
    }

    .pricing-tab .nav {
        list-style: none;
        padding: 4px;
        margin: 0;
        display: flex;
        background: var(--pp-surface);
        border: 1px solid var(--pp-border);
        border-radius: 10px;
        gap: 4px;
    }

    .pricing-tab .nav li a {
        display: block;
        padding: 8px 28px;
        border-radius: 7px;
        font-size: 13px;
        font-weight: 500;
        color: var(--pp-muted2);
        text-decoration: none;
        transition: background 0.2s, color 0.2s;
    }

    .pricing-tab .nav li a.active,
    .pricing-tab .nav li a:hover {
        background: var(--pp-green);
        color: #fff;
    }

    /* Price cards */
    .price-card {
        background: var(--pp-surface);
        border: 1px solid var(--pp-border);
        border-radius: 16px;
        padding: 28px 24px;
        margin-bottom: 24px;
        transition: border-color 0.25s, transform 0.25s;
        height: calc(100% - 24px);
        display: flex;
        flex-direction: column;
    }

    .price-card:hover {
        border-color: var(--pp-border-hover);
        transform: translateY(-4px);
    }

    .price-card.active {
        border-color: var(--pp-green);
        background: var(--pp-green-deep-bg);
        position: relative;
    }

    .price-card.active::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 16px;
        background: radial-gradient(ellipse at top, var(--pp-glow) 0%, transparent 65%);
        pointer-events: none;
    }

    .price-card .border-bottom {
        border-bottom: 1px solid var(--pp-border-soft) !important;
        padding-bottom: 20px;
        margin-bottom: 20px !important;
    }

    /* Plan type header */
    .plan-type {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 14px;
    }

    .plan-type h6 {
        font-size: 15px;
        font-weight: 600;
        color: var(--pp-text-soft);
        margin: 0 0 4px;
    }

    .plan-type p {
        font-size: 12px;
        color: var(--pp-muted2);
        margin: 0;
    }

    .plan-type .badge {
        display: inline-block;
        background: var(--pp-badge-bg);
        color: var(--pp-green);
        border: 1px solid var(--pp-badge-border);
        border-radius: 20px;
        font-size: 10px;
        font-weight: 600;
        padding: 3px 10px;
        white-space: nowrap;
        letter-spacing: 0.4px;
        text-transform: uppercase;
    }

    /* Amount */
    .amt-item h2 {
        font-size: 34px;
        font-weight: 700;
        color: var(--pp-text);
        margin: 0;
        line-height: 1;
    }

    .amt-item .d-flex p {
        font-size: 13px;
        color: var(--pp-muted2);
        align-self: flex-end;
        padding-bottom: 4px;
    }

    .amt-item>p {
        font-size: 12px;
        color: var(--pp-muted2);
        margin-top: 6px;
    }

    .price-card.active .amt-item h2 {
        color: var(--pp-green);
    }

    /* Features list */
    .price-features {
        flex: 1;
        margin-bottom: 24px;
    }

    .price-features h6 {
        font-size: 11px;
        font-weight: 600;
        color: var(--pp-muted2);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 12px;
    }

    .price-features ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 9px;
    }

    .price-features ul li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13px;
        color: var(--pp-text-body);
    }

    .price-features ul li span {
        color: var(--pp-green);
        font-size: 16px;
        line-height: 1;
        flex-shrink: 0;
    }

    /* CTA button */
    .price-btn {
        margin-top: auto;
    }

    .price-btn .btn-primary {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        background: var(--pp-btn-bg);
        border: 1px solid var(--pp-btn-border);
        color: var(--pp-green);
        padding: 11px 20px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
    }

    .price-btn .btn-primary:hover {
        background: var(--pp-green);
        border-color: var(--pp-green);
        color: #fff;
        transform: translateY(-2px);
    }

    .price-card.active .price-btn .btn-primary {
        background: var(--pp-green);
        border-color: var(--pp-green);
        color: #fff;
    }

    .price-card.active .price-btn .btn-primary:hover {
        background: var(--pp-green-dark);
        border-color: var(--pp-green-dark);
    }

    /* ===== MODAL ===== */
    .modal-content {
        background: var(--pp-surface) !important;
        border: 1px solid var(--pp-border) !important;
        border-radius: 14px !important;
        overflow: hidden;
    }

    .modal-header {
        background: var(--pp-modal-header-grad) !important;
        border-bottom: 1px solid var(--pp-border) !important;
        padding: 18px 24px;
    }

    .modal-header .modal-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--pp-text);
    }

    .btn-close-white {
        filter: var(--pp-close-filter);
        opacity: 0.6;
    }

    .btn-close-white:hover {
        opacity: 1;
    }

    .modal-body {
        padding: 24px;
        background: var(--pp-surface);
    }

    .modal-body p {
        font-size: 13px;
        color: var(--pp-muted);
        margin-bottom: 8px;
    }

    .modal-body h5 {
        font-size: 18px;
        font-weight: 600;
        color: var(--pp-text);
        margin-bottom: 4px;
    }

    .modal-body .text-muted {
        font-size: 13px;
        color: var(--pp-muted2) !important;
    }

    .modal-body .alert-info {
        background: var(--pp-alert-bg);
        border: 1px solid var(--pp-alert-border);
        color: var(--pp-alert-text);
        border-radius: 8px;
        font-size: 13px;
        padding: 12px 16px;
    }

    .modal-footer {
        background: var(--pp-bg-deep);
        border-top: 1px solid var(--pp-border-soft) !important;
        padding: 16px 24px;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }

    .modal-footer .btn-outline-secondary {
        background: transparent;
        border: 1px solid var(--pp-border);
        color: var(--pp-muted);
        padding: 9px 20px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s;
    }

    .modal-footer .btn-outline-secondary:hover {
        border-color: var(--pp-muted2);
        color: var(--pp-text-body);
    }

    .modal-footer .btn-primary {
        background: var(--pp-green);
        border: none;
        color: #fff;
        padding: 9px 22px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s, transform 0.2s;
    }

    .modal-footer .btn-primary:hover {
        background: var(--pp-green-dark);
        transform: translateY(-1px);
    }
</style>

{{-- TRIAL BANNER --}}
<div class="container mt-4">
    <div class="trusted-customers-two">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="trusted-customers-image position-relative d-lg-block d-none text-center">
                    <img src="./assets/img/home/jointeam.svg" alt="Join Future Connect" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-5">
                <h2 class="mb-2">Start with a 7-day free trial</h2>
                <p>Access all basic features — no commitment required.</p>

                @if(auth()->guest())
                <a href="{{ route('trial.start') }}" class="btn-white">
                    Start Free Trial
                </a>
                @elseif(!auth()->user()->hasUsedTrial())
                <form method="POST" action="{{ route('trial.activate') }}">
                    @csrf
                    <button type="submit" class="btn-white">
                        Start Free Trial
                    </button>
                </form>
                @endif

                <span class="trusted-customers-shape d-lg-block d-none mt-3">
                    Takes less than 5 minutes — you stay in control of your work.
                </span>
            </div>
        </div>
    </div>
</div>

{{-- PRICING SECTION --}}
<section class="price-section">
    <div class="container">

        {{-- Billing Toggle --}}
        <div class="pricing-tab align-items-center justify-content-center">
            <ul class="nav" role="tablist">
                <li>
                    <a href="#" data-bs-toggle="tab" data-bs-target="#yearly"
                        aria-selected="true" role="tab" class="active">Yearly</a>
                </li>
                <li>
                    <a href="#" data-bs-toggle="tab" data-bs-target="#monthly"
                        aria-selected="false" role="tab" tabindex="-1">Monthly</a>
                </li>
            </ul>
        </div>

        <div class="tab-content">

            {{-- Monthly Tab --}}
            <div class="tab-pane fade" id="monthly" role="tabpanel">
                <div class="row justify-content-center">
                    @foreach($plans as $plan)
                    @php $price = $plan->prices->where('billing_cycle','monthly')->first(); @endphp
                    @if($price)
                    <div class="col-lg-4 col-md-6">
                        <div class="price-card {{ $plan->is_featured ? 'active' : '' }}">
                            <div class="border-bottom mb-3">
                                <div class="price-title">
                                    <div class="plan-type">
                                        <div>
                                            <h6>{{ $plan->name }}</h6>
                                            <p>{{ $plan->subtitle ?? 'Perfect plan for you' }}</p>
                                        </div>
                                        @if($plan->is_featured)
                                        <span class="badge">Recommended</span>
                                        @endif
                                    </div>
                                </div>
                                <!-- <div class="amt-item">
                                    <div class="d-flex align-items-center">
                                        <h2 class="me-1">${{ $price->price }}</h2>
                                        <p class="mb-0">/ month</p>
                                    </div>
                                    <p>{{ $plan->limit_text ?? '' }}</p>
                                </div> -->
                            </div>

                            <div class="price-features">
                                <h6>Includes</h6>
                                <ul>
                                    @foreach($plan->features as $feature)
                                    <li>
                                        <span><i class="ti ti-circle-check-filled"></i></span>
                                        {{ $feature }}
                                    </li>
                                    @endforeach
                                </ul>
                            </div>

                            <div class="price-btn">
                                <button
                                    class="btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#confirmPlanModal"
                                    data-plan-id="{{ $plan->id }}"
                                    data-plan-name="{{ $plan->name }}"
                                    data-price="{{ $price->amount }}"
                                    data-cycle="monthly">
                                    <i class="feather-shopping-cart"></i> Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>
                    @endif
                    @endforeach
                </div>
            </div>

            {{-- Yearly Tab --}}
            <div class="tab-pane fade show active" id="yearly" role="tabpanel">
                <div class="row justify-content-center">
                    @foreach($plans as $plan)
                    @php $price = $plan->prices->where('billing_cycle','annually')->first(); @endphp
                    @if($price)
                    <div class="col-lg-4 col-md-6">
                        <div class="price-card {{ $plan->is_featured ? 'active' : '' }}">
                            <div class="border-bottom mb-3">
                                <div class="price-title">
                                    <div class="plan-type">
                                        <div>
                                            <h6>{{ $plan->name }}</h6>
                                            <p>{{ $plan->subtitle ?? 'Best yearly value' }}</p>
                                        </div>
                                        @if($plan->is_featured)
                                        <span class="badge">Recommended</span>
                                        @endif
                                    </div>
                                </div>
                                <!-- <div class="amt-item">
                                    <div class="d-flex align-items-center">
                                        <h2 class="me-1">${{ $price->price }}</h2>
                                        <p class="mb-0">/ year</p>
                                    </div>
                                    <p>{{ $plan->limit_text ?? '' }}</p>
                                </div> -->
                            </div>

                            <div class="price-features">
                                <h6>Includes</h6>
                                <ul>
                                    @foreach($plan->features as $feature)
                                    <li>
                                        <span><i class="ti ti-circle-check-filled"></i></span>
                                        {{ $feature }}
                                    </li>
                                    @endforeach
                                </ul>
                            </div>

                            <div class="price-btn">
                                <button
                                    class="btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#confirmPlanModal"
                                    data-plan-id="{{ $plan->id }}"
                                    data-plan-name="{{ $plan->name }}"
                                    data-price="{{ $price->price }}"
                                    data-cycle="annually">
                                    <i class="feather-shopping-cart"></i> Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>
                    @endif
                    @endforeach
                </div>
            </div>

        </div>
    </div>
</section>

{{-- CONFIRM MODAL --}}
<div class="modal fade" id="confirmPlanModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Confirm Subscription</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            <form method="POST" action="{{ route('subscribe') }}">
                @csrf
                <div class="modal-body">
                    <p class="mb-2">You are about to subscribe to:</p>
                    <h5 id="modalPlanName"></h5>
                    <p class="text-muted">
                        <span id="modalPrice"></span> /
                        <span id="modalCycle"></span>
                    </p>
                    <div class="alert alert-info mt-3">
                        This plan will be activated immediately after confirmation.
                    </div>
                    <input type="hidden" name="plan_id" id="modalPlanId">
                    <input type="hidden" name="billing_cycle" id="modalBillingCycle">
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn-outline-secondary" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="submit" class="btn-primary">
                        Confirm & Subscribe
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const confirmModal = document.getElementById('confirmPlanModal');
        confirmModal.addEventListener('show.bs.modal', function(event) {
            const btn = event.relatedTarget;
            document.getElementById('modalPlanId').value = btn.getAttribute('data-plan-id');
            document.getElementById('modalBillingCycle').value = btn.getAttribute('data-cycle');
            document.getElementById('modalPlanName').textContent = btn.getAttribute('data-plan-name');
            document.getElementById('modalPrice').textContent = '$' + btn.getAttribute('data-price');
            document.getElementById('modalCycle').textContent = btn.getAttribute('data-cycle');
        });
    });
</script>

{{-- ════════════════════ STANDALONE THEME SUPPORT ════════════════════
     This page's light theme is driven by [data-h-theme="light"] on <html>.
     Normally the header sets that attribute. This block makes the page
     fully self-sufficient too: it applies the stored/system theme itself
     on load, keeps itself in sync if the header (or another tab) changes
     it, and — only if no header toggle button exists anywhere on the
     page — injects its own floating toggle button so this page always
     has a working light/dark switch on its own. ════════════════════ --}}
<style>
    .pp-theme-toggle {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 1200;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border: 1px solid var(--pp-border);
        background: var(--pp-surface);
        color: var(--pp-muted2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        cursor: pointer;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        transition: all 0.2s;
    }

    .pp-theme-toggle:hover {
        color: var(--pp-text);
        border-color: var(--pp-border-hover);
        transform: translateY(-2px);
    }

    .pp-theme-toggle .pp-sun {
        display: none;
    }

    .pp-theme-toggle .pp-moon {
        display: inline-flex;
    }

    [data-h-theme="light"] .pp-theme-toggle .pp-sun {
        display: inline-flex;
    }

    [data-h-theme="light"] .pp-theme-toggle .pp-moon {
        display: none;
    }
</style>

<script>
    (function() {
        const root = document.documentElement;
        const STORAGE_KEY = 'fc-theme';

        function applyTheme(theme) {
            if (theme === 'light') {
                root.setAttribute('data-h-theme', 'light');
            } else {
                root.removeAttribute('data-h-theme');
            }
        }

        function currentTheme() {
            return root.getAttribute('data-h-theme') === 'light' ? 'light' : 'dark';
        }

        function storedOrSystemTheme() {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === 'light' || stored === 'dark') return stored;
            return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        }

        // Apply immediately on load, in case no header script has already done so.
        applyTheme(storedOrSystemTheme());

        // Stay in sync if theme changes elsewhere (header toggle on this same
        // page, or a toggle on another tab writing to localStorage).
        window.addEventListener('storage', function(e) {
            if (e.key === STORAGE_KEY) applyTheme(e.newValue === 'light' ? 'light' : 'dark');
        });

        function setTheme(theme) {
            applyTheme(theme);
            localStorage.setItem(STORAGE_KEY, theme);
        }

        function toggleTheme() {
            setTheme(currentTheme() === 'light' ? 'dark' : 'light');
        }

        // Only add our own floating toggle if the page has no other theme
        // toggle control already (e.g. the header's #fcThemeToggle button).
        document.addEventListener('DOMContentLoaded', function() {
            const hasExistingToggle = document.querySelector('#fcThemeToggle, [data-theme-toggle]');
            if (hasExistingToggle) return;

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'pp-theme-toggle';
            btn.setAttribute('aria-label', 'Toggle theme');
            btn.innerHTML = '<i class="ti ti-sun pp-sun"></i><i class="ti ti-moon pp-moon"></i>';
            btn.addEventListener('click', toggleTheme);
            document.body.appendChild(btn);
        });
    })();
</script>

@endsection