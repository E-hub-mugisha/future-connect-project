@extends('layouts.user')
@section('title', 'Courses')
@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>courses</h2>

            </div>
            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Talent</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($courses as $course)
                            <tr>
                                <td>{{ $course->title }}</td>
                                <td>{{ $course->talent?->name ?? 'N/A' }}</td>
                                <td>{{ $course->category?->name ?? 'N/A' }}</td>
                                <td>{{ ucfirst($course->status) }}</td>
                                <td>
                                    <a class="btn btn-sm btn-primary" href="{{ route('user-panel.courses.show', $course->slug) }}">View Course</a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection