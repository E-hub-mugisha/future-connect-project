import React, { useEffect, useState } from 'react';
import api from '../publicApi'; // ✅ correct import

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All Skills");

    useEffect(() => {
        fetchCategories();
        fetchSkills();
    }, []);

    const fetchCategories = async () => {
        try {
            const res = await api.get('/categories');
            setCategories(res.data);
        } catch (err) {
            console.error('Failed to fetch categories:', err);
        }
    };

    const fetchSkills = async () => {
        try {
            const res = await api.get('/skills');
            setSkills(res.data.skills || []); // Ensure skills is an array
        } catch (err) {
            console.error('Failed to fetch skills:', err);
        }
    };

    // Create a map of category_id => category_name for quick lookup
    const categoryMap = categories.reduce((acc, cat) => {
        acc[cat.id] = cat.name;
        return acc;
    }, {});

    // Categories for tabs, with 'All Skills' prepended
    const skillsCategories = ["All Skills", ...categories.map((cat) => cat.name)];

    // Filter skills by active category name (using category_id to match)
    const getFilteredSkills = (categoryName) => {
        if (categoryName === "All Skills") return skills;

        const category = categories.find((cat) => cat.name === categoryName);
        if (!category) return [];

        return skills.filter((skill) => skill.category_id === category.id);
    };
    
    return (
        <div>
            <div className="new-services-section">
                <div className="container">
                    <div className="section-header-two text-center" data-aos="fade-up">
                        <h2 className="mb-2"><span className="title-bg"></span>Our New Skills<span className="title-bg2"></span></h2>
                        <p>Unlock a world of opportunities and take control of your future</p>
                    </div>
                    <div className="listing-tab" data-aos="fade-up">
                        <div className="listing-slider">
                            <ul className="nav nav-tabs justify-content-center">
                                {skillsCategories.map((category) => (
                                    <li className="nav-item" key={category}>
                                        <a type='button'
                                            className={`nav-link ${activeCategory === category ? "active" : ""}`}
                                            onClick={() => setActiveCategory(category)}
                                        >
                                            {category}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="tab-content" data-aos="fade-up">
                        {skillsCategories.map((category) => (
                            <div
                                key={category}
                                className={`tab-pane fade ${activeCategory === category ? "show active" : ""}`}
                                id={category ? category.replace(/\s+/g, "_").toLowerCase() : "all_skills"}
                                role="tabpanel"
                            >
                                <div className="row">
                                    {getFilteredSkills(category).length > 0 ? (
                                        getFilteredSkills(category).map((skill) => (
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
                        ))}
                    </div>

                    <div className="text-center mt-3" data-aos="fade-up">
                        <a href="/skills" className="btn btn-lg btn-dark">View All Skills</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills