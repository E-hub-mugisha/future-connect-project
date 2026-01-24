<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class SuccessStory extends Model
{
    protected $fillable = [
        'title', 'slug', 'thumbnail_url', 'excerpt', 'content', 'author_name', 'role'
    ];

    // Auto-generate slug when creating
    protected static function booted()
    {
        static::creating(function ($story) {
            $story->slug = Str::slug($story->title);
        });
    }
}
