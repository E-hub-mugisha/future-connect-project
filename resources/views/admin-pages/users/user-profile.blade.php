@extends('layouts.app')
@section('title', $user->name . ' — Profile')

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

    /* Back link */
    .back-link {
        display: inline-flex; align-items: center; gap: 6px;
        color: var(--text-lo); font-size: 13px;
        text-decoration: none; margin-bottom: 20px; transition: color .15s;
    }
    .back-link:hover { color: var(--accent); }

    /* Action btn */
    .action-btn {
        width: 32px; height: 32px; border-radius: 7px;
        border: 1px solid var(--border); background: transparent;
        color: var(--text-lo);
        display: inline-flex; align-items: center; justify-content: center;
        cursor: pointer; transition: all .15s; text-decoration: none; font-size: 15px;
    }
    .action-btn:hover           { background: var(--accent-light); color: var(--accent); border-color: #C7D2FB; }
    .action-btn.btn-edit:hover  { background: #FFFBEB; color: var(--warning); border-color: #FDE68A; }
    .action-btn.btn-delete:hover{ background: #FEF2F2; color: var(--danger);  border-color: #FCA5A5; }

    /* Cards */
    .ui-card {
        background: #fff; border: 1px solid var(--border);
        border-radius: 14px; overflow: hidden;
        box-shadow: 0 1px 4px rgba(0,0,0,.04);
    }

    /* Sidebar */
    .avatar-block {
        padding: 28px 16px 20px;
        display: flex; flex-direction: column; align-items: center; gap: 8px;
        border-bottom: 1px solid var(--border); position: relative;
    }
    .top-actions { position: absolute; top: 12px; right: 12px; display: flex; gap: 4px; }
    .avatar-lg {
        width: 72px; height: 72px; border-radius: 50%;
        background: var(--accent-light); color: var(--accent);
        font-size: 24px; font-weight: 700;
        display: flex; align-items: center; justify-content: center;
        border: 2px solid #C7D2FB;
    }
    .sb-name  { color: var(--text-hi); font-size: 15px; font-weight: 700; text-align: center; }
    .sb-email { color: var(--text-lo); font-size: 12px; text-align: center; }
    .sb-role  {
        background: var(--accent-light); color: var(--accent);
        border-radius: 6px; font-size: 11px; font-weight: 600; padding: 3px 11px;
    }

    /* Stats */
    .stats-row { display: grid; grid-template-columns: 1fr 1fr; }
    .stat { padding: 14px 12px; text-align: center; }
    .stat:first-child { border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .stat:last-child  { border-bottom: 1px solid var(--border); }
    .stat-val { color: var(--text-hi); font-size: 14px; font-weight: 700; }
    .stat-lbl { color: var(--text-lo); font-size: 11px; text-transform: uppercase; letter-spacing: .5px; margin-top: 2px; }

    /* Sidebar nav */
    .sidebar-nav { padding: 6px 0; }
    .nav-tab {
        display: flex; align-items: center; gap: 10px;
        padding: 10px 16px; color: var(--text-mid);
        font-size: 13px; font-weight: 500; text-decoration: none; cursor: pointer;
        border-left: 3px solid transparent; transition: all .12s;
        background: none; border-top: none; border-right: none; border-bottom: none;
        width: 100%; text-align: left;
    }
    .nav-tab:hover  { background: #F9FAFB; color: var(--accent); }
    .nav-tab.active { background: var(--accent-light); color: var(--accent); border-left-color: var(--accent); font-weight: 600; }
    .nav-tab .icon  { font-size: 16px; flex-shrink: 0; }

    /* Main panel */
    .panel-header {
        padding: 20px 28px 16px; border-bottom: 1px solid var(--border);
        display: flex; align-items: center; justify-content: space-between;
    }
    .panel-title { font-size: 15px; font-weight: 700; color: var(--text-hi); }
    .panel-sub   { color: var(--text-lo); font-size: 12.5px; margin-top: 3px; }

    .edit-inline-btn {
        display: inline-flex; align-items: center; gap: 6px;
        background: transparent; border: 1px solid var(--border-med);
        border-radius: 7px; color: var(--text-mid);
        font-size: 12.5px; font-weight: 500; padding: 7px 14px; cursor: pointer;
        transition: all .15s;
    }
    .edit-inline-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

    /* Data rows */
    .section-head {
        padding: 10px 28px; font-size: 11px; font-weight: 700;
        text-transform: uppercase; letter-spacing: .8px;
        color: var(--text-lo); background: #FAFAFA;
        border-bottom: 1px solid #F3F4F6;
    }
    .data-row {
        display: flex; align-items: center; padding: 13px 28px;
        border-bottom: 1px solid #F3F4F6; gap: 12px;
    }
    .data-row:last-child { border-bottom: none; }
    .data-label {
        width: 180px; flex-shrink: 0;
        color: var(--text-lo); font-size: 12.5px; font-weight: 500;
        display: flex; align-items: center; gap: 7px;
    }
    .data-label .icon { font-size: 15px; }
    .data-value { color: var(--text-hi); font-size: 13.5px; flex: 1; }

    /* Chips */
    .role-chip { background: var(--accent-light); color: var(--accent); border-radius: 6px; font-size: 12px; font-weight: 600; padding: 3px 10px; }
    .status-chip { display: inline-flex; align-items: center; gap: 5px; font-size: 12.5px; font-weight: 500; }
    .status-chip::before { content: ''; width: 7px; height: 7px; border-radius: 50%; }
    .chip-active   { color: var(--success); } .chip-active::before   { background: var(--success); }
    .chip-inactive { color: var(--danger);  } .chip-inactive::before { background: var(--danger); }

    /* Empty state */
    .empty-tab { padding: 60px 28px; text-align: center; }
    .empty-tab .icon { font-size: 2.2rem; color: var(--border-med); display: block; margin-bottom: 12px; }
    .empty-tab h5 { font-size: 14px; font-weight: 600; color: var(--text-mid); margin-bottom: 6px; }
    .empty-tab p  { font-size: 13px; color: var(--text-lo); margin: 0; }

    /* Modal */
    .modal-content { border: 1px solid var(--border) !important; border-radius: 14px !important; }
    .modal-header { border-bottom: 1px solid var(--border) !important; padding: 20px 24px 16px !important; }
    .modal-title  { font-weight: 700; font-size: 15px; color: var(--text-hi); }
    .modal-footer { border-top: 1px solid var(--border) !important; padding: 14px 24px !important; }
    .modal-body   { padding: 20px 24px !important; }

    .form-label { color: var(--text-mid); font-size: 12px; font-weight: 600; margin-bottom: 5px; }
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
        background: var(--accent); border: none; color: #fff;
        border-radius: 7px; font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
    }
    .btn-primary-sm:hover { background: var(--accent-dark); }
    .btn-danger-sm {
        background: var(--danger); border: none; color: #fff;
        border-radius: 7px; font-size: 13px; font-weight: 500; padding: 8px 20px; cursor: pointer;
    }
    .btn-danger-sm:hover { background: #DC2626; }

    .warn-box {
        background: #FEF2F2; border: 1px solid #FCA5A5; border-radius: 9px;
        padding: 14px 16px; display: flex; gap: 12px;
        color: var(--danger); font-size: 13.5px; align-items: flex-start;
    }
    .warn-box .ni { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
    .warn-name { font-weight: 700; color: #DC2626; margin-bottom: 3px; display: block; }
</style>

<div class="container-fluid px-4 py-4">

    <a href="{{ url()->previous() }}" class="back-link">
        <em class="icon ni ni-arrow-left"></em> Back to Users
    </a>

    <div class="row g-4 align-items-start">

        {{-- ── Sidebar ── --}}
        <div class="col-12 col-lg-3">
            <div class="ui-card">
                <div class="avatar-block">
                    <div class="top-actions">
                        <button type="button" class="action-btn btn-edit" title="Edit profile"
                            data-bs-toggle="modal" data-bs-target="#editUserModal">
                            <em class="icon ni ni-edit"></em>
                        </button>
                        <button type="button" class="action-btn" title="Change photo">
                            <em class="icon ni ni-camera"></em>
                        </button>
                        <button type="button" class="action-btn btn-delete" title="Delete user"
                            data-bs-toggle="modal" data-bs-target="#deleteUserModal">
                            <em class="icon ni ni-trash"></em>
                        </button>
                    </div>
                    <div class="avatar-lg">{{ strtoupper(substr($user->name, 0, 2)) }}</div>
                    <div class="sb-name">{{ $user->name }}</div>
                    <div class="sb-email">{{ $user->email }}</div>
                    <span class="sb-role">{{ ucfirst($user->role) }}</span>
                </div>

                <div class="stats-row">
                    <div class="stat">
                        <div class="stat-val">{{ $user->created_at->format('Y') }}</div>
                        <div class="stat-lbl">Since</div>
                    </div>
                    <div class="stat">
                        <div class="stat-val" style="color:{{ $user->active ? 'var(--success)' : 'var(--danger)' }}">
                            {{ $user->active ? 'Active' : 'Inactive' }}
                        </div>
                        <div class="stat-lbl">Status</div>
                    </div>
                </div>

                <nav class="sidebar-nav">
                    <button class="nav-tab active" data-tab="personal">
                        <em class="icon ni ni-user-fill-c"></em> Personal Info
                    </button>
                    <button class="nav-tab" data-tab="notifications">
                        <em class="icon ni ni-bell-fill"></em> Notifications
                    </button>
                    <button class="nav-tab" data-tab="activity">
                        <em class="icon ni ni-activity-round-fill"></em> Account Activity
                    </button>
                    <button class="nav-tab" data-tab="security">
                        <em class="icon ni ni-lock-alt-fill"></em> Security Settings
                    </button>
                    <button class="nav-tab" data-tab="social">
                        <em class="icon ni ni-grid-add-fill-c"></em> Connected Accounts
                    </button>
                </nav>
            </div>
        </div>

        {{-- ── Main ── --}}
        <div class="col-12 col-lg-9">
            <div class="ui-card">

                {{-- Personal Info --}}
                <div class="tab-pane" id="tab-personal">
                    <div class="panel-header">
                        <div>
                            <div class="panel-title">Personal Information</div>
                            <div class="panel-sub">Basic info used on {{ config('app.name') }}</div>
                        </div>
                        <button class="edit-inline-btn" data-bs-toggle="modal" data-bs-target="#editUserModal">
                            <em class="icon ni ni-edit" style="font-size:14px"></em> Edit
                        </button>
                    </div>
                    <div class="section-head">Basics</div>
                    <div class="data-row">
                        <div class="data-label"><em class="icon ni ni-user"></em> Full Name</div>
                        <div class="data-value">{{ $user->name }}</div>
                    </div>
                    <div class="data-row">
                        <div class="data-label"><em class="icon ni ni-mail"></em> Email</div>
                        <div class="data-value">{{ $user->email }}</div>
                    </div>
                    <div class="data-row">
                        <div class="data-label"><em class="icon ni ni-call"></em> Phone</div>
                        <div class="data-value" style="{{ !$user->phone ? 'color:var(--text-lo)' : '' }}">
                            {{ $user->phone ?? '—' }}
                        </div>
                    </div>
                    <div class="section-head">Access</div>
                    <div class="data-row">
                        <div class="data-label"><em class="icon ni ni-shield-star"></em> Role</div>
                        <div class="data-value"><span class="role-chip">{{ ucfirst($user->role) }}</span></div>
                    </div>
                    <div class="data-row">
                        <div class="data-label"><em class="icon ni ni-toggle-on"></em> Status</div>
                        <div class="data-value">
                            <span class="status-chip {{ $user->active ? 'chip-active' : 'chip-inactive' }}">
                                {{ $user->active ? 'Active' : 'Inactive' }}
                            </span>
                        </div>
                    </div>
                    <div class="data-row">
                        <div class="data-label"><em class="icon ni ni-calendar"></em> Registered</div>
                        <div class="data-value">{{ $user->created_at->format('d M Y, h:i A') }}</div>
                    </div>
                </div>

                {{-- Notifications --}}
                <div class="tab-pane d-none" id="tab-notifications">
                    <div class="panel-header">
                        <div>
                            <div class="panel-title">Notifications</div>
                            <div class="panel-sub">Manage notification preferences</div>
                        </div>
                    </div>
                    <div class="empty-tab">
                        <em class="icon ni ni-bell-off"></em>
                        <h5>No preferences configured</h5>
                        <p>Notification settings will appear here once configured.</p>
                    </div>
                </div>

                {{-- Activity --}}
                <div class="tab-pane d-none" id="tab-activity">
                    <div class="panel-header">
                        <div>
                            <div class="panel-title">Account Activity</div>
                            <div class="panel-sub">Recent login sessions and actions</div>
                        </div>
                    </div>
                    <div class="empty-tab">
                        <em class="icon ni ni-activity-round"></em>
                        <h5>No recent activity</h5>
                        <p>Login sessions and activity logs will appear here.</p>
                    </div>
                </div>

                {{-- Security --}}
                <div class="tab-pane d-none" id="tab-security">
                    <div class="panel-header">
                        <div>
                            <div class="panel-title">Security Settings</div>
                            <div class="panel-sub">Password, 2FA, and access controls</div>
                        </div>
                    </div>
                    <div class="empty-tab">
                        <em class="icon ni ni-lock-alt"></em>
                        <h5>Security options coming soon</h5>
                        <p>Configure 2FA, password resets, and session management here.</p>
                    </div>
                </div>

                {{-- Social --}}
                <div class="tab-pane d-none" id="tab-social">
                    <div class="panel-header">
                        <div>
                            <div class="panel-title">Connected Accounts</div>
                            <div class="panel-sub">Social and third-party integrations</div>
                        </div>
                    </div>
                    <div class="empty-tab">
                        <em class="icon ni ni-grid-add-fill-c"></em>
                        <h5>No connected accounts</h5>
                        <p>Social accounts will appear here once linked.</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>

{{-- ═══ EDIT MODAL ═══ --}}
<div class="modal fade" id="editUserModal" tabindex="-1" aria-hidden="true">
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

{{-- ═══ DELETE MODAL ═══ --}}
<div class="modal fade" id="deleteUserModal" tabindex="-1" aria-hidden="true">
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

@push('scripts')
<script>
    document.querySelectorAll('.nav-tab[data-tab]').forEach(btn => {
        btn.addEventListener('click', function () {
            const target = this.dataset.tab;
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('d-none'));
            document.getElementById('tab-' + target).classList.remove('d-none');
            document.querySelectorAll('.nav-tab').forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        });
    });

    @if($errors->any())
        document.addEventListener('DOMContentLoaded', () => {
            new bootstrap.Modal(document.getElementById('editUserModal')).show();
        });
    @endif
</script>
@endpush

@endsection