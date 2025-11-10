<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

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
        'product_category_id',
    ];

    protected static function booted()
    {
        static::creating(function ($product) {
            // Generate a slug if it doesn’t exist
            $product->slug = $product->slug ?? Str::slug($product->name);
        });

        static::updating(function ($product) {
            // Optionally regenerate slug if the name changes
            if ($product->isDirty('name')) {
                $product->slug = Str::slug($product->name);
            }
        });
    }

    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }
    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id');
    }

    public function reviews()
    {
        return $this->hasMany(ProductReview::class);
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
