<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //cargar todas las cat
        $categorias = \App\Categoria::with('imagenes')->with('subcategorias')->get();

        if(count($categorias) == 0){
            return response()->json(['error'=>'No existen categorías.'], 404);          
        }else{
            return response()->json(['categorias'=>$categorias], 200);
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
        // Listado de campos recibidos teóricamente.
        //$nombre=$request->input('nombre'); 

        // Primero comprobaremos si estamos recibiendo todos los campos.
        if ( !$request->input('nombre') ||
            !$request->input('estado'))
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 422 Unprocessable Entity – [Entidad improcesable] Utilizada para errores de validación.
            return response()->json(['error'=>'Faltan datos necesarios para el proceso de alta.'],422);
        } 
        
        $aux = \App\Categoria::where('nombre', $request->input('nombre'))->get();
        if(count($aux)!=0){
           // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'Ya existe una categoría con ese nombre.'], 409);
        } 

        if($nuevaCategoria=\App\Categoria::create($request->all())){

            if ($request->input('imagenes')) {
                $imagenes = json_decode($request->input('imagenes'));
                for ($i=0; $i < count($imagenes) ; $i++) { 

                    $newImg=\App\ImagenCat::create([
                        'imagen'=>$imagenes[$i]->imagen,
                        'categoria_id'=>$nuevaCategoria->id,
                    ]);
                       
                }
            }

           return response()->json(['message'=>'Categoría creada con éxito.',
             'categoria'=>$nuevaCategoria], 200);
        }else{
            return response()->json(['error'=>'Error al crear la categoría.'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    /*public function show($id)
    {
        //cargar una cat
        //$categoria = \App\Categoria::with('subcategorias.productos.establecimiento')->find($id);

        $categoria = \App\Categoria::with('subcategorias')->find($id);

        if(count($categoria)==0){
            return response()->json(['error'=>'No existe la categoría con id '.$id], 404);          
        }else{

            $aux = [];

            for ($i=0; $i < count($categoria->subcategorias); $i++) { 

                $subcategoria_id = $categoria->subcategorias[$i]->id;

                $estbl = 
                \App\Establecimiento::with(['productos' => function ($query) use ($subcategoria_id){
                    $query->where('subcategoria_id', $subcategoria_id);
                }])->get();

                

                $categoria->subcategorias[$i]->establecimientos = [];
                for ($j=0; $j < count($estbl) ; $j++) { 
                    if (count($estbl[$j]->productos) > 0) {
                        //array_push($categoria->subcategorias[$i]->establecimientos, $estbl[$j]);
                        array_push($aux, $estbl[$j]);
                    }
                }
                    $categoria->subcategorias[$i]->establecimientos = $aux;
                    $aux = [];
                //return response()->json(['estbl'=>$estbl], 200);

            }

            
            return response()->json(['categoria'=>$categoria], 200);
        } 
    }*/

    
    public function show($id)
    {
        //cargar una cat
        $categoria = \App\Categoria::with(['subcategorias' => function ($query){
                    $query->where('estado', 'ON');
                }])->find($id);

        if(count($categoria)==0){
            return response()->json(['error'=>'No existe la categoría con id '.$id], 404);          
        }else{
             //return response()->json(['subcategorias'=>$categoria], 200);
            $aux = [];
            $subcatAux = [];

            $nowday = date('N');
            $nowhour = date('H');

            for ($i=0; $i < count($categoria->subcategorias); $i++) { 

                $subcategoria_id = $categoria->subcategorias[$i]->id;
                //whereRaw("created_at >= ? AND created_at <= ?", array($from->format('Y-m-d') ." 00:00:00", $to->format('Y-m-d')." 23:59:59"))
                
                //return response()->json(['now'=>$nowhour], 200); 
                $estbl = 
                \App\Establecimiento::with(['productos' => function ($query) use ($subcategoria_id){
                    $query->where('subcategoria_id', $subcategoria_id)
                        ->where('estado', 'ON');
                }])->where('estado', 'ON')->get();     

                $categoria->subcategorias[$i]->establecimientos = [];
                for ($j=0; $j < count($estbl) ; $j++) { 
                    //return response()->json(['estbl'=>$estbl], 200); 
                    if (count($estbl[$j]->productos) > 0) {
                        //array_push($aux, $estbl[$j]);
                        //return $nowday;
                        //return $nowhour;
                        if ($nowday==1) {
                            if ($nowhour >= $estbl[$j]->lunes_i && $nowhour <= $estbl[$j]->lunes_f) {
                                /*if ($estbl[$j]->nombre=='A QUI ME QUEDO') {
                                    return response()->json(['estbl[$j]->lunes_i'=>$estbl[$j],'nowday'=>$nowday,'nowhour'=>$nowhour], 200);
                                }*/
                                 
                                array_push($aux, $estbl[$j]);
                            }
                        }
                        else if ($nowday==2) {
                            if ($nowhour >= $estbl[$j]->martes_i && $nowhour <= $estbl[$j]->martes_f) {
                                array_push($aux, $estbl[$j]);
                            }
                        }
                        else if ($nowday==3) {
                            if ($nowhour >= $estbl[$j]->miercoles_i && $nowhour <= $estbl[$j]->miercoles_f) {
                                array_push($aux, $estbl[$j]);
                            }
                        }
                        else if ($nowday==4) {
                            if ($nowhour >= $estbl[$j]->jueves_i && $nowhour <= $estbl[$j]->jueves_f) {
                                array_push($aux, $estbl[$j]);
                            }
                        }
                        else if ($nowday==5) {
                            if ($nowhour >= $estbl[$j]->viernes_i&& $nowhour <= $estbl[$j]->viernes_f) {
                                array_push($aux, $estbl[$j]);
                            }
                        }
                        else if ($nowday==6) {
                            if ($nowhour >= $estbl[$j]->sabado_i && $nowhour <= $estbl[$j]->sabado_f) {
                                array_push($aux, $estbl[$j]);
                            }
                        }
                        else if ($nowday==7) {
                            if ($nowhour >=$estbl[$j]->domingo_i && $nowhour <=$estbl[$j]->domingo_f) {
                                array_push($aux, $estbl[$j]);
                            }
                        }
                    }
                }

                $categoria->subcategorias[$i]->establecimientos = $aux;

                $aux = [];
            }

            for ($i=0; $i < count($categoria->subcategorias); $i++) { 
                if (count($categoria->subcategorias[$i]->establecimientos)>0) {
                    array_push($subcatAux,$categoria->subcategorias[$i]);
                }
            }

            return response()->json(['subcategorias'=>$subcatAux], 200);
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
        // Comprobamos si la categoria que nos están pasando existe o no.
        $categoria=\App\Categoria::find($id);

        if (count($categoria)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe la categoría con id '.$id], 404);
        }      

        // Listado de campos recibidos teóricamente.
        $nombre=$request->input('nombre');
        $ingles=$request->input('ingles');
        //$imagen=$request->input('imagen');
        $estado=$request->input('estado');
        $catprincipales_id=$request->input('catprincipales_id');
        $subcategorias=$request->input('subcategorias');
        $imagenes=$request->input('imagenes');

        // Creamos una bandera para controlar si se ha modificado algún dato.
        $bandera = false;

        // Actualización parcial de campos.
        if ($nombre != null && $nombre!='')
        {
            $aux = \App\Categoria::where('nombre', $request->input('nombre'))
            ->where('id', '<>', $categoria->id)->get();

            if(count($aux)!=0){
               // Devolvemos un código 409 Conflict. 
                return response()->json(['error'=>'Ya existe otra categoría con ese nombre.'], 409);
            }

            $categoria->nombre = $nombre;
            $bandera=true;
        }

        /*if ($imagen != null && $imagen!='')
        {
            $categoria->imagen = $imagen;
            $bandera=true;
        }*/

        if ($ingles != null && $ingles!='')
        {
            $categoria->ingles = $ingles;
            $bandera=true;
        }

        if ($catprincipales_id != null && $catprincipales_id!='')
        {
            $categoria->catprincipales_id = $catprincipales_id;
            $bandera=true;
        }

        if ($estado != null && $estado!='')
        {

            if ($estado == 'OFF') {
                $subcategorias = $categoria->subcategorias;

                if (sizeof($subcategorias) > 0)
                {
                    for ($i=0; $i < count($subcategorias) ; $i++) { 
                        $subcategorias[$i]->estado = $estado;
                        $subcategorias[$i]->save();

                        $productos = $subcategorias[$i]->productos;
                        if (sizeof($productos) > 0) {
                            for ($j=0; $j < count($productos); $j++) { 
                                $productos[$j]->estado = $estado;
                                $productos[$j]->save();
                            }
                        }
                    }
                }
            }

            $categoria->estado = $estado;
            $bandera=true;
        }

        if (sizeof($subcategorias) > 0 )
        {
            $bandera=true;

            $subcategorias = json_decode($subcategorias);
            for ($i=0; $i < count($subcategorias) ; $i++) {

                if ($subcategorias[$i]->estado == 'ON') {

                    $subcat = \App\Subcategoria::find($subcategorias[$i]->id);

                    if(count($subcat) == 0){
                       // Devolvemos un código 409 Conflict. 
                        return response()->json(['error'=>'No existe la subcategoria con id '.$subcategorias[$i]->id], 409);
                    }else{
                        $subcat->estado = $subcategorias[$i]->estado;
                        $subcat->save();

                        $productos = $subcat->productos;
                        if (sizeof($productos) > 0) {
                            for ($j=0; $j < count($productos); $j++) { 
                                $productos[$j]->estado = $estado;
                                $productos[$j]->save();
                            }
                        }
                    }
                }  
            }
        }

        if ($imagenes != null && $imagenes !='') {

            $imagenes = json_decode($request->input('imagenes'));
            for ($i=0; $i < count($imagenes) ; $i++) {

                if ($imagenes[$i]->nueva == 1) {

                    $newImg=\App\ImagenCat::create([
                        'imagen'=>$imagenes[$i]->imagen,
                        'categoria_id'=>$categoria->id,
                    ]);

                } 

                if ($imagenes[$i]->eliminar == 1) {

                    DB::table('imagenes_categorias')
                        ->where('imagen', $imagenes[$i]->imagen)
                        ->delete();

                } 

                
                   
            }
        }

        if ($bandera)
        {
            // Almacenamos en la base de datos el registro.
            if ($categoria->save()) {
                return response()->json(['message'=>'Categoría editada con éxito.',
                    'categoria'=>$categoria], 200);
            }else{
                return response()->json(['error'=>'Error al actualizar la categoría.'], 500);
            }
            
        }
        else
        {
            // Se devuelve un array errors con los errores encontrados y cabecera HTTP 304 Not Modified – [No Modificada] Usado cuando el cacheo de encabezados HTTP está activo
            // Este código 304 no devuelve ningún body, así que si quisiéramos que se mostrara el mensaje usaríamos un código 200 en su lugar.
            return response()->json(['error'=>'No se ha modificado ningún dato a la categoría.'],409);
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
        // Comprobamos si la categoria existe o no.
        $categoria=\App\Categoria::find($id);

        if (count($categoria)==0)
        {
            // Devolvemos error codigo http 404
            return response()->json(['error'=>'No existe la categoría con id '.$id], 404);
        }
       
        $subcategorias = $categoria->subcategorias;

        if (sizeof($subcategorias) > 0)
        {
            // Devolvemos un código 409 Conflict. 
            return response()->json(['error'=>'Esta categoría no puede ser eliminada porque posee subcategorías asociadas.'], 409);
        }

        // Eliminamos la categoria si no tiene relaciones.
        $categoria->delete();

        return response()->json(['message'=>'Se ha eliminado correctamente la categoría.'], 200);
    }

    public function catsSubcatsProdsEst()
    {
        //cargar todas las categorias con sus subcats productos y su establecimiento
        $categorias = \App\Categoria::with('subcategorias.productos.establecimiento')->get();

        if(count($categorias) == 0){
            return response()->json(['error'=>'No existen categorías.'], 404);          
        }else{
            return response()->json(['categorias'=>$categorias], 200);
        } 
    }

    public function categSub()
    {
        //cargar una cat con sus subcat
        $categoria = \App\Categoria::with('subcategorias')->orderBy('orden', 'ASC')->get();
             $colors = [
                '#92e0e2',
                '#ebbaf9',
                //'#fdebba',
                '#c6f5a2',
                '#fdcdc1',
                '#f3f1b4',
                //'#a9efef',a6daf2
                '#7ecaed',
                
            ];
            $colors2 = [
                '#c9f5f6',
                "#fff1ff",
                //'#fff8e8',
                '#daf7c6',
                '#fff0ed',
                "#ffffdb",
                //'#ebfffe',e9f5fb
                '#b8e0f5',
                
            ];

        for ($i=0; $i < count($categoria); $i++) { 
            $categoria[$i]->colorheader=$colors[$i];
            $categoria[$i]->colorfondo=$colors2[$i];
            for ($j=0; $j < count($categoria[$i]->subcategorias); $j++) { 
                $categoria[$i]->subcategorias[$j]->tiempo_costo=json_decode($categoria[$i]->subcategorias[$j]->tiempo_costo);
                 
            }

            //Imagen aleatorea
            $imagenes = \App\ImagenCat::where('categoria_id',$categoria[$i]->id)->get();
            if (count($imagenes) == 1) {
                $categoria[$i]->imagen = $imagenes[0]->imagen;
            }
            else if (count($imagenes) > 1) {
                $aleatoreo = rand(0, count($imagenes) - 1);
                $categoria[$i]->imagen = $imagenes[$aleatoreo]->imagen;
            }

            //Colores aleatoreos
        
            $color_aleatoreo1 = rand(0, 6);
           // $categoria[$i]->colorheader = $colors[$color_aleatoreo1];

            $color_aleatoreo2 = rand(0, 6);
            //$categoria[$i]->colorfondo = $colors[$color_aleatoreo1];

            //Num aleatoreo
            $num_aleatoreo = rand(1, 5);
            $categoria[$i]->aleatoreo = $num_aleatoreo;
        }

        if(count($categoria)==0){
            return response()->json(['error'=>'No existe la categoría '], 404);          
        }else{

            //Colores aleatoreos
            

            $color_aleatoreo1 = rand(0, 5);
            $colorheader = $colors[$color_aleatoreo1];

            //Colores aleatoreos
           

            $color_aleatoreo2 = rand(0, 5);
            $colorfondo = $colors2[$color_aleatoreo1];

            //Num aleatoreo
            $num_aleatoreo = rand(1, 6);
            $aleatoreo = $num_aleatoreo;

            return response()->json([
                'colorheader'=>$colorheader,
                'colorfondo'=>$colorfondo,
                'aleatoreo'=>$aleatoreo,
                'categoria'=>$categoria,
            ], 200);
        } 
    }

    public function categoriaSubcategorias($id)
    {
        //cargar una cat con sus subcat
        $categoria = \App\Categoria::with('subcategorias')->find($id);

        if(count($categoria)==0){
            return response()->json(['error'=>'No existe la categoría con id '.$id], 404);          
        }else{

            //cargar las subcat de la cat
            //$categoria = $categoria->with('subcategorias')->get();
            //$categoria->productos = $categoria->productos()->get();
            //$categoria = $categoria->subcategorias;

            return response()->json(['categoria'=>$categoria], 200);
        } 
    }

    //Usada en el panel
    public function categoriasHabilitadas()
    {
        //cargar todas las cat en estado ON
        $categorias = \App\Categoria::where('estado', 'ON')->get();

        if(count($categorias) == 0){
            return response()->json(['error'=>'No existen categorías habilitadas.'], 404);          
        }else{
            return response()->json(['categorias'=>$categorias], 200);
        }   
    }
}
