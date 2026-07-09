@extends('layouts.guest')
@section('title', 'Stay Updated with Future Connect - Latest Announcements and News')
@section('content')



<!-- HERO -->
<section class="ann-hero">
    <div class="ann-hero-bg"></div>
    <div class="ann-hero-grid"></div>
    <div class="ann-hero-inner">
        <div class="ann-hero-content">
            <div class="ann-hero-tag">
                <i class="ti ti-bell"></i> Live Updates
            </div>
            <h1>Stay in the loop with<br><em>Future Connect</em></h1>
            <p>Discover the latest news, platform updates, upcoming events, and important announcements — all in one place.</p>
            <a href="#announcements" class="btn-hero">
                Explore Announcements <i class="feather-arrow-down"></i>
            </a>
        </div>
        <div class="ann-hero-visual">
            <img src="{{ asset('assets/img/bg/provide-bg.jpg') }}" alt="Updates">
        </div>
    </div>
</section>

<!-- STATS -->
<div class="stats-bar">
    <div class="stat-pill">
        <i class="ti ti-bell"></i>
        <div class="stat-pill-text">
            <strong>{{ $announcements->count() }}</strong>
            <span>Announcements</span>
        </div>
    </div>
    <div class="stat-pill">
        <i class="ti ti-refresh"></i>
        <div class="stat-pill-text">
            <strong>Weekly</strong>
            <span>Update Frequency</span>
        </div>
    </div>
    <div class="stat-pill">
        <i class="ti ti-speakerphone"></i>
        <div class="stat-pill-text">
            <strong>Product Team</strong>
            <span>Official Source</span>
        </div>
    </div>
</div>

<!-- ANNOUNCEMENTS GRID -->
<section class="ann-section" id="announcements">
    <div class="ann-section-header">
        <h2 class="ann-section-title">Latest <span>Announcements</span></h2>
    </div>

    @if($announcements->count())
    <div class="ann-grid">
        @foreach($announcements as $ann)
        <div class="ann-card">
            <div class="ann-card-accent-line"></div>
            <div class="ann-card-body">
                <div class="ann-card-icon-row">
                    <div class="ann-icon-bubble">
                        <i class="ti ti-bell"></i>
                    </div>
                    <div class="ann-date-badge">
                        <i class="ti ti-clock"></i>
                        {{ \Carbon\Carbon::parse($ann->created_at)->diffForHumans() }}
                    </div>
                </div>

                <h3 class="ann-card-title">{{ $ann->title }}</h3>
                <p class="ann-card-excerpt">
                    {{ \Illuminate\Support\Str::limit($ann->content, 110, '…') }}
                </p>

                <div class="ann-card-footer">
                    <div class="ann-author">
                        <img src="{{ asset('assets/img/user/admin.jpg') }}" alt="Product Team">
                        <div class="ann-author-info">
                            <strong>Product Team</strong>
                            <span>Official</span>
                        </div>
                    </div>
                    <a href="{{ route('user.announcement.details', $ann->id) }}" class="btn-read-more">
                        Read More <i class="feather-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    @else
    <div class="empty-state">
        <i class="ti ti-bell-off"></i>
        <h4>No announcements yet</h4>
        <p>Check back soon for the latest updates from the Product Team.</p>
    </div>
    @endif
</section>

@endsection