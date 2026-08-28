<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;

/**
 * Realistic Rwandan-market seed data for the FutureConnect talent platform.
 * Seeds 5 rows per domain table, in dependency-safe order, using explicit
 * IDs so foreign keys line up. Laravel framework/internal tables
 * (cache, jobs, sessions, password_reset_tokens, personal_access_tokens,
 * migrations, failed_jobs, job_batches) are intentionally left alone.
 *
 * Usage: place in database/seeders/ then run
 *   php artisan db:seed --class=RwandaTalentPlatformSeeder
 * Recommended on a fresh migration: php artisan migrate:fresh then seed.
 */
class RwandaTalentPlatformSeeder extends Seeder
{
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        $now = Carbon::now();

        // ---------------------------------------------------------------
        // users
        // ---------------------------------------------------------------
        DB::table('users')->insert([
            [
                'id' => 1, 'name' => 'Eric Mugisha', 'email' => 'eric.mugisha@futureconnect.rw',
                'email_verified_at' => $now->copy()->subMonths(6), 'password' => Hash::make('password123'),
                'role' => 'admin', 'active' => 1, 'is_verified' => 1, 'trial_used_at' => null,
                'remember_token' => null, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now, 'deleted_at' => null,
            ],
            [
                'id' => 2, 'name' => 'Alice Mukamana', 'email' => 'alice.mukamana@gmail.com',
                'email_verified_at' => $now->copy()->subMonths(4), 'password' => Hash::make('password123'),
                'role' => 'user', 'active' => 1, 'is_verified' => 1, 'trial_used_at' => $now->copy()->subMonths(3),
                'remember_token' => null, 'created_at' => $now->copy()->subMonths(4), 'updated_at' => $now, 'deleted_at' => null,
            ],
            [
                'id' => 3, 'name' => 'Jean Niyonzima', 'email' => 'jean.niyonzima@gmail.com',
                'email_verified_at' => $now->copy()->subMonths(5), 'password' => Hash::make('password123'),
                'role' => 'talent', 'active' => 1, 'is_verified' => 1, 'trial_used_at' => null,
                'remember_token' => null, 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now, 'deleted_at' => null,
            ],
            [
                'id' => 4, 'name' => 'Claudine Ingabire', 'email' => 'claudine.ingabire@gmail.com',
                'email_verified_at' => $now->copy()->subMonths(3), 'password' => Hash::make('password123'),
                'role' => 'talent', 'active' => 1, 'is_verified' => 0, 'trial_used_at' => null,
                'remember_token' => null, 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now, 'deleted_at' => null,
            ],
            [
                'id' => 5, 'name' => 'Diane Mutesi', 'email' => 'diane.mutesi@techhubrwanda.rw',
                'email_verified_at' => $now->copy()->subMonths(2), 'password' => Hash::make('password123'),
                'role' => 'user', 'active' => 1, 'is_verified' => 1, 'trial_used_at' => null,
                'remember_token' => null, 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now, 'deleted_at' => null,
            ],
        ]);

