<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_name',
        'customer_email',
        'customer_phone',
        'total_amount',
        'transaction_id',
        'payment_status'
    ];

    public function items()
    {
        return $this->hasMany(TicketOrderItem::class);
    }

    public function payment()
    {
        return $this->hasOne(TicketPayment::class);
    }
}
