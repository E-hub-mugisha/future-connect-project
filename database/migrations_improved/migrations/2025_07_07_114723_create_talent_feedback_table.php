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
        Schema::create('talent_feedback', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('talent_id');
            $table->string('name');
            $table->string('email')->nullable();
            $table->tinyInteger('rating'); // 1 to 5
            $table->text('comment')->nullable();
            $table->timestamps();

            $table->foreign('talent_id')->references('id')->on('talents')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('talent_feedback');
    }
};
