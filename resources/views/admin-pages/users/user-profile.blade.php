@extends('layouts.app')
@section('title', 'User Profile')
@section('content')

<!-- Page Content -->
<div class="page-wrapper">
    <div class="page-content content bg-light">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="main-title mb-4">
                    <h4>My Profile</h4>
                </div>
                <div class="card profile-card">
                    <div class="card-body">
                        <div class="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                            <div class="d-flex align-items-center flex-shrink-0">
                                <span class="avatar avatar-lg"><img class="rounded-2" src="assets/img/user/user-04.jpg" alt="img"></span>
                                <div class="ms-3">
                                    <h6 class="mb-1 d-inline-flex flex-wrap align-items-center">{{ $user->name }}<span class="badge badge-success-transparent ms-3 rounded-pill">16 Gigs</span></h6>
                                    <p class="mb-2">{{ $user->location }}</p>
                                    <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-star-filled me-2 text-warning"></i>Ratings 5.0 (45 Reviews)</p>
                                </div>
                            </div>
                            <div class="gap-2 d-flex">
                                <a role="button"
                                    tabIndex="0" class="btn btn-md btn-dark" data-bs-toggle="modal"
                                        data-bs-target="#editUserModal{{ $user->id }}"><i class="ti ti-user-edit me-1"></i>Edit Profile</a>
                                <a role="button"
                                    tabIndex="0" class="btn btn-md btn-primary"><i class="ti ti-phone me-1"></i>Contact Me</a>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card profile-details profile-card">
                    <div class="card-header">
                        <h5 class="mb-0">Personal Details</h5>
                    </div>
                    <div class="card-body personal-card">
                        <div class="row row-gap-3">
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Name</h6>
                                <p class="mb-0">{{ $user->name }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Email</h6>
                                <p class="mb-0"><a href="https://dreamgigs.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="c7a3a6b1aea3b0aeabb4a8a987a2bfa6aab7aba2e9a4a8aa">{{ $user->email }}</a></p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Phone</h6>
                                <p class="mb-0">{{ $user->phone }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Date</h6>
                                <p class="mb-0">{{ $user->created_at->format('d M Y') }}</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Speaks</h6>
                                <p class="mb-0">English, Kinyarwanda</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Member Since</h6>
                                <p class="mb-0">{{ $user->created_at->format('d M Y') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card profile-details profile-card">
                    <div class="card-header">
                        <h5 class="mb-0">Address Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="row row-gap-3">
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Country</h6>
                                <p class="mb-0">United States</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">City</h6>
                                <p class="mb-0">California</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">State</h6>
                                <p class="mb-0">Los Angeles</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Address Line</h6>
                                <p class="mb-0">1234 Sunset Blvd, Apt 56B</p>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <h6 class="mb-1">Postal Code</h6>
                                <p class="mb-0">90026</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card profile-card">
                    <div class="card-header">
                        <h5 class="mb-0">About Me</h5>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">Hello, Greetings! My name is Adrian, a professional embroidery digitizer who converts an Image into embroidery files such as DST, PES or any other. I can produce an embroidery design file without any fabric puckering. I'm
                            the guy who has more than 15 years of experience in the field of embroidery design digitizing. I love what I do because embroidery digitizing is my passion and profession. so, get in touch with me if you have any question.
                            thank you!</p>
                    </div>
                </div>
                <div class="card personal-card">
                    <div class="card-header">
                        <h5 class="mb-0">Skills</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center flex-wrap-wrap gap-2 ">
                            <div class="badge bg-light fw-medium fs-13 text-dark">
                                <i class="ti ti-point-filled me-1"></i> Logo Design
                            </div>
                            <div class="badge bg-light fw-medium fs-13 text-dark">
                                <i class="ti ti-point-filled me-1"></i> Graphics Design
                            </div>
                            <div class="badge bg-light fw-medium fs-13 text-dark">
                                <i class="ti ti-point-filled me-1"></i> Adobe Illustrator
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card personal-card">
                    <div class="card-header">
                        <h5 class="mb-0">Social Links</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item"><a href="#" class="text-dark fs-14"><i class="ti ti-facebook"></i></a></li>
                            <li class="list-inline-item"><a href="#" class="text-dark fs-14"><i class="ti ti-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="#" class="text-dark fs-14"><i class="ti ti-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="#" class="text-dark fs-14"><i class="ti ti-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>

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
</div>
<!-- /Page Content -->
@endsection