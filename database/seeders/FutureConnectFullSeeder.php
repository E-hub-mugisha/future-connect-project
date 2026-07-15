<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * FutureConnectFullSeeder
 *
 * Full realistic seeder for the FutureConnect (futureconnect.rw) Rwandan
 * talent marketplace — "Empowering Talent, Opportunities & Growth".
 *
 * Seeds every table in the schema with FK-safe, Rwandan-flavoured sample
 * data anchored around 5 talent profiles + a handful of supporting
 * client/company/admin users.
 *
 * Run with: php artisan db:seed --class=FutureConnectFullSeeder
 */
class FutureConnectFullSeeder extends Seeder
{
    protected array $ids = [];

    public function run(): void
    {
        DB::transaction(function () {
            $this->seedCategories();
            $this->seedProductCategories();
            $this->seedJobCategories();
            $this->seedPartners();
            $this->seedFaqs();
            $this->seedSettings();

            $this->seedUsers();
            $this->seedTalents();
            $this->seedSellers();
            $this->seedWallets();
            $this->seedWalletTransactions();

            $this->seedSkills();
            $this->seedSkillReviews();
            $this->seedStories();
            $this->seedStoryComments();
            $this->seedStoryPayments();
            $this->seedTestimonials();
            $this->seedTalentFeedback();
            $this->seedTalentConnections();
            $this->seedConnectionPayments();
            $this->seedSupportTalent();

            $this->seedCourses();
            $this->seedCourseLessons();
            $this->seedCourseEnrollments();
            $this->seedCourseFeedback();
            $this->seedCoursePayments();

            $this->seedPricingPlans();
            $this->seedPlanPrices();
            $this->seedUserSubscriptions();
            $this->seedSubscriptionPayments();

            $this->seedAnnouncements();
            $this->seedAnnouncementComments();
            $this->seedBlogs();
            $this->seedContacts();
            $this->seedDemoRequests();

            $this->seedProducts();
            $this->seedProductReviews();
            $this->seedCarts();
            $this->seedOrders();
            $this->seedOrderItems();

            $this->seedProjects();
            $this->seedProjectApplications();
            $this->seedProjectSponsorships();
            $this->seedDiasporaAccounts();
            $this->seedProjectPayments();

            $this->seedQuickHires();
            $this->seedCorporateRecruitments();
            $this->seedJobSections();
            $this->seedJobSectionApplications();

            $this->seedEvents();
            $this->seedEventTickets();
            $this->seedTicketOrders();
            $this->seedTicketOrderItems();
            $this->seedTicketCodes();
            $this->seedTicketPayments();

            $this->seedSuccessStories();
            $this->seedLoginActivities();
            $this->seedRolesAndPermissions();
        });

        $this->command->info('✅ FutureConnect: full database seeded successfully across all tables.');
    }

    /* =========================================================
     | 1. Lookup / reference tables
     |==========================================================*/

    protected function seedCategories(): void
    {
        $rows = [
            ['name' => 'Software Development', 'description' => 'Web, mobile and systems engineering talent', 'featured' => 1, 'slug' => 'software-development'],
            ['name' => 'Graphic Design',        'description' => 'Branding, illustration and visual design',    'featured' => 1, 'slug' => 'graphic-design'],
            ['name' => 'Fashion & Tailoring',    'description' => 'Made-in-Rwanda fashion and textile design',  'featured' => 1, 'slug' => 'fashion-tailoring'],
            ['name' => 'Music & Performing Arts','description' => 'Musicians, producers and performers',        'featured' => 0, 'slug' => 'music-performing-arts'],
            ['name' => 'Agribusiness',           'description' => 'Agri-tech and farm value-chain expertise',   'featured' => 0, 'slug' => 'agribusiness'],
        ];

        foreach ($rows as $row) {
            $this->ids['categories'][$row['slug']] = DB::table('categories')->insertGetId(array_merge($row, [
                'created_at' => now(), 'updated_at' => now(),
            ]));
        }
    }

    protected function seedProductCategories(): void
    {
        $rows = [
            ['name' => 'Handmade Crafts', 'slug' => 'handmade-crafts', 'description' => 'Woven baskets, Imigongo art and handmade décor'],
            ['name' => 'Fashion & Apparel', 'slug' => 'fashion-apparel', 'description' => 'Kitenge wear and tailored garments'],
            ['name' => 'Digital Products', 'slug' => 'digital-products', 'description' => 'Design templates, ebooks and digital assets'],
        ];

        foreach ($rows as $row) {
            $this->ids['product_categories'][$row['slug']] = DB::table('product_categories')->insertGetId(array_merge($row, [
                'created_at' => now(), 'updated_at' => now(),
            ]));
        }
    }

    protected function seedJobCategories(): void
    {
        $rows = [
            ['name' => 'Information Technology', 'slug' => 'information-technology', 'parent_id' => null],
            ['name' => 'Creative & Design',       'slug' => 'creative-design', 'parent_id' => null],
            ['name' => 'Agriculture',             'slug' => 'agriculture', 'parent_id' => null],
        ];

        foreach ($rows as $row) {
            $this->ids['job_categories'][$row['slug']] = DB::table('job_categories')->insertGetId(array_merge($row, [
                'created_at' => now(), 'updated_at' => now(),
            ]));
        }
    }

    protected function seedPartners(): void
    {
        $rows = [
            ['name' => 'Bank of Kigali', 'description' => 'Financial services partner supporting talent payments', 'link' => 'https://www.bk.rw'],
            ['name' => 'Rwanda Development Board', 'description' => 'Strategic partner for SME and talent growth programs', 'link' => 'https://rdb.rw'],
            ['name' => 'Irembo', 'description' => 'Digital services integration partner', 'link' => 'https://irembo.gov.rw'],
        ];

        foreach ($rows as $row) {
            DB::table('partners')->insert(array_merge($row, [
                'logo' => null, 'status' => 1, 'created_at' => now(), 'updated_at' => now(),
            ]));
        }
    }

    protected function seedFaqs(): void
    {
        $rows = [
            ['question' => 'How do I hire a talent on FutureConnect?', 'answer' => 'Browse categories, view a talent profile, and send a connection request or use Quick Hire to describe your project.'],
            ['question' => 'Is FutureConnect available outside Rwanda?', 'answer' => 'Yes, diaspora clients can register a diaspora account to sponsor projects and pay talents remotely.'],
            ['question' => 'How are payments protected?', 'answer' => 'Payments are processed through secure gateways and held until milestones are confirmed by both parties.'],
        ];

        foreach ($rows as $row) {
            DB::table('faqs')->insert(array_merge($row, [
                'is_active' => 1, 'created_at' => now(), 'updated_at' => now(),
            ]));
        }
    }

    protected function seedSettings(): void
    {
        if (DB::table('settings')->count() > 0) {
            return;
        }

        DB::table('settings')->insert([
            'site_name'           => 'Future Connect',
            'default_language'    => 'en',
            'timezone'            => 'Africa/Kigali',
            'contact_email'       => 'info@futureconnect.rw',
            'contact_phone'       => '+250 788 123 456',
            'contact_address'     => 'KG 7 Ave, Kigali, Rwanda',
            'facebook_link'       => 'https://facebook.com/futureconnectrw',
            'twitter_link'        => 'https://x.com/futureconnectrw',
            'instagram_link'      => 'https://instagram.com/futureconnectrw',
            'linkedin_link'       => 'https://linkedin.com/company/futureconnectrw',
            'registration_open'   => 1,
            'enable_notifications'=> 1,
            'created_at'          => now(),
            'updated_at'          => now(),
        ]);
    }

    /* =========================================================
     | 2. Users, talents, sellers, wallets
     |==========================================================*/

    protected function seedUsers(): void
    {
        $talentUsers = [
            ['name' => 'Eric Mugisha',            'email' => 'eric.mugisha@futureconnect.rw', 'role' => 'talent'],
            ['name' => 'Aline Uwase',              'email' => 'aline.uwase@futureconnect.rw', 'role' => 'talent'],
            ['name' => 'Jean Bosco Nshimiyimana',  'email' => 'jeanbosco.nshimiyimana@futureconnect.rw', 'role' => 'talent'],
            ['name' => 'Diane Ingabire',           'email' => 'diane.ingabire@futureconnect.rw', 'role' => 'talent'],
            ['name' => 'Patrick Habimana',         'email' => 'patrick.habimana@futureconnect.rw', 'role' => 'talent'],
        ];

        $clientUsers = [
            ['name' => 'Claudine Mukamana',   'email' => 'claudine.mukamana@gmail.com', 'role' => 'user'],
            ['name' => 'Robert Byiringiro',   'email' => 'robert.byiringiro@outlook.com', 'role' => 'user'],
            ['name' => 'Bank of Kigali Digital Team', 'email' => 'digital.projects@bk.rw', 'role' => 'user'],
            ['name' => 'Inzuki Honey Ltd',    'email' => 'marketing@inzukihoney.rw', 'role' => 'user'],
            ['name' => 'Huye Farmers Cooperative', 'email' => 'coop.huye@gmail.com', 'role' => 'user'],
        ];

        $adminUsers = [
            ['name' => 'Admin FutureConnect', 'email' => 'admin@futureconnect.rw', 'role' => 'admin'],
        ];

        $this->ids['users']['talent'] = [];
        foreach ($talentUsers as $u) {
            $this->ids['users']['talent'][] = $this->insertUser($u);
        }

        $this->ids['users']['client'] = [];
        foreach ($clientUsers as $u) {
            $this->ids['users']['client'][] = $this->insertUser($u);
        }

        $this->ids['users']['admin'] = [];
        foreach ($adminUsers as $u) {
            $this->ids['users']['admin'][] = $this->insertUser($u);
        }
    }

    protected function insertUser(array $u): int
    {
        return DB::table('users')->insertGetId([
            'name'              => $u['name'],
            'email'             => $u['email'],
            'email_verified_at' => now(),
            'password'          => Hash::make('password'),
            'role'              => $u['role'],
            'active'            => 1,
            'is_verified'       => 1,
            'created_at'        => now(),
            'updated_at'        => now(),
        ]);
    }

    protected function seedTalents(): void
    {
        $u = $this->ids['users']['talent'];
        $c = $this->ids['categories'];

        $data = [
            ['name' => 'Eric Mugisha', 'user_id' => $u[0], 'category_id' => $c['software-development'],
                'description' => 'Full-stack Laravel developer building fintech and e-government platforms across Kigali.',
                'address' => 'Kicukiro, Kigali', 'language' => 'Kinyarwanda, English, French', 'level' => 'advanced', 'featured' => 1],
            ['name' => 'Aline Uwase', 'user_id' => $u[1], 'category_id' => $c['graphic-design'],
                'description' => 'Brand identity and packaging designer helping Rwandan SMEs stand out with authentic visual storytelling.',
                'address' => 'Kimironko, Gasabo, Kigali', 'language' => 'Kinyarwanda, English', 'level' => 'intermediate', 'featured' => 1],
            ['name' => 'Jean Bosco Nshimiyimana', 'user_id' => $u[2], 'category_id' => $c['fashion-tailoring'],
                'description' => 'Tailor and fashion designer blending Imigongo-inspired patterns with modern menswear.',
                'address' => 'Nyamirambo, Nyarugenge, Kigali', 'language' => 'Kinyarwanda, Swahili', 'level' => 'advanced', 'featured' => 0],
            ['name' => 'Diane Ingabire', 'user_id' => $u[3], 'category_id' => $c['music-performing-arts'],
                'description' => 'Singer-songwriter and vocal coach performing Afrobeat-Kinyatrap fusion across East Africa.',
                'address' => 'Remera, Gasabo, Kigali', 'language' => 'Kinyarwanda, English, French', 'level' => 'intermediate', 'featured' => 0],
            ['name' => 'Patrick Habimana', 'user_id' => $u[4], 'category_id' => $c['agribusiness'],
                'description' => 'Agribusiness consultant specializing in irrigation planning and post-harvest value addition for cooperatives in the Southern Province.',
                'address' => 'Huye, Southern Province', 'language' => 'Kinyarwanda, English', 'level' => 'advanced', 'featured' => 1],
        ];

        $this->ids['talents'] = [];
        foreach ($data as $t) {
            $this->ids['talents'][] = DB::table('talents')->insertGetId(array_merge($t, [
                'status' => 'approved', 'matched' => 0, 'created_at' => now(), 'updated_at' => now(),
            ]));
        }
    }

    protected function seedSellers(): void
    {
        $u = $this->ids['users']['talent'];

        $rows = [
            ['user_id' => $u[1], 'company_name' => 'Aline Design Studio', 'email' => 'aline.uwase@futureconnect.rw', 'phone' => '+250 788 222 333', 'address' => 'Kimironko, Kigali', 'description' => 'Handmade décor and branded merchandise.'],
            ['user_id' => $u[2], 'company_name' => 'Nyamirambo Tailors Co.', 'email' => 'jeanbosco.nshimiyimana@futureconnect.rw', 'phone' => '+250 788 333 444', 'address' => 'Nyamirambo, Kigali', 'description' => 'Custom tailoring and ready-to-wear fashion.'],
        ];

        $this->ids['sellers'] = [];
        foreach ($rows as $r) {
            $this->ids['sellers'][] = DB::table('sellers')->insertGetId(array_merge($r, [
                'status' => 'approved', 'created_at' => now(), 'updated_at' => now(),
            ]));
        }
    }

    protected function seedWallets(): void
    {
        $allUsers = array_merge($this->ids['users']['talent'], $this->ids['users']['client']);

        $this->ids['wallets'] = [];
        foreach ($allUsers as $userId) {
            $this->ids['wallets'][$userId] = DB::table('wallets')->insertGetId([
                'user_id' => $userId,
                'balance' => rand(0, 15) * 5000,
                'currency' => 'RWF',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    protected function seedWalletTransactions(): void
    {
        foreach (array_slice($this->ids['wallets'], 0, 5, true) as $userId => $walletId) {
            DB::table('wallet_transactions')->insert([
                'wallet_id'      => $walletId,
                'type'           => 'credit',
                'amount'         => 20000,
                'description'    => 'Payment received for completed project milestone',
                'payment_method' => 'mobile_money',
                'reference'      => 'TXN-' . strtoupper(Str::random(8)),
                'status'         => 'completed',
                'created_at'     => now(),
                'updated_at'     => now(),
            ]);
        }
    }

    /* =========================================================
     | 3. Skills, stories, testimonials, feedback, connections
     |==========================================================*/

    protected function seedSkills(): void
    {
        $t = $this->ids['talents'];
        $c = $this->ids['categories'];

        $rows = [
            ['talent_id' => $t[0], 'category_id' => $c['software-development'], 'name' => 'Laravel & PHP Backend Development', 'tags' => 'Laravel,MySQL,REST API', 'level' => 'Expert'],
            ['talent_id' => $t[0], 'category_id' => $c['software-development'], 'name' => 'Vue.js Frontend Engineering', 'tags' => 'Vue,Tailwind,JavaScript', 'level' => 'Advanced'],
            ['talent_id' => $t[1], 'category_id' => $c['graphic-design'], 'name' => 'Brand Identity Design', 'tags' => 'Logo,Branding,Adobe Illustrator', 'level' => 'Advanced'],
            ['talent_id' => $t[2], 'category_id' => $c['fashion-tailoring'], 'name' => 'Custom Suit Tailoring', 'tags' => 'Tailoring,Menswear,Pattern Cutting', 'level' => 'Expert'],
            ['talent_id' => $t[3], 'category_id' => $c['music-performing-arts'], 'name' => 'Vocal Performance & Coaching', 'tags' => 'Vocals,Songwriting,Live Performance', 'level' => 'Advanced'],
            ['talent_id' => $t[4], 'category_id' => $c['agribusiness'], 'name' => 'Irrigation & Farm Planning', 'tags' => 'Agritech,Irrigation,Cooperatives', 'level' => 'Expert'],
        ];

        $this->ids['skills'] = [];
        foreach ($rows as $r) {
            $talentName = DB::table('talents')->where('id', $r['talent_id'])->value('name');
            $this->ids['skills'][] = DB::table('skills')->insertGetId([
                'name'        => $r['name'],
                'slug'        => Str::slug($r['name']) . '-' . Str::random(4),
                'description' => 'Professional service offered on FutureConnect by ' . $talentName . '.',
                'image'       => null,
                'talent_id'   => $r['talent_id'],
                'category_id' => $r['category_id'],
                'tags'        => $r['tags'],
                'status'      => 'published',
                'level'       => $r['level'],
                'created_at'  => now(),
                'updated_at'  => now(),
            ]);
        }
    }

    protected function seedSkillReviews(): void
    {
        $reviewers = [
            ['name' => 'Claudine Mukamana', 'email' => 'claudine.mukamana@gmail.com', 'rating' => 5, 'message' => 'Delivered our platform ahead of schedule and explained every decision clearly.'],
            ['name' => 'Robert Byiringiro', 'email' => 'robert.byiringiro@outlook.com', 'rating' => 4, 'message' => 'Solid work on our logo and brand guide, just needed a couple of revision rounds.'],
            ['name' => 'Sandrine Umutoni', 'email' => 'sandrine.umutoni@gmail.com', 'rating' => 5, 'message' => 'The suit fit perfectly for my wedding. True craftsmanship from Nyamirambo.'],
            ['name' => 'Emmanuel Twagirayezu', 'email' => 'e.twagirayezu@yahoo.com', 'rating' => 5, 'message' => 'Great vocal coaching sessions, my range has improved so much in two months.'],
            ['name' => 'Grace Nyirahabimana', 'email' => 'grace.nyira@gmail.com', 'rating' => 4, 'message' => 'Helped our cooperative in Huye redesign our irrigation schedule and cut water waste.'],
            ['name' => 'Innocent Habyarimana', 'email' => 'innocent.h@gmail.com', 'rating' => 5, 'message' => 'Very responsive and delivered clean, documented code.'],
        ];

        foreach ($this->ids['skills'] as $i => $skillId) {
            $r = $reviewers[$i % count($reviewers)];
            DB::table('skill_reviews')->insert(array_merge($r, [
                'skill_id' => $skillId, 'created_at' => now(), 'updated_at' => now(),
            ]));
        }
    }

    protected function seedStories(): void
    {
        $t = $this->ids['talents'];
        $c = $this->ids['categories'];

        $rows = [
            ['talent_id' => $t[0], 'title' => "From Kicukiro Cyber Cafe to Building Rwanda's E-Government Systems",
                'content' => 'Eric started freelancing on small Laravel projects before landing contracts on national verification systems.',
                'category_id' => $c['software-development'], 'tags' => 'Laravel,Career Growth,Kigali'],
            ['talent_id' => $t[1], 'title' => 'Designing Brands That Feel Rwandan',
                'content' => 'Aline shares how she blends Kitenge patterns and Kigali street culture into modern branding for local startups.',
                'category_id' => $c['graphic-design'], 'tags' => 'Branding,Design,SMEs'],
            ['talent_id' => $t[2], 'title' => 'Reviving Nyamirambo Tailoring for a New Generation',
                'content' => 'Jean Bosco explains how he modernized his family tailoring shop while keeping Imigongo-inspired detailing alive.',
                'category_id' => $c['fashion-tailoring'], 'tags' => 'Fashion,Tailoring,Heritage'],
        ];

        $this->ids['stories'] = [];
        foreach ($rows as $s) {
            $this->ids['stories'][] = DB::table('stories')->insertGetId([
                'talent_id'   => $s['talent_id'],
                'title'       => $s['title'],
                'content'     => $s['content'],
                'media'       => null,
                'thumbnail'   => null,
                'slug'        => Str::slug($s['title']) . '-' . Str::random(4),
                'category_id' => $s['category_id'],
                'tags'        => $s['tags'],
                'views'       => rand(120, 980),
                'status'      => 'published',
                'created_at'  => now(),
                'updated_at'  => now(),
            ]);
        }
    }

    protected function seedStoryComments(): void
    {
        $commenters = [
            ['name' => 'Vestine Mukashyaka', 'email' => 'vestine.m@gmail.com', 'comment' => 'Such an inspiring journey, proud to see Rwandan talent shine!', 'rating' => 5],
            ['name' => 'Olivier Ndayisenga', 'email' => 'olivier.nd@gmail.com', 'comment' => 'This motivated me to keep pushing my own design career forward.', 'rating' => 4],
        ];

        foreach ($this->ids['stories'] as $i => $storyId) {
            $c = $commenters[$i % count($commenters)];
            DB::table('story_comments')->insert(array_merge($c, [
                'story_id' => $storyId, 'created_at' => now(), 'updated_at' => now(),
            ]));
        }
    }

    protected function seedStoryPayments(): void
    {
        $storyId = $this->ids['stories'][0];
        DB::table('story_payments')->insert([
            'story_id'   => $storyId,
            'tx_ref'     => 'STORY-' . strtoupper(Str::random(8)),
            'flw_ref'    => 'FLW-' . strtoupper(Str::random(8)),
            'status'     => 'successful',
            'amount'     => 5000,
            'currency'   => 'RWF',
            'email'      => 'claudine.mukamana@gmail.com',
            'video_id'   => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    protected function seedTestimonials(): void
    {
        $t = $this->ids['talents'];

        $rows = [
            ['talent_id' => $t[0], 'title' => 'Reliable and highly skilled', 'content' => 'Eric rebuilt our admin panel in weeks, not months. Communication was excellent throughout.', 'rating' => 5],
            ['talent_id' => $t[1], 'title' => 'Our brand finally feels right', 'content' => 'Aline understood our vision for a Kigali-rooted brand better than any agency we tried before.', 'rating' => 5],
            ['talent_id' => $t[4], 'title' => 'Transformed our harvest yields', 'content' => "Patrick's irrigation plan increased our cooperative's output by nearly a third this season.", 'rating' => 5],
        ];

        foreach ($rows as $r) {
            DB::table('testimonials')->insert(array_merge($r, ['created_at' => now(), 'updated_at' => now()]));
        }
    }

    protected function seedTalentFeedback(): void
    {
        $t = $this->ids['talents'];

        $rows = [
            ['talent_id' => $t[0], 'name' => 'Innocent Habyarimana', 'email' => 'innocent.h@gmail.com', 'rating' => 5, 'comment' => 'Very professional, delivered clean and documented code.'],
            ['talent_id' => $t[2], 'name' => 'Vestine Mukashyaka', 'email' => 'vestine.m@gmail.com', 'rating' => 4, 'comment' => 'Great tailoring but delivery took a few extra days.'],
            ['talent_id' => $t[3], 'name' => 'Olivier Ndayisenga', 'email' => 'olivier.nd@gmail.com', 'rating' => 5, 'comment' => 'Diane performed beautifully at our company event in Remera.'],
        ];

        foreach ($rows as $r) {
            DB::table('talent_feedback')->insert(array_merge($r, ['created_at' => now(), 'updated_at' => now()]));
        }
    }

    protected function seedTalentConnections(): void
    {
        $t = $this->ids['talents'];

        $rows = [
            ['talent_id' => $t[0], 'name' => 'Bank of Kigali Digital Team', 'email' => 'digital.projects@bk.rw', 'status' => 'accepted', 'message' => 'We would like to discuss a Laravel API integration for our SME lending product.'],
            ['talent_id' => $t[1], 'name' => 'Inzuki Honey Ltd', 'email' => 'marketing@inzukihoney.rw', 'status' => 'pending', 'message' => 'Looking for a full rebrand ahead of our export launch to the EAC market.'],
            ['talent_id' => $t[4], 'name' => 'Huye Farmers Cooperative', 'email' => 'coop.huye@gmail.com', 'status' => 'accepted', 'message' => 'We need help redesigning our drip irrigation layout for the next planting season.'],
        ];

        $this->ids['talent_connections'] = [];
        foreach ($rows as $r) {
            $this->ids['talent_connections'][] = DB::table('talent_connections')->insertGetId(array_merge($r, [
                'response'   => $r['status'] === 'accepted' ? 'Thank you for reaching out — happy to schedule a call this week.' : null,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }

    protected function seedConnectionPayments(): void
    {
        $u = $this->ids['users']['client'];

        DB::table('connection_payments')->insert([
            'connection_id'  => $this->ids['talent_connections'][0],
            'user_id'        => $u[2],
            'amount'         => 10000,
            'currency'       => 'RWF',
            'payment_method' => 'mobile_money',
            'transaction_id' => 'TXN-' . strtoupper(Str::random(8)),
            'status'         => 'success',
            'tx_ref'         => 'CONN-' . strtoupper(Str::random(8)),
            'flw_ref'        => 'FLW-' . strtoupper(Str::random(8)),
            'created_at'     => now(),
            'updated_at'     => now(),
        ]);
    }

    protected function seedSupportTalent(): void
    {
        $t = $this->ids['talents'];

        $rows = [
            ['talent_id' => $t[3], 'name' => 'Emmanuel Twagirayezu', 'email' => 'e.twagirayezu@yahoo.com', 'amount' => 5000, 'message' => 'Keep making great music, Diane!'],
            ['talent_id' => $t[0], 'name' => 'Sandrine Umutoni', 'email' => 'sandrine.umutoni@gmail.com', 'amount' => 10000, 'message' => 'Supporting local tech talent, proud of your work.'],
        ];

        foreach ($rows as $r) {
            DB::table('support_talent')->insert(array_merge($r, ['created_at' => now(), 'updated_at' => now()]));
        }
    }

    /* =========================================================
     | 4. Courses
     |==========================================================*/

    protected function seedCourses(): void
    {
        $t = $this->ids['talents'];
        $c = $this->ids['categories'];

        $rows = [
            ['talent_id' => $t[0], 'title' => 'Laravel for Rwandan Startups: Build Your First MVP', 'category_id' => $c['software-development'], 'is_free' => 0, 'price' => 25000, 'level' => 'Intermediate'],
            ['talent_id' => $t[1], 'title' => 'Brand Design Fundamentals for African Small Businesses', 'category_id' => $c['graphic-design'], 'is_free' => 1, 'price' => null, 'level' => 'Beginner'],
            ['talent_id' => $t[4], 'title' => 'Smart Irrigation Techniques for Cooperative Farms', 'category_id' => $c['agribusiness'], 'is_free' => 0, 'price' => 15000, 'level' => 'Intermediate'],
        ];

        $this->ids['courses'] = [];
        foreach ($rows as $r) {
            $this->ids['courses'][] = DB::table('courses')->insertGetId([
                'talent_id'   => $r['talent_id'],
                'title'       => $r['title'],
                'slug'        => Str::slug($r['title']) . '-' . Str::random(4),
                'description' => 'A practical course by a verified FutureConnect talent, taught with real Rwandan case studies.',
                'category_id' => $r['category_id'],
                'is_free'     => $r['is_free'],
                'price'       => $r['price'],
                'level'       => $r['level'],
                'thumbnail'   => null,
                'video'       => null,
                'status'      => 'published',
                'created_at'  => now(),
                'updated_at'  => now(),
            ]);
        }
    }

    protected function seedCourseLessons(): void
    {
        $courseId = $this->ids['courses'][0];

        $lessons = [
            'Setting Up Your Laravel Development Environment',
            'Building Your First MVC Feature',
            'Connecting to MySQL and Seeding Data',
            'Deploying Your MVP to Production',
        ];

        foreach ($lessons as $order => $title) {
            DB::table('course_lessons')->insert([
                'course_id'  => $courseId,
                'title'      => $title,
                'content'    => 'Step-by-step walkthrough with code samples and a real Rwandan startup case study.',
                'video_url'  => null,
                'order'      => $order + 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    protected function seedCourseEnrollments(): void
    {
        $u = $this->ids['users']['client'];

        foreach ($this->ids['courses'] as $i => $courseId) {
            DB::table('course_enrollments')->insert([
                'course_id'  => $courseId,
                'user_id'    => $u[$i % count($u)],
                'progress'   => rand(10, 100),
                'status'     => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    protected function seedCourseFeedback(): void
    {
        $u = $this->ids['users']['client'];

        DB::table('course_feedback')->insert([
            'course_id'  => $this->ids['courses'][0],
            'user_id'    => $u[0],
            'rating'     => 5,
            'comment'    => 'Clear, practical, and directly applicable to my own startup idea.',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    protected function seedCoursePayments(): void
    {
        $u = $this->ids['users']['client'];

        DB::table('course_payments')->insert([
            'user_id'    => $u[0],
            'course_id'  => $this->ids['courses'][0],
            'tx_ref'     => 'CRS-' . strtoupper(Str::random(8)),
            'amount'     => 25000,
            'currency'   => 'RWF',
            'status'     => 'completed',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /* =========================================================
     | 5. Pricing plans & subscriptions
     |==========================================================*/

    protected function seedPricingPlans(): void
    {
        $rows = [
            ['name' => 'Starter', 'subtitle' => 'For individual talents getting started', 'limit_text' => 'Up to 3 active skills', 'is_featured' => 0,
                'features' => json_encode(['1 active gig category', 'Basic profile badge', 'Email support'])],
            ['name' => 'Professional', 'subtitle' => 'For growing talents and freelancers', 'limit_text' => 'Unlimited skills', 'is_featured' => 1,
                'features' => json_encode(['Unlimited skill listings', 'Featured profile placement', 'Priority support', 'Access to Quick Hire leads'])],
            ['name' => 'Business', 'subtitle' => 'For companies hiring at scale', 'limit_text' => 'Unlimited job postings', 'is_featured' => 0,
                'features' => json_encode(['Unlimited job postings', 'Dedicated account manager', 'Corporate recruitment tools'])],
        ];

        $this->ids['pricing_plans'] = [];
        foreach ($rows as $r) {
            $this->ids['pricing_plans'][] = DB::table('pricing_plans')->insertGetId([
                'name'         => $r['name'],
                'description'  => $r['name'] . ' plan on FutureConnect',
                'subtitle'     => $r['subtitle'],
                'limit_text'   => $r['limit_text'],
                'is_featured'  => $r['is_featured'],
                'features'     => $r['features'],
                'is_active'    => 1,
                'created_at'   => now(),
                'updated_at'   => now(),
            ]);
        }
    }

    protected function seedPlanPrices(): void
    {
        $prices = [5000, 15000, 40000];

        foreach ($this->ids['pricing_plans'] as $i => $planId) {
            DB::table('plan_prices')->insert([
                'pricing_plan_id' => $planId,
                'billing_cycle'   => 'monthly',
                'price'           => $prices[$i],
                'created_at'      => now(),
                'updated_at'      => now(),
            ]);
            DB::table('plan_prices')->insert([
                'pricing_plan_id' => $planId,
                'billing_cycle'   => 'annually',
                'price'           => $prices[$i] * 10,
                'created_at'      => now(),
                'updated_at'      => now(),
            ]);
        }
    }

    protected function seedUserSubscriptions(): void
    {
        $u = $this->ids['users']['talent'];
        $planId = $this->ids['pricing_plans'][1];

        $this->ids['user_subscriptions'] = [];
        foreach (array_slice($u, 0, 2) as $userId) {
            $this->ids['user_subscriptions'][] = DB::table('user_subscriptions')->insertGetId([
                'user_id'         => $userId,
                'pricing_plan_id' => $planId,
                'billing_cycle'   => 'monthly',
                'price'           => 15000,
                'starts_at'       => now()->toDateString(),
                'ends_at'         => now()->addMonth()->toDateString(),
                'status'          => 'active',
                'auto_renew'      => 1,
                'is_trial'        => 0,
                'created_at'      => now(),
                'updated_at'      => now(),
            ]);
        }
    }

    protected function seedSubscriptionPayments(): void
    {
        $u = $this->ids['users']['talent'];

        foreach ($this->ids['user_subscriptions'] as $i => $subId) {
            DB::table('subscription_payments')->insert([
                'user_id'              => $u[$i],
                'user_subscription_id' => $subId,
                'amount'               => 15000,
                'currency'             => 'RWF',
                'gateway'              => 'flutterwave',
                'tx_ref'               => 'SUB-' . strtoupper(Str::random(8)),
                'status'               => 'success',
                'created_at'           => now(),
                'updated_at'           => now(),
            ]);
        }
    }

    /* =========================================================
     | 6. Content: announcements, blogs, contacts, demo requests
     |==========================================================*/

    protected function seedAnnouncements(): void
    {
        $admin = $this->ids['users']['admin'][0];
        $c = $this->ids['categories']['software-development'];

        DB::table('announcements')->insert([
            'title'       => 'FutureConnect Launches Quick Hire for Instant Project Matching',
            'content'     => 'Clients can now post a project brief and get matched with verified Rwandan talent within 24 hours.',
            'image'       => null,
            'link'        => null,
            'is_active'   => 1,
            'created_by'  => $admin,
            'category_id' => $c,
            'created_at'  => now(),
            'updated_at'  => now(),
        ]);
    }

    protected function seedAnnouncementComments(): void
    {
        $announcementId = DB::table('announcements')->first()->id;

        DB::table('announcement_comments')->insert([
            'announcement_id' => $announcementId,
            'name'             => 'Robert Byiringiro',
            'email'            => 'robert.byiringiro@outlook.com',
            'content'          => 'This is exactly what our team needed for our upcoming project!',
            'created_at'       => now(),
            'updated_at'       => now(),
        ]);
    }

    protected function seedBlogs(): void
    {
        $author = $this->ids['users']['admin'][0];
        $c = $this->ids['categories']['software-development'];

        DB::table('blogs')->insert([
            'title'        => 'Why Rwandan Freelancers Are Winning International Contracts',
            'slug'         => 'why-rwandan-freelancers-are-winning-international-contracts-' . Str::random(4),
            'content'      => 'A look at how Kigali-based developers, designers and consultants are competing globally through platforms like FutureConnect.',
            'image'        => null,
            'author_id'    => $author,
            'category_id'  => $c,
            'views'        => 340,
            'is_published' => 1,
            'created_at'   => now(),
            'updated_at'   => now(),
        ]);
    }

    protected function seedContacts(): void
    {
        DB::table('contacts')->insert([
            'names'      => 'Vestine Mukashyaka',
            'email'      => 'vestine.m@gmail.com',
            'subject'    => 'Partnership inquiry',
            'message'    => 'We would like to explore a partnership between our cooperative and FutureConnect talents.',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    protected function seedDemoRequests(): void
    {
        DB::table('demo_requests')->insert([
            'full_name'      => 'Olivier Ndayisenga',
            'work_email'     => 'olivier.nd@kigaliworks.rw',
            'phone'          => '+250 788 555 666',
            'company_name'   => 'Kigali Works Ltd',
            'company_size'   => '11-50',
            'role'           => 'Operations Manager',
            'preferred_date' => now()->addDays(5)->toDateString(),
            'preferred_time' => '10:00 AM',
            'message'        => 'Interested in a demo of the corporate recruitment tools.',
            'status'         => 'pending',
            'created_at'     => now(),
            'updated_at'     => now(),
        ]);
    }

    /* =========================================================
     | 7. Marketplace: products, orders, carts
     |==========================================================*/

    protected function seedProducts(): void
    {
        $s = $this->ids['sellers'];
        $pc = $this->ids['product_categories'];

        $rows = [
            ['seller_id' => $s[0], 'product_category_id' => $pc['digital-products'], 'name' => 'Rwandan Brand Identity Template Pack', 'price' => 12000],
            ['seller_id' => $s[1], 'product_category_id' => $pc['fashion-apparel'], 'name' => 'Handmade Imigongo-Pattern Blazer', 'price' => 65000],
        ];

        $this->ids['products'] = [];
        foreach ($rows as $r) {
            $this->ids['products'][] = DB::table('products')->insertGetId([
                'seller_id'            => $r['seller_id'],
                'name'                 => $r['name'],
                'slug'                 => Str::slug($r['name']) . '-' . Str::random(4),
                'product_category_id'  => $r['product_category_id'],
                'description'          => 'Authentic Rwandan-made product available through FutureConnect marketplace.',
                'price'                => $r['price'],
                'stock'                => rand(5, 30),
                'image'                => null,
                'status'               => 'active',
                'created_at'           => now(),
                'updated_at'           => now(),
            ]);
        }
    }

    protected function seedProductReviews(): void
    {
        DB::table('product_reviews')->insert([
            'product_id' => $this->ids['products'][0],
            'name'       => 'Claudine Mukamana',
            'email'      => 'claudine.mukamana@gmail.com',
            'rating'     => 5,
            'comment'    => 'High quality templates, saved us weeks of design work.',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    protected function seedCarts(): void
    {
        $u = $this->ids['users']['client'];

        DB::table('carts')->insert([
            'user_id'    => $u[0],
            'product_id' => $this->ids['products'][1],
            'quantity'   => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    protected function seedOrders(): void
    {
        $u = $this->ids['users']['client'];

        $this->ids['orders'] = [];
        $this->ids['orders'][] = DB::table('orders')->insertGetId([
            'user_id'          => $u[0],
            'total'             => 12000,
            'status'            => 'completed',
            'payment_method'    => 'mobile_money',
            'payment_status'    => 'paid',
            'transaction_ref'   => 'ORD-' . strtoupper(Str::random(8)),
            'currency'          => 'RWF',
            'shipping_address'  => 'KG 11 Ave, Kigali',
            'created_at'        => now(),
            'updated_at'        => now(),
        ]);
    }

    protected function seedOrderItems(): void
    {
        DB::table('order_items')->insert([
            'order_id'   => $this->ids['orders'][0],
            'product_id' => $this->ids['products'][0],
            'quantity'   => 1,
            'price'      => 12000,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /* =========================================================
     | 8. Projects, sponsorships, diaspora accounts
     |==========================================================*/

    protected function seedProjects(): void
    {
        $u = $this->ids['users']['client'];

        $this->ids['projects'] = [];
        $this->ids['projects'][] = DB::table('projects')->insertGetId([
            'user_id'         => $u[4],
            'title'           => 'Solar-Powered Drip Irrigation for Huye Cooperative',
            'category'        => 'Agribusiness',
            'description'     => 'Installing a solar-powered drip irrigation system to serve 40 smallholder farmers in Huye district.',
            'budget'          => '3,000,000 - 5,000,000 RWF',
            'budget_amount'   => 4000000,
            'budget_currency' => 'RWF',
            'location'        => 'Huye, Southern Province',
            'status'          => 'approved',
            'verified'        => 1,
            'created_at'      => now(),
            'updated_at'      => now(),
        ]);
    }

    protected function seedProjectApplications(): void
    {
        DB::table('project_applications')->insert([
            'project_id'    => $this->ids['projects'][0],
            'name'          => 'Patrick Habimana',
            'email'         => 'patrick.habimana@futureconnect.rw',
            'message'       => 'I have designed similar irrigation systems for cooperatives in the Southern Province and would love to lead this.',
            'portfolio_url' => 'https://futureconnect.rw/talents/patrick-habimana',
            'status'        => 'accepted',
            'created_at'    => now(),
            'updated_at'    => now(),
        ]);
    }

    protected function seedProjectSponsorships(): void
    {
        $this->ids['project_sponsorships'] = [];
        $this->ids['project_sponsorships'][] = DB::table('project_sponsorships')->insertGetId([
            'project_id' => $this->ids['projects'][0],
            'name'       => 'Jean-Paul Nkurunziza',
            'email'      => 'jp.nkurunziza@diaspora-rw.org',
            'amount'     => 2500,
            'currency'   => 'USD',
            'status'     => 'paid',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    protected function seedDiasporaAccounts(): void
    {
        $u = $this->ids['users']['client'][0];

        $this->ids['diaspora_accounts'] = [];
        $this->ids['diaspora_accounts'][] = DB::table('diaspora_accounts')->insertGetId([
            'first_name'              => 'Jean-Paul',
            'last_name'               => 'Nkurunziza',
            'display_name'            => 'Jean-Paul Nkurunziza',
            'email'                   => 'jp.nkurunziza@diaspora-rw.org',
            'phone'                   => '+1 617 555 0192',
            'country'                 => 'United States',
            'city'                    => 'Boston',
            'passport_number'         => null,
            'occupation'              => 'Software Engineer',
            'bio'                     => 'Rwandan diaspora member supporting agribusiness and education projects back home.',
            'purpose'                 => 'sponsor',
            'preferred_currency'      => 'USD',
            'sponsorship_preferences' => json_encode(['Agribusiness', 'Education']),
            'links'                   => json_encode(['linkedin' => 'https://linkedin.com/in/jpnkurunziza']),
            'preferred_contact'       => 'email',
            'newsletter_opt_in'       => 1,
            'password'                => Hash::make('password'),
            'verification_status'     => 'verified',
            'verified_at'             => now(),
            'user_id'                 => $u,
            'created_at'              => now(),
            'updated_at'              => now(),
        ]);
    }

    protected function seedProjectPayments(): void
    {
        DB::table('project_payments')->insert([
            'project_sponsorship_id' => $this->ids['project_sponsorships'][0],
            'diaspora_account_id'    => $this->ids['diaspora_accounts'][0],
            'amount'                 => 2500,
            'currency'               => 'USD',
            'payment_gateway'        => 'flutterwave',
            'transaction_id'         => 'TXN-' . strtoupper(Str::random(8)),
            'status'                 => 'successful',
            'created_at'             => now(),
            'updated_at'             => now(),
        ]);
    }

    /* =========================================================
     | 9. Quick hire, corporate recruitment, jobs
     |==========================================================*/

    protected function seedQuickHires(): void
    {
        $u = $this->ids['users']['client'];
        $c = $this->ids['categories'];
        $t = $this->ids['talents'];

        DB::table('quick_hires')->insert([
            'user_id'          => $u[1],
            'category_id'      => $c['graphic-design'],
            'talent_id'        => $t[1],
            'title'            => 'Rebrand for Honey Export Packaging',
            'description'      => 'Need a full rebrand including logo, packaging and social media kit ahead of our EAC export launch.',
            'budget_type'      => 'fixed',
            'budget_min'       => 200000,
            'budget_max'       => 400000,
            'timeline'         => '2 weeks',
            'experience_level' => 'intermediate',
            'skills'           => json_encode(['Branding', 'Packaging Design', 'Adobe Illustrator']),
            'client_name'      => 'Inzuki Honey Ltd',
            'client_email'     => 'marketing@inzukihoney.rw',
            'client_phone'     => '+250 788 444 555',
            'company_name'     => 'Inzuki Honey Ltd',
            'status'           => 'matched',
            'created_at'       => now(),
            'updated_at'       => now(),
        ]);
    }

    protected function seedCorporateRecruitments(): void
    {
        DB::table('corporate_recruitments')->insert([
            'company_id'  => 1,
            'title'       => 'Backend Developer for Digital Lending Platform',
            'description' => 'Seeking a Laravel developer to join our digital lending product team on a 6-month contract.',
            'skills'      => json_encode(['Laravel', 'MySQL', 'REST API']),
            'category'    => 'Information Technology',
            'region'      => 'Kigali',
            'fee'         => 150000,
            'status'      => 'active',
            'created_at'  => now(),
            'updated_at'  => now(),
        ]);
    }

    protected function seedJobSections(): void
    {
        $company = $this->ids['users']['client'][2];
        $jc = $this->ids['job_categories']['information-technology'];

        $this->ids['job_sections'] = [];
        $this->ids['job_sections'][] = DB::table('job_sections')->insertGetId([
            'job_category_id'  => $jc,
            'title'            => 'Senior Laravel Developer',
            'description'      => 'Lead backend development for our digital banking products, mentoring a small team of junior developers.',
            'location'         => 'Kigali, Rwanda',
            'type'             => 'full-time',
            'experience_level' => 'senior',
            'salary_range'     => '1,200,000 - 1,800,000 RWF/month',
            'skills'           => json_encode(['Laravel', 'MySQL', 'AWS', 'Team Leadership']),
            'company_id'       => $company,
            'created_at'       => now(),
            'updated_at'       => now(),
        ]);
    }

    protected function seedJobSectionApplications(): void
    {
        DB::table('job_section_applications')->insert([
            'job_section_id' => $this->ids['job_sections'][0],
            'name'           => 'Eric Mugisha',
            'email'          => 'eric.mugisha@futureconnect.rw',
            'cover_letter'   => 'I have three years of experience building Laravel platforms for fintech and e-government clients in Rwanda.',
            'resume'         => null,
            'status'         => 'reviewed',
            'created_at'     => now(),
            'updated_at'     => now(),
        ]);
    }

    /* =========================================================
     | 10. Events & ticketing
     |==========================================================*/

    protected function seedEvents(): void
    {
        $organizer = $this->ids['users']['admin'][0];

        $this->ids['events'] = [];
        $this->ids['events'][] = DB::table('events')->insertGetId([
            'title'        => 'FutureConnect Talent Summit Kigali 2026',
            'organizer_id' => $organizer,
            'description'  => 'A gathering of Rwanda\'s top freelancers, designers and entrepreneurs to network and showcase their work.',
            'venue'        => 'Kigali Convention Centre',
            'event_date'   => now()->addMonth()->toDateString() . ' 09:00:00',
            'type'         => 'hybrid',
            'start_time'   => now()->addMonth()->setTime(9, 0),
            'end_time'     => now()->addMonth()->setTime(17, 0),
            'capacity'     => 500,
            'image'        => null,
            'created_at'   => now(),
            'updated_at'   => now(),
        ]);
    }

    protected function seedEventTickets(): void
    {
        $this->ids['event_tickets'] = [];

        $rows = [
            ['type' => 'Standard', 'price' => 10000, 'quantity' => 300],
            ['type' => 'VIP', 'price' => 30000, 'quantity' => 50],
        ];

        foreach ($rows as $r) {
            $this->ids['event_tickets'][] = DB::table('event_tickets')->insertGetId([
                'event_id'   => $this->ids['events'][0],
                'type'       => $r['type'],
                'price'      => $r['price'],
                'quantity'   => $r['quantity'],
                'sold'       => rand(10, 60),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    protected function seedTicketOrders(): void
    {
        $u = $this->ids['users']['client'][0];

        $this->ids['ticket_orders'] = [];
        $this->ids['ticket_orders'][] = DB::table('ticket_orders')->insertGetId([
            'user_id'         => $u,
            'customer_name'   => 'Claudine Mukamana',
            'customer_email'  => 'claudine.mukamana@gmail.com',
            'customer_phone'  => '+250 788 111 222',
            'total_amount'    => 10000,
            'transaction_id'  => 'TIX-' . strtoupper(Str::random(8)),
            'payment_status'  => 'paid',
            'created_at'      => now(),
            'updated_at'      => now(),
        ]);
    }

    protected function seedTicketOrderItems(): void
    {
        $this->ids['ticket_order_items'] = [];
        $this->ids['ticket_order_items'][] = DB::table('ticket_order_items')->insertGetId([
            'ticket_order_id' => $this->ids['ticket_orders'][0],
            'ticket_id'       => $this->ids['event_tickets'][0],
            'attendee_name'   => 'Claudine Mukamana',
            'quantity'        => 1,
            'price'           => 10000,
            'created_at'      => now(),
            'updated_at'      => now(),
        ]);
    }

    protected function seedTicketCodes(): void
    {
        DB::table('ticket_codes')->insert([
            'order_item_id' => $this->ids['ticket_order_items'][0],
            'code'          => 'FCTS26-' . strtoupper(Str::random(6)),
            'used'          => 0,
            'created_at'    => now(),
            'updated_at'    => now(),
        ]);
    }

    protected function seedTicketPayments(): void
    {
        DB::table('ticket_payments')->insert([
            'order_id'           => $this->ids['ticket_orders'][0],
            'transaction_id'     => 'TIX-' . strtoupper(Str::random(8)),
            'status'             => 'paid',
            'amount'             => 10000,
            'currency'           => 'RWF',
            'payment_method'     => 'mobile_money',
            'processor_response' => 'Approved',
            'meta'               => json_encode(['channel' => 'MTN MoMo']),
            'created_at'         => now(),
            'updated_at'         => now(),
        ]);
    }

    /* =========================================================
     | 11. Success stories, login activity, roles
     |==========================================================*/

    protected function seedSuccessStories(): void
    {
        DB::table('success_stories')->insert([
            'title'         => 'How a Kigali Tailor Grew a Nyamirambo Workshop into a Nationwide Brand',
            'slug'          => 'kigali-tailor-nyamirambo-workshop-nationwide-brand-' . Str::random(4),
            'thumbnail_url' => null,
            'excerpt'       => 'Jean Bosco used FutureConnect to reach clients beyond Nyamirambo and grow a small tailoring shop into a recognized fashion brand.',
            'content'       => 'What started as a single sewing machine in Nyamirambo has grown into a workshop employing five apprentices, thanks in part to consistent bookings through FutureConnect.',
            'author_name'   => 'Jean Bosco Nshimiyimana',
            'role'          => 'Fashion Designer & Tailor',
            'created_at'    => now(),
            'updated_at'    => now(),
        ]);
    }

    protected function seedLoginActivities(): void
    {
        foreach ($this->ids['users']['talent'] as $userId) {
            DB::table('login_activities')->insert([
                'user_id'      => $userId,
                'ip_address'   => '41.186.' . rand(0, 255) . '.' . rand(0, 255),
                'user_agent'   => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'logged_in_at' => now(),
                'created_at'   => now(),
                'updated_at'   => now(),
            ]);
        }
    }

    protected function seedRolesAndPermissions(): void
    {
        // Minimal Spatie permission scaffolding, safe to skip if already seeded elsewhere.
        if (DB::table('roles')->count() > 0) {
            return;
        }

        $roleIds = [];
        foreach (['admin', 'talent', 'user'] as $roleName) {
            $roleIds[$roleName] = DB::table('roles')->insertGetId([
                'name'       => $roleName,
                'guard_name' => 'web',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        foreach ($this->ids['users']['admin'] as $userId) {
            DB::table('model_has_roles')->insert([
                'role_id'    => $roleIds['admin'],
                'model_type' => 'App\\Models\\User',
                'model_id'   => $userId,
            ]);
        }

        foreach ($this->ids['users']['talent'] as $userId) {
            DB::table('model_has_roles')->insert([
                'role_id'    => $roleIds['talent'],
                'model_type' => 'App\\Models\\User',
                'model_id'   => $userId,
            ]);
        }

        foreach ($this->ids['users']['client'] as $userId) {
            DB::table('model_has_roles')->insert([
                'role_id'    => $roleIds['user'],
                'model_type' => 'App\\Models\\User',
                'model_id'   => $userId,
            ]);
        }
    }
}