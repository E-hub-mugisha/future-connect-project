<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $table = 'settings';

    protected $fillable = [
        'site_name',
        'logo',
        'default_language',
        'timezone',
        'contact_email',
        'contact_phone',
        'contact_address',
        'facebook_link',
        'twitter_link',
        'instagram_link',
        'linkedin_link',
        'registration_open',
        'enable_notifications',
    ];

    protected $casts = [
        'registration_open' => 'boolean',
        'enable_notifications' => 'boolean',
    ];
}
