<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bus_stop_buses', function (Blueprint $table) {
            $table->id();
            $table->integer('busStopNum');
            $table->string('busNum');
            $table->timestamps();

            $table->foreign('busStopNum')->references('busStopNum')->on('bus_stops');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bus_stop_buses');
    }
};
