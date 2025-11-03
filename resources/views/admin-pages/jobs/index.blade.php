@extends('layouts.app')
@section('title', 'Manage Jobs')

@section('content')
<div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold">Job Listings</h2>
        <a href="{{ route('admin.jobs.create') }}" class="btn btn-primary btn-sm rounded-pill">
            <i class="bi bi-plus-circle"></i> Add Job
        </a>
    </div>

    <div class="card shadow-sm rounded-4">
        <div class="card-body p-0">
            <table class="table align-middle mb-0">
                <thead class="table-light">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Experience</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($jobs as $job)
                    <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td>{{ $job->title }}</td>
                        <td>{{ $job->type ?? '—' }}</td>
                        <td>{{ $job->location ?? '—' }}</td>
                        <td>{{ $job->experience_level ?? '—' }}</td>
                        <td>{{ $job->company->name ?? '—' }}</td>
                        <td>
                            <a href="{{ route('admin.jobs.show', $job->id) }}" class="btn btn-outline-info btn-sm rounded-pill">
                                <i class="bi bi-eye"></i>View
                            </a>
                            <a href="{{ route('admin.jobs.edit', $job->id) }}" class="btn btn-outline-warning btn-sm rounded-pill">
                                <i class="bi bi-pencil"></i> Edit
                            </a>
                            <form action="{{ route('admin.jobs.destroy', $job->id) }}" method="POST" class="d-inline">
                                @csrf @method('DELETE')
                                <button type="submit" class="btn btn-outline-danger btn-sm rounded-pill" onclick="return confirm('Delete this job?')">
                                    <i class="bi bi-trash"></i> Delete
                                </button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

    <div class="mt-4">
        {{ $jobs->links() }}
    </div>
</div>
@endsection
