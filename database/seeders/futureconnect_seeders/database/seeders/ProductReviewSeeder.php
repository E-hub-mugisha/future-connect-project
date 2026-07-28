<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductReviewSeeder extends Seeder
{
    public function run(): void
    {
        $productIds = DB::table('products')->pluck('id')->all();
        $userIds = DB::table('users')->pluck('id')->all();

        foreach ($productIds as $i => $productId) {
            DB::table('product_reviews')->insert([
                'product_id' => $productId,
                'user_id' => $userIds[$i % count($userIds)],
                'rating' => rand(3, 5),
                'comment' => 'Great quality product, exactly as described and delivered on time.',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
