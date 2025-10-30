<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Seller;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $categories = ProductCategory::all();
        $sellers = Seller::all();

        if ($categories->isEmpty() || $sellers->isEmpty()) {
            $this->command->warn('⚠️ Please seed ProductCategory and Seller tables before seeding Products.');
            return;
        }

        $products = [
            [
                'name' => 'Smartphone X200',
                'description' => 'A high-performance smartphone with a stunning display and excellent battery life.',
                'price' => 650.00,
                'stock' => 25,
                'image' => 'products/smartphone-x200.jpg',
                'status' => 'active',
            ],
            [
                'name' => 'Ultra HD 4K TV 55"',
                'description' => 'Enjoy cinema-quality visuals with this 55-inch 4K Ultra HD Smart TV.',
                'price' => 899.99,
                'stock' => 10,
                'image' => 'products/uhd-tv-55.jpg',
                'status' => 'active',
            ],
            [
                'name' => 'Wireless Headphones Pro',
                'description' => 'Noise-cancelling headphones with crystal-clear sound and long battery life.',
                'price' => 199.00,
                'stock' => 40,
                'image' => 'products/wireless-headphones.jpg',
                'status' => 'active',
            ],
            [
                'name' => 'Laptop Air 13"',
                'description' => 'Lightweight and powerful laptop, perfect for work and travel.',
                'price' => 1200.00,
                'stock' => 15,
                'image' => 'products/laptop-air-13.jpg',
                'status' => 'active',
            ],
            [
                'name' => 'Smart Watch Series 6',
                'description' => 'Monitor your fitness, health, and notifications right from your wrist.',
                'price' => 299.00,
                'stock' => 30,
                'image' => 'products/smartwatch-series6.jpg',
                'status' => 'active',
            ],
            [
                'name' => 'Bluetooth Speaker Boom',
                'description' => 'Portable Bluetooth speaker with deep bass and 12-hour battery life.',
                'price' => 120.00,
                'stock' => 50,
                'image' => 'products/bluetooth-speaker.jpg',
                'status' => 'active',
            ],
        ];

        foreach ($products as $product) {
            Product::create([
                'seller_id' => $sellers->random()->id,
                'product_category_id' => $categories->random()->id,
                'name' => $product['name'],
                'slug' => Str::slug($product['name']),
                'price' => $product['price'],
                'description' => $product['description'],
                'stock' => $product['stock'],
                'image' => $product['image'],
                'status' => $product['status'],
            ]);
        }

        $this->command->info('✅ Products table seeded successfully!');
    }
}
