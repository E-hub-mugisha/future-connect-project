<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'seller_id',
        'name',
        'slug',
        'price',
        'description',
        'stock',
        'image',
        'status',
    ];

    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }
}
