<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SuccessStory;

class SuccessStoriesSeeder extends Seeder
{
    public function run(): void
    {
        $stories = [
            [
                'title' => 'Jane Uwimana: From Student to Freelance Designer',
                'thumbnail_url' => '/assets/img/success/jane.jpg',
                'excerpt' => 'Jane started her design career while studying at University of Rwanda, now she works with global clients.',
                'content' => 'Jane Uwimana joined Future Connect as a student looking for freelance opportunities. With our platform, she showcased her design portfolio, got her first client in Kigali, and eventually expanded to international projects...',
                'author_name' => 'Jane Uwimana',
                'role' => 'Talent'
            ],
            [
                'title' => 'Emmanuel Nkurunziza: Scaling Local Business Online',
                'thumbnail_url' => '/assets/img/success/emmanuel.jpg',
                'excerpt' => 'Emmanuel grew his small business with Future Connect’s talent network to reach clients across Rwanda.',
                'content' => 'Emmanuel Nkurunziza had a small furniture business in Kigali. Using Future Connect, he connected with skilled freelancers to create a website and digital marketing strategy, increasing sales by 70% in one year...',
                'author_name' => 'Emmanuel Nkurunziza',
                'role' => 'Client'
            ],
            [
                'title' => 'Alice Mukamana: Empowering Women Entrepreneurs',
                'thumbnail_url' => '/assets/img/success/alice.jpg',
                'excerpt' => 'Alice supports women entrepreneurs by finding talents to help launch their brands online.',
                'content' => 'Alice Mukamana leveraged Future Connect to hire designers and marketers for a women empowerment initiative. Through collaboration, 15 local businesses successfully launched their brands...',
                'author_name' => 'Alice Mukamana',
                'role' => 'Talent'
            ],
            [
                'title' => 'Patrick Habimana: Launching an IT Startup',
                'thumbnail_url' => '/assets/img/success/patrick.jpg',
                'excerpt' => 'Patrick hired top talents to develop his first mobile app, now used across Rwanda.',
                'content' => 'Patrick Habimana, a young IT entrepreneur, needed skilled developers for his mobile app project. Through Future Connect, he found a team that brought his idea to life, impacting hundreds of users...',
                'author_name' => 'Patrick Habimana',
                'role' => 'Client'
            ],
            [
                'title' => 'Grace Uwase: Building a Personal Brand',
                'thumbnail_url' => '/assets/img/success/grace.jpg',
                'excerpt' => 'Grace became a top-rated freelancer offering social media services to local businesses.',
                'content' => 'Grace Uwase started small offering social media management services. With Future Connect, she gained visibility, landed multiple clients, and became a top-rated talent in Rwanda...',
                'author_name' => 'Grace Uwase',
                'role' => 'Talent'
            ],
        ];

        foreach ($stories as $story) {
            SuccessStory::create($story);
        }
    }
}
