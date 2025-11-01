<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobSectionApplication extends Model
{
    protected $fillable = ['job_section_id', 'user_id', 'cover_letter', 'resume', 'status'];

    public function job()
    {
        return $this->belongsTo(JobSection::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
