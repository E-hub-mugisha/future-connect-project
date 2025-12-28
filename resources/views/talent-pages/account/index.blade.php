@extends('layouts.talents')
@section('title', 'Profile')
@section('content')

<div class="az-content az-content-profile">
    <div class="container mn-ht-100p">
        <div class="az-content-left az-content-left-profile">

            <div class="az-profile-overview">
                <div class="az-img-user">
                    <img src="{{ $talent->profile_photo ?? '../img/faces/face10.jpg' }}" alt="">
                </div>

                <div class="d-flex justify-content-between mg-b-20">
                    <div>
                        <h5 class="az-profile-name">{{ $talent->name }}</h5>
                        <p class="az-profile-name-text">{{ $talent->category->name ?? 'No Category' }}</p>
                    </div>
                </div>

                <div class="az-profile-bio">
                    {{ $talent->description }}
                </div>

                <hr class="mg-y-30">

                <label class="az-content-label tx-13 mg-b-20">Social Links</label>
                <div class="az-profile-social-list">
                    @if($talent->github)
                    <div class="media">
                        <div class="media-icon"><i class="icon ion-logo-github"></i></div>
                        <div class="media-body">
                            <span>Github</span>
                            <a href="{{ $talent->github }}" target="_blank">{{ $talent->github }}</a>
                        </div>
                    </div>
                    @endif

                    @if($talent->twitter)
                    <div class="media">
                        <div class="media-icon"><i class="icon ion-logo-twitter"></i></div>
                        <div class="media-body">
                            <span>Twitter</span>
                            <a href="{{ $talent->twitter }}" target="_blank">{{ $talent->twitter }}</a>
                        </div>
                    </div>
                    @endif

                    @if($talent->linkedin)
                    <div class="media">
                        <div class="media-icon"><i class="icon ion-logo-linkedin"></i></div>
                        <div class="media-body">
                            <span>LinkedIn</span>
                            <a href="{{ $talent->linkedin }}" target="_blank">{{ $talent->linkedin }}</a>
                        </div>
                    </div>
                    @endif
                </div>

            </div><!-- az-profile-overview -->
        </div><!-- az-content-left -->


        <div class="az-content-body az-content-body-profile">

            <nav class="nav az-nav-line" role="tablist">
                <a class="nav-link active" data-bs-toggle="tab" href="#overviewTab">Overview</a>
                <a class="nav-link" data-bs-toggle="tab" href="#reviewsTab">Reviews</a>
                <a class="nav-link" data-bs-toggle="tab" href="#coursesTab">Courses</a>
                <a class="nav-link" data-bs-toggle="tab" href="#accountTab">Account Settings</a>
            </nav>


            <div class="tab-content az-profile-body">

                {{-- ================= OVERVIEW ================= --}}
                <div class="tab-pane fade show active" id="overviewTab">
                    <div class="row mg-b-20">
                        <div class="col-md-7 col-xl-8">
                            <div class="az-profile-view-chart">
                                <canvas id="chartArea"></canvas>
                            </div>
                        </div>

                        <div class="col-md-5 col-xl-4 mg-t-40 mg-md-t-0">
                            <div class="az-content-label tx-13 mg-b-25">Contact Information</div>
                            <div class="az-profile-contact-list">
                                <div class="media">
                                    <div class="media-icon"><i class="icon ion-md-phone-portrait"></i></div>
                                    <div class="media-body">
                                        <span>Mobile</span>
                                        <div>{{ $talent->phone }}</div>
                                    </div>
                                </div>

                                <div class="media">
                                    <div class="media-icon"><i class="icon ion-logo-slack"></i></div>
                                    <div class="media-body">
                                        <span>Email</span>
                                        <div>{{ $talent->email }}</div>
                                    </div>
                                </div>

                                <div class="media">
                                    <div class="media-icon"><i class="icon ion-md-locate"></i></div>
                                    <div class="media-body">
                                        <span>Address</span>
                                        <div>{{ $talent->address }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {{-- ================= REVIEWS ================= --}}
                <div class="tab-pane fade" id="reviewsTab">
                    <h5 class="mb-3">Reviews</h5>

                    @forelse($talent->feedback as $review)
                    <div class="card mb-3 p-3">
                        <strong>{{ $review->reviewer_name ?? 'Anonymous' }}</strong>
                        <span class="text-warning">⭐ {{ $review->rating }}/5</span>
                        <p class="mt-2">{{ $review->comment }}</p>
                        <small class="text-muted">{{ $review->created_at->diffForHumans() }}</small>
                    </div>
                    @empty
                    <p>No reviews yet.</p>
                    @endforelse
                </div>


                {{-- ================= COURSES ================= --}}
                <div class="tab-pane fade" id="coursesTab">
                    <h5 class="mb-3">Courses</h5>

                    @forelse($talent->courses as $course)
                    <div class="card mb-3 p-3">
                        <h6>{{ $course->title }}</h6>
                        <p>{{ $course->description }}</p>
                        <small class="text-muted">{{ $course->category->name }}</small>
                    </div>
                    @empty
                    <p>No courses available.</p>
                    @endforelse
                </div>


                {{-- ================= ACCOUNT SETTINGS ================= --}}
                <div class="tab-pane fade" id="accountTab">
                    <h5 class="mb-3">Account Settings</h5>

                    @if(session('success'))
                    <div class="alert alert-success">
                        {{ session('success') }}
                    </div>
                    @endif

                    <form action="{{ route('talent.profile.update', $talent->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <div class="row">

                            <div class="col-md-6">
                                <label>Name</label>
                                <input type="text" name="name" class="form-control" value="{{ $talent->name }}">
                            </div>

                            <div class="col-md-6">
                                <label>Level</label>
                                <input type="text" name="level" class="form-control" value="{{ $talent->level }}">
                            </div>

                            <div class="col-md-12">
                                <label>Description</label>
                                <textarea name="description" class="form-control" rows="4">{{ $talent->description }}</textarea>
                            </div>

                            <div class="col-md-6">
                                <label>Address</label>
                                <input type="text" name="address" class="form-control" value="{{ $talent->address }}">
                            </div>

                            <div class="col-md-6">
                                <label>Phone</label>
                                <input type="text" name="phone" class="form-control" value="{{ $talent->phone }}">
                            </div>

                            <div class="col-md-6">
                                <label>Language</label>
                                <input type="text" name="language" class="form-control" value="{{ $talent->language }}">
                            </div>

                            <div class="col-md-6">
                                <label>Category</label>
                                <select name="category_id" class="form-control">
                                    @foreach($categories as $category)
                                    <option value="{{ $category->id }}" {{ $talent->category_id == $category->id ? 'selected' : '' }}>
                                        {{ $category->name }}
                                    </option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="col-md-12">
                                <label>Profile Image</label><br>
                                <img src="{{ asset('storage/'.$talent->image) }}" width="120" class="mb-2">
                                <input type="file" name="image" class="form-control">
                            </div>

                            <div class="col-md-12 mt-3">
                                <button class="btn btn-primary">Update Profile</button>
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div><!-- az-content-body -->
    </div>
</div>

@endsection