 @php
    $categories = \App\Models\Category::inRandomOrder()->take(5)->get();
@endphp
 <footer class="footer-two">
     
     <div class="footer-top-two position-relative">
         
         <div class="container">
             <div class="row row-gap-4" data-aos="fade-up">
                 <div class="col-lg-3 col-sm-6 footer-links">
                     <h6>About Future Connect</h6>
                     <ul>
                         <li><a href="{{ route('user.about') }}"><i class="ti ti-chevron-right me-2"></i>About Us</a></li>
                         <li><a href="{{ route('user.how-it-works')}}"><i class="ti ti-chevron-right me-2"></i>How It Works</a>
                         </li>
                         <li><a href="{{ route('talent.match')}}"><i class="ti ti-chevron-right me-2"></i>Talent
                                 Room</a></li>
                         <li><a href="{{ route('user.register_as_talent') }}"><i class="ti ti-chevron-right me-2"></i>Join the Platform</a>
                         </li>
                         <li class="mb-0"><a href="{{ route('user.contact') }}"><i class="ti ti-chevron-right me-2"></i>Contact
                                 Us</a></li>
                     </ul>
                 </div>
                 <div class="col-lg-3 col-sm-6 footer-links">
                     <h6>Resources</h6>
                     <ul>
                         <li><a href="{{ route('user.stories') }}"><i class="ti ti-chevron-right me-2"></i>Inspiring Stories</a>
                         </li>
                         <li><a href="{{ route('user.skills') }}"><i class="ti ti-chevron-right me-2"></i>Skill Courses</a>
                         </li>
                         <li><a href="{{ route('user.blogs') }}"><i class="ti ti-chevron-right me-2"></i>Blog</a></li>
                         <li><a href="{{ route('user.talents') }}"><i class="ti ti-chevron-right me-2"></i>Talents</a></li>
                         <li><a href="{{ route('user.faq') }}"><i class="ti ti-chevron-right me-2"></i>FAQs</a></li>
                     </ul>
                 </div>
                 <div class="col-lg-3 col-sm-6 footer-links">
                     <h6>Categories</h6>
                     <ul>
                        @foreach($categories as $cat)
                         <li><a href="{{ url('/talents/category/' . $cat->slug) }}"><i class="ti ti-chevron-right me-2"></i>{{ $cat->name }}</a></li>
                         @endforeach
                     </ul>
                 </div>
                 <div class="col-lg-3 col-sm-6 footer-contact">
                     <h6>Get in Touch</h6>
                     <div class="d-flex align-items-center mb-3">
                         <span class="footer-icon"><i class="ti ti-map-pin"></i></span>
                         <div>
                             <p class="mb-0">Location</p>
                             <span>Kigali, Rwanda</span>
                         </div>
                     </div>
                     <div class="d-flex align-items-center mb-3">
                         <span class="footer-icon"><i class="ti ti-device-tablet"></i></span>
                         <div>
                             <p class="mb-0">Phone</p>
                             <span>+250 784 123 456</span>
                         </div>
                     </div>
                     <div class="d-flex align-items-center">
                         <span class="footer-icon"><i class="ti ti-mail"></i></span>
                         <div>
                             <p class="mb-0">Email</p>
                             <span><a href="mailto:info@futureconnect.rw">info@futureconnect.rw</a></span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <div class="footer-bottom-two">
         <div class="container">
             <div class="mb-3 d-flex align-items-center justify-content-between flex-wrap gap-3">
                 <a href="/" class="footer-logo">
                     <img src="{{ asset('assets/img/logo.svg')}}" alt="Future Connect Logo' ) }}" />
                 </a>
                 <div class="social-links">
                     <ul>
                         <li class="me-2"><a role="button" tabIndex="0"><i class="fa-brands fa-facebook"></i></a></li>
                         <li class="me-2"><a role="button" tabIndex="0"><i class="fa-brands fa-x-twitter"></i></a></li>
                         <li class="me-2"><a role="button" tabIndex="0"><i class="fa-brands fa-instagram"></i></a></li>
                         <li class="me-2"><a role="button" tabIndex="0"><i class="fa-brands fa-linkedin"></i></a></li>
                         <li><a role="button" tabIndex="0"><i class="fa-brands fa-youtube"></i></a></li>
                     </ul>
                 </div>
             </div>
             <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                 <div class="copy-right-two">
                     <p class="mb-0">&copy; @php echo date('Y'); @endphp Future Connect. Empowering Stories. Real Impact.</p>
                 </div>
                 <div class="footer-links">
                     <ul class="d-flex align-items-center flex-wrap gap-3">
                         <li><a href="{{ route('user.privacy-policy') }}">Privacy Policy</a></li>
                         <li><a href="{{ route('user.terms-condition') }}">Terms & Conditions</a></li>
                         <li><a href="{{ route('user.donation-policy') }}">Donation Policy</a></li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
 </footer>
