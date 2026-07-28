<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuickHireSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();
        $categoryIds = DB::table('categories')->pluck('id')->all();
        $talentIds = DB::table('talents')->pluck('id')->all();

        $requests = [
            ['title' => 'Need a Website for My Small Business', 'client' => 'Sandrine Mutesi', 'company' => 'Mutesi Boutique'],
            ['title' => 'Custom Wedding Dress Needed Urgently', 'client' => 'Grace Nyiransabimana', 'company' => null],
            ['title' => 'Office Furniture for New Branch', 'client' => 'Herve Munyaneza', 'company' => 'Munyaneza Enterprises'],
            ['title' => 'Hair and Makeup for Photoshoot', 'client' => 'Liliane Iribagiza', 'company' => 'Liliane Studios'],
            ['title' => 'Weekly Vegetable Supply for Restaurant', 'client' => 'Placide Bizimungu', 'company' => 'Bizimungu Eatery'],
            ['title' => 'Catering for 200-Guest Corporate Event', 'client' => 'Providence Umuhire', 'company' => 'Umuhire Events'],
            ['title' => 'Product Photography for Online Store', 'client' => 'Fiacre Ntagungira', 'company' => 'Ntagungira Traders'],
            ['title' => 'Small House Renovation in Kicukiro', 'client' => 'Olivier Rugamba', 'company' => null],
            ['title' => 'Live Band for Traditional Wedding', 'client' => 'Esperance Nirere', 'company' => null],
            ['title' => 'Logo and Branding for New Startup', 'client' => 'Justin Nsanzimana', 'company' => 'Nsanzimana Tech'],
        ];

        foreach ($requests as $i => $r) {
            DB::table('quick_hires')->insert([
                'user_id' => $userIds[$i % count($userIds)],
                'category_id' => $categoryIds[$i % count($categoryIds)],
                'talent_id' => $i % 3 === 0 ? null : $talentIds[$i % count($talentIds)],
                'title' => $r['title'],
                'description' => 'Looking for a reliable, skilled professional to complete this task quickly and to a high standard.',
                'budget_type' => $i % 2 === 0 ? 'fixed' : 'hourly',
                'budget_min' => 20000,
                'budget_max' => 150000,
                'timeline' => '1-2 weeks',
                'experience_level' => 'intermediate',
                'skills' => json_encode(['reliable', 'skilled', 'communicative']),
                'client_name' => $r['client'],
                'client_email' => strtolower(str_replace(' ', '.', $r['client'])) . '@gmail.com',
                'client_phone' => '+25078' . rand(1000000, 9999999),
                'company_name' => $r['company'],
                'status' => 'pending',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
