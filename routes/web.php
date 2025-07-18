<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TalentController;
use App\Http\Controllers\users\HomeController;
use App\Http\Controllers\Admin\AdminTalentController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\AdminBannerController;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminStoryController;
use App\Http\Controllers\Admin\AdminSkillController;
use App\Http\Controllers\Admin\AdminTestimonialController;
use App\Http\Controllers\Admin\AdminAnnouncementController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminPartnerController;
use App\Http\Controllers\Admin\AdminPaymentController;
use App\Http\Controllers\Talent\TalentDashboardController;
use App\Http\Controllers\Talent\TalentProfileController;
use App\Http\Controllers\Talent\TalentStoryController;
use App\Http\Controllers\Talent\TalentSkillController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\users\PaymentController as UsersPaymentController;

/**
 * -----------------------
 * Public User Routes
 * -----------------------
 */


Route::controller(HomeController::class)->group(function () {

    // 🏠 Home & General Pages
    Route::get('/', 'index')->name('user.home');
    Route::get('/about', 'about')->name('user.about');
    Route::get('/contact', 'contact')->name('user.contact');
    Route::post('/contact/send', 'contactSend')->name('contact.send');
    Route::get('/categories', 'categories')->name('user.categories');
    Route::get('/categories-with-talent-count', 'withTalentCount');
    Route::get('/testimonials/random', 'random');

    // 👤 Talent Registration & Matching
    Route::get('/register_as_talent', 'RegisterAsTalent')->name('user.register_as_talent');
    Route::post('/talent/register', 'storeTalent')->name('talent.register');
    Route::get('/talent-matched', 'matchedTalents')->name('talent.match');
    Route::post('/talent/feedback', 'storeFeedback')->name('talent.feedback.store');
    Route::post('/support-talent', 'storeSupport')->name('support.talent');

    // 🌟 Talents
    Route::get('/talents', 'talents')->name('user.talents');
    Route::get('/talent/{id}', 'showTalents')->name('user.talent.details');
    Route::get('/talents/category/{slug}', 'getTalentByCategory')->name('user.talents.category');
    Route::get('/search', 'search')->name('talent.search');

    // 🧠 Skills
    Route::get('/skills', 'skills')->name('user.skills');
    Route::get('/skills/category/{slug}', 'getByCategory');
    Route::get('/skills/{slug}', 'skillDetails');
    Route::get('/skills/related/{categoryId}', 'relatedSkills');

    // 📖 Stories
    Route::get('/stories', 'stories')->name('user.stories'); // main view
    Route::get('/story/category/{slug}', 'getStoryByCategory');
    Route::get('/stories/search', 'storyFilter')->name('stories.filter'); // filtered results
    Route::get('/upload-story', 'uploadStory')->name('user.upload-story');
    Route::post('/upload-story/store', 'uploadStoryStory')->name('user.upload-story.store');
    Route::post('/log-view', 'logView')->name('log.view');
    

    // 📢 Announcements
    Route::get('/announcements', 'announcements')->name('user.announcements');
    Route::get('/announcement/{id}', 'announcementDetails')->name('user.announcement.details');

    // blogs
    Route::get('/blogs', 'blogs')->name('user.blogs');
    Route::get('/blog/{slug}', 'blogDetails')->name('user.blog.details');

    // FAQs
    Route::get('/faq', 'faq')->name('user.faq');

    Route::get('/how-it-works', 'howItWorks')->name('user.how-it-works');
    Route::get('/privacy-policy', 'privacyPolicy')->name('user.privacy-policy');
    Route::get('/terms-condition', 'termsCondition')->name('user.terms-condition');
    Route::get('/donation-policy', 'donationPolicy')->name('user.donation-policy');

    Route::get('/video', function () {
        return view('user-page.video');
    });
});

Route::get('/video/verify-access/{story_id}/{video_id}', [UsersPaymentController::class, 'showEmailForm'])->name('video.access.verify');
Route::post('/video/verify-email', [UsersPaymentController::class, 'verifyEmail'])->name('video.verifyEmail');
Route::get('/story/payment/{story_id}/{video_id}', [UsersPaymentController::class, 'checkout'])->name('payment.checkout');
// Route::post('/story/payment/pay', [UsersPaymentController::class, 'pay'])->name('payment.process');
Route::get('/story/watch/{video_id}', [UsersPaymentController::class, 'watch'])->name('video.play');
Route::get('/story/payment/callback', [UsersPaymentController::class, 'handleCallback'])->name('payment.callback');

/**
 * -----------------------
 * Users with Auth Middleware
 * -----------------------
 */
Route::middleware('auth')->group(function () {

    Route::get('/dashboard', [AdminDashboardController::class, 'dashboard'])->middleware(['verified'])->name('dashboard');

    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');
    });
});

/**
 * -----------------------
 * Talent Specific Routes
 * -----------------------
 */
