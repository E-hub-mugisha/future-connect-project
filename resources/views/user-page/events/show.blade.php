@extends('layouts.guest')

@section('title', $event->title)

@section('content')

<style>
    .postLists {
        display: flex;
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 1.5rem;
    }
</style>

<div class="container py-5">
    <!-- Event Header -->
    <div class="postLists p-4">
        <div class="row g-4 align-items-center mb-5">
            <div class="col-lg-6">
                <img src="{{ asset($event->image ?? 'default-event.jpg') }}"
                    class="img-fluid rounded-4 shadow"
                    alt="{{ $event->title }}">
            </div>
            <div class="col-lg-6">
                <h1 class="fw-bold mb-3">{{ $event->title }}</h1>
                <div class="d-flex align-items-center text-muted mb-3">
                    <i class="fa fa-map-marker-alt me-2 text-danger"></i>
                    <span>{{ $event->venue ?? 'Online / Hybrid' }}</span>
                </div>
                <div class="d-flex align-items-center text-muted mb-3">
                    <i class="fa fa-calendar me-2 text-primary"></i>
                    <span>
                        {{ \Carbon\Carbon::parse($event->event_date)->format('F d, Y') }} <br>
                        {{ \Carbon\Carbon::parse($event->start_time)->format('h:i A') }} - {{ \Carbon\Carbon::parse($event->end_time)->format('h:i A') }}
                    </span>
                </div>
                <p class="text-secondary lh-lg">{{ $event->description }}</p>
                <div class="mt-4">
                    <span class="badge bg-gradient bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                        {{ ucfirst($event->type) }} Event
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Divider -->
    <div class="text-center my-5">
        <h4 class="fw-bold mb-2">🎟️ Available Tickets</h4>
        <p class="text-muted">Select your preferred ticket type and join this event</p>
    </div>

    <!-- Ticket Cards -->
    <div class="row g-4">
        @forelse ($event->tickets as $ticket)
        <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 rounded-4 postLists">
                <div class="card-body text-center p-4">
                    <h5 class="fw-bold text-uppercase mb-3">{{ $ticket->type }}</h5>
                    <h2 class="fw-bold text-primary mb-2">{{ number_format($ticket->price) }} RWF</h2>
                    <p class="text-muted mb-3">Available: <strong>{{ $ticket->quantity - $ticket->sold }}</strong></p>
                    <button
                        class="btn btn-primary rounded-pill buy-ticket-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#ticketModal{{ $ticket->id }}">
                        <i class="fa fa-shopping-cart me-1"></i> Buy Ticket
                    </button>
                </div>
            </div>
        </div>
        @empty
        <div class="text-center text-muted">
            <p>No tickets available for this event yet.</p>
        </div>
        @endforelse
    </div>
</div>

<!-- Buy Ticket Modal -->


