@extends('layouts.app')

@section('title', 'Event Details')

@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            {{-- Event Overview --}}
            <div class="card border-0 shadow-lg rounded-4 mb-5 overflow-hidden">
                @if($event->image)
                <img src="{{ asset('storage/' . $event->image) }}" alt="Event Banner" class="img-fluid w-100" style="height: 280px; object-fit: cover;">
                @endif

                <div class="card-body p-4">
                    <div class="d-flex flex-wrap justify-content-between align-items-start mb-3">
                        <div>
                            <h2 class="fw-bold text-primary mb-2">{{ $event->title }}</h2>
                            <div class="text-muted mb-2">
                                <i class="bi bi-person-circle me-1"></i> Organized by: <strong>{{ $event->organizer->name ?? 'Unknown' }}</strong> <br>
                                <i class="bi bi-geo-alt me-1"></i> {{ $event->venue ?? 'Not specified' }}
                                <span class="mx-2">|</span>
                                <i class="bi bi-calendar-event me-1"></i> {{ \Carbon\Carbon::parse($event->event_date)->format('M d, Y') }}
                            </div>
                            <span class="badge bg-success-subtle text-success border border-success px-3 py-2 rounded-pill">{{ $event->type ?? 'General' }}</span>
                        </div>
                    </div>

                    <p class="text-dark lh-lg">{{ $event->description ?? 'No description available for this event.' }}</p>

                    <div class="d-flex flex-wrap gap-3 mt-4 mb-4">
                        <div class="bg-light rounded-4 p-3 flex-fill text-center shadow-sm">
                            <h5 class="fw-bold mb-0 text-primary">{{ $event->capacity }}</h5>
                            <small class="text-muted">Capacity</small>
                        </div>
                        <div class="bg-light rounded-4 p-3 flex-fill text-center shadow-sm">
                            <h5 class="fw-bold mb-0 text-success">{{ $event->tickets->sum(fn($t) => $t->orders()->sum('quantity')) }}</h5>
                            <small class="text-muted">Tickets Sold</small>
                        </div>
                        <div class="bg-light rounded-4 p-3 flex-fill text-center shadow-sm">
                            <h5 class="fw-bold mb-0 text-warning">{{ number_format($event->tickets->sum(fn($t) => $t->orders()->sum('total_amount')), 2) }} RWF</h5>
                            <small class="text-muted">Revenue</small>
                        </div>
                        <div class="bg-light rounded-4 p-3 flex-fill text-center shadow-sm">
                            <h5 class="fw-bold mb-0 text-danger">{{ $event->tickets->sum('quantity') - $event->tickets->sum(fn($t) => $t->orders()->sum('quantity')) }}</h5>
                            <small class="text-muted">Remaining</small>
                        </div>
                    </div>
                </div>
            </div>
            {{-- Ticket Table --}}
            <div class="card border-0 shadow-lg rounded-4 mb-5">
                <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center rounded-top-4">
                    <h5 class="mb-0"><i class="bi bi-ticket-detailed me-2"></i> Ticket Types</h5>
                    <button class="btn btn-light btn-sm rounded-pill" data-bs-toggle="modal" data-bs-target="#addTicketModal">
                        <i class="bi bi-plus-circle me-1"></i> New Ticket
                    </button>
                </div>
                <div class="card-body p-4">
                    <div class="table-responsive">
                        <table class="table align-middle table-hover mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Sold</th>
                                    <th>Revenue</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($event->tickets as $ticket)
                                <tr>
                                    <td class="fw-semibold">{{ $ticket->type }}</td>
                                    <td>{{ number_format($ticket->price, 2) }} RWF</td>
                                    <td>{{ $ticket->quantity }}</td>
                                    <td>{{ $ticket->orders()->sum('quantity') }}</td>
                                    <td>{{ number_format($ticket->orders()->sum('total_amount'), 2) }} RWF</td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-warning rounded-pill" data-bs-toggle="modal" data-bs-target="#editTicketModal{{ $ticket->id }}">
                                            Edit Ticket
                                        </button>
                                        <!-- View Orders & Payments Button -->
                                        <a href="{{ route('admin.tickets.orders', $ticket->id) }}" class="btn btn-sm btn-outline-success rounded-pill">
                                            <i class="bi bi-receipt me-1"></i> Orders & Payments
                                        </a>
                                        <form action="{{ route('admin.tickets.destroy', $ticket->id) }}" method="POST" class="d-inline">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-sm btn-danger rounded-pill">
                                                Delete
                                            </button>
                                        </form>
                                    </td>
                                </tr>

                                {{-- Edit Ticket Modal --}}
                                <div class="modal fade" id="editTicketModal{{ $ticket->id }}" tabindex="-1" aria-labelledby="editTicketModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content rounded-4 shadow-lg border-0">
                                            <div class="modal-header bg-warning text-dark rounded-top-4">
                                                <h5 class="modal-title fw-bold"><i class="bi bi-pencil-square me-2"></i>Edit Ticket</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <form action="{{ route('admin.tickets.update', $ticket->id) }}" method="POST">
                                                @csrf
                                                @method('PUT')
                                                <div class="modal-body">
                                                    <div class="mb-3">
                                                        <label class="form-label fw-semibold">Ticket Type</label>
                                                        <input type="text" name="type" class="form-control rounded-3" value="{{ $ticket->type }}" required>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label fw-semibold">Price</label>
                                                        <input type="number" name="price" class="form-control rounded-3" value="{{ $ticket->price }}" required>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label fw-semibold">Quantity</label>
                                                        <input type="number" name="quantity" class="form-control rounded-3" value="{{ $ticket->quantity }}" required>
                                                    </div>
                                                </div>
                                                <div class="modal-footer justify-content-between">
                                                    <button type="button" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>
                                                    <button type="submit" class="btn btn-warning rounded-pill fw-semibold">Save Changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                @empty
                                <tr>
                                    <td colspan="6" class="text-center py-4 text-muted">No ticket types added yet.</td>
                                </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
{{-- Add Ticket Modal --}}
<div class="modal fade" id="addTicketModal" tabindex="-1" aria-labelledby="addTicketModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4 shadow-lg border-0">
            <div class="modal-header bg-primary text-white rounded-top-4">
                <h5 class="modal-title fw-bold"><i class="bi bi-plus-circle me-2"></i> Add Ticket Type</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <form action="{{ route('admin.tickets.store') }}" method="POST">
                @csrf
                <div class="modal-body">
                    <input type="hidden" name="event_id" value="{{ $event->id }}">
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Ticket Type</label>
                        <input type="text" name="type" class="form-control rounded-3" placeholder="Regular, VIP, etc." required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Price (RWF)</label>
                        <input type="number" name="price" class="form-control rounded-3" placeholder="Enter ticket price" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Quantity</label>
                        <input type="number" name="quantity" class="form-control rounded-3" placeholder="Enter available tickets" required>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary rounded-pill fw-semibold">Add Ticket</button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection