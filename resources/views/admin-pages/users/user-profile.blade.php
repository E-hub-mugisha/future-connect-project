@extends('layouts.app')
@section('title', $user->name. ' User Profile')
@section('content')

<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="nk-block">
                <div class="card card-bordered">
                    <div class="card-aside-wrap">

                        {{-- MAIN CONTENT --}}
                        <div class="card-inner card-inner-lg tab-content">

                            {{-- Personal Information TAB --}}
                            <div class="tab-pane fade show active" id="tab-personal">
                                <div class="nk-block-head nk-block-head-lg">
                                    <div class="nk-block-between">
                                        <div class="nk-block-head-content">
                                            <h4 class="nk-block-title">{{ $user->name }} Personal Information</h4>
                                            <div class="nk-block-des">
                                                <p>Basic info, like your name and address, that you use
                                                    on {{ config('app.name')}} Platform.</p>
                                            </div>
                                        </div>
                                        <div class="nk-block-head-content align-self-start d-lg-none">
                                            <a href="#" class="toggle btn btn-icon btn-trigger mt-n1" data-target="userAside">
                                                <em class="icon ni ni-menu-alt-r"></em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="nk-block">
                                    <div class="nk-data data-list">
                                        <div class="data-head">
                                            <h6 class="overline-title">Basics</h6>
                                        </div>
                                        <div class="data-item">
                                            <div class="data-col"><span class="data-label">Full Name</span><span class="data-value">{{ $user->name }}</span></div>
                                        </div>
                                        <div class="data-item">
                                            <div class="data-col"><span class="data-label">Display Name</span><span class="data-value">{{ $user->name }}</span></div>
                                        </div>
                                        <div class="data-item">
                                            <div class="data-col"><span class="data-label">Email</span><span class="data-value">{{ $user->email }}</span></div>
                                        </div>
                                        <div class="data-item">
                                            <div class="data-col"><span class="data-label">Phone</span><span class="data-value">{{ $user->phone }}</span></div>
                                        </div>
                                        <div class="data-item">
                                            <div class="data-col"><span class="data-label">Date Registered</span><span class="data-value">{{ $user->created_at->format('d M Y') }}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {{-- Notifications TAB --}}
                            <div class="tab-pane fade" id="tab-notifications">
                                <h4 class="nk-block-title">Notifications</h4>
                                <p>Here you can manage your notification preferences.</p>
                            </div>

                            {{-- Account Activity TAB --}}
                            <div class="tab-pane fade" id="tab-activity">
                                <h4 class="nk-block-title">Account Activity</h4>
                                <p>Recent login sessions and activities will appear here.</p>
                            </div>

                            {{-- Security Settings TAB --}}
                            <div class="tab-pane fade" id="tab-security">
                                <h4 class="nk-block-title">Security Settings</h4>
                                <p>Change password, enable 2FA, and more.</p>
                            </div>

                            {{-- Social TAB --}}
                            <div class="tab-pane fade" id="tab-social">
                                <h4 class="nk-block-title">Connected with Social</h4>
                                <p>Manage your connected social accounts here.</p>
                            </div>

                        </div>

                        {{-- SIDEBAR --}}
                        <div class="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg toggle-screen-lg"
                            data-toggle-body="true" data-content="userAside" data-toggle-screen="lg" data-toggle-overlay="true">
                            <div class="card-inner-group">
                                <div class="card-inner">
                                    <div class="user-card">
                                        <div class="user-avatar bg-primary"><span>AB</span></div>
                                        <div class="user-info">
                                            <span class="lead-text">{{ $user->name }}</span>
                                            <span class="sub-text">{{ $user->email }}</span>
                                        </div>
                                        <div class="user-action">
                                            <div class="dropdown"><a class="btn btn-icon btn-trigger me-n2" data-bs-toggle="dropdown" href="#"><em class="icon ni ni-more-v"></em></a>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <ul class="link-list-opt no-bdr">
                                                        <li><a href="#"><em class="icon ni ni-camera-fill"></em><span>Change
                                                                    Photo</span></a></li>
                                                        <li><a data-bs-toggle="modal" data-bs-target="#editUserModal{{ $user->id }}"><em class="icon ni ni-edit-fill"></em><span>Update
                                                                    Profile</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-inner p-0">
                                    <ul class="link-list-menu nav flex-column">
                                        <li><a class="nav-link active" data-bs-toggle="tab" href="#tab-personal"><em class="icon ni ni-user-fill-c"></em><span>Personal Infomation</span></a></li>
                                        <li><a class="nav-link" data-bs-toggle="tab" href="#tab-notifications"><em class="icon ni ni-bell-fill"></em><span>Notifications</span></a></li>
                                        <li><a class="nav-link" data-bs-toggle="tab" href="#tab-activity"><em class="icon ni ni-activity-round-fill"></em><span>Account Activity</span></a></li>
                                        <li><a class="nav-link" data-bs-toggle="tab" href="#tab-security"><em class="icon ni ni-lock-alt-fill"></em><span>Security Settings</span></a></li>
                                        <li><a class="nav-link" data-bs-toggle="tab" href="#tab-social"><em class="icon ni ni-grid-add-fill-c"></em><span>Connected with Social</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- User Modal -->
<div class="modal fade" id="editUserModal{{ $user->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <form class="modal-content" method="POST"
            action="{{ route('admin.users.update', $user->id ) }}">
            @csrf
            @method('PUT')

            <div class="modal-header">
                <h5 class="modal-title">
                    Edit User
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">

                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" name="name" class="form-control"
                        value="{{ old('name', $user->name) }}" required>
                    @error('name')
                    <small class="text-danger">{{ $message }}</small>
                    @enderror
                </div>

                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-control"
                        value="{{ old('email', $user->email) }}" required>
                    @error('email')
                    <small class="text-danger">{{ $message }}</small>
                    @enderror
                </div>

                <div class="mb-3">
                    <label class="form-label">Password <small>(Leave blank to keep current
                            password)</small></label>
                    <input type="password" name="password" class="form-control">
                    @error('password')
                    <small class="text-danger">{{ $message }}</small>
                    @enderror
                </div>

                <div class="mb-3">
                    <label class="form-label">Role</label>
                    <select name="role" class="form-select">
                        <option value="admin"
                            {{ $user->role === 'admin' ? 'selected' : '' }}>
                            Admin</option>
                        <option value="user"
                            {{ $user->role === 'user' ? 'selected' : '' }}>
                            User</option>
                    </select>
                    @error('role')
                    <small class="text-danger">{{ $message }}</small>
                    @enderror
                </div>

                <div class="mb-3">
                    <label class="form-label">Status</label>
                    <select name="active" class="form-select">
                        <option value="1"
                            {{ $user->active ? 'selected' : '' }}>
                            Active</option>
                        <option value="0"
                            {{ !$user->active ? 'selected' : '' }}>
                            Inactive</option>
                    </select>
                    @error('active')
                    <small class="text-danger">{{ $message }}</small>
                    @enderror
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary"
                    data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Update </button>
            </div>
        </form>
    </div>
</div>
@endsection