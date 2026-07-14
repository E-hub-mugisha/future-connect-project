<?php

namespace App\Http\Controllers;

use App\Models\DemoRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DemoRequestController extends Controller
{
    /**
     * Company size options shown in the form.
     */
    protected array $companySizes = [
        '1-10' => '1 – 10 employees',
        '11-50' => '11 – 50 employees',
        '51-200' => '51 – 200 employees',
        '200+' => '200+ employees',
    ];

    /**
     * Preferred time-of-day options shown in the form.
     */
    protected array $preferredTimes = [
        'morning' => 'Morning',
        'afternoon' => 'Afternoon',
        'evening' => 'Evening',
        'flexible' => "I'm flexible",
    ];

    /**
     * GET /request-demo — show the demo request form.
     */
    public function create()
    {
        return Inertia::render('UserPage/DemoRequest', [
            'companySizes' => $this->companySizes,
            'preferredTimes' => $this->preferredTimes,
        ]);
    }

    /**
     * POST /request-demo — validate and store the request.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'work_email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:30'],

            'company_name' => ['required', 'string', 'max:255'],
            'company_size' => ['nullable', 'string', 'max:20'],
            'role' => ['nullable', 'string', 'max:255'],

            'preferred_date' => ['nullable', 'date', 'after_or_equal:today'],
            'preferred_time' => ['nullable', 'string', 'max:20'],

            'message' => ['nullable', 'string', 'max:2000'],
        ]);

        $demoRequest = DemoRequest::create($validated + ['status' => 'pending']);

        // TODO: notify sales/ops team, e.g.:
        // Notification::route('mail', config('mail.sales_inbox'))->notify(new DemoRequestReceived($demoRequest));

        return redirect()
            ->route('demo.request')
            ->with('success', 'Thanks! Our team will reach out within one business day to schedule your demo.');
    }
}
