<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Register Your Skills — Future Connect</title>

    <!-- Toastr CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<style>
  :root {
    --bg:        #0e1618;
    --surface:   #141d20;
    --surface2:  #1a2428;
    --green:     #00a667;
    --green-dim: rgba(0,166,103,0.12);
    --text:      #e8f0ed;
    --muted:     #7a9a8e;
    --border:    rgba(0,166,103,0.18);
    --border-h:  rgba(0,166,103,0.42);
    --radius:    10px;
  }

  *, *::before, *::after { box-sizing: border-box; }
  body { background: var(--bg); margin: 0; }

  /* ── PAGE GRID ── */
  .fc-page {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
  }

  /* ── LEFT PANEL ── */
  .fc-left {
    background: linear-gradient(160deg, #0a1f14 0%, #0e1618 50%, #071210 100%);
    border-right: 1px solid var(--border);
    padding: 64px 52px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
  }

  .fc-left::before {
    content: '';
    position: absolute;
    top: -120px; left: -80px;
    width: 480px; height: 480px;
    background: radial-gradient(circle, rgba(0,166,103,0.14) 0%, transparent 65%);
    pointer-events: none;
  }

  .fc-left::after {
    content: '';
    position: absolute;
    bottom: -100px; right: -60px;
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(0,166,103,0.08) 0%, transparent 65%);
    pointer-events: none;
  }

  .fc-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    z-index: 1;
  }

  .fc-logo-mark {
    width: 36px; height: 36px;
    border-radius: 9px;
    background: var(--green);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 15px;
    color: #fff;
    flex-shrink: 0;
  }

  .fc-logo-text {
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
  }

  .fc-logo-text span { color: var(--green); }

  .fc-left-body { position: relative; z-index: 1; }

  .fc-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: var(--green-dim);
    border: 1px solid rgba(0,166,103,0.3);
    color: var(--green);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 100px;
    margin-bottom: 22px;
  }

  .fc-badge::before {
    content: '';
    display: inline-block;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--green);
    animation: fcPulse 2s infinite;
  }

  @keyframes fcPulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.4; transform:scale(0.7); }
  }

  .fc-left-body h1 {
    font-family: 'Syne', sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
    color: #fff;
    line-height: 1.12;
    letter-spacing: -0.5px;
    margin: 0 0 16px;
  }

  .fc-left-body h1 span { color: var(--green); }

  .fc-left-body > p {
    font-size: 14.5px;
    color: var(--muted);
    line-height: 1.8;
    margin: 0 0 34px;
    max-width: 360px;
  }

  .fc-features { display: flex; flex-direction: column; gap: 14px; }

  .fc-feature {
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }

  .fc-feature-icon {
    width: 38px; height: 38px;
    border-radius: 10px;
    background: var(--green-dim);
    border: 1px solid rgba(0,166,103,0.25);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .fc-feature-text strong {
    display: block;
    font-size: 13.5px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 2px;
  }

  .fc-feature-text span {
    font-size: 12px;
    color: var(--muted);
    line-height: 1.55;
  }

  .fc-stats {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    padding-top: 26px;
    border-top: 1px solid var(--border);
  }

  .fc-stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 1.45rem;
    font-weight: 800;
    color: var(--green);
    line-height: 1;
    margin-bottom: 4px;
  }

  .fc-stat-label { font-size: 11.5px; color: var(--muted); }

  /* ── RIGHT PANEL ── */
  .fc-right {
    background: var(--bg);
    padding: 56px 52px;
    overflow-y: auto;
  }

  .fc-right-head { margin-bottom: 30px; }

  .fc-right-head h2 {
    font-family: 'Syne', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 6px;
  }

  .fc-right-head p { font-size: 13px; color: var(--muted); margin: 0; }

  /* stepper */
  .fc-stepper {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    position: relative;
  }

  .fc-stepper-track {
    position: absolute;
    top: 50%; transform: translateY(-50%);
    left: 0; right: 0;
    height: 1px;
    background: var(--border);
    z-index: 0;
  }

  .fc-stepper-fill {
    height: 100%;
    background: var(--green);
    transition: width 0.4s ease;
    width: 0%;
  }

  .fc-step-node {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: var(--surface);
    border: 1.5px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: var(--muted);
    z-index: 1;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .fc-step-node.fc-done   { background: var(--green); border-color: var(--green); color: #fff; }
  .fc-step-node.fc-active { background: var(--green-dim); border-color: var(--green); color: var(--green); box-shadow: 0 0 0 5px rgba(0,166,103,0.1); }

  .fc-step-spacer { flex: 1; z-index: 0; }

  /* panel */
  .fc-panel {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 32px;
    position: relative;
    overflow: hidden;
  }

  .fc-panel::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--green), transparent);
    border-radius: 18px 18px 0 0;
  }

  .fc-panel-head { margin-bottom: 22px; }

  .fc-step-label {
    font-size: 10px;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    color: var(--green);
    font-weight: 500;
    margin-bottom: 4px;
  }

  .fc-panel-head h3 {
    font-family: 'Syne', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }

  /* fields */
  .fc-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 14px;
  }

  .fc-row.single { grid-template-columns: 1fr; }

  .fc-field { display: flex; flex-direction: column; gap: 7px; }

  .fc-field label {
    font-size: 10px;
    font-weight: 500;
    color: var(--muted);
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }

  .fc-field input,
  .fc-field select,
  .fc-field textarea {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    padding: 11px 14px;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
  }

  .fc-field input::placeholder,
  .fc-field textarea::placeholder { color: #3d5a52; }

  .fc-field input:focus,
  .fc-field select:focus,
  .fc-field textarea:focus {
    border-color: var(--green);
    background: rgba(0,166,103,0.06);
  }

  .fc-field select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a667' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;
    padding-right: 36px;
    cursor: pointer;
  }

  .fc-field select option { background: #141d20; color: var(--text); }
  .fc-field textarea { resize: vertical; min-height: 88px; }

  /* file upload */
  .fc-file-zone {
    border: 1.5px dashed var(--border);
    border-radius: var(--radius);
    padding: 28px 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s;
    background: var(--surface2);
    position: relative;
  }

  .fc-file-zone:hover { border-color: var(--green); background: var(--green-dim); }

  .fc-file-zone input {
    position: absolute; inset: 0;
    opacity: 0; cursor: pointer;
    width: 100%; height: 100%;
  }

  .fc-file-icon {
    width: 42px; height: 42px;
    border-radius: 50%;
    background: var(--green-dim);
    border: 1px solid rgba(0,166,103,0.3);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 10px;
    font-size: 18px;
  }

  .fc-file-zone p { margin: 0; font-size: 13px; color: var(--muted); }
  .fc-file-zone p span { color: var(--green); font-weight: 500; }

  #preview-wrap { display: none; margin-top: 14px; text-align: center; }
  #preview-img  { width: 76px; height: 76px; border-radius: 50%; object-fit: cover; border: 2px solid var(--green); }
  #preview-name { font-size: 11.5px; color: var(--muted); margin: 8px 0 0; }

  .fc-check {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 20px;
    cursor: pointer;
  }

  .fc-check input[type="checkbox"] {
    accent-color: var(--green);
    margin-top: 3px;
    flex-shrink: 0;
    width: 15px; height: 15px;
    cursor: pointer;
  }

  .fc-check span { font-size: 12.5px; color: var(--muted); line-height: 1.65; }
  .fc-check a    { color: var(--green); text-decoration: none; }
  .fc-check a:hover { text-decoration: underline; }

  /* actions */
  .fc-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 26px;
  }

  .fc-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 11px 24px;
    border-radius: var(--radius);
    font-family: 'Syne', sans-serif;
    font-size: 13.5px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }

  .btn-back { background: var(--surface2); color: var(--muted); border: 1px solid var(--border); }
  .btn-back:hover { border-color: var(--border-h); color: var(--text); }

  .btn-next   { background: var(--green); color: #fff; margin-left: auto; }
  .btn-next:hover   { background: #00c07a; transform: translateY(-1px); }

  .btn-submit { background: var(--green); color: #fff; margin-left: auto; padding: 12px 30px; }
  .btn-submit:hover { background: #00c07a; transform: translateY(-1px); }

  /* step sections */
  .fc-section { display: none; }
  .fc-section.fc-visible { display: block; animation: fcFadeUp 0.3s ease; }

  @keyframes fcFadeUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* success */
  .fc-success { text-align: center; padding: 20px 0 8px; }

  .fc-success-icon {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: var(--green-dim);
    border: 2px solid rgba(0,166,103,0.4);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 18px;
    font-size: 28px;
    color: var(--green);
  }

  .fc-success h3 { font-family:'Syne',sans-serif; font-size:1.3rem; color:#fff; margin:0 0 10px; }
  .fc-success p  { color:var(--muted); font-size:13.5px; margin:0; line-height:1.75; }
  .fc-back-link  { display:inline-block; margin-top:22px; color:var(--green); font-size:13.5px; text-decoration:none; font-family:'Syne',sans-serif; font-weight:700; }
  .fc-back-link:hover { text-decoration:underline; }

  /* validation alert */
  .fc-alert {
    background: rgba(224,96,96,0.12);
    border: 1px solid rgba(224,96,96,0.3);
    border-radius: var(--radius);
    padding: 12px 16px;
    margin-bottom: 20px;
    font-size: 13px;
    color: #f09595;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 960px) {
    .fc-page { grid-template-columns: 1fr; }
    .fc-left  { position: static; height: auto; padding: 44px 28px 40px; }
    .fc-right { padding: 36px 24px 56px; }
  }

  @media (max-width: 520px) {
    .fc-left  { padding: 36px 18px 32px; }
    .fc-right { padding: 28px 14px 48px; }
    .fc-left-body h1 { font-size: 1.9rem; }
    .fc-panel { padding: 20px 14px; }
    .fc-row   { grid-template-columns: 1fr; }
  }
</style>


<div class="fc-page">

  {{-- ══════════ LEFT — Branding & Info ══════════ --}}
  <div class="fc-left">

    <div class="fc-logo">
      <div class="fc-logo-mark">FC</div>
      <div class="fc-logo-text">Future<span>Connect</span></div>
    </div>

    <div class="fc-left-body">
      <div class="fc-badge">Talent Hub</div>

      <h1>Showcase<br>Your <span>Skills</span><br>to the World</h1>

      <p>Join thousands of verified talents on Rwanda's leading skills marketplace. Get discovered, get hired, and grow your career.</p>

      <div class="fc-features">
        <div class="fc-feature">
          <div class="fc-feature-icon">🎯</div>
          <div class="fc-feature-text">
            <strong>Get Verified</strong>
            <span>Earn a verified badge and build instant credibility with clients.</span>
          </div>
        </div>
        <div class="fc-feature">
          <div class="fc-feature-icon">🌍</div>
          <div class="fc-feature-text">
            <strong>Global Exposure</strong>
            <span>Reach clients and employers locally and across the globe.</span>
          </div>
        </div>
        <div class="fc-feature">
          <div class="fc-feature-icon">💬</div>
          <div class="fc-feature-text">
            <strong>Direct Connections</strong>
            <span>Connect securely with clients through our Connection Room.</span>
          </div>
        </div>
        <div class="fc-feature">
          <div class="fc-feature-icon">📈</div>
          <div class="fc-feature-text">
            <strong>Grow With Us</strong>
            <span>Access courses, opportunities and tools to level up your career.</span>
          </div>
        </div>
      </div>
    </div>

    <div class="fc-stats">
      <div>
        <div class="fc-stat-num">8K+</div>
        <div class="fc-stat-label">Skills listed</div>
      </div>
      <div>
        <div class="fc-stat-num">4.8</div>
        <div class="fc-stat-label">Avg. rating</div>
      </div>
      <div>
        <div class="fc-stat-num">100%</div>
        <div class="fc-stat-label">Free to join</div>
      </div>
    </div>

  </div>{{-- /fc-left --}}


  {{-- ══════════ RIGHT — Registration Form ══════════ --}}
  <div class="fc-right">

    <div class="fc-right-head">
      <h2>Create Your Talent Profile</h2>
      <p>Fill in the steps below — it takes less than 3 minutes.</p>
    </div>

    {{-- Validation errors --}}
    @if ($errors->any())
      <div class="fc-alert">
        <strong>Please fix the following:</strong>
        <ul style="margin:6px 0 0;padding-left:18px;">
          @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
          @endforeach
        </ul>
      </div>
    @endif

    {{-- Step indicator --}}
    <div class="fc-stepper">
      <div class="fc-stepper-track"><div class="fc-stepper-fill" id="stepFill"></div></div>
      <div class="fc-step-node fc-active" id="node-0">1</div>
      <div class="fc-step-spacer"></div>
      <div class="fc-step-node" id="node-1">2</div>
      <div class="fc-step-spacer"></div>
      <div class="fc-step-node" id="node-2">3</div>
      <div class="fc-step-spacer"></div>
      <div class="fc-step-node" id="node-3">4</div>
    </div>

    <div class="fc-panel">

      <form action="{{ route('talent.register') }}" method="POST" enctype="multipart/form-data" id="talentForm">
        @csrf

        {{-- ── STEP 1: Personal Info ── --}}
        <div class="fc-section fc-visible" id="sec-0">
          <div class="fc-panel-head">
            <div class="fc-step-label">Step 1 of 4</div>
            <h3>Personal Information</h3>
          </div>
          <div class="fc-row">
            <div class="fc-field">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" value="{{ old('name') }}"
                     placeholder="e.g. John Doe" required>
            </div>
            <div class="fc-field">
              <label for="address">Location / Address</label>
              <input type="text" id="address" name="address" value="{{ old('address') }}"
                     placeholder="e.g. Kigali, Rwanda" required>
            </div>
          </div>
          <div class="fc-actions">
            <span></span>
            <button type="button" class="fc-btn btn-next" onclick="goTo(1)">Continue →</button>
          </div>
        </div>

        {{-- ── STEP 2: Contact Info ── --}}
        <div class="fc-section" id="sec-1">
          <div class="fc-panel-head">
            <div class="fc-step-label">Step 2 of 4</div>
            <h3>Contact Details</h3>
          </div>
          <div class="fc-row">
            <div class="fc-field">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" value="{{ old('phone') }}"
                     placeholder="e.g. +250 788 123 456" required>
            </div>
            <div class="fc-field">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" value="{{ old('email') }}"
                     placeholder="e.g. you@example.com" required>
            </div>
          </div>
          <div class="fc-actions">
            <button type="button" class="fc-btn btn-back" onclick="goTo(0)">← Back</button>
            <button type="button" class="fc-btn btn-next" onclick="goTo(2)">Continue →</button>
          </div>
        </div>

        {{-- ── STEP 3: Talent Info ── --}}
        <div class="fc-section" id="sec-2">
          <div class="fc-panel-head">
            <div class="fc-step-label">Step 3 of 4</div>
            <h3>Skills & Expertise</h3>
          </div>
          <div class="fc-row">
            <div class="fc-field">
              <label for="language">Languages Spoken</label>
              <input type="text" id="language" name="language" value="{{ old('language') }}"
                     placeholder="e.g. English, Kinyarwanda" required>
            </div>
            <div class="fc-field">
              <label for="category_id">Talent Category</label>
              <select id="category_id" name="category_id" required>
                <option value="">Select a category</option>
                @foreach($categories as $cat)
                  <option value="{{ $cat->id }}" {{ old('category_id') == $cat->id ? 'selected' : '' }}>
                    {{ $cat->name }}
                  </option>
                @endforeach
              </select>
            </div>
          </div>
          <div class="fc-row single">
            <div class="fc-field">
              <label for="description">About Your Talent</label>
              <textarea id="description" name="description"
                        placeholder="Describe your skills, experience, and what makes you unique...">{{ old('description') }}</textarea>
            </div>
          </div>
          <div class="fc-actions">
            <button type="button" class="fc-btn btn-back" onclick="goTo(1)">← Back</button>
            <button type="button" class="fc-btn btn-next" onclick="goTo(3)">Continue →</button>
          </div>
        </div>

        {{-- ── STEP 4: Photo & Submit ── --}}
        <div class="fc-section" id="sec-3">
          <div class="fc-panel-head">
            <div class="fc-step-label">Step 4 of 4</div>
            <h3>Profile Photo</h3>
          </div>

          <div class="fc-file-zone" id="dropzone">
            <input type="file" name="image" id="imageInput" accept="image/*"
                   onchange="handleFile(this)" required>
            <div class="fc-file-icon">📷</div>
            <p><span>Click to upload</span> or drag &amp; drop</p>
            <p style="font-size:11px;margin-top:5px;color:#3d5a52;">JPG, PNG — max 5MB</p>
          </div>

          <div id="preview-wrap">
            <img id="preview-img" alt="Preview" />
            <p id="preview-name"></p>
          </div>

          <label class="fc-check">
            <input type="checkbox" id="fcTerms" required>
            <span>
              I agree to the
              <a href="{{ route('user.terms-condition') }}" target="_blank">Terms &amp; Conditions</a>
              of Future Connect.
            </span>
          </label>

          <div class="fc-actions">
            <button type="button" class="fc-btn btn-back" onclick="goTo(2)">← Back</button>
            <button type="submit" class="fc-btn btn-submit">Submit Registration ✓</button>
          </div>
        </div>

      </form>

      {{-- Success screen (session-based) --}}
      @if(session('success'))
      <div class="fc-section fc-visible" id="sec-done">
        <div class="fc-success">
          <div class="fc-success-icon">✓</div>
          <h3>Registration Submitted!</h3>
          <p>Your talent profile has been submitted for review.<br>
             You'll receive a confirmation email within 24–48 hours.</p>
          <a href="{{ route('home') }}" class="fc-back-link">← Back to Home</a>
        </div>
      </div>
      @endif

    </div>{{-- /fc-panel --}}

    <p style="text-align:center;font-size:12.5px;color:var(--muted);margin-top:20px;">
      Already have a profile?
      <a href="{{ route('login') }}" style="color:var(--green);text-decoration:none;font-weight:500;">Sign in →</a>
    </p>

  </div>{{-- /fc-right --}}

</div>{{-- /fc-page --}}


<script>
  let current = 0;
  const total  = 4;

  function goTo(step) {
    document.getElementById('sec-' + current).classList.remove('fc-visible');
    current = step;
    document.getElementById('sec-' + current).classList.add('fc-visible');
    updateStepper();
    document.querySelector('.fc-right').scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateStepper() {
    for (let i = 0; i < total; i++) {
      const node = document.getElementById('node-' + i);
      node.classList.remove('fc-active', 'fc-done');
      if (i < current) {
        node.classList.add('fc-done');
        node.textContent = '✓';
      } else if (i === current) {
        node.classList.add('fc-active');
        node.textContent = i + 1;
      } else {
        node.textContent = i + 1;
      }
    }
    const pct = current === 0 ? 0 : (current / (total - 1)) * 100;
    document.getElementById('stepFill').style.width = pct + '%';
  }

  function handleFile(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('preview-img').src = e.target.result;
      document.getElementById('preview-name').textContent = file.name;
      document.getElementById('preview-wrap').style.display = 'block';
      document.getElementById('dropzone').style.borderColor = 'var(--green)';
    };
    reader.readAsDataURL(file);
  }

  {{-- Jump to correct step when Laravel bounces back with validation errors --}}
  @if($errors->has('name') || $errors->has('address'))
    goTo(0);
  @elseif($errors->has('phone') || $errors->has('email'))
    goTo(1);
  @elseif($errors->has('language') || $errors->has('category_id') || $errors->has('description'))
    goTo(2);
  @elseif($errors->has('image'))
    goTo(3);
  @endif
</script>

</body>
</html>