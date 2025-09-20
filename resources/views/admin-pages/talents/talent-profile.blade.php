@extends('layouts.app')
@section('title', $talent->name. ' Profile')
@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="nk-block-head nk-block-head-sm">
                <div class="nk-block-between g-3">
                    <div class="nk-block-head-content">
                        <h3 class="nk-block-title page-title">Talent / <strong
                                class="text-primary small">{{ $talent->name }}</strong></h3>
                        <div class="nk-block-des text-soft">
                            <ul class="list-inline">
                                <li>User ID: <span class="text-base">{{ $talent->ID }}</span></li>
                                <li>Joined Since: <span class="text-base">{{ \Carbon\Carbon::parse($talent->created_at)->format('F d, Y') }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="nk-block-head-content"><a href="/admin/talents"
                            class="btn btn-outline-light bg-white d-none d-sm-inline-flex"><em
                                class="icon ni ni-arrow-left"></em><span>Back</span></a><a
                            href="/admin/talents"
                            class="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"><em
                                class="icon ni ni-arrow-left"></em></a>
                    </div>
                </div>
            </div>
            <div class="nk-block">
                <div class="card card-bordered">
                    <div class="card-aside-wrap">
                        <div class="card-content">
                            <!-- Nav Tabs -->
                            <ul class="nav nav-tabs nav-tabs-mb-icon nav-tabs-card" id="talentTabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="personal-tab" data-bs-toggle="tab" data-bs-target="#personal" type="button" role="tab" aria-controls="personal" aria-selected="true">
                                        <em class="icon ni ni-user-circle"></em><span>Personal</span>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="stories-tab" data-bs-toggle="tab" data-bs-target="#stories" type="button" role="tab" aria-controls="stories" aria-selected="false">
                                        <em class="icon ni ni-repeat"></em><span>Stories ({{ $talent->stories->count() }})</span>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">
                                        <em class="icon ni ni-file-text"></em><span>Skills ({{ $talent->skills->count() }})</span>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">
                                        <em class="icon ni ni-bell"></em><span>Reviews ({{ $talent->feedback->count() }})</span>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="activities-tab" data-bs-toggle="tab" data-bs-target="#activities" type="button" role="tab" aria-controls="activities" aria-selected="false">
                                        <em class="icon ni ni-activity"></em><span>Activities</span>
                                    </button>
                                </li>
                            </ul>

                            <!-- Tab Content -->
                            <div class="tab-content card-inner" id="talentTabsContent">
                                <!-- Personal Tab -->
                                <div class="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                                    <div class="nk-block">
                                        <div class="nk-block-head">
                                            <h5 class="title">Personal Information</h5>
                                            <p>Basic info, like your name and address.</p>
                                        </div>
                                        <div class="profile-ud-list">
                                            <div class="profile-ud-item">
                                                <div class="profile-ud wider"><span class="profile-ud-label">Full Name</span><span class="profile-ud-value">{{ $talent->name }}</span></div>
                                            </div>
                                            <div class="profile-ud-item">
                                                <div class="profile-ud wider"><span class="profile-ud-label">Date Joined</span><span class="profile-ud-value">{{ \Carbon\Carbon::parse($talent->created_at)->format('F d, Y') }}</span></div>
                                            </div>
                                            <div class="profile-ud-item">
                                                <div class="profile-ud wider"><span class="profile-ud-label">Language</span><span class="profile-ud-value">{{ $talent->language }}</span></div>
                                            </div>
                                            <div class="profile-ud-item">
                                                <div class="profile-ud wider"><span class="profile-ud-label">Mobile Number</span><span class="profile-ud-value">{{ $talent->phone }}</span></div>
                                            </div>
                                            <div class="profile-ud-item">
                                                <div class="profile-ud wider"><span class="profile-ud-label">Email Address</span><span class="profile-ud-value">{{ $talent->email }}</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="nk-block">
                                        <div class="nk-block-head nk-block-head-line">
                                            <h6 class="title overline-title text-base">Additional Information</h6>
                                        </div>
                                        <div class="profile-ud-list">
                                            <div class="profile-ud-item">
                                                <div class="profile-ud wider"><span class="profile-ud-label">Country</span><span class="profile-ud-value">Rwanda</span></div>
                                            </div>
                                            <div class="profile-ud-item">
                                                <div class="profile-ud wider"><span class="profile-ud-label">Address</span><span class="profile-ud-value">{{ $talent->address }}</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="nk-divider divider md"></div>

                                    <div class="nk-block">
                                        <div class="nk-block-head nk-block-head-sm nk-block-between">
                                            <h5 class="title">About Note</h5>
                                            <a href="#" class="link link-sm">+ Add About</a>
                                        </div>
                                        <div class="bq-note">
                                            <div class="bq-note-item">
                                                <div class="bq-note-text">
                                                    <p>{{ $talent->description ?? 'No description available.' }}</p>
                                                </div>
                                                <div class="bq-note-meta">
                                                    <span class="bq-note-added">Added on <span class="date">{{ \Carbon\Carbon::parse($talent->updated_at)->format('F d, Y') }}</span></span>
                                                    <span class="bq-note-by">By <span>{{ $talent->name }}</span></span>
                                                    <a href="#" class="link link-sm link-danger">Update Note</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Stories Tab -->
                                <div class="tab-pane fade" id="stories" role="tabpanel" aria-labelledby="stories-tab">
                                    <div class="card-inner">
                                        <table class="datatable-init nowrap table">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Talent</th>
                                                    <th>Category</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach($talent->stories as $story)
                                                <tr>
                                                    <td>{{ $story->title }}</td>
                                                    <td>{{ $story->talent?->name ?? 'N/A' }}</td>
                                                    <td>{{ $story->category?->name ?? 'N/A' }}</td>
                                                    <td>{{ ucfirst($story->status) }}</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $story->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Actions
                                                            </button>
                                                            <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $story->id }}">
                                                                <li>
                                                                    <a class="dropdown-item" href="{{ route('admin.stories.show', $story->id) }}">Quick View</a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="{{ route('admin.stories.edit', $story->id) }}">Edit</a>
                                                                </li>

                                                                <li>
                                                                    <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $story->id }}">Delete</a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </td>
                                                </tr>
                                                @endforeach
                                            </tbody>
                                        </table>

                                        @foreach($talent->stories as $story)
                                        <!-- Delete Modal -->
                                        <div class="modal fade" id="deleteModal{{ $story->id }}" tabindex="-1"
                                            aria-labelledby="deleteModalLabel{{ $story->id }}" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <form action="{{ route('admin.stories.destroy', $story->id) }}"
                                                    method="POST" class="modal-content">
                                                    @csrf
                                                    @method('DELETE')

                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="deleteModalLabel{{ $story->id }}">
                                                            Confirm Delete
                                                        </h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Are you sure you want to delete this story? This action cannot be undone.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                        <button type="submit" class="btn btn-danger">Yes, Delete</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        @endforeach

                                    </div>
                                </div>

                                <!-- Skills Tab -->
                                <div class="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
                                    <div class="card-inner">
                                        <table class="datatable-init nowrap table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Talent</th>
                                                    <th>Category</th>
                                                    <th>Status</th>
                                                    <th>Level</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach($talent->skills as $skill)
                                                <tr>
                                                    <td>{{ $skill->name }}</td>
                                                    <td>{{ $skill->talent->name ?? 'N/A' }}
                                                    </td>
                                                    <td>{{ $skill->category->name ?? 'N/A' }}
                                                    </td>
                                                    <td>{{ ucfirst($skill->status) }}</td>
                                                    <td>{{ ucfirst($skill->level) }}</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $skill->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Actions
                                                            </button>
                                                            <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $skill->id }}">
                                                                <li>
                                                                    <a class="dropdown-item" href="{{ route('admin.skills.show', $skill->id) }}">Quick View</a>
                                                                </li>
                                                                <li>
                                                                    <a class="dropdown-item" href="{{ route('admin.skills.edit', $skill->id) }}">Edit</a>
                                                                </li>

                                                                <li>
                                                                    <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $skill->id }}">Delete</a>
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

                                <!-- Reviews Tab -->
                                <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                    @forelse($talent->feedback as $fb)
                                    <div class="card card-bordered mb-2">
                                        <div class="card-inner py-3">
                                            <div class="d-sm-flex align-items-sm-center justify-content-sm-between">
                                                <div class="pb-1 pb-sm-0">
                                                    <h5 class="title">{{ $fb->comment }}</h5>
                                                    <div class="d-flex">
                                                        <p class="m-0 pe-2">by <a href="#" target="_blank">{{ $fb->name }}</a></p><span>{{ $fb->created_at->diffForHumans() }}</span>
                                                    </div>
                                                </div>
                                                <ul class="rating">
                                                    <li>
                                                        @for($i = 1; $i <= 5; $i++)
                                                            <em class="icon ni ni-star-fill {{ $i <= $fb->rating ? 'filled' : '' }}"></em>
                                                        @endfor
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    @empty
                                    <li>No reviews yet.</li>
                                    @endforelse
                                </div>


                                <!-- Activities Tab -->
                                <div class="tab-pane fade" id="activities" role="tabpanel" aria-labelledby="activities-tab">
                                    <p>No activities recorded.</p>
                                </div>
                            </div>
                        </div>

                        <div class="card-aside card-aside-right user-aside toggle-slide toggle-slide-right toggle-break-xxl"
                            data-content="userAside" data-toggle-screen="xxl"
                            data-toggle-overlay="true" data-toggle-body="true">
                            <div class="card-inner-group" data-simplebar>
                                <div class="card-inner">
                                    <div class="user-card user-card-s2">
                                        <div class="user-avatar lg"><img src="{{ asset('image/talents/' . $talent->image) }}"
                                                alt="Talent Image" class="img-fluid rounded"></div>
                                        <div class="user-info">
                                            <div class="badge bg-outline-light rounded-pill ucap">
                                                {{ $talent->category->name ?? 'Uncategorized' }}
                                            </div>
                                            <h5>{{ $talent->name }}</h5><span
                                                class="sub-text">{{ $talent->email }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-inner card-inner-sm">
                                    <ul class="btn-toolbar justify-center gx-1">
                                        <li><a href="#" class="btn btn-trigger btn-icon"><em
                                                    class="icon ni ni-shield-off"></em></a></li>
                                        <li><a href="#" class="btn btn-trigger btn-icon"><em
                                                    class="icon ni ni-mail"></em></a></li>
                                        <li><a href="#" class="btn btn-trigger btn-icon"><em
                                                    class="icon ni ni-download-cloud"></em></a></li>
                                        <li><a href="#" class="btn btn-trigger btn-icon"><em
                                                    class="icon ni ni-bookmark"></em></a></li>
                                        <li><a href="#"
                                                class="btn btn-trigger btn-icon text-danger"><em
                                                    class="icon ni ni-na"></em></a></li>
                                    </ul>
                                </div>
                                <div class="card-inner">
                                    <div class="row text-center">
                                        <div class="col-4">
                                            <div class="profile-stats"><span
                                                    class="amount">{{ $talent->stories_count ?? 0 }}</span><span
                                                    class="sub-text">Total Stories</span></div>
                                        </div>
                                        <div class="col-4">
                                            <div class="profile-stats"><span
                                                    class="amount">{{ $talent->skills_count ?? 0 }}</span><span
                                                    class="sub-text">Skills</span></div>
                                        </div>
                                        <div class="col-4">
                                            <div class="profile-stats"><span
                                                    class="amount">{{ number_format($talent->feedback->avg('rating'), 1) }} ({{ $talent->feedback->count() }} Reviews)</span><span
                                                    class="sub-text">Ratings</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-inner">
                                    <h6 class="overline-title-alt mb-2">Additional</h6>
                                    <div class="row g-3">
                                        <div class="col-6"><span class="sub-text">User
                                                ID:</span><span>{{ $talent->id }}</span></div>
                                        <div class="col-6"><span class="sub-text">Last
                                                Login:</span><span>{{ \Carbon\Carbon::parse($talent->updated_at)->format('F d, Y') }}</span>
                                        </div>
                                        <div class="col-6"><span class="sub-text">Talent
                                                Status:</span><span
                                                class="lead-text text-success">{{ $talent->status }}</span></div>
                                        <div class="col-6"><span class="sub-text">Register
                                                At:</span><span>{{ \Carbon\Carbon::parse($talent->created_at)->format('F d, Y') }}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection