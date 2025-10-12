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
use App\Http\Controllers\Admin\AdminPartnerController;
use App\Http\Controllers\Admin\AdminPaymentController;
use App\Http\Controllers\Admin\AdminTalentConnectionController;
use App\Http\Controllers\Admin\AdminTalentController;
use App\Http\Controllers\Admin\AdminTestimonialController;
use App\Http\Controllers\Talent\TalentDashboardController;
use App\Http\Controllers\Talent\TalentProfileController;
use App\Http\Controllers\Talent\TalentStoryController;
use App\Http\Controllers\Talent\TalentSkillController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\TalentConnectionController;
use App\Http\Controllers\users\PaymentController as UsersPaymentController;
use App\Http\Controllers\users\UserPanelController;
use App\Models\Course;
use App\Models\Talent;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::get('/', [HomeController::class, 'index'])->name('user.home');
Route::get('/about', [HomeController::class, 'about'])->name('user.about');
Route::get('/contact', [HomeController::class, 'contact'])->name('user.contact');
Route::post('/contact/send', [HomeController::class, 'contactSend'])->name('contact.send');
Route::get('/categories', [HomeController::class, 'categories'])->name('user.categories');
Route::get('/categories-with-talent-count', [HomeController::class, 'withTalentCount']);
Route::get('/testimonials/random', [HomeController::class, 'random']);
Route::get('/register_as_talent', [HomeController::class, 'RegisterAsTalent'])->name('user.register_as_talent');
Route::post('/talent/register', [HomeController::class, 'storeTalent'])->name('talent.register');
Route::get('/talent-matched', [HomeController::class, 'matchedTalents'])->name('talent.match');
Route::post('/talent/feedback', [HomeController::class, 'storeFeedback'])->name('talent.feedback.store');
Route::post('/support-talent', [HomeController::class, 'storeSupport'])->name('support.talent');
Route::get('/talents', [HomeController::class, 'talents'])->name('user.talents');
Route::get('/talent/{id}', [HomeController::class, 'showTalents'])->name('user.talent.details');
Route::get('/talents/category/{slug}', [HomeController::class, 'getTalentByCategory'])->name('user.talents.category');
Route::get('/search', [HomeController::class, 'search'])->name('talent.search');
Route::get('/talent/{id}/stories', [HomeController::class, 'talentStories'])->name('talent.stories');
Route::get('/skills', [HomeController::class, 'skills'])->name('user.skills');
Route::get('/skills/category/{slug}', [HomeController::class, 'getByCategory']);
Route::get('/skills/{slug}', [HomeController::class, 'skillDetails']);
Route::get('/skills/related/{categoryId}', [HomeController::class, 'relatedSkills']);
Route::post('/skills/{id}/reviews', [HomeController::class, 'storeReview'])->name('reviews.store');
Route::get('/stories', [HomeController::class, 'stories'])->name('user.stories');
Route::get('/story-details/{slug}', [HomeController::class, 'storyDetails'])->name('user.storyDetails');
Route::post('/story/comment/store', [HomeController::class, 'storeStoryComment'])->name('story.comment.store');
Route::get('/story/category/{slug}', [HomeController::class, 'getStoryByCategory']);
Route::get('/stories/search', [HomeController::class, 'storyFilter'])->name('stories.filter');
Route::get('/upload-story', [HomeController::class, 'uploadStory'])->name('user.upload-story');
Route::post('/upload-story/store', [HomeController::class, 'uploadStoryStory'])->name('user.upload-story.store');
Route::post('/log-view', [HomeController::class, 'logView'])->name('log.view');
Route::get('/announcements', [HomeController::class, 'announcements'])->name('user.announcements');
Route::get('/announcement/{id}', [HomeController::class, 'announcementDetails'])->name('user.announcement.details');
Route::post('/announcement/{announcement}/comment', [HomeController::class, 'addComment'])->name('announcement.comment')->middleware('auth');

Route::get('/blogs', [HomeController::class, 'blogs'])->name('user.blogs');
Route::get('/blog/{slug}', [HomeController::class, 'blogDetails'])->name('user.blog.details');
Route::get('/faq', [HomeController::class, 'faq'])->name('user.faq');
Route::get('/how-it-works', [HomeController::class, 'howItWorks'])->name('user.how-it-works');
Route::get('/privacy-policy', [HomeController::class, 'privacyPolicy'])->name('user.privacy-policy');
Route::get('/terms-condition', [HomeController::class, 'termsCondition'])->name('user.terms-condition');
Route::get('/donation-policy', [HomeController::class, 'donationPolicy'])->name('user.donation-policy');
Route::get('/video', fn() => view('user-page.video'));

/*
|--------------------------------------------------------------------------
| Video Payment Routes
|--------------------------------------------------------------------------
*/
Route::get('/video/verify-access/{story_id}/{video_id}', [UsersPaymentController::class, 'showEmailForm'])->name('video.access.verify');
Route::post('/video/verify-email', [UsersPaymentController::class, 'verifyEmail'])->name('video.verifyEmail');
Route::get('/story/payment/{story_id}/{video_id}', [UsersPaymentController::class, 'checkout'])->name('payment.checkout');
Route::get('/story/watch/{video_id}/{story_id}', [UsersPaymentController::class, 'watch'])->name('video.play');
Route::get('/story/payment/callback', [UsersPaymentController::class, 'handleCallback'])->name('payment.callback');

Route::get('/connection-room', [TalentConnectionController::class, 'index'])->name('talent.connections-room');
Route::get('/connection/{talent}', [TalentConnectionController::class, 'show'])->name('talent.profile.show');
Route::post('/connection/{talent}/request', [TalentConnectionController::class, 'store'])->name('talent.connections.request')->middleware('auth');
Route::get('/connection/{id}/payment', [TalentConnectionController::class, 'paymentChoice'])->name('connections.payment.choice');
Route::post('/connections/{id}/pay-now', [TalentConnectionController::class, 'payNow'])->name('connections.payment.now');
Route::post('/connections/{id}/pay-later', [TalentConnectionController::class, 'payLater'])->name('connections.payment.later');
Route::get('/connection/payment/callback', [TalentConnectionController::class, 'handleCallback'])->name('connection.payment.callback');

Route::get('/courses', [CourseController::class, 'index'])->name('user.courses');
Route::get('/course-details/{slug}', [CourseController::class, 'show'])->name('user.courses.show');
Route::get('/course/category/{slug}', [CourseController::class, 'category'])->name('user.courses.category');
Route::post('/courses/{id}/review', [CourseController::class, 'storeReview'])
    ->name('courses.review')
    ->middleware('auth');
Route::get('/courses/category/{slug}', [CourseController::class, 'getCoursesByCategory'])->name('user.courses.category');
Route::post('/courses/{id}/enroll', [CourseController::class, 'enroll'])
    ->name('user.courses.enroll')
    ->middleware('auth');

// web.php
Route::post('/courses/{course}/pay', [CourseController::class, 'pay'])->name('user.courses.pay');
Route::get('/courses/{course}/success', [CourseController::class, 'paymentSuccess'])->name('user.courses.success');
Route::get('/course/payment/callback', [CourseController::class, 'handleCallback'])->name('course.payment.callback');

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->group(function () {
    // Profile routes
    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');
    });
});

