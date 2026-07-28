<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactSeeder extends Seeder
{
    public function run(): void
    {
        $contacts = [
            ['names' => 'Sandrine Mutesi', 'email' => 'sandrine.mutesi@gmail.com', 'subject' => 'Question about talent verification'],
            ['names' => 'Herve Munyaneza', 'email' => 'herve.munyaneza@gmail.com', 'subject' => 'Partnership proposal'],
            ['names' => 'Grace Nyiransabimana', 'email' => 'grace.nyiransabimana@gmail.com', 'subject' => 'Cannot access my dashboard'],
            ['names' => 'Placide Bizimungu', 'email' => 'placide.bizimungu@gmail.com', 'subject' => 'How to become a seller'],
            ['names' => 'Providence Umuhire', 'email' => 'providence.umuhire@gmail.com', 'subject' => 'Refund request for order'],
            ['names' => 'Fiacre Ntagungira', 'email' => 'fiacre.ntagungira@gmail.com', 'subject' => 'Corporate recruitment inquiry'],
            ['names' => 'Liliane Iribagiza', 'email' => 'liliane.iribagiza@gmail.com', 'subject' => 'Course enrollment issue'],
            ['names' => 'Olivier Rugamba', 'email' => 'olivier.rugamba@gmail.com', 'subject' => 'Event ticket not received'],
            ['names' => 'Esperance Nirere', 'email' => 'esperance.nirere@gmail.com', 'subject' => 'Diaspora account verification'],
            ['names' => 'Justin Nsanzimana', 'email' => 'justin.nsanzimana@gmail.com', 'subject' => 'General feedback about the platform'],
        ];

        foreach ($contacts as $c) {
            DB::table('contacts')->insert([
                'names' => $c['names'],
                'email' => $c['email'],
                'subject' => $c['subject'],
                'message' => 'Hello FutureConnect team, I would like some assistance regarding the subject above. Please get back to me at your earliest convenience.',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
