<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('course_feedback', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained('courses')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->tinyInteger('rating')->default(0); // 1-5
            $table->text('comment')->nullable();
            $table->timestamps();

            $table->unique(['user_id', 'course_id'], 'course_feedback_user_course_unique');
            $table->index('rating');
            $table->index(['course_id', 'rating'], 'course_feedback_course_rating_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_feedback');
    }
};
