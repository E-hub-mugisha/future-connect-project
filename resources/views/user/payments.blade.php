@extends('layouts.user')
@section('title','Payments')
@section('content')
<h2>Payment History</h2>
<table class="table table-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>Tx Ref</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        @forelse($payments as $p)
        <tr>
            <td>{{ $p->id }}</td>
            <td>{{ $p->tx_ref }}</td>
            <td>{{ ucfirst($p->status) }}</td>
            <td>{{ number_format($p->amount,2) }} {{ $p->currency }}</td>
            <td>{{ $p->created_at->format('d M Y') }}</td>
        </tr>
        @empty
        <tr><td colspan="5">No payments recorded.</td></tr>
        @endforelse
    </tbody>
</table>
@endsection
