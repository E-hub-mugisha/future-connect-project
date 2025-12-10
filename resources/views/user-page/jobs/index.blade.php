@extends('layouts.guest')
@section('title', 'Explore Opportunities')
@section('content')

<div class="page-content" style="transform: none;">
    <div class="container" style="transform: none;">

        <!-- Blogs -->
        <div class="row" style="transform: none;">

            <!-- Blog Sidebar -->
            <div class="col-lg-4 theiaStickySidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">

                <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none; top: 0px; left: 94.8px;">
                    <div class="blog-sidebar card-bottom">

                        <!-- Recent Blogs -->
                        <div class="card recent-widget">
                            <div class="card-header">
                                <h6><img src="assets/img/icons/blog-icon.svg" alt="icon">Recent Projects</h6>
                                <p>Available projects to be sponsored</p>
                            </div>
                            <div class="card-body">
                                <ul class="latest-posts">
                                    @foreach( $projects as $project )
                                    <li>
                                        <div class="post-thumb">
                                            <a href="{{ route('user.projects.show',$project->id) }}">
                                                <img class="img-fluid" src="assets/img/blog/blog-thumb-01.jpg" alt="blog-image">
                                            </a>
                                        </div>
                                        <div class="post-info">
                                            <h6>
                                                <a href="{{ route('user.projects.show',$project->id) }}">{{ $project->title }}</a>
                                            </h6>
                                            <div class="blog-user">
                                                <div class="blog-user-info">
                                                    <p>{{ $project->location ?? 'Remote' }}</p>
                                                    <p class="xs-text">Jan 23, 2024</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                        <!-- /Recent Blogs -->

                        <!-- Popular Tags -->
                        <div class="card tag-widget mb-0">
                            <div class="card-header">
                                <h6><img src="assets/img/icons/tag-icon.svg" alt="icon">Popular Tags</h6>
                            </div>
                            <div class="card-body">
                                <ul class="tags-list">
                                    <li><a href="#">In-Demand Skills</a></li>
                                    <li><a href="#">Freelancing</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Future Trends</a></li>
                                    <li><a href="#">Digital Marketing</a></li>
                                    <li><a href="#">Home Care</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- /Popular Tags -->

                    </div>
                    <div class="resize-sensor" style="position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                        <div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                            <div style="position: absolute; left: 0px; top: 0px; transition: all; width: 940px; height: 1136px;"></div>
                        </div>
                        <div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                            <div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Blog Sidebar -->

            <div class="col-lg-8">

                <!-- Blogs -->
                <div class="blog">
                    <div class="row">
                        @foreach($jobs as $job)
                        <!-- Blog -->
                        <div class="col-lg-6">
                            <div class="blog-grid">
                                <div class="blog-img">
                                    <a href="{{ route('user.jobs.show',$job->id) }}"><img src="assets/img/blog/blog-01.jpg" class="img-fluid" alt="img"></a>
                                    <div class="fav-selection">
                                        <a href="javascript:void(0);" class="fav-icon"><i class="feather-heart"></i></a>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <div class="user-head">
                                        <div class="badge-text">
                                            <a href="javascript:void(0);" class="badge bg-primary-light">{{ $job->location ?? 'Remote' }}</a>
                                        </div>
                                    </div>
                                    <div class="blog-title">
                                        <h3 class="mb-2"><a href="{{ route('user.jobs.show',$job->id) }}">{{ $job->title }}</a></h3>
                                        <p>Skills, Portfolio, Reviews, Communication, Budget, Deadlines, Experience, Expertise, Fit.......</p>
                                    </div>
                                    <div class="blog-content-footer d-flex justify-content-between align-items-center">
                                        <div class="user-info">
                                            <a href="javascript:void(0);"><img src="assets/img/user/user-06.jpg" alt="img"></a>
                                            <div class="d-flex align-items-center">
                                                <p class="me-2"><a href="javascript:void(0);">{{ $job->company->name }}</a></p>
                                                <span class="dot me-2"></span>
                                                <a href="{{ route('user.jobs.show',$job->id) }}" class="btn btn-primary float-end rounded-pill">View & Apply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Blog -->
                        @endforeach
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <a href="javascript:void(0);" class="btn btn-dark">Load More</a>
                    </div>
                </div>
                <!-- /Blogs -->
            </div>
        </div>
    </div>
</div>
@endsection