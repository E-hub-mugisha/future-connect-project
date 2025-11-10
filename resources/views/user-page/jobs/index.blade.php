@extends('layouts.guest')
@section('title', 'Job Opportunities')
@section('content')

<div class="page-content content">
    <div class="container">
        <!-- Service -->
        <div class="service-gigs">
            <div class="row">
                <div class="section-header-two text-center">
                    <h2 class="mb-2"><span class="title-bg"></span>Our New opportunities<span class="title-bg2"></span></h2>
                    <p>Unlock a world of opportunities and take control of your future</p>
                </div>
                <div class="col-lg-12">
                    <div class="row">
                        @foreach($jobs as $job)
                        <!-- Service List -->
                        <div class="col-lg-4 col-md-6">
                            <div class="gigs-grid postLists">
                                <div class="gigs-img mb-3">
                                    <div class="card-overlay-badge">
                                        <a href="{{ route('user.jobs.show',$job->id) }}"><span class="badge bg-warning"><i class="feather-star"></i>{{ $job->type ?? 'Full-time' }}</span></a>
                                        <a href="{{ route('user.jobs.show',$job->id) }}"><span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>{{ $job->status ?? 'Open' }}</span></a>
                                    </div>
                                </div>
                                <div class="gigs-content">
                                    <div class="gigs-info mt-4">
                                        <a href="{{ route('user.jobs.show',$job->id) }}" class="badge bg-primary-light">{{ $job->experience_level ?? 'Any' }}</a>
                                        <p><i class="ti ti-map-pin-check"></i>{{ $job->location ?? 'Remote' }}</p>
                                    </div>
                                    <div class="gigs-title">
                                        <h3>
                                            <a href="{{ route('user.jobs.show',$job->id) }}">{{ $job->title }}</a>
                                        </h3>
                                    </div>
                                    <div class="star-rate">
                                        <span><i class="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
                                    </div>
                                    <div class="gigs-card-footer">
                                        <h5>{{ $job->company->name }}</h5>
                                        <div>
                                            <span class="badge">{{ $job->location ?? 'Remote' }}</span>
                                        </div>
                                        <a href="{{ route('user.jobs.show',$job->id) }}" class="btn btn-primary float-end rounded-pill">View & Apply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Service List -->
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        <!-- /Service -->
    </div>
</div>
@endsection