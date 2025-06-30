import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const TalentSkillDetail = () => {
    const { id } = useParams();
    const [skill, setSkill] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({
        name: '',
        email: '',
        rating: 5,
        message: '',
    });

    const fetchSkill = useCallback(async () => {
        try {
            const res = await api.get(`/talent/skills/${id}`);
            setSkill(res.data);
            setReviews(res.data.reviews || []);
        } catch (error) {
            console.error("Error fetching skill data:", error);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchSkill();
    }, [fetchSkill]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post(`/skills/${id}/reviews`, form);
            alert('Review submitted!');
            setForm({ name: '', email: '', rating: 5, message: '' });
            fetchSkill(); // Refresh after review submission
        } catch (error) {
            alert('Failed to submit review.');
            console.error(error);
        }
    };

    if (loading) return <p className="text-center mt-4">Loading...</p>;
    if (!skill) return <p className="text-center mt-4">Skill not found</p>;

    return (
        <div>
            <div class="breadcrumb-bar breadcrumb-bar-info breadcrumb-info">
                <div class="breadcrumb-img">
                    <div class="breadcrumb-left">
                        <img src="assets/img/bg/banner-bg-03.png" alt="img" />
                    </div>
                </div>
                <div class="container">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="talents.html">Skill</a>
                            </li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">
                        {skill.name}
                    </h2>
                </div>
            </div>

            <div class="page-content content">
                <div class="container">
                    <div class="row">


                        <div class="col-lg-8">

                            <div class="breadcrumb-bar breadcrumb-bar-info breadcrumb-info text-start pt-0 bg-white">
                                <a href="#" class="badge bg-light mb-4 text-dark">
                                    {skill.category ? skill.category.name : "Uncategorized"}
                                </a>
                                <br />
                                <h2 class="breadcrumb-title">
                                    {skill.name}
                                </h2>
                                <ul class="info-links">
                                    <li>
                                        <i class="ti ti-star-filled text-warning"></i>5.0 (45 Supporters)
                                    </li>
                                    <li>
                                        <i class="ti ti-user"></i>{skill.talent ? skill.talent.name : "Author"}
                                    </li>
                                    <li>
                                        <i class="ti ti-calendar-due"></i>Skill Created: {skill.created_at}
                                    </li>
                                    <li class="border-0">
                                        <div class="tranlator d-flex align-items-center">
                                            <i class="ti ti-heart"></i>
                                            {skill.level}
                                        </div>
                                    </li>
                                </ul>
                            </div>


                            <div class="slider-card service-slider-card">
                                <div class="slider service-slider">
                                    <div class="service-img-wrap">
                                        <img src="assets/img/service/service-slide-01.jpg" class="img-fluid"
                                            alt="Slider Img" />
                                    </div>

                                </div>

                            </div>


                            <div class="row gx-3 row-gap-3 mb-4 statistics">
                                <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                                    <div class="buy-box">
                                        <i class="ti ti-photo-star text-secondary"></i>
                                        <p>Total Stories</p>
                                        <h6>18</h6>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                                    <div class="buy-box">
                                        <i class="ti ti-heart text-purple"></i>
                                        <p>Total Likes</p>
                                        <h6>320</h6>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                                    <div class="buy-box">
                                        <i class="ti ti-message-chatbot text-indigo"></i>
                                        <p>Feedbacks</p>
                                        <h6>25</h6>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-sm-4 col-6">
                                    <div class="buy-box">
                                        <i class="ti ti-eye text-teal"></i>
                                        <p>Profile Views</p>
                                        <h6>1,100</h6>
                                    </div>
                                </div>
                            </div>



                            <div class="listing-tab">
                                <div class="listing-slider">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a href="#" class="nav-link active" data-bs-toggle="tab"
                                                data-bs-target="#about_me" aria-selected="false" role="tab" tabindex="-1">
                                                Description
                                            </a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a href="#" class="nav-link" data-bs-toggle="tab"
                                                data-bs-target="#work_me" aria-selected="false" role="tab" tabindex="-1">
                                                Why Work With me
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link" data-bs-toggle="tab"
                                                data-bs-target="#faq" aria-selected="false" role="tab" tabindex="-1">
                                                FAQ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link" data-bs-toggle="tab"
                                                data-bs-target="#recent_works" aria-selected="false" role="tab"
                                                tabindex="-1">
                                                Recent Works
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link" data-bs-toggle="tab"
                                                data-bs-target="#review" aria-selected="false" role="tab" tabindex="-1">
                                                Reviews
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="tab-content">

                                <div class="tab-pane fade show active" id="about_me" role="tabpanel">

                                    <div class="service-wrap">
                                        <h3>Skill Description</h3>
                                        <p>{skill.description}</p>
                                    </div>

                                </div>
                                <div class="tab-pane fade " id="work_me" role="tabpanel">

                                    <div class="service-wrap service-wrap">
                                        <h3>Why Work With Me</h3>
                                        <p> I have five years+ of experience in affiliate marketing, and I am running my own
                                            affiliate marketing business, so I have an understanding of how these things
                                            really work with google SEO. </p>
                                        <ul class="service-lists">
                                            <li>
                                                <p> Flexibility and Customization </p>
                                            </li>
                                            <li>
                                                <p> Expertise and Specialization </p>
                                            </li>
                                            <li>
                                                <p> Direct Communication </p>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="tab-pane fade " id="faq" role="tabpanel">

                                    <div class="service-wrap service-faq">
                                        <h3>FAQ</h3>
                                        <div class="faq-lists">
                                            <div class="faq-card">
                                                <h4 class="faq-title">
                                                    <a class="collapsed" data-bs-toggle="collapse" href="#faqone"
                                                        aria-expanded="false">Do you offer assistance after the order has
                                                        been completed?</a>
                                                </h4>
                                                <div id="faqone" class="card-collapse collapse">
                                                    <div class="faq-content">
                                                        <p>Yes! My service guarantees you 24/7 lifetime support for anything
                                                            related to your website. Whenever you encounter a problem, feel
                                                            free to reach out to me anytime.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="faq-card">
                                                <h4 class="faq-title">
                                                    <a class="collapsed" data-bs-toggle="collapse" href="#faqtwo"
                                                        aria-expanded="false">Can I choose my favorite Product category or
                                                        Niche?</a>
                                                </h4>
                                                <div id="faqtwo" class="card-collapse collapse">
                                                    <div class="faq-content">
                                                        <p>Yes! My service guarantees you 24/7 lifetime support for anything
                                                            related to your website. Whenever you encounter a problem, feel
                                                            free to reach out to me anytime.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="faq-card">
                                                <h4 class="faq-title">
                                                    <a class="collapsed" data-bs-toggle="collapse" href="#faqOne"
                                                        aria-expanded="false">Can I add products myself?</a>
                                                </h4>
                                                <div id="faqOne" class="card-collapse collapse">
                                                    <div class="faq-content">
                                                        <p>Yes! My service guarantees you 24/7 lifetime support for anything
                                                            related to your website. Whenever you encounter a problem, feel
                                                            free to reach out to me anytime.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="faq-card border-0 faq-end-card">
                                                <h4 class="faq-title">
                                                    <a class="collapsed" data-bs-toggle="collapse" href="#faqfour"
                                                        aria-expanded="false">Are there any additional or hidden
                                                        charges?</a>
                                                </h4>
                                                <div id="faqfour" class="card-collapse collapse">
                                                    <div class="faq-content">
                                                        <p>Yes! My service guarantees you 24/7 lifetime support for anything
                                                            related to your website. Whenever you encounter a problem, feel
                                                            free to reach out to me anytime.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="tab-pane fade " id="recent_works" role="tabpanel">

                                    <div class="service-wrap">
                                        <div class="row align-items-center">
                                            <div class="col-sm-8">
                                                <h3>Recent Works</h3>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="owl-nav mynav1 nav-control"></div>
                                            </div>
                                        </div>
                                        <div class="owl-carousel recent-carousel">
                                            <div class="recent-img">
                                                <img src="assets/img/service/service-slide-01.jpg" class="img-fluid"
                                                    alt="Slider Img" />
                                            </div>
                                            <div class="recent-img">
                                                <img src="assets/img/service/service-slide-02.jpg" class="img-fluid"
                                                    alt="Slider Img" />
                                            </div>
                                            <div class="recent-img">
                                                <img src="assets/img/service/service-slide-03.jpg" class="img-fluid"
                                                    alt="Slider Img" />
                                            </div>
                                            <div class="recent-img">
                                                <img src="assets/img/service/service-slide-04.jpg" class="img-fluid"
                                                    alt="Slider Img" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="tab-pane fade " id="review" role="tabpanel">

                                    <div class="review-widget">
                                        <div class="review-title sort-search-gigs">
                                            <div class="row align-items-center">
                                                <div class="col-sm-6">
                                                    <h3>Reviews (45)</h3>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="filters-wrap sort-categories justify-content-end">
                                                        <div class="collapse-card float-lg-end">
                                                            <div class="filter-header">
                                                                <a href="#" class="sorts-list">
                                                                    Most Recent
                                                                </a>
                                                            </div>
                                                            <div id="categories" class="collapse-body"
                                                                style={{ display: 'none' }}>
                                                                <div class="form-group search-group">
                                                                    <span class="search-icon"><i
                                                                        class="feather-search"></i></span>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Search Category" />
                                                                </div>
                                                                <ul class="checkbox-list categories-lists">
                                                                    <li class="active">
                                                                        <label class="custom_check">
                                                                            <span class="checked-title"> Recent</span>
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <label class="custom_check">
                                                                            <span class="checked-title">Oldest </span>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="total-rating align-items-center">
                                            <div class="total-review">

                                                <div class="progress-lvl mb-2">
                                                    <h6>5 Star Ratings</h6>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning five-star" role="progressbar"
                                                            aria-label="Success example" style={{ width: '25%' }}
                                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p>247</p>
                                                </div>


                                                <div class="progress-lvl mb-2">
                                                    <h6>4 Star Ratings</h6>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning" role="progressbar"
                                                            aria-label="Success example" style={{ width: '25%' }}
                                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p>145</p>
                                                </div>


                                                <div class="progress-lvl mb-2">
                                                    <h6>3 Star Ratings</h6>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning" role="progressbar"
                                                            aria-label="Success example" style={{ width: '25%' }}
                                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p>600</p>
                                                </div>


                                                <div class="progress-lvl mb-2">
                                                    <h6>2 Star Ratings</h6>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning" role="progressbar"
                                                            aria-label="Success example" style={{ width: '25%' }}
                                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p>560</p>
                                                </div>


                                                <div class="progress-lvl">
                                                    <h6>1 Star Ratings</h6>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning" role="progressbar"
                                                            aria-label="Success example" style={{ width: '25%' }}
                                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p>400</p>
                                                </div>
                                            </div>
                                            <div class="total-reviews text-center bg-white">
                                                <h6> Customer Reviews & Ratings </h6>
                                                <h2> 4.9 / 5.0 </h2>
                                                <div
                                                    class="icons d-flex align-items-center justify-content-center gap-1 mb-2">
                                                    <i class="ti ti-star-filled text-warning"></i>
                                                    <i class="ti ti-star-filled text-warning"></i>
                                                    <i class="ti ti-star-filled text-warning"></i>
                                                    <i class="ti ti-star-filled text-warning"></i>
                                                    <i class="ti ti-star-filled text-warning"></i>
                                                </div>
                                                <p class="text-center">Based On 2,459 Reviews</p>
                                            </div>
                                        </div>


                                        <ul className="review-lists home-reviews">
                                            {reviews.map((review, index) => (
                                                <li key={index}>
                                                    <div className="review-wrap">
                                                        <div className="review-user-info">
                                                            <div className="review-img">
                                                                <img src="/assets/img/user/profile.jpg" alt="img" />
                                                            </div>
                                                            <div className="reviewer-info">
                                                                <div className="reviewer-loc">
                                                                    <h6>{review.name}</h6>
                                                                </div>
                                                                <div className="reviewer-rating">
                                                                    <div className="star-rate">
                                                                        <span className="ratings">
                                                                            {[...Array(review.rating)].map((_, i) => (
                                                                                <i key={i} className="fa-solid fa-star filled"></i>
                                                                            ))}
                                                                        </span>
                                                                        <span className="rating-count">{review.rating}.0</span>
                                                                    </div>
                                                                </div>
                                                                <div className="reviewer-time">
                                                                    <p>{dayjs(review.created_at).fromNow()}</p>
                                                                    <p> {review.message.split(" ").slice(0, 5).join(" ")}... </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="review-content">
                                                            <p>{review.message}</p>
                                                            <a href="#" className="reply-btn bg-light">
                                                                <i className="feather-corner-up-left"></i>Reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                        <div class="text-center dark-btn">
                                            <a href="faq.html" class="btn btn-dark text-center fs-13"> Load More </a>
                                        </div>
                                    </div>


                                    <div className="login-card">
                                        <div className="login-heading text-start mb-4">
                                            <h5>Leave a Review</h5>
                                        </div>

                                        {/* Star Rating */}
                                        <div className="form-wrap form-focus mb-3">
                                            <label className="mb-1 fw-medium text-dark">Your Rating <span className="text-primary">*</span></label>
                                            <div className="icon d-flex gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <i
                                                        key={star}
                                                        className={`ti ti-star-filled ${form.rating >= star ? 'text-warning' : 'text-light'}`}
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => setForm({ ...form, rating: star })}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-wrap form-focus">
                                                        <label className="mb-1 fw-medium text-dark">Name <span className="text-primary">*</span></label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={form.name}
                                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-wrap form-focus">
                                                        <label className="mb-1 fw-medium text-dark">Email <span className="text-primary">*</span></label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            value={form.email}
                                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-wrap form-focus">
                                                        <label className="mb-1 fw-medium text-dark">Write a Review <span className="text-primary">*</span></label>
                                                        <textarea
                                                            className="form-control text-area"
                                                            value={form.message}
                                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary member-btn mt-3">Submit a Review</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div class="col-lg-4 theiaStickySidebar">

                            <div class="service-widget">
                                <div class="service-amt p-3 price-lvl bg-dark">
                                    <h3 class="">
                                        <span class="d-block">Support Amount</span>
                                        $25
                                    </h3>
                                </div>

                                <div class="input-block form-wrap form-focus">
                                    <label class="mb-1 fw-medium text-dark">Choose Amount <span
                                        class="text-primary">*</span></label>
                                    <select class="select select2-hidden-accessible" data-select2-id="1" tabindex="-1"
                                        aria-hidden="true">
                                        <option data-select2-id="3" class="text-dark">$5</option>
                                        <option>$10</option>
                                        <option>$25</option>
                                        <option>$50</option>
                                        <option>$100</option>
                                    </select>
                                </div>

                                <div class="service-widget service-select-widget">
                                    <h5 class="mb-3">Support Options</h5>
                                    <div class="service-select d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <label class="custom_radio">
                                                <input type="radio" name="support_option" checked="" />
                                                <span class="checkmark"></span>
                                                <span class="m-0 service-head-text">One-Time Support</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="service-select d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <label class="custom_radio">
                                                <input type="radio" name="support_option" />
                                                <span class="checkmark"></span>
                                                <span class="m-0 service-head-text">Monthly Patron</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" data-bs-toggle="modal" data-bs-target="#support_talent"
                                    class="btn btn-primary w-100 mb-0">
                                    <i class="feather-heart"></i> Support This Talent
                                </a>
                            </div>

                            <div class="service-widget member-widget">
                                <div class="user-details">
                                    <div class="user-img users-img">
                                        <img src="assets/img/user/profile.jpg" alt="img" />
                                    </div>
                                    <div class="user-info">
                                        <h5><span class="me-2">{skill.talent ? skill.talent.name : "Author"}</span> <span class="badge badge-success"><i
                                            class="fa-solid fa-circle"></i> Online</span></h5>
                                        <p><i class="fa-solid fa-star"></i> 5.0 (45 Reviews)</p>
                                    </div>
                                </div>

                                <div class="about-me new-about">
                                    <h6>About {skill.talent ? skill.talent.name : "Author"}</h6>
                                    <p>{skill.talent ? skill.talent.description : "description"}</p>
                                    <a href="" class="read-more">Read More</a>
                                </div>

                                <div class="member-info member-info-new">
                                    <div class="member-list d-flex align-items-center gap mb-3">
                                        <i class="ti ti-music"></i>
                                        <h6 class="mb-0">
                                            Skill Level
                                            <span class="pt-2"> {skill.level}</span>
                                        </h6>
                                    </div>
                                    <div class="member-list d-flex align-items-center gap mb-3">
                                        <i class="ti ti-world"></i>
                                        <h6 class="mb-0">
                                            Category
                                            <span class="pt-2">{skill.category ? skill.category.name : "Uncategorized"}</span>
                                        </h6>
                                    </div>
                                    <div class="member-list d-flex align-items-center gap mb-3">
                                        <i class="ti ti-calendar-event"></i>
                                        <h6 class="mb-0">
                                            Created
                                            <span class="pt-2">{dayjs(skill.created_at).format('MMMM D, YYYY')}</span>

                                        </h6>
                                    </div>
                                    <div class="member-list d-flex align-items-center gap">
                                        <i class="ti ti-language"></i>
                                        <h6 class="mb-0">
                                            Tags
                                            <span class="pt-2"> {skill.tags}</span>
                                        </h6>
                                    </div>
                                </div>

                                <a href="#" data-bs-toggle="modal" data-bs-target="#contact_talent"
                                    class="btn btn-outline-primary mb-0 w-100">Contact Talent</a>
                            </div>

                            <div class="service-widget">
                                <h5 class="">Share This Skill</h5>
                                <div class="social-links d-flex align-items-center breadcrumb-social pt-2">
                                    <ul>
                                        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-google"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>



                    </div>


                    <div class="recent-works">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="title-sec">
                                    <div class="row align-items-center">
                                        <div class="col-md-8">
                                            <h3>Recent Works</h3>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="owl-nav worknav nav-control nav-top"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="gigs-slider owl-carousel">
                                    <div class="gigs-grid">
                                        <div class="gigs-img">
                                            <div class="img-slider">
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-13.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-06.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-07.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                            </div>
                                            <div class="card-overlay-badge">
                                                <a href="service.html"><span class="badge bg-danger"><i
                                                    class="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div class="fav-selection">
                                                <a href="#" class="video-icon"><i
                                                    class="feather-video"></i></a>
                                                <a href="#" class="fav-icon"><i
                                                    class="feather-heart"></i></a>
                                            </div>
                                            <div class="user-thumb">
                                                <a href="talent-profile.html"><img src="assets/img/user/user-10.jpg"
                                                    alt="img" /></a>
                                            </div>
                                        </div>
                                        <div class="gigs-content">
                                            <div class="gigs-info">
                                                <a href="service.html"><span class="badge bg-primary-light">Video
                                                    Marketing</span></a>
                                                <p><i class="ti ti-map-pin-check"></i>Chicago</p>
                                            </div>
                                            <div class="gigs-title">
                                                <h3><a href="service-details.html">I will do creating and promoting video
                                                    content to engage audiences</a></h3>
                                            </div>
                                            <div class="star-rate">
                                                <span><i class="fa-solid fa-star"></i>4.2 (65 Reviews)</span>
                                            </div>
                                            <div class="gigs-card-footer">
                                                <div>
                                                    <a href="#" class="share-icon"><i
                                                        class="feather-share-2"></i></a>
                                                    <span class="badge">Delivery in 1 day</span>
                                                </div>
                                                <h5>$600</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gigs-grid">
                                        <div class="gigs-img">
                                            <div class="img-slider">
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-14.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-08.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-09.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                            </div>
                                            <div class="fav-selection">
                                                <a href="#" class="fav-icon"><i
                                                    class="feather-heart"></i></a>
                                            </div>
                                            <div class="user-thumb">
                                                <a href="talent-profile.html"><img src="assets/img/user/user-06.jpg"
                                                    alt="img" /></a>
                                            </div>
                                        </div>
                                        <div class="gigs-content">
                                            <div class="gigs-info">
                                                <a href="service.html"><span class="badge bg-primary-light">Local
                                                    SEO</span></a>
                                                <p><i class="ti ti-map-pin-check"></i>Moscow</p>
                                            </div>
                                            <div class="gigs-title">
                                                <h3><a href="service-details.html">Optimizing online presence to enhance
                                                    visibility in local search...</a></h3>
                                            </div>
                                            <div class="star-rate">
                                                <span><i class="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
                                            </div>
                                            <div class="gigs-card-footer">
                                                <div>
                                                    <a href="#" class="share-icon"><i
                                                        class="feather-share-2"></i></a>
                                                    <span class="badge">Delivery in 2 day</span>
                                                </div>
                                                <h5>$550</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gigs-grid">
                                        <div class="gigs-img">
                                            <div class="img-slider">
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-15.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-10.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-11.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                            </div>
                                            <div class="fav-selection">
                                                <a href="#" class="fav-icon"><i
                                                    class="feather-heart"></i></a>
                                            </div>
                                            <div class="user-thumb">
                                                <a href="talent-profile.html"><img src="assets/img/user/user-03.jpg"
                                                    alt="img" /></a>
                                            </div>
                                        </div>
                                        <div class="gigs-content">
                                            <div class="gigs-info">
                                                <a href="service.html"><span class="badge bg-primary-light">Mobile
                                                    Marketing</span></a>
                                                <p><i class="ti ti-map-pin-check"></i>Norwich</p>
                                            </div>
                                            <div class="gigs-title">
                                                <h3><a href="service-details.html">Optimizing marketing strategies for
                                                    mobiles & app based promotions</a></h3>
                                            </div>
                                            <div class="star-rate">
                                                <span><i class="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
                                            </div>
                                            <div class="gigs-card-footer">
                                                <div>
                                                    <a href="#" class="share-icon"><i
                                                        class="feather-share-2"></i></a>
                                                    <span class="badge">Delivery in 1 day</span>
                                                </div>
                                                <h5>$720</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gigs-grid">
                                        <div class="gigs-img">
                                            <div class="img-slider">
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-04.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-01.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                                <div class="slide-images">
                                                    <a href="service-details.html"><img src="assets/img/gigs/gigs-02.jpg"
                                                        class="img-fluid" alt="img" /></a>
                                                </div>
                                            </div>
                                            <div class="card-overlay-badge">
                                                <span class="badge bg-danger"><i class="fa-solid fa-meteor"></i>Hot</span>
                                            </div>
                                            <div class="fav-selection">
                                                <a href="#" class="fav-icon"><i
                                                    class="feather-heart"></i></a>
                                            </div>
                                            <div class="user-thumb">
                                                <a href="talent-profile.html"><img src="assets/img/user/user-04.jpg"
                                                    alt="img" /></a>
                                            </div>
                                        </div>
                                        <div class="gigs-content">
                                            <div class="gigs-info">
                                                <a href="service.html"><span class="badge bg-primary-light">Digital
                                                    Marketing</span></a>
                                                <p><i class="ti ti-map-pin-check"></i>Indonesia</p>
                                            </div>
                                            <div class="gigs-title">
                                                <h3><a href="service-details.html">Embedded Android & AOSP
                                                    customizations</a></h3>
                                            </div>
                                            <div class="star-rate">
                                                <span><i class="fa-solid fa-star"></i>4.5 (40 Reviews)</span>
                                            </div>
                                            <div class="gigs-card-footer">
                                                <div>
                                                    <a href="#" class="share-icon"><i
                                                        class="feather-share-2"></i></a>
                                                    <span class="badge">Delivery in 2 day</span>
                                                </div>
                                                <h5>$900</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalentSkillDetail;
