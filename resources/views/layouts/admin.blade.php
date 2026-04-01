{{--
    resources/views/layouts/admin.blade.php
    Master layout for all admin panel pages.
    Usage: @extends('layouts.admin')
--}}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>@yield('title', 'Dashboard') — Future Connect Admin</title>

    {{-- Fonts --}}
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

    {{-- Admin CSS --}}
    <link rel="stylesheet" href="{{ asset('assets/admin/css/admin.css') }}" />

    {{-- Page-specific styles --}}
    @stack('styles')
</head>
<body>

    {{-- Sidebar --}}
    @include('admin.partials.sidebar')

    {{-- Main wrapper --}}
    <main class="main">

        {{-- Header --}}
        @include('admin.partials.header')

        {{-- Page content --}}
        <div class="content">
            @yield('content')
        </div>

    </main>

    {{-- Chart.js --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>

    {{-- Page-specific scripts --}}
    @stack('scripts')

</body>
</html>
