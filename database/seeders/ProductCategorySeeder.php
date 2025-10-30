<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProductCategory;
use Illuminate\Support\Str;

class ProductCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Electronics', 'description' => 'Phones, laptops, and gadgets.'],
            ['name' => 'Fashion', 'description' => 'Men’s and Women’s clothing and accessories.'],
            ['name' => 'Home & Kitchen', 'description' => 'Appliances, furniture, and kitchen tools.'],
            ['name' => 'Health & Beauty', 'description' => 'Cosmetics, skincare, and wellness items.'],
            ['name' => 'Sports & Outdoors', 'description' => 'Fitness, outdoor gear, and accessories.'],
            ['name' => 'Books & Stationery', 'description' => 'Educational books and office supplies.'],
        ];

        foreach ($categories as $category) {
            ProductCategory::create([
                'name' => $category['name'],
                'description' => $category['description'],
                'slug' => Str::slug($category['name']), // ✅ Fix
            ]);
        }
    }
}
