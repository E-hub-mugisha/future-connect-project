@extends('layouts.app')
@section('title', 'Skills Profile')
@section('content')
<style>
    :root {
        --accent:       #4361EE;
        --accent-light: #EEF1FD;
        --accent-dark:  #3451D1;
        --text-hi:      #111827;
        --text-mid:     #4B5563;
        --text-lo:      #9CA3AF;
        --border:       #E4E8F0;
        --border-med:   #D0D7E5;
        --success:      #10B981;
        --success-bg:   #ECFDF5;
        --danger:       #EF4444;
        --danger-bg:    #FEF2F2;
        --warning:      #F59E0B;
        --warning-bg:   #FFFBEB;
        --info:         #3B82F6;
        --info-bg:      #EFF6FF;
        --gold:         #D97706;
        --gold-bg:      #FEF3C7;
        --purple:       #7C3AED;
        --purple-bg:    #F5F3FF;
    }

    body { background: #F8F9FC; }

    /* ── Breadcrumb ── */
    .breadcrumb-bar { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--text-lo); margin-bottom: 22px; }
    .breadcrumb-bar a { color: var(--text-lo); text-decoration: none; transition: color .15s; }
    .breadcrumb-bar a:hover { color: var(--accent); }
    .breadcrumb-bar .sep { font-size: 10px; }
    .breadcrumb-bar .current { color: var(--text-mid); font-weight: 500; }

    /* ── Hero band ── */
    .hero-band {
        background: #fff; border: 1px solid var(--border);
        border-radius: 16px; padding: 28px 30px;
        display: flex; gap: 24px; align-items: flex-start;
        position: relative; overflow: hidden;
        box-shadow: 0 1px 4px rgba(0,0,0,.04);
    }
    .hero-band::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
        background: linear-gradient(90deg, var(--accent), #60a5fa);
        border-radius: 16px 16px 0 0;
    }
    .hero-avatar {
        width: 96px; height: 96px; border-radius: 50%;
        object-fit: cover; border: 3px solid var(--border-med); flex-shrink: 0;
    }
    .hero-avatar-placeholder {
        width: 96px; height: 96px; border-radius: 50%;
        background: var(--accent-light); color: var(--accent);
        font-size: 36px; font-weight: 800;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; border: 3px solid #C7D2FB;
    }
    .hero-info { flex: 1; min-width: 0; }
    .hero-badges { display: flex; gap: 7px; align-items: center; flex-wrap: wrap; margin-bottom: 8px; }
    .hero-name { font-size: 24px; font-weight: 800; color: var(--text-hi); letter-spacing: -.5px; line-height: 1.2; margin-bottom: 4px; }
    .hero-category { font-size: 13px; color: var(--text-lo); margin-bottom: 14px; }
    .hero-meta { display: flex; gap: 18px; flex-wrap: wrap; }
    .hero-meta-item { display: flex; align-items: center; gap: 5px; font-size: 12.5px; color: var(--text-mid); }
    .hero-meta-item svg { width: 13px; height: 13px; color: var(--text-lo); flex-shrink: 0; }
    .hero-actions { display: flex; flex-direction: column; gap: 8px; flex-shrink: 0; }

    /* Buttons */
    .btn-accent {
        display: inline-flex; align-items: center; justify-content: center; gap: 6px;
        background: var(--accent); color: #fff; border: none; border-radius: 8px;
        padding: 9px 20px; font-size: 13px; font-weight: 600; font-family: inherit;
        cursor: pointer; text-decoration: none; transition: background .18s, box-shadow .18s;
        white-space: nowrap;
    }
    .btn-accent:hover { background: var(--accent-dark); color: #fff; box-shadow: 0 6px 18px rgba(67,97,238,.25); }
    .btn-secondary {
        display: inline-flex; align-items: center; justify-content: center; gap: 6px;
        background: #F3F4F6; color: var(--text-mid); border: 1px solid var(--border);
        border-radius: 8px; padding: 9px 20px; font-size: 13px; font-weight: 500;
        font-family: inherit; cursor: pointer; text-decoration: none; transition: all .15s;
        white-space: nowrap;
    }
    .btn-secondary:hover { background: #E5E7EB; color: var(--text-hi); }
    .btn-danger-outline {
        display: inline-flex; align-items: center; justify-content: center; gap: 6px;
        background: transparent; color: var(--danger);
        border: 1px solid rgba(239,68,68,.3); border-radius: 8px;
        padding: 9px 20px; font-size: 13px; font-family: inherit;
        cursor: pointer; text-decoration: none; transition: all .15s;
        white-space: nowrap; width: 100%;
    }
    .btn-danger-outline:hover { background: var(--danger-bg); border-color: var(--danger); }

    /* Badges */
    .badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 9px; border-radius: 20px; font-size: 11px; font-weight: 700; }
    .badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
    .badge-active   { background: var(--success-bg); color: var(--success); border: 1px solid rgba(16,185,129,.2); }
    .badge-inactive { background: #F3F4F6; color: var(--text-lo); border: 1px solid var(--border); }
    .badge-pending  { background: var(--warning-bg); color: var(--warning); border: 1px solid rgba(245,158,11,.2); }
    .badge-featured {
        background: var(--gold-bg); color: var(--gold);
        border: 1px solid rgba(217,119,6,.2); border-radius: 20px;
        font-size: 11px; font-weight: 700; padding: 3px 9px;
        display: inline-flex; align-items: center; gap: 4px;
    }
    .badge-matched {
        background: var(--accent-light); color: var(--accent);
        border: 1px solid rgba(67,97,238,.2); border-radius: 20px;
        font-size: 11px; font-weight: 700; padding: 3px 9px;
        display: inline-flex; align-items: center; gap: 4px;
    }
    .level-pill {
        display: inline-block; padding: 3px 9px; border-radius: 5px;
        font-size: 11px; font-weight: 700;
        background: var(--info-bg); color: var(--info);
        border: 1px solid rgba(59,130,246,.2);
    }

    /* ── Stat cards ── */
    .stat-card {
        background: #fff; border: 1px solid var(--border);
        border-radius: 14px; padding: 18px 20px;
        position: relative; overflow: hidden;
        box-shadow: 0 1px 4px rgba(0,0,0,.04);
        transition: box-shadow .2s, transform .2s;
    }
    .stat-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,.08); transform: translateY(-2px); }
    .stat-card::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
        background: var(--card-top, var(--accent)); border-radius: 14px 14px 0 0;
    }
    .s-icon {
        width: 30px; height: 30px; border-radius: 8px;
        display: flex; align-items: center; justify-content: center;
        background: var(--card-icon-bg, var(--accent-light));
        color: var(--card-icon-color, var(--accent));
        margin-bottom: 10px; flex-shrink: 0;
    }
    .s-icon svg { width: 14px; height: 14px; }
    .s-value { font-size: 28px; font-weight: 800; color: var(--text-hi); letter-spacing: -1px; line-height: 1; }
    .s-label { font-size: 11px; color: var(--text-lo); text-transform: uppercase; letter-spacing: .09em; margin-top: 5px; font-weight: 700; }

    /* ── Info card ── */
    .ui-card {
        background: #fff; border: 1px solid var(--border);
        border-radius: 14px; overflow: hidden;
        box-shadow: 0 1px 4px rgba(0,0,0,.04);
    }
    .card-header {
        padding: 13px 20px; border-bottom: 1px solid var(--border);
        display: flex; align-items: center; justify-content: space-between; gap: 10px;
    }
    .card-header-left { display: flex; align-items: center; gap: 9px; }
    .card-header-icon {
        width: 28px; height: 28px; border-radius: 7px;
        display: flex; align-items: center; justify-content: center;
        background: var(--icon-bg, var(--accent-light));
        color: var(--icon-color, var(--accent)); flex-shrink: 0;
    }
    .card-header-icon svg { width: 13px; height: 13px; }
    .card-header h2 { font-size: 13px; font-weight: 700; color: var(--text-hi); }
    .count-pill {
        background: #F3F4F6; color: var(--text-lo);
        border-radius: 20px; font-size: 11px; font-weight: 700; padding: 2px 9px;
    }
    .card-body { padding: 18px 20px; }

    /* Info rows */
    .info-row { display: flex; gap: 12px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid #F3F4F6; }
    .info-row:last-child { border-bottom: none; padding-bottom: 0; }
    .info-row:first-child { padding-top: 0; }
    .info-label {
        font-size: 11px; color: var(--text-lo); text-transform: uppercase;
        letter-spacing: .08em; font-weight: 700; min-width: 110px; padding-top: 1px; flex-shrink: 0;
    }
    .info-value { font-size: 13.5px; color: var(--text-hi); flex: 1; line-height: 1.5; }
    .info-value.empty { color: var(--text-lo); font-style: italic; }

    /* Description */
    .description-text { font-size: 13.5px; color: var(--text-mid); line-height: 1.75; padding: 18px 20px; }

    /* Skill tags */
    .skills-wrap { padding: 16px 20px; display: flex; flex-wrap: wrap; gap: 8px; }
    .skill-tag {
        background: #F3F4F6; color: var(--text-mid);
        border: 1px solid var(--border); font-size: 12px; padding: 4px 12px;
        border-radius: 20px; transition: all .15s;
    }
    .skill-tag:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

    /* Feedback */
    .feedback-item { padding: 14px 20px; border-bottom: 1px solid #F3F4F6; }
    .feedback-item:last-child { border-bottom: none; }
    .feedback-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
    .feedback-author { font-size: 13px; font-weight: 600; color: var(--text-hi); }
    .feedback-date   { font-size: 11px; color: var(--text-lo); }
    .feedback-text   { font-size: 12.5px; color: var(--text-mid); line-height: 1.55; margin-top: 4px; }
    .stars { color: var(--gold); font-size: 12px; margin-bottom: 4px; }

    /* Stories */
    .story-item { display: flex; align-items: center; gap: 12px; padding: 13px 20px; border-bottom: 1px solid #F3F4F6; }
    .story-item:last-child { border-bottom: none; }
    .story-thumb { width: 52px; height: 40px; border-radius: 7px; object-fit: cover; border: 1px solid var(--border); background: #F3F4F6; flex-shrink: 0; }
    .story-title { font-size: 13px; font-weight: 600; color: var(--text-hi); margin-bottom: 2px; }
    .story-date  { font-size: 11px; color: var(--text-lo); }

    /* Connections */
    .connection-item {
        display: flex; align-items: center; justify-content: space-between;
        padding: 12px 20px; border-bottom: 1px solid #F3F4F6; gap: 12px;
    }
    .connection-item:last-child { border-bottom: none; }
    .conn-name { font-size: 13px; font-weight: 600; color: var(--text-hi); }
    .conn-type { font-size: 11px; color: var(--text-lo); margin-top: 1px; }
    .conn-status { font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 20px; }
    .conn-active  { background: var(--success-bg); color: var(--success); }
    .conn-pending { background: var(--warning-bg); color: var(--warning); }

    /* Sub empty */
    .sub-empty { padding: 28px 20px; text-align: center; font-size: 12.5px; color: var(--text-lo); }
    .sub-empty svg { width: 22px; height: 22px; margin: 0 auto 8px; display: block; opacity: .4; }

    /* Flash */
    .flash-success {
        background: var(--success-bg); border: 1px solid rgba(16,185,129,.25);
        color: #065F46; border-radius: 10px; padding: 12px 18px;
        font-size: 13px; display: flex; align-items: center; gap: 9px;
    }

    @media (max-width: 700px) {
        .hero-band { flex-wrap: wrap; }
        .hero-actions { flex-direction: row; flex-wrap: wrap; }
    }
    @media (max-width: 480px) {
        .hero-name { font-size: 20px; }
    }
</style>

<div class="container-fluid px-4 py-4">

    @if(session('success'))
    <div class="flash-success mb-4">
        <em class="icon ni ni-check-circle-fill" style="font-size:16px"></em>
        {{ session('success') }}
    </div>
    @endif

    {{-- Breadcrumb --}}
    <div class="breadcrumb-bar mb-3">
        <a href="{{ route('admin.talents.index') }}">Skills</a>
        <span class="sep">›</span>
        <span class="current">{{ $talent->name }}</span>
    </div>

    {{-- ── Hero ── --}}
    <div class="hero-band mb-4">
        @if($talent->image)
            <img src="{{ asset($talent->image) }}" alt="{{ $talent->name }}" class="hero-avatar">
        @else
            <div class="hero-avatar-placeholder">{{ strtoupper(substr($talent->name, 0, 1)) }}</div>
        @endif

        <div class="hero-info">
            <div class="hero-badges">
                @php $status = strtolower($talent->status ?? 'inactive'); @endphp
                <span class="badge badge-{{ $status }}">
                    <span class="badge-dot"></span>{{ ucfirst($status) }}
                </span>
                @if($talent->featured)
                    <span class="badge-featured">★ Featured</span>
                @endif
                @if($talent->level)
                    <span class="level-pill">{{ ucfirst($talent->level) }}</span>
                @endif
                @if($talent->matched)
                    <span class="badge-matched">✓ Matched</span>
                @endif
            </div>
            <div class="hero-name">{{ $talent->name }}</div>
            <div class="hero-category">
                {{ $talent->category->name ?? 'No Category' }}
                @if($talent->language) · {{ $talent->language }} @endif
            </div>
            <div class="hero-meta">
                @if($talent->email)
                <div class="hero-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                    {{ $talent->email }}
                </div>
                @endif
                @if($talent->phone)
                <div class="hero-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                    {{ $talent->phone }}
                </div>
                @endif
                @if($talent->address)
                <div class="hero-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                    {{ $talent->address }}
                </div>
                @endif
                <div class="hero-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
                    Joined {{ $talent->created_at?->format('d M Y') ?? 'N/A' }}
                </div>
            </div>
        </div>

        <div class="hero-actions">
            <a href="{{ route('admin.talents.edit', $talent) }}" class="btn-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"/></svg>
                Edit
            </a>
            <a href="{{ route('admin.talents.index') }}" class="btn-secondary">← Back</a>
            <form method="POST" action="{{ route('admin.talents.destroy', $talent) }}"
                  onsubmit="return confirm('Permanently delete {{ addslashes($talent->name) }}?')">
                @csrf @method('DELETE')
                <button type="submit" class="btn-danger-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>
                    Delete
                </button>
            </form>
        </div>
    </div>

    {{-- ── Stat cards ── --}}
    <div class="row g-3 mb-4">
        <div class="col-6 col-md-4 col-xl-2">
            <div class="stat-card" style="--card-top:var(--accent);--card-icon-bg:var(--accent-light);--card-icon-color:var(--accent)">
                <div class="s-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/></svg></div>
                <div class="s-value">{{ $talent->skills->count() }}</div>
                <div class="s-label">Skills</div>
            </div>
        </div>
        <div class="col-6 col-md-4 col-xl-2">
            <div class="stat-card" style="--card-top:var(--info);--card-icon-bg:var(--info-bg);--card-icon-color:var(--info)">
                <div class="s-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/></svg></div>
                <div class="s-value">{{ $talent->stories->count() }}</div>
                <div class="s-label">Stories</div>
            </div>
        </div>
        <div class="col-6 col-md-4 col-xl-2">
            <div class="stat-card" style="--card-top:var(--gold);--card-icon-bg:var(--gold-bg);--card-icon-color:var(--gold)">
                <div class="s-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/></svg></div>
                <div class="s-value">{{ $talent->feedback->count() }}</div>
                <div class="s-label">Feedback</div>
            </div>
        </div>
        <div class="col-6 col-md-4 col-xl-2">
            <div class="stat-card" style="--card-top:var(--purple);--card-icon-bg:var(--purple-bg);--card-icon-color:var(--purple)">
                <div class="s-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg></div>
                <div class="s-value">{{ $talent->connections->count() }}</div>
                <div class="s-label">Connections</div>
            </div>
        </div>
        <div class="col-6 col-md-4 col-xl-2">
            <div class="stat-card" style="--card-top:#F87171;--card-icon-bg:#FEF2F2;--card-icon-color:#EF4444">
                <div class="s-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg></div>
                <div class="s-value">{{ $talent->courses->count() }}</div>
                <div class="s-label">Courses</div>
            </div>
        </div>
        <div class="col-6 col-md-4 col-xl-2">
            <div class="stat-card" style="--card-top:var(--warning);--card-icon-bg:var(--warning-bg);--card-icon-color:var(--warning)">
                <div class="s-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg></div>
                <div class="s-value">{{ $talent->supports->count() }}</div>
                <div class="s-label">Supports</div>
            </div>
        </div>
    </div>

    {{-- ── Content grid ── --}}
    <div class="row g-4 align-items-start">

        {{-- LEFT col ── --}}
        <div class="col-12 col-lg-8 d-flex flex-column gap-4">

            {{-- Profile Info --}}
            <div class="ui-card">
                <div class="card-header">
                    <div class="card-header-left">
                        <div class="card-header-icon" style="--icon-bg:var(--accent-light);--icon-color:var(--accent)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>
                        </div>
                        <h2>Profile Information</h2>
                    </div>
                </div>
                <div class="card-body">
                    <div class="info-row">
                        <span class="info-label">Name</span>
                        <span class="info-value">{{ $talent->name }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Email</span>
                        <span class="info-value {{ $talent->email ? '' : 'empty' }}">{{ $talent->email ?? 'Not provided' }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Phone</span>
                        <span class="info-value {{ $talent->phone ? '' : 'empty' }}">{{ $talent->phone ?? 'Not provided' }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Address</span>
                        <span class="info-value {{ $talent->address ? '' : 'empty' }}">{{ $talent->address ?? 'Not provided' }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Language</span>
                        <span class="info-value {{ $talent->language ? '' : 'empty' }}">{{ $talent->language ?? 'Not specified' }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Category</span>
                        <span class="info-value">{{ $talent->category->name ?? '—' }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Level</span>
                        <span class="info-value">
                            @if($talent->level)
                                <span class="level-pill">{{ ucfirst($talent->level) }}</span>
                            @else
                                <span class="empty">Not specified</span>
                            @endif
                        </span>
                    </div>
                </div>
            </div>

            {{-- Description --}}
            @if($talent->description)
            <div class="ui-card">
                <div class="card-header">
                    <div class="card-header-left">
                        <div class="card-header-icon" style="--icon-bg:var(--accent-light);--icon-color:var(--accent)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"/></svg>
                        </div>
                        <h2>Bio / Description</h2>
                    </div>
                </div>
                <div class="description-text">{{ $talent->description }}</div>
            </div>
            @endif

            {{-- Skills --}}
            <div class="ui-card">
                <div class="card-header">
                    <div class="card-header-left">
                        <div class="card-header-icon" style="--icon-bg:var(--accent-light);--icon-color:var(--accent)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/></svg>
                        </div>
                        <h2>Skills</h2>
                    </div>
                    <span class="count-pill">{{ $talent->skills->count() }}</span>
                </div>
                @if($talent->skills->count() > 0)
                <div class="skills-wrap">
                    @foreach($talent->skills as $skill)
                        <span class="skill-tag">{{ $skill->name }}</span>
                    @endforeach
                </div>
                @else
                <div class="sub-empty">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/></svg>
                    No skills added yet
                </div>
                @endif
            </div>

            {{-- Stories --}}
            <div class="ui-card">
                <div class="card-header">
                    <div class="card-header-left">
                        <div class="card-header-icon" style="--icon-bg:var(--info-bg);--icon-color:var(--info)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/></svg>
                        </div>
                        <h2>Stories</h2>
                    </div>
                    <span class="count-pill">{{ $talent->stories->count() }}</span>
                </div>
                @forelse($talent->stories->take(5) as $story)
                <div class="story-item">
                    @if(isset($story->image))
                        <img src="{{ asset($story->image) }}" alt="" class="story-thumb">
                    @endif
                    <div>
                        <div class="story-title">{{ $story->title ?? 'Untitled Story' }}</div>
                        <div class="story-date">{{ $story->created_at->format('d M Y') }}</div>
                    </div>
                </div>
                @empty
                <div class="sub-empty">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
                    No stories yet
                </div>
                @endforelse
            </div>

        </div>

        {{-- RIGHT col ── --}}
        <div class="col-12 col-lg-4 d-flex flex-column gap-4">

            {{-- Feedback --}}
            <div class="ui-card">
                <div class="card-header">
                    <div class="card-header-left">
                        <div class="card-header-icon" style="--icon-bg:var(--gold-bg);--icon-color:var(--gold)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/></svg>
                        </div>
                        <h2>Feedback</h2>
                    </div>
                    <span class="count-pill">{{ $talent->feedback->count() }}</span>
                </div>
                @forelse($talent->feedback->take(4) as $fb)
                <div class="feedback-item">
                    <div class="feedback-header">
                        <span class="feedback-author">{{ $fb->name ?? 'Anonymous' }}</span>
                        <span class="feedback-date">{{ $fb->created_at->format('d M Y') }}</span>
                    </div>
                    @if(isset($fb->rating))
                    <div class="stars">
                        @for($i = 1; $i <= 5; $i++){{ $i <= $fb->rating ? '★' : '☆' }}@endfor
                    </div>
                    @endif
                    <div class="feedback-text">{{ Str::limit($fb->message ?? $fb->comment ?? '', 120) }}</div>
                </div>
                @empty
                <div class="sub-empty">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/></svg>
                    No feedback yet
                </div>
                @endforelse
            </div>

            {{-- Connections --}}
            <div class="ui-card">
                <div class="card-header">
                    <div class="card-header-left">
                        <div class="card-header-icon" style="--icon-bg:var(--purple-bg);--icon-color:var(--purple)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>
                        </div>
                        <h2>Connections</h2>
                    </div>
                    <span class="count-pill">{{ $talent->connections->count() }}</span>
                </div>
                @forelse($talent->connections->take(6) as $conn)
                <div class="connection-item">
                    <div>
                        <div class="conn-name">{{ $conn->name ?? 'Connection #'.$conn->id }}</div>
                        <div class="conn-type">{{ $conn->type ?? 'General' }}</div>
                    </div>
                    <span class="conn-status {{ isset($conn->status) && $conn->status == 'active' ? 'conn-active' : 'conn-pending' }}">
                        {{ ucfirst($conn->status ?? 'pending') }}
                    </span>
                </div>
                @empty
                <div class="sub-empty">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>
                    No connections yet
                </div>
                @endforelse
            </div>

            {{-- Record Info --}}
            <div class="ui-card">
                <div class="card-header">
                    <div class="card-header-left">
                        <div class="card-header-icon" style="--icon-bg:#F3F4F6;--icon-color:var(--text-lo)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </div>
                        <h2>Record Info</h2>
                    </div>
                </div>
                <div class="card-body">
                    <div class="info-row">
                        <span class="info-label">Record ID</span>
                        <span class="info-value" style="font-family:monospace;font-size:12.5px;color:var(--text-lo)">#{{ $talent->id }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Created</span>
                        <span class="info-value" style="font-size:12.5px;">{{ $talent->created_at->format('d M Y, H:i') }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Updated</span>
                        <span class="info-value" style="font-size:12.5px;">{{ $talent->updated_at->diffForHumans() }}</span>
                    </div>
                    @if($talent->user)
                    <div class="info-row">
                        <span class="info-label">Owner</span>
                        <span class="info-value">{{ $talent->user->name }}</span>
                    </div>
                    @endif
                </div>
            </div>

        </div>
    </div>
</div>

@endsection