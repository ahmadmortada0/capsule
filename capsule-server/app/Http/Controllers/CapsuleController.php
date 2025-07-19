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
    function getCapsulebyPrivacy(Request $request){
        $capsule=CapsuleService::getCapsuleByPrivacy($request);

       
        
    }
   
    function createCapsule(Request $request){
        $capsule = CapsuleService::createCapsule($request);
        if($capsule) return $this->responseJSON($capsule);
            return $this->responseJSON(null,"notfound",404);
    }
    }

