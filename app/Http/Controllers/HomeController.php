<?php

namespace App\Http\Controllers;

use App\State;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['total_cases'] = State::sum('total_case');
        $data['total_deaths'] = State::sum('deaths');
        $data['total_recoveries'] = State::sum('recoveries');
        $data['total_active_cases'] = State::sum('active_cases');
        $data['states'] = State::pluck('name','id');
        return view('home',$data);
    }

    public function addCase(Request $request)
    {
        $request->validate([
            'number' => 'required|numeric',
            'type' => 'required',
            'status' => 'required',
            'status' => 'required',
        ]);
    }
}
