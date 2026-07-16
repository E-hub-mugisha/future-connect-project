<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TalentConnection extends Model
{
    protected $fillable = ['talent_id', 'name', 'status', 'message', 'email', 'status'];

    public function talent()
    {
        return $this->belongsTo(Talent::class);
    }
}
