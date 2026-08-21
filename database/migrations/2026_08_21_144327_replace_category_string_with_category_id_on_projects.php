<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->foreignId('category_id')
                ->nullable()
                ->after('category')
                ->constrained()
                ->nullOnDelete();
        });

        // Backfill: turn each distinct existing `category` string into a real
        // Category row, then point projects at it via category_id.
        DB::table('projects')
            ->whereNotNull('category')
            ->select('category')
            ->distinct()
            ->get()
            ->each(function ($row) {
                $categoryId = DB::table('categories')->insertGetId([
                    'name'       => $row->category,
                    'slug'       => Str::slug($row->category),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                DB::table('projects')
                    ->where('category', $row->category)
                    ->update(['category_id' => $categoryId]);
            });

        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn('category');
        });
    }

    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->string('category')->nullable()->after('category_id');
        });

        DB::table('projects')
            ->join('categories', 'projects.category_id', '=', 'categories.id')
            ->update(['projects.category' => DB::raw('categories.name')]);

        Schema::table('projects', function (Blueprint $table) {
            $table->dropConstrainedForeignId('category_id');
        });
    }
};