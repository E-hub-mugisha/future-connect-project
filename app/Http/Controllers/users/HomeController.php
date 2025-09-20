<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Mail\TalentRegisteredAdmin;
use App\Mail\TalentRegisteredUser;
use App\Models\Announcement;
use App\Models\Blog;
use Illuminate\Http\Request;
use App\Models\Talent;
use App\Models\Category;
use App\Models\Contact;
use App\Models\Faq;
use App\Models\Partner;
use App\Models\Skill;
use App\Models\SkillReview;
use App\Models\Story;
use App\Models\StoryComment;
use App\Models\SupportTalent;
use App\Models\Testimonial;
use App\Models\TalentFeedback;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function index()
    {

        $skills = Skill::withCount('reviews')->withAvg('reviews', 'rating')->get();

        $talents = Talent::with('category', 'feedback', 'stories')->get();

        $now = Carbon::now();
        $oneMonthAgo = $now->copy()->subMonth();

        $talents->transform(function ($talent) use ($oneMonthAgo) {
            $avgRating = $talent->feedback->avg('rating') ?? 0;
            $feedbackCount = $talent->feedback->count();
            $createdAt = $talent->created_at;

            if ($talent->featured) {
                $talent->tag = 'featured';
            } elseif ($feedbackCount >= 20) {
                $talent->tag = 'popular';
            } elseif ($createdAt >= $oneMonthAgo) {
                $talent->tag = 'latest';
            } elseif ($avgRating >= 4 && $avgRating < 4.5) {
                $talent->tag = 'recommended';
            } else {
                $talent->tag = 'latest';
            }

            return $talent;
        });

        return view('user-page.home', [
            'talents' => $talents,
            'categories' => Category::withCount('talents')->take(10)->get(),
            'popularCategories' => Category::withCount('talents')
                ->orderBy('talents_count', 'desc')
                ->take(3)
                ->get(),
            'stories' => Story::all(),
            'skills' => $skills,
            'testimonials' => Testimonial::with('talent')->inRandomOrder()->take(2)->get(),
            'partners' => Partner::all(), // Fetch only active partners
            'featuredTalents' => Talent::inRandomOrder()->where('featured', 1)->take(4)->get(),
        ]);
    }
    public function talents()
    {
        // Fetch featured talents - modify query as needed
        $talents = Talent::with('category', 'feedback', 'stories')->get();

        $now = Carbon::now();
        $oneMonthAgo = $now->copy()->subMonth();

        $talents->transform(function ($talent) use ($oneMonthAgo) {
            $avgRating = $talent->feedback->avg('rating') ?? 0;
            $feedbackCount = $talent->feedback->count();
            $createdAt = $talent->created_at;

            if ($talent->featured) {
                $talent->tag = 'featured';
            } elseif ($feedbackCount >= 20) {
                $talent->tag = 'popular';
            } elseif ($createdAt >= $oneMonthAgo) {
                $talent->tag = 'latest';
            } elseif ($avgRating >= 4 && $avgRating < 4.5) {
                $talent->tag = 'recommended';
            } else {
                $talent->tag = 'latest';
            }

            return $talent;
        });


        return view('user-page.talents', [
            'talents' => $talents,
            'categories' => Category::withCount('talents')->take(10)->get(),
            'featuredTalents' => Talent::inRandomOrder()->where('featured', 1)->get(),
            'popularCategories' => Category::withCount('talents')
                ->orderBy('talents_count', 'desc')
                ->take(3)
                ->get(),
        ]);
    }

    public function talentStories($id)
    {
        $categories = Category::all();
        $talent = Talent::with(['stories', 'category'])->findOrFail($id);
        return view('user-page.talent-stories', compact('talent', 'categories'));
    }

    public function about()
    {
        $faqs = Faq::all();

        return view('user-page.about', compact('faqs'));
    }
    public function contact()
    {
        return view('user-page.contact');
    }

    public function contactSend(Request $request)
    {
        $data = $request->validate([
            'names' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        $data = Contact::create($data);

        return redirect()->back();
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
        $stories = Story::orderBy('created_at', 'desc')->paginate(9);

        $categories = Category::all();
        // Return the Blade view with stories
        return view('user-page.stories', [
            'stories' => $stories,
            'featuredStories' => Story::inRandomOrder()->take(4)->get(),
            'categories' => Category::withCount('stories')->take(10)->get(),
        ]);
    }
    public function logView(Request $request)
    {
        $request->validate(['story_id' => 'required|integer|exists:stories,id']);

        $story = Story::findOrFail($request->story_id);
        // Example: increment a views column
        $story->increment('views');

        return response()->json(['status' => 'success']);
    }
    public function skills()
    {
        // Fetch all stories, eager load relationships if needed (like talent or category)
        $skills = Skill::orderBy('created_at', 'desc')->paginate(9);

        // Return the Blade view with skills
        return view('user-page.skills', [
            'skills' => $skills,
            'categories' => \App\Models\Category::all(),
        ]);
    }
    public function storeReview(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string',
        ]);

        SkillReview::create([
            'skill_id' => $id,
            'name' => $request->name,
            'email' => $request->email,
            'rating' => $request->rating,
            'message' => $request->comment,
        ]);

        return back()->with('success', 'Review submitted successfully!');
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

        $talent = Talent::create([
            'name' => $request->name,
            'featured' => $request->has('featured') ? 1 : 0,
            'description' => $request->description,
            'image' => $talentImage,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
            'language' => $request->language,
            'category_id' => $request->category_id,
        ]);

        // Send email to user
        if ($talent->email) {
            Mail::to($talent->email)->send(new TalentRegisteredUser($talent));
        }

        // Send email to admin
        Mail::to('kabosierik@gmail.com')->send(new TalentRegisteredAdmin($talent));

        return redirect()->route('talent.success', $talent->id);
    }

    public function talentSuccess($id)
    {
        $talent = Talent::findOrFail($id);

        return view('user-page.talent-success', compact('talent'));
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
            'categories' => Category::withCount('stories')->take(10)->get(),
        ]);
    }
    public function skillDetails($slug)
    {
        $skill = Skill::with(['reviews'])->where('slug', $slug)->firstOrFail();

        // Calculate rating stats
        $totalReviews = $skill->reviews->count();
        $averageRating = $totalReviews > 0 ? round($skill->reviews->avg('rating'), 1) : 0;

        $ratingsCount = [
            5 => $skill->reviews->where('rating', 5)->count(),
            4 => $skill->reviews->where('rating', 4)->count(),
            3 => $skill->reviews->where('rating', 3)->count(),
            2 => $skill->reviews->where('rating', 2)->count(),
            1 => $skill->reviews->where('rating', 1)->count(),
        ];

        $relatedSkills = Skill::where('category_id', $skill->category_id)
            ->where('id', '!=', $skill->id)
            ->latest()
            ->take(3) // Limit to 3 related stories
            ->get();
        return view('user-page.skill-details', [
            'skill' => $skill,
            'relatedSkills' => $relatedSkills,
            'totalReviews' => $totalReviews,
            'averageRating' => $averageRating,
            'ratingsCount' => $ratingsCount,
            'reviews' => $skill->reviews()->latest()->paginate(5),
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
    public function announcementDetails($id)
    {
        $announcement = Announcement::findOrFail($id);

        $relatedAnnouncements = Announcement::where('category_id', $announcement->category_id)
            ->where('id', '!=', $announcement->id)
            ->latest()
            ->take(4)
            ->get();

        return view('user-page.announcement-details', [
            'announcement' => $announcement,
            'relatedAnnouncements' => $relatedAnnouncements
        ]);
    }

    // AnnouncementController.php
    public function addComment(Request $request, Announcement $announcement)
    {
        $request->validate([
            'content' => 'required|string|max:1000',
        ]);

        $announcement->comments()->create([
            'user_id' => auth()->id(),
            'content' => $request->content,
        ]);

        return back()->with('success', 'Comment added successfully!');
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

        // ✅ Use paginate instead of get
        $stories = $query->paginate(10);

        $categories = Category::all();
        $featuredStories = Story::inRandomOrder()->take(4)->get();

        return view('user-page.stories', compact('featuredStories', 'stories', 'categories'));
    }


    public function blogs()
    {
        // Fetch all blogs, eager load relationships if needed (like author or category)
        $blogs = Blog::orderBy('created_at', 'desc')->paginate(9);

        $categories = Category::all();
        // Return the Blade view with blogs
        return view('user-page.blogs', [
            'blogs' => $blogs,
            'categories' => $categories
        ]);
    }

    public function blogDetails($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        $relatedPosts = Blog::where('category_id', $blog->category_id)
            ->where('id', '!=', $blog->id)
            ->where('is_published', true)
            ->latest()
            ->take(5)
            ->get();
        return view('user-page.blog-details', compact('blog', 'relatedPosts'));
    }

    public function faq()
    {
        // Fetch FAQs from the database
        $faqs = Faq::all();

        return view('user-page.faq', compact('faqs'));
    }

    public function howItWorks()
    {
        // If you want, pass dynamic data here (e.g., steps from DB)
        return view('user-page.how-it-works');
    }

    public function privacyPolicy()
    {
        return view('user-page.privacy-policy');
    }

    public function termsCondition()
    {
        return view('user-page.terms-condition');
    }

    public function donationPolicy()
    {
        return view('user-page.donate');
    }
}
