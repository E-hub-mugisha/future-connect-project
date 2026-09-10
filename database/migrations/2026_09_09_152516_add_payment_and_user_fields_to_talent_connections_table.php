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
        Schema::table('talent_connections', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->after('talent_id');
            $table->string('phone')->nullable()->after('email');

            $table->enum('payment_status', [
                'unpaid',
                'pending',
                'paid',
                'failed',
                'cancelled'
            ])->default('unpaid')->after('status');

            $table->string('payment_reference')->nullable()->after('payment_status');
            $table->decimal('amount', 12, 2)->default(0)->after('payment_reference');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('set null');

            $table->index('payment_status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('talent_connections', function (Blueprint $table) {
            //
        });
    }
};
