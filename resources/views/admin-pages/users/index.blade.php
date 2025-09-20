@extends('layouts.app')
@section('title', 'Users')
@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>User Management</h2>
                <div class="d-flex align-items-center">
                    <button type="button" class="btn btn-primary btn-md" data-bs-toggle="modal"
                        data-bs-target="#userAddModal">
                        Add User
                    </button>
                </div>
            </div>

            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
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
                                    <div class="dropdown">
                                        <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $user->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $user->id }}">
                                            <li>
                                                <a href="{{ route('admin.users.show', $user->id) }}"
                                                    class="dropdown-item">View</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" data-bs-toggle="modal"
                                                    data-bs-target="#editUserModal{{ $user->id }}">Edit</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $user->id }}">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            @endforeach

                        </tbody>
                    </table>
                </div>
            </div>
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

            @foreach($users as $user)
            <!-- Delete Modal -->
            <div class="modal fade" id="deleteModal{{ $user->id }}" tabindex="-1"
                aria-labelledby="deleteModalLabel{{ $user->id }}" aria-hidden="true">
                <div class="modal-dialog">
                    <form action="{{ route('admin.users.destroy', $user->id) }}"
                        method="POST" class="modal-content">
                        @csrf
                        @method('DELETE')

                        <div class="modal-header">
                            <h5 class="modal-title" id="deleteModalLabel{{ $user->id }}">
                                Confirm Delete
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this user? This action cannot be undone.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-danger">Yes, Delete</button>
                        </div>
                    </form>
                </div>
            </div>
            @endforeach

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