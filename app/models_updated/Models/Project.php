<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'title',
        'category',
        'description',
        'budget_amount',
        'budget_currency',
        'location',
        'status',
        'verified'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function applications()
    {
        return $this->hasMany(ProjectApplication::class);
    }
}
