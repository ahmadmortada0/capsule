<?php

namespace App\Http\Controllers;
use  App\Services\CapsuleService;
use Illuminate\Http\Request;

class CapsuleController extends Controller


{
    function getUserCapsule(){
        $capsule=CapsuleService::getUserCapsule();

        if($capsule)return $this->responseJSON($capsule);
        return $this->responseJSON(null,"notfound",404);
        
    }
    function getCapsule($id){
        $capsule=CapsuleService::getCapsule($id);

        if($capsule)return $this->responseJSON($capsule);
        return $this->responseJSON(null,"notfound",404);
        
    }
    function getCapsulebyPrivacy(Request $request){
        $capsule=CapsuleService::getCapsuleByPrivacy($request);
        
        if($capsule)return $this->responseJSON($capsule);
        return $this->responseJSON(null,"notfound",404);
        
    }
   
    function createCapsule(Request $request){
        $capsule = CapsuleService::createCapsule($request);
        if($capsule) return $this->responseJSON($capsule);
            return $this->responseJSON(null,"notfound",404);
    }
    
    function surpriseCapsule(Request $request){
            $capsule = CapsuleService:: surpriseCapsule($request);
            if($capsule) return $this->responseJSON($capsule);
            return $this->responseJSON(null,"notfound",404);
       
    }
    function unsurpriseCapsule($id){
            $capsule = CapsuleService:: unsurpriseCapsule($id);
            if($capsule) return $this->responseJSON($capsule);
            return $this->responseJSON(null,"notfound",404);
       
    }
    function downloadCapsule(int $id){
            $capsule = CapsuleService::downloadCapsule($id);
            if($capsule) return $this->responseJSON($capsule);
            return $this->responseJSON(null,"Failed to download",404);
        }
}