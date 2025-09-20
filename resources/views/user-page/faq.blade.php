@extends('layouts.guest')
@section('content')

<style>
    .postLists {
        display: flex;
        /* align-items: center; */
        flex-direction: column;
        border: 1px solid #fff;
        border-radius: 1em;
        background: linear-gradient(#f4f7fa calc(100% - 1.5em), #e6ecf4);
        box-shadow: 0 1em 1em #1f2d3d26;
        /* text-align: center; */
        text-shadow: 0 1px #fff;
        transition: .25s;
        margin-bottom: 1.75rem;

    }
</style>

<!-- Faq Sction -->
<section class="faq-section">
    <div class="container">

        <div class="row justify-content-center">
            <div class="text-center section-title mb-4 aos" data-aos="fade-up">
                <h2 class="mb-1">Most frequently asked questions</h2>
                <p>Here are the most frequently asked questions you may check before getting started.</p>
            </div>
            <div class="col-md-10">
                <div class="faq-wrapper faq-lists ">
                    @foreach ($faqs as $index => $faq)
                    <div class="faq-card postLists aos" data-aos="fade-up">
                        <h4 class="faq-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#faq{{ $index }}" aria-expanded="false" aria-controls="faq{{ $index }}">
                                {{ $faq->question }}
                            </a>
                        </h4>
                        <div id="faq{{ $index }}" class="card-collapse collapse" data-bs-parent=".faq-lists">
                            <div class="faq-content">
                                <p>{!! nl2br(e($faq->answer)) !!}</p>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>

<!-- /Faq Sction -->
@endsection