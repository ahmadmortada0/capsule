<?php

namespace App\Services;
use App\Models\Capsule;
use Illuminate\Http\Request;
use Stevebauman\Location\Facades\Location;
use Stevebauman\Location\Position;

class CapsuleService
{
    static function getCapsule(Request $request){

    
        $capsules = Capsule::where('userId', $request->userId)->get();

        return $capsules->isNotEmpty() ? $capsules : null;
    }

    static function getCapsuleByPrivacy(Request $request){
        $capsules = Capsule::where('privacy', $request->privacy)->get();
        return $capsules->isNotEmpty() ? $capsules : null;
    }

    static function getLocation(Request $request){
             $ip = "212.110.88.45";
            //  $request->ip();
         $position = Location::get($ip);
        //  dd($position);
         return $position->countryName;
    }
    static function createCapsule(Request $request){
        $capsule = new Capsule;
        $capsule->userId = $request->userId;
        $capsule->message = $request->message;
        $capsule->image = $request->image; 
        $capsule->voice = $request->voice;
        $capsule->location = CapsuleService::getLocation($request);
        $capsule->mood = $request->mood;
        $capsule->privacy = $request->privacy;
        $capsule->is_surprise = $request->is_surprise;
        $capsule->revealdate = $request->revealdate;
        $capsule->save();
        return $capsule;
    }
    static function  surpriseCapsule(Request $request){
        $capsule = Capsule::find($request->$id);
        $surprise = $capsule->update(['isSurprise' => true , "revealdate"=>$request->revealdate]);
        $surprise->save();
        return $surprise;
        }
}
