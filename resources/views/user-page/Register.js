import React, { useState } from 'react';
import api from '../api'; // Adjust path as necessary
import AuthUser from '../AuthUser';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {http, setToken} = AuthUser();
    const [form, setForm] = useState({ id: null, name: '', email: '', password: '', role: 'user', active: true });
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {

            const res = http.post('/register', {
                ...form,
                password,
                password_confirmation: passwordConfirmation
            });
            console.log(res.data);
            alert('Registration successful. You can now login.');
            window.location.href = '/login';
        } catch (error) {
            console.error(error);
            alert('Registration failed');
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

                <div className="col-lg-6">
                    <div className="login-wrapper">
                        <div className="login-content">
                            <form onSubmit={handleRegister}>
                                <div className="login-userset">
                                    <div className="login-logo">
                                        <img src="assets/img/logo.svg" alt="img" />
                                    </div>
                                    <div className="login-card">
                                        <div className="login-heading">
                                            <h3>Hi, Welcome!</h3>
                                            <p>Register to get access to DreamGigs</p>
                                        </div>
                                        <div>
                                            <label className="form-label">Name</label>
                                            <div className="form-wrap form-focus">
                                                <span className="form-icon">
                                                    <i className="feather-user"></i>
                                                </span>
                                                <input type="text" className="form-control floating" value={name} onChange={e => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="form-label">Email</label>
                                            <div className="form-wrap form-focus">
                                                <span className="form-icon">
                                                    <i className="feather-mail"></i>
                                                </span>
                                                <input type="email" className="form-control floating" value={email} onChange={e => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                <label>Role</label>
                <select className="form-select" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Status</label>
                <select className="form-select" value={form.active} onChange={(e) => setForm({ ...form, active: e.target.value === 'true' })}>
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
                                        <div>
                                            <label className="form-label">Password</label>
                                            <div className="form-wrap form-focus pass-group">
                                                <span className="form-icon">
                                                    <i className="toggle-password feather-eye-off"></i>
                                                </span>
                                                <input type="password" className="pass-input form-control floating" onChange={e => setPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="form-label">Confirm Password</label>
                                            <div className="form-wrap form-focus">
                                                <input type="password" className="form-control floating" onChange={e => setPasswordConfirmation(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-wrap">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    By signing up you agree to our <a href="terms-condition.html" className="terms-links">Terms of Use</a> and <a href="privacy-policy.html" className="terms-links">Privacy Policy</a>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign Up</button>
                                        <div className="login-or">
                                            <span className="span-or">or sign up with</span>
                                        </div>
                                        {/* Social Links */}
                                    </div>
                                    <div className="acc-in">
                                        <p>Already have an account? <a href="/login">Sign In</a></p>
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

export default Register