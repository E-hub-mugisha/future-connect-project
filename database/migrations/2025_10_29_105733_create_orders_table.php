<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();

            // Nullable => guest checkout. Present => account checkout.
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();

            // Contact details — always filled (from account or guest form),
            // so the order/invoice is self-contained even if the user later
            // changes their profile info or the guest never registers.
            $table->string('customer_name');
            $table->string('customer_email');
            $table->string('customer_phone'); // Rwandan format, e.g. 07XXXXXXXX

            // Shipping / location — follows the Terra Province > District > Sector pattern
            $table->string('province');
            $table->string('district');
            $table->string('sector');
            $table->string('cell')->nullable();
            $table->string('shipping_address');

            // Payment
            $table->enum('payment_method', ['momo', 'airtel', 'cash'])->default('cash');
            $table->string('payment_phone')->nullable(); // MoMo/Airtel number if not cash

            $table->decimal('subtotal', 12, 2);
            $table->decimal('total_amount', 12, 2);

            $table->enum('status', ['pending', 'processing', 'completed', 'cancelled'])
                ->default('pending');

            $table->text('notes')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};