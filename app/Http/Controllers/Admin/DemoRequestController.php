<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DemoRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DemoRequestController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->query('status');
        $search = $request->query('search');
 
        $demoRequests = DemoRequest::query()
            ->when($status, fn ($query) => $query->where('status', $status))
            ->when($search, function ($query) use ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('full_name', 'like', "%{$search}%")
                        ->orWhere('work_email', 'like', "%{$search}%")
                        ->orWhere('company_name', 'like', "%{$search}%")
                        ->orWhere('phone', 'like', "%{$search}%");
                });
            })
            ->orderByDesc('created_at')
            ->paginate(15)
            ->withQueryString();
 
        $statusCounts = DemoRequest::query()
            ->selectRaw('status, count(*) as count')
            ->groupBy('status')
            ->pluck('count', 'status');
 
        return Inertia::render('AdminPage/DemoRequests/Index', [
            'demoRequests' => $demoRequests,
            'filters' => [
                'status' => $status,
                'search' => $search,
            ],
            'statusCounts' => $statusCounts,
        ]);
    }
 
    public function show(DemoRequest $demoRequest)
    {
        return Inertia::render('AdminPage/DemoRequests/Show', [
            'demoRequest' => $demoRequest,
        ]);
    }
 
    public function confirm(DemoRequest $demoRequest)
    {
        $demoRequest->update(['status' => 'scheduled']);
 
        return back()->with('success', "Demo request from {$demoRequest->full_name} was confirmed.");
    }
 
    public function cancel(DemoRequest $demoRequest)
    {
        $demoRequest->update(['status' => 'cancelled']);
 
        return back()->with('success', "Demo request from {$demoRequest->full_name} was cancelled.");
    }
 
    public function complete(DemoRequest $demoRequest)
    {
        $demoRequest->update(['status' => 'completed']);
 
        return back()->with('success', "Demo request from {$demoRequest->full_name} marked as completed.");
    }
 
    public function destroy(DemoRequest $demoRequest)
    {
        $name = $demoRequest->full_name;
        $demoRequest->delete();
 
        return redirect()
            ->route('admin.demo-requests.index')
            ->with('success', "Demo request from {$name} was deleted.");
    }
}
