<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAnnouncementController extends Controller
{
    public function index()
    {
        return view('admin-pages.announcements.index', [
            'announcements' => Announcement::all(),
            'categories' => Category::all(),
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return view('admin-pages.announcements.create-edit', compact('categories'));
    }

    public function edit(Announcement $announcement)
    {
        $categories = Category::all();
        return view('admin-pages.announcements.create-edit', compact('announcement', 'categories'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'link' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $imageName = null;

        if ($image = $request->file('image')) {
            $menuPath = 'image/announcements/';
            $imageName = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move(public_path($menuPath), $imageName);
        }

        $announcement = Announcement::create([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $imageName,
            'link' => $request->link,
            'is_active' => true,
            'category_id' => $request->category_id,
            'created_by' => Auth::id(),
        ]);

        return redirect()->route('admin.announcements.index')->with('success', 'Announcement created successfully');
    }


    public function show($id)
    {
        $announcement = Announcement::with('category')->findOrFail($id);
        return view('admin-pages.announcements.show', compact('announcement'));
    }

    public function update(Request $request, Announcement $announcement)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'link' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'is_active' => 'nullable|boolean',
        ]);

        $imageName = $announcement->image; // Keep existing image by default

        if ($image = $request->file('image')) {
            $menuPath = 'image/announcements/';
            $imageName = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move(public_path($menuPath), $imageName);

            // Optional: Delete old image if exists
            if ($announcement->image && file_exists(public_path($menuPath . $announcement->image))) {
                unlink(public_path($menuPath . $announcement->image));
            }
        }

        $announcement->update([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $imageName,
            'link' => $request->link,
            'is_active' => $request->has('is_active') ? true : false,
            'category_id' => $request->category_id,
        ]);

        return redirect()->route('admin.announcements.index')->with('success', 'Announcement updated successfully');
    }


    public function destroy($id)
    {
        Announcement::findOrFail($id)->delete();
        return redirect()->route('admin.announcements.index')->with('success', 'Announcement deleted successfully');
    }
}
