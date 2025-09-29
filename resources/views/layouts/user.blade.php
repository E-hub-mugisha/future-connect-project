<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta charset="utf-8">
    <meta name="author" content="Softnio">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description"
        content="A powerful and conceptual apps base dashboard template that especially build for developers and programmers.">
    <link rel="shortcut icon" href="images/favicon.png">
    <title>User Panel | @yield('title') - {{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ asset('assets/css/dashlitee1e3.css?ver=3.2.4') }}">
    <link id="skin-default" rel="stylesheet" href="{{ asset('assets/css/themee1e3.css?ver=3.2.4') }}">
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

<body class="nk-body bg-lighter npc-general has-sidebar ">
    <div class="nk-app-root">
        <div class="nk-main ">
            @include('user.sidebar')
            <div class="nk-wrap ">
                @include('user.header')
                <div class="nk-content ">
                    @yield('content')
                </div>
                @include('components.admin.footer')
            </div>
        </div>
    </div>
    <script src="{{ asset('assets/js/bundlee1e3.js?ver=3.2.4') }}"></script>
    <script src="{{ asset('assets/js/scriptse1e3.js?ver=3.2.4') }}"></script>
    <script src="{{ asset('assets/js/demo-settingse1e3.js?ver=3.2.4') }}"></script>
    <script src="{{ asset('assets/js/charts/gd-defaulte1e3.js?ver=3.2.4') }}"></script>

    <!-- Include SweetAlert -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    @if(session('error'))
    <script>
        Swal.fire({
            icon: 'error',
            title: 'Access Denied',
            text: "{{ session('error') }}",
            html: `<p style="margin-top:10px;">
                Please contact the administrator if you believe this is a mistake.<br>
                <b>Tip:</b> Make sure you're logged in with the correct account.
               </p>`,
            showConfirmButton: true
        });
    </script>
    @endif

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