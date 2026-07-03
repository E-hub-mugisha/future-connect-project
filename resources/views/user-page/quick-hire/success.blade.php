@extends('layouts.guest')
@section('title', 'Quick Hire - Request submitted successfully')
@section('content')

<style>
    .qhs-page {
        background: #0e1618;
        color: #e8f0ed;
        font-family: 'DM Sans', sans-serif;
        min-height: 60vh;
        display: flex;
        align-items: center;
        padding: 60px 0;
    }

    .qhs-card {
        max-width: 560px;
        margin: 0 auto;
        background: #141d20;
        border: 1px solid rgba(0, 166, 103, .2);
        border-radius: 16px;
        padding: 44px 36px;
        text-align: center;
    }

    .qhs-icon {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: rgba(0, 166, 103, .14);
        border: 1px solid rgba(0, 166, 103, .38);
        color: #48d597;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        margin: 0 auto 20px;
    }

    .qhs-card h2 {
        font-family: 'Syne', sans-serif;
        color: #fff;
        font-weight: 800;
        font-size: 24px;
        margin-bottom: 10px;
    }

    .qhs-card p {
        color: #7a9a8e;
        font-size: 14px;
        line-height: 1.7;
        margin-bottom: 24px;
    }

    .qhs-summary {
        text-align: left;
        background: #1a2428;
        border: 1px solid rgba(0, 166, 103, .16);
        border-radius: 10px;
        padding: 16px 18px;
        font-size: 12.5px;
        color: #7a9a8e;
        margin-bottom: 26px;
    }

    .qhs-summary div { margin-bottom: 6px; }
    .qhs-summary div:last-child { margin-bottom: 0; }
    .qhs-summary strong { color: #e8f0ed; }

    .qhs-btn {
        display: inline-flex;
        background: #48d597;
        color: #06120d;
        font-weight: 700;
        font-size: 13.5px;
        padding: 12px 26px;
        border-radius: 9px;
        text-decoration: none;
        transition: background .2s;
    }

    .qhs-btn:hover { background: #00c07a; color: #06120d; }
</style>

<div class="qhs-page">
    <div class="container">
        <div class="qhs-card">
            <div class="qhs-icon"><i class="feather-check"></i></div>
            <h2>Request submitted!</h2>
            <p>
                Thanks {{ $quickHire->client_name }} — we've received your project request.
                @if($quickHire->talent)
                    Our team will confirm your match with <strong>{{ $quickHire->talent->name }}</strong> shortly.
                @else
                    Our team will manually match you with the right talent in the <strong>{{ $quickHire->category->name }}</strong> category shortly.
                @endif
            </p>

            <div class="qhs-summary">
                <div><strong>Project:</strong> {{ $quickHire->title }}</div>
                <div><strong>Category:</strong> {{ $quickHire->category->name }}</div>
                <div><strong>Status:</strong> {{ ucfirst($quickHire->status) }}</div>
                <div><strong>Reference:</strong> #{{ str_pad($quickHire->id, 6, '0', STR_PAD_LEFT) }}</div>
            </div>

            <a href="{{ route('user.home') }}" class="qhs-btn">Back to Home</a>
        </div>
    </div>
</div>

@endsection
