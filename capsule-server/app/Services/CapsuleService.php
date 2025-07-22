<?php

namespace App\Services;
use App\Models\Capsule;
use Illuminate\Http\Request;
use Stevebauman\Location\Facades\Location;
use Stevebauman\Location\Position;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use ZipArchive; 

class CapsuleService
{
    static function getUserCapsule(){
     $capsule =auth()->id();
    
     $capsules = Capsule::where('userId', $capsule)->get();

    return $capsules->isNotEmpty() ? $capsules : null;
    }

    static function getCapsule($id){
        $capsule= Capsule::find($id);
        return $capsule;
    }

    static function getCapsuleByPrivacy(){
        $capsules = Capsule::where('privacy', "public")->where('is_surprise', false)->get();
        return $capsules->isNotEmpty() ? $capsules : null;
    }

    // static function getLocation(Request $request){
    //          $ip = $request->ip();
    //         //  $request->ip();
    //      $position = Location::get($ip);
    //     //  dd($position);
    //      return $position && is_object($position) ? $position->countryName ?? 'Unknown' : 'Unknown';

    // }

    static function createCapsule(Request $request){
       $position = Location::get($request->ip);

if ($position && is_object($position)) {
    $location = $position->countryName ?? 'Unknown';
} else {
    $location = 'Unknown';
}
        $capsule = new Capsule;
        $capsule->userId = auth()->id();
        $capsule->message = $request->message;
        
    if ($request->hasFile('image')) {
        $imageName = 'images/' . Str::uuid() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);
        $capsule->image = $imageName; 
    }

    
    if ($request->hasFile('voice')) {
        $voiceName = 'voices/' . Str::uuid() . '.' . $request->voice->extension();
        $request->voice->move(public_path('voices'), $voiceName);
        $capsule->voice = $voiceName; 
    }

        $capsule->location = $location ;
        $capsule->mood = $request->mood;
        $capsule->privacy = $request->privacy;
        $capsule->revealdate = null;
        $capsule->save();
        return $capsule;
    }

    static function  surpriseCapsule(Request $request){

        $capsule = Capsule::find($request->id);
        $check= $capsule->is_surprise;
        if($capsule&&!$check){
        $capsule->is_surprise = true;
        $capsule->revealdate = $request->revealdate;
        $capsule->save();

        return $capsule;
        }
            return null;
        }

    static function downloadCapsule(int $id) {
        $capsule = Capsule::find($id);
        return Capsule::download('file.jpg');
    }
}
