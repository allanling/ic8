<?php

namespace Database\Seeders;

use App\Models\BusStop;
use Illuminate\Database\Seeder;

class BusStopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BusStop::factory(10)->create();
    }
}
