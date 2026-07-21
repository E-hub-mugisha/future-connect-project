<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TalentFeedback extends Model
{
    protected $fillable = ['talent_id', 'name', 'email', 'rating', 'comment'];

    public function talent()
    {
        return $this->belongsTo(Talent::class);
    }
}
