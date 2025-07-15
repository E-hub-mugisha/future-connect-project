@extends('layouts.guest')
@section('content')

<div>
    <!-- new services -->
    <div class="new-services-section">
        <div class="container">
            <div class="section-header-two text-center" data-aos="fade-up">
                <h2 class="mb-2"><span class="title-bg"></span>Our New Skills<span class="title-bg2"></span></h2>
                <p>Unlock a world of opportunities and take control of your future</p>
            </div>
            <div class="listing-tab" data-aos="fade-up">
                <div class="listing-slider">
                    <ul class="nav nav-tabs justify-content-center" id="skillsCategoryTabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="tab-all" data-category="All" role="tab">
                                All
                            </a>
                        </li>
                        @foreach($categories as $category)
                        <li class="nav-item" role="presentation">
                            <a class="nav-link"
                                id="tab-{{ \Illuminate\Support\Str::slug($category->name) }}"
                                data-category="{{ $category->name }}" role="tab">
                                {{ $category->name }}
                            </a>
                        </li>
                        @endforeach
                    </ul>
                </div>
            </div>

            <div class="tab-content" data-aos="fade-up" id="skillsContent">
                <div class="row">
                    @forelse($skills as $skill)
                    <div class="col-xl-4 col-md-6 skill-card"
                        data-category="{{ $skill->category->name ?? 'Uncategorized' }}">
                        <div class="gigs-grid">
                            <div class="gigs-img">
                                <div class="img-slider owl-carousel">
                                    <div class="slide-images">
                                        <a href="{{ url('skills/category/' . $skill->slug) }}">
                                            <img src="{{ asset('assets/img/home/service-01.jpg') }}" class="img-fluid" alt="Gigs">
                                        </a>
                                    </div>

                                </div>
                                <div class="card-overlay-badge">
                                    <a href="{{ url('skills/category/'.$skill->slug) }}">
                                        <span class="badge bg-warning">
                                            <i class="feather-star"></i>{{ $skill->category->name ?? 'Uncategorized' }}
                                        </span>
                                    </a>
                                    <a href="{{ url('skills/category/'.$skill->slug) }}">
                                        <span class="badge bg-danger">
                                            <i class="fa-solid fa-meteor"></i>
                                            {{ $skill->level }}
                                        </span>
                                    </a>
                                </div>
                                <div class="fav-selection">
                                    <a role="button" tabindex="0"><i class="feather-video"></i></a>
                                    <a role="button" tabindex="0" class="fav-icon"><i
                                            class="feather-heart"></i></a>
                                </div>
                            </div>
                            <div class="gigs-content">
                                <div class="gigs-info">
                                    <div>
                                        <a href="{{ url('skills/'.$skill->category->slug ?? '') }}"
                                            class="badge bg-light">
                                            {{ $skill->category->name ?? 'Uncategorized' }}
                                        </a>
                                        <span class="ms-2">+1</span>
                                    </div>
                                    <div class="star-rate">
                                        <span>
                                            <i class="fa-solid fa-star"></i>
                                            {{ $skill->average_rating ? number_format($skill->average_rating, 1) : '0.0' }}
                                            ({{ $skill->total_reviews ?? 0 }} Reviews)
                                        </span>
                                    </div>
                                </div>
                                <div class="gigs-title">
                                    <h5><a
                                            href="{{ url('skills/'.$skill->slug) }}">{{ $skill->name }}</a>
                                    </h5>
                                </div>
                                <div class="gigs-card-footer d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center gigs-left-text">
                                        <a href="{{ url('/talent/' . $skill->talent->id) }}" class="avatar avatar-sm flex-shrink-0">
                                            <img src="{{ $skill->talent->image ? asset('image/talents/' . $skill->talent->image) : asset('/assets/img/user/profile.jpg') }}"
                                                class="img-fluid rounded-pill" alt="img" />
                                        </a>
                                        <div class="ms-2">
                                            <h6 class="mb-0">
                                                <a role="button"
                                                    tabindex="0">{{ $skill->talent->name ?? 'Author' }}</a>
                                            </h6>

                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <span>{{ $skill->tags }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @empty
                    <p class="text-center mt-4">No skills found.</p>
                    @endforelse
                </div>
            </div>


        </div>
    </div>
    <!-- new services -->

</div>
@endsection