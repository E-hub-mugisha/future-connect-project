<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Main CSS -->
  <link rel="stylesheet" href="/assets/css/style.css">
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
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

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
  <script src="/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js"
  ></script>

  <!-- Select JS -->
  <script src="/assets/plugins/select2/js/select2.min.js"></script>

  <!-- Custom JS -->
  <script src="/assets/js/script.js"></script>
    </body>
</html>
