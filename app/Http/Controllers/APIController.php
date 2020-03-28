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

    public function stats(Request $request)
    {
        $states = State::orderBy('id','DESC');
        if(!empty($request->state)){
            $states->where(['id' => $request->state]);
        }
        $result = [
            'total_cases' => $states->sum('total_case'),
            'total_deaths' => $states->sum('deaths'),
            'total_recoveries' => $states->sum('recoveries'),
            'total_active_cases' => $states->sum('active_cases'),
        ];
        return $this->factorResponse->factorResponse(
            '000',$this->factorResponse->responseCode('000'),$result
        );
    }
}
