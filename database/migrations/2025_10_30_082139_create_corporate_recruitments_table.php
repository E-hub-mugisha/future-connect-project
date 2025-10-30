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
        Schema::create('corporate_recruitments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id'); // references sellers or users table
            $table->string('title');
            $table->text('description');
            $table->string('skills')->nullable(); // comma-separated or JSON
            $table->string('category')->nullable();
            $table->string('region')->nullable();
            $table->decimal('fee', 10, 2)->default(0); // posting/subscription fee
            $table->enum('status', ['pending', 'active', 'closed'])->default('pending');
            $table->timestamps();

            $table->foreign('company_id')->references('id')->on('sellers')->onDelete('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('corporate_recruitments');
    }
};
