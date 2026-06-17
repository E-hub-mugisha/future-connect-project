<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="author" content="Softnio">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title') - {{ config('app.name') }}</title>

    <!-- Bootstrap CSS -->

    <!-- <link href="{{ asset('dashboard/assets/css/bootstrap.rtl.css') }}" rel="stylesheet" type="text/css" disabled> -->
    <!-- Icons CSS -->

    <!-- App CSS -->

    <link href="{{ asset('dashboard/assets/css/app.rtl.css') }}" rel="stylesheet" type="text/css" disabled>
    <!-- Admin Bundle JS -->

    <script type="module" crossorigin src="{{ asset('dashboard/assets/js/src/index.js') }}"></script>
    <link rel="modulepreload" crossorigin href="{{ asset('dashboard/assets/admin.bundle-CEbNEZ37.js') }}">
    <link rel="modulepreload" crossorigin href="{{ asset('dashboard/assets/swiper-bundle-EE6_k-Kw.js') }}">
    <link rel="modulepreload" crossorigin href="{{ asset('dashboard/assets/apexcharts.esm-B_m6KPN7.js') }}">
    <link rel="modulepreload" crossorigin href="{{ asset('dashboard/assets/main-O_SKZbQk.js') }}">

    <script type="module" crossorigin src="{{ asset('dashboard/assets/js/src/apps-agents-profile.js') }}"></script>
    <link rel="modulepreload" crossorigin href="{{ asset('dashboard/assets/progress-circle.init-BSjgPg28.js') }}">

    <link rel="stylesheet" crossorigin href="{{ asset('dashboard/assets/css/swiper-bundle.css') }}">
    <link rel="stylesheet" crossorigin href="{{ asset('dashboard/assets/css/admin.css') }}">

    <script type="module" crossorigin src="{{ asset('dashboard/assets/table-datatables-basic.init.js') }}"></script>
    <script type="module" crossorigin src="{{ asset('dashboard/assets/main.js') }}"></script>

    <link rel="stylesheet" href="{{ asset('dashboard/assets/css/dataTables.bootstrap5.css') }}">

    {{-- jQuery (required) --}}
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    {{-- Summernote --}}
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.20/dist/summernote-bs5.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.20/dist/summernote-bs5.min.js"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tom-select@2/dist/css/tom-select.min.css">
    <script src="https://cdn.jsdelivr.net/npm/tom-select@2/dist/js/tom-select.complete.min.js"></script>
    <link rel="shortcut icon" href="{{ asset('images/favicon.png') }}">

    @stack('styles')
</head>

<body class="sidebar-hidden ">

    @include('components.admin.header')

    @include('components.admin.sidebar')

    <div class="min-vh-100 position-relative">
        <div class="page-wrapper">
            <div class="container-fluid">
                @yield('content')
            </div>
        </div>
        @include('components.admin.footer')
    </div>
    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>


    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        @if(session('success'))
        Toast.fire({
            icon: 'success',
            title: "{{ session('success') }}"
        });
        @endif

        @if(session('error'))
        Toast.fire({
            icon: 'error',
            title: "{{ session('error') }}"
        });
        @endif

        @if(session('warning'))
        Toast.fire({
            icon: 'warning',
            title: "{{ session('warning') }}"
        });
        @endif

        @if(session('info'))
        Toast.fire({
            icon: 'info',
            title: "{{ session('info') }}"
        });
        @endif
    </script>

    @if(session('success'))
    <script>
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: "{{ session('success') }}"
        });
    </script>
    @endif

    @if(session('error'))
    <script>
        Swal.fire({
            icon: 'error',
            title: 'Access Denied',
            text: "{{ session('error') }}",
            html: `
                    <p class="mt-2">
                        Please contact the administrator if you believe this is a mistake.<br>
                        <strong>Tip:</strong> Make sure you're logged in with the correct account.
                    </p>
                `,
            showConfirmButton: true
        });
    </script>
    @endif

    @stack('scripts')

</body>

</html>