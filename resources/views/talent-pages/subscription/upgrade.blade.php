@extends('layouts.talents')
@section('title', 'Upgrade Subscription')
@section('content')

<div class="container">
    <div class="az-content-body pd-lg-l-40 d-flex flex-column">
        <div class="az-content-header d-flex justify-content-between align-items-center">
            <h2 class="az-content-title">Upgrade Subscription</h2>
            <div class="d-flex justify-content-end az-content-header-right">
                <a href="#" class="btn btn-primary rounded-pill mb-3 align-self-start"> Back </a>
            </div>
        </div>
        <div class="card shadow-sm p-4">
            @if ($errors->any())
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <ul class="mb-0">
                    @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                    @endforeach
                </ul>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
            @endif

            <div class="az-content-label mg-b-5">Available Subscriptions</div>
            <div>
                <table id="example2" class="table">
                    <thead class="table-light">
                        <tr>
                            <th>Plan</th>
                            <th>Features</th>
                            <th>Monthly</th>
                            <th>Annually</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($plans as $plan)
                        <tr class="{{ $plan->id === $subscription->pricing_plan_id ? 'table-success' : '' }}">
                            <td class="fw-bold">
                                {{ $plan->name }}

                                @if($plan->id === $subscription->pricing_plan_id)
                                <span class="badge bg-success ms-2">Current Plan</span>
                                @endif
                            </td>

                            <td class="text-start">
                                <ul class="mb-0 ps-3">
                                    @foreach($plan->features as $feature)
                                    <li>{{ $feature }}</li>
                                    @endforeach
                                </ul>
                            </td>

                            <td>
                                ${{ optional($plan->prices->where('billing_cycle','monthly')->first())->price ?? 'N/A' }}
                            </td>

                            <td>
                                ${{ optional($plan->prices->where('billing_cycle','annually')->first())->price ?? 'N/A' }}
                            </td>

                            <td>
                                @if($plan->id === $subscription->pricing_plan_id)
                                <button class="btn btn-secondary btn-sm" disabled>
                                    Subscribed
                                </button>
                                @else
                                <button
                                    class="btn btn-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#confirmUpgradeModal-{{ $plan->id }}">
                                    Upgrade
                                </button>
                                @endif
                            </td>
                        </tr>

                        {{-- Confirmation Modal PER PLAN --}}
                        @if($plan->id !== $subscription->pricing_plan_id)
                        <div class="modal fade"
                            id="confirmUpgradeModal-{{ $plan->id }}"
                            tabindex="-1"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content rounded-4">
                                    <div class="modal-header bg-primary text-white">
                                        <h5 class="modal-title">Confirm Upgrade</h5>
                                        <button type="button"
                                            class="btn-close btn-close-white"
                                            data-bs-dismiss="modal"></button>
                                    </div>

                                    <form method="POST"
                                        action="{{ route('user.subscription.upgrade', $subscription->id) }}">
                                        @csrf

                                        <div class="modal-body">
                                            <p>You are about to upgrade to:</p>

                                            <h5 class="fw-bold">{{ $plan->name }}</h5>

                                            <div class="mb-3">
                                                <label class="form-label">Billing Cycle</label>
                                                <select name="billing_cycle"
                                                    class="form-control"
                                                    required>
                                                    <option value="monthly">Monthly</option>
                                                    <option value="annually">Annually</option>
                                                </select>
                                            </div>

                                            {{-- ✅ MUST match controller --}}
                                            <input type="hidden"
                                                name="plan_id"
                                                value="{{ $plan->id }}">

                                            <div class="alert alert-info">
                                                Your subscription will be updated immediately.
                                            </div>
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button"
                                                class="btn btn-outline-secondary"
                                                data-bs-dismiss="modal">
                                                Cancel
                                            </button>
                                            <button type="submit"
                                                class="btn btn-primary">
                                                Confirm Upgrade
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        @endif

                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection