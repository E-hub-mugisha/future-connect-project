@extends('layouts.app')
@section('title', 'Invoice')
@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="nk-block-head">
                <div class="nk-block-between g-3">
                    <div class="nk-block-head-content">
                        <h3 class="nk-block-title page-title">Invoice <strong class="text-primary small">#{{ $payment->video_id }}</strong></h3>
                        <div class="nk-block-des text-soft">
                            <ul class="list-inline">
                                <li>Created At: <span class="text-base">{{ $payment->created_at->format('d M, Y h:i A') }}
                                    </span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="nk-block-head-content"><a href="{{ route('admin.payments.index')}}" class="btn btn-outline-light bg-white d-none d-sm-inline-flex"><em class="icon ni ni-arrow-left"></em><span>Back</span></a><a href="invoice-list.html" class="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"><em class="icon ni ni-arrow-left"></em></a></div>
                </div>
            </div>
            <div class="nk-block">
                <div class="invoice">
                    <div class="invoice-action"><a class="btn btn-icon btn-lg btn-white btn-dim btn-outline-primary" href="{{ route('admin.invoice.print', $payment->id) }}" target="_blank"><em class="icon ni ni-printer-fill"></em></a></div>
                    <div class="invoice-wrap">
                        <div class="invoice-brand text-center">
                            <div class="logo-link"><img class="logo-light logo-img" src="{{ asset('assets/img/WORDMARK.png') }}" srcset="{{ asset('assets/img/WORDMARK.png') }}" alt=""><img class="logo-dark logo-img" src="{{ asset('assets/img/WORDMARK.png') }}" srcset="{{ asset('assets/img/WORDMARK.png') }}" alt=""></div>
                        </div>
                        <div class="invoice-head">
                            <div class="invoice-contact"><span class="overline-title">Invoice To</span>
                                <div class="invoice-contact-info">
                                    <h4 class="title">{{ $payment->email }}</h4>
                                    <ul class="list-plain">
                                        <li><em class="icon ni ni-map-pin-fill"></em><span>House #65, 4328 Marion Street<br>Newbury, VT 05051</span></li>
                                        <li><em class="icon ni ni-call-fill"></em><span>+012 8764 556</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="invoice-desc">
                                <h3 class="title">Invoice</h3>
                                <ul class="list-plain">
                                    <li class="invoice-id"><span>Invoice ID</span>:<span>{{ $payment->id }}</span></li>
                                    <li class="invoice-date"><span>Date</span>:<span>{{ $payment->created_at->format('d M, Y h:i A') }}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="invoice-bills">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th class="w-150px">Story ID</th>
                                            <th class="w-60">Story Title</th>
                                            <th>Status</th>
                                            <th>Qty</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{ $payment->story_id }}</td>
                                            <td>{{ $payment->story->title}}</td>
                                            <td>{{ $payment->status }}</td>
                                            <td>{{ $payment->currency }}</td>
                                            <td>{{ $payment->amount }}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="2"></td>
                                            <td colspan="2">Grand Total</td>
                                            <td>{{ $payment->amount }} ({{ $payment->currency }})</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div class="nk-notes ff-italic fs-12px text-soft"> Invoice was created on a computer and is valid without the signature and seal. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection