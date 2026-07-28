<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DemoRequestSeeder extends Seeder
{
    public function run(): void
    {
        $requests = [
            ['name' => 'Aline Kayitesi', 'email' => 'aline.kayitesi@bk.rw', 'company' => 'Bank of Kigali', 'size' => '1000+', 'role' => 'Digital Products Manager'],
            ['name' => 'Robert Nsengiyumva', 'email' => 'robert.n@mtn.rw', 'company' => 'MTN Rwanda', 'size' => '500-1000', 'role' => 'Partnerships Lead'],
            ['name' => 'Clarisse Umuhoza', 'email' => 'clarisse.u@zipline.com', 'company' => 'Zipline Rwanda', 'size' => '100-500', 'role' => 'Operations Manager'],
            ['name' => 'Emmanuel Sano', 'email' => 'emmanuel.sano@rra.gov.rw', 'company' => 'Rwanda Revenue Authority', 'size' => '1000+', 'role' => 'IT Director'],
            ['name' => 'Josee Mukamurenzi', 'email' => 'josee.mukamurenzi@irembo.rw', 'company' => 'Irembo', 'size' => '100-500', 'role' => 'Product Lead'],
            ['name' => 'Anaclet Habimana', 'email' => 'anaclet.h@bkgroup.rw', 'company' => 'BK Group Plc', 'size' => '1000+', 'role' => 'HR Director'],
            ['name' => 'Nadia Uwizeyimana', 'email' => 'nadia.u@equitybank.rw', 'company' => 'Equity Bank Rwanda', 'size' => '500-1000', 'role' => 'Innovation Manager'],
            ['name' => 'Kevin Byiringiro', 'email' => 'kevin.b@imbank.rw', 'company' => 'I&M Bank Rwanda', 'size' => '500-1000', 'role' => 'Digital Channels Manager'],
            ['name' => 'Rachel Ingabire', 'email' => 'rachel.i@urwegobank.rw', 'company' => 'Urwego Bank', 'size' => '100-500', 'role' => 'Business Development Manager'],
            ['name' => 'Steven Mugenzi', 'email' => 'steven.m@inyange.rw', 'company' => 'Inyange Industries', 'size' => '500-1000', 'role' => 'Supply Chain Manager'],
        ];

        foreach ($requests as $i => $r) {
            DB::table('demo_requests')->insert([
                'full_name' => $r['name'],
                'work_email' => $r['email'],
                'phone' => '+25078' . rand(1000000, 9999999),
                'company_name' => $r['company'],
                'company_size' => $r['size'],
                'role' => $r['role'],
                'preferred_date' => now()->addDays(($i + 1) * 2)->toDateString(),
                'preferred_time' => '10:00 AM',
                'message' => 'We would like to explore how FutureConnect can support our workforce and sourcing needs.',
                'status' => $i % 4 === 0 ? 'scheduled' : 'pending',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
