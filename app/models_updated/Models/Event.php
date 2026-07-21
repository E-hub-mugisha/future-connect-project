<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'organizer_id',
        'title',
        'description',
        'type',
        'start_time',
        'end_time',
        'venue',
        'capacity',
        'image'
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
    ];

    public function organizer()
    {
        return $this->belongsTo(User::class, 'organizer_id');
    }

    public function tickets()
    {
        return $this->hasMany(EventTicket::class, 'event_id');
    }

    public function items()
    {
        return $this->hasMany(TicketOrderItem::class, 'ticket_id');
    }

    public function orders()
    {
        return $this->hasManyThrough(
            TicketOrder::class,
            TicketOrderItem::class,
            'ticket_id',        // FK on ticket_order_items
            'id',               // FK on ticket_orders
            'id',               // PK on event_tickets
            'ticket_order_id'   // FK on ticket_order_items
        );
    }
}
