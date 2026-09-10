<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
}