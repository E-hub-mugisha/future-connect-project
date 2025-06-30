import React from 'react'

const UploadStory = () => {
  return (
    <div>
        <div class="breadcrumb-bar breadcrumb-bar-info">
			<div class="breadcrumb-img">
				<div class="breadcrumb-left">
					<img src="assets/img/bg/breadcrump-bg-01.png" alt="img"/>
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
								<li class="breadcrumb-item active" aria-current="page">Upload Story</li>
							</ol>
						</nav>
						<h2 class="breadcrumb-title mb-0">
							Share Your Story
						</h2>
					</div>
				</div>
			</div>
			<div class="breadcrumb-img">
				<div class="breadcrumb-right">
					<img src="assets/img/bg/breadcrump-bg-02.png" alt="img"/>
				</div>
			</div>
		</div>
		
        
		<div class="page-content">
			<div class="container">

				<div class="row justify-content-center">

					<div class="col-lg-10">
						<div class="marketing-section gig-post">
							<div class="gigs-step position-relative z-1">
								<ul>
									<li>
										<span>
											<img src="assets/img/icons/book-01.svg" alt="img"/>
										</span>
										<p>Step 01</p>
										<h6>Write Your Story</h6>
									</li>
									<li>
										<span>
											<img src="assets/img/icons/book-02.svg" alt="img"/>
										</span>
										<p>Step 02</p>
										<h6>Upload Media</h6>
									</li>
									<li>
										<span>
											<img src="assets/img/icons/book-03.svg" alt="img"/>
										</span>
										<p>Step 03</p>
										<h6>Select Skills</h6>
									</li>
									<li>
										<span>
											<img src="assets/img/icons/book-04.svg" alt="img"/>
										</span>
										<p>Step 04</p>
										<h6>Submit for Review</h6>
									</li>
								</ul>
							</div>
							<div class="marketing-bg">
								<img src="assets/img/bg/market-bg.png" alt="img" class="market-bg"/>
								<img src="assets/img/bg/market-bg-01.png" alt="img" class="market-img"/>
							</div>
						</div>
					</div>

					
					<div class="col-lg-10">
						<div class="add-property-wrap">
							<div class="property-info">
								<h5 class="mb-1">Story Details</h5>
								<p>Tell us your inspiring journey to be featured on Future Connect</p>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-wrap">
										<label class="col-form-label">Story Title<span
												class="text-danger ms-1">*</span></label>
										<input type="text" class="form-control mb-2"
											placeholder="E.g. From Village Roots to Tech Stars"/>
										<span><i class="ti ti-info-circle me-1"></i>Minimum 10 characters</span>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-wrap">
										<label class="col-form-label">Your Story<span
												class="text-danger ms-1">*</span></label>
										<textarea class="form-control mb-2" rows="6"
											placeholder="Describe your journey, struggles, breakthroughs, and achievements..."></textarea>
										<span><i class="ti ti-info-circle me-1"></i>Minimum 180 characters</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-wrap">
										<label class="col-form-label">Skills Highlighted</label>
										<div class="input-block input-block-tagsinput mb-1">
											<input type="text" data-role="tagsinput" class="input-tags form-control"
												name="skills" value="Public Speaking, Coding" id="skills"/>
										</div>
										<span>Enter comma-separated skills</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-wrap">
										<label class="col-form-label">Story Category<span
												class="text-danger ms-1">*</span></label>
										<select class="select2 form-control">
											<option selected>Select</option>
											<option>Entrepreneurship</option>
											<option>Art & Design</option>
											<option>STEM</option>
											<option>Leadership</option>
											<option>Personal Growth</option>
										</select>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-wrap">
										<label class="col-form-label">Upload Photo or Video</label>
										<input type="file" class="form-control"/>
										<span>Accepted formats: jpg, png, mp4 (Max size: 50MB)</span>
									</div>
								</div>
							</div>

							
							<div class="property-info">
								<h5 class="mb-1">Optional Extras</h5>
								<p>You can add motivational tips, quotes, or a call to action</p>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-wrap">
										<label class="col-form-label">Add Motivation Tip (Optional)</label>
										<input type="text" class="form-control"
											placeholder="E.g. Believe in yourself, even when no one else does."/>
									</div>
								</div>
								<div class="col-md-12 mt-3">
									<button class="btn btn-primary w-100">Submit Story</button>
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

export default UploadStory