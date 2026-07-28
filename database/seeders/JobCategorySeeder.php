<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class JobCategorySeeder extends Seeder
{
    public function run(): void
    {
        $parents = [
            'Information Technology', 'Construction & Engineering', 'Agriculture & Agribusiness',
            'Hospitality & Tourism', 'Finance & Accounting', 'Education & Training',
            'Health & Wellness', 'Sales & Marketing',
        ];

        foreach ($parents as $name) {
            DB::table('job_categories')->insert([
                'name' => $name,
                'slug' => Str::slug($name),
                'parent_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        $parentIds = DB::table('job_categories')->pluck('id', 'name');

        $children = [
            ['name' => 'Software Engineering', 'parent' => 'Information Technology'],
            ['name' => 'Civil Engineering', 'parent' => 'Construction & Engineering'],
        ];

        foreach ($children as $c) {
            DB::table('job_categories')->insert([
                'name' => $c['name'],
                'slug' => Str::slug($c['name']),
                'parent_id' => $parentIds[$c['parent']],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
