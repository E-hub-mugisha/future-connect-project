<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('site_name')->default('Future Connect');
            $table->string('logo')->nullable();
            $table->string('default_language')->default('en');
            $table->string('timezone')->default('UTC');
            $table->string('contact_email')->nullable();
            $table->string('contact_phone')->nullable();
            $table->text('contact_address')->nullable();
            $table->string('facebook_link')->nullable();
            $table->string('twitter_link')->nullable();
            $table->string('instagram_link')->nullable();
            $table->string('linkedin_link')->nullable();
            $table->boolean('registration_open')->default(true);
            $table->boolean('enable_notifications')->default(true);
            $table->timestamps();
        });

        // Insert default settings row
        DB::table('settings')->insert([
            'site_name' => 'Future Connect',
            'default_language' => 'en',
            'timezone' => 'UTC',
            'registration_open' => true,
            'enable_notifications' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
