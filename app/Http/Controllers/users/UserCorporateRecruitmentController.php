<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\CorporateRecruitment;
use Illuminate\Http\Request;

class UserCorporateRecruitmentController extends Controller
{
    // List all active posts
    public function index(Request $request)
    {
        $query = CorporateRecruitment::where('status', 'active');

        // Filters
        if ($request->filled('skills')) {
            $query->where('skills', 'like', "%{$request->skills}%");
        }
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }
        if ($request->filled('region')) {
            $query->where('region', $request->region);
        }

        $recruitments = $query->paginate(10);

        return view('user-page.corporate.index', compact('recruitments'));
    }

    // Show details
    public function show(CorporateRecruitment $corporateRecruitment)
    {
        return view('user-page.corporate.show', compact('corporateRecruitment'));
    }
}
