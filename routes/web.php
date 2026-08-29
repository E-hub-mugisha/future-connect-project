<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\users\HomeController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminStoryController;
use App\Http\Controllers\Admin\AdminSkillController;
use App\Http\Controllers\Admin\AdminBannerController;
use App\Http\Controllers\Admin\AdminAnnouncementController;
use App\Http\Controllers\Admin\AdminCoursesController;
use App\Http\Controllers\Admin\AdminEventController;
use App\Http\Controllers\Admin\AdminJobController;
use App\Http\Controllers\Admin\AdminPartnerController;
use App\Http\Controllers\Admin\AdminPaymentController;
use App\Http\Controllers\Admin\AdminProjectController;
use App\Http\Controllers\Admin\AdminTalentConnectionController;
use App\Http\Controllers\Admin\AdminTalentController;
use App\Http\Controllers\Admin\AdminTestimonialController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\PricingPlanController;
use App\Http\Controllers\Admin\ProductCategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SellerAdminController;
use App\Http\Controllers\Talent\TalentDashboardController;
use App\Http\Controllers\Talent\TalentProfileController;
use App\Http\Controllers\Talent\TalentStoryController;
use App\Http\Controllers\Talent\TalentSkillController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DemoRequestController;
use App\Http\Controllers\Diaspora\DiasporaAccountController;
use App\Http\Controllers\MembershipController;
use App\Http\Controllers\QuickHireController;
use App\Http\Controllers\Seller\SellerController;
use App\Http\Controllers\Seller\SellerPanelController;
use App\Http\Controllers\Seller\SellerProductController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\Talent\TalentCourseController;
use App\Http\Controllers\Talent\TalentJobController;
use App\Http\Controllers\Talent\TalentProductController;
use App\Http\Controllers\Talent\TalentProjectController;
use App\Http\Controllers\TalentConnectionController;
use App\Http\Controllers\TrendingController;
use App\Http\Controllers\users\CartController;
use App\Http\Controllers\users\CheckoutController;
use App\Http\Controllers\users\PaymentController as UsersPaymentController;
use App\Http\Controllers\users\ProductController as UsersProductController;
use App\Http\Controllers\users\UserCorporateRecruitmentController;
use App\Http\Controllers\users\UserEventController;
use App\Http\Controllers\users\UserEventTicketOrderController;
use App\Http\Controllers\users\UserJobController;
use App\Http\Controllers\users\UserPanelController;
use App\Http\Controllers\users\UserProjectController;
use App\Http\Controllers\Wallets\PaymentController;
use App\Http\Controllers\Wallets\WalletController;
use App\Models\Course;
use App\Models\Talent;
use App\Models\Wallet;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Http\Request;
use App\Http\Controllers\Admin\DemoRequestController as AdminDemoRequestController;

/*
|--------------------------------------------------------------------------
| ⚠️ ROUTE NAME COLLISIONS FIXED IN THIS FILE
|--------------------------------------------------------------------------
| 1. user.projects.create — was assigned to BOTH /project/create and
|    /user/projects/submit. The submission-form route is now named
|    user.projects.submit. Update any route('user.projects.create')
|    calls in views/JS that were meant to point at the submit form.
|
| 2. payment.callback — this file only defines it once (see PAYMENTS
|    & CALLBACKS section below). If route:cache still fails with a
|    "payment.callback" collision, the duplicate lives in another
|    route file (routes/api.php, or an events/tickets route file not
|    shown here). Run:
|        grep -rn "payment.callback" routes/
|    and rename the other occurrence (e.g. event.payment.callback).
|
| 3. talent.connections.index / talent.connections.respond — the
|    "incoming connection requests" routes and the "dashboard
|    connections" routes both used the generic connections.index /
|    connections.respond names within the talent. group. The
|    incoming-requests pair is now named connections.requests.index
|    and connections.requests.respond. Update any route()/href calls
|    in talent Blade views that referenced the old names.
|
| 4. admin.events.show — Route::resource('events', ...) already
|    registers this name for GET events/{event}. A second explicit
|    route at events/{event}/show duplicated it. The explicit route
|    is kept (in case that URL is linked elsewhere) but is now unnamed.
|
| 5. admin.orders.index / admin.orders.show — Route::resource(
|    'event/orders', ...) auto-generated these names, colliding with
|    the separate product-orders routes (OrderController). The event-
|    orders routes are now registered explicitly as event-orders.index
|    / event-orders.show / event-orders.destroy. Update any
|    route('admin.orders.index')-style calls in event/ticket-order
|    Blade views to route('admin.event-orders.index') etc.
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Public — Home / Static Pages
|--------------------------------------------------------------------------
*/
Route::get('/', [HomeController::class, 'index'])->name('user.home');
Route::get('/about', [HomeController::class, 'about'])->name('user.about');
Route::get('/contact', [HomeController::class, 'contact'])->name('user.contact');
Route::post('/contact/send', [HomeController::class, 'contactSend'])->name('contact.send');
Route::get('/faq', [HomeController::class, 'faq'])->name('user.faq');
Route::post('/faq/store', [HomeController::class, 'addFaqStore'])->name('faq.ask.store');
Route::get('/how-it-works', [HomeController::class, 'howItWorks'])->name('user.how-it-works');
Route::get('/privacy-policy', [HomeController::class, 'privacyPolicy'])->name('user.privacy-policy');
Route::get('/terms-condition', [HomeController::class, 'termsCondition'])->name('user.terms-condition');
Route::get('/donation-policy', [HomeController::class, 'donationPolicy'])->name('user.donation-policy');
Route::get('/pricing', [HomeController::class, 'pricing'])->name('pricing');
Route::get('/trending', [TrendingController::class, 'index'])->name('user.trending.index');
Route::get('/partnerships', [HomeController::class, 'partnerships'])->name('user.partnerships');
Route::post('/partnerships/apply', [HomeController::class, 'store'])->name('user.partnerships.apply');
Route::get('/video', fn() => view('user-page.video'));

