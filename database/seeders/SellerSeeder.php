<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Seller;
use App\Models\User;

class SellerSeeder extends Seeder
{
    public function run(): void
    {
        // Example sellers (assuming users exist or leave user_id null)
        $sellers = [
            [
                'user_id' => User::inRandomOrder()->value('id'),
                'company_name' => 'TechZone Electronics',
                'email' => 'contact@techzone.com',
                'phone' => '+250788123456',
                'address' => 'Downtown Kigali, Rwanda',
                'description' => 'Specialized in selling high-end electronics and gadgets.',
                'status' => 'approved',
            ],
            [
                'user_id' => User::inRandomOrder()->value('id'),
                'company_name' => 'GreenHarvest Organics',
                'email' => 'info@greenharvest.rw',
                'phone' => '+250789654321',
                'address' => 'Remera, Kigali',
                'description' => 'Organic produce and healthy lifestyle products supplier.',
                'status' => 'approved',
            ],
            [
                'user_id' => User::inRandomOrder()->value('id'),
                'company_name' => 'Rwanda Furniture Works',
                'email' => 'sales@rwfurniture.com',
                'phone' => '+250781223344',
                'address' => 'Gisozi Industrial Area, Kigali',
                'description' => 'Premium furniture handcrafted by local artisans.',
                'status' => 'pending',
            ],
            [
                'user_id' => User::inRandomOrder()->value('id'),
                'company_name' => 'FashionLine Boutique',
                'email' => 'hello@fashionline.rw',
                'phone' => '+250780998877',
                'address' => 'Kacyiru, Kigali',
                'description' => 'Trendy clothing and accessories for all occasions.',
                'status' => 'approved',
            ],
            [
                'user_id' => User::inRandomOrder()->value('id'),
                'company_name' => 'EcoBuild Construction',
                'email' => 'support@ecobuild.rw',
                'phone' => '+250782334455',
                'address' => 'Nyarutarama, Kigali',
                'description' => 'Sustainable building materials and green construction services.',
                'status' => 'rejected',
            ],
        ];

        foreach ($sellers as $seller) {
            Seller::create($seller);
        }
    }
}
