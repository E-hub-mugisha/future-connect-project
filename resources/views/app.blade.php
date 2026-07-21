<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title inertia>
        Future Connect
    </title>

    <link rel="shortcut icon" href="{{ asset('assets/img/favicon.png') }}">

    

    <!-- AOS -->
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">

    

    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css">

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])

    @inertiaHead
</head>


<body>

    @inertia
 
</body>

</html>