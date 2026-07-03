<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuickHire extends Model
{
    protected $fillable = [
        'user_id',
        'category_id',
        'talent_id',
        'title',
        'description',
        'budget_type',
        'budget_min',
        'budget_max',
        'timeline',
        'experience_level',
        'skills',
        'client_name',
        'client_email',
        'client_phone',
        'company_name',
        'status',
    ];

    protected $casts = [
        'skills' => 'array',
        'budget_min' => 'decimal:2',
        'budget_max' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function talent()
    {
        return $this->belongsTo(Talent::class, 'talent_id');
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}