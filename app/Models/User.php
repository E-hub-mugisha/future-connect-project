<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasApiTokens, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'active',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_verified' => 'boolean',
        ];
    }
    public function talent()
    {
        return $this->hasOne(Talent::class);
    }


    public function payments()
    {
        return $this->hasMany(ConnectionPayment::class);
    }

    public function courses()
    {
        return $this->belongsToMany(Skill::class, 'user_courses');
    }

    public function likedStories()
    {
        return $this->belongsToMany(Story::class, 'story_likes');
    }
    public function enrollments()
    {
        return $this->hasMany(CourseEnrollment::class);
    }
    public function userCourses()
    {
        return $this->belongsToMany(Course::class, 'course_enrollments', 'user_id', 'course_id');
    }

    public function wallet()
    {
        return $this->hasOne(Wallet::class);
    }

    public function verify()
    {
        $this->update(['is_verified' => true]);
    }
    public function diaspora()
    {
        return $this->hasOne(DiasporaAccount::class);
    }
}
