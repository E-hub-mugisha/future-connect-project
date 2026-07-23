<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\DiasporaAccount;
use App\Models\Project;
use App\Models\ProjectApplication;
use App\Models\ProjectPayment;
use App\Models\ProjectSponsorship;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserProjectController extends Controller
{
    public function index()
    {
        $projects = Project::where('status', 'approved')->latest()->paginate(10);
        $categories = \App\Models\Category::all();
        return Inertia::render('UserPage/Projects', compact('projects', 'categories'));
    }
    public function show($id)
    {
        $project = Project::with('user')->findOrFail($id);
        $recent = Project::where('id', '!=', $id)->latest()->take(5)->get();

        return Inertia::render('UserPage/ProjectShow', compact('project', 'recent'));
    }

    public function store(Request $request, $id)
    {
        $request->validate([
            'message' => 'required|string|max:1000',
            'attachment' => 'nullable|file|mimes:pdf,doc,docx,zip|max:2048',
            'portfolio_url' => 'nullable|url|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        $project = Project::findOrFail($id);

        $path = $request->file('attachment')
            ? $request->file('attachment')->store('applications', 'public')
            : null;

        ProjectApplication::create([
            'project_id' => $project->id,
            'message' => $request->message,
            'attachment' => $path,
            'portfolio_url' => $request->portfolio_url,
            'name' => $request->name,
            'email' => $request->email,
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

        $user = Auth::user();
        $diaspora = DiasporaAccount::where('user_id', $user->id)->first();

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
        return redirect()->route('diaspora.sponsorship.payment', compact('sponsorship'))
            ->with('success', 'Sponsorship initiated. Complete payment to confirm.');
    }
    public function payment(ProjectSponsorship $sponsorship)
    {
        $payment = $sponsorship->payments()->firstOrCreate([
            'project_sponsorship_id' => $sponsorship->id,
        ], [
            'amount' => $sponsorship->amount,
            'currency' => $sponsorship->currency,
            'status' => 'pending'
        ]);

        $public_key = config('services.flutterwave.public_key');

        return view('user-page.projects.payment', compact('sponsorship', 'payment','public_key'));
    }


    public function success(ProjectSponsorship $sponsorship)
    {
        $this->authorize('view', $sponsorship);

        return view('diaspora.sponsorship.success', compact('sponsorship'));
    }
    // Webhook endpoint for Flutterwave
    public function handleCallback(Request $request)
    {
        $paymentId = $request->payment_id;
        $status = $request->status;

        $payment = ProjectPayment::find($paymentId);

        if (!$payment) {
            return redirect()->route('user.projects.index')->with('error', 'Payment not found.');
        }

        if ($status === 'successful') {
            $payment->update([
                'status' => 'successful',
                'response' => json_encode($request->all()),
            ]);

            $payment->sponsorship()->update([
                'status' => 'paid',
            ]);

            return redirect()->route('user.projects.index')->with('success', 'Payment completed successfully.');
        }

        // failed or cancelled
        $payment->update([
            'status' => 'failed',
            'response' => json_encode($request->all()),
        ]);

        return redirect()->route('user.projects.index')->with('error', 'Payment failed or cancelled.');
    }
}
