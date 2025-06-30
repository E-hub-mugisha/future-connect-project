import React, { useEffect, useState } from 'react';
import api from '../api'; // Adjust the path as necessary

const Talents = () => {
    const [talents, setTalents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTalents = async () => {
            try {
                const response = await api.get('/talents'); // Adjust the endpoint as necessary
                setTalents(response.data.talents || []); // Ensure talents is an array
            } catch (error) {
                console.error('Error fetching talents:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchTalents();
    }, []);

    return (
        <div>

            <div class="breadcrumb-bar breadcrumb-bar-info">
                <div class="breadcrumb-img">
                    <div class="breadcrumb-left">
                        <img src="assets/img/bg/banner-bg-03.png" alt="img" />
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <nav aria-label="breadcrumb" class="page-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li class="breadcrumb-item" aria-current="page">Services</li>
                                    <li class="breadcrumb-item active" aria-current="page">Digital Marketing</li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title mb-0">
                                Featured Talents on <span class="text-primary">Future Connect</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>


            <div class="next-gen-section">
                <div class="container">
                    <div class="section-header-two text-center" data-aos="fade-up">
                        <h2 class="mb-2"><span class="title-bg"></span>Meet the Next Generation of talents<span
                            class="title-bg2"></span></h2>
                        <p>Connect with the next wave of talents, guiding you with fresh perspectives</p>
                    </div>
                    {loading ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        <>
                            <div className="row seller-list">
                                {talents.map((talent) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6" key={talent.id}>
                                        <div className="card" data-aos="flip-left">
                                            <div className="card-body text-center">
                                                <span className="avatar">
                                                    <a href={`/talent/${talent.id}`}>
                                                        <img
                                                            className="rounded-pill"
                                                            src="assets/img/user/profile.jpg"
                                                            alt="img"
                                                            height="50"
                                                            width="50"
                                                        />
                                                    </a>
                                                    <i className="ti ti-discount-check-filled verify-icon"></i>
                                                </span>
                                                <h6 className="mb-1">
                                                    <a href={`/talent/${talent.id}`}>{talent.name}</a>
                                                </h6>
                                                <p>{talent.skill}</p>
                                                <p className="mb-0 location-text d-inline-flex align-items-center">
                                                    <img
                                                        src="assets/img/flags/flag-for-rwanda.svg"
                                                        alt="flag"
                                                        className="me-1"
                                                    />
                                                    Rwanda <i className="ti ti-point-filled mx-1"></i> Total Gigs: 45
                                                </p>
                                                <div className="d-flex gap-2 align-items-center flex-wrap mt-3 justify-content-center">
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Wordpress
                                                    </a>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Figma
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-3" data-aos="fade-up">
                                <a href="talents.html" className="btn btn-lg btn-dark">
                                    Load more Talents
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Talents