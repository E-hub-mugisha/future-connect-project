@extends('layouts.guest')
@section('content')

<div class="container">
    <div className="next-gen-section">
        <div className="container">
            <div className="section-header-two text-center" data-aos="fade-up">
                <h2 className="mb-2">
                    <span className="title-bg"></span>
                    Meet the {{ $categoryName }} talents
                    <span className="title-bg2"></span>
                </h2>
                <p>Connect with the next wave of talents, guiding you with fresh perspectives</p>
            </div>

            <div class="row seller-list">
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
                                            Rwanda <i class="ti ti-point-filled mx-1"></i> Total Stories:
                                            {{ $talent->stories_count ?? 0 }}
                                        </p>
                                        <div
                                            class="d-flex gap-2 align-items-center flex-wrap mt-3 justify-content-center">
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
</div>

@endsection
