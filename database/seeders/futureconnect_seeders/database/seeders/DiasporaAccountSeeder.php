<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DiasporaAccountSeeder extends Seeder
{
    public function run(): void
    {
        $adminIds = DB::table('users')->where('role', 'admin')->pluck('id')->all();
        if (empty($adminIds)) {
            $adminIds = [null];
        }

        $diaspora = [
            ['first' => 'Alphonse', 'last' => 'Mugabo', 'country' => 'Belgium', 'city' => 'Brussels', 'purpose' => 'sponsor'],
            ['first' => 'Beata', 'last' => 'Nyirahabimana', 'country' => 'United States', 'city' => 'Boston', 'purpose' => 'investor'],
            ['first' => 'Celestin', 'last' => 'Rwabukamba', 'country' => 'Canada', 'city' => 'Toronto', 'purpose' => 'mentor'],
            ['first' => 'Delphine', 'last' => 'Uwera', 'country' => 'United Kingdom', 'city' => 'London', 'purpose' => 'sponsor'],
            ['first' => 'Emile', 'last' => 'Kayitare', 'country' => 'Kenya', 'city' => 'Nairobi', 'purpose' => 'partner'],
            ['first' => 'Francine', 'last' => 'Mukeshimana', 'country' => 'Uganda', 'city' => 'Kampala', 'purpose' => 'investor'],
            ['first' => 'Gaspard', 'last' => 'Bizumuremyi', 'country' => 'France', 'city' => 'Paris', 'purpose' => 'sponsor'],
            ['first' => 'Henriette', 'last' => 'Nyirasafari', 'country' => 'Germany', 'city' => 'Berlin', 'purpose' => 'mentor'],
            ['first' => 'Ignace', 'last' => 'Twahirwa', 'country' => 'South Africa', 'city' => 'Johannesburg', 'purpose' => 'other'],
            ['first' => 'Jeanette', 'last' => 'Mukashyaka', 'country' => 'DR Congo', 'city' => 'Goma', 'purpose' => 'partner'],
        ];

        foreach ($diaspora as $i => $d) {
            DB::table('diaspora_accounts')->insert([
                'user_id' => null,
                'first_name' => $d['first'],
                'last_name' => $d['last'],
                'display_name' => $d['first'] . ' ' . $d['last'],
                'email' => strtolower($d['first'] . '.' . $d['last']) . '@diaspora.rw',
                'phone' => '+' . rand(1, 49) . rand(100000000, 999999999),
                'country' => $d['country'],
                'city' => $d['city'],
                'passport_number' => 'RW' . rand(1000000, 9999999),
                'id_document_path' => null,
                'address_proof_path' => null,
                'occupation' => 'Professional',
                'bio' => 'A member of the Rwandan diaspora passionate about supporting home-grown talent and development projects.',
                'purpose' => $d['purpose'],
                'preferred_currency' => 'USD',
                'sponsorship_preferences' => json_encode(['education', 'agriculture', 'small business']),
                'links' => json_encode(['linkedin' => 'https://linkedin.com/in/' . strtolower($d['first'] . $d['last'])]),
                'preferred_contact' => 'email',
                'newsletter_opt_in' => 1,
                'password' => Hash::make('password'),
                'verification_status' => $i % 3 === 0 ? 'pending' : 'verified',
                'verification_notes' => null,
                'verified_at' => $i % 3 === 0 ? null : now(),
                'verified_by' => $i % 3 === 0 ? null : $adminIds[0],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
