@extends('layouts.guest')
@section('title', $project->title)

@section('content')

<style>
    .info-box {
        transition: all 0.3s ease;
        border: 1px solid #e0e0e0;
    }

    .info-box:hover {
        background: linear-gradient(135deg, #e3f2fd, #f1f8ff);
        transform: translateY(-3px);
    }

    .list-group-item {
        transition: all 0.2s ease;
        border: none !important;
    }

    .list-group-item:hover {
        background-color: #f8f9fa;
        transform: scale(1.02);
    }

    .card-header.bg-gradient {
        background: linear-gradient(135deg, #60efff, #0061ff);
    }

    .postLists {
        display: flex;
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 1.5rem;
    }
</style>

<div class="container py-5">
    <div class="row g-4">
        <!-- 🧠 Project Details -->
        <div class="col-lg-8">
            <div class="card border-0 shadow-sm rounded-4 overflow-hidden postLists">

                <!-- Project Header -->
                <div class="p-4 bg-light border-bottom">
                    <div class="d-flex align-items-center justify-content-between">
                        <h2 class="fw-bold mb-0">{{ $project->title }}</h2>
                        @if($project->verified)
                            <span class="badge bg-success px-3 py-2 rounded-pill">
                                <i class="bi bi-patch-check-fill me-1"></i> Verified
                            </span>
                        @endif
                    </div>
                    <p class="small text-muted mt-2 mb-0">
                        <i class="bi bi-person-circle me-1"></i> {{ $project->user->name ?? 'Unknown' }}
                        &nbsp; • &nbsp;
                        <i class="bi bi-geo-alt me-1"></i> {{ $project->location ?? 'Remote' }}
                        &nbsp; • &nbsp;
                        <i class="bi bi-briefcase me-1"></i> {{ $project->category ?? 'General' }}
                    </p>
                </div>

                <!-- Project Body -->
                <div class="card-body bg-light p-4">
                    <p class="text-dark mb-4">{{ $project->description }}</p>

                    <div class="row g-3 mb-4">
                        <div class="col-md-4">
                            <div class="info-box rounded-4 bg-white p-3 text-center border">
                                <small class="text-muted d-block">💰 Budget</small>
                                <span class="fw-bold text-dark">{{ $project->budget }}</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info-box rounded-4 bg-white p-3 text-center border">
                                <small class="text-muted d-block">📊 Status</small>
                                <span class="fw-bold text-dark">{{ ucfirst($project->status) }}</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info-box rounded-4 bg-white p-3 text-center border">
                                <small class="text-muted d-block">🕒 Posted</small>
                                <span class="fw-bold text-dark">{{ $project->created_at->diffForHumans() }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Collaboration Button -->
                    <button class="btn btn-primary w-100 py-3 fw-semibold rounded-pill shadow-sm"
                        data-bs-toggle="modal" data-bs-target="#applyModal">
                        <i class="bi bi-envelope-paper me-2"></i> Apply for Collaboration
                    </button>
                </div>
            </div>
        </div>

        <!-- 📋 Sidebar -->
        <div class="col-lg-4">
            <div class="card border-0 shadow-sm rounded-4 overflow-hidden mb-4 postLists">
                <div class="card-header fw-bold py-3 border-bottom">
                    <i class="bi bi-stars me-2 text-primary"></i> Recent Projects
                </div>
                <div class="list-group list-group-flush">
                    @foreach($recent as $item)
                        <a href="{{ route('user.projects.show', $item->id) }}" 
                           class="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-3">
                            <div>
                                <h6 class="fw-semibold mb-1 text-dark">{{ $item->title }}</h6>
                                <small class="text-muted">
                                    <i class="bi bi-tag me-1"></i>{{ $item->category ?? 'General' }}
                                </small>
                            </div>
                            @if($item->verified)
                                <i class="bi bi-patch-check-fill text-success"></i>
                            @endif
                        </a>
                    @endforeach
                </div>
            </div>

            <!-- Optional CTA -->
            <div class="card border-0 shadow-sm rounded-4 postLists">
                <div class="card-body text-center py-4">
                    <h6 class="fw-bold mb-2 text-dark">Want to post your own project?</h6>
                    <p class="text-muted small mb-3">Share your idea and find talented collaborators.</p>
                    <a href="#" class="btn btn-outline-primary rounded-pill px-4">
                        <i class="bi bi-plus-circle me-1"></i> Post a Project
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- 🌟 Modern Application Modal -->
<div class="modal fade" id="applyModal" tabindex="-1" aria-labelledby="applyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">

            <!-- Header -->
            <div class="modal-header bg-gradient text-white p-4" style="background: linear-gradient(135deg, #0061ff, #60efff);">
                <div>
                    <h5 class="modal-title fw-bold mb-1"><i class="bi bi-envelope-paper me-2"></i> Apply for Collaboration</h5>
                    <small class="text-dark">Connect with this project by sharing your skills and experience</small>
                </div>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            <!-- Form -->
            <form action="{{ route('user.projects.apply', $project->id) }}" method="POST" enctype="multipart/form-data" class="p-3 p-md-4 bg-light">
                @csrf

                <div class="modal-body">
                    <!-- Message -->
                    <div class="mb-4">
                        <label class="form-label fw-semibold text-dark">
                            <i class="bi bi-chat-dots me-1 text-primary"></i> Message / Collaboration Proposal
                        </label>
                        <textarea
                            name="message"
                            class="form-control border-0 shadow-sm rounded-4 p-3 focus-ring"
                            rows="4"
                            placeholder="Tell us about your expertise and how you can contribute..."
                            required>{{ old('message') }}</textarea>
                    </div>

                    <!-- Portfolio URL -->
                    <div class="mb-4">
                        <label class="form-label fw-semibold text-dark">
                            <i class="bi bi-link-45deg me-1 text-primary"></i> Portfolio URL (optional)
                        </label>
                        <input
                            type="url"
                            name="portfolio_url"
                            class="form-control border-0 shadow-sm rounded-4 p-3 focus-ring"
                            placeholder="https://yourportfolio.com">
                    </div>

                    <!-- File Upload -->
                    <div class="mb-4">
                        <label class="form-label fw-semibold text-dark">
                            <i class="bi bi-paperclip me-1 text-primary"></i> Attach File (optional)
                        </label>
                        <div class="file-upload-box p-4 rounded-4 border border-dashed text-center shadow-sm bg-white">
                            <input
                                type="file"
                                name="attachment"
                                class="form-control form-control-sm border-0"
                                accept=".pdf,.doc,.docx,.zip" />
                            <small class="text-muted d-block mt-2">Accepted: PDF, DOC, DOCX, ZIP — Max 2MB</small>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="modal-footer border-0 pt-0 d-flex justify-content-between px-4 pb-4">
                    <button type="button" class="btn btn-light border rounded-pill px-4 shadow-sm" data-bs-dismiss="modal">
                        <i class="bi bi-x-circle me-1"></i> Cancel
                    </button>
                    <button type="submit" class="btn btn-primary rounded-pill px-5 shadow-sm">
                        <i class="bi bi-send-check me-1"></i> Submit Application
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection