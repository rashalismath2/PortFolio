<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendContactMessage extends Mailable
{
    use Queueable, SerializesModels;

    
    public $name;
    public $email;
    public $message;

    public function __construct($name,$email,$message)
    {
        $this->name=$name;
        $this->email=$email;
        $this->message=$message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('rashalismath@gmail.com')
        ->view('emails.messagerecieved')
        ->subject("Hi from Ismath :)")
        ->replyTo("rashalismath@gmail.com");
    }
}
