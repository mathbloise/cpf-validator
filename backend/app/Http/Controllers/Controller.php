<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param $msg
     * @param int $code
     * @return JsonResponse
     */
    public function responseSuccess($msg, $code = 200)
    {
        return $this->responseObjectSuccess($msg, null, $code);
    }

    /**
     * @return JsonResponse
     */
    public function responseCreate()
    {
        return response()->json([], 201);
    }

    /**
     * @param $msg
     * @param $content
     * @param int $code
     * @return JsonResponse
     */
    public function responseObjectSuccess($msg, $content, $code = 200)
    {
        return response()->json(['message' => $msg, 'content' => $content], $code);
    }

    /**
     * @param $error
     * @param int $code
     * @return JsonResponse
     */
    public function responseError($error, $code = 422)
    {
        return response()->json(['error' => $error], $code);
    }
}
