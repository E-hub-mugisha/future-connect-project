@extends('layouts.app')

@section('title', 'Connection Request Details')

@section('content')
<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-lg-10">

            {{-- Header --}}
            <div class="card shadow-sm border-0 mb-4">
                <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h4 class="mb-0">
                        Connection Request #{{ $connection->id }}
                    </h4>
                    <a href="{{ route('admin.connections') }}" class="btn btn-light btn-sm">
                        <i class="fas fa-arrow-left"></i> Back
                    </a>
                </div>

                <div class="card-body">
                    {{-- Request Info --}}
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <h5 class="fw-bold">Talent Info</h5>
                            <p class="mb-1"><strong>Name:</strong> {{ $connection->talent->name }}</p>
                            <p class="mb-1"><strong>Email:</strong> {{ $connection->talent->email ?? 'N/A' }}</p>
                            <p class="mb-1"><strong>Skill:</strong> {{ $connection->talent->skill ?? 'N/A' }}</p>
                        </div>
                        <div class="col-md-6">
                            <h5 class="fw-bold">Requester Info</h5>
                            <p class="mb-1"><strong>Name:</strong> {{ $connection->requester->name }}</p>
                            <p class="mb-1"><strong>Email:</strong> {{ $connection->requester->email }}</p>
                            <p class="mb-1"><strong>Phone:</strong> {{ $connection->requester->phone ?? 'N/A' }}</p>
                        </div>
                    </div>

                    <hr>

                    {{-- Payment Info --}}
                    <h5 class="fw-bold mb-3">Payment Details</h5>
                    @php
                        $payment = $connection->payment; // Relationship: Connection hasOne ConnectionPayment
                    @endphp

                    @if($payment)
                        <p><strong>Status:</strong>
                            @if($payment->status === 'successful')
                                <span class="badge bg-success">Paid</span>
                            @elseif($payment->status === 'pending')
                                <span class="badge bg-warning text-dark">Pending</span>
                            @else
                                <span class="badge bg-danger">Failed</span>
                            @endif
                        </p>
                        <p><strong>Amount:</strong> {{ number_format($payment->amount,2) }} {{ $payment->currency }}</p>
                        <p><strong>Transaction Ref:</strong> {{ $payment->tx_ref }}</p>
                    @else
                        <p class="text-muted">No payment record found for this connection.</p>
                    @endif

                    <hr>

                    {{-- Status Info --}}
                    <h5 class="fw-bold mb-3">Connection Status</h5>
                    <p>
                        Current Status:
                        @if($connection->status === 'accepted')
                            <span class="badge bg-success">Accepted</span>
                        @elseif($connection->status === 'rejected')
                            <span class="badge bg-danger">Rejected</span>
                        @else
                            <span class="badge bg-secondary">Pending</span>
                        @endif
                    </p>

                    @if($connection->response)
                        <div class="alert alert-info">
                            <strong>Admin Response:</strong> {{ $connection->response }}
                        </div>
                    @endif
                </div>
            </div>

            {{-- Admin Actions --}}
            <div class="card shadow-sm border-0">
                <div class="card-header bg-dark text-white">
                    <strong>Admin Actions</strong>
                </div>
                <div class="card-body">

                    {{-- Respond to Requester --}}
                    <form action="{{ route('admin.connections.respond', $connection->id) }}" method="POST" class="mb-4">
                        @csrf
                        <div class="mb-3">
                            <label for="response" class="form-label">Send a Message to Requester</label>
                            <textarea name="response" id="response" class="form-control"
                                rows="4" placeholder="Write your response...">{{ old('response', $connection->response) }}</textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-paper-plane"></i> Send Response
                        </button>
                    </form>

                    {{-- Accept Connection --}}
                    @php
                        $canAccept = $payment && $payment->status === 'successful';
                    @endphp

                    @if($connection->status !== 'accepted')
                        <form action="{{ route('admin.connections.accept', $connection->id) }}" method="POST">
                            @csrf
                            <button type="submit" class="btn btn-success"
                                {{ !$canAccept ? 'disabled' : '' }}>
                                <i class="fas fa-check-circle"></i>
                                Accept Connection
                            </button>
                            @unless($canAccept)
                                <p class="mt-2 text-muted">
                                    <i class="fas fa-info-circle"></i>
                                    Payment must be successful before accepting.
                                </p>
                            @endunless
                        </form>
                    @else
                        <span class="badge bg-success fs-6">
                            <i class="fas fa-check"></i> Connection Already Accepted
                        </span>
                    @endif
                </div>
            </div>

        </div>
    </div>
</div>
@endsection
