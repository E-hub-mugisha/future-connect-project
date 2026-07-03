@extends('layouts.guest')
@section('title', 'Pricing Plan')
@section('content')

<style>
    /* ===== GLOBAL ===== */
    * {
        box-sizing: border-box;
    }

    /* ===== TRIAL BANNER ===== */
    .trusted-customers-two {
        background: #0b1416;
        border: 1px solid #1a2a2e;
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
        background: radial-gradient(circle, rgba(0, 166, 103, 0.08) 0%, transparent 70%);
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
        color: #ffffff;
        line-height: 1.35;
        margin-bottom: 8px;
    }

    .trusted-customers-two>.container>.row>div>p,
    .trusted-customers-two p {
        font-size: 14px;
        color: #8aa4aa;
        margin-bottom: 20px;
    }

    .btn-white {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #48d597;
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
        background: #008f58;
        transform: translateY(-2px);
        color: #fff;
    }

    .trusted-customers-shape {
        display: block;
        font-size: 12px;
        color: #6b8a90 !important;
        margin-top: 12px;
    }

    /* ===== PRICING SECTION ===== */
    .price-section {
        background: #0e1618;
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
        background: #0f1e21;
        border: 1px solid #1e3035;
        border-radius: 10px;
        gap: 4px;
    }

    .pricing-tab .nav li a {
        display: block;
        padding: 8px 28px;
        border-radius: 7px;
        font-size: 13px;
        font-weight: 500;
        color: #6b8a90;
        text-decoration: none;
        transition: background 0.2s, color 0.2s;
    }

    .pricing-tab .nav li a.active,
    .pricing-tab .nav li a:hover {
        background: #48d597;
        color: #fff;
    }

    /* Price cards */
    .price-card {
        background: #0f1e21;
        border: 1px solid #1e3035;
        border-radius: 16px;
        padding: 28px 24px;
        margin-bottom: 24px;
        transition: border-color 0.25s, transform 0.25s;
        height: calc(100% - 24px);
        display: flex;
        flex-direction: column;
    }

    .price-card:hover {
        border-color: rgba(0, 166, 103, 0.45);
        transform: translateY(-4px);
    }

    .price-card.active {
        border-color: #48d597;
        background: #0d2219;
        position: relative;
    }

    .price-card.active::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 16px;
        background: radial-gradient(ellipse at top, rgba(0, 166, 103, 0.07) 0%, transparent 65%);
        pointer-events: none;
    }

    .price-card .border-bottom {
        border-bottom: 1px solid #1a2a2e !important;
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
        color: #e0f0f0;
        margin: 0 0 4px;
    }

    .plan-type p {
        font-size: 12px;
        color: #6b8a90;
        margin: 0;
    }

    .plan-type .badge {
        display: inline-block;
        background: rgba(0, 166, 103, 0.15);
        color: #48d597;
        border: 1px solid rgba(0, 166, 103, 0.35);
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
        color: #ffffff;
        margin: 0;
        line-height: 1;
    }

    .amt-item .d-flex p {
        font-size: 13px;
        color: #6b8a90;
        align-self: flex-end;
        padding-bottom: 4px;
    }

    .amt-item>p {
        font-size: 12px;
        color: #6b8a90;
        margin-top: 6px;
    }

    .price-card.active .amt-item h2 {
        color: #48d597;
    }

    /* Features list */
    .price-features {
        flex: 1;
        margin-bottom: 24px;
    }

    .price-features h6 {
        font-size: 11px;
        font-weight: 600;
        color: #6b8a90;
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
        color: #c8dde0;
    }

    .price-features ul li span {
        color: #48d597;
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
        background: #0f2a22;
        border: 1px solid rgba(0, 166, 103, 0.4);
        color: #48d597;
        padding: 11px 20px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
    }

    .price-btn .btn-primary:hover {
        background: #48d597;
        border-color: #48d597;
        color: #fff;
        transform: translateY(-2px);
    }

    .price-card.active .price-btn .btn-primary {
        background: #48d597;
        border-color: #48d597;
        color: #fff;
    }

    .price-card.active .price-btn .btn-primary:hover {
        background: #008f58;
        border-color: #008f58;
    }

    /* ===== MODAL ===== */
    .modal-content {
        background: #0f1e21 !important;
        border: 1px solid #1e3035 !important;
        border-radius: 14px !important;
        overflow: hidden;
    }

    .modal-header {
        background: linear-gradient(135deg, #0a2a1c, #0f2a22, #0b1e2a) !important;
        border-bottom: 1px solid #1e3035 !important;
        padding: 18px 24px;
    }

    .modal-header .modal-title {
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
    }

    .btn-close-white {
        filter: invert(1) grayscale(1) brightness(2);
        opacity: 0.6;
    }

    .btn-close-white:hover {
        opacity: 1;
    }

    .modal-body {
        padding: 24px;
        background: #0f1e21;
    }

    .modal-body p {
        font-size: 13px;
        color: #8aa4aa;
        margin-bottom: 8px;
    }

    .modal-body h5 {
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 4px;
    }

    .modal-body .text-muted {
        font-size: 13px;
        color: #6b8a90 !important;
    }

    .modal-body .alert-info {
        background: rgba(0, 166, 103, 0.08);
        border: 1px solid rgba(0, 166, 103, 0.25);
        color: #8adfc0;
        border-radius: 8px;
        font-size: 13px;
        padding: 12px 16px;
    }

    .modal-footer {
        background: #0b1416;
        border-top: 1px solid #1a2a2e !important;
        padding: 16px 24px;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }

    .modal-footer .btn-outline-secondary {
        background: transparent;
        border: 1px solid #1e3035;
        color: #8aa4aa;
        padding: 9px 20px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s;
    }

    .modal-footer .btn-outline-secondary:hover {
        border-color: #6b8a90;
        color: #c8dde0;
    }

    .modal-footer .btn-primary {
        background: #48d597;
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
        background: #008f58;
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

@endsection