@extends('layouts.app')

@section('title', $event->title)

@section('content')
<div class="container py-5">
    <div class="row mb-4">
        <div class="col-lg-6">
            <img src="{{ asset($event->image ?? 'default-event.jpg') }}" class="img-fluid rounded shadow-sm" alt="{{ $event->title }}">
        </div>
        <div class="col-lg-6">
            <h2 class="fw-bold">{{ $event->title }}</h2>
            <p class="text-muted mb-2"><i class="fa fa-map-marker-alt"></i> {{ $event->venue ?? 'Online' }}</p>
            <p><i class="fa fa-calendar"></i> {{ \Carbon\Carbon::parse($event->event_date)->format('F d, Y') }} | {{ \Carbon\Carbon::parse($event->start_time)->format('h:i A') }} - {{ \Carbon\Carbon::parse($event->end_time)->format('h:i A') }}</p>
            <p class="mt-3">{{ $event->description }}</p>
        </div>
    </div>

    <hr>

    <h4 class="fw-bold mb-3">🎟️ Available Tickets</h4>

    <div class="row">
        @foreach ($event->tickets as $ticket)
            <div class="col-md-4 mb-4">
                <div class="card border-0 shadow-sm rounded-4 h-100">
                    <div class="card-body text-center">
                        <h5 class="fw-bold text-primary">{{ strtoupper($ticket->type) }}</h5>
                        <p class="fs-4 fw-semibold mb-1">{{ number_format($ticket->price) }} RWF</p>
                        <p class="text-muted">Available: {{ $ticket->quantity - $ticket->sold }}</p>
                        <button 
                            class="btn btn-outline-primary w-100 mt-3 buy-ticket-btn"
                            data-bs-toggle="modal" 
                            data-bs-target="#buyTicketModal"
                            data-ticket-id="{{ $ticket->id }}"
                            data-ticket-type="{{ $ticket->type }}"
                            data-ticket-price="{{ $ticket->price }}"
                        >
                            Buy Ticket
                        </button>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</div>

<!-- Buy Ticket Modal -->
<div class="modal fade" id="buyTicketModal" tabindex="-1" aria-labelledby="buyTicketModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4">
            <div class="modal-header bg-primary text-white rounded-top-4">
                <h5 class="modal-title fw-bold" id="buyTicketModalLabel">Buy Ticket</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <form id="buyTicketForm" action="{{ route('tickets.order') }}" method="POST">
                @csrf
                <div class="modal-body">
                    <input type="hidden" name="ticket_id" id="ticketId">
                    <div class="mb-3">
                        <label class="form-label">Ticket Type</label>
                        <input type="text" id="ticketType" class="form-control" readonly>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Price (RWF)</label>
                        <input type="text" id="ticketPrice" class="form-control" readonly>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Quantity</label>
                        <input type="number" name="quantity" id="ticketQuantity" class="form-control" min="1" value="1" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Proceed to Pay</button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection

@push('scripts')
<script>
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("buyTicketModal");
    const ticketIdInput = document.getElementById("ticketId");
    const ticketTypeInput = document.getElementById("ticketType");
    const ticketPriceInput = document.getElementById("ticketPrice");

    document.querySelectorAll(".buy-ticket-btn").forEach(button => {
        button.addEventListener("click", () => {
            ticketIdInput.value = button.dataset.ticketId;
            ticketTypeInput.value = button.dataset.ticketType;
            ticketPriceInput.value = button.dataset.ticketPrice;
        });
    });

    // Handle form submission with optional Flutterwave checkout later
});
</script>
@endpush
