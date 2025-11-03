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

    public function orders()
    {
        return $this->hasManyThrough(
            \App\Models\TicketOrder::class,  // The final model
            \App\Models\TicketOrderItem::class,  // The intermediate model
            'ticket_id',   // Foreign key on ticket_order_items table
            'id',          // Foreign key on ticket_orders table
            'id',          // Local key on event_tickets table
            'ticket_order_id' // Local key on ticket_order_items table
        );
    }
}
