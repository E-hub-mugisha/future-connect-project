<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            SettingsSeeder::class,
            RolesPermissionsSeeder::class,
            UsersSeeder::class,
            CategoriesSeeder::class,
            PartnersSeeder::class,
            TalentsSeeder::class,
            SkillsSeeder::class,
            CoursesSeeder::class,
            BlogsSeeder::class,
            AnnouncementsSeeder::class,
            EventsSeeder::class,
            JobCategoriesSeeder::class,
            JobSectionsSeeder::class,
            ProductCategoriesSeeder::class,
            SellersSeeder::class,
            ProductsSeeder::class,
            ProjectsSeeder::class,
            PricingPlansSeeder::class,
            WalletsSeeder::class,
            StoriesSeeder::class,
            SuccessStoriesSeeder::class,
            TestimonialsSeeder::class,
            FaqsSeeder::class,
            ContactsSeeder::class,
        ]);
    }
}

// ─────────────────────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────────────────────
class SettingsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('settings')->insertOrIgnore([
            'id'                   => 1,
            'site_name'            => 'Future Connect',
            'logo'                 => null,
            'default_language'     => 'en',
            'timezone'             => 'Africa/Kigali',
            'contact_email'        => 'info@futureconnect.rw',
            'contact_phone'        => '+250 788 123 456',
            'contact_address'      => 'KG 501 St, Kacyiru, Kigali, Rwanda',
            'facebook_link'        => 'https://facebook.com/futureconnectrw',
            'twitter_link'         => 'https://twitter.com/futureconnectrw',
            'instagram_link'       => 'https://instagram.com/futureconnectrw',
            'linkedin_link'        => 'https://linkedin.com/company/futureconnectrw',
            'registration_open'    => 1,
            'enable_notifications' => 1,
            'created_at'           => now(),
            'updated_at'           => now(),
        ]);
    }
}

