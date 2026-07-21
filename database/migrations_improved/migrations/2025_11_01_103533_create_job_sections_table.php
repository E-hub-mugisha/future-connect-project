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
        Schema::create('job_sections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_category_id')->nullable()->constrained('job_categories')->nullOnDelete();
            $table->string('title');
            $table->text('description');
            $table->string('location')->nullable();
            $table->enum('type', ['full-time', 'part-time', 'contract', 'internship', 'remote', 'hybrid'])->nullable();
            $table->enum('experience_level', ['entry', 'junior', 'mid', 'senior', 'lead', 'executive'])->nullable();
            $table->string('salary_range')->nullable(); // e.g. 50000-80000
            $table->json('skills')->nullable();
            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();

            $table->index('type');
            $table->index('experience_level');
            $table->index('location');
            $table->index(['job_category_id', 'type'], 'jobs_cat_type_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_sections');
    }
};
