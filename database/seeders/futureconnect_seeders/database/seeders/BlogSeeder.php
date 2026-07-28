<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();
        $categoryIds = DB::table('categories')->pluck('id')->all();

        $titles = [
            'How Rwandan Youth Are Turning Skills into Income',
            '5 Tips for Building a Standout Talent Profile',
            'The Rise of the Gig Economy in Kigali',
            'Why Diaspora Sponsorship Matters for Local Projects',
            'A Guide to Getting Verified on FutureConnect',
            'Top 10 In-Demand Skills in Rwanda for 2026',
            'How to Price Your Services as a Freelancer in Rwanda',
            'From Umuganda to Entrepreneurship: Community and Craft',
            'Digital Payments: Using MoMo and Airtel Money Safely',
            'Success Stories from FutureConnect Talents',
        ];

        foreach ($titles as $i => $title) {
            DB::table('blogs')->insert([
                'title' => $title,
                'slug' => Str::slug($title),
                'content' => 'FutureConnect is committed to sharing insights and stories that help Rwandan talents and clients get the most from our platform.',
                'image' => null,
                'author_id' => $userIds[$i % 2],
                'category_id' => $categoryIds[$i % count($categoryIds)],
                'views' => rand(50, 2000),
                'is_published' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
