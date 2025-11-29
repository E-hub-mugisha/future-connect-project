@extends('layouts.app')
@section('title', 'wallets - Admin Panel')
@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="mb-4">Wallet Management</h2>
            </div>

            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($wallets as $wallet)
                            <tr>
                                <td>{{ $wallet->user->name }}</td>
                                <td>{{ $wallet->user->email }}</td>
                                <td>{{ number_format($wallet->balance, 2) }} RWF</td>
                                <td>
                                    <button class="btn btn-sm btn-primary rounded-3 px-3" data-bs-toggle="modal" data-bs-target="#adjustModal{{ $wallet->user->id }}">Adjust</button>
                                </td>
                            </tr>


                            {{-- Adjust Modal --}}
                            <div class="modal fade" id="adjustModal{{ $wallet->user->id }}" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content rounded-3 shadow">
                                        <div class="modal-header border-0">
                                            <h5 class="modal-title">Adjust Wallet: {{ $wallet->user->name }}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <form method="POST" action="#" class="p-3">
                                            @csrf

                                            <div class="card-body">
                                                <label class="form-label">Amount</label>
                                                <input type="number" name="amount" class="form-control form-control-lg mb-3" required>


                                                <label class="form-label">Type</label>
                                                <select name="type" class="form-control form-control-lg mb-3">
                                                    <option value="credit">Credit</option>
                                                    <option value="debit">Debit</option>
                                                </select>


                                                <label class="form-label">Description</label>
                                                <input type="text" name="description" class="form-control form-control-lg mb-3">

                                            </div>
                                            <div class="modal-footer border-0">
                                                <button type="button" class="btn btn-light px-4" data-bs-dismiss="modal">Cancel</button>
                                                <button class="btn btn-success px-4" type="submit">Update</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection