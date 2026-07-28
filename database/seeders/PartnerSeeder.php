<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartnerSeeder extends Seeder
{
    public function run(): void
    {
        $partners = [
            'Rwanda Development Board',
            'Ministry of ICT and Innovation (MINICT)',
            'Norrsken House Kigali',
            'Bank of Kigali',
            'MTN Rwanda',
            'Zipline Rwanda',
            'Andela Rwanda',
            'Rwanda ICT Chamber',
            'Africa Improved Foods',
            'Karisimbi Business Partners',
        ];

        foreach ($partners as $name) {
            DB::table('partners')->insert([
                'name' => $name,
                'description' => 'Proud partner supporting talent development and economic empowerment across Rwanda.',
                'logo' => null,
                'link' => null,
                'is_active' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
