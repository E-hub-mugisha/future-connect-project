<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Story;
use App\Models\Talent;
use App\Models\Category;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class StorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $youtubeLinks = [
            'https://www.youtube.com/watch?v=ysz5S6PUM-U',
            'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
            'https://www.youtube.com/watch?v=ScMzIvxBSi4',
            'https://www.youtube.com/watch?v=aqz-KE-bpKQ'
        ];

        $sampleThumbnails = [
            'https://via.placeholder.com/800x600.png?text=Story+Thumbnail+1',
            'https://via.placeholder.com/800x600.png?text=Story+Thumbnail+2',
            'https://via.placeholder.com/800x600.png?text=Story+Thumbnail+3',
            'https://via.placeholder.com/800x600.png?text=Story+Thumbnail+4'
        ];

        $storyContents = [
            "This story highlights the journey, challenges, and achievements of the talent in their field, inspiring others through dedication and passion.",
            "A personal insight into the creative process, lessons learned, and the moments that shaped their career."
        ];

        $tags = [
            'music,performance,inspiration',
            'art,creativity,journey',
            'tech,innovation,development',
            'sports,discipline,success'
        ];

        $talents = Talent::all();

        foreach ($talents as $talent) {
            for ($i = 1; $i <= 2; $i++) {
                $title = "{$talent->name} Story {$i}";

                Story::create([
                    'talent_id' => $talent->id,
                    'title' => $title,
                    'content' => $storyContents[array_rand($storyContents)],
                    'media' => $youtubeLinks[array_rand($youtubeLinks)],
                    'thumbnail' => $sampleThumbnails[array_rand($sampleThumbnails)],
                    'slug' => Str::slug($title) . '-' . Str::random(5),
                    'category_id' => $talent->category_id,
                    'tags' => $tags[array_rand($tags)],
                    'status' => 'approved',
                ]);
            }
        }
    }
}
