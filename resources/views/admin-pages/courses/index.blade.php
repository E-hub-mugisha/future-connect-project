@extends('layouts.app')
@section('title', 'Courses')

@section('content')

<div class="container-fluid py-4">
    <div class="nk-content-inner">
        <div class="nk-content-body">

            {{-- Header --}}
            <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
                <div>
                    <h2 class="fw-bold mb-1">Courses</h2>
                    <p class="text-muted mb-0">Manage all available courses, their categories, videos, and statuses.</p>
                </div>
                <a href="{{ route('admin.courses.create') }}" class="btn btn-primary rounded-pill">
                    <em class="icon ni ni-plus"></em>
                    <span>Add Course</span>
                </a>
            </div>

            {{-- Courses Table --}}
            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init table nowrap">
                        <thead>
                            <tr>
                                <th>Thumbnail</th>
                                <th>Title</th>
                                <th>Talent</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Level</th>
                                <th>Status</th>
                                <th>Video</th>
                                <th class="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($courses as $course)
                            <tr>
                                {{-- Thumbnail --}}
                                <td>
                                    @if($course->thumbnail)
                                    <img src="{{ asset('images/thumbnails/'.$course->thumbnail) }}"
                                        class="rounded-3" width="70" height="50"
                                        style="object-fit: cover;">
                                    @else
                                    <span class="text-muted">No Image</span>
                                    @endif
                                </td>

                                {{-- Title --}}
                                <td class="fw-semibold">
                                    <span class="fw-bold">{{ $course->title }}</span><br>
                                    <small class="text-muted">
                                        {{ \Illuminate\Support\Str::limit($course->description, 40) }}
                                    </small>
                                </td>

                                {{-- Talent --}}
                                <td>
                                    <div class="fw-bold text-dark">
                                        {{ $course->talent->name }}
                                    </div>
                                    <div class="small text-muted mt-1">
                                        {{ $course->talent->email }}
                                    </div>

                                {{-- Category --}}
                                <td>{{ $course->category->name ?? '-' }}</td>

                                {{-- Price --}}
                                <td>
                                    @if($course->is_free)
                                    <span class="badge bg-success text-white">Free</span>
                                    @else
                                    <span>${{ number_format($course->price, 2) }}</span>
                                    @endif
                                </td>

                                {{-- Level --}}
                                <td><span class="badge bg-secondary text-white">{{ $course->level }}</span></td>

                                {{-- Status --}}
                                <td>
                                    @if($course->status === 'published')
                                    <span class="badge bg-success text-white">Published</span>
                                    @else
                                    <span class="badge bg-warning text-white">Draft</span>
                                    @endif
                                </td>

                                {{-- Video Preview --}}
                                <td>
                                    @if($course->video)
                                    <iframe width="80" height="50" controls muted class="rounded">
                                        <source src="{{ $course->video }}" type="video/mp4">
                                    </iframe>
                                    @else
                                    <span class="text-muted">No Video</span>
                                    @endif
                                </td>

                                {{-- Actions --}}
                                <td class="text-end">
                                    <div class="dropdown">
                                        <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $course->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $course->id }}">
                                            <li>
                                                <a href="{{ route('admin.courses.show', $course->slug) }}"
                                                    class="dropdown-item">
                                                    View
                                                </a>
                                            </li>
                                            <li>
                                                <a href="{{ route('admin.courses.edit', $course->id) }}"
                                                    class="dropdown-item">
                                                    Edit
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $course->id }}">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div> {{-- /table-responsive --}}

            </div>
        </div>
    </div>
</div>

@foreach($courses as $course)
<!-- Delete Modal -->
<div class="modal fade" id="deleteModal{{ $course->id }}" tabindex="-1"
    aria-labelledby="deleteModalLabel{{ $course->id }}" aria-hidden="true">
    <div class="modal-dialog">
        <form action="{{ route('admin.courses.destroy', $course->id) }}"
            method="POST" class="modal-content">
            @csrf
            @method('DELETE')

            <div class="modal-header">
                <h5 class="modal-title" id="deleteModalLabel{{ $course->id }}">
                    Confirm Delete
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to delete this course? This action cannot be undone.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-danger">Yes, Delete</button>
            </div>
        </form>
    </div>
</div>
@endforeach
@endsection