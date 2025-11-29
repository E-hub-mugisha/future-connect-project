@extends('layouts.app')
@section('title', 'Manage Event')
@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-bold text-primary">Manage Events</h3>
                <a href="{{ route('admin.events.create') }}" class="btn btn-success rounded-pill">
                    <i class="bi bi-plus-circle"></i> Add Event
                </a>
            </div>

            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Organizer</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Tickets</th>
                                <th>Capacity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($events as $event)
                            <tr>
                                <td>
                                    @if($event->image)
                                    <img src="{{ asset('storage/' . $event->image) }}"
                                        alt="Event Banner"
                                        class="img-fluid w-100 rounded"
                                        style="height: 80px; object-fit: cover;">
                                    @endif
                                </td>

                                <td>
                                    <span class="fw-bold">{{ $event->title }}</span><br>
                                    <small class="text-muted">
                                        {{ \Illuminate\Support\Str::limit($event->description, 40) }}
                                    </small>
                                </td>
                                <td>
                                    <div class="fw-bold text-dark">
                                        {{ $event->organizer->name }}
                                    </div>
                                    <div class="small text-muted mt-1">
                                        {{ $event->organizer->email }}
                                    </div>
                                </td>
                                <td class="align-middle">
                                    <div class="fw-bold text-dark">
                                        {{ \Carbon\Carbon::parse($event->date)->format('M d, Y') }}
                                    </div>
                                    <div class="small text-muted mt-1">
                                        <i class="bi bi-clock"></i>
                                        {{ $event->start_time }} — {{ $event->end_time }}
                                    </div>
                                </td>

                                <td>{{ $event->venue }}<br><span class="badge badge-success">{{ $event->type }}</span></td>
                                <td>{{ $event->tickets->count() }}</td>
                                <td>{{ $event->capacity }}</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $event->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $event->id }}">
                                            <li>
                                                <a href="{{ route('admin.events.show', $event->id) }}" class="dropdown-item">
                                                    view event
                                                </a>
                                            </li>
                                            <li>
                                                <a href="{{ route('admin.events.edit', $event->id) }}" class="dropdown-item">
                                                    edit event
                                                </a>
                                            </li>
                                            <li>
                                                <form action="{{ route('admin.events.destroy', $event->id) }}" method="POST" class="d-inline">
                                                    @csrf @method('DELETE')
                                                    <button type="submit" class="dropdown-item">
                                                        delete event
                                                    </button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
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
            </div>
        </div>
    </div>
</div>
@endsection