        // ---------------------------------------------------------------
        // categories (used across talents, projects, blogs, stories, quick_hires, announcements)
        // ---------------------------------------------------------------
        DB::table('categories')->insert([
            ['id' => 1, 'name' => 'Web & Software Development', 'description' => 'Building websites, apps and digital systems', 'type' => 'general', 'featured' => 1, 'slug' => 'web-software-development', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 2, 'name' => 'Graphic Design & Branding', 'description' => 'Logos, brand identity and visual design', 'type' => 'general', 'featured' => 1, 'slug' => 'graphic-design-branding', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 3, 'name' => 'Tailoring & Fashion Design', 'description' => 'Custom clothing and Rwandan fashion craftsmanship', 'type' => 'general', 'featured' => 0, 'slug' => 'tailoring-fashion-design', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 4, 'name' => 'Carpentry & Woodwork', 'description' => 'Furniture making and woodwork craftsmanship', 'type' => 'general', 'featured' => 0, 'slug' => 'carpentry-woodwork', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 5, 'name' => 'Photography & Videography', 'description' => 'Event, portrait and commercial photography/video', 'type' => 'general', 'featured' => 1, 'slug' => 'photography-videography', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // product_categories
        // ---------------------------------------------------------------
        DB::table('product_categories')->insert([
            ['id' => 1, 'name' => 'Handmade Crafts & Art', 'slug' => 'handmade-crafts-art', 'description' => 'Imigongo art, baskets and handmade decor', 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
            ['id' => 2, 'name' => 'Fashion & Textiles', 'slug' => 'fashion-textiles', 'description' => 'Kitenge and locally tailored clothing', 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
            ['id' => 3, 'name' => 'Agro Products', 'slug' => 'agro-products', 'description' => 'Coffee, honey and farm produce', 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
            ['id' => 4, 'name' => 'Home & Furniture', 'slug' => 'home-furniture', 'description' => 'Locally made furniture and home goods', 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
            ['id' => 5, 'name' => 'Beauty & Wellness', 'slug' => 'beauty-wellness', 'description' => 'Skincare and wellness products', 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // job_categories (self-referencing parent_id)
        // ---------------------------------------------------------------
        DB::table('job_categories')->insert([
            ['id' => 1, 'name' => 'Information Technology', 'slug' => 'information-technology', 'parent_id' => null, 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
            ['id' => 2, 'name' => 'Software Development', 'slug' => 'software-development', 'parent_id' => 1, 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
            ['id' => 3, 'name' => 'Design & Creative', 'slug' => 'design-creative', 'parent_id' => null, 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
            ['id' => 4, 'name' => 'Sales & Marketing', 'slug' => 'sales-marketing', 'parent_id' => null, 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
            ['id' => 5, 'name' => 'Construction & Engineering', 'slug' => 'construction-engineering', 'parent_id' => null, 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // pricing_plans
        // ---------------------------------------------------------------
        DB::table('pricing_plans')->insert([
            ['id' => 1, 'name' => 'Starter', 'description' => 'Free plan for talents getting started', 'subtitle' => 'For individuals exploring the platform', 'limit_text' => 'Up to 2 active listings', 'is_featured' => 0, 'features' => json_encode(['2 listings', 'Basic profile', 'Community support']), 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 2, 'name' => 'Basic', 'description' => 'For growing talents and freelancers', 'subtitle' => 'For active freelancers', 'limit_text' => 'Up to 10 active listings', 'is_featured' => 0, 'features' => json_encode(['10 listings', 'Verified badge', 'Email support']), 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 3, 'name' => 'Professional', 'description' => 'For established talents and small businesses', 'subtitle' => 'Most popular', 'limit_text' => 'Unlimited listings', 'is_featured' => 1, 'features' => json_encode(['Unlimited listings', 'Featured placement', 'Priority support', 'Analytics dashboard']), 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 4, 'name' => 'Business', 'description' => 'For companies hiring at scale', 'subtitle' => 'For corporate recruiters', 'limit_text' => 'Unlimited job postings', 'is_featured' => 0, 'features' => json_encode(['Unlimited job posts', 'Corporate recruitment tools', 'Dedicated account manager']), 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 5, 'name' => 'Enterprise', 'description' => 'Custom solutions for large organizations', 'subtitle' => 'Contact sales', 'limit_text' => 'Custom limits', 'is_featured' => 0, 'features' => json_encode(['Custom integrations', 'SLA support', 'Onboarding assistance']), 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // plan_prices
        // ---------------------------------------------------------------
        DB::table('plan_prices')->insert([
            ['id' => 1, 'pricing_plan_id' => 1, 'billing_cycle' => 'monthly', 'price' => 0.00, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 2, 'pricing_plan_id' => 2, 'billing_cycle' => 'monthly', 'price' => 5000.00, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 3, 'pricing_plan_id' => 3, 'billing_cycle' => 'monthly', 'price' => 15000.00, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 4, 'pricing_plan_id' => 3, 'billing_cycle' => 'annually', 'price' => 150000.00, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 5, 'pricing_plan_id' => 4, 'billing_cycle' => 'monthly', 'price' => 35000.00, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // roles / permissions (spatie/laravel-permission)
        // ---------------------------------------------------------------
        DB::table('roles')->insert([
            ['id' => 1, 'name' => 'admin', 'guard_name' => 'web', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 2, 'name' => 'talent', 'guard_name' => 'web', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 3, 'name' => 'client', 'guard_name' => 'web', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 4, 'name' => 'company', 'guard_name' => 'web', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 5, 'name' => 'diaspora', 'guard_name' => 'web', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
        ]);

        DB::table('permissions')->insert([
            ['id' => 1, 'name' => 'manage-users', 'guard_name' => 'web', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 2, 'name' => 'manage-talents', 'guard_name' => 'web', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 3, 'name' => 'manage-projects', 'guard_name' => 'web', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 4, 'name' => 'manage-orders', 'guard_name' => 'web', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 5, 'name' => 'manage-content', 'guard_name' => 'web', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
        ]);

        DB::table('role_has_permissions')->insert([
            ['permission_id' => 1, 'role_id' => 1],
            ['permission_id' => 2, 'role_id' => 1],
            ['permission_id' => 3, 'role_id' => 1],
            ['permission_id' => 4, 'role_id' => 1],
            ['permission_id' => 5, 'role_id' => 1],
        ]);

        DB::table('model_has_roles')->insert([
            ['role_id' => 1, 'model_type' => 'App\\Models\\User', 'model_id' => 1],
            ['role_id' => 2, 'model_type' => 'App\\Models\\User', 'model_id' => 3],
            ['role_id' => 2, 'model_type' => 'App\\Models\\User', 'model_id' => 4],
            ['role_id' => 3, 'model_type' => 'App\\Models\\User', 'model_id' => 2],
            ['role_id' => 4, 'model_type' => 'App\\Models\\User', 'model_id' => 5],
        ]);

        DB::table('model_has_permissions')->insert([
            ['permission_id' => 1, 'model_type' => 'App\\Models\\User', 'model_id' => 1],
            ['permission_id' => 2, 'model_type' => 'App\\Models\\User', 'model_id' => 1],
            ['permission_id' => 3, 'model_type' => 'App\\Models\\User', 'model_id' => 1],
            ['permission_id' => 4, 'model_type' => 'App\\Models\\User', 'model_id' => 1],
            ['permission_id' => 5, 'model_type' => 'App\\Models\\User', 'model_id' => 1],
        ]);

        // ---------------------------------------------------------------
        // partners
        // ---------------------------------------------------------------
        DB::table('partners')->insert([
            ['id' => 1, 'name' => 'Rwanda Development Board', 'description' => 'Government agency supporting business growth', 'logo' => 'partners/rdb.png', 'link' => 'https://rdb.rw', 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 2, 'name' => 'MTN Rwanda', 'description' => 'Telecom and Mobile Money partner', 'logo' => 'partners/mtn.png', 'link' => 'https://mtn.co.rw', 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 3, 'name' => 'Bank of Kigali', 'description' => 'Financial services partner', 'logo' => 'partners/bk.png', 'link' => 'https://bk.rw', 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 4, 'name' => 'Irembo', 'description' => 'E-government services partner', 'logo' => 'partners/irembo.png', 'link' => 'https://irembo.gov.rw', 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 5, 'name' => 'Zipline Rwanda', 'description' => 'Logistics and delivery partner', 'logo' => 'partners/zipline.png', 'link' => 'https://flyzipline.com', 'is_active' => 0, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // faqs
        // ---------------------------------------------------------------
        DB::table('faqs')->insert([
            ['id' => 1, 'question' => 'How do I register as a talent on FutureConnect?', 'answer' => 'Create an account, choose "Talent" and complete your profile with your skills and category.', 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 2, 'question' => 'What payment methods are supported?', 'answer' => 'We support MTN Mobile Money, Airtel Money, and cash on delivery for orders within Rwanda.', 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 3, 'question' => 'How does the diaspora sponsorship program work?', 'answer' => 'Diaspora members can create an account and sponsor community projects directly through the platform.', 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 4, 'question' => 'Can companies post job openings?', 'answer' => 'Yes, verified company accounts can post job sections under Business or Enterprise pricing plans.', 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 5, 'question' => 'Is there a mobile app?', 'answer' => 'FutureConnect is currently a responsive web platform; a mobile app is on our roadmap.', 'is_active' => 1, 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // success_stories
        // ---------------------------------------------------------------
        DB::table('success_stories')->insert([
            ['id' => 1, 'title' => 'From Kigali Garage to Full-Stack Developer', 'slug' => 'kigali-garage-to-full-stack-developer', 'thumbnail_url' => 'success-stories/story1.jpg', 'excerpt' => 'Jean taught himself to code and now builds Laravel apps for clients across East Africa.', 'content' => 'A detailed account of Jean\'s journey from a self-taught hobbyist to a professional Laravel developer working with clients across the region.', 'author_name' => 'Jean Niyonzima', 'role' => 'Web Developer', 'created_at' => $now->copy()->subMonths(4), 'updated_at' => $now],
            ['id' => 2, 'title' => 'Building a Fashion Brand from Nyamirambo', 'slug' => 'building-fashion-brand-nyamirambo', 'thumbnail_url' => 'success-stories/story2.jpg', 'excerpt' => 'Emmanuel turned his tailoring skills into a growing fashion label sold across Kigali.', 'content' => 'How a tailoring apprenticeship in Nyamirambo grew into a small fashion label with steady orders.', 'author_name' => 'Emmanuel Byiringiro', 'role' => 'Tailor & Fashion Designer', 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now],
            ['id' => 3, 'title' => 'Diaspora Support Rebuilds a Village Workshop', 'slug' => 'diaspora-support-rebuilds-village-workshop', 'thumbnail_url' => 'success-stories/story3.jpg', 'excerpt' => 'A sponsorship from a diaspora member helped rebuild a carpentry workshop in Huye.', 'content' => 'A carpentry cooperative in Huye received sponsorship support that let them buy new tools and expand training.', 'author_name' => 'Grace Uwase', 'role' => 'Carpenter', 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now],
            ['id' => 4, 'title' => 'From Freelance Photography to a Studio in Musanze', 'slug' => 'freelance-photography-studio-musanze', 'thumbnail_url' => 'success-stories/story4.jpg', 'excerpt' => 'David grew his event photography gigs into a permanent studio near Musanze.', 'content' => 'David booked his first wedding through FutureConnect and has since opened a small studio.', 'author_name' => 'David Nkurunziza', 'role' => 'Photographer', 'created_at' => $now->copy()->subMonths(1), 'updated_at' => $now],
            ['id' => 5, 'title' => 'Graphic Designer Lands First International Client', 'slug' => 'graphic-designer-first-international-client', 'thumbnail_url' => 'success-stories/story5.jpg', 'excerpt' => 'Claudine used her FutureConnect portfolio to land a branding contract with a diaspora-owned startup.', 'content' => 'Claudine\'s portfolio page helped her connect with a diaspora entrepreneur who hired her for a full rebrand.', 'author_name' => 'Claudine Ingabire', 'role' => 'Graphic Designer', 'created_at' => $now->copy()->subWeeks(3), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // demo_requests
        // ---------------------------------------------------------------
        DB::table('demo_requests')->insert([
            ['id' => 1, 'full_name' => 'Patrick Habimana', 'work_email' => 'patrick.habimana@bralirwa.rw', 'phone' => '+250788123456', 'company_name' => 'Bralirwa Ltd', 'company_size' => '201-500', 'role' => 'HR Manager', 'preferred_date' => $now->copy()->addDays(5)->toDateString(), 'preferred_time' => '10:00 AM', 'message' => 'Interested in bulk hiring for seasonal roles.', 'status' => 'pending', 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 2, 'full_name' => 'Sandra Nshuti', 'work_email' => 'sandra.nshuti@urwibutso.rw', 'phone' => '+250788234567', 'company_name' => 'Urwibutso Enterprise', 'company_size' => '51-200', 'role' => 'Procurement Officer', 'preferred_date' => $now->copy()->addDays(3)->toDateString(), 'preferred_time' => '2:00 PM', 'message' => 'Want to source local artisans for our product line.', 'status' => 'scheduled', 'created_at' => $now->copy()->subDays(8), 'updated_at' => $now],
            ['id' => 3, 'full_name' => 'Eric Nsengimana', 'work_email' => 'eric.n@kigaliheights.rw', 'phone' => '+250722345678', 'company_name' => 'Kigali Heights Property', 'company_size' => '11-50', 'role' => 'Operations Lead', 'preferred_date' => null, 'preferred_time' => null, 'message' => 'Need contractors for office fit-out.', 'status' => 'completed', 'created_at' => $now->copy()->subDays(25), 'updated_at' => $now],
            ['id' => 4, 'full_name' => 'Aline Umutoni', 'work_email' => 'aline.umutoni@irembopay.rw', 'phone' => '+250733456789', 'company_name' => 'IremboPay', 'company_size' => '11-50', 'role' => 'Partnerships Manager', 'preferred_date' => $now->copy()->addDays(7)->toDateString(), 'preferred_time' => '9:30 AM', 'message' => 'Exploring API integration for talent payouts.', 'status' => 'pending', 'created_at' => $now->copy()->subDays(4), 'updated_at' => $now],
            ['id' => 5, 'full_name' => 'Emmanuel Rugamba', 'work_email' => 'emmanuel.rugamba@zipline.com', 'phone' => '+250788345678', 'company_name' => 'Zipline Rwanda', 'company_size' => '201-500', 'role' => 'Logistics Coordinator', 'preferred_date' => $now->copy()->subDays(2)->toDateString(), 'preferred_time' => '11:00 AM', 'message' => 'Cancelled due to internal restructuring.', 'status' => 'cancelled', 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // contacts
        // ---------------------------------------------------------------
        DB::table('contacts')->insert([
            ['id' => 1, 'names' => 'Fabrice Iradukunda', 'email' => 'fabrice.irad@gmail.com', 'subject' => 'Question about seller registration', 'message' => 'How long does seller approval take on the marketplace?', 'created_at' => $now->copy()->subDays(15), 'updated_at' => $now],
            ['id' => 2, 'names' => 'Yvonne Uwineza', 'email' => 'yvonne.uwineza@gmail.com', 'subject' => 'Partnership inquiry', 'message' => 'We would like to explore a partnership for our training NGO.', 'created_at' => $now->copy()->subDays(12), 'updated_at' => $now],
            ['id' => 3, 'names' => 'Olivier Ndayisenga', 'email' => 'olivier.nday@gmail.com', 'subject' => 'Issue with an order', 'message' => 'My order has not been confirmed after 3 days, please assist.', 'created_at' => $now->copy()->subDays(6), 'updated_at' => $now],
            ['id' => 4, 'names' => 'Immaculee Nyirahabimana', 'email' => 'immaculee.n@gmail.com', 'subject' => 'Course access problem', 'message' => 'I cannot access the video lessons for the course I enrolled in.', 'created_at' => $now->copy()->subDays(3), 'updated_at' => $now],
            ['id' => 5, 'names' => 'Theogene Mugabo', 'email' => 'theogene.mugabo@gmail.com', 'subject' => 'General feedback', 'message' => 'Great platform, would love to see a mobile app soon.', 'created_at' => $now->copy()->subDays(1), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // talents
        // ---------------------------------------------------------------
        DB::table('talents')->insert([
            ['id' => 1, 'name' => 'Jean Niyonzima', 'user_id' => 3, 'category_id' => 1, 'description' => 'Full-stack Laravel developer building web platforms for Rwandan businesses.', 'image' => 'talents/jean.jpg', 'address' => 'Kimironko, Gasabo, Kigali', 'phone' => '+250788111222', 'email' => 'jean.niyonzima@gmail.com', 'language' => 'Kinyarwanda, English, French', 'matched' => 1, 'status' => 'approved', 'featured' => 1, 'level' => 'advanced', 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 2, 'name' => 'Claudine Ingabire', 'user_id' => 4, 'category_id' => 2, 'description' => 'Brand and graphic designer specializing in logos and marketing materials.', 'image' => 'talents/claudine.jpg', 'address' => 'Kacyiru, Gasabo, Kigali', 'phone' => '+250788222333', 'email' => 'claudine.ingabire@gmail.com', 'language' => 'Kinyarwanda, English', 'matched' => 0, 'status' => 'approved', 'featured' => 1, 'level' => 'intermediate', 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 3, 'name' => 'Emmanuel Byiringiro', 'user_id' => null, 'category_id' => 3, 'description' => 'Custom tailor and fashion designer based in Nyamirambo.', 'image' => 'talents/emmanuel.jpg', 'address' => 'Nyamirambo, Nyarugenge, Kigali', 'phone' => '+250722333444', 'email' => 'emmanuel.byiringiro@gmail.com', 'language' => 'Kinyarwanda, Swahili', 'matched' => 0, 'status' => 'approved', 'featured' => 0, 'level' => 'advanced', 'created_at' => $now->copy()->subMonths(4), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 4, 'name' => 'Grace Uwase', 'user_id' => null, 'category_id' => 4, 'description' => 'Carpenter and furniture maker producing custom home furniture.', 'image' => 'talents/grace.jpg', 'address' => 'Tumba, Huye District', 'phone' => '+250733444555', 'email' => 'grace.uwase@gmail.com', 'language' => 'Kinyarwanda', 'matched' => 0, 'status' => 'pending', 'featured' => 0, 'level' => 'beginner', 'created_at' => $now->copy()->subMonths(1), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 5, 'name' => 'David Nkurunziza', 'user_id' => null, 'category_id' => 5, 'description' => 'Event photographer and videographer serving Musanze and Kigali.', 'image' => 'talents/david.jpg', 'address' => 'Muhoza, Musanze District', 'phone' => '+250788555666', 'email' => 'david.nkurunziza@gmail.com', 'language' => 'Kinyarwanda, English', 'matched' => 1, 'status' => 'approved', 'featured' => 0, 'level' => 'intermediate', 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now, 'deleted_at' => null],
        ]);

        // ---------------------------------------------------------------
        // skills
        // ---------------------------------------------------------------
        DB::table('skills')->insert([
            ['id' => 1, 'name' => 'Laravel Web Development', 'slug' => 'laravel-web-development', 'description' => 'Building scalable web applications using Laravel and React/Inertia.', 'image' => 'skills/laravel.jpg', 'talent_id' => 1, 'category_id' => 1, 'tags' => 'laravel,php,react,inertia', 'status' => 'published', 'level' => 'Advanced', 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
            ['id' => 2, 'name' => 'Logo & Brand Identity Design', 'slug' => 'logo-brand-identity-design', 'description' => 'Designing logos and complete brand identity kits.', 'image' => 'skills/branding.jpg', 'talent_id' => 2, 'category_id' => 2, 'tags' => 'branding,logo,illustrator', 'status' => 'published', 'level' => 'Intermediate', 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now],
            ['id' => 3, 'name' => 'Custom Suit Tailoring', 'slug' => 'custom-suit-tailoring', 'description' => 'Made-to-measure suits and traditional Rwandan attire.', 'image' => 'skills/tailoring.jpg', 'talent_id' => 3, 'category_id' => 3, 'tags' => 'tailoring,fashion,suits', 'status' => 'published', 'level' => 'Advanced', 'created_at' => $now->copy()->subMonths(4), 'updated_at' => $now],
            ['id' => 4, 'name' => 'Furniture Making & Carpentry', 'slug' => 'furniture-making-carpentry', 'description' => 'Custom furniture built from local hardwood.', 'image' => 'skills/carpentry.jpg', 'talent_id' => 4, 'category_id' => 4, 'tags' => 'carpentry,furniture,woodwork', 'status' => 'draft', 'level' => 'Beginner', 'created_at' => $now->copy()->subMonths(1), 'updated_at' => $now],
            ['id' => 5, 'name' => 'Event Photography', 'slug' => 'event-photography', 'description' => 'Wedding, corporate and cultural event photography.', 'image' => 'skills/photography.jpg', 'talent_id' => 5, 'category_id' => 5, 'tags' => 'photography,events,video', 'status' => 'published', 'level' => 'Intermediate', 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // skill_reviews
        // ---------------------------------------------------------------
        DB::table('skill_reviews')->insert([
            ['id' => 1, 'skill_id' => 1, 'name' => 'Alice Mukamana', 'email' => 'alice.mukamana@gmail.com', 'rating' => 5, 'message' => 'Jean delivered our platform ahead of schedule with clean code.', 'created_at' => $now->copy()->subDays(40), 'updated_at' => $now],
            ['id' => 2, 'skill_id' => 2, 'name' => 'Patrick Habimana', 'email' => 'patrick.habimana@bralirwa.rw', 'rating' => 4, 'message' => 'Great branding work, minor delay on revisions.', 'created_at' => $now->copy()->subDays(35), 'updated_at' => $now],
            ['id' => 3, 'skill_id' => 3, 'name' => 'Sandra Nshuti', 'email' => 'sandra.nshuti@urwibutso.rw', 'rating' => 5, 'message' => 'Excellent tailoring, the suit fit perfectly.', 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now],
            ['id' => 4, 'skill_id' => 5, 'name' => 'Yvonne Uwineza', 'email' => 'yvonne.uwineza@gmail.com', 'rating' => 5, 'message' => 'David captured our wedding beautifully.', 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 5, 'skill_id' => 1, 'name' => 'Olivier Ndayisenga', 'email' => 'olivier.nday@gmail.com', 'rating' => 4, 'message' => 'Solid developer, communicates well.', 'created_at' => $now->copy()->subDays(5), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // stories
        // ---------------------------------------------------------------
        DB::table('stories')->insert([
            ['id' => 1, 'talent_id' => 1, 'title' => 'Learning to Code in a Kigali Cyber Cafe', 'content' => 'I started learning PHP from tutorials at a local cyber cafe before I owned a laptop.', 'media' => 'stories/media1.jpg', 'thumbnail' => 'stories/thumb1.jpg', 'slug' => 'learning-to-code-kigali-cyber-cafe', 'category_id' => 1, 'tags' => 'coding,journey', 'status' => 'published', 'views' => 342, 'created_at' => $now->copy()->subMonths(4), 'updated_at' => $now],
            ['id' => 2, 'talent_id' => 2, 'title' => 'Designing My First Client Brand', 'content' => 'My first paid design job was a logo for a small cafe in Kacyiru.', 'media' => 'stories/media2.jpg', 'thumbnail' => 'stories/thumb2.jpg', 'slug' => 'designing-my-first-client-brand', 'category_id' => 2, 'tags' => 'design,branding', 'status' => 'published', 'views' => 210, 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now],
            ['id' => 3, 'talent_id' => 3, 'title' => 'From Apprentice to Master Tailor', 'content' => 'I apprenticed for two years before opening my own small tailoring shop.', 'media' => 'stories/media3.jpg', 'thumbnail' => 'stories/thumb3.jpg', 'slug' => 'from-apprentice-to-master-tailor', 'category_id' => 3, 'tags' => 'tailoring,craft', 'status' => 'pending', 'views' => 58, 'created_at' => $now->copy()->subMonths(1), 'updated_at' => $now],
            ['id' => 4, 'talent_id' => 4, 'title' => 'Building My First Dining Table', 'content' => 'My father taught me woodworking basics before I built my first commissioned piece.', 'media' => 'stories/media4.jpg', 'thumbnail' => 'stories/thumb4.jpg', 'slug' => 'building-my-first-dining-table', 'category_id' => 4, 'tags' => 'carpentry,craft', 'status' => 'approved', 'views' => 76, 'created_at' => $now->copy()->subWeeks(3), 'updated_at' => $now],
            ['id' => 5, 'talent_id' => 5, 'title' => 'Shooting My First Wedding in Musanze', 'content' => 'A nerve-wracking but rewarding first wedding shoot near the Virunga mountains.', 'media' => 'stories/media5.jpg', 'thumbnail' => 'stories/thumb5.jpg', 'slug' => 'shooting-first-wedding-musanze', 'category_id' => 5, 'tags' => 'photography,events', 'status' => 'published', 'views' => 415, 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // story_comments
        // ---------------------------------------------------------------
        DB::table('story_comments')->insert([
            ['id' => 1, 'story_id' => 1, 'name' => 'Aline Umutoni', 'email' => 'aline.umutoni@irembopay.rw', 'comment' => 'Inspiring! I am on a similar path right now.', 'rating' => 5, 'created_at' => $now->copy()->subDays(30), 'updated_at' => $now],
            ['id' => 2, 'story_id' => 1, 'name' => 'Eric Nsengimana', 'email' => 'eric.n@kigaliheights.rw', 'comment' => 'Great to see local talent grow like this.', 'rating' => 4, 'created_at' => $now->copy()->subDays(28), 'updated_at' => $now],
            ['id' => 3, 'story_id' => 2, 'name' => 'Fabrice Iradukunda', 'email' => 'fabrice.irad@gmail.com', 'comment' => 'Loved the before/after of the logo design.', 'rating' => 5, 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now],
            ['id' => 4, 'story_id' => 5, 'name' => 'Theogene Mugabo', 'email' => 'theogene.mugabo@gmail.com', 'comment' => 'Amazing shots, the lighting is perfect.', 'rating' => 5, 'created_at' => $now->copy()->subDays(15), 'updated_at' => $now],
            ['id' => 5, 'story_id' => 4, 'name' => 'Immaculee Nyirahabimana', 'email' => 'immaculee.n@gmail.com', 'comment' => 'Would love to order a table like this.', 'rating' => 4, 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // testimonials
        // ---------------------------------------------------------------
        DB::table('testimonials')->insert([
            ['id' => 1, 'talent_id' => 1, 'title' => 'Delivered on time, every time', 'content' => 'Jean rebuilt our booking system in three weeks with zero downtime.', 'rating' => 5, 'created_at' => $now->copy()->subDays(45), 'updated_at' => $now],
            ['id' => 2, 'talent_id' => 2, 'title' => 'Our brand finally feels professional', 'content' => 'Claudine\'s designs elevated our entire marketing presence.', 'rating' => 5, 'created_at' => $now->copy()->subDays(40), 'updated_at' => $now],
            ['id' => 3, 'talent_id' => 3, 'title' => 'Best tailor in Nyamirambo', 'content' => 'Emmanuel made my wedding suit and it fit perfectly on the first try.', 'rating' => 5, 'created_at' => $now->copy()->subDays(35), 'updated_at' => $now],
            ['id' => 4, 'talent_id' => 5, 'title' => 'Captured every moment beautifully', 'content' => 'David\'s photos from our corporate event were outstanding.', 'rating' => 4, 'created_at' => $now->copy()->subDays(18), 'updated_at' => $now],
            ['id' => 5, 'talent_id' => 1, 'title' => 'Responsive and skilled developer', 'content' => 'Quick to respond, fixed our bugs within hours.', 'rating' => 4, 'created_at' => $now->copy()->subDays(7), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // talent_feedback
        // ---------------------------------------------------------------
        DB::table('talent_feedback')->insert([
            ['id' => 1, 'talent_id' => 1, 'name' => 'Diane Mutesi', 'email' => 'diane.mutesi@techhubrwanda.rw', 'rating' => 5, 'comment' => 'Excellent communication throughout the project.', 'created_at' => $now->copy()->subDays(50), 'updated_at' => $now],
            ['id' => 2, 'talent_id' => 2, 'name' => 'Alice Mukamana', 'email' => 'alice.mukamana@gmail.com', 'rating' => 4, 'comment' => 'Good work, a bit slow on the first draft.', 'created_at' => $now->copy()->subDays(33), 'updated_at' => $now],
            ['id' => 3, 'talent_id' => 3, 'name' => 'Yvonne Uwineza', 'email' => 'yvonne.uwineza@gmail.com', 'rating' => 5, 'comment' => 'Very professional and punctual.', 'created_at' => $now->copy()->subDays(22), 'updated_at' => $now],
            ['id' => 4, 'talent_id' => 4, 'name' => 'Olivier Ndayisenga', 'email' => null, 'rating' => 3, 'comment' => 'Furniture was good but delivery was delayed.', 'created_at' => $now->copy()->subDays(14), 'updated_at' => $now],
            ['id' => 5, 'talent_id' => 5, 'name' => 'Theogene Mugabo', 'email' => 'theogene.mugabo@gmail.com', 'rating' => 5, 'comment' => 'Photos exceeded our expectations.', 'created_at' => $now->copy()->subDays(6), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // talent_connections
        // ---------------------------------------------------------------
        DB::table('talent_connections')->insert([
            ['id' => 1, 'talent_id' => 1, 'name' => 'Diane Mutesi', 'email' => 'diane.mutesi@techhubrwanda.rw', 'status' => 'accepted', 'message' => 'We would like to discuss a long-term contract for our web platform.', 'response' => 'Happy to connect, please share the project brief.', 'created_at' => $now->copy()->subDays(48), 'updated_at' => $now],
            ['id' => 2, 'talent_id' => 2, 'name' => 'Fabrice Iradukunda', 'email' => 'fabrice.irad@gmail.com', 'status' => 'pending', 'message' => 'Interested in a rebrand for my small business.', 'response' => null, 'created_at' => $now->copy()->subDays(9), 'updated_at' => $now],
            ['id' => 3, 'talent_id' => 3, 'name' => 'Sandra Nshuti', 'email' => 'sandra.nshuti@urwibutso.rw', 'status' => 'accepted', 'message' => 'We need uniforms for our staff, 30 pieces.', 'response' => 'Sure, let us schedule measurements next week.', 'created_at' => $now->copy()->subDays(27), 'updated_at' => $now],
            ['id' => 4, 'talent_id' => 4, 'name' => 'Eric Nsengimana', 'email' => 'eric.n@kigaliheights.rw', 'status' => 'rejected', 'message' => 'Looking for office furniture on a tight deadline.', 'response' => 'Unfortunately I cannot meet that deadline right now.', 'created_at' => $now->copy()->subDays(19), 'updated_at' => $now],
            ['id' => 5, 'talent_id' => 5, 'name' => 'Immaculee Nyirahabimana', 'email' => 'immaculee.n@gmail.com', 'status' => 'cancelled', 'message' => 'Wanted to book for a birthday event.', 'response' => null, 'created_at' => $now->copy()->subDays(4), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // announcements
        // ---------------------------------------------------------------
        DB::table('announcements')->insert([
            ['id' => 1, 'title' => 'Platform Maintenance on Saturday Night', 'content' => 'FutureConnect will be under maintenance from 11PM to 2AM CAT this Saturday.', 'image' => null, 'link' => null, 'is_active' => 1, 'created_by' => 1, 'category_id' => 1, 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 2, 'title' => 'New Diaspora Sponsorship Feature Launched', 'content' => 'Diaspora members can now sponsor community projects directly from their dashboard.', 'image' => 'announcements/diaspora.jpg', 'link' => '/diaspora', 'is_active' => 1, 'created_by' => 1, 'category_id' => 1, 'created_at' => $now->copy()->subDays(25), 'updated_at' => $now],
            ['id' => 3, 'title' => 'Free Design Skills Course Now Live', 'content' => 'Claudine Ingabire has launched a free introductory graphic design course.', 'image' => 'announcements/course.jpg', 'link' => '/courses', 'is_active' => 1, 'created_by' => 1, 'category_id' => 2, 'created_at' => $now->copy()->subDays(15), 'updated_at' => $now],
            ['id' => 4, 'title' => 'Marketplace Now Accepts Airtel Money', 'content' => 'You can now check out on the FutureConnect marketplace with Airtel Money.', 'image' => null, 'link' => null, 'is_active' => 1, 'created_by' => 1, 'category_id' => 1, 'created_at' => $now->copy()->subDays(5), 'updated_at' => $now],
            ['id' => 5, 'title' => 'Job Board Update: New Categories Added', 'content' => 'We added Construction & Engineering as a new job category.', 'image' => null, 'link' => '/jobs', 'is_active' => 0, 'created_by' => 1, 'category_id' => 5, 'created_at' => $now->copy()->subDays(2), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // announcement_comments
        // ---------------------------------------------------------------
        DB::table('announcement_comments')->insert([
            ['id' => 1, 'announcement_id' => 1, 'name' => 'Fabrice Iradukunda', 'email' => 'fabrice.irad@gmail.com', 'content' => 'Thanks for the heads up!', 'created_at' => $now->copy()->subDays(9), 'updated_at' => $now],
            ['id' => 2, 'announcement_id' => 2, 'name' => 'Aline Umutoni', 'email' => 'aline.umutoni@irembopay.rw', 'content' => 'This is exactly what our community project needed.', 'created_at' => $now->copy()->subDays(24), 'updated_at' => $now],
            ['id' => 3, 'announcement_id' => 3, 'name' => 'Yvonne Uwineza', 'email' => 'yvonne.uwineza@gmail.com', 'content' => 'Enrolled already, excited to start!', 'created_at' => $now->copy()->subDays(14), 'updated_at' => $now],
            ['id' => 4, 'announcement_id' => 4, 'name' => 'Olivier Ndayisenga', 'email' => 'olivier.nday@gmail.com', 'content' => 'Finally! Airtel Money is what most of my customers use.', 'created_at' => $now->copy()->subDays(4), 'updated_at' => $now],
            ['id' => 5, 'announcement_id' => 3, 'name' => 'Theogene Mugabo', 'email' => 'theogene.mugabo@gmail.com', 'content' => 'Is there a certificate on completion?', 'created_at' => $now->copy()->subDays(13), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // blogs
        // ---------------------------------------------------------------
        DB::table('blogs')->insert([
            ['id' => 1, 'title' => '5 Tips for Freelancing Successfully in Rwanda', 'slug' => '5-tips-freelancing-successfully-rwanda', 'content' => 'Freelancing in Rwanda is growing fast. Here are five practical tips to build a sustainable freelance career locally.', 'image' => 'blogs/blog1.jpg', 'author_id' => 1, 'category_id' => 1, 'views' => 890, 'is_published' => 1, 'created_at' => $now->copy()->subMonths(4), 'updated_at' => $now],
            ['id' => 2, 'title' => 'How Mobile Money is Changing Local Commerce', 'slug' => 'mobile-money-changing-local-commerce', 'content' => 'MTN Mobile Money and Airtel Money have reshaped how small businesses accept payments across Rwanda.', 'image' => 'blogs/blog2.jpg', 'author_id' => 1, 'category_id' => 1, 'views' => 654, 'is_published' => 1, 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now],
            ['id' => 3, 'title' => 'Why Branding Matters for Small Businesses', 'slug' => 'why-branding-matters-small-businesses', 'content' => 'A strong brand identity helps small Rwandan businesses stand out in a competitive market.', 'image' => 'blogs/blog3.jpg', 'author_id' => 1, 'category_id' => 2, 'views' => 421, 'is_published' => 1, 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now],
            ['id' => 4, 'title' => 'The Rise of Diaspora-Funded Community Projects', 'slug' => 'rise-diaspora-funded-community-projects', 'content' => 'More Rwandans abroad are directly funding local projects through platforms like FutureConnect.', 'image' => 'blogs/blog4.jpg', 'author_id' => 1, 'category_id' => 1, 'views' => 302, 'is_published' => 1, 'created_at' => $now->copy()->subMonths(1), 'updated_at' => $now],
            ['id' => 5, 'title' => 'A Guide to Hiring Local Talent for Your Startup', 'slug' => 'guide-hiring-local-talent-startup', 'content' => 'Draft guide on best practices for startups hiring skilled talent through the platform.', 'image' => 'blogs/blog5.jpg', 'author_id' => 1, 'category_id' => 1, 'views' => 12, 'is_published' => 0, 'created_at' => $now->copy()->subDays(3), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // courses
        // ---------------------------------------------------------------
        DB::table('courses')->insert([
            ['id' => 1, 'talent_id' => 1, 'title' => 'Laravel Fundamentals for Beginners', 'slug' => 'laravel-fundamentals-for-beginners', 'description' => 'Learn the basics of Laravel: routing, controllers, Eloquent and Blade.', 'category_id' => 1, 'is_free' => 1, 'price' => null, 'level' => 'Beginner', 'thumbnail' => 'courses/laravel.jpg', 'video' => 'courses/videos/laravel-intro.mp4', 'status' => 'published', 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 2, 'talent_id' => 2, 'title' => 'Logo Design Masterclass', 'slug' => 'logo-design-masterclass', 'description' => 'From concept sketches to a polished vector logo, step by step.', 'category_id' => 2, 'is_free' => 0, 'price' => 10000.00, 'level' => 'Intermediate', 'thumbnail' => 'courses/logo.jpg', 'video' => 'courses/videos/logo-intro.mp4', 'status' => 'published', 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 3, 'talent_id' => 1, 'title' => 'Building APIs with Laravel', 'slug' => 'building-apis-with-laravel', 'description' => 'Design and secure REST APIs for mobile and web clients.', 'category_id' => 1, 'is_free' => 0, 'price' => 15000.00, 'level' => 'Advanced', 'thumbnail' => 'courses/api.jpg', 'video' => 'courses/videos/api-intro.mp4', 'status' => 'published', 'created_at' => $now->copy()->subMonths(1), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 4, 'talent_id' => 5, 'title' => 'Event Photography Basics', 'slug' => 'event-photography-basics', 'description' => 'Camera settings, lighting and posing tips for event shoots.', 'category_id' => 5, 'is_free' => 1, 'price' => null, 'level' => 'Beginner', 'thumbnail' => 'courses/photography.jpg', 'video' => 'courses/videos/photo-intro.mp4', 'status' => 'published', 'created_at' => $now->copy()->subWeeks(3), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 5, 'talent_id' => 3, 'title' => 'Intro to Pattern Cutting', 'slug' => 'intro-to-pattern-cutting', 'description' => 'A draft course on basic pattern cutting for tailoring beginners.', 'category_id' => 3, 'is_free' => 1, 'price' => null, 'level' => 'Beginner', 'thumbnail' => 'courses/pattern.jpg', 'video' => null, 'status' => 'draft', 'created_at' => $now->copy()->subDays(5), 'updated_at' => $now, 'deleted_at' => null],
        ]);

        // ---------------------------------------------------------------
        // course_lessons
        // ---------------------------------------------------------------
        DB::table('course_lessons')->insert([
            ['id' => 1, 'course_id' => 1, 'title' => 'Setting Up Your Laravel Environment', 'content' => 'Installing PHP, Composer and creating your first Laravel project.', 'video_url' => 'courses/videos/laravel-lesson1.mp4', 'order' => 1, 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now],
            ['id' => 2, 'course_id' => 1, 'title' => 'Routing and Controllers', 'content' => 'Understanding how requests flow through routes into controllers.', 'video_url' => 'courses/videos/laravel-lesson2.mp4', 'order' => 2, 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now],
            ['id' => 3, 'course_id' => 2, 'title' => 'Sketching Logo Concepts', 'content' => 'Turning a brand brief into three initial logo directions.', 'video_url' => 'courses/videos/logo-lesson1.mp4', 'order' => 1, 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now],
            ['id' => 4, 'course_id' => 3, 'title' => 'Authenticating API Requests', 'content' => 'Using Laravel Sanctum to secure your API endpoints.', 'video_url' => 'courses/videos/api-lesson1.mp4', 'order' => 1, 'created_at' => $now->copy()->subMonths(1), 'updated_at' => $now],
            ['id' => 5, 'course_id' => 4, 'title' => 'Understanding Camera Exposure', 'content' => 'Aperture, shutter speed and ISO explained for event shoots.', 'video_url' => 'courses/videos/photo-lesson1.mp4', 'order' => 1, 'created_at' => $now->copy()->subWeeks(3), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // course_enrollments
        // ---------------------------------------------------------------
        DB::table('course_enrollments')->insert([
            ['id' => 1, 'course_id' => 1, 'user_id' => 2, 'progress' => 80, 'status' => 'active', 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now],
            ['id' => 2, 'course_id' => 2, 'user_id' => 2, 'progress' => 100, 'status' => 'completed', 'created_at' => $now->copy()->subMonths(1), 'updated_at' => $now],
            ['id' => 3, 'course_id' => 1, 'user_id' => 5, 'progress' => 45, 'status' => 'active', 'created_at' => $now->copy()->subWeeks(3), 'updated_at' => $now],
            ['id' => 4, 'course_id' => 4, 'user_id' => 4, 'progress' => 20, 'status' => 'active', 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 5, 'course_id' => 3, 'user_id' => 5, 'progress' => 0, 'status' => 'canceled', 'created_at' => $now->copy()->subDays(5), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // course_feedback
        // ---------------------------------------------------------------
        DB::table('course_feedback')->insert([
            ['id' => 1, 'course_id' => 1, 'user_id' => 2, 'rating' => 5, 'comment' => 'Very clear explanations, great for beginners.', 'created_at' => $now->copy()->subMonths(1), 'updated_at' => $now],
            ['id' => 2, 'course_id' => 2, 'user_id' => 2, 'rating' => 4, 'comment' => 'Good course, would like more advanced examples.', 'created_at' => $now->copy()->subWeeks(3), 'updated_at' => $now],
            ['id' => 3, 'course_id' => 1, 'user_id' => 5, 'rating' => 5, 'comment' => 'Helped me finally understand Eloquent relationships.', 'created_at' => $now->copy()->subWeeks(2), 'updated_at' => $now],
            ['id' => 4, 'course_id' => 4, 'user_id' => 4, 'rating' => 4, 'comment' => 'Practical tips I could use right away.', 'created_at' => $now->copy()->subDays(8), 'updated_at' => $now],
            ['id' => 5, 'course_id' => 3, 'user_id' => 5, 'rating' => 3, 'comment' => 'A bit fast-paced for the advanced topics.', 'created_at' => $now->copy()->subDays(4), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // sellers
        // ---------------------------------------------------------------
        DB::table('sellers')->insert([
            ['id' => 1, 'user_id' => 2, 'company_name' => 'Alice Handmade Crafts', 'email' => 'alice.crafts@gmail.com', 'phone' => '+250788666777', 'address' => 'Kimisagara, Nyarugenge, Kigali', 'description' => 'Handmade Imigongo art and woven baskets.', 'status' => 'approved', 'created_at' => $now->copy()->subMonths(4), 'updated_at' => $now],
            ['id' => 2, 'user_id' => 5, 'company_name' => 'TechHub Rwanda Ltd', 'email' => 'sales@techhubrwanda.rw', 'phone' => '+250788777888', 'address' => 'Kigali Innovation City, Gasabo', 'description' => 'Technology accessories and refurbished devices.', 'status' => 'approved', 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now],
            ['id' => 3, 'user_id' => null, 'company_name' => 'Rwanda Coffee Collective', 'email' => 'orders@rwandacoffeecollective.rw', 'phone' => '+250722888999', 'address' => 'Huye Town, Huye District', 'description' => 'Specialty coffee direct from Huye cooperatives.', 'status' => 'approved', 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now],
            ['id' => 4, 'user_id' => null, 'company_name' => 'Kigali Kitenge House', 'email' => 'info@kigalikitenge.rw', 'phone' => '+250733999000', 'address' => 'Nyabugogo, Nyarugenge, Kigali', 'description' => 'Kitenge fabric and ready-made fashion.', 'status' => 'pending', 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now],
            ['id' => 5, 'user_id' => null, 'company_name' => 'Musanze Woodcraft', 'email' => 'contact@musanzewoodcraft.rw', 'phone' => '+250788000111', 'address' => 'Muhoza, Musanze District', 'description' => 'Handcrafted wooden furniture and decor.', 'status' => 'rejected', 'created_at' => $now->copy()->subDays(15), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // products
        // ---------------------------------------------------------------
        DB::table('products')->insert([
            ['id' => 1, 'seller_id' => 1, 'name' => 'Hand-woven Agaseke Basket', 'slug' => 'hand-woven-agaseke-basket', 'product_category_id' => 1, 'description' => 'Traditional Rwandan peace basket, hand-woven from sisal.', 'price' => 12000.00, 'stock' => 25, 'image' => 'products/agaseke.jpg', 'status' => 'active', 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 2, 'seller_id' => 1, 'name' => 'Imigongo Wall Art Panel', 'slug' => 'imigongo-wall-art-panel', 'product_category_id' => 1, 'description' => 'Geometric cow-dung art panel, hand-painted in traditional patterns.', 'price' => 25000.00, 'stock' => 10, 'image' => 'products/imigongo.jpg', 'status' => 'active', 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 3, 'seller_id' => 3, 'name' => 'Huye Specialty Coffee 250g', 'slug' => 'huye-specialty-coffee-250g', 'product_category_id' => 3, 'description' => 'Single-origin washed arabica coffee from Huye cooperatives.', 'price' => 6500.00, 'stock' => 100, 'image' => 'products/coffee.jpg', 'status' => 'active', 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 4, 'seller_id' => 4, 'name' => 'Kitenge Wrap Dress', 'slug' => 'kitenge-wrap-dress', 'product_category_id' => 2, 'description' => 'Colorful kitenge wrap dress, made to order.', 'price' => 18000.00, 'stock' => 15, 'image' => 'products/kitenge-dress.jpg', 'status' => 'active', 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 5, 'seller_id' => 2, 'name' => 'Refurbished Laptop Sleeve', 'slug' => 'refurbished-laptop-sleeve', 'product_category_id' => 4, 'description' => 'Locally made padded laptop sleeve, 13-15 inch.', 'price' => 8000.00, 'stock' => 0, 'image' => 'products/sleeve.jpg', 'status' => 'inactive', 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now, 'deleted_at' => null],
        ]);

        // ---------------------------------------------------------------
        // carts
        // ---------------------------------------------------------------
        DB::table('carts')->insert([
            ['id' => 1, 'user_id' => 2, 'product_id' => 3, 'quantity' => 2, 'created_at' => $now->copy()->subDays(2), 'updated_at' => $now],
            ['id' => 2, 'user_id' => 2, 'product_id' => 1, 'quantity' => 1, 'created_at' => $now->copy()->subDays(2), 'updated_at' => $now],
            ['id' => 3, 'user_id' => 5, 'product_id' => 4, 'quantity' => 1, 'created_at' => $now->copy()->subDays(1), 'updated_at' => $now],
            ['id' => 4, 'user_id' => 4, 'product_id' => 2, 'quantity' => 1, 'created_at' => $now->copy()->subHours(20), 'updated_at' => $now],
            ['id' => 5, 'user_id' => 3, 'product_id' => 3, 'quantity' => 3, 'created_at' => $now->copy()->subHours(5), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // orders
        // ---------------------------------------------------------------
        DB::table('orders')->insert([
            ['id' => 1, 'order_number' => 'FC-ORD-100001', 'user_id' => 2, 'customer_name' => 'Alice Mukamana', 'customer_email' => 'alice.mukamana@gmail.com', 'customer_phone' => '+250788111333', 'province' => 'Kigali City', 'district' => 'Gasabo', 'sector' => 'Kimironko', 'cell' => 'Bibare', 'shipping_address' => 'KG 11 Ave, Kimironko', 'payment_method' => 'momo', 'payment_phone' => '+250788111333', 'subtotal' => 24000.00, 'total_amount' => 25000.00, 'status' => 'completed', 'confirmed_at' => $now->copy()->subDays(18), 'confirmed_by' => 1, 'notes' => null, 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now],
            ['id' => 2, 'order_number' => 'FC-ORD-100002', 'user_id' => 5, 'customer_name' => 'Diane Mutesi', 'customer_email' => 'diane.mutesi@techhubrwanda.rw', 'customer_phone' => '+250788222444', 'province' => 'Kigali City', 'district' => 'Kicukiro', 'sector' => 'Niboye', 'cell' => 'Rugando', 'shipping_address' => 'KK 15 Rd, Niboye', 'payment_method' => 'airtel', 'payment_phone' => '+250733222444', 'subtotal' => 18000.00, 'total_amount' => 19000.00, 'status' => 'processing', 'confirmed_at' => null, 'confirmed_by' => null, 'notes' => 'Deliver after 5PM', 'created_at' => $now->copy()->subDays(3), 'updated_at' => $now],
            ['id' => 3, 'order_number' => 'FC-ORD-100003', 'user_id' => 4, 'customer_name' => 'Claudine Ingabire', 'customer_email' => 'claudine.ingabire@gmail.com', 'customer_phone' => '+250788333555', 'province' => 'Southern', 'district' => 'Huye', 'sector' => 'Tumba', 'cell' => 'Butamwa', 'shipping_address' => 'Near Huye Stadium', 'payment_method' => 'momo', 'payment_phone' => '+250788333555', 'subtotal' => 13000.00, 'total_amount' => 14500.00, 'status' => 'pending', 'confirmed_at' => null, 'confirmed_by' => null, 'notes' => null, 'created_at' => $now->copy()->subHours(18), 'updated_at' => $now],
            ['id' => 4, 'order_number' => 'FC-ORD-100004', 'user_id' => 3, 'customer_name' => 'Jean Niyonzima', 'customer_email' => 'jean.niyonzima@gmail.com', 'customer_phone' => '+250788444666', 'province' => 'Kigali City', 'district' => 'Nyarugenge', 'sector' => 'Nyamirambo', 'cell' => 'Rugarama', 'shipping_address' => 'KN 5 St, Nyamirambo', 'payment_method' => 'cash', 'payment_phone' => null, 'subtotal' => 19500.00, 'total_amount' => 19500.00, 'status' => 'cancelled', 'confirmed_at' => null, 'confirmed_by' => null, 'notes' => 'Customer requested cancellation.', 'created_at' => $now->copy()->subDays(12), 'updated_at' => $now],
            ['id' => 5, 'order_number' => 'FC-ORD-100005', 'user_id' => null, 'customer_name' => 'Immaculee Nyirahabimana', 'customer_email' => 'immaculee.n@gmail.com', 'customer_phone' => '+250788555777', 'province' => 'Kigali City', 'district' => 'Gasabo', 'sector' => 'Kacyiru', 'cell' => 'Kamatamu', 'shipping_address' => 'KG 7 Ave, Kacyiru', 'payment_method' => 'momo', 'payment_phone' => '+250788555777', 'subtotal' => 12000.00, 'total_amount' => 13000.00, 'status' => 'completed', 'confirmed_at' => $now->copy()->subDays(1), 'confirmed_by' => 1, 'notes' => null, 'created_at' => $now->copy()->subDays(2), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // order_items
        // ---------------------------------------------------------------
        DB::table('order_items')->insert([
            ['id' => 1, 'order_id' => 1, 'product_id' => 3, 'seller_id' => 3, 'product_name' => 'Huye Specialty Coffee 250g', 'price' => 6500.00, 'quantity' => 2, 'subtotal' => 13000.00, 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now],
            ['id' => 2, 'order_id' => 1, 'product_id' => 1, 'seller_id' => 1, 'product_name' => 'Hand-woven Agaseke Basket', 'price' => 12000.00, 'quantity' => 1, 'subtotal' => 12000.00, 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now],
            ['id' => 3, 'order_id' => 2, 'product_id' => 4, 'seller_id' => 4, 'product_name' => 'Kitenge Wrap Dress', 'price' => 18000.00, 'quantity' => 1, 'subtotal' => 18000.00, 'created_at' => $now->copy()->subDays(3), 'updated_at' => $now],
            ['id' => 4, 'order_id' => 3, 'product_id' => 3, 'seller_id' => 3, 'product_name' => 'Huye Specialty Coffee 250g', 'price' => 6500.00, 'quantity' => 2, 'subtotal' => 13000.00, 'created_at' => $now->copy()->subHours(18), 'updated_at' => $now],
            ['id' => 5, 'order_id' => 5, 'product_id' => 1, 'seller_id' => 1, 'product_name' => 'Hand-woven Agaseke Basket', 'price' => 12000.00, 'quantity' => 1, 'subtotal' => 12000.00, 'created_at' => $now->copy()->subDays(2), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // product_reviews
        // ---------------------------------------------------------------
        DB::table('product_reviews')->insert([
            ['id' => 1, 'product_id' => 3, 'user_id' => 2, 'rating' => 5, 'comment' => 'Freshly roasted, best coffee I have bought locally.', 'created_at' => $now->copy()->subDays(17), 'updated_at' => $now],
            ['id' => 2, 'product_id' => 1, 'user_id' => 2, 'rating' => 5, 'comment' => 'Beautiful craftsmanship, great gift item.', 'created_at' => $now->copy()->subDays(17), 'updated_at' => $now],
            ['id' => 3, 'product_id' => 4, 'user_id' => 5, 'rating' => 4, 'comment' => 'Lovely fabric, sizing ran slightly small.', 'created_at' => $now->copy()->subDays(2), 'updated_at' => $now],
            ['id' => 4, 'product_id' => 3, 'user_id' => 4, 'rating' => 4, 'comment' => 'Great taste, packaging could be improved.', 'created_at' => $now->copy()->subHours(10), 'updated_at' => $now],
            ['id' => 5, 'product_id' => 1, 'user_id' => 3, 'rating' => 5, 'comment' => 'Exactly as pictured, fast delivery.', 'created_at' => $now->copy()->subDays(1), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // corporate_recruitments
        // ---------------------------------------------------------------
        DB::table('corporate_recruitments')->insert([
            ['id' => 1, 'company_id' => 5, 'title' => 'Backend Developers for Fintech Rollout', 'description' => 'We need 3 backend developers to support a mobile money integration rollout across Rwanda.', 'skills' => json_encode(['PHP', 'Laravel', 'MySQL', 'REST APIs']), 'category' => 'Software Development', 'region' => 'Kigali City', 'status' => 'active', 'created_at' => $now->copy()->subDays(30), 'updated_at' => $now],
            ['id' => 2, 'company_id' => 5, 'title' => 'Bulk Hiring: Customer Support Agents', 'description' => 'Seeking 10 bilingual (Kinyarwanda/English) customer support agents for a new call center.', 'skills' => json_encode(['Communication', 'Kinyarwanda', 'English']), 'category' => 'Customer Service', 'region' => 'Kigali City', 'status' => 'pending', 'created_at' => $now->copy()->subDays(15), 'updated_at' => $now],
            ['id' => 3, 'company_id' => 5, 'title' => 'Construction Site Supervisors', 'description' => 'Two site supervisors needed for a commercial building project in Rubavu.', 'skills' => json_encode(['Site management', 'AutoCAD', 'Safety compliance']), 'category' => 'Construction', 'region' => 'Western Province', 'status' => 'active', 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 4, 'company_id' => 5, 'title' => 'Seasonal Agro-Processing Workers', 'description' => 'Seasonal workers needed for coffee processing during harvest season in Huye.', 'skills' => json_encode(['Manual labor', 'Quality sorting']), 'category' => 'Agriculture', 'region' => 'Southern Province', 'status' => 'closed', 'created_at' => $now->copy()->subDays(60), 'updated_at' => $now],
            ['id' => 5, 'company_id' => 5, 'title' => 'Graphic Designers for Marketing Team', 'description' => 'Looking for 2 in-house graphic designers to join our marketing department.', 'skills' => json_encode(['Adobe Illustrator', 'Photoshop', 'Branding']), 'category' => 'Design', 'region' => 'Kigali City', 'status' => 'pending', 'created_at' => $now->copy()->subDays(5), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // events
        // ---------------------------------------------------------------
        DB::table('events')->insert([
            ['id' => 1, 'title' => 'Kigali Tech Talent Meetup', 'organizer_id' => 5, 'description' => 'A networking evening for developers, designers and startups in Kigali.', 'venue' => 'Kigali Innovation City, Gasabo', 'type' => 'hybrid', 'start_time' => $now->copy()->addDays(14)->setTime(17, 0), 'end_time' => $now->copy()->addDays(14)->setTime(20, 0), 'capacity' => 150, 'image' => 'events/tech-meetup.jpg', 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now],
            ['id' => 2, 'title' => 'Rwandan Fashion & Craft Fair', 'organizer_id' => 5, 'description' => 'A marketplace event showcasing local tailors, designers and artisans.', 'venue' => 'Kigali Convention Centre', 'type' => 'hybrid', 'start_time' => $now->copy()->addDays(30)->setTime(9, 0), 'end_time' => $now->copy()->addDays(30)->setTime(18, 0), 'capacity' => 500, 'image' => 'events/fashion-fair.jpg', 'created_at' => $now->copy()->subDays(18), 'updated_at' => $now],
            ['id' => 3, 'title' => 'Freelancer Finance & Taxes Webinar', 'organizer_id' => 5, 'description' => 'Online session on managing income and taxes as an independent talent in Rwanda.', 'venue' => null, 'type' => 'online', 'start_time' => $now->copy()->addDays(7)->setTime(15, 0), 'end_time' => $now->copy()->addDays(7)->setTime(16, 30), 'capacity' => 300, 'image' => 'events/finance-webinar.jpg', 'created_at' => $now->copy()->subDays(12), 'updated_at' => $now],
            ['id' => 4, 'title' => 'Diaspora Investment & Sponsorship Forum', 'organizer_id' => 5, 'description' => 'Forum connecting diaspora sponsors with local community projects.', 'venue' => 'Radisson Blu Hotel, Kigali', 'type' => 'hybrid', 'start_time' => $now->copy()->addDays(45)->setTime(10, 0), 'end_time' => $now->copy()->addDays(45)->setTime(16, 0), 'capacity' => 200, 'image' => 'events/diaspora-forum.jpg', 'created_at' => $now->copy()->subDays(8), 'updated_at' => $now],
            ['id' => 5, 'title' => 'Photography Skills Bootcamp', 'organizer_id' => 5, 'description' => 'A one-day intensive bootcamp on event and portrait photography.', 'venue' => 'Musanze Community Hall', 'type' => 'hybrid', 'start_time' => $now->copy()->subDays(5)->setTime(9, 0), 'end_time' => $now->copy()->subDays(5)->setTime(17, 0), 'capacity' => 60, 'image' => 'events/photo-bootcamp.jpg', 'created_at' => $now->copy()->subDays(40), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // event_tickets
        // ---------------------------------------------------------------
        DB::table('event_tickets')->insert([
            ['id' => 1, 'event_id' => 1, 'type' => 'Standard', 'price' => 0.00, 'quantity' => 150, 'sold' => 87, 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now],
            ['id' => 2, 'event_id' => 2, 'type' => 'Vendor Stall', 'price' => 20000.00, 'quantity' => 60, 'sold' => 40, 'created_at' => $now->copy()->subDays(18), 'updated_at' => $now],
            ['id' => 3, 'event_id' => 2, 'type' => 'Visitor Pass', 'price' => 3000.00, 'quantity' => 440, 'sold' => 210, 'created_at' => $now->copy()->subDays(18), 'updated_at' => $now],
            ['id' => 4, 'event_id' => 4, 'type' => 'VIP', 'price' => 50000.00, 'quantity' => 30, 'sold' => 12, 'created_at' => $now->copy()->subDays(8), 'updated_at' => $now],
            ['id' => 5, 'event_id' => 5, 'type' => 'Standard', 'price' => 10000.00, 'quantity' => 60, 'sold' => 60, 'created_at' => $now->copy()->subDays(40), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // ticket_orders
        // ---------------------------------------------------------------
        DB::table('ticket_orders')->insert([
            ['id' => 1, 'user_id' => 2, 'customer_name' => 'Alice Mukamana', 'customer_email' => 'alice.mukamana@gmail.com', 'customer_phone' => '+250788111333', 'total_amount' => 3000.00, 'status' => 'confirmed', 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 2, 'user_id' => 4, 'customer_name' => 'Claudine Ingabire', 'customer_email' => 'claudine.ingabire@gmail.com', 'customer_phone' => '+250788333555', 'total_amount' => 20000.00, 'status' => 'confirmed', 'created_at' => $now->copy()->subDays(9), 'updated_at' => $now],
            ['id' => 3, 'user_id' => null, 'customer_name' => 'Fabrice Iradukunda', 'customer_email' => 'fabrice.irad@gmail.com', 'customer_phone' => '+250788666222', 'total_amount' => 50000.00, 'status' => 'pending', 'created_at' => $now->copy()->subDays(3), 'updated_at' => $now],
            ['id' => 4, 'user_id' => 3, 'customer_name' => 'Jean Niyonzima', 'customer_email' => 'jean.niyonzima@gmail.com', 'customer_phone' => '+250788111222', 'total_amount' => 0.00, 'status' => 'confirmed', 'created_at' => $now->copy()->subDays(19), 'updated_at' => $now],
            ['id' => 5, 'user_id' => 5, 'customer_name' => 'Diane Mutesi', 'customer_email' => 'diane.mutesi@techhubrwanda.rw', 'customer_phone' => '+250788777888', 'total_amount' => 10000.00, 'status' => 'cancelled', 'created_at' => $now->copy()->subDays(41), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // ticket_order_items
        // ---------------------------------------------------------------
        DB::table('ticket_order_items')->insert([
            ['id' => 1, 'ticket_order_id' => 1, 'ticket_id' => 3, 'attendee_name' => 'Alice Mukamana', 'quantity' => 1, 'price' => 3000.00, 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 2, 'ticket_order_id' => 2, 'ticket_id' => 2, 'attendee_name' => 'Claudine Ingabire', 'quantity' => 1, 'price' => 20000.00, 'created_at' => $now->copy()->subDays(9), 'updated_at' => $now],
            ['id' => 3, 'ticket_order_id' => 3, 'ticket_id' => 4, 'attendee_name' => 'Fabrice Iradukunda', 'quantity' => 1, 'price' => 50000.00, 'created_at' => $now->copy()->subDays(3), 'updated_at' => $now],
            ['id' => 4, 'ticket_order_id' => 4, 'ticket_id' => 1, 'attendee_name' => 'Jean Niyonzima', 'quantity' => 1, 'price' => 0.00, 'created_at' => $now->copy()->subDays(19), 'updated_at' => $now],
            ['id' => 5, 'ticket_order_id' => 5, 'ticket_id' => 5, 'attendee_name' => 'Diane Mutesi', 'quantity' => 1, 'price' => 10000.00, 'created_at' => $now->copy()->subDays(41), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // ticket_codes
        // ---------------------------------------------------------------
        DB::table('ticket_codes')->insert([
            ['id' => 1, 'order_item_id' => 1, 'code' => 'FC-TCK-AB12CD', 'used' => 0, 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 2, 'order_item_id' => 2, 'code' => 'FC-TCK-EF34GH', 'used' => 0, 'created_at' => $now->copy()->subDays(9), 'updated_at' => $now],
            ['id' => 3, 'order_item_id' => 3, 'code' => 'FC-TCK-IJ56KL', 'used' => 0, 'created_at' => $now->copy()->subDays(3), 'updated_at' => $now],
            ['id' => 4, 'order_item_id' => 4, 'code' => 'FC-TCK-MN78OP', 'used' => 1, 'created_at' => $now->copy()->subDays(19), 'updated_at' => $now],
            ['id' => 5, 'order_item_id' => 5, 'code' => 'FC-TCK-QR90ST', 'used' => 0, 'created_at' => $now->copy()->subDays(41), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // job_sections
        // ---------------------------------------------------------------
        DB::table('job_sections')->insert([
            ['id' => 1, 'job_category_id' => 2, 'title' => 'Junior Laravel Developer', 'description' => 'Join our engineering team to build and maintain internal web tools.', 'location' => 'Kigali', 'type' => 'full-time', 'experience_level' => 'junior', 'salary_range' => '400,000 - 600,000 RWF', 'skills' => json_encode(['PHP', 'Laravel', 'MySQL']), 'company_id' => 5, 'created_at' => $now->copy()->subDays(25), 'updated_at' => $now],
            ['id' => 2, 'job_category_id' => 3, 'title' => 'Graphic Designer (Contract)', 'description' => 'Design marketing materials for a 3-month campaign.', 'location' => 'Kigali', 'type' => 'contract', 'experience_level' => 'mid', 'salary_range' => '300,000 - 450,000 RWF', 'skills' => json_encode(['Illustrator', 'Photoshop']), 'company_id' => 5, 'created_at' => $now->copy()->subDays(20), 'updated_at' => $now],
            ['id' => 3, 'job_category_id' => 4, 'title' => 'Sales & Marketing Intern', 'description' => 'Support the sales team with outreach and market research.', 'location' => 'Kigali', 'type' => 'internship', 'experience_level' => 'entry', 'salary_range' => '100,000 - 150,000 RWF', 'skills' => json_encode(['Communication', 'Excel']), 'company_id' => 5, 'created_at' => $now->copy()->subDays(15), 'updated_at' => $now],
            ['id' => 4, 'job_category_id' => 5, 'title' => 'Site Engineer', 'description' => 'Oversee daily operations on a commercial construction site in Rubavu.', 'location' => 'Rubavu', 'type' => 'full-time', 'experience_level' => 'senior', 'salary_range' => '700,000 - 1,000,000 RWF', 'skills' => json_encode(['AutoCAD', 'Project management']), 'company_id' => 5, 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 5, 'job_category_id' => 1, 'title' => 'Remote IT Support Specialist', 'description' => 'Provide remote helpdesk support to our regional offices.', 'location' => 'Remote', 'type' => 'remote', 'experience_level' => 'mid', 'salary_range' => '350,000 - 500,000 RWF', 'skills' => json_encode(['Networking', 'Customer support']), 'company_id' => 5, 'created_at' => $now->copy()->subDays(5), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // job_section_applications
        // ---------------------------------------------------------------
        DB::table('job_section_applications')->insert([
            ['id' => 1, 'job_section_id' => 1, 'name' => 'Jean Niyonzima', 'email' => 'jean.niyonzima@gmail.com', 'cover_letter' => 'I have 3 years of Laravel experience and would love to join your team.', 'resume' => 'resumes/jean-niyonzima.pdf', 'status' => 'reviewed', 'created_at' => $now->copy()->subDays(22), 'updated_at' => $now],
            ['id' => 2, 'job_section_id' => 2, 'name' => 'Claudine Ingabire', 'email' => 'claudine.ingabire@gmail.com', 'cover_letter' => 'Attached is my portfolio of recent branding projects.', 'resume' => 'resumes/claudine-ingabire.pdf', 'status' => 'accepted', 'created_at' => $now->copy()->subDays(18), 'updated_at' => $now],
            ['id' => 3, 'job_section_id' => 3, 'name' => 'Yvonne Uwineza', 'email' => 'yvonne.uwineza@gmail.com', 'cover_letter' => 'Final-year business student eager to learn sales operations.', 'resume' => 'resumes/yvonne-uwineza.pdf', 'status' => 'pending', 'created_at' => $now->copy()->subDays(12), 'updated_at' => $now],
            ['id' => 4, 'job_section_id' => 4, 'name' => 'Olivier Ndayisenga', 'email' => 'olivier.nday@gmail.com', 'cover_letter' => 'I have supervised two similar commercial projects in Rubavu.', 'resume' => 'resumes/olivier-ndayisenga.pdf', 'status' => 'rejected', 'created_at' => $now->copy()->subDays(8), 'updated_at' => $now],
            ['id' => 5, 'job_section_id' => 1, 'name' => 'Theogene Mugabo', 'email' => 'theogene.mugabo@gmail.com', 'cover_letter' => 'Self-taught developer with several personal Laravel projects.', 'resume' => 'resumes/theogene-mugabo.pdf', 'status' => 'pending', 'created_at' => $now->copy()->subDays(4), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // projects
        // ---------------------------------------------------------------
        DB::table('projects')->insert([
            ['id' => 1, 'user_id' => 2, 'title' => 'Community Library Renovation in Kimisagara', 'category_id' => 4, 'description' => 'Renovating a small community library including new shelving and furniture.', 'budget_amount' => 2500000.00, 'budget_currency' => 'RWF', 'location' => 'Kimisagara, Nyarugenge', 'status' => 'approved', 'verified' => 1, 'created_at' => $now->copy()->subDays(35), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 2, 'user_id' => 5, 'title' => 'Company Website Redesign', 'category_id' => 1, 'description' => 'Redesigning our corporate website with a modern, mobile-friendly look.', 'budget_amount' => 1800000.00, 'budget_currency' => 'RWF', 'location' => 'Kigali', 'status' => 'pending', 'verified' => 0, 'created_at' => $now->copy()->subDays(15), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 3, 'user_id' => 3, 'title' => 'School Uniform Sponsorship Drive', 'category_id' => 3, 'description' => 'Sourcing tailors to produce affordable uniforms for a rural primary school.', 'budget_amount' => 900000.00, 'budget_currency' => 'RWF', 'location' => 'Nyanza District', 'status' => 'approved', 'verified' => 1, 'created_at' => $now->copy()->subDays(28), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 4, 'user_id' => 4, 'title' => 'Youth Photography Training Workshop', 'category_id' => 5, 'description' => 'A weekend workshop teaching basic photography to unemployed youth.', 'budget_amount' => 600000.00, 'budget_currency' => 'RWF', 'location' => 'Musanze', 'status' => 'closed', 'verified' => 1, 'created_at' => $now->copy()->subDays(70), 'updated_at' => $now, 'deleted_at' => null],
            ['id' => 5, 'user_id' => 2, 'title' => 'Furniture for New Health Post', 'category_id' => 4, 'description' => 'Supplying benches and desks for a newly built rural health post.', 'budget_amount' => 1200000.00, 'budget_currency' => 'RWF', 'location' => 'Kayonza District', 'status' => 'pending', 'verified' => 0, 'created_at' => $now->copy()->subDays(6), 'updated_at' => $now, 'deleted_at' => null],
        ]);

        // ---------------------------------------------------------------
        // project_applications
        // ---------------------------------------------------------------
        DB::table('project_applications')->insert([
            ['id' => 1, 'project_id' => 1, 'name' => 'Grace Uwase', 'email' => 'grace.uwase@gmail.com', 'message' => 'I can supply and fit the shelving units within budget.', 'portfolio_url' => 'https://portfolio.example.com/grace-uwase', 'status' => 'accepted', 'created_at' => $now->copy()->subDays(30), 'updated_at' => $now],
            ['id' => 2, 'project_id' => 2, 'name' => 'Jean Niyonzima', 'email' => 'jean.niyonzima@gmail.com', 'message' => 'I have redesigned similar corporate sites using Laravel and Inertia.', 'portfolio_url' => 'https://portfolio.example.com/jean-niyonzima', 'status' => 'pending', 'created_at' => $now->copy()->subDays(14), 'updated_at' => $now],
            ['id' => 3, 'project_id' => 3, 'name' => 'Emmanuel Byiringiro', 'email' => 'emmanuel.byiringiro@gmail.com', 'message' => 'I can produce 100 uniforms within 3 weeks.', 'portfolio_url' => null, 'status' => 'accepted', 'created_at' => $now->copy()->subDays(27), 'updated_at' => $now],
            ['id' => 4, 'project_id' => 4, 'name' => 'David Nkurunziza', 'email' => 'david.nkurunziza@gmail.com', 'message' => 'I can lead the practical photography sessions.', 'portfolio_url' => 'https://portfolio.example.com/david-nkurunziza', 'status' => 'accepted', 'created_at' => $now->copy()->subDays(68), 'updated_at' => $now],
            ['id' => 5, 'project_id' => 5, 'name' => 'Grace Uwase', 'email' => 'grace.uwase2@gmail.com', 'message' => 'I can build simple durable desks and benches locally.', 'portfolio_url' => null, 'status' => 'rejected', 'created_at' => $now->copy()->subDays(4), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // diaspora_accounts
        // ---------------------------------------------------------------
        DB::table('diaspora_accounts')->insert([
            ['id' => 1, 'user_id' => null, 'first_name' => 'Marie', 'last_name' => 'Uwamahoro', 'display_name' => 'Marie U.', 'email' => 'marie.uwamahoro@outlook.com', 'phone' => '+32478112233', 'country' => 'Belgium', 'city' => 'Brussels', 'passport_number' => 'PC1029384', 'id_document_path' => 'diaspora/docs/marie-id.pdf', 'address_proof_path' => 'diaspora/docs/marie-address.pdf', 'occupation' => 'Nurse', 'bio' => 'Rwandan-Belgian nurse supporting community health projects back home.', 'purpose' => 'sponsor', 'preferred_currency' => 'EUR', 'sponsorship_preferences' => json_encode(['categories' => ['health', 'education'], 'max_amount' => 500]), 'links' => json_encode(['linkedin' => 'https://linkedin.com/in/marieu']), 'preferred_contact' => 'email', 'newsletter_opt_in' => 1, 'password' => Hash::make('password123'), 'verification_status' => 'verified', 'verification_notes' => 'ID and address proof confirmed.', 'verified_at' => $now->copy()->subDays(60), 'verified_by' => 1, 'created_at' => $now->copy()->subDays(90), 'updated_at' => $now],
            ['id' => 2, 'user_id' => null, 'first_name' => 'Robert', 'last_name' => 'Ndahiro', 'display_name' => 'Robert N.', 'email' => 'robert.ndahiro@gmail.com', 'phone' => '+16478223344', 'country' => 'Canada', 'city' => 'Toronto', 'passport_number' => 'PC2938475', 'id_document_path' => 'diaspora/docs/robert-id.pdf', 'address_proof_path' => 'diaspora/docs/robert-address.pdf', 'occupation' => 'Software Engineer', 'bio' => 'Software engineer investing in Rwandan tech talent and small projects.', 'purpose' => 'investor', 'preferred_currency' => 'USD', 'sponsorship_preferences' => json_encode(['categories' => ['technology'], 'max_amount' => 1000]), 'links' => json_encode(['linkedin' => 'https://linkedin.com/in/robertn']), 'preferred_contact' => 'whatsapp', 'newsletter_opt_in' => 1, 'password' => Hash::make('password123'), 'verification_status' => 'verified', 'verification_notes' => 'Documents verified via video call.', 'verified_at' => $now->copy()->subDays(40), 'verified_by' => 1, 'created_at' => $now->copy()->subDays(80), 'updated_at' => $now],
            ['id' => 3, 'user_id' => null, 'first_name' => 'Solange', 'last_name' => 'Kagoyire', 'display_name' => 'Solange K.', 'email' => 'solange.kagoyire@yahoo.com', 'phone' => '+254712334455', 'country' => 'Kenya', 'city' => 'Nairobi', 'passport_number' => null, 'id_document_path' => null, 'address_proof_path' => null, 'occupation' => 'Business Consultant', 'bio' => 'Regional consultant looking to mentor Rwandan entrepreneurs.', 'purpose' => 'mentor', 'preferred_currency' => 'USD', 'sponsorship_preferences' => null, 'links' => null, 'preferred_contact' => 'email', 'newsletter_opt_in' => 0, 'password' => Hash::make('password123'), 'verification_status' => 'pending', 'verification_notes' => null, 'verified_at' => null, 'verified_by' => null, 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 4, 'user_id' => null, 'first_name' => 'Patrick', 'last_name' => 'Rwabuhihi', 'display_name' => 'Patrick R.', 'email' => 'patrick.rwabuhihi@gmail.com', 'phone' => '+491702233445', 'country' => 'Germany', 'city' => 'Berlin', 'passport_number' => 'PC5647382', 'id_document_path' => 'diaspora/docs/patrick-id.pdf', 'address_proof_path' => 'diaspora/docs/patrick-address.pdf', 'occupation' => 'Civil Engineer', 'bio' => 'Civil engineer supporting infrastructure and construction projects.', 'purpose' => 'partner', 'preferred_currency' => 'EUR', 'sponsorship_preferences' => json_encode(['categories' => ['construction'], 'max_amount' => 800]), 'links' => null, 'preferred_contact' => 'phone', 'newsletter_opt_in' => 1, 'password' => Hash::make('password123'), 'verification_status' => 'rejected', 'verification_notes' => 'Address proof document was expired.', 'verified_at' => null, 'verified_by' => 1, 'created_at' => $now->copy()->subDays(50), 'updated_at' => $now],
            ['id' => 5, 'user_id' => null, 'first_name' => 'Chantal', 'last_name' => 'Mukashyaka', 'display_name' => 'Chantal M.', 'email' => 'chantal.mukashyaka@gmail.com', 'phone' => '+447911223344', 'country' => 'United Kingdom', 'city' => 'London', 'passport_number' => 'PC6758493', 'id_document_path' => 'diaspora/docs/chantal-id.pdf', 'address_proof_path' => 'diaspora/docs/chantal-address.pdf', 'occupation' => 'Accountant', 'bio' => 'Supports education-focused community projects in the Southern Province.', 'purpose' => 'sponsor', 'preferred_currency' => 'GBP', 'sponsorship_preferences' => json_encode(['categories' => ['education'], 'max_amount' => 400]), 'links' => json_encode(['facebook' => 'https://facebook.com/chantalm']), 'preferred_contact' => 'email', 'newsletter_opt_in' => 1, 'password' => Hash::make('password123'), 'verification_status' => 'verified', 'verification_notes' => 'Fully verified.', 'verified_at' => $now->copy()->subDays(25), 'verified_by' => 1, 'created_at' => $now->copy()->subDays(55), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // project_sponsorships
        // ---------------------------------------------------------------
        DB::table('project_sponsorships')->insert([
            ['id' => 1, 'project_id' => 1, 'diaspora_account_id' => 1, 'name' => 'Marie Uwamahoro', 'email' => 'marie.uwamahoro@outlook.com', 'amount' => 300.00, 'currency' => 'EUR', 'message' => 'Happy to support the library renovation for the neighborhood kids.', 'status' => 'confirmed', 'created_at' => $now->copy()->subDays(32), 'updated_at' => $now],
            ['id' => 2, 'project_id' => 3, 'diaspora_account_id' => 5, 'name' => 'Chantal Mukashyaka', 'email' => 'chantal.mukashyaka@gmail.com', 'amount' => 350.00, 'currency' => 'GBP', 'message' => 'Every child deserves a proper uniform, glad to help.', 'status' => 'confirmed', 'created_at' => $now->copy()->subDays(26), 'updated_at' => $now],
            ['id' => 3, 'project_id' => 4, 'diaspora_account_id' => 2, 'name' => 'Robert Ndahiro', 'email' => 'robert.ndahiro@gmail.com', 'amount' => 500.00, 'currency' => 'USD', 'message' => 'Investing in youth skills is investing in the future.', 'status' => 'confirmed', 'created_at' => $now->copy()->subDays(65), 'updated_at' => $now],
            ['id' => 4, 'project_id' => 5, 'diaspora_account_id' => null, 'name' => 'Anonymous Well-wisher', 'email' => 'anon.donor@gmail.com', 'amount' => 100000.00, 'currency' => 'RWF', 'message' => 'For the health post furniture, keep up the good work.', 'status' => 'pending', 'created_at' => $now->copy()->subDays(3), 'updated_at' => $now],
            ['id' => 5, 'project_id' => 2, 'diaspora_account_id' => 4, 'name' => 'Patrick Rwabuhihi', 'email' => 'patrick.rwabuhihi@gmail.com', 'amount' => 200.00, 'currency' => 'EUR', 'message' => 'Would like to support once verification is complete.', 'status' => 'cancelled', 'created_at' => $now->copy()->subDays(14), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // user_subscriptions
        // ---------------------------------------------------------------
        DB::table('user_subscriptions')->insert([
            ['id' => 1, 'user_id' => 3, 'pricing_plan_id' => 3, 'billing_cycle' => 'monthly', 'price' => 15000.00, 'starts_at' => $now->copy()->subDays(30)->toDateString(), 'ends_at' => $now->copy()->addDays(0)->toDateString(), 'status' => 'active', 'cancelled_at' => null, 'auto_renew' => 1, 'is_trial' => 0, 'trial_ends_at' => null, 'created_at' => $now->copy()->subDays(30), 'updated_at' => $now],
            ['id' => 2, 'user_id' => 4, 'pricing_plan_id' => 2, 'billing_cycle' => 'monthly', 'price' => 5000.00, 'starts_at' => $now->copy()->subDays(10)->toDateString(), 'ends_at' => $now->copy()->addDays(20)->toDateString(), 'status' => 'trialing', 'cancelled_at' => null, 'auto_renew' => 0, 'is_trial' => 1, 'trial_ends_at' => $now->copy()->addDays(4), 'created_at' => $now->copy()->subDays(10), 'updated_at' => $now],
            ['id' => 3, 'user_id' => 5, 'pricing_plan_id' => 4, 'billing_cycle' => 'annually', 'price' => 350000.00, 'starts_at' => $now->copy()->subMonths(2)->toDateString(), 'ends_at' => $now->copy()->addMonths(10)->toDateString(), 'status' => 'active', 'cancelled_at' => null, 'auto_renew' => 1, 'is_trial' => 0, 'trial_ends_at' => null, 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now],
            ['id' => 4, 'user_id' => 2, 'pricing_plan_id' => 1, 'billing_cycle' => 'monthly', 'price' => 0.00, 'starts_at' => $now->copy()->subMonths(4)->toDateString(), 'ends_at' => $now->copy()->addYears(1)->toDateString(), 'status' => 'active', 'cancelled_at' => null, 'auto_renew' => 1, 'is_trial' => 0, 'trial_ends_at' => null, 'created_at' => $now->copy()->subMonths(4), 'updated_at' => $now],
            ['id' => 5, 'user_id' => 3, 'pricing_plan_id' => 2, 'billing_cycle' => 'monthly', 'price' => 5000.00, 'starts_at' => $now->copy()->subMonths(5)->toDateString(), 'ends_at' => $now->copy()->subDays(31)->toDateString(), 'status' => 'expired', 'cancelled_at' => $now->copy()->subDays(31), 'auto_renew' => 0, 'is_trial' => 0, 'trial_ends_at' => null, 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // quick_hires
        // ---------------------------------------------------------------
        DB::table('quick_hires')->insert([
            ['id' => 1, 'user_id' => 2, 'category_id' => 4, 'talent_id' => 4, 'title' => 'Build a Bookshelf for Home Office', 'description' => 'Need a simple wooden bookshelf, about 1.8m tall, delivered within Kigali.', 'budget_type' => 'fixed', 'budget_min' => 60000.00, 'budget_max' => 90000.00, 'timeline' => '1-2 weeks', 'experience_level' => 'intermediate', 'skills' => json_encode(['carpentry', 'furniture']), 'client_name' => 'Alice Mukamana', 'client_email' => 'alice.mukamana@gmail.com', 'client_phone' => '+250788111333', 'company_name' => null, 'status' => 'matched', 'created_at' => $now->copy()->subDays(16), 'updated_at' => $now],
            ['id' => 2, 'user_id' => 5, 'category_id' => 1, 'talent_id' => 1, 'title' => 'Fix Bug on Company Landing Page', 'description' => 'Our landing page form is not submitting correctly on mobile devices.', 'budget_type' => 'hourly', 'budget_min' => 5000.00, 'budget_max' => 8000.00, 'timeline' => '2-3 days', 'experience_level' => 'advanced', 'skills' => json_encode(['laravel', 'javascript']), 'client_name' => 'Diane Mutesi', 'client_email' => 'diane.mutesi@techhubrwanda.rw', 'client_phone' => '+250788777888', 'company_name' => 'TechHub Rwanda Ltd', 'status' => 'completed', 'created_at' => $now->copy()->subDays(25), 'updated_at' => $now],
            ['id' => 3, 'user_id' => null, 'category_id' => 5, 'talent_id' => 5, 'title' => 'Photographer for Small Birthday Party', 'description' => 'Looking for a photographer for a 3-hour birthday event in Kigali.', 'budget_type' => 'fixed', 'budget_min' => 40000.00, 'budget_max' => 60000.00, 'timeline' => 'This weekend', 'experience_level' => 'intermediate', 'skills' => json_encode(['photography']), 'client_name' => 'Immaculee Nyirahabimana', 'client_email' => 'immaculee.n@gmail.com', 'client_phone' => '+250788555777', 'company_name' => null, 'status' => 'pending', 'created_at' => $now->copy()->subDays(2), 'updated_at' => $now],
            ['id' => 4, 'user_id' => null, 'category_id' => 3, 'talent_id' => 3, 'title' => 'Tailor 20 Choir Uniforms', 'description' => 'A church choir needs 20 matching uniforms sewn within a month.', 'budget_type' => 'fixed', 'budget_min' => 300000.00, 'budget_max' => 400000.00, 'timeline' => '4 weeks', 'experience_level' => 'advanced', 'skills' => json_encode(['tailoring']), 'client_name' => 'Theogene Mugabo', 'client_email' => 'theogene.mugabo@gmail.com', 'client_phone' => '+250788999111', 'company_name' => null, 'status' => 'contacted', 'created_at' => $now->copy()->subDays(7), 'updated_at' => $now],
            ['id' => 5, 'user_id' => 4, 'category_id' => 2, 'talent_id' => null, 'title' => 'Design Social Media Templates', 'description' => 'Need 10 branded social media post templates for Instagram and Facebook.', 'budget_type' => 'fixed', 'budget_min' => 50000.00, 'budget_max' => 70000.00, 'timeline' => '1 week', 'experience_level' => 'intermediate', 'skills' => json_encode(['graphic design', 'canva']), 'client_name' => 'Claudine Ingabire', 'client_email' => 'claudine.ingabire@gmail.com', 'client_phone' => '+250788333555', 'company_name' => null, 'status' => 'cancelled', 'created_at' => $now->copy()->subDays(1), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // user_details
        // ---------------------------------------------------------------
        DB::table('user_details')->insert([
            ['id' => 1, 'user_id' => 1, 'bio' => 'Platform administrator overseeing operations at FutureConnect.', 'photo' => 'users/eric.jpg', 'address' => 'Kacyiru, Gasabo, Kigali', 'phone' => '+250788000001', 'created_at' => $now->copy()->subMonths(6), 'updated_at' => $now],
            ['id' => 2, 'user_id' => 2, 'bio' => 'Small business owner selling handmade crafts.', 'photo' => 'users/alice.jpg', 'address' => 'Kimisagara, Nyarugenge, Kigali', 'phone' => '+250788111333', 'created_at' => $now->copy()->subMonths(4), 'updated_at' => $now],
            ['id' => 3, 'user_id' => 3, 'bio' => 'Full-stack developer specializing in Laravel.', 'photo' => 'users/jean.jpg', 'address' => 'Kimironko, Gasabo, Kigali', 'phone' => '+250788111222', 'created_at' => $now->copy()->subMonths(5), 'updated_at' => $now],
            ['id' => 4, 'user_id' => 4, 'bio' => 'Freelance brand and graphic designer.', 'photo' => 'users/claudine.jpg', 'address' => 'Kacyiru, Gasabo, Kigali', 'phone' => '+250788222333', 'created_at' => $now->copy()->subMonths(3), 'updated_at' => $now],
            ['id' => 5, 'user_id' => 5, 'bio' => 'Operations lead at TechHub Rwanda Ltd.', 'photo' => 'users/diane.jpg', 'address' => 'Kigali Innovation City, Gasabo', 'phone' => '+250788777888', 'created_at' => $now->copy()->subMonths(2), 'updated_at' => $now],
        ]);

        // ---------------------------------------------------------------
        // login_activities
        // ---------------------------------------------------------------
        DB::table('login_activities')->insert([
            ['id' => 1, 'user_id' => 1, 'ip_address' => '41.186.101.10', 'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0', 'logged_in_at' => $now->copy()->subHours(2), 'created_at' => $now->copy()->subHours(2), 'updated_at' => $now],
            ['id' => 2, 'user_id' => 2, 'ip_address' => '41.186.102.55', 'user_agent' => 'Mozilla/5.0 (Linux; Android 13) Chrome/126.0 Mobile', 'logged_in_at' => $now->copy()->subHours(6), 'created_at' => $now->copy()->subHours(6), 'updated_at' => $now],
            ['id' => 3, 'user_id' => 3, 'ip_address' => '41.186.103.72', 'user_agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) Safari/605.1', 'logged_in_at' => $now->copy()->subDays(1), 'created_at' => $now->copy()->subDays(1), 'updated_at' => $now],
            ['id' => 4, 'user_id' => 4, 'ip_address' => '105.235.10.44', 'user_agent' => 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) Safari/604.1', 'logged_in_at' => $now->copy()->subDays(2), 'created_at' => $now->copy()->subDays(2), 'updated_at' => $now],
            ['id' => 5, 'user_id' => 5, 'ip_address' => '41.186.104.19', 'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/126.0', 'logged_in_at' => $now->copy()->subMinutes(45), 'created_at' => $now->copy()->subMinutes(45), 'updated_at' => $now],
        ]);

        Schema::enableForeignKeyConstraints();
    }
}