<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventTicket extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'type',
        'price',
        'quantity',
        'sold'
    ];

    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }

    public function orderItems()
    {
        return $this->hasMany(TicketOrderItem::class, 'ticket_id');
    }

    // Optional: convenience accessor for all related orders through order items
    public function orders()
    {
        return $this->hasManyThrough(
            TicketOrder::class,
            TicketOrderItem::class,
            'ticket_id',          // Foreign key on ticket_order_items
            'id',                 // Foreign key on ticket_orders
            'id',                 // Local key on event_tickets
            'ticket_order_id'     // Local key on ticket_order_items
        );
    }
}