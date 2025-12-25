@extends('layouts.talents')
@section('title', 'Became seller')
@section('content')

<div class="container">
    <div class="row">
        @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif
        <div class="card shadow p-4 text-center">
            <h3>Become a Seller 🎉</h3>
            <p>Join thousands of vendors and enjoy:</p>

            <ul class="text-start">
                <li>Sell unlimited products</li>
                <li>Access to analytics dashboard</li>
                <li>Promotions & marketing tools</li>
                <li>Secure payments</li>
            </ul>

            <button class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#registerSellerModal">
                Register as Seller
            </button>
        </div>
    </div>
</div>
<!-- Modal -->
<!-- Seller Application Modal -->
<div class="modal fade" id="registerSellerModal" tabindex="-1" aria-labelledby="registerSellerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">

            <form action="{{ route('talent.seller.register') }}" method="POST" class="p-2">
                @csrf

                <!-- Header -->
                <div class="modal-header border-0 bg-gradient text-white"
                    style="background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);">
                    <h5 class="modal-title fw-bold" id="applySellerModalLabel">
                        🌟 Apply to Become a Seller
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- Body -->
                <div class="modal-body py-4 px-3">
                    <p class="text-muted mb-4">
                        Join the <strong>Future Connect Shop</strong> and start selling products that empower our members.
                    </p>
                </div>

                <!-- Footer -->
                <div class="modal-footer border-0 d-flex justify-content-between px-4 py-3">
                    <button type="button" class="btn btn-primary border rounded-3 px-4 py-2 shadow-sm" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="submit" class="btn btn-primary px-5 py-2 rounded-3 shadow-sm fw-semibold">
                        Submit confirmation
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection