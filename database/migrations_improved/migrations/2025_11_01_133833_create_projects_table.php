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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('title');
            $table->string('category')->nullable();
            $table->text('description');
            $table->decimal('budget_amount', 14, 2)->nullable();
            $table->string('budget_currency', 10)->default('RWF');
            $table->string('location')->nullable();
            $table->enum('status', ['pending', 'approved', 'closed'])->default('pending');
            $table->boolean('verified')->default(false);
            $table->timestamps();
            $table->softDeletes();

            $table->index('status');
            $table->index('verified');
            $table->index(['status', 'verified'], 'projects_status_verified_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
