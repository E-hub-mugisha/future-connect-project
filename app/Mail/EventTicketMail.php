<?php

namespace App\Mail;

use App\Models\TicketOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class EventTicketMail extends Mailable
{
    use Queueable, SerializesModels;

    public $order;
    public $pdfs;

    public function __construct(TicketOrder $order, array $pdfs)
    {
        $this->order = $order;
        $this->pdfs = $pdfs;
    }

    public function build()
    {
        $email = $this->subject('Your Event Tickets - ' . $this->order->customer_name)
            ->view('emails.event-tickets');

        foreach ($this->pdfs as $pdf) {
            $email->attachData($pdf['content'], $pdf['filename']);
        }

        return $email;
    }
}
