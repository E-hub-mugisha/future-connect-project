@extends('layouts.app')
@section('content')

<div class="page-wrapper">
    <div class="page-content content pb-0 bg-light">

        <div class="content">
            <div class="main-title mb-4">
                <h2>Skills Management</h2>
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

                    <!-- Add Skill Button -->
                    <button class="btn btn-primary mb-3 btn-md" data-bs-toggle="modal"
                        data-bs-target="#addSkillModal">Add Skill</button>
                </div>
            </div>
            <div class="table-responsive custom-table">
                <table class="table datatable">
                    <thead class="thead-light">

                        <tr>
                            <th>Name</th>
                            <th>Talent</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Level</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($skills as $skill)
                        <tr>
                            <td>{{ $skill->name }}</td>
                            <td>{{ $skill->talent->name ?? 'N/A' }}
                            </td>
                            <td>{{ $skill->category->name ?? 'N/A' }}
                            </td>
                            <td>{{ ucfirst($skill->status) }}</td>
                            <td>{{ ucfirst($skill->level) }}</td>
                            <td>
                                <!-- edit Skill Button -->
                                <button class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#editSkillModal{{ $skill->id }}">edit Skill</button>
                                <form
                                    action="{{ route('admin.skills.destroy', $skill->id) }}"
                                    method="POST" class="d-inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-sm btn-danger"
                                        onclick="return confirm('Delete this skill?')">Delete</button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

            <!-- Edit Skill Modal -->
            @foreach($skills as $skill)
            <div class="modal fade"
                id="editSkillModal{{ $skill->id }}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <form class="modal-content" method="POST"
                        action="{{ route('admin.skills.update', $skill->id) }}">
                        @csrf
                        @method('PUT')

                        <div class="modal-header">
                            <h5 class="modal-title">Edit Skill</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input name="name" class="form-control" value="{{ old('name', $skill->name) }}"
                                    required>
                                @error('name')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Talent</label>
                                <select name="talent_id" class="form-select" required>
                                    <option value="">Select Talent</option>
                                    @foreach($talents as $talent)
                                    <option value="{{ $talent->id }}"
                                        {{ old('talent_id', $skill->talent_id) == $talent->id ? 'selected' : '' }}>
                                        {{ $talent->name }}
                                    </option>
                                    @endforeach
                                </select>
                                @error('talent_id')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Category</label>
                                <select name="category_id" class="form-select" required>
                                    <option value="">Select Category</option>
                                    @foreach($categories as $category)
                                    <option value="{{ $category->id }}"
                                        {{ old('category_id', $skill->category_id) == $category->id ? 'selected' : '' }}>
                                        {{ $category->name }}
                                    </option>
                                    @endforeach
                                </select>
                                @error('category_id')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <select name="status" class="form-select" required>
                                    <option value="draft"
                                        {{ old('status', $skill->status) == 'draft' ? 'selected' : '' }}>
                                        Draft</option>
                                    <option value="published"
                                        {{ old('status', $skill->status) == 'published' ? 'selected' : '' }}>
                                        Published</option>
                                </select>
                                @error('status')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Level</label>
                                <select name="level" class="form-select" required>
                                    <option value="beginner"
                                        {{ old('level', $skill->level) == 'beginner' ? 'selected' : '' }}>
                                        Beginner</option>
                                    <option value="intermediate"
                                        {{ old('level', $skill->level) == 'intermediate' ? 'selected' : '' }}>
                                        Intermediate</option>
                                    <option value="advanced"
                                        {{ old('level', $skill->level) == 'advanced' ? 'selected' : '' }}>
                                        Advanced</option>
                                </select>
                                @error('level')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary">Save</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            @endforeach

            <!-- Add Skill Modal -->
            <div class="modal fade"
                id="addSkillModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <form class="modal-content" method="POST" action="{{ route('admin.skills.store') }}">
                        @csrf

                        <div class="modal-header">
                            <h5 class="modal-title">Add Skill</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input name="name" class="form-control" value="{{ old('name') }}"
                                    required>
                                @error('name')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Talent</label>
                                <select name="talent_id" class="form-select" required>
                                    <option value="">Select Talent</option>
                                    @foreach($talents as $talent)
                                    <option value="{{ $talent->id }}"
                                        {{ old('talent_id') == $talent->id ? 'selected' : '' }}>
                                        {{ $talent->name }}
                                    </option>
                                    @endforeach
                                </select>
                                @error('talent_id')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Category</label>
                                <select name="category_id" class="form-select" required>
                                    <option value="">Select Category</option>
                                    @foreach($categories as $category)
                                    <option value="{{ $category->id }}"
                                        {{ old('category_id') == $category->id ? 'selected' : '' }}>
                                        {{ $category->name }}
                                    </option>
                                    @endforeach
                                </select>
                                @error('category_id')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <select name="status" class="form-select" required>
                                    <option value="draft"
                                        {{ old('status') == 'draft' ? 'selected' : '' }}>
                                        Draft</option>
                                    <option value="published"
                                        {{ old('status') == 'published' ? 'selected' : '' }}>
                                        Published</option>
                                </select>
                                @error('status')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Level</label>
                                <select name="level" class="form-select" required>
                                    <option value="beginner"
                                        {{ old('level') == 'beginner' ? 'selected' : '' }}>
                                        Beginner</option>
                                    <option value="intermediate"
                                        {{ old('level') == 'intermediate' ? 'selected' : '' }}>
                                        Intermediate</option>
                                    <option value="advanced"
                                        {{ old('level') == 'advanced' ? 'selected' : '' }}>
                                        Advanced</option>
                                </select>
                                @error('level')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-primary">Save</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection