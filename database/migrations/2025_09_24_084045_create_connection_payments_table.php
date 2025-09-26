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
        Schema::create('connection_payments', function (Blueprint $table) {
            $table->id();
            // Related Connection Request
            $table->foreignId('connection_id')
                  ->nullable()
                  ->constrained('talent_connections')
                  ->onDelete('cascade');

            // User making the payment
            $table->foreignId('user_id')
                  ->nullable()
                  ->constrained('users')
                  ->onDelete('set null');

            // Amount & Currency
            $table->decimal('amount', 12, 2)->default(0);
            $table->string('currency', 10)->default('RWF');

            // Payment Details
            $table->string('payment_method')->nullable(); // e.g. flutterwave, stripe, mobile_money
            $table->string('transaction_id')->nullable(); // Gateway transaction reference
            $table->enum('status', ['pending', 'success', 'failed', 'cancelled'])->default('pending');

            $table->string('tx_ref')->unique();      // Transaction reference
            $table->string('flw_ref')->nullable(); 
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('connection_payments');
    }
};
