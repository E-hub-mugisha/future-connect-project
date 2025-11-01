<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TicketOrderItem extends Model
{
    protected $fillable = ['ticket_order_id', 'ticket_id', 'quantity', 'price', 'attendee_name'];

    public function order()
    {
        return $this->belongsTo(TicketOrder::class, 'ticket_order_id');
    }

    public function ticket()
    {
        return $this->belongsTo(EventTicket::class);
    }
    public function codes()
    {
        return $this->hasMany(TicketCode::class, 'order_item_id'); // correct column
    }
}
