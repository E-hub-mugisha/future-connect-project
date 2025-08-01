@extends('layouts.guest')
@section('content')


<style>
    .talent-card {
        background: #fff;
        border-radius: 12px;
        padding: 15px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        transition: transform 0.4s;
    }

    .talent-img-wrapper {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transform: rotateY(0);
        transition: transform 0.5s ease-in-out;
    }

    .talent-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .swiper-slide:hover .talent-card {
        transform: scale(1.05) rotateY(5deg);
    }
</style>


<style>
    .postLists.cards .post-item.m-card {
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        text-align: center;
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 4.75rem;

    }

    .postLists.cards .post-item.m-card .img {
        position: relative;
        display: block;
        /* margin-top: -.625em; */
        width: calc(100% - .85em);
        /* padding-top: calc(89.45% - .67em); */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: .75em;
        box-shadow: 1px 0 rgba(255, 255, 255, .5), -1px 0 rgba(255, 255, 255, .5), 0 1px rgba(255, 255, 255, .5), 0 .5em 1.2em var(--s-color);
        -webkit-box-shadow: 1px 0 rgba(255, 255, 255, .5), -1px 0 rgba(255, 255, 255, .5), 0 1px rgba(255, 255, 255, .5), 0 .5em 1.2em var(--s-color);
        transform: translateZ(0);
        transition: .25s;
    }

    .postLists.cards .post-item.m-card .infos {
        width: 100%;
    }

    .postLists.cards .post-item.m-card .title {
        font-size: 16px;
        /* padding: 0 .5em; */
        margin: 1em 0 .5em;
        overflow: hidden;
        max-width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        text-shadow: 0 1px #fff;
        transition: .25s;
        white-space: normal;
    }

    /* .postLists.cards .post-card-wrapper {
        width: 20%;
    } */

    .postLists .post-card-wrapper {
        z-index: 1;
    }

    .postLists.cards .post-item.m-card .go {
        display: inline-block;
        min-width: 50%;
        background: linear-gradient(90deg, #3b3d4a, #3b3d4a);
        box-shadow: 0 .5em 1.2em #3b3d4a;
        font-size: 14px;
        margin: .3em 0 1.5em;
        padding: .45em 1.5em;
        border-radius: 9em;
        text-decoration: none;
        color: #fff;
        text-shadow: 0 2px 3px #3b3d4a;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .postLists.cards .post-item.m-card .go:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        z-index: 10;
    }

    .card.post-item.m-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card.post-item.m-card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        z-index: 10;
    }
</style>

<div class="talent-section-two next-gen-section" style="background: #aac2e1a8;">
    <div class="container">
        <div class="section-header-two text-center what-makes-left" data-aos="fade-up">
            <h2 class="mb-2" style="color: #011E34;"><span class="title-bg"></span>Meet the {{ $categoryName }} talents<span
                    class="title-bg2"></span></h2>
            <p style="color: #319BF9;">Connect with the next wave of talents, guiding you with fresh perspectives</p>
        </div>

        <div class="row seller-list postLists cards">
            @if($loading ?? false)
            <p class="text-center">Loading...</p>
            @else
            <div class="row seller-list postLists cards">
                @forelse($talents as $talent)
                <div class="col-xl-3 col-lg-4 col-md-6 post-card-wrapper">
                <div class="card post-item m-card" data-aos="flip-left">
                    <div class="card-body text-center">
                        <div class="avatar d-inline-block mb-3" style="width: 120px; height: 120px; overflow: hidden;">
                            <a href="{{ route('user.talent.details', $talent->id) }}">
                                <img class="img rounded-3 w-100 h-100" style="object-fit: cover;" src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('assets/img/user/profile.jpg') }}" alt="img" />
                            </a>
                        </div>

                        <h6 class="mb-1">
                            <a href="{{ route('user.talent.details', $talent->id) }}">
                                {{ $talent->name }}
                                <i class="ti ti-discount-check-filled verify-icon" style="color: #319BF9;"></i>
                            </a>
                        </h6>
                        <p>{{ $talent->category->name ?? 'Uncategorized' }}</p>
                        <p class="mb-0 location-text d-inline-flex align-items-center">
                            <img src="/assets/img/flags/flag-for-rwanda.svg" alt="flag" class="me-1">
                            Rwanda <i class="ti ti-point-filled mx-1"></i> Total Stories: {{ $talent->stories_count ?? 0 }}
                        </p>
                        <div class="d-flex gap-2 align-items-center flex-wrap mt-3 mb-3 justify-content-center">
                            <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                {{ $talent->skill }}
                            </a>
                            <a href="{{ route('user.talent.details', $talent->id) }}" class="badge bg-light">
                                {{ $talent->language }}
                            </a>
                        </div>
                        <a href="{{ route('user.talent.details', $talent->id) }}" class="go">view</a>
                    </div>
                </div>

            </div>
                @empty
                <p class="text-center">No talents found.</p>
                @endforelse
            </div>

            
            @endif
        </div>

    </div>
</div>


@endsection