<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function list()
    {
        return []
    }


    public function info($id)
    {
        return [
            'id' => $id,
            'name' => 'Товар ' . $id,
            'price' => 100
        ];
    }
}
