<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubscriptionPayment extends Model
{
    protected $fillable = [
        'user_id',
        'user_subscription_id',
        'amount',
        'currency',
        'gateway',
        'tx_ref',
        'status',
        'gateway_response',
    ];

    protected $casts = [
        'gateway_response' => 'array',
    ];

    public function subscription()
    {
        return $this->belongsTo(UserSubscription::class);
    }
}
