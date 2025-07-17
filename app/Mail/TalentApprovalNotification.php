<?php

namespace App\Mail;

use App\Models\Talent;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TalentApprovalNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $talent;

    public function __construct(Talent $talent)
    {
        $this->talent = $talent;
    }

    public function build()
    {
        return $this->subject('Talent Approved Notification')
                    ->view('emails.talent-approval-notification');
    }
}
