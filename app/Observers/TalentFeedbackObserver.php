<?php

namespace App\Observers;

use App\Models\TalentFeedback;

class TalentFeedbackObserver
{
    /**
     * Triggered when a new feedback is created
     */
    public function created(TalentFeedback $feedback): void
    {
        $talent = $feedback->talent;

        // Calculate the current average rating for this talent
        $avg = $talent->feedback()->avg('rating');

        // Determine the new level based on thresholds
        $level = match (true) {
            $avg >= 4.5 => 'advanced',
            $avg >= 3   => 'intermediate',
            default     => 'beginner',
        };

        // Update the talent's level
        $talent->update(['level' => $level]);
    }

    /**
     * Optional: also update if feedback is updated or deleted
     */
    public function updated(TalentFeedback $feedback): void
    {
        $this->created($feedback); // reuse logic
    }

    public function deleted(TalentFeedback $feedback): void
    {
        $this->created($feedback); // reuse logic
    }
}
