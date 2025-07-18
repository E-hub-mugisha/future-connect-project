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
        Schema::create('story_payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('story_id'); // Assuming this is the ID of the story related to the payment
            $table->string('tx_ref')->unique();      // Transaction reference
            $table->string('flw_ref')->nullable();   // Flutterwave reference
            $table->string('status');                // success, failed, etc.
            $table->decimal('amount', 10, 2);
            $table->string('currency');
            $table->string('email');
            $table->unsignedBigInteger('video_id');  // or nullable if optional
            $table->foreign('story_id')->references('id')->on('stories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('story_payments');
    }
};
