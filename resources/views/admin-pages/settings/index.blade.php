@extends('layouts.app')
@section('title', 'Setting')
@section('content')
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">

            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Platform Settings</h2>
            </div>

            @if(session('success'))
                <div class="alert alert-success">{{ session('success') }}</div>
            @endif

            <div class="card card-bordered">
                <div class="card-body">
                    <form action="{{ route('admin.settings.update') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <!-- General Settings -->
                        <h5 class="mb-3">General Settings</h5>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Site Name</label>
                                <input type="text" name="site_name" class="form-control"
                                       value="{{ old('site_name', $settings->site_name ?? '') }}" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Site Logo</label>
                                @if(isset($settings->logo))
                                    <div class="mb-2">
                                        <img src="{{ asset('storage/' . $settings->logo) }}" alt="Logo" height="60">
                                    </div>
                                @endif
                                <input type="file" name="logo" class="form-control">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Default Language</label>
                                <select name="default_language" class="form-select">
                                    <option value="en" {{ (old('default_language', $settings->default_language ?? '') == 'en') ? 'selected' : '' }}>English</option>
                                    <option value="rw" {{ (old('default_language', $settings->default_language ?? '') == 'rw') ? 'selected' : '' }}>Kinyarwanda</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Timezone</label>
                                <input type="text" name="timezone" class="form-control"
                                       value="{{ old('timezone', $settings->timezone ?? 'Africa/Kigali') }}">
                            </div>
                        </div>

                        <!-- Contact Settings -->
                        <h5 class="mb-3 mt-4">Contact Settings</h5>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" name="contact_email" class="form-control"
                                       value="{{ old('contact_email', $settings->contact_email ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Phone</label>
                                <input type="text" name="contact_phone" class="form-control"
                                       value="{{ old('contact_phone', $settings->contact_phone ?? '') }}">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Address</label>
                            <textarea name="contact_address" class="form-control">{{ old('contact_address', $settings->contact_address ?? '') }}</textarea>
                        </div>

                        <!-- Social Links -->
                        <h5 class="mb-3 mt-4">Social Links</h5>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Facebook</label>
                                <input type="text" name="facebook_link" class="form-control"
                                       value="{{ old('facebook_link', $settings->facebook_link ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Twitter</label>
                                <input type="text" name="twitter_link" class="form-control"
                                       value="{{ old('twitter_link', $settings->twitter_link ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Instagram</label>
                                <input type="text" name="instagram_link" class="form-control"
                                       value="{{ old('instagram_link', $settings->instagram_link ?? '') }}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">LinkedIn</label>
                                <input type="text" name="linkedin_link" class="form-control"
                                       value="{{ old('linkedin_link', $settings->linkedin_link ?? '') }}">
                            </div>
                        </div>

                        <!-- Toggles -->
                        <h5 class="mb-3 mt-4">Feature Toggles</h5>
                        <div class="form-check form-switch mb-2">
                            <input class="form-check-input" type="checkbox" name="registration_open"
                                   {{ (old('registration_open', $settings->registration_open ?? true)) ? 'checked' : '' }}>
                            <label class="form-check-label">Open Registration</label>
                        </div>
                        <div class="form-check form-switch mb-2">
                            <input class="form-check-input" type="checkbox" name="enable_notifications"
                                   {{ (old('enable_notifications', $settings->enable_notifications ?? true)) ? 'checked' : '' }}>
                            <label class="form-check-label">Enable Notifications</label>
                        </div>

                        <div class="mt-4 d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary">Save Settings</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection
