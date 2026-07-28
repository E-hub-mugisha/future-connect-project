<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Handicrafts & Basketry', 'Imigongo Art', 'Textiles & Clothing',
            'Farm Produce & Agro-products', 'Furniture & Woodwork', 'Beauty & Cosmetics',
            'Jewelry & Accessories', 'Leather Goods', 'Food & Beverages', 'Electronics Accessories',
        ];

        foreach ($categories as $name) {
            DB::table('product_categories')->insert([
                'name' => $name,
                'slug' => Str::slug($name),
                'description' => 'Quality products made or sourced by verified Rwandan sellers on FutureConnect.',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
