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
use App\Models\Course;
use App\Models\Event;
use App\Models\Faq;
use App\Models\JobSection;
use App\Models\Partner;
use App\Models\PricingPlan;
use App\Models\Project;
use App\Models\Skill;
use App\Models\SkillReview;
use App\Models\Story;
use App\Models\StoryComment;
use App\Models\SuccessStory;
use App\Models\SupportTalent;
use App\Models\Testimonial;
use App\Models\TalentFeedback;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    public function index()
    {
        $oneMonthAgo = now()->subMonth();


        $talents = Talent::with([
            'category',
            'feedback',
            'stories'
        ])
            ->take(8)
            ->get();


        $talents->transform(function ($talent) use ($oneMonthAgo) {

            $avgRating = $talent->feedback->avg('rating') ?? 0;
            $feedbackCount = $talent->feedback->count();


            if ($talent->featured) {
                $talent->tag = 'featured';
            } elseif ($feedbackCount >= 20) {
                $talent->tag = 'popular';
            } elseif ($talent->created_at >= $oneMonthAgo) {
                $talent->tag = 'latest';
            } elseif ($avgRating >= 4 && $avgRating < 4.5) {
                $talent->tag = 'recommended';
            } else {
                $talent->tag = 'latest';
            }


            return $talent;
        });



        return Inertia::render('UserPage/Home', [

            'talents' => $talents,


            'skills' => Skill::withCount('reviews')
                ->withAvg('reviews', 'rating')
                ->take(6)
                ->get(),


            'categories' => Category::withCount('talents')
                ->take(10)
                ->get(),


            'popularCategories' => Category::withCount('talents')
                ->orderByDesc('talents_count')
                ->take(3)
                ->get(),


            'stories' => Story::take(6)->get(),


            'testimonials' => Testimonial::with('talent')
                ->inRandomOrder()
                ->take(2)
                ->get(),


            'partners' => Partner::all(),


            'featuredTalents' => Talent::with([
                'category',
                'stories'
            ])
                ->where('featured', 1)
                ->inRandomOrder()
                ->take(4)
                ->get(),


            'courses' => Course::with([
                'category',
                'feedback',
                'talent'
            ])
                ->latest()
                ->take(6)
                ->get(),


            'totalTalents' => Talent::where('status', 'approved')
                ->count(),

        ]);
    }

    public function talents()
    {
        // Fetch featured talents - modify query as needed
        $talents = Talent::with('category', 'feedback', 'stories')->paginate(8);

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


        return Inertia::render('UserPage/SkillsMarketPlace', [
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

        return Inertia::render('UserPage/AboutUs', compact('faqs'));
    }
    public function contact()
    {
        return Inertia::render('UserPage/Contact');
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
        return Inertia::render('UserPage/SkillRegister', ['categories' => \App\Models\Category::all(),]);
    }

    public function showTalents($id)
    {
        $talent = Talent::with(['skills', 'stories', 'courses'])->findOrFail($id);
        return Inertia::render('UserPage/SkillProfile', [
            'talent' => $talent
        ]);
    }
    public function getTalentByCategory($slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();

        $talents = Talent::with('category')
            ->where('status', 'approved')
            ->where('category_id', $category->id)
            ->get();

        return Inertia::render('UserPage/SkillsCategory', [
            'category'   => $category,
            'talents'    => $talents,
            'categories' => Category::all(),
        ]);
    }

    // verified talents
    public function verifiedTalents()
    {
        // Fetch talents with related talent
        $talents = Talent::where('status', array('approved', 'verified'))
            ->get();

        return view('user-page.verified-talents', [
            'talents' => $talents,
            'categories' => \App\Models\Category::all(),
        ]);
    }

    // top rated talents
    public function topRatedTalents()
    {
        // Fetch talents with related talent
        $talents = Talent::with('feedback')
            ->get()
            ->sortByDesc(function ($talent) {
                return $talent->feedback->avg('rating');
            });

        return view('user-page.top-rated-talents', [
            'talents' => $talents,
            'categories' => \App\Models\Category::all(),
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

        return redirect()->back()->with('success', 'Comment added successfully.');
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

        $password = Str::random(8);
        // auto create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($password), // Random password
            'role' => 'talent', // Assign role
        ]);

        $talent = Talent::create([
            'user_id' => $user->id,
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
            Mail::to($talent->email)->send(new TalentRegisteredUser($talent, $password));
        }

        // Send email to admin
        Mail::to('kabosierik@gmail.com')->send(new TalentRegisteredAdmin($talent));

        return redirect()->route('talent.success', $talent->id)->with('success', 'Your profile has been submitted for review.');
    }

    public function talentSuccess($id)
    {
        $talent = Talent::findOrFail($id);

        return Inertia::render('UserPage/SkillRegistrationSuccess', compact('talent'));
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
        return Inertia::render('UserPage/StoryDetails', [
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

        return Inertia::render('UserPage/CategorySkills', [
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

        return Inertia::render('UserPage/CategoryStories', [
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
        return Inertia::render('UserPage/SkillDetails', [
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
        $events = Event::orderBy('created_at', 'desc')->get();
        $projects = Project::orderBy('created_at', 'desc')->get();
        $jobs = JobSection::orderBy('created_at', 'desc')->get();

        return view('user-page.announcement', [
            'announcements' => $announcements,
            'events' => $events,
            'projects' => $projects,
            'jobs' => $jobs
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
        $region   = $request->region;
        $keyword  = $request->keyword;

        $query = Talent::with(['category', 'feedback']); // eager-load for avgRating() and category name

        if ($category) {
            $query->where('category_id', $category);
        }

        if ($region) {
            $query->where('address', 'like', "%$region%");
        }

        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->where('name', 'like', "%$keyword%")
                    ->orWhere('description', 'like', "%$keyword%");
            });
        }

        $talents = $query->get();

        return Inertia::render('UserPage/SearchResults', [
            'talents'    => $talents,
            'categories' => Category::orderBy('name')->get(['id', 'name']),
            'filters'    => $request->only(['keyword', 'category', 'region']),
        ]);
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

        return Inertia::render('UserPage/Stories', compact('featuredStories', 'stories', 'categories'));
    }


    public function blogs(Request $request)
    {
        $query = Blog::query()->where('is_published', true);

        // Category filter
        if ($request->filled('category')) {
            $query->whereHas('category', fn($q) => $q->where('slug', $request->category));
        }

        // Search filter
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        // Sort
        switch ($request->input('sort', 'latest')) {
            case 'oldest':
                $query->oldest();
                break;
            case 'popular':
                $query->orderByDesc('views_count'); // adjust to your actual column
                break;
            default:
                $query->latest();
        }

        $blogs = $query->with(['author', 'category'])
            ->paginate(9)
            ->withQueryString();

        $categories = Category::withCount('blogs')->get();

        $recent = Blog::where('is_published', true)
            ->latest()
            ->take(4)
            ->get();

        return Inertia::render('UserPage/BlogIndex', [
            'blogs' => $blogs->through(fn($blog) => [
                'id' => $blog->id,
                'slug' => $blog->slug,
                'title' => $blog->title,
                'excerpt' => $blog->excerpt,
                'image_url' => $blog->image_url,
                'created_at_formatted' => $blog->created_at->format('M d, Y'),
                'category' => $blog->category ? [
                    'slug' => $blog->category->slug,
                    'name' => $blog->category->name,
                ] : null,
                'author' => $blog->author ? [
                    'name' => $blog->author->name,
                    'avatar_url' => $blog->author->avatar_url,
                ] : null,
            ]), // <-- no ->items() here — keep it as a paginator instance
            'categories' => $categories,
            'recent' => $recent,
            'filters' => [
                'category' => $request->category,
                'search' => $request->search,
                'sort' => $request->input('sort', 'latest'),
            ],
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
        return Inertia::render('UserPage/BlogDetails', compact('blog', 'relatedPosts'));
    }

    public function faq()
    {
        // Fetch FAQs from the database
        $faqs = Faq::all();

        return Inertia::render('UserPage/Faq', compact('faqs'));
    }

    public function howItWorks()
    {
        $successStories = SuccessStory::inRandomOrder()->get();
        return Inertia::render('UserPage/HowItWorks', compact('successStories'));
    }

    public function privacyPolicy()
    {
        return Inertia::render('UserPage/PrivacyPolicy');
    }

    public function termsCondition()
    {
        return Inertia::render('UserPage/TermsCondition');
    }

    public function donationPolicy()
    {
        return Inertia::render('UserPage/DonationPolicy');
    }

    public function pull()
    {

        // Go to your project directory
        $output = [];
        $status = null;

        // Run git commands
        chdir(base_path()); // Ensure you are in project root
        exec('git reset --hard 2>&1', $output, $status);
        exec('git pull origin main 2>&1', $output, $status);

        return response()->json([
            'status' => $status,
            'output' => $output
        ]);
    }

    public function pricing()
    {
        $plans = PricingPlan::with('prices')
            ->where('is_active', true)
            ->get();
        return Inertia::render('UserPage/Pricing', compact('plans'));
    }

    public function successStories(Request $request)
    {
        $search = $request->query('search');
        $role = $request->query('role');

        $stories = SuccessStory::query()
            ->when($search, fn($q) => $q->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('excerpt', 'like', "%{$search}%")
                    ->orWhere('author_name', 'like', "%{$search}%");
            }))
            ->when($role, fn($q) => $q->where('role', $role))
            ->latest()
            ->paginate(9)
            ->withQueryString();

        $roles = SuccessStory::whereNotNull('role')
            ->where('role', '!=', '')
            ->distinct()
            ->orderBy('role')
            ->pluck('role');

        return Inertia::render('UserPage/SuccessStories', [
            'stories' => $stories,
            'search' => $search,
            'role' => $role,
            'roles' => $roles,
        ]);
    }

    // success story store
    public function storeSuccessStory(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'thumbnail_url' => 'nullable|image|mimes:jpg,jpeg,png,svg|max:2048',
            'excerpt' => 'required|string|max:500',
            'content' => 'required|string',
            'author_name' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
        ]);

        $thumbnailPath = null;
        if ($image = $request->file('thumbnail_url')) {
            $path = 'image/success-stories/';
            $thumbnailPath = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move(public_path($path), $thumbnailPath);
        }

        SuccessStory::create([
            'title' => $request->title,
            'thumbnail_url' => $thumbnailPath,
            'excerpt' => $request->excerpt,
            'content' => $request->content,
            'author_name' => $request->author_name,
            'role' => $request->role,
        ]);

        return redirect()->back()->with('success', 'Success story submitted successfully!');
    }

    public function addFaqStore(Request $request)
    {
        $request->validate([
            'question' => 'required|string|max:255',
        ]);

        Faq::create($request->all());

        return redirect()->back()->with('success', 'FAQ added successfully!');
    }

    /**
     * For Students — "Launch your career with confidence"
     */
    public function students()
    {
        return Inertia::render('UserPage/ForStudents', [
            'stats' => [
                'skills_listed'    => '8K+',
                'employer_reach'   => '3x',
                'verified_profiles' => '100%',
            ],
        ]);
    }

    /**
     * For NGOs — "Partner with skilled local talent"
     */
    public function ngos()
    {
        return Inertia::render('UserPage/ForNGOs');
    }

    /**
     * For Companies — "Find verified and sharp skills faster"
     */
    public function companies()
    {
        return Inertia::render('UserPage/ForCompanies');
    }

    /**
     * For Professionals — "Grow your network and opportunities"
     */
    public function professionals()
    {
        return Inertia::render('UserPage/ForProfessionals');
    }

    /**
     * For Universities — "Empower students beyond graduation"
     */
    public function universities()
    {
        return Inertia::render('UserPage/ForUniversities', [
            'dashboard' => [
                'students_onboarded'      => 1240,
                'verified_profile_pct'    => 82,
                'placement_rate_pct'      => 68,
                'active_employer_partners' => 54,
            ],
        ]);
    }

    /**
     * For Investors — "Discover skills worth investing in"
     */
    public function investors()
    {
        return Inertia::render('UserPage/ForInvestors', [
            'trends' => [
                ['name' => 'Digital Marketing',     'growth' => 38, 'bar' => 80],
                ['name' => 'Software Development',  'growth' => 31, 'bar' => 70],
                ['name' => 'Writing & Content',      'growth' => 22, 'bar' => 55],
                ['name' => 'Design & Creative',      'growth' => 19, 'bar' => 48],
            ],
        ]);
    }

    public function partnerships()
    {
        return Inertia::render('UserPage/Partnerships', [
            'partners' => Partner::all(),
        ]);
    }
}
