<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class CepRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'cep' => ['required', 'regex:/^\d{5}\d{3}$/'],
            'city' => ['required']
        ];
    }

    //verificação de dígito repetitivo alternado em par
    public function validateCep($cep): bool
    {
        $cepArray = str_split($cep, 1);
        $previous = null;
        $validCep = false;

        for ($i = 1; $i <= strlen($cep); $i+=2) {
            if ($i == 1) {
                $previous = $cepArray[$i];
                continue;
            }

            if ($previous == $cepArray[$i]) {
                $previous = null;
                $validCep = true;
                break;
            }
        }
        if ($validCep) return $validCep;

        for ($i = 0; $i < strlen($cep); $i+=2) {
            if ($i == 0) {
                $previous = $cepArray[$i];
                continue;
            }

            if ($previous == $cepArray[$i]) {
                $previous = null;
                $validCep = true;
                break;
            }
        }
        return $validCep;
    }
}
