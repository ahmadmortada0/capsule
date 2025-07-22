<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CapsuleController;

Route::group(["prefix" =>"v0.1"], function(){
    Route::group(["middleware" => "auth:api"], function(){
        //AUTHENTICATED APIs
        Route::group(["prefix" => "user"], function(){
            Route::get("/getUserCapsule", [CapsuleController::class, "getUserCapsule"]);
            Route::post("/createCapsule", [CapsuleController::class, "createCapsule"]);
            Route::post("/surpriseCapsule", [CapsuleController::class, "surpriseCapsule"]);
            Route::get("/unsurpriseCapsule/{id?}", [CapsuleController::class, "unsurpriseCapsule"]);
            Route::get("/downloadCapsule/{id?}", [CapsuleController::class, "downloadCapsule"]);
            
            Route::get("/getCapsule/{id?}", [CapsuleController::class, "getCapsule"]);
            Route::get("/getCapsuleByPrivacy", [CapsuleController::class, "getCapsuleByPrivacy"]);
        });
    });

    //UNAUTHENTICATED APIs
    Route::group(["prefix" => "guest"], function(){
        Route::post("/login", [AuthController::class, "login"]);
        Route::post("/register", [AuthController::class, "register"]);
    });
});