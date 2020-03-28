<?php

namespace App\Http\Controllers;

use App\Cases;
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
        // dd($request->all());
        //create case
        Cases::create($request->all());
        $state = State::find($request->state_id);
        $total_case = $state->total_case;
        $index_cases = $state->index_cases;
        $active_cases = $state->active_cases;
        $recoveries = $state->recoveries;
        $index_cases = $state->index_cases;
        $deaths = $state->deaths;
        if($request->status == 'active'){
            $total_case = $state->total_case + $request->number;
            $active_cases = $state->active_cases + $request->number;
        }elseif($request->status == 'recovered'){
            $active_cases = $state->active_cases - $request->number;
            $recoveries = $state->recoveries + $request->number;        
        }elseif($request->status == 'death'){
            $active_cases = $state->active_cases - $request->number;
            $deaths = $state->death + $request->number;
        }
        if($request->type == 'index'){
            $index_cases = $state->index_cases + $request->number;
        }
        $state->update([
            'total_case' =>  $total_case,
            'index_cases' =>  $index_cases,
            'recoveries' =>  $recoveries,
            'active_cases' =>  $active_cases,
            'deaths' =>  $deaths,
            'index_cases' =>  $index_cases,
        ]);
        $request->session()->flash('status', 'Casee was added');
        return redirect()->back();
    }
}
