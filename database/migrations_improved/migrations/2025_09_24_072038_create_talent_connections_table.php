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
            $table->enum('status', ['pending', 'accepted', 'rejected', 'cancelled'])->default('pending');
            $table->text('message')->nullable();
            $table->text('response')->nullable();
            $table->timestamps();

            $table->foreign('talent_id')->references('id')->on('talents')->onDelete('cascade');

            $table->index('status');
            $table->index(['talent_id', 'status'], 'connections_talent_status_idx');
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
