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

                    <!-- Add Testimonial Button -->
                    <button class="btn btn-primary mb-3 btn-md" data-bs-toggle="modal"
                        data-bs-target="#addTestimonialModal">Add Testimonial</button>
                </div>
            </div>
            <div class="table-responsive custom-table">
                <table class="table datatable">
                    <thead class="thead-light">

                        <tr>
                            <th>Title</th>
                            <th>Talent</th>
                            <th>Rating</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($testimonials as $testimonial)
                        <tr>
                            <td>{{ $testimonial->title }}</td>
                            <td>{{ $testimonial->talent->name ?? 'N/A' }}
                            </td>
                            <td>{{ $testimonial->rating ?? 'N/A' }}
                            </td>
                            <td>{{ ucfirst($testimonial->created_at->format('F j, Y')) }}</td>
                            <td>
                                <!-- edit Testimonial Button -->
                                <button class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#editTestiModal{{ $testimonial->id }}">edit Testimonial</button>
                                <form
                                    action="{{ route('admin.testimonials.destroy', $testimonial->id) }}"
                                    method="POST" class="d-inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-sm btn-danger"
                                        onclick="return confirm('Delete this testimonial?')">Delete</button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

            <!-- Edit Testimonial Modal -->
            @foreach($testimonials as $testimonial)
            <div class="modal fade"
                id="editTestiModal{{ $testimonial->id }}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <form class="modal-content" method="POST"
                        action="{{ route('admin.testimonials.update', $testimonial->id) }}">
                        @csrf
                        @method('PUT')

                        <div class="modal-header">
                            <h5 class="modal-title">Edit Testimonial</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Title</label>
                                <input name="title" class="form-control" value="{{ old('title', $testimonial->title) }}"
                                    required>
                                @error('title')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Talent</label>
                                <select name="talent_id" class="form-select" required>
                                    <option value="">Select Talent</option>
                                    @foreach($talents as $talent)
                                    <option value="{{ $talent->id }}"
                                        {{ old('talent_id', $testimonial->talent_id) == $talent->id ? 'selected' : '' }}>
                                        {{ $talent->name }}
                                    </option>
                                    @endforeach
                                </select>
                                @error('talent_id')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Content</label>
                                <textarea name="content" class="form-control" required>{{ old('content', $testimonial->content) }}</textarea>
                                @error('content')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Rating</label>
                                <select name="rating" class="form-select" required>
                                    <option value="1" {{ old('rating', $testimonial->rating) == 1 ? 'selected' : '' }}>1</option>
                                    <option value="2" {{ old('rating', $testimonial->rating) == 2 ? 'selected' : '' }}>2</option>
                                    <option value="3" {{ old('rating', $testimonial->rating) == 3 ? 'selected' : '' }}>3</option>
                                    <option value="4" {{ old('rating', $testimonial->rating) == 4 ? 'selected' : '' }}>4</option>
                                    <option value="5" {{ old('rating', $testimonial->rating) == 5 ? 'selected' : '' }}>5</option>
                                </select>
                                @error('rating')
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

            <!-- Add Testimonial Modal -->
            <div class="modal fade"
                id="addTestimonialModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <form class="modal-content" method="POST" action="{{ route('admin.testimonials.store') }}">
                        @csrf

                        <div class="modal-header">
                            <h5 class="modal-title">Add Testimonial</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Title</label>
                                <input name="title" class="form-control" value="{{ old('title') }}"
                                    required>
                                @error('title')
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
                                <label class="form-label">Content</label>
                                <textarea name="content" class="form-control" required>your testimonial content here</textarea>
                                @error('content')
                                <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Rating</label>
                                <select name="rating" class="form-select" required>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                </select>
                                @error('rating')
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