@extends('layouts.guest')
@section('title', $announcement->title)
@section('content')

<style>
    /* Main container styling */
    .announcement-card {
        /* background: #f9f9fb; */
        border-radius: 3px;
        padding: 30px;
        margin-bottom: 30px;
        /* box-shadow: 0 0.5em 1.2em rgba(0, 0, 0, 0.08); */
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .announcement-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 1em 1.5em rgba(0, 0, 0, 0.15);
    }

    .announcement-meta span {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 5px;
        font-size: 0.85rem;
        font-weight: 500;
    }

    .announcement-meta .badge {
        font-size: 0.75rem;
        padding: 0.4em 0.7em;
        border-radius: 0.75em;
    }

    .announcement-meta .author {
        float: right;
        font-size: 0.85rem;
        color: #6c757d;
    }

    .announcement-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 20px;
        /* color: #011E34; */
    }

    .announcement-image {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 25px;
        box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.08);
    }

    .announcement-content p {
        font-size: 1rem;
        line-height: 1.75;
        color: #495057;
    }

    .breadcrumb-bar {
        background: linear-gradient(90deg, #011E34 0%, #004080 100%);
        color: #fff;
        padding: 20px 0;
        border-radius: 15px;
        margin-bottom: 30px;
    }

    .breadcrumb-bar .breadcrumb a {
        color: #fff;
    }

    .breadcrumb-bar .breadcrumb-item.active {
        color: #ffd700;
    }

    .related-announcements {
        /* background: #fff; */
        border-radius: 15px;
        padding: 20px;
        /* box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.08); */
    }

    .related-announcement-card {
        display: flex;
        margin-bottom: 15px;
        align-items: center;
    }

    .related-announcement-card img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 10px;
        margin-right: 15px;
    }

    .related-announcement-card h6 {
        font-size: 1rem;
        margin: 0;
    }

    /* Responsive adjustments */
    @media (max-width: 992px) {
        .announcement-title {
            font-size: 1.5rem;
        }
    }

    .postLists {
        display: flex;
        /* align-items: center; */
        flex-direction: column;
        border: 1px solid #afafaf;
        border-radius: 3px;
        /* background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4); */
        /* box-shadow: 0 1em 1em #1f2d3d26; */
        /* text-align: center; */
        /* text-shadow: 0 1px #fff; */
        transition: .25s;
        margin-bottom: 1.5rem;

    }
</style>


<section class="py-5">
    <div class="container">
        <div class="row justify-content-center">
            <!-- Main announcement -->
            <div class="col-lg-8 col-md-12">
                <div class="announcement-card postLists">
                    @if($announcement->image)
                    <img src="{{ asset('storage/' . $announcement->image) }}" alt="Announcement Image" class="announcement-image">
                    @else
                    <img src="{{ asset('assets/img/announcement/image.jpg') }}" alt="Default Image" class="announcement-image">
                    @endif

                    <h3 class="announcement-title">{{ $announcement->title }}</h3>
                    <div class="announcement-meta mb-3">
                        <span class="badge {{ $announcement->is_active ? 'bg-success' : 'bg-secondary' }}">
                            {{ $announcement->is_active ? 'Active' : 'Inactive' }}
                        </span>
                        <span class="badge" style="color: #afafaf;">{{ $announcement->category->name }}</span>
                        <span class="author">By {{ $announcement->user->name }}</span>
                    </div>

                    <div class="announcement-content">
                        <p>{!! nl2br(e($announcement->content)) !!}</p>
                    </div>
                </div>
                <div class="announcement-comments mt-5 postLists p-4">
                    <h5>Comments ({{ $announcement->comments->count() }})</h5>

                    <!-- List of comments -->
                    <ul class="list-unstyled">
                        @forelse($announcement->comments as $comment)
                        <li class="media mb-3 p-3 border rounded">
                            <img src="{{ $comment->user->avatar ?? asset('assets/img/user/profile.jpg') }}"
                                class="mr-3 rounded-circle" width="50" alt="{{ $comment->user->name }}">
                            <div class="media-body">
                                <h6 class="mt-0 mb-1">{{ $comment->user->name }}
                                    <small class="text-muted">{{ $comment->created_at->diffForHumans() }}</small>
                                </h6>
                                <p>{{ $comment->content }}</p>
                            </div>
                        </li>
                        @empty
                        <p class="text-muted">No comments yet. Be the first to comment!</p>
                        @endforelse
                    </ul>

                    <!-- Comment Form -->
                    @auth
                    <form action="{{ route('announcement.comment', $announcement->id) }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <textarea name="content" class="form-control" rows="3" placeholder="Write your comment..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit Comment</button>
                    </form>
                    @else
                    <p class="text-muted">Please <a href="{{ route('login') }}">login</a> to leave a comment.</p>
                    @endauth
                </div>
            </div>

            <!-- Related Announcements Sidebar -->
            <div class="col-lg-4 col-md-12">
                <div class="related-announcements postLists p-4">
                    <h5 class="mb-3">Related Announcements</h5>
                    @foreach($relatedAnnouncements as $related)
                    <div class="related-announcement-card">
                        @if($related->image)
                        <img src="{{ asset('storage/' . $related->image) }}" alt="Related Image">
                        @else
                        <img src="{{ asset('assets/img/announcement/image.jpg') }}" alt="Default Image">
                        @endif
                        <div>
                            <h6><a href="{{ route('user.announcement.details', $related->id ) }}">{{ $related->title }}</a></h6>
                            <small class="text-muted">{{ $related->created_at->diffForHumans() }}</small>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
            
        </div>
    </div>
</section>

@endsection