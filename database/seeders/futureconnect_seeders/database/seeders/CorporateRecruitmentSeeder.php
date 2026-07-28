<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CorporateRecruitmentSeeder extends Seeder
{
    public function run(): void
    {
        $sellerIds = DB::table('sellers')->pluck('id')->all();

        $titles = [
            'Furniture Assembly Contractors Needed',
            'Bulk Fabric Suppliers for Fashion Line',
            'Agro-Export Packaging Specialists',
            'Cosmetics Formulation Consultants',
            'Jewelry Design Apprentices',
            'Leather Goods Quality Inspectors',
            'Beverage Distribution Partners',
            'Electronics Repair Technicians',
            'Handicraft Export Coordinators',
            'Warehouse and Logistics Staff',
        ];
        $regions = ['Kigali City', 'Southern Province', 'Northern Province', 'Western Province', 'Eastern Province'];

        foreach ($titles as $i => $title) {
            DB::table('corporate_recruitments')->insert([
                'company_id' => $sellerIds[$i % count($sellerIds)],
                'title' => $title,
                'description' => 'We are looking for skilled professionals to join our growing Rwandan business operations.',
                'skills' => json_encode(['communication', 'teamwork', 'attention to detail']),
                'category' => 'General Recruitment',
                'region' => $regions[$i % count($regions)],
                'status' => $i % 4 === 0 ? 'closed' : 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
