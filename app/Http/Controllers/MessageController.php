<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\message;

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


        $message=new Message();
        $message->name=$request->name;
        $message->email=$request->email;
        $message->message=$request->message;
        $message->create();

        return response()->json(["message"=>"message created"]);
    }
}
