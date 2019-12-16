<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Empresa;
use DB;

class EmpresaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $empresas = Empresa::all();
        return response([
            'empresas'=>$empresas,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $empresa = new Empresa;
        $empresa->nombre = $request->nombre;
        $empresa->numero_trabajadores = request()->has('numero_trabajadores')?request()->get('numero_trabajadores'):null;
        $empresa->fecha_creacion =date("Y-m-d",strtotime($request->fecha_creacion));
        $empresa->save();
        if(isset($empresa)){
            return response([
                'status_code'=>200,
            ], 200);
        }
        else{
            return response([
                'status_code'=>500,
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
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
        $empresa=DB::table('empresas')
            ->where('id',$id)
            ->update(['nombre' => $request->nombre, 'numero_trabajadores'=> $request->numero_trabajadores, 'fecha_creacion' => $request->fecha_creacion ]);
        return $empresa;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Empresa::destroy($id);
        $empresas=Empresa::all();
        return $empresas;
    }
}
