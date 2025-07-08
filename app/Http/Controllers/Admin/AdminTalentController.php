<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Talent;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AdminTalentController extends Controller
{
    public function index()
    {
        $talents = Talent::all();
        $categories = Category::all();

        return view('admin-pages.talents.index', compact('talents', 'categories'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'skill' => 'required|string',
            'story' => 'nullable|string',
            'rating' => 'nullable|integer|min:0|max:5',
            'featured' => 'boolean',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:2048',
            'address' => 'nullable|string',
            'phone' => 'nullable|string',
            'email' => 'nullable|email',
            'language' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $talentImage = null;
        if ($image = $request->file('image')) {
            $path = 'image/talents/';
            $talentImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move(public_path($path), $talentImage);
        }

        Talent::create([
            'name' => $request->name,
            'skill' => $request->skill,
            'story' => $request->story,
            'rating' => $request->rating,
            'featured' => $request->has('featured') ? 1 : 0,
            'description' => $request->description,
            'image' => $talentImage,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
            'language' => $request->language,
            'category_id' => $request->category_id,
        ]);

        session()->flash('success', 'Talent registered successfully.');
        return redirect()->back();
    }

    public function show($id)
    {
        return Talent::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        Log::info('Update hit', $request->all()); // add this
        // ✅ Validate input
        $request->validate([
            'name' => 'required|string',
            'skill' => 'required|string',
            'story' => 'nullable|string',
            'rating' => 'nullable|integer|min:0|max:5',
            'featured' => 'nullable|boolean',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:2048',
            'address' => 'nullable|string',
            'phone' => 'nullable|string',
            'email' => 'nullable|email',
            'language' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        // ✅ Find the talent record
        $talent = Talent::findOrFail($id);

        // ✅ Handle image upload
        $imageName = $talent->image; // Keep current image if no new one is uploaded

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = 'image/talents/';
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path($path), $imageName); 
        }

        // ✅ Update talent fields
        $talent->update([
            'name'        => $request->name,
            'skill'       => $request->skill,
            'story'       => $request->story,
            'rating'      => $request->rating,
            'featured'    => $request->has('featured') ? 1 : 0, // checkbox
            'description' => $request->description,
            'image'       => $imageName,
            'address'     => $request->address,
            'phone'       => $request->phone,
            'email'       => $request->email,
            'language'    => $request->language,
            'category_id' => $request->category_id,
        ]);

        // ✅ Flash success message & redirect to index
        return redirect()->route('admin.talents')->with('success', 'Talent updated successfully.');
    }


    public function destroy($id)
    {
        $talent = Talent::findOrFail($id);

        if ($talent->image && file_exists(public_path('image/talents/' . $talent->image))) {
            unlink(public_path('image/talents/' . $talent->image));
        }
        $talent->delete();
        return response()->json(['message' => 'Talent deleted successfully']);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:pending,approved,rejected'
        ]);

        $talent = Talent::findOrFail($id);
        $talent->status = $request->status;
        $talent->save();

        return redirect()->back();
    }
}
