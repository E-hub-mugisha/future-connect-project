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
        Schema::create('talent_connections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('talent_id');    // The talent being connected to
            $table->unsignedBigInteger('user_id');      // The requester (sponsor/visitor)
            $table->string('status')->default('pending'); // pending, accepted, declined
            $table->decimal('amount', 10, 2)->default(0); // payment amount
            $table->enum('payment_status', ['paid', 'unpaid'])->default('unpaid');
            $table->text('message');
            $table->text('response')->nullable();
            $table->timestamps();

            $table->foreign('talent_id')->references('id')->on('talents')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('talent_connections');
    }
};
