@extends('layouts.guest')
@section('content')

<div>
    <div class="breadcrumb-bar breadcrumb-bar-info">
        <div class="breadcrumb-img">
            <div class="breadcrumb-left">
                <img src="{{ asset('assets/img/bg/banner-bg-03.png') }}" alt="img" />
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="{{ url('/') }}">Home</a>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">Talents</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title mb-0">
                        Featured Talents on <span class="text-primary">Future Connect</span>
                    </h2>
                </div>
            </div>
        </div>
    </div>

    <div class="next-gen-section">
        <div class="container">
            <div class="section-header-two text-center" data-aos="fade-up">
                <h2 class="mb-2"><span class="title-bg"></span>Meet the Next Generation of talents<span class="title-bg2"></span></h2>
                <p>Connect with the next wave of talents, guiding you with fresh perspectives</p>
            </div>

            @if($loading ?? false)
            <p class="text-center">Loading...</p>
            @else
            <div class="row seller-list">
                @forelse($talents as $talent)
                <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card" data-aos="flip-left">
                        <div class="card-body text-center">
                            <span class="avatar">
                                <a href="{{ url('/talent/' . $talent->id) }}">
                                    <img class="rounded-pill"
                                        src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}"
                                        alt="img" height="50" width="50">

                                </a>
                                <i class="ti ti-discount-check-filled verify-icon"></i>
                            </span>
                            <h6 class="mb-1">
                                <a
                                    href="{{ url('/talent/' . $talent->id) }}">{{ $talent->name }}</a>
                            </h6>
                            <p>{{ $talent->category->name ?? 'Uncategorized' }}
                            </p>
                            <p class="mb-0 location-text d-inline-flex align-items-center">
                                <img src="/assets/img/flags/flag-for-rwanda.svg" alt="flag" class="me-1">
                                Rwanda <i class="ti ti-point-filled mx-1"></i> Total Stories: {{ $talent->stories_count ?? 0 }}
                            </p>
                            <div class="d-flex gap-2 align-items-center flex-wrap mt-3 justify-content-center">
                                <a href="{{ url('/talent/' . $talent->id) }}"
                                    class="badge bg-light">
                                    {{ $talent->skill }}
                                </a>
                                <a href="{{ url('/talent/' . $talent->id) }}"
                                    class="badge bg-light">
                                    {{ $talent->language }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                @empty
                <p class="text-center">No talents found.</p>
                @endforelse
            </div>

            <div class="text-center mt-3" data-aos="fade-up">
                <a href="{{ url('talents') }}" class="btn btn-lg btn-dark">
                    Load more Talents
                </a>
            </div>
            @endif
        </div>
    </div>
</div>

@endsection