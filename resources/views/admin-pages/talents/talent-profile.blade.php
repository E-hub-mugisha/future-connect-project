@extends('layouts.app')
@section('title', 'Talent Profile')
@section('content')
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
    :root {
        --growth:       #0D5C3A;
        --growth-light: #1A7A4E;
        --growth-pale:  #E8F5EE;
        --opp:          #E8630A;
        --opp-light:    #FF7A20;
        --opp-pale:     #FEF0E6;
        --gold:         #F5C842;
        --cream:        #FAF7F2;
        --ink:          #1A1A1A;
        --muted:        #6B7280;
        --border:       #E5DDD0;
    }
    body { background: var(--cream); font-family: 'Outfit', sans-serif; }

    /* ─── Hero ─── */
    .hero-strip {
        background: var(--growth);
        height: 220px;
        position: relative;
        overflow: hidden;
    }
    .hero-strip::before {
        content:'';
        position:absolute; top:-80px; right:-80px;
        width:320px;height:320px;border-radius:50%;
        background:rgba(245,200,66,.1);
    }
    .hero-strip::after {
        content:'';
        position:absolute; bottom:-60px; left:20%;
        width:200px;height:200px;border-radius:50%;
        background:rgba(232,99,10,.12);
    }
    .back-link {
        position:absolute; top:1.5rem; left:2rem; z-index:10;
        display:inline-flex;align-items:center;gap:.4rem;
        color:rgba(255,255,255,.75); text-decoration:none; font-size:.85rem;
        transition: color .2s;
    }
    .back-link:hover { color:#fff; }

    /* ─── Profile Card ─── */
    .profile-wrap { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
    .profile-card {
        background:#fff;
        border:1px solid var(--border);
        border-radius:20px;
        margin-top:-80px;
        position:relative; z-index:5;
        overflow:hidden;
        box-shadow:0 8px 40px rgba(13,92,58,.1);
    }
    .profile-top {
        display:flex; align-items:flex-end; gap:1.5rem;
        padding:1.75rem 2rem 1.25rem;
        border-bottom:1px solid var(--border);
        flex-wrap:wrap;
    }
    .profile-avatar {
        width:110px; height:110px; border-radius:16px;
        object-fit:cover; border:4px solid var(--cream);
        box-shadow:0 4px 16px rgba(0,0,0,.12);
        flex-shrink:0; background:var(--growth-pale);
    }
    .avatar-placeholder {
        width:110px; height:110px; border-radius:16px;
        border:4px solid var(--cream); background:var(--growth-pale);
        display:flex;align-items:center;justify-content:center;
        font-size:3rem; flex-shrink:0;
    }
    .profile-intro { flex:1; padding-bottom:.5rem; }
    .profile-category {
        font-size:.72rem; font-weight:700; letter-spacing:.1em;
        text-transform:uppercase; color:var(--opp); margin-bottom:.3rem;
    }
    .profile-name {
        font-family:'Playfair Display',serif; font-size:2rem; font-weight:900;
        color:var(--ink); margin:0 0 .5rem; line-height:1.1;
    }
    .profile-tags { display:flex; gap:.5rem; flex-wrap:wrap; }
    .tag {
        display:inline-flex;align-items:center;gap:.3rem;
        font-size:.75rem; font-weight:600; padding:.22rem .65rem; border-radius:100px;
    }
    .tag-status-active   { background:var(--growth); color:#fff; }
    .tag-status-inactive { background:var(--muted); color:#fff; }
    .tag-status-pending  { background:var(--gold); color:var(--ink); }
    .tag-level  { background:var(--opp-pale); color:var(--opp); }
    .tag-lang   { background:var(--growth-pale); color:var(--growth); }
    .tag-featured { background:var(--gold); color:var(--ink); }
    .profile-actions { display:flex;gap:.6rem;align-items:center;flex-wrap:wrap; }
    .btn-primary {
        background:var(--opp); color:#fff;
        border:none; border-radius:9px; cursor:pointer;
        padding:.65rem 1.35rem; font-family:'Outfit',sans-serif;
        font-size:.88rem; font-weight:600;
        text-decoration:none; display:inline-flex;align-items:center;gap:.4rem;
        transition:background .2s;
    }
    .btn-primary:hover { background:var(--opp-light); }
    .btn-secondary {
        background:var(--growth-pale); color:var(--growth);
        border:1.5px solid rgba(13,92,58,.2); border-radius:9px;
        padding:.62rem 1.2rem; font-family:'Outfit',sans-serif;
        font-size:.88rem; font-weight:600; text-decoration:none;
        display:inline-flex;align-items:center;gap:.4rem; cursor:pointer;
        transition:all .2s;
    }
    .btn-secondary:hover { background:var(--growth); color:#fff; }
    .btn-danger {
        background:#FEE2E2; color:#DC2626;
        border:1.5px solid rgba(220,38,38,.15); border-radius:9px;
        padding:.62rem 1.2rem; font-family:'Outfit',sans-serif;
        font-size:.88rem; font-weight:600; cursor:pointer;
        display:inline-flex;align-items:center;gap:.4rem;
        transition:all .2s;
    }
    .btn-danger:hover { background:#DC2626; color:#fff; }

    /* ─── Stats Row ─── */
    .stats-row {
        display:grid; grid-template-columns:repeat(auto-fit,minmax(130px,1fr));
        padding:1.25rem 2rem; gap:1px; background:var(--border);
    }
    .stat-cell {
        background:#fff; padding:1rem 1.25rem; text-align:center;
    }
    .stat-number {
        font-family:'Playfair Display',serif;
        font-size:1.8rem; font-weight:900; color:var(--growth); display:block;
    }
    .stat-label { font-size:.73rem; font-weight:600; color:var(--muted); text-transform:uppercase; letter-spacing:.06em; }

    /* ─── Content Area ─── */
    .content-area { max-width:1100px; margin:1.5rem auto 3rem; padding:0 2rem; display:grid; grid-template-columns:1fr 320px; gap:1.25rem; }
    @media(max-width:900px){ .content-area { grid-template-columns:1fr; } }

    /* ─── Section Card ─── */
    .section-card {
        background:#fff; border:1px solid var(--border); border-radius:14px; overflow:hidden; margin-bottom:1.25rem;
    }
    .section-header {
        padding:1rem 1.5rem; border-bottom:1px solid var(--border);
        display:flex;align-items:center;gap:.6rem;
    }
    .section-icon {
        width:32px;height:32px;border-radius:8px;
        background:var(--growth-pale);color:var(--growth);
        display:flex;align-items:center;justify-content:center;font-size:.9rem;
    }
    .section-title { font-family:'Playfair Display',serif; font-size:1.05rem; font-weight:700; color:var(--ink); }
    .section-body { padding:1.25rem 1.5rem; }

    /* ─── Description ─── */
    .desc-text { font-size:.92rem; line-height:1.75; color:#374151; }

    /* ─── Skills ─── */
    .skills-grid { display:flex;gap:.5rem;flex-wrap:wrap; }
    .skill-tag {
        background:var(--growth-pale); color:var(--growth);
        border:1px solid rgba(13,92,58,.15);
        font-size:.8rem; font-weight:500;
        padding:.28rem .75rem; border-radius:100px;
    }

    /* ─── Contact Info ─── */
    .contact-list { display:flex;flex-direction:column;gap:.65rem; }
    .contact-row { display:flex;align-items:center;gap:.75rem; }
    .contact-icon {
        width:34px;height:34px;border-radius:8px;flex-shrink:0;
        background:var(--opp-pale);color:var(--opp);
        display:flex;align-items:center;justify-content:center;font-size:.9rem;
    }
    .contact-label { font-size:.72rem; color:var(--muted); font-weight:600; text-transform:uppercase; letter-spacing:.05em; }
    .contact-value { font-size:.9rem; color:var(--ink); font-weight:500; }
    .contact-value a { color:var(--growth); text-decoration:none; }
    .contact-value a:hover { text-decoration:underline; }

    /* ─── Feedback ─── */
    .feedback-list { display:flex;flex-direction:column;gap:1rem; }
    .feedback-item { border:1px solid var(--border); border-radius:10px; padding:1rem; }
    .feedback-meta { display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem; }
    .feedback-author { font-size:.82rem; font-weight:600; color:var(--ink); }
    .feedback-date { font-size:.75rem; color:var(--muted); margin-left:auto; }
    .feedback-text { font-size:.85rem; color:#374151; line-height:1.6; }
    .feedback-empty { text-align:center;padding:1.5rem;color:var(--muted);font-size:.88rem; }

    /* ─── Stories ─── */
    .story-card { border:1px solid var(--border); border-radius:10px; overflow:hidden; }
    .story-card + .story-card { margin-top:.75rem; }
    .story-img { width:100%; height:140px; object-fit:cover; background:var(--growth-pale); }
    .story-body { padding:.9rem 1rem; }
    .story-title { font-family:'Playfair Display',serif; font-size:.95rem; font-weight:700; color:var(--ink); margin:0 0 .3rem; }
    .story-excerpt { font-size:.8rem; color:var(--muted); line-height:1.55; }

    /* ─── Sidebar Info ─── */
    .sidebar-section { margin-bottom:1.25rem; }
    .info-list { display:flex;flex-direction:column;gap:.5rem; }
    .info-row {
        display:flex;justify-content:space-between;align-items:center;
        padding:.5rem 0; border-bottom:1px solid var(--border); font-size:.85rem;
    }
    .info-row:last-child { border-bottom:none; }
    .info-key { color:var(--muted); font-weight:500; }
    .info-val { color:var(--ink); font-weight:600; text-align:right; }

    /* ─── Matched indicator ─── */
    .matched-bar { margin-top:.5rem; }
    .matched-track {
        height:6px; background:var(--border); border-radius:100px; overflow:hidden;
    }
    .matched-fill {
        height:100%; background:linear-gradient(90deg,var(--growth),var(--gold));
        border-radius:100px; transition: width 1s ease;
    }
    .matched-label { display:flex;justify-content:space-between; font-size:.75rem; color:var(--muted); margin-top:.3rem; }
</style>


<div class="hero-strip">
    <a href="{{ route('admin.talents.index') }}" class="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5m7-7-7 7 7 7"/></svg>
        Back to Talents
    </a>
</div>

<div class="profile-wrap">
    <div class="profile-card">

        {{-- Profile Top --}}
        <div class="profile-top">
            @if($talent->image)
                <img src="{{ asset('image/' . $talent->image) }}" alt="{{ $talent->name }}" class="profile-avatar">
            @else
                <div class="avatar-placeholder">👤</div>
            @endif

            <div class="profile-intro">
                <div class="profile-category">{{ $talent->category->name ?? 'Uncategorized' }}</div>
                <h1 class="profile-name">{{ $talent->name }}</h1>
                <div class="profile-tags">
                    <span class="tag tag-status-{{ $talent->status ?? 'active' }}">● {{ ucfirst($talent->status ?? 'Active') }}</span>
                    @if($talent->level)
                        <span class="tag tag-level">⚡ {{ ucfirst($talent->level) }}</span>
                    @endif
                    @if($talent->language)
                        <span class="tag tag-lang">🌐 {{ ucfirst($talent->language) }}</span>
                    @endif
                    @if($talent->featured)
                        <span class="tag tag-featured">⭐ Featured</span>
                    @endif
                </div>
            </div>

            <div class="profile-actions">
                <a href="{{ route('admin.talents.edit', $talent) }}" class="btn-primary">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    Edit Profile
                </a>
                <a href="{{ route('admin.talents.index') }}" class="btn-secondary">All Talents</a>
                <form method="POST" action="{{ route('admin.talents.destroy', $talent) }}" onsubmit="return confirm('Delete {{ $talent->name }}? This cannot be undone.')">
                    @csrf @method('DELETE')
                    <button type="submit" class="btn-danger">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                        Delete
                    </button>
                </form>
            </div>
        </div>

        {{-- Stats Row --}}
        <div class="stats-row">
            <div class="stat-cell">
                <span class="stat-number">{{ $talent->skills->count() }}</span>
                <span class="stat-label">Skills</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">{{ $talent->stories->count() }}</span>
                <span class="stat-label">Stories</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">{{ $talent->connections->count() }}</span>
                <span class="stat-label">Connections</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">{{ $talent->feedback->count() }}</span>
                <span class="stat-label">Reviews</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">{{ $talent->matched ?? 0 }}</span>
                <span class="stat-label">Matched</span>
            </div>
            <div class="stat-cell">
                <span class="stat-number">{{ $talent->courses->count() }}</span>
                <span class="stat-label">Courses</span>
            </div>
        </div>
    </div>
</div>

{{-- Content Area --}}
<div class="content-area">

    {{-- ─── Left Column ─── --}}
    <div>

        {{-- About --}}
        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">📝</div>
                <span class="section-title">About</span>
            </div>
            <div class="section-body">
                <p class="desc-text">{{ $talent->description ?: 'No description provided.' }}</p>
            </div>
        </div>

        {{-- Skills --}}
        @if($talent->skills->isNotEmpty())
        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">⚡</div>
                <span class="section-title">Skills</span>
            </div>
            <div class="section-body">
                <div class="skills-grid">
                    @foreach($talent->skills as $skill)
                        <span class="skill-tag">{{ $skill->name }}</span>
                    @endforeach
                </div>
            </div>
        </div>
        @endif

        {{-- Stories --}}
        @if($talent->stories->isNotEmpty())
        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">📖</div>
                <span class="section-title">Stories</span>
            </div>
            <div class="section-body">
                @foreach($talent->stories->take(3) as $story)
                <div class="story-card">
                    @if($story->image)
                        <img src="{{ asset('image/' . $story->image) }}" alt="{{ $story->title }}" class="story-img">
                    @endif
                    <div class="story-body">
                        <h4 class="story-title">{{ $story->title }}</h4>
                        <p class="story-excerpt">{{ Str::limit($story->content ?? '', 120) }}</p>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        @endif

        {{-- Feedback --}}
        <div class="section-card">
            <div class="section-header">
                <div class="section-icon">💬</div>
                <span class="section-title">Feedback & Reviews</span>
            </div>
            <div class="section-body">
                @if($talent->feedback->isNotEmpty())
                    <div class="feedback-list">
                        @foreach($talent->feedback as $fb)
                        <div class="feedback-item">
                            <div class="feedback-meta">
                                <span class="feedback-author">{{ $fb->user->name ?? 'Anonymous' }}</span>
                                <span class="feedback-date">{{ $fb->created_at?->diffForHumans() }}</span>
                            </div>
                            <p class="feedback-text">{{ $fb->comment }}</p>
                        </div>
                        @endforeach
                    </div>
                @else
                    <div class="feedback-empty">🌱 No feedback yet — be the first!</div>
                @endif
            </div>
        </div>

    </div>

    {{-- ─── Right Sidebar ─── --}}
    <div>

        {{-- Contact Details --}}
        <div class="section-card sidebar-section">
            <div class="section-header">
                <div class="section-icon">📋</div>
                <span class="section-title">Contact Info</span>
            </div>
            <div class="section-body">
                <div class="contact-list">
                    @if($talent->email)
                    <div class="contact-row">
                        <div class="contact-icon">✉️</div>
                        <div>
                            <div class="contact-label">Email</div>
                            <div class="contact-value"><a href="mailto:{{ $talent->email }}">{{ $talent->email }}</a></div>
                        </div>
                    </div>
                    @endif
                    @if($talent->phone)
                    <div class="contact-row">
                        <div class="contact-icon">📱</div>
                        <div>
                            <div class="contact-label">Phone</div>
                            <div class="contact-value"><a href="tel:{{ $talent->phone }}">{{ $talent->phone }}</a></div>
                        </div>
                    </div>
                    @endif
                    @if($talent->address)
                    <div class="contact-row">
                        <div class="contact-icon">📍</div>
                        <div>
                            <div class="contact-label">Address</div>
                            <div class="contact-value">{{ $talent->address }}</div>
                        </div>
                    </div>
                    @endif
                </div>
            </div>
        </div>

        {{-- Profile Details --}}
        <div class="section-card sidebar-section">
            <div class="section-header">
                <div class="section-icon">🌱</div>
                <span class="section-title">Profile Details</span>
            </div>
            <div class="section-body">
                <div class="info-list">
                    <div class="info-row">
                        <span class="info-key">Category</span>
                        <span class="info-val">{{ $talent->category->name ?? '—' }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-key">Level</span>
                        <span class="info-val">{{ $talent->level ? ucfirst($talent->level) : '—' }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-key">Language</span>
                        <span class="info-val">{{ $talent->language ? ucfirst($talent->language) : '—' }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-key">Status</span>
                        <span class="info-val">{{ ucfirst($talent->status ?? 'active') }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-key">Featured</span>
                        <span class="info-val">{{ $talent->featured ? '⭐ Yes' : 'No' }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-key">Member Since</span>
                        <span class="info-val">{{ $talent->created_at?->format('M Y') ?? '—' }}</span>
                    </div>
                </div>

                {{-- Match Rate --}}
                @if($talent->matched)
                <div class="matched-bar" style="margin-top:1rem;">
                    <div style="font-size:.78rem;font-weight:600;color:var(--muted);margin-bottom:.4rem;">Match Activity</div>
                    <div class="matched-track">
                        <div class="matched-fill" id="matchFill" style="width:0%"></div>
                    </div>
                    <div class="matched-label">
                        <span>0</span>
                        <span>{{ $talent->matched }} matches</span>
                    </div>
                </div>
                @endif
            </div>
        </div>

        {{-- Linked User --}}
        @if($talent->user)
        <div class="section-card sidebar-section">
            <div class="section-header">
                <div class="section-icon">👤</div>
                <span class="section-title">Linked Account</span>
            </div>
            <div class="section-body">
                <div class="contact-row">
                    <div class="contact-icon" style="background:var(--growth-pale);color:var(--growth);">👤</div>
                    <div>
                        <div class="contact-label">User</div>
                        <div class="contact-value">{{ $talent->user->name }}</div>
                        <div style="font-size:.78rem;color:var(--muted);">{{ $talent->user->email }}</div>
                    </div>
                </div>
            </div>
        </div>
        @endif

    </div>
</div>

<script>
    // Animate match bar
    window.addEventListener('load', () => {
        const fill = document.getElementById('matchFill');
        if (fill) {
            setTimeout(() => { fill.style.width = Math.min({{ $talent->matched ?? 0 }} * 10, 100) + '%'; }, 300);
        }
    });
</script>

@endsection