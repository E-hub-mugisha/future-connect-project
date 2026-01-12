@extends('layouts.talents')
@section('title', 'Manage Jobs')

@section('content')

<!-- Page Content -->
<div class="container">
    <div class="az-content-body pd-lg-l-40 d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="fw-bold">Job Listings</h2>

            <!-- Action Buttons -->
            <div class="d-flex gap-2">
                <a href="{{ route('talent.jobs.create') }}" class="btn btn-primary btn-md">
                    Add Job
                </a>
            </div>
        </div>


        <div class="card card-bordered card-preview p-4 shadow-sm">
            <div class="card-inner">
                <table class="table" id="example2">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Category</th>
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
                            <td>{{ $job->category->name ?? '—' }}</td>
                            <td>{{ $job->location ?? '—' }}</td>
                            <td>{{ $job->experience_level ?? '—' }}</td>
                            <td>{{ $job->company->name ?? '—' }}</td>
                            <td>
                                <div class="dropdown">
                                    <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $job->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                        Actions
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $job->id }}">
                                        <li>
                                            <a href="{{ route('talent.jobs.show', $job->id) }}" class="dropdown-item">
                                                <i class="bi bi-eye"></i>View
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{{ route('talent.jobs.edit', $job->id) }}" class="dropdown-item">
                                                <i class="bi bi-pencil"></i> Edit
                                            </a>
                                        </li>
                                        <li>
                                            <form action="{{ route('talent.jobs.destroy', $job->id) }}" method="POST" class="d-inline">
                                                @csrf @method('DELETE')
                                                <button type="submit" class="dropdown-item" onclick="return confirm('Delete this job?')">
                                                    <i class="bi bi-trash"></i> Delete
                                                </button>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection