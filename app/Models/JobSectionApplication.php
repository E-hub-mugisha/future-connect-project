<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobSectionApplication extends Model
{
    protected $fillable = ['job_section_id', 'email','name', 'cover_letter', 'resume', 'status'];

    public function job()
    {
        return $this->belongsTo(JobSection::class);
    }
    
}
