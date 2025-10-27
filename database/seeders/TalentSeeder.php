<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Talent;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class TalentSeeder extends Seeder
{
    public function run()
    {
        $talents = [
            [
                'name' => 'Alice Niyonsaba',
                'featured' => true,
                'description' => 'Professional vocalist and stage performer known for soulful music and live energy.',
                'image' => 'uploads/talents/alice.jpg',
                'address' => 'Kigali, Rwanda',
                'phone' => '+250780111111',
                'email' => 'alice@talentsphere.com',
                'language' => 'English',
                'category_id' => 1,
            ],
            [
                'name' => 'John Mugisha',
                'featured' => false,
                'description' => 'Digital artist specializing in concept art and digital illustrations.',
                'image' => 'uploads/talents/john.jpg',
                'address' => 'Huye, Rwanda',
                'phone' => '+250780222222',
                'email' => 'john@talentsphere.com',
                'language' => 'Kinyarwanda',
                'category_id' => 2,
            ],
            [
                'name' => 'Grace Uwamahoro',
                'featured' => true,
                'description' => 'Photographer and creative storyteller with expertise in portrait and travel photography.',
                'image' => 'uploads/talents/grace.jpg',
                'address' => 'Musanze, Rwanda',
                'phone' => '+250780333333',
                'email' => 'grace@talentsphere.com',
                'language' => 'English, French',
                'category_id' => 3,
            ],
            [
                'name' => 'Patrick Habimana',
                'featured' => false,
                'description' => 'Creative writer and spoken word poet, blending emotion and cultural expression.',
                'image' => 'uploads/talents/patrick.jpg',
                'address' => 'Kigali, Rwanda',
                'phone' => '+250780444444',
                'email' => 'patrick@talentsphere.com',
                'language' => 'English',
                'category_id' => 4,
            ],
            [
                'name' => 'Sarah Uwase',
                'featured' => true,
                'description' => 'Professional dancer specializing in contemporary and traditional Rwandan styles.',
                'image' => 'uploads/talents/sarah.jpg',
                'address' => 'Rubavu, Rwanda',
                'phone' => '+250780555555',
                'email' => 'sarah@talentsphere.com',
                'language' => 'Kinyarwanda, English',
                'category_id' => 5,
            ],
            [
                'name' => 'Eric Nkurunziza',
                'featured' => true,
                'description' => 'Music producer and sound engineer with experience in mixing, mastering, and beat creation.',
                'image' => 'uploads/talents/eric.jpg',
                'address' => 'Kigali, Rwanda',
                'phone' => '+250780666666',
                'email' => 'eric@talentsphere.com',
                'language' => 'English',
                'category_id' => 1,
            ],
            [
                'name' => 'Linda Ingabire',
                'featured' => false,
                'description' => 'Fashion designer crafting modern African-inspired outfits for global markets.',
                'image' => 'uploads/talents/linda.jpg',
                'address' => 'Nyanza, Rwanda',
                'phone' => '+250780777777',
                'email' => 'linda@talentsphere.com',
                'language' => 'French, English',
                'category_id' => 8,
            ],
            [
                'name' => 'Kevin Mutabazi',
                'featured' => false,
                'description' => 'Actor and filmmaker passionate about African stories and cinematic storytelling.',
                'image' => 'uploads/talents/kevin.jpg',
                'address' => 'Kigali, Rwanda',
                'phone' => '+250780888888',
                'email' => 'kevin@talentsphere.com',
                'language' => 'English',
                'category_id' => 6,
            ],
        ];

        foreach ($talents as $data) {
            $talent = Talent::create($data);

            // Approve the talent
            $talent->status = 'approved';
            $talent->save();

            // Create a user for this talent
            $password = 'password123'; // you can change this or randomize it

            User::create([
                'name' => $talent->name,
                'email' => $talent->email,
                'password' => Hash::make($password),
                'role' => 'talent',
            ]);
        }
    }
}
