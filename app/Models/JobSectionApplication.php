<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobSectionApplication extends Model
{
    protected $fillable = [
        'job_section_id',
        'email',
        'name',
        'cover_letter',
        'resume',
        'status',
    ];

    public function jobSection()
    {
        return $this->belongsTo(JobSection::class, 'job_section_id');
    }
}
