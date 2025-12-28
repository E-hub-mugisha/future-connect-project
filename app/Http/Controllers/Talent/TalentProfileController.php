<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Talent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TalentProfileController extends Controller
{
    public function index()
    {
        $talent = Talent::where('user_id', Auth::id())
            ->with(['feedback', 'courses'])
            ->firstOrFail();

        if (!$talent) {
            return redirect()->back()->with('error', 'Talent profile not found.');
        }

        $categories = Category::all();
        return view('talent-pages.account.index', compact('talent','categories'));
    }
    public function update(Request $request, $id)
    {
        $talent = Talent::findOrFail($id);

        $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'phone' => 'nullable',
            'image' => 'nullable|image|mimes:jpg,jpeg,png',
        ]);

        $data = $request->except('image');

        if ($request->hasFile('image')) {

            $imageName = time() . '.' . $request->image->extension();
            $request->image->storeAs('talents', $imageName, 'public');

            $data['image'] = 'talents/' . $imageName;
        }

        $talent->update($data);

        return back()->with('success', 'Profile updated successfully!');
    }
}
