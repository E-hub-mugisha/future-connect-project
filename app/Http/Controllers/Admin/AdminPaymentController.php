<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminPaymentController extends Controller
{
    
    // This controller can be used for admin-specific payment management
    // For example, viewing all payments, updating payment statuses, etc.

    public function index()
    {
        // Logic to list all payments
        $payments = \App\Models\StoryPayment::all(); // Fetch all payments
        return view('admin-pages.payments.index', compact('payments'));
    }

    public function show($id)
    {
        // Logic to show a specific payment
        return view('admin.payments.show', compact('id'));
    }

    // Additional methods for creating, updating, and deleting payments can be added here
}
