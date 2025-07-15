<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FaqsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Example FAQs
        $faqs = [
            [
                'question' => 'What is Future Connect?',
                'answer' => 'Future Connect is a platform designed to connect talents with opportunities in various fields.',
                'is_active' => true,
            ],
            [
                'question' => 'How can I register as a talent?',
                'answer' => 'You can register as a talent by visiting the registration page and filling out the required information.',
                'is_active' => true,
            ],
            [
                'question' => 'What types of skills can I learn?',
                'answer' => 'Future Connect offers a wide range of skill courses, including programming, design, marketing, and more.',
                'is_active' => true,
            ],
            [
                'question' => 'How can I contact support?',
                'answer' => 'You can contact support by visiting the contact page and filling out the contact form.',
                'is_active' => true,
            ],
        ];
        foreach ($faqs as $faq) {
            \App\Models\Faq::create($faq);
        }
        // You can add more FAQs as needed
    }
}
