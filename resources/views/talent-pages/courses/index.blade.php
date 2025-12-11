@extends('layouts.talents')
@section('title', 'Courses')
@section('content')

<div class="container">
    <div class="az-content-body pd-lg-l-40 d-flex flex-column">
        <div class="az-content-breadcrumb">
            <span>Talents</span>
            <span>Courses</span>
            <span>Lists</span>
        </div>
        <h2 class="az-content-title">Courses</h2>
        <div class="d-flex flex-column mb-4">
            <a href="{{ route('talent.courses.create') }}" class="btn btn-primary rounded-pill mb-3 align-self-start">
                Create New Course
            </a>
        </div>
        <div class="az-content-label mg-b-5">Available course lists</div>
        <p class="mg-b-20"> Here is the lists of available courses in the platform</p>

        <div>
            <table id="example2" class="table">
                <thead>
                    <tr>
                        <th class="wd-20">Thumbnail</th>
                        <th class="wd-20p">Title</th>
                        <th class="wd-20p">Talent</th>
                        <th class="wd-25p">Category</th>
                        <th class="wd-25p">Price</th>
                        <th class="wd-20p">Level</th>
                        <th class="wd-15p">Status</th>
                        <th class="wd-20p">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($courses as $course)
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
        </div>
    </div><!-- az-content-body -->
</div><!-- container -->

@endsection