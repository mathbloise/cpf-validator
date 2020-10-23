<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Cep extends Model
{
    protected $fillable = ['cep', 'city'];
}
