<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Future Connect</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">

    <!-- Theme Settings Js -->
    <script src="/assets/js/theme-script.js"></script>

    <!-- Tabler Icon CSS -->
    <link rel="stylesheet" href="/assets/plugins/tabler-icons/tabler-icons.min.css">

    <!-- Datetimepicker CSS -->
    <link rel="stylesheet" href="/assets/css/bootstrap-datetimepicker.min.css">

    <!-- Daterangepicker CSS -->
    <link rel="stylesheet" href="/assets/plugins/daterangepicker/daterangepicker.css">

    <!-- Fontawesome CSS -->
    <link rel="stylesheet" href="/assets/plugins/fontawesome/css/fontawesome.min.css">
    <link rel="stylesheet" href="/assets/plugins/fontawesome/css/all.min.css">

    <!-- Fearther CSS -->
    <link rel="stylesheet" href="/assets/css/feather.css">

    <!-- Select CSS -->
    <link rel="stylesheet" href="/assets/plugins/select2/css/select2.min.css">

    <!-- Main CSS -->
    <link rel="stylesheet" href="/assets/css/style.css">

</head>

<body class="font-sans antialiased">
    <div class="main-wrapper">
        @include('components.admin.adminSidebar')
        <div className="page-wrapper">

            @yield('content')

        </div>
        <!-- Top Scroll -->
        <div class="back-to-top">
            <a class="back-to-top-icon align-items-center justify-content-center d-flex" href="#top">
                <img src="{{ asset('assets/img/icons/arrow-badge-up.svg') }}" alt="img">
            </a>
        </div>
        <!-- /Top Scroll -->

        <!-- jQuery -->
        <script src="/assets/js/jquery-3.7.1.min.js"></script>

        <!-- Bootstrap Core JS -->
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/bootstrap-scrollspy.js"></script>

        <!-- Slimscroll JS -->
        <script src="/assets/js/jquery.slimscroll.min.js"></script>

        <!-- Feather JS -->
        <script src="/assets/js/feather.min.js"></script>

        <!-- Apexchart JS -->
        <script src="/assets/plugins/apexchart/apexcharts.min.js"></script>
        <script src="/assets/plugins/apexchart/chart-data.js"></script>

        <!-- date range -->
        <script src="/assets/js/moment.min.js"></script>
        <script src="/assets/plugins/daterangepicker/daterangepicker.js">
        </script>
        <script src="/assets/js/bootstrap-datetimepicker.min.js"></script>

        <!-- Sticky Sidebar JS -->
        <script src="/assets/plugins/theia-sticky-sidebar/ResizeSensor.js">
        </script>
        <script src="/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js"></script>

        <!-- Select JS -->
        <script src="/assets/plugins/select2/js/select2.min.js"></script>

        <!-- Custom JS -->
        <script src="/assets/js/script.js"></script>
</body>

</html>
