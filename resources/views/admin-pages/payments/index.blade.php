@extends('layouts.app')
@section('content')
<div class="page-wrapper">
    <div class="page-content content bg-light">
        <div class="main-title mb-4">
            <h4>Stories Payments</h4>
        </div>

        <!-- Status-->
        <div class="row status-info">
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="mb-1"> Total Transactions</p>
                                <h5 class="mb-1">325</h5>
                                <span class="badge bg-light text-success border-success-100 users-badge"> <i class="ti ti-arrow-up-right me-1"></i> 6.78% </span>
                            </div>
                            <img src="assets/img/icons/transaction-icon-01.svg" alt="icon">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="mb-1"> Total Credits</p>
                                <h5 class="mb-1">$25,850.00</h5>
                                <span class="badge bg-light text-success border-success-100 users-badge"> <i class="ti ti-arrow-up-right me-1"></i> 4.29% </span>
                            </div>
                            <img src="assets/img/icons/transaction-icon-02.svg" alt="icon">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="mb-1"> Total Debits</p>
                                <h5 class="mb-1">$15,500.00</h5>
                                <span class="badge bg-light text-success border-success-100 users-badge"> <i class="ti ti-arrow-up-right me-1"></i> 12.8% </span>
                            </div>
                            <img src="assets/img/icons/transaction-icon-03.svg" alt="icon">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="mb-1">Pending Payments</p>
                                <h5 class="mb-1"> $1,800.00</h5>
                                <span class="badge bg-light text-success border-success-100 users-badge"> <i class="ti ti-arrow-up-right me-1"></i> 7.36% </span>
                            </div>
                            <img src="assets/img/icons/transaction-icon-04.svg" alt="icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Status-->

        <div class="sub-title">
            <h5 class="mb-3"> Story Payments List </h5>
        </div>

        <!-- Types -->
        <div class="row">
            <div class="col-lg-9">
                <div class="table-filter">
                    <ul class="filter-item">
                        <li>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <i class="ti ti-transition-top me-2"></i>Transaction Type
                                </a>
                                <ul class="dropdown-menu dropdown-menu-lg p-2">
                                    <li><a href="javascript:void(0);" class="dropdown-item">Debit</a></li>
                                    <li><a href="javascript:void(0);" class="dropdown-item">Credit</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="form-sort form-wrap mb-0 date-info">
                                <span class="form-icon">
                                    <i class="ti ti-calendar-event"></i>
                                </span>
                                <input type="text" class="form-control datetimepicker" placeholder="03-04-2025">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="main-search">
                    <div id="tablefilter">
                        <div class="dt-search"><label for="dt-search-0"> </label><input type="search" class="dt-input" id="dt-search-0" placeholder="Search" aria-controls="DataTables_Table_0"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Types -->

        <!-- Tables -->
        <div class="table-responsive custom-table">
            <div id="DataTables_Table_0_wrapper" class="dt-container dt-empty-footer">
                <div class="dt-layout-row">
                    <div class="dt-layout-cell dt-layout-start"></div>
                    <div class="dt-layout-cell dt-layout-end"></div>
                </div>
                <div class="dt-layout-row dt-layout-table">
                    <div class="dt-layout-cell  dt-layout-full">
                        <table class="table table-stripe datatable dataTable" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style="width: 100%;">
                            <colgroup>
                                <col data-dt-column="0" style="width: 210.453px;">
                                <col data-dt-column="1" style="width: 492.828px;">
                                <col data-dt-column="2" style="width: 101px;">
                                <col data-dt-column="3" style="width: 85.8125px;">
                                <col data-dt-column="4" style="width: 71.4375px;">
                                <col data-dt-column="5" style="width: 61.7969px;">
                            </colgroup>
                            <thead class="thead-light">
                                <tr>
                                    <th data-dt-column="0" class="dt-orderable-none" rowspan="1" colspan="1"><span class="dt-column-title">Transaction ID</span><span class="dt-column-order"></span></th>
                                    <th data-dt-column="1" class="dt-orderable-none" rowspan="1" colspan="1"><span class="dt-column-title">User Email</span><span class="dt-column-order"></span></th>
                                    <th data-dt-column="1" class="dt-orderable-none" rowspan="1" colspan="1"><span class="dt-column-title">Story</span><span class="dt-column-order"></span></th>
                                    <th data-dt-column="2" class="dt-orderable-none" rowspan="1" colspan="1"><span class="dt-column-title">Date</span><span class="dt-column-order"></span></th>
                                    <th data-dt-column="3" class="dt-orderable-none" rowspan="1" colspan="1"><span class="dt-column-title">Status</span><span class="dt-column-order"></span></th>
                                    <th data-dt-column="4" class="dt-orderable-none dt-type-numeric" rowspan="1" colspan="1"><span class="dt-column-title">Amount</span><span class="dt-column-order"></span></th>
                                    <th data-dt-column="5" class="dt-orderable-none" rowspan="1" colspan="1"><span class="dt-column-title">Action</span><span class="dt-column-order"></span></th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($payments as $payment)
                                <tr>
                                    <td>#{{ $payment->tx_ref }}</td>
                                    <td>{{ $payment->email }}</td>
                                    <td>
                                        <h2 class="table-avatar d-flex align-items-center">
                                            <a href="javascript:void(0);" class="text-dark">{{ $payment->story->title }}</a>
                                        </h2>
                                    </td>
                                    <td>
                                        {{ \Carbon\Carbon::parse($payment->created_at)->format('d M Y') }}
                                    </td>
                                    <td><span class="badge bg-light text-success border-success-100 users-badge debit-badge"><i class="fa-solid fa-arrow-up me-1"></i> {{ $payment->status }}</span></td>
                                    <td class="text-start dt-type-numeric">${{ $payment->amount }}</td>
                                    <td>
                                        <div class="table-action">
                                            <a href="javascript:void(0);" class="border-rounded view-eye" data-bs-toggle="modal" data-bs-target="#transaction_details{{ $payment->id }}"><i class="feather-eye"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                </div>
                <div class="dt-layout-row">
                    <div class="dt-layout-cell dt-layout-start">
                        <div class="dt-info" aria-live="polite" id="DataTables_Table_0_info" role="status">Showing 1 to 10 of 10 entries</div>
                    </div>
                    <div class="dt-layout-cell dt-layout-end"></div>
                </div>
            </div>
        </div>
        <div class="table-bottom-footer d-sm-flex align-items-center justify-content-between mt-4">
            <div class="dataTables_length" id="DataTables_Table_0_length">
                <label>Showing
                    <select name="DataTables_Table_0_length" class="form-select form-select-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> Results
                </label>
            </div>
            <div class="table-footer mt-0">
                <div id="tablepage">
                    <div class="dt-paging">
                        <nav aria-label="pagination"><button class="dt-paging-button disabled first" role="link" type="button" aria-controls="DataTables_Table_0" aria-disabled="true" aria-label="First" data-dt-idx="first" tabindex="-1" style="">«</button><button class="dt-paging-button disabled previous" role="link" type="button" aria-controls="DataTables_Table_0" aria-disabled="true" aria-label="Previous" data-dt-idx="previous" tabindex="-1"><i class="fa fa-angle-left"></i> </button><button class="dt-paging-button current" role="link" type="button" aria-controls="DataTables_Table_0" aria-current="page" data-dt-idx="0">1</button><button class="dt-paging-button disabled next" role="link" type="button" aria-controls="DataTables_Table_0" aria-disabled="true" aria-label="Next" data-dt-idx="next" tabindex="-1"> <i class=" fa fa-angle-right"></i></button><button class="dt-paging-button disabled last" role="link" type="button" aria-controls="DataTables_Table_0" aria-disabled="true" aria-label="Last" data-dt-idx="last" tabindex="-1">»</button></nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Tables -->

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
@endsection