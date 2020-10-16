<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PayController extends Controller
{
    public function pay(Request $request)
    {
        $curl = curl_init();
        $payload = array( "payment"=> array(
                                    "order"=> "12132",
                                    "amount"=> "1000",
                                    "currency"=> "EUR",
                                    "originalIp"=> "34.235.156.164",
                                    "methodId"=> "1",
                                    "terminal"=> "17564",
                                    "secure"=> "1","idUser"=> "35709262",
                                    "tokenUser"=> "VlROTmZDaDZXbFJ",
                                    "productDescription"=> "prueba descrip masa",
                                    "userInteraction"=> "1"
                                )
                        );
        
        $campos='{"payment": {"order": "12","amount": "100","currency": "EUR","originalIp": "34.235.156.164","methodId": "1","terminal": "17564","secure": "1","idUser": "35709262","tokenUser": "VlROTmZDaDZXbFJ","productDescription": "prueba descrip masa","userInteraction": "1","urlOk": "https://www.paycomet.com/url-ok","urlKo": "https://www.paycomet.com/url-ko","merchantData": {"customer": {"email": "massage.graf.app@gmail.com"}}}}';
       // $campos=json_encode($campos);
        curl_setopt_array($curl, array(
          CURLOPT_URL => "https://rest.paycomet.com/v1/payments",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "POST",
          CURLOPT_POSTFIELDS =>json_encode($payload),
          CURLOPT_HTTPHEADER => array(
            "PAYCOMET-API-TOKEN: <API Key>",
            "PAYCOMET-API-TOKEN: bbd96aad13137031819a9f75deca7d4b82e79376"
          ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;
        echo json_encode($payload);
    }

    public function carinfo(Request $request)
    {
        $curl = curl_init();

        $payload = array( "idUser"=> 35709262,"tokenUser"=> VlROTmZDaDZXbFJ,"terminal"=> 17564 );

        curl_setopt_array($curl, array(
          CURLOPT_URL => "https://rest.paycomet.com/v1/cards/info",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "POST",
          CURLOPT_POSTFIELDS =>$payload,
          CURLOPT_HTTPHEADER => array(
            "PAYCOMET-API-TOKEN: <API Key>",
            "PAYCOMET-API-TOKEN: bbd96aad13137031819a9f75deca7d4b82e79376"
          ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;
        echo 1;
    }

}

