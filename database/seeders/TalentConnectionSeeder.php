<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TalentConnectionSeeder extends Seeder
{
    public function run(): void
    {
        $talentIds = DB::table('talents')->pluck('id')->all();
        $clients = [
            ['name' => 'Kigali Heights Ltd', 'email' => 'info@kigaliheights.rw'],
            ['name' => 'Norrsken House Kigali', 'email' => 'events@norrsken.rw'],
            ['name' => 'Rwanda Girls Initiative', 'email' => 'contact@rgi.rw'],
            ['name' => 'BK General Insurance', 'email' => 'admin@bkgi.rw'],
            ['name' => 'Question Coffee', 'email' => 'hello@questioncoffee.rw'],
            ['name' => 'Inzozi Nziza', 'email' => 'orders@inzozinziza.rw'],
            ['name' => 'Kigali Marriott Hotel', 'email' => 'events@marriottkigali.rw'],
            ['name' => 'Bourbon Coffee', 'email' => 'partnerships@bourboncoffee.rw'],
            ['name' => 'Volcanoes Safaris', 'email' => 'bookings@volcanoessafaris.com'],
            ['name' => 'One Acre Fund Rwanda', 'email' => 'rwanda@oneacrefund.org'],
        ];

        foreach ($clients as $i => $c) {
            DB::table('talent_connections')->insert([
                'talent_id' => $talentIds[$i % count($talentIds)],
                'name' => $c['name'],
                'email' => $c['email'],
                'status' => $i % 4 === 0 ? 'accepted' : 'pending',
                'message' => 'We would like to hire your services for an upcoming project in Kigali.',
                'response' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
