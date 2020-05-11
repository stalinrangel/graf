<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class Agenda_diasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todas las Agenda_diases
        $Agenda_diases = \App\Agenda_dias::all();

        if(count($Agenda_diases) == 0){
            return response()->json(['error'=>'No existen Agenda_diases.'], 404);          
        }else{
            return response()->json(['Agenda_diases'=>$Agenda_diases], 200);
        } 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Calificar el pedido
        if($Agenda_dias=\App\Agenda_dias::create($request->all())){

           return response()->json(['message'=>'Pedido calificado con éxito.',
             'categoria'=>$Agenda_dias], 200);
        }else{
            return response()->json(['error'=>'Error al crear la Agenda_dias.'], 500);
        }

    }

    public function enviarNotificacion($token_notificacion, $msg, $pedido_id = 'null', $accion = 0, $obj = 'null')
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://service24.app/alinstanteAPI/public/onesignal.php?contenido=".$msg."&token_notificacion=".$token_notificacion."&pedido_id=".$pedido_id."&accion=".$accion."&obj=".$obj);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',
            'Authorization: Basic NGMxNWE5YTItNjM2OC00NGNlLWE0NTYtYzNlNzg3NGI3OWNm'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, FALSE);
        curl_setopt($ch, CURLOPT_POST, TRUE);
        ///curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

        $response = curl_exec($ch);
        curl_close($ch);
    }
    public function enviarNotificacionCliente($token_notificacion, $msg, $pedido_id = 'null', $accion = 0, $obj = 'null')
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://service24.app/alinstanteAPI/public/onesignalclientes.php?contenido=".$msg."&token_notificacion=".$token_notificacion."&pedido_id=".$pedido_id."&accion=".$accion."&obj=".$obj);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',
            'Authorization: Basic MDNkOGZlNmMtYzlhZC00MWIzLWFlNDktOTQyOGQzMDJhYWU3'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, FALSE);
        curl_setopt($ch, CURLOPT_POST, TRUE);
        //$fields = array('contenido'=>$msg);
        //curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        //curl_setopt($ch, CURLOPT_POSTFIELDS, "accion=t");
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

        $response = curl_exec($ch);
        curl_close($ch);

        //return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //cargar una Agenda_dias
        $Agenda_dias = \App\Agenda_dias::find($id);

        if(count($Agenda_dias)==0){
            return response()->json(['error'=>'No existe la Agenda_dias con id '.$id], 404);          
        }else{
            return response()->json(['Agenda_dias'=>$Agenda_dias], 200);
        } 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Comprobamos si la Agenda_dias que nos están pasando existe o no.
        $Agenda_dias = \App\Agenda_dias::find($id);

        if(count($Agenda_dias)==0){
            return response()->json(['error'=>'No existe la Agenda_dias con id '.$id], 404);          
        }

        // Listado de campos recibidos teóricamente.
        $dia=$request->input('dia');
        $horas=$request->input('horas');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($dia != null && $dia!='')
        {
            $Agenda_dias->dia = $dia;
            $bandera=true;
        }

        if ($horas != null && $horas!='')
        {
            $Agenda_dias->horas = $horas;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($Agenda_dias->save()) {
                return response()->json(['message'=>'Agenda_dias editada con éxito.',
                    'Agenda_dias'=>$Agenda_dias], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar la Agenda_dias.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato a la la Agenda_dias.'],409);
        }            
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Comprobamos si el pedido que nos están pasando existe o no.
        $Agenda_dias=\App\Agenda_dias::find($id);

        if(count($Agenda_dias)==0){
            return response()->json(['error'=>'No existe la Agenda_dias con id '.$id], 404);          
        }
        
        // Eliminamos la Agenda_dias del pedido.
        $Agenda_dias->delete();

        return response()->json(['message'=>'Se ha eliminado correctamente la Agenda_dias.'], 200);
    }
}
