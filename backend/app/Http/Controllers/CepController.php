<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use App\Http\Requests\CepRequest;
use App\Http\Resources\CepResource;
use App\Services\CepService;
use App\Entities\Cep;
use Throwable;
use Exception;

class CepController extends Controller
{
    /**
     * @var CepService
     */
    private $cepService;

    /**
     * CepController constructor.
     * @param CepService $cepService
     */
    public function __construct(CepService $cepService)
    {
        $this->cepService = $cepService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return $this->responseObjectSuccess(
            null,
            CepResource::collection($this->cepService->index()),
            Response::HTTP_OK
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CepRequest $request
     * @return JsonResponse
     * @throws Throwable
     */
    public function store(CepRequest $request) : JsonResponse
    {
        $data = $request->validated();
        try {
            $this->cepService->new($data);
            return $this->responseCreate();
        } catch (Exception $e) {
            return $this->responseError($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Cep $cep
     * @return JsonResponse
     */
    public function show(Cep $cep)
    {
        return $this->responseObjectSuccess(
            null, new CepResource($cep)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CepRequest $request
     * @param Cep $cep
     * @return JsonResponse
     */
    public function update(CepRequest $request, Cep $cep)
    {
        $data = $request->validated();
        try {
            $this->cepService->update($data, $cep);
            return $this->responseObjectSuccess(
                null, new CepResource($cep)
            );
        } catch (Exception $e) {
            return $this->responseError($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Cep $cep
     * @return JsonResponse
     */
    public function destroy(Cep $cep)
    {
        try {
            $this->cepService->delete($cep);
            return $this->responseSuccess('data has been deleted', Response::HTTP_NO_CONTENT);
        } catch(Exception $e) {
            return $this->responseError($e->getMessage(), $e->getCode());
        }
    }
}
