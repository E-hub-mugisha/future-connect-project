<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TalentConnection extends Model
{
    protected $fillable = ['talent_id', 'user_id', 'status', 'message', 'amount', 'payment_status'];

    public function talent()
    {
        return $this->belongsTo(Talent::class);
    }

    public function requester()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function payment()
    {
        return $this->hasOne(ConnectionPayment::class, 'connection_id');
    }
}
