<?php

namespace App\Http\Controllers;

use App\State;
use Illuminate\Http\Request;

class APIController extends Controller
{
    public function __construct()
    {
        $this->factorResponse = app('App\Http\Controllers\UtilityController');
    }
    
    public function getStates()
    {
        $states = State::orderBy('total_case','DESC')->get();
        return $this->factorResponse->factorResponse(
            '000',$this->factorResponse->responseCode('000'),$states
        );
    }
    public function activeCases()
    {
        $states = State::orderBy('total_case','DESC')->where('total_case','>','0')->get();
        return $this->factorResponse->factorResponse(
            '000',$this->factorResponse->responseCode('000'),$states
        );
    }
}