@foreach ($event->tickets as $ticket)
<div class="modal fade" id="ticketModal{{ $ticket->id }}" tabindex="-1" aria-labelledby="ticketModalLabel{{ $ticket->id }}" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content border-0 shadow-lg rounded-4">

            {{-- Modal Header --}}
            <div class="modal-header bg-gradient bg-primary text-white rounded-top-4">
                <h5 class="modal-title fw-bold" id="ticketModalLabel{{ $ticket->id }}">
                    <i class="bi bi-ticket-detailed me-2"></i> Buy {{ strtoupper($ticket->type) }} Ticket
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {{-- Modal Body --}}
            <div class="modal-body p-4">
                <div class="row">
                    {{-- Ticket Preview --}}
                    <div class="col-lg-5 mb-3 mb-lg-0">
                        <div class="card shadow-sm border-0 rounded-4 h-100">
                            <img src="{{ asset($event->image ?? 'default-event.jpg') }}"
                                class="card-img-top rounded-top-4"
                                alt="{{ $event->title }}">
                            <div class="card-body text-center">
                                <h5 class="card-title fw-bold">{{ $event->title }}</h5>
                                <p class="mb-1"><strong>Type:</strong> {{ ucfirst($ticket->type) }}</p>
                                <p class="mb-1"><strong>Price:</strong> {{ number_format($ticket->price, 2) }} RWF</p>
                                <p class="mb-1"><strong>Date:</strong>
                                    {{ \Carbon\Carbon::parse($event->event_date)->format('d M Y, h:i A') }}
                                </p>
                                <p class="mb-1"><strong>Venue:</strong> {{ $event->venue ?? 'Online' }}</p>

                                {{-- QR Placeholder --}}
                                <div class="mt-3">
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=TICKET{{ $ticket->id }}"
                                        class="img-fluid rounded" alt="QR Code">
                                    <p class="small text-muted mt-1">Scan at entry</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- Form Section --}}
                    <div class="col-lg-7">
                        <form action="{{ route('event.orders.checkout') }}" method="POST" class="ticket-form">
                            @csrf
                            <input type="hidden" name="ticket_id" value="{{ $ticket->id }}">

                            {{-- Ticket Info --}}
                            <div class="mb-3">
                                <p class="mb-1"><strong>Price per Ticket:</strong> {{ number_format($ticket->price, 2) }} RWF</p>
                                <p class="mb-1"><strong>Available:</strong> {{ $ticket->quantity - $ticket->sold }}</p>
                            </div>

                            {{-- Quantity --}}
                            <div class="mb-3">
                                <label class="form-label fw-semibold">Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    class="form-control ticket-quantity"
                                    min="1"
                                    max="{{ $ticket->quantity - $ticket->sold }}"
                                    value="1"
                                    required>
                            </div>

                            {{-- Attendees Section --}}
                            <div class="attendees-section mb-3"></div>

                            {{-- Buyer Details --}}
                            <h6 class="fw-bold mb-2 text-primary">Buyer Details</h6>
                            <div class="row g-2 mb-3">
                                <div class="col-md-4">
                                    <input type="text" name="customer_name" class="form-control" placeholder="Full Name" required>
                                </div>
                                <div class="col-md-4">
                                    <input type="email" name="customer_email" class="form-control" placeholder="Email" required>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" name="customer_phone" class="form-control" placeholder="Phone" required>
                                </div>
                            </div>

                            {{-- Total --}}
                            <div class="d-flex justify-content-between align-items-center mb-3 border-top pt-3">
                                <h5 class="fw-bold mb-0">Total:</h5>
                                <h5 class="text-success mb-0">
                                    <span class="total-price">{{ number_format($ticket->price, 2) }}</span> RWF
                                </h5>
                            </div>
                            <input type="hidden" name="total_amount" class="total-amount" value="{{ $ticket->price }}">

                            {{-- Checkout Button --}}
                            <button type="submit" class="btn btn-success w-100 py-2 fw-semibold rounded-pill">
                                <i class="bi bi-cart-fill me-1"></i> Proceed to Checkout
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
@endforeach


<script>
    document.querySelectorAll('.ticket-form').forEach(form => {
        const quantityInput = form.querySelector('.ticket-quantity');
        const attendeesSection = form.querySelector('.attendees-section');
        const totalPriceSpan = form.querySelector('.total-price');
        const totalAmountInput = form.querySelector('.total-amount');
        const ticketPrice = parseFloat(totalAmountInput.value);

        function updateAttendees() {
            const qty = parseInt(quantityInput.value) || 1;
            attendeesSection.innerHTML = '';
            for (let i = 1; i <= qty; i++) {
                attendeesSection.innerHTML += `<input type="text" name="attendees[]" class="form-control mb-1" placeholder="Attendee ${i} Name" required>`;
            }
            const total = ticketPrice * qty;
            totalPriceSpan.textContent = total.toFixed(2);
            totalAmountInput.value = total.toFixed(2);
        }

        quantityInput.addEventListener('input', updateAttendees);
        updateAttendees();
    });
</script>


@endsection