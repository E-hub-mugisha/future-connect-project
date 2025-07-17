@php
    $user = auth()->user();
@endphp

<li class="nav-item dropdown has-arrow main-drop">
    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <span class="user-img">
            <img src="{{ asset('/assets/img/user/profile.jpg') }}" alt="">
            <span class="status online"></span>
        </span>
        <span>{{ $user->name }}</span>
    </a>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="{{ route('profile.edit') }}"><i class="ti ti-user me-2"></i> My Profile</a>
        <a class="dropdown-item" href="{{ route('password.request') }}"><i class="ti ti-lock me-2"></i> Change Password</a>
        <a class="dropdown-item" href="{{ route('logout') }}"
           onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
            <i class="ti ti-logout me-2"></i> Logout
        </a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
            @csrf
        </form>
    </div>
</li>
