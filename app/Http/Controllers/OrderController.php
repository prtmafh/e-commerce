<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $order = Order::create([
            'customer_name' => $request->input('customer_name'),
            'cart_data' => json_encode($request->input('cart')),
            'total_price' => $request->input('total_price'),
        ]);

        return response()->json(['message' => 'Order placed successfully', 'order' => $order]);
    }
}
