@extends('layouts.guest')
@section('title', 'Pricing Plan')
@section('content')

<div class="container mt-4">
    <div class="trusted-customers-two">
        <!-- <img src="./assets/img/home/shape-2.svg" alt="img" class="trusted-bg img-fluid d-lg-flex d-none"> -->
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="trusted-customers-image position-relative d-lg-block d-none text-center aos-init aos-animate" data-aos="fade-up">
                    <img src="./assets/img/home/jointeam.svg" alt="img" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-5 aos-init aos-animate" data-aos="fade-left">
                <h2 class="mb-3">Start with a 7-day free trial</h2>
                <p>Access all basic features</p>
                @if(auth()->guest())
                <a href="{{ route('trial.start') }}" class="btn btn-white">
                    Start Free Trial
                </a>
                @elseif(!auth()->user()->hasUsedTrial())
                <form method="POST" action="{{ route('trial.activate') }}">
                    @csrf
                    <button type="submit" class="btn btn-white">
                        Start Free Trial
                    </button>
                </form>
                @endif
                <span class="trusted-customers-shape d-lg-block d-none text-white mt-3">Takes less than 5 minutes — you stay in control of your work.</span>
            </div>
        </div>
    </div>
</div>
<section class="price-section">
    <div class="container">

        <div class="pricing-tab align-items-center justify-content-center">
            <ul class="nav" role="tablist">
                <li>
                    <a href="#" data-bs-toggle="tab" data-bs-target="#yearly" aria-selected="true" role="tab" class="active">Yearly</a>
                </li>
                <li>
                    <a class="" href="#" data-bs-toggle="tab" data-bs-target="#monthly" aria-selected="false" role="tab" tabindex="-1">Monthly</a>
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <div class="tab-pane fade" id="monthly" role="tabpanel">
                <div class="row justify-content-center">
                    @foreach($plans as $plan)
                    @php
                    $price = $plan->prices->where('billing_cycle','monthly')->first();
                    @endphp

                    @if($price)
                    <div class="col-lg-4 col-md-6">
                        <div class="price-card {{ $plan->is_featured ? 'active' : '' }}" data-aos="flip-right">
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

                                <div class="amt-item">
                                    <div class="d-flex align-items-center">
                                        <h2 class="me-1">${{ $price->price }}</h2>
                                        <p class="mb-0"> / month</p>
                                    </div>
                                    <p>{{ $plan->limit_text ?? '' }}</p>
                                </div>
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
                                    <i class="feather-shopping-cart me-2"></i> Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>
                    @endif
                    @endforeach
                </div>
            </div>

            <div class="tab-pane fade show active" id="yearly" role="tabpanel">
                <div class="row justify-content-center">
                    @foreach($plans as $plan)
                    @php
                    $price = $plan->prices->where('billing_cycle','annually')->first();
                    @endphp

                    @if($price)
                    <div class="col-lg-4 col-md-6">
                        <div class="price-card {{ $plan->is_featured ? 'active' : '' }}" data-aos="flip-right">
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

                                <div class="amt-item">
                                    <div class="d-flex align-items-center">
                                        <h2 class="me-1">${{ $price->price }}</h2>
                                        <p class="mb-0"> / year</p>
                                    </div>
                                    <p>{{ $plan->limit_text ?? '' }}</p>
                                </div>
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
                                    <i class="feather-shopping-cart me-2"></i> Choose Plan
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

<div class="modal fade" id="confirmPlanModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="modal-header border-0 bg-gradient text-white"
                    style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                <h5 class="modal-title">Confirm Subscription</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            <form method="POST" action="{{ route('subscribe') }}">
                @csrf

                <div class="modal-body">
                    <p class="mb-2">You are about to subscribe to:</p>

                    <h5 class="fw-bold" id="modalPlanName"></h5>
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
                    <button type="button" class="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="submit" class="btn btn-primary rounded-pill shadow-sm fw-semibold">
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
            const button = event.relatedTarget;

            const planId = button.getAttribute('data-plan-id');
            const planName = button.getAttribute('data-plan-name');
            const price = button.getAttribute('data-price');
            const cycle = button.getAttribute('data-cycle');

            document.getElementById('modalPlanId').value = planId;
            document.getElementById('modalBillingCycle').value = cycle;

            document.getElementById('modalPlanName').textContent = planName;
            document.getElementById('modalPrice').textContent = `$${price}`;
            document.getElementById('modalCycle').textContent = cycle;
        });
    });
</script>

@endsection