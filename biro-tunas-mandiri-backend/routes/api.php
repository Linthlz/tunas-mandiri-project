<?php
use App\Http\Controllers\Api\KonsultasiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();

})->middleware('auth:sanctum');
Route::apiResource('konsultasi', KonsultasiController::class)
    ->names('konsultasi'); 