<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ProjectAccountCreated extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct(
        public User $user,
        public string $password,
    ) {}

    public function build(): self
    {
        return $this->subject('Your FutureConnect account has been created')
            ->view('emails.project-account-created')
            ->with([
                'user'     => $this->user,
                'password' => $this->password,
                'loginUrl' => route('login'),
            ]);
    }
}