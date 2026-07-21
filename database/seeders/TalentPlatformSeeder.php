<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * Seeds 5 realistic, related Rwandan records across the full talent-platform chain:
 *
 * categories -> users -> talents -> skills -> skill_reviews
 *                                 -> courses -> course_lessons -> course_enrollments -> course_feedback
 *                                 -> stories -> story_comments
 *                                 -> testimonials
 *                                 -> talent_connections
 *                                 -> talent_feedback
 *            -> corporate_recruitments (company users)
 *            -> quick_hires
 *            -> job_categories -> job_sections -> job_section_applications
 *            -> events -> event_tickets
 *
 * Run with: php artisan db:seed --class=TalentPlatformSeeder
 */
class TalentPlatformSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        // ===============================================================
        // 1. Categories
        // ===============================================================
        $categories = [
            ['name' => 'Graphic Design',     'slug' => 'graphic-design',     'description' => 'Logo, branding and visual identity design'],
            ['name' => 'Web Development',    'slug' => 'web-development',    'description' => 'Websites, web apps and e-commerce platforms'],
            ['name' => 'Tailoring & Fashion', 'slug' => 'tailoring-fashion', 'description' => 'Custom clothing, Imishanana and modern fashion design'],
            ['name' => 'Photography',        'slug' => 'photography',        'description' => 'Event, portrait and commercial photography'],
            ['name' => 'Music Production',   'slug' => 'music-production',   'description' => 'Beat making, mixing and mastering for Rwandan artists'],
        ];

        $categoryIds = [];
        foreach ($categories as $cat) {
            $categoryIds[] = DB::table('categories')->insertGetId([
                'name'        => $cat['name'],
                'description' => $cat['description'],
                'type'        => 'talent',
                'featured'    => 1,
                'slug'        => $cat['slug'],
                'created_at'  => $now,
                'updated_at'  => $now,
            ]);
        }

        // ===============================================================
        // 2. Users (talent role)
        // ===============================================================
        $people = [
            ['name' => 'Uwase Diane',           'email' => 'uwase.diane@gmail.com',    'phone' => '0788123456', 'district' => 'Gasabo, Kigali'],
            ['name' => 'Niyonzima Eric',        'email' => 'niyonzima.eric@gmail.com', 'phone' => '0722345678', 'district' => 'Huye, Southern Province'],
            ['name' => 'Mukamana Alice',        'email' => 'mukamana.alice@gmail.com', 'phone' => '0789456123', 'district' => 'Musanze, Northern Province'],
            ['name' => 'Habimana Jean de Dieu', 'email' => 'habimana.jdd@gmail.com',   'phone' => '0733567891', 'district' => 'Nyagatare, Eastern Province'],
            ['name' => 'Ingabire Solange',      'email' => 'ingabire.solange@gmail.com', 'phone' => '0788987654', 'district' => 'Rubavu, Western Province'],
        ];

        $userIds = [];
        foreach ($people as $p) {
            $userIds[] = DB::table('users')->insertGetId([
                'name'              => $p['name'],
                'email'             => $p['email'],
                'email_verified_at' => $now,
                'password'          => Hash::make('password'),
                'role'              => 'talent',
                'active'            => 1,
                'is_verified'       => 1,
                'remember_token'    => Str::random(10),
                'created_at'        => $now,
                'updated_at'        => $now,
            ]);
        }

        // Client / customer users (for course_enrollments, course_feedback, quick_hires)
        $clients = [
            ['name' => 'Byiringiro Patrick', 'email' => 'byiringiro.patrick@gmail.com'],
            ['name' => 'Uwimana Claudine',   'email' => 'uwimana.claudine@gmail.com'],
            ['name' => 'Nkurunziza Fabrice', 'email' => 'nkurunziza.fabrice@gmail.com'],
            ['name' => 'Mutesi Josiane',     'email' => 'mutesi.josiane@gmail.com'],
            ['name' => 'Twagirayezu Aime',   'email' => 'twagirayezu.aime@gmail.com'],
        ];

        $clientUserIds = [];
        foreach ($clients as $c) {
            $clientUserIds[] = DB::table('users')->insertGetId([
                'name'              => $c['name'],
                'email'             => $c['email'],
                'email_verified_at' => $now,
                'password'          => Hash::make('password'),
                'role'              => 'user',
                'active'            => 1,
                'is_verified'       => 1,
                'remember_token'    => Str::random(10),
                'created_at'        => $now,
                'updated_at'        => $now,
            ]);
        }

        // Company / admin users (for corporate_recruitments, events, job_sections)
        $companies = [
            ['name' => 'Bank of Kigali PLC',        'email' => 'hr@bk.rw'],
            ['name' => 'MTN Rwanda',                'email' => 'careers@mtn.co.rw'],
            ['name' => 'Zipline Rwanda',             'email' => 'jobs@zipline.rw'],
            ['name' => 'Inyange Industries',        'email' => 'recruitment@inyange.rw'],
            ['name' => 'Kigali Innovation City Ltd', 'email' => 'talent@kigalicity.rw'],
        ];

        $companyUserIds = [];
        foreach ($companies as $c) {
            $companyUserIds[] = DB::table('users')->insertGetId([
                'name'              => $c['name'],
                'email'             => $c['email'],
                'email_verified_at' => $now,
                'password'          => Hash::make('password'),
                'role'              => 'admin',
                'active'            => 1,
                'is_verified'       => 1,
                'remember_token'    => Str::random(10),
                'created_at'        => $now,
                'updated_at'        => $now,
            ]);
        }

        // ===============================================================
        // 2b. Sellers (linked to company users) — corporate_recruitments.company_id
        //     references sellers.id, not users.id
        // ===============================================================
        $sellerIds = [];
        foreach ($companies as $i => $c) {
            $sellerIds[] = DB::table('sellers')->insertGetId([
                'user_id'      => $companyUserIds[$i],
                'company_name' => $c['name'],
                'email'        => $c['email'],
                'phone'        => '078' . rand(1000000, 9999999),
                'address'      => 'Kigali, Rwanda',
                'description'  => 'Registered employer on the platform recruiting local talent.',
                'status'       => 'approved',
                'created_at'   => $now,
                'updated_at'   => $now,
            ]);
        }

        // ===============================================================
        // 3. Talents (linked to users + categories)
        // ===============================================================
        $talentsData = [
            [
                'name' => 'Uwase Diane', 'description' => 'Brand identity and logo designer helping Rwandan SMEs build a professional visual presence.',
                'address' => 'Kimironko, Gasabo, Kigali', 'phone' => '0788123456', 'email' => 'uwase.diane@gmail.com',
                'language' => 'Kinyarwanda, English, French', 'level' => 'advanced', 'category' => 0,
            ],
            [
                'name' => 'Niyonzima Eric', 'description' => 'Full-stack web developer specializing in Laravel and React applications for local businesses.',
                'address' => 'Ngoma, Huye, Southern Province', 'phone' => '0722345678', 'email' => 'niyonzima.eric@gmail.com',
                'language' => 'Kinyarwanda, English', 'level' => 'advanced', 'category' => 1,
            ],
            [
                'name' => 'Mukamana Alice', 'description' => 'Tailor and fashion designer creating modern outfits inspired by traditional Rwandan Imishanana.',
                'address' => 'Muhoza, Musanze, Northern Province', 'phone' => '0789456123', 'email' => 'mukamana.alice@gmail.com',
                'language' => 'Kinyarwanda, Swahili', 'level' => 'intermediate', 'category' => 2,
            ],
            [
                'name' => 'Habimana Jean de Dieu', 'description' => 'Event and portrait photographer covering weddings, introductions (Gusaba) and corporate events across the Eastern Province.',
                'address' => 'Nyagatare Town, Nyagatare, Eastern Province', 'phone' => '0733567891', 'email' => 'habimana.jdd@gmail.com',
                'language' => 'Kinyarwanda, English', 'level' => 'intermediate', 'category' => 3,
            ],
            [
                'name' => 'Ingabire Solange', 'description' => 'Music producer and audio engineer mixing Afrobeat and traditional Rwandan sounds for upcoming artists.',
                'address' => 'Gisenyi, Rubavu, Western Province', 'phone' => '0788987654', 'email' => 'ingabire.solange@gmail.com',
                'language' => 'Kinyarwanda, French', 'level' => 'beginner', 'category' => 4,
            ],
        ];

        $talentIds = [];
        foreach ($talentsData as $i => $t) {
            $talentIds[] = DB::table('talents')->insertGetId([
                'name'        => $t['name'],
                'user_id'     => $userIds[$i],
                'category_id' => $categoryIds[$t['category']],
                'description' => $t['description'],
                'address'     => $t['address'],
                'phone'       => $t['phone'],
                'email'       => $t['email'],
                'language'    => $t['language'],
                'matched'     => 0,
                'status'      => 'approved',
                'featured'    => $i === 0 ? 1 : 0,
                'level'       => $t['level'],
                'created_at'  => $now,
                'updated_at'  => $now,
            ]);
        }

        // ===============================================================
        // 4. Skills (linked to talents + categories)
        // ===============================================================
        $skillsData = [
            ['name' => 'Logo & Brand Identity Design', 'desc' => 'Creating memorable logos and full brand kits for startups and cooperatives.', 'tags' => 'branding,logo,illustrator', 'level' => 'Expert'],
            ['name' => 'Laravel & React Web Applications', 'desc' => 'Building custom business websites, portals and dashboards using Laravel and React.', 'tags' => 'laravel,react,php', 'level' => 'Advanced'],
            ['name' => 'Custom Imishanana & Modern Wear Tailoring', 'desc' => 'Designing and sewing traditional and modern outfits to measure.', 'tags' => 'tailoring,fashion,imishanana', 'level' => 'Intermediate'],
            ['name' => 'Wedding & Event Photography', 'desc' => 'Capturing weddings, Gusaba ceremonies and corporate events with professional editing.', 'tags' => 'photography,events,editing', 'level' => 'Intermediate'],
            ['name' => 'Beat Making & Audio Mixing', 'desc' => 'Producing original beats and mixing/mastering tracks for local artists.', 'tags' => 'music,mixing,production', 'level' => 'Beginner'],
        ];

        $skillIds = [];
        foreach ($skillsData as $i => $s) {
            $skillIds[] = DB::table('skills')->insertGetId([
                'name'        => $s['name'],
                'slug'        => Str::slug($s['name']),
                'description' => $s['desc'],
                'talent_id'   => $talentIds[$i],
                'category_id' => $categoryIds[$i],
                'tags'        => $s['tags'],
                'status'      => 'published',
                'level'       => $s['level'],
                'created_at'  => $now,
                'updated_at'  => $now,
            ]);
        }

        // ===============================================================
        // 5. Skill reviews (linked to skills)
        // ===============================================================
        $skillReviews = [
            ['name' => 'Patrick B.', 'email' => 'byiringiro.patrick@gmail.com', 'rating' => 5, 'message' => 'Diane redesigned our cooperative logo and the result was excellent. Very professional.'],
            ['name' => 'Claudine U.', 'email' => 'uwimana.claudine@gmail.com', 'rating' => 5, 'message' => 'Eric built our booking website in three weeks. Clean code and great communication.'],
            ['name' => 'Fabrice N.', 'email' => 'nkurunziza.fabrice@gmail.com', 'rating' => 4, 'message' => 'Alice made my introduction outfit and it fit perfectly. Delivery took a bit longer than planned.'],
            ['name' => 'Josiane M.', 'email' => 'mutesi.josiane@gmail.com', 'rating' => 5, 'message' => 'Jean de Dieu covered our wedding in Nyagatare. The photos were stunning.'],
            ['name' => 'Aime T.', 'email' => 'twagirayezu.aime@gmail.com', 'rating' => 4, 'message' => 'Solange mixed my single and the sound quality improved a lot.'],
        ];

        foreach ($skillReviews as $i => $r) {
            DB::table('skill_reviews')->insert([
                'skill_id'   => $skillIds[$i],
                'name'       => $r['name'],
                'email'      => $r['email'],
                'rating'     => $r['rating'],
                'message'    => $r['message'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // ===============================================================
        // 6. Courses (linked to talents + categories)
        // ===============================================================
        $coursesData = [
            ['title' => 'Logo Design Fundamentals with Illustrator', 'desc' => 'Learn to design professional logos from concept to final vector artwork.', 'is_free' => 1, 'price' => null, 'level' => 'Beginner'],
            ['title' => 'Build a Business Website with Laravel', 'desc' => 'A practical course on building and deploying a Laravel-powered business website.', 'is_free' => 0, 'price' => 25000, 'level' => 'Intermediate'],
            ['title' => 'Introduction to Modern Tailoring Techniques', 'desc' => 'Fundamentals of pattern making and sewing modern Rwandan fashion pieces.', 'is_free' => 0, 'price' => 15000, 'level' => 'Beginner'],
            ['title' => 'Event Photography for Beginners', 'desc' => 'Camera settings, lighting and composition for shooting weddings and events.', 'is_free' => 0, 'price' => 20000, 'level' => 'Beginner'],
            ['title' => 'Home Studio Beat Making with FL Studio', 'desc' => 'Produce your first beat using affordable home studio equipment.', 'is_free' => 1, 'price' => null, 'level' => 'Beginner'],
        ];

        $courseIds = [];
        foreach ($coursesData as $i => $c) {
            $courseIds[] = DB::table('courses')->insertGetId([
                'talent_id'   => $talentIds[$i],
                'title'       => $c['title'],
                'slug'        => Str::slug($c['title']),
                'description' => $c['desc'],
                'category_id' => $categoryIds[$i],
                'is_free'     => $c['is_free'],
                'price'       => $c['price'],
                'level'       => $c['level'],
                'status'      => 'published',
                'created_at'  => $now,
                'updated_at'  => $now,
            ]);
        }

        // ===============================================================
        // 7. Course lessons (linked to courses)
        // ===============================================================
        $lessonTitles = [
            'Understanding Logo Design Principles',
            'Setting Up Your Laravel Development Environment',
            'Taking Body Measurements Correctly',
            'Camera Settings for Low-Light Events',
            'Choosing Your First Drum Kit',
        ];

        foreach ($lessonTitles as $i => $title) {
            DB::table('course_lessons')->insert([
                'course_id'  => $courseIds[$i],
                'title'      => $title,
                'content'    => 'In this lesson, we cover the essentials step by step with practical Rwandan-context examples.',
                'video_url'  => null,
                'order'      => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // ===============================================================
        // 8. Course enrollments (linked to courses + client users)
        // ===============================================================
        $enrollmentStatuses = ['completed', 'active', 'active', 'completed', 'canceled'];
        foreach ($courseIds as $i => $courseId) {
            DB::table('course_enrollments')->insert([
                'course_id'  => $courseId,
                'user_id'    => $clientUserIds[$i],
                'progress'   => $enrollmentStatuses[$i] === 'completed' ? 100 : ($enrollmentStatuses[$i] === 'canceled' ? 10 : 45),
                'status'     => $enrollmentStatuses[$i],
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // ===============================================================
        // 9. Course feedback (linked to courses + client users)
        // ===============================================================
        $courseFeedback = [
            ['rating' => 5, 'comment' => 'Very clear explanations, I redesigned my shop logo after this course.'],
            ['rating' => 4, 'comment' => 'Good course but moves fast for absolute beginners.'],
            ['rating' => 5, 'comment' => 'Alice explains measurements so clearly, my first dress came out great.'],
            ['rating' => 4, 'comment' => 'Helped me shoot my sister\'s wedding with confidence.'],
            ['rating' => 3, 'comment' => 'Useful basics but I expected more on mixing vocals.'],
        ];

        foreach ($courseFeedback as $i => $f) {
            DB::table('course_feedback')->insert([
                'course_id'  => $courseIds[$i],
                'user_id'    => $clientUserIds[$i],
                'rating'     => $f['rating'],
                'comment'    => $f['comment'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // ===============================================================
        // 10. Stories (linked to talents + categories)
        // ===============================================================
        $storiesData = [
            ['title' => 'From Kimironko to Corporate Branding', 'content' => 'Diane started designing logos for neighborhood shops before landing contracts with cooperatives across Kigali.'],
            ['title' => 'Building Websites for Rural Businesses', 'content' => 'Eric started freelancing in Huye and now builds booking systems for hotels across the Southern Province.'],
            ['title' => 'Reviving Traditional Tailoring in Musanze', 'content' => 'Alice blends Imishanana techniques with modern cuts, training three apprentices from her Musanze workshop.'],
            ['title' => 'Capturing Eastern Province Weddings', 'content' => 'Jean de Dieu turned a phone camera hobby into a full photography business covering Nyagatare and beyond.'],
            ['title' => 'Producing Beats from Gisenyi', 'content' => 'Solange set up a small home studio in Rubavu and now mixes tracks for local upcoming artists.'],
        ];

        $storyIds = [];
        foreach ($storiesData as $i => $s) {
            $storyIds[] = DB::table('stories')->insertGetId([
                'talent_id'   => $talentIds[$i],
                'title'       => $s['title'],
                'content'     => $s['content'],
                'slug'        => Str::slug($s['title']),
                'category_id' => $categoryIds[$i],
                'tags'        => 'rwanda,talent,success-story',
                'status'      => 'published',
                'views'       => rand(50, 800),
                'created_at'  => $now,
                'updated_at'  => $now,
            ]);
        }

        // ===============================================================
        // 11. Story comments (linked to stories)
        // ===============================================================
        $storyComments = [
            ['name' => 'Emmanuel R.', 'email' => 'emmanuel.r@gmail.com', 'comment' => 'Inspiring journey, congratulations Diane!', 'rating' => 5],
            ['name' => 'Grace K.', 'email' => 'grace.k@gmail.com', 'comment' => 'Great to see local developers getting recognized.', 'rating' => 5],
            ['name' => 'Vincent M.', 'email' => 'vincent.m@gmail.com', 'comment' => 'Our culture deserves this kind of modern touch.', 'rating' => 4],
            ['name' => 'Divine U.', 'email' => 'divine.u@gmail.com', 'comment' => 'His photos are always so vibrant.', 'rating' => 5],
            ['name' => 'Olivier N.', 'email' => 'olivier.n@gmail.com', 'comment' => 'Keep making good music, Rwanda is proud.', 'rating' => 4],
        ];

        foreach ($storyComments as $i => $c) {
            DB::table('story_comments')->insert([
                'story_id'   => $storyIds[$i],
                'name'       => $c['name'],
                'email'      => $c['email'],
                'comment'    => $c['comment'],
                'rating'     => $c['rating'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // ===============================================================
        // 12. Testimonials (linked to talents)
        // ===============================================================
        $testimonials = [
            ['title' => 'Outstanding branding work', 'content' => 'Diane delivered a full brand kit within a week, communication was excellent.', 'rating' => 5],
            ['title' => 'Reliable developer', 'content' => 'Eric delivered our web app on time and it has been running smoothly since launch.', 'rating' => 5],
            ['title' => 'Beautiful craftsmanship', 'content' => 'Alice made outfits for our whole bridal party, everyone loved the fit.', 'rating' => 5],
            ['title' => 'Captured our day perfectly', 'content' => 'Jean de Dieu was patient, professional and the final album exceeded expectations.', 'rating' => 4],
            ['title' => 'Great sound quality', 'content' => 'Solange mastered our EP and the difference in quality was noticeable immediately.', 'rating' => 4],
        ];

        foreach ($testimonials as $i => $t) {
            DB::table('testimonials')->insert([
                'talent_id'  => $talentIds[$i],
                'title'      => $t['title'],
                'content'    => $t['content'],
                'rating'     => $t['rating'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // ===============================================================
        // 13. Talent connections (linked to talents)
        // ===============================================================
        $connections = [
            ['name' => 'Kigali Coffee Cooperative', 'email' => 'info@kigalicoffeecoop.rw', 'status' => 'accepted', 'message' => 'We would like a full rebrand for our coffee packaging.'],
            ['name' => 'Rwanda Tour Booking Ltd', 'email' => 'contact@rwandatourbooking.rw', 'status' => 'pending', 'message' => 'Interested in a booking website for our tour packages.'],
            ['name' => 'Amahoro Bridal House', 'email' => 'orders@amahorobridal.rw', 'status' => 'accepted', 'message' => 'We need a tailor for a batch of bridesmaid dresses.'],
            ['name' => 'Nyagatare Events Co.', 'email' => 'events@nyagatareevents.rw', 'status' => 'pending', 'message' => 'Looking for a photographer for an upcoming corporate gala.'],
            ['name' => 'Waves Studio Kigali', 'email' => 'bookings@wavesstudio.rw', 'status' => 'rejected', 'message' => 'Would you be available to co-produce a track next month?'],
        ];

        foreach ($connections as $i => $c) {
            DB::table('talent_connections')->insert([
                'talent_id'  => $talentIds[$i],
                'name'       => $c['name'],
                'email'      => $c['email'],
                'status'     => $c['status'],
                'message'    => $c['message'],
                'response'   => $c['status'] === 'accepted' ? 'Thank you, looking forward to working together.' : null,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // ===============================================================
        // 14. Talent feedback (linked to talents)
        // ===============================================================
        $talentFeedback = [
            ['name' => 'Solange K.', 'email' => 'solange.k@gmail.com', 'rating' => 5, 'comment' => 'Very responsive and delivered ahead of schedule.'],
            ['name' => 'Eric M.', 'email' => 'eric.m@gmail.com', 'rating' => 5, 'comment' => 'Solid technical skills, would hire again.'],
            ['name' => 'Chantal N.', 'email' => 'chantal.n@gmail.com', 'rating' => 4, 'comment' => 'Great tailoring but pickup date shifted once.'],
            ['name' => 'Robert I.', 'email' => 'robert.i@gmail.com', 'rating' => 5, 'comment' => 'Professional and easy to work with on event day.'],
            ['name' => 'Aline U.', 'email' => 'aline.u@gmail.com', 'rating' => 4, 'comment' => 'Good ear for melody, communicates clearly.'],
        ];

        foreach ($talentFeedback as $i => $f) {
            DB::table('talent_feedback')->insert([
                'talent_id'  => $talentIds[$i],
                'name'       => $f['name'],
                'email'      => $f['email'],
                'rating'     => $f['rating'],
                'comment'    => $f['comment'],
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // ===============================================================
        // 15. Corporate recruitments (linked to company users)
        // ===============================================================
        $recruitments = [
            ['title' => 'UI/UX Designer - Digital Banking', 'desc' => 'Design intuitive interfaces for our mobile and web banking platforms.', 'skills' => ['Figma', 'UI Design', 'Prototyping'], 'category' => 'Graphic Design', 'region' => 'Kigali'],
            ['title' => 'Backend Engineer - Mobile Money APIs', 'desc' => 'Build and maintain secure APIs for mobile money integrations.', 'skills' => ['PHP', 'Laravel', 'REST APIs'], 'category' => 'Web Development', 'region' => 'Kigali'],
            ['title' => 'Drone Operations Technician', 'desc' => 'Support drone delivery operations for medical supplies across the Eastern Province.', 'skills' => ['Logistics', 'Technical Support'], 'category' => 'Logistics', 'region' => 'Muhanga'],
            ['title' => 'Quality Control Officer - Dairy Products', 'desc' => 'Monitor product quality across the dairy processing line.', 'skills' => ['Quality Assurance', 'Food Safety'], 'category' => 'Manufacturing', 'region' => 'Kigali'],
            ['title' => 'Startup Community Coordinator', 'desc' => 'Coordinate events and programs for early-stage tech startups.', 'skills' => ['Event Management', 'Communication'], 'category' => 'Business', 'region' => 'Kigali'],
        ];

        foreach ($recruitments as $i => $r) {
            DB::table('corporate_recruitments')->insert([
                'company_id' => $sellerIds[$i],
                'title'      => $r['title'],
                'description'=> $r['desc'],
                'skills'     => json_encode($r['skills']),
                'category'   => $r['category'],
                'region'     => $r['region'],
                'status'     => 'active',
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        // ===============================================================
        // 16. Quick hires (linked to categories, talents, client users)
        // ===============================================================
        $quickHires = [
            ['title' => 'Need a logo for a new coffee shop', 'desc' => 'Looking for a modern, clean logo for a coffee shop opening in Kacyiru.', 'skills' => ['Logo Design'], 'client' => 'Alex Mugisha', 'email' => 'alex.mugisha@gmail.com', 'phone' => '0788112233'],
            ['title' => 'Build a landing page for a SACCO', 'desc' => 'A simple, responsive landing page with a contact form and mobile money info.', 'skills' => ['Web Development'], 'client' => 'Beatrice Umutoni', 'email' => 'beatrice.umutoni@gmail.com', 'phone' => '0733445566'],
            ['title' => 'Tailor needed for graduation gowns', 'desc' => 'Need 10 matching outfits ready within three weeks for a graduation ceremony.', 'skills' => ['Tailoring'], 'client' => 'Cedric Habyarimana', 'email' => 'cedric.h@gmail.com', 'phone' => '0722998877'],
            ['title' => 'Photographer for product shoot', 'desc' => 'Half-day product photography session for an online shop catalog.', 'skills' => ['Photography'], 'client' => 'Diane Keza', 'email' => 'diane.keza@gmail.com', 'phone' => '0789667788'],
            ['title' => 'Producer needed for jingle', 'desc' => 'Short 30-second jingle for a local radio advert.', 'skills' => ['Music Production'], 'client' => 'Eric Bizimana', 'email' => 'eric.bizimana@gmail.com', 'phone' => '0788554433'],
        ];

        foreach ($quickHires as $i => $q) {
            DB::table('quick_hires')->insert([
                'user_id'          => $clientUserIds[$i],
                'category_id'      => $categoryIds[$i],
                'talent_id'        => $talentIds[$i],
                'title'            => $q['title'],
                'description'      => $q['desc'],
                'budget_type'      => 'fixed',
                'budget_min'       => 30000,
                'budget_max'       => 120000,
                'timeline'         => '2-3 weeks',
                'experience_level' => 'intermediate',
                'skills'           => json_encode($q['skills']),
                'client_name'      => $q['client'],
                'client_email'     => $q['email'],
                'client_phone'     => $q['phone'],
                'company_name'     => null,
                'status'           => 'matched',
                'created_at'       => $now,
                'updated_at'       => $now,
            ]);
        }

        // ===============================================================
        // 17. Job categories (parent) + job sections + applications
        // ===============================================================
        $jobCategories = ['Finance & Banking', 'Information Technology', 'Logistics & Supply Chain', 'Manufacturing', 'Business Development'];

        $jobCategoryIds = [];
        foreach ($jobCategories as $name) {
            $jobCategoryIds[] = DB::table('job_categories')->insertGetId([
                'name'       => $name,
                'slug'       => Str::slug($name),
                'parent_id'  => null,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }

        $jobSections = [
            ['title' => 'Digital Banking Officer', 'desc' => 'Support digital channel operations and customer onboarding.', 'location' => 'Kigali', 'type' => 'full-time', 'exp' => 'mid', 'salary' => '600,000 - 900,000 RWF'],
            ['title' => 'Junior Laravel Developer', 'desc' => 'Assist in building and maintaining internal web applications.', 'location' => 'Kigali', 'type' => 'full-time', 'exp' => 'junior', 'salary' => '400,000 - 600,000 RWF'],
            ['title' => 'Logistics Coordinator', 'desc' => 'Coordinate delivery routes and inventory tracking.', 'location' => 'Muhanga', 'type' => 'full-time', 'exp' => 'mid', 'salary' => '350,000 - 500,000 RWF'],
            ['title' => 'Production Supervisor', 'desc' => 'Oversee daily production line operations and staff scheduling.', 'location' => 'Kigali', 'type' => 'full-time', 'exp' => 'senior', 'salary' => '500,000 - 750,000 RWF'],
            ['title' => 'Business Development Associate', 'desc' => 'Identify partnership opportunities for the innovation hub.', 'location' => 'Kigali', 'type' => 'contract', 'exp' => 'entry', 'salary' => '300,000 - 450,000 RWF'],
        ];

        $jobSectionIds = [];
        foreach ($jobSections as $i => $j) {
            $jobSectionIds[] = DB::table('job_sections')->insertGetId([
                'job_category_id'  => $jobCategoryIds[$i],
                'title'            => $j['title'],
                'description'      => $j['desc'],
                'location'         => $j['location'],
                'type'             => $j['type'],
                'experience_level' => $j['exp'],
                'salary_range'     => $j['salary'],
                'skills'           => json_encode(['Communication', 'Teamwork']),
                'company_id'       => $companyUserIds[$i],
                'created_at'       => $now,
                'updated_at'       => $now,
            ]);
        }

        $applications = [
            ['name' => 'Providence Umuhoza', 'email' => 'providence.u@gmail.com'],
            ['name' => 'Jean Paul Ndayisenga', 'email' => 'jeanpaul.n@gmail.com'],
            ['name' => 'Marie Claire Uwineza', 'email' => 'marieclaire.u@gmail.com'],
            ['name' => 'Emmanuel Tuyishime', 'email' => 'emmanuel.t@gmail.com'],
            ['name' => 'Yvette Mukashyaka', 'email' => 'yvette.m@gmail.com'],
        ];

        foreach ($applications as $i => $a) {
            DB::table('job_section_applications')->insert([
                'job_section_id' => $jobSectionIds[$i],
                'name'           => $a['name'],
                'email'          => $a['email'],
                'cover_letter'   => 'I am excited to apply for this role and believe my background is a strong fit.',
                'resume'         => null,
                'status'         => 'pending',
                'created_at'     => $now,
                'updated_at'     => $now,
            ]);
        }

        // ===============================================================
        // 18. Events + event tickets (linked to company users as organizers)
        // ===============================================================
        $events = [
            ['title' => 'Kigali FinTech Summit 2026', 'venue' => 'Kigali Convention Centre', 'type' => 'hybrid'],
            ['title' => 'MTN Developers Meetup', 'venue' => 'MTN Head Office, Nyarutarama', 'type' => 'online'],
            ['title' => 'Zipline Innovation Day', 'venue' => 'Muhanga Distribution Center', 'type' => 'hybrid'],
            ['title' => 'Made in Rwanda Expo', 'venue' => 'Petit Stade, Remera', 'type' => 'hybrid'],
            ['title' => 'Kigali Innovation City Career Fair', 'venue' => 'Kigali Innovation City Campus', 'type' => 'online'],
        ];

        $eventIds = [];
        foreach ($events as $i => $e) {
            $eventIds[] = DB::table('events')->insertGetId([
                'title'        => $e['title'],
                'organizer_id' => $companyUserIds[$i],
                'description'  => 'Join us for a day of networking, panels and hands-on sessions with industry leaders.',
                'venue'        => $e['venue'],
                'type'         => $e['type'],
                'start_time'   => $now->copy()->addDays(30 + $i),
                'end_time'     => $now->copy()->addDays(30 + $i)->addHours(6),
                'capacity'     => 200,
                'created_at'   => $now,
                'updated_at'   => $now,
            ]);
        }

        foreach ($eventIds as $eventId) {
            DB::table('event_tickets')->insert([
                'event_id'   => $eventId,
                'type'       => 'Regular',
                'price'      => 10000,
                'quantity'   => 150,
                'sold'       => rand(10, 90),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            DB::table('event_tickets')->insert([
                'event_id'   => $eventId,
                'type'       => 'VIP',
                'price'      => 30000,
                'quantity'   => 30,
                'sold'       => rand(2, 15),
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        }
    }
}