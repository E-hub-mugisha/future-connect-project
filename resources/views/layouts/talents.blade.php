<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-90680653-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-90680653-2');
    </script>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <!-- Meta -->
    <meta name="description" content="Responsive Bootstrap 5 Dashboard Template">
    <meta name="author" content="BootstrapDash">

    <title>@yield('title') | Talent Dashboard</title>

    <!-- vendor css -->
    <link href="{{ asset('assets/talents/src/lib/fontawesome-free/css/all.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/talents/src/lib/ionicons/css/ionicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/talents/src/lib/typicons.font/typicons.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/talents/src/lib/flag-icon-css/css/flag-icon.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/talents/src/lib/datatables.net-dt/css/jquery.dataTables.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/talents/src/lib/datatables.net-responsive-dt/css/responsive.dataTables.min.css') }}" rel="stylesheet">
    <!-- azia CSS -->
    <link rel="stylesheet" href="{{ asset('assets/talents/src/css/azia.css') }}">
    <link href="{{ asset('assets/talents/src/lib/quill/quill.snow.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/talents/src/lib/quill/quill.bubble.css') }}" rel="stylesheet">
</head>

<body>

    @include('talent-pages.header')

    <div class="az-content">
        @yield('content')
    </div>

    @include('talent-pages.footer')
    <script src="{{ asset('assets/talents/src/lib/jquery/jquery.min.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="{{ asset('assets/talents/src/lib/bootstrap/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/talents/src/lib/ionicons/ionicons.js') }}"></script>
    <script src="{{ asset('assets/talents/src/lib/jquery.flot/jquery.flot.js') }}"></script>
    <script src="{{ asset('assets/talents/src/lib/jquery.flot/jquery.flot.resize.js') }}"></script>
    <script src="{{ asset('assets/talents/src/lib/chart.js/Chart.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/talents/src/lib/peity/jquery.peity.min.js') }}"></script>

    <script src="{{ asset('assets/talents/src/js/jquery.cookie.js') }}" type="text/javascript"></script>
    <script src="{{ asset('assets/talents/src/js/azia.js') }}"></script>
    <script src="{{ asset('assets/talents/src/js/chart.flot.sampledata.js') }}"></script>
    <script src="{{ asset('assets/talents/src/js/dashboard.sampledata.js') }}"></script>

    <script src="{{ asset('assets/talents/src/lib/datatables.net/js/jquery.dataTables.min.js')}}"></script>
    <script src="{{ asset('assets/talents/src/lib/datatables.net-dt/js/dataTables.dataTables.min.js')}}"></script>
    <script src="{{ asset('assets/talents/src/lib/datatables.net-responsive/js/dataTables.responsive.min.js')}}"></script>
    <script src="{{ asset('assets/talents/src/lib/datatables.net-responsive-dt/js/responsive.dataTables.min.js')}}"></script>
    <script src="{{ asset('assets/talents/src/lib/quill/quill.min.js') }}"></script>
    
    <script>
        $(function() {
            'use strict'

            var plot = $.plot('#flotChart', [{
                data: flotSampleData3,
                color: '#007bff',
                lines: {
                    fillColor: {
                        colors: [{
                            opacity: 0
                        }, {
                            opacity: 0.2
                        }]
                    }
                }
            }, {
                data: flotSampleData4,
                color: '#560bd0',
                lines: {
                    fillColor: {
                        colors: [{
                            opacity: 0
                        }, {
                            opacity: 0.2
                        }]
                    }
                }
            }], {
                series: {
                    shadowSize: 0,
                    lines: {
                        show: true,
                        lineWidth: 2,
                        fill: true
                    }
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 8
                },
                yaxis: {
                    show: true,
                    min: 0,
                    max: 100,
                    ticks: [
                        [0, ''],
                        [20, '20K'],
                        [40, '40K'],
                        [60, '60K'],
                        [80, '80K']
                    ],
                    tickColor: '#eee'
                },
                xaxis: {
                    show: true,
                    color: '#fff',
                    ticks: [
                        [25, 'OCT 21'],
                        [75, 'OCT 22'],
                        [100, 'OCT 23'],
                        [125, 'OCT 24']
                    ],
                }
            });

            $.plot('#flotChart1', [{
                data: dashData2,
                color: '#00cccc'
            }], {
                series: {
                    shadowSize: 0,
                    lines: {
                        show: true,
                        lineWidth: 2,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.2
                            }, {
                                opacity: 0.2
                            }]
                        }
                    }
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 0
                },
                yaxis: {
                    show: false,
                    min: 0,
                    max: 35
                },
                xaxis: {
                    show: false,
                    max: 50
                }
            });

            $.plot('#flotChart2', [{
                data: dashData2,
                color: '#007bff'
            }], {
                series: {
                    shadowSize: 0,
                    bars: {
                        show: true,
                        lineWidth: 0,
                        fill: 1,
                        barWidth: .5
                    }
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 0
                },
                yaxis: {
                    show: false,
                    min: 0,
                    max: 35
                },
                xaxis: {
                    show: false,
                    max: 20
                }
            });


            //-------------------------------------------------------------//


            // Line chart
            $('.peity-line').peity('line');

            // Bar charts
            $('.peity-bar').peity('bar');

            // Bar charts
            $('.peity-donut').peity('donut');

            var ctx5 = document.getElementById('chartBar5').getContext('2d');
            new Chart(ctx5, {
                type: 'bar',
                data: {
                    labels: [0, 1, 2, 3, 4, 5, 6, 7],
                    datasets: [{
                        data: [2, 4, 10, 20, 45, 40, 35, 18],
                        backgroundColor: '#560bd0'
                    }, {
                        data: [3, 6, 15, 35, 50, 45, 35, 25],
                        backgroundColor: '#cad0e8'
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: false
                    },
                    legend: {
                        display: false,
                        labels: {
                            display: false
                        }
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: false
                            },
                            display: false,
                            ticks: {
                                beginAtZero: true,
                                fontSize: 11,
                                max: 80
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false
                            },
                            display: false,
                            barPercentage: 0.6,
                            gridLines: {
                                color: 'rgba(0,0,0,0.08)'
                            },
                            ticks: {
                                beginAtZero: true,
                                fontSize: 11,
                                display: false
                            }
                        }]
                    }
                }
            });

            // Donut Chart
            var datapie = {
                labels: ['Search', 'Email', 'Referral', 'Social', 'Other'],
                datasets: [{
                    data: [25, 20, 30, 15, 10],
                    backgroundColor: ['#6f42c1', '#007bff', '#17a2b8', '#00cccc', '#adb2bd']
                }]
            };

            var optionpie = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false,
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            };

            // For a doughnut chart
            var ctxpie = document.getElementById('chartDonut');
            var myPieChart6 = new Chart(ctxpie, {
                type: 'doughnut',
                data: datapie,
                options: optionpie
            });

        });
    </script>

    <script>
        $(function() {
            'use strict'

            $('#example1').DataTable({
                language: {
                    searchPlaceholder: 'Search...',
                    sSearch: '',
                    lengthMenu: '_MENU_ items/page',
                }
            });

            $('#example2').DataTable({
                responsive: true,
                language: {
                    searchPlaceholder: 'Search...',
                    sSearch: '',
                    lengthMenu: '_MENU_ items/page',
                }
            });

            // Select2
            $('.dataTables_length select').select2({
                minimumResultsForSearch: Infinity
            });

        });
    </script>

    <script>
        $(function() {
            'use strict'

            var icons = Quill.import('ui/icons');
            icons['bold'] = '<i class="la la-bold" aria-hidden="true"></i>';
            icons['italic'] = '<i class="la la-italic" aria-hidden="true"></i>';
            icons['underline'] = '<i class="la la-underline" aria-hidden="true"></i>';
            icons['strike'] = '<i class="la la-strikethrough" aria-hidden="true"></i>';
            icons['list']['ordered'] = '<i class="la la-list-ol" aria-hidden="true"></i>';
            icons['list']['bullet'] = '<i class="la la-list-ul" aria-hidden="true"></i>';

            icons['link'] = '<i class="la la-link" aria-hidden="true"></i>';
            icons['image'] = '<i class="la la-image" aria-hidden="true"></i>';
            icons['video'] = '<i class="la la-film" aria-hidden="true"></i>';
            icons['code-block'] = '<i class="la la-code" aria-hidden="true"></i>';

            var toolbarOptions = [
                [{
                    'header': [1, 2, 3, 4, 5, 6, false]
                }],
                ['bold', 'italic', 'underline', 'strike'],
                [{
                    'list': 'ordered'
                }, {
                    'list': 'bullet'
                }],
                ['link', 'image', 'video']
            ];

            var quill = new Quill('#quillEditor', {
                modules: {
                    toolbar: toolbarOptions
                },
                theme: 'snow'
            });

            var quillModal = new Quill('#quillEditorModal', {
                modules: {
                    toolbar: toolbarOptions
                },
                theme: 'snow'
            });

            var quillModal2 = new Quill('#quillEditorModal2', {
                modules: {
                    toolbar: toolbarOptions
                },
                theme: 'snow'
            });

            var toolbarInlineOptions = [
                ['bold', 'italic', 'underline'],
                [{
                    'header': 1
                }, {
                    'header': 2
                }, 'blockquote'],
                ['link', 'image', 'code-block'],
            ];

            var quillInline = new Quill('#quillInline', {
                modules: {
                    toolbar: toolbarInlineOptions
                },
                bounds: '#quillInline',
                scrollingContainer: '#scrolling-container',
                placeholder: 'Write something...',
                theme: 'bubble'
            });

            new PerfectScrollbar('#scrolling-container', {
                suppressScrollX: true
            });

        });
    </script>
</body>

</html>