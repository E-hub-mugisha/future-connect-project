<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_number',
        'user_id',
        'customer_name',
        'customer_email',
        'customer_phone',
        'province',
        'district',
        'sector',
        'cell',
        'shipping_address',
        'payment_method',
        'payment_phone',
        'subtotal',
        'total_amount',
        'status',
        'notes',
        'confirmed_at',
        'confirmed_by',
    ];

    protected static function booted()
    {
        static::creating(function ($order) {
            $order->order_number = $order->order_number ?? 'ORD-' . strtoupper(Str::random(8));
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }

    // True if placed without an account
    public function isGuestOrder(): bool
    {
        return is_null($this->user_id);
    }

    public function confirmedBy()
    {
        return $this->belongsTo(User::class, 'confirmed_by');
    }
}