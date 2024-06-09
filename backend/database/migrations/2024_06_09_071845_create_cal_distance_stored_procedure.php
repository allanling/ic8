<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::unprepared(
            'CREATE PROCEDURE CalDistance(
                IN `startLat` DOUBLE, 
                IN `startLng` DOUBLE,
                IN `maxDistance` INT,
                IN `maxResult` INT
            )
            BEGIN
                SELECT name, busStopNum,
                ROUND(SQRT( POW(69.1 * (lat - startLat) , 2) + POW(69.1 * (startLng - lng) * COS(lat / 57.3) , 2)), 2) AS distance
                FROM bus_stops 
                HAVING distance < maxDistance
                ORDER BY distance
                LIMIT maxResult;
            END;'
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared(
            'DROP PROCEDURE IF EXISTS CalDistance;'
        );
    }
};