Route::prefix('solutions')->name('solutions.')->controller(HomeController::class)->group(function () {
    Route::get('/students',      'students')->name('students');
    Route::get('/ngos',          'ngos')->name('ngos');
    Route::get('/companies',     'companies')->name('companies');
    Route::get('/professionals', 'professionals')->name('professionals');
    Route::get('/universities',  'universities')->name('universities');
    Route::get('/investors',     'investors')->name('investors');
});

/*
|--------------------------------------------------------------------------
| Public — Categories, Talents & Skills Marketplace
|--------------------------------------------------------------------------
*/
Route::get('/categories', [HomeController::class, 'categories'])->name('user.categories');
Route::get('/categories-with-talent-count', [HomeController::class, 'withTalentCount']);
Route::get('/testimonials/random', [HomeController::class, 'random']);
Route::get('/register/skills', [HomeController::class, 'RegisterAsTalent'])->name('user.register_skills');
Route::post('/talent/register', [HomeController::class, 'storeTalent'])->name('talent.register');
Route::get('/talent/success/{id}', [HomeController::class, 'talentSuccess'])->name('talent.success');
Route::get('/talent-matched', [HomeController::class, 'matchedTalents'])->name('talent.match');
Route::post('/talent/feedback', [HomeController::class, 'storeFeedback'])->name('talent.feedback.store');
Route::post('/support-talent', [HomeController::class, 'storeSupport'])->name('support.talent');
Route::get('/skills-marketplace', [HomeController::class, 'talents'])->name('user.talents');
Route::get('/skills/{id}', [HomeController::class, 'showTalents'])->name('user.talent.details');
Route::get('/skills/category/{slug}', [HomeController::class, 'getTalentByCategory'])->name('user.talents.category');
Route::get('/verified-skills', [HomeController::class, 'verifiedTalents'])->name('user.verified-talents');
Route::get('/top-rated-talents', [HomeController::class, 'topRatedTalents'])->name('user.top-rated-talents');
Route::get('/search', [HomeController::class, 'search'])->name('talent.search');
Route::get('/talent/{id}/stories', [HomeController::class, 'talentStories'])->name('talent.stories');
Route::get('/skills', [HomeController::class, 'skills'])->name('user.skills');
Route::get('/skills/related/{categoryId}', [HomeController::class, 'relatedSkills']);
Route::post('/skills/{id}/reviews', [HomeController::class, 'storeReview'])->name('reviews.store');

/*
|--------------------------------------------------------------------------
| Public — Stories & Success Stories
|--------------------------------------------------------------------------
*/
Route::get('/stories', [HomeController::class, 'stories'])->name('user.stories');
Route::get('/story-details/{slug}', [HomeController::class, 'storyDetails'])->name('user.storyDetails');
Route::post('/story/comment/store', [HomeController::class, 'storeStoryComment'])->name('story.comment.store');
Route::get('/story/category/{slug}', [HomeController::class, 'getStoryByCategory']);
Route::get('/stories/search', [HomeController::class, 'storyFilter'])->name('stories.filter');
Route::get('/upload-story', [HomeController::class, 'uploadStory'])->name('user.upload-story');
Route::post('/upload-story/store', [HomeController::class, 'uploadStoryStory'])->name('user.upload-story.store');
Route::get('/success-stories', [HomeController::class, 'successStories'])->name('user.success-stories');
Route::post('/success-stories/store', [HomeController::class, 'storeSuccessStory'])->name('user.success-stories.store');

/*
|--------------------------------------------------------------------------
| Public — Announcements & Blog
|--------------------------------------------------------------------------
*/
Route::get('/announcements', [HomeController::class, 'announcements'])->name('user.announcements');
Route::get('/announcement/{id}', [HomeController::class, 'announcementDetails'])->name('user.announcement.details');
Route::post('/announcement/{announcement}/comment', [HomeController::class, 'addComment'])
    ->middleware('auth')
    ->name('announcement.comment');
Route::get('/blogs', [HomeController::class, 'blogs'])->name('user.blogs');
Route::get('/blog/{slug}', [HomeController::class, 'blogDetails'])->name('user.blog.details');

/*
|--------------------------------------------------------------------------
| Misc Logging
|--------------------------------------------------------------------------
*/
Route::post('/log-view', [HomeController::class, 'logView'])->name('log.view');

/*
|--------------------------------------------------------------------------
| Video / Paid Story Content
|--------------------------------------------------------------------------
*/
Route::get('/video/verify-access/{story_id}/{video_id}', [UsersPaymentController::class, 'showEmailForm'])->name('video.access.verify');
Route::post('/video/verify-email', [UsersPaymentController::class, 'verifyEmail'])->name('video.verifyEmail');
Route::get('/story/payment/{story_id}/{video_id}', [UsersPaymentController::class, 'checkout'])->name('payment.checkout');
Route::get('/story/watch/{video_id}/{story_id}', [UsersPaymentController::class, 'watch'])->name('video.play');
Route::get('/story/payment/callback', [UsersPaymentController::class, 'handleCallback'])->name('payment.callback');

/*
|--------------------------------------------------------------------------
| Talent Connections (public entry points)
|--------------------------------------------------------------------------
*/
Route::get('/connection-room', [TalentConnectionController::class, 'index'])->name('talent.connections-room');
Route::get('/start-connecting', [TalentConnectionController::class, 'StartConnecting'])->name('talent.start-connecting');
Route::get('/connection/{talent}', [TalentConnectionController::class, 'show'])->name('talent.profile.show');
Route::post('/connection/{talent}/request', [TalentConnectionController::class, 'store'])->name('talent.connections.request');
Route::get('/connection/{id}/payment', [TalentConnectionController::class, 'paymentChoice'])->name('connections.payment.choice');
Route::post('/connections/{id}/pay-now', [TalentConnectionController::class, 'payNow'])->name('connections.payment.now');
Route::post('/connections/{id}/pay-later', [TalentConnectionController::class, 'payLater'])->name('connections.payment.later');
Route::get('/connection/payment/callback', [TalentConnectionController::class, 'handleCallback'])->name('connection.payment.callback');

