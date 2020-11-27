<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendContactMessageToMe extends Mailable
{
    use Queueable, SerializesModels;

     
    public $name;
    public $email;
    public $text;

    public function __construct($name,$email,$text)
    {
        $this->name=$name;
        $this->email=$email;
        $this->text=$text;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {   
        return $this->from('ismathlifehacks@gmail.com')
        ->view('emails.messageforme')
        ->subject("Hi from Ismath :)")
        ->replyTo("rashalismath@gmail.com");
    }
}
