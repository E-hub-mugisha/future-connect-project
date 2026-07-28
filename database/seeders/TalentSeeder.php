<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TalentSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();
        $categoryIds = DB::table('categories')->pluck('id')->all();

        $talents = [
            ['name' => 'Nkurunziza Web Solutions', 'description' => 'Full-stack web developer specialising in Laravel and React', 'address' => 'Kimironko, Gasabo, Kigali', 'phone' => '+250788123456', 'email' => 'nkurunziza.web@gmail.com', 'level' => 'advanced'],
            ['name' => 'Mukamana Fashion House', 'description' => 'Custom Rwandan wear and modern tailoring', 'address' => 'Nyamirambo, Nyarugenge, Kigali', 'phone' => '+250788234567', 'email' => 'mukamana.fashion@gmail.com', 'level' => 'intermediate'],
            ['name' => 'Ndayisenga Carpentry Workshop', 'description' => 'Handmade furniture and interior woodwork', 'address' => 'Muhanga, Southern Province', 'phone' => '+250728345678', 'email' => 'ndayisenga.carpentry@gmail.com', 'level' => 'advanced'],
            ['name' => 'Uwase Hair & Beauty Salon', 'description' => 'Braiding, makeup and modern hairstyling', 'address' => 'Kicukiro, Kigali', 'phone' => '+250788456789', 'email' => 'uwase.beauty@gmail.com', 'level' => 'intermediate'],
            ['name' => 'Habyarimana Farm Produce', 'description' => 'Organic vegetable and fruit farming', 'address' => 'Nyagatare, Eastern Province', 'phone' => '+250738567890', 'email' => 'habyarimana.farm@gmail.com', 'level' => 'beginner'],
            ['name' => 'Mukashema Catering Services', 'description' => 'Event catering and traditional Rwandan cuisine', 'address' => 'Rwamagana, Eastern Province', 'phone' => '+250788678901', 'email' => 'mukashema.catering@gmail.com', 'level' => 'advanced'],
            ['name' => 'Twagira Photography Studio', 'description' => 'Wedding, portrait and event photography', 'address' => 'Musanze, Northern Province', 'phone' => '+250728789012', 'email' => 'twagira.photo@gmail.com', 'level' => 'advanced'],
            ['name' => 'Umutoni Masonry & Construction', 'description' => 'Residential construction and finishing works', 'address' => 'Rubavu, Western Province', 'phone' => '+250788890123', 'email' => 'umutoni.construction@gmail.com', 'level' => 'intermediate'],
            ['name' => 'Ingabire Music Academy', 'description' => 'Traditional drumming and modern music lessons', 'address' => 'Gicumbi, Northern Province', 'phone' => '+250738901234', 'email' => 'ingabire.music@gmail.com', 'level' => 'advanced'],
            ['name' => 'Rukundo Graphic Designs', 'description' => 'Branding, logo design and print media', 'address' => 'Huye, Southern Province', 'phone' => '+250788012345', 'email' => 'rukundo.graphics@gmail.com', 'level' => 'intermediate'],
        ];

        foreach ($talents as $i => $t) {
            DB::table('talents')->insert([
                'name' => $t['name'],
                'user_id' => $userIds[$i % count($userIds)],
                'category_id' => $categoryIds[$i % count($categoryIds)],
                'description' => $t['description'],
                'image' => null,
                'address' => $t['address'],
                'phone' => $t['phone'],
                'email' => $t['email'],
                'language' => 'Kinyarwanda, English, French',
                'matched' => $i % 3 === 0 ? 1 : 0,
                'status' => 'approved',
                'featured' => $i % 4 === 0 ? 1 : 0,
                'level' => $t['level'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
