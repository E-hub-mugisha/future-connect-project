<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\StoryPayment;
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

    public function invoiceShow($id)
    {
        $payment = StoryPayment::findOrFail($id);
        return view('admin-pages.payments.invoice', compact('payment'));
    }
    public function print($id)
    {
        $payment = StoryPayment::with('story')->findOrFail($id);
        return view('admin-pages.payments.print', compact('payment'));
    }

    public function destroyPayment($id)
    {
        $payment = StoryPayment::findOrFail($id);
        $payment->delete();
        return redirect()->back()->with('success', 'The payment has been deleted successful');
    }
}
