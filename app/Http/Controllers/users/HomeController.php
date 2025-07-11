<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;
use App\Models\Talent;
use App\Models\Category;
use App\Models\Skill;
use App\Models\SkillReview;
use App\Models\Story;
use App\Models\StoryComment;
use App\Models\SupportTalent;
use App\Models\Testimonial;
use App\Models\TalentFeedback;

class HomeController extends Controller
{
    public function index()
    {

        $skills = Skill::withCount('reviews')->withAvg('reviews', 'rating')->get();

        return view('user-page.home', [
            'talents' => \App\Models\Talent::withCount('stories')->take(8)->get(),
            'categories' => \App\Models\Category::withCount('talents')->take(10)->get(),
            'stories' => \App\Models\Story::all(),
            'skills' => $skills,
            'testimonials' => \App\Models\Testimonial::with('talent')->inRandomOrder()->take(2)->get(),
            'partners' => \App\Models\Partner::all(), // Fetch only active partners
        ]);
    }
    public function talents()
    {
        // Fetch featured talents - modify query as needed
        $talents = Talent::all();


        return view('user-page.talents', [
            'talents' => $talents,
        ]);
    }

    public function about()
    {
        return view('user-page.about');
    }
    public function contact()
    {
        return view('user-page.contact');
    }

    public function categories()
    {
        return view('user-page.categories', ['categories' => \App\Models\Category::all(),]);
    }
    public function RegisterAsTalent()
    {
        return view('user-page.register-as-talent', ['categories' => \App\Models\Category::all(),]);
    }

    public function showTalents($id)
    {
        $talent = Talent::with(['skills', 'stories'])->findOrFail($id);
        return view('user-page.talent-details', [
            'talent' => $talent
        ]);
    }
    public function getTalentByCategory($slug)
    {
        // Find the category by slug or fail
        $category = Category::where('slug', $slug)->firstOrFail();

        // Fetch talents with related talent
        $talents = Talent::where('category_id', $category->id)
            ->get();

        return view('user-page.category-talents', [
            'categoryName' => $category->name,
            'talents' => $talents,
        ]);
    }
    public function TalentSkillDetails($id)
    {
        $skill = \App\Models\Skill::with('reviews')->findOrFail($id);
        return response()->json($skill);
    }

