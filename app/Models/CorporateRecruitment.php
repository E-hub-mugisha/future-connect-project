<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CorporateRecruitment extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id', 'title', 'description', 'skills', 'category', 'region', 'fee', 'status'
    ];

    public function company()
    {
        return $this->belongsTo(Seller::class, 'company_id');
    }
}
