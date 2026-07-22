<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Talent extends Model
{
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'talents';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'user_id',
        'status',
        'featured',
        'description',
        'image',
        'address',
        'phone',
        'email',
        'language',
        'category_id',
        'matched',
        'level'
    ];

    // cast attributes
    protected $casts = [
        'featured' => 'boolean',
        'matched' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }
    public function stories()
    {
        return $this->hasMany(Story::class);
    }
    public function skills()
    {
        return $this->hasMany(Skill::class);
    }
    public function feedback()
    {
        return $this->hasMany(TalentFeedback::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function connections()
    {
        return $this->hasMany(TalentConnection::class);
    }
    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
