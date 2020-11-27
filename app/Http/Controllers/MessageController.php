<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\message;


use App\Events\SendEmail;

class MessageController extends Controller
{
    public function new(Request $request){


        $validator = Validator::make($request->all(), [
            "email"=>"required|email",
            "name"=>"required",
            "message"=>"required",
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(),500);
        }

        event(new SendEmail($request));

        return response()->json(["Your message has been sent successfully"]);

    }
}
