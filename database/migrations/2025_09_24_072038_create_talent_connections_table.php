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
            $table->string('name');
            $table->string('email');
            $table->string('status')->default('pending'); // pending, accepted, declined
            $table->text('message');
            $table->text('response')->nullable();
            $table->timestamps();

            $table->foreign('talent_id')->references('id')->on('talents')->onDelete('cascade');
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
