@extends('layouts.talents')
@section('title', 'Pricing Plan')
@section('content')

<div class="container">
    <div class="row w-100">
        <div class="col-sm-12">

            <section class="py-5 mb-5">
                <h6 class="text-info text-center font-weight-bold mb-0">PRICING PLAN</h6>
                <h3 class="text-center font-weight-bold mb-40px">Choose your pricing policy</h3>

                <ul class="nav nav-pills justify-content-center mb-5" id="pricingTabOne" role="tablist">
                    <li class="nav-item text-center">
                        <a class="nav-link active px-4" id="free-tab" data-bs-toggle="tab" href="#free" role="tab" aria-controls="free" aria-selected="true">
                            Free
                        </a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="nav-link px-4" id="yearly-tab" data-bs-toggle="tab" href="#yearly" role="tab" aria-controls="yearly" aria-selected="false">
                            Yearly
                        </a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="nav-link px-4" id="monthly-tab" data-bs-toggle="tab" href="#monthly" role="tab" aria-controls="monthly" aria-selected="false">
                            Monthly
                        </a>
                    </li>
                </ul>

                <div class="tab-content">
                    {{-- Free Tab --}}
                    <div class="tab-pane show" id="free" role="tabpanel">
                        <div class="row justify-content-center">
                            @foreach($plans as $plan)
                            @php
                            $price = $plan->prices->where('billing_cycle','trial')->first();
                            @endphp

                            @if($price)
                            <div class="col-lg-4 col-md-6">
                                <div class="card border-0 card-shadow {{ $plan->is_featured ? 'active' : '' }}" data-aos="flip-right">
                                    <div class="card-body mb-3">
                                        <h3 class="text-center">
                                            {{ $plan->name }}
                                            @if($plan->is_featured)
                                            <span class="badge">Recommended</span>
                                            @endif
                                        </h3>
                                        <h6 class="text-center mb-5">{{ $plan->subtitle ?? 'Perfect plan for you' }}</h6>

                                        <ul class="list-checked mb-40px">
                                            @foreach($plan->features as $feature)
                                            <li>{{ $feature }}</li>
                                            @endforeach
                                        </ul>

                                        <div class="d-flex align-items-center justify-content-between mt-3">
                                            <div>
                                                <span class="h3 mb-0 me-1 font-weight-bold">${{ $price->price }}</span>
                                                <small class="text-muted">/Trial</small>
                                            </div>
                                            <div>
                                                @if(auth()->guest())
                                                <a href="{{ route('trial.start') }}" class="btn btn-primary">Start Free Trial</a>
                                                @elseif(!auth()->user()->hasUsedTrial())
                                                <form method="POST" action="{{ route('trial.activate') }}">
                                                    @csrf
                                                    <button type="submit" class="btn btn-primary">Start Free Trial</button>
                                                </form>
                                                @endif
                                            </div>
                                        </div>

                                        <p class="mt-3">{{ $plan->limit_text ?? '' }}</p>
                                    </div>
                                </div>
                            </div>
                            @endif
                            @endforeach
                        </div>
                    </div>

                    {{-- Monthly Tab --}}
                    <div class="tab-pane fade" id="monthly" role="tabpanel">
                        <div class="row justify-content-center">
                            @foreach($plans as $plan)
                            @php
                            $price = $plan->prices->where('billing_cycle','monthly')->first();
                            @endphp

                            @if($price)
                            <div class="col-lg-4 col-md-6">
                                <div class="card border-0 card-shadow {{ $plan->is_featured ? 'active' : '' }}" data-aos="flip-right">
                                    <div class="card-body mb-3">
                                        <h3 class="text-center">
                                            {{ $plan->name }}
                                            @if($plan->is_featured)
                                            <span class="badge">Recommended</span>
                                            @endif
                                        </h3>
                                        <h6 class="text-center mb-5">{{ $plan->subtitle ?? 'Perfect plan for you' }}</h6>

                                        <ul class="list-checked mb-40px">
                                            @foreach($plan->features as $feature)
                                            <li>{{ $feature }}</li>
                                            @endforeach
                                        </ul>

                                        <div class="d-flex align-items-center justify-content-between mt-3">
                                            <div>
                                                <span class="h3 mb-0 me-1 font-weight-bold">${{ $price->price }}</span>
                                                <small class="text-muted">/Monthly</small>
                                            </div>
                                            <div>
                                                <button type="button"
                                                    class="btn btn-primary"
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

                                        <p class="mt-3">{{ $plan->limit_text ?? '' }}</p>
                                    </div>
                                </div>
                            </div>
                            @endif
                            @endforeach
                        </div>
                    </div>

                    {{-- Yearly Tab --}}
                    <div class="tab-pane fade" id="yearly" role="tabpanel">
                        <div class="row justify-content-center">
                            @foreach($plans as $plan)
                            @php
                            $price = $plan->prices->where('billing_cycle','annually')->first();
                            @endphp

                            @if($price)
                            <div class="col-lg-4 col-md-6">
                                <div class="card border-0 card-shadow {{ $plan->is_featured ? 'active' : '' }}" data-aos="flip-right">
                                    <div class="card-body mb-3">
                                        <h3 class="text-center">
                                            {{ $plan->name }}
                                            @if($plan->is_featured)
                                            <span class="badge">Recommended</span>
                                            @endif
                                        </h3>
                                        <h6 class="text-center mb-5">{{ $plan->subtitle ?? 'Perfect plan for you' }}</h6>

                                        <ul class="list-checked mb-40px">
                                            @foreach($plan->features as $feature)
                                            <li>{{ $feature }}</li>
                                            @endforeach
                                        </ul>

                                        <div class="d-flex align-items-center justify-content-between mt-3">
                                            <div>
                                                <span class="h3 mb-0 me-1 font-weight-bold">${{ $price->price }}</span>
                                                <small class="text-muted">/Annually</small>
                                            </div>
                                            <div>
                                                <button type="button"
                                                    class="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#confirmPlanModal"
                                                    data-plan-id="{{ $plan->id }}"
                                                    data-plan-name="{{ $plan->name }}"
                                                    data-price="{{ $price->amount }}"
                                                    data-cycle="annually">
                                                    <i class="feather-shopping-cart me-2"></i> Choose Plan
                                                </button>
                                            </div>
                                        </div>

                                        <p class="mt-3">{{ $plan->limit_text ?? '' }}</p>
                                    </div>
                                </div>
                            </div>
                            @endif
                            @endforeach
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>
</div>

<div class="modal fade" id="confirmPlanModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4">
            <div class="modal-header bg-primary text-white">
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
                    <button type="submit" class="btn btn-primary rounded-pill">
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