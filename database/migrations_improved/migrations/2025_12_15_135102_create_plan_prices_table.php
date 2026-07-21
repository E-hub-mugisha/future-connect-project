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
        Schema::create('plan_prices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pricing_plan_id')->constrained('pricing_plans')->cascadeOnDelete();
            $table->enum('billing_cycle', ['monthly','annually','trial'])->default('monthly');
            $table->decimal('price', 8, 2);
            $table->timestamps();

            $table->unique(['pricing_plan_id', 'billing_cycle'], 'plan_prices_plan_cycle_unique');
            $table->index('billing_cycle');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan_prices');
    }
};