    public function stories()
    {
        // Fetch all stories, eager load relationships if needed (like talent or category)
        $stories = Story::orderBy('created_at', 'desc')->get();

        $categories = Category::all();
        // Return the Blade view with stories
        return view('user-page.stories', [
            'stories' => $stories,
            'categories' => $categories
        ]);
    }
    public function skills()
    {
        // Fetch all stories, eager load relationships if needed (like talent or category)
        $skills = Skill::orderBy('created_at', 'desc')->get();

        // Return the Blade view with skills
        return view('user-page.skills', [
            'skills' => $skills,
            'categories' => \App\Models\Category::all(),
        ]);
    }
    public function storeReview(Request $request, $id)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'rating' => 'required|integer|min:1|max:5',
            'message' => 'required|string',
        ]);

        $data['skill_id'] = $id;

        $review = SkillReview::create($data);

        return response()->json(['message' => 'Review submitted successfully', 'review' => $review]);
    }
    // Store a new comment for a story
    public function storeStoryComment(Request $request)
    {
        $data = $request->validate([
            'name'    => 'required|string|max:100',
            'email'   => 'required|email',
            'comment' => 'required|string',
            'rating'  => 'nullable|integer|min:1|max:5',
            'story_id' => 'required|exists:stories,id',
        ]);

        $comment = StoryComment::create($data);

        return redirect()->back()->with('success', 'Talent registered successfully.');
    }
    public function storeTalent(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'skill' => 'required|string',
            'story' => 'nullable|string',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'address' => 'nullable|string',
            'phone' => 'nullable|string',
            'email' => 'nullable|email',
            'language' => 'nullable|string',
        ]);

        $talent = Talent::create($request->all());
        return redirect()->back()->with('success', 'Talent registered successfully.');
    }
    public function storyDetails($slug)
    {
        $story = \App\Models\Story::where('slug', $slug)->with('comments')->firstOrFail();

        // Fetch related stories based on category (excluding the current story)
        $relatedStories = \App\Models\Story::where('category_id', $story->category_id)
            ->where('id', '!=', $story->id)
            ->latest()
            ->take(3) // Limit to 3 related stories
            ->get();
        return view('user-page.story-details', [
            'story' => $story,
            'comments' => $story->comments,
            'relatedStories' => $relatedStories,
        ]);
    }

    public function random()
    {
        return Testimonial::with('talent')->inRandomOrder()->take(2)->get();
    }

    public function getByCategory($slug)
    {
        // Find the category by slug or fail
        $category = Category::where('slug', $slug)->firstOrFail();

        // Fetch skills with related talent
        $skills = Skill::with('talent')
            ->where('category_id', $category->id)
            ->get();

        return view('user-page.category-skills', [
            'categoryName' => $category->name,
            'skills' => $skills,
        ]);
    }
    public function getStoryByCategory($slug)
    {
        // Find the category by slug or fail
        $category = Category::where('slug', $slug)->firstOrFail();

        // Fetch stories with related talent
        $stories = Story::where('category_id', $category->id)
            ->get();

        return view('user-page.category-story', [
            'categoryName' => $category->name,
            'stories' => $stories,
        ]);
    }
    public function skillDetails($slug)
    {
        $skill = \App\Models\Skill::where('slug', $slug)->firstOrFail();

        $relatedSkills = \App\Models\Skill::where('category_id', $skill->category_id)
            ->where('id', '!=', $skill->id)
            ->latest()
            ->take(3) // Limit to 3 related stories
            ->get();
        return view('user-page.skill-details', [
            'skill' => $skill,
            'relatedSkills' => $relatedSkills,
        ]);
    }

    public function relatedSkills($categoryId)
    {
        $excludeId = request()->query('exclude');

        $query = Skill::with(['category', 'talent'])
            ->where('category_id', $categoryId);

        if ($excludeId) {
            $query->where('id', '!=', $excludeId);
        }

        $skills = $query->latest()->take(6)->get();

        return response()->json([
            'skills' => $skills
        ]);
    }
    public function withTalentCount()
    {
        $categories = Category::withCount('talents')->get();

        return response()->json($categories);
    }
    public function announcements()
    {
        $announcements = Announcement::orderBy('created_at', 'desc')->get();

        return view('user-page.announcement', [
            'announcements' => $announcements
        ]);
    }
    public function uploadStory()
    {
        return view('user-page.upload-story', ['categories' => \App\Models\Category::all(),]);
    }
    public function matchedTalents()
    {
        $matchedTalents = \App\Models\Talent::where('matched', true)->get();

        return view('user-page.talent-showroom', [
            'matchedTalents' => $matchedTalents
        ]);
    }
    public function search(Request $request)
    {
        $category = $request->category;
        $region = $request->region;
        $keyword = $request->keyword;

        $query = Talent::query();

        if ($category) {
            $query->where('category_id', $category);
        }

        if ($region) {
            $query->where('address', 'like', "%$region%");
        }

        if ($keyword) {
            $query->where('name', 'like', "%$keyword%")
                ->orWhere('skills', 'like', "%$keyword%");
        }

        $talents = $query->get();

        return view('user-page.search-results', compact('talents'));
    }


    public function storeFeedback(Request $request)
    {
        $request->validate([
            'talent_id' => 'required|exists:talents,id',
            'name' => 'required|string|max:255',
            'email' => 'nullable|email',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string',
        ]);

        TalentFeedback::create($request->all());

        return back()->with('success', 'Thank you for your feedback!');
    }

    public function storeSupport(Request $request)
    {
        $request->validate([
            'talent_id' => 'required|exists:talents,id',
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email',
            'amount' => 'required|numeric|min:1',
            'message' => 'nullable|string',
        ]);

        SupportTalent::create($request->all());

        return back()->with('success', 'Support sent successfully!');
    }

    public function storyFilter(Request $request)
    {
        $category = $request->category;
        $tags = $request->tags;
        $keyword = $request->keyword;
        $query = Story::query();

        // Filter by Keyword
        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->where('title', 'like', '%' . $keyword . '%')
                    ->orWhere('content', 'like', '%' . $keyword . '%');
            });
        }

        // Filter by Category
        if ($category) {
            $query->where('category_id', $category);
        }

        // Filter by Tags (tags stored as comma-separated string)
        if ($request->has('tags')) {
            $tags = $request->tags;
            $query->where(function ($q) use ($tags) {
                foreach ($tags as $tag) {
                    $q->orWhere('tags', 'like', '%' . $tag . '%');
                }
            });
        }

        $stories = $query->get();
        $categories = Category::all();

        return view('user-page.stories', compact('stories', 'categories'));
    }
}
