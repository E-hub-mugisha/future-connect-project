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
        Schema::create('user_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('pricing_plan_id')->constrained('pricing_plans')->cascadeOnDelete();
            $table->enum('billing_cycle', ['monthly', 'annually']);
            $table->decimal('price', 8, 2);
            $table->date('starts_at');
            $table->date('ends_at');
            $table->enum('status', ['pending','trialing','active','cancelled','expired'])->default('active');
            $table->timestamp('cancelled_at')->nullable();
            $table->boolean('auto_renew')->default(true);
            $table->boolean('is_trial')->default(false);
            $table->timestamp('trial_ends_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_subscriptions');
    }
};
