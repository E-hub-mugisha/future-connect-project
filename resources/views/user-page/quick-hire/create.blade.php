@extends('layouts.guest')
@section('title', 'Quick Hire - Post a project, get matched fast')
@section('content')

<style>
    :root {
        --qh-bg: #0e1618;
        --qh-surface: #141d20;
        --qh-surface2: #1a2428;
        --qh-green: #48d597;
        --qh-green-dim: rgba(0, 166, 103, .14);
        --qh-green-glow: rgba(0, 166, 103, .28);
        --qh-text: #e8f0ed;
        --qh-muted: #7a9a8e;
        --qh-border: rgba(0, 166, 103, .16);
        --qh-border-h: rgba(0, 166, 103, .38);
        --qh-radius: 14px;
    }

    .qh-page, .qh-page *, .qh-page *::before, .qh-page *::after {
        box-sizing: border-box;
    }

    .qh-page {
        background: var(--qh-bg);
        font-family: 'DM Sans', sans-serif;
        color: var(--qh-text);
        padding: 50px 0 80px;
    }

    .qh-header {
        text-align: center;
        max-width: 640px;
        margin: 0 auto 36px;
    }

    .qh-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(0, 166, 103, .1);
        border: 1px solid rgba(0, 166, 103, .2);
        border-radius: 99px;
        padding: 5px 14px;
        font-size: 11.5px;
        color: var(--qh-green);
        font-weight: 500;
        margin-bottom: 16px;
    }

    .qh-pill::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--qh-green);
        display: inline-block;
    }

    .qh-header h1 {
        font-family: 'Syne', sans-serif;
        font-weight: 800;
        font-size: clamp(26px, 3.4vw, 36px);
        letter-spacing: -1px;
        color: #fff;
        margin: 0 0 10px;
    }

    .qh-header p {
        color: var(--qh-muted);
        font-size: 14px;
        line-height: 1.6;
        margin: 0;
    }

    .qh-wrap {
        max-width: 760px;
        margin: 0 auto;
    }

    /* Progress bar */
    .qh-progress {
        display: flex;
        align-items: center;
        margin-bottom: 36px;
    }

    .qh-progress-step {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .qh-progress-circle {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: var(--qh-surface2);
        border: 1px solid var(--qh-border);
        color: var(--qh-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 700;
        z-index: 1;
        transition: all .25s;
    }

    .qh-progress-label {
        font-size: 11px;
        color: var(--qh-muted);
        margin-top: 8px;
        text-align: center;
        white-space: nowrap;
    }

    .qh-progress-line {
        position: absolute;
        top: 17px;
        left: -50%;
        width: 100%;
        height: 2px;
        background: var(--qh-border);
        z-index: 0;
    }

    .qh-progress-step:first-child .qh-progress-line {
        display: none;
    }

    .qh-progress-step.active .qh-progress-circle,
    .qh-progress-step.done .qh-progress-circle {
        background: var(--qh-green);
        border-color: var(--qh-green);
        color: #06120d;
    }

    .qh-progress-step.active .qh-progress-label,
    .qh-progress-step.done .qh-progress-label {
        color: var(--qh-text);
    }

    .qh-progress-step.done .qh-progress-line,
    .qh-progress-step.active .qh-progress-line {
        background: var(--qh-green);
    }

    /* Card / step panel */
    .qh-card {
        background: var(--qh-surface);
        border: 1px solid var(--qh-border);
        border-radius: var(--qh-radius);
        padding: 32px;
    }

    .qh-step { display: none; }
    .qh-step.active { display: block; animation: qhFade .25s ease; }

    @keyframes qhFade {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .qh-step-title {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #fff;
        margin: 0 0 4px;
    }

    .qh-step-sub {
        color: var(--qh-muted);
        font-size: 13px;
        margin: 0 0 24px;
    }

    .qh-form-group { margin-bottom: 18px; }

    .qh-form-label {
        font-size: 12.5px;
        font-weight: 600;
        color: var(--qh-muted);
        margin-bottom: 6px;
        display: block;
    }

    .qh-form-control, select.qh-form-control {
        width: 100%;
        background: var(--qh-surface2);
        border: 1px solid var(--qh-border);
        border-radius: 9px;
        color: var(--qh-text);
        font-size: 13.5px;
        padding: 12px 14px;
        outline: none;
        transition: border-color .2s, background .2s;
    }

    .qh-form-control::placeholder { color: #3d5a52; }

    .qh-form-control:focus {
        border-color: var(--qh-green);
        background: rgba(0, 166, 103, .06);
    }

    textarea.qh-form-control { resize: vertical; min-height: 110px; }

    .qh-form-error {
        color: #ff8a8a;
        font-size: 11.5px;
        margin-top: 5px;
    }

    .qh-row { display: flex; gap: 16px; flex-wrap: wrap; }
    .qh-row > div { flex: 1; min-width: 180px; }

    /* Budget type toggle */
    .qh-toggle-group {
        display: flex;
        gap: 10px;
        margin-bottom: 18px;
    }

    .qh-toggle {
        flex: 1;
        text-align: center;
        padding: 12px;
        border-radius: 9px;
        border: 1px solid var(--qh-border);
        background: var(--qh-surface2);
        color: var(--qh-muted);
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all .2s;
    }

    .qh-toggle input { display: none; }

    .qh-toggle.active {
        background: var(--qh-green-dim);
        border-color: var(--qh-border-h);
        color: #fff;
    }

    /* Talent suggestion cards */
    .qh-talent-loading {
        text-align: center;
        color: var(--qh-muted);
        font-size: 13px;
        padding: 30px 0;
    }

    .qh-talent-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
    }

    .qh-talent-card {
        position: relative;
        background: var(--qh-surface2);
        border: 1px solid var(--qh-border);
        border-radius: 12px;
        padding: 16px;
        display: flex;
        gap: 12px;
        align-items: flex-start;
        cursor: pointer;
        transition: all .2s;
    }

    .qh-talent-card:hover { border-color: var(--qh-border-h); }

    .qh-talent-card.selected {
        border-color: var(--qh-green);
        background: var(--qh-green-dim);
    }

    .qh-talent-card img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
        background: var(--qh-surface);
    }

    .qh-talent-name {
        font-size: 13.5px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 2px;
    }

    .qh-talent-meta {
        font-size: 10.5px;
        color: var(--qh-green);
        font-weight: 600;
        margin-bottom: 4px;
        display: flex;
        gap: 6px;
        align-items: center;
    }

    .qh-talent-excerpt {
        font-size: 11.5px;
        color: var(--qh-muted);
        line-height: 1.5;
    }

    .qh-talent-check {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 1px solid var(--qh-border-h);
        display: flex;
        align-items: center;
        justify-content: center;
        color: transparent;
        font-size: 10px;
        background: var(--qh-surface);
        transition: all .2s;
    }

    .qh-talent-card.selected .qh-talent-check {
        background: var(--qh-green);
        color: #06120d;
    }

    .qh-skip-note {
        text-align: center;
        margin-top: 16px;
        font-size: 12px;
        color: var(--qh-muted);
    }

    .qh-empty-talents {
        text-align: center;
        padding: 30px;
        color: var(--qh-muted);
        font-size: 13px;
        border: 1px dashed var(--qh-border);
        border-radius: 10px;
    }

    /* Review summary (step 4) */
    .qh-review {
        background: var(--qh-surface2);
        border: 1px solid var(--qh-border);
        border-radius: 10px;
        padding: 16px 18px;
        margin-bottom: 22px;
        font-size: 12.5px;
        color: var(--qh-muted);
    }

    .qh-review div { margin-bottom: 6px; }
    .qh-review strong { color: var(--qh-text); }
    .qh-review div:last-child { margin-bottom: 0; }

    /* Nav buttons */
    .qh-nav {
        display: flex;
        justify-content: space-between;
        margin-top: 28px;
        gap: 12px;
    }

    .qh-btn-primary {
        background: var(--qh-green);
        color: #06120d;
        font-weight: 700;
        font-size: 13.5px;
        border: none;
        border-radius: 9px;
        padding: 13px 26px;
        cursor: pointer;
        transition: background .2s;
    }

    .qh-btn-primary:hover { background: #00c07a; }

    .qh-btn-secondary {
        background: transparent;
        color: var(--qh-muted);
        font-weight: 600;
        font-size: 13.5px;
        border: 1px solid var(--qh-border);
        border-radius: 9px;
        padding: 13px 26px;
        cursor: pointer;
        transition: all .2s;
    }

    .qh-btn-secondary:hover { color: var(--qh-text); border-color: var(--qh-border-h); }
    .qh-btn-secondary:disabled { opacity: .35; cursor: not-allowed; }

    @media (max-width: 640px) {
        .qh-card { padding: 22px; }
        .qh-talent-grid { grid-template-columns: 1fr; }
        .qh-progress-label { display: none; }
    }
</style>

<div class="qh-page">
    <div class="container">

        <div class="qh-header">
            <div class="qh-pill">Quick Hire</div>
            <h1>Post a project, get matched fast</h1>
            <p>Tell us what you need and we'll suggest talent from the right category — no lengthy job posting required.</p>
        </div>

        <div class="qh-wrap">

            <!-- Progress -->
            <div class="qh-progress" id="qhProgress">
                <div class="qh-progress-step active" data-step="1">
                    <div class="qh-progress-line"></div>
                    <div class="qh-progress-circle">1</div>
                    <div class="qh-progress-label">Project</div>
                </div>
                <div class="qh-progress-step" data-step="2">
                    <div class="qh-progress-line"></div>
                    <div class="qh-progress-circle">2</div>
                    <div class="qh-progress-label">Budget</div>
                </div>
                <div class="qh-progress-step" data-step="3">
                    <div class="qh-progress-line"></div>
                    <div class="qh-progress-circle">3</div>
                    <div class="qh-progress-label">Talent</div>
                </div>
                <div class="qh-progress-step" data-step="4">
                    <div class="qh-progress-line"></div>
                    <div class="qh-progress-circle">4</div>
                    <div class="qh-progress-label">Contact</div>
                </div>
            </div>
            <!-- /Progress -->

            <div class="qh-card">
                <form action="{{ route('quick-hire.store') }}" method="POST" id="qhForm">
                    @csrf

                    <!-- STEP 1: Project basics -->
                    <div class="qh-step active" data-step="1">
                        <h3 class="qh-step-title">What do you need done?</h3>
                        <p class="qh-step-sub">Give us the essentials — we'll use the category to find matching talent.</p>

                        <div class="qh-form-group">
                            <label class="qh-form-label" for="qh_title">Project Title</label>
                            <input type="text" name="title" id="qh_title" class="qh-form-control"
                                placeholder="e.g. Build a landing page for our NGO" value="{{ old('title') }}" required>
                            @error('title')<div class="qh-form-error">{{ $message }}</div>@enderror
                        </div>

                        <div class="qh-form-group">
                            <label class="qh-form-label" for="qh_category">Category</label>
                            <select name="category_id" id="qh_category" class="qh-form-control" required>
                                <option value="" disabled {{ old('category_id') ? '' : 'selected' }}>Select a category</option>
                                @foreach($categories as $category)
                                <option value="{{ $category->id }}" {{ old('category_id') == $category->id ? 'selected' : '' }}>
                                    {{ $category->name }}
                                </option>
                                @endforeach
                            </select>
                            @error('category_id')<div class="qh-form-error">{{ $message }}</div>@enderror
                        </div>

                        <div class="qh-form-group">
                            <label class="qh-form-label" for="qh_description">Project Description</label>
                            <textarea name="description" id="qh_description" class="qh-form-control" rows="5"
                                placeholder="Describe the work, goals, and any specifics the talent should know..."
                                required>{{ old('description') }}</textarea>
                            @error('description')<div class="qh-form-error">{{ $message }}</div>@enderror
                        </div>
                    </div>

                    <!-- STEP 2: Budget & timeline -->
                    <div class="qh-step" data-step="2">
                        <h3 class="qh-step-title">Budget & timeline</h3>
                        <p class="qh-step-sub">This helps us match you with talent in the right range and availability.</p>

                        <div class="qh-form-group">
                            <label class="qh-form-label">Budget Type</label>
                            <div class="qh-toggle-group" id="qhBudgetToggle">
                                <label class="qh-toggle active" data-value="fixed">
                                    <input type="radio" name="budget_type" value="fixed" checked> Fixed Price
                                </label>
                                <label class="qh-toggle" data-value="hourly">
                                    <input type="radio" name="budget_type" value="hourly"> Hourly Rate
                                </label>
                            </div>
                        </div>

                        <div class="qh-row">
                            <div class="qh-form-group">
                                <label class="qh-form-label" for="qh_budget_min">Min Budget (RWF)</label>
                                <input type="number" min="0" step="1000" name="budget_min" id="qh_budget_min"
                                    class="qh-form-control" placeholder="e.g. 100000" value="{{ old('budget_min') }}">
                                @error('budget_min')<div class="qh-form-error">{{ $message }}</div>@enderror
                            </div>
                            <div class="qh-form-group">
                                <label class="qh-form-label" for="qh_budget_max">Max Budget (RWF)</label>
                                <input type="number" min="0" step="1000" name="budget_max" id="qh_budget_max"
                                    class="qh-form-control" placeholder="e.g. 300000" value="{{ old('budget_max') }}">
                                @error('budget_max')<div class="qh-form-error">{{ $message }}</div>@enderror
                            </div>
                        </div>

                        <div class="qh-row">
                            <div class="qh-form-group">
                                <label class="qh-form-label" for="qh_timeline">Timeline</label>
                                <select name="timeline" id="qh_timeline" class="qh-form-control">
                                    <option value="">Select timeline</option>
                                    @foreach($timelines as $value => $label)
                                    <option value="{{ $value }}" {{ old('timeline') == $value ? 'selected' : '' }}>{{ $label }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="qh-form-group">
                                <label class="qh-form-label" for="qh_experience">Experience Level</label>
                                <select name="experience_level" id="qh_experience" class="qh-form-control">
                                    <option value="">Select level</option>
                                    @foreach($experienceLevels as $value => $label)
                                    <option value="{{ $value }}" {{ old('experience_level') == $value ? 'selected' : '' }}>{{ $label }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <div class="qh-form-group">
                            <label class="qh-form-label" for="qh_skills">Skills Needed (comma separated)</label>
                            <input type="text" name="skills" id="qh_skills" class="qh-form-control"
                                placeholder="e.g. Laravel, React, UI Design" value="{{ old('skills') }}">
                        </div>
                    </div>

                    <!-- STEP 3: Talent suggestions -->
                    <div class="qh-step" data-step="3">
                        <h3 class="qh-step-title">Suggested talent for you</h3>
                        <p class="qh-step-sub" id="qhTalentSub">Based on the category you selected, here's who's available.</p>

                        <input type="hidden" name="talent_id" id="qh_talent_id" value="{{ old('talent_id') }}">

                        <div id="qhTalentLoading" class="qh-talent-loading">Loading suggestions…</div>
                        <div id="qhTalentGrid" class="qh-talent-grid" style="display:none;"></div>
                        <div id="qhTalentEmpty" class="qh-empty-talents" style="display:none;">
                            No available talent found in this category yet — that's okay, we'll manually match you after you submit.
                        </div>

                        <p class="qh-skip-note">Selecting a talent is optional — you can skip this step and we'll match you manually.</p>
                    </div>

                    <!-- STEP 4: Contact + review -->
                    <div class="qh-step" data-step="4">
                        <h3 class="qh-step-title">Your contact details</h3>
                        <p class="qh-step-sub">So we can send your matches and next steps.</p>

                        <div class="qh-row">
                            <div class="qh-form-group">
                                <label class="qh-form-label" for="qh_client_name">Full Name</label>
                                <input type="text" name="client_name" id="qh_client_name" class="qh-form-control"
                                    placeholder="Your name" value="{{ old('client_name') }}" required>
                                @error('client_name')<div class="qh-form-error">{{ $message }}</div>@enderror
                            </div>
                            <div class="qh-form-group">
                                <label class="qh-form-label" for="qh_company_name">Company (optional)</label>
                                <input type="text" name="company_name" id="qh_company_name" class="qh-form-control"
                                    placeholder="Organization name" value="{{ old('company_name') }}">
                            </div>
                        </div>

                        <div class="qh-row">
                            <div class="qh-form-group">
                                <label class="qh-form-label" for="qh_client_email">Email</label>
                                <input type="email" name="client_email" id="qh_client_email" class="qh-form-control"
                                    placeholder="you@example.com" value="{{ old('client_email') }}" required>
                                @error('client_email')<div class="qh-form-error">{{ $message }}</div>@enderror
                            </div>
                            <div class="qh-form-group">
                                <label class="qh-form-label" for="qh_client_phone">Phone (optional)</label>
                                <input type="text" name="client_phone" id="qh_client_phone" class="qh-form-control"
                                    placeholder="+250 7xx xxx xxx" value="{{ old('client_phone') }}">
                            </div>
                        </div>

                        <div class="qh-review" id="qhReview"></div>
                    </div>

                    <!-- Nav -->
                    <div class="qh-nav">
                        <button type="button" class="qh-btn-secondary" id="qhPrevBtn" disabled>Back</button>
                        <button type="button" class="qh-btn-primary" id="qhNextBtn">Continue</button>
                        <button type="submit" class="qh-btn-primary" id="qhSubmitBtn" style="display:none;">Submit Request</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
    var totalSteps = 4;
    var currentStep = 1;

    var steps = document.querySelectorAll('.qh-step');
    var progressSteps = document.querySelectorAll('.qh-progress-step');
    var prevBtn = document.getElementById('qhPrevBtn');
    var nextBtn = document.getElementById('qhNextBtn');
    var submitBtn = document.getElementById('qhSubmitBtn');

    var categorySelect = document.getElementById('qh_category');
    var talentLoading = document.getElementById('qhTalentLoading');
    var talentGrid = document.getElementById('qhTalentGrid');
    var talentEmpty = document.getElementById('qhTalentEmpty');
    var talentSub = document.getElementById('qhTalentSub');
    var talentIdInput = document.getElementById('qh_talent_id');
    var lastFetchedCategory = null;

    function showStep(step) {
        steps.forEach(function (el) {
            el.classList.toggle('active', parseInt(el.dataset.step) === step);
        });
        progressSteps.forEach(function (el) {
            var s = parseInt(el.dataset.step);
            el.classList.toggle('active', s === step);
            el.classList.toggle('done', s < step);
        });

        prevBtn.disabled = step === 1;
        nextBtn.style.display = step === totalSteps ? 'none' : 'inline-block';
        submitBtn.style.display = step === totalSteps ? 'inline-block' : 'none';

        if (step === 3) loadTalents();
        if (step === 4) buildReview();
    }

    function currentStepEl() {
        return document.querySelector('.qh-step[data-step="' + currentStep + '"]');
    }

    function validateStep() {
        var el = currentStepEl();
        var invalid = el.querySelector(':invalid');
        if (invalid) {
            invalid.reportValidity();
            return false;
        }
        return true;
    }

    nextBtn.addEventListener('click', function () {
        if (!validateStep()) return;
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
        }
    });

    prevBtn.addEventListener('click', function () {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    // Budget type toggle
    document.querySelectorAll('#qhBudgetToggle .qh-toggle').forEach(function (label) {
        label.addEventListener('click', function () {
            document.querySelectorAll('#qhBudgetToggle .qh-toggle').forEach(function (l) {
                l.classList.remove('active');
            });
            label.classList.add('active');
            label.querySelector('input').checked = true;
        });
    });

    // Load talent suggestions for the selected category
    function loadTalents() {
        var categoryId = categorySelect.value;
        var categoryName = categorySelect.options[categorySelect.selectedIndex]
            ? categorySelect.options[categorySelect.selectedIndex].text
            : '';

        if (!categoryId) {
            talentLoading.style.display = 'none';
            talentGrid.style.display = 'none';
            talentEmpty.style.display = 'block';
            talentEmpty.textContent = 'Please choose a category in step 1 first.';
            return;
        }

        if (lastFetchedCategory === categoryId) return; // already loaded, no refetch

        talentLoading.style.display = 'block';
        talentGrid.style.display = 'none';
        talentEmpty.style.display = 'none';
        talentSub.textContent = 'Based on "' + categoryName + '", here\'s who\'s available.';

        fetch('{{ url("quick-hire/talents-by-category") }}/' + categoryId, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
                lastFetchedCategory = categoryId;
                talentLoading.style.display = 'none';

                if (!data.talents || data.talents.length === 0) {
                    talentEmpty.style.display = 'block';
                    talentGrid.style.display = 'none';
                    return;
                }

                talentGrid.innerHTML = '';
                data.talents.forEach(function (talent) {
                    var card = document.createElement('div');
                    card.className = 'qh-talent-card';
                    card.dataset.id = talent.id;
                    card.innerHTML =
                        '<img src="' + talent.image + '" alt="' + talent.name + '">' +
                        '<div>' +
                            '<div class="qh-talent-name">' + talent.name + '</div>' +
                            '<div class="qh-talent-meta">' +
                                (talent.featured ? '<span>⭐ Featured</span>' : '') +
                                '<span>Level ' + talent.level + '</span>' +
                                (talent.available ? '' : '<span style="color:#7a9a8e;">Busy</span>') +
                            '</div>' +
                            '<div class="qh-talent-excerpt">' + (talent.excerpt || '') + '</div>' +
                        '</div>' +
                        '<div class="qh-talent-check">✓</div>';

                    card.addEventListener('click', function () {
                        var alreadySelected = card.classList.contains('selected');
                        document.querySelectorAll('.qh-talent-card').forEach(function (c) {
                            c.classList.remove('selected');
                        });
                        if (!alreadySelected) {
                            card.classList.add('selected');
                            talentIdInput.value = talent.id;
                        } else {
                            talentIdInput.value = '';
                        }
                    });

                    talentGrid.appendChild(card);
                });

                talentGrid.style.display = 'grid';
            })
            .catch(function () {
                talentLoading.style.display = 'none';
                talentEmpty.style.display = 'block';
                talentEmpty.textContent = 'Could not load suggestions right now — you can still submit and we\'ll match you manually.';
            });
    }

    // Reset cached talent fetch if category changes after visiting step 3
    categorySelect.addEventListener('change', function () {
        lastFetchedCategory = null;
        talentIdInput.value = '';
    });

    function buildReview() {
        var review = document.getElementById('qhReview');
        var budgetType = document.querySelector('input[name="budget_type"]:checked').value;
        var budgetMin = document.getElementById('qh_budget_min').value;
        var budgetMax = document.getElementById('qh_budget_max').value;
        var timelineSelect = document.getElementById('qh_timeline');
        var categoryName = categorySelect.options[categorySelect.selectedIndex]
            ? categorySelect.options[categorySelect.selectedIndex].text
            : '—';
        var selectedTalentCard = document.querySelector('.qh-talent-card.selected');

        review.innerHTML =
            '<div><strong>Project:</strong> ' + (document.getElementById('qh_title').value || '—') + '</div>' +
            '<div><strong>Category:</strong> ' + categoryName + '</div>' +
            '<div><strong>Budget:</strong> ' + budgetType + (budgetMin || budgetMax ? ' — ' + (budgetMin || '0') + ' to ' + (budgetMax || '—') + ' RWF' : '') + '</div>' +
            '<div><strong>Timeline:</strong> ' + (timelineSelect.options[timelineSelect.selectedIndex] ? timelineSelect.options[timelineSelect.selectedIndex].text : '—') + '</div>' +
            '<div><strong>Preferred talent:</strong> ' + (selectedTalentCard ? selectedTalentCard.querySelector('.qh-talent-name').textContent : 'Not selected — we\'ll match you manually') + '</div>';
    }

    // If the form re-rendered with validation errors, jump back to the
    // step containing the first invalid/required field.
    @if ($errors->any())
    (function () {
        var firstErrorField = document.querySelector('.qh-form-error');
        if (firstErrorField) {
            var stepEl = firstErrorField.closest('.qh-step');
            if (stepEl) {
                currentStep = parseInt(stepEl.dataset.step);
                showStep(currentStep);
            }
        }
    })();
    @endif
});
</script>

@endsection
