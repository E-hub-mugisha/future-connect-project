import React, { useState, useRef, useEffect, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../api"; // Adjust the import path as necessary
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useParams } from "react-router-dom"; // Assuming you're using react-router-dom for routing

dayjs.extend(relativeTime);

const images = [
    "/assets/img/service/service-slide-01.jpg",
    "/assets/img/service/service-slide-02.jpg",
    "/assets/img/service/service-slide-03.jpg",
    "/assets/img/service/service-slide-04.jpg",
    "/assets/img/service/service-slide-05.jpg",
];

const FrontStoryDetail = () => {
    const { slug, id } = useParams(); // Assuming you're using react-router-dom for routing
    const [story, setStory] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        comment: "",
        story_id: "", // Assuming you need to set the story ID here
    });

    const fetchStory = useCallback(async () => {
        try {
            const response = await api.get(`/story-details/${slug}`); // Replace with the actual story ID
            setStory(response.data);
            setComments(response.data.comments || []); // Assuming comments are part of the story data
            setLoading(false);
        } catch (error) {
            console.error("Error fetching story:", error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
        fetchStory();
    }, [fetchStory]);



    const mainSettings = {
        asNavFor: nav2,
        ref: slider1,
        arrows: true,
        fade: true,
    };

    const thumbSettings = {
        asNavFor: nav1,
        ref: slider2,
        slidesToShow: 5,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await api.post(`/stories/comments`, form);
            alert("Comment submitted successfully!");
            setForm({ name: "", email: "", comment: "", story_id: id }); // Reset form after submission
            fetchStory();
        } catch (error) {
            alert("Error submitting comment. Please try again.");
            console.error("Error submitting comment:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!story) {
        return <div>Story not found</div>;
    }

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
                                <a href="talents.html">Story</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Profile</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">
                        {story.title}
                    </h2>
                </div>
            </div>

            <div class="page-content content">
                <div class="container">
                    <div class="row">


                        <div class="col-lg-8">

                            <div class="breadcrumb-bar breadcrumb-bar-info breadcrumb-info text-start pt-0 bg-white">
                                <a role="button" tabIndex="0" class="badge bg-light mb-4 text-dark">
                                    {story.category ? story.category.name : "Uncategorized"}
                                </a>
                                <h2 class="breadcrumb-title">
                                    {story.title}
                                </h2>
                                <ul class="info-links">
                                    <li>
                                        <i class="ti ti-star-filled text-warning"></i>5.0 (45 Supporters)
                                    </li>
                                    <li>
                                        <i class="ti ti-user"></i>{story.talent ? story.talent.name : "Unknown Talent"}
                                    </li>
                                    <li>
                                        <i class="ti ti-calendar-due"></i>Posted: {new Date(story.created_at).toLocaleDateString()}
                                    </li>
                                    <li class="border-0">
                                        <div class="tranlator d-flex align-items-center">
                                            <i class="ti ti-heart"></i>
                                            Status: {story.status}
                                        </div>
                                    </li>
                                </ul>
                            </div>




                            <div class="slider-card service-slider-card">
                                <Slider {...mainSettings} className="service-slider">
                                    {images.map((img, index) => (
                                        <div key={index} className="service-img-wrap">
                                            <img src={img} className="img-fluid" alt={`slide-${index}`} />
                                        </div>
                                    ))}
                                </Slider>

                                <Slider {...thumbSettings} className="slider slider-nav-thumbnails mt-3">
                                    {images.map((img, index) => (
                                        <div key={index}>
                                            <img src={img} className="img-fluid" alt={`thumb-${index}`} />
                                        </div>
                                    ))}
                                </Slider>

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
                                            <a role="tab" tabIndex="0" class="nav-link active" data-bs-toggle="tab"
                                                data-bs-target="#about_me" aria-selected="false">
                                                Description
                                            </a>
                                        </li>
                                        <li>
                                            <a role="tab" tabIndex="0" class="nav-link" data-bs-toggle="tab"
                                                data-bs-target="#review" aria-selected="false">
                                                Reviews
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="tab-content">

                                <div class="tab-pane fade show active" id="about_me" role="tabpanel">

                                    <div class="service-wrap">
                                        <h3>{story.title}</h3>
                                        <p>
                                            {story.description}
                                        </p>
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
                                                                <a role="button" tabIndex="0" class="sorts-list">
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


                                        <ul class="review-lists home-reviews">
                                            {comments.map((comment, index) => (
                                                <li key={index}>
                                                    <div class="review-wrap">
                                                        <div class="review-user-info">
                                                            <div class="review-img">
                                                                <img src="assets/img/user/profile.jpg" alt="img" />
                                                            </div>
                                                            <div class="reviewer-info">
                                                                <div class="reviewer-loc">
                                                                    <h6><a role="button" tabIndex="0">{comment.name}</a></h6>
                                                                </div>
                                                                <div class="reviewer-rating">
                                                                    <div class="star-rate">
                                                                        <span class="ratings">
                                                                            <i class="fa-solid fa-star filled"></i>
                                                                        </span>
                                                                        <span class="rating-count">5.0 </span>
                                                                    </div>
                                                                </div>
                                                                <div class="reviewer-time">
                                                                    <p>{dayjs(comment.created_at).fromNow()}</p>
                                                                    <p> Excellent service! </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="review-content">
                                                            <p>
                                                                {comment.comment}
                                                            </p>
                                                            <a role="button" tabIndex="0" class="reply-btn bg-light"><i
                                                                class="feather-corner-up-left"></i>Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div class="text-center dark-btn">
                                            <a href="faq.html" class="btn btn-dark text-center fs-13"> Load More </a>
                                        </div>
                                    </div>

                                    <div class="login-card">
                                        <div class="login-heading text-start mb-4">
                                            <h5>Leave a Review</h5>
                                        </div>
                                        <div class="form-wrap form-focus">
                                            <label class="mb-1 fw-medium text-dark mb-1">Your Rating <span
                                                class="text-primary">*</span> </label>
                                            <div class="icon d-flex gap-1">
                                                <i class="ti ti-star-filled text-warning"></i>
                                                <i class="ti ti-star-filled text-warning"></i>
                                                <i class="ti ti-star-filled text-warning"></i>
                                                <i class="ti ti-star-filled text-warning"></i>
                                                <i class="ti ti-star-filled text-light"></i>
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div class="row">
                                                <input
                                                            type="text"
                                                            className="form-control"
                                                            value={form.name}
                                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                            required
                                                        />
                                                <div class="col-lg-6">
                                                    <div class="form-wrap form-focus">
                                                        <label class="mb-1 fw-medium text-dark">Name <span
                                                            class="text-primary">*</span> </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={form.name}
                                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-wrap form-focus">
                                                        <label class="mb-1 fw-medium text-dark"> Email <span
                                                            class="text-primary">*</span> </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            value={form.email}
                                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-wrap form-focus">
                                                        <label class="mb-1 fw-medium text-dark"> Write a comment <span
                                                            class="text-primary">*</span> </label>
                                                        <textarea
                                                            className="form-control text-area"
                                                            value={form.message}
                                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" tabIndex="0" class="btn btn-primary member-btn"> Submit a comment
                                            </button>
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

                                <a role="button" tabIndex="0" data-bs-toggle="modal" data-bs-target="#support_talent"
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
                                        <h5><span class="me-2">Adrian Revolt</span> <span class="badge badge-success"><i
                                            class="fa-solid fa-circle"></i> Online</span></h5>
                                        <p><i class="fa-solid fa-star"></i> 5.0 (45 Reviews)</p>
                                    </div>
                                </div>

                                <div class="about-me new-about">
                                    <h6>About Me</h6>
                                    <p>Hello, I'm Adrian, a passionate digital storyteller and performer blending visual art
                                        and technology.<span class="more-content"> I create immersive experiences that
                                            inspire and uplift communities.</span></p>
                                    <a role="button" tabIndex="0" class="read-more">Read More</a>
                                </div>

                                <div class="member-info member-info-new">
                                    <div class="member-list d-flex align-items-center gap mb-3">
                                        <i class="ti ti-music"></i>
                                        <h6 class="mb-0">
                                            Talent Type
                                            <span class="pt-2"> Visual Artist & Digital Creator</span>
                                        </h6>
                                    </div>
                                    <div class="member-list d-flex align-items-center gap mb-3">
                                        <i class="ti ti-world"></i>
                                        <h6 class="mb-0">
                                            Based In
                                            <span class="pt-2"> Kigali, Rwanda</span>
                                        </h6>
                                    </div>
                                    <div class="member-list d-flex align-items-center gap mb-3">
                                        <i class="ti ti-calendar-event"></i>
                                        <h6 class="mb-0">
                                            Active Since
                                            <span class="pt-2"> 2020</span>
                                        </h6>
                                    </div>
                                    <div class="member-list d-flex align-items-center gap">
                                        <i class="ti ti-language"></i>
                                        <h6 class="mb-0">
                                            Languages
                                            <span class="pt-2"> English, French, Kinyarwanda</span>
                                        </h6>
                                    </div>
                                </div>

                                <a role="button" tabIndex="0" data-bs-toggle="modal" data-bs-target="#contact_talent"
                                    class="btn btn-outline-primary mb-0 w-100">Contact Talent</a>
                            </div>

                            <div class="service-widget">
                                <h5 class="">Share Talent Profile</h5>
                                <div class="social-links d-flex align-items-center breadcrumb-social pt-2">
                                    <ul>
                                        <li><a role="button" tabIndex="0"><i class="fa-brands fa-facebook"></i></a></li>
                                        <li><a role="button" tabIndex="0"><i class="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a role="button" tabIndex="0"><i class="fa-brands fa-instagram"></i></a></li>
                                        <li><a role="button" tabIndex="0"><i class="fa-brands fa-google"></i></a></li>
                                        <li><a role="button" tabIndex="0"><i class="fa-brands fa-youtube"></i></a></li>
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
                                                <a role="button" tabIndex="0" class="video-icon"><i
                                                    class="feather-video"></i></a>
                                                <a role="button" tabIndex="0" class="fav-icon"><i
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
                                                    <a role="button" tabIndex="0" class="share-icon"><i
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
                                                <a role="button" tabIndex="0" class="fav-icon"><i
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
                                                    <a role="button" tabIndex="0" class="share-icon"><i
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
                                                <a role="button" tabIndex="0" class="fav-icon"><i
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
                                                    <a role="button" tabIndex="0" class="share-icon"><i
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
                                                <a role="button" tabIndex="0" class="fav-icon"><i
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
                                                    <a role="button" tabIndex="0" class="share-icon"><i
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
    )
}

export default FrontStoryDetail