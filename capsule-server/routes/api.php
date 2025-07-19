<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CapsuleController;

Route::group(["prefix" =>"v0.1"], function(){
     Route::post("/getCapsule", [CapsuleController::class, "getCapsule"]);
            Route::post("/getCapsuleByPrivacy", [CapsuleController::class, "getCapsuleByPrivacy"]);
            Route::post("/createCapsule", [CapsuleController::class, "createCapsule"]);
            Route::post("/surpriseCapsule", [CapsuleController::class, "surpriseCapsule"]);
            
    Route::group(["middleware" => "auth:api"], function(){
        //AUTHENTICATED APIs
        Route::group(["prefix" => "user"], function(){
           
        });
    });

    //UNAUTHENTICATED APIs
    Route::group(["prefix" => "guest"], function(){
        Route::post("/login", [AuthController::class, "login"]);
        Route::post("/register", [AuthController::class, "register"]);
    });
});