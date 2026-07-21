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
        Schema::create('project_sponsorships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained('projects')->onDelete('cascade');
            // Optional link if the sponsor is a registered diaspora account
            $table->foreignId('diaspora_account_id')->nullable()->constrained('diaspora_accounts')->nullOnDelete();
            $table->string('name');
            $table->string('email');
            $table->decimal('amount', 12, 2); // pledged amount of interest, not a processed payment
            $table->string('currency', 10)->default('USD');
            $table->text('message')->nullable();
            $table->enum('status', ['pending', 'confirmed', 'cancelled'])->default('pending');
            $table->timestamps();

            $table->index('status');
            $table->index(['project_id', 'status'], 'sponsorships_project_status_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_sponsorships');
    }
};
