@extends('layouts.app')
@section('title', 'wallets')
@section('content')

<div class="container py-5">
    <h2 class="mb-4">My Wallet</h2>


    <div class="card shadow-sm mb-4 border-0 rounded-3">
        <div class="card-body d-flex justify-content-between align-items-center">
            <h4 class="mb-0">Balance: <strong>{{ number_format($wallet->balance, 2) }} RWF</strong></h4>
            <button class="btn btn-primary px-4 py-2 rounded-3" data-bs-toggle="modal" data-bs-target="#topupModal">Top Up</button>
        </div>
    </div>


    <h4 class="mb-3">Recent Transactions</h4>
    <div class="table-responsive rounded-3 shadow-sm">
        <table class="table table-hover mb-0">
            <thead class="table-light">
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Payment Method</th>
                    <th>Reference</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($transactions as $t)
                <tr>
                    <td>{{ $t->created_at->format('Y-m-d H:i') }}</td>
                    <td><span class="badge bg-info">{{ ucfirst($t->type) }}</span></td>
                    <td>{{ number_format($t->amount, 2) }}</td>
                    <td>{{ $t->description }}</td>
                    <td>
                        <span class="badge {{ $t->status == 'completed' ? 'bg-success' : ($t->status == 'pending' ? 'bg-warning' : 'bg-danger') }}">
                            {{ ucfirst($t->status) }}
                        </span>
                    </td>
                    <td>{{ $t->payment_method ?? 'N/A' }}</td>
                    <td>{{ $t->reference ?? 'N/A' }}</td>
                    <td>
                        @if(($t->status == 'failed' || $t->status == 'pending') && $t->type == 'topup')
                        <!-- retry topup button -->
                        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#retryTopupModal-{{ $t->id }}">Retry</button>
                        <!-- retry topup modal confirmation -->
                        <div class="modal fade" id="retryTopupModal-{{ $t->id }}" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content rounded-3 shadow">
                                    <div class="modal-header border-0">
                                        <h5 class="modal-title">Retry Top-Up</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div class="modal-body p-3">
                                        <p>Are you sure you want to retry the top-up of <strong>{{ number_format($t->amount, 2) }} RWF</strong>?</p>
                                        <a href="{{ route('user.wallet.topup.show', $t->id) }}" class="btn btn-sm btn-primary rounded-3 px-3">Retry</a>
                                    </div>
                                    <div class="modal-footer border-0">
                                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @else
                        N/A
                        @endif

                        <!-- delete transaction button -->
                        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteTransactionModal-{{ $t->id }}">Delete</button>
                        <!-- delete transaction modal confirmation -->
                        <div class="modal fade" id="deleteTransactionModal-{{ $t->id }}" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content rounded-3 shadow">
                                    <div class="modal-header border-0">
                                        <h5 class="modal-title">Delete Transaction</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div class="modal-body p-3">
                                        <p>Are you sure you want to delete this transaction?</p>
                                    </div>
                                    <div class="modal-footer border-0">
                                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                        <form method="POST" action="{{ route('user.wallet.transaction.delete', $t->id) }}" class="d-inline">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger">Delete</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>


    <div class="mt-3">{{ $transactions->links() }}</div>
</div>


{{-- Topup Modal --}}
<div class="modal fade" id="topupModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-3 shadow">
            <div class="modal-header border-0">
                <h5 class="modal-title">Top Up Wallet</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <form method="POST" action="{{ route('user.wallet.topup') }}" class="p-3">
                @csrf
                <label class="form-label">Amount (RWF)</label>
                <input type="number" class="form-control form-control-lg mb-3" name="amount" min="100" required>


                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-light px-4" data-bs-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary px-4" type="submit">Proceed to Pay</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection