<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PricingPlan;
use App\Models\PlanPrice;
use Illuminate\Support\Facades\DB;

class PricingPlanSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        PlanPrice::truncate();
        PricingPlan::truncate();

        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $plans = [
            [
                'name' => 'Free Trial',
                'subtitle' => 'Start with a 7-day free trial',
                'limit_text' => 'Access all basic features',
                'is_featured' => false,
                'features' => [
                    'Limited Staffs Access',
                    'Limited Listings / Services',
                    'Limited Orders / Jobs',
                    'Basic Support',
                ],
                'prices' => [
                    'trial' => 0,
                ],
            ],
            [
                'name' => 'Basic',
                'subtitle' => 'Perfect plan for starters',
                'limit_text' => 'For only 10 staffs',
                'is_featured' => false,
                'features' => [
                    '10 Staffs',
                    '50 Listings / Services',
                    '20 Orders / Jobs',
                    'Limited Time Support',
                    '5 Product Page Optimizations',
                    '5 High-Quality Backlinks',
                    'Keyword Research (10 Keywords)',
                ],
                'prices' => [
                    'monthly' => 49,
                    'annually' => 199,
                ],
            ],
            [
                'name' => 'Standard',
                'subtitle' => 'For users who want more',
                'limit_text' => 'For only 20 staffs',
                'is_featured' => true,
                'features' => [
                    '20 Staffs',
                    '100 Listings / Services',
                    '50 Orders / Jobs',
                    '24/7 Customer Support',
                    '15 Product Page Optimizations',
                    '10 High-Quality Backlinks',
                    'Keyword Research (20 Keywords)',
                ],
                'prices' => [
                    'monthly' => 99,
                    'annually' => 299,
                ],
            ],
            [
                'name' => 'Premium',
                'subtitle' => 'Get all premium features',
                'limit_text' => 'Unlimited usage',
                'is_featured' => false,
                'features' => [
                    'Unlimited Staffs',
                    'Unlimited Listings / Services',
                    'Unlimited Orders / Jobs',
                    '24/7 Customer Support',
                    '30 Product Page Optimizations',
                    '15 High-Quality Backlinks',
                    'Keyword Research (30 Keywords)',
                ],
                'prices' => [
                    'monthly' => 199,
                    'annually' => 699,
                ],
            ],
        ];

        foreach ($plans as $data) {
            $plan = PricingPlan::create([
                'name' => $data['name'],
                'subtitle' => $data['subtitle'],
                'limit_text' => $data['limit_text'],
                'features' => $data['features'],
                'is_featured' => $data['is_featured'],
                'is_active' => true,
            ]);

            foreach ($data['prices'] as $cycle => $price) {
                PlanPrice::create([
                    'pricing_plan_id' => $plan->id,
                    'billing_cycle' => $cycle,
                    'price' => $price,
                ]);
            }
        }
    }
}
