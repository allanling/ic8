<?php

namespace Database\Factories;

use App\Models\BusStop;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BusStop>
 */
class BusStopFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'busStopNum' => fake()->unique()->numberBetween(10000, 99999),
            'name' => fake()->unique()->streetName,
            'lat' => fake()->latitude(1, 1.3),
            'lng' => fake()->longitude(100, 100.3),
        ];
    }

    public function configure(): static
    {
        return $this->afterCreating(function (BusStop $busStop) {
            $busStop->buses()->createMany($this->mockBuses());
        });
    }

    private function mockBuses()
    {
        return collect(
            fake()->randomElements(['119', '174', '33', '176', '10', '999', '8'], rand(2, 6))
        )->map(fn ($num) => ['busNum' => $num]);
    }
}
