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
        Schema::create('job_section_applications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('job_section_id');
            $table->unsignedBigInteger('user_id');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->text('cover_letter')->nullable();
            $table->string('resume')->nullable();
            $table->enum('status', ['pending', 'reviewed', 'accepted', 'rejected'])->default('pending');
            $table->timestamps();
            $table->foreign('job_section_id')->references('id')->on('job_sections')->onDelete('cascade');
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_section_applications');
    }
};
