<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TalentConnection extends Model
{
    protected $fillable = ['talent_id', 'name', 'email', 'status', 'message', 'response'];

    public function talent()
    {
        return $this->belongsTo(Talent::class);
    }
    
    public function requester()
    {
        return $this->belongsTo(User::class, 'email', 'email');
    }
}
