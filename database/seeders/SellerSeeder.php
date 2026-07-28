<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SellerSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();

        $sellers = [
            ['company_name' => 'Gasabo Handicrafts Co.', 'email' => 'sales@gasabohandicrafts.rw', 'address' => 'Kimironko, Gasabo, Kigali'],
            ['company_name' => 'Nyanza Imigongo Art Studio', 'email' => 'orders@nyanzaimigongo.rw', 'address' => 'Nyanza, Southern Province'],
            ['company_name' => 'Huye Textile Cooperative', 'email' => 'info@huyetextiles.rw', 'address' => 'Huye, Southern Province'],
            ['company_name' => 'Nyagatare Agro Exports', 'email' => 'sales@nyagatareagro.rw', 'address' => 'Nyagatare, Eastern Province'],
            ['company_name' => 'Muhanga Furniture Works', 'email' => 'contact@muhangafurniture.rw', 'address' => 'Muhanga, Southern Province'],
            ['company_name' => 'Kigali Glow Cosmetics', 'email' => 'hello@kigaliglow.rw', 'address' => 'Kacyiru, Gasabo, Kigali'],
            ['company_name' => 'Musanze Jewelry House', 'email' => 'sales@musanzejewelry.rw', 'address' => 'Musanze, Northern Province'],
            ['company_name' => 'Rubavu Leather Crafts', 'email' => 'info@rubavuleather.rw', 'address' => 'Rubavu, Western Province'],
            ['company_name' => 'Rwamagana Food & Beverages Ltd', 'email' => 'orders@rwamaganafoods.rw', 'address' => 'Rwamagana, Eastern Province'],
            ['company_name' => 'Kicukiro Electronics Hub', 'email' => 'sales@kicukiroelectronics.rw', 'address' => 'Kicukiro, Kigali'],
        ];

        foreach ($sellers as $i => $s) {
            DB::table('sellers')->insert([
                'user_id' => $userIds[$i % count($userIds)],
                'company_name' => $s['company_name'],
                'email' => $s['email'],
                'phone' => '+25078' . rand(1000000, 9999999),
                'address' => $s['address'],
                'description' => 'A registered Rwandan business selling quality products through the FutureConnect marketplace.',
                'status' => 'approved',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
