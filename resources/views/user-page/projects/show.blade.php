@extends('layouts.guest')
@section('title', $project->title)

@section('content')

<style>
    :root{
        --fc-bg:#0e1618;
        --fc-bg-alt:#141d20;
        --fc-card:#172124;
        --fc-border:#243033;
        --fc-accent:#48d597;
        --fc-accent-dark:#33a876;
        --fc-white:#ffffff;
        --fc-muted:#9fb0ae;
    }

    .fc-page{ background:var(--fc-bg); color:var(--fc-white); padding:60px 0; }

    .fc-card{
        background:var(--fc-card);
        border:1px solid var(--fc-border);
        border-radius:20px;
        overflow:hidden;
    }

    /* Header */
    .fc-proj-header{
        padding:28px 30px;
        border-bottom:1px solid var(--fc-border);
        background:
            radial-gradient(circle at 90% 0%, rgba(72,213,151,.10), transparent 55%),
            var(--fc-bg-alt);
    }
    .fc-proj-header h2{ color:var(--fc-white); font-weight:700; margin:0; }
    .fc-proj-meta{ color:var(--fc-muted); font-size:.88rem; margin-top:10px; }
    .fc-proj-meta i{ color:var(--fc-accent); }

    .fc-badge-verified{
        background:rgba(72,213,151,.15);
        color:var(--fc-accent);
        font-weight:700;
        font-size:.78rem;
        padding:6px 14px;
        border-radius:30px;
    }

    /* Body */
    .fc-proj-body{ padding:30px; }
    .fc-proj-desc{ color:var(--fc-muted); line-height:1.7; margin-bottom:28px; }

    .fc-info-box{
        background:var(--fc-bg-alt);
        border:1px solid var(--fc-border);
        border-radius:14px;
        padding:18px;
        text-align:center;
        transition:.2s;
        height:100%;
    }
    .fc-info-box:hover{
        border-color:var(--fc-accent);
        transform:translateY(-3px);
    }
    .fc-info-box small{ color:var(--fc-muted); display:block; margin-bottom:6px; font-size:.78rem; text-transform:uppercase; letter-spacing:.04em; }
    .fc-info-box span{ color:var(--fc-white); font-weight:700; font-size:1.05rem; }

    .btn-fc-primary{
        background:var(--fc-accent);
        border:none;
        color:#06231a;
        font-weight:700;
        border-radius:30px;
        padding:.7rem 1.6rem;
        transition:.2s ease;
    }
    .btn-fc-primary:hover{ background:var(--fc-accent-dark); color:#06231a; transform:translateY(-1px); }

    .btn-fc-outline-primary{
        background:transparent;
        border:1px solid var(--fc-accent);
        color:var(--fc-accent);
        font-weight:600;
        border-radius:30px;
        padding:.6rem 1.4rem;
        transition:.2s;
    }
    .btn-fc-outline-primary:hover{ background:var(--fc-accent); color:#06231a; }

    /* Sidebar */
    .fc-sidebar-header{
        padding:18px 22px;
        border-bottom:1px solid var(--fc-border);
        font-weight:700;
        color:var(--fc-white);
    }
    .fc-sidebar-header i{ color:var(--fc-accent); }

    .fc-recent-item{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:16px 22px;
        border-bottom:1px solid var(--fc-border);
        text-decoration:none;
        transition:.2s;
    }
    .fc-recent-item:last-child{ border-bottom:none; }
    .fc-recent-item:hover{ background:var(--fc-bg-alt); }
    .fc-recent-item h6{ color:var(--fc-white); font-weight:600; margin-bottom:4px; }
    .fc-recent-item small{ color:var(--fc-muted); }
    .fc-recent-item small i{ color:var(--fc-accent); }
    .fc-recent-item .verified-icon{ color:var(--fc-accent); }

    .fc-cta-card{ padding:34px 24px; text-align:center; }
    .fc-cta-card h6{ color:var(--fc-white); font-weight:700; }
    .fc-cta-card p{ color:var(--fc-muted); font-size:.88rem; }

    /* Modals */
    .modal-content{
        background:var(--fc-card);
        border:1px solid var(--fc-border);
        border-radius:18px;
        color:var(--fc-white);
    }
    .modal-header{
        border-bottom:1px solid var(--fc-border);
        background:var(--fc-bg-alt) !important;
    }
    .modal-header h5{ color:var(--fc-white); }
    .modal-header small{ color:var(--fc-muted) !important; }
    .modal-footer{ border-top:1px solid var(--fc-border); }
    .modal .form-label{ color:var(--fc-muted); font-weight:600; font-size:.85rem; }
    .modal .form-control, .modal .form-select, .modal textarea{
        background:var(--fc-bg-alt) !important;
        border:1px solid var(--fc-border) !important;
        color:var(--fc-white) !important;
        border-radius:12px !important;
    }
    .modal .form-control::placeholder{ color:#5f7370; }
    .modal .form-control:focus, .modal .form-select:focus{
        border-color:var(--fc-accent) !important;
        box-shadow:0 0 0 3px rgba(72,213,151,.15) !important;
    }
    .modal .file-upload-box{
        background:var(--fc-bg-alt);
        border:1px dashed var(--fc-border) !important;
    }
    .modal .btn-light{
        background:var(--fc-bg-alt);
        border:1px solid var(--fc-border);
        color:var(--fc-white);
    }
    .modal .btn-light:hover{ background:var(--fc-border); color:var(--fc-white); }
    .modal .alert-danger{
        background:rgba(220,53,69,.12);
        border:1px solid rgba(220,53,69,.3);
        color:#ff8a97;
    }
</style>

<div class="fc-page">
    <div class="container">
        <div class="row g-4">

            <!-- Project Details -->
            <div class="col-lg-8">
                <div class="fc-card">

                    <div class="fc-proj-header">
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                            <h2>{{ $project->title }}</h2>
                            @if($project->verified)
                            <span class="fc-badge-verified">
                                <i class="bi bi-patch-check-fill me-1"></i> Verified
                            </span>
                            @endif
                        </div>
                        <p class="fc-proj-meta mb-0">
                            <i class="bi bi-person-circle me-1"></i> {{ $project->user->name ?? 'Unknown' }}
                            &nbsp;•&nbsp;
                            <i class="bi bi-geo-alt me-1"></i> {{ $project->location ?? 'Remote' }}
                            &nbsp;•&nbsp;
                            <i class="bi bi-briefcase me-1"></i> {{ $project->category ?? 'General' }}
                        </p>
                    </div>

                    <div class="fc-proj-body">
                        <p class="fc-proj-desc">{{ $project->description }}</p>

                        <div class="row g-3 mb-4">
                            <div class="col-md-4">
                                <div class="fc-info-box">
                                    <small>💰 Budget</small>
                                    <span>{{ $project->budget }}</span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="fc-info-box">
                                    <small>📊 Status</small>
                                    <span>{{ ucfirst($project->status) }}</span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="fc-info-box">
                                    <small>🕒 Posted</small>
                                    <span>{{ $project->created_at->diffForHumans() }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex gap-2 flex-wrap">
                            <button class="btn btn-fc-primary" data-bs-toggle="modal" data-bs-target="#applyModal">
                                <i class="bi bi-envelope-paper me-2"></i> Apply for Collaboration
                            </button>
                            <button type="button" class="btn btn-fc-outline-primary" data-bs-toggle="modal" data-bs-target="#sponsorModal">
                                Sponsor This Project
                            </button>
                        </div>

                        <!-- Sponsor Modal -->
                        <div class="modal fade" id="sponsorModal" tabindex="-1" aria-labelledby="sponsorModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title fw-bold" id="sponsorModalLabel">Sponsor: {{ $project->title }}</h5>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        @if ($errors->any())
                                        <div class="alert alert-danger">
                                            <h6 class="mb-2 fw-bold">❗ Please fix the following errors:</h6>
                                            <ul class="mb-0">
                                                @foreach ($errors->all() as $error)
                                                <li>{{ $error }}</li>
                                                @endforeach
                                            </ul>
                                        </div>
                                        @endif
                                        <p class="text-muted mb-4" style="color:var(--fc-muted) !important;">{{ $project->description }}</p>

                                        <form id="sponsorForm" action="{{ route('diaspora.sponsorship.store', $project->id) }}" method="POST">
                                            @csrf
                                            <div class="col-12 mb-3">
                                                <label class="form-label">Message</label>
                                                <textarea name="message" rows="4" class="form-control" placeholder="Leave a message..."></textarea>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Amount</label>
                                                <input type="number" name="amount" class="form-control @error('amount') is-invalid @enderror" value="{{ old('amount') }}" required>
                                                @error('amount')
                                                <div class="invalid-feedback">{{ $message }}</div>
                                                @enderror
                                            </div>

                                            <div class="mb-3">
                                                <label class="form-label">Currency</label>
                                                <select name="currency" class="form-select @error('currency') is-invalid @enderror">
                                                    <option value="USD">USD</option>
                                                    <option value="EUR">EUR</option>
                                                    <option value="RWF">RWF</option>
                                                </select>
                                                @error('currency')
                                                <div class="invalid-feedback">{{ $message }}</div>
                                                @enderror
                                            </div>

                                            <button type="submit" class="btn btn-fc-primary w-100">Sponsor Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4">
                <div class="fc-card mb-4">
                    <div class="fc-sidebar-header">
                        <i class="bi bi-stars me-2"></i> Recent Projects
                    </div>
                    <div>
                        @foreach($recent as $item)
                        <a href="{{ route('user.projects.show', $item->id) }}" class="fc-recent-item">
                            <div>
                                <h6 class="mb-1">{{ $item->title }}</h6>
                                <small>
                                    <i class="bi bi-tag me-1"></i>{{ $item->category ?? 'General' }}
                                </small>
                            </div>
                            @if($item->verified)
                            <i class="bi bi-patch-check-fill verified-icon"></i>
                            @endif
                        </a>
                        @endforeach
                    </div>
                </div>

                <div class="fc-card">
                    <div class="fc-cta-card">
                        <h6 class="mb-2">Want to post your own project?</h6>
                        <p class="mb-3">Share your idea and find talented collaborators.</p>
                        <a href="#" class="btn btn-fc-outline-primary">
                            <i class="bi bi-plus-circle me-1"></i> Post a Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Application Modal -->
<div class="modal fade" id="applyModal" tabindex="-1" aria-labelledby="applyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content overflow-hidden">

            <div class="modal-header p-4">
                <div>
                    <h5 class="modal-title fw-bold mb-1"><i class="bi bi-envelope-paper me-2" style="color:var(--fc-accent);"></i> Apply for Collaboration</h5>
                    <small>Connect with this project by sharing your skills and experience</small>
                </div>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            <form action="{{ route('user.projects.apply', $project->id) }}" method="POST" enctype="multipart/form-data" class="p-3 p-md-4">
                @csrf

                <div class="modal-body">
                    <div class="mb-4">
                        <label class="form-label">
                            <i class="bi bi-chat-dots me-1" style="color:var(--fc-accent);"></i> Message / Collaboration Proposal
                        </label>
                        <textarea
                            name="message"
                            class="form-control p-3"
                            rows="4"
                            placeholder="Tell us about your expertise and how you can contribute..."
                            required>{{ old('message') }}</textarea>
                    </div>

                    <div class="mb-4">
                        <label class="form-label">
                            <i class="bi bi-link-45deg me-1" style="color:var(--fc-accent);"></i> Portfolio URL (optional)
                        </label>
                        <input
                            type="url"
                            name="portfolio_url"
                            class="form-control p-3"
                            placeholder="https://yourportfolio.com">
                    </div>

                    <div class="mb-2">
                        <label class="form-label">
                            <i class="bi bi-paperclip me-1" style="color:var(--fc-accent);"></i> Attach File (optional)
                        </label>
                        <div class="file-upload-box p-4 rounded-4 text-center">
                            <input
                                type="file"
                                name="attachment"
                                class="form-control form-control-sm border-0"
                                accept=".pdf,.doc,.docx,.zip" />
                            <small class="d-block mt-2" style="color:var(--fc-muted);">Accepted: PDF, DOC, DOCX, ZIP — Max 2MB</small>
                        </div>
                    </div>
                </div>

                <div class="modal-footer d-flex justify-content-between px-4 pb-4">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                        <i class="bi bi-x-circle me-1"></i> Cancel
                    </button>
                    <button type="submit" class="btn btn-fc-primary px-5">
                        <i class="bi bi-send-check me-1"></i> Submit Application
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection