@extends('layouts.app')
@section('title', 'Talents')
@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Talent Management</h2>
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <button type="button" class="btn btn-primary btn-md" data-bs-toggle="modal"
                        data-bs-target="#talentAddModal">
                        Add Talent
                    </button>
                </div>
            </div>
            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>User info</th>
                                <th>Contact</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Featured</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($talents as $talent)
                            <tr>
                                <td>{{ $talent->id }}</td>
                                <td>
                                    <img src="{{ asset('image/talents/' . $talent->image) }}" alt="Talent Image" width="50" height="50" class="rounded-circle">
                                </td>
                                <td>{{ $talent->name }} </br><small>{{ $talent->email }}</small></td>
                                <td>{{ $talent->phone }}</br><small>{{ $talent->address }}</small></td>
                                <td>
                                    {{ $talent->category ? $talent->category->name : 'N/A' }}</br>
                                    <small>{{ $talent->language }}</small>
                                </td>
                                <td>
                                    @if ($talent->status !== 'approved')
                                    <!-- Button to open modal -->
                                    <span class="text-info">
                                        Not Approved
                                    </span>


                                    @else
                                    <span class="text-success">Approved</span>
                                    @endif
                                </td>
                                <td>
                                    @if($talent->featured)
                                    <span class="badge bg-primary">Yes</span>
                                    @else
                                    <span class="badge bg-secondary">No</span>
                                    @endif
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $talent->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $talent->id }}">
                                            <li>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#quickViewModal{{ $talent->id }}">Quick View</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#talentEditModal{{ $talent->id }}">Edit</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#approveTalentModal{{ $talent->id }}">
                                                    Approve
                                                </a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#statusModal{{ $talent->id }}">Update Status</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#featureModal{{ $talent->id }}">
                                                    {{ $talent->featured ? 'Unfeature' : 'Feature' }}
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $talent->id }}">Delete</a>
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
            @foreach($talents as $talent)
            <!-- Modal -->
            <div class="modal fade" id="approveTalentModal{{ $talent->id }}" tabindex="-1" aria-labelledby="approveTalentLabel{{ $talent->id }}" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form action="{{ route('admin.talents.approve', $talent->id) }}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="modal-header">
                                <h5 class="modal-title" id="approveTalentLabel{{ $talent->id }}">Approve Talent</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure you want to approve <strong>{{ $talent->name }}</strong>?</p>
                                <p>This will create a user account for them with a generated password.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-success">Approve</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            @endforeach

            @foreach($talents as $talent)
            <!-- Feature/Unfeature Modal -->
            <div class="modal fade" id="featureModal{{ $talent->id }}" tabindex="-1"
                aria-labelledby="featureModalLabel{{ $talent->id }}" aria-hidden="true">
                <div class="modal-dialog">
                    <form action="{{ route('admin.talents.feature', $talent->id) }}"
                        method="POST" class="modal-content">
                        @csrf
                        @method('PUT')
                        <input type="hidden" name="featured" value="{{ $talent->featured ? 0 : 1 }}">

                        <div class="modal-header">
                            <h5 class="modal-title" id="featureModalLabel{{ $talent->id }}">
                                Confirm
                                {{ $talent->featured ? 'Unfeature' : 'Feature' }}
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to
                            {{ $talent->featured ? 'unfeature' : 'feature' }}
                            this talent?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-warning">Yes,
                                {{ $talent->featured ? 'Unfeature' : 'Feature' }}</button>
                        </div>
                    </form>
                </div>
            </div>
            @endforeach

            @foreach($talents as $talent)
            <!-- Delete Modal -->
            <div class="modal fade" id="deleteModal{{ $talent->id }}" tabindex="-1"
                aria-labelledby="deleteModalLabel{{ $talent->id }}" aria-hidden="true">
                <div class="modal-dialog">
                    <form action="{{ route('admin.talents.destroy', $talent->id) }}"
                        method="POST" class="modal-content">
                        @csrf
                        @method('DELETE')

                        <div class="modal-header">
                            <h5 class="modal-title" id="deleteModalLabel{{ $talent->id }}">
                                Confirm Delete
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this talent? This action cannot be undone.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-danger">Yes, Delete</button>
                        </div>
                    </form>
                </div>
            </div>
            @endforeach

            @foreach($talents as $talent)
            <!-- Quick View Modal -->
            <div class="modal fade" id="quickViewModal{{ $talent->id }}" tabindex="-1"
                aria-labelledby="quickViewLabel{{ $talent->id }}" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title" id="quickViewLabel{{ $talent->id }}">Talent Quick View
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>

                        <div class="modal-body">

                            <div class="row">
                                <div class="col-md-4">
                                    <img src="{{ asset('image/talents/' . $talent->image) }}"
                                        alt="Talent Image" class="img-fluid rounded">


                                </div>

                                <div class="col-md-8">
                                    <h4>{{ $talent->name }}</h4>
                                    <p><strong>Address:</strong> {{ $talent->address }}</p>
                                    <p><strong>Phone:</strong> {{ $talent->phone }}</p>
                                    <p><strong>Email:</strong> {{ $talent->email }}</p>
                                    <p><strong>Category:</strong>
                                        {{ $talent->category->name ?? 'N/A' }}
                                    </p>
                                    <p><strong>Language:</strong> {{ $talent->language }}</p>
                                    <p><strong>Description:</strong> {{ $talent->description }}</p>
                                </div>
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button>
                            <a type="button" href="{{ route('admin.talents.view', $talent->id) }}" class="btn btn-primary">View Talent</a>
                        </div>

                    </div>
                </div>
            </div>
            @endforeach

            <!-- Create/Edit Talent Modal -->
            @foreach($talents as $talent)
            <!-- Edit Talent Modal -->
            <div class="modal fade" id="talentEditModal{{ $talent->id }}" tabindex="-1" aria-labelledby="talentEditModalLabel{{ $talent->id }}" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <form method="POST" action="{{ route('admin.talents.update', $talent->id) }}" enctype="multipart/form-data" class="modal-content">
                        @csrf
                        @method('PATCH')

                        <div class="modal-header">
                            <h5 class="modal-title" id="talentEditModalLabel{{ $talent->id }}">Edit Talent - {{ $talent->name }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <div class="row g-3">
                                <!-- Name & Email -->
                                <div class="col-md-6">
                                    <label class="form-label">Name</label>
                                    <input type="text" name="name" class="form-control" value="{{ $talent->name }}" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Email</label>
                                    <input type="email" name="email" class="form-control" value="{{ $talent->email }}" required>
                                </div>

                                <!-- Address & Phone -->
                                <div class="col-md-6">
                                    <label class="form-label">Address</label>
                                    <input type="text" name="address" class="form-control" value="{{ $talent->address }}">
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Phone</label>
                                    <input type="text" name="phone" class="form-control" value="{{ $talent->phone }}">
                                </div>

                                <!-- Category & Language -->
                                <div class="col-md-6">
                                    <label class="form-label">Category</label>
                                    <select name="category_id" class="form-select" required>
                                        <option value="">Select Category</option>
                                        @foreach($categories as $category)
                                        <option value="{{ $category->id }}" {{ $talent->category_id == $category->id ? 'selected' : '' }}>
                                            {{ $category->name }}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Language</label>
                                    <input type="text" name="language" class="form-control" value="{{ $talent->language }}">
                                </div>

                                <!-- Image & Featured -->
                                <div class="col-md-6">
                                    <label class="form-label">Image</label>
                                    <input type="file" name="image" class="form-control">
                                    @if($talent->image)
                                    <img src="{{ asset('image/talents/' . $talent->image) }}" alt="Talent Image" class="img-thumbnail mt-2" width="100">
                                    @endif
                                </div>
                                <div class="col-md-6 d-flex align-items-center mt-4">
                                    <input type="hidden" name="featured" value="0">
                                    <div class="form-check form-switch">
                                        <input type="checkbox" name="featured" class="form-check-input" id="featured{{ $talent->id }}" value="1" {{ $talent->featured ? 'checked' : '' }}>
                                        <label class="form-check-label" for="featured{{ $talent->id }}">Featured</label>
                                    </div>
                                </div>

                                <!-- Description -->
                                <div class="col-12">
                                    <label class="form-label">Description</label>
                                    <textarea name="description" class="form-control" rows="3">{{ $talent->description }}</textarea>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Update Talent</button>
                        </div>
                    </form>
                </div>
            </div>

            @endforeach


            @foreach($talents as $talent)
            <!-- Status Modal -->
            <div class="modal fade" id="statusModal{{ $talent->id }}" tabindex="-1"
                aria-labelledby="statusModalLabel{{ $talent->id }}" aria-hidden="true">
                <div class="modal-dialog">
                    <form method="POST"
                        action="{{ route('admin.talents.updateStatus', $talent->id ) }}">
                        @csrf
                        @method('PUT')
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="statusModalLabel{{ $talent->id }}">Update Status
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <select name="status" class="form-select" required>
                                    <option value="pending"
                                        {{ (isset($talent) && $talent->status == 'pending') ? 'selected' : '' }}>
                                        Pending</option>
                                    <option value="approved"
                                        {{ (isset($talent) && $talent->status == 'approved') ? 'selected' : '' }}>
                                        Approved</option>
                                    <option value="rejected"
                                        {{ (isset($talent) && $talent->status == 'rejected') ? 'selected' : '' }}>
                                        Rejected</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Save Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            @endforeach

            <!-- Create/Edit Talent Modal -->
            <div class="modal fade" id="talentAddModal" tabindex="-1" aria-labelledby="talentAddModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <form method="POST" action="{{ route('admin.talents.store') }}" enctype="multipart/form-data" class="modal-content">
                        @csrf
                        <div class="modal-header">
                            <h5 class="modal-title" id="talentAddModalLabel">Add Talent</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <div class="row g-3">
                                <!-- Name & Email -->
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Name</label>
                                    <input id="name" type="text" name="name" class="form-control" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email</label>
                                    <input id="email" type="email" name="email" class="form-control" required>
                                </div>

                                <!-- Address & Phone -->
                                <div class="col-md-6">
                                    <label for="address" class="form-label">Address</label>
                                    <input id="address" type="text" name="address" class="form-control" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input id="phone" type="text" name="phone" class="form-control" required>
                                </div>

                                <!-- Category & Language -->
                                <div class="col-md-6">
                                    <label for="category_id" class="form-label">Category</label>
                                    <select id="category_id" name="category_id" class="form-select" required>
                                        <option value="">Select Category</option>
                                        @foreach($categories as $category)
                                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="language" class="form-label">Language</label>
                                    <input id="language" type="text" name="language" class="form-control" required>
                                </div>

                                <!-- Image Upload -->
                                <div class="col-md-6">
                                    <label for="image" class="form-label">Image</label>
                                    <input id="image" type="file" name="image" class="form-control">
                                </div>

                                <!-- Featured Toggle -->
                                <div class="col-md-6 d-flex align-items-center mt-4">
                                    <div class="form-check form-switch">
                                        <input id="featured" type="checkbox" name="featured" class="form-check-input" value="1">
                                        <label for="featured" class="form-check-label">Featured</label>
                                    </div>
                                </div>

                                <!-- Description -->
                                <div class="col-12">
                                    <label for="description" class="form-label">Description</label>
                                    <textarea id="description" name="description" class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Create Talent</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection