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
        Schema::create('stories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('talent_id')->constrained('talents')->onDelete('cascade');
            $table->string('title');
            $table->text('content')->nullable();
            $table->string('media')->nullable(); // image/video URL or file path
            $table->string('thumbnail')->nullable(); // thumbnail image URL or file path
            $table->string('slug')->unique(); // URL-friendly version of the title
            // BUGFIX: column was never defined before the FK constraint was added
            // (previously $table->foreign('category_id') pointed at a non-existent column).
            $table->foreignId('category_id')->nullable()->constrained('categories')->nullOnDelete();
            $table->string('tags')->nullable(); // comma-separated tags
            $table->enum('status', ['pending', 'approved', 'rejected', 'published'])->default('pending');
            $table->unsignedInteger('views')->default(0);
            $table->timestamps();

            $table->index('status');
            $table->index(['talent_id', 'status'], 'stories_talent_status_idx');
            $table->index(['status', 'created_at'], 'stories_status_created_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stories');
    }
};
