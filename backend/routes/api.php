<?php

use App\Http\Controllers\BusStopController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::controller(BusStopController::class)->prefix('bus-stops')->group(function () {
        Route::get('/', 'index');
        Route::get('/{bus_stop_num}', 'show');
    });
});
