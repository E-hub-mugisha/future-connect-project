import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

function CreateCategoryModal({ categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        parent_id: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('admin.job-categories.store'), {
            onSuccess: () => {
                reset();
                const modalEl = document.getElementById('createCategoryModal');
                window.bootstrap?.Modal.getInstance(modalEl)?.hide();
            },
        });
    }

    return (
        <div className="modal fade" id="createCategoryModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Category Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    required
                                />
                                {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Parent Category</label>
                                <select
                                    value={data.parent_id}
                                    onChange={e => setData('parent_id', e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">-- None --</option>
                                    {categories.map(parent => (
                                        <option key={parent.id} value={parent.id}>{parent.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary" disabled={processing}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function EditCategoryModal({ category, categories }) {
    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
        parent_id: category.parent_id ?? '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route('admin.job-categories.update', category.id), {
            onSuccess: () => {
                const modalEl = document.getElementById(`editCategoryModal${category.id}`);
                window.bootstrap?.Modal.getInstance(modalEl)?.hide();
            },
        });
    }

    return (
        <div className="modal fade" id={`editCategoryModal${category.id}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Category Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    required
                                />
                                {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Parent Category</label>
                                <select
                                    value={data.parent_id}
                                    onChange={e => setData('parent_id', e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">-- None --</option>
                                    {categories
                                        .filter(parent => parent.id !== category.id)
                                        .map(parent => (
                                            <option key={parent.id} value={parent.id}>{parent.name}</option>
                                        ))}
                                </select>
                                {errors.parent_id && <div className="invalid-feedback d-block">{errors.parent_id}</div>}
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary" disabled={processing}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function DeleteCategoryModal({ category }) {
    const { delete: destroy, processing } = useForm();

    function handleSubmit(e) {
        e.preventDefault();
        destroy(route('admin.job-categories.destroy', category.id));
    }

    return (
        <div className="modal fade" id={`deleteCategoryModal${category.id}`}>
            <div className="modal-dialog modal-sm">
                <div className="modal-content text-center">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header border-0">
                            <h5 className="modal-title w-100 text-danger">Delete Category</h5>
                        </div>

                        <div className="modal-body">
                            Are you sure you want to delete <strong>{category.name}</strong>?
                        </div>

                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-light btn-sm" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-danger btn-sm" disabled={processing}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default function Categories({ categories }) {
    return (
        <AppLayout>
            <Head title="Job Categories" />

            <div className="container-fluid">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold mb-0">Job Categories</h2>
                    <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#createCategoryModal">
                        <i className="bi bi-plus-circle"></i> Add Category
                    </button>
                </div>

                {/* Table Card */}
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <table className="table table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Parent</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {categories.map((category, index) => (
                                    <React.Fragment key={category.id}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{category.name}</td>
                                            <td>{category.slug}</td>
                                            <td>{category.parent?.name ?? '-'}</td>
                                            <td className="text-end">
                                                <button
                                                    className="btn btn-md btn-outline-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#editCategoryModal${category.id}`}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-md btn-outline-danger"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#deleteCategoryModal${category.id}`}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>

                                        <EditCategoryModal category={category} categories={categories} />
                                        <DeleteCategoryModal category={category} />
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <CreateCategoryModal categories={categories} />
        </AppLayout>
    );
}
