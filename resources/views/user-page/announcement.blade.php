@extends('layouts.guest')
@section('content')
<div>

    <div class="breadcrumb-bar breadcrumb-bar-info">
        
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="/">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Announcements</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title mb-0">
                        Announcements <span class="text-primary"></span>
                    </h2>
                </div>
            </div>
        </div>
    </div>


    <div class="page-content content">
        <div class="container">
            <div class="row">
                @foreach($announcements as $ann)
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="testimonial-slider-card">
                        <div class="testimonial-item">
                            <div class="testimonial-icon"><i class="ti ti-bell"></i></div>
                            <h5 class="mb-2">{{ $ann->title }}</h5>
                            <p class="mb-3">
                                {{ \Illuminate\Support\Str::limit($ann->content, 100, '...') }}
                            </p>
                            <div class="testimonial-review d-flex align-items-center justify-content-between">
                                <div class="testimonial-user p-0">
                                    <img src="{{ asset('assets/img/user/admin.jpg') }}"
                                        alt="img" />
                                    <div class="testimonial-info">
                                        <h6>Product Team</h6>
                                        <p>{{ \Carbon\Carbon::parse($ann->created_at)->diffForHumans() }}</p>
                                    </div>
                                </div>
                                <div class="star-rate m-0 bg-light">
                                    <a href="{{ route('user.announcement.details', $ann->id ) }}">
                                        <span class="text-muted">
                                            View Details
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach

            </div>
        </div>
    </div>

</div>

@endsection