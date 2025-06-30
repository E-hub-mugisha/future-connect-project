import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import api from "../publicApi";

const CategorySkills = () => {
    const { slug } = useParams();
    const [skills, setSkills] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchSkillsByCategory = useCallback(async () => {
        try {
            const res = await api.get(`/skills/category/${slug}`);
            setSkills(res.data.skills || []);
            setCategoryName(res.data.categoryName || "");
        } catch (err) {
            console.error("Failed to fetch skills:", err);
        } finally {
            setLoading(false);
        }
    }, [slug]);

    useEffect(() => {
        fetchSkillsByCategory();
    }, [fetchSkillsByCategory]);

    if (loading) return <div className="text-center my-5">Loading...</div>;

    return (
        <div>
            <div className="new-services-section">
                <div className="container">
                    <div className="section-header-two text-center" data-aos="fade-up">
                        <h2 className="mb-2"><span className="title-bg"></span>Our {categoryName} Skills<span className="title-bg2"></span></h2>
                        <p>Unlock a world of opportunities and take control of your future</p>
                    </div>
                    <div className="row">
                        {skills.length > 0 ? (
                            skills.map((skill) => (
                                <div className="col-xl-4 col-md-6" key={skill.id}>
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href={`/talent/skills/${skill.id}`}>
                                                        <img
                                                            src="/assets/img/home/service-01.jpg"
                                                            className="img-fluid"
                                                            alt="Gigs"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html">
                                                    <span className="badge bg-warning">
                                                        <i className="feather-star"></i>Featured
                                                    </span>
                                                </a>
                                                <a href="service.html">
                                                    <span className="badge bg-danger">
                                                        <i className="fa-solid fa-meteor"></i>
                                                        {skill.level}
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="fav-selection">
                                                <a role="button" tabIndex="0">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a role="button" tabIndex="0" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href={`/talent/skills/${skill.id}`} className="badge bg-light">
                                                        {skill.category || "Uncategorized"}
                                                    </a>
                                                    <span className="ms-2">+1</span>
                                                </div>
                                                <div className="star-rate">
                                                    <span>
                                                        <i className="fa-solid fa-star"></i>4.8 (360 Reviews)
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href={`/talent/skills/${skill.id}`}>{skill.name}</a>
                                                </h5>
                                            </div>
                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a
                                                        href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"
                                                    >
                                                        <img
                                                            src="/assets/img/user/profile.jpg"
                                                            className="img-fluid rounded-pill"
                                                            alt="img"
                                                        />
                                                    </a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0">
                                                            <a role="button" tabIndex="0">
                                                                {skill.talent ? skill.talent.name : "Author"}
                                                            </a>
                                                        </h6>
                                                        <p className="mb-0">
                                                            {skill.talent ? skill.talent.address : "Rwanda"}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$645</h6>
                                                    <span>{skill.tags}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center mt-4">No skills found for this category.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySkills;
