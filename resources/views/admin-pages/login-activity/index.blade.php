@extends('layouts.app')
@section('title', 'Login Activity')
@section('content')
<div class="container">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <h2 class="mb-4">Login Activity</h2>

            <div class="card card-bordered">
                <div class="card-inner">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>IP Address</th>
                                <th>Device / Browser</th>
                                <th>Logged In At</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($activities as $key => $activity)
                            <tr>
                                <td>{{ $activities->firstItem() + $key }}</td>
                                <td>{{ $activity->user->name ?? 'N/A' }}</td>
                                <td>{{ $activity->ip_address }}</td>
                                <td>{{ $activity->user_agent }}</td>
                                <td>{{ \Carbon\Carbon::parse($activity->logged_in_at)->format('d M Y, h:i A') }}</td>
                            </tr>
                            @empty
                            <tr>
                                <td colspan="5" class="text-center">No login activity found.</td>
                            </tr>
                            @endforelse
                        </tbody>
                    </table>

                    <div class="mt-3">
                        {{ $activities->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
