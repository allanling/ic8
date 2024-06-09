<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BusStop extends Model
{
    use HasFactory;

    public function buses(): HasMany
    {
        return $this->hasMany(BusStopBus::class, 'busStopNum', 'busStopNum');
    }
}
