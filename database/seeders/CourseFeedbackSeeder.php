<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;
use App\Models\User;
use App\Models\CourseFeedback;

class CourseFeedbackSeeder extends Seeder
{
    public function run(): void
    {
        $courses = Course::with('talent.category')->get();
        $users = User::where('role', '!=', 'admin')->get();

        if ($users->count() === 0) {
            $this->command->warn('⚠️ No users found to assign feedback.');
            return;
        }

        foreach ($courses as $course) {
            // Assign 3–5 random feedback entries per course
            $feedbackCount = rand(3, 5);
            $categoryName = strtolower($course->talent->category->name ?? 'general');

            for ($i = 0; $i < $feedbackCount; $i++) {
                $user = $users->random();
                $rating = rand(3, 5);

                $comment = $this->generateComment($categoryName, $rating, $course->title);

                CourseFeedback::create([
                    'course_id' => $course->id,
                    'user_id' => $user->id,
                    'rating' => $rating,
                    'comment' => $comment,
                ]);
            }
        }
    }

    private function generateComment(string $category, int $rating, string $courseTitle): string
    {
        $comments = [
            'music' => [
                5 => [
                    "Absolutely loved this course! The instructor explained everything so clearly.",
                    "Perfect for anyone serious about improving their musical skills.",
                    "Fantastic lessons — I can finally play songs confidently!"
                ],
                4 => [
                    "Really helpful, though I wish there were more practice sessions.",
                    "Good flow and easy to follow for beginners.",
                    "I learned a lot — definitely worth it!"
                ],
                3 => [
                    "Decent course, but could use more examples.",
                    "Some sections felt rushed, but overall not bad."
                ],
            ],

            'dance' => [
                5 => [
                    "Amazing energy! The choreography sessions were so fun.",
                    "I feel more confident dancing in public now — loved every bit.",
                    "Step-by-step breakdowns made learning easy and exciting!"
                ],
                4 => [
                    "Great for beginners! Could use a few more advanced routines.",
                    "Fun and motivating — I’m dancing every day now."
                ],
                3 => [
                    "It’s okay, but the pace was a bit fast for me.",
                    "Would be better with more close-up camera angles."
                ],
            ],

            'photography' => [
                5 => [
                    "Best photography course I’ve taken online! Clear and practical.",
                    "I finally understand manual settings — highly recommended!",
                    "Super useful editing tips. My shots look more professional now."
                ],
                4 => [
                    "Very informative and easy to follow.",
                    "Loved the real-life examples. Great value for money!"
                ],
                3 => [
                    "Some topics felt repetitive, but still worth watching."
                ],
            ],

            'coding' => [
                5 => [
                    "Excellent explanations! I built my first project thanks to this course.",
                    "Great instructor and clear lessons — made coding fun!",
                    "Learned so much — I can now write clean and structured code."
                ],
                4 => [
                    "Good course for beginners, but could dive deeper in some topics.",
                    "Loved the examples and practice exercises."
                ],
                3 => [
                    "Some parts were hard to follow, but overall useful."
                ],
            ],

            'fashion' => [
                5 => [
                    "Beautifully structured! The design section was inspiring.",
                    "I created my first dress following this course — so proud!",
                    "Perfect for aspiring designers — full of practical insights."
                ],
                4 => [
                    "Really enjoyed it, though sewing lessons were a bit short.",
                    "Loved how creative and detailed the lessons were."
                ],
                3 => [
                    "Good basics but could use more hands-on projects."
                ],
            ],

            'general' => [
                5 => [
                    "Excellent course — very engaging and full of insights.",
                    "Well-structured and easy to understand. Highly recommend!",
                    "One of the best online courses I’ve ever taken!"
                ],
                4 => [
                    "Good material and great instructor.",
                    "Learned a lot — practical and enjoyable."
                ],
                3 => [
                    "Not bad, but could be improved with more examples."
                ],
            ],
        ];

        $categorySet = $comments[$category] ?? $comments['general'];
        $options = $categorySet[$rating] ?? $categorySet[4];
        return $options[array_rand($options)];
    }
}
