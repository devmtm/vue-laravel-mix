<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
  public function index()
  {
    $orders = [
      [
        'id' => 1,
        'name' => 'Order #1'
      ],
      [
        'id' => 2,
        'name' => 'Order #2'
      ]
    ];
    return response()->json(['msg' => 'Success', 'orders' => $orders]);
  }
}
