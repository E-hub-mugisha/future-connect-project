<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;

class AdminPartnerController extends Controller
{
    public function index()
    {
        $partners = Partner::all();
        return view('admin-pages.partners.index', compact('partners'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'logo' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:2048',
            'link' => 'nullable|string',
            'status' => 'nullable|boolean',
        ]);

        $logoName = null;
        if ($logo = $request->file('logo')) {
            $path = 'image/partners/';
            $logoName = date('YmdHis') . "." . $logo->getClientOriginalExtension();
            $logo->move(public_path($path), $logoName);
        }

        Partner::create([
            'name' => $request->name,
            'description' => $request->description,
            'logo' => $logoName,
            'link' => $request->link,
            'status' => $request->has('status') ? 1 : 0,
        ]);

        return redirect()->back()->with('success', 'Partner added successfully');
    }

    public function update(Request $request, Partner $partner)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'logo' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:2048',
            'link' => 'nullable|string',
            'status' => 'nullable|boolean',
        ]);

        $logoName = $partner->logo;

        if ($logo = $request->file('logo')) {
            $path = 'image/partners/';
            $logoName = date('YmdHis') . "." . $logo->getClientOriginalExtension();
            $logo->move(public_path($path), $logoName);

            if ($partner->logo && file_exists(public_path($path . $partner->logo))) {
                unlink(public_path($path . $partner->logo));
            }
        }

        $partner->update([
            'name' => $request->name,
            'description' => $request->description,
            'logo' => $logoName,
            'link' => $request->link,
            'status' => $request->has('status') ? 1 : 0,
        ]);

        return redirect()->back()->with('success', 'Partner updated successfully');
    }

    public function destroy(Partner $partner)
    {
        if ($partner->logo && file_exists(public_path('image/partners/' . $partner->logo))) {
            unlink(public_path('image/partners/' . $partner->logo));
        }

        $partner->delete();

        return redirect()->back()->with('success', 'Partner deleted successfully');
    }
}
