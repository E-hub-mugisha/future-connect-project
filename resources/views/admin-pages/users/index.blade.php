@extends('layouts.app')
@section('content')

<!-- Page Content -->
<div class="page-wrapper">
    <div class="page-content content pb-0 bg-light">

        <div class="content">
            <div class="main-title mb-4">
                <h2>User Management</h2>
            </div>
            <div class="wallet-wrap">
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Amount in Wallet</p>
                        <h5>$1,302.50</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total Credit</p>
                        <h5>$9,292.50</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total Debit</p>
                        <h5>$1,541.21</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Withdrawn</p>
                        <h5>$8,874.21</h5>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <button type="button" class="btn btn-primary btn-md" data-bs-toggle="modal"
                        data-bs-target="#userAddModal">
                        Add User
                    </button>
                </div>
            </div>

            <div class="table-responsive custom-table">
                <table class="table datatable">
                    <thead class="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($users as $user)
                            <tr>
                                <td>{{ $user->id }}</td>
                                <td>{{ $user->name }}</td>
                                <td>{{ $user->email }}</td>
                                <td>{{ ucfirst($user->role) }}</td>
                                <td>{{ $user->active ? 'Active' : 'Inactive' }}
                                </td>
                                <td>
                                    <a href="{{ route('admin.users.show', $user->id) }}"
                                        class="btn btn-primary btn-sm me-2">View</a>
                                    <button class="btn btn-info btn-sm me-2" data-bs-toggle="modal"
                                        data-bs-target="#editUserModal{{ $user->id }}">Edit</button>

                                    <form action="{{ route('admin.users.destroy', $user->id) }}"
                                        method="POST" class="d-inline">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-sm"
                                            onclick="return confirm('Are you sure?')">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach

                    </tbody>
                </table>

                @foreach($users as $user)
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
                @endforeach
            </div>

            <!-- User Modal -->
            <div class="modal fade" id="userAddModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <form class="modal-content" method="POST" action="{{ route('admin.users.store') }}">
                        @csrf

                        <div class="modal-header">
                            <h5 class="modal-title">
                                Add User
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">

                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" name="name" class="form-control" required>
                                @error('name')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" name="email" class="form-control" required>
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
                                    <option value="admin">
                                        Admin</option>
                                    <option value="user">
                                        User</option>
                                </select>
                                @error('role')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <select name="active" class="form-select">
                                    <option value="1">
                                        Active</option>
                                    <option value="0">
                                        Inactive</option>
                                </select>
                                @error('active')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Create </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
