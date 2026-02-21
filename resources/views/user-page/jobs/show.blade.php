@extends('layouts.guest')
@section('title',$job->title)
@section('content')

<style>
    .postLists {
        display: flex;
        flex-direction: column;
        border: 1px solid #3d4648;
        border-radius: 3px;
        /* background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4); */
        /* box-shadow: 0 1em 1em #1f2d3d26; */
        /* text-shadow: 0 1px #fff; */
        transition: .25s;
        margin-bottom: 1.5rem;
    }

</style>

<div class="page-content" style="transform: none;">
    <div class="container" style="transform: none;">

        <!-- Blogs -->
        <div class="row" style="transform: none;">

            <!-- Blog Details -->
            <div class="col-lg-8">
                <!-- Blogs -->
                <div class="row">
                    <!-- Blog Details -->
                    <div class="col-lg-10 mx-auto">
                        <div class="blog-details">
                            <div class="blog-detail-img">
                                <img src="{{ asset('assets/img/blog/blog-large-01.jpg') }}" class="img-fluid" alt="img">
                                <h2 class="section-title mb-3">{{ $job->title }}</h2>
                            </div>
                            <div class="blog-content border-bottom d-flex align-items-center justify-content-between pb-4 mb-4">
                                <div class="user-info">
                                    <div class="d-flex align-items-center">

                                        <p class="me-3"><a href="javascript:void(0);">{{ $job->company->name }}</a></p>
                                        <span class="d-flex align-items-center me-3"><i class="feather-calendar me-1"></i>{{ $job->updated_at->format('M d, Y') }}</span>
                                        <span class="d-flex align-items-center"><i class="feather-message-square me-1"></i>{{ $job->location ?? 'Remote' }}</span>
                                    </div>
                                </div>
                                <span class="badge-text me-3">{{ $job->type ?? 'Full-time' }}</span>
                            </div>
                            <div class="blog-contents">
                                <div class="blog-wrap">
                                    <p>{{ $job->description }}</p>
                                </div>

                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <h3><strong>Skills Required:</strong></h3>
                                @foreach($job->skills_list as $skill)
                                <span class="badge-text me-3">{{ $skill }}</span>
                                @endforeach
                            </div>
                            <div class="mb-2"><strong>Experience Level:</strong> {{ $job->experience_level ?? 'Any' }}</div>
                            <div class="mb-2"><strong>Salary:</strong> {{ $job->salary_range ?? 'Negotiable' }}</div>
                            <div class="blog-author">
                                <h5 class="mb-4">Company</h5>
                                <div class="blog-author-text">
                                    <div class="author-img">
                                        <img src="{{ asset('assets/img/user/user-06.jpg') }}" class="img-fluid" alt="img">
                                    </div>
                                    <div class="author-detail">
                                        <h6 style="color: #afafaf;">{{ $job->company->name }}</h6>
                                        <p>I am experienced project manager and consultant with a rich background in digital project execution and freelance talent acquisition. </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                class="btn btn-primary w-50 buy-job-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#jobModal">
                                Apply for this job
                            </button>
                        </div>
                    </div>
                    <!-- /Blog Details -->
                </div>
            </div>
            <!-- /Blog Details -->

            <!-- Blog Sidebar -->
            <div class="col-lg-4 theiaStickySidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">

                <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none; top: 0px; left: 1189.5px;">
                    <div class="blog-sidebar mb-0">

                        <!-- Categories -->
                        <div class="card category-widget postLists">
                            <div class="card-header">
                                <h6><img src="{{ asset('assets/img/icons/category-icon.svg') }}" alt="icon">Categories</h6>
                            </div>
                            <div class="card-body">
                                <ul class="categories">
                                    @foreach($categories as $cat)
                                    <li>
                                        <a href="{{ route('user.jobs.index', array_merge(request()->all(), ['category' => $cat->id])) }}"
                                            class="{{ request('category') == $cat->id ? 'active' : '' }}">
                                            {{ $cat->name }} ({{ $cat->job_sections_count }})
                                        </a>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                        <!-- /Categories -->

                        <!-- Recent Blogs -->
                        <div class="card recent-widget postLists">
                            <div class="card-body">
                                <h6><img src="{{ asset('assets/img/icons/blog-icon.svg') }}" alt="icon">Recent Jobs</h6>
                                <ul class="latest-posts">
                                    @foreach( $recent as $job )
                                    <li>
                                        <div class="post-thumb">
                                            <a href="{{ route('user.jobs.show',$job->id) }}">
                                                <img class="img-fluid" src="{{ asset('assets/img/blog/blog-thumb-01.jpg') }}" alt="blog-image">
                                            </a>
                                        </div>
                                        <div class="post-info">
                                            <h6>
                                                <a href="{{ route('user.jobs.show',$job->id) }}" style="color: #afafaf;">{{ $job->title }}</a>
                                            </h6>
                                            <div class="blog-user">
                                                <div class="blog-user-info">
                                                    <p style="color: #afafaf;">{{ $job->company->name }}</p>
                                                    <p style="color: #afafaf;">{{ $job->updated_at->format('M d, Y') }}</p>
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
                        <div class="card tag-widget mb-0 postLists">
                            <div class="card-body">
                                <h6><img src="{{ asset('assets/img/icons/tag-icon.svg') }}" alt="icon">Popular Tags</h6>
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
                            <div style="position: absolute; left: 0px; top: 0px; transition: all; width: 450px; height: 2893px;"></div>
                        </div>
                        <div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                            <div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Blog Sidebar -->

        </div>
    </div>
</div>

<div class="modal fade" id="jobModal" tabindex="-1" aria-labelledby="jobModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content overflow-hidden">

            {{-- Modal Header --}}
            <div class="modal-header text-white">
                <h5 class="modal-title fw-bold" id="jobModalLabel{{ $job->id }}">
                    <i class="bi bi-job-detailed me-2"></i> Apply for this job
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {{-- Modal Body --}}
            <div class="modal-body p-4">
                <form action="{{ route('user.jobs.apply',$job->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="mb-3">
                        <label class="form-label">Cover Letter</label>
                        <textarea name="cover_letter" class="form-control form-control-lg" rows="4" style="color: #afafaf;">{{ old('cover_letter') }}</textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Resume (PDF/DOC)</label>
                        <input type="file" name="resume" class="form-control form-control-lg">
                    </div>
                    <button class="btn btn-primary px-5 py-2 fw-semibold">Submit Application</button>
                </form>
            </div>

        </div>
    </div>
</div>

<!-- Subscribe Modal -->
<div class="modal fade" id="subscribeModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title">Subscription Required</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>To apply for jobs, you must have an active subscription.</p>
                <p class="mb-0">Please subscribe to continue.</p>
            </div>
            <div class="modal-footer">
                <a href="{{ route('pricing') }}" class="btn btn-primary rounded-pill">Subscribe Now</a>
                <button type="button" class="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Trigger modal if session has 'showSubscribeModal' -->
@if(session('showSubscribeModal'))
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var subscribeModal = new bootstrap.Modal(document.getElementById('subscribeModal'));
        subscribeModal.show();
    });
</script>
@endif

@endsection