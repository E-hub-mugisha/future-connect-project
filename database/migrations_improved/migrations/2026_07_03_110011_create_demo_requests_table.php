<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('demo_requests', function (Blueprint $table) {
            $table->id();

            $table->string('full_name');
            $table->string('work_email');
            $table->string('phone')->nullable();

            $table->string('company_name');
            $table->string('company_size')->nullable();   // e.g. "1-10", "11-50", "51-200", "200+"
            $table->string('role')->nullable();            // job title

            $table->date('preferred_date')->nullable();
            $table->string('preferred_time')->nullable();  // e.g. "morning", "afternoon"

            $table->text('message')->nullable();           // what they want to see

            $table->enum('status', ['pending', 'scheduled', 'completed', 'cancelled'])
                ->default('pending');

            $table->timestamps();

            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('demo_requests');
    }
};