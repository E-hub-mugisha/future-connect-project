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
        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->foreignId('talent_id')->constrained('talents')->onDelete('cascade');
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->string('tags')->nullable(); // comma-separated tags
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->enum('level', ['Beginner', 'Intermediate', 'Advanced', 'Expert'])->default('beginner');
            $table->timestamps();

            $table->index('status');
            $table->index('level');
            $table->index(['category_id', 'status'], 'skills_category_status_idx');
            $table->index(['talent_id', 'status'], 'skills_talent_status_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skills');
    }
};
