<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BusStopBus extends Model
{
    public function busStop(): BelongsTo
    {
        return $this->belongsTo(BusStop::class, 'busStopNum', 'busStopNum');
    }
}