Route::get('/test', function () {
    $talents = Talent::all();
    return view('user-page.slide', compact('talents'));
});

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {

    // Dashboard
    Route::get('/dashboard', [AdminDashboardController::class, 'dashboard'])->name('dashboard');

    // Talents
    Route::get('/talents', [AdminTalentController::class, 'index'])->name('talents');
    Route::post('/talents', [AdminTalentController::class, 'store'])->name('talents.store');
    Route::patch('/talent/update/{id}', [AdminTalentController::class, 'update'])->name('talents.update');
    Route::put('/talents/{id}/status', [AdminTalentController::class, 'updateStatus'])->name('talents.updateStatus');
    Route::put('/talents/{id}/feature', [AdminTalentController::class, 'feature'])->name('talents.feature');
    Route::delete('/talents/{id}', [AdminTalentController::class, 'destroy'])->name('talents.destroy');
    Route::get('/talents/{id}', [AdminTalentController::class, 'show'])->name('talents.view');
    Route::put('/talents/{id}/approve', [AdminTalentController::class, 'approve'])->name('talents.approve');

    // Users
    Route::get('/users', [AdminUserController::class, 'index'])->name('users.index');
    Route::post('/users', [AdminUserController::class, 'store'])->name('users.store');
    Route::get('/users/{user}', [AdminUserController::class, 'show'])->name('users.show');
    Route::put('/users/{user}', [AdminUserController::class, 'update'])->name('users.update');
    Route::patch('/users/{user}', [AdminUserController::class, 'update']);
    Route::delete('/users/{user}', [AdminUserController::class, 'destroy'])->name('users.destroy');

    // Categories
    Route::resource('categories', AdminCategoryController::class);

    // Stories
    Route::resource('stories', AdminStoryController::class);

    // Skills
    Route::resource('skills', AdminSkillController::class);

    // Banners
    Route::resource('banners', AdminBannerController::class);

    // Testimonials
    Route::resource('testimonials', AdminTestimonialController::class)->except(['edit', 'create']);
    Route::get('/testimonials/create', [AdminTestimonialController::class, 'create'])->name('testimonials.create');
    Route::get('/testimonials/{testimonial}/edit', [AdminTestimonialController::class, 'edit'])->name('testimonials.edit');

    // Announcements
    Route::resource('announcements', AdminAnnouncementController::class);

    // Partners
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

    // Login Activity
    Route::get('/login-activity', [AdminDashboardController::class, 'indexActivity'])->name('login-activity.index');

    Route::get('/connections', [AdminTalentConnectionController::class, 'index'])->name('connections');
    Route::get('/connections/show/{id}', [AdminTalentConnectionController::class, 'show'])->name('connections.show');
    Route::post('/connections/{id}/respond', [AdminTalentConnectionController::class, 'respond'])
        ->name('connections.respond');
    Route::post('/connections/{id}/accept', [AdminTalentConnectionController::class, 'accept'])
        ->name('connections.accept');

    Route::get('courses', [AdminCoursesController::class, 'index'])->name('courses.index');
    Route::get('courses/create', [AdminCoursesController::class, 'create'])->name('courses.create');
    Route::post('courses', [AdminCoursesController::class, 'store'])->name('courses.store');
    Route::get('courses/{slug}', [AdminCoursesController::class, 'show'])->name('courses.show');
    Route::get('courses/{id}/edit', [AdminCoursesController::class, 'edit'])->name('courses.edit');
    Route::put('courses/{id}', [AdminCoursesController::class, 'update'])->name('courses.update');
    Route::delete('courses/{id}', [AdminCoursesController::class, 'destroy'])->name('courses.destroy');
    Route::post('courses/feedback', [AdminCoursesController::class, 'storeFeedback'])
        ->name('courses.feedback.store');
    // Admin Courses Lessons Routes
    Route::post('courses/lessons', [AdminCoursesController::class, 'storeLesson'])
        ->name('courses.lessons.store');
});

/*
|--------------------------------------------------------------------------
| Talent Routes
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'role:talent'])->prefix('talent')->name('talent.')->group(function () {

    // Dashboard
    Route::get('/page/dashboard', [TalentDashboardController::class, 'dashboard'])->name('dashboard');

    // Profile
    Route::get('/profile', [TalentProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [TalentProfileController::class, 'update'])->name('profile.update');

    // Announcements
    Route::get('/announcements', [TalentDashboardController::class, 'index'])->name('announcements.index');
    Route::get('/announcements/{announcement}', [TalentDashboardController::class, 'show'])->name('announcements.show');

    // Testimonials
    Route::get('/testimonials', [TalentDashboardController::class, 'index'])->name('testimonials.index');
    Route::post('/testimonials', [TalentDashboardController::class, 'store'])->name('testimonials.store');

    // Skills
    Route::get('/skills', [TalentSkillController::class, 'index'])->name('skills');
    Route::post('/skills', [TalentSkillController::class, 'store'])->name('skills.store');
    Route::delete('/skills/{id}', [TalentSkillController::class, 'destroy'])->name('skills.destroy');

    // Stories
    Route::get('get/talent/stories', [TalentStoryController::class, 'index'])
        ->name('page.stories');
    Route::get('talents/stories/{id}', [TalentStoryController::class, 'show'])->name('page.stories.show');
});

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('user/dashboard', [UserPanelController::class, 'dashboard'])->name('user.dashboard');
    Route::get('user/profile', [UserPanelController::class, 'profile'])->name('user.profile');
    Route::post('user/profile/update', [UserPanelController::class, 'updateProfile'])->name('profile.update');

    Route::get('user/talents', [UserPanelController::class, 'myTalents'])->name('user.talents.connected');
    Route::get('user/connections/show/{id}', [UserPanelController::class, 'showConnection'])->name('user.connections.show');
    Route::get('user/transactions', [UserPanelController::class, 'transactions'])->name('user.transactions');
    Route::get('user/notifications', [UserPanelController::class, 'notifications'])->name('user.notifications');
    Route::get('user/connections', [UserPanelController::class, 'connections'])->name('user.connections');
    Route::post('user/connections/request', [UserPanelController::class, 'sendConnectionRequest'])->name('connections.request');

    Route::get('user/courses', [UserPanelController::class, 'userCourses'])->name('user.courses');
    Route::get('user/courses/{slug}', [UserPanelController::class, 'userCoursesShow'])->name('user-panel.courses.show');
});

require __DIR__ . '/auth.php';
