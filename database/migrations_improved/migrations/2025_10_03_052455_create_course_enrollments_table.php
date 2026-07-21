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
        Schema::create('course_enrollments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained('courses')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->integer('progress')->default(0); // %
            $table->enum('status', ['active', 'completed', 'canceled'])->default('active');
            $table->timestamps();

            $table->unique(['user_id', 'course_id'], 'enrollments_user_course_unique');
            $table->index('status');
            $table->index(['course_id', 'status'], 'enrollments_course_status_idx');
            $table->index(['user_id', 'status'], 'enrollments_user_status_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_enrollments');
    }
};
