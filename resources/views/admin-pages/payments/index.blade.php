@extends('layouts.app')
@section('title', 'Stories Payments')
@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Stories Payments</h2>
            </div>
        </div>

        <!-- Tables -->
        <div class="card card-bordered card-preview">
            <div class="card-inner">
                <table class="datatable-init nowrap table">
                    <thead class="thead-light">
                        <tr>
                            <th>Transaction ID</th>
                            <th>User Email</th>
                            <th>Story</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($payments as $payment)
                        <tr>
                            <td>#{{ $payment->tx_ref }}</td>
                            <td>{{ $payment->email }}</td>
                            <td>
                                {{ $payment->story->title }}
                            </td>
                            <td>
                                {{ \Carbon\Carbon::parse($payment->created_at)->format('d M Y') }}
                            </td>
                            <td><span class="badge bg-light text-success border-success-100 users-badge debit-badge"><i class="fa-solid fa-arrow-up me-1"></i> {{ $payment->status }}</span></td>
                            <td class="text-start dt-type-numeric">${{ $payment->amount }}</td>
                            <td>
                                <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $payment->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                    Actions
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $payment->id }}">
                                    <li>
                                        <a class="dropdown-item" href="{{ route('admin.stories.show', $payment->story->id) }}">View Story</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#printModal{{ $payment->id }}">Print invoice</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $payment->id }}">Delete</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#transaction_details{{ $payment->id }}">Quick view</a>
                                    </li>
                                </ul>

                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>

                <!-- /Tables -->

                @foreach($payments as $payment)

                <div class="modal fade" id="deleteModal{{ $payment->id }}" tabindex="-1" aria-labelledby="deleteModalLabel{{ $payment->id }}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-danger text-white">
                                <h5 class="modal-title" id="deleteModalLabel{{ $payment->id }}">Delete Payment</h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to <strong>permanently delete</strong> this payment record?
                                <br><small class="text-muted">Payment ID: {{ $payment->id }}</small>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                <form action="{{ route('admin.payments.destroy', $payment->id) }}" method="POST" class="d-inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger">Yes, Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach

                @foreach($payments as $payment)
                <div class="modal fade" id="printModal{{ $payment->id }}" tabindex="-1" aria-labelledby="printModalLabel{{ $payment->id }}" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="printModalLabel{{ $payment->id }}">Print Invoice</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Generate Invoice for <strong>{{ $payment->story->title }}</strong></p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <a href="{{ route('admin.payments.invoice', $payment->id) }}" target="_blank" class="btn btn-primary">
                                    <em class="icon ni ni-printer"></em> View Invoice
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach

                <!-- Transaction details  -->
                @foreach($payments as $payment)
                <div class="modal new-modal fade" id="transaction_details{{ $payment->id }}" data-keyboard="false" data-backdrop="static" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Transaction details </h5>
                                <button type="button" class="close-btn" data-bs-dismiss="modal"><span>×</span></button>
                            </div>
                            <div class="modal-body service-modal">
                                <h6 class="model-head-text"> Transaction Summary </h6>
                                <div class="sumary-widget">
                                    <div class="summary-info">
                                        <h6> Transaction ID</h6>
                                        <p> #{{ $payment->tx_ref }} </p>
                                    </div>
                                    <div class="summary-info">
                                        <h6> Transaction type </h6>
                                        <p> Purchase </p>
                                    </div>
                                    <div class="summary-info">
                                        <h6> Amount</h6>
                                        <p> ${{ $payment->amount }} </p>
                                    </div>
                                    <div class="summary-info">
                                        <h6> Currency</h6>
                                        <p> {{ $payment->currency }} </p>
                                    </div>
                                    <div class="summary-info">
                                        <h6> Processing Fee</h6>
                                        <p> $20 </p>
                                    </div>
                                    <div class="summary-info">
                                        <h6> Payment Method</h6>
                                        <p> Credit Card </p>
                                    </div>
                                    <div class="summary-info mb-0">
                                        <h6> Sender</h6>
                                        <p> {{ $payment->email }} </p>
                                    </div>
                                    <div class="summary-info mb-0">
                                        <h6> Receiver</h6>
                                        <p> kabosierik@gmail.com </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
                <!-- /Transaction details -->
            </div>
        </div>
    </div>
</div>
@endsection