/*
|--------------------------------------------------------------------------
| Learning Center / Courses
|--------------------------------------------------------------------------
*/
Route::get('/learning_center', [CourseController::class, 'index'])->name('user.courses');
Route::get('/browse/courses', [CourseController::class, 'AllCourses'])->name('user.courses.browse');
Route::get('/courses/category/{category:slug}', [CourseController::class, 'byCategory'])->name('user.courses.category');
Route::get('/course/details/{slug}', [CourseController::class, 'show'])->name('user.courses.show');
Route::post('/courses/{id}/review', [CourseController::class, 'storeReview'])
    ->middleware('auth')
    ->name('courses.review');
Route::post('/courses/{id}/enroll', [CourseController::class, 'enroll'])
    ->middleware('auth')
    ->name('user.courses.enroll');
Route::post('/courses/{course}/pay', [CourseController::class, 'pay'])->name('user.courses.pay');
Route::get('/courses/{course}/success', [CourseController::class, 'paymentSuccess'])->name('user.courses.success');
Route::get('/course/payment/callback', [CourseController::class, 'handleCallback'])->name('course.payment.callback');

/*
|--------------------------------------------------------------------------
| Products & Checkout
|--------------------------------------------------------------------------
*/
Route::get('/products', [UsersProductController::class, 'index'])->name('user.products.index');
Route::get('/products/{id}', [UsersProductController::class, 'details'])->name('user.product-details');
Route::get('/product/categories/{id}', [UsersProductController::class, 'showCategory'])->name('user.product.category');
Route::post('/products/{product}/reviews', [UsersProductController::class, 'store'])
    ->middleware('auth')
    ->name('product.reviews.store');

Route::get('/checkout/{product:slug}', [CheckoutController::class, 'create'])->name('checkout.create');
Route::post('/checkout/{product:slug}', [CheckoutController::class, 'store'])->name('checkout.store');
Route::get('/checkout/success/{orderNumber}', [CheckoutController::class, 'success'])->name('checkout.success');

/*
|--------------------------------------------------------------------------
| Corporate Recruitment
|--------------------------------------------------------------------------
*/
Route::prefix('corporate')->name('corporate.')->group(function () {
    Route::get('/', [UserCorporateRecruitmentController::class, 'index'])->name('index');
    Route::get('/create', [UserCorporateRecruitmentController::class, 'create'])
        ->middleware('auth')
        ->name('create');
    Route::post('/store', [UserCorporateRecruitmentController::class, 'store'])
        ->middleware('auth')
        ->name('store');
    Route::get('/{corporateRecruitment}', [UserCorporateRecruitmentController::class, 'show'])->name('show');
});

/*
|--------------------------------------------------------------------------
| Events & Ticketing (public)
|--------------------------------------------------------------------------
*/
Route::get('/events', [UserEventController::class, 'index'])->name('user.events.index');
Route::get('/events/{id}', [UserEventController::class, 'show'])->name('user.events.show');
Route::post('/tickets/order', [UserEventTicketOrderController::class, 'checkout'])->name('event.orders.checkout');
Route::get('/orders/{id}/tickets', [UserEventTicketOrderController::class, 'showticket'])->name('order.tickets');
Route::get('/ticket/order/{order}/summary', [UserEventTicketOrderController::class, 'summary'])->name('user.ticket.order-summary');
Route::get('/tickets/{id}/download', [UserEventTicketOrderController::class, 'downloadTicket'])->name('user.tickets.download');

/*
|--------------------------------------------------------------------------
| Jobs (public)
|--------------------------------------------------------------------------
*/
Route::get('/find_work', [UserJobController::class, 'index'])->name('user.jobs.index');
Route::get('/jobs/browse', [UserJobController::class, 'browse'])->name('user.jobs.browse');
Route::get('/jobs/{id}', [UserJobController::class, 'show'])->name('user.jobs.show');
Route::post('/jobs/{job}/apply', [UserJobController::class, 'apply'])->name('user.jobs.apply');
Route::get('/jobs/category/{id}', [UserJobController::class, 'category'])->name('user.jobs.category');
Route::post('/jobs/store', [UserJobController::class, 'store'])->name('user.jobs.store');

/*
|--------------------------------------------------------------------------
| Projects (public) — FIXED: duplicate name resolved here
|--------------------------------------------------------------------------
*/
Route::get('/projects', [UserProjectController::class, 'index'])->name('user.projects.index');
Route::get('/projects/all', [UserProjectController::class, 'all'])->name('user.projects.all');
Route::get('/projects/{id}', [UserProjectController::class, 'show'])->name('user.projects.show');
Route::post('/projects/{id}/apply', [UserProjectController::class, 'store'])->name('user.projects.apply');
Route::post('/projects/{project}/sponsor', [UserProjectController::class, 'storeSponsorship'])
    ->middleware('auth')
    ->name('diaspora.sponsorship.store');
Route::get('/sponsorship/{sponsorship}/payment/', [UserProjectController::class, 'payment'])
    ->name('diaspora.sponsorship.payment');
Route::get('/project/payment/callback', [UserProjectController::class, 'handleCallback'])->name('project.sponsor.callback');

// "Create" form (the canonical create-project route)
Route::get('/project/create', [UserProjectController::class, 'create'])->name('user.projects.create');

// "Submit" form — previously also named user.projects.create (collision, now fixed)
Route::get('/user/projects/submit', [UserProjectController::class, 'create'])->name('user.projects.submit');
Route::post('/projects/submit', [UserProjectController::class, 'storeProject'])->name('user.projects.store');

/*
|--------------------------------------------------------------------------
| Quick Hire
|--------------------------------------------------------------------------
*/
Route::prefix('quick-hire')->name('quick-hire.')->group(function () {
    Route::get('/create', [QuickHireController::class, 'create'])->name('create');
    Route::post('/', [QuickHireController::class, 'store'])->name('store');
    Route::get('/talents-by-category/{category}', [QuickHireController::class, 'talentsByCategory'])->name('talents-by-category');
    Route::get('/{quickHire}/success', [QuickHireController::class, 'success'])->name('success');
});

/*
|--------------------------------------------------------------------------
| Demo Requests
|--------------------------------------------------------------------------
*/
Route::get('/demo-request', [DemoRequestController::class, 'create'])->name('demo.request');
Route::post('/request-demo', [DemoRequestController::class, 'store'])->name('demo.store');

/*
|--------------------------------------------------------------------------
| Diaspora Accounts
|--------------------------------------------------------------------------
*/
Route::prefix('diaspora')->group(function () {
    Route::get('/account/register', [DiasporaAccountController::class, 'create'])->name('diaspora.create');
    Route::post('/register', [DiasporaAccountController::class, 'store'])->name('diaspora.store');
    Route::post('/{diaspora}/upload-documents', [DiasporaAccountController::class, 'uploadDocuments']);
    Route::get('diaspora/register/success', [DiasporaAccountController::class, 'success'])->name('register.success');

    // TODO: these read/write actions have no auth middleware — consider adding
    // ->middleware('auth:admin') here as noted in the original comment.
    Route::get('/', [DiasporaAccountController::class, 'diasporaPage'])->name('diaspora.index');
    Route::get('/{id}', [DiasporaAccountController::class, 'show']);
    Route::post('/{id}/approve', [DiasporaAccountController::class, 'approve']);
    Route::post('/{id}/reject', [DiasporaAccountController::class, 'reject']);
});

/*
|--------------------------------------------------------------------------
| Subscriptions & Trials
|--------------------------------------------------------------------------
| Note: the two `auth` groups below both define user.subscription* names.
| Since both are middleware('auth'), the second block is effectively an
| unreachable duplicate registration — kept here as-is from the original
| file, but flagged for cleanup.
|--------------------------------------------------------------------------
*/
Route::middleware(['auth'])->group(function () {
    Route::post('/subscribe', [SubscriptionController::class, 'subscribe'])->name('subscribe');
});

Route::get('/payment/subscription/checkout/{subscription}', [SubscriptionController::class, 'checkout'])
    ->middleware('auth')
    ->name('payment.subscription.checkout');

Route::get('/payment/subscription/callback', [SubscriptionController::class, 'callback'])
    ->name('payment.subscription.callback');

Route::middleware(['auth'])->group(function () {
    Route::get('/user/subscription', [SubscriptionController::class, 'index'])->name('user.subscription');
    Route::get('/user/subscription/{subscription}', [SubscriptionController::class, 'show'])->name('user.subscription.show');
    Route::post('/user/subscription/{subscription}/cancel', [SubscriptionController::class, 'cancel'])->name('user.subscription.cancel');
    Route::get('/user/subscription/{subscription}/upgrade', [SubscriptionController::class, 'upgradeForm'])->name('user.subscription.upgrade.form');
    Route::post('/user/subscription/{subscription}/upgrade', [SubscriptionController::class, 'upgrade'])->name('user.subscription.upgrade');
    Route::post('/user/subscription/{subscription}/renew', [SubscriptionController::class, 'renew'])->name('user.subscription.renew');
    Route::post('/subscription/trial', [SubscriptionController::class, 'startTrial'])->name('subscription.trial');
    Route::get('/user/get/subscription/plan', [SubscriptionController::class, 'plan'])->name('user.subscription.plan');
});

Route::get('/start-trial', [SubscriptionController::class, 'start'])->name('trial.start');
Route::post('/activate-trial', [SubscriptionController::class, 'activate'])
    ->middleware('auth')
    ->name('trial.activate');

/*
|--------------------------------------------------------------------------
| Seller Onboarding
|--------------------------------------------------------------------------
*/
Route::get('/seller/apply', [SellerController::class, 'create'])->name('seller.create');
Route::post('/seller/store', [SellerController::class, 'store'])->name('seller.store');

Route::middleware(['auth', 'role:seller'])->group(function () {
    Route::get('seller/dashboard', [SellerPanelController::class, 'index'])->name('seller.dashboard');
    Route::get('seller/products', [SellerProductController::class, 'index'])->name('seller.products');
    Route::post('seller/products', [SellerProductController::class, 'store'])->name('seller.products.store');
    Route::put('seller/products', [SellerProductController::class, 'update'])->name('seller.products.update');
    Route::delete('seller/products', [SellerProductController::class, 'destroy'])->name('seller.products.destroy');
});

