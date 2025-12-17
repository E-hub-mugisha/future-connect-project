<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlanPrice extends Model
{
    protected $fillable = ['pricing_plan_id', 'billing_cycle', 'price'];

    public function plan()
    {
        return $this->belongsTo(PricingPlan::class);
    }
}
