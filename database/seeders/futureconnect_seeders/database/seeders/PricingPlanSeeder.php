<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PricingPlanSeeder extends Seeder
{
    public function run(): void
    {
        $plans = [
            ['name' => 'Free Starter', 'subtitle' => 'For individuals getting started', 'price' => 0, 'featured' => 0],
            ['name' => 'Talent Basic', 'subtitle' => 'For independent talents', 'price' => 5000, 'featured' => 0],
            ['name' => 'Talent Pro', 'subtitle' => 'For growing talent profiles', 'price' => 12000, 'featured' => 1],
            ['name' => 'Seller Standard', 'subtitle' => 'For marketplace sellers', 'price' => 15000, 'featured' => 0],
            ['name' => 'Seller Premium', 'subtitle' => 'For established sellers', 'price' => 30000, 'featured' => 1],
            ['name' => 'Corporate Basic', 'subtitle' => 'For small businesses hiring talent', 'price' => 40000, 'featured' => 0],
            ['name' => 'Corporate Plus', 'subtitle' => 'For growing companies', 'price' => 75000, 'featured' => 1],
            ['name' => 'Diaspora Partner', 'subtitle' => 'For diaspora sponsors', 'price' => 20000, 'featured' => 0],
            ['name' => 'Event Organizer', 'subtitle' => 'For event hosts and organizers', 'price' => 25000, 'featured' => 0],
            ['name' => 'Enterprise', 'subtitle' => 'For large organizations', 'price' => 150000, 'featured' => 1],
        ];

        foreach ($plans as $p) {
            $planId = DB::table('pricing_plans')->insertGetId([
                'name' => $p['name'],
                'description' => 'Designed for FutureConnect users in Rwanda who need ' . strtolower($p['subtitle']) . '.',
                'subtitle' => $p['subtitle'],
                'limit_text' => 'Up to 10 active listings',
                'is_featured' => $p['featured'],
                'features' => json_encode(['profile visibility', 'priority support', 'analytics dashboard']),
                'is_active' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::table('plan_prices')->insert([
                'pricing_plan_id' => $planId,
                'billing_cycle' => 'monthly',
                'price' => $p['price'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
