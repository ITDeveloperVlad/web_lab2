<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function list()
    {
        return Product::query()
                    ->orderBy('created_at', 'desc')
                    ->get();
    }


    public function info($id)
    {
        return [
            'id' => $id,
            'name' => 'Курс ' . $id,
            'price' => 4000
        ];
    }
}
