<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CartSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();
        $productIds = DB::table('products')->pluck('id')->all();

        foreach ($productIds as $i => $productId) {
            DB::table('carts')->insert([
                'user_id' => $userIds[$i % count($userIds)],
                'product_id' => $productId,
                'quantity' => rand(1, 4),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
