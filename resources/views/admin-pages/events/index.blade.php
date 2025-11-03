@extends('layouts.app')

@section('content')
<div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h3 class="fw-bold text-primary">Manage Events</h3>
        <a href="{{ route('admin.events.create') }}" class="btn btn-success rounded-pill">
            <i class="bi bi-plus-circle"></i> Add Event
        </a>
    </div>

    <div class="card shadow-sm border-0 rounded-4">
        <div class="table-responsive">
            <table class="table align-middle mb-0">
                <thead class="table-primary">
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Tickets</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($events as $event)
                    <tr>
                        <td>{{ $event->title }}</td>
                        <td>{{ \Carbon\Carbon::parse($event->date)->format('M d, Y') }}</td>
                        <td>{{ $event->location }}</td>
                        <td>{{ $event->tickets->count() }}</td>
                        <td>
                            <a href="{{ route('admin.events.show', $event->id) }}" class="btn btn-sm btn-primary rounded-pill">
                                view event
                            </a>
                            <a href="{{ route('admin.events.edit', $event->id) }}" class="btn btn-sm btn-warning rounded-pill">
                                edit event
                            </a>
                            <form action="{{ route('admin.events.destroy', $event->id) }}" method="POST" class="d-inline">
                                @csrf @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-danger rounded-pill">
                                    delete event
                                </button>
                            </form>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="5" class="text-center text-muted py-4">No events found.</td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <div class="p-3">
            {{ $events->links() }}
        </div>
    </div>
</div>
@endsection
