<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\JobCategory;

class JobCategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            // Creative & Media
            "Graphic Design",
            "Photography & Videography",
            "Branding & Logo Design",
            "Animation & Motion Graphics",
            "Social Media Content",
            "Writing & Copywriting",
            "Music & Audio Production",

            // Technology & Digital
            "Web Development",
            "Mobile App Development",
            "Software Engineering",
            "UI/UX Design",
            "Data Analysis",
            "Cybersecurity",
            "IT Support",
            "Digital Marketing",
            "SEO & Analytics",

            // Business & Administration
            "Virtual Assistance",
            "Customer Service",
            "Data Entry",
            "Finance & Accounting",
            "Business Consulting",
            "Project Management",
            "HR & Recruitment",

            // Education & Training
            "Tutoring",
            "Online Courses",
            "Personal Coaching",
            "Corporate Training",

            // Home & Field Services
            "Cleaning Services",
            "Plumbing",
            "Electrical Work",
            "Painting",
            "Carpentry",
            "Landscaping & Gardening",
            "Transport & Delivery",

            // Events & Entertainment
            "Event Photography",
            "Videography",
            "DJ & Music Services",
            "Event Planning",
            "Makeup & Styling",
            "Decoration Services",

            // Health & Wellness
            "Fitness Training",
            "Nutrition Coaching",
            "Massage & Wellness",
            "Mental Wellness Support",

            // Sales & Retail
            "Sales Agents",
            "Shop Attendants",
            "Brand Ambassadors",
            "Merchandising",

            // Agriculture & Environment
            "Farming Support",
            "Agro Consulting",
            "Environmental Services",

            // Other
            "Other"
        ];

        foreach ($categories as $cat) {
            JobCategory::create([
                'name' => $cat,
                'slug' => Str::slug($cat),
                'parent_id' => null
            ]);
        }
    }
}
