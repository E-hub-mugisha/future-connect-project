@extends('layouts.user')
@section('title', 'Connection Requests')

@section('content')
<div class="container-fluid py-4">
    <div class="card shadow">
        <div class="card-header bg-primary text-white">
            <h4 class="mb-0">All Talent Connection Requests</h4>
        </div>

        <div class="card-body">
            @if($connections->count())
            <div class="table-responsive">
                <table class="datatable-init nowrap table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Talent</th>
                            <th>Payment Status</th>
                            <th>Amount</th>
                            <th>Requested At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($connections as $key => $connection)
                        <tr>
                            <td>{{ $connection->id }}</td>
                            <td>
                                {{ $connection->requester->name ?? 'N/A' }}<br>
                                <small class="text-muted">{{ $connection->requester->email ?? '' }}</small>
                            </td>
                            <td>
                                {{ $connection->talent->name ?? 'N/A' }}
                            </td>
                            <td>
                                @if($connection->payment)
                                <span class="badge bg-{{ $connection->payment->status === 'successful' ? 'success' : 'danger' }}">
                                    {{ ucfirst($connection->payment->status) }}
                                </span>
                                @else
                                <span class="badge bg-warning">Pending</span>
                                @endif
                            </td>
                            <td>
                                {{ $connection->payment->amount ?? '0.00' }} RWF
                            </td>
                            <td>{{ $connection->created_at->format('d M Y, h:i A') }}</td>
                            <td>
                                <a href="{{ route('user.connections.show', $connection->id ) }}"
                                    class="btn btn-sm btn-outline-info">
                                    View
                                </a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            @else
            <p class="text-center mb-0">No connection requests found.</p>
            @endif
        </div>
    </div>
</div>
@endsection