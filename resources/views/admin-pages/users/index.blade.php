@extends('layouts.app')
@section('title', 'Users')

@section('content')
<style>
    :root {
        --accent:       #4361EE;
        --accent-light: #EEF1FD;
        --accent-dark:  #3451D1;
        --text-hi:      #111827;
        --text-mid:     #4B5563;
        --text-lo:      #9CA3AF;
        --border:       #E4E8F0;
        --border-med:   #D0D7E5;
        --success:      #10B981;
        --danger:       #EF4444;
        --warning:      #F59E0B;
    }

    body { background: #F8F9FC; }

    /* Page header */
    .page-title { font-size: 20px; font-weight: 700; color: var(--text-hi); letter-spacing: -.3px; }
    .page-sub   { font-size: 13px; color: var(--text-lo); }

    /* Btn */
    .btn-accent {
        background: var(--accent); color: #fff; border: none;
        border-radius: 8px; font-size: 13px; font-weight: 500;
        padding: 9px 18px; display: inline-flex; align-items: center; gap: 7px;
        transition: background .18s; text-decoration: none; cursor: pointer;
    }
    .btn-accent:hover { background: var(--accent-dark); color: #fff; }

    /* Card */
    .ui-card {
        background: #fff; border: 1px solid var(--border);
        border-radius: 14px; overflow: hidden;
        box-shadow: 0 1px 4px rgba(0,0,0,.04);
    }
    .card-bar {
        padding: 13px 20px; border-bottom: 1px solid var(--border);
        display: flex; align-items: center; justify-content: space-between;
    }
    .card-bar-label { font-size: 13px; font-weight: 600; color: var(--text-mid); }
    .count-badge {
        background: var(--accent-light); color: var(--accent);
        border-radius: 5px; font-size: 11px; font-weight: 600;
        padding: 2px 8px; margin-left: 6px;
    }

    /* Search */
    .search-wrap { position: relative; }
    .search-wrap .ni { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--text-lo); font-size: 15px; }
    .search-input {
        border: 1px solid var(--border); border-radius: 8px;
        padding: 7px 12px 7px 32px; font-size: 13px; color: var(--text-hi);
        background: #F9FAFB; outline: none; width: 210px;
        transition: border-color .15s, background .15s;
    }
    .search-input:focus { border-color: var(--accent); background: #fff; box-shadow: 0 0 0 3px rgba(67,97,238,.08); }

    /* Table */
    .ui-table { width: 100%; border-collapse: collapse; }
    .ui-table thead tr { background: #F9FAFB; border-bottom: 1px solid var(--border); }
    .ui-table thead th {
        padding: 11px 20px; font-size: 11px; font-weight: 700;
        text-transform: uppercase; letter-spacing: .7px; color: var(--text-lo);
        white-space: nowrap; text-align: left;
    }
    .ui-table tbody tr { border-bottom: 1px solid #F3F4F6; transition: background .12s; }
    .ui-table tbody tr:last-child { border-bottom: none; }
    .ui-table tbody tr:hover { background: #F9FAFB; }
    .ui-table tbody td { padding: 13px 20px; font-size: 13.5px; color: var(--text-mid); vertical-align: middle; }

    /* Avatar */
    .user-cell { display: flex; align-items: center; gap: 11px; }
    .avatar {
        width: 36px; height: 36px; border-radius: 50%;
        font-size: 12px; font-weight: 700;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; border: 1.5px solid;
    }
    .av-blue  { background: #EEF1FD; color: #4361EE; border-color: #C7D2FB; }
    .av-amber { background: #FEF3C7; color: #D97706; border-color: #FDE68A; }
    .av-green { background: #D1FAE5; color: #059669; border-color: #A7F3D0; }
    .av-pink  { background: #FCE7F3; color: #DB2777; border-color: #FBCFE8; }

    .user-name  { color: var(--text-hi); font-weight: 600; font-size: 13.5px; }
    .user-email { color: var(--text-lo); font-size: 12px; margin-top: 1px; }

    /* Badges */
    .id-pill {
        background: #F3F4F6; color: var(--text-lo);
        border-radius: 5px; font-size: 11.5px; font-family: monospace;
        font-weight: 700; padding: 2px 7px;
    }
    .role-badge { border-radius: 6px; font-size: 11.5px; font-weight: 600; padding: 3px 10px; }
    .role-admin { background: var(--accent-light); color: var(--accent); }
    .role-user  { background: #F3F4F6; color: var(--text-mid); }

    .status-dot { display: inline-flex; align-items: center; gap: 5px; font-size: 12.5px; font-weight: 500; }
    .status-dot::before { content: ''; width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
    .status-active   { color: var(--success); } .status-active::before   { background: var(--success); }
    .status-inactive { color: var(--danger);  } .status-inactive::before { background: var(--danger); }

    /* Action buttons */
    .action-icons { display: flex; align-items: center; gap: 4px; }
    .action-btn {
        width: 32px; height: 32px; border-radius: 7px;
        border: 1px solid var(--border); background: transparent;
        color: var(--text-lo);
        display: inline-flex; align-items: center; justify-content: center;
        cursor: pointer; transition: all .15s; text-decoration: none; font-size: 15px;
    }
    .action-btn:hover         { background: var(--accent-light); color: var(--accent); border-color: #C7D2FB; }
    .action-btn.btn-edit:hover  { background: #FFFBEB; color: var(--warning); border-color: #FDE68A; }
    .action-btn.btn-delete:hover{ background: #FEF2F2; color: var(--danger);  border-color: #FCA5A5; }

    /* Pagination */
    .pg-bar { padding: 13px 20px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
    .pg-info { font-size: 12.5px; color: var(--text-lo); }

    /* Modal overrides */
    .modal-content { border: 1px solid var(--border) !important; border-radius: 14px !important; }
    .modal-header { border-bottom: 1px solid var(--border) !important; padding: 20px 24px 16px !important; }
    .modal-title  { font-weight: 700; font-size: 15px; color: var(--text-hi); }
    .modal-footer { border-top: 1px solid var(--border) !important; padding: 14px 24px !important; }
    .modal-body   { padding: 20px 24px !important; }

    .form-label { color: var(--text-mid); font-size: 12px; font-weight: 600; margin-bottom: 5px; letter-spacing: .2px; }
    .form-control, .form-select {
        background: #F9FAFB; border: 1px solid var(--border-med);
        border-radius: 8px; color: var(--text-hi); font-size: 13.5px; padding: 9px 12px;
        transition: border-color .15s;
    }
    .form-control:focus, .form-select:focus {
        border-color: var(--accent); background: #fff;
        box-shadow: 0 0 0 3px rgba(67,97,238,.08); outline: none;
    }
    .form-control::placeholder { color: var(--text-lo); }

    .btn-cancel {
        background: #F3F4F6; border: 1px solid var(--border);
        color: var(--text-mid); border-radius: 7px;
        font-size: 13px; font-weight: 500; padding: 8px 18px; cursor: pointer;
    }
    .btn-cancel:hover { background: #E5E7EB; }
    .btn-primary-sm {
        background: var(--accent); border: none;
        color: #fff; border-radius: 7px;
        font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
    }
    .btn-primary-sm:hover { background: var(--accent-dark); }
    .btn-danger-sm {
        background: var(--danger); border: none;
        color: #fff; border-radius: 7px;
        font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
    }
    .btn-danger-sm:hover { background: #DC2626; }

    .warn-box {
        background: #FEF2F2; border: 1px solid #FCA5A5; border-radius: 9px;
        padding: 14px 16px; display: flex; align-items: flex-start; gap: 12px;
        color: var(--danger); font-size: 13.5px;
    }
    .warn-box .ni { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
    .warn-name { font-weight: 700; color: #DC2626; margin-bottom: 3px; display: block; }

    /* Empty */
    .empty-row td { text-align: center; padding: 52px 20px; color: var(--text-lo); }
</style>

<div class="container-fluid px-4 py-4">

    {{-- Page header --}}
    <div class="d-flex justify-content-between align-items-end mb-4">
        <div>
            <div class="page-title">User Management</div>
            <div class="page-sub mt-1">Manage platform users, roles, and access</div>
        </div>
        <button type="button" class="btn-accent" data-bs-toggle="modal" data-bs-target="#addUserModal">
            <em class="icon ni ni-user-add"></em> Add User
        </button>
    </div>

    {{-- Flash messages --}}
    @if(session('success'))
    <div class="alert alert-success border-0 rounded-3 d-flex align-items-center gap-2 mb-4 py-3" role="alert"
         style="background:#ECFDF5;color:#065F46;font-size:13.5px;">
        <em class="icon ni ni-check-circle-fill" style="font-size:17px"></em>
        {{ session('success') }}
    </div>
    @endif

    {{-- Table card --}}
    <div class="ui-card">
        <div class="card-bar">
            <span class="card-bar-label">
                All Users<span class="count-badge">{{ $users->count() }}</span>
            </span>
            <div class="search-wrap">
                <em class="icon ni ni-search"></em>
                <input type="text" id="userSearch" class="search-input" placeholder="Search users…" oninput="filterUsers()">
            </div>
        </div>

        <div class="table-responsive">
            <table class="ui-table" id="usersTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Joined</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($users as $index => $user)
                    @php
                        $avClasses = ['av-blue','av-amber','av-green','av-pink'];
                        $av = $avClasses[$index % 4];
                    @endphp
                    <tr>
                        <td><span class="id-pill">#{{ str_pad($user->id, 3, '0', STR_PAD_LEFT) }}</span></td>
                        <td>
                            <div class="user-cell">
                                <div class="avatar {{ $av }}">{{ strtoupper(substr($user->name, 0, 2)) }}</div>
                                <div>
                                    <div class="user-name">{{ $user->name }}</div>
                                    <div class="user-email">{{ $user->email }}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="role-badge {{ $user->role === 'admin' ? 'role-admin' : 'role-user' }}">
                                {{ ucfirst($user->role) }}
                            </span>
                        </td>
                        <td>
                            <span class="status-dot {{ $user->active ? 'status-active' : 'status-inactive' }}">
                                {{ $user->active ? 'Active' : 'Inactive' }}
                            </span>
                        </td>
                        <td style="font-size:13px;color:var(--text-lo)">{{ $user->created_at->format('d M Y') }}</td>
                        <td>
                            <div class="action-icons">
                                <a href="{{ route('admin.users.show', $user->id) }}" class="action-btn btn" title="View profile">
                                    <span class="text-info">View</span>
                                </a>
                                <button type="button" class="action-btn btn-edit btn" title="Edit"
                                    data-bs-toggle="modal" data-bs-target="#editModal{{ $user->id }}">
                                    <span class="text-warning">Edit</span>
                                </button>
                                <button type="button" class="action-btn btn-delete btn" title="Delete"
                                    data-bs-toggle="modal" data-bs-target="#deleteModal{{ $user->id }}">
                                    <span class="text-danger">Delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr class="empty-row">
                        <td colspan="6">
                            <em class="icon ni ni-users" style="font-size:2rem;display:block;margin-bottom:10px;opacity:.3"></em>
                            No users found.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        @if($users instanceof \Illuminate\Pagination\LengthAwarePaginator)
        <div class="pg-bar">
            <span class="pg-info">Showing {{ $users->firstItem() }}–{{ $users->lastItem() }} of {{ $users->total() }} users</span>
            {{ $users->links('vendor.pagination.bootstrap-5') }}
        </div>
        @endif
    </div>

</div>

{{-- ═══ EDIT MODALS ═══ --}}
@foreach($users as $user)
<div class="modal fade" id="editModal{{ $user->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <form class="modal-content" method="POST" action="{{ route('admin.users.update', $user->id) }}">
            @csrf @method('PUT')
            <div class="modal-header">
                <h5 class="modal-title">
                    <em class="icon ni ni-edit me-2" style="color:var(--warning)"></em>Edit User
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body d-grid gap-3">
                <div>
                    <label class="form-label">Full Name</label>
                    <input type="text" name="name" class="form-control" value="{{ old('name', $user->name) }}" required>
                    @error('name')<small class="text-danger">{{ $message }}</small>@enderror
                </div>
                <div>
                    <label class="form-label">Email Address</label>
                    <input type="email" name="email" class="form-control" value="{{ old('email', $user->email) }}" required>
                    @error('email')<small class="text-danger">{{ $message }}</small>@enderror
                </div>
                <div>
                    <label class="form-label">
                        New Password
                        <small class="text-muted fw-normal">(leave blank to keep current)</small>
                    </label>
                    <input type="password" name="password" class="form-control" placeholder="••••••••">
                    @error('password')<small class="text-danger">{{ $message }}</small>@enderror
                </div>
                <div class="row g-3">
                    <div class="col-6">
                        <label class="form-label">Role</label>
                        <select name="role" class="form-select">
                            <option value="admin" {{ $user->role === 'admin' ? 'selected' : '' }}>Admin</option>
                            <option value="user"  {{ $user->role === 'user'  ? 'selected' : '' }}>User</option>
                        </select>
                        @error('role')<small class="text-danger">{{ $message }}</small>@enderror
                    </div>
                    <div class="col-6">
                        <label class="form-label">Status</label>
                        <select name="active" class="form-select">
                            <option value="1" {{ $user->active  ? 'selected' : '' }}>Active</option>
                            <option value="0" {{ !$user->active ? 'selected' : '' }}>Inactive</option>
                        </select>
                        @error('active')<small class="text-danger">{{ $message }}</small>@enderror
                    </div>
                </div>
            </div>
            <div class="modal-footer gap-2">
                <button type="button" class="btn-cancel" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn-primary-sm">Save Changes</button>
            </div>
        </form>
    </div>
</div>
@endforeach

{{-- ═══ DELETE MODALS ═══ --}}
@foreach($users as $user)
<div class="modal fade" id="deleteModal{{ $user->id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <form class="modal-content" method="POST" action="{{ route('admin.users.destroy', $user->id) }}">
            @csrf @method('DELETE')
            <div class="modal-header">
                <h5 class="modal-title">
                    <em class="icon ni ni-trash me-2" style="color:var(--danger)"></em>Delete User
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="warn-box">
                    <em class="icon ni ni-alert-circle"></em>
                    <div>
                        <span class="warn-name">{{ $user->name }}</span>
                        Permanently deletes this user and all associated data. This cannot be undone.
                    </div>
                </div>
            </div>
            <div class="modal-footer gap-2">
                <button type="button" class="btn-cancel" data-bs-dismiss="modal">Keep User</button>
                <button type="submit" class="btn-danger-sm">
                    <em class="icon ni ni-trash me-1"></em>Delete
                </button>
            </div>
        </form>
    </div>
</div>
@endforeach

{{-- ═══ ADD USER MODAL ═══ --}}
<div class="modal fade" id="addUserModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <form class="modal-content" method="POST" action="{{ route('admin.users.store') }}">
            @csrf
            <div class="modal-header">
                <h5 class="modal-title">
                    <em class="icon ni ni-user-add me-2" style="color:var(--accent)"></em>Add New User
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body d-grid gap-3">
                <div>
                    <label class="form-label">Full Name</label>
                    <input type="text" name="name" class="form-control"
                           placeholder="e.g. Alice Bennett" value="{{ old('name') }}" required>
                    @error('name')<small class="text-danger">{{ $message }}</small>@enderror
                </div>
                <div>
                    <label class="form-label">Email Address</label>
                    <input type="email" name="email" class="form-control"
                           placeholder="alice@example.com" value="{{ old('email') }}" required>
                    @error('email')<small class="text-danger">{{ $message }}</small>@enderror
                </div>
                <div>
                    <label class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" placeholder="••••••••" required>
                    @error('password')<small class="text-danger">{{ $message }}</small>@enderror
                </div>
                <div class="row g-3">
                    <div class="col-6">
                        <label class="form-label">Role</label>
                        <select name="role" class="form-select">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <label class="form-label">Status</label>
                        <select name="active" class="form-select">
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="modal-footer gap-2">
                <button type="button" class="btn-cancel" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn-primary-sm">
                    <em class="icon ni ni-check me-1"></em>Create User
                </button>
            </div>
        </form>
    </div>
</div>

@push('scripts')
<script>
    function filterUsers() {
        const q = document.getElementById('userSearch').value.toLowerCase();
        document.querySelectorAll('#usersTable tbody tr').forEach(row => {
            row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
        });
    }

    @if($errors->any())
        document.addEventListener('DOMContentLoaded', () => {
            @if(old('_method') === 'PUT')
                const m = document.querySelector('.modal.fade[id^="editModal"]');
                if (m) new bootstrap.Modal(m).show();
            @else
                new bootstrap.Modal(document.getElementById('addUserModal')).show();
            @endif
        });
    @endif
</script>
@endpush

@endsection