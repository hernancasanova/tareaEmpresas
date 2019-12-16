<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    //
    protected $fillable = ['nombre','numero_trabajadores','fecha_creacion'];
}
