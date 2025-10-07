<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'talent_id',
        'title',
        'description',
        'category_id',
        'is_free',
        'price',
        'level',
        'thumbnail',
        'status',
        'video', // intro video
    ];

    // 🔹 Relationships
    public function talent()
    {
        return $this->belongsTo(Talent::class);
    }

    public function lessons()
    {
        return $this->hasMany(CourseLesson::class);
    }

    public function enrollments()
    {
        return $this->hasMany(CourseEnrollment::class);
    }

    public function feedback()
    {
        return $this->hasMany(CourseFeedback::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}