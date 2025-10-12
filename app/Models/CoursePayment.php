<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CoursePayment extends Model
{
    //
    protected $fillable = [
        'tx_ref',
        'status',
        'amount',
        'currency',
        'user_id', 
        'course_id', 
    ];

    public function course()
    {
        return $this->belongsTo(Story::class, 'course_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
