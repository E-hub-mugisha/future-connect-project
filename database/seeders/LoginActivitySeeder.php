<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LoginActivitySeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();
        $ips = ['41.186.101.23', '105.235.140.12', '197.243.20.5', '41.222.11.90', '105.161.45.33', '197.157.33.10', '41.204.15.77', '105.178.90.14', '197.220.44.61', '41.216.75.29'];

        foreach ($userIds as $i => $userId) {
            DB::table('login_activities')->insert([
                'user_id' => $userId,
                'ip_address' => $ips[$i % count($ips)],
                'user_agent' => 'Mozilla/5.0 (Linux; Android 12; SM-A125F) AppleWebKit/537.36 Chrome/120.0 Mobile Safari/537.36',
                'logged_in_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