// ─────────────────────────────────────────────────────────────
// ROLES & PERMISSIONS (Spatie)
// ─────────────────────────────────────────────────────────────
class RolesPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        $guard = 'web';
        $now   = now();

        $permissions = [
            'manage users', 'manage talents', 'manage skills', 'manage courses',
            'manage blogs', 'manage announcements', 'manage events', 'manage jobs',
            'manage products', 'manage projects', 'manage plans', 'manage settings',
            'manage partners', 'manage faqs', 'view dashboard',
        ];

        $permIds = [];
        foreach ($permissions as $perm) {
            $id = DB::table('permissions')->insertGetId([
                'name'       => $perm,
                'guard_name' => $guard,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
            $permIds[$perm] = $id;
        }

        $roles = [
            'admin'   => array_values($permIds),
            'talent'  => [$permIds['manage skills'], $permIds['manage courses']],
            'company' => [$permIds['manage jobs'], $permIds['manage projects']],
            'user'    => [],
        ];

        foreach ($roles as $roleName => $rolePerms) {
            $roleId = DB::table('roles')->insertGetId([
                'name'       => $roleName,
                'guard_name' => $guard,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            foreach ($rolePerms as $permId) {
                DB::table('role_has_permissions')->insert([
                    'permission_id' => $permId,
                    'role_id'       => $roleId,
                ]);
            }
        }
    }
}

// ─────────────────────────────────────────────────────────────
// USERS
// ─────────────────────────────────────────────────────────────
class UsersSeeder extends Seeder
{
    public function run(): void
    {
        $now = now();

        // Admin
        $adminId = DB::table('users')->insertGetId([
            'name'              => 'Claudine Uwamahoro',
            'email'             => 'admin@futureconnect.rw',
            'email_verified_at' => $now,
            'password'          => Hash::make('password'),
            'role'              => 'admin',
            'active'            => 1,
            'is_verified'       => 1,
            'created_at'        => $now,
            'updated_at'        => $now,
        ]);

        $adminRoleId = DB::table('roles')->where('name', 'admin')->value('id');
        DB::table('model_has_roles')->insert([
            'role_id'    => $adminRoleId,
            'model_type' => 'App\\Models\\User',
            'model_id'   => $adminId,
        ]);

        // Talent users
        $talentUsers = [
            ['name' => 'Jean-Pierre Habimana',   'email' => 'jp.habimana@gmail.com'],
            ['name' => 'Diane Ingabire',          'email' => 'diane.ingabire@gmail.com'],
            ['name' => 'Emmanuel Ndayishimiye',   'email' => 'emma.ndayi@gmail.com'],
            ['name' => 'Clarisse Mukamana',       'email' => 'clarisse.mukamana@gmail.com'],
            ['name' => 'Patrick Nkurunziza',      'email' => 'patrick.nkuru@gmail.com'],
            ['name' => 'Solange Umubyeyi',        'email' => 'solange.umub@gmail.com'],
            ['name' => 'Christian Ndungutse',     'email' => 'chris.ndungu@gmail.com'],
            ['name' => 'Angélique Tuyishime',     'email' => 'angeli.tuyishi@gmail.com'],
        ];

        $talentRoleId = DB::table('roles')->where('name', 'talent')->value('id');

        foreach ($talentUsers as $u) {
            $uid = DB::table('users')->insertGetId([
                'name'              => $u['name'],
                'email'             => $u['email'],
                'email_verified_at' => $now,
                'password'          => Hash::make('password'),
                'role'              => 'talent',
                'active'            => 1,
                'is_verified'       => 1,
                'created_at'        => $now,
                'updated_at'        => $now,
            ]);
            DB::table('model_has_roles')->insert([
                'role_id'    => $talentRoleId,
                'model_type' => 'App\\Models\\User',
                'model_id'   => $uid,
            ]);
        }

        // Regular users / recruiters
        $regularUsers = [
            ['name' => 'Aimable Nzeyimana',     'email' => 'aimable.nzey@gmail.com'],
            ['name' => 'Vestine Kayitesi',       'email' => 'vestine.kayit@gmail.com'],
            ['name' => 'Théogène Rutaganda',     'email' => 'theo.rutag@gmail.com'],
            ['name' => 'Marie-Claire Ingabire',  'email' => 'mc.ingabire@gmail.com'],
            ['name' => 'Fidèle Nshimiyimana',    'email' => 'fidele.nshimiy@gmail.com'],
        ];

        $userRoleId = DB::table('roles')->where('name', 'user')->value('id');

        foreach ($regularUsers as $u) {
            $uid = DB::table('users')->insertGetId([
                'name'              => $u['name'],
                'email'             => $u['email'],
                'email_verified_at' => $now,
                'password'          => Hash::make('password'),
                'role'              => 'user',
                'active'            => 1,
                'is_verified'       => 1,
                'created_at'        => $now,
                'updated_at'        => $now,
            ]);
            DB::table('model_has_roles')->insert([
                'role_id'    => $userRoleId,
                'model_type' => 'App\\Models\\User',
                'model_id'   => $uid,
            ]);
        }
    }
}

// ─────────────────────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────────────────────
class CategoriesSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Music & Performing Arts', 'description' => 'Singers, musicians, dancers, and stage performers from Rwanda.', 'featured' => 1, 'slug' => 'music-performing-arts'],
            ['name' => 'Visual Arts & Design',    'description' => 'Painters, graphic designers, illustrators, and photographers.',   'featured' => 1, 'slug' => 'visual-arts-design'],
            ['name' => 'Technology & Innovation', 'description' => 'Software developers, data scientists, and tech entrepreneurs.',    'featured' => 1, 'slug' => 'technology-innovation'],
            ['name' => 'Business & Entrepreneurship', 'description' => 'Startups, business strategists, and SME owners.',             'featured' => 0, 'slug' => 'business-entrepreneurship'],
            ['name' => 'Fashion & Textiles',      'description' => 'Fashion designers, tailors, and textile artists.',                'featured' => 1, 'slug' => 'fashion-textiles'],
            ['name' => 'Sports & Athletics',      'description' => 'Athletes, coaches, and sports development professionals.',        'featured' => 0, 'slug' => 'sports-athletics'],
            ['name' => 'Agriculture & Agritech',  'description' => 'Innovative farmers, agritech founders, and agronomists.',        'featured' => 0, 'slug' => 'agriculture-agritech'],
            ['name' => 'Education & Training',    'description' => 'Educators, curriculum designers, and professional trainers.',     'featured' => 0, 'slug' => 'education-training'],
            ['name' => 'Health & Wellness',       'description' => 'Healthcare professionals, fitness coaches, and nutritionists.',   'featured' => 0, 'slug' => 'health-wellness'],
            ['name' => 'Media & Journalism',      'description' => 'Journalists, content creators, podcast hosts, and bloggers.',     'featured' => 0, 'slug' => 'media-journalism'],
        ];

        foreach ($categories as $cat) {
            DB::table('categories')->insert(array_merge($cat, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// PARTNERS
// ─────────────────────────────────────────────────────────────
class PartnersSeeder extends Seeder
{
    public function run(): void
    {
        $partners = [
            ['name' => 'Rwanda Development Board (RDB)',      'description' => 'Government agency promoting investment and talent development.',    'link' => 'https://rdb.rw',          'status' => 1],
            ['name' => 'Bank of Kigali',                      'description' => 'Leading financial institution supporting youth entrepreneurs.',     'link' => 'https://bk.rw',           'status' => 1],
            ['name' => 'Andela Rwanda',                       'description' => 'Tech talent accelerator connecting African engineers globally.',    'link' => 'https://andela.com',      'status' => 1],
            ['name' => 'Kigali Innovation City',              'description' => 'Pan-African tech hub fostering innovation and entrepreneurship.',   'link' => 'https://kic.rw',          'status' => 1],
            ['name' => 'MTN Rwanda',                          'description' => 'Telecom leader supporting digital skills and connectivity.',        'link' => 'https://mtn.co.rw',       'status' => 1],
            ['name' => 'Imbuto Foundation',                   'description' => 'Foundation empowering Rwandan youth through education.',            'link' => 'https://imbutofoundation.org', 'status' => 1],
            ['name' => 'GIZ Rwanda',                          'description' => 'German development agency supporting vocational training.',         'link' => 'https://giz.de',          'status' => 1],
        ];

        foreach ($partners as $partner) {
            DB::table('partners')->insert(array_merge($partner, [
                'logo'       => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// TALENTS
// ─────────────────────────────────────────────────────────────
class TalentsSeeder extends Seeder
{
    public function run(): void
    {
        // user IDs 2–9 are talent users (seeded above)
        // category IDs 1–10
        $talents = [
            [
                'user_id'     => 2,
                'category_id' => 3,
                'name'        => 'Jean-Pierre Habimana',
                'description' => 'Full-stack developer with 6 years of experience. Specialises in Laravel, React, and mobile apps. Based in Kigali, working with local startups and international clients.',
                'address'     => 'Kicukiro, Kigali',
                'phone'       => '+250 788 234 567',
                'email'       => 'jp.habimana@gmail.com',
                'language'    => 'Kinyarwanda, English, French',
                'level'       => 'advanced',
                'status'      => 'approved',
                'featured'    => 1,
            ],
            [
                'user_id'     => 3,
                'category_id' => 1,
                'name'        => 'Diane Ingabire',
                'description' => 'Afro-fusion vocalist and songwriter. Released two EPs on Rwandan and East African markets. Performs at corporate events and music festivals across the region.',
                'address'     => 'Nyarugenge, Kigali',
                'phone'       => '+250 722 345 678',
                'email'       => 'diane.ingabire@gmail.com',
                'language'    => 'Kinyarwanda, English',
                'level'       => 'advanced',
                'status'      => 'approved',
                'featured'    => 1,
            ],
            [
                'user_id'     => 4,
                'category_id' => 2,
                'name'        => 'Emmanuel Ndayishimiye',
                'description' => 'Award-winning graphic designer and visual artist. Works with NGOs, government agencies, and private brands on brand identity, campaigns, and digital illustrations.',
                'address'     => 'Gasabo, Kigali',
                'phone'       => '+250 733 456 789',
                'email'       => 'emma.ndayi@gmail.com',
                'language'    => 'Kinyarwanda, English, French',
                'level'       => 'intermediate',
                'status'      => 'approved',
                'featured'    => 0,
            ],
            [
                'user_id'     => 5,
                'category_id' => 5,
                'name'        => 'Clarisse Mukamana',
                'description' => 'Fashion designer blending Imigongo patterns with contemporary styles. Her brand, Inzovu Couture, has been showcased at Kigali Fashion Week and CHIC Africa.',
                'address'     => 'Kimironko, Kigali',
                'phone'       => '+250 788 567 890',
                'email'       => 'clarisse.mukamana@gmail.com',
                'language'    => 'Kinyarwanda, English',
                'level'       => 'advanced',
                'status'      => 'approved',
                'featured'    => 1,
            ],
            [
                'user_id'     => 6,
                'category_id' => 7,
                'name'        => 'Patrick Nkurunziza',
                'description' => 'Agritech entrepreneur and agronomist. Co-founder of AgroRwanda, a platform connecting smallholder farmers to premium markets. Expert in smart irrigation and post-harvest management.',
                'address'     => 'Rwamagana, Eastern Province',
                'phone'       => '+250 722 678 901',
                'email'       => 'patrick.nkuru@gmail.com',
                'language'    => 'Kinyarwanda, English',
                'level'       => 'intermediate',
                'status'      => 'approved',
                'featured'    => 0,
            ],
            [
                'user_id'     => 7,
                'category_id' => 8,
                'name'        => 'Solange Umubyeyi',
                'description' => 'Professional educator and curriculum developer. Designs STEM programs for secondary schools across Rwanda. Trainer for the Rwanda Education Board.',
                'address'     => 'Musanze, Northern Province',
                'phone'       => '+250 788 789 012',
                'email'       => 'solange.umub@gmail.com',
                'language'    => 'Kinyarwanda, English, French',
                'level'       => 'advanced',
                'status'      => 'approved',
                'featured'    => 0,
            ],
            [
                'user_id'     => 8,
                'category_id' => 6,
                'name'        => 'Christian Ndungutse',
                'description' => 'Professional footballer and youth sports coach. Currently playing in the Rwanda National Football League and coaching U-17 youth academy players in Huye.',
                'address'     => 'Huye, Southern Province',
                'phone'       => '+250 733 890 123',
                'email'       => 'chris.ndungu@gmail.com',
                'language'    => 'Kinyarwanda, English',
                'level'       => 'intermediate',
                'status'      => 'approved',
                'featured'    => 0,
            ],
            [
                'user_id'     => 9,
                'category_id' => 10,
                'name'        => 'Angélique Tuyishime',
                'description' => 'Broadcast journalist and podcast host. Hosts "Inzira ya Keza" — a weekly podcast on women empowerment in Rwanda. Formerly with Rwanda Broadcasting Agency (RBA).',
                'address'     => 'Gasabo, Kigali',
                'phone'       => '+250 788 901 234',
                'email'       => 'angeli.tuyishi@gmail.com',
                'language'    => 'Kinyarwanda, English, French',
                'level'       => 'advanced',
                'status'      => 'approved',
                'featured'    => 1,
            ],
        ];

        foreach ($talents as $talent) {
            DB::table('talents')->insert(array_merge($talent, [
                'matched'    => 0,
                'image'      => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────
class SkillsSeeder extends Seeder
{
    public function run(): void
    {
        $skills = [
            // JP Habimana (talent 1)
            ['talent_id' => 1, 'category_id' => 3, 'name' => 'Laravel & PHP Development',   'slug' => 'laravel-php-development',   'description' => 'Building robust web applications with Laravel, REST APIs, Eloquent ORM, and queue management. Experienced delivering SaaS products for Rwandan and East African clients.', 'tags' => 'Laravel,PHP,REST API,MySQL',      'level' => 'Advanced',      'status' => 'published'],
            ['talent_id' => 1, 'category_id' => 3, 'name' => 'React & TypeScript Frontend', 'slug' => 'react-typescript-frontend', 'description' => 'Crafting responsive SPAs and dashboards with React, TypeScript, Tailwind CSS, and Vite. Skilled at converting Blade templates into modular component libraries.',                'tags' => 'React,TypeScript,Tailwind,Vite', 'level' => 'Advanced',      'status' => 'published'],
            // Diane Ingabire (talent 2)
            ['talent_id' => 2, 'category_id' => 1, 'name' => 'Afro-Fusion Vocals',          'slug' => 'afro-fusion-vocals',        'description' => 'Live and studio vocal performances in Afrobeat, R&B, and traditional Rwandan genres. Available for events, recordings, and brand campaigns.',                                  'tags' => 'Singing,Afrobeat,Studio,Live',  'level' => 'Expert',        'status' => 'published'],
            ['talent_id' => 2, 'category_id' => 1, 'name' => 'Songwriting & Composition',   'slug' => 'songwriting-composition',   'description' => 'Original songwriting in Kinyarwanda and English. Experienced collaborating with producers at Kigali-based studios and international music platforms.',               'tags' => 'Songwriting,Music,Kinyarwanda', 'level' => 'Advanced',      'status' => 'published'],
            // Emmanuel (talent 3)
            ['talent_id' => 3, 'category_id' => 2, 'name' => 'Brand Identity Design',       'slug' => 'brand-identity-design',     'description' => 'Creating logos, colour systems, typography guides, and full brand identities for startups, NGOs, and government agencies across Rwanda and the region.',                 'tags' => 'Branding,Logo,Adobe,Figma',     'level' => 'Intermediate',  'status' => 'published'],
            ['talent_id' => 3, 'category_id' => 2, 'name' => 'Digital Illustration',        'slug' => 'digital-illustration',      'description' => 'Hand-crafted digital illustrations inspired by Rwandan culture and Imigongo art. Used in editorial, advertising, and product packaging.',                                'tags' => 'Illustration,Procreate,Art',    'level' => 'Advanced',      'status' => 'published'],
            // Clarisse (talent 4)
            ['talent_id' => 4, 'category_id' => 5, 'name' => 'Afrocentric Fashion Design',  'slug' => 'afrocentric-fashion-design', 'description' => 'Designing wearable collections that blend Rwandan Imigongo patterns, kitenge fabrics, and modern silhouettes. Available for bespoke commissions and runway collections.', 'tags' => 'Fashion,Kitenge,Design,Rwanda', 'level' => 'Expert',        'status' => 'published'],
            // Patrick (talent 5)
            ['talent_id' => 5, 'category_id' => 7, 'name' => 'Agritech Consulting',         'slug' => 'agritech-consulting',        'description' => 'Advisory services on smart farming technologies: drip irrigation, soil sensors, mobile apps for farmers, and agri-market linkages in Rwanda.',                              'tags' => 'Agritech,Farming,Rwanda,IoT',   'level' => 'Intermediate',  'status' => 'published'],
            // Angélique (talent 8)
            ['talent_id' => 8, 'category_id' => 10, 'name' => 'Podcast Production & Hosting', 'slug' => 'podcast-production-hosting', 'description' => 'Full podcast production: script development, recording, editing, and distribution. Hosts and produces the "Inzira ya Keza" podcast with 20,000+ listeners.',           'tags' => 'Podcast,Media,Audio,Rwanda',    'level' => 'Advanced',      'status' => 'published'],
        ];

        foreach ($skills as $skill) {
            DB::table('skills')->insert(array_merge($skill, [
                'image'      => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// COURSES
// ─────────────────────────────────────────────────────────────
class CoursesSeeder extends Seeder
{
    public function run(): void
    {
        $courses = [
            [
                'talent_id'   => 1,
                'category_id' => 3,
                'title'       => 'Build a SaaS Platform with Laravel 11',
                'slug'        => 'build-saas-platform-laravel-11',
                'description' => 'A comprehensive course covering multi-tenancy, Stripe/MoMo payments, role management, and deployment on a Rwandan VPS. Designed for developers who want to launch their own products.',
                'is_free'     => 0,
                'price'       => 35000.00, // RWF
                'level'       => 'Advanced',
                'status'      => 'published',
            ],
            [
                'talent_id'   => 1,
                'category_id' => 3,
                'title'       => 'React & TypeScript for Beginners',
                'slug'        => 'react-typescript-beginners',
                'description' => 'Learn the fundamentals of React with TypeScript from scratch. We build a job board app tailored to the Rwandan market, covering hooks, routing, and API integration.',
                'is_free'     => 1,
                'price'       => null,
                'level'       => 'Beginner',
                'status'      => 'published',
            ],
            [
                'talent_id'   => 3,
                'category_id' => 2,
                'title'       => 'Graphic Design for African Brands',
                'slug'        => 'graphic-design-african-brands',
                'description' => 'Learn to design brand identities inspired by African art and culture. Covers Figma, color theory rooted in Rwandan aesthetics, and presenting work to clients.',
                'is_free'     => 0,
                'price'       => 25000.00,
                'level'       => 'Intermediate',
                'status'      => 'published',
            ],
            [
                'talent_id'   => 5,
                'category_id' => 7,
                'title'       => 'Smart Farming Fundamentals for Rwandan Farmers',
                'slug'        => 'smart-farming-fundamentals-rwanda',
                'description' => 'Introduction to precision agriculture: soil testing, drip irrigation, mobile weather data, and cooperative market access. Taught in both English and Kinyarwanda.',
                'is_free'     => 1,
                'price'       => null,
                'level'       => 'Beginner',
                'status'      => 'published',
            ],
        ];

        foreach ($courses as $course) {
            $courseId = DB::table('courses')->insertGetId(array_merge($course, [
                'thumbnail'  => null,
                'video'      => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]));

            // 2–3 lessons per course
            $lessons = [
                ['title' => 'Introduction & Setup',                         ],
                ['title' => 'Core Concepts Explained',                      ],
                ['title' => 'Building Your First Project',                  ],
            ];
            foreach ($lessons as $order => $lesson) {
                DB::table('course_lessons')->insert([
                    'course_id'   => $courseId,
                    'title'       => $lesson['title'],
                    'video_url'       => null,
                    'order'       => $order + 1,
                    'created_at'  => now(),
                    'updated_at'  => now(),
                ]);
            }
        }
    }
}

// ─────────────────────────────────────────────────────────────
// BLOGS
// ─────────────────────────────────────────────────────────────
class BlogsSeeder extends Seeder
{
    public function run(): void
    {
        $blogs = [
            [
                'title'        => "How Rwanda's Tech Ecosystem Is Attracting Global Investors",
                'slug'         => 'rwanda-tech-ecosystem-global-investors',
                'content'      => "Kigali has transformed into one of Africa's most dynamic tech hubs over the past decade. From the Kigali Innovation City to government-backed digital transformation policies, Rwanda's tech ecosystem now attracts talent and capital from around the world. In this article, we explore the key drivers behind this growth and what it means for local developers and entrepreneurs looking to build globally competitive products.",
                'author_id'    => 1,
                'category_id'  => 3,
                'views'        => 1420,
                'is_published' => 1,
            ],
            [
                'title'        => "Imigongo Art Goes Digital: Rwanda's Designers Lead the Way",
                'slug'         => 'imigongo-art-goes-digital',
                'content'      => "Traditional Imigongo patterns — geometric designs historically painted by Rwandan women — are now inspiring a generation of digital designers. Artists like Emmanuel Ndayishimiye are fusing these centuries-old motifs with Figma, Procreate, and modern branding techniques to create distinctly African visual identities for global brands.",
                'author_id'    => 1,
                'category_id'  => 2,
                'views'        => 987,
                'is_published' => 1,
            ],
            [
                'title'        => 'From Huye to Kigali: The Rise of Youth Sports Academies',
                'slug'         => 'youth-sports-academies-rwanda',
                'content'      => "Across Rwanda's southern and eastern provinces, a quiet revolution is underway in youth sports. Private academies supported by figures like Christian Ndungutse are providing structured training, nutritional support, and education pathways for talented young athletes who previously had no formal development route.",
                'author_id'    => 1,
                'category_id'  => 6,
                'views'        => 543,
                'is_published' => 1,
            ],
            [
                'title'        => 'MoMo Pay Integration for Rwandan Developers: A Complete Guide',
                'slug'         => 'momo-pay-integration-rwandan-developers',
                'content'      => "MTN Mobile Money is Rwanda's most widely used payment method, with over 10 million active users. This guide walks developers through the MTN MoMo API — from sandbox setup, collection endpoints, and webhook handling, to going live with a Rwandan business account. Code examples are provided in PHP/Laravel and Node.js.",
                'author_id'    => 2,
                'category_id'  => 3,
                'views'        => 3200,
                'is_published' => 1,
            ],
        ];

        foreach ($blogs as $blog) {
            DB::table('blogs')->insert(array_merge($blog, [
                'image'      => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// ANNOUNCEMENTS
// ─────────────────────────────────────────────────────────────
class AnnouncementsSeeder extends Seeder
{
    public function run(): void
    {
        $announcements = [
            [
                'title'       => 'Kigali Talent Showcase 2026 — Call for Applications',
                'content'     => 'Future Connect is proud to announce the 2026 Kigali Talent Showcase, open to all registered talents in music, tech, design, and sports. Applications close on 30 July 2026. Selected talents will perform or exhibit at the BK Arena in August.',
                'category_id' => 1,
                'is_active'   => 1,
                'created_by'  => 1,
                'link'        => null,
            ],
            [
                'title'       => 'New Feature: MoMo Wallet Top-Up Now Live',
                'content'     => 'You can now top up your Future Connect wallet directly via MTN Mobile Money. Navigate to your wallet dashboard and click "Add Funds" to get started. Minimum top-up is 1,000 RWF.',
                'category_id' => 3,
                'is_active'   => 1,
                'created_by'  => 1,
                'link'        => null,
            ],
            [
                'title'       => 'Platform Maintenance — Saturday 28 June, 2:00–4:00 AM',
                'content'     => 'We will be performing scheduled maintenance on Saturday 28 June 2026 from 2:00 AM to 4:00 AM (CAT). The platform will be temporarily unavailable during this window. We apologise for any inconvenience.',
                'category_id' => 3,
                'is_active'   => 1,
                'created_by'  => 1,
                'link'        => null,
            ],
        ];

        foreach ($announcements as $ann) {
            DB::table('announcements')->insert(array_merge($ann, [
                'image'      => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// EVENTS
// ─────────────────────────────────────────────────────────────
class EventsSeeder extends Seeder
{
    public function run(): void
    {
        $events = [
            [
                'title'        => 'Kigali Dev Summit 2026',
                'organizer_id' => 1,
                'description'  => "A two-day conference bringing together Rwanda's top software developers, startup founders, and tech investors. Topics include AI, fintech, and building for African markets. Hosted at the Radisson Blu Hotel, Kigali.",
                'venue'        => 'Radisson Blu Hotel, KG 2 Roundabout, Kigali',
                'event_date'   => '2026-08-15 08:00:00',
                'type'         => 'hybrid',
                'start_time'   => '2026-08-15 08:00:00',
                'end_time'     => '2026-08-16 18:00:00',
                'capacity'     => 500,
            ],
            [
                'title'        => 'Inzira ya Keza — Women in Media Forum',
                'organizer_id' => 9,
                'description'  => 'An empowerment forum for women working in media, journalism, and content creation across Rwanda. Panel discussions, workshops, and networking hosted at the Kigali Public Library.',
                'venue'        => 'Kigali Public Library, KN 3 Ave, Kigali',
                'event_date'   => '2026-07-20 09:00:00',
                'type'         => 'online',
                'start_time'   => '2026-07-20 09:00:00',
                'end_time'     => '2026-07-20 17:00:00',
                'capacity'     => 200,
            ],
            [
                'title'        => 'Kigali Fashion Week 2026 — Talent Edition',
                'organizer_id' => 1,
                'description'  => "Rwanda's premier fashion event celebrating African designers. Featuring collections by Inzovu Couture and other top Rwandan fashion houses. Held at the Kigali Convention Centre.",
                'venue'        => 'Kigali Convention Centre (KCC), KG 2 Ave',
                'event_date'   => '2026-09-05 16:00:00',
                'type'         => 'hybrid',
                'start_time'   => '2026-09-05 16:00:00',
                'end_time'     => '2026-09-07 21:00:00',
                'capacity'     => 1000,
            ],
        ];

        foreach ($events as $event) {
            $eventId = DB::table('events')->insertGetId(array_merge($event, [
                'image'      => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]));

            // Tickets per event
            $ticketTypes = [
                ['type' => 'General Admission', 'price' => 5000.00,  'quantity' => 300],
                ['type' => 'VIP',               'price' => 20000.00, 'quantity' => 50],
            ];
            foreach ($ticketTypes as $ticket) {
                DB::table('event_tickets')->insert(array_merge($ticket, [
                    'event_id'   => $eventId,
                    'sold'       => rand(5, 30),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]));
            }
        }
    }
}

// ─────────────────────────────────────────────────────────────
// JOB CATEGORIES & JOB SECTIONS
// ─────────────────────────────────────────────────────────────
class JobCategoriesSeeder extends Seeder
{
    public function run(): void
    {
        $cats = [
            ['name' => 'Software & Engineering', 'slug' => 'software-engineering'],
            ['name' => 'Design & Creative',      'slug' => 'design-creative'],
            ['name' => 'Marketing & Sales',      'slug' => 'marketing-sales'],
            ['name' => 'Finance & Accounting',   'slug' => 'finance-accounting'],
            ['name' => 'Agriculture & Agritech', 'slug' => 'agriculture-agritech'],
            ['name' => 'Education & Training',   'slug' => 'education-training'],
            ['name' => 'Health & Medicine',      'slug' => 'health-medicine'],
        ];

        foreach ($cats as $cat) {
            DB::table('job_categories')->insert(array_merge($cat, [
                'parent_id'  => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

class JobSectionsSeeder extends Seeder
{
    public function run(): void
    {
        // company_id maps to sellers/companies seeded later; we use user IDs 10–14
        $jobs = [
            [
                'job_category_id'  => 1,
                'title'            => 'Senior Laravel Developer',
                'description'      => 'We are looking for an experienced Laravel developer to lead backend development for our fintech platform. Must have 4+ years of experience with Laravel, MySQL, and REST APIs. Experience with MoMo and Flutterwave integrations is a strong advantage.',
                'location'         => 'Kigali, Rwanda (Hybrid)',
                'type'             => 'full-time',
                'experience_level' => 'senior',
                'salary_range'     => '800,000 – 1,200,000 RWF / month',
                'skills'           => json_encode(['Laravel', 'PHP', 'MySQL', 'REST API', 'Docker']),
                'company_id'       => 10,
            ],
            [
                'job_category_id'  => 2,
                'title'            => 'UI/UX Designer',
                'description'      => 'Join our product team as a UI/UX designer. You will design intuitive experiences for our mobile and web platforms. Proficiency in Figma required; experience designing for African markets preferred.',
                'location'         => 'Kigali, Rwanda (On-site)',
                'type'             => 'full-time',
                'experience_level' => 'mid',
                'salary_range'     => '500,000 – 800,000 RWF / month',
                'skills'           => json_encode(['Figma', 'UI Design', 'User Research', 'Prototyping']),
                'company_id'       => 11,
            ],
            [
                'job_category_id'  => 3,
                'title'            => 'Digital Marketing Specialist',
                'description'      => 'We seek a data-driven digital marketer to grow our user base across Rwanda and East Africa. Responsibilities include SEO, Google Ads, Meta campaigns, and influencer partnerships. Kinyarwanda content creation skills required.',
                'location'         => 'Remote (Rwanda-based)',
                'type'             => 'remote',
                'experience_level' => 'mid',
                'salary_range'     => '400,000 – 650,000 RWF / month',
                'skills'           => json_encode(['SEO', 'Google Ads', 'Meta Ads', 'Content Marketing', 'Analytics']),
                'company_id'       => 12,
            ],
            [
                'job_category_id'  => 5,
                'title'            => 'Agronomy Field Officer',
                'description'      => 'AgroRwanda is hiring a field officer to support smallholder farmers in the Eastern Province with smart farming techniques, input distribution coordination, and digital record keeping.',
                'location'         => 'Rwamagana, Eastern Province',
                'type'             => 'full-time',
                'experience_level' => 'junior',
                'salary_range'     => '300,000 – 450,000 RWF / month',
                'skills'           => json_encode(['Agronomy', 'Field Work', 'Farmer Training', 'Data Collection']),
                'company_id'       => 13,
            ],
            [
                'job_category_id'  => 6,
                'title'            => 'STEM Curriculum Developer (Contract)',
                'description'      => 'Design engaging STEM curriculum modules for secondary schools across Rwanda in partnership with the Rwanda Education Board. 6-month contract with possibility of extension.',
                'location'         => 'Kigali, Rwanda',
                'type'             => 'contract',
                'experience_level' => 'mid',
                'salary_range'     => '600,000 RWF / month',
                'skills'           => json_encode(['Curriculum Design', 'STEM Education', 'E-Learning', 'Kinyarwanda']),
                'company_id'       => 14,
            ],
        ];

        foreach ($jobs as $job) {
            DB::table('job_sections')->insert(array_merge($job, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// PRODUCT CATEGORIES & SELLERS & PRODUCTS
// ─────────────────────────────────────────────────────────────
class ProductCategoriesSeeder extends Seeder
{
    public function run(): void
    {
        $cats = [
            ['name' => 'Handmade Crafts',   'slug' => 'handmade-crafts',   'description' => 'Authentic Rwandan handmade items including baskets, pottery, and woodwork.'],
            ['name' => 'Fashion & Clothing', 'slug' => 'fashion-clothing',  'description' => 'Original designs by Rwandan fashion designers.'],
            ['name' => 'Digital Products',  'slug' => 'digital-products',   'description' => 'E-books, templates, design assets, and software tools.'],
            ['name' => 'Agricultural Goods', 'slug' => 'agricultural-goods', 'description' => 'Rwandan specialty produce: coffee, tea, honey, and dried fruits.'],
            ['name' => 'Art & Prints',      'slug' => 'art-prints',         'description' => 'Original artworks, digital prints, and Imigongo-inspired pieces.'],
        ];

        foreach ($cats as $cat) {
            DB::table('product_categories')->insert(array_merge($cat, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

class SellersSeeder extends Seeder
{
    public function run(): void
    {
        // user IDs 10–14 are regular users
        $sellers = [
            ['user_id' => 10, 'company_name' => 'Inzovu Couture',         'email' => 'inzovu@gmail.com',       'phone' => '+250 788 100 001', 'address' => 'Kimironko, Kigali',          'description' => 'Premium Rwandan fashion house blending Imigongo art with modern couture.',          'status' => 'approved'],
            ['user_id' => 11, 'company_name' => 'Kigali Tech Solutions',  'email' => 'kts@gmail.com',          'phone' => '+250 722 100 002', 'address' => 'KN 5 Ave, Kigali',           'description' => 'Digital agency offering web development, mobile apps, and UX design services.',     'status' => 'approved'],
            ['user_id' => 12, 'company_name' => 'AgroRwanda Ltd',         'email' => 'agrorwanda@gmail.com',   'phone' => '+250 733 100 003', 'address' => 'Rwamagana, Eastern Province', 'description' => 'Premium Rwandan coffee, honey, and dried fruits sourced from local cooperatives.',  'status' => 'approved'],
            ['user_id' => 13, 'company_name' => 'Ubuhanzi Arts Gallery',  'email' => 'ubuhanzi@gmail.com',     'phone' => '+250 788 100 004', 'address' => 'Nyarugenge, Kigali',         'description' => 'Contemporary Rwandan art gallery and online store featuring emerging local artists.', 'status' => 'approved'],
            ['user_id' => 14, 'company_name' => 'Rwanda Basket Weavers',  'email' => 'rwbaskets@gmail.com',    'phone' => '+250 722 100 005', 'address' => 'Musanze, Northern Province',  'description' => 'Cooperative of skilled weavers producing traditional Agaseke baskets for export.',   'status' => 'approved'],
        ];

        foreach ($sellers as $seller) {
            DB::table('sellers')->insert(array_merge($seller, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

class ProductsSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            ['seller_id' => 1, 'product_category_id' => 2, 'name' => 'Inzovu Signature Kitenge Dress',    'slug' => 'inzovu-kitenge-dress',         'description' => 'Hand-stitched kitenge dress featuring original Imigongo geometric prints. Available in S, M, L. Ships within Rwanda and to East Africa.',            'price' => 45000.00, 'stock' => 15],
            ['seller_id' => 1, 'product_category_id' => 2, 'name' => 'Men\'s Kente Blazer',               'slug' => 'mens-kente-blazer',            'description' => 'Smart blazer made from premium Rwandan-sourced kente fabric. Perfect for corporate events or semi-formal occasions.',                              'price' => 60000.00, 'stock' => 8],
            ['seller_id' => 3, 'product_category_id' => 4, 'name' => 'Rwandan Single-Origin Coffee 500g', 'slug' => 'rwandan-single-origin-coffee', 'description' => 'Sun-dried Arabica coffee from the slopes of Mount Kigali, sourced from the Dukunde Kawa cooperative in Musasa. Rich, fruity flavour profile.',      'price' => 8500.00,  'stock' => 200],
            ['seller_id' => 3, 'product_category_id' => 4, 'name' => 'Pure Rwandan Forest Honey 1kg',     'slug' => 'rwandan-forest-honey',         'description' => 'Raw, unfiltered honey harvested from the Nyungwe Forest region. Zero additives, certified organic. Ideal gift or household staple.',              'price' => 12000.00, 'stock' => 80],
            ['seller_id' => 4, 'product_category_id' => 5, 'name' => 'Imigongo Wall Art – Spiral Set',    'slug' => 'imigongo-wall-art-spiral',     'description' => 'Set of three framed Imigongo artworks featuring the iconic spiral motif. Handmade by artist Emmanuel Ndayishimiye. 30cm × 30cm each.',            'price' => 35000.00, 'stock' => 20],
            ['seller_id' => 5, 'product_category_id' => 1, 'name' => 'Agaseke Basket (Large)',            'slug' => 'agaseke-basket-large',         'description' => 'Traditional Rwandan peace basket, handwoven by the Musanze cooperative using sisal and sweetgrass. Diameter 40cm. Fair-trade certified.',          'price' => 18000.00, 'stock' => 60],
            ['seller_id' => 2, 'product_category_id' => 3, 'name' => 'Laravel Admin Dashboard Template',  'slug' => 'laravel-admin-dashboard',      'description' => 'Production-ready Laravel 11 admin dashboard with role management, charts, MoMo integration, and dark mode. Includes 6 months of support.',       'price' => 25000.00, 'stock' => 999],
            ['seller_id' => 2, 'product_category_id' => 3, 'name' => 'React Component Library (Pro)',     'slug' => 'react-component-library-pro',  'description' => 'Over 80 responsive React + Tailwind components designed for African SaaS products. Includes form builders, data tables, and payment widgets.',    'price' => 30000.00, 'stock' => 999],
        ];

        foreach ($products as $product) {
            DB::table('products')->insert(array_merge($product, [
                'image'      => null,
                'status'     => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────
class ProjectsSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'user_id'         => 10,
                'title'           => 'Mobile App for Farmer Market Linkage',
                'category'        => 'Mobile Development',
                'description'     => 'We need a React Native developer to build a mobile app connecting smallholder farmers in the Eastern Province to urban buyers in Kigali. Features include product listings, order management, push notifications, and MoMo payment integration.',
                'budget'          => '2,000,000 – 4,000,000 RWF',
                'budget_amount'   => 3000000.00,
                'budget_currency' => 'RWF',
                'location'        => 'Kigali, Rwanda (Remote)',
                'status'          => 'approved',
                'verified'        => 1,
            ],
            [
                'user_id'         => 11,
                'title'           => 'Brand Identity Design for Kigali Startup',
                'category'        => 'Design',
                'description'     => 'A fintech startup based in Kigali needs a complete brand identity: logo, colour palette, typography, business card, letterhead, and social media templates. African-inspired aesthetics preferred.',
                'budget'          => '500,000 – 1,000,000 RWF',
                'budget_amount'   => 750000.00,
                'budget_currency' => 'RWF',
                'location'        => 'Kigali, Rwanda',
                'status'          => 'approved',
                'verified'        => 1,
            ],
            [
                'user_id'         => 12,
                'title'           => 'E-Learning Platform Development (Laravel + React)',
                'category'        => 'Web Development',
                'description'     => 'Build a full e-learning platform for a Kigali-based training institution. Must include course management, video lessons, quizzes, certificate generation, MoMo payments, and a student dashboard. Bilingual (English/Kinyarwanda).',
                'budget'          => '5,000,000 – 8,000,000 RWF',
                'budget_amount'   => 6500000.00,
                'budget_currency' => 'RWF',
                'location'        => 'Remote (Rwanda)',
                'status'          => 'approved',
                'verified'        => 1,
            ],
            [
                'user_id'         => 13,
                'title'           => 'Podcast Editing & Production (Ongoing)',
                'category'        => 'Media Production',
                'description'     => 'We produce a weekly podcast on Rwandan business culture and need a skilled audio editor to clean recordings, add intros/outros, and distribute to Spotify, Apple Podcasts, and YouTube. 4 episodes per month.',
                'budget'          => '150,000 RWF / month',
                'budget_amount'   => 150000.00,
                'budget_currency' => 'RWF',
                'location'        => 'Remote',
                'status'          => 'approved',
                'verified'        => 0,
            ],
        ];

        foreach ($projects as $project) {
            DB::table('projects')->insert(array_merge($project, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// PRICING PLANS
// ─────────────────────────────────────────────────────────────
class PricingPlansSeeder extends Seeder
{
    public function run(): void
    {
        $plans = [
            [
                'name'        => 'Free',
                'subtitle'    => 'Get started at no cost',
                'description' => 'Perfect for discovering the platform and showcasing your first skill.',
                'limit_text'  => 'Up to 1 skill listing',
                'is_featured' => 0,
                'is_active'   => 1,
                'features'    => json_encode([
                    '1 skill listing',
                    'Basic profile page',
                    'Apply to 3 projects/month',
                    'Community forum access',
                ]),
            ],
            [
                'name'        => 'Starter',
                'subtitle'    => 'For growing talents',
                'description' => 'Ideal for freelancers and emerging talents who want more visibility.',
                'limit_text'  => 'Up to 5 skill listings',
                'is_featured' => 0,
                'is_active'   => 1,
                'features'    => json_encode([
                    '5 skill listings',
                    'Featured profile badge',
                    'Unlimited project applications',
                    'Course publishing (up to 2)',
                    'Priority support',
                ]),
            ],
            [
                'name'        => 'Pro',
                'subtitle'    => 'Everything you need to grow',
                'description' => 'For established talents and active sellers looking for maximum reach.',
                'limit_text'  => 'Unlimited listings',
                'is_featured' => 1,
                'is_active'   => 1,
                'features'    => json_encode([
                    'Unlimited skill listings',
                    'Verified talent badge',
                    'Unlimited course publishing',
                    'Product marketplace access',
                    'Analytics dashboard',
                    'Dedicated account manager',
                    'Featured on homepage',
                ]),
            ],
        ];

        foreach ($plans as $plan) {
            $planId = DB::table('pricing_plans')->insertGetId(array_merge($plan, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));

            // Plan prices
            DB::table('plan_prices')->insert([
                ['pricing_plan_id' => $planId, 'billing_cycle' => 'monthly',  'price' => $plan['name'] === 'Free' ? 0 : ($plan['name'] === 'Starter' ? 5000 : 15000),  'created_at' => now(), 'updated_at' => now()],
                ['pricing_plan_id' => $planId, 'billing_cycle' => 'annually', 'price' => $plan['name'] === 'Free' ? 0 : ($plan['name'] === 'Starter' ? 50000 : 150000), 'created_at' => now(), 'updated_at' => now()],
            ]);
        }
    }
}

// ─────────────────────────────────────────────────────────────
// WALLETS
// ─────────────────────────────────────────────────────────────
class WalletsSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id');

        foreach ($userIds as $userId) {
            $walletId = DB::table('wallets')->insertGetId([
                'user_id'    => $userId,
                'balance'    => 0.00,
                'currency'   => 'RWF',
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Sample transactions for talent users
            if ($userId <= 9 && $userId > 1) {
                $amount = rand(10, 60) * 1000;
                DB::table('wallet_transactions')->insert([
                    'wallet_id'      => $walletId,
                    'type'           => 'credit',
                    'amount'         => $amount,
                    'description'    => 'MoMo top-up',
                    'payment_method' => 'momo',
                    'reference'      => 'TXN-' . strtoupper(Str::random(10)),
                    'status'         => 'completed',
                    'created_at'     => now(),
                    'updated_at'     => now(),
                ]);

                DB::table('wallets')
                    ->where('id', $walletId)
                    ->update(['balance' => $amount]);
            }
        }
    }
}

// ─────────────────────────────────────────────────────────────
// STORIES (Talent Stories)
// ─────────────────────────────────────────────────────────────
class StoriesSeeder extends Seeder
{
    public function run(): void
    {
        $stories = [
            [
                'talent_id'   => 1,
                'title'       => 'How I Landed My First International Client from Kigali',
                'slug'        => 'first-international-client-kigali',
                'content'     => 'Six years ago I was building simple WordPress sites in a Kicukiro cyber café. Today I manage a distributed team of five developers serving clients in the UK and Canada — all from Kigali. This is the story of the late nights, the failed proposals, and the one email that changed everything.',
                'category_id' => 3,
                'tags'        => 'freelancing,Laravel,Kigali,tech',
                'views'       => 2400,
                'status'      => 'published',
            ],
            [
                'talent_id'   => 2,
                'title'       => 'Recording My First EP: Lessons from a Kigali Studio',
                'slug'        => 'recording-first-ep-kigali-studio',
                'content'     => 'Stepping into a recording studio for the first time is terrifying. I remember not knowing the difference between a condenser microphone and a dynamic one. Two EPs later, I understand the whole process — and I want to share what I learned to help other Rwandan artists shortcut their journey.',
                'category_id' => 1,
                'tags'        => 'music,recording,Kigali,afrofusion',
                'views'       => 1800,
                'status'      => 'published',
            ],
            [
                'talent_id'   => 4,
                'title'       => 'Imigongo on the Runway: The Story Behind Inzovu Couture',
                'slug'        => 'imigongo-on-the-runway',
                'content'     => 'When I first told my family I wanted to be a fashion designer, they thought I was joking. Rwandan traditional arts were not "a career". But I saw Imigongo patterns and thought — these belong on international runways. Today Inzovu Couture has been featured in Kigali Fashion Week twice and I was invited to Lagos for CHIC Africa 2025.',
                'category_id' => 5,
                'tags'        => 'fashion,Imigongo,Rwanda,couture',
                'views'       => 3100,
                'status'      => 'published',
            ],
        ];

        foreach ($stories as $story) {
            DB::table('stories')->insert(array_merge($story, [
                'media'      => null,
                'thumbnail'  => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// SUCCESS STORIES
// ─────────────────────────────────────────────────────────────
class SuccessStoriesSeeder extends Seeder
{
    public function run(): void
    {
        $stories = [
            [
                'title'       => 'From Rwamagana Fields to Silicon Valley Deal',
                'slug'        => 'rwamagana-fields-to-silicon-valley',
                'excerpt'     => 'Patrick\'s agritech startup AgroRwanda secured $200,000 in seed funding after being discovered by an international investor through Future Connect.',
                'content'     => 'Patrick Nkurunziza grew up watching his parents struggle to find fair prices for their harvest. After studying agronomy at the University of Rwanda, he founded AgroRwanda — a platform connecting smallholder farmers to premium buyers. Six months after listing on Future Connect, an impact investor from California reached out. "I never thought I\'d be pitching to investors in San Francisco," Patrick says. "Future Connect put me on a global stage." AgroRwanda now supports over 2,000 farmers in the Eastern Province.',
                'author_name' => 'Patrick Nkurunziza',
                'role'        => 'Founder, AgroRwanda Ltd',
            ],
            [
                'title'       => 'Diane\'s Voice Goes Regional: A Music Career Transformed',
                'slug'        => 'diane-voice-goes-regional',
                'excerpt'     => 'After listing on Future Connect, Diane received three event bookings in Nairobi and Kampala within her first month — and recorded a collaboration with a Ugandan producer.',
                'content'     => 'Diane Ingabire had been singing at Kigali weddings and corporate dinners for years — talented but invisible beyond Rwanda\'s borders. After building her profile on Future Connect and uploading her demo tracks, she was contacted by an events company in Nairobi. "That first international booking paid more than three months of local gigs," Diane recalls. She has since performed in Uganda, Tanzania, and appeared on Rwanda TV\'s live music series. Her second EP charted on Boomplay East Africa.',
                'author_name' => 'Diane Ingabire',
                'role'        => 'Afro-fusion Artist, Kigali',
            ],
            [
                'title'       => 'Clarisse Takes Rwandan Fashion to the World Stage',
                'slug'        => 'clarisse-rwandan-fashion-world-stage',
                'excerpt'     => 'Inzovu Couture won the Best African Designer Award at CHIC Africa 2025 after international buyers discovered the brand through Future Connect\'s marketplace.',
                'content'     => 'Three years ago, Clarisse Mukamana was hand-stitching dresses in a small workshop in Kimironko with no budget for marketing. She joined Future Connect to list her products and connect with buyers. Within six months, an international buyer from the Netherlands placed a bulk order for her kitenge line. That order funded her participation in CHIC Africa 2025 — where she won Best African Designer. "Future Connect didn\'t just find me customers. It changed who I believed I could be," Clarisse says.',
                'author_name' => 'Clarisse Mukamana',
                'role'        => 'Creative Director, Inzovu Couture',
            ],
        ];

        foreach ($stories as $story) {
            DB::table('success_stories')->insert(array_merge($story, [
                'thumbnail_url' => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────
class TestimonialsSeeder extends Seeder
{
    public function run(): void
    {
        $testimonials = [
            ['talent_id' => 1, 'title' => 'Exceptional Developer', 'content' => 'Jean-Pierre delivered our entire platform in 8 weeks, on budget. His knowledge of Laravel and payment integrations for the Rwandan market is unmatched.', 'rating' => 5],
            ['talent_id' => 2, 'title' => 'Unforgettable Performance', 'content' => 'Diane performed at our company gala and received a standing ovation. Professional, punctual, and incredibly talented. We will book her again.', 'rating' => 5],
            ['talent_id' => 3, 'title' => 'Outstanding Brand Designer', 'content' => 'Emmanuel understood our vision immediately and delivered a brand identity that perfectly balances Rwandan heritage with modern professionalism.', 'rating' => 5],
            ['talent_id' => 4, 'title' => 'Truly Original Fashion', 'content' => 'We ordered 20 custom kitenge dresses for our team event. Clarisse\'s craftsmanship was extraordinary and the Imigongo prints were stunning.', 'rating' => 5],
            ['talent_id' => 8, 'title' => 'Compelling Podcast Content', 'content' => 'Angélique\'s production quality rivals international podcasts. Her insights on Rwandan society are sharp, thoughtful, and essential listening.', 'rating' => 5],
        ];

        foreach ($testimonials as $t) {
            DB::table('testimonials')->insert(array_merge($t, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────
class FaqsSeeder extends Seeder
{
    public function run(): void
    {
        $faqs = [
            ['question' => 'What is Future Connect?',                      'answer' => "Future Connect is Rwanda's premier talent platform, connecting skilled individuals — from developers and designers to musicians and athletes — with opportunities, collaborators, and clients across Africa and beyond."],
            ['question' => 'How do I register as a talent?',               'answer' => 'Click "Join as Talent" on the homepage, fill in your profile details, and submit for verification. Our team reviews profiles within 48 hours. Once approved, you can start listing your skills and applying for projects.'],
            ['question' => 'How do I pay for a subscription?',             'answer' => 'We accept MTN Mobile Money (MoMo), Airtel Money, and major credit/debit cards via Flutterwave. All amounts are in Rwandan Francs (RWF). You can also top up your in-app wallet and pay from there.'],
            ['question' => 'Is my personal information safe?',             'answer' => "Yes. Future Connect complies with Rwanda's Data Protection Law (Law N° 058/2021). Your data is encrypted, never sold to third parties, and you have the right to request deletion at any time."],
            ['question' => 'Can I list products on the marketplace?',      'answer' => 'Yes. Any approved talent or business can list physical or digital products in the marketplace. You will need to apply as a seller and provide valid business details. Products are reviewed before going live.'],
            ['question' => 'How does the talent connection feature work?', 'answer' => 'Users can send a connection request to any approved talent. If the talent accepts, both parties can communicate directly. Some premium talent connections require a connection fee, which is held in escrow until the engagement is confirmed.'],
            ['question' => 'Do you offer a free plan?',                    'answer' => 'Yes. Our Free plan lets you create a profile, list one skill, and apply for up to 3 projects per month at no cost. Upgrade to Starter or Pro for more listings and features.'],
            ['question' => 'How do I get verified?',                       'answer' => 'After completing your profile, submit a national ID or passport copy and a short video introduction. Verification takes 2–3 business days. Verified talents receive a badge and appear higher in search results.'],
        ];

        foreach ($faqs as $i => $faq) {
            DB::table('faqs')->insert(array_merge($faq, [
                'is_active'  => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}

// ─────────────────────────────────────────────────────────────
// CONTACTS
// ─────────────────────────────────────────────────────────────
class ContactsSeeder extends Seeder
{
    public function run(): void
    {
        $contacts = [
            ['names' => 'Aimable Nzeyimana',    'email' => 'aimable.nzey@gmail.com',   'subject' => 'Partnership Inquiry',           'message' => 'Hello, I represent a youth NGO in Musanze and would like to discuss a partnership with Future Connect to promote local talents in the Northern Province.'],
            ['names' => 'Vestine Kayitesi',      'email' => 'vestine.kayit@gmail.com',  'subject' => 'Issue with Wallet Top-Up',      'message' => 'I initiated a MoMo payment of 10,000 RWF to top up my wallet three days ago but the balance has not reflected in my account. Transaction ID: MTN2026060123.'],
            ['names' => 'Théogène Rutaganda',    'email' => 'theo.rutag@gmail.com',     'subject' => 'Request to Feature My Business', 'message' => 'I run a social enterprise in Kigali training young women in coding. I would like to know how we can be featured as a partner on your homepage.'],
            ['names' => 'Marie-Claire Ingabire', 'email' => 'mc.ingabire@gmail.com',    'subject' => 'Course Enrollment Problem',     'message' => 'I enrolled in the Laravel course last week and paid via MoMo, but I still cannot access the lessons. Please assist.'],
        ];

        foreach ($contacts as $contact) {
            DB::table('contacts')->insert(array_merge($contact, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}
