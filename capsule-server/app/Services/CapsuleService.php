<?php

namespace App\Services;
use App\Models\Capsule;
use Illuminate\Http\Request;

class CapsuleService
{
    static function getCapsule(Request $request){

    
        $capsules = Capsule::where('userId', $request->userId)->get();

        return $capsules->isNotEmpty() ? $capsules : null;
    }
}
