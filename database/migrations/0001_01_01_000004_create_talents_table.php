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
        Schema::create('talents', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->foreignId('category_id')->nullable()->constrained('categories')->onDelete('set null');
            $table->string('description')->nullable();
            $table->string('image')->nullable();
            $table->string('address')->nullable();
            $table->string('language')->nullable();
            $table->boolean('matched')->default(false); 
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->boolean('featured')->default(false);
            $table->enum('level', ['beginner','intermediate','advanced'])
                  ->default('beginner');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('talents');
    }
};
