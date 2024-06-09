<?php

namespace App\Http\Controllers;

use App\Http\Requests\BusStopRequest;
use App\Models\BusStopBus;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class BusStopController extends Controller
{
    public function index(BusStopRequest $request)
    {
        extract($request->validated());

        $busStops = DB::select(
            'call CalDistance(?, ?, ?, ?)',
            [
                $lat,
                $lng,
                config('busstop.max_bus_stops_distance_to_retrieve_in_km'),
                config('busstop.max_bus_stops_to_return'),
            ]
        );

        return response()->json($busStops);
    }

    public function show(string $busStopNum)
    {
        $buses = BusStopBus::where('busStopNum', $busStopNum)
            ->orderBy('busNum')
            ->get();

        $this->mockArrivals($buses);

        return response()->json($buses);
    }

    // mock bus arrivals for 1st, 2nd, 3rd incoming bus
    private function mockArrivals(Collection $busStopBus)
    {
        $busStopBus->map(function ($busStop) {
            $firstArrival = rand(0, 10);
            $secondArrival = $firstArrival + rand(1, 5);
            $thirdArrival = $secondArrival + rand(1, 5);
            $busStop['arrivals'] = [$firstArrival, $secondArrival, $thirdArrival];

            return $busStop;
        });
    }
}
