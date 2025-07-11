<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Future Connect</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">

    <!-- Theme Settings Js -->
    <script src="{{ asset('assets/js/theme-script.js') }}"></script>

    <!-- Tabler Icon CSS -->
    <link rel="stylesheet"
        href="{{ asset('assets/plugins/tabler-icons/tabler-icons.min.css') }}">

    <!-- Datetimepicker CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap-datetimepicker.min.css') }}">

    <!-- Daterangepicker CSS -->
    <link rel="stylesheet"
        href="{{ asset('assets/plugins/daterangepicker/daterangepicker.css') }}">

    <!-- Fontawesome CSS -->
    <link rel="stylesheet"
        href="{{ asset('assets/plugins/fontawesome/css/fontawesome.min.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/plugins/fontawesome/css/all.min.css') }}">

    <!-- Fearther CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/feather.css') }}">

    <!-- Owl carousel CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/owl.carousel.min.css') }}">

    <!-- Select CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/select2/css/select2.min.css') }}">

    <!-- Main CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
</head>

<body>
    <div class="main-wrapper">

        <!-- <div class="top-header">
            Find the Best Instant Talents Platform
            <span class="close-btn"
                onclick="if (!window.__cfRLUnblockHandlers) return false; this.parentElement.style.display='none'"
                data-cf-modified-befc89958e432fcd140d906a-=""><i class="ti ti-xbox-x"></i></span>
        </div> -->

        @include('components.user-header')

        @yield('content')

        @include('components.user-footer')

        <div class="back-to-top">
			<a class="back-to-top-icon align-items-center justify-content-center d-flex" href="#top">
				<i class="ti ti-arrow-badge-up" aria-hidden="true"></i>
			</a>
		</div>
        
        <!-- jQuery -->
        <script src="{{ asset('assets/js/jquery-3.7.1.min.js') }}"></script>

        <!-- Bootstrap Core JS -->
        <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('assets/js/bootstrap-scrollspy.js') }}"></script>

        <!-- Slimscroll JS -->
        <script src="{{ asset('assets/js/jquery.slimscroll.min.js') }}"></script>

        <!-- Feather JS -->
        <script src="{{ asset('assets/js/feather.min.js') }}"></script>

        <!-- Slick JS -->
        <script src="{{ asset('assets/plugins/slick/slick.js')}}"></script>

        <!-- Apexchart JS -->
        <script src="{{ asset('assets/plugins/apexchart/apexcharts.min.js') }}"></script>
        <script src="{{ asset('assets/plugins/apexchart/chart-data.js') }}"></script>

        <!-- date range -->
        <script src="{{ asset('assets/js/moment.min.js') }}"></script>
        <script src="{{ asset('assets/plugins/daterangepicker/daterangepicker.js') }}">
        </script>
        <script src="{{ asset('assets/js/bootstrap-datetimepicker.min.js') }}"></script>

        <!-- Sticky Sidebar JS -->
        <script src="{{ asset('assets/plugins/theia-sticky-sidebar/ResizeSensor.js') }}">
        </script>
        <script
            src="{{ asset('assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js') }}">
        </script>

        <!-- Owl Carousel JS -->
        <script src="{{ asset('assets/js/owl.carousel.min.js') }}"></script>

        <!-- Select JS -->
        <script src="{{ asset('assets/plugins/select2/js/select2.min.js') }}"></script>

        <!-- Custom JS -->
        <script src="{{ asset('assets/js/script.js') }}"></script>

        <script>
            $(document).ready(function () {
                $('#skillsCategoryTabs .nav-link').on('click', function (e) {
                    e.preventDefault();

                    var selectedCategory = $(this).data('category');

                    // Active tab highlighting
                    $('#skillsCategoryTabs .nav-link').removeClass('active');
                    $(this).addClass('active');

                    // Filter skill cards
                    $('.skill-card').each(function () {
                        var cardCategory = $(this).data('category');

                        if (selectedCategory === 'All' || cardCategory === selectedCategory) {
                            $(this).fadeIn();
                        } else {
                            $(this).fadeOut();
                        }
                    });
                });
            });

        </script>
</body>

</html>
