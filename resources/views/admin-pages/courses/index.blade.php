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
            <div class="card border-0 shadow-sm rounded-4">
                <div class="card-body p-4">
                    <div class="table-responsive">
                        <table class="datatable-init table table-hover align-middle mb-0">
                            <thead class="table-light text-nowrap">
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
                                            <img src="{{ asset('storage/'.$course->thumbnail) }}" 
                                                 class="rounded-3 shadow-sm" width="70" height="50" 
                                                 style="object-fit: cover;">
                                        @else
                                            <span class="text-muted">No Image</span>
                                        @endif
                                    </td>

                                    {{-- Title --}}
                                    <td class="fw-semibold">{{ $course->title }}</td>

                                    {{-- Talent --}}
                                    <td>{{ $course->talent->name ?? '-' }}</td>

                                    {{-- Category --}}
                                    <td>{{ $course->category->name ?? '-' }}</td>

                                    {{-- Price --}}
                                    <td>
                                        @if($course->is_free)
                                            <span class="badge bg-success-subtle text-success">Free</span>
                                        @else
                                            <span>${{ number_format($course->price, 2) }}</span>
                                        @endif
                                    </td>

                                    {{-- Level --}}
                                    <td><span class="badge bg-secondary-subtle text-secondary">{{ $course->level }}</span></td>

                                    {{-- Status --}}
                                    <td>
                                        @if($course->status === 'published')
                                            <span class="badge bg-success-subtle text-success">Published</span>
                                        @else
                                            <span class="badge bg-warning-subtle text-warning">Draft</span>
                                        @endif
                                    </td>

                                    {{-- Video Preview --}}
                                    <td>
                                        @if($course->video)
                                            <video width="80" height="50" controls muted class="rounded">
                                                <source src="{{ asset('storage/'.$course->video) }}" type="video/mp4">
                                            </video>
                                        @else
                                            <span class="text-muted">No Video</span>
                                        @endif
                                    </td>

                                    {{-- Actions --}}
                                    <td class="text-end">
                                        <a href="{{ route('admin.courses.show', $course->slug) }}" 
                                           class="btn btn-sm btn-outline-info rounded-pill px-3 me-2">
                                            View
                                        </a>
                                        <a href="{{ route('admin.courses.edit', $course->id) }}" 
                                           class="btn btn-sm btn-outline-primary rounded-pill px-3">
                                            Edit
                                        </a>
                                        <form action="{{ route('admin.courses.destroy', $course->id) }}" 
                                              method="POST" class="d-inline">
                                            @csrf @method('DELETE')
                                            <button type="submit" 
                                                onclick="return confirm('Are you sure you want to delete this course?')" 
                                                class="btn btn-sm btn-outline-danger rounded-pill px-3">
                                                Delete
                                            </button>
                                        </form>
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
</div>
@endsection
