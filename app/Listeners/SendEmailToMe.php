<?php

namespace App\Listeners;

use App\Events\SendEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use Illuminate\Support\Facades\Mail;


use App\Mail\SendContactMessageToMe;

class SendEmailToMe
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  SendEmail  $event
     * @return void
     */
    public function handle(SendEmail $event)
    {
        Mail::to("rashalismath@gmail.com")
        ->send(new SendContactMessageToMe(
            $event->request->name,
            $event->request->email,
            $event->request->message
        ));
    }
}
