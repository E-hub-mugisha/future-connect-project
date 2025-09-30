<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Talent;
use Illuminate\Support\Facades\DB;

class PromoteTalentLevels extends Command
{
    protected $signature = 'talents:promote';
    protected $description = 'Promote talents according to their feedback ratings';

    public function handle(): void
    {
        // Fetch talents with their average rating
        $talents = Talent::withAvg('feedback', 'rating')->get();

        foreach ($talents as $talent) {
            $avg = $talent->feedbacks_avg_rating ?? 0;
            $level = 'beginner';

            if ($avg >= 4.5) {
                $level = 'advanced';
            } elseif ($avg >= 3) {
                $level = 'intermediate';
            }

            $talent->update(['level' => $level]);
        }

        $this->info('Talent levels updated successfully!');
    }
}
