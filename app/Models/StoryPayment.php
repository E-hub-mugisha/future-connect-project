<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StoryPayment extends Model
{
    //
    protected $fillable = [
        'tx_ref',
        'flw_ref',
        'status',
        'amount',
        'currency',
        'email',
        'video_id', // Assuming this is the ID of the video being paid for
        'story_id', // Assuming this is the ID of the story related to the payment
    ];

    public function story()
    {
        return $this->belongsTo(Story::class, 'story_id');
    }
}
