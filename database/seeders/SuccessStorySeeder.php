<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SuccessStorySeeder extends Seeder
{
    public function run(): void
    {
        $stories = [
            ['title' => 'How Eric Turned Coding Skills into a Web Agency', 'author' => 'Eric Nkurunziza', 'role' => 'Web Developer, Kigali'],
            ['title' => 'Chantal\'s Journey from Tailor to Fashion Brand Owner', 'author' => 'Chantal Mukamana', 'role' => 'Fashion Designer, Nyarugenge'],
            ['title' => 'Building a Carpentry Business from a Small Workshop', 'author' => 'Jean de Dieu Ndayisenga', 'role' => 'Carpenter, Muhanga'],
            ['title' => 'From Salon Chair to Beauty Empire', 'author' => 'Immaculee Uwase', 'role' => 'Beautician, Kicukiro'],
            ['title' => 'Growing Organic Vegetables for Kigali Restaurants', 'author' => 'Patrick Habyarimana', 'role' => 'Farmer, Nyagatare'],
            ['title' => 'Catering Success One Wedding at a Time', 'author' => 'Aline Mukashema', 'role' => 'Caterer, Rwamagana'],
            ['title' => 'A Photographer\'s Path to Nationwide Recognition', 'author' => 'Vincent Twagirayezu', 'role' => 'Photographer, Musanze'],
            ['title' => 'Building Homes and a Reputation in Rubavu', 'author' => 'Diane Umutoni', 'role' => 'Mason, Rubavu'],
            ['title' => 'Keeping Traditional Music Alive for a New Generation', 'author' => 'Solange Ingabire', 'role' => 'Musician, Gicumbi'],
            ['title' => 'Designing Brands for Kigali\'s Growing Startups', 'author' => 'Bernard Rukundo', 'role' => 'Graphic Designer, Huye'],
        ];

        foreach ($stories as $s) {
            DB::table('success_stories')->insert([
                'title' => $s['title'],
                'slug' => Str::slug($s['title']),
                'thumbnail_url' => null,
                'excerpt' => 'A story of determination and skill turning into sustainable income through FutureConnect.',
                'content' => 'Through hard work, verified skills, and the support of the FutureConnect platform, this Rwandan talent built a thriving business serving clients across the country.',
                'author_name' => $s['author'],
                'role' => $s['role'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
