import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
        <div class="row gx-0">

            
            <div class="col-lg-6">
                <div class="authentication-wrapper">
                    <div class="authentication-content">
                        <div class="login-carousel owl-carousel">
                            <div class="login-slider">
                                <img src="assets/img/login-card-01.svg" class="img-fluid" alt="img"/>
                                <h2>Looking to Buy a service?</h2>
                                <p>Browse Listing & More 900 Services </p>
                            </div>
                            <div class="login-slider">
                                <img src="assets/img/login-card-02.svg" class="img-fluid" alt="img"/>
                                <h2>Looking to Sell a service?</h2>
                                <p>Browse Listing & More 900 Services </p>
                            </div>
                        </div>
                    </div>
                    <div class="login-bg">
                        <img src="assets/img/bg/shape-01.png" alt="img" class="shape-01"/>
                        <img src="assets/img/bg/shape-02.png" alt="img" class="shape-02"/>
                        <img src="assets/img/bg/shape-03.png" alt="img" class="shape-03"/>
                        <img src="assets/img/bg/shape-04.png" alt="img" class="shape-04"/>
                        <img src="assets/img/bg/shape-05.png" alt="img" class="shape-05"/>
                        <img src="assets/img/bg/shape-06.png" alt="img" class="shape-06"/>
                        <img src="assets/img/bg/shape-07.png" alt="img" class="shape-07"/>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6">
                <div class="login-wrapper">
                    <div class="login-content">
                        <form action="https://dreamgigs.dreamstechnologies.com/html/template/change-password.html">
                            <div class="login-userset">
                                <div class="login-logo">
                                    <img src="assets/img/logo.svg" alt="img"/>
                                </div>
                                <div class="login-card">
                                    <div class="login-heading text-start">
                                        <h3>Forgot Password</h3>
                                        <p>Enter Register email</p>
                                    </div>
                                    <div>
                                        <label class="form-label">Email</label>
                                        <div class="form-wrap form-focus">
                                            <span class="form-icon">
                                                <i class="feather-mail"></i>
                                            </span>
                                            <input type="email" class="form-control floating"/>
                                        </div>
                                    </div>
                                    <div class="form-wrap mantadory-info d-none">
                                        <p><i class="feather-alert-triangle"></i>Fill all the fields to submit</p>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                                <div class="acc-in">
                                    <p>Already have an account? <a href="/login">Login in</a></p>
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

export default ForgotPassword