<!DOCTYPE html>
<html lang="zxx" class="js">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->

<head>
    <meta charset="utf-8">
    <meta name="author" content="Softnio">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description"
        content="A powerful and conceptual apps base dashboard template that especially build for developers and programmers.">
    <link rel="shortcut icon" href="images/favicon.png">
    <title>Invoice Print | Future connect</title>
    <link rel="stylesheet" href="{{ asset('assets/css/dashlitee1e3.css?ver=3.2.4') }}">
    <link id="skin-default" rel="stylesheet"
        href="{{ asset('assets/css/themee1e3.css?ver=3.2.4') }}">
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-91615293-4"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-91615293-4');
    </script>
</head>

<body class="bg-white" onload="printPromot()">
    <div class="nk-block">
        <div class="invoice invoice-print">
            <div class="invoice-wrap">
                <div class="invoice-brand text-center">
                    <div class="logo-link">
                        <img class="logo-light logo-img" src="{{ asset('assets/img/WORDMARK.png') }}" srcset="{{ asset('assets/img/WORDMARK.png') }}" alt="">
                        <img class="logo-dark logo-img" src="{{ asset('assets/img/WORDMARK.png') }}" srcset="{{ asset('assets/img/WORDMARK.png') }}" alt="">
                    </div>
                </div>
                <div class="invoice-head">
                    <div class="invoice-contact"><span class="overline-title">Invoice To</span>
                        <div class="invoice-contact-info">
                            <h4 class="title">{{ $payment->email }}</h4>
                            <ul class="list-plain">
                                <li><em class="icon ni ni-map-pin-fill"></em><span>House #65, 4328 Marion
                                        Street<br>Newbury, VT 05051</span></li>
                                <li><em class="icon ni ni-call-fill"></em><span>+012 8764 556</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="invoice-desc">
                        <h3 class="title">Invoice</h3>
                        <ul class="list-plain">
                            <li class="invoice-id"><span>Invoice ID</span>:<span>{{ $payment->id }}</span></li>
                            <li class="invoice-date">
                                <span>Date</span>:<span>{{ $payment->created_at->format('d M, Y h:i A') }}</span>
                            </li>
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
                                    <td>{{ $payment->story->title }}</td>
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
                        <div class="nk-notes ff-italic fs-12px text-soft"> Invoice was created on a computer and is
                            valid without the signature and seal. </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        function printPromot() {
            window.print();
        }
    </script>
</body>


</html>