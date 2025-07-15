@extends('layouts.guest')
@section('content')

<div class="breadcrumb-bar breadcrumb-bar-info">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="{{ route('user.home') }}">Home</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Talents</li>
                    </ol>
                </nav>

            </div>
        </div>
    </div>
</div>

<!-- next gen -->
<div class="talent-section-two next-gen-section">
    <div class="container">
        <div class="section-header-two text-center what-makes-left" data-aos="fade-up">
            <h2 class="mb-2" style="color: #011E34;"><span class="title-bg"></span>Meet the matched talents<span
                    class="title-bg2"></span></h2>
            <p style="color: #27AE60;">Connect with the next wave of talents, guiding you with fresh perspectives</p>
        </div>
        <div class="row seller-list">
            @forelse($matchedTalents as $talent)
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card" data-aos="flip-left">
                    <div class="card-body text-center">
                        <span class="avatar">
                            <a href="{{ route('user.talent.details', $talent->id) }}">
                                <img class="rounded-3"
                                    src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}"
                                    alt="img" />
                            </a>

                        </span>
                        <h6 class="mb-1">
                            <a
                                href="{{ route('user.talent.details', $talent->id) }}">{{ $talent->name }} <i class="ti ti-discount-check-filled verify-icon" style="color: #27AE60;"></i></a>
                        </h6>
                        <p>{{ $talent->category->name ?? 'Uncategorized' }}
                        </p>
                        <p class="mb-0 location-text d-inline-flex align-items-center">
                            <img src="/assets/img/flags/flag-for-rwanda.svg" alt="flag" class="me-1">
                            Rwanda <i class="ti ti-point-filled mx-1"></i> Total Stories: {{ $talent->stories_count ?? 0 }}
                        </p>
                        <div class="d-flex gap-2 align-items-center flex-wrap mt-3 justify-content-center">
                            <a href="{{ route('user.talent.details', $talent->id) }}"
                                class="badge bg-light">
                                {{ $talent->skill }}
                            </a>
                            <a href="{{ route('user.talent.details', $talent->id) }}"
                                class="badge bg-light">
                                {{ $talent->language }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            @empty
            <div class="col-12">
                <p class="text-center mt-4">No matched talents found.</p>
            </div>
            @endforelse
        </div>

    </div>
</div>


@endsection