<?php

namespace App\Http\Controllers;
use  App\Services\CapsuleService;
use Illuminate\Http\Request;
class CapsuleController extends Controller
{
    function getCapsule(Request $request){
        $capsule=CapsuleService::getCapsule($request);

        if($capsule)return $this->responseJSON($capsule);
        return $this->responseJSON(null,"notfound",404);
        
    }
}
