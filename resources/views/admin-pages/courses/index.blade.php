@extends('layouts.app')

@section('title', 'Courses')

@section('content')
<style>
    :root{
        --c-bg:#f7f8fa;
        --c-card:#F5f5f7;
        --c-border:#e9ecf1;
        --c-text:#1f2430;
        --c-muted:#7b828f;
        --c-primary:#4f46e5;
        --c-primary-soft:#eef0ff;
        --c-success:#16a34a;
        --c-success-soft:#e9f9ee;
        --c-warning:#d97706;
        --c-warning-soft:#fff4e5;
        --c-danger:#dc2626;
        --c-danger-soft:#fdecec;
        --c-radius:14px;
    }
    .page-wrap{background:var(--c-bg);}
    .stat-card{
        background:var(--c-card);
        border:1px solid var(--c-border);
        border-radius:var(--c-radius);
        padding:1.25rem 1.5rem;
        height:100%;
        transition:transform .15s ease, box-shadow .15s ease;
    }
    .stat-card:hover{ transform:translateY(-2px); box-shadow:0 8px 24px rgba(31,36,48,.06); }
    .stat-icon{
        width:44px;height:44px;border-radius:12px;
        display:flex;align-items:center;justify-content:center;
        font-size:1.1rem;
    }
    .stat-value{ font-size:1.6rem; font-weight:700; color:var(--c-text); line-height:1; }
    .stat-label{ font-size:.8rem; color:var(--c-muted); font-weight:500; text-transform:uppercase; letter-spacing:.03em; }

    .filter-card{
        background:var(--c-card);
        border:1px solid var(--c-border);
        border-radius:var(--c-radius);
        padding:1.25rem;
    }
    .table-card{
        background:var(--c-card);
        border:1px solid var(--c-border);
        border-radius:var(--c-radius);
        overflow:hidden;
    }
    .table-modern thead th{
        background:#fafbfc;
        color:var(--c-muted);
        font-size:.72rem;
        text-transform:uppercase;
        letter-spacing:.04em;
        font-weight:700;
        border-bottom:1px solid var(--c-border);
        padding:.9rem 1rem;
        white-space:nowrap;
    }
    .table-modern td{
        padding:.9rem 1rem;
        vertical-align:middle;
        border-bottom:1px solid var(--c-border);
        color:var(--c-text);
    }
    .table-modern tbody tr:last-child td{ border-bottom:none; }
    .table-modern tbody tr{ transition:background .12s ease; }
    .table-modern tbody tr:hover{ background:#fafbfd; }

    .course-thumb{
        width:56px;height:56px;border-radius:10px;object-fit:cover;
        border:1px solid var(--c-border);
        background:#f1f2f5;
    }
    .course-title{ font-weight:600; color:var(--c-text); }
    .course-sub{ font-size:.78rem; color:var(--c-muted); }

    .badge-soft{
        font-weight:600; font-size:.72rem; padding:.4em .75em; border-radius:999px;
    }
    .badge-published{ background:var(--c-success-soft); color:var(--c-success); }
    .badge-draft{ background:var(--c-warning-soft); color:var(--c-warning); }
    .badge-free{ background:var(--c-primary-soft); color:var(--c-primary); }
    .badge-paid{ background:#f1f2f5; color:var(--c-text); }

    .btn-icon{
        width:34px;height:34px;border-radius:9px;
        display:inline-flex;align-items:center;justify-content:center;
        border:1px solid var(--c-border);
        background:#fff;color:var(--c-muted);
        transition:.15s ease;
    }
    .btn-icon:hover{ background:var(--c-primary-soft); color:var(--c-primary); border-color:var(--c-primary-soft); }
    .btn-icon.danger:hover{ background:var(--c-danger-soft); color:var(--c-danger); border-color:var(--c-danger-soft); }

    .btn-primary-soft{
        background:var(--c-primary);
        border:none;
        color:#fff;
        font-weight:600;
        border-radius:10px;
        padding:.55rem 1.1rem;
    }
    .btn-primary-soft:hover{ background:#4338ca; color:#fff; }

    .page-header h1{ font-size:1.4rem; font-weight:700; color:var(--c-text); }
    .page-header p{ color:var(--c-muted); font-size:.9rem; }

    .form-select, .form-control{
        border-radius:10px;
        border:1px solid var(--c-border);
        font-size:.875rem;
    }
    .form-select:focus, .form-control:focus{
        border-color:var(--c-primary);
        box-shadow:0 0 0 3px var(--c-primary-soft);
    }
</style>


<div class="page-wrap py-4">
    <div class="container-fluid">

        {{-- Header --}}
        <div class="d-flex flex-wrap justify-content-between align-items-center page-header mb-4">
            <div>
                <h1 class="mb-1">Courses</h1>
                <p class="mb-0">Manage, publish and track all platform courses</p>
            </div>
            <a href="{{ route('admin.courses.create') }}" class="btn btn-primary-soft mt-2 mt-md-0">
                <i class="bi bi-plus-lg me-1"></i> New Course
            </a>
        </div>

        {{-- Stats --}}
        <div class="row g-3 mb-4">
            <div class="col-6 col-md-3">
                <div class="stat-card d-flex align-items-center gap-3">
                    <div class="stat-icon" style="background:var(--c-primary-soft); color:var(--c-primary);">
                        <i class="bi bi-collection-play"></i>
                    </div>
                    <div>
                        <div class="stat-value">{{ $stats['total'] }}</div>
                        <div class="stat-label">Total Courses</div>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="stat-card d-flex align-items-center gap-3">
                    <div class="stat-icon" style="background:var(--c-success-soft); color:var(--c-success);">
                        <i class="bi bi-check-circle"></i>
                    </div>
                    <div>
                        <div class="stat-value">{{ $stats['published'] }}</div>
                        <div class="stat-label">Published</div>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="stat-card d-flex align-items-center gap-3">
                    <div class="stat-icon" style="background:var(--c-warning-soft); color:var(--c-warning);">
                        <i class="bi bi-pencil-square"></i>
                    </div>
                    <div>
                        <div class="stat-value">{{ $stats['draft'] }}</div>
                        <div class="stat-label">Drafts</div>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="stat-card d-flex align-items-center gap-3">
                    <div class="stat-icon" style="background:#f1f2f5; color:var(--c-text);">
                        <i class="bi bi-people"></i>
                    </div>
                    <div>
                        <div class="stat-value">{{ $stats['enrollments'] }}</div>
                        <div class="stat-label">Enrollments</div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Filters --}}
        <div class="filter-card mb-4">
            <form method="GET" action="{{ route('admin.courses.index') }}" class="row g-2 align-items-end">
                <div class="col-12 col-md-4">
                    <label class="form-label small text-muted mb-1">Search</label>
                    <input type="text" name="search" value="{{ request('search') }}" class="form-control" placeholder="Search by course title...">
                </div>
                <div class="col-6 col-md-2">
                    <label class="form-label small text-muted mb-1">Status</label>
                    <select name="status" class="form-select">
                        <option value="">All</option>
                        <option value="published" @selected(request('status')=='published')>Published</option>
                        <option value="draft" @selected(request('status')=='draft')>Draft</option>
                    </select>
                </div>
                <div class="col-6 col-md-2">
                    <label class="form-label small text-muted mb-1">Level</label>
                    <select name="level" class="form-select">
                        <option value="">All</option>
                        <option value="Beginner" @selected(request('level')=='Beginner')>Beginner</option>
                        <option value="Intermediate" @selected(request('level')=='Intermediate')>Intermediate</option>
                        <option value="Advanced" @selected(request('level')=='Advanced')>Advanced</option>
                    </select>
                </div>
                <div class="col-6 col-md-2">
                    <label class="form-label small text-muted mb-1">Category</label>
                    <select name="category_id" class="form-select">
                        <option value="">All</option>
                        @foreach($categories as $category)
                            <option value="{{ $category->id }}" @selected(request('category_id')==$category->id)>{{ $category->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="col-6 col-md-2 d-flex gap-2">
                    <button type="submit" class="btn btn-primary-soft flex-fill">
                        <i class="bi bi-funnel me-1"></i> Filter
                    </button>
                    <a href="{{ route('admin.courses.index') }}" class="btn btn-icon" title="Reset">
                        <i class="bi bi-arrow-counterclockwise"></i>
                    </a>
                </div>
            </form>
        </div>

        {{-- Table --}}
        <div class="table-card">
            <div class="table-responsive">
                <table class="table table-modern mb-0">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Talent</th>
                            <th>Category</th>
                            <th>Level</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Enrollments</th>
                            <th class="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($courses as $course)
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="{{ $course->thumbnail ? asset('images/thumbnails/'.$course->thumbnail) : asset('images/placeholder-course.png') }}"
                                             class="course-thumb" alt="{{ $course->title }}">
                                        <div>
                                            <div class="course-title">{{ $course->title }}</div>
                                            <div class="course-sub">{{ \Illuminate\Support\Str::limit($course->description, 40) }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ $course->talent->name ?? '—' }}</td>
                                <td>{{ $course->category->name ?? '—' }}</td>
                                <td>
                                    <span class="badge-soft" style="background:#f1f2f5;color:#1f2430;">{{ $course->level }}</span>
                                </td>
                                <td>
                                    @if($course->is_free)
                                        <span class="badge-soft badge-free">Free</span>
                                    @else
                                        <span class="badge-soft badge-paid">{{ number_format($course->price, 0) }} RWF</span>
                                    @endif
                                </td>
                                <td>
                                    @if($course->status == 'published')
                                        <span class="badge-soft badge-published">Published</span>
                                    @else
                                        <span class="badge-soft badge-draft">Draft</span>
                                    @endif
                                </td>
                                <td>
                                    <span class="fw-semibold">{{ $course->enrollments_count }}</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex justify-content-end gap-2">
                                        <a href="{{ route('admin.courses.show', $course->slug) }}" class="btn-icon" title="View">
                                            <i class="bi bi-eye"></i>
                                        </a>
                                        <a href="{{ route('admin.courses.edit', $course->id) }}" class="btn-icon" title="Edit">
                                            <i class="bi bi-pencil"></i>
                                        </a>
                                        <form action="{{ route('admin.courses.destroy', $course->id) }}" method="POST"
                                              onsubmit="return confirm('Delete this course? This action cannot be undone.');">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn-icon danger" title="Delete">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="8" class="text-center py-5 text-muted">
                                    <i class="bi bi-inbox fs-3 d-block mb-2"></i>
                                    No courses found.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            @if($courses->hasPages())
                <div class="p-3 border-top">
                    {{ $courses->links() }}
                </div>
            @endif
        </div>

    </div>
</div>
@endsection