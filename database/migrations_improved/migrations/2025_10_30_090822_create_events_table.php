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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedBigInteger('organizer_id'); // user or company creating the event
            $table->text('description')->nullable();
            $table->string('venue')->nullable();
            $table->enum('type', ['online', 'hybrid'])->default('online');
            $table->dateTime('start_time');
            $table->dateTime('end_time');
            $table->integer('capacity')->nullable();
            $table->string('image')->nullable();
            $table->timestamps();
            $table->foreign('organizer_id')->references('id')->on('users')->onDelete('cascade');

            $table->index('start_time');
            $table->index('type');
            $table->index(['start_time', 'type'], 'events_date_type_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
