<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TicketOrderSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();
        $eventTickets = DB::table('event_tickets')->get();

        $attendees = [
            'Sandrine Mutesi', 'Herve Munyaneza', 'Grace Nyiransabimana', 'Placide Bizimungu',
            'Providence Umuhire', 'Fiacre Ntagungira', 'Liliane Iribagiza', 'Olivier Rugamba',
            'Esperance Nirere', 'Justin Nsanzimana',
        ];

        foreach ($eventTickets as $i => $ticket) {
            $quantity = rand(1, 3);
            $total = $ticket->price * $quantity;

            $ticketOrderId = DB::table('ticket_orders')->insertGetId([
                'user_id' => $userIds[$i % count($userIds)],
                'customer_name' => $attendees[$i % count($attendees)],
                'customer_email' => Str::slug($attendees[$i % count($attendees)]) . '@gmail.com',
                'customer_phone' => '+25078' . rand(1000000, 9999999),
                'total_amount' => $total,
                'status' => $i % 3 === 0 ? 'pending' : 'confirmed',
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $itemId = DB::table('ticket_order_items')->insertGetId([
                'ticket_order_id' => $ticketOrderId,
                'ticket_id' => $ticket->id,
                'attendee_name' => $attendees[$i % count($attendees)],
                'quantity' => $quantity,
                'price' => $ticket->price,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::table('ticket_codes')->insert([
                'order_item_id' => $itemId,
                'code' => strtoupper('FC-TCK-' . Str::random(8)),
                'used' => $i % 4 === 0 ? 1 : 0,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
