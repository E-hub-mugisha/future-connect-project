<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class JobCategory extends Model
{
    //
    protected $fillable = ['name', 'slug', 'parent_id'];

    // slug from name
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->slug = Str::slug($model->name);
        });
    }

    public function jobSections()
    {
        return $this->hasMany(JobSection::class, 'job_category_id');
    }

    public function parent()
    {
        return $this->belongsTo(JobCategory::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(JobCategory::class, 'parent_id');
    }
}
