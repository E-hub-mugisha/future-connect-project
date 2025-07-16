@extends('layouts.app')
@section('content')

<!-- Page Content -->
<div class="page-wrapper">
    <div class="page-content content pb-0 bg-light">

        <div class="content">
            <div class="main-title mb-4">
                <h2>Talent Management</h2>
            </div>
            <div class="wallet-wrap">
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total Ratings</p>
                        <h5>{{ $totalRatings }}</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total Stories</p>
                        <h5>{{ $totalStories }}</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total comments</p>
                        <h5>{{ $totalComments }}</h5>
                    </div>
                </div>
                <div class="wallet-item">
                    <div class="wallet-info">
                        <p>Total Skills</p>
                        <h5>{{ $totalSkills }}</h5>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <button type="button" class="btn btn-primary btn-md" data-bs-toggle="modal"
                        data-bs-target="#talentAddModal">
                        Add Talent
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
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Status</th>
                            <th>Featured</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($talents as $talent)
                        <tr>
                            <td>{{ $talent->id }}</td>
                            <td>{{ $talent->name }}</td>
                            <td>{{ $talent->email }}</td>
                            <td>{{ $talent->category ? $talent->category->name : 'N/A' }}
                            </td>
                            <td>{{ $talent->rating }}</td>
                            <td>{{ $talent->status }}</td>
                            <td>{{ $talent->featured ? 'Yes' : 'No' }}
                            </td>
                            <td>
                                <button type="button" class="btn btn-info btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal{{ $talent->id }}">
                                    Quick View
                                </button>

                                <button class="btn btn-info btn-sm me-2" data-bs-toggle="modal"
                                    data-bs-target="#talentEditModal{{ $talent->id }}">Edit</button>

                                <button class="btn btn-primary btn-sm me-2" data-bs-toggle="modal"
                                    data-bs-target="#statusModal{{ $talent->id }}">Update
                                    Status</button>

                                <!-- Feature/Unfeature Button -->
                                <button type="button" class="btn btn-warning btn-sm me-2" data-bs-toggle="modal"
                                    data-bs-target="#featureModal{{ $talent->id }}">
                                    {{ $talent->featured ? 'Unfeature' : 'Feature' }}
                                </button>

                                <!-- Delete Button -->
                                <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#deleteModal{{ $talent->id }}">
                                    Delete
                                </button>

                            </td>
                        </tr>
                        @endforeach

                    </tbody>
                </table>

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
                                        <img src="{{ $talent->image ? asset('image/talents/' . $talent->image) : asset('/assets/img/user/profile.jpg') }}"
                                            class="img-fluid rounded" alt="Talent Image">
                                    </div>

                                    <div class="col-md-8">
                                        <h4>{{ $talent->name }}</h4>
                                        <p><strong>Address:</strong> {{ $talent->address }}</p>
                                        <p><strong>Phone:</strong> {{ $talent->phone }}</p>
                                        <p><strong>Email:</strong> {{ $talent->email }}</p>
                                        <p><strong>Skill:</strong> {{ $talent->skill }}</p>
                                        <p><strong>Category:</strong>
                                            {{ $talent->category->name ?? 'N/A' }}
                                        </p>
                                        <p><strong>Rating:</strong> {{ $talent->rating }}/5</p>
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
                <div class="modal fade" id="talentEditModal{{ $talent->id }}" tabindex="-1" aria-labelledby="talentEditModalLabel{{ $talent->id }}" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <form method="POST" action="{{ route('admin.talents.update', $talent->id) }}" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')

                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="talentEditModalLabel{{ $talent->id }}">Edit Talent - {{ $talent->name }}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body">
                                    {{-- Name --}}
                                    <div class="mb-3">
                                        <label class="form-label">Name</label>
                                        <input type="text" name="name" class="form-control" value="{{ $talent->name }}" required>
                                    </div>

                                    {{-- Address --}}
                                    <div class="mb-3">
                                        <label class="form-label">Address</label>
                                        <input type="text" name="address" class="form-control" value="{{ $talent->address }}">
                                    </div>

                                    {{-- Phone --}}
                                    <div class="mb-3">
                                        <label class="form-label">Phone</label>
                                        <input type="text" name="phone" class="form-control" value="{{ $talent->phone }}">
                                    </div>

                                    {{-- Email --}}
                                    <div class="mb-3">
                                        <label class="form-label">Email</label>
                                        <input type="email" name="email" class="form-control" value="{{ $talent->email }}">
                                    </div>

                                    {{-- Skill --}}
                                    <div class="mb-3">
                                        <label class="form-label">Skill</label>
                                        <input type="text" name="skill" class="form-control" value="{{ $talent->skill }}" required>
                                    </div>

                                    {{-- Category --}}
                                    <div class="mb-3">
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

                                    {{-- Story --}}
                                    <div class="mb-3">
                                        <label class="form-label">Story</label>
                                        <textarea name="story" class="form-control" rows="3">{{ $talent->story }}</textarea>
                                    </div>

                                    {{-- Rating --}}
                                    <div class="mb-3">
                                        <label class="form-label">Rating (0–5)</label>
                                        <input type="number" name="rating" min="0" max="5" class="form-control" value="{{ $talent->rating }}">
                                    </div>

                                    {{-- Language --}}
                                    <div class="mb-3">
                                        <label class="form-label">Language</label>
                                        <input type="text" name="language" class="form-control" value="{{ $talent->language }}">
                                    </div>

                                    {{-- Image --}}
                                    <div class="mb-3">
                                        <label class="form-label">Image</label>
                                        <input type="file" name="image" class="form-control">
                                        @if($talent->image)
                                        <img src="{{ asset('image/talents/' . $talent->image) }}" alt="Talent Image" class="img-thumbnail mt-2" width="100">
                                        @endif
                                    </div>

                                    {{-- Description --}}
                                    <div class="mb-3">
                                        <label class="form-label">Description</label>
                                        <textarea name="description" class="form-control" rows="3">{{ $talent->description }}</textarea>
                                    </div>

                                    {{-- Featured --}}
                                    <div class="form-check mb-3">
                                        <input type="checkbox" name="featured" class="form-check-input" id="featured{{ $talent->id }}" {{ $talent->featured ? 'checked' : '' }}>
                                        <label class="form-check-label" for="featured{{ $talent->id }}">Featured</label>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-primary">Update Talent</button>
                                </div>
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
                <div class="modal fade" id="talentAddModal" tabindex="-1" aria-labelledby="talentAdModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <form method="POST" action="{{ route('admin.talents.store') }}" enctype="multipart/form-data">
                            @csrf
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="talentAddModalLabel">Add Talent</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>

                                <div class="modal-body">
                                    <!-- Name -->
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input id="name" type="text" name="name" class="form-control" required>
                                    </div>

                                    <!-- Address -->
                                    <div class="mb-3">
                                        <label for="address" class="form-label">Address</label>
                                        <input id="address" type="text" name="address" class="form-control" required>
                                    </div>

                                    <!-- Phone -->
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">Phone</label>
                                        <input id="phone" type="text" name="phone" class="form-control" required>
                                    </div>

                                    <!-- Email -->
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input id="email" type="email" name="email" class="form-control" required>
                                    </div>

                                    <!-- Skill -->
                                    <div class="mb-3">
                                        <label for="skill" class="form-label">Skill</label>
                                        <input id="skill" type="text" name="skill" class="form-control" required>
                                    </div>

                                    <!-- Category -->
                                    <div class="mb-3">
                                        <label for="category_id" class="form-label">Category</label>
                                        <select id="category_id" name="category_id" class="form-select" required>
                                            <option value="">Select Category</option>
                                            @foreach($categories as $category)
                                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <!-- Story -->
                                    <div class="mb-3">
                                        <label for="story" class="form-label">Story</label>
                                        <textarea id="story" name="story" class="form-control"></textarea>
                                    </div>

                                    <!-- Rating -->
                                    <div class="mb-3">
                                        <label for="rating" class="form-label">Rating (0-5)</label>
                                        <input id="rating" type="number" name="rating" min="0" max="5"
                                            class="form-control" required>
                                    </div>

                                    <!-- Language -->
                                    <div class="mb-3">
                                        <label for="language" class="form-label">Language</label>
                                        <input id="language" type="text" name="language" class="form-control" required>
                                    </div>

                                    <!-- Image URL -->
                                    <div class="mb-3">
                                        <label for="image" class="form-label">Image</label>
                                        <input id="image" type="file" name="image" class="form-control">
                                    </div>

                                    <!-- Description -->
                                    <div class="mb-3">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea id="description" name="description" class="form-control"></textarea>
                                    </div>

                                    <!-- Featured -->
                                    <div class="form-check">
                                        <input id="featured" type="checkbox" name="featured" class="form-check-input"
                                            value="1">
                                        <label for="featured" class="form-check-label">Featured</label>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-primary">Create Talent</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection