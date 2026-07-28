<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSponsorshipSeeder extends Seeder
{
    public function run(): void
    {
        $projectIds = DB::table('projects')->pluck('id')->all();
        $diasporaAccounts = DB::table('diaspora_accounts')->get();

        foreach ($diasporaAccounts as $i => $d) {
            DB::table('project_sponsorships')->insert([
                'project_id' => $projectIds[$i % count($projectIds)],
                'diaspora_account_id' => $d->id,
                'name' => $d->display_name,
                'email' => $d->email,
                'amount' => rand(100, 2000),
                'currency' => 'USD',
                'message' => 'Happy to support this project and see it make a real difference back home.',
                'status' => $i % 4 === 0 ? 'pending' : 'confirmed',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
