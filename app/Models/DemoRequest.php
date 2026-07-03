<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DemoRequest extends Model
{
    protected $fillable = [
        'full_name',
        'work_email',
        'phone',
        'company_name',
        'company_size',
        'role',
        'preferred_date',
        'preferred_time',
        'message',
        'status',
    ];

    protected $casts = [
        'preferred_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}