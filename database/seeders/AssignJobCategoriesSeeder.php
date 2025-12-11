<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JobCategory;
use App\Models\JobSection;

class AssignJobCategoriesSeeder extends Seeder
{
    public function run()
    {
        $categories = JobCategory::all();

        if ($categories->count() == 0) {
            $this->command->warn("⚠ No job categories found. Please seed JobCategorySeeder first.");
            return;
        }

        JobSection::chunk(50, function ($jobs) use ($categories) {
            foreach ($jobs as $job) {
                $job->update([
                    'job_category_id' => $categories->random()->id
                ]);
            }
        });

        $this->command->info("✅ Job categories assigned successfully!");
    }
}
