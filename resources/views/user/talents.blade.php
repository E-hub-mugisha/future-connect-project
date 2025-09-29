@extends('layouts.user')
@section('title', 'My Talents Coonected')
@section('content')

<!-- Page Content -->
<div class="container-fluid">
    <div class="nk-content-inner">
        <div class="nk-content-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Talent Connected</h2>
                
            </div>
            <div class="card card-bordered card-preview">
                <div class="card-inner">
                    <table class="datatable-init nowrap table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Featured</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($talents as $conn)
                            <tr>
                                <td>{{ $conn->talent->id }}</td>
                                <td>{{ $conn->talent->name }}</td>
                                <td>{{ $conn->talent->email }}</td>
                                <td>{{ $conn->talent->category ? $conn->talent->category->name : 'N/A' }}
                                </td>
                                <td>
                                    @if ($conn->talent->status !== 'approved')
                                    <!-- Button to open modal -->
                                    <span class="text-info">
                                        Not Approved
                                    </span>


                                    @else
                                    <span class="text-success">Approved</span>
                                    @endif
                                </td>
                                <td>
                                    @if($conn->talent->featured)
                                    <span class="badge bg-primary">Yes</span>
                                    @else
                                    <span class="badge bg-secondary">No</span>
                                    @endif
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-outline-info btn-sm dropdown-toggle" type="button" id="actionsDropdown{{ $conn->talent->id }}" data-bs-toggle="dropdown" aria-expanded="false">
                                            Actions
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="actionsDropdown{{ $conn->talent->id }}">
                                            <li>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#quickViewModal{{ $conn->talent->id }}">Quick View</a>
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
            <!-- Quick View Modal -->
            <div class="modal fade" id="quickViewModal{{ $conn->talent->id }}" tabindex="-1"
                aria-labelledby="quickViewLabel{{ $talent->id }}" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title" id="quickViewLabel{{ $conn->talent->id }}">Talent Quick View
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>

                        <div class="modal-body">

                            <div class="row">
                                <div class="col-md-4">
                                    <img src="{{ asset('image/talents/' . $conn->talent->image) }}"
                                        alt="Talent Image" class="img-fluid rounded">


                                </div>

                                <div class="col-md-8">
                                    <h4>{{ $talent->name }}</h4>
                                    <p><strong>Address:</strong> {{ $conn->talent->address }}</p>
                                    <p><strong>Phone:</strong> {{ $conn->talent->phone }}</p>
                                    <p><strong>Email:</strong> {{ $conn->talent->email }}</p>
                                    <p><strong>Category:</strong>
                                        {{ $conn->talent->category->name ?? 'N/A' }}
                                    </p>
                                    <p><strong>Language:</strong> {{ $conn->talent->language }}</p>
                                    <p><strong>Description:</strong> {{ $conn->talent->description }}</p>
                                </div>
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button>
                            <!-- <a type="button" href="{{ route('admin.talents.view', $talent->id) }}" class="btn btn-primary">View Talent</a> -->
                        </div>

                    </div>
                </div>
            </div>
            @endforeach

        </div>
    </div>
</div>
@endsection