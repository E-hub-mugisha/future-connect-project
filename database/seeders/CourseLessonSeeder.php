<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CourseLesson;

class CourseLessonSeeder extends Seeder
{
    public function run()
    {
        $lessons = [
            // 🎤 Talent 1: Alice Niyonsaba - Music
            // Course 1: Vocal Warm-ups & Breathing Techniques
            [
                'course_id' => 1,
                'title' => 'Introduction to Vocal Techniques',
                'content' => 'Overview of vocal warm-ups, posture, and breathing exercises to prepare your voice.',
                'video_url' => 'videos/lessons/alice_vocal_intro.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 1,
                'title' => 'Breathing Control & Sustaining Notes',
                'content' => 'Learn how to control your breath for longer notes and smoother transitions.',
                'video_url' => 'videos/lessons/alice_breathing.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 1,
                'title' => 'Vocal Warm-up Exercises',
                'content' => 'Practical exercises to strengthen your voice and improve tonal quality.',
                'video_url' => 'videos/lessons/alice_warmups.mp4',
                'order' => 3,
            ],
            // Course 2: Stage Performance & Audience Connection
            [
                'course_id' => 2,
                'title' => 'Stage Confidence Essentials',
                'content' => 'Tips to overcome stage fright and project confidence during live performances.',
                'video_url' => 'videos/lessons/alice_stage_confidence.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 2,
                'title' => 'Engaging the Audience',
                'content' => 'Learn techniques to connect with your audience and make your performance memorable.',
                'video_url' => 'videos/lessons/alice_audience.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 2,
                'title' => 'Expressing Emotions through Song',
                'content' => 'Master storytelling through voice modulation, facial expressions, and body language.',
                'video_url' => 'videos/lessons/alice_expression.mp4',
                'order' => 3,
            ],

            // 🎨 Talent 2: John Mugisha - Digital Art
            // Course 3: Digital Art Fundamentals
            [
                'course_id' => 3,
                'title' => 'Getting Started with Procreate & Photoshop',
                'content' => 'Introduction to the software, interface, and essential tools for digital drawing.',
                'video_url' => 'videos/lessons/john_intro_tools.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 3,
                'title' => 'Sketching and Line Art Basics',
                'content' => 'Learn basic sketching techniques and how to create clean line art digitally.',
                'video_url' => 'videos/lessons/john_sketching.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 3,
                'title' => 'Color Blending and Shading',
                'content' => 'Apply colors and shadows to give depth and realism to your digital artwork.',
                'video_url' => 'videos/lessons/john_color.mp4',
                'order' => 3,
            ],
            // Course 4: Character Design & Illustration
            [
                'course_id' => 4,
                'title' => 'Character Concept Development',
                'content' => 'Learn to create unique character concepts using storytelling and references.',
                'video_url' => 'videos/lessons/john_character_concept.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 4,
                'title' => 'Designing Believable Features',
                'content' => 'Techniques for facial expressions, proportions, and anatomy for believable characters.',
                'video_url' => 'videos/lessons/john_character_design.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 4,
                'title' => 'Final Illustration & Coloring',
                'content' => 'Bring your character to life using coloring, shading, and detailing techniques.',
                'video_url' => 'videos/lessons/john_character_final.mp4',
                'order' => 3,
            ],

            // 📸 Talent 3: Grace Uwamahoro - Photography
            // Course 5: Photography Basics: Lighting and Composition
            [
                'course_id' => 5,
                'title' => 'Understanding Light',
                'content' => 'Learn natural vs artificial light and how it affects the mood and quality of photos.',
                'video_url' => 'videos/lessons/grace_light.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 5,
                'title' => 'Composition Techniques',
                'content' => 'Rule of thirds, framing, and perspective for compelling photos.',
                'video_url' => 'videos/lessons/grace_composition.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 5,
                'title' => 'Practical Photography Exercises',
                'content' => 'Hands-on exercises to practice lighting and composition skills.',
                'video_url' => 'videos/lessons/grace_practical.mp4',
                'order' => 3,
            ],
            // Course 6: Portrait Photography Masterclass
            [
                'course_id' => 6,
                'title' => 'Capturing Facial Expressions',
                'content' => 'Techniques to photograph emotions and expressions naturally.',
                'video_url' => 'videos/lessons/grace_portrait_expression.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 6,
                'title' => 'Advanced Lighting Setups',
                'content' => 'Use studio and outdoor lighting creatively for professional portraits.',
                'video_url' => 'videos/lessons/grace_portrait_lighting.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 6,
                'title' => 'Editing and Retouching',
                'content' => 'Post-processing tips to enhance portraits while keeping them natural.',
                'video_url' => 'videos/lessons/grace_portrait_editing.mp4',
                'order' => 3,
            ],

            // ✍️ Talent 4: Patrick Habimana - Poetry
            // Course 7: Creative Writing for Beginners
            [
                'course_id' => 7,
                'title' => 'Developing Ideas',
                'content' => 'Brainstorming and ideation techniques for creative writing.',
                'video_url' => 'videos/lessons/patrick_ideas.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 7,
                'title' => 'Storytelling Structure',
                'content' => 'Learn how to structure stories with beginning, middle, and end.',
                'video_url' => 'videos/lessons/patrick_structure.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 7,
                'title' => 'Writing Prompts & Exercises',
                'content' => 'Practical exercises to enhance creativity and writing fluency.',
                'video_url' => 'videos/lessons/patrick_prompts.mp4',
                'order' => 3,
            ],
            // Course 8: Performing Spoken Word Poetry
            [
                'course_id' => 8,
                'title' => 'Voice Projection & Tone',
                'content' => 'Techniques to make your voice clear and powerful during performances.',
                'video_url' => 'videos/lessons/patrick_voice.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 8,
                'title' => 'Emotional Expression',
                'content' => 'Convey emotion effectively through voice modulation and body language.',
                'video_url' => 'videos/lessons/patrick_emotion.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 8,
                'title' => 'Stage Presence',
                'content' => 'Engage the audience and deliver a memorable spoken word performance.',
                'video_url' => 'videos/lessons/patrick_stage.mp4',
                'order' => 3,
            ],

            // 💃 Talent 5: Sarah Uwase - Dance
            // Course 9: Traditional Rwandan Dance Basics
            [
                'course_id' => 9,
                'title' => 'Rwandan Dance History',
                'content' => 'Learn the origins and cultural significance of traditional Rwandan dances.',
                'video_url' => 'videos/lessons/sarah_history.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 9,
                'title' => 'Basic Dance Steps',
                'content' => 'Practice fundamental steps and rhythms of traditional dances.',
                'video_url' => 'videos/lessons/sarah_basic_steps.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 9,
                'title' => 'Performing with Musical Accompaniment',
                'content' => 'Combine steps with traditional drums and songs to perform full routines.',
                'video_url' => 'videos/lessons/sarah_performance.mp4',
                'order' => 3,
            ],
            // Course 10: Modern Choreography Techniques
            [
                'course_id' => 10,
                'title' => 'Introduction to Modern Dance Styles',
                'content' => 'Learn key movements and techniques in contemporary and modern dance.',
                'video_url' => 'videos/lessons/sarah_modern_intro.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 10,
                'title' => 'Creating Choreography',
                'content' => 'Learn how to build dance sequences and transitions smoothly.',
                'video_url' => 'videos/lessons/sarah_choreography.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 10,
                'title' => 'Practicing Performance Routines',
                'content' => 'Tips to refine and perfect modern dance performances.',
                'video_url' => 'videos/lessons/sarah_practice.mp4',
                'order' => 3,
            ],

            // 🎧 Talent 6: Eric Nkurunziza - Music Production
            // Course 11: Introduction to FL Studio
            [
                'course_id' => 11,
                'title' => 'FL Studio Basics',
                'content' => 'Get familiar with the interface, channels, and piano roll.',
                'video_url' => 'videos/lessons/eric_flstudio_basics.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 11,
                'title' => 'Beat Making Essentials',
                'content' => 'Learn rhythm, drum patterns, and sequencing for basic beats.',
                'video_url' => 'videos/lessons/eric_beat_making.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 11,
                'title' => 'Recording Vocals',
                'content' => 'Learn proper recording techniques for vocals and instruments.',
                'video_url' => 'videos/lessons/eric_recording.mp4',
                'order' => 3,
            ],
            // Course 12: Mixing and Mastering Like a Pro
            [
                'course_id' => 12,
                'title' => 'Understanding EQ & Compression',
                'content' => 'Learn to balance frequencies and dynamics in your mix.',
                'video_url' => 'videos/lessons/eric_eq_compression.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 12,
                'title' => 'Adding Effects & Reverb',
                'content' => 'Use effects to enhance depth and atmosphere in your tracks.',
                'video_url' => 'videos/lessons/eric_effects.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 12,
                'title' => 'Final Mastering Techniques',
                'content' => 'Prepare your song for distribution by mastering loudness and clarity.',
                'video_url' => 'videos/lessons/eric_mastering.mp4',
                'order' => 3,
            ],

            // 👗 Talent 7: Linda Ingabire - Fashion
            // Course 13: Fashion Design Foundations
            [
                'course_id' => 13,
                'title' => 'Introduction to Fashion Sketching',
                'content' => 'Learn sketching techniques and basic figure drawing for fashion.',
                'video_url' => 'videos/lessons/linda_sketching.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 13,
                'title' => 'Color Theory in Fashion',
                'content' => 'Understand color palettes and combinations for clothing design.',
                'video_url' => 'videos/lessons/linda_color.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 13,
                'title' => 'Garment Structure Basics',
                'content' => 'Learn the basics of patterns, sewing, and fabric selection.',
                'video_url' => 'videos/lessons/linda_garment.mp4',
                'order' => 3,
            ],
            // Course 14: Sustainable Fashion Practices
            [
                'course_id' => 14,
                'title' => 'Eco-Friendly Materials',
                'content' => 'Learn about sustainable fabrics and materials for environmentally conscious designs.',
                'video_url' => 'videos/lessons/linda_materials.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 14,
                'title' => 'Ethical Production Practices',
                'content' => 'Understand fair trade, ethical sourcing, and responsible production.',
                'video_url' => 'videos/lessons/linda_ethics.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 14,
                'title' => 'Designing for Sustainability',
                'content' => 'Create fashion designs that minimize environmental impact.',
                'video_url' => 'videos/lessons/linda_design.mp4',
                'order' => 3,
            ],

            // 🎭 Talent 8: Kevin Mutabazi - Acting
            // Course 15: Fundamentals of Acting
            [
                'course_id' => 15,
                'title' => 'Voice Projection Techniques',
                'content' => 'Learn to project your voice clearly and with confidence.',
                'video_url' => 'videos/lessons/kevin_voice.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 15,
                'title' => 'Emotion & Body Control',
                'content' => 'Master emotional expression and control of body language on stage.',
                'video_url' => 'videos/lessons/kevin_emotion.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 15,
                'title' => 'Improvisation Basics',
                'content' => 'Techniques to think and react naturally during performances.',
                'video_url' => 'videos/lessons/kevin_improv.mp4',
                'order' => 3,
            ],
            // Course 16: Screen Acting & Film Presence
            [
                'course_id' => 16,
                'title' => 'Camera Techniques & Angles',
                'content' => 'Learn how to work with the camera and use angles effectively.',
                'video_url' => 'videos/lessons/kevin_camera.mp4',
                'order' => 1,
            ],
            [
                'course_id' => 16,
                'title' => 'Scene Analysis & Character Study',
                'content' => 'Understand character motivation and scene context for realistic performances.',
                'video_url' => 'videos/lessons/kevin_scene.mp4',
                'order' => 2,
            ],
            [
                'course_id' => 16,
                'title' => 'Acting for Film Practice',
                'content' => 'Practical exercises for timing, reactions, and delivering authentic performances on camera.',
                'video_url' => 'videos/lessons/kevin_film_practice.mp4',
                'order' => 3,
            ],
        ];

        CourseLesson::insert($lessons);
    }
}
