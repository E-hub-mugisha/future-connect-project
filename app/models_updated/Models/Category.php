<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $fillable = [
        'name',
        'description',
        'featured',
        'image',
        'slug',
    ];
    public function talents()
{
    return $this->hasMany(Talent::class);
}

    public function stories()
    {
        return $this->hasMany(Story::class);
    }

    public function courses()
    {
        return $this->hasMany(Course::class);
    }

    public function blogs()
    {
        return $this->hasMany(Blog::class);
    }
}
