<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FaqSeeder extends Seeder
{
    public function run(): void
    {
        $faqs = [
            ['q' => 'How do I register as a talent on FutureConnect?', 'a' => 'Create an account, select the talent role, and complete your profile with your skills, location and contact details.'],
            ['q' => 'Is FutureConnect available outside Kigali?', 'a' => 'Yes, FutureConnect supports talents and clients across all provinces and districts of Rwanda.'],
            ['q' => 'What payment methods are supported?', 'a' => 'We support MTN Mobile Money, Airtel Money and cash on delivery for marketplace orders.'],
            ['q' => 'How is a talent verified?', 'a' => 'Our admin team reviews submitted documents and skill portfolios before approving a talent profile.'],
            ['q' => 'Can diaspora members sponsor local projects?', 'a' => 'Yes, diaspora accounts can browse verified projects and contribute sponsorships directly through the platform.'],
            ['q' => 'How do I apply for a job listing?', 'a' => 'Open any job section listing and submit your application with a cover letter and resume.'],
            ['q' => 'What happens if I am not satisfied with a service?', 'a' => 'You can leave a review and contact our support team, who will help mediate with the talent.'],
            ['q' => 'Are there subscription plans for businesses?', 'a' => 'Yes, we offer monthly and annual pricing plans tailored for individuals and corporate clients.'],
            ['q' => 'How do I list a product for sale?', 'a' => 'Register as a seller, get approved, then add your products with pricing and stock details.'],
            ['q' => 'Can I request a live demo of FutureConnect?', 'a' => 'Yes, use the demo request form and our team will schedule a session at your preferred time.'],
        ];

        foreach ($faqs as $f) {
            DB::table('faqs')->insert([
                'question' => $f['q'],
                'answer' => $f['a'],
                'is_active' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
