<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

if(version_compare(PHP_VERSION, '7.2.0', '>=')) {
    error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
}

Route::get('/', function () {
    //return view('welcome');
    return 1;
    
});


/*Route::get('test', function () {
    \Log::info('Info log test');
});*/

Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');

Route::group(  ['middleware' =>'cors'], function(){


    Route::get('/firma','AgendaController@firma');   
    Route::get('/paynotify','AgendaController@paynotify');  
    Route::post('/paynotifypost','AgendaController@paynotifypost'); 
    Route::get('/pay','PayController@pay'); 
    Route::get('/carinfo','PayController@carinfo');    
    Route::get('/check_pay/{id}','PayController@check_pay'); 
    Route::get('/carinfo','PayController@carinfo');  
    
    //----Pruebas ErrorController
    Route::get('/error','ErrorController@index');
    Route::post('/error','ErrorController@store');

    //----Pruebas LoginController
    Route::post('/login/web','LoginController@loginWeb');
    Route::post('/login/app','LoginController@loginApp');
    Route::post('/login/repartidores','LoginController@loginRepartidores');
    Route::post('/validar/token','LoginController@validarToken');

    //----Web
    Route::get('/usuarios/webcontacto/{email}','UsuarioController@webcontacto');
    Route::get('/usuarios/webcontactoproveedor/{email}','UsuarioController@webcontactoproveedor');
    
    //----Pruebas PasswordController
    Route::get('/password/cliente/{correo}','PasswordController@generarCodigo');
    Route::get('/password/codigo/{codigo}','PasswordController@validarCodigo'); 

    Route::get('/nuevo_registro/{correo}','MailController@nuevo_registro');
    Route::get('/nuevo_pedido/{correo}','MailController@nuevo_pedido');

    Route::get('/productos/buscar/codigos','ProductoController@buscarCodigos');
    Route::get('/productos_web','ProductoController@index2');

    //----Pruebas CoordenadasController
    Route::get('/coordenadas','CoordenadasController@index');

    //----Pruebas UsuarioController
    Route::post('/usuarios','UsuarioController@store');
    Route::get('/usuarios/validar/{email}','UsuarioController@validarCuenta');
    Route::post('/repartidores','RepartidorController@store');
    Route::post('/establecimientos','EstablecimientoController@store');

    Route::get('/registro','RegistroController@index');
    Route::post('/registro','RegistroController@store');
    Route::put('/registro/{id}','RegistroController@update');
    Route::delete('/registro/{id}','RegistroController@destroy');
    Route::get('/registro/{id}','RegistroController@show');

    //-------ZONAS
    Route::get('/zonas','ZonasController@index');
    Route::post('/zonas','ZonasController@store');
    Route::put('/zonas/{id}','ZonasController@update');
    Route::delete('/zonas/{id}','ZonasController@destroy');

    //-------PLANES
    Route::get('/planes','PlanesController@index');
    Route::post('/planes','PlanesController@store');
    Route::put('/planes/{id}','PlanesController@update');
    Route::delete('/planes/{id}','PlanesController@destroy');

    //-------PLANES
    Route::get('/con_contratos','ContratosController@index');
    Route::post('/con_contratos','ContratosController@store');
    Route::put('/con_contratos/{id}','ContratosController@update');
    Route::get('/con_contratos/{id}','ContratosController@show');
    Route::get('/con_contratos_firma/{id}','ContratosController@show_firma');
    Route::delete('/con_contratos/{id}','ContratosController@destroy');

    //----Pruebas EntidadMunicipioController
    Route::get('/entidades/municipios','EntidadMunicipioController@index');

    //----Pruebas VarSistemaController
    Route::get('/sistema','VarSistemaController@index');
    Route::get('/sistema/contacto','VarSistemaController@getContacto');

    Route::get('/notificaciones','NotificacionesController@index');
    Route::put('/notificaciones/{id}','NotificacionesController@update');

    //----Pruebas CategoriaController
    Route::get('/catprincipales','CatprincipalesController@index');
    Route::get('/catprincipales/categorias','CatprincipalesController@categorias');
    Route::get('/catprincipales/habilitadas','CatprincipalesController@categoriasHabilitadas');
    Route::get('/catprincipales/{id}','CatprincipalesController@show');
    Route::post('/catprincipales','CatprincipalesController@store');
    Route::put('/catprincipales/{id}','CatprincipalesController@update');
    Route::delete('/catprincipales/{id}','CatprincipalesController@destroy');

    //----Pruebas CategoriaController
    Route::get('/categorias','CategoriaController@index');
    Route::get('/categorias/habilitadas','CategoriaController@categoriasHabilitadas');
    Route::get('/categorias/{id}','CategoriaController@show');
    //----Pruebas CategoriaController
        //Route::get('/categorias','CategoriaController@index');
        Route::get('/categorias/subcats/productos/establecimiento','CategoriaController@catsSubcatsProdsEst');

    //----Pruebas BlogController
    Route::get('/blogs','BlogController@index');
    Route::get('/blogs/{id}','BlogController@show');

    Route::get('/usuarios/email/validar/{email}','UsuarioController@emailDeValidacion');

    //----Pruebas SubCategoriaController
        Route::get('/subcategorias','SubCategoriaController@index');
        Route::get('/subcategorias/productos/establecimiento','SubCategoriaController@subcatsProdsEst');
        Route::get('/subcategorias/habilitadas','SubCategoriaController@subcategoriasHabilitadas');
        Route::get('/subcategorias/categoria','SubCategoriaController@subcategoriasCategoria');
        Route::post('/subcategorias','SubCategoriaController@store');
        Route::put('/subcategorias/{id}','SubCategoriaController@update');
        Route::delete('/subcategorias/{id}','SubCategoriaController@destroy');
        Route::get('/subcategorias/{id}','SubCategoriaController@show');
        Route::get('/subcategorias/{id}/productos','SubCategoriaController@subcategoriaProductos');
        Route::get('/subcategorias/habilitadas/{categoria_id}','SubCategoriaController@subcatHabCat');

    //Route::group(['middleware' => 'jwt-auth'], function(){

        //----Pruebas DashboardController
        Route::get('/dashboard/contadores','DashboardController@contadores');
        Route::get('/dashboard/diagram1','DashboardController@filterCategorias');
        Route::get('/dashboard/diagram2','DashboardController@filterSubcateogrias');
        Route::get('/dashboard/diagram3','DashboardController@filterEstablecimientos');
        Route::get('/dashboard/diagram4','DashboardController@filterHora');
        Route::get('/dashboard/diagram5','DashboardController@filterHoraComida');
        Route::get('/dashboard/tabla1','DashboardController@filterRepartidores');
        Route::get('/dashboard/tabla2','DashboardController@filterCalificaciones');

        Route::get('/dashboard/contadores/establecimiento/{establecimiento_id}','DashboardController@contadoresEst');
        Route::get('/dashboard/diagram4/establecimiento/{establecimiento_id}','DashboardController@filterHoraEst');


        //----Pruebas UsuarioController
        Route::get('/usuarios','UsuarioController@index');
        Route::get('/usuarios/repartidores/aux','UsuarioController@indexRepartidores');
        //Route::post('/usuarios','UsuarioController@store');
        Route::put('/usuarios/{id}','UsuarioController@update');
        Route::delete('/usuarios/{id}','UsuarioController@destroy');
        Route::get('/usuarios/{id}','UsuarioController@show');
        Route::get('/usuarios_cerrar_sesion/{id}','UsuarioController@usuarios_cerrar_sesion');
        //Route::get('/usuarios/validar/{email}','UsuarioController@validarCuenta');
        //Route::get('/usuarios/email/validar/{email}','UsuarioController@emailDeValidacion');
        //Route::get('/usuarios/{id}/pedidos/historial','UsuarioController@misPedidosHistorial');
        //Route::get('/usuarios/{id}/pedidos/hoy','UsuarioController@misPedidosHoy');
        Route::get('/usuarios/{id}/pedidos/encurso','UsuarioController@misPedidosEncurso');
        Route::get('/usuarios/{id}/pedidos/finalizados','UsuarioController@misPedidosFinalizados');
        Route::get('/clinica/{id}/pedidos/encurso','UsuarioController@misPedidosEncursoClininca');
        Route::get('/clinica/{id}/pedidos/finalizados','UsuarioController@misPedidosFinalizadosClininca');
        Route::get('/usuarios/tipo/clinicas','UsuarioController@getClinicas');

        
        //Route::get('/categorias/habilitadas','CategoriaController@categoriasHabilitadas');
        Route::post('/categorias','CategoriaController@store');
        Route::put('/categorias/{id}','CategoriaController@update');
        Route::delete('/categorias/{id}','CategoriaController@destroy');
        //Route::get('/categorias/{id}','CategoriaController@show');
        Route::get('/categorias/{id}/subcategorias','CategoriaController@categoriaSubcategorias');
        Route::get('/categsub','CategoriaController@categSub');

        //----Pruebas EstablecimientoController
        Route::get('/establecimientos','EstablecimientoController@index');
        Route::get('/establecimientos/productos/subcategoria','EstablecimientoController@establecimientosProdsSubcat');
        Route::get('/establecimientos/habilitados','EstablecimientoController@stblcmtsHabilitados');
       // Route::post('/establecimientos','EstablecimientoController@store');
        Route::put('/establecimientos/{id}','EstablecimientoController@update');
        Route::delete('/establecimientos/{id}','EstablecimientoController@destroy');
        Route::get('/establecimientos/{id}','EstablecimientoController@show');
        Route::get('/establecimientos/{id}/productos','EstablecimientoController@establecimientoProductos');

        //----Pruebas ProductoController
        Route::get('/productos','ProductoController@index');
        Route::get('/productos/subcategoria/establecimiento','ProductoController@productosSubcatEst');
        Route::get('/productos/establecimiento/{establecimiento_id}','ProductoController@productosEst');
        Route::post('/productos','ProductoController@store');
        Route::put('/productos/{id}','ProductoController@update');
        Route::delete('/productos/{id}','ProductoController@destroy');
        Route::get('/productos/{id}','ProductoController@show');
        Route::get('/productos/habilitados/{subcategoria_id}/{establecimiento_id}','ProductoController@prodHabSubcatEst');

        //----fotos del producto

        Route::get('/productos_fotos','ProductoFotosController@index');
        Route::post('/productos_fotos','ProductoFotosController@store');
        Route::put('/productos_fotos/{id}','ProductoFotosController@update');
        Route::delete('/productos_fotos/{id}','ProductoFotosController@destroy');

        

        //----Pruebas PedidoController

        Route::get('/pedidos','PedidoController@index');
        Route::get('/pedidos/establecimiento/{establecimiento_id}','PedidoController@pedidosEst');
        Route::get('/pedidos/por/despachar/{establecimiento_id}','PedidoController@pedidosPorDespachar');
        Route::post('/pedidos','PedidoController@store');
        Route::put('/pedidos/{id}','PedidoController@update');
        Route::delete('/pedidos/{id}','PedidoController@destroy');
        Route::get('/pedidos/{id}','PedidoController@show');
        //Route::get('/pedidos/fecha/hoy','PedidoController@pedidosHoy');
        Route::get('/pedidos/estado/curso','PedidoController@pedidosEncurso');
        Route::get('/pedidos/estado/finalizados','PedidoController@pedidosFinalizados');
        Route::get('/pedidos/estado/cancelados','PedidoController@pedidosCancelados');
        Route::get('/pedidos/estadisticas/{cliente_id}','PedidoController@conteoPedidos');
        Route::get('/pedidos/por/asignar','PedidoController@pedidosPorAsignar');
        Route::get('/pedidos/info/basica/{id}','PedidoController@infoBasica');
        Route::post('/cancelar_pedidos/{id}','PedidoController@cancelar');
        Route::get('/encamino/{id}','PedidoController@encamino');

        
        //----Pruebas CalificacionController
        Route::get('/calificaciones','CalificacionController@index');
        Route::post('/calificaciones','CalificacionController@store');
        Route::put('/calificaciones/{id}','CalificacionController@update');
        Route::delete('/calificaciones/{id}','CalificacionController@destroy');
        Route::get('/calificaciones/{id}','CalificacionController@show');

        //----Pruebas CalificacionController
        Route::get('/agenda','AgendaController@index');
        Route::post('/agenda','AgendaController@store');
        Route::put('/agenda/{id}','AgendaController@update');
        Route::delete('/agenda/{id}','AgendaController@destroy');
        Route::get('/agenda/{id}','AgendaController@show');
        Route::get('/agenda_usuario/{id}','AgendaController@show_usuario');
        Route::get('/agenda/usuario/{usuario_id}','AgendaController@miAgenda');
        Route::get('/agenda/usuario/{usuario_id}/dia/{dia}','AgendaController@miAgendaDiaria');
        Route::put('/agenda/{id}/diaria','AgendaController@updateAgendaDiaria');
        Route::post('/agenda/diaria','AgendaController@storeAgendaDiaria');

        //----Pruebas CalificacionController
        Route::get('/agenda_dias','Agenda_diasController@index');
        Route::post('/agenda_dias','Agenda_diasController@store');
        Route::put('/agenda_dias/{id}','Agenda_diasController@update');
        Route::delete('/agenda_dias/{id}','Agenda_diasController@destroy');
        Route::get('/agenda_dias/{id}','Agenda_diasController@show');

        //----Cobros Controller
        Route::get('/cobros','CobrosController@index');
        Route::get('/pagados','CobrosController@index2');
        Route::put('/pagar/{id}','CobrosController@pago');

        //----Pruebas UploadImagenController
        Route::post('/imagenes','UploadImagenController@store');

        //----Pruebas RepartidorController
        Route::get('/repartidores','RepartidorController@index');
        Route::get('/repartidores/disponibles','RepartidorController@repDisponibles');
        
        Route::put('/repartidores/{id}','RepartidorController@update');
        Route::delete('/repartidores/{id}','RepartidorController@destroy');
        Route::get('/repartidores/{id}','RepartidorController@show');
        Route::post('/repartidores/{id}/set/posicion','RepartidorController@setPosicion');
        Route::get('/repartidores/{id}/pedido/encurso','RepartidorController@miPedidoEnCurso');
        Route::get('/repartidores/{id}/pedido/enespera','RepartidorController@miPedidoEnEspera');
        Route::get('/repartidores/{id}/historial/pedidos','RepartidorController@historialPedidos');
        Route::get('/repartidores/estadisticas/{repartidor_id}','RepartidorController@conteoPedidos');
        Route::get('/rep_pos/{id}','RepartidorController@posicion');

        //----Pruebas BlogController
        //Route::get('/blogs','BlogController@index');
        Route::post('/blogs','BlogController@store');
        Route::put('/blogs/{id}','BlogController@update');
        Route::delete('/blogs/{id}','BlogController@destroy');
        //Route::get('/blogs/{id}','BlogController@show');

        //----Pruebas MsgBlogController
        //Route::get('/mensajes/blogs','MsgBlogController@index');
        Route::post('/mensajes/blogs','MsgBlogController@store');
        Route::put('/mensajes/blogs/{id}','MsgBlogController@update');
        Route::delete('/mensajes/blogs/{id}','MsgBlogController@destroy');
        //Route::get('/mensajes/blogs/{id}','MsgBlogController@show');

        //----Pruebas NotificacionController
        Route::get('/notificaciones/localizar/repartidores/pedido_id/{id}','NotificacionController@localizarRepartidores');
        Route::put('/notificaciones/{repartidor_id}/asignar/pedido','NotificacionController@asignarPedido');
        Route::post('/notificaciones/establecimiento/visitado','NotificacionController@notificarVisita');
        Route::put('/notificaciones/{repartidor_id}/aceptar/pedido','NotificacionController@aceptarPedido');
        Route::put('/notificaciones/{repartidor_id}/finalizar/pedido','NotificacionController@finalizarPedido');

        //----Pruebas VarSistemaController
        //Route::get('/sistema','VarSistemaController@index');
        Route::get('/sistema/ubicacion','VarSistemaController@ubicacion');
        Route::post('/sistema','VarSistemaController@store');
        Route::put('/sistema/{id}','VarSistemaController@update');

        //----Favoritos
        //Route::get('/sistema','VarSistemaController@index');
        Route::get('/favoritos/{id}','FavoritosController@show');
        Route::post('/favoritos','FavoritosController@store');
        Route::delete('/favoritos/{id}','FavoritosController@destroy');
        Route::post('/esfavoritos','FavoritosController@check');


        //----Pruebas PagoController
        Route::get('/pagos/pendientes/{establecimiento_id}','PagoController@indexDeuda');
        Route::get('/pagos/realizados','PagoController@indexPagos');
        Route::get('/pagos/realizados/{establecimiento_id}','PagoController@indexPagosEst');
        Route::post('/pagos','PagoController@store');
        //Route::put('/pagos/{id}','PagoController@update');
        //Route::delete('/pagos/{id}','PagoController@destroy');
        Route::get('/pagos/{id}','PagoController@show');

        //----Pruebas RutaController
        Route::put('/rutas/despachar/pedido','RutaController@despacharPedido');

        //----Pruebas SliderController
        //Route::get('/slider','SliderController@index');
        Route::post('/slider','SliderController@store');
        Route::put('/slider/{id}','SliderController@update');
        //Route::delete('/slider/{id}','SliderController@destroy');

        
    //});

    //----Pruebas SliderController
    Route::get('/slider','SliderController@index');


        //----Pruebas ChatClienteController
        Route::get('/chats/clientes','ChatClienteController@index');
        Route::post('/chats/clientes','ChatClienteController@store');
        Route::post('/chats/clientes/mensaje','ChatClienteController@storeMsg');
        //Route::put('/chats/clientes/{id}','ChatClienteController@update');
        Route::delete('/chats/clientes/{id}','ChatClienteController@destroy');
        Route::get('/chats/clientes/{id}','ChatClienteController@show');
        Route::get('/chats/clientes/michat/{usuario_id}','ChatClienteController@miChat');
        Route::put('/chats/clientes/leer','ChatClienteController@leerMensajes');
        Route::get('/chats/sinleer/clientes/{receptor_id}','ChatClienteController@getMsgsSinLeer');

        //----Pruebas ChatRepartidorController
        Route::get('/chats/repartidores','ChatRepartidorController@index');
        Route::post('/chats/repartidores','ChatRepartidorController@store');
        Route::post('/chats/repartidores/mensaje','ChatRepartidorController@storeMsg');
        //Route::put('/chats/repartidores/{id}','ChatRepartidorController@update');
        Route::delete('/chats/repartidores/{id}','ChatRepartidorController@destroy');
        Route::get('/chats/repartidores/{id}','ChatRepartidorController@show');
        Route::get('/chats/repartidores/michat/{usuario_id}','ChatRepartidorController@miChat');
        Route::put('/chats/repartidores/leer','ChatRepartidorController@leerMensajes');
        Route::get('/chats/sinleer/repartidores/{receptor_id}','ChatRepartidorController@getMsgsSinLeer');

        //----Pruebas ChatPedidoController
        Route::get('/chats/pedidos','ChatPedidoController@index');
        Route::post('/chats/pedidos','ChatPedidoController@store');
        Route::post('/chats/pedidos/mensaje','ChatPedidoController@storeMsg');
        //Route::put('/chats/pedidos/{id}','ChatPedidoController@update');
        Route::delete('/chats/pedidos/{id}','ChatPedidoController@destroy');
        Route::get('/chats/pedidos/{id}','ChatPedidoController@show');
        Route::get('/chats/pedidos/michat/{usuario_id}','ChatPedidoController@miChat');
        Route::put('/chats/pedidos/leer','ChatPedidoController@leerMensajes');
        Route::get('/chats/sinleer/pedidos/{receptor_id}','ChatPedidoController@getMsgsSinLeer');
        

        
});
