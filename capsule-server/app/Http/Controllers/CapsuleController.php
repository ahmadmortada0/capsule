<?php

namespace App\Http\Controllers;
use  App\Services\capsuleService;

use Illuminate\Http\Request;
class CapsuleController extends Controller
{
    function getCapsule(Request $request){
        $capsule=Capsule::all()->where("user_id",$request["user_id"]);
        return $this->responseJSON($capsule);
        
    }
}
