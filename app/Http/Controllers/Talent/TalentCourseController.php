<?php

namespace App\Http\Controllers\Talent;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TalentCourseController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $talent = $user->talent;
        $courses = Course::where('talent_id', $talent->id)->get();
        return view('talent-pages.courses.index', compact('courses'));
    }  
    public function show($id)
    {
        $course = Course::findOrFail($id);
        return view('talent-pages.courses.show', compact('course'));
    }
    public function create()
    {
        $categories = Category::all();
        return view('talent-pages.courses.create', compact('categories'));
    }
    
}
