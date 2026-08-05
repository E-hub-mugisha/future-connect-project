import { Head, Link, router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import AppLayout from "@/Layouts/AppLayout";

export default function Index({ products, auth }) {
    const [viewing, setViewing] = useState(null);
    const [statusProduct, setStatusProduct] = useState(null);
    const [deleting, setDeleting] = useState(null);
    const [deleteProcessing, setDeleteProcessing] = useState(false);

    const statusForm = useForm({
        status: 'active',
    });

    const imageUrl = (img) => img ? `/image/products/${img}` : 'https://via.placeholder.com/50';

    const getStatusBadge = (status) => {
        const map = {
            active: ['bg-success', 'Active'],
            approved: ['bg-success', 'Approved'],
            pending: ['bg-warning text-dark', 'Pending'],
            draft: ['bg-secondary', 'Draft'],
            rejected: ['bg-danger', 'Rejected'],
        };
        const [cls, label] = map[status] || ['bg-secondary', 'Unknown'];
        return <span className={`badge ${cls} rounded-pill px-3 py-2`}>{label}</span>;
    };

    const closeAll = () => {
        setViewing(null);
        setStatusProduct(null);
        setDeleting(null);
    };

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") closeAll();
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const submitStatus = (e) => {
        e.preventDefault();
        statusForm.put(route('talent.products.updateStatus', statusProduct.id), {
            preserveScroll: true,
            onSuccess: () => setStatusProduct(null),
        });
    };

    const confirmDelete = () => {
        setDeleteProcessing(true);
        router.delete(route('talent.products.destroy', deleting.id), {
            preserveScroll: true,
            onSuccess: () => {
                setDeleting(null);
                setDeleteProcessing(false);
            },
        });
    };

    return (
        <AppLayout>
            <Head title="Products Management" />
            
            <div className="container-fluid px-4 py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h4 className="fw-bold mb-1">Products Management</h4>
                        <p className="text-secondary mb-0 small">Available product lists for {auth.user.name}</p>
                    </div>
                    <Link href={route('talent.products.create')} className="btn btn-dark d-flex align-items-center gap-2">
                        <i className="fas fa-plus"></i> Add Product
                    </Link>
                </div>

                <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body p-4">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead>
                                    <tr className="text-secondary small text-uppercase">
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Status</th>
                                        <th>Created</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((p, i) => (
                                        <tr key={p.id} style={{ verticalAlign: 'middle' }}>
                                            <td className="text-secondary">{i + 1}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <img src={imageUrl(p.image)} alt={p.name} width="48" height="48" className="rounded-3 object-fit-cover" />
                                                    <div>
                                                        <div className="fw-semibold">{p.name}</div>
                                                        <div className="text-secondary small">{p.category?.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="fw-semibold">${Number(p.price).toLocaleString()}</td>
                                            <td>{p.stock}</td>
                                            <td>{getStatusBadge(p.status)}</td>
                                            <td className="text-secondary small">{new Date(p.created_at).toLocaleDateString()}</td>
                                            <td className="text-end">
                                                <div className="d-flex justify-content-end gap-1">
                                                    <button onClick={() => setViewing(p)} className="btn btn-light btn-sm" title="Quick View">
                                                        <i className="fas fa-eye"></i>
                                                    </button>
                                                    <Link href={route('talent.products.edit', p.id)} className="btn btn-light btn-sm" title="Edit">
                                                        <i className="fas fa-pen"></i>
                                                    </Link>
                                                    <button onClick={() => { setStatusProduct(p); statusForm.setData('status', p.status); }} className="btn btn-light btn-sm" title="Update Status">
                                                        <i className="fas fa-sync-alt"></i>
                                                    </button>
                                                    <button onClick={() => setDeleting(p)} className="btn btn-light btn-sm text-danger" title="Delete">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* View Modal */}
            {viewing && (
                <Modal onClose={() => setViewing(null)} title="Product Details" size="lg">
                    <div className="row g-4">
                        <div className="col-md-5">
                            <img src={imageUrl(viewing.image)} className="img-fluid rounded-4 w-100" style={{maxHeight: '300px', objectFit: 'cover'}} alt={viewing.name} />
                        </div>
                        <div className="col-md-7">
                            <div className="mb-2">{getStatusBadge(viewing.status)}</div>
                            <h5 className="fw-bold mb-2">{viewing.name}</h5>
                            <p className="text-secondary small mb-3">{viewing.description}</p>
                            <div className="d-flex justify-content-between border-top pt-2 mb-2">
                                <span className="text-secondary">Price</span>
                                <span className="fw-bold">${Number(viewing.price).toLocaleString()}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-secondary">Seller</span>
                                <span className="fw-semibold">{viewing.seller?.company_name}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="text-secondary">Category</span>
                                <span className="fw-semibold">{viewing.category?.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end gap-2 pt-4 border-top mt-4">
                        <button onClick={() => setViewing(null)} className="btn btn-light">Close</button>
                        <Link href={route('talent.products.show', viewing.id)} className="btn btn-dark">Full View</Link>
                    </div>
                </Modal>
            )}

            {/* Status Modal */}
            {statusProduct && (
                <Modal onClose={() => setStatusProduct(null)} title="Update Product Status">
                    <p className="text-secondary small mb-4">Change the current status for <strong>{statusProduct.name}</strong></p>
                    <form onSubmit={submitStatus}>
                        <div className="mb-4">
                            <label className="form-label fw-semibold">Select Status</label>
                            <select 
                                className="form-select" 
                                value={statusForm.data.status}
                                onChange={(e) => statusForm.setData('status', e.target.value)}
                            >
                                <option value="active">Active</option>
                                <option value="draft">Draft</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-end gap-2 border-top pt-3">
                            <button type="button" onClick={() => setStatusProduct(null)} className="btn btn-light">Cancel</button>
                            <button type="submit" className="btn btn-success" disabled={statusForm.processing}>
                                {statusForm.processing ? 'Saving...' : 'Update Status'}
                            </button>
                        </div>
                    </form>
                </Modal>
            )}

            {/* Delete Modal */}
            {deleting && (
                <Modal onClose={() => setDeleting(null)} title="Confirm Deletion" size="sm">
                    <div className="text-center py-3">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{width: '64px', height: '64px', background: 'rgba(220, 53, 69, 0.1)'}}>
                            <i className="fas fa-trash text-danger" style={{fontSize: '24px'}}></i>
                        </div>
                        <p className="fw-semibold mb-1">Are you sure?</p>
                        <p className="text-secondary small mb-0">This will permanently delete <strong>{deleting.name}</strong>. This action cannot be undone.</p>
                    </div>
                    <div className="d-flex justify-content-center gap-2 pt-3 border-top">
                        <button type="button" onClick={() => setDeleting(null)} className="btn btn-light">Cancel</button>
                        <button type="button" onClick={confirmDelete} className="btn btn-danger" disabled={deleteProcessing}>
                            {deleteProcessing ? 'Deleting...' : 'Delete'}
                        </button>
                    </div>
                </Modal>
            )}
        </AppLayout>
    );
}

function Modal({ children, onClose, title, size = "" }) {
    const sizeClass = size === "lg" ? "modal-lg" : size === "sm" ? "modal-sm" : "";
    return (
        <div className="modal show d-block" tabIndex="-1" style={{ background: "rgba(6,15,17,0.55)" }} onClick={onClose}>
            <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${sizeClass}`} onClick={(e) => e.stopPropagation()}>
                <div className="modal-content border-0 shadow" style={{ borderRadius: 16 }}>
                    <div className="modal-header border-0 pb-0">
                        <h5 className="modal-title fw-bold">{title}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body pt-2">{children}</div>
                </div>
            </div>
        </div>
    );
}