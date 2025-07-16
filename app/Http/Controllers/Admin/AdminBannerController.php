<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;

class AdminBannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banners = Banner::all();
        return view('admin-pages.banners.index', [
            'status' => true,
            'banners' => $banners
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'link' => 'nullable|url|max:255', // Better to validate as a URL if it's a link
            'status' => 'nullable|in:active,inactive',
        ]);

        $imageName = null;

        if ($request->hasFile('image')) {
            $menuPath = 'image/banners/';
            $image = $request->file('image');
            $imageName = uniqid('banner_') . '.' . $image->getClientOriginalExtension();
            $image->move(public_path($menuPath), $imageName);
        }

        Banner::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imageName,
            'link' => $request->link,
            'status' => $request->has('status') ? 'active' : 'inactive',

        ]);

        return redirect()
            ->route('admin.banners.index')
            ->with('success', 'Banner created successfully');
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json([
                'status' => false,
                'message' => 'Banner not found'
            ], 404);
        }

        $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'link' => 'nullable|url|max:255',
            'status' => 'nullable|in:active,inactive',
        ]);

        $imageName = $banner->image; // Preserve existing image if not replaced

        if ($request->hasFile('image')) {
            $menuPath = 'image/banners/';
            $image = $request->file('image');
            $imageName = uniqid('banner_') . '.' . $image->getClientOriginalExtension();
            $image->move(public_path($menuPath), $imageName);

            // Optional: Delete old image
            if ($banner->image && file_exists(public_path($menuPath . $banner->image))) {
                unlink(public_path($menuPath . $banner->image));
            }
        }

        $banner->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'image' => $imageName,
            'link' => $request->input('link'),
            'status' => $request->has('status') ? 'active' : 'inactive',

        ]);

        return redirect()->route('admin.banners.index')->with('success', 'Banner updated successfully');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $banner = Banner::find($id);

        if (!$banner) {
            return response()->json([
                'status' => false,
                'message' => 'Banner not found'
            ], 404);
        }

        $banner->delete();

        return redirect()->route('admin.banners.index')->with('success', 'Banner deleted successfully');
    }
}
