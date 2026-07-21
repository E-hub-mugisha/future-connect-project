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
        Schema::create('quick_hires', function (Blueprint $table) {
            $table->id();

            // Who is hiring (nullable — guests can submit a quick hire too)
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();

            // What kind of talent they need
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();

            // Optional talent they picked from the suggestions step
            $table->foreignId('talent_id')->nullable()->constrained('talents')->nullOnDelete();

            // Step 1 — project basics
            $table->string('title');
            $table->text('description');

            // Step 2 — scope & budget
            $table->enum('budget_type', ['fixed', 'hourly'])->default('fixed');
            $table->decimal('budget_min', 12, 2)->nullable();
            $table->decimal('budget_max', 12, 2)->nullable();
            $table->string('timeline')->nullable();          // e.g. "Less than 1 week", "1-4 weeks"
            $table->string('experience_level')->nullable();  // beginner | intermediate | expert
            $table->json('skills')->nullable();               // ["Laravel","React",...]

            // Step 4 — contact details
            $table->string('client_name');
            $table->string('client_email');
            $table->string('client_phone')->nullable();
            $table->string('company_name')->nullable();

            // Lifecycle
            $table->enum('status', [
                'pending',      // just submitted, not yet reviewed
                'matched',      // a preferred talent was attached
                'contacted',    // ops/talent has reached out to the client
                'in_progress',  // work started
                'completed',
                'cancelled',
            ])->default('pending');

            $table->timestamps();

            $table->index(['category_id', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quick_hires');
    }
};
