<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Story;
use Illuminate\Support\Str;

class StorySeeder extends Seeder
{
    public function run()
    {
        $stories = [
            [
                'talent_id' => 1,
                'title' => 'The Journey of a Voice That Inspires',
                'content' => "From singing in a small church choir in Kigali to performing on international stages, Alice Niyonsaba’s journey is one of perseverance and passion. Her soulful voice caught the attention of local producers when she was just 17. She faced early rejection but used it as motivation to improve her technique and confidence. Today, Alice not only performs across Africa but also mentors young girls interested in music. Her story reminds us that raw talent becomes powerful when combined with discipline and self-belief.",
                'media' => 'uploads/stories/alice_story.mp4',
                'thumbnail' => 'uploads/stories/alice_story_thumb.jpg',
                'slug' => Str::slug('The Journey of a Voice That Inspires'),
                'category_id' => 1,
                'tags' => 'music, inspiration, vocals',
                'status' => 'published',
            ],
            [
                'talent_id' => 2,
                'title' => 'Painting Dreams Into Digital Reality',
                'content' => "John Mugisha’s fascination with art began with pencil sketches on old notebooks. After discovering digital illustration, he transformed his passion into a thriving career. His digital artworks now feature on magazine covers and NFT platforms. John’s philosophy is simple: creativity has no limits when guided by curiosity and practice. Through his online tutorials, he teaches hundreds of aspiring artists to express emotions through color, texture, and imagination.",
                'media' => 'uploads/stories/john_story.mp4',
                'thumbnail' => 'uploads/stories/john_story_thumb.jpg',
                'slug' => Str::slug('Painting Dreams Into Digital Reality'),
                'category_id' => 2,
                'tags' => 'art, digital, creativity',
                'status' => 'published',
            ],
            [
                'talent_id' => 3,
                'title' => 'Capturing Life Through a Lens',
                'content' => "Grace Uwamahoro discovered photography during a school trip when she borrowed her teacher’s camera. Over time, she realized photography was her way of preserving emotions and telling stories. From capturing Rwandan landscapes to portraits that reflect human depth, Grace’s portfolio now inspires many. She believes every photograph is a frozen heartbeat—a timeless story told through light and shadow.",
                'media' => 'uploads/stories/grace_story.mp4',
                'thumbnail' => 'uploads/stories/grace_story_thumb.jpg',
                'slug' => Str::slug('Capturing Life Through a Lens'),
                'category_id' => 3,
                'tags' => 'photography, storytelling, art',
                'status' => 'published',
            ],
            [
                'talent_id' => 4,
                'title' => 'Poetry That Speaks to the Soul',
                'content' => "For Patrick Habimana, poetry is not just art—it’s a voice for the voiceless. His spoken word performances blend cultural pride with emotional honesty. From small cafés in Kigali to national poetry events, Patrick’s words have touched hearts. He writes about identity, resilience, and love for Africa. Patrick’s story is a powerful reminder that poetry can heal, unite, and awaken social consciousness.",
                'media' => 'uploads/stories/patrick_story.mp4',
                'thumbnail' => 'uploads/stories/patrick_story_thumb.jpg',
                'slug' => Str::slug('Poetry That Speaks to the Soul'),
                'category_id' => 4,
                'tags' => 'poetry, spokenword, africa',
                'status' => 'published',
            ],
            [
                'talent_id' => 5,
                'title' => 'Dancing Through Culture and Expression',
                'content' => "Sarah Uwase grew up surrounded by traditional Rwandan dance but later explored modern choreography. Her performances combine heritage and innovation, creating a style uniquely hers. Through her dance academy, Sarah empowers young dancers to use movement as a form of storytelling. Her goal is to put Rwandan dance on the global stage—one expressive move at a time.",
                'media' => 'uploads/stories/sarah_story.mp4',
                'thumbnail' => 'uploads/stories/sarah_story_thumb.jpg',
                'slug' => Str::slug('Dancing Through Culture and Expression'),
                'category_id' => 5,
                'tags' => 'dance, culture, empowerment',
                'status' => 'published',
            ],
            [
                'talent_id' => 6,
                'title' => 'Beats of Change: A Producer’s Tale',
                'content' => "Eric Nkurunziza’s love for music started with curiosity about how songs were made. After years of experimentation, he mastered sound design and music production. Eric’s studio has produced hits for several emerging artists in East Africa. He believes every beat carries a message, and his mission is to make people feel the rhythm of hope and transformation. His story embodies how persistence turns passion into purpose.",
                'media' => 'uploads/stories/eric_story.mp4',
                'thumbnail' => 'uploads/stories/eric_story_thumb.jpg',
                'slug' => Str::slug('Beats of Change A Producer’s Tale'),
                'category_id' => 1,
                'tags' => 'music, production, inspiration',
                'status' => 'published',
            ],
            [
                'talent_id' => 7,
                'title' => 'Weaving Confidence Through Fashion',
                'content' => "Linda Ingabire’s designs are a fusion of African roots and modern aesthetics. She started by redesigning her friends’ clothes and grew into a full-time fashion designer. Her label, LI Designs, now participates in local fashion weeks and promotes sustainable materials. Linda’s journey is one of creativity and resilience—proving that fashion is more than beauty; it’s identity, pride, and purpose.",
                'media' => 'uploads/stories/linda_story.mp4',
                'thumbnail' => 'uploads/stories/linda_story_thumb.jpg',
                'slug' => Str::slug('Weaving Confidence Through Fashion'),
                'category_id' => 8,
                'tags' => 'fashion, design, africa',
                'status' => 'published',
            ],
            [
                'talent_id' => 8,
                'title' => 'Acting the African Story',
                'content' => "Kevin Mutabazi always loved watching films but never imagined he’d act in them. After joining a local theatre group, he discovered his calling. Today, Kevin writes, directs, and acts in short films that reflect African life and values. His dream is to build a film academy to train future storytellers. Kevin’s journey shows how passion and courage can turn imagination into impact.",
                'media' => 'uploads/stories/kevin_story.mp4',
                'thumbnail' => 'uploads/stories/kevin_story_thumb.jpg',
                'slug' => Str::slug('Acting the African Story'),
                'category_id' => 6,
                'tags' => 'acting, film, storytelling',
                'status' => 'published',
            ],
        ];

        Story::insert($stories);
    }
}
