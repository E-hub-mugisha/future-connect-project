<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PricingPlan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PricingPlanController extends Controller
{
    public function index()
    {
        $plans = PricingPlan::with('prices')
            ->orderBy('is_featured', 'desc')
            ->orderBy('name')
            ->get()
            ->map(fn ($plan) => $this->transformPlan($plan));

        return Inertia::render('AdminPage/PricingPlans/Index', [
            'plans' => $plans,
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminPage/PricingPlans/Create');
    }

    public function store(Request $request)
    {
        $validated = $this->validatePlan($request);

        $plan = PricingPlan::create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
            'features' => $validated['features'] ?? [],
            'is_featured' => $validated['is_featured'] ?? false,
            'is_active' => $validated['is_active'] ?? true,
        ]);

        $this->syncPrices($plan, $validated);

        return redirect()
            ->route('admin.pricing-plans.index')
            ->with('success', "\"{$plan->name}\" plan was created.");
    }

    public function edit(PricingPlan $pricingPlan)
    {
        return Inertia::render('AdminPage/PricingPlans/Edit', [
            'plan' => $this->transformPlan($pricingPlan->load('prices')),
        ]);
    }

    public function update(Request $request, PricingPlan $pricingPlan)
    {
        $validated = $this->validatePlan($request);

        $pricingPlan->update([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
            'features' => $validated['features'] ?? [],
            'is_featured' => $validated['is_featured'] ?? false,
            'is_active' => $validated['is_active'] ?? true,
        ]);

        $this->syncPrices($pricingPlan, $validated);

        return redirect()
            ->route('admin.pricing-plans.index')
            ->with('success', "\"{$pricingPlan->name}\" plan was updated.");
    }

    public function destroy(PricingPlan $pricingPlan)
    {
        $name = $pricingPlan->name;
        $pricingPlan->prices()->delete();
        $pricingPlan->delete();

        return redirect()
            ->route('admin.pricing-plans.index')
            ->with('success', "\"{$name}\" plan was deleted.");
    }

    protected function validatePlan(Request $request): array
    {
        return $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'features' => 'nullable|array',
            'features.*' => 'string|max:255',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
            'monthly_price' => 'nullable|numeric|min:0',
            'annual_price' => 'nullable|numeric|min:0',
        ]);
    }

    protected function syncPrices(PricingPlan $plan, array $validated): void
    {
        if ($validated['monthly_price'] !== null && $validated['monthly_price'] !== '') {
            $plan->prices()->updateOrCreate(
                ['billing_cycle' => 'monthly'],
                ['price' => $validated['monthly_price']]
            );
        }

        if ($validated['annual_price'] !== null && $validated['annual_price'] !== '') {
            $plan->prices()->updateOrCreate(
                ['billing_cycle' => 'annually'],
                ['price' => $validated['annual_price']]
            );
        }
    }

    protected function transformPlan(PricingPlan $plan): array
    {
        return [
            'id' => $plan->id,
            'name' => $plan->name,
            'description' => $plan->description,
            'features' => $plan->features ?? [],
            'is_featured' => $plan->is_featured,
            'is_active' => $plan->is_active,
            'monthly_price' => optional($plan->prices->firstWhere('billing_cycle', 'monthly'))->price,
            'annual_price' => optional($plan->prices->firstWhere('billing_cycle', 'annually'))->price,
        ];
    }
}