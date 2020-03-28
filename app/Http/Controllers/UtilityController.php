<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UtilityController extends Controller
{
    public function factorResponse($code,$message,$data="",$statusCode = 200)
    {
        if(!in_array($code,['000'])){
            $statusCode = 422;
        }
        return response()->json()->setStatusCode($statusCode)->setData([
            'response_code' => $code,
            'response_message' => $message,
            'data' => $data
        ]);
    }

    public function formatValidations($array)
    {
        $objTmp = (object) array('aFlat' => array());
        array_walk_recursive($array, @create_function('&$v, $k, &$t', '$t->aFlat[] = $v;'), $objTmp);
        $result = $objTmp->aFlat;
        array_pop($result);
        return $result;
    }

    public function responseCode($code)
    {
        $responses = array(
            '000' => 'Action Successful',                     
            '007' => 'Invalid Parameter',  
            '008' => 'Crendtials Invaid',        
            '011' => 'Account is not Activated',        
            '009' => 'Invalid Reg type',          
            '011' => 'Organization does not Exist',          
            '012' => 'Badge does not Exist',          
        );
        return $responses[$code];
    }
}
