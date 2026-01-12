@extends('layouts.talents')
@section('title', 'Applications for: ' . $job->title)

@section('content')
<div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold">Applications for: {{ $job->title }}</h2>
        <a href="{{ route('talent.jobs.show', $job->id) }}" class="btn btn-outline-primary rounded-pill">
            <i class="bi bi-arrow-left me-1"></i> Back to Job
        </a>
    </div>

    <div class="card border-0 shadow-lg rounded-4">
        <div class="card-body p-0">
            <div class="table-responsive">
                <table class="table align-middle mb-0">
                    <thead class="table-light">
                        <tr>
                            <th>#</th>
                            <th>Applicant</th>
                            <th>Email</th>
                            <th>CV</th>
                            <th>Status</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($job->applications as $application)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $application->user->name }}</td>
                            <td>{{ $application->user->email }}</td>
                            <td>
                                @if($application->resume)
                                <a href="{{ asset('storage/' . $application->resume) }}" target="_blank" class="btn btn-sm btn-outline-secondary rounded-pill">
                                    <i class="bi bi-download"></i> Download
                                </a>
                                @else
                                    <span class="text-muted">N/A</span>
                                @endif
                            </td>
                            <td>
                                @php
                                    $statusColor = [
                                        'pending' => 'warning',
                                        'accepted' => 'success',
                                        'rejected' => 'danger'
                                    ];
                                @endphp
                                <span class="badge bg-{{ $statusColor[$application->status] ?? 'secondary' }}">
                                    {{ ucfirst($application->status) }}
                                </span>
                            </td>
                            <td class="text-center">
                                <form action="{{ route('talent.jobs.updateApplicationStatus', $application->id) }}" method="POST" class="d-inline">
                                    @csrf
                                    @method('PATCH')
                                    <select name="status" class="form-select form-select-sm d-inline w-auto" onchange="this.form.submit()">
                                        <option value="pending" {{ $application->status == 'pending' ? 'selected' : '' }}>Pending</option>
                                        <option value="accepted" {{ $application->status == 'accepted' ? 'selected' : '' }}>Accepted</option>
                                        <option value="rejected" {{ $application->status == 'rejected' ? 'selected' : '' }}>Rejected</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="7" class="text-center text-muted py-4">
                                No applications submitted for this job yet.
                            </td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
