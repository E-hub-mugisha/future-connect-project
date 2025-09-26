<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ConnectionPayment extends Model
{
    //
    protected $fillable = [
        'tx_ref',
        'flw_ref',
        'status',
        'amount',
        'currency',
        'payment_method',
        'transaction_id',
        'user_id', 
        'connection_id', // Assuming this is the ID of the story related to the payment
    ];

    public function connection()
    {
        return $this->belongsTo(TalentConnection::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
