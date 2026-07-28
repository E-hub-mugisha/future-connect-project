<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $sellerIds = DB::table('sellers')->pluck('id')->all();
        $productCategoryIds = DB::table('product_categories')->pluck('id')->all();

        $products = [
            ['name' => 'Handwoven Agaseke Basket', 'price' => 8000, 'stock' => 40],
            ['name' => 'Imigongo Wall Art Panel', 'price' => 25000, 'stock' => 15],
            ['name' => 'Kitenge Fabric (6 Yards)', 'price' => 12000, 'stock' => 60],
            ['name' => 'Organic Rwandan Coffee Beans (1kg)', 'price' => 6500, 'stock' => 100],
            ['name' => 'Handmade Wooden Stool', 'price' => 30000, 'stock' => 20],
            ['name' => 'Shea Butter Body Cream', 'price' => 4500, 'stock' => 80],
            ['name' => 'Beaded Maasai-Style Necklace', 'price' => 9000, 'stock' => 35],
            ['name' => 'Leather Sandals (Handmade)', 'price' => 15000, 'stock' => 25],
            ['name' => 'Inyange Fresh Milk (1L Pack of 12)', 'price' => 7200, 'stock' => 50],
            ['name' => 'Solar Phone Charger Kit', 'price' => 22000, 'stock' => 30],
        ];

        foreach ($products as $i => $p) {
            DB::table('products')->insert([
                'seller_id' => $sellerIds[$i % count($sellerIds)],
                'name' => $p['name'],
                'slug' => Str::slug($p['name']),
                'product_category_id' => $productCategoryIds[$i % count($productCategoryIds)],
                'description' => 'Authentic Rwandan product, quality checked and ready for delivery across the country.',
                'price' => $p['price'],
                'stock' => $p['stock'],
                'image' => null,
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
                'deleted_at' => null,
            ]);
        }
    }
}
