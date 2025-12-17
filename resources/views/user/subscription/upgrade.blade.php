@extends('layouts.user')

@section('content')
<div class="container">
    <h2>Upgrade Subscription</h2>

    <form action="{{ route('user.subscription.upgrade', $subscription->id) }}" method="POST">
        @csrf
        <div class="mb-3">
            <label for="plan_id" class="form-label">Select New Plan</label>
            <select name="plan_id" id="plan_id" class="form-control">
                @foreach($plans as $plan)
                    <option value="{{ $plan->id }}" {{ $plan->id == $subscription->pricing_plan_id ? 'selected' : '' }}>
                        {{ $plan->name }}
                    </option>
                @endforeach
            </select>
        </div>

        <div class="mb-3">
            <label for="billing_cycle" class="form-label">Billing Cycle</label>
            <select name="billing_cycle" id="billing_cycle" class="form-control">
                <option value="monthly" {{ $subscription->billing_cycle == 'monthly' ? 'selected' : '' }}>Monthly</option>
                <option value="annually" {{ $subscription->billing_cycle == 'annually' ? 'selected' : '' }}>Annually</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Upgrade</button>
        <a href="{{ route('user.subscription.show', $subscription->id) }}" class="btn btn-secondary">Cancel</a>
    </form>
</div>
@endsection
