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
        Schema::create('diaspora_accounts', function (Blueprint $table) {
            $table->id();
            // Optional link to a registered platform account
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            // Basic Identity
            $table->string('first_name', 120);
            $table->string('last_name', 120);
            $table->string('display_name', 150)->nullable();

            // Contact Info
            $table->string('email', 255)->unique();
            $table->string('phone', 40)->unique();
            $table->string('country', 100)->nullable();
            $table->string('city', 100)->nullable();

            // Verification & KYC
            $table->string('passport_number', 80)->nullable()->unique();
            $table->string('id_document_path')->nullable(); // File path for passport/ID
            $table->string('address_proof_path')->nullable(); // File path for proof of address

            // Profile Details
            $table->string('occupation', 150)->nullable();
            $table->text('bio')->nullable();
            $table->enum('purpose', ['sponsor', 'investor', 'mentor', 'partner', 'other'])->nullable();
            $table->string('preferred_currency', 10)->default('USD');

            // Preferences
            $table->json('sponsorship_preferences')->nullable(); // stores ['scholarship', 'mentor', 'seed']
            $table->json('links')->nullable(); // LinkedIn, website, etc.
            $table->string('preferred_contact', 30)->default('email');
            $table->boolean('newsletter_opt_in')->default(false);

            // Security
            $table->string('password')->nullable(); // store hashed password
            $table->enum('verification_status', ['pending', 'verified', 'rejected'])->default('pending');
            $table->text('verification_notes')->nullable();

            // Audit fields
            $table->timestamp('verified_at')->nullable();
            $table->foreignId('verified_by')->nullable()->constrained('users')->nullOnDelete();

            // Timestamps
            $table->timestamps();

            $table->index('verification_status');
            $table->index('purpose');
            $table->index(['verification_status', 'purpose'], 'diaspora_status_purpose_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('diaspora_accounts');
    }
};
