@extends('layouts.app')

@section('title', 'Edit Event')

@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">

            {{-- Header --}}
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="fw-bold mb-0">Edit Event</h2>
                <a href="{{ route('admin.events.index') }}" class="btn btn-outline-secondary rounded-pill">
                    <i class="bi bi-arrow-left"></i> Back
                </a>
            </div>

            {{-- Edit Form --}}
            <div class="card border-0 shadow-lg rounded-4">
                <div class="card-body p-4">
                    <form action="{{ route('admin.events.update', $event->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <input type="hidden" name="organizer_id" value="{{ auth()->id() }}">

                        <div class="row g-4">
                            {{-- Title --}}
                            <div class="col-md-6">
                                <label for="title" class="form-label fw-semibold">Event Title</label>
                                <input type="text" name="title" id="title" class="form-control rounded-3 @error('title') is-invalid @enderror"
                                    value="{{ old('title', $event->title) }}" required>
                                @error('title') <div class="invalid-feedback">{{ $message }}</div> @enderror
                            </div>

                            {{-- Type --}}
                            <div class="col-md-6">
                                <label for="type" class="form-label fw-semibold">Event Type</label>
                                <select name="type" id="type" class="form-select rounded-3 @error('type') is-invalid @enderror" required>
                                    <option value="">Select Type</option>
                                    @foreach (['conference', 'concert', 'workshop', 'seminar', 'festival'] as $type)
                                    <option value="{{ $type }}" {{ old('type', $event->type) == $type ? 'selected' : '' }}>
                                        {{ ucfirst($type) }}
                                    </option>
                                    @endforeach
                                </select>
                                @error('type') <div class="invalid-feedback">{{ $message }}</div> @enderror
                            </div>

                            {{-- Description --}}
                            <div class="col-12">
                                <label for="description" class="form-label fw-semibold">Description</label>
                                <textarea name="description" id="description" rows="4"
                                    class="form-control rounded-3 @error('description') is-invalid @enderror">{{ old('description', $event->description) }}</textarea>
                                @error('description') <div class="invalid-feedback">{{ $message }}</div> @enderror
                            </div>

                            {{-- Date & Time --}}
                            <div class="col-md-4">
                                <label for="event_date" class="form-label fw-semibold">Event Date</label>
                                <input type="date" name="event_date" id="event_date" class="form-control rounded-3 @error('event_date') is-invalid @enderror"
                                    value="{{ old('event_date', $event->event_date ? $event->event_date->format('Y-m-d') : '') }}" required>
                                @error('event_date') <div class="invalid-feedback">{{ $message }}</div> @enderror
                            </div>

                            <div class="col-md-4">
                                <label for="start_time" class="form-label fw-semibold">Start Time</label>
                                <input type="time" name="start_time" id="start_time" class="form-control rounded-3 @error('start_time') is-invalid @enderror"
                                    value="{{ old('start_time', $event->start_time) }}" required>
                                @error('start_time') <div class="invalid-feedback">{{ $message }}</div> @enderror
                            </div>

                            <div class="col-md-4">
                                <label for="end_time" class="form-label fw-semibold">End Time</label>
                                <input type="time" name="end_time" id="end_time" class="form-control rounded-3 @error('end_time') is-invalid @enderror"
                                    value="{{ old('end_time', $event->end_time) }}" required>
                                @error('end_time') <div class="invalid-feedback">{{ $message }}</div> @enderror
                            </div>

                            {{-- Venue --}}
                            <div class="col-md-6">
                                <label for="venue" class="form-label fw-semibold">Venue</label>
                                <input type="text" name="venue" id="venue" class="form-control rounded-3 @error('venue') is-invalid @enderror"
                                    value="{{ old('venue', $event->venue) }}" required>
                                @error('venue') <div class="invalid-feedback">{{ $message }}</div> @enderror
                            </div>

                            {{-- Capacity --}}
                            <div class="col-md-6">
                                <label for="capacity" class="form-label fw-semibold">Capacity</label>
                                <input type="number" name="capacity" id="capacity" class="form-control rounded-3 @error('capacity') is-invalid @enderror"
                                    value="{{ old('capacity', $event->capacity) }}" required>
                                @error('capacity') <div class="invalid-feedback">{{ $message }}</div> @enderror
                            </div>

                            {{-- Image --}}
                            <div class="col-12">
                                <label for="image" class="form-label fw-semibold">Event Banner</label>
                                <input type="file" name="image" id="image" class="form-control rounded-3 @error('image') is-invalid @enderror" accept="image/*" onchange="previewImage(event)">
                                @error('image') <div class="invalid-feedback">{{ $message }}</div> @enderror

                                <div class="mt-3 text-center">
                                    @if ($event->image)
                                    <img id="imagePreview" src="{{ asset('storage/' . $event->image) }}" alt="Event Banner" class="img-fluid rounded-4 shadow-sm" style="max-height: 250px;">
                                    @else
                                    <img id="imagePreview" src="#" alt="Preview" class="img-fluid rounded-4 shadow-sm d-none" style="max-height: 250px;">
                                    @endif
                                </div>
                            </div>
                        </div>

                        <div class="text-end mt-4">
                            <button type="submit" class="btn btn-primary btn-lg rounded-pill">
                                <i class="bi bi-save me-2"></i> Update Event
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
{{-- Preview Script --}}
<script>
    function previewImage(event) {
        const image = document.getElementById('imagePreview');
        image.src = URL.createObjectURL(event.target.files[0]);
        image.classList.remove('d-none');
    }
</script>
@endsection