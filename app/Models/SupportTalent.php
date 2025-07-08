<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupportTalent extends Model
{
    //
    protected $fillable = [
        'talent_id',
        'name',
        'email',
        'amount',
        'message',
    ];

    public function talent()
    {
        return $this->belongsTo(Talent::class);
    }
}
