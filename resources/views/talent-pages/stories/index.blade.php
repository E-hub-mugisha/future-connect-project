@extends('layouts.app')
@section('content')

<div class="page-wrapper">
    <div class="page-content content pb-0 bg-light">

        <div class="content">
            <div class="main-title mb-4">
                <h2>User Management</h2>
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

                    <a href="{{ route('admin.stories.create') }}"
                        class="btn btn-primary btn-md">Create</a>
                </div>
            </div>
            <div class="table-responsive custom-table">
                <table class="table datatable">
                    <thead class="thead-light">
                        <tr>
                            <th>Title</th>
                            <th>Talent</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($stories as $story)
                            <tr>
                                <td>{{ $story->title }}</td>
                                <td>{{ $story->talent?->name ?? 'N/A' }}</td>
                                <td>{{ $story->category?->name ?? 'N/A' }}</td>
                                <td>{{ ucfirst($story->status) }}</td>
                                <td>
                                    <a href="{{ route('admin.stories.show', $story->id) }}"
                                        class="btn btn-sm btn-info me-2">View</a>
                                    <a href="{{ route('admin.stories.edit', $story->id) }}"
                                        class="btn btn-sm btn-warning me-2">Edit</a>

                                    <form
                                        action="{{ route('admin.stories.destroy', $story->id) }}"
                                        method="POST" class="d-inline"
                                        onsubmit="return confirm('Are you sure you want to delete this story?')">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-danger">Delete</button>
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