Route::get('/talent/skills/{id}', [HomeController::class, 'TalentSkillDetails']);
Route::post('/skills/{id}/reviews', [HomeController::class, 'storeReview']);
Route::get('/story-details/{slug}', [HomeController::class, 'storyDetails'])->name('story.details');
Route::post('/stories/comments', [HomeController::class, 'storeStoryComment'])->name('story.comment.store');

/**
 * -----------------------
 * Admin Routes
 * -----------------------
 */

Route::middleware(['auth', 'role:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        // Dashboard
        Route::get('/dashboard', [AdminDashboardController::class, 'dashboard'])->name('dashboard');

        // Talents
        Route::get('/talents', [AdminTalentController::class, 'index'])->name('talents');
        Route::post('/talents', [AdminTalentController::class, 'store'])->name('talents.store');
        Route::put('/talent/update/{id}', [AdminTalentController::class, 'update'])->name('talents.update');
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
        Route::get('/categories', [AdminCategoryController::class, 'index'])->name('categories.index');
        Route::get('/categories/create', [AdminCategoryController::class, 'create'])->name('categories.create');
        Route::post('/categories', [AdminCategoryController::class, 'store'])->name('categories.store');
        Route::get('/categories/{category}', [AdminCategoryController::class, 'show'])->name('categories.show');
        Route::get('/categories/{category}/edit', [AdminCategoryController::class, 'edit'])->name('categories.edit');
        Route::put('/categories/{category}', [AdminCategoryController::class, 'update'])->name('categories.update');
        Route::patch('/categories/{category}', [AdminCategoryController::class, 'update']);
        Route::delete('/categories/{category}', [AdminCategoryController::class, 'destroy'])->name('categories.destroy');

        // Stories
        Route::resource('stories', AdminStoryController::class)->except(['edit', 'create']);
        Route::get('/stories/create', [AdminStoryController::class, 'create'])->name('stories.create');
        Route::get('/stories/{story}/edit', [AdminStoryController::class, 'edit'])->name('stories.edit');

        // Skills
        Route::resource('skills', AdminSkillController::class)->except(['edit', 'create']);
        Route::get('/skills/create', [AdminSkillController::class, 'create'])->name('skills.create');
        Route::get('/skills/{story}/edit', [AdminSkillController::class, 'edit'])->name('skills.edit');

        // Banners
        Route::get('/banners', [AdminBannerController::class, 'index'])->name('banners.index');
        Route::get('/banners/create', [AdminBannerController::class, 'create'])->name('banners.create');
        Route::post('/banners/store', [AdminBannerController::class, 'store'])->name('banners.store');
        Route::get('/banners/{banner}', [AdminBannerController::class, 'show'])->name('banners.show');
        Route::get('/banners/{banner}/edit', [AdminBannerController::class, 'edit'])->name('banners.edit');
        Route::put('/banners/{banner}', [AdminBannerController::class, 'update'])->name('banners.update');
        Route::delete('/banners/{banner}', [AdminBannerController::class, 'destroy'])->name('banners.destroy');

        // Testimonials
        Route::resource('testimonials', AdminTestimonialController::class)->except(['edit', 'create']);
        Route::get('/testimonials/create', [AdminTestimonialController::class, 'create'])->name('testimonials.create');
        Route::get('/testimonials/{testimonial}/edit', [AdminTestimonialController::class, 'edit'])->name('testimonials.edit');

        // Announcements
        Route::resource('announcements', AdminAnnouncementController::class)->except(['edit', 'create']);
        Route::get('/announcements/create', [AdminAnnouncementController::class, 'create'])->name('announcements.create');
        Route::get('/announcements/{announcement}/edit', [AdminAnnouncementController::class, 'edit'])->name('announcements.edit');

        // Partners
        Route::get('/partners', [AdminPartnerController::class, 'index'])->name('partners.index');
        Route::post('/partners', [AdminPartnerController::class, 'store'])->name('partners.store');
        Route::put('/partners/{partner}', [AdminPartnerController::class, 'update'])->name('partners.update');
        Route::delete('/partners/{partner}', [AdminPartnerController::class, 'destroy'])->name('partners.destroy');

        // Payments
        Route::get('/payments', [AdminPaymentController::class, 'index'])->name('payments.index');
        Route::get('/payments/{id}', [AdminPaymentController::class, 'show'])->name('payments.show');
        // Additional payment management methods can be added here
    });

// Talent routes
Route::middleware(['auth', 'role:talent'])
    ->prefix('talent')
    ->name('talent.')
    ->group(function () {

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
        Route::get('/skills', [TalentSkillController::class, 'index'])->name('skills.index');
        Route::post('/skills', [TalentSkillController::class, 'store'])->name('skills.store');
        Route::delete('/skills/{id}', [TalentSkillController::class, 'destroy'])->name('skills.destroy');

        // Stories
        Route::get('/stories', [TalentStoryController::class, 'index'])->name('stories.index');
        Route::get('/stories/{id}', [TalentStoryController::class, 'show'])->name('stories.show');
    });


/**
 * -----------------------
 * Auth Routes
 * -----------------------
 */
require __DIR__ . '/auth.php';
