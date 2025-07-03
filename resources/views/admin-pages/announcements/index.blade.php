@extends('layouts.app')
@section('content')

<div class="page-wrapper">
    <div class="page-content content pb-0 bg-light">

        <div class="content">
            <div class="main-title mb-4">
                <h2 class="card-title">Announcements</h2>
            </div>
            <div class="wallet-wrap">
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Amount in Wallet</p>
                        <h5>$1,302.50</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total Credit</p>
                        <h5>$9,292.50</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total Debit</p>
                        <h5>$1,541.21</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Withdrawn</p>
                        <h5>$8,874.21</h5>
                    </div>
                </div>
                <div class="d-flex align-items-center">

                    <a href="{{ route('admin.announcements.create') }}" class="btn btn-primary">
                        <i class="fa fa-plus"></i> Create Announcement
                    </a>
                </div>
            </div>
            <div class="table-responsive custom-table">
                <table class="table datatable">
                    <thead class="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Created by</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($announcements as $announcement)
                            <tr>
                                <td>{{ $announcement->id }}</td>
                                <td>{{ Str::limit($announcement->title, 50) }}</td>
                                <td>{{ $announcement->category->name }}</td>
                                <td>{{ $announcement->user->name ?? 'N/A' }}</td>
                                <td>{{ $announcement->created_at->format('Y-m-d') }}
                                </td>
                                <td>
                                    <a href="{{ route('admin.announcements.show', $announcement->id) }}"
                                        class="btn btn-sm btn-primary">View</a>
                                    <a href="{{ route('admin.announcements.edit', $announcement->id) }}"
                                        class="btn btn-sm btn-info">Edit</a>
                                    <form
                                        action="{{ route('admin.announcements.destroy', $announcement->id) }}"
                                        method="POST" style="display:inline;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-danger"
                                            onclick="return confirm('Are you sure you want to delete this announcement?')">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>


            </div>
        </div>
    </div>
</div>

@endsection