/*
|--------------------------------------------------------------------------
| Authenticated (any role) — Profile, Membership, Wallet
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->group(function () {
    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');
    });

    Route::post('/membership/upgrade', [MembershipController::class, 'upgradeToVerified'])->name('membership.upgrade');
    Route::post('/membership/upgrade/wallet', [MembershipController::class, 'upgradeWithWallet'])->name('membership.upgrade.wallet');
    Route::get('/membership/upgrade/flutterwave', [MembershipController::class, 'upgradeWithFlutter'])->name('membership.upgrade.flutterwave');
    Route::get('/membership/verify/callback', [MembershipController::class, 'callbackFlutter'])->name('membership.verify.callback');

    Route::get('/wallets', [WalletController::class, 'index'])->name('user.wallet.index');
    Route::post('/wallets/topup', [WalletController::class, 'topupRequest'])->name('user.wallet.topup');
    Route::get('/wallet/topup/{transaction}', [WalletController::class, 'showTopup'])->name('user.wallet.topup.show');
    Route::delete('/wallets/transaction/{id}', [WalletController::class, 'deleteTransaction'])->name('user.wallet.transaction.delete');
    Route::get('/wallets/topup/callback', [PaymentController::class, 'callback'])->name('user.wallet.callback');
});

/*
|--------------------------------------------------------------------------
| Role: user — Dashboard, Talents, Connections, Courses
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('user/dashboard', [App\Http\Controllers\UserPanel\DashboardController::class, 'dashboard'])->name('user.dashboard');
    Route::get('user/profile', [App\Http\Controllers\UserPanel\ProfileController::class, 'profile'])->name('user.profile');
    Route::post('user/profile/{id}/update', [App\Http\Controllers\UserPanel\ProfileController::class, 'updateProfile'])->name('user.profile.update');

    Route::get('user/talents', [UserPanelController::class, 'myTalents'])->name('user.talents.connected');
    Route::get('user/transactions', [UserPanelController::class, 'transactions'])->name('user.transactions');
    Route::get('user/notifications', [UserPanelController::class, 'notifications'])->name('user.notifications');
    Route::get('user/connections', [App\Http\Controllers\UserPanel\ProfileController::class, 'connections'])->name('user.connections');
    Route::get('user/connections/show/{id}', [App\Http\Controllers\UserPanel\ProfileController::class, 'showConnection'])->name('user.connections.show');
    Route::post('user/connections/request', [UserPanelController::class, 'sendConnectionRequest'])->name('connections.request');

    Route::get('user/courses', [App\Http\Controllers\UserPanel\CourseController::class, 'courses'])->name('user-panel.courses');
    Route::get('user/courses/{slug}', [App\Http\Controllers\UserPanel\CourseController::class, 'userCoursesShow'])->name('user-panel.courses.show');
});

/*
|--------------------------------------------------------------------------
| Talent Role — Dashboard, Profile, Skills, Stories, Courses, Jobs, Projects
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'role:talent'])->prefix('talent')->name('talent.')->group(function () {

    Route::get('/page/dashboard', [TalentDashboardController::class, 'dashboard'])->name('dashboard');

    // Profile
    Route::get('/get/profile', [TalentProfileController::class, 'index'])->name('get.profile');
    Route::put('/talent/profile/update/{id}', [TalentProfileController::class, 'update'])->name('profile.update');

    // Connection requests received by this talent
    // NOTE: renamed from connections.index / connections.respond — those names
    // collided with the dashboard-side connections routes further down.
    Route::get('/get/connections', [App\Http\Controllers\Talent\TalentConnectionController::class, 'connectionRequests'])->name('connections.requests.index');
    Route::patch('/get/connections/{id}/respond', [App\Http\Controllers\Talent\TalentConnectionController::class, 'respond'])->name('connections.requests.respond');

    // Announcements
    Route::get('/announcements', [TalentDashboardController::class, 'index'])->name('announcements.index');
    Route::get('/announcements/{announcement}', [TalentDashboardController::class, 'show'])->name('announcements.show');

    // Testimonials
    Route::get('/get/testimonials', [App\Http\Controllers\Talent\TestimonialController::class, 'index'])->name('testimonials.index');
    Route::post('/get/testimonials', [App\Http\Controllers\Talent\TestimonialController::class, 'store'])->name('testimonials.store');
    Route::put('/get/testimonials/{id}', [App\Http\Controllers\Talent\TestimonialController::class, 'update'])->name('testimonials.update');
    Route::delete('/get/testimonials/{id}', [App\Http\Controllers\Talent\TestimonialController::class, 'destroy'])->name('testimonials.destroy');

    // Skills
    Route::get('/skills', [TalentSkillController::class, 'index'])->name('skills');
    Route::post('/skills', [TalentSkillController::class, 'store'])->name('skills.store');
    Route::delete('/skills/{id}', [TalentSkillController::class, 'destroy'])->name('skills.destroy');

    // Stories
    Route::get('/page/get/stories', [TalentStoryController::class, 'index'])->name('page.stories.index');
    Route::get('/page/create/story', [TalentStoryController::class, 'create'])->name('page.stories.create');
    Route::post('/page/create/story', [TalentStoryController::class, 'store'])->name('page.stories.store');
    Route::get('/page/stories/{id}', [TalentStoryController::class, 'show'])->name('page.stories.show');
    Route::get('/page/stories/{id}/edit', [TalentStoryController::class, 'edit'])->name('page.stories.edit');
    Route::put('/page/stories/{id}', [TalentStoryController::class, 'update'])->name('page.stories.update');

    // Courses
    Route::get('/pages/courses', [TalentCourseController::class, 'index'])->name('courses.index');
    Route::get('/pages/get/courses/{id}', [TalentCourseController::class, 'show'])->name('courses.show');
    Route::get('/pages/courses/create', [TalentCourseController::class, 'create'])->name('courses.create');
    Route::post('/pages/courses/store', [TalentCourseController::class, 'store'])->name('courses.store');
    Route::get('/pages/courses/{id}/edit', [TalentCourseController::class, 'edit'])->name('courses.edit');
    Route::put('/pages/courses/{id}/update', [TalentCourseController::class, 'update'])->name('courses.update');
    Route::delete('/pages/courses/{id}/delete', [TalentCourseController::class, 'destroy'])->name('courses.destroy');
    Route::post('/pages/courses/lessons/store', [TalentCourseController::class, 'storeLesson'])->name('courses.lessons.store');
    Route::put('/pages/courses/lessons/{id}/update', [TalentCourseController::class, 'updateLesson'])->name('courses.lessons.update');
    Route::delete('/pages/courses/lessons/{id}/delete', [TalentCourseController::class, 'destroyLesson'])->name('courses.lessons.destroy');

    // Payments
    Route::get('/payments', [TalentDashboardController::class, 'payments'])->name('payments.index');
    Route::get('/payments/invoice/{id}', [TalentDashboardController::class, 'invoiceShow'])->name('payments.invoice');
    Route::get('/invoice/{id}/print', [TalentDashboardController::class, 'print'])->name('invoice.print');

    // Connections (dashboard side)
    Route::get('/connections', [TalentDashboardController::class, 'connections'])->name('connections.index');
    Route::get('/connections/show/{id}', [TalentDashboardController::class, 'showConnection'])->name('connections.show');
    Route::post('/connections/{id}/respond', [TalentDashboardController::class, 'respond'])->name('connections.respond');
    Route::post('/connections/{id}/accept', [TalentDashboardController::class, 'accept'])->name('connections.accept');

    // Wallet
    Route::get('/wallets', [TalentDashboardController::class, 'walletsIndex'])->name('wallets.index');

    // Jobs
    Route::get('/page/jobs', [TalentJobController::class, 'index'])->name('jobs.index');
    Route::get('/page/jobs/{job}/show', [TalentJobController::class, 'show'])->name('jobs.show');
    Route::get('/page/jobs/create', [TalentJobController::class, 'create'])->name('jobs.create');
    Route::post('/page/jobs/store', [TalentJobController::class, 'store'])->name('jobs.store');
    Route::get('/page/jobs/{job}/edit', [TalentJobController::class, 'edit'])->name('jobs.edit');
    Route::put('/page/jobs/{job}/update', [TalentJobController::class, 'update'])->name('jobs.update');
    Route::delete('/page/jobs/{job}/delete', [TalentJobController::class, 'destroy'])->name('jobs.destroy');
    Route::get('/page/jobs/{job}/applications', [TalentJobController::class, 'applications'])->name('jobs.applications');
    Route::post('/page/jobs/{job}/apply', [TalentJobController::class, 'applyJob'])->name('jobs.apply');

    // Events
    Route::get('/events', [TalentDashboardController::class, 'eventsIndex'])->name('events.index');
    Route::get('/events/{event}/tickets', [TalentDashboardController::class, 'eventTickets'])->name('events.tickets.index');

    // Projects
    Route::get('/pages/projects', [TalentProjectController::class, 'index'])->name('projects.index');
    Route::get('/pages/projects/{project}/applications', [TalentProjectController::class, 'projectApplications'])->name('projects.applications.index');
    Route::post('/pages/projects/{project}/apply', [TalentProjectController::class, 'applyProject'])->name('projects.apply');
    Route::get('/pages/projects/create', [TalentProjectController::class, 'create'])->name('projects.create');
    Route::post('/pages/projects/store', [TalentProjectController::class, 'store'])->name('projects.store');
    Route::get('/pages/projects/{project}/show', [TalentProjectController::class, 'show'])->name('projects.show');
    Route::get('/pages/projects/{project}/edit', [TalentProjectController::class, 'edit'])->name('projects.edit');
    Route::put('/pages/projects/{project}/update', [TalentProjectController::class, 'update'])->name('projects.update');
    Route::delete('/pages/projects/{project}/delete', [TalentProjectController::class, 'destroy'])->name('projects.destroy');
    Route::post('/applications/{id}/accept', [TalentProjectController::class, 'accept'])->name('applications.accept');
    Route::post('/applications/{id}/reject', [TalentProjectController::class, 'reject'])->name('applications.reject');

    // Talent's own product listings / becoming a seller
    Route::get('/pages/products', [TalentProductController::class, 'index'])->name('products.index');
    Route::get('/pages/products/{id}', [TalentProductController::class, 'show'])->name('products.show');
    Route::get('/pages/product/create', [TalentProductController::class, 'create'])->name('products.create');
    Route::post('/pages/products', [TalentProductController::class, 'storeProduct'])->name('products.store');
    Route::get('/pages/products/{id}/edit', [TalentProductController::class, 'edit'])->name('products.edit');
    Route::put('/pages/products/{id}', [TalentProductController::class, 'update'])->name('products.update');
    Route::put('/pages/products/{id}/status', [TalentProductController::class, 'updateStatus'])->name('products.updateStatus');
    Route::delete('/pages/products/{id}', [TalentProductController::class, 'destroy'])->name('products.destroy');
    Route::get('/pages/became_seller', [TalentProductController::class, 'becameSeller'])->name('products.seller');
    Route::post('/talent_seller/store', [TalentProductController::class, 'storeSeller'])->name('seller.register');
});

/*
|--------------------------------------------------------------------------
| Admin — Dashboard, Content, Commerce, Events, Jobs
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {

    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');

    // Talents
    Route::get('/talents', [AdminTalentController::class, 'index'])->name('talents.index');
    Route::get('/talent/create', [AdminTalentController::class, 'create'])->name('talents.create');
    Route::post('/talents', [AdminTalentController::class, 'store'])->name('talents.store');
    Route::put('/talent/update/{talent}', [AdminTalentController::class, 'update'])->name('talents.update');
    Route::put('/talents/{talent}/status', [AdminTalentController::class, 'updateStatus'])->name('talents.updateStatus');
    Route::put('/talents/{talent}/feature', [AdminTalentController::class, 'feature'])->name('talents.feature');
    Route::delete('/talents/delete/{talent}', [AdminTalentController::class, 'destroy'])->name('talents.destroy');
    Route::get('/talents/{talent}', [AdminTalentController::class, 'show'])->name('talents.show');
    Route::get('/talents/edit/{talent}', [AdminTalentController::class, 'edit'])->name('talents.edit');
    Route::put('/talents/{talent}/approve', [AdminTalentController::class, 'approve'])->name('talents.approve');
    Route::post('talents/bulk', [AdminTalentController::class, 'bulkAction'])->name('talents.bulk');

    // Users
    Route::get('/users', [AdminUserController::class, 'index'])->name('users.index');
    Route::post('/users', [AdminUserController::class, 'store'])->name('users.store');
    Route::get('/users/{user}', [AdminUserController::class, 'show'])->name('users.show');
    Route::put('/users/{user}', [AdminUserController::class, 'update'])->name('users.update');
    Route::patch('/users/{user}', [AdminUserController::class, 'update']);
    Route::delete('/users/{user}', [AdminUserController::class, 'destroy'])->name('users.destroy');

    // Content resources
    Route::resource('categories', AdminCategoryController::class);

    Route::resource('stories', AdminStoryController::class);
    Route::post('/reviews', [AdminStoryController::class, 'storeComment'])->name('reviews.store');
    Route::put('/stories/{story}/status', [AdminStoryController::class, 'updateStatus'])->name('stories.updateStatus');

    Route::resource('skills', AdminSkillController::class);
    Route::resource('banners', AdminBannerController::class);

    Route::resource('testimonials', AdminTestimonialController::class)->except(['edit', 'create']);
    Route::get('/testimonials/create', [AdminTestimonialController::class, 'create'])->name('testimonials.create');
    Route::get('/testimonials/{testimonial}/edit', [AdminTestimonialController::class, 'edit'])->name('testimonials.edit');

    Route::resource('announcements', AdminAnnouncementController::class);
    Route::put('/announcements/{id}/activate', [AdminAnnouncementController::class, 'activate'])->name('announcements.activate');
    Route::put('/announcements/{id}/deactivate', [AdminAnnouncementController::class, 'deactivate'])->name('announcements.deactivate');

    Route::resource('partners', AdminPartnerController::class)->only(['index', 'store', 'update', 'destroy']);

    // Payments
    Route::get('/payments', [AdminPaymentController::class, 'index'])->name('payments.index');
    Route::get('/payments/{id}', [AdminPaymentController::class, 'show'])->name('payments.show');
    Route::get('/payments/invoice/{id}', [AdminPaymentController::class, 'invoiceShow'])->name('payments.invoice');
    Route::delete('/payments/{id}', [AdminPaymentController::class, 'destroyPayment'])->name('payments.destroy');
    Route::get('/invoice/{id}/print', [AdminPaymentController::class, 'print'])->name('invoice.print');

    // Settings
    Route::get('/settings', [AdminDashboardController::class, 'index'])->name('settings.index');
    Route::put('/settings', [AdminDashboardController::class, 'update'])->name('settings.update');

    // Login activity
    Route::get('/login-activity', [AdminDashboardController::class, 'indexActivity'])->name('login-activity.index');

    // Talent connections
    Route::get('/connections', [AdminTalentConnectionController::class, 'index'])->name('connections');
    Route::get('/connections/show/{id}', [AdminTalentConnectionController::class, 'show'])->name('connections.show');
    Route::post('/connections/{id}/respond', [AdminTalentConnectionController::class, 'respond'])->name('connections.respond');
    Route::post('/connections/{id}/accept', [AdminTalentConnectionController::class, 'accept'])->name('connections.accept');

    // Courses & lessons
    Route::get('courses', [AdminCoursesController::class, 'index'])->name('courses.index');
    Route::get('courses/create', [AdminCoursesController::class, 'create'])->name('courses.create');
    Route::post('courses', [AdminCoursesController::class, 'store'])->name('courses.store');
    Route::get('courses/{slug}', [AdminCoursesController::class, 'show'])->name('courses.show');
    Route::get('courses/{id}/edit', [AdminCoursesController::class, 'edit'])->name('courses.edit');
    Route::put('courses/{id}', [AdminCoursesController::class, 'update'])->name('courses.update');
    Route::delete('courses/{id}', [AdminCoursesController::class, 'destroy'])->name('courses.destroy');
    Route::post('courses/feedback', [AdminCoursesController::class, 'storeFeedback'])->name('courses.feedback.store');
    Route::post('courses/lessons', [AdminCoursesController::class, 'storeLesson'])->name('courses.lessons.store');
    Route::get('courses/{course}/lessons', [AdminCoursesController::class, 'indexLessons'])->name('courses.lessons.index');
    Route::get('courses/{course}/lessons/create', [AdminCoursesController::class, 'createLesson'])->name('courses.lessons.create');
    Route::post('courses/{course}/lessons', [AdminCoursesController::class, 'storeLesson']); // duplicate action to courses.lessons.store above — no separate name needed
    Route::get('courses/{course}/lessons/{lesson}/edit', [AdminCoursesController::class, 'editLesson'])->name('courses.lessons.edit');
    Route::put('courses/{course}/lessons/{lesson}', [AdminCoursesController::class, 'updateLesson'])->name('courses.lessons.update');
    Route::delete('courses/{course}/lessons/{lesson}', [AdminCoursesController::class, 'destroyLesson'])->name('courses.lessons.destroy');

    // Sellers
    Route::get('/sellers', [SellerAdminController::class, 'index'])->name('sellers.index');
    Route::get('/sellers/{seller}', [SellerAdminController::class, 'show'])->name('sellers.show');
    Route::patch('/sellers/{seller}', [SellerAdminController::class, 'update'])->name('sellers.update');
    Route::delete('/sellers/{seller}', [SellerAdminController::class, 'destroy'])->name('sellers.destroy');
    Route::patch('/sellers/{seller}/status', [SellerAdminController::class, 'updateStatus'])->name('sellers.updateStatus');

    // Products & orders
    Route::get('/products', [ProductController::class, 'index'])->name('products.index');
    Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.view');
    Route::get('/product/create', [ProductController::class, 'create'])->name('products.create');
    Route::post('/products', [ProductController::class, 'store'])->name('products.store');
    Route::get('/products/{id}/edit', [ProductController::class, 'edit'])->name('products.edit');
    Route::put('/products/{id}', [ProductController::class, 'update'])->name('products.update');
    Route::put('/products/{id}/status', [ProductController::class, 'updateStatus'])->name('products.updateStatus');
    Route::delete('/products/{id}', [ProductController::class, 'destroy'])->name('products.destroy');
    Route::resource('product-categories', ProductCategoryController::class)->except(['create', 'edit', 'show']);

    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/orders/{order}', [OrderController::class, 'show'])->name('orders.show');
    Route::patch('/orders/{order}/confirm', [OrderController::class, 'confirm'])->name('orders.confirm');
    Route::patch('/orders/{order}/status', [OrderController::class, 'updateStatus'])->name('orders.status');

    // Projects
    Route::get('/projects', [AdminProjectController::class, 'index'])->name('projects.index');
    Route::get('/projects/create', [AdminProjectController::class, 'create'])->name('projects.create');
    Route::post('/projects', [AdminProjectController::class, 'store'])->name('projects.store');
    Route::get('/projects/{id}/edit', [AdminProjectController::class, 'edit'])->name('projects.edit');
    Route::put('/projects/{id}', [AdminProjectController::class, 'update'])->name('projects.update');
    Route::get('/projects/{id}', [AdminProjectController::class, 'show'])->name('projects.show');
    Route::post('/projects/{id}/verify', [AdminProjectController::class, 'verify'])->name('projects.verify');
    Route::delete('/projects/{id}', [AdminProjectController::class, 'destroy'])->name('projects.destroy');
    Route::post('/applications/{id}/accept', [AdminProjectController::class, 'accept'])->name('applications.accept');
    Route::post('/applications/{id}/reject', [AdminProjectController::class, 'reject'])->name('applications.reject');

    // Events & tickets
    Route::resource('events', AdminEventController::class);
    // NOTE: Route::resource('events', ...) already registers admin.events.show
    // for GET events/{event}. This explicit route hit the same action/name —
    // removed the duplicate ->name() call rather than deleting the route,
    // in case the /show suffix URL is linked to elsewhere.
    Route::get('events/{event}/show', [AdminEventController::class, 'show']);
    Route::get('events/{event}/tickets', [AdminEventController::class, 'index'])->name('tickets.index');
    Route::get('events/{event}/tickets/create', [AdminEventController::class, 'createTicket'])->name('tickets.create');
    Route::post('events/tickets', [AdminEventController::class, 'storeTicket'])->name('tickets.store');
    Route::put('tickets/{ticket}', [AdminEventController::class, 'updateTicket'])->name('tickets.update');
    Route::delete('tickets/{ticket}', [AdminEventController::class, 'destroyTicket'])->name('tickets.destroy');
    Route::get('tickets/{ticket}', [AdminEventController::class, 'showTicket'])->name('tickets.show');
    Route::get('tickets/{ticket}/show', [AdminEventController::class, 'showTicket']); // duplicate action to tickets.show above — no separate name needed
    Route::get('tickets/{ticket}/orders', [AdminEventController::class, 'ticketOrders'])->name('tickets.orders');

    // Event ticket orders
    // NOTE: Route::resource('event/orders', ...) auto-generated admin.orders.index
    // and admin.orders.show — colliding with the product-orders routes above
    // (OrderController). Registered explicitly under an event-orders.* namespace
    // instead to guarantee uniqueness.
    Route::get('event/orders', [AdminEventController::class, 'index'])->name('event-orders.index');
    Route::get('event/orders/{order}', [AdminEventController::class, 'show'])->name('event-orders.show');
    Route::delete('event/orders/{order}', [AdminEventController::class, 'destroy'])->name('event-orders.destroy');
    Route::get('event/orders/ticket/{ticket}', [AdminEventController::class, 'ordersByTicket'])->name('orders.byTicket');
    Route::get('event/orders/{order}/payment', [AdminEventController::class, 'paymentDetails'])->name('orders.payment');

    Route::resource('pricing-plans', PricingPlanController::class);

    // Demo requests
    Route::get('demo-requests', [AdminDemoRequestController::class, 'index'])->name('demo-requests.index');
    Route::get('demo-requests/{demoRequest}', [AdminDemoRequestController::class, 'show'])->name('demo-requests.show');
    Route::patch('demo-requests/{demoRequest}/confirm', [AdminDemoRequestController::class, 'confirm'])->name('demo-requests.confirm');
    Route::patch('demo-requests/{demoRequest}/cancel', [AdminDemoRequestController::class, 'cancel'])->name('demo-requests.cancel');
    Route::patch('demo-requests/{demoRequest}/complete', [AdminDemoRequestController::class, 'complete'])->name('demo-requests.complete');
    Route::delete('demo-requests/{demoRequest}', [AdminDemoRequestController::class, 'destroy'])->name('demo-requests.destroy');

    // Jobs
    Route::get('/jobs', [AdminJobController::class, 'index'])->name('jobs.index');
    Route::get('/jobs/create', [AdminJobController::class, 'create'])->name('jobs.create');
    Route::post('/jobs', [AdminJobController::class, 'store'])->name('jobs.store');
    Route::get('/jobs/{job}', [AdminJobController::class, 'show'])->name('jobs.show');
    Route::get('/jobs/{job}/edit', [AdminJobController::class, 'edit'])->name('jobs.edit');
    Route::put('/jobs/{job}', [AdminJobController::class, 'update'])->name('jobs.update');
    Route::delete('/jobs/{job}', [AdminJobController::class, 'destroy'])->name('jobs.destroy');
    Route::get('{job}/applications', [AdminJobController::class, 'applications'])->name('jobs.applications');
    Route::patch('applications/{id}/status', [AdminJobController::class, 'updateApplicationStatus'])->name('jobs.updateApplicationStatus');
    Route::get('job-categories', [AdminJobController::class, 'jobCategories'])->name('job-categories.index');
    Route::post('job-categories', [AdminJobController::class, 'storeJobCategory'])->name('job-categories.store');
    Route::put('job-categories/{id}', [AdminJobController::class, 'updateJobCategory'])->name('job-categories.update');
    Route::delete('job-categories/{id}', [AdminJobController::class, 'deleteJobCategory'])->name('job-categories.destroy');

    // Wallets
    Route::get('/wallets', [WalletController::class, 'walletsIndex'])->name('wallets.index');
});

/*
|--------------------------------------------------------------------------
| Dev / Ops Utility Routes
|--------------------------------------------------------------------------
| Consider gating these behind an env check (app()->environment('local'))
| or removing before production — running migrate:fresh over HTTP is a
| standing risk if this route is ever reachable in production.
|--------------------------------------------------------------------------
*/
Route::get('/run-migrations-seeders', function () {
    try {
        Artisan::call('migrate:fresh', ['--force' => true]);
        Artisan::call('db:seed', ['--force' => true]);

        return redirect()->route('user.home')->with('success', 'Migration and seeders ran successfully!');
    } catch (\Exception $e) {
        return "Error: " . $e->getMessage();
    }
});

Route::get('/run-migrations', function () {
    try {
        Artisan::call('migrate', ['--force' => true]);

        return redirect()->route('user.home')->with('success', 'Migration and seeders ran successfully!');
    } catch (\Exception $e) {
        return "Error: " . $e->getMessage();
    }
});

Route::get('/git-pull', [HomeController::class, 'pull']);

Route::get('/test', function () {
    $talents = Talent::all();
    return view('user-page.slide', compact('talents'));
});

Route::get('/testing', function () {
    $talents = Talent::all();
    return view('user-page.testing', compact('talents'));
});

require __DIR__ . '/auth.php';