<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AgendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todas las Agendaes
        $Agendaes = \App\Agenda::all();

        if(count($Agendaes) == 0){
            return response()->json(['error'=>'No existen Agendaes.'], 404);          
        }else{
            return response()->json(['Agendaes'=>$Agendaes], 200);
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
        if($Agenda=\App\Agenda::create($request->all())){

           return response()->json(['message'=>'agenda agregada con éxito.',
             'categoria'=>$Agenda], 200);
        }else{
            return response()->json(['error'=>'Error al crear la Agenda.'], 500);
        }

    }

    public function paynotify(Request $request)
    {
        //Calificar el pedido
        if($Agenda=\App\Paynotify::create($request->all())){

           return response()->json(['message'=>'paynotify agregada con éxito.',
             'categoria'=>$Agenda], 200);
        }else{
            return response()->json(['error'=>'Error al crear la paynotify.'], 500);
        }

    }

    public function firma(Request $request)
    {
        //cargar todas las Agendaes
        $MERCHANT_MERCHANTCODE='5ksvfm01';
        $MERCHANT_TERMINAL='17564'; 
        $OPERATION='107';
        $MERCHANT_ORDER='1'; 
        $PASSWORD='LzeFvAEk769B0Zxn5iVG';
        $md5=md5($PASSWORD);
        $string= $MERCHANT_MERCHANTCODE . $MERCHANT_TERMINAL . $OPERATION . $MERCHANT_ORDER . md5($PASSWORD);    
        $firma = hash("sha512",$string);

        if(count($firma) == 0){
            return response()->json(['error'=>'No existen firma.'], 404);          
        }else{
            return response()->json(['firma'=>$firma,'md5'=>$md5,'string'=>$string], 200);
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
        //cargar una Agenda
        $Agenda = \App\Agenda::find($id);

        if(count($Agenda)==0){
            return response()->json(['error'=>'No existe la Agenda con id '.$id], 404);          
        }else{
            return response()->json(['Agenda'=>$Agenda], 200);
        } 
    }

    public function show_usuario($id)
    {
        //cargar una Agenda
        $Agenda = \App\Agenda::where('usuario_id',$id)->first();
        $Agenda->dias=json_decode($Agenda->dias);
        $Agenda->horas=json_decode($Agenda->horas);
        if(count($Agenda)==0){
            return response()->json(['error'=>'No existe la Agenda con id '.$id], 404);          
        }else{
            return response()->json(['Agenda'=>$Agenda], 200);
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
        // Comprobamos si la Agenda que nos están pasando existe o no.
        $Agenda = \App\Agenda::find($id);

        if(count($Agenda)==0){
            return response()->json(['error'=>'No existe la Agenda con id '.$id], 404);          
        }

        // Listado de campos recibidos teóricamente.
        $dias=$request->input('dias');
        $horas=$request->input('horas');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($dias != null && $dias!='')
        {
            $Agenda->dias = $dias;
            $bandera=true;
        }

        if ($horas != null && $horas!='')
        {
            $Agenda->horas = $horas;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($Agenda->save()) {
                return response()->json(['message'=>'Agenda editada con éxito.',
                    'Agenda'=>$Agenda], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar la Agenda.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato a la la Agenda.'],409);
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
        $Agenda=\App\Agenda::find($id);

        if(count($Agenda)==0){
            return response()->json(['error'=>'No existe la Agenda con id '.$id], 404);          
        }
        
        // Eliminamos la Agenda del pedido.
        $Agenda->delete();

        return response()->json(['message'=>'Se ha eliminado correctamente la Agenda.'], 200);
    }

    public function miAgenda($usuario_id)
    {

        $aux = [];

        //cargar las agendas de un usuario_id
        $Agenda = \App\Agenda::where('usuario_id', $usuario_id)->get();

        if (count($Agenda) > 0) {
            array_push($aux, $Agenda[0]);
        }

        return response()->json(['Agenda'=>$aux], 200); 
    }

    public function miAgendaDiaria($usuario_id, $dia)
    {
        $aux = [];

        //cargar la agenda de un usuario_id en un dia espcifico
        $Agenda = \App\Agenda_dias::where('usuario_id', $usuario_id)
            ->where('dia', $dia)
            ->get();

        if (count($Agenda) > 0) {
            array_push($aux, $Agenda[0]);
        }

        return response()->json(['Agenda'=>$aux], 200); 
    }

    public function storeAgendaDiaria(Request $request)
    {
        //Calificar el pedido
        if($Agenda=\App\Agenda_dias::create($request->all())){

           return response()->json(['message'=>'agenda agregada con éxito.',
             'categoria'=>$Agenda], 200);
        }else{
            return response()->json(['error'=>'Error al crear la Agenda.'], 500);
        }

    }

    public function updateAgendaDiaria(Request $request, $id)
    {
        // Comprobamos si la Agenda que nos están pasando existe o no.
        $Agenda = \App\Agenda_dias::find($id);

        if(count($Agenda)==0){
            return response()->json(['error'=>'No existe la Agenda con id '.$id], 404);          
        }

        // Listado de campos recibidos teóricamente.
        $dia=$request->input('dia');
        $horas=$request->input('horas');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($dia != null && $dia!='')
        {
            $Agenda->dia = $dia;
            $bandera=true;
        }

        if ($horas != null && $horas!='')
        {
            $Agenda->horas = $horas;
            $bandera=true;
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($Agenda->save()) {
                return response()->json(['message'=>'Agenda editada con éxito.',
                    'Agenda'=>$Agenda], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar la Agenda.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato a la la Agenda.'],409);
        }            
        
    }

}
