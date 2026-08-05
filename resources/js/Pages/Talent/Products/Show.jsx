import { Head, Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Show({ product }) {
    const imageUrl = product.image ? `/image/products/${product.image}` : 'https://via.placeholder.com/400';
    
    const getStatusBadge = (status) => {
        const map = {
            active: 'bg-success', approved: 'bg-success', pending: 'bg-warning text-dark',
            draft: 'bg-secondary', rejected: 'bg-danger',
        };
        return <span className={`badge ${map[status] || 'bg-secondary'} px-3 py-2 rounded-pill`}>{status}</span>;
    };

    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating - full >= 0.5;
        return (
            <span className="text-warning">
                {[...Array(full)].map((_, i) => <i key={`f${i}`} className="fas fa-star me-1"></i>)}
                {half && <i className="fas fa-star-half-alt me-1"></i>}
            </span>
        );
    };

    return (
        <AppLayout>
            <Head title={product.name} />

            <div className="container-fluid px-4 py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h4 className="fw-bold mb-1">Product Details</h4>
                        <p className="text-secondary mb-0 small">Full overview of {product.name}</p>
                    </div>
                    <Link href={route('talent.products.index')} className="btn btn-light">
                        <i className="fas fa-arrow-left me-2"></i> Back
                    </Link>
                </div>

                <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body p-4">
                        <div className="row g-4">
                            <div className="col-lg-5">
                                <div className="bg-light p-3 rounded-4 text-center" style={{minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <img src={imageUrl} alt={product.name} className="img-fluid rounded-4" style={{maxHeight: '380px', objectFit: 'cover'}} />
                                </div>
                            </div>
                            
                            <div className="col-lg-7">
                                <div className="mb-3">{getStatusBadge(product.status)}</div>
                                <h2 className="fw-bold mb-2">{product.name}</h2>
                                <h3 className="text-dark fw-bold mb-3">
                                    ${Number(product.price).toLocaleString()} 
                                    <small className="text-secondary fs-6 fw-normal"> / item</small>
                                </h3>

                                <div className="d-flex align-items-center mb-3">
                                    {renderStars(4.5)} {/* Static rating for display if no avg rating is present */}
                                    <span className="ms-2 text-secondary small">({product.reviews?.length || 0} reviews)</span>
                                </div>

                                <p className="text-secondary" style={{lineHeight: 1.7}}>{product.description}</p>

                                <div className="mt-4">
                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="text-secondary">Category</span>
                                        <span className="fw-semibold">{product.category?.name}</span>
                                    </div>
                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="text-secondary">Seller</span>
                                        <span className="fw-semibold">{product.seller?.company_name}</span>
                                    </div>
                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="text-secondary">Stock</span>
                                        <span className="fw-semibold">{product.stock} available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="my-5" />

                        <div className="row g-4">
                            <div className="col-lg-5">
                                <h5 className="fw-bold mb-4">Customer Reviews ({product.reviews?.length || 0})</h5>
                                
                                {product.reviews && product.reviews.length > 0 ? (
                                    product.reviews.map(review => (
                                        <div key={review.id} className="p-3 border rounded-4 mb-3 shadow-sm bg-white">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="me-3" style={{width: '45px', height: '45px', borderRadius: '50%', background: '#f4f9f7', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                    <i className="fas fa-user text-secondary"></i>
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold mb-0">{review.user?.name}</h6>
                                                    {renderStars(review.rating)}
                                                </div>
                                            </div>
                                            <p className="text-secondary mb-0 small">{review.comment}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-secondary">No reviews yet.</p>
                                )}
                            </div>

                            <div className="col-lg-7">
                                <h5 className="fw-bold mb-3">More About {product.name}</h5>
                                <p className="text-secondary" style={{lineHeight: 1.8}}>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}