<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimonial;
use App\Models\Talent;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $talentIds = Talent::pluck('id')->toArray();

        if (empty($talentIds)) {
            $this->command->warn('Please seed talents first.');
            return;
        }

        $testimonials = [
            [
                'title' => 'Exceptional Professionalism and Skill',
                'content' => 'Working with this talent was a great experience. Their expertise and commitment truly elevated our project to the next level.',
                'rating' => 5,
            ],
            [
                'title' => 'Reliable and Creative',
                'content' => 'Delivered beyond expectations with innovative ideas and timely communication. Highly recommended!',
                'rating' => 4,
            ],
            [
                'title' => 'Highly Skilled and Dedicated',
                'content' => 'Their deep knowledge in the field and attention to detail made the collaboration very successful.',
                'rating' => 5,
            ],
            [
                'title' => 'Good Work but Room for Improvement',
                'content' => 'The work met the basic requirements, though some aspects could have been polished better.',
                'rating' => 3,
            ],
            [
                'title' => 'Outstanding Results',
                'content' => 'Exceeded all my expectations. I will definitely work with them again in the future.',
                'rating' => 5,
            ],
            [
                'title' => 'Professional and Easy to Work With',
                'content' => 'Very communicative and delivered quality work on time. A pleasure to collaborate with.',
                'rating' => 4,
            ],
            [
                'title' => 'Good Communication, Great Outcome',
                'content' => 'Maintained great communication throughout the project and delivered solid results.',
                'rating' => 4,
            ],
            [
                'title' => 'Talented and Innovative',
                'content' => 'Brought fresh ideas to the table and executed them flawlessly.',
                'rating' => 5,
            ],
            [
                'title' => 'Satisfactory Experience',
                'content' => 'The project was completed satisfactorily, though a bit slower than expected.',
                'rating' => 3,
            ],
            [
                'title' => 'Highly Recommend for Any Project',
                'content' => 'Professional, efficient, and skilled. Looking forward to future projects together.',
                'rating' => 5,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create([
                'talent_id' => $talentIds[array_rand($talentIds)],
                'title'     => $testimonial['title'],
                'content'   => $testimonial['content'],
                'rating'    => $testimonial['rating'],
                'created_at'=> now(),
                'updated_at'=> now(),
            ]);
        }
    }
}
