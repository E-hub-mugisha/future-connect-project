<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\ProjectApplication;
use App\Models\ProjectPayment;
use App\Models\ProjectSponsorship;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserProjectController extends Controller
{
    public function index()
    {
        $projects = Project::where('status', 'approved')->latest()->paginate(10);
        $categories = \App\Models\Category::all();
        return view('user-page.projects.index', compact('projects', 'categories'));
    }
    public function show($id)
    {
        $project = Project::with('user')->findOrFail($id);
        $recent = Project::where('id', '!=', $id)->latest()->take(5)->get();

        return view('user-page.projects.show', compact('project', 'recent'));
    }

    public function store(Request $request, $id)
    {
        $request->validate([
            'message' => 'required|string|max:1000',
            'attachment' => 'nullable|file|mimes:pdf,doc,docx,zip|max:2048',
        ]);

        $project = Project::findOrFail($id);

        $path = $request->file('attachment')
            ? $request->file('attachment')->store('applications', 'public')
            : null;

        ProjectApplication::create([
            'project_id' => $project->id,
            'user_id' => Auth::id(),
            'message' => $request->message,
            'attachment' => $path,
            'portfolio_url' => $request->portfolio_url,
            'status' => 'pending',
        ]);

        return redirect()->route('user.projects.show', $project->id)
            ->with('success', 'Your application has been sent successfully!');
    }
    // Store sponsorship
    public function storeSponsorship(Request $request, Project $project)
    {
        $request->validate([
            'amount' => 'required|numeric|min:1',
            'currency' => 'required|string|max:5',
            'message' => 'required|string'
        ]);

        $diaspora = Auth::user()->id;

        // Step 1: Create sponsorship record
        $sponsorship = ProjectSponsorship::create([
            'diaspora_account_id' => $diaspora->id,
            'project_id' => $project->id,
            'amount' => $request->amount,
            'currency' => $request->currency,
            'status' => 'pending',
        ]);

        // Step 2: Create payment record (pending)
        $payment = ProjectPayment::create([
            'project_sponsorship_id' => $sponsorship->id,
            'diaspora_account_id' => $diaspora->id,
            'amount' => $request->amount,
            'currency' => $request->currency,
            'payment_gateway' => 'flutterwave',
            'status' => 'pending',
        ]);

        // Optionally: redirect to payment gateway
        // e.g., Future Connect Wallet / PayPal / Stripe
        return redirect()->route('diaspora.sponsorship.payment', compact('sponsorship', 'payment'))
                         ->with('success', 'Sponsorship initiated. Complete payment to confirm.');
    }
    public function payment(ProjectSponsorship $sponsorship)
    {
        $payment = $sponsorship->payment()->first(); // fetch associated payment
        return view('diaspora.sponsorship.payment', compact('sponsorship', 'payment'));
    }

    public function success(ProjectSponsorship $sponsorship)
    {
        $this->authorize('view', $sponsorship);

        return view('diaspora.sponsorship.success', compact('sponsorship'));
    }
    // Webhook endpoint for Flutterwave
    public function webhook(Request $request)
    {
        $data = $request->all();

        // Verify payment with Flutterwave (signature, secret, etc.)
        // For simplicity, we assume the payment is verified

        $transactionId = $data['tx_ref'] ?? null;
        $payment = ProjectPayment::where('transaction_id', $transactionId)->first();

        if ($payment && $data['status'] === 'successful') {
            $payment->update(['status' => 'successful', 'response' => $data]);
            $payment->sponsorship()->update(['status' => 'paid']);
        }

        return response()->json(['received' => true]);
    }
}
