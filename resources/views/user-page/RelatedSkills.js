import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../publicApi";

const RelatedSkills = ({ categoryId, excludeSkillId }) => {
  const [relatedSkills, setRelatedSkills] = useState([]);

  useEffect(() => {
    const fetchRelatedSkills = async () => {
      try {
        const res = await api.get(`/skills/related/${categoryId}?exclude=${excludeSkillId}`);
        setRelatedSkills(res.data.skills || []);
      } catch (err) {
        console.error("Failed to fetch related skills:", err);
      }
    };

    if (categoryId) {
      fetchRelatedSkills();
    }
  }, [categoryId, excludeSkillId]);

  if (relatedSkills.length === 0) return null;

  return (
    <div className="recent-works mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-sec">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h3>Related Skills</h3>
                </div>
              </div>
            </div>
            <div className="gigs-slider owl-carousel">
              {relatedSkills.map((skill) => (
                <div className="gigs-grid" key={skill.id}>
                  <div className="gigs-img">
                    <div className="img-slider">
                      <div className="slide-images">
                        <Link to={`/talent/skills/${skill.id}`}>
                          <img src="/assets/img/home/service-01.jpg" className="img-fluid" alt={skill.name} />
                        </Link>
                      </div>
                    </div>
                    <div className="card-overlay-badge">
                      <span className="badge bg-danger">
                        <i className="fa-solid fa-meteor"></i> {skill.level}
                      </span>
                    </div>
                    <div className="fav-selection">
                      <a role="button" tabIndex="0" className="fav-icon">
                        <i className="feather-heart"></i>
                      </a>
                    </div>
                    <div className="user-thumb">
                      <Link to={`/talent-profile/${skill.talent?.id}`}>
                        <img src="/assets/img/user/profile.jpg" alt={skill.talent?.name || "Talent"} />
                      </Link>
                    </div>
                  </div>
                  <div className="gigs-content">
                    <div className="gigs-info">
                      <Link to={`/skills/category/${skill.category_id}`}>
                        <span className="badge bg-primary-light">{skill.category?.name || "Uncategorized"}</span>
                      </Link>
                      <p>
                        <i className="ti ti-map-pin-check"></i> {skill.talent?.address || "Unknown"}
                      </p>
                    </div>
                    <div className="gigs-title">
                      <h3>
                        <Link to={`/talent/skills/${skill.id}`}>{skill.name}</Link>
                      </h3>
                    </div>
                    <div className="star-rate">
                      <span>
                        <i className="fa-solid fa-star"></i> 4.5 (40 Reviews)
                      </span>
                    </div>
                    <div className="gigs-card-footer">
                      <div>
                        <a role="button" tabIndex="0" className="share-icon">
                          <i className="feather-share-2"></i>
                        </a>
                        <span className="badge">Delivery in 2 days</span>
                      </div>
                      <h5>$645</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedSkills;
