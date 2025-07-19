<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Common\AuthController;
use App\Http\Controllers\User\TaskController;
use App\Http\Controllers\Admin\TaskController as TaskAdminController;

Route::group(["prefix" =>"v0.1"], function(){
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