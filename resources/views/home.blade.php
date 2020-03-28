@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-primary o-hidden h-100">
                <div class="card-body">
                    <div class="card-body-icon">
                        <i class="fa fa-fw fa-comments"></i>
                    </div>
                    <div class="mr-5">{{$total_cases}} Total Cases</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                        <i class="fa fa-angle-right"></i>
                    </span>
                </a>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-danger o-hidden h-100">
                <div class="card-body">
                    <div class="card-body-icon">
                        <i class="fa fa-fw fa-list"></i>
                    </div>
                    <div class="mr-5">{{$total_deaths}} Deaths</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                        <i class="fa fa-angle-right"></i>
                    </span>
                </a>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-success o-hidden h-100">
                <div class="card-body">
                    <div class="card-body-icon">
                        <i class="fa fa-fw fa-shopping-cart"></i>
                    </div>
                    <div class="mr-5">{{$total_recoveries}} Discharged</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                        <i class="fa fa-angle-right"></i>
                    </span>
                </a>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-warning o-hidden h-100">
                <div class="card-body">
                    <div class="card-body-icon">
                        <i class="fa fa-fw fa-support"></i>
                    </div>
                    <div class="mr-5">{{$total_active_cases}} Active Cases!</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                        <i class="fa fa-angle-right"></i>
                    </span>
                </a>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>
                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Add New Case
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add New Case</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {!!Form::open(['url' => 'add-new-case'])!!}
            <div class="modal-body">
                <div class="form-group">
                    <label>Number</label>                                
                    {!!Form::text('number','',['class' => 'form-control','required autofocus'])!!}
                </div>
                <div class="form-group">
                    <label>Type</label>                                
                    {!!Form::select('type',['unknown' => 'Unknown','index' => 'Index','contact' => 'Contact'],'',['class' => 'form-control','required autofocus'])!!}
                </div>
                <div class="form-group">
                    <label>Status</label>                                
                    {!!Form::select('status',['active' => 'Active','tracing' => 'Tracing','recovered' => 'Recovered','death' => 'Death'],'',['class' => 'form-control','required autofocus'])!!}
                </div>
                <div class="form-group">
                    <label>State</label>                                
                    {!!Form::select('state_id',$states,'',['class' => 'form-control','required autofocus'])!!}
                </div>
                <div class="form-group">
                    <label>Date</label>                                
                    {!!Form::date('created_at','',['class' => 'form-control','required autofocus'])!!}
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
        {!!Form::close()!!}
      </div>
    </div>
  </div>
@endsection