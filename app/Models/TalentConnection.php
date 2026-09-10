<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TalentConnection extends Model
{
    use HasFactory;

    protected $fillable = [
        'talent_id',
        'user_id',
        'name',
        'email',
        'phone',
        'status',
        'payment_status',
        'payment_reference',
        'amount',
        'message',
        'response',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
    ];

    public function talent()
    {
        return $this->belongsTo(Talent::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Payment associated with this connection.
     *
     * talent_connections.payment_reference
     * matches
     * connection_payments.reference
     */
    public function payment()
    {
        return $this->hasOne(
            ConnectionPayment::class,
            'reference',
            'payment_reference'
        );
    }
}