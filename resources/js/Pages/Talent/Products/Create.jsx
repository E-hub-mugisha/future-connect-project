import { Head, Link, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Create({ categories, sellerId }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        price: "",
        stock: "",
        product_category_id: "",
        description: "",
        image: null,
        status: "active",
        seller_id: sellerId,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("talent.products.store"), {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout>
            <Head title="Create Product" />

            <div className="container-fluid px-4 py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h4 className="fw-bold mb-1">Create New Product</h4>
                        <p className="text-secondary mb-0 small">Fill in the details below to create and publish a product.</p>
                    </div>
                    <Link href={route('talent.products.index')} className="btn btn-light">
                        <i className="fas fa-arrow-left me-2"></i> Back
                    </Link>
                </div>

                <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body p-4">
                        <form onSubmit={onSubmit}>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Product Name</label>
                                    <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Category</label>
                                    <select className={`form-select ${errors.product_category_id ? 'is-invalid' : ''}`} value={data.product_category_id} onChange={(e) => setData('product_category_id', e.target.value)}>
                                        <option value="">Select Category</option>
                                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                    </select>
                                    {errors.product_category_id && <div className="invalid-feedback">{errors.product_category_id}</div>}
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label fw-semibold">Price ($)</label>
                                    <input type="number" step="0.01" className={`form-control ${errors.price ? 'is-invalid' : ''}`} value={data.price} onChange={(e) => setData('price', e.target.value)} />
                                    {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label fw-semibold">Stock Quantity</label>
                                    <input type="number" className={`form-control ${errors.stock ? 'is-invalid' : ''}`} value={data.stock} onChange={(e) => setData('stock', e.target.value)} />
                                    {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label fw-semibold">Status</label>
                                    <select className="form-select" value={data.status} onChange={(e) => setData('status', e.target.value)}>
                                        <option value="active">Active</option>
                                        <option value="draft">Draft</option>
                                    </select>
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold">Description</label>
                                    <textarea rows="4" className={`form-control ${errors.description ? 'is-invalid' : ''}`} placeholder="Write a clear, detailed description..." value={data.description} onChange={(e) => setData('description', e.target.value)}></textarea>
                                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold">Product Image</label>
                                    <input type="file" className={`form-control ${errors.image ? 'is-invalid' : ''}`} accept="image/*" onChange={(e) => setData('image', e.target.files[0])} />
                                    {errors.image && <div className="invalid-feedback">{errors.image}</div>}
                                </div>
                            </div>

                            <div className="mt-4 d-flex justify-content-end">
                                <button type="submit" className="btn btn-dark btn-lg px-4" disabled={processing}>
                                    {processing ? (
                                        <><span className="spinner-border spinner-border-sm me-2"></span> Saving...</>
                                    ) : (
                                        <><i className="fas fa-save me-2"></i> Save Product</>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}