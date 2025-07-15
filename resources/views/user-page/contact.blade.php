@extends('layouts.guest')
@section('content')
<div>

    <div class="breadcrumb-bar">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="{{ route('user.home') }}">Home</a>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">
                        Contact Us
                    </h2>
                </div>
            </div>
        </div>
    </div>


    <section class="contact-section">


        <div class="contact-bottom bg-white">
            <div class="container">
                <div class="row justify-content-center">


                    <div class="col-lg-4 col-md-6 d-flex">
                        <div class="contact-grid w-100">
                            <div class="contact-content">
                                <div class="contact-icon">
                                    <span>
                                        <img src="assets/img/icons/contact-mail.svg" alt="Email Icon" />
                                    </span>
                                </div>
                                <div class="contact-details">
                                    <h6>Email Us</h6>
                                    <p><a href="mailto:info@futureconnect.rw">info@futureconnect.rw</a></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 d-flex">
                        <div class="contact-grid w-100">
                            <div class="contact-content">
                                <div class="contact-icon">
                                    <span>
                                        <img src="assets/img/icons/contact-phone.svg" alt="Phone Icon" />
                                    </span>
                                </div>
                                <div class="contact-details">
                                    <h6>Call Us</h6>
                                    <p>+250 788 123 456</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 d-flex">
                        <div class="contact-grid w-100">
                            <div class="contact-content">
                                <div class="contact-icon">
                                    <span>
                                        <img src="assets/img/icons/contact-map.svg" alt="Map Icon" />
                                    </span>
                                </div>
                                <div class="contact-details contact-details-address">
                                    <h6>Visit Us</h6>
                                    <p>Future Connect HQ, Kigali City, Rwanda</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <div class="contact-top pt-0">
            <div class="container">
                <div class="row align-items-center">


                    <div class="col-lg-6 col-md-12 d-flex">
                        <div class="contact-img">
                            <img src="assets/img/Future Connect-connect.jpg" class="img-fluid"
                                alt="Connect with Future Connect" />
                        </div>
                    </div>


                    <div class="col-lg-6 col-md-12 d-flex">
                        <div class="team-form w-100 mt-4">
                            <div class="team-form-heading">
                                <h3>Connect With Future Connect</h3>
                                <p>Have a question, idea, or feedback? Drop us a message we’d love to hear from you!
                                </p>
                            </div>
                            <form action="{{ route('contact.send') }}" method="POST">
                                @csrf
                                <div class="form-group">
                                    <input type="text" name="names" class="form-control" placeholder="Full Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control" placeholder="Email Address" />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="subject" class="form-control" placeholder="Subject" />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" name="message" placeholder="Your Message"></textarea>
                                </div>
                                <div class="form-group mb-0">
                                    <button type="submit" class="btn btn-primary">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <div class="contact-map map-v3 w-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.8594561078528!2d30.097123416047607!3d-1.9440729322966414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6ddf3b71f67%3A0x7d91d3b6169b4f11!2sKigali%20Innovation%20City!5e0!3m2!1sen!2srw!4v1684567890123!5m2!1sen!2srw"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

    </section>

</div>

@endsection
