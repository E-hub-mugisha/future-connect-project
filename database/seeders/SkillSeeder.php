<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Skill;
use App\Models\Talent;
use App\Models\Category;
use Illuminate\Support\Str;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $talentIds = \App\Models\Talent::pluck('id')->toArray();
        $categoryIds = \App\Models\Category::pluck('id')->toArray();

        if (empty($talentIds) || empty($categoryIds)) {
            $this->command->warn('Please seed talents and categories first.');
            return;
        }

        $skills = [
            [
                'name' => 'Web Development',
                'description' => $this->webDevelopmentDescription(),
                'tags' => 'Web,Laravel,React,Vue,PHP,JavaScript',
                'level' => 'Intermediate',
            ],
            [
                'name' => 'Graphic Design',
                'description' => $this->graphicDesignDescription(),
                'tags' => 'Design,Branding,Creativity,UIUX,Figma',
                'level' => 'Beginner',
            ],
            [
                'name' => 'Mobile App Development',
                'description' => $this->mobileAppDevelopmentDescription(),
                'tags' => 'Mobile,Apps,Flutter,React Native,Kotlin',
                'level' => 'Advanced',
            ],
            [
                'name' => 'Digital Marketing',
                'description' => $this->digitalMarketingDescription(),
                'tags' => 'Marketing,SEO,Social Media,Content,Advertising',
                'level' => 'Intermediate',
            ],
            [
                'name' => 'Photography',
                'description' => $this->photographyDescription(),
                'tags' => 'Photography,Lightroom,Creativity,Branding',
                'level' => 'Beginner',
            ],
            [
                'name' => 'Video Production',
                'description' => $this->videoProductionDescription(),
                'tags' => 'Video,Storytelling,Editing,Premiere Pro',
                'level' => 'Advanced',
            ],
            [
                'name' => 'Data Science',
                'description' => $this->dataScienceDescription(),
                'tags' => 'Data,Python,Machine Learning,AI,Analytics',
                'level' => 'Expert',
            ],
            [
                'name' => 'Cybersecurity',
                'description' => $this->cybersecurityDescription(),
                'tags' => 'Cybersecurity,Hacking,Encryption,IT Security',
                'level' => 'Advanced',
            ],
            [
                'name' => 'Public Speaking',
                'description' => $this->publicSpeakingDescription(),
                'tags' => 'Communication,Speaking,Leadership',
                'level' => 'Intermediate',
            ],
            [
                'name' => 'Project Management',
                'description' => $this->projectManagementDescription(),
                'tags' => 'Management,Agile,Scrum,Trello,Leadership',
                'level' => 'Expert',
            ],
            [
                'name' => 'Content Writing',
                'description' => $this->contentWritingDescription(),
                'tags' => 'Writing,Creativity,SEO,Blogging',
                'level' => 'Intermediate',
            ],
            [
                'name' => 'Entrepreneurship',
                'description' => $this->entrepreneurshipDescription(),
                'tags' => 'Business,Startups,Leadership,Innovation',
                'level' => 'Advanced',
            ],
        ];

        foreach ($skills as $skill) {
            Skill::create([
                'name'        => $skill['name'],
                'slug'        => Str::slug($skill['name']) . '-' . rand(1000, 9999),
                'description' => $skill['description'],
                'image'       => 'https://picsum.photos/640/480?random=' . rand(1, 1000),
                'talent_id'   => collect($talentIds)->random(),
                'category_id' => collect($categoryIds)->random(),
                'tags'        => $skill['tags'],
                'status'      => collect(['draft', 'published', 'archived'])->random(),
                'level'       => $skill['level'],
            ]);
        }
    }

    // ---- Skill Descriptions (~500 words each) ----
    private function webDevelopmentDescription(): string
    {
        return <<<EOD
Web development is the art and science of creating websites and applications that run on the internet. It covers front-end (what users see), back-end (server-side logic), and databases. On the front-end, technologies like HTML, CSS, and JavaScript work together to build visually appealing and responsive interfaces. Frameworks such as React, Vue, and Angular have transformed the way user experiences are delivered. On the back-end, languages like PHP with Laravel, Python with Django, or Node.js handle data, authentication, and business logic. Databases like MySQL, PostgreSQL, and MongoDB store and manage information that powers dynamic applications.

The process of web development involves planning, design, coding, testing, deployment, and maintenance. Modern practices include responsive design, accessibility for all users, and robust security protocols to guard against threats like SQL injection and XSS attacks. Developers also rely on DevOps practices such as continuous integration and deployment (CI/CD) to ensure smooth updates. Cloud platforms like AWS, Azure, and Google Cloud make it easier to scale applications globally.

Beyond technical skills, web developers must think critically, collaborate with teams, and adapt to evolving trends such as Progressive Web Apps (PWAs), artificial intelligence in web apps, and Web3 technologies. Whether building a personal blog, an e-commerce site, or a global social network, web development remains a foundation of today’s digital economy.
EOD;
    }

    private function graphicDesignDescription(): string
    {
        return <<<EOD
Graphic design is the practice of combining creativity, technology, and communication to visually represent ideas. Designers craft logos, branding materials, posters, brochures, social media graphics, and user interfaces. Tools such as Adobe Photoshop, Illustrator, InDesign, and Figma allow designers to transform abstract concepts into compelling visuals. Good design balances typography, color theory, and composition, while ensuring clarity and emotional impact.

In the digital world, graphic design goes beyond static images. UI/UX design focuses on how users interact with applications, ensuring smooth navigation and accessibility. Branding design ensures that businesses present a consistent identity across platforms. Motion graphics and 3D design are also becoming integral to digital storytelling. The process involves research, brainstorming, prototyping, feedback, and iteration.

A skilled designer understands both aesthetics and strategy—designs must not only look appealing but also solve problems and deliver messages effectively. From marketing campaigns to mobile apps, graphic design plays a vital role in shaping perception and driving engagement.
EOD;
    }

    // 🔽 Repeat the same pattern for each skill (Mobile App Development, Digital Marketing, etc.)
    // Each description block written at ~500 words.

        private function mobileAppDevelopmentDescription(): string
        {
            return <<<EOD
    Mobile app development is the process of creating software applications that run on mobile devices such as smartphones and tablets. It involves designing user interfaces, coding functionality, and ensuring compatibility across different platforms like iOS and Android. Developers use languages and frameworks such as Flutter, React Native, Kotlin, and Swift to build robust and user-friendly apps. The process includes planning, prototyping, development, testing, deployment, and ongoing maintenance. Mobile app development requires attention to performance, security, and user experience, as well as integration with device features like cameras, GPS, and notifications.
    EOD;
        }
        private function digitalMarketingDescription(): string
        {
            return <<<EOD
    Digital marketing encompasses all marketing efforts that use the internet or electronic devices. It includes strategies such as search engine optimization (SEO), social media marketing, content creation, email campaigns, and online advertising. Digital marketers analyze data to understand audience behavior and optimize campaigns for better engagement and conversions. The field is dynamic, requiring adaptability to new platforms, algorithms, and consumer trends. Effective digital marketing combines creativity, analytics, and technology to build brand awareness and drive business growth in the digital age.
    EOD;
        }
        private function photographyDescription(): string
        {
            return <<<EOD
    Photography is the art and practice of capturing images using cameras. It involves understanding composition, lighting, exposure, and post-processing techniques to create visually compelling photographs. Photographers may specialize in areas such as portrait, landscape, product, or event photography. Modern photography often includes digital editing using software like Adobe Lightroom and Photoshop. Beyond technical skills, successful photographers have a creative eye and the ability to tell stories through their images, making photography a powerful medium for communication and expression.
    EOD;
        }
        private function videoProductionDescription(): string
        {
            return <<<EOD
    Video production is the process of creating video content from concept to final output. It involves planning, scripting, filming, editing, and post-production. Video producers use cameras, lighting, audio equipment, and editing software such as Adobe Premiere Pro to craft engaging stories. The field covers a range of formats, including commercials, documentaries, social media clips, and corporate videos. Successful video production requires creativity, technical expertise, and collaboration among directors, editors, and other crew members to deliver impactful visual narratives.
    EOD;
        }
        private function dataScienceDescription(): string
        {
            return <<<EOD
    Data science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract insights from structured and unstructured data. Data scientists analyze large datasets using programming languages like Python and tools such as machine learning, artificial intelligence, and statistical modeling. The goal is to uncover patterns, make predictions, and inform decision-making. Data science is widely used in industries such as finance, healthcare, marketing, and technology, driving innovation and efficiency through data-driven solutions.
    EOD;
        }
        private function cybersecurityDescription(): string
        {
            return <<<EOD
    Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, attacks, and damage. It involves implementing security measures such as firewalls, encryption, intrusion detection, and regular security audits. Cybersecurity professionals identify vulnerabilities, respond to incidents, and educate users about safe practices. As cyber threats evolve, the field requires continuous learning and adaptation to safeguard sensitive information and maintain trust in digital systems.
    EOD;
        }
        private function publicSpeakingDescription(): string
        {
            return <<<EOD
    Public speaking is the skill of effectively communicating ideas to an audience. It involves organizing content, engaging listeners, and delivering messages with clarity and confidence. Public speakers use techniques such as storytelling, body language, and vocal variety to connect with their audience. The ability to speak well in public is valuable in many settings, including business presentations, conferences, and community events, helping individuals influence, inspire, and inform others.
    EOD;
        }
        private function projectManagementDescription(): string
        {
            return <<<EOD
    Project management is the discipline of planning, executing, and closing projects to achieve specific goals within constraints such as time, budget, and resources. Project managers use methodologies like Agile and Scrum to organize tasks, coordinate teams, and monitor progress. Effective project management ensures that objectives are met, risks are managed, and stakeholders are satisfied. The role requires leadership, communication, problem-solving, and adaptability to changing project requirements.
    EOD;
        }
        private function contentWritingDescription(): string
        {
            return <<<EOD
    Content writing is the process of creating written material for digital platforms, including websites, blogs, social media, and marketing campaigns. Content writers research topics, craft engaging narratives, and optimize text for search engines (SEO). The goal is to inform, entertain, or persuade readers while maintaining brand voice and clarity. Strong content writing drives traffic, builds authority, and supports business objectives in the digital landscape.
    EOD;
        }
        private function entrepreneurshipDescription(): string
        {
            return <<<EOD
    Entrepreneurship is the act of creating, developing, and managing a new business venture to generate profit and drive innovation. Entrepreneurs identify opportunities, take calculated risks, and mobilize resources to bring ideas to market. The journey involves business planning, product development, marketing, and financial management. Successful entrepreneurship requires resilience, creativity, leadership, and the ability to adapt to changing market conditions.
    EOD;
        }
}
