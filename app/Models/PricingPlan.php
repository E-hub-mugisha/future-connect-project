<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PricingPlan extends Model
{
    protected $fillable = ['name', 'features', 'description','is_featured', 'is_active'];

    protected $casts = [
        'features' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];


    public function prices()
    {
        return $this->hasMany(PlanPrice::class);
    }

    public function monthlyPrice()
    {
        return $this->prices()->where('billing_cycle', 'monthly')->first();
    }

    public function annualPrice()
    {
        return $this->prices()->where('billing_cycle', 'annually')->first();
    }
}
