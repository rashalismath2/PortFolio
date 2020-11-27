<?php

namespace App\Listeners;

use App\Events\SendEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use App\Mail\SendContactMessage;
use Illuminate\Support\Facades\Mail;

class SendEmailToTheClient
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
        Mail::to($event->request->email)
        ->send(new SendContactMessage(
            $event->request->name,
            $event->request->email,
            $event->request->message
        ));
    }
}
