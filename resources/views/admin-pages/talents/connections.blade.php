@extends('layouts.app')
@section('title', 'Talent Connection')

@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="mb-0">Talent Connection</h2>
                <div class="d-flex justify-content-between align-items-center mb-4 gap-2">
                    <button type="button" class="btn btn-primary rounded-pill btn-md" data-bs-toggle="modal"
                        data-bs-target="#talentAddModal">
                        Connection request
                    </button>
                </div>
            </div>

            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    @if($connections->count())
                    <div class="table-responsive">
                        <table class="datatable-init nowrap table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User</th>
                                    <th>Talent Info</th>
                                    <th>Payment Status</th>
                                    <th>Amount</th>
                                    <th>Requested At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($connections as $key => $connection)
                                <tr>
                                    <td>{{ $connections->firstItem() + $key }}</td>
                                    <td>
                                        {{ $connection->requester->name ?? 'N/A' }}<br>
                                        <small class="text-muted">{{ $connection->requester->email ?? '' }}</small>
                                    </td>
                                    <td>
                                        {{ $connection->talent->name }} </br><small>{{ $connection->talent->email }}</small>
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
                                        <a href="{{ route('admin.connections.show', $connection->id ?? 0) }}"
                                            class="btn btn-sm btn-outline-info">
                                            View
                                        </a>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>

                    {{-- Pagination --}}
                    <div class="mt-3">
                        {{ $connections->links() }}
                    </div>
                    @else
                    <p class="text-center mb-0">No connection requests found at this moment.</p>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection