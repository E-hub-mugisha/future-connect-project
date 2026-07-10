@extends('layouts.guest')
@section('title', 'FAQ - Future Connect')
@section('content')



<div class="fq-page">

    {{-- Hero + search --}}
    <section class="fq-hero">
        <div class="fq-hero-glow"></div>
        <div class="fq-hero-inner">
            <span class="fq-eyebrow"><i class="ti ti-help-circle"></i> Support</span>
            <h1>Frequently asked <span>questions</span></h1>
            <p>Everything you need to know before getting started. Can't find what you're looking for? Ask us directly below.</p>

            <div class="fq-search-wrap">
                <i class="ti ti-search"></i>
                <input type="text" id="fqSearchInput" placeholder="Search questions..." autocomplete="off">
            </div>
        </div>
    </section>

    <div class="fq-body">

        <p class="fq-count" id="fqCount">
            <strong>{{ $faqs->count() }}</strong> question{{ $faqs->count() === 1 ? '' : 's' }}
        </p>

        <div class="faq-wrapper">
            <div class="faq-lists" id="fqList">
                @foreach ($faqs as $index => $faq)
                <div class="faq-card aos" data-aos="fade-up" data-fq-question="{{ strtolower($faq->question) }}" data-fq-answer="{{ strtolower(strip_tags($faq->answer)) }}">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faq{{ $index }}" aria-expanded="false" aria-controls="faq{{ $index }}">
                            <span>{{ $faq->question }}</span>
                            <span class="fq-icon"><i class="ti ti-plus"></i></span>
                        </a>
                    </h4>
                    <div id="faq{{ $index }}" class="card-collapse collapse" data-bs-parent="#fqList">
                        <div class="faq-content">
                            <p>{!! nl2br(e($faq->answer)) !!}</p>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>

            <div class="fq-empty" id="fqEmpty">
                No questions match your search. Try a different term, or ask us directly below.
            </div>
        </div>

        {{-- Ask a question CTA --}}
        <div class="fq-cta">
            <div class="fq-cta-card">
                <div class="fq-cta-text">
                    <h3>Still have questions?</h3>
                    <p>Can't find the answer you're looking for? Send us your question and our team will get back to you.</p>
                </div>
                <button type="button" class="fq-btn-ask" data-bs-toggle="modal" data-bs-target="#askQuestionModal">
                    <i class="ti ti-message-circle-2"></i> Ask a Question
                </button>
            </div>
        </div>

    </div>
</div>

{{-- ════════════════════ ASK A QUESTION MODAL ════════════════════ --}}
<div class="modal fade fq-modal" id="askQuestionModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <h5 class="modal-title">
                        Ask a question
                        <small>We'll get back to you by email</small>
                    </h5>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            {{-- TODO: create a route named 'faq.ask.store' with a controller that
                 stores/emails the submitted question --}}
            <form action="{{ route('faq.ask.store') }}" method="POST">
                @csrf
                <div class="modal-body">
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="fq-form-label">Your Question <span style="color:var(--fq-green)">*</span></label>
                            <textarea name="question" class="fq-form-control" rows="4" placeholder="Type your question here..." required>{{ old('question') }}</textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="gap:10px;">
                    <button type="button" class="fq-btn-outline" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="fq-btn-ask">
                        <i class="ti ti-send"></i> Submit Question
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    (function() {
        const input = document.getElementById('fqSearchInput');
        const cards = Array.from(document.querySelectorAll('#fqList .faq-card'));
        const empty = document.getElementById('fqEmpty');
        const count = document.getElementById('fqCount');
        const total = cards.length;

        if (!input) return;

        input.addEventListener('input', () => {
            const term = input.value.trim().toLowerCase();
            let visible = 0;

            cards.forEach(card => {
                const question = card.getAttribute('data-fq-question') || '';
                const answer = card.getAttribute('data-fq-answer') || '';
                const matches = !term || question.includes(term) || answer.includes(term);
                card.classList.toggle('fq-hidden', !matches);
                if (matches) visible++;
            });

            empty.classList.toggle('show', visible === 0);
            count.innerHTML = term
                ? `<strong>${visible}</strong> of ${total} question${total === 1 ? '' : 's'}`
                : `<strong>${total}</strong> question${total === 1 ? '' : 's'}`;
        });
    })();
</script>

@endsection