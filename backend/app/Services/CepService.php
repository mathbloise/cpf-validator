<?php


namespace App\Services;

use App\Entities\Cep;
use Throwable;
use Exception;

class CepService
{
    /**
     * @var Cep
     */
    private $cep;

    /**
     * CepService constructor.
     * @param Cep $cep
     */
    public function __construct(Cep $cep)
    {
        $this->cep = $cep;
    }

    /**
     * @return mixed
     */
    public function index()
    {
        return Cep::get();
    }

    /**
     * @param array $data
     * @return void
     * @throws Throwable
     */
    public function new(array $data) : void
    {
        $this->cep->fill($data);
        $this->cep->saveOrFail();
    }

    /**
     * @param $cep
     * @throws Exception
     */
    public function delete($cep) : void
    {
        $cep->delete();
    }

    /**
     * @param array $data
     * @param $cep
     */
    public function update(array $data, $cep) : void
    {
        $cep->fill($data);
        $cep->update();
    }
}
