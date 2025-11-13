<?php

namespace App\Http\Controllers\Diaspora;

use App\Http\Controllers\Controller;
use App\Models\DiasporaAccount;
use App\Models\Project;
use App\Models\ProjectSponsorship;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class DiasporaAccountController extends Controller
{
    public function diasporaPage()
    {
        $projects = Project::latest()->get();
        $testimonials = Testimonial::latest()->get();
        return view('diaspora.index', compact('projects','testimonials'));
    }
    // Show registration form
    public function create()
    {
        return view('diaspora.register');
    }
    /**
     * Register a new Diaspora Account
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:120',
            'last_name' => 'required|string|max:120',
            'email' => 'required|email|unique:diaspora_accounts,email',
            'phone' => 'required|string|max:20',
            'country' => 'required|string|max:120',
            'city' => 'nullable|string|max:120',
            'passport_number' => 'nullable|string|max:50',
            'password' => 'required|min:6|confirmed',
            'occupation' => 'nullable|string|max:255',
            'bio' => 'nullable|string',
            'purpose' => 'nullable|string|max:255',
            'preferred_currency' => 'nullable|string|max:10',
            'newsletter_opt_in' => 'boolean',
            'id_document' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'address_proof' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'sponsorship_preferences' => 'required|string'
        ]);

        // Handle document uploads
        $idPath = $request->file('id_document')
            ? $request->file('id_document')->store('diaspora/id_docs', 'public')
            : null;

        $proofPath = $request->file('address_proof')
            ? $request->file('address_proof')->store('diaspora/address_proofs', 'public')
            : null;

        $account = DiasporaAccount::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'display_name' => $request->first_name . ' ' . $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'country' => $request->country,
            'city' => $request->city,
            'passport_number' => $request->passport_number,
            'id_document_path' => $idPath,
            'address_proof_path' => $proofPath,
            'occupation' => $request->occupation,
            'bio' => $request->bio,
            'purpose' => $request->purpose,
            'preferred_currency' => $request->preferred_currency,
            'newsletter_opt_in' => $request->boolean('newsletter_opt_in'),
            'password' => Hash::make($request->password),
            'verification_status' => 'pending',
            'sponsorship_preferences' => $request->sponsorship_preferences
        ]);

        return redirect()->route('register.success')->with('success', 'Account Submitted Successfully!');
    }

    /**
     * Upload / Update documents for Diaspora account
     */
    public function uploadDocuments(Request $request, DiasporaAccount $diaspora)
    {
        $request->validate([
            'id_document' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'address_proof' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('id_document')) {
            if ($diaspora->id_document_path) {
                Storage::disk('public')->delete($diaspora->id_document_path);
            }
            $diaspora->id_document_path = $request->file('id_document')->store('diaspora/id_docs', 'public');
        }

        if ($request->hasFile('address_proof')) {
            if ($diaspora->address_proof_path) {
                Storage::disk('public')->delete($diaspora->address_proof_path);
            }
            $diaspora->address_proof_path = $request->file('address_proof')->store('diaspora/address_proofs', 'public');
        }

        $diaspora->save();

        return response()->json([
            'message' => 'Documents uploaded successfully.',
            'diaspora' => $diaspora
        ]);
    }

    /**
     * Admin: Approve Diaspora account
     */
    public function approve($id)
    {
        $account = DiasporaAccount::findOrFail($id);

        $account->update([
            'verification_status' => 'verified',
            'verified_at' => now(),
            'verified_by' => Auth::id(),
            'verification_notes' => 'Account approved successfully.',
        ]);

        return response()->json([
            'message' => 'Account verified successfully.',
            'account' => $account
        ]);
    }

    /**
     * Admin: Reject Diaspora account
     */
    public function reject(Request $request, $id)
    {
        $request->validate([
            'notes' => 'nullable|string|max:500'
        ]);

        $account = DiasporaAccount::findOrFail($id);

        $account->update([
            'verification_status' => 'rejected',
            'verified_by' => Auth::id(),
            'verification_notes' => $request->notes ?? 'Application rejected.',
        ]);

        return response()->json([
            'message' => 'Account rejected successfully.',
            'account' => $account
        ]);
    }

    /**
     * List Diaspora Accounts (optionally filter by status)
     */
    public function index(Request $request)
    {
        $status = $request->query('status');

        $query = DiasporaAccount::query();

        if ($status) {
            $query->where('verification_status', $status);
        }

        return response()->json([
            'accounts' => $query->orderBy('created_at', 'desc')->paginate(15)
        ]);
    }

    /**
     * Show single Diaspora account
     */
    public function show($id)
    {
        $account = DiasporaAccount::findOrFail($id);
        return response()->json($account);
    }

    public function success()
    {
        return view('diaspora.success');
    }

    
}
