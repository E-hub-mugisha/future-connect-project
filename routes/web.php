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

    // 📢 Announcements
    Route::get('/announcements', 'announcements')->name('user.announcements');
    Route::get('/announcement/{id}', 'announcementDetails')->name('user.announcement.details');
});


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

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {

    // Dashboard
    Route::get('/dashboard', [AdminDashboardController::class, 'dashboard'])->name('dashboard');

    /*
    |--------------------------------------------------------------------------
    | Talents
    |--------------------------------------------------------------------------
    */
    Route::get('/talents', [AdminTalentController::class, 'index'])->name('talents');
    Route::post('/talents', [AdminTalentController::class, 'store'])->name('talents.store');
    Route::put('/talent/update/{id}', [AdminTalentController::class, 'update'])->name('talents.update');
    Route::put('/talents/{id}/status', [AdminTalentController::class, 'updateStatus'])->name('talents.updateStatus');
    Route::put('/talents/{id}/feature', [AdminTalentController::class, 'feature'])->name('talents.feature');
    Route::delete('/talents/{id}', [AdminTalentController::class, 'destroy'])->name('talents.destroy');

    /*
    |--------------------------------------------------------------------------
    | Users & Categories
    |--------------------------------------------------------------------------
    */
    // Users - Manually Defined API Resource Routes (no create/edit views)
    Route::get('/users', [AdminUserController::class, 'index'])->name('users.index');
    Route::post('/users', [AdminUserController::class, 'store'])->name('users.store');
    Route::get('/users/{user}', [AdminUserController::class, 'show'])->name('users.show');
    Route::put('/users/{user}', [AdminUserController::class, 'update'])->name('users.update');
    Route::patch('/users/{user}', [AdminUserController::class, 'update']); // optional
    Route::delete('/users/{user}', [AdminUserController::class, 'destroy'])->name('users.destroy');


    // Categories - Manually Defined Resource Routes
    Route::get('/categories', [AdminCategoryController::class, 'index'])->name('categories.index');
    Route::get('/categories/create', [AdminCategoryController::class, 'create'])->name('categories.create');
    Route::post('/categories', [AdminCategoryController::class, 'store'])->name('categories.store');
    Route::get('/categories/{category}', [AdminCategoryController::class, 'show'])->name('categories.show');
    Route::get('/categories/{category}/edit', [AdminCategoryController::class, 'edit'])->name('categories.edit');
    Route::put('/categories/{category}', [AdminCategoryController::class, 'update'])->name('categories.update');
    Route::patch('/categories/{category}', [AdminCategoryController::class, 'update']); // optional if PATCH is used
    Route::delete('/categories/{category}', [AdminCategoryController::class, 'destroy'])->name('categories.destroy');


    /*
    |--------------------------------------------------------------------------
    | Stories
    |--------------------------------------------------------------------------
    */
    Route::get('/stories', [AdminStoryController::class, 'index'])->name('stories.index');
    Route::get('/stories/create', [AdminStoryController::class, 'create'])->name('stories.create');
    Route::post('/stories', [AdminStoryController::class, 'store'])->name('stories.store');
    Route::get('/stories/{story}', [AdminStoryController::class, 'show'])->name('stories.show');
    Route::get('/stories/{story}/edit', [AdminStoryController::class, 'edit'])->name('stories.edit');
    Route::put('/stories/{story}', [AdminStoryController::class, 'update'])->name('stories.update');
    Route::patch('/stories/{story}', [AdminStoryController::class, 'update']); // optional
    Route::delete('/stories/{story}', [AdminStoryController::class, 'destroy'])->name('stories.destroy');

    /*
    |--------------------------------------------------------------------------
    | Skills
    |--------------------------------------------------------------------------
    */
    Route::get('/skills', [AdminSkillController::class, 'index'])->name('skills.index');
    Route::get('/skills/create', [AdminSkillController::class, 'create'])->name('skills.create');
    Route::post('/skills', [AdminSkillController::class, 'store'])->name('skills.store');
    Route::get('/skills/{story}', [AdminSkillController::class, 'show'])->name('skills.show');
    Route::get('/skills/{story}/edit', [AdminSkillController::class, 'edit'])->name('skills.edit');
    Route::put('/skills/{story}', [AdminSkillController::class, 'update'])->name('skills.update');
    Route::delete('/skills/{story}', [AdminSkillController::class, 'destroy'])->name('skills.destroy');

    /*
    |--------------------------------------------------------------------------
    | Banners
    |--------------------------------------------------------------------------
    */
    Route::get('/banners', [AdminBannerController::class, 'index'])->name('banners.index');
    Route::get('/banners/create', [AdminBannerController::class, 'create'])->name('banners.create');
    Route::post('/banners', [AdminBannerController::class, 'store'])->name('banners.store');
    Route::get('/banners/{banner}', [AdminBannerController::class, 'show'])->name('banners.show');
    Route::get('/banners/{banner}/edit', [AdminBannerController::class, 'edit'])->name('banners.edit');
    Route::put('/banners/{banner}', [AdminBannerController::class, 'update'])->name('banners.update');
    Route::delete('/banners/{banner}', [AdminBannerController::class, 'destroy'])->name('banners.destroy');

    /*
    |--------------------------------------------------------------------------
    | Testimonials
    |--------------------------------------------------------------------------
    */
    Route::get('/testimonials', [AdminTestimonialController::class, 'index'])->name('testimonials.index');
    Route::get('/testimonials/create', [AdminTestimonialController::class, 'create'])->name('testimonials.create');
    Route::post('/testimonials', [AdminTestimonialController::class, 'store'])->name('testimonials.store');
    Route::get('/testimonials/{testimonial}', [AdminTestimonialController::class, 'show'])->name('testimonials.show');
    Route::get('/testimonials/{testimonial}/edit', [AdminTestimonialController::class, 'edit'])->name('testimonials.edit');
    Route::put('/testimonials/{testimonial}', [AdminTestimonialController::class, 'update'])->name('testimonials.update');
    Route::delete('/testimonials/{testimonial}', [AdminTestimonialController::class, 'destroy'])->name('testimonials.destroy');
    /*
    |--------------------------------------------------------------------------
    | Announcements
    |--------------------------------------------------------------------------
    */
    Route::get('/announcements', [AdminAnnouncementController::class, 'index'])->name('announcements.index');
    Route::get('/announcements/create', [AdminAnnouncementController::class, 'create'])->name('announcements.create');
    Route::post('/announcements', [AdminAnnouncementController::class, 'store'])->name('announcements.store');
    Route::get('/announcements/{announcement}', [AdminAnnouncementController::class, 'show'])->name('announcements.show');
    Route::get('/announcements/{announcement}/edit', [AdminAnnouncementController::class, 'edit'])->name('announcements.edit');
    Route::put('/announcements/{announcement}', [AdminAnnouncementController::class, 'update'])->name('announcements.update');
    Route::delete('/announcements/{announcement}', [AdminAnnouncementController::class, 'destroy'])->name('announcements.destroy');

    /*
    |--------------------------------------------------------------------------
    | Partners
    |--------------------------------------------------------------------------
    */
    Route::get('/partners', [AdminPartnerController::class, 'index'])->name('partners.index');
    Route::post('/partners', [AdminPartnerController::class, 'store'])->name('partners.store');
    Route::put('/partners/{partner}', [AdminPartnerController::class, 'update'])->name('partners.update');
    Route::delete('/partners/{partner}', [AdminPartnerController::class, 'destroy'])->name('partners.destroy');
});

/**
 * -----------------------
 * Auth Routes
 * -----------------------
 */
require __DIR__ . '/auth.php';
