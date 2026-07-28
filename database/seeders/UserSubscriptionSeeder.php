<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSubscriptionSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();
        $planPrices = DB::table('plan_prices')->get();

        foreach ($planPrices as $i => $pp) {
            $startsAt = now()->subMonths(1);
            $endsAt = now()->addMonths(1);

            DB::table('user_subscriptions')->insert([
                'user_id' => $userIds[$i % count($userIds)],
                'pricing_plan_id' => $pp->pricing_plan_id,
                'billing_cycle' => 'monthly',
                'price' => $pp->price,
                'starts_at' => $startsAt->toDateString(),
                'ends_at' => $endsAt->toDateString(),
                'status' => $i % 5 === 0 ? 'trialing' : 'active',
                'cancelled_at' => null,
                'auto_renew' => 1,
                'is_trial' => $i % 5 === 0 ? 1 : 0,
                'trial_ends_at' => $i % 5 === 0 ? now()->addDays(14) : null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
