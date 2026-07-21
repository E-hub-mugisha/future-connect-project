<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobSection extends Model
{
    protected $fillable = ['title', 'description', 'location', 'type', 'experience_level', 'salary_range', 'skills', 'company_id', 'job_category_id'];

    protected $casts = [
        'skills' => 'array',
    ];

    public function company()
    {
        return $this->belongsTo(User::class, 'company_id');
    }

    public function applications()
    {
        return $this->hasMany(JobSectionApplication::class);
    }

    public function getSkillsListAttribute()
    {
        return $this->skills ?? [];
    }

    public function category()
    {
        return $this->belongsTo(JobCategory::class, 'job_category_id');
    }
}
