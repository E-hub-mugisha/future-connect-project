@extends('layouts.talents')
@section('title', 'Job Details: ' . $job->title)

@section('content')

<div class="container py-4">
    <div class="az-content-body az-content-body-profile">

        <!-- Tabs Navigation -->
        <ul class="nav nav-tabs az-nav-line mb-4 gap-3" id="projectTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="overview-tab" data-bs-toggle="tab" href="#overview" role="tab">
                    <i class="bi bi-card-text me-1"></i> Job Details
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" id="applications-tab" data-bs-toggle="tab" href="#applications" role="tab">
                    <i class="bi bi-people me-1"></i> Applications
                    <span class="badge bg-primary">{{ $job->applications->count() }}</span>
                </a>
            </li>
        </ul>

        <div class="tab-content" id="projectTabContent">

            <div class="tab-pane fade show active" id="overview" role="tabpanel">
                <div class="card border-0 shadow-lg rounded-4">
                    <div class="card-body p-4">
                        <h3 class="fw-bold mb-3">{{ $job->title }}</h3>
                        <h5 class="mb-1">Company: {{ $job->company->name ?? 'N/A' }}</h5>
                        <h6 class="mb-3">Category: {{ $job->category->name ?? 'N/A' }}</h6>
                        <p class="text-muted mb-1"><i class="bi bi-geo-alt"></i> {{ $job->location ?? 'Not specified' }}</p>
                        <p class="text-muted mb-3"><i class="bi bi-briefcase"></i> {{ $job->type ?? 'N/A' }} • {{ $job->experience_level ?? 'N/A' }}</p>
                        <p><strong>Salary:</strong> {{ $job->salary_range ?? 'N/A' }}</p>

                        <hr>

                        <h5 class="fw-semibold mt-4 mb-3">Job Description</h5>
                        <p>{{ $job->description }}</p>

                        @if($job->skills)
                        <h6 class="fw-semibold mt-4">Skills Required:</h6>
                        @foreach(explode(',', $job->skills) as $skill)
                        <span class="badge bg-primary-subtle text-primary me-1">{{ trim($skill) }}</span>
                        @endforeach
                        @endif

                        <div class="mt-5">
                            <a href="{{ route('talent.jobs.applications', $job->id) }}" class="btn btn-outline-success px-4 py-2">
                                <i class="bi bi-people"></i> View Applications
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="applications" role="tabpanel">

                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-header d-flex justify-content-between">
                        <h5 class="mb-0 fw-semibold"><i class="bi bi-people me-2"></i> Project Applications</h5>
                        <span class="badge bg-light text-dark">{{ $job->applications->count() }}</span>
                    </div>

                    <div class="card-body">
                        
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
                                            <a href="{{ asset('storage/' . $application->resume) }}" target="_blank" class="btn btn-sm btn-outline-secondary">
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
        </div>
    </div>
</div>
@endsection