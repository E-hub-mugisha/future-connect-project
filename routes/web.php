<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\AdminAnnouncementController;
use App\Http\Controllers\Admin\AdminBannerController;
use App\Http\Controllers\Admin\AdminTalentController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminTestimonialController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TalentController;
use App\Http\Controllers\users\HomeController;
use App\Http\Controllers\AuthController;

Route::get('/', [HomeController::class, 'index'])->name('user.home');
Route::get('/about', [HomeController::class, 'about'])->name('user.about');
Route::get('/contact', [HomeController::class, 'contact'])->name('user.contact');
Route::get('/categories', [HomeController::class, 'categories'])->name('user.categories');
Route::get('/register_as_talent', [HomeController::class, 'RegisterAsTalent'])->name('user.register_as_talent');
Route::post('/talent/register', [HomeController::class, 'storeTalent'])->name('talent.register');
Route::get('/stories', [HomeController::class, 'stories'])->name('user.stories');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/talents', [HomeController::class, 'talents'])->name('user.talents');
Route::get('/talent/{id}', [HomeController::class, 'showTalents']);
Route::get('/announcements', [HomeController::class, 'announcements'])->name('user.announcements');
Route::get('/categories-with-talent-count', [HomeController::class, 'withTalentCount']);
Route::get('/talent/skills/{id}', [App\Http\Controllers\users\HomeController::class, 'TalentSkillDetails']);
Route::get('/talents/category/{slug}', [HomeController::class, 'getTalentByCategory']);
Route::post('/skills/{id}/reviews', [App\Http\Controllers\users\HomeController::class, 'storeReview']);
Route::get('/skills/category/{slug}', [HomeController::class, 'getByCategory']);
Route::get('/skills/{slug}', [HomeController::class, 'skillDetails']);
Route::get('/skills/related/{categoryId}', [HomeController::class, 'relatedSkills']);
Route::get('/story/category/{slug}', [HomeController::class, 'getStoryByCategory']);

Route::get('/story-details/{slug}', [App\Http\Controllers\users\HomeController::class, 'storyDetails']);
Route::get('/testimonials/random', [HomeController::class, 'random']);

Route::post('/stories/comments', [App\Http\Controllers\users\HomeController::class, 'storeStoryComment']);


Route::put('/talents/{id}/status', [AdminTalentController::class, 'updateStatus']);
Route::put('/talents/{id}/feature', [AdminTalentController::class, 'feature']);

Route::apiResource('users', AdminUserController::class);
Route::apiResource('/admin/categories', AdminCategoryController::class);
Route::apiResource('/admin/stories', \App\Http\Controllers\Admin\AdminStoryController::class);
Route::apiResource('skills', \App\Http\Controllers\Admin\AdminSkillController::class);

Route::apiResource('banners', AdminBannerController::class);
Route::apiResource('testimonials', AdminTestimonialController::class);
Route::resource('admin/announcements', AdminAnnouncementController::class);

require __DIR__.'/auth.php';
