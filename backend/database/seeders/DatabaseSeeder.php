<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $apiUser = User::factory()->create([
            'name' => 'Api User',
            'email' => 'api@test.com',
        ]);
        $token = $apiUser->createToken('apiToken');
        [$key, $bearer] = explode('|', $token->plainTextToken);
        $this->generateReactEnv($bearer);

        $this->call(BusStopSeeder::class);
    }

    private function generateReactEnv(string $bearer) 
    {
        $strArr[] = "REACT_APP_API_TOKEN=$bearer";
        $strArr[] = "REACT_APP_USER_LAT=1.129083";
        $strArr[] = "REACT_APP_USER_LNG=100.295648";
        Storage::disk('local')->put('react.env', implode("\n", $strArr));
    }
    
}
