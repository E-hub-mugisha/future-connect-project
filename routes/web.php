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

    Route::get('/', 'index')->name('user.home');
    Route::get('/about', 'about')->name('user.about');
    Route::get('/contact', 'contact')->name('user.contact');
    Route::get('/categories', 'categories')->name('user.categories');
    Route::get('/register_as_talent', 'RegisterAsTalent')->name('user.register_as_talent');
    Route::post('/talent/register', 'storeTalent')->name('talent.register');
    Route::get('/talent-matched', 'matchedTalents')->name('talent.match');

    Route::get('/talents', 'talents')->name('user.talents');
    Route::get('/talent/{id}', 'showTalents');
    Route::get('/talents/category/{slug}', 'getTalentByCategory');
    Route::get('/categories-with-talent-count', 'withTalentCount');
    Route::get('/search', 'search')->name('talent.search');
    Route::post('/talent/feedback', 'storeFeedback')->name('talent.feedback.store');


    Route::get('/skills', 'skills')->name('user.skills');
    Route::get('/skills/category/{slug}', 'getByCategory');
    Route::get('/skills/{slug}', 'skillDetails');
    Route::get('/skills/related/{categoryId}', 'relatedSkills');

    Route::get('/stories', 'stories')->name('user.stories');
    Route::get('/story/category/{slug}', 'getStoryByCategory');
    Route::get('/testimonials/random', 'random');

    Route::get('/upload-story', 'uploadStory')->name('user.upload-story');
    Route::post('/upload-story/store', 'uploadStoryStory')->name('user.upload-story.store');

    Route::get('/announcements', 'announcements')->name('user.announcements');
    Route::get('/announcement/{id}', 'announcementDetails')->name('user.announcement.details');
});

/**
 * -----------------------
 * Users with Auth Middleware
 * -----------------------
 */
Route::middleware('auth')->group(function () {

    Route::get('/dashboard', function () {
        return view('dashboard');
    })->middleware(['verified'])->name('dashboard');

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
Route::post('/stories/comments', [HomeController::class, 'storeStoryComment'])->name('comments.store');

/**
 * -----------------------
 * Admin Routes
 * -----------------------
 */

Route::middleware('auth')->group(function () {

    Route::get('/admin/dashboard', [AdminDashboardController::class, 'dashboard'])->name('admin.dashboard');

    Route::get('/admin/talents', [AdminTalentController::class, 'index'])->name('admin.talents');
    Route::put('/admin/talent/{id}/update', [AdminTalentController::class, 'update'])->name('admin.talents.update');
    // web.php
    Route::post('/admin/talents', [AdminTalentController::class, 'store'])->name('admin.talents.store');

    Route::put('/talents/{id}/status', [AdminTalentController::class, 'updateStatus'])->name('admin.talents.updateStatus');
    Route::put('/talents/{id}/feature', [AdminTalentController::class, 'feature'])->name('talents.feature');
    Route::delete('/admin/talents/{id}', [AdminTalentController::class, 'destroy'])->name('talents.destroy');

    Route::apiResource('/admin/users', AdminUserController::class);
    Route::apiResource('/admin/categories', AdminCategoryController::class);

    // List all stories
    Route::get('/admin/stories', [AdminStoryController::class, 'index'])->name('admin.stories.index');

    // Show the form to create a new story
    Route::get('/admin/stories/create', [AdminStoryController::class, 'create'])->name('admin.stories.create');

    // Store a new story
    Route::post('/admin/stories', [AdminStoryController::class, 'store'])->name('admin.stories.store');

    // Show a specific story
    Route::get('/admin/stories/{story}', [AdminStoryController::class, 'show'])->name('admin.stories.show');

    // Show the form to edit a story
    Route::get('/admin/stories/{story}/edit', [AdminStoryController::class, 'edit'])->name('admin.stories.edit');


    // Update a specific story
    Route::put('/admin/stories/{story}', [AdminStoryController::class, 'update'])->name('admin.stories.update');

    Route::patch('/admin/stories/{story}', [AdminStoryController::class, 'update']);

    // Delete a specific story
    Route::delete('/admin/stories/{story}', [AdminStoryController::class, 'destroy'])->name('admin.stories.destroy');


    Route::get('/admin/skills', [AdminSkillController::class, 'index'])->name('admin.skills.index');
    Route::get('/admin/skills/create', [AdminSkillController::class, 'create'])->name('admin.skills.create');
    Route::post('/admin/skills', [AdminSkillController::class, 'store'])->name('admin.skills.store');
    Route::get('/admin/skills/{story}', [AdminSkillController::class, 'show'])->name('admin.skills.show');
    Route::get('/admin/skills/{story}/edit', [AdminSkillController::class, 'edit'])->name('admin.skills.edit');
    Route::put('/admin/skills/{story}', [AdminSkillController::class, 'update'])->name('admin.skills.update');
    Route::delete('/admin/skills/{story}', [AdminSkillController::class, 'destroy'])->name('admin.skills.destroy');

    Route::get('/admin/banners', [AdminBannerController::class,'index'])->name('admin.banners.index');
    Route::post('/admin/banners', [AdminBannerController::class, 'store'])->name('admin.banners.store');
    Route::get('/admin/banners/create', [AdminBannerController::class, 'create'])->name('admin.banners.create');
    Route::get('/admin/banners/{banner}', [AdminBannerController::class, 'show'])->name('admin.banners.show');
    Route::get('/admin/banners/{banner}/edit', [AdminBannerController::class, 'edit'])->name('admin.banners.edit');
    Route::put('/admin/banners/{banner}', [AdminBannerController::class, 'update'])->name('admin.banners.update');
    Route::delete('/admin/banners/{banner}', [AdminBannerController::class, 'destroy'])->name('admin.banners.destroy');

    Route::apiResource('/admin/testimonials', AdminTestimonialController::class);

    Route::get('/admin/announcements', [AdminAnnouncementController::class, 'index'])->name('admin.announcements.index');
    Route::get('/admin/announcements/create', [AdminAnnouncementController::class, 'create'])->name('admin.announcements.create');
    Route::post('/admin/announcements', [AdminAnnouncementController::class, 'store'])->name('admin.announcements.store');
    Route::get('/admin/announcements/{announcement}', [AdminAnnouncementController::class, 'show'])->name('admin.announcements.show');
    Route::get('/admin/announcements/{announcement}/edit', [AdminAnnouncementController::class, 'edit'])->name('admin.announcements.edit');
    Route::put('/admin/announcements/{announcement}', [AdminAnnouncementController::class, 'update'])->name('admin.announcements.update');
    Route::delete('/admin/announcements/{announcement}', [AdminAnnouncementController::class, 'destroy'])->name('admin.announcements.destroy');

    Route::get('/admin/partners', [AdminPartnerController::class, 'index'])->name('admin.partners.index');
    Route::post('/admin/partners', [AdminPartnerController::class, 'store'])->name('admin.partners.store');
    Route::put('/admin/partners/{partner}', [AdminPartnerController::class, 'update'])->name('admin.partners.update');
    Route::delete('/admin/partners/{partner}', [AdminPartnerController::class, 'destroy'])->name('admin.partners.destroy');

});
/**
 * -----------------------
 * Auth Routes
 * -----------------------
 */
require __DIR__ . '/auth.php';
