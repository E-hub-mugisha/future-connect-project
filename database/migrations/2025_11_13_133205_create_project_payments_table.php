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
        Schema::create('project_payments', function (Blueprint $table) {
            $table->id();
            // Related sponsorship
            $table->foreignId('project_sponsorship_id')->constrained('project_sponsorships')->onDelete('cascade');
            
            // Diaspora user reference (optional if needed)
            $table->foreignId('diaspora_account_id')->constrained('diaspora_accounts')->onDelete('cascade');

            $table->decimal('amount', 12, 2);
            $table->string('currency', 10)->default('USD');
            $table->string('payment_gateway')->default('flutterwave'); // or other gateways
            $table->string('transaction_id')->nullable()->unique(); // gateway transaction reference
            $table->enum('status', ['pending', 'successful', 'failed'])->default('pending');
            $table->json('response')->nullable(); // store gateway response if needed
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_payments');
    }
};
