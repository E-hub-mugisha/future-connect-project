<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>User Panel - @yield('title') - Future Connect</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">

    <!-- AOS CSS -->
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">

    <!-- Theme Settings Js -->
    <script src="{{ asset('assets/js/theme-script.js') }}"></script>

    <!-- Tabler Icon CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/tabler-icons/tabler-icons.min.css') }}">

    <!-- Datetimepicker CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap-datetimepicker.min.css') }}">

    <!-- Daterangepicker CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/daterangepicker/daterangepicker.css') }}">

    <!-- Fontawesome CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/fontawesome/css/fontawesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/plugins/fontawesome/css/all.min.css') }}">

    <!-- Fearther CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/feather.css') }}">

    <!-- Owl carousel CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/owl.carousel.min.css') }}">

    <!-- Select CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/select2/css/select2.min.css') }}">

    <!-- Main CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">

    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />

    <!-- Toastr CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet">
</head>

<body>

    <!-- Main Wrapper -->
    <div class="main-wrapper">

        @include('user.header')

        @include('user.sidebar')
        
        <div class="page-wrapper">
            @if(session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
            @endif
            @yield('content')
        </div>
    </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

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

        <!-- Date Range JS -->
        <script src="{{ asset('assets/js/moment.min.js') }}"></script>
        <script src="{{ asset('assets/plugins/daterangepicker/daterangepicker.js') }}"></script>
        <script src="{{ asset('assets/js/bootstrap-datetimepicker.min.js') }}"></script>

        <!-- Sticky Sidebar JS -->
        <script src="{{ asset('assets/plugins/theia-sticky-sidebar/ResizeSensor.js') }}"></script>
        <script src="{{ asset('assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js') }}"></script>

        <!-- Owl Carousel JS -->
        <script src="{{ asset('assets/js/owl.carousel.min.js') }}"></script>

        <!-- Select2 JS -->
        <script src="{{ asset('assets/plugins/select2/js/select2.min.js') }}"></script>

        <!-- AOS JS -->
        <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
        <script>
            AOS.init();
        </script>

        <!-- Custom JS -->
        <script src="{{ asset('assets/js/script.js') }}"></script>

        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <!-- Toastr JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
        <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
        <script>
            $(document).ready(function() {
                $('#storiesCategoryTabs .nav-link').on('click', function(e) {
                    e.preventDefault();

                    var selectedCategory = $(this).data('category');

                    // Active tab highlighting
                    $('#storiesCategoryTabs .nav-link').removeClass('active');
                    $(this).addClass('active');

                    // Filter skill cards
                    $('.skill-card').each(function() {
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
        <script>
            var TrandingSlider = new Swiper('.tranding-slider', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                loop: true,
                speed: 1000,
                slidesPerView: 1.5,
                coverflowEffect: {
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
        </script>


        <script>
            @if(session('success'))
            toastr.success("{{ session('success') }}");
            @endif

            @if(session('error'))
            toastr.error("{{ session('error') }}");
            @endif

            @if(session('warning'))
            toastr.warning("{{ session('warning') }}");
            @endif

            @if(session('info'))
            toastr.info("{{ session('info') }}");
            @endif
        </script>

</body>

</html>