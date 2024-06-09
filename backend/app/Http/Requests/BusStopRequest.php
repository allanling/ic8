<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BusStopRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
        ];
    }
}
