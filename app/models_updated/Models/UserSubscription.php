<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSubscription extends Model
{
    protected $fillable = [
        'user_id',
        'pricing_plan_id',
        'billing_cycle',
        'starts_at',
        'ends_at',
        'status',
        'price',
        'cancelled_at',
        'auto_renew'
    ];

    protected $casts = [
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
        'cancelled_at' => 'datetime'
    ];

    protected static function booted()
    {
        static::creating(function ($subscription) {
            $exists = self::where('user_id', $subscription->user_id)
                ->where('status', 'active')
                ->exists();

            if ($exists) {
                throw new \Exception('User already has an active subscription');
            }
        });
    }

    public function plan()
    {
        return $this->belongsTo(PricingPlan::class, 'pricing_plan_id');
    }

    public function pricingPlan()
    {
        return $this->belongsTo(PricingPlan::class);
    }
}
