import React, { useState } from 'react';
import api from '../api'; // Adjust the import path as necessary

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await api.get('/sanctum/csrf-cookie');
            const res = await api.post('/login', { email, password });
            console.log(res.data);
            alert('Login successful');
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };
    return (
        <div>
            <div class="row gx-0">


                <div class="col-lg-6">
                    <div class="authentication-wrapper">
                        <div class="authentication-content">
                            <div class="login-carousel owl-carousel">
                                <div class="login-slider">
                                    <img src="assets/img/login-card-01.svg" class="img-fluid" alt="img" />
                                    <h2>Looking to Buy a service?</h2>
                                    <p>Browse Listing & More 900 Services </p>
                                </div>
                                <div class="login-slider">
                                    <img src="assets/img/login-card-02.svg" class="img-fluid" alt="img" />
                                    <h2>Looking to Sell a service?</h2>
                                    <p>Browse Listing & More 900 Services </p>
                                </div>
                            </div>
                        </div>
                        <div class="login-bg">
                            <img src="assets/img/bg/shape-01.png" alt="img" class="shape-01" />
                            <img src="assets/img/bg/shape-02.png" alt="img" class="shape-02" />
                            <img src="assets/img/bg/shape-03.png" alt="img" class="shape-03" />
                            <img src="assets/img/bg/shape-04.png" alt="img" class="shape-04" />
                            <img src="assets/img/bg/shape-05.png" alt="img" class="shape-05" />
                            <img src="assets/img/bg/shape-06.png" alt="img" class="shape-06" />
                            <img src="assets/img/bg/shape-07.png" alt="img" class="shape-07" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="login-wrapper">
                        <div class="login-content">
                            <form action="https://dreamgigs.dreamstechnologies.com/html/template/seller-dashboard.html">
                                <div class="login-userset">
                                    <div class="login-logo">
                                        <img src="assets/img/logo.svg" alt="img" />
                                    </div>
                                    <div class="login-card">
                                        <div class="login-heading">
                                            <h3>Hi, Welcome Back!</h3>
                                            <p>Fill the fields to get into your account</p>
                                        </div>
                                        <div>
                                            <label class="form-label">Email</label>
                                            <div class="form-wrap form-focus">
                                                <span class="form-icon">
                                                    <i class="feather-mail"></i>
                                                </span>
                                                <input type="email" class="form-control floating" onChange={e => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div>
                                            <label class="form-label">Password</label>
                                            <div class="form-wrap form-focus pass-group">
                                                <span class="form-icon">
                                                    <i class="toggle-password feather-eye-off"></i>
                                                </span>
                                                <input type="password" class="pass-input form-control  floating" onChange={e => setPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-wrap">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-wrap text-md-end">
                                                    <a href="/forgot-password" class="forgot-link">Forgot Password?</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-wrap mantadory-info d-none">
                                            <p><i class="feather-alert-triangle"></i>Fill all the fields to submit</p>
                                        </div>
                                        <button type="submit" onClick={handleLogin} class="btn btn-primary">Sign In</button>
                                        <div class="login-or">
                                            <span class="span-or">or sign up with</span>
                                        </div>
                                        <ul class="login-social-link">
                                            <li>
                                                <a role="button"
                                                    tabIndex="0">
                                                    <img src="assets/img/icons/google-icon.svg" alt="Facebook" /> Google
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button"
                                                    tabIndex="0">
                                                    <img src="assets/img/icons/fb.svg" alt="Google" /> Facebook
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="acc-in">
                                        <p>Don’t have an account? <a href="/register">Sign Up</